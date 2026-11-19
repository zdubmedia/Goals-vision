// Reads follower-ads reports in the shapes Claude hands them over: a zip
// "data pack", its JSON file, its separate CSV tables, an Excel workbook, or
// the one-file long CSV from the report guide. Pictures and PDFs are listed as
// skipped: their numbers are in the data files.

import { unzipSync } from 'fflate';
import { isISODate, type ISODate } from './dates';
import { parseFollowerReport, REQUIRED_COLUMNS, type FollowerReport, type PageTotals } from './followerReport';
import { parseNumber, tableFromCsv, tableFromRows, type Table } from './tabular';
import type { FollowerDay, Platform } from './types';

/** A file handed to the reader: its name and bytes. */
export interface InputFile {
  name: string;
  bytes: Uint8Array;
}

export interface ReadResult {
  report: FollowerReport | null;
  warnings: string[];
  errors: string[];
  /** File names that were read, and those that weren't (pictures, PDFs, other files). */
  used: string[];
  skipped: string[];
}

/** Reads an Excel workbook into sheets of raw rows; supplied by the browser (read-excel-file). */
export type ReadWorkbook = (bytes: Uint8Array) => Promise<{ sheet: string; data: unknown[][] }[]>;

type Row = Record<string, unknown>;
interface Pieces {
  summary?: Row;
  kpis?: Row[];
  milestones?: Row[];
  daily?: Row[];
  campaigns?: Row[];
  adsByAd?: Row[];
  cities?: Partial<Record<Platform, { city: string; share: number }[]>>;
  long?: Table;
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const SKIP = /\.(pdf|png|jpe?g|gif|webp|heic|svg|txt|md|docx?|pptx?)$/i;

/** "FB follows" → "fb_follows", "Cost Per Result" → "cost_per_result". */
export function key(h: unknown): string {
  return String(h ?? '')
    .replace(/^﻿/, '')
    .trim()
    .toLowerCase()
    .replace(/&amp;/g, '&')
    .replace(/%/g, ' pct')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

function normalizeTable(t: Table): Table {
  return { headers: t.headers.map(key), rows: t.rows.map((r) => Object.fromEntries(Object.entries(r).map(([k, v]) => [key(k), v]))) };
}

/** Excel stores dates as day counts from 1899-12-30; Date objects and ISO strings pass through. */
export function toISO(v: unknown): ISODate | null {
  if (v instanceof Date && !Number.isNaN(v.getTime())) return v.toISOString().slice(0, 10);
  if (typeof v === 'number' && v > 20000 && v < 80000) return new Date(Math.round((v - 25569) * 86400000)).toISOString().slice(0, 10);
  const s = String(v ?? '').trim();
  const m = /^(\d{4}-\d{2}-\d{2})/.exec(s);
  if (m && isISODate(m[1])) return m[1];
  const n = Number(s);
  return s && Number.isFinite(n) ? toISO(n) : null;
}

const num = (v: unknown) => (v === null || v === undefined || v === '' ? null : parseNumber(v));
const text = (v: unknown) => String(v ?? '').trim();
const has = (t: Table, ...cols: string[]) => cols.every((c) => t.headers.includes(c));

/** Splits a spreadsheet into tables at blank or title-only rows (a sheet can hold several sections). */
export function sheetTables(data: unknown[][]): Table[] {
  const blocks: unknown[][][] = [];
  let cur: unknown[][] = [];
  for (const row of data) {
    const filled = row.filter((c) => c !== null && c !== undefined && String(c).trim() !== '').length;
    if (filled < 2) {
      if (cur.length) blocks.push(cur);
      cur = [];
    } else cur.push(row);
  }
  if (cur.length) blocks.push(cur);
  return blocks.filter((b) => b.length > 1).map((b) => tableFromRows(b));
}

/** Files the table under what it holds, judged by its column names. */
function classify(raw: Table, p: Pieces) {
  if (REQUIRED_COLUMNS.every((c) => raw.headers.includes(c))) {
    p.long ??= raw;
    return true;
  }
  const t = normalizeTable(raw);
  if (has(t, 'platform', 'metric') && !has(t, 'source')) return fill(p, 'kpis', t.rows);
  if (has(t, 'milestone', 'facebook', 'instagram')) return fill(p, 'milestones', t.rows);
  if (has(t, 'date') && (has(t, 'fb_follows') || has(t, 'ig_follows'))) return fill(p, 'daily', t.rows);
  if (has(t, 'ad', 'spend')) return fill(p, 'adsByAd', t.rows);
  if (has(t, 'campaign', 'spend')) return fill(p, 'campaigns', t.rows);
  if (has(t, 'platform', 'type', 'label', 'pct')) {
    const cities: Pieces['cities'] = {};
    for (const r of t.rows) {
      const plat = platformOf(r.platform);
      const pct = num(r.pct);
      if (plat && /city/.test(text(r.type).toLowerCase()) && pct !== null) (cities[plat] ??= []).push({ city: text(r.label), share: Math.round(pct * 100) / 10000 });
    }
    if (Object.keys(cities).length) p.cities ??= cities;
    return true;
  }
  return false;
}

function fill<K extends 'kpis' | 'milestones' | 'daily' | 'campaigns' | 'adsByAd'>(p: Pieces, k: K, rows: Row[]) {
  if (!p[k]?.length) p[k] = rows;
  return true;
}

function platformOf(v: unknown): Platform | null {
  const s = text(v).toLowerCase();
  if (/^(ig|instagram)\b/.test(s)) return 'instagram';
  if (/^(fb|facebook)\b/.test(s)) return 'facebook';
  return null;
}

/** The JSON pack: arrays become tables; the summary and audience have their own shapes. */
function fromJson(data: unknown, p: Pieces): boolean {
  if (!data || typeof data !== 'object') return false;
  const obj = data as Record<string, unknown>;
  let found = false;
  if (obj.summary && typeof obj.summary === 'object') {
    p.summary ??= obj.summary as Row;
    found = true;
  } else if ('report_range' in obj || 'followers_now' in obj) {
    p.summary ??= obj;
    found = true;
  }
  for (const v of Object.values(obj)) {
    if (Array.isArray(v) && v.length && typeof v[0] === 'object' && v[0] !== null) {
      const headers = Object.keys(v[0] as object);
      found = classify({ headers, rows: v as Row[] }, p) || found;
    }
  }
  const audience = obj.audience as Record<string, { top_cities?: [string, number][] }> | undefined;
  if (audience && typeof audience === 'object') {
    const cities: Pieces['cities'] = {};
    for (const [plat, a] of Object.entries(audience)) {
      const pl = platformOf(plat);
      if (pl && Array.isArray(a?.top_cities))
        cities[pl] = a.top_cities.filter((c) => Array.isArray(c)).map(([city, pct]) => ({ city: String(city), share: Math.round(Number(pct) * 100) / 10000 }));
    }
    if (Object.keys(cities).length) p.cities ??= cities;
  }
  return found;
}

const decode = (b: Uint8Array) => new TextDecoder().decode(b);

/** Reads every file (unpacking zips) into one set of pieces. */
async function collect(files: InputFile[], readWorkbook: ReadWorkbook | null, p: Pieces, used: string[], skipped: string[], errors: string[]) {
  // JSON first: it's the most complete, so its tables win over the same tables as CSV or Excel.
  const order = (n: string) => (/\.zip$/i.test(n) ? 0 : /\.json$/i.test(n) ? 1 : /\.csv$/i.test(n) ? 2 : 3);
  for (const f of [...files].sort((a, b) => order(a.name) - order(b.name))) {
    const name = f.name.split('/').pop() ?? f.name;
    if (!name || name.startsWith('.') || f.name.includes('__MACOSX')) continue;
    try {
      if (/\.zip$/i.test(name)) {
        const inner = Object.entries(unzipSync(f.bytes))
          .filter(([n, b]) => !n.endsWith('/') && b.length)
          .map(([n, b]) => ({ name: n, bytes: b }));
        await collect(inner, readWorkbook, p, used, skipped, errors);
      } else if (/\.json$/i.test(name)) {
        (fromJson(JSON.parse(decode(f.bytes)), p) ? used : skipped).push(name);
      } else if (/\.csv$/i.test(name)) {
        (classify(tableFromCsv(decode(f.bytes)), p) ? used : skipped).push(name);
      } else if (/\.xlsx$/i.test(name) && readWorkbook) {
        let any = false;
        for (const sheet of await readWorkbook(f.bytes)) for (const t of sheetTables(sheet.data)) any = classify(t, p) || any;
        (any ? used : skipped).push(name);
      } else {
        skipped.push(name);
      }
    } catch {
      errors.push(`${name} couldn't be opened.`);
    }
  }
}

export async function readFollowerFiles(files: InputFile[], readWorkbook: ReadWorkbook | null = null): Promise<ReadResult> {
  const p: Pieces = {};
  const used: string[] = [];
  const skipped: string[] = [];
  const errors: string[] = [];
  await collect(files, readWorkbook, p, used, skipped, errors);

  const fromPack = p.kpis || p.campaigns || p.adsByAd || p.daily ? packToReport(p) : null;
  if (fromPack && (fromPack.report.totals || Object.keys(fromPack.report.pages).length)) {
    return { report: fromPack.report, warnings: fromPack.warnings, errors, used, skipped };
  }
  if (p.long) {
    const r = parseFollowerReport(p.long);
    return r.ok ? { report: r.report, warnings: r.warnings, errors, used, skipped } : { report: null, warnings: [], errors: [...errors, ...r.errors], used, skipped };
  }
  const why = files.every((f) => SKIP.test(f.name))
    ? 'PDFs and pictures can’t be read for numbers. Add the data files (the .zip, the .json or the .csv tables).'
    : 'No follower numbers were found. Use the data pack (.zip), its .json or .csv files, the Excel workbook, or the CSV from the report guide.';
  return { report: null, warnings: [], errors: [...errors, why], used, skipped };
}

/** "2026-11-01 to 2026-11-18" or "Nov 1 - Nov 18, 2026" → the two dates. */
function rangeOf(v: unknown): { start: ISODate; end: ISODate } | null {
  const iso = text(v).match(/\d{4}-\d{2}-\d{2}/g);
  return iso && iso.length >= 2 ? { start: iso[0], end: iso[1] } : null;
}

function packToReport(p: Pieces): { report: FollowerReport; warnings: string[] } {
  const warnings: string[] = [];
  const summary = p.summary ?? {};

  // Daily follows; a partial last day is left out so it doesn't drag the average down.
  const dayRows = (p.daily ?? [])
    .map((r) => ({ r, date: toISO(r.date) }))
    .filter((x): x is { r: Row; date: ISODate } => !!x.date)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  const daily: FollowerDay[] = dayRows
    .filter(({ r }) => !/^y/i.test(text(r.partial_day)))
    .map(({ r, date }) => ({ date, instagram: num(r.ig_follows) ?? 0, facebook: num(r.fb_follows) ?? 0 }));

  // Named stretches of days ("Baseline (pre-ads)", "October ad run", "November follower ads").
  const spans: { label: string; start: ISODate; end: ISODate }[] = [];
  for (const { r, date } of dayRows) {
    const label = text(r.period);
    const last = spans[spans.length - 1];
    if (last && last.label === label) last.end = date;
    else if (label) spans.push({ label, start: date, end: date });
  }
  const campaignSpan = spans.find((s) => /follower/i.test(s.label));
  const baselineSpan = spans.find((s) => /baseline|pre.?ads/i.test(s.label));
  const adPeriods = spans.filter((s) => s !== campaignSpan && /\bads?\b|ad run/i.test(s.label) && !/no ads|pre.?ads|baseline/i.test(s.label));

  const range = rangeOf(summary.report_range) ?? (campaignSpan ? { start: campaignSpan.start, end: campaignSpan.end } : null);
  const periodStart = range?.start ?? daily[0]?.date ?? '';
  const periodEnd = range?.end ?? dayRows[dayRows.length - 1]?.date ?? '';

  // Ads: follower campaigns are the ones optimising for profile/page visits or follows.
  const isFollower = (r: Row) => /profile|page visit|follow/i.test(`${text(r.result_type)} ${text(r.objective)} ${text(r.campaign)} ${text(r.ad_set)}`);
  // Rows for another month (e.g. "Oct 1-31" next to "Nov 1-18") belong to other campaigns.
  const reportMonths = [periodStart, periodEnd].filter(Boolean).map((d) => MONTHS[Number(d.slice(5, 7)) - 1]);
  const inPeriod = (r: Row) => {
    const named = MONTHS.filter((m) => new RegExp(`\\b${m}`, 'i').test(text(r.period)));
    return !named.length || !reportMonths.length || named.some((m) => reportMonths.includes(m));
  };
  // Leave out total rows (no campaign name, or named "Total").
  const campaigns = (p.campaigns ?? []).filter((r) => inPeriod(r) && text(r.campaign) && !/^(grand )?total/i.test(text(r.campaign)));
  const follower = campaigns.filter(isFollower);
  const sum = (rows: Row[], k: string) => (rows.some((r) => num(r[k]) !== null) ? rows.reduce((n, r) => n + (num(r[k]) ?? 0), 0) : null);
  const totals = follower.length
    ? {
        spend: sum(follower, 'spend'),
        reach: follower.length === 1 ? num(follower[0].reach) : null,
        impressions: sum(follower, 'impressions'),
        igFollows: sum(follower, 'ig_follows'),
        results: sum(follower, 'results'),
      }
    : null;
  const ads = (p.adsByAd ?? [])
    .filter((r) => inPeriod(r) && isFollower(r) && text(r.ad))
    .map((r) => ({
      metaName: text(r.ad),
      spend: num(r.spend),
      reach: num(r.reach),
      impressions: num(r.impressions),
      igFollows: num(r.ig_follows),
      results: num(r.results),
    }));
  const otherCampaigns = campaigns
    .filter((r) => !isFollower(r))
    .map((r) => ({
      name: text(r.campaign),
      spend: num(r.spend) ?? 0,
      detail: [text(r.status), text(r.result_type) && `${num(r.results) ?? 0} ${text(r.result_type).toLowerCase()}`].filter(Boolean).join(', '),
    }));

  // Page totals, from the KPI table ("New follows", "Viewers (unique…)", "Messaging contacts", …).
  const pages: FollowerReport['pages'] = {};
  const followers: FollowerReport['followers'] = {};
  const valueKey = (r: Row) => Object.keys(r).find((k) => !['platform', 'metric', 'note'].includes(k) && !/prior|change|pct/.test(k));
  for (const r of p.kpis ?? []) {
    const plat = platformOf(r.platform);
    const vk = valueKey(r);
    const v = vk ? num(r[vk]) : null;
    if (!plat || v === null) continue;
    const m = text(r.metric).toLowerCase();
    const t: PageTotals = (pages[plat] ??= { newFollows: null, visits: null, views: null, reach: null, interactions: null, conversations: null, unfollows: null });
    if (/^followers/.test(m)) followers[plat] = { total: v, date: periodEnd };
    else if (/^new follows/.test(m)) t.newFollows = v;
    else if (/^unfollows/.test(m)) t.unfollows = v;
    else if (/^views/.test(m)) t.views = v;
    else if (/^(viewers|reach)/.test(m)) t.reach = v;
    else if (/interactions/.test(m)) t.interactions = v;
    else if (/(page|profile) visits/.test(m)) t.visits = v;
    else if (/messag|conversation/.test(m)) t.conversations = v;
  }

  // Followers now and at the start: the summary, else the milestone table.
  const startFollowers: Partial<Record<Platform, number>> = {};
  const fromSummary = (k: string) => summary[k] as Record<string, unknown> | undefined;
  for (const plat of ['instagram', 'facebook'] as const) {
    const now = num(fromSummary('followers_now')?.[plat]);
    if (now !== null) followers[plat] = { total: now, date: periodEnd };
    const s = num(fromSummary('followers_nov1')?.[plat]) ?? num(fromSummary('followers_start')?.[plat]);
    if (s !== null) startFollowers[plat] = s;
  }
  for (const r of p.milestones ?? []) {
    const label = text(r.milestone).toLowerCase();
    for (const plat of ['instagram', 'facebook'] as const) {
      const v = num(r[plat]);
      if (v === null) continue;
      if (/start/.test(label) && startFollowers[plat] === undefined) startFollowers[plat] = v;
      if (/today|now|current/.test(label) && !followers[plat]) followers[plat] = { total: v, date: toISO(r.date) ?? periodEnd };
    }
  }

  // Fill new follows from the daily numbers if the KPI table is missing.
  for (const plat of ['instagram', 'facebook'] as const) {
    if (pages[plat]?.newFollows == null && daily.length && periodStart) {
      const n = dayRows
        .filter(({ date }) => date >= periodStart && date <= periodEnd)
        .reduce((s, { r }) => s + (num(r[plat === 'instagram' ? 'ig_follows' : 'fb_follows']) ?? 0), 0);
      (pages[plat] ??= { newFollows: null, visits: null, views: null, reach: null, interactions: null, conversations: null, unfollows: null }).newFollows = n;
      warnings.push(`${plat === 'instagram' ? 'Instagram' : 'Facebook'} page totals weren't in the files, so new follows were added up from the daily numbers.`);
    }
  }

  if (!totals) warnings.push('No follower-ad campaign totals were found (Ads Manager), so the ad numbers stay as they were.');
  if (totals?.spend && ads.length) {
    const adSpend = ads.reduce((n, a) => n + (a.spend ?? 0), 0);
    if (Math.abs(adSpend - totals.spend) > 0.05)
      warnings.push(`The ads' spend adds up to $${adSpend.toFixed(2)}, but the campaign total says $${totals.spend.toFixed(2)}.`);
  }
  for (const plat of ['instagram', 'facebook'] as const)
    if (!followers[plat]) warnings.push(`No current ${plat === 'instagram' ? 'Instagram' : 'Facebook'} follower total; it stays as it was.`);
  if (!range) warnings.push('The report dates weren’t stated, so they were taken from the daily numbers.');

  return {
    report: {
      periodStart,
      periodEnd,
      campaign: text(follower[0]?.campaign),
      totals,
      ads,
      pages,
      followers,
      daily,
      ...(Object.keys(startFollowers).length ? { startFollowers } : {}),
      ...(p.cities ? { topCities: Object.fromEntries(Object.entries(p.cities).map(([k, v]) => [k, v!.slice(0, 5)])) } : {}),
      ...(baselineSpan ? { baseline: { start: baselineSpan.start, end: baselineSpan.end } } : {}),
      ...(adPeriods.length ? { adPeriods } : {}),
      ...(otherCampaigns.length ? { otherCampaigns } : {}),
    },
    warnings,
  };
}
