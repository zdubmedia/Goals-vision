// Seed data: final Meta Ads Manager results for Oct 7–23, 2026 (pulled Oct 24),
// written in the same layout as Ads Manager CSV exports so the real parser loads it.

const R = '2026-10-07,2026-10-23';
const CAMPAIGN = 'PMT October 3 Location push 1';
const ATTR = '7-day click or 1-day view';

export const CAMPAIGN_TOTAL_CSV = `Reporting starts,Reporting ends,Campaign name,Reach,Impressions,Frequency,Attribution setting,Result type,Results,Amount spent (USD),Cost per result,Link clicks,CPC (cost per link click),"CPM (cost per 1,000 impressions)",CTR (all),Clicks (all),Instagram profile visits,Post engagements
${R},,40928,82465,2.01,${ATTR},Landing page views,1583,503.36,0.32,2090,0.24,6.1,3.97,3271,222,7106
${R},${CAMPAIGN},40928,82465,2.01,${ATTR},Landing page views,1583,503.36,0.32,2090,0.24,6.1,3.97,3271,222,7106
`;

export const ADSET_TOTAL_CSV = `Reporting starts,Reporting ends,Ad set name,Reach,Impressions,Frequency,Attribution setting,Result type,Results,Amount spent (USD),Link clicks,Clicks (all),Instagram profile visits,Post engagements,Quality ranking,Engagement rate ranking,Conversion rate ranking
${R},,40928,82465,2.01,${ATTR},Landing page views,1583,503.36,2090,3271,222,7106,,,
${R},Woodland beginner class oct7/26,15594,27720,1.78,${ATTR},Landing page views,628,151.13,830,1229,134,2937,Average,Above average,Bottom 10%
${R},WOOD IRC OCT7 PUSH 2 OCT24,13568,22933,1.69,${ATTR},Landing page views,393,167.62,515,709,25,2124,Above average,Above average,Bottom 10%
${R},Eureka BRC oct726 push1,7163,17108,2.39,${ATTR},Landing page views,310,97.14,421,799,34,1642,Above average,Above average,Bottom 10%
${R},Cloverdale BRC OCT726 push1,8004,14704,1.84,${ATTR},Landing page views,252,87.47,324,534,29,403,Above average,Above average,Bottom 10%
`;

export const AD_TOTAL_CSV = `Reporting starts,Reporting ends,Ad name,Ad set name,Reach,Impressions,Frequency,Result type,Results,Amount spent (USD),Link clicks,Clicks (all),Instagram profile visits,Post engagements
${R},,,40928,82465,2.01,Landing page views,1583,503.36,2090,3271,222,7106
${R},Woodland BRC static,Woodland beginner class oct7/26,15594,27720,1.78,Landing page views,628,151.13,830,1229,134,2937
${R},WOOD IRC,WOOD IRC OCT7 PUSH 2 OCT24,13568,22933,1.69,Landing page views,393,167.62,515,709,25,2124
${R},Eureka BRC oct7 push1,Eureka BRC oct726 push1,7163,17108,2.39,Landing page views,310,97.14,421,799,34,1642
${R},Cloverdale BRC Oct726 push1,Cloverdale BRC OCT726 push1,8004,14704,1.84,Landing page views,252,87.47,324,534,29,403
`;

export const ADSET_DAILY_CSV = `Day,Ad set name,Result type,Results,Amount spent (USD),Impressions,Reach,Link clicks,Clicks (all)
,,Landing page views,1583,503.36,82465,,2090,3271
2026-10-07,Cloverdale BRC OCT726 push1,Landing page views,7,3.67,511,460,13,22
2026-10-07,Eureka BRC oct726 push1,Landing page views,8,2.60,397,323,12,15
2026-10-07,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,5,3.00,387,365,6,10
2026-10-07,Woodland beginner class oct7/26,Landing page views,29,9.64,1516,1372,50,65
2026-10-08,Cloverdale BRC OCT726 push1,Landing page views,12,4.16,615,533,16,18
2026-10-08,Eureka BRC oct726 push1,Landing page views,10,4.03,616,511,26,25
2026-10-08,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,15,6.23,669,607,28,30
2026-10-08,Woodland beginner class oct7/26,Landing page views,29,9.16,1307,1095,36,54
2026-10-09,Cloverdale BRC OCT726 push1,Landing page views,12,5.24,800,687,13,20
2026-10-09,Eureka BRC oct726 push1,Landing page views,16,4.30,652,533,18,29
2026-10-09,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,15,4.98,588,551,19,33
2026-10-09,Woodland beginner class oct7/26,Landing page views,40,11.35,1786,1444,62,84
2026-10-10,Cloverdale BRC OCT726 push1,Landing page views,15,4.41,779,678,22,36
2026-10-10,Eureka BRC oct726 push1,Landing page views,19,3.17,564,461,22,32
2026-10-10,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,15,5.86,893,814,20,41
2026-10-10,Woodland beginner class oct7/26,Landing page views,59,9.79,1784,1535,76,102
2026-10-11,Cloverdale BRC OCT726 push1,Landing page views,18,6.00,1100,953,24,38
2026-10-11,Eureka BRC oct726 push1,Landing page views,22,5.39,1022,825,29,56
2026-10-11,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,35,8.30,1147,1014,46,72
2026-10-11,Woodland beginner class oct7/26,Landing page views,90,13.98,2899,2522,112,173
2026-10-12,Cloverdale BRC OCT726 push1,Landing page views,19,6.06,1208,1048,26,52
2026-10-12,Eureka BRC oct726 push1,Landing page views,16,4.79,1003,843,26,43
2026-10-12,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,23,7.04,1048,947,28,48
2026-10-12,Woodland beginner class oct7/26,Landing page views,74,11.66,2765,2402,99,147
2026-10-13,Cloverdale BRC OCT726 push1,Landing page views,37,8.48,1685,1444,46,77
2026-10-13,Eureka BRC oct726 push1,Landing page views,22,6.91,1587,1290,27,70
2026-10-13,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,22,7.62,1421,1301,30,64
2026-10-13,Woodland beginner class oct7/26,Landing page views,62,7.68,1958,1695,76,111
2026-10-14,Cloverdale BRC OCT726 push1,Landing page views,39,9.96,1877,1657,46,80
2026-10-14,Eureka BRC oct726 push1,Landing page views,31,9.78,2030,1610,50,108
2026-10-14,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,45,11.04,1481,1372,56,65
2026-10-14,Woodland beginner class oct7/26,Landing page views,35,4.76,1151,1059,46,80
2026-10-15,Cloverdale BRC OCT726 push1,Landing page views,27,7.50,1355,1166,33,47
2026-10-15,Eureka BRC oct726 push1,Landing page views,24,7.10,1460,1245,32,65
2026-10-15,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,15,5.17,796,738,17,26
2026-10-15,Woodland beginner class oct7/26,Landing page views,22,3.92,901,831,27,38
2026-10-16,Cloverdale BRC OCT726 push1,Landing page views,13,6.17,927,759,11,23
2026-10-16,Eureka BRC oct726 push1,Landing page views,10,4.64,754,619,14,21
2026-10-16,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,14,7.44,976,881,18,24
2026-10-16,Woodland beginner class oct7/26,Landing page views,13,6.08,1025,917,13,23
2026-10-17,Cloverdale BRC OCT726 push1,Landing page views,15,9.17,1341,1056,20,32
2026-10-17,Eureka BRC oct726 push1,Landing page views,11,4.66,695,557,14,23
2026-10-17,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,20,8.33,1070,955,24,28
2026-10-17,Woodland beginner class oct7/26,Landing page views,23,9.18,1466,1277,30,34
2026-10-18,Cloverdale BRC OCT726 push1,Landing page views,23,12.44,1868,1347,36,61
2026-10-18,Eureka BRC oct726 push1,Landing page views,15,6.00,887,706,17,37
2026-10-18,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,25,11.99,1639,1424,32,38
2026-10-18,Woodland beginner class oct7/26,Landing page views,26,10.62,1742,1507,34,53
2026-10-19,Cloverdale BRC OCT726 push1,Landing page views,15,4.21,638,533,18,28
2026-10-19,Eureka BRC oct726 push1,Landing page views,12,5.03,784,616,18,38
2026-10-19,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,25,11.26,1563,1396,36,45
2026-10-19,Woodland beginner class oct7/26,Landing page views,45,11.87,2010,1702,54,85
2026-10-20,Eureka BRC oct726 push1,Landing page views,27,5.15,778,595,31,47
2026-10-20,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,28,10.78,1474,1303,39,43
2026-10-20,Woodland beginner class oct7/26,Landing page views,35,10.69,1978,1735,52,77
2026-10-21,Eureka BRC oct726 push1,Landing page views,26,6.31,1005,813,32,59
2026-10-21,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,13,15.56,1953,1702,20,28
2026-10-21,Woodland beginner class oct7/26,Landing page views,29,10.74,1850,1668,39,71
2026-10-22,Eureka BRC oct726 push1,Landing page views,17,8.92,1472,1171,23,57
2026-10-22,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,37,17.75,2443,2082,50,59
2026-10-22,Woodland beginner class oct7/26,Landing page views,13,9.25,1494,1324,21,28
2026-10-23,Eureka BRC oct726 push1,Landing page views,24,8.36,1402,1182,30,74
2026-10-23,WOOD IRC OCT7 PUSH 2 OCT24,Landing page views,41,25.27,3385,2719,46,55
2026-10-23,Woodland beginner class oct7/26,Landing page views,4,0.76,88,84,3,4
`;

export const AGE_CSV = `Reporting starts,Reporting ends,Campaign name,Age,Reach,Impressions,Results,Amount spent (USD),Link clicks,CTR (all)
${R},,,40928,82465,1583,503.36,2090,3.97
${R},${CAMPAIGN},18-24,2634,5002,66,27.0,109,3.36
${R},${CAMPAIGN},25-34,7336,14122,228,74.43,329,3.81
${R},${CAMPAIGN},35-44,8769,18890,376,102.58,503,4.37
${R},${CAMPAIGN},45-54,9137,18962,410,108.45,499,4.16
${R},${CAMPAIGN},55-64,6140,11771,236,77.53,294,3.87
${R},${CAMPAIGN},65+,6939,13719,267,113.41,356,3.61
`;

export const GENDER_CSV = `Reporting starts,Reporting ends,Campaign name,Gender,Reach,Impressions,Results,Amount spent (USD),Link clicks,CTR (all)
${R},,,40928,82465,1583,503.36,2090,3.97
${R},${CAMPAIGN},male,34062,69232,1267,407.87,1673,3.7
${R},${CAMPAIGN},female,6766,12433,289,90.08,379,5.26
${R},${CAMPAIGN},unknown,409,802,27,5.45,38,6.48
`;

export const PLACEMENT_CSV = `Reporting starts,Reporting ends,Campaign name,Platform,Placement,Impressions,Results,Amount spent (USD),Link clicks,CTR (all),Instagram profile visits
${R},,,,82465,1583,503.36,2090,3.97,222
${R},${CAMPAIGN},facebook,Facebook Reels,28886,534,152.04,689,2.9,1
${R},${CAMPAIGN},facebook,Facebook Feed,23716,449,116.08,573,6.11,13
${R},${CAMPAIGN},facebook,Facebook in-stream reels,3591,37,15.67,50,1.42,0
${R},${CAMPAIGN},facebook,Facebook Stories,359,16,3.69,19,6.13,0
${R},${CAMPAIGN},facebook,"Other Facebook (notifications, Marketplace, search, profile)",834,13,5.26,19,,1
${R},${CAMPAIGN},instagram,Instagram Reels,18296,393,162.51,555,3.36,91
${R},${CAMPAIGN},instagram,Instagram Feed,5333,99,36.96,129,3.92,103
${R},${CAMPAIGN},instagram,Instagram Stories,1214,41,10.81,54,5.35,14
${R},${CAMPAIGN},instagram,Instagram Explore,9,0,0.03,0,,0
`;

export const SEED_FILES: { fileName: string; csv: string }[] = [
  { fileName: 'Seed – campaign total Oct 7–23.csv', csv: CAMPAIGN_TOTAL_CSV },
  { fileName: 'Seed – ad sets Oct 7–23.csv', csv: ADSET_TOTAL_CSV },
  { fileName: 'Seed – ads Oct 7–23.csv', csv: AD_TOTAL_CSV },
  { fileName: 'Seed – ad sets by day.csv', csv: ADSET_DAILY_CSV },
  { fileName: 'Seed – by age.csv', csv: AGE_CSV },
  { fileName: 'Seed – by gender.csv', csv: GENDER_CSV },
  { fileName: 'Seed – by placement.csv', csv: PLACEMENT_CSV },
];
