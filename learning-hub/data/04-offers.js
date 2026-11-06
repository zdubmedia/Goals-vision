HUB.tab({
  id: "offers",
  title: "Offers & Pricing",
  icon: "tag",
  tagline: "Make offers people feel foolish refusing, price them with confidence, and protect the deal.",
  intro: `This tab covers two kinds of offers, and every lesson tells you which one it is about. **(a) Offers ZDub writes for its clients' customers**, like a PMT beginner-course offer or a roofer's inspection offer, built with Hormozi's value equation, real proof and honest guarantees. **(b) ZDub's own agency offer and pricing**: your one-sentence offer, your price, your guarantee or free trial, and how to keep a deal from being cut to pieces.

Part 1 is the book method (Mastery Guide Ch 11). Parts 2 to 5 are mostly what the mentors taught on the calls, which wins wherever it conflicts with the books. Where mentors disagree, you get both sides in a table and you decide. Work one lesson a day and you will finish with a written PMT offer, a written ZDub offer, a price, a guarantee you can afford, and a simple agreement.`,
  parts: [
    { id: "client-offers", title: "Part 1 · Offers that sell for your clients" },
    { id: "zdub-offer", title: "Part 2 · ZDub's offer" },
    { id: "pricing", title: "Part 3 · Pricing" },
    { id: "guarantees", title: "Part 4 · Guarantees & risk" },
    { id: "protect", title: "Part 5 · Protecting the deal" }
  ],
  trackers: [
    { id: "offer-log", title: "Offer log", goal: "Write or rewrite one offer a week (client or ZDub) and note how the market reacted", fields: ["Business (PMT, ZDub, prospect)", "Offer sentence / name", "Guarantee or risk reversal", "Where it was used", "Reaction or result"] },
    { id: "offer-swipe", title: "Grand Slam swipe file", goal: "Save 1 strong offer a week from any industry", fields: ["Business / link", "Dream outcome", "Bonuses", "Guarantee", "Why it works"] }
  ],
  lessons: [
    {
      id: "off-01",
      part: "client-offers",
      title: "The offer does 90% of the work, so fix it before the copy",
      minutes: 8,
      tags: ["Mentor", "Book"],
      date: "2026-08-25",
      source: [
        { doc: "ZDub Mastery Guide", section: "Ch 11 intro: Offers, Proof & Calls to Action", who: "Alex Hormozi, $100M Offers (book)" },
        { doc: "ZDub_Guide_06 V2: Offer, Pricing and Finding Your Lane", section: "The billboard test (LC Outreach Psychology notes)", who: "LC document" },
        { doc: "ZDub_Guide_06 V2", section: "The short version: 'The offer does about 90% of the work'", who: "Jason Maulucci, 8/25/26" },
        { doc: "ZDub Mastery Guide", section: "The 25 Laws, Law 15", who: "Hormozi" }
      ],
      alsoIn: ["Foundations tab: market, message, media"],
      idea: `Most marketers obsess over words. Hormozi starts somewhere else: **what are you actually offering?** The Mastery Guide puts it bluntly: a great offer can make mediocre copy work, and great copy can't save a weak offer.

The mentors say the same thing in numbers. The LC Outreach Psychology notes: "Offer is maybe 10% of the work and 90% of the outcome." Jason (8/25) adds that "I do Meta ads and content" isn't an offer at all. It's the *vehicle*. The offer is what the buyer gets out the other end.

**The billboard test.** Picture your offer on a billboard with no clever copy, just the offer itself. Would anyone in the target market call? If the answer is "not really," no hook, video or landing page will rescue it. Iterate the offer first, then the copy.

This applies to both kinds of offer in this tab:
- **Client offers** (what PMT sells to riders): "Motorcycle safety course, register online" fails the billboard test. "Never ridden? Ride confidently by Sunday afternoon. Bikes and helmets provided, small classes" passes, because the outcome, the speed and the ease are all in the offer.
- **ZDub's offer** (what you sell to a roofer): "Social media management" fails. "More booked roof inspections from Meta ads, done for you, and you don't pay until we hit the number we agree on" passes.

Law 15 of the guide's 25 Laws sums up the whole tab: make an offer so good people feel stupid saying no, by raising the dream outcome and certainty and cutting the time and effort it takes. The rest of Part 1 shows you how.`,
      keyPoints: [
        "A great offer can carry average copy; great copy can't save a weak offer.",
        "\"Offer is 10% of the work and 90% of the outcome\" (LC notes).",
        "Deliverables (ads, content) are the vehicle, not the offer (Jason, 8/25).",
        "Billboard test: would the market call if they saw only the offer?",
        "Fix the offer before you touch hooks or creative."
      ],
      why: "Every PMT ad and every ZDub pitch inherits the strength or weakness of its offer. Fixing the offer is the highest-leverage hour you can spend.",
      example: {
        title: "PMT on a billboard",
        before: "Pacific Motorcycle Training. Motorcycle safety courses. Register today.",
        after: "Never ridden? Ride confidently by the end of the weekend. Bikes and helmets provided, small classes, beginners welcome.",
        body: "The 'after' names the outcome (ride confidently), the speed (one weekend) and removes effort (bikes provided). Only claim what PMT actually provides; confirm bikes, helmets and class size with Chris before using them."
      },
      practice: [
        {
          prompt: "Billboard-test three offers. Write the current offer as it appears today, then a billboard version with no copy tricks: just outcome, speed, ease.",
          fields: ["PMT: current offer", "PMT: billboard version", "ZDub: current offer", "ZDub: billboard version", "A Sacramento roofer or HVAC company you could pitch: billboard version"],
          rubric: ["Each billboard version names a result the buyer wants, not a deliverable", "At least one mentions speed or ease", "Nothing is claimed that the business can't deliver", "A stranger would understand it in 3 seconds"],
          model: "ZDub billboard: 'Sacramento contractors: more booked estimates from Facebook and Instagram, done for you.' Roofer billboard: 'Free drone roof check in Roseville. See your own roof on video before anyone climbs a ladder.'"
        }
      ],
      today: { task: "Open PMT's current ad and landing page. Write down the offer exactly as a stranger would read it, then run the billboard test and write one improved offer line to use in the next ad.", output: "One billboard-tested offer line for PMT in your ad doc", minutes: 20, suggested: false },
      check: [
        { q: "What share of the outcome does the LC Outreach Psychology note give the offer?", a: "About 90% of the outcome for about 10% of the work." },
        { q: "What is the billboard test?", a: "If the offer sat on a billboard with no copy, would anyone in the niche call? If not, fix the offer before the copy." },
        { q: "Why is 'I do Meta ads and content' not an offer (Jason, 8/25)?", a: "It describes the vehicle (deliverables), not the outcome the buyer gets." }
      ]
    },
    {
      id: "off-02",
      part: "client-offers",
      title: "Hormozi's value equation: raise the top, shrink the bottom",
      minutes: 12,
      tags: ["Book", "Mentor"],
      date: "2026-08-25",
      source: [
        { doc: "ZDub Mastery Guide", section: "Ch 11: The value equation (incl. beginner riding class example)", who: "Alex Hormozi, $100M Offers" },
        { doc: "ZDub Mastery Workbook", section: "Ch 11 Recall 11.1, 11.2, 11.11; Drill D11.1", who: "Workbook" },
        { doc: "ZDub_Guide_06 V2", section: "The value equation and the 6-step offer build", who: "Jason Maulucci, 8/25/26" },
        { doc: "The Ultimate Social Media Workbook (11/1/26)", section: "Module 3: Offers and lead magnets, Exercise 3A", who: "Workbook (Hormozi)" }
      ],
      alsoIn: ["ZDub_Guide_06 V2", "Course Lesson 2.5 — Market, Offer, Copy (taught in Foundations: Market first, then offer, then copy)", "Social Workbook Mod 3"],
      idea: `Hormozi's core tool explains why people see one offer as more valuable than another:

> **Value = (Dream Outcome × Perceived Likelihood) ÷ (Time Delay × Effort & Sacrifice)**

**The top (raise it):**
- **Dream outcome:** how big and desirable the result is, in the customer's terms, including the status it brings. Jason (8/25): "what they want, not what you sell." Most local businesses want customers and revenue, so ZDub offers should be lead or revenue based.
- **Perceived likelihood:** how sure they are it will work *for them*. Proof, reviews, guarantees, track record. Jason adds a clear step-by-step of the first 30 days (onboarding call, filming, edits back in about 24 hours, launch, leads, booked quotes, money in).

**The bottom (shrink it):**
- **Time delay:** how long until the result. Faster is more valuable, and even a quick early win counts.
- **Effort & sacrifice:** what they have to do, give up or endure. Done-for-you beats done-with-you beats do-it-yourself. Jason's line for a contractor: "The only thing you have to do is film ads once a week."

**The big insight:** most businesses only push the top ("bigger results!"). Hormozi says the easiest, cheapest wins usually sit on the bottom. Make it faster and easier. A pre-class video, online booking, a gear checklist and a "what to expect" text often add more value than any new claim.

The guide's riding-class example: raise the outcome ("ride confidently," not "complete the course"); raise likelihood (reviews from nervous beginners, coach credentials, small classes, a clear plan); shrink time ("riding by Saturday afternoon," a 10-minute pre-class video so day one starts faster); shrink effort (bikes provided, gear checklist, easy booking, parking info, what to wear).

Run the same equation on ZDub's offer: dream outcome = more booked jobs, not "content"; likelihood = a written 30-day plan plus a guarantee you can afford; time = first leads in week one or two; effort = done for you.`,
      keyPoints: [
        "Value = (dream outcome × perceived likelihood) ÷ (time delay × effort & sacrifice).",
        "Sell the result and the status, in the customer's words.",
        "Proof, guarantees and a clear 30-day step-by-step raise likelihood.",
        "The cheapest wins are usually on the bottom: faster and easier.",
        "Done-for-you beats done-with-you beats DIY."
      ],
      why: "This one formula lets you improve any offer, PMT's or ZDub's, without lowering the price. It's also the language Jason uses to judge agency offers.",
      example: {
        title: "Jason's two agencies (8/25)",
        before: "Agency 1: \"$4k/month, we run Facebook ads, content, automations.\"",
        after: "Agency 2: \"$4k/month plus $2k ad budget; we guarantee 2x ROI attributable to our ads in the first 30 days or a full refund plus $1,000 wired to you for wasting your time; 100% done for you.\"",
        body: "Same price. Agency 2 names a dream outcome (2x ROI), raises likelihood (guarantee), shrinks time (30 days) and effort (100% done for you). Note: Jason's refund-plus-cash guarantee is the bold end of a mentor disagreement covered in Part 4. The point here is the equation, not that exact guarantee."
      },
      table: {
        head: ["Variable", "Direction", "PMT idea", "ZDub idea"],
        rows: [
          ["Dream outcome", "Raise", "Ride confidently, earn your license", "More booked jobs and revenue"],
          ["Perceived likelihood", "Raise", "Reviews from nervous beginners, coach credentials", "Written 30-day plan, guarantee, PMT results"],
          ["Time delay", "Shrink", "Riding by Saturday afternoon; pre-class video", "First leads in week 1-2"],
          ["Effort & sacrifice", "Shrink", "Bikes provided, gear checklist, easy booking", "Done for you; film once a month"]
        ]
      },
      practice: [
        {
          prompt: "Drill D11.1 for PMT's beginner course: write three specific improvements for each of the four variables (12 total). Then star the three that would cost the least to implement.",
          fields: ["Dream outcome (3)", "Perceived likelihood (3)", "Time delay (3)", "Effort & sacrifice (3)", "The 3 cheapest wins (starred)"],
          rubric: ["At least half the ideas are on the bottom half (time, effort)", "Each idea is specific enough to do this month", "Dream outcome is in the rider's words", "Nothing promised that PMT doesn't control"],
          model: "Cheapest wins: (1) a 10-minute 'what to expect on day one' video sent after booking (time + effort); (2) a one-page gear checklist and parking map texted 2 days before (effort); (3) a pinned carousel of real reviews from first-time riders on the booking page (likelihood)."
        },
        {
          prompt: "Social Workbook Exercise 3A, for ZDub's own offer: fill in each part as it is today and how to make it better.",
          fields: ["Dream outcome: today / better", "Perceived likelihood: today / better", "Time delay: today / better", "Effort & sacrifice: today / better"],
          rubric: ["Dream outcome is booked jobs or revenue, not 'content'", "Likelihood includes a written first-30-days plan", "Effort is reduced to something like 'film once a month'"]
        }
      ],
      today: { task: "Drill D11.1 on PMT, then pick the single cheapest bottom-half improvement (e.g. a pre-class 'what to expect' text) and draft it for Chris to approve.", output: "12 value-equation ideas + one ready-to-send improvement draft", minutes: 35, suggested: false },
      check: [
        { q: "Workbook 11.1: What is Hormozi's value equation?", a: "(Dream outcome × perceived likelihood) ÷ (time delay × effort and sacrifice). Raise the top, shrink the bottom." },
        { q: "Workbook 11.2: Where do the easiest, cheapest wins often come from?", a: "Shrinking time delay and effort and sacrifice. Most businesses only push the top half." },
        { q: "Workbook 11.11: Name the four variables and one way to improve each for a local service business.", a: "Dream outcome: sell the result and status ('ride confidently'). Likelihood: reviews from similar people, credentials, guarantees. Time delay: same-day quotes, a quick early win. Effort: done-for-you, easy booking, gear provided, a checklist." }
      ]
    },
    {
      id: "off-03",
      part: "client-offers",
      title: "Build a Grand Slam Offer: obstacles into solutions, then trim and stack",
      minutes: 12,
      tags: ["Book", "Mentor"],
      date: "2026-08-25",
      source: [
        { doc: "ZDub Mastery Guide", section: "Ch 11: Building a 'Grand Slam Offer'", who: "Alex Hormozi, $100M Offers" },
        { doc: "ZDub_Guide_06 V2", section: "The 6-step offer build; commodity trap; mistakes", who: "Jason Maulucci, 8/25/26" },
        { doc: "ZDub Mastery Workbook", section: "Ch 11 Recall 11.3; Drill D11.2 + Answer Key", who: "Workbook" }
      ],
      idea: `A Grand Slam Offer is one so good people feel stupid saying no. Hormozi's build (Mastery Guide) and Jason's 6-step version (8/25) are the same process:

1. **Name the dream outcome, specifically.** Not the service: the result and the status. ("Ride on my own this summer," not "complete a course.")
2. **List every problem.** Every obstacle, fear and hassle before, during and after the purchase. Use the value equation as a prompt: Will it work for me? Will it take too long? Will it be hard? Will I have to give things up? Jason: be exhaustive, and role-play objections with Claude to find more.
3. **Turn each problem into a "how to" solution.** "I'm scared of dropping the bike" becomes "How to feel in control from the first minute."
4. **Pick delivery vehicles.** For each solution brainstorm ways to deliver it: one-on-one, small group, video, checklist, done-for-you, text support, a physical item, faster or slower, more or less hands-on. Jason ranks delivery as DIY < done-with-you < done-for-you (highest value).
5. **Trim.** Cut anything high-cost/low-value or low-cost/low-value. Keep what adds a lot of value for low cost.
6. **Stack** what's left into one named package with one price.

**Why it works:** the result looks nothing like a price list. It's a bundle of solutions to every obstacle, so nobody can compare it line for line. That's how you escape the **commodity trap**: Jason's picture of ten identical lemonade stands competing on price. Be different to a specific person and never compete on price. His example: a wedding photographer at $1,800 became "Full Day Story" at $4,500.

**Mistakes Jason flagged:** stacking junk; selling what *you* like making instead of what they want; staying vague so you don't exclude anyone. "Specificity is most powerful." Also: naming the offer matters less in B2B and can feel corny, so for ZDub's agency offer keep names plain; for consumer offers like PMT's, names help (lesson on MAGIC).`,
      keyPoints: [
        "Dream outcome → every problem → 'how to' solutions → delivery vehicles → trim → stack.",
        "List obstacles before, during and after the purchase.",
        "A bundle of solutions can't be compared line for line, so price matters less.",
        "Never compete on price; be different to a specific person.",
        "Don't stack junk or stay vague to avoid excluding people."
      ],
      why: "This is how ZDub turns a client's plain service into an ad-worthy offer without discounting, and how you build your own agency package around a contractor's real fears.",
      example: {
        title: "Roofer: problems into solutions (Answer Key D11.2)",
        body: "\"I don't know if I really need a new roof\" → \"How to know exactly what's wrong\" → a drone video of their own roof.\n\n\"I'm worried about the mess\" → \"How to get your yard back spotless\" → a magnetic nail sweep and a cleanup checklist signed by the crew lead.\n\nEach solution is something the roofer can actually deliver. Stack them and the offer is no longer 'roof replacement, call for a quote.'"
      },
      practice: [
        {
          prompt: "Drill D11.2 for PMT: list ten obstacles a new rider faces before, during and after booking. Rewrite each as a 'How to...' solution and give each a delivery vehicle.",
          fields: ["Obstacles 1-5 → how-to → vehicle", "Obstacles 6-10 → how-to → vehicle", "Trim: which 3 you'd cut and why", "Stack: the final bundle in one paragraph"],
          rubric: ["Obstacles cover before, during AND after the course", "Each solution is phrased as 'How to...'", "Every vehicle is something PMT can deliver", "At least 3 items were trimmed for cost vs value", "Final bundle reads as one package, not a list of features"],
          model: "Before: 'I don't own gear' → How to show up ready without buying everything → a gear checklist + 'borrow vs buy' guide. During: 'I'll be the worst one there' → How to learn at your own pace → small classes, beginners-only sessions. After: 'I passed, now what?' → How to keep riding safely → a first-month practice route map for the Sacramento area."
        }
      ],
      today: { task: "Ask Claude to role-play a nervous first-time rider and list every fear about taking PMT's course. Add the best five to your obstacle list from the drill.", output: "A PMT obstacle list of 10+ items with solutions", minutes: 30, suggested: false },
      check: [
        { q: "Workbook 11.3: What comes right after 'identify the dream outcome'?", a: "List every obstacle between the customer and the result. Order: dream outcome → list every problem → solutions → delivery vehicles → trim and stack." },
        { q: "What is the commodity trap and how do you escape it (Jason, 8/25)?", a: "Ten identical lemonade stands competing on price. Escape by being different to a specific person; never compete on price." },
        { q: "Name two offer-building mistakes Jason flagged.", a: "Stacking junk, selling what you like making instead of what they want, and staying vague to avoid excluding people." }
      ]
    },
    {
      id: "off-04",
      part: "client-offers",
      title: "Enhance the offer: real scarcity, real urgency, bonuses that kill objections",
      minutes: 10,
      tags: ["Book", "Mentor"],
      date: "2026-08-25",
      source: [
        { doc: "ZDub Mastery Guide", section: "Ch 11: Enhancing the offer (scarcity, urgency, bonuses)", who: "Alex Hormozi, $100M Offers" },
        { doc: "ZDub Mastery Workbook", section: "Ch 11 Recall 11.4, 11.12; Drill D11.4 + Answer Key", who: "Workbook" },
        { doc: "ZDub_Guide_06 V2", section: "Jason on guarantees: 'Urgency and scarcity only if true'; Caution/Flag on incentive pricing", who: "Jason Maulucci, 8/25/26" }
      ],
      idea: `Hormozi adds five enhancers to a stacked offer: **scarcity, urgency, bonuses, guarantees and naming**. Guarantees and naming get their own lessons. This one covers the first three.

**Scarcity = a limit on supply.** Limited seats, spots per month, limited bonuses. It must be real. A riding class with 12 seats has real scarcity, so say so. An HVAC company's tune-up slots based on crew capacity are real.

**Urgency = a limit on time.** Enrollment windows, seasonal deadlines, cohort start dates, a price going up on a real date. Fake countdown timers destroy trust.

The honesty rule applies to both. Jason (8/25): urgency and scarcity only if true; don't fake "one spot left." Guide 06 flags that Jason's own on-the-spot "$8k normally, $6k if you sign today" breaks that rule, and Jason admitted "maybe this is manipulated." The honest version is a real deadline: a real start date or a real founding-price window.

**Bonuses** each solve one specific objection or obstacle. Give each a name and, only if you can defend it honestly, a value. Hormozi says stacked bonuses can be worth more than the core offer because they raise perceived value far more than they raise cost.

**Bonuses beat discounts.** A discount lowers the value of what you sell. A bonus raises it. When a client wants to "run a sale," your first move should be to find the bonus that kills their biggest objection instead.

The Answer Key's model: each bonus maps one-to-one to an objection. "I forget maintenance" → "The Filter Drop: a fresh filter on your porch every 90 days." "Heat waves mean no one comes" → "Priority Card: you skip the line in an emergency." Avoid inflated "valued at $997!" claims you can't defend.`,
      keyPoints: [
        "Scarcity limits supply; urgency limits time. Both must be real.",
        "Use real limits: class seats, crew capacity, cohort dates, seasons.",
        "Each bonus kills one named objection.",
        "Bonuses raise value; discounts lower it.",
        "No inflated 'valued at' numbers you can't defend."
      ],
      why: "Clients will ask ZDub to 'run a promo.' This gives you a better answer that lifts response without training their customers to wait for sales.",
      example: {
        title: "PMT: discount vs bonus",
        before: "Spring special: 15% off the beginner course this week only!",
        after: "Spring classes: 12 seats per weekend (real). Book this month and get the 'First Ride Route' bonus: a printed map of three quiet practice routes near the range, plus a gear checklist.",
        body: "The 'after' uses PMT's real seat limit for scarcity, a real month for urgency, and bonuses that kill two objections (\"where do I practice after?\" and \"what do I need to buy?\"). Confirm the seat count with Chris before using it."
      },
      practice: [
        {
          prompt: "Drill D11.4 for PMT: list the top five objections a beginner has, and create a named bonus for each that removes it. State a value only if you can justify it honestly.",
          fields: ["Objection 1 → bonus", "Objection 2 → bonus", "Objection 3 → bonus", "Objection 4 → bonus", "Objection 5 → bonus", "PMT's real scarcity and real urgency"],
          rubric: ["Each bonus maps to exactly one objection", "Every bonus has a short, sayable name", "Scarcity and urgency are verifiable facts", "No inflated value claims"]
        }
      ],
      today: { task: "Text or ask Chris two questions: how many seats are in a typical PMT class, and when do classes typically fill up? Use the answers to write one real-scarcity line and one real-urgency line for PMT ads.", output: "Two verified scarcity/urgency lines for PMT", minutes: 15, suggested: false },
      check: [
        { q: "Workbook 11.4: Why does Hormozi prefer bonuses to discounts?", a: "A discount lowers the value of what you sell; a bonus raises it." },
        { q: "Workbook 11.12: Name the five enhancers and the honesty rule for two of them.", a: "Scarcity, urgency, bonuses, guarantees and naming. Scarcity and urgency must be real: real seat limits, real deadlines, no fake timers." },
        { q: "What is the honest version of Jason's 'sign today' price?", a: "A real deadline: a real start date or a real founding-price window." }
      ]
    },
    {
      id: "off-05",
      part: "client-offers",
      title: "Name it with the MAGIC formula",
      minutes: 8,
      tags: ["Book"],
      source: [
        { doc: "ZDub Mastery Guide", section: "Ch 11: Naming: the MAGIC formula", who: "Alex Hormozi, $100M Offers" },
        { doc: "ZDub Mastery Workbook", section: "Ch 11 Recall 11.6; Drill D11.3 + Answer Key", who: "Workbook" },
        { doc: "ZDub_Guide_06 V2", section: "6-step build: 'Naming the offer matters less in B2B'", who: "Jason Maulucci, 8/25/26" }
      ],
      idea: `A named offer is easier to remember, say out loud, and share. "The beginner course" is a product. "The New Rider Confidence Weekend" is an offer. Hormozi's acronym:

- **M**agnetic reason why: why this exists now ("Grand Opening," "Summer," "New Riders").
- **A**nnounce the avatar: who it's for ("for Beginners," "for Busy Homeowners").
- **G**ive them a goal: the result ("Ride Confident," "Lower Bills").
- **I**ndicate a time interval: how fast ("in One Weekend," "in 30 Days").
- **C**omplete with a container word: what kind of thing it is ("Bootcamp," "Blueprint," "Challenge," "System," "Intensive").

You don't need all five. "The New Rider Confidence Weekend" uses three (avatar, goal, time). "The 30-Day Lower Bill Tune-Up" uses three. "The Summer-Ready AC Tune-Up for Roseville Homeowners" uses reason why, avatar and goal. A mechanism can also be the name: "The Photo-First Panel Check."

**Rules of thumb from the Answer Key:** names should be easy to say out loud. If Chris would feel silly saying it on the phone, it's wrong.

**Where naming doesn't fit:** Jason (8/25) said naming matters less in B2B and can feel corny. So use MAGIC names for client consumer offers (PMT, a med spa promo, an HVAC tune-up). For ZDub's own agency offer, a plain descriptive line usually beats a cute name. One exception the mentors used: Cam's "Pilot Proof Program" (9/17), a name that describes the mechanism.`,
      keyPoints: [
        "MAGIC: Magnetic reason, Announce avatar, Give a goal, Indicate time, Complete with a container word.",
        "Three of five elements is plenty.",
        "Names must be easy to say out loud.",
        "Use names for consumer offers; keep B2B agency offers plain (Jason, 8/25)."
      ],
      why: "A good name turns PMT's course into something people mention to friends and makes every ad and landing page headline easier to write.",
      example: {
        title: "Three MAGIC names",
        body: "PMT: \"The New Rider Confidence Weekend\" (avatar, goal, time).\n\nHVAC: \"The Summer-Ready AC Tune-Up for Roseville Homeowners\" (reason, goal, avatar).\n\nMed spa: \"The 30-Day Glow Plan for First-Timers\" (time, goal, avatar, container)."
      },
      practice: [
        {
          prompt: "Drill D11.3 (trimmed): write five MAGIC names for PMT and five for one Sacramento-area trade or med spa. Use at least three MAGIC elements in each and label which ones you used.",
          fields: ["PMT names (5)", "Trade / med spa names (5)", "Your favorite and why it's easy to say"],
          rubric: ["Each name uses 3+ MAGIC elements, labeled", "Each is easy to say on the phone", "The goal is the customer's result, not a feature", "Time intervals are realistic"],
          model: "PMT: 'Zero to Riding: The Beginner Weekend' (goal, time, avatar); 'The Gift-a-Ride Certificate' for gift buyers (reason, container); 'The Comeback Rider Refresher' for returning riders (avatar, container)."
        }
      ],
      today: { task: "Pick your best PMT name and run it past Chris (or one rider friend). Ask: would you say this out loud? Keep it or change it based on the answer.", output: "One approved offer name for PMT's beginner course", minutes: 15, suggested: false },
      check: [
        { q: "Workbook 11.6: What does the C in MAGIC stand for?", a: "Complete with a container word, like Bootcamp or System." },
        { q: "How many MAGIC elements does a name need?", a: "Not all five. Three is common (e.g. 'The New Rider Confidence Weekend')." },
        { q: "Why keep ZDub's own agency offer name plain?", a: "Jason (8/25): naming matters less in B2B and can feel corny." }
      ]
    },
    {
      id: "off-06",
      part: "client-offers",
      title: "Prove every claim: the eight proof tools",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Mastery Guide", section: "Ch 11: Proof: making the claim believable; Key Idea box", who: "Roy Williams, Claude Hopkins, David Ogilvy, Drew Eric Whitman, Cialdini" },
        { doc: "ZDub Mastery Workbook", section: "Ch 11 Recall 11.9, 11.13; Drill D11.6 + Answer Key", who: "Workbook" },
        { doc: "ZDub Mastery Guide", section: "The 25 Laws, Law 16", who: "Hopkins, Ogilvy, Williams" }
      ],
      idea: `An offer answers one question. Strong marketing answers three:
- **Offer:** "Why should I want this?"
- **Proof:** "Why should I believe you?"
- **Guarantee:** "What if it doesn't work for me?"

Every claim needs a reason to believe. Roy Williams lists unsubstantiated claims among the twelve most common ad mistakes: a claim without proof is just a cliché. Hopkins said specific claims are believed. Here are the proof tools, roughly strongest to weakest:

1. **Demonstration:** show it happening (the before-and-after, the drone video, the student riding).
2. **Specific results with numbers:** "Cut cooling costs about 30% (from the customer's own bills)."
3. **Testimonials from similar people:** names, towns, specifics, ideally video. The more the reviewer resembles the prospect, the better (Cialdini's similarity). A nervous 40-year-old first-timer convinces nervous 40-year-old first-timers.
4. **Case studies:** problem → what we did → result.
5. **Volume:** review counts, customers served, years, jobs done.
6. **Credentials and authority:** certifications, licenses, awards, media.
7. **Process transparency:** show exactly how you work.
8. **Guarantees:** a guarantee is proof that you believe in yourself.

Williams' lesson: proof should close the *specific* loopholes in the reader's mind, not pile up general praise. If the fear is "I'll drop the bike," the best proof is a first-timer saying "I was terrified of dropping it, and the coaches had us start at walking speed."

The Answer Key notes most local clients have reviews and years in business but almost no demonstration footage or case studies. That's ZDub's opening: build a proof-collection habit into every client's month. For ZDub itself, PMT is the case study you're building.`,
      keyPoints: [
        "Offer = why want it; proof = why believe it; guarantee = what if it fails.",
        "Strongest proof: demonstration, then specific numbers, then similar testimonials.",
        "Proof should close specific loopholes, not just pile up praise.",
        "Most local clients lack demonstration footage and case studies: collect them monthly."
      ],
      why: "Proof raises 'perceived likelihood' in the value equation, and it's the thing ZDub can manufacture for clients (and for itself through PMT) with a phone and a plan.",
      example: {
        title: "PMT proof inventory (typical starting point)",
        body: "Have today: Google reviews (volume), years running, instructor certifications (credentials).\n\nMissing: video of a beginner's first ride vs last ride (demonstration), a short testimonial from a nervous first-timer (similar testimonial), a case study of a returning rider.\n\nPlan: film one 'Saturday morning vs Sunday afternoon' clip per class, with written permission."
      },
      practice: [
        {
          prompt: "Drill D11.6 for PMT: list every proof asset PMT has today under the eight proof types. Then list the five you most need and how you'll get each in the next 30 days.",
          fields: ["Proof PMT has today (by type)", "The 5 most needed proof assets", "How and when you'll collect each"],
          rubric: ["All eight proof types are considered", "At least one demonstration asset is planned", "Collection plan has dates and owners", "Testimonials target people similar to the prospect (beginners, returning riders, gift buyers)"]
        }
      ],
      today: { task: "Write a three-question testimonial script for PMT students ('What were you nervous about? What happened? Who would you tell?') and send it to Chris to use at the end of the next class.", output: "A testimonial script sent to PMT", minutes: 20, suggested: false },
      check: [
        { q: "Workbook 11.9: Which proof tool ranks strongest?", a: "Demonstration: showing it happening." },
        { q: "Workbook 11.13: What three questions do the offer, the proof and the guarantee answer?", a: "Offer: 'Why should I want this?' Proof: 'Why should I believe you?' Guarantee: 'What if it doesn't work for me?'" },
        { q: "What does Williams say good proof should do?", a: "Close the specific loopholes in the reader's mind, not just pile up general praise." }
      ]
    },
    {
      id: "off-07",
      part: "client-offers",
      title: "Front-end offers and lead magnets: the easy first yes",
      minutes: 10,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "The Ultimate Social Media Workbook (11/1/26)", section: "Module 3: Offers and lead magnets, Exercises 3B and 3C", who: "Workbook (Alex Hormozi, $100M Offers and $100M Leads)" },
        { doc: "Social Media Marketing Playbook for ZDub (10/31/26)", section: "1.4 Hormozi; 2.1 step 6 'Offer (Hormozi)' examples", who: "Research playbook" },
        { doc: "ZDub Mastery Guide", section: "Ch 11: The call to action (direct and transitional CTAs)", who: "Donald Miller; Roy Williams" }
      ],
      idea: `Not every buyer is ready for the main offer. Two tools give them an easy first step.

**A front-end offer** is an easy yes for a first-time customer: low price or low risk, clearly valuable, and it leads naturally into the main product. The Social Playbook's examples (each needs checking against the client's real terms):
- Gym: "21-Day Kickstart, $47, includes InBody scan and nutrition plan; attend 12 sessions and don't feel stronger, it's free."
- Home services: "$89 AC tune-up; if we find nothing to improve, it's free."
- Training school: "Free career-fit session plus tuition breakdown."

**A lead magnet** (Hormozi, $100M Leads) is a *free fix for one narrow problem that reveals the next problem your paid service solves.* A free inspection, a first class, a price guide. A roofer's free drone check reveals "you need repairs." A PMT "Which course is right for me?" quiz reveals "you need the beginner course, and here are the dates." Hormozi's content rule: give, give, give, then ask.

**How this fits the CTA rules** (Mastery Guide Ch 11): every asset needs one clear next step. Donald Miller splits CTAs into **direct** ("Book now," for the ready) and **transitional** (a free guide or checklist, for the not-yet-ready). The lead magnet *is* your transitional CTA. And always tell people what happens next: "Tap Learn More, pick a date, and you'll get a confirmation text with what to bring." Williams: never make customers walk into darkness.

The Workbook adds one safety rule: check the client's ad rules before you use any guarantee or price claim. Also make sure the client can deliver the front end at volume. A free first class is worthless if there are no seats.`,
      keyPoints: [
        "Front-end offer = easy yes for a first-time buyer that leads to the main offer.",
        "Lead magnet = free fix for one narrow problem that reveals the next problem.",
        "Lead magnets are transitional CTAs; 'Book now' is the direct CTA.",
        "Always say what happens next after they click.",
        "Check price and guarantee claims with the client before running them."
      ],
      why: "Cold Meta traffic for PMT and for ZDub's trades clients often needs a smaller first step. Picking the right one is often the difference between a cheap lead and no lead.",
      example: {
        title: "PMT lead magnet",
        body: "Narrow problem: \"I don't know which course I need or what the license steps are.\"\n\nMagnet: a 60-second 'Which PMT course fits you?' quiz or one-page 'Your path to an M1' guide, sent by DM keyword ('RIDE').\n\nNext problem it reveals: \"I need the beginner course,\" with the next class dates right there. Direct CTA for the ready: 'Pick your weekend.'"
      },
      practice: [
        {
          prompt: "Social Workbook Exercise 3B: build one front-end offer for PMT (or a gift-buyer version).",
          fields: ["Offer name", "What they get", "Bonus that adds value", "Real reason to act now (limited seats, a date)"],
          rubric: ["It's an easy yes for a first-timer", "The bonus kills a real objection", "The reason to act is true", "PMT can deliver it at volume"]
        },
        {
          prompt: "Exercise 3C: pick a lead magnet for a Sacramento roofer or HVAC company you might pitch.",
          fields: ["The narrow problem it solves", "The next problem it reveals", "How people get it (DM keyword, form, link)", "What happens next (the text they receive)"],
          rubric: ["Solves one narrow problem fully", "Naturally reveals the paid service", "Delivery path is one step", "Next step is spelled out"],
          model: "Roofer: 'Free 10-minute drone roof check' → reveals damage needing repair → instant form with ZIP and roof age → text within a minute: 'Thanks, it's Mike from X Roofing. What's a good time this week for the drone check?'"
        }
      ],
      today: { task: "Draft PMT's lead magnet (quiz questions or a one-page license-path guide outline) and the DM keyword that delivers it.", output: "A lead magnet draft + keyword for PMT", minutes: 40, suggested: false },
      check: [
        { q: "What is a lead magnet in Hormozi's definition?", a: "A free solution to one narrow problem that reveals the next problem your paid offer solves." },
        { q: "What's the difference between a direct and a transitional CTA?", a: "Direct ('Book now') is for the ready; transitional (a free guide or checklist) is for the not-yet-ready (Miller)." },
        { q: "Workbook 11.10: Why did 'Learn More' beat other buttons for prospecting traffic in the King Kong tests?", a: "The ad's job is to sell the click; the page sells the product. For warm audiences, direct buttons can be right, so test." }
      ]
    },
    {
      id: "off-08",
      part: "client-offers",
      title: "The one-page Grand Slam Offer worksheet (Client Lab)",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Mastery Guide", section: "Ch 11: ZDub Application box 'The Offer Worksheet'; HVAC Grand Slam example", who: "Hormozi method applied" },
        { doc: "ZDub Mastery Workbook", section: "Ch 11 Client Lab L11 + Answer Key; Swipe & Study", who: "Workbook" }
      ],
      idea: `Everything in Part 1 lands on one page. For every new client, ZDub fills in the offer worksheet before writing a single ad. It becomes the backbone of every ad and landing page.

**The 12 boxes (Client Lab L11):**
1. Dream outcome, in their customers' words
2. Top 10 obstacles
3. A solution for each
4. Delivery vehicles
5. The trimmed and stacked bundle
6. Real scarcity and real urgency
7. Three bonuses tied to objections
8. A guarantee the business can honor
9. A MAGIC name
10. Price and how it's anchored
11. Proof assets available and needed
12. A direct CTA and a transitional CTA

**The model to copy** (the guide's hypothetical HVAC offer): *Name:* "The Summer-Ready AC Tune-Up (Roseville Homeowners)." *Core:* a 21-point inspection and cleaning. *Bonuses:* a filter delivered every 90 days for a year (solves "I forget"); a thermostat setup for lower bills (solves "bills too high"); a priority-scheduling card (solves "nobody comes in a heat wave"). *Guarantee:* "If your system fails in July after our tune-up, the service call is free." *Scarcity:* 40 slots a week, based on crew capacity. *Urgency:* pricing ends at the first heat wave or a stated date. *CTA:* "Learn More" → pick a time online.

**What good looks like** (Answer Key): the finished offer can't be compared line for line with a competitor's price list, so the conversation moves away from price. Every element is something the business has *agreed* to deliver. That's why the last step is not optional: **present it to the client and get sign-off** on anything that changes how they deliver. A bonus Chris didn't agree to is a broken promise waiting to happen.`,
      keyPoints: [
        "One page, 12 boxes, filled before any ad is written.",
        "Use the HVAC tune-up as the model of how the pieces fit.",
        "A good offer can't be compared line for line with competitors.",
        "Get client sign-off on anything that changes delivery."
      ],
      why: "This worksheet is a deliverable ZDub can show prospects: it proves you think about their business, not just their ads.",
      example: {
        title: "How the HVAC example kills objections",
        body: "Each bonus maps to one fear: forgetting maintenance, high bills, no-shows in heat waves. The guarantee covers what the company controls (the service call), not the weather. Scarcity comes from real crew capacity. That's the pattern to copy for PMT."
      },
      practice: [
        {
          prompt: "Client Lab L11: complete the full worksheet for PMT's beginner course. Pull from your earlier drills.",
          fields: ["1. Dream outcome (their words)", "2-3. Top 10 obstacles + solutions", "4-5. Delivery vehicles + stacked bundle", "6. Real scarcity / urgency", "7. Three bonuses tied to objections", "8. Guarantee PMT can honor", "9. MAGIC name", "10. Price and anchor", "11. Proof available / needed", "12. Direct CTA + transitional CTA"],
          rubric: ["Every element is something PMT can deliver", "Bonuses map one-to-one to objections", "Guarantee covers only what PMT controls", "Both CTAs are present and say what happens next", "It fits on one page"]
        }
      ],
      today: { task: "Finish the PMT worksheet and send it to Chris as a one-page doc, asking him to approve or strike anything that changes how PMT delivers.", output: "PMT Grand Slam Offer worksheet sent for sign-off", minutes: 45, suggested: false },
      check: [
        { q: "What is the last step of Client Lab L11 and why?", a: "Present it to the client and get sign-off on anything that changes how they deliver, because every element must be something the business agreed to." },
        { q: "In the HVAC example, where does the scarcity come from?", a: "Real crew capacity: 40 tune-up slots per week." },
        { q: "What does a finished Grand Slam Offer do to the price conversation?", a: "Moves it away from price, because the offer can't be compared line for line with competitors' price lists." }
      ]
    },
    {
      id: "off-09",
      part: "zdub-offer",
      title: "Write ZDub's offer as one outcome sentence",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-10-16",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "1. The one-sentence offer; student offers Logan praised; vague offers Logan critiqued", who: "Logan McKinney, 10/13/26 and 10/16/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Offers, pricing and guarantees: Build the offer around an outcome", who: "Jason Maulucci, 6/10/26" },
        { doc: "ZDub_Guide_06 V2", section: "The short version: 'I do Meta ads and content isn't an offer'", who: "Jason Maulucci, 8/25/26" }
      ],
      alsoIn: ["Sales tab (pitching the offer)", "Getting Clients tab (outreach)"],
      idea: `This is ZDub's own agency offer, the one you say to a roofer on a cold call or put on zdubmedia.netlify.app.

**Logan's formula (10/16):**

> **I help [who] in [where] get [result] by [what I do].**

Four parts. Miss any one and it goes vague. "I do a two-week free offer for Phoenix service businesses" is missing the result and the method; Logan's verdict: "my offer is an offer." "I help businesses get more leads through Meta ads" is fine but too general, so get more specific over time and always add the city. Two student offers Logan called perfect on 10/16:
- "I help home service businesses in the greater Sacramento area by running organic and paid content to attract the ideal target customer."
- "I help busy small business owners in Minnesota stop wasting money on marketing that doesn't bring customers by building one system that takes a lead from ad to booked appointment."

**Jason's layer (6/10): the offer is the outcome, not the deliverables.** "I do Facebook ads" is a deliverable. Jason's definition: **Offer = promised outcome + price + risk reversal.** Deliverables are the vehicle, but they still must be clear and concrete because they carry your conviction. People also pay for speed: the same result in 90 days beats 12 months, so put a time frame in, without crazy claims. His framing: "I'll get your business $50k in new customers in 90 days through organic content and ads. Here's the process, the team, and who we've done it for."

**Merge the two:** Logan's sentence gives you *who, where, what*; Jason's rule makes the *result* an outcome the owner can count, with a time frame. Logan (10/13) also warned against fuzzy words like "established": what does that mean? And: "It's nice to say 'I can run your marketing,' but everybody is doing that. It's another thing to say 'dental offices, I know X is affecting you, I found the solution.'"

**Your edge problem:** Guide 06 notes another student is pitching home service businesses in greater Sacramento with nearly the same sentence, and Logan called it perfect. Yours has to be more specific: a sub-niche, a named result, speed-to-lead built in, or your local presence.`,
      keyPoints: [
        "I help [who] in [where] get [result] by [what I do] (Logan, 10/16).",
        "Offer = promised outcome + price + risk reversal; deliverables are the vehicle (Jason, 6/10).",
        "Add the city. Add a time frame. Avoid vague words like 'established'.",
        "Deliverables still need to be concrete: they carry your conviction.",
        "Be more specific than the other agencies pitching Sacramento."
      ],
      why: "Until 9/25 you told Logan you had no offer. This sentence is what every cold call, DM, landing page and sales call rests on.",
      example: {
        title: "From vague to outcome",
        before: "ZDub Media is a strategic growth partnership offering organic content and paid Meta ads.",
        after: "I help Sacramento-area roofers get more booked inspections in the next 90 days by running their Meta ads and short-form content from their real jobs, with every lead texted within a minute.",
        body: "The 'after' has who (roofers), where (Sacramento area), a countable result (booked inspections), a time frame (90 days) and the vehicle (ads, content, instant follow-up). Add price and risk reversal when you pitch to complete Jason's formula. Don't promise a number you can't control; see Part 4."
      },
      practice: [
        {
          prompt: "Write ZDub's offer three ways using Logan's four parts. Then upgrade your favorite with Jason's outcome + time frame.",
          fields: ["Version 1: lead offer (ads + page + follow-up)", "Version 2: content offer", "Version 3: one sub-niche (e.g. roofers, remodelers, HVAC)", "Upgraded favorite with outcome + time frame", "What makes it different from the other Sacramento student's offer"],
          rubric: ["All four parts present (who, where, result, what I do)", "Result is countable (estimates, booked jobs, customers)", "City or region is named", "No vague words ('established', 'growth', 'marketing solutions')", "A specific edge is stated"],
          model: "\"I help Sacramento-area remodelers book more in-home estimates in 90 days by running Meta ads from their real job-site footage and calling every lead within five minutes.\""
        }
      ],
      today: { task: "Paste Logan's first-offer prompt (see 'Find your lane') into Claude or just write your top sentence, then update the headline on zdubmedia.netlify.app or your social bio to match it.", output: "One live offer sentence on ZDub's page or bio", minutes: 30, suggested: true },
      check: [
        { q: "What are the four parts of Logan's offer sentence?", a: "Who, where, result, what I do: 'I help [who] in [where] get [result] by [what I do].'" },
        { q: "What is Jason's definition of an offer (6/10)?", a: "Promised outcome + price + risk reversal. Deliverables are just the vehicle." },
        { q: "Why does Logan want the city in the sentence?", a: "It makes the offer specific; general offers sound like everyone else's." }
      ]
    },
    {
      id: "off-10",
      part: "zdub-offer",
      title: "Fill the four boxes, and pick content system or lead system",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-16",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "The four-part offer format (offers read on the 9/25 call)", who: "Logan McKinney, 9/25/26" },
        { doc: "ZDub_Guide_06 V2", section: "Two kinds of offer", who: "Logan McKinney, 10/16/26" }
      ],
      idea: `Logan's 9/25 exercise: everyone posts their offer as **four boxes**:

1. **Target client**
2. **Area**
3. **Offer (price)**
4. **Deliverables**

His own: barbershops / national / starting at $1,500/month plus ad spend / 5-8 static creatives. Offers students read on that call:

- Oscar: home service contractors, Southern California, $3-5k/month + ad spend, 8-12 short-form videos, photo content, social management and paid ads. Logan: "Love it."
- Julian: roofers, Southwest Colorado, $2k + ad spend, Meta ad production and management.
- Alessio: home service, national, $4k + ad spend, 20 short-form ads. Logan: "Beautiful."
- Sueton: dental, free setup, client pays ad spend only ($15/day), pay when customers come. Logan: "That's a great offer."
- Zach: "No offer yet, could use some help figuring that out." Logan's advice: start general, then get specific, because "when you get specific... you can actually solve problems" and spot gaps.

**Two kinds of offer (Logan, 10/16).** Let discovery decide which you lead with:
- **Content system:** posts and videos done for them. Fits owners who say "we never post."
- **Lead system:** ads + page + calendar or lead form. Fits owners who say "our days aren't full," "slow months," or "we want consistency."

ZDub's public offer combines organic and Meta ads, which Logan and Cam also sell to first clients (Guide 06 notes Jason prefers mature offers mostly ads, minimal organic). The four boxes keep that combination concrete: the owner sees exactly who it's for, what it costs and what shows up each month.`,
      keyPoints: [
        "Four boxes: target client, area, price, deliverables (Logan, 9/25).",
        "Price includes 'plus ad spend' in every mentor example.",
        "Start general, then get specific as you learn the niche.",
        "Content system for 'we never post'; lead system for 'our days aren't full'."
      ],
      why: "On 9/25 the box next to your name was empty. Filling it now gives you something to say on every call and something to test.",
      example: {
        title: "ZDub's four boxes (draft to adjust)",
        body: "Target client: Sacramento-area contractors and home service businesses doing $5k+ per job.\nArea: greater Sacramento (Roseville, Folsom, Elk Grove, Placer County).\nOffer: starting at $2,000/month plus ad spend.\nDeliverables: monthly short-form videos and statics from their real jobs, Meta lead ads, instant lead follow-up.\n\nThis draft comes from Guide 06's 'Applied to ZDub' box (Claude's input), built on Logan's format. Change the numbers to what you'll actually deliver."
      },
      practice: [
        {
          prompt: "Fill Logan's four boxes for ZDub. Then write which kind of system (content or lead) you'd lead with for a roofer who says 'winter is always slow.'",
          fields: ["Target client", "Area", "Offer (price)", "Deliverables (countable)", "Content or lead system for the slow-winter roofer, and why"],
          rubric: ["Deliverables are countable (e.g. '8 short-form videos, 4 statics')", "Price says 'plus ad spend'", "Area is real and drivable or clearly remote", "Lead system chosen for 'slow months'"]
        }
      ],
      today: { task: "Post your four boxes in the mentor community (or send to Logan) the way students did on 9/25 and ask for feedback.", output: "ZDub four-box offer posted for review", minutes: 15, suggested: false },
      check: [
        { q: "What are Logan's four boxes?", a: "Target client, area, offer (price), deliverables." },
        { q: "When do you lead with a lead system vs a content system?", a: "Lead system when they say days aren't full, slow months, want consistency. Content system when they say 'we never post'." },
        { q: "What was Logan's advice to Zach on 9/25?", a: "Start general (e.g. service-based businesses) and get specific, because specificity lets you solve problems and spot gaps." }
      ]
    },
    {
      id: "off-11",
      part: "zdub-offer",
      title: "One clear offer, not a menu",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-10-21",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "Vague offers Logan critiqued (In-N-Out analogy); How Logan sold his first retainer", who: "Logan McKinney, 10/13/26 and 10/16/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Positioning and pricing moves: One option, not a menu", who: "Noah Wyman, 10/21/26" }
      ],
      idea: `When you're unsure what the client wants, it's tempting to offer everything: three tiers, a one-off, a website, a "starter" package. The mentors say no.

**Logan (10/13):** too many tiers get vague. Make **one offer the clear best**, highlight it, and put add-ons around it. His analogy is In-N-Out: "we only do burgers." And: "The more clear your offer is, the less of this stuff you'll have to deal with" (meaning the objections, haggling and confusion).

**Noah (10/21):** "This is what we do for every clothing brand owner, monthly." In the call Noah reviewed, offering a one-off project gave the prospect an easy way out of the monthly offer. One option removes the escape hatch.

**A nuance worth knowing.** When Logan sold his own first retainer (10/16), he presented three packages (small, middle, big) and sold the middle. That isn't a contradiction: the middle was clearly the one he recommended, which is exactly his "one clear best" rule. What both mentors warn against is a flat menu where nothing is recommended, or a cheap one-off that competes with your main offer.

**For ZDub:** keep the public offer clean (organic + Meta ads), and treat websites, hiring ads and speed-to-lead setups as add-ons, not as separate products on the same level. If you show packages at all, make one the obvious pick.

**Also decide it before the call.** Logan (10/13): decide your offer details before calls, not on the call. If you're building the package live, the prospect can feel it.`,
      keyPoints: [
        "One offer is the clear best; add-ons sit around it (Logan, 10/13).",
        "A one-off option gives prospects an easy out (Noah, 10/21).",
        "If you show tiers, recommend one (Logan sold the middle of three).",
        "Decide the offer before the call, not during it."
      ],
      why: "A clean offer shortens sales calls and stops the 'can you just do the website?' downgrade before it starts.",
      example: {
        title: "Menu vs one clear offer",
        before: "We can do ads, content, a website, SEO, email, or a one-time ad setup. What sounds good?",
        after: "This is what we do for every contractor we work with, monthly: Meta lead ads, 8 short videos from your jobs, and every lead texted within a minute. If you need a website or hiring ads, we add those on.",
        body: "The 'after' gives one recommended path. Add-ons exist but don't compete with it."
      },
      practice: [
        {
          prompt: "Write ZDub's 'one clear offer' line the way Noah phrased it ('This is what we do for every ___ , monthly'), then list your add-ons separately.",
          fields: ["The one clear offer line", "Add-ons (and only ones you can deliver)", "What you'll say if they ask for a one-off"],
          rubric: ["One offer, stated as 'what we do for every ___'", "Add-ons are clearly secondary", "One-off answer steers back to the main offer", "No add-on you can't actually deliver"]
        }
      ],
      today: { task: "Review ZDub's landing page and pitch notes. Remove or demote anything that reads like a menu so there's one recommended offer.", output: "A cleaned-up offer section with one clear recommendation", minutes: 25, suggested: false },
      check: [
        { q: "What analogy does Logan use for one clear offer?", a: "In-N-Out: 'we only do burgers.'" },
        { q: "Why did Noah push back on offering a one-off (10/21)?", a: "It gave the prospect an easy out instead of the monthly offer." },
        { q: "How do Logan's three packages fit his 'one clear offer' rule?", a: "He clearly recommended and sold the middle one; the rule is against a vague menu with no clear best." }
      ]
    },
    {
      id: "off-12",
      part: "zdub-offer",
      title: "Find your lane: client first, then the three-part lane test",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-10-16",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "2. Finding your lane; the three-part lane test; the first-offer prompt", who: "Logan McKinney, 10/16/26" },
        { doc: "ZDub_Guide_06 V2", section: "Dream clients (9 criteria); Where the mentors disagree: who's worth taking", who: "Jason Maulucci, 8/18/26" }
      ],
      alsoIn: ["Getting Clients tab (dream-client criteria and qualifying)"],
      idea: `**Order matters (Logan, 10/16):** get one client, test your systems, and figure out what you can deliver. *Then* ask: Who do I want to help? How can I help them? How can I help more of them, better and more efficiently? A general offer lands client one; then you niche down. That's not a contradiction with Logan praising niche offers. It's a sequence.

**Why a lane wins later:** owners go with the person who understands them, who has seen it, knows their problems, speaks their language and "wears their clothes" (a suit at a law firm, a polo and boots on a construction site).

**The three-part lane test (Logan, 10/16):**
1. **Would you love it?** Pick what you'd choose on a Saturday.
2. **Does it scale past your zip code?** Are there thousands across the US with the same problems?
3. **Can you deliver it without being on site?** "If it only works while you're there, it's basically a job."

**Then learn the lane until you're the pro:** how they make money, average ticket, what keeps them up at night, *in their words* (contractors say "jobs" and "job site"; barbers say "cuts"); who their customer is; where new ones come from; repeat vs once-a-decade buyers (roofers every 5-10 years, big ticket); who else markets to them. Claude can research this in 10 minutes, but still talk to owners.

**Logan's first-offer prompt** (paste into Claude): it asks you one at a time for your city, a business you already know, your past work and weekly hours; suggests three business types with owner, customer value and main problem (sources as plain text; "unverified" instead of guessing); scores each 1-5 on the three lane questions; lets *you* pick; then writes your one-sentence offer in a content version and a lead version.

**Where Jason pulls the other way (8/18):** he looks at the individual client: high average order value, high margin, roughly $500k-1M+ revenue, a short sales cycle. He says barbershops (Logan's lane) are hard to make profitable with ads. Both agree that low-ticket clients are for money, skills or proof. Your own $5k+ per customer rule lines up with Jason's first criterion.`,
      keyPoints: [
        "Client first, then lane (Logan, 10/16).",
        "Lane test: would you love it, does it scale past your zip, can you deliver off-site?",
        "Learn the lane in the owner's words: 'jobs', 'job site', 'cuts'.",
        "Use Logan's first-offer prompt to score options; you pick, not Claude.",
        "Jason adds client-level criteria: high ticket, margin, revenue, short sales cycle."
      ],
      why: "You're leaning toward trades. The lane test tells you whether that lean holds, and test 3 shows exactly where your deliverables need redesigning.",
      example: {
        title: "Lane test on Sacramento trades (Guide 06 'Applied to ZDub', Claude's input)",
        body: "1. Would you love it? You're leaning in, so likely yes.\n2. Scales past your zip? Yes: thousands of contractors share the same problems.\n3. Deliver without being on site? Partly. Content needs job-site footage. Statics from client job photos, interview-style batch filming and AI editing reduce on-site time. Design deliverables so ads and statics don't depend on you being there every week."
      },
      table: {
        head: ["Question", "Logan (10/16)", "Jason (8/18)"],
        rows: [
          ["Who's worth taking?", "Client first, any you can help; barbershops are his lane; small clients like a $500/month life coach are fine early", "High ticket, high margin, about $500k-1M+ revenue; barbershops are hard to make profitable with ads"],
          ["Low-ticket clients", "A training ground for skills and add-ons", "Take them only for money, skills or proof; 'if the answer to those three is ever nothing, drop them'"]
        ]
      },
      practice: [
        {
          prompt: "Score three possible lanes for ZDub (e.g. roofers, remodelers, HVAC, med spas, motorcycle/powersports schools like PMT) 1-5 on each of Logan's three tests.",
          fields: ["Lane 1: love / scale / off-site scores + note", "Lane 2: scores + note", "Lane 3: scores + note", "Your pick and why", "Three words that lane's owners use for their work"],
          rubric: ["Each lane is scored on all three tests", "Off-site delivery is honestly assessed", "The pick names a delivery redesign if test 3 is weak", "Owner vocabulary is real, not marketing-speak"]
        }
      ],
      today: { task: "Paste Logan's first-offer prompt into Claude (from Guide 06, section 2), answer its four questions honestly, and save the content and lead versions of your offer sentence.", output: "Two offer sentences from Logan's prompt + your lane scores", minutes: 40, suggested: false },
      check: [
        { q: "What are the three parts of Logan's lane test?", a: "Would you love it? Does it scale past your zip code? Can you deliver it without being on site?" },
        { q: "In what order does Logan say to find your lane?", a: "Get one client and test your systems first, then pick who you want to help and niche down." },
        { q: "What does 'wears their clothes' mean in Logan's lane advice?", a: "Owners choose the person who understands them and speaks their language, like the suit at a law firm or boots on a job site." }
      ]
    },
    {
      id: "off-13",
      part: "zdub-offer",
      title: "Small is the offer, not the apology: positioning when you're new",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "7. Positioning when you're new", who: "Logan McKinney, 10/16/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Top takeaway 9: 'No results? Sell your story'; Positioning: price while you're new", who: "Tayt Shelman, 11/4/26" },
        { doc: "ZDub_Guide_01 V2", section: "Self-confessing and earning the upsell", who: "Calum Tresham, 8/28/26" }
      ],
      alsoIn: ["Sales tab (telling your story on the call)"],
      idea: `When you have one client and no case study, the instinct is to look bigger than you are. Logan (10/16): **"Small is the offer, not the apology."** Being small is a feature you sell, not something to hide.

**What Logan said to say:**
- "I have room for a handful of clients right now."
- White-glove service: "you'll have my phone number, the one actually working on your stuff."
- "I personally need case studies, so I need your business to win."

**What not to do:** don't borrow results that aren't yours, and don't pretend to be an agency of 40. "You don't want to lie, but you can... have the confidence of your team behind you" (meaning the mentors and community you work with).

**Reframe a deficit instead of lying.** A student with 20 years at big companies used: "If I can add $800,000 to big companies' bottom lines, imagine what I can do for yours."

**Tayt (11/4): no results? Sell your story.** Your background, your reputation to protect and the mentors behind you are the credibility. He suggests pricing below his own level while you're new, framed as "the price of an inexperienced guy with the experience of an experienced one" because of who coaches you (pricing details in Part 3).

**Calum (8/28) makes the same move from a different angle:** tell prospects your real logic, e.g. you're trying to land a few clients in this niche this quarter because case studies make the next one easier, "so you'll get extra attention." (Full discounting and self-confession lesson in Part 5.)

Your raw material: a decade running an insurance practice and team, and you spend your own money marketing your wholesaling businesses. (The 9 New Calls action plan, Claude's input, points this out as your background angle.)`,
      keyPoints: [
        "'Small is the offer, not the apology' (Logan, 10/16).",
        "Sell access: room for a handful of clients, my phone number, I need you to win.",
        "Never borrow results or imply a team you don't have.",
        "Reframe a deficit: past experience elsewhere becomes the proof.",
        "No results? Your story and your mentors are the credibility (Tayt, 11/4)."
      ],
      why: "Honest positioning is what ZDub sells: a trust-based partnership. Faking size breaks that the first time a client calls and you pick up.",
      example: {
        title: "Zach's honest positioning line",
        before: "We're a full-service agency with a team of specialists and proven results across industries.",
        after: "I'm small on purpose. I only take a handful of Sacramento contractors, you get my cell, and I'm the one running your ads. I ran an insurance practice and a team for ten years and I market my own businesses with my own money, so I treat your budget like mine. I need case studies, which means I need you to win.",
        body: "Every claim in the 'after' is true and checkable. Adjust the details to your exact background."
      },
      practice: [
        {
          prompt: "Write your 'small is the offer' paragraph for a sales call, and one deficit-reframe line.",
          fields: ["Small-is-the-offer paragraph (3-5 sentences)", "Deficit reframe ('If I can ___ for ___, imagine what I can do for yours')", "One thing you will never claim"],
          rubric: ["Uses at least two of Logan's lines in your own words", "Every claim is true", "No implied team or borrowed results", "Background is tied to the client's benefit"]
        }
      ],
      today: { task: "Write your background angle in 3-4 sentences (insurance practice, team, wholesaling marketing) and add it to your sales-call notes and your social bio or 'About' section.", output: "A background angle paragraph in your pitch notes", minutes: 20, suggested: true },
      check: [
        { q: "Finish Logan's line: 'Small is the offer, not the...'", a: "'...the apology.'" },
        { q: "Name two honest things Logan suggested a new agency say.", a: "'I have room for a handful of clients right now,' 'you'll have my phone number, the one actually working on your stuff,' 'I personally need case studies, so I need your business to win.'" },
        { q: "What does Tayt say to sell when you have no results (11/4)?", a: "Your story: your background, your reputation to protect and the mentors behind you." }
      ]
    },
    {
      id: "off-14",
      part: "zdub-offer",
      title: "One business per trade: exclusivity as your proof",
      minutes: 8,
      tags: ["Mentor"],
      date: "2026-10-29",
      source: [
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Positioning and pricing moves: One business per trade", who: "Paul Snowman and student Nathan, 7/28/26; Cam, 10/29/26" },
        { doc: "ZDub_Guide_06 V2", section: "7. Positioning (scarcity: one company per city / one niche per area); 8. Competing clients", who: "Logan McKinney, 10/9/26 and 10/16/26; Noah Wyman, 10/7/26" },
        { doc: "ZDub_Guide_01 V2", section: "10. Urgency and closing out the call", who: "Noah Wyman, 10/7/26" }
      ],
      idea: `Exclusivity is real scarcity for an agency, and it does double duty.

**What the mentors said:**
- **Paul and Nathan (7/28):** one business per trade. Exclusivity got a roofer calling to "lock in," and it answers "where's your proof?" when you're new. Noah's answer further down shows how that sounds on a call.
- **Cam (10/29)** offered radius exclusivity.
- **Logan (10/9):** one company per city.
- **Noah (10/7):** one niche per area: "I'd be forced to move with the other one." Or: "only taking a couple more businesses this month to uphold results."

**It's also the right way to run the business.** Logan (10/16): running ads for two salons next door makes them compete for the same customers. Scale your offer across locations or cities instead. A tech tool (like a voice agent) doesn't create that conflict, because it isn't fighting for the same local attention.

**Noah's answer when asked "Have you worked with an AC company?"** (Guide 01, 10/7): "I haven't, and I want you to be that one. If I had, it'd be a conflict of interest and we wouldn't be on this call." Then show how the system applies.

**Rules to keep it honest:**
- Define it clearly: trade + area (e.g. "one roofer in Placer County"), not a vague "exclusive partnership."
- Honor it. Exclusivity is scarcity, and fake scarcity breaks the rule from Part 1.
- It applies to ZDub clients competing for the same customers. PMT and a roofer don't conflict.`,
      keyPoints: [
        "One business per trade per area is real scarcity (Paul, Nathan, Cam, Logan, Noah).",
        "It helps answer 'where's your proof?' when you're new (Paul, Nathan, 7/28).",
        "Competing clients in one area fight over the same customers; scale across cities instead.",
        "Define the trade and area clearly, and honor it."
      ],
      why: "It's the cheapest, most honest scarcity ZDub has, and it turns your lack of a same-trade case study into a reason to sign now.",
      example: {
        title: "Exclusivity line for a roofer",
        body: "\"I work with one roofer per area. Right now that spot in Roseville and Rocklin is open. If we work together, I won't take on another roofing company in your area, because I'd be running ads against you.\""
      },
      practice: [
        {
          prompt: "Write your exclusivity rule and the line you'll say on calls, plus Noah-style answer to 'Have you worked with a ___ before?'",
          fields: ["Exclusivity rule (trade + area)", "Call line", "Answer to 'Have you worked with a roofer before?'"],
          rubric: ["Trade and area are defined precisely", "It's a rule you will actually honor", "The 'worked with before' answer turns no into a reason", "No fake urgency"]
        }
      ],
      today: { task: "Add 'one contractor per trade in the Sacramento area' (with your exact areas) to ZDub's offer page or pitch notes.", output: "Exclusivity rule live in your offer", minutes: 15, suggested: true },
      check: [
        { q: "How does exclusivity answer 'where's your proof?' (Paul and Nathan, 7/28)?", a: "It gives the prospect a reason to sign now: they get to be the one business in their trade. It made a roofer call to 'lock in.'" },
        { q: "Why does Logan avoid two competing clients in the same area?", a: "They'd compete for the same customers; scale across locations or cities instead." },
        { q: "What did Noah say when asked if he'd worked with an AC company?", a: "'I haven't, and I want you to be that one. If I had, it'd be a conflict of interest and we wouldn't be on this call.'" }
      ]
    },
    {
      id: "off-15",
      part: "zdub-offer",
      title: "Add-ons and adjacent offers: what to sell around the core",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-16",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "8. Add-ons and adjacent offers; Pricing principles (training ground, upsell from day one)", who: "Logan McKinney, 10/9/26 and 10/16/26; Noah Wyman, 10/7/26; Jason Maulucci, 8/25/26" },
        { doc: "ZDub_Guide_01 V2", section: "Self-confessing and earning the upsell", who: "Calum Tresham, 8/28/26" }
      ],
      idea: `Add-ons sit around the one clear offer. Done right they raise revenue per client and make the core offer work better. Done wrong they're promises you can't keep.

**Add-ons the mentors used:**
- **Hiring campaigns** when the client can't take on more work. Logan got one barbershop about 70 qualified barber applicants (10/16); Noah also suggested hiring ads (10/7) and ties them to the revenue each new hire opens up. This is how you sell to a contractor who says "I'm already booked out."
- **Websites.** Logan's: $297 build + $50/month maintenance, or free if they buy marketing, because a good site helps his leads convert (10/16). He also hosts sites he built with Claude at $50/month each (10/2).
- **Small add-ons** like newsletters: tested free on early clients, sold later at $200-300 each (10/16).

**Rules:**
1. **Only offer add-ons you can actually deliver** (Logan, 10/9).
2. **Early clients are a training ground.** Test add-ons free on them, then sell them later (Logan, 10/16).
3. **Outsourcing is less scalable.** Paying $500 and charging $750 works, but if the service will be core, learn it (Logan, 10/16).
4. **Plant the upsell from day one.** Jason (8/25): "I'll do your organic, but my true intention is to run your ads when the season makes sense."
5. **Earn the right to sell more.** Calum (8/28): "We can do website, CRM, everything, but I only want to run ads for you right now." Prove it, then upsell in about three months. His analogy: a hotel gives you a great stay before it offers the upgrade. Noah upsold one client an $8,000 build after running their ads for three to four months (as Calum told it).

**For ZDub:** websites, hiring ads and speed-to-lead setups are add-ons, not the headline. For PMT, a natural future add-on might be a gift-certificate campaign for the holidays, but only once the core is working and only if you can deliver it.`,
      keyPoints: [
        "Add-ons support the core offer; they don't compete with it.",
        "Hiring ads solve 'we're booked out' (Logan, Noah).",
        "Test add-ons free on early clients, sell them later.",
        "Only offer what you can deliver; learn core services instead of outsourcing.",
        "Plant the upsell early, sell it after you've proven the core (Jason, Calum)."
      ],
      why: "Your first clients will ask 'can you also do...?' This gives you a yes that grows the account without breaking your one clear offer.",
      example: {
        title: "Booked-out contractor",
        body: "Owner: \"I don't need more leads, I can't keep up.\"\n\nZDub: \"Then the bottleneck is crew, not customers. We can run a hiring campaign to find two more installers. What would two more crews let you take on per month?\" Then tie the add-on to that revenue (Noah, 10/7)."
      },
      practice: [
        {
          prompt: "List ZDub's add-ons in three groups and write your day-one upsell line for PMT.",
          fields: ["Add-ons you can deliver now", "Add-ons to test free on PMT or client #2", "Add-ons you won't offer yet", "Day-one upsell line for PMT (Jason style)"],
          rubric: ["Every 'deliver now' item is something you've actually done", "Test items have a plan to become paid", "Upsell line is honest and tied to timing or proof", "No add-on competes with the core offer"]
        }
      ],
      today: { task: "Write a one-line add-on menu (internal, not public) with a price or 'free test' next to each, so you never price add-ons on a call.", output: "ZDub internal add-on list", minutes: 20, suggested: false },
      check: [
        { q: "What add-on did Logan use when a barbershop couldn't take more clients?", a: "A hiring campaign: about 70 qualified barber applicants." },
        { q: "What's Logan's 'training ground' idea?", a: "Test add-ons for free on early clients, then sell them later (e.g. $200-300 each)." },
        { q: "What's Calum's hotel analogy about?", a: "Earn the right to upsell: deliver a great stay (results on the core) before offering the upgrade, about three months in." }
      ]
    },
    {
      id: "off-16",
      part: "pricing",
      title: "Price is a signal, and constant sales are 'ad cocaine'",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Mastery Guide", section: "Ch 11: Price is a signal; Offers versus 'ad cocaine'", who: "Alex Hormozi; Allan Dib (Lean Marketing); Roy H. Williams (The Wizard of Ads, Making Ads Work); Jonah Berger (Contagious)" },
        { doc: "ZDub Mastery Workbook", section: "Ch 11 Recall 11.7, 11.8; Swipe & Study", who: "Workbook" }
      ],
      alsoIn: ["Foundations tab (Wizard of Ads, branding and repetition)"],
      idea: `This lesson is mostly about **client offers** (what PMT or a med spa charges its customers), but the same logic protects ZDub's own price.

**Price is a signal.** Hormozi argues for charging more and delivering more, not racing to the bottom: a higher price lets you afford a better experience, which creates better results and better word of mouth. Allan Dib (Lean Marketing) agrees: price signals quality, and value-based pricing beats cost-plus pricing.

**Value is what they expected vs what they see.** Roy Williams (The Wizard of Ads): in the customer's eyes, value is the difference between the price they *anticipated* and the price they *see*. Reputation, presentation and the quality of the experience raise the anticipated price, so the same price feels like a better deal. A polished PMT booking page with real rider videos makes the same course fee feel cheaper than a plain form.

**Where the masters seem to disagree.** Hormozi and direct response love scarcity and urgency. Williams warns that a steady diet of limited-time sales is **"the cocaine of advertising"**: it works, then works less, and trains customers to wait for the next sale. In Making Ads Work he cites research from Andrew Ehrenberg and colleagues finding price promotions mainly create short sales blips, not new loyal customers.

**The resolution:** offers that *add* value are not discounts that *subtract* it. A Grand Slam Offer with bonuses, a guarantee and a real cohort date doesn't train customers to expect half price. A permanent "20% off this week!" cycle does. Use honest urgency occasionally, keep the base price stable, and put the rest of the effort into the brand.

**When you do discount: Jonah Berger's Rule of 100.** Under $100, a percentage looks bigger ("25% off a $60 class"). Over $100, a dollar amount looks bigger ("$75 off a $300 course").`,
      keyPoints: [
        "Charge more, deliver more; price signals quality (Hormozi, Dib).",
        "Value = anticipated price vs actual price (Williams); presentation raises the anticipated price.",
        "Constant sales are 'ad cocaine': they train customers to wait.",
        "Value-adding offers are not discounts; keep the base price stable.",
        "Rule of 100: under $100 use %, over $100 use dollars."
      ],
      why: "Clients will want to run sales when leads slow down. You can point them to bonuses and a better presentation instead, and protect their margins and yours.",
      example: {
        title: "A local business stuck on ad cocaine",
        before: "A detailer posts '20% off this week!' every single week.",
        after: "A fixed price, plus a quarterly 'Spring Reset' package with a free headlight restore bonus for the first 15 bookings (real crew capacity), and before-and-after videos on every post.",
        body: "The 'after' adds value instead of cutting price, uses real scarcity, and raises the anticipated price through demonstration."
      },
      practice: [
        {
          prompt: "Swipe & Study: find one Sacramento-area business that's always on sale. Write what they could offer instead, and apply the Rule of 100 to one honest promo for PMT.",
          fields: ["Business and its constant sale", "Value-adding offer instead (bonus, guarantee, real date)", "One way to raise its anticipated price", "PMT promo, Rule-of-100 phrased"],
          rubric: ["Replacement adds value rather than subtracting price", "Scarcity or urgency is real", "Anticipated-price idea is about presentation, reputation or experience", "Rule of 100 applied correctly"]
        }
      ],
      today: { task: "Look at PMT's booking page as a stranger. List three changes that would raise the anticipated price (real rider video, instructor photos, clear what's-included list) and send the top one to Chris.", output: "Three presentation upgrades for PMT, one sent", minutes: 25, suggested: false },
      check: [
        { q: "Workbook 11.7: According to Williams, what is value in the customer's eyes?", a: "The difference between the price they anticipated and the price they see." },
        { q: "Workbook 11.8: How does the guide resolve Hormozi's urgency vs Williams' 'ad cocaine'?", a: "Value-adding offers aren't discounts; use honest urgency occasionally and keep the base price stable." },
        { q: "What is Berger's Rule of 100?", a: "Under $100 a percentage discount looks bigger; over $100 a dollar amount looks bigger." }
      ]
    },
    {
      id: "off-17",
      part: "pricing",
      title: "Every agency price the mentors quoted",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "3. Pricing: every number from the calls; How Logan sold his first retainer", who: "Logan McKinney (9/25, 10/2, 10/9, 10/13, 10/16/26); Calum Tresham (8/7, 8/28, 10/6/26); Noah Wyman (10/7/26); Jason Maulucci (8/25/26); Clayton Bell (8/26/26); Cam (9/17/26)" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Positioning and pricing moves; Building lead lists; Where mentors disagree", who: "Tayt Shelman (11/4/26); Cam (10/29/26); Calum (8/21/26); Jason (6/10/26); student James (10/30/26)" }
      ],
      idea: `This is ZDub's **reference sheet**: every agency price the mentors put on the table. Use it to sanity-check your own number and to answer "is that normal?" on a call. The pattern across all of it:

- **First clients sit around $500-1,500/month.** Logan's learning client was $600; his first barbershop $750; his first card-shop retainer $1,500.
- **The "safe bet" for most agencies is about $1,500-2,500/month** (Logan, 10/9), tailored to your area and industry.
- **Proven offers with high-ticket clients run $3,000-5,000+.** Peers on 9/25 at $2-5k; Cam's mold client pays $5k; Cam sells $6-9k/month offers (10/29).
- **Ad spend is always on top** ("plus ad spend"), and on free trials the client still pays it.

**How Logan sold his first retainer (10/16):**
1. A free video first: "let me deliver first and then we can talk."
2. Discovery.
3. Three packages (small, middle, big); he sold the middle.
4. A three-month run at $1,500/month, then revisit. The client wanted six months; he did three (10/9).

**Where ZDub sits:** PMT pays $2,000/month plus ad spend after a free October. Your target for trades is $2,000-3,000. $2,000 sits inside Logan's safe-bet range; $3,000 matches Noah's student's reviewed offer and Calum's middle number. Guide 06 notes (Claude's input) that before case studies, $3,000 needs a high-ticket client and a clear guarantee.

Some numbers here are pitches, not closed deals (Noah's student's $3k pitch went quiet and the prospect asked for performance-only). Treat the table as a range, not a promise.`,
      keyPoints: [
        "First clients: about $500-1,500/month.",
        "Safe bet: about $1,500-2,500/month (Logan, 10/9).",
        "Proven, high-ticket: $3,000-5,000+ (peers, Cam, Calum).",
        "Ad spend is always separate.",
        "Logan's first sale: free video → discovery → 3 packages → sold the middle at $1,500 for 3 months."
      ],
      why: "You never have to guess or apologize for a price again: you know where your number sits against people who've done it.",
      example: {
        title: "Reading the table for a Sacramento roofer",
        body: "A roofer doing $15k jobs is high ticket. Peers charge roofers about $2k + ad spend (9/25); student James filters out one- or two-person shops that can't afford a $2.5-3k retainer plus ad spend (10/30). So $2,000-2,500 + ad spend is well inside the mentors' range for ZDub's first roofer."
      },
      table: {
        head: ["Example", "Price", "Source"],
        rows: [
          ["Logan's mom's kitchen design business (learning client)", "$600/month", "Logan, 10/16"],
          ["Logan's first barbershop client", "Started at $750/month", "Logan, 10/9"],
          ["Small client, about $1,000 customer value (life coach)", "About $500/month for 1-3 ad creatives + website build/maintenance (+ story posts), plus at least about $10/day ad spend; about $800 total", "Logan, 10/16"],
          ["Card shop, first 3 months", "$1,500/month for 12-15 short-form organic videos", "Logan, 10/16"],
          ["Card shop after month 6 / end of year one", "$2,500/month (5 short + 2 long per week, doubled on release weeks)", "Logan, 10/9 and 10/16"],
          ["Logan's flat-rate ads + systems retainer", "$1,500/month, shown publicly", "Logan, 10/13"],
          ["Logan's own four-box offer (barbershops)", "Starting at $1,500/month + ad spend, 5-8 statics", "Logan, 9/25"],
          ["'Safe bet' for most agencies", "About $1,500-2,500/month", "Logan, 10/9"],
          ["Calum's range when pushed for 'how much?'", "$1,500 / $3,000 / $5,000 a month", "Calum, 10/6"],
          ["Calum's reviewed student offer (patio/pergola)", "$3,000/month base + ad spend; 6-8 scripted job-site videos, CRM, SMS speed to lead, nurturing", "Calum, 8/7"],
          ["Calum's 'earn it' structure", "About $1,000 first month, no contract, then about $2,500/month", "Calum, 8/28"],
          ["Noah's student's reviewed offer", "$3,000/month per business ($2,500 each for two), 5% rev share on renovations, 3-month minimum", "Noah, 10/7"],
          ["Peer offers", "$2k (roofers), $3-5k (contractors), $4k (home service) + ad spend", "Logan, 9/25"],
          ["Offer for someone with no clients", "Free two-week trial, then $1,000/month 'if all goes well'", "Jason, 8/25"],
          ["Speed-to-lead + setters + show-up system", "'You can charge five grand a month for that easily,' plus a possible 10% profit share", "Jason, 8/25"],
          ["Med spa site + content", "About $2,200, half now, half later", "Jason, 8/25"],
          ["Clayton's trial outcomes", "Yellow light: $500-750/month; green: full scope", "Clayton, 8/26"],
          ["Cam's mold client", "$5k/month for ads and organic", "Cam, 9/17"],
          ["Cam's offers held across two calls", "$6k-9k/month", "Cam, 10/29"],
          ["Price while you're new", "$1.5k-2k (when Tayt would charge $3k-4k)", "Tayt, 11/4"],
          ["Lead-list filter", "Skip shops that can't afford a $2.5-3k retainer + ad spend", "Student James, 10/30"],
          ["Logan's barbershop website", "$297 build + $50/month; free with marketing", "Logan, 10/16"],
          ["Hosting sites built with Claude", "$50/month each", "Logan, 10/2"],
          ["Add-ons tested free, sold later", "$200-300 each (e.g. newsletters)", "Logan, 10/16"],
          ["Logan's Steady Chair platform (small barbers)", "Ad spend + 35% of a first visit from an attributed new client", "Logan, 10/13"],
          ["Product marketing rev share", "10-30% of attributed sales; client pays ad spend", "Logan, 10/16"],
          ["Noah's agency", "About $43k/month, 0% churn (as Jason described it)", "Jason, 8/25"]
        ]
      },
      practice: [
        {
          prompt: "Place ZDub on the table. Write your price for a Sacramento trades client, the closest three mentor examples, and what you'll deliver at that price.",
          fields: ["ZDub's price (+ ad spend)", "Closest 3 mentor examples", "Deliverables at that price", "What you have (or need) to justify the top of your range"],
          rubric: ["Price is within a mentor-quoted range", "Ad spend is separate", "Deliverables are countable", "Justification names proof, guarantee or client ticket size"]
        }
      ],
      today: { task: "Build a one-page 'pricing reference' note in your sales folder: ZDub's price, your floor, and the 5 mentor examples closest to it.", output: "ZDub pricing reference note", minutes: 20, suggested: false },
      check: [
        { q: "What range did Logan call the 'safe bet' for most agencies (10/9)?", a: "About $1,500-2,500/month, tailored to your area and industry." },
        { q: "How did Logan sell his first retainer?", a: "Free video first, then discovery, three packages (sold the middle), three months at $1,500/month, then revisit." },
        { q: "What range did Calum give when pushed for 'how much?' (10/6)?", a: "$1,500 / $3,000 / $5,000 a month depending on where they are and want to get." }
      ]
    },
    {
      id: "off-18",
      part: "pricing",
      title: "What to charge while you're new (the mentors disagree)",
      minutes: 10,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "Where the mentors disagree: price level for beginners; starting price; 4. Founding terms", who: "Logan (10/9), Calum (8/28, 10/6), Jason (8/25), Noah (10/7)" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Positioning and pricing moves: Price while you're new", who: "Tayt Shelman, 11/4/26" },
        { doc: "ZDub_Guide_00 V2", section: "Where the mentors disagree (all topics): beginner price level", who: "Index" }
      ],
      idea: `Every mentor agrees you should charge less before you have proof. They disagree on *how much* less and *how* to structure it. Here are the positions side by side. This tab doesn't pick one for you.

**The common ground:**
- **Price to proof.** Jason (8/25): price on value, proof and how much money the client has. No clients yet means a lower price and a better guarantee, so you carry more of the risk.
- **Founding terms.** Logan (10/9): put your first 2-3 clients on a founding price. "That's exactly what I did and it worked."
- **Don't over-reach.** Calum (8/28): don't try to sell $10k for three months upfront now. Month-to-month or performance is much easier.

**The structures on offer:**
- **A lower flat price** (Logan's $600-1,500 first clients; Tayt's $1.5-2k when he'd charge $3-4k).
- **A step-up price** (Calum's about $1,000 first month, no contract, then about $2,500 once you've proven it in 30 days).
- **Free first, then paid** (Jason's free two weeks, then $1,000/month "if all goes well"; Logan's free video, then a trial, then $2,500).
- **A full price with a strong risk reversal** (Noah's student at $3,000 with a shortfall guarantee; peers at $2-5k).

**Tayt's framing (11/4)** makes a low price sound like a smart buy instead of a weak one: "the price of an inexperienced guy with the experience of an experienced one," because of who coaches you.

**Context for ZDub:** PMT is at $2,000/month plus ad spend after a free month. Your trades target is $2,000-3,000. Which structure you use for client #2 is your call. Write down the reason so you can explain it on a call.`,
      keyPoints: [
        "All agree: charge less until you have proof, or carry more risk with a guarantee.",
        "Founding price for your first 2-3 clients (Logan, 10/9).",
        "Options: lower flat price, step-up price, free-then-paid, or full price + strong guarantee.",
        "Tayt's frame: 'inexperienced guy's price, experienced guy's experience.'",
        "Don't sell $10k three months upfront yet (Calum, 8/28)."
      ],
      why: "Your second client sets your proof and your pricing trajectory. Choosing a structure on purpose beats dropping your price on the call.",
      example: {
        title: "Two honest ways to price client #2",
        body: "Step-up (Calum style): \"First month is $1,000, no contract. If we hit the number we agree on, it goes to $2,500 a month, because that's what the service costs.\"\n\nFounding (Logan + Tayt style): \"You'd be one of my first three founding clients at $1,800 a month plus ad spend. Normally this is $2,500. You get my experience and my mentors' playbook at a beginner's price, and I get a case study.\""
      },
      table: {
        head: ["Mentor", "Beginner price position", "Date"],
        rows: [
          ["Logan McKinney", "'Safe bet' about $1,500-2,500; his own first clients were $600-1,500; founding terms for first 2-3 clients", "10/9, 10/16"],
          ["Calum Tresham", "About $1,000 first month, no contract, then about $2,500 after proving it; his 'how much' range goes $1,500 / $3,000 / $5,000", "8/28, 10/6"],
          ["Jason Maulucci", "Free two-week trial, then $1,000/month; lower price + better guarantee when you have no clients", "8/25"],
          ["Noah Wyman", "Reviewed a student pitching $3,000/month with a guarantee", "10/7"],
          ["Tayt Shelman", "$1.5k-2k when he'd charge $3k-4k, sold as 'inexperienced price, experienced experience'", "11/4"],
          ["Peers (9/25 call)", "$2-5k + ad spend", "9/25"]
        ]
      },
      practice: [
        {
          prompt: "Choose ZDub's pricing structure for client #2 and write the exact words you'll say. Then write the case for one alternative.",
          fields: ["Structure chosen (flat / step-up / free-then-paid / full + guarantee)", "Price and terms", "Exact words on the call", "Why this one (your reason)", "Best case for an alternative structure"],
          rubric: ["Price and terms are specific", "Words are honest (no fake deadline)", "Reason ties to your proof level and the client's ticket size", "Alternative is argued fairly"]
        }
      ],
      today: { task: "Decide your founding-client terms (how many spots, price, what changes after) and write them into your pitch notes so you never improvise price on a call.", output: "Written founding/beginner pricing terms", minutes: 20, suggested: false },
      check: [
        { q: "What structure did Calum suggest on 8/28?", a: "About $1,000 for the first month with no contract, prove it in 30 days, then about $2,500/month." },
        { q: "What are founding terms (Logan, 10/9)?", a: "Putting your first 2-3 clients on a founding price; Logan said it's exactly what he did and it worked." },
        { q: "How does Tayt frame a lower price (11/4)?", a: "'The price of an inexperienced guy with the experience of an experienced one,' because of who coaches you." }
      ]
    },
    {
      id: "off-19",
      part: "pricing",
      title: "Pricing principles: price the value gap, keep ad spend separate",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-29",
      source: [
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Build the offer around an outcome (value-to-price gap); Ad spend is always separate", who: "Jason Maulucci, 6/10/26; Noah Wyman, 10/21/26; Cam, 10/29/26" },
        { doc: "ZDub_Guide_06 V2", section: "Pricing principles", who: "Logan McKinney (10/13, 10/16/26); Calum Tresham (10/6/26); Jason Maulucci (8/25/26)" }
      ],
      alsoIn: ["Sales tab (money model before price)"],
      idea: `Once you have a number, these rules decide how you set it and how you present it.

**1. Price on the value-to-price gap (Jason, 6/10).** If you can credibly add $100k in 90 days, $10k is cheap. At 2.5x to 30x return on ad spend, $3k a month "is nothing." The bigger the gap between what you cost and what you produce, the easier the yes. (The Sales tab's money model is how you *show* that gap on a call.)

**2. Know your cost to deliver (Logan, 10/16).** Think about what it costs you and what's valuable to them. Don't slave away for a tiny retainer.

**3. Ad spend is always separate** (Noah, 10/21; Cam, 10/29). On free trials, the client still pays ad spend. Frame it as an investment, not a cost: a 2-3x return on $300 of ad spend is $600-900 back (Logan, 10/16).

**4. Show your price publicly** so it's not a surprise on the call (Logan, 10/13). Logan shows his $1,500 flat rate on his page. He also said make the price clear and confident: "starting at $2,500," not "for established businesses."

**5. Decide offer details before calls, not on the call** (Logan, 10/13).

**6. No cookie-cutter percentages.** For performance pricing, adjust by the client's transaction value and margins (Calum, 10/6).

**7. Add value with bonuses instead of discounting** (Jason, 8/25). Discounting has its own lesson in Part 5.

**8. Respect the client's buffer.** Signing someone who can barely afford one month is on Calum's "what kills the close" list (8/21): you need clients with a buffer. Jason (8/18) said the same from the other side: hiring you should be a line item, not a bet, and the worst clients bet their last dollar on you.

**For PMT:** PMT's course seats are low ticket, so the gap has to come from volume. Chris asked for "spend X, get Y people," which is exactly a value-gap conversation.`,
      keyPoints: [
        "Price on the gap between what you cost and what you create (Jason, 6/10).",
        "Know your delivery cost; don't slave for a tiny retainer.",
        "Ad spend is always separate, even on free trials.",
        "Show price publicly; state it confidently ('starting at $2,500').",
        "Decide details before the call; no cookie-cutter percentages."
      ],
      why: "These rules keep ZDub profitable and keep the price conversation about return, not cost.",
      example: {
        title: "Value gap for a remodeler",
        body: "If $3,000/month in ads produces about 4 jobs at $20k (Noah's remodeler example, 10/21), that's about $80k in revenue. Next to that, a $2,500 retainer is a small slice. Show the numbers, then say the price."
      },
      practice: [
        {
          prompt: "Work out your value gap and delivery cost for one real prospect type.",
          fields: ["Prospect type and average job value", "Realistic monthly jobs from ads (run it low)", "Monthly value created", "Your price + ad spend", "Your hours and tool costs to deliver", "Is the gap big enough? Why?"],
          rubric: ["Job value and close assumptions are conservative", "Ad spend is separate from your fee", "Delivery cost includes your time", "Conclusion is honest"]
        }
      ],
      today: { task: "Add a 'starting at $___/month + ad spend' line to ZDub's landing page or pitch deck, as Logan does.", output: "Public, confident price line", minutes: 15, suggested: false },
      check: [
        { q: "What is Jason's value-to-price gap idea (6/10)?", a: "If you can credibly add $100k in 90 days, $10k is cheap; price relative to the value you create." },
        { q: "Who pays ad spend on a free trial (Noah, Cam)?", a: "The client. Ad spend is always separate." },
        { q: "Why does Logan show his price publicly (10/13)?", a: "So it isn't a surprise on the call." }
      ]
    },
    {
      id: "off-20",
      part: "pricing",
      title: "Retainer vs performance pricing (the mentors disagree)",
      minutes: 10,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "6. Retainer vs performance pricing; Where the mentors disagree", who: "Logan McKinney (10/9, 10/13/26); Calum Tresham (10/6/26); Noah Wyman (10/7/26)" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Positioning and pricing moves: Profit share for roofers", who: "Tayt Shelman, 11/4/26" },
        { doc: "ZDub_Guide_06 V2", section: "3. Pricing (Steady Chair, rev share examples)", who: "Logan McKinney, 10/13 and 10/16/26" }
      ],
      idea: `Should ZDub charge a flat monthly fee, a share of results, or both? This is a genuine mentor disagreement, so both sides are below.

**The case for a retainer first (Logan, 10/9 and 10/13).** Performance or percentage pricing is more profitable but harder, because you have to *prove attribution*. A friend of Logan's lost $5-7k because he couldn't prove 20+ customers came from him. For a first client, a base retainer is easier; move to performance later. With a flat retainer, show growth against a baseline (his chart: the same baseline bars plus new bars from marketing). Full-pipeline attribution is why Logan built his own booking platform (Steady Chair: ad spend + 35% of a first visit from an attributed new client).

**The case for performance (Calum, 10/6).** Results-based, pay-on-performance pricing is a good model when you have *no testimonials*: the client risks little, so it's easier to say yes. Paul has a formula for it (not in the project files).

**Tayt (11/4):** profit share is an option for roofers, who are used to paying sales reps a cut. A student noted you need tracking in place before you try it.

**What happens in real calls:** Noah's reviewed prospect (10/7) asked for performance-only after hearing the retainer pitch. Expect that request.

**Hybrids the mentors used:** Noah's student pitched $3,000/month plus 5% rev share on renovations; Jason mentioned $5k/month plus a possible 10% profit share; Logan's product clients pay 10-30% of attributed sales plus ad spend.

**Whatever you choose,** the prerequisite is the same: a way to match leads to paying customers. Without it, a retainer can't show growth and a performance deal can't get paid.`,
      keyPoints: [
        "Retainer: easier for a first client; show growth against a baseline (Logan).",
        "Performance: easy yes when you have no testimonials (Calum).",
        "Performance needs bulletproof attribution or you don't get paid.",
        "Profit share can suit roofers used to paying sales reps (Tayt, 11/4).",
        "Hybrids exist: base + rev share. Never a cookie-cutter percentage."
      ],
      why: "A trades prospect will ask 'can you just take a cut?' You need to know both sides and what tracking you'd need before you answer.",
      example: {
        title: "Answering 'Can you just do it on performance?'",
        body: "Retainer-first answer (Logan's view): \"I keep a base fee because a lot of what drives your results, like answering leads fast, is on your side. I'll show you every lead and match it to booked jobs each month.\"\n\nPerformance answer (Calum/Tayt view): \"I can do a base plus a share of jobs we can track to the ads, as long as we set up tracking so we both see the same numbers.\""
      },
      table: {
        head: ["Topic", "One side", "Other side"],
        rows: [
          ["Retainer vs performance for a first client", "Logan (10/9, 10/13): base retainer is easier, because performance needs proven attribution; a friend lost $5-7k", "Calum (10/6): pay-on-performance is a good model when you have no testimonials"],
          ["Profit share for trades", "Tayt (11/4): an option for roofers, who are used to paying sales reps", "Student on 11/4 and Logan: only once tracking is in place end to end"]
        ]
      },
      practice: [
        {
          prompt: "Write both pricing versions for a Sacramento roofer, then list exactly what tracking you'd need for the performance version.",
          fields: ["Retainer version (price + what you report monthly)", "Performance or hybrid version (base + %/per-job)", "Tracking needed (CRM, lead-to-job match, who reports)", "Which you'd offer first and why"],
          rubric: ["Both versions are concrete", "The percentage is adjusted to job value and margin", "Tracking plan is specific", "Your choice is reasoned, not copied"]
        }
      ],
      today: { task: "Set up (or list the steps for) a lead-to-paying-customer match for PMT: lead list from Meta vs registrations each month.", output: "PMT lead-to-registration tracking plan", minutes: 30, suggested: false },
      check: [
        { q: "Why does Logan prefer a retainer for a first client?", a: "Performance pricing requires proving attribution; his friend lost $5-7k when he couldn't prove 20+ customers came from him." },
        { q: "When does Calum say performance pricing is a good model?", a: "When you have no testimonials." },
        { q: "Why might profit share suit roofers (Tayt, 11/4)?", a: "They're used to paying sales reps a cut; you need tracking first." }
      ]
    },
    {
      id: "off-21",
      part: "guarantees",
      title: "Reverse the risk: why guarantees work and the four types",
      minutes: 10,
      tags: ["Book", "Mentor"],
      date: "2026-08-25",
      source: [
        { doc: "ZDub Mastery Guide", section: "Ch 11: Guarantees; Risk reversal", who: "Alex Hormozi ($100M Offers); Allan Dib (The 1-Page Marketing Plan); Harry Beckwith (Selling the Invisible)" },
        { doc: "ZDub_Guide_06 V2", section: "Jason on guarantees", who: "Jason Maulucci, 8/25/26" },
        { doc: "ZDub Mastery Workbook", section: "Ch 11 Recall 11.5 + Answer Key", who: "Workbook" }
      ],
      idea: `**Why it matters.** Jason (8/25): risk is the number one reason people don't buy. "If you get nothing else," add a guarantee. The books agree. Allan Dib makes risk reversal a core part of the 1-Page Marketing Plan: buyers fear being let down, so take the risk onto yourself. Harry Beckwith: the services buyer's biggest fear is a *bad choice*, so anything that makes the choice safer increases sales. In the value equation, a guarantee raises **perceived likelihood**.

**Risk reversal comes in many forms,** not just refunds: free estimates, money-back promises, trial sessions, "pay after it's done," flat-rate pricing and service-level guarantees.

**Hormozi's four guarantee types** (Jason taught the same list on 8/25):
1. **Unconditional:** "Love it or your money back," no questions.
2. **Conditional:** "Do X, Y and Z; if you don't get the result, we'll refund you or keep working free." Bonus effect: the conditions push customers to do the things that create results. For ZDub, conditions are things like filming on time, keeping the ad budget, and calling leads fast.
3. **Anti-guarantee:** "All sales final," with a clear reason (exclusivity, custom work). Honest and sometimes powerful.
4. **Implied / performance:** you're paid on results, like revenue share or pay-per-outcome ("no results, no pay").

**Name it and make it specific.** Hormozi recommends a named guarantee: "The Confident Rider Promise," "The Spotless Site Guarantee." A named promise is easier to remember and sounds like policy, not a sales line.

**Be transparent.** Jason: be clear about refund terms; "don't be scammy." Which type fits ZDub *right now* is a live mentor disagreement, covered two lessons from here.`,
      keyPoints: [
        "Risk is the #1 reason people don't buy (Jason, 8/25).",
        "Guarantees raise perceived likelihood; risk reversal has many forms.",
        "Four types: unconditional, conditional, anti-guarantee, performance.",
        "Conditional guarantees also push the buyer to do their part.",
        "Name it, make it specific, state the terms plainly."
      ],
      why: "Both PMT's riders and ZDub's contractors fear a bad choice. A clear, named guarantee removes that fear without cutting the price.",
      example: {
        title: "Four types, one roofer",
        body: "Unconditional: \"Not happy with the cleanup? We come back free, no questions.\"\nConditional: \"Approve the written quote; if the final price changes without your written OK, we eat the difference.\"\nAnti-guarantee: \"Custom skylight orders are final, because they're cut to your roof.\"\nPerformance (for ZDub's deal with the roofer): \"You pay a share only on jobs we can track to the ads.\""
      },
      practice: [
        {
          prompt: "Write one guarantee of each type, two for PMT's customers and two for ZDub's own offer. Name each one.",
          fields: ["PMT: conditional (named)", "PMT: unconditional or anti-guarantee (named)", "ZDub: conditional (named)", "ZDub: performance-based (named)"],
          rubric: ["Each is clearly one of the four types", "Each has a short name", "Conditions are specific and fair", "Nothing promised outside the business's control"]
        }
      ],
      today: { task: "Ask Chris what PMT already promises students who struggle (re-takes, extra practice). Turn the honest answer into one named PMT guarantee for the ads.", output: "One named, approved PMT guarantee", minutes: 20, suggested: false },
      check: [
        { q: "Workbook 11.5: 'If you're not ready after the course, you can retake the riding portion free.' What kind of guarantee is this?", a: "A conditional guarantee the business controls. The school can't guarantee a DMV result but can guarantee extra coaching it controls." },
        { q: "Name Hormozi's four guarantee types.", a: "Unconditional, conditional, anti-guarantee, implied/performance." },
        { q: "What does Beckwith say is the services buyer's biggest fear?", a: "Making a bad choice; anything that makes the choice safer increases sales." }
      ]
    },
    {
      id: "off-22",
      part: "guarantees",
      title: "Promise only what you control",
      minutes: 10,
      tags: ["Mentor", "Book"],
      date: "2026-10-29",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "5. Guarantees and promises", who: "Cam, 10/15/26; Logan McKinney, 10/13/26 and 10/16/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Guarantees: what fits your stage (dual guarantee)", who: "Cam, 10/29/26" },
        { doc: "ZDub_Guide_03 V2", section: "The ad's offer (Pilot Proof)", who: "Cam, 9/17/26" },
        { doc: "ZDub Mastery Guide", section: "Ch 11: Guarantee Caution box", who: "Hormozi method, ZDub guide" },
        { doc: "ZDub Mastery Workbook", section: "Drill D11.5 + Answer Key", who: "Workbook" }
      ],
      idea: `A guarantee is only as good as your ability to honor it. Every source agrees on this one.

**Cam (10/15):** promise what's fully in your control, like the *number of leads* in two weeks, not closed customers. ZDub controls ads, creative and follow-up speed. The client controls whether they answer the phone and how well they sell.

**Logan (10/13):** be accountable only to what you promise. His example: "I will run five to eight static ads... predict clients based on spend." Under-promise, over-deliver. And (10/16): don't promise offers you can't fulfill or don't want to learn. If it's in your wheelhouse and you want to learn it, close it and lean on the community.

**Cam (10/29): the dual guarantee.** For an orthodontist, his guarantee combined a *conversion gain* plus *new-patient growth* that must total 14 or more in six months. He built it so his own closing ability can't trigger a refund: it measures things his system controls.

**Cam's honest line (9/17)** about his pilot offer: "Am I guaranteeing that you get a result? No, but I'm guaranteeing that you will never pay me unless you do."

**The same rule for client offers** (Mastery Guide caution): a training school can't guarantee a DMV result; it can guarantee "if you're not ready after the course, you can retake the riding portion free." A contractor can guarantee timelines, cleanup and price, not weather.

**How to write one (Drill D11.5):** state the *condition*, the *remedy*, and *why the business can afford to honor it*. The Answer Key's model: "The No-Surprise Price Promise: the price on your written quote is the price you pay. If anything changes, we eat it unless you approve the change in writing." Specific, controlled, and it removes the biggest fear in the category.`,
      keyPoints: [
        "Guarantee leads or activity you control, not closed sales (Cam, 10/15).",
        "Be accountable only to what you promise; under-promise (Logan, 10/13).",
        "Design guarantees so the client's sales skill can't trigger a refund (Cam's dual guarantee, 10/29).",
        "Client offers: guarantee what the business controls (retake, cleanup, price), not outcomes it doesn't (DMV, weather).",
        "Every guarantee = condition + remedy + why it's affordable."
      ],
      why: "A broken guarantee costs ZDub money and reputation. A controlled one closes deals and survives a bad month.",
      example: {
        title: "ZDub: uncontrolled vs controlled",
        before: "We guarantee you'll close 10 new roofing jobs in 60 days.",
        after: "The Booked Inspection Promise: if we don't deliver 15 qualified inspection requests in your first 30 days (with you keeping the agreed ad budget and calling leads within 15 minutes), we keep working at no fee until we do.",
        body: "The 'after' measures leads (ZDub controls) not closes (roofer controls), has conditions, and a remedy you can afford. The number 15 is a placeholder: set it from your money model, run low."
      },
      practice: [
        {
          prompt: "Drill D11.5: write a named guarantee for three businesses: PMT, ZDub, and one Sacramento trade. For each state the condition, the remedy and why it can be honored.",
          fields: ["PMT: name / condition / remedy / why affordable", "ZDub: name / condition / remedy / why affordable", "Trade (roofer, HVAC, detailer): name / condition / remedy / why affordable"],
          rubric: ["Each measures something the business controls", "Conditions are fair and specific", "Remedy is affordable without wrecking the business", "Each removes the biggest fear in that category"]
        }
      ],
      today: { task: "Rewrite any guarantee or promise currently on ZDub's page or pitch so it only covers what you control (leads, launch dates, creative volume, response time).", output: "A controlled ZDub guarantee in your pitch notes", minutes: 25, suggested: false },
      check: [
        { q: "What should a guarantee measure, according to Cam (10/15)?", a: "What's fully in your control, like number of leads in two weeks, not closed customers." },
        { q: "Why did Cam design his orthodontist guarantee as a dual guarantee (10/29)?", a: "So his own closing ability (or the client's) can't trigger a refund; it measures conversion gain plus new-patient growth, totaling 14+ in six months." },
        { q: "What three parts does Drill D11.5 require in every guarantee?", a: "The condition, the remedy, and why the business can afford to honor it." }
      ]
    },
    {
      id: "off-23",
      part: "guarantees",
      title: "Which guarantee fits your stage (the mentors disagree)",
      minutes: 12,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Guarantees: what fits your stage; Where mentors disagree: money-back guarantee", who: "Paul Snowman and Nathan (7/28/26); Jason Maulucci (6/10/26); Cam (10/29/26); Tayt Shelman (11/4/26)" },
        { doc: "ZDub_Guide_06 V2", section: "5. Guarantees and promises; Jason on guarantees; Where the mentors disagree: how bold the guarantee", who: "Logan (10/9, 10/13/26); Noah (10/7/26); Jason (8/25/26); Cam (9/17, 10/15/26)" },
        { doc: "ZDub_Guide_01 V2", section: "8. Presenting the price: guarantee timing", who: "Noah Wyman, 10/7/26" }
      ],
      idea: `The mentors agree you need *some* risk reversal before you have case studies. Noah (10/7): a risk-free offer (2-week free trial or money-back guarantee) works until you have your first case study. They disagree on **how bold** and **what kind**. Here is every guarantee they put on the table.

**The boldest view: Jason (8/25).** "Make an offer that should scare you a little bit." He said you'll see more refunds but about 10x more closes, and if you get 70% of the way and the ads are profitable, clients rarely refund. He changed Noah's offer to roughly 2x ROI in profit in 30 days or a full refund plus $1,000. His rules: set the refund money aside; you'll usually know by about day 14.

**The cautious view: Paul (7/28).** Under $10k/month in agency revenue, no money-back guarantee. Use "we work for free until we hit X" (e.g. 50 leads in 90 days) instead. Even a student at $50k/month was told to start there. Money-back only with cash in reserve.

**A direct clash:** Jason (8/25) called "10-20 leads a week in 90 days or we work free" a *weak* guarantee, because clients don't want more free work; they want results. Paul's "work for free until X" is close to exactly that. Same idea, opposite verdicts.

**In between:** Logan and Cam (10/13, 10/15): promise only what you control and under-promise. Cam's pilot (9/17): you never pay unless the target is hit. Logan's guarantee copy (10/9): run three full months and follow the booking process; if it hasn't produced what was modeled on the call, keep running at no extra fee for up to 60 more days. Noah's reviewed guarantee (10/7): pay back any shortfall if the retainer isn't returned, *conditional* on the client showing up to appointments and calling leads within about 15 minutes; covers the retainer only, not ad spend.

**Mechanics most of them share:** guarantees cover your fee, never ad spend. Say the guarantee **right after the price**, before they talk (Noah, 10/7). Balance cover-yourself wording with readability (Logan, 10/9).`,
      keyPoints: [
        "Some risk reversal is needed until your first case study (Noah, 10/7).",
        "Jason: bold, scary guarantee; set refund money aside; know by day 14.",
        "Paul: no money-back under $10k/month; 'work free until we hit X.'",
        "Jason calls 'or we work free' weak; Paul recommends it. Decide for yourself.",
        "Guarantees cover the fee, not ad spend; state it right after the price."
      ],
      why: "This is the decision that matters most for ZDub right now: what you say right after you name your price to a contractor.",
      example: {
        title: "Logan's guarantee copy (10/9), in plain words",
        body: "\"Run three full months with us and follow the booking process. If the campaign hasn't produced what we modeled together on this call, we keep running it at no additional fee for up to 60 more days.\"\n\nNote what it protects: the client must follow the process, and the remedy is your time, not a cash refund."
      },
      table: {
        head: ["Guarantee", "Who", "When they said to use it"],
        rows: [
          ["Work for free until we hit X (e.g. 50 leads in 90 days)", "Paul, 7/28", "Anyone under $10k/month agency revenue"],
          ["90-day money-back", "Nathan (student), reviewed by Paul, 7/28", "Only with cash in reserve; Nathan used it to go from $0 to $7.5k"],
          ["Money-back at higher prices", "Cam, 10/29", "Cam uses one on $6k-9k/month offers"],
          ["Conditional refund (client must film on time, hit content quotas)", "Jason, 6/10", "Ties refund to the client doing their part; about one refund request in his career"],
          ["2x ROI in 30 days or full refund + $1,000", "Jason, 8/25", "'An offer that should scare you'; set refund money aside"],
          ["Keep running free for up to 60 more days after 3 months", "Logan, 10/9", "Client must follow the booking process"],
          ["Pay back any retainer shortfall (not ad spend)", "Noah, 10/7", "Client shows up to appointments and calls leads within about 15 min"],
          ["Dual guarantee on what you control", "Cam, 10/29", "Measures things your system controls so closing ability can't trigger a refund"],
          ["You never pay unless we hit the target", "Cam, 9/17", "Two-week pilot; 'Am I guaranteeing results? No...'"],
          ["Hit X, then we automatically start working together", "Tayt, 11/4", "Any free trial; set the goal and paid next step before you start"]
        ]
      },
      practice: [
        {
          prompt: "Write the guarantee you'd say right after your price, then write the strongest case for the opposite side.",
          fields: ["Your price sentence", "Your guarantee sentence (said right after)", "Which mentor position it follows", "Strongest case for the other side", "If money-back: how much cash you'd set aside"],
          rubric: ["Guarantee covers your fee, not ad spend", "Conditions are clear", "Position is named honestly", "Opposite side is argued fairly", "Any refund promise is backed by real reserve cash"]
        }
      ],
      today: { task: "Swap any money-back language in ZDub's pitch for the guarantee you chose, and record yourself saying price + guarantee in one breath three times.", output: "Final price + guarantee script, rehearsed", minutes: 20, suggested: true },
      check: [
        { q: "What is Paul's rule on money-back guarantees (7/28)?", a: "Under $10k/month, don't offer one; use 'we work for free until we hit X' instead." },
        { q: "Why did Jason call 'leads in 90 days or we work free' weak (8/25)?", a: "Clients don't want more free work; they want results. He switched Noah to about 2x ROI in 30 days or refund + $1,000." },
        { q: "When should you mention the guarantee on a call (Noah, 10/7)?", a: "Right after the price, before they talk." }
      ]
    },
    {
      id: "off-24",
      part: "guarantees",
      title: "Free trials that turn into clients: the Pilot Proof structure",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "4. Founding terms, trials and the offer ladder (Cam's pilot proof program; Logan's ladder; Jason's newcomer path)", who: "Cam (9/17/26); Logan McKinney (10/13/26); Jason Maulucci (8/25/26); Noah Wyman (10/7/26)" },
        { doc: "LC_Example_Ads", section: "Pilot Proof Program video ad script", who: "Cam, 9/17/26" },
        { doc: "ZDub_Guide_03 V2", section: "The ad's offer (for reference): reuse the ad and change the city", who: "Cam, 9/17/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Guarantees: 'Hit X, then we automatically start working together'", who: "Tayt Shelman, 11/4/26" }
      ],
      idea: `A free trial is the strongest risk reversal a new agency has. Most mentors used one to start. The difference between a trial that becomes a client and one that becomes free labor is *structure*.

**Cam's Pilot Proof Program (9/17), "triple P."** Before the client pays a dime, agree on **one specific target** that makes them money (usually more customers). Cam runs their content and paid ads himself for two weeks, free. If he hits the number, a paid retainer starts: paying for the same results is "an absolute no brainer." If not, they can tell him to "take a hike." He started his own ad work this way: "I started by doing it for free and only making money if the ads made them money." His ad script hooks on agencies that "get paid the same amount whether you get more customers or stay the same," then CTA: "try and be happy before you buy." Cam told students they could reuse it and change the city.

**Tayt (11/4): "Hit X, then we automatically start working together."** Set the goal *and the paid next step* before you start. No second sales call, no "let's see how it goes."

**Logan's ladder (10/13):** a free piece of content first → if they love it, onboard → a 2-week trial (e.g. 3-5 videos plus a few statics, a prorated sample of the paid package, posted "video, static, static, video" through the week) → then $2,500/month.

**Jason's newcomer path (8/25):** land a couple of free-trial clients, build a simple portfolio, harvest testimonials. Most free trials turn paying if you crush it.

**Noah (10/7):** risk-free works until you have your first case study. After that, lean on the case study.

**ZDub's real example:** PMT got October free, then $2,000/month plus ad spend. That matches Logan's ladder. Guide 06's note (Claude's input): confirm in writing when paid service starts, exactly what was delivered free, and what the monthly fee covers.`,
      keyPoints: [
        "Agree one money-making target before any work starts (Cam, 9/17).",
        "Hit it → paid retainer starts automatically; miss it → they walk (Tayt, 11/4).",
        "A trial is a prorated sample of the paid package, not a different product (Logan).",
        "Use trials to build a portfolio and testimonials (Jason, 8/25).",
        "Stop leading with free once you have a case study (Noah, 10/7)."
      ],
      why: "With one client and no trades case study, a well-structured trial is ZDub's fastest honest path to client #2 and to proof.",
      example: {
        title: "A ZDub pilot for a Roseville remodeler",
        body: "\"Before you pay anything, we agree on one number, say 8 booked in-home estimates. You cover ad spend. I run your ads and content free for 14 days starting the day I have access. If we hit 8, we automatically move to $2,500 a month plus ad spend on the 15th. If we don't, you owe me nothing and we part as friends.\"\n\nTarget, start date, who pays ad spend and the paid next step are all set in advance. The 8 is a placeholder: set it from your money model, run low."
      },
      practice: [
        {
          prompt: "Write ZDub's pilot offer in Cam's structure, then turn it into a 30-60 second video ad script (hook, problem, solution, CTA) for Sacramento contractors.",
          fields: ["Agreed target (and how it's measured)", "Trial length and start trigger", "Who pays ad spend", "Paid next step if hit", "What happens if missed", "Ad script: hook / problem / solution / CTA"],
          rubric: ["Target is something you control (leads, booked estimates)", "Start date is defined", "Client pays ad spend", "Paid step is automatic, with price", "Script names Sacramento and is honest (no borrowed results)"]
        }
      ],
      today: { task: "Write Cam-style pilot terms for ZDub on one page and adapt Cam's 'triple P' ad script for the Sacramento area in your own words.", output: "ZDub pilot terms + Sacramento pilot ad script", minutes: 40, suggested: false },
      check: [
        { q: "What must be agreed before a Pilot Proof Program starts (Cam, 9/17)?", a: "One specific target that makes the client money; if it's hit, a paid retainer starts; if not, they walk." },
        { q: "What does Tayt add to any free trial (11/4)?", a: "Set the goal and the paid next step up front: 'Hit X, then we automatically start working together.'" },
        { q: "What is Logan's offer ladder (10/13)?", a: "Free piece of content → onboard if they love it → 2-week trial (prorated sample, e.g. 3-5 videos + statics) → $2,500/month." }
      ]
    },
    {
      id: "off-25",
      part: "guarantees",
      title: "Free-trial rules: pitfalls, green-yellow-red, and who pays",
      minutes: 10,
      tags: ["Mentor", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "4. Free 2-week trial pitfalls; green, yellow, red; Dream clients (low-ticket clients)", who: "Logan McKinney (10/13/26); Clayton Bell (8/26/26); Jason Maulucci (8/18/26); Cam (9/17/26)" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Ad spend is always separate; Where mentors disagree: free trial pay", who: "Noah Wyman (10/21/26); Cam (10/29/26); Tayt Shelman (11/4/26)" },
        { doc: "ZDub_Guide_01 V2", section: "8. Presenting the price: retainer clock starts when they send all access", who: "Calum Tresham, 10/6/26" }
      ],
      idea: `Free trials go wrong in predictable ways. These rules come straight from mentors who learned them the hard way.

**Logan's pitfalls (10/13):**
- **Setup eats the trial.** Much of the first two weeks is onboarding. Logan spent nearly a month chasing old logins for the card shop.
- **Clarify when the two weeks start.** (Calum, 10/6: the retainer clock can start the day they send all access.)
- **Don't promise results** in a trial. Spell out exactly what's delivered.
- **Don't build a free website** in a trial.
- **Trials stretch.** Cam (9/17): two weeks often become four or six if you're tweaking from data. Decide in advance whether you allow that.

**Clayton's green / yellow / red (8/26):** agree up front what each outcome means.
- **Green:** clear results → the full scope at full price.
- **Yellow:** some results → a small rate like $500-750/month while you keep improving.
- **Red:** nothing → "you never see me again."

**Jason's mandatory condition (8/18):** from any client you want *money, skills or proof*. For a free trial, the deal is: if they like it, they give you a testimonial. "If the answer to those three is ever nothing, drop them." Guide 06's note for PMT (Claude's input): make the testimonial a condition of the free month, in writing.

**Who pays during the trial is a disagreement** (table below). Noah and Cam keep ad spend on the client; Tayt suggests profit share for roofers. Both sides agree on one thing: define success, in writing, before the trial starts.`,
      keyPoints: [
        "Setup and logins eat trial time; define the start date as 'all access received.'",
        "Spell out deliverables; promise no results; no free websites.",
        "Agree green / yellow / red outcomes before you start (Clayton, 8/26).",
        "Free trial condition: if they like it, they give a testimonial (Jason, 8/18).",
        "Client pays ad spend on trials (Noah, Cam); profit share is Tayt's alternative for roofers."
      ],
      why: "Without these rules a free month becomes three months of unpaid work with no testimonial. With them, every trial produces money, skills or proof.",
      example: {
        title: "Trial terms in one paragraph (PMT-style)",
        body: "\"The 14-day trial starts the day I have access to your Meta account and page. You cover ad spend. I'll deliver 4 short videos, 4 statics and one lead campaign. Green: we hit 20 qualified leads and you move to $2,000 a month plus ad spend. Yellow: some leads, we go to a reduced rate for one month while I fix it. Red: we part ways. Either way, if you're happy with the work, you'll record a 30-second testimonial.\" (Numbers are placeholders.)"
      },
      table: {
        head: ["Topic", "One side", "Other side"],
        rows: [
          ["Free trial pay", "Noah (10/21): the client covers ad spend and you define success up front; Cam (10/29) also keeps ad spend separate on trials", "Tayt (11/4): consider a profit share for roofers instead"],
          ["How free is free?", "Cam (9/17): fully free until the target is hit, then a retainer", "Clayton (8/26): a yellow-light middle rate ($500-750/month) when results are partial"]
        ]
      },
      practice: [
        {
          prompt: "Write ZDub's standard trial terms: one short paragraph you'll paste into every trial agreement.",
          fields: ["Start trigger", "Exact deliverables", "Who pays ad spend", "Green / yellow / red definitions", "Testimonial condition", "Maximum length (can it stretch?)"],
          rubric: ["Start is tied to access, not a calendar date", "Deliverables are countable", "No promised results", "All three lights defined with prices", "Testimonial is a written condition"]
        }
      ],
      today: { task: "Check PMT's status against these rules: is the paid start date, what October included, and the testimonial condition in writing? If not, send Chris a short confirmation message today.", output: "Written confirmation of PMT's trial terms", minutes: 20, suggested: false },
      check: [
        { q: "Name two of Logan's free-trial pitfalls (10/13).", a: "Setup eats the time (old logins), unclear start date, promising results, not spelling out deliverables, building a free website." },
        { q: "What do green, yellow and red mean in Clayton's trial (8/26)?", a: "Green: full scope; yellow: some results, a small rate ($500-750/month); red: you never see me again." },
        { q: "What is Jason's mandatory condition for a free trial (8/18)?", a: "If they like it, they give you a testimonial. From every client you want money, skills or proof." }
      ]
    },
    {
      id: "off-26",
      part: "protect",
      title: "Don't let them cut the offer into pieces",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-08-21",
      source: [
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "The price-to-deliverables trap", who: "Jason Maulucci, 6/10/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Positioning and pricing moves: Don't halve the offer to close", who: "Cam and Calum Tresham, 8/21/26" }
      ],
      idea: `Two ways a deal shrinks until it's not worth doing, and how the mentors said to stop both.

**1. The price-to-deliverables trap (Jason, 6/10).** If the client links your price to a list of deliverables, they start cutting items to cut your fee ("Do we really need 8 videos? What if it's 4 and $1,200?"). Then they swap you for someone cheaper. Jason's picture: the maid who's 80% as good for less. Once you're a list of tasks, you're a commodity.

The fix is the outcome offer from Part 2. "Managing ads isn't really a thing." People run ads to get customers. When an owner says they want "more eyes," they really mean more customers. Keep the conversation on the outcome and the price of that outcome. Deliverables stay concrete, but they're the vehicle, not the thing being priced item by item.

**Rescuing a bad frame (Jason, 6/10):** if a client has already anchored on a low number tied to deliverables, accept their price for the first 30 to 90 days, show a financial model, and agree *up front* that hitting a set benchmark moves them to your full retainer.

**2. Halving the offer to close (Cam and Calum, 8/21).** On a live call Calum reviewed, Cam dropped from $4k for 30 reels to $2k for 10 reels when the prospect hesitated, and that anchored the lower price. Calum's steak analogy: nobody wants the 5oz steak after hearing the 10oz is perfect. Once you've said the full offer is what gets results, a smaller version sounds like a worse result, not a deal.

**What to do instead:** find out whether the objection is money or fear (Sales tab), and if price must flex, flex the *terms* (a one-month step tied to a result, Part 5 next lesson), not the offer itself.`,
      keyPoints: [
        "If price is tied to a deliverables list, clients cut items to cut your fee (Jason, 6/10).",
        "Price the outcome; deliverables are the vehicle.",
        "Rescue: accept their price for 30-90 days with a benchmark that triggers full price.",
        "Don't halve the offer to close; it anchors the lower price (Cam/Calum, 8/21).",
        "Steak analogy: nobody wants the 5oz after hearing the 10oz is perfect."
      ],
      why: "ZDub's deliverables (videos, statics, ads) are easy to count, which makes them easy to haggle. Pricing the outcome protects your retainer from being whittled down.",
      example: {
        title: "Handling 'Can we do half the videos for half the price?'",
        before: "Sure, 4 videos for $1,250 works.",
        after: "The videos aren't really what you're paying for. You're paying for booked jobs; the videos are how we get them, and 8 is what it takes to give the ads enough to test. If budget is the issue, let's look at the numbers we ran: what part of the plan looked too high?",
        body: "The 'after' keeps the outcome as the thing being priced and moves to the real objection instead of shrinking the offer."
      },
      practice: [
        {
          prompt: "Write your responses to three ways a prospect might cut the offer.",
          fields: ["'Can we do fewer videos for less?'", "'I just want you to manage the ads, not the content.'", "'Another guy will do it for $800.'", "Your rescue-frame terms if a client insists on a lower start"],
          rubric: ["Each response returns to the outcome", "No response halves the offer", "Rescue terms include a benchmark and a date", "Tone is calm and confident, not defensive"]
        }
      ],
      today: { task: "Review ZDub's proposal or pitch notes. Remove any per-item pricing (e.g. '$X per video') and restate the price as one number tied to the outcome.", output: "Outcome-priced proposal section", minutes: 20, suggested: false },
      check: [
        { q: "What is the price-to-deliverables trap (Jason, 6/10)?", a: "When price is linked to deliverables, the client cuts items to cut your fee and eventually swaps you for someone cheaper." },
        { q: "How did Jason say to rescue a bad price frame?", a: "Accept their price for the first 30-90 days, show a financial model, and agree up front that hitting a benchmark moves them to your full retainer." },
        { q: "What's Calum's steak analogy about (8/21)?", a: "Don't halve the offer to close: nobody wants the 5oz after hearing the 10oz is perfect." }
      ]
    },
    {
      id: "off-27",
      part: "protect",
      title: "Discounting and the honest 'self-confession'",
      minutes: 12,
      tags: ["Mentor", "Disagreement"],
      date: "2026-08-28",
      source: [
        { doc: "ZDub_Guide_01 V2", section: "9. Objection handling: 'My budget is capped at $1,500'; Self-confessing and earning the upsell; Where the mentors disagree: discounting", who: "Calum Tresham, 8/7/26 and 8/28/26; Jason Maulucci, 8/25/26" },
        { doc: "ZDub_Guide_06 V2", section: "Pricing principles; Caution/Flag on incentive pricing", who: "Jason Maulucci, 8/25/26; Calum Tresham, 8/7/26" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Positioning and pricing moves: Discounting", who: "Calum Tresham, 8/21/26" }
      ],
      alsoIn: ["Sales tab (objection handling)"],
      idea: `This lesson is about ZDub's own price on a sales call. (For client promotions, see "Price is a signal" in Part 3.)

**Calum's rule (8/7, 8/21):** avoid discounting unless the prospect **truly lacks the money** and **definitely wants to work with you**. Never discount without a reason. Never drop price just because they don't want to pay. And don't discount the wishy-washy prospect: he won't buy anyway.

When a budget is "capped at $1,500," first ask *who* set the budget and *why* it's capped (8/7). If you do flex, Calum's tasteful version ties the return to full price to a result: "This month $1,500, but if I get you X result, the following month we go to [full price], because that's what my service costs." It's a one-month step, never a permanent cut.

**The self-confession (Calum, 8/21 and 8/28).** If you give a lower price, give the *real reason*, so it works for both sides:
- "I need testimonials before I go after bigger brands."
- "If we get a result in 30 days, this lasts 12 months."
- "We're trying to get a few more clients in the med spa niche in London this quarter, because once we have a couple of case studies it's easier to sell the next one, so you'll get extra attention" (8/28).

The confession turns a discount from "I'm desperate" into "here's our honest deal." For ZDub it's simply true: you need trades case studies.

**Calum's 'earn it' structure (8/28):** about $1,000 the first month, no contract, prove it in 30 days, then about $2,500/month. Compare that to bulldozing a $9,000 three-month upfront sale with no trust.

**The other side: Jason (8/25).** His "incentive-based pricing" is $8k/month normally, $6k if you move forward on this call, a deadline he sets on the spot. He said himself: "maybe this is manipulated and whatnot, but it made money and it worked." Guide 06 flags that this conflicts with Jason's own rule that urgency must be true. Jason's other advice on the same call: add value with bonuses instead of discounting.`,
      keyPoints: [
        "Discount only if they truly can't pay and definitely want you (Calum, 8/7).",
        "Ask who set the budget and why before you flex.",
        "Flex as a one-month step tied to a result, never a permanent cut.",
        "Self-confession: give the real reason for a lower price (Calum, 8/21, 8/28).",
        "Jason's on-the-spot 'sign today' price works but he flagged it as possibly manipulative."
      ],
      why: "A discount without a reason trains the client to see your full price as fake. A self-confession keeps your price intact and your positioning honest.",
      example: {
        title: "Zach's self-confession to a Folsom HVAC owner",
        body: "\"Honestly, I'm building my trades case studies this quarter. That's why I'll start you at $1,500 for the first month with no contract. If we hit the 20 booked calls we agreed on, we go to $2,500 a month, because that's what the service costs. You get extra attention because I need you to win.\"\n\nTrue reason, a result-based step back to full price, and no fake deadline. (Numbers are placeholders.)"
      },
      table: {
        head: ["Topic", "Calum", "Jason"],
        rows: [
          ["Discounting on the call", "Only if they genuinely can't pay and want to work with you; tie the return to full price to a result (8/7)", "'Incentive-based pricing': $8k normally, $6k if you sign on this call; he said 'maybe this is manipulated... but it made money and it worked' (8/25)"],
          ["What to do instead", "Self-confession: give the real reason for a lower price (8/21, 8/28)", "Add value with bonuses instead of discounting (8/25)"]
        ]
      },
      practice: [
        {
          prompt: "Write your 'budget is capped' response in Calum's order, then your own self-confession line.",
          fields: ["First question (who set the budget / why)", "If they truly can't pay: your one-month step offer", "Your self-confession line (true reason)", "When you will NOT discount"],
          rubric: ["Starts with questions, not a lower number", "Step offer ties full price to a specific result", "Confession is true and benefits the client", "No fake deadline", "Clear 'no discount' rule for wishy-washy prospects"]
        }
      ],
      today: { task: "Write a 'discount rules' card for your desk: when you flex, how (one-month step + result), the exact self-confession sentence, and when you never discount.", output: "ZDub discount rules card", minutes: 15, suggested: false },
      check: [
        { q: "When does Calum say discounting is OK (8/7)?", a: "Only if they genuinely can't pay and definitely want to work with you, and the return to full price is tied to a result." },
        { q: "What is a 'self-confession' (Calum, 8/21)?", a: "Giving the real reason for a lower price, e.g. 'I need testimonials before I go after bigger brands.'" },
        { q: "What was Calum's 8/28 'earn it' structure?", a: "About $1,000 first month, no contract, prove it in 30 days, then about $2,500/month." }
      ]
    },
    {
      id: "off-28",
      part: "protect",
      title: "A simple agreement and a firm frame on scope creep",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-08-25",
      source: [
        { doc: "ZDub_Guide_06 V2", section: "Scope creep; Pricing principles: send every client a simple agreement; never run client ads on your own card", who: "Jason Maulucci, 8/25/26" },
        { doc: "ZDub_Guide_06 V2", section: "Not covered in the calls (contract terms)", who: "Guide note" }
      ],
      alsoIn: ["Agency Ops tab (onboarding)"],
      idea: `The offer isn't finished until it's on paper. Jason (8/25) gave two non-negotiables and a script for when the client wants more than they bought.

**1. Send every client a simple agreement.** Scope, payment terms, amount. That's the minimum. Guide 06 notes that contract details like cancellation, minimums (beyond Noah's 3-month example), payment processing and late payments weren't covered in the calls, so keep it simple and plain.

**2. Never run client ads on your own card.** The client's ad account, the client's card. (Jason's 9/30 module makes the same point in a different model: never finance a client's campaign. See the next lesson.)

**3. Set the scope frame up front.** If a client asks for out-of-scope work, Jason's student's real estate client wanted email marketing, say:
- It's outside the scope we agreed.
- Doing it for free is unfair to your other clients.
- Offer to *expand* scope in writing, e.g. a 7-day trial of the new work, then an extra $1,000/month or a 10% profit share. (Another student suggested an addendum to the agreement.)

**How firm to be:** Jason was practical. If you need the money you can bend a little; if you have leverage, negotiate. "Time is money."

**Why it matters for ZDub:** your deliverables (videos, statics, ads, follow-up) are exactly the kind of thing that quietly grows: "Can you also post this?" "Can you make a flyer?" Each small yes is unpaid work and teaches the client your scope is a suggestion. A clear agreement makes the answer easy and friendly: "Happy to, here's what that adds."

**Bonus rule from Logan (10/13):** decide your offer details before the call. If scope is decided before the call, writing the agreement takes ten minutes.`,
      keyPoints: [
        "Every client gets a simple agreement: scope, payment terms, amount (Jason, 8/25).",
        "Client ads run on the client's card, never yours.",
        "Out-of-scope request → 'outside scope, unfair to other clients' → expand in writing.",
        "Expansion options: short trial of the new work, then a fee or profit share.",
        "Bend if you need to; negotiate if you have leverage."
      ],
      why: "Scope creep and payment confusion are the fastest ways a good client turns into a bad month. Paper prevents both.",
      example: {
        title: "PMT asks for flyers",
        body: "Chris: \"Can you also make flyers for the dealership?\"\n\nZach: \"Flyers are outside what we set up in our agreement, and I keep scope tight so every client gets the same attention. I can add print design as a small add-on. Want me to send a one-line addendum with the price?\""
      },
      practice: [
        {
          prompt: "Draft ZDub's one-page agreement outline and your scope-creep script.",
          fields: ["Scope (countable deliverables)", "Payment terms (amount, due date, ad spend paid by client directly)", "Start trigger and minimum term (if any)", "Guarantee / trial terms (from Part 4)", "Scope-creep script (3 sentences)"],
          rubric: ["Scope is countable", "Ad spend is on the client's card", "Payment amount and timing are explicit", "Script names the request as out of scope and offers a written expansion", "Plain language, one page"]
        }
      ],
      today: { task: "Write (or update) the one-page agreement for PMT and send it to Chris for signature if one isn't already signed.", output: "Signed or sent PMT agreement", minutes: 45, suggested: false },
      check: [
        { q: "What three things must every client agreement cover (Jason, 8/25)?", a: "Scope, payment terms, amount." },
        { q: "What did Jason say to do when a client asks for out-of-scope work?", a: "Say it's outside scope and unfair to other clients, and offer to expand scope in writing (e.g. a 7-day trial, then an extra fee or profit share)." },
        { q: "Whose card should client ads run on?", a: "The client's. Never run client ads on your own card." }
      ]
    },
    {
      id: "off-29",
      part: "protect",
      title: "Lessons from a different model: define the lead, collect setup money first, never finance the campaign",
      minutes: 8,
      tags: ["Alternate model (Jason)"],
      date: "2026-09-30",
      source: [
        { doc: "Module_02: The Business Model and Your Offer", section: "Segment 2 (collect the tech fee before buying setup); Segment 5 (agree on what counts as a call)", who: "Jason Maulucci, 9/30/26" },
        { doc: "Module_01: Why This Business Works", section: "Business = leads + closing + delivery", who: "Jason Maulucci, 9/30/26" }
      ],
      idea: `**Read this first:** Jason's 9/30 modules teach a **different business model** from ZDub's: a B2B cold-email lead-generation agency paid a monthly tech fee plus a per-call fee (his example: $600/month plus $300 per qualified call). ZDub runs Meta ads and content for local service businesses. Don't copy his prices or structure. **Only three ideas transfer**, and they transfer well.

**1. Agree in writing what counts as a lead, before launch.** Jason: don't find out at invoice time that you and the client meant different things. Before launch, agree on the type of customer, what makes them relevant, and how no-shows and wrong fits are handled. His example: a student looking for a job doesn't count; an agency owner who attends and discusses the offer does. Whatever you define, your outreach, agreement, tracker and invoices must all describe the *same* thing.

For ZDub: a PMT "lead" might mean a form fill with a real phone number from someone in the service area; a roofer's might mean a homeowner in the ZIP list who owns the home and wants an inspection. Write it down. It's the number your guarantee, your trial target and your monthly report are built on.

**2. Collect setup money before you buy anything for the client.** Jason: collect the fee before buying the client's setup (domains, tools, software). Keep the money for the system separate from the money you earn.

For ZDub: if a client needs paid tools (a GHL sub-account, a scheduling tool, stock footage), the money arrives before you buy them.

**3. Never finance a client's campaign out of your own pocket.** It matches Jason's 8/25 rule from the mentor calls: never run client ads on your own card. If the ads or tools need money, the client pays first.

The broader frame from Module 01 also holds: every business runs on getting leads, closing them and delivering. ZDub owns the leads; the client owns closing and delivery, which is exactly why your guarantees should measure leads.`,
      keyPoints: [
        "Different model (B2B cold email, per-call fees): only the ideas transfer, not the prices.",
        "Define 'what counts as a lead' in writing before launch.",
        "Outreach, agreement, tracker and invoices must all use the same definition.",
        "Collect setup money before buying the client's tools.",
        "Never finance a client's campaign or run ads on your card."
      ],
      why: "A written lead definition is what makes ZDub's guarantees, trials and reports enforceable. Collecting money first keeps a slow-paying client from becoming your debt.",
      example: {
        title: "PMT lead definition (draft to agree with Chris)",
        body: "\"A lead is a Meta form submission with a working phone number from someone within PMT's service area who selected a course or asked about dates. Duplicates, spam and people outside the area don't count. We review the lead list together at the end of each month.\""
      },
      practice: [
        {
          prompt: "Write lead definitions and a money-first rule.",
          fields: ["PMT lead definition", "Roofer lead definition", "What doesn't count (both)", "ZDub's money-first rule for tools and ad spend"],
          rubric: ["Definition is specific enough to count without arguing", "Excludes duplicates, spam, out-of-area", "Matches what your guarantee or trial target measures", "Money rule says client pays before you buy"]
        }
      ],
      today: { task: "Send Chris your draft PMT lead definition and ask him to confirm or edit it, so November's report counts the same thing you both mean.", output: "Agreed PMT lead definition in writing", minutes: 15, suggested: false },
      check: [
        { q: "Why is this lesson tagged 'Alternate model (Jason)'?", a: "Jason's 9/30 modules teach a B2B cold-email agency with tech + per-call fees; only the ideas (lead definition, money first, no financing) transfer to ZDub." },
        { q: "When should you agree on what counts as a lead?", a: "In writing, before launch, so outreach, agreement, tracker and invoices all describe the same thing." },
        { q: "What's Jason's rule about setup costs?", a: "Collect the fee before buying the client's setup; never finance their campaign out of your own pocket." }
      ]
    }
  ]
});
