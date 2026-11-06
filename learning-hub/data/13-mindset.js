HUB.tab({
  id: "mindset",
  title: "Mindset & Execution",
  icon: "flame",
  tagline: "You already know what to do. Do more of it, on a schedule, with a number on it.",
  intro: `The mentors kept saying the same thing in different words: you already know what to do, and not doing it is the only real risk. This tab is that message turned into habits. Each lesson is one idea from Tayt, Calum, Logan or Clayton plus a task with a number on it: a weekly target, a blocked call time, a logged result. Work through it and you'll have a weekly scoreboard, a fixed call block and a story you can sell before you have case studies.`,
  parts: [
    { id: "action", title: "Part 1 · Bias to action" },
    { id: "systems", title: "Part 2 · Make the work automatic" },
    { id: "inner", title: "Part 3 · The inner game" },
    { id: "long", title: "Part 4 · Credibility and staying power" }
  ],
  trackers: [
    { id: "weekly", title: "Weekly scoreboard", goal: "Set a number every Sunday; hit it 4 weeks in a row", fields: ["Week of", "Target (dials / real conversations / booked calls / clients)", "Actual", "Hit? Y/N", "Who I reported it to"] },
    { id: "block", title: "Call block log", goal: "5 call blocks a week at the same time and place", fields: ["Date, time, place", "Calls planned", "Calls made", "Real conversations", "Notes for Sunday review"] }
  ],
  lessons: [
    {
      id: "mind-01",
      part: "action",
      title: "Sell first, learn along the way",
      minutes: 7,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Sell first, learn along the way", who: "Tayt Shelman, 10/30/26" },
        { doc: "9 New Calls Study Guide", section: "Mindset and action (intro)", who: "Mentors across the 9 calls" }
      ],
      idea: `The study guide sums up the mentors' mindset message in one line: **you already know what to do, and inaction is the only real risk.**

Tayt (10/30) has **closed deals without being fully sure of the deliverables,** trusting he'd figure it out with the community behind him. That sounds reckless until you see what he's actually betting on: not that he knows everything, but that he can learn fast once someone is paying him and he has mentors to ask.

The trap he's pointing at is the opposite: waiting until you feel ready. You read one more playbook, rebuild the landing page, learn one more Ads Manager setting. None of it gets you a client, and none of it teaches you what a real client needs.

**What "sell first" does NOT mean:**
- It doesn't mean promising results you can't control. The cross-call rule still holds: promise only what you control (leads, not closed customers).
- It doesn't mean faking experience. Honesty is the strategy when you're new (Logan, Calum).
- It doesn't mean selling something nobody in your corner can deliver. Tayt's confidence came from "the community behind him." You have Noah, Tayt, Calum, Cam and the LC calls.

**What it does mean:** if a Sacramento roofer wants Meta ads plus a lead follow-up text and you've never built that exact GHL workflow, you can still sell it. You have a week before launch to learn it, a mentor call to ask on, and a client who's now waiting on you, which is the best motivation there is.`,
      keyPoints: [
        "Inaction is the only real risk.",
        "Tayt has closed deals before knowing every deliverable.",
        "His safety net: the community and mentors behind him.",
        "Still promise only what you control, and never fake experience.",
        "A paying client is the fastest teacher."
      ],
      why: `ZDub has one client. The next five come from selling before you feel fully ready, not from more prep.`,
      example: {
        title: "Selling the thing you haven't built yet",
        before: `"I'll start pitching HVAC companies once I've built the perfect HVAC funnel template and done a few practice campaigns."`,
        after: `"I'll pitch 3 HVAC companies this week. If one says yes, I have 7 days before launch to build the funnel, and I'll ask Cam's group on the next call about anything I'm unsure of."`
      },
      practice: [
        {
          prompt: "List what you've been 'getting ready' to sell and commit to a number and a date.",
          fields: ["Thing I've been waiting to feel ready for", "What I'd need to learn if they said yes", "Who I'd ask (mentor/community)", "Number of prospects I'll pitch it to this week", "Pitch-by date"],
          rubric: ["Names one specific service or offer", "Number is at least 3", "Date is within 7 days", "Learning plan names a real person or resource"]
        }
      ],
      today: { task: "Pitch your current offer to 3 real prospects today (call, DM or walk-in) before doing any more prep work, and log all 3 results.", output: "3 pitches logged in the weekly scoreboard", minutes: 45, suggested: false },
      check: [
        { q: "What did Tayt do that the 'sell first' lesson is based on?", a: "He closed deals without being fully sure of the deliverables, trusting he'd figure it out with the community behind him (10/30)." },
        { q: "What's the one-line mindset message from the 9 New Calls?", a: "You already know what to do, and inaction is the only real risk." }
      ]
    },
    {
      id: "mind-02",
      part: "action",
      title: "Find someone, sell them something, deliver it",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls Study Guide", section: "Top takeaways #10; Mindset and action: The simplest plan", who: "Tayt Shelman, 10/30/26" },
        { doc: "ZDub_Guide_00 V2", section: "Principles that show up across calls #1 (Client first, build second) and #13 (Do it by hand, then systemize)", who: "Logan 10/9 and 10/16; Clayton 8/26/26" },
        { doc: "ZDub_Guide_05 V2", section: "1. Your first client: Mindset", who: "Logan McKinney, 10/9 and 10/16/26" }
      ],
      alsoIn: ["Getting Clients tab (first client)"],
      idea: `Tayt's simplest plan for the business (10/30): **find someone, sell them something, deliver it.** You learn fastest once someone has paid you.

His diagnosis of overwhelm: **it usually means you're consuming instead of doing.** Five playbooks, three courses and a 40-book reading list will always feel like too much, because consuming has no finish line. A client has a finish line every week.

The Master Index lists the same idea as cross-call principle #1, **client first, build second:**
- "A funnel with nobody in it teaches you absolutely nothing" (Logan, 10/9).
- Logan on his own start: Paul told him to get on calls, and Logan said "I was in love with building a business and not actually running one" (10/9).
- "Spend a month building instead of a month talking to owners" is the mistake (Logan, 10/9).
- Don't solve problems you don't have yet (Clayton, 8/26).
- Rule one of business is money in (Logan, 10/16).

And principle #13: **do it by hand, then systemize** (Logan, 10/9). Run the first follow-up texts yourself, call the first leads yourself, build the report by hand. Automate what you've done enough times to know is right.

Three verbs, three checks for every work block:
1. **Find:** did this block put me in front of a new business owner?
2. **Sell:** did it move someone toward a yes or no?
3. **Deliver:** did it get a paying client (PMT) a result?

If a task does none of the three, it's probably consuming.`,
      keyPoints: [
        "Find someone, sell them something, deliver it.",
        "Overwhelm usually = consuming instead of doing.",
        "Client first, build second: an empty funnel teaches nothing.",
        "Do it by hand, then systemize.",
        "Every work block should find, sell or deliver."
      ],
      why: `It's a filter for every hour of your day. Most of what feels productive in a new agency doesn't pass it.`,
      example: {
        title: "Sorting a Tuesday",
        body: `Find: 2 hours calling Sacramento roofers with fewer than 150 Google reviews. Sell: 1 discovery call. Deliver: 1 hour on PMT's new ad creative. Consuming: 90 minutes rewatching an ads course. The first three stay. The fourth moves to Sunday, capped at 30 minutes, only if it answers a question a client gave you.`
      },
      practice: [
        {
          prompt: "Audit yesterday (or today so far). Put every block into Find / Sell / Deliver / Consuming, with hours.",
          fields: ["Find (hours + what)", "Sell (hours + what)", "Deliver (hours + what)", "Consuming (hours + what)", "Tomorrow's split I'm committing to (hours per bucket)"],
          rubric: ["Hours add up to the real day", "Consuming is honestly counted", "Tomorrow's plan has more Find + Sell hours than Consuming", "At least one block is booked on the calendar"]
        }
      ],
      today: { task: "Block 2 hours tomorrow for 'Find' only (e.g. 30 prospect calls or walk-ins) and cap consuming at 30 minutes for the day. Log both actual numbers tomorrow night.", output: "2-hour block on the calendar + logged numbers", minutes: 15, suggested: false },
      check: [
        { q: "What is Tayt's simplest plan?", a: "Find someone, sell them something, deliver it." },
        { q: "What does Tayt say overwhelm usually means?", a: "You're consuming instead of doing." },
        { q: "What does Logan say a funnel with nobody in it teaches you?", a: "'Absolutely nothing.'" }
      ]
    },
    {
      id: "mind-03",
      part: "action",
      title: "Do the opposite of your bottleneck",
      minutes: 6,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Do the opposite of your bottleneck", who: "Tayt Shelman, 10/30/26" }
      ],
      idea: `Tayt (10/30): **if you're avoiding calls, make calls.** Whatever you're avoiding is usually the exact thing holding the business back. The avoidance itself is the signal.

His reality check: **the worst case is a no or a bit of embarrassment.** Nobody's hurt. A roofer says "not interested" and hangs up, and you're exactly where you were 30 seconds ago, minus one name on the list.

How to find your bottleneck: look at the task you keep rescheduling. For most new agency owners it's one of these:
- Cold calling or walk-ins.
- Asking for the sale (saying the price and going silent).
- Following up with someone who went quiet.
- Asking PMT for a testimonial or referral.
- Sending a recorded call to a mentor for review.

Then do the opposite, **first,** before anything comfortable. If cold calling is the bottleneck, it goes at 8am, not "after I finish the creative."

Why it works: the thing you avoid gets bigger in your head the longer you avoid it. Ten calls make it small again. The fear doesn't need to go away; it just has to stop deciding your schedule.

This connects to the next lessons: a **number** (weekly target) and a **time and place** (habit) are what make doing the opposite automatic instead of heroic.`,
      keyPoints: [
        "Avoiding calls? Make calls.",
        "The task you keep rescheduling is your bottleneck.",
        "Worst case: a no or a bit of embarrassment.",
        "Do it first, before anything comfortable.",
        "Avoidance makes it bigger; reps make it small."
      ],
      why: `For a solo agency, the avoided task is almost always the one that brings in revenue.`,
      example: {
        title: "Naming it honestly",
        before: `"I'm going to finish the roofer ad templates, then start calling roofers next week."`,
        after: `"I've rescheduled roofer calls three times. That's the bottleneck. Tomorrow 8:00–9:00, 15 calls, before I open Canva."`
      },
      practice: [
        {
          prompt: "Name your bottleneck and commit to the opposite with a number.",
          fields: ["The task I keep rescheduling", "How many times I've pushed it this month", "The worst realistic outcome", "The opposite action + number (e.g. 15 calls)", "Day and time I'll do it first"],
          rubric: ["Task is specific", "Worst case is realistic (usually a no)", "Number is concrete", "Scheduled before any comfortable task"]
        }
      ],
      today: { task: "Do 10 reps of your bottleneck task before anything else today (10 calls, 10 follow-ups, or 10 'ask' messages) and log the count.", output: "10 reps logged", minutes: 30, suggested: false },
      check: [
        { q: "What's Tayt's rule if you're avoiding calls?", a: "Make calls. Do the opposite of your bottleneck." },
        { q: "What does Tayt say is the worst case?", a: "A no or a bit of embarrassment." }
      ]
    },
    {
      id: "mind-04",
      part: "action",
      title: "Inputs beat talent",
      minutes: 7,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Inputs beat talent", who: "Tayt Shelman, 10/30/26" },
        { doc: "ZDub_Guide_05 V2", section: "The short version (cold outreach and volume)", who: "Clayton Bell, 8/26/26" }
      ],
      idea: `Tayt's Tiger Woods story (10/30): Tiger **outworked more talented rivals.** The lesson isn't "be Tiger." It's that the amount you put in beats the gifts you started with, over time, almost every time.

Tayt's practical question: **ask what the person ahead of you is doing that you're not.** Not what they're like, what they're *doing*. Inputs you can count.

Clayton said the same thing about outreach (8/26): **"Those who do cold outreach are going to beat you."** If you have no clients and lots of time, spend most of it on outreach. His volume: **3–5 well-researched businesses a day,** followed up across email, call and in person, which is about **84 a month.**

Inputs are things you control: dials, real conversations, researched prospects, posts, follow-ups, recorded calls reviewed. Outputs are things you don't fully control: booked calls, clients, revenue. You can't decide to close 2 clients this week. You can decide to make 100 tracked calls.

Look at the peers in the program: student Nicholas signed **two roofers in two weeks** with a simple opener and a lot of dials (10/30). Student David booked **4 meetups from 11 calls** (7/28). Neither was described as a natural; both put in the inputs.

When you're behind, don't look for a better script first. Look at your input numbers. Usually they're the problem.`,
      keyPoints: [
        "Inputs beat talent over time (Tayt's Tiger Woods story).",
        "Ask: what is the person ahead of me DOING that I'm not?",
        "Inputs = dials, conversations, prospects researched, follow-ups.",
        "Clayton: 3–5 researched businesses a day ≈ 84 a month.",
        "Behind? Check input numbers before changing the script."
      ],
      why: `You can't control which roofer says yes this week. You can control how many you talk to, and that number decides the outcome over a month.`,
      example: {
        title: "Copying inputs, not personality",
        body: `Person ahead: Nicholas, two roofers in two weeks. What he did: built a list of Sacramento-style roofers with under 150 Google reviews, cross-checked BBB and license lists for owner cells, opened with "Do you guys do roof replacements?" Your copy: same list build, 20 calls a day for 10 days = 200 dials. Measure, then judge the script.`
      },
      practice: [
        {
          prompt: "Pick someone ahead of you (mentor or peer). List their inputs vs yours, as weekly numbers.",
          fields: ["Who", "Their weekly inputs (dials / conversations / posts / follow-ups)", "My weekly inputs right now", "The ONE input gap I'll close", "My new weekly number for it"],
          rubric: ["Inputs are countable", "Your numbers are honest", "One gap only", "New number is a real stretch (not +1)"]
        }
      ],
      today: { task: "Research 5 Sacramento-area businesses today (Clayton's 3–5 a day) and write one specific observable problem for each in your prospect list.", output: "5 researched prospects with a named problem", minutes: 45, suggested: false },
      check: [
        { q: "What question does Tayt say to ask about the person ahead of you?", a: "What are they doing that you're not?" },
        { q: "What daily outreach volume did Clayton give, and what's the monthly total?", a: "3–5 well-researched businesses a day, about 84 a month." }
      ]
    },
    {
      id: "mind-05",
      part: "systems",
      title: "Weekly numeric targets with accountability",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Weekly numeric commitments with accountability", who: "Tayt Shelman, 10/30/26" },
        { doc: "9 New Calls Study Guide", section: "Action plan for Zach: Outreach (this week) — Claude's input, not a mentor's", who: "Claude (suggested)" }
      ],
      idea: `Tayt (10/30) assigns students **weekly numeric commitments**, logged in a **Google Sheet,** with accountability. His examples:
- **15 real conversations** in a week.
- **100 tracked cold calls** in a week.
- **One client** in a week.

Three things make this work:

**1. A number, not an intention.** "Do more outreach" can't be failed, so it can't be hit. "100 tracked dials by Sunday" can.

**2. Tracked, in a sheet.** Every dial gets a row or a tally. You find out by Wednesday whether you're on pace, not on Sunday night.

**3. Someone sees it.** Tayt's students report to him. You can report to a mentor, a peer in the program (Nick and Janderiel are both working Sacramento), or the LC group. Saying the number out loud to someone else is what turns it from a wish into a commitment.

**Pick the right kind of number.** Start with inputs you fully control (dials, conversations). "One client" is a stretch goal that works best once your input numbers are steady.

**Real conversations vs dials.** A dial is picking up the phone. A real conversation is the owner engaging for at least a minute. Track both; the ratio tells you if the list or the opener is the problem.

Set the number every Sunday. Review it the next Sunday. Never change it mid-week to make yourself feel better.`,
      keyPoints: [
        "Weekly number, not an intention.",
        "Tayt's examples: 15 real conversations, 100 tracked dials, 1 client.",
        "Track it in a Google Sheet daily.",
        "Report it to someone.",
        "Start with inputs you control; set Sunday, review next Sunday."
      ],
      why: `A number someone else is watching is the most reliable way to get a solo founder to do the uncomfortable work every week.`,
      table: {
        head: ["Type", "Example", "You control it?", "Use when"],
        rows: [
          ["Activity", "100 tracked dials", "Fully", "Weeks 1–4, building the habit"],
          ["Conversation", "15 real conversations", "Mostly", "Once dials are steady"],
          ["Outcome", "1 client", "Partly", "Stretch goal once inputs are consistent"]
        ]
      },
      example: {
        title: "Zach's week, written as a commitment",
        after: `"Week of Nov 9: 100 tracked dials to Sacramento roofers and remodelers, 15 real conversations, 3 booked discovery calls. Logged daily in the ZDub Outreach sheet. Sending the totals to Tayt's group Sunday night."`
      },
      practice: [
        {
          prompt: "Set this week's numbers and your accountability.",
          fields: ["Activity target (e.g. dials)", "Conversation target", "Stretch outcome target", "Where I'll track it (sheet name/link)", "Who I'll report to, and when"],
          rubric: ["Every target is a number", "Activity target is fully in your control", "Tracking location is real", "Accountability person is named with a day"]
        }
      ],
      today: { task: "Create a Google Sheet tab 'Weekly scoreboard' with columns Date / Dials / Real conversations / Booked, set this week's target (e.g. 100 dials, 15 conversations), and text the number to one person.", output: "Sheet + target sent to 1 person", minutes: 20, suggested: true },
      check: [
        { q: "Name Tayt's three example weekly targets.", a: "15 real conversations, 100 tracked cold calls, or one client in a week." },
        { q: "Where does Tayt have students log them?", a: "In a Google Sheet, with accountability." }
      ]
    },
    {
      id: "mind-06",
      part: "systems",
      title: "Habit = time + place + activity",
      minutes: 7,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Habit = time + place + activity", who: "Student Nicholas and Tayt Shelman, 10/30/26" }
      ],
      idea: `On the 10/30 call, student Nicholas and Tayt broke a habit into three parts: **time + place + activity.**

> "7am tomorrow, at this seat, I make 8 calls."

Each part removes a decision:
- **Time:** you don't decide *when* to call. 7am is when you call.
- **Place:** you don't decide *where*. That seat is the calling seat.
- **Activity:** you don't decide *what* or *how much*. 8 calls.

Every decision you remove is one less chance to talk yourself out of it.

**The support routine they described:**
1. **Prep the list the night before.** At 7am you dial, you don't research. Names, numbers and one note per business ready.
2. **Review the calls on Sunday.** What worked, what didn't, what to change next week.
3. **Block social apps** during the block. One scroll turns 8 calls into 2.

A note on time zones: Tayt (11/4) said after work you can call businesses in later time zones. For a Sacramento founder, that runs the other way too: East Coast owners are reachable early, local owners once they're in the office. Pick a time when the owners you're calling are actually reachable.

Start small enough that you never miss. 8 calls at 7am, five days a week, is 40 calls a week you didn't have to think about. Once it's automatic, raise the number.`,
      keyPoints: [
        "Habit = time + place + activity: '7am, this seat, 8 calls.'",
        "Each part removes a decision.",
        "Prep the list the night before.",
        "Review calls on Sunday.",
        "Block social apps during the block."
      ],
      why: `Motivation comes and goes. A fixed block at a fixed seat runs on days you don't feel like it.`,
      example: {
        title: "Zach's calling habit",
        before: `"I'll make calls tomorrow when I get a chance."`,
        after: `"Mon–Fri, 8:30am, at the desk in the office (phone on Focus mode, Instagram blocked), 10 calls from the list I prepped the night before. Sunday 6pm: 20-minute review of the week's calls."`
      },
      practice: [
        {
          prompt: "Write your habit sentence and its support routine.",
          fields: ["Time", "Place (exact seat)", "Activity + number", "Night-before prep (what, how long)", "Sunday review time", "Apps I'll block during the block"],
          rubric: ["Time is a clock time", "Place is a specific spot", "Activity has a number", "Prep and review are scheduled", "Names the specific apps"]
        }
      ],
      today: { task: "Put a recurring 5-day-a-week call block on your calendar (same time, same place, e.g. 8:30am, 10 calls), prep tomorrow's 10 names tonight, and log tomorrow's count in the Call block log.", output: "Recurring block + 10 prepped names + first log entry", minutes: 25, suggested: false },
      check: [
        { q: "What three parts make up a habit, per the 10/30 call?", a: "Time + place + activity." },
        { q: "What three support steps go with it?", a: "Prep the list the night before, review the calls on Sunday, block social apps." }
      ]
    },
    {
      id: "mind-07",
      part: "systems",
      title: "Teaching makes you do it",
      minutes: 6,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Teaching makes you do it", who: "Tayt Shelman, 10/30/26" },
        { doc: "9 New Calls Study Guide", section: "Organic content and personal brand: Document the journey", who: "Tayt Shelman, 11/4/26" }
      ],
      alsoIn: ["Organic Social tab (document the journey)"],
      idea: `Tayt (10/30) likes it when **students give advice on calls,** because it **forces them to follow it.** Once you've told a room "prep your list the night before," it's very awkward to show up next week without a list.

That's the same commitment-and-consistency effect the sales tab uses in tie-downs: people work hard to stay consistent with what they've said out loud.

**Ways to use it:**
- **Speak up on mentor calls.** Share what's working for you (the PMT storyboard, a roofer opener that landed). You'll feel pressure to keep doing it.
- **Post it.** Tayt told a newer member that a "30 days of starting a marketing company" series would draw people who want to help (11/4). Teaching in public is also content.
- **Explain it to someone.** Walk a friend or family member through your money model or your weekly number. If you can't explain it simply, you haven't learned it yet.
- **Write the rule down where others will see it.** A Loom for a future VA, an SOP for PMT, a tip in the LC group.

There's a learning benefit too: explaining something forces you to organize it. Every lesson on this page you can teach in two minutes is one you actually own.

The catch: teach only what you're doing or about to do. Advice you don't follow turns into a credibility problem fast.`,
      keyPoints: [
        "Giving advice forces you to follow it (Tayt).",
        "Speak up on mentor calls about what's working.",
        "Document the journey: '30 days of starting a marketing company.'",
        "If you can't explain it simply, you haven't learned it.",
        "Teach only what you're actually doing."
      ],
      why: `Public commitments keep a solo founder honest, and the teaching doubles as content for ZDub's own page.`,
      example: {
        title: "Turning a habit into a public commitment (example numbers)",
        body: `On the next LC call: "One thing that helped me: I block 8:30 to 9:30 every weekday for calls, list prepped the night before. Last week that was 47 dials and 3 booked calls." Now the group expects next week's number, and so do you.`
      },
      practice: [
        {
          prompt: "Pick one thing from this tab you're doing (or starting this week) and plan how you'll teach it.",
          fields: ["What I'll teach", "Where (mentor call / post / Loom / friend)", "Date", "The number I'll share (e.g. dials, conversations)", "What I'll be embarrassed by if I don't follow through"],
          rubric: ["It's something you're actually doing", "Venue and date are specific", "Includes a real number", "Stakes are honest"]
        }
      ],
      today: { task: "Share 1 tip with a number in it (e.g. 'blocked 5 call hours, made 47 dials') in a mentor group, an LC thread or a post today.", output: "1 public tip with a number", minutes: 15, suggested: false },
      check: [
        { q: "Why does Tayt like students giving advice on calls?", a: "It forces them to follow it." },
        { q: "What content series did Tayt suggest to a newer member?", a: "'30 days of starting a marketing company' (documenting the journey, 11/4)." }
      ]
    },
    {
      id: "mind-08",
      part: "inner",
      title: "Watch your self-talk: 'Do you hate making money?'",
      minutes: 6,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Watch your self-talk", who: "Tayt Shelman, 11/4/26" }
      ],
      idea: `On the 11/4 call someone said they hate cold calling. Tayt's answer: **"Do you hate making money?"**

It's a joke with a point. "I hate cold calling" is a sentence you repeat to yourself until it becomes a reason not to do it. Tayt reframes the activity as what it actually is: the step that makes money.

**Self-talk shapes what you do next.** The labels you put on a task decide whether you start it:
- "I hate cold calling" → "Calls are how I get paid."
- "I'm bad at sales" → "I'm early at sales. I get better with reps."
- "Nobody wants to hear from me" → "Most owners hear pitches all week; mine is well researched and short."
- "I'm not ready" → "I have mentors behind me. I'll figure it out once they say yes."
- "They'll think I'm too new" → "Small is the offer, not the apology."

**How to catch it:** listen for absolutes (*always, never, hate, can't*) and identity statements (*I'm not a salesperson*). Those are the ones that stop action.

**How to rewrite it:** keep it true. You're not trying to hype yourself; you're replacing a story that blocks action with one that's at least as accurate and points at the next step. "Calls are how I get paid" is simply true for ZDub right now.

Write the rewrites somewhere you'll see them at the start of your call block.`,
      keyPoints: [
        "'Do you hate making money?' (Tayt, 11/4)",
        "Self-talk decides whether you start the task.",
        "Watch for absolutes and identity statements.",
        "Rewrite to something true that points at the next step.",
        "Keep the rewrites visible during your call block."
      ],
      why: `The stories you tell yourself about calling and selling will decide your weekly numbers more than any script.`,
      example: {
        title: "Rewriting before a call block",
        before: `"Ugh, I hate calling roofers. They're always rude and they never need anything."`,
        after: `"Calls are how I get paid. Some roofers will be rude; Tayt says they're the most-pitched owners around. I need 10 dials to find 1 real conversation."`
      },
      practice: [
        {
          prompt: "Catch 3 sentences you say to yourself about sales or outreach and rewrite each to something true that points at action.",
          fields: ["Old sentence 1 → rewrite", "Old sentence 2 → rewrite", "Old sentence 3 → rewrite", "Where I'll post these (sticky, phone wallpaper, call sheet)"],
          rubric: ["Old sentences are real (ones you actually say)", "Rewrites are true, not hype", "Each rewrite points at a next action", "Placement is somewhere you'll see daily"]
        }
      ],
      today: { task: "Write your 3 rewrites on a sticky note on your monitor, then make 10 dials using them, and log the 10.", output: "Sticky note + 10 dials logged", minutes: 30, suggested: false },
      check: [
        { q: "What did Tayt ask the person who said they hate cold calling?", a: "'Do you hate making money?'" },
        { q: "What kinds of self-talk should you watch for?", a: "Absolutes (always, never, hate, can't) and identity statements that stop action." }
      ]
    },
    {
      id: "mind-09",
      part: "inner",
      title: "The 5-second rule: celebrate or sulk, then dial",
      minutes: 5,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: 5-second rule", who: "Tayt Shelman, 11/4/26" }
      ],
      idea: `Tayt's rule (11/4): **celebrate a sale or sulk over a rejection for five seconds, then dial the next one.**

Both halves matter.

**Rejections:** a hang-up or a rude "not interested" can eat 20 minutes if you let it. You replay it, check Instagram, get a coffee, and the call block is gone. Five seconds acknowledges it's real ("that stung") and then the next number is already ringing.

**Wins:** a booked call feels great, and that's exactly when people stop. "I'll just enjoy this." Five seconds, then dial. Your energy is highest right after a yes, which makes it the best time to make the next call.

Why it works on a call block: outreach is a numbers game where each dial is mostly independent of the last. The roofer you call next doesn't know the last one was rude. Carrying the last call into the next one is the only way it can hurt you.

**How to practice it:**
- Keep the next number visible before you hang up.
- Count it out loud if you need to: five, four, three, two, one, dial.
- Put a tally mark on your sheet for every call. The tally is the habit, not the outcome.
- Count the times you broke the rule in your block. Aim for zero.

It pairs with the habit lesson: the block is the container, the 5-second rule is what keeps it moving.`,
      keyPoints: [
        "5 seconds to celebrate or sulk, then dial.",
        "Rejections steal call blocks if you replay them.",
        "Wins make people stop; right after a yes is the best time to call.",
        "Each dial is independent of the last.",
        "Next number visible before you hang up."
      ],
      why: `It turns a 10-call block from 90 minutes into 30, which is the difference between doing it daily and not.`,
      example: {
        title: "In a call block",
        body: `Dial 4: an Elk Grove roofer hangs up mid-sentence. Five seconds: "Rude. Fine." Dial 5 is already on screen. Dial 7: a remodeler books Thursday. Five seconds: fist pump. Dial 8. Block done in 35 minutes, 10 dials, 2 conversations, 1 booked.`
      },
      practice: [
        {
          prompt: "Run a 10-call block with the 5-second rule and record the numbers.",
          fields: ["Dials made", "Real conversations", "Booked calls", "Times I broke the 5-second rule", "Total block time (minutes)"],
          rubric: ["All five numbers filled", "Broken-rule count is honest", "Time recorded so you can compare next block"]
        }
      ],
      today: { task: "Make 10 dials with the 5-second rule, keep a tally, and note how many minutes the block took.", output: "10 dials + time in the Call block log", minutes: 30, suggested: false },
      check: [
        { q: "What is Tayt's 5-second rule?", a: "Celebrate a sale or sulk over a rejection for five seconds, then dial the next one." },
        { q: "Why apply it to wins, not just rejections?", a: "Wins make people stop; right after a yes is when your energy is best for the next call." }
      ]
    },
    {
      id: "mind-10",
      part: "inner",
      title: "Energy is everything: control how you show up",
      minutes: 6,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Energy is everything", who: "Tayt Shelman, 10/30/26" },
        { doc: "9 New Calls Study Guide", section: "Prospecting: How to run the calls (curiosity frame and up-tones)", who: "Tayt Shelman, 10/30/26" }
      ],
      idea: `Tayt (10/30): **energy is everything.** You don't know what the other person's day was like. The roofer you call at 2pm might have just lost a bid, been yelled at by a homeowner, or be standing on a roof in 95 degrees. **You can't control that. You can control how you show up.**

Two sides to this:

**1. Bring the energy you want back.** On cold calls Tayt uses a curiosity frame and **up-tones**: "Hey, I just noticed..." Flat, tired delivery gets flat, tired answers. Owners decide in the first few seconds whether you're worth another five; energy buys those seconds.

**2. Don't take their energy personally.** A short, grumpy answer usually has nothing to do with you. Treat it as information about their day, not a verdict on your offer. Stay steady, stay friendly, keep it short.

**What drains your energy (and what to do):**
- **Long blocks with no break.** Ten calls, then stand up for two minutes.
- **Calling hungry or late in a bad day.** Put the block where your energy is highest. For many people that's morning.
- **Scrolling between calls.** Block the apps (habit lesson).
- **Carrying the last rejection.** The 5-second rule.

Energy is also a sales-call skill: Calum's line that first impressions form in under a minute (8/7) applies just as much on a 45-minute discovery call.

A practical check: record your first 3 calls of a block and listen to your tone. If you wouldn't want to keep talking to yourself, neither will they.`,
      keyPoints: [
        "You don't know their day. You control how you show up.",
        "Up-tones and curiosity: 'Hey, I just noticed...'",
        "Grumpy answers are about their day, not your offer.",
        "Schedule blocks when your energy is highest.",
        "Listen back to your tone."
      ],
      why: `On cold calls and discovery calls, your energy is the first thing an owner judges, before your offer.`,
      example: {
        title: "Same opener, two energies",
        before: `(flat, slow) "Hi... this is Zach from ZDub Media... I was wondering if you had a minute to talk about marketing."`,
        after: `(up-tone, curious) "Hey Mike! Zach here, local in Sacramento. I just noticed something on your Google profile and had a quick question for you."`
      },
      practice: [
        {
          prompt: "Rate your energy across a day and move your call block to your best window.",
          fields: ["Energy 1–10 at 8am / 11am / 2pm / 5pm", "My best window", "Call block moved to (time)", "Energy rating of my last 3 recorded calls (1–10 each)", "One change for the next block (break, food, standing, etc.)"],
          rubric: ["Ratings are numbers", "Block is placed in the best window", "Recorded calls actually rated", "One concrete change"]
        }
      ],
      today: { task: "Record your first 3 cold calls today, rate your energy 1–10 on each, and make 7 more calls standing up with an up-tone opener. Log all 10.", output: "3 energy ratings + 10 dials logged", minutes: 40, suggested: false },
      check: [
        { q: "What's Tayt's reason that energy matters so much?", a: "You don't know what the other person's day was like; you can only control how you show up." },
        { q: "What delivery does Tayt use on cold call openers?", a: "A curiosity frame and up-tones: 'Hey, I just noticed...'" }
      ]
    },
    {
      id: "mind-11",
      part: "inner",
      title: "Decide fast yourself",
      minutes: 6,
      tags: ["Mentor"],
      date: "2026-08-21",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Decide fast yourself", who: "Calum Tresham, 8/21/26" },
        { doc: "ZDub_Guide_00 V2", section: "Principles #9: Speed to lead, and speed in general ('money loves speed')", who: "Jason Maulucci, 8/18/26" }
      ],
      alsoIn: ["Sales tab: Stalls ('let me think about it')"],
      idea: `Calum (8/21): **you can't overcome "I need 48 hours to think" if you say it yourself.**

If you're a slow decider, you'll secretly agree with every prospect who stalls. "Let me think about it" will sound reasonable to you, because it's what you do. You'll back off, book a vague follow-up, and the deal fades.

A seller who decides fast hears "let me think about it" differently: as a signal that one of the four closable factors is missing, to be found now.

**Speed is a cross-call principle** too. Jason (8/18): **"money loves speed."** It shows up in speed to lead, in Tayt's "a client in 10 days or 40 days," and in your own choices.

**Where to practice deciding fast:**
- **Buying tools and training.** If a $15/month call recorder fixes a real problem, decide on the call, not next week.
- **Offer details.** Logan (10/13): decide your offer details before calls. Pick the price, the term, the guarantee. Change it later with data.
- **Next steps with clients.** When PMT needs an answer on a creative, give it the same day.
- **Saying no.** A fast "no, not now" to a distraction is as valuable as a fast yes.

**The rule of thumb:** if you have the information you need and the downside is small or reversible, decide in under 5 minutes. If you need one more fact, name it and set a deadline to get it.

Fast doesn't mean careless. It means you don't use "thinking about it" as a place to hide.`,
      keyPoints: [
        "You can't beat 'I need 48 hours' if you say it yourself (Calum).",
        "Slow deciders secretly agree with stalling prospects.",
        "'Money loves speed' (Jason, 8/18).",
        "Small, reversible decisions: under 5 minutes.",
        "Need a fact? Name it and set a deadline."
      ],
      why: `How you make your own decisions leaks into how you handle a prospect's indecision on every call.`,
      example: {
        title: "Two ways to handle the same decision",
        before: `"I should probably set up a call recorder... let me research the options this weekend." (Three weeks later: still no recordings to review.)`,
        after: `"Fireflies is about $10–15 a month (Logan). Reversible, cheap, fixes a real gap. Signing up now. Done in 4 minutes."`
      },
      practice: [
        {
          prompt: "List decisions you've been 'thinking about' and clear them.",
          fields: ["Decision 1 → decide now: yes/no + why", "Decision 2 → decide now: yes/no + why", "Decision 3 → decide now: yes/no + why", "One decision that truly needs a fact: the fact + deadline date", "How many open decisions I cleared (number)"],
          rubric: ["Each decision gets a clear yes or no", "Only one is allowed to wait, with a dated deadline", "Count recorded"]
        }
      ],
      today: { task: "Set a 15-minute timer and make 5 decisions you've been putting off (tools, offer details, a client answer). Write each in one line with yes/no.", output: "5 decisions logged", minutes: 15, suggested: false },
      check: [
        { q: "What did Calum say about deciding fast?", a: "You can't overcome 'I need 48 hours to think' if you say it yourself." },
        { q: "What principle did Jason state on 8/18?", a: "'Money loves speed.'" }
      ]
    },
    {
      id: "mind-12",
      part: "inner",
      title: "Ask the dumb questions",
      minutes: 5,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Mindset and action: Ask the dumb questions", who: "Tayt Shelman 11/4/26; Calum Tresham 8/21/26" }
      ],
      idea: `Tayt (11/4) and Calum (8/21) both said it: **ask the dumb questions.** The squeaky wheel gets the grease. **Message mentors about even small things.**

Why new agency owners don't: they think the question is too basic, that they should figure it out alone, or that asking makes them look like they don't belong. Meanwhile they spend three hours on something a mentor would answer in one line.

What the mentors' own behavior tells you: Tayt sold deals before knowing every deliverable *because* he had a community to ask (10/30). The help is the asset. Not using it wastes it.

**What counts as a "dumb" question worth sending:**
- "Is $30/day enough for PMT's next course date, or should I push for more?"
- "Should my lead form ask budget for a roofer?"
- "Here's a 2-minute clip of my price close. What's off?"
- "How would you word the self-confession for a med spa?"

**How to ask well (so you get fast answers):**
1. Say what you're trying to do.
2. Say what you tried or what you think.
3. Ask one specific question.
4. Attach the thing (screenshot, clip, number).

Keep a running list during the day. Anything that blocks you for more than 15 minutes goes on the list. Send the list every day, or bring it to the next call.`,
      keyPoints: [
        "Squeaky wheel gets the grease.",
        "Message mentors about even small things (Tayt, Calum).",
        "The community is the asset; unused help is wasted.",
        "Ask well: goal, what you tried, one question, attachment.",
        "Stuck 15+ minutes? It goes on the list."
      ],
      why: `You have access to working agency owners. Every hour you're stuck alone on something they've solved is an hour not spent selling.`,
      example: {
        title: "A well-asked dumb question (illustrative PMT numbers)",
        before: `"Hey, any tips on Facebook ads for a motorcycle school?"`,
        after: `"Running PMT's beginner course ads at $30/day, lead form, 9 leads in 7 days at ~$23 each. Goal is filling a 12-seat course in 3 weeks. Should I raise spend now or test a new hook first? Screenshot attached."`
      },
      practice: [
        {
          prompt: "Write 3 questions you've been sitting on, in the 4-part format, and pick who gets each.",
          fields: ["Question 1 (goal / tried / question / attachment) → who", "Question 2 → who", "Question 3 → who", "How many questions I'll send per week (number)"],
          rubric: ["Each has a clear goal and one specific question", "Each includes a number or attachment", "Each has a named recipient", "Weekly number is set"]
        }
      ],
      today: { task: "Send 2 specific questions to a mentor or the LC group today using the 4-part format, and log them in your scoreboard.", output: "2 questions sent", minutes: 15, suggested: false },
      check: [
        { q: "Which two mentors said to ask the dumb questions?", a: "Tayt (11/4) and Calum (8/21)." },
        { q: "What's the idea behind 'the squeaky wheel gets the grease'?", a: "The people who ask, even about small things, get the help." }
      ]
    },
    {
      id: "mind-13",
      part: "long",
      title: "Stay in the game longer than everyone else",
      minutes: 7,
      tags: ["Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls Study Guide", section: "Getting past gatekeepers and silence; Research and judgment (don't shut ads off early)", who: "Tayt Shelman, 10/30/26" },
        { doc: "9 New Calls Study Guide", section: "Objection handling: What kills the close (the two-week pause story)", who: "Calum Tresham, 8/21/26" }
      ],
      alsoIn: ["Funnels tab: Speed to lead & follow-up (mechanics)"],
      idea: `A mindset thread runs through several of the newest calls: **most people quit right before it works.**

**In outreach.** Tayt (10/30): roofers are the most-pitched owners around. **Some deals take one to two years of follow-up.** "The person that can just talk to them the most will get the worm." Text, call the receptionist, email, walk in, call again tomorrow: "Hey Nick, I keep speaking to Emily, she keeps saying you're my man."

**In ads.** Tayt (10/30): **"People usually shut ads off before they get a result."**

**In client results.** Calum (8/21) told a story: a business owner wanted to pause ads after **two weeks with no qualified leads.** Calum's friend running them said no. The owner **closed $25k that weekend.**

The pattern is the same each time. Early signal is noisy and discouraging. The people who win are the ones whose plan doesn't depend on fast feedback.

**How to build staying power:**
- **Expect the timeline.** If some B2B deals take a month or more (Cam, 10/29) and some roofers take a year or two, a "no reply" this week isn't a no.
- **Decide your stopping rule in advance.** "I follow up until they close or tell me no" (Noah, 10/21) is a rule. "Until I feel awkward" isn't.
- **Track touches per prospect.** A number of attempts makes persistence visible, and keeps you honest about when you quit.
- **Set expectations with clients before launch**, so they don't pull the plug at week two.

The follow-up scripts and timing themselves live in the funnels tab; this lesson is about the mindset that makes you keep doing them.`,
      keyPoints: [
        "Most people quit right before it works.",
        "Some roofer deals take 1–2 years of follow-up (Tayt).",
        "'People usually shut ads off before they get a result.'",
        "The two-week pause that would have missed a $25k weekend (Calum).",
        "Set your stopping rule in advance and count touches."
      ],
      why: `In a market where every roofer gets pitched weekly, the agency that's still politely showing up in month six often wins by default.`,
      example: {
        title: "Persistence by the numbers",
        body: `Prospect: a Roseville roofer. Touch 1 call (no answer), 2 email, 3 call (receptionist Emily), 4 walk-in with a printed ad mockup, 5 call ("I keep speaking to Emily..."), 6 voice note, 7 call in month 2: owner picks up, books a call. Without a touch count, most people stop at 3.`
      },
      practice: [
        {
          prompt: "Write your stopping rule and count your current persistence.",
          fields: ["My stopping rule for prospects (in one sentence)", "Average touches I've made per prospect so far (number)", "My new minimum touches before I stop (number)", "Prospects I quit on too early (names) + date I'll restart each", "What I'll tell a new client about the first 2 weeks of ads"],
          rubric: ["Stopping rule is a rule, not a feeling", "Touch numbers are honest", "Restart dates are set", "Client expectation line is specific"]
        }
      ],
      today: { task: "Pick 5 prospects you stopped following up with and make 1 new touch to each today (call, text, email or walk-in). Log touch count per prospect.", output: "5 touches logged with running counts", minutes: 30, suggested: false },
      check: [
        { q: "How long does Tayt say some roofer deals take?", a: "One to two years of follow-up." },
        { q: "What happened in Calum's two-week pause story?", a: "The owner wanted to pause after two weeks without qualified leads; the person running the ads said no, and the owner closed $25k that weekend." }
      ]
    },
    {
      id: "mind-14",
      part: "long",
      title: "No results yet? Sell your story",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Top takeaways #9; Positioning and pricing moves (Price while you're new)", who: "Tayt Shelman, 11/4/26" },
        { doc: "9 New Calls Study Guide", section: "Action plan for Zach: Write your background angle — Claude's input, not a mentor's", who: "Claude (suggested)" },
        { doc: "ZDub_Guide_00 V2", section: "Principles #2: Honesty is the strategy when you're new", who: "Logan, Calum, Paul" }
      ],
      alsoIn: ["Sales tab: Selling while you're new", "Offers tab (pricing while new)"],
      idea: `Tayt (11/4): **no results? Sell your story.** When you don't have agency case studies yet, the credibility is:

1. **Your background.** What you've done before, and what it proves about how you work.
2. **Your reputation to protect.** You're local, you're one person, your name is on it. You can't afford to do a bad job.
3. **The mentors behind you.** You're coached by people running real agencies.

Tayt connects this to price. He suggests new agency owners charge about **$1.5k–$2k** where he'd charge $3k–$4k, sold as **"the price of an inexperienced guy with the experience of an experienced one,"** because of who coaches you. (The offers tab owns the pricing decision itself.)

**Why this is a mindset lesson:** most new owners feel like frauds without results, so they either hide that they're new or apologize for it. Both lose. The story turns "I have no case studies" into "here's why you can trust me anyway," and it's all true.

**Your raw material** (from the study guide's action plan, written by Claude, not a mentor): you ran an insurance practice and team for about a decade, and you spend your own money marketing your own wholesaling businesses. That's a story about managing people, handling clients' money responsibly, and buying ads with your own cash on the line.

**Rules for the story:**
- **True only.** Never invent clients, stats or results (cross-call principle #2).
- **Short.** 3–4 sentences you can say in 20 seconds.
- **Ends on them.** "...which is why I need your business to win."

Then **document it.** Tayt's "30 days of starting a marketing company" series idea (11/4) is the story told in public.`,
      keyPoints: [
        "No results? Sell your story (Tayt, 11/4).",
        "Credibility = background + reputation to protect + mentors behind you.",
        "'The price of an inexperienced guy with the experience of an experienced one.'",
        "True, short (20 seconds), ends on them.",
        "Never invent clients or results."
      ],
      why: `Until PMT becomes a documented case study, your story is ZDub's main proof. Having it ready kills the 'fraud' feeling that makes new owners avoid calls.`,
      example: {
        title: "A 20-second story (draft; edit to your real details)",
        after: `"Before ZDub, I ran an insurance practice and a team for about ten years, so I'm used to being responsible for people's money and their trust. I also market my own real estate businesses with my own ad dollars, so I treat your budget like mine. And I'm coached by people running agencies doing this every day. I'm local, I'm small on purpose, and I need you to win."`
      },
      practice: [
        {
          prompt: "Write your story in Tayt's three parts, then the 20-second version.",
          fields: ["Background (what I did + what it proves)", "Reputation to protect (why I can't afford a bad job)", "Mentors behind me (who, honestly described)", "My 20-second version", "Times I'll use it this week (number)"],
          rubric: ["Every claim is true", "Background connects to something a client cares about", "Under ~60 words for the 20-second version", "Ends on the client's win", "Usage number set"]
        }
      ],
      today: { task: "Write your 20-second story, record it 3 times, and use it on at least 3 outreach calls or DMs this week. Log each use.", output: "Story script + 3 recordings + 3 logged uses", minutes: 30, suggested: true },
      check: [
        { q: "What three things does Tayt say are your credibility when you have no results?", a: "Your background, your reputation to protect, and the mentors behind you." },
        { q: "How does Tayt suggest framing a lower price while you're new?", a: "'The price of an inexperienced guy with the experience of an experienced one,' because of who coaches you." }
      ]
    }
  ]
});
