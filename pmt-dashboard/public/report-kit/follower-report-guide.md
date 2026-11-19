# PMT follower ads: weekly report guide

How to pull the follower-ads numbers each week so they drop straight into the PMT dashboard (**Admin → Follower ads → Upload the weekly report**).

If Claude (or another AI assistant) pulls the report for you, give it this whole guide. The request to paste is at the bottom, and so is a short note you can save in Claude's memory or project instructions.

---

## The short version

1. **When:** once a week. Pull everything from the **campaign's start date through the latest day**. The dashboard shows totals for the whole campaign, not just the last week.
2. **Ask Claude for the "dashboard data pack"** (request at the bottom): one **.zip** with a JSON file, CSV tables, an Excel workbook, a PDF and screenshots.
3. **Upload:** Admin → Follower ads → drop the **.zip** (or its files) on the upload box → check the "Found" summary → **Use these numbers** → **Save**.

The upload box reads the **.zip**, **.json**, **.csv** and **.xlsx** files, several at once. **PDFs and screenshots are fine to include but are skipped**, because their numbers are already in the data files. Nothing changes for PMT until you press Save, and your text, questions, ad pictures and the show/hide switch are never touched by an upload.

---

## What the data pack must contain

The dashboard finds each table by its **column names**, so file names don't matter, but the column names do. The JSON file can hold all of these at once. The same tables as separate CSV files work too.

### 1. Summary (JSON `summary`)

| Field | Example | Meaning |
|---|---|---|
| `report_range` | `"2026-11-01 to 2026-11-18"` | Campaign start through the last day covered, as `YYYY-MM-DD to YYYY-MM-DD` |
| `followers_now` | `{"facebook": 744, "instagram": 632}` | Lifetime followers on the day pulled |
| `followers_start` | `{"facebook": 597, "instagram": 466}` | Followers when the campaign started (`followers_nov1` also works) |

### 2. Page totals for the campaign dates (JSON `kpis`, or a CSV with `platform,metric,<value>`)

One row per page and number. The value goes in the third column (any name, for example `nov_1_18`). Metric names the dashboard understands:

| `metric` starts with… | Instagram | Facebook |
|---|---|---|
| `Followers` (lifetime total) | ✓ | ✓ |
| `New follows` | ✓ | ✓ |
| `Unfollows` | ✓ | ✓ |
| `Views` | ✓ | ✓ |
| `Reach` (IG) / `Viewers` (FB): use Meta's **deduplicated** total, never a sum of days | ✓ | ✓ |
| `Content interactions` | ✓ | ✓ |
| `Profile visits` (IG) / `Page visits` (FB) | ✓ | ✓ |
| `Messaging contacts` (or `conversations started`) | ✓ | ✓ |

`platform` is `Instagram` or `Facebook`.

### 3. Daily numbers (JSON `daily`, or a CSV)

Columns: `date` (`YYYY-MM-DD`), `period`, `fb_follows`, `ig_follows`, `partial_day` (`Yes` for an unfinished day; it's left out of the daily chart). Other daily columns (views, reach, …) are welcome.

- Go back **at least 2 weeks before the campaign**, or further to include a stretch with **no ads at all**.
- Label the days in `period` so the dashboard can tell them apart:
  - the follower campaign's days: a label with the word **follower** (`November follower ads`)
  - days with no ads at all: a label with **baseline** or **pre-ads** (`Baseline (pre-ads)`). Follows a day are compared with this stretch.
  - other ad runs: a label with **ad run** or **ads** (`October ad run`). They're marked on the chart.
  - quiet days after other ads: anything else, for example `Break (no ads)`.

### 4. Ads Manager, campaigns (JSON `ads_campaigns`, or a CSV)

Columns: `period`, `campaign`, `status`, `objective`, `result_type`, `results`, `reach`, `impressions`, `spend`, `ig_follows`, plus any others.

- The follower campaign is recognized by its `result_type` / `objective` (**Profile and Page visits**, or follows).
- Any other campaign in the same dates (a website-traffic ad, for example) is listed on the dashboard as "not counted here".
- `period` names the month (`Nov 1-18`). Rows for other months (`Oct 1-31`) are ignored.
- `ig_follows` is Ads Manager's **Instagram follows**. Business Suite's "Follows or likes" is a different number; don't use it.

### 5. Ads Manager, each ad (JSON `ads_by_ad`, or a CSV)

Columns: `period`, `ad` (the name **exactly** as in Ads Manager, for example `ad3 - Learn2Ride the right way`), `ad_set`, `result_type`, `results`, `reach`, `impressions`, `spend`, `ig_follows`.

The dashboard matches ads by that exact name; a new name is added as a new ad. The ads' spend should add up to the campaign spend (within a few cents), or the upload warns you.

### 6. Top cities (JSON `audience`, or a CSV)

JSON: `audience.facebook.top_cities` and `audience.instagram.top_cities` as `[["San Jose, CA", 14.6], …]` (percent of followers). CSV: `platform,type,label,pct` with `type` = `top_city`.

### Also fine to include (the dashboard ignores them)

Posts, demographics by age and gender, period comparisons, charts, the PDF report and screenshots.

---

## Another option: the one-file CSV

The dashboard also reads a single CSV with one row per number, in exactly these columns:

```
report_date,period_start,period_end,source,platform,level,campaign,campaign_id,ad_set,ad_set_id,ad,ad_id,date,breakdown_type,breakdown_value,metric,value,unit,note
```

The blank template (`follower-report-template.csv`, downloadable from the same page) has every row it needs. The data pack above is easier and gives the dashboard more (start followers, the no-ads comparison, top cities), so prefer the pack.

---

## Quick checks before uploading

- [ ] The dates start on the campaign's start date. The upload warns you if they don't.
- [ ] Reach / viewers are Meta's deduplicated totals, not a sum of daily numbers.
- [ ] The ads' spend adds up to the follower campaign's spend.
- [ ] Instagram follows from the ads (`ig_follows`) are no more than Instagram's new follows.
- [ ] Followers now are higher than last week, or there's a reason they aren't.

After **Use these numbers**, look over the Follower ads page, then press **Save**.

---

## Request to paste into Claude

> Pull this week's PMT follower-ads report from Meta Business Suite (Insights: Results, Audience, Content) and Meta Ads Manager, following the "PMT follower ads: weekly report guide" (attached). Campaign: **[campaign name]**, started **[start date]**; cover the campaign start through today (mark today as a partial day). Give me a **dashboard data pack** as one .zip containing:
> - a JSON file with `summary` (`report_range`, `followers_now`, `followers_start`), `kpis`, `daily` (with `period` labels: follower campaign days, a no-ads baseline stretch, other ad runs), `ads_campaigns`, `ads_by_ad` and `audience` (top cities)
> - the same tables as CSV files, an Excel workbook, a short PDF summary, charts and the screenshots you used
>
> Use the exact column and metric names in the guide. Reach and viewers must be Meta's deduplicated totals. Ad names exactly as in Ads Manager. Run the guide's quick checks and tell me if any fail.

## Note to save in Claude's memory or project instructions

> When I ask for PMT's follower or social report ("pull followers", "pull the Meta data"), deliver a **dashboard data pack** .zip per the "PMT follower ads: weekly report guide": a JSON with summary (report_range, followers_now, followers_start), kpis, daily (date, period labels, fb_follows, ig_follows, partial_day), ads_campaigns, ads_by_ad and audience top cities, plus the same tables as CSVs, an Excel workbook, a PDF and screenshots. Cover the campaign start through today. Use Meta's deduplicated reach/viewers, Ads Manager's "Instagram follows", and ad names exactly as in Ads Manager. I upload the .zip at pmt-results.netlify.app/admin → Follower ads.
