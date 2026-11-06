HUB.tab({
  id: "meta-ads",
  title: "Meta Ads & Media Buying",
  icon: "target",
  tagline: "Set up, fund, test and read Meta campaigns that turn local scrolling into booked customers.",
  intro: "This tab is the 20% of Meta results that isn't the ad itself: why feeds beat search for cold traffic, how Andromeda decides who sees what, how to build an account, campaign and instant form the way the mentors do, how to size a budget so Meta can actually learn, and how to judge, diagnose and prove results. Every lesson ends with something you do in PMT's account (or a prospect's) the same day. Meta changes its settings often, so lessons tagged \"Platform fact (re-check)\" are worth a quick look in Ads Manager before you rely on them.",
  parts: [
    { id: "why", title: "Part 1 · Why Meta, and how it decides" },
    { id: "build", title: "Part 2 · Build the account and the campaign" },
    { id: "budget", title: "Part 3 · Budgets and the learning phase" },
    { id: "plays", title: "Part 4 · Campaign plays for ZDub and PMT" },
    { id: "testing", title: "Part 5 · Test, judge and diagnose" },
    { id: "measure", title: "Part 6 · Measure what pays and launch clean" }
  ],
  trackers: [
    { id: "testlog", title: "Testing log", goal: "At least 3 live tests per client at all times", fields: ["Date", "Client / ad set", "Hypothesis (If we change X for Y, then Z improves because...)", "What changed", "Early signal (hook rate, CTR)", "Outcome (cost per qualified lead, bookings)", "Decision"] },
    { id: "fatigue", title: "Weekly fatigue log", goal: "One row per client per week", fields: ["Week", "Client", "Top creative", "Leads or bookings this week", "Cost per lead", "Frequency", "Action (hold, refresh, new concept)"] }
  ],
  tools: [],
  lessons: [
    {
      id: "meta-01",
      part: "why",
      title: "Feeds reach the 95% that search never sees",
      minutes: 8,
      tags: ["Course"],
      source: [
        { doc: "Course Lesson 2.3 — Meta vs. Other Platforms", section: "Two kinds of ad platforms; The 95:5 rule; Why Meta specifically", who: "Course lesson (95:5 research from the LinkedIn B2B Institute and Prof. John Dawes, Ehrenberg-Bass Institute, via Marketing Week)" }
      ],
      alsoIn: ["Mastery Guide Ch 18 — The two jobs of every ad ('hunt the few, but farm the many')", "Course Lesson 2.2 — the awareness ladder"],
      idea: `Every ad platform falls into one of two buckets.

- **Search** (Google): people type in what they want. You catch demand that already exists, and every competitor bids on the same searcher.
- **Feeds** (Facebook, Instagram, YouTube, TikTok, LinkedIn): people scroll and your ad interrupts them. You reach people who have the problem *before* they start shopping for a fix.

The lesson's analogy: search is a shoe store. Everyone who walks in already wants shoes, and every other shoe store on the street is fighting for them. A feed is the kiosk in the mall walkway. Most people walking past weren't shopping, but the right display stops them.

**It's about timing.** Cold traffic usually already knows the problem. The difference between search and feeds is *when* you can reach them. Picture one prospect's path: notices the problem, lives with it (months of scrolling, not shopping), starts looking, then hires whoever they trust. Search only catches the last stretch. Feeds can reach them the whole way. Most of your future customers are on the left side of that line today, and only feeds reach them there.

**The 95:5 rule.** Research from the LinkedIn B2B Institute and Professor John Dawes of the Ehrenberg-Bass Institute found that only about 5% of business buyers are in market for a given purchase at any one time. The other 95% aren't shopping yet. Search ads fight over the 5. Feed ads reach the 95 before they look, so you're the obvious choice when they finally do.

That research is about business buyers, which is exactly who ZDub sells to: a roofer won't search for an agency this week, but he'll hire one eventually, and he's scrolling every day in the meantime. The same timing logic is why PMT can reach a future rider months before she ever types "motorcycle class near me."

**Why Meta.** The lesson's core line: cold traffic lives where people scroll, Meta is the biggest place they scroll, and its algorithm does the targeting for you. The rest of this tab is how to set that algorithm up to win.`,
      keyPoints: [
        "Search catches existing demand; feeds reach people before they start shopping",
        "Shoe store (search) vs. mall kiosk (feed): the kiosk has to stop people who weren't looking",
        "Only ~5% of business buyers are in market at any time; 95% aren't shopping yet",
        "Search fights over the 5; feeds warm the 95 so you're the obvious choice later",
        "Meta = the biggest feed, plus an algorithm that finds the people for you"
      ],
      why: "Local owners often say \"people just Google us.\" This is your one-minute answer to why Meta reaches customers Google never will, and it's also why ZDub's own prospects need to see you long before they're ready to hire.",
      example: {
        title: "PMT: the rider who isn't shopping yet",
        body: "A woman in Woodland watches riders pass her on I-5 every Friday. She won't search \"motorcycle class\" for months, so a Google ad can't reach her until then. A PMT Reel in her feed showing a nervous first-timer riding the range on day two can. When she finally searches, PMT is the name she already knows."
      },
      practice: [
        {
          prompt: "Map one PMT buyer and one ZDub prospect onto the timeline (notices it → lives with it → starts looking → hires). Then write your answer to \"everyone just Googles us.\"",
          fields: ["PMT buyer: the moment they notice the problem", "PMT buyer: what they're doing during 'lives with it'", "Roofer prospect for ZDub: where are they on the timeline today, and what are they scrolling?", "Your 2-sentence answer to 'everyone just Googles us'"],
          rubric: ["Each stage has a real, specific moment, not a generic one", "Says which stages only a feed can reach", "The answer uses the 95:5 split or the shoe store vs. kiosk idea", "No invented stats or hype"],
          model: "Notices: stuck in traffic watching riders roll by. Lives with it: watches bike videos, sees a buddy's riding posts, months from searching. Roofer: knows winter gets slow, isn't looking for an agency, scrolls Facebook every night. Answer: \"Google only catches the few people shopping this week. Meta lets us reach the other 95 out of 100 before they search, so when they do, you're the name they already trust.\""
        }
      ],
      today: { task: "Write a 3-sentence \"why Meta\" talk track for your next sales call using the shoe store vs. kiosk analogy and the 95:5 rule. Save it in your sales notes.", output: "A 3-sentence talk track in your sales doc", minutes: 15, suggested: false },
      check: [
        { q: "What's the difference between search and feed platforms?", a: "Search catches people already typing in what they want (existing demand). Feeds interrupt people while they scroll, reaching them before they start shopping." },
        { q: "What is the 95:5 rule and who found it?", a: "Only about 5% of business buyers are in market at any time; 95% aren't shopping yet. LinkedIn B2B Institute and Prof. John Dawes of the Ehrenberg-Bass Institute." },
        { q: "If cold traffic already knows the problem, what's the real difference between search and feeds?", a: "Timing. Search reaches only the few looking for a fix this week; feeds reach everyone with the problem, including people months away from shopping." }
      ]
    },
    {
      id: "meta-02",
      part: "why",
      title: "Creative is the lever, structure is the amplifier",
      minutes: 9,
      tags: ["Book", "Playbook", "Mentor"],
      date: "2026-10-15",
      source: [
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Read This First; Part 2, Section 16: Why Structure Only Matters After You Have a Winner", who: "King Kong team (Sabri Suby's agency)" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Meta Ads: The Playbook (opening)", who: "Book curriculum, built on the King Kong playbook" },
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "13. Proof that creative matters; 9. Benchmarks (Cam's point about data)", who: "Cam, 10/15/26 and 9/17/26" }
      ],
      alsoIn: ["Ad Creative tab — 'Creative is the targeting' (main lesson lives there)"],
      idea: `The King Kong playbook splits Meta success into two halves: **the creative, about 80% of the result**, and **the account structure, about 20%**. Its warning: people who obsess over targeting hacks and settings get beaten by people with better ads. The amateur writes a great hook and throws it into a chaotic account. The "expert media buyer" runs an immaculate account full of ads nobody wants to click. The winner does both.

**"Account structure is the amplifier. Creative is the signal."** If the signal is weak, no amplifier helps. You can't structure your way out of a boring ad, and you can't bid-cap your way to profit with a 0.4% click-through rate. But once you have an ad that stops the scroll, structure matters a lot. King Kong claims the right structure squeezes 30–50% more out of the same winning ad and stops you wasting money on bad days.

Why creative carries so much weight now: Meta reads your image, copy and offer to decide who to show the ad to. That idea ("creative is the targeting") is taught fully in the Ad Creative tab. This tab is the other 20%: setting up the account so a good ad gets found, funded and scaled, and reading the numbers so you know which ad is actually good.

**Mentor proof (Cam, 10/15).** Sterling Mold was with another agency in July: $1,500 spent, 16 leads at $92 per lead. Cam's rebuild averaged about $23 per lead, roughly 75% cheaper, with lead quality no worse and a higher click-through rate (about 1.49%). His summary: "Paul says media buying is super important, which it is; I think creative is super important, which it is." On 9/17 he added that Meta tracks so much about each user that you don't have to be the best ad buyer to get a fantastic result, but you do have to be very clear in the creative.

**The working rule:** when results are bad, check the ad first and the settings second. Ads Manager's buttons get renamed every year. What stops a human thumb doesn't change.`,
      keyPoints: [
        "Creative ≈ 80% of results, account structure ≈ 20% (King Kong)",
        "Structure amplifies a strong signal; it can't rescue a weak one",
        "Right structure can add 30–50% to a winning ad and limit bad-day waste",
        "Cam's Sterling Mold rebuild: $92 → ~$23 per lead, driven mostly by creative",
        "Diagnose the ad first, the settings second"
      ],
      why: "Zach will be tempted to fix weak results by fiddling in Ads Manager. Knowing the 80/20 keeps his time on making better PMT ads, and gives him a clear story for prospects about why ZDub's creative is the product.",
      example: {
        title: "PMT: two ways to spend a Saturday",
        before: "Ads are getting $45 leads, so Zach spends the afternoon trying interest stacks, new bid settings and three new ad sets with the same two stock-looking images.",
        after: "Zach leaves the account alone and films five new openers with the instructor on the range (\"Everyone in this class is new. That's the point.\"), then drops them into the existing ad set. The settings didn't change; the signal did."
      },
      practice: [
        {
          prompt: "For each scenario, decide: is the first fix in the creative or in the structure? Give one reason.",
          fields: ["Scenario A: CTR 0.4%, CPM normal, settings follow the mentor defaults", "Scenario B: one ad has a 2.5% CTR and $14 leads, but it's split across 5 ad sets that each get $6/day and none exit learning", "Scenario C: every ad uses the same stock photo of a smiling rider with the PMT logo"],
          rubric: ["A and C are creative problems (weak signal)", "B is a structure problem (a strong signal is being starved)", "Each answer names the specific next step", "Doesn't recommend a settings 'hack' as the fix for weak ads"],
          model: "A: creative. A 0.4% CTR means the ad isn't stopping or selling the click; no setting fixes that. Make new hooks and first frames. B: structure. The ad works but the budget is split too thin to learn; consolidate into one ad set. C: creative. Stock smile plus logo looks like an ad; replace with raw range footage and real student faces."
        }
      ],
      today: { task: "Open PMT's ad account (or the plan for it) and list every ad that's live or drafted. Mark each one \"signal strong\" or \"signal weak\" based on whether it would stop you scrolling. Pick the weakest two to replace this week.", output: "A list of PMT ads marked strong/weak with two flagged for replacement", minutes: 20, suggested: false },
      check: [
        { q: "The King Kong playbook splits Meta success into two parts. What are they, and roughly how much does each matter? (Workbook 18.1)", a: "Creative (about 80%) and account structure (about 20%). People who obsess over targeting hacks get beaten by people with better ads." },
        { q: "What does \"structure is the amplifier, creative is the signal\" mean in practice?", a: "Structure can multiply a winning ad (King Kong says 30–50% more), but it can't rescue a weak ad. Fix the creative first." },
        { q: "What did Cam's Sterling Mold rebuild show?", a: "The previous agency got 16 leads at $92 CPL on $1,500; Cam's ads averaged about $23 CPL, about 75% cheaper, with similar quality and higher CTR." }
      ]
    },
    {
      id: "meta-03",
      part: "why",
      title: "Make the shortlist: how Andromeda picks which ads run",
      minutes: 10,
      tags: ["Playbook", "Book", "Platform fact (re-check)"],
      source: [
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "01 The Big Idea; 02 Principle 5: Better early matching helps a suitable ad get considered", who: "ZDub field guide compiled from a YouTube breakdown of Meta's Oct 28, 2026 Andromeda article" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — The big shift: creative is the targeting", who: "Book curriculum (Meta Engineering on Andromeda, Dec 2024, and GEM, Nov 2025, via 2026 industry guides)" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Key Findings 3; Meta Ads for Local Businesses: 2025–2026 changes", who: "Research playbook" }
      ],
      alsoIn: ["Ad Creative tab — 'Creative is the targeting'", "King Kong Playbook Part 1 — Meet Andromeda"],
      idea: `Meta doesn't run one big auction across every ad. Delivery works in stages.

1. **Retrieval (Andromeda).** Each time someone opens the app, Andromeda sorts an enormous pool of ads and picks a **shortlist** of candidates for that person.
2. **Ranking (GEM).** A ranking model chooses among the shortlist, then the auction runs.

The core problem the Andromeda Playbook names: **an ad that misses the shortlist can't win later**, even if it would have been a perfect match. A great offer and a strong CTR don't matter if the ad is never considered.

**What changed on October 28, 2026.** Meta announced a different model architecture, a unified GPU pipeline, more efficient computation and more capacity ahead. Net effect: Meta can evaluate more ads and use richer information about each person's behavior, interests and current context to pick relevant ones. (The playbook is careful: this is a video creator's reading of Meta's article. The principles are sound either way, but check your own account.)

**How Meta judges a brand-new ad.** A new ad has no history, so Meta connects what the ad *means* to things it already knows, makes a more informed prediction, then learns from real results. Clear context gives it something to connect to. Vague ads give it nothing. So every ad needs to make three things obvious in the first few seconds, out loud and on screen:

- **Who** it's for (the nervous first-timer, the Roseville homeowner)
- **What situation** it speaks to (staring at the DMV site, confused)
- **Why buy** (bike and helmet provided, just show up)

**Near-copies don't count.** Meta groups near-identical ads together. In December 2025 Meta wrote that look-alike ads are variations of the same creative, and it dropped its old "max six ads per ad set" guidance in early 2025. Changing only a headline or button isn't a new concept; different people, settings, formats, angles and openings are.

**Spend is a signal.** Because early matching is better, Campaign Budget Optimization (now called Advantage+ campaign budget) is more relevant: Meta is better at moving money to the right ad. Ads that earn spend are more likely to be real winners. An ad Meta won't spend on is more likely a loser.`,
      keyPoints: [
        "Andromeda (retrieval) builds a shortlist per person; GEM (ranking) picks from it",
        "Miss the shortlist and nothing else about the ad matters",
        "Make who, what situation and why-buy clear in the first few seconds",
        "Near-identical ads are treated as one creative; real variety is fuel",
        "Spend is a signal: what Meta funds is your first read on what's matching"
      ],
      why: "Every PMT ad Zach makes is competing to be considered at all. Writing clear context into the ad (not into the targeting box) is how a small local account gets onto the shortlist next to national advertisers.",
      example: {
        title: "PMT: vague vs. clear context",
        before: "\"Ride with confidence. Pacific Motorcycle Training.\" over a sunset shot of a bike. Who is it for? Which moment? Meta has nothing to match.",
        after: "On-screen in the first 2 seconds: \"Never touched a motorcycle? This class starts from zero.\" Instructor on the range, a student walking the bike. Caption: \"Woodland beginner course. Bike and helmet provided.\" Person, situation and reason to buy are all explicit."
      },
      practice: [
        {
          prompt: "Rewrite the first 3 seconds of one current PMT ad so Andromeda (and a viewer) can't miss the context.",
          fields: ["Who is it for (one specific person)", "What situation or moment", "Why buy (one reason)", "Your new on-screen text + spoken first line"],
          rubric: ["Person, moment and reason are all stated, not implied", "All three appear within the first few seconds", "Uses PMT's real offer (no invented claims)", "Avoids banned PMT words: cheap, easy, discount, guaranteed"],
          model: "Who: an adult who's never ridden. Situation: wants the license but pictures being the worst in class. Why: everyone in the class is new. On-screen: \"Nervous you'll be the only beginner?\" Spoken: \"Everyone in this class is new. That's the point.\""
        }
      ],
      today: { task: "Audit PMT's live or drafted ads against the who / situation / why-buy test. Rewrite the opening text overlay for any ad that fails.", output: "Rewritten opening overlays for each PMT ad that failed the test", minutes: 25, suggested: false },
      check: [
        { q: "What does Meta's Andromeda system do? (Workbook 18.2)", a: "It picks a shortlist of ads for each person by reading the creative. A ranking model (GEM) then chooses among them." },
        { q: "2026 guides report that Meta groups near-identical ads together. What counts as a genuinely different concept? (Workbook 18.4)", a: "Different people, settings, formats, angles and openings. Small tweaks like a button or one headline word don't give Andromeda new fuel." },
        { q: "Why is spend a signal under Andromeda?", a: "Meta is better at moving budget to ads that match; creatives that earn spend are more likely winners, and ones it won't spend on are more likely losers." }
      ]
    },
    {
      id: "meta-04",
      part: "build",
      title: "Account structure: the portfolio umbrella and three layers",
      minutes: 9,
      tags: ["Mentor", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "1. Account structure; How the layers work; Client access (Meta route)", who: "Cam, 10/15/26 and 9/17/26; Logan McKinney, 9/25/26" },
        { doc: "ZDub Guide 02 V2", section: "7. Budget and the auction (whose card pays; your own agency ads)", who: "Jason Maulucci, 8/18 and 8/25/26; Clayton, 8/19/26" }
      ],
      alsoIn: ["Course Lesson 1.4 — Creating Your Ad Account (file not yet added)", "Andromeda Playbook — ad naming Persona_Bucket_Angle_Format_v1"],
      idea: `Before a single ad runs, the plumbing has to be right.

**The umbrella (Cam, 10/15).** The **business portfolio** (what used to be called Business Manager) is the umbrella. The Facebook page, the ad account and the Instagram account are each attached to it **separately**. Keeping them separate reduces risk: one problem asset doesn't take the others down with it.

**Three layers (Cam, 9/17):**

- **Campaign** holds the objective and, usually, the budget.
- **Ad set** holds location and targeting. Different areas get different ad sets. Cam's example: Scottsdale in one ad set, Phoenix in another.
- **Ad** is the creative. New ads can go into the same ad set without rebuilding anything.

**Naming.** Cam names campaigns client + objective + date, e.g. "Sterling Mold Leads 10/15." The Andromeda Playbook adds a consistent ad name so you can read a report at a glance: **Persona_Bucket_Angle_Format_v1** (for example FirstTimer_Objection_LookFoolish_TalkingHead_v1).

**Getting access to a client's account (Cam, 9/17).** The client goes to Business settings > People, invites you with full access (Cam also asks for finance access), and assigns you the pages and ad accounts. Logan (9/25) puts these steps right in his onboarding form and screen-shares on the onboarding call if the client gets stuck. (If you use the WAP route instead, see the "Know the manual build" lesson.)

**Whose card pays.** Never run a client's ads from your own wallet (Jason, 8/25). The client's card is on their ad account; ad spend goes straight to Meta.

**Your own agency ads.** Jason (8/18) recommends running ZDub's ads from your personal Facebook/Instagram, because brand-new accounts get banned more and an existing one carries social proof. Clayton (8/19) suggested a separate business page if your personal account is full of personal posts. Both are mentor views; pick based on what your personal profile looks like today.`,
      keyPoints: [
        "Business portfolio = umbrella; attach page, ad account and Instagram separately",
        "Campaign = objective (+ budget); ad set = location/targeting; ad = creative",
        "Name campaigns client + objective + date; name ads Persona_Bucket_Angle_Format_v1",
        "Client invites you via Business settings > People with full access, then assigns assets",
        "Client's card pays Meta directly; never fund a client campaign yourself"
      ],
      why: "Clean structure and naming is what lets Zach read PMT's results in 30 seconds instead of 30 minutes, and proper access protects both ZDub and the client if anything gets flagged.",
      example: {
        title: "PMT naming, done once, used forever",
        body: "Campaign: \"PMT Woodland Leads 11/10.\" Ad sets: \"FirstTimer_Broad_35mi\" and \"LicensedUneasy_Broad_35mi.\" Ads: \"FirstTimer_Objection_LookFoolish_TalkingHead_v1,\" \"FirstTimer_Objection_NoGear_Static_v1,\" \"LicensedUneasy_Motivation_Control_Demo_v1.\" A month later, a glance at the report shows that objection ads beat motivation ads for first-timers."
      },
      practice: [
        {
          prompt: "Write PMT's naming convention and access checklist.",
          fields: ["Campaign name", "Two ad set names", "Three ad names (Persona_Bucket_Angle_Format_v1)", "Access checklist: what Chris needs to click, in order", "Whose card is on the ad account?"],
          rubric: ["Campaign name includes client, objective and date", "Ad names follow the five-part pattern", "Access steps mention Business settings > People, full access and assigning page + ad account + Instagram", "Card belongs to the client, not ZDub"]
        }
      ],
      today: { task: "Confirm PMT's business portfolio setup: page, ad account and Instagram all attached, ZDub invited with full access, client card on file. Write down anything missing and send Chris the exact steps.", output: "An access checklist for PMT with gaps flagged (or a message to Chris)", minutes: 20, suggested: false },
      check: [
        { q: "What does each of the three layers hold?", a: "Campaign: objective and usually the budget. Ad set: location and targeting. Ad: the creative." },
        { q: "Why attach the page, ad account and Instagram separately to the business portfolio?", a: "It reduces risk (Cam, 10/15)." },
        { q: "How does a client give you access?", a: "Business settings > People: invite you with full access (Cam also asks for finance), then assign the pages and ad accounts." }
      ]
    },
    {
      id: "meta-05",
      part: "build",
      title: "Pick the objective: Leads is the default for local service",
      minutes: 9,
      tags: ["Mentor", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "2. Campaign objectives; How Traffic is actually used; Where the mentors disagree (Traffic objective)", who: "Cam, 10/15/26 and 9/17/26; Logan McKinney, 10/2/26" }
      ],
      idea: `The objective tells Meta what kind of person to go find. Pick the wrong one and Meta will efficiently find the wrong people.

Cam's take on each objective (10/15):

- **Awareness:** don't use it for these clients. It's "Coca-Cola billboard style."
- **Traffic:** lowest quality. Don't optimize for plain traffic.
- **Engagement:** follower campaigns. Lower quality, but you can filter with higher-quality ads.
- **Leads:** name, email, phone, DM or form. Meta learns who actually opts in. **This is the default for local service clients.**
- **Sales:** purchasers.

**Free-trial or sign-up businesses.** For a free-trial membership, Cam optimizes for leads and sends sign-up events back to Meta. Then he split-tests a lead campaign against a purchase campaign and compares after about 30 days. Leads are always cheaper than purchases, but purchase intent may convert better.

**The Traffic nuance.** On 10/15 Cam said not to optimize for traffic. But on 9/17 he built follower ads on the Traffic (or Engagement) objective with the conversion location set to the Instagram profile and the goal set to profile visits. And Logan (10/2) runs his own landing-page ads on Traffic with his website URL. The difference is *what* you send traffic to and optimize for. The working line from Guide 02: avoid Traffic optimized for plain link clicks on client lead campaigns; Traffic toward a profile or your own page is what both mentors actually used.

**ZDub application (Claude's input in Guide 02, not mentor teaching):** PMT sells course seats, which is closer to Cam's free-trial example than a contractor quote. Start on Leads with an instant form. If PMT has online registration, consider testing a Sales/registration campaign against it after about 30 days.`,
      keyPoints: [
        "Leads objective = default for local service clients (Cam, 10/15)",
        "Skip Awareness; don't optimize for plain link-click Traffic",
        "Engagement/Traffic toward an Instagram profile powers follower ads",
        "Sign-up businesses: optimize for leads, send sign-ups back, test vs. a purchase campaign after ~30 days",
        "Leads are always cheaper than purchases; purchase intent may convert better"
      ],
      why: "The objective is the first instruction Meta gets about who to find. Getting it right for PMT (seats, not clicks) and for ZDub's own ads (profile visits or page visits at different budgets) saves weeks of paying for the wrong people.",
      table: {
        head: ["Objective", "Cam's take", "Use it for"],
        rows: [
          ["Awareness", "Coca-Cola billboard style", "Not these clients"],
          ["Traffic", "Lowest quality if optimized for clicks", "Only toward a profile or your own page"],
          ["Engagement", "Lower quality; filter with better ads", "Follower ads"],
          ["Leads", "Meta learns who opts in", "Default for local service"],
          ["Sales", "Purchasers", "Test vs. Leads once sign-ups flow back"]
        ]
      },
      example: {
        title: "PMT: one objective now, one test later",
        body: "Month 1: Leads objective, instant form, \"maximize number of leads.\" PMT's registration data gets matched to the leads CSV weekly. Month 2, if PMT has online booking: a second campaign on Sales optimized for completed registrations runs against it for ~30 days, and Zach compares cost per paid seat, not cost per lead."
      },
      practice: [
        {
          prompt: "Pick the objective (and what it's optimized for) for each scenario, with one sentence of reasoning.",
          fields: ["PMT beginner course, $35/day, instant form", "A Roseville roofer at $40/day who wants inspection requests", "ZDub's own ads at $11/day", "ZDub's own ads at $40/day with a live landing page", "PMT after 30 days, if online registration is tracked"],
          rubric: ["Client lead campaigns use Leads", "Low-budget agency ads use Traffic/Engagement toward the IG profile (profile visits)", "Higher-budget agency ads can use Traffic to the landing page (Logan's approach)", "The registration test compares against Leads rather than replacing it blindly"],
          model: "PMT: Leads, maximize leads. Roofer: Leads, instant form. ZDub $11/day: Traffic or Engagement, conversion location IG profile, maximize profile visits. ZDub $40/day: Traffic to the landing page URL (Logan, 10/2). PMT registration: a Sales campaign optimized for completed registrations, run alongside Leads ~30 days, judged on cost per paid seat."
        }
      ],
      today: { task: "Write PMT's objective decision in the client doc: which objective, which performance goal, and the date you'll review a Sales/registration test.", output: "A one-paragraph objective decision in PMT's client doc", minutes: 15, suggested: false },
      check: [
        { q: "What's Cam's default objective for local service clients?", a: "Leads (forms, DMs, calls). Meta learns who actually opts in." },
        { q: "Cam said don't optimize for Traffic, yet he built follower ads on Traffic. How do both make sense?", a: "Plain link-click Traffic brings low quality. Traffic with the conversion location set to the Instagram profile and the goal set to profile visits (or a landing page you control) is a different optimization." },
        { q: "How does Cam handle a free-trial membership client?", a: "Optimize for leads and send sign-up events back; split-test a lead campaign vs. a purchase campaign and compare after about 30 days." }
      ]
    },
    {
      id: "meta-06",
      part: "build",
      title: "Campaign and ad set settings that actually matter",
      minutes: 10,
      tags: ["Mentor", "Playbook", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "3. Campaign and ad set settings; 6. Ad-level settings (manual build, 9/17)", who: "Cam, 10/15/26 and 9/17/26" },
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Sections 20 (Attribution) and 22 (Bid Strategy)", who: "King Kong team" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Key settings and rules for local accounts (Bidding)", who: "Book curriculum" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Meta Ads for Local Businesses: 2025–2026 changes", who: "Research playbook" }
      ],
      idea: `Most Ads Manager settings can be left alone. These are the ones the mentors deliberately set.

**Cam's defaults (10/15):**

- **Conversion location:** most of the time stay on Meta, with engagement/follower campaigns or Instant Forms. You usually don't go off-site to landing pages until about **$100/day** in spend.
- **Performance goal:** maximize number of leads (you can test "maximize qualified leads").
- **Bid strategy:** highest volume, **no bid caps**.
- **Dynamic creative:** off.
- **End date:** none. Just turn it off when you're done.
- **Placements:** leave Advantage/automatic. Don't touch device, OS or platform settings.
- **"Reach more people likely to respond":** turn it **off** (Cam, 9/17), because it serves people outside your location.

**Names have changed.** CBO is now called **Advantage+ campaign budget**, and Advantage+ Shopping became Advantage+ Sales in early 2025 (Social Playbook). Old tutorials will use the old words.

**The big-budget alternative (King Kong).** King Kong doesn't run highest volume. It runs cost controls (Cost Cap at launch, ROAS Goal at scale) so Meta only spends when it can hit a target, with formulas like Cost Cap = Target CAC × 1.15. That works for brands buying hundreds of conversions. The Mastery Guide's translation for local accounts: start on lowest cost (highest volume) to learn the real cost per lead, and only add a cost cap once you know it, typically in the $1,500–$5,000/month tier. The mentor default stays: highest volume, no caps.

**Attribution (King Kong, re-check in your account).** Many accounts default to 7-day click + 1-day view. King Kong runs **7-day click + 1-day engage** because most one-day-view conversions are people who would have bought anyway. Switching makes reported numbers look worse but more truthful; compare old and new via Columns > Compare Attribution Settings. Either way, reconcile Meta's numbers with the client's real bookings.`,
      keyPoints: [
        "Stay on-platform (Instant Forms) until roughly $100/day",
        "Maximize leads; highest volume; no bid caps (mentor default)",
        "Dynamic creative off, no end date, Advantage placements",
        "Turn off 'reach more people likely to respond' so ads stay in your area",
        "Cost caps and ROAS goals are a big-budget tool; learn your real CPL first"
      ],
      why: "These few settings are where a beginner quietly breaks a campaign, like letting Meta serve PMT ads outside the training area or capping bids before there's any data.",
      example: {
        title: "The setting that leaks budget",
        before: "A PMT lead campaign with \"reach more people likely to respond\" left on. Leads start coming from Reno and the Bay Area, nowhere near Woodland.",
        after: "Setting off, location set to the real radius around the range. Every lead can actually drive to class."
      },
      practice: [
        {
          prompt: "Fill in PMT's campaign settings sheet exactly as you'd build it.",
          fields: ["Objective", "Conversion location", "Performance goal", "Bid strategy", "Budget type and amount", "Dynamic creative (on/off)", "Placements", "'Reach more people likely to respond' (on/off)", "Attribution setting you'll report on"],
          rubric: ["Matches Cam's defaults (Leads, Instant Form, maximize leads, highest volume, no caps)", "Dynamic creative off; Advantage placements", "Reach-more-people setting off", "Notes that settings get re-checked in Ads Manager"],
          model: "Leads · Instant Form · Maximize number of leads · Highest volume, no cap · One campaign budget, $35/day · Dynamic creative off · Advantage+ placements · Reach-more-people off · Report on the account's attribution setting, reconciled weekly with PMT's registrations."
        }
      ],
      today: { task: "Open Ads Manager and click through a draft PMT lead campaign, noting where each setting in this lesson lives today (names move). Save screenshots of anything that's been renamed.", output: "A settings map with screenshots for PMT's build", minutes: 30, suggested: false },
      check: [
        { q: "Until roughly what daily spend does Cam keep clients on Meta instead of landing pages?", a: "About $100/day." },
        { q: "What bid strategy do the mentors use, and what does King Kong use instead?", a: "Mentors: highest volume, no bid caps. King Kong: cost controls (Cost Cap at launch, ROAS Goal at scale), which suit large budgets." },
        { q: "Why turn off 'reach more people likely to respond'?", a: "It serves people outside your location (Cam, 9/17)." }
      ]
    },
    {
      id: "meta-07",
      part: "build",
      title: "Targeting: drop a pin on the real service area, leave the rest broad",
      minutes: 10,
      tags: ["Mentor", "Playbook", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "4. Targeting", who: "Cam, 10/15/26" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Part 4 Fact-Check: '25–50 mile radius' and 'Broad targeting' rows; Meta Ads for Local Businesses", who: "Research playbook (overrides older radius defaults)" },
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Sections 18 (Adv+ Broad) and 19 (Exclusions)", who: "King Kong team" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Key settings and rules for local accounts", who: "Book curriculum" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 Sample campaign build (30–40 mile radius)", who: "ZDub field guide" }
      ],
      alsoIn: ["Ad Creative tab — 'Creative is the targeting'"],
      idea: `Cam's rule (10/15): **drop a pin and set a radius around the service area. Nothing outside where the client can actually serve.** Then leave age (18–65), gender and detailed targeting alone. "The more you specify, the more costs go up." Let the ad creative do the targeting.

How rarely the pros narrow: Cam's team used saved audiences for about $20k of the $1.2M they spent this year. King Kong goes further: no interest stacks, no lookalikes, no custom audiences for prospecting, even for demographic-specific products. In its own test, broad targeting with strong creative beat the founder's elaborate interest stack "by a country mile," and King Kong reports broad plus long-form creative wins roughly 70% of the time.

**What's actually a hard control now** (Social Playbook, 10/31/26): with Advantage+ Audience, **location, minimum age and custom-audience exclusions** are hard limits. Interests and lookalikes are only suggestions. Detailed-targeting exclusions were removed in 2025. So location is the one targeting lever that always matters for a local business.

**How big a radius? (Outdated rule alert.)** A "25–50 mile radius" default is **outdated**; no current Meta or expert source sets it. Match the real trade area instead:

- Restaurants, gyms, salons: roughly 3–10 miles, or specific ZIPs/neighborhoods
- Home services: the ZIPs they actually serve
- Training schools and destination businesses: 15–40 miles may fit

Exclude areas you don't serve, and check Special Ad Category minimum-radius rules. (Cam used 30 miles for a mold client and 40 miles for a West Palm Beach one; the Andromeda sample for PMT uses 30–40 miles around one range.)

**Exclude existing customers** from prospecting so money isn't spent re-acquiring them. King Kong warns that a pixel-only purchaser audience misses around 40% of customers, so upload the full customer list too.

**The one exception (King Kong):** if after 7–14 days of meaningful spend Meta is clearly pouring budget into a demographic that isn't converting, then narrow age or gender. Almost never necessary. One nuance from the Social Playbook: some practitioners find budgets under about $30–50/day learn slowly when fully broad, so it's fair to test.`,
      keyPoints: [
        "Pin + radius on where the client actually serves; nothing outside it",
        "Leave age, gender and detailed targeting broad; 'the more you specify, the more costs go up'",
        "Hard controls: location, minimum age, custom-audience exclusions; interests are suggestions",
        "25–50 miles as a default is outdated; size the radius to the real trade area",
        "Exclude existing customers (upload the list, don't rely on the pixel alone)"
      ],
      why: "Location is the one targeting control that always matters for PMT and every local trade. Getting the radius right, and resisting the urge to narrow everything else, is most of local targeting.",
      table: {
        head: ["Business type", "Starting service area (Social Playbook, 10/31/26)"],
        rows: [
          ["Restaurant, gym, salon, med spa", "~3–10 miles or specific ZIPs/neighborhoods"],
          ["Roofer, HVAC, plumber, landscaper", "The service-area ZIPs they actually cover"],
          ["Training school (PMT), destination business", "15–40 miles may fit"],
          ["Any special ad category client", "Check Meta's minimum-radius rules first"]
        ]
      },
      example: {
        title: "PMT Woodland vs. a Roseville plumber",
        body: "PMT: pin on the Woodland range, ~35 miles (people drive to a weekend course), age minimum set to what PMT's course actually accepts (confirm with Chris), everything else broad, past students excluded via an uploaded list. Plumber: no big radius at all; the 12 ZIPs he really serves around Roseville and Rocklin, broad everything else."
      },
      practice: [
        {
          prompt: "Set the targeting for two real accounts.",
          fields: ["PMT: pin location(s) and radius, with your reason", "PMT: age minimum (and who confirms it)", "PMT: exclusions", "A Sacramento-area roofer: service area as ZIPs or towns", "What would make you narrow age or gender later?"],
          rubric: ["Radius matches how far customers really travel, not a default", "Everything except location and age minimum is left broad", "Customer list exclusion included", "Narrowing only after 7–14 days of spend shows a clearly wrong demographic"]
        }
      ],
      today: { task: "Ask Chris for PMT's past-student list (names, emails, phones) and the towns most students drive from. Use them to set the radius and build a customer exclusion audience.", output: "PMT's radius decision + an uploaded customer exclusion list", minutes: 30, suggested: false },
      check: [
        { q: "For a local business in 2026, what does 'broad targeting' usually mean? (Workbook 18.3)", a: "Broad within the service radius, letting the creative define the person. Location is the one targeting control that always matters locally." },
        { q: "Why should you exclude existing customers from prospecting campaigns? (Workbook 18.10)", a: "So prospecting money isn't spent re-acquiring past buyers. Upload the customer list and exclude it." },
        { q: "Is a 25–50 mile radius a good default?", a: "No, it's outdated. Match the real trade area: ~3–10 miles for restaurants/gyms/salons, service ZIPs for home services, 15–40 miles for training schools or destinations." }
      ]
    },
    {
      id: "meta-08",
      part: "build",
      title: "Instant forms that filter leads without killing volume",
      minutes: 10,
      tags: ["Mentor", "Playbook", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "5. Instant forms and lead filtering", who: "Cam, 10/15/26; Logan McKinney, 10/13/26" },
        { doc: "9 New Calls Study Guide (11/5/26)", section: "Meta ads, testing and creative: Campaign structure and testing", who: "Paul Snowman, 7/28/26" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Meta Ads for Local Businesses: Lead destinations; Part 4 Fact-Check (Instant Forms)", who: "Research playbook" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Landing pages, instant forms, and message match", who: "Book curriculum" }
      ],
      alsoIn: ["Funnels tab — Speed to lead & follow-up (the GoHighLevel instant-text workflow lives there)"],
      idea: `An Instant Form keeps the lead on Facebook or Instagram: tap, autofill, submit. Cheapest and highest volume, but more junk. The mentors' job is to filter without strangling volume.

**Cam's build (10/15):**

- Let Meta generate the form from the client's website, then choose the **higher intent** form type (it adds a review screen, so fewer but better leads).
- Add **one qualifying multiple-choice question.** His mold example: "What is your concern? visible mold / musty smell / recent leak / buying or selling a home / air quality."
- Fields: **first name and phone.** Email is optional when the client calls leads.
- Privacy policy: use the client's, or have Claude or ChatGPT write one, put it in a Google Doc and link it.
- Ending screen: "Thanks, you're all set, we'll reach out shortly."

**Three filters for lead quality:** (1) the Leads objective, (2) location, (3) the form question. Cam's principle: "filter better on the back end" rather than paying for a more expensive optimization.

**At tiny budgets, strip it down (Logan, 10/13).** For a $10/day trades client he autofills name, phone and SMS consent and skips extra questions, because **every question costs volume.** Paul (7/28) also optimizes lead forms for volume first, and calls a budget question on the form a good filter when you do add one.

**Form types and newer options (Social Playbook, re-check):** More Volume (pre-filled), Higher Intent (review screen), Rich Creative (explains the offer). It suggests 1–2 qualifying questions (ZIP, service, timeline) and SMS verification. Once CRM stages flow back through the Conversions API, you can optimize for *conversion leads*: in Meta's January 2025 test of 567 advertisers, that goal cut cost per quality lead 21% versus "maximize number of leads." The catch, from Paul (7/28): optimizing for qualified leads only really works around $600/day (about 50 qualified leads a week). Below that, ad sets get stuck in learning.

The older Mastery Guide suggests 3–5 qualifying questions; the mentors, who run these daily, use one or none. Follow the mentors.

A form is only as good as what happens after it: the instant text and fast call are taught in the Funnels tab.`,
      keyPoints: [
        "Higher intent form type + one qualifying multiple-choice question (Cam)",
        "First name + phone; email optional if the client calls",
        "Three filters: Leads objective, location, form question",
        "At ~$10/day, autofill and skip extra questions; each question costs volume (Logan)",
        "Conversion-lead optimization needs CRM data and real volume (~$600/day per Paul)"
      ],
      why: "PMT and every trades client will judge ZDub on lead quality. A form that quietly filters tire-kickers, without starving Meta of volume, is the cheapest quality upgrade there is.",
      example: {
        title: "PMT's qualifying question",
        body: "\"Which best describes you? Never ridden, want my license / Rode before, want my license / Already licensed, want more skill / Buying as a gift for someone.\" It sorts leads into the two Andromeda personas plus gift buyers, so the follow-up text and call can open with the right line, and it costs only one tap."
      },
      practice: [
        {
          prompt: "Write PMT's full instant form.",
          fields: ["Form type (and why)", "Qualifying question + 4–5 answer options", "Fields collected", "Privacy policy plan", "Ending screen text", "What you'd remove if PMT's budget dropped to $10/day"],
          rubric: ["Higher intent type chosen, or a clear reason not to", "Exactly one qualifying question with options a lead can answer in one tap", "First name + phone (email optional)", "Ending screen sets the expectation of a fast follow-up", "Low-budget version strips questions to protect volume"],
          model: "Higher intent. \"Which best describes you?\" Never ridden / Rode before, need license / Licensed, want more skill / Gift for someone. Fields: first name, phone, SMS consent. Privacy: PMT's policy, or a Claude-drafted one in a Google Doc. End screen: \"Thanks, you're all set. We'll text you shortly with class dates.\" At $10/day: More Volume type, no question, autofill only."
        }
      ],
      today: { task: "Build PMT's instant form in Ads Manager as a draft, submit a test lead and confirm it arrives where Chris (or GoHighLevel) will see it.", output: "A drafted PMT instant form + a test lead received", minutes: 30, suggested: false },
      check: [
        { q: "What are Cam's three filters for lead quality?", a: "The Leads objective, location, and the qualifying form question." },
        { q: "Why does Logan skip extra questions for a $10/day trades client?", a: "Every question costs volume, and at that budget Meta needs every lead it can get to learn." },
        { q: "What does Paul say about optimizing for qualified leads?", a: "It only works at roughly $600/day (about 50 qualified leads a week); below that, ad sets get stuck in learning limited." }
      ]
    },
    {
      id: "meta-09",
      part: "build",
      title: "Ad-level settings: what to turn on, what to turn off",
      minutes: 8,
      tags: ["Mentor", "Playbook", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "6. Ad-level settings (incl. manual Meta build, 9/17)", who: "Cam, 10/15/26 and 9/17/26" },
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Section 21: How to Group Ads Inside an Adset (Flexible Format)", who: "King Kong team" }
      ],
      idea: `Meta offers a stack of "enhancements" at the ad level. Most of them make your ad worse in ways you won't notice until results drop.

**Cam's on/off list (10/15):**

- **ON:** sticker CTA / enhanced CTA, relevant comments.
- **OFF:** video touch-ups, text improvements, video effects, auto-translation.
- On 9/17 he turned off most Advantage+ creative enhancements: "Facebook's recommendations are always horrible."

**AI image enhancements need a quarantine.** Meta's AI image "creative enhancements" can be aggressive; on one ad they made the subject look sick and older. Cam downloaded those versions to test separately instead of letting them mix into the live ad.

**AI copy is a different story.** Cam reuses the primary text and headline from a winning ad, and found Meta's AI copy suggestions "pretty fire." Treat them as drafts you approve, not autopilot.

**Copy length by format.** Image ads that push to a lead form likely need more aggressive, longer copy than video ads, because the image can't do the explaining.

**Production details:** a 720p video export is fine for phones. Licensed music may get an ad rejected. Ads get rejected sometimes anyway: tweak and resubmit.

**Keep the testing ad set organized.** Cam organizes it by folders: images, B-roll, videos, winner variations. Member tip: duplicate an existing ad inside the testing ad set and swap the creative, so every setting carries over and you don't re-click 15 toggles.

**Grouping small variations (King Kong, re-check).** If you have tiny variations of one creative (3 hooks, 4 color variants), King Kong launches them as **one ad with Flexible format** rather than separate ads, so the variations don't split the signal. This is separate from dynamic creative, which Cam keeps off.`,
      keyPoints: [
        "ON: enhanced/sticker CTA, relevant comments",
        "OFF: video touch-ups, text improvements, video effects, auto-translation",
        "Test Meta's AI image enhancements separately; they can distort people",
        "Image-to-form ads need longer, punchier copy than video",
        "Duplicate an ad and swap the creative to keep settings; resubmit rejections"
      ],
      why: "PMT's whole pitch is real people on a real range. An AI 'enhancement' that makes the instructor look ill, or auto-translates the copy, quietly undoes the trust the ad was built on.",
      example: {
        title: "The duplicate-and-swap habit",
        body: "Zach builds one PMT ad perfectly: enhanced CTA on, relevant comments on, every other enhancement off, form attached, URL parameters set. For the next nine ads he duplicates that one inside the testing ad set and only swaps the video and headline. Ten ads, one set of correct settings."
      },
      practice: [
        {
          prompt: "Write the pre-publish ad checklist you'll run on every PMT ad.",
          fields: ["Enhancements ON", "Enhancements OFF", "What to do with AI image enhancements", "Music check", "Copy length check (image vs. video)", "How you'll create the next ad from this one"],
          rubric: ["Matches Cam's on/off list", "AI image enhancements tested separately, not mixed in", "Licensed music flagged as a rejection risk", "Uses duplicate-and-swap to keep settings"]
        }
      ],
      today: { task: "Build one PMT ad in drafts with every setting from this lesson, then duplicate it twice and swap the creative. Screenshot the enhancement toggles for your SOP.", output: "Three drafted PMT ads + a screenshot SOP of enhancement settings", minutes: 25, suggested: false },
      check: [
        { q: "Which ad-level options does Cam turn on?", a: "Sticker/enhanced CTA and relevant comments." },
        { q: "What did Cam do with Meta's AI image enhancements, and why?", a: "Downloaded them to test separately, because they can be aggressive (they made the subject look sick and older)." },
        { q: "What's the member tip for adding new ads to a testing ad set?", a: "Duplicate an existing ad inside the ad set and swap the creative so the settings carry over." }
      ]
    },
    {
      id: "meta-10",
      part: "build",
      title: "Know the manual build (WAP, AI launching and backups)",
      minutes: 8,
      tags: ["Mentor", "Disagreement", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "WAP / Agency One vs Meta Ads Manager; Launching with AI help; Redundancy; Where the mentors disagree (WAP vs Meta direct)", who: "Cam, 9/17/26 and 10/15/26; Logan McKinney, 9/25/26" }
      ],
      idea: `There's more than one way to get ads live. The lesson is to know the hard way even if you use the easy way.

**WAP / Agency One (Cam, 9/17).** The LC program pushes running ads through "WAP" (spelled that way in the transcript), connected to Agency One with an API key and business ID. Cam's advantages: easier setup (no business manager, pixel and asset setup), you can spend straight from the balance of client payments you process, and "time to live" of a day or two. Through Agency One, a preset flow creates a draft you then switch on inside WAP. On the WAP route, the client creates their own WAP, connects their Meta assets, puts a card on file and invites you as at least an advertiser.

**Meta direct (Logan, 9/25).** Logan launches everything directly in Meta Ads Manager and has never used WAP or Agency One for ads (Paul is the one to ask about WAP). In his view they all get the same result if you feed them good ads.

Both are mentor positions, side by side in the table below. Neither is wrong.

**Why you still need the manual build (Cam, 10/15).** The third-party platform Cam normally uses was down platform-wide for a week, so he rebuilt the campaigns by hand in Ads Manager. Things break. Know how to do it manually and have a backup.

**Launching with AI help (Cam, 10/15).** Cam used ChatGPT/Claude browser control to load 18 ads into drafts, then reviewed every one before turning it on. An MCP connection to Meta is faster than browser control. The caution: logging into Meta from many IPs, devices or bots can get accounts flagged. AI loads drafts; a human reviews and publishes.`,
      keyPoints: [
        "WAP/Agency One: faster setup, spends from client payments, live in a day or two (Cam)",
        "Meta direct: Logan's only method; same results with good ads",
        "A platform outage cost Cam a week; know the manual Ads Manager build",
        "AI can load ads into drafts; you review before anything goes live",
        "Many logins from many IPs/devices/bots can get an account flagged"
      ],
      table: {
        head: ["", "Cam (9/17)", "Logan (9/25)"],
        rows: [
          ["Tool", "WAP / Agency One", "Meta Ads Manager directly"],
          ["Why", "Faster to go live (a day or two); no business manager/pixel setup; spends from client payments", "Never needed anything else; all tools get the same result with good ads"],
          ["Client access", "Client creates a WAP, connects Meta assets, card on file, invites you as advertiser+", "Client invites you in Business settings > People"]
        ]
      },
      why: "PMT is ZDub's first client. If a tool fails mid-launch, Zach needs to rebuild by hand the same day, and he needs a safe way to let AI speed things up without risking the client's account.",
      example: {
        title: "A backup that takes 40 minutes, not a week",
        body: "Zach keeps a one-page PMT build sheet (campaign, ad set, form, ad settings, ad names, creative file links). If his preferred tool goes down, he rebuilds the campaign manually in Ads Manager from the sheet. If he uses AI to load ads, it only creates drafts from the same sheet, from his usual device, and he clicks publish himself."
      },
      practice: [
        {
          prompt: "Write ZDub's launch method and backup plan.",
          fields: ["Primary launch method for PMT (and why)", "Where the build sheet lives", "Manual rebuild steps if the tool is down", "Rules for using AI to load ads (what it can and can't do)"],
          rubric: ["Names a primary method without claiming one mentor is right", "A build sheet exists outside the tool", "AI only creates drafts; a human reviews and publishes", "Mentions avoiding logins from many IPs/devices/bots"]
        }
      ],
      today: { task: "Build PMT's campaign once by hand in Ads Manager as a draft, timing yourself, and save the build sheet you used.", output: "A manual draft build + a reusable PMT build sheet", minutes: 45, suggested: false },
      check: [
        { q: "What advantages did Cam list for WAP / Agency One?", a: "Easier setup (no business manager, pixel and asset setup), spending from client payments you process, and going live in a day or two." },
        { q: "What's the redundancy lesson from 10/15?", a: "Cam's usual platform was down for a week, so he rebuilt by hand in Ads Manager. Know the manual build and have a backup." },
        { q: "What's the risk when launching ads with AI browser control?", a: "Logging into Meta from many IPs, devices or bots can get accounts flagged. Load drafts, review, then publish yourself." }
      ]
    },
    {
      id: "meta-11",
      part: "build",
      title: "Special ad categories and the personal-attributes rule",
      minutes: 8,
      tags: ["Book", "Playbook", "Platform fact (re-check)"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Special ad categories and honesty; Policy: personal attributes", who: "Book curriculum" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Recommendations for ZDub Media #6; Caveats (Compliance)", who: "Research playbook" },
        { doc: "Ultimate Social Media Workbook", section: "Module 11, Exercise 11B", who: "Workbook" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 Applied to PMT: copy rules", who: "ZDub field guide" }
      ],
      idea: `Two Meta policies decide whether an ad can run at all, and with what targeting.

**1. Special ad categories.** Ads about **housing (including real estate), employment, credit and financial products, and social issues or politics** must run under Meta's special ad categories. These limit targeting: for example no age or gender targeting and constraints on location targeting (check minimum-radius rules). Two places this hits Zach directly:

- **Wholesaling.** Any "we buy houses" or home-buying ad is housing. It runs in the special category, with its targeting limits.
- **Hiring ads.** Noah and Logan mention hiring ads as an add-on when a client can't keep up with demand. Those are employment ads.
- The Social Playbook adds: check the category for **every** client, especially **training schools advertising job outcomes.** A PMT ad about safe riding isn't a job ad; an ad promising a career outcome could change the picture.

**2. Personal attributes.** Meta restricts copy that asserts or implies a person's personal characteristics, such as health, finances, age or other sensitive traits. "Are you overweight?" or "Struggling with debt?" can get ads rejected. The Mastery Guide's fix: use "you" sparingly and write "people who..." or "anyone who..." instead. This matters for med spas, gyms, dentists and solar financing.

**Honesty rules ride on top.** Real reviews, real scarcity, real news, real numbers. Testimonials need consent and must not imply that atypical results are typical (Social Playbook). For PMT specifically, the Andromeda Playbook's copy rules: no industry jargon; no "coach," "cheap," "easy," "discount" or "guaranteed"; no refund or money-back language; and **no promise of passing the endorsement.**

Policy details change. Check Meta Business Help before making client promises.`,
      keyPoints: [
        "Special categories: housing (incl. real estate), employment, credit/finance, social issues/politics",
        "Special categories limit targeting (no age/gender; location constraints)",
        "Wholesaling = housing; hiring ads = employment",
        "Don't assert personal attributes ('Are you overweight?'); write 'people who...'",
        "PMT never promises passing the endorsement or uses cheap/easy/discount/guaranteed"
      ],
      why: "One rejected or restricted campaign can stall a client for days. Checking category and copy rules before building is faster than rebuilding after Meta flags it, and it protects Zach's own wholesaling ads too.",
      example: {
        title: "Same idea, policy-safe",
        before: "Med spa: \"Are you embarrassed by your belly fat?\"",
        after: "\"For anyone in Folsom who's tried everything for stubborn belly fat: here's what our patients ask first.\" Same audience signal, no personal-attribute claim."
      },
      practice: [
        {
          prompt: "Classify each ad and fix it if needed.",
          fields: ["Zach's wholesaling ad: 'We buy houses in Sacramento, any condition'", "A roofer's 'Now hiring installers' ad", "A solar ad: 'Bad credit? Go solar for $0 down'", "A med spa: 'Are you overweight?'", "PMT: 'Pass your motorcycle test guaranteed'"],
          rubric: ["Wholesaling = housing; hiring = employment; solar financing/credit = credit", "Med spa rewritten with 'people who / anyone who'", "PMT ad rewritten without the guarantee or a promise of passing", "Notes the targeting limits that follow from a special category"],
          model: "Wholesaling: housing special category, no age/gender, location limits. Hiring: employment category. Solar credit ad: credit category, and drop the personal-finance callout. Med spa: \"For anyone who's tried every diet...\" PMT: \"Learn to ride on our training bikes, from zero, in a class where everyone's new.\""
        }
      ],
      today: { task: "For PMT and each prospect on your list, write Yes/No for 'special ad category' with one line of reasoning, and fix any PMT ad copy that breaks the copy rules.", output: "A category check row per client + corrected PMT copy", minutes: 20, suggested: false },
      check: [
        { q: "Which ads must run under Meta's special ad categories, with limited targeting? (Workbook 18.13)", a: "Housing (including real estate), employment, credit, and politics/social issues. That includes real estate and home-buying ads." },
        { q: "How do you avoid the personal-attributes rule in copy?", a: "Don't assert or imply sensitive traits (health, finances, age); use 'you' sparingly and write 'people who...' or 'anyone who...'." },
        { q: "Name three PMT copy rules from the Andromeda Playbook.", a: "No jargon; no coach/cheap/easy/discount/guaranteed; no refund or money-back language; no promise of passing the endorsement." }
      ]
    },
    {
      id: "meta-12",
      part: "budget",
      title: "Feed Meta about 50 optimization events in 7 days",
      minutes: 11,
      tags: ["Mentor", "Playbook", "Platform fact (re-check)"],
      date: "2026-10-13",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "Short version; 7. Small budgets; Optimization events, explained; Benchmarks", who: "Logan McKinney, 9/25 and 10/13/26; Cam, 9/17/26; Jason Maulucci, 8/18/26" },
        { doc: "9 New Calls Study Guide (11/5/26)", section: "Meta ads, testing and creative", who: "Paul Snowman, 7/28/26" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Key Finding 4; Meta Ads for Local Businesses: Learning phase, Budget math", who: "Research playbook (citing Meta Business Help)" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Key settings: Learning phase", who: "Book curriculum" }
      ],
      alsoIn: ["ZDub Guide 02 — Optimization events, explained", "Social Media Playbook — Key Finding 4", "Guide 00 Master Index — Principle 7: Feed Meta enough to learn"],
      idea: `This is the single most important budget idea in the tab.

**How optimization works.** You pick one action (the optimization event: a lead, a profile visit, a landing page view, a purchase). Meta goes looking for people likely to take that action. To learn who those people are, it needs volume: **about 50 optimization events in the 7 days after the ad set's last significant edit** to exit the learning phase (Meta Business Help, via the Social Playbook; Cam, 9/17; Logan, 9/25; Jason, 8/18). Logan calls 50 a week the efficient target, "not scripture" (10/13). He wrote it as per ad set per week; when Zach asked, he said per campaign or per pixel. Meta's own wording is per ad set.

**Logan's own mistake (9/25).** He optimized for completed bookings, got only a handful a week, and the campaign never left learning.

**Two levers when the math doesn't work (Logan, 9/25):**

1. **Raise spend** until 50 is reachable.
2. **Move the goalpost earlier**: 10-second video views, profile clicks, page views, lead form opens. "You can do that with 10, 15 a day."

**The budget math** (Mastery Guide; Social Playbook): **minimum daily budget ≈ target cost per result × 50 ÷ 7.** At a $21 cost per lead that's $150/day; at $30 it's about $214/day, which most local clients won't spend.

**So what happens to most local ad sets?** They sit in **"Learning Limited."** The Social Playbook says that's acceptable if cost per lead and quality are good. Fix root causes instead of panicking: consolidate into fewer ad sets, use a higher-volume optimization event, broaden, or improve the offer.

**Related facts:**

- Significant edits restart learning, so avoid big edits for about a week.
- Paul (7/28): optimizing for *qualified* leads only works around $600/day (about 50 qualified leads a week).
- Cheap events exit fast: Cam's follower ads pay under $1 per profile visit, often 10–25 cents, so they exit learning in about two days even at $11/day.
- Meta can spend up to 75% over your daily budget on some days, but not more than 7× daily in a week.`,
      keyPoints: [
        "Meta needs ~50 optimization events in 7 days (after the last big edit) to exit learning",
        "Minimum daily budget ≈ target cost per result × 50 ÷ 7",
        "Can't reach 50? Raise spend or optimize for an earlier, more frequent event",
        "Learning Limited is OK if CPL and quality are good; fix with consolidation, not tinkering",
        "Big edits restart learning: leave it alone for about a week"
      ],
      why: "Most of ZDub's clients will spend $20–100/day. Knowing this math is how Zach picks the right optimization event for PMT, explains slow learning honestly, and avoids Logan's 'never left learning' mistake.",
      table: {
        head: ["Target cost per result", "× 50 ÷ 7 = daily budget to hit 50/week", "Reality check at $35/day"],
        rows: [
          ["$0.25 profile visit", "~$1.80/day", "Easy; exits learning fast"],
          ["$5 landing page view or follow", "~$36/day", "Just about reachable"],
          ["$15 lead", "~$107/day", "Not reachable in one ad set"],
          ["$21 lead", "$150/day", "Not reachable"],
          ["$30 lead", "~$214/day", "Not reachable; most local clients"]
        ]
      },
      example: {
        title: "PMT: choosing the event to match the wallet",
        body: "Say PMT spends $35/day and leads cost about $20. 50 leads a week would need ~$143/day, four times the budget. Options: accept Learning Limited on a single consolidated Leads ad set if leads are good and cheap enough; or run the campaign toward an earlier event like landing page views (the Andromeda sample build's goal) while bookings are tracked on the side. What Zach doesn't do: split $35 across four ad sets."
      },
      practice: [
        {
          prompt: "Run the learning-phase math for PMT and decide the optimization event.",
          fields: ["PMT's planned daily budget", "Expected cost per lead (your estimate and where it came from)", "Daily budget needed for 50 leads/week (show the math)", "Can one ad set reach it? (yes/no)", "Your decision: which event to optimize for and how many ad sets"],
          rubric: ["Uses cost × 50 ÷ 7 correctly", "If the budget can't reach 50, picks fewer ad sets and/or an earlier event", "Doesn't split a small budget across many ad sets", "States how real bookings will still be tracked"],
          model: "Budget $35/day. CPL estimate $20 (Googled training-school CPL, under-projected). Needed: $20 × 50 ÷ 7 ≈ $143/day. One ad set can't reach it. Decision: one Leads ad set, accept Learning Limited while CPL stays under ~$25 and leads book; if leads stall, switch the goal to landing page views and track registrations from the leads CSV."
        }
      ],
      today: { task: "Write PMT's learning-phase math in the client doc: budget, expected CPL, the 50 ÷ 7 number, and your optimization event decision. Add one line you'll say to Chris about what 'Learning Limited' means.", output: "A learning-phase decision block in PMT's client doc", minutes: 20, suggested: false },
      check: [
        { q: "Using the 2026 rule of thumb, what's the minimum daily budget for an ad set with a target cost per lead of $21? (Workbook 18.9)", a: "$150. $21 × 50 ÷ 7 = $150/day, to reach about 50 optimization events per week." },
        { q: "What are Logan's two levers when your budget can't buy 50 events a week?", a: "Raise spend, or move the goalpost earlier (10-second views, profile clicks, page views)." },
        { q: "Is 'Learning Limited' a failure?", a: "Not necessarily. Most local ad sets sit there; it's acceptable if CPL and quality are good. Fix root causes: consolidate, use a higher-volume event, broaden, improve the offer." }
      ]
    },
    {
      id: "meta-13",
      part: "budget",
      title: "Small budgets ($10–30/day): follower ad or stripped-down lead form",
      minutes: 9,
      tags: ["Mentor", "Disagreement"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "7. Small budgets ($10–20/day); The $30/day rule of thumb; 8. Follower ads; Where the mentors disagree (Low-budget approach)", who: "Logan McKinney, 10/13/26; Cam, 10/15/26; Noah, 10/7/26; LC AI Static Ads module" }
      ],
      idea: `Most first clients start small. The mentors agree small budgets learn slowly; they differ on what to run.

**Cam's $30/day rule of thumb (10/15).** About $30/day is a rough minimum for a lead campaign, because that's roughly an average cost to get one lead. At $5/day it would take about six days to get a single lead. **Below that, Cam (and the LC module) run a follow ad instead** of a lead campaign: cheap profile visits Meta can learn from quickly.

**Logan's $10/day trades recipe (10/13).** For a trades client who wants jobs, Logan does not default to follower ads ("that client wants jobs, not followers who'd need DMs"). Instead:

1. Make a batch of static ads from the client's **real job photos**.
2. Post them organically **and** test them in a campaign.
3. Run an **instant lead form with autofill** (name, phone, SMS consent, no extra questions).
4. Set up **speed-to-lead texting** (taught in the Funnels tab).

Because $10/day can't buy 50 booked jobs or form fills a week, he optimizes for something earlier when needed (clicks to a page, lead form opens, 10-second video views) so Meta can learn.

**Other mentor notes:** Noah (10/7) says $20/day is fine to start; more spend just means more reach. Logan's growth path: if the client closes one job, "budget goes from 10 to 25 to 50 to 100."

**The two positions, side by side** (see table). The Guide 02 summary notes that Logan's is the more recent and more specific advice for a client who wants jobs, and that follower ads fit an agency's own marketing better. Both remain mentor teaching.

**ZDub application (Claude's input in Guide 02, not mentor teaching):** if a client can only do $10–20/day, say on the sales call that it will learn slower, use the earlier-event approach, and don't promise lead counts you can't control at that spend.`,
      keyPoints: [
        "~$30/day ≈ one average lead a day; that's Cam's rough lead-campaign floor",
        "Cam + LC module: below that, run a follow ad",
        "Logan: for a $10/day trades client, real-photo statics + autofill instant form + speed-to-lead",
        "Optimize for an earlier event when the budget can't buy 50 results a week",
        "One closed job is the case for 10 → 25 → 50 → 100 (Logan)"
      ],
      why: "Zach will meet many owners who can only start at $10–30/day. Knowing both mentor plays lets him pick the one that fits the client's goal (jobs vs. audience) and set honest expectations.",
      table: {
        head: ["", "Cam (10/15) + LC module", "Logan (10/13)"],
        rows: [
          ["At very low budget, run...", "A follow/follower ad", "An autofill instant lead form + speed-to-lead"],
          ["Why", "Profile visits are cheap, so Meta can learn", "A trades client wants jobs, not followers who need DMs"],
          ["Creative", "Strong creative needed to earn follows", "Batch of statics from real job photos, also posted organically"]
        ]
      },
      example: {
        title: "A $15/day pressure-washing client in Elk Grove",
        body: "Logan's version: 8 statics from the owner's real before/after driveway photos, posted to his page and loaded into one ad set; autofill form with name, phone and SMS consent only; GoHighLevel texts every lead in seconds. Zach tells the owner up front: at $15/day Meta learns slowly, so judge it on booked jobs over a few weeks, and the first closed job is the case for $25/day."
      },
      practice: [
        {
          prompt: "A Sacramento landscaper can spend $15/day and wants booked estimates. Plan the campaign two ways, then say what the client goal points to.",
          fields: ["Cam/LC version: what you'd run and how it gets to estimates", "Logan version: creative, form, follow-up", "Optimization event you'd use at $15/day", "What you'll say on the sales call about learning speed"],
          rubric: ["Both mentor plays described accurately", "Earlier optimization event chosen if 50/week isn't reachable", "Speed-to-lead included in the lead-form version", "Expectation-setting doesn't promise a lead count"]
        }
      ],
      today: { task: "Pull 8–10 real job photos from one prospect's Facebook page or Google profile and sketch Logan's $10/day recipe for them in a one-page plan you could show on a call.", output: "A one-page small-budget plan for a real prospect", minutes: 30, suggested: false },
      check: [
        { q: "Why does Cam use about $30/day as a lead-campaign rule of thumb?", a: "That's roughly an average cost to get one lead; at $5/day it would take about six days to get one lead." },
        { q: "What is Logan's $10/day trades recipe?", a: "Statics from real job photos, posted organically and tested in a campaign; an autofill instant lead form; speed-to-lead texting." },
        { q: "Why isn't a follower ad automatic for a $10/day trades client, per Logan?", a: "That client wants jobs, not followers who'd need DMs." }
      ]
    },
    {
      id: "meta-14",
      part: "budget",
      title: "Budget structure: one ad set first, then winners vs. testing",
      minutes: 9,
      tags: ["Mentor", "Playbook", "Disagreement", "Platform fact (re-check)"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "Budget: ABO winners and testing split; 9. Testing and judging ads; Where the mentors disagree (Ad set structure)", who: "Cam, 10/15/26; Paul Snowman, 10/19/26" },
        { doc: "9 New Calls Study Guide (11/5/26)", section: "Meta ads, testing and creative: Campaign structure and testing", who: "Paul Snowman, 7/28/26" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Meta Ads for Local Businesses: Structure ($20–$150/day); Part 4 Fact-Check (CBO vs ABO)", who: "Research playbook" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "Principle 5; 03 Launch playbook step 5", who: "ZDub field guide" }
      ],
      idea: `Two budget types exist. **ABO** (ad set budget) means you set the money per ad set. **CBO** (campaign budget, now called **Advantage+ campaign budget**) means you set it once and Meta moves money between ad sets.

**Cam's ABO split (10/15).** Once he has past data, Cam splits one budget into two ad sets: **"ABO Winners" gets 80%, "ABO Testing" gets 20%.** Winning outliers from testing get moved into winners. Example: a $50/day client becomes $40 winners, $10 testing. Cam admitted $10 is low for testing; he'd prefer a 30/20 split and would ask the client to raise the budget. **Only run a winners ad set when you have past data.** Otherwise use one ad set.

**Paul's view.** Cam said Paul would "probably throw everything into one ad set," and on 10/19 Paul taught a 3×3×1 sprint (3 visuals × 3 headlines × 1 body = 9 ads) in **one ad set**, letting Meta pick. On 7/28 Paul said he tests fully in CBO: at around $60/day, go straight CBO; at larger budgets he sets an ad set minimum spend of about $10 × the number of ads. (On 7/28 he also described splitting ad sets by concept; his newer 10/19 sprint uses one ad set.)

**What the newer playbooks say (re-check).**

- Andromeda Playbook: run creative tests inside CBO and let Meta decide where the budget goes; one ad set per persona.
- Social Playbook ($20–150/day): Campaign 1 is always-on Leads with Advantage+ campaign budget or one ad set. An optional Campaign 2 creative test takes ~20–30% of budget on ABO and graduates winners into Campaign 1. Reports say Meta can move up to 20% of budget between ad sets even with ad-set budgets. For small budgets, consolidation matters more than ABO vs. CBO.

**Where both mentors agree:** with a new client and no data, one ad set. Cam's split is for after you have winners.`,
      keyPoints: [
        "New client, no data: one ad set (Cam and Paul agree)",
        "Cam, once winners exist: ABO 80% winners / 20% testing (prefers more for testing)",
        "Paul: 3×3×1 in one ad set, let Meta pick; straight CBO from ~$60/day",
        "CBO is now 'Advantage+ campaign budget'",
        "Small budgets: consolidation beats clever structure"
      ],
      why: "PMT's first month has no data, so the answer is simple: one ad set. Knowing when Cam's winners/testing split earns its place stops Zach from splitting a small budget too early.",
      table: {
        head: ["", "Cam (10/15)", "Paul (10/19, and 7/28)"],
        rows: [
          ["Structure", "ABO: Winners ad set 80%, Testing ad set 20%, once past data exists", "One ad set; 3×3×1 = 9 ads; let Meta pick"],
          ["Budget type", "ABO (ad set budgets)", "CBO; straight CBO at ~$60/day; ad set minimum ≈ $10 × ads at bigger budgets"],
          ["New client, no data", "One ad set", "One ad set"]
        ]
      },
      example: {
        title: "PMT month 1 vs. month 3",
        body: "Month 1, $35/day: one campaign, one ad set, 6–9 ads, Meta picks. Month 3, PMT at $60/day with two proven winners: Cam's version is a Winners ad set ($42) holding the two winners and a Testing ad set ($18) for new concepts; Paul's version is one CBO ad set with the winners plus new concepts dropped in. Zach can try either and compare cost per booked seat."
      },
      practice: [
        {
          prompt: "Lay out the budget structure for three stages of a client.",
          fields: ["New client, $40/day, no data", "Same client, month 3, $50/day, two clear winners: Cam's version (dollars per ad set)", "Same client, Paul's version", "Which you'll try first for PMT, and what number decides if it worked"],
          rubric: ["Stage 1 is one ad set", "Cam's split uses 80/20 (or notes he'd rather fund testing more)", "Paul's version is one ad set / CBO", "Decision metric is a business outcome (cost per booked seat or job)"]
        }
      ],
      today: { task: "Write PMT's budget structure for month 1 and the trigger that would move you to a winners/testing split (e.g. two ads each with X leads at under $Y).", output: "A month-1 structure + upgrade trigger in PMT's client doc", minutes: 15, suggested: false },
      check: [
        { q: "What's Cam's winners/testing split, and when does he use it?", a: "ABO: 80% to a Winners ad set, 20% to a Testing ad set, only once there's past data. Otherwise one ad set." },
        { q: "How does Paul structure a test on 10/19?", a: "3 visuals × 3 headlines × 1 body = 9 ads in one ad set, letting Meta pick; budget ideally 2–3× target CPL per day." },
        { q: "What is CBO called now?", a: "Advantage+ campaign budget." }
      ]
    },
    {
      id: "meta-15",
      part: "budget",
      title: "Size the structure to the budget (and what big accounts do)",
      minutes: 9,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Account structure for local budgets", who: "Book curriculum (King Kong playbook + 2026 industry guidance)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 18 — Drill D18.4 Budget and structure math + Answer Key", who: "Workbook" },
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Sections 17 (Two-Campaign Architecture), 24 (Inflated Budget), 28 (Promotion Process)", who: "King Kong team" }
      ],
      idea: `Structure should grow with the budget, not with your ambition.

**King Kong's big-budget architecture.** Two campaigns per product:

- **Launch campaign:** every new creative goes here first. CBO, cost-cap bidding, 1 ad set per 10–20 mixed creatives (don't group by angle or format).
- **Scale campaign:** winners get duplicated here. CBO, ROAS-goal bidding, one ad set per landing page or "whitelist" page identity.
- **A winner** is any ad that earns a significant share of the Launch campaign's budget. When an ad wins, duplicate it into Scale **and leave the original running in Launch** (its learning is tied to that ad ID).
- **Horizontal scaling:** run the same winner across different destinations (landing pages, page identities) instead of just turning the budget up.
- **Inflated budget:** in cost-control campaigns the daily budget is a ceiling, so King Kong sets it at 2× average daily spend (start low on a brand-new campaign until the cost control is proven).

**The Mastery Guide's local translation (rough tiers, adjust per account):**

- **Under ~$1,500/month:** 1 campaign · 1–2 ad sets · broad within radius · 4–8 distinct concepts · lowest-cost bidding · refresh 3–5 concepts every 2–4 weeks.
- **~$1,500–$5,000/month:** testing campaign (~20–30%) + scaling campaign (~70–80%). Move to cost cap once the true cost per qualified lead is known.
- **$5,000+/month:** the full King Kong Launch + Scale structure, a retargeting stack, CRM feedback to Meta, AI variant engine at volume.

**The key insight from the Workbook's budget drills: small budgets need fewer ad sets, not more.** Run the learning-phase math and you'll see why: at $40/day with a $15 CPL, you'd need ~$107/day for 50 leads a week in a single ad set. Splitting that into three ad sets makes every one of them starve.

Most of ZDub's clients, PMT included, live in the first tier. Read King Kong to understand where accounts go, not to copy it at $35/day.`,
      keyPoints: [
        "King Kong: Launch (test, cost cap) + Scale (winners, ROAS goal) campaigns",
        "A winner = an ad that earns a big share of spend; copy it to Scale, keep the original live",
        "Under ~$1,500/month: 1 campaign, 1–2 ad sets, 4–8 concepts",
        "$1,500–5,000/month: ~20–30% testing + ~70–80% scaling",
        "Small budgets need fewer ad sets, not more"
      ],
      why: "It's easy to copy a big agency's structure and starve a $35/day account. The tiers tell Zach exactly how much structure PMT and each prospect can afford.",
      table: {
        head: ["Monthly spend", "Structure", "Bidding"],
        rows: [
          ["Under ~$1,500", "1 campaign · 1–2 ad sets · 4–8 concepts", "Lowest cost / highest volume"],
          ["~$1,500–$5,000", "Testing (~20–30%) + scaling (~70–80%)", "Add cost cap once true cost per qualified lead is known"],
          ["$5,000+", "King Kong Launch + Scale, retargeting stack, CRM feedback", "Cost cap (Launch), ROAS goal (Scale)"]
        ]
      },
      example: {
        title: "Workbook D18.4, scenario 3",
        body: "$900/month (about $30/day), target CPL $40. Minimum for 50 leads/week: $40 × 50 ÷ 7 ≈ $286/day. Answer key: one ad set, an earlier optimization event, and heavy reliance on organic and follow-up. Not three ad sets by town."
      },
      practice: [
        {
          prompt: "Workbook Drill D18.4: for each scenario, recommend a structure using the tiers and calculate the minimum daily budget per ad set (target CPL × 50 ÷ 7).",
          fields: ["1) $1,200/month, target CPL $15", "2) $3,000/month, target CPL $30", "3) $900/month, target CPL $40"],
          rubric: ["Correct tier for each", "Math shown: CPL × 50 ÷ 7", "Compares the minimum to the real daily budget (monthly ÷ 30)", "Recommends fewer ad sets and/or an earlier event when the budget falls short"],
          model: "1) Under-$1,500 tier: one campaign, 1–2 ad sets, 4–8 concepts. Minimum ≈ $107/day vs. ~$40/day available, so one ad set, accept slower learning, or optimize for an earlier event (landing page views), or improve CPL. 2) $1,500–5,000 tier: testing (~20–30%) + scaling (~70–80%). Minimum ≈ $214/day vs. ~$100/day, so keep ad sets few and consolidated. 3) Under $1,500: minimum ≈ $286/day vs. ~$30/day; one ad set, earlier event, lean on organic and follow-up."
        }
      ],
      today: { task: "Put PMT and your top two prospects into a budget tier and write the structure each one can afford, using their real or likely monthly spend.", output: "A 3-row tier table (PMT + 2 prospects) in your agency notes", minutes: 20, suggested: false },
      check: [
        { q: "In King Kong's system, what counts as a winning ad?", a: "Any ad that earns a significant percentage of the campaign's budget, not CTR, CPC or hook rate." },
        { q: "What structure fits a client under ~$1,500/month?", a: "One campaign, 1–2 ad sets, broad within radius, 4–8 distinct concepts, lowest-cost bidding, refresh 3–5 concepts every 2–4 weeks." },
        { q: "What's the key insight from the budget drills?", a: "Small budgets need fewer ad sets, not more." }
      ]
    },
    {
      id: "meta-16",
      part: "budget",
      title: "Minimum ad spend: where the mentors disagree",
      minutes: 9,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide (11/5/26)", section: "Meta ads, testing and creative; The money model and projections: Speed sells; Where mentors disagree (Minimum ad spend)", who: "Paul Snowman, 7/28/26; Cam, 10/29/26; Tayt Shelman, 11/4/26; Noah Wyman, 10/21/26" },
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "The $30/day rule; 7. Small budgets; Budget and the auction; 12. Talking about ad spend with prospects", who: "Cam, 10/15/26; Logan McKinney, 10/13/26; Noah, 10/7/26; Calum, 10/6/26; Jason Maulucci, 8/18 and 8/25/26" }
      ],
      alsoIn: ["Sales tab — Money model before price (Noah's live money model is taught there)"],
      idea: `Ask six mentors the minimum a client should spend and you get six answers. This lesson lays them out without picking one, because the right number depends on the client's ticket, cost per lead and goal.

**The positions** are in the table below, oldest to newest. A few things cut across all of them:

**Speed sells (Tayt, 11/4).** If it costs about $1,000 to get a roofing customer, $25/day takes 40 days to get one, while $100/day takes 10. "Would you rather have a client in 10 days or 40 days?" Tayt suggests about $100/day for roofers, and says warm-up only matters at $500–$1,000/day.

**Frame spend with the sales cycle (Jason, 8/25).** $30/day at $30 per lead, with a 5-day sales cycle and a $10k ticket, means the client fronts about $150 before the first deal. After that it's "house money." Jason also says to decide the test budget before you open Ads Manager, e.g. spend 5× your target customer acquisition cost before judging (8/18), and notes revenue sets the budget floor.

**Reverse-engineer from the goal (Noah, 10/21).** If the client has a goal ("one pool"), work backward through cost per lead and close rate to the spend it takes. That live money model belongs to the Sales tab.

**How ad spend works in the pitch (Noah, 10/7; Calum, 10/6).** Ad spend is set by the client, paid directly to Meta, controlled by the agency, and doesn't pass through the agency. Guarantees exclude ad spend. Calum keeps the number as a range in the pitch and confirms it once he's inside their accounts. Profit margin sets break-even ROAS: a 20% margin needs 5×.

The study guide's "what fits ZDub now" column was written by Claude, not the mentors, so it isn't taught here.`,
      keyPoints: [
        "Mentor floors range from $10/day (Logan) to $100/day for roofers (Tayt)",
        "Paul: under $50/day, don't take the client; Cam: $30/day floor, no guarantee",
        "Speed: higher spend gets the first customer sooner (Tayt's 10 vs. 40 days)",
        "Sales-cycle framing makes spend feel safe: front a little, then 'house money' (Jason)",
        "Ad spend goes straight to Meta; guarantees exclude it (Noah)"
      ],
      why: "Every sales call gets to 'how much do I need to spend?' Knowing each mentor's number and reasoning lets Zach answer from the client's own math instead of guessing a single figure.",
      table: {
        head: ["Mentor (date)", "Position", "Reasoning / context"],
        rows: [
          ["Paul (7/28)", "At least $50/day, or don't take the client", "Structure and testing need room; 9 ads at ~$70/day is 'super healthy'"],
          ["Jason (8/18, 8/25)", "Test budget ≈ 5× target CAC before judging", "Revenue sets the floor; frame with the sales cycle"],
          ["Calum (10/6)", "Start around $50/day (~$1,500/month), pitched as a range", "Leads vary by niche and ticket ($300 window cleaning vs. $15k remodel)"],
          ["Noah (10/7)", "$20/day is fine to start", "More spend = more reach"],
          ["Logan (10/13)", "Works with $10/day clients", "Optimize for an earlier event; budget grows 10 → 25 → 50 → 100 after a closed job"],
          ["Cam (10/15, 10/29)", "~$30/day rule of thumb / floor for tight budgets, no guarantee", "≈ one average lead a day; below that, a follow ad"],
          ["Tayt (11/4)", "~$100/day for roofers", "Speed: first customer in 10 days instead of 40"]
        ]
      },
      example: {
        title: "Same prospect, three framings",
        body: "A Roseville roofer, ~$1,000 to acquire a customer. Paul's lens: he needs $50/day minimum or ZDub passes. Tayt's lens: \"$25/day gets your first roof in about 40 days; $100/day in about 10.\" Jason's lens: \"At your cycle, you'll front roughly X before the first job pays for the rest.\" Zach can show all three and let the owner's goal and cash decide."
      },
      practice: [
        {
          prompt: "Write the ad-spend conversation for two prospects using at least two mentor framings each. Don't pick a 'right' mentor; use the client's numbers.",
          fields: ["PMT: cost to get one student (your estimate), daily spend options, days to first student at each", "PMT: one sentence using Jason's sales-cycle framing", "Roofer (~$1,000 per customer): Tayt's speed framing", "Roofer: what Paul's $50/day rule means for whether you take him", "Your range to pitch, and when you'll confirm it"],
          rubric: ["Uses the client's own cost per customer, not a guess presented as fact", "Shows days-to-first-customer math", "Presents spend as a range confirmed after seeing their accounts (Calum)", "Mentions ad spend goes directly to Meta and is excluded from guarantees"]
        }
      ],
      today: { task: "Build a simple spend-options sheet you can screen-share: daily spend ($30 / $50 / $100), monthly total, days to first customer at the prospect's cost per customer.", output: "A reusable spend-options sheet (Google Sheet)", minutes: 30, suggested: true },
      check: [
        { q: "What are Paul's and Cam's minimum-spend positions in the 9 New Calls?", a: "Paul (7/28): at least $50/day or don't take the client. Cam (10/29): about $30/day floor for tight budgets, without a guarantee." },
        { q: "What's Tayt's 'speed sells' math?", a: "At ~$1,000 per roofing customer, $25/day takes ~40 days to get one, $100/day ~10 days. 'Would you rather have a client in 10 days or 40 days?'" },
        { q: "How does Jason make ad spend feel safe?", a: "Frame it with the sales cycle: the client fronts a small amount before the first deal pays back, then it's 'house money.'" }
      ]
    },
    {
      id: "meta-17",
      part: "budget",
      title: "Scale in steps (the '15–20% every 48 hours' rule is outdated)",
      minutes: 8,
      tags: ["Playbook", "Book", "Mentor", "Platform fact (re-check)"],
      date: "2026-10-19",
      source: [
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Part 4 Fact-Check: 'Raise budget 15–20% every 48 hours'; Meta Ads for Local Businesses: Scaling", who: "Research playbook (overrides older scaling rules)" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Key settings: Patience; Ch 15 — How to test on small local budgets (more, better, new)", who: "Book curriculum (Hormozi, $100M Leads)" },
        { doc: "ZDub Guide 02 V2", section: "7. Small budgets; 9. Testing and judging ads", who: "Logan McKinney, 10/13/26; Paul Snowman, 10/19/26" },
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Section 17 (Horizontal Scaling Move)", who: "King Kong team" }
      ],
      idea: `Older AI-generated tactics told you to raise budgets 15–20% every 48 hours. The Social Playbook's fact-check calls that **"folklore with a kernel of truth."**

**What's actually true:**

- Meta's real rule is that **significant edits can restart learning**, which needs about 50 events in 7 days.
- The 20% figure is a practitioner heuristic, not a Meta threshold. **Most 2026 guides say 10–20% every 3–4 days.** The Mastery Guide says the same: scale in modest steps rather than doubling overnight, and avoid big edits for about a week.
- Many local ad sets never exit learning anyway, so **consolidation, 7-day stability and adding proven concepts matter more** than how slowly you nudge the budget.

**Other ways to scale (often better than raising budget):**

- **Add proven concepts** to the ad set (Social Playbook).
- **Expand geography only when frequency and CPL rise** in the current area.
- **Horizontal scaling** (King Kong): put the winning ad in front of new destinations instead of only turning the dial.
- **More, better, new** (Hormozi, via Ch 15): first do more of what works, then make it better, and only then try something new.

**And when to leave it alone (Paul, 10/19):** if a campaign is producing leads or customers, generally don't change anything. Paul has been burned by over-optimizing.

**The client-side ladder (Logan, 10/13):** budget increases are usually earned by results, not a calendar. If the client closes one job, "budget goes from 10 to 25 to 50 to 100." That's a conversation with the owner, made in steps.

**A sanity floor (Social Playbook rule of thumb):** budget enough for 10–20 leads per month per offer. At a $25 CPL that's $250–$500/month minimum, and $1,000–$3,000/month for a meaningful testing cadence.`,
      keyPoints: [
        "'15–20% every 48 hours' is outdated folklore, not a Meta rule",
        "Most 2026 guides: 10–20% every 3–4 days; avoid big edits for about a week",
        "Consolidation and adding proven concepts matter more than the size of each bump",
        "Expand the area only when frequency and CPL rise",
        "If it's producing, don't touch it (Paul)"
      ],
      why: "When PMT has a good week, the instinct is to double the budget. Scaling in calm steps, or adding concepts instead, protects the learning that made the good week happen.",
      example: {
        title: "PMT from $35 to $60/day",
        body: "Illustrative: weeks 1–2 at $35/day, one ad set, leads at ~$18 and booking. Chris agrees to more. Instead of jumping to $60 tomorrow, Zach goes $35 → $42 (day 15) → $50 (day 19) → $58 (day 23), adds two proven concepts from organic, and only widens the radius if frequency and CPL start climbing."
      },
      practice: [
        {
          prompt: "Write a 3-week scaling plan for a PMT ad set that's working at $35/day.",
          fields: ["Budget steps with dates", "Concepts you'd add (and where they came from)", "Signal that would make you expand the radius", "Signal that would make you stop scaling and hold"],
          rubric: ["Steps are roughly 10–20% every 3–4 days, not 15–20% every 48h", "Adds proven concepts rather than only raising budget", "Radius expansion tied to rising frequency and CPL", "Includes a 'leave it alone' condition"]
        }
      ],
      today: { task: "Write PMT's scaling rule in the client SOP: step size, spacing, what you add instead of budget, and the 'don't touch' condition.", output: "A 4-line scaling rule in PMT's SOP", minutes: 15, suggested: false },
      check: [
        { q: "Why is 'raise budget 15–20% every 48 hours' considered outdated?", a: "It's a practitioner heuristic, not a Meta threshold. Meta's real rule is that significant edits can restart learning; most 2026 guides say 10–20% every 3–4 days, and consolidation matters more." },
        { q: "What is Hormozi's scaling order? (Workbook 15.10)", a: "More, better, new. First do more of what works, then make it better, and only then try something new." },
        { q: "When should you expand the geography?", a: "Only when frequency and CPL rise in the current area (Social Playbook)." }
      ]
    },
    {
      id: "meta-18",
      part: "plays",
      title: "Follower ads: Cam's $11/day build for your own agency",
      minutes: 10,
      tags: ["Mentor", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "8. Follower ads; Cam's follower ad build (9/17); LC module launch settings", who: "Cam, 9/17/26 and 10/15/26; Logan McKinney, 9/25 and 10/13/26; LC AI Static Image Ads module" }
      ],
      alsoIn: ["Organic Social tab — the 3×3 grid and profile set-up"],
      idea: `A follower ad sends people to an Instagram profile instead of a form. It's the cheapest way to get quality attention on a tiny budget, and it's best suited to an agency marketing itself.

**Cam's build (9/17):**

- **Campaign:** Traffic (or Engagement), daily budget **$11**. Leave special ad category and advanced options alone.
- **Ad set:** conversion location = **Instagram profile**; performance goal = **maximize profile visits** (optimizing for link clicks to your profile hides the metrics); location = your city; placements = **Instagram only**, with all IG placements on so you can see which performs.
- **Ads:** **2–3 hook variations on one body**, one CTA ("click the link below and follow my page").
- **Why:** it attracts people to your page whom you then reach out to. "The cheapest form of lead that you can go and get that's still quality." Downside: it needs a stronger creative.
- **Numbers he gave:** about **$5 per follower** "if your page is dialed in"; profile visits **under $1, often 10–25 cents**, so it exits learning in about two days even at $11/day.

**The LC module's version** (Engagement, Instagram profile visits): 1080×1350 image; placements IG Feed and Explore with Advantage+ placements **off** so the 4:5 image isn't cropped; city or radius, ages 25–64, broad; a budget you can run 7+ days; at least 3 creatives in one ad set; run 7 days, kill the 2 losers, make 3 new variations of the winner. Note the difference: Cam turns all IG placements on to compare; the module limits to Feed and Explore to protect the crop.

**Before you run it:**

- Have organic posts up first, ideally a 3×3 grid of nine tiles (Logan, 9/25).
- The DM bot only engages a follower after you reach out first (Cam, 9/17). The outreach is the work.

**When it's the wrong tool (Logan, 10/13).** Follower ads aren't a bad idea when you're starting an agency with a clear offer and good top- and middle-of-funnel content. But they're less direct than a landing page, followers convert less, and you have to do outreach. Logan spent $15–20/day, landed a couple of clients, then moved to $50/day to a landing page. And they're not automatic for a $10/day local trades client who wants jobs.`,
      keyPoints: [
        "Traffic/Engagement → IG profile → maximize profile visits, $11/day (Cam)",
        "2–3 hook variations on one body; one follow CTA",
        "~$5/follower, profile visits often 10–25¢; exits learning in ~2 days",
        "Grid of 9 posts first; followers only convert if you reach out",
        "Great for ZDub's own marketing; usually wrong for a client who wants jobs"
      ],
      why: "This is the most affordable way for ZDub to get in front of Sacramento business owners right now, and it's a cheap place for Zach to practice launching, reading and iterating on ads with his own money.",
      example: {
        title: "ZDub's first follower ad",
        body: "Body (one selfie video): Zach on a job site explaining one thing he changed in PMT's ads and what it did. Three hooks: \"Sacramento roofers: your slow season is a marketing problem.\" / \"I run ads for one motorcycle school. Here's what I learned in week one.\" / \"Most local ads look like ads. Here's the fix.\" CTA: \"Follow for one local-ads tip a week.\" Ad set: IG only, location set to the Sacramento area ZDub actually serves, maximize profile visits, $11/day. Then Zach DMs new followers who own businesses."
      },
      practice: [
        {
          prompt: "Plan ZDub's $11/day follower ad.",
          fields: ["The one body (what you'll say on camera)", "Hook 1", "Hook 2", "Hook 3", "CTA", "Ad set settings (conversion location, goal, location, placements)", "Your DM opener for a new follower who owns a business"],
          rubric: ["One body, 2–3 genuinely different hooks", "Conversion location IG profile, goal profile visits, Instagram placements", "Grid of 9 posts exists or is planned first", "DM opener starts the conversation (the bot won't)"]
        }
      ],
      today: { task: "Check ZDub's Instagram grid: count posts. If under nine, plan the missing ones; if nine or more, draft the follower ad in Ads Manager (don't publish until reviewed).", output: "A grid count + either a post plan or a drafted follower ad", minutes: 30, suggested: false },
      check: [
        { q: "What are the ad set settings in Cam's follower build?", a: "Conversion location Instagram profile; performance goal maximize profile visits; location your city; Instagram-only placements with all IG placements on." },
        { q: "What numbers did Cam give for follower ads?", a: "About $5 per follower if the page is dialed in; profile visits under $1, often 10–25 cents; exits learning in about two days at $11/day." },
        { q: "What's Logan's main caution about follower ads?", a: "They're less direct than a landing page, followers convert less, and you have to do the outreach; not automatic for a local client who wants jobs." }
      ]
    },
    {
      id: "meta-19",
      part: "plays",
      title: "Pick the destination: instant form, landing page or profile",
      minutes: 9,
      tags: ["Mentor", "Disagreement", "Book"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "Ads straight to a landing page (Logan, 10/2); Cam's lead ad build (9/17); 3. Settings (conversion location); Where the mentors disagree (Your own agency ads)", who: "Logan McKinney, 10/2 and 10/13/26; Cam, 9/17 and 10/15/26" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Landing pages, instant forms, and message match", who: "Book curriculum" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Meta Ads for Local Businesses: Lead destinations", who: "Research playbook" }
      ],
      alsoIn: ["Funnels tab — landing page build and speed to lead"],
      idea: `Where the click goes changes the cost and quality of every lead.

**The options:**

- **Instant form:** cheapest, highest volume, lower average quality. Cam keeps clients here until about **$100/day** (10/15), and moves his own lead ads to forms once he's spending at least $30/day (9/17). "Lead generation" optimization gives cheaper leads with some lower quality; "quality leads" costs more.
- **Landing page:** more friction, often higher intent, better for higher-ticket services (Mastery Guide). Needs the pixel and Conversions API. Rules: strip the navigation, load fast on mobile, match the ad's message, one call to action, proof next to the form.
- **Instagram profile:** the follower-ad route (previous lesson).
- **Messenger / IG DM / WhatsApp:** great for restaurants, salons and gyms, but needs a fast human reply (Social Playbook).
- **Call ads:** for urgent home services, scheduled to business hours (Social Playbook).

**Zach's own question (Logan, 10/2).** Zach asked whether to skip follower ads and run ads straight to his page, since he only needs a few clients. Logan: "Yeah, that's what I do." His reasoning: "You could get a thousand follows, but if none of them are planning to buy from you... it's worthless compared to getting a hundred landing page [clicks] and one person is like, this is exactly what I need." His setup: Traffic objective, recommended settings, paste the page URL as the website URL so "Learn more" goes straight to the page. He added, "don't take exactly what I'm doing as gospel." If you do run follower ads, test sending interested followers the booking link directly versus the landing page link.

**The disagreement (both current).** Cam (9/17) says $11/day follower ads are the cheapest quality lead, with lead forms from $30/day. Logan (10/2) runs ads straight to the landing page. Guide 02 notes budget is what separates them: at ~$11/day Cam's follower build fits; at $30+/day with a live landing page, Logan's direct-to-page test is reasonable.

**Cam's lead-ad proof (9/17):** a Florida mold-testing client, 17 days, $604 spent, 25 leads, **$24 per lead**, $50/day, 40-mile radius. One ad carried it: "a good hook plus selfie videos plus some B roll." Call the lead as soon as it opts in.`,
      keyPoints: [
        "Instant forms until ~$100/day for clients (Cam); landing pages for higher intent / higher ticket",
        "Landing page rules: no nav, fast mobile, message match, one CTA, proof by the form",
        "Logan (to Zach): ads straight to the landing page on Traffic; 'that's what I do'",
        "Cam: follower ads at ~$11/day, lead forms from $30/day",
        "DMs for chat-closing businesses; call ads for urgent home services"
      ],
      why: "PMT, ZDub and each trades client need a different destination. Picking it deliberately (not by default) is one of the biggest levers on cost per booked customer.",
      table: {
        head: ["", "Cam (9/17)", "Logan (10/2)"],
        rows: [
          ["Your own agency ads", "$11/day follower ads; lead forms from $30/day", "Ads straight to the landing page; 'that's what I do'"],
          ["Objective", "Traffic/Engagement → IG profile visits", "Traffic → website URL"],
          ["Reasoning", "Cheapest form of lead that's still quality", "A hundred page visits with one buyer beats a thousand follows with none"]
        ]
      },
      example: {
        title: "Four destinations for four businesses",
        body: "PMT at $35/day: instant form (Cam's default under $100/day). A $15k remodeler at $80/day: test a landing page with project-type questions first and contact info last. A Midtown salon: Messenger/IG DM ads, only if someone answers within minutes. A Roseville plumber: call ads during business hours for emergencies, plus a form for non-urgent jobs."
      },
      practice: [
        {
          prompt: "Choose the destination for each and give one reason.",
          fields: ["PMT beginner course, $35/day", "ZDub's own ads, $11/day", "ZDub's own ads, $40/day with your landing page live", "A Davis med spa, $50/day, books by DM", "An emergency HVAC repair company, $60/day"],
          rubric: ["Client lead campaigns under ~$100/day default to instant forms", "ZDub at $11/day = follower ad; at $40 with a page = Logan's direct-to-page test is reasonable", "DM ads only with fast human replies", "Urgent home services considered for call ads"]
        }
      ],
      today: { task: "Write PMT's destination decision and the trigger to test a landing page (e.g. spend reaching ~$100/day or lead quality falling). If ZDub's page is live, draft Logan's Traffic-to-page ad for your own agency.", output: "PMT destination decision + (optional) a drafted ZDub page ad", minutes: 25, suggested: false },
      check: [
        { q: "Until about what spend does Cam keep clients on instant forms?", a: "About $100/day (10/15)." },
        { q: "What did Logan tell Zach about follower ads vs. ads straight to his page?", a: "He runs ads straight to the landing page ('that's what I do'): a hundred page visits with one buyer beat a thousand follows with no buyers. Don't take it as gospel." },
        { q: "What were the results of Cam's Florida mold lead campaign?", a: "17 days, $604 spent, 25 leads, $24 per lead at $50/day with a 40-mile radius; one ad (hook + selfie video + B-roll) carried it." }
      ]
    },
    {
      id: "meta-20",
      part: "plays",
      title: "The Andromeda launch playbook: persona to scaled winner in 8 steps",
      minutes: 11,
      tags: ["Playbook", "Platform fact (re-check)"],
      source: [
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "03 The launch playbook (8 steps); Principle 2 (five questions + ad brief template); Principle 3 (1 persona = 1 ad set; matching angle type to format)", who: "ZDub field guide compiled from a YouTube breakdown of Meta's Oct 28, 2026 article" }
      ],
      alsoIn: ["Ad Creative tab — Andromeda Principle 1 and the reason-to-buy map ('creative is the targeting' lives there)"],
      idea: `The Andromeda Playbook turns its six principles into one repeatable launch process. The creative side (finding reasons to buy) is taught in the Ad Creative tab; this lesson is the media-buying spine.

1. **Pick the persona.** One specific person: who they are, what they want, what they fear, where they are in the decision. **Each persona becomes one ad set.**
2. **Build the reason-to-buy map.** 3+ motivations, 3+ situations, 3+ objections in the customer's own words, mined from reviews, comments, DMs and calls.
3. **Write a brief for each ad.** Every idea must answer **five questions**: Who is this relevant to? What situation or problem does it address? What reason to buy does it introduce? What evidence supports it? What will we learn from testing it? **If an ad can't answer all five, it doesn't get produced.** Name ads Persona_Bucket_Angle_Format_v1.
4. **Choose the format that explains each angle.** Fears get a talking head or testimonial. "How does it work" gets a demo or POV. Proof gets review screenshots or before/after. Price gets a value breakdown (static or carousel). A specific moment gets a short scene. The format follows the angle, not the other way around.
5. **Build the campaign.** One campaign with **CBO and one clear goal** (for example landing page views or bookings). **One ad set per persona with broad targeting** (location, age); let the creative do the targeting. **3 to 6 distinct angle ads per ad set** is a practical starting range.
6. **Launch and let Meta allocate.** Don't touch it right away. Give it enough days and budget for Meta to decide. Note which ads get spend and which get ignored.
7. **Read engagement and conversions together.** Winners do well on both (see the hook/hold rate lesson for the four-pattern table). Decide: scale, fix the hook, fix the offer, or retire.
8. **Iterate, then consolidate.** Before you kill an angle, try it in a new format. On winners, iterate hooks, visuals and delivery. **Log what you learned by persona** ("First-timers respond to X"), not by individual ad, so each round starts smarter.

**Why one ad set per persona (Principle 3).** The newer Andromeda represents multiple, changing interests per person, so the same person can respond to different reasons on different days. You don't need a separate interest-targeted ad set per motivation; test motivations as different ads inside one persona ad set and consolidate learning at the persona level.

Remember the learning-phase math: every extra persona ad set splits your budget. At small budgets, start with one persona.`,
      keyPoints: [
        "1 persona = 1 ad set, broad targeting, 3–6 distinct angle ads inside",
        "Five questions per ad: who, situation, reason to buy, evidence, what we'll learn",
        "Format follows the angle (fear → talking head; how-it-works → demo; price → value breakdown)",
        "One CBO campaign, one clear goal; launch and let Meta allocate",
        "Log learnings by persona, not by ad"
      ],
      why: "This is the most current (Oct 2026) process for building Meta campaigns, and it's already been applied to PMT. Running it every time keeps a high-volume creative plan focused instead of random.",
      table: {
        head: ["Brief field", "What goes in it"],
        rows: [
          ["Ad name / ID", "Persona_Bucket_Angle_Format_v1"],
          ["Relevant to (persona)", "One specific person"],
          ["Situation / problem", "The moment it shows up"],
          ["Reason to buy", "Motivation, situation or objection, in the customer's words"],
          ["Evidence", "Demo, testimonial, review, number, visual proof"],
          ["Format", "Talking head, demo, UGC, static, carousel, testimonial"],
          ["What we'll learn", "\"If this wins, it tells us that ___ matters to ___.\""]
        ]
      },
      example: {
        title: "Sample brief: PMT Ad set 1, Ad A",
        body: "Relevant to: never-ridden adults near Woodland who want their endorsement. Situation: wants to sign up but pictures being the worst rider in class. Reason to buy (objection): \"I'll look like a fool in front of everyone.\" Evidence: instructor on camera, real range footage, a nervous-student review quote. Format: 9:16 talking head with range B-roll, 20–30 seconds. What we'll learn: whether addressing the social fear head-on beats leading with freedom or the license for first-timers."
      },
      practice: [
        {
          prompt: "Run steps 1, 3 and 5 for a third PMT persona: the gift buyer (someone buying the course for a partner, kid or friend).",
          fields: ["Step 1: persona (who, wants, fears, decision stage)", "Step 3: one full brief (all five questions answered)", "Step 3: ad name in the naming pattern", "Step 5: where this persona's ad set fits in PMT's campaign and budget"],
          rubric: ["Persona is one specific person, not a demographic", "All five questions answered; evidence is real (no invented reviews)", "Format matches the angle type", "Notes the budget cost of adding a third ad set (learning-phase math)"]
        }
      ],
      today: { task: "Write two more five-question briefs for PMT's first-timer ad set using the Andromeda brief template, ready to hand to production.", output: "Two completed ad briefs in PMT's creative doc", minutes: 30, suggested: false },
      check: [
        { q: "What are the five questions every ad must answer before it's made?", a: "Who is it relevant to? What situation or problem? What reason to buy? What evidence supports it? What will we learn from testing it?" },
        { q: "How does the playbook structure campaigns and ad sets?", a: "One CBO campaign with one clear goal; one ad set per persona with broad targeting; 3–6 distinct angle ads per ad set." },
        { q: "Where should learnings be logged?", a: "By persona ('First-timers respond to X'), not by individual ad." }
      ]
    },
    {
      id: "meta-21",
      part: "plays",
      title: "PMT's campaign build: persona ad sets, date-fill and demand tests",
      minutes: 10,
      tags: ["Playbook", "Book"],
      source: [
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 Applied to PMT: Personas 1–2, Sample campaign build (one range)", who: "ZDub field guide" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — ZDub Application: two campaign types for a training school; The one-keyword hack", who: "Book curriculum" }
      ],
      alsoIn: ["Ad Creative tab — PMT reason-to-buy maps and the one-keyword hack"],
      idea: `Two documents give PMT a ready campaign shape. Use them together, sized to the budget.

**The Andromeda sample build (one range):**

- **Campaign:** PMT Woodland · CBO · Goal: landing page views ("link in bio to save your seat").
- **Ad set 1, First-timer** (broad, 30–40 mile radius, adults): A "Everyone here is new" (talking head, fear of looking foolish) · B The first hour, from zero (demo, never ridden) · C Bike and helmet provided (static, no gear) · D Nervous on day one (testimonial) · E What's included (carousel, value).
- **Ad set 2, Licensed but uneasy** (broad, same radius): A "Licensed isn't the same as in control" (talking head) · B Riders practicing on the range (demo, mastery) · C "Not a beginner class" (static, objection). Persona 2 is the path to PMT's highest-value offer: continued 1-on-1, intermediate and advanced training.

**The Mastery Guide's two campaign types for a training school:**

1. **Date-fill campaigns:** one ad set per town where classes run, with town-specific creative ("Woodland: seats open this Saturday"), a lead form or booking page, running **only while seats are open.**
2. **Demand-test campaigns:** for new class types (intermediate, advanced), an ad and short video explaining format, length, price and requirements, asking people to message or tap "Learn More" and say where they live. Use responses to decide where to schedule new classes, then fill them with date-fill ads. Organic content runs underneath both, and the best organic posts become ads.

**Decisions Zach has to make (the sources differ):**

- **Ad set key:** Andromeda splits by *persona*; the Mastery Guide's date-fill splits by *town*; Cam (9/17) gives different areas different ad sets. With one range, split by persona. With several ranges that fill on different dates, town ad sets make sense, but each one needs enough budget to learn.
- **Goal:** the Andromeda sample optimizes for landing page views (an earlier, cheaper event, friendly to small budgets). The mentor default for local clients is the Leads objective with an instant form (Cam, 10/15). Pick one deliberately and track registrations either way.
- **Budget:** two persona ad sets at ~$35/day split the learning. Starting with Ad set 1 alone is a valid first month.`,
      keyPoints: [
        "Andromeda sample: one CBO campaign, First-timer + Licensed-but-uneasy ad sets, 3–5 angle ads each",
        "Date-fill campaigns: town-specific creative, only while seats are open",
        "Demand-test campaigns: gauge interest and location before scheduling new class types",
        "Split ad sets by persona (one range) or town (several ranges), within the budget",
        "Choose the goal on purpose: landing page views (sample) vs. Leads + instant form (mentor default)"
      ],
      why: "This is PMT's actual build, close to launch-ready. Knowing where the sources differ lets Zach make the two or three real decisions instead of copying a template.",
      example: {
        title: "PMT month 1 at ~$35/day",
        body: "Campaign \"PMT Woodland Leads 11/10\" · one ad set \"FirstTimer_Broad_35mi\" · ads A–E from the Andromeda sample · instant form with the persona question · Leads objective (mentor default). Persona 2 ads are posted organically for now; the best performer becomes Ad set 2 when budget rises. A demand-test ad for an intermediate class runs only if Chris is ready to schedule one."
      },
      practice: [
        {
          prompt: "Write PMT's real build sheet for the next launch.",
          fields: ["Campaign name, objective/goal and why", "Ad set(s): name, persona or town, radius", "Ads in ad set 1 (names + one-line concept each)", "Daily budget and whether it can support more than one ad set", "Is a date-fill or demand-test campaign needed right now? Why?"],
          rubric: ["Goal choice is explicit and justified", "Ad set split (persona vs. town) matches PMT's actual ranges and budget", "Ads are distinct reasons to buy, not reworded copies", "Follows PMT copy rules (no cheap/easy/discount/guaranteed; no pass promise)"]
        }
      ],
      today: { task: "Fill in PMT's build sheet from this lesson and send Chris a 5-line summary for approval (campaign, ad set, five ads, budget, start date).", output: "PMT build sheet + approval message to Chris", minutes: 40, suggested: false },
      check: [
        { q: "What goal does the Andromeda sample build use for PMT?", a: "Landing page views ('link in bio to save your seat'), inside one CBO campaign." },
        { q: "What are the Mastery Guide's two campaign types for a training school?", a: "Date-fill campaigns (town ad sets, run only while seats are open) and demand-test campaigns (gauge interest in new class types and locations)." },
        { q: "Why is Persona 2 (licensed but uneasy) strategically important?", a: "It's the path to PMT's highest-value offer: continued 1-on-1, intermediate and advanced training." }
      ]
    },
    {
      id: "meta-22",
      part: "plays",
      title: "Retarget by reason, not pressure (and keep an awareness layer)",
      minutes: 9,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Section 26: Strategic Retargeting; Section 19 (exclusions)", who: "King Kong team" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — Retargeting: different offers, not more pressure; An always-on awareness layer", who: "Book curriculum (King Kong; Roy H. Williams)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 18 — 18.11, Drill D18.5 + Answer Key", who: "Workbook" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Meta Ads for Local Businesses: Retargeting", who: "Research playbook" }
      ],
      alsoIn: ["Foundations tab — Roy Williams, branding and repetition"],
      idea: `**The wrong way** (King Kong): take the ad they already saw, show it again to people who didn't convert, slap a discount on it, and hammer. That's not retargeting; it's saying the same thing louder to someone who already said no.

**The right way: ask why they didn't buy.** There are usually three reasons someone clicked and didn't convert, and each gets its own kind of ad:

1. **They had an objection** → objection-handling ads. PMT: "Never ridden? Most of our students haven't." "What if it rains?" "What's included?"
2. **They didn't believe the claims** → proof ads: testimonial carousels and before-and-afters, **matched to the prospect** (same town, same situation). Specificity in proof beats volume.
3. **The offer wasn't right** → a different offer: a lower first step, a free consultation, a guide, a different class date or package.

**For lead generation, the sequence is objection-handling → proof → a free value offer.** Build audiences from page and profile engagers and video viewers over the last 30 to 180 days, and exclude people who already bought.

**Do small accounts need this?** The Social Playbook notes Advantage+ already reaches warm audiences, so small accounts can skip a separate retargeting campaign, or just retarget video viewers and engagers with proof and offer ads. King Kong agrees for low-ticket, simple products, but says high-value, multi-touch purchases (lead gen included) benefit from strategic retargeting.

**The always-on awareness layer** (Mastery Guide). Roy Williams' frequency rule (about three exposures per person per week; reach fewer people more often) translates into Meta as a small, always-on reach or engagement campaign in a tight radius, running the best organic content while lead campaigns harvest. It keeps the brand familiar and makes every lead ad cheaper and more trusted. Watch frequency: too low and nobody remembers you; too high on the same creative and it fatigues.`,
      keyPoints: [
        "Never retarget with the same ad plus a discount",
        "Objection → objection ad; disbelief → matched proof; wrong offer → different offer",
        "Lead-gen sequence: objection-handling → proof → free value offer",
        "Audiences: engagers and video viewers, 30–180 days; exclude buyers",
        "Small accounts can lean on Advantage+ and a simple proof/offer retarget"
      ],
      why: "PMT's buyers think about it for weeks before booking. Retargeting by reason turns the people who almost signed up into students, without training them to wait for a discount (which PMT's copy rules forbid anyway).",
      example: {
        title: "Workbook D18.5 for a training school",
        body: "Objection: \"Never ridden? Most of our students hadn't either. Here's exactly what happens in the first hour.\" Proof: a carousel of five reviews from nervous beginners in the same area. Different offer: \"Not ready to book? Get our free '7 things to know before your first class' guide.\""
      },
      practice: [
        {
          prompt: "Workbook Drill D18.5 for PMT: list the three most common reasons people don't book, then write one retargeting ad for each.",
          fields: ["Reason 1 (objection) + the objection-handling ad", "Reason 2 (disbelief) + the proof ad (what proof, matched how)", "Reason 3 (wrong offer/timing) + the different-offer ad", "Retargeting audience definition (who, how many days, exclusions)"],
          rubric: ["Each ad answers a specific reason, not a generic 'come back'", "Proof is real and matched to the prospect (town, situation)", "No discount used as the fix", "Buyers excluded; window 30–180 days"],
          model: "Objection: 'I don't own a bike or gear' → static: \"Bike and helmet provided. Just show up.\" Disbelief: 'Will I really be able to ride?' → review carousel from first-timers near Woodland. Wrong timing: 'Not this month' → \"Next class dates: [real dates]. Save a spot when you're ready.\" Audience: video viewers 50%+ and profile engagers, last 90 days, past students excluded."
        }
      ],
      today: { task: "Ask Chris for the top three reasons people tell him they aren't ready to book, and write the three retargeting ad concepts from his answers.", output: "Three reason-based retargeting concepts for PMT", minutes: 25, suggested: false },
      check: [
        { q: "A prospect visited the landing page but didn't book because they didn't believe the claims. Which retargeting ad fits best? (Workbook 18.11)", a: "Proof ads: testimonials and before-and-afters like theirs. Retarget by the reason they didn't buy." },
        { q: "What's the suggested retargeting sequence for lead generation?", a: "Objection-handling → proof → a free value offer." },
        { q: "What does the always-on awareness layer do?", a: "A small reach/engagement campaign in a tight radius running the best organic content keeps the brand familiar (Roy Williams' frequency), making lead ads cheaper and more trusted." }
      ]
    },
    {
      id: "meta-23",
      part: "testing",
      title: "How many creatives to run at your budget",
      minutes: 10,
      tags: ["Mentor", "Disagreement", "Playbook"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "How many creatives at low budget; 9. Testing and judging ads; Where the mentors disagree (Creatives at low budget)", who: "Cam, 9/17/26; Logan McKinney, 9/25/26; Paul Snowman, 10/19/26" },
        { doc: "9 New Calls Study Guide (11/5/26)", section: "Meta ads, testing and creative; Research and judgment; Where mentors disagree (Creative volume)", who: "Paul Snowman, 7/28/26; Tayt Shelman, 10/30/26" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Part 5: Creatives per ad set", who: "Research playbook" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "03 Step 5", who: "ZDub field guide" }
      ],
      idea: `Every mentor agrees: run several creatives and let Meta pick. They differ on how many, and budget is usually why.

**The positions** (table below):

- **Cam (9/17), at $11/day:** 2–3 hook variations on one body, not whole new bodies. Twelve creatives at $12/day starves them, because no single creative can get a result "on paper." At $20–30/day you can run more.
- **Logan (9/25):** 5 creatives is the bare minimum, 10 is optimal, at least $10/day. Can't make five? Film one video plus five different 5-second hooks: "the cheapest test you can run." Stretch goal: 5 bodies × 3 hooks = 15. And about Noah: "he's the guy that's gonna be like, bro, you need like 30 more."
- **Paul (7/28):** three concepts × three hook variations = nine ads at about $70/day, which he called "super healthy." Variations are small changes (a new hook, a different background on a static). Don't wait for one test to finish before launching more concepts.
- **Paul (10/19):** 3×3×1 sprint: 3 visuals × 3 headlines × 1 body = 9 ads in one ad set, budget ideally 2–3× your target CPL per day.
- **Tayt (10/30):** test at least five creatives for one to two weeks. For himself he makes fewer, more deliberate creatives; for clients he uses Paul's many-variation testing, and admits Paul may disagree with his personal style.

**Outside the mentors:** the Andromeda Playbook suggests 3–6 distinct angle ads per persona ad set as a starting range. The Social Playbook says Meta publishes no number (agency claims range from 4–6 to 10–50) and suggests 6–12 genuinely distinct ads as a local default. King Kong runs 10–20 per ad set at big budgets.

**The budget link.** Paul's daily-budget rule (2–3× target CPL) is the bridge: at a $20 target CPL, a 9-ad sprint wants $40–60/day. Below that, fewer creatives (Cam's hooks-on-one-body) keep each ad able to earn a result.`,
      keyPoints: [
        "All agree: several creatives, let Meta pick",
        "~$11/day: 2–3 hooks on one body (Cam); one video + five 5-second hooks (Logan)",
        "5 minimum, 10 optimal (Logan); 9 ads via 3×3 (Paul); 5+ for 1–2 weeks (Tayt)",
        "Paul's sprint budget: ideally 2–3× target CPL per day",
        "Too many ads on too little budget starves every one of them"
      ],
      why: "PMT's creative production is the bottleneck. Knowing how many ads the budget can actually test tells Zach how much to shoot this week, and keeps him from spreading $35/day across 15 ads.",
      table: {
        head: ["Mentor (date)", "How many", "At what budget"],
        rows: [
          ["Cam (9/17)", "2–3 hook variations on one body", "~$11/day; more at $20–30/day"],
          ["Logan (9/25)", "5 minimum, 10 optimal; stretch 15 (5 bodies × 3 hooks)", "At least $10/day"],
          ["Paul (7/28)", "3 concepts × 3 hooks = 9 ads", "~$70/day ('super healthy')"],
          ["Paul (10/19)", "3 visuals × 3 headlines × 1 body = 9 ads, one ad set", "Ideally 2–3× target CPL per day"],
          ["Tayt (10/30)", "At least 5, run 1–2 weeks", "Client accounts (Paul-style testing)"]
        ]
      },
      example: {
        title: "PMT at $35/day with a ~$20 target CPL",
        body: "Paul's rule says a full 9-ad sprint wants $40–60/day, slightly above budget. So Zach runs 5 ads (Logan's minimum): three distinct first-timer concepts, plus two extra hooks on the strongest body. When the budget hits $50, he moves to a 3×3×1 sprint."
      },
      practice: [
        {
          prompt: "Plan the next PMT creative test for the budget you actually have.",
          fields: ["Daily budget and target CPL", "Paul's 2–3× CPL check: is a 9-ad sprint affordable?", "How many ads you'll run and the structure (bodies × hooks, or visuals × headlines × body)", "List the ads", "How long you'll run it before judging"],
          rubric: ["Ad count fits the budget (not 12 ads at $12/day)", "Structure is named and matches a mentor method", "Ads are distinct concepts or deliberate hook variations", "Run length ~1–2 weeks or until each ad spends 3–5× target CPL"]
        }
      ],
      today: { task: "Film one PMT body video and five different 5-second hooks (Logan's cheapest test), or write the shot list for them if you can't film today.", output: "One body + five hooks (or a shot list) for PMT", minutes: 45, suggested: false },
      check: [
        { q: "Why does Cam run only 2–3 hook variations at $11/day?", a: "Twelve creatives at $12/day starves them; no single creative can get a result. At $20–30/day you can run more." },
        { q: "What's Logan's cheapest test if you can't make five creatives?", a: "One video plus five different 5-second hooks." },
        { q: "What's Paul's 3×3×1 sprint and its budget?", a: "3 visuals × 3 headlines × 1 body = 9 ads in one ad set; budget ideally 2–3× target CPL per day." }
      ]
    },
    {
      id: "meta-24",
      part: "testing",
      title: "Concept tests vs. iteration tests (keep them separate)",
      minutes: 8,
      tags: ["Playbook", "Mentor"],
      date: "2026-09-25",
      source: [
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "02 Principle 4: Different-looking ads can still test the same idea", who: "ZDub field guide" },
        { doc: "Ultimate Social Media Workbook", section: "Module 11: Paid social and creative testing", who: "Workbook (Brendan Kane and Dara Denney testing loop)" },
        { doc: "ZDub Guide 02 V2", section: "Fatigue and refreshing winners", who: "Logan McKinney, 9/25/26" },
        { doc: "9 New Calls Study Guide (11/5/26)", section: "Meta ads, testing and creative", who: "Paul Snowman, 7/28/26" }
      ],
      idea: `Three ads: "Make your morning routine easier" filmed in a bathroom, the same message filmed in a bedroom, and the same message with a different opening. They **look** different, but they test **one idea.** They can't tell you whether the idea works; they only help you improve how it's presented.

That's the Andromeda Playbook's Principle 4: there are two kinds of testing, and mixing them up wastes money.

- **Concept testing** asks: *does this reason to buy work?* What changes is the motivation, situation or objection. Do it first, to find what resonates. The mistake: killing a concept after one weak execution.
- **Iteration testing** asks: *what's the best way to present this winning reason?* What changes is the hook, opening line, setting, visuals, on-screen text, delivery or length. Do it after a concept has earned spend and results. The mistake: calling three hook swaps "three new concepts."

**Rules (Andromeda):**

- Give a promising angle **at least two or three different formats** before ruling it out. Ask, "Did I present this angle in the right format?"
- Once you have a winner, spin off **3 to 5 versions that change one element each**: the hook, the first frame, the setting, the speaker or the on-screen text.
- **Label ads** so you can tell concept tests from iterations at a glance (the naming pattern's "v1, v2" handles this).

**Why it matters more now.** Meta treats near-identical ads as one creative, so swapping only the hook doesn't count as a new concept (Social Workbook Mod 11). Paul (7/28) calls those small changes "variations": a new hook, or a different background image on a static.

**Mentor version of iteration (Logan, 9/25).** When a winner fades, make spin-offs of the winning look: a different person, a different setting. "Your winners should be winners because you tested them."`,
      keyPoints: [
        "Concept test = does this reason to buy work? Iteration = best way to present a winner",
        "Try a promising angle in 2–3 formats before killing it",
        "Iterate winners one element at a time, 3–5 versions",
        "Hook swaps are iterations, not new concepts",
        "Label ads so concept vs. iteration is obvious in reports"
      ],
      why: "With a small PMT budget, every dollar spent should either find a new reason to buy or sharpen a proven one. Mixing the two makes results unreadable and kills good ideas early.",
      table: {
        head: ["", "Concept testing", "Iteration testing"],
        rows: [
          ["Question", "Does this reason to buy work?", "What's the best way to present this winning reason?"],
          ["What changes", "Motivation, situation or objection", "Hook, opening line, setting, visuals, on-screen text, delivery, length"],
          ["When", "First, to find what resonates", "After a concept earns spend and results"],
          ["Mistake to avoid", "Killing a concept after one weak execution", "Calling three hook swaps 'three new concepts'"]
        ]
      },
      example: {
        title: "PMT labels at a glance",
        body: "FirstTimer_Objection_LookFoolish_TalkingHead_v1 (concept). FirstTimer_Objection_NoGear_Static_v1 (new concept). FirstTimer_Objection_LookFoolish_TalkingHead_v2 (iteration: new first frame). _v3 (iteration: student speaks instead of instructor). The report shows two concepts and two iterations, not \"four ads.\""
      },
      practice: [
        {
          prompt: "Sort the six PMT ad ideas into concept or iteration, then write three iterations of a winner.",
          fields: ["1) Instructor talking head: 'Everyone here is new'", "2) Same script, filmed at the bike line instead of the classroom", "3) Static: 'Bike and helmet provided'", "4) Same talking head with a new first line: 'Scared you'll drop the bike?'", "5) Review montage from Google reviews", "6) Carousel: what's included", "Three one-element iterations of ad 1 (name each element changed)"],
          rubric: ["1, 3, 5, 6 are concepts; 2 and 4 are iterations of 1", "Each iteration changes exactly one element", "Iterations are labeled v2, v3, v4", "No invented reviews or claims"]
        }
      ],
      today: { task: "Rename PMT's current ads (or planned ads) with the naming pattern and mark each one concept or iteration.", output: "PMT ad list relabeled with concept/iteration tags", minutes: 15, suggested: false },
      check: [
        { q: "What's the difference between concept testing and iteration testing?", a: "Concept testing changes the reason to buy (motivation, situation, objection); iteration testing changes how a proven reason is presented (hook, setting, visuals, delivery)." },
        { q: "What should you do before killing a promising angle?", a: "Test it in at least two or three different formats." },
        { q: "After a winner emerges, how do you iterate?", a: "Spin off 3–5 versions that each change one element: hook, first frame, setting, speaker or on-screen text." }
      ]
    },
    {
      id: "meta-25",
      part: "testing",
      title: "Hook rate, hold rate and the testing metrics",
      minutes: 12,
      tags: ["Playbook", "Mentor", "Book", "Platform fact (re-check)"],
      date: "2026-09-17",
      source: [
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "2.9 Measurement (paid KPIs and practitioner rules of thumb)", who: "Research playbook" },
        { doc: "Ultimate Social Media Workbook", section: "Module 12: Metrics that matter", who: "Workbook" },
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "Benchmarks Cam gave (9/17)", who: "Cam, 9/17/26" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "02 Principle 6: Real winners earn both engagement and conversions", who: "ZDub field guide" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 9 (hook rate benchmark); Ch 15 — How to test on small local budgets", who: "Book curriculum" },
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Section 17: What Counts as a Winning Ad", who: "King Kong team" }
      ],
      alsoIn: ["AI Playbook Part 6 (file not yet added)", "Social Workbook Mod 12 — Metrics that matter", "Copywriting tab — Hooks & the first 3 seconds (how to write the hook)"],
      idea: `Judge ads by **rates**, not totals. Each stage of attention has its own number.

- **Attention: hook rate = 3-second views ÷ impressions.** Did the opening stop the thumb? Watch CPM here too.
- **Interest: hold rate = ThruPlays ÷ 3-second views.** Of the people who stopped, how many kept watching? Plus link click-through rate (CTR).
- **Action:** cost per lead, cost per qualified lead, cost per booked customer (and ROAS for e-commerce).

**Rules of thumb (practitioner, not official):** hook rate around **25–30%+** and hold rate around **10–15%+** are solid. Below that, fix the first frame (low hook) or the middle of the video (low hold). The Mastery Guide cites vendor benchmarks of about 25–35% hook rate as healthy and **below 20% means rewrite the opening.**

**Cam's benchmarks (9/17):**

- **CTR:** over 3% is "pretty phenomenal"; about 1.5% is "acceptable." If CTR halves, cost per lead doubles at the same CPM.
- **CPM** (cost per 1,000 views): for follower or lead-form optimization, "well below $100... usually below $20." His tight-radius mold campaign was about $53. Only worry if it spikes; a rising CPM while results hold is fine.
- **Learning phase:** 50 results in 7 days.

**Early signals vs. decisions (Mastery Guide Ch 15).** Hook rate, CTR and cost per click tell you quickly which creative gets attention. But decide what to scale on **cost per qualified lead and booked customers.**

**Read them together (Andromeda Principle 6).** Meta increasingly rewards ads that do well on both engagement and conversions. Use the table below to decide the next move.

**A counterweight (King Kong).** King Kong defines a winner purely as an ad Meta chooses to spend significant budget on, not by CTR, CPC, CPM or hook rate: "The platform sees signals you don't see." Use rates to diagnose *why* an ad is winning or losing, and spend plus real outcomes to decide *whether* it is.`,
      keyPoints: [
        "Hook rate = 3-sec views ÷ impressions (~25–30%+ solid; <20% rewrite the opening)",
        "Hold rate = ThruPlays ÷ 3-sec views (~10–15%+ solid)",
        "CTR: ~1.5% acceptable, 3%+ phenomenal; CTR halves → CPL doubles at same CPM (Cam)",
        "Early signals pick creative; cost per qualified lead and bookings make decisions",
        "Winners do well on both engagement and conversions"
      ],
      why: "These are the numbers Zach will read every week in PMT's account. Knowing which number points to which fix (first frame, middle, offer, or nothing) turns a dashboard into a to-do list.",
      table: {
        head: ["Pattern", "What it usually means", "Next move"],
        rows: [
          ["High engagement, low conversion", "The hook works, but the offer, context or CTA doesn't land", "Keep the hook. Tighten the middle and CTA; make the offer clearer"],
          ["Low engagement, solid conversion", "The message is right, but too few people stop to see it", "Keep the message. Test new hooks, first frames, on-screen text"],
          ["High on both", "A real winner", "Scale it, iterate on it, build new concepts from the same reason to buy"],
          ["Low on both, little spend", "Meta didn't see a match", "Check the five questions; re-test the angle in a different format once, then move on"]
        ]
      },
      example: {
        title: "Reading one PMT video",
        body: "10,000 impressions, 3,200 three-second views, 300 ThruPlays, 90 link clicks, 2 leads on $120. Hook rate 32% (good), hold rate 9.4% (weak middle), CTR 0.9% (below acceptable), CPL $60. Pattern: high engagement, low conversion. Keep the opening; cut the slow middle, state the offer and CTA earlier."
      },
      practice: [
        {
          prompt: "Read these four PMT ads. For each, calculate hook rate, hold rate, CTR and CPL, name the pattern and the next move.\n\nAd A: 10,000 impressions · 3,200 3-sec views · 300 ThruPlays · 90 clicks · 2 leads · $120\nAd B: 8,000 impressions · 1,200 3-sec views · 216 ThruPlays · 136 clicks · 8 leads · $96\nAd C: 12,000 impressions · 3,600 3-sec views · 540 ThruPlays · 240 clicks · 10 leads · $144\nAd D: 900 impressions · 90 3-sec views · 9 ThruPlays · 4 clicks · 0 leads · $11",
          fields: ["Ad A: rates + pattern + next move", "Ad B: rates + pattern + next move", "Ad C: rates + pattern + next move", "Ad D: rates + pattern + next move", "Which ad do you put more budget behind, and what decides it?"],
          rubric: ["Rates calculated correctly", "Each ad matched to one of the four patterns", "Next move matches the table", "Scaling decision rests on cost per lead/booking and spend, not hook rate alone"],
          model: "A: hook 32%, hold 9.4%, CTR 0.9%, CPL $60 → high engagement, low conversion: keep hook, fix middle/CTA. B: hook 15%, hold 18%, CTR 1.7%, CPL $12 → low engagement, solid conversion: keep message, new hooks/first frames. C: hook 30%, hold 15%, CTR 2.0%, CPL $14.40 → high on both: scale and iterate. D: hook 10%, little spend, no leads → Meta didn't see a match: check the five questions, re-test once in another format. Budget behind C (and B's message with new hooks), confirmed by which leads actually book."
        }
      ],
      today: { task: "Add hook rate, hold rate, CTR, CPM and cost per lead as saved columns in PMT's Ads Manager view, then fill the first row of the Social Workbook 12A monthly scorecard for PMT.", output: "A saved PMT column preset + first scorecard row", minutes: 25, suggested: false },
      check: [
        { q: "A paid video ad has a hook rate of 14%. Using the vendor benchmarks, what's the best conclusion? (Workbook 9.11)", a: "The opening probably needs a rewrite. ~25–35% is healthy; below 20% means rework the hook. Treat these as rough guides." },
        { q: "How are hook rate and hold rate calculated?", a: "Hook rate = 3-second views ÷ impressions. Hold rate = ThruPlays ÷ 3-second views." },
        { q: "What did Cam say happens to cost per lead if CTR halves?", a: "At the same CPM, cost per lead doubles." }
      ]
    },
    {
      id: "meta-26",
      part: "testing",
      title: "When to judge an ad, and why you never force spend",
      minutes: 9,
      tags: ["Mentor", "Playbook"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "9. Testing and judging ads; Trust Meta, don't force spend; Budget and the auction", who: "Paul Snowman, 10/19/26; Logan McKinney, 9/25/26; Jason Maulucci, 8/18/26" },
        { doc: "9 New Calls Study Guide (11/5/26)", section: "Research and judgment", who: "Tayt Shelman, 10/30/26" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Meta Ads for Local Businesses: Creative testing step 4", who: "Research playbook" },
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Section 31: The Most Common Mistakes", who: "King Kong team" }
      ],
      idea: `Most bad decisions in Ads Manager are made too early.

**Spend before judging (Paul, 10/19):** judge each ad only after it has spent **3–5× your target cost per lead.** With a $20 target, that's $60–100 per ad before you call it. The Social Playbook's version: judge at about 7 days or after at least 2–3× target CPL per ad. Jason (8/18): decide the test budget *before* you open Ads Manager, e.g. spend 5× your target customer acquisition cost before judging, and respect the sales cycle (on a 30-day cycle, today's leads aren't cash for 30 days).

**Don't shut it off early.** "People usually shut ads off before they get a result" (Tayt, 10/30). King Kong: killing winners after 2–3 bad days is one of the most expensive mistakes; look at a 7-day rolling view, because most "dead" ads come back by day 5–6.

**Let Meta pick (Paul, 10/19).** Run a bunch of different things. Paul said Meta's system uses something like 50,000 rolling data points per person. **If a campaign is producing leads or customers, generally don't change anything.** Paul has been burned by over-optimizing.

**Never force spend (Logan, 9/25).** Meta spreads spend roughly evenly at first, then pushes it to whatever works. Logan's statics were booking calls, but Meta wasn't spending on a face-cam video he loved, so he gave it its own budget. Result: $108 spent, one call. "Think test." When one creative wins it tends to carry the account; in his words, 2 of 10 ads end up "flexing on the rest."

**Expect to lose most tests.** Paul's hit rate is about 8%; he guessed local agencies land around 30–50%. Analyze why the losers lost, so the next round is smarter.

**Advanced notes from Paul:** video typically works at top of funnel and statics convert at bottom; the buyer path on Meta isn't linear. Statics running at a frequency above about 1.15–1.2 suggest bottom-of-funnel behavior.`,
      keyPoints: [
        "Judge an ad after it spends 3–5× target CPL (Paul), or ~7 days",
        "Set the test budget before opening Ads Manager (Jason)",
        "If it's producing, don't touch it; over-optimizing burns accounts",
        "Never give your favorite ad its own budget; Meta's spend choice is the signal",
        "Hit rates are low (Paul ~8%); learn from every loser"
      ],
      why: "PMT's budget is small, so every early kill or forced budget wastes a real share of it. These rules let Zach act with confidence instead of reacting to day-two noise.",
      example: {
        title: "Logan's favorite-ad mistake, replayed for PMT",
        before: "Meta pours spend into a plain static (\"Bike and helmet provided\") and ignores Zach's beautifully edited sunset ride video. Zach moves the video into its own ad set with $15/day.",
        after: "Zach leaves Meta's choice alone, logs \"first-timers respond to the no-gear objection,\" and makes three new static iterations of the winner. The video gets re-cut with an objection opener for the next concept test."
      },
      practice: [
        {
          prompt: "Target CPL is $20. Decide for each ad: keep running, judge now (and how), or leave alone.",
          fields: ["Ad 1: day 2, spent $30, 0 leads", "Ad 2: day 6, spent $95, 0 leads, Meta gave it little budget", "Ad 3: day 5, spent $70, 5 leads at $14, booking", "Ad 4: your favorite, day 7, Meta has spent $8 on it", "What will you write in the testing log?"],
          rubric: ["Ad 1 keeps running (only 1.5× target CPL spent)", "Ad 2 can be judged (4.75×) as a likely loser", "Ad 3 is left alone", "Ad 4 does not get its own budget; it's re-tested in another format if the angle matters"]
        }
      ],
      today: { task: "Write PMT's judging rule in the SOP: spend threshold per ad (3–5× your target CPL in dollars), minimum days, and the 'never force spend' rule. Then check PMT's live ads against it.", output: "A judging rule in PMT's SOP + any ads flagged", minutes: 15, suggested: false },
      check: [
        { q: "When does Paul judge an ad?", a: "Only after it has spent 3–5× your target CPL." },
        { q: "What happened when Logan gave his favorite video its own budget?", a: "$108 spent, one call, while his statics were booking. Meta's spend choice was right; 'think test.'" },
        { q: "What does Tayt say about shutting ads off?", a: "'People usually shut ads off before they get a result.'" }
      ]
    },
    {
      id: "meta-27",
      part: "testing",
      title: "Diagnose before you delete: lag, account-wide slowdown or fatigue",
      minutes: 9,
      tags: ["Mentor", "Playbook", "Book"],
      date: "2026-10-29",
      source: [
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Section 29: When an Ad Dies; Section 28: When an Ad Wins", who: "King Kong team" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — When an ad wins, and when it dies", who: "Book curriculum" },
        { doc: "ZDub Guide 02 V2", section: "Fatigue and refreshing winners", who: "Logan McKinney, 9/25/26" },
        { doc: "9 New Calls Study Guide (11/5/26)", section: "Research and judgment", who: "Cam, 10/29/26; Clayton Bell, 8/5/26" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Meta Ads for Local Businesses: Creative testing step 6", who: "Research playbook" }
      ],
      idea: `A winning ad slows down. Before you kill it, ask three questions (King Kong; Mastery Guide Ch 18):

1. **Is it attribution lag?** Results often show up days after spend, because Meta credits a purchase or booking to the day it happens, not the day the ad was seen. **Fix: wait a few more days** (King Kong says 3).
2. **Is it account-wide?** If every ad slowed at once, the problem is upstream: seasonality, rising costs, the landing page, or follow-up. **Fix the upstream problem, not the ad.**
3. **Is it fatigue?** Has frequency climbed high? King Kong flags above 3.0; the Social Playbook says above about 3–4 per week for local audiences, with a falling hook rate and rising CPL, and suggests refreshing every 2–4 weeks. **Fix: don't just kill it.** Make fresh variants of the winning idea so the surface changes but the DNA stays.

**How the mentors spot fatigue.**

- **Logan (9/25):** winners usually last one to three months; while they work, hands off. Watch your *real outcome* weekly. Bookings of 5, 5, 7, then 2, 1, 0 means something's wrong: burnout, you've reached your market, or stale data.
- **Stale data kills ads too.** Logan's best static showed May numbers, so he retired it in September and relaunched the same template with August numbers. Then make spin-offs: a different person, a different setting.
- **Cam (10/29):** spot fatigue in a prospect's account by checking cost per lead week by week. He saw $25 rise to $50 under another agency.

**When leads come in but don't close (Clayton, 8/5):** the problem may be the client's sales process, not the ad. Turn on call recording in their CRM and review the calls.

**When an ad wins** (Mastery Guide): keep it running, duplicate it into scaling if you have a scaling campaign, make keyword and avatar variants, and feed it to the variant engine (with human fact-checking).`,
      keyPoints: [
        "Three checks before killing: attribution lag, account-wide slowdown, fatigue",
        "Lag → wait a few days; account-wide → fix upstream; fatigue → fresh variants of the same idea",
        "Fatigue signs: frequency ~3+ (local: 3–4/week), falling hook rate, rising CPL",
        "Track real weekly outcomes per creative (Logan's 7, 2, 1, 0)",
        "Refresh stale numbers and faces before rebuilding from scratch"
      ],
      why: "Killing a fatigued winner throws away PMT's best-proven reason to buy. A two-minute diagnosis decides whether to wait, fix the funnel, or refresh the creative.",
      example: {
        title: "Three slowdowns, three different fixes",
        body: "Illustrative: Monday, PMT's top ad shows 0 leads for two days after a great week; frequency 1.6, other ads fine → lag, wait. Week of Thanksgiving: every ad slows → account-wide/seasonal, leave creative alone. Month 3: frequency 4.2/week, hook rate down from 31% to 18%, CPL from $16 to $29 → fatigue: reshoot the same 'everyone's new' idea with a different student and setting."
      },
      practice: [
        {
          prompt: "Diagnose each scenario (lag, account-wide, fatigue, or a sales problem) and write the fix.",
          fields: ["A: Best ad's CPL went $15 → $31 over 3 weeks; frequency 4.5/week; hook rate falling", "B: All four ads dropped the same week; landing page was edited that Monday", "C: Ad had 2 slow days after launch week; frequency 1.4", "D: Leads steady at $18, but bookings fell from 6 to 1 a week"],
          rubric: ["A = fatigue → new variants of the winning idea", "B = account-wide → check/fix the page, not the ads", "C = likely lag → wait a few days", "D = after-the-click problem → follow-up/sales process (review calls)"]
        }
      ],
      today: { task: "Start the weekly fatigue log (tracker on this tab) for PMT: one row per live creative with leads/bookings, CPL and frequency for the last week.", output: "First week of PMT's fatigue log filled in", minutes: 20, suggested: false },
      check: [
        { q: "A winning ad has slowed down. What should you check before killing it? (Workbook 18.12)", a: "Attribution lag, account-wide slowdowns, and ad fatigue. If it's fatigue, make fresh variants of the winning idea rather than abandoning it." },
        { q: "What weekly pattern told Logan something was wrong?", a: "Bookings of 5, 5, 7, then 2, 1, 0: burnout, market reached, or stale data." },
        { q: "How did Cam spot fatigue in a prospect's account?", a: "By checking cost per lead week by week; it had risen from $25 to $50 under another agency." }
      ]
    },
    {
      id: "meta-28",
      part: "testing",
      title: "Test on a small budget: big swings, a hypothesis and a log",
      minutes: 10,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 15 — The testing tradition; How to test on small local budgets", who: "Claude Hopkins (Scientific Advertising), John Caples (Tested Advertising Methods), David Ogilvy, King Kong, Alex Hormozi" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 15 — Recall 15.1, 15.2, 15.9; Drill D15.4 + Answer Key", who: "Workbook" },
        { doc: "Ultimate Social Media Workbook", section: "Module 11: The testing loop; Exercises 11A and 11C", who: "Workbook (Brendan Kane and Dara Denney)" }
      ],
      idea: `Advertising became a profession when people started keeping score. Claude Hopkins keyed every mail-order coupon so he knew which ad, headline and publication produced each sale: "Almost any questions can be answered, cheaply, quickly and finally, by a test campaign." "Guesswork is very expensive." John Caples added the rules: **test headlines first** (they swing results most), small changes can make big differences, don't trust opinions (yours or the client's), and test one major element at a time, keeping the winner as the **control** to beat.

**Local budgets can't afford big-brand testing.** You won't reach statistical significance on two shades of blue at $35/day. So, from Ch 15:

- **Test big differences:** different concepts, hooks, offers and formats. Meta groups near-identical ads anyway.
- **Use early signals for creative, real outcomes for decisions.** Hook rate, CTR and cost per click show quickly which creative gets attention; decide what to scale on cost per qualified lead and booked customers.
- **Give tests enough time and data.** Don't judge after one or two days; look at roughly a week unless results are extreme.
- **Keep a testing log:** date, hypothesis, what changed, result, decision. Over a year it becomes the client's most valuable asset.
- **Always have tests running:** at least three live at any time.
- **Use organic as a free testing lab.** Hooks and formats that do unusually well organically are strong ad candidates.
- **Scale in Hormozi's order: more, better, new.**

**The testing loop (Kane and Denney, Social Workbook Mod 11):** write a hypothesis ("busy parents care more about time than price"); build 3–5 distinct concepts a month; run each about 7 days without big edits; keep winners, kill losers; make new versions of winners; watch for fatigue.

**The hypothesis format (Workbook D15.4):** "If we change [one big thing] for [audience], then [metric] will improve because [reason]." Then name the early signal you'll watch and the outcome that decides it.`,
      keyPoints: [
        "Hopkins: test campaigns answer questions cheaply; guesswork is expensive",
        "Caples: test headlines first, one major element at a time, beat the control",
        "Small budgets: test big differences, judge on ~a week of data",
        "Early signals pick creative; qualified leads and bookings decide",
        "Keep a log and always have 3 tests running"
      ],
      why: "Testing discipline is what turns PMT's ad account into knowledge Zach can reuse for every training school and trade after it, and the log is proof of ZDub's process when he pitches.",
      example: {
        title: "A PMT hypothesis, Workbook style",
        body: "\"If we lead with a customer's first-ride story instead of a class-dates graphic for cold audiences, then hook rate and cost per qualified lead will improve, because cold audiences are problem aware and respond to identity and story. Early signal: hook rate. Decision: cost per qualified lead and booking rate after about a week.\""
      },
      practice: [
        {
          prompt: "Workbook Drill D15.4: write five test hypotheses for PMT in the format, each with its early signal and deciding outcome.",
          fields: ["Hypothesis 1 (+ early signal / deciding outcome)", "Hypothesis 2", "Hypothesis 3", "Hypothesis 4", "Hypothesis 5", "Which three will be live first?"],
          rubric: ["Each changes one BIG thing (concept, offer, format, persona), not a tiny tweak", "Each names the audience and the reason", "Early signal and deciding outcome are both named", "Deciding outcome is a business result (qualified leads, bookings)"]
        }
      ],
      today: { task: "Open the Testing log tracker on this tab and enter PMT's first three live (or planned) tests with hypotheses.", output: "Three rows in PMT's testing log", minutes: 20, suggested: false },
      check: [
        { q: "According to Caples, which element should you test first? (Workbook 15.2)", a: "Headlines. They swing results the most. Test one major element at a time and keep the winner as the control." },
        { q: "On a small local budget, which testing approach does the guide recommend? (Workbook 15.9)", a: "Test big differences and judge on about a week of data." },
        { q: "How did Claude Hopkins know which of his ads worked? (Workbook 15.1)", a: "Keyed coupons that showed which ad produced each sale." }
      ]
    },
    {
      id: "meta-29",
      part: "measure",
      title: "The money metrics behind every ad account",
      minutes: 11,
      tags: ["Book", "Playbook", "Mentor"],
      date: "2026-10-07",
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 15 — The money metrics", who: "King Kong playbook, Allan Dib (Lean Marketing), Alex Hormozi ($100M Leads)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 15 — Recall 15.5, 15.6; Drill D15.1 + Answer Key", who: "Workbook" },
        { doc: "King Kong — The $7.8B Meta Ads Playbook", section: "Section 30: Track the Metric That Actually Matters", who: "King Kong team" },
        { doc: "ZDub Guide 02 V2", section: "12. Talking about ad spend with prospects (break-even ROAS)", who: "Noah, 10/7/26" }
      ],
      idea: `Ads Manager will happily show you impressions, reach and its own "return on ad spend." King Kong's sharpest warning: **Meta's dashboard shows you a number, your bank account shows you a different number, and if you optimize for the dashboard you can optimize yourself into bankruptcy.** These are the numbers that decide whether ads work:

- **CPL / cost per qualified lead** = ad spend ÷ leads (or qualified leads). An early efficiency signal; qualified matters more than raw.
- **CAC** (customer acquisition cost) = total acquisition cost ÷ new customers. What it really costs to win one.
- **LTV** (lifetime value) = profit from a customer over the whole relationship. Allan Dib says calculate it on **profit, not revenue.**
- **LTV : CAC.** Hormozi suggests at least **3:1** (lifetime gross profit to CAC).
- **MER (blended)** = total revenue ÷ total marketing spend, across all channels. The honest view of whether marketing pays.
- **aMER / new-customer MER**: the same, counting only new customers. Shows whether ads grow the business or re-buy existing customers.
- **Net cash flow (30 days)**: money in minus all costs. What pays rent.
- **Max profitable CAC**: the most you can pay for a customer and still hit profit targets. Your real ceiling.

**Break-even ROAS (Noah, 10/7):** profit margin sets it. A 20% margin needs 5× return just to break even.

**Scaling reality (King Kong).** As you spend more, platform ROAS usually falls because you're buying more expensive customers at the margin, but total profit can still rise. Going from $10k/month at 15× to $100k/month at 5× took revenue from $150k to $500k. Judge by cash, not percentages.

**Numbers Day.** King Kong recommends a recurring three-hour block each month where the owner personally reviews the P&L, ad spend and real results. Do it with each client.

**Always state which costs you included.** CAC on ad spend alone and CAC including ZDub's fee are different numbers, and both matter.`,
      keyPoints: [
        "Cost per qualified lead > raw CPL; CAC = what a customer really costs",
        "LTV on profit; aim for LTV:CAC of at least 3:1 (Hormozi)",
        "Blended MER and new-customer MER beat platform ROAS",
        "Break-even ROAS = 1 ÷ margin (20% margin → 5×) (Noah)",
        "State whether CAC includes the agency fee"
      ],
      why: "PMT and every future client will ask \"is this working?\" in dollars. These metrics let Zach answer in the owner's language and spot when good-looking dashboards hide a losing account.",
      example: {
        title: "Workbook D15.1 (a hypothetical training school)",
        body: "$2,400 ad spend, 160 leads, 100 qualified, 32 students at $400 (gross profit ~$250 each); 25% later buy a $300 follow-up course ($200 gross profit). Month revenue $16,000; total marketing $4,000 (ads + ZDub). CPL $15 · cost per qualified lead $24 · CAC $75 on ad spend ($125 incl. fee) · lifetime gross profit $250 + 25% × $200 = $300 · LTV:CAC 4:1 on ad spend (2.4:1 incl. fee) · MER 4.0. Healthy on ad spend, under 3:1 with the fee, so the next lever is follow-up course uptake (LTV) or conversion (CAC)."
      },
      practice: [
        {
          prompt: "Do Workbook Drill D15.1 by hand without looking at the example, then do it again with PMT's real (or best-estimate) numbers.",
          fields: ["D15.1: CPL, cost per qualified lead, CAC (ads only and incl. fee)", "D15.1: lifetime gross profit, LTV:CAC, MER, verdict", "PMT: ad spend, leads, qualified leads, students last month", "PMT: CAC, estimated LTV (on profit), LTV:CAC", "PMT: which number you need from Chris to finish this"],
          rubric: ["Math correct and shown", "CAC stated both with and without the fee", "LTV based on profit, not revenue", "Verdict compares to 3:1 and names the next lever"]
        }
      ],
      today: { task: "Ask Chris for PMT's course price, rough gross profit per student and the share who take a second course, and put them in a sheet that calculates CAC, LTV and LTV:CAC from Meta's numbers.", output: "A PMT money-metrics sheet with real inputs", minutes: 30, suggested: false },
      check: [
        { q: "MER (marketing efficiency ratio) is: (Workbook 15.5)", a: "Total revenue ÷ total marketing spend, across all channels. New-customer MER (aMER) counts only new customers." },
        { q: "Hormozi suggests aiming for an LTV:CAC ratio of at least: (Workbook 15.6)", a: "3:1. Lifetime gross profit should be at least three times what it costs to acquire the customer." },
        { q: "What break-even ROAS does a 20% profit margin need?", a: "5× (Noah, 10/7)." }
      ]
    },
    {
      id: "meta-30",
      part: "measure",
      title: "Find the leak: walk the funnel before touching Ads Manager",
      minutes: 9,
      tags: ["Book", "Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 15 — Find the leak: funnel math; ZDub Application: improving funnel math", who: "Allan Dib (Lean Marketing)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 15 — Recall 15.7, 15.8, 15.11; Drill D15.2 + Answer Key; Ch 18 Client Lab L18 answer", who: "Workbook" },
        { doc: "9 New Calls Study Guide (11/5/26)", section: "Client lead handling; Research and judgment", who: "Tayt Shelman, 11/4/26; Clayton Bell, 8/5/26" }
      ],
      alsoIn: ["Funnels tab — Speed to lead & follow-up (owner)"],
      idea: `When a client says "the ads aren't working," the leak is often after the click. Allan Dib's method: draw the funnel with real numbers and walk it top to bottom, asking at each step, *is this the leak?*

1. **Impressions → clicks:** low hook rate or CTR means the creative or audience fit is weak.
2. **Clicks → leads:** low conversion means the landing page or form breaks the promise or adds friction.
3. **Leads → conversations:** a big drop here usually means slow follow-up. Speed to lead matters enormously (taught in the Funnels tab).
4. **Conversations → customers:** the sales process, price or offer needs work.
5. **Customers → repeat and referrals:** retention and experience.

**Fix it twice (Dib).** Fix the immediate symptom *and* the system that caused it. If leads went cold because nobody called back: call them today (symptom), and set up an instant text and booking link so it can't happen again (system).

**Why this is ZDub's real job (Mastery Guide).** Doubling ad spend doubles cost. Improving each of four funnel steps by 20% compounds: 1.2 × 1.2 × 1.2 × 1.2 ≈ 2.07, so you roughly **double customers at the same spend.** That's how Zach explains ZDub as a partner, not "the ad guy."

**Mentor evidence.** An instant text to new leads took one of Tayt's garage door clients from **12% to 26% lead-to-booked** (11/4). And when a client's leads don't convert, Clayton (8/5) looks at the sales process: turn on call recording in their CRM and review the calls.

The Workbook's rule of thumb: **if the funnel leaks after the click, the fix is on the page or in the follow-up, not in Ads Manager.**`,
      keyPoints: [
        "Walk impressions → clicks → leads → conversations → customers; fix the biggest leak first",
        "Big drop from leads to conversations = slow follow-up",
        "Fix it twice: the symptom today, the system so it can't recur",
        "20% better at four steps ≈ 2× customers at the same spend",
        "Leaks after the click are fixed on the page or in follow-up, not in Ads Manager"
      ],
      why: "PMT's results depend on how fast leads get a text and a call as much as on the ads. Walking the funnel keeps Zach from 'fixing' good ads when the real leak is follow-up.",
      table: {
        head: ["Step", "If this drops, look at"],
        rows: [
          ["Impressions → clicks", "Creative / hook / audience fit"],
          ["Clicks → leads", "Landing page or form (promise, friction)"],
          ["Leads → conversations", "Speed to lead and follow-up"],
          ["Conversations → customers", "Sales process, price, offer"],
          ["Customers → repeat/referral", "Retention and experience"]
        ]
      },
      example: {
        title: "Workbook D15.2, Client B",
        body: "60,000 impressions → 900 clicks → 90 leads → 27 conversations → 13 customers. Leads → conversations is only 30% (27 ÷ 90): follow-up is the leak. Fix it twice: call the backlog today, then install an instant text, a 5-minute call standard and a nurture sequence. Note Client B closes about 48% once they talk to people, so fixing contact rate could more than double customers without more ad spend."
      },
      practice: [
        {
          prompt: "Workbook Drill D15.2: find the biggest leak for Client A and write the fix-it-twice plan. Then draw PMT's funnel.",
          fields: ["Client A: 80,000 impressions → 1,600 clicks → 40 leads → 30 conversations → 12 customers. Biggest leak + why", "Client A: fix-it-twice plan (symptom + system)", "PMT funnel last 30 days (fill in what you know)", "PMT's biggest leak and your fix-it-twice plan"],
          rubric: ["Client A leak = clicks → leads (2.5%), a page/form problem", "Plan has both a same-day symptom fix and a system fix", "PMT funnel uses real numbers or marks unknowns", "Leak diagnosis points to the right fix area"],
          model: "Client A: clicks → leads is only 2.5% (40 ÷ 1,600), so the landing page or form is the leak. Fix the page today (match the ad's promise, one CTA, shorter form) and build a system: a message-match check on every new ad."
        }
      ],
      today: { task: "Get last month's PMT numbers (impressions, clicks, leads, leads contacted, students) and draw the five-step funnel. Circle the biggest leak and write the fix-it-twice plan.", output: "PMT's funnel with the leak circled and a 2-part fix", minutes: 30, suggested: false },
      check: [
        { q: "In the funnel, leads are plentiful but few turn into conversations. The most likely leak is: (Workbook 15.7)", a: "Slow follow-up (speed to lead)." },
        { q: "If a client improves each of four funnel steps by 20% at the same ad spend, customers roughly: (Workbook 15.8)", a: "Double (1.2 × 1.2 × 1.2 × 1.2 ≈ 2.07)." },
        { q: "What is Dib's rule 'fix it twice'? (Workbook 15.11)", a: "Fix the immediate symptom and the system that caused it, e.g. call cold leads today and set up an instant text and booking link." }
      ]
    },
    {
      id: "meta-31",
      part: "measure",
      title: "Prove ROI: match the leads to paying customers",
      minutes: 9,
      tags: ["Mentor", "Book", "Playbook"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 02 V2 — Meta Ads Setup and Media Buying", section: "10. Tracking results and ROI; Not covered in the calls", who: "Cam, 10/15/26" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 15 — Measurement infrastructure for local clients; Attribution caution; Ch 18 — Tracking", who: "Book curriculum (Olivier Blanchard tiers)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 15 — Recall 15.12; Client Lab L15", who: "Workbook" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Meta Ads for Local Businesses: Lead destinations (conversion leads via CRM + CAPI)", who: "Research playbook" }
      ],
      alsoIn: ["Agency Ops tab — monthly reporting", "Funnels tab — CRM pipelines and speed to lead"],
      idea: `Meta reports leads. Clients pay for customers. Your job is to connect the two.

**Cam's method (10/15):**

- **Download the leads CSV** from the Meta form and **compare emails and phone numbers against the client's paying customers.** That match is your real result.
- **Set the expectation on the sales call:** you'll need access to who actually paid.
- **Promise only what you control.** Make the promise something fully in your hands (e.g. a number of leads in two weeks), not closed customers. The client controls follow-up and closing.

**The measurement setup to build in the first two weeks** (Mastery Guide Ch 15, seven parts):

1. Tracking links (UTMs) on every link you control.
2. Meta Pixel and Conversions API, so the platform sees leads and bookings.
3. A call tracking number, or at least a "where did you hear about us?" question for phone leads.
4. A required source field on every form and booking.
5. A simple CRM or pipeline with stages (lead → contacted → booked → won → lost), even a spreadsheet at first.
6. A baseline: the last 3 to 12 months of leads, customers, revenue and marketing spend, so you can prove change.
7. A one-page monthly report in Blanchard's tiers: business results first, then funnel metrics, then audience metrics, plus "what we learned" and "what we're testing next."

**Feed results back to Meta (once the pipe exists).** With Pixel + Conversions API sending real pipeline stages (qualified, booked, won), Meta can optimize for customers, not just form fills. Note Guide 02's gap: pixel and Conversions API setup isn't taught in the mentor calls, so lean on Meta's own help docs for the mechanics, and remember Paul's volume caution on qualified-lead optimization.

**Reconcile every month.** Platform-reported results include some people who would have bought anyway. Whatever attribution setting you use, compare Meta's numbers with the client's real bookings.`,
      keyPoints: [
        "Match the Meta leads CSV (emails, phones) to the client's paying customers",
        "Ask for customer data on the sales call, not after",
        "Promise what you control (leads), not what the client controls (closes)",
        "Seven-part setup: UTMs, Pixel+CAPI, call tracking, source field, CRM stages, baseline, tiered report",
        "Reconcile Meta's numbers with real bookings monthly"
      ],
      why: "The leads-to-customers match is the raw material for ZDub's first case study and the best protection on a retainer. Without it, PMT's results are just Meta's opinion.",
      example: {
        title: "PMT's first ROI match",
        body: "Illustrative numbers. End of month: Zach exports PMT's leads CSV (41 leads) and Chris exports registrations (19 students). Matching on phone and email: 11 students came from Meta leads. Ad spend $1,050 → cost per student from ads ≈ $95. That one line goes at the top of the monthly report, above impressions and CTR."
      },
      practice: [
        {
          prompt: "Workbook Client Lab L15 (steps 1–2) for PMT: audit the seven-part measurement setup and plan the match.",
          fields: ["UTMs: in place? (Y/N + fix)", "Pixel + Conversions API: in place? (Y/N + fix)", "Call tracking or 'how did you hear about us?'", "Required source field on forms/bookings", "CRM/pipeline stages", "Baseline: what 3–12 months of data you can get from Chris", "Monthly report headline format", "Your promise to PMT (something you control)"],
          rubric: ["Every one of the seven parts has a status and a next step", "The leads-CSV-to-customer match is planned with specific fields (phone, email)", "The promise is about leads or activity you control, not closes", "Report leads with business results"]
        }
      ],
      today: { task: "Export PMT's leads CSV (or set a calendar reminder for the first export) and ask Chris for this month's registration list so you can run the first match.", output: "Leads CSV + registration list request (or first match done)", minutes: 20, suggested: false },
      check: [
        { q: "How does Cam prove ROI for a lead campaign?", a: "Download the leads CSV and compare emails and phone numbers against the client's paying customers." },
        { q: "Why promise leads rather than closed customers?", a: "Make the promise something fully in your control; the client controls follow-up and closing." },
        { q: "List the seven parts of measurement infrastructure to set up in the first two weeks. (Workbook 15.12)", a: "UTMs on every link; Meta Pixel and Conversions API; call tracking (or 'where did you hear about us?'); a required source field on forms and bookings; a CRM or pipeline with stages; a baseline of past results; a one-page monthly report in Blanchard's tiers." }
      ]
    },
    {
      id: "meta-32",
      part: "measure",
      title: "Ad account setup checklist: run it before every PMT launch",
      minutes: 10,
      tags: ["Playbook", "Book", "Platform fact (re-check)"],
      source: [
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "05 Before Every Launch: The one-page checklist", who: "ZDub field guide" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18 — The local launch checklist", who: "Book curriculum" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 18 — Client Lab L18 + Answer Key", who: "Workbook" },
        { doc: "ZDub Guide 02 V2", section: "Applied to ZDub Media: default build for a new local client", who: "Claude's input in the mentor guide (not mentor teaching)" }
      ],
      alsoIn: ["Course Lesson 1.4 — Creating Your Ad Account (file not yet added)", "King Kong Playbook — Section 27: The Launch Checklist"],
      idea: `Everything in this tab collapses into one checklist. Pilots don't skip theirs because they're experienced; they use it because they're experienced.

**Before the account goes live (setup, from Mastery Guide Ch 18 and this tab):**

- Business portfolio set: page, ad account and Instagram attached; ZDub has full access; client card on file.
- Offer and landing page or instant form ready; the message matches the ad.
- Pixel and Conversions API working; a **test lead submitted and received.**
- Speed-to-lead system live (instant text or call; see the Funnels tab).
- Location radius set to the real service area; age minimum set; Advantage+ audience and placements; existing customers excluded.
- Budget sized to the learning-phase math (cost × 50 ÷ 7); no big edits planned for about a week.
- Reporting set: cost per lead, cost per qualified lead, booked customers, CAC, reconciled with the client's records.

**The Andromeda one-page checklist (run before any ad set goes live):**

- **Planning:** one persona defined for this ad set; the reason-to-buy map has at least 3 motivations, 3 situations and 3 objections in customer language; each ad tests a different reason to buy (not reworded copies).
- **Every ad:** who it's relevant to, what situation it addresses, what reason to buy it introduces, what evidence supports it (shown on screen) and what we'll learn (written down) are all answered; the buying situation is clear in the first few seconds; the product and benefit are clear without extra context; the format suits the angle; the name follows Persona_Bucket_Angle_Format_v1.
- **Structure:** CBO campaign with one clear goal; one ad set per persona with broad targeting; several angle ads per ad set.
- **After launch:** note which ads Meta spends on; judge winners on engagement and conversions together; before killing an angle, test it in at least one other format; iterate winners one element at a time; log what you learned by persona.

**The whole Andromeda guide in one line:** give Meta clear context (who the ad is for, what moment it speaks to and why they'd buy), test many distinct reasons inside one persona ad set, and let spend plus engagement and conversions show you the real winners.

(Course Lesson 1.4 on creating the ad account isn't in the library yet; when it's added, fold its account-creation steps into the setup section.)`,
      keyPoints: [
        "Setup: access, offer/form, Pixel + CAPI test lead, speed-to-lead, radius, exclusions, budget math, reporting",
        "Planning: one persona, a 3×3×3 reason-to-buy map, distinct reasons per ad",
        "Every ad: five questions answered, context clear in seconds, named correctly",
        "Structure: CBO, one clear goal, one broad ad set per persona",
        "After launch: watch spend, judge both signals, iterate one element, log by persona"
      ],
      why: "PMT is ZDub's first client and the case study for every one after it. A checklist run every launch is how Zach avoids the small misses (no test lead, wrong radius, no follow-up text) that sink a campaign quietly.",
      example: {
        title: "Workbook L18: what 'done' looks like",
        body: "Every checklist item is ticked with evidence: a screenshot of the test lead arriving, the exclusion list uploaded, the GoHighLevel text firing. After 14 days, a one-page review separates early signals (hook rate, CTR) from outcomes (qualified leads, bookings), diagnoses before deleting, and lists the next round of genuinely different concepts. If the funnel leaks after the click, the fix is on the page or in the follow-up, not in Ads Manager."
      },
      practice: [
        {
          prompt: "Setup section: check each item for PMT's account and write the evidence (or what's missing).",
          fields: ["Portfolio: page, ad account, Instagram attached; ZDub full access; PMT card on file", "Offer + instant form/landing page ready; message matches the ad", "Pixel + Conversions API working; test lead submitted and received", "Speed-to-lead live (instant text/call)", "Radius on the real service area; age minimum; Advantage+ audience and placements", "Past students excluded", "Budget vs. learning-phase math (cost × 50 ÷ 7)", "Reporting set and reconciled with PMT's registrations"],
          rubric: ["Every item has evidence or a named gap", "Test lead actually submitted, not assumed", "Radius justified by where students come from", "Budget math written out"]
        },
        {
          prompt: "Planning + every-ad section: check PMT's next ad set against the Andromeda checklist.",
          fields: ["One persona defined for this ad set (who)", "Reason-to-buy map: 3 motivations, 3 situations, 3 objections (in customer words)", "Each ad tests a different reason to buy (list ad → reason)", "Every ad answers the five questions (any that fail?)", "Buying situation clear in the first few seconds; product and benefit clear", "Format suits the angle", "Names follow Persona_Bucket_Angle_Format_v1"],
          rubric: ["Map uses customer language from real reviews/DMs/calls", "No two ads test the same reason", "Any ad failing a question is cut or fixed", "Copy follows PMT rules"]
        },
        {
          prompt: "Structure + after-launch section: write what you'll set and what you'll check.",
          fields: ["CBO (Advantage+ campaign budget) campaign with one clear goal: which goal?", "One ad set per persona, broad targeting", "Several angle ads per ad set (how many)", "Day 3–7: which ads is Meta spending on?", "Judge on engagement + conversions together (which numbers?)", "Angle to re-test in another format before killing", "Winner iteration plan (one element at a time)", "Persona learning log entry"],
          rubric: ["Goal is explicit and matches the budget", "Ad count fits the budget", "Post-launch checks name real metrics (spend share, hook rate, CPL, bookings)", "Learning logged by persona"]
        }
      ],
      today: { task: "Workbook Client Lab L18: run this full checklist on PMT's next launch, fix every gap, and (with Chris's approval) launch. Put a 14-day review on your calendar.", output: "A completed PMT launch checklist with evidence + a 14-day review date", minutes: 45, suggested: false },
      check: [
        { q: "Name the four sections of the Andromeda one-page checklist.", a: "Planning, Every ad, Structure, After launch." },
        { q: "What setup items must be proven (not assumed) before launch?", a: "A test lead submitted and received through Pixel/CAPI or the form, and the speed-to-lead system firing." },
        { q: "What should the 14-day review separate?", a: "Early signals (hook rate, CTR) from outcomes (qualified leads, bookings); diagnose before deleting and list the next genuinely different concepts." }
      ]
    }
  ]
});
