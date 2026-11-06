HUB.tab({
  id: "organic-social",
  title: "Organic Social & Content",
  icon: "chat",
  tagline: "Posts that pre-sell your calls, build trust and start conversations.",
  intro: `This tab teaches organic content two ways at once: for ZDub's own page and personal brand, and as a service you deliver for clients like PMT. You'll learn where organic fits in the money chain (ads bring eyeballs, organic nurtures, conversations close), how to make a week of posts in under an hour, how each platform ranks content right now, and how to scope, shoot and post content for a client without promising what organic can't deliver.

Mentor teaching (LC organic doc, Logan, Clayton, Cam, Tayt, Jason) comes first. Books and the Social Media Playbook fill in the strategy and the platform facts. Platform facts change fast, so every lesson tagged "Platform fact (re-check)" is a snapshot from late October 2026.`,
  parts: [
    { id: "money", title: "Part 1 · How organic makes money" },
    { id: "own-page", title: "Part 2 · Your own page first" },
    { id: "engine", title: "Part 3 · Make content fast" },
    { id: "strategy", title: "Part 4 · Content strategy for any business" },
    { id: "platforms", title: "Part 5 · Platforms and numbers (re-check often)" },
    { id: "clients", title: "Part 6 · Content for clients" }
  ],
  trackers: [
    { id: "swipe", title: "Swipe file saves", goal: "10+ saves a week per niche (Clayton's floor)", fields: ["Link", "Niche", "Format (tier list, carousel, selfie tip...)", "What made it perform?"] },
    { id: "objection-posts", title: "Objection-to-post log", goal: "One post from every sales call (Cam)", fields: ["Call date / prospect type", "Objection or wrong belief heard", "Post hook that pre-handles it", "Posted? (link)"] },
    { id: "post-log", title: "Post log", goal: "Track what brings you closer to a conversation", fields: ["Date", "Account (ZDub / PMT / other)", "Mode (education or results)", "Format", "Sends / saves / DMs it started"] }
  ],
  lessons: [
    {
      id: "soc-01",
      part: "money",
      title: "Ads bring eyeballs, organic nurtures, conversations close",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-08-25",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "1. The funnel; 2. Two modes", who: "LC document \"How to Never Run Out of Organic Content\"" },
        { doc: "ZDub_Guide_04 Organic Content V2", section: "New in V2: How much organic to sell", who: "Jason Maulucci, Offer Creation call 8/25/26" }
      ],
      alsoIn: ["Getting Clients tab (follower ads + DMs)", "Funnels tab (speed to lead)"],
      idea: `Organic content is not a lottery ticket for going viral. In the LC organic document it is one layer in a three-layer funnel, and each layer has one job:

- **Ads (top) = eyeballs.** Hyper-targeted local reach. You pay to get in front of the right Sacramento homeowners or riders.
- **Organic content (middle) = nurture.** Educate, widen the gap between where they are and where they want to be, build trust and curiosity.
- **Conversation (bottom) = DMs, texts, voice notes,** then a call, then a sale.

Every layer sells the next: the ad sells the click, organic sells the conversation, the conversation sells the meeting, and the meeting sells the service.

That gives you **the only KPI for organic**: *does this piece bring me closer to a conversation, yes or no?* If yes, post it. Not "will it get likes," not "is it pretty." This one question kills a lot of wasted effort (holiday graphics, logo posts, "Happy Monday") and keeps you posting the things that make a prospect DM you.

Two more reasons the doc gives for doing this now: prospects look you up before calls, so content pre-sells you; and as AI commoditizes everything, your face, brand and relationships are the part that can't be automated.

Jason (8/25) adds the money reality. Ads are usually the number one revenue driver because they are trackable and scalable, and clients judge you on cash in a 30-day window. Organic is the nurture that supports ads, a long-term play. In a mature offer he does "as little organic as possible and as much ads as possible." But for your first clients he says do both: "sacrifice pay for skills."

> Organic's job is to move someone one step closer to a conversation. Ads do the reach; you do the talking.`,
      keyPoints: [
        "Ads (eyeballs) → organic (nurture) → conversation (close). Each layer sells the next.",
        "The one organic KPI: does this bring me closer to a conversation? Yes = post it.",
        "Prospects look you up before calls, so content pre-sells you.",
        "Ads usually drive revenue; organic supports them over the long term (Jason).",
        "For first clients, do both organic and paid to build skills (Jason)."
      ],
      why: "ZDub sells organic plus paid. If you know organic's real job, you'll make posts that start conversations for you and PMT instead of chasing vanity views, and you'll set honest expectations with clients.",
      example: {
        title: "PMT: the same week, judged by the one KPI",
        before: "Post 1: \"Happy Veterans Day from PMT!\" graphic with the logo. Post 2: a stock photo of a bike with \"Sign up today.\"",
        after: "Post 1: 20-second selfie from the range: \"The #1 thing that makes first-timers nervous on day one, and why it goes away by lunch.\" Post 2: carousel \"5 things to bring to your first class\" ending \"DM me GEAR and I'll send the checklist.\"",
        body: "The first two posts don't move anyone toward a conversation. The rewrites educate a nervous beginner and give them a reason to message. That's the yes/no test in action."
      },
      table: {
        head: ["Layer", "Job", "Sells the...", "PMT example"],
        rows: [
          ["Ads (top)", "Eyeballs, local reach", "Click", "Beginner-course ad to riders 18+ around the training site"],
          ["Organic (middle)", "Nurture: educate, build trust", "Conversation", "Reels answering 'Do I need my own bike?'"],
          ["Conversation (bottom)", "DMs, texts, voice notes, call", "Meeting / sale", "DM reply that asks if they've ridden before, then sends the booking link"]
        ]
      },
      practice: [
        {
          prompt: "Pull up the last 9 posts on ZDub's page (or PMT's). Run each through the one-KPI test.",
          fields: ["Posts that PASS (bring someone closer to a conversation) and why", "Posts that FAIL and why", "One rewrite of a failing post so it passes"],
          rubric: ["Each verdict is yes/no, not 'kind of'", "The rewrite gives a specific reason to DM, comment or book", "The rewrite educates or shows a result instead of just announcing", "No vanity goal (likes, looking pretty) used as the reason"],
          model: "FAIL: 'New logo reveal!' Nobody is closer to a conversation. REWRITE: 'Sacramento roofers: your ads didn't stop working, they got old. Here's how to tell in 10 seconds. DM me AUDIT and I'll check yours.'"
        }
      ],
      today: { task: "Write the one-KPI question on a sticky note by your screen. Then draft 3 post ideas for ZDub's page that would each make a Sacramento trades owner want to DM you. Write one sentence per idea on why it passes.", output: "3 post ideas + pass reasons in your content doc", minutes: 20, suggested: false },
      check: [
        { q: "What are the three layers of the LC organic funnel and the job of each?", a: "Ads (top) = eyeballs; organic content (middle) = nurture (educate, build trust and curiosity); conversation (bottom) = DMs, texts, voice notes, then a call and a sale." },
        { q: "What is the only KPI for an organic post?", a: "Does this piece bring me closer to a conversation, yes or no? If yes, post it." },
        { q: "What did Jason say about the organic/ads mix?", a: "Ads are usually the main revenue driver (trackable, scalable); organic nurtures. Mature offers: as little organic as possible. First clients: do both, 'sacrifice pay for skills.'" }
      ]
    },
    {
      id: "soc-02",
      part: "money",
      title: "Content is propaganda for your sales calls",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Organic content and personal brand > Cam's content method (p.15); Top takeaways #7", who: "Cam Meunier, Pipeline/follow-up call 10/29/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Follow-up ('hammer down' idea, p.13); Action plan > Content and proof (Claude's suggestion)", who: "Tayt Shelman, 10/30/26" }
      ],
      alsoIn: ["Sales tab (objection handling)", "Copywriting tab (hooks)"],
      idea: `Cam's rule for an agency's own content: its job is to **make sales calls easier, not to go viral.** He calls it propaganda, in the plain sense of the word: content that shifts beliefs in your favor before the prospect ever gets on a call.

**The method (Cam, 10/29):**
1. Record or take notes on your sales calls.
2. Pull out every objection and wrong belief the prospect voiced.
3. Turn each one into a post that corrects it.
4. Future prospects watch those posts and arrive with that belief already handled.

Here are the topics Cam pulled from **one day** of calls. Notice each one is a belief a prospect said out loud:

- Your ads didn't stop working, they got old. (Ad fatigue: if cost per lead doubles, you get half the business for the same spend.)
- A cheaper lead is only a win if it's the same lead.
- Ads aimed only at ready-to-buy people have a ceiling.
- Bad leads are a messaging problem; good content turns the wrong people away.
- Doing it yourself first: you get one real shot.
- You can't outspend an expensive market, but you can out-trust it.
- No funnel can save a bad message.

Why this works so well: you never run out of topics (every call creates new ones), the topics are exactly what your buyers care about, and when a prospect who has watched your posts says "I tried ads and they didn't work," you're not arguing, you're reminding them of something they already agreed with.

It pairs with Tayt's "hammer down" idea (10/30): once someone books, keep short content in front of them so they already know you when the call starts.

The study guide's action plan (written by Claude, not the mentors) turns this into a habit: after each sales call, turn one objection into a post.`,
      keyPoints: [
        "Your own content's job is to make sales calls easier, not to go viral (Cam).",
        "Every objection or wrong belief on a call = a post topic.",
        "Posts pre-handle objections so prospects arrive already convinced.",
        "One day of calls gave Cam seven post topics.",
        "After someone books, keep content in front of them ('hammer down', Tayt)."
      ],
      why: "Zach is about to run a lot of sales calls with Sacramento trades owners. Each call can produce a post that makes the next call shorter and easier, which compounds faster than chasing trends.",
      example: {
        title: "From a roofer's objection to a ZDub post",
        before: "Objection on the call: \"We tried Facebook ads two years ago and only got tire-kickers.\"",
        after: "Post hook: \"Sacramento roofers: bad leads are a messaging problem, not a Facebook problem.\" Body: 3 sections (why vague ads attract price-shoppers / what a qualifying line looks like / one real example of an ad that names the job and the price range). CTA: \"DM me LEADS and I'll look at your last ad.\"",
        body: "The next roofer who has seen this post already believes bad leads can be fixed with the message, so the objection loses its power before the call."
      },
      practice: [
        {
          prompt: "List the objections and wrong beliefs you've heard (sales calls, walk-ins, wholesaling sellers, or the ones in Cam's list if you have none yet). Turn three into posts.",
          fields: ["Objection 1 → post hook + 3 section headings", "Objection 2 → post hook + 3 section headings", "Objection 3 → post hook + 3 section headings"],
          rubric: ["Each post states the belief and corrects it, not just mentions a service", "Hooks speak to a specific audience (e.g. Sacramento trades owners)", "Body teaches something true and checkable", "Each ends with a soft conversation CTA (DM a word, reply)", "No made-up stats or client results"],
          model: "Objection: 'I'll just do it myself.' Hook: 'Doing your own ads first? You get one real shot. Here's how not to waste it.' Sections: 1) Pick one offer, not five. 2) Test 3 creatives, not 1. 3) Call every lead within 5 minutes. CTA: 'DM me SHOT and I'll send my checklist.'"
        }
      ],
      today: { task: "After your next sales call or prospect conversation (or using Cam's list today), turn one objection into a full post using hook + 3 sections + CTA, and log it in the Objection-to-post tracker.", output: "One drafted post + tracker row", minutes: 25, suggested: true },
      check: [
        { q: "What does Cam say the job of your agency's content is?", a: "To make sales calls easier, not to go viral. He calls it propaganda: content that shifts beliefs in your favor." },
        { q: "Where does Cam get his content topics?", a: "From his sales call transcripts: the objections and wrong beliefs prospects voice become posts that correct them for future prospects." },
        { q: "Give two of the topics Cam pulled from one day of calls.", a: "Any two: ads didn't stop working, they got old; a cheaper lead is only a win if it's the same lead; ready-to-buy-only ads have a ceiling; bad leads are a messaging problem; doing it yourself you get one shot; you can't outspend an expensive market but can out-trust it; no funnel can save a bad message." }
      ]
    },
    {
      id: "soc-03",
      part: "money",
      title: "Match every post to its funnel stage",
      minutes: 12,
      tags: ["Mentor", "Book", "Disagreement"],
      date: "2026-10-13",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "5. Top, middle and bottom of funnel content; New in V2: When the follower ad is your top of funnel; Where the mentors disagree", who: "Logan McKinney (Open Q&A 10/13/26); Clayton Bell (Content Research 8/19/26); LC organic doc" },
        { doc: "ZDub Marketing Mastery Guide Ch 16", section: "Inbound: content for every stage of the journey", who: "Justin Champion (Inbound Content), John Hall (Top of Mind)" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "2.2 Content Strategy > Funnel", who: "Research playbook" }
      ],
      alsoIn: ["Copywriting tab (five awareness levels)"],
      idea: `Not every post should do the same job. Logan (10/13) splits organic into three stages:

- **Top of funnel (TOF):** trendy, funny, relatable. His example: "48 hours today on Claude. How many bookings? Zero." Goes on Instagram.
- **Middle of funnel (MOF):** "I know your problem" education with a soft "wink, nudge" mention of what you do. Goes on Instagram.
- **Bottom of funnel (BOF):** VSL, ads, landing page: problem, fix, price. Goes in **ads and the landing page, not cold organic.**

Hitting cold people with bottom-of-funnel content "is like walking up to a stranger and pitching." The same order works in DMs and conversations. Logan also doesn't recommend top-of-funnel ads ("basically boosting a post").

**Where the mentors disagree (shown side by side, not resolved):**
- *Logan (10/13):* post trendy, relatable TOF content on your own Instagram.
- *Clayton (8/19):* if you run LC-style follower ads, the follower ad IS your top of funnel, so you don't need to be "a dancing monkey." Post educational middle and bottom content instead. But clients still need some TOF because they usually aren't running follower ads.
- *LC organic doc vs Logan on CTAs:* the doc puts "DM me the word START" on organic posts; Logan keeps price and full pitch for ads and the page. The guide reads these as compatible: a soft DM CTA on a MOF post is fine; save price and pitch for ads.

**The book version** (Champion's inbound and Hall's Top of Mind) maps content to the buyer's question. Hall adds that consideration is usually the longest stage, which is where showing expertise does the most work. The Social Playbook adds what to measure at each stage (table below).`,
      keyPoints: [
        "TOF = trendy/relatable, MOF = 'I know your problem' education, BOF = problem, fix, price.",
        "Keep BOF (price, VSL, full pitch) for ads and the landing page, not cold organic (Logan).",
        "If follower ads are your TOF, your page can focus on education (Clayton). Clients still need some TOF.",
        "A soft DM CTA on a middle-of-funnel post is fine.",
        "Consideration is usually the longest stage, so expertise content earns the most (Hall)."
      ],
      why: "Mixing stages is the most common reason local pages feel salesy. Sorting posts by stage lets PMT's page warm up nervous beginners while the ads and landing page do the selling.",
      example: {
        title: "PMT at all three stages",
        body: "TOF: POV reel 'your first time leaning into a curve' with a coach cheering. MOF: carousel 'Do you need your own bike for the class? (No, and here's what we provide)' ending with 'DM me BIKE with questions.' BOF (ads/landing page only): 'Beginner course this Saturday, [price], bike and helmet provided, book here.'"
      },
      table: {
        head: ["Stage", "Buyer's question (Champion/Hall)", "Content that helps", "Measure (Social Playbook)"],
        rows: [
          ["Top / Awareness", "What's going on? Is this a problem?", "Trendy, relatable, tips, myth-busting, stories", "Views, watch time, sends per reach"],
          ["Middle / Consideration", "What are my options?", "Comparisons, how-it-works, process videos, FAQs, carousels", "Saves, profile visits, follows, DM starts"],
          ["Bottom / Decision", "Why you? Why now?", "Testimonials, offers, price, guarantees (mostly ads + landing page)", "Clicks, leads, CPL, bookings"]
        ]
      },
      practice: [
        {
          prompt: "Write one post idea per stage for PMT and one per stage for a Sacramento HVAC company. Mark where each goes (Instagram organic vs ads/landing page).",
          fields: ["PMT: TOF", "PMT: MOF", "PMT: BOF (and where it runs)", "HVAC: TOF", "HVAC: MOF", "HVAC: BOF (and where it runs)"],
          rubric: ["TOF is relatable or entertaining, not a pitch", "MOF names a real problem and only nudges at the service", "BOF has problem, fix and offer/price and is placed in ads or the landing page", "Each idea is specific to the business, not generic"],
          model: "HVAC TOF: 'Sacramento in July: your AC vs. the Delta breeze dying' (funny skit). MOF: '3 signs your 12-year-old AC won't make it through August.' BOF (ad): '$89 tune-up this month, book in 60 seconds.'"
        }
      ],
      today: { task: "Label ZDub's (or PMT's) last 10 posts TOF / MOF / BOF. If any BOF price-pitch posts are aimed at cold followers, rewrite one as a MOF education post with a soft DM CTA.", output: "Labeled list + one rewritten post", minutes: 20, suggested: false },
      check: [
        { q: "Where does Logan say bottom-of-funnel content (price, VSL) belongs?", a: "In ads and on the landing page, not in cold organic. Pitching cold people is like walking up to a stranger and pitching." },
        { q: "Why does Clayton say you don't need to be 'a dancing monkey' on your own page?", a: "If you run follower ads, the ad is your top of funnel, so your page can post educational middle and bottom content. Clients still need some TOF because they usually don't run follower ads." },
        { q: "16.6 For a buyer in the consideration stage ('What are my options?'), which content helps most?", a: "Comparisons, how-it-works, process videos and pricing explainers. Hall notes consideration is usually the longest stage." }
      ]
    },
    {
      id: "soc-04",
      part: "own-page",
      title: "Never trust a skinny chef: fill your grid before you run ads",
      minutes: 10,
      tags: ["Mentor", "Disagreement"],
      date: "2026-09-25",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "New in V2: Your own page before you run ads; Where the mentors disagree (Which account)", who: "Logan McKinney (Finding Winning Ads 9/25/26); Clayton Bell (8/19/26); Jason Maulucci (8/18/26)" }
      ],
      alsoIn: ["Getting Clients tab (follower ads, 'your page is your outreach')"],
      idea: `Logan's line (9/25): "How is a company that is moving real money... going to trust you if you can't even do your services for yourself?" Your page is your **digital business card**. Prospects who click through from an ad, a DM or a walk-in will check it, and an empty or stale page quietly kills the deal. "Never trust a skinny chef."

**The minimum before any follower ad runs:**
- A **3x3 grid of nine tiles** so the first screen is full, alternating video and static (Logan, 9/25). Clayton also advised at least the nine main tiles.
- **Videos can be simple:** phone in hand, 5–10 basic 30-second concepts on your audience's pain points, quick tips, "content hacks." If editing is your strength, show it off.
- **Statics aren't the lazy option.** A good one takes research and context. Use Pinterest references plus your branding.
- **Post more; it shows work ethic.** Use Instagram Stories to document client shoots, even free-trial clients (Clayton, 8/19).
- A professional photo (AI-generated is fine) and a clear bio (Clayton).

**Which account? The mentors answer different questions (Disagreement):**
- *Clayton (8/19):* use a separate business Instagram if your personal account is full of personal posts.
- *Jason (8/18):* run your agency's ads from your personal account, because new accounts get banned more.
- The guide's read: a business page for content is fine; run the ads through the account least likely to get flagged. Pick, don't agonize.

Logan's other point (10/9): "your page is your outreach." If you're not running ads, send your landing page or Instagram like a business card. That only works if the grid is full.`,
      keyPoints: [
        "Your page is your digital business card. 'Never trust a skinny chef.'",
        "Nine tiles (3x3) before follower ads, alternating video and static.",
        "Simple 30-second phone videos on pain points and tips are enough.",
        "Good statics need research and branding, not just a template.",
        "Separate business page vs personal account: Clayton and Jason differ; see both."
      ],
      why: "ZDub sells content. If ZDub's own grid is thin, every prospect who checks it gets a reason to doubt you. Nine solid tiles is a one-time job that keeps paying off on every call.",
      example: {
        title: "ZDub's first nine tiles",
        body: "Alternate video / static: 1) selfie tip 'Sacramento roofers: your ads didn't stop working, they got old' 2) static tier list 'Lead sources for Sacramento contractors, ranked' 3) selfie 'What a $20/day ad test can and can't do' 4) static carousel 'How fast should you call a lead back?' 5) screen-share of a real ad breakdown 6) static quote card with brand colors 7) selfie 'Bad leads are a messaging problem' 8) static 'What I'm building for PMT' (with permission) 9) selfie intro: who you are, who you help, one sentence on why."
      },
      practice: [
        {
          prompt: "Plan ZDub's 3x3 grid. Alternate video and static. Give each tile a working title and its job (education or results).",
          fields: ["Row 1 (tiles 1–3)", "Row 2 (tiles 4–6)", "Row 3 (tiles 7–9)", "Account decision (business page or personal) and why"],
          rubric: ["Nine tiles, alternating video and static", "Every tile speaks to ZDub's target buyer's pains, not ZDub's logo", "At least one tile shows real work or a real result", "Account decision references the Clayton/Jason trade-off"]
        }
      ],
      today: { task: "Count the posts on ZDub's Instagram. If there are fewer than nine, film two 30-second phone tips on trades owners' pain points and design one static from a Pinterest reference with your brand colors.", output: "2 videos + 1 static ready to post", minutes: 45, suggested: false },
      check: [
        { q: "What's the minimum grid Logan and Clayton want before follower ads run?", a: "Nine tiles (a 3x3 grid) so the first screen is full, alternating video and static." },
        { q: "What does 'never trust a skinny chef' mean for an agency?", a: "If you can't do your services for yourself (a strong page), businesses moving real money won't trust you with theirs." },
        { q: "How do Clayton and Jason differ on which account to use?", a: "Clayton: a separate business Instagram if your personal posts are personal. Jason: run agency ads from your personal account because new accounts get banned more. They answer different questions: content can live on a business page; run ads through the account least likely to be flagged." }
      ]
    },
    {
      id: "soc-05",
      part: "own-page",
      title: "Clean up your profile so it works like a funnel",
      minutes: 10,
      tags: ["Mentor", "Playbook"],
      date: "2026-11-04",
      source: [
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Organic content and personal brand > Profile funnel (p.15)", who: "Tayt Shelman, calls 10/30/26 and 11/4/26" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 2, Exercise 2C (bio rewrite + grunt test)", who: "Workbook, based on Donald Miller" }
      ],
      alsoIn: ["Persuasion tab (StoryBrand)", "Meta Ads tab (follower ads, retargeting)"],
      idea: `Tayt treats his profile as a **funnel**, not a scrapbook. Everything on it is there to turn a curious visitor into a booked call.

**Tayt's profile clean-up (10/30, 11/4):**
- **A clean, professional photo** and a **simple, searchable handle.** Tayt's is just his name.
- **Bio with a founder title and what you do.** Tayt's: "Founder of Cadence. We build scalable acquisition systems for service based businesses," plus a link to a results page.
- **Pinned client results** and **story highlights of wins.**
- **Mix in personal life** so people know, like and trust you, and see you often.

**How the profile fits his ad plan:** 80% of spend on book-a-call ads, 20% on follower ads, then retarget bookers and followers with testimonials and value content. DM new followers with a custom Loom or voice note, and reach bookers within five minutes. The profile is where all that traffic lands, so it has to do the convincing.

**Bio formula (Social Workbook, Mod 2):** who you help + outcome + proof + call to action. Then run Miller's "grunt test": within seconds, could a stranger tell what you offer, how it makes life better, and what to do next? (StoryBrand itself is taught in the Persuasion tab; here you just use the test on your bio.)

The study guide's action plan (Claude's, not a mentor's) turns this into one task: clear photo, simple handle, founder bio, pinned results.`,
      keyPoints: [
        "Clear photo + simple searchable handle (Tayt uses his name).",
        "Bio = founder title + what you do + link to results.",
        "Pin client results; keep highlights of wins.",
        "Mix in personal life so people know, like and trust you.",
        "Bio check: who you help + outcome + proof + CTA, and pass the grunt test."
      ],
      why: "Every ad, DM and walk-in sends people to ZDub's profile. A profile that says who you help and shows proof in five seconds makes every other channel convert better.",
      example: {
        title: "ZDub bio, before and after",
        before: "ZDub Media | Marketing | Creative | Ads | DM for inquiries",
        after: "Zach Wallin, Founder of ZDub Media\nMeta ads + content for Sacramento home-service businesses\nBuilding PMT's rider pipeline (case study pinned)\nFree ad audit ↓",
        body: "The rewrite names the founder, the audience, the outcome area and the next step, and points to real work. Only claim the PMT case study once PMT has approved it and the numbers are real."
      },
      practice: [
        {
          prompt: "Rewrite ZDub's profile using Tayt's checklist and the bio formula.",
          fields: ["Handle (simple, searchable)", "Photo plan", "New bio (who you help + outcome + proof + CTA)", "3 pinned posts you'll use", "Story highlight names", "Grunt test: what to offer / how life gets better / what to do next — all clear? What's missing?"],
          rubric: ["Founder title is in the bio", "Audience is specific (e.g. Sacramento home services)", "Proof is real (no invented results)", "One clear CTA or link", "A stranger would 'get it' in five seconds"]
        }
      ],
      today: { task: "Do the profile clean-up on ZDub's Instagram and Facebook now: photo, handle, founder bio, link, and pin your three best posts.", output: "Updated live profile", minutes: 30, suggested: true },
      check: [
        { q: "List Tayt's profile funnel elements.", a: "Clean professional photo, simple searchable handle, bio with founder title and what you do plus a link to results, pinned client results, story highlights of wins, and personal life mixed in." },
        { q: "What's Tayt's ad split that sends people to the profile?", a: "About 80% of spend on book-a-call ads and 20% on follower ads, then retarget bookers and followers with testimonials and value content; DM new followers with a Loom or voice note; reach bookers within five minutes." },
        { q: "What is the grunt test?", a: "Within seconds, could a stranger tell what you offer, how it makes their life better, and what to do next?" }
      ]
    },
    {
      id: "soc-06",
      part: "own-page",
      title: "What to post on ZDub's page: niche help and the journey",
      minutes: 11,
      tags: ["Mentor", "Book"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "6. Content for your own agency page", who: "Logan McKinney, Open Q&A 10/13/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Profile funnel (Document the journey); Top takeaways #9", who: "Tayt Shelman, 11/4/26" },
        { doc: "ZDub Marketing Mastery Guide Ch 16", section: "Choosing a creator style (The Amateur); Gary Vaynerchuk (Document, don't create)", who: "Allan Dib, Lean Marketing; Gary Vaynerchuk, Crushing It!" }
      ],
      alsoIn: ["Getting Clients tab (sell your story when you have no results)", "Content Production tab"],
      idea: `Two kinds of content carry an agency page before you have big case studies.

**1. Niche-specific help (Logan, 10/13).** Logan's early content was general and trend-chasing. Once he defined his offer, he posted niche-specific, helpful carousels. Example for barbers: "great content, wrong audience: film the person, not the fade; put one real price in the caption." That one post shows a barber you understand their business better than a generic marketer. His rules for his own page:
- Show you know what you offer, for prospects who click through from an ad.
- Keep brand consistency (his colors: signal coral and navy).
- Keep everything current: ads, landing page, website and sales talk should all carry the same message and offer.
- Middle-of-funnel organic makes your profile act like a sales page.

**2. The journey (Tayt, 11/4).** Tayt told a newer member that a "30 days of starting a marketing company" series would draw people who want to help. His bigger point: **no results? Sell your story.** Your background, the reputation you're protecting and the mentors behind you are the credibility. Zach has a story: a decade running an insurance practice and team, and he spends his own money marketing his wholesaling businesses.

The books agree. Allan Dib's **Amateur** creator style documents a learning journey in public. Gary Vaynerchuk's **"document, don't create"**: film what's already happening (the PMT shoot, the ad build, the sales call lesson) instead of inventing clever ideas.

Mix rule of thumb: mostly niche help, with the journey woven in so people see a real person doing the work.`,
      keyPoints: [
        "Post niche-specific help, not general marketing tips (Logan).",
        "Keep ads, page, site and sales talk on one consistent message and brand.",
        "No results yet? Your story, reputation and mentors are the credibility (Tayt).",
        "Document the journey: a '30 days of starting a marketing company' style series draws people in.",
        "Document, don't create: film the work you're already doing (Vaynerchuk)."
      ],
      why: "Zach doesn't have a stack of agency case studies yet. Niche help proves skill, and documenting the PMT build and the ZDub journey turns 'new agency' into 'a real person doing real work.'",
      example: {
        title: "A ZDub week built from niche help + journey",
        body: "Mon: carousel for Sacramento roofers, 'Great photos, wrong caption: put one real price range in it.' Wed: selfie, 'Day 12 of building ZDub: what I learned filming a motorcycle class at 7 a.m.' Fri: screen-share, 'I spent my own money on wholesaling ads for years. Here's the one test I run first.' Every post either helps a trades owner or shows the work."
      },
      practice: [
        {
          prompt: "Write Zach's story angle and five post ideas: three niche-help posts for one trade and two journey posts.",
          fields: ["My story in 2–3 sentences (background, why I'm credible)", "Niche-help post 1", "Niche-help post 2", "Niche-help post 3", "Journey post 1", "Journey post 2"],
          rubric: ["Story uses real facts (insurance practice, own ad spend), no inflation", "Niche posts name one trade and one specific mistake or fix", "Journey posts document real work, not a staged highlight", "Brand message matches the current ZDub offer"],
          model: "Story: 'I ran an insurance practice and team for a decade and I market my own real-estate businesses with my own money. Now I build ads and content for Sacramento home-service companies, and I'm documenting every step.'"
        }
      ],
      today: { task: "Film one 'documenting the journey' video today: 30–60 seconds on one real thing you did this week for ZDub or PMT and what you learned.", output: "One posted or scheduled journey video", minutes: 30, suggested: false },
      check: [
        { q: "What changed in Logan's own content once he defined his offer?", a: "He moved from general, trend-chasing posts to niche-specific helpful carousels (e.g. telling barbers to film the person, not the fade, and put one real price in the caption)." },
        { q: "What does Tayt say to sell when you have no results?", a: "Your story: your background, your reputation to protect and the mentors behind you. And document the journey, e.g. a '30 days of starting a marketing company' series." },
        { q: "16.7 Gary Vaynerchuk's 'document, don't create' means?", a: "Film what's already happening instead of inventing content. The business already generates content every day." }
      ]
    },
    {
      id: "soc-07",
      part: "own-page",
      title: "Turn results into content, honestly",
      minutes: 11,
      tags: ["Mentor", "Book"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "8. Turning results into content; 4. CAUTION / FLAG (honesty flag)", who: "LC organic doc; Logan McKinney 10/9/26; Paul Snowman 10/19/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Profile funnel (Facebook tricks; post results as they happen)", who: "Tayt Shelman, 10/30/26" },
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "Rules and risks", who: "Mastery Guide" }
      ],
      alsoIn: ["Agency Ops tab (reporting)", "Offers tab (guarantees)"],
      idea: `The LC organic doc has two modes: education, and **results**. Results mode means talking about **small wins constantly**: spend, reach, leads. You don't need a $100k case study. "We spent $[X] this week and got [Y] class inquiries for a motorcycle school" is a result, as long as X and Y are real. Post it and let people connect the dots.

**How the mentors want results handled:**
- **Post results as they happen** (Tayt, 10/30). Ask for the testimonial and a referral while the client is excited, not three months later.
- **Turn work into systems and results into proof** (Logan's roadmap for weeks 6–8, 10/9).
- **Facebook tricks (Tayt):** tag clients in an onboarding photo or video so it shows to their friends, who are often business owners. Commenting on an old post pushes it back into feeds.
- **Only real numbers** (Paul, 10/19, and the LC Cold Outreach SOP: "never invent stats, clients, results").

**The honesty flag.** Step 2 of the LC organic doc suggests making tweet-style graphics more believable with invented follower or engagement numbers and backdating. The mentor guide flags this: it conflicts with the SOP, Paul's compliance rules and Logan's transparency teaching. Use your real handle and real numbers, or a plain quote card with no fake metrics.

**Rules and risks (Mastery Guide Ch 17):**
- Results and testimonials in organic posts are still advertising claims: keep them **true and typical.**
- Get **written consent** before featuring customers, especially minors.
- Business accounts generally can't use popular commercial songs; use licensed commercial audio or royalty-free music.
- Label AI content where platforms require it.
- Get the client's permission before posting their numbers.`,
      keyPoints: [
        "Results mode: post small wins constantly (spend, reach, leads).",
        "Post results as they happen; ask for the testimonial and referral while they're excited.",
        "Tag clients in onboarding photos on Facebook so their business-owner friends see it.",
        "Real numbers only. Never fake follower counts, metrics or dates.",
        "Testimonials are claims: true, typical, consented, client-approved."
      ],
      why: "PMT is ZDub's first proof. Posting its small wins (with permission) is how ZDub goes from 'new agency' to 'the people getting riders booked,' and staying honest protects the reputation Tayt says is your credibility.",
      example: {
        title: "A PMT results post (with permission, real numbers only)",
        before: "Tweet-style graphic with a made-up 48K-follower handle: 'We 10x'd a training school's revenue.'",
        after: "Plain card on ZDub brand colors: 'Week 2 for a Sacramento-area motorcycle school: $[real spend] → [real number] class inquiries. What we changed: one offer, 3 creatives, every lead called in 5 minutes.' Caption tags PMT (with approval).",
        body: "The rewrite is smaller and more believable, teaches the 'how', and is fully true."
      },
      practice: [
        {
          prompt: "Draft a results post from any real small win you have (PMT, a wholesaling campaign, your own ad test). If you have none yet, draft the template you'll fill when the first number arrives.",
          fields: ["The real numbers (spend, reach, leads, bookings)", "Post hook", "What we changed (3 short points)", "Permission needed from / status", "Consent or claim check notes"],
          rubric: ["Every number is real and sourced", "It says what changed, not just the result", "Client permission is noted", "No implication that a lucky result is typical", "No fake metrics on any graphic"]
        }
      ],
      today: { task: "Ask PMT for permission to share early numbers and for a short testimonial or referral when results land. Write the message and send it.", output: "Sent permission/testimonial request", minutes: 15, suggested: true },
      check: [
        { q: "What does 'results mode' mean in the LC organic doc?", a: "Talk about small wins constantly (spend, reach, leads) and let people connect the dots." },
        { q: "What's the honesty flag in the LC organic doc?", a: "Its suggestion to fake follower/engagement numbers or backdate tweet-style graphics conflicts with the SOP ('never invent stats, clients, results'), Paul's compliance rules and Logan's transparency. Use real handles and numbers or a plain quote card." },
        { q: "17.8 A business account wants to use a chart-topping song in a reel. What's the rule?", a: "Business accounts generally can't; use licensed commercial or royalty-free audio." }
      ]
    },
    {
      id: "soc-08",
      part: "engine",
      title: "Two modes and four formats cover almost every post",
      minutes: 9,
      tags: ["Mentor"],
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "2. Two modes; 3. Four formats", who: "LC document \"How to Never Run Out of Organic Content\" (undated)" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Part 5: Disagreements (education vs entertainment)", who: "Research playbook (Brock Johnson vs Hormozi/Patel)" }
      ],
      alsoIn: ["Content Production tab (filming and editing each format)"],
      idea: `Blank-page panic usually comes from too many choices. The LC organic doc shrinks them to **two modes** and **four formats.** Every post is one mode in one format.

**Two modes:**
1. **Education. Start here.** Teach your buyer something useful about their problem.
2. **Results.** Talk about small wins constantly: spend, reach, leads. Let people connect the dots.

**Four formats:**
1. **Selfie video (A-roll).** You talking to the phone. Fastest trust.
2. **Screen-share with a camera bubble.** Walk through an ad, a dashboard, a landing page. Great for agency content.
3. **Infographic or carousel**, including tweet-style screenshots (real handle, real numbers only).
4. **B-roll with text overlay.** Footage plus words on screen; easy with AI and CapCut.

That's 2 x 4 = 8 combinations, which is plenty for a month without repeating yourself in a boring way.

**Teach, but teach entertainingly.** The Social Playbook records a real disagreement: Brock Johnson argues pure education is losing to entertaining content, while Hormozi, Patel and STEPPS champion teaching. Its resolution: lead with story, contrast or surprise, then teach. Education mode doesn't mean a lecture.

Quick pick guide for ZDub: screen-share for "here's why this ad works," selfie for objection posts, carousel for checklists and tier lists, B-roll overlay for PMT range footage.`,
      keyPoints: [
        "Two modes: education (start here) and results (small wins, constantly).",
        "Four formats: selfie A-roll, screen-share with camera bubble, carousel/infographic, B-roll + text.",
        "Every post = one mode x one format.",
        "Teach entertainingly: lead with story, contrast or surprise."
      ],
      why: "Picking from 8 combos instead of infinity is how Zach posts daily for ZDub and PMT without burning hours deciding what to make.",
      example: {
        title: "One idea, four formats (PMT)",
        body: "Idea: 'The head-check mistake almost every beginner makes.' Selfie: coach explains it in 25 seconds at the range. Screen-share: not ideal for PMT, skip. Carousel: 5 slides, mistake → why → fix → drill → 'save for class.' B-roll + text: slow-motion clip of a rider turning their head, text 'Look where you want to go.'"
      },
      table: {
        head: ["Format", "Best for", "ZDub example", "PMT example"],
        rows: [
          ["Selfie (A-roll)", "Trust, opinions, objections", "'Bad leads are a messaging problem'", "Coach: 'What scares beginners on day one'"],
          ["Screen-share + bubble", "Showing work", "Breaking down a roofer's ad", "Walking through the booking page"],
          ["Carousel / infographic", "Checklists, rankings, saves", "Lead sources for contractors, ranked", "5 things to bring to your first class"],
          ["B-roll + text overlay", "Fast, faceless, mood", "Clips from a client shoot + one tip", "Range footage + 'Do I need my own bike? No.'"]
        ]
      },
      practice: [
        {
          prompt: "Fill the 2 x 4 grid for ZDub's own page: one post idea per mode per format.",
          fields: ["Education + selfie", "Education + screen-share", "Education + carousel", "Education + B-roll/text", "Results + selfie", "Results + screen-share", "Results + carousel", "Results + B-roll/text"],
          rubric: ["Each idea fits its format (e.g. checklists as carousels)", "Results ideas use real or clearly placeholder numbers, never invented", "Education ideas open with story, contrast or surprise", "All aimed at one clear buyer"]
        }
      ],
      today: { task: "Pick one cell from your grid and make the post today in under 30 minutes.", output: "One finished post", minutes: 30, suggested: false },
      check: [
        { q: "What are the LC doc's two modes, and which do you start with?", a: "Education (start here) and results (talk about small wins constantly)." },
        { q: "Name the four formats.", a: "Selfie video (A-roll); screen-share with a camera bubble; infographic or carousel (including tweet-style screenshots); B-roll with text overlay." }
      ]
    },
    {
      id: "soc-09",
      part: "engine",
      title: "The 15-minute content process: one hook, three sections, one CTA",
      minutes: 12,
      tags: ["Mentor"],
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "4. The 15-minute content process; Pre-post checklist; CAUTION / FLAG", who: "LC document \"How to Never Run Out of Organic Content\"" }
      ],
      alsoIn: ["Copywriting tab (hooks and the first 3 seconds)", "Skill: never-run-out-of-organic"],
      idea: `This is the core production method from the LC organic doc. One 15–30 minute session gives you 3+ days of content.

**The four steps:**
1. **Model a hook** from accounts that speak to your ideal customer. Don't invent from scratch; adapt what already works. The doc's template: "Copy this stupid simple [strategy] that is responsible for millions of dollars in revenue for [audience] in [year]." (The point: the *system* made the millions, not you. Don't claim results you didn't get.) How to write hooks is taught in the Copywriting tab; here you're just picking one to model.
2. **Tweet-style graphic as the cover.** Real handle, real numbers (see the honesty flag below).
3. **Split the idea into 3 sections + a CTA.** The doc's own example: *Run Local Ads / Post Organic Content / Have the Conversation /* "DM me the word START." Have AI draft each section in **50 words or fewer**, then edit.
4. **Repurpose one script** into a carousel, a notes-app screenshot, talking-head clips and a Loom-style vertical screen recording (CapCut, Instagram captions).

**Rules that make it work:**
- **Don't be afraid to repeat yourself.** Vary the delivery, not the message.
- **Cadence: at least one piece per day. Batch a week in under an hour.** (A target, not a calendar: the point is volume from batching.)

**Pre-post checklist (LC doc):**
- Closer to a conversation?
- Education or results?
- Which of the 4 formats?
- Hook + 3 sections + CTA?
- Repurposed into 2–3 formats?

**Honesty flag:** the doc's step 2 suggests faking follower/engagement numbers and backdating the tweet graphic to look believable. Don't. The mentor guide flags that it conflicts with the LC SOP and Paul's and Logan's teaching. Use your real handle or a plain quote card.`,
      keyPoints: [
        "Model a hook from accounts your buyer follows.",
        "Tweet-style cover graphic (real handle, real numbers).",
        "3 sections of 50 words or fewer + one CTA.",
        "Repurpose one script into 2–3 formats; one session = 3+ days of content.",
        "Repeat the message; vary the delivery. Run the pre-post checklist."
      ],
      why: "This is the fastest repeatable way for Zach to post daily for ZDub and to draft client posts for PMT without a content team.",
      example: {
        title: "PMT script built with the process",
        body: "Hook (modeled): 'Copy this stupid simple plan that gets nervous adults licensed and riding in one weekend.' Sections: 1) Take the beginner course (bikes and helmets provided) 2) Practice the 3 drills the coaches give you 3) Ride with a buddy your first month. CTA: 'DM me RIDE and I'll send the class dates.' Repurpose: carousel (one section per slide), notes-app screenshot of the 3 steps, coach talking-head clip per section."
      },
      practice: [
        {
          prompt: "Run the full process once for ZDub's page.",
          fields: ["Modeled hook (and which account you modeled it from)", "Section 1 (≤50 words)", "Section 2 (≤50 words)", "Section 3 (≤50 words)", "CTA", "The 2–3 formats you'll repurpose it into", "Pre-post checklist: any 'no' answers?"],
          rubric: ["Hook is modeled from a real account your buyer follows", "Each section is 50 words or fewer and one idea", "CTA starts a conversation (DM a word)", "At least two repurposed formats planned", "No fake metrics or backdating"],
          model: "Hook: 'Copy this stupid simple system that books estimates for Sacramento roofers in 2026.' 1) Run local ads to your real service ZIPs. 2) Post one job-site video a day. 3) Call every lead within 5 minutes. CTA: 'DM me ROOF for the checklist.'"
        }
      ],
      today: { task: "Batch it: write three hook + 3 sections + CTA scripts in one sitting (one ZDub, two PMT), then repurpose one into a carousel.", output: "3 scripts + 1 carousel", minutes: 45, suggested: false },
      check: [
        { q: "What are the four steps of the 15-minute process?", a: "1) Model a hook from accounts that speak to your ideal customer. 2) Tweet-style graphic as the cover. 3) Split into 3 sections + a CTA (AI drafts each in 50 words or fewer). 4) Repurpose one script into carousel, notes screenshot, talking-head clips and a screen recording." },
        { q: "What's on the LC pre-post checklist?", a: "Closer to a conversation? Education or results? Which of the 4 formats? Hook + 3 sections + CTA? Repurposed into 2–3 formats?" },
        { q: "How much content does one session produce, and what cadence does the doc suggest?", a: "One 15–30 minute session = 3+ days of content. At least one piece per day; batch a week in under an hour." }
      ]
    },
    {
      id: "soc-10",
      part: "engine",
      title: "Build a swipe file and research on your phone",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-08-19",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "New in V2: Swipe files and research", who: "Clayton Bell, Content Research and Ideation call 8/19/26" },
        { doc: "ZDub_Guide_05 Client Acquisition V2", section: "New in V2: Leading with value: swipe files", who: "Clayton Bell, 8/19/26" },
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "Organic and paid work together (burner account)", who: "King Kong Meta Ads Playbook" }
      ],
      alsoIn: ["Getting Clients tab (swipe file as a lead-with-value tool)", "Ad Creative tab"],
      idea: `Clayton's (8/19) cure for "what do I post?": stop guessing and **model what already works**, organized so you can find it again.

**Set it up:**
- A Google Drive folder called **"Swipe File"** with a subfolder per niche or use (e.g. organic for local agencies, realtors, HVAC, local agency ads). Inside each, a Google Doc of links.

**Research the right way:**
- Research **on Instagram on your phone**, because the app shows view counts.
- Search terms like "local service based marketing agencies," "HVAC companies," "roofers," and add **"carousel"** to find faceless formats.
- Bookmark, copy the link, paste it in the niche doc.
- **Aim for 10 (low end) to 25–30 pieces per week per niche.** Thirty minutes of ideation can give you a week or more of content.
- Turn doom scrolling into research by asking "what made this perform?"

**Get the words out:**
- Pull transcripts with the **Get The Script** app (from an IG link) or **Descript** (from a video file).
- Drop 20–25 transcripts into Claude and have it analyze the copy and help you repurpose. Remember: AI can't see visual hooks, so you note those yourself.
- Send the swipe file to editors as reference.

**Swipe files also sell.** A student built one for a flooring prospect in 30–45 minutes and sent it before the meeting ("here are some ideas, let me know which ones track"). Pair it with ads as a "killer combo."

**Bonus feed trick (King Kong playbook, Ch 17):** a burner account that follows only the top creators in a niche gives you a constantly updated feed of what's working there.`,
      keyPoints: [
        "Drive folder 'Swipe File' with a subfolder (and link doc) per niche.",
        "Research on your phone's Instagram app to see view counts; add 'carousel' to searches.",
        "10–30 saves per week per niche; 30 minutes of ideation = a week of content.",
        "Get The Script / Descript → transcripts → Claude to analyze (AI can't see visual hooks).",
        "A niche swipe file doubles as a pre-meeting gift for prospects."
      ],
      why: "Modeling proven content is faster and safer than inventing it, and the same folder helps Zach brief editors, pitch prospects and make PMT content.",
      example: {
        title: "Zach's first two folders",
        body: "Swipe File / Sacramento trades organic (roofers, HVAC, remodelers) and Swipe File / Local agency ads. Each week: 10+ saves per folder. One row per save: link, format, why it worked ('tier list opens a loop', 'job-site POV with price in caption'). For PMT add a third folder: rider training + beginner riders."
      },
      practice: [
        {
          prompt: "Do a 20-minute phone research sprint for one niche and log your best five finds.",
          fields: ["Niche + search terms used", "Find 1: link + format + what made it perform", "Find 2", "Find 3", "Find 4", "Find 5", "Visual hooks AI won't catch (note them)"],
          rubric: ["Searched on the phone app with view counts visible", "Each find has a 'why it performed' note, not just a link", "Mix of formats (at least one carousel/faceless)", "Visual hooks noted separately"]
        }
      ],
      today: { task: "Create the Drive folder 'Swipe File' with subfolders for Sacramento trades organic, Local agency ads and Rider training. Save 10 pieces in one of them.", output: "Folder structure + 10 logged saves", minutes: 30, suggested: false },
      check: [
        { q: "Why does Clayton research on Instagram on the phone?", a: "Because the phone app shows view counts, so you can see what actually performed." },
        { q: "How many saves per week per niche does Clayton aim for?", a: "10 at the low end, up to 25–30 per week per niche." },
        { q: "How do you turn video saves into analyzable copy?", a: "Use Get The Script (from an IG link) or Descript (from a file) for transcripts, drop 20–25 into Claude to analyze and repurpose. AI can't see visual hooks." }
      ]
    },
    {
      id: "soc-11",
      part: "engine",
      title: "Recycle proven formats: tier lists, local formats and 100 versions",
      minutes: 11,
      tags: ["Mentor", "Book"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "Swipe files and research (formats that recycle across niches)", who: "Clayton Bell, 8/19/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Content for clients (viral-content method)", who: "Tayt Shelman, 10/30/26" },
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "Twelve proven formats for local businesses", who: "Mastery Guide" }
      ],
      alsoIn: ["Content Production tab", "Persuasion tab (open loops / curiosity)"],
      idea: `Formats are reusable shells. Once one works, you pour new topics into it.

**Clayton's recyclable formats (8/19):** S-to-F **tier rankings**, brand tier lists, listicles ("ways to ruin your roof"), 1–10 rankings. His example tier list ranked lead channels for local businesses: Google LSA and referrals S tier, Google search ads F tier for beginners, local SEO C tier, Facebook/Instagram ads B/A tier. A tier list opens a loop in the viewer's head ("where does my unit rank?"), so they watch to the end. A reused tier format is a **"golden goose."**

**Tayt's viral-content method (10/30):** find **five or six proven formats**, test them, then make **a hundred versions of the one or two that work.**

**The twelve proven formats for local businesses (Mastery Guide Ch 17):**
1. Quick tip ("One thing to check before you call a plumber")
2. The mistake ("The #1 mistake new riders make in a U-turn")
3. Myth vs. fact
4. Before and after (the most powerful proof format for trades)
5. Process / time-lapse
6. Day in the life
7. Customer story (with permission)
8. FAQ answer (30 seconds)
9. Reply to a comment
10. POV ("POV: your first time leaning into a curve")
11. Behind the scenes
12. Carousel guide ("Gear checklist for your first class")

Put them together: pick five or six of these that fit the client, test each a few times, then go deep on the winners.`,
      keyPoints: [
        "Tier lists, listicles and 1–10 rankings recycle across every niche.",
        "A tier list opens a loop ('where does mine rank?'), which holds viewers.",
        "Tayt: test 5–6 formats, then make 100 versions of the 1–2 winners.",
        "Twelve local formats; before-and-after is the strongest trades proof format.",
        "A reused winning format is a 'golden goose.'"
      ],
      why: "Recycling winners turns content from a creative guessing game into a repeatable system, which is what lets ZDub deliver volume for PMT and trades clients.",
      example: {
        title: "One tier format, three niches",
        body: "ZDub: 'Lead sources for Sacramento contractors, ranked S to F.' PMT: 'Beginner bikes ranked for your first year of riding.' HVAC: 'AC brands ranked by how often we get called to fix them.' Same shell, new topic each time. Only rank things you can honestly back up."
      },
      practice: [
        {
          prompt: "Pick six formats for PMT (from the 12 + tier lists) and write one post idea for each. Star the two you'd test first.",
          fields: ["Format 1 + idea", "Format 2 + idea", "Format 3 + idea", "Format 4 + idea", "Format 5 + idea", "Format 6 + idea", "The 2 to test first and why"],
          rubric: ["Six different formats", "At least one proof format (before/after or customer story)", "At least one save/send format (carousel guide or tier list)", "Ideas are specific to PMT's beginner riders"],
          model: "Mistake: 'The head-check mistake almost every beginner makes.' FAQ: 'Do I need my own bike?' POV: 'Your first time out of first gear.' Tier list: 'Riding gear ranked: what you actually need day one.' Customer story: a nervous 50-year-old's first class (with consent). Carousel: '5 things to bring to your first class.'"
        }
      ],
      today: { task: "Make one tier-list post for ZDub ('Lead sources for Sacramento contractors, ranked') as a carousel in Canva.", output: "One finished tier-list carousel", minutes: 40, suggested: false },
      check: [
        { q: "Why does a tier list hold attention?", a: "It opens a loop: the viewer wants to know where their own thing ranks." },
        { q: "What is Tayt's viral-content method?", a: "Find five or six proven formats, test them, then make a hundred versions of the one or two that work." },
        { q: "17.10 Name ten of the twelve proven short-form formats.", a: "Quick tip; mistake; myth vs. fact; before and after; process/time-lapse; day in the life; customer story; FAQ answer; reply to a comment; POV; behind the scenes; carousel guide." }
      ]
    },
    {
      id: "soc-12",
      part: "engine",
      title: "Hold attention after the hook: retain, reward, loop",
      minutes: 10,
      tags: ["Book", "Playbook", "Mentor"],
      date: "2026-09-17",
      source: [
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "Short-form video craft (2. Retention, 3. Reward, 4. Loop)", who: "Alex Hormozi ($100M Leads) and Mastery Guide" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "1.10 Brock Johnson; 2.3 Retention", who: "Brock Johnson (Instagram growth)" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 6 (Scripts and formats)", who: "Workbook" },
        { doc: "ZDub_Guide_03 Ad Creative V2", section: "New in V2: Writing a video ad live > Structure and open loops", who: "Cam Meunier, 9/17/26" }
      ],
      alsoIn: ["Copywriting tab (hooks and the first 3 seconds)", "Meta Ads tab (hold rate)"],
      idea: `The hook (taught in the Copywriting tab) earns the first three seconds. This lesson is about the other 27: keeping people watching and paying them off, because watch time is one of the biggest ranking signals.

**Retention: Hormozi's three tools** are **lists** ("3 things..."), **steps** ("here's how..."), and **stories** (what happens next?). Stories hold attention best.

**Craft rules (Mastery Guide + Brock Johnson):**
- **Cut the dead air.** Pauses, "ums," repeated takes.
- **Change something every 2–4 seconds:** angle, zoom, B-roll, text, location.
- **Open a loop early, close it late** ("...and the third one surprised me"). Cam (9/17, Ad Creative guide): "AI is not very good at writing open loops"; it opens and closes them right away, so check AI drafts for this.
- **Caption everything.** Many people watch on mute.
- **Keep it as short as the idea allows.**
- **End at the payoff.** Brock Johnson warns against repetitive middles and long outros, recaps or CTAs.

**Reward:** deliver what the hook promised, or more. Then give **one** easy action: follow for part two, send it to a friend, save it, comment a word, or tap the link. An honest payoff earns the next view; bait-and-switch teaches people to scroll past you.

**Loop:** videos whose ending flows back into the beginning get rewatched, which lifts watch time.

**Lengths (Social Playbook, re-check):** 7–30 seconds suits hooks and ads; 30–90 seconds suits teaching. Instagram Reels up to 3 minutes can be recommended to non-followers.`,
      keyPoints: [
        "Retain with lists, steps or stories (stories hold best).",
        "Cut dead air; change the visual every 2–4 seconds; caption everything.",
        "Open a loop early, close it late.",
        "Pay off the hook, then one easy action. No long outro.",
        "Loop the ending into the start to earn rewatches."
      ],
      why: "PMT's coaches will ramble if nobody shapes the video. These rules turn raw range footage into Reels people actually finish, which is what gets them shown to new riders.",
      example: {
        title: "PMT U-turn short (from the Workbook answer key)",
        body: "Hook: a beginner's head locked forward in a U-turn. 'This is why most beginners drop the bike in a U-turn.' Retain: 'It's not your hands. It's not your feet. It's your eyes...' (open loop). Reward: 'Turn your head and look where you want to go, all the way around. Watch the difference.' (side-by-side). Action: 'Save this for your first class.' Loop: the final shot matches the opening frame."
      },
      practice: [
        {
          prompt: "Write a 30-second script for PMT or a trades client with on-screen notes (Workbook Exercise 6A).",
          fields: ["0–3 sec hook (words + what's on screen)", "3–10 sec problem or setup (open the loop)", "10–22 sec solution and proof", "22–30 sec one CTA + loop back", "Where you change the visual (list the cuts)"],
          rubric: ["Retention uses a list, steps or a story", "A loop opens early and closes late", "Visual changes every 2–4 seconds", "Payoff delivers the hook's promise", "One CTA, no long outro"]
        }
      ],
      today: { task: "Take one existing ZDub or PMT video and re-edit it in CapCut or Edits: cut dead air, add captions, add a visual change every few seconds, end on the payoff.", output: "One re-edited video", minutes: 40, suggested: false },
      check: [
        { q: "17.5 Which is NOT a retention craft tip: start with your logo, caption everything, change something every few seconds, cut dead air?", a: "Start with your logo. Never start with a logo, a greeting or a slow pan." },
        { q: "17.6 Why do looping videos tend to perform well?", a: "They get rewatched, which lifts watch time, one of the biggest signals." },
        { q: "What are Hormozi's three retention tools?", a: "Lists, steps and stories. Stories hold attention best." }
      ]
    },
    {
      id: "soc-13",
      part: "engine",
      title: "One pillar piece, thirty posts: the repurposing engine",
      minutes: 11,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide Ch 16", section: "Gary Vaynerchuk (Pillar to micro); A content system for local businesses (3. capture habit, 4. repurposing engine)", who: "Gary Vaynerchuk; John Hall" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "1.5 Gary Vaynerchuk; 1.9 Vanessa Lau; 2.2 Repurposing", who: "Research playbook" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 4, Exercise 4C (plan one pillar piece)", who: "Workbook" }
      ],
      alsoIn: ["Content Production tab (shoot days and editing)"],
      idea: `The most efficient content system doesn't make 30 separate posts. It makes **one big piece** and cuts it into 30.

**Gary Vaynerchuk's Content Model ("pillar to micro"):** one long pillar piece (a long video, podcast, talk or live Q&A) is cut into dozens of micro pieces (clips, quotes, carousels, short posts), each adapted to the platform it runs on. Then you use the audience's reactions to make the next round. His original deck gets 30+ pieces from one keynote; a later one is titled "How to Make 64 Pieces of Content in a Day."

**Vanessa Lau's "content machine":** one or two cornerstone pieces a week, repurposed into 5–10 clips of 30–60 seconds plus Instagram, TikTok and email posts. People move from short-form discovery → long-form trust → email → offer.

**For a local client (Mastery Guide Ch 16):** one 30-minute recorded conversation with the owner can become 8–10 short clips, 3 carousels, 1 email newsletter, 1 blog post or FAQ page, and a dozen quote graphics. The Social Playbook's version: a 20–40 minute pillar → 8–15 clips with their own hooks, 3–4 carousels, 4–8 Stories, 1 email, Facebook text posts. Busy owners don't need to write; they need to talk for 15–30 minutes (Hall).

**Add a capture habit:** teach the client's team to film 10-second clips of the work, customer reactions (with permission) and before/afters into a shared folder. The agency edits and posts.

**Guardrail: rebuild natively.** Never upload a TikTok with its watermark to Instagram or Facebook. Each clip gets its own hook and platform-native edit.`,
      keyPoints: [
        "One pillar piece (20–40 min talk, Q&A, interview) → many native micro pieces.",
        "30 minutes with an owner ≈ 8–10 clips, 3 carousels, 1 email, 1 FAQ page, ~12 quote graphics.",
        "Each clip gets its own hook; rebuild natively, never watermarked cross-posts.",
        "Teach the client's team a phone capture habit into a shared folder.",
        "Use reactions to the micro pieces to plan the next pillar."
      ],
      why: "PMT's coaches and trades owners are busy. A single recorded conversation per month gives ZDub a month of material without needing them on camera every week.",
      example: {
        title: "PMT: one coach interview → a month of posts",
        body: "Record 30 minutes with a PMT coach answering the 10 questions nervous beginners ask most. Cut: 10 clips (one per question, each with its own hook), 3 carousels ('What to wear', 'What happens on day one', 'Do I need a bike?'), 1 email to past students, 1 FAQ page for the website, and quote cards from the coach's best lines."
      },
      practice: [
        {
          prompt: "Plan one pillar piece for PMT or a trades client (Workbook 4C + Drill D16.4).",
          fields: ["Pillar topic and format (20–40 min interview, Q&A or walkthrough)", "10 questions customers often ask (to use as the interview)", "Hooks for the first 5 clips", "3 carousel titles", "Email + FAQ page topic"],
          rubric: ["Questions come from real customer questions, not marketing speak", "Every clip has its own hook (not 'So, um, today...')", "Each carousel answers one question fully", "Plan includes native edits per platform"]
        }
      ],
      today: { task: "Write the 10 interview questions for a 30-minute PMT coach conversation and send a request to schedule it.", output: "Question list + scheduling message sent", minutes: 25, suggested: false },
      check: [
        { q: "What is Gary Vaynerchuk's pillar-to-micro model?", a: "One long pillar piece is cut into dozens of micro pieces (clips, quotes, carousels, short posts), each adapted natively to its platform." },
        { q: "16.12 Name the six parts of the guide's content system for local businesses.", a: "1) Content pillars. 2) A rhythm. 3) A capture habit. 4) A repurposing engine. 5) An owned audience. 6) Measurement tied to what the content is for." },
        { q: "What's the guardrail on cross-posting?", a: "Rebuild natively for each platform; never upload watermarked TikToks to Instagram or Facebook." }
      ]
    },
    {
      id: "soc-14",
      part: "strategy",
      title: "Make content people would miss: sweet spot, tilt and mission",
      minutes: 11,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide Ch 16", section: "What content marketing is, and isn't; Pulizzi's sweet spot and content tilt", who: "Joe Pulizzi, Epic Content Marketing and Content Inc." },
        { doc: "ZDub Marketing Mastery Workbook Ch 16", section: "Recall 16.1–16.4, 16.11; Drill D16.1", who: "Workbook + Answer Key" }
      ],
      alsoIn: ["Foundations tab (market first, then message)"],
      idea: `Joe Pulizzi, who did more than anyone to define content marketing, says it is creating and distributing **valuable, relevant and consistent** content to attract and keep a **clearly defined audience**, ultimately to drive profitable customer action. Every word matters:

- **Valuable:** it helps, teaches or entertains on its own, even if they never buy.
- **Relevant:** about the audience's problems, not yours.
- **Consistent:** it shows up dependably.
- **Clearly defined audience:** not "everyone."

What it isn't: posting your services, your logo and "Happy Monday!" graphics. Pulizzi's test: **if your content were removed tomorrow, would your audience miss it?** If not, it isn't content marketing yet.

**The sweet spot** is the overlap between what you know deeply (expertise, unique experience) and what your audience needs (pains, questions). Outside that overlap, content is either bragging (expertise nobody needs) or generic advice anyone could give.

**The content tilt** is your different angle in a crowded topic. "Motorcycle tips" is crowded. "Confidence coaching for nervous adult beginners, from instructors who've watched thousands of first rides" is a tilt. A tilt you could hand to any competitor isn't a tilt.

**The content mission statement** writes it down:

> Our content is where [specific audience] gets [type of information or entertainment] that helps them [outcome].

In *Content Inc.* Pulizzi adds: pick one main channel, one format and one consistent schedule and stick with it long enough to get traction before expanding, and build toward an audience you own (like an email list), because platforms change their rules.`,
      keyPoints: [
        "Content marketing = valuable, relevant, consistent, for a clearly defined audience.",
        "Test: if it disappeared tomorrow, would they miss it?",
        "Sweet spot = what you know deeply x what they need.",
        "Tilt = your ownable angle in a crowded topic.",
        "Write a one-sentence content mission statement for every account."
      ],
      why: "Every client account needs a reason to exist beyond 'we post.' The mission statement and tilt keep PMT's and ZDub's content focused enough that people would notice if it stopped.",
      example: {
        title: "Mission statements (from the Mastery Guide)",
        body: "Training school: 'Our content is where nervous new and returning riders in Northern California get practical, encouraging coaching that helps them ride with confidence and stay safe.' Roofer: 'Our content is where Sacramento-area homeowners get straight answers about their roofs, with real photos from real jobs, so they never get upsold on work they don't need.'"
      },
      practice: [
        {
          prompt: "Drill D16.1 for PMT (or ZDub): find the sweet spot and pick a tilt, then write the mission statement.",
          fields: ["10 things they know deeply", "10 questions or pains their audience has", "The strongest overlaps (sweet spot)", "3 possible tilts", "Chosen tilt", "Mission statement (template)"],
          rubric: ["At least four strong overlaps", "Tilt is specific and ownable, not handable to a competitor", "Mission names a specific audience, a type of content and an outcome", "Passes the 'would they miss it?' test"],
          model: "ZDub tilt: 'The Sacramento agency that shows trades owners the real numbers behind every ad.' Mission: 'Our content is where Sacramento home-service owners get plain-English breakdowns of what's working in local ads and content, so they stop wasting money on marketing that doesn't book jobs.'"
        }
      ],
      today: { task: "Write the content mission statement and tilt for ZDub and for PMT, and put them at the top of each account's content doc.", output: "Two mission statements + tilts", minutes: 20, suggested: false },
      check: [
        { q: "16.1 Pulizzi defines content marketing as content that is...?", a: "Valuable, relevant and consistent, for a clearly defined audience." },
        { q: "16.2 Pulizzi's test for whether something is really content marketing?", a: "If it were removed tomorrow, would your audience miss it?" },
        { q: "16.3 / 16.4 What are the sweet spot and the content tilt?", a: "Sweet spot: the overlap between what you know deeply and what your audience needs. Tilt: your different angle in a crowded topic." }
      ]
    },
    {
      id: "soc-15",
      part: "strategy",
      title: "Set content pillars and keep the give-to-ask mix",
      minutes: 10,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide Ch 16", section: "A content system for local businesses (1. Content pillars; 2. A rhythm)", who: "Mastery Guide (Vaynerchuk, Hormozi)" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "2.2 Content Strategy (pillars, content mix); 1.11 Chris Do; 1.12 Andréa Jones", who: "Research playbook" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 4 (Exercises 4A, 4B)", who: "Workbook" }
      ],
      alsoIn: ["Offers tab (the offer itself)"],
      idea: `**Content pillars** are 4–6 recurring themes that every post fits under, so you never stare at a blank calendar. The Mastery Guide's local set:

1. **Education:** tips, mistakes, how-to, myth-busting.
2. **Proof:** results, reviews, before-and-afters, case stories.
3. **Behind the scenes:** the process, the crew, the tools, the day.
4. **People:** owner, staff, customers (with permission).
5. **Community:** local events, partners, the town.
6. **Offers:** classes, openings, seasonal deals (the "right hook").

The Social Playbook trims it to five: Proof, Teach, Behind the scenes/people, Community/local, Offer.

**The give-to-ask mix.** Every expert agrees on mostly giving:
- **Gary Vaynerchuk:** jab, jab, jab, right hook. Several value "jabs" before each ask, made native to the platform.
- **Hormozi:** give until they ask; summaries put it at about 3.5 gives per ask.
- **Chris Do:** 9-1-1: about 9 helpful posts, 1 personal, 1 ask.
- **ZDub default (Social Playbook):** about 70–80% value/trust and 20–30% direct asks in organic; paid ads carry most of the asks.

This fits the mentor funnel (soc-03): organic gives, ads and the landing page ask.

**Why repeat offers anyway:** Andréa Jones notes only about 10% of followers see any given post, so an occasional offer post isn't spam.

**Rhythm:** the Mastery Guide suggests 3–5 short videos or carousels a week plus one weekly pillar piece and Stories when possible, as a realistic start. Treat that as a starting idea, not a rule; the mentor cadence is "at least one a day, batched."`,
      keyPoints: [
        "4–6 pillars: education, proof, behind the scenes, people, community, offers.",
        "Mostly give: jab-jab-jab-right-hook, ~3.5:1, or 9-1-1.",
        "ZDub default: ~70–80% value in organic; ads carry most asks.",
        "Only ~10% of followers see a given post, so repeat offers occasionally.",
        "Audit the mix monthly: count gives vs asks."
      ],
      why: "Pillars make planning PMT's month a fill-in-the-blanks job, and the mix keeps the page from turning into an ad feed that followers tune out.",
      example: {
        title: "PMT pillars",
        body: "Teach: 'The head-check mistake almost every beginner makes.' Proof: a student's first ride (with consent), reviews. Behind the scenes: coaches setting up the range at 7 a.m. Community: riding spots and events around the region. Offer: 'Open seats this Saturday' (only when true). Roughly one offer post for every 3–4 value posts."
      },
      practice: [
        {
          prompt: "Workbook 4A + 4B: set PMT's pillars and audit the mix.",
          fields: ["Proof: what it covers + 3 post ideas", "Teach: what it covers + 3 post ideas", "Behind the scenes: + 3 ideas", "Community / local: + 3 ideas", "Offer: + 3 ideas", "Last 10 posts: gives ___ asks ___ ratio ___", "One change for next month"],
          rubric: ["Every pillar has three specific ideas", "Offer ideas are true and current", "Audit counts real posts", "Planned mix is mostly value (around 70–80%)"]
        }
      ],
      today: { task: "Audit ZDub's last 10 posts as Give or Ask and write the ratio at the top of your content doc. Plan the next five posts to hit roughly 4 gives : 1 ask.", output: "Ratio + 5 planned posts", minutes: 20, suggested: false },
      check: [
        { q: "Name the six pillars in the Mastery Guide's local system.", a: "Education, proof, behind the scenes, people, community, offers." },
        { q: "What are the three give-to-ask rules from Gary, Hormozi and Chris Do?", a: "Gary: jab, jab, jab, right hook. Hormozi: give until they ask (~3.5:1). Chris Do: 9-1-1 (9 helpful, 1 personal, 1 ask)." },
        { q: "What's the ZDub default mix for organic?", a: "About 70–80% value/trust and 20–30% direct asks; paid ads carry most of the asks." }
      ]
    },
    {
      id: "soc-16",
      part: "strategy",
      title: "Never run out of ideas: the knowledge bank and five topic sources",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide Ch 16", section: "Top of mind: trust, helpfulness, and the knowledge bank; Alex Hormozi: content that builds an audience", who: "John Hall, Top of Mind; Alex Hormozi, $100M Leads" },
        { doc: "ZDub Marketing Mastery Workbook Ch 16", section: "Recall 16.8, 16.9, 16.13; Drill D16.3", who: "Workbook + Answer Key" }
      ],
      alsoIn: ["Agency Ops tab (client onboarding)"],
      idea: `"We don't know what to post" is the most common problem in local content. Two tools fix it for good.

**1. The knowledge bank (John Hall, *Top of Mind*).** A shared document or channel where everyone in the business drops customer questions, stories, objections and insights **the moment they happen.** Front-line staff are the richest source (for PMT: the coaches; for a roofer: the estimator). Hall even suggests friendly team contests to keep ideas flowing. Related tools:
- **Content triggers:** moments that prompt content, like a common question, a seasonal problem, an industry change or a news event.
- **Collaborative creation:** the expert supplies the knowledge; the agency shapes it. Busy owners don't need to write; they need to talk for 15 minutes.

The Mastery Guide's ZDub application: set up a shared note or voice-memo channel per client for "questions customers asked this week" and "something interesting that happened on a job." Every week, turn the best five into content.

**2. Hormozi's five topic sources ($100M Leads):**
1. **Far past:** life lessons tied to what you sell.
2. **Recent past:** recent conversations, jobs, case studies.
3. **Present:** ideas captured as they happen.
4. **Trending:** current events through your expertise.
5. **Manufactured:** do something new, then document it.

Plus his rule: **give away the secrets, sell the implementation.** People pay to have it done for them even after you've explained how. Generosity builds trust; the done-for-you service captures the value. That's exactly ZDub's position: teach trades owners how ads work, then do it for them.

This is the client-side twin of Cam's method (soc-02): his "knowledge bank" is his sales call transcripts.`,
      keyPoints: [
        "Knowledge bank: a shared place where staff drop customer questions, objections and stories as they happen.",
        "Front-line staff are the best source; owners just need to talk 15 minutes.",
        "Five topic sources: far past, recent past, present, trending, manufactured.",
        "Give away the secrets, sell the implementation.",
        "Turn the best five bank entries into content every week."
      ],
      why: "A knowledge bank means PMT's coaches feed ZDub a steady stream of real rider questions, so Zach never has to guess what beginners care about.",
      example: {
        title: "PMT five-source ideas (from the Workbook answer key)",
        body: "Far past: the coach's own first wobbly ride. Recent past: 'A student asked me this on Saturday...' Present: filming today's class warm-up. Trending: a viral crash video, broken down with what to do instead (handled respectfully). Manufactured: 'We let a 65-year-old who's never ridden take our class. Here's day one.'"
      },
      practice: [
        {
          prompt: "Drill D16.3: three ideas from each of Hormozi's five sources for one client (PMT or a trade).",
          fields: ["Far past (3)", "Recent past (3)", "Present (3)", "Trending (3)", "Manufactured (3)", "How the client's knowledge bank will work (where, who adds, how often you pull)"],
          rubric: ["15 ideas, all specific to the client", "Trending ideas are tied to the client's expertise and handled respectfully", "Manufactured ideas are real things the client could do", "Knowledge bank has a named place and named contributors"]
        }
      ],
      today: { task: "Set up a shared note (or voice-memo thread) with PMT titled 'Questions riders asked this week' and send the coaches a 2-line explanation of how to use it.", output: "Live shared knowledge bank + message sent", minutes: 20, suggested: false },
      check: [
        { q: "16.13 What is a knowledge bank, and why does it solve 'we don't know what to post'?", a: "A shared place where everyone in the business drops customer questions, stories, objections and insights as they happen. Every week the agency turns the best ones into content, so there's always a supply of real topics." },
        { q: "16.8 Which is NOT one of Hormozi's five topic sources: manufactured, far past, trending, competitors' posts?", a: "Competitors' posts. The five are far past, recent past, present, trending and manufactured." },
        { q: "16.9 What does 'give away the secrets, sell the implementation' mean?", a: "Teach openly; people still pay to have it done for them." }
      ]
    },
    {
      id: "soc-17",
      part: "strategy",
      title: "Put the right person on camera in the right style",
      minutes: 9,
      tags: ["Book", "Playbook", "Mentor"],
      date: "2026-10-13",
      source: [
        { doc: "ZDub Marketing Mastery Guide Ch 16", section: "Choosing a creator style", who: "Allan Dib, Lean Marketing" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "2.4 Scripting and Formats (talking head)", who: "Dara Denney (the person matters most)" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 6, Exercise 6C (Who's on camera?)", who: "Workbook" },
        { doc: "ZDub Marketing Mastery Workbook Ch 16", section: "Recall 16.10", who: "Workbook + Answer Key" },
        { doc: "ZDub_Guide_04 Organic Content V2", section: "7. Content for clients > Production levels (interview style)", who: "Logan McKinney, 10/13/26" }
      ],
      alsoIn: ["Content Production tab (directing people on camera)"],
      idea: `Dara Denney's point (Social Playbook): **the person on screen matters more than the script.** Cast whoever is most natural on camera. A great script read by a stiff owner loses to a decent script from a coach who lights up talking about riding.

Allan Dib's *Lean Marketing* gives **five creator styles.** Most local owners fit one or two naturally:

- **The Expert:** teaches what they know. Most trades owners and instructors.
- **The Curator:** collects and comments on the best ideas from others.
- **The Interviewer:** talks with customers, peers and experts. **Great for shy owners**, because the spotlight isn't only on them.
- **The Amateur:** documents a learning journey in public. (That's Zach's "building ZDub" angle.)
- **The Enigma:** a mysterious or highly stylized persona. Rare for local businesses.

Pick the style that matches the person who'll be on camera. **Forced personalities read as fake.** Gary Vaynerchuk says the same: authenticity scales; the audience can smell a performance.

Practical moves:
- For a shy owner, use Logan's **interview format** (about 20 questions, camera and mic, cut into many clips) so they just answer questions instead of performing.
- If two people are natural, give each a topic they own (e.g. one PMT coach owns "first-day nerves," another owns "gear and bikes").
- You can be the Interviewer off camera, asking questions while they talk.`,
      keyPoints: [
        "The person on camera matters more than the script (Denney).",
        "Five styles: Expert, Curator, Interviewer, Amateur, Enigma.",
        "Shy owner? Interviewer style or an interview format.",
        "Match style to the real person; forced personalities read as fake.",
        "Give each natural on-camera person one topic to own."
      ],
      why: "Most trades owners and coaches freeze on camera. Picking the right style and person is the difference between content that feels real and content nobody finishes.",
      example: {
        title: "Casting PMT",
        body: "Coach A is chatty and funny: Expert style, owns 'first-day nerves' and the mistake videos. Coach B is quiet but precise: Interviewer format, Zach asks 'What should I wear to class?' off camera and B answers. Zach himself: Amateur style on ZDub's page, documenting the PMT build."
      },
      practice: [
        {
          prompt: "Workbook 6C + Recall 16.10: cast one client.",
          fields: ["Person 1: name/role, natural style, topic they'll own", "Person 2: name/role, natural style, topic they'll own", "Format for the shyest person (interview, Q&A, voiceover)", "Your own style on ZDub's page and why"],
          rubric: ["Styles match the real people, not who 'should' be on camera", "Each person owns one clear topic", "A plan exists for anyone camera-shy", "Zach's style choice fits his actual situation"]
        }
      ],
      today: { task: "Ask PMT who on the team is most comfortable on camera and which topic each would enjoy talking about. Note the answers in the PMT content doc.", output: "Casting notes for PMT", minutes: 15, suggested: false },
      check: [
        { q: "16.10 For a shy business owner, which of Dib's archetypes is often the best fit?", a: "The Interviewer: they talk with customers, peers and experts, so the spotlight isn't only on them." },
        { q: "Name Dib's five creator styles.", a: "Expert, Curator, Interviewer, Amateur, Enigma." }
      ]
    },
    {
      id: "soc-18",
      part: "strategy",
      title: "Design every post for the send",
      minutes: 9,
      tags: ["Book", "Playbook", "Platform fact (re-check)"],
      source: [
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "Key idea: design for the send", who: "Mastery Guide (Adam Mosseri statements; Jonah Berger, Contagious)" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "2.5 Virality and Shareability (Design for sends)", who: "Research playbook" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 7, Exercise 7C (The send test)", who: "Workbook" },
        { doc: "ZDub Marketing Mastery Workbook Ch 17", section: "Recall 17.4; Drill D17.1", who: "Workbook + Answer Key" }
      ],
      alsoIn: ["Persuasion tab (STEPPS / word of mouth)"],
      idea: `Instagram's head Adam Mosseri has named **watch time, likes and sends** (sharing a post by DM) as the top ranking signals, and **sends per reach matters more for reaching new people.** In October 2026 he said Instagram focuses much more on content people send to a friend than on comments. (Platform fact: re-check.)

So before you post, ask one question:

> **Who would someone send this to, and why?**

If you can't answer, change the post before it goes up. The reasons people send things come from Jonah Berger's STEPPS (taught fully in the Persuasion tab). For organic posts, the four that do most of the work:

- **Practical value:** "Send this to your friend who's learning to ride." Checklists, price guides, "how to tell if..."
- **Social currency:** it makes the sender look smart or in the know.
- **Humor and strong emotion:** awe, laughter, local pride.
- **Identity:** the post describes someone the viewer knows ("the friend who keeps saying 'someday I'll learn to ride'").

A local twist from the Social Playbook: "5 questions to ask before hiring any Sacramento contractor" is practical value people forward to a neighbor.

**Send-worthy CTAs:** rotate in "send this to someone who needs it" as the one action on posts built for sends. It's an honest ask that matches what the algorithm rewards.`,
      keyPoints: [
        "Top Instagram signals: watch time, likes, sends; sends per reach drives new reach (re-check).",
        "Ask of every post: who would someone send this to, and why?",
        "Practical value, social currency, humor/emotion and identity get posts sent.",
        "No answer to the send test? Change the post.",
        "Use 'send this to...' as the CTA on posts built for sends."
      ],
      why: "PMT's whole growth depends on reaching new riders, and sends are the signal that pushes posts to non-followers. A post built to be forwarded to 'the friend who wants to ride' does free targeting.",
      example: {
        title: "PMT send-worthy rewrite (from the Workbook answer key)",
        before: "\"We're open Saturday!\"",
        after: "\"Send this to the friend who keeps saying 'someday I'll learn to ride': 5 things nobody tells you before your first class.\"",
        body: "Nobody sends the first one. The second gives practical value plus identity (everyone knows that friend), so people forward it."
      },
      practice: [
        {
          prompt: "Drill D17.1: take five recent posts from PMT's or ZDub's account and run the send test.",
          fields: ["Post 1: who would they send it to, why? (or rewrite)", "Post 2", "Post 3", "Post 4", "Post 5"],
          rubric: ["Each answer names a specific recipient ('my friend who...')", "Each answer names a reason (practical, social currency, humor, emotion, identity)", "Posts with no answer get a rewritten concept", "Rewrites stay true to the business"]
        }
      ],
      today: { task: "Run the send test on your next planned PMT post. If it fails, rewrite it with practical value + identity and add a 'send this to...' CTA.", output: "One send-ready post", minutes: 15, suggested: false },
      check: [
        { q: "17.4 What does 'design for the send' mean?", a: "Make every post answer: who would someone send this to, and why?" },
        { q: "17.2 Which metric matters most for reaching new people on Instagram?", a: "Sends per reach." }
      ]
    },
    {
      id: "soc-19",
      part: "platforms",
      title: "Instagram in 2026: what actually earns reach",
      minutes: 11,
      tags: ["Platform fact (re-check)", "Playbook", "Book"],
      source: [
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Key Findings 1–2; 2.7 Platform Sections > Instagram (2025–2026)", who: "Research playbook (Mosseri statements, Buffer data)" },
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "How Instagram ranks content in 2026", who: "Mastery Guide (Adam Mosseri, as reported)" },
        { doc: "ZDub Marketing Mastery Workbook Ch 17", section: "Recall 17.1–17.3", who: "Workbook + Answer Key" }
      ],
      alsoIn: ["Meta Ads tab (ads don't change organic reach)"],
      idea: `Snapshot as of late October 2026. Platforms change constantly; re-check Mosseri's posts and Instagram's help pages every quarter.

**How ranking works now:**
- Instagram ranks Feed, Reels, Stories and Explore separately.
- **Top three signals: watch time, likes and sends** (Mosseri, January 2025). Likes matter a bit more for followers; **sends per reach** matter more for non-followers.
- In October 2026 Mosseri said Instagram weighs **sends much more than comments**, and puts less weight on watch time than competitors (though it still matters). Comments count but aren't the main driver.
- More and more reach comes from **recommendations to non-followers**, not your existing followers. Follower count matters less than it used to.
- **Originality is enforced.** Instagram favors the original version of a post; accounts that mostly repost lose recommendation eligibility.
- **Carousels tend to beat single photos** (more chances to engage). Hootsuite's benchmark: carousels are Instagram's best-engaging format.

**Features worth using:**
- **Trial Reels** (shown to non-followers first): launched December 2024; up to 20 a day; schedulable since April 2026; eligibility listed at 200 followers for professional accounts. Great for testing hooks. Don't repost the same trial reel over and over.
- **Reels up to 3 minutes** are eligible for non-follower recommendation (since January 2025).
- **Insights (April 2026):** share rate, **skip rate** (viewers leaving in the first ~3 seconds), views over time.
- **Hashtags are capped at 5 per post** (since December 2025). They're topic labels for search, not reach levers.
- **Collabs:** co-authored posts reach both audiences. Use with local partners.

**Myths to drop:** scheduling posts doesn't hurt reach; running ads doesn't change organic reach; AI content isn't penalized for being AI, but should be labeled. Claims that sends are worth "3–5x a like" or saves are "weighted triple" are not on the record.

**Frequency (Buffer data):** 3–5 feed posts a week plus near-daily Stories is the research floor. The mentor cadence (at least one a day, batched) sits above it.`,
      keyPoints: [
        "Top signals: watch time, likes, sends. Sends per reach drives non-follower reach.",
        "Sends now outweigh comments (Mosseri, Oct 2026).",
        "Originality wins; mostly-repost accounts lose recommendations.",
        "Max 5 hashtags; they help search, not reach.",
        "Use Trial Reels to test hooks; watch skip rate in Insights.",
        "Scheduling doesn't hurt reach; ads don't change organic reach."
      ],
      why: "PMT's and ZDub's Instagram growth depends on non-follower recommendations. Knowing the current signals stops Zach from wasting effort on hashtag stuffing or comment bait.",
      example: {
        title: "PMT: same idea, built for 2026 Instagram",
        before: "Reposted a viral motorcycle clip from another account, 25 hashtags, caption 'Comment below!'",
        after: "Original Reel filmed at PMT's range, 4 relevant hashtags (#motorcyclesafety style topic labels), caption 'Send this to the friend who wants to ride.' Same hook tested as 3 Trial Reels first; the winner posted to the main feed. Collab post with a local gear shop.",
        body: "The rewrite is original, send-friendly, hashtag-compliant and uses Trial Reels to test the hook on non-followers."
      },
      practice: [
        {
          prompt: "Workbook 9A (Instagram half): audit PMT's or ZDub's Instagram against 2026 facts.",
          fields: ["Bio passes the grunt test? (Y/N + fix)", "3+ Reels in the last 2 weeks? (Y/N)", "5 or fewer hashtags per post? (Y/N)", "Tried Trial Reels? (Y/N + plan)", "Any reposted / watermarked content? (Y/N + fix)", "One Collab partner idea"],
          rubric: ["Every item answered from the real account", "Each 'No' has a concrete fix", "Collab partner shares the same local customers", "No outdated tactics in the fixes"]
        }
      ],
      today: { task: "Post one hook three ways as Trial Reels on ZDub's or PMT's account (if eligible), and set a reminder to check skip rate and shares in 48 hours.", output: "3 Trial Reels live + check reminder", minutes: 30, suggested: false },
      check: [
        { q: "17.1 What are the three biggest Instagram ranking signals per Mosseri?", a: "Watch time, likes and sends. Likes matter a bit more with followers; sends per reach matter more for new people." },
        { q: "17.3 Which is true per the 2026 snapshot: reposting is rewarded; ads boost organic reach; single photos beat carousels; or hashtags help search, not reach, and scheduling doesn't hurt reach?", a: "Hashtags help search, not reach, and scheduling doesn't hurt reach. Originality is favored, carousels tend to beat single photos, ads don't change organic reach." },
        { q: "What's the hashtag limit on Instagram now?", a: "5 per post (since December 2025). They're topic labels for search, not reach levers." }
      ]
    },
    {
      id: "soc-20",
      part: "platforms",
      title: "Facebook and TikTok in 2026: Reels, originality and search",
      minutes: 11,
      tags: ["Platform fact (re-check)", "Playbook", "Book"],
      source: [
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "2.7 Platform Sections > Facebook (2025–2026); TikTok (2025–2026) incl. TikTok SEO checklist", who: "Research playbook (Meta newsroom, Buffer, Sprout Social)" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 9 (platform table; Exercises 9A, 9B, 9C)", who: "Workbook" },
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "Platform roles for local businesses", who: "Mastery Guide" }
      ],
      alsoIn: ["Meta Ads tab (TikTok Spark Ads)"],
      idea: `Snapshot as of late October 2026. Re-check quarterly.

**Facebook**
- Feed ranks friends, Pages and Groups by predicted interactions; **Reels are the discovery engine.**
- **All new videos publish as Reels** (June 2025).
- The Friends tab relaunched (US/Canada, March 2025) with no recommendations, so **Page reach depends more on Reels and recommendations.** Old "friends-feed reach" thinking is outdated.
- **Originality crackdown (July 2025):** accounts that mostly repost become non-recommendable. Meta said views and time spent on original Facebook Reels roughly doubled in the second half of 2025 vs the year before.
- As reported, **captions without outbound links** tend to perform best.
- **What works locally:** original Reels; photo albums (Facebook's best format in Hootsuite's benchmarks); community questions; Events; Groups (be helpful, follow the rules). Facebook skews older and is often the strongest channel for home services and family businesses. Research frequency: 3–5 posts a week, led by Reels.

**TikTok**
- For You recommends on viewer behavior: watch time, completion, rewatches, shares, comments, follows. Performance depends less on followers than on Instagram.
- **Search is separate and ranks on relevance** over views and engagement. That makes TikTok SEO a real lever for local businesses (checklist below).
- **Formats:** lo-fi, person-led, stitches, video replies to comments, series. Usually under 60 seconds for local content. Research frequency: 2–5 a week.
- Best fit: younger audiences (training schools like PMT, fitness, restaurants, med spas, events). For older homeowners, Meta is usually the stronger first channel.

**TikTok SEO checklist:**
1. Say the keyword aloud early, put it on screen and in the caption ("Sacramento roof repair").
2. Turn on and correct auto-captions; put keywords in profile name and bio.
3. Use 3–5 relevant hashtags. TikTok calls "more hashtags = higher ranking" a myth.
4. Use Creator Search Insights to find content gaps; check the Search traffic source.

**You don't need every platform.** Pulizzi's advice: master one or two before expanding. And never cross-post a video with another app's watermark; rebuild it natively.`,
      keyPoints: [
        "Facebook: all videos are Reels; Reels drive discovery; originality enforced.",
        "Facebook skews older and is strong for home services and family businesses.",
        "TikTok Search ranks on relevance: say, show and caption the keyword.",
        "TikTok: 3–5 relevant hashtags; keywords in name and bio.",
        "TikTok fits younger audiences like new riders; Meta first for older homeowners.",
        "Master one or two platforms; never cross-post watermarked files."
      ],
      why: "PMT's beginner riders skew younger (TikTok search fits), while Zach's trades prospects' customers skew older (Facebook fits). Choosing the right platform per client saves hours.",
      example: {
        title: "PMT TikTok keyword map (Workbook 9B)",
        body: "Search phrase 'how to get motorcycle license California' → video: coach says the phrase in the first 3 seconds, on-screen text repeats it, caption includes it, explains the course path in 40 seconds. 'motorcycle class near Sacramento' → range walk-through naming the area. 'beginner motorcycle tips' → the head-check mistake video."
      },
      table: {
        head: ["Platform", "Rewards most", "Best local formats", "Research frequency (Buffer)", "Key features"],
        rows: [
          ["Instagram", "Watch time, likes, sends per reach", "Reels, carousels, daily Stories", "3–5/week + Stories", "Trial Reels, Collabs, ≤5 hashtags, skip rate"],
          ["Facebook", "Original Reels; conversation-starting posts", "Reels, photo albums, questions, Events, Groups", "3–5/week led by Reels", "All video = Reels; skip outbound links in captions"],
          ["TikTok", "Watch time, completion, shares; Search = relevance", "Lo-fi person-led, series, comment replies", "2–5/week", "Keywords said/shown/captioned, Creator Search Insights, 3–5 hashtags"]
        ]
      },
      practice: [
        {
          prompt: "Workbook 9B + 9C for PMT: build a TikTok keyword map and choose the lead platform.",
          fields: ["Search phrase 1 → video idea", "Search phrase 2 → video idea", "Search phrase 3 → video idea", "Search phrase 4 → video idea", "Which platform matters most for PMT, and why?", "Which platform matters most for a Sacramento roofer, and why?"],
          rubric: ["Phrases are what a real local customer would type", "Each video says, shows and captions the keyword", "Platform choice matches the audience's age and behavior", "No more than two lead platforms per client"]
        }
      ],
      today: { task: "Update PMT's (or ZDub's) TikTok and Facebook profiles: add a search keyword ('Sacramento [service]' style) to the TikTok name/bio and post one original Reel natively on Facebook.", output: "Updated profiles + 1 native Facebook Reel", minutes: 30, suggested: false },
      check: [
        { q: "How does TikTok Search rank, and what's the SEO checklist?", a: "On relevance. Say the keyword aloud early, put it on screen and in the caption, correct auto-captions, keywords in name and bio, 3–5 relevant hashtags, use Creator Search Insights." },
        { q: "What changed on Facebook in 2025 that matters for Page reach?", a: "All new videos publish as Reels, the Friends tab has no recommendations so Page reach relies on Reels/recommendations, and mostly-repost accounts get demoted (July 2025 originality crackdown)." },
        { q: "17.9 Which platform's main job for local clients is search with evergreen how-to/FAQ videos?", a: "YouTube." }
      ]
    },
    {
      id: "soc-21",
      part: "platforms",
      title: "What's outdated: social tactics to stop believing",
      minutes: 10,
      tags: ["Platform fact (re-check)", "Playbook"],
      source: [
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Part 4: Fact-Check of the AI-Generated Tactics; Part 5: Where Experts Disagree and What's Outdated", who: "Research playbook (overrides older conflicting tactics)" }
      ],
      alsoIn: ["Meta Ads tab (budget scaling, targeting, learning phase)", "Funnels tab (speed to lead)"],
      idea: `A lot of social media advice online (and from AI tools) is two or three years stale. The Social Playbook fact-checked the common tactics in October 2026. These override anything older in your notes.

**Outdated organic tactics:**
- **20–30 hashtags.** Instagram caps at 5; TikTok calls hashtag-stuffing a myth.
- **"Comments are the most important signal."** Sends and watch time matter more; Mosseri says sends far outweigh comments.
- **Watermarked cross-posts and reposting others' content.** Both platforms now demote unoriginal accounts.
- **"Reels must be under 90 seconds."** Reels up to 3 minutes can be recommended.
- **Engagement-rate targets with no formula stated.** Benchmarks differ up to 10x by formula (see soc-22).
- **Facebook organic as "friends-feed reach."** Page reach now comes from Reels and recommendations.
- **Unverified "weights":** sends worth "3–5x a like" or saves "weighted triple" are not on the record.

**Outdated tactics that leak into your social offer (owned in other tabs, flagged here so you don't repeat them to clients):**
- **25–50 mile radius as a default.** Outdated. Match the real trade area: restaurants, gyms, salons ~3–10 miles or specific ZIPs; home services = service-area ZIPs; training schools or destination businesses 15–40 miles may fit.
- **"Raise budget 15–20% every 48 hours."** Folklore with a kernel of truth; not a Meta threshold. Consolidation and 7-day stability matter more.
- **Friday-only lead follow-up.** Wrong. Contact leads within minutes, and community management needs a daily block.
- Interest-stacking and detailed-targeting exclusions as core strategy; "max 6 ads per ad set"; the names "CBO" and "Advantage+ Shopping."

**What holds up:** the two-engine idea (organic trust engine + paid lead engine, linked by promoting organic winners), monthly batch filming with guardrails (vary hooks, openings and people; keep a weekly flex slot).

**Habit:** re-verify platform facts quarterly via Mosseri's posts, Meta Business Help, TikTok Help Center and the Social Media Examiner podcast.`,
      keyPoints: [
        "Max 5 hashtags on Instagram; hashtag stuffing is a myth on TikTok.",
        "Sends beat comments; don't bait comments as your main strategy.",
        "No reposting, no watermarked cross-posts.",
        "Reels can run up to 3 minutes; length follows the idea.",
        "25–50 mile radius, 15–20%/48h scaling and Friday-only follow-up are outdated.",
        "Re-check platform facts every quarter."
      ],
      why: "Prospects and AI tools will repeat stale tactics to Zach. Knowing exactly which are dead protects PMT's results and makes ZDub sound current on sales calls.",
      example: {
        title: "Correcting a prospect's stale advice",
        before: "Prospect: \"My nephew says use 30 hashtags, repost viral videos, and boost everything to a 50-mile radius.\"",
        after: "Zach: \"That worked a few years ago. Instagram now caps hashtags at 5, demotes accounts that mostly repost, and for a roofer we'd target your actual service ZIPs, not a 50-mile circle. The thing that gets reach now is original video people send to a friend.\"",
        body: "Correct the belief with current facts, without making the prospect feel dumb. That's also a perfect objection-to-post topic (soc-02)."
      },
      practice: [
        {
          prompt: "Audit one client account (or your own notes and saved AI outputs) for outdated tactics.",
          fields: ["Outdated tactic found #1 → current replacement", "Outdated tactic found #2 → current replacement", "Outdated tactic found #3 → current replacement", "One post you could make correcting a stale belief"],
          rubric: ["Each replacement matches the Oct 2026 fact-check", "Radius/scaling/follow-up items use the corrected guidance", "Correction post is respectful and specific", "Nothing is stated as permanent; re-check noted"]
        }
      ],
      today: { task: "Set a recurring quarterly reminder titled 'Re-verify platform facts' with the four sources (Mosseri, Meta Business Help, TikTok Help Center, Social Media Examiner). Then fix any outdated hashtag or repost habits on PMT's account.", output: "Quarterly reminder + cleaned-up account", minutes: 20, suggested: false },
      check: [
        { q: "Name three organic tactics the Social Playbook calls outdated in 2026.", a: "Any three: 20–30 hashtags; 'comments are the most important signal'; watermarked cross-posts and reposting; 'Reels must be under 90 seconds'; engagement targets without a formula; Facebook organic as friends-feed reach." },
        { q: "What replaces the '25–50 mile radius' default?", a: "Match the real trade area: ~3–10 miles or ZIPs for restaurants/gyms/salons, service-area ZIPs for home services, 15–40 miles may fit training schools or destination businesses." },
        { q: "What's wrong with 'Friday lead follow-up'?", a: "Leads should be contacted within minutes to hours, not once a week; community management needs a daily block." }
      ]
    },
    {
      id: "soc-22",
      part: "platforms",
      title: "Measure organic by rates and business results, not vanity totals",
      minutes: 11,
      tags: ["Platform fact (re-check)", "Book", "Playbook"],
      source: [
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "2.9 Measurement (organic KPIs, engagement benchmarks, monthly iteration); 3.3 Monthly Review", who: "Research playbook (Hootsuite, Socialinsider, Rival IQ)" },
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "Measuring organic social", who: "Mastery Guide" },
        { doc: "ZDub Marketing Mastery Guide Ch 16", section: "A content system (6. Measurement)", who: "Champion, Blanchard" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 12 (Exercises 12A, 12B)", who: "Workbook" }
      ],
      alsoIn: ["Meta Ads tab (hook rate / hold rate / testing metrics)", "Agency Ops tab (client reporting)"],
      idea: `Follower counts and raw views feel good but don't tell you what to fix. Judge content by **rates**, and judge the month by **business results.** (Paid metrics like hook rate and hold rate live in the Meta Ads tab.)

**Measure each content type by what it's for (Ch 16):**
- **Awareness content:** reach, watch time, shares/sends, saves.
- **Consideration content:** profile visits, website clicks, follows.
- **Decision content:** DMs, leads, bookings.

**Organic KPIs by stage (Social Playbook):**
- **Attention:** views, non-follower reach, watch time, skip rate, sends per reach.
- **Interest:** saves, likes per reach, comments, profile visits, follows.
- **Action:** DM starts, link clicks, site sessions, bookings.

**Per video:** 3-second hold (or skip rate), average watch time and % watched, sends per reach, saves, likes per reach, profile visits, follows.
**Per month:** non-follower reach, follower growth, DMs, website clicks and, most importantly, **leads and bookings from social.** Track them with "how did you hear about us?"

**Engagement benchmarks: compare like with like** (Platform fact, re-check):
- Hootsuite (by reach, best format): Instagram 4.2% (carousels), Facebook 2.9% (albums), TikTok 1.5% (videos); a "good" rate generally falls between 1% and 5% by industry.
- Socialinsider (by followers, 2026): TikTok 3.70%, Instagram 0.48%, Facebook 0.15%.
- Rival IQ (by followers): Instagram ~0.30%.
They differ by up to 10x because the denominators differ. **Pick one formula per client and track the monthly trend.**

**Monthly iteration:** rank posts by sends per reach and watch time, find what the winners share, and turn that into next month's three hypotheses. Then ask which pillars produced the most DMs, leads or bookings, and make more of those.`,
      keyPoints: [
        "Rates over totals: sends per reach, watch time, saves, profile visits, DMs.",
        "Measure each piece by its job: awareness, consideration or decision.",
        "Monthly, the real KPI is leads and bookings from social ('how did you hear about us?').",
        "Engagement benchmarks vary up to 10x by formula; pick one per client.",
        "Top 3 / bottom 3 posts each month → 3 hypotheses for next month."
      ],
      why: "PMT pays for bookings, not likes. Reporting rates and booked riders keeps ZDub's organic work tied to money and makes the monthly client meeting easy.",
      example: {
        title: "PMT monthly scorecard (Workbook 12A columns)",
        body: "Posts published | average Reel watch time | sends per reach | profile visits | DMs started | leads that booked. Plus one line: 'Top 3 by sends per reach all answered a first-day fear. Bottom 3 were announcements. Next month: three more fear-answering posts, one fewer announcement.'"
      },
      practice: [
        {
          prompt: "Workbook 12B: find the pattern in one account's last month.",
          fields: ["Top 3 posts by sends per reach (and what they share)", "Bottom 3 posts (and what they share)", "Three hypotheses to test next month", "Engagement formula I'll use for this client (by reach or by followers)", "How bookings from social will be tracked"],
          rubric: ["Uses rates, not raw totals", "Patterns are specific (topic, format, hook type)", "Hypotheses are testable next month", "One engagement formula chosen and named", "Business result (bookings) is tracked"]
        }
      ],
      today: { task: "Build a simple monthly scorecard sheet for PMT with the Workbook 12A rows and fill in whatever numbers you can pull today.", output: "PMT scorecard sheet with month 1 started", minutes: 30, suggested: false },
      check: [
        { q: "17.12 What should you measure per video, and what per month?", a: "Per video: 3-second hold or skip rate, average watch time and % watched, sends per reach, saves, likes per reach, profile visits, follows. Per month: non-follower reach, follower growth, DMs, website clicks, and leads/bookings from social." },
        { q: "Why do engagement benchmarks differ by up to 10x?", a: "Different formulas use different denominators (by reach vs by followers). Pick one formula per client and track the trend." }
      ]
    },
    {
      id: "soc-23",
      part: "clients",
      title: "Ask the KPI question before you plan any client content",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "7. Content for clients > Ask what they actually want first; New in V2: More on client content (say it in their words; be honest about timing)", who: "Logan McKinney, Client Acquisition 10/9/26 and Landing page builder 9/30/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Content for clients", who: "Tayt Shelman, 10/30/26" }
      ],
      alsoIn: ["Sales tab (discovery)", "Agency Ops tab (onboarding)"],
      idea: `Before you plan a single client post, ask **Logan's KPI question** (10/9):

> "If I did nothing else for you, what is the one thing you'd want to see from our relationship working together?"

**Why it matters: the card shop story.** Logan assumed his card shop client wanted Instagram views. Their real goal was **YouTube monetization.** Three months of Instagram work "basically meant nothing" to them. Once he asked, he switched to long-form YouTube plus giveaways, went from about 100 to 1,000 subscribers in a few months, and skits went viral (1.4M views). Same effort, pointed at the right goal.

**Sell what gets the result they actually want (Tayt, 10/30).** Many prospects come in asking for viral content but actually need ads. However they come in, sell what gets them the outcome. Tayt also notes selling organic is easy because no one expects a direct return and any niche can make content, which is exactly why you must pin down what "working" means up front.

**Say it in their words (Logan, 9/30).** "Organic video" means nothing to an owner. Logan reframed it as "10 social media posts" or "10 video ideas built around your real jobs." On sales calls, say "posts," not "organic." Describe deliverables like Logan's landing page: "short videos of your crew, your work and your finished jobs."

**Be honest about timing (Logan, 9/30).** His landing-page answer to the objection: "Organic videos build over months, not days. We won't promise you a number of jobs by a certain date."

The mentor guide's ZDub note: ask the KPI question at every onboarding before you plan content, and don't assume "more followers" is the goal.`,
      keyPoints: [
        "Ask: 'If I did nothing else for you, what's the one thing you'd want to see?'",
        "Logan's card shop wanted YouTube money, not Instagram views.",
        "Many want viral content but need ads; sell what gets their real result (Tayt).",
        "Say 'posts' and 'videos of your crew and jobs', not 'organic content.'",
        "Organic builds over months; never promise jobs by a date."
      ],
      why: "PMT and every trades client will define success differently (bookings, reviews, hiring, a new location). One question at onboarding stops ZDub from doing three months of the wrong work.",
      example: {
        title: "PMT onboarding, with and without the question",
        before: "Zach assumes PMT wants more Instagram followers and plans 20 trend Reels.",
        after: "Zach asks the KPI question. PMT says: 'Fill weekday classes, they're always half empty.' Content shifts to weekday-specific FAQ videos ('Can I take the class on a weekday?'), weekday-student stories, and ads pointed at weekday seats.",
        body: "Hypothetical answer for illustration. Ask PMT the real question; the plan follows the answer."
      },
      practice: [
        {
          prompt: "Write your onboarding script for client content: the KPI question, two follow-ups, and how you'll describe deliverables in the owner's words.",
          fields: ["KPI question (word for word)", "Follow-up 1 (to get a number or a date)", "Follow-up 2 (to learn where their customers actually are)", "Deliverables described in owner language", "Your honest timing line"],
          rubric: ["Uses Logan's question or a close version", "Follow-ups dig for a measurable outcome", "No marketing jargon ('organic', 'engagement') in the deliverables line", "Timing line promises effort, not a number of jobs by a date"],
          model: "Deliverables: 'Every month we'll film your crew on two real jobs and turn it into 12 short videos and 4 photo posts, posted for you on Facebook and Instagram.' Timing: 'Posts build trust over months. Ads are what bring leads this month.'"
        }
      ],
      today: { task: "Ask PMT the KPI question (call, text or voice note) and write their exact answer at the top of PMT's content plan.", output: "PMT's stated goal, in their words", minutes: 15, suggested: false },
      check: [
        { q: "What is Logan's KPI question?", a: "'If I did nothing else for you, what is the one thing you'd want to see from our relationship working together?'" },
        { q: "What happened with Logan's card shop client?", a: "He assumed Instagram views; they wanted YouTube monetization. Three months of Instagram meant nothing to them. After switching to long-form YouTube plus giveaways they went ~100 to 1,000 subscribers and had a 1.4M-view skit." },
        { q: "How did Logan describe organic in the client's language, and how did he handle timing?", a: "'10 social media posts' or '10 video ideas built around your real jobs.' Timing: 'Organic videos build over months, not days. We won't promise you a number of jobs by a certain date.'" }
      ]
    },
    {
      id: "soc-24",
      part: "clients",
      title: "Scope it: production levels, volume and how much organic to sell",
      minutes: 11,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "7. Content for clients > Production levels; Fulfillment volume examples; New in V2: How much organic to sell", who: "Logan McKinney (10/9, 10/13, 10/16/26); Jason Maulucci (8/25/26)" },
        { doc: "ZDub_Guide_06 Offer, Pricing and Lane V2", section: "Set up the upsell from day one", who: "Jason Maulucci, 8/25/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Upsell right after a win", who: "Tayt Shelman, 10/30 and 11/4/26" }
      ],
      alsoIn: ["Offers tab (pricing, outcome offer)", "Content Production tab (gear and editing)"],
      idea: `Client content isn't one thing. Before you price it, decide the production level and the volume.

**Production levels (Logan, 10/13):**
- **High production:** deck tech, skits.
- **Low production:** trend videos. Logan's most-viewed video (1.4M) took two minutes: phone plus captions. The real work was **finding trends in other niches and transposing them.**
- **Interview style:** about 20 questions, camera and mic, cut into many short clips.
- **Also:** film events, reaction videos to sales calls (popular for his real estate/insurance client), teleprompter scripts.
- **Gear:** he started with an iPhone 12 and a $170 phone gimbal, then reinvested client money into better cameras and lights. Zach's iPhone and DJI Osmo Action 5 are already enough to start.

**Real fulfillment volumes (Logan, 10/9 and 10/16):**
- Card shop, first 3 months: **$1,500/month for 12–15 short-form organic videos.**
- Card shop, end of year one: **$2,500/month for 5 short + 2 long videos per week**, doubled on release weeks.
- At peak: 50–60 short and long videos a month.

**How much organic to put in the offer (Jason, 8/25):** in a mature offer, as little organic and as much ads as possible, because ads are low cost and high value while organic costs time. If a prospect only wants to "look pretty online" or build a brand, "I'm not your guy"; refer them out. But for your first clients, do both: "sacrifice pay for skills." Jason also suggests setting up the upsell from day one: "I'll do your organic, but my true intention is to run your ads when the season makes sense."

**Grow the account after a win (Tayt):** start narrow, then add "clip-on" services (organic, a VA for lead follow-up) once you've delivered.`,
      keyPoints: [
        "Pick a production level: high (skits), low (trends), interview, events, reactions.",
        "Low production can win big: a 2-minute phone video hit 1.4M views.",
        "Benchmarks: $1,500/mo for 12–15 shorts; $2,500/mo for 5 short + 2 long a week.",
        "Mature offers lean on ads; first clients get both (Jason).",
        "Plant the ads upsell from day one; add clip-on services after a win."
      ],
      why: "Zach's offer bundles organic and paid. Knowing realistic volumes and price points keeps PMT's scope deliverable and stops ZDub from underpricing a 30-video month.",
      example: {
        title: "Scoping a Sacramento HVAC client",
        body: "Level: low production + interview. Month: one 20-question interview with the owner (→ 10 clips), 4 job-site phone videos, 4 statics from real job photos. Total ~18 pieces. Logan's card-shop benchmark ($1,500 for 12–15 shorts) is a sanity check on price, not a rate card. Pitch line: 'I'll handle your posts now; when summer hits, the real money is in running your ads.'"
      },
      practice: [
        {
          prompt: "Scope PMT's monthly content deliverable.",
          fields: ["Production level(s) and why", "Monthly pieces by type (shorts, long, statics, Stories)", "Filming time needed from PMT", "How this compares to Logan's benchmarks", "Upsell or clip-on you're setting up from day one"],
          rubric: ["Volume is realistic for one person to produce", "Production level fits PMT's staff and schedule", "Benchmarks used as a sanity check, not copied", "Ads remain the main revenue driver in the plan", "Upsell is stated honestly"]
        }
      ],
      today: { task: "Write a one-paragraph content scope for PMT (level, monthly volume, filming time) and add it to the PMT agreement or plan doc.", output: "PMT content scope paragraph", minutes: 25, suggested: false },
      check: [
        { q: "What were Logan's card shop volumes and prices?", a: "First 3 months: $1,500/month for 12–15 short-form videos. End of year one: $2,500/month for 5 short + 2 long videos per week, doubled on release weeks. Peak: 50–60 videos a month." },
        { q: "Where did the real work go on Logan's 1.4M-view video?", a: "Finding trends in other niches and transposing them; the video itself took two minutes (phone plus captions)." },
        { q: "What's Jason's position on organic in an offer?", a: "Mature offers: as little organic, as much ads as possible. First clients: do both ('sacrifice pay for skills'). If they only want to look pretty online, refer them out." }
      ]
    },
    {
      id: "soc-25",
      part: "clients",
      title: "One shoot, both uses: film organic posts and ads together",
      minutes: 10,
      tags: ["Mentor", "Playbook"],
      date: "2026-10-13",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "New in V2: More on client content; Using content and statics together", who: "Cam Meunier (Follow Ad call 9/17/26); Clayton Bell (8/19/26); Logan McKinney (10/13/26)" },
        { doc: "ZDub_Guide_03 Ad Creative V2", section: "New in V2: Modular shooting", who: "Cam Meunier, 9/17/26" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 13, Exercise 13B (shoot-day shot list)", who: "Workbook" }
      ],
      alsoIn: ["Ad Creative tab (modular shooting in depth)", "Content Production tab (shoot days)"],
      idea: `Every time you get a client on camera, leave with **both** organic posts and ad tests. That's the whole organic-plus-paid offer in one shoot.

**Cam's modular shoot (9/17):** film **hooks, bodies and two CTAs separately**:
- Organic CTA: "Click the link in my bio to schedule an assessment."
- Ad CTA: "Click the link below and fill out a form."
With 3 hooks, 3 bodies and both CTAs, Cam counts "18 pieces of content out of eight segments" (9 organic, 9 ads). The full technique lives in the Ad Creative tab.

**Remote works:** Cam shoots his mold client over FaceTime while the client films selfie-style on their phone. Hooks in one take, bodies next, CTAs separately.

**Clayton's client-video rules (8/19):**
- **End client videos with the company name and location** as a soft CTA and brand awareness.
- A simple bottom-of-funnel **FAQ video** ("what locations do you service?") is useful education.

**Statics do double duty too (Logan, 10/13):** for a low-budget trades client, make statics from **real job photos** and post them organically as well as testing them as ads.

**A shoot-day shot list (Social Workbook, Mod 13B):**
- Pillar piece (20–40 minute talk, Q&A or walkthrough)
- 15–25 short clips with different hooks
- B-roll of the work, the space and the team
- 2–3 customer testimonials (with signed releases)
- Team photos and behind-the-scenes moments

Guardrail from the Social Playbook: vary hooks, openings and people so batch videos don't look alike; platforms treat look-alikes as the same creative.`,
      keyPoints: [
        "Film hooks, bodies and two CTAs (bio link vs form) separately (Cam).",
        "3 hooks x 3 bodies x 2 CTAs ≈ 18 pieces from eight segments.",
        "Remote FaceTime shoots work for selfie-style client footage.",
        "End client videos with company name + location; make FAQ videos (Clayton).",
        "Real job photos → organic posts and ad tests (Logan)."
      ],
      why: "PMT's coaches have limited time. A modular shoot gets a month of posts and a round of ad creative from one session, which is how ZDub delivers both halves of its offer efficiently.",
      example: {
        title: "PMT modular shoot",
        body: "Hooks: 1) 'Nervous about your first ride? Watch this.' 2) 'You don't need your own bike to get licensed.' 3) 'The #1 thing that surprises our students on day one.' Bodies: 1) what happens in class 2) what's provided 3) a student's quick story. CTAs: organic 'Link in bio for class dates' / ad 'Tap below to grab a seat.' End card: 'Pacific Motorcycle Training, [location].'"
      },
      practice: [
        {
          prompt: "Write a modular shot list for a Sacramento trades client (or PMT).",
          fields: ["Hook 1", "Hook 2", "Hook 3", "Body 1", "Body 2", "Body 3", "Organic CTA", "Ad CTA", "End card (name + location)", "B-roll and photos to grab"],
          rubric: ["Three genuinely different hooks", "Each body works with every hook", "Two CTAs match their placement (bio link vs form)", "End card has company name and location", "Includes job photos usable as statics"]
        }
      ],
      today: { task: "Write PMT's next shoot-day shot list using the Workbook 13B checklist plus Cam's 3x3x2 structure, and send it to PMT with a proposed date.", output: "Shot list sent to PMT", minutes: 30, suggested: false },
      check: [
        { q: "What are Cam's two CTAs in a modular shoot?", a: "Organic: 'click the link in my bio to schedule an assessment.' Ad: 'click the link below and fill out a form.'" },
        { q: "How should client videos end, per Clayton?", a: "With the company name and location, as a soft CTA and brand awareness." },
        { q: "What did Logan do with real job photos for a low-budget trades client?", a: "Made statics from them, posted them organically and tested them as ads." }
      ]
    },
    {
      id: "soc-26",
      part: "clients",
      title: "Post for them, and keep a simple weekly rhythm",
      minutes: 10,
      tags: ["Mentor", "Playbook"],
      date: "2026-10-13",
      source: [
        { doc: "ZDub_Guide_04 Organic Content V2", section: "7. Content for clients > Posting", who: "Logan McKinney, Open Q&A 10/13/26" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "2.10 Production Systems and Workflows (monthly sprint, weekly rhythm)", who: "Research playbook" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 13 (Exercises 13A, 13C)", who: "Workbook" }
      ],
      alsoIn: ["Agency Ops tab (systems and SOPs)", "Funnels tab (GoHighLevel)"],
      idea: `**Logan's rule (10/13): don't rely on clients to post.** They post at bad times or skip days. Post for them through the **GoHighLevel Social Planner**: connect Facebook, Instagram, YouTube and TikTok, and schedule once to all of them (his example time: 9 AM). Zach already uses GHL, so this is a setup task, not a new tool. (Remember: scheduling doesn't hurt reach, and each platform should still get a natively edited file, not a watermarked cross-post.)

**A rhythm, as an idea (not a required calendar).** The Social Playbook suggests running each client in **monthly sprints** rather than rigid long-term plans:
1. Week 1: review last month, write 3 hypotheses, script, shoot.
2. Week 2: edit, schedule, launch new ad concepts.
3. Week 3: build new versions of winners, run Trial Reels.
4. Week 4: report, meet the client, plan next month.

And a sample weekly rhythm for a solo operator with multiple clients:
- **Daily (30–60 min):** comments and DMs, lead alerts checked several times a day, quick ad health check.
- **Monday:** 7-day ad review.
- **Tue–Wed:** creation and editing; script next week's hooks.
- **Thursday:** publishing QA, local outreach and collabs, Trial Reels.
- **Friday:** reporting, lead-quality check with clients, plan next week.

Two guardrails: keep a **weekly flex slot** for local news and trends (Sprout found 27% of consumers think trend content works only within 24–48 hours), and **community and lead checks happen every day**, never once a week.

Shape it to your actual week. The non-negotiables are: you schedule the posts, leads and DMs get a daily block, and there's a monthly review.`,
      keyPoints: [
        "Don't rely on clients to post; schedule for them (Logan).",
        "GHL Social Planner: connect FB, IG, YouTube, TikTok and schedule once.",
        "Monthly sprint idea: review/shoot → edit/schedule → iterate → report.",
        "Keep a weekly flex slot for timely local moments.",
        "Comments, DMs and leads get a daily block, not a weekly one."
      ],
      why: "PMT shouldn't have to remember to post. Owning the schedule in GHL is part of the service, and a light rhythm keeps multiple clients from slipping as ZDub grows.",
      example: {
        title: "Zach's week with PMT + ZDub (sample)",
        body: "Daily 8:00–8:45: PMT comments/DMs, ZDub DMs, lead alerts. Mon: PMT ad review. Tue: batch-write ZDub's week (15-minute process x 5). Wed: edit PMT clips, load the GHL Social Planner. Thu: Trial Reels + local collab outreach. Fri: PMT report row + plan next week. Flex slot: Thursday afternoon for anything timely (heat wave riding tips, a local event)."
      },
      practice: [
        {
          prompt: "Workbook 13C: write your own weekly schedule, then the GHL setup steps for one client.",
          fields: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Daily community/lead block (time of day)", "GHL Social Planner: accounts to connect + default post time"],
          rubric: ["Daily community/lead block exists", "One flex slot for timely content", "Batch creation days are separate from posting/QA", "Client accounts are scheduled by Zach, not the client", "Fits Zach's real week (wholesaling included)"]
        }
      ],
      today: { task: "Connect PMT's Facebook and Instagram (plus YouTube/TikTok if they have them) to the GoHighLevel Social Planner and schedule the next three posts.", output: "PMT accounts connected + 3 scheduled posts", minutes: 30, suggested: false },
      check: [
        { q: "Why does Logan post for clients instead of letting them post?", a: "Clients post at bad times or skip days. He schedules through the GHL Social Planner to all platforms at once." },
        { q: "What are the four weeks of the Social Playbook's monthly sprint?", a: "Week 1 review + 3 hypotheses + script + shoot; Week 2 edit, schedule, launch ad concepts; Week 3 iterate winners, Trial Reels; Week 4 report, client meeting, plan." },
        { q: "What must happen daily regardless of the rhythm?", a: "Community management and lead checks: comments, DMs and lead alerts." }
      ]
    },
    {
      id: "soc-27",
      part: "clients",
      title: "Community and DMs: where followers become customers",
      minutes: 11,
      tags: ["Mentor", "Book", "Playbook"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "Community management: where followers become customers", who: "Olivier Blanchard, Social Media ROI; Mastery Guide" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "2.6 Community Management", who: "Research playbook (Buffer, Sprout Social, Andréa Jones)" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Profile funnel (DM new followers; message bigger accounts); Warm and low-cost channels (Facebook groups)", who: "Tayt Shelman, 10/30 and 11/4/26" },
        { doc: "ZDub Marketing Mastery Workbook Ch 17", section: "Drill D17.4 (DM to booking)", who: "Workbook + Answer Key" }
      ],
      alsoIn: ["Funnels tab (speed to lead)", "Sales tab (sell in your own style)", "Getting Clients tab (Facebook groups)"],
      idea: `Content attracts attention; **conversation converts it.** This is the bottom layer of the funnel from soc-01.

**The daily block (Social Playbook):** 20–30 minutes per client: answer all comments and DMs, leave 5–10 thoughtful comments on local accounts, reshare customer tags. Andréa Jones suggests spending about as much time engaging as creating.

**Why replies matter:** a Buffer study of nearly 2 million posts from 220,000+ accounts found replying to comments lifted engagement 5–42% across six platforms, including **+21% on Instagram** and **+9% on Facebook** (TikTok wasn't studied). (Platform data: re-check.)

**Rules for local businesses (Ch 17):**
- **Reply to every comment and DM quickly. A DM is often a lead**; speed matters as much as with a web form.
- Have **saved replies** for common questions, but **personalize** them.
- **Move warm DMs toward a next step:** a booking link, a call, a quote. Ask about their situation and goals before pitching.
- **Handle complaints publicly and calmly, then take details private.** (Sprout: 33% of public complainers want a reply directing them to DMs.)
- Repeated questions become videos (content triggers).
- DM automation ("comment PRICE for the menu") via Meta-approved tools, with fast human handoff.

**Tayt's moves for your own page (10/30, 11/4):** DM new followers with a custom Loom or voice note; message bigger accounts and comment on their posts (even a 10% reply rate adds up); in local "[city] entrepreneurs" Facebook groups, give free value and DM when there's an opening.

**On style:** Ch 17 suggests a question-led approach like NEPQ works in DMs. Zach uses NEPQ in wholesaling; Calum's view is that empathy-led selling doesn't suit most sellers. So: **sell in your own style, keep the structure** (answer, ask one question about them, guide to the next step).`,
      keyPoints: [
        "Daily 20–30 min per client: every comment and DM, 5–10 local comments, reshares.",
        "Replying lifted engagement ~21% on Instagram, ~9% on Facebook (Buffer).",
        "A DM is a lead: answer, ask one question, guide to a next step.",
        "Complaints: calm public reply, then move to DMs.",
        "DM new followers with a Loom or voice note (Tayt).",
        "Sell in your own style; keep the answer-ask-guide structure."
      ],
      why: "PMT's DMs are full of 'how much?' and 'do I need a bike?' messages. Answering fast and moving each one toward booking is where organic content finally turns into revenue.",
      example: {
        title: "PMT price DM (from the Workbook answer key)",
        before: "\"$[price]. Link in bio.\"",
        after: "\"Hey [name]! The beginner course is [price], and that includes [real inclusions]. Quick question so I point you to the right date: have you ridden at all before, or would this be your very first time?\" → answer → booking link.",
        body: "Answer the question, ask one about them, then guide to the booking link. Fill in PMT's real price and inclusions."
      },
      practice: [
        {
          prompt: "Drill D17.4: write saved-reply starters for PMT's five most common DMs/comments.",
          fields: ["Price question", "Availability / 'do you have space?'", "'Do I need my own bike/gear?'", "Location", "Complaint (public reply + DM follow-up)"],
          rubric: ["Each reply personalizes (name, their situation)", "Each asks one question about the person", "Each moves toward a next step (date, link, call)", "Complaint reply is calm and moves details to DMs", "Uses only true PMT facts (placeholders where unknown)"]
        }
      ],
      today: { task: "Do a 25-minute community block on ZDub's page: reply to every comment and DM, leave 5 thoughtful comments on Sacramento business accounts, and send one Loom or voice note to a new follower.", output: "Inbox at zero + 5 comments + 1 voice note/Loom sent", minutes: 25, suggested: false },
      check: [
        { q: "What does the daily community block include?", a: "Answer all comments and DMs, leave 5–10 thoughtful comments on local accounts, reshare customer tags, flag leads or complaints to the client. About 20–30 minutes per client." },
        { q: "How should a complaint be handled on social?", a: "Publicly and calmly, then take the details private (to DMs)." },
        { q: "What did Buffer find about replying to comments?", a: "Replying lifted engagement 5–42% across six platforms, including +21% on Instagram and +9% on Facebook (TikTok not studied)." }
      ]
    },
    {
      id: "soc-28",
      part: "clients",
      title: "Turn organic winners into ads, and ad lessons into posts",
      minutes: 10,
      tags: ["Mentor", "Book", "Playbook"],
      date: "2026-10-13",
      source: [
        { doc: "ZDub Marketing Mastery Guide Ch 17", section: "Organic and paid work together", who: "King Kong Meta Ads Playbook (via Mastery Guide)" },
        { doc: "ZDub_Guide_03 Ad Creative V2", section: "More inputs (Clayton, 8/19)", who: "Clayton Bell, 8/19/26" },
        { doc: "ZDub_Guide_04 Organic Content V2", section: "7. Content for clients > Using content and statics together; 5. Top, middle and bottom of funnel", who: "Logan McKinney, 10/13/26" },
        { doc: "Social Media Marketing Playbook (10/31/26)", section: "Part 4 Fact-Check (Organic Engine vs. Paid Lead Engine); 1.5 Gary Vaynerchuk (Day Trading Attention)", who: "Research playbook" },
        { doc: "ZDub Marketing Mastery Workbook Ch 17", section: "Recall 17.7, 17.11; Client Lab L17", who: "Workbook + Answer Key" }
      ],
      alsoIn: ["Meta Ads tab (testing metrics, promoting posts)", "Ad Creative tab"],
      idea: `Organic and paid aren't two separate jobs. They're one learning loop, and that loop is the strongest argument for ZDub's organic-plus-paid offer.

**The King Kong playbook calls organic content the cheapest creative testing there is.** If a post from the last few months got unusually high engagement or shares, promote it as an ad, adding a headline and a strong opening line.

**The four-step loop (Mastery Guide Ch 17):**
1. Post consistently.
2. Watch which posts outperform (watch time, sends, saves, follows).
3. Turn the winners into ads.
4. Feed what you learn from ads back into organic topics.

**Mentor version:** Clayton (8/19): "Organic can be the best ads and vice versa." Logan (10/13) posts statics from real job photos organically and tests the same ones as ads.

**Research version (Social Playbook):** the "two-engine system": an organic **trust engine** (proof, transformations, behind the scenes, tips) and a paid **lead engine** (offer + low-friction capture + local geo), linked by promoting organic winners (Spark Ads on TikTok, partnership or boosted posts) and feeding paid learnings back. Gary Vaynerchuk's *Day Trading Attention* calls it "strategic organic content": ads that feel like posts, and putting money behind what already works.

**One mentor caution:** Logan doesn't recommend top-of-funnel ads that are "basically boosting a post." So when you promote an organic winner, give it an ad's job: a clear headline, a stronger opening line, and a CTA to a form or booking page. How to set up and judge the ad lives in the Meta Ads tab.`,
      keyPoints: [
        "Organic is the cheapest creative testing there is (King Kong).",
        "Loop: post → spot winners → turn into ads → feed ad lessons back.",
        "'Organic can be the best ads and vice versa' (Clayton).",
        "Two engines: organic trust + paid leads, linked by promoting winners.",
        "Don't just boost: add a headline, stronger opener and a lead CTA."
      ],
      why: "For PMT, a Reel that riders already send to friends is a pre-tested ad. Running the loop means ZDub's organic work directly lowers PMT's ad costs, which is the proof Zach can sell to the next client.",
      example: {
        title: "PMT: winner to ad",
        body: "Organic: the U-turn eye-trick Reel has the highest sends per reach this month. Ad version: same footage, new opening line 'Most beginners drop the bike here. Our coaches fix it in one afternoon,' headline 'Beginner course: bikes provided,' CTA 'Book your seat.' Then: the ad's comments ask about weekday classes → next week's organic FAQ video."
      },
      practice: [
        {
          prompt: "Client Lab L17 steps 3–5: pick the best recent organic post (PMT, ZDub or your wholesaling page) and turn it into an ad brief.",
          fields: ["Winning post + the numbers that made it a winner", "Why I think it won (principle, not luck)", "New headline", "Stronger opening line", "Ad CTA + destination", "What I'll make more of next month organically"],
          rubric: ["Winner chosen by rates (sends, watch time, saves), not likes", "Reason ties to a principle (practical value, emotion, format)", "Ad version has headline, opener and a lead CTA, not a plain boost", "A lesson flows back into organic"]
        }
      ],
      today: { task: "Rank PMT's (or ZDub's) last 15 posts by sends or shares, pick the top one, and write its ad version (headline + new opening line + CTA) in the ad doc.", output: "One organic-winner ad brief", minutes: 25, suggested: false },
      check: [
        { q: "17.7 What does the King Kong playbook call organic content?", a: "The cheapest creative testing there is." },
        { q: "17.11 List the four steps of the organic-and-paid learning loop.", a: "1) Post consistently. 2) Watch which posts outperform (watch time, sends, saves, follows). 3) Turn the winners into ads. 4) Feed what you learn from ads back into organic topics." },
        { q: "Why not just hit 'boost' on a winning post?", a: "Logan doesn't recommend top-of-funnel ads that are basically boosted posts. Give the winner an ad's job: headline, stronger opening line, and a CTA to a form or booking." }
      ]
    }

  ]
});
