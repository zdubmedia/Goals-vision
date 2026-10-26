// Everything the dashboard shows, computed from the saved state and the filters.

import {
  adSetsFor,
  byBreakdown,
  byEntity,
  dailySeries,
  dataRange,
  derive,
  effectiveData,
  locationOf,
  totals,
  type BreakdownResult,
  type DailyPoint,
  type Derived,
  type EffectiveData,
  type EntityRow,
  type Totals,
} from './ads';
import { bookingPeriod, summarizeBookings, type BookingSummary } from './bookings';
import { addDays, daysBetween, overlapDays, previousPeriod, type DateRange, type ISODate } from './dates';
import { compare, type Comparison } from './organic';
import type { AppState, OrganicMetric, Platform } from './types';

export type Preset = 'launch' | '7d' | '30d' | 'custom';

export interface Filters {
  preset: Preset;
  custom: DateRange | null;
  locations: string[] | null;
}

export const DEFAULT_FILTERS: Filters = { preset: 'launch', custom: null, locations: null };

export interface OrganicCard {
  platform: Platform;
  metric: OrganicMetric;
  comparison: Comparison;
}

export interface Model {
  data: EffectiveData;
  range: DateRange;
  dataRange: DateRange | null;
  prevRange: DateRange | null;
  adSets: string[] | null;
  totals: Totals | null;
  prevTotals: Totals | null;
  d: Derived | null;
  prevD: Derived | null;
  daily: DailyPoint[] | null;
  adSetRows: EntityRow[];
  adRows: EntityRow[];
  age: BreakdownResult | null;
  gender: BreakdownResult | null;
  placement: BreakdownResult | null;
  bookingRange: DateRange;
  bookings: BookingSummary;
  prevBookings: BookingSummary | null;
  tracked: { count: number; revenue: number | null } | null;
  /** Bookings used for ROI: tracked when available, otherwise the screenshot estimate. */
  bookingsForRoi: number;
  revenueForRoi: number;
  roas: number | null;
  costPerBooking: number | null;
  breakEvenStudents: number | null;
  avgPrice: number;
  organic: OrganicCard[];
  extras: Record<string, number>;
  annotations: AppState['annotations'];
  locationNames: string[];
}

export function resolveRange(state: AppState, f: Filters, data: EffectiveData): DateRange {
  const dr = dataRange(data);
  const latestSnap = state.snapshots.reduce((m, s) => (s.takenAt.slice(0, 10) > m ? s.takenAt.slice(0, 10) : m), '');
  const end = dr?.end ?? latestSnap ?? state.settings.campaignStart;
  const start = dr?.start ?? state.settings.campaignStart;
  const clip = (r: DateRange): DateRange => ({
    start: r.start < start ? start : r.start > end ? end : r.start,
    end: r.end > end ? end : r.end < start ? start : r.end,
  });
  switch (f.preset) {
    case '7d':
      return clip({ start: addDays(end, -6), end });
    case '30d':
      return clip({ start: addDays(end, -29), end });
    case 'custom':
      return f.custom ? clip(f.custom) : { start, end };
    default:
      return { start: state.settings.campaignStart > start ? state.settings.campaignStart : start, end };
  }
}

const ORGANIC_CARDS: [Platform, OrganicMetric][] = [
  ['instagram', 'views'],
  ['instagram', 'followers_net'],
  ['instagram', 'profile_visits'],
  ['instagram', 'link_taps'],
  ['instagram', 'interactions'],
  ['instagram', 'messages'],
  ['facebook', 'follows'],
  ['facebook', 'interactions'],
  ['facebook', 'website_clicks'],
  ['facebook', 'messages'],
  ['facebook', 'views'],
];

export function buildModel(state: AppState, f: Filters): Model {
  const s = state.settings;
  const data = effectiveData(state.uploads);
  const dr = dataRange(data);
  const range = resolveRange(state, f, data);
  const adSets = adSetsFor(data, f.locations, s.locations);

  const t = totals(data, range, adSets);
  const prev = previousPeriod(range);
  const prevRange = f.preset !== 'launch' && dr && overlapDays(prev, dr) === daysBetween(prev.start, prev.end) ? prev : null;
  const pt = prevRange ? totals(data, prevRange, adSets) : null;

  // Bookings: "since launch" runs from the pre-launch screenshots to the latest screenshot.
  const latestSnap = state.snapshots.reduce((m, x) => (x.takenAt.slice(0, 10) > m ? x.takenAt.slice(0, 10) : m), '');
  let bRange = bookingPeriod(range, s);
  if (f.preset === 'launch' && latestSnap > bRange.end) bRange = { ...bRange, end: latestSnap };
  const bookings = summarizeBookings(state.classes, state.snapshots, s, bRange, bRange.end, f.locations);
  const prevBookings = prevRange ? summarizeBookings(state.classes, state.snapshots, s, prevRange, prevRange.end, f.locations) : null;

  const conv = state.conversions.filter(
    (c) => c.date >= range.start && c.date <= range.end && (!f.locations || !c.location || f.locations.includes(c.location)),
  );
  const tracked = state.conversions.length
    ? {
        count: conv.reduce((n, c) => n + c.count, 0),
        revenue: conv.some((c) => c.revenue) ? conv.reduce((n, c) => n + (c.revenue ?? 0), 0) : null,
      }
    : null;

  const avgPrice = bookings.soldInPeriod ? bookings.revenue / bookings.soldInPeriod : s.prices.Basic;
  const bookingsForRoi = tracked ? tracked.count : bookings.soldInPeriod * s.adCreditShare;
  const revenueForRoi = tracked ? tracked.revenue ?? tracked.count * avgPrice : bookings.revenue * s.adCreditShare;
  const spend = t?.metrics.spend ?? null;

  const organic: OrganicCard[] = [];
  for (const [platform, metric] of ORGANIC_CARDS) {
    const c = compare(state.organic, platform, metric, range, s.campaignStart);
    if (c) organic.push({ platform, metric, comparison: c });
  }

  const extras: Record<string, number> = {};
  for (const e of state.extras) {
    if (e.start >= range.start && e.end <= range.end && (!f.locations || !e.location || f.locations.includes(e.location))) {
      extras[e.metric] = (extras[e.metric] ?? 0) + e.value;
    }
  }

  return {
    data,
    range,
    dataRange: dr,
    prevRange,
    adSets,
    totals: t,
    prevTotals: pt,
    d: t ? derive(t.metrics) : null,
    prevD: pt ? derive(pt.metrics) : null,
    daily: dailySeries(data, range, adSets),
    adSetRows: byEntity(data, range, 'adset', adSets),
    adRows: byEntity(data, range, 'ad', adSets),
    age: byBreakdown(data, 'age', range, adSets),
    gender: byBreakdown(data, 'gender', range, adSets),
    placement: byBreakdown(data, 'placement', range, adSets),
    bookingRange: bRange,
    bookings,
    prevBookings,
    tracked,
    bookingsForRoi,
    revenueForRoi,
    roas: spend ? revenueForRoi / spend : null,
    costPerBooking: spend && bookingsForRoi ? spend / bookingsForRoi : null,
    breakEvenStudents: spend ? Math.ceil(spend / avgPrice) : null,
    avgPrice,
    organic,
    extras,
    annotations: state.annotations.filter((a) => a.date >= range.start && a.date <= addDays(range.end, 1)),
    locationNames: s.locations.map((l) => l.name),
  };
}

export function locationIndex(name: string | null, state: AppState): number {
  return name ? state.settings.locations.findIndex((l) => l.name === name) : -1;
}

export function adSetLocation(adSet: string, state: AppState): string | null {
  return locationOf(adSet, state.settings.locations);
}

export type { ISODate };
