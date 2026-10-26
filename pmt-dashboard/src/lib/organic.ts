import { addDays, daysBetween, eachDay, overlapDays, type DateRange, type ISODate } from './dates';
import type { OrganicEntry, OrganicMetric, Platform } from './types';

export const ORGANIC_METRICS: Record<OrganicMetric, { label: string; help: string; pointInTime?: boolean }> = {
  views: { label: 'Views', help: 'How many times posts, reels and stories were seen.' },
  reach: { label: 'Accounts reached', help: 'How many different accounts saw the page or profile.' },
  viewers: { label: 'Viewers', help: 'How many different accounts viewed content.' },
  followers_total: { label: 'Total followers', help: 'Followers on that date.', pointInTime: true },
  followers_net: { label: 'New followers (net)', help: 'New follows minus unfollows.' },
  follows: { label: 'New follows', help: 'People who started following.' },
  unfollows: { label: 'Unfollows', help: 'People who stopped following.' },
  profile_visits: { label: 'Profile visits', help: 'Times people opened the profile or page.' },
  link_taps: { label: 'Bio link taps', help: 'Taps on the website link in the Instagram bio (Meta calls these "external link taps").' },
  website_clicks: { label: 'Page website clicks', help: 'Clicks on the website button on the Facebook Page.' },
  interactions: { label: 'Engagement', help: 'Likes, comments, shares, saves and replies (Meta: "content interactions").' },
  messages: { label: 'Messages started', help: 'New conversations people started in Messenger or Instagram DMs.' },
  video_views: { label: 'Video views', help: 'Times videos were watched.' },
};

export interface Period extends DateRange {
  value: number;
  derived: boolean;
  includesAds: boolean;
  prevValue?: number | null;
}

const key = (r: DateRange) => `${r.start}|${r.end}`;

/**
 * Rolling-window numbers (e.g. "last 30 / 60 / 90 days" from the app) overlap.
 * Subtracting nested windows that share an end (or start) date gives
 * non-overlapping periods: 60 days − 30 days = the 30 days before.
 */
export function derivePeriods(entries: OrganicEntry[]): Period[] {
  const out = new Map<string, Period>();
  for (const e of entries) {
    if (e.start === e.end && entries.length > 1) continue; // daily values are handled by sumDaily
    out.set(key(e), { start: e.start, end: e.end, value: e.value, derived: false, includesAds: !!e.includesAds, prevValue: e.prevValue });
    if (e.prevValue !== null && e.prevValue !== undefined) {
      const len = daysBetween(e.start, e.end);
      const prev = { start: addDays(e.start, -len), end: addDays(e.start, -1) };
      if (!out.has(key(prev))) out.set(key(prev), { ...prev, value: e.prevValue, derived: true, includesAds: !!e.includesAds });
    }
  }
  let changed = true;
  while (changed) {
    changed = false;
    const list = [...out.values()];
    for (const a of list) {
      for (const b of list) {
        if (a === b) continue;
        let d: DateRange | null = null;
        if (a.end === b.end && a.start < b.start) d = { start: a.start, end: addDays(b.start, -1) };
        else if (a.start === b.start && a.end > b.end) d = { start: addDays(b.end, 1), end: a.end };
        if (d && !out.has(key(d))) {
          out.set(key(d), { ...d, value: a.value - b.value, derived: true, includesAds: a.includesAds || b.includesAds });
          changed = true;
        }
      }
    }
  }
  return [...out.values()].sort((x, y) => (x.start < y.start ? -1 : x.start > y.start ? 1 : x.end < y.end ? -1 : 1));
}

function dailyEntries(entries: OrganicEntry[]): Map<ISODate, number> {
  const m = new Map<ISODate, number>();
  for (const e of entries) if (e.start === e.end) m.set(e.start, e.value);
  return m;
}

/** Value for an exact range: from daily numbers if every day is there, else from a matching window. */
export function valueFor(entries: OrganicEntry[], metric: OrganicMetric, range: DateRange): number | null {
  const daily = dailyEntries(entries);
  const days = eachDay(range.start, range.end);
  if (days.length && days.every((d) => daily.has(d))) {
    if (ORGANIC_METRICS[metric].pointInTime) return daily.get(range.end)!;
    return days.reduce((s, d) => s + daily.get(d)!, 0);
  }
  const p = derivePeriods(entries).find((x) => x.start === range.start && x.end === range.end);
  return p ? p.value : null;
}

export interface Comparison {
  platform: Platform;
  metric: OrganicMetric;
  current: Period;
  baseline: Period | null;
  /** (current − baseline) / baseline */
  lift: number | null;
  /** Days of the current period when ads were running. */
  campaignDays: number;
  /** Earlier periods of the same length, oldest first, ending with `current`. */
  chain: Period[];
}

/**
 * Campaign period vs. the same-length period before it. With daily numbers
 * the comparison uses the dashboard range exactly; with rolling windows it
 * uses the most recent window and the one right before it.
 */
export function compare(
  all: OrganicEntry[],
  platform: Platform,
  metric: OrganicMetric,
  range: DateRange,
  campaignStart: ISODate,
): Comparison | null {
  const entries = all.filter((e) => e.platform === platform && e.metric === metric);
  if (!entries.length) return null;
  const pointInTime = !!ORGANIC_METRICS[metric].pointInTime;
  const campaign = { start: campaignStart, end: range.end };

  const curDaily = pointInTime ? null : valueFor(entries, metric, range);
  if (curDaily !== null && entries.some((e) => e.start === e.end)) {
    const len = daysBetween(range.start, range.end);
    const prevRange = { start: addDays(range.start, -len), end: addDays(range.start, -1) };
    const prev = valueFor(entries, metric, prevRange);
    const current: Period = { ...range, value: curDaily, derived: false, includesAds: false };
    const baseline: Period | null = prev === null ? null : { ...prevRange, value: prev, derived: false, includesAds: false };
    return {
      platform,
      metric,
      current,
      baseline,
      lift: baseline && baseline.value ? (current.value - baseline.value) / baseline.value : null,
      campaignDays: overlapDays(range, campaign),
      chain: baseline ? [baseline, current] : [current],
    };
  }

  const periods = derivePeriods(entries).filter((p) => p.start !== p.end);
  if (!periods.length) return null;
  // Most recent end date first, then the shortest window ending there.
  const latestEnd = periods.reduce((m, p) => (p.end > m ? p.end : m), '');
  const current = periods.filter((p) => p.end === latestEnd).sort((a, b) => daysBetween(a.start, a.end) - daysBetween(b.start, b.end))[0];
  const len = daysBetween(current.start, current.end);
  const chain: Period[] = [current];
  let cursor = current;
  for (;;) {
    const prevEnd = addDays(cursor.start, -1);
    const prev = periods.find((p) => p.end === prevEnd && Math.abs(daysBetween(p.start, p.end) - len) <= 1);
    if (!prev) break;
    chain.unshift(prev);
    cursor = prev;
  }
  const baseline = chain.length > 1 ? chain[chain.length - 2] : null;
  return {
    platform,
    metric,
    current,
    baseline,
    lift: baseline && baseline.value ? (current.value - baseline.value) / baseline.value : null,
    campaignDays: overlapDays(current, campaign),
    chain,
  };
}

/** Daily follower totals (for the growth line), oldest first. */
export function followerSeries(all: OrganicEntry[], platform: Platform): { date: ISODate; value: number }[] {
  return all
    .filter((e) => e.platform === platform && e.metric === 'followers_total')
    .map((e) => ({ date: e.end, value: e.value }))
    .sort((a, b) => (a.date < b.date ? -1 : 1));
}

// ---------- Business Suite file import ----------

const GUESSES: [RegExp, Platform | null, OrganicMetric][] = [
  [/instagram.*(link|external).*tap|bio link/i, 'instagram', 'link_taps'],
  [/(facebook|page).*website click/i, 'facebook', 'website_clicks'],
  [/profile visit|page visit/i, null, 'profile_visits'],
  [/unfollow/i, null, 'unfollows'],
  [/net follow|follower(s)? gained|new follower/i, null, 'followers_net'],
  [/^.*follows$/i, null, 'follows'],
  [/follower/i, null, 'followers_total'],
  [/interaction|engagement/i, null, 'interactions'],
  [/message|conversation|messaging/i, null, 'messages'],
  [/video view|plays/i, null, 'video_views'],
  [/reach/i, null, 'reach'],
  [/viewers/i, null, 'viewers'],
  [/views|impressions/i, null, 'views'],
];

export function guessColumn(header: string): { platform: Platform | null; metric: OrganicMetric } | null {
  for (const [re, platform, metric] of GUESSES) {
    if (re.test(header)) {
      const p = platform ?? (/instagram|\big\b/i.test(header) ? 'instagram' : /facebook|\bfb\b|page/i.test(header) ? 'facebook' : null);
      return { platform: p, metric };
    }
  }
  return null;
}
