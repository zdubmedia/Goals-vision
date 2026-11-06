HUB.tab({
  id: "persuasion",
  title: "Persuasion & Buyer Psychology",
  icon: "brain",
  tagline: "Why people say yes, and how to earn that yes honestly, in an ad or on a call.",
  intro: "This tab is the psychology under everything else you do. You'll start with the gap every buyer is trying to cross, then learn Cialdini's seven principles (they work in a Meta ad and on a sales call), how the buying brain decides, how to cast the customer as the hero with StoryBrand, and how to design word of mouth instead of hoping for it. By the end you can audit any ad, landing page or pitch and say exactly why it will or won't move people, and fix it without faking anything.",
  parts: [
    { id: "gap", title: "Part 1 · Why anyone buys anything" },
    { id: "influence", title: "Part 2 · Influence: the seven principles" },
    { id: "brain", title: "Part 3 · The buying brain" },
    { id: "story", title: "Part 4 · Story, identity & devoted fans" },
    { id: "wom", title: "Part 5 · Word of mouth & why things catch on" }
  ],
  trackers: [
    { id: "audit", title: "Principles audit log", goal: "Audit every ad and pitch before it goes live", fields: ["Ad / page / pitch (client)", "Principles used (R, C, SP, A, L, S, U)", "Anything dishonest? Fix"] },
    { id: "storybank", title: "Story bank", goal: "3 real incidents a week from PMT or a client", fields: ["The incident (time, person, moment)", "The point (why it matters to the reader)"] }
  ],
  tools: [],
  lessons: [
    {
      id: "per-01",
      part: "gap",
      title: "People buy the gap, not your service",
      minutes: 8,
      tags: ["Course"],
      source: [
        { doc: "Lesson 2.2 — How To Make Someone Buy Something", section: "Core learning; Why anyone buys anything; First principle (the gap diagram)", who: "Course lesson (citing Theodore Levitt, Harvard Business School)" }
      ],
      alsoIn: ["Lesson 2.1 — Why Sell To Cold Traffic (loss aversion)"],
      idea: "**People pay for the change a service creates, not for the service.** Theodore Levitt used to tell his Harvard Business School students that nobody wants a quarter-inch drill. They want a quarter-inch hole. Your prospects are the same. A med spa owner doesn't want “Meta ads management.” She wants her Tuesday afternoons booked.\n\n**The first principle: every purchase closes a gap** between where someone is now and where they want to be.\n\n- **Motivation is the size of that gap as the buyer feels it,** not as you see it. You can look at a roofer's dead Facebook page and think he's desperate. If he doesn't feel it, there's no sale.\n- **The service is just the bridge.** People pay to cross the gap. If they can't feel the gap, your offer is a bridge to nowhere.\n- The “now” side is felt as **pain**. The “want” side is felt as **desire**. How badly they want to cross is the whole game.\n\nThe course draws the gap for an agency prospect:\n\n- Now: calendar half empty → Want: booked out weeks ahead\n- Now: leads come in random waves → Want: new leads every single day\n- Now: no idea which marketing works → Want: knows what every $1 returns\n\n**There are only two ways to make someone want to cross:** show them how good the other side is (desire), or show them what the side they're on is costing them (pain). The next lesson covers which one to lead with.\n\nThis works on two levels for ZDub. When you write PMT's ads, the gap is the rider's (nervous, no license → riding confidently this summer). When you pitch PMT or a roofer, the gap is the owner's (empty seats or idle crews → a full schedule). Same principle, different person crossing.",
      keyPoints: [
        "People pay for the change, not the tool (the drill vs. the hole)",
        "Every purchase closes a gap between where they are and where they want to be",
        "Motivation = the gap as the buyer feels it, not as you see it",
        "No felt gap means your offer is a bridge to nowhere",
        "Two levers: desire (how good the other side is) and pain (what staying costs)"
      ],
      why: "Every ad, landing page and sales call you write is an attempt to make a gap felt. Describe the bridge (your service) instead of the gap, and nobody moves.",
      example: {
        title: "PMT: selling the bridge vs. selling the crossing",
        before: "“Beginner motorcycle safety course. Certified instructors. Motorcycles provided.”",
        after: "“Still practicing on your buddy's bike in an empty parking lot and hoping you don't drop it? One weekend from now you could be riding with real skills, real coaching and the nerves gone.”",
        body: "The before lists the bridge. The after names where the rider is now (unsure, winging it) and where they want to be (confident), so the course becomes the obvious way across."
      },
      practice: [
        {
          prompt: "Draw the gap for three buyers. For each, write the “now” side and the “want” side in the buyer's own words (not yours).",
          fields: ["PMT student: now → want", "Sacramento homeowner (roofer's customer): now → want", "Med spa owner (as ZDub's prospect): now → want"],
          rubric: ["Each side is something the buyer would actually say out loud", "The “now” side is concrete (a moment, a number, a feeling), not “needs marketing”", "The “want” side is an outcome, not the service", "You can picture a real person in each one"],
          model: "PMT: “I've wanted to ride for years but I'm scared I'll look like an idiot or drop the bike” → “Riding to work this summer with my M1 and no white knuckles.”\n\nRoofer: “There's a brown stain on the ceiling and the rains are coming” → “Knowing the roof is solid before the first big storm.”\n\nMed spa owner: “Tuesdays and Wednesdays are dead and I don't know which promo actually worked” → “Booked two weeks out, and I know what every dollar returns.”"
        }
      ],
      today: { task: "Pick one live PMT ad (or the landing page headline). Rewrite its first line so it names the “now” side of the gap in the rider's words, then hints at the “want” side. Save the before and after side by side in PMT's ad doc.", output: "1 rewritten opening line next to the original", minutes: 20, suggested: false },
      check: [
        { q: "What did Theodore Levitt say people actually want when they buy a drill?", a: "A quarter-inch hole, not a quarter-inch drill. People pay for the change, not the tool." },
        { q: "How does Lesson 2.2 define motivation?", a: "The size of the gap between where someone is and where they want to be, as the buyer feels it, not as you see it." },
        { q: "What are the two ways to make someone want to cross the gap?", a: "Show how good the other side is (desire), or show what staying where they are is costing them (pain)." }
      ]
    },
    {
      id: "per-02",
      part: "gap",
      title: "Lead with the problem: pain moves cold traffic first",
      minutes: 10,
      tags: ["Course", "Mentor"],
      date: "2026-11-04",
      source: [
        { doc: "Lesson 2.2 — How To Make Someone Buy Something", section: "Two ways to cross; Why the problem has to come first; Skip the bottom rung; Reactance", who: "Course lesson (citing Jack Brehm, A Theory of Psychological Reactance, 1966; Eugene Schwartz)" },
        { doc: "Mentor Lessons Study Guide: 9 New Calls (Jun–Nov 2026)", section: "What makes a creative convert", who: "Clayton Bell, 8/5/26" },
        { doc: "ZDub Guide 01 — Sales Calls and Closing (V2)", section: "4. The buying trigger", who: "Calum Tresham, 10/6/26" },
        { doc: "Mentor Lessons Study Guide: 9 New Calls (Jun–Nov 2026)", section: "Sales call flow, step 7: Find the pain", who: "Tayt Shelman, 11/4/26" }
      ],
      alsoIn: ["Copywriting tab — the five awareness levels (main lesson)", "Sales tab — finding pain on discovery calls"],
      idea: "On cold traffic, **lead with pain before desire.** Losses hit about twice as hard as equal gains (loss aversion, from Lesson 2.1), so what staying put is costing them does more work than the promise of more.\n\n**Why the problem has to come first:**\n\n- **The doctor.** If a doctor handed you a prescription before asking what hurts, you'd walk out. The same pill handed over after a diagnosis feels like relief. An offer without the diagnosis is a random pill from a stranger.\n- **Reactance.** Psychologist Jack Brehm found that when people feel pushed toward something, they push back to protect their freedom to choose. Lead with your solution and a cold prospect feels sold to. Lead with their problem and *they* are the one deciding it needs fixing.\n- **Cold traffic already knows the problem.** “Cold” describes how well someone knows *you*, not how well they know their problem. A med spa with empty Tuesdays knows Tuesdays are empty and has probably been pitched by a handful of agencies. “We run Meta ads for med spas” is written for someone who already trusts you, so it sounds like every other agency in her inbox. (The full awareness ladder lives in the Copywriting tab.)\n- **Skip the unaware.** Selling someone who doesn't see a problem yet means three sales in one ad: the problem exists, it's worth fixing, and you're the fix. Don't sell umbrellas on a sunny day. Sell to the people already standing in the rain.\n\n**What the mentors add:**\n\n- **Quantify the cost of doing nothing** with a number bigger than your ticket, and **peel the onion**: surface pain doesn't move people, so keep going a layer deeper (Clayton Bell, 8/5/26).\n- On calls, find the pain “including the personal kind”: “If you don't change anything, will you be in the same spot? How does that make you feel?” The pain must make your fee look small (Tayt Shelman, 11/4/26).\n- But **“it isn't always pain. It can be goal-driven”** (Calum Tresham, 10/6/26). If the buyer's trigger is a goal (a second truck, a new location), lead with the cost of *missing* that goal.",
      keyPoints: [
        "Losses hit about 2x as hard as equal gains, so the cost of staying put leads on cold traffic",
        "Diagnose before you prescribe: problem first, offer second",
        "Leading with your solution triggers reactance; leading with their problem lets them decide",
        "Cold means they don't know you, not that they don't know the problem",
        "Quantify the cost of inaction bigger than your price, and peel past the surface pain",
        "Sometimes the trigger is a goal, not a pain: then show the cost of missing it"
      ],
      why: "This is the order of every ZDub ad and every discovery call: name what it's costing them before you mention what you do.",
      example: {
        title: "Roofer ad: prescription first vs. diagnosis first",
        before: "“Sacramento's trusted roofing experts. Free estimates. Call today!”",
        after: "“That brown spot on the ceiling isn't a stain. It's water that's been sitting under your shingles for weeks. One more storm and it's drywall, insulation and maybe framing. Text us a photo and we'll tell you how bad it is.”",
        body: "The after names a problem the homeowner can already see, puts a bigger cost on waiting, and only then offers a small step. Nobody feels pushed, because they decided it needs fixing."
      },
      practice: [
        {
          prompt: "Write a pain-first opening (two sentences max) for each buyer. Then write the cost of doing nothing as a number or consequence bigger than the price.",
          fields: ["PMT (a beginner who keeps putting it off): opening", "PMT: cost of doing nothing", "Sacramento HVAC tune-up: opening", "HVAC: cost of doing nothing", "ZDub pitch to a med spa: opening", "Med spa: cost of doing nothing"],
          rubric: ["Opens with a problem the reader already knows they have (not an unaware reader)", "The service isn't mentioned in the first sentence", "The cost of inaction is concrete and bigger than the ticket", "Goes at least one layer below the surface pain", "Sounds like the buyer talking, not a trade or an agency"],
          model: "HVAC opening: “It's 104 on a Saturday in July and the AC just quit. Every tech in town is booked till Wednesday.” Cost: an emergency replacement and three nights in a hot house, versus a spring tune-up that catches the failing part.\n\nMed spa opening: “Your Tuesday and Wednesday chairs sit empty while rent and payroll stay the same.” Cost: empty slots per week × average ticket × 52 weeks, a number far bigger than an ad budget."
        }
      ],
      today: { task: "Before your next sales call or ad draft, write the prospect's cost of doing nothing as a dollar figure (average job value × jobs missed per month × 12) and the one sentence you'll use to say it. Put it in the call notes or the ad's opening line.", output: "One cost-of-inaction number plus the sentence you'll say", minutes: 20, suggested: false },
      check: [
        { q: "Why does pain usually beat desire on cold traffic?", a: "Loss aversion: losses hit about twice as hard as equal gains, so the cost of staying put does more work than the promise of more." },
        { q: "What is reactance, and how does leading with the problem avoid it?", a: "Brehm's finding that people push back when pushed, to protect their freedom to choose. Leading with their problem lets them decide it needs fixing instead of feeling sold to." },
        { q: "Why skip unaware prospects in a cold ad?", a: "You'd need three sales in one ad: that the problem exists, that it's worth fixing, and that you're the fix. Sell to the people already standing in the rain." }
      ]
    },
    {
      id: "per-03",
      part: "influence",
      title: "Reciprocity: give first, and make it personal",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 4: Influence", section: "Click, whirr: why shortcuts work; 1. Reciprocity (pp. 43–44)", who: "Robert Cialdini, Influence (1984; expanded ed. 2021); Goldstein, Martin & Cialdini, Yes! (2008); Claude Hopkins, Scientific Advertising" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 4", section: "Recall 4.1, 4.2, 4.11 + Answer Key (pp. 33–36, 196–197)", who: "Workbook" }
      ],
      alsoIn: ["Sales tab (giving value before the ask on calls)"],
      idea: "**Why these principles work at all: click, whirr.** Robert Cialdini studied “compliance professionals” (salespeople, fundraisers, advertisers, recruiters), partly by going undercover in their training programs. He opens with a mother turkey that will care for anything that makes a chick's “cheep-cheep” sound. Humans have shortcuts too. We face too many decisions to think each one through, so we lean on rules of thumb: if an expert says so, it's probably right; if everyone's doing it, it's probably fine; if it's scarce, it's probably valuable. Those shortcuts usually serve us well, which is exactly why they're powerful in marketing, and why abusing them does so much damage. *Influence* (1984) named six; the 2021 edition added a seventh. Hormozi rated it 5/5 and its practical sequel *Yes!* “10 out of 5.”\n\nThe seven: **reciprocity, commitment and consistency, social proof, authority, liking, scarcity, unity.** Each works in an ad *and* on a sales call.\n\n**Principle 1: Reciprocity.** We feel obligated to give back to people who gave to us, from free samples to the old airport trick of handing strangers a “gift” flower before asking for a donation.\n\n- **Gifts work best when they're significant, unexpected and personalized.** In *Yes!*, servers who left a mint with the bill earned a little more in tips. Servers who left one mint, walked away, then came back with a second one “just for you” earned noticeably more.\n- **Rejection-then-retreat.** Make a larger request; when it's turned down, retreat to a smaller one. The smaller ask feels like a concession, and people tend to reciprocate concessions. The larger option must be a genuine recommendation, never a fake anchor.\n- **Give to interested people.** Claude Hopkins said the same about samples in 1923.\n\n**Ethical use:** a genuinely useful free guide, a free roof photo inspection, a “first ride confidence” video series, answering DMs without a pitch. **Abuse:** “free” gifts with hidden strings, or freebies so cheap they insult.\n\n**On a sales call:** give something real before you ask (one fix to their Google profile, a quick look at why their last ads flopped). The prospect leaves the call already ahead.",
      keyPoints: [
        "The seven principles are mental shortcuts people use to decide fast",
        "Reciprocity: we feel obligated to give back",
        "Gifts work best when significant, unexpected and personalized (the second mint)",
        "Rejection-then-retreat: big honest ask, then a smaller one that feels like a concession",
        "Give only to interested people, and never attach hidden strings"
      ],
      why: "Free inspections, free guides, a Loom audit before the call: reciprocity is how a small local business or a new agency earns the first yes without discounting.",
      example: {
        title: "Roofer: rejection-then-retreat done honestly",
        body: "A Roseville roofer inspects with a drone and honestly recommends a full replacement. The homeowner hesitates on price. He retreats: “Then let's repair the north slope now, and I'll put you on our annual inspection list so we catch the rest before it fails.” The smaller yes feels like a concession, and the homeowner reciprocates. It only works because the full replacement was a real recommendation (Workbook answer 4.11)."
      },
      practice: [
        {
          prompt: "Design one reciprocity gift for each business that is significant, unexpected and personal. Say when it's given and what the next ask is.",
          fields: ["PMT (to a new booking or a lead)", "Sacramento HVAC company (on a tune-up visit)", "ZDub (to a prospect before the sales call)"],
          rubric: ["Useful on its own, with no hidden strings", "Unexpected: not the thing everyone in the niche gives", "Personalized to one person, home or business", "Given to interested people, before the ask"],
          model: "PMT: after booking, a 60-second personal video from the instructor using the student's first name: “Here's the one thing to practice before Saturday.” Next ask: refer a friend.\n\nHVAC: during a tune-up, the tech swaps the smoke detector battery for free and leaves a handwritten note. Next ask: join the maintenance plan.\n\nZDub: before the call, a 3-minute Loom reviewing the prospect's own Google profile with one fix they can make today. Next ask: the strategy call."
        }
      ],
      today: { task: "Record a 2–3 minute Loom for one real prospect (or for PMT) that gives one specific, useful fix with no pitch at the end. Send it.", output: "1 sent Loom gift", minutes: 30, suggested: false },
      check: [
        { q: "Which list contains all seven of Cialdini's principles? (Workbook 4.1)", a: "Reciprocity, commitment and consistency, social proof, authority, liking, scarcity, unity. The original six plus unity (2021 edition). Urgency and curiosity are useful, but they're not Cialdini's principles." },
        { q: "In the Yes! restaurant study, which approach earned servers the most in tips? (4.2)", a: "One mint, walking away, then returning with a second mint “just for you.” Gifts work best when significant, unexpected and personalized." },
        { q: "Explain rejection-then-retreat and give an honest local example. (4.11)", a: "Make a larger request first; if it's declined, retreat to a smaller one, which feels like a concession people reciprocate. Example: a roofer recommends a full replacement, then offers a repair plus annual inspection. The larger option must be a genuine recommendation, not a fake anchor." }
      ]
    },
    {
      id: "per-04",
      part: "influence",
      title: "Commitment & consistency: design the small first yes",
      minutes: 9,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 4: Influence", section: "2. Commitment and consistency (p. 45)", who: "Robert Cialdini, Influence; Goldstein, Martin & Cialdini, Yes! (labeling)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 4", section: "Recall 4.3; Drill D4.2 Small first yes + Answer Key (pp. 34, 37, 196–198)", who: "Workbook" }
      ],
      idea: "**Once we take a stand, we feel pressure to act consistently with it.** The classic study Cialdini describes: homeowners who first agreed to a tiny request (displaying a small sign supporting safe driving) were far more likely to later agree to a big one (a large, ugly billboard in their yard). The first small yes changed how they saw themselves: “I'm the kind of person who supports this.”\n\n**Commitments are strongest when they are:**\n\n1. **Active** (written or spoken, not just nodded at)\n2. **Public**\n3. **Effortful**\n4. **Freely chosen**\n\n**Ethical use for local businesses:**\n\n- **Start with a small, easy step:** a two-question quiz (“Which class fits you?”), a free estimate, “text us a photo,” a low-cost intro session. “Call for a quote” is a big, scary first step; a photo text is a tiny one.\n- **Let people choose their own date** in the booking tool. Self-selected commitments stick.\n- **Ask a question that invites a yes they actually believe:** “Want to ride this summer without the white-knuckle nerves?”\n- **Labeling** (from *Yes!*): describing someone as having a positive trait (“You're clearly someone who takes safety seriously”) makes them more likely to act in line with it.\n\n**Abuse to avoid:** tricking people into commitments they didn't understand: pre-checked boxes, auto-renewals hidden in fine print.\n\n**On a sales call:** let the prospect say their goal and their numbers in their own words. A spoken goal is an active commitment, and later your offer is simply the consistent next step toward what *they* said they wanted. Don't put words in their mouth; a commitment you manufactured isn't freely chosen.",
      keyPoints: [
        "A small first yes changes self-image, which makes the bigger yes easier (sign → billboard)",
        "Strongest commitments: active, public, effortful, freely chosen",
        "Replace “call for a quote” with a tiny step: quiz, photo text, self-picked date",
        "Labeling a real positive trait makes people act consistently with it",
        "No pre-checked boxes or hidden renewals"
      ],
      why: "Most local ads ask for too much too soon. Shrinking the first step is often the cheapest conversion-rate win in a ZDub funnel.",
      example: {
        title: "Small first yes → bigger next step (Workbook D4.2 answer)",
        body: "- **Training school (PMT):** “Take the 2-question quiz: which class fits you?” → book a class date they choose themselves.\n- **Roofer:** “Text us a photo of the spot that worries you.” → free drone inspection → written quote.\n- **HVAC:** “Check if you qualify for the spring tune-up list.” → tune-up visit → replacement conversation when it's actually needed."
      },
      practice: [
        {
          prompt: "Drill D4.2: for three clients, design a small first step that is easy, active and freely chosen. Write the exact CTA wording and the next, bigger step.",
          fields: ["PMT: CTA wording → next step", "Med spa: CTA wording → next step", "Landscaper or pressure washer: CTA wording → next step"],
          rubric: ["The first step takes under a minute", "It's active (they type, tap, choose or send something)", "They choose it freely; nothing is pre-checked", "The next step is a natural, consistent continuation"],
          model: "Med spa: “Take the 30-second skin quiz to see which facial fits your skin” → book a consult on a date you pick.\n\nPressure washer: “Text us a photo of your driveway for a same-day price” → book the wash → add the house wash."
        }
      ],
      today: { task: "Find one PMT or prospect ad or landing page that ends in “Call now” or “Get a quote.” Rewrite the CTA as a small first yes and write the follow-up step that comes after it.", output: "1 rewritten CTA + the next-step message", minutes: 20, suggested: false },
      check: [
        { q: "Commitments are strongest when they are...? (Workbook 4.3)", a: "Active, public, effortful and freely chosen. They change how people see themselves, and they act consistently with that." },
        { q: "What did the safe-driving sign study show?", a: "Homeowners who agreed to a tiny sign were far more likely to later accept a large, ugly billboard. The small yes changed their self-image." },
        { q: "What is labeling, from Yes!?", a: "Describing a person as having a positive trait (“You're clearly someone who takes safety seriously”), which makes them more likely to act consistently with it." }
      ]
    },
    {
      id: "per-05",
      part: "influence",
      title: "Social proof: similar people, specific numbers, never fake",
      minutes: 9,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 4: Influence", section: "3. Social proof (pp. 45–46)", who: "Robert Cialdini; Goldstein, Cialdini & Griskevicius (hotel towel study) in Yes!; FTC rule on fake reviews (Aug 2024)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 4", section: "Recall 4.4, 4.5, 4.13; Drill D4.3 + Answer Key (pp. 34, 36–37, 196–198)", who: "Workbook" }
      ],
      alsoIn: ["Part 5 of this tab — the review engine"],
      idea: "**When we're uncertain, we look at what people like us are doing.** Social proof is strongest under two conditions: **uncertainty** (a first-time rider, a homeowner who's never replaced a roof) and **similarity** (the others are like me).\n\n**The towel study.** In a hotel experiment described in *Yes!*, a card saying most other guests reused their towels beat the standard environmental appeal. A card saying most guests *who had stayed in this same room* reused their towels did even better. The more similar the group, the stronger the pull.\n\n**The petrified-wood backfire.** At a national park, a sign lamenting that many visitors stole petrified wood seemed to normalize stealing, and theft *increased* compared with a sign that simply asked people not to take wood. **Never advertise that a bad behavior is common.** “Most homeowners ignore their roof until it leaks” can make ignoring it feel normal.\n\n**Ethical use:**\n\n- **Specific, real numbers:** “Over 4,000 Northern California riders trained” (only if true and counted).\n- **Similar people:** “Most of our students have never ridden before,” or reviews from neighbors in the same town.\n- **Visible proof:** review screenshots, video testimonials, UGC, “busy this weekend” signals (only when true).\n\n**Abuse to avoid:** fake reviews, fake follower counts, invented testimonials. In the U.S. the **FTC finalized a rule in 2024 banning fake reviews and testimonials.** Beyond the legal risk, one exposed fake destroys every real proof point you have.\n\n**On a sales call:** the most persuasive proof is a result from a business like theirs, in a market like theirs. While ZDub's case-study list is short, be exact about what you have (PMT's real numbers, with permission) rather than borrowing someone else's results.",
      keyPoints: [
        "Social proof is strongest under uncertainty and from similar people",
        "“Guests in this same room” beat “guests at this hotel”: similarity sharpens proof",
        "Never advertise that a bad behavior is common; it spreads the behavior",
        "Use specific, real, counted numbers and same-town reviews",
        "FTC 2024 rule bans fake reviews/testimonials; one exposed fake kills all your real proof"
      ],
      why: "Local buyers are uncertain and hyper-local. “Neighbors in Elk Grove” beats “thousands of happy customers” in every ZDub niche.",
      example: {
        title: "Generic proof → similar, specific proof (Workbook D4.3 answer)",
        before: "“Thousands of satisfied customers!” / “Everyone loves our classes.” / “Highly rated by homeowners.”",
        after: "“[Real number] homeowners in Roseville and Rocklin have trusted us with their roofs.” / “Most of our students had never ridden before. Here's what [first name] said after her first weekend.” / “[Real rating] stars from [real number] reviews, most of them from neighbors within 15 miles.”",
        body: "Brackets are placeholders: fill them only with real, counted figures from the client."
      },
      practice: [
        {
          prompt: "Drill D4.3: rewrite each generic proof line so it uses similar people and specific numbers (use [real number] placeholders where you don't know the figure).",
          fields: ["“Thousands of satisfied customers!” (pick a trade)", "“Everyone loves our classes.” (PMT)", "“Highly rated by homeowners.” (HVAC)"],
          rubric: ["Names a group the reader belongs to (town, situation, experience level)", "Uses a specific, countable number or placeholder for one", "Nothing that would be false for the real business", "Doesn't normalize a bad behavior"]
        }
      ],
      today: { task: "Pull PMT's (or a prospect's) Google reviews. Pick the 3 written by people most like the target buyer (first-timers, same town). Turn the best one into a proof line or a screenshot-ad caption.", output: "3 picked reviews + 1 proof line ready for an ad", minutes: 25, suggested: false },
      check: [
        { q: "In the hotel towel experiment, which message produced the most towel reuse? (4.4)", a: "“Most guests who stayed in this room reused their towels.” Social proof is strongest when the others are similar to us." },
        { q: "What happened with the national park sign about stolen petrified wood? (4.5)", a: "Theft increased compared with a simple request not to take wood. Advertising that a bad behavior is common normalizes it." },
        { q: "What did the FTC finalize in 2024, and why does it matter beyond the law? (4.13)", a: "A rule banning fake reviews and testimonials. Beyond legal risk, one exposed fake destroys the credibility of every real review and proof point." }
      ]
    },
    {
      id: "per-06",
      part: "influence",
      title: "Authority: admit a weakness, let someone else introduce you",
      minutes: 8,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 4: Influence", section: "4. Authority (pp. 46–47)", who: "Robert Cialdini; Goldstein, Martin & Cialdini, Yes!" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 4", section: "Recall 4.6; Client Lab L4 Answer Key (pp. 35, 196–198)", who: "Workbook" }
      ],
      idea: "**We defer to legitimate experts, and to symbols of expertise:** titles, credentials, uniforms, even confident body language. Cialdini notes that the symbols alone can trigger compliance, which is exactly why the authority has to be real.\n\n*Yes!* adds two clever, honest moves:\n\n**1. Admit a weakness first.** Communicators who mention a drawback before their strongest point are seen as more honest, which makes the strong point more believable. “We're not the cheapest school in town. Here's why our riders finish confident...” The weakness should be real and minor, and it should set up the strength.\n\n**2. Have someone else introduce your expertise.** The authors describe a real-estate office where receptionists began mentioning each agent's experience when transferring calls (“Let me put you through to Sandra, who has 20 years selling homes in this area”), and appointments rose. Bragging about yourself feels like bragging; an introduction feels like information.\n\n**Ethical use for local businesses:**\n\n- Show **real credentials:** certifications, years in business, jobs completed, riders trained.\n- Let instructors and techs **demonstrate** expertise in content (a 30-second tip beats a badge).\n- Have staff, an auto-reply or a booking confirmation **introduce** the expert.\n\n**Abuse:** borrowed or fake credentials.\n\n**On a sales call:** you don't need to oversell yourself. Admit the honest limit (“I'm a newer agency, so I take a few clients and I'm hands-on with every one”), then make the strong point. And let proof or a happy client introduce you whenever you can.",
      keyPoints: [
        "People defer to real experts and to symbols of expertise, so the authority must be real",
        "Admit a small, true weakness before your strongest point; it boosts credibility",
        "An introduction from someone else feels like information; self-praise feels like bragging",
        "Demonstrate expertise in content instead of just claiming it"
      ],
      why: "Local trades and a new agency both struggle to claim expertise without sounding boastful. These two moves fix that cheaply.",
      example: {
        title: "HVAC booking confirmation that introduces the tech",
        before: "“Your appointment is confirmed for Tuesday 9–11am.”",
        after: "“You're booked for Tuesday 9–11am. Your tech is Marco. He's been fixing AC systems around Sacramento for [real number] years and he'll text you a photo when he's on the way.”",
        body: "The business never brags. The confirmation introduces Marco's real experience, and the customer arrives at the visit already trusting him. (Client Lab L4's answer key lists “a receptionist or auto-reply that introduces the expert's experience” as a typical big win.)"
      },
      practice: [
        {
          prompt: "Write an “admit a weakness first” line for three businesses, then one introduction script a receptionist, auto-reply or booking text could use.",
          fields: ["PMT: weakness → strength", "Sacramento roofer: weakness → strength", "ZDub: weakness → strength", "Introduction script (any client)"],
          rubric: ["The weakness is true and minor", "It sets up the strength right after", "The introduction uses a real, specific credential", "Nobody brags about themselves"],
          model: "Roofer: “We're usually not the fastest quote you'll get. That's because we put a drone over every inch first, so the price we give you is the price you pay.”\n\nZDub: “I only work with a handful of local businesses, so I'm not the agency for everyone. The ones I take, I'm in their account every week.”"
        }
      ],
      today: { task: "Write PMT's booking-confirmation text (for GoHighLevel) so it introduces the student's instructor with one real credential. Send it to PMT for approval.", output: "1 confirmation text ready to load in GHL", minutes: 15, suggested: false },
      check: [
        { q: "Which opening uses the Yes! tactic of admitting a weakness first? (4.6)", a: "“We're not the cheapest school in town. Here's why our riders finish confident.” A drawback before the strongest point makes you seem more honest." },
        { q: "Why have someone else introduce your expertise?", a: "Bragging about yourself feels like bragging; an introduction feels like information. In the Yes! real-estate example, receptionists mentioning agents' experience raised appointments." },
        { q: "Why must authority be real?", a: "Symbols of authority alone can trigger compliance, so faking them is manipulation, and it collapses trust when discovered." }
      ]
    },
    {
      id: "per-07",
      part: "influence",
      title: "Liking & unity: be one of them",
      minutes: 9,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 4: Influence", section: "5. Liking; 7. Unity (pp. 47–49)", who: "Robert Cialdini, Influence (2021 ed. adds unity); Goldstein, Martin & Cialdini, Yes!" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 4", section: "Recall 4.10, 4.12 + Answer Key (pp. 36, 197)", who: "Workbook" }
      ],
      alsoIn: ["Foundations tab — familiarity, frequency and repetition"],
      idea: "**Liking: we say yes to people we like.** Cialdini lists five things that make us like someone:\n\n1. **Similarity** (they're like me)\n2. **Compliments**\n3. **Cooperation** toward shared goals\n4. **Familiarity** (repeated contact)\n5. **Association** with things we already like\n\nHis case study is the Tupperware party, where the seller is your friend. *Yes!* adds small findings: servers who repeated customers' orders back to them word for word earned higher tips. A little mirroring signals “I'm like you, and I'm listening.”\n\n**Ethical use:** put real faces in content (the owner, the instructor, the crew lead), show local identity, talk the way the customer talks, and show up consistently so you become familiar. **Abuse:** fake friendliness.\n\n**Unity: we say yes to people we consider “one of us.”** Unity is about **shared identity**, not just similarity: family, hometown, team, tribe, a shared mission. It's the strongest form of “we.”\n\nCialdini also notes a neat move: **ask for advice, not opinions.** Asking “What would you want to see in...?” draws people toward you as partners. Asking for their opinion invites them to judge from the outside.\n\n**Ethical use:** local pride (“Sacramento riders,” “built for foothill homes”), insider community (rider groups, customer events) and co-creation (polls, “help us pick the next class location”). **Abuse:** manufactured “tribes.”\n\n**On a sales call:** mirror their exact words when you summarize (“So you said the slow months are killing you...”), find the genuine common ground (local, small business owner, same hustle), and ask for advice: “If you were in my shoes, what would you want an agency to report to you every week?” It turns a prospect into a collaborator.",
      keyPoints: [
        "Five drivers of liking: similarity, compliments, cooperation, familiarity, association",
        "Mirroring their exact words signals “I'm like you and I'm listening”",
        "Unity = shared identity (“one of us”), the strongest form of “we”",
        "Ask for advice, not opinions: advice makes partners, opinions make judges",
        "Real faces, local voice and co-creation; never fake friendliness or fake tribes"
      ],
      why: "Local businesses win on being local. Faces, hometown pride and community are advantages the national chains can't copy.",
      example: {
        title: "PMT: from generic to “one of us”",
        before: "“Motorcycle classes available. Register online.”",
        after: "“Sacramento riders, help us pick: should our next weekend class be in [location A] or [location B]? Vote in Stories. Most of the riders who'll be in it have never sat on a bike either.”",
        body: "It uses unity (Sacramento riders), co-creation (asking advice on a real decision), and similarity (first-timers like you). Only run the poll if PMT really is choosing."
      },
      practice: [
        {
          prompt: "Write one unity line and one “ask for advice” question for each business. Then rewrite an opinion question as an advice question.",
          fields: ["PMT: unity line + advice question", "Foothill landscaper: unity line + advice question", "ZDub (on a sales call): advice question", "Rewrite “What do you think of our new class?” as an advice question"],
          rubric: ["The identity is real and specific (place, group, mission)", "The advice question invites them in as a partner", "No manufactured tribe or fake friendliness", "Sounds like the customer talks"],
          model: "Rewrite: “What would you want covered in a class built for riders coming back after years off?”"
        }
      ],
      today: { task: "Draft an Instagram Story poll for PMT that asks riders for advice on a real upcoming decision (class time, location, a tip topic). Get PMT's OK and post it.", output: "1 poll ready to post", minutes: 15, suggested: false },
      check: [
        { q: "Why does asking for someone's advice build unity better than asking for their opinion? (4.10)", a: "Advice pulls people in as partners; opinions make them outside judges." },
        { q: "Name the five things that make us like someone, according to Cialdini. (4.12)", a: "Similarity, compliments, cooperation toward shared goals, familiarity (repeated contact), and association with things we already like." },
        { q: "How is unity different from liking or similarity?", a: "Unity is shared identity (family, hometown, team, tribe, mission): being “one of us,” not just similar." }
      ]
    },
    {
      id: "per-08",
      part: "influence",
      title: "Scarcity: real limits only",
      minutes: 8,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 4: Influence", section: "6. Scarcity; Common mistake (pp. 48, 51)", who: "Robert Cialdini; Alex Hormozi, $100M Offers; Roy H. Williams, Making Ads Work" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 4", section: "Recall 4.7; Swipe & Study + Answer Key (pp. 35, 38, 196)", who: "Workbook" }
      ],
      alsoIn: ["Offers tab (deadlines and urgency inside an offer)"],
      idea: "**We value things more when they're rare or becoming rare, and we hate losing things more than we like gaining them.** Cialdini describes a study where identical cookies were rated more desirable when there were only two in the jar than when there were ten, and *even more* desirable when the jar had just gone from ten to two. Becoming scarce is the strongest signal of all.\n\n**Ethical use: real limits only.**\n\n- **Seats in a class:** “This Saturday's class has 3 seats left” (when it truly does).\n- **Open slots on a crew's calendar:** “We have 4 install days left before Thanksgiving.”\n- **A seasonal offer that actually ends:** the spring tune-up list closes when summer starts.\n- **Frame the loss honestly.** Say what they'll miss, plainly.\n\n**Abuse to avoid:** fake countdown timers, “only 2 left!” when there are 200 (or on a digital download), deadlines that reset. Two warnings from the library:\n\n- **Hormozi:** fake scarcity destroys trust.\n- **Roy Williams:** constant urgency trains people to wait for your next “last chance.” A monthly “last chance” sale isn't scarcity, it's a schedule.\n\n**The common mistake:** stacking manufactured urgency, fake scarcity and pushy closes on a relational buyer. Influence tactics **multiply the message you already have.** On a trustworthy offer they speed up a yes; on a weak or dishonest one they speed up distrust and complaints.\n\n**On a sales call:** if ZDub really only takes a limited number of clients, or one business per niche per area, say so. If it isn't true, don't. Prospects who later discover the limit was fake will doubt every number in your reports.",
      keyPoints: [
        "Rare, and especially becoming rare, feels more valuable (cookies 10 → 2)",
        "Use real limits: class seats, crew days, seasonal offers that truly end",
        "Fake timers, fake stock counts and resetting deadlines destroy trust",
        "Constant “last chance” trains buyers to wait (Williams)",
        "Influence tactics multiply the message you have, good or bad"
      ],
      why: "PMT's classes and every trade's calendar have real limits. Honest scarcity is free urgency; fake scarcity is a reputation tax.",
      example: {
        title: "Honest vs. manufactured scarcity",
        before: "A countdown timer on a med spa landing page that resets every time the page loads, plus “Only 2 spots left!” every day of the month.",
        after: "“We open 12 laser appointments per week. This week, 3 are left: Tuesday 10am, Thursday 2pm, Saturday 9am.”",
        body: "The after is specific, checkable and true, so it creates urgency and trust at the same time."
      },
      practice: [
        {
          prompt: "Swipe & Study: save three ads that use scarcity. Label each honest or manufactured and say why. Then write one honest scarcity line for PMT.",
          fields: ["Ad 1: honest or manufactured? Why", "Ad 2: honest or manufactured? Why", "Ad 3: honest or manufactured? Why", "PMT honest scarcity line"],
          rubric: ["You can name what makes each limit real or fake", "Your PMT line uses a real, checkable limit", "It frames the loss plainly, without hype", "It would still be true if a customer checked"]
        }
      ],
      today: { task: "Check PMT's real class calendar. For the next class that's actually filling, write a seat-count line for an ad or Story, and write the rule for when ZDub is allowed to use it (e.g., only when seats ≤ 4 and verified that morning).", output: "1 seat-count line + the honesty rule", minutes: 15, suggested: false },
      check: [
        { q: "Which use of scarcity is ethical? (4.7)", a: "“This Saturday's class has 3 seats left,” when it truly does. Fake timers, fake stock counts and recurring “last chances” destroy trust and train people to wait." },
        { q: "In Cialdini's cookie study, when were the cookies rated most desirable?", a: "When the jar had just gone from ten cookies to two: becoming scarce beats simply being scarce." },
        { q: "Why does stacking fake urgency on a weak offer backfire?", a: "Influence tactics multiply the message you already have; on a weak or dishonest offer they speed up distrust and complaints." }
      ]
    },
    {
      id: "per-09",
      part: "influence",
      title: "Small changes, big yeses: seven findings from Yes!",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 4: Influence", section: "More small yeses from Yes! (pp. 49–50)", who: "Noah Goldstein, Steve Martin & Robert Cialdini, Yes! 50 Scientifically Proven Ways to Be Persuasive (2008)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 4", section: "Recall 4.8; Drills D4.4, D4.5 + Answer Key (pp. 35, 37–38, 197–198)", who: "Workbook" }
      ],
      alsoIn: ["Part 3 of this tab — Whitman's four-step fear formula", "Offers tab (packaging an offer)"],
      idea: "*Yes!* turns Cialdini's principles into short, practical findings. Seven that matter most for ads and sales:\n\n1. **“If operators are busy, please call again.”** An infomercial line implying lots of people were calling reportedly beat “operators are standing by.” It's social proof hidden inside a call to action. Local version: “Saturday slots go first, so book early” (if true).\n2. **Add approval, not just comparison.** Households told they used less energy than their neighbors sometimes *increased* usage toward the average. Adding a simple approval signal (a smiley face) kept the good behavior. Praise people for being above the norm.\n3. **Too many choices paralyze.** Big assortments attract interest but reduce purchases. **Offer two or three clear options, not twelve.**\n4. **A new “deluxe” option can sell the standard one.** A premium version makes the original look reasonable. It must be a real offer someone could buy.\n5. **Fear needs a plan.** Fear-based messages only work when paired with a **clear, specific, doable action.** Fear without a plan makes people tune out.\n6. **Personal touches raise response.** A handwritten sticky note on a request made people noticeably more likely to complete it.\n7. **Easy to say, easy to believe.** Names and statements that are easy to process are trusted more; rhyme can even make a statement seem truer.\n\n**On a sales call:** present two or three packages, not a menu; put the premium one first so the middle feels reasonable; and if you raise a scary number (what slow months cost them), give the specific next step in the same breath.",
      keyPoints: [
        "Hide social proof in the CTA (“if operators are busy...”), only when true",
        "Praise above-the-norm behavior so people don't drift back to average",
        "Two or three options beat twelve; a real deluxe option sells the standard",
        "Fear only works with a clear, specific, doable action attached",
        "Handwritten, personal touches and easy-to-say lines raise response"
      ],
      why: "Most local service menus are a wall of options and most fear ads have no next step. These are fast, honest fixes ZDub can make for any client.",
      example: {
        title: "Fear with a plan: electrician (Workbook D4.4 answer)",
        body: "“A breaker that keeps tripping is your panel asking for help. It can mean an overloaded circuit, and that's a fire risk. Here's what to do today: unplug the space heater, then text us a photo of your panel. A licensed electrician will tell you within 2 hours whether it's urgent.”\n\nThe fear is real and the action is easy and immediate, so people act instead of looking away."
      },
      practice: [
        {
          prompt: "Drill D4.5: take a client with a long service menu and redesign it into two or three clear packages, including a premium “deluxe” that makes the standard look reasonable.",
          fields: ["Client", "Option 1 (premium): name, who it's for, price", "Option 2 (standard): name, who it's for, price", "Option 3 (entry, optional): name, who it's for, price"],
          rubric: ["No more than three options", "Each has a clear name and a one-line “who it's for”", "Most buyers should land on the middle", "The deluxe is a real offer, not a fake anchor"]
        },
        {
          prompt: "Drill D4.4: write two short ads (under 60 words each) that raise a real fear and immediately give a specific, doable action. One for an electrician (or HVAC), one for PMT.",
          fields: ["Electrician / HVAC ad", "PMT ad"],
          rubric: ["The fear is real, not exaggerated", "The action is specific and doable today", "The action is small (a text, a photo, a tap)", "Under 60 words"]
        }
      ],
      today: { task: "Take one prospect's (or PMT's) service list and turn it into 2–3 named options with a one-line “who it's for.” Use it in your next pitch or Loom.", output: "A 3-option menu for one business", minutes: 30, suggested: false },
      check: [
        { q: "According to Yes!, a fear-based message works only when...? (4.8)", a: "It's paired with a clear, specific, doable action. Fear without a plan makes people tune out." },
        { q: "Why add a premium “deluxe” option?", a: "It makes the standard option look reasonable by comparison. It must be a real offer someone could buy." },
        { q: "Why did “If operators are busy, please call again” outperform “Operators are standing by”?", a: "It implied lots of other people were calling: social proof hidden inside the call to action." }
      ]
    },
    {
      id: "per-10",
      part: "influence",
      title: "Pre-suasion and the principles audit",
      minutes: 10,
      tags: ["Book", "Mentor"],
      date: "2026-10-07",
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 4: Influence", section: "A summary table; ZDub application: a ‘principles audit’ for any ad; Pre-suasion; Common mistake (pp. 49–51)", who: "Robert Cialdini, Pre-Suasion (2016) and Influence" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 4", section: "Recall 4.9; Drill D4.1; Client Lab L4 + Answer Key (pp. 36–38, 197–198)", who: "Workbook" },
        { doc: "ZDub Guide 01 — Sales Calls and Closing (V2)", section: "5. Desired outcome, gap and cost of inaction", who: "Noah Wyman, 10/7/26" }
      ],
      alsoIn: ["Copywriting tab — hooks and the first 3 seconds (main lesson)"],
      idea: "**Pre-suasion: what people experience right before a message changes how they respond to it.** In *Pre-Suasion* (2016) Cialdini argues that whatever you draw attention to first seems more important. So the first image and first line of an ad aren't just attention-getters; they **frame everything that follows.** If the first frame of a PMT reel shows a nervous new rider becoming confident, the price that follows is judged against “confidence,” not against “another class.” (Hook-writing itself lives in the Copywriting tab.)\n\nThe same is true on a call. Mentor Noah Wyman (10/7/26) says “what would success look like?” is the right question at the wrong time if asked early: ask it **right before the pitch, so you can anchor the price to it.** The prospect's own goal number is the frame your fee gets judged against.\n\n**The principles audit.** Before any ad goes live (or any pitch), check it against all seven:\n\n- **Reciprocity:** does it give something (a tip, a free guide, a useful fact)?\n- **Commitment:** is the next step small?\n- **Social proof:** is there a number, a review, a similar customer?\n- **Authority:** is there a credential or a demonstration?\n- **Liking:** is there a real face or local voice?\n- **Scarcity:** is there an honest reason to act now?\n- **Unity:** does it speak to “us”?\n\nYou won't use all seven in one ad, but **strong ads usually have three or four.** Most weak local ads use zero or one, usually fake urgency.\n\n**Influence is a system, not an ad trick.** Client Lab L4 maps each principle across four places: the **ad, the landing page, the booking process and the follow-up.** Typical big wins: an auto-reply that introduces the expert (authority), same-town reviews on the page (social proof), a small first step instead of “call for a quote” (commitment), and a personal, unexpected gift after purchase that sparks referrals (reciprocity, liking). Every item must be true.",
      keyPoints: [
        "Whatever comes first frames everything after it (Pre-Suasion)",
        "On calls, ask the success question right before the pitch so the price is anchored to it (Noah, 10/7)",
        "Audit every ad for all seven principles; strong ads use three or four",
        "Map the principles across ad, landing page, booking and follow-up",
        "If a principle isn't true for the business, take it out"
      ],
      why: "The audit is a 5-minute habit that catches weak ads before you spend a client's money on them, and shows you exactly what to add.",
      table: {
        head: ["Principle", "Ethical local use", "Misuse that backfires"],
        rows: [
          ["Reciprocity", "Useful free value first; personal, unexpected extras", "Gifts with hidden strings"],
          ["Commitment", "Small first steps; quizzes; self-chosen dates", "Tricks, pre-checked boxes"],
          ["Social proof", "Real numbers, similar customers, reviews", "Fake reviews; “everyone does the bad thing”"],
          ["Authority", "Real credentials, demonstrated expertise", "Borrowed or fake credentials"],
          ["Liking", "Real faces, local voice, familiarity", "Fake friendliness"],
          ["Scarcity", "Genuine limits, honest loss framing", "Fake timers and stock counts"],
          ["Unity", "Local identity, community, co-creation", "Manufactured “tribes”"]
        ]
      },
      example: {
        title: "Audit rewrite: roofer (Workbook D4.1 answer)",
        before: "“Roof replacement special! Limited time only! Call now!” (Uses one principle: fake urgency.)",
        after: "“Text us a photo of the spot that worries you [commitment]. Jake, our licensed inspector, will fly a drone over your roof for free [reciprocity + authority], and you'll see the same video he does. [Real number] neighbors in Folsom already have [social proof].”",
        body: "Four honest principles instead of one fake one. If a principle isn't true for the business, remove it."
      },
      practice: [
        {
          prompt: "Drill D4.1: pull five live ads for local businesses from the Meta Ad Library. Score which of the seven principles each uses and whether each use is honest. Then rewrite the weakest so it honestly uses at least four.",
          fields: ["Ad 1: principles used / honest?", "Ad 2: principles used / honest?", "Ad 3: principles used / honest?", "Ad 4: principles used / honest?", "Ad 5: principles used / honest?", "Rewrite of the weakest ad"],
          rubric: ["Each ad is scored on all seven", "You flagged any dishonest use", "The rewrite uses four principles that are true for that business", "The rewrite's first line frames the offer (pre-suasion)"]
        }
      ],
      today: { task: "Client Lab L4 for PMT: fill a 7 × 4 grid (principles × ad, landing page, booking, follow-up). Circle the three biggest gaps and fix one of them today (for example, add a same-town review to the landing page).", output: "Completed 7 × 4 grid + 1 gap fixed", minutes: 45, suggested: false },
      check: [
        { q: "What does Cialdini's Pre-Suasion say? (4.9)", a: "What people experience right before a message changes how they respond to it. Whatever you draw attention to first seems more important and frames what follows." },
        { q: "How many principles do strong ads usually use?", a: "Three or four. You won't use all seven in one ad; most weak local ads use zero or one, usually fake urgency." },
        { q: "What four places does Client Lab L4 map the principles across?", a: "The ad, the landing page, the booking process and the follow-up. Influence is a system, not a single ad trick." }
      ]
    },
    {
      id: "per-11",
      part: "brain",
      title: "Emotion decides, logic justifies",
      minutes: 8,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 5: The Buying Brain", section: "Emotion decides, logic justifies; Key idea; Common mistake (pp. 53–54, 61)", who: "Roy H. Williams, The Wizard of Ads and Making Ads Work (citing neurologist Donald Calne)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 5", section: "Recall 5.1; Swipe & Study + Answer Key (pp. 40, 44, 199)", who: "Workbook" }
      ],
      idea: "Roy Williams puts this at the front of *The Wizard of Ads*, in his “Seven Laws of the Advertising Universe”: **intellect and emotion are partners who don't speak the same language, and the intellect looks for logic to justify what the emotions have already decided.** Win the heart and the mind follows.\n\nIn *Making Ads Work* he cites neurologist Donald Calne's distinction: **reason leads to conclusions; emotion leads to action.** A homeowner can conclude a new roof is a smart investment and still do nothing for two years. Fear of the next storm, or pride in the house, is what gets the phone picked up.\n\n**That doesn't make logic useless. It gives logic a different job:**\n\n- **Emotion creates the want** and the action.\n- **Logic gives permission,** and gives the buyer something to say when a spouse asks, “Why did you spend that?”\n\nEffective ads supply both. The guide's rule: **lead with the feeling (the desire, the fear, the identity), then supply the proof and the reasons.** Facts without feeling don't move people. Feeling without facts doesn't survive the second thought.\n\n**The two failure modes:**\n\n1. **Logic only:** “Comprehensive training. Certified instructors. Competitive pricing.” It's ignored.\n2. **Emotion only:** a beautiful vibe video that never says what to do or why to believe. It's enjoyed and forgotten.\n\n**On a sales call:** the owner decides on a feeling (relief at not chasing leads, pride in hiring a second crew, never being burned by an agency again). Then they need numbers to defend it to a partner or to themselves: cost per lead, booked jobs, payback. Give them the feeling first, then hand them the “spouse sentence.”",
      keyPoints: [
        "Reason leads to conclusions; emotion leads to action (Calne, via Williams)",
        "The intellect justifies what the emotions already decided",
        "Lead with feeling, then supply proof and reasons",
        "Logic's job: permission, and an answer for “why did you spend that?”",
        "Logic-only ads are ignored; vibe-only ads are enjoyed and forgotten"
      ],
      why: "Most local ads are spec sheets. Adding the feeling (and then the proof) is often the biggest single upgrade ZDub can make.",
      example: {
        title: "PMT: logic only → feeling first, then proof",
        before: "“Comprehensive training. Certified instructors. Competitive pricing.”",
        after: "“You've wanted this for years. This is the weekend you stop watching other people ride. [feeling] Small groups, bikes provided, coached by certified instructors, and [real number] first-time riders trained. [proof + spouse sentence]”",
        body: "The first sentence makes them want it. The second gives them permission and a reason to tell their partner."
      },
      practice: [
        {
          prompt: "For each business, write one feeling line (desire, fear or identity) and then two logic lines that work as the “spouse sentence.”",
          fields: ["PMT: feeling line", "PMT: two logic lines", "Sacramento roofer: feeling line", "Roofer: two logic lines", "Med spa: feeling line", "Med spa: two logic lines"],
          rubric: ["The feeling line comes first and names a real emotion", "The logic lines are specific (numbers, credentials, guarantees)", "The logic would survive a skeptical spouse", "Neither half could stand alone as the whole ad"]
        }
      ],
      today: { task: "Swipe & Study: in the Meta Ad Library, find two Sacramento-area ads that only talk to the logical brain and two that are pure vibe. Write one sentence on what each is missing, then fix the best one with a feeling-first rewrite.", output: "4 labeled swipes + 1 rewrite", minutes: 30, suggested: false },
      check: [
        { q: "What is neurologist Donald Calne's distinction, which Williams quotes? (5.1)", a: "Reason leads to conclusions; emotion leads to action. Ads lead with feeling and then supply logic as permission and a defense." },
        { q: "What two jobs does logic do in an ad?", a: "It gives the buyer permission to act and gives them something to say when someone asks why they spent the money." },
        { q: "What happens to logic-only ads and emotion-only ads?", a: "Logic-only ads are ignored; emotion-only ads are enjoyed and forgotten." }
      ]
    },
    {
      id: "per-12",
      part: "brain",
      title: "Get past the tollbooth and run the movie",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 5: The Buying Brain", section: "Roy Williams' map of the mind: Broca's tollbooth; The movie screen of the mind; Short-term and long-term memory; Example: writing for the movie screen (pp. 54–55)", who: "Roy H. Williams, Magical Worlds of the Wizard of Ads (borrowing Alan Baddeley's working-memory model)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 5", section: "Recall 5.2–5.4; Drill D5.1 + Answer Key (pp. 40–41, 43, 199–200)", who: "Workbook" }
      ],
      alsoIn: ["Foundations tab — Wizard of Ads branding & repetition (main lesson)"],
      idea: "Williams says his brain science is “technically wrong but directionally accurate”: a simple model for writers, not a neuroscience lecture. It's still one of the most useful models for writing ads. A message has three stops.\n\n**1. Broca's tollbooth. The toll is novelty.** In Williams' telling, the part of the brain he names after Broca's area waves away everything it saw coming (clichés, predictable phrases) and lets through the surprising, the new, the delightful. That's why “quality you can trust” is literally invisible: the brain filters it out before it's processed. Same for “family owned and operated,” “no job too big or small,” “your satisfaction is our priority.”\n\n**2. The movie screen of the mind.** Past the tollbooth is working memory. Borrowing psychologist Alan Baddeley's model, Williams describes a **central executive** (decides what to focus on), a **phonological loop** (replays sounds, which is why jingles and rhythm stick) and a **visuospatial sketchpad**: the movie screen where we picture things that haven't happened yet.\n\nThis is the heart of his theory: **people can only do what they have first seen themselves doing in their minds.** The ad's job is to get the prospect to imagine taking the action: riding out of the lot confident, opening the email with the finished quote. **Verbs do this far better than adjectives or nouns,** because verbs put the listener in motion. And the verb shouldn't be the predictable one (avoid “provide,” “offer,” “deliver”).\n\n**3. Memory.** Williams' simplified model: short-term memory is “electrical,” long-term memory is “chemical,” and sleep erases most of what didn't matter that day. Two things move a message into long-term memory: **salience** (how relevant and striking it is) and **repetition** (how often it's encountered). Limited-time offers rarely get stored, because the brain discards information with an expiration date. That's why a campaign of nothing but promotions builds no brand.",
      keyPoints: [
        "Broca's toll is novelty: clichés are filtered out before they're processed",
        "People only do what they've first pictured themselves doing",
        "Verbs run the movie; pick unexpected ones (never “provide, offer, deliver”)",
        "Salience + repetition move a message into long-term memory; sleep erases the rest",
        "Promotions with expiration dates rarely get stored, so promos alone build no brand"
      ],
      why: "Local trade ads are packed with invisible clichés. A single movie-scene sentence with a fresh verb gets through where ten adjectives don't.",
      example: {
        title: "Writing for the movie screen (Guide Ch 5)",
        before: "“Our beginner course provides comprehensive instruction in a safe environment.”",
        after: "“Sunday, 3:40 p.m. You squeeze the clutch, ease off the line, and roll the length of the range, and the instructor gives you a thumbs-up. You're grinning inside your helmet.”",
        body: "The second version runs a movie with the reader starring in it. Count the verbs: squeeze, ease, roll, grinning. The first version has one verb, and it's “provides.”"
      },
      practice: [
        {
          prompt: "Drill D5.1: rewrite each brochure line as a movie scene in two or three sentences, with the reader starring and at least one unexpected verb.",
          fields: ["“We provide comprehensive HVAC maintenance services.”", "“Our beginner course is taught in a safe, supportive environment.”", "“We offer fast, reliable roof inspections.”"],
          rubric: ["The reader is the main character (you/your)", "It has a specific time, place or sensory detail", "At least one fresh, active verb", "No “provide,” “offer” or “deliver”", "The reader can picture the result"],
          model: "HVAC: “It's 104 degrees on a Saturday in July. Your neighbor's AC just quit, and his kids are camped out at the mall. Yours hums along, because in April a tech swapped a $14 capacitor before it could fail.”"
        }
      ],
      today: { task: "Highlight every cliché in PMT's current landing page or top ad (anything Broca would see coming). Replace the worst one with a movie-scene sentence using an unexpected verb.", output: "Cliché list + 1 movie-scene rewrite in PMT's doc", minutes: 25, suggested: false },
      check: [
        { q: "In Williams' model, what is the “toll” at Broca's tollbooth? (5.2)", a: "Novelty. The predictable gets waved away; the surprising gets through. That's why clichés are invisible." },
        { q: "Which kind of word does the most to put a listener “in motion” on the movie screen? (5.3)", a: "Verbs, especially unexpected ones. People can only do what they've first pictured themselves doing; verbs run the movie." },
        { q: "Which two things move a message into long-term memory? (5.4)", a: "Salience (how relevant and striking it is) and repetition (how often it's encountered). Messages with an expiration date rarely get stored." }
      ]
    },
    {
      id: "per-13",
      part: "brain",
      title: "Climb the ladder: from feature to who they become",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 5: The Buying Brain", section: "Whitman's consumer psychology: ego morphing, transfer, bandwagon, means–end chain, specificity (pp. 56–57)", who: "Drew Eric Whitman, Ca$hvertising (2009)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 5", section: "Recall 5.6; Drill D5.2 + Answer Key (pp. 41, 43, 199–200)", who: "Workbook" }
      ],
      alsoIn: ["Copywriting tab — Whitman's Life-Force 8 (Guide Ch 3)"],
      idea: "Drew Eric Whitman spent years in direct response, and *Ca$hvertising* packages academic consumer psychology into tools copywriters can use. Four of them work together to make a message **mean more** and **feel truer**.\n\n**1. The means–end chain (laddering).** Every feature connects to a benefit, and every benefit connects to a personal value. Keep climbing:\n\n> Small classes → more instructor attention → less fear of embarrassment → feel confident and proud.\n\n**The higher you climb, the more emotionally powerful the message.** A headline from the bottom rung (“Small class sizes!”) is accurate but weak. A headline from the top rung speaks to who they want to be.\n\n**2. Ego morphing.** People buy products that help them become the person they want to be. **Show the identity, not just the item.** PMT isn't selling a course; it's selling “I'm a rider now.”\n\n**3. Transfer.** Credibility and feelings transfer from symbols and associations: a respected organization, a credential, a trusted local landmark. A shot of the crew in front of the Tower Bridge borrows a little Sacramento pride.\n\n**4. The bandwagon effect.** “Everyone's doing it” is persuasive (social proof by another name).\n\n**Plus specificity.** Specific claims are more believable than general ones. “4,287 riders trained” (the client's real, counted number) beats “thousands of happy riders.” Odd, exact numbers feel counted; round ones feel made up.\n\nPut them together: climb the ladder for the emotion, show the identity, then anchor it with one specific, real number.",
      keyPoints: [
        "Means–end chain: feature → benefit → deeper benefit → personal value",
        "The higher the rung, the more emotional power; write headlines from the top",
        "Ego morphing: sell who they become, not the item",
        "Transfer: borrow credibility from real credentials, organizations, local landmarks",
        "Specific, counted numbers beat vague claims"
      ],
      why: "Clients describe their business in features. Laddering is the fastest way to turn their feature list into copy people feel.",
      example: {
        title: "Climbing the ladder (Workbook D5.2 answer)",
        body: "Flat-rate written quote → no surprise bill → you can say yes without fear of being taken → you feel like a smart, responsible homeowner.\n\nHeadline from the top rung: “The only surprise will be how easy it was.”\n\nA headline from the bottom rung (“Flat-rate quotes!”) is accurate but weak."
      },
      practice: [
        {
          prompt: "Drill D5.2: for three features of one client's service, build a means–end chain with at least four rungs (feature → benefit → deeper benefit → personal value). Then write a headline from the top rung.",
          fields: ["Client", "Feature 1 ladder", "Feature 2 ladder", "Feature 3 ladder", "Headline from the top rung"],
          rubric: ["Each ladder has at least four rungs", "The top rung is a personal value or identity, not another feature", "The headline speaks from the top rung", "Any number used is real and specific"],
          model: "PMT: bikes provided → you don't have to buy a bike before you know you love riding → no $5,000 gamble → you get to find out who you are on two wheels, risk-free. Headline: “Find out if you're a rider before you buy the bike.”"
        }
      ],
      today: { task: "Ask PMT for one real, counted number (riders trained, years running, classes held). Write one proof line with it and one top-of-ladder headline it supports.", output: "1 specific proof line + 1 headline", minutes: 20, suggested: false },
      check: [
        { q: "“Small classes → more instructor attention → less fear of embarrassment → feel confident and proud” is an example of what? (5.6)", a: "The means–end chain (laddering): each feature links to a benefit, each benefit to a personal value." },
        { q: "What is ego morphing?", a: "Whitman's idea that people buy products that help them become the person they want to be, so you show the identity, not just the item." },
        { q: "Why does “4,287 riders trained” beat “thousands of happy riders”?", a: "Specific claims are more believable than general ones (and it must be the client's real, counted number)." }
      ]
    },
    {
      id: "per-14",
      part: "brain",
      title: "Big-ticket buyers: the fear formula, inoculation, and arguing deep",
      minutes: 11,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 5: The Buying Brain", section: "Whitman's consumer psychology: the fear formula, two routes to persuasion, inoculation (pp. 56–57)", who: "Drew Eric Whitman, Ca$hvertising (drawing on the elaboration likelihood model)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 5", section: "Recall 5.5, 5.7, 5.8; Drills D5.3, D5.4 + Answer Key (pp. 41–44, 199–200)", who: "Workbook" }
      ],
      alsoIn: ["Sales tab — objection handling"],
      idea: "A new roof or a whole-home rewire is a careful decision. Three of Whitman's tools are built for exactly that buyer.\n\n**1. Two routes to persuasion (the elaboration likelihood model).**\n\n- **High involvement** (expensive, important): people process arguments carefully, so give them **strong, detailed arguments**: specifics, process, warranty, proof.\n- **Low involvement** (a $79 detail, a gym trial): people rely on **peripheral cues**: attractiveness, number of reviews, design, a celebrity.\n\n**Match your copy to how much the buyer cares.** A slick 10-second vibe ad won't close a roof; a 600-word breakdown won't sell a car wash.\n\n**2. The fear formula.** Fear appeals work only when they follow four steps:\n\n1. **Make the threat vivid.**\n2. **Give a specific recommendation** for avoiding it.\n3. **Make the recommendation believable** as effective.\n4. **Make the reader believe they can actually do it.**\n\nMiss steps 2–4 and fear just makes people look away (the same finding as *Yes!*'s “fear needs a plan”).\n\n**3. Inoculation.** Like a vaccine, expose the buyer to a weak version of the competitor's argument and refute it, so they're “immune” when they hear it later: “Some schools will tell you a cheaper class covers the same thing. Here's what they don't mention...” Good inoculations are **calm, specific, and give the customer a test they can use on the competitor.**\n\n**On a sales call:** you know the prospect will hear “I'll just boost posts myself” or “another agency is cheaper.” Name it first, calmly, and hand them the question to ask: “Whoever you talk to, ask them what they'll report every week: likes, or booked jobs?”",
      keyPoints: [
        "High involvement → strong, detailed arguments; low involvement → peripheral cues",
        "Fear formula: vivid threat → specific fix → fix is believable → reader can do it",
        "Fear without steps 2–4 makes people look away",
        "Inoculate: raise the competitor's weak argument first and refute it calmly",
        "Give buyers a test they can use on the competitor"
      ],
      why: "ZDub's best-paying niches (roofing, HVAC, solar) are high-involvement. These tools are how their ads and sales calls handle careful, comparison-shopping buyers.",
      example: {
        title: "Fear formula: roofer (Workbook D5.3 answer)",
        body: "“[Threat] A single missing shingle lets water creep under the row above it, and you won't see it until there's a brown stain on the ceiling. [Recommendation] Get your roof checked before the first big storm. [Believable] Our drone shoots every inch in 20 minutes and you see the same video we do. [You can do it] Tap below and pick a time. You don't even need to be home.”"
      },
      practice: [
        {
          prompt: "Drill D5.3: write one ad (under 80 words) using all four steps of the fear formula for a real risk your client solves. Label each step in brackets.",
          fields: ["Client and the real risk", "Ad with [Threat] [Recommendation] [Believable] [You can do it]"],
          rubric: ["The threat is real and vivid, not exaggerated", "The recommendation is specific", "There's a reason to believe it works", "The final step makes the action feel easy", "Under 80 words"]
        },
        {
          prompt: "Drill D5.4: write three inoculation lines for one client, each pre-answering a competitor's argument the customer is likely to hear. Add one for ZDub on a sales call.",
          fields: ["Inoculation 1", "Inoculation 2", "Inoculation 3", "ZDub sales-call inoculation"],
          rubric: ["Calm, not attacking", "Names the argument they'll actually hear", "Gives the buyer a test to use on the competitor"],
          model: "“You'll find cheaper quotes. Ask them one question: is that price in writing, before they start?”"
        }
      ],
      today: { task: "Write the fear-formula ad for a real risk PMT solves (for example, learning from a buddy in a parking lot) and drop it into PMT's ad doc as a test concept.", output: "1 labeled fear-formula ad, under 80 words", minutes: 25, suggested: false },
      check: [
        { q: "Put Whitman's four fear-formula steps in order. (5.5)", a: "Vivid threat → specific fix → the fix is believable → the reader believes they can do it." },
        { q: "For a high-involvement purchase like a whole-home rewire, what should your copy rely on? (5.7)", a: "Strong, detailed arguments. Peripheral cues matter more for low-involvement purchases." },
        { q: "“Some schools will tell you a cheaper class covers the same thing. Here's what they don't mention...” is an example of what? (5.8)", a: "Inoculation: exposing the buyer to a weak version of the competitor's argument and refuting it so they're “immune” later." }
      ]
    },
    {
      id: "per-15",
      part: "brain",
      title: "Show people experiencing it: lessons from Buyology",
      minutes: 9,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 5: The Buying Brain", section: "What brain scans suggested: Buyology; ZDub application (sensory branding) (pp. 57–58)", who: "Martin Lindstrom, Buyology (2008)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 5", section: "Client Lab L5 (cue kit); Swipe & Study (pp. 44, 200)", who: "Workbook" }
      ],
      alsoIn: ["Ad Creative tab", "Foundations tab — branding & repetition"],
      idea: "Martin Lindstrom's *Buyology* reports on a neuromarketing study that scanned roughly **two thousand people's brains** as they viewed brands, ads and products, at a cost of millions of dollars. Treat neuromarketing with healthy caution (it's a young field and some findings are disputed), but several conclusions match what copywriters already learned the hard way:\n\n- **Somatic markers.** We form mental shortcuts that link experiences to feelings. Brands work by attaching their name to positive markers (close to Williams' “branding is attaching something to your name”).\n- **Mirror neurons.** We mentally rehearse what we watch others do. Seeing someone enjoy a product creates a faint feeling of enjoying it ourselves. **Show real people experiencing the result:** the rider's grin, the homeowner's face when the AC kicks on.\n- **Product placement only works when it's part of the story.** Brands woven into a show's action were remembered; brands merely present were not. **Integrate the product into the story; don't slap a logo on the end.**\n- **Warnings can backfire.** Cigarette warnings seemed to light up smokers' craving centers.\n- **Sex doesn't sell as well as people think.** It grabs attention but hurts brand recall: viewers remember the model, not the product.\n- **Senses beat logos.** Sound, smell, distinctive imagery and rituals can carry a brand more powerfully than a logo. The strongest brands share traits with religions: belonging, a clear vision, symbols, rituals and stories.\n\n**ZDub application: sensory branding is cheap for local clients.** A recognizable sound in every reel's opening second, a signature color on every truck and thumbnail, a recurring ritual (the “first ride high-five” filmed at every class). Repeated across hundreds of posts, these become recall cues that need no logo.",
      keyPoints: [
        "Treat neuromarketing with caution, but the big lessons match copywriting experience",
        "Mirror neurons: show real people experiencing the result",
        "Weave the product into the story; a logo slapped on the end isn't remembered",
        "Sex grabs attention but hurts recall",
        "Build a sensory cue kit: one sound, one color, one ritual, repeated every time"
      ],
      why: "A cue kit makes every PMT or client reel recognizable in the first second, without a logo, for the cost of a decision.",
      example: {
        title: "PMT cue kit",
        body: "- **Sound:** the same two-second engine rev and helmet visor click opens every reel.\n- **Color:** one signature color (from PMT's brand) on every thumbnail border and caption bar.\n- **Ritual:** the instructor's “first ride high-five” filmed at the end of every class, with permission.\n\nAfter a few months, a rider scrolling past knows it's PMT before reading a word."
      },
      practice: [
        {
          prompt: "Build a sensory cue kit (one sound, one color, one ritual) for PMT and for one trade client. Keep it simple enough that the team actually repeats it every time.",
          fields: ["PMT: sound", "PMT: color", "PMT: ritual", "Trade client: sound / color / ritual"],
          rubric: ["Each cue is distinctive in the niche", "Each can be repeated in every post without extra effort", "The ritual shows a real person experiencing the result", "Nothing relies on a logo to be recognized"]
        }
      ],
      today: { task: "Swipe & Study: find one reel where the product is woven into the story rather than slapped on at the end, and save it as a model. Then write PMT's cue kit as a 3-line note for every future edit in CapCut/Edits.", output: "1 saved model reel + PMT cue-kit note", minutes: 20, suggested: false },
      check: [
        { q: "What do mirror neurons suggest for content?", a: "We mentally rehearse what we watch others do, so show real people experiencing and enjoying the result." },
        { q: "When does product placement work, according to Lindstrom?", a: "Only when the brand is woven naturally into the story's action. Brands merely present weren't remembered." },
        { q: "What did Lindstrom find about sexual content in ads?", a: "It often grabs attention but hurts brand recall: viewers remember the model, not the product." }
      ]
    },
    {
      id: "per-16",
      part: "brain",
      title: "The Hook Model: how content becomes a habit",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 5: The Buying Brain", section: "Habits: Nir Eyal's Hook Model; Manipulation Matrix; Example: a hook for a local business (pp. 58–60)", who: "Nir Eyal with Ryan Hoover, Hooked (2014); B.J. Fogg behavior model" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 5", section: "Recall 5.9–5.12; Client Lab L5 + Answer Key (pp. 42–44, 200)", who: "Workbook" }
      ],
      alsoIn: ["Organic Social tab (content series)"],
      idea: "Nir Eyal's *Hooked* explains how products become habits. The same loop works for a local business's content and customer experience. Four repeating steps:\n\n1. **Trigger.** **External** triggers (a notification, an ad, a friend's recommendation) start the habit. Over time **internal** triggers take over: feelings like boredom, loneliness, uncertainty or fear that people learn to relieve with your product.\n2. **Action.** The simplest behavior done in anticipation of a reward. Eyal uses **B.J. Fogg's model: a behavior happens when motivation, ability and a trigger meet.** Making the action easier (fewer steps, less time, less thinking) **often beats trying to raise motivation.**\n3. **Variable reward.** Rewards that vary keep people coming back. Three kinds: the **tribe** (social validation), the **hunt** (finding resources or information) and the **self** (mastery and completion).\n4. **Investment.** The user puts something in (time, data, content, reputation, skill), which makes the product more valuable to them and **loads the next trigger.**\n\n**The ethics test: the Manipulation Matrix.** Ask two questions: would you use it yourself, and does it materially improve people's lives?\n\n- Yes and yes: **facilitator** (aim here)\n- Wouldn't use it, but it helps: **peddler**\n- Would use it, but it doesn't help: **entertainer**\n- Neither: **dealer**\n\n**Example from the guide:** a weekly Thursday reel series, “Tip of the Week,” for new riders (external trigger). Action: watch 30 seconds, tap save. Variable reward: each tip is different (hunt), the comments are full of fellow riders (tribe), and viewers feel more skilled (self). Investment: they comment on their progress, join the riders' group, book the next-level class. The internal trigger becomes “I'm nervous about this curve on my commute,” and PMT is where they go.",
      keyPoints: [
        "Trigger → action → variable reward → investment, then repeat",
        "External triggers start it; internal feelings keep it going",
        "Behavior = motivation + ability + trigger (Fogg); make the action easier",
        "Variable rewards: tribe, hunt, self",
        "Pass the Manipulation Matrix: be a facilitator"
      ],
      why: "A recurring series turns a client's page from random posts into a habit people return to, which keeps them warm until they're ready to buy.",
      example: {
        title: "Hook loop for a home-services client (Client Lab L5 answer)",
        body: "A weekly “Fix-It Friday” reel for homeowners (external trigger). Internal trigger: “something's making a weird noise.” Action: a one-tap save. Variable reward: a different useful fix each week plus a lively comment section (hunt and tribe). Investment: comments and photo submissions. It serves the customer, so it lands as a facilitator."
      },
      practice: [
        {
          prompt: "Client Lab L5: design a Hook Model loop for one client's content or customer experience.",
          fields: ["1. External trigger (what brings them the first time)", "2. Internal trigger (the feeling that brings them back)", "3. Action (simplest behavior; what step can you remove?)", "4. Variable reward (tribe, hunt, self: how will it vary?)", "5. Investment (what do they put in?)", "6. Ethics: where does it land on the Manipulation Matrix?"],
          rubric: ["The internal trigger is a real, specific feeling", "The action takes seconds", "The reward actually varies week to week", "The investment makes the next visit more likely", "It's honestly a facilitator"]
        }
      ],
      today: { task: "Plan a PMT content series: name it, pick the posting day, write the first three episode topics and the one-tap CTA (save or send).", output: "Series name + 3 episode topics + CTA", minutes: 25, suggested: false },
      check: [
        { q: "What are the four steps of Eyal's Hook Model, in order? (5.9)", a: "Trigger, action, variable reward, investment. Investment makes the product more valuable and loads the next trigger." },
        { q: "According to B.J. Fogg, a behavior happens when which three things meet? (5.10)", a: "Motivation, ability and a trigger. Raising ability (making it easier) often beats raising motivation." },
        { q: "Explain Eyal's Manipulation Matrix and its four roles. (5.12)", a: "Would you use it yourself, and does it materially improve people's lives? Both yes: facilitator. Wouldn't use it but it helps: peddler. Would use it but it doesn't help: entertainer. Neither: dealer." }
      ]
    },
    {
      id: "per-17",
      part: "brain",
      title: "Write for both brains: the six-step sequence",
      minutes: 9,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 5: The Buying Brain", section: "Putting it together: write for both brains; Common mistake; Key takeaways (pp. 60–61)", who: "Synthesis of Roy H. Williams, Drew Eric Whitman, Eugene Schwartz, Claude Hopkins, Nir Eyal, B.J. Fogg, Martin Lindstrom" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 5", section: "Recall 5.11, 5.13 + Answer Key (pp. 42–43, 200)", who: "Workbook" }
      ],
      idea: "Part 3 boils down to one sequence that combines every author in the chapter. Use it as a script skeleton for ads and as a checklist before anything ships:\n\n1. **Interrupt the predictable** (Williams' Broca): a fresh angle or image in the first second. No clichés.\n2. **Name the feeling** (Whitman, Schwartz): the desire or fear they *already* have. Don't create it; find it.\n3. **Run the movie** (Williams): let them see themselves getting the result, using active, unexpected verbs.\n4. **Prove it** (Whitman, Hopkins): specifics, numbers, demonstrations, reviews.\n5. **Make the action easy** (Eyal, Fogg): one small step, with the friction removed.\n6. **Repeat with consistency** (Williams, Lindstrom): the same recall cues every time, so it moves into long-term memory.\n\n**Steps 1–3 are for the emotional brain. Steps 4–5 are for the logical brain. Step 6 is for memory.** Skip the first half and you're ignored; skip the second half and you're enjoyed and forgotten.\n\n**It maps cleanly onto a sales call too:** open with something they didn't expect from an agency (a specific observation about *their* business), let them name the feeling (the slow months, the burned-by-an-agency story), paint what the next six months look like, show proof, make the next step small (a start date, a short onboarding form), and follow up with the same message and voice every time.",
      keyPoints: [
        "1 Interrupt the predictable",
        "2 Name the feeling they already have",
        "3 Run the movie with active verbs",
        "4 Prove it with specifics",
        "5 Make the action one easy step",
        "6 Repeat the same cues every time"
      ],
      why: "This is the default skeleton for every ZDub video ad script and a quick checklist that catches “all vibe” or “all spec sheet” ads before launch.",
      example: {
        title: "30-second PMT reel, step by step",
        body: "1. **Interrupt:** a close-up of shaking hands on handlebars, text on screen: “This was Dana 9 hours ago.”\n2. **Feeling:** “She'd wanted to ride for 10 years and was sure she'd drop the bike.”\n3. **Movie:** cut to Dana easing through the cone weave, then pulling off her helmet, grinning.\n4. **Proof:** “Small groups. Bikes provided. [Real number] first-time riders trained.”\n5. **Easy action:** “Tap below and pick your weekend.”\n6. **Repeat:** the PMT opening sound and the first-ride high-five, same as every reel.\n\n(Use a real student only with permission.)"
      },
      practice: [
        {
          prompt: "Write a 30-second ad script for a Sacramento roofer or HVAC company, labeling all six steps.",
          fields: ["1. Interrupt the predictable", "2. Name the feeling", "3. Run the movie", "4. Prove it", "5. Make the action easy", "6. Repeat (the cue you'll reuse)"],
          rubric: ["The opening isn't something every competitor says", "The feeling already exists in the buyer", "The movie uses active, unexpected verbs", "The proof is specific and real", "The action is one small step"]
        }
      ],
      today: { task: "Script one 30-second ad for PMT or a current prospect using the six steps, ready to film with the iPhone or Osmo this week.", output: "1 labeled, filmable 30-second script", minutes: 35, suggested: false },
      check: [
        { q: "List the six steps of the “write for both brains” sequence. (5.13)", a: "1) Interrupt the predictable. 2) Name the feeling. 3) Run the movie (active verbs). 4) Prove it. 5) Make the action easy. 6) Repeat with consistency." },
        { q: "Name Eyal's three kinds of variable reward, with one example each for local content. (5.11)", a: "Tribe (comments full of fellow riders cheering each other on), hunt (a new, different tip each week), self (viewers feel more skilled, or finish a “5-day confidence challenge”)." },
        { q: "What happens if you skip steps 1–3 or steps 4–5?", a: "Skip the emotional steps and the ad is ignored; skip the proof and easy action and it's enjoyed and forgotten." }
      ]
    },
    {
      id: "per-18",
      part: "story",
      title: "StoryBrand: the customer is the hero, you're the guide",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 6: Story, Identity & Devoted Followings", section: "StoryBrand: the customer is the hero; The SB7 framework; Example: a BrandScript for a motorcycle training school (pp. 62–65)", who: "Donald Miller, Building a StoryBrand (2017) and Building a StoryBrand 2.0 (2025)" },
        { doc: "The Ultimate Social Media Workbook (11/1/26)", section: "Module 2: Messaging with StoryBrand; Exercise 2A (BrandScript); the grunt test", who: "Social workbook (Donald Miller framework)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 6", section: "Recall 6.1, 6.4, 6.11; Drill D6.1 + Answer Key (pp. 46–49, 201–203)", who: "Workbook" }
      ],
      alsoIn: ["Social Media Workbook Mod 2", "Copywriting tab (uses the BrandScript as the brief)"],
      idea: "Donald Miller spent years studying story structure as a writer before applying it to business. *Building a StoryBrand* (2017; revised as *StoryBrand 2.0* in January 2025) rests on two observations:\n\n1. **Clarity beats cleverness.** People's brains are always trying to conserve energy, so they skip anything confusing. Miller's line: **“if you confuse, you lose.”**\n2. **Every good story follows the same basic plot.** When your marketing follows it, people instantly understand what you offer and why it matters to them.\n\n**The biggest mistake brands make is casting themselves as the hero** (“Founded in 1987, we're passionate about excellence...”). **The customer is the hero. Your brand is the guide:** Yoda to their Luke Skywalker. Heroes are busy with their own problems; they're looking for help, not for another hero.\n\n**The SB7 framework, in one sentence:** *a character* who wants something *has a problem* and *meets a guide* who *gives them a plan* and *calls them to action* that *helps them avoid failure* and *ends in success.* (The next two lessons go deep on the problem and on steps 4–7.)\n\n**The guide needs two things, always both:**\n\n- **Empathy:** “We know how stressful it is when...”\n- **Authority:** testimonials, numbers, credentials, logos, awards.\n\nEmpathy without authority is a nice friend who can't help. Authority without empathy is an arrogant expert.\n\n**The grunt test** (Social Media Workbook, Module 2): within seconds of seeing a post, homepage or bio, could a stranger tell **what you offer, how it makes life better, and what to do next?** If not, you've confused them, and they're gone.\n\n**For ZDub this works twice:** you write a BrandScript for every client (PMT's rider is the hero), and you use one for ZDub itself (the local business owner is the hero; ZDub is the guide, not the star).",
      keyPoints: [
        "If you confuse, you lose: clarity beats cleverness",
        "The customer is the hero; the brand is the guide (Yoda, not Luke)",
        "SB7: character → problem → guide → plan → call to action → avoid failure → success",
        "A guide shows both empathy and authority",
        "Grunt test: offer, how life gets better, what to do next, in seconds"
      ],
      why: "A one-page BrandScript is the brief every ad, landing page, bio and sales pitch for a client can be written from, so the message stays clear and consistent.",
      table: {
        head: ["SB7 step", "What it means", "PMT BrandScript (hypothetical, from the Guide)"],
        rows: [
          ["1. A character wants something", "One clear desire tied to survival or thriving", "An adult who's always wanted to ride; wants to ride confidently and get licensed"],
          ["2. Has a problem", "Villain, external, internal, philosophical", "Fear + “learn from a buddy in a parking lot”; no skills or license; nervous about looking foolish or getting hurt; nobody should learn by trial and error in traffic"],
          ["3. Meets a guide", "Empathy + authority", "“We've trained thousands of first-time riders; most had never sat on a bike” (use PMT's real number)"],
          ["4. Who gives them a plan", "Simple steps + promises", "Pick a date → we provide the bike and gear guidance → ride away confident"],
          ["5. And calls them to action", "Direct + transitional", "“Reserve your seat” / “Free: 7 things to know before your first class”"],
          ["6. That helps them avoid failure", "The stakes", "Dropping a bike in traffic; never riding at all"],
          ["7. And ends in success", "The transformation", "“From nervous beginner to confident rider in one weekend”"]
        ]
      },
      example: {
        title: "Hero or guide? (Workbook D6.1 answer)",
        before: "“Since 1987, Smith Plumbing has been passionate about delivering excellence to our valued customers.”",
        after: "“Water where it shouldn't be is stressful. We'll tell you what's wrong, what it costs, and fix it right the first time. You get your weekend back.”",
        body: "The rewrite opens with the customer's situation and feeling, and the business appears as the helper."
      },
      practice: [
        {
          prompt: "Social Media Workbook Exercise 2A: fill in the BrandScript for PMT (or a client you're pitching).",
          fields: ["1. The hero wants...", "2a. External problem (the practical one)", "2b. Internal problem (how it makes them feel)", "2c. Philosophical problem (why it's just wrong)", "3. Guide: empathy line", "3. Guide: authority proof (reviews, years, results)", "4. The 3-step plan", "5. Direct call to action", "5. Transitional call to action (free guide, quiz, tip)", "6. Failure they avoid", "7. Success they get"],
          rubric: ["The hero's want is one clear desire", "The internal problem is a real feeling in the customer's words", "The guide has both empathy and authority", "The plan is three steps a stranger could follow", "Success describes who the customer becomes"]
        }
      ],
      today: { task: "Drill D6.1: open five Sacramento-area local business homepages or About pages (roofers, HVAC, med spas). Mark each hero or guide. Rewrite the worst one's first two sentences so the customer is the hero, and save it as a cold-outreach opener you could send that owner.", output: "5 hero/guide marks + 1 rewrite ready for outreach", minutes: 30, suggested: false },
      check: [
        { q: "According to Donald Miller, the biggest mistake brands make in their messaging is...? (6.1)", a: "Casting themselves as the hero instead of the customer. The customer is the hero; the brand is the guide (Yoda, not Luke)." },
        { q: "A good guide must show which two qualities? (6.4)", a: "Empathy and authority. Empathy without authority is a nice friend who can't help; authority without empathy is an arrogant expert." },
        { q: "Write the seven parts of SB7 in order. (6.11)", a: "1) A character wants something. 2) Has a problem (villain, external, internal, philosophical). 3) And meets a guide (empathy and authority). 4) Who gives them a plan (process and agreement). 5) And calls them to action (direct and transitional). 6) That helps them avoid failure (stakes). 7) And ends in success (transformation)." }
      ]
    },
    {
      id: "per-19",
      part: "story",
      title: "Every problem has four layers, and people buy the internal one",
      minutes: 9,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 6: Story, Identity & Devoted Followings", section: "The SB7 framework, step 2: They have a problem (pp. 63–64)", who: "Donald Miller, Building a StoryBrand" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 6", section: "Recall 6.2, 6.3; Drill D6.2 + Answer Key (pp. 46–47, 49, 201–203)", who: "Workbook" }
      ],
      alsoIn: ["Part 1 of this tab — peel the onion"],
      idea: "Step 2 of SB7 is where most messages are won or lost. Miller splits the problem into four layers:\n\n1. **The villain:** the root cause, personified. A “hidden fee,” “fear,” “the old way,” “agencies that report likes.” A villain gives the story something to fight. It's a practice or a force, never a specific person.\n2. **The external problem:** the practical, visible issue. The roof leaks. The AC is dead. There's no license.\n3. **The internal problem:** **how the external problem makes them feel.** Anxious, embarrassed, overwhelmed, stupid, stuck.\n4. **The philosophical problem:** why it's just plain wrong. “Homeowners shouldn't have to gamble on contractors.” “Nobody should learn to ride by trial and error in traffic.”\n\n**Miller's key insight: companies sell solutions to external problems, but people buy solutions to internal problems.** The roofer thinks he's selling a waterproof roof. The homeowner is buying the end of lying awake every time it rains, and the end of feeling like the contractor is taking them for a ride.\n\nThis is the same idea as “peel the onion” in Part 1: the surface (external) pain doesn't move people. Go one layer down to the feeling, and one layer further to the principle.\n\n**How to use the layers:**\n\n- **Ads:** open on the external (it's visible and specific), then name the internal in the second line.\n- **Landing pages:** the villain and the philosophical line make great section headers (“No hidden fees. Ever.”).\n- **Sales calls:** prospects tell you the external problem first (“we need more leads”). Ask how it feels and what it's done to them; the internal problem is what makes the fee look small.",
      keyPoints: [
        "Villain = the root cause personified (a practice, never a person)",
        "External = the practical problem; internal = how it feels; philosophical = why it's wrong",
        "Companies sell external solutions; people buy internal ones",
        "Open on the external, then name the internal",
        "On calls, dig past the external problem the prospect states first"
      ],
      why: "Most local ads stop at the external problem, so they all sound alike. The internal and philosophical layers are where a client's message becomes distinct.",
      table: {
        head: ["Layer", "Roofer", "PMT", "ZDub (Workbook D6.2 answer)"],
        rows: [
          ["Villain", "Contractors who quote low and add charges later", "Fear, plus “learn from a buddy in a parking lot”", "Boosted posts and agencies that report likes instead of customers"],
          ["External", "Roof leaks; storm season coming", "No skills, no license", "Not enough booked jobs or students"],
          ["Internal", "Anxious every time it rains; afraid of being taken", "Nervous about looking foolish or getting hurt", "Feels stuck, burned by past agencies, unsure what works"],
          ["Philosophical", "Homeowners shouldn't have to gamble on contractors", "Nobody should learn to ride by trial and error in traffic", "Local business owners deserve marketing they can understand and measure"]
        ]
      },
      example: {
        title: "HVAC ad: external only vs. external + internal",
        before: "“AC not cooling? We repair all makes and models.”",
        after: "“AC not cooling? [external] You shouldn't have to lie awake sweating, wondering if the repair guy is about to upsell you a whole new system. [internal + villain] We tell you what's wrong and what it costs before we touch a thing.”"
      },
      practice: [
        {
          prompt: "Drill D6.2: write the villain, external, internal and philosophical problem for three businesses.",
          fields: ["HVAC company: villain / external / internal / philosophical", "Training school (PMT): villain / external / internal / philosophical", "ZDub: villain / external / internal / philosophical"],
          rubric: ["The villain is a practice or force, not a person", "The internal problem is a feeling in the customer's words", "The philosophical line is a belief someone could agree with out loud", "Each layer is distinct, not a restatement of another"]
        }
      ],
      today: { task: "Write ZDub's own four layers. Turn the villain and philosophical lines into one sentence for your cold-outreach message or Instagram bio draft.", output: "ZDub's four layers + 1 outreach/bio sentence", minutes: 20, suggested: false },
      check: [
        { q: "In SB7, what are the four layers of the problem? (6.2)", a: "Villain, external, internal, philosophical." },
        { q: "Companies sell solutions to ___ problems, but people buy solutions to ___ problems. (6.3)", a: "External; internal. The roof leak is external; the anxiety or overwhelm it causes is internal, and that's what moves people to buy." },
        { q: "What is the villain in SB7?", a: "The root cause of the problem, personified (a hidden fee, fear, the old way). It's a practice or force, not a specific person." }
      ]
    },
    {
      id: "per-20",
      part: "story",
      title: "Give the hero a plan, a challenge, stakes and a win",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 6: Story, Identity & Devoted Followings", section: "The SB7 framework, steps 4–7 (p. 64)", who: "Donald Miller, Building a StoryBrand" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 6", section: "Recall 6.5, 6.12 + Answer Key (pp. 47–48, 202–203)", who: "Workbook" }
      ],
      alsoIn: ["Funnels tab (landing page sections)"],
      idea: "Steps 4–7 of SB7 turn understanding into action.\n\n**Step 4: The guide gives them a plan.** Two kinds:\n\n- **Process plan:** three or four simple steps that **reduce confusion.** “1. Book online. 2. Show up Saturday. 3. Ride away confident.” A confused buyer does nothing; a three-step plan makes the path look short.\n- **Agreement plan:** promises that **reduce fear.** “No hidden fees. We clean up every nail. We never charge more than the quote.” Write these straight from the customer's biggest worries.\n\n**Step 5: The guide calls them to action.** Heroes don't act unless they're challenged. Use two CTAs:\n\n- **Direct CTA:** the main ask (“Book your class,” “Schedule your inspection”), everywhere it's visible: top of the page, middle, bottom, every ad.\n- **Transitional CTA:** for people not ready yet. A free guide, a checklist, a short video, a quiz. It keeps the relationship going until they are ready.\n\n**Step 6: That helps them avoid failure.** Show what's at stake if they don't act. Miller says use a **light touch, like salt in a recipe**: too much and it's fear-mongering, none and the story has no tension.\n\n**Step 7: And ends in success.** Paint the after-picture: the status gained, the problem resolved, the identity achieved. **The deepest stories are about transformation: who the customer becomes.** For PMT that isn't “you passed the class,” it's “you're a rider now.”\n\n**On a sales call, the same order closes the loop:** lay out your 3-step onboarding plan (process), state your promises (agreement), make one clear ask, remind them gently of what staying put costs, and describe what their business looks like six months in.",
      keyPoints: [
        "Process plan (steps) reduces confusion; agreement plan (promises) reduces fear",
        "Direct CTA everywhere it's visible, plus a transitional CTA for the not-ready",
        "Stakes are salt: a light touch, but never zero",
        "Success = transformation: who the customer becomes",
        "Same order works for a sales pitch"
      ],
      why: "Most local landing pages have no plan, one buried CTA and no picture of success. These four steps are an instant page and pitch upgrade.",
      example: {
        title: "Roofer plans (Workbook 6.12 answer)",
        body: "**Process plan:** “1. Text us a photo. 2. We inspect with a drone. 3. You get a written price.”\n\n**Agreement plan:** “No hidden fees. We clean up every nail. We never charge more than the quote.”\n\n**Direct CTA:** “Book your free inspection.” **Transitional CTA:** “Free: 3 signs your roof won't make it through winter.”"
      },
      practice: [
        {
          prompt: "Write steps 4–7 for PMT and for a Sacramento med spa.",
          fields: ["PMT: process plan (3 steps)", "PMT: agreement plan (2–3 promises)", "PMT: direct CTA / transitional CTA", "PMT: stakes (one light line) / success picture", "Med spa: process plan", "Med spa: agreement plan", "Med spa: direct CTA / transitional CTA", "Med spa: stakes / success picture"],
          rubric: ["Each process plan is three or four steps a stranger could follow", "Each promise answers a real fear", "The transitional CTA is useful to someone not ready to buy", "Stakes are a light touch", "Success describes who they become, not just the result"]
        }
      ],
      today: { task: "Add a “How it works” 3-step plan section and a transitional CTA (free checklist or guide) to PMT's landing page draft (or a prospect's mock page in GoHighLevel).", output: "1 plan section + 1 transitional CTA on a real page draft", minutes: 30, suggested: false },
      check: [
        { q: "“Free: 7 things to know before your first class” is an example of what? (6.5)", a: "A transitional call to action: it serves people not ready to buy yet. “Reserve your seat” would be the direct CTA." },
        { q: "What's the difference between a process plan and an agreement plan? Give one of each for a roofer. (6.12)", a: "A process plan lays out simple steps that reduce confusion (“1. Text us a photo. 2. We inspect with a drone. 3. You get a written price.”). An agreement plan makes promises that reduce fear (“No hidden fees. We clean up every nail. We never charge more than the quote.”)." },
        { q: "How much should you lean on the stakes, according to Miller?", a: "A light touch, like salt in a recipe. Without stakes there's no tension; too much is fear-mongering." }
      ]
    },
    {
      id: "per-21",
      part: "story",
      title: "The one-liner: problem, solution, result",
      minutes: 8,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 6: Story, Identity & Devoted Followings", section: "The one-liner; Key idea (p. 65)", who: "Donald Miller & J.J. Peterson, Marketing Made Simple (2020)" },
        { doc: "The Ultimate Social Media Workbook (11/1/26)", section: "Module 2: Exercise 2B (one-liner) and 2C (rewrite the bio; grunt test)", who: "Social workbook" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 6", section: "Recall 6.6; Drill D6.3; Client Lab L6 step 2 + Answer Key (pp. 47, 49–50, 202–203)", who: "Workbook" }
      ],
      alsoIn: ["Offers tab — the one-sentence outcome offer (a different tool: the offer, not the brand message)"],
      idea: "In *Marketing Made Simple*, Miller and J.J. Peterson boil the whole BrandScript down to a **one-liner with three parts:**\n\n1. **The problem** (start here; it opens the story loop)\n2. **Your solution**\n3. **The result**\n\nThe Guide's PMT version: “Most new riders are nervous and don't know where to start. Our beginner class gives you expert coaching on our bikes in a small group, so you ride away confident in one weekend.”\n\n**Rules for a good one-liner:**\n\n- **35 words or fewer.** Read it aloud. If you stumble, cut.\n- **Everyone on the team can say it.** The owner, the instructor, the front desk.\n- **Put it everywhere:** the website, the Instagram bio, the Google Business Profile description, ads, and the answer to “so what do you do?” at a networking event.\n\n**The bio formula** (Social Media Workbook, Exercise 2C): **who you help + outcome + proof + call to action.** Then run the **grunt test:** could a stranger tell, within seconds, what you offer, how it makes life better and what to do next?\n\nThe one-liner also answers “what does ZDub do?” Most agency answers start with the service (“We run Meta ads”), which is the bridge, not the gap. Start with the owner's problem instead.\n\n**Keep it distinct from the offer.** The one-liner is the brand's message; the outcome offer (Offers tab) is the specific deal. They should agree, but they do different jobs.",
      keyPoints: [
        "One-liner = problem → solution → result",
        "Under 35 words; read it aloud and cut where you stumble",
        "Everyone on the team can say it",
        "Put it in the bio, website header, Google profile and ads",
        "Bio formula: who you help + outcome + proof + CTA; then the grunt test"
      ],
      why: "A clear one-liner is the cheapest, highest-leverage copy you'll write for a client, and it fixes ZDub's own “what do you do?” answer.",
      example: {
        title: "Electrician one-liner (Workbook D6.3 answer, 29 words)",
        before: "“We're a full-service licensed electrical contractor serving the greater Sacramento area.”",
        after: "“Most homeowners dread surprise electrical bills. We send a flat written price from a photo before anyone shows up, so you know exactly what you'll pay before work starts.”"
      },
      practice: [
        {
          prompt: "Drill D6.3: write a one-liner (problem → solution → result) for three businesses, 35 words or fewer each. Read each one aloud.",
          fields: ["PMT", "A Sacramento roofer or HVAC company", "ZDub Media"],
          rubric: ["Starts with the customer's problem", "Solution is concrete, not “full-service”", "Result is the outcome they want", "35 words or fewer", "Easy to say out loud"]
        },
        {
          prompt: "Social Media Workbook Exercise 2C: rewrite a bio (PMT's or ZDub's) using who you help + outcome + proof + call to action.",
          fields: ["Current bio", "New bio", "Grunt test: offer / how life gets better / what to do next — all clear? If not, what's missing"],
          rubric: ["Who it's for is obvious", "The outcome is in the bio", "There's a real proof point", "There's one clear next step"]
        }
      ],
      today: { task: "Client Lab L6 step 2: finish ZDub's (or PMT's, with approval) one-liner and put it somewhere live: the Instagram bio, the website header, or the Google Business Profile description.", output: "1 one-liner live on a real profile", minutes: 20, suggested: false },
      check: [
        { q: "What are the three parts of Miller and Peterson's one-liner? (6.6)", a: "Problem, solution, result." },
        { q: "What is the grunt test?", a: "Within seconds of seeing a post, page or bio, could a stranger tell what you offer, how it makes life better, and what to do next?" },
        { q: "What's the bio formula from the Social Media Workbook?", a: "Who you help + outcome + proof + call to action." }
      ]
    },
    {
      id: "per-22",
      part: "story",
      title: "Identity binds: build a devoted following (the healthy kind)",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 6: Story, Identity & Devoted Followings", section: "Identity: people buy who they want to become; Building a devoted following; ZDub application: a tribe for a training school; Ethics check (pp. 66–68)", who: "Seth Godin, This Is Marketing; Roy H. Williams, The Wizard of Ads; Drew Eric Whitman; Martin Lindstrom; Omar Johnson, Hypnotic Influence (2013); Allan Dib, Lean Marketing; Gary Vaynerchuk, Crushing It!; Luke Sullivan; Dan Nelken; Nir Eyal" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 6", section: "Recall 6.7, 6.8, 6.13; Drill D6.5; Client Lab L6 step 3 + Answer Key (pp. 48–50, 202–203)", who: "Workbook" }
      ],
      alsoIn: ["Organic Social tab (community)", "Part 2 of this tab — unity"],
      idea: "**Story gets people to understand you. Identity gets them to stay.** Several authors arrive at the same place:\n\n- **Seth Godin:** “People like us do things like this.” Marketing works when it gives a specific group a way to express who they are. Culture beats persuasion.\n- **Roy Williams:** our **need for definition** (knowing who we are and where we fit) may be the most compelling need in modern society. A winery's business card said **“No Wimpy Wines,”** and it instantly bonded him to the brand because it said who he wanted to be.\n- **Whitman:** ego morphing. **Lindstrom:** the strongest brands borrow traits from religion.\n\nWilliams' **“Nine Secret Words”: the risk of insult is the price of clarity.** A brand that stands for something will repel some people. That's the point; it attracts the right ones more strongly. Insult the old way or the villain, never the customer.\n\n**The seven ingredients of a devoted following** (Omar Johnson's *Hypnotic Influence* thesis of charisma plus a bold, distinctive brand, filled in by the better-documented authors):\n\n1. **A clear identity and belief:** what you stand for and who it's for.\n2. **A villain:** confusing pricing, unsafe shortcuts, faceless service. A common enemy unites a group.\n3. **A face and a voice:** followings form around people, not logos (Vaynerchuk). The owner, the lead instructor, the crew lead.\n4. **Insider language and rituals:** nicknames, recurring segments, a “first ride” celebration.\n5. **A velvet rope** (Allan Dib): insider/outsider dynamics such as members-only perks, alumni groups, early access.\n6. **A role for the follower:** share, vote, show up, bring a friend, earn a status level (Eyal's “investment”).\n7. **Consistency over time:** the same values, voice and cues, for years.\n\n**Ethics check:** “cult-like” should mean devoted, not manipulated. Eyal's test applies: would you use it yourself, and does it genuinely improve your followers' lives? Never exploit loneliness or fear.",
      keyPoints: [
        "Story makes people understand; identity makes them stay",
        "“People like us do things like this” (Godin); the need for definition (Williams)",
        "The risk of insult is the price of clarity: insult the villain, never the customer",
        "Seven ingredients: identity, villain, face, rituals, velvet rope, a role, consistency",
        "Pass the ethics test: real value and real belonging only"
      ],
      why: "A community turns every PMT graduate into proof, content and a referral source, which compounds month after month for free.",
      example: {
        title: "A tribe for a training school (Guide ZDub application)",
        body: "Create an alumni identity (“PMT Grads” or similar), a monthly group ride or skills meetup, a graduation photo ritual posted with permission, and a private group where grads share their first long ride. Every graduate becomes proof, content and a referral source. That's unity (Part 2), social currency (Part 5) and a Hook loop (Part 3) in one program.\n\nIdentity lines in the spirit of “No Wimpy Wines” (Workbook D6.5 answer): “Riders, not daredevils.” “For homeowners who read the fine print.” “We don't do ‘call for pricing.’”"
      },
      practice: [
        {
          prompt: "Drill D6.5: write five bold identity lines for one client, in the spirit of “No Wimpy Wines.” Mark which ones you'd run even if they annoy some people.",
          fields: ["Line 1", "Line 2", "Line 3", "Line 4", "Line 5", "Which would you run, and why?"],
          rubric: ["Short and specific", "Says who the customer is (and isn't)", "Insults the old way or the villain, never the customer", "At least one feels a little risky"]
        },
        {
          prompt: "Client Lab L6 step 3: draft a community plan for PMT using the seven ingredients.",
          fields: ["Identity (name + belief)", "Villain", "The face (who shows up on camera weekly)", "One ritual", "The velvet rope (one insider perk)", "The follower's role", "How you'll stay consistent", "Ethics test: pass?"],
          rubric: ["Small enough that PMT will actually do it", "One ritual they'll repeat every class", "A real insider perk", "Passes the ethics test"]
        }
      ],
      today: { task: "Turn the PMT community plan into a one-page pitch you can send PMT this week (name, ritual, perk, who's on camera, and what it means for referrals).", output: "1-page community pitch for PMT", minutes: 35, suggested: false },
      check: [
        { q: "What are Williams' “Nine Secret Words”? (6.7)", a: "The risk of insult is the price of clarity. A brand that stands for something will repel some people, which is how it attracts the right people more strongly." },
        { q: "What does Dib's “velvet rope” refer to? (6.8)", a: "Insider/outsider dynamics like member perks, alumni groups and early access. Belonging means more when there's a line between in and out." },
        { q: "List the seven ingredients of a devoted following, and the ethics test. (6.13)", a: "A clear identity and belief; a villain; a face and a voice; insider language and rituals; a velvet rope; a role for the follower; consistency over time. Ethics test (Eyal): would you use it yourself, and does it genuinely improve your followers' lives?" }
      ]
    },
    {
      id: "per-23",
      part: "story",
      title: "Story tools for everyday content",
      minutes: 9,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide — Ch 6: Story, Identity & Devoted Followings", section: "Story tools for everyday content; Example: two-step story caption (pp. 68–69)", who: "Allan Dib, Lean Marketing (two-step story); Roy H. Williams (frameline magnetism)" },
        { doc: "ZDub Marketing Mastery Workbook — Ch 6", section: "Recall 6.9, 6.10; Drill D6.4 + Answer Key (pp. 48–49, 202–203)", who: "Workbook" }
      ],
      alsoIn: ["Content Production tab", "Organic Social tab"],
      idea: "You'll write hundreds of small stories for clients. Five simple structures cover almost all of them:\n\n1. **The two-step story** (Allan Dib, *Lean Marketing*): **The Incident** (what happened) → **The Point** (why it matters to the reader). Keep a **story bank** of incidents from the client's business: funny moments, saves, customer wins, mistakes they learned from. (There's a Story bank tracker at the top of this tab.)\n2. **Before → After → Bridge:** here's where you are, here's where you could be, here's the bridge (the product). It's Part 1's gap, in three beats.\n3. **The customer hero story:** a real customer's struggle, the turning point and the result, told from *their* point of view, with the business as guide.\n4. **The origin story:** why the founder started. **Make it about a problem they saw customers suffer, not about their passion.**\n5. **Frameline magnetism** (Williams): **leave something unsaid.** When the audience fills in the gap, they become participants. A reel that ends a second before the expected moment often gets rewatched and commented on.\n\n**What makes the two-step story work:** the incident is concrete (a time, a person, a moment). The point is about **the reader, not the business.** Weak point: “We're proud of our team.” Strong point: “Most leaks aren't where the stain is. Water travels. That's why we look above it first.”\n\nUse real names only with permission.",
      keyPoints: [
        "Two-step story: The Incident → The Point (about the reader)",
        "Keep a story bank of real incidents from each client",
        "Before → After → Bridge is the gap in three beats",
        "Origin stories are about the customer's problem, not the founder's passion",
        "Frameline magnetism: leave something unsaid so viewers fill it in"
      ],
      why: "Clients rarely run out of products; they run out of things to say. A story bank and these five structures solve that for good.",
      example: {
        title: "Two-step story caption for PMT (Guide Ch 6)",
        body: "**Incident:** “Saturday, a student named Mark froze at the first U-turn exercise. Twice. His coach walked over, said one sentence, and Mark nailed the next one.”\n\n**Point:** “Most riders don't need more courage. They need one clear instruction at the right moment. That's what a coach is for.”\n\n(Use real names only with permission.)"
      },
      practice: [
        {
          prompt: "Drill D6.4: from one client's real week (ask them, or use your own work at ZDub), write three two-step stories as captions, each under 80 words.",
          fields: ["Story 1: Incident → Point", "Story 2: Incident → Point", "Story 3: Incident → Point"],
          rubric: ["The incident has a time, a person or a specific moment", "The point is about the reader, not the business", "Under 80 words", "Names used only with permission"]
        }
      ],
      today: { task: "Text PMT (or a client) asking for three things that happened at last weekend's class or jobs. Log them in the Story bank and turn the best one into a two-step caption.", output: "3 story-bank entries + 1 ready caption", minutes: 20, suggested: false },
      check: [
        { q: "What is Dib's two-step story? (6.9)", a: "The Incident → The Point: tell what happened, then why it matters to the reader." },
        { q: "In frameline magnetism, what does Williams suggest? (6.10)", a: "Leave something unsaid so the audience fills in the gap and becomes a participant. A reel that ends a beat early often gets rewatched." },
        { q: "What should an origin story be about?", a: "A problem the founder saw customers suffer, not the founder's passion." }
      ]
    },
    //@@MORE@@
  ]
});
