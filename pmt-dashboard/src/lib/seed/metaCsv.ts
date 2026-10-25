// Seed data from the campaign brief (Oct 7–23, 2026), written in the same
// layout as Meta Ads Manager CSV exports so the real parser loads it.

const R = '2026-10-07,2026-10-23';
const CAMPAIGN = 'PMT October 3 Location push 1';
const ATTR = '7-day click or 1-day view';

export const CAMPAIGN_TOTAL_CSV = `Reporting starts,Reporting ends,Campaign name,Campaign delivery,Reach,Impressions,Frequency,Attribution setting,Result type,Results,Amount spent (USD),Cost per result,Link clicks,CPC (cost per link click),"CPM (cost per 1,000 impressions)",CTR (all),Clicks (all)
${R},,,39326,79751,2.03,${ATTR},Landing page views,1553,485.04,0.31,2051,0.24,6.08,4.03,3215
${R},${CAMPAIGN},active,39326,79751,2.03,${ATTR},Landing page views,1553,485.04,0.31,2051,0.24,6.08,4.03,3215
`;

export const ADSET_TOTAL_CSV = `Reporting starts,Reporting ends,Ad set name,Ad set delivery,Reach,Impressions,Frequency,Attribution setting,Result type,Results,Amount spent (USD),Cost per result,Link clicks,CPC (cost per link click),"CPM (cost per 1,000 impressions)",CTR (all),Clicks (all)
${R},,,39326,79751,2.03,${ATTR},Landing page views,1553,485.04,0.31,2051,0.24,6.08,4.03,3215
${R},Woodland beginner class oct7/26,,15594,27719,1.78,${ATTR},Landing page views,628,151.12,0.24,830,0.18,5.45,4.43,1229
${R},WOOD IRC OCT7 PUSH 2 OCT24,,12586,20884,1.66,${ATTR},Landing page views,367,153.21,0.42,487,0.31,7.34,3.24,676
${R},Eureka BRC oct726 push1,,6961,16444,2.36,${ATTR},Landing page views,306,93.24,0.30,410,0.23,5.67,4.72,776
${R},Cloverdale BRC OCT726 push1,,8004,14704,1.84,${ATTR},Landing page views,252,87.47,0.35,324,0.27,5.95,3.63,534
`;

export const AD_TOTAL_CSV = `Reporting starts,Reporting ends,Ad name,Ad set name,Reach,Impressions,Frequency,Result type,Results,Amount spent (USD),Link clicks,Clicks (all)
${R},,,39326,79751,2.03,Landing page views,1553,485.04,2051,3215
${R},Woodland BRC static,Woodland beginner class oct7/26,15594,27719,1.78,Landing page views,628,151.12,830,1229
${R},WOOD IRC,WOOD IRC OCT7 PUSH 2 OCT24,12586,20884,1.66,Landing page views,367,153.21,487,676
${R},Eureka BRC oct7 push1,Eureka BRC oct726 push1,6961,16444,2.36,Landing page views,306,93.24,410,776
${R},Cloverdale BRC Oct726 push1,Cloverdale BRC OCT726 push1,8004,14704,1.84,Landing page views,252,87.47,324,534
`;

const DAILY: [string, number, number, number][] = [
  ['10-07', 18.91, 49, 81],
  ['10-08', 23.58, 66, 106],
  ['10-09', 25.87, 83, 112],
  ['10-10', 23.23, 108, 140],
  ['10-11', 33.67, 165, 211],
  ['10-12', 29.55, 132, 179],
  ['10-13', 30.69, 143, 179],
  ['10-14', 35.54, 150, 198],
  ['10-15', 23.69, 88, 109],
  ['10-16', 24.33, 50, 56],
  ['10-17', 31.34, 69, 88],
  ['10-18', 41.05, 89, 119],
  ['10-19', 32.37, 97, 126],
  ['10-20', 26.62, 90, 122],
  ['10-21', 32.61, 68, 91],
  ['10-22', 35.9, 67, 94],
  ['10-23', 16.09, 39, 40],
];

export const CAMPAIGN_DAILY_CSV =
  `Day,Campaign name,Result type,Results,Amount spent (USD),Link clicks\n` +
  `,,Landing page views,1553,485.04,2051\n` +
  DAILY.map(([d, spend, lpv, clicks]) => `2026-${d},${CAMPAIGN},Landing page views,${lpv},${spend},${clicks}`).join('\n') +
  '\n';

export const AGE_CSV = `Reporting starts,Reporting ends,Campaign name,Age,Results,Amount spent (USD),CTR (all)
${R},,,1553,485.04,4.03
${R},${CAMPAIGN},18-24,64,25.91,3.40
${R},${CAMPAIGN},25-34,222,73.02,3.82
${R},${CAMPAIGN},35-44,373,100.87,4.41
${R},${CAMPAIGN},45-54,406,106.30,4.22
${R},${CAMPAIGN},55-64,229,74.05,3.97
${R},${CAMPAIGN},65+,259,104.89,3.74
`;

export const GENDER_CSV = `Reporting starts,Reporting ends,Campaign name,Gender,Results,Amount spent (USD),CTR (all)
${R},,,1553,485.04,4.03
${R},${CAMPAIGN},male,1243,393.79,3.76
${R},${CAMPAIGN},female,283,86.11,5.38
${R},${CAMPAIGN},unknown,27,5.24,6.68
`;

export const PLACEMENT_CSV = `Reporting starts,Reporting ends,Campaign name,Platform,Placement,Results,Amount spent (USD)
${R},,,,1553,485.04
${R},${CAMPAIGN},facebook,Feed,444,113.16
${R},${CAMPAIGN},instagram,Feed,98,36.86
${R},${CAMPAIGN},facebook,Facebook Reels,523,144.26
${R},${CAMPAIGN},instagram,Instagram Reels,380,155.96
${R},${CAMPAIGN},facebook,Facebook in-stream reels,37,15.42
${R},${CAMPAIGN},instagram,Instagram Stories,41,10.81
${R},${CAMPAIGN},facebook,Facebook Stories,16,3.69
${R},${CAMPAIGN},facebook,Search results,5,0.94
`;

export const SEED_FILES: { fileName: string; csv: string }[] = [
  { fileName: 'Seed – campaign total Oct 7–23.csv', csv: CAMPAIGN_TOTAL_CSV },
  { fileName: 'Seed – ad sets Oct 7–23.csv', csv: ADSET_TOTAL_CSV },
  { fileName: 'Seed – ads Oct 7–23.csv', csv: AD_TOTAL_CSV },
  { fileName: 'Seed – campaign by day.csv', csv: CAMPAIGN_DAILY_CSV },
  { fileName: 'Seed – by age.csv', csv: AGE_CSV },
  { fileName: 'Seed – by gender.csv', csv: GENDER_CSV },
  { fileName: 'Seed – by placement.csv', csv: PLACEMENT_CSV },
];
