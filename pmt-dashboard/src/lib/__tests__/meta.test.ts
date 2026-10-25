import { describe, expect, it } from 'vitest';
import { byBreakdown, byEntity, dailySeries, derive, effectiveData, totals } from '../ads';
import { parseMetaTable } from '../metaParser';
import { buildSeedState } from '../seed';
import { ADSET_TOTAL_CSV, CAMPAIGN_DAILY_CSV, PLACEMENT_CSV } from '../seed/metaCsv';
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
    expect(p.summary?.spend).toBe(485.04);
    expect(p.summary?.reach).toBe(39326);
    expect(p.start).toBe('2026-10-07');
    expect(p.end).toBe('2026-10-23');
  });

  it('detects a daily export', () => {
    const p = parseMetaTable(tableFromCsv(CAMPAIGN_DAILY_CSV));
    expect(p.daily).toBe(true);
    expect(p.rows).toHaveLength(17);
    expect(p.summary?.results).toBe(1553);
  });

  it('flags rows that do not add up to Meta\'s total', () => {
    const p = parseMetaTable(tableFromCsv(PLACEMENT_CSV));
    expect(p.breakdown).toBe('placement');
    expect(p.warnings.join(' ')).toMatch(/\$3\.94 less/);
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

describe('Seed totals tie to the brief', () => {
  it('campaign totals Oct 7–23', () => {
    const t = totals(data, FULL)!;
    expect(t.metrics.spend).toBe(485.04);
    expect(t.metrics.results).toBe(1553);
    expect(t.metrics.linkClicks).toBe(2051);
    expect(t.metrics.impressions).toBe(79751);
    expect(t.metrics.clicksAll).toBe(3215);
    expect(t.metrics.reach).toBe(39326);
    expect(t.reachQuality).toBe('exact');
    const d = derive(t.metrics);
    expect(d.costPerResult).toBeCloseTo(0.3123, 3);
    expect(d.linkCtr).toBeCloseTo(2051 / 79751, 6);
    expect(d.cpm).toBeCloseTo(6.08, 2);
    expect(d.frequency).toBeCloseTo(2.03, 2);
    expect(d.ctrAll).toBeCloseTo(0.0403, 3);
  });

  it('never adds reach across ad sets', () => {
    const rows = byEntity(data, FULL, 'adset');
    const summed = rows.reduce((s, r) => s + (r.metrics.reach ?? 0), 0);
    expect(summed).toBe(43145); // the overlap-inflated number
    expect(totals(data, FULL)!.metrics.reach).toBe(39326);
    // Woodland has two ad sets: reach is "at least" the larger one, not their sum.
    const wood = totals(data, FULL, ['Woodland beginner class oct7/26', 'WOOD IRC OCT7 PUSH 2 OCT24'])!;
    expect(wood.metrics.reach).toBe(15594);
    expect(wood.reachQuality).toBe('atLeast');
    expect(wood.metrics.spend).toBe(304.33);
    expect(wood.metrics.results).toBe(995);
  });

  it('ad sets add up to the campaign', () => {
    const rows = byEntity(data, FULL, 'adset');
    expect(rows).toHaveLength(4);
    const spend = rows.reduce((s, r) => s + (r.metrics.spend ?? 0), 0);
    expect(spend).toBeCloseTo(485.04, 2);
    const best = rows.sort((a, b) => derive(a.metrics).costPerResult! - derive(b.metrics).costPerResult!)[0];
    expect(best.key).toBe('Woodland beginner class oct7/26');
  });

  it('daily series sums to the totals', () => {
    const days = dailySeries(data, FULL)!;
    expect(days).toHaveLength(17);
    expect(days.reduce((s, d) => s + d.metrics.spend!, 0)).toBeCloseTo(485.04, 2);
    expect(days.reduce((s, d) => s + d.metrics.results!, 0)).toBe(1553);
  });

  it('a partial range uses daily numbers and leaves reach unknown', () => {
    const t = totals(data, { start: '2026-10-17', end: '2026-10-23' })!;
    expect(t.metrics.spend).toBeCloseTo(215.98, 2);
    expect(t.metrics.results).toBe(519);
    expect(t.metrics.reach).toBeNull();
    expect(t.metrics.impressions).toBeNull();
  });

  it('breakdowns add an "Other" row for unlisted placements', () => {
    const b = byBreakdown(data, 'placement', FULL)!;
    const other = b.rows.find((r) => r.isOther)!;
    expect(other.metrics.spend).toBeCloseTo(3.94, 2);
    expect(other.metrics.results).toBe(9);
    const g = byBreakdown(data, 'gender', FULL)!;
    expect(g.rows.find((r) => r.isOther)).toBeUndefined(); // $0.10 over is rounding, not a gap
  });
});

describe('Re-uploads replace instead of double counting', () => {
  it('replaces overlapping days from a newer daily file', () => {
    const first = upload('first', CAMPAIGN_DAILY_CSV, '2026-10-24T00:00:00Z');
    const again = upload('again', CAMPAIGN_DAILY_CSV, '2026-10-25T00:00:00Z');
    const d = effectiveData([first, again]);
    expect(totals(d, FULL)!.metrics.spend).toBe(485.04);
    expect(d.replacedBy.first).toBe('again');
  });

  it('keeps the older days a newer file does not cover', () => {
    const older = upload('older', CAMPAIGN_DAILY_CSV, '2026-10-24T00:00:00Z');
    const lastTwo = CAMPAIGN_DAILY_CSV.split('\n')
      .filter((l) => l.startsWith('Day') || l.startsWith('2026-10-22') || l.startsWith('2026-10-23'))
      .join('\n')
      .replace('2026-10-23,PMT October 3 Location push 1,Landing page views,39,16.09,40', '2026-10-23,PMT October 3 Location push 1,Landing page views,60,30.00,70');
    const newer = upload('newer', lastTwo, '2026-10-25T00:00:00Z');
    const d = effectiveData([older, newer]);
    const t = totals(d, FULL)!;
    // Oct 23 updated from $16.09 to $30.00; everything else unchanged.
    expect(t.metrics.spend).toBeCloseTo(485.04 - 16.09 + 30, 2);
    expect(t.metrics.results).toBe(1553 - 39 + 60);
    expect(d.replacedBy.older).toBeUndefined();
  });

  it('replaces a summary export with the same start date', () => {
    const a = upload('a', ADSET_TOTAL_CSV, '2026-10-24T00:00:00Z');
    const b = upload('b', ADSET_TOTAL_CSV, '2026-10-25T00:00:00Z');
    const d = effectiveData([a, b]);
    expect(byEntity(d, FULL, 'adset')).toHaveLength(4);
    expect(totals(d, FULL)!.metrics.spend).toBe(485.04);
    expect(d.replacedBy.a).toBe('b');
  });
});
