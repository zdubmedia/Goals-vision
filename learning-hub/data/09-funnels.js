HUB.tab({
  id: "funnels",
  title: "Landing Pages, Funnels & Follow-Up",
  icon: "funnel",
  tagline: "Catch the click, book the call, and follow up until you get a yes or a no.",
  intro: "The ad only sells the click. What happens next decides whether anyone pays: the page they land on, the form they fill, how fast someone calls, and how long you keep following up. Work through this tab and you'll be able to build a closed-room landing page the way Logan builds them, decide when an instant form beats a page, install a speed-to-lead system in GoHighLevel, and run the pre-call and post-call follow-up Cam says is where the money lives. Every lesson ends with something real for ZDub, PMT or a Sacramento prospect.",
  parts: [
    { id: "basics", title: "Part 1 · Where the click lands" },
    { id: "copy", title: "Part 2 · Writing the page" },
    { id: "build", title: "Part 3 · Building the page, section by section" },
    { id: "permission", title: "Part 4 · Permission and the path to purchase" },
    { id: "followup", title: "Part 5 · Speed to lead and follow-up" }
  ],
  trackers: [
    { id: "secretshop", title: "Speed-to-lead secret shops", goal: "Time 3 local businesses (or a client) every week", fields: ["Business", "How I inquired (form, call, DM)", "Time to first response", "What they did well or badly"] },
    { id: "pagetests", title: "Page tests", goal: "Every page you build gets a phone test before it goes live", fields: ["Page", "Tester", "Task given", "Where they got stuck", "Fix made"] },
    { id: "followups", title: "Follow-up log", goal: "No open prospect goes a week without a touch", fields: ["Prospect", "Last touch (channel)", "Next touch and date", "Label: booked / follow-up / DQ"] }
  ],
  lessons: [
    {
      id: "fun-01",
      part: "basics",
      title: "A landing page is a closed room, not a website",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 07 V2 · Landing Pages, Funnels and Booking", section: "1. Landing page vs website; The short version", who: "Logan McKinney, Open Q&A 10/13/26, Client Acquisition 10/9/26, ZDub page build 10/2/26" },
        { doc: "Mastery Guide Ch 20 · Websites & Landing Pages", section: "Landing pages: one page, one job", who: "Book synthesis (Krug, King Kong playbook)" }
      ],
      alsoIn: ["Mastery Guide Ch 20"],
      idea: `A **website** and a **landing page** do different jobs, and mixing them up is the first mistake most new agencies make.

A website can make statements about who you are and let people explore: FAQs, social links, several offers, a nav bar. A landing page is what Logan calls a closed room: "All the doors shut behind you." The only way out is through the funnel (book the call) or closing the tab. No outbound links, usually no nav bar. You funnel them in.

On 10/2 Logan called this "one golden rule that we teach": **no escapes**. "The only way they can get out of here is by booking a discovery session." Reviewing a student's page, he clicked a link, left the funnel, and said "You gave me a door, and I found it." Even a privacy page that broke the navigation "trapped me on the wrong page."

What's allowed:
- In-page navigation that stays inside the funnel (a button that scrolls to booking).
- The privacy policy, the one exception.
- Sources for stats written as **plain text**, never as links.

A member objected that trapping people is disrespectful. Logan's answer: they clicked an ad on purpose, so remove distractions. You can add a chat widget if you want one; he wouldn't.

The Mastery Guide says the same thing in book terms: a landing page is built for a single campaign and a single action, which is why it's usually the highest-converting page a local business has.

One more line from Logan (10/9): "Your page is your outreach." If you're not running ads yet, send the page like a business card.`,
      keyPoints: [
        "Website = explore. Landing page = one action, no exits.",
        "\"No escapes\": every link goes to booking; privacy policy is the only exception.",
        "Cite stats as plain text, never as clickable links.",
        "In-page scroll buttons are fine because they stay in the funnel.",
        "No ads yet? Send the page like a business card."
      ],
      why: "Every door on the page leaks people you paid to bring there. ZDub sells booked calls and jobs, so the page has to point only at booking.",
      example: {
        title: "Zach's own page: the Housecall Pro fix",
        before: "A stat on the page linked out to the Housecall Pro source. Tap it and you've left ZDub's funnel.",
        after: "The same stat as plain text with the source named, no link. The only way off the page is booking a discovery session or closing the tab.",
        body: "This was one of the final fixes Logan made on Zach's page during the 10/2 build. Same proof, zero doors."
      },
      practice: [
        {
          prompt: "Do a \"door audit\" on any live landing page (yours, a prospect's, or a competitor's). Tap everything on a phone and list every way off the page.",
          fields: ["Page audited (name or URL)", "Every door I found (links, nav items, social icons, logos that link out)", "Doors that are allowed (privacy policy, in-page scroll buttons)", "The fix for each bad door"],
          rubric: ["Tested on a phone, not just a laptop", "Listed sources and stats that were clickable links", "Every fix keeps the proof but removes the exit", "Only the privacy policy survives as an outbound page"],
          model: "Page: a Sacramento roofer's ad page. Doors: top nav (Home, About, Blog), Facebook and Instagram icons in the footer, a BBB badge that links to bbb.org, a 'learn more about our warranty' link to the manufacturer. Allowed: privacy policy. Fixes: remove the nav; drop the social icons; keep the BBB badge as an image with no link; rewrite the warranty line as plain text ('50-year manufacturer warranty, per GAF') and add a 'Book my inspection' button under it."
        }
      ],
      today: { task: "Open the ZDub landing page on your phone and tap every single thing. Write down any link that leaves the funnel and fix it as a copy edit (plain text, or point it to booking). Don't redesign anything.", output: "A door list for the ZDub page with each door fixed or confirmed as the privacy policy", minutes: 20, suggested: false },
      check: [
        { q: "What's the one outbound link Logan allows on a landing page?", a: "The privacy policy. Everything else either goes to booking or doesn't exist." },
        { q: "How should you show a stat's source without breaking \"no escapes\"?", a: "Name the source as plain text. Never make it a clickable link." },
        { q: "What did Logan say when a member called the closed room disrespectful?", a: "They clicked an ad on purpose, so minimize distractions. You may add a chat widget if you want; he wouldn't." }
      ]
    },
    {
      id: "fun-02",
      part: "basics",
      title: "Instant form or landing page? Budget and ticket decide",
      minutes: 10,
      tags: ["Mentor", "Disagreement", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "Mentor Guide 07 V2", section: "7. When to send ads to a landing page; Where the mentors disagree", who: "Cam, Launching Ads 10/15/26; Logan McKinney 10/13/26 and 10/2/26" },
        { doc: "Mentor Guide 02 V2 · Meta Ads Setup", section: "Cam's lead ad build (9/17); Logan's $10/day trades recipe (10/13)", who: "Cam 9/17/26; Logan 10/13/26" },
        { doc: "Social Media Marketing Playbook for ZDub Media (10/31/26)", section: "Lead destinations", who: "Research playbook" },
        { doc: "9 New Calls study guide", section: "What makes a creative convert (landing pages)", who: "Clayton Bell, 8/5/26" }
      ],
      alsoIn: ["Meta Ads tab (campaign setup)"],
      idea: `Not every ad needs a landing page. The mentors split on when to build one, and the split mostly comes down to **budget** and **what you're selling**.

**Cam (10/15):** most of the time, stay on-platform with Instant Forms (or engagement). Usually you don't go off-site to a landing page until you're spending about **$100/day**. On 9/17 he said move to lead forms once you're at about $30/day.

**Logan (10/13, 10/2):** for his own agency he spends about $50/day sending ads straight to his landing page, and booked-call leads close about 50% for him. When Zach asked about follower ads vs ads to the page, Logan said run ads straight to the page: "Yeah, that's what I do." A hundred page clicks with one "this is exactly what I need" beats a thousand follows who won't buy. For a $10/day trades client, though, Logan's recipe is an instant lead form with autofill plus speed-to-lead texting.

The newest research playbook (10/31/26) lays out the trade-off, so re-check it in Ads Manager before relying on it:
- **Instant Forms:** cheapest and highest volume, but more junk. "Higher Intent" adds a review screen for fewer, better leads. Add 1 or 2 qualifying questions (ZIP, service, timeline).
- **Website / landing page:** more friction, often higher intent. Needs the Pixel and Conversions API. Best for higher-ticket services.
- **Messenger/DM:** good for salons, gyms, restaurants, but needs a fast human reply.
- **Call ads:** for urgent home services, run during business hours.

Whichever you pick, Clayton's form rule (8/5) applies: ask the small questions first (project, yard size, timeline) and contact info last.`,
      keyPoints: [
        "Cam: instant forms until roughly $100/day of spend.",
        "Logan: ads straight to the page for your own agency (~$50/day, ~50% close on booked calls).",
        "Logan's $10/day trades recipe: instant form with autofill plus speed-to-lead texts.",
        "Landing pages add friction but often bring higher intent; they need Pixel + Conversions API.",
        "On any form: small questions first, contact info last."
      ],
      why: "Building a page a client doesn't need wastes your time and their budget. Knowing which destination fits keeps PMT and small trades clients cheap and fast, and saves the page for where trust and a VSL matter.",
      table: {
        head: ["Question", "Cam", "Logan"],
        rows: [
          ["Client lead ads at small budgets", "Instant forms until about $100/day (10/15); lead forms from about $30/day (9/17)", "Instant form with autofill plus speed-to-lead texting for a $10/day trades client (10/13)"],
          ["Your own agency", "$11/day follower ads first (9/17)", "Ads straight to the landing page, about $50/day (10/13, 10/2)"],
          ["Why", "On-platform is cheaper and simpler while budgets are small", "Booked calls from the page close about 50% for him; one buyer beats a thousand follows"]
        ]
      },
      example: {
        title: "Three destinations, three businesses",
        body: "PMT selling a beginner class: an Instant Form with one qualifying question (which town) fits Cam's guidance at small budgets. A Sacramento remodeler selling $40k kitchens: a landing page with proof and an objection section starts to make sense once spend can support it. ZDub selling its own service: Logan sends ads straight to his page, while Cam starts with follower ads at $11/day. Both are mentor positions; your budget is the tiebreaker."
      },
      practice: [
        {
          prompt: "Pick a destination for each business and defend it with the mentor rule you're using.",
          fields: ["PMT beginner class at about $20-30/day: destination and why", "A Roseville roofer at $50/day: destination and why", "ZDub's own ads at your current budget: destination and why", "The two qualifying questions I'd put on PMT's form"],
          rubric: ["Each choice names whose rule it follows (Cam or Logan)", "Budget is stated for each", "Qualifying questions are small and come before contact info", "Doesn't build a landing page where an instant form would do"],
          model: "PMT: Instant Form (Higher Intent), following Cam's 'stay on-platform until about $100/day.' Roofer: Instant Form plus speed-to-lead texting, Logan's trades recipe, until spend grows. ZDub: at $11/day, Cam's follower ad; at $30+/day, a Traffic campaign to the landing page like Logan. PMT questions: 'Which location works best for you?' and 'When do you want to ride: this month, next month, just looking?'"
        }
      ],
      today: { task: "Write down PMT's current or planned daily budget and pick its lead destination using Cam's and Logan's rules. Draft the 1-2 qualifying questions for the form.", output: "A one-paragraph destination decision plus the form questions, saved in PMT's doc", minutes: 15, suggested: false },
      check: [
        { q: "Roughly what daily spend did Cam say you usually need before sending client lead ads to a landing page?", a: "About $100/day. Below that, stay on Instant Forms or engagement." },
        { q: "What did Logan tell Zach about his own agency's ads?", a: "Run ads straight to the landing page (Traffic objective, website URL = the page). That's what Logan does, at about $50/day." },
        { q: "What's Clayton's order for form questions?", a: "Small questions first (project, size, timeline), contact info last." }
      ]
    },
    {
      id: "fun-03",
      part: "basics",
      title: "Don't make me think: build for people who scan",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "Mastery Guide Ch 20 · Websites & Landing Pages", section: "Don't make me think: Steve Krug (first law, facts of life, billboard design, omit needless words, trunk test, home page, reservoir of goodwill)", who: "Steve Krug, Don't Make Me Think, Revisited" },
        { doc: "Mastery Workbook Ch 20", section: "Recall 20.1-20.4, 20.10; Drill D20.2", who: "Workbook" }
      ],
      idea: `Steve Krug's *Don't Make Me Think* isn't a marketing book, but it changes how you build every page.

**The first law: don't make me think.** A page should be self-evident. Every question mark that pops into a visitor's head ("Is this clickable? Where's the price? What do they actually do?") adds friction and drains patience.

**Krug's three facts of life:**
1. We don't read pages; we **scan** them for words that match what we came for.
2. We don't make optimal choices; we **satisfice**: we click the first reasonable option.
3. We don't figure out how things work; we **muddle through**.

So design for scanners: clear headings, short paragraphs, bullets, bold key phrases, obvious buttons.

**Billboard design.** Use conventions (buttons that look like buttons). Make the most important thing the most prominent. Make clickable things obviously clickable. Cut the noise.

**Omit needless words.** Cut half the words on the page, then cut half of what's left. "Welcome to our website" happy talk goes first.

**The reservoir of goodwill.** Every visitor arrives with some, and every frustration drains it. Drains: hiding prices, phone number or hours, asking for info you don't need, pop-ups, an amateurish look. Refills: making the main thing obvious, showing prices and steps, saving them steps, answering questions before they ask.

For websites, Krug adds the **home page test** (What is this? What can I do here? What do they have? Why here instead of somewhere else?) and the **trunk test**: dropped blindfolded on any page, could you tell what site it is, what page you're on, and how to get around?

> "You are not the user." The owner and the agency know too much. Watch real people use the page on a phone.`,
      keyPoints: [
        "Self-evident beats clever. Every question mark costs you.",
        "People scan, satisfice and muddle through.",
        "Cut half the words, then half again.",
        "Hiding price, phone or hours drains goodwill fast.",
        "You are not the user; watch someone else try it."
      ],
      why: "Local traffic comes from phones and impatient people. A page that makes a PMT student or a homeowner stop and think loses them before the offer lands.",
      example: {
        title: "PMT class page: cut in half twice",
        before: "Welcome to our website! We are passionate about motorcycle safety and have proudly served riders for many years. Our mission is to provide a supportive learning environment where students of all skill levels can build the confidence they need. Please browse our course offerings below.",
        after: "Beginner motorcycle class. Never ridden? Perfect.\n- Bikes and helmets provided\n- Small groups, certified coaches\n- [Pick your date]",
        body: "The facts a buyer needs survived (what it is, who it's for, what's included, how to book). The mission statement and the welcome didn't."
      },
      practice: [
        {
          prompt: "Drill D20.2, Cut it in half twice. Paste one real page section (a client's, a prospect's or yours). Cut half the words, then half again. Keep every fact a buyer needs.",
          fields: ["Original text", "First cut (about half)", "Final cut (about a quarter)", "Facts I made sure to keep (price, steps, proof, contact)"],
          rubric: ["Happy talk and mission statements are gone", "Price, steps, proof and contact survive", "Long paragraphs became a headline, one line and bullets", "Final version is roughly a quarter of the original"]
        }
      ],
      today: { task: "Pick one Sacramento-area prospect's homepage. Run Krug's four home-page questions on it from your phone and write one sentence per question on whether it passes.", output: "A 4-line home-page audit you can use as an outreach opener", minutes: 20, suggested: false },
      check: [
        { q: "What are Krug's three facts of life about how people use the web?", a: "They scan, they satisfice (click the first reasonable option), and they muddle through." },
        { q: "Name two things that drain the reservoir of goodwill.", a: "Any two of: hiding prices, phone number or hours; asking for information you don't need; pop-ups and sizzle; an amateurish look; punishing people for not doing it your way." },
        { q: "What four questions must a home page answer quickly?", a: "What is this? What can I do here? What do they have? Why should I do it here rather than somewhere else?" }
      ]
    },
    {
      id: "fun-04",
      part: "basics",
      title: "Match the scent: the page headline repeats the ad",
      minutes: 10,
      tags: ["Playbook", "Book"],
      source: [
        { doc: "King Kong · Meta Ads Playbook", section: "Part 1: Match the Ad to the Landing Page; The scent test; The workflow", who: "King Kong playbook (Sabri Suby)" },
        { doc: "Mastery Guide Ch 20", section: "Landing pages: one page, one job (rule 1, Match the scent); Example: landing page header for a date-fill ad", who: "Book synthesis" },
        { doc: "Mastery Workbook Ch 20", section: "Recall 20.8; Drill D20.4", who: "Workbook" }
      ],
      idea: `The ad sold the click on a specific promise. The page has to deliver that same promise the moment it loads.

The King Kong playbook puts it bluntly: most advertisers spend 90% of their effort on the ad and 10% on the page, and that's backwards. **The ad headline and the landing page headline have to match, word for word or close to it.** The playbook says the page has to deliver on the promise within 0.4 seconds of arrival, and that breaking the scent trail loses about half the clicks before anyone reads a thing. (Treat those as the playbook's numbers, not a law.)

> "The job of the ad is to sell the click. The job of the landing page is to deliver on the click you just sold."

**The scent test:** open your top three ads, click each one like a prospect would, and read the page headline. Same words? Same promise? Same hook? If not, fix it today.

**The workflow the playbook recommends:** Meta is a split-testing engine you could never afford on your own site. Run many headline variants as ads (it suggests 20 to 40), let Meta find the winner, then put the winning words on the page: headline, subheadline, hero text. The playbook claims a 15-20% conversion lift at the floor.

The Mastery Guide's date-fill example shows what a scent match looks like:
- **Ad:** "Woodland: 4 seats left for Saturday's beginner class."
- **Page headline:** "4 seats left: Beginner Motorcycle Class, Woodland, this Saturday."
- **Subheadline:** "Never ridden? Perfect. Small groups, certified coaches, bikes provided."
- **Button:** "Reserve my seat." **Proof:** a real star rating and review count. **Plan:** "Pick your seat, get your checklist, ride away confident."

Specifics carry the scent: the town, the date, the offer.`,
      keyPoints: [
        "The page headline mirrors the ad's promise, nearly word for word.",
        "Town, date and offer are the scent; keep them identical.",
        "Click your own ads like a prospect: that's the scent test.",
        "Let ad headline tests pick the page headline.",
        "Breaking the scent wastes the money you spent on the click."
      ],
      why: "ZDub pays for every click. A mismatch between a PMT date-fill ad and the page it lands on throws away that spend before the visitor reads a word.",
      example: {
        title: "Roofer: broken scent vs matched scent",
        before: "Ad: \"Free drone roof inspection for Roseville homes this week.\" Page headline: \"Welcome to Summit Roofing, Serving Placer County Since 2004.\"",
        after: "Ad: \"Free drone roof inspection for Roseville homes this week.\" Page headline: \"Your free drone roof inspection, Roseville, this week.\" Subhead: \"See your own roof on video and get a written price before any work.\" Button: \"Book my inspection.\"",
        body: "The second page repeats the exact promise (free, drone, Roseville, this week) so the visitor knows instantly they're in the right place."
      },
      practice: [
        {
          prompt: "Drill D20.4, Scent match. Take three ads (write them now if you need to: PMT, a trade, ZDub). For each, write the matching page hero.",
          fields: ["Ad 1 headline → page headline, subheadline, button, one proof element, 3-step plan", "Ad 2 headline → page headline, subheadline, button, one proof element, 3-step plan", "Ad 3 headline → page headline, subheadline, button, one proof element, 3-step plan"],
          rubric: ["Page headline repeats the ad's key words and specifics", "Button says what they get, not 'Submit'", "Proof is real (no invented ratings)", "Plan is three short steps"],
          model: "Use the Woodland example as the model: the town, the day and the seats left all carry over from the ad to the page headline."
        }
      ],
      today: { task: "Run the scent test on ZDub's page: put your current or planned ad headline next to the page headline. If they don't match, write the matching headline (as a note, don't redesign).", output: "Ad headline and page headline side by side, with a matched version if needed", minutes: 15, suggested: false },
      check: [
        { q: "What does \"match the scent\" mean?", a: "The landing page headline mirrors the ad's promise and delivers it right away." },
        { q: "How does the King Kong playbook suggest choosing the page headline?", a: "Test many headline variants as ads, let Meta find the winner, then put the winning headline on the page." },
        { q: "What specifics carry the scent in the Woodland example?", a: "The town (Woodland), the timing (this Saturday), and the offer (4 seats left in the beginner class)." }
      ]
    },
    {
      id: "fun-05",
      part: "copy",
      title: "Headlines that open a loop, not close it",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 07 V2", section: "2. Headlines: curiosity, not statements", who: "Logan McKinney, 10/9/26 and 10/13/26" }
      ],
      alsoIn: ["Copywriting tab (hooks and the first 3 seconds)"],
      idea: `Logan's rule for the hero line: **create curiosity, don't make a finished statement.** A finished statement lets the reader nod and leave. A curiosity headline opens a loop they want closed, so they keep scrolling. He compared it to a MrBeast cliffhanger.

The rewrites Logan gave on student pages:

- "Clicks don't pay the bills, customers do" → "Find out how we get you more customers, not more clicks" (10/9)
- "Dominate your roofing market" → "How we help you dominate..." (10/9)
- "Get found, get contacted, get hired" → "How we help St. Louis businesses get found, contacted and hired" (10/13)
- A dental page → "How we put X new patients in your open chairs," using a conservative number (10/9)

Notice the pattern: **"How we..."** or **"Find out how..."** plus a specific outcome for a specific reader.

Logan's own examples (10/13): "Congo Barbershop added $20,000 a month in sales. Here's how." leading straight into his VSL. His website headline: "More new clients, and you'll know exactly what they cost you."

Three guardrails:
- **Only claim what you can back up.** "How we'll add $25,000/month to your service business" is good if you can prove it (10/9).
- **Skip the tired claims.** Dentists hear "5x/10x" constantly; it reads as noise (10/9).
- **Generate many, then pick.** Logan uses his Marketing Genius knowledge base (Russell Brunson material) to produce 10 to 20 curiosity headlines and chooses from those (10/9). Any AI will do this if you give it the reader and the outcome.

Order of importance on the whole page, per Logan (10/13): a headline that slams, a golden offer, and nothing that distracts from it.`,
      keyPoints: [
        "Curiosity headline opens a loop; a statement closes it.",
        "Pattern: \"How we [specific outcome] for [specific reader].\"",
        "Use a conservative number you can back up.",
        "Avoid the claims the niche hears every day (5x, 10x).",
        "Write 10-20, then pick."
      ],
      why: "The hero line decides whether a prospect scrolls to your offer. For ZDub's own page and every client page, it's the highest-leverage sentence you'll write.",
      example: {
        title: "ZDub, made curious",
        before: "Facebook and Instagram ads for local businesses.",
        after: "How we help Sacramento contractors fill their slow months with Facebook and Instagram.",
        body: "The 'after' follows Logan's format: 'How we...' + a specific reader + a specific outcome. Only use a slow-month angle once you've confirmed with real owners which months are slow."
      },
      practice: [
        {
          prompt: "Rewrite each finished statement as a curiosity headline in Logan's format. Then write 5 more for ZDub's own page and circle your favorite.",
          fields: ["PMT: \"Get your motorcycle license with PMT.\" → curiosity version", "Roofer: \"Sacramento's trusted roofers.\" → curiosity version", "Med spa: \"Look your best with our treatments.\" → curiosity version", "5 ZDub headlines (one per line)", "My pick and why I can back it up"],
          rubric: ["Each headline opens a loop instead of finishing a thought", "Names a specific reader or place", "Any number is conservative and provable", "No 5x/10x style claims"],
          model: "PMT: 'How first-time riders walk out with the skills for their M1, even if they've never touched a clutch.' Roofer: 'How Sacramento homeowners find out what their roof really needs before paying for anything.' Med spa: 'How Roseville clients get the results they want without the upsell pressure.'"
        }
      ],
      today: { task: "Generate 15 curiosity headlines for ZDub's page with AI (give it your reader: Sacramento service businesses, and your outcome). Edit the best 3 by hand so they sound like you.", output: "3 finished curiosity headlines saved in your ZDub copy doc", minutes: 25, suggested: false },
      check: [
        { q: "What's wrong with a headline like \"Dominate your roofing market\"?", a: "It's a finished statement. Logan wants curiosity: \"How we help you dominate...\" so the reader keeps going." },
        { q: "When is a big-number headline like \"How we'll add $25,000/month\" OK?", a: "Only when you can back it up." },
        { q: "What three things matter most on a landing page, in Logan's order?", a: "A headline that slams, a golden offer, and nothing that distracts from it." }
      ]
    },
    {
      id: "fun-06",
      part: "copy",
      title: "Write it in their words, at a third-grade level",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-16",
      source: [
        { doc: "Mentor Guide 07 V2", section: "3. Copy rules (Logan)", who: "Logan McKinney, 9/30, 10/2, 10/9, 10/13, 10/16/26" }
      ],
      alsoIn: ["Copywriting tab"],
      idea: `AI will write you a landing page in a minute. Logan's copy rules are about making it sound like a real person who knows the reader's business.

**1. Read every word and make it sound like you** (10/9, 10/13). AI gets you most of the way. You finish it.

**2. Remove em dashes.** Logan says they "scream AI," and some business owners hate AI (10/9).

**3. Plain English, third-grade level, no marketing jargon.** Speak the client's language: a card shop talks about people buying cards; real estate talks about clients and leads; contractors talk about **jobs** (10/9, 10/13, 10/16).

**4. Their words, not ours** (9/30). "Organic video" means nothing to a flooring owner. The page said "10 video ideas built around your real jobs."

**5. Talk to one person on a phone.** Use "your" (10/9).

**6. Don't over-promise.** Make sure you can fulfill everything the page says, especially in AI-written offers (10/9). Logan's honest-timing answer on the flooring page: "Organic videos build over months, not days. We won't promise you a number of jobs by a certain date." (9/30)

**7. Format for reading.** Bullets for quick info; paragraphs for the About section. Call the FAQ "Straight answers" (10/13).

**8. In the FAQ, answer "Is this for a business like mine?" with "Yes."** Spell out what the monthly service covers: how many posts, Meta ad creation and management, CRM and lead follow-up (10/9).

**9. Don't fake size.** "We" is fine if it's you plus AI; don't say "my team" if you don't have one (10/9, 10/13).

Lines Logan liked on a student page (10/13): "Honest digital marketing for St. Louis service businesses... no stock images, no long-term lock-ins" and "Referrals are great, but you can't schedule them." Both are plain, specific and sound like a person.

On 10/2 he reviewed a page whose copy was "really good, and that's what's important" but still asked for it to be humanized and branded. Copy first, polish second.`,
      keyPoints: [
        "Read every AI word; make it yours.",
        "No em dashes.",
        "Contractors buy jobs, not 'organic video' or 'lead gen.'",
        "Promise only what you can deliver, with honest timing.",
        "FAQ = \"Straight answers.\" Spell out what the monthly fee covers."
      ],
      why: "Owners in the trades smell agency-speak instantly. Copy in their own words, at their reading speed, is what makes ZDub sound like the one person in town who gets their business.",
      example: {
        title: "HVAC page line, translated",
        before: "We leverage omnichannel lead-gen strategies and organic content to maximize your ROI.",
        after: "We make videos from your real jobs and run Facebook ads that get homeowners calling you. You'll see exactly what each job cost you to get.",
        body: "The 'after' uses the owner's words (jobs, calling, cost), speaks to 'you,' and makes a promise ZDub can actually keep."
      },
      practice: [
        {
          prompt: "Translate each jargon line into the client's language at a third-grade level. Then write the 'Straight answers' reply to \"What does the monthly service cover?\" for ZDub.",
          fields: ["\"Full-funnel performance marketing for home service brands.\" →", "\"We craft scroll-stopping organic content.\" →", "\"Maximize lead velocity with automated nurture.\" →", "ZDub: What does the monthly service cover? (Straight answer)"],
          rubric: ["No jargon or em dashes left", "Uses the client's word for what they sell (jobs, customers, students)", "Talks to one person with 'you/your'", "The monthly-service answer lists concrete deliverables you can really deliver"]
        }
      ],
      today: { task: "Read the ZDub page out loud, start to finish. Mark every em dash, every jargon word, and any 'my team' or promise you can't keep. Fix them as copy edits.", output: "A marked-up copy of the page text with fixes", minutes: 25, suggested: false },
      check: [
        { q: "Why does Logan remove em dashes?", a: "They \"scream AI,\" and some business owners hate AI." },
        { q: "What should a contractor's page talk about instead of 'organic video'?", a: "Their words: jobs. Logan's example: \"10 video ideas built around your real jobs.\"" },
        { q: "When is it fine to say \"we\" on your page?", a: "When it's you plus AI. Don't say \"my team\" if you don't have one." }
      ]
    },
    {
      id: "fun-07",
      part: "copy",
      title: "Research the niche's pain, then pick one specific angle",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 07 V2", section: "3. Copy rules: research the niche's pain (9/30); niche-specific angles (10/9, 10/13)", who: "Logan McKinney, 9/30, 10/9, 10/13/26" }
      ],
      idea: `Generic pain makes you "sound like everybody else," Logan says. The fix is research before writing, then one sharp angle.

**Step 1: research the niche's pain first** (9/30). In his flooring demo, Claude found four real problems: lead sites selling the same lead to 4 or 5 contractors, price shopping, slow seasons with the same overhead, and referrals not being enough.

**Step 2: pick the specific one.** Logan's comparison:
- Generic: "Tired of a referral-based business?"
- Specific: "Tired of HomeAdvisor selling the same lead to four or five contractors?"

The specific one wins because the owner has lived it this month. The flooring page's whole angle became **"stop being one of five bids."**

**Step 3: find the month the niche struggles** (10/9). For a roofer: "a full schedule in storm season doesn't pay for slow months." Logan's barbershop version: "full chairs on Saturday don't pay for slow Tuesdays." He closed **three calls in one week** on the slow-Monday/Tuesday problem (10/13).

Other angles Logan liked:
- "Referrals are great, but you can't schedule them." (10/13)
- "No stock images, no long-term lock-ins." (10/13)

How to research a niche fast:
- Ask AI for the niche's top pains, then check them against reviews, Reddit threads, and owner Facebook groups.
- Look for the thing they pay for and resent (lead sites, slow seasons, no-shows).
- Ask a real owner which months are slow before you put a season on the page. Sacramento's slow months won't match St. Louis's.

One angle per page. If a prospect reads the headline and thinks "that's exactly my problem," the page has done its main job.`,
      keyPoints: [
        "Research pains before you write a word.",
        "Specific pain beats generic pain every time.",
        "Find the niche's slow month or recurring frustration.",
        "One angle per page.",
        "Confirm local details (like slow seasons) with real owners."
      ],
      why: "ZDub competes with agencies that all say 'more leads.' A Sacramento-specific, niche-specific pain line is what makes a roofer or HVAC owner book the call.",
      example: {
        title: "Flooring: from generic to specific",
        before: "Tired of a referral-based business? Grow with social media.",
        after: "For flooring company owners tired of being one of five bids. Get homeowners calling you ready to hire, not shopping for the cheapest quote.",
        body: "This is the actual hero from Logan's 9/30 flooring demo, built after the research found lead sites selling one lead to 4-5 contractors."
      },
      practice: [
        {
          prompt: "Pick three Sacramento-area trades. For each, list three researched pains and write one specific angle line.",
          fields: ["Trade 1 + three pains + angle line", "Trade 2 + three pains + angle line", "Trade 3 + three pains + angle line", "Which angle I'd test first and what I need to confirm with a real owner"],
          rubric: ["Pains are specific (named lead sites, named seasons, named costs)", "Each angle names a moment the owner has lived", "Avoids the generic 'tired of referrals' line", "Flags anything that needs confirming locally"],
          model: "HVAC: pains = shoulder-season dead weeks in spring and fall, price shoppers who got three quotes from lead sites, techs sitting idle on slow days. Angle: 'A packed July doesn't pay for an empty April.' Confirm with an owner which months are actually slow in Sacramento."
        }
      ],
      today: { task: "Run a pain-research prompt for one niche you'd like to pitch (roofers, HVAC, landscapers...). Check the top 3 pains against 10 local Google reviews or a Facebook group, then write 5 angle lines.", output: "A pain list and 5 angle lines for one niche, saved in your swipe file", minutes: 30, suggested: false },
      check: [
        { q: "Why did Logan prefer the HomeAdvisor line over \"tired of a referral-based business?\"", a: "It's specific to a pain the owner has actually lived. The generic line makes you sound like everybody else." },
        { q: "What angle did Logan use to close three calls in one week?", a: "The slow-Monday/Tuesday problem: full chairs on Saturday don't pay for slow Tuesdays." },
        { q: "What was the flooring page's angle?", a: "Stop being one of five bids." }
      ]
    },
    {
      id: "fun-08",
      part: "copy",
      title: "No proof yet? Use honest stats and honest timing",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 07 V2", section: "The short version (no proof yet); 3. Copy rules (real numbers or cited stats); 4. Page sections (who you are)", who: "Logan McKinney, 9/30, 10/2, 10/9, 10/13/26" },
        { doc: "Mentor Guide 00 V2 · Master Index", section: "Principles that show up across calls, #2 Honesty is the strategy when you're new", who: "Logan, Calum, Paul (cross-call principle)" }
      ],
      idea: `New agencies freeze on the proof section. Logan's answer (9/30): "You don't need proof. You can do statistics... you can say I have the solution, I have the knowledge."

**What you can use before you have results:**
- **Industry stats with sources, as plain text.** If you have no results yet, show research or industry stats and name the source. No clickable links; every link goes to booking (10/9). On the flooring page these stats sat right under the hero so the owner thinks "this person actually knows my problems" (9/30).
- **A testimonial slot only if you have one.** "If you got one... you can take it out" if not (9/30).
- **You.** Your face and name, and an honest line about being new. Logan's: "We're a new agency here in St. Louis, but I'm not new to this" (10/9, 10/13). On the flooring page: "you talk to the person who built it... no account managers, no handoffs."
- **Honest timing.** "Organic videos build over months, not days. We won't promise you a number of jobs by a certain date." (9/30)

**What you can never do:** invent stats, clients or results. The Master Index lists "Honesty is the strategy when you're new" as a principle across calls: be open that they're your first, and never invent numbers. Logan's checklist says it flatly: real photos, real numbers, or cited stats. Nothing invented.

**When the real proof arrives, use it hard.** Logan's case study is from his own books: a shop spent $3,000 on ads and made $138,000 back over five months (10/13). Real photos and videos of actual work beat any stock image (10/9).

The honest version is also the persuasive version. Owners have been burned by agencies that promised the moon. "We won't promise you a number of jobs by a certain date" is a line they've never heard from a marketer.`,
      keyPoints: [
        "No results yet: cite industry stats as plain text.",
        "Put yourself on the page: face, name, an honest 'new agency, not new to this' line.",
        "Honest timing builds trust.",
        "Never invent stats, clients, testimonials or results.",
        "Once you have real numbers, lead with them."
      ],
      why: "ZDub is new and PMT is the first client. Honest proof keeps ZDub credible now and protects the reputation you'll sell on for years.",
      example: {
        title: "ZDub's proof section, before any case study",
        body: "Stat line (plain text, source named): a cited industry stat about how fast leads go cold, with the study named but not linked. About line: 'ZDub is a new agency here in Sacramento, but I'm not new to running a business or spending my own money on marketing.' Timing line: 'Ads can produce leads in the first weeks; trust-building content takes months. We'll show you the numbers every week either way.' Every line is true and nothing links out."
      },
      practice: [
        {
          prompt: "Write ZDub's proof section with zero client results. Every line must be true.",
          fields: ["2 industry stats with sources named as plain text", "My 'new agency, not new to this' line (true to my background)", "My honest-timing answer to 'How fast will this work?'", "What real proof I'll swap in first once PMT has results"],
          rubric: ["Every stat has a named source and no link", "The about line is true and specific to you", "Timing answer makes no promise you can't control", "Nothing invented: no fake testimonials, logos or counts"]
        }
      ],
      today: { task: "Start a 'proof bank' doc for ZDub: 5 cited stats (source named), your true background line, and a running list of PMT numbers you're allowed to use once they exist.", output: "A proof bank doc with at least 5 sourced stats", minutes: 30, suggested: false },
      check: [
        { q: "What did Logan say to someone with no proof yet?", a: "\"You don't need proof. You can do statistics... you can say I have the solution, I have the knowledge.\"" },
        { q: "How should industry stats appear on a landing page?", a: "With sources named as plain text, never as clickable links." },
        { q: "What's Logan's honest-timing line from the flooring page?", a: "\"Organic videos build over months, not days. We won't promise you a number of jobs by a certain date.\"" }
      ]
    },
    {
      id: "fun-09",
      part: "build",
      title: "The landing page in order: Logan's ten sections",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 07 V2", section: "4. Page sections Logan recommends (1-10, scarcity line)", who: "Logan McKinney, 10/9/26 and 10/13/26" }
      ],
      alsoIn: ["Offers tab (guarantees)"],
      idea: `Logan's recommended page runs top to bottom like a sales call in written form. Each section answers the next question a prospect would ask.

1. **Hero.** Curiosity headline and **one** CTA button (10/9).
2. **VSL.** One of the highest-converting elements on a landing page, "curating the perfect environment of a sales call": introduce yourself, say what you do, show case studies, handle objections in the video. If you don't have one, start planning it (10/13).
3. **Who it's for.** Tighten it to exactly who your ads target, e.g. "St. Louis service businesses doing $30k+/month." Logan's own page says "for shops doing $30k a month," and he has told a small barber "this is not for you" (10/13).
4. **How it works.** Explain your **system**, not your onboarding. Make it visual, like a picture book, not wordy (10/9, 10/13).
5. **Proof.** Real photos and videos of actual work, and case studies (10/9). Logan's: $3,000 in ads, $138,000 back over five months (10/13).
6. **Price.** Show it publicly so it's no surprise on the call, with a CTA right under it (10/13).
7. **Who you are.** Your face and name. "We're a new agency here in St. Louis, but I'm not new to this" (10/9, 10/13).
8. **Guarantee.** Logan's example: run three full months, follow the booking process, and if it hasn't produced what was modeled, keep running at no fee for up to 60 more days (10/9). (How to design a guarantee lives in the Offers tab.)
9. **Straight answers** (the FAQ) (10/13).
10. **Legal.** Privacy policy and terms; a disclaimer on any projection calculator ("results vary by area and business") (10/9).

Add a **scarcity line** if it's true. Logan's: "one roofing company per city" (10/9).

The thread through all ten: one offer, clearly highlighted, and nothing that pulls attention away from booking. If a section doesn't move someone toward the call, cut it.`,
      keyPoints: [
        "Hero → VSL → who it's for → how it works → proof → price → who you are → guarantee → straight answers → legal.",
        "One CTA in the hero; a CTA under price.",
        "\"Who it's for\" should match exactly who the ads target.",
        "\"How it works\" explains your system, visually.",
        "Show price publicly so the call has no surprise."
      ],
      why: "A fixed section order means ZDub can build any client page fast and never forget the pieces that convert (price, proof, who it's for).",
      table: {
        head: ["#", "Section", "Job it does"],
        rows: [
          ["1", "Hero", "Open a loop and offer one action"],
          ["2", "VSL", "Run the sales call before the call"],
          ["3", "Who it's for", "Make the right reader say 'that's me' (and the wrong one leave)"],
          ["4", "How it works", "Show the system, picture-book simple"],
          ["5", "Proof", "Real work, real numbers"],
          ["6", "Price", "No surprises; CTA right under it"],
          ["7", "Who you are", "Face, name, honest experience"],
          ["8", "Guarantee", "Lower the risk"],
          ["9", "Straight answers", "Kill the last objections"],
          ["10", "Legal", "Privacy, terms, calculator disclaimer"]
        ]
      },
      example: {
        title: "A PMT version of the order",
        body: "Hero: 'How first-time riders go from never touching a clutch to riding confidently in one weekend.' + 'Pick my class date.' Video: an instructor on the range explaining the first hour. Who it's for: beginners and returning riders who want their M1; not for experienced riders looking for track coaching. How it works: pick a date → show up (bike and helmet provided) → ride away confident. Proof: real class photos and real review count. Price with a button under it. Who you are: the instructors. Straight answers: what to wear, what if I'm nervous, rescheduling. Legal: privacy and terms."
      },
      practice: [
        {
          prompt: "Outline a full landing page for a Sacramento-area prospect in Logan's order. One or two lines per section.",
          fields: ["Business and offer", "1. Hero headline + button", "2. VSL plan (or placeholder)", "3. Who it's for / not for", "4. How it works (3-4 steps)", "5. Proof I have or can get", "6. Price line + CTA", "7. Who you are", "8. Guarantee (or none)", "9. Three straight answers", "10. Legal items needed"],
          rubric: ["Every section is filled or marked as a placeholder", "Who-it's-for matches the ad audience", "How it works is the system, not onboarding", "Proof is real; price is shown", "Only one offer on the page"]
        }
      ],
      today: { task: "Check the ZDub page against Logan's ten sections. Write which ones exist, which are missing, and which are placeholders (like the VSL). Don't change the design.", output: "A 10-row checklist for the ZDub page with status for each section", minutes: 20, suggested: false },
      check: [
        { q: "What should 'How it works' explain?", a: "Your system, not your onboarding, and visually, like a picture book." },
        { q: "Why does Logan show price publicly?", a: "So it's no surprise on the call. Put a CTA right under the pricing." },
        { q: "What goes on a projection calculator?", a: "A disclaimer that results vary by area and business." }
      ]
    },
    {
      id: "fun-10",
      part: "build",
      title: "Worked example: Logan's flooring page, section by section",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-09-30",
      source: [
        { doc: "Mentor Guide 07 V2", section: "New in V2: The flooring demo page, section by section", who: "Logan McKinney, landing page builder 9/30/26" }
      ],
      idea: `On 9/30 Logan ran his builder live on a flooring company example. It's the best single model of a finished trades page in the mentor material, so study the structure.

1. **Hero:** "For flooring company owners tired of being one of five bids. Get homeowners calling you ready to hire, not shopping for the cheapest quote." Then what you do in one line, and a "Book your call" button.
2. **Industry stats with sources** (no links), so the owner thinks "this person actually knows my problems."
3. **Testimonial placeholder.** "If you got one... you can take it out" if not.
4. **How it works:** plan the month, film and edit, post and get found.
5. **What you get.**
6. **Objection handling**, each answered in plain words:
   - "I posted before and nothing happened."
   - "I don't have time for this." Answer: "you run the jobs, we handle the ideas."
   - "Most of my work comes from referrals."
   - "How fast will this work?" Answer: "Organic videos build over months, not days. We won't promise you a number of jobs by a certain date."
7. **Who it's for / not for.** For owners whose work is good and who are tired of competing on price. Not for anyone who only wants the cheapest jobs, won't show their work on camera, or needs results by next week.
8. **Booking calendar**, then a thank-you page, plus a privacy page.

**No VSL yet?** Leave a hidden spot for it. Meanwhile, at least a professional-ish headshot and a short "about me": "you talk to the person who built it... no account managers, no handoffs." Logan: "The VSL is going to perform way better than a photo would, but a photo is better than nothing at all."

Two sections new pages usually skip are the ones that sell hardest here: the **objection section** and the **not-for list**. Saying who you won't serve makes the right owner trust you more.`,
      keyPoints: [
        "Hero names the reader and the exact pain (one of five bids).",
        "Stats with sources come right after the hero.",
        "Objection section answers the four things owners always say.",
        "\"Not for\" list repels bad-fit clients and builds trust.",
        "No VSL: hidden placeholder plus a headshot and a short about-me."
      ],
      why: "This is a copy-ready pattern for ZDub's trades prospects. Swap the niche research and real photos and you have a client page in an afternoon.",
      example: {
        title: "The 'who it's for / not for' block",
        body: "For: flooring owners whose work is good and who are tired of competing on price. Not for: anyone who only wants the cheapest jobs, won't show their work on camera, or needs results by next week. Notice that each 'not for' line also tells the right reader something true about how ZDub works (real work on camera, no overnight promises)."
      },
      practice: [
        {
          prompt: "Rebuild the flooring page's two hardest-working sections for a Sacramento HVAC or landscaping company.",
          fields: ["Trade", "Objection 1 + plain answer", "Objection 2 + plain answer", "Objection 3 + plain answer", "Objection 4 ('How fast will this work?') + honest answer", "Who it's for", "Who it's NOT for (3 lines)"],
          rubric: ["Objections are things owners really say", "Answers are short, in the owner's words", "The timing answer makes no promise you can't control", "The not-for list is specific and also signals how you work"],
          model: "Landscaping. 'I'm too busy in summer to film.' → 'You do the jobs; we grab 20 minutes on a job site once a week.' 'Ads brought me tire-kickers.' → 'We ask budget and timeline on the form, so you only call people ready to book.' Not for: anyone who wants the cheapest bids, won't let us film real yards, or needs a full calendar by next week."
        }
      ],
      today: { task: "Write the objection section for ZDub's own page from real objections you've heard on calls or outreach (at least 4). If you haven't heard 4 yet, use the flooring four and answer them for ZDub.", output: "A 4-objection 'Straight answers' block for ZDub", minutes: 25, suggested: false },
      check: [
        { q: "What was Logan's answer to 'I don't have time for this'?", a: "\"You run the jobs, we handle the ideas.\"" },
        { q: "What goes on the page if you have no VSL yet?", a: "A hidden spot for the VSL, plus a professional-ish headshot and a short about-me." },
        { q: "Name two 'not for' lines from the flooring page.", a: "Any two of: only wants the cheapest jobs; won't show their work on camera; needs results by next week." }
      ]
    },
    {
      id: "fun-11",
      part: "build",
      title: "For websites: the StoryBrand wireframe and the three-part hero",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "Mastery Guide Ch 20", section: "The StoryBrand website wireframe; Dib's three-step hero section; Websites for local search", who: "Donald Miller (Building a StoryBrand, Marketing Made Simple); Allan Dib (Lean Marketing)" },
        { doc: "Mastery Workbook Ch 20", section: "Recall 20.6, 20.7, 20.12; Drill D20.3", who: "Workbook" }
      ],
      alsoIn: ["Persuasion tab (StoryBrand / customer as hero)"],
      idea: `A landing page is a closed room. A client's **website** is the house: people explore it, Google reads it, and AI search tools quote it. For websites, the Mastery Guide uses Donald Miller's StoryBrand wireframe. (The SB7 story itself is taught in the Persuasion tab; this lesson is just the page layout.)

**The wireframe, top to bottom:**
1. **Header (above the fold):** what you offer, how it makes life better, how to get it, with a direct CTA button (and optionally a softer "transitional" one). It must pass the grunt test: could a caveman grunt back what you do?
2. **The stakes:** what happens if they don't solve the problem.
3. **The value proposition:** the benefits, the "what's in it for me."
4. **The guide:** empathy plus authority (testimonials, numbers, credentials, logos).
5. **The plan:** three or four simple steps to do business with you.
6. **Explanatory paragraph:** the story in more words (also good for search).
7. **Video** (optional).
8. **Price choices:** packages or a starting price, if possible.
9. **The "junk drawer" footer:** about, careers, policies, links.

**Allan Dib's shortcut, the three-part hero:** a **header** (the main promise), a **subheader** (who it's for and how it works), and a **call to action**. Get the hero right and most of the page's work is done.

**Website basics for local and AI search:**
- A page per main service, and per main area where it makes sense, with real content (no copy-paste city pages).
- FAQ content that answers real customer questions directly.
- Name, address and phone that match the Google Business Profile.
- Structured data (schema) for the business, services and reviews.
- Fresh proof: reviews, recent project photos, case studies.

Common mistake: sending ad traffic to the home page. The home page is for explorers; ads go to a matching landing page.`,
      keyPoints: [
        "Website = explore; landing page = one action.",
        "Header → stakes → value → guide → plan → story → video → price → footer.",
        "Dib's hero: promise, who-and-how, CTA.",
        "Service pages, real FAQs and consistent NAP feed local and AI search.",
        "Don't send ads to the home page."
      ],
      why: "Many Sacramento prospects have a weak website. A quick wireframe rewrite is a concrete, visible fix ZDub can show on a first call.",
      example: {
        title: "Roofer homepage wireframe (from the Workbook answer key)",
        body: "Header: 'Know exactly what your roof needs, from a video of your own roof.' Subhead: 'Same-day drone inspections for Placer County homes, with a written price before any work starts.' Button: 'Book my inspection.' Stakes: 'Small leaks become ceiling stains, mold, and $10,000 repairs.' Plan: '1. Book online. 2. Watch your drone video. 3. Decide with no pressure.'"
      },
      practice: [
        {
          prompt: "Drill D20.3, Wireframe a homepage. Pick one client or prospect and write the actual words.",
          fields: ["Business", "Header (promise)", "Subheader (who it's for and how it works)", "CTA button", "Stakes", "Value proposition (3 bullets)", "Guide (empathy line + authority proof)", "Three-step plan"],
          rubric: ["Header passes the grunt test", "Subheader names who and how", "Stakes are concrete, not scary fluff", "Authority proof is real", "Plan has 3-4 short steps"]
        }
      ],
      today: { task: "Pick one Sacramento prospect with a weak homepage. Write Dib's three-part hero for them (header, subheader, CTA) and save it as an outreach asset: 'Here's how I'd open your homepage.'", output: "A rewritten hero for one prospect, ready to send", minutes: 20, suggested: false },
      check: [
        { q: "What comes first in the StoryBrand homepage wireframe?", a: "A header with the offer, the benefit, and a clear CTA." },
        { q: "What are the three parts of Dib's hero section?", a: "Header (main promise), subheader (who it's for and how it works), call to action." },
        { q: "Name four website basics for local and AI search.", a: "Any four of: a page per service (and area); FAQ content with direct answers; NAP matching the Google Business Profile; structured data; fresh proof." }
      ]
    },
    {
      id: "fun-12",
      part: "build",
      title: "CTAs and booking settings that fill the calendar",
      minutes: 10,
      tags: ["Mentor", "Book"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 07 V2", section: "5. CTAs and booking", who: "Logan McKinney, 9/30, 10/2, 10/9, 10/13/26" },
        { doc: "Mastery Guide Ch 20", section: "Landing pages rules 2, 7 and 10 (one CTA, short form, thank-you page)", who: "Book synthesis" }
      ],
      idea: `The button is where the page turns into a booked call. Logan's CTA and booking rules:

**On the page**
- **One offer, clearly highlighted** (10/13). Repeat the same action in several places; don't offer three different things.
- **Section-specific CTAs.** The button copy relates to the section it sits under: under the money model, "Book a call to run my numbers" (10/13).
- **Say what's in it for them.** "Book a 30-minute call to explore how we can help you..." not "from my live calendar." Prospects are self-serving (10/9).
- **Offer a softer alternative.** "Not ready to book? Leave your email," or a "leave your name" form (10/9, 10/13).
- **Make clickable-looking things clickable** (10/9). If it looks like a button, it must work.

**In the booking tool**
- At least about **12 hours' notice**.
- **No more than a week out**, because urgency fades.
- Consider weekend availability (10/9).
- **Fewest clicks.** Logan prefers pick-a-time first, then the form (micro-commitments), though he says he hasn't A/B tested it (10/13).

**After they book**
- Send them to a **thank-you page**. The Mastery Guide says the thank-you page is part of the funnel: say exactly what happens next, add a calendar link, and offer the next small step (follow us, watch a video, join the group).
- A local lead who books can become a **coffee meeting** where you show examples (Logan, 9/30).

**Forms:** keep them short. Every field costs conversions. Add one or two qualifying questions only if lead quality is a problem (Ch 20), and per Clayton (8/5) put small questions first and contact info last.`,
      keyPoints: [
        "One offer, repeated.",
        "CTA copy matches its section and says what they get.",
        "Always give a 'not ready yet' option.",
        "Booking: 12+ hours' notice, no more than a week out.",
        "Thank-you page says what happens next and offers one small next step."
      ],
      why: "A booked call is ZDub's product for its own pipeline and for clients. Small booking settings (notice, window, clicks) decide how many clicks become calls.",
      example: {
        title: "Section CTAs on ZDub's page",
        before: "Every button: \"Book Now\"",
        after: "Hero: \"Book my free strategy call\" · Under how it works: \"See how this works for my business\" · Under price: \"Book a call to run my numbers\" · Footer: \"Not ready? Leave your email and I'll send one idea for your business.\"",
        body: "Same destination every time (the booking calendar), but each button finishes the thought of the section it's in."
      },
      practice: [
        {
          prompt: "Write the CTAs and thank-you page for a page you're building (ZDub or a client).",
          fields: ["Hero CTA", "CTA under 'how it works'", "CTA under price", "'Not ready to book?' alternative", "Booking settings (notice, window, weekends)", "Thank-you page: what happens next + one next small step"],
          rubric: ["Every CTA says what they get", "All CTAs lead to the same one action", "Soft alternative is there", "Booking window is 12+ hours to about a week", "Thank-you page has a concrete next step"]
        }
      ],
      today: { task: "Open your booking tool for ZDub and set notice to at least 12 hours and the window to no more than 7 days. Then write the thank-you page text (what happens next, one next step).", output: "Updated booking settings and thank-you page copy", minutes: 20, suggested: false },
      check: [
        { q: "What booking window did Logan recommend?", a: "At least about 12 hours' notice and no more than a week out, because urgency fades." },
        { q: "What's wrong with 'Book from my live calendar'?", a: "It's about you. CTA copy should say what's in it for them, e.g. 'Book a 30-minute call to explore how we can help you...'" },
        { q: "What three things should a thank-you page do?", a: "Say exactly what happens next, give a calendar link, and offer the next small step." }
      ]
    },
    {
      id: "fun-13",
      part: "build",
      title: "Mobile first, on brand, fast, and everything works",
      minutes: 10,
      tags: ["Mentor", "Book"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 07 V2", section: "6. Design and technical", who: "Logan McKinney, 9/30, 10/2, 10/9, 10/13/26" },
        { doc: "Mastery Guide Ch 20", section: "Landing pages rule 8 (load fast); Make it convert checklist (tracking)", who: "Book synthesis, 2026 guides" }
      ],
      idea: `Logan's design rules are short and practical. Most come down to: it has to look like you, load fast on a phone, and work.

**Mobile first.** Logan said 95-98% of visitors view on phones. Check the mobile view before anything else (10/9, 10/13). Avoid "Picasso funnels": art projects that don't convert.

**Speed.** A heavy hero image slows the page; ask Claude to make it load faster (10/9). The Mastery Guide cites 2026 guides suggesting under about two seconds on mobile: compress images, avoid heavy scripts.

**Color and layout** (9/30, 10/2):
- One "pop" accent color, used for buttons.
- Backgrounds near white or near black. Logan would "advise against" something like a purple background with white text.
- Darken a header photo so text stays readable.
- Center the headline and buttons, especially on mobile.
- Animations "lightweight and... high converting without being too distracting."

**Brand it** (10/2). A student's page built from the LC Vault design in Base44 was "great if you're starting out... better than nothing," but black and white and identical to another student's. Logan wanted the student's Instagram colors: "I want to see you and your brand give me some personality." Keep page, ads and content on the same brand and the same message (10/13). (He noted these were his personal views.)

**Details that look legit:** a favicon (your logo in the browser tab), icons that look less "Claude-y" (10/9).

**Everything must work and be true.** Every widget or tool must actually function; better to remove it than leave it broken (10/9).

**Technical must-haves:**
- A **privacy page**, which matters because you'll be texting leads. Get SMS opt-in and compliance right so your account doesn't get flagged (9/30).
- **Tracking**: Pixel, Conversions API, analytics, form source (Ch 20 checklist).
- On Netlify, rename the random project name before sending it to prospects, and ideally connect your own domain (10/2).`,
      keyPoints: [
        "Check the phone view first; most visitors are on phones.",
        "Fast hero, under about 2 seconds on mobile.",
        "One accent color for buttons; near-white or near-black backgrounds.",
        "Brand colors from your socials; give it personality.",
        "Broken widget? Remove it. Privacy page with SMS opt-in language."
      ],
      why: "A page that's slow, off-brand or broken on a phone makes ZDub look like the amateur agency owners already distrust.",
      example: {
        title: "A quick design pass on a student-style page",
        before: "Purple background, white text, three button colors, an uncompressed 6MB hero photo, a broken projection calculator, left-aligned header that wraps badly on a phone.",
        after: "Near-white background, ZDub's one accent color on every button, compressed and darkened hero photo, calculator removed until it works, headline and buttons centered for mobile, favicon set."
      },
      practice: [
        {
          prompt: "Run a design-and-tech pass on a page you own or are building. Check it on your phone.",
          fields: ["Phone view: what looks wrong", "Load speed (felt or tested) and the heaviest element", "Accent color and where it's used", "Anything broken or fake-looking to remove", "Privacy page + SMS opt-in: present?", "Tracking installed (Pixel, CAPI, analytics)?"],
          rubric: ["Checked on a real phone", "One accent color, used on buttons", "Nothing broken left on the page", "Privacy page covers SMS opt-in", "Tracking status is known, not assumed"]
        }
      ],
      today: { task: "Load the ZDub page on your phone over cellular (Wi-Fi off). Note load time, check the header is centered, the favicon shows, and nothing is broken. Fix only what's broken.", output: "A 6-line phone check of the ZDub page", minutes: 15, suggested: false },
      check: [
        { q: "What share of visitors did Logan say view on phones?", a: "About 95-98%. Check mobile first." },
        { q: "What should you do with a widget that doesn't work?", a: "Remove it. Better gone than broken." },
        { q: "Why does the privacy page matter so much for ZDub's pages?", a: "You'll be texting and messaging leads, so SMS opt-in and compliance have to be right or the account can get flagged." }
      ]
    },
    {
      id: "fun-14",
      part: "build",
      title: "Build it fast with the builder prompt, then connect the calendar",
      minutes: 12,
      tags: ["Mentor", "Platform fact (re-check)"],
      date: "2026-10-02",
      source: [
        { doc: "Mentor Guide 07 V2", section: "New in V2: Logan's landing page builder prompt (9/30); 5. CTAs and booking (connecting the calendar, 10/2); How Zach's page was finished (10/2); 6. Design and technical (Netlify)", who: "Logan McKinney, 9/30/26 and 10/2/26" }
      ],
      idea: `Logan shares a builder prompt (a .md file) that you run in Claude with the Claude in Chrome extension. It **interviews you with seven questions**:

1. What you sell and who the page is for.
2. The one action you want (usually book a call; every button scrolls to booking).
3. Whether you have copy or it should write it (ask it to research the niche's pain points first).
4. Brand colors and fonts (or it picks).
5. A VSL link or embed (or a hidden placeholder).
6. A GoHighLevel calendar (or a placeholder).
7. A domain (or a free Netlify address).

It builds a **landing page, a thank-you page and a privacy page**, checks them at phone width, and waits for your go before deploying. Logan's demo ran "in a vacuum" with no context and still took under 30 minutes; with real context it gets much better. Stuck? Ask it to "walk me through it." Base44 can run the same prompts (per Cam). "Don't get distracted from your goals."

**Connecting the calendar (10/2).** In Claude: Settings > Connectors > add a custom connector named Go High Level, paste the address Logan shared, sign in, pick the sub-account, approve. Connect the agency-level account so Claude sees every sub-account. Then Logan's prompt tells it to list your calendars and ask which one is for this page, make one if you have none, put it in the calendar spot, send bookers to the thank-you page, use Chrome if the connector can't do a step, **ask before changing anything in your account**, show you the result on a phone, and **not deploy until you say**. Calendly or similar works the same way with an embed code and a thank-you redirect. These menus change, so re-check the steps.

**After every deploy, book yourself a test on your phone** (10/2).

**Netlify:** don't send prospects the random project name. Rename it (Domain management > Production domains > Options > Edit project name) and ideally connect your own domain (Namecheap, about $10 a year).

**Handoff package.** When you build for someone, include a START HERE.md their own Claude can read to deploy and keep editing. Logan: "you're not stuck with this." A couple of people pay Logan $50/month to host sites he built this way.

**How Zach's page was finished (10/2):** headline "Get high ticket customers from Facebook and Instagram," CTA to book a discovery session, a calendar connected (cal.com), stat changed to plain text, header centered. Logan's handoff listed what only Zach can do: log into Netlify and cal.com; rename the cal.com event from "30 Minute Meeting" to "Discovery session"; add a business email on the privacy page; book a test call. Later: the VSL, the Meta pixel, real results and a custom domain.`,
      keyPoints: [
        "The builder interviews you with 7 questions, then builds page + thank-you + privacy.",
        "Give it real context and ask it to research the niche's pain first.",
        "Connector rule: ask before changing anything; don't deploy until you say.",
        "Book a test call on your phone after every deploy.",
        "Rename the Netlify project; ship a START HERE.md handoff."
      ],
      why: "Speed matters: a branded, working page in an afternoon is something ZDub can offer a trades client later as an add-on, and it's how Zach's own page already got built.",
      example: {
        title: "Zach's open handoff items",
        body: "From Logan's 10/2 handoff, the setup items only Zach can do: (1) log into Netlify and cal.com, (2) rename the cal.com event to 'Discovery session', (3) add a business email on the privacy page, (4) book a test call from the phone. Later: VSL, Meta pixel, real results, custom domain. These are setup, not redesign."
      },
      practice: [
        {
          prompt: "Answer the builder's seven questions for a page you'd build next (a prospect, or a future ZDub client).",
          fields: ["1. What I sell and who the page is for", "2. The one action", "3. Copy: mine or researched? (pain points to research)", "4. Brand colors and fonts", "5. VSL (link or placeholder)", "6. Calendar (which one, or placeholder)", "7. Domain (or Netlify address)"],
          rubric: ["One action only", "Pain research is requested, not skipped", "Brand colors come from the client's real socials", "Calendar and VSL have a real answer or a placeholder", "Plan includes a phone test before and after deploy"]
        }
      ],
      today: { task: "Work Logan's handoff list for the ZDub page: rename the cal.com event to 'Discovery session', add your business email to the privacy page, rename the Netlify project, then book a test call on your phone.", output: "All four handoff items checked off, with a test booking received", minutes: 30, suggested: false },
      check: [
        { q: "What three pages does Logan's builder produce?", a: "A landing page, a thank-you page and a privacy page." },
        { q: "What must you do after every deploy?", a: "Book yourself a test call on your phone." },
        { q: "What goes in a handoff package?", a: "A START HERE.md written for the client's own Claude, so they can deploy and keep editing." }
      ]
    },
    {
      id: "fun-15",
      part: "build",
      title: "Before it goes live: the checklist and the three-person phone test",
      minutes: 12,
      tags: ["Mentor", "Book"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 07 V2", section: "Landing page review checklist", who: "Compiled from Logan McKinney's reviews, 9/30, 10/2, 10/9, 10/13/26" },
        { doc: "Mastery Guide Ch 20", section: "Make it convert: a practical checklist; Usability testing on the cheap", who: "Steve Krug (Rocket Surgery Made Easy); book synthesis" },
        { doc: "Mastery Workbook Ch 20", section: "Recall 20.5, 20.9; Drill D20.1; Client Lab L20", who: "Workbook" }
      ],
      idea: `Two checks before any page goes live: a **checklist** to catch what you know to look for, and a **phone test** to catch what you don't.

**Logan's review checklist (condensed):**
- Headline creates curiosity and can be backed up.
- One clear offer; CTA right under pricing.
- No nav, no outbound links; sources as plain text ("no escapes").
- Niche pain researched; at least one specific angle.
- "Who it's for / not for" and an objection section.
- Brand colors match your socials; accent color on buttons only; header centered on mobile.
- Privacy page with SMS opt-in language; Netlify project renamed; test booking on your phone after deploy.
- Mobile view checked first; hero loads fast.
- No em dashes; read aloud in your own voice; client's language.
- Your face and name; no "my team" unless you have one.
- Real photos, real numbers, or cited stats. Nothing invented.
- "How it works" is visual. Section-specific CTAs plus a "leave your email" option.
- Every widget works; disclaimers, privacy policy, terms. Booking: 12+ hours' notice, no more than a week out. Favicon set.

**The Mastery Guide adds:** does it pass the grunt test in five seconds on a phone? Does the headline match the ad? Is a price or starting price visible? Are phone and hours easy to find (local businesses)? Are the top five objections answered? Is the form as short as possible? Is tracking installed? Have three real people tried it?

**Krug's cheap usability test.** About **three users** is usually enough. Hand someone a phone and give one task: "Book a class," "Find the price," or "Request a quote." Then **watch silently**. Don't help. Write down every hesitation, scroll-back and question. You'll usually see the same two or three problems in all three sessions (a hidden price, a button that doesn't look like a button, a booking flow with one step too many). Fix the worst first, and re-time it.

> You are not the user. Ten minutes watching a stranger beats an hour of you re-reading your own page.`,
      keyPoints: [
        "Run the checklist on every page, every time.",
        "Three users, one task each, on a phone, watched silently.",
        "Don't help them; note every hesitation.",
        "Fix the problem that showed up most often first.",
        "Test the booking yourself after deploy."
      ],
      why: "One broken booking step can zero out a month of ad spend. A 20-minute test before launch is the cheapest insurance ZDub has.",
      example: {
        title: "What a three-user test usually finds",
        body: "User 1 scrolls past the price twice and asks 'how much is it?' User 2 taps the testimonial photo expecting a video. User 3 fills the form, then hesitates because the calendar shows times three weeks out. Fixes: move price higher with a CTA under it, make the photo not look tappable, tighten the booking window to a week. Re-test and time it again."
      },
      practice: [
        {
          prompt: "Drill D20.1, Three-user phone test. Hand a phone to three people who don't know the business and give each one task.",
          fields: ["Page and task given", "Tester 1: where they hesitated or asked a question (and time taken)", "Tester 2: where they hesitated or asked a question (and time taken)", "Tester 3: where they hesitated or asked a question (and time taken)", "Problems ranked by how often they appeared", "Fixes made and new time"],
          rubric: ["Testers didn't know the business", "You stayed silent and didn't help", "Problems are ranked by frequency", "Worst problem fixed first and re-timed"]
        }
      ],
      today: { task: "Run the full checklist on the ZDub page, then do one silent phone test with a friend or family member ('Book a call with this agency').", output: "A checklist with every 'no' listed and one phone-test log entry", minutes: 30, suggested: false },
      check: [
        { q: "How many users does Krug say are usually enough for a round of cheap testing?", a: "About three." },
        { q: "How fast should a landing page load on mobile, per the 2026 guides cited?", a: "Under about two seconds." },
        { q: "What's the most important rule while someone tests your page?", a: "Watch silently. Don't help; note every place they get stuck." }
      ]
    },
    {
      id: "fun-16",
      part: "permission",
      title: "Earn permission: strangers to friends to customers",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "Mastery Guide Ch 19 · Permission, Leads & Follow-Up", section: "Permission marketing: strangers → friends → customers; Roy Williams' gravity well", who: "Seth Godin, Permission Marketing; Roy H. Williams, Magical Worlds and Making Ads Work" },
        { doc: "Mastery Workbook Ch 19", section: "Recall 19.1-19.3; Drill D19.1", who: "Workbook" }
      ],
      idea: `Most leads aren't ready to buy today. The money is in earning the right to keep talking to them.

**Seth Godin's split.** *Interruption* marketing shouts at people who didn't ask. *Permission* marketing earns the right to talk to people who want to hear from you. Godin calls permission a privilege, not a right: the privilege of sending messages that are **anticipated** (people look forward to them), **personal** (clearly for this person) and **relevant** (about something they care about).

His process: offer a real incentive to raise their hand, use that attention to teach them over time, keep reinforcing the incentive, earn more permission step by step, and turn it into a buying relationship.

**Five levels of permission, weakest to strongest:**
1. Situational (one exchange, like a question)
2. Brand trust
3. Personal relationship
4. Points (a loyalty or rewards relationship)
5. **Intravenous**: they trust you to make the buying decision for them (a subscription, a maintenance plan, "just handle it")

The goal is to climb the levels.

**Roy Williams' gravity well** is the same idea as a path: a funnel of gradually deeper commitments that gently pulls people in, where anyone can comfortably leave at any level. His own started with a free weekly newsletter, then books, seminars, an academy, and only at the bottom, consulting. Nobody was pushed.

> Sales resistance happens when you ask for too big a commitment, too soon. Pushy selling is just a well with a missing step.

A text list, an email list, a follower with notifications on, or a past customer who says "just schedule my next service" is worth more than any single ad. Earn it, protect it, never abuse it.`,
      keyPoints: [
        "Permission = anticipated, personal, relevant.",
        "Climb from situational trust up to intravenous ('just handle it').",
        "A gravity well is a staircase of small commitments.",
        "Resistance means you skipped a step.",
        "Lists and repeat customers are assets; never abuse them."
      ],
      why: "ZDub's funnels for PMT and trades clients shouldn't jump from a cold ad to a big ask. Designing the steps in between is what turns 'not yet' leads into later sales.",
      example: {
        title: "A gravity well for a roofer",
        body: "Watch a reel (no commitment) → follow the account → download '5 Signs Your Roof Won't Survive Another Winter' (email) → book a free drone-photo inspection (small commitment) → receive a written quote → sign for a repair → join the annual maintenance plan (Godin's intravenous permission)."
      },
      practice: [
        {
          prompt: "Drill D19.1, Build a gravity well. Design six or seven levels for PMT and for one Sacramento trade, from no commitment to the deepest relationship.",
          fields: ["PMT: level 1 → level 7", "Trade: level 1 → level 7", "Where a step was missing before (and the step I added)"],
          rubric: ["Starts with a no-commitment step", "Each step is a natural, small move from the last", "Anyone can leave at any level", "Ends at the strongest permission (repeat training, maintenance plan, membership)"],
          model: "PMT (Workbook model): watch a reel → follow → take the 'Rider readiness quiz' (email) → watch a free 'first hour of class' video → book a beginner class → join the alumni group → book the next-level class or skills day."
        }
      ],
      today: { task: "Map PMT's current path from first ad to enrolled student. Mark where it asks for too much too soon and write the one missing step you'd add.", output: "PMT's current well with one missing step identified", minutes: 20, suggested: false },
      check: [
        { q: "Godin says permission is the privilege of delivering messages that are what?", a: "Anticipated, personal and relevant." },
        { q: "What is Godin's strongest level of permission?", a: "Intravenous: the customer trusts you to make the buying decision for them." },
        { q: "According to Williams, when does sales resistance happen?", a: "When you ask for too big a commitment, too soon." }
      ]
    },
    {
      id: "fun-17",
      part: "permission",
      title: "Lead magnets: a small, complete first step",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "Mastery Guide Ch 19", section: "Getting leads: Hormozi's Core Four; Lead magnets: a small, complete first step", who: "Alex Hormozi, $100M Leads" },
        { doc: "Mastery Workbook Ch 19", section: "Recall 19.4, 19.6, 19.8; Drill D19.2", who: "Workbook" }
      ],
      alsoIn: ["Getting Clients tab (Core Four outreach, Rule of 100)"],
      idea: `Alex Hormozi defines a **lead** as someone you can contact, and an **engaged lead** as someone who has shown interest in what you sell. A lead magnet is how you turn a stranger into an engaged lead.

**Where leads come from (the Core Four, briefly).** Two questions: do they already know you, and are you reaching them one at a time or many at once? Warm one-to-one = warm outreach. Warm one-to-many = posting content. Cold one-to-one = cold outreach. Cold one-to-many = **paid ads**. Hormozi adds **lead getters**, people who bring leads for you: referrals, employees, agencies, affiliates and partners. A motorcycle dealership referring new buyers to a training school is a lead getter. (Outreach itself is taught in the Getting Clients tab.)

**A lead magnet is a complete solution to a narrow problem**: genuinely valuable on its own, and once used, it reveals a bigger problem your core offer solves. Three kinds:

1. **Reveal their problem:** a diagnosis, assessment, inspection or quiz. "Free roof photo inspection." "Rider readiness quiz."
2. **A sample or trial:** a small taste of the real thing. "Free 30-minute intro session." "First tune-up at cost."
3. **One step of a multi-step process:** give away step one. "The 7-step pre-ride checklist." "How to read your electric bill."

Delivery vehicles: software (calculators, quizzes), information (guides, videos), services (inspections, consultations) or physical products (a sample, a kit).

Two tests for a good one: it's **easy to consume**, and it's **good enough that people would pay for it**. A thin PDF nobody finishes reveals nothing. A drone video of your own roof reveals exactly what you need.`,
      keyPoints: [
        "Lead = contactable. Engaged lead = showed interest.",
        "Paid ads are cold, one-to-many in the Core Four.",
        "Lead magnet = complete solution to a narrow problem that reveals a bigger one.",
        "Three types: reveal the problem, sample/trial, step one.",
        "Easy to consume, good enough to pay for."
      ],
      why: "A lead magnet is the 'small first step' in every gravity well ZDub builds, and it gives cold Meta traffic a reason to raise a hand before they're ready to buy.",
      example: {
        title: "Three lead magnets for an electrician (Workbook model)",
        body: "Reveal: 'The Photo-First Panel Check' (a service) shows whether the panel can handle an EV charger. Sample: a free smoke-detector and GFCI safety check with any service call. Step one: 'The 5-minute home electrical safety checklist' (PDF) reveals issues only a licensed electrician should fix. Each one is complete and useful on its own."
      },
      practice: [
        {
          prompt: "Drill D19.2, Three lead magnets. For one client (PMT is ideal), design one of each type.",
          fields: ["Reveal their problem: name, delivery vehicle, bigger problem it reveals", "Sample or trial: name, delivery vehicle, bigger problem it reveals", "One step of a multi-step process: name, delivery vehicle, bigger problem it reveals", "Which one I'd launch first and why"],
          rubric: ["Each is complete and useful on its own", "Each reveals a problem the core offer solves", "Delivery vehicle is realistic for the client to produce", "Name is specific and benefit-led"]
        }
      ],
      today: { task: "Write PMT's first lead magnet as a one-page outline (e.g., a rider readiness quiz or a pre-class checklist), including the opt-in line for the form.", output: "A one-page lead magnet outline for PMT", minutes: 30, suggested: false },
      check: [
        { q: "In Hormozi's Core Four, reaching strangers one-to-many is what?", a: "Paid ads." },
        { q: "Which is a lead getter: a CRM, a landing page, a lead magnet, or a dealership that refers buyers to a training school?", a: "The dealership. Lead getters are people who bring you leads (referrals, employees, agencies, affiliates and partners)." },
        { q: "A 'free roof photo inspection' is which kind of lead magnet?", a: "Revealing their problem." }
      ]
    },
    {
      id: "fun-18",
      part: "permission",
      title: "The 1-Page Marketing Plan: before, during, after",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "Mastery Guide Ch 19", section: "The before-during-after system: Dib's 1-Page Marketing Plan", who: "Allan Dib, The 1-Page Marketing Plan" },
        { doc: "Mastery Workbook Ch 19", section: "Recall 19.9; Client Lab L19 step 1", who: "Workbook" }
      ],
      alsoIn: ["Running the Agency tab (Client Growth Blueprint, Phase 3)"],
      idea: `Allan Dib's *The 1-Page Marketing Plan* turns the whole customer journey into **nine squares on one page**. It's the simplest complete marketing plan there is, and a perfect client planning tool.

**BEFORE: the prospect** (you don't know them yet)
1. **Target market:** who exactly?
2. **Message:** the offer and why you.
3. **Media:** where you reach them.

**DURING: the lead** (they know you)
4. **Lead capture:** get contact details and permission, usually with a lead magnet.
5. **Lead nurture:** most aren't ready yet, so educate and follow up until they are.
6. **Sales conversion:** build trust, reverse risk, make buying easy.

**AFTER: the customer** (they've bought)
7. **World-class experience.**
8. **Raise lifetime value:** repeat purchases, upgrades, memberships.
9. **Orchestrate referrals.**

**Dib's central warning is about the middle row.** Most businesses spend money to generate leads, then let most of them die because they only talk to the few ready to buy today. The ones who aren't ready this week may be ready in two months, if you're still in touch. His fix: a CRM and a systematic nurture sequence, so follow-up doesn't depend on someone's memory.

That middle row is exactly where ZDub can add the most value. Ads fill square 3 and feed square 4. Squares 5 and 6 decide whether the client thinks the ads "worked."

Fill all nine squares for a client and you can see the leak at a glance: a business with great ads (square 3) and no nurture (square 5) is buying leads and throwing them away.`,
      keyPoints: [
        "Nine squares: market, message, media / capture, nurture, convert / experience, LTV, referrals.",
        "Before = prospect, during = lead, after = customer.",
        "Most businesses let leads die in the 'during' row.",
        "CRM + nurture sequence, so follow-up doesn't rely on memory.",
        "Use it to spot the leak in a client's system."
      ],
      why: "It gives ZDub one page to show a client where their money leaks, and it makes the case for follow-up as part of the service, not an extra.",
      example: {
        title: "PMT on one page (sketch)",
        body: "Before: beginners and returning riders within driving distance of each location · 'Never ridden? Perfect.' · Meta ads and Instagram. During: Instant Form + rider readiness quiz · instant text, call, and a short email series answering 'what if I'm nervous' · easy online booking and a clear reschedule policy. After: a great first class · next-level class or skills day · a referral offer for friends who want to ride too."
      },
      practice: [
        {
          prompt: "Client Lab L19, step 1. Fill all nine squares for PMT (or another real client). Be specific.",
          fields: ["1. Target market", "2. Message", "3. Media", "4. Lead capture", "5. Lead nurture", "6. Sales conversion", "7. World-class experience", "8. Raise lifetime value", "9. Orchestrate referrals", "The weakest square right now"],
          rubric: ["Every square is specific to this client", "Lead capture names the actual form or magnet", "Nurture describes real messages and timing", "The weakest square is named honestly"]
        }
      ],
      today: { task: "Fill PMT's nine squares in 30 minutes, then circle the weakest one. Bring that square to your next conversation with PMT.", output: "PMT's 1-Page Marketing Plan with the weakest square circled", minutes: 30, suggested: false },
      check: [
        { q: "What three squares make up the 'during' phase?", a: "Lead capture, lead nurture, sales conversion." },
        { q: "What's Dib's central warning about the during phase?", a: "Businesses pay to generate leads, then let most of them die by only talking to the few ready to buy today." },
        { q: "What does Dib recommend so follow-up doesn't depend on memory?", a: "A CRM and a systematic nurture sequence." }
      ]
    },
    {
      id: "fun-19",
      part: "followup",
      title: "Speed to lead: minutes, not hours",
      minutes: 12,
      tags: ["Mentor", "Book", "Disagreement"],
      date: "2026-11-04",
      source: [
        { doc: "Mentor Guide 02 V2 · Meta Ads Setup", section: "11. Speed to lead", who: "Logan McKinney, Open Q&A 10/13/26" },
        { doc: "Mentor Guide 00 V2 · Master Index", section: "Principles that show up across calls, #9 Speed to lead, and speed in general", who: "Logan 10/13; Cam 9/17; Jason 8/18/26" },
        { doc: "9 New Calls study guide", section: "Pipeline, show rates and follow-up (Fixing no-shows); Fulfillment: Client lead handling", who: "Paul Snowman 7/28/26; Tayt Shelman 11/4/26; Rasta and Clayton 6/10 and 8/5/26" },
        { doc: "Mastery Guide Ch 19", section: "Speed to lead", who: "Oldroyd, McElheran & Elkington, HBR 2011; 2026 Meta lead-gen guides" },
        { doc: "Social Media Marketing Playbook for ZDub Media (10/31/26)", section: "Fact-check of the AI-generated tactics; Recommendations for ZDub Media #2", who: "Research playbook" }
      ],
      idea: `The single cheapest improvement in most local businesses is responding faster. Every mentor who touched lead handling said some version of it.

**Why it matters.** Logan (10/13): leads have usually called **2-3 competitors within hours**, so the owner must call fast. Jason (8/18): "money loves speed," and speed to lead is the biggest variable you don't control. The Mastery Guide cites a 2011 Harvard Business Review study: companies that tried to contact a web lead within an hour were roughly **seven times** as likely to qualify it as those that waited longer. 2026 Meta lead-gen guides say contact within **five minutes**.

**What it can do.** Tayt (11/4): an instant text to new leads took one of his garage door clients from **12% to 26% lead-to-booked**. Rasta and Clayton (6/10, 8/5): when clients get leads but don't close, set them up with a **call-within-five-minutes rule**.

**Where the mentors differ: does a text count?**

The newest research playbook (10/31/26) adds two things: make speed to lead a **client contract term** (5-15 minutes in business hours, with CRM sync), and **"Friday-only" lead follow-up is outdated**. Contact leads within minutes to hours, not at the end of the week.

The Mastery Guide's system does both a text and a call: an instant automated text with a booking link and a question, then a call within five minutes during business hours, with notifications routed to a phone, not just an inbox.`,
      keyPoints: [
        "Leads call 2-3 competitors within hours (Logan).",
        "Within an hour ≈ 7x more likely to qualify (HBR 2011); 2026 guides say 5 minutes.",
        "Instant text: 12% → 26% lead-to-booked for Tayt's client.",
        "Paul: under 60 seconds means a dial; texts don't count.",
        "Friday-only follow-up is outdated. Minutes, not days."
      ],
      why: "Most 'the leads were bad' complaints are really 'nobody called for two days.' Speed to lead protects ZDub's results and the client's money, and it's the easiest win to show on a report.",
      table: {
        head: ["Mentor", "Position", "Call"],
        rows: [
          ["Logan McKinney", "Workflow: Meta form submitted → instant SMS to the lead + notify the owner; then the owner must call fast", "10/13/26"],
          ["Tayt Shelman", "An instant text alone moved a garage door client from 12% to 26% lead-to-booked", "11/4/26"],
          ["Paul Snowman", "\"Speed to lead under 60 seconds means dialing. Texts and automations don't count.\" Call every booked lead to confirm", "7/28/26"],
          ["Rasta and Clayton", "Call-within-five-minutes rule, plus call recording you can review", "6/10 and 8/5/26"]
        ]
      },
      example: {
        title: "The secret shop that sells the fix",
        body: "The Workbook's answer key says the before-and-after secret shop is often the most persuasive thing you'll ever show a client: 'Last month it took 31 hours to hear back. Now it takes 40 seconds.' Submit a lead on a prospect's form, time the response, and you have a real number for your outreach and your first report."
      },
      practice: [
        {
          prompt: "Secret-shop three local businesses (Client Lab L19, step 2). Submit an inquiry the way a customer would and time the response.",
          fields: ["Business 1: how I inquired, time to first response, channel, what they said", "Business 2: how I inquired, time to first response, channel, what they said", "Business 3: how I inquired, time to first response, channel, what they said", "The outreach line I can write from this (with the real number)"],
          rubric: ["Inquiry was realistic (form, call or DM)", "Response time is measured, not guessed", "Notes whether a text, a call, or nothing came back", "Outreach line uses the real number without shaming the owner"]
        }
      ],
      today: { task: "Submit a test inquiry to PMT's own form or phone the way a student would. Time how long it takes to hear back and by what channel. Log it in the secret-shop tracker.", output: "PMT's real response time, logged", minutes: 15, suggested: false },
      check: [
        { q: "Why does Logan say the owner must call fast?", a: "Leads have usually called 2-3 competitors within hours." },
        { q: "What did Paul say about texts and automations for speed to lead?", a: "Under 60 seconds means dialing. Texts and automations don't count." },
        { q: "What does the 10/31/26 Social Playbook say about Friday-only lead follow-up?", a: "It's outdated. Contact leads within minutes to hours, not at the end of the week." }
      ]
    },
    {
      id: "fun-20",
      part: "followup",
      title: "Install the speed-to-lead workflow in GoHighLevel",
      minutes: 12,
      tags: ["Mentor", "Book", "Platform fact (re-check)"],
      date: "2026-10-13",
      source: [
        { doc: "Mentor Guide 02 V2", section: "11. Speed to lead", who: "Logan McKinney, 10/13/26" },
        { doc: "Mentor Guide 08 V2 · Fulfillment", section: "3. GoHighLevel setup (speed to lead)", who: "Logan McKinney, 10/13/26" },
        { doc: "Mentor Guide 07 V2", section: "6. Design and technical (privacy page, SMS opt-in)", who: "Logan McKinney, 9/30/26" },
        { doc: "Mastery Guide Ch 19", section: "Speed to lead (5-step system); Text-message consent", who: "Book synthesis" },
        { doc: "Mastery Workbook Ch 19", section: "Recall 19.12, 19.14; Client Lab L19 step 3", who: "Workbook" }
      ],
      alsoIn: ["Running the Agency tab (GoHighLevel setup)"],
      idea: `Logan's speed-to-lead build (10/13), step by step. Menus and costs change, so re-check them in GHL.

1. **A GHL sub-account for the client** (through Agency One/Paul or your own GHL).
2. **Buy a local-area-code number** (about $20).
3. **A2P 10DLC registration:** Settings > Phone System > Trust Center. It needs the legal business name, EIN, owner's phone and email, ID and selfie verification. About the 500-texts-per-month tier. Takes a few days. Logan has Claude in Chrome fill it out.
4. **The workflow.** Trigger: Meta form submitted. Action: instant SMS to the lead ("Thanks for reaching out, Dave will call you ASAP, or book a time here: [link]") **and notify the owner**.
5. **The owner must call fast.**
6. **Build lists** for later promos.

**The Mastery Guide's five-step system** wraps that workflow in a full cadence:
1. Instant automated text: friendly, personal, a booking link **and a question**.
2. A call within five minutes during business hours (notifications to a phone, not just an inbox).
3. A follow-up cadence: several attempts on day one and day two (mix call, text, email), then slower nurture.
4. Long-term nurture: monthly helpful content and occasional offers for everyone who didn't buy.
5. Close the loop: mark every lead's outcome in the CRM and send it back to Meta so ads optimize for real customers.

**Consent is not optional.** U.S. marketing texts need the recipient's prior express consent, a clear way to opt out, and compliance with carrier rules and the TCPA. Put consent language on forms, honor "STOP" immediately, never buy lists, and check current requirements before launching. Logan (9/30) said the privacy page matters because you'll be texting leads; get the SMS opt-in right so the account doesn't get flagged.

The Mastery Guide's advice for every ZDub client: even if the public offer stays simple, make sure there's at least an instant text and a 5-minute call rule **before ads start**, and keep a human in the loop for real conversations.`,
      keyPoints: [
        "Sub-account → local number → A2P 10DLC → form-submitted workflow → owner calls.",
        "The instant text includes a booking link and a question.",
        "Day-one and day-two cadence, then slower nurture.",
        "Send outcomes back to Meta.",
        "Consent language on the form; honor STOP; never buy lists."
      ],
      why: "This workflow is the piece of follow-up ZDub can install itself. It should be live before PMT's or any client's ads go on.",
      example: {
        title: "PMT's instant text (from the Mastery Guide)",
        before: "Thank you for your submission. A representative will contact you.",
        after: "Hi Sam, thanks for asking about the beginner class! Which town works best for you: Woodland, Cloverdale, or Eureka? Here's the schedule: [link]",
        body: "Friendly, personal, a booking link, and a question that invites a reply. The owner gets notified at the same moment so someone can call within minutes."
      },
      practice: [
        {
          prompt: "Write the full speed-to-lead install for one client (Client Lab L19, step 3).",
          fields: ["Instant text to the lead (with link and a question)", "Owner notification text", "Day 1 cadence (times and channels)", "Day 2 cadence (times and channels)", "Consent line for the form", "Who calls, and their 5-minute rule during business hours"],
          rubric: ["Instant text is personal and asks a question", "Owner notification goes to a phone", "Day 1-2 mixes call, text and email", "Consent language is on the form", "A named human is responsible for the call"],
          model: "Day 1: instant text at 0 min; call at 5 min; second call + text at 2 hours; email with the schedule that evening. Day 2: morning call; afternoon text ('Still want a seat for Saturday?'). Then the nurture sequence."
        }
      ],
      today: { task: "Build the form-submitted → instant SMS + owner-notify workflow in a sub-account you control (your ZDub or wholesaling account is a safe place to practice), then submit a test lead from your phone and time it.", output: "A working workflow and a timed test lead", minutes: 45, suggested: true },
      check: [
        { q: "List the five steps of the speed-to-lead system.", a: "1) Instant text with a booking link and a question. 2) A call within five minutes in business hours. 3) Day-one and day-two follow-up cadence, then slower nurture. 4) Long-term nurture for everyone who didn't buy. 5) Close the loop: log outcomes in the CRM and send them back to Meta." },
        { q: "What does A2P 10DLC registration require, per Logan?", a: "Legal business name, EIN, owner's phone and email, ID and selfie verification. It takes a few days." },
        { q: "What are the text-message consent basics in the U.S.?", a: "Prior express consent, a clear opt-out, carrier rules and TCPA compliance, consent language on forms, honoring STOP immediately, and never buying lists." }
      ]
    },
    {
      id: "fun-21",
      part: "followup",
      title: "Nurture: a CRM and a sequence, so no lead dies of neglect",
      minutes: 12,
      tags: ["Book", "Mentor"],
      date: "2026-08-26",
      source: [
        { doc: "Mastery Guide Ch 19", section: "CRM, email, and text: the nurture machine; The nurture sequence: what to send", who: "Allan Dib, Lean Marketing; Seth Godin; book synthesis" },
        { doc: "Mastery Workbook Ch 19", section: "Recall 19.10, 19.13; Drill D19.4; Client Lab L19 step 4", who: "Workbook" },
        { doc: "Mentor Guide 00 V2 · Master Index", section: "Principles, #12 Follow up across channels", who: "Clayton Bell, 8/26/26" },
        { doc: "Social Media Marketing Playbook for ZDub Media (10/31/26)", section: "Fact-check (Friday-only lead follow-up is outdated)", who: "Research playbook" }
      ],
      idea: `Speed gets you the first conversation. Nurture keeps you in touch with the majority who aren't ready yet.

**The CRM is the hub.** In *Lean Marketing*, Allan Dib calls the CRM the strategic hub of marketing, not just a contact list. Every contact moves through **stages**, carries **tags**, and triggers **automations** based on what they did. The Workbook's working setup for a client:
- **Stages:** lead → contacted → booked → won → lost
- **Tags:** source, town, service

**The six-message nurture sequence** for leads who didn't buy right away:
1. **Welcome and quick win:** deliver the lead magnet plus one useful tip, within minutes.
2. **Story:** a customer like them who had the same worry (proof plus identification).
3. **Objection:** answer the biggest reason people hesitate.
4. **How it works:** the plan in three steps.
5. **Offer:** a clear, honest reason to act now (real scarcity or timing only).
6. **Ongoing:** monthly value, occasional offers, seasonal reminders.

Each message has **one clear action**, and every message should pass Godin's test: anticipated, personal, relevant.

**Diagnose a weak email with Dib's four stages:** it must be **delivered** (not spam-foldered), **opened** (subject line), **read** (interesting, readable) and **actioned** (one clear CTA). Good opens but no clicks? The body or the CTA failed, not the subject line.

**Across channels.** Clayton (8/26): follow up by email, call and in person; never let a business "live and die" on one touch. And per the 10/31/26 Social Playbook, batching follow-up into a Friday block is outdated; the responses happen in minutes to hours, and nurture runs on its own schedule.`,
      keyPoints: [
        "CRM stages: lead → contacted → booked → won → lost; tags: source, town, service.",
        "Six messages: quick win, story, objection, how it works, offer, ongoing.",
        "One clear action per message; only real scarcity.",
        "Delivered → opened → read → actioned: find the stage that broke.",
        "Mix channels; never rely on one touch."
      ],
      why: "Most of a client's leads won't book this week. A nurture sequence ZDub installs once keeps producing sales from leads the client already paid for.",
      example: {
        title: "PMT nurture, first lines",
        body: "1. 'Here's your pre-ride checklist, plus the one thing every first-timer forgets to bring.' 2. '[Real student, with permission] hadn't ridden in 15 years. Here's how the first morning went.' 3. 'Nervous about dropping the bike? Here's what actually happens in hour one.' 4. 'Three steps: pick a date, show up, ride away confident.' 5. 'Saturday's Woodland class has 4 seats left.' (only if true) 6. Monthly: riding tips, new class dates, a seasonal note before spring."
      },
      practice: [
        {
          prompt: "Drill D19.4, Write the nurture sequence for one client. First line for all six; full text for messages 1-3.",
          fields: ["1. Welcome + quick win (full text)", "2. Story (full text)", "3. Objection (full text)", "4. How it works (first line)", "5. Offer (first line)", "6. Ongoing (first line)", "CRM stages and tags I'll set up"],
          rubric: ["Message 1 delivers a real quick win", "Message 2 uses a real customer story", "Message 3 answers the top objection directly", "Each message has one action", "Offer uses only real scarcity or timing"]
        }
      ],
      today: { task: "Write PMT's nurture messages 1-3 in full and set up (or sketch) the CRM stages and tags: lead → contacted → booked → won → lost; source, town, service.", output: "Three finished nurture messages and a stage/tag list", minutes: 40, suggested: false },
      check: [
        { q: "An email gets good opens but almost no clicks. Which of Dib's stages failed?", a: "Read or actioned: the body or the call to action." },
        { q: "List the six messages of the nurture sequence.", a: "Welcome and quick win; story; objection; how it works; offer; ongoing monthly value." },
        { q: "What CRM stages does the Workbook use for a client?", a: "Lead → contacted → booked → won → lost, with tags for source, town and service." }
      ]
    },
    {
      id: "fun-22",
      part: "followup",
      title: "Three sales: the booking, the show-up, the yes",
      minutes: 12,
      tags: ["Mentor", "Disagreement"],
      date: "2026-10-30",
      source: [
        { doc: "9 New Calls study guide", section: "Pipeline, show rates and follow-up (You make three sales; Cam's pre-call sequence; Fixing no-shows)", who: "Cam 10/29/26; Paul Snowman 7/28/26" },
        { doc: "9 New Calls study guide", section: "Follow-up after the call (Tayt's 'hammer down')", who: "Tayt Shelman 10/30/26" },
        { doc: "Mentor Guide 01 V2 · Sales Calls and Closing", section: "11. No-shows", who: "Calum Tresham 10/6/26; Noah Wyman 10/7/26; Logan 10/9/26" }
      ],
      alsoIn: ["Sales tab (no-shows and the call itself)"],
      idea: `Cam (10/29) frames every booked call as **three sales**: sell them on booking, sell them on showing up, then sell them on working with you. Most agencies only work on the third.

**Cam's pre-call sequence:**
1. **Within a minute of booking**, a text from your own number. His: "Hey Alex, this is Cam from Genesis Media. Just saw your application come through. Super stoked for our call tomorrow. If you don't mind, could you send over your social profiles and website, plus any brands or content you like. That way I can tailor our call a little bit more to you." The goal is a **reply**, so they're invested before the call.
2. **Research them:** website, Instagram, and the Meta Ads Library (search their page name) to see if they're running ads. Send a **voice note** mentioning what you found. It proves you're a real person who did the work.
3. **10 minutes before:** a short personal voice note saying you went through their stuff and built the call around it.
4. **About 3 minutes before to 2 minutes after the start:** "Do you need the link, or do you have it?"

Tayt's "hammer down" (10/30): once someone books, keep putting short content in front of them so they already know you on the call.

**What causes no-shows? Two mentor views:**
- **Paul (7/28):** no-shows usually mean the **offer didn't build enough intrigue**. Put the guarantee in the lead form headline ("We'll get you X in Y time"). Call every booked lead to confirm.
- **Calum (10/6):** no-shows are usually an **authority problem, not a reminder problem**. Get a text confirmation of the time; only after they confirm, send an optional Loom ("if you get time, great"). A mandatory pre-watch causes embarrassed no-shows. Third touch: call an hour before.

Others add tools rather than a cause: Noah (10/7) runs a short triage call ("Would there be any reason that time wouldn't work?") and rebooks to a time they're sure of; Logan (10/9) built reminders, automations and a post-booking video.

**No-shows aren't dead** (Paul). Keep calling them weekly without spamming, each time with a new reason (a new guarantee, a new result).`,
      keyPoints: [
        "Three sales: book, show, buy.",
        "Text within a minute of booking; ask for something so they reply.",
        "Research in the Ads Library, then send a voice note about it.",
        "Voice note 10 minutes before; link check at start time.",
        "No-shows get a weekly call with a new reason, not silence."
      ],
      why: "Every no-show is a wasted ad dollar and a wasted hour. For ZDub's own discovery calls and for clients' booked appointments, the show-up is a sale you can engineer.",
      table: {
        head: ["Mentor", "Main cause of no-shows", "Fix"],
        rows: [
          ["Paul (7/28)", "The offer didn't build enough intrigue", "Guarantee in the form headline; call every booked lead to confirm"],
          ["Calum (10/6)", "An authority problem, not a reminder problem", "Text confirmation first; optional Loom only after; call an hour before"]
        ]
      },
      example: {
        title: "ZDub's version of Cam's first text",
        body: "'Hey Mike, this is Zach from ZDub Media. Just saw your booking come through, looking forward to our call Thursday. Could you send over your website and Instagram, plus any ads you've run before? That way I can build the call around your business.' Then look them up in the Meta Ads Library and send a 30-second voice note about one thing you noticed."
      },
      practice: [
        {
          prompt: "Write Cam's full pre-call sequence for a ZDub discovery call with a Sacramento roofer.",
          fields: ["Text within 1 minute of booking", "What I'll check (website, Instagram, Ads Library) and the voice note script", "10-minutes-before voice note script", "Start-time link check text", "My no-show plan: next 3 weekly touches, each with a new reason"],
          rubric: ["First text asks for something, so they reply", "Voice note references something specific you found", "Messages sound like you, not a template", "No-show touches each bring a new reason"]
        }
      ],
      today: { task: "Set up Cam's sequence for your own booked calls: save the booking text as a template, a 4-item research checklist, and calendar reminders for the 10-minute voice note and the link check.", output: "Templates and reminders ready for the next booked call", minutes: 30, suggested: true },
      check: [
        { q: "What are Cam's three sales?", a: "Sell them on booking, sell them on showing up, then sell them on working with you." },
        { q: "What's the goal of the text within a minute of booking?", a: "To get a reply, so they're invested before the call (Cam asks for their socials and website)." },
        { q: "How do Paul and Calum differ on the cause of no-shows?", a: "Paul: the offer didn't build enough intrigue. Calum: it's an authority problem, not a reminder problem." }
      ]
    },
    {
      id: "fun-23",
      part: "followup",
      title: "\"The money lives in the follow-up\": after the call",
      minutes: 12,
      tags: ["Mentor"],
      date: "2026-10-29",
      source: [
        { doc: "9 New Calls study guide", section: "Pipeline, show rates and follow-up; Follow-up after the call; Keeping it organized", who: "Cam 10/29/26; Noah Wyman 10/21/26" },
        { doc: "Mentor Guide 00 V2 · Master Index", section: "Principles, #12 Follow up across channels", who: "Clayton Bell, 8/26/26" }
      ],
      idea: `> "The money lives in the follow up. Especially with B2B." (Cam, 10/29)

Few B2B deals close on the first touch, and some close a month or more later. Always leave a call knowing **why they didn't buy** and **what the next step is**. Then follow up until you get an answer.

**Cam's tools (10/29):**
- **Voice notes** are "insane" for follow-up and re-engagement.
- **Curiosity texts:** "Just wanted to check in, see if that email ever made it through. I don't know if it maybe came to your junk."
- **Double-dial.** If someone is dodging you, call from a different number. How hard you push depends on the relationship.
- **The proposal flow:** draft the doc, cut it down to numbers, guarantee, scope and terms; record a Loom walking through it; then send by email and text asking for 30 minutes.

**Noah's two-option voice note (10/21):** ask which makes more sense as a next step, another call or a Loom breaking down what they can make. "Just give me, type like 1 or 2 below." Either answer moves it forward.

**How long?** Cam: "Until they either close or get pissed off. If you believe in your service, like, that's what you should be doing." Noah: until you get a yes or a no.

**Keep it organized (Cam).** He labels every lead **booked, follow-up, or DQ**, and stops chasing rude price-shoppers. He runs the pipeline through an AI agent connected to his calendar, texts, email and call recordings; each morning it tells him who's owed what, who no-showed, and who to follow up with. You can start with a simple sheet and the same three labels.

**Across channels.** Clayton (8/26): email, call, in person. Never let a deal "live and die" on one touch.

**California note.** Cam is in Arizona, a one-party-consent state, and said he's "pretty sure" California needs both parties to consent to recording. Zach is in California, so tell prospects you're recording before you record.`,
      keyPoints: [
        "Leave every call knowing why they didn't buy and the next step.",
        "Voice notes, curiosity texts, double-dials.",
        "Proposal: trim to numbers, guarantee, scope, terms; walk it in a Loom.",
        "Offer two next steps: '1 or 2?'",
        "Follow up until yes or no. Label: booked, follow-up, DQ."
      ],
      why: "ZDub's first clients will mostly come from second, third and fifth touches. A follow-up habit is the difference between a pipeline and a pile of 'let me think about it.'",
      example: {
        title: "Noah's two-option voice note, ZDub version",
        body: "'Hey Dana, Zach here. Loved our chat about filling your slow months. Two options for next steps: 1, we jump on a quick 15-minute call Thursday, or 2, I send you a short Loom showing what the numbers could look like for your shop. Just type 1 or 2.' Either reply moves the deal forward."
      },
      practice: [
        {
          prompt: "A Sacramento HVAC owner said 'let me think about it' at the end of a discovery call. Write your next five touches over two weeks.",
          fields: ["Why they didn't buy (what I learned) and the agreed next step", "Touch 1 (same day): channel + message", "Touch 2: channel + message", "Touch 3 (curiosity text)", "Touch 4 (two-option voice note)", "Touch 5: channel + message, and when I'd label them DQ"],
          rubric: ["Uses at least three channels", "Each touch adds something new (a number, a Loom, an idea)", "Includes a two-option ask", "Clear rule for when to stop (DQ) vs keep going"]
        }
      ],
      today: { task: "List every open prospect and past conversation in your follow-up log, label each booked / follow-up / DQ, and send one follow-up (a voice note if you can) to every 'follow-up' today.", output: "A labeled pipeline and at least one follow-up sent per open prospect", minutes: 40, suggested: false },
      check: [
        { q: "How long should you follow up, per Cam and Noah?", a: "Cam: until they close or get annoyed. Noah: until you get a yes or a no." },
        { q: "What's in Cam's proposal flow?", a: "Draft the doc, cut it to numbers, guarantee, scope and terms, record a Loom walking through it, then send by email and text asking for 30 minutes." },
        { q: "What three labels does Cam use for leads?", a: "Booked, follow-up, DQ." }
      ]
    },
    {
      id: "fun-24",
      part: "followup",
      title: "Client lead handling: when leads come in but don't close",
      minutes: 12,
      tags: ["Mentor", "Book"],
      date: "2026-11-04",
      source: [
        { doc: "9 New Calls study guide", section: "Fulfillment: Client lead handling; Research and judgment (look at their sales process)", who: "Rasta and Clayton 6/10 and 8/5/26; Tayt Shelman 11/4/26; Clayton Bell 7/28 and 8/5/26" },
        { doc: "Mentor Guide 02 V2", section: "10. Tracking results and ROI (promise what you control)", who: "Cam, 10/15/26" },
        { doc: "Mastery Workbook Ch 22", section: "Answer key, Drill D22.3 (projection in ranges)", who: "Workbook" }
      ],
      alsoIn: ["Running the Agency tab (When results disappoint)"],
      idea: `Sometimes the ads work and the client still says "it's not working." Usually the leak is between the lead and the sale, inside the client's business.

**What the mentors do when clients get leads but don't close:**
- **Set them up with CRM pipelines, a call-within-five-minutes rule, and call recording you can review** (Rasta and Clayton, 6/10 and 8/5).
- **Look at their sales process.** Turn on call recording in their CRM and listen to the calls (Clayton, 8/5).
- **Text instantly.** One of Tayt's garage door clients went from 12% to 26% lead-to-booked with an instant text (11/4).
- **Check financing partners** when leads keep failing credit (Clayton, 7/28).

**Protect yourself in the promise.** Cam (10/15): make your promise something fully in your control, like a number of leads in two weeks, not closed customers. The client controls follow-up and closing.

**Why this matters so much: the math.** The Workbook's projection drill runs $1,500/month of ads through three cases:
- Conservative: $40 CPL → about 37 leads × 50% contacted × 20% close ≈ **4 customers**
- Expected: $25 CPL → 60 leads × 70% × 30% ≈ **13 customers**
- Strong: $15 CPL → 100 leads × 85% × 40% = **34 customers**

The answer key's point: much of that range comes from **contact rate and close rate**, which are the client's follow-up and sales, not the ads. That's why speed to lead belongs inside ZDub's offer.

**How to raise it without blaming.** Show the data: response times from a secret shop, the share of leads never called, a recorded call. Then offer the fix (instant text, the five-minute rule, a simple pipeline). Trust is what lets you tell a client hard things like "slow lead calling is hurting results."`,
      keyPoints: [
        "Leads but no sales? Look inside the client's follow-up and sales.",
        "Install: CRM pipeline, 5-minute call rule, call recording to review.",
        "Promise what you control (leads), not what they control (closing).",
        "Contact rate and close rate swing results more than CPL.",
        "Raise it with data, then offer the fix."
      ],
      why: "PMT and every trades client will judge ZDub on sales, not leads. Owning lead handling (or at least measuring it) is how ZDub keeps clients when the ads are doing their job.",
      example: {
        title: "Same ads, two very different months",
        body: "Two clients both get 60 leads from $1,500. Client A texts instantly, calls within five minutes and reaches 70%; at a 30% close rate that's about 13 customers. Client B calls back the next day and reaches half; at 20% that's about 6. Same ads, same cost per lead, less than half the customers. The fix for B isn't new creative; it's lead handling."
      },
      practice: [
        {
          prompt: "Write a lead-handling audit and the script you'd use to raise it with a client whose leads aren't closing.",
          fields: ["What I'll measure (response time, % contacted, booked, closed)", "Where I'll get the data (CRM, call recordings, secret shop, lead CSV)", "The fix I'll offer (specific steps)", "How I'll say it without blaming (2-3 sentences)", "What my promise to this client covers, and what it doesn't"],
          rubric: ["Measures contact rate and close rate, not just CPL", "Uses real data sources", "Fix is concrete (instant text, 5-minute rule, pipeline, recording)", "Script points to data, not blame", "Promise is limited to what ZDub controls"]
        }
      ],
      today: { task: "Ask PMT three questions: who answers new leads, how fast, and what happens if nobody picks up. Write the answers and one fix to propose.", output: "PMT's lead-handling snapshot with one proposed fix", minutes: 20, suggested: false },
      check: [
        { q: "What three things did Rasta and Clayton set up for clients whose leads don't close?", a: "CRM pipelines, a call-within-five-minutes rule, and call recording you can review." },
        { q: "What should your promise to a client be based on, per Cam?", a: "Something fully in your control, like a number of leads in two weeks, not closed customers." },
        { q: "In the Workbook projection drill, where does much of the range come from?", a: "Contact rate and close rate: the client's follow-up and sales, not the ads." }
      ]
    }
  ]
});
