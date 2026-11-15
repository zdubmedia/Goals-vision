import { describe, expect, it } from 'vitest';
import { byBreakdown, byEntity, dailySeries, derive, effectiveData, totals } from '../ads';
import { parseMetaTable } from '../metaParser';
import { buildSeedState } from '../seed';
import { ADSET_DAILY_CSV, ADSET_TOTAL_CSV, PLACEMENT_CSV } from '../seed/metaCsv';
import { tableFromCsv } from '../tabular';
import type { MetaUpload } from '../types';

const FULL = { start: '2026-10-07', end: '2026-10-23' };
const seed = buildSeedState('t');
const data = effectiveData(seed.uploads);

function upload(id: string, csv: string, uploadedAt: string): MetaUpload {
  const p = parseMetaTable(tableFromCsv(csv));
  return {
    id,
    fileName: id,
    uploadedAt,
    level: p.level,
    breakdown: p.breakdown,
    daily: p.daily,
    start: p.start,
    end: p.end,
    rows: p.summary ? [p.summary, ...p.rows] : p.rows,
    warnings: p.warnings,
  };
}

describe('Meta export parser', () => {
  it('detects level, breakdown and the summary row', () => {
    const p = parseMetaTable(tableFromCsv(ADSET_TOTAL_CSV));
    expect(p.ok).toBe(true);
    expect(p.level).toBe('adset');
    expect(p.breakdown).toBe('none');
    expect(p.daily).toBe(false);
    expect(p.rows).toHaveLength(4);
    expect(p.summary?.spend).toBe(503.36);
    expect(p.summary?.reach).toBe(40928);
    expect(p.rows[0].rankings?.conversion).toBe('Bottom 10%');
    expect(p.rows[0].igProfileVisits).toBe(134);
    expect(p.start).toBe('2026-10-07');
    expect(p.end).toBe('2026-10-23');
  });

  it('detects a daily export', () => {
    const p = parseMetaTable(tableFromCsv(ADSET_DAILY_CSV));
    expect(p.daily).toBe(true);
    expect(p.level).toBe('adset');
    expect(p.rows).toHaveLength(64); // Cloverdale stopped after Oct 19
    expect(p.summary?.results).toBe(1583);
  });

  it('flags rows that do not add up to Meta\'s total', () => {
    const p = parseMetaTable(tableFromCsv(PLACEMENT_CSV));
    expect(p.breakdown).toBe('placement');
    expect(p.warnings.join(' ')).toMatch(/\$0\.31 less/);
  });

  it('rejects files that are not Meta exports, with a clear message', () => {
    const p = parseMetaTable(tableFromCsv('Name,Score\nA,1\n'));
    expect(p.ok).toBe(false);
    expect(p.errors[0]).toMatch(/Amount spent/);
  });

  it('reads Meta\'s number formats', () => {
    const p = parseMetaTable(
      tableFromCsv('Reporting starts,Reporting ends,Campaign name,Amount spent (USD),Impressions,Results\n10/7/2026,10/23/2026,X,"$1,234.50","79,751",12\n'),
    );
    expect(p.rows[0].spend).toBe(1234.5);
    expect(p.rows[0].impressions).toBe(79751);
    expect(p.rows[0].start).toBe('2026-10-07');
  });
});

describe('Seed totals tie to the final Oct 7–23 report', () => {
  it('campaign totals Oct 7–23', () => {
    const t = totals(data, FULL)!;
    expect(t.metrics.spend).toBe(503.36);
    expect(t.metrics.results).toBe(1583);
    expect(t.metrics.linkClicks).toBe(2090);
    expect(t.metrics.impressions).toBe(82465);
    expect(t.metrics.clicksAll).toBe(3271);
    expect(t.metrics.reach).toBe(40928);
    expect(t.metrics.igProfileVisits).toBe(222);
    expect(t.metrics.postEngagements).toBe(7106);
    expect(t.reachQuality).toBe('exact');
    const d = derive(t.metrics);
    expect(d.costPerResult).toBeCloseTo(0.318, 3);
    expect(d.linkCtr).toBeCloseTo(0.0253, 4);
    expect(d.cpm).toBeCloseTo(6.1, 2);
    expect(d.frequency).toBeCloseTo(2.01, 2);
    expect(d.ctrAll).toBeCloseTo(0.0397, 4);
  });

  it('never adds reach across ad sets', () => {
    const rows = byEntity(data, FULL, 'adset');
    const summed = rows.reduce((s, r) => s + (r.metrics.reach ?? 0), 0);
    expect(summed).toBe(44329); // the overlap-inflated number
    expect(totals(data, FULL)!.metrics.reach).toBe(40928);
    // Woodland has two ad sets: reach is "at least" the larger one, not their sum.
    const wood = totals(data, FULL, ['Woodland beginner class oct7/26', 'WOOD IRC OCT7 PUSH 2 OCT24'])!;
    expect(wood.metrics.reach).toBe(15594);
    expect(wood.reachQuality).toBe('atLeast');
    expect(wood.metrics.spend).toBe(318.75);
    expect(wood.metrics.results).toBe(1021);
  });

  it('ad sets add up to the campaign', () => {
    const rows = byEntity(data, FULL, 'adset');
    expect(rows).toHaveLength(4);
    const spend = rows.reduce((s, r) => s + (r.metrics.spend ?? 0), 0);
    expect(spend).toBeCloseTo(503.36, 2);
    const best = rows.sort((a, b) => derive(a.metrics).costPerResult! - derive(b.metrics).costPerResult!)[0];
    expect(best.key).toBe('Woodland beginner class oct7/26');
  });

  it('daily series sums to the totals', () => {
    const days = dailySeries(data, FULL)!;
    expect(days).toHaveLength(17);
    expect(days.reduce((s, d) => s + d.metrics.spend!, 0)).toBeCloseTo(503.36, 2);
    expect(days.reduce((s, d) => s + d.metrics.results!, 0)).toBe(1583);
    expect(days.reduce((s, d) => s + d.metrics.impressions!, 0)).toBe(82465);
  });

  it('a partial range uses daily numbers and leaves reach unknown', () => {
    const t = totals(data, { start: '2026-10-17', end: '2026-10-23' })!;
    expect(t.metrics.spend).toBeCloseTo(234.3, 2);
    expect(t.metrics.results).toBe(549);
    expect(t.metrics.impressions).toBe(35025);
    expect(t.metrics.reach).toBeNull(); // daily reach can't be added up
  });

  it('breakdowns add an "Other" row for unlisted placements', () => {
    const b = byBreakdown(data, 'placement', FULL)!;
    const other = b.rows.find((r) => r.isOther)!;
    expect(other.metrics.spend).toBeCloseTo(0.31, 2);
    expect(other.metrics.results).toBe(1);
    const g = byBreakdown(data, 'gender', FULL)!;
    expect(g.rows.find((r) => r.isOther)).toBeUndefined(); // $0.04 over is rounding, not a gap
    expect(derive(g.rows.find((r) => r.key === 'female')!.metrics).linkCtr).toBeCloseTo(379 / 12433, 6);
  });
});

describe('Mixing report levels', () => {
  it('stitches ad-set-level days and a newer campaign-level day together', () => {
    const campaignDay = upload(
      'campaign-day',
      `Day,Campaign name,Result type,Results,Amount spent (USD),Link clicks
,,Landing page views,140,40.00,180
2026-10-24,PMT October 3 Location push 1,Landing page views,140,40.00,180
`,
      '2026-10-25T00:00:00Z',
    );
    const d = effectiveData([...seed.uploads, campaignDay]);
    const t = totals(d, { start: '2026-10-07', end: '2026-10-24' })!;
    expect(t.metrics.spend).toBeCloseTo(503.36 + 40, 2);
    expect(t.metrics.results).toBe(1583 + 140);
    expect(dailySeries(d, { start: '2026-10-07', end: '2026-10-24' })).toHaveLength(18);
    // Reach comes from the Oct 7–23 total, labelled as such, because it covers nearly the same days.
    expect(t.metrics.reach).toBe(40928);
    expect(t.reachQuality).toBe('otherRange');
  });
});

describe('Re-uploads replace instead of double counting', () => {
  it('replaces overlapping days from a newer daily file', () => {
    const first = upload('first', ADSET_DAILY_CSV, '2026-10-24T00:00:00Z');
    const again = upload('again', ADSET_DAILY_CSV, '2026-10-25T00:00:00Z');
    const d = effectiveData([first, again]);
    expect(totals(d, FULL)!.metrics.spend).toBe(503.36);
    expect(d.replacedBy.first).toBe('again');
  });

  it('keeps the older days a newer file does not cover', () => {
    const older = upload('older', ADSET_DAILY_CSV, '2026-10-24T00:00:00Z');
    const lastTwo = ADSET_DAILY_CSV.split('\n')
      .filter((l: string) => l.startsWith('Day') || l.startsWith('2026-10-22') || l.startsWith('2026-10-23'))
      .join('\n')
      .replace('2026-10-23,Woodland beginner class oct7/26,Landing page views,4,0.76,', '2026-10-23,Woodland beginner class oct7/26,Landing page views,10,5.00,');
    const newer = upload('newer', lastTwo, '2026-10-25T00:00:00Z');
    const d = effectiveData([older, newer]);
    const t = totals(d, FULL)!;
    // Woodland's Oct 23 updated from $0.76 to $5.00; everything else unchanged.
    expect(t.metrics.spend).toBeCloseTo(503.36 - 0.76 + 5, 2);
    expect(t.metrics.results).toBe(1583 - 4 + 10);
    expect(d.replacedBy.older).toBeUndefined();
  });

  it('replaces a summary export with the same start date', () => {
    const a = upload('a', ADSET_TOTAL_CSV, '2026-10-24T00:00:00Z');
    const b = upload('b', ADSET_TOTAL_CSV, '2026-10-25T00:00:00Z');
    const d = effectiveData([a, b]);
    expect(byEntity(d, FULL, 'adset')).toHaveLength(4);
    expect(totals(d, FULL)!.metrics.spend).toBe(503.36);
    expect(d.replacedBy.a).toBe('b');
  });
});
