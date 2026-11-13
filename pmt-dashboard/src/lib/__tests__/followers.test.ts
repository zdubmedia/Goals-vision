import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { applyFollowerReport, friendlyAdName, parseFollowerReport } from '../followerReport';
import { seedFollowers, summarizeFollowers, upgradeFollowers } from '../followers';
import { DEFAULT_SETTINGS } from '../seed';
import { tableFromCsv } from '../tabular';

const csv = readFileSync(new URL('./fixtures/follower-report-nov11.csv', import.meta.url), 'utf8');

describe('follower report CSV', () => {
  const parsed = parseFollowerReport(tableFromCsv(csv));

  it('reads the Nov 1–11 report like the PDF', () => {
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    const r = parsed.report;
    expect(parsed.warnings).toEqual([]);
    expect(r).toMatchObject({ periodStart: '2026-11-01', periodEnd: '2026-11-11' });
    expect(r.totals).toEqual({ spend: 187.79, reach: 18072, impressions: 31276, igFollows: 80, results: 1282 });
    expect(r.ads.map((a) => [a.metaName, a.spend, a.igFollows])).toContainEqual(['ad3 - Learn2Ride the right way', 140.78, 60]);
    expect(r.pages.instagram).toMatchObject({ newFollows: 125, visits: 523, reach: 10310, conversations: 10 });
    expect(r.pages.facebook).toMatchObject({ newFollows: 95, visits: 1630, reach: 21387, conversations: 1 });
    expect(r.followers).toEqual({ instagram: { total: 583, date: '2026-11-12' }, facebook: { total: 697, date: '2026-11-12' } });
    expect(r.daily).toHaveLength(28);
  });

  it('refuses a file in another format', () => {
    const r = parseFollowerReport(tableFromCsv('Campaign name,Amount spent\nX,10'));
    expect(r.ok).toBe(false);
  });

  it('warns when the ads do not add up to the campaign total', () => {
    const short = csv
      .split('\n')
      .filter((l) => !l.includes('ad4 - parents under21'))
      .join('\n');
    const r = parseFollowerReport(tableFromCsv(short));
    expect(r.ok && r.warnings.join(' ')).toMatch(/adds up to \$174\.87/);
  });

  it('turns Ads Manager names into short ones', () => {
    expect(friendlyAdName('ad3 - Learn2Ride the right way')).toBe('Learn2Ride the right way');
    expect(friendlyAdName('ad 2 - dreading DMV test')).toBe('Dreading DMV test');
  });
});

describe('follower campaign', () => {
  const f = seedFollowers();
  const s = summarizeFollowers(f, DEFAULT_SETTINGS);

  it('starts from the Nov 1–11 report, keeping the friendly ad names', () => {
    expect(f.asOf).toBe('2026-11-11');
    expect(f.ads.map((a) => a.name)).toEqual(['Learn to ride the right way', 'Parents of riders under 21', 'Dreading the DMV test?', 'Been off the bike for years?']);
    expect(s.spend).toBeCloseTo(187.79);
    expect(s.adFollows).toBe(80);
    expect(s.profileVisits).toBe(1282);
    expect(s.adReach).toBe(18072);
    expect(s.newFollows).toBe(220);
    expect(s.messagers).toBe(11);
    expect(s.unfollows).toBeNull();
    expect(s.startTotal).toBe(1065);
    expect(s.nowTotal).toBe(1280);
  });

  it('works out cost per follower both ways, like the report', () => {
    expect(s.costPerFollower).toBeCloseTo(0.85, 2);
    expect(s.costPerAdFollower).toBeCloseTo(2.35, 2);
  });

  it('compares follows a day before and during the ads', () => {
    expect(s.pace?.before).toEqual({ start: '2026-10-15', end: '2026-10-31', days: 17 });
    expect(s.pace?.perDay.instagram.before).toBeCloseTo(30 / 17);
    expect(s.pace?.perDay.instagram.during).toBeCloseTo(125 / 11);
    expect(s.pace?.perDay.facebook.during).toBeCloseTo(95 / 11);
  });

  it('shows what it takes to pay for the ads at a 14% margin', () => {
    expect(s.profitPerStudent).toBeCloseTo(59.5);
    // $187.79 ÷ $59.50 = 3.16, so 4 students: about 1 in 55 of 220 followers.
    expect(s.breakEvenStudents).toBe(4);
    expect(Math.round(1 / s.breakEvenShare!)).toBe(55);
  });

  it('leaves a campaign someone already saved alone, apart from filling in Ads Manager names', () => {
    const edited = { ...f, updatedAt: '2026-11-11T08:00:00.000Z', ads: f.ads.map((a) => ({ ...a, metaName: undefined })) };
    const up = upgradeFollowers(edited);
    expect(up.asOf).toBe('2026-11-11');
    expect(up.ads.find((a) => a.id === 'fad-3')?.metaName).toBe('ad3 - Learn2Ride the right way');
  });

  it('adds an ad it has not seen before', () => {
    const parsed = parseFollowerReport(tableFromCsv(csv));
    if (!parsed.ok) throw new Error('parse');
    const rep = { ...parsed.report, ads: [...parsed.report.ads, { metaName: 'ad5 - gift cards', spend: 5, reach: 100, impressions: 120, igFollows: 1, results: 3 }] };
    const next = applyFollowerReport(f, rep, () => 'new-id');
    expect(next.ads.find((a) => a.id === 'new-id')).toMatchObject({ name: 'Gift cards', metaName: 'ad5 - gift cards', spend: 5 });
  });
});
