import { describe, expect, it } from 'vitest';
import { seedFollowers, summarizeFollowers } from '../followers';
import { DEFAULT_SETTINGS } from '../seed';

describe('follower campaign', () => {
  const s = summarizeFollowers(seedFollowers('2026-11-10T00:00:00.000Z'), DEFAULT_SETTINGS);

  it('adds up the Nov 1–10 numbers from Meta', () => {
    expect(s.spend).toBeCloseTo(159.55);
    expect(s.adFollows).toBe(154);
    expect(s.profileVisits).toBe(1107);
    expect(s.adViews).toBe(26983);
    expect(s.newFollows).toBe(194);
    expect(s.unfollows).toBe(6);
    expect(s.startTotal).toBe(1065);
    expect(s.nowTotal).toBe(1253);
    expect(s.messagers).toBe(9);
    expect(s.days).toBe(10);
  });

  it('works out cost per follower both ways, like the week 1 report', () => {
    expect(s.costPerFollower).toBeCloseTo(0.82, 2);
    expect(s.costPerAdFollower).toBeCloseTo(1.04, 2);
  });

  it('shows what it takes to pay for the ads at a 14% margin', () => {
    expect(s.profitPerStudent).toBeCloseTo(59.5);
    // $159.55 ÷ $59.50 = 2.68, so 3 students: about 1 in 65 of 194 followers.
    expect(s.breakEvenStudents).toBe(3);
    expect(Math.round(1 / s.breakEvenShare!)).toBe(65);
    const one = s.scenarios.find((r) => r.rate === 0.01)!;
    expect(one.students).toBeCloseTo(1.94);
    expect(one.ladderProfit).toBeCloseTo(1.94 * 1300 * 0.14);
  });
});
