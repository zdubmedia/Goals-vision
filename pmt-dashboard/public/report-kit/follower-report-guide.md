# PMT follower ads: weekly report guide

How to pull the follower-ads numbers each week so they upload cleanly into the PMT dashboard (Admin → Follower ads → **Choose report CSV**).

If an AI assistant pulls the report for you, give it this whole guide. The ready-to-paste request is at the bottom.

---

## The short version

1. **When:** once a week (Monday works well). Leave today out, because today isn't finished.
2. **Dates:** always from the **campaign's start date to yesterday**, not just the last 7 days. The dashboard shows totals for the whole campaign.
3. **Make one CSV file** in the format below, named like `PMT_Follower_Report_2026-11-17.csv`.
4. **Upload it:** Admin → Follower ads → **Choose report CSV** → check the "Found" summary → **Use these numbers** → **Save**.

---

## What to pull

### A. Meta Ads Manager (the paid numbers)

Open the follower campaign in Ads Manager. Set the date range to *campaign start → yesterday*, and keep the account's default attribution. Read the **campaign total** row and **each ad's** row.

| Number | Ads Manager column | Metric name in the CSV |
|---|---|---|
| Money spent | Amount spent | `spend` |
| People reached | Reach | `reach` |
| Times the ads were seen | Impressions | `impressions` |
| Link clicks | Link clicks | `link_clicks` |
| Instagram profile visits | Instagram profile visits | `ig_profile_visits` |
| Instagram follows from the ads | Instagram follows | `ig_follows` |
| Results | Results (Profile and Page visits) | `results_profile_and_page_visits` |

Watch out:
- Use **Instagram follows** from Ads Manager. The Business Suite app's "Follows or likes" is a different number; don't use it.
- **Reach can't be added up** across ads, because the same person can see several ads. Always take the campaign's reach from the campaign total row.
- Ad names must be **exactly** as they appear in Ads Manager (for example `ad3 - Learn2Ride the right way`). That's how the dashboard matches each ad. A new ad name is added as a new ad.

### B. Meta Business Suite → Insights (both pages, all sources)

Do this once for **Instagram** and once for **Facebook**. Set the dates to *campaign start → yesterday*.

| Number | Where in Insights | Metric name (Instagram) | Metric name (Facebook) |
|---|---|---|---|
| New follows | Audience → Follows | `new_follows` | `new_follows` |
| Profile / Page visits | Content or Audience | `profile_visits` | `page_visits` |
| Views | Content → Views | `views` | `views` |
| People who saw the page | Reach (IG) / Viewers (FB) | `reach` | `viewers` |
| Likes, comments, shares, saves | Content interactions | `content_interactions` | `content_interactions` |
| Message conversations | Messaging → conversations started | `messaging_conversations_started` | `messaging_conversations_started` |
| Unfollows *(optional)* | Audience → Follows → Unfollows | `unfollows` | `unfollows` |

### C. New follows per day (both pages)

From Insights → Audience → Follows, read the number of **new follows for each day** on Instagram and on Facebook. Start **2 weeks before the campaign started** (so the dashboard can show "before vs during the ads") and go through yesterday.

### D. Followers today (both pages)

The total number of followers on Instagram and on Facebook (lifetime followers), on the day you pull the report.

---

## The CSV format

One row per number. Keep the columns **in this order** with **exactly these names**:

```
report_date,period_start,period_end,source,platform,level,campaign,campaign_id,ad_set,ad_set_id,ad,ad_id,date,breakdown_type,breakdown_value,metric,value,unit,note
```

Rules:
- **Dates** as `YYYY-MM-DD` (for example `2026-11-11`).
- **Numbers only** in `value`: no `$`, no commas, no `%` (write `187.79`, not `$187.79`; write `0.028` for 2.8%).
- `report_date` = the day you pulled it. `period_start` = campaign start. `period_end` = yesterday. They are the same on every row.
- `unit` is `usd`, `count` or `ratio`. `note` can be left empty.
- `campaign_id`, `ad_set`, `ad_set_id` and `ad_id` are nice to have but can be empty.

### The rows the dashboard needs

| What | source | platform | level | ad | date | breakdown_type | breakdown_value | metrics |
|---|---|---|---|---|---|---|---|---|
| Campaign total | `Meta Ads Manager` | `Facebook+Instagram (paid)` | `campaign` | *(empty)* | *(empty)* | *(empty)* | *(empty)* | the 7 Ads Manager metrics in A |
| Each ad | `Meta Ads Manager` | `Facebook+Instagram (paid)` | `ad` | ad name, exactly as in Ads Manager | *(empty)* | *(empty)* | *(empty)* | the 7 Ads Manager metrics in A |
| Each page, whole campaign | `Meta Business Suite Insights` | `Instagram` or `Facebook` | `account` | *(empty)* | *(empty)* | `period` | `campaign` | the metrics in B |
| New follows each day | `Meta Business Suite Insights` | `Instagram` or `Facebook` | `account` | *(empty)* | the day | `day` | the day | `new_follows` |
| Followers today | `Meta Business Suite` | `Instagram` or `Facebook` | `account` | *(empty)* | the day you read it | `snapshot` | `today` | `followers_total` |

### Example rows

```
report_date,period_start,period_end,source,platform,level,campaign,campaign_id,ad_set,ad_set_id,ad,ad_id,date,breakdown_type,breakdown_value,metric,value,unit,note
2026-11-12,2026-11-01,2026-11-11,Meta Ads Manager,Facebook+Instagram (paid),campaign,NTC - PMT follower ads Nov'26,,,,,,,,,spend,187.79,usd,
2026-11-12,2026-11-01,2026-11-11,Meta Ads Manager,Facebook+Instagram (paid),campaign,NTC - PMT follower ads Nov'26,,,,,,,,,reach,18072,count,
2026-11-12,2026-11-01,2026-11-11,Meta Ads Manager,Facebook+Instagram (paid),ad,NTC - PMT follower ads Nov'26,,,,ad3 - Learn2Ride the right way,,,,,ig_follows,60,count,
2026-11-12,2026-11-01,2026-11-11,Meta Business Suite Insights,Instagram,account,NTC - PMT follower ads Nov'26,,,,,,,period,campaign,new_follows,125,count,
2026-11-12,2026-11-01,2026-11-11,Meta Business Suite Insights,Facebook,account,NTC - PMT follower ads Nov'26,,,,,,,period,campaign,viewers,21387,count,
2026-11-12,2026-11-01,2026-11-11,Meta Business Suite Insights,Instagram,account,NTC - PMT follower ads Nov'26,,,,,,2026-11-02,day,2026-11-02,new_follows,25,count,
2026-11-12,2026-11-01,2026-11-11,Meta Business Suite,Instagram,account,NTC - PMT follower ads Nov'26,,,,,,2026-11-12,snapshot,today,followers_total,583,count,
```

The blank template (`follower-report-template.csv`, next to this guide) has every required row ready to fill in.

### Extra rows are fine

The dashboard ignores rows it doesn't use, so a fuller report can stay in the same file. That includes ads by day, placements, age and gender, single posts, ratios like CTR or CPM, and the "before the campaign" period totals. Give "before" period rows a `breakdown_value` with the word **before** in it (for example `before campaign`), so they're never mistaken for the campaign totals.

---

## Quick checks before uploading

- [ ] `period_start` is the campaign's start date and `period_end` is yesterday.
- [ ] The ads' `spend` adds up to the campaign `spend`. The dashboard warns you if it doesn't.
- [ ] Instagram `ig_follows` (from the ads) is no more than Instagram `new_follows` (all sources).
- [ ] `followers_total` is higher than last week's, or there's a reason it isn't.
- [ ] No `$`, commas or `%` in the `value` column.

After **Use these numbers**, look over the Follower ads page, then press **Save**. Nothing changes for PMT until you save. Your text, questions, ad pictures and the "show to PMT" switch are never touched by an upload.

---

## Request to paste into an AI assistant

> Pull this week's PMT follower-ads report following the "PMT follower ads: weekly report guide" (attached). Campaign: **[campaign name]**, started **[start date]**. Cover the campaign start through yesterday. From Meta Ads Manager, get the campaign total and each ad (spend, reach, impressions, link clicks, Instagram profile visits, Instagram follows, Results). From Business Suite Insights, get each page's campaign totals, new follows for each day starting 2 weeks before the campaign, and today's follower totals. Give me one CSV in exactly the guide's format (one row per number, the 19 columns in order, dates as YYYY-MM-DD, numbers without $ or commas), named `PMT_Follower_Report_[today's date].csv`. Run the quick checks at the end of the guide and tell me if any fail. A short PDF summary for my records is optional.
