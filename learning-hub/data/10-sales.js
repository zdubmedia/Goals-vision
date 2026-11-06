HUB.tab({
  id: "sales",
  title: "Sales Calls & Closing",
  icon: "handshake",
  tagline: "Run the call, find the real reason to buy, show the math, ask for the sale.",
  intro: `This tab is the mentors' sales call, broken into one move per lesson: the frame, discovery, the buying trigger, the money model, the tie-downs, the price and the objections. Most of it comes from Calum, Noah, Tayt, Jason, Logan and Cam on real call reviews. Work through it in order and you'll have your own question sheet, your own money model and your own objection answers, written in your words, before your next discovery call with a Sacramento contractor or PMT.`,
  parts: [
    { id: "base", title: "Part 1 · The ground rules of a sales call" },
    { id: "open", title: "Part 2 · Before the call and the first five minutes" },
    { id: "discovery", title: "Part 3 · Discovery: where calls are won" },
    { id: "model", title: "Part 4 · Commitment, the money model and the price" },
    { id: "objections", title: "Part 5 · Holding the frame and handling objections" },
    { id: "pipeline", title: "Part 6 · Show rates, pipeline and getting better" }
  ],
  trackers: [
    { id: "calls", title: "Sales call log", goal: "Log every discovery call within 1 hour of hanging up", fields: ["Prospect + trade", "Buying trigger I found", "Money model numbers (spend / CPL / close / ticket)", "Outcome + real reason", "Next step + date"] },
    { id: "review", title: "Call review reps", goal: "Review 1 recorded call a week against the checklist", fields: ["Call reviewed", "What I did well", "Biggest miss", "Fix for next call"] }
  ],
  lessons: [
    {
      id: "sal-01",
      part: "base",
      title: "Follow a framework, not a script",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-10-06",
      source: [
        { doc: "ZDub_Guide_01 V2 — Sales Calls and Closing", section: "The short version; The opener (scripts are rubbish)", who: "Calum Tresham, 8/7/26 and 10/6/26" },
        { doc: "9 New Calls Study Guide", section: "Running the sales call (intro)", who: "Noah, Calum and Tayt, 8/21–11/4/26" }
      ],
      idea: `Calum's first rule: sales is person to person, so **follow a framework, not a script** (10/6). On the 8/7 review he went further and called scripts "rubbish," because a script breaks the second the prospect goes off it. A roofer answers your second question with a story about his brother-in-law's company and your script has no next line. A framework does.

A framework is a fixed **order of jobs**, not a fixed set of words. In every call you must, in order:

1. Set the frame (what this call is, how long, that no is fine).
2. Find out why they're here and how they get customers now.
3. Collect the numbers.
4. Find the buying trigger, the goal and the gap.
5. Check timing and decision maker.
6. Explain what you do and run the money model.
7. Tie down belief, then give the price and go quiet.
8. Handle what's left.

The 9 New Calls guide says Noah, Calum and Tayt all teach this same order: set the frame, discover, find the pain, run the numbers, check confidence, then pitch and ask for the sale.

**Where the exact words do matter:** your intro. Calum told one student his intro sounded too laid back for B2B and that first impressions form in under a minute (8/7). Know your opener word for word, then run everything after it from the framework.

Think of it like a CA motorcycle course: the range exercises are always in the same order, but the instructor's coaching changes with every rider. The order keeps you safe; the words fit the person in front of you.`,
      keyPoints: [
        "Scripts break when the prospect goes off script. Frameworks don't (Calum, 8/7).",
        "A framework is an order of jobs: frame, why they're here, numbers, trigger, goal, gap, commitment, money model, price, objections.",
        "Memorize only your opener word for word. First impressions form in under a minute.",
        "Noah, Calum and Tayt all teach the same backbone."
      ],
      why: `ZDub is a one-person sales team right now. A framework lets you run the same reliable call on a roofer, a med spa or PMT without sounding canned.`,
      example: {
        title: "Roofer goes off script",
        before: `Script line 4: "What's your current monthly marketing budget?" Prospect: "Honestly, my nephew does our Facebook." You freeze and read line 5 anyway.`,
        after: `Framework job: "find every lead source and what it returns." So you follow him: "Got it, how many jobs did the nephew's posts bring in last month? What did that cost you in time?" Same job, his words.`
      },
      practice: [
        {
          prompt: "Write your framework as 8 one-line jobs (not scripts), in order, so it fits on an index card next to your screen.",
          fields: ["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8."],
          rubric: ["Each line is a job, not a sentence to read", "Frame comes first, price comes after the money model", "Includes a commitment check before the solution and before the price", "Fits on one card"],
          model: "1. Frame + time + no is fine. 2. Why they booked / how they get leads. 3. Numbers: ticket, margin, close rate, lead sources. 4. Trigger: what changed. 5. Goal number + gap + cost of waiting. 6. Timing + decision maker check. 7. What I do + money model + 1-10 confidence. 8. Tie-down, next steps, price, silence, objections."
        }
      ],
      today: { task: "Write your opener word for word (under 45 seconds spoken), then record yourself saying it on your phone 3 times and keep the best take.", output: "Opener script + 1 voice memo", minutes: 20, suggested: false },
      check: [
        { q: "Why does Calum call scripts rubbish?", a: "They break the moment the prospect goes off script. A framework survives because it's an order of jobs, not words." },
        { q: "Which part should you know word for word?", a: "Your intro/opener. First impressions form in under a minute (Calum, 8/7)." }
      ]
    },
    {
      id: "sal-02",
      part: "base",
      title: "Sell in your own style, keep the structure",
      minutes: 8,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Where mentors disagree: Sales style; One caution from the transcripts", who: "Calum Tresham 8/21/26; Tayt Shelman 11/4/26" },
        { doc: "ZDub_Guide_01 V2", section: "The opener: 'Dork vs douche'", who: "Calum Tresham, 10/6/26" }
      ],
      alsoIn: ["Mastery Guide Ch 4 (Influence) — persuasion tab"],
      idea: `The mentors don't sell the same way, and that's the point.

**Calum (8/21)** sells on expertise and confidence. He said the empathy-heavy NEPQ style "just doesn't land well" for him and that most people can't pull it off.

**Tayt (11/4)** sells on relationship: partnership language, a little pull-back ("I'm pretty busy, the last thing I want is to waste your time"), and he'll get confrontational when the numbers contradict what the prospect says.

What both keep is the **same structure**: frame, discovery, money model, tie-downs, price. The style is the wrapper. The structure is the engine.

**Your situation:** you already use NEPQ on wholesaling calls with homeowners. Calum's comment is not "drop NEPQ." The study guide is clear that his point is to sell in the style that fits you. If NEPQ-style curious, calm questions are natural for you, keep them. Just make sure they serve the mentors' order: you still get the numbers, still find the trigger, still run the money model and still state a price and go silent.

**One limit on any style:** Calum's "dork vs douche" line (10/6). Don't get walked over, because people don't buy from people they don't respect. Don't be so bullish that you bulldoze them. Meet in the middle.

A seller of a house and a business owner buying growth are different buyers. A homeowner in distress needs more space; a contractor talking revenue usually wants you to get to the numbers faster.`,
      keyPoints: [
        "Style is personal; the call structure is not.",
        "Calum: confidence and expertise; finds NEPQ-style empathy doesn't land for most sellers.",
        "Tayt: relationship, pull-back, partnership language, sometimes confrontational.",
        "Use your NEPQ habits if they fit, inside the mentors' order.",
        "Dork vs douche: earn respect without bulldozing."
      ],
      why: `You'll be most convincing in your own voice. The structure is what protects you from losing deals to missing numbers or a missing decision maker.`,
      table: {
        head: ["", "Calum (8/21)", "Tayt (11/4)"],
        rows: [
          ["Core style", "Expertise and confidence", "Relationship selling"],
          ["Signature move", "Leads the objection phase, never answers it directly", "Pull-back: 'last thing I want is to waste your time... is that fair?'"],
          ["On empathy-led (NEPQ-style)", "'Just doesn't land well' for him; most can't do it", "Not addressed; uses personal pain questions"],
          ["Shared structure", "Frame, discovery, money model, tie-downs, price", "Same"]
        ]
      },
      example: {
        title: "Same step, two styles: the cost-of-inaction question for a Roseville HVAC owner",
        body: `Calum-style: "You told me summers are slammed and winters are dead. If nothing changes, what does a dead January cost you in revenue?"\n\nNEPQ / Tayt-style: "If you don't change anything, do you think you'll be in the same spot next winter? How does that sit with you?"\n\nBoth do the same job (gap and cost of inaction). Pick the one you can say naturally.`
      },
      practice: [
        {
          prompt: "Rate yourself honestly, then write one line for the same step in your style.",
          fields: ["My natural style (confidence / relationship / NEPQ-curious) and why", "One NEPQ habit I'll keep on business calls", "One habit I'll drop because it slows a business call", "My own wording for the goal question ('six months from now...')"],
          rubric: ["Names a real habit, not a vague trait", "Keeps the structure step intact", "Wording sounds like you, not a quote"]
        }
      ],
      today: { task: "Listen to 10 minutes of one of your recorded wholesaling calls and mark 3 moments: one that would work on a contractor as-is, one that needs to be faster, one that's missing a number.", output: "3 timestamped notes", minutes: 25, suggested: false },
      check: [
        { q: "What did Calum say about NEPQ-style empathy selling?", a: "It 'just doesn't land well' for him and most people can't do it. The lesson is to sell in your own style while keeping the structure." },
        { q: "What does 'dork vs douche' mean?", a: "Don't get walked over (no respect, no sale) and don't be too bullish. Meet in the middle (Calum, 10/6)." }
      ]
    },
    {
      id: "sal-03",
      part: "base",
      title: "The four closable factors",
      minutes: 7,
      tags: ["Mentor"],
      date: "2026-10-06",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "1. The four closable factors", who: "Calum Tresham, 10/6/26" }
      ],
      idea: `Calum's test for whether a prospect can be closed at all (10/6). All four must be true:

1. **They want to change.**
2. **They want to change now.**
3. **They trust your service** (the vehicle: you, Meta ads, your process).
4. **They have the resources** (the money).

If one is missing, your job on the call is to **find out which one**, not to push harder. Pushing on the wrong factor is how calls turn awkward.

How each one shows up on a real call:

- **Want change** shows in discovery. A roofer who says "we're booked solid off referrals and happy" may not want change. That's why the seed-of-doubt questions exist (later lesson).
- **Want it now** is the buying trigger. Something recent changed: a slow month, a new crew, a competitor running ads. No trigger, no urgency.
- **Trust the vehicle** is built by your explanation, the money model and your honesty about being new. Proof requests at the end of a call are usually a trust gap.
- **Have the money** shows in the numbers: revenue, margin, profit. Calum warns elsewhere not to sign someone who can barely afford one month (8/21).

The four factors are also your **diagnosis after a lost deal**. Every "no" maps to one of them. "Let me think about it" is usually factor 2 or 3. "It's too much" from someone doing $40k profit a month is factor 3 dressed up as factor 4.`,
      keyPoints: [
        "Closable = wants change + wants it now + trusts the vehicle + has the money.",
        "Missing one? Find which, don't push harder.",
        "Buying trigger = 'now'. Money model + honesty = 'trust'. Numbers = 'money'.",
        "Use the four to diagnose every lost deal."
      ],
      why: `It stops you wasting energy pitching harder at someone who simply has no reason to act this month, and tells you exactly which part of your call to fix.`,
      table: {
        head: ["Factor", "Where you find it on the call", "Sign it's missing"],
        rows: [
          ["Wants change", "Discovery: lead sources and results", "'We're fine, just curious'"],
          ["Wants it now", "Buying trigger", "No recent 'what changed'; 'maybe next quarter'"],
          ["Trusts the vehicle", "Explanation, money model, tie-downs", "Late requests for case studies or reviews"],
          ["Has the money", "Revenue, margin, profit questions", "Can barely afford month one"]
        ]
      },
      example: {
        title: "PMT as a closable prospect (looking back)",
        body: `Change: Chris wanted more students. Now: he asked for a "spend X, get Y people" storyboard. Trust: the free October built it. Money: an established school with a real budget. All four were true, which is why it closed. Use the same four-line check on every new prospect.`
      },
      practice: [
        {
          prompt: "Pick your last real sales conversation (ZDub, wholesaling or PMT). Score each factor yes / no / unknown with the evidence.",
          fields: ["Wants change (evidence)", "Wants it now (evidence)", "Trusts the vehicle (evidence)", "Has the money (evidence)", "Which factor I should have dug into"],
          rubric: ["Each answer cites something the prospect actually said", "'Unknown' is used honestly", "Names one specific question you'd ask next time"]
        }
      ],
      today: { task: "Add a 4-box 'closable check' (change / now / trust / money) to the top of your discovery sheet in Google Docs or GHL notes.", output: "Updated discovery sheet", minutes: 15, suggested: false },
      check: [
        { q: "Name the four closable factors.", a: "They want to change, they want to change now, they trust your service (vehicle), and they have the resources." },
        { q: "What do you do if one is missing?", a: "Find out which one is missing rather than pushing harder." }
      ]
    },
    {
      id: "sal-04",
      part: "base",
      title: "The call, step by step: the 12-step backbone",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Running the sales call: The call, step by step", who: "Noah 10/21, Calum 8/21, Tayt 11/4/26" },
        { doc: "ZDub_Guide_01 V2", section: "2. Call structure", who: "Calum 10/6/26; Noah 10/7/26" }
      ],
      idea: `Here's the full sequence, merged from the newest calls. Earlier versions (Calum 10/6, Noah 10/7) have the same backbone; this is the most current order.

1. **Before the call, confirm every decision maker will be there.** Tayt does it when he confirms the day before (11/4).
2. **Set the frame.** How long, what you'll ask about, that you'll see if you can help. Tayt: "The goal of this call is to earn your business... does it make sense for you, does it make sense for me?" Tell them they can stop you any time. Small talk under 60 seconds (Calum, 8/21).
3. **Open with how they get leads.** Calum: "So how do you get leads at the moment?" (8/21).
4. **Discovery part 1: their marketing and why it isn't working.** Each lead source: how often, cost, return, why (Noah, 10/21).
5. **Discovery part 2: the numbers.** Job value, lifetime value, close rate, margin, current spend. Get the actual answer.
6. **Can they handle growth?** "If we get you 15 inspections, could you handle it? What would that do for you?" (Tayt, 11/4).
7. **Find the pain, including personal.** "If you don't change anything, will you be in the same spot?" (Tayt, 11/4).
8. **Goals.** "Six months from now, what does success look like?" Push for a revenue number (Noah, 10/21).
9. **Educate on what you do, then run the money model.**
10. **Confidence check.** "On a scale of 1 to 10, how confident are you we can hit those numbers?" then "What can I say to get you to a 10?"
11. **Ask permission to go into investment, then pitch.** End with "Does that make sense?" and "Where are you at on the investment?" Not "Any questions for us?"
12. **Say the price and stop talking.** Then assume the close: "Next steps would be onboarding..." with the payment link ready (Tayt, 11/4).

Calum's 10/6 version adds two explicit **commitment checkpoints**: timing and decision maker before the solution, and tie-downs before the price. You'll get a lesson on each. Each step gets its own lesson in this tab; this page is the map.`,
      keyPoints: [
        "Decision makers confirmed before the call.",
        "Frame → how they get leads → why it isn't working → numbers → capacity → pain → goal.",
        "Then educate, money model, 1–10 confidence, permission, pitch.",
        "Price, silence, assume the close with the link ready.",
        "Commitment checkpoints before the solution and before the price (Calum, 10/6)."
      ],
      why: `This is the map for every other lesson in the tab. If a call goes sideways, you can find exactly which step you skipped.`,
      example: {
        title: "Timing a 60-minute call with a Sacramento remodeler",
        body: `0–3 min frame. 3–25 min discovery (lead sources, numbers, capacity). 25–32 min trigger, pain, goal, timing/decision maker. 32–42 min what we do + money model + 1–10. 42–45 min tie-down, next steps, price, silence. Remaining time: objections and onboarding booking. Book the slot at 90 minutes so you never rush the close (Cam, 10/29).`
      },
      practice: [
        {
          prompt: "Write the 12 steps from memory in your own words, with roughly how many minutes each gets in a 60-minute call.",
          fields: ["Steps 1–4 + minutes", "Steps 5–8 + minutes", "Steps 9–12 + minutes"],
          rubric: ["Money model comes before price", "Goal question is asked after discovery, not at minute 2", "Ends with price + silence, not 'any questions?'", "Times add up to about 60"]
        }
      ],
      today: { task: "Turn the 12 steps into a one-page call checklist (Google Doc) with a checkbox per step, and print or pin it next to your screen for every call.", output: "One-page call checklist", minutes: 20, suggested: false },
      check: [
        { q: "What should you ask instead of 'Any questions for us?' at the end of the pitch?", a: "'Does that make sense?' and 'Where are you at on the investment?' (Noah, 10/21)." },
        { q: "What happens right after you say the price?", a: "Stop talking. Then assume the close: 'Next steps would be onboarding...' with the payment link ready (Tayt, 11/4)." }
      ]
    },
    {
      id: "sal-05",
      part: "open",
      title: "Set up the call before it starts",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "The call, step by step (step 1); Practical details; Keeping it organized (call recording)", who: "Tayt 11/4, Noah 10/21, Cam 10/29/26" },
        { doc: "ZDub_Guide_01 V2", section: "The opener; 12. Being new on sales calls", who: "Calum 8/7 and 10/6; Logan 10/13 and 10/16/26" }
      ],
      idea: `Half the deals that die at the end were lost before the call started. The mentors' setup list:

**1. Confirm every decision maker will be there.** Tayt does it in his day-before confirmation (11/4). If "I need to talk to my wife" shows up later it has no power, because "we had this conversation." Noah adds: ask early "Are there multiple owners?" and write the answer down (10/7).

**2. Decide your offer before the call.** Logan: decide the details BEFORE calls, not on the call (10/13). Price, what's included, guarantee, minimum term. Making it up live sounds unsure.

**3. Give it room.** Cam is moving to 90-minute slots because rushing lost him four or five closable deals in three days (10/29).

**4. Pick a quiet place.** Calum: never take sales calls from a loud public spot like a coffee shop (8/7).

**5. Record it, legally.** Logan uses Fireflies (about $10–15/month) so he can focus on questions, then gives the transcript to AI (10/16). Calum also says record for review (10/6). Cam noted he's in Arizona (one-party consent) and is "pretty sure" California needs both parties. You're in California: **tell prospects you're recording before you record.**

**6. One person runs the call.** A silent partner is fine (Noah, 10/21).

**7. Research lightly.** For a booked sales call, Calum says research isn't very important; just ask them. Industry knowledge beats company specifics (8/7). Cam's pre-call routine (Ads Library check, voice note) is covered in Part 6.

Note: don't judge someone who joins from their truck. Calum says big deals have closed that way (8/21).`,
      keyPoints: [
        "Confirm all decision makers the day before.",
        "Decide offer details before the call, never on it.",
        "Book 90-minute slots. Quiet room.",
        "Record with consent: say so up front in California.",
        "One person runs the call."
      ],
      why: `These are 10-minute fixes that remove the most common end-of-call escapes: absent spouse, rushed close, unclear offer.`,
      example: {
        title: "Day-before confirmation text to a Folsom roofer",
        after: `"Hi Mike, Zach from ZDub Media. Confirming tomorrow at 10. Will anyone else who helps make marketing decisions, like a partner or your office manager, be joining? Happy to include them. I record calls so I can focus on you; just let me know if that's an issue."`
      },
      practice: [
        {
          prompt: "Write your pre-call setup: the confirmation text, the recording line you'll say at the start, and your locked offer details.",
          fields: ["Day-before confirmation text (with decision-maker question)", "Recording consent line I'll say in the first minute", "Offer locked before calls: price / includes / term / guarantee"],
          rubric: ["Text asks about other decision makers", "Consent line is plain and said before recording", "Offer details are specific numbers, not ranges you'll decide live"]
        }
      ],
      today: { task: "Set every new discovery booking in GHL to 90 minutes and save the confirmation text as a GHL snippet.", output: "Updated calendar + saved snippet", minutes: 20, suggested: true },
      check: [
        { q: "Why does Cam book 90-minute sales slots?", a: "Rushing cost him four or five closable deals in three days." },
        { q: "What should you do about call recording in California?", a: "Tell prospects you're recording before you record; Cam believed California requires both parties' consent." }
      ]
    },
    {
      id: "sal-06",
      part: "open",
      title: "The opener: set the frame and make no comfortable",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "The opener (Calum 10/6); Calum's B2B opener (8/7)", who: "Calum Tresham, 8/7 and 10/6/26; Noah Wyman 10/7/26" },
        { doc: "9 New Calls Study Guide", section: "The call, step by step: step 2", who: "Noah 10/21, Tayt 11/4, Calum 8/21/26" }
      ],
      idea: `The opener has one job: **set expectations so the prospect feels free to say no.** Calum's reason: people who can say no tell the truth (10/6).

**What a good frame contains:**
- How long the call is.
- What you'll do: ask about where the business is and how it gets customers, then see if you can help (Noah praised exactly this, 10/21).
- That it's two-way. Tayt: "The goal of this call is to earn your business... does it make sense for you, does it make sense for me?" (11/4).
- That they can stop you. Calum: "if at any point it doesn't make sense, cut me off, I won't be offended" (10/6).
- An early check. Calum: "we'll know within the first 15 minutes if we're connecting the right dots."
- **End with a question** that starts discovery.

**Calum's B2B opener (8/7)**, the one his teams use: "Looks like we've got about 45 minutes today... to be honest within the first 15 minutes or so we'll really know if we're connecting the dots. If I don't think that's the case I'll be the first to let you know, and the same goes for you... I don't want us trying to fit a circle into a square hole."

On 10/6 Calum framed about 60 minutes instead of 45. Same mentor, two calls; either works. The 15-minute check is the constant.

**Don'ts:**
- Don't say "at the end, tell me yes or no." It puts their guard up (Calum, 10/6).
- Keep pleasantries short (under 60 seconds, Calum 8/21). Long rapport eats the meeting and hands them an "I've got another meeting" exit.
- Don't leave it open. Noah: hold the frame from the start and snap into questions, or the prospect runs the call (10/7).`,
      keyPoints: [
        "Goal: a prospect who feels free to say no, so they tell the truth.",
        "Length, agenda, two-way, 'cut me off', 15-minute check.",
        "End the opener with a question.",
        "Never 'tell me yes or no at the end'.",
        "Small talk under 60 seconds."
      ],
      why: `The frame decides who runs the next 45 minutes. A clean opener makes a solo, new agency owner sound like someone who's done this a hundred times.`,
      example: {
        title: "ZDub opener for a Sacramento HVAC owner",
        after: `"Appreciate you making the time, Dave. We've got about 45 minutes. I'll ask a few questions about where the business is and how you're getting customers right now, and within 15 minutes we'll both know if we're connecting the dots. If I don't think I can help, I'll tell you straight, and same goes for you. Cut me off any time. Fair? Great. So tell me a bit about the business and how you make money at the moment."`
      },
      practice: [
        {
          prompt: "Write your opener. It must hit every element and end in a question.",
          fields: ["My opener (word for word)", "Which element was hardest to say naturally, and my fix"],
          rubric: ["States length and agenda", "Gives permission to say no / cut you off", "Includes the 15-minute check", "Ends with an open question about their business", "No 'tell me yes or no at the end'"],
          model: `"Thanks for jumping on. We've got about 45 minutes. My plan is to learn how the business runs and where customers come from now, then see if what we do fits. Usually within 15 minutes we'll both know. If it's not a fit I'll say so, and you can cut me off any time. Sound fair? So how are you getting new customers at the moment?"`
        }
      ],
      today: { task: "Role-play the opener out loud 5 times (time each one; target under 45 seconds), then lock the best version into your call checklist.", output: "Final opener + 5 timed reps logged", minutes: 20, suggested: false },
      check: [
        { q: "Why does Calum want prospects to feel free to say no?", a: "People who can say no tell the truth." },
        { q: "What phrase does Calum say NOT to use in the opener?", a: "'At the end, tell me yes or no.' It puts their guard up." },
        { q: "How long should small talk run?", a: "Under 60 seconds (Calum, 8/21)." }
      ]
    },
    {
      id: "sal-07",
      part: "open",
      title: "The first questions: why they're here and how they get leads",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-08-21",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "Calum's question order (8/7)", who: "Calum Tresham, 8/7/26" },
        { doc: "9 New Calls Study Guide", section: "The call, step by step: step 3", who: "Calum Tresham, 8/21/26" }
      ],
      idea: `Pitching without knowing why they booked and why now is, in Calum's words, a "Hail Mary" (8/7). On that review the student was **nine minutes in** and still didn't know why the prospect was on the call.

**Calum's question order (8/7):**
1. **Why they're on the call.** "What made you reach out? What are you specifically looking for? What do you not have right now that you think I can provide?"
2. **Current situation.** Average order value, jobs, revenue.
3. **Duration.** "How long has it been this way?" or "How long have you wanted this?"
4. **Trigger,** asked after duration: "This has been going on two years, what's changed more recently?"
5. **Goals,** as a money figure.
6. **Past agencies,** good and bad. Position yourself like the good one, plus extra expertise.
7. **Ready now and decision maker,** then pitch.

**The newer opener question (8/21):** "So how do you get leads at the moment?" Calum's reason: vague questions confuse prospects because they don't know why you're asking. A lead-source question is concrete and gets them talking about the exact thing you fix.

On 10/6 Calum ended his opener with "Tell me a bit about your business and how you make money at the moment." All three versions do the same thing: start concrete, start with money and customers.

**Why the order matters:** duration before trigger. Once you know it's been "two years of slow winters," asking "what changed recently?" lands. Calum called "why now and why not in a week?" a terrible question.

**Discovery is ammunition.** Calum's "bank balance": if they give you 11 reasons not to buy, you give them back 12 reasons they told you why they should (8/7).`,
      keyPoints: [
        "Know why they booked within the first few minutes.",
        "Start concrete: 'How do you get leads at the moment?'",
        "Order: why here → situation → duration → trigger → goal → past agencies → ready + decision maker.",
        "Ask duration before trigger.",
        "Bank every reason they give you; you'll spend it at the close."
      ],
      why: `Your first question sets whether the call is about their business or about your services. Start with theirs.`,
      example: {
        title: "Duration before trigger, with a Rocklin landscaper",
        body: `"How do you get leads at the moment?" → "Mostly referrals and Nextdoor." → "How long has it been mostly referrals?" → "Since we started, six years." → "Six years on referrals. What's changed more recently that has you looking at ads now?" → "Two crews are sitting idle on Fridays." That last answer is the trigger.`
      },
      practice: [
        {
          prompt: "Write my question order for a real prospect type (roofer, med spa or PMT-style school), using Calum's 7 steps.",
          fields: ["Prospect type", "1. Why here", "2. Situation", "3. Duration", "4. Trigger", "5. Goal (money)", "6. Past agencies", "7. Ready now + decision maker"],
          rubric: ["Each is an open question in your words", "Trigger question references the duration answer", "Goal asks for a dollar or job number", "No 'why now and not in a week?'"]
        }
      ],
      today: { task: "Add these 7 questions to your discovery sheet in order, with a blank line under each for notes.", output: "Discovery sheet v2", minutes: 15, suggested: false },
      check: [
        { q: "What was Calum's newer first question on 8/21, and why?", a: "'So how do you get leads at the moment?' Vague questions confuse prospects because they don't know why you're asking." },
        { q: "Why ask duration before the trigger?", a: "So the trigger question has context: 'This has been going on two years, what's changed more recently?'" }
      ]
    },
    {
      id: "sal-08",
      part: "discovery",
      title: "Discovery decides the deal: dig into every lead source",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-10-21",
      source: [
        { doc: "9 New Calls Study Guide", section: "Top takeaways #3; The call, step by step: step 4", who: "Noah Wyman, 10/21/26" },
        { doc: "ZDub_Guide_01 V2", section: "3. Discovery: What to collect", who: "Noah Wyman 10/7/26; Calum Tresham 10/6/26" }
      ],
      idea: `Noah's view: discovery is "going to drive probably 100% of results" (10/21). On 10/7 he put it another way: good discovery saves a bad pitch.

**Discovery part 1 is their marketing and why it isn't working.** For every lead source, get:
- How often it produces.
- What it costs, in money AND time.
- What it returns, in jobs and dollars.
- Why it isn't enough.

**Quantify "a lot."** "We get a lot of referrals" is useless. "About 4 a month, closing 2" is ammunition (Noah, 10/7).

**What you pay up front means nothing; what you make on the back end is what counts** (Noah, 10/7). A $600/month Yelp spend that brings in two $12k jobs is a great source. Say so.

**If one source is working, ask "why not double down?"** The answer usually reveals the real constraint (time, capacity, cash flow).

**Why skipping this kills deals:** if you never establish why the current sources fall short, the prospect can end the call with "I'll just stick with what I'm doing" (Noah, 10/21). Student Dane's line on that call: you wouldn't be talking to someone if it was working well.

**Past agencies:** what was good and what was bad, so your pitch keeps the good and removes or explains the bad (Calum, 10/6). If they're with an agency right now, Calum asks: "Why don't you just continue working with them?" and gets the exact reason early so it can't be used against you at the end (8/7).

Don't explain what you do 10 minutes in (Noah, 10/7). Stay curious until you could explain their business to someone else.`,
      keyPoints: [
        "Discovery drives ~100% of results (Noah).",
        "Each lead source: frequency, cost (money + time), return, why it's not enough.",
        "Quantify 'a lot'. Back-end return beats up-front cost.",
        "Ask 'why not double down?' on what works.",
        "Get the reason they'd leave/skip their current agency early."
      ],
      why: `This is where you earn the right to pitch. Every gap you uncover here becomes a line in your money model and a reason at the close.`,
      example: {
        title: "Lead-source grid for a Sacramento flooring company",
        body: `Referrals: ~6/mo, close 4, $0 cost but owner's time. Angi: 20/mo, close 1, $900/mo, "tire kickers." Old agency: $1,500/mo retainer, "pretty posts," no tracked jobs. Gap: referrals can't be tripled on demand, Angi wastes quoting time, the agency had no tracking. Now you know what to pitch.`
      },
      table: {
        head: ["Lead source", "How often", "Cost (money/time)", "Return (jobs/$)", "Why not enough?"],
        rows: [["(fill per prospect)", "", "", "", ""]]
      },
      practice: [
        {
          prompt: "Role-play discovery part 1. Write both sides of a 6-exchange dialogue with a Sacramento roofer who says 'we get a lot of referrals'.",
          fields: ["Me 1 / Roofer 1", "Me 2 / Roofer 2", "Me 3 / Roofer 3", "Me 4 / Roofer 4", "Me 5 / Roofer 5", "Me 6 / Roofer 6"],
          rubric: ["You quantify 'a lot' into a number", "You get cost AND return for at least two sources", "You ask why a working source isn't doubled", "You never explain your service during this part"]
        }
      ],
      today: { task: "Build the lead-source grid (5 columns above) into your discovery sheet and fill it in for PMT from what you already know.", output: "PMT lead-source grid", minutes: 25, suggested: false },
      check: [
        { q: "What does Noah say decides results on a sales call?", a: "Discovery: it drives 'probably 100% of results'." },
        { q: "What can a prospect say at the end if you skip why their current sources aren't working?", a: "'I'll just stick with what I'm doing.'" }
      ]
    },
    {
      id: "sal-09",
      part: "discovery",
      title: "Discovery part 2: get the numbers (and the actual answer)",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-10-21",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "3. Discovery: What to collect", who: "Calum Tresham 10/6/26; Noah Wyman 10/7/26" },
        { doc: "9 New Calls Study Guide", section: "The call, step by step: step 5", who: "Calum 8/21/26; Noah 10/21/26" },
        { doc: "ZDub_Guide_00 V2", section: "Principles that show up across calls #4: Numbers before price", who: "Calum, Noah, Jason" }
      ],
      idea: `You can't run a money model without their numbers, and you can't justify your price without a money model. So part 2 of discovery is a numbers audit.

**The non-negotiables:**
- **Average ticket.** Calum: non-negotiable (10/6). No ticket, no justification for your fee.
- **Close rate** across leads, and **% of unqualified leads** (that's wasted quoting time you can put a number on).
- **Profit margin** (Noah, 10/7). At a 20% margin they need about **5x return on ad spend just to break even**. Use it in your projections.
- **Lifetime value:** how long customers stay or how often they buy again. Month-one ad spend may only break even on a customer (Noah, 10/7).
- **Monthly revenue and profit now, and the goal** (Noah's example: $800k now, $1.5–2M goal). Write it down.
- **Current spend** on marketing.
- **Decision makers** (Noah, 10/7): "Are there multiple owners?" Write the answer down word for word.

**Get the actual answer to the question you asked.** Calum's example (8/21): "I'd like to do four a year" does not answer "how many do you do?" Politely ask again. Prospects drift to what they want, not what is.

**Collect objection pre-empts.** Noah's prospect said "we could have 100 people on a job site by Wednesday." That's capacity handled before it can become an objection (10/7). Write lines like that down.

Jason's version (8/18) is the same idea as a "shark tank" audit: customer acquisition cost, average order value, every lead source and what percent of revenue each brings.

This is cross-call principle #4 in the Master Index: **numbers before price.**`,
      keyPoints: [
        "Average ticket is non-negotiable.",
        "Close rate, % unqualified, margin, LTV, revenue now vs goal, current spend.",
        "20% margin → ~5x ROAS just to break even.",
        "Get the actual answer; re-ask if they answer a different question.",
        "Write down decision-maker answers and capacity lines verbatim."
      ],
      why: `These numbers are the raw material for the money model, the pitch and every money objection. Miss one and the math falls apart.`,
      example: {
        title: "Re-asking for the real number",
        before: `You: "How many kitchen remodels do you do a year?" Owner: "I'd like to do one a month." You: "Great!" (move on)`,
        after: `You: "One a month would be great, I hear you. And right now, roughly how many did you do in the last 12 months?" Owner: "Honestly... five." Now you have a baseline (5) and a goal (12).`
      },
      practice: [
        {
          prompt: "Write the numbers section of your discovery sheet as questions you'd actually say.",
          fields: ["Average ticket", "Close rate + % unqualified", "Profit margin", "Lifetime value / repeat purchases", "Revenue now → goal", "Current marketing spend", "Decision makers"],
          rubric: ["Each is a spoken question, not a label", "Margin question is included", "Decision-maker question is direct", "At least one follow-up for when they dodge"]
        },
        {
          prompt: "Margin math: at a 25% margin, what ROAS does a client need just to break even on ad spend? Show the math.",
          fields: ["My math", "What I'd say to the prospect"],
          rubric: ["Breakeven ROAS = 1 / margin = 4x", "Explains it in plain words"],
          model: "1 ÷ 0.25 = 4. Every $1 of ad spend needs $4 of revenue to pay for itself in profit. So 'a 4x return is our break-even line; everything above it is profit.'"
        }
      ],
      today: { task: "Fill in every number you know for PMT (ticket per student, margin guess, students/month, current spend) and list the ones you still need to ask Chris.", output: "PMT numbers sheet + questions for Chris", minutes: 25, suggested: false },
      check: [
        { q: "Which number did Calum call non-negotiable?", a: "Average ticket price." },
        { q: "At a 20% margin, what ROAS does a client need to break even?", a: "About 5x (Noah, 10/7)." }
      ]
    },
    {
      id: "sal-10",
      part: "discovery",
      title: "How long should discovery run? Calum vs Noah",
      minutes: 6,
      tags: ["Mentor", "Disagreement"],
      date: "2026-10-21",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "How long discovery should run; Where the mentors disagree", who: "Calum Tresham 8/7 and 10/6/26; Noah Wyman 10/7/26" },
        { doc: "ZDub_Guide_00 V2", section: "Where the mentors disagree: Discovery length", who: "Calum, Noah" },
        { doc: "9 New Calls Study Guide", section: "Top takeaways #3", who: "Noah Wyman, 10/21/26" }
      ],
      idea: `Two mentors, two answers. Both are worth understanding.

**Calum (10/6):** discovery shouldn't run 30 minutes. He has price on the table and a decision in about 40 minutes. His calls are framed at about 60 minutes (10/6) or 45 (8/7). His reason, from 8/21: fear grows with time. Momentum closes.

**Noah (10/7):** discovery can run 30–45 minutes, **until you could explain their business to someone else.** Don't explain what you do 10 minutes in. On 10/21 he doubled down: discovery drives "probably 100% of results."

They're not as far apart as it looks. Both agree:
- Discovery is where calls are won.
- You need the numbers before the money model.
- You don't pitch early.

The difference is pace and experience. Calum runs sales teams and has done thousands of these; he gets the same numbers faster. Noah is coaching people who are new and tend to skip the digging.

**How to use both:** the test that settles it on any call is Noah's: *could I explain this business, its numbers and why its marketing isn't working to someone else?* If yes, move on, even at minute 15. If no, keep digging, even at minute 35. Then keep Calum's urgency in the commitment steps and the close, where time really does breed fear.

The 15-minute "are we connecting the dots?" check stays the constant either way.`,
      keyPoints: [
        "Calum: decision in ~40 minutes; discovery shouldn't hit 30.",
        "Noah: 30–45 minutes is fine, until you could explain their business to someone else.",
        "Both: don't pitch early; get the numbers first.",
        "Practical test: can I explain their business and why their marketing falls short?"
      ],
      why: `You'll hear both pieces of advice and feel pulled. A clear test lets you choose on each call instead of guessing.`,
      table: {
        head: ["", "Calum (10/6, 8/7)", "Noah (10/7, 10/21)"],
        rows: [
          ["Discovery length", "Under 30 min; decision in ~40", "30–45 min is fine"],
          ["Call frame", "45–60 min total", "Not specified; whatever discovery needs"],
          ["When to stop digging", "When you have what you need; keep momentum", "When you could explain their business to someone else"],
          ["Main risk he's guarding against", "Fear and fatigue growing with time", "Pitching without enough ammunition"]
        ]
      },
      example: {
        title: "Applying the test with a Davis med spa",
        body: `Minute 18. You know: $350 average treatment, 40% rebook, 120 clients/month, Instagram-only marketing, goal 200 clients. You don't know: margin, or why Instagram stopped growing. Test fails, so keep going 8 more minutes. At minute 26 you could explain it to a friend. Move to trigger and goals.`
      },
      practice: [
        {
          prompt: "Write your own discovery rule in one sentence, then list the 5 facts you must have before leaving discovery.",
          fields: ["My rule", "Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5"],
          rubric: ["Rule names both mentors' concern (enough info vs momentum)", "Facts include ticket and close rate", "Facts include why current marketing falls short"]
        }
      ],
      today: { task: "On your next recorded call (or a past wholesaling one), note the minute discovery ended and whether you passed the 'explain it to someone else' test.", output: "1 timestamp + pass/fail note in the call log", minutes: 15, suggested: false },
      check: [
        { q: "What is Noah's test for when discovery is long enough?", a: "When you could explain their business to someone else." },
        { q: "Why does Calum keep calls tight?", a: "He has price on the table and a decision in about 40 minutes; fear grows with time." }
      ]
    },
    {
      id: "sal-11",
      part: "discovery",
      title: "You're vetting them too: Jason's two-phase qualification",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-08-18",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "Qualifying on the call (Jason, 8/18)", who: "Jason Maulucci, 8/18/26" }
      ],
      idea: `Jason (8/18): **the sales call is you vetting them, not just them vetting you.** That mindset changes your posture. You're not auditioning; you're deciding if this business is worth your time and can win with you.

**Two phases of discovery:**

1. **Business audit ("shark tank mode").** Customer acquisition cost, average order value, every lead source and what percent of revenue each brings.
2. **Client traits.** Long-term vision, why they got into business, what's stopping them, past agencies.

**The screening question:** "What's the best marketing investment you've ever made?" If they can't name one, Jason says you'd be their **educator, not their media buyer.** That's a much harder, slower client.

**The red flag:** "I've worked with six marketing agencies, what makes you different?" You can't sell the channel and yourself at the same time.

**The transition to the pitch,** once they qualify: "Sounds like a very good fit. I don't say that to everybody... because you said X, at this revenue level, and your main bottleneck is Meta ads, I think we can help. If it's okay I'd like to show you how, then go over pricing."

Notice what that line does: it uses their own words (X), it's honest that not everyone qualifies, and it asks permission.

**In B2B you'll sometimes just book a follow-up** instead of closing on the first call (Jason, 8/18).

The full dream-client checklist (AOV, margin, revenue floor, beliefs, speed, trust, funnel, data, sales cycle) lives in the Offer, Pricing and Lane guide (getting-clients / offers tabs).`,
      keyPoints: [
        "You vet them as much as they vet you.",
        "Phase 1 business audit; phase 2 client traits.",
        "Screening: 'What's the best marketing investment you've ever made?'",
        "Red flag: six past agencies and 'what makes you different?'",
        "Transition: 'Sounds like a very good fit... because you said X... if it's okay I'd like to show you how.'"
      ],
      why: `Early clients become your case studies. A client who's never seen marketing work will take months to educate and may never give you a result to show.`,
      example: {
        title: "Screening a Citrus Heights auto detailer",
        body: `"What's the best marketing investment you've ever made?" → "Honestly, the $200 I spent on a wrap for my van. Got me 3 fleet accounts." Good: he can name one, knows it in dollars, and believes paid marketing works. Compare: "Nothing's ever worked, it's all a scam" = you'd be his educator.`
      },
      practice: [
        {
          prompt: "Write your transition-to-pitch line for a real or likely prospect, filling Jason's template with their specifics.",
          fields: ["Prospect", "Their words I'll quote (X)", "Their revenue level", "Their main bottleneck", "My full transition line"],
          rubric: ["Quotes something they actually said", "Honest that not everyone qualifies", "Asks permission before showing how", "Mentions pricing comes after"]
        }
      ],
      today: { task: "Add the screening question and the red-flag note to your discovery sheet, and decide in writing what you'll do if a prospect fails it (book an educational follow-up, or pass).", output: "Updated sheet + 1-line rule", minutes: 15, suggested: false },
      check: [
        { q: "What is Jason's screening question?", a: "'What's the best marketing investment you've ever made?'" },
        { q: "What does it mean if they can't answer?", a: "You'd be their educator, not their media buyer." }
      ]
    },
    {
      id: "sal-12",
      part: "discovery",
      title: "Be the doctor: diagnose, check capacity, ask the KPI question",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "Be the doctor (Logan, 9/25); Logan's KPI question (10/9); 12. Being new", who: "Logan McKinney, 9/25, 10/9, 10/16/26" },
        { doc: "ZDub_Guide_01 V2", section: "5. Capacity check", who: "Calum Tresham, 10/6/26" },
        { doc: "9 New Calls Study Guide", section: "The call, step by step: step 6", who: "Tayt Shelman, 11/4/26" }
      ],
      idea: `Logan's frame (9/25, 10/16): **we're doctors.** Ask what hurts, react, keep them talking, then diagnose. You don't need to know their trade, just how to get them more business. "Our main mission is to solve problems."

**Diagnose before you prescribe.** Logan's barbershop example: 10 chairs, 3 empty, about $1,000 each = **$3,000 a month sitting empty.** But if the shop is already full of customers, the real fix might be a **hiring campaign** before customer ads. A doctor who prescribes the same pill to everyone loses patients.

**Check capacity.** Logan: "If you're thinking about a construction company, can they take on five more jobs this month?" Calum (10/6): "If we doubled your leads overnight, could you handle it?" You want a yes. A no may mean disqualify. Asking it also signals confidence. Tayt's version (11/4) makes them sell themselves: "If we get you 15 inspections, could you handle it? What would that do for you?"

**Ask the KPI question.** Logan called this the most important question to ask a client (10/9): **"If I did nothing else for you, what is the one thing you'd want to see from our relationship working together?"**

His card shop story: he assumed they wanted Instagram views. They actually wanted YouTube monetization. Three months of Instagram work "basically meant nothing" to them. Ask it in discovery or onboarding, never three months in.

If capacity is the bottleneck, Noah's answer (10/7) is to offer hiring ads tied to the revenue each new hire opens up.`,
      keyPoints: [
        "Ask what hurts, keep them talking, then diagnose.",
        "Find the real constraint: customers, staff or capacity.",
        "Capacity question: 'If we doubled your leads, could you handle it? What would that do for you?'",
        "KPI question: 'If I did nothing else, what's the one thing you'd want to see?'",
        "Ask the KPI question early, never three months in."
      ],
      why: `The KPI answer is what PMT and every future client will judge you on. Get it wrong and good work still looks like failure.`,
      example: {
        title: "The KPI question at PMT",
        body: `You might assume Chris wants more Instagram followers. Ask: "If I did nothing else for you, what's the one thing you'd want to see?" If he says "full weekend beginner courses from March to June," every ad, report and storyboard now points at seats filled per course date, not likes.`
      },
      practice: [
        {
          prompt: "Write the diagnosis for a prospect you could call this week: what hurts, the dollar size of it, the real constraint, and the capacity question you'd ask.",
          fields: ["Prospect", "What hurts (their words)", "Dollar size (like Logan's $3k of empty chairs)", "Real constraint: customers / staff / capacity", "My capacity question"],
          rubric: ["Pain is quantified in dollars per month", "Constraint is diagnosed, not assumed", "Capacity question asks what it would do for them"]
        }
      ],
      today: { task: "Ask Chris at PMT the KPI question (text or call) and write his exact answer at the top of PMT's client doc.", output: "PMT's KPI in his words", minutes: 15, suggested: false },
      check: [
        { q: "What is Logan's KPI question?", a: "'If I did nothing else for you, what is the one thing you'd want to see from our relationship working together?'" },
        { q: "In Logan's barbershop example, when would hiring ads come before customer ads?", a: "When the shop is already full of customers; the constraint is staff, not demand." }
      ]
    },
    {
      id: "sal-13",
      part: "discovery",
      title: "Find the buying trigger: what changed?",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-10-06",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "4. The buying trigger; Calum's question order", who: "Calum Tresham, 8/7 and 10/6/26" }
      ],
      idea: `Calum called the buying trigger the most important part of the call: "put an exclamation mark" on it (10/6).

**What it is:** the specific, recent "what changed" moment that turned a vague want into an urgent need. It's factor #2 of the closable factors (they want to change *now*).

**How you know you have it:** their tone shifts and they give you something **dated and personal.** "Our lead guy quit in September." "We lost the Elk Grove HOA contract last month." "My daughter starts college next fall."

**How to ask it:** with context. Calum says "fluff it out" instead of firing a blunt question: "Where did the idea come from to actually run ads? I'm sure you didn't just wake up... what happened, what changed?"

Ask it **after duration** (8/7): "This has been going on two years, what's changed more recently?" Calum called "why now and why not in a week?" a terrible question.

**Then dig:** has it happened before? When? Why?

**It isn't always pain.** It can be goal-driven: a new location, a new truck, a target for the year, a partner joining.

**Where you use it later:** objection handling. When they say "let me think about it," Calum's move is: "that reason isn't going to change if you think about it for a month." The trigger is still there next month. That's why it's urgent.

Influence note: the trigger is what makes urgency *real*. Real scarcity and real deadlines are ethical influence; invented ones aren't. See Mastery Guide Ch 4 on scarcity.`,
      keyPoints: [
        "Most important part of the call (Calum).",
        "Specific, recent, dated, personal. Tone shifts when you hit it.",
        "Ask with context, after duration.",
        "Dig: has it happened before, when, why.",
        "Can be a goal, not only pain. Reuse it in objections."
      ],
      why: `Without a trigger you have a curious prospect; with one you have a buyer. It's also your strongest answer to 'let me think about it'.`,
      alsoIn: ["Mastery Guide Ch 4 (Influence: scarcity) — persuasion tab"],
      example: {
        title: "Fluffed-out trigger question for a Placer County plumber",
        before: `"Why now?"`,
        after: `"So you've run on Google and referrals for about eight years and it's been fine. I'm guessing you didn't just wake up and decide to look at Facebook ads. What happened recently that got you thinking about it?" → "My second van's been sitting two days a week since August." → "Has that happened before? What did you do last time?"`
      },
      practice: [
        {
          prompt: "Role-play: write both sides of the trigger exchange (4 turns) for a Sacramento roofer. Include the dig questions.",
          fields: ["Me (fluffed-out trigger question)", "Roofer", "Me (dig: before? when? why?)", "Roofer", "The trigger in one line, as I'd write it in my notes"],
          rubric: ["Question gives context before asking", "Answer is dated and personal", "You dig at least once", "Trigger line could be quoted back at the close"]
        }
      ],
      today: { task: "Write 3 'fluffed-out' trigger questions (roofer, med spa, PMT-style school) and add the best one to your call checklist.", output: "3 trigger questions", minutes: 15, suggested: false },
      check: [
        { q: "How do you know you've found the buying trigger?", a: "Their tone shifts and they give you something dated and personal." },
        { q: "How do you use the trigger against 'let me think about it'?", a: "'That reason isn't going to change if you think about it for a month.'" }
      ]
    },
    {
      id: "sal-14",
      part: "discovery",
      title: "Goal, gap and the cost of doing nothing",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "5. Desired outcome, gap and cost of inaction", who: "Calum Tresham 10/6/26; Noah Wyman 10/7/26" },
        { doc: "9 New Calls Study Guide", section: "The call, step by step: steps 7–8", who: "Tayt Shelman 11/4/26; Noah Wyman 10/21/26" }
      ],
      idea: `After the trigger, you need three things: where they want to go, the distance between here and there, and what staying put costs.

**1. The goal, in business language.** Growth goals, revenue targets, team size, timeline. Calum: not "what do you want your life to look like" (10/6). Noah (10/21): "Six months from now, what does success look like? How do you see yourself getting there?" **Push for a revenue number,** or you have nothing to tie your price to. Noah's sharper version (10/7): "What number gets you *excited*?", not just happy.

**Timing matters.** Noah (10/7): "What would success look like?" is the right question at the wrong time if you ask it early. Ask it **right before the pitch** so you can anchor the price to it.

**2. The gap and the bottleneck.** Calum's non-negotiable (10/6): "What's been the biggest bottleneck stopping you getting there? How long has that been an issue?" Then: "Is that going to be an issue moving forward?" His logic: **the reason they haven't moved is the reason they won't buy today.** Surface it now.

**3. The pain, including the personal kind.** Tayt (11/4): "If you don't change anything, will you be in the same spot? How does that make you feel?" **The pain must make your fee look small.**

**4. Cost of inaction, in dollars.** "You would have made an extra X by now." Calum's caution: only use it when the numbers are big relative to their business (10/6).

Noah (10/7): "Why" is one of the most powerful sales questions you have. Use it after every goal they give you.`,
      keyPoints: [
        "Goal = a revenue number that excites them, asked right before the pitch.",
        "Bottleneck: 'What's stopping you? How long? Will it be an issue moving forward?'",
        "The reason they haven't moved is the reason they won't buy.",
        "Pain must make your fee look small (Tayt).",
        "Cost of inaction only when it's big relative to the business."
      ],
      why: `Your price only feels small next to a big, specific gap. This is where you build the gap.`,
      example: {
        title: "Gap math for an Elk Grove remodeler",
        body: `Now: $800k/yr. Goal: "$1.2M would get me excited." Gap: $400k/yr = ~$33k/month. Bottleneck: "I'm the only one who quotes, and half the leads are junk." Cost of inaction: "If nothing changes, next year looks like this year, $400k short." Against that, a $2,500/month retainer is small.`
      },
      practice: [
        {
          prompt: "Write the four questions in your own words, in order, and the gap statement you'd say back.",
          fields: ["Goal question (asks for an exciting number)", "Bottleneck question + follow-up", "Personal pain question", "Gap statement in dollars per month"],
          rubric: ["Goal is a number, not a feeling", "Bottleneck includes 'how long' and 'moving forward'", "Gap is converted to a monthly dollar figure", "Language is business, not life-coaching"]
        }
      ],
      today: { task: "Write PMT's gap in one sentence: students per month now vs Chris's goal, times revenue per student, per month.", output: "PMT gap statement in $/month", minutes: 15, suggested: false },
      check: [
        { q: "When should you ask 'What would success look like?'", a: "Right before the pitch, so you can anchor the price to it (Noah, 10/7)." },
        { q: "Why does Calum ask about the biggest bottleneck?", a: "The reason they haven't moved is the reason they won't buy today, so you surface and handle it." }
      ]
    },
    {
      id: "sal-15",
      part: "discovery",
      title: "Problem-unaware prospects: plant doubt, add friction",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-10-06",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "Seed-of-doubt questions (Calum, 10/6); Problem-unaware prospects (Calum, 8/7)", who: "Calum Tresham, 8/7 and 10/6/26" }
      ],
      alsoIn: ["Five awareness levels — copywriting tab"],
      idea: `Some prospects book a call and then downplay their problem. "Things are good, just exploring." Two tools from Calum.

**1. Seed-of-doubt questions (10/6),** best on word-of-mouth businesses:
- "Can you see that (word of mouth) working long term?"
- "Is it consistent across the year?"
- "Is that a lot for your headcount?" (opens capacity and gap)

Calum says **word-of-mouth businesses are the easiest to sell.** You can't 3x referrals on demand. Paid ads are putting money in a machine and getting more out, year-round. Sacramento trades have obvious seasonality (roofing in the rainy season, HVAC in summer and winter peaks), so "what happens in your slow months?" usually lands.

**2. Add friction and let them sell themselves (8/7).** Don't tiptoe because the lead cost you money. Calum's line: "Can I be honest with you... I actually don't know why you're even on this call today... why wouldn't you just run it again yourself?"

This feels risky but it flips the call. Now *they* explain why they need help, and their reasons are stronger than yours.

If they're with an agency now: "Why don't you just continue working with them?" Get the exact reason now so it can't be used against you at the end.

This is the sales-call side of the awareness problem: a problem-unaware prospect needs to discover the problem in their own words. The copywriting tab owns the awareness levels themselves.`,
      keyPoints: [
        "Word-of-mouth businesses are the easiest to sell; referrals can't be 3x'd on demand.",
        "Seed doubt: 'Is it consistent across the year?'",
        "Add friction: 'I don't know why you're even on this call... why not do it yourself?'",
        "Make them explain why they need help.",
        "Ask why they don't just stay with their current agency."
      ],
      why: `Most of your trades prospects live on referrals and think they're fine. These questions turn 'fine' into a real gap without you pushing.`,
      example: {
        title: "Friction with a 'we're fine' roofer",
        body: `Roofer: "We're pretty busy off referrals, just wanted to see what you guys do." You: "Can I be honest? From what you've told me, I'm not sure why you're on this call. Referrals are working. What made you book?" Roofer: "...well, June through September we're dead and I still have to pay four guys." Now you have the gap, in his words.`
      },
      practice: [
        {
          prompt: "Write 3 seed-of-doubt questions for a Sacramento trade, plus your own friction line.",
          fields: ["Trade", "Seed-of-doubt 1 (consistency)", "Seed-of-doubt 2 (long term)", "Seed-of-doubt 3 (headcount/capacity)", "My friction line"],
          rubric: ["Questions are about their business, not your service", "At least one references seasonality", "Friction line is honest, calm, and ends in a question"]
        }
      ],
      today: { task: "Practice the friction line out loud 5 times until it sounds calm, not snarky, and record the best take.", output: "Voice memo of your friction line", minutes: 15, suggested: false },
      check: [
        { q: "Which businesses did Calum call the easiest to sell?", a: "Word-of-mouth businesses, because you can't 3x referrals on demand." },
        { q: "What's the point of 'I don't know why you're even on this call'?", a: "Add friction so the prospect explains why they need help and sells themselves." }
      ]
    },
    {
      id: "sal-16",
      part: "model",
      title: "Commitment checkpoint #1: timing and decision maker",
      minutes: 7,
      tags: ["Mentor"],
      date: "2026-10-06",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "6. Commitment checkpoints: Checkpoint 1", who: "Calum Tresham, 10/6/26" },
        { doc: "9 New Calls Study Guide", section: "Practical details (one-call close, missing decision maker)", who: "Calum Tresham, 8/21/26" }
      ],
      alsoIn: ["Mastery Guide Ch 4 (Influence: commitment and consistency) — persuasion tab"],
      idea: `Before you explain what you'll do, lock two things. Calum (10/6):

> "This is something we can help with. Before I break down the solution, when do you actually want to put something in place? Who decides yay or nay? Do they need to be here?"

**Why before the solution?** You still have leverage. They don't know your price or exactly what you do yet. If another decision maker is needed, **stop and rebook with them present.**

**Rules:**
- **Never pitch someone who says "not for me, but curious."**
- **Never pitch someone who isn't the decision maker.**
- A **logistical** delay (moving money, it's Friday) is fine.
- But "ready now, nothing would stop us" followed by "give us 7 days" at the end is a **polite no.** Handle it as an objection.

**The 8/21 nuance (Calum, on Cam's live call):** a one-call close works when they're ready at the tie-down ("ready to start now? timeline? anyone else need to be here?"). If the decision maker turns out to be missing and you do continue, make it **you plus the prospect against the absent decision maker**, not you against them. "What do you think she'll ask? Let's get you the answers."

This is commitment and consistency (Mastery Guide Ch 4): once someone says out loud "I want this in place by March and I make the call," they want to act consistently with it later.`,
      keyPoints: [
        "Ask timing and decision maker BEFORE you present the solution.",
        "Missing decision maker → rebook with them present.",
        "Never pitch 'not for me, just curious'.",
        "Logistical delay = fine. 'Ready now' then 'give us 7 days' = polite no.",
        "If you continue without them: you + prospect vs the absent decision maker."
      ],
      why: `It's the cheapest way to prevent the most common end-of-call stall: 'I need to run it by my partner.'`,
      example: {
        title: "Checkpoint #1 with a Granite Bay pool builder",
        after: `"From everything you've said, this is something I think we can help with. Before I break down how, when do you actually want something running? ... Before spring, got it. And who decides yes or no on this, just you or is your wife involved? ... She handles the books. Would it make sense to grab 30 minutes when she can join, so you both see the numbers at once?"`
      },
      practice: [
        {
          prompt: "Write your checkpoint #1 line, plus your rebooking line for when a decision maker is missing.",
          fields: ["Checkpoint #1 (timing + decision maker)", "Rebook line when someone's missing", "What I'll say if I continue anyway (you + them vs absent DM)"],
          rubric: ["Comes before the solution", "Asks both timing and who decides", "Rebook line is easy to say yes to", "Continue-anyway line puts you on their side"]
        }
      ],
      today: { task: "Add checkpoint #1 to your call checklist between 'goal' and 'what we do', with the exact wording.", output: "Checklist updated", minutes: 10, suggested: false },
      check: [
        { q: "What two things does checkpoint #1 lock?", a: "When they want to put something in place (timing) and who decides yes or no (decision maker)." },
        { q: "Why ask before presenting the solution?", a: "You keep leverage; they don't yet know your price or exactly what you do, so rebooking costs nothing." }
      ]
    },
    {
      id: "sal-17",
      part: "model",
      title: "Money model before price: show them the math in their numbers",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-10-21",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "7. The money model", who: "Noah Wyman, 10/7/26" },
        { doc: "9 New Calls Study Guide", section: "The money model and projections: How to build it live; Noah's worked examples", who: "Noah Wyman, 10/21/26" },
        { doc: "ZDub_Guide_00 V2", section: "Principles that show up across calls #4: Numbers before price", who: "Calum 10/6, Noah 10/7, Jason 8/18" }
      ],
      idea: `This is the single most important tool for a new agency. Noah calls it "literally one of the most important parts" of the call and says it's **how beginners get around having no results** (10/21). It replaces case studies when you have none, because it's built from **data** (industry cost per lead and their own drop-off rates), not your conviction.

**Run it BEFORE you say a price.** Always.

**How to build it live (Noah, 10/21):**
1. **Recommend an ad spend,** e.g. $100/day = $3,000/month.
2. **Look up the average cost per lead** for their industry and city on Google, live, with your screen shared. "No need to guess."
3. **Leads = spend ÷ cost per lead.**
4. **Apply their drop-offs:** lead-to-estimate %, then close %. Noah's 10/7 rule: **run their stated close rate at HALF.**
5. **Closed jobs × average job value = revenue.** For repeat-purchase businesses, multiply by purchases per year.
6. **Revenue × profit margin, minus ad spend = extra profit.** (Step 6 was added on 10/21; the 10/7 version stopped at revenue. Teach the newer one: profit is what the owner cares about.)
7. **Run the numbers low.** If they push back, ask *which number looked too high*. If none did, they've agreed it makes sense.

**If the client has a goal** ("I just want one more pool a month"), **reverse-engineer the spend from it.** Ask what they're comfortable paying to acquire a customer.

**Make it visual.** Share your screen and write retainer, ad spend and projected return in a Google Doc or whiteboard. Noah built a sliding-scale projection dashboard with Claude (daily spend, CPL, % booking an estimate, close rate, AOV, margin) (10/7).

**For PMT** this is exactly Chris's "spend X, get Y people" storyboard: daily spend → cost per course signup → signup-to-registration rate (cut in half) → students → revenue per student.`,
      keyPoints: [
        "Money model before price. Every call.",
        "Spend ÷ CPL = leads → × lead-to-estimate → × close rate (at half) → × ticket = revenue.",
        "Revenue × margin − ad spend = extra profit (Noah, 10/21).",
        "Google the industry CPL live. Under-project.",
        "Pushback? 'Which number looked too high?'"
      ],
      why: `You have no agency case studies yet. A conservative model in the prospect's own numbers is your proof, and it makes a $2,500 retainer look small next to the profit.`,
      table: {
        head: ["Step", "Formula", "Worked roofer example (illustrative numbers)"],
        rows: [
          ["1. Ad spend", "Daily × 30", "$100/day × 30 = $3,000/month"],
          ["2. Cost per lead", "Google it live", "Example: $100 per lead (look up the real Sacramento figure)"],
          ["3. Leads", "Spend ÷ CPL", "$3,000 ÷ $100 = 30 leads"],
          ["4a. Estimates", "Leads × lead-to-estimate %", "30 × 50% = 15 inspections"],
          ["4b. Jobs", "Estimates × (stated close % ÷ 2)", "Stated 40% → run at 20%: 15 × 20% = 3 jobs"],
          ["5. Revenue", "Jobs × average ticket", "3 × $15,000 = $45,000"],
          ["6. Gross profit", "Revenue × margin", "$45,000 × 25% = $11,250"],
          ["6b. Extra profit after ads", "Gross profit − ad spend", "$11,250 − $3,000 = $8,250"],
          ["Then your fee", "Extra profit − retainer", "$8,250 − $2,500 = $5,750 net new profit per month"],
          ["Noah 10/7 example", "$2,000 ÷ $50 CPL", "40 leads → 50% = 20 estimates → 45% = 9 jobs × $20k = $180k"],
          ["Noah 10/21 remodeler", "$3,000 ÷ $100 CPL", "30 leads → 50% = 15 → 30% ≈ 4 jobs × $20k = $80k"],
          ["Noah 10/21 pool builder", "$1,400 ÷ $250 CPL", "5.6 leads → 20% close ≈ 1 job × $50k = the client's goal"],
          ["Noah 10/21 clothing brand", "$3,000 at $30 to acquire", "100 sales × $200 × 6/yr = $120k revenue ≈ $21k profit at 20% margin"]
        ]
      },
      example: {
        title: "Saying the roofer model out loud (illustrative numbers; Google the real CPL live)",
        body: `"Let's be conservative. At $100 a day, that's $3,000 a month. I just Googled it with you: roofing leads around here run about $100, so call it 30 leads. You said about half turn into an inspection, so 15. You told me you close 40%, but let's cut that in half to 20%. That's 3 roofs at your $15k average: $45,000. At your 25% margin that's about $11,250 profit, $8,250 after ad spend. Does any of those numbers look too high to you?"`
      },
      practice: [
        {
          prompt: "Script the money model for PMT with real or best-guess numbers. Show every step of the math.",
          fields: ["Daily spend → monthly", "Cost per course signup (source)", "Signups = spend ÷ cost", "Signup-to-registration % (stated, then halved)", "Students per month", "Revenue per student → revenue", "Margin → profit − ad spend = extra profit", "The sentence I'll say to Chris"],
          rubric: ["Every step shows the math", "Close/registration rate is cut in half", "Ends in profit after ad spend, not just revenue", "Numbers are conservative and sourced", "Finishes with 'which number looks too high?'"],
          model: "Illustrative only, swap in PMT's real numbers: $30/day = $900/mo. If a signup costs $15 → 60 signups. If 40% normally register, run at 20% → 12 students. At $X per student → 12X revenue. Profit = 12X × margin − $900. Say: 'At $30 a day, conservatively, that's about 12 students a month. Does any number look too high?'"
        },
        {
          prompt: "Reverse-engineer: a pool builder wants 1 extra pool a month ($50k ticket, 20% close, $250 CPL). What monthly spend does that need?",
          fields: ["My math", "The spend I'd recommend"],
          rubric: ["Jobs needed ÷ close rate = leads needed", "Leads × CPL = spend"],
          model: "1 job ÷ 20% = 5 leads. 5 × $250 = $1,250/month. Noah's version used $1,400 for 5.6 leads, about 1 job."
        }
      ],
      today: { task: "Build a reusable money model sheet in Google Sheets (spend, CPL, lead-to-estimate %, close % at half, ticket, margin, extra profit, retainer, net) with tabs for roofing, remodeling, HVAC and PMT.", output: "Money model sheet with 4 tabs", minutes: 45, suggested: true },
      check: [
        { q: "What close rate do you plug into the model?", a: "Their stated close rate cut in half (Noah, 10/7). Under-project." },
        { q: "What step did Noah add on 10/21?", a: "Revenue × profit margin, minus ad spend = extra profit." },
        { q: "What do you ask if they push back on the projection?", a: "'Which number looked too high?' If none did, they've agreed it makes sense." }
      ]
    },
    {
      id: "sal-18",
      part: "model",
      title: "Projection rules: three cases, separate ad spend, honest numbers",
      minutes: 9,
      tags: ["Mentor", "Disagreement"],
      date: "2026-10-21",
      source: [
        { doc: "9 New Calls Study Guide", section: "Projection rules (Jason, 6/10); Where mentors disagree: Projection numbers", who: "Jason Maulucci 6/10/26; Noah Wyman 10/21/26" }
      ],
      idea: `Once you can build a money model, Jason (6/10) has rules for making projections believable.

**1. Show three cases: bullish, likely and bearish.** The worst case should still look like a good deal. If your bearish case loses them money, your offer or your spend is wrong.

**2. Keep your fee separate from ad spend.** Ad spend is a business expense that buys the return. Jason's example: if $40k in ads makes $100k, paying you $10k still nets them about $50k they otherwise wouldn't have.

**3. Use the sales cycle to make spend feel safe.** If month-one spend returns inside the month, after that "we're playing with house money."

**4. Use real close rates.** Rasta lost a deal because his projection used a close rate far below what his clients actually got. Under-projecting is good; being disconnected from reality isn't.

**5. Welcome "where are you getting these numbers?"** Back them with screen-shared ad accounts, bank statements, case study videos or Loom walkthroughs. "Skepticism is at an all time high."

**The disagreement: where do the inputs come from?**

Jason (6/10) says base projections on **your own client results**, not industry averages. Noah (10/21) says **Google the industry cost per lead** live when you have no data.

These fit together by stage: use Noah's method now, while you have no ZDub client data. Switch to Jason's as soon as PMT and your first trades clients give you real CPLs and close rates. Either way, show the source on screen.`,
      keyPoints: [
        "Bullish / likely / bearish: worst case must still be a good deal.",
        "Fee and ad spend are separate lines.",
        "Sales cycle → 'house money' after month one.",
        "Welcome 'where are these numbers from?' and show the source.",
        "Disagreement: industry averages (Noah) vs your own data (Jason)."
      ],
      why: `A single rosy number invites suspicion. Three honest cases with visible sources build trust, which is exactly what a new agency is short on.`,
      table: {
        head: ["", "Jason (6/10)", "Noah (10/21)"],
        rows: [
          ["Projection inputs", "Your own client results, not industry averages", "Google the industry and city CPL live, 'no need to guess'"],
          ["Best for", "Once you have client data", "When you have no data yet"],
          ["How to show it", "Three cases + screen-shared proof", "Live search + run numbers low"]
        ]
      },
      example: {
        title: "Three cases for a Sacramento HVAC company ($3,000/month spend, $8k avg install, 25% margin)",
        body: `Bearish: $150 CPL → 20 leads → 40% to estimate = 8 → 15% close ≈ 1 install = $8k revenue, $2k profit. Roughly breakeven on ads, and the system is learning.\nLikely: $100 CPL → 30 → 12 → 20% ≈ 2–3 installs = $16–24k, $4–6k profit.\nBullish: $75 CPL → 40 → 16 → 25% = 4 installs = $32k, $8k profit.\n\n(Illustrative inputs. Notice the bearish case is thin: Jason's rule says adjust spend or offer until even the worst case is clearly worth it, or say honestly that month one is about learning.)`
      },
      practice: [
        {
          prompt: "Build three cases for one trade you want to sell. Change only CPL and close rate between cases.",
          fields: ["Trade + fixed inputs (spend, ticket, margin)", "Bearish (math)", "Likely (math)", "Bullish (math)", "Does the bearish case still look like a good deal? If not, what I'd change"],
          rubric: ["Math shown for each case", "Ad spend and fee listed separately", "Bearish case honestly assessed", "Sources named for CPL"]
        }
      ],
      today: { task: "Add bearish / likely / bullish columns to your money model sheet so one input change updates all three.", output: "3-case model", minutes: 25, suggested: false },
      check: [
        { q: "What three cases does Jason show?", a: "Bullish, likely and bearish; the worst case should still look like a good deal." },
        { q: "Why did Rasta lose a deal?", a: "His projection used a close rate far below what his clients actually got." }
      ]
    },
    {
      id: "sal-19",
      part: "model",
      title: "Speed sells: show how spend changes the time to a customer",
      minutes: 6,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Speed sells (Tayt, 11/4); Where mentors disagree: Minimum ad spend", who: "Tayt Shelman 11/4/26; Paul 7/28; Cam 10/29; Noah 10/21" },
        { doc: "9 New Calls Study Guide", section: "Build the offer around an outcome", who: "Jason Maulucci, 6/10/26" }
      ],
      idea: `Prospects often try to start with tiny ad spend to "test it." Tayt (11/4) answers with a simple time calculation.

**If it costs about $1,000 to get a roofing customer:**
- $25/day = $750/month → **40 days** to get one customer.
- $100/day = $3,000/month → **10 days** to get one.

Then ask: **"Would you rather have a client in 10 days or 40 days?"**

Tayt suggests about $100/day for roofers, and says warm-up only matters at $500 to $1,000/day.

This connects to Jason's point (6/10): **people pay for speed.** The same result in 90 days beats 12 months. It's also cross-call principle #9: "money loves speed" (Jason, 8/18).

**Where the floors differ (minimum ad spend):** Paul (7/28): $50/day or don't take the client. Cam (10/29): $30/day floor for tight budgets, with no guarantee. Tayt (11/4): $100/day for roofers. The study guide's resolution, which keeps you out of picking a side: **reverse-engineer from the client's goal with the money model** (Noah, 10/21). The goal and the cost per customer tell you the spend; the time-to-customer math tells them why less is slower.

Ad spend is always separate from your fee, and on free trials the client still pays it (Noah 10/21, Cam 10/29).`,
      keyPoints: [
        "Cost per customer ÷ daily spend = days to a customer.",
        "'Would you rather have a client in 10 days or 40?'",
        "Tayt: ~$100/day for roofers.",
        "Floors differ (Paul $50, Cam $30, Tayt $100): reverse-engineer from the goal.",
        "Ad spend is separate from your fee, even on trials."
      ],
      why: `Under-funded accounts produce slow, thin results that look like failure. This math lets you push for the right spend without sounding greedy.`,
      table: {
        head: ["Daily spend", "Monthly", "Days to 1 customer at $1,000 CAC"],
        rows: [["$25", "$750", "40"], ["$50", "$1,500", "20"], ["$100", "$3,000", "10"]]
      },
      example: {
        title: "PMT version",
        body: `If a registered student costs about $60 to acquire (illustrative), $10/day gets one student every 6 days, about 5 a month. $30/day gets one every 2 days, about 15 a month. Ask Chris: "How many open seats do you have on the next three course dates? Let's fund it to fill them before the date, not after."`
      },
      practice: [
        {
          prompt: "Do the time-to-customer math for two prospects and write the question you'd ask.",
          fields: ["Prospect 1: cost per customer, two spend levels, days each", "Prospect 2: cost per customer, two spend levels, days each", "My 'would you rather' question"],
          rubric: ["Days = cost per customer ÷ daily spend", "Two spend levels compared", "Question is about their time, not your fee"]
        }
      ],
      today: { task: "Add a 'days to first customer' row to your money model sheet (CAC ÷ daily spend).", output: "Updated sheet", minutes: 15, suggested: false },
      check: [
        { q: "At $1,000 per roofing customer, how long does $25/day take vs $100/day?", a: "40 days vs 10 days." },
        { q: "How does the study guide resolve the minimum-spend disagreement?", a: "Reverse-engineer the spend from the client's goal with the money model (Noah, 10/21)." }
      ]
    },
    {
      id: "sal-20",
      part: "model",
      title: "The confidence scale and asking permission to talk price",
      minutes: 7,
      tags: ["Mentor"],
      date: "2026-10-21",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "7. The money model: Then (1–3)", who: "Noah Wyman, 10/7/26" },
        { doc: "9 New Calls Study Guide", section: "The call, step by step: steps 10–11", who: "Noah Wyman, 10/21/26" }
      ],
      idea: `Right after the money model, Noah runs three moves (10/7, repeated 10/21):

**1. "On a scale of 1 to 10, how confident are you we can hit those numbers?"**

**2. "What can I say to get you to a 10?"** Then handle whatever comes up. This pulls hidden doubts out *before* the price, while they're still about the plan and not about money.

**3. "Want me to go into what the investment looks like?"** Asking permission to drop the price opens their mind and shifts them into **investment thinking**. Noah's analogy: a $2,000 Ferrari vs a $500 steak. Attached value makes the price feel cheap. The steak is expensive; the Ferrari is a steal.

**Then pitch** (Noah, 10/21): ads, organic (ads to weak profiles lose results), funnel fixes. Finish with **"Does that make sense?"** and **"Where are you at on the investment?"** Never "Any questions for us?"

**If the prospect starts asking all the questions,** take the frame back (Noah, 10/7): "Before the nitty gritty, are you confident we can get you the results? What would get you from maybe to yes?"

How to read the number:
- **9–10:** move to tie-downs and price.
- **6–8:** "What would make it a 10?" Their answer is your next three minutes.
- **Under 6:** something big is missing (usually trust or a wrong number in the model). Go back to the model: "Which part feels off?"`,
      keyPoints: [
        "'1 to 10, how confident are you we can hit those numbers?'",
        "'What can I say to get you to a 10?'",
        "'Want me to go into what the investment looks like?'",
        "Ferrari vs steak: attached value makes price feel cheap.",
        "Take the frame back: 'What would get you from maybe to yes?'"
      ],
      why: `It surfaces doubts while they're cheap to fix, and makes the price a requested next step instead of a surprise.`,
      example: {
        title: "Getting a 7 to a 10 with a Roseville roofer",
        body: `"About a 7." → "What would make it a 10?" → "I've just never seen Facebook bring in roof replacements, only repairs." → "Fair. Two things: the ads will call out replacements specifically, and I'll qualify every lead on the phone before it hits your calendar. Does that move you?" → "Yeah, 9." → "Want me to go into what the investment looks like?"`
      },
      practice: [
        {
          prompt: "Role-play both sides: the prospect answers 6. Write 4 turns that get to permission for price.",
          fields: ["Me: confidence question", "Prospect: 6, and why", "Me: 'what would make it a 10?' + my answer to their doubt", "Prospect", "Me: permission to talk investment"],
          rubric: ["The doubt is specific and you answer it directly", "You don't mention price before asking permission", "Permission question is a yes/no question"]
        }
      ],
      today: { task: "Write your three post-model questions on a sticky note and put it on your monitor next to the call checklist.", output: "Sticky note with 3 questions", minutes: 10, suggested: false },
      check: [
        { q: "What two questions follow the money model?", a: "'On a scale of 1 to 10, how confident are you we can hit those numbers?' and 'What can I say to get you to a 10?'" },
        { q: "Why ask permission before giving the investment?", a: "It opens their mind and shifts them to investment thinking (Noah's Ferrari vs steak analogy)." }
      ]
    },
    {
      id: "sal-21",
      part: "model",
      title: "Commitment checkpoint #2: tie-downs before the price",
      minutes: 7,
      tags: ["Mentor"],
      date: "2026-10-06",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "6. Commitment checkpoints: Checkpoint 2", who: "Calum Tresham, 8/7 and 10/6/26" }
      ],
      alsoIn: ["Mastery Guide Ch 4 (Influence: commitment and consistency, 50 small yeses) — persuasion tab"],
      idea: `Before you say a number, separate **offer concerns** from **price concerns.** Calum (10/6):

> "Is that all making sense? Do you believe it'll help you? Anything else you want to ask before I break it all down?"

After this, the only objections left should be **money logistics** (they don't have it right now) or **money fear** (they have it but are scared it won't work). Everything about the offer, the plan and you is already on the table.

Calum's 8/7 version, same idea in different words: after presenting deliverables, stop and ask what they think. "I'll run you through the investment... that conversation is irrelevant if you don't even think we can help you."

**Why it works:** each yes is a small public commitment. When someone has just said "yes, I believe this will help me," saying "I don't think it'll work" two minutes later is inconsistent, and people work hard to stay consistent. That's Cialdini's commitment-and-consistency principle (Mastery Guide Ch 4; persuasion tab owns it).

**Don't fake it.** If they say "not sure it'll help," that's gold, not failure. Stop and find out why before any price is spoken. Price on top of doubt gets you "let me think about it."

This checkpoint is different from Calum's **three tie-downs** in the objection lesson (8/21). Checkpoint #2 comes *before* the price; the three tie-downs are what you use *after* anything other than a yes.`,
      keyPoints: [
        "Ask before price: 'Making sense? Believe it'll help? Anything else before I break it down?'",
        "Separates offer doubts from price doubts.",
        "After it, only money logistics or money fear remain.",
        "A 'not sure' here is a gift: dig before quoting.",
        "Built on commitment and consistency."
      ],
      why: `It's the difference between hearing 'too expensive' (fixable) and 'let me think about it' (vague, usually lost).`,
      example: {
        title: "Checkpoint #2 with a Sacramento med spa owner",
        after: `"So: Meta ads calling out Midtown women 30–55 for the new laser package, every lead texted in under a minute, and a weekly numbers report. Is that all making sense? ... And do you believe this would help you fill those Tuesday and Wednesday slots? ... Great. Anything else you want to ask before I break down the investment?"`
      },
      practice: [
        {
          prompt: "Write your checkpoint #2 for the ZDub offer, and what you'll say if they answer 'not sure' to 'do you believe it'll help?'",
          fields: ["My checkpoint #2 (3 questions)", "If they say 'not sure': my next question"],
          rubric: ["Three questions, last one invites remaining questions", "No price mentioned", "'Not sure' response digs for the reason with a question"]
        }
      ],
      today: { task: "Role-play checkpoint #2 out loud with a friend or AI as the prospect, 3 times, once where they say 'not sure'.", output: "3 reps logged in the call review tracker", minutes: 20, suggested: false },
      check: [
        { q: "What are Calum's checkpoint #2 questions?", a: "'Is that all making sense? Do you believe it'll help you? Anything else you want to ask before I break it all down?'" },
        { q: "After checkpoint #2, what objections should be left?", a: "Only money logistics or money fear." }
      ]
    },
    {
      id: "sal-22",
      part: "model",
      title: "Say the price, then go silent",
      minutes: 10,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "8. Presenting the price", who: "Calum Tresham 10/6/26; Noah Wyman 10/7/26" },
        { doc: "9 New Calls Study Guide", section: "The call, step by step: step 12; Where mentors disagree: When to reveal price", who: "Tayt 11/4, Noah 10/21, Calum, Cam 10/29/26" }
      ],
      alsoIn: ["Guarantees & free trials — offers tab"],
      idea: `**1. Next-steps phrase first,** so the payment ask is no surprise. Calum (10/6): "I'll run you through the fee, get the agreement and invoice sent, then book an onboarding call to get you set up with our team. Sound good?" (If you're solo, say "get you set up," not "our team." Logan: don't imply a team you don't have.)

**2. The pitch shape** (Calum, for businesses over about $20k/month profit): "Based on your numbers you're at X, capacity to Y, gap of Z per month. Fee is this, to generate this many leads. At your close rate you net about this much extra profit. ROI is this. Payment is simple, wire or card via link. What's preferred?" **Then silence.** (His version for smaller businesses is in a doc not in the files.)

**3. Silence.** Never end with "any questions?" Don't drop the price because silence is uncomfortable. "Be comfortable being uncomfortable."

**4. Guarantee right after the price,** before they talk (Noah, 10/7). Don't throw ad spend, retainer or rev-share numbers out before they know what you do. Which guarantee fits your stage is owned by the offers tab.

**5. Assume the close** (Tayt, 11/4): "Next steps would be onboarding..." with the payment link ready.

Only pitch when you know you can help. Conviction comes through (Calum).

**When to reveal price is a real disagreement.** Noah and Calum put the price on call one after the money model (student Lucas closed in 55 minutes). Cam (10/29) held price across two calls on $6k–$9k offers to keep curiosity. The study guide notes Cam said lower prices face far fewer objections, which fits a one-call close at a $2k–$3k level, but both approaches are mentor-taught.`,
      keyPoints: [
        "Next-steps phrase → price → guarantee → silence.",
        "Pitch shape: now X, capacity Y, gap Z, fee, leads, extra profit, ROI, how do you want to pay?",
        "Never 'any questions?' Be comfortable being uncomfortable.",
        "Assume the close with the payment link ready.",
        "Disagreement: price on call one (Noah/Calum) vs held across two calls (Cam)."
      ],
      why: `The few seconds after the price decide most deals. Most new sellers lose them by talking.`,
      table: {
        head: ["", "Noah & Calum", "Cam (10/29)"],
        rows: [
          ["When price is revealed", "Call one, after the money model", "Held across two calls"],
          ["Offer size discussed", "Retainers in the $1.5k–$5k range on the calls", "$6k–$9k offers"],
          ["Reason", "Momentum; one-call close when they're ready at the tie-down", "Keeps curiosity; lower prices face far fewer objections"]
        ]
      },
      example: {
        title: "Full price close for a Folsom roofer",
        after: `"Next steps are simple: I'll walk you through the fee, send the agreement and invoice, and we'll book onboarding this week. Sound good? ... Based on your numbers you're doing about 6 roofs a month and can handle 10. That gap is about $60k a month in revenue. The fee is $2,500 a month plus your ad spend, to bring you 25–30 leads. Even at half your close rate, that's around $8k extra profit after ads. And if we don't hit [guarantee terms], [what happens]. Card or ACH, what's easier?" (silence)`
      },
      practice: [
        {
          prompt: "Script your full price close for the ZDub offer, in Calum's shape, then mark where you'll go silent.",
          fields: ["Next-steps phrase", "Now X / capacity Y / gap Z", "Fee + what it generates", "Extra profit + ROI", "Guarantee line", "Payment question → [SILENCE]"],
          rubric: ["Next steps come before the number", "Uses the prospect's own numbers", "Guarantee comes right after the price", "Ends in a payment-method question, not 'any questions?'", "No implied team if solo"]
        }
      ],
      today: { task: "Record yourself delivering the price close, then sit in silence for a full 10 seconds after it. Repeat 3 times until the silence feels normal.", output: "3 recorded reps", minutes: 15, suggested: false },
      check: [
        { q: "What should never come right after your price?", a: "'Any questions?' or talking to fill the silence (or dropping the price)." },
        { q: "When does Noah say to mention the guarantee?", a: "Right after the price, before they talk." },
        { q: "Who holds price across two calls, and on what size offers?", a: "Cam, on $6k–$9k offers, to keep curiosity." }
      ]
    },
    {
      id: "sal-23",
      part: "objections",
      title: "Hold the frame: snap back when they start interviewing you",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Running the sales call: Holding the frame", who: "Noah Wyman 10/21/26; Tayt Shelman 11/4/26" },
        { doc: "ZDub_Guide_01 V2", section: "9. Objection handling: 'How much?' asked early", who: "Calum Tresham, 10/6/26" }
      ],
      idea: `Whoever asks the questions runs the call. Your job is to keep it that way without being rude.

**Silence after their answer hands them control** and they start interviewing you. Noah's snap-back (10/21): **"100%, we can go into that in a second. Before we go into that, I need to make sure this is a good fit."**

**"How much?" asked early.** Two mentor answers:
- Noah (10/21): "If I were you, I'd be on the edge of my seat wondering what we do and what it costs," then explain it makes sense to project what you could make them first.
- Calum (10/6): "If I called you to ask what my roof costs, what would you say? ...Exactly, it's custom." If they insist, give a range ($1,500 / $3,000 / $5,000 a month depending on where you are and where you want to get). **Always end the reframe with a question and move on.**

**"Send me case studies."** Noah (10/21): "What specifically are you looking to get out of me opening up case studies?" Then walk them through it yourself instead of sending files into silence.

**"I could run ads myself."** Noah (10/21): "If you ran the ads, what would you do?" They usually can't answer well, and now they know it.

**Pull back a little.** Tayt (11/4): "I'm pretty busy, the last thing I want is to waste your time... is that fair?" He calls it Tom and Jerry: a bit of chase on both sides.

**Partnership language.** Tayt: "I want to work with you 6, 9, 12 months, two years." Every business is sales, marketing and operations, and you own the marketing piece.

**Call out contradictions.** Tayt's prospect said budget was tight after describing $30k–$40k profit over two months: "So what do you mean budget is tight?"`,
      keyPoints: [
        "Snap back: '100%, we'll get to that. First I need to make sure this is a good fit.'",
        "'How much?' early → it's custom, give a range if pressed, end with a question.",
        "'Case studies?' → 'What specifically do you want to get out of them?'",
        "'I'll run them myself' → 'What would you do?'",
        "Pull back (Tom and Jerry), use partnership language, call out contradictions."
      ],
      why: `New sellers lose the frame by answering every question the second it's asked. These lines let you stay polite and still in charge.`,
      example: {
        title: "Early price question from a Sacramento flooring owner",
        before: `Owner (minute 4): "So what do you charge?" You: "Oh, uh, it's $2,500 a month plus ad spend." (Now every answer he gives is filtered through that number.)`,
        after: `"Totally fair, if I were you I'd be wondering the same thing. It's custom, a bit like if I asked what a floor costs. It depends where you are and where you want to get, and I'd rather show you what this could make you before we talk cost. So, how are most of your jobs coming in right now?"`
      },
      practice: [
        {
          prompt: "Write your snap-back line for each frame grab.",
          fields: ["'How much?' at minute 3", "'Can you send me case studies?'", "'Couldn't I just run ads myself?'", "Long silence after their answer", "Budget is 'tight' but numbers say otherwise"],
          rubric: ["Each acknowledges the question first", "Each ends with a question that returns to your agenda", "No price given before the money model unless pressed (then a range)", "Tone is curious, not defensive"]
        }
      ],
      today: { task: "Write all five snap-backs on one index card and run each out loud twice.", output: "Snap-back card", minutes: 15, suggested: false },
      check: [
        { q: "What's Noah's snap-back line when the prospect starts interviewing you?", a: "'100%, we can go into that in a second. Before we go into that, I need to make sure this is a good fit.'" },
        { q: "What range does Calum give if a prospect insists on price early?", a: "$1,500 / $3,000 / $5,000 a month depending on where they are and where they want to get, ending with a question." }
      ]
    },
    {
      id: "sal-24",
      part: "objections",
      title: "Calum's three tie-downs: every objection is money or fear",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-08-21",
      source: [
        { doc: "9 New Calls Study Guide", section: "Objection handling: Calum's three tie-downs", who: "Calum Tresham, 8/21/26 (review of Cam's live call)" },
        { doc: "ZDub_Guide_01 V2", section: "9. Objection handling (intro)", who: "Calum Tresham, 10/6/26" }
      ],
      alsoIn: ["Mastery Guide Ch 4 (Influence: commitment and consistency) — persuasion tab"],
      idea: `Calum's rule from reviewing Cam's live call (8/21): **"All you need to get is the truth."** At the end of a call, every objection is either **money** or **fear.** Your job isn't to win an argument; it's to find out which one it really is.

On 10/6 he added: objection handling comes from **confidence, conviction and what you know**, not memorized word tracks.

**The three tie-downs, the moment you get anything other than a yes:**

1. **"Do you feel like this can get you a better result? Why?"** Let them sell themselves. The "why" matters: their reasons are more convincing to them than yours.
2. **"Are you willing to do everything within your power to make it work?"** Name what your offer needs: filming, putting staff on camera, calling leads within minutes.
3. **"If those two things align, help me understand what's holding you back."** Now you hear the real objection.

**Why it works:** the first two get a yes on belief and effort. That clears away fake objections. Whatever's left after #3 is the truth, and it's almost always money (don't have it) or fear (have it, scared it won't work). Those are handled very differently, which the next lessons cover.

Older version (10/6), same structure: "Let me think about it" → recheck: you believe it'll help? You're committed to doing your part? "Help me understand, if those two align, what's actually holding you back?"

Note: if they say **no** to #1 or #2, you've learned something important. A no on #1 is a trust problem: go back to the model. A no on #2 means they're not a fit; part ways politely.`,
      keyPoints: [
        "'All you need to get is the truth.'",
        "End-of-call objections = money or fear.",
        "1: 'Can this get you a better result? Why?'",
        "2: 'Willing to do everything in your power to make it work?'",
        "3: 'If those align, help me understand what's holding you back.'"
      ],
      why: `It's three questions you can memorize tonight that work on every objection, so you never need a binder of word tracks.`,
      example: {
        title: "Tie-downs with a Rancho Cordova HVAC owner who says 'let me think about it'",
        body: `"Totally fair. Can I ask two quick things? Do you feel like this can get you more install jobs than you're getting now? ... Why? ... ('Because the referrals dry up every October.') And are you willing to call leads back within five minutes and let us film a 30-second clip with your techs? ... Yes. So if those two line up, help me understand what's actually holding you back." → "Honestly, I'm worried about spending $3k on ads and getting nothing." That's fear. Now you can handle it.`
      },
      practice: [
        {
          prompt: "Role-play: write both sides of the three tie-downs with a PMT-style owner who says 'let me sit on it'.",
          fields: ["Owner: objection", "Me: tie-down 1", "Owner (with why)", "Me: tie-down 2 (name what the offer needs)", "Owner", "Me: tie-down 3", "Owner: the real objection", "Money or fear? How I know"],
          rubric: ["Tie-down 1 includes 'why'", "Tie-down 2 names specific client actions", "Tie-down 3 uses 'if those two align'", "You correctly label the real objection"]
        }
      ],
      today: { task: "Write Calum's three tie-downs and the money-or-fear split on a card next to your screen.", output: "Tie-down card", minutes: 10, suggested: true },
      check: [
        { q: "What are the only two end-of-call objections, per Calum?", a: "Money or fear." },
        { q: "What is tie-down #3?", a: "'If those two things align, help me understand what's holding you back.'" }
      ]
    },
    {
      id: "sal-25",
      part: "objections",
      title: "Money objections: don't have it, won't spend it, or 'that's steep'",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-21",
      source: [
        { doc: "9 New Calls Study Guide", section: "Objection handling: Then, by objection (money)", who: "Calum Tresham 8/21/26; Noah Wyman 10/21/26" },
        { doc: "ZDub_Guide_01 V2", section: "9. Objection handling table: 'That's steep', budget capped, ad spend risky, wrong benefit", who: "Calum Tresham, 8/7 and 10/6/26" }
      ],
      alsoIn: ["Discounting & self-confession — offers tab"],
      idea: `Once tie-downs tell you it's money, split it with Calum's question (8/21):

**"Is it that you don't have the money right now, or you have it but don't want to invest it?"**

**If they truly don't have it:** build a payment structure, but first: **"If I break that down, are you ready to move forward?"** Close once they say yes. If they stall after that yes: "Three minutes ago you said... sounds like you're a bit scared. Where does that come from?" (that's now fear, next lesson).

**If they have it but won't invest it:** that's a value problem. Noah (10/21): out of budget from someone who can clearly afford it = **tie the service back to money.** Go back to the money model.

**"That's steep" / "that's a lot"** (Calum, 8/7): cut in with **"What do you mean by steep?"** Make them justify it and keep the conversation on the investment. Reframe cost as investment: if a Ferrari were $3,000 you'd find the money.

**"My budget is capped at $1,500"** (Calum, 8/7): ask **who set the budget and why it's capped.** Never drop price just because they don't want to pay; only if they genuinely can't *and* definitely want to work with you. Tasteful version: "This month $1,500, but if I get you X result, the following month we go to [full price], because that's what my service costs." Don't discount the wishy-washy prospect; he won't buy anyway. (The offers tab owns the full discounting and self-confession rules.)

**"Ad spend feels risky"** (Calum, 10/6): a slot machine that pays $350 for every $100. Would you play it?

**Selling the wrong benefit** (Calum, 8/7): sell **making them more money**, not saving them time. "People buy with emotion, justify with logic," but if the money doesn't make sense nothing else matters.`,
      keyPoints: [
        "Split: 'Don't have it, or have it but don't want to invest it?'",
        "Don't have it → payment structure, but get 'ready to move forward?' first.",
        "Have it → value problem: back to the money model.",
        "'What do you mean by steep?' / 'Who set the budget and why?'",
        "Never cut price just to close; tie any step-down to a result and full price after."
      ],
      why: `At $2,000–$3,000 a month, money objections will be your most common. Splitting logistics from value tells you whether to restructure or re-sell.`,
      table: {
        head: ["They say", "It really is", "Your move"],
        rows: [
          ["'Don't have it right now'", "Money logistics", "'If I break that down, ready to move forward?' → payment structure"],
          ["'Out of budget' (but profitable)", "Value problem", "Tie it back to money: revisit the model"],
          ["'That's steep'", "Unclear", "'What do you mean by steep?'"],
          ["'Budget is capped at $1,500'", "Someone set a rule", "'Who set it and why?' Step-down only tied to a result"],
          ["'Ad spend is risky'", "Fear dressed as money", "Slot machine: $350 back per $100"]
        ]
      },
      example: {
        title: "'Too much' from a Sacramento roofer doing $40k/month profit",
        body: `"What do you mean by too much?" → "Just more than I wanted to spend." → "Is it that the money isn't there right now, or it's there and you're not sure it's worth it?" → "It's there." → "Okay. Earlier you said three extra roofs a month would change your year, and we worked out that's about $8k extra profit after ads. Which part of that math doesn't feel right?"`
      },
      practice: [
        {
          prompt: "Write your answer to each money objection in your own words, ending each with a question.",
          fields: ["'That's steep'", "'I don't have it right now'", "'My budget is capped at $1,500'", "'I'm worried about wasting ad spend'", "'It'll save me time, but...' (wrong benefit fix)"],
          rubric: ["Each ends with a question", "No automatic price cut", "Any step-down is tied to a result and a return to full price", "Value answers point back to their numbers"]
        }
      ],
      today: { task: "Write your own 'slot machine' reframe using a real local trade's numbers (e.g. $100 in ads → how many $ back for a roofer), and add it to your objection card.", output: "1 reframe in your words", minutes: 15, suggested: false },
      check: [
        { q: "What question splits money objections?", a: "'Is it that you don't have the money right now, or you have it but don't want to invest it?'" },
        { q: "When does Calum allow a lower price?", a: "Only if they genuinely can't pay and definitely want to work with you, tied to a result with full price after." }
      ]
    },
    {
      id: "sal-26",
      part: "objections",
      title: "Fear and trust objections: proof, past agencies, 'I'll do it myself'",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-29",
      source: [
        { doc: "9 New Calls Study Guide", section: "Objection handling: Then, by objection (fear test, proof requests, do it myself)", who: "Calum Tresham 8/21/26; Cam 10/29/26" },
        { doc: "ZDub_Guide_01 V2", section: "9. Objection handling table", who: "Noah Wyman 10/7/26; Calum Tresham 10/6/26" }
      ],
      alsoIn: ["Mastery Guide Ch 4 (Influence: social proof, authority) — persuasion tab", "Guarantees & free trials — offers tab"],
      idea: `Fear objections sound like information requests. They aren't.

**The fear test** (Calum, 8/21): **"If you knew we'd get you 100 leads in 30 days, would you do it right now?"** A yes means it's fear, not money. Follow with **"What are you most worried about?"**

**Proof requests at the end** (testimonials, reviews) are a **trust problem, not an information need** (Calum, 8/21). His example: Airbnb has terrible Trustpilot scores and people still book. Ask how many times someone needs to see a result for it to work: once.

**"Send me case studies" when you have none** (Noah, 10/7): offer something risk-free (a defined trial or a guarantee) until you have your first case study. Which risk reversal fits ZDub's stage is owned by the offers tab.

**"Have you worked with an AC company?"** (Noah, 10/7): "I haven't, and I want you to be that one. If I had, it'd be a conflict of interest and we wouldn't be on this call." Then show how the system applies.

**"We worked with 2 agencies before, didn't work"** (Noah, 10/7): put it back on them: "What would I need to do for this to work? What does a successful partnership look like?"

**Distrust after a bad agency** (Calum, 10/6): "How will you ever know if you don't try?"

**"I'll just do it myself first"** (Cam, 10/29): if you try it yourself and fail, you won't want to keep doing it. "You really have like one real shot at this."

**Capacity fear ("I can't hire fast enough")** (Noah, 10/7): offer hiring ads and tie them to the revenue each new hire opens up.`,
      keyPoints: [
        "Fear test: 'If you knew we'd get you 100 leads in 30 days, would you do it now?'",
        "Then: 'What are you most worried about?'",
        "Late proof requests = trust problem, not information.",
        "No case studies → risk-free structure until you have one.",
        "'I'll do it myself' → you get one real shot."
      ],
      why: `As a new agency with no trades case studies, you'll hear 'do you have proof?' constantly. Treating it as fear, not missing data, is what closes.`,
      example: {
        title: "Fear test with a Davis landscaper",
        body: `"Can you send me some reviews first?" → "Sure. Quick question though: if you knew for certain we'd get you 40 leads in 30 days, would you start today?" → "Yeah, probably." → "So it's not the money, it's whether it'll actually work. What are you most worried about?" → "That I'll pay and the leads will be junk." → Now address lead quality directly: qualifying questions on the form, you calling every lead, and the guarantee terms.`
      },
      practice: [
        {
          prompt: "Role-play both sides: a Sacramento roofer asks for case studies at the end. Use the fear test and get to the real worry.",
          fields: ["Roofer: proof request", "Me: fear test", "Roofer", "Me: 'what are you most worried about?'", "Roofer: real worry", "Me: my answer + risk reversal"],
          rubric: ["You don't just send files", "Fear test is asked as a yes/no", "Real worry is specific", "Answer addresses that worry directly, honestly (no invented results)"]
        },
        {
          prompt: "Write your honest 'Have you worked with a [trade] before?' answer for 3 trades.",
          fields: ["Trade 1", "Trade 2", "Trade 3"],
          rubric: ["Honest about having or not having experience", "Turns it into 'I want you to be the one'", "Shows how the system applies"]
        }
      ],
      today: { task: "Write the fear test and your 'no case studies yet' answer (what you offer instead) on your objection card.", output: "2 lines added", minutes: 15, suggested: false },
      check: [
        { q: "What is Calum's fear test?", a: "'If you knew we'd get you 100 leads in 30 days, would you do it right now?' A yes means fear, not money." },
        { q: "What does Calum say a late request for reviews really is?", a: "A trust problem, not an information need." }
      ]
    },
    {
      id: "sal-27",
      part: "objections",
      title: "Stalls: 'let me think about it', 'talk to my wife', 'give us a week'",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "9. Objection handling table; 6. Checkpoint 1", who: "Calum Tresham 8/7 and 10/6/26; Noah Wyman 10/7/26" },
        { doc: "9 New Calls Study Guide", section: "The call, step by step: step 1; Then, by objection (stalling after yes)", who: "Tayt 11/4/26; Calum 8/21/26" }
      ],
      idea: `Stalls are the most common way a qualified call ends without a sale. Most are prevented earlier; the rest you handle with questions.

**"Let me think about it"** (Calum, 10/6): recheck the two tie-downs. You believe it'll help? You're committed to doing your part? Then: **"Help me understand, if those two align, what's actually holding you back?"** And bring back the trigger: "that reason isn't going to change if you think about it for a month."

**"I need to talk to my wife/partner"**:
- **Prevent it.** Ask about decision makers early (Noah, 10/7) and confirm they'll attend the day before (Tayt, 11/4). Then it loses its power: "we had this conversation."
- **Noah's questions (10/7):** "What role does she play in the business?" / "What questions do you think she'd have?" / "Bring her a problem or a solution."
- **Calum's distinction (8/7):** usually not real, but can be genuine with shared finances. Probe whether they need **permission** or just **approval.** Approval: still go for it. Genuine permission on a shared account: reasonable; book the follow-up with her on it.

**"Give us 7 days"** after "ready now, nothing would stop us" is a polite no (Calum, 10/6). A logistical delay (moving money, it's Friday) is fine. Anything else, handle.

**Stalling right after a yes** (Calum, 8/21): "Three minutes ago you said... sounds like you're a bit scared. Where does that come from?"

**Don't let a stall end the call without a next step.** Book the follow-up while you're both on the line.`,
      keyPoints: [
        "'Think about it' → recheck belief + commitment → 'what's actually holding you back?'",
        "Prevent the spouse stall by confirming decision makers early and the day before.",
        "Permission vs approval (Calum).",
        "'Ready now' then '7 days' = polite no. Logistics = fine.",
        "Never end on a stall without a booked next step."
      ],
      why: `A stall without a next step is usually a lost deal. These lines turn it into either the real objection or a booked follow-up.`,
      example: {
        title: "Permission vs approval with a Roseville gym owner",
        body: `"I need to run it by my wife." → "Makes sense. What role does she play in the business?" → "She does the books." → "Is this a case where she'd need to sign off on it, or more that you'd want her on board?" → "Honestly I just want her to know." → (approval) "Totally. If she were here, what questions do you think she'd ask?" ... handle them now, then "Want to get started today and I'll send you a one-page summary to show her tonight?"`
      },
      practice: [
        {
          prompt: "Write your response to each stall, ending each in a question or a booked next step.",
          fields: ["'Let me think about it'", "'I need to talk to my wife/partner'", "'Give us a week' (after 'ready now')", "Stalling right after a yes"],
          rubric: ["Uses the tie-downs on 'think about it'", "Spouse response probes permission vs approval", "Distinguishes logistics from a polite no", "Every answer ends with a question or booking"]
        }
      ],
      today: { task: "Write your 'decision maker' question into both your booking confirmation text and your discovery sheet so it's asked twice before any pitch.", output: "2 places updated", minutes: 15, suggested: false },
      check: [
        { q: "How does Calum separate a real spouse objection from a stall?", a: "Probe whether they need permission (genuine with shared finances) or just approval (still go for it)." },
        { q: "What does 'ready now, nothing would stop us' followed by 'give us 7 days' usually mean?", a: "A polite no that needs handling (unless it's a logistical delay like moving money)." }
      ]
    },
    {
      id: "sal-28",
      part: "objections",
      title: "What kills the close (and leave knowing why)",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-10-21",
      source: [
        { doc: "9 New Calls Study Guide", section: "Objection handling: What kills the close; Practical details (milking a no-close)", who: "Calum Tresham 8/21/26; Noah Wyman 10/21/26" }
      ],
      idea: `Calum's list from reviewing Cam's live call (8/21). These are the ways good calls die in the last 15 minutes:

1. **Answering their question directly in the objection phase.** "What other options do you have?" If you just answer, you lose the frame. Lead instead: ask what's behind the question.
2. **Feature dumping.** Repeating benefits doesn't create money that isn't there.
3. **Going past about 15 minutes in objections.** Fear grows with time, like standing on the high diving board.
4. **Begging.** If you can't solve the real issue, part ways politely. Forced buyers feel uneasy even when it's good for them.
5. **Saying "I really just want to help you."** People trust an honest win-win more.
6. **Signing someone who can barely afford one month.** You need clients with a buffer. Calum's story: an owner wanted to pause ads after two weeks with no qualified leads; Calum's friend running them said no, and the owner closed $25k that weekend. A client with no buffer would have quit before the win.

**Then: always leave a call knowing why they didn't buy and what the next step is.** That's the closing line of the study guide's objection section.

**Milk the no-close** (Noah, 10/21): with a qualified prospect who didn't buy, ask: **"Based on what you heard, do you feel it would make sense? What are you uncertain about?"** You either reopen the deal or learn the real reason, both of which you write in your call log.

Pair this with the four closable factors: the "why" should map to want change, want it now, trust, or money.`,
      keyPoints: [
        "Don't answer objection-phase questions directly; lead.",
        "No feature dumping. No begging. No 'I just want to help'.",
        "Keep objection handling under ~15 minutes.",
        "Don't sign clients who can barely afford month one.",
        "Leave every call knowing why and what's next."
      ],
      why: `Most of these are habits nice people fall into. Knowing them by name is how you catch yourself on a recording.`,
      example: {
        title: "Leading instead of answering",
        before: `Prospect: "What other options do you have?" You: "Well, we also have a $1,500 package with fewer ads, and a content-only option..." (You just halved your own offer.)`,
        after: `"Good question. What's making you ask? Is it the price, or is part of the plan not a fit?" → "The price." → "Okay, is it that the money isn't there right now, or it's there and you're not sure it's worth it?"`
      },
      practice: [
        {
          prompt: "Review a recorded call (yours, or a wholesaling one) against Calum's list. Mark each killer as present or absent with a timestamp.",
          fields: ["Answered a question directly in objections?", "Feature dumping?", "Objections over 15 min?", "Begging / 'I just want to help'?", "Could they afford it with a buffer?", "Why they didn't buy + next step (did I get both?)"],
          rubric: ["Timestamps for anything present", "Honest about at least one miss", "Ends with one specific fix"]
        }
      ],
      today: { task: "Add a 'Why no?' and 'Next step + date' column to your call log, and fill them for your last 3 sales conversations (any business).", output: "3 filled rows", minutes: 15, suggested: false },
      check: [
        { q: "Why does Calum say to keep objection handling short?", a: "Fear grows with time, like standing on the high diving board (about 15 minutes max)." },
        { q: "What does Noah ask a qualified prospect who didn't buy?", a: "'Based on what you heard, do you feel it would make sense? What are you uncertain about?'" }
      ]
    },
    {
      id: "sal-29",
      part: "pipeline",
      title: "Three sales: book, show, buy (show rates from the sales side)",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-29",
      source: [
        { doc: "9 New Calls Study Guide", section: "Pipeline, show rates and follow-up: You make three sales; Cam's pre-call sequence; Fixing no-shows; Keeping it organized", who: "Cam 10/29/26; Paul 7/28/26" },
        { doc: "ZDub_Guide_01 V2", section: "11. No-shows (incl. honesty flag)", who: "Calum 10/6, Noah 10/7, Logan 10/9/26" }
      ],
      alsoIn: ["Speed to lead & follow-up — funnels tab"],
      idea: `Cam (10/29): **you make three sales.** Sell them on booking, sell them on showing up, then sell them on working with you. A great close is worth nothing if half your calls no-show.

**Why people no-show, two diagnoses:**
- Calum (10/6): usually an **authority problem**, not a reminder problem. They don't see you as someone whose time matters.
- Paul (7/28): the **offer didn't build enough intrigue.** Put the guarantee in the lead-form headline ("We'll get you X in Y time").

Both point the same way: show-up is decided by how valuable the call looks.

**Cam's pre-call sequence (10/29), sales-side summary:**
1. Within a minute of booking, a personal text from your own number asking for their website and socials so you can tailor the call. The goal is a **reply**, so they're invested.
2. Research them (website, Instagram, Meta Ads Library) and send a voice note mentioning what you found.
3. 10 minutes before: a short voice note saying you built the call around their business.
4. About 3 minutes before to 2 after: "Do you need the link, or do you have it?"

**Confirm, honestly.** Calum (10/6): once someone confirms by text, they're far more likely to show; only then send an optional Loom ("if you get time, great"). A mandatory pre-watch causes embarrassed no-shows. Third touch: call an hour before. Noah (10/7): a short triage call, "Would there be any reason that time wouldn't work?" Paul: call every booked lead to confirm.

**Honesty flag:** Calum's suggested "the calendar booked people in the wrong time zone" text is made up; he said so on the call. Use: "Saw you booked Thursday at 10. Just confirming that time still works for you?"

**Pipeline hygiene (Cam):** label leads (booked, follow-up, DQ) and stop chasing rude price-shoppers. No-shows aren't dead: keep calling weekly with a new reason (Paul). The follow-up mechanics themselves live in the funnels tab.`,
      keyPoints: [
        "Three sales: booking, showing up, buying.",
        "No-shows = authority (Calum) or weak intrigue (Paul).",
        "Text within a minute; get a reply; voice note with research; link check.",
        "Confirm by text, optional Loom only after confirmation, call an hour before.",
        "Honest confirmations only. Label leads; no-shows aren't dead."
      ],
      why: `Your close rate doesn't matter if your show rate is 40%. For a solo agency, every no-show is an hour of prep lost.`,
      table: {
        head: ["When", "Touch", "Purpose"],
        rows: [
          ["< 1 min after booking", "Personal text asking for website/socials", "Get a reply → invested"],
          ["Before the day", "Research + voice note mentioning findings", "Proves you're real and did the work"],
          ["Day before", "Confirm time + decision makers", "Show-up + no spouse stall"],
          ["1 hour before", "Call", "Third touch"],
          ["10 min before", "Short voice note", "Personal, built around them"],
          ["−3 to +2 min", "'Do you need the link?'", "Removes the last excuse"]
        ]
      },
      example: {
        title: "Booking text for a Carmichael HVAC owner",
        after: `"Hey Dave, Zach with ZDub Media. Just saw your booking come through for Thursday at 10, looking forward to it. If you don't mind, could you send over your website and Facebook page? That way I can tailor the call to your business."`
      },
      practice: [
        {
          prompt: "Write your full pre-call sequence in your words (honest versions only).",
          fields: ["Booking text (< 1 min)", "Research voice note script (30 sec)", "Day-before confirmation", "10-minutes-before voice note", "Link check text"],
          rubric: ["Booking text asks for something so they reply", "Voice note mentions a real finding", "No invented excuses or fake scarcity", "Confirmation asks about decision makers"]
        }
      ],
      today: { task: "Set up the booking text as a GHL workflow (or saved snippet) and track show rate for your next 10 booked calls in your call log.", output: "Workflow live + show-rate column", minutes: 30, suggested: true },
      check: [
        { q: "What are Cam's three sales?", a: "Sell them on booking, sell them on showing up, then sell them on working with you." },
        { q: "What does Calum say most no-shows are?", a: "An authority problem, not a reminder problem." },
        { q: "Why is Calum's time-zone confirmation text flagged?", a: "It's made up (he said so); use an honest confirmation instead." }
      ]
    },
    {
      id: "sal-30",
      part: "pipeline",
      title: "Selling while you're new: small is the offer, not the apology",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-10-16",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "12. Being new on sales calls; Self-confessing and earning the upsell; 10. Urgency", who: "Logan 10/9, 10/13, 10/16; Calum 8/28; Noah 10/7/26" },
        { doc: "ZDub_Guide_00 V2", section: "Principles #2: Honesty is the strategy when you're new", who: "Logan, Calum, Paul, LC SOP" }
      ],
      alsoIn: ["Discounting & self-confession — offers tab", "No results? Sell your story — mindset tab"],
      idea: `Cross-call principle #2: **honesty is the strategy when you're new.**

**Be open that they're your first.** Logan: "Don't ever put on that facade" of having 50 clients (10/9).

**"Small is the offer, not the apology"** (Logan, 10/16). Don't apologize for being new; sell what being small gives them:
- "I have room for a handful of clients right now."
- White-glove service.
- "You'll have my phone number, the one actually working on your stuff."
- "I personally need case studies, so I need your business to win."

**"We" is fine if it's you plus AI. Don't say "my team" if you don't have one** (Logan, 10/13).

**Self-confess your real logic** (Calum, 8/28): "We're trying to get a few more clients in the med spa niche this quarter because once we have a couple case studies it's easier to sell the next one, so you'll get extra attention." Telling them *why* you want them makes it work for both sides.

**Earn the upsell** (Calum, 8/28): "We can do website, CRM, everything, but I only want to run ads for you right now." A hotel gives you a great stay before it offers the upgrade. Noah upsold a client an $8,000 build after running their ads for three to four months.

**Urgency, only if true** (Noah, 10/7): one niche per area ("I'd be forced to move with the other one"), or "only taking a couple more businesses this month to uphold results." Cross-call honesty rules: scarcity and urgency only if true (Jason, 8/25).

**You don't need to know their trade,** only how to get them more business (Logan, 10/16).`,
      keyPoints: [
        "Never fake a client list.",
        "Sell small as a benefit: room for a handful, direct line, you need them to win.",
        "Self-confess your real reason for wanting them.",
        "Start narrow (ads only), earn the upsell.",
        "Urgency and exclusivity only when true. No implied team."
      ],
      why: `ZDub's offer is a 'strategic growth partnership.' Trust is the product, so honesty about being new is a selling point, not a weakness.`,
      example: {
        title: "Being new, said well, to a Sacramento roofer",
        before: `"Sorry, we're kind of new, we only have one client so far, but our team is really good..."`,
        after: `"I'll be straight with you: I'm building ZDub's trades portfolio right now, so I'm only taking one roofer in the Sacramento area. That means you get me directly, my cell, the person actually running your ads. I need your business to win because you're my case study. I only want to run your ads for now; if it works, we'll talk about more."`
      },
      practice: [
        {
          prompt: "Write your 'small is the offer' paragraph and your self-confession line, honest to where ZDub is today.",
          fields: ["Small-is-the-offer paragraph (3–4 sentences)", "Self-confession: why I want this client", "My true urgency/exclusivity line (or 'none' if not true yet)"],
          rubric: ["No apology words ('just', 'only', 'sorry')", "No implied team or fake clients", "Self-confession states a real reason", "Urgency is literally true"]
        }
      ],
      today: { task: "Say your 'small is the offer' paragraph out loud and record it; use it in your next outreach call or discovery call.", output: "Recorded paragraph + used once", minutes: 15, suggested: false },
      check: [
        { q: "What does Logan mean by 'small is the offer, not the apology'?", a: "Sell what being small gives them (room for a handful, direct access, you need them to win) instead of apologizing for being new." },
        { q: "What's Calum's hotel analogy about?", a: "Earn the upsell: give them a great stay (ads only) before offering the upgrade (website, CRM)." }
      ]
    },
    {
      id: "sal-31",
      part: "pipeline",
      title: "Get better by reps: record, rewatch, get reviewed",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls Study Guide", section: "Practical details: Get better by reps", who: "Noah Wyman 10/21/26; Tayt Shelman 11/4/26" },
        { doc: "ZDub_Guide_01 V2", section: "12. Being new on sales calls (record calls; Logan's calculator)", who: "Logan McKinney 10/9, 10/16; Calum 10/6/26" }
      ],
      idea: `There's no shortcut here. Noah (10/21) and Tayt (11/4) give the same three-step answer: **get on more calls, rewatch them, send them to a coach for review.**

**Record everything** (with consent; you're in California). Logan uses Fireflies (about $10–15/month) so he can focus on asking questions instead of notes, then gives the transcript to AI afterward (10/16). Calum also said record calls for review (10/6).

**Logan was a bad salesperson at first** (10/9): generic discovery questions that owners saw through. He fixed it by building a **niche-specific calculator with built-in sales tracks and pre-bottled objection answers**, built because he lost deals. Every lost deal became a line in the tool.

**What a review looks like.** Use the checklist below against the transcript. Score each step done / weak / missed. Pick **one** fix for the next call. One fix per call compounds fast; ten fixes at once change nothing.

**Use the transcript twice.** Cam (10/29) pulls the objections and wrong beliefs prospects voice and turns them into content (organic-social tab owns that method). The same transcript feeds your objection card here.

**Send one call a month to a mentor.** Noah and Tayt both offered review. A mentor will catch what you can't hear yourself, like Calum catching that a student was nine minutes in without knowing why the prospect booked.`,
      keyPoints: [
        "More calls → rewatch → coach review.",
        "Record with consent; transcribe; feed AI.",
        "Turn every lost deal into a line in your sales tool (Logan).",
        "Score each step; pick ONE fix per call.",
        "Send a call to Noah or Tayt for review."
      ],
      why: `You can't hear your own habits live. Reviewed reps are how a first-year seller closes like a third-year one.`,
      table: {
        head: ["Step", "Did it?", "Evidence (timestamp)"],
        rows: [
          ["Frame: length, agenda, 'no is fine', ends in a question", "", ""],
          ["Knew why they booked within 5 min", "", ""],
          ["Every lead source: cost, return, why not enough", "", ""],
          ["Ticket, margin, close rate, LTV, revenue now/goal", "", ""],
          ["Buying trigger (dated, personal)", "", ""],
          ["Goal number + bottleneck + cost of inaction", "", ""],
          ["Checkpoint #1: timing + decision maker", "", ""],
          ["Money model with their numbers, close rate halved", "", ""],
          ["1–10 confidence + permission for investment", "", ""],
          ["Checkpoint #2 tie-downs before price", "", ""],
          ["Price → guarantee → silence (no 'any questions?')", "", ""],
          ["Left knowing why + next step", "", ""]
        ]
      },
      example: {
        title: "One-fix review of a PMT check-in call",
        body: `Done: frame, numbers, next step. Weak: goal question asked at minute 3 (too early). Missed: never asked Chris's confidence 1–10 after showing the storyboard. One fix for next call: ask the goal question right before the pitch.`
      },
      practice: [
        {
          prompt: "Review a recorded call against the checklist in this lesson.",
          fields: ["Call reviewed (who, date)", "Steps done well", "Steps weak (with timestamps)", "Steps missed", "My ONE fix for next call"],
          rubric: ["Uses timestamps", "Names exactly one fix", "Fix is a behavior you can do on the next call"]
        }
      ],
      today: { task: "Sign up for a call recorder (Fireflies or similar), add your consent line to your opener, and send one recorded call to Noah or Tayt for review this week.", output: "Recorder set up + 1 call sent for review", minutes: 30, suggested: true },
      check: [
        { q: "What three things do Noah and Tayt say make you better at sales?", a: "Get on more calls, rewatch them, send them to a coach for review." },
        { q: "How did Logan fix his weak discovery?", a: "He built a niche-specific calculator with built-in sales tracks and pre-bottled objection answers, from deals he lost." }
      ]
    }
  ]
});
