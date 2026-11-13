// Reads the weekly follower-ads report CSV (one row per number; see
// public/report-kit/follower-report-guide.md) and applies it to the campaign.

import { isISODate, type ISODate } from './dates';
import { parseNumber, type Table } from './tabular';
import type { FollowerAd, FollowerCampaign, FollowerDay, Platform } from './types';

export const REQUIRED_COLUMNS = ['period_start', 'period_end', 'source', 'platform', 'level', 'ad', 'date', 'breakdown_type', 'breakdown_value', 'metric', 'value'];

interface AdTotals {
  spend: number | null;
  reach: number | null;
  impressions: number | null;
  igFollows: number | null;
  results: number | null;
}

export interface PageTotals {
  newFollows: number | null;
  visits: number | null;
  views: number | null;
  reach: number | null;
  interactions: number | null;
  conversations: number | null;
  unfollows: number | null;
}

export interface FollowerReport {
  periodStart: ISODate;
  periodEnd: ISODate;
  campaign: string;
  totals: AdTotals | null;
  ads: (AdTotals & { metaName: string })[];
  pages: Partial<Record<Platform, PageTotals>>;
  followers: Partial<Record<Platform, { total: number; date: ISODate }>>;
  daily: FollowerDay[];
}

export type ParseResult = { ok: true; report: FollowerReport; warnings: string[] } | { ok: false; errors: string[] };

const s = (v: unknown) => String(v ?? '').trim();
const low = (v: unknown) => s(v).toLowerCase();

function platformOf(v: unknown): Platform | null {
  const p = low(v);
  if (p === 'instagram') return 'instagram';
  if (p === 'facebook') return 'facebook';
  return null;
}

/** Whether a "period" row is the campaign itself (not the before-campaign comparison or a 28-day window). */
function isCampaignPeriod(r: Record<string, unknown>): boolean {
  const text = `${low(r.breakdown_value)} ${low(r.note)}`;
  return /campaign/.test(text) && !/before/.test(text);
}

export function parseFollowerReport(table: Table): ParseResult {
  const missing = REQUIRED_COLUMNS.filter((c) => !table.headers.includes(c));
  if (missing.length) {
    return {
      ok: false,
      errors: [`This isn't the follower report format: it's missing the column${missing.length > 1 ? 's' : ''} ${missing.join(', ')}. See the report guide.`],
    };
  }
  const rows = table.rows;
  const periodStart = s(rows.find((r) => isISODate(s(r.period_start)))?.period_start);
  const periodEnd = s(rows.find((r) => isISODate(s(r.period_end)))?.period_end);
  if (!isISODate(periodStart) || !isISODate(periodEnd)) return { ok: false, errors: ['period_start and period_end must be dates like 2026-11-01.'] };

  const num = (r: Record<string, unknown>) => parseNumber(r.value);
  const fromAds = (r: Record<string, unknown>) => /ads manager/.test(low(r.source));
  const fromSuite = (r: Record<string, unknown>) => /business suite/.test(low(r.source));
  const noBreakdown = (r: Record<string, unknown>) => !s(r.breakdown_type) && !s(r.date);

  const adTotals = (list: Record<string, unknown>[]): AdTotals => {
    const get = (m: string) => {
      const r = list.find((x) => low(x.metric) === m);
      return r ? num(r) : null;
    };
    return { spend: get('spend'), reach: get('reach'), impressions: get('impressions'), igFollows: get('ig_follows'), results: get('results_profile_and_page_visits') };
  };

  const campaignRows = rows.filter((r) => fromAds(r) && low(r.level) === 'campaign' && noBreakdown(r));
  const totals = campaignRows.length ? adTotals(campaignRows) : null;

  const byAd = new Map<string, Record<string, unknown>[]>();
  for (const r of rows) {
    if (!fromAds(r) || low(r.level) !== 'ad' || !noBreakdown(r) || !s(r.ad)) continue;
    byAd.set(s(r.ad), [...(byAd.get(s(r.ad)) ?? []), r]);
  }
  const ads = [...byAd].map(([metaName, list]) => ({ metaName, ...adTotals(list) }));

  const pages: FollowerReport['pages'] = {};
  const followers: FollowerReport['followers'] = {};
  const days = new Map<ISODate, FollowerDay>();
  for (const r of rows) {
    if (!fromSuite(r)) continue;
    const p = platformOf(r.platform);
    const v = num(r);
    if (!p || v === null) continue;
    const metric = low(r.metric);
    const kind = low(r.breakdown_type);
    if (kind === 'period' && low(r.level) === 'account' && isCampaignPeriod(r)) {
      const t = (pages[p] ??= { newFollows: null, visits: null, views: null, reach: null, interactions: null, conversations: null, unfollows: null });
      if (metric === 'new_follows') t.newFollows = v;
      else if (metric === 'profile_visits' || metric === 'page_visits') t.visits = v;
      else if (metric === 'views') t.views = v;
      else if (metric === 'reach' || metric === 'viewers') t.reach = v;
      else if (metric === 'content_interactions') t.interactions = v;
      else if (metric === 'messaging_conversations_started') t.conversations = v;
      else if (metric === 'unfollows') t.unfollows = v;
    } else if (kind === 'snapshot' && metric === 'followers_total') {
      const date = isISODate(s(r.date)) ? s(r.date) : periodEnd;
      if (!followers[p] || date >= followers[p]!.date) followers[p] = { total: v, date };
    } else if (kind === 'day' && low(r.level) === 'account' && metric === 'new_follows' && isISODate(s(r.date))) {
      const d = days.get(s(r.date)) ?? { date: s(r.date), instagram: 0, facebook: 0 };
      d[p] = v;
      days.set(d.date, d);
    }
  }

  const errors: string[] = [];
  if (!totals?.spend && !ads.length) errors.push('No Ads Manager totals found (campaign or ad rows with spend).');
  if (!Object.keys(pages).length) errors.push('No Business Suite page totals found for the campaign period (breakdown_type "period").');
  if (errors.length) return { ok: false, errors };

  const warnings: string[] = [];
  const adSpend = ads.reduce((n, a) => n + (a.spend ?? 0), 0);
  if (totals?.spend && ads.length && Math.abs(adSpend - totals.spend) > 0.05) {
    warnings.push(`The ads' spend adds up to $${adSpend.toFixed(2)}, but the campaign total says $${totals.spend.toFixed(2)}. Check that every ad is in the file.`);
  }
  for (const p of ['instagram', 'facebook'] as const) {
    if (!pages[p]) warnings.push(`No ${p === 'instagram' ? 'Instagram' : 'Facebook'} page totals; those numbers stay as they were.`);
    else if (pages[p]!.newFollows === null) warnings.push(`No new_follows for ${p === 'instagram' ? 'Instagram' : 'Facebook'}.`);
    if (!followers[p]) warnings.push(`No followers_total for ${p === 'instagram' ? 'Instagram' : 'Facebook'}; "followers now" stays as it was.`);
  }
  if (!days.size) warnings.push('No daily new_follows rows, so the follows-per-day chart stays as it was.');

  return {
    ok: true,
    report: {
      periodStart,
      periodEnd,
      campaign: s(rows.find((r) => s(r.campaign))?.campaign),
      totals,
      ads,
      pages,
      followers,
      daily: [...days.values()].sort((a, b) => (a.date < b.date ? -1 : 1)),
    },
    warnings,
  };
}

/** A short name for PMT: "ad3 - Learn2Ride the right way" → "Learn2Ride the right way". */
export function friendlyAdName(metaName: string): string {
  const n = metaName.replace(/^ad\s*\d+\s*[-–:]\s*/i, '').trim() || metaName;
  return n[0].toUpperCase() + n.slice(1);
}

/** The campaign with the report's numbers in; names, text, images and questions are kept. */
export function applyFollowerReport(f: FollowerCampaign, rep: FollowerReport, newId: () => string): FollowerCampaign {
  const ads: FollowerAd[] = f.ads.map((a) => ({ ...a }));
  for (const r of rep.ads) {
    const match = ads.find((a) => (a.metaName ?? '').toLowerCase() === r.metaName.toLowerCase());
    const numbers = {
      spend: r.spend ?? 0,
      follows: r.igFollows ?? 0,
      profileVisits: r.results ?? 0,
      views: r.impressions ?? 0,
      reach: r.reach,
    };
    if (match) Object.assign(match, numbers);
    else ads.push({ id: newId(), name: friendlyAdName(r.metaName), metaName: r.metaName, ...numbers });
  }

  const pages = f.pages.map((p) => {
    const t = rep.pages[p.platform];
    const now = rep.followers[p.platform];
    if (!t && !now) return p;
    return {
      ...p,
      ...(t
        ? {
            follows: t.newFollows ?? p.follows,
            unfollows: t.unfollows,
            visits: t.visits,
            reach: t.reach,
            views: t.views,
            interactions: t.interactions,
            messagers: t.conversations,
          }
        : {}),
      ...(now ? { nowFollowers: now.total } : {}),
    };
  });

  const countedOn = rep.followers.instagram?.date ?? rep.followers.facebook?.date ?? rep.periodEnd;
  const count = (platform: Platform) => pages.find((p) => p.platform === platform)?.nowFollowers ?? 0;
  const history = [...f.history.filter((h) => h.date !== countedOn), { date: countedOn, instagram: count('instagram'), facebook: count('facebook') }].sort((a, b) =>
    a.date < b.date ? -1 : 1,
  );

  return {
    ...f,
    asOf: rep.periodEnd,
    countedOn,
    adReach: rep.totals?.reach ?? f.adReach ?? null,
    ads,
    pages,
    daily: rep.daily.length ? rep.daily : f.daily,
    history,
  };
}
