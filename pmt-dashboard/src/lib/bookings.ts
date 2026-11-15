import { addDays, type DateRange, type ISODate } from './dates';
import type { ClassFormat, ClassKind, ClassSession, SeatSnapshot, Settings } from './types';

export const FORMAT_LABEL: Record<ClassFormat, string> = {
  eMTC: 'Basic (online classroom)',
  MTC: 'Basic (in-person classroom)',
  IRC: 'Intermediate (IRC)',
  '1DPC': 'Intermediate licensing (1DPC)',
};

export function kindOf(format: ClassFormat): ClassKind {
  return format === 'IRC' || format === '1DPC' ? 'Intermediate' : 'Basic';
}

export interface CapacityRules {
  seatsPerClass: number;
  sharedRangeCap: number;
  intermediateSplitSeats: number;
}

export function rulesFrom(s: Settings): CapacityRules {
  return { seatsPerClass: s.seatsPerClass, sharedRangeCap: s.sharedRangeCap, intermediateSplitSeats: s.intermediateSplitSeats };
}

/** Why a class has the capacity it has, in plain words. */
export function capacityInfo(c: ClassSession, all: ClassSession[], rules: CapacityRules): { capacity: number; reason: string } {
  if (c.capacityOverride) return { capacity: c.capacityOverride, reason: 'Set by hand' };
  if (kindOf(c.format) === 'Intermediate') {
    return { capacity: rules.intermediateSplitSeats, reason: `Intermediate classes sell ${c.format} as its own ${rules.intermediateSplitSeats}-seat registration` };
  }
  const sharesRange = all.some(
    (o) => o.location === c.location && kindOf(o.format) === 'Intermediate' && o.startDate >= c.startDate && o.startDate <= c.endDate,
  );
  return sharesRange
    ? { capacity: rules.sharedRangeCap, reason: `An Intermediate class uses the same range that weekend, so this class is capped at ${rules.sharedRangeCap}` }
    : { capacity: rules.seatsPerClass, reason: `Standard class size (${rules.seatsPerClass})` };
}

export function capacityOf(c: ClassSession, all: ClassSession[], rules: CapacityRules): number {
  return capacityInfo(c, all, rules).capacity;
}

const endOfDay = (d: ISODate) => `${d}T23:59`;
const startOfDay = (d: ISODate) => `${d}T00:00`;

export function snapshotsFor(classId: string, snapshots: SeatSnapshot[]): SeatSnapshot[] {
  return snapshots.filter((s) => s.classId === classId).sort((a, b) => (a.takenAt < b.takenAt ? -1 : a.takenAt > b.takenAt ? 1 : 0));
}

/** Seats left as of a moment: the last screenshot taken at or before it. */
export function seatsLeftAt(snaps: SeatSnapshot[], moment: string): number | null {
  let v: number | null = null;
  for (const s of snaps) {
    if (s.takenAt <= moment) v = s.seatsLeft;
    else break;
  }
  return v;
}

/**
 * Seats sold between two dates (inclusive): seats left going into the period
 * minus seats left at its end. A class first seen inside the period starts
 * from its first screenshot.
 */
export function soldBetween(snaps: SeatSnapshot[], from: ISODate, to: ISODate): number {
  if (!snaps.length) return 0;
  const endLeft = seatsLeftAt(snaps, endOfDay(to));
  if (endLeft === null) return 0;
  let opening = seatsLeftAt(snaps, startOfDay(from));
  if (opening === null) opening = snaps[0].seatsLeft;
  return Math.max(0, opening - endLeft);
}

export interface ClassStatus {
  cls: ClassSession;
  kind: ClassKind;
  capacity: number;
  capacityReason: string;
  snapshots: SeatSnapshot[];
  firstSeatsLeft: number | null;
  latestSeatsLeft: number | null;
  latestAt: string | null;
  /** Booked before tracking started: capacity − first seats-left value. */
  bookedBeforeTracking: number;
  /** Booked during the selected period. */
  soldInPeriod: number;
  booked: number;
  soldOut: boolean;
  droppedOff: boolean;
  normal: { seats: number; share: number } | null;
  vsNormal: 'above' | 'at' | 'below' | 'selling' | null;
}

export function normalShareFor(c: ClassSession, settings: Settings): number | null {
  const loc = settings.locations.find((l) => l.name === c.location);
  if (!loc) return null;
  if (kindOf(c.format) === 'Intermediate') return loc.normalFillIntermediate;
  return c.time === 'PM' ? loc.normalFillPM : loc.normalFillAM;
}

/**
 * Compare with "normal" only once a class is close to its date (within a week)
 * or sold out; further-out classes are still selling.
 */
export function classStatus(
  c: ClassSession,
  all: ClassSession[],
  snapshots: SeatSnapshot[],
  settings: Settings,
  period: DateRange,
  asOf: ISODate,
): ClassStatus {
  const { capacity, reason } = capacityInfo(c, all, rulesFrom(settings));
  const snaps = snapshotsFor(c.id, snapshots);
  const first = snaps[0]?.seatsLeft ?? null;
  const latestSnap = [...snaps].reverse().find((s) => s.takenAt <= endOfDay(asOf)) ?? null;
  const latest = latestSnap?.seatsLeft ?? null;
  const booked = latest === null ? 0 : Math.max(0, capacity - latest);
  const share = normalShareFor(c, settings);
  const normal = share === null ? null : { share, seats: Math.round(share * capacity) };
  let vsNormal: ClassStatus['vsNormal'] = null;
  if (normal && latest !== null) {
    const nearDate = c.startDate <= addDays(asOf, 7);
    if (!nearDate && latest > 0) vsNormal = 'selling';
    else vsNormal = booked > normal.seats ? 'above' : booked === normal.seats ? 'at' : 'below';
  }
  return {
    cls: c,
    kind: kindOf(c.format),
    capacity,
    capacityReason: reason,
    snapshots: snaps,
    firstSeatsLeft: first,
    latestSeatsLeft: latest,
    latestAt: latestSnap?.takenAt ?? null,
    bookedBeforeTracking: first === null ? 0 : Math.max(0, capacity - first),
    soldInPeriod: soldBetween(snaps, period.start, period.end),
    booked,
    soldOut: latest === 0,
    droppedOff: !!c.droppedOffAt,
    normal,
    vsNormal,
  };
}

export interface BookingSummary {
  statuses: ClassStatus[];
  soldInPeriod: number;
  byLocation: Record<string, number>;
  bookedBeforeTracking: number;
  revenue: number;
  revenueByKind: Record<ClassKind, number>;
  /** Cumulative seats sold since the period start, on each screenshot date. */
  running: { date: ISODate; total: number }[];
}

export function summarizeBookings(
  classes: ClassSession[],
  snapshots: SeatSnapshot[],
  settings: Settings,
  period: DateRange,
  asOf: ISODate,
  locations: string[] | null = null,
): BookingSummary {
  const scoped = locations ? classes.filter((c) => locations.includes(c.location)) : classes;
  const statuses = scoped.map((c) => classStatus(c, classes, snapshots, settings, period, asOf));
  const byLocation: Record<string, number> = {};
  const revenueByKind: Record<ClassKind, number> = { Basic: 0, Intermediate: 0 };
  let sold = 0;
  for (const s of statuses) {
    sold += s.soldInPeriod;
    byLocation[s.cls.location] = (byLocation[s.cls.location] ?? 0) + s.soldInPeriod;
    revenueByKind[s.kind] += s.soldInPeriod * settings.prices[s.kind];
  }
  const ids = new Set(scoped.map((c) => c.id));
  const dates = [
    ...new Set(
      snapshots
        .filter((s) => ids.has(s.classId))
        .map((s) => s.takenAt.slice(0, 10))
        .filter((d) => d >= period.start && d <= period.end),
    ),
  ].sort();
  const running = dates.map((date) => ({
    date,
    total: statuses.reduce((t, s) => t + soldBetween(s.snapshots, period.start, date), 0),
  }));
  return {
    statuses,
    soldInPeriod: sold,
    byLocation,
    bookedBeforeTracking: statuses.reduce((t, s) => t + s.bookedBeforeTracking, 0),
    revenue: revenueByKind.Basic + revenueByKind.Intermediate,
    revenueByKind,
    running,
  };
}

/** Booking window for a dashboard range: "since launch" starts at the pre-launch screenshots. */
export function bookingPeriod(range: DateRange, settings: Settings): DateRange {
  const start = range.start <= settings.campaignStart ? settings.bookingsBaselineDate : range.start;
  return { start, end: range.end };
}

export interface ClassGroup {
  key: string;
  location: string;
  kind: ClassKind;
  startDate: ISODate;
  endDate: ISODate;
  time: ClassSession['time'];
  members: ClassStatus[];
  capacity: number;
  booked: number;
  soldInPeriod: number;
  bookedBeforeTracking: number;
  seatsLeft: number | null;
}

/** IRC and 1DPC on the same day and location are shown as one 12-seat Intermediate class. */
export function groupClasses(statuses: ClassStatus[]): ClassGroup[] {
  const groups = new Map<string, ClassGroup>();
  for (const s of statuses) {
    const c = s.cls;
    const key = s.kind === 'Intermediate' ? `${c.location}|INT|${c.startDate}` : `${c.location}|${c.id}`;
    const g =
      groups.get(key) ??
      ({
        key,
        location: c.location,
        kind: s.kind,
        startDate: c.startDate,
        endDate: c.endDate,
        time: c.time,
        members: [],
        capacity: 0,
        booked: 0,
        soldInPeriod: 0,
        bookedBeforeTracking: 0,
        seatsLeft: 0,
      } as ClassGroup);
    g.members.push(s);
    g.capacity += s.capacity;
    g.booked += s.booked;
    g.soldInPeriod += s.soldInPeriod;
    g.bookedBeforeTracking += s.bookedBeforeTracking;
    g.seatsLeft = g.seatsLeft === null || s.latestSeatsLeft === null ? null : g.seatsLeft + s.latestSeatsLeft;
    groups.set(key, g);
  }
  return [...groups.values()].sort((a, b) => (a.startDate < b.startDate ? -1 : a.startDate > b.startDate ? 1 : a.location.localeCompare(b.location)));
}

export function classTitle(c: Pick<ClassSession, 'format' | 'startDate' | 'endDate' | 'time'>): string {
  const kind = kindOf(c.format);
  const fmt = kind === 'Basic' ? ` ${c.format}` : '';
  const time = c.time ? ` ${c.time}` : '';
  return `${kind}${fmt}${time}`;
}
