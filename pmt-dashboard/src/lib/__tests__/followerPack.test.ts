import { readdirSync, readFileSync } from 'node:fs';
import { strToU8, zipSync } from 'fflate';
import { describe, expect, it } from 'vitest';
import { readFollowerFiles, sheetTables, toISO } from '../followerPack';

const dir = new URL('./fixtures/pack-nov18/', import.meta.url);
const files = readdirSync(dir).map((name) => ({ name, bytes: new Uint8Array(readFileSync(new URL(name, dir))) }));
const json = files.filter((f) => f.name.endsWith('.json'));
const csvs = files.filter((f) => f.name.endsWith('.csv'));

describe('reading the follower data pack', () => {
  const expectNov18 = async (input: { name: string; bytes: Uint8Array }[]) => {
    const r = await readFollowerFiles(input);
    expect(r.errors).toEqual([]);
    expect(r.warnings).toEqual([]);
    const rep = r.report!;
    expect(rep).toMatchObject({ periodStart: '2026-11-01', periodEnd: '2026-11-18', campaign: "NTC - PMT follower ads Nov'26" });
    expect(rep.totals).toEqual({ spend: 293.09, reach: 28785, impressions: 51757, igFollows: 113, results: 1903 });
    expect(rep.ads.map((a) => a.metaName)).toEqual(['ad3 - Learn2Ride the right way', 'ad 2 - dreading DMV test', 'ad4 - parents under21', 'ad1 - Been off the Bike 4 years?']);
    expect(rep.pages.instagram).toEqual({ newFollows: 176, unfollows: 10, views: 24116, reach: 10700, interactions: 325, visits: 731, conversations: 8 });
    expect(rep.pages.facebook).toMatchObject({ newFollows: 148, unfollows: 1, reach: 28600, visits: 2587, conversations: 3 });
    expect(rep.followers).toEqual({ instagram: { total: 632, date: '2026-11-18' }, facebook: { total: 744, date: '2026-11-18' } });
    expect(rep.startFollowers).toEqual({ instagram: 466, facebook: 597 });
    expect(rep.baseline).toEqual({ start: '2026-08-20', end: '2026-10-06' });
    expect(rep.adPeriods).toEqual([{ label: 'October ad run', start: '2026-10-07', end: '2026-10-23' }]);
    expect(rep.otherCampaigns?.map((c) => c.name)).toEqual(['New Traffic Campaign']);
    expect(rep.topCities?.facebook?.[0]).toEqual({ city: 'San Jose, CA', share: 0.146 });
    // Partial Nov 18 left out.
    expect(rep.daily).toHaveLength(90);
    expect(rep.daily[rep.daily.length - 1]).toEqual({ date: '2026-11-17', instagram: 8, facebook: 8 });
    return r;
  };

  it('reads the JSON file on its own', async () => {
    await expectNov18(json);
  });

  it('reads the CSV tables on their own', async () => {
    await expectNov18(csvs);
  });

  it('reads a zip with folders, pictures and a PDF, skipping what has no numbers', async () => {
    const zip = zipSync({
      'pack/csv/': new Uint8Array(),
      ...Object.fromEntries(files.map((f) => [`pack/csv/${f.name}`, f.bytes])),
      'pack/report.pdf': strToU8('%PDF-1.4 not really'),
      'pack/screenshots/ads.jpg': new Uint8Array([0xff, 0xd8, 0xff]),
      '__MACOSX/pack/._report.pdf': strToU8('junk'),
    });
    const r = await expectNov18([{ name: 'PMT_Nov2026_Dashboard_Data_Pack.zip', bytes: zip }]);
    expect(r.skipped).toEqual(expect.arrayContaining(['report.pdf', 'ads.jpg']));
  });

  it('says plainly when only pictures and PDFs were given', async () => {
    const r = await readFollowerFiles([{ name: 'report.pdf', bytes: strToU8('%PDF') }]);
    expect(r.report).toBeNull();
    expect(r.errors.join(' ')).toMatch(/PDFs and pictures can’t be read/);
  });

  it('still reads the one-file CSV from the guide', async () => {
    const long = readFileSync(new URL('./fixtures/follower-report-nov11.csv', import.meta.url));
    const r = await readFollowerFiles([{ name: 'report.csv', bytes: new Uint8Array(long) }]);
    expect(r.report?.totals?.spend).toBe(187.79);
  });

  it('reads an Excel workbook through its sheets, sections and date numbers', async () => {
    const daily = [
      ['Date', 'Period', 'Ads running', 'FB follows', 'IG follows'],
      [46327, 'November follower ads', 'Yes', 2, 10],
      [46328, 'November follower ads', 'Yes', 14, 25],
    ];
    const ads = [
      ['CAMPAIGNS'],
      ['Period', 'Campaign', 'Result Type', 'Results', 'Reach', 'Impressions', 'Spend', 'IG follows'],
      ['Nov 1-2', 'Follower ads', 'Profile and Page visits', 120, 3000, 5000, 40, 35],
      ['', '', '', '', '', '', 40, 35],
      [],
      ['ADS'],
      ['Period', 'Ad', 'Ad set', 'Result Type', 'Results', 'Reach', 'Impressions', 'Spend', 'IG follows'],
      ['Nov 1-2', 'ad3 - Learn2Ride the right way', 'Follower ADS', 'Profile and Page visits', 120, 3000, 5000, 40, 35],
    ];
    const r = await readFollowerFiles([{ name: 'report.xlsx', bytes: new Uint8Array([1]) }], async () => [
      { sheet: 'Daily', data: daily },
      { sheet: 'Ads', data: ads },
    ]);
    expect(r.report?.totals).toMatchObject({ spend: 40, igFollows: 35 });
    expect(r.report?.ads).toHaveLength(1);
    expect(r.report?.otherCampaigns).toBeUndefined(); // the unnamed total row isn't a campaign
    expect(r.report?.daily).toEqual([
      { date: '2026-11-01', instagram: 10, facebook: 2 },
      { date: '2026-11-02', instagram: 25, facebook: 14 },
    ]);
    // Without page totals, new follows are added up from the days, with a warning.
    expect(r.report?.pages.instagram?.newFollows).toBe(35);
    expect(r.warnings.join(' ')).toMatch(/added up from the daily numbers/);
  });

  it('splits sheets into tables and turns Excel day numbers into dates', () => {
    expect(sheetTables([['Title'], ['a', 'b'], [1, 2], [], ['c', 'd'], [3, 4]]).map((t) => t.headers)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
    expect(toISO(46327)).toBe('2026-11-01');
    expect(toISO(46254)).toBe('2026-08-20');
    expect(toISO('2026-11-01 14:10')).toBe('2026-11-01');
  });
});
