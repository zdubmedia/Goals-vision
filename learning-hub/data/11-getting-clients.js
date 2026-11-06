HUB.tab({
  id: "getting-clients",
  title: "Getting Clients (Growing ZDub)",
  icon: "rocket",
  tagline: "Find the owner, open the conversation, book the call. Every week, on purpose.",
  intro: "This tab is ZDub's own growth engine. You'll learn why acquisition can never stop, where client one comes from, and the full local outreach loop the mentors teach: build a list, research one gap, email, call, walk in, follow up. Then you'll market ZDub itself the way you'd market a client. Every lesson ends with a real outreach piece for a real Sacramento-area prospect.",
  parts: [
    { id: "why", title: "Part 1 · Why acquisition never stops" },
    { id: "first", title: "Part 2 · Landing client one" },
    { id: "loop", title: "Part 3 · The local outreach loop: list, research, email" },
    { id: "calls", title: "Part 4 · Cold calling" },
    { id: "walkin", title: "Part 5 · Walk-ins, gatekeepers and the long follow-up" },
    { id: "systems", title: "Part 6 · Outreach psychology and other systems" },
    { id: "zdub", title: "Part 7 · Marketing ZDub itself" }
  ],
  trackers: [
    { id: "outreach-log", title: "Outreach log", goal: "3–5 researched businesses a day, each emailed, called and visited (Clayton, 8/26)", fields: ["Business + niche + town", "The one gap (with evidence)", "Email sent (date)", "Call (date + result)", "Walk-in (date + result)", "Next step + date"] },
    { id: "objection-textbook", title: "Objection textbook", goal: "Every new brush-off gets a written rebuttal the same day (Calum, 8/28)", fields: ["Brush-off, in their exact words", "Business type", "My “that's actually why I called” answer", "Did it work?"] },
    { id: "weekly-number", title: "Weekly outreach number", goal: "One number, set Monday, logged daily (Tayt, 10/30)", fields: ["Week of", "Target (e.g. 100 dials or 15 real conversations)", "Actual", "What got in the way / what I'll change"] }
  ],
  tools: [],
  lessons: [
    {
      id: "gc-01",
      part: "why",
      title: "Referrals are rain. Cold acquisition is a well.",
      minutes: 9,
      tags: ["Course"],
      source: [
        { doc: "Lesson 2.1 — Why Sell To Cold Traffic", section: "What cold acquisition is (and is not); Reason 1: Infinite supply", who: "Course lesson (cites Robin Dunbar, 1992; SBA Office of Advocacy)" }
      ],
      idea: "**Cold acquisition** means reaching people who have never heard of you, through a channel where you control the results like a dial. Both halves matter. A stranger you only reach by luck (a post that happens to go viral, someone stumbling onto your site) isn't a system. A channel you control that only reaches people you already know (referral groups, your circle) has a ceiling.\n\nThe lesson's analogy: **referrals are rain.** Free water is great and nobody complains when it pours. But you can't schedule rain, you can't make it rain twice as hard, and droughts show up whenever they want. **A cold system is a well with a pump.** You decide when the water comes out and how much.\n\nThe lesson sorts every channel on two questions: who controls the volume (you or luck), and how well the person knew you before (already knew you, or total strangers). Only one box has no ceiling: you control the volume AND you're reaching strangers. See the table.\n\n**Reason 1: infinite supply.** Your warm network tops out around 150 people. That's anthropologist Robin Dunbar's estimate of how many stable relationships a person can keep, and it includes your mom and your barber. The SBA counts 36,207,130 small businesses in the US. A niche covering just 1% of them is still about 362,000 businesses, roughly 2,400 times everyone you know.\n\n> Fishing a pond works for a few weeks. Then you've caught every fish that bites. In the ocean nobody wonders whether there are fish; the only questions are whether your bait is good and how many lines you have in the water.\n\nThis doesn't make warm channels bad. Your first client will probably come from warm (Part 2). It means warm can't be your only engine if you want to choose how big ZDub gets.",
      keyPoints: [
        "Cold acquisition = strangers + a channel you control like a dial.",
        "Referrals are rain: free, welcome, unschedulable. A cold system is a well with a pump.",
        "Your warm network is about 150 people; the US has about 36.2 million small businesses.",
        "Only cold acquisition lets you choose your volume with no ceiling."
      ],
      why: "ZDub runs on retainers. If every client comes from someone you know, growth stops the day the network runs dry. A cold engine is the one part of the business you can turn up on purpose.",
      example: {
        title: "Sorting ZDub's channels today",
        body: "PMT came through a relationship: rain. Zach's wholesaling contacts (contractors, rehab crews) are warm and finite. Cold email to Sacramento roofers, cold calls to HVAC shops in Roseville, and Meta ads to local owners are wells: Zach can run 3 a day or 20 a day. The goal isn't to stop taking rain. It's to dig at least one well that works without luck."
      },
      table: {
        head: ["", "Already knew you", "Total strangers"],
        rows: [
          ["**You control the volume**", "Warm marketing: retargeting people who saw your ads, your email list, a content audience you built. Ceiling: as big as the cold you fed it.", "**Cold acquisition**: paid ads to strangers, cold email, cold Loom, cold DMs, calls, lists you build from your niche. Ceiling: the whole market."],
          ["**Luck controls the volume**", "Referrals and network: word of mouth, friends, old coworkers, past clients. Ceiling: the ~150 people you know.", "Lucky inbound: a post that goes viral, directories, someone finding your site. Ceiling: whatever the algorithm gives."]
        ]
      },
      practice: [
        {
          prompt: "Sort every way ZDub has gotten, or could get, a client into the four boxes. Then pick the one well you'll pump this week and give it a daily number.",
          fields: ["You control + already knew you (warm marketing)", "You control + strangers (cold acquisition)", "Luck + already knew you (referrals / network)", "Luck + strangers (lucky inbound)", "The one cold channel I'll run this week, and my daily number"],
          rubric: ["At least two cold channels listed", "PMT is placed honestly", "The chosen channel has a daily number, not just “more outreach”", "You can name the ceiling of each box"],
          model: "You control + knew you: retarget people who watched ZDub's reels; email past wholesaling contacts.\nYou control + strangers: cold email + call to Sacramento roofers; $11/day follower ads.\nLuck + knew you: PMT referrals, friends who own businesses, my barber.\nLuck + strangers: a reel that pops, someone finding zdubmedia.netlify.app.\nThis week: the LC outreach loop, 3 researched roofers or HVAC shops a day, Monday to Friday = 15."
        }
      ],
      today: { task: "Count your pond and one ocean. List every business owner you personally know (phone contacts, wholesaling crews, gym, barber). Then search Google Maps for roofers within 15 miles of Sacramento and count them. Write both numbers at the top of your outreach sheet.", output: "Two numbers in the outreach sheet: my pond vs one niche's ocean", minutes: 20, suggested: false },
      check: [
        { q: "What two conditions make something cold acquisition?", a: "It reaches people who've never heard of you, through a channel where you control the volume like a dial." },
        { q: "Why does the lesson compare referrals to rain?", a: "They're free and great when they come, but you can't schedule them, make them come harder, or stop a drought." },
        { q: "Roughly how big is a warm network compared with the US small-business market?", a: "About 150 people (Dunbar) vs about 36.2 million small businesses (SBA). Even a 1% niche is about 362,000." }
      ]
    },
    {
      id: "gc-02",
      part: "why",
      title: "Keep acquisition live, or the doom loop gets you",
      minutes: 10,
      tags: ["Course"],
      source: [
        { doc: "Lesson 2.1 — Why Sell To Cold Traffic", section: "The trap under $50k: the doom loop; Reason 3: Churn matters WAY less; What you get back: leverage; The flywheel we are building", who: "Course lesson (cites Fisher & Ury, Getting to Yes, 1981; Jim Collins, Good to Great, 2001)" }
      ],
      alsoIn: ["Meta Ads tab (learning phase)"],
      idea: "Most agencies under $50k/month don't lack skill. They're stuck in a loop the lesson calls the **doom loop**:\n\n1. A big client wobbles. Results dip and they text asking to hop on a quick call.\n2. Fear takes over. They're a big slice of revenue, so losing them feels like ruin.\n3. You tunnel in: daily tweaks, extra calls, late nights on one client.\n4. Acquisition stops. No outreach, no ads, nothing new on the calendar.\n5. Clients get heavier. Fewer clients means each one is a bigger share of revenue, so the next wobble hurts more.\n\nAnd the fix makes it worse. Panic edits keep a campaign from ever stabilizing (big edits restart Meta's learning clock), like a farmer pulling up his seeds every morning to check for roots.\n\n**Legs on a table.** At three clients, each client is a leg. Kick one and the table goes over, so you spend your days holding legs in place. A table with 40 legs doesn't notice when one breaks. Better fulfillment can't fix a table with three legs. Adding legs can, and cold acquisition is the only way to add them whenever you need to.\n\n**Churn matters way less with a system.** Every agency loses clients. At 3 equal clients, one loss is a 33% pay cut. At 40, it's 2.5%. Retention still matters (it multiplies your ceiling), but no single client should be heavy enough to steer the business.\n\n**Leverage.** Negotiation power comes from your BATNA, your best alternative to a negotiated agreement (Fisher and Ury, Harvard Negotiation Project). Without a pipeline, your alternative to a demanding client is losing a third of your income. With one, it's “we'll fill this slot in a few weeks.” That lets you hold your price, set boundaries, fire the client who drains you, and give campaigns time to work. Calm people get better results than panicking ones.\n\n**The flywheel** is the mirror image: the system books calls every week, clients sign steadily, no client is heavy, you decide calmly, results compound into case studies. Like Jim Collins' flywheel, the first pushes barely move it.\n\n> “Literally everyone falls into this loop. You need to keep acquisition live or you will too.” (Lesson 2.1)",
      keyPoints: [
        "Doom loop: client wobbles → fear → you tunnel in → acquisition stops → each client gets heavier.",
        "Three clients = three table legs. Add legs; don't just hold them.",
        "Losing 1 of 3 clients is a 33% pay cut; 1 of 40 is 2.5%.",
        "A live pipeline is your BATNA: it lets you hold price and set boundaries.",
        "Acquisition is a daily habit that never pauses, even when a client is on fire."
      ],
      why: "ZDub has one client (PMT). Right now PMT is the whole table. The moment PMT has a bad week is exactly when you'll be tempted to stop outreach. Decide now that you won't.",
      example: {
        title: "PMT has a slow week",
        before: "Bookings dip. Zach spends three evenings tweaking PMT's ads, rewriting copy daily, and sends zero prospect emails that week. Next week PMT feels even scarier to lose.",
        after: "Bookings dip. Zach checks the numbers once, makes one planned change, and still sends his 3 researched emails and 3 calls that day. PMT gets a calm partner, and the pipeline keeps adding legs."
      },
      table: {
        head: ["Number of clients", "Revenue lost when one leaves (equal retainers)"],
        rows: [["3", "33.3%"], ["5", "20%"], ["10", "10%"], ["20", "5%"], ["40", "2.5%"]]
      },
      practice: [
        {
          prompt: "Write ZDub's anti-doom-loop rule: the minimum acquisition you'll do every working day no matter what a client is going through, and what you'll do instead of panic-editing.",
          fields: ["My daily acquisition floor (specific actions + number)", "When a client wobbles, I will…", "When a client wobbles, I will NOT…", "Where this rule lives so I see it daily"],
          rubric: ["The floor is a number of actions, not a feeling", "It survives a bad client week (small enough to always do)", "The “will not” list names panic behaviors (daily edits, skipping outreach)", "It's posted somewhere visible"],
          model: "Floor: 3 researched prospects contacted (email or call) before 10 AM, every weekday.\nWhen a client wobbles: check the numbers once, diagnose before changing anything, make one planned change, tell the client the plan.\nI will NOT: edit ads daily, cancel outreach blocks, discount to keep them.\nLives on: a sticky note on the monitor + a recurring 8–9 AM calendar block called “Add legs.”"
        }
      ],
      today: { task: "Put a recurring daily calendar block called “Add legs” (30–60 min) on every weekday for the next month, and write your anti-doom-loop rule on a card next to your screen.", output: "Recurring calendar block + written rule", minutes: 15, suggested: false },
      check: [
        { q: "Name the five steps of the doom loop.", a: "A big client wobbles; fear takes over; you tunnel in on that client; acquisition stops; clients get heavier, so the next wobble hurts more." },
        { q: "Why can't better fulfillment fix the doom loop?", a: "The problem is that one client has enough weight to steer the business. Only adding clients (legs) fixes that, and cold acquisition is the only way to add them on demand." },
        { q: "What is a BATNA and why does a pipeline improve it?", a: "Your best alternative to a negotiated agreement. With a pipeline, your alternative to a demanding client is “we'll fill the slot,” so you can hold price and set boundaries." }
      ]
    },
    {
      id: "gc-03",
      part: "why",
      title: "Client-getting is a math equation. Work it backward.",
      minutes: 10,
      tags: ["Course"],
      source: [
        { doc: "Lesson 2.1 — Why Sell To Cold Traffic", section: "Reason 2: It becomes a math equation; the law of large numbers", who: "Course lesson (cites Jakob Bernoulli, 1713)" }
      ],
      alsoIn: ["Sales tab (money model)"],
      idea: "First principle: **agency revenue = number of clients × price per client.** Your client count can never be bigger than the number of qualified people you get in front of. A cold system turns that into an equation you can model and control.\n\nThe lesson's example, worked backward from the goal:\n\n1. Goal: $50,000/month at $2,500/month per client = **20 clients**.\n2. You close 20% of calls that show up, so you need **100 shown calls**.\n3. 50% of booked calls show, so you need **200 booked calls**.\n4. At a $200 cost per booked call, that's 200 × $200 = **$40,000** in acquisition spend over whatever period it takes. (The lesson text says “$4k”; the multiplication gives $40,000, or $4,000 only if a call cost $20. Re-check before you quote it.)\n\nThe same backward math works for outreach instead of ads: swap “cost per call” for “touches per booked call.” Once you know your rates, you know exactly how many emails, dials and walk-ins buy one client.\n\n**But small numbers lie.** The law of large numbers (Jakob Bernoulli, 1713): the more times you repeat a chance event, the closer your observed average gets to the true one. Flip a coin 10 times and 7 heads is normal; flip it 10,000 times and you'll land within about a point of 50%. For a closer whose true rate is 20%, the middle 95% of results you'd actually see looks like the table. After 10 calls you could look like a 0% closer or a 50% closer. After 500, you're between 17% and 24%.\n\nSo: don't judge your opener, your email or yourself on 10 tries. Get enough volume for the numbers to mean something, then improve the weakest rate.",
      keyPoints: [
        "Revenue = clients × price. Clients are capped by how many qualified people you reach.",
        "Work backward: clients needed → shown calls → booked calls → touches or spend.",
        "Lesson example: $50k ÷ $2,500 = 20 clients → 100 shown → 200 booked.",
        "With 10 calls a true 20% closer can look like 0% or 50%; at 500 calls, 17–24%.",
        "Judge rates only after real volume."
      ],
      why: "ZDub's targets are $2,000–3,000/month retainers. Knowing that one client takes roughly X touches turns “I should do outreach” into a daily number you can hit, and it keeps one bad day from scaring you off.",
      example: {
        title: "ZDub's first goal, worked backward (assumed rates, replace with yours)",
        body: "Goal: $10,000/month at $2,500 = 4 clients. If you close 25% of shown discovery calls, you need 16 shown. If 75% of booked calls show, you need about 21 booked. If 1 in 4 real owner conversations books a call, you need about 85 conversations. If it takes about 4 touches (email, call, walk-in, follow-up) to get one real conversation, that's about 340 touches, or roughly 17 a day over 20 working days. Clayton's 3–5 researched businesses a day, each touched across three channels, lands right in that range."
      },
      table: {
        head: ["Sales calls taken", "Close rates you might observe (true rate 20%)"],
        rows: [["5", "0% to 60%"], ["10", "0% to 50%"], ["20", "5% to 40%"], ["50", "10% to 32%"], ["100", "12% to 28%"], ["200", "15% to 26%"], ["500", "17% to 24%"]]
      },
      practice: [
        {
          prompt: "Build ZDub's backward equation for your real goal. Use your best guesses for rates and mark them as guesses; you'll replace them with real numbers from your outreach log.",
          fields: ["Monthly revenue goal", "Price per client", "Clients needed", "Close rate on shown calls (guess?)", "Shown calls needed", "Show rate (guess?)", "Booked calls needed", "Conversations → booked rate (guess?)", "Conversations needed", "Touches per real conversation (guess?)", "Touches per month → per working day"],
          rubric: ["Each step divides by the rate correctly", "Guesses are labeled as guesses", "The final answer is a daily number", "The daily number is realistic for your schedule (or the goal/time frame is adjusted)"],
          model: "$10,000 ÷ $2,500 = 4 clients. 4 ÷ 25% = 16 shown. 16 ÷ 75% ≈ 21 booked. 21 ÷ 25% ≈ 85 conversations. 85 × 4 touches ≈ 340 touches/month ≈ 17 a day."
        }
      ],
      today: { task: "Add a “rates” row to your outreach sheet (touches, conversations, booked, shown, closed) and fill in your real numbers so far, even if they're tiny. Then calculate today's touch target from your backward equation.", output: "Rates row + today's touch target in the outreach sheet", minutes: 20, suggested: false },
      check: [
        { q: "Using the lesson's rates (20% close, 50% show), how many booked calls does it take to sign 20 clients?", a: "200. 20 ÷ 20% = 100 shown; 100 ÷ 50% = 200 booked." },
        { q: "Why shouldn't you judge your close rate after 10 calls?", a: "The law of large numbers: with 10 calls a true 20% closer can look anywhere from 0% to 50%. Only volume reveals the real rate." },
        { q: "What caps the number of clients an agency can have?", a: "The number of qualified people it gets in front of. Warm channels cap it at the size of your circle." }
      ]
    },
    {
      id: "gc-04",
      part: "first",
      title: "Get the client first. Build second.",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub_Guide_05 V2 — Client Acquisition and Cold Outreach", section: "1. Your first client: Mindset; Homework Logan set", who: "Logan McKinney, 10/9/26 and 10/16/26" },
        { doc: "ZDub_Guide_05 V2", section: "Clayton running the loop live", who: "Clayton Bell, 8/26/26" },
        { doc: "ZDub_Guide_00 V2 — Master Index", section: "Principles 1 and 13", who: "Logan, Clayton" },
        { doc: "9 New Calls Study Guide", section: "Mindset and action", who: "Tayt Shelman, 10/30/26" }
      ],
      alsoIn: ["Offers tab (one-sentence offer)", "Mindset tab"],
      idea: "The most common mistake a new agency owner makes is building everything before anyone has paid. Logan (10/9): building first means an empty funnel, an offer with no conversations behind it, and automations with no leads. Paul told him to get on calls, and Logan admits: “I was in love with building a business and not actually running one.”\n\n> “A funnel with nobody in it teaches you absolutely nothing. A client teaches you what to build.” (Logan, 10/9)\n\nThe rules Logan gave (10/9 and 10/16):\n\n- **Rule one of business is money in.** Don't be picky; take the business you can reach. A general offer (“service businesses near me”) is fine to start.\n- **Be open that they're your first client.** Be likable. Don't walk in like they need you.\n- **You don't need to know their trade**, only how to get them more business.\n- **Get one first. Get your client. Then pick your lane** (10/16).\n- **Do it by hand, then systemize** (Logan, 10/9; Principle 13 in Guide 00).\n\nClayton (8/26) adds: **don't solve problems you don't have yet**, like which niche makes ads easiest. Focus on revenue activities. The easiest business to run ads for is the local one with great service and a weak online presence.\n\nTayt (10/30) puts the whole plan in one line: **find someone, sell them something, deliver it.** You learn fastest once someone has paid you. Overwhelm usually means you're consuming instead of doing. His fix: do the opposite of your bottleneck. If you're avoiding calls, make calls; the worst case is a no or a bit of embarrassment.\n\n**Logan's homework (10/16):** write your one-sentence offer and list 20 businesses you could actually reach. (Writing the offer sentence is taught in the Offers tab; the list is this lesson's job.)",
      keyPoints: [
        "An empty funnel teaches nothing. A paying client tells you what to build.",
        "Money in first: take the business you can reach; a general offer is fine early.",
        "Don't solve problems you don't have yet. Spend the hours on revenue activities.",
        "Find someone, sell them something, deliver it (Tayt).",
        "Do it by hand first, then systemize."
      ],
      why: "Zach builds well: landing page, GHL, AI tools. That's exactly why this trap is dangerous for him. Every hour spent polishing ZDub's systems before the pipeline is full is an hour not talking to Sacramento owners.",
      example: {
        title: "A week of building vs a week of talking",
        before: "Monday to Friday: redesign the landing page, build three GHL automations, research which niche has the cheapest leads. Owner conversations: 0.",
        after: "Each morning: 3 researched trades businesses, each emailed and called. Afternoons: deliver for PMT. Friday: 1 hour fixing the one thing the week's conversations proved was broken. Owner conversations: 6–10."
      },
      practice: [
        {
          prompt: "Do Logan's homework: list 20 businesses you could actually reach this month, with HOW you'd reach each (you know them, you go there, a contact, or cold).",
          fields: ["Businesses 1–5 (name, type, how I'd reach them)", "Businesses 6–10", "Businesses 11–15", "Businesses 16–20", "The 3 I'll contact first, and why"],
          rubric: ["20 real, reachable businesses, not a wish list", "Each has a named route in (warm, place you go, or cold)", "Mix includes at least a few places you already go", "First 3 are chosen for reachability, not prestige"]
        },
        {
          prompt: "Building vs talking audit. Be honest.",
          fields: ["Things I built or polished for ZDub in the last 14 days", "Owner conversations I had in the last 14 days", "One building task I'll pause until I have 2 more clients"],
          rubric: ["Counts are real numbers", "The paused task is a real one you were tempted to do"]
        }
      ],
      today: { task: "Finish the list of 20 reachable businesses and send a first message to the top 3.", output: "List of 20 in the outreach sheet + 3 first touches sent", minutes: 40, suggested: false },
      check: [
        { q: "Why does Logan say a funnel built before the first client teaches nothing?", a: "There's nobody in it. Only real conversations and a paying client show you what to build." },
        { q: "What did Clayton say not to spend time on early?", a: "Problems you don't have yet, like which niche makes ads easiest. Focus on revenue activities." },
        { q: "What was Logan's homework on 10/16?", a: "Write your one-sentence offer and list 20 businesses you could actually reach." }
      ]
    },
    {
      id: "gc-05",
      part: "first",
      title: "Where client one comes from: people you know, places you go, work you do",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "1. Your first client: Where client one comes from; Find your method (barber story)", who: "Logan McKinney, 9/25/26 and 10/16/26" },
        { doc: "ZDub_Guide_05 V2", section: "Cold approach is working", who: "Jason Maulucci, 8/25/26" },
        { doc: "9 New Calls Study Guide", section: "Prospecting and cold outreach: Warm and low-cost channels", who: "Tayt Shelman, 10/30/26 and 11/4/26" }
      ],
      idea: "Logan (10/16) named three places client one usually comes from:\n\n1. **Someone you know:** family, a friend, a spouse. Logan's mom's kitchen design business paid him $600/month while he learned GHL, emails and websites, and she gave him grace while he learned.\n2. **Places you already go:** the oil change place, auto shop, barber, lunch spot, gym, run club. Logan's best client came from his own barber.\n3. **Your own business, side job or job:** Logan ran marketing for the church where he did audio. Market your own business so you can show proof, and have a website and business cards ready when prospects ask.\n\n**How Logan signed his best client (9/25):** he booked haircuts with the same barber for five months, built rapport, and never pitched. When the owner opened a third shop, Logan offered to film it and run ads for the opening month: “If it doesn't work, I'll find a new barber.” They've worked together a year. Patience plus a real trigger (a new location) beat any script.\n\n**Tayt's warm and low-cost channels (10/30, 11/4):**\n\n- Tell friends, family and coworkers how passionate you are about growing businesses. Everyone has a network you don't know about.\n- Reach out to past customers of any business you've run: “We kept getting asked for a trusted local marketer, so we brought it in-house.”\n- **Facebook groups:** search “[your city] entrepreneurs,” join all of them, introduce yourself with a photo, give free value instead of doomscrolling, and DM when there's an opening.\n\nAnd don't write off cold just because you're new. Jason (8/25) shared that a student landed a **$2,000/month attorney retainer** through in-person plus email; he said local cold approach “is crushing.” Not mandatory, but it stacks the odds and leads to referrals.",
      keyPoints: [
        "Client one: someone you know, a place you already go, or your own business/job.",
        "Logan's best client came from five months of haircuts and zero pitching.",
        "A real trigger (new location, opening, slow season) is the moment to offer.",
        "Facebook groups: join every local entrepreneur group, give value, DM when there's an opening.",
        "Cold approach works for beginners too ($2k/month attorney retainer, Jason 8/25)."
      ],
      why: "Zach already has three warm pools most new agency owners don't: his wholesaling network (contractors, rehab crews), the businesses he uses around Sacramento, and his own real estate businesses that he markets with his own money.",
      example: {
        title: "Zach's three pools",
        body: "**People he knows:** contractors and rehab crews from wholesaling, owners in his phone. **Places he goes:** his barber, gym, auto shop, the lunch spot near home. **His own work:** the wholesaling businesses he already markets, which double as proof that he spends his own money on ads. One warm line for a contractor he's worked with: “Hey Mike, I've been running Meta ads for my own real estate deals and for a motorcycle school. You do great work and I think more people should be finding you. Mind if I show you two ideas over coffee?”"
      },
      practice: [
        {
          prompt: "Fill Logan's three pools, then write your Facebook group intro post (Tayt's method: photo, who you are, free value, no pitch).",
          fields: ["People I know who own or run a business (5+)", "Places I already go that are businesses (5+)", "My own businesses / job / side work that could be proof", "My Facebook group intro post"],
          rubric: ["Each pool has real names", "The intro post gives something useful (a tip or offer of help), not a sales pitch", "It says you're local", "It doesn't claim results or a team you don't have"],
          model: "Hey everyone, I'm Zach, Sacramento local. I run ZDub Media: I help local service businesses get booked jobs from Facebook and Instagram, and I market my own real estate businesses the same way. One free tip I see missed all the time: if your website has no quote form, people who find you at 10 PM leave and call the next company. Happy to look at anyone's ads or page and tell you one thing I'd fix. No pitch."
        }
      ],
      today: { task: "Join the Sacramento, Roseville and Placer County entrepreneur Facebook groups and post your intro with a photo.", output: "3+ groups joined, intro posted", minutes: 30, suggested: true },
      check: [
        { q: "What are Logan's three sources for client one?", a: "Someone you know; places you already go; your own business, side job or job." },
        { q: "How did Logan sign his best client?", a: "Five months of haircuts building rapport without pitching; when the barber opened a third shop, he offered to film it and run opening ads (“If it doesn't work, I'll find a new barber”)." },
        { q: "What line does Tayt suggest for past customers of a business you've run?", a: "“We kept getting asked for a trusted local marketer, so we brought it in-house.”" }
      ]
    },
    {
      id: "gc-06",
      part: "first",
      title: "Find your method. It's all outreach.",
      minutes: 9,
      tags: ["Mentor", "Disagreement"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Find your method (Logan, 9/25); Where the mentors disagree: Is cold calling worth it?", who: "Logan McKinney 9/25/26; Calum Tresham 8/28/26; Clayton Bell 8/26/26" },
        { doc: "9 New Calls Study Guide", section: "Warm and low-cost channels", who: "Cam 7/28/26; Tayt Shelman 10/30/26" }
      ],
      idea: "Logan (9/25): **“It's all outreach.”** Ads, follower ads, walk-ins and calls are all outbound. The only genuine inbound is a referral. So the question isn't whether to do outreach; it's which method fits your hand.\n\nLogan tried all of them (see table). His point: every channel has pitfalls, and the one that feels unnatural might still be the one that works. Try them all, then lean on your strongest signal.\n\n**Look at your hand:** charisma, budget, camera skills, design, writing. Lean on your strongest, but you still need to be decent at calls, sales and in person: “at the bare minimum, be likable.” Then have AI build the vehicle for your method (walk-in sheet, call script, ad script) and audit it so you don't show up with “AI slop.”\n\nCam (7/28) did the same: pick the outreach method that suits your personality (his was in-person walk-ins), then **add ads as fuel**, for example run lead forms and then walk in or dial the people who opt in.\n\nTayt (10/30) explains why outbound feels harder: inbound and referrals already buy your expertise; **outbound needs a sharp “what's in it for them” offer.**\n\n**Where the mentors disagree: is cold calling worth it?**\n\n- **Calum (8/28) and Clayton (8/26):** lucrative and not saturated. Calum said it isn't mandatory but called it lucrative.\n- **Logan (9/25):** Paul had him calling hundreds a week; he called 300–400 Fresno businesses and got one prospect and no client. “Not for me,” but “it works” for others.\n\nBoth are real experiences. Logan's calls came before the research-first openers taught in Part 4. Give calling a real, researched effort before deciding it's not your method.",
      keyPoints: [
        "It's all outreach; the only true inbound is a referral.",
        "Try every method, then lean on the one that fits your hand.",
        "Minimum bar everywhere: be likable.",
        "Pick a personal method, then add ads as fuel (Cam).",
        "Outbound needs a sharp “what's in it for them” (Tayt)."
      ],
      why: "Zach has wholesaling cold-calling reps, a camera, AI design tools and a local presence. That's an unusually strong hand. Choosing a primary method stops him from doing a little of everything and none of it at volume.",
      example: {
        title: "Zach's hand, scored",
        body: "Phone: strong (wholesaling calls, NEPQ practice). Camera: good (iPhone, DJI Osmo Action 5, CapCut). Design: good (Canva, Midjourney). Budget: small. In person: lives in the market. A sensible pick: researched email + call as the primary method, walk-ins as the closer, a free static or swipe file as the value-first opener. Ads as fuel later."
      },
      table: {
        head: ["Method", "Logan's experience (9/25)"],
        rows: [
          ["Cold calling", "300–400 Fresno businesses, one prospect, no client. “Not for me,” but “it works” for others."],
          ["Walking in", "Not natural for him, but it landed his first client."],
          ["Meta ads", "Not natural at first, but it worked; now his most effective method."],
          ["Sitting in the owner's chair", "Natural for him; became a partnership, then a case study, then his whole business."]
        ]
      },
      practice: [
        {
          prompt: "Score your hand 1–5 on each signal, then choose a primary method, a backup, and the “vehicle” you'll build for it.",
          fields: ["Charisma / in person (1–5)", "Phone (1–5)", "Budget for ads (1–5)", "Camera / video (1–5)", "Design (1–5)", "Writing (1–5)", "Primary method + why", "Backup method", "The vehicle I'll build and audit (script, sheet, ad)"],
          rubric: ["Scores are honest, not all 4s", "Primary method matches the highest scores", "Backup covers a weakness (e.g. walk-ins if phone is low)", "Vehicle is specific enough to build today"]
        }
      ],
      today: { task: "Do one real rep of your primary method today: 5 researched calls, or 1 walk-in, or 3 custom emails. Log each in the outreach tracker.", output: "One rep done and logged", minutes: 45, suggested: false },
      check: [
        { q: "Why does Logan say “it's all outreach”?", a: "Ads, follower ads, walk-ins and calls are all outbound; the only genuine inbound is a referral." },
        { q: "What's Cam's approach to choosing a method?", a: "Pick the outreach method that suits your personality (his was walk-ins), then add ads as fuel, e.g. walk in on or dial the lead-form opt-ins." },
        { q: "What are the two sides on whether cold calling is worth it?", a: "Calum and Clayton: lucrative and not saturated. Logan: 300–400 calls, no client, “not for me,” but it works for others." }
      ]
    },
    {
      id: "gc-07",
      part: "first",
      title: "Lead with free value: the free video, Feature Friday, the swipe file",
      minutes: 10,
      tags: ["Mentor", "Disagreement"],
      date: "2026-10-16",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "The free-video walk-in; Pre-walk-in research; Feature Friday; Leading with value: swipe files", who: "Logan McKinney 10/9/26 and 10/16/26; Clayton Bell 8/19/26 and 8/26/26" },
        { doc: "ZDub_Guide_03 V2 — Ad Creative", section: "8. Using statics for outreach", who: "Logan McKinney, 10/9/26" },
        { doc: "ZDub_Guide_05 V2", section: "Where the mentors disagree: What to offer at first contact", who: "LC SOP vs Logan" }
      ],
      alsoIn: ["Offers tab (free trials)", "Organic Social tab (building swipe files)"],
      idea: "When you have no case studies, the fastest trust-builder is doing something useful for them before you ask for anything. The mentors taught three versions.\n\n**1. The free-video walk-in (Logan, 10/9).** Logan walked into a card shop, asked for the owner and offered ONE free video for his portfolio, no strings. The trick: ask what they're excited about (specials, offers, new stock) and feature that, so the piece is useful to them, not a “flex” video. Then he delivered first, ran discovery and presented three packages.\n\n> “We want to grow businesses. We don't want to make pretty little videos... we're marketing agencies.” (Logan, 10/9)\n\nPre-walk-in research (10/16): use Google Maps to see the businesses in a plaza and check their Instagram. Bad photos are an opening; offer a free post.\n\n**2. Feature Friday (Logan, 10/9).** Make a business a free static ad (“you got picked”), post it and send it to them. It's value first and it shows your work. Logan made editorial “magazine cover” statics for a barbershop using the shop's own photos.\n\n**3. The prospect swipe file (Clayton, 8/19 and 8/26).** Make a Google Drive folder named for the prospect (his example: “Pointer Landscaping content examples”) with 3–5 organic examples and 1 ad example from their niche. Show it and say you want to pair content like this with ads: a “killer combo.” A student built one for a flooring prospect in 30–45 minutes and sent it before the meeting (“here are some ideas, let me know which ones track”), then could bring scripts and shoot within an hour. Keep swipe files organized by niche so you can pull up “my swipe file for HVAC companies” mid-call or mid-walk-in.\n\n**Where the mentors differ: what to offer at first contact.** The LC SOP offers a free 20-minute conversation about one specific gap. Logan (10/9) offers one free video or piece of content for your portfolio, no strings. Both lead with free value; the SOP is built for cold high-ticket trades, the free video for businesses you already frequent.",
      keyPoints: [
        "Deliver something useful before asking for anything.",
        "Free video: feature what THEY'RE excited about, not your skills.",
        "Feature Friday: a free static ad, posted and sent (“you got picked”).",
        "Swipe file per prospect: 3–5 organic + 1 ad, in a folder named for them.",
        "SOP leads with a free 20-minute gap conversation; Logan leads with free content."
      ],
      why: "Zach can make a good static in Canva or Midjourney in under an hour. That turns his creative skill into an outreach tool that also proves he can do the work, which is the thing a new agency can't otherwise prove.",
      example: {
        title: "Feature Friday for a Rocklin auto detailer (made-up example)",
        body: "The detailer's Instagram has great before/after photos but no ads. Zach builds a 4:5 static from their own photo: “Rocklin: your car, showroom clean, in one afternoon.” He posts it on ZDub's page as Feature Friday, tags them, and texts the owner: “Hey Dan, you got picked for our Feature Friday. Made this from one of your photos, it's yours to use free. If you ever want to see what it does as an ad, I'm local and happy to show you.”"
      },
      practice: [
        {
          prompt: "Plan a Feature Friday static for a real Sacramento-area business you'd like as a client.",
          fields: ["Business (name, type, town)", "What they're excited about right now (from their IG/site)", "Static headline", "Image idea (use their own photo if possible)", "The text/DM you send with it"],
          rubric: ["The static features something THEY care about", "Headline is specific (town, result)", "The message is short, no pitch, says you're local", "No fake claims about results"]
        },
        {
          prompt: "List the contents of a swipe folder for one prospect (Clayton's format).",
          fields: ["Folder name (Prospect name + “content examples”)", "Organic examples 1–5 (link + why it works)", "1 ad example (link from Meta Ad Library + why)"],
          rubric: ["Examples are from the prospect's niche", "Each has a one-line reason", "The ad is a real, currently running or long-running ad"]
        }
      ],
      today: { task: "Build one prospect swipe folder (3–5 organic + 1 ad) named for a real Sacramento trades business you'll email this week, and link it in your outreach log.", output: "A shared Google Drive folder named for the prospect", minutes: 35, suggested: false },
      check: [
        { q: "What was Logan's walk-in trick for the free video?", a: "Ask what the owner is excited about (specials, offers, new stock) and feature that, so the video is useful to them, not a flex." },
        { q: "What goes in Clayton's prospect swipe file?", a: "A Google Drive folder named for the prospect with 3–5 organic examples and 1 ad example from their niche." },
        { q: "How do the LC SOP and Logan differ on the first offer?", a: "The SOP offers a free 20-minute conversation about one gap; Logan offers one free video or piece of content. Both lead with free value." }
      ]
    },
    {
      id: "gc-08",
      part: "first",
      title: "No case studies yet? Sell your story, honestly",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Top takeaway 9; Positioning and pricing moves; Profile funnel", who: "Tayt Shelman, 11/4/26" },
        { doc: "ZDub_Guide_00 V2", section: "Principle 2: Honesty is the strategy when you're new; Honesty flags", who: "Logan 10/9, 10/13, 10/16/26; Calum 8/28/26; LC SOP; Paul 10/19/26" },
        { doc: "ZDub_Guide_05 V2", section: "2. The LC local outreach loop: Philosophy", who: "LC Cold Outreach SOP" }
      ],
      alsoIn: ["Offers tab (pricing while new, self-confession)"],
      idea: "Every new agency hits the same wall: “Where's your proof?” The mentors' answer is not to fake it. It's to use the credibility you actually have.\n\n**Tayt (11/4): no results? Sell your story.** Your background, your reputation to protect, and the mentors behind you ARE the credibility. He frames a lower starting price as “the price of an inexperienced guy with the experience of an experienced one,” because of who coaches you. (How to price that is covered in the Offers tab.)\n\n**Honesty is the strategy when you're new** (Guide 00, Principle 2):\n\n- Be open that they're your first (Logan, 10/9).\n- “Small is the offer, not the apology” (Logan, 10/16).\n- Self-confess your real reasons (Calum, 8/28).\n- Don't imply a team you don't have (Logan, 10/13).\n- Never invent stats, clients or results (LC SOP; Paul, 10/19).\n\n**Specificity is your proof** (LC SOP). With no case studies, name an exact, observable problem: “your last Instagram post was in February.” Nobody can fake that kind of attention, so it builds trust faster than a vague claim of expertise.\n\n**Document the journey.** Tayt (11/4) told a newer member that a “30 days of starting a marketing company” series would draw people who want to help. Building in public turns being new into content instead of a secret.\n\nThe three ingredients of a story pitch:\n\n1. **Background:** what you've done that's relevant (running a team, spending your own money on ads, a trade you know).\n2. **Stakes:** your reputation is on the line, so you'll work harder than an agency with 50 clients.\n3. **Support:** who's behind you (coaches and a community who run real ad accounts).",
      keyPoints: [
        "No results? Your background, reputation and mentors are the credibility (Tayt).",
        "Say they're your first. Small is the offer, not the apology.",
        "Never imply a team, invent stats or claim results you don't have.",
        "Specificity is proof: name one exact, observable problem.",
        "Building in public turns “new” into content."
      ],
      why: "Zach has a real story: a decade running an insurance practice and team, and he spends his own money marketing his wholesaling businesses. That's more credible to a 50-year-old roofer than a slick deck from a stranger.",
      example: {
        title: "Turning “I'm new” into a strength",
        before: "“We're a full-service digital agency with a proven track record of helping businesses grow.”",
        after: "“I ran an insurance practice and a team for ten years, and I market my own real estate business with my own money, so I know what it's like to pay for ads and wonder if they worked. I'm newer to agency work, which means you'd get my full attention and my reputation is riding on it. And I'm coached by people who run ad accounts for agencies every day.”"
      },
      practice: [
        {
          prompt: "Write your story pitch in three short sentences (background, stakes, support), then the one honest line you'll use when a prospect asks “who else have you done this for?”",
          fields: ["Background sentence", "Stakes sentence", "Support sentence", "My honest answer to “who else have you worked with?”"],
          rubric: ["Every claim is true and checkable", "No implied team (“we,” “our staff”) unless real", "It mentions something specific to you, not generic agency talk", "The honest answer names PMT accurately and doesn't inflate it"]
        }
      ],
      today: { task: "Write your background angle in 3–4 sentences (insurance practice and team, your own ad spend on wholesaling, PMT) and paste it into your call card and your ZDub Instagram bio draft.", output: "Background angle saved in call card + bio draft", minutes: 20, suggested: true },
      check: [
        { q: "What does Tayt say to sell when you have no results?", a: "Your story: your background, your reputation to protect, and the mentors behind you." },
        { q: "Name three honesty rules from Guide 00's Principle 2.", a: "Any three: be open they're your first; small is the offer, not the apology; self-confess real reasons; never invent stats, clients or results (plus: don't imply a team you don't have)." },
        { q: "What does “specificity is your proof” mean?", a: "With no case studies, naming one exact, observable problem (e.g. last post in February) shows real attention and builds trust." }
      ]
    },
    {
      id: "gc-09",
      part: "loop",
      title: "The local outreach loop: email, call, walk in, then move on",
      minutes: 11,
      tags: ["Mentor"],
      date: "2026-08-26",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "2. The LC local outreach loop (Prospect → Research → Email → Call → Walk-in); Philosophy; Ground rules", who: "LC Cold Outreach SOP (appears to be Clayton's)" },
        { doc: "ZDub_Guide_05 V2", section: "Clayton running the loop live (sequence, volume, GHL pipeline, booking)", who: "Clayton Bell, 8/26/26" },
        { doc: "ZDub_Guide_00 V2", section: "Principle 12: Follow up across channels", who: "Clayton Bell, 8/26/26" }
      ],
      alsoIn: ["Offers tab (the two-week trial pitch)"],
      idea: "This is the core system of the tab. The LC Local Cold Outreach SOP (which Clayton walked through live on 8/26) runs one prospect through four touches, then moves on.\n\n**The goal is not a sale. It's a 20–30 minute discovery call** (phone or in person) with the owner. Sell the conversation, not services.\n\n**The philosophy:**\n\n- **Specificity is your proof.** With no case studies, name one exact observable problem.\n- **Local is your unfair advantage.** Say you're local in every touch.\n- **ONE gap per prospect.** Not a list of everything wrong.\n- **Research is 80% of the work.**\n\n**Why the sequence works (Clayton, 8/26):** escalating from email to call to walk-in builds rapport and eases your own social anxiety, because by the time you call or walk in, “we've already broken the ice.” Don't let a business “live and die” on one touch; fifty single emails with no follow-up isn't cold outreach.\n\n> “Those who do cold outreach are going to beat you.” If you have no clients and lots of time, spend most of it on outreach. (Clayton, 8/26)\n\n**Volume (Clayton):** at least 3–5 well-researched businesses a day (10–20 if you have time), about 20–30 minutes each once it's a habit. 3 a day for a week is 21; a month of that, each followed up by call and visit, is about 84 businesses. “I would find it extremely hard for you to not land a client.”\n\n**Track it in GoHighLevel:** a “Cold outreach” pipeline with six stages: cold email sent → cold call → cold approach → call scheduled → free trial → paying retainer client. One contact per business, with the research doc linked. (LC gives free GHL sub-accounts; request form in Discord.)\n\n**Booking:** 15–30 minute slots from the link in the email. Aim for a two-step close (intro call, then pitch call), or a one-call close on a free trial.\n\n**Ground rules:** business hours only; honor do-not-contact immediately and permanently; never invent stats, clients or results. “Specific, honest, respectful, relentless.”",
      keyPoints: [
        "Day 0 email → Day 1 call → Day 3–4 walk-in → move on, retry in ~90 days.",
        "The only goal is a 20–30 minute discovery call with the owner.",
        "Specific, local, one gap, research-heavy.",
        "3–5 researched businesses a day ≈ 84 a month with follow-up (Clayton).",
        "Track it in a six-stage GHL “Cold outreach” pipeline."
      ],
      why: "This loop is built for exactly ZDub's market: high-ticket local trades with owners who answer their own phones and work out of a real address in the Sacramento region.",
      example: {
        title: "One prospect through the loop (made-up example)",
        body: "**Tuesday 7:45 AM:** a 90-word email to the owner of a Carmichael fencing company: 140 reviews at 4.8, but their Facebook ad sends people to the homepage, not a quote form. **Wednesday 8:10 AM:** a call: “I emailed you yesterday about your Facebook ad, just following up.” Voicemail (the one and only). **Friday 10:30 AM:** walk in with a one-pager, “3 Things I Noticed About [Business].” Owner's out; Zach gets his name and when he's in, leaves the sheet, sends a short bump email that night. **No reply:** move on, calendar a retry for about 90 days out."
      },
      table: {
        head: ["When", "Step", "What happens"],
        rows: [
          ["Day 0", "Prospect + research + email", "Build the list, a research doc per prospect, one custom email each."],
          ["Day 1 (~24 hours later)", "Call", "Cold call the non-repliers."],
          ["Day 3–4", "Walk-in", "Walk in on the non-bookers with a one-pager."],
          ["After", "Move on", "Put them back on the list in about 90 days."]
        ]
      },
      practice: [
        {
          prompt: "Set up your loop. Name the first three real prospects and schedule each touch.",
          fields: ["Prospect 1: email date / call date / walk-in date", "Prospect 2: email / call / walk-in dates", "Prospect 3: email / call / walk-in dates", "My GHL pipeline stages (in order)", "My daily number (3–5 or more) and the time block"],
          rubric: ["Call is ~24 hours after the email; walk-in day 3–4", "Six stages match Clayton's (or improve them with a reason)", "Daily number is at least 3", "Every prospect has a named owner or a plan to find one"]
        }
      ],
      today: { task: "Build the GHL “Cold outreach” pipeline with Clayton's six stages and add your first three prospects as contacts with their research docs linked.", output: "GHL pipeline live with 3 contacts", minutes: 30, suggested: false },
      check: [
        { q: "What's the timing of the LC loop?", a: "Email on Day 0, call about 24 hours later, walk in on Day 3–4, then move on and retry in about 90 days." },
        { q: "What is the single goal of the outreach?", a: "A 20–30 minute discovery call with the owner. Sell the conversation, not services." },
        { q: "What are Clayton's six pipeline stages?", a: "Cold email sent, cold call, cold approach, call scheduled, free trial, paying retainer client." }
      ]
    },
    {
      id: "gc-10",
      part: "loop",
      title: "Build a prospect list worth researching",
      minutes: 11,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Step 1: Build the prospect list with Gemini; Clayton running the loop live; Where the mentors disagree: Review-count filter", who: "LC Cold Outreach SOP; Clayton Bell, 8/26/26" },
        { doc: "9 New Calls Study Guide", section: "Prospecting and cold outreach: Building lead lists", who: "Students Nicholas Noah and James on Tayt's call 10/30/26; student David 7/28/26; Tayt Shelman 11/4/26" }
      ],
      idea: "A good list is half the battle. A weak list means great emails to businesses that can't afford you or don't need you.\n\n**The SOP's Gemini prompt** (Gemini because Google owns the Maps data, Clayton 8/26). Ask for:\n\n- Your city + a 15-mile radius.\n- High-ticket niches: roofing, HVAC replacement, kitchen and bath remodeling, custom pools, landscape/hardscaping, epoxy/concrete coatings, solar, fencing and decks, med spas, dental implants/ortho, garage builds, auto detailing/ceramic coating.\n- 15–20 businesses that are **independently owned** (no franchises), rated **4.0+ with 25+ reviews**, have a website and phone, and were active in the last 6 months.\n- A table: name, niche, URL, phone, city, rating, number of reviews, IG/FB, notes. Prioritize **dated or thin online presence relative to review count.**\n\n**Verify every row.** Gemini returns closed businesses, wrong URLs and franchises. **The dream prospect: 100+ reviews and a website that looks like 2015.** Great service, weak marketing.\n\n**Other list filters the mentors and students shared:**\n\n- **Roofers with fewer than 150 Google reviews** (newer, still need help), cross-referenced with BBB for the owner's cell and state contractor license lists. Student Nicholas Noah signed two roofers in two weeks this way (10/30).\n- **Filter out one- or two-person shops** that can't afford a $2.5k–3k retainer plus ad spend (student James, 10/30).\n- **On Instagram, under 10k followers usually means they need help**, and their content shows what they're struggling with. If they have a team, offer to “support,” not replace (student David, 7/28).\n- **Small market? Go to the bigger city 30–60 minutes away.** Remote works: 12 of Tayt's clients aren't local and his best one is in Georgia (Tayt, 11/4).\n\n**Where the mentors differ: the review filter.** The SOP says 4.0+ with 25+ reviews. Clayton (8/26) would consider dropping it, because a business with only ten 5-star reviews has an obvious marketing gap. He also says franchises are optional; independents just make it easier to reach the decision maker. Guide 05 suggests running your first list with the SOP filter and a second without it.",
      keyPoints: [
        "Gemini + Maps: 15-mile radius, high-ticket niches, independent, 4.0+/25+ reviews, active.",
        "Verify every row by hand.",
        "Dream prospect: 100+ reviews and a 2015-looking website.",
        "Skip 1–2 person shops that can't afford retainer + ad spend.",
        "SOP keeps the review filter; Clayton would consider dropping it."
      ],
      why: "ZDub's rule is that future clients should earn $5k+ per customer. A list built on high-ticket niches and real review counts filters for owners who can afford $2,000–3,000/month plus ad spend.",
      example: {
        title: "Zach's first Gemini prompt",
        body: "“Using Google Search and Maps, list 20 independently owned roofing companies within 15 miles of Sacramento, CA (no franchises). Each must have a 4.0+ Google rating with 25+ reviews, a website, a phone number, and activity in the last 6 months. Return a table: name, niche, URL, phone, city, rating, review count, Instagram/Facebook link, notes. Sort so businesses with a dated or thin online presence relative to their review count come first.” Then Zach opens every URL, deletes the closed ones and franchises, and stars the ones with 100+ reviews and an old site."
      },
      practice: [
        {
          prompt: "Write your own Gemini prompt for one niche, then list the filters you'll apply by hand after.",
          fields: ["Niche + center city + radius", "My full Gemini prompt", "Hand filters (franchise? team size? review count? last post?)", "Which version: SOP review filter, or Clayton's “no filter” second list?"],
          rubric: ["Niche is high-ticket ($5k+ per customer)", "Prompt includes independence, rating/reviews, website/phone, recent activity and a table format", "Hand filters include verifying each row", "You chose a filter version and can say why"]
        }
      ],
      today: { task: "Run the prompt for Sacramento-area roofers and remodelers with fewer than 150 Google reviews, verify 15 rows by hand, and add BBB and contractor license lookups for owner names and phones.", output: "15 verified rows in the prospect sheet", minutes: 45, suggested: true },
      check: [
        { q: "What does the SOP call the dream prospect?", a: "A business with 100+ reviews and a website that looks like 2015." },
        { q: "Why verify every Gemini row?", a: "Gemini returns closed businesses, wrong URLs and franchises." },
        { q: "What list filter did student James add on 10/30?", a: "Filter out one- or two-person shops that can't afford a $2.5k–3k retainer plus ad spend." }
      ]
    },
    {
      id: "gc-11",
      part: "loop",
      title: "Research the business and name ONE gap",
      minutes: 12,
      tags: ["Mentor", "Disagreement"],
      date: "2026-08-28",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Step 2: 60-second site scan; Step 3: Research doc per prospect", who: "LC Cold Outreach SOP" },
        { doc: "ZDub_Guide_05 V2", section: "Clayton running the loop live: Do the audit by hand", who: "Clayton Bell, 8/26/26" },
        { doc: "ZDub_Guide_05 V2", section: "Where the mentors disagree: Research time per business", who: "Calum Tresham 8/28/26; Clayton Bell 8/26/26; LC SOP" }
      ],
      idea: "Research is 80% of the work, and it all funnels into one sentence: **THE GAP.**\n\n**Step 1: the 60-second site scan.** Look for visible gaps: no quote request form, dead social links, a bad mobile experience, reviews they're not using. Skip franchises and anyone dialed in 9/10 everywhere.\n\n**Step 2: the research doc.** One per prospect:\n\n- **Owner name** (About page, Facebook page transparency, signed review replies, state LLC or contractor license lookup, LinkedIn), phone, email, address.\n- **Scores:** Website /10. Social (followers, last post dates, engagement). Google Business Profile (reviews, latest review, owner replies, photos). Meta Ad Library (running ads? how many, since when?).\n- **“Funnel hack”:** click their ad. Where does it go, what's the offer, is there a form or booking, does the landing page match?\n- **THE GAP:** one sentence with evidence, plus what it's costing them. **THE ANGLE:** what you'd help fix. Plus an outreach log.\n\n**Scoring:** 8–10 = weak angle (skip). 5–7 = good angle. 1–4 = best angle.\n\n**The gap must be observable and specific.** “Your Facebook ad from June sends people to your homepage instead of a form,” not “your marketing could be better.”\n\n**Clayton's version (8/26), done by hand.** Google rating and count; website (easy to navigate? quote form? testimonials?); Instagram and Facebook (followers, posts this month, last 90 days, total, last post date, quality); BBB and years in business; Meta Ad Library (any ads live?). When a student asked about having AI build the whole sheet, Clayton preferred manual research: AI output is questionable here and you'll have more context on the call. About 10–15 minutes per business once practiced. Tip: screen-record your research while narrating out loud (he uses Fireflies), then use the transcript.\n\n**Where the mentors differ: research time.** Calum (8/28): 5–10 minutes, “not 30–60.” Clayton (8/26): 10–15 minutes once practiced. The SOP: “research is 80% of the work.” Guide 05's suggestion: 10–15 minutes for an email that names one gap, 5–10 for a quick call.",
      keyPoints: [
        "60-second scan first; skip franchises and anyone 9/10 everywhere.",
        "Research doc: owner, website /10, social, Google profile, Ad Library, funnel hack.",
        "THE GAP = one observable sentence + what it's costing them.",
        "Score 1–4 = best angle; 8–10 = skip.",
        "Do it by hand; 5–15 minutes depending on the touch."
      ],
      why: "The gap is what makes ZDub's email different from the 20 “boost your online presence” emails a Sacramento roofer gets every week. It's also the opening line of the call and the headline of the walk-in sheet, so one good research doc powers all three touches.",
      example: {
        title: "A research doc, condensed (made-up example)",
        body: "**Owner:** Mike (signed review replies; CSLB license lookup). **Google:** 4.9 stars, 312 reviews, latest 3 days ago, owner replies to most. **Website:** 4/10, no quote form, phone number only in the footer, not mobile-friendly. **Instagram:** 1,100 followers, last post February. **Ad Library:** one ad live since June, linking to the homepage. **Score:** 3 (best angle). **THE GAP:** “You have 312 five-star-quality reviews but no way to request a quote on your site, so people who find you after hours likely call the next roofer.” **THE ANGLE:** a quote form plus an ad that sends people straight to it."
      },
      practice: [
        {
          prompt: "Fill a full research doc for one real Sacramento-area prospect. Time yourself.",
          fields: ["Business + owner name + where I found the name", "Google rating / count / latest review / owner replies", "Website score /10 + what's missing", "Instagram + Facebook (followers, last post, posts last 90 days)", "Meta Ad Library: ads live? since when? where do they go?", "Score (1–10)", "THE GAP (one sentence + what it costs them)", "THE ANGLE (what I'd help fix)", "Time it took"],
          rubric: ["The gap is observable: someone else could verify it in 30 seconds", "It names what the gap is costing them", "Only ONE gap is chosen", "Owner name has a source", "Under 15 minutes (or you noted why not)"]
        }
      ],
      today: { task: "Complete research docs for 3 prospects from your verified list, each with a scored gap sentence.", output: "3 research docs linked in the outreach log", minutes: 45, suggested: false },
      check: [
        { q: "What's the difference between a good and a bad gap?", a: "A good gap is observable and specific (“your June Facebook ad sends people to your homepage instead of a form”); a bad one is vague (“your marketing could be better”)." },
        { q: "How does the SOP score prospects?", a: "8–10 = weak angle, skip; 5–7 = good angle; 1–4 = best angle." },
        { q: "Why did Clayton prefer manual research over having AI build the sheet?", a: "AI output is questionable for this, and doing it yourself gives you more context for the call." }
      ]
    },
    {
      id: "gc-12",
      part: "loop",
      title: "Research triggers: give them a reason you called today",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Cold calling (Calum, 8/28): 5–10 minutes of research per call; Clayton's local context", who: "Calum Tresham with Clayton Bell, 8/28/26" },
        { doc: "9 New Calls Study Guide", section: "How to run the calls (research before every call); Research and judgment", who: "Calum Tresham 8/21/26; Tayt Shelman 10/30/26" }
      ],
      idea: "THE GAP says what's wrong. A **trigger** says why now. Calum's research list (taught on 8/28 per Guide 05, and again on 8/21 per the 9 New Calls guide) is five things to look for in 5–10 minutes:\n\n1. **Recent company shifts:** expansions, a new location or truck, new leaders, pivots. A new location means split demand and a need for exposure.\n2. **Industry pain points tied to your area:** weather, events.\n3. **Competitive pressures:** who's advertising hard nearby.\n4. **Public statements from leadership:** posts, interviews, a “we're hiring” announcement.\n5. **Recent wins or growing pains:** an award, a big job, bad reviews about slow callbacks.\n\n**Local context is your edge.** Clayton (8/28) tied his pitch to things only a local would know, like Scottsdale summers killing foot traffic. “Stack as many things in your favor” as you can.\n\n**Two more research moves:**\n\n- **The Ad Library “oldest ads” check (Tayt, 10/30).** In Meta Ads Library, sort for the oldest ads still running in their niche. People don't keep paying for losers, so long-running ads show what works. Great for your swipe file and for the call (“here's what's working for roofers in other cities”).\n- **Test their funnel yourself (Calum).** If their form says “we'll reply in 5 minutes” and you've waited 2 hours, that's a trigger you can name honestly.\n\nTriggers turn a cold call from “I sell marketing” into “I noticed you just opened a second location in Elk Grove.” That's the difference between a stranger and someone who did their homework.",
      keyPoints: [
        "Five triggers: company shifts, local industry pain, competition, leadership statements, wins or growing pains.",
        "A new location = split demand = need for exposure.",
        "Use local knowledge only a neighbor would have.",
        "Oldest ads still running = what works (Tayt).",
        "Test their funnel yourself before you mention it."
      ],
      why: "Sacramento gives Zach built-in local triggers: 100°+ summers for HVAC, winter storms for roofers, spring for landscapers and pressure washers, riding season for PMT. A Bay Area agency can't use those the way a local can.",
      example: {
        title: "Trigger table for three Sacramento prospects (made-up businesses)",
        body: "**HVAC, Roseville:** posted “now hiring techs” last week (growing pains) + first triple-digit week of the year coming (local pain). **Roofer, Folsom:** new second truck wrapped and posted on Instagram (company shift) + winter storm season ahead. **Med spa, Midtown:** a new competitor two blocks away is running 14 Meta ads (competitive pressure)."
      },
      table: {
        head: ["Trigger", "Where to look", "Sacramento example"],
        rows: [
          ["Company shift", "Instagram, Google posts, new location listings, truck wraps", "Second location opened in Elk Grove"],
          ["Local industry pain", "Weather forecasts, city news, seasonal patterns", "First 105° week = AC failures"],
          ["Competitive pressure", "Meta Ad Library for nearby competitors", "Competitor running 14 ads in the same zip codes"],
          ["Leadership statement", "Owner's Facebook, LinkedIn, local news", "“We're hiring two installers”"],
          ["Win or growing pain", "Reviews, awards, complaints", "Recent reviews say “hard to get a callback”"]
        ]
      },
      practice: [
        {
          prompt: "For three real prospects, find one trigger each and write the single sentence you'd open with.",
          fields: ["Prospect 1: trigger + where I found it", "Prospect 1: opening sentence", "Prospect 2: trigger + source", "Prospect 2: opening sentence", "Prospect 3: trigger + source", "Prospect 3: opening sentence"],
          rubric: ["Each trigger is real and dated", "At least one uses local knowledge (weather, event, area)", "Opening sentences start with “I noticed…” style observation, not who you are", "No invented facts"],
          model: "“Hey Carlos, I'm looking for the owner. I'm local, and I noticed you're hiring installers right before the first 100-degree week, which usually means the phones are about to blow up. Quick question about how you're handling the overflow…”"
        }
      ],
      today: { task: "Add a “Trigger” column to your research doc template and fill it for every prospect you'll contact this week. Run one Ad Library “oldest ads” search for your main niche and save 2 to the swipe file.", output: "Trigger column filled + 2 long-running ads saved", minutes: 25, suggested: false },
      check: [
        { q: "Name Calum's five research areas.", a: "Recent company shifts; industry pain tied to the area; competitive pressures; public statements from leadership; recent wins or growing pains." },
        { q: "Why does a new location matter?", a: "It splits demand and creates a need for exposure in the new area." },
        { q: "Why does Tayt sort the Ad Library for the oldest ads still running?", a: "People don't keep paying for losers, so long-running ads show what works." }
      ]
    },
    {
      id: "gc-13",
      part: "loop",
      title: "Write the cold email: five beats, under 120 words",
      minutes: 11,
      tags: ["Mentor"],
      date: "2026-08-26",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Step 4: The cold email (5 beats, about 100 words); rules; banned phrases; Claude infill prompt", who: "LC Cold Outreach SOP" },
        { doc: "ZDub_Guide_05 V2", section: "Clayton running the loop live (write in Claude, remove em dashes, swipe file)", who: "Clayton Bell, 8/26/26" }
      ],
      alsoIn: ["Copywriting tab (subject lines and hooks)"],
      idea: "The SOP's cold email has exactly five beats and about 100 words:\n\n1. **A casual, specific subject line, in lowercase.** The SOP's example: “your google reviews vs your website.”\n2. **Open with the observation, not who you are.** Lead with THE GAP.\n3. **One line on what it's costing them.**\n4. **One line offering the fix conversation:** you've already sketched ideas; it's free, no strings.\n5. **CTA:** 20 minutes this week, your booking link, “or just reply,” and “I'm local, happy to swing by.”\n\n**Rules:**\n\n- Under 120 words. One gap. Write like a text to a smart friend.\n- Send from your **business domain, never a fresh Gmail.** Use your GHL calendar link.\n- Send **Tuesday–Thursday, 7–9 AM.**\n- **One custom email per prospect. Never batch-blast.**\n\n**Banned phrases:** “boost your online presence,” “digital solutions,” “I hope this email finds you well,” “just checking in,” “synergy,” and invented stats.\n\n**The SOP's Claude infill prompt:** paste the research doc and ask for a 7th-grade reading level, no exclamation points, no em dashes, and 3 lowercase subject line options. Its worked example was a roofer with 312 reviews at 4.9 and no quote form.\n\n**Clayton (8/26):** write the email in Claude (“the best at... those kind of tasks”), but always remove em dashes: “if you do not remove an em dash I immediately know it's AI.” He uses “...” instead. Keep it short; attention is money. And link the prospect's swipe file folder (3–5 organic examples + 1 ad) to show you've done the work.\n\nAI writes the draft. You check every word against the research doc, because one wrong detail kills the whole “I actually looked” effect.",
      keyPoints: [
        "Five beats: subject → observation → cost → free fix conversation → 20-minute CTA + local.",
        "Under 120 words, one gap, written like a text to a smart friend.",
        "Business domain only; Tuesday–Thursday 7–9 AM; never batch-blast.",
        "No banned phrases, no exclamation points, no em dashes.",
        "Link the prospect's swipe file to show visible effort."
      ],
      why: "Sacramento trades owners get generic agency spam daily. A 90-word email that names their exact review count and a missing quote form reads like it came from a neighbor who looked, which is exactly what it is.",
      example: {
        title: "The SOP's roofer scenario, written out (made-up business)",
        before: "Subject: Grow Your Business With Digital Marketing!\n\nHi, I hope this email finds you well! My name is Zach and I own ZDub Media, a full-service agency that helps businesses boost their online presence with digital solutions...",
        after: "Subject: your google reviews vs your website\n\nHi Mike,\n\nI was looking at roofers around Citrus Heights and saw you have 312 Google reviews at 4.9... but there's no way to request a quote on your website.\n\nThat probably means people who find you at night or between jobs leave and call the next roofer.\n\nI sketched a couple of simple fixes. Free, no strings.\n\nWorth 20 minutes this week? Here's my calendar: [link], or just reply. I'm local in Sacramento and happy to swing by.\n\nZach\nZDub Media"
      },
      practice: [
        {
          prompt: "Write a five-beat cold email to a real prospect from your research docs. Then run it through Claude with the SOP infill prompt and compare.",
          fields: ["Prospect + their gap", "3 lowercase subject line options", "Beat 2: the observation", "Beat 3: what it's costing them", "Beat 4: the free fix offer", "Beat 5: CTA (20 min + link + reply + local)", "Word count"],
          rubric: ["Opens with the observation, not your name", "One gap only, observable and true", "Under 120 words", "Says you're local", "No banned phrases, exclamation points or em dashes"]
        }
      ],
      today: { task: "Send 3 custom five-beat emails (Tuesday–Thursday, 7–9 AM) from your ZDub business domain to prospects with finished research docs. Log each in the GHL pipeline as “cold email sent.”", output: "3 emails sent + logged", minutes: 40, suggested: false },
      check: [
        { q: "What are the five beats of the SOP cold email?", a: "Lowercase specific subject; open with the observation; one line on the cost; one line offering the free fix conversation; CTA for 20 minutes with link, “or just reply,” and “I'm local.”" },
        { q: "When and from where should it be sent?", a: "From your business domain (never a fresh Gmail), Tuesday–Thursday, 7–9 AM, one custom email per prospect." },
        { q: "Why does Clayton insist on removing em dashes?", a: "They're a tell that AI wrote it: “if you do not remove an em dash I immediately know it's AI.”" }
      ]
    },
    {
      id: "gc-14",
      part: "loop",
      title: "Email deliverability: it only matters once you send at volume",
      minutes: 8,
      tags: ["Alternate model (Jason)"],
      date: "2026-09-30",
      source: [
        { doc: "Module 01 — Why This Business Works", section: "Segment 6: How cold email systems really cost; Segment 7: Why 250/day is the floor", who: "Jason Maulucci, 9/30/26 (B2B cold-email agency model)" },
        { doc: "ZDub_Guide_05 V2", section: "Step 4 rules (business domain); Not covered in the calls", who: "LC Cold Outreach SOP" }
      ],
      idea: "First, know which model you're running. **ZDub's mentor model** (the LC SOP) is hand-researched local outreach: one custom email per prospect, 3–20 a day, sent from your business domain and never a fresh Gmail. At that volume, normal sending is fine. Guide 05 notes the calls didn't cover deliverability setup (domain warm-up, SPF/DKIM, sending tools) beyond “send from your business domain.”\n\n**Jason's 9/30 modules teach a different business:** a B2B cold-email agency that sells booked calls to other companies and sends hundreds of emails a day. A few of his rules transfer if ZDub ever scales email:\n\n- **About 20 emails per day per inbox, maximum.**\n- **2 inboxes per domain.** So one domain safely carries about 40 sends a day.\n- Break those rules and “your domains burn”: mail goes to spam or doesn't deliver.\n- Volume costs more than the “30,000 emails for $100” ads suggest. His math for 30,000 a month: 20 domains (~$240), 40 inboxes (~$288/month), a sending platform (~$100), 10,000 leads (~$300), verification (~$20, losing about 10% of the list): roughly $1,000 plus manual setup (DNS records, warm-up schedules, scraping, uploading).\n\n**His campaign math** (for that model): 7,500 sends to 2,500 contacts (3 emails each) → 2% reply = 50 responses → 20% positive = 10 → 50% book = 5 calls → 20% close = 1 client. He says under 250 cold emails a day is “effectively useless” *for his model*, and that personalized outreach raises the odds further.\n\n**What this means for ZDub:** don't copy the volume. The LC SOP gets meetings through research, not scale. But if you ever push beyond ~40 cold emails a day, use separate sending domains so your main zdubmedia domain never gets burned, and keep ZDub's prospect list separate from any client's customer list.",
      keyPoints: [
        "ZDub's SOP: one custom email per prospect from your business domain, never a fresh Gmail.",
        "Jason's rules at volume: ~20 emails/inbox/day, 2 inboxes/domain (~40/day/domain).",
        "Breaking them burns domains: spam folder or no delivery.",
        "Real cost of volume ≈ $1,000/month for 30,000 sends, plus setup.",
        "Different model: don't copy Jason's volume; borrow the guardrails."
      ],
      why: "If Zach's main domain gets flagged as spam, PMT reports, proposals and client emails land in junk too. Knowing the guardrails before scaling protects the whole business.",
      example: {
        title: "When ZDub would need this",
        body: "Today: 3–5 researched emails a day from zach@[zdub domain]. No extra setup needed beyond a proper business domain and signature. Later: if Zach tests a lighter-research email to 200 Sacramento contractors a week (about 40 a day), Jason's rules say that's the full capacity of one domain with 2 inboxes, so he'd add a second sending domain and keep the main one for clients."
      },
      practice: [
        {
          prompt: "Decide your sending setup now, before you need it.",
          fields: ["My current cold emails per day", "The address/domain I send from", "At what daily volume would I add a second domain? (show the math)", "Where I keep ZDub's prospect list vs client customer lists"],
          rubric: ["Sending from a business domain, not Gmail", "Volume threshold uses 20/inbox × 2 inboxes per domain", "Prospect list and client lists are separate", "You can explain why the SOP doesn't need volume"]
        }
      ],
      today: { task: "Check your cold email setup: send a test to yourself from your ZDub business domain, confirm it lands in the inbox (not spam), and add a signature with your name, ZDub Media, a local phone number and the booking link.", output: "Verified sending address + signature", minutes: 15, suggested: false },
      check: [
        { q: "What are Jason's two deliverability rules?", a: "About 20 emails per day per inbox maximum, and 2 inboxes per domain." },
        { q: "What does the LC SOP say about where to send from?", a: "Your business domain, never a fresh Gmail." },
        { q: "Why shouldn't ZDub copy Jason's 250/day floor?", a: "It's a different model (a B2B cold-email agency). ZDub's SOP wins meetings through research and one custom email per prospect, not volume." }
      ]
    },
    {
      id: "gc-15",
      part: "calls",
      title: "The cold call opener and the 30/60/90 rule",
      minutes: 11,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Cold calling (Calum, 8/28): The 30/60/90 rule; The opener", who: "Calum Tresham, 8/28/26" },
        { doc: "9 New Calls Study Guide", section: "Cold call openers that came up; How to run the calls", who: "Calum 8/21/26; Tayt Shelman 10/30/26; students Nicholas Noah and James 10/30/26; student David 7/28/26" },
        { doc: "ZDub_Guide_00 V2", section: "Honesty flags: Calum's cold call opener", who: "Logan McKinney, 10/13/26" }
      ],
      idea: "**Calum's 30/60/90 rule.** Get past 30 seconds and they'll usually stay. Past 60, you've shown value and earned some trust. Past 90, you should be booking them (a sales call, a free in-person shoot, or a free build). The first 30 seconds are the hardest, and the longer a cold call runs, the better.\n\nTayt (10/30) describes it line by line: **each line buys more time.** The first buys about 5 seconds, then you earn the conversation. By about line six it should feel like a normal talk.\n\n**The openers the mentors and students shared:**\n\n- **Calum's “well researched” opener:** “Hey [name], this is a cold call, but it's a very well researched one. Give me 30 seconds and I'll prove it. If you don't think it's useful at all, I'll personally promise not a single person in our company will ever call you again.” **Solo version:** Logan (10/13) said not to imply a team you don't have, so: “If it's not useful, I promise I'll never call you again.”\n- **Tayt's good news / bad news:** “I've got good news and bad news, which do you want first?” The bad news is it's a cold call; the good news is it's well researched. They play along, which is a soft yes.\n- **Student Nicholas Noah's roofer opener** (two roofers signed in two weeks): “Do you guys do roof replacements?” → “If I could bring you 5 to 10 qualified leads a month, could your team even handle that right now?” → “I call them, qualify them, put them on your calendar. All you do is show up and close.”\n- **Student James' “lost old man” opener:** a soft “could you possibly help me out for a moment?” to lower defenses, then “who takes care of bringing in new jobs over there? I noticed something...”\n\n**Delivery:** Calum names three buying triggers: emotion, logic, and the primal brain (a pattern interrupt). Sound different; don't be generic or monotone. Tayt uses a curiosity frame and up-tones: “Hey, I just noticed...” And he dislikes “Is this John?” You should know who you're calling, so say “I'm looking for John.” People don't care who you are; keep your intro short.\n\nStudent David booked 4 meetups from 11 calls with a simple script (7/28). Owners hear pitches all week, so lead with what they want: new customers and revenue.",
      keyPoints: [
        "30 seconds = they stay; 60 = trust; 90 = book them (Calum).",
        "Each line buys more time; by line six it's a normal talk (Tayt).",
        "Solo agency? “I promise I'll never call you again,” not “our company.”",
        "Pattern interrupt + curiosity (“I just noticed…”), short intro.",
        "Say “I'm looking for John,” not “Is this John?”"
      ],
      why: "Zach already cold-calls sellers for wholesaling. The skill transfers; the opener has to change, because business owners are pitched far more than homeowners are and decide in the first sentence whether you're worth 30 seconds.",
      example: {
        title: "Three openers for the same Folsom roofer (made-up business)",
        body: "**Calum, solo version:** “Hey Mike, this is Zach. This is a cold call, but it's a well researched one. Give me 30 seconds and I'll prove it. If it's not useful, I promise I'll never call you again.” **Tayt:** “Hey Mike, I've got good news and bad news, which do you want first?” **Nicholas Noah:** “Hey, do you guys do roof replacements? ... If I could bring you 5 to 10 qualified leads a month, could your team even handle that right now?”"
      },
      table: {
        head: ["Opener", "Who", "Why it works"],
        rows: [
          ["“Cold call, but a well researched one. Give me 30 seconds.”", "Calum (8/21, 8/28)", "Honest pattern interrupt + a small, bounded ask"],
          ["“Good news and bad news, which first?”", "Tayt (10/30)", "They play along = a soft yes"],
          ["“Do you guys do roof replacements?”", "Student Nicholas Noah (10/30)", "Easy yes, then a capacity question that sells itself"],
          ["“Could you possibly help me out for a moment?”", "Student James (10/30)", "Lowers defenses before the real question"]
        ]
      },
      practice: [
        {
          prompt: "Write three openers for one real prospect on your list, using three different styles. Read each out loud and time it.",
          fields: ["Prospect + their gap or trigger", "Opener 1: Calum, solo version", "Opener 2: Tayt's good news / bad news (with your real “good news”)", "Opener 3: a question opener for their trade", "Which one sounds most like me, and why"],
          rubric: ["No implied team", "Each gets to the observation within 2–3 lines", "Says “I'm looking for [name],” not “Is this [name]?”", "Under 30 seconds out loud"]
        }
      ],
      today: { task: "Test two openers on 10 dials: Calum's “well researched” opener (solo version) on 5, the roof replacements question on 5. Log which ones got past 30 seconds.", output: "10 dials logged with opener used and how far each got", minutes: 45, suggested: true },
      check: [
        { q: "What does the 30/60/90 rule say?", a: "Past 30 seconds they usually stay; past 60 you've shown value and earned trust; past 90 you should be booking them." },
        { q: "How should a solo owner adjust Calum's opener, and why?", a: "Say “If it's not useful, I promise I'll never call you again,” because “not a single person in our company” implies a team you don't have (Logan, 10/13)." },
        { q: "Why does Tayt dislike “Is this John?”", a: "You should know who you're calling. Say “I'm looking for John,” and keep your intro short because people don't care who you are." }
      ]
    },
    {
      id: "gc-16",
      part: "calls",
      title: "Run the call: prep, the owner script, then stop talking",
      minutes: 11,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Step 5: The cold call (24 hours later); Clayton's call script; Booking the meeting; Where the mentors disagree: call times, when to call after the email", who: "LC SOP; Clayton Bell 8/26/26; Calum Tresham 8/28/26" },
        { doc: "9 New Calls Study Guide", section: "How to run the calls", who: "Tayt Shelman, 10/30/26 and 11/4/26" }
      ],
      idea: "**Before you dial (SOP):** open the research doc, know the gap and the owner's first name, **stand up, talk slower.**\n\n**With the owner (SOP), in order:** you're local; this is quick; your email is probably buried; name the gap and the detail; you've sketched fixes; 20 minutes, free, not pitching a package. **Then stop talking. Silence is the close.**\n\n**Clayton's version (8/26):** “Not sure if you saw my email... noticed [gap, e.g. inconsistent posting and no ads]... I put together examples of organic and ads for your business... if you're completely opposed, let me know.” That last line is non-needy and makes it easy to say yes.\n\n**Book on the spot (SOP):** offer two specific times, by phone or you swing by. Get their cell and email and send the calendar invite while you're still on the phone. Every call ends one of three ways: **booked, a scheduled callback, or a clean no.**\n\n**Calum's booking line:** “Based on what you shared about [challenges] and especially considering [industry trend], it probably makes sense to dive deeper. I have some specific thoughts on your current situation. Should we block out 30 minutes next week to explore them?”\n\n**Where the mentors differ: when to call.**\n\n- **SOP:** trades 7:30–9:00 AM or 4–6 PM; med spas, dental and offices 10–11:30 AM or 2–4 PM. Never Monday morning. **Clayton (8/26):** business hours, mornings usually best; a student added avoid Monday mornings and Fridays, Wednesday and Thursday are prime. Call more than once.\n- **Tayt (10/30):** “Don't let AI tell you when to call.” Door-knockers knock all day because you never know who's home. After work, call businesses in later time zones (11/4).\n\n**And how soon after the email?** SOP and Clayton: about 24 hours later. Calum (8/28): split-test it: some right after the email, some after 24 hours, some after 3 days, some only after they reply.",
      keyPoints: [
        "Prep: research doc open, gap + first name ready, stand up, talk slower.",
        "Name the gap, offer 20 free minutes, then stop talking.",
        "Book on the spot with two times; send the invite while on the phone.",
        "Every call ends booked, with a callback time, or a clean no.",
        "Call windows (SOP) vs “knock all day” (Tayt): test both."
      ],
      why: "The biggest leak in most beginner calls isn't the opener; it's talking past the moment of interest and hanging up with “I'll send you some info.” Booking on the phone turns a good call into a calendar event.",
      example: {
        title: "The owner script, for a Roseville HVAC company (made-up business)",
        body: "“Hey Carlos, it's Zach, I'm local here in Sacramento. This'll be quick. I emailed you yesterday, it's probably buried. I noticed your Google ad and your Facebook page both send people to a homepage with no way to book, right before the heat hits. I sketched a couple of fixes. It's 20 minutes, free, I'm not pitching a package.” [Silence.] “Would Wednesday at 7:45 or Thursday at 4:30 work better? I can do it by phone or swing by the shop.” [He picks Thursday.] “Perfect, what's the best cell and email? I'm sending the invite right now.”"
      },
      practice: [
        {
          prompt: "Write a full call card for one real prospect you've already emailed.",
          fields: ["Owner first name + business", "The gap + one specific detail", "My owner script (local → quick → buried email → gap → sketched fixes → 20 min free)", "My two offered times", "Callback line if it's a bad time", "Call window I'll use + why (SOP vs Tayt)"],
          rubric: ["Script names the gap in the first 20 seconds", "It ends with a question, then silence", "Two specific times, not “when works for you?”", "Every outcome (booked, callback, no) has a next step"]
        }
      ],
      today: { task: "Call the prospects you emailed yesterday who didn't reply (aim for 5). Stand up. Use your call card. Log each as booked, callback (with a time), or clean no.", output: "5 calls logged with outcomes in GHL", minutes: 40, suggested: false },
      check: [
        { q: "What does the SOP say to do right after you name the gap and offer 20 minutes?", a: "Stop talking. Silence is the close." },
        { q: "How should you book on the call?", a: "Offer two specific times (phone or in person), get their cell and email, and send the invite while you're still on the phone." },
        { q: "How do the SOP and Tayt differ on call timing?", a: "The SOP gives windows (trades 7:30–9 AM or 4–6 PM, never Monday morning); Tayt says don't let AI tell you when to call, knock all day like door-knockers." }
      ]
    },
    {
      id: "gc-17",
      part: "calls",
      title: "“That's actually why I called”: handling the brush-off",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-08-28",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "“That's actually why I called” (Calum's directions); Step 5 objection table and hard rules", who: "Calum Tresham 8/28/26; LC Cold Outreach SOP" }
      ],
      alsoIn: ["Sales tab (end-of-call objections)"],
      idea: "On a sales call, objections come at the end. **On a cold call they come at the start**, usually as a reflex brush-off before the owner has heard anything. Calum's universal move: whatever they say, answer **“Yeah, that's actually why I called”** and tie it to your reason. It agrees instead of arguing, and it turns their objection into your opening.\n\nThe table combines Calum's directions with the SOP's scripted responses. Two of Calum's details are worth underlining:\n\n- **“We already have someone”:** test their funnel yourself first. If their form says “we'll reply in 5 minutes” and you've waited 2 hours, you have something real to ask about.\n- **“Already tried it”:** “Most people who say that ran it themselves for a few weeks...” It's usually true, and it reopens the door without insulting them.\n\n**The SOP's hard rules:**\n\n- **Never argue.**\n- **Never trash their site or their agency.** Frame it as money left on the table.\n- **First names only.**\n- **Every call ends booked, with a scheduled callback, or a clean no.**\n- **Leave exactly one voicemail, ever.** Then go in person.\n\nYou won't have answers for everything on day one. That's what the objection textbook (next lessons and the tracker) is for: every new brush-off gets written down with a rebuttal the same day.",
      keyPoints: [
        "Cold call objections come at the start, as reflexes.",
        "Answer every brush-off with “Yeah, that's actually why I called…”",
        "Already have someone? Keep him; offer a second set of eyes on one thing.",
        "Never argue, never trash their site or agency, first names only.",
        "One voicemail ever, then walk in."
      ],
      why: "Sacramento roofers and HVAC owners have heard every pitch. The owner who says “we're all set” is often the one losing jobs to slow callbacks. A calm “that's actually why I called” keeps the door open long enough to show the gap.",
      example: {
        title: "“We're all set” → a booked call (made-up example)",
        before: "Owner: “We're all set, thanks.” Zach: “Oh, okay, no problem. Can I send you some info?” [Call ends.]",
        after: "Owner: “We're all set, thanks.” Zach: “Yeah, that's actually why I called. Are most of your jobs coming from referrals right now?” Owner: “Mostly, yeah.” Zach: “Referrals are great until the phone slows down. You've got 312 reviews and no quote form on the site, so the people who look you up after a referral can't easily book. That's the one thing I wanted to show you. 20 minutes, free. Wednesday or Thursday morning?”"
      },
      table: {
        head: ["Brush-off", "Calum's direction (8/28)", "SOP response"],
        rows: [
          ["“All set / not interested”", "“That's actually why I called…”", "“Are most jobs from referrals? …Referrals are great until the phone slows down.”"],
          ["“We already have someone / a marketing guy”", "“…a similar business mentioned they really liked having [capability]. Do you have that in your current setup?” Test their funnel first.", "“Keep him. Second set of eyes on one thing.”"],
          ["“No budget”", "“Most people have committed budgets… when do budgets reset? What are you doing for ads now?”", "—"],
          ["“I'm not the right person”", "“I wasn't sure who owned this, figured you'd know… can you pass me through to them now?”", "—"],
          ["“Already tried it”", "“Most people who say that ran it themselves for a few weeks…”", "—"],
          ["“Bad timing”", "“That's why I grabbed 30 seconds now… what's making this a bad time?”", "Lock a specific callback time."],
          ["“How much?”", "—", "20 minutes, free, no pitch, you keep the ideas."],
          ["“Just email me”", "—", "“I did… it's easier to show. What's the best address?”"],
          ["“Is this a sales call?”", "—", "Straight answer: building a local client list, yes eventually, but called because of [detail]."]
        ]
      },
      practice: [
        {
          prompt: "Write your rebuttal to each brush-off for a real Sacramento HVAC or roofing prospect, using “that's actually why I called” or the SOP line, and tie each to that prospect's actual gap.",
          fields: ["Prospect + gap", "“We're all set”", "“We already have a marketing guy”", "“No budget”", "“Already tried Facebook ads”", "“Is this a sales call?”", "“Bad timing”"],
          rubric: ["Each answer agrees before it redirects", "Each ties back to this prospect's specific gap", "None argues or trashes their current agency", "Each ends with a question or a booking/callback ask"]
        }
      ],
      today: { task: "Start your objection textbook: a doc (or the tracker on this tab) with the 9 brush-offs above, your rebuttal for each, and a blank row for every new one you hear this week.", output: "Objection textbook with 9+ rows", minutes: 25, suggested: false },
      check: [
        { q: "Why does “that's actually why I called” work?", a: "On cold calls objections come at the start as reflexes; agreeing and tying the objection to your reason keeps the call going without arguing." },
        { q: "What's the SOP response to “we already have a marketing guy”?", a: "“Keep him. Second set of eyes on one thing.”" },
        { q: "What's the SOP's voicemail rule?", a: "Leave exactly one voicemail, ever. Then go in person." }
      ]
    },
    {
      id: "gc-18",
      part: "walkin",
      title: "Get past gatekeepers and silence",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Step 5: Gatekeeper; Clayton's call script; Lusha; Outreach psychology: Follow-up", who: "LC SOP; Clayton Bell 8/26/26; Calum Tresham 8/28/26; LC teaching notes" },
        { doc: "9 New Calls Study Guide", section: "Getting past gatekeepers and silence", who: "Tayt Shelman, 10/30/26" },
        { doc: "ZDub_Guide_00 V2", section: "Principle 12: Follow up across channels", who: "Clayton Bell, 8/26/26" }
      ],
      alsoIn: ["Funnels tab (speed to lead and follow-up for client leads)"],
      idea: "Two things stand between you and the owner: the person who answers the phone, and the owner's silence. Both are beaten by persistence across channels, done respectfully.\n\n**The gatekeeper (SOP).** “Hey, is [owner] around? ...[Name], I emailed him yesterday about the [website], just following up.” If pressed: “I'm local here... found something on the website I think [owner] would want to know.” **Never pitch the gatekeeper.** No name? “Who handles the website and marketing over there?” Student James' version (10/30): “who takes care of bringing in new jobs over there?”\n\nClayton (8/26): “Not sure who looks through your company email, but I sent over an email very specific to [business]... who would be best to talk to?”\n\n**Finding the owner directly.** BBB listings and state contractor license lookups often show the owner's cell (student Nicholas Noah, 10/30). Calum (8/28) mentioned Lusha, a tool that works with LinkedIn to find direct emails or phones, and acknowledged some argue it's not ethical. Optional.\n\n**Silence is not a no.** Tayt (10/30): text, call the receptionist, email, walk in, call again tomorrow. Use the gatekeeper as a bridge: “Hey Nick, I keep speaking to Emily, she keeps saying you're my man.” Roofers are the most-pitched owners around, and some deals take **one to two years** of follow-up. “The person that can just talk to them the most will get the worm.”\n\n**Principle 12 (Clayton, 8/26):** follow up across channels: email, call, in person. Never let a business “live and die” on one touch.\n\n**How to follow up (LC Outreach Psychology notes):**\n\n- **Cold follow-up:** short, light, costs nothing to ignore, never guilt-trip.\n- **Warm follow-up** (they've engaged): assume good faith, be persistent, make it easy to act. Most people give up on warm prospects too early.\n\nThe SOP's rhythm keeps it respectful: after the walk-in, move on and put them back on the list in about 90 days. Honor do-not-contact immediately and permanently.",
      keyPoints: [
        "Never pitch the gatekeeper; ask for the owner by name and reference your email.",
        "No name? “Who handles the marketing / new jobs over there?”",
        "Owner cells: BBB and contractor license lookups.",
        "Silence isn't a no: switch channels (text, call, email, walk in).",
        "Cold follow-up is light; warm follow-up is persistent. Honor do-not-contact."
      ],
      why: "The trades owners ZDub wants are on roofs and in attics all day. The office manager is the gate. Being polite, specific and persistent with her is how Zach gets the 2-minute window when the owner is actually in.",
      example: {
        title: "Bridging through the office manager (made-up example)",
        body: "Call 1: “Hey, is Mike around? ... Totally fine. I'm local, I emailed him yesterday about the quote form on the website, just following up. When's he usually in?” Text 2 days later to the main line: “Hi, Zach from ZDub Media, local. Sent Mike a quick note about the website, no rush.” Walk-in Friday: leave the one-pager with Emily. Call next week: “Hey Mike, I keep speaking to Emily, she keeps saying you're my man.”"
      },
      practice: [
        {
          prompt: "Write a 5-touch sequence for a real prospect who hasn't responded, switching channels each time. Mark which touches are cold-light vs warm-persistent.",
          fields: ["Prospect + owner name + gatekeeper name (if known)", "Touch 1 (channel + exact words)", "Touch 2", "Touch 3", "Touch 4", "Touch 5 (and when to stop and retry in ~90 days)"],
          rubric: ["At least three different channels", "Never pitches the gatekeeper", "Each touch is short and costs nothing to ignore", "No guilt-trips (“just checking in,” “did you see my email?!”)", "Clear stop point"]
        }
      ],
      today: { task: "Pick 3 stalled prospects and send each the next touch on a different channel than the last one (text if you emailed, walk-in if you called).", output: "3 channel-switched touches logged", minutes: 30, suggested: false },
      check: [
        { q: "What's the SOP's line when you don't know who to ask for?", a: "“Who handles the website and marketing over there?”" },
        { q: "How long can roofer deals take, according to Tayt?", a: "One to two years of follow-up. “The person that can just talk to them the most will get the worm.”" },
        { q: "How does cold follow-up differ from warm follow-up?", a: "Cold: short, light, costs nothing to ignore, never guilt-trip. Warm: assume good faith, be persistent, make it easy to act." }
      ]
    },
    {
      id: "gc-19",
      part: "calls",
      title: "Make the calls a habit you can measure",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Cold calling (Calum, 8/28): Building the skill", who: "Calum Tresham, 8/28/26" },
        { doc: "9 New Calls Study Guide", section: "Mindset and action", who: "Tayt Shelman 10/30/26 and 11/4/26; student Nicholas 10/30/26" }
      ],
      alsoIn: ["Mindset tab"],
      idea: "Calling is a skill, and skills come from structured reps. Calum (8/28) and Tayt (10/30, 11/4) gave a practical system.\n\n**Calum's skill builders:**\n\n- **Call about 100 throwaway local leads** just to collect your area's objections, and write a “that's actually why I called” rebuttal for each. Pick businesses you'd never pitch, so the stakes are zero.\n- **Split-test timing:** some calls right after the email, some after 24 hours, some after 3 days, some only after a reply.\n- **Batch by task** for momentum: a list day, a research day, a contact-info day, a dialing day.\n- **Micro wins and micro losses.** A day with zero bookings but five new objections and rebuttals is a micro win. Missing a planned task once is a micro loss that becomes a pattern. Keep a daily to-do checklist and an end-of-day report (Cam's company does this).\n\n**Tayt's habit system:**\n\n- **Weekly numeric commitments with accountability.** He assigns targets like 15 real conversations, 100 tracked cold calls, or one client in a week, logged in a Google Sheet.\n- **Habit = time + place + activity.** “7am tomorrow, at this seat, I make 8 calls.” Prep the list the night before, review the calls on Sunday, and block social apps (student Nicholas and Tayt).\n- **5-second rule** (11/4): celebrate a sale or sulk over a rejection for five seconds, then dial the next one.\n- **Watch your self-talk.** When someone said they hate cold calling, Tayt asked: “Do you hate making money?” (11/4)\n- **Do the opposite of your bottleneck.** If you're avoiding calls, make calls (10/30).\n\nThe point of all of it: get enough reps that the numbers mean something (Lesson 3), and stop letting mood decide whether you dial.",
      keyPoints: [
        "100 throwaway calls to collect objections, zero stakes (Calum).",
        "Batch by task: list, research, contact info, dialing.",
        "A day of new objections is a micro win; a skipped task is a micro loss.",
        "Weekly number in a sheet: e.g. 100 dials or 15 conversations (Tayt).",
        "Habit = time + place + activity; 5 seconds per win or loss."
      ],
      why: "Zach's schedule is split between PMT delivery, wholesaling and a job. Calls only happen if they have a fixed time, a fixed seat and a prepped list. A number in a sheet makes it visible when the week slips.",
      example: {
        title: "Zach's calling habit",
        body: "**Habit:** “Tuesday–Thursday, 7:45 AM, at my desk, phone on Do Not Disturb except the dialer, I make 10 calls.” **Night before:** 10 numbers with research doc links in a GHL smart list. **Weekly number:** 30 tracked dials + 6 real owner conversations. **End-of-day report:** dials, conversations, booked, new objections, one thing to change. **Sunday:** 20 minutes reviewing call notes and updating the objection textbook."
      },
      practice: [
        {
          prompt: "Write your calling habit and weekly number, plus the fields of your end-of-day report.",
          fields: ["Habit sentence (time + place + activity + number)", "What I prep the night before", "My weekly number (dials or conversations)", "End-of-day report fields", "Where the 100 throwaway practice calls will come from"],
          rubric: ["Time, place and count are all specific", "Weekly number is a count, not a feeling", "Report includes new objections learned (micro wins)", "Practice calls are to businesses you'd never pitch"]
        }
      ],
      today: { task: "Set this week's number (e.g. 100 dials or 15 real conversations in seven days) in the Weekly outreach number tracker, and prep tomorrow's call list tonight.", output: "Weekly number logged + tomorrow's list prepped", minutes: 20, suggested: true },
      check: [
        { q: "Why does Calum suggest 100 throwaway calls?", a: "To collect your area's objections at zero stakes and write a rebuttal for each." },
        { q: "What is Tayt's habit formula?", a: "Time + place + activity, e.g. “7am tomorrow, at this seat, I make 8 calls.”" },
        { q: "What counts as a micro win on a day with zero bookings?", a: "Collecting new objections and writing rebuttals for them." }
      ]
    },
    {
      id: "gc-20",
      part: "walkin",
      title: "The walk-in: “3 Things I Noticed”",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-16",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "Step 6: The walk-in (Day 3–4); Ground rules", who: "LC Cold Outreach SOP" },
        { doc: "ZDub_Guide_05 V2", section: "Find your method (walk-in leave-behind line; AI builds the vehicle); Your first client: Mindset", who: "Logan McKinney, 9/25/26 and 10/16/26" },
        { doc: "9 New Calls Study Guide", section: "Warm and low-cost channels", who: "Cam, 7/28/26" }
      ],
      idea: "The walk-in is the third touch, for prospects who didn't book from the email or call. It's also the touch that landed Logan's first client and Cam's preferred method (7/28). By now you've “already broken the ice” twice, so you're not a stranger walking in cold.\n\n**When (SOP):** in their slow window. Trades mid-morning; med spas and offices mid-afternoon. Business hours only.\n\n**What to bring (SOP):** a one-pager titled **“3 Things I Noticed About [Business]”**:\n\n- **Top:** THE GAP, with a screenshot.\n- **Middle:** two smaller findings.\n- **Bottom:** “Want the fixes? 20 minutes.” with your name, phone and booking link or QR code.\n- Plus a business card.\n\n**Owner out?** Leave the sheet at the desk, get the owner's name and when they're usually in. That night, send one short bump email. Then leave them alone for about 90 days.\n\n**At the counter:** be likable; don't walk in like they need you (Logan, 10/16). Logan's leave-behind line (9/25): “you don't have to make the decision today... I'll check back in a couple weeks if I haven't heard from you.”\n\n**Build it with AI, then audit it.** Logan (9/25): have AI build the vehicle for your method (the walk-in sheet), then check every word so you don't show up with “AI slop.” Every finding must be true and verifiable on the spot.\n\n**Ground rules (SOP):** honor do-not-contact immediately and permanently; never invent stats, clients or results. “Specific, honest, respectful, relentless.”",
      keyPoints: [
        "Walk in on Day 3–4, in their slow window.",
        "One-pager: the gap with a screenshot, two smaller findings, “Want the fixes? 20 minutes.”",
        "Owner out: leave it, get the name and their hours, bump email that night, then ~90 days.",
        "Be likable; no pressure: “you don't have to decide today.”",
        "AI drafts the sheet; you audit every word."
      ],
      why: "Most agencies never show up in person. A Sacramento trades owner who gets a printed sheet with a screenshot of his own website, from someone who lives 15 minutes away, remembers it. Local is ZDub's unfair advantage, and the walk-in is where it's most visible.",
      example: {
        title: "“3 Things I Noticed About [Carmichael fencing company]” (made-up business)",
        body: "**1. (Big, with a screenshot):** Your Facebook ad sends people to your homepage, which has no quote form. People who tap the ad on a phone have to scroll to the footer to find a phone number. **2.** Your last Instagram post was in March; your best project photos are only on Google. **3.** You have 140 Google reviews, but none are on your website. **Bottom:** “Want the fixes? 20 minutes, free. Zach Wallin · ZDub Media · [phone] · [QR to booking link]”"
      },
      practice: [
        {
          prompt: "Write the one-pager content for a real prospect you've emailed and called, plus your two lines at the counter.",
          fields: ["Business + owner name", "Finding 1: THE GAP (and which screenshot)", "Finding 2", "Finding 3", "Bottom CTA line + contact details", "What I'll say at the counter (2 lines)", "Bump email I'll send tonight if the owner's out (2–3 lines)"],
          rubric: ["Finding 1 is the same gap as your email and call", "All three findings are verifiable and phrased as money left on the table, not insults", "CTA is 20 minutes + booking link/QR", "Counter lines are friendly and no-pressure", "Bump email is short"]
        }
      ],
      today: { task: "Build the “3 Things I Noticed” one-pager in Canva for your best prospect (screenshot at top, QR code to your GHL calendar), print it, and walk in during their slow window this week.", output: "Printed one-pager + walk-in logged", minutes: 45, suggested: false },
      check: [
        { q: "What goes on the SOP's walk-in one-pager?", a: "“3 Things I Noticed About [Business]”: the gap with a screenshot at top, two smaller findings, and “Want the fixes? 20 minutes.” with your name, phone and booking link or QR." },
        { q: "What do you do if the owner is out?", a: "Leave the sheet at the desk, get the owner's name and when they're in, send one short bump email that night, then leave them alone for about 90 days." },
        { q: "When should you walk in?", a: "Day 3–4 of the loop, in their slow window: trades mid-morning, med spas and offices mid-afternoon." }
      ]
    },
    {
      id: "gc-21",
      part: "systems",
      title: "Outreach psychology: who beats what beats how, and chains beat messages",
      minutes: 12,
      tags: ["Mentor"],
      source: [
        { doc: "ZDub_Guide_05 V2", section: "3. Outreach psychology (LC teaching notes); The short version", who: "LC Outreach Psychology: Core Principles (course document)" }
      ],
      idea: "The LC Outreach Psychology notes start with a hierarchy: **who you're talking to > what you're offering > how you say it.** Most people spend their time polishing the last one.\n\n**Who.** There's no such thing as a good message, only a message that's effective for that recipient. Copy is downstream of audience knowledge; the leverage is in research. Know their conditions first: what they worry about at 11 PM, what they tried that failed, what they're skeptical of and who made them that way, their language for the problem, and success in their words.\n\n**What.** “Offer is maybe 10% of the work and 90% of the outcome.” **The billboard test:** if your offer were on a billboard with no copy, would anyone in your niche call?\n\n**How: chains, not messages.** Outreach engineers a sequence of small decisions: **sees → opens → reads → clicks → watches → responds → schedules → shows up.** Each step has one job. The goal of an email is one specific next click. And the chain multiplies: 50% at each of 8 steps is under 1% end to end. So you don't fix outreach by “writing better”; you find the broken link.\n\n**Levers by step:**\n\n- **Attention:** curiosity, reciprocity, personalization, simplicity.\n- **Click:** specificity, conviction, non-neediness, warmth.\n- **Trust:** authenticity, disarming honesty, process transparency, social proof, effort, liking.\n\nEffective outreach **removes reasons to say no** rather than pushing harder. **Visible effort creates obligation;** obvious mail-merge “personalization” is worse than none. **Remove friction:** ask only what you need, multiple choice over open text, and early on fewer qualifying questions and more calls.\n\n**Track conversion at each step.** “70% open, 2% click” is actionable. Volume doesn't fix a broken message; a message that works at 50 sends is worth scaling hard.\n\n> “Outreach is an act of understanding, not an act of writing.”",
      keyPoints: [
        "Who > what > how. The leverage is in research, not wordsmithing.",
        "Offer ≈ 10% of the work, 90% of the outcome. Run the billboard test.",
        "Chain: sees → opens → reads → clicks → watches → responds → schedules → shows up.",
        "50% at each of 8 steps < 1%. Find and fix the broken link.",
        "Visible effort creates obligation; fake personalization is worse than none."
      ],
      why: "When Zach's outreach stalls, the instinct will be “send more” or “rewrite the email.” This lesson gives him a diagnosis instead: which link broke, and which lever fixes it.",
      example: {
        title: "Diagnosing a stalled week (made-up numbers)",
        body: "20 emails to Sacramento contractors: 15 opened (75%), 1 reply (5% of opens), 0 booked. Opens are fine, so the subject line and deliverability work. Replies are the broken link: the body copy. Zach rereads them: three emails listed four problems each and none named a cost. Fix: one gap, one cost line, and a swipe-file link for visible effort. Next 20: 3 replies, 1 booked."
      },
      table: {
        head: ["Symptom", "Broken link", "Look at"],
        rows: [
          ["Low opens", "Sees → opens", "Subject line or deliverability"],
          ["Opens but no clicks or replies", "Reads → clicks/responds", "Body copy"],
          ["Clicks but no bookings", "Clicks → schedules", "Offer or friction"],
          ["Bookings but no-shows", "Schedules → shows up", "Intrigue and confirmation (see Funnels/Sales tabs)"]
        ]
      },
      practice: [
        {
          prompt: "Write the “conditions” for one niche you're prospecting, in the owner's words.",
          fields: ["Niche + town", "What they worry about at 11 PM", "What they've tried that failed", "What they're skeptical of, and who made them that way", "Their words for the problem", "Success, in their words", "Billboard test: my offer with no copy. Would they call?"],
          rubric: ["Written as the owner would say it, not marketing language", "Includes a specific past failure (e.g. a lead-gen company, boosted posts)", "Billboard answer is honest", "Uses things you heard or read (reviews, calls), not guesses"]
        },
        {
          prompt: "Diagnose your last batch of outreach with real numbers.",
          fields: ["Sent", "Opened", "Replied / responded", "Booked", "Showed", "Weakest link", "One lever I'll pull to fix it"],
          rubric: ["Uses actual counts", "Names one link, not everything", "The lever matches the link (e.g. specificity for clicks)"]
        }
      ],
      today: { task: "Add chain columns to your outreach sheet (sent, opened, replied, booked, showed, closed) and fill them for every touch so far. Circle the weakest link.", output: "Chain tracker with the broken link circled", minutes: 25, suggested: false },
      check: [
        { q: "What's the outreach hierarchy?", a: "Who you're talking to > what you're offering > how you say it." },
        { q: "If emails get opened but nobody clicks or replies, which link is broken?", a: "The body copy (reads → clicks/responds)." },
        { q: "What's the billboard test?", a: "If your offer were on a billboard with no copy, would anyone in your niche call?" }
      ]
    },
    {
      id: "gc-22",
      part: "systems",
      title: "The Loom outreach system (an example, not a script)",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "4. The Loom outreach system (LC Outreach Systems example); Caution / flag; Where the mentors disagree: Tone", who: "LC Outreach Systems example (another agency's system)" },
        { doc: "9 New Calls Study Guide", section: "Profile funnel", who: "Tayt Shelman, 10/30/26" },
        { doc: "ZDub_Guide_00 V2", section: "Honesty flags: deliberate flub in the Loom", who: "Guide 00 V2" }
      ],
      alsoIn: ["Offers tab (which guarantee fits your stage)", "Sales tab (proposal Looms)"],
      idea: "LC shared an example of another agency's outreach system built around Loom videos. It's much more casual than the LC local SOP, and Guide 05 presents it as **an example of a system, not a script to copy.**\n\n**What the system includes:** very casual subject lines; a personal note; a free resource made for that prospect (about adding qualified leads per week from Meta ads); a risk-free guarantee; a personalized Loom; self-deprecating humor.\n\n**The Loom script structure:**\n\n1. Acknowledge they get lots of junk outreach.\n2. You made something free for them.\n3. What it gets them.\n4. Niche + offer + guarantee.\n5. Scroll through the asset on screen.\n6. CTA to book.\n\n**Follow-up counts:** 6 cold follow-ups every 2–3 days, short and non-needy; 8 warm follow-ups every 2–3 days, with the calendar link.\n\n**The caution (Guide 05 and Guide 00):** the example's Loom includes a deliberate flub “for authenticity,” and its bro-style tone may not fit trades owners in their 40s–60s. Guide 00 lists the planned flub as an honesty flag, a judgment call. The **tone disagreement:** the LC SOP is specific, honest, respectful, plain 7th-grade language; the Outreach Systems example is very casual, with humor and memes. Guide 05's take: for Sacramento trades owners, the SOP tone is the safer default.\n\n**Where Looms fit ZDub:** the mentors use them in other spots too. Tayt (10/30) DMs new followers a custom Loom or voice note. A Loom of you scrolling through their actual website or Ad Library results is visible effort, which (from the psychology lesson) creates obligation. Keep it under 2 minutes, show their stuff on screen in the first 10 seconds, and make one ask.\n\nAbout the guarantee in the script: what guarantee you can safely offer at ZDub's stage is an Offers tab topic (Paul, 7/28: no money-back guarantee under $10k/month).",
      keyPoints: [
        "Loom script: junk-outreach acknowledgment → free thing → what it gets them → niche + offer + guarantee → scroll the asset → book.",
        "Follow-up: 6 cold every 2–3 days (short, non-needy); 8 warm every 2–3 days with the calendar link.",
        "It's another agency's example: borrow the system, not the bro tone.",
        "Skip the planned “authentic” flub; just be yourself.",
        "Show their own website or ads on screen in the first 10 seconds."
      ],
      why: "Zach is comfortable on camera and with Loom. A 90-second personalized video beats a fourth email for a busy owner who won't read, and it showcases exactly the kind of attention ZDub promises.",
      example: {
        title: "A 90-second Loom for an Elk Grove pressure-washing company (made-up business)",
        body: "[Their Google profile on screen] “Hey Tony, Zach here from ZDub Media, I'm local in Sacramento. You probably get a ton of junk marketing emails, so I made you something instead. [Scroll to their website] You've got 96 reviews and great before-and-afters, but your site has no booking form and your last post was in April. [Open a Canva mockup] Here's a quick static ad I made from your own photo, and here's where it would send people. That setup usually turns those before-and-afters into booked jobs. It's yours to keep either way. If you want to see how it'd run, grab 20 minutes on my calendar below. Thanks, Tony.”"
      },
      practice: [
        {
          prompt: "Write a 60–90 second Loom script for a real prospect using the six-part structure, in the SOP's respectful tone.",
          fields: ["Prospect + what's on screen first", "1. Acknowledge the junk outreach", "2. The free thing you made", "3. What it gets them", "4. Niche + offer (+ only a guarantee you can honor)", "5. What you scroll through on screen", "6. CTA to book", "Read-aloud time"],
          rubric: ["Their own stuff appears on screen in the first 10 seconds", "Under 90 seconds read aloud", "Tone fits a 40–60-year-old trades owner", "No planned flub, no fake claims", "One ask"]
        }
      ],
      today: { task: "Record one Loom for your best prospect (under 2 minutes, their website or ads on screen) and send it with a 3-line email: observation, “made you a quick video,” link.", output: "1 Loom sent + logged", minutes: 35, suggested: false },
      check: [
        { q: "What are the six parts of the example Loom script?", a: "Acknowledge the junk outreach; you made something free; what it gets them; niche + offer + guarantee; scroll the asset; CTA to book." },
        { q: "What follow-up counts does the example use?", a: "6 cold follow-ups every 2–3 days (short, non-needy) and 8 warm follow-ups every 2–3 days with the calendar link." },
        { q: "What two cautions does Guide 05 flag about the example?", a: "The deliberate flub “for authenticity,” and the bro-style tone that may not fit trades owners in their 40s–60s." }
      ]
    },
    {
      id: "gc-23",
      part: "systems",
      title: "Follower ads plus DMs: ads still need outreach",
      minutes: 10,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_05 V2", section: "5. Follower ads plus DMs (LC KPI Tracker; Logan, 10/13)", who: "LC KPI Tracker; Logan McKinney 10/2, 10/9, 10/13/26; Cam 9/17/26" },
        { doc: "ZDub_Guide_00 V2", section: "Where the mentors disagree: Your own agency ads", who: "Cam 9/17/26; Logan 10/2/26" },
        { doc: "9 New Calls Study Guide", section: "Profile funnel", who: "Tayt Shelman, 10/30/26 and 11/4/26" }
      ],
      alsoIn: ["Meta Ads tab (follower ad settings)", "Organic Social tab (profile funnel)"],
      idea: "Ads feel like inbound, but Logan's point stands: it's all outreach. Follower ads in particular only work if you do outreach to the followers.\n\n**The LC KPI Tracker** models agency acquisition as a chain: profile visits → followers → qualified followers → outreach responses → calls booked → offers made → deals closed. It tracks cost per follower, cost per response, cost per call, show rate, close rate, CAC, cash collected and ROAS.\n\n**Logan's real numbers (10/13):** follower ads give exposure and organic reach when you have a clear offer and good content, but they're less direct than a landing page and you have to reach out. Most followers “just want to watch”: out of about 50 followers you might get a handful, maybe 10 “if you're really lucky and good,” who are interested. He spent **$15–20/day** and landed a couple of clients, then moved to **$50/day to a landing page**, where he said booked-call leads close about half the time. On a small budget and income, the highest-leverage moves are solid organic, walking in and calling.\n\n**You go first.** Follower-ad leads still need you to reach out; a DM bot only engages after you do (Cam, 9/17). When a follower says they're interested, test sending your booking link directly versus your landing page (Logan, 10/2). And “your page is your outreach” (Logan, 10/9): if you're not running ads, send your landing page or Instagram like a business card.\n\n**Tayt's plan for his own agency (10/30):** 80% of spend on book-a-call ads, 20% on follower ads, then retarget bookers and followers with testimonials and value content. DM new followers with a custom Loom or voice note; reach bookers within five minutes. Message bigger accounts and comment on their posts; even a 10% reply rate adds up.\n\n**Where the mentors differ: ZDub's own ads.** Cam (9/17): $11/day follower ads. Logan (10/2, to Zach): ads straight to the landing page. Guide 00's snapshot frames it as a budget decision: Cam's follower ads after a 9-post grid, or Logan's ads straight to the page.",
      keyPoints: [
        "Chain: profile visits → followers → qualified followers → responses → calls → offers → deals.",
        "Most followers just watch: ~10 interested per 50 if you're lucky and good (Logan).",
        "You must DM first; the bot only engages after you do (Cam).",
        "Tayt: 80% book-a-call ads, 20% follower ads, DM followers with a Loom or voice note.",
        "ZDub's own ads: Cam's $11/day follower ads vs Logan's straight-to-landing-page."
      ],
      why: "Zach has a landing page (zdubmedia.netlify.app) and a small budget. Knowing that follower ads are a list-builder for DMs, not a lead machine, keeps him from spending $300 and waiting for the phone to ring.",
      example: {
        title: "A DM to a new follower who owns a business (made-up example)",
        body: "New follower: a Granite Bay landscaper. Zach checks their page (last post 6 weeks ago, great hardscape photos). DM, as a 30-second voice note: “Hey Luis, Zach here, thanks for the follow. I'm local in Sacramento. I just looked at your page, that paver patio from last month is a killer ad waiting to happen. I made a quick mockup of what it could look like, want me to send it over?” If he says yes: send the mockup, then test sending the booking link directly vs the landing page."
      },
      table: {
        head: ["KPI Tracker stage", "Metric to watch"],
        rows: [
          ["Profile visits → followers", "Cost per follower"],
          ["Qualified followers → outreach responses", "Cost per response"],
          ["Responses → calls booked", "Cost per call; show rate"],
          ["Offers made → deals closed", "Close rate; CAC; cash collected; ROAS"]
        ]
      },
      practice: [
        {
          prompt: "Write the DM (or voice-note script) you'll send a new follower who owns a local business, plus your follow-up if they say yes.",
          fields: ["Who they are (from their profile)", "One specific thing I noticed on their page", "My first DM / voice note (under 30 seconds)", "If they say yes: what I send", "Booking link or landing page? Which I'll test first and why"],
          rubric: ["References something specific from their page", "Asks permission before sending anything", "No pitch or price in the first message", "Says you're local"]
        },
        {
          prompt: "Pick ZDub's own ad path for the next 30 days and justify it.",
          fields: ["Daily budget I can sustain", "Path: Cam's follower ads or Logan's landing-page ads", "Why (budget, content ready, time for DMs)", "How many DMs a day I'll send to followers"],
          rubric: ["Budget is realistic", "Choice matches the reasoning (e.g. 9-post grid ready for follower ads)", "Includes the outreach that follower ads require"]
        }
      ],
      today: { task: "DM 5 recent ZDub followers who own businesses with a personalized voice note or short Loom that names one thing you noticed on their page.", output: "5 personalized DMs sent + logged", minutes: 30, suggested: false },
      check: [
        { q: "What were Logan's follower-ad numbers?", a: "About $15–20/day; most followers just watch; of ~50 followers maybe a handful, up to 10, are interested. He landed a couple of clients, then moved to $50/day to a landing page." },
        { q: "What's Tayt's ad split for his own agency?", a: "80% of spend on book-a-call ads, 20% on follower ads, then retarget bookers and followers with testimonials and value content." },
        { q: "How do Cam and Logan differ on ZDub's own ads?", a: "Cam (9/17): $11/day follower ads. Logan (10/2): ads straight to the landing page." }
      ]
    },
    {
      id: "gc-24",
      part: "zdub",
      title: "Selling the invisible: every touchpoint is a sample of the work",
      minutes: 11,
      tags: ["Book", "Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "Mastery Guide Ch 23 — Selling the Invisible: Marketing ZDub Itself", section: "Harry Beckwith's lessons for service businesses; Proof: turning the first clients into the next ones", who: "Harry Beckwith, Selling the Invisible (1997)" },
        { doc: "Mastery Workbook Ch 23", section: "Recall 23.1, 23.2, 23.9; Drill D23.1 Small things audit", who: "Workbook + Answer Key" },
        { doc: "9 New Calls Study Guide", section: "Profile funnel (post results, Facebook tricks)", who: "Tayt Shelman, 10/30/26" }
      ],
      idea: "A marketing agency is the purest example of what Harry Beckwith calls “selling the invisible.” The client can't inspect the results in advance, can't test-drive the partnership, and has often been burned before. So they judge what they can't see by what they can.\n\n**Beckwith's lessons for service businesses:**\n\n- **Fix the service first.** In services, the experience is the product, and the product is the marketing. No positioning survives a bad experience.\n- **Perception is reality.** Clients judge your strategy by how fast you reply, how clean your proposal is, how clearly you explain things, whether you show up on time.\n- **Clients fear a bad choice more than they crave the best one.** Make choosing you feel safe: clarity, proof, guarantees, small first steps.\n- **Clients buy relationships.** Competence is assumed; how you make them feel decides who wins and keeps the account.\n- **Narrow your position.** The specialist is perceived as more expert. Say one thing.\n- **Make the invisible visible:** case studies, before-and-after screenshots of campaigns, reports, a clear process diagram.\n- **Small things are big things:** the follow-up note, the organized folder, the meeting that starts on time.\n\n> Prospects can't judge your marketing skill before hiring you, so they judge everything else. Every touchpoint is a sample of the work. (Mastery Guide Ch 23)\n\n**Turn every client into proof (Ch 23):** baseline everything on day one so you can show change; collect testimonials at the peak moment, on video if possible, with specifics; write case studies in three parts (the problem, what ZDub did, the result in numbers); screenshot before and after; get permission to share. Tayt (10/30) adds: post results as they happen, and ask for the testimonial and a referral while the client is excited, not three months later. On Facebook, tag clients in an onboarding photo or video so it shows to their friends, who are often business owners.",
      keyPoints: [
        "Prospects judge invisible quality by visible details: speed, clarity, punctuality.",
        "The buyer's biggest fear is a bad choice. Make choosing ZDub feel safe.",
        "Make the invisible visible: case studies, before/after screenshots, process diagram.",
        "Small things are big things.",
        "Baseline on day one; ask for testimonials and referrals at the peak (Tayt)."
      ],
      why: "Before ZDub has a stack of case studies, the touchpoints ARE the case study: how fast Zach replies to a DM, how clean the research one-pager looks, whether the booking link works. PMT is the first chance to make results visible.",
      example: {
        title: "Small things a Sacramento roofer would notice",
        before: "DM reply 2 days later. Email from a Gmail address. Proposal is a long Google Doc with typos. Booking link goes to a generic calendar. No process explained.",
        after: "DM reply within the hour. Email from the ZDub domain with a local phone in the signature. One-page proposal with their logo and numbers. Booking link opens a 20-minute “Growth diagnosis” slot. A simple 4-step process graphic on the landing page."
      },
      practice: [
        {
          prompt: "Drill D23.1, Small things audit: list every touchpoint a prospect has with ZDub and score each 1–5 on what it signals about the quality of the work. Then name the three lowest and the fix for each.",
          fields: ["Website / landing page (score + note)", "Instagram bio and grid (score + note)", "DM reply speed (score + note)", "Email signature (score + note)", "Proposal (score + note)", "First call (score + note)", "Onboarding folder (score + note)", "First report (score + note)", "Three lowest + the fix for each"],
          rubric: ["Scores are honest", "Each low score has a concrete fix", "At least one fix can be done today", "Fixes are things a prospect would actually see"]
        }
      ],
      today: { task: "Fix the lowest-scoring touchpoint from your audit today (e.g. email signature, Instagram bio, booking-link page), and write PMT's day-one baseline numbers in a case-study doc if you haven't yet.", output: "One fixed touchpoint + PMT baseline doc", minutes: 30, suggested: false },
      check: [
        { q: "According to Beckwith, how do prospects judge the quality of a service they can't see before buying?", a: "By what they can see: speed, clarity, details, punctuality. Every touchpoint is a sample of the work. (23.1)" },
        { q: "Which statement reflects Beckwith's view of service buyers?", a: "They fear a bad choice more than they crave the best one. Make choosing you feel safe. (23.2)" },
        { q: "List five of Beckwith's lessons for service businesses.", a: "Any five: fix the service first; perception is reality; clients fear a bad choice more than they crave the best one; clients buy relationships; narrow your position; make the invisible visible; small things are big things. (23.9)" }
      ]
    },
    {
      id: "gc-25",
      part: "zdub",
      title: "Lead magnets that reveal the problem, and the gravity well",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "Mastery Guide Ch 23", section: "Lead magnets that reveal the problem; Build ZDub's gravity well", who: "Alex Hormozi, $100M Leads; Roy H. Williams, Magical Worlds (gravity well)" },
        { doc: "Mastery Workbook Ch 23", section: "Recall 23.5, 23.7, 23.10; Drill D23.4 Run a speed-to-lead test + Answer Key", who: "Workbook + Answer Key" }
      ],
      alsoIn: ["Funnels tab (speed to lead)"],
      idea: "The best agency lead magnets **show the prospect a problem they didn't know they had** (Hormozi's first lead-magnet type). That's exactly what THE GAP does in an email, scaled into something you can offer anyone. Chapter 23 names four:\n\n1. **The speed-to-lead test:** submit an inquiry to their website or DMs, time how long the reply takes, then show them the result and what it's costing.\n2. **The local presence scorecard:** Google profile, reviews, website, AI-search visibility, scored against their top three competitors.\n3. **The ad teardown:** a short screen-recorded review of their current ads and social content, using the hyperdopamine framework and Schwartz's awareness stages.\n4. **The free marketing audit:** a short written diagnosis using the APE and funnel math.\n\n**Running the speed-to-lead test honestly (Workbook D23.4):** use a real, simple inquiry. Don't waste their time with fake details; ask something you genuinely want answered, or explain afterward. The summary is helpful, not shaming: “I asked about pricing on your site Tuesday at 10:12 a.m. and heard back Thursday. Most people who ask online have also asked two or three competitors, so the first to reply usually wins. Here's a simple fix…” The Workbook calls this the most persuasive conversation-starter ZDub has. (Calum's version from the calls: their form says “5 minutes” and you've waited 2 hours.)\n\n**The gravity well** (Roy Williams' idea, applied to ZDub): a series of gradually deeper, voluntary commitments.\n\n1. Content on your own page (free, no commitment).\n2. A free scorecard, teardown, or speed-to-lead test (small commitment).\n3. A 30-minute diagnosis call.\n4. The 90-day sprint.\n5. The ongoing growth partnership.\n\nAt no point is anyone pushed. Each step earns the next.",
      keyPoints: [
        "Best lead magnet: reveals a problem they didn't know they had.",
        "Four for ZDub: speed-to-lead test, local presence scorecard, ad teardown, free audit.",
        "Speed-to-lead test: a real inquiry, timed, summarized helpfully, not shaming.",
        "Gravity well: content → free test → 30-min diagnosis → 90-day sprint → partnership.",
        "Each step earns the next; nobody is pushed."
      ],
      why: "Sacramento trades owners almost all believe they respond fast. A timestamped test showing a 2-day reply is undeniable and specific, which is exactly the “specificity is your proof” the mentors teach.",
      example: {
        title: "A speed-to-lead summary for a Sacramento plumber (made-up business)",
        body: "“Hi Rick, I'm Zach, a local marketer. I'll be upfront: I'm testing how fast local plumbers reply online. I filled out your website form Monday at 6:40 p.m. asking about a water heater quote, and got a call back Wednesday afternoon. That's actually better than two of the five I tested, but most people who fill out a form at night have also filled out two or three others, and the first to reply usually gets the job. An instant text reply plus a callback within 5 minutes during business hours usually fixes it. Happy to show you how in 20 minutes if useful.”"
      },
      practice: [
        {
          prompt: "Drill D23.4: run the speed-to-lead test on five local businesses in one category. Use a genuine, simple inquiry. Record reply time and method, then write the summary paragraph you'd send one owner.",
          fields: ["Category + town", "Business 1: inquiry sent (time) → reply (time, how)", "Business 2", "Business 3", "Business 4", "Business 5", "My one-paragraph summary for the slowest one"],
          rubric: ["Inquiries were genuine (or you'll explain afterward)", "Times are exact", "Summary is helpful and respectful, not shaming", "It names the cost (first to reply usually wins) and a simple fix", "Ends with a soft 20-minute offer"]
        }
      ],
      today: { task: "Start D23.4: send 5 genuine inquiries to one category (e.g. Sacramento HVAC companies) via website form or DM and note the exact time sent. Check back over the next 48 hours and log reply times.", output: "5 timestamped inquiries in a test log", minutes: 25, suggested: false },
      check: [
        { q: "What is the best kind of agency lead magnet, according to the guide?", a: "One that shows the prospect a problem they didn't know they had. (23.5)" },
        { q: "In ZDub's gravity well, what comes right after a free scorecard, teardown, or speed-to-lead test?", a: "A 30-minute diagnosis call. (23.7)" },
        { q: "Name the four lead magnets the guide suggests for ZDub.", a: "The speed-to-lead test; the local presence scorecard; the ad teardown; the free marketing audit (APE and funnel math). (23.10)" }
      ]
    },
    {
      id: "gc-26",
      part: "zdub",
      title: "ZDub's Core Four, referral partners and the Rule of 100",
      minutes: 11,
      tags: ["Book", "Mentor"],
      date: "2026-08-26",
      source: [
        { doc: "Mastery Guide Ch 23", section: "Getting clients: the Core Four for ZDub; Add lead getters; Rule of 100", who: "Alex Hormozi, $100M Leads" },
        { doc: "Mastery Workbook Ch 23", section: "Recall 23.6; Client Lab L23 (parts 4, 5, 7) + Answer Key", who: "Workbook + Answer Key" },
        { doc: "ZDub_Guide_05 V2", section: "Clayton running the loop live: Volume", who: "Clayton Bell, 8/26/26" },
        { doc: "9 New Calls Study Guide", section: "One caution from the transcripts (NEPQ)", who: "Calum Tresham, 8/21/26" }
      ],
      alsoIn: ["Funnels tab (Ch 19 Core Four and lead getters)"],
      idea: "Chapter 23 applies Hormozi's **Core Four** from $100M Leads to ZDub itself:\n\n1. **Warm outreach:** your network: past colleagues, friends who own businesses, local trades contacts. Use **ACA** (acknowledge, compliment, ask) and offer genuine help, not a pitch.\n2. **Cold outreach:** calls and DMs to local businesses, leading with a specific observation and a free, useful lead magnet. The guide says question-led selling like NEPQ fits here. Note Calum's view (8/21) that the empathy-heavy NEPQ style doesn't land for most sellers: sell in your own style, keep the structure.\n3. **Content:** teach local owners what works, show behind-the-scenes client work (with permission), break down ads. Hormozi's principle: **give away the secrets, sell the implementation.** Busy owners who learn what to do will still pay someone to do it.\n4. **Paid ads:** once budget allows, retarget content viewers and run lead or follower ads in the service area.\n\n**Add lead getters: referral partners** who serve the same clients without competing: web developers, accountants, bookkeepers, business coaches, chambers of commerce, networking groups, equipment dealers, industry associations. They already talk to local owners every week.\n\n**The Rule of 100:** 100 outreach actions a day, or 100 minutes of content, for 100 days, before judging. The Workbook's model plan: for example 30 warm messages, 40 cold messages and 30 minutes of content a day, with weekly totals, and a tracker that shows where ZDub's own funnel leaks: **messages → conversations → calls → proposals → clients.**\n\n**How this fits the mentors' volume.** Clayton's (8/26) floor is 3–5 well-researched businesses a day, each touched by email, call and walk-in. Those are heavy actions (20–30 minutes each). Hormozi's 100 counts every light action too (a warm text, a DM, a comment). Mentor material wins on method: researched local outreach is the core. Use the Rule of 100 as the total-activity target around it, not a reason to blast unresearched messages.",
      keyPoints: [
        "Core Four: warm outreach, cold outreach, content, paid ads.",
        "Warm outreach with ACA: acknowledge, compliment, ask.",
        "Give away the secrets, sell the implementation.",
        "Referral partners: accountants, web devs, bookkeepers, coaches, chambers, dealers.",
        "Rule of 100 for 100 days, around Clayton's 3–5 researched businesses a day."
      ],
      why: "ZDub needs more than one well. Referral partners in particular multiply Zach's reach without more cold calls: one Roseville bookkeeper with 40 trades clients is worth more than 40 cold emails.",
      example: {
        title: "A daily Core Four plan for ZDub (adapt the numbers)",
        body: "**Cold (core):** 3–5 researched trades businesses through the LC loop (email, call, walk-in) = about 15 touches. **Warm:** 20 ACA messages (“Saw your crew finished the Folsom job, looks great. Who's handling your marketing these days?”). **Content:** 30 minutes: one teardown reel of a local ad. **Referral partners:** 2 messages a week to accountants, bookkeepers or web developers who serve trades. **Paid:** later, when budget allows. Tracker by week: messages → conversations → calls → proposals → clients."
      },
      practice: [
        {
          prompt: "Client Lab L23, parts 4, 5 and 7: set daily Core Four targets, list ten referral partners with the value you'll offer each, and set up the weekly tracker.",
          fields: ["Daily target: warm outreach", "Daily target: cold outreach (researched)", "Daily target: content (minutes)", "Paid ads (now or later? budget?)", "Referral partners 1–5 (name/type + value I'll offer)", "Referral partners 6–10", "Tracker columns (by week)"],
          rubric: ["Cold target honors Clayton's 3–5 researched businesses minimum", "Total daily actions add up toward 100 (or you state your ramp)", "Each referral partner serves the same clients without competing", "Each has a specific value offer (e.g. free teardown for their clients)", "Tracker follows messages → conversations → calls → proposals → clients"]
        }
      ],
      today: { task: "List 10 Sacramento-area referral partners (accountants, bookkeepers, web developers, business coaches, equipment dealers, chambers) and send ACA messages to 2 of them offering a free ad teardown for one of their clients.", output: "Referral partner list + 2 messages sent", minutes: 35, suggested: false },
      check: [
        { q: "Which is a good lead getter (referral partner) for ZDub?", a: "An accountant or web developer serving the same clients. Partners who already serve local owners can refer them steadily. (23.6)" },
        { q: "What is the Rule of 100?", a: "100 outreach actions a day, or 100 minutes of content, for 100 days, before judging." },
        { q: "What does “give away the secrets, sell the implementation” mean for ZDub's content?", a: "Teach owners what works openly; busy owners who learn what to do will still pay someone to do it." }
      ]
    }
  ]
});
