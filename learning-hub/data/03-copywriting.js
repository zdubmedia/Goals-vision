HUB.tab({
  id: "copywriting",
  title: "Copywriting",
  icon: "pen",
  tagline: "Words that make the right people stop, read and act.",
  intro: "This tab is your copywriting book, one bite at a time. You start with where the reader's head is (Schwartz's awareness and sophistication), then learn to write hooks that stop the right person, lead-ins that pull them into the copy, body copy that sells line by line, and closes that get the click. By the end you can write a full direct-response ad for PMT or any Sacramento trade, section by section, in a voice that sounds like a real person. Use the Ad Workshop tool at the bottom whenever you write a real ad.",
  parts: [
    { id: "awareness", title: "Part 1 · Meet the reader where they are" },
    { id: "schwartz", title: "Part 2 · Schwartz's system: desire, sophistication, technique" },
    { id: "hooks", title: "Part 3 · Headlines & hooks" },
    { id: "feed", title: "Part 4 · Lead, body, close: the feed ad" },
    { id: "craft", title: "Part 5 · Body copy that sells" },
    { id: "voice", title: "Part 6 · Voice, tone & clarity" },
    { id: "practice", title: "Part 7 · Put it together" }
  ],
  trackers: [
    { id: "swipe", title: "Schwartz swipe file", goal: "10 great ads a month, labeled (Workbook Ch 8 Swipe & Study)", fields: ["Link or description", "Awareness level + sophistication stage", "Why it started where it did (one line)"] },
    { id: "hookbank", title: "Hook bank", goal: "10 new hooks a week, at least 5 types (Social Workbook Mod 5)", fields: ["Hook text", "Type (callout, mistake, result first...)", "Client / persona", "Tested? Result"] }
  ],
  tools: [
    {
      id: "ad-workshop",
      title: "Ad Workshop",
      intro: "Mode 1, write a new ad: fill every Input for one business first, because copy is assembled from research, not invented. Then write ONE section at a time (Hook, then Lead, then Body, then Close). After each section, get corrections (from a coach, from Claude, or from your own read-aloud against the checklist), write them down, and carry every correction into the sections that follow so you never repeat a mistake. Mode 2, restructure: paste an existing ad and a reference ad with a different structure, then generate a NEW set of Inputs and rewrite the existing ad in the new structure, section by section.",
      inputs: [
        { id: "business", label: "Business & location", help: "Name, what they do in plain words, and the exact town/area you'll call out (e.g. PMT, beginner motorcycle classes, Woodland range). Proximity is a free hook component for local businesses." },
        { id: "offer", label: "The offer (what they get)", help: "The outcome plus what's included, in one or two sentences. Say the result, not the deliverables (e.g. 'a weekend beginner class, bike and helmet provided')." },
        { id: "price", label: "Price, risk reversal & real scarcity", help: "Price or starting price, any risk reversal the client truly offers, and scarcity only if it's real (seat counts, real dates). Never invent a deadline. For PMT: no refund or money-back language." },
        { id: "avatar", label: "Target avatar (trigger persona)", help: "Who they are, what they want, what's stopping them, and the moment that makes them go looking (Dara Denney's trigger persona). Not 'adults 25-45'." },
        { id: "awareness", label: "Awareness level of this audience", help: "Unaware, problem aware, solution aware, product aware or most aware. This decides where the hook starts: identity/story, problem, result + mechanism, proof, or offer." },
        { id: "sophistication", label: "Market sophistication + what competitors claim", help: "List the claims every competitor already makes, then pick the stage (1-5). Stage 3-4 means lead with a mechanism; stage 5 means lead with identity." },
        { id: "desire", label: "Core desire / dream outcome", help: "The strongest mass desire this product honestly satisfies (freedom, safety, status, time, money...), in the customer's words." },
        { id: "pain", label: "Core pain, in their words", help: "Peel the onion: write the surface pain, then the layer under it, then the layer under that. Use phrases from reviews, comments and sales calls." },
        { id: "inaction", label: "Cost of inaction", help: "What doing nothing costs, ideally a real number bigger than the ticket (ask the owner). For PMT, avoid safety fear claims you can't back up." },
        { id: "objections", label: "Top 3 objections", help: "The skeptical thoughts that stop the booking ('I'll look like a fool', 'I don't own a bike', 'Is it worth the money?'). Each one needs an answer in the body." },
        { id: "proof", label: "Proof (real only)", help: "Real numbers, reviews, demos, before/after, a scoreboard. Something checkable. Never invent stats, results or reviews." },
        { id: "mechanism", label: "Unique mechanism / why us", help: "The real 'how' behind the result, with a name if possible, explained so a 10-year-old gets it. It must be something the client actually does." },
        { id: "cta", label: "Call to action", help: "ONE next step, small and specific, saying what's in it for them. Note the button (e.g. Learn More) and the spoken/written CTA separately." },
        { id: "voice", label: "Voice & tone", help: "3-4 traits as 'this, not that', plus banned words (PMT: no 'coach', 'cheap', 'easy', 'discount', 'guaranteed'; no promise of passing the endorsement)." },
        { id: "format", label: "Format & length", help: "Video script (30 sec to 3 min, 'whatever it takes'), static (headline inside the image, one CTA), or primary text (up to ~2,200 characters, lead-in above 'See more')." },
        { id: "angle", label: "The ONE angle + what we'll learn", help: "One reason to buy per ad. Finish the sentence: 'If this wins, it tells us that ___ matters to ___.'" }
      ],
      sections: [
        { id: "hook", label: "Hook", help: "The first 1-3 seconds or first line. Its only job is to stop the RIGHT person and make them want the next line. Start where their awareness is, call out who it's for, and open a loop you don't close yet. Spend the most thought here; the rest can be looser (Cam, 9/17).", checklist: ["Calls out the audience and/or the town", "Starts at this audience's awareness level (no 'book now' to cold traffic)", "No greeting, no business name first", "Specific: a number, a time frame, a place or a named mechanism", "Opens a loop the body will close", "For video: visual, spoken and text layers all work on mute", "At least 2 of Hormozi's 7 components (recency, relevancy, celebrity, proximity, conflict, unusual, ongoing)"] },
        { id: "lead", label: "Lead (problem / slippery lead-in)", help: "The first lines after the hook. For primary text it's the 1-3 lines above 'See more'; for a video it's the problem section that 'pours fuel on the fire'. Continue the hook's curiosity, don't repeat it. Name the pain in their words, add one specific unexpected detail, and end mid-thought.", checklist: ["Continues the hook's curiosity instead of restating it", "Names the pain in the customer's words (peel the onion one layer deeper)", "One specific, unexpected detail", "Concentration: shows why the usual alternatives fail (DIY, the cheapest bid, a friend in a parking lot)", "Ends mid-thought / keeps the loop open", "Applies every correction from the Hook"] },
        { id: "body", label: "Body (solution, mechanism, proof)", help: "Reveal the solution and the named mechanism, prove it, and close each loophole before the reader can leave. Turn every feature into a benefit with '...which means...'. One angle only. Grade 3-5 reading level, short lines.", checklist: ["Solution introduced with a named, real mechanism", "Every feature has a 'which means' benefit", "Proof is real and checkable", "Top objections answered (closed loopholes)", "About them: 'you/their situation' beats 'we'", "One angle, no extra ideas", "Reads clean out loud; no AI phrases, no em dashes", "Applies every correction from Hook and Lead"] },
        { id: "close", label: "Close (CTA)", help: "One clear, easy next step. Repeat the hook's call-out or fear/desire, give a reason to act now only if real, and say what's in it for them. Low-pressure button on cold traffic (Learn More), direct ask on warm/hot.", checklist: ["Exactly one CTA", "Matches the audience temperature", "Repeats the hook's call-out or stakes", "Says what's in it for them", "Scarcity or deadline only if real", "Applies every correction from earlier sections"] }
      ],
      restructure: {
        intro: "Use this when an ad is working okay but you want to test a different structure (e.g. a PAS primary-text ad rebuilt as a hook-problem-solution-CTA video, or a static rebuilt as a story). Paste both ads, note what must stay true, then fill a NEW Inputs list drawn from the existing ad and rewrite it section by section in the reference ad's structure. Borrow the structure, never the words.",
        fields: [
          { id: "existing", label: "Existing ad" },
          { id: "reference", label: "Reference ad (new structure)" },
          { id: "notes", label: "What to keep / what to test" }
        ]
      }
    }
  ],
  lessons: [
    {
      id: "cw-01",
      part: "awareness",
      title: "Talk to the reader's awareness level, not yours",
      minutes: 12,
      tags: ["Course", "Book"],
      source: [
        { doc: "Lesson 2.4 — Market Awareness", section: "What market awareness is; The five levels up close", who: "Course lesson (Eugene Schwartz framework)" },
        { doc: "ZDub Marketing Mastery Guide, Ch 8 — Breakthrough Advertising: Schwartz's System", section: "Stage one: the market's state of awareness (pp. 81–84)", who: "Eugene M. Schwartz, Breakthrough Advertising (1966)" },
        { doc: "Lesson 2.2 — How To Make Someone Buy Something", section: "Why the problem has to come first (the awareness ladder)", who: "Course lesson" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 8", section: "Recall 8.2, 8.3, 8.12; Drills D8.1, D8.2 + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["Mastery Guide Ch 8", "Lesson 2.2", "Lesson 2.4", "Social Workbook Mod 1"],
      idea: `Eugene Schwartz introduced **market awareness** in *Breakthrough Advertising* (1966): how much your prospect already knows about their problem, the possible fixes, and you. The first principle: **you can't skip steps in someone's head.** A message that assumes knowledge they don't have reads like it was written for somebody else.

Lesson 2.4 uses a GPS analogy: directions only work if they start from where you actually are. "Turn left on Main Street" is useless if you're still on the highway two towns away.

The five rungs, from coldest to hottest:

1. **Unaware.** Doesn't know or won't admit the problem. Product, price, even desire fall flat. You'd have to start with *them*: identity, a belief, a story, a curiosity.
2. **Problem aware.** Feels the pain, doesn't know a fix. Name the problem in their words and what it costs, then show the way out.
3. **Solution aware.** Wants the result, knows fixes exist, doesn't know you. Name the result and show *why your approach works* (the mechanism).
4. **Product aware.** Knows you, isn't convinced. Lead with proof: results, reviews, a better mechanism, a reason the old objection no longer applies.
5. **Most aware.** Knows you, wants it, just hasn't bought. State the product and the deal: name, price, date, how to book. Long copy is wasted here.

> "The less aware the market, the further from the product your headline must start, and the more copy you need to bring them along." (Mastery Guide Ch 8)

The classic local-ad failure is writing a most-aware ad ("Call today! 10% off!") to a cold audience scrolling Instagram. Lesson 2.2 adds that "cold" describes how well someone knows *you*, not how well they know their problem. A nervous would-be rider near Woodland already knows she wants to ride and is scared. The only thing she doesn't know is PMT.`,
      keyPoints: [
        "Awareness = how much they know about the problem, the fixes, and you",
        "You can't skip steps in someone's head (the GPS rule)",
        "Headline start points: identity/story → problem → result + mechanism → proof → offer",
        "Colder = longer, more indirect copy; hotter = shorter, more direct",
        "Cold means they don't know YOU, not that they don't know their problem"
      ],
      why: "Every ZDub ad, caption and landing page starts with this decision. Get the rung wrong and even great copy reads like spam, because it answers a question the reader isn't asking yet.",
      example: {
        title: "PMT: one offer, five openings",
        before: "Cold Instagram ad: “Beginner Motorcycle Class: Saturday & Sunday seats open, Woodland. Book now.” (A most-aware headline shown to people who don't know PMT.)",
        after: "Same audience, problem-aware opening: “Want to ride, but scared you'll drop the bike in front of everyone?” Save the “seats open, book now” line for people who already visited the class page.",
        body: "Both lines come from the Mastery Guide. Neither is wrong; each is right for a different rung. The fix is matching the line to the audience, not rewriting the offer."
      },
      table: {
        head: ["Level", "What's in their head (PMT)", "Lead with", "Example opener"],
        rows: [
          ["Unaware", "“I'll ride someday.” Not thinking about it.", "Identity, story, curiosity (or skip on cold paid ads, see cw-03)", "“The one thing every ‘someday I'll ride’ person has in common.”"],
          ["Problem aware", "“I want to ride but I'm scared I'll look like a fool.”", "The problem in their words + what it costs", "“Want to ride, but scared you'll drop the bike in front of everyone?”"],
          ["Solution aware", "“Maybe I should take a class.”", "The result + why your approach works (mechanism)", "“Ride with confidence in one weekend, even if you've never touched a clutch.”"],
          ["Product aware", "“I've seen PMT. Are they legit?”", "Proof", "“The same sentence keeps showing up in our beginner reviews: ‘I was nervous for nothing.’” (only with real reviews)"],
          ["Most aware", "“I want it. When's the next class?”", "The offer + a reason to act now", "“Beginner class, Woodland: Saturday & Sunday seats open. Save your seat.”"]
        ]
      },
      practice: [
        {
          prompt: "Drill D8.2 for PMT: write one headline for each awareness level for PMT's beginner class. Label each. (PMT copy rules: no “coach,” “cheap,” “easy,” “discount,” “guaranteed,” and never promise passing the endorsement.)",
          fields: ["Unaware", "Problem aware", "Solution aware", "Product aware", "Most aware"],
          rubric: ["Each headline starts where that reader's head is, not where PMT's is", "The further down the ladder, the further from the product the headline starts", "Most-aware version leads with the offer, date or seats", "Product-aware version uses proof you can actually show", "No banned PMT words, no jargon"],
          model: "Unaware: “Every rider you've ever envied in traffic started exactly where you are.”\nProblem aware: “Want to ride, but picturing yourself as the slowest one in class?”\nSolution aware: “Go from never-touched-a-clutch to riding the range in one weekend. Bike and helmet provided.”\nProduct aware: “What first-timers say after a PMT weekend: [real review quote].”\nMost aware: “PMT beginner class, Woodland. [Real date] seats are open. Save your seat.”"
        },
        {
          prompt: "Drill D8.1 · Place the prospect. Write the most likely awareness level for each audience and one word on why.",
          fields: ["Cold Instagram audience, 30–50, within 25 miles", "People who watched 75% of your last reel", "Someone who Googled “motorcycle class near me”", "Homeowner who's never thought about attic insulation", "Past lead who got a quote last month but didn't book", "Someone who Googled “why does my breaker keep tripping”"],
          rubric: ["Cold scroll audiences land low (unaware/problem aware)", "Engagers and searchers sit in the middle", "Past leads are product or most aware", "You can say WHY for each"],
          model: "1) Mostly unaware or problem aware. 2) Solution or product aware: they've seen you and engaged. 3) Solution aware, maybe product aware. 4) Unaware. 5) Product aware or most aware: they know you; something stopped them. 6) Problem aware: they feel the symptom but don't know the fix. (Workbook Answer Key, Ch 8)"
        }
      ],
      today: { task: "Social Workbook Exercise 1B on PMT: open PMT's last 9 posts or live ads and write the awareness level each one speaks to. Note which level is ignored and write one post or ad for it.", output: "A 9-row awareness audit + 1 new ad/post for the ignored level in PMT's ad doc", minutes: 30, suggested: false },
      check: [
        { q: "A prospect knows your training school, likes it, and just hasn't booked yet. Where should the headline start? (8.2)", a: "With the product and the offer: dates, price and how to book. That's most aware; long copy is wasted on them." },
        { q: "Which headline is problem aware: “Beginner class: Saturday seats open,” “The one thing every ‘someday I'll ride’ person has in common,” “Want to ride, but scared you'll drop the bike in front of everyone?” (8.3)", a: "“Want to ride, but scared you'll drop the bike…” It starts with the problem in their words. The seats line is most aware; the “someday” line is unaware." },
        { q: "Name the five levels from most to least aware and where the headline starts for each. (8.12)", a: "Most aware: product + offer. Product aware: proof and superiority. Solution aware: the result or desire (plus why your way works). Problem aware: the problem, in their words. Unaware: the prospect themselves (identity, story, belief, curiosity)." }
      ]
    },
    {
      id: "cw-02",
      part: "awareness",
      title: "Only about 3% are buying today, so write for the other 97% too",
      minutes: 8,
      tags: ["Course"],
      source: [
        { doc: "Lesson 2.4 — Market Awareness", section: "Most of the market isn't buying yet (Chet Holmes' buyer pyramid)", who: "Course lesson citing Chet Holmes, The Ultimate Sales Machine (2007)" },
        { doc: "Lesson 2.3 — Meta vs. Other Platforms", section: "The 95:5 rule", who: "Course lesson citing the LinkedIn B2B Institute and John Dawes (Ehrenberg-Bass)" }
      ],
      alsoIn: ["Lesson 2.3"],
      idea: `Sales trainer Chet Holmes described a **buyer pyramid** in *The Ultimate Sales Machine* (2007). At any moment, roughly:

- **3%** of a market is buying now
- **7%** is open to it
- **30%** aren't thinking about it
- **30%** think they're not interested
- **30%** know they're not interested

Lesson 2.4 is honest that these are rules of thumb from his sales career, not lab data, but they line up with the **95:5 rule** from Lesson 2.3: only about 5 in 100 business buyers are in market at any time. Search ads compete for the 5. Feed ads reach the other 95 before they start looking.

The copywriting consequence: **if you only write for people ready to buy, you're writing for about 3% of the market.** "Book now, seats open" is a 3% ad.

Now the key distinction. **The pyramid measures timing; the awareness ladder measures knowledge.** They're two different dials. A med spa can know exactly why Tuesdays are slow (problem aware) and still not be shopping for an agency this month. A Roseville homeowner can know their roof is 25 years old and not be shopping for a roofer until the first storm. That's where most of your cold audience sits: **problem aware, not buying yet.**

So a cold ad's job is usually not to close the 3%. It's to make the right problem-aware person feel the gap, remember you, and raise a hand (a click, a follow, a lead form) when their timing turns. That's why later lessons push low-pressure CTAs and value-first hooks on cold traffic, and save the direct offer for retargeting.`,
      keyPoints: [
        "Holmes' pyramid: 3% buying, 7% open, 30/30/30 not thinking, think not interested, know not interested",
        "Rules of thumb, not lab data; they match the 95:5 rule",
        "Timing (pyramid) and knowledge (ladder) are separate dials",
        "Most cold traffic is problem aware but not buying yet",
        "Write ads that move the 97%, not just ads that close the 3%"
      ],
      why: "Local clients judge ads by bookings this week. Knowing the pyramid lets Zach explain why cold ads warm people up and retargeting closes them, and keeps him from writing only 3% ads.",
      example: {
        title: "PMT: a 3% ad vs a 30% ad",
        before: "“Beginner class this Saturday. Book now!” (Speaks only to the few already shopping.)",
        after: "“Sitting in traffic watching riders roll by? Most of them started out as nervous as you. Here's what the first hour of a beginner class actually looks like.” (Speaks to the not-thinking-about-it-yet crowd, using a situation from the Andromeda PMT persona.)",
        body: "The second ad doesn't ask for a booking. It plants the idea, earns a click or a view, and builds the retargeting audience that later sees the 3% ad."
      },
      practice: [
        {
          prompt: "For PMT, write one short ad opening for three slices of the pyramid. Make each fit that slice's timing.",
          fields: ["The 3% buying now", "The 7% open to it", "The 30% not thinking about it (but problem aware)"],
          rubric: ["The 3% line is direct: offer, date, seat", "The 7% line gives a reason to look closer (proof, what's included)", "The 30% line starts with a situation or feeling, not the class", "None of them uses banned PMT words"],
          model: "3%: “Woodland beginner class, [real date]. [Real number] seats left. Save yours.”\n7%: “Bike and helmet provided, small groups, and everyone's new. Here's what's included in a PMT weekend.”\n30%: “This is your year to finally ride? Here's the part nobody tells you about the first class.”"
        }
      ],
      today: { task: "Audit PMT's (or a prospect's) live ads in Ads Manager or the Meta Ad Library. Label each ad as written for the 3%, the 7% or the 30%. If every ad is a 3% ad, write one 30% ad to add to the next test.", output: "Ad-by-ad pyramid labels + one new 30% ad draft", minutes: 25, suggested: false },
      check: [
        { q: "What are Holmes' five pyramid slices?", a: "About 3% buying now, 7% open to it, 30% not thinking about it, 30% think they're not interested, 30% know they're not interested." },
        { q: "What's the difference between the buyer pyramid and the awareness ladder?", a: "The pyramid measures timing (are they shopping now?); the ladder measures knowledge (what do they know about the problem, fixes and you?). Someone can be problem aware and still not buying this month." },
        { q: "If you only write for people ready to buy, how much of the market are you writing for?", a: "About 3%." }
      ]
    },
    {
      id: "cw-03",
      part: "awareness",
      title: "Cold traffic: skip the unaware, or hook them with identity?",
      minutes: 12,
      tags: ["Course", "Book", "Disagreement"],
      source: [
        { doc: "Lesson 2.2 — How To Make Someone Buy Something", section: "Skip the bottom rung; Reactance", who: "Course lesson (Schwartz; Jack Brehm, A Theory of Psychological Reactance, 1966)" },
        { doc: "Lesson 2.4 — Market Awareness", section: "The five levels up close (“Unaware: Don't target them”)", who: "Course lesson" },
        { doc: "ZDub Marketing Mastery Guide, Ch 8", section: "Key Idea + ZDub Application: Match the ad to the funnel (p. 84)", who: "Eugene M. Schwartz, Breakthrough Advertising" },
        { doc: "The Ultimate Social Media Workbook (11/1/26)", section: "Module 1: Know your customer (awareness table)", who: "Social Workbook" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 8", section: "Client Lab L8 · The awareness-matched campaign + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["Social Workbook Mod 1"],
      idea: `Your sources agree on the ladder but **disagree on what to do with the bottom rung on cold traffic.** Here are both positions side by side. Don't pick one blindly; test.

**Position A: skip the unaware (Course Lessons 2.2 and 2.4).** To sell an unaware person you'd have to convince them the problem exists, then that it's worth fixing, then that you're the one to fix it: "three sales packed into one ad." Schwartz said copy can't create desire, only channel desire that already exists. The umbrella analogy: don't sell umbrellas on a sunny day; sell to the people already standing in the rain. On cold traffic there are plenty of them. In this view, **cold traffic lives on the problem-aware and solution-aware rows.**

**Position B: reach them with identity and story (Mastery Guide Ch 8, Social Workbook Mod 1).** The Guide says cold Meta audiences are *mostly unaware or problem aware*, so use story, identity and problem hooks. The Social Workbook says unaware people get entertaining or surprising content tied to their life.

**Where both agree:**
- Never show a most-aware ad ("Book now, 20% off") to a cold audience.
- On cold traffic, lead with *their* problem, not your solution. Lesson 2.2 cites Jack Brehm's **reactance**: when people feel pushed, they push back to protect their freedom. Lead with the solution and a cold prospect feels sold to; lead with their problem and *they* decide it needs fixing.
- Match each ad to the audience's temperature.

A practical reading: paid lead ads aim at the problem-aware middle (A); organic posts and story ads can afford to start with identity (B). Then run Workbook **Client Lab L8**, an awareness-matched campaign:

1. **Cold** (unaware or problem aware): two ads with story, identity or problem hooks.
2. **Warm** (video viewers, engagers, site visitors): two ads with proof, mechanism and objections handled.
3. **Hot** (past leads, abandoned bookings): one short ad with the offer and a deadline, only if the deadline is real.

The Answer Key adds: if cold ads get clicks but no bookings, that's normal. Their job is to warm people up for the retargeting ads. Track cost per lead and booking rate *by temperature*.`,
      keyPoints: [
        "Course: skip unaware on cold ads; that's three sales in one ad",
        "Guide/Social Workbook: reach unaware people with identity, story, surprise",
        "Everyone agrees: no most-aware ads to cold traffic",
        "Reactance: lead with their problem so they decide, not you",
        "Run cold / warm / hot ads with different copy, and judge each by its own job"
      ],
      why: "PMT and every trade client will want 'book now' ads everywhere. This lesson gives Zach the reasoning, and a campaign shape, for writing different copy for each temperature.",
      example: {
        title: "PMT awareness-matched campaign (sketch)",
        body: "Cold A (problem): “Want to ride, but scared you'll drop the bike in front of everyone?” Cold B (identity): “For adults who've always wanted to ride and keep saying ‘next year.’” Warm A (mechanism): the first hour from zero, walking the bike, then the clutch one step at a time. Warm B (proof): a real nervous-student review. Hot: “Your seat for [real date] is still open. [Real number] left.” Cold ads never lead with price or “book now.”"
      },
      practice: [
        {
          prompt: "Client Lab L8 for PMT: write all five ads (headline + 1–2 lines each). Note the sophistication stage you're writing for.",
          fields: ["Cold ad 1 (story, identity or problem hook)", "Cold ad 2", "Warm ad 1 (mechanism / objection handled)", "Warm ad 2 (real proof)", "Hot ad (offer + real deadline)", "Sophistication stage you assumed, and why"],
          rubric: ["Cold ads never lead with price or 'book now'", "Warm ads introduce the mechanism and real proof", "Hot ad is short and direct", "Any deadline or seat count is real", "No banned PMT words"],
          model: "Use the example above as a pattern. A strong set makes it obvious which audience each ad is for if you shuffled them."
        },
        {
          prompt: "Write the two positions in your own words, then say which you'd test first for PMT's next cold campaign and why.",
          fields: ["Position A (skip unaware) in one sentence", "Position B (identity/story) in one sentence", "What I'll test first for PMT, and how I'll judge it"],
          rubric: ["States both fairly", "Names a measurable way to judge (cost per lead, booking rate by temperature)", "Doesn't use a most-aware ad on cold traffic"]
        }
      ],
      today: { task: "Write the five Client Lab L8 ads for PMT and put them into a three-ad-set plan (cold / warm / hot) in PMT's campaign doc. Mark which metrics you'll compare.", output: "5 ads + a 3-temperature campaign outline", minutes: 45, suggested: false },
      check: [
        { q: "Why does Lesson 2.2 say to skip the unaware on cold traffic?", a: "You'd need three sales in one ad: convince them the problem exists, that it's worth fixing, and that you're the fix. Copy can't create desire, only channel it." },
        { q: "What is reactance and how does it shape cold copy?", a: "Brehm found people push back when they feel pushed, to protect their freedom to choose. So lead cold ads with their problem, not your solution; then they're the one deciding it needs fixing." },
        { q: "In an awareness-matched campaign, what should the hot ad look like, and what's normal for the cold ads?", a: "Short and direct: the offer and a deadline (only if real). Cold ads getting clicks but few bookings is normal; their job is to warm people up for retargeting." }
      ]
    },
    {
      id: "cw-04",
      part: "schwartz",
      title: "You can't create desire, only channel it",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 8", section: "The three things you're working with (p. 81)", who: "Eugene M. Schwartz, Breakthrough Advertising; Robert C. Worstell, Breakthrough Copywriter 2.0" },
        { doc: "ZDub Marketing Mastery Guide, Ch 3 — Know the Customer", section: "You can't create desire. You can only channel it (mass desire)", who: "Eugene M. Schwartz" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 · Applied to PMT: Persona 1, motivations/situations/objections", who: "ZDub research playbook" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 8", section: "Recall 8.1 + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["Mastery Guide Ch 3"],
      idea: `Schwartz's opening claim in *Breakthrough Advertising*: advertising **cannot create desire**. It can only take a hope, dream, fear or desire that already exists in thousands of people and **focus it onto a product.** He calls that public want **mass desire**, and it comes from two places (Guide Ch 3):

- **Permanent forces:** wants that never go away: health, attractiveness, safety, status, love, security, freedom.
- **Forces of change:** new wants created by new conditions (technology, fears, fashions, economics). Catch one early and it's powerful.

Judge a desire by **intensity** (how badly), **staying power** (lasts or fades) and **scope** (how many share it).

Ch 8 adds that three forces already live in the prospect's mind. You don't create any of them; you channel them:

1. **Desires:** the mass desire the product can satisfy.
2. **Identifications:** the roles people want to play and the achievements that prove it. People want to *be* someone, not just *have* something.
3. **Beliefs:** what they already accept as true. Persuasion works by connecting your claim to beliefs they already hold, not by fighting them.

So copy, to Schwartz, is less *written* than **assembled** from research about these three forces. The headline's job is to connect the strongest desire to the product in a way the prospect is ready to hear (which depends on awareness and sophistication, the next lessons).

For PMT, the Andromeda research already gives you the raw material. Desire: "the freedom of riding on the weekends." Identification: "My buddy just got a bike and I want to ride with him"; "This is my year." Belief: "Family keeps saying motorcycles are dangerous", which you don't argue with; you connect to it: "that's exactly why you learn it right from day one."`,
      keyPoints: [
        "Copy channels existing desire onto a product; it never manufactures want",
        "Mass desire: permanent forces + forces of change; judge by intensity, staying power, scope",
        "Three forces: desires, identifications (who they want to be), beliefs (what they already accept)",
        "Connect to beliefs; don't fight them",
        "Copy is assembled from research, not invented"
      ],
      why: "When an ad flops, the cause is usually aiming at a weak desire or fighting a belief. Doing this research first is how Zach writes faster and better than someone staring at a blank page.",
      example: {
        title: "Roofer: fighting a belief vs connecting to it",
        before: "“Roofers aren't all crooks! We're honest!” (Argues with the belief that roofers upsell.)",
        after: "“You've probably heard roofers love to sell you a roof you don't need. That's why we send you a video of every inch of yours before anyone quotes a thing.” (Agrees with the belief, then shows how this roofer is different.)",
        body: "Desire: a safe, dry home without being ripped off. Identification: the smart homeowner who checks before paying. Belief: contractors upsell. The 'after' uses all three."
      },
      practice: [
        {
          prompt: "Fill the three forces for PMT's nervous first-timer and for a Sacramento HVAC company's homeowner. Use customer words where you can (reviews, comments, the Andromeda persona tables).",
          fields: ["PMT: strongest desire", "PMT: identification (who they want to be)", "PMT: a belief to connect to", "HVAC: strongest desire", "HVAC: identification", "HVAC: a belief to connect to"],
          rubric: ["Desires are permanent forces (freedom, safety, comfort, status...), not product features", "Identification is a role ('the rider', 'the smart homeowner')", "Beliefs are things they already think, phrased their way", "Nothing invented about the client"],
          model: "PMT: desire = freedom on the weekends; identity = 'a real rider who learned it right'; belief = 'motorcycles are dangerous' → connect: 'which is why you start with people who teach it right.' HVAC: desire = a cool house in a Roseville July without a shock bill; identity = 'the homeowner who handles things before they break'; belief = 'AC companies always find something to sell' → connect with a flat, written price before work starts."
        }
      ],
      today: { task: "Start PMT's research sheet: pull 10 phrases from PMT's Google reviews and comments and sort each under Desire, Identification or Belief. Mark the one desire with the highest intensity and scope.", output: "A 10-row desire/identification/belief bank for PMT", minutes: 30, suggested: false },
      check: [
        { q: "Schwartz describes three forces already inside the prospect's mind. What are they? (8.1)", a: "Desires, identifications and beliefs. You channel them; you don't create them." },
        { q: "What are the two sources of mass desire?", a: "Permanent forces (health, safety, status, love, freedom...) and forces of change (new conditions like technology, fears, fashions, economics)." },
        { q: "Why connect to beliefs rather than fight them?", a: "Persuasion works by linking your claim to what people already accept as true. Arguing with a belief makes them defend it." }
      ]
    },
    {
      id: "cw-05",
      part: "schwartz",
      title: "Market sophistication: what claim can still work here?",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 8", section: "Stage two: the market's state of sophistication (pp. 84–85)", who: "Eugene M. Schwartz, Breakthrough Advertising" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 8", section: "Recall 8.5–8.7, 8.13; Drill D8.3 + Answer Key", who: "Workbook" }
      ],
      idea: `Awareness is about the **prospect**. Sophistication is about the **market**: how many similar claims have they already heard? The first product in a market can say something simple. By the fifth competitor, people have heard every claim and believe none of them. Schwartz's five stages:

1. **First:** nothing like this yet. Be simple and direct; the claim itself is news.
2. **Second:** competitors copy your claim. **Enlarge it:** faster, more, bigger, more specific.
3. **Third:** every big claim has been made and people are tired. **Introduce a new mechanism**: a new *how*. The how becomes the news.
4. **Fourth:** competitors have mechanisms too. **Elaborate and improve the mechanism:** easier, quicker, surer, fewer drawbacks.
5. **Fifth:** they disbelieve everything. **Shift to identification:** stop arguing claims; sell the experience, the identity and the relationship.

Most local service markets (roofing, HVAC, plumbing, dentistry, gyms, motorcycle training) sit at **stages 3 to 5.** Everyone already says "quality, licensed and insured, family owned, best prices, 5-star service." The prospect doesn't hear those words anymore.

The Guide's stage-4 roofing example shows the climb:
- Stage-2 thinking: "Best roofing in Sacramento! Lifetime warranty!" (everyone says it)
- Stage 3: "Our 15-point drone inspection finds the hidden leaks other roofers miss."
- Stage 4: "Same-day drone inspection: a 3-minute video of every inch of your roof before anyone climbs a ladder."
- Stage 5: "For homeowners who refuse to be upsold: you'll see your roof the way we see it, and you decide."

> In a crowded market, the mechanism, the specific "how," is often the only believable thing left to say. Name it, explain it, show it. (Guide Ch 8)

How to diagnose (Drill D8.3): collect the main claims of about eight competitors from the Meta Ad Library, Google ads and homepages, list every claim that appears more than once, then decide the stage.`,
      keyPoints: [
        "Sophistication = how many similar claims the market has heard",
        "Stages: simple claim → bigger claim → new mechanism → better mechanism → identification",
        "Most local markets are stage 3–5",
        "Generic claims (licensed, family owned, 5-star) are invisible",
        "Diagnose from competitors' repeated claims before writing"
      ],
      why: "This is why 'Best roofer in Sacramento' fails for ZDub's trade clients. Diagnosing the stage tells Zach whether to lead with a mechanism or an identity, before he writes a word.",
      example: {
        title: "Motorcycle training: likely stage 4–5",
        body: "If every school says 'certified instructors, small classes, all skill levels,' those claims are wallpaper. A stage-4 PMT line improves the mechanism: “Your first hour starts with the bike off. You walk it, then learn the clutch one step at a time.” (Confirm with PMT that this is how class runs.) A stage-5 line sells identity: “For adults who want to learn it right from day one, not pick up bad habits from a friend in a parking lot.”"
      },
      table: {
        head: ["Stage", "What the market has heard", "What to do"],
        rows: [
          ["1. First", "Nothing like this yet", "State the claim simply; it's news"],
          ["2. Second", "Your claim, from competitors", "Enlarge it: faster, more, more specific"],
          ["3. Third", "Every big claim; tired of them", "New mechanism: the how is the news"],
          ["4. Fourth", "Competitors' mechanisms too", "Improve the mechanism: easier, quicker, surer"],
          ["5. Fifth", "Everything; disbelieves it all", "Identification: experience, identity, relationship"]
        ]
      },
      practice: [
        {
          prompt: "Drill D8.3 (short version): pick PMT's category or one Sacramento trade. List the claims that repeat across competitors, name the stage, and write two headlines that fit it.",
          fields: ["Category + competitors checked", "Claims that appear more than once", "Stage (1–5) and why", "Headline 1 for that stage", "Headline 2 for that stage"],
          rubric: ["Claims come from real competitor ads/pages", "Stage choice is justified by the repetition", "Stage 3–4 headlines lead with a named, real mechanism", "Stage 5 headlines lead with identity", "No generic 'quality/family owned' claims"],
          model: "Roofing (Sacramento): repeated claims = licensed & insured, family owned, free estimates, lifetime warranty, 5-star. Stage 4–5. H1 (stage 4): “See a video of every inch of your roof before anyone quotes you a dime.” H2 (stage 5): “For homeowners who refuse to be upsold.”"
        }
      ],
      today: { task: "Do Drill D8.3 for real: open the Meta Ad Library, pull the main claim from 8 competitors of PMT (or a roofing prospect), and paste them into a sheet. Diagnose the stage and write two headlines.", output: "8-competitor claim sheet + stage diagnosis + 2 headlines", minutes: 40, suggested: false },
      check: [
        { q: "Awareness describes the prospect. What does sophistication describe? (8.5)", a: "How many similar claims the market has already heard." },
        { q: "In a stage-3 market, what does Schwartz say to do? (8.6)", a: "Introduce a new mechanism: a new 'how' the result is achieved. At stage 4 you improve it; at stage 5 you shift to identification." },
        { q: "Name the five stages and what to do at each. (8.13)", a: "1) State the claim simply. 2) Enlarge the claim. 3) Introduce a new mechanism. 4) Elaborate and improve the mechanism. 5) Shift to identification." }
      ]
    },
    {
      id: "cw-06",
      part: "schwartz",
      title: "Name the mechanism: the real “how” behind the result",
      minutes: 10,
      tags: ["Book", "Mentor", "Course"],
      date: "2026-09-17",
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 8", section: "Mechanization; Key Idea (pp. 85–87)", who: "Eugene M. Schwartz" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 8", section: "Drill D8.4 · Name the mechanism + Answer Key", who: "Workbook" },
        { doc: "Lesson 2.4 — Market Awareness", section: "The five levels up close (solution aware: lead with the mechanism)", who: "Course lesson" },
        { doc: "ZDub Guide 03 — Ad Creative (V2)", section: "New in V2: Writing a video ad live — Structure and open loops", who: "Cam, Follow Ad call, 9/17/26" }
      ],
      idea: `**Mechanization** is Schwartz's answer to a disbelieving market: people believe claims they can *see working*. Explain how the product produces the result, in concrete steps or a vivid analogy. It's the antidote to stage-3 disbelief and the thing solution-aware prospects need most. Lesson 2.4's med spa example: "Most med spa ads chase new clients for Saturdays. Ours are built to fill your slow days first." That second sentence is a mechanism.

What makes a good mechanism (Workbook Answer Key, D8.4):
- **Real:** the client actually does it. A fake "proprietary system" collapses at the first sales call.
- **Specific:** steps, not adjectives.
- **Easy to picture:** a 10-year-old could explain it back.

The Answer Key's model: "**The Photo-First Quote:** you text us a photo of your panel, and a licensed electrician sends a line-item price before anyone visits. That price is locked."

**Give it a name.** A named mechanism is easier to remember and easier to build curiosity around. Mentor Cam showed this live on the 9/17 call: he dropped the name early to open a loop ("I've got something special for you. It's called Triple P") and only revealed it in the solution section as "the Pilot Proof Program." The name opens a question the reader wants closed.

How to find one for a client: ask the owner to walk you through exactly what happens from first call to finished job. Somewhere in there is a step competitors skip, or do differently. Name that step, explain it in two sentences, and show it on camera if you can.`,
      keyPoints: [
        "People believe what they can see working: explain the how",
        "A good mechanism is real, specific and easy to picture",
        "Name it (Photo-First Quote, Triple P) so it sticks and opens a loop",
        "Solution-aware and stage-3/4 markets need the mechanism most",
        "Find it by walking through the client's actual process"
      ],
      why: "Every local trade sounds the same. A real, named mechanism is often the only believable differentiator ZDub can put in a client's ad, and in ZDub's own ads.",
      example: {
        title: "From claim to mechanism (electrician)",
        before: "“Honest, upfront pricing you can trust.”",
        after: "“The Photo-First Quote: text us a photo of your panel. A licensed electrician sends a line-item price before anyone visits. That price is locked.”",
        body: "The 'after' gives the reader something to picture and to check. It also answers the hidden objection (price creep) without saying the word 'honest'."
      },
      practice: [
        {
          prompt: "Drill D8.4: for three businesses, find the real how behind the result, give it a name, and explain it in two sentences a 10-year-old would understand. Mark anything you still need to confirm with the owner.",
          fields: ["PMT: name + 2-sentence mechanism", "A Sacramento trade (roofer, HVAC, pressure washer...): name + mechanism", "ZDub Media itself: name + mechanism", "What I need to confirm with each owner"],
          rubric: ["Each mechanism is something the business really does", "Named, short, memorable", "Concrete steps, no adjectives", "A 10-year-old could repeat it", "Nothing invented to sound impressive"],
          model: "ZDub (example only if true): “The 30-Day Scoreboard: before we spend a dollar we agree on the number that counts as a lead, then you get a one-page scoreboard every week showing spend, leads and cost per lead.” PMT (confirm first): “The From-Zero First Hour: you start with the bike off and walk it, then learn the clutch one step at a time. Bike and helmet provided.”"
        }
      ],
      today: { task: "Book 15 minutes with PMT's owner (or use your notes) and ask: 'Walk me through exactly what happens in the first hour of a beginner class.' Turn the answer into one named mechanism and one solution-aware headline.", output: "1 confirmed, named mechanism for PMT + 1 headline", minutes: 30, suggested: false },
      check: [
        { q: "Why does mechanization work in a stage-3 market?", a: "Everyone has made the big claims and people disbelieve them. Showing how the result happens gives them something they can believe." },
        { q: "What three qualities make a good mechanism?", a: "Real (the client actually does it), specific, and easy to picture." },
        { q: "How did Cam use the mechanism's name in his 9/17 ad?", a: "He dropped the name early (“It's called Triple P”) to open a loop, then revealed what it was (the Pilot Proof Program) in the solution section." }
      ]
    },
    {
      id: "cw-07",
      part: "schwartz",
      title: "Gradualization and redefinition: lead them one yes at a time",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 8", section: "The breakthrough techniques: Gradualization; Redefinition (p. 86)", who: "Eugene M. Schwartz" },
        { doc: "ZDub Marketing Mastery Guide, Ch 10", section: "Roy Williams' writing techniques: Be believable by agreeing", who: "Roy H. Williams" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 8", section: "Recall 8.8, 8.9; Drill D8.5 + Answer Key", who: "Workbook" }
      ],
      idea: `Two Schwartz techniques for people who aren't ready to believe you yet.

**Gradualization.** Prospects reject big claims they're not ready to believe. So build a **chain of acceptance**: start with statements the reader already agrees with, then move one small, believable step at a time until the conclusion feels obvious. Each "yes" makes the next one easier (the same psychology as Cialdini's commitment principle). Roy Williams says the same thing from another angle: an ad is believable when the reader *agrees* with it, so start with what they already know or suspect is true.

The Workbook's model chain for a riding school:
1. "Most people who want to ride never start."
2. "Usually it's not the money; it's the fear of looking foolish or getting hurt."
3. "Fear mostly comes from not knowing what to expect."
4. "So the best first class is built around showing you exactly what happens, one small step at a time."
5. "That's how our beginner weekend works. Here are the dates."

Every line is something the reader nods at. By line 5 the booking feels like their own idea.

**Redefinition.** Sometimes the product has a weakness or objection built in: expensive, complicated, slow. Redefine it:
- **Make the complex simple:** "It's three steps."
- **Reframe the cost:** "Less than the deductible you'd pay after a drop."
- **Turn the weakness into a strength:** "We keep classes small, which means fewer seats and more one-on-one time."

The Guide's trades line is the classic: "It's not the cheapest quote. It's the last quote you'll need."

Rule: every reframe must be true. Redefinition changes the frame, never the facts.`,
      keyPoints: [
        "Gradualization = a chain of small yeses from what they already believe",
        "Believable = the reader agrees (Williams)",
        "Redefinition reframes a weakness: simplify it, reframe the cost, or flip it into a strength",
        "“Not the cheapest quote. The last quote you'll need.”",
        "Reframe the frame, never the facts"
      ],
      why: "Most of ZDub's prospects (and their customers) are skeptical of ads. These two techniques let Zach move a skeptic without hype, and handle price objections inside the copy.",
      example: {
        title: "Redefining PMT's price objection",
        before: "“Our class is worth every penny!”",
        after: "“Bike and helmet are provided, so you find out you love riding before you spend a dollar on gear.” (Reframes the class fee as the cheapest way to find out.)",
        body: "Stick to facts PMT confirms. Avoid PMT's banned words (“cheap,” “discount,” “guaranteed”)."
      },
      practice: [
        {
          prompt: "Drill D8.5: write a five-step chain of acceptance that leads a skeptical prospect from something they already believe to booking. Use a Sacramento trade or ZDub's own offer (the Workbook already gives you the riding-school version).",
          fields: ["Step 1 (they already agree)", "Step 2", "Step 3", "Step 4", "Step 5 (the action)"],
          rubric: ["Every line is one sentence they'd nod at", "Each step is a small move, not a leap", "Step 5 is a clear, single action", "Nothing is exaggerated"],
          model: "Roofer: 1) “Most roof problems start small and quiet.” 2) “By the time you see a stain on the ceiling, it's been leaking for a while.” 3) “The hard part is knowing what's really up there without climbing it yourself.” 4) “So the first step should be seeing your roof, not hearing a sales pitch about it.” 5) “That's why our inspection starts with a drone video you keep. Pick a time.”"
        },
        {
          prompt: "Redefine three real objections for one client using the three moves.",
          fields: ["Make the complex simple", "Reframe the cost", "Weakness → strength"],
          rubric: ["Each targets a real objection", "Each is true", "Each is one or two short sentences"]
        }
      ],
      today: { task: "Write a 5-line gradualization caption for PMT's next post, ending with the class page link. Read it aloud and cut any line you wouldn't nod at.", output: "1 ready-to-post PMT caption", minutes: 20, suggested: false },
      check: [
        { q: "“Start with statements the reader already agrees with, then move one small, believable step at a time” describes which technique? (8.8)", a: "Gradualization. Each yes makes the next one easier, like Cialdini's commitment principle." },
        { q: "“It's not the cheapest quote. It's the last quote you'll need” is an example of what? (8.9)", a: "Redefinition: reframing a weakness or objection (price) as a strength." },
        { q: "Name the three redefinition moves.", a: "Make the complex simple, reframe the cost, and position the weakness as a strength." }
      ]
    },
    {
      id: "cw-08",
      part: "schwartz",
      title: "Intensify, identify, concentrate: make them want it more with every line",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 8", section: "The breakthrough techniques: Intensification, Identification, Concentration, Camouflage (pp. 86–88)", who: "Eugene M. Schwartz; Robert C. Worstell" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 8", section: "Recall 8.10, 8.11 + Answer Key", who: "Workbook" }
      ],
      idea: `After the headline captures the desire, the body has to build it. Four more of Schwartz's techniques:

**Intensification.** The body intensifies the desire so the prospect wants the result more with every line. Ways to do it:
- Put the claim into action: "Here's what happens the first time you…"
- Show results in vivid sensory detail.
- Describe the before and after.
- Compare with alternatives.
- Pile up examples and testimonials.
- Stretch their imagination about life afterward (Roy Williams' "run the movie").

**Identification.** People want to *be* someone: the capable homeowner, the fearless rider, the smart parent. Give the prospect a role to try on, and the product becomes the costume. (Worstell's field guide stresses matching the roles customers want to play.) "For adults who want to learn it right from day one" is an identity line.

**Concentration.** Show why the alternatives fail. You don't name competitors; you **name the approach** and its hidden cost: "learning in a parking lot from a friend," "the cheapest bid," doing it yourself, doing nothing.

**Camouflage.** Schwartz noticed that an ad formatted like editorial content gets read by people who'd skip an ad. Modern versions are advertorials, native-style ads, and "content, not ads." **Use the format, never deception:** platforms and the FTC require ads to be identifiable as ads, and any "news" must be true.

The Guide's electrician mini-ad shows them stacked: concentration ("'call for a quote' usually means a price that grows once they're inside your walls"), mechanism (photo + locked line-item price), identification ("for homeowners who like to know exactly what they're paying for"), intensification ("No surprise invoice. No upsell lecture. Just the work, done, and photos of it.").`,
      keyPoints: [
        "Intensification: action, sensory detail, before/after, comparisons, testimonials, run the movie",
        "Identification: hand them a role; the product is the costume",
        "Concentration: name the failing approach, not the competitor",
        "Camouflage: native formats are fine; deception never is",
        "Stack techniques line by line in the body"
      ],
      why: "These are the tools that turn a decent hook into a body that sells. Concentration in particular is how ZDub can attack 'my nephew does my ads' without trashing anyone.",
      example: {
        title: "PMT body lines, one per technique",
        body: "Concentration: “A friend in an empty parking lot means learning their bad habits, on your own bike.” Identification: “For people who'd rather learn it right the first time.” Intensification: “Picture Sunday afternoon: you roll the bike forward, ease out the clutch, and it just goes. You're riding.” Keep claims true and avoid promising the endorsement."
      },
      practice: [
        {
          prompt: "Write one line for each technique for a Sacramento-area business of your choice (or PMT).",
          fields: ["Intensification", "Identification", "Concentration (name the failing approach)", "Camouflage: an honest native-format idea (e.g. 'what we found inside…' post)"],
          rubric: ["Intensification is sensory or 'run the movie'", "Identification names a role the customer wants", "Concentration names an approach, never a competitor", "Camouflage idea is still clearly an ad and true"]
        }
      ],
      today: { task: "Take PMT's current best ad body and add one concentration line and one identification line. Save it as variant B for the next test.", output: "A PMT ad body variant with 2 new technique lines", minutes: 20, suggested: false },
      check: [
        { q: "Which describes concentration? (8.10)", a: "Showing why the other ways to solve the problem fail. Name the approach (“the cheapest bid,” “learning from a friend in a parking lot”), not the competitor." },
        { q: "What is the honest modern rule for camouflage? (8.11)", a: "Use native, editorial formats, but keep ads identifiable and any “news” true." },
        { q: "Name four ways to intensify desire.", a: "Any four of: put the claim into action, vivid sensory results, before and after, comparisons with alternatives, piling up examples/testimonials, stretching imagination about life afterward." }
      ]
    },
    {
      id: "cw-09",
      part: "schwartz",
      title: "Schwartz on every brief: the five-step routine",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 8", section: "How to use Schwartz on every brief; Common Mistake; Key Takeaways (pp. 88–89)", who: "Eugene M. Schwartz; Brian Kurtz (“stealing smart”)" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 8", section: "Recall 8.14; Drill D8.6 · All the techniques in one ad + Answer Key", who: "Workbook" }
      ],
      idea: `Everything in Part 2 becomes one routine you run before writing any ad:

1. **Find the desire.** Which mass desire is strongest for this product and market?
2. **Place the prospect.** How aware is this audience *on this channel*: cold scroll, warm retargeting, or ready to buy?
3. **Place the market.** How sophisticated is it? What has everyone else already claimed?
4. **Choose the headline's starting point**: offer (most aware), proof (product aware), result (solution aware), problem (problem aware), or identity/story (unaware). Then adjust for sophistication: simple claim, bigger claim, mechanism, better mechanism, or identification.
5. **Build the body** with intensification, identification, gradualization, redefinition, mechanization and concentration.

**The common mistake:** one ad for every audience. A "Book now, 20% off" ad shown to unaware people looks like spam; a long problem-agitation story shown to someone who already decided to buy delays the sale. Write separate ads for separate awareness levels.

**The study habit.** Brian Kurtz, who holds the rights to *Breakthrough Advertising*, and other Schwartz students advise rereading its first three chapters again and again, and keeping a swipe file of great ads labeled with *why each one started where it did*. Kurtz calls the right approach **"stealing smart": borrow the strategy, never the words.**

Use the Schwartz swipe-file tracker on this tab: label each saved ad's awareness level and sophistication stage, and write one line on why it started there.`,
      keyPoints: [
        "Desire → prospect's awareness → market's sophistication → headline start → body techniques",
        "Separate ads for separate awareness levels",
        "Swipe file: label awareness + stage + why it started there",
        "Steal smart: strategy, never words",
        "Reread Breakthrough Advertising's first three chapters often"
      ],
      why: "This turns Schwartz from theory into a 5-minute pre-flight check Zach can run on every PMT and prospect brief before he drafts.",
      example: {
        title: "The routine on a Roseville HVAC tune-up",
        body: "1) Desire: comfort in a 105° July without a shock bill. 2) Cold Meta = problem aware. 3) Market = stage 4 (everyone offers 'tune-ups'). 4) Start with the problem, adjusted with a better mechanism: “AC running all day but the house never cools down? Our 21-point checklist finds the $14 part that's usually to blame.” (Use the client's real checklist.) 5) Body: concentration (waiting until it dies), redefinition (a tune-up costs less than one emergency call), intensification (the house at 72 while the street bakes)."
      },
      practice: [
        {
          prompt: "Run the five steps for one real brief (PMT or a prospect), then write Drill D8.6: one ad (100–150 words) using at least five techniques. Label each in [brackets].",
          fields: ["1. Desire", "2. Awareness (this channel)", "3. Sophistication stage + top competitor claims", "4. Headline starting point + headline", "5. Ad body (100–150 words, techniques labeled)"],
          rubric: ["Headline start matches the awareness level", "Claim type matches the sophistication stage", "At least five techniques, each labeled", "Every claim is true for the client", "One angle only"],
          model: "Follow the Guide's trades example: a gradual opening the reader agrees with, a concentration line naming the failing alternative, a named mechanism, a redefinition of the price, an identity line, and an intensifying close. (Workbook Answer Key, D8.6)"
        }
      ],
      today: { task: "Save 3 ads to the Schwartz swipe file (tracker above): one local trade, one national brand, one from PMT's category. Label awareness level, sophistication stage, and why each started where it did.", output: "3 labeled swipe-file entries", minutes: 20, suggested: false },
      check: [
        { q: "List the five steps for using Schwartz on every brief. (8.14)", a: "1) Find the desire. 2) Place the prospect (awareness on this channel). 3) Place the market (sophistication). 4) Choose the headline's starting point, adjusted for sophistication. 5) Build the body with intensification, identification, gradualization, redefinition, mechanization and concentration." },
        { q: "What does Kurtz mean by “stealing smart”?", a: "Borrow the strategy of a great ad (where it starts, how it's built), never the words." },
        { q: "Why is one ad for every audience a mistake?", a: "A direct offer looks like spam to unaware people, and a long problem story slows down people who've already decided. Each awareness level needs its own ad." }
      ]
    },
    {
      id: "cw-10",
      part: "hooks",
      title: "The headline does most of the work: select, then stop",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 9 — Headlines & Hooks", section: "Why the headline is 80% of the ad; Caples; Ogilvy (pp. 90–92)", who: "David Ogilvy; Claude Hopkins, Scientific Advertising (1923); John Caples, Tested Advertising Methods" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 9", section: "Recall 9.1–9.4 + Answer Key", who: "Workbook" }
      ],
      idea: `A **headline** (ad headline, email subject line, print) and a **hook** (the first 1–3 seconds of a video or the first line of a caption) do the same job: stop the right person and make them want the next line.

Why it's most of the ad:
- **David Ogilvy** reported that on average about **five times as many people read the headline as read the body.** Once you've written the headline, you've spent most of your money.
- **John Caples** found a headline change alone could make one ad sell many times more than another with the same product, in his experience up to roughly **20 to 1.** So he tested headlines before anything else.
- **Claude Hopkins** (1923): "The purpose of a headline is to pick out people you can interest." … "Don't think of people in the mass."

**The two jobs of a headline:**
1. **Select:** call out the specific person who'd benefit, and implicitly filter out everyone else.
2. **Stop and pull:** make that person want to read, watch or click.

**Caples' ranking** of headline qualities: **self-interest** (best: offer something they want), then **news** (something new about the product or problem), then **curiosity**, which is weak alone and works best combined with the other two. His famous "They Laughed When I Sat Down at the Piano, But When I Started to Play!" stacks story, an emotional reversal and the dream of being admired.

**Ogilvy's rules** (paraphrased): promise a benefit; news works ("new," "introducing"); be specific, because facts beat adjectives (his Rolls-Royce headline: at sixty miles an hour the loudest noise is the electric clock); include the brand; **for local ads, mention the town**; avoid "blind" headlines that mean nothing without the body; long headlines with real information can beat short clever ones.`,
      keyPoints: [
        "About 5x more people read the headline than the body (Ogilvy)",
        "Headline changes alone can swing results up to ~20:1 (Caples)",
        "Two jobs: select the right person, then stop and pull them in",
        "Self-interest > news > curiosity (curiosity alone is weak)",
        "Be specific, promise a benefit, name the town, no blind headlines"
      ],
      why: "For PMT's ads and every prospect's, the cheapest big win is usually a better first line. This is where Zach should spend most of his writing time.",
      example: {
        title: "Blind vs self-interest + local (PMT)",
        before: "“Your Journey Starts Here.” (Blind: means nothing without the body, selects no one.)",
        after: "“Woodland: learn to ride in one weekend, bike and helmet provided.” (Selects locals who want to ride, promises a benefit, gives a specific detail.)"
      },
      practice: [
        {
          prompt: "Rewrite three weak headlines so each selects a specific person and pulls them in. Note which Caples quality you used (self-interest, news, curiosity + one of the others).",
          fields: ["“Quality Roofing You Can Trust” →", "“Your Journey Starts Here” (PMT) →", "“ABC Plumbing Is Proud to Serve You” →", "Which Caples quality each uses"],
          rubric: ["Each one names or clearly implies who it's for", "Leads with self-interest or news, not curiosity alone", "Includes a specific fact or the town", "Means something without the body copy"],
          model: "Roofer: “Roseville homeowners: see a video of your whole roof before anyone quotes you.” (self-interest + specific) · PMT: “New to riding? Saturday classes in Woodland, bike and helmet provided.” (self-interest + news) · Plumber: “Most water-heater ‘emergencies’ we see started as a $20 part. Here's how to check yours.” (curiosity + self-interest)"
        }
      ],
      today: { task: "Pull the headlines from PMT's live ads (or a prospect's). Rewrite each one to pass Hopkins' test (does it pick out the people PMT can interest?) and Ogilvy's town rule.", output: "Before/after list of every live PMT headline", minutes: 20, suggested: false },
      check: [
        { q: "About how many more people read the headline than the body, per Ogilvy? (9.1)", a: "About five times as many." },
        { q: "Hopkins said the purpose of a headline is to…? (9.2)", a: "Pick out people you can interest." },
        { q: "Caples' three headline qualities from strongest to weakest? (9.3)", a: "Self-interest, news, curiosity. Curiosity works best combined with one of the others." }
      ]
    },
    {
      id: "cw-11",
      part: "hooks",
      title: "Rotate the headline types: Bly's 4 U's, eight types and Nelken's tricks",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 9", section: "Robert Bly: the 4 U's and the eight types; Dan Nelken: creative headline techniques (pp. 92–94)", who: "Robert W. Bly, The Copywriter's Handbook; Dan Nelken, A Self-Help Guide for Copywriters" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 9", section: "Recall 9.5, 9.6, 9.13; Drills D9.1, D9.2 + Answer Key", who: "Workbook" }
      ],
      idea: `**Bob Bly's 4 U's test.** A strong headline is:
- **Useful:** offers a benefit.
- **Urgent:** gives a reason to read now.
- **Unique:** says something different.
- **Ultra-specific:** concrete, not vague.

Score each headline 0–4 (one point per U). If nothing scores 4, you're usually missing ultra-specific: add a number, time frame, town or named mechanism.

**Bly's eight headline types** to rotate through (Guide examples):
1. **Direct:** "Beginner Riding Class in Woodland"
2. **Indirect:** "The Weekend That Changes How You Commute"
3. **News:** "New: Saturday Classes Now in Cloverdale"
4. **How-to:** "How to Pass Your Skills Test on the First Try" (great for most schools, but **not for PMT**: PMT's rules forbid promising the endorsement)
5. **Question:** "Nervous About Your First Ride?"
6. **Command:** "Stop Learning to Ride in a Parking Lot"
7. **Reason-why:** "7 Reasons New Riders Choose a Structured Class"
8. **Testimonial:** "'I Was Terrified. By Sunday I Was Grinning.'"

**Dan Nelken's creative techniques** (brand-style headlines):
- **Villainous persona:** personify the problem. "Your old water heater has been plotting this for years."
- **Accept your messiness:** admit a flaw charmingly.
- **Preempt criticism:** "Yes, we cost more than the guy on Craigslist. We also show up."
- **Hold the punchline:** key word last. "Arrives on time, cleans up after, and charges what he quoted: your new favorite plumber."
- **List & twist:** "We fix leaks, clogs, water heaters, and Monday mornings."
- **Smile headlines:** formal start, playful end.
- **The misdirect** and **the cliffhanger:** lead one way, then turn; or a startling line resolved in the body.
- **Twist a familiar phrase:** change one word of an idiom.
- **Specificity:** vivid detail makes it memorable.`,
      keyPoints: [
        "4 U's: useful, urgent, unique, ultra-specific (score 0–4)",
        "Rotate Bly's 8 types so you never write the same headline twice",
        "Nelken's tricks add personality: villain, preempt, punchline last, list & twist",
        "Missing a 4/4? Add a number, time frame, town or mechanism",
        "Check every PMT headline against PMT's copy rules"
      ],
      why: "Types and techniques are how Zach gets to 25 headlines fast without repeating himself. The 4 U's give him a quick, objective way to pick.",
      example: {
        title: "Nelken for a Sacramento HVAC company (Answer Key D9.2)",
        body: "Villainous persona: “Your AC's capacitor has been waiting all year for the first 105° day.” Preempt criticism: “Yes, there's a cheaper guy. He's also booked till Thursday.” List & twist: “We fix compressors, ductwork, thermostats, and family arguments about the thermostat.” Hold the punchline: “Shows up on time, explains everything, cleans up, and leaves your thermostat at 72: your new favorite HVAC tech.”"
      },
      practice: [
        {
          prompt: "Drill D9.1 (one round): write one PMT headline for each of Bly's eight types, then score each on the 4 U's (0–4).",
          fields: ["Direct (+score)", "Indirect (+score)", "News (+score)", "How-to (+score)", "Question (+score)", "Command (+score)", "Reason-why (+score)", "Testimonial (+score, real quote only)"],
          rubric: ["All eight types are recognizable", "Top scorers hit at least 3 of the 4 U's", "No promise of passing the endorsement; no 'easy', 'cheap', 'coach', 'guaranteed'", "Testimonial uses a real review or a [placeholder]"]
        },
        {
          prompt: "Drill D9.2 (short): for one trade client, write one headline for each of five Nelken techniques.",
          fields: ["Villainous persona", "Preempt criticism", "Hold the punchline", "List & twist", "Twist a familiar phrase"],
          rubric: ["Each technique is clearly used", "Still clear about what the business does", "The twist is one only this client could own"]
        }
      ],
      today: { task: "Write 8 PMT headlines (one per Bly type), score them on the 4 U's, and log the top 3 in the hook bank tracker for the next test.", output: "8 scored PMT headlines, top 3 logged", minutes: 25, suggested: false },
      check: [
        { q: "What are Bly's 4 U's? (9.5)", a: "Useful, urgent, unique, ultra-specific." },
        { q: "“We fix leaks, clogs, water heaters, and Monday mornings” uses which Nelken technique? (9.6)", a: "List & twist: three related things, then a surprise." },
        { q: "Name Bly's eight headline types. (9.13)", a: "Direct, indirect, news, how-to, question, command, reason-why, testimonial." }
      ]
    },
    {
      id: "cw-12",
      part: "hooks",
      title: "Hooks and the first 3 seconds",
      minutes: 14,
      tags: ["Mentor", "Book", "Playbook"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Guide 03 — Ad Creative (V2)", section: "New in V2: Writing a video ad live (structure and open loops); Modular shooting; What winning ads share", who: "Cam, Follow Ad call 9/17/26; Logan McKinney, Finding Winning Ads 9/25/26; Paul Snowman, Static Ads 10/19/26" },
        { doc: "Mentor Lessons Study Guide: 9 New Calls", section: "Meta ads, testing and creative: What makes a creative convert", who: "Clayton Bell, 8/5/26" },
        { doc: "ZDub Marketing Mastery Guide, Ch 9", section: "The video hook: three layers in three seconds; Hook patterns that work for local businesses (pp. 96–98)", who: "Alex Hormozi, $100M Leads; Roy H. Williams; Robert Cialdini" },
        { doc: "The Ultimate Social Media Workbook (11/1/26)", section: "Module 5: Hooks and the first three seconds", who: "Brendan Kane, Hook Point / One Million Followers" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 9", section: "Recall 9.9, 9.10; Drill D9.6 + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["King Kong Meta Ads Playbook", "Social Workbook Mod 5", "Mentor Guide 03"],
      idea: `On Reels, TikTok, Shorts and video ads, the hook is the first **1–3 seconds**. Brendan Kane (*Hook Point*) says attention is won or lost in about three seconds. Paul (10/19) said about 85% of people scroll with sound off. So a hook has **three layers** that must work together (Guide Ch 9):

1. **Visual:** what's on screen in frame one: movement, a strange object, a face mid-reaction, a before-and-after, the result first.
2. **Spoken:** the first sentence. A claim, question or tension. **Never a greeting** ("Hey guys, so today…").
3. **Text:** on-screen words for people on mute, usually a punchier version of the spoken line.

**What the mentors teach:**
- **Spend the most thought here.** Cam (9/17): the hook decides whether anyone stops; the rest "can be a little bit more loose."
- **Open a loop.** The hook opens a curiosity you close later. Cam warned "AI is not very good at writing open loops"; it closes them right away, which kills retention.
- **Call out who it's for.** Cam's template, which he said did about 20 million organic views: "If you run a [local business] here in [city]…" Logan's winning video (9/25): "Barbershop owners, if you just hired a barber and their book is empty, this is for you." Clayton (8/5) treats calling out the audience ("Lexington homeowners") as close to a law, and notes the call-out is targeting, not the hook itself.
- **Questions spark curiosity,** and the hook doesn't have to be what you sell: Clayton's turf ad hooked on grass prices, then sold pavers and pergolas.

**Then pay it off.** Hormozi's content unit is **hook → retain → reward**: the hook earns attention, retention keeps it with lists, steps or stories that leave a question open (stories are the most engaging), and the reward matches or beats the hook's promise. Clickbait that doesn't pay off loses trust.

**Test hooks, not just ads.** Kane: write several hooks, test cheaply, double down on winners. Cam films 3 hooks + 1 body + 2 CTAs in one session. (Reading hook rate and hold rate: see the Meta Ads tab.)`,
      keyPoints: [
        "Three layers in frame one: visual, spoken, text (works on mute)",
        "No greetings, no logo, no business name first",
        "Call out who it's for: “If you run a [business] here in [city]…”",
        "Open a loop and don't close it early (AI tends to)",
        "Hook → retain → reward: pay off the promise",
        "Write and test several hooks per body"
      ],
      why: "The hook decides whether PMT's ad gets watched at all. One body with three hooks is also the cheapest test ZDub can run for any client.",
      example: {
        title: "PMT: three hooks, one body",
        before: "“Hey everyone! Pacific Motorcycle Training here, and today we want to tell you about our beginner classes…”",
        after: "Hook A (callout) — Visual: a first-timer walking a bike across the range. Spoken: “If you live around Woodland and you've been saying ‘someday I'll ride,’ watch this.” Text: “Never ridden? Watch this.”\nHook B (mistake) — Visual: a new rider stalling at a stop. Spoken: “This is the number one mistake new riders make at their first stop sign.” Text: “Mistake #1 at stop signs.”\nHook C (story open) — Visual: a nervous student's face, then a grin. Spoken: “She showed up shaking. Two days later, she rode the whole range.” Text: “Day 1 vs Day 2.”",
        body: "Each hook leads into the same body. Film them modularly, the way Cam does: hooks in one take, body next, CTAs separately."
      },
      table: {
        head: ["Hook pattern", "Local example (Guide Ch 9)"],
        rows: [
          ["Result first", "“This is what a roof looks like after 40 years without maintenance.”"],
          ["Callout", "“If you've been saying ‘someday I'll learn to ride,’ watch this.”"],
          ["Mistake", "“The #1 mistake new riders make at their first stop sign.”"],
          ["Contrarian", "“Don't buy a new AC yet. Check this first.”"],
          ["Question", "“Would you pass a motorcycle skills test today?”"],
          ["Curiosity + specificity", "“Why we turned down a $14,000 job last week.”"],
          ["Story open", "“She showed up shaking. Two days later, she rode home.”"],
          ["POV", "“POV: your first time leaning into a curve.”"],
          ["Demonstration", "Do the thing on camera in the first second."],
          ["List", "“3 sounds your car makes right before an expensive repair.”"]
        ]
      },
      practice: [
        {
          prompt: "Drill D9.6 (short): write five video hooks for PMT, each with all three layers, using five different patterns from the table.",
          fields: ["Hook 1 (pattern) — Visual / Spoken / Text", "Hook 2 — Visual / Spoken / Text", "Hook 3 — Visual / Spoken / Text", "Hook 4 — Visual / Spoken / Text", "Hook 5 — Visual / Spoken / Text"],
          rubric: ["No greeting, logo or business name first", "Visual starts mid-action in frame one", "Text layer works on mute", "Each opens a loop the body can pay off", "Calls out the viewer or the town in at least two", "No banned PMT words; no safety fear claims you can't back up"],
          model: "Mistake pattern (Answer Key D9.6): Visual: a new rider stalling at a stop sign. Spoken: “This is the number one mistake new riders make at their first stop sign.” Text: “Mistake #1 at stop signs (most beginners do this).” The visual starts mid-action."
        },
        {
          prompt: "Write Cam's callout template for ZDub's own ad and for one trade client.",
          fields: ["ZDub: “If you run a [trades business] here in Sacramento…” (finish it)", "Trade client: “If you own a home in [town] and…” (finish it)"],
          rubric: ["Names the audience and the place", "Adds a pain or desire that opens a loop", "Doesn't reveal the offer yet"]
        }
      ],
      today: { task: "Social Workbook Exercise 5B: pick one PMT video idea and write three different openings (Hook A/B/C) for the same body. Plan to film them modularly and test as ad variants.", output: "1 video idea + 3 hooks with all three layers, ready to film", minutes: 30, suggested: false },
      check: [
        { q: "What are the three layers of a video hook? (9.9)", a: "Visual (frame one), spoken (first sentence), text (on-screen words for people on mute)." },
        { q: "In Hormozi's content unit, how does the retain step keep attention? (9.10)", a: "With lists, steps or stories that leave a question open. Then the reward pays off the hook's promise." },
        { q: "What did Cam say AI is bad at, and why does it matter for hooks?", a: "Writing open loops: AI opens and closes them right away, which hurts retention. The hook should open a loop the body closes later." }
      ]
    },
    {
      id: "cw-13",
      part: "hooks",
      title: "Feed headlines: intrigue + a big, specific benefit",
      minutes: 12,
      tags: ["Playbook", "Book"],
      source: [
        { doc: "King Kong — The $7.8B Meta Ads Playbook, Part 1", section: "Section 07: Headlines That Hijack Attention (The Headline Levers; The Swipe-and-Adapt Method)", who: "King Kong agency" },
        { doc: "ZDub Marketing Mastery Guide, Ch 9", section: "Headlines and hooks for social feeds; ZDub Application: local headlines get proximity for free (pp. 95–96)", who: "King Kong; Alex Hormozi, $100M Leads" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 9", section: "Recall 9.7, 9.8, 9.14; Drills D9.3–D9.5 + Answer Key", who: "Workbook" }
      ],
      idea: `The King Kong playbook's core point: on Meta every ad has **two jobs**: deliver news, value or findings (because news and gossip dominate what people consume), and **sell the click**. A strong feed headline smashes **burning intrigue + a big, specific benefit** into one line.

**The headline levers.** Every winning headline pulls at least one:
- **Curiosity** (King Kong: "the most powerful lever. Always pull this one.")
- **Intrigue:** a curiosity gap that only closes by clicking
- **Shock:** "what really happened," "alarming warning"
- **Direct benefit:** the explicit promise
- **Implied benefit:** what the click leads to ("the secret way to…")
- **Fear / loss aversion:** what they lose if they ignore it
- **Vanity / self-interest:** better, stronger, healthier, smarter
- **Specificity:** numbers, names, time frames

**Swipe and adapt. Never start from a blank page.** Read 30 headlines from top news and gossip sites, then keep the *structure* and change every word. King Kong's example: "Secret way to find out who called you without using Google" → "Secret way to find $5M of business funding without bank." The Workbook's local version: "What experts found inside the wreckage of…" → "What we found inside a 30-year-old Citrus Heights electrical panel."

**Hormozi's seven headline components** (*$100M Leads*). Aim for at least two per headline or hook: **recency, relevancy, celebrity, proximity, conflict, unusual, ongoing.**

**Local businesses get proximity for free.** "Woodland riders: 4 seats left this Saturday" combines proximity, recency and relevancy in eight words (use only if the seat count is real). Use town names, neighborhoods, landmarks and local events constantly.

King Kong also reports that in its accounts **positive, big-benefit hooks beat negative ones most of the time**, so default to positive and test the negative.`,
      keyPoints: [
        "Meta ads: deliver news/value AND sell the click",
        "Headline = burning intrigue + big specific benefit",
        "Pull at least one lever; curiosity is the strongest",
        "Swipe and adapt structures from news and gossip sites",
        "At least 2 of Hormozi's 7: recency, relevancy, celebrity, proximity, conflict, unusual, ongoing",
        "Default positive, test negative"
      ],
      why: "PMT and the trades are local, so proximity and recency are free points. This lesson is the fastest way to make Zach's feed headlines feel like news instead of ads.",
      example: {
        title: "Roofer: lever stacking (Answer Key D9.3)",
        before: "“Need a new roof? Call us today.”",
        after: "“The 20-minute drone check that saved a Roseville family $11,000 on a roof they didn't need.” (Intrigue + specific benefit + proximity. Real numbers only.)"
      },
      practice: [
        {
          prompt: "Drill D9.3 (one each): write one PMT headline per King Kong lever. Star the three you'd test first.",
          fields: ["Curiosity / intrigue", "Shock (honest)", "Direct benefit", "Implied benefit", "Fear / loss aversion", "Vanity / self-interest", "Specificity"],
          rubric: ["At least one combines intrigue and a big, specific benefit in one line", "At least two starred picks are positive", "Proximity (Woodland/Sacramento) shows up somewhere", "No invented numbers; no banned PMT words"]
        },
        {
          prompt: "Drill D9.4 (short): find three headline structures on news or gossip sites and adapt each to a client. Keep the structure; change every word.",
          fields: ["Original 1 → adapted", "Original 2 → adapted", "Original 3 → adapted"],
          rubric: ["The curiosity-gap shape is preserved", "Every word is changed", "The adapted line is true for the client"]
        }
      ],
      today: { task: "Drill D9.5: take 10 headlines you've written this week, score each on Hormozi's seven components, and rewrite every one that scores under 2 (start by adding the town and a time).", output: "10 scored headlines, all at 2+", minutes: 25, suggested: false },
      check: [
        { q: "The King Kong playbook says a strong Meta headline combines what? (9.7)", a: "Burning intrigue and a big, specific benefit." },
        { q: "“Woodland riders: 4 seats left this Saturday” uses which of Hormozi's components? (9.8)", a: "Proximity (the town), recency (this Saturday) and relevancy (“riders”)." },
        { q: "List Hormozi's seven headline components. (9.14)", a: "Recency, relevancy, celebrity, proximity, conflict, unusual, ongoing. Aim for at least two." }
      ]
    },
    {
      id: "cw-14",
      part: "hooks",
      title: "Specific is believable, vague is ignored",
      minutes: 9,
      tags: ["Book", "Playbook", "Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 9", section: "The specificity rule (p. 98)", who: "Claude Hopkins, Scientific Advertising" },
        { doc: "King Kong — The $7.8B Meta Ads Playbook, Part 1", section: "Section 07: One Note on Specificity", who: "King Kong agency" },
        { doc: "ZDub Guide 03 — Ad Creative (V2)", section: "The short version; What winning ads share; Compliance and honesty", who: "Paul Snowman 10/19/26; Logan McKinney 9/25/26" },
        { doc: "ZDub Guide 07 — Landing Pages (V2)", section: "2. Headlines: curiosity, not statements", who: "Logan McKinney, 10/9/26" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 9", section: "Recall 9.12; Drill D9.7 + Answer Key", who: "Workbook" }
      ],
      idea: `Every author from Hopkins to King Kong says the same thing: **specific is believable; general is ignored.** Hopkins' reasoning: a general claim carries no weight at all. A specific claim is either the truth or a lie, and **people assume you wouldn't make a specific claim you couldn't back up.**

King Kong puts it as doubted vs believed: "Here's how to lose weight" is doubted; "Here's how to lose 12–19kg in the next 5 weeks" is believed. "Explode your leads" is ignored; "Generate 90–480 inbound leads every month" gets clicked. The more specific, the more believable; the more believable, the higher the click-through.

**The mentor guardrail: real numbers only.**
- Paul (10/19): "Never invent stats, results or reviews." Use the client's real numbers or a sourced stat. AI may invent numbers.
- Logan (9/25): winning ads show **something checkable**. His best static was one barbershop client's real month in sales, with honest caveats that the numbers "are not typical." He retired it when the numbers went stale.
- Logan (10/9): a headline like "How we put X new patients in your open chairs" works with a **conservative** number; avoid the "5x/10x" claims prospects hear constantly.

No numbers yet? Specificity isn't only numbers. Times, places, names, steps and sensory details count: "Done by Friday" beats "timely completion." "Bike and helmet provided" beats "everything you need."`,
      keyPoints: [
        "Specific claims are believed because people assume you can back them up",
        "Vague = doubted or ignored; specific = believed and clicked",
        "Real numbers only; never invent stats, results or reviews (Paul)",
        "Show something checkable (Logan)",
        "No numbers? Use times, places, names, steps, details"
      ],
      why: "Specific, true claims are the quickest upgrade to any PMT or trade ad, and the mentors are strict that ZDub never fakes them.",
      example: {
        title: "Vague → specific (Guide Ch 9 table)",
        body: "“Fast service” → “Most quotes sent within 2 hours.” “Lots of happy customers” → “412 five-star Google reviews.” “Save on your energy bill” → “Families on this street cut summer bills by about $60 a month.” (The Guide's illustrative numbers. Use only the client's real ones.)"
      },
      table: {
        head: ["Vague (ignored)", "Specific (believed)"],
        rows: [
          ["Fast response times", "Most texts answered in under 15 minutes, 7 a.m. to 7 p.m."],
          ["Lots of experience", "[Real number] roofs replaced in Placer County since [year]"],
          ["Affordable prices", "Flat-rate pricing from [price], written before we start"],
          ["Great results", "[Real number] riders trained last year"],
          ["Trusted by the community", "[Real number] Google reviews from neighbors within 20 miles"]
        ]
      },
      practice: [
        {
          prompt: "Drill D9.7: rewrite these vague claims as specific ones for a real client. Use [placeholders] for numbers you still need from the owner.",
          fields: ["“Fast response times”", "“Lots of experience”", "“Affordable prices”", "“Great results”", "“Trusted by the community”"],
          rubric: ["Each line has a number, time, place or concrete detail", "Placeholders mark anything unconfirmed", "No invented figures", "Still reads like a person talking"]
        }
      ],
      today: { task: "Send PMT's owner a 5-question text asking for real numbers you can use in ads (riders trained last year, Google review count, class size, years running, seats per class). Log the answers in PMT's proof bank.", output: "A PMT proof bank with 5 real, usable numbers", minutes: 15, suggested: false },
      check: [
        { q: "Why does a specific claim get believed when a general one is ignored, per Hopkins? (9.12)", a: "People assume you wouldn't make a specific claim you couldn't back up." },
        { q: "What's the mentors' rule on numbers in ads?", a: "Never invent stats, results or reviews. Use the client's real numbers or a sourced stat, and show something checkable (Paul 10/19, Logan 9/25)." }
      ]
    },
    {
      id: "cw-15",
      part: "feed",
      title: "The slippery lead-in: the lines above “See more”",
      minutes: 10,
      tags: ["Playbook", "Book"],
      source: [
        { doc: "King Kong — The $7.8B Meta Ads Playbook, Part 1", section: "Section 06: Anatomy of a Hyperdopamine Ad; Section 10: The Slippery Lead-in", who: "King Kong agency" },
        { doc: "ZDub Marketing Mastery Guide, Ch 10 — Body Copy That Sells", section: "The rules of feed copy: The slippery lead-in (p. 107)", who: "King Kong; Joe Sugarman's “slippery slide”" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 10", section: "Recall 10.9; Drill D10.6 + Answer Key", who: "Workbook" }
      ],
      idea: `King Kong says every winning ad it runs has the same skeleton. Memorize it, because the Ad Workshop tool follows the same order:

1. **Scroll-stopping image:** a pattern interrupt, the first thing the eye lands on.
2. **Eyeball-grabbing headline:** burning intrigue + big specific benefit in one line.
3. **Slippery lead-in:** the first one to three lines of body copy.
4. **Intriguing link description:** the small text under the image. Most advertisers leave it blank or paste a tagline. King Kong calls it "curiosity real estate."
5. **Butter body copy:** the long-form section (next lesson).
6. **Non-threatening CTA** (lesson after that).

**The slippery lead-in** is the part above the "See more" cutoff, and King Kong calls it the single most overlooked part of a Meta ad. Most advertisers waste it on a tagline, a call-out like "Attention all business owners!", or the headline repeated. The playbook claims it has changed nothing else about an ad (same image, headline, body and CTA) and **5x'd ROAS by rewriting only the lead-in.** Treat that as their account result, not a law, but test it.

**What makes a great lead-in:**
- It **continues the curiosity** from the headline rather than restating it.
- It uses a **soft, conversational tone** ("Most people don't realise this, but…").
- It introduces a **specific, unexpected detail.**
- It **ends mid-thought**, so the only way to finish is tapping "See more."

The idea echoes direct-response veteran Joe Sugarman's "slippery slide": every line's job is to get the next line read.

**Bad:** "Are you a business owner who wants more leads? Then you need to read this!" (screams ad)
**Good:** "This is INSANE, I got 132 leads in the first 9 days"… (screams content, hyper-specific)`,
      keyPoints: [
        "Ad skeleton: image, headline, lead-in, link description, body, CTA",
        "The lead-in = the 1–3 lines above “See more”",
        "Continue the headline's curiosity; never repeat it",
        "Soft tone + one specific unexpected detail + end mid-thought",
        "Don't waste the link description; it's curiosity real estate"
      ],
      why: "Rewriting the first lines of PMT's primary text is one of the cheapest tests ZDub can run, and most local competitors never touch it.",
      example: {
        title: "Roofer lead-in (Answer Key D10.6)",
        before: "Headline: “Why we turned down a $14,000 job last week.” Lead-in: “At ABC Roofing we pride ourselves on honesty. Call today!”",
        after: "Lead-in: “The homeowner had three quotes for a new roof. All three said ‘full replacement.’ Our drone found something else entirely…”",
        body: "The good version continues the story, adds a specific detail (three quotes) and stops right before the payoff."
      },
      practice: [
        {
          prompt: "Drill D10.6 (short): for one PMT headline and one trade headline, write two lead-ins each. Each must continue the curiosity, add one specific unexpected detail, and end mid-thought.",
          fields: ["PMT headline", "PMT lead-in A", "PMT lead-in B", "Trade headline", "Trade lead-in A", "Trade lead-in B"],
          rubric: ["Doesn't repeat the headline", "Conversational, not salesy", "One specific, unexpected detail in each", "Ends mid-thought (an ellipsis or an unfinished turn)", "Any number used is real"],
          model: "PMT headline: “What nobody tells you about your first hour on a motorcycle.” Lead-in: “It's not the speed that scares most first-timers. It's the moment the instructor says ‘okay, now let the clutch out slowly’ and you realize…”"
        },
        {
          prompt: "Write two link descriptions for the same PMT ad that use the space as curiosity real estate.",
          fields: ["Link description 1", "Link description 2"],
          rubric: ["Not the tagline, not blank", "Adds curiosity or a specific benefit", "Short enough to read at a glance"]
        }
      ],
      today: { task: "Duplicate PMT's current best primary-text ad and change ONLY the first 1–3 lines to a slippery lead-in. Queue it as a variant so the test is clean.", output: "1 lead-in-only variant ready in Ads Manager (or the ad doc)", minutes: 20, suggested: false },
      check: [
        { q: "In the King Kong playbook, what does a good slippery lead-in do? (10.9)", a: "Continues the curiosity, adds a surprising specific detail, and ends mid-thought." },
        { q: "What do most advertisers waste the lead-in on?", a: "A tagline, a target-market call-out like “Attention all business owners!”, or the headline repeated." },
        { q: "Name the six parts of King Kong's ad skeleton.", a: "Pattern-interrupt image, eyeball-grabbing headline, slippery lead-in, intriguing link description, butter body copy, non-threatening CTA." }
      ]
    },
    {
      id: "cw-16",
      part: "feed",
      title: "Butter body copy: the nine rules for feed copy",
      minutes: 12,
      tags: ["Playbook", "Mentor", "Platform fact (re-check)"],
      date: "2026-10-13",
      source: [
        { doc: "King Kong — The $7.8B Meta Ads Playbook, Part 1", section: "Section 11: The Butter Body Copy (Rules 1–9)", who: "King Kong agency" },
        { doc: "ZDub Marketing Mastery Guide, Ch 10", section: "The rules of feed copy: “Butter body copy” rules (pp. 107–108)", who: "King Kong" },
        { doc: "ZDub Guide 07 — Landing Pages (V2)", section: "3. Copy rules (Logan)", who: "Logan McKinney, 10/9 and 10/13/26" },
        { doc: "Mentor Lessons Study Guide: 9 New Calls", section: "What makes a creative convert", who: "Clayton Bell, 8/5/26" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 10", section: "Recall 10.10 + Answer Key", who: "Workbook" }
      ],
      idea: `King Kong's nine rules for the long body of a Meta ad:

1. **5th-grade reading level** or lower (check with the Hemingway app). King Kong aims for grade 3. Mentor Logan (10/9) says the same: plain English at about a **third-grade level**, no marketing jargon.
2. **Short words, short sentences, short paragraphs:** one- and two-syllable words, 8–12 word sentences, 1–2 line paragraphs. "Eye relief = consumption. Consumption precedes conversion."
3. **Write to one person,** as a letter, not a brochure. Logan: speak to one person on a phone.
4. **Careful with "you."** King Kong warns that calling out individuals can trip Meta's personal-attribute classifiers, so it suggests "people who…" or "anyone who…". Logan says use "your." They fit together: use "you" freely in normal sentences, but never *assert a personal attribute* ("Are you struggling with debt/anxiety/weight?").
5. **Lead with self-interest.** If they don't see what's in it for them, they're gone.
6. **Positive beats negative** "8 out of 10 times" in King Kong's accounts. Default positive; test both. Clayton (8/5) adds that people act fastest when chasing a desire *and* escaping a fear at once, so run positive ads alongside cost-of-inaction ads.
7. **Zest, personality, specificity:** real numbers, names, time frames.
8. **One angle.** Once a headline wins, align image, lead-in, body and CTA around it. Don't say five things.
9. **Long copy, when interesting, beats short.** King Kong says aim for about **2,200 characters max**, write the best ad you can, then edit down. Its argument: Meta's Andromeda system *reads* your copy to find buyers, so specific long copy is "targeting fuel" and vague copy is "targeting heat lost." (A platform claim: re-check against current Meta guidance.)

Long and boring is worse than short and boring. Length must earn its place.`,
      keyPoints: [
        "Grade 3–5 reading level; check with Hemingway",
        "8–12 word sentences, 1–2 line paragraphs",
        "Write to one person; never assert personal attributes",
        "Default positive, test negative; pair desire with escaping a fear",
        "One angle per ad",
        "Interesting long copy (up to ~2,200 characters) gives Meta more context"
      ],
      why: "PMT's primary text and every trade ad ZDub writes should pass these nine rules before launch. They're also the checklist for editing AI drafts.",
      example: {
        title: "Brochure vs butter (PMT)",
        before: "“Pacific Motorcycle Training offers comprehensive motorcycle safety programs for riders of all experience levels, utilizing state-of-the-art training methodologies.”",
        after: "“Never ridden before? Good.\n\nMost people in a beginner class haven't.\n\nYou start with the bike off. You walk it. Then the clutch, one small step at a time.\n\nThe bike and helmet are already there for you.”",
        body: "The after is grade 2–3, written to one person, one angle (it's fine to be new), and specific. Confirm the class details with PMT before running."
      },
      practice: [
        {
          prompt: "Rewrite this brochure line as butter body copy (4–8 short lines) for a Sacramento HVAC company: “We provide comprehensive heating and cooling solutions with industry-leading technicians and competitive pricing for all your comfort needs.” Then paste it into Hemingway and record the grade.",
          fields: ["Rewrite", "Hemingway grade before → after", "The one angle I chose"],
          rubric: ["Grade 5 or lower", "Sentences 8–12 words, paragraphs 1–2 lines", "Written to one person", "One angle", "At least one specific detail (time, place, number)"]
        }
      ],
      today: { task: "Run PMT's current primary text through Hemingway. Edit it down at least two grades, cut it to one angle, and make sure it's under ~2,200 characters.", output: "An edited PMT primary text with the before/after grade noted", minutes: 25, suggested: false },
      check: [
        { q: "Which is one of the playbook's butter body copy rules: one ad, one angle; use industry jargon; always use 'Buy Now'; keep it under 50 words? (10.10)", a: "One ad, one angle. Others: 5th-grade level, short everything, one person, self-interest, specificity, interesting long copy." },
        { q: "Why does King Kong say long copy can help targeting on Meta?", a: "Andromeda reads the copy to match the ad to users; more specific context = a bigger, more accurate pool. (Platform claim; re-check.)" },
        { q: "How do King Kong's 'avoid you' rule and Logan's 'use your' rule fit together?", a: "Write to one person and use 'you' normally, but never assert a personal attribute like health or finances; use 'people who…' in sensitive areas." }
      ]
    },
    {
      id: "cw-17",
      part: "feed",
      title: "The close: one small, clear call to action",
      minutes: 10,
      tags: ["Mentor", "Playbook", "Book"],
      date: "2026-10-19",
      source: [
        { doc: "King Kong — The $7.8B Meta Ads Playbook, Part 1", section: "Section 12: CTAs: What We've Tested and What Wins", who: "King Kong agency" },
        { doc: "ZDub Guide 03 — Ad Creative (V2)", section: "2. The four zones (ACT); Writing a video ad live; Modular shooting", who: "Paul Snowman 10/19/26; Cam 9/17/26" },
        { doc: "ZDub Guide 07 — Landing Pages (V2)", section: "5. CTAs and booking", who: "Logan McKinney, 10/9 and 10/13/26" },
        { doc: "Mentor Lessons Study Guide: 9 New Calls", section: "What makes a creative convert (strong CTA)", who: "Clayton Bell, 8/5/26" },
        { doc: "ZDub Marketing Mastery Guide, Appendix A", section: "18. Calls to action", who: "Mastery Guide" }
      ],
      idea: `The close has one job: make the next step obvious, small and safe. Think of it as two pieces, **the button** and **the words.**

**The button (King Kong).** After split-testing every CTA button Meta offers across hundreds of accounts, King Kong says **"Learn More" wins "by a country mile"** over Buy Now, Shop Now, Sign Up and Inquire Now. Its reason: the ad is selling the *click*, not the product. A high-pressure button contradicts the rest of the ad. "Learn More" promises information, not a transaction. **Sell on the landing page, not in the ad.**

**The words (mentors).**
- **Paul (10/19), the ACT zone of a static:** a small, specific next step. **Give rather than ask:** "free 15-minute drone roof audit," "$250 consultation credit," "one of 12 assessments this month." Exactly one CTA.
- **Cam (9/17):** say exactly what to do. His ad CTA: "click the link below and fill out the form"; organic version: "click the link in my bio." He films both CTAs separately so one body serves ads and organic.
- **Clayton (8/5):** a strong CTA **repeats the hook's stakes**: "Click the link below before stage two water drought hits."
- **Logan (10/9):** CTA copy says **what's in it for them** ("Book a 30-minute call to explore how we can help you…"), not "from my live calendar." Prospects are self-serving.

**Match the temperature** (Appendix A): cold, curiosity-driven ads → "Learn more"; warm and most-aware → "Reserve my seat," "See available dates"; trades → "Text us a photo," "Get my flat-rate quote"; organic → "Send this to someone who…," "Comment [WORD] and we'll send you…".

Any urgency in the close (seats, dates) must be real.`,
      keyPoints: [
        "Button: “Learn More” won King Kong's tests; sell the click, not the product",
        "Words: one small, specific next step; give rather than ask (Paul)",
        "Say exactly what to do: “click the link below and fill out the form” (Cam)",
        "Repeat the hook's stakes in the CTA (Clayton)",
        "Say what's in it for them (Logan)",
        "Match the CTA to awareness; urgency only if real"
      ],
      why: "PMT's ads and every trade ad end somewhere. A clear, low-friction close is what turns attention into the lead count ZDub gets judged on.",
      example: {
        title: "PMT cold ad close",
        before: "“Book now!!! Don't miss out!!!” with a Book Now button.",
        after: "Spoken: “If you're around Woodland and this is the year you finally ride, tap the link below and see the next open weekend.” Button: Learn More. (Andromeda sample brief uses “link in bio to save your seat” for organic.)"
      },
      practice: [
        {
          prompt: "Write a close (words + button) for each situation.",
          fields: ["PMT cold video ad (words + button)", "PMT retargeting ad to people who visited the class page", "Sacramento roofer static (ACT zone: give, don't ask)", "ZDub's own follower/organic post"],
          rubric: ["Exactly one CTA each", "Matches the audience temperature", "Small and specific; says what's in it for them", "Cold ads use a low-pressure button", "Any scarcity is real"],
          model: "PMT cold: “Tap below to see what the first class looks like.” [Learn More] · PMT retargeting: “[Real date] still has seats. Save yours.” [Learn More or Book Now, test it] · Roofer static: “Free 15-minute drone roof check, Roseville only.” · ZDub organic: “Follow for the weekly breakdown of what's working for Sacramento contractors.”"
        }
      ],
      today: { task: "Check every live PMT ad: is there exactly one CTA, does the button match the temperature, and does the spoken/written CTA repeat the hook's stakes? Fix the worst one.", output: "CTA audit of PMT ads + 1 rewritten close", minutes: 20, suggested: false },
      check: [
        { q: "Which CTA button won King Kong's tests and why?", a: "“Learn More.” The ad sells the click, not the product; a high-pressure button contradicts the ad. Sell on the landing page." },
        { q: "What does Paul mean by “give rather than ask” in the ACT zone?", a: "Offer a small, specific thing (a free drone roof audit, a consultation credit) instead of asking them to buy or call." },
        { q: "What makes Clayton's “strong CTA”?", a: "It repeats the hook's fear or stakes, e.g. “Click the link below before stage two water drought hits.”" }
      ]
    },
    {
      id: "cw-18",
      part: "feed",
      title: "Call out, cost of inaction, proof: what makes ad copy convert",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-08-05",
      source: [
        { doc: "Mentor Lessons Study Guide: 9 New Calls", section: "Top takeaways #8; Meta ads, testing and creative: What makes a creative convert (two parts)", who: "Clayton Bell, 8/5/26 (student Michael on DIY)" },
        { doc: "Lesson 2.2 — How To Make Someone Buy Something", section: "Why anyone buys anything (two ways to make someone want to cross)", who: "Course lesson" }
      ],
      alsoIn: ["Ad Creative tab", "Lesson 2.2"],
      idea: `Clayton's two-part 8/5 call boiled down to a top takeaway: **"Ads need a cost of inaction and proof. Call out the area, quantify what doing nothing costs, back the claim with something real."** The copy pieces:

- **Call out the audience, every time.** "Lexington homeowners." Clayton treats this as close to a law. The call-out is *targeting*, not the hook.
- **Question hooks spark curiosity:** "Have you ever had a landscaper just throw some lights together?" The hook doesn't have to be what you sell; his turf ad hooked on grass prices, then sold pavers, pergolas and kitchens.
- **Scarcity is time plus price:** "starting next year you'll pay double" (only if true).
- **Substantiate with something real:** a city news report on drought restrictions, a map of local limestone.
- **Quantify the cost of doing nothing,** with a number bigger than your ticket. A $1.5k–$3k water job should point to damage worth far more. Ask the business owner what inaction usually costs.
- **Peel the onion.** Surface pain doesn't move people. Keep going a layer deeper.
- **Homeowner language, not trade jargon.** "A run goes dark" confused everyone.
- **Address DIY head-on** (student Michael): "Would you rather go out to Home Depot… or do you want to get an expert right now to assess it for you?"
- **Strong CTA repeats the hook's fear.**
- **Run positive ads too.** People act fastest when chasing a desire and escaping a fear at the same time. Some people just want their house to look good.

This matches Lesson 2.2: there are two ways to make someone want to cross the gap: show how good the other side is (desire) or what staying put costs (pain). On cold traffic, pain moves first, because losses hit about twice as hard as equal gains.

**PMT caution:** don't build PMT's cost of inaction on safety fear claims you can't back up. Use costs that are true: another riding season watching from the car, learning bad habits from a friend.`,
      keyPoints: [
        "Call out the area/audience in every ad (targeting, not the hook)",
        "Quantify the cost of doing nothing with a number bigger than the ticket",
        "Back claims with something real (news report, map, data)",
        "Peel the onion past surface pain",
        "Customer language, not jargon; handle DIY directly",
        "Run desire ads and fear ads side by side"
      ],
      why: "This is the newest mentor guidance on ad copy, and it maps straight onto ZDub's trade prospects (roofing, landscaping, water damage), where the cost of waiting is real and large.",
      example: {
        title: "Sacramento landscaper, before/after",
        before: "“Quality landscaping at great prices. Call today!”",
        after: "“Elk Grove homeowners: what's your lawn really costing you? [Real local water-rate fact, cited.] Most people keep paying for grass they don't use. Would you rather spend another summer at Home Depot, or have someone show you what a low-water yard would cost? Tap below for a free yard check before rates go up.” (Every fact must be real and sourced.)"
      },
      practice: [
        {
          prompt: "Build Clayton's pieces for one trade client (roofer, water damage, landscaper, HVAC).",
          fields: ["Call-out (area + audience)", "Question hook", "Surface pain → layer 2 → layer 3 (peel the onion)", "Cost of inaction (number bigger than the ticket; source)", "Substantiation (something real)", "DIY line", "CTA repeating the hook's stakes"],
          rubric: ["Area named", "Cost of inaction is quantified and bigger than the ticket", "Substantiation is real and checkable", "Third onion layer is emotional, not technical", "No trade jargon"]
        },
        {
          prompt: "Now write PMT's honest version: a cost of inaction that's true and not a safety scare.",
          fields: ["PMT cost of inaction (one or two lines)", "PMT positive/desire version"],
          rubric: ["No fear claims PMT can't back up", "Uses a real, felt cost (another season missed, bad habits)", "No banned PMT words"]
        }
      ],
      today: { task: "Text or call one trade prospect (or PMT's owner) and ask Clayton's question: 'What does doing nothing usually end up costing your customers?' Turn the answer into one cost-of-inaction ad line.", output: "1 owner-sourced cost-of-inaction line for a real ad", minutes: 20, suggested: false },
      check: [
        { q: "What three things did Clayton say every ad needs (top takeaway #8)?", a: "Call out the area, quantify what doing nothing costs, and back the claim with something real (proof)." },
        { q: "How big should the cost of inaction be?", a: "Bigger than your ticket price. Ask the owner what inaction usually costs." },
        { q: "Why run positive ads too?", a: "People act fastest when chasing a desire and escaping a fear at the same time, and some people just want the good outcome." }
      ]
    },
    {
      id: "cw-19",
      part: "craft",
      title: "It's about them: the “So what?” test and the “we” count",
      minutes: 8,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 10 — Body Copy That Sells", section: "The first principle: it's about them (pp. 101–102)", who: "Claude Hopkins; Roy H. Williams; Andy Maslen, Write to Sell; Ann Handley, Everybody Writes" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 10", section: "Recall 10.1; Drill D10.1 + Answer Key", who: "Workbook" }
      ],
      idea: `Every writer in the Mastery Guide's library repeats the same rule: **copy is about the reader, not the advertiser.**

- **Hopkins:** ads aren't written to entertain. Ads that try only to please or show off don't sell. Offer service.
- **Roy Williams:** bad advertising is about the advertiser; good advertising is about the customer. Most ads are like home movies: "Here's me at the Grand Canyon." Point the camera at what the *viewer* wants to see.
- **Andy Maslen** (*Write to Sell*): write from the customer's side of the table. **Every sentence must survive the reader's silent question: "So what?"**
- **Ann Handley** (*Everybody Writes*): writing well starts with empathy, putting the reader's needs ahead of your own.

**The "we" count.** Count the sentences that start with "we," "our" or the company name, versus "you" or the customer's situation. If "we" wins, rewrite. The Workbook Answer Key says most local homepages start **60–80% of sentences with "we."** The fix opens on the customer's situation and keeps "we" only where the business is doing something *for* the reader: "You'll get a written price before we start."

**How to run "So what?"** Read each line and ask it out loud. If the honest answer is "so nothing," either connect the line to something the reader cares about (time, money, fear, pride, family) or cut it. "Family owned since 1987." *So what?* "…which means the person who answers the phone is the person who shows up." Now it matters.`,
      keyPoints: [
        "Good copy points the camera at the customer (Williams)",
        "Every sentence must survive “So what?” (Maslen)",
        "Count “we/our/[name]” vs “you/their situation”; if we wins, rewrite",
        "Most local homepages start 60–80% of sentences with “we”",
        "Keep “we” only where it's doing something for the reader"
      ],
      why: "Almost every trade prospect's website and ads fail this test. It's a fast, visible fix Zach can show on a sales call and the first edit he makes on any PMT draft.",
      example: {
        title: "Homepage hero, before and after",
        before: "“We are Sacramento's premier roofing company. We have 25 years of experience. Our team is licensed and insured. We offer free estimates.” (4 of 4 sentences start with We/Our.)",
        after: "“Wondering if your roof will make it through another winter? You'll see a video of every inch of it before anyone quotes you. You decide what gets fixed.” (Customer's situation first; the business shows up only as a benefit.)"
      },
      practice: [
        {
          prompt: "Drill D10.1: take three real pieces of copy (a prospect's homepage, a PMT ad, an email). Count we vs you, then rewrite the worst one so the customer's side wins.",
          fields: ["Piece 1: we / you count", "Piece 2: we / you count", "Piece 3: we / you count", "Rewrite of the worst one"],
          rubric: ["Counts are honest", "Rewrite opens on the customer's situation", "Remaining 'we' sentences do something for the reader", "Every line survives 'So what?'"]
        }
      ],
      today: { task: "Run the 'we' count on one Sacramento trade prospect's homepage and write a 3-sentence customer-first rewrite of their hero section. Save it as an outreach asset (Loom or DM).", output: "A before/after hero rewrite you can send a prospect", minutes: 25, suggested: false },
      check: [
        { q: "What is Andy Maslen's test for every sentence of copy? (10.1)", a: "“So what?” Every sentence must connect to something the reader cares about." },
        { q: "How do you run the “we” count and what does the result tell you?", a: "Count sentences starting with we/our/company name vs you/the customer's situation. If we wins, the copy is about the advertiser and needs a rewrite." }
      ]
    },
    {
      id: "cw-20",
      part: "craft",
      title: "Pick the structure before you write: AIDA, PAS, BAB, Bly's sequence",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 10", section: "Copy structures that work (pp. 102–103)", who: "AIDA; PAS; BAB; Robert W. Bly, The Copywriter's Handbook" },
        { doc: "The Ultimate Social Media Workbook (11/1/26)", section: "Module 6: Scripts and formats (Exercise 6A)", who: "Social Workbook (Hormozi; Brock Johnson)" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 10", section: "Recall 10.2–10.4, 10.12; Drill D10.2 + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["Persuasion tab (StoryBrand)"],
      idea: `> Pick the structure before you write. The structure is your outline; the research is your raw material; the writing is just connecting them. (Mastery Guide Ch 10)

The shapes that cover most ads:

- **AIDA: Attention → Interest → Desire → Action.** The oldest model in advertising. Grab attention, build interest with the problem or a fascinating fact, build desire with benefits and proof, ask for the action.
- **PAS: Problem → Agitate → Solve.** Name the problem, make the reader feel its cost (honestly, no fearmongering), then present the solution. **Best for problem-aware audiences**, which is most cold traffic.
- **BAB: Before → After → Bridge.** Life now, life after, and the bridge (your product) between them. **Great for transformation offers** like learning to ride.
- **Bly's motivating sequence:** 1) get attention, 2) show a need, 3) position the product as the solution, 4) prove it, 5) ask for action.
- **StoryBrand** works well for websites and longer ads; its main lesson lives in the Persuasion tab.

Before writing, Bly also maps the market with **BFD: Beliefs, Feelings, Desires**, close to Schwartz's desires, identifications and beliefs.

For short video, the Social Workbook's 30-second script grid is a compressed version of these: **0–3s hook, 3–10s problem or setup, 10–22s solution and proof, 22–30s call to action.** That's also the mentors' video ad structure (hook, problem, solution, CTA; see the Pilot Proof breakdown in Part 7).

The Workbook Answer Key's finding after writing one offer five ways: PAS is usually strongest for problem-aware cold audiences, BAB for transformations, StoryBrand for website sections.`,
      keyPoints: [
        "Choose the structure first; it's your outline",
        "AIDA: attention, interest, desire, action",
        "PAS for problem-aware cold traffic",
        "BAB for transformations (learning to ride)",
        "Bly: attention, need, solution, proof, action",
        "BFD research: beliefs, feelings, desires"
      ],
      why: "A chosen structure kills blank-page time. For PMT, PAS and BAB fit almost every cold ad; for trades, PAS and Bly's sequence fit quote-driven offers.",
      example: {
        title: "PMT in BAB (about 60 words)",
        body: "Before: “Another weekend in the car, watching riders roll past you on Highway 113.” After: “Picture next month: your own endorsement in progress, riding out with your buddy instead of waving at him.” Bridge: “PMT's beginner class starts from zero. Bike and helmet provided, everyone's new. Tap below to see the next open weekend.” (No promise of passing; check every class fact with PMT.)"
      },
      practice: [
        {
          prompt: "Drill D10.2 (four structures): write the same PMT beginner-class offer four ways, about 80–120 words each. Read them aloud and note which fits best.",
          fields: ["AIDA", "PAS", "BAB", "Bly's motivating sequence", "Which fits PMT's cold audience best, and why"],
          rubric: ["Each version is recognizably its structure", "PAS agitates honestly, no safety scare", "BAB has a vivid 'after'", "Bly's version includes real proof", "No banned PMT words"]
        }
      ],
      today: { task: "Write a 30-second PMT video script in the Social Workbook grid (0–3s hook, 3–10s problem, 10–22s solution + proof, 22–30s CTA) with a 'what's on screen' note for each row.", output: "1 filmable 30-second PMT script", minutes: 30, suggested: false },
      check: [
        { q: "Which structure is Before → After → Bridge? (10.2)", a: "BAB. Ideal for transformation offers." },
        { q: "PAS works best for which audience? (10.3)", a: "Problem-aware prospects. Agitate honestly, without fearmongering." },
        { q: "List the five steps of Bly's motivating sequence. (10.12)", a: "1) Get attention. 2) Show a need. 3) Position the product as the solution. 4) Prove it. 5) Ask for action." }
      ]
    },
    {
      id: "cw-21",
      part: "craft",
      title: "Features to benefits: add “…which means…” (twice)",
      minutes: 8,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 10", section: "Robert Bly: features to benefits, and readability; Andy Maslen (pp. 104–105)", who: "Robert W. Bly; Roy H. Williams, The Wizard of Ads; Andy Maslen" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 10", section: "Recall 10.6; Drill D10.3 + Answer Key", who: "Workbook" }
      ],
      idea: `Bob Bly's distinction: **features** are what the product *is or has*; **benefits** are what it *does for the buyer.* Andy Maslen: benefits beat features, and every feature should be translated into what it means for the reader.

Roy Williams tells a story in *The Wizard of Ads* that turns this into a habit: a salesman who silently added the words **"…which means…"** to the end of every feature. "These sheets are 330 thread count, *which means* they feel softer and last longer."

Do it twice to go deeper. The Answer Key's rule: **if your second "which means" doesn't touch a core desire (safety, money, time, status, freedom), push one more step.**

Bly's readability advice belongs here too, because benefits only land if they're read: short sentences and paragraphs, subheads, bullets, conversational language.

Where this shows up in ads: the body's job is to make the reader *feel* the benefit. Features are proof that the benefit is real. Lead with the benefit; let the feature back it up. "You won't be the nervous one left behind (classes are small)."`,
      keyPoints: [
        "Features = what it is; benefits = what it does for them",
        "Add “…which means…” to every feature",
        "Do it twice; the second should hit a core desire",
        "Lead with the benefit; use the feature as proof",
        "Short sentences, bullets, subheads so benefits get read"
      ],
      why: "Clients describe themselves in features ('licensed, 15 years, bikes provided'). Translating features into benefits is the core skill ZDub sells.",
      example: {
        title: "The Guide's which-means table",
        body: "See the table. Note how the deeper benefit is emotional (not being left behind, not being upsold, being able to trust)."
      },
      table: {
        head: ["Feature", "…which means…", "…which means (deeper)"],
        rows: [
          ["Small class size", "More one-on-one attention", "You won't be the nervous one left behind"],
          ["Bikes provided", "Nothing to buy before you know you love it", "No risk, no big upfront spend"],
          ["Photo-documented roof inspection", "You see what we see", "Nobody can upsell you on a problem you don't have"],
          ["Flat-rate written quote", "Price can't creep", "You can plan, and you can trust us"],
          ["Licensed master electrician on every job", "Done to code the first time", "You won't fail inspection when you sell, or worry about fire"]
        ]
      },
      practice: [
        {
          prompt: "Drill D10.3: list features of PMT (and/or a trade client) and add “which means” twice to each. Aim for 6.",
          fields: ["Feature 1 → which means → which means", "Feature 2 →", "Feature 3 →", "Feature 4 →", "Feature 5 →", "Feature 6 →"],
          rubric: ["Every second 'which means' touches a core desire (safety, money, time, status, freedom)", "Written from the customer's side", "Features are real for the client", "No banned PMT words"]
        }
      ],
      today: { task: "Write PMT's 6-row which-means table and turn the best two rows into one ad body paragraph that leads with the benefit and uses the feature as proof.", output: "PMT which-means table + 1 paragraph for the next ad", minutes: 25, suggested: false },
      check: [
        { q: "Williams' “…which means…” habit is used to do what? (10.6)", a: "Turn every feature into a benefit for the customer. Repeat it to go deeper." },
        { q: "How do you know your second “which means” went deep enough?", a: "It touches a core desire: safety, money, time, status or freedom. If not, push one more step." }
      ]
    },
    {
      id: "cw-22",
      part: "craft",
      title: "Frost, Seuss, Monet: Roy Williams' tricks for fresh lines",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 10", section: "Roy Williams' writing techniques; Example: De-frosted versus frosted (pp. 106–107)", who: "Roy H. Williams, Magical Worlds, Making Ads Work, The Wizard of Ads" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 10", section: "Recall 10.7, 10.8; Drill D10.4 + Answer Key", who: "Workbook" }
      ],
      idea: `Roy Williams argues that **predictable words are invisible to the brain.** If a reader has heard the phrase a thousand times ("prompt, professional service"), it slides past without registering. His techniques for writing lines that get through:

- **Frosting** (after the poet Robert Frost): replace common, predictable phrases with unexpected, interesting ones.
- **Seussing:** invent a word whose meaning the reader instantly feels. A tiny dose adds zip: "un-scary," "ride-ready."
- **Being Monet:** like the Impressionist, (1) ignore the details, (2) exaggerate the color, (3) remove the "black words," the filler words that add no image.
- **Being Robert Frank** (after the photographer): pick an unusual, revealing angle; include few details, all interesting; and **put the known underwater**, never telling readers what they already know (like Hemingway's iceberg).
- **Verbs carry the persuasion.** People can't do what they haven't first imagined doing, and verbs make them imagine it. Choose the unexpected verb.
- **First and last mental images.** Every ad needs a vivid opening image and a memorable closing one.

The Guide's example:
- De-frosted: "Our HVAC technicians provide prompt, professional service for all your heating and cooling needs."
- Frosted, Robert Frank style: "It's 104° in Roseville. Your AC is blowing warm air and the dog is lying on the tile. We'll be there before the ice cream melts."

Notice what the frosted version does: a specific place and temperature, one revealing detail (the dog on the tile), strong images, and it never says "professional."`,
      keyPoints: [
        "Predictable phrases are invisible; fresh ones get through",
        "Frosting: swap clichés for unexpected lines",
        "Seussing: an invented word with instant meaning",
        "Monet: skip details, exaggerate color, cut filler words",
        "Robert Frank: unusual angle, few but interesting details, skip the obvious",
        "Strong verbs; vivid first and last images"
      ],
      why: "Every trade ad in Sacramento says 'quality, professional, trusted.' Frosting is how ZDub's copy sounds different in the first line.",
      example: {
        title: "Frosting PMT",
        before: "“We provide a safe and supportive learning environment for new riders.”",
        after: "“Your hands will sweat on the grips for about ten minutes. Then you'll roll forward on your own for the first time, and you'll forget they ever did.”"
      },
      practice: [
        {
          prompt: "Drill D10.4: frost these predictable lines. Write a fresh version of each for a real client.",
          fields: ["“Prompt, professional service you can count on.”", "“Your satisfaction is our top priority.”", "“We go above and beyond.”", "“State-of-the-art equipment.”", "“Serving the community for over 20 years.”"],
          rubric: ["Concrete and visual", "Specific to the business, not swappable", "Uses a strong verb", "Still true"],
          model: "1) “We show up when we said. Even on the Friday before a long weekend.” 3) “Last month a tech fixed a customer's wobbly mailbox on his way out. Nobody asked him to.” 5) “We've been fixing Roseville's AC since the summer your parents bought their first cell phone.” (Workbook Answer Key; use real details only.)"
        }
      ],
      today: { task: "Take one PMT caption or ad line and write it three ways: Frosted, Monet (cut every black word), and Robert Frank (one unusual angle). Pick the best for the next post.", output: "3 versions of one PMT line + the pick", minutes: 20, suggested: false },
      check: [
        { q: "Which is Williams' technique of Frosting? (10.7)", a: "Replacing predictable phrases with unexpected, interesting ones. Predictable words are invisible to the brain." },
        { q: "What does “being Robert Frank” mean? (10.8)", a: "Choosing an unusual angle, including few but interesting details, and putting the known underwater: skip what readers already know." }
      ]
    },
    {
      id: "cw-23",
      part: "craft",
      title: "Close the loopholes: answer every objection before they leave",
      minutes: 10,
      tags: ["Book", "Mentor", "Playbook"],
      date: "2026-08-05",
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 10", section: "Roy Williams' writing techniques: Close the loopholes; Be believable by agreeing (p. 106)", who: "Roy H. Williams, The Wizard of Ads" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 10", section: "Drill D10.5 + Answer Key", who: "Workbook" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 · Applied to PMT: Persona 1 objections and objection-to-creative tests", who: "ZDub research playbook" },
        { doc: "Mentor Lessons Study Guide: 9 New Calls", section: "What makes a creative convert (address DIY)", who: "Clayton Bell, 8/5/26 (student Michael)" }
      ],
      idea: `In *The Wizard of Ads*, Roy Williams shows an insurance ad with the listener's skeptical thoughts written in parentheses after each line ("Or what?" "Too much hassle."). The copy **answers each skeptical thought in the very next sentence.** That's "closing the loopholes": persuasive copy anticipates every objection, so the reader never finds a reason to leave.

The Answer Key's model (AC tune-up):
- "Get your AC tuned before summer." *(Why? It works fine.)*
- "Most summer breakdowns start as a $14 part that wears out quietly in spring." *(Sounds like an upsell.)*
- "If we find nothing wrong, we'll tell you, and the visit costs [price], period." *(I don't have time.)*
- "Pick a 2-hour window online; it takes 40 minutes."

How to find the objections: don't guess. Pull them from reviews, comments, DMs and sales calls. The Andromeda playbook did this for PMT's nervous first-timer and got a ready-made list:
- "I'll be the slowest one and look like a fool."
- "I've never touched a motorcycle. I don't even know what a clutch is."
- "What if I drop the bike in front of everyone?"
- "I don't own a bike or gear."
- "Is it worth the money?"

Each one becomes a line (or a whole ad): "Everyone in this class is new. That's the point." "Bike and helmet provided. Just show up."

Clayton (8/5) adds the most common trade loophole, **DIY**: "Would you rather go out to Home Depot… or do you want to get an expert right now to assess it for you?"

Williams' companion rule: **be believable by agreeing.** Start with what they already know or suspect is true, then answer.`,
      keyPoints: [
        "Write the reader's skeptical thought after each line, then answer it next",
        "Pull objections from reviews, comments, DMs, sales calls",
        "PMT's big ones: looking foolish, never touched a clutch, dropping the bike, no gear, worth it?",
        "Handle DIY directly in trade ads",
        "Agree first, then answer"
      ],
      why: "Unanswered objections are why people click and don't book. Closing them in the copy lifts PMT's booking rate without spending more.",
      example: {
        title: "PMT, loopholes closed",
        body: "“Always wanted to ride?” (I'd look like an idiot.) “Everyone in the beginner class is new. That's the point.” (I don't even own a bike.) “The bike and helmet are provided.” (What if I drop it?) “You'll learn how to pick one up in the first session, calmly, with an instructor.” (Is it worth it?) “You find out you love riding before you buy a thing.” Note the last line avoids “cheapest,” one of PMT's banned words. (Confirm every class detail with PMT.)"
      },
      practice: [
        {
          prompt: "Drill D10.5: write a ~100-word ad for PMT or a trade client. Under each sentence write the reader's skeptical thought in parentheses. Then make sure the next sentence answers it.",
          fields: ["Draft with (skeptical thoughts) after each line", "Final version with every loophole closed", "Objections I couldn't answer (need info from the owner)"],
          rubric: ["Each skeptical thought is something a real customer would think", "The next line answers it directly", "Objections come from real sources (reviews, calls, Andromeda list)", "No banned PMT words; no invented facts"]
        }
      ],
      today: { task: "Read PMT's last 30 Google reviews and comments and list every objection or fear mentioned. Add any new ones to the Andromeda objection list and write a one-line answer for each.", output: "Updated PMT objection list with one-line answers", minutes: 30, suggested: false },
      check: [
        { q: "What does “close the loopholes” mean?", a: "Anticipate the reader's skeptical thought after each line and answer it in the next sentence, so no objection is left open." },
        { q: "Where should objections come from?", a: "Real customer words: reviews, comments, DMs and sales calls, not guesses." },
        { q: "How does Clayton's student handle DIY in a trade ad?", a: "Name it: “Would you rather go out to Home Depot… or get an expert right now to assess it for you?”" }
      ]
    },
    {
      id: "cw-24",
      part: "craft",
      title: "Ugly first draft, right length, ten-point edit",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 10", section: "Ann Handley: writing is a habit; Long copy or short?; The editing checklist; Example: a local ad before and after (pp. 103–109)", who: "Ann Handley, Everybody Writes; Andy Maslen; Allan Dib, Lean Marketing; Ogilvy; Schwartz; Bly" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 10", section: "Recall 10.5, 10.11, 10.13, 10.14; Client Lab L10 + Answer Key", who: "Workbook" }
      ],
      idea: `**Write ugly, then edit.** Ann Handley's most liberating idea is the **ugly first draft**: give yourself permission to write badly and fast, then rewrite. Writing is thinking; you find out what you mean by drafting. Her other rules: know your key takeaway before you start; use a framework; put the most important words first; show, don't tell; cut corporate fog ("leverage," "solutions," "best-in-class"); **edit in passes: structure first, then clarity, then line by line.** Andy Maslen: first drafts are for the writer; edited drafts are for the reader.

**How long?** Ogilvy, Schwartz, Bly and King Kong agree long copy sells *if it's interesting and the decision needs it.* Length depends on three things:
- **Awareness:** less aware needs more copy; most aware needs less.
- **Price and risk:** bigger decisions need more information and proof.
- **Complexity:** new or unusual products need more explanation.

What never works: **long and boring.** Allan Dib's *Lean Marketing* says write for **dual readership**: skimmers who read only headlines, subheads, bullets and captions, and readers who read every word. Good long copy gives the skimmer the whole argument from the subheads.

**The ten-point edit** before anything ships:
1. Is the first line the strongest it can be? (Delete the warm-up.)
2. Is it about them? (Count "we" vs "you.")
3. Is every claim specific and proven?
4. Does every feature have a "which means"?
5. Any clichés to frost?
6. Is it one angle?
7. Could a 10-year-old understand every sentence?
8. Any objections left open?
9. Is the CTA clear, single and easy?
10. Read it out loud. Where you stumble, the reader will too.`,
      keyPoints: [
        "Ugly first draft fast, then edit in passes (structure → clarity → line)",
        "Length follows awareness, price/risk and complexity",
        "Long and boring never works",
        "Write for skimmers and readers (dual readership)",
        "Run the ten-point edit on everything"
      ],
      why: "This is ZDub's quality gate. Every PMT ad, landing page section and email should pass the ten points before a client sees it.",
      example: {
        title: "The Guide's Valley Electric rebuild (hypothetical business)",
        before: "“Valley Electric has served the greater Sacramento area for 25 years. We offer residential and commercial electrical services including panel upgrades, EV chargers, and lighting. Licensed, bonded and insured. Call today for a free estimate!”",
        after: "“Thinking about an EV charger but worried your panel can't handle it? Snap a photo of your electrical panel and text it to us. Within 2 hours, a licensed electrician will tell you (free) whether you need an upgrade, and give you a flat written price for the install. No sales visit. No surprise fees. 430+ five-star reviews from Sacramento-area homeowners. → Text your panel photo.”",
        body: "The after starts on the reader's situation, offers a tiny first step, names a mechanism and time frame, removes fear, adds proof, and ends on one action. Use only real numbers."
      },
      practice: [
        {
          prompt: "Client Lab L10 (the full rebuild): take one real PMT ad or a prospect's landing-page section and rebuild it.",
          fields: ["1. Awareness level + structure chosen", "2. Ugly first draft (15 minutes, no editing)", "3. After pass 1 (structure) and pass 2 (clarity, grade 5 or lower)", "4. After pass 3 (frosting, verbs, specificity, loopholes)", "5. Ten-point checklist: which points failed and how you fixed them"],
          rubric: ["Draft was fast and unjudged", "Each pass has a different focus", "Final passes all ten checks", "Before and after are ready to test side by side"]
        }
      ],
      today: { task: "Do Client Lab L10 on PMT's weakest live ad. Put the before and after side by side and, with PMT's OK, set them up as an A/B test.", output: "PMT before/after ad pair ready to test", minutes: 45, suggested: false },
      check: [
        { q: "What does Handley's “ugly first draft” mean? (10.5)", a: "Give yourself permission to write badly and fast, then rewrite in passes." },
        { q: "What three factors decide long vs short, and what never works? (10.13)", a: "Awareness, price/risk, complexity. Long and boring never works." },
        { q: "What does Dib mean by dual readership? (10.11)", a: "Serving both skimmers (headlines, subheads, bullets, captions) and readers who read every word." }
      ]
    },
    {
      id: "cw-25",
      part: "craft",
      title: "Edit the AI draft: make it sound like you, not a robot",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Guide 03 — Ad Creative (V2)", section: "New in V2: Writing a video ad live — Editing the AI draft (Cam, 9/17); Logan's AI workflow for ads (9/25); Compliance and honesty (Paul, 10/19)", who: "Cam 9/17/26; Logan McKinney 9/25/26; Paul Snowman 10/19/26" },
        { doc: "ZDub Guide 07 — Landing Pages (V2)", section: "3. Copy rules (Logan)", who: "Logan McKinney, 10/9 and 10/13/26" }
      ],
      idea: `The mentors all use AI to draft copy. None of them ship it raw.

**How much AI does** (they agree it's most, not all): Cam (9/17) said the AI draft was "90% of the way there." Logan (9/25) said AI does 70–80%. You do the rest.

**Logan's two prompts (9/25):**
1. *Research:* "My ideal client is X. Find as much as you can about their pain points, what they struggle with, what they complain about, what costs them money, and cite where each one came from."
2. *Script:* "Here's my ideal client and their pain points. Here is exactly what I do. Show me how my service solves each pain point, then write five 30-second ad scripts, one pain point each, all in my voice."

**Feed it real context.** "Never let AI pull from thin air" (Logan). Give it client photos, reference ads and call transcripts (Paul, 10/19). Build voice profiles: voice-note journaling, or let AI interview you with 25 questions; record client meetings so scripts sound like each client.

**The edit:**
- **Cut phrases that sound like AI.** Cam removed "listen up" and "here's the actual mechanism."
- **Remove em dashes.** Logan: they "scream AI," and some business owners hate AI. "No em dashes, period."
- **Watch the open loops.** AI tends to open and close them right away (Cam).
- **Humanize** with a little slang, and use the customer's business language (Cam kept "P&L" on purpose for business owners). Logan: contractors say "jobs," card shops say "people buying cards."
- **Check every number.** AI invents stats (Paul). Never let a made-up number ship.
- **Read every word, then read it out loud** before filming. Lean into the delivery; half-hearted reads come off as too aggressive (Cam).
- **Get feedback** from a coach before filming (Cam, Logan).

> "AI is our tool. It is not our storefront." (Logan, 9/25)

Cam's last point is about nerve: direct response means "getting like 99 people to say no and one person to say, hell yeah." If you beat around the bush, Meta shows it to "the beat around the bush people."`,
      keyPoints: [
        "AI drafts 70–90%; you edit the rest",
        "Give AI real context: transcripts, photos, reference ads, voice profiles",
        "Cut AI phrases and em dashes; fix closed loops",
        "Use the customer's words and a little slang",
        "Verify every number; read it out loud; get feedback",
        "“AI is our tool. It is not our storefront.”"
      ],
      why: "Zach will draft most PMT and prospect copy with AI. These edits are what make it sound like ZDub, keep it honest, and keep it from reading as AI to owners who hate AI.",
      example: {
        title: "AI draft → mentor edit (PMT)",
        before: "“Listen up — if you've ever dreamed of riding, here's the actual secret: our comprehensive program empowers new riders to unlock their full potential — guaranteed!”",
        after: "“If you've been saying ‘someday I'll ride’ for a few years now, this one's for you. There's a reason most people never start, and it's not the money…”",
        body: "Cut: “listen up,” “here's the actual,” both em dashes, “comprehensive/empowers/unlock,” and “guaranteed” (banned for PMT). Added: a callout and an open loop that the next line doesn't close yet."
      },
      practice: [
        {
          prompt: "Run Logan's script prompt for PMT's nervous first-timer (give the AI the Andromeda persona table as context). Paste one of the five scripts, then edit it with the mentor rules.",
          fields: ["AI script as generated", "AI phrases and em dashes I cut", "Numbers or claims I had to verify or remove", "Final edited script (read aloud twice)"],
          rubric: ["No em dashes, no 'listen up'-style filler", "Open loop stays open until the solution", "Every fact is true and every number real", "Sounds like a person; reads clean out loud", "No banned PMT words"]
        }
      ],
      today: { task: "Build a ZDub voice profile: have AI interview you with 25 questions (Logan's method) and save the answers as a 'Zach voice' doc to paste into every future copy prompt.", output: "A saved ZDub voice profile doc", minutes: 30, suggested: false },
      check: [
        { q: "What two prompts does Logan use to get ad scripts from AI?", a: "A research prompt (pain points, struggles, complaints, costs, with sources) and a script prompt (map the service to each pain point, then five 30-second scripts, one pain point each, in my voice)." },
        { q: "Name three edits the mentors make to AI copy.", a: "Any three: cut AI-sounding phrases, remove em dashes, fix loops AI closes too early, humanize with slang/customer language, verify every number, read it aloud, get coach feedback." },
        { q: "What did Logan mean by “AI is our tool. It is not our storefront”?", a: "Use AI to draft, but what the customer sees must be edited, true and in your own voice." }
      ]
    },
    {
      id: "cw-26",
      part: "voice",
      title: "If you confuse, you lose: the grunt test and the price of clarity",
      minutes: 10,
      tags: ["Book", "Mentor"],
      date: "2026-08-05",
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 12 — Voice, Tone & Clarity", section: "Clarity first; The clarity checklist (pp. 121–122)", who: "Donald Miller, Building a StoryBrand; Roy H. Williams, The Wizard of Ads; Steve Krug" },
        { doc: "Mentor Lessons Study Guide: 9 New Calls", section: "What makes a creative convert (homeowner language, not trade jargon)", who: "Clayton Bell, 8/5/26" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 12", section: "Recall 12.1, 12.2, 12.6, 12.11; Drill D12.1 + Answer Key", who: "Workbook" }
      ],
      idea: `Donald Miller's rule: **if you confuse, you'll lose.** His **grunt test**: could someone glance at your ad or website for a few seconds and grunt back answers to three questions?
1. **What do you offer?**
2. **How will it make my life better?**
3. **What do I need to do to buy it?**

If not, it fails, no matter how beautiful it is. (Steve Krug says the same about websites: don't make me think.)

Roy Williams adds a sharper edge, the first of his "nine secret words": **the risk of insult is the price of clarity.** Plain speech, the simple essential truth stated as directly as you can, will occasionally offend someone. Mushy, safe language never offends anyone, which is exactly why it never persuades anyone. Most advertising, he says, is "flaccid" because nobody will pay that price. Example: "Yes, we cost more than the guy on Craigslist. We also show up." Some bargain hunters won't like it; the right customers will.

**The clarity checklist:**
- **One idea per piece.** Williams: the best ads are like a **rhinoceros**: a single point, made powerfully. Seventeen things to say = seventeen ads.
- **Concrete over abstract.** "Done by Friday" beats "timely completion."
- **Customer words over industry words.** The client says "HVAC system"; the customer says "my AC." Mentor Clayton (8/5) saw a trade ad confuse everyone with "a run goes dark." Use homeowner language.
- **Short sentences, common words** (Ogilvy, Bly, Handley, King Kong).
- **The one-liner:** problem → solution → result (Miller; full treatment in the Persuasion tab).`,
      keyPoints: [
        "Grunt test: what is it, how does it help, how do I get it?",
        "The risk of insult is the price of clarity",
        "One idea per ad (the rhinoceros)",
        "Concrete over abstract; customer words over jargon",
        "Short sentences, common words"
      ],
      why: "Prospects' sites and ads usually fail the grunt test, and it's a five-second demo Zach can do on a sales call. It's also the last check before any PMT ad ships.",
      example: {
        title: "Grunt-test header that passes (Answer Key D12.1)",
        before: "“Empowering Riders Since 2005.” (What is it? How does it help? What do I do? No answers.)",
        after: "“Beginner motorcycle classes in [region]. Ride with confidence in one weekend, even if you've never touched a bike. [See class dates]”",
        body: "Headline says what and who; subhead says how life gets better; one obvious button."
      },
      practice: [
        {
          prompt: "Drill D12.1: run the grunt test on five local homepages (include PMT). Five seconds each, score 0–3. Rewrite the worst header so it scores 3.",
          fields: ["Site 1: score + note", "Site 2", "Site 3", "Site 4", "Site 5", "Rewrite of the worst header (headline / subhead / button)"],
          rubric: ["Scores are honest (5 seconds only)", "Rewrite answers all three questions at a glance", "One button", "Customer words, no jargon"]
        },
        {
          prompt: "Write one line for a trade client that pays “the price of clarity”: plain, a little risky, and true.",
          fields: ["My clear-but-risky line", "Who it might put off, and why that's fine"],
          rubric: ["States a real, direct truth", "Would turn off the wrong customer, attract the right one", "Not insulting to the customer"]
        }
      ],
      today: { task: "Grunt-test PMT's homepage and booking page on your phone. If either scores under 3, write a new header and send it to PMT's owner.", output: "PMT grunt-test scores + a new header if needed", minutes: 20, suggested: false },
      check: [
        { q: "What three questions does Miller's grunt test ask? (12.1)", a: "What do you offer? How will it make my life better? What do I need to do to buy it?" },
        { q: "Why does Williams compare the best ads to a rhinoceros? (12.2)", a: "They make a single point, powerfully. One idea per piece." },
        { q: "Explain “the risk of insult is the price of clarity.” (12.11)", a: "Plain, direct speech will occasionally offend someone; mushy language never offends anyone, which is why it never persuades. E.g. “Yes, we cost more than the guy on Craigslist. We also show up.”" }
      ]
    },
    {
      id: "cw-27",
      part: "voice",
      title: "Voice vs tone, and the one-page voice guide",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 12", section: "Voice and tone; Writing a voice guide for a client; ZDub Application: ZDub's own voice (pp. 122–124)", who: "Ann Handley; Mark Shaw, Copywriting; David Ogilvy; Robert Cialdini; Roy H. Williams" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 12", section: "Recall 12.3, 12.4, 12.9; Client Lab L12 + Answer Key", who: "Workbook" }
      ],
      idea: `**Voice** is the personality a brand speaks with, consistent everywhere. **Tone** is how that voice adapts to the situation. You speak differently at a funeral and a barbecue, but you're still you. (Ann Handley; Mark Shaw spends real time on brand tone of voice across every format.)

**Why voice matters commercially:**
- **Recognition:** a consistent voice is a recall cue, "like a logo you can hear." Williams' branding keys (consistency, frequency, anchoring) apply.
- **Liking and unity:** people like those who talk like them (Cialdini). A voice that matches the customer's world says "one of us."
- **Differentiation:** in a stage-5 market where every claim is identical, personality may be the only thing that stands out.

What it doesn't do: **replace the offer.** A voice makes you recognizable, likable and different; it never lets you skip a strong offer.

Ogilvy's advice fits every brand voice: write the way you talk, use short words and sentences, avoid jargon and pompous words.

**The one-page voice guide** (so every caption, ad, email and script sounds like the same company, whoever writes it):
1. **Three or four traits as "this, not that":** confident, not cocky; friendly, not goofy; expert, not technical; direct, not pushy.
2. **Words we use / words we never use.** "Riders," not "students"? Ban "solutions," "leverage," "best-in-class."
3. **How we talk about price, competitors and mistakes.** Honest about cost; never trash competitors by name; own mistakes fast.
4. **Sentence style:** short and punchy or warm and conversational? Emojis? Humor, and what kind?
5. **Two examples of the same message:** on-voice and off-voice.

**ZDub's own voice** (from the Guide): **direct, not blunt** ("Here's what's broken and how we'd fix it"); **confident, not hype** (numbers and specifics, no "explode your sales!!!"); **strategic, not technical** (outcomes and business, not algorithms); **partner, not vendor** ("we," "your goal," "let's"). Avoid "guru," "hack," "10x," "crush it." Own "clear," "measurable," "partner," "next step."`,
      keyPoints: [
        "Voice = consistent personality; tone = how it adapts",
        "Voice drives recognition, liking and differentiation, but never replaces the offer",
        "Voice guide: traits, word lists, stances, style, on/off examples",
        "ZDub: direct not blunt, confident not hype, strategic not technical, partner not vendor",
        "Ban generic words; at least five per client"
      ],
      why: "A one-page voice guide for PMT means every ad, reel caption and email sounds like PMT, even when AI drafts it. It's also a deliverable ZDub can hand every new client.",
      example: {
        title: "PMT voice guide starter",
        body: "Traits: calm, not clinical; encouraging, not cheesy; expert, not technical; straight, not salesy. Words we use: riders, first-timers, the range, instructor. Words we never use: coach, cheap, easy, discount, guaranteed, “pass for sure” (PMT's ad rules), solutions, adrenaline-junkie hype. Price: state it plainly, explain what's included. Style: short lines, warm, a little humor about nerves, no emojis in ads. (Confirm traits with PMT's owner.)"
      },
      practice: [
        {
          prompt: "Client Lab L12 (part 1): write PMT's one-page voice guide with all five parts.",
          fields: ["1. Traits (this, not that) x3–4", "2. Words we use / never use (5+ banned)", "3. How we talk about price, competitors, mistakes", "4. Sentence style (length, emojis, humor)", "5. Same message on-voice vs off-voice"],
          rubric: ["Traits are specific to PMT (not 'friendly and professional')", "Banned list includes PMT's ad-rule words", "On/off examples make the difference obvious", "Owner would recognize themselves in it"]
        },
        {
          prompt: "Client Lab L12 (part 2): rewrite three existing ZDub captions or bio lines to match ZDub's voice traits.",
          fields: ["Original 1 → on-voice", "Original 2 → on-voice", "Original 3 → on-voice"],
          rubric: ["Direct, confident, strategic, partner", "No guru/hack/10x/crush it", "Specific and measurable"]
        }
      ],
      today: { task: "Draft PMT's voice guide (part 1 above), then send it to PMT's owner for a 5-minute review and save the approved version where every ad prompt can use it.", output: "PMT voice guide v1, shared with the owner", minutes: 40, suggested: false },
      check: [
        { q: "What's the difference between voice and tone? (12.3)", a: "Voice is the consistent personality; tone adapts it to the situation." },
        { q: "Which is NOT a commercial reason a consistent voice matters: differentiation, liking/unity, it lets you skip the offer, recognition? (12.4)", a: "It lets you skip the offer. A voice never replaces a strong offer." },
        { q: "List the five parts of a one-page voice guide. (12.9)", a: "Traits as 'this, not that'; words we use / never use; how we talk about price, competitors and mistakes; sentence style; on-voice vs off-voice examples." }
      ]
    },
    {
      id: "cw-28",
      part: "voice",
      title: "Sound like a person: Non Ads, truth lists and timed practice",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Ch 12", section: "Make it sound like a person; Creative confidence: writing with a point of view; Example: same message, three voices (pp. 124–126)", who: "Roy H. Williams; Dan Nelken, A Self-Help Guide for Copywriters; Brian Kurtz on Eugene Schwartz; King Kong" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 12", section: "Recall 12.5, 12.7, 12.8, 12.10; Drills D12.2–D12.4 + Answer Key", who: "Workbook" }
      ],
      idea: `King Kong's rule for ads is "make it look like content, not an ad." Its twin: **make it sound like a person, not a company.** Roy Williams called the best ads **"Non Ads"**: they tell the story the way one person speaks to another, without clichés or unsupported claims. He warns that staff will often say such ads "don't sound right" because they aren't slick. That's the point: slick is what people have learned to ignore.

**Five ways to sound human:**
1. First person from a real person (the owner, an instructor, a crew lead).
2. Contractions (we're, you'll, don't).
3. One surprising, true detail in every piece.
4. Allow imperfection: raw video, a stumble, a laugh (Nelken's "accept your messiness").
5. Read every line out loud. If you wouldn't say it to a customer's face, cut it.

The Guide's three voices for the same message:
- Corporate: "We offer comprehensive motorcycle safety training programs designed for riders of all experience levels."
- Hype: "CRUSH your fear and become a RIDING BEAST this weekend!!!"
- Human and clear: "Never ridden before? Perfect. Most of our students haven't. Bring your nerves; we'll bring the bike."

**Creative confidence** (Dan Nelken): you can't write with a voice if you're afraid to write.
- **Truth lists:** write down small, relatable truths about a client's category. "Everyone's afraid of dropping the bike in front of people." "Nobody tells you how heavy the bike feels at a stop." Human truths are the raw material of great copy.
- **Deliberate practice:** timed sprints on your weak spots (e.g. as many headlines as you can in 15 minutes).
- **Talk back to the inner critic:** jot negative thoughts during a sprint, then ask of each: is it true? Is it useful? Most aren't ("this is dumb"); keep the useful ones ("this is too long") as editing rules.
- **Take breaks; treat rejection as data.**

Eugene Schwartz reportedly wrote in timed sessions of 33 minutes and 33 seconds, distraction-free, then took a break. **Structure beats inspiration.**`,
      keyPoints: [
        "Non Ads: one person talking to another, no clichés",
        "First person, contractions, one true surprising detail, imperfection, read aloud",
        "Corporate is lifeless, hype is empty, human is specific",
        "Keep a truth list per client",
        "Timed sessions + breaks beat waiting for inspiration"
      ],
      why: "Local customers trust people, not brochures. Truth lists and timers also give Zach a daily writing habit that doesn't depend on mood.",
      example: {
        title: "Same message, three voices (HVAC, Answer Key D12.2)",
        before: "Corporate: “We provide comprehensive residential HVAC services.” Hype: “🔥 BEAT THE HEAT with the BEST AC team EVER!!! 🔥”",
        after: "Human: “Your AC quit on the hottest day of the year? Of course it did. We've got a tech in Rocklin this afternoon.”"
      },
      practice: [
        {
          prompt: "Drill D12.3: write a truth list for PMT's category (aim for 10 here, 20 later), then turn three into ad openings.",
          fields: ["Truths 1–5", "Truths 6–10", "Opening from truth A", "Opening from truth B", "Opening from truth C"],
          rubric: ["Each truth is small, relatable, and something a rider would nod at", "Openings start with the truth, not the class", "Sounds like a person talking", "No banned PMT words"],
          model: "Truths (Answer Key D12.3): “Everyone's afraid of dropping the bike in front of people.” “Half of new riders have a spouse who's secretly nervous.” “Nobody tells you how heavy the bike feels at a stop.” Opening: “Everyone's afraid of dropping the bike in front of people. Here's why it almost never happens in our class…” (Only if PMT confirms that claim.)"
        },
        {
          prompt: "Drill D12.2: write one message three ways (corporate, hype, human) for a trade client.",
          fields: ["Corporate", "Hype", "Human and clear"],
          rubric: ["Corporate is accurate but lifeless", "Hype is loud and empty", "Human is specific, a little surprising, and sounds spoken"]
        }
      ],
      today: { task: "Drill D12.4: set a 15-minute timer and write as many on-voice PMT captions as you can. Jot the inner critic's comments in the margin, then mark each comment true/useful or not.", output: "A batch of PMT captions + 1–2 editing rules you keep", minutes: 25, suggested: false },
      check: [
        { q: "What are Williams' “Non Ads”? (12.5)", a: "Ads that sound like one person talking to another, with no clichés. Staff often say they “don't sound right” because they aren't slick, which is the point." },
        { q: "What are Nelken's truth lists? (12.7)", a: "Lists of small, relatable truths about everyday life and a client's category, used as raw material for copy." },
        { q: "What work habit was Schwartz known for? (12.8)", a: "Timed, distraction-free writing sessions (reportedly 33:33) with breaks in between." }
      ]
    },
    {
      id: "cw-29",
      part: "practice",
      title: "Breakdown: the Pilot Proof Program video ad, part by part",
      minutes: 14,
      tags: ["Mentor"],
      date: "2026-09-17",
      source: [
        { doc: "LC_Example_Ads.txt", section: "Script (Hook / Problem / Solution / CTA): the “Pilot Proof Program” ad", who: "Cam, written live on the Follow Ad call, 9/17/26" },
        { doc: "ZDub Guide 03 — Ad Creative (V2)", section: "New in V2: Writing a video ad live (structure and open loops; the ad's offer; format and finishing); Applied to ZDub Media", who: "Cam, 9/17/26 (the Applied box is Claude's input, not the mentors')" },
        { doc: "Mentor Lessons Study Guide: 9 New Calls", section: "Top takeaways #5 (no money-back guarantee under $10k/month)", who: "Paul Snowman, 7/28/26" }
      ],
      alsoIn: ["Mentor Guide 03", "Ad Creative tab", "Offers tab (guarantees)"],
      idea: `This is the full ad mentor Cam wrote, filmed and launched for his own agency on the 9/17 call. It uses the mentors' video structure: **hook, problem, solution, CTA, held together by open loops.** Read it, then read the labels.

**(Hook)** "If you run a local business here in Scottsdale, Arizona and you're sick and tired of agencies draining your wallet EVEN IF they don't actually make YOU money... I've got something special for ya... it's called triple P."

**(Problem)** "My guess is you've tried posting yourself, or you handed it to a freelancer, maybe even a family member's kid, or you paid an agency that took your money upfront and gave you 'brand awareness' aka NOTHING! Weeks went by. Maybe months... and what's CRAZY is your business DIDN'T make more money... but yet you still added a monthly expense... The thing is... most agencies get paid the same amount whether you get more customers or stay the same. So their services aren't built around YOUR success... It's built around keeping YOU paying THEM as long as possible..."

**(Solution)** "Here's what I do instead. I call it triple P... the Pilot Proof Program. Before you pay me a single DIME... we sit down and agree on one specific target that makes you more money... which, if we're being honest, is probably just more customers... And then I run your content and your paid ads myself for two weeks, completely free. If we hit the number previously agreed on that means you're getting actual results, so continuing to get those SAME results and paying me to do so will be an absolute no brainer because you'd be making way more than what you'd pay me. Now let's say I don't hit the target we agreed on...? You can just tell me to take a hike and kick some rocks."

**(CTA)** "So if you're a local business here in Scottsdale, Arizona and you want to try and be happy before you buy, then click the link below, follow me on Instagram, and I'll reach out to you about what it looks like to implement the Pilot Proof Program into your business."

**What each part is doing:**
- **Hook:** callout + town (Cam's ~20M-view template), a pain the viewer already feels (problem aware), and an **open loop**: the name "triple P" with no explanation.
- **Problem:** lists the alternatives they've tried (**concentration**: DIY, freelancer, the family member's kid, the agency), agitates with time ("weeks… months"), then gives the *reason* it failed: agencies get paid either way. That's a villain and a belief they already half-hold. The loop stays open.
- **Solution:** closes the loop with the **named mechanism**, in three steps (agree a target → two weeks free → pay only if it hits), plus **risk reversal** in plain, slangy language ("take a hike and kick some rocks"). Cam's honest framing on the call: "Am I guaranteeing that you get a result? No, but I'm guaranteeing that you will never pay me unless you do."
- **CTA:** repeats the callout and town, adds a tiny line of identity/benefit ("be happy before you buy"), then one clear set of instructions.

Format notes from Cam: length is "whatever it takes" (30 seconds to 3 minutes); no B-roll needed when starting out; captions on but not animated; read it out loud before filming. Offer note: this matches Paul's 7/28 advice for small retainers ("we work for free until we hit X" instead of a money-back guarantee). The Mentor Guide's Applied box (Claude's input, not mentor teaching) cautions Zach to borrow the free-trial offer only if ZDub actually offers it.`,
      keyPoints: [
        "Hook: callout + town + felt pain + an unexplained name (open loop)",
        "Problem: list failed alternatives, agitate with time, name the villain",
        "Solution: reveal the named mechanism in 3 steps + plain-language risk reversal",
        "CTA: repeat callout and town, one clear instruction",
        "Keep loops open until the solution; AI tends to close them early"
      ],
      why: "This is a proven, mentor-built template ZDub can adapt for its own ads and for any client. Swap the city, the pain, the mechanism and the offer, and keep the bones.",
      example: {
        title: "Same bones, ZDub version (only if the offer is real)",
        body: "Hook: “If you run a trades business here in Sacramento and you're tired of paying for ‘reach’ that never turns into booked jobs…” Problem: the nephew, the boosted posts, the agency on a 12-month contract; agencies get paid either way. Solution: name ZDub's real process and real offer (the Mentor Guide notes ZDub's live page sells a discovery session for a paid partnership, so the solution must match that). CTA: “If you're a Sacramento contractor, click the link below and…”"
      },
      table: {
        head: ["Part", "Job", "Technique used"],
        rows: [
          ["Hook", "Stop the right person; open a loop", "Callout + proximity; problem-aware pain; named mechanism dropped early"],
          ["Problem", "Pour fuel on the fire", "Concentration (failed alternatives); agitation over time; villain/reason why"],
          ["Solution", "Close the loop, reduce risk", "Named mechanism in steps; risk reversal; plain slang"],
          ["CTA", "One next step", "Repeat callout + town; small benefit line; clear instruction"]
        ]
      },
      practice: [
        {
          prompt: "Write a 45–75 second PMT video ad in the same four-part structure. Keep the loop open from the hook to the solution. Follow PMT's copy rules: no “coach,” “cheap,” “easy,” “discount,” “guaranteed,” no refund/money-back language, no promise of passing the endorsement.",
          fields: ["Hook (callout + town + pain + open loop)", "Problem (failed alternatives + agitation + the real reason)", "Solution (named mechanism + offer + risk handled honestly)", "CTA (repeat callout, one instruction)"],
          rubric: ["Hook calls out who and where, with no greeting", "A loop opens in the hook and closes in the solution", "Problem lists real alternatives (friend in a parking lot, YouTube, putting it off)", "Solution's mechanism and class facts are confirmed with PMT", "One CTA; no banned PMT words", "Reads clean out loud"],
          model: "Hook: “If you live around Woodland and you've been saying ‘someday I'll ride’ for years, but the thought of dropping a bike in front of strangers stops you cold… there's a reason that fear goes away faster than you think.”\nProblem: “Maybe a buddy offered to teach you in an empty parking lot. Maybe you watched a few YouTube videos, then closed the tab. Meanwhile another season goes by and you're still the one in the car. The thing is, most of that fear comes from not knowing what happens on day one.”\nSolution: “Here's how PMT's beginner class works. Everyone in it is new. You start with the bike off and walk it. Then the clutch, one small step at a time. The bike and helmet are provided, so you find out you love riding before you buy a thing. [Confirm all details with PMT.]”\nCTA: “So if you're near Woodland and this is the year, tap the link below and see the next open weekend.”"
        }
      ],
      today: { task: "Write the PMT script above, read it out loud twice, cut anything that sounds like AI, and send it to a coach (or PMT's owner) for feedback before filming, the way Cam tells students to.", output: "1 PMT video script sent for feedback", minutes: 40, suggested: false },
      check: [
        { q: "What are the four parts of the mentors' video ad structure?", a: "Hook, problem, solution, call to action, held together by open loops." },
        { q: "How did Cam open a loop in the hook, and where did he close it?", a: "He dropped a name with no explanation (“it's called triple P”) and revealed it as the Pilot Proof Program in the solution section." },
        { q: "What does the problem section do besides agitate?", a: "It lists the alternatives they've tried (concentration) and gives the reason they failed: agencies get paid either way." }
      ]
    },
    {
      id: "cw-30",
      part: "practice",
      title: "Practice bank: 25 hook and headline formulas + the weekly sprint",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide, Appendix A — Headline & Hook Formula Bank", section: "Sections 1–16 + ZDub Routine (pp. 271–280)", who: "Mastery Guide (Bly, Caples, Hormozi, Schwartz patterns)" },
        { doc: "ZDub Marketing Mastery Guide, Ch 9", section: "How to write headlines: volume, then judgment (pp. 98–99)", who: "Robert Bly; Dan Nelken" },
        { doc: "ZDub Marketing Mastery Workbook, Ch 9", section: "Recall 9.15; Drill D9.8 · The headline sprint; Client Lab L9 + Answer Key", who: "Workbook" }
      ],
      idea: `The pros don't write one headline; they write dozens. Bly, Nelken and content teams alike say **write at least 20–25 versions, then choose.** The Answer Key adds: your best headline is rarely in the first ten; it shows up after you've exhausted the obvious ones.

**The five-step headline process (Guide Ch 9):**
1. **Review the research:** the customer-words bank, the desire, the awareness stage, the sophistication stage.
2. **Write 25 fast** across different types (Bly's eight, Nelken's techniques, the Meta levers). Don't judge yet.
3. **Score** them on the 4 U's and Hormozi's seven components.
4. **Pick the top five and test them** as ad headlines, hooks or subject lines.
5. **Bank the winners** in a swipe file by client and type.

**The ZDub routine (Appendix A):** for every new concept, write **25 headlines (from at least five approaches in the bank), 10 video hooks, and 5 lead-ins.** Score them, pick five to test, log the winners in the client's swipe file.

**How to use the bank:** pick the approach that matches the audience's awareness, fill the blanks from the client's customer-words bank, then make it **specific and true.** These are patterns, not scripts.

The table holds 25 of the strongest formulas from Appendix A's 120+, chosen to cover every awareness level. PMT check on each: no "coach," "cheap," "easy," "discount," "guaranteed," and no promise of passing.

**Client Lab L9** turns this into a real test: run a 25-headline sprint and a 10-hook sprint, launch the top five headlines and top three hooks as variations (same offer, same audience, only the opening changes), then record hook rate, click-through, cost per lead and lead quality, and write a one-paragraph note on why the winner won. Over months, those notes become the playbook for that market.`,
      keyPoints: [
        "Write 25, judge later; the best one is rarely in the first ten",
        "Process: research → 25 fast → score (4 U's + Hormozi 7) → test top 5 → bank winners",
        "ZDub routine per concept: 25 headlines, 10 hooks, 5 lead-ins",
        "Match the formula to awareness; make it specific and true",
        "Only change the opening when you test openings"
      ],
      why: "This is Zach's daily reps machine. Ten minutes of formulas a day builds the hook bank that feeds every PMT and prospect campaign.",
      example: {
        title: "One formula, two businesses",
        body: "Formula #3 “[Result], even if [objection].” PMT: “Learn to ride this month, even if you've never touched a clutch.” HVAC: “A cooler house by Friday, even if your system is 15 years old.” (Only if the HVAC client can actually do Friday.)"
      },
      table: {
        head: ["#", "Approach (awareness)", "Formula", "Example (from the bank, some adapted for PMT rules)"],
        rows: [
          ["1", "Direct benefit (solution/most)", "Get [result] without [pain].", "Get a new roof without a single surprise on the invoice."],
          ["2", "Direct benefit", "[Result] in [time frame].", "Ride confidently in one weekend."],
          ["3", "Direct benefit", "[Result], even if [objection].", "Learn to ride, even if you've never touched a clutch."],
          ["4", "Direct benefit", "All of the [benefit], none of the [drawback].", "All of the riding, none of the intimidation. (Bank says \"coaching\"; PMT bans that word.)"],
          ["5", "How-to (problem/solution)", "How to tell if [problem].", "How to tell if your roof will survive another winter."],
          ["6", "How-to", "How we [mechanism] so you [benefit].", "How we photograph your panel so you never overpay."],
          ["7", "How-to", "How to [avoid mistake] before you [action].", "How to avoid a $5,000 mistake before you buy your first bike."],
          ["8", "Question (problem)", "Want to [desire] but [obstacle]?", "Want to ride, but nervous you'll drop the bike?"],
          ["9", "Question", "Do you [problem symptom]?", "Does your AC run all day but never cool the house?"],
          ["10", "Question", "Ready for [season/event]?", "Ready for the first 100° day?"],
          ["11", "News (recency)", "New: [offer/service] in [place].", "New: Saturday classes now in [town]."],
          ["12", "News", "[Town] update: [news + benefit].", "Woodland update: [real number] seats just opened for this weekend."],
          ["13", "News", "What [recent event] means for your [thing].", "What last night's wind means for your roof."],
          ["14", "Curiosity (+ benefit)", "Why we [unexpected action].", "Why we turned down a $14,000 job last week."],
          ["15", "Curiosity", "The [mistake/secret/reason] nobody tells you about [topic].", "The thing nobody tells you about your first riding class."],
          ["16", "Numbers & lists", "[Number] things to [do] before [event].", "7 things to know before your first riding class."],
          ["17", "Problem & stakes", "The hidden cost of [cheap alternative].", "The hidden cost of the cheapest roofing bid."],
          ["18", "Mistakes & warnings", "Don't [action] yet. Check this first.", "Don't replace your AC yet. Check this first."],
          ["19", "Contrarian (conflict)", "Why we tell customers to [counterintuitive advice].", "Why we tell new riders to buy gear last."],
          ["20", "Story & testimonial", "She showed up [before]. [Time] later, she [after].", "She showed up shaking. Two days later, she rode the whole range."],
          ["21", "Local & proximity", "[Town] [audience]: [benefit/news].", "Citrus Heights homeowners: this is what we're finding in 1990s attics."],
          ["22", "Identity & callout", "For [specific person] who [situation].", "For adults who've always wanted to ride."],
          ["23", "Offer-led (most aware)", "[Number] seats left: [event], [place], [date].", "[Real number] seats left: beginner class, Woodland, [date]."],
          ["24", "Mechanism (stage 3–4)", "Why our [process step] means [benefit].", "Why our drone inspection means no one sells you a roof you don't need."],
          ["25", "Video hook", "(Callout) “If you've ever [situation], watch this.”", "“If you've ever sat in traffic wishing you were on a bike, watch this.”"]
        ]
      },
      practice: [
        {
          prompt: "Fill 5 formulas from the table for PMT. Note the formula # and the awareness level each one targets. Use at least four different approaches.",
          fields: ["PMT #1 (formula #, level)", "PMT #2", "PMT #3", "PMT #4", "PMT #5"],
          rubric: ["At least four different approaches", "Each matches the awareness level of the audience you'd show it to", "Specific (number, time, town or mechanism) and true", "No banned PMT words; no promise of passing"]
        },
        {
          prompt: "Fill 5 formulas for one Sacramento-area trade (roofer, HVAC, plumber, pressure washer, med spa...). Then score all ten on the 4 U's (0–4).",
          fields: ["Trade #1 (formula #, level)", "Trade #2", "Trade #3", "Trade #4", "Trade #5", "4 U scores for all 10; top 3 to test"],
          rubric: ["Town or neighborhood appears in at least two", "At least one mechanism formula", "Top picks score 3+ on the 4 U's", "Real numbers only, or [placeholders]"]
        }
      ],
      today: { task: "Drill D9.8: set a 20-minute timer and write 25 headlines for one PMT offer using at least five approaches from the bank. Don't judge until the timer rings. Then score, pick five, and log them in the hook bank tracker for testing.", output: "25 headlines, top 5 logged for a test", minutes: 35, suggested: false },
      check: [
        { q: "Describe the five-step headline process. (9.15)", a: "1) Review the research (customer words, desire, awareness, sophistication). 2) Write 25 fast without judging. 3) Score with the 4 U's and Hormozi's seven. 4) Pick the top five and test. 5) Bank winners by client and type." },
        { q: "What's the ZDub routine for every new concept?", a: "25 headlines (from at least five approaches), 10 video hooks, 5 lead-ins; score, pick five to test, log winners in the client's swipe file." },
        { q: "In a headline test (Client Lab L9), what should change between variations?", a: "Only the opening. Same offer, same audience, different headlines or hooks, so the result tells you which opening won." }
      ]
    }
  ]
});
