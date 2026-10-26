// Plain-English definitions shown in tooltips and the glossary drawer.

export interface Term {
  label: string;
  technical?: string;
  plain: string;
}

export const GLOSSARY = {
  spend: { label: 'Total spend', technical: 'Amount spent (USD)', plain: 'What was paid to Facebook and Instagram to show the ads.' },
  reach: {
    label: 'People reached',
    technical: 'Reach',
    plain: 'How many different people saw an ad at least once. Each person is counted once, even if they saw the ad several times.',
  },
  impressions: { label: 'Ad views', technical: 'Impressions', plain: 'How many times the ads were shown on screen, counting repeat views.' },
  results: {
    label: 'Website visits',
    technical: 'Landing page views (LPVs)',
    plain: 'People who clicked an ad and waited for the class registration page to fully load. This is the main goal of these ads.',
  },
  costPerResult: {
    label: 'Cost per website visit',
    technical: 'Cost per result (spend ÷ landing page views)',
    plain: 'Spend divided by website visits. Lower is better.',
  },
  linkClicks: {
    label: 'Clicks to website',
    technical: 'Link clicks',
    plain: 'Clicks on the ad that lead to the website. Some people click but leave before the page loads, so this is a bit higher than website visits.',
  },
  clicksAll: {
    label: 'All clicks',
    technical: 'Clicks (all)',
    plain: 'Every click on the ad, including likes, comments, "see more" and profile clicks, not just clicks to the website.',
  },
  linkCtr: {
    label: 'Click rate',
    technical: 'Link CTR (link clicks ÷ impressions)',
    plain: 'Out of every 100 times the ad was shown, how many times someone clicked through to the website. Higher is better.',
  },
  ctrAll: { label: 'All-click rate', technical: 'CTR (all)', plain: 'All clicks of any kind divided by ad views.' },
  cpc: { label: 'Cost per click', technical: 'CPC (cost per link click)', plain: 'Spend divided by clicks to the website.' },
  cpm: { label: 'Cost per 1,000 views', technical: 'CPM', plain: 'What it cost to show the ads 1,000 times. A measure of how expensive the audience is.' },
  frequency: {
    label: 'Times seen per person',
    technical: 'Frequency (impressions ÷ reach)',
    plain: 'On average, how many times each person saw the ad. Above about 2.5, people start tuning it out.',
  },
  bookings: {
    label: 'Estimated bookings',
    technical: 'Seats sold, from registration-page screenshots',
    plain: 'Seats that sold during this period, worked out from the "seats left" on the registration pages. This counts every booking, not only people who came from the ads.',
  },
  revenue: { label: 'Estimated class revenue', technical: 'Estimated bookings × class price', plain: 'Estimated bookings multiplied by the class price.' },
  roas: {
    label: 'Return on ad spend',
    technical: 'ROAS (estimated revenue ÷ spend)',
    plain: 'Estimated class revenue for every $1 of ads. 5× means $5 of classes for each $1 spent. It is an estimate because bookings are not yet tracked back to the ads one by one.',
  },
  costPerBooking: { label: 'Cost per booking', technical: 'Spend ÷ estimated bookings', plain: 'Ad spend divided by estimated bookings.' },
  breakEven: {
    label: 'Break-even',
    plain: 'The number of students the ads need to bring in to pay for themselves.',
  },
  igProfileVisits: {
    label: 'Instagram profile visits from ads',
    technical: 'Instagram profile visits',
    plain: 'People who tapped through from an ad to PMT’s Instagram profile, a sign they wanted to know more.',
  },
  postEngagements: {
    label: 'Engagement on the ads',
    technical: 'Post engagements',
    plain: 'Likes, comments, shares, saves and clicks on the ads themselves.',
  },
  profileVisits: { label: 'Profile visits', technical: 'Profile visits', plain: 'Times people opened the Instagram profile or Facebook Page.' },
  linkTaps: {
    label: 'Bio link taps',
    technical: 'External link taps',
    plain: 'Taps on the website link in the Instagram bio, people heading from Instagram to the registration site.',
  },
  interactions: { label: 'Engagement', technical: 'Content interactions', plain: 'Likes, comments, shares, saves and replies.' },
  followers: { label: 'New followers', technical: 'Net follows', plain: 'New followers minus people who unfollowed.' },
  lift: { label: 'Lift', plain: 'How much higher a number is during the ads than in the same length of time before them.' },
} satisfies Record<string, Term>;

export type TermKey = keyof typeof GLOSSARY;
