HUB.tab({
  id: "agency-ops",
  title: "Running the Agency",
  icon: "gear",
  tagline: "Onboard clean, build systems by hand first, prove the numbers, and keep the clients you win.",
  intro: "Getting a client is half the job; keeping one is the business. This tab covers everything after the yes: the KPI question, onboarding that actually gets you access, the client 'brain,' GoHighLevel as home base, doing it by hand before you systemize, the weekly numbers, proving ROI, owning it when results disappoint, reporting, retention and upsells. It ends with the Workbook capstone: one client (PMT), the whole program, run for 90 days.",
  parts: [
    { id: "role", title: "Part 1 · Know your piece and pick the right clients" },
    { id: "onboard", title: "Part 2 · Onboarding" },
    { id: "systems", title: "Part 3 · Systems, rhythm and team" },
    { id: "prove", title: "Part 4 · Diagnose, optimize and prove it" },
    { id: "keep", title: "Part 5 · Report, retain and grow" },
    { id: "capstone", title: "Final project · One client, the whole program" }
  ],
  trackers: [
    { id: "weekly", title: "Client weekly numbers", goal: "Every active client, every week", fields: ["Client and week", "Spend", "Leads / cost per lead", "Booked / sold", "What I'm testing next"] },
    { id: "eod", title: "End-of-day report", goal: "Five lines, every workday", fields: ["Date", "Revenue activities done", "Micro win", "Micro loss", "Tomorrow's first task"] },
    { id: "twice", title: "Did it twice? Systemize list", goal: "Log every task you repeat; systemize one a week", fields: ["Task I repeated", "How often", "Next step: checklist, template or automation"] }
  ],
  lessons: [
    {
      id: "ops-01",
      part: "role",
      title: "Leads, closing, delivery: know your piece and keep two lists straight",
      minutes: 10,
      tags: ["Alternate model (Jason)"],
      date: "2026-09-30",
      source: [
        { doc: "Module 01 · Why This Business Works", section: "Segment 1: The three things that move a business forward; Segment 2: Leads are oxygen", who: "Jason Maulucci, 9/30/26 (B2B cold-email agency model)" },
        { doc: "Module 02 · The Business Model and Your Offer", section: "Segment 7: Cold traffic and warm traffic; Segment 9: Some clients will be much easier than others", who: "Jason Maulucci, 9/30/26" },
        { doc: "Module 03 · The Niches You Should Target", section: "Segment 6: The two lists; Segment 7: Who to avoid", who: "Jason Maulucci, 9/30/26" }
      ],
      alsoIn: ["Offers tab (define a lead in writing before launch; collect setup money first)"],
      idea: `Jason's course teaches a different model (a B2B cold-email agency), but a few of his ideas transfer straight to ZDub. Treat these as an alternate model, not ZDub's playbook.

**Every business runs on three things:** getting leads, closing those leads, and delivering for customers. If you spend all day on things that don't help one of those three, you're probably avoiding the real work. An agency like ZDub handles the **first piece** for other businesses: getting them in front of people who could buy. You don't run the client's business. You get very good at your piece.

**Keep two lists straight** (Module 03). Your agency's **prospect list** holds potential clients. Your client's **campaign list** holds *their* potential customers. Jason's example: you sell to a commercial roofing company; their campaign targets commercial property owners, not more roofing companies. It sounds obvious until your CRM, your notes and your content start mixing the two. For ZDub:
- ZDub's prospects: Sacramento roofers, HVAC owners, med spas, PMT-type schools.
- PMT's customers: beginner riders, returning riders, gift buyers.
Different lists, different messages, different pipelines.

**Warm close rates don't predict cold close rates** (Module 02). A client says "just get me the leads, I close 70%." Then you learn every call was a close friend's referral. That doesn't mean they'll close 70% of strangers from an ad. Ask where their close rate comes from before you build a projection on it.

**Some clients will be much easier than others.** The same process produces very different results for a client with a clear offer, strong demand, good proof and a team that follows up, versus one with a confusing service and no reason to buy now. Don't assume every difference is your creative. Find the strong accounts, grow them, and document results.

(Two related Jason rules, agreeing in writing what counts as a lead and collecting setup money before buying tools, are taught in the Offers tab.)`,
      keyPoints: [
        "A business = leads + closing + delivery. ZDub owns leads.",
        "ZDub's prospect list ≠ the client's customer list. Keep them separate.",
        "Referral close rates don't carry over to cold ad leads.",
        "Same process, very different clients: find and grow the strong ones.",
        "Alternate model: transferable ideas only."
      ],
      why: "Knowing exactly which piece ZDub owns keeps your days on revenue work, and keeping the two lists separate stops you from marketing to the wrong people with the wrong message.",
      example: {
        title: "Two lists for one week of ZDub work",
        body: "ZDub prospect list (in ZDub's pipeline): 20 Sacramento-area HVAC owners, tagged 'researched,' 'contacted,' 'call booked.' PMT customer list (in PMT's sub-account): beginner-class leads from the Woodland form, tagged by location and 'booked / not booked.' A post for ZDub's page talks to owners about filling slow months; a PMT ad talks to riders about their first class. They never share a pipeline."
      },
      practice: [
        {
          prompt: "Separate the two lists for ZDub and PMT, and pressure-test a client close rate.",
          fields: ["Who is on ZDub's prospect list (niches, area, where they live in my CRM)", "Who is on PMT's customer list (segments, where they live)", "One place the lists are currently mixed (notes, CRM, content) and the fix", "A client's claimed close rate and the question I'd ask about where it comes from"],
          rubric: ["Each list has its own home (pipeline or sub-account)", "Segments are specific", "Names a real mix-up and a concrete fix", "Close-rate question separates referrals from cold leads"]
        }
      ],
      today: { task: "Set up (or clean up) two separate pipelines: one for ZDub's prospects and one inside PMT's account for PMT's leads. Move anything that's in the wrong place.", output: "Two clean, separate pipelines", minutes: 25, suggested: false },
      check: [
        { q: "What three things does every business run on, per Jason?", a: "Getting leads, closing those leads, and delivering for customers." },
        { q: "What are the two lists?", a: "The agency's prospect list (potential clients) and the client's campaign list (the client's potential customers)." },
        { q: "Why shouldn't you trust 'I close 70%' at face value?", a: "If those calls are warm referrals, the client won't necessarily close 70% of cold strangers from ads." }
      ]
    },
    {
      id: "ops-02",
      part: "role",
      title: "Qualify the client before you take them",
      minutes: 12,
      tags: ["Book", "Mentor"],
      date: "2026-09-25",
      source: [
        { doc: "Mastery Guide Ch 22 · The Client Growth Blueprint", section: "Phase 0: qualify the client", who: "Roy H. Williams; Alex Hormozi (book synthesis)" },
        { doc: "Mastery Workbook Ch 22", section: "Recall 22.2, 22.3, 22.10; Drill D22.1 Qualification scorecard", who: "Workbook" },
        { doc: "Mentor Guide 08 V2", section: "New in V2: Client speed, trust and infrastructure; 2. Onboarding (check capacity)", who: "Jason Maulucci 8/18/26; Logan McKinney 9/25/26" }
      ],
      alsoIn: ["Getting Clients tab (finding prospects)", "Sales tab (qualifying on the call)"],
      idea: `Not every business can be helped by marketing, and taking the wrong client hurts both of you. Roy Williams' firm chose clients by asking, "Do we really believe in this business?" Its rule: **advertising can't fix a bad business; it only accelerates what was going to happen anyway.**

**The six Phase 0 questions** (Mastery Guide Ch 22):
1. **Is the business good inside the door?** Reviews, reputation, delivery.
2. **Is there pain and purchasing power in their market?** (Hormozi)
3. **Do the economics support marketing?** Average sale, margin and lifetime value must leave room to pay for customers. A few hundred dollars of profit per customer affords far less per lead than several thousand.
4. **Do they have capacity?** No point generating 50 jobs a month for a crew that can do 10. Logan (9/25) asks it plainly: "Can they take on five more jobs this month?"
5. **Will they commit long enough?** Williams warned clients about the "chickening-out" period; if they won't commit past it, don't start.
6. **Will they answer leads fast?** If not, that's the first thing to fix, or the ads will fail.

**Jason's three dream-client traits (8/18)** sharpen questions 5 and 6:
- **Speed.** A client who turns things around in 24 hours (filming, approvals, access) gives you about **12 optimization cycles a quarter vs about 3** for a two-week client. Slow responses in week one are structural, not "busy."
- **Trust.** Trust turns into access (ad accounts, CRM, call recordings) and lets you tell them hard things. Build it in small ways: calls, remembering birthdays, meeting in person for big decisions. "With equal skill, relationship decides."
- **Infrastructure.** Ads amplify a funnel; a broken back end becomes a louder, more expensive problem you get blamed for. No CRM, call tracking or conversion events means no attribution, and you get judged on vibes. If it's missing, build it and charge more.

Turn the questions into a **scorecard**: score each 1 to 5 with a written definition of a 1 and a 5. The Workbook's rule: a 1 on "good inside the door" or "economics" means fix first or decline.`,
      keyPoints: [
        "Ads accelerate what was already going to happen.",
        "Six questions: good inside the door, market, economics, capacity, commitment, lead speed.",
        "Client speed = optimization cycles (≈12 vs ≈3 a quarter).",
        "Missing CRM or tracking? Build it and charge more, or get judged on vibes.",
        "Score 1-5; a 1 on quality or economics means fix first or decline."
      ],
      why: "ZDub's reputation will be built on its first few clients' results. Saying no (or 'fix this first') to a bad fit protects both the case study and the client's money.",
      example: {
        title: "Scoring two prospects (Workbook-style)",
        body: "A Folsom HVAC company: 4.8 stars (5), strong summer demand (4), $8k average install (5), crew already booked out in July (2 on capacity in peak), owner replies within hours (5), no CRM (infrastructure gap: build it and price it in). A struggling gym with 2.9 stars and angry reviews about cancellations: a 1 on 'good inside the door.' Per the Workbook rule, fix first or decline, because ads would only accelerate the churn."
      },
      practice: [
        {
          prompt: "Drill D22.1, Qualification scorecard. Define a 1 and a 5 for each question, then score two real or prospective clients (PMT can be one).",
          fields: ["Definitions: what a 1 and a 5 look like for each of the six questions", "Client A: six scores + notes", "Client B: six scores + notes", "Decision for each: take, fix first, or decline (and why)"],
          rubric: ["Every question has a written 1 and 5", "Speed to lead is defined by real response times", "Scores are backed by evidence (reviews, numbers, behavior)", "Applies the 'a 1 on quality or economics' rule"],
          model: "Speed to lead (Workbook model): 1 = leads wait a day or more; 5 = instant text and a call within 5 minutes."
        }
      ],
      today: { task: "Build your qualification scorecard as a reusable doc and score PMT honestly. Write the one area you'd fix first.", output: "A reusable scorecard plus PMT's scores", minutes: 30, suggested: false },
      check: [
        { q: "List the six qualification questions from Phase 0.", a: "Good inside the door? Pain and purchasing power in the market? Do the economics support marketing? Capacity? Will they commit long enough? Will they answer leads fast?" },
        { q: "Why does capacity matter?", a: "There's no point generating 50 jobs a month for a crew that can do 10." },
        { q: "Why does client speed matter so much, per Jason?", a: "A 24-hour client gives you about 12 optimization cycles a quarter vs about 3 for a two-week client." }
      ]
    },
    {
      id: "ops-03",
      part: "role",
      title: "Ask the KPI question first",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-10-09",
      source: [
        { doc: "Mentor Guide 08 V2 · Fulfillment, Onboarding, Systems and Reporting", section: "1. The KPI question", who: "Logan McKinney, Client Acquisition / Offer 10/9/26" },
        { doc: "Mentor Guide 08 V2", section: "5. When results disappoint (client who thinks they know better)", who: "Logan McKinney, 10/9/26" }
      ],
      idea: `Logan called this **the most important question to ask a client**:

> "If I did nothing else for you, what is the one thing you'd want to see from our relationship working together?"

**Why it matters.** Logan's card shop story: he assumed the goal was Instagram views and built for that. The client's real KPI was **YouTube monetization**. Three months of the wrong work "basically meant nothing" to them. Once he asked, he switched strategy and hit it.

You and the client can both be working hard and still be aiming at different targets. The KPI question puts one target on the wall before you build anything.

**How to use it:**
- Ask it at onboarding, word for word, and write the answer down in their words.
- Then build the plan, the reporting and the first 30 days around that answer.
- If they give a vanity answer ("more followers"), dig one level deeper: what would more followers do for you? Logan reframed a client who confused follower counts with results: "We're not doing follower campaigns. What does your booking calendar look like?" (10/13)

**It also protects you later.** When a client wants to drive the creative their own way, Logan's line (10/9) leans on the KPI: "you can't hold me accountable to results of the content you want to make if you give me a KPI. Let me drive it." Tactfully ask for trust: "you don't hire an ice cream parlor to do your plumbing."

One question, asked early, decides whether three months of work count.`,
      keyPoints: [
        "\"If I did nothing else for you, what is the one thing you'd want to see?\"",
        "Write the answer in their words; build everything around it.",
        "Wrong target = good work that 'means nothing.'",
        "Push past vanity answers to the business result.",
        "The KPI gives you the right to drive the strategy."
      ],
      why: "PMT and every future client will judge ZDub on one number they care about. If you don't know it, you're guessing.",
      example: {
        title: "PMT: the KPI question in practice",
        body: "Zach asks Chris the question at a check-in and writes the answer word for word. If the answer is 'more beginner seats filled on weekdays,' the plan, the ads and the weekly report all center on weekday seat fills, not on followers, clicks or total leads."
      },
      practice: [
        {
          prompt: "Prepare and log the KPI conversation.",
          fields: ["The question, as I'll ask it (word for word)", "The client's answer, in their words", "My follow-up if the answer is a vanity metric", "The one number I'll report on every week because of it"],
          rubric: ["Question asked word for word", "Answer recorded in the client's language", "Follow-up digs to a business result", "Weekly number ties directly to the answer"]
        }
      ],
      today: { task: "Ask PMT the KPI question (call or text) if you haven't. Write the answer at the top of PMT's client doc.", output: "PMT's KPI, in Chris's words, at the top of the client doc", minutes: 15, suggested: false },
      check: [
        { q: "What is Logan's KPI question?", a: "\"If I did nothing else for you, what is the one thing you'd want to see from our relationship working together?\"" },
        { q: "What happened with Logan's card shop client?", a: "He assumed Instagram views; their real KPI was YouTube monetization. Three months of the wrong work meant little until he switched and hit it." },
        { q: "How did Logan reframe a client fixated on followers?", a: "\"We're not doing follower campaigns. What does your booking calendar look like?\"" }
      ]
    },
    {
      id: "ops-04",
      part: "onboard",
      title: "Onboarding that actually gets you the keys",
      minutes: 12,
      tags: ["Mentor", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "Mentor Guide 08 V2", section: "2. Onboarding", who: "Calum Tresham 10/6/26; Logan McKinney 9/25, 10/13, 10/16/26; Cam 9/17 and 10/15/26; Jason Maulucci 8/25/26" }
      ],
      alsoIn: ["Offers tab (agreements, setup money, defining a lead)"],
      idea: `Onboarding is where most new agencies lose two weeks: chasing logins, waiting on 2FA codes, guessing at goals. The mentors' version:

**Before the call**
- **Send a doc listing every login you need** (Logan, 10/13). Logan builds the access steps into his onboarding form (9/25).
- **Send an agreement to every client:** scope, payment terms, amount. **Never put client ad spend on your own card** (Jason, 8/25).

**The call itself**
- **In person, or on a call where they have their phone next to them** for 2FA codes (Logan, 10/13). Screen-share the access steps when needed (9/25).
- **Record it.** Logan records onboarding and discovery calls with Fireflies (about $10-15/month) and gives the transcript to Claude to build a client profile and content ideas (10/13, 10/16).
- **Check capacity early:** "Can they take on five more jobs this month?" (Logan, 9/25)
- **Set the attribution expectation now:** you'll need access to who actually paid (Cam, 10/15).

**Ad-account access** (Cam, 9/17; re-check the menus, they move):
- **Meta route:** the client goes to Business Settings > People and invites you with full access (Cam also asks for finance), then assigns pages and ad accounts.
- **WAP route:** the client creates their own WAP account, connects their Meta assets, adds a card and invites you as an advertiser.

**When does the retainer start?** Calum (10/6): the clock can start the day they send all access and items; the onboarding call can be the same day or days later.

**Expect it to take time.** Logan spent nearly a month chasing old-owner logins for the card shop (10/13). That's why the logins doc goes out first.`,
      keyPoints: [
        "Logins doc and agreement go out before the call.",
        "Phone in hand for 2FA; screen-share access steps.",
        "Record the call; turn the transcript into a client profile.",
        "Client invites you to their ad account; never pay their ad spend.",
        "Set the 'we'll need who actually paid' expectation on day one."
      ],
      why: "Every day without access is a day without results, and the retainer clock is running. A tight onboarding makes ZDub look professional from the first hour.",
      example: {
        title: "A ZDub logins doc (starter list)",
        body: "Meta Business portfolio (invite to People with full access), Facebook page, Instagram account, ad account (client's card on file), website or booking tool admin, Google Business Profile manager access, CRM or calendar login, any past ad reports. Each line has a one-sentence 'how to send it' and a checkbox. Send it 48 hours before the onboarding call."
      },
      practice: [
        {
          prompt: "Build ZDub's onboarding kit.",
          fields: ["Logins doc: every item I need, with how to send it", "Agreement must-haves (scope, payment terms, amount, ad spend on client's card)", "Onboarding call agenda (with 2FA, recording consent, capacity question, attribution expectation)", "When my retainer clock starts"],
          rubric: ["Logins list covers Meta, page, IG, ad account, site, GBP, CRM", "Agreement states the client pays ad spend directly", "Agenda includes recording consent (California) and the capacity question", "Retainer start rule is written down"]
        }
      ],
      today: { task: "Write ZDub's logins doc and onboarding call agenda as reusable templates. If PMT is missing any access, send Chris the doc today.", output: "Two templates saved; PMT access gaps requested", minutes: 35, suggested: false },
      check: [
        { q: "Why onboard in person or with the client's phone nearby?", a: "For 2FA codes, so access gets set up on the call instead of over days of back-and-forth." },
        { q: "When can the retainer clock start, per Calum?", a: "The day the client sends all access and items; the onboarding call can be the same day or later." },
        { q: "What did Jason say about ad spend?", a: "Send an agreement to every client and never put client ad spend on your own card." }
      ]
    },
    {
      id: "ops-05",
      part: "onboard",
      title: "Uncover: the deep dive that starts every engagement",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "Mastery Guide Ch 22", section: "Phase 1: uncover (goals, numbers, customers, past marketing, the world inside the door)", who: "Roy H. Williams (the Uncovery); book synthesis" },
        { doc: "Mastery Workbook Ch 22", section: "Recall 22.4; Drill D22.2 Discovery script", who: "Workbook" }
      ],
      alsoIn: ["Sales tab (discovery on the sales call)"],
      idea: `The sales call finds out whether you can help. The **Uncovery** (Roy Williams' name for it) is the deeper dig you do once they've signed: a 60 to 90 minute session plus a **tour of the business**. Williams calls it digging for the diamond: the story that's uniquely the client's own, and the "North Star" they're steering toward.

Ask in five areas, in a problem-centered style (situation, problem, consequence, desired outcome):

**Goals**
- What does success look like in 12 months, in numbers? Why that number? What would it change for you personally?
- This season, or becoming the household name?

**Numbers**
- Revenue, average sale, gross margin, customers per month.
- How long does a customer stay or how often do they return? (Lifetime value.)
- Close rate: of people who inquire, how many buy?
- Capacity next month. Current marketing spend, and where.

**Customers**
- Who are your best customers, and why do they choose you?
- What do reviews say? What do unhappy customers say?
- What questions do people always ask? What objections stop them?

**Past marketing**
- What have you tried? What worked, what didn't, and how do you know?
- Have you been burned by an agency? What happened?

**The world inside the door**
- What happens, step by step, when a lead comes in? How fast?
- Who answers the phone and DMs? What do they say?
- **The Sword in the Stone:** what's the one thing you do better than anyone, the thing you'd never compromise?

Follow-ups do the real work: "What happens when a lead comes in on a Saturday?" → "And then what?" → "How many of those do you think you lose?"`,
      keyPoints: [
        "60-90 minutes plus a tour of the business.",
        "Five areas: goals, numbers, customers, past marketing, inside the door.",
        "Problem-centered questions: situation, problem, consequence, outcome.",
        "Always ask how a lead is handled, step by step.",
        "End with the Sword in the Stone question."
      ],
      why: "Everything ZDub builds (ads, page, follow-up, reports) is only as good as what you learn here. It's also where you find the true story that makes the ads stand out.",
      example: {
        title: "Uncovery follow-ups for PMT",
        body: "'What happens when someone fills the form on a Friday night?' → 'And then what?' → 'How many of those never get a call back?' → 'What would it mean if every one of them got a text in a minute?' Then the Sword in the Stone: 'What's the one thing about how you teach that you'd never compromise?' The answer to that last one is often the best ad angle you'll get."
      },
      practice: [
        {
          prompt: "Drill D22.2, Discovery script. Write at least 15 questions across the five areas, in a problem-centered style.",
          fields: ["Goals (3+ questions)", "Numbers (3+ questions)", "Customers (3+ questions)", "Past marketing (3+ questions)", "The world inside the door (3+ questions, including the Sword in the Stone)", "Three follow-up questions that dig for emotion and numbers"],
          rubric: ["At least 15 open questions", "Covers all five areas", "Includes lead handling step by step", "Follow-ups dig for numbers and consequences", "Ends with the Sword in the Stone question"]
        }
      ],
      today: { task: "Write your Uncovery script and schedule (or run) a 60-minute Uncovery with PMT, including a look at how a lead is handled from form to class.", output: "A reusable 15+ question script, and PMT's session booked or done", minutes: 30, suggested: false },
      check: [
        { q: "What is Williams' discovery process called?", a: "The Uncovery." },
        { q: "Name the five areas of Phase 1 questions.", a: "Goals, numbers, customers, past marketing, and the world inside the door." },
        { q: "What is the Sword in the Stone question?", a: "What's the one thing you do better than anyone, the thing you'd never compromise?" }
      ]
    },
    {
      id: "ops-06",
      part: "onboard",
      title: "Build the client \"brain\" (junk in, junk out)",
      minutes: 10,
      tags: ["Mentor", "Course"],
      date: "2026-10-16",
      source: [
        { doc: "Mentor Guide 08 V2", section: "The Client \"Brain\" Checklist (project doc); New in V2 voice profiles", who: "LC Client Brain Checklist; Logan McKinney 9/25, 10/13, 10/16/26" }
      ],
      idea: `Every client gets their own AI project, loaded at setup with what the LC Client Brain Checklist calls their brain. The rule is "junk in, junk out": thin context gives you generic ads that sound like nobody.

**The five sections of the brain:**
1. **The voice:** 5 to 10 of their best posts or captions; a transcript of them talking; existing ads or emails in their voice; a short note on their tone.
2. **The offer:** everything they sell with prices; the highest-margin offer to push; what's in the core offer; guarantees, bonuses, current promos.
3. **The audience:** ideal customer; top pains and fears; biggest objections; what they've tried that didn't work.
4. **Proof and winners:** best ads and hooks so far; testimonials, reviews, before-and-afters; **numbers you're allowed to use**.
5. **Rules and don'ts:** compliance lines for the niche; banned words; brand guidelines; anything the client hates.

**Keep feeding it.** Logan (9/25) records every client meeting with Fireflies and adds it to the client's AI project so it builds a **voice profile**. Then teleprompter scripts read the way the client actually talks. His client "was surprised" when Logan brought scripts in his own voice. Logan also turns onboarding and discovery transcripts into a client profile and content ideas (10/13, 10/16).

Do the same for ZDub: voice notes, recorded calls, or a 25-question AI interview of yourself, loaded into a ZDub project.

The brain is also where the "numbers you're allowed to use" live. That one line saves you from putting a stat in an ad the client never approved.`,
      keyPoints: [
        "One AI project per client, loaded at setup.",
        "Five sections: voice, offer, audience, proof and winners, rules and don'ts.",
        "Record every meeting; add transcripts to build a voice profile.",
        "Store the numbers you're allowed to use.",
        "Build one for ZDub too."
      ],
      why: "PMT's ads and scripts get better, faster, when the AI knows Chris's voice, PMT's real prices and the compliance lines. It also makes ZDub's work sound like the client, which is what owners notice.",
      example: {
        title: "PMT's brain, first pass",
        body: "Voice: 8 of PMT's best captions, a transcript of an instructor explaining the first hour, tone note ('calm, encouraging, never macho'). Offer: every course and price, the course to push, what's included (bike, helmet), current promos. Audience: beginners, returning riders, gift buyers; fears (dropping the bike, looking foolish). Proof: review count and rating, approved student quotes, numbers approved for ads. Rules: claims PMT can and can't make about licensing, words to avoid."
      },
      practice: [
        {
          prompt: "Fill in the brain checklist for PMT (or note what's missing and who has it).",
          fields: ["1. Voice: what I have / what I need", "2. Offer: courses, prices, the one to push", "3. Audience: segments, pains, objections", "4. Proof and winners: reviews, approved numbers", "5. Rules and don'ts: compliance lines, banned words", "Missing items and who I'll ask"],
          rubric: ["All five sections addressed", "Uses real material, not guesses", "Approved numbers are listed separately", "Compliance lines are captured", "Gaps have an owner and an ask"]
        }
      ],
      today: { task: "Create PMT's AI project and load whatever you already have for each of the five sections. Add your latest call transcript or notes.", output: "PMT's client brain created, with a list of gaps", minutes: 40, suggested: false },
      check: [
        { q: "What are the five sections of the Client Brain Checklist?", a: "The voice; the offer; the audience; proof and winners; rules and don'ts." },
        { q: "How does Logan build a client's voice profile?", a: "He records every client meeting (Fireflies) and adds the transcripts to the client's AI project." },
        { q: "Why store 'numbers you're allowed to use'?", a: "So no ad or page uses a stat or result the client hasn't approved." }
      ]
    },
    {
      id: "ops-07",
      part: "onboard",
      title: "Show the first 30 days on one page, and pre-frame the dip",
      minutes: 10,
      tags: ["Mentor", "Book"],
      date: "2026-08-25",
      source: [
        { doc: "Mentor Guide 08 V2", section: "New in V2: The first 30 days, as a step-by-step", who: "Jason Maulucci, Offer Creation 8/25/26" },
        { doc: "Mastery Guide Ch 22", section: "Managing the relationship (chickening-out period); Example: a 90-day plan for a training school (hypothetical)", who: "Roy H. Williams; book synthesis" },
        { doc: "Mastery Workbook Ch 22", section: "Recall 22.9", who: "Workbook" }
      ],
      idea: `Clients relax when they can see what happens next. Jason (8/25) says showing a step-by-step plan of the first 30 days **raises their belief it'll work**. His example process, which he shows prospects and then follows with clients:

1. **Onboarding call:** an intake form, an AI review of their answers into ad concepts, tech access.
2. **Filming:** a 3 to 4 hour shoot at a job site.
3. **Editing:** about 24 hours.
4. **Launch.**
5. **Leads come in, quotes get booked, money comes in.**

> "The only thing you have to do is film ads once a week."

The plan answers three questions every owner has: what happens each week, what do I have to provide and by when, and when will I see numbers.

**Pre-frame the dip.** Roy Williams' partners told new clients, **before taking their money**, that around 90 days in they'd probably want to fire the agency, and asked them to agree in advance to push through. Williams called it the **chickening-out period**. Warning about it up front protects the campaign from being killed right before it works.

**A longer view, for reference.** The Mastery Guide sketches a hypothetical 90-day plan for a training school in three stages, and the order is what matters: first, discovery and audit, fix speed to lead, brand kit, tracking, collect testimonial clips, launch date-fill ads per town; next, steady posting, regular ad-concept refreshes, a beginner lead magnet with a short email nurture; last, retargeting, an alumni group and referral offer, then a numbers review to choose the next thing to improve.

Keep it to one page and keep it honest: show the steps and the client's homework, not a promised number of sales.`,
      keyPoints: [
        "A one-page 30-day plan raises the client's belief.",
        "Show: what happens each week, what they provide and by when, when numbers arrive.",
        "Jason's flow: onboard → film → edit → launch → leads.",
        "Warn about the chickening-out period before you start.",
        "Steps and homework, not promised sales."
      ],
      why: "PMT has asked what the plan looks like. A one-page plan gives Chris the storyboard he wants without promising seats ZDub can't control.",
      example: {
        title: "A one-page 30 days for PMT (shape, not a schedule)",
        body: "Step 1: onboarding and access (Chris sends logins; ZDub builds the client brain). Step 2: one filming session at the range (instructors, real students with permission). Step 3: editing and the first ads. Step 4: launch with speed-to-lead texting live. Step 5: first weekly numbers report. Chris's homework: logins by a set date, two hours for filming, approve ads within 24 hours, answer new leads fast. Footer: 'Most clients feel impatient around month three. That's normal; we'll look at the numbers together before changing course.'"
      },
      practice: [
        {
          prompt: "Write a one-page first-30-days plan for PMT or a prospect.",
          fields: ["Step 1 and what the client provides", "Step 2 and what the client provides", "Step 3 and what the client provides", "Step 4 (launch) and what must be live first", "Step 5: when and how they'll see numbers", "My chickening-out pre-frame (1-2 sentences)"],
          rubric: ["Fits on one page", "Every step names the client's homework", "Says when numbers arrive", "Makes no promise ZDub can't control", "Includes the dip warning before work starts"]
        }
      ],
      today: { task: "Draft PMT's one-page 30-day plan in Jason's step format, including Chris's homework and the chickening-out line, and send it or bring it to your next check-in.", output: "PMT's one-page plan", minutes: 35, suggested: true },
      check: [
        { q: "What does Jason say a step-by-step 30-day plan does for the client?", a: "It raises their belief that it'll work." },
        { q: "What did Williams' partners tell new clients before taking their money?", a: "That around 90 days in they'd probably want to quit, and to agree now to push on." },
        { q: "What are Jason's five steps?", a: "Onboarding call, filming, editing, launch, then leads come in and quotes get booked." }
      ]
    },
    {
      id: "ops-08",
      part: "systems",
      title: "GoHighLevel as each client's home base",
      minutes: 10,
      tags: ["Mentor", "Platform fact (re-check)"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 08 V2", section: "3. GoHighLevel setup; Where the mentors disagree (tools differ more than advice)", who: "Logan McKinney 10/2, 10/9, 10/13/26; Jason Maulucci 8/18/26; Clayton Bell 8/26/26" }
      ],
      alsoIn: ["Funnels tab (speed-to-lead workflow in GHL)"],
      idea: `Logan runs every client out of GoHighLevel (GHL). Costs and menus change, so re-check them before you buy.

**The setup**
- **Each client gets a GHL sub-account** (through Agency One/Paul, or your own GHL) (10/13).
- Logan pays about **$300/month** for his own GHL with unlimited sub-accounts, for about 20 clients. **One paying client covers it.** While learning, use LC's free GHL access (LC gives members 6 months free; Clayton says there's a request form in Discord, 8/26).
- Agency One includes a CRM for the first 90 days; Jason uses GoHighLevel for his clients (8/18).

**What lives there**
- **The speed-to-lead workflow:** local number, A2P registration, form-submitted → instant text + owner notification. (The full build is in the Funnels tab.)
- **Lists** for later promos.
- **Social Planner:** connect Facebook, Instagram, YouTube and TikTok and schedule once to all. **Don't rely on clients to post** (10/13).
- **Calendars, automations and reminders.** On Logan's roadmap these come in week 4 (10/9).

**Connect Claude to GHL (10/2).** In Claude: Settings > Connectors > add a custom connector named Go High Level, paste the address Logan shared, sign in, approve. Connect the **agency-level** account and Claude can see every sub-account: look up leads and contacts, change calendars, send messages. **Always tell it to ask before changing anything in your account.**

**Ethics and stickiness (10/13).** The client gets the CRM and automations through you. If they leave, the leads, customers and assets they paid for stay theirs; your systems get turned off.

**Pick one home.** Tools differ more than advice: Cam runs ads through WAP / Agency One, Logan runs them directly in Meta, Jason's clients live in GHL. The Mentor Guide's note: pick one home for client data and stick to it.`,
      keyPoints: [
        "One GHL sub-account per client.",
        "About $300/month covers ~20 clients; one client pays for it.",
        "Social Planner: schedule for clients; don't rely on them to post.",
        "Claude connector at agency level; always 'ask before changing anything.'",
        "If a client leaves, their leads and assets stay theirs."
      ],
      why: "A single home for each client's leads, calendar and posting is what lets ZDub run several clients without dropping anything.",
      example: {
        title: "ZDub's GHL layout",
        body: "Agency account → sub-account 'ZDub Media' (ZDub's own prospects pipeline and discovery calendar) → sub-account 'PMT' (PMT's lead pipeline, instant-text workflow, Social Planner with PMT's pages connected). Claude connected at agency level with the standing instruction: 'Ask me before you change anything in any account.'"
      },
      practice: [
        {
          prompt: "Plan the GHL setup for ZDub and PMT.",
          fields: ["Which GHL access I'm using (LC free, Agency One, my own) and its cost", "Sub-accounts I need and what lives in each", "Workflows to build in PMT's sub-account", "Social Planner: accounts to connect and who posts", "My standing instruction for Claude's GHL connector"],
          rubric: ["Separate sub-accounts for ZDub and each client", "Speed-to-lead workflow is on the list", "Posting doesn't depend on the client", "Connector instruction requires asking before changes"]
        }
      ],
      today: { task: "Request or confirm your GHL access (LC's free access if you don't have it), create the ZDub and PMT sub-accounts, and connect PMT's pages to Social Planner if you have access.", output: "Two sub-accounts set up (or the request submitted)", minutes: 30, suggested: false },
      check: [
        { q: "Roughly what does Logan pay for GHL, and how many clients does it cover?", a: "About $300/month with unlimited sub-accounts, for about 20 clients. One paying client covers it." },
        { q: "What does Logan say about clients posting their own content?", a: "Don't rely on them. Schedule it yourself in Social Planner." },
        { q: "What stays with a client if they leave?", a: "The leads, customers and assets they paid for. Your systems get turned off." }
      ]
    },
    {
      id: "ops-09",
      part: "systems",
      title: "Do it by hand first, then systemize what you repeat",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "Mentor Guide 08 V2", section: "4. Systemize by hand first; 3. GoHighLevel setup (handoff packages)", who: "Logan McKinney 10/2 and 10/9/26; Cam 10/15/26; Paul Snowman 10/19/26" },
        { doc: "Mentor Guide 00 V2 · Master Index", section: "Principles, #1 Client first, build second; #13 Do it by hand, then systemize", who: "Logan 10/9, 10/16; Clayton 8/26/26" }
      ],
      idea: `New agency owners love building systems for clients they don't have yet. Logan's order is the opposite.

**Do it by hand first** (10/9). Send the text reminders yourself. Do the math on paper. "You're collecting the problem before solving it."

**Notice what you do twice, then systemize one piece at a time.** Eventually combine the pieces; Logan calls his combined system the "command center."

**Let real clients force the systems.** Logan's first client forced him to build gear, file naming and folders, editor briefs and automations, GHL scheduling, and editors. "Every client invests into your business; take that investment and invest back into them." Weeks 6-8 of his roadmap are about turning work into systems and results into proof: if you have a client, write down every step and find the KPI.

**Don't build ahead of need.** The Master Index principle: "A funnel with nobody in it teaches you absolutely nothing" (Logan, 10/9). Clayton (8/26): "Don't solve problems you don't have yet."

**Know the manual way.** Cam (10/15): the third-party ads platform he uses went down for a week, and he rebuilt manually. Redundancy means you can still deliver when a tool breaks.

**AI is changing the work.** Cam (10/15) said AI now edits most of their ad videos; Paul (10/19) said they've fully moved to AI editing with no video editors. Systemizing today often means writing a good prompt and checklist, not hiring.

**Hand things off cleanly.** When you build something for someone, include a START HERE.md their own Claude can read to deploy and keep editing it (Logan, 10/2).`,
      keyPoints: [
        "Do it manually first; you're collecting the problem.",
        "Did it twice? Systemize that one piece.",
        "Combine pieces over time into a command center.",
        "Don't build for clients you don't have.",
        "Know the manual way in case a tool goes down."
      ],
      why: "ZDub has one client. Doing PMT's work by hand, writing every step down, and automating only what repeats builds the right systems at the right time.",
      example: {
        title: "From hand to system with PMT",
        body: "Week one: Zach texts every new PMT lead himself and writes down what he said. By the third time he's typed the same text, it becomes a GHL template. By the third time he's built the same weekly numbers table, it becomes a saved report. Each one goes on the 'Did it twice?' tracker before it gets automated."
      },
      practice: [
        {
          prompt: "List your repeated tasks and choose the first one to systemize.",
          fields: ["Every task I've done more than once for PMT or ZDub this month", "Which one costs the most time or causes the most mistakes", "The simplest system for it (checklist, template, saved prompt, automation)", "The manual backup if the tool fails"],
          rubric: ["Tasks are real and repeated, not hypothetical", "Picks one, not five", "Simplest system first (checklist or template before automation)", "Has a manual fallback"]
        }
      ],
      today: { task: "Write down every step of one task you did for PMT this week, exactly as you did it. Save it as a checklist. That's your first SOP.", output: "One step-by-step checklist from real work", minutes: 25, suggested: false },
      check: [
        { q: "What does Logan mean by 'collecting the problem before solving it'?", a: "Do the work by hand first (send reminders yourself, do the math on paper) so you know exactly what needs a system." },
        { q: "When do you systemize something?", a: "When you notice you've done it twice. One piece at a time." },
        { q: "Why does Cam say know the manual way?", a: "His third-party ads platform went down for a week and he had to rebuild manually." }
      ]
    },
    {
      id: "ops-10",
      part: "systems",
      title: "Your daily operating rhythm: checklist, end-of-day report, micro wins",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-08-28",
      source: [
        { doc: "Mentor Guide 08 V2", section: "New in V2: Your daily operating rhythm", who: "Clayton Bell 8/19 and 8/26/26; Calum Tresham, Cold Call Outreach 8/28/26" }
      ],
      alsoIn: ["Mindset tab"],
      idea: `Three different mentors run their days on the same cheap system: a checklist in the morning and a short report at night.

**The daily checklist** (Clayton, 8/19). A to-do list in a Google Doc, with a tab per day, plus an **end-of-day form**.

**The end-of-day report** (Calum, 8/28). Calum's covers **strengths, weaknesses, opportunities and threats** for the day. He said Cam's company does this too.

**The tracking sheet** (Clayton, 8/19). An ad tracking sheet (for example, cost per follower) is "non-negotiable" in Clayton's pod. If you don't write the number down daily, you don't know when it moves.

**Micro wins and micro losses** (Calum, 8/28). A day with zero bookings can still be a win: five new objections and the rebuttals you wrote for them is progress. And a loss can be small too: skipping a planned task once becomes a pattern if you let it.

**Batch by component** (Calum, 8/28). Don't do every step of outreach every day. Have a list day, a research day, a contact-info day, a dialing day. Your brain stays in one mode and each step gets done properly.

**Revenue activities first** (Clayton, 8/26). "Don't solve problems you don't have yet." Outreach, sales calls and client results come before logos, tools and tweaks.

The point isn't the doc. It's that every day ends with an honest look at what moved the business, and the next day starts with the most important task already chosen.`,
      keyPoints: [
        "Google Doc checklist, a tab per day.",
        "End-of-day report: strengths, weaknesses, opportunities, threats.",
        "Track the key number daily; it's non-negotiable.",
        "Count micro wins; don't let a micro loss become a pattern.",
        "Batch by component; revenue activities first."
      ],
      why: "Zach is running ZDub alongside wholesaling. A daily rhythm keeps outreach and PMT's results moving even on busy days.",
      example: {
        title: "A five-line end-of-day note",
        body: "Strength: 22 dials, 3 real conversations with HVAC owners. Weakness: skipped the PMT numbers update. Opportunity: one owner asked for a Loom of the money model. Threat: two follow-ups are now a week old. Tomorrow first: send the Loom, then the PMT update."
      },
      practice: [
        {
          prompt: "Set up your rhythm.",
          fields: ["My daily checklist template (5-8 recurring items)", "My end-of-day report questions", "The one number I'll track every day", "My batching plan (which component on which day)", "Today's micro win and micro loss"],
          rubric: ["Checklist leads with revenue activities", "EOD report fits in five minutes", "Tracks a number, not a feeling", "Batching groups similar work", "Micro win and loss are honest"]
        }
      ],
      today: { task: "Create the Google Doc (tab per day) and fill today's tab. Tonight, write your first end-of-day report in the tracker.", output: "Daily checklist doc plus the first EOD entry", minutes: 20, suggested: true },
      check: [
        { q: "What does Calum's end-of-day report cover?", a: "Strengths, weaknesses, opportunities and threats." },
        { q: "Give an example of a micro win on a zero-booking day.", a: "Hearing five new objections and writing rebuttals for them." },
        { q: "What does 'batch by component' mean?", a: "Do one step of the process per day (list day, research day, contact-info day, dialing day) instead of all steps every day." }
      ]
    },
    {
      id: "ops-11",
      part: "systems",
      title: "SOPs, Looms and training a team",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-06-10",
      source: [
        { doc: "9 New Calls study guide", section: "Fulfillment, team, retention and upsells: Creative team and SOPs", who: "Jason Maulucci, Irresistible offers 6/10/26" }
      ],
      idea: `When there's more work than one person can do, Jason's rules (6/10) keep quality up as you hand it off.

**Write SOPs a fifth grader could follow.** If an editor follows your SOP and still misses, either the SOP is unclear or the editor isn't capable. The test: could a fifth grader follow it?

**SOPs are living documents.** Update them every time something goes wrong. The mistake becomes a new line in the SOP.

**Record yourself.** Make Looms of yourself making creatives. That's the fastest SOP there is.

**Approve, don't make.** Have the team bring you about **20 test ideas a week** to approve or send back with feedback, instead of making them all yourself.

**Spend creative effort like a portfolio.** Most creative should be **variations of winners**, with about **20%** of the creative budget for testing new ideas.

**One deep research doc per niche:** their actions, beliefs, what they've tried, pains, desired outcomes, and who they look up to. Everyone on the team writes from the same doc.

**Train the way Jason trains sales reps:** they shadow you, then they lead while you jump in, then they run it alone.

**Hire for hunger at this price point.** At $3k-a-month clients, hire a hungry person on a retainer plus performance bonus and train them up, rather than paying top talent.

You don't need a team to start. But writing the SOP and recording the Loom while you're still doing the work by hand means the first hire takes days to train, not months.`,
      keyPoints: [
        "Fifth-grader test for every SOP.",
        "Update the SOP every time something goes wrong.",
        "Loom yourself doing the work.",
        "Mostly variations of winners; about 20% for new tests.",
        "Shadow → lead with backup → solo."
      ],
      why: "ZDub will hit capacity on filming, editing or follow-up eventually. SOPs written now, from real PMT work, make that first hire cheap and safe.",
      example: {
        title: "Turning a miss into an SOP line",
        body: "An edit goes out with captions covering PMT's logo. Instead of re-editing quietly, Zach adds one line to the editing SOP ('captions sit in the middle third; never over the logo or face') and records a 2-minute Loom showing where. The next edit gets it right without a conversation."
      },
      practice: [
        {
          prompt: "Write one SOP from a task you already do.",
          fields: ["Task", "Steps (numbered, fifth-grader clear)", "Common mistakes and the rule that prevents each", "The Loom I'll record (what it shows)", "How a new person would train: shadow → lead → solo"],
          rubric: ["Steps are specific enough for a fifth grader", "Includes at least two mistake-prevention rules", "Loom covers the hardest step", "Training path is spelled out"]
        }
      ],
      today: { task: "Record a 5-minute Loom of yourself doing one PMT task (building an ad, editing a reel, pulling the weekly numbers) and paste the link into a new SOP doc with the steps listed.", output: "One SOP doc with a Loom", minutes: 30, suggested: false },
      check: [
        { q: "If an editor follows your SOP and still misses, what are the two possibilities?", a: "The SOP is unclear, or the editor isn't capable." },
        { q: "How should creative budget be split, per Jason?", a: "Mostly variations of winners, with about 20% for testing new ideas." },
        { q: "What's Jason's training sequence?", a: "They shadow, then they lead while you jump in, then they run it alone." }
      ]
    },
    {
      id: "ops-12",
      part: "prove",
      title: "Diagnose in three sentences, then put the strategy on one page",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "Mastery Guide Ch 22", section: "Phase 2: diagnose; Phase 3: strategy on one page; ZDub application: projections as ranges, not promises", who: "Roy H. Williams, Allan Dib, Claude Hopkins, Olivier Blanchard (book synthesis)" },
        { doc: "Mastery Workbook Ch 22", section: "Recall 22.5, 22.6, 22.11; Drills D22.3, D22.4", who: "Workbook" }
      ],
      alsoIn: ["Sales tab (money model before price)", "Funnels tab (1-Page Marketing Plan)"],
      idea: `After the Uncovery, turn what you learned into a diagnosis and a plan.

**Phase 2: diagnose with four tools.**
1. **The Advertising Performance Equation** (Roy Williams, Foundations tab): rate share of voice, impact of the ads, the personal experience inside the business, and market potential. Which multiplier is weakest?
2. **Funnel math:** impressions → clicks → leads → conversations → customers → repeat and referrals. Where's the biggest leak?
3. **The local presence audit:** Google Business Profile, reviews, name/address/phone consistency, website, AI visibility.
4. **Awareness and sophistication:** how aware is the market, and what has every competitor already claimed?

Then write the diagnosis in **three sentences: what's working, what's broken, what we'll fix first.** The rule running through Hopkins, Dib and Williams: **fix the biggest constraint before adding anything new.**

**Phase 3: strategy on one page.** Use Dib's nine squares (Funnels tab) as the skeleton and add: target market profile, positioning statement, the offer, the message (one-liner and angles by awareness stage), media, lead capture/nurture/conversion, the "after" (experience, lifetime value, referrals), goals as measurable 90-day targets, and a budget sized to learning-phase math and to what the client can sustain through the chickening-out period.

**Projections as ranges, not promises.** When a client wants "spend $X, get Y customers," build it from funnel math with **conservative, expected and strong** cases and state the assumptions (cost per lead, contact rate, close rate) you'll verify in the first 30-60 days. That respects their need for a plan without promising what you can't control. (The full money-model method for sales calls is in the Sales tab.)`,
      keyPoints: [
        "Four tools: APE, funnel math, local audit, awareness/sophistication.",
        "Three sentences: working, broken, fix first.",
        "Fix the biggest constraint before adding anything.",
        "Strategy fits on one page (Dib's nine squares + positioning, offer, targets, budget).",
        "Projections in three cases with stated assumptions."
      ],
      why: "A three-sentence diagnosis is what makes ZDub a strategist rather than a vendor, and it keeps the first month focused on the one thing that will move results.",
      example: {
        title: "Three-sentence diagnoses (Workbook models)",
        body: "Roofer with 4.9 stars, a weak site, and leads called back two days later: 'Working: reputation. Broken: follow-up speed. First: speed to lead before more ads.' Gym with cheap leads and high cancellations after month two: 'Working: lead generation. Broken: experience and retention. First: onboarding and lifetime value, because more leads would just churn.' Training school full in one town, empty in another: 'Working: demand in town A. Broken: awareness or fit in town B. First: town-specific creative and a demand test, plus a look at whether B's location or schedule creates friction.'"
      },
      practice: [
        {
          prompt: "Drill D22.4 and D22.3. Write a three-sentence diagnosis for PMT, then a three-case projection for $1,500/month of ads.",
          fields: ["PMT: what's working", "PMT: what's broken", "PMT: what we'll fix first", "Conservative case ($40 CPL, 50% contacted, 20% close): customers and CAC", "Expected case ($25 CPL, 70%, 30%): customers and CAC", "Strong case ($15 CPL, 85%, 40%): customers and CAC", "Assumptions I'll verify in the first 30-60 days"],
          rubric: ["Diagnosis names one constraint to fix first", "Math is shown step by step", "CAC is calculated for each case", "Assumptions are explicit", "No single-number promise"],
          model: "Conservative: $1,500 ÷ $40 = 37.5 leads × 50% ≈ 19 contacted × 20% ≈ 4 customers; CAC ≈ $375-400. Expected: 60 leads × 70% = 42 × 30% ≈ 13; CAC ≈ $119. Strong: 100 × 85% = 85 × 40% = 34; CAC ≈ $44. Much of the range comes from contact and close rate, the client's follow-up and sales."
        }
      ],
      today: { task: "Write PMT's three-sentence diagnosis and share it with Chris with one question: 'Does this match what you're seeing?'", output: "A three-sentence diagnosis sent to PMT", minutes: 25, suggested: false },
      check: [
        { q: "What are the three sentences of a diagnosis?", a: "What's working, what's broken, what we'll fix first." },
        { q: "Name the four diagnostic tools of Phase 2.", a: "The Advertising Performance Equation, funnel math, the local presence audit, and awareness/sophistication." },
        { q: "How should you handle a client who wants a 'spend $X, get Y customers' promise?", a: "Give conservative, expected and strong cases with stated assumptions you'll verify in the first 30-60 days." }
      ]
    },
    {
      id: "ops-13",
      part: "prove",
      title: "Launch, leave it alone, then run the rhythm",
      minutes: 12,
      tags: ["Book", "Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "Mastery Guide Ch 22", section: "Phase 5: launch; Phase 6: optimize in a 90-day rhythm", who: "Roy H. Williams, Olivier Blanchard, Alex Hormozi, King Kong (book synthesis)" },
        { doc: "Mastery Workbook Ch 22", section: "Recall 22.7, 22.8, 22.12", who: "Workbook" },
        { doc: "Mentor Guide 08 V2", section: "5. When results disappoint (if a campaign is producing, don't change anything)", who: "Paul Snowman, 10/19/26" },
        { doc: "9 New Calls study guide", section: "Retention (watch the numbers weekly); Research and judgment (don't shut ads off early)", who: "Cam 10/29/26; Tayt Shelman 10/30/26" }
      ],
      alsoIn: ["Meta Ads tab (learning phase and testing metrics)"],
      idea: `**Phase 5: launch.** Run the launch checklist and the landing-page checklist. **Submit test leads.** Confirm the client's team knows the offer and what the ads say; Williams insists the sales team must sound like a continuation of the ads. Then **leave the campaigns alone for about a week** while the system learns.

**Phase 6: optimize in a rhythm.** The Mastery Guide's cadence:

**Weekly**
- Spend, cost per lead, cost per qualified lead, booked customers.
- Lead response time and outcomes in the CRM.
- Launch 2-5 new creative variants or concepts; diagnose before deleting.
- Publish content; mine comments and DMs.

**Every two weeks:** a short client check-in. Williams' partners asked one question at every meeting: **"How are we tracking?"**

**Monthly**
- A one-page report in Blanchard's tiers: (1) business results (customers, revenue, CAC), (2) funnel metrics, (3) audience metrics, plus what we learned and what we're testing next.
- A **Numbers Day** with the owner (King Kong): reconcile platform numbers with real bookings and cash.
- One improvement to the weakest funnel step ("fix it twice": the symptom and the system).

**Quarterly:** a strategy review. What's the weakest multiplier now? Then Hormozi's **more → better → new**: do more of what works, make it better, then add one new channel or offer.

**What the mentors add:**
- **Paul (10/19):** if a campaign is producing, don't change anything.
- **Tayt (10/30):** "People usually shut ads off before they get a result."
- **Cam (10/29):** watch the numbers weekly. He won another agency's client simply because cost per lead doubled and nobody refreshed the creative.`,
      keyPoints: [
        "Launch with checklists and test leads; then hands off for about a week.",
        "Weekly: spend, CPL, qualified leads, bookings, response time, new variants.",
        "Biweekly: 'How are we tracking?'",
        "Monthly: one-page tiered report + Numbers Day + one fix.",
        "Quarterly: weakest multiplier, then more → better → new."
      ],
      why: "A steady rhythm catches ad fatigue and slow follow-up early, which is exactly how agencies lose clients (and how Cam wins them).",
      example: {
        title: "A weekly row for PMT",
        body: "Week of the 10th: spend $175, 14 leads, CPL $12.50, 9 contacted within 5 minutes, 4 booked a class. Note: hook 'Everyone here is new' still leading; CPL up 20% from last week on the static. Next: two new hook variations on the winner, no other changes."
      },
      practice: [
        {
          prompt: "Design the rhythm you'll run for PMT.",
          fields: ["Weekly: the numbers I'll pull and where from", "Weekly: how many new creative variants and how I decide", "Biweekly check-in: format and the question I'll ask", "Monthly: report sections (Blanchard's three tiers + learned + testing next)", "Numbers Day: which platform numbers I'll reconcile with which real numbers", "Quarterly: how I'll pick the next 'more, better, or new'"],
          rubric: ["Weekly numbers include response time and bookings, not just CPL", "Has a 'don't touch what's producing' rule", "Monthly report leads with business results", "Numbers Day reconciles platform data with real bookings or cash"]
        }
      ],
      today: { task: "Start PMT's weekly numbers tracker with this week's row (spend, leads, CPL, contacted, booked, what's next). Put a recurring biweekly 'How are we tracking?' check-in on the calendar.", output: "First weekly row logged and the check-in scheduled", minutes: 25, suggested: false },
      check: [
        { q: "After launch, how long should you generally leave campaigns alone?", a: "About a week, while the system learns." },
        { q: "What one question did Williams' partners ask at every client meeting?", a: "\"How are we tracking?\"" },
        { q: "Describe the monthly rhythm.", a: "A one-page tiered report, a Numbers Day reconciling platform numbers with real bookings and cash, and one improvement to the weakest funnel step." }
      ]
    },
    {
      id: "ops-14",
      part: "prove",
      title: "Track the funnel, stage by stage (the KPI tracker)",
      minutes: 10,
      tags: ["Course", "Mentor"],
      date: "2026-08-19",
      source: [
        { doc: "Mentor Guide 08 V2", section: "7. KPI tracking (LC KPI Tracker)", who: "LC KPI Tracker (course document)" },
        { doc: "Mentor Guide 08 V2", section: "New in V2: Your daily operating rhythm (ad tracking sheet)", who: "Clayton Bell, 8/19/26" }
      ],
      alsoIn: ["Meta Ads tab (hook rate, hold rate, testing metrics)"],
      idea: `The LC KPI Tracker is built for LC's own agency model (follower ads → DMs → calls), but its structure adapts to any pipeline, including ZDub's and each client's.

**The dashboard** shows, over any date range: ad spend, cash collected, ROAS, followers, calls booked, deals closed, CAC (cost to acquire a customer) and close rate.

**The funnel stages**, in order:
profile visits → followers → qualified followers → responses → calls booked → offers made → deals closed.

**Daily columns** include cost per visit, CTR, cost per follower, cost per qualified follower, cost per response, cost per call, **show rate**, **close rate**, CAC, cash collected and ROAS, plus **every stage-to-stage conversion rate**. Then weekly reports, monthly totals and year to date.

**Why stage-to-stage rates matter.** Totals tell you *that* something changed; conversion rates tell you *where*. If cost per call rises, the tracker shows whether it's fewer follows, fewer responses, or fewer people booking after they respond. That's the difference between "ads stopped working" and "we stopped replying to DMs fast."

Clayton (8/19) calls an ad tracking sheet "non-negotiable" in his pod. Write the numbers down daily.

**Adapting it.** Swap the stages for whatever your funnel actually is:
- **ZDub's pipeline:** prospects contacted → replies → calls booked → calls shown → offers made → clients signed.
- **PMT's lead funnel:** link clicks or form opens → leads → contacted → booked a class → attended.

Keep the same idea: cost per stage, conversion between stages, and the business result at the end.`,
      keyPoints: [
        "Dashboard: spend, cash, ROAS, calls booked, deals closed, CAC, close rate.",
        "Track every stage-to-stage conversion rate, not just totals.",
        "Show rate and close rate live in the tracker.",
        "Adapt the stages to your real funnel.",
        "Log daily; review weekly, monthly, year to date."
      ],
      why: "When a number moves, ZDub needs to know which stage moved. That's how you tell a client 'the ads are fine, response time slipped' with proof.",
      table: {
        head: ["Stage (ZDub pipeline)", "Cost metric", "Conversion to next stage"],
        rows: [
          ["Prospects contacted", "Time or spend per contact", "Reply rate"],
          ["Replies", "Cost per reply", "Reply → call booked"],
          ["Calls booked", "Cost per booked call", "Show rate"],
          ["Calls shown", "Cost per shown call", "Offer rate"],
          ["Offers made", "-", "Close rate"],
          ["Clients signed", "CAC", "-"]
        ]
      },
      example: {
        title: "Finding the leak with stage rates",
        body: "PMT's cost per booked class rises from $35 to $60. Totals alone look like 'the ads got worse.' The stage rates show leads held steady but lead → contacted dropped from 80% to 45% the week the instructor who answers texts was on vacation. The fix is coverage for lead response, not new creative."
      },
      practice: [
        {
          prompt: "Build your tracker columns for ZDub's pipeline and PMT's funnel.",
          fields: ["ZDub stages (in order)", "ZDub: cost and conversion metrics I'll track", "PMT stages (in order)", "PMT: cost and conversion metrics I'll track", "Where each number comes from (Ads Manager, GHL, PMT's booking system)"],
          rubric: ["Stages match the real funnel", "Every stage has a conversion rate to the next", "Includes show rate and close rate where relevant", "Data source named for each number"]
        }
      ],
      today: { task: "Make a simple sheet with your ZDub pipeline stages and fill in this month's real counts (even if they're small). Calculate each stage-to-stage rate.", output: "ZDub's first funnel tracker with real numbers", minutes: 30, suggested: false },
      check: [
        { q: "What are the funnel stages in the LC KPI Tracker?", a: "Profile visits → followers → qualified followers → responses → calls booked → offers made → deals closed." },
        { q: "Why track stage-to-stage conversion rates instead of just totals?", a: "Totals show that something changed; conversion rates show where it changed." },
        { q: "What did Clayton call an ad tracking sheet in his pod?", a: "Non-negotiable." }
      ]
    },
    {
      id: "ops-15",
      part: "prove",
      title: "Prove ROI: match leads to paying customers",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-15",
      source: [
        { doc: "Mentor Guide 08 V2", section: "6. Attribution and proving ROI; Where the mentors disagree (platform vs CSV)", who: "Cam 10/15/26; Logan McKinney 10/9 and 10/13/26; Noah Wyman 10/7/26" },
        { doc: "Mentor Guide 08 V2", section: "New in V2: Client speed, trust and infrastructure (judged on vibes)", who: "Jason Maulucci, 8/18/26" },
        { doc: "Mentor Guide 00 V2 · Master Index", section: "Principles, #10 Prove it", who: "Cam 10/15; Logan 9/25, 10/13/26" }
      ],
      idea: `If you can't prove the customers came from you, you'll be judged on vibes (Jason, 8/18). A friend of Logan's lost $5-7k because he couldn't prove 20+ customers came from him (10/9).

**Method 1: the lead CSV match (Cam, 10/15).** Download the leads CSV from the Meta form and compare the emails and phone numbers against the client's list of paying customers. No extra software. **Set this expectation at the start**: you'll need access to who actually paid.

**Method 2: baseline vs growth (Logan, 10/13).** With a flat retainer, show the client's same **baseline** revenue, plus the **new** revenue from marketing on top. Logan's chart shows the extra in a different color, so the owner sees at a glance what marketing added.

**Method 3: full-pipeline attribution (Logan, 10/13).** Needed if you ever want performance pricing. Logan built his own booking platform so he can see the source (the Meta ad), analytics, retention automations, win-back texts at 55 days, review requests and slow-day offers. That's a big build; the Mentor Guide notes both his platform and Cam's CSV method are valid.

**Think in lifetime value (Noah, 10/7).** Month-one ad spend may only break even on a customer. Ask how long customers stay or how often they come back; that's where the return shows up.

**Set it up before launch.** Jason's infrastructure point: no CRM, call tracking or conversion events means no attribution. If the client doesn't have it, build it (and charge for it).

For PMT, the match is simple in principle: Meta leads (name, phone, email) against registered students, by month.`,
      keyPoints: [
        "Download the Meta leads CSV; match phones and emails to paying customers.",
        "Tell the client on day one you'll need who actually paid.",
        "Show baseline plus growth in a different color.",
        "Full-pipeline attribution is needed for performance pricing.",
        "Count lifetime value, not just month one."
      ],
      why: "ZDub's first case study, its retention, and any future performance deal all depend on proving which PMT students came from the ads.",
      example: {
        title: "PMT's monthly lead match",
        body: "Export October's Meta leads (42 rows). Ask PMT for October registrations (phone and email). Match: 11 leads registered. Report: '42 leads, 11 became students, $X in course revenue from $Y in spend,' and keep the matched list so next month's report can show repeat or next-level enrollments."
      },
      practice: [
        {
          prompt: "Plan the attribution setup for PMT.",
          fields: ["The data I need from PMT (fields, format, how often)", "How I'll match (columns, tool)", "How I'll show baseline vs growth", "The lifetime-value question I'll ask", "What I'll say to set this expectation"],
          rubric: ["Names exact fields (phone, email, date, amount)", "Monthly cadence", "Baseline is defined before marketing started", "Accounts for repeat or next-level purchases", "Expectation is set up front, not after a dispute"]
        }
      ],
      today: { task: "Download PMT's current Meta leads CSV (or set up where it will come from) and ask PMT for the matching registration list for the same dates. Match them in a sheet.", output: "First lead-to-registration match (or the data request sent)", minutes: 30, suggested: false },
      check: [
        { q: "What is Cam's lead CSV method?", a: "Download the leads CSV from Meta and compare emails and phones against the client's paying customers." },
        { q: "How does Logan show ROI on a flat retainer?", a: "Baseline revenue plus new revenue from marketing, with the extra in a different color." },
        { q: "Why does Noah say to ask about lifetime value?", a: "Month-one ad spend may only break even on a customer; the return comes from how long they stay." }
      ]
    },
    {
      id: "ops-16",
      part: "prove",
      title: "When results disappoint: own it, then bring a plan",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "Mentor Guide 08 V2", section: "5. When results disappoint", who: "Logan McKinney 10/9 and 10/13/26; Paul Snowman 10/19/26; Jason Maulucci 8/18 and 8/25/26" }
      ],
      alsoIn: ["Funnels tab (Client lead handling)"],
      idea: `Every agency has a bad month. What the client remembers is how you handled it.

**Take accountability. No blaming.** Logan's barbershop client got 90 leads from ads in a month but only one sat in the chair, and the owner said the marketing wasn't working. Logan's response: "I don't know what the issue is yet but I'm committed to solving it." No gaslighting, no blaming the website. He **presented a plan**, and the owner was happy (10/9).

**Make good on the offer, even by hand.** On another barbershop with 90 leads and only 2-3 provable visits, Logan is personally calling all 90 leads (10/13).

**Reframe vanity worries.** A client confused follower counts with results. Logan: "We're not doing follower campaigns. What does your booking calendar look like?" (10/13)

**When the client thinks they know better** (10/9): tactfully ask for trust ("you don't hire an ice cream parlor to do your plumbing") and tie it to the KPI: "you can't hold me accountable to results of the content you want to make if you give me a KPI. Let me drive it."

**Don't fix what's working.** Paul (10/19): if a campaign is producing, don't change anything.

**Respect the sales cycle before anyone judges.** Noah refunded a client **$8,500** even though the account was on pace for 8-10x; halfway through a 14-day sales cycle, half the quotes hadn't even gone out (Jason, 8/18). Set the test budget and timeline up front so the client judges on data, not on week one.

**If you offer a guarantee, set the refund money aside.** You'll usually know by about day 14 (Jason, 8/25).

The pattern: own it out loud, find the leak (often lead handling, see the Funnels tab), show the plan with dates, and keep the client looking at the agreed KPI.`,
      keyPoints: [
        "\"I don't know what the issue is yet but I'm committed to solving it.\"",
        "No blaming the client, the website or Meta. Bring a plan.",
        "Reframe vanity metrics back to the KPI.",
        "Don't touch what's producing; respect the sales cycle.",
        "Guarantee? Set the refund money aside."
      ],
      why: "PMT is ZDub's first client and first case study. Handling a slow month with ownership and a plan is what turns a wobble into trust.",
      example: {
        title: "A bad-month message, Logan style",
        body: "'Chris, October brought 38 leads but only 3 registrations, and that's not good enough. I don't know the full reason yet, but I'm committed to fixing it. Here's my plan for the next two weeks: (1) I'll check response times on every October lead, (2) I'll call the leads who never booked to ask what stopped them, (3) we keep the two ads that are producing and replace the weakest one. I'll send you what I find by Friday the 14th.'"
      },
      practice: [
        {
          prompt: "Write your response to a client who says 'the marketing isn't working.'",
          fields: ["The facts (numbers for the period)", "My ownership line", "Where I'll look for the leak first (and why)", "The plan with dates", "What I won't change (what's producing)"],
          rubric: ["Owns the problem without blaming anyone", "Uses real numbers", "Checks lead handling and sales cycle before blaming creative", "Plan has dates and a follow-up", "Protects what's already working"]
        }
      ],
      today: { task: "Write down PMT's sales cycle (days from lead to paid seat) and the test budget and timeline you'll judge results on. Share it with Chris so you both judge on the same data.", output: "PMT's sales cycle and test window, agreed in writing", minutes: 20, suggested: false },
      check: [
        { q: "What did Logan say to the barbershop owner who said the marketing wasn't working?", a: "\"I don't know what the issue is yet but I'm committed to solving it.\" Then he presented a plan." },
        { q: "Why did Noah's $8,500 refund turn out to be a mistake?", a: "The account was on pace for 8-10x; halfway through a 14-day sales cycle, half the quotes hadn't gone out. It was judged before the cycle finished." },
        { q: "What should you do with money from a client if you offered a guarantee?", a: "Set the refund money aside; you'll usually know by about day 14." }
      ]
    },
    {
      id: "ops-17",
      part: "keep",
      title: "Report and build case studies from real numbers",
      minutes: 12,
      tags: ["Mentor", "Course"],
      date: "2026-10-30",
      source: [
        { doc: "Mentor Guide 08 V2", section: "8. Case studies (LC Case Study Template); New in V2 monthly email report", who: "LC Case Study Template; Logan McKinney 9/25 and 10/13/26; Clayton Bell 8/19/26" },
        { doc: "Mastery Guide Ch 22", section: "Phase 6 (monthly one-page report in Blanchard's tiers)", who: "Olivier Blanchard, Social Media ROI (book synthesis)" },
        { doc: "9 New Calls study guide", section: "Organic content and personal brand (post results as they happen)", who: "Tayt Shelman, 10/30/26" }
      ],
      idea: `Reports keep clients. Case studies win the next ones. Both come from the same honest numbers.

**The monthly report.** The only reporting cadence a mentor named is Logan's **monthly email report** (9/25): "Kong, check your email. The whole report is in there." The Mastery Guide's format for a one-page monthly report uses Blanchard's tiers:
1. **Business results:** customers, revenue, CAC.
2. **Funnel metrics:** leads, contact rate, bookings, show rate.
3. **Audience metrics:** reach, followers, engagement.
Then **what we learned** and **what we're testing next.** Lead with tier 1; owners care about customers, not CTR.

**Be honest about what ads did and didn't cause** (Logan, 9/25). Don't claim the walk-ins from a radio spot.

**The LC Case Study Template** sections: Executive Summary; Business Context (industry, target audience, primary goal); Content Strategy (channels, format, key messaging); Funnel Research and Analysis (what's performing, competitor benchmarks, hooks and angles); Creative Assets (moodboard, brand guidelines, drafts); Execution Plan (script/copy, storyboard, distribution); Performance Metrics (KPIs, benchmarks); Pitch and Rationale.

**Logan's published format is shorter:** a real client, real spend, real return, from his own books. "Spent $3,000 in ads and made $138,000 back over five months" (10/13).

**Turn results into ads.** Logan's real numbers became his **best-performing ad**, refreshed each month so they don't go stale (9/25). Clayton (8/19): once you have case studies, refilm your follower ad around them.

**Capture proof while it's hot.** Tayt (10/30): post results as they happen, and ask for the testimonial and a referral while the client is excited, not three months later.`,
      keyPoints: [
        "Monthly report: business results first, then funnel, then audience.",
        "Always include 'what we learned' and 'what we're testing next.'",
        "Be honest about what the ads did and didn't cause.",
        "Case study = real client, real spend, real return.",
        "Results become your best ad; ask for the testimonial while they're excited."
      ],
      why: "PMT's numbers are ZDub's first proof. A clean monthly report keeps Chris confident, and the same numbers become the case study and the ad that sign the next client.",
      example: {
        title: "Logan's case-study line, ZDub-shaped",
        body: "Once PMT has real, approved numbers: 'Pacific Motorcycle Training spent $[real spend] on Meta ads and filled [real number] beginner seats in [real period].' Until then, it's a template with blanks, never an estimate. The same line becomes the hook of ZDub's next ad, refreshed monthly."
      },
      practice: [
        {
          prompt: "Build your monthly report template and a case-study skeleton for PMT.",
          fields: ["Tier 1 business results (which numbers)", "Tier 2 funnel metrics (which numbers)", "Tier 3 audience metrics (which numbers)", "What we learned / what we're testing next (prompts)", "Case study skeleton: problem, what we did (the mechanism), result vs baseline", "When and how I'll ask Chris for a testimonial and referral"],
          rubric: ["Leads with customers and revenue", "Every number has a source", "Has 'learned' and 'testing next' sections", "Case study compares with a baseline", "Testimonial ask is timed to a win"]
        }
      ],
      today: { task: "Write PMT's first monthly report email using the three tiers, even if the numbers are small. Send it or save it as the template.", output: "One monthly report email for PMT", minutes: 35, suggested: false },
      check: [
        { q: "What are Blanchard's three report tiers?", a: "Business results, funnel metrics, audience metrics (plus what we learned and what we're testing next)." },
        { q: "What's Logan's case study example?", a: "A shop spent $3,000 on ads and made $138,000 back over five months, from his own books." },
        { q: "When should you ask for a testimonial and referral, per Tayt?", a: "Right when the client gets results and is excited, not three months later." }
      ]
    },
    {
      id: "ops-18",
      part: "keep",
      title: "Retention: own the system and stay on their numbers",
      minutes: 10,
      tags: ["Mentor", "Book"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls study guide", section: "Fulfillment, team, retention and upsells: Retention", who: "Jason Maulucci 6/10/26; Cam 10/29/26; Tayt Shelman 11/4/26" },
        { doc: "Mentor Guide 08 V2", section: "9. Retention and stickiness", who: "Logan McKinney 10/13 and 10/16/26; Jason Maulucci 8/25/26" },
        { doc: "Mastery Guide Ch 22", section: "Managing the relationship", who: "Roy H. Williams (book synthesis)" }
      ],
      idea: `Clients rarely leave because of one bad ad. They leave because nobody was watching, or because they decide they can do it themselves.

**Own the IP** (Jason, 6/10). The client creates the ad account, but you hold the rights, the tracking and the process. Otherwise, once ads work, they'll try to run them in-house.

**Watch the numbers weekly** (Cam, 10/29). Cam won another agency's client simply because cost per lead doubled and no one refreshed the creative. "If they would have just maintained" it, he'd have had nothing to sell but organic. When you pitch, **don't bad-mouth the old agency**; point to the data.

**Pick clients carefully** (Tayt, 11/4). Tayt has about 20 clients and lost three this year: one thought he was too expensive, one sold the business, one moved everything in-house.

**Stay ethical about what's theirs** (Logan, 10/13). The client gets GHL and the automations through you. If they leave, their leads, customers and assets stay theirs; your systems get turned off.

**Don't run ads for direct competitors in the same area** (Logan, 10/16). Scale your offer across locations instead.

For scale: Noah's agency was described as about $43k/month with **0% churn** (Jason, 8/25).

**Relationship habits from the Mastery Guide (Williams):**
- **Tell the truth, even when it hurts.** Williams' firm told prospects that if they wanted yes-men, they shouldn't hire them.
- **Separate harvest from brand.** Judge lead campaigns weekly; judge brand-building monthly and quarterly.
- **Deliver lagniappe:** small unexpected extras that raise the client's experience of you.
- **Grow together.** Frame the engagement as a partnership with shared goals.`,
      keyPoints: [
        "Own the process and tracking so working ads don't walk in-house.",
        "Weekly numbers catch fatigue before a competitor does.",
        "Never bad-mouth the old agency; show data.",
        "One client per niche per area.",
        "Tell the truth, add lagniappe, frame it as a partnership."
      ],
      why: "Keeping PMT is worth more than any single new client right now: it's ZDub's revenue, its proof and its reference.",
      example: {
        title: "Catching fatigue before it costs the client",
        body: "PMT's best ad goes from $11 to $19 per lead over three weeks. Zach flags it in the weekly report ('our winner is getting tired; two fresh hooks go live Monday') before Chris notices. That's exactly the moment Cam says other agencies lose clients."
      },
      practice: [
        {
          prompt: "Write PMT's retention plan.",
          fields: ["What ZDub owns (process, tracking, creative system) vs what PMT owns", "My weekly early-warning numbers and the trigger for action", "One lagniappe I can deliver this month", "How I'll tell the truth about something hard", "My policy on competitors (same niche, same area)"],
          rubric: ["Clear split of ownership that's ethical", "Early-warning trigger is a number", "Lagniappe is small and specific", "Competitor policy is written"]
        }
      ],
      today: { task: "Pick one small lagniappe for PMT this week (a quick reel from a class, a fixed broken link on their site, a list of review replies) and deliver it without being asked.", output: "One unexpected extra delivered to PMT", minutes: 30, suggested: false },
      check: [
        { q: "How did Cam win another agency's client?", a: "Their cost per lead had doubled and nobody refreshed the creative." },
        { q: "What three reasons did Tayt give for losing clients this year?", a: "One thought he was too expensive, one sold the business, one moved everything in-house." },
        { q: "What's Logan's rule on competitors?", a: "Don't run ads for direct competitors in the same area; scale your offer across locations instead." }
      ]
    },
    {
      id: "ops-19",
      part: "keep",
      title: "Upsell right after a win, then expand",
      minutes: 10,
      tags: ["Mentor", "Book"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls study guide", section: "Upsell right after a win", who: "Tayt Shelman 10/30 and 11/4/26" },
        { doc: "Mentor Guide 08 V2", section: "9. Retention and stickiness (earn the upsell, grow scope, training ground, hiring campaigns, scope creep)", who: "Calum Tresham 8/28; Logan McKinney 10/9, 10/16; Noah Wyman 10/7; Jason Maulucci 8/25/26" },
        { doc: "Mastery Guide Ch 22", section: "Phase 7: expand", who: "Book synthesis (Hormozi, Dib, Godin, Williams)" }
      ],
      alsoIn: ["Offers tab (scope creep and pricing)"],
      idea: `The best time to sell is right after someone buys, Tayt says (10/30), like the snacks at the grocery checkout.

**After a win, do three things:** film a testimonial, ask for a referral, and offer more work (Tayt).

**Build "clip-on" services over time** (Tayt, 11/4). Start narrow (Meta ads), then add organic, a VA for lead follow-up, and so on.

**Earn the upsell first** (Calum, 8/28). Start with one thing, often just ads, deliver, then sell more after a few months. Noah upsold an **$8,000 build after 3-4 months** of ads.

**Grow scope with results** (Logan, 10/9). His card shop went from $1,500 to $2,500/month as deliverables grew.

**Use early clients as a training ground** (Logan, 10/16). Test add-ons free with early clients, then sell them later.

**Hiring campaigns** help when the client can't handle more work (Noah, 10/7; Logan, 10/16). More capacity means more room for your ads.

**Handle scope creep in writing** (Jason, 8/25): out-of-scope requests get a trial, then an added fee or profit share. (Details in the Offers tab.)

**Phase 7 of the Client Growth Blueprint: expand.** Once one channel is reliably profitable, expand along the most promising axis:
- **More reach:** wider radius, new towns.
- **More offers:** higher tiers, memberships, maintenance plans (Dib's lifetime value; Godin's "intravenous" permission).
- **More channels:** Google Local Services Ads, email, partnerships, YouTube search content, AI-search visibility.
- **More brand:** an always-on awareness layer.

Use Hormozi's order: **more → better → new.** Do more of what works, make it better, and only then add something new.`,
      keyPoints: [
        "After a win: testimonial, referral, offer more.",
        "Start narrow; add clip-on services as you deliver.",
        "Earn the upsell over a few months of results.",
        "Test add-ons free with early clients, then sell them.",
        "Expand in order: more → better → new."
      ],
      why: "Growing PMT's account with services that already proved themselves is cheaper and faster than finding a new client, and it builds the add-on menu ZDub will sell to everyone else.",
      example: {
        title: "A clip-on path for PMT",
        body: "Now: Meta ads for beginner classes. After a strong month: film a student testimonial and ask Chris for a referral to another business owner. Next clip-on, tested free first: speed-to-lead texting and a nurture sequence. Later: organic content for PMT's pages, then ads for a next-level class (more offers) or a new location (more reach)."
      },
      practice: [
        {
          prompt: "Map the expansion path for PMT (or another client).",
          fields: ["The win I'm waiting for (number) that triggers the upsell conversation", "Testimonial and referral ask (what I'll say)", "Clip-on #1, #2, #3 in order", "Which one I'll test free first", "Phase 7 axis I'd expand on first (reach, offers, channels, brand) and why"],
          rubric: ["Upsell is tied to a real result", "Clip-ons build on what's already working", "One free test before a paid add-on", "Expansion follows more → better → new"]
        }
      ],
      today: { task: "Write the 'after a win' script for PMT: the testimonial ask, the referral ask, and the one add-on you'd offer. Keep it ready for the first strong week.", output: "A three-part after-the-win script for PMT", minutes: 20, suggested: true },
      check: [
        { q: "What three things does Tayt do when a client gets results?", a: "Film a testimonial, ask for a referral, and offer more work." },
        { q: "What upsell did Noah make, and when?", a: "An $8,000 build after 3-4 months of running ads." },
        { q: "What are the four expansion axes in Phase 7?", a: "More reach, more offers, more channels, more brand." }
      ]
    },
    {
      id: "ops-20",
      part: "capstone",
      title: "Final project: one client, the whole program (PMT)",
      minutes: 15,
      tags: ["Book"],
      source: [
        { doc: "Mastery Workbook · Part VII Capstone", section: "One Client, the Whole Program: the deliverables, the complete growth plan, scoring rubric", who: "Workbook capstone" },
        { doc: "Mastery Guide Ch 22", section: "The Client Growth Blueprint (all phases)", who: "Book synthesis" }
      ],
      idea: `The capstone pulls everything in the program into one real client system. PMT is the natural choice. Most pieces already exist in your Client Lab work; the job is to **assemble them into one coherent plan, launch it, and prove the result.** The Workbook suggests two to three weeks to build it and 90 days to run it.

**The sixteen deliverables**, each built from earlier work:
1. Qualification scorecard and discovery notes (Ch 22)
2. APE diagnosis and funnel diagnosis, plus the three-sentence diagnosis (Ch 1, 15, 22)
3. Voice-of-customer bank and customer profile card (Ch 3)
4. Positioning brief: ERRC grid, positioning statement, "who it's not for" (Ch 2)
5. BrandScript and one-liner (Ch 6)
6. Grand Slam Offer worksheet (Ch 11)
7. Voice guide and brand kit (Ch 12, 14)
8. Creative brief and 40 rough ideas; the chosen campaign idea as a series (Ch 13)
9. Awareness-matched ads: at least 10 across four formats, with headlines, hooks and lead-ins (Ch 8, 9, 10, 18)
10. Content mission, pillars, knowledge bank and a 30-day calendar (Ch 16, 17)
11. Landing page (or form) built and tested with three people (Ch 20)
12. Speed-to-lead system, nurture sequence and CRM stages (Ch 19)
13. Review engine, referral program and one lagniappe moment (Ch 7)
14. Local presence audit and customer map (Ch 21)
15. Measurement setup, baseline, three-case projection and monthly report template (Ch 15, 22)
16. A 90-day plan with weekly, monthly and quarterly rhythms (Ch 22)

**Assemble them in one client folder** with a **one-page summary on top**: the diagnosis, the positioning, the offer, the campaign idea, the 90-day targets and the three-case projection.

**Then:**
1. **Present it** to the client: strategy first, then the plan, then the projection in ranges, then the chickening-out warning.
2. **Launch** using the ads and landing-page checklists.
3. **Run** the weekly, monthly (Numbers Day) and 90-day rhythms.
4. **At day 90, write a case study:** the problem, what you did (the mechanism), and the result in numbers compared with the baseline.

**Score it honestly** (or with a trusted business owner): eight areas, 0-4 points each, 32 max. **24 or more means a professional-grade system.** Under 24, find your two lowest areas, revisit those chapters, and improve them in the next 90-day cycle.`,
      keyPoints: [
        "One real client (PMT), sixteen deliverables, one folder.",
        "A one-page summary sits on top.",
        "Present: strategy → plan → projection in ranges → chickening-out warning.",
        "Run it 90 days, then write the case study against the baseline.",
        "Score 8 areas × 4 points; 24+ is professional grade."
      ],
      why: "This is the program turned into ZDub's real product: a complete, proven growth system for PMT that becomes the case study and the template for every future client.",
      table: {
        head: ["Area", "0-1 (weak)", "2-3 (solid)", "4 (mastery)"],
        rows: [
          ["Research", "Assumptions", "Reviews and some interviews", "Full VOC bank in customers' own words"],
          ["Diagnosis", "Generic", "Names the leak", "Weakest multiplier proven with numbers"],
          ["Positioning", "\"Quality and service\"", "Specific", "Specific, true, and a real sacrifice"],
          ["Offer", "Discount", "Bundle with bonuses", "Grand Slam with an honest guarantee and name"],
          ["Creative", "One ad, one angle", "Several ads", "Awareness-matched, 3/3 hyperdopamine, series idea"],
          ["Funnel", "Ads only", "Ads and a page", "Ads, matched page, speed to lead, nurture"],
          ["Measurement", "Platform numbers", "Some tracking", "Baseline, CRM, reconciled monthly report"],
          ["Results", "Not launched", "Launched", "90 days run, with a written case study"]
        ]
      },
      example: {
        title: "PMT's one-page summary (shape)",
        body: "Diagnosis: three sentences (working, broken, fix first). Positioning: one statement plus 'who it's not for.' Offer: the named offer with its honest guarantee. Campaign idea: the series concept and its first three ads. 90-day targets: measurable (e.g., seats filled per location per month, lead response time). Projection: conservative, expected and strong cases with the assumptions you'll verify. Every line traces back to something found in discovery or diagnosis."
      },
      practice: [
        {
          prompt: "Part 1 · The sixteen deliverables. For each, write its status and where it lives (link or folder), or the next step to finish it.",
          fields: ["1. Qualification scorecard and discovery notes", "2. APE + funnel diagnosis + three-sentence diagnosis", "3. VOC bank and customer profile card", "4. Positioning brief (ERRC, statement, who it's not for)", "5. BrandScript and one-liner", "6. Grand Slam Offer worksheet", "7. Voice guide and brand kit", "8. Creative brief, 40 rough ideas, campaign series", "9. 10+ awareness-matched ads across four formats", "10. Content mission, pillars, knowledge bank, 30-day calendar", "11. Landing page or form, tested with three people", "12. Speed-to-lead system, nurture sequence, CRM stages", "13. Review engine, referral program, one lagniappe", "14. Local presence audit and customer map", "15. Measurement setup, baseline, three-case projection, report template", "16. 90-day plan with weekly, monthly, quarterly rhythms"],
          rubric: ["Every deliverable has a status and a location", "Missing pieces have a concrete next step", "All of it is for one real client", "Pieces connect (offer matches ads, ads match page, page feeds follow-up)"]
        },
        {
          prompt: "Part 2 · The one-page summary that sits on top of the folder.",
          fields: ["Diagnosis (three sentences)", "Positioning", "Offer", "Campaign idea", "90-day targets", "Three-case projection (conservative / expected / strong + assumptions)"],
          rubric: ["Fits on one page", "Targets are measurable", "Projection is in ranges with stated assumptions", "Every element traces back to discovery or diagnosis"]
        },
        {
          prompt: "Part 3 · Present, launch, run and write it up.",
          fields: ["Presentation plan: strategy → plan → projection in ranges → chickening-out warning", "Launch: checklists run, test leads submitted (date)", "Rhythm: weekly numbers, monthly Numbers Day, 90-day review (dates on calendar)", "Day-90 case study: the problem", "Day-90 case study: what we did (the mechanism)", "Day-90 case study: result in numbers vs baseline"],
          rubric: ["Presentation follows the Workbook order", "Test leads submitted before ads run", "Rhythms are on the calendar", "Case study compares with the baseline using real numbers"]
        },
        {
          prompt: "Part 4 · Score it (0-4 per area, 32 max).",
          fields: ["Research", "Diagnosis", "Positioning", "Offer", "Creative", "Funnel", "Measurement", "Results", "Total / 32", "My two lowest areas and the chapters I'll revisit"],
          rubric: ["Scored honestly against the rubric wording", "Ideally scored with a trusted business owner", "Two lowest areas named with a plan for the next 90-day cycle"]
        }
      ],
      today: { task: "Create PMT's capstone folder with sixteen numbered subfolders and a blank one-page summary doc. Drop in every piece you already have and mark each deliverable done, partial or missing.", output: "PMT capstone folder with a status for all 16 deliverables", minutes: 45, suggested: false },
      check: [
        { q: "In what order do you present the capstone plan to the client?", a: "Strategy first, then the plan, then the projection in ranges, then the chickening-out warning." },
        { q: "What goes in the day-90 case study?", a: "The problem, what you did (the mechanism), and the result in numbers compared with the baseline." },
        { q: "What score means a professional-grade system, and what if you're under it?", a: "24 or more out of 32. Under 24, find your two lowest areas, revisit those chapters, and improve them in the next 90-day cycle." }
      ]
    }
  ]
});
