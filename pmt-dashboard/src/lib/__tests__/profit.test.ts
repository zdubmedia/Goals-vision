import { describe, expect, it } from 'vitest';
import { buildModel, DEFAULT_FILTERS } from '../model';
import { buildSeedState } from '../seed';

describe('profit and break-even', () => {
  it('uses PMT’s 14% margin on each seat', () => {
    const m = buildModel(buildSeedState('x'), DEFAULT_FILTERS);
    expect(m.bookings.soldInPeriod).toBe(39);
    expect(m.profitPerStudent).toBeCloseTo(59.5);
    expect(m.profitAllSeats).toBeCloseTo(2320.5);
    // $503.36 of ads ÷ $59.50 profit a student = 8.46, so 9 students.
    expect(m.totals?.metrics.spend).toBeCloseTo(503.36);
    expect(m.breakEvenStudents).toBe(9);
    expect(m.breakEvenShare).toBeCloseTo(9 / 39);
  });

  it('follows the margin setting', () => {
    const s = buildSeedState('x');
    s.settings.profitMargin = 0.2;
    const m = buildModel(s, DEFAULT_FILTERS);
    expect(m.profitPerStudent).toBeCloseTo(85);
    expect(m.breakEvenStudents).toBe(6);
  });
});
