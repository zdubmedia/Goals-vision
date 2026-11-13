// Calendar-date helpers. Dates are plain 'YYYY-MM-DD' strings so they never
// shift with the viewer's time zone.

export type ISODate = string;

export interface DateRange {
  start: ISODate;
  end: ISODate;
}

const DAY_MS = 86_400_000;

function toUTC(d: ISODate): number {
  const [y, m, day] = d.split('-').map(Number);
  return Date.UTC(y, m - 1, day);
}

function fromUTC(ms: number): ISODate {
  return new Date(ms).toISOString().slice(0, 10);
}

export function isISODate(s: unknown): s is ISODate {
  return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(toUTC(s));
}

export function addDays(d: ISODate, n: number): ISODate {
  return fromUTC(toUTC(d) + n * DAY_MS);
}

/** Inclusive number of days from start to end. */
export function daysBetween(start: ISODate, end: ISODate): number {
  return Math.round((toUTC(end) - toUTC(start)) / DAY_MS) + 1;
}

export function eachDay(start: ISODate, end: ISODate): ISODate[] {
  const out: ISODate[] = [];
  for (let d = start; d <= end; d = addDays(d, 1)) out.push(d);
  return out;
}

export function overlap(a: DateRange, b: DateRange): DateRange | null {
  const start = a.start > b.start ? a.start : b.start;
  const end = a.end < b.end ? a.end : b.end;
  return start <= end ? { start, end } : null;
}

export function overlapDays(a: DateRange, b: DateRange): number {
  const o = overlap(a, b);
  return o ? daysBetween(o.start, o.end) : 0;
}

/** Jaccard similarity of two ranges, in days. 1 = identical. */
export function rangeSimilarity(a: DateRange, b: DateRange): number {
  const inter = overlapDays(a, b);
  if (!inter) return 0;
  const union = daysBetween(a.start < b.start ? a.start : b.start, a.end > b.end ? a.end : b.end);
  return inter / union;
}

export function sameRange(a: DateRange, b: DateRange): boolean {
  return a.start === b.start && a.end === b.end;
}

/** The equal-length period immediately before `r`. */
export function previousPeriod(r: DateRange): DateRange {
  const len = daysBetween(r.start, r.end);
  return { start: addDays(r.start, -len), end: addDays(r.start, -1) };
}

/** Parses the date formats Meta and spreadsheets produce into 'YYYY-MM-DD'. */
export function parseDate(v: unknown): ISODate | null {
  if (v instanceof Date && !Number.isNaN(v.getTime())) {
    return fromUTC(Date.UTC(v.getFullYear(), v.getMonth(), v.getDate()));
  }
  if (typeof v === 'number' && v > 20000 && v < 80000) {
    // Excel serial date
    return fromUTC(Date.UTC(1899, 11, 30) + Math.round(v) * DAY_MS);
  }
  if (typeof v !== 'string') return null;
  const s = v.trim();
  let m = /^(\d{4})-(\d{1,2})-(\d{1,2})/.exec(s);
  if (m) return pad(+m[1], +m[2], +m[3]);
  m = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/.exec(s);
  if (m) {
    const y = +m[3] < 100 ? 2000 + +m[3] : +m[3];
    return pad(y, +m[1], +m[2]);
  }
  const t = Date.parse(s);
  if (!Number.isNaN(t)) {
    const d = new Date(t);
    return pad(d.getFullYear(), d.getMonth() + 1, d.getDate());
  }
  return null;
}

function pad(y: number, m: number, d: number): ISODate | null {
  if (m < 1 || m > 12 || d < 1 || d > 31) return null;
  return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** 'Oct 7' (adds the year when `withYear`). */
export function fmtDate(d: ISODate, withYear = false): string {
  const [y, m, day] = d.split('-').map(Number);
  return `${MONTHS[m - 1]} ${day}${withYear ? `, ${y}` : ''}`;
}

/** 'Oct 7 – 23, 2026' or 'Sep 25 – Oct 22, 2026'. */
export function fmtRange(r: DateRange, withYear = true): string {
  if (r.start === r.end) return fmtDate(r.start, withYear);
  const [y1, m1] = r.start.split('-').map(Number);
  const [y2, m2, d2] = r.end.split('-').map(Number);
  const yearSuffix = withYear ? `, ${y2}` : '';
  if (y1 === y2 && m1 === m2) return `${fmtDate(r.start)} – ${d2}${yearSuffix}`;
  if (y1 === y2) return `${fmtDate(r.start)} – ${fmtDate(r.end)}${yearSuffix}`;
  return `${fmtDate(r.start, true)} – ${fmtDate(r.end, true)}`;
}

export function todayISO(): ISODate {
  const d = new Date();
  return pad(d.getFullYear(), d.getMonth() + 1, d.getDate())!;
}
