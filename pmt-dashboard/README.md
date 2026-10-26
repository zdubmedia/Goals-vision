# PMT ad results dashboard

A private web dashboard that shows Pacific Motorcycle Training (PMT) what their Facebook and Instagram ads delivered. It covers ad results, the "halo" on Instagram and Facebook, estimated bookings from the registration pages, and return on ad spend. Built for ZDub Media.

- **PMT's view** (read-only): a private link, e.g. `https://<site>.netlify.app/r/<long-code>`. Works on a phone. PMT can filter by dates and location, download a PDF, and look at past weekly snapshots.
- **Your admin** at `https://<site>.netlify.app/admin`, behind your admin password. This is where you upload data, add registration screenshots, write notes and share the link.

---

## Part 1 — Using it (no tech needed)

### Your weekly routine (about 15 minutes)

1. **Download the Meta files** (see below) and drop them on **Admin → Meta data**.
2. **Screenshot the registration pages** for each location and add them on **Admin → Bookings**.
3. **Type in the Instagram/Facebook numbers** on **Admin → Social** (or upload a Business Suite export).
4. **Update your notes** on **Admin → Ads & notes → Insights & next steps**.
5. **Save a weekly snapshot** on **Admin → Share**, so PMT can look back at this week later.

### Downloading files from Meta Ads Manager

1. Open [Ads Manager](https://adsmanager.facebook.com). Pick the date range at the top right. **"Maximum" or the campaign start date to today** works best for the totals files.
2. Click the **Ad sets** tab (this gives the per-location numbers).
3. Click **Reports → Export table data → .csv** (or .xlsx). Keep **"Include summary row"** ticked. That gives the *ad sets total* file.
4. Do the same with a breakdown: **Breakdown → By time → Day**, then export again. That gives the *ad sets by day* file.
5. Optional, for the audience section: on the **Campaigns** tab, use **Breakdown → By delivery → Age**, then **Gender**, then **Placement**, exporting each one separately.
6. Optional, for the ad gallery: the **Ads** tab, exported without a breakdown.

Drop each file on **Admin → Meta data**. The dashboard tells you what kind of report it found and the dates it covers. If a file overlaps dates you already uploaded, it tells you it will *replace* those numbers (nothing is counted twice). If something looks wrong, it explains in plain words.

> Why do totals files matter? "People reached" can't be added up day by day (the same person shows up on several days). The dashboard only shows reach for date ranges you exported as a total.

### Adding registration-page screenshots (bookings)

1. Open a location's page on register.msi5.com and take a screenshot.
2. On **Admin → Bookings**, tap the box to choose the screenshot. The time it was taken fills in automatically; fix it if needed.
3. Choose the **location**, then for each class on the screenshot pick it from the list (or "+ New class…"). Type **seats left**, or tick **Sold out**.
4. Use **"Another class from this screenshot"** to record several classes from one image. Then **Save**.

If screenshot reading is turned on (see Part 2), a **"Read seats with Claude"** button fills these in for you. Always check the numbers against the image before saving.

Capacity rules are automatic:
- A class is 12 seats.
- A Basic class on the same weekend and location as an Intermediate class is 10.
- IRC and 1DPC are 6 each, shown together as one 12-seat Intermediate class.

You can override any class's seats in the list below the form. If a class disappears from the registration page, tick **Dropped off page**. The dashboard keeps its last count and flags it.

### Instagram & Facebook numbers

On **Admin → Social**, pick the platform and what the number is. Then pick the period (e.g. "Last 30 days" ending yesterday) and type the number. Enter the same metric for "Last 60 days" too, and the dashboard works out the 30 days before by subtraction. If Business Suite shows a "% vs previous period", type it in the optional box.

### Sharing with PMT

**Admin → Share** shows PMT's private link. Press **Copy** and text or email it to them.
- **Make a new link** if the old one gets passed around. The old link stops working immediately.
- **Extra password** (optional): PMT is asked for it once per device.
- **What PMT sees**: on **Admin → Settings**, untick any section to hide it from PMT. You still see it, faded, with a "Hidden from PMT" tag.
- **PDF**: the **PDF** button at the top of the report opens the print window. Choose "Save as PDF".

### Feedback pages (new ad ideas, social posts)

On **Admin → Feedback**:
1. Choose **Ad ideas** (PMT taps ♥ on favorites) or **Social posts** (PMT picks Yes, post it / Needs changes / No), give it a name, and press **Create**.
2. Add each ad or post: images and videos (several = PMT swipes through them), a label, and the text or caption. Press **Save**.
3. **Copy** the link and text it to PMT. It only shows this batch, and it's separate from the results report.
4. PMT's answers appear on the batch page, and you get an email when they press **Submit**. They can reopen the link, change answers and submit again; the newest answers count.

**One-time email setup** (Netlify → your **pmt-results** project → **Forms** → **Form notifications** → **Add notification** → **Email notification**): event "New form submission", form **pmt-feedback**, email **zdubmedia@gmail.com**. Netlify's free plan includes 100 form submissions a month.

### What only you see

- **Health alerts** at the top of your dashboard. They cover:
  - ad fatigue (frequency above 2.5)
  - cost per visit up more than 40% vs the week before
  - an ad set spending under 70% of its daily budget
  - an ad set that stopped delivering
- The admin pages themselves.

---

## Part 2 — Technical (setup, deploy, redeploy)

### What it's built with

- React + TypeScript (Vite), Tailwind, Recharts. Papa Parse and read-excel-file read the CSV and XLSX files.
- Netlify Functions (`netlify/functions/`) run the API in `server/handler.ts`.
- Netlify Blobs store the data (one JSON state document) and the uploaded files (screenshots, logos, raw Meta exports). No separate database account is needed.
- Seed data from the campaign brief loads automatically the first time the site runs (`src/lib/seed/`).

### Environment variables (Netlify → Site configuration → Environment variables)

| Name | Required | What it does |
|---|---|---|
| `ADMIN_PASSWORD` | yes | Your admin login. Set it as a plain variable with scope "All": on the free Netlify plan a variable marked secret is not saved. |
| `SESSION_SECRET` | recommended | Any long random string. Signs login sessions. If you change it, everyone has to log in again. |
| `ANTHROPIC_API_KEY` | optional | Turns on "Read seats with Claude" for screenshots. Costs a cent or so per screenshot. |

Change a variable, then redeploy (below) for it to take effect.

### Deploy / redeploy

From this folder (`pmt-dashboard/`):

```bash
npm install
npm test            # unit + API tests
npm run build       # production build into dist/
npx netlify-cli deploy --prod --build   # first time: choose "Create & configure a new project"
```

Or connect the GitHub repo in Netlify (**Add new project → Import from Git**). Set **Base directory** to `pmt-dashboard`; the build command and publish folder come from `netlify.toml`. After that, every push redeploys automatically.

Redeploying never touches the saved data. It lives in Netlify Blobs, not in the code.

### Local development

```bash
npm install
npm run dev     # http://localhost:5173/admin  (password: dev-password)
```

Local data is saved in `.localdata/` (git-ignored). Delete that folder to reset to the seed data.

### How the numbers are calculated

- **Meta summary row** (blank name) is used as the total and never added into sums.
- **Reach and frequency are never added** across ad sets or days. Campaign reach comes from the summary row. For one location with two ad sets, reach shows as "at least" the larger one.
- **Rates are recomputed from raw counts**, not averaged from Meta's percentages:
  - cost per visit = spend ÷ landing page views
  - click rate = link clicks ÷ impressions
  - frequency = impressions ÷ reach
- **Re-uploads replace, never double count.** A newer daily file replaces older rows for the days it covers. A newer totals file replaces an older one with the same start date. Daily data can mix levels: older campaign-level days plus newer ad-set-level days are stitched together day by day.
- **Seats sold** in a period = seats left going into the period − seats left at the end. A class first seen during the period starts from its first screenshot. "Booked before tracking" = capacity − first seats-left value.
- **"Normal"** compares a class within a week of its date (or sold out) with the typical fill set per location in Settings (default: mornings full, afternoons half).
- **Organic rolling windows** (e.g. last 30/60/90 days) are turned into non-overlapping periods by subtraction (60 − 30 = the 30 days before).
- **True conversion tracking**: once bookings tracked from the ads are entered (Admin → Social → "Bookings confirmed from ads"), they replace the screenshot estimates in the KPI, funnel and ROI sections.

### Phase 2: automatic Meta sync (not built yet)

The upload pipeline (`parseMetaTable` → `MetaUpload`) is the single entry point for ad data. A scheduled Netlify Function can call the Meta Marketing API Insights endpoint with a long-lived token, use the same column names, and save the result as an upload. You'll need a Meta developer app and a system-user access token with `ads_read`.

---

## Test checklist (run before each release)

Automated (`npm test`: 47 tests):

- [x] Campaign totals tie to the final Oct 7–23 Meta report (pulled Oct 24):
  - $503.36 spend
  - 1,583 website visits
  - 2,090 link clicks
  - 82,465 impressions
  - 3,271 clicks (all)
  - 40,928 reach
  - 222 Instagram profile visits and 7,106 post engagements from the ads
- [x] Cost per visit $0.32, CPM $6.10 and frequency 2.01 are recomputed from raw counts. The day-by-day ad set rows add up to the totals to the cent.
- [x] Reach is not double counted:
  - the ad sets add up to 44,329, but campaign reach stays 40,928
  - Woodland's two ad sets show "at least 15,594"
- [x] The four ad sets add up to the campaign spend. Woodland beginner ($0.24/visit) is the best performer.
- [x] Daily rows add up to the totals. "Last 7 days" (Oct 17–23) = $234.30, 549 visits and 35,025 ad views.
- [x] Placement "Other" row = the $0.31 / 1 visit missing from the listed rows. The age and gender rows' $0.04 rounding is not flagged.
- [x] Health alerts flag Cloverdale's ad (no spend after Oct 19), the cost-per-visit rise (+78% last week) and Meta's "Bottom 10%" conversion ranking (admin only).
- [x] Re-uploading the same daily file doesn't double the numbers. A newer file for some days replaces only those days. A newer totals file replaces the older one.
- [x] Ad-set-level days and a newer campaign-level day stitch together without double counting.
- [x] Capacity rules: 12 by default, 10 when sharing the range with Intermediate, 6 for each of IRC and 1DPC. Overrides work.
- [x] Seats sold Oct 6–23:
  - **39 in total** (Woodland 19, Eureka 12, Cloverdale 8), ≈ $16,575
  - 32 seats booked before the campaign
- [x] Running total matches the brief from Oct 9 on: 16, 17, 18, 22, 23, 24, 29, 39. Oct 7 shows **9**, not the 8 in the brief, because both "10/7" and "10/7 eve" readings are dated Oct 7 and there are no 10/8 screenshots.
- [x] A class that dropped off the page keeps its last value and is flagged.
- [x] Organic "month before" (60d − 30d):
  - views 6,758
  - net followers +25
  - interactions 151
  - profile visits 143
  - bio taps 6
- [x] API:
  - wrong passwords are rejected
  - the client link only works with the current token
  - the optional password gate works
  - a stale save is rejected instead of overwriting
  - screenshots are only served to a valid link
  - weekly snapshots open for the client

Manual click-through (done with a headless browser):

- [x] Admin login (wrong password rejected).
- [x] A non-Meta CSV shows a clear error. A real ad-set daily export is detected, previewed and added.
- [x] Re-uploading says "This replaces…" and the history marks the old file "Replaced". Totals include the new day once.
- [x] A "not delivering" health alert appears for an inactive ad set (admin only).
- [x] Adding a screenshot and seat count updates the bookings total. The client can open the screenshot.
- [x] A section hidden in Settings disappears from the client view.
- [x] The password-protected link asks for the password and rejects a wrong one.
- [x] The "Past weekly reports" menu appears after saving a snapshot. A wrong link shows a friendly message.
- [x] Phone width (390px) has no sideways scrolling. Dark mode and the PDF export work.
