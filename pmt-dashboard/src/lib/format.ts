const DASH = '—';

export function money(n: number | null | undefined, digits?: number): string {
  if (n === null || n === undefined || !Number.isFinite(n)) return DASH;
  const d = digits ?? (Math.abs(n) >= 1000 ? 0 : 2);
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: d, maximumFractionDigits: d });
}

export function int(n: number | null | undefined): string {
  if (n === null || n === undefined || !Number.isFinite(n)) return DASH;
  return Math.round(n).toLocaleString('en-US');
}

export function compact(n: number | null | undefined): string {
  if (n === null || n === undefined || !Number.isFinite(n)) return DASH;
  if (Math.abs(n) < 10_000) return int(n);
  return n.toLocaleString('en-US', { notation: 'compact', maximumFractionDigits: 1 });
}

/** 0.0257 → '2.57%' */
export function pct(n: number | null | undefined, digits = 1): string {
  if (n === null || n === undefined || !Number.isFinite(n)) return DASH;
  return `${(n * 100).toFixed(digits)}%`;
}

export function num(n: number | null | undefined, digits = 2): string {
  if (n === null || n === undefined || !Number.isFinite(n)) return DASH;
  return n.toFixed(digits);
}

/** Signed change: '+12%' / '−8%'. */
export function deltaPct(n: number | null | undefined): string {
  if (n === null || n === undefined || !Number.isFinite(n)) return DASH;
  const v = Math.round(n * 100);
  return `${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.abs(v).toLocaleString('en-US')}%`;
}

export function change(cur: number | null | undefined, prev: number | null | undefined): number | null {
  if (cur === null || cur === undefined || prev === null || prev === undefined || prev === 0) return null;
  return (cur - prev) / prev;
}

export function fmtDateTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
}

/** '2026-10-14T20:00' → 'Oct 14, 8:00 PM' (screenshot times are local wall-clock). */
export function fmtSnapTime(takenAt: string): string {
  const [d, t] = takenAt.split('T');
  const [, m, day] = d.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (!t) return `${months[m - 1]} ${day}`;
  const [hh, mm] = t.split(':').map(Number);
  const h12 = hh % 12 || 12;
  return `${months[m - 1]} ${day}, ${h12}:${String(mm).padStart(2, '0')} ${hh < 12 ? 'AM' : 'PM'}`;
}

export function plural(n: number, one: string, many = `${one}s`): string {
  return `${int(n)} ${n === 1 ? one : many}`;
}

const PLACEMENT_NAMES: Record<string, string> = {
  'facebook · Feed': 'Facebook Feed',
  'instagram · Feed': 'Instagram Feed',
  'facebook · Search results': 'Facebook Search',
};

export function prettyBreakdown(key: string): string {
  if (PLACEMENT_NAMES[key]) return PLACEMENT_NAMES[key];
  const parts = key.split(' · ');
  if (parts.length === 2) {
    const [platform, place] = parts;
    const p = platform.charAt(0).toUpperCase() + platform.slice(1);
    return place.toLowerCase().startsWith(platform.toLowerCase()) ? place.replace(/^\w/, (c) => c.toUpperCase()) : `${p} ${place}`;
  }
  if (key === 'male') return 'Men';
  if (key === 'female') return 'Women';
  if (key === 'unknown') return 'Not specified';
  return key;
}
