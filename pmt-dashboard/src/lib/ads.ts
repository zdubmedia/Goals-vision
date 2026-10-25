import { daysBetween, eachDay, rangeSimilarity, sameRange, type DateRange, type ISODate } from './dates';
import type { AdMetrics, AdRow, BreakdownType, Level, LocationSetting, MetaUpload } from './types';

export type Metrics = Omit<AdMetrics, 'conversions'>;

const ADDITIVE = ['spend', 'impressions', 'results', 'linkClicks', 'clicksAll', 'views'] as const;
type AdditiveKey = (typeof ADDITIVE)[number];

export const EMPTY_METRICS: Metrics = {
  spend: null,
  impressions: null,
  reach: null,
  results: null,
  linkClicks: null,
  clicksAll: null,
  views: null,
  ctrAllReported: null,
};

/** Adds up rows. A column missing from any row stays unknown (null). Reach is never added. */
export function sumMetrics(rows: Metrics[]): Metrics {
  const out: Metrics = { ...EMPTY_METRICS };
  if (!rows.length) return out;
  for (const k of ADDITIVE) {
    let total = 0;
    let known = true;
    for (const r of rows) {
      const v = r[k];
      if (v === null || v === undefined) {
        known = false;
        break;
      }
      total += v;
    }
    out[k] = known ? round2(total) : null;
  }
  if (rows.length === 1) {
    out.reach = rows[0].reach;
    out.ctrAllReported = rows[0].ctrAllReported;
  }
  return out;
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export interface Derived {
  costPerResult: number | null;
  linkCtr: number | null;
  ctrAll: number | null;
  cpc: number | null;
  cpcAll: number | null;
  cpm: number | null;
  frequency: number | null;
  resultRate: number | null;
  clickToVisit: number | null;
}

const div = (a: number | null, b: number | null, scale = 1): number | null =>
  a === null || b === null || b === 0 ? null : (a / b) * scale;

/** Rates are always recomputed from raw counts, never averaged from Meta's percentages. */
export function derive(m: Metrics): Derived {
  return {
    costPerResult: div(m.spend, m.results),
    linkCtr: div(m.linkClicks, m.impressions),
    ctrAll: m.impressions ? div(m.clicksAll, m.impressions) : m.ctrAllReported !== null ? m.ctrAllReported / 100 : null,
    cpc: div(m.spend, m.linkClicks),
    cpcAll: div(m.spend, m.clicksAll),
    cpm: div(m.spend, m.impressions, 1000),
    frequency: div(m.impressions, m.reach),
    resultRate: div(m.results, m.impressions),
    clickToVisit: div(m.results, m.linkClicks),
  };
}

// ---------- Re-uploads ----------

const signature = (u: Pick<MetaUpload, 'level' | 'breakdown' | 'daily'>) => `${u.level}|${u.breakdown}|${u.daily ? 'd' : 'a'}`;

export interface EffectiveData {
  rows: AdRow[];
  /** uploadId → id of the newer upload that fully replaced it. */
  replacedBy: Record<string, string>;
  /** Days covered by each daily dataset signature. */
  dailyCoverage: Record<string, Set<ISODate>>;
}

/**
 * Applies the re-upload rule: a newer upload of the same kind replaces older
 * data for the days it covers (daily files), or replaces an older summary file
 * with the same start date (e.g. an updated "since launch" export). Nothing is
 * ever counted twice.
 */
export function effectiveData(uploads: MetaUpload[]): EffectiveData {
  const sorted = [...uploads].sort((a, b) => (a.uploadedAt < b.uploadedAt ? 1 : a.uploadedAt > b.uploadedAt ? -1 : 0));
  const rows: AdRow[] = [];
  const replacedBy: Record<string, string> = {};
  const dailyCoverage: Record<string, Set<ISODate>> = {};
  const claimedDays: Record<string, Map<ISODate, string>> = {};
  const claimedStarts: Record<string, Map<ISODate, string>> = {};

  for (const u of sorted) {
    const sig = signature(u);
    if (u.daily) {
      const claimed = (claimedDays[sig] ??= new Map());
      const cover = (dailyCoverage[sig] ??= new Set());
      const days = eachDay(u.start, u.end);
      let kept = 0;
      let newer: string | undefined;
      for (const r of u.rows) {
        if (r.isSummary) continue;
        const by = claimed.get(r.start);
        if (by) {
          newer = by;
          continue;
        }
        rows.push(r);
        kept++;
      }
      if (!kept && newer) replacedBy[u.id] = newer;
      for (const d of days) {
        if (!claimed.has(d)) claimed.set(d, u.id);
        cover.add(d);
      }
    } else {
      const claimed = (claimedStarts[sig] ??= new Map());
      const by = claimed.get(u.start);
      if (by) {
        replacedBy[u.id] = by;
        continue;
      }
      claimed.set(u.start, u.id);
      rows.push(...u.rows);
    }
  }
  return { rows, replacedBy, dailyCoverage };
}

export function dataRange(data: EffectiveData): DateRange | null {
  let start = '';
  let end = '';
  for (const r of data.rows) {
    if (!r.start) continue;
    if (!start || r.start < start) start = r.start;
    if (!end || r.end > end) end = r.end;
  }
  return start ? { start, end } : null;
}

// ---------- Choosing rows for a date range ----------

export interface Picked {
  rows: AdRow[];
  summary: AdRow | null;
  mode: 'daily' | 'aggregate';
  range: DateRange;
  exact: boolean;
}

function covered(data: EffectiveData, level: Level, breakdown: BreakdownType, range: DateRange): boolean {
  const cover = data.dailyCoverage[signature({ level, breakdown, daily: true })];
  if (!cover) return false;
  return eachDay(range.start, range.end).every((d) => cover.has(d));
}

export function pickDaily(data: EffectiveData, level: Level, breakdown: BreakdownType, range: DateRange): Picked | null {
  if (!covered(data, level, breakdown, range)) return null;
  const rows = data.rows.filter(
    (r) => r.daily && !r.isSummary && r.level === level && r.breakdown === breakdown && r.start >= range.start && r.start <= range.end,
  );
  return { rows, summary: null, mode: 'daily', range, exact: true };
}

/**
 * Daily rows for a range, taking each day from the most summarised level that
 * has it (campaign, then ad set, then ad). Lets an older campaign-level file and
 * a newer ad-set-level file cover different days without double counting.
 */
export function pickDailyMixed(data: EffectiveData, levels: Level[], breakdown: BreakdownType, range: DateRange): Picked | null {
  const covers = levels.map((l) => data.dailyCoverage[signature({ level: l, breakdown, daily: true })]);
  const dayLevel = new Map<ISODate, Level>();
  for (const d of eachDay(range.start, range.end)) {
    const i = covers.findIndex((c) => c?.has(d));
    if (i < 0) return null;
    dayLevel.set(d, levels[i]);
  }
  const rows = data.rows.filter((r) => r.daily && !r.isSummary && r.breakdown === breakdown && dayLevel.get(r.start) === r.level);
  return { rows, summary: null, mode: 'daily', range, exact: true };
}

export function pickAggregate(data: EffectiveData, level: Level, breakdown: BreakdownType, range: DateRange): Picked | null {
  const windows = new Map<string, DateRange>();
  for (const r of data.rows) {
    if (r.daily || r.level !== level || r.breakdown !== breakdown) continue;
    windows.set(`${r.start}|${r.end}`, { start: r.start, end: r.end });
  }
  let best: DateRange | null = null;
  let bestScore = 0;
  for (const w of windows.values()) {
    const s = rangeSimilarity(w, range);
    if (s > bestScore || (s === bestScore && best && w.end > best.end)) {
      best = w;
      bestScore = s;
    }
  }
  if (!best) return null;
  const w = best;
  const inWindow = data.rows.filter(
    (r) => !r.daily && r.level === level && r.breakdown === breakdown && r.start === w.start && r.end === w.end,
  );
  return {
    rows: inWindow.filter((r) => !r.isSummary),
    summary: inWindow.find((r) => r.isSummary) ?? null,
    mode: 'aggregate',
    range: w,
    exact: sameRange(w, range),
  };
}

// ---------- Locations ----------

export function locationOf(adSetName: string, locations: LocationSetting[]): string | null {
  const n = adSetName.toLowerCase();
  for (const loc of locations) {
    if (loc.keywords.some((k) => k && n.includes(k.toLowerCase()))) return loc.name;
  }
  return null;
}

export function adSetsFor(data: EffectiveData, locationNames: string[] | null, locations: LocationSetting[]): string[] | null {
  if (!locationNames) return null;
  const names = new Set<string>();
  for (const r of data.rows) {
    if (r.adSet && locationNames.includes(locationOf(r.adSet, locations) ?? '')) names.add(r.adSet);
  }
  return [...names];
}

// ---------- Totals ----------

export type ReachQuality = 'exact' | 'atLeast' | 'otherRange' | 'none';

export interface Totals {
  metrics: Metrics;
  /** Range the numbers actually cover (may differ when only a summary file exists). */
  range: DateRange;
  exact: boolean;
  reachQuality: ReachQuality;
  reachRange: DateRange | null;
  /** Fields that could not be filled for this range. */
  missing: (keyof Metrics)[];
}

const LEVELS: Level[] = ['campaign', 'adset', 'ad'];

function filterAdSets(p: Picked, adSets: string[] | null): Picked {
  if (!adSets) return p;
  return { ...p, rows: p.rows.filter((r) => adSets.includes(r.adSet)), summary: null };
}

function aggregateTotal(p: Picked): { m: Metrics; reachQuality: ReachQuality } {
  if (p.summary) return { m: { ...sumMetrics([p.summary]), reach: p.summary.reach }, reachQuality: p.summary.reach === null ? 'none' : 'exact' };
  const m = sumMetrics(p.rows);
  if (p.rows.length === 1) return { m, reachQuality: m.reach === null ? 'none' : 'exact' };
  const reaches = p.rows.map((r) => r.reach).filter((v): v is number => v !== null);
  // People overlap between ad sets, so the most we can say is "at least the largest one".
  m.reach = reaches.length ? Math.max(...reaches) : null;
  return { m, reachQuality: reaches.length ? 'atLeast' : 'none' };
}

/**
 * Headline numbers for a date range, optionally limited to some ad sets.
 * Uses daily rows when they cover the range, fills the rest from a summary
 * export of the same range, and never adds reach across ad sets or days.
 */
export function totals(data: EffectiveData, range: DateRange, adSets: string[] | null = null): Totals | null {
  const levels = adSets ? LEVELS.slice(1) : LEVELS;
  let daily = pickDailyMixed(data, levels, 'none', range);
  let agg: Picked | null = null;
  for (const l of levels) {
    const p = pickAggregate(data, l, 'none', range);
    if (p && (!agg || rangeSimilarity(p.range, range) > rangeSimilarity(agg.range, range))) agg = p;
  }
  if (agg) agg = filterAdSets(agg, adSets);
  if (daily) daily = filterAdSets(daily, adSets);
  if (!daily && !agg) return null;

  const aggTotal = agg && agg.rows.length + (agg.summary ? 1 : 0) ? aggregateTotal(agg) : null;
  let metrics: Metrics;
  let outRange = range;
  let exact = true;
  let reachQuality: ReachQuality = 'none';
  let reachRange: DateRange | null = null;

  if (daily) {
    metrics = sumMetrics(daily.rows);
    metrics.reach = null;
    metrics.ctrAllReported = null;
    if (agg && aggTotal && agg.exact) {
      for (const k of ADDITIVE) if (metrics[k] === null) metrics[k] = aggTotal.m[k];
      metrics.reach = aggTotal.m.reach;
      metrics.ctrAllReported = aggTotal.m.ctrAllReported;
      reachQuality = aggTotal.reachQuality;
      reachRange = agg.range;
    } else if (agg && aggTotal && aggTotal.m.reach !== null && rangeSimilarity(agg.range, range) >= 0.8) {
      // A summary file for nearly the same dates: show its reach, labelled with its dates.
      metrics.reach = aggTotal.m.reach;
      reachQuality = 'otherRange';
      reachRange = agg.range;
    }
  } else if (agg && aggTotal) {
    metrics = aggTotal.m;
    outRange = agg.range;
    exact = agg.exact;
    reachQuality = aggTotal.reachQuality === 'none' ? 'none' : exact ? aggTotal.reachQuality : 'otherRange';
    reachRange = agg.range;
  } else {
    return null;
  }
  const missing = (Object.keys(metrics) as (keyof Metrics)[]).filter(
    (k) => metrics[k] === null && k !== 'ctrAllReported' && k !== 'views',
  );
  return { metrics, range: outRange, exact, reachQuality, reachRange, missing };
}

// ---------- Tables ----------

export interface EntityRow {
  key: string;
  adSet: string;
  ad: string;
  campaign: string;
  metrics: Metrics;
  deliveryStatus?: string;
  range: DateRange;
  exact: boolean;
}

/** One row per ad set (or per ad), for the selected range. */
export function byEntity(data: EffectiveData, range: DateRange, entity: 'adset' | 'ad', adSets: string[] | null = null): EntityRow[] {
  const keyOf = (r: AdRow) => (entity === 'ad' ? r.ad : r.adSet);
  const daily = pickDaily(data, entity, 'none', range);
  const agg = pickAggregate(data, entity, 'none', range);
  const groups = new Map<string, { daily: AdRow[]; agg: AdRow[] }>();
  const add = (r: AdRow, where: 'daily' | 'agg') => {
    if (adSets && !adSets.includes(r.adSet)) return;
    const k = keyOf(r);
    if (!k) return;
    const g = groups.get(k) ?? { daily: [], agg: [] };
    g[where].push(r);
    groups.set(k, g);
  };
  daily?.rows.forEach((r) => add(r, 'daily'));
  agg?.rows.forEach((r) => add(r, 'agg'));

  // Status is "now", so it comes from the newest row for the entity in any file.
  const status = new Map<string, { end: ISODate; status: string }>();
  for (const r of data.rows) {
    const k = keyOf(r);
    if (!k || r.level !== entity || !r.deliveryStatus) continue;
    const cur = status.get(k);
    if (!cur || r.end >= cur.end) status.set(k, { end: r.end, status: r.deliveryStatus });
  }

  const out: EntityRow[] = [];
  for (const [key, g] of groups) {
    const first = g.agg[0] ?? g.daily[0];
    let metrics: Metrics;
    let rRange = range;
    let exact = true;
    const aggM = g.agg.length ? sumMetrics(g.agg) : null;
    if (aggM && g.agg.length > 1) aggM.reach = null; // same ad name in several ad sets
    if (daily) {
      metrics = sumMetrics(g.daily);
      metrics.reach = null;
      metrics.ctrAllReported = null;
      if (aggM && agg?.exact) {
        for (const k of ADDITIVE) if (metrics[k] === null) metrics[k] = aggM[k];
        metrics.reach = aggM.reach;
        metrics.ctrAllReported = aggM.ctrAllReported;
      }
    } else if (aggM && agg) {
      metrics = aggM;
      rRange = agg.range;
      exact = agg.exact;
    } else continue;
    out.push({
      key,
      adSet: first.adSet,
      ad: first.ad,
      campaign: first.campaign,
      metrics,
      deliveryStatus: status.get(key)?.status,
      range: rRange,
      exact,
    });
  }
  return out;
}

export interface BreakdownRow {
  key: string;
  metrics: Metrics;
  isOther?: boolean;
}

export interface BreakdownResult {
  rows: BreakdownRow[];
  range: DateRange;
  exact: boolean;
  level: Level;
}

/** Age / gender / placement split. Adds an "Other" row when Meta's total is larger than the rows listed. */
export function byBreakdown(
  data: EffectiveData,
  breakdown: BreakdownType,
  range: DateRange,
  adSets: string[] | null = null,
): BreakdownResult | null {
  const levels = adSets ? LEVELS.slice(1) : LEVELS;
  let picked: Picked | null = null;
  let level: Level = 'campaign';
  for (const l of levels) {
    const p = pickDaily(data, l, breakdown, range) ?? pickAggregate(data, l, breakdown, range);
    if (p && (!picked || (p.mode === 'daily' && picked.mode !== 'daily') || rangeSimilarity(p.range, range) > rangeSimilarity(picked.range, range))) {
      picked = p;
      level = l;
    }
  }
  if (!picked) return null;
  const p = filterAdSets(picked, adSets);
  const groups = new Map<string, AdRow[]>();
  for (const r of p.rows) {
    const g = groups.get(r.breakdownValue) ?? [];
    g.push(r);
    groups.set(r.breakdownValue, g);
  }
  const rows: BreakdownRow[] = [...groups].map(([key, g]) => {
    const m = sumMetrics(g);
    if (g.length > 1) m.reach = null;
    return { key, metrics: m };
  });
  if (p.summary) {
    const listed = sumMetrics(p.rows);
    const gap = (k: AdditiveKey) => {
      const t = p.summary![k];
      const l = listed[k];
      return t === null || l === null ? null : round2(t - l);
    };
    const spendGap = gap('spend');
    const resultGap = gap('results');
    if ((spendGap !== null && spendGap >= 0.5) || (resultGap !== null && resultGap >= 1)) {
      rows.push({
        key: 'Other',
        isOther: true,
        metrics: {
          ...EMPTY_METRICS,
          spend: spendGap !== null ? Math.max(0, spendGap) : null,
          results: resultGap !== null ? Math.max(0, resultGap) : null,
          impressions: gap('impressions'),
          linkClicks: gap('linkClicks'),
          clicksAll: gap('clicksAll'),
        },
      });
    }
  }
  return { rows, range: p.range, exact: p.exact, level };
}

export interface DailyPoint {
  date: ISODate;
  metrics: Metrics;
}

/** Day-by-day numbers. Needs a report broken down by Day. */
export function dailySeries(data: EffectiveData, range: DateRange, adSets: string[] | null = null): DailyPoint[] | null {
  const p = pickDailyMixed(data, adSets ? LEVELS.slice(1) : LEVELS, 'none', range);
  if (!p) return null;
  const rows = adSets ? p.rows.filter((r) => adSets.includes(r.adSet)) : p.rows;
  return eachDay(range.start, range.end).map((date) => {
    const day = rows.filter((r) => r.start === date);
    const m = day.length ? sumMetrics(day) : { ...EMPTY_METRICS, spend: 0, results: 0, linkClicks: 0, impressions: 0, clicksAll: 0 };
    if (day.length > 1) m.reach = null;
    return { date, metrics: m };
  });
}

export function dailyAvailableRange(data: EffectiveData, adSetLevel = false): DateRange | null {
  const levels = adSetLevel ? LEVELS.slice(1) : LEVELS;
  const days = new Set<ISODate>();
  for (const l of levels) for (const d of data.dailyCoverage[signature({ level: l, breakdown: 'none', daily: true })] ?? []) days.add(d);
  if (!days.size) return null;
  const sorted = [...days].sort();
  return { start: sorted[0], end: sorted[sorted.length - 1] };
}

export function rangeDays(r: DateRange): number {
  return daysBetween(r.start, r.end);
}
