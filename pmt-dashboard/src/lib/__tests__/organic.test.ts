import { describe, expect, it } from 'vitest';
import { compare, derivePeriods, guessColumn, valueFor } from '../organic';
import { buildSeedState } from '../seed';
import type { OrganicEntry } from '../types';

const seed = buildSeedState('t');
const RANGE = { start: '2026-10-07', end: '2026-10-23' };
const ig = (m: OrganicEntry['metric']) => seed.organic.filter((e) => e.platform === 'instagram' && e.metric === m);

describe('Rolling windows → non-overlapping periods', () => {
  it('"month before" = 60 days − 30 days', () => {
    const expected: [OrganicEntry['metric'], number][] = [
      ['views', 6758],
      ['followers_net', 25],
      ['interactions', 151],
      ['profile_visits', 143],
      ['link_taps', 6],
    ];
    for (const [metric, v] of expected) {
      expect(valueFor(ig(metric), metric, { start: '2026-08-24', end: '2026-09-22' })).toBe(v);
    }
  });

  it('derives the third month too (90 − 60)', () => {
    const p = derivePeriods(ig('views'));
    expect(p.find((x) => x.start === '2026-07-25' && x.end === '2026-08-23')?.value).toBe(880);
  });

  it('compares the latest 30 days with the 30 before', () => {
    const c = compare(seed.organic, 'instagram', 'link_taps', RANGE, '2026-10-07')!;
    expect(c.current.value).toBe(35);
    expect(c.baseline?.value).toBe(6);
    expect(c.lift).toBeCloseTo(29 / 6, 5);
    expect(c.campaignDays).toBe(16);
    expect(c.chain.map((p) => p.value)).toEqual([2, 6, 35]);
  });

  it('uses Facebook\'s own "vs previous period" percentage', () => {
    const c = compare(seed.organic, 'facebook', 'follows', RANGE, '2026-10-07')!;
    expect(c.current.value).toBe(23);
    expect(c.baseline?.value).toBe(9);
    expect(c.baseline?.start).toBe('2026-08-28');
  });

  it('prefers daily numbers when they cover the range', () => {
    const daily: OrganicEntry[] = [];
    // Sep 20 – Oct 23: 5 a day before launch, 20 a day after.
    for (let i = 0; i < 34; i++) {
      const d = new Date(Date.UTC(2026, 8, 20 + i)).toISOString().slice(0, 10);
      daily.push({ id: d, platform: 'instagram', metric: 'profile_visits', start: d, end: d, value: d >= '2026-10-07' ? 20 : 5, source: 'manual' });
    }
    const c = compare(daily, 'instagram', 'profile_visits', RANGE, '2026-10-07')!;
    expect(c.current.value).toBe(17 * 20);
    expect(c.baseline).toMatchObject({ start: '2026-09-20', end: '2026-10-06', value: 17 * 5 });
    expect(c.lift).toBe(3);
  });
});

describe('Business Suite column guesses', () => {
  it('maps common headers', () => {
    expect(guessColumn('Instagram profile visits')).toEqual({ platform: 'instagram', metric: 'profile_visits' });
    expect(guessColumn('Facebook Page website clicks')).toEqual({ platform: 'facebook', metric: 'website_clicks' });
    expect(guessColumn('Instagram external link taps')).toEqual({ platform: 'instagram', metric: 'link_taps' });
    expect(guessColumn('Instagram followers')).toEqual({ platform: 'instagram', metric: 'followers_total' });
  });
});
