import type { ISODate } from './dates';

// ---------- Meta Ads ----------

export type Level = 'campaign' | 'adset' | 'ad';
export type BreakdownType = 'none' | 'age' | 'gender' | 'platform' | 'placement' | 'device' | 'region';

/** Raw counts. `null` means the export didn't include that column. */
export interface AdMetrics {
  spend: number | null;
  impressions: number | null;
  reach: number | null;
  results: number | null;
  linkClicks: number | null;
  clicksAll: number | null;
  views: number | null;
  /** Instagram profile visits that came from the ads. */
  igProfileVisits: number | null;
  /** Likes, comments, shares, saves and clicks on the ads (Meta: post engagements). */
  postEngagements: number | null;
  /** Meta's own CTR (all), kept only for rows that have no impressions to recompute from. */
  ctrAllReported: number | null;
  /** Extra conversion columns (e.g. "Website schedules"), for future true-booking tracking. */
  conversions?: Record<string, number>;
}

export interface AdRow extends AdMetrics {
  level: Level;
  campaign: string;
  adSet: string;
  ad: string;
  start: ISODate;
  end: ISODate;
  daily: boolean;
  breakdown: BreakdownType;
  /** e.g. '35-44', 'male', 'instagram · Instagram Reels'. Empty when no breakdown. */
  breakdownValue: string;
  /** Meta's top summary row (blank name). Used as the total; never added into sums. */
  isSummary: boolean;
  deliveryStatus?: string;
  resultType?: string;
  attribution?: string;
  /** Meta's relevance rankings (ad set / ad level). */
  rankings?: { quality?: string; engagement?: string; conversion?: string };
}

export interface MetaUpload {
  id: string;
  fileName: string;
  uploadedAt: string;
  level: Level;
  breakdown: BreakdownType;
  daily: boolean;
  start: ISODate;
  end: ISODate;
  rows: AdRow[];
  warnings: string[];
  rawKey?: string;
}

// ---------- Bookings ----------

export type ClassFormat = 'eMTC' | 'MTC' | 'IRC' | '1DPC';
export type ClassKind = 'Basic' | 'Intermediate';

export interface ClassSession {
  id: string;
  location: string;
  format: ClassFormat;
  startDate: ISODate;
  endDate: ISODate;
  time: 'AM' | 'PM' | '';
  capacityOverride?: number | null;
  /** Set when the class stopped appearing on the registration page. */
  droppedOffAt?: ISODate | null;
  note?: string;
}

export interface SeatSnapshot {
  id: string;
  classId: string;
  /** 'YYYY-MM-DDTHH:mm' local time of the screenshot. */
  takenAt: string;
  seatsLeft: number;
  imageKey?: string;
  note?: string;
  readBy?: 'manual' | 'claude';
}

// ---------- Organic ----------

export type Platform = 'instagram' | 'facebook';

export type OrganicMetric =
  | 'views'
  | 'reach'
  | 'viewers'
  | 'followers_total'
  | 'followers_net'
  | 'follows'
  | 'unfollows'
  | 'profile_visits'
  | 'link_taps'
  | 'website_clicks'
  | 'interactions'
  | 'messages'
  | 'video_views';

export interface OrganicEntry {
  id: string;
  platform: Platform;
  metric: OrganicMetric;
  start: ISODate;
  end: ISODate;
  value: number;
  /** Same-length period right before, when the source shows a comparison (e.g. "+521%"). */
  prevValue?: number | null;
  note?: string;
  /** Business Suite totals that may count people who saw ads. */
  includesAds?: boolean;
  source: 'manual' | 'upload' | 'seed';
  uploadId?: string;
}

export interface OrganicUpload {
  id: string;
  fileName: string;
  uploadedAt: string;
  entryCount: number;
  rawKey?: string;
}

// ---------- Other inputs ----------

export interface Annotation {
  id: string;
  date: ISODate;
  label: string;
  kind: 'launch' | 'change' | 'class' | 'note';
}

export type ExtraMetric = 'phone_calls' | 'dms' | 'gbp_calls' | 'gbp_website_clicks';

export interface ExtraEntry {
  id: string;
  metric: ExtraMetric;
  start: ISODate;
  end: ISODate;
  value: number;
  location?: string;
  note?: string;
}

/** Bookings confirmed by real conversion tracking (Pixel / GA4 / manual). */
export interface ConversionEntry {
  id: string;
  date: ISODate;
  count: number;
  revenue?: number | null;
  location?: string;
  source: 'pixel' | 'ga4' | 'manual';
}

export interface Creative {
  adName: string;
  adSet: string;
  headline: string;
  primaryText: string;
  /** Ad images in display order (the first is the cover). */
  imageKeys?: string[];
  /** Older single-image field, still read for saved data. */
  imageKey?: string;
}

/** A file shared with the client (ad layout, ideas guide, ...). */
export interface Resource {
  id: string;
  title: string;
  description: string;
  key: string;
  fileName: string;
  contentType: string;
  size: number;
  addedAt: string;
  /** Cover image for videos. */
  posterKey?: string;
}

export interface ArchiveMeta {
  id: string;
  label: string;
  createdAt: string;
  range: { start: ISODate; end: ISODate };
}

// ---------- Settings ----------

export const SECTION_KEYS = [
  'kpis',
  'moneyBought',
  'overTime',
  'locations',
  'creatives',
  'funnel',
  'audience',
  'organic',
  'bookings',
  'roi',
  'insights',
  'tracking',
  'resources',
] as const;
export type SectionKey = (typeof SECTION_KEYS)[number];

export interface LocationSetting {
  name: string;
  /** Words that identify this location in ad set names (case-insensitive). */
  keywords: string[];
  /** Typical fill before ads, as a share of capacity (0–1). */
  normalFillAM: number | null;
  normalFillPM: number | null;
  normalFillIntermediate: number | null;
  registrationUrl?: string;
}

export interface BenchmarkBand {
  /** Below `good` is great (for costs) — above `good` is great for rates. */
  good: number;
  typical: number;
}

export interface Settings {
  clientName: string;
  clientShortName: string;
  campaignName: string;
  agencyName: string;
  agencyUrl?: string;
  campaignStart: ISODate;
  /** Date of the "before" registration screenshots. */
  bookingsBaselineDate: ISODate;
  prices: Record<ClassKind, number>;
  seatsPerClass: number;
  sharedRangeCap: number;
  intermediateSplitSeats: number;
  locations: LocationSetting[];
  adSetBudgets: Record<string, number | null>;
  benchmarks: {
    costPerVisit: BenchmarkBand;
    cpc: BenchmarkBand;
    cpm: BenchmarkBand;
    linkCtr: BenchmarkBand;
  };
  alerts: {
    frequency: number;
    costPerVisitRise: number;
    underspend: number;
  };
  /** Where the "share of sign-ups from the ads" slider starts (0–1). */
  adCreditShare: number;
  /** PMT's profit on each class fee (0–1). */
  profitMargin: number;
  sections: Record<SectionKey, boolean>;
  pmtLogoKey?: string | null;
  agencyLogoKey?: string | null;
}

export interface ShareSettings {
  token: string;
  passwordHash?: string | null;
}

export interface AppState {
  version: number;
  updatedAt: string;
  dataUpdatedAt: string;
  settings: Settings;
  uploads: MetaUpload[];
  classes: ClassSession[];
  snapshots: SeatSnapshot[];
  organic: OrganicEntry[];
  organicUploads: OrganicUpload[];
  annotations: Annotation[];
  extras: ExtraEntry[];
  conversions: ConversionEntry[];
  creatives: Creative[];
  resources: Resource[];
  insightsHtml: string;
  insightsUpdatedAt: string;
  archive: ArchiveMeta[];
  /** Admin only: stripped from anything the client sees. */
  share?: ShareSettings;
  adminNotes?: string;
}

// ---------- Screenshot reading ----------

/** What Claude read from a registration-page screenshot. */
export interface VisionClass {
  title: string;
  dates: string;
  time: 'AM' | 'PM' | '';
  seatsLeft: number | null;
  seatsTotal: number | null;
  soldOut: boolean;
}

export interface VisionResult {
  location: string | null;
  classes: VisionClass[];
  notes: string;
}

/** A creative's images, oldest single-image data included. */
export function creativeImages(c: Creative): string[] {
  return c.imageKeys?.length ? c.imageKeys : c.imageKey ? [c.imageKey] : [];
}
