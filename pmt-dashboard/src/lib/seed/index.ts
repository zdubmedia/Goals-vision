import { parseMetaTable } from '../metaParser';
import { tableFromCsv } from '../tabular';
import {
  SECTION_KEYS,
  type AppState,
  type ClassFormat,
  type ClassSession,
  type MetaUpload,
  type OrganicEntry,
  type SeatSnapshot,
  type Settings,
} from '../types';
import { SEED_FILES } from './metaCsv';

export const DEFAULT_SETTINGS: Settings = {
  clientName: 'Pacific Motorcycle Training',
  clientShortName: 'PMT',
  campaignName: 'PMT October 3 Location push 1',
  agencyName: 'ZDub Media',
  campaignStart: '2026-10-07',
  bookingsBaselineDate: '2026-10-06',
  prices: { Basic: 425, Intermediate: 425 },
  seatsPerClass: 12,
  sharedRangeCap: 10,
  intermediateSplitSeats: 6,
  locations: [
    { name: 'Woodland', keywords: ['woodland', 'wood'], normalFillAM: 1, normalFillPM: 0.5, normalFillIntermediate: null },
    { name: 'Cloverdale', keywords: ['cloverdale', 'clover'], normalFillAM: 1, normalFillPM: 0.5, normalFillIntermediate: null },
    { name: 'Eureka', keywords: ['eureka', 'humboldt', 'redwood'], normalFillAM: 1, normalFillPM: 0.5, normalFillIntermediate: null },
  ],
  adSetBudgets: {
    'Woodland beginner class oct7/26': 10,
    'WOOD IRC OCT7 PUSH 2 OCT24': 10,
    'Eureka BRC oct726 push1': 5,
    'Cloverdale BRC OCT726 push1': null,
  },
  benchmarks: {
    costPerVisit: { good: 0.5, typical: 1.5 },
    cpc: { good: 0.5, typical: 1.5 },
    cpm: { good: 8, typical: 15 },
    linkCtr: { good: 0.015, typical: 0.009 },
  },
  alerts: { frequency: 2.5, costPerVisitRise: 0.4, underspend: 0.7 },
  adCreditShare: 1,
  sections: Object.fromEntries(SECTION_KEYS.map((k) => [k, true])) as Settings['sections'],
};

const SEED_TIME = '2026-10-23T18:00:00.000Z';

function seedUploads(): MetaUpload[] {
  return SEED_FILES.map((f, i) => {
    const p = parseMetaTable(tableFromCsv(f.csv));
    if (!p.ok) throw new Error(`Seed file ${f.fileName} failed: ${p.errors.join(' ')}`);
    return {
      id: `seed-meta-${i + 1}`,
      fileName: f.fileName,
      // Spaced a second apart so "newest wins" ordering is stable.
      uploadedAt: new Date(Date.parse(SEED_TIME) + i * 1000).toISOString(),
      level: p.level,
      breakdown: p.breakdown,
      daily: p.daily,
      start: p.start,
      end: p.end,
      rows: p.summary ? [p.summary, ...p.rows] : p.rows,
      warnings: p.warnings,
    };
  });
}

type SnapSpec = [string, number];
interface ClassSpec {
  id: string;
  location: string;
  format: ClassFormat;
  start: string;
  end: string;
  time: 'AM' | 'PM' | '';
  snaps: SnapSpec[];
  droppedOffAt?: string;
  note?: string;
}

// Seats LEFT from the registration-page screenshots. Times are approximate
// except where the brief gave one ("eve" = 7 PM).
const CLASS_SPECS: ClassSpec[] = [
  { id: 'wd-1010-am', location: 'Woodland', format: 'eMTC', start: '2026-10-10', end: '2026-10-11', time: 'AM', snaps: [['10-06T08:00', 5], ['10-07T12:00', 4], ['10-09T12:00', 3], ['10-10T08:00', 3]] },
  { id: 'wd-1024-am', location: 'Woodland', format: 'eMTC', start: '2026-10-24', end: '2026-10-25', time: 'AM', snaps: [['10-06T08:00', 1], ['10-07T12:00', 0]] },
  { id: 'wd-1024-pm', location: 'Woodland', format: 'eMTC', start: '2026-10-24', end: '2026-10-25', time: 'PM', snaps: [['10-06T08:00', 10], ['10-10T12:00', 9], ['10-15T12:00', 8], ['10-17T12:00', 7], ['10-23T12:00', 0]] },
  { id: 'wd-1024-irc', location: 'Woodland', format: 'IRC', start: '2026-10-24', end: '2026-10-24', time: '', snaps: [['10-07T12:00', 5], ['10-07T19:00', 4], ['10-13T12:00', 4], ['10-23T12:00', 4]] },
  { id: 'wd-1024-1dpc', location: 'Woodland', format: '1DPC', start: '2026-10-24', end: '2026-10-24', time: '', snaps: [['10-07T12:00', 4], ['10-13T12:00', 3], ['10-23T12:00', 3]] },
  { id: 'wd-1121-irc', location: 'Woodland', format: 'IRC', start: '2026-11-21', end: '2026-11-21', time: '', snaps: [['10-23T12:00', 6]] },
  { id: 'wd-1121-1dpc', location: 'Woodland', format: '1DPC', start: '2026-11-21', end: '2026-11-21', time: '', snaps: [['10-23T12:00', 6]] },
  { id: 'wd-1031-am', location: 'Woodland', format: 'eMTC', start: '2026-10-31', end: '2026-11-01', time: 'AM', snaps: [['10-06T08:00', 12], ['10-09T12:00', 11], ['10-23T12:00', 11]] },
  { id: 'wd-1107-am', location: 'Woodland', format: 'eMTC', start: '2026-11-07', end: '2026-11-08', time: 'AM', snaps: [['10-09T12:00', 12], ['10-23T12:00', 11]] },
  { id: 'wd-1121-am', location: 'Woodland', format: 'eMTC', start: '2026-11-21', end: '2026-11-22', time: 'AM', snaps: [['10-09T12:00', 10], ['10-23T12:00', 10]] },
  { id: 'wd-1121-pm', location: 'Woodland', format: 'eMTC', start: '2026-11-21', end: '2026-11-22', time: 'PM', snaps: [['10-09T12:00', 10], ['10-17T12:00', 10], ['10-23T12:00', 8]] },
  { id: 'wd-1205-am', location: 'Woodland', format: 'eMTC', start: '2026-12-05', end: '2026-12-06', time: 'AM', snaps: [['10-12T12:00', 12], ['10-23T12:00', 12]] },
  { id: 'cd-1010-am', location: 'Cloverdale', format: 'eMTC', start: '2026-10-10', end: '2026-10-11', time: 'AM', snaps: [['10-06T08:00', 7], ['10-07T12:00', 6], ['10-09T12:00', 5], ['10-10T08:00', 5]] },
  {
    id: 'cd-1024-pm',
    location: 'Cloverdale',
    format: 'MTC',
    start: '2026-10-24',
    end: '2026-10-25',
    time: 'PM',
    snaps: [['10-06T08:00', 10], ['10-07T12:00', 8], ['10-17T13:41', 7]],
    droppedOffAt: '2026-10-23',
    note: 'Dropped off the registration page after Oct 17 — sold out or registration closed?',
  },
  { id: 'cd-1107-am', location: 'Cloverdale', format: 'eMTC', start: '2026-11-07', end: '2026-11-08', time: 'AM', snaps: [['10-06T08:00', 12], ['10-09T12:00', 11], ['10-17T12:00', 10]] },
  { id: 'cd-1121-pm', location: 'Cloverdale', format: 'MTC', start: '2026-11-21', end: '2026-11-22', time: 'PM', snaps: [['10-06T08:00', 12], ['10-17T12:00', 11]] },
  { id: 'cd-1212-am', location: 'Cloverdale', format: 'eMTC', start: '2026-12-12', end: '2026-12-13', time: 'AM', snaps: [['10-13T12:00', 12], ['10-17T12:00', 12]] },
  { id: 'eu-1010-pm', location: 'Eureka', format: 'MTC', start: '2026-10-10', end: '2026-10-11', time: 'PM', snaps: [['10-06T08:00', 8], ['10-09T12:00', 6], ['10-10T08:00', 6]] },
  {
    id: 'eu-1024-am',
    location: 'Eureka',
    format: 'eMTC',
    start: '2026-10-24',
    end: '2026-10-25',
    time: 'AM',
    snaps: [['10-06T08:00', 10], ['10-07T12:00', 8], ['10-14T14:00', 6], ['10-14T20:00', 4], ['10-16T12:00', 3], ['10-17T12:00', 2], ['10-23T12:00', 2]],
  },
  { id: 'eu-1105-am', location: 'Eureka', format: 'MTC', start: '2026-11-05', end: '2026-11-08', time: 'AM', snaps: [['10-06T08:00', 12], ['10-07T19:00', 11], ['10-09T12:00', 10], ['10-23T12:00', 10]] },
  { id: 'eu-1128-am', location: 'Eureka', format: 'eMTC', start: '2026-11-28', end: '2026-11-29', time: 'AM', snaps: [['10-06T08:00', 12], ['10-23T12:00', 12]] },
  { id: 'eu-1212-am', location: 'Eureka', format: 'eMTC', start: '2026-12-12', end: '2026-12-13', time: 'AM', snaps: [['10-13T12:00', 12], ['10-23T12:00', 12]] },
];

export function seedClasses(): { classes: ClassSession[]; snapshots: SeatSnapshot[] } {
  const classes: ClassSession[] = [];
  const snapshots: SeatSnapshot[] = [];
  for (const c of CLASS_SPECS) {
    classes.push({
      id: c.id,
      location: c.location,
      format: c.format,
      startDate: c.start,
      endDate: c.end,
      time: c.time,
      droppedOffAt: c.droppedOffAt ?? null,
      note: c.note,
    });
    c.snaps.forEach(([at, left], i) => {
      snapshots.push({ id: `${c.id}-s${i + 1}`, classId: c.id, takenAt: `2026-${at}`, seatsLeft: left, readBy: 'manual' });
    });
  }
  return { classes, snapshots };
}

function seedOrganic(): OrganicEntry[] {
  const out: OrganicEntry[] = [];
  const ig = (metric: OrganicEntry['metric'], vals: [string, number][]) =>
    vals.forEach(([start, value]) =>
      out.push({ id: `ig-${metric}-${start}`, platform: 'instagram', metric, start, end: '2026-10-22', value, source: 'seed' }),
    );
  // Instagram rolling windows ending Oct 22: 30d starts Sep 23, 60d Aug 24, 90d Jul 25.
  ig('views', [['2026-09-23', 18905], ['2026-08-24', 25663], ['2026-07-25', 26543]]);
  ig('viewers', [['2026-09-23', 5464], ['2026-08-24', 7549]]);
  ig('followers_net', [['2026-09-23', 63], ['2026-08-24', 88], ['2026-07-25', 98]]);
  ig('follows', [['2026-09-23', 71], ['2026-08-24', 104]]);
  ig('interactions', [['2026-09-23', 360], ['2026-08-24', 511], ['2026-07-25', 532]]);
  ig('profile_visits', [['2026-09-23', 342], ['2026-08-24', 485], ['2026-07-25', 555]]);
  ig('link_taps', [['2026-09-23', 35], ['2026-08-24', 41], ['2026-07-25', 43]]);

  const fb = (metric: OrganicEntry['metric'], value: number, changePct: number | null, extra: Partial<OrganicEntry> = {}) =>
    out.push({
      id: `fb-${metric}`,
      platform: 'facebook',
      metric,
      start: '2026-09-25',
      end: '2026-10-22',
      value,
      prevValue: changePct === null ? null : Math.round(value / (1 + changePct)),
      source: 'seed',
      ...extra,
    });
  fb('views', 60500, 5.21, { includesAds: true, note: 'Facebook counts views of the ads here too, so this is not purely organic.' });
  fb('interactions', 214, 2.63);
  fb('follows', 23, 1.56);
  fb('messages', 1, null);
  out.push({ id: 'fb-followers-total', platform: 'facebook', metric: 'followers_total', start: '2026-10-22', end: '2026-10-22', value: 595, source: 'seed' });
  return out;
}

export const SEED_INSIGHTS = `<h3>What worked</h3>
<ul>
<li><strong>Website visits came in cheap.</strong> The ads sent 1,553 people to the class registration pages for $0.31 each. Local ads usually cost $0.50–$1.50 per visit.</li>
<li><strong>Woodland's beginner ad performed best</strong> at $0.24 per visit (628 visits from $151).</li>
<li><strong>Classes filled up.</strong> About 39 seats were booked between Oct 6 and Oct 23. The Woodland Oct 24–25 afternoon class sold out, and afternoon classes usually fill only about half.</li>
<li><strong>Eureka's Oct 24–25 morning class</strong> went from 10 open seats to 2.</li>
<li><strong>Instagram woke up.</strong> Over the last 30 days, views nearly tripled compared with the month before, and taps on the website link in the bio jumped from 6 to 35.</li>
</ul>
<h3>What we're changing next</h3>
<ul>
<li>The cost per visit went up last week (about $0.42, up from $0.24 the week before). That usually means people have seen the ads a lot, so we're refreshing the images and headlines.</li>
<li>Eureka's ad has been seen about 2.4 times per person, close to the point where people stop noticing it. New creative is next there too.</li>
<li>To count bookings from ads exactly, we'll link Instagram to the Facebook Page and add Meta's tracking code (the Pixel) to the registration pages.</li>
</ul>`;

export function buildSeedState(shareToken: string, now = SEED_TIME): AppState {
  const { classes, snapshots } = seedClasses();
  return {
    version: 1,
    updatedAt: now,
    dataUpdatedAt: SEED_TIME,
    settings: structuredClone(DEFAULT_SETTINGS),
    uploads: seedUploads(),
    classes,
    snapshots,
    organic: seedOrganic(),
    organicUploads: [],
    annotations: [
      { id: 'a-launch', date: '2026-10-07', label: 'Ads launched', kind: 'launch' },
      { id: 'a-class-1010', date: '2026-10-10', label: 'Oct 10–11 classes', kind: 'class' },
      { id: 'a-class-1024', date: '2026-10-24', label: 'Oct 24–25 classes + Woodland Intermediate', kind: 'class' },
    ],
    extras: [],
    conversions: [],
    creatives: [
      { adName: 'Woodland BRC static', adSet: 'Woodland beginner class oct7/26', headline: 'Wobble Here, Not on the Freeway', primaryText: '' },
      {
        adName: 'WOOD IRC',
        adSet: 'WOOD IRC OCT7 PUSH 2 OCT24',
        headline: 'A few small tweaks. Ten times the control. One Saturday in October.',
        primaryText: 'Intermediate class Saturday, Oct 24 at Pioneer High School, Woodland.',
      },
      { adName: 'Eureka BRC oct7 push1', adSet: 'Eureka BRC oct726 push1', headline: 'Skip the DMV Riding Test. Learn to Ride the Right Way From Day One.', primaryText: '' },
      {
        adName: 'Cloverdale BRC Oct726 push1',
        adSet: 'Cloverdale BRC OCT726 push1',
        headline: 'Skip the DMV Riding Test. Learn to Ride the Right Way From Day One.',
        primaryText: '',
      },
    ],
    insightsHtml: SEED_INSIGHTS,
    insightsUpdatedAt: SEED_TIME,
    archive: [],
    share: { token: shareToken, passwordHash: null },
  };
}
