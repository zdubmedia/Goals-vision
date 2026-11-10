// The follower campaign: its starting numbers and the totals the dashboard shows.

import { daysBetween } from './dates';
import type { FollowerCampaign, Platform, Settings } from './types';

export const PLATFORM_LABEL: Record<Platform, string> = { instagram: 'Instagram', facebook: 'Facebook' };

/** Booking rates for the "if this many followers book" table. */
export const BOOKING_RATES = [0.005, 0.01, 0.02];

export interface FollowerSummary {
  days: number;
  spend: number;
  adFollows: number;
  adViews: number;
  profileVisits: number;
  /** New follows on both pages, from the ads and on their own. */
  newFollows: number;
  unfollows: number;
  startTotal: number;
  nowTotal: number;
  growth: number | null;
  costPerFollower: number | null;
  costPerAdFollower: number | null;
  messagers: number | null;
  profitPerStudent: number;
  breakEvenStudents: number | null;
  /** Break-even as a share of the new followers. */
  breakEvenShare: number | null;
  scenarios: { rate: number; students: number; profit: number; ladderProfit: number }[];
}

export function summarizeFollowers(f: FollowerCampaign, settings: Settings): FollowerSummary {
  const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
  const spend = sum(f.ads.map((a) => a.spend));
  const adFollows = sum(f.ads.map((a) => a.follows));
  const newFollows = sum(f.pages.map((p) => p.follows));
  const startTotal = sum(f.pages.map((p) => p.startFollowers));
  const nowTotal = sum(f.pages.map((p) => p.nowFollowers));
  const messages = f.pages.map((p) => p.messagers).filter((n): n is number => n !== null);
  const profitPerStudent = settings.prices.Basic * settings.profitMargin;
  const breakEvenStudents = spend && profitPerStudent ? Math.ceil(spend / profitPerStudent - 1e-9) : null;
  return {
    days: Math.max(1, daysBetween(f.start, f.asOf)),
    spend,
    adFollows,
    adViews: sum(f.ads.map((a) => a.views)),
    profileVisits: sum(f.ads.map((a) => a.profileVisits)),
    newFollows,
    unfollows: sum(f.pages.map((p) => p.unfollows)),
    startTotal,
    nowTotal,
    growth: startTotal ? nowTotal / startTotal - 1 : null,
    costPerFollower: newFollows ? spend / newFollows : null,
    costPerAdFollower: adFollows ? spend / adFollows : null,
    messagers: messages.length ? sum(messages) : null,
    profitPerStudent,
    breakEvenStudents,
    breakEvenShare: breakEvenStudents !== null && newFollows ? breakEvenStudents / newFollows : null,
    scenarios: BOOKING_RATES.map((rate) => {
      const students = newFollows * rate;
      return { rate, students, profit: students * profitPerStudent, ladderProfit: students * f.ladderPrice * settings.profitMargin };
    }),
  };
}

/** When the Nov 1–10 screenshots were taken (11:09 AM Pacific). */
export const FOLLOWER_SEED_TIME = '2026-11-10T19:09:00.000Z';

/** Nov 1–10 numbers from Meta Business Suite (ads and Insights), plus the week 1 report's value points. */
export function seedFollowers(now = FOLLOWER_SEED_TIME): FollowerCampaign {
  return {
    enabled: false,
    name: 'Follower ads · All 7 ranges',
    start: '2026-11-01',
    asOf: '2026-11-10',
    locations: ['Eureka', 'Cloverdale', 'Woodland / Sacramento', 'Livermore', 'San Bruno', 'South San Francisco', 'Salinas'],
    areaNote: 'Ads run to people within about 50 miles of each range (a little wider around Eureka).',
    ads: [
      { id: 'fad-3', name: 'Learn to ride the right way', spend: 120.97, follows: 126, profileVisits: 896, views: 22300 },
      { id: 'fad-4', name: 'Parents of riders under 21', spend: 10.69, follows: 13, profileVisits: 70, views: 1215 },
      { id: 'fad-2', name: 'Dreading the DMV test?', spend: 10.86, follows: 10, profileVisits: 78, views: 1638 },
      { id: 'fad-1', name: 'Been off the bike for years?', spend: 17.03, follows: 5, profileVisits: 63, views: 1830 },
    ],
    pages: [
      {
        platform: 'instagram',
        startFollowers: 466,
        nowFollowers: 571,
        follows: 111,
        unfollows: 6,
        reach: 6600,
        views: 10800,
        interactions: 186,
        messagers: 8,
        topCities: [
          { city: 'San Francisco, CA', share: 0.044 },
          { city: 'San Jose, CA', share: 0.04 },
          { city: 'Salinas, CA', share: 0.028 },
          { city: 'Livermore, CA', share: 0.026 },
          { city: 'Sacramento, CA', share: 0.021 },
        ],
      },
      {
        platform: 'facebook',
        startFollowers: 599,
        nowFollowers: 682,
        follows: 83,
        unfollows: 0,
        reach: 13700,
        views: 24500,
        interactions: 163,
        messagers: 1,
        topCities: [
          { city: 'San Jose, CA', share: 0.157 },
          { city: 'Livermore, CA', share: 0.023 },
          { city: 'San Francisco, CA', share: 0.023 },
          { city: 'Salinas, CA', share: 0.018 },
          { city: 'Fremont, CA', share: 0.013 },
        ],
      },
    ],
    history: [
      { date: '2026-11-01', instagram: 466, facebook: 599 },
      { date: '2026-11-10', instagram: 571, facebook: 682 },
    ],
    questions: ['Asked whether classes are taught in Spanish', 'Asked which range is closest to them'],
    ladderPrice: 1300,
    whyHtml: SEED_WHY,
    nextHtml: SEED_NEXT,
    updatedAt: now,
  };
}

const SEED_WHY = `<p>Every follower is a local rider, or rider-to-be, who raised their hand and said "show me more." The ads only reach people near PMT's ranges, and Meta shows them to people interested in riding. Now PMT can reach them again and again, for free.</p>
<ol>
<li><strong>The warmest audience there is.</strong> Meta can show ads to people who already follow PMT. Industry benchmarks show warm audiences like this book 5–15% of the time, compared with 1–3% for strangers. (General benchmarks, not PMT numbers.)</li>
<li><strong>People buy from brands they follow.</strong> In a Sprout Social survey, 9 in 10 people said they'll buy from brands they follow.</li>
<li><strong>Locals check out businesses on social.</strong> 73% of people used social media to find a local business in the past month (SOCi, 2025). An active page full of students and coaches puts a nervous first-timer at ease.</li>
<li><strong>Free reach for open seats.</strong> Every post about open seats, new dates or gift certificates goes out free to local riders who already care.</li>
<li><strong>One follower can take every class.</strong> A beginner today can be an Intermediate or ARC student next year. A follower is worth a rider's whole journey, not just one class.</li>
<li><strong>Word of mouth.</strong> Followers tag friends and share posts with their riding buddies.</li>
<li><strong>A live focus group.</strong> Comments and messages show what riders worry about and want next, which makes the next ads better.</li>
<li><strong>Value to partners.</strong> A large, local rider audience is something dealerships, gear shops and event organizers want to reach.</li>
</ol>`;

const SEED_NEXT = `<h3>Our plan for the next two weeks</h3>
<ol>
<li><strong>Raise the budget to about $20 a day</strong> (about $600 a month).</li>
<li><strong>Make more of what's working.</strong> The "Learn to ride the right way" ad brings in most of the follows. We'll make new versions of it and keep testing the parent and DMV ads.</li>
<li><strong>Welcome every new follower.</strong> Each one gets a personal message within a day, and the page keeps posting open seats by town, riding tips and student wins.</li>
<li><strong>Show class offers to followers.</strong> A small ad will show Basic and Intermediate classes to people who already follow PMT, the cheapest audience to book.</li>
</ol>
<h3>How we'll see which followers become students</h3>
<ul>
<li>Add "Instagram" and "Facebook" to the "How did you hear about us?" question when people book.</li>
<li>Finish the Meta Pixel sign-up tracking, so bookings can be traced back to the ads.</li>
<li>Note every message conversation that turns into a booking.</li>
</ul>`;
