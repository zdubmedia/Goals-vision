HUB.tab({
  id: "book-making-ads-work",
  kind: "book",
  title: "Making Ads Work",
  short: "Making Ads Work",
  icon: "book",
  tagline: "The Wizard of Ads system in 77 pages: what to say, who to say it to, how often, and how much to spend. Roy H. Williams, compiled by Craig Arthur, 2004.",
  intro: "A study path through all 26 chapters of *Making Ads Work: A Wizard of Ads Guide* (3rd edition, May 2004), Wizard of Ads Partner Craig Arthur's compact field manual of Roy H. Williams' writings, Monday Morning Memos and the Partners' working rules. Each lesson covers one chapter (the longest ones, like the Top 12 Mistakes, are split into two or three lessons), with the budget formula, the transactional vs. relational case study and the scheduling rules worked through in full and translated to Meta ads, PMT and Sacramento trades. Read the listed pages in your PDF alongside each lesson; the page numbers match.",
  parts: [
    { id: "p1", title: "Part 1 · Why Ads Waste Money, and Who You're Really Selling To (Ch 1–6)" },
    { id: "p2", title: "Part 2 · How Advertising Really Works: Message, Mind and Brand (Ch 7–12)" },
    { id: "p3", title: "Part 3 · Media, Money and the People Behind the Ads (Ch 13–17)" },
    { id: "p4", title: "Part 4 · The 12 Mistakes and the Scheduling Rules (Ch 18–20)" },
    { id: "p5", title: "Part 5 · Persuasion, Failure, Commitment and the Wizards Themselves (Ch 21–26)" }
  ],
  lessons: [
    {
      id: "maw-001",
      part: "p1",
      chapter: 1,
      chapterTitle: "Advertising Isn’t Working Like It Should",
      pages: "6–7",
      title: "Advertising Isn't Working Like It Should: count the waste, then start from a blank sheet",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 1 · Advertising Isn’t Working Like It Should · pp. 6–7", who: "Roy H. Williams & Craig Arthur" }],
      quotes: [
        { text: "It’s not working because in traditional advertising wisdom, tradition far outweighs wisdom.", page: "6" },
        { text: "Thinking outside still leaves you attached.", page: "6" }
      ],
      idea: "The guide opens with an accusation and an exercise. The accusation: most advertising underperforms not because owners are lazy, but because the industry runs on habit. Decisions get made on irrelevant information, then pushed through unwritten rules that, Roy says, have never worked and never will. His fix is stronger than the usual “think outside the box.” If you only step outside the box, you're still tied to it. Kick it away entirely.\n\n**The waste exercise (p. 6).** Before learning anything new, put a number on what the old way costs:\n\n1. Add up every advertising dollar from the last 12 months: radio, TV, newspaper, flyers, Yellow Pages, brochures, internet, plus printing and production.\n2. Estimate honestly what percentage was wasted or didn't work.\n3. Multiply. The guide's example: $90,000 × 70% = $63,000 thrown away.\n\nThe note under the exercise is the sting: across all business categories, wastage runs between **50 and 90 percent**. The typical owner isn't trimming fat; most of the budget is doing nothing.\n\n**The blank sheet (p. 7).** Having made you queasy, the guide asks a favor: leave your assumptions, training and prejudices about advertising at the door while you read. You can pick them back up at the end if you still want them. The promise in return is growth by *multiples*, not percentages, a claim the book backs later with a client who grew 43-fold (Chapter 7) and qualifies in Chapter 26 (multiples happen for owner-operated businesses of roughly $1–20 million in sales).\n\nTwo framing lines bookend this. The title page (p. 1) quotes Roy saying he never studied selling, a field he associates with con men; he studied how to make ads work. And the Steinbeck epigraph (p. 7) says readers take from a book what they bring to it, a hint that this short guide rewards slow, active reading.\n\n**What's really going on:** the chapter uses a persuasion move on you, the reader. Quantifying the pain first creates the motivation to change. Notice it, because it's exactly what Zach should do with a prospect before pitching anything. Chapter 25 returns to it from the agency side: “What are you getting for your money?”",
      keyPoints: [
        "Most ad budgets are 50–90% waste; the cause is tradition and unwritten rules, not lack of effort.",
        "Quantify the waste first: last 12 months' total spend × honest % wasted = dollars lost.",
        "Don't think outside the box; leave it. Unlearn before you relearn.",
        "The goal is growth by multiples, which takes a different way of thinking, not a tweak.",
        "Naming the cost of the status quo is the first step of persuasion, for clients as much as for readers."
      ],
      why: "Every prospect Zach meets already spends on marketing (Yelp, mailers, boosted posts, a past agency). Putting a dollar figure on the waste turns “maybe later” into a real decision and reframes ZDub's fee as a fix for money already leaking out.",
      example: {
        title: "The waste math on a Sacramento HVAC discovery call",
        before: "“We run Meta ads for home service companies. Packages start at $1,500 a month. Want to see some results?”",
        after: "“Let's add up last year first: $14,000 on Yelp, $6,000 on Val-Pak, $4,800 in boosted posts, $3,000 for a radio remnant buy. That's $27,800. What share of it brought in jobs you can actually name? ... You said maybe 30%. So roughly $19,500 did nothing. Let's talk about getting that back before we talk about spending more.”",
        body: "Roy's exercise turns a vague feeling (“marketing doesn't really work for us”) into a hard number. The number frames the rest of the call: ZDub isn't an added cost, it's a way to stop the leak. Always use the owner's own estimate, never an inflated one of yours."
      },
      practice: [
        {
          prompt: "Dissect it: take apart Roy's opening argument.",
          fields: [
            "In your own words, why does Roy say tradition beats wisdom in advertising? Name one unwritten rule you've watched local businesses follow.",
            "Why make the reader calculate the waste before teaching anything? What does it do psychologically?",
            "Argue the other side: when could a 50–90% waste estimate be unfair or misleading?"
          ]
        },
        {
          prompt: "Apply it: run the waste exercise on PMT or a real prospect and write the opener you'd use on a call.",
          fields: ["Business", "12-month spend by channel", "Estimated % wasted and dollars wasted", "Your 3-sentence opener"],
          rubric: [
            "Counts every channel plus printing and production, not just media",
            "Uses the owner's own waste estimate, not yours",
            "Multiplies to a single dollar figure",
            "The opener asks before it pitches and frames the fee against money already lost"
          ],
          model: "Business: Pacific Motorcycle Training (estimates). Spend: Meta ads $9,600, Google Ads $4,200, Yelp $2,400, flyers $600, photo/video production $1,500 = $18,300. If about 40% didn't move registrations (unfocused boosts, Yelp), waste ≈ $7,300. Opener: “Last year about $18,000 went to marketing. By your own read, maybe $7,000 of it didn't fill a single seat. Before we add a dollar, let's find out which $7,000 that was and move it to what fills Saturdays.”"
        }
      ],
      today: { task: "Pull the last 12 months of PMT's (or ZDub's own) marketing spend from statements and run Roy's three-step waste math: total, honest waste %, wasted dollars.", output: "A 3-line waste calculation saved in your notes", minutes: 20 },
      check: [
        { q: "What are the three steps of the waste exercise?", a: "Total all ad spend from the last 12 months (media, printing, production); estimate the percentage wasted; multiply to get wasted dollars (e.g., $90,000 × 70% = $63,000)." },
        { q: "What range of wastage does the guide say is typical across categories?", a: "Between 50 and 90 percent." },
        { q: "Why does Roy reject merely “thinking outside the box”?", a: "Thinking outside it still leaves you attached; dramatic improvement only comes when you disconnect from the old way altogether." }
      ]
    },
    {
      id: "maw-002",
      part: "p1",
      chapter: 2,
      chapterTitle: "The Three Worlds of Business",
      pages: "8–9",
      title: "The Three Worlds of Business: ads open the door, the experience keeps the customer, the owner's chair shapes both",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 2 · The Three Worlds of Business · pp. 8–9", who: "Roy H. Williams" }],
      quotes: [
        { text: "Think about the people in your city who don’t do business with you: Is it because they don’t know about you? Or is it because they do?", page: "8" },
        { text: "Don’t expect advertising to fix problems inside your door.", page: "8" }
      ],
      idea: "Roy splits every business into three worlds, each with its own job and its own failure mode.\n\n**1. The World outside Your Door.** This is reputation: what people in your city expect of you, what they assume, how well they actually know you, and how much of what they “know” is true. It's where advertising lives and where media dominance is won by you or by a competitor. The opening question is brutal on purpose: the people who don't buy from you, is it because they've never heard of you, or because they have? Success starts out here, but it doesn't end here.\n\n**2. The World inside Your Door.** This is the customer's experience, the place where you either deliver on the bold promises in your ads or don't. Roy lists the senses: what do eyes, ears, nose and skin pick up? And he draws a hard line: whether the customer walks in, phones or contacts you online, **advertising's job is finished the moment contact is made.** Everything after that is on the business. If the experience is weak, fix it; don't buy more ads to cover it.\n\n**3. The World of the Executive Office.** Roy's metaphor is the earthquake. “Businessquakes” start in the owner's chair and ripple outward through every department: whom to hire, what to pay them, where to locate, the hours, pricing, merchandising, staff training and motivation. Some quakes create a brilliant future; some end in bankruptcy. Either way, the quality of decisions made in that chair eventually shows up in long-term profit. You can read an owner's vision just by visiting the business.\n\n**The order matters.** The ripples run owner → experience → advertising. Ads are the last ring, the place where a business's own story finally gets told. That's why the chapter closes with **Uncovery: digging for the diamond.** Every business has a story that is uniquely its own, but you will never find it by copying someone else's success. You sift through a lot of dirt for one nugget of truth, then tell it with everything you've got. The guide's WizardSword term for that nugget is **the Sword in the Stone**: the focal idea everything revolves around, the standard you won't compromise, the story unique to your business. Chapter 12 turns Uncovery into a full checklist, and Chapter 15 hands world 2 (“Personal Experience”) to the owner alone.",
      keyPoints: [
        "World outside your door = reputation and advertising; ask whether non-customers don't know you, or do.",
        "World inside your door = the experience; advertising's job ends the moment the customer makes contact.",
        "Never use ads to cover a broken experience. Fix it.",
        "World of the executive office = the owner's decisions, which ripple out into experience and finally into the ads.",
        "Your Sword in the Stone is the one true story unique to your business; you find it by digging, not imitating."
      ],
      why: "ZDub only controls world 1, but its results depend on worlds 2 and 3. Diagnosing the phone answer, the booking page and the owner's decisions before launching ads protects ZDub's results and reputation.",
      example: {
        title: "PMT: where the ad's job ends",
        before: "Ad: “Get your M1 this month. Classes every weekend.” Reality: the booking page shows only two weekends with open seats, the phone goes to a full voicemail box, and confirmation emails arrive two days later.",
        after: "Ad stays the same, but first: the booking page shows live seat counts, a text-back answers missed calls within 5 minutes, and the confirmation email arrives instantly with a “what to bring” checklist. Then spend goes up.",
        body: "In PMT's world, “contact” is the click on Register or the phone call. Everything after it (the page, the call, range day, the instructor's tone) is world 2. If ZDub scales ads into a leaky world 2, the ads get blamed for a world-2 problem. The owner's choices about class schedule and staffing (world 3) decide how many promises world 2 can keep."
      },
      practice: [
        {
          prompt: "Dissect it: work through the three worlds.",
          fields: [
            "In your own words, what is Roy claiming about where advertising's responsibility ends?",
            "Pick a local business you know. Is its problem in world 1, 2 or 3? What's the evidence?",
            "Argue the other side: when can great advertising partly make up for a mediocre experience, and for how long?"
          ]
        },
        {
          prompt: "Apply it: audit a ZDub prospect across all three worlds before you pitch.",
          fields: ["Prospect", "World outside the door (reputation, reviews, visibility)", "World inside the door (what happens after contact)", "World of the executive office (owner decisions behind it)", "Your verdict: ready for ads, or fix first?"],
          rubric: [
            "Answers Roy's opening question: do non-customers not know them, or know them?",
            "Traces at least one experience problem back to an owner decision",
            "Identifies the exact moment the ad's job ends for this business",
            "Gives a clear go / fix-first decision"
          ],
          model: "Prospect: a Roseville detailing shop. Outside: 4.3 stars, 61 reviews, three mention “hard to get a hold of.” Inside: contact = the call or the online form; I submitted the form and heard back after 26 hours; the shop smells great and the work looks excellent. Executive office: owner details cars himself all day and won't hire a front-desk person. Verdict: fix first. Before ads, add an auto text-back and a booking link; offer to run ads only once response time is under an hour. Ads would accelerate the “hard to reach” reputation."
        }
      ],
      today: { task: "Mystery-shop PMT's world inside the door: register interest through the site and call the main number at 6 pm. Time every response and note every sensory impression.", output: "A timed 5-point experience log with one fix", minutes: 20 },
      check: [
        { q: "According to Roy, when is advertising's job finished?", a: "The moment the customer makes contact, whether in person, by phone or online." },
        { q: "What is a “businessquake”?", a: "A decision made in the owner's chair that ripples outward through the company (hiring, pay, location, hours, pricing, training) until the business fits the owner's vision, for better or worse." },
        { q: "What does the WizardSword term “Sword in the Stone” mean?", a: "The focal idea, the axis everything revolves around, the standard you won't compromise; the story unique to your business." }
      ]
    },
    {
      id: "maw-003",
      part: "p1",
      chapter: 3,
      chapterTitle: "Transactional vs. Relational Shoppers (the two modes)",
      pages: "10–11",
      title: "Transactional vs. Relational Shoppers: what to say depends on which mode the buyer is in",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 3 · Transactional vs. Relational Shoppers · pp. 10–11", who: "Roy H. Williams" }],
      quotes: [
        { text: "Every person has a transactional mode and a relational mode of shopping.", page: "10" },
        { text: "Their only fear is of making a poor choice.", page: "10" }
      ],
      idea: "The chapter starts with the question every owner asks: what's the most important thing to put in an ad? Price, selection, friendly service, hours, brands, guarantees, testimonials, “family-owned”? Roy's answer: it depends on which **mode** the shopper is in, because every person has both.\n\n**Transactional mode (five traits):**\n1. Focused only on today's purchase; little thought of future ones.\n2. Only fear: paying more than they had to. They want price and value.\n3. They *enjoy* comparing and negotiating and will visit several stores.\n4. They do their own research and don't need an expert. (Consumer Reports exists for them.)\n5. Because they enjoy it, they don't count shopping time as part of the price.\n\n**Relational mode (six traits):**\n1. Today's purchase is one in a long series; they're shopping less for a product than for **a place to buy it**.\n2. Only fear: making a poor choice. They buy as soon as they feel confident, so the question is whether your store and staff give them that confidence.\n3. They dislike shopping and haggling.\n4. They're looking for an expert they can trust.\n5. They count their time as part of the price.\n6. Once they've found “the right place,” they're very likely to come back.\n\n**The crucial twist (p. 11):** these aren't two kinds of people. You are transactional in some categories and completely relational in others (think of what you'd shop around for versus where you'd just go back to your guy). Merchants misread the market because transactional shoppers are *loud*: they visit everyone, ask lots of questions and negotiate, so every salesperson meets lots of them. Relational shoppers quietly walk in, buy and leave. Roy's conclusion: more purchases are actually made in relational mode, even though the sales floor feels transactional.\n\n**Why it matters for message:** the two modes need opposite ads. A transactional ad answers “Is this the cheapest?” A relational ad answers “Is this the right place, and can I trust these people?” Most businesses, intentionally or not, write to one mode. The next lesson (the case study) shows with numbers why the relational one is usually more profitable, and Chapter 6 adds that the purely price-driven customer can never be kept.",
      keyPoints: [
        "Everyone shops in both modes; which one depends on the category and the moment.",
        "Transactional: fears overpaying, enjoys comparing, does own research, doesn't count time.",
        "Relational: fears a poor choice, wants a trusted expert, counts time as cost, buys once confident and returns.",
        "Transactional shoppers are visible and loud; relational shoppers quietly make more of the purchases.",
        "The “right” ad content depends on the mode you're targeting: price proof vs. confidence and trust."
      ],
      why: "Most of ZDub's clients sell things people buy relationally: a first motorcycle course, a roof, an HVAC system, a dentist. Writing price ads for relational buyers wastes the budget and attracts the worst customers.",
      example: {
        title: "PMT: transactional ad vs. relational ad",
        before: "“Lowest price motorcycle class in Sacramento! $X off this weekend only. Book now before seats run out!”",
        after: "“Nervous you'll be the only one who's never ridden? Most of our students are. Small groups, patient instructors, and bikes and helmets provided, so all you bring is curiosity. By Sunday afternoon you'll be riding. Pacific Motorcycle Training.”",
        body: "The first ad speaks to the transactional fear (overpaying) and invites comparison shopping. The second speaks to the relational fear (a poor choice: being embarrassed, unsafe, or stuck with a bad teacher) and offers what relational buyers want: an expert they can trust and a place to belong. A beginning rider is almost always in relational mode."
      },
      practice: [
        {
          prompt: "Dissect it: test the two modes against your own life.",
          fields: [
            "List two categories where you're transactional and two where you're relational. What decides which mode you're in?",
            "Why do merchants overestimate how many shoppers are transactional?",
            "Argue the other side: name a local business that should target transactional shoppers. Why does it work for them?"
          ]
        },
        {
          prompt: "Apply it: rewrite one current ad for a ZDub client or prospect so it speaks to the relational shopper.",
          fields: ["Original ad (paste)", "Which mode it targets now, and how you can tell", "Relational rewrite", "Which relational fears/needs it answers"],
          rubric: [
            "Names the relational fear (a poor choice) and answers it",
            "Positions the business as a trusted expert or “the right place,” not the cheapest",
            "Drops price as the lead",
            "Gives the shopper a reason to feel confident enough to buy now"
          ],
          model: "Original (roofer): “Roof replacements from $8,999! Free estimates, financing available, call today!” Targets transactional: leads with price, invites comparison. Rewrite: “The hardest part of a new roof isn't the money. It's trusting a stranger on top of your house. Every Ridgeline estimate comes with photos of every problem we find, so you see what we see before you decide anything.” Answers: fear of choosing a bad roofer, need for an expert who's transparent."
        }
      ],
      today: { task: "Read PMT's last five ads (or ZDub's own) and label each T (transactional) or R (relational). Count them and note which mode the business has been talking to.", output: "A tally like “4 T / 1 R” with one line on what to change", minutes: 15 },
      check: [
        { q: "What is the transactional shopper's only fear? The relational shopper's?", a: "Transactional: paying more than they had to. Relational: making a poor choice." },
        { q: "Are transactional and relational two types of people?", a: "No. Every person has both modes; you're transactional in some categories and relational in others." },
        { q: "Why do merchants wrongly think most shoppers are transactional?", a: "Transactional shoppers visit many stores, ask questions and negotiate, so salespeople meet them constantly, while relational shoppers quietly buy where they trust and leave." }
      ]
    },
    {
      id: "maw-003b",
      part: "p1",
      chapter: 3,
      chapterTitle: "Transactional vs. Relational Shoppers (the case study)",
      pages: "11–13",
      title: "The Transactional vs. Relational Case Study: beware of averages, follow the profit",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 3 · Transactional vs. Relational Shoppers (case study) · pp. 11–13", who: "Roy H. Williams; case study by Wizard of Ads Partner Scott Broderick" }],
      quotes: [
        { text: "But in truth, more purchases are quietly made by customers in relational mode.", page: "11" },
        { text: "Relational shoppers represent a smaller share of store traffic, but a larger share of sales, higher closing ratios, higher average sales, and higher profit margins.", page: "12" }
      ],
      idea: "The case study (credited to Partner Scott Broderick) turns the two modes into money. Ten shoppers want the same product, retail price $100. The store's cost is $50 (a 100% “keystone” markup). Five shoppers are transactional, five relational.\n\n**Transactional:** T1 visits 3 stores, pays $70. T2: 2 stores, $80. T3: 5 stores, $60. T4: 3 stores, $70. T5: 5 stores, $60. **Total: 18 store visits, $340.** Each buys at only one store, so a crowd of salespeople answered questions and got nothing.\n\n**Relational:** each visits 1 store (their favorite) and pays $100, $100, $100, $90, $90. **Total: 5 visits, $480.** Zero frustrated salespeople.\n\nCombined: 23 visits, $820 in sales, average sale $82, average gross profit $32, margin 39%. Now the guide's warning, **“Beware of Averages!”** Split it out (p. 12):\n\n- **Store visits:** relational 22% (5 of 23), transactional 78% (18 of 23).\n- **Buyers:** 50 / 50.\n- **Dollars:** relational 59% ($480 of $820), transactional 41% ($340).\n- **Gross profit:** relational 72% ($230 of $320), transactional 28% ($90).\n- **Ad dollars:** roughly 10% aimed at relational shoppers, 90% at transactional ones.\n\nRun your own math on it: each transactional visit produced about **$5** of gross profit ($90 ÷ 18); each relational visit about **$46** ($230 ÷ 5). Per customer it's $18 vs. $46. The traffic you can see on the floor is the least profitable traffic you have.\n\n**Where the numbers come from (p. 13).** “Transactional” and “relational” are condensed from Myers-Briggs type research: everyone uses both styles, the way you use both hands, but reaches first with the preferred one. The Center for Applications of Psychological Type's 30-year database (over 2 million Americans test each year) suggests a roughly 50/50 national split. Corporate psychologist Dr. Richard Grant ties the preference mainly to the Thinking/Feeling scale, colored by J/P and lightly by S/N. The markdowns reflect the American market of the prior decade. The 90% ad-dollar figure is admitted to be an educated guess, probably low: more money goes to newspapers than to radio and TV combined, and most of it plus the junk mail screams discount.\n\n**The lesson:** most advertising chases the loud, low-profit half of the market. Wizard of Ads deliberately targets the relational shopper.",
      keyPoints: [
        "Ten shoppers, $100 item, $50 cost: transactional = 18 visits, $340; relational = 5 visits, $480.",
        "Relational shoppers: 22% of traffic, 50% of buyers, 59% of sales, 72% of gross profit.",
        "Yet about 90% of ad dollars target transactional shoppers (an admittedly conservative guess).",
        "Per visit, a relational shopper is worth roughly 9× the gross profit of a transactional one ($46 vs. $5).",
        "Averages hide this; always split traffic, sales and profit by shopper type."
      ],
      why: "Lead-gen agencies get judged on volume (clicks, leads, cost per lead), which rewards transactional traffic. This case study gives Zach the math to steer clients toward fewer, better, relational customers and to measure profit per customer, not just lead count.",
      example: {
        title: "Running the case study on a Sacramento flooring store's leads",
        before: "Report to client: “Last month: 120 leads at $18 each from the ‘40% off installation’ ad. Great volume!”",
        after: "Report to client: “Last month: 120 leads from the discount ad, 9 jobs, average ticket $3,100. 31 leads from the ‘design consult’ ad, 11 jobs, average ticket $5,400. The quieter ad made more than twice the gross profit on a quarter of the leads. I'm moving budget to it.”",
        body: "This is Broderick's table in a modern lead report: the discount ad wins on traffic, the relational ad wins on closing ratio, ticket size and margin. Beware of averages: blended cost per lead would have hidden it."
      },
      practice: [
        {
          prompt: "Dissect it: rebuild the case study's logic.",
          fields: [
            "Using the guide's table, why does the transactional group generate so many more store visits for less money?",
            "Which number in the “Beware of Averages” list surprises you most, and why?",
            "Argue the other side: what assumptions in this example might not hold for PMT or a roofer?"
          ]
        },
        {
          prompt: "Apply it: build a mini relational vs. transactional table for a ZDub client using real or estimated numbers.",
          fields: ["Client and product/service", "Transactional group: leads/visits, buyers, average sale, gross profit", "Relational group: leads/visits, buyers, average sale, gross profit", "Your one-line recommendation"],
          rubric: [
            "Splits visits/leads, buyers, sales and gross profit by group, as the guide does",
            "Computes gross profit per lead or visit for each group",
            "Notes where the averages would hide the difference",
            "Recommendation says which shopper to target and what that means for the ads"
          ],
          model: "PMT, Basic course (estimates). Transactional (came from a “$50 off” promo): 60 inquiries, 12 enrollments, avg paid $275, gross profit ~$95 each = $1,140, or $19 per inquiry; 2 no-shows. Relational (came from instructor-story reels and referrals): 20 inquiries, 10 enrollments, avg paid $350, gross profit ~$170 each = $1,700, or $85 per inquiry; 4 later bought the advanced course. Recommendation: put 80% of spend behind trust and story ads; keep the promo only for retargeting people already on the booking page."
        }
      ],
      today: { task: "Recreate the guide's 10-shopper table in a spreadsheet, then add two columns of your own: gross profit per visit and per customer for each group. Confirm the $5 vs. $46 per-visit gap.", output: "A small spreadsheet you can show a client", minutes: 20 },
      check: [
        { q: "In the case study, what share of gross profit came from relational shoppers?", a: "72% ($230 of $320), from only 22% of store visits." },
        { q: "What are the store's cost and markup assumptions?", a: "Cost of goods $50 on a $100 retail price: a 100% (keystone) markup before discounts." },
        { q: "Where do the terms transactional and relational come from, and what's the national split?", a: "They condense Myers-Briggs type preferences (mainly Thinking vs. Feeling); CAPT's 30-year data suggests about a 50/50 split." }
      ]
    },
    {
      id: "maw-004",
      part: "p1",
      chapter: 4,
      chapterTitle: "Test the Waters",
      pages: "14–15",
      title: "Test the Waters: short schedules are a gamble, and the message beats the audience",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 4 · Test the Waters · pp. 14–15", who: "Roy H. Williams" }],
      quotes: [
        { text: "Most people are “the right people,” when you say the right thing!", page: "15" },
        { text: "It is better to reach ten people ten times than a hundred people once.", page: "15" }
      ],
      idea: "Roy starts with a piece of arithmetic about how small businesses buy advertising. Roughly **120,000** salespeople sell TV and radio time across America and Australia. Each makes about **three** prospecting calls a day. One owner in **twelve** says some version of: “Maybe your station is right for me. I'll buy a small schedule to test the waters, and if it works I'll advertise regularly.” That's about **30,000** owners testing the waters every single day.\n\nIt sounds prudent. Roy compares it to walking up to a roulette wheel and saying, “Maybe black is my color. I'll place a small bet, and if I win, I'll bet black regularly.” Most of those 30,000 get poor results. They're disappointed but not surprised, because they've tested before, and the occasional win was rarely repeatable.\n\nWhy do they keep doing it? Because every one of those salespeople has been taught the same seductive song: *the secret is reaching the right people, and our listeners are the right people for you.* It's appealing because it's common sense, and advertising so often defies common sense. The sad part: nearly every disappointed owner would have been happy with the very station they chose if they'd understood two laws.\n\n**Law #1: It's what you say, not who you say it to.** Most people become “the right people” once you say the right thing. Be convincing.\n\n**Law #2: Short schedules are always a gamble.** Few people are convinced quickly, and few of those happen to need you right now. By the time their need arises, your test is over and they've forgotten you. So decide what to say, then say it relentlessly to as many people as you can afford to reach *with repetition*. If you can't afford relentless repetition across a station's whole audience, buy a smaller audience. Ten people ten times beats a hundred people once.\n\nRoy calls testing the waters “the signature of an uncommitted advertiser,” and says he's never seen it produce more than momentary success. Focus and commitment are the signatures of real success. Chapter 14 shows how to buy a smaller audience you can dominate, and the Top 12 Mistakes (Mistake 2) puts numbers on reach vs. frequency.\n\n**Modern translation:** the $300, two-week boost followed by “Facebook doesn't work for us” is testing the waters. Testing *creative* inside a committed campaign is smart; testing *commitment* is the gamble.",
      keyPoints: [
        "About 30,000 owners a day “test the waters” with small schedules; most get poor, unrepeatable results.",
        "The “right people” pitch is common sense, and advertising often defies common sense.",
        "Law 1: what you say matters more than who hears it; the right message makes people the right people.",
        "Law 2: short schedules gamble on catching people at the moment of need; by the time need arises, you're forgotten.",
        "If you can't afford repetition to a big audience, buy a smaller one: 10 people × 10 beats 100 × 1."
      ],
      why: "Local owners arrive at ZDub having “tried Facebook ads” for two weeks. This chapter explains why that failed and gives Zach the language to sell commitment instead of a trial, while still testing creative inside the commitment.",
      example: {
        title: "Reframing a PMT “trial” into a commitment",
        before: "“Let's put $500 into Meta for two weeks and see if it brings in sign-ups. If it works, we'll keep going.”",
        after: "“Let's choose one message, ‘never ridden? you'll be riding by Sunday,’ and say it in six different ads to people within 20 miles, about three times a week, for 13 weeks. We'll test which of the six ads works best, but we won't test whether to show up.”",
        body: "Same money per week, completely different bet. The first plan reaches people once and hopes they happen to be ready this fortnight. The second builds memory in a smaller audience so that when someone decides it's time to ride, PMT is the name they already know. Creative testing happens inside the committed schedule."
      },
      practice: [
        {
          prompt: "Dissect it: examine Roy's two laws.",
          fields: [
            "In your own words, why is a short test schedule closer to roulette than to a real experiment?",
            "Where have you seen the “right people” pitch in the Meta era (interests, lookalikes, “our audience is your audience”)?",
            "Argue the other side: when does audience selection genuinely matter more than message?"
          ]
        },
        {
          prompt: "Apply it: write the 4–5 sentence answer you'll give the next prospect who says “let's just test it for a couple of weeks.”",
          fields: ["The prospect and their business", "Your answer (4–5 sentences)", "What you'll test inside the commitment"],
          rubric: [
            "Explains Law 2: few are convinced quickly and fewer need you right now",
            "Recommends a smaller audience with real repetition instead of a short schedule",
            "Separates testing creative from testing commitment",
            "Keeps the focus on one convincing message (Law 1)"
          ],
          model: "Prospect: a Folsom med spa owner. Answer: “Two weeks mostly tests whether someone happened to be ready to book this fortnight. Most of your future clients will decide in the next six months, and they'll book with the name they remember. So instead of reaching all of Sacramento once, let's reach women within 8 miles of Folsom about three times a week for 90 days, with one message said several ways. We'll test four ads against each other in the first month and keep the winners.” Tested inside: hook, face (owner vs. client), format (reel vs. carousel)."
        }
      ],
      today: { task: "Find one ZDub prospect or past client who “tried ads” briefly. Write down their budget, duration, audience size and estimated frequency, and diagnose it with Roy's two laws.", output: "A 4-line diagnosis: message problem, schedule problem, or both", minutes: 15 },
      check: [
        { q: "State Roy's two laws of advertising from this chapter.", a: "1) It's what you say, not who you say it to; most people are the right people when you say the right thing. 2) Short schedules are always a gamble." },
        { q: "Why do short schedules fail even with a good audience?", a: "Few people are convinced quickly, few of those need you right away, and by the time their need arises the test is over and they've forgotten you." },
        { q: "What should you do if you can't afford relentless repetition to a station's whole audience?", a: "Buy a smaller audience; it's better to reach ten people ten times than a hundred people once." }
      ]
    },
    {
      id: "maw-005",
      part: "p1",
      chapter: 5,
      chapterTitle: "So…What Are the Secrets?",
      pages: "16",
      title: "So…What Are the Secrets?: decide what to say, then say it a hundred ways, forever",
      minutes: 5,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 5 · So…What Are the Secrets? · p. 16", who: "Roy H. Williams" }],
      quotes: [
        { text: "The effectiveness of your ad campaign will be limited only by your commitment to your message, and the persuasiveness of your ads.", page: "16" },
        { text: "How the message is delivered is completely secondary.", page: "16" }
      ],
      idea: "Clients ask the Wizard of Ads Partners the same questions every day: Which type of advertising works best? Which words can't people resist? What music works in radio ads? Which color combinations are proven? Radio, TV or newspaper? And finally: just tell me the secrets.\n\nThe one-page answer is deliberately anticlimactic. **The five secrets:**\n\n1. **Know your message.** Settle on the one thing you actually need to tell people.\n2. **Vary it.** Come up with a hundred fresh ways of putting that same thing.\n3. **Mean it.** Deliver it with conviction.\n4. **Repeat it.** Say it a second time.\n5. **Never stop.** Keep repeating it, long after you're tired of it.\n\nThen the rule behind them: a campaign's effectiveness is limited only by two things, **commitment to the message** and **persuasiveness of the ads**. The delivery vehicle is secondary. In a phrase: it's what you *say* that counts.\n\n**What Roy is really saying.** Every question in that list hunts for a tactical shortcut: a magic word, a color, a medium. The answer is strategic and boring. Notice how the five steps divide: step 1 is strategy (one message, chosen deliberately); steps 2 and 3 are craft (variety and conviction); steps 4 and 5 are commitment (repetition over time). Most businesses skip step 1 (they say something different every month), fumble step 2 (they repeat one tired ad until people tune it out), and quit at step 5 (the chickening-out period in Chapter 7).\n\n**Step 2 is the subtle one.** A hundred ways to say the *same thing* solves a real tension: memory needs consistency, but attention needs novelty. Varied ads keep the audience delighted (Chapter 9's “no delight without surprise”) while the single message accumulates in memory. The guide makes it precise later: change an ad after a listener has heard it 12–20 times (Chapter 19), and run a campaign, not a single ad (Mistake 6).\n\n**Modern translation.** On Meta, step 2 is creative diversification: one core promise expressed through different hooks, faces, formats and stories. Step 1 is what most “creative testing” forgets: the variations should test *ways of saying it*, not a new message every week.",
      keyPoints: [
        "The five secrets: decide what to say, find 100 ways to say it, say it convincingly, say it again, keep saying it.",
        "Results are limited only by commitment to the message and persuasiveness of the ads.",
        "The medium is secondary; “it's what you SAY that counts.”",
        "Variety in expression keeps attention; consistency of message builds memory.",
        "Most businesses fail step 1 (no single message) or step 5 (they quit)."
      ],
      why: "Clients want a hack (the best audience, the best time to post, the best color). Zach can use this page to reset the conversation: ZDub's real product is one strong message expressed many ways and sustained.",
      example: {
        title: "One PMT message, ten ways to say it",
        before: "January: “New year, new skills!” February: “Valentine's gift idea.” March: “Spring riding season.” April: “$25 off this weekend.” A new message every month.",
        after: "One message all year: “Never ridden? You'll be riding by Sunday.” Said as: (1) a reel of a nervous student's first lap; (2) an instructor on what Saturday morning looks like; (3) a carousel “Saturday 8 am → Sunday 3 pm”; (4) a 60-year-old's first ride; (5) a mom and daughter taking it together; (6) “what we provide, what you bring”; (7) a student's voice memo after class; (8) a gift-buyer angle; (9) a myth-buster (“you don't need to own a bike”); (10) close-ups of the range at sunrise.",
        body: "The gift and season angles survive, but as new ways of telling the same promise rather than new promises. Each ad is fresh to the eye; the brain files every one under the same idea."
      },
      practice: [
        {
          prompt: "Dissect it: test the five secrets.",
          fields: [
            "Which of the five steps do most local businesses skip, and why?",
            "Why does Roy call the delivery vehicle “completely secondary”? Where would you push back?",
            "Explain in your own words how “a hundred ways” and “keep saying it” fit together without contradicting each other."
          ]
        },
        {
          prompt: "Apply it: for a ZDub prospect, write the one message (step 1) and ten ways to say it (step 2).",
          fields: ["Prospect", "The one message (one sentence)", "Ten ways to say it (one line each)", "How long you'll keep saying it"],
          rubric: [
            "One clear message, not a list of benefits",
            "All ten variations express the same message",
            "Variations differ in story, face, format or angle, so each is fresh",
            "Commits to a duration measured in months, not weeks"
          ],
          model: "Prospect: an Elk Grove plumber. Message: “We show up when we say we will.” Ways: (1) tech filming the dashboard clock on arrival; (2) a customer who waited all day for another company; (3) the dispatcher explaining the 2-hour window; (4) a “late = $50 off” guarantee card; (5) a day-in-the-life reel; (6) the owner on why punctuality is respect; (7) a review montage on “on time”; (8) a carousel of the arrival-text sequence; (9) a joke about the cable company's 8–5 window; (10) a time-lapse of a clean job finished before lunch. Duration: 12 months, review at 90 days."
        }
      ],
      today: { task: "Write PMT's single message in one sentence, then list ten ways to say it. Circle the three you could shoot this week.", output: "One message + ten variations, three circled", minutes: 20 },
      check: [
        { q: "List the five secrets in order.", a: "1) Know your message: settle on what you need to tell people. 2) Vary it: a hundred fresh ways of putting it. 3) Mean it: deliver it with conviction. 4) Repeat it. 5) Never stop repeating it." },
        { q: "What two things limit a campaign's effectiveness?", a: "Your commitment to your message and the persuasiveness of your ads." },
        { q: "What's the “secret in a phrase”?", a: "It's what you SAY that counts." }
      ]
    },
    {
      id: "maw-006",
      part: "p1",
      chapter: 6,
      chapterTitle: "Three Types of Customers",
      pages: "17–18",
      title: "Three Types of Customers: ignore the unswitchable, win the switchable, never chase the price-switcher",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 6 · Three Types of Customers · pp. 17–18", who: "Roy H. Williams" }],
      quotes: [
        { text: "these customers will switch from you just as quickly as they switched to you and for precisely the same reason.", page: "17" },
        { text: "there’s nothing in the world, that someone can’t make a little worse and sell a little cheaper.", page: "18" }
      ],
      idea: "Roy cites a Harvard study on brand loyalty that sorted customers into three types. Each calls for a completely different response.\n\n**Type 1: Non-Switchable.** Nothing you do or say will move them off what they already use: the coffee they drink, the shoes they wear, the car brand they always buy. They exist in every market. Roy's advice is emotional as much as strategic: **don't let it drive you crazy.** Don't build ads, offers or grudges around them.\n\n**Type 2: Switchable.** These can be won, but only if you say the right thing and *keep* saying it until they're convinced and finally get around to trying you. Here's the subtle part: when your message is right, you're mostly convincing people who aren't shopping yet. So after persuading them, you wait until they enter the market. That waiting is why patience is built into the strategy.\n\n**Type 3: Switchable for Reasons of Price Alone.** The study recommended you *not* pursue them. Appeal to them and you'll enjoy quick success, but your position will never be strong, because they'll leave you exactly as fast as they came and for the same reason. Roy names them plainly: these are the **transactional customers** from Chapter 3. And he explains why you can never hold them: give them a lower price and you get instant success you can't keep, because someone can always make it a little worse and sell it a little cheaper.\n\n**The strategy that follows (p. 18):** target the Type 2 switchable customer, accept that it takes patience, and understand that the longer you talk to customers *in their language, about what matters to them*, the better it works. That phrase recurs throughout the guide (Chapters 7 and 11). The page closes with a Wizard line: to excel in advertising, learn what makes people do the things they do.\n\n**Connections.** Chapter 18's “Ad Cocaine” section circles back here: a business addicted to sales has trained itself onto Type 3 and must slowly rebuild with Type 2. And Chapter 7's compounding growth only happens with Type 2, because they stay.",
      keyPoints: [
        "Type 1 non-switchable: nothing will move them; don't let it drive you crazy.",
        "Type 2 switchable: won by the right message repeated until they try you; often not in the market yet, so you wait.",
        "Type 3 price-only switchers = transactional customers; easy to get, impossible to keep.",
        "Someone can always make it a little worse and sell it a little cheaper, so price is never a defensible position.",
        "Target Type 2 with patience, in the customer's language, about what matters to the customer."
      ],
      why: "Discount-led Meta campaigns fill local businesses with Type 3 customers who never return and train the market to wait. Steering clients toward Type 2 is how ZDub builds results that compound instead of resetting every month.",
      example: {
        title: "PMT's three types",
        before: "Type 1: the guy whose cousin will teach him in a parking lot; the rider loyal to another school. Type 3: the shopper who'll take whichever weekend course is $20 cheaper. Type 2: the curious 30-year-old who's “always wanted to ride” but hasn't decided when.",
        after: "PMT's ads ignore Type 1 entirely, never lead with price for Type 3, and talk to Type 2 for months: “You've said ‘someday’ for ten years. Here's what the first Saturday actually feels like.”",
        body: "The Type 2 rider may watch PMT's reels for six months before spring arrives and they finally book. When they do, they book with the school that's been talking to them in their own language about what matters to them: confidence, safety, not feeling stupid."
      },
      practice: [
        {
          prompt: "Dissect it: sort and question the three types.",
          fields: [
            "Describe Type 1, 2 and 3 for a Sacramento roofer in one line each.",
            "Why does Roy say the price customer can never be held? Restate his reasoning.",
            "Argue the other side: when might a business sensibly chase Type 3 for a while?"
          ]
        },
        {
          prompt: "Apply it: audit one client's current ad set and re-aim it at Type 2.",
          fields: ["Client", "Ads aimed at Type 3 (and how you can tell)", "Ads wasted on Type 1 (if any)", "Two new Type 2 ad lines in the customer's language"],
          rubric: [
            "Correctly identifies price-only appeals as Type 3 targeting",
            "New lines speak about what matters to the customer, in the customer's words",
            "New lines would still work on someone not yet in the market",
            "Plans for patience (duration, repetition) rather than instant results"
          ],
          model: "Client: an Arden-Arcade HVAC company. Type 3 ads: “$69 tune-up special,” “$1,000 off new systems this week.” Type 1 waste: none obvious. Type 2 lines: (1) “The worst time to choose an AC company is at 2 am in July. Meet ours now, while it's cool.” (2) “Ask any of our techs what they'd install in their own house. Then ask them why.” Plan: run both for 6 months to homeowners within 10 miles at about 3 views a week."
        }
      ],
      today: { task: "Scroll PMT's (or a prospect's) last 10 posts and ads. Mark each as aimed at Type 2 or Type 3. Write one replacement line for the worst Type 3 ad.", output: "A count (e.g., 6 Type 3 / 4 Type 2) plus one rewritten line", minutes: 15 },
      check: [
        { q: "What does the study recommend about Type 3 customers, and why?", a: "Don't pursue them: you'll get quick success but a weak position, because they switch away as fast as they switched to you, for the same reason (price)." },
        { q: "Why does winning Type 2 customers require patience?", a: "The right message mostly convinces people who aren't in the market yet, so you have to keep saying it and wait for their need to arise." },
        { q: "What's Roy's advice about Type 1 customers?", a: "Accept that nothing will move them, and don't let it drive you crazy." }
      ]
    },
    {
      id: "maw-007",
      part: "p2",
      chapter: 7,
      chapterTitle: "How Advertising Works (the message and the multiplier)",
      pages: "19–20",
      title: "How Advertising Works: no spending formula exists, but the right message compounds",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 7 · How Advertising Works · pp. 19–20", who: "Roy H. Williams" }],
      quotes: [
        { text: "There is no direct correspondence between dollars invested and results gained.", page: "19" },
        { text: "The benefit experienced in Year Two will be twice the benefit experienced in Year One, provided everything else remains equal and the core message does not change.", page: "19" }
      ],
      idea: "Roy lays out how advertising works in three numbered claims, then a case and a checklist.\n\n**1. No formula links dollars to results.** Nobody can honestly answer “If I spend this much, what will happen?” Two businesses can spend the same money reaching the same people; one gets rich, the other fails.\n\n**2. The variable is the message.** Same audience, same repetition, opposite outcomes, and the difference is what was said. One advertiser spoke to customers in their language about what mattered to them, and they said yes. The other talked about himself and answered questions nobody asked, and the customer's reaction was the equivalent of tossing him a coin and saying “call your mum, I don't care.” So media (newspaper, TV, radio) is never “the answer”; it's only the vehicle the message rides in. The order is fixed: uncover the message, set the budget, choose the strategy, and only then, *if* the strategy calls for mass media, pick the vehicle. Never before.\n\n**3. Once the right message is found, a pattern appears.** With everything else equal and the core message unchanged, the benefit in Year Two is about twice Year One, and Year Three about three times Year One. (So three years return roughly six “Year Ones” in total.) The Partners say they've watched this for 16 years, but only after the right thing to say has been found. That's why Roy, as a consultant, wants to uncover the right message *once*; then client and consultant can “get lazy,” and his new job is helping the client keep up with growth. Around **36 months**, new variables enter and it becomes anyone's ballgame again.\n\n**The Milwaukee case.** A client in business 20 years, a Wizard client for 10, grew to **43 times** its size when it signed. Because the Partners are paid a monthly salary reviewed each year and raised with the client's growth, he now pays them 43 times what he paid in year one. (Chapter 25 explains this fee model.)\n\n**Not everyone can do this.** Growth depends on five factors:\n1. **Total market potential:** what the public will spend in your category this year, your current penetration, and how much is left on the table.\n2. **Message development:** how well you tell your story; your ads' Impact Quotient.\n3. **Media plan:** how efficiently the dollars are spent.\n4. **Competitive environment:** how good your competitors are.\n5. **Competency:** how good *you* are.",
      keyPoints: [
        "No formula predicts results from spend; identical budgets and audiences can produce opposite outcomes.",
        "The message is the variable. Media is only the delivery vehicle, chosen last.",
        "Order: message → budget → strategy → (if needed) media.",
        "With the right, unchanged message, Year 2 ≈ 2× Year 1 and Year 3 ≈ 3× Year 1; new variables arrive around 36 months.",
        "Five growth factors: market potential, message, media plan, competition, competency."
      ],
      why: "Prospects ask Zach “if I spend $2,000 a month, how many leads will I get?” This chapter gives an honest answer (it depends mostly on the message) and a five-factor checklist for which clients can actually grow by multiples.",
      example: {
        title: "Answering the “what will I get?” question for a Sacramento landscaper",
        before: "“At $2,000 a month you can expect 40–60 leads.” (A promise that ignores the message, the competition and the business.)",
        after: "“I can't honestly give you a number, because two companies spending the same money on the same people can get opposite results. The difference is what the ads say. Here's what I can promise: we'll find the one thing you should be known for before we spend a dollar on media. Then we'll measure leads, close rate and job size monthly. And if we find the right message, it should keep working harder each year we keep saying it.”",
        body: "This is Roy's order of operations: message first, then budget, then strategy, then media. It also sets up the compounding conversation for year two, when the same message builds on a year of memory."
      },
      practice: [
        {
          prompt: "Dissect it: take apart the three claims.",
          fields: [
            "Why does Roy insist no spending formula is possible? What variable breaks it?",
            "Explain the Year 1 / Year 2 / Year 3 pattern in your own words. What has to stay constant for it to happen?",
            "Argue the other side: in the Meta era, when can you roughly predict results from spend, and why is that prediction still fragile?"
          ]
        },
        {
          prompt: "Apply it: score PMT (or a prospect) on the five growth factors and decide whether multiples are realistic.",
          fields: ["Business", "Score 1–5 on each factor with one line of evidence", "Weakest factor and what ZDub would do about it", "Verdict: multiples, percentages, or not ready"],
          rubric: [
            "Covers all five factors: market potential, message, media plan, competition, competency",
            "Market potential considers dollars left on the table, not just population",
            "Identifies a weakest factor with a specific fix",
            "Verdict follows from the scores"
          ],
          model: "PMT (estimates). Market potential 4: thousands of new riders and lapsed riders in the region, and PMT's share is small. Message 2: ads say different things monthly, no single promise. Media plan 3: decent targeting, budget spread too thin across too many audiences. Competition 3: a few courses, none with a strong story. Competency 5: instructors and reviews are excellent. Weakest: message. Fix: run an Uncovery and commit to one promise for 12 months. Verdict: multiples realistic over 3 years if the message is fixed and kept."
        }
      ],
      today: { task: "Write the order of operations (message → budget → strategy → media) at the top of ZDub's client onboarding doc, and add a line under each step for what ZDub will deliver.", output: "A 4-step onboarding outline", minutes: 15 },
      check: [
        { q: "What is the variable that makes a spend-to-results formula impossible?", a: "The power of the message." },
        { q: "What growth pattern does Roy describe once the right message is found?", a: "Year Two's benefit is about twice Year One's, and Year Three about three times, as long as everything else is equal and the core message doesn't change; new variables enter around 36 months." },
        { q: "Name the five factors that determine how much a business can grow.", a: "Total market potential, message development, media plan, competitive environment, and competency." }
      ]
    },
    {
      id: "maw-007b",
      part: "p2",
      chapter: 7,
      chapterTitle: "How Advertising Works (the chickening-out period)",
      pages: "21",
      title: "Chickening Out: the great campaign most advertisers quit between weeks 8 and 14",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 7 · How Advertising Works (chickening out) · p. 21", who: "Roy H. Williams" }],
      quotes: [
        { text: "The “chickening-out” period usually falls between the second media invoice and the third media invoice.", page: "21" },
        { text: "Half of the people who say they’re ready, aren’t.", page: "21" }
      ],
      idea: "The last page of Chapter 7 deals with the most common way good campaigns die: the advertiser quits. Roy says most advertisers have started at least one great campaign and then “chickened out.”\n\n**When it happens:** between the second and third media invoice, roughly **weeks 8 to 14**. The advertiser had found the right message but didn't understand that advertising works on a delay. The full effect of a good campaign takes months, sometimes years.\n\n**Two images explain the delay.** First, pushing a car from a standstill: huge strain at the start, no sign of movement, then a tiny roll, then a bit more, and eventually you're trotting behind with one hand while it rolls on its own. Second, farming: little green seedlings are breaking through the soil, and the farmer says, in effect, “I'm seeing *some* results, but not enough to justify all this work. I'm looking for a new farm.” Roy's response: wait, it's about to happen; payday is right there.\n\n**The Wizard ritual.** Before they take a client's money, the Partners say something like this: *We promise that if we start doing the right thing, the thing you'll want most 90 days from now is to fire us. You'll believe hiring us was the biggest mistake of your life. Let's cross that bridge now.* The point is to have the hardest conversation before the contract, not in month three. If the owner doesn't have the courage of their convictions and the commitment to stay, it's better not to start. Roy adds that half the people who say they're ready aren't. It's painful and hard, and **that's why most advertising is done badly.**\n\n**Connections.** Chapter 19 repeats the same window as a scheduling rule: expect minimal results in the first 8–14 weeks of a long-term radio schedule. Mistake 1 (Chapter 18) calls this “the chickening-out period between seedtime and harvest” and explains why owners run back to sales. And Chapter 6 explains *why* the delay exists: the right message convinces people who aren't in the market yet.\n\n**Modern translation.** Direct-response Meta campaigns can produce leads in week one, but the compounding part (recognition, lower costs as people know you, referrals, branded searches) follows Roy's curve. Owners chicken out of the brand-building half of the plan first.",
      keyPoints: [
        "Most advertisers have quit at least one great campaign.",
        "The chickening-out period falls between the second and third invoice: weeks 8–14.",
        "Advertising works on a delay, like pushing a car from a standstill or waiting on seedlings.",
        "Wizard Partners warn clients, before taking money, that at 90 days they'll want to fire them.",
        "Half the people who say they're ready aren't; commitment must be tested up front."
      ],
      why: "ZDub's churn risk lives in months 2–4. Having Roy's 90-day conversation before the contract, with written leading indicators, keeps good campaigns alive long enough to pay off.",
      example: {
        title: "Zach's 90-day bridge conversation with a new roofing client",
        before: "Onboarding call: “We'll get your ads live this week and you should see leads coming in soon!”",
        after: "Onboarding call: “Somewhere between week 8 and week 14, you're going to look at the invoice and the job board and want to fire me. Almost every client does. So let's agree now what we'll look at that day: reach and frequency in your 12-mile area, video watch rate, calls that mention seeing the ads, and branded searches. If those are climbing, we stay the course. Still want to start?”",
        body: "This is the Wizard ritual adapted for a Meta client. It names the feeling before it happens, defines leading indicators in advance, and lets the client opt out before money changes hands. Clients who balk here would have quit in month three anyway."
      },
      practice: [
        {
          prompt: "Dissect it: understand the delay.",
          fields: [
            "In your own words, why does a good campaign look like a failure at week 10?",
            "Why does Roy have the “you'll want to fire us” conversation before taking the client's money rather than after?",
            "Argue the other side: how would you tell a campaign that's still in the chickening-out period from one that's genuinely failing?"
          ]
        },
        {
          prompt: "Apply it: write ZDub's version of the 90-day bridge script and the leading indicators you'll review at week 10.",
          fields: ["Script (5–7 sentences)", "Four leading indicators and where you'll get each number", "The point at which you WOULD change course"],
          rubric: [
            "Names the weeks 8–14 window and the urge to quit before it happens",
            "Happens before the contract or first payment",
            "Leading indicators are measurable and available before sales catch up",
            "Defines a genuine failure condition, so it's commitment, not stubbornness"
          ],
          model: "Script: “Before you sign, one honest warning. Good advertising starts slow, like pushing a stalled car. Around month two or three you'll be looking at the invoice and wanting out, and most owners quit right before it pays. I'd rather we decide now whether you can ride that out. If not, no hard feelings, let's not start. If yes, here's what we'll look at together in week 10.” Indicators: weekly reach and frequency in the target radius (Ads Manager); 3-second and ThruPlay rates (Ads Manager); “how did you hear about us” answers (intake form); branded search impressions (Google Search Console). Change course if: frequency is above 2.5/week but watch rates and “heard about you” answers stay flat for 4 straight weeks, which points to a message problem."
        }
      ],
      today: { task: "Add a “Week 10 check-in” to ZDub's client onboarding: four leading indicators and the script line that names the chickening-out period.", output: "A saved Week 10 check-in template", minutes: 20 },
      check: [
        { q: "When does the chickening-out period usually happen?", a: "Between the second and third media invoice: weeks 8 to 14." },
        { q: "What do Wizard Partners promise new clients, and when?", a: "Before taking their money: that if they do the right thing, 90 days in the client will want to fire them and think it was the biggest mistake of their life." },
        { q: "What two images does Roy use for advertising's delayed effect?", a: "Pushing a car from a standing start, and a farmer seeing seedlings and deciding to look for a new farm." }
      ]
    },
    {
      id: "maw-008",
      part: "p2",
      chapter: 8,
      chapterTitle: "Why Most Ads Don’t Work",
      pages: "22–23",
      title: "Why Most Ads Don't Work: they answer who, what, when and where, but never why",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 8 · Why Most Ads Don’t Work · pp. 22–23", who: "Roy H. Williams" }],
      quotes: [
        { text: "Bad advertising is about the advertiser. Good advertising is about the customer.", page: "22" },
        { text: "the customer isn’t interested in your address or phone number until after you’ve convinced them of why they should care.", page: "22" }
      ],
      idea: "Roy puts the blame for weak advertising squarely on the advertiser, and names the habit that causes it: cramming the company name, product name, business hours and street address into every ad. Those ads answer *who, what, when and where* and skip the only question the customer is asking: **why?** He compares most advertisers to a room full of two-year-olds at day care, each jumping up and down yelling “Me! Watch me!”\n\nHe's careful to say this isn't the old “benefits, not features” advice. It's more radical: focus the ad **entirely on the customer**. Your address and phone number mean nothing until you've convinced them why they should care.\n\n**The Used Car Warehouse example (pp. 22–23).** First, the advertiser-focused radio ad: a huge selection of clean, late-model cars for every budget; the best trade-in value in town; imports and locals, sports and luxury cars, utes and 4WDs; open 9 to 9, seven days; the street address; financing with approved credit; and the phone number, twice. Every line is about the dealer, and every line could be said by any dealer.\n\nThen the customer-focused version for the same business. It opens inside a moment: you turned the key and *knew* this was your car. It lingers on how the car feels on the road, in the corners, at the lights, and even teases you for enjoying the heads that turn as you pass. A second voice closes on the idea that a perfect car exists for everyone and theirs is already waiting at the dealer, then gives the name and address, once.\n\nNotice what changed: the name and address didn't disappear; they moved to the end, *after* the why. The second ad uses “you,” strong verbs and a scene the listener steps into (a preview of Chapter 9's toolkit).\n\n**The TV version.** Roy would shoot every frame from the driver's seat looking out of a moving car, showing *neither the car nor the driver*. The goal is to make viewers imagine themselves behind the wheel; show a specific driver and they watch someone else's experience instead. (Chapter 10 calls this neural personalization.)\n\nThe chapter ends with a Wizard jab at syndicated, off-the-shelf ad programs: wearing one is like a man wearing a toupee. It isn't really his identity, but he figures it beats having none.",
      keyPoints: [
        "Most ads answer who/what/when/where and never answer the customer's question: why?",
        "Bad advertising is about the advertiser; good advertising is about the customer, entirely.",
        "Name, address and phone belong after the why, not instead of it.",
        "Put the customer inside a moment (“you”), not the business inside a feature list.",
        "On video, shoot from the customer's point of view and don't show the customer, so viewers see themselves."
      ],
      why: "Most local Meta ads Zach will audit are “Me! Watch me!” ads: logo, services list, years in business, phone number. Rewriting them around the customer's why is the fastest visible upgrade ZDub can deliver.",
      example: {
        title: "PMT: advertiser-focused vs. customer-focused",
        before: "“Pacific Motorcycle Training offers Basic and Advanced motorcycle courses in the Sacramento area. Certified instructors, motorcycles and helmets provided, weekday and weekend classes available. Visit our website or call today!”",
        after: "Video, shot entirely from a helmet cam: the clutch lever under a gloved hand, cones sliding past, the range opening up. Voiceover: “That wobble on the first lap? Gone by lunch. By Sunday you're leaning into the turn like you've done it for years, and you'll catch yourself grinning inside the helmet. Pacific Motorcycle Training.”",
        body: "The “before” is a list of facts about PMT. The “after” answers why: it lets a nervous beginner rehearse the feeling of becoming a rider. Following Roy's TV note, we never show the student's face, only what they'd see, so every viewer is the rider."
      },
      practice: [
        {
          prompt: "Dissect it: compare the two Used Car Warehouse ads.",
          fields: [
            "List everything in the advertiser-focused ad that any other dealer could also say. What's left?",
            "Why does Roy say this is more than “benefits, not features”?",
            "Argue the other side: when do hours, address and phone deserve the spotlight (e.g., a late-night locksmith)?"
          ]
        },
        {
          prompt: "Apply it: rewrite a real local ad from advertiser-focused to customer-focused, including a point-of-view video note.",
          fields: ["Original ad (paste)", "The customer's real “why” question", "Customer-focused rewrite", "Video direction: whose eyes is the camera?"],
          rubric: [
            "Opens with the customer inside a moment, not with the company",
            "Answers why before giving any who/when/where",
            "Name and contact appear once, at the end",
            "Video direction uses the customer's point of view and doesn't show the customer"
          ],
          model: "Original (dentist): “Bright Smile Dental: cleanings, crowns, implants, whitening. Accepting new patients. Open Mon–Sat. Call 916-555-0134.” Why question: “Will this hurt, and will they judge me for waiting so long?” Rewrite: “It's been four years. You've rehearsed the lecture you think you'll get. Here's what actually happens: a warm blanket, a hygienist who's heard it all, and not one word about how long it's been. Bright Smile Dental.” Video: camera at patient's eye level in the chair: ceiling art, the hygienist's kind eyes above a mask, a blanket landing across the lap."
        }
      ],
      today: { task: "Find three local Sacramento ads in your Facebook or Instagram feed. For each, count the lines about the advertiser vs. lines about the customer.", output: "Three tallies and one rewritten opening line", minutes: 15 },
      check: [
        { q: "Which question do most ads fail to answer?", a: "The customer's question: “Why?”" },
        { q: "In the customer-focused Used Car Warehouse ad, where do the business name and address appear?", a: "Once, at the very end, after the customer has been given a reason to care." },
        { q: "How would Roy shoot the TV version, and why?", a: "Entirely from the driver's point of view out of a moving car, showing neither car nor driver, so viewers imagine themselves behind the wheel." }
      ]
    },
    {
      id: "maw-009",
      part: "p2",
      chapter: 9,
      chapterTitle: "Let’s Begin at the Beginning (sound, Broca and delight)",
      pages: "24–25",
      title: "Let's Begin at the Beginning: win attention with a more interesting thought, fueled by delight",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 9 · Let’s Begin at the Beginning · pp. 24–25", who: "Roy H. Williams" }],
      quotes: [
        { text: "There can be no delight without surprise.", page: "25" },
        { text: "Listeners can take no action they have not first imagined.", page: "25" }
      ],
      idea: "Roy reduces advertising to four lines (p. 24):\n\n- **Objective:** cause people to *willingly* take the actions you want them to take.\n- **Challenge:** gain and hold attention by introducing a thought more interesting than whatever the person was already thinking.\n- **Vehicle:** intrusive, invasive sound.\n- **Fuel:** delight.\n\n**Why sound?** Ever turned the radio down while hunting for an address, or muted the TV when the phone rang? You do it because sound can't be ignored: you can close your eyes but not your ears. You absorb sound even when you're not listening, even asleep (it's how you'd hear a burglar). Roy calls “we remember more of what we see than what we hear” a myth, citing the color scientist Josef Albers' remark in *Interaction of Color* that visual memory is poor compared with auditory memory.\n\n**The brain map (p. 27).** Humanity's great gift is attaching meaning to sounds, handled by three areas: **Broca's area** (the map labels it “anticipation and verbs”), **Wernicke's area** (“object naming: nouns”) and the **Auditory Association area** (“memory of sound”). Broca's area also coordinates the diaphragm, larynx, tongue and lips to produce speech. The map also marks the **dorsolateral prefrontal association area** as imagination. Roy adds that written words have no meaning until the brain converts them into spoken ones; it's why you can “read” a page in bed for ages and absorb nothing once that translation stops.\n\n**Delight, surprise and the enemy, predictability.** An undercurrent of delight keeps people listening; predictability kills an ad dead. Great writers find writing *harder* than other people do, because they refuse what comes easily, knowing it will be predictable to the listener. Clichés feel right precisely because they're predictable. Surprise is the foundation of delight, whether subtle (an unusual pairing of words that creates an intriguing image) or dramatic (a punch line). But not every surprise delights: negative surprises confuse and irritate, and people switch away.\n\n**Verbs.** To reach the listener's “visuospatial sketchpad” (the imagination), whether in an ad or face-to-face, watch your verbs. People can't take an action they haven't imagined first, and to make them imagine an action you need a verb. Never the one they expect. (The next lesson continues with the toolkit.)\n\n*Study note:* treat the neuroscience as Roy's working model, not settled science (psychologists also describe a “picture superiority effect”). The practical rules (surprise, verbs, sound) are what to keep.",
      keyPoints: [
        "Objective: willing action. Challenge: a thought more interesting than the current one. Vehicle: sound. Fuel: delight.",
        "You can close your eyes but not your ears; sound intrudes and is retained without effort.",
        "Broca's area (verbs, anticipation) filters out the predictable; Wernicke's handles nouns; imagination sits in the prefrontal cortex.",
        "No delight without surprise; clichés feel right because they're predictable. Negative surprise drives people away.",
        "People can't act on what they haven't imagined; unexpected verbs make them imagine it."
      ],
      why: "Meta is a battle for attention measured in thumb-stops. Roy's “more interesting thought” is the job of every hook Zach writes, and sound-on Reels with voiceover are the modern intrusive vehicle.",
      example: {
        title: "A predictable vs. a delightful hook for a Carmichael landscaper",
        before: "“Looking for a beautiful yard? We offer professional landscaping services at affordable prices. Call today for a free quote!”",
        after: "“Your lawn has been quietly filing complaints all summer. Brown patches. Bald spots. That weird mushroom ring by the fence. We translate lawn, and we fix what it's been trying to tell you.”",
        body: "The “before” is three clichés in a row; Broca has heard every word before and waves it through to nowhere. The “after” introduces a more interesting thought than whatever the scroller was thinking (a lawn filing complaints), uses surprising verbs (filing, translate) and stays positive, so the surprise delights rather than irritates."
      },
      practice: [
        {
          prompt: "Dissect it: break down the four-line model.",
          fields: [
            "Restate Roy's objective, challenge, vehicle and fuel in your own words. Which one do most local ads ignore?",
            "Why does Roy say great writers find writing harder than other people do?",
            "Argue the other side: Meta video is mostly watched muted. How does that challenge Roy's case for sound, and how would you adapt it?"
          ]
        },
        {
          prompt: "Apply it: write three PMT hooks that each introduce a more interesting thought, using an unexpected verb.",
          fields: ["Hook 1", "Hook 2", "Hook 3", "The unexpected verb in each, and the predictable verb it replaced"],
          rubric: [
            "Each hook offers a thought more interesting than a typical scroller's",
            "Each uses a verb the reader wouldn't predict",
            "The surprise is positive, not confusing or irritating",
            "No clichés (“look no further,” “take your skills to the next level”)"
          ],
          model: "1) “Your fear of motorcycles is about to get fired on Saturday morning.” (fired, instead of “overcome”) 2) “By Sunday afternoon the cones stop looking like obstacles and start looking like dance partners.” (dance, instead of “navigate”) 3) “Most of our students show up with shaky hands. They leave with a story they can't stop telling.” (leave with a story, instead of “complete the course”)"
        }
      ],
      today: { task: "Take PMT's current best ad and circle every cliché and every predictable verb. Replace three of them with surprising, positive alternatives.", output: "A marked-up ad with three replacements", minutes: 15 },
      check: [
        { q: "What are Roy's objective, challenge, vehicle and fuel?", a: "Objective: cause people to willingly take the actions you want. Challenge: introduce a thought more interesting than the one already in their mind. Vehicle: intrusive, invasive sound. Fuel: delight." },
        { q: "Why do clichés “sound right”?", a: "Because they're predictable, which is exactly why Broca's area ignores them." },
        { q: "Why does Roy focus on verbs?", a: "People can take no action they haven't first imagined, and imagining an action requires a verb, ideally an unexpected one." }
      ]
    },
    {
      id: "maw-009b",
      part: "p2",
      chapter: 9,
      chapterTitle: "Let’s Begin at the Beginning (the writer’s toolkit)",
      pages: "26–27",
      title: "The Wizard Writer's Toolkit: black words, Robert Frank, frosting, Seussing, Monet, FMI and LMI",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 9 · Let’s Begin at the Beginning (writing techniques) · pp. 26–27", who: "Roy H. Williams" }],
      quotes: [
        { text: "Most people write about the seven-eighths already underwater. Write about the one-eighth above water.", page: "26" },
        { text: "Ignore the details, exaggerate the colour, and remove the black.", page: "26" }
      ],
      idea: "The second half of Chapter 9 turns the brain theory into writing rules. The logic first: **verbs**, far more than nouns or adjectives, slip past Broca's area (which rejects the mundane and ignores the predictable) and land on the listener's visuospatial sketchpad, the imagination, where they *see themselves doing* what you want. It works the same in a sales conversation as in a radio or TV script. Persuasive power hides in the verbs. And again: a bad ad is about the advertiser, a good ad is about the customer.\n\n**The toolkit (pp. 26–27):**\n\n1. **Eliminate the black words.** Cut every word that doesn't make the mental image more vivid or colorful. (Think “quality,” “professional,” “dedicated,” “services.”)\n2. **Follow Robert Frank.** Roy borrows from one of the greatest photographers: be accurate but *selective* with detail, and come at the subject from an unusual angle (to surprise Broca). **Put the known underwater:** don't state the obvious; cut whatever the listener already knows (so you don't bore Broca). Most writers describe the seven-eighths of the iceberg that's below the surface, the stuff everyone assumes. Write about the one-eighth above water.\n3. **Frosting.** Swap common, predictable phrases for unexpected, colorful ones.\n4. **Seussing.** Invent words. Dr. Seuss became a bestseller partly by making words up.\n5. **Be Monet.** Ignore the details, exaggerate the color, remove the black. Write *impressionistically* rather than accurately: poetic exaggeration and overstatement, words chosen for the intensity of their associations (their “color”), as few black words as possible.\n6. **FMI and LMI.** Every ad needs a **first mental image** (the opening scene) and a **last mental image** (the closing scene) in a deliberate mental sequence.\n7. **Make the listener a participant.** Great writers involve the audience actively rather than describing things at them.\n\nThe page closes with the Wizard's summary of the whole chapter: a customer can do nothing he hasn't first “seen himself do” in his mind, so the goal of advertising is to make him imagine doing the thing you want, and that all happens in the brain. Hence the brain map printed beneath it.\n\n**How the tools fit together:** Robert Frank decides *what* to say (the surprising tip of the iceberg), Monet and frosting decide *how* it sounds, verbs and FMI/LMI turn it into a scene the customer plays in their own head.",
      keyPoints: [
        "Verbs carry persuasion past Broca's filter into the imagination, where customers see themselves acting.",
        "Cut black words: anything that doesn't sharpen the mental image.",
        "Robert Frank: selective detail, unusual angle, leave the obvious underwater; write the one-eighth above water.",
        "Frosting and Seussing: replace predictable phrases; invent words when it helps.",
        "Be Monet: ignore details, exaggerate color, remove black. Give every ad a first and last mental image."
      ],
      why: "These are concrete editing passes Zach can run on every script, caption and landing-page headline. They turn generic local-business copy into ads people actually picture themselves in.",
      example: {
        title: "Running the toolkit on a PMT voiceover",
        before: "“Pacific Motorcycle Training provides comprehensive, high-quality motorcycle safety courses taught by experienced, certified instructors in a safe and supportive learning environment. Motorcycles and helmets are provided. Register today!”",
        after: "FMI: “Your left hand squeezes the clutch for the very first time, and your heart thumps against the chin strap.” Middle: “By lunch the cones quit being obstacles. By Sunday you're tipping into the curve like the bike reads your mind.” LMI: “You pull the helmet off and your cheeks ache from grinning. Pacific Motorcycle Training.”",
        body: "Black words cut: comprehensive, high-quality, experienced, certified, safe, supportive, environment. The known (that a school has instructors and bikes) stays underwater. The one-eighth above water is the feeling of the first clutch squeeze, an unusual angle. Verbs do the work: squeezes, thumps, quit, tipping, reads, ache. The ad opens on one image and closes on another."
      },
      practice: [
        {
          prompt: "Dissect it: understand each tool.",
          fields: [
            "In your own words, what does “put the known underwater” mean? Give an example of a “seven-eighths” sentence from local advertising.",
            "What's the difference between frosting and Seussing? When is inventing a word a bad idea?",
            "Argue the other side: when does “write impressionistically rather than accurately” become a legal or trust problem in an ad?"
          ]
        },
        {
          prompt: "Apply it: rewrite a 30-second script for a ZDub prospect using at least five of the seven tools, and label them.",
          fields: ["Prospect and original script", "Rewritten script", "Tools used, labeled (black words, Robert Frank, frosting, Seussing, Monet, FMI/LMI, participant)"],
          rubric: [
            "Clear FMI and LMI",
            "Black words removed and the obvious left underwater",
            "At least three fresh, unexpected verbs",
            "Impressionistic but still truthful; the customer is the participant"
          ],
          model: "Prospect: a Sacramento pressure-washing company. Original: “We provide professional pressure washing for driveways, patios and siding. Affordable rates, satisfaction guaranteed.” Rewrite: “FMI: Your driveway has a shadow. Not from the tree, from eleven years of oil, pollen and that one summer of chalk art. In ninety minutes we peel that shadow off the concrete in long, satisfying stripes. LMI: Your neighbor slows down, looks at your driveway, then looks at his. Ridgeway Wash.” Tools: black words cut (professional, affordable, satisfaction); Robert Frank (the shadow angle; services list left underwater); frosting (peel the shadow); Monet (eleven years, exaggerated color); FMI/LMI; participant (your driveway, your neighbor)."
        }
      ],
      today: { task: "Take one caption or script you've written this week and run three passes: cut black words, find the one-eighth above water, then set a clear FMI and LMI.", output: "Before and after versions of one piece of copy", minutes: 20 },
      check: [
        { q: "What is a “black word”?", a: "A word that doesn't contribute to a more vivid or colorful mental image." },
        { q: "What are the three rules of “Be Monet”?", a: "Ignore the details, exaggerate the color, and remove the black." },
        { q: "What do FMI and LMI stand for?", a: "First mental image (the opening scene) and last mental image (the closing scene) of the ad's mental sequence." }
      ]
    },
    {
      id: "maw-010",
      part: "p2",
      chapter: 10,
      chapterTitle: "The Advantages of Intrusive Media",
      pages: "28",
      title: "The Advantages of Intrusive Media: you can close your eyes, but not your ears",
      minutes: 5,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 10 · The Advantages of Intrusive Media – Radio and Television · p. 28", who: "Roy H. Williams" }],
      quotes: [
        { text: "Echoic retention causes people to remember things they never committed to memory", page: "28" },
        { text: "One of the greatest advantages of radio is the absence of visual images.", page: "28" }
      ],
      idea: "One page, four advantages of intrusive media (radio and TV) over passive media (newspaper, Yellow Pages).\n\n**1. Echoic intrusiveness.** You can close your eyes but not your ears, and you keep hearing even after you look away. A print ad needs you to choose to look; sound arrives whether you choose it or not.\n\n**2. Echoic retention.** Roy asserts that echoic (sound) memory is vastly superior to iconic (visual) memory. Words, phrases, jingles and songs that surprise Broca's area are implanted and recalled far more easily than pictures. Echoic retention is why people remember things they never tried to memorize: a jingle from childhood, a phone number set to music, a slogan you can finish for a brand you've never bought. He calls it the heart and soul of advertising, understood by very few ad professionals.\n\n**3. Listener pattern predictability.** People listen to radio in habits: the same station on the same drive every day. That makes it easier to hit the *same person* again and again on radio than to find the same viewer repeatedly in TV prime time. Since sleep erases advertising (the theme of Chapters 14, 18 and 19), the medium that makes repetition easiest wins the battle Roy calls **Frequency vs. Sleep**.\n\n**4. Neural personalization.** The word “you” produces a different picture in every head. Radio's lack of pictures is an advantage: the ad can be about the listener personally. Say “next time you reach into your letterbox” and every listener sees *their own* letterbox, in the imagination area of the brain map (the dorsolateral prefrontal association area). Show a letterbox on TV and everyone sees yours.\n\n**Connections.** This page is the bridge between Chapter 9's brain science and the media rules later: Mistake 5 (don't rely on passive media to build preference), the radio scheduling rules (Chapter 19) and the Used Car Warehouse TV note in Chapter 8 (show the view, not the driver).\n\n**Modern translation.** Today's intrusive media are the ones that reach people who aren't searching: Reels and Stories, YouTube pre-roll, Spotify and podcast audio, connected TV. Today's passive media are the ones people consult when already looking: Google search, Yelp, Maps. Sound-on video with a strong voiceover gets echoic retention; second-person scripts and point-of-view shots keep neural personalization alive even on screen.",
      keyPoints: [
        "Echoic intrusiveness: sound reaches people whether or not they choose to pay attention.",
        "Echoic retention: surprising words, phrases and jingles stick far better than images, even without effort to remember.",
        "Radio listening habits make repeated reach to the same person easier, winning Frequency vs. Sleep.",
        "Neural personalization: without pictures, “you” lets each listener see their own life.",
        "Modern intrusive = feed video, audio, CTV; modern passive = search, Yelp, Maps."
      ],
      why: "ZDub's core channel, Meta, is intrusive: it reaches people before they're shopping. Knowing why sound, repetition and “you” matter tells Zach how to build Meta creative that does what Roy's radio ads did.",
      example: {
        title: "Neural personalization for a Sacramento HVAC Reel",
        before: "Video of a smiling actor family on a couch in a showroom-perfect living room, caption “Stay cool this summer with Valley Air!”",
        after: "Voiceover over a POV shot of a hand on a thermostat: “It's 104 outside. You walk in, drop your keys, and the house hits you like a warm towel. Next time you reach for that thermostat, picture this instead: cold air before your keys hit the counter.” Ends on the Valley Air name and a short sonic signature (two notes + “Valley Air”).",
        body: "The couch family shows *their* house, so viewers watch someone else. The POV version and second-person voiceover make every viewer see their own hallway and their own thermostat. The repeated two-note signature is a small bid for echoic retention: after enough weeks it plays in the viewer's head on its own."
      },
      practice: [
        {
          prompt: "Dissect it: weigh the four advantages.",
          fields: [
            "Which of the four advantages is most relevant to Meta Reels today, and which is weakest? Why?",
            "Explain neural personalization in your own words. Why can showing a person in an ad weaken it?",
            "Argue the other side: give a case where a visual, passive medium (Google, Yelp, a billboard) beats intrusive media for a local business."
          ]
        },
        {
          prompt: "Apply it: design one PMT audio-first asset that uses all four advantages.",
          fields: ["Format (Reel with voiceover, Spotify ad, podcast read)", "Script (under 30 seconds)", "Sonic signature or repeatable phrase", "Where the second-person “you” creates personalization"],
          rubric: [
            "Works with eyes closed or screen off (intrusive)",
            "Contains a surprising phrase or sound designed to be retained",
            "Built to run repeatedly to the same people (pattern predictability)",
            "Uses “you” so each person sees their own version"
          ],
          model: "Format: 20-second Reel voiceover that also runs as a Spotify audio ad. Script: “You've watched riders roll past at a red light and thought, someday. Here's a secret: someday takes one weekend. Saturday you learn the clutch. Sunday you learn the curve. Monday you're the one rolling past. Pacific Motorcycle Training.” Signature: a single throttle blip before the brand name, every ad. Personalization: “you've watched riders roll past” lets each person see their own intersection."
        }
      ],
      today: { task: "Watch PMT's current ads with your eyes closed. Note which ones still communicate anything, then write one 15-second voiceover line that would work audio-only.", output: "An audio-only check of current ads + one voiceover line", minutes: 15 },
      check: [
        { q: "Name the four advantages of intrusive media Roy lists.", a: "Echoic intrusiveness, echoic retention, listener pattern predictability, and neural personalization of the message." },
        { q: "Why is radio better than prime-time TV at winning Frequency vs. Sleep?", a: "Listeners follow predictable daily patterns, so it's easier to reach the same person repeatedly than to find the same TV viewer again and again." },
        { q: "What does the letterbox example show?", a: "Without a picture, “your letterbox” makes every listener see their own letterbox in their imagination; the ad becomes personal to each one." }
      ]
    },
    {
      id: "maw-011",
      part: "p2",
      chapter: 11,
      chapterTitle: "What Is “Branding,” Really?",
      pages: "29–31",
      title: "What Is Branding, Really?: consistency and frequency only work when tied to an emotional anchor",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 11 · What Is “Branding,” Really? · pp. 29–31", who: "Roy H. Williams" }],
      quotes: [
        { text: "if Advertising is “getting your name out,” then Branding is simply “attaching something to your name.”", page: "29" },
        { text: "FREQUENCY AND CONSISTENCY CREATE “BRANDING” ONLY WHEN YOUR MESSAGE IS TIED TO AN ESTABLISHED EMOTIONAL ANCHOR.", page: "30" }
      ],
      idea: "Roy strips the mystery out of branding. If advertising is getting your name out, branding is **attaching something to your name**. A brand is the sum of all the mental associations, good and bad, that your name triggers. So the real question is: what does your name stand for in the public's mind? Branding depends on the message, not the medium: speak to customers in their language about what matters to them. The goal: be the name people think of *first* and *feel best about* whenever they, or anyone they know, need what you sell.\n\n**Pavlov did it first.** Roy points to Ivan Pavlov's Nobel-winning work (1904): ring a bell while giving the dog meat paste, day after day, until the bell alone makes the dog salivate. Psychologists call that implanting an associative memory, a memory linked to another memory, plus a **recall cue**. Everyday versions: the song that brings back the night you met the love of your life, or describing a place as “a Steve Irwin kind of restaurant,” which instantly imports *wild, over the top, exciting, loud*. Repeatedly linking the restaurant with Steve Irwin would brand it.\n\n**The three keys:**\n\n1. **Consistency.** Pavlov never fed without the bell and never rang the bell without food. He didn't decide halfway through that this must be “a visual dog” and switch campaigns.\n2. **Frequency.** Day after day after day.\n3. **Anchoring.** This is where almost everyone fails. The recall cue must be tied to something *already* in the heart: the bell worked only because the dog already loved meat. Without that love, all the consistent, frequent bell-ringing would have done nothing but irritate the dog, which would have said, in effect, “I hate advertising. Cut it out with the bell.”\n\n**Are you irritating the dog?** Is your slogan, jingle or positioning line tied to an existing emotional anchor, or just repeated? Most advertisers irritate the dog, which is why people say they hate advertising. That's Broca talking: people hate *bad* advertising, the predictable, boring, cliché kind that advertisers love (“I'm paying, so let's talk about me, my company, my fast friendly service”). The public doesn't care.\n\nTo get a specific response, tie your identity to an anchor already known to produce it, then repeat it consistently and frequently. And be patient: training the public takes a lot of repetition. The closing Wizard note: branding needs a memorable, salient message plus enough weekly frequency to store it in long-term memory (Chapter 18, Mistake 10, explains why expiring offers never get stored).",
      keyPoints: [
        "Advertising gets your name out; branding attaches something to it.",
        "A brand = every association, good and bad, your name triggers.",
        "Goal: the name people think of first and feel best about when they or someone they know needs it.",
        "Three keys: consistency, frequency, and anchoring to an emotion already in the customer's heart.",
        "Repetition without an anchor just irritates the dog; that's why people hate advertising."
      ],
      why: "Most local “branding” is a logo plus a slogan repeated without an anchor. Zach can give PMT and trades a recall cue tied to something customers already feel, then protect it from being changed every month.",
      example: {
        title: "Anchoring PMT's brand",
        before: "Slogan on every ad: “Pacific Motorcycle Training: Quality Rider Education.” Repeated for two years. (No anchor. Irritating the dog.)",
        after: "Anchor: the near-universal memory of someone letting go of your bicycle seat and realizing you were riding on your own. Recall cue, repeated in every ad: “We let go when you're ready.” Ads show the instructor's hand coming off the student's shoulder, every time.",
        body: "The bicycle memory is already in nearly every customer's heart, loaded with pride, a little fear and freedom. Tying PMT's line and a consistent visual to it gives the repetition something to attach to. Consistency means it never changes; frequency means it runs every week; anchoring means it plugs into a feeling people already have."
      },
      practice: [
        {
          prompt: "Dissect it: test the three keys.",
          fields: [
            "In your own words, why did Pavlov's bell work, and what would have happened if the dog didn't love meat?",
            "Name a local brand slogan that is consistent and frequent but has no anchor. What does it make you feel?",
            "Argue the other side: can a brand be built without an emotional anchor, through pure frequency? Give an example and its cost."
          ]
        },
        {
          prompt: "Apply it: choose an emotional anchor and a recall cue for a ZDub client.",
          fields: ["Client", "The emotional anchor already in customers' hearts", "The recall cue (line, sound, image)", "How you'll keep it consistent and frequent for 12 months"],
          rubric: [
            "The anchor already exists in the customer; you're not inventing a feeling",
            "The recall cue is short, repeatable and distinctive",
            "Includes a consistency rule (what never changes)",
            "Includes a frequency plan (how often the audience meets it each week)"
          ],
          model: "Client: a Sacramento roofer. Anchor: the cozy relief of hearing rain on the roof from a warm bed. Recall cue: the sound of rain on shingles opening every ad, plus the line “Let it rain.” Consistency: every video opens on rain audio; the line closes every ad, never reworded. Frequency: homeowners within 12 miles reached about 3 times a week, year-round, with new storm-season creative but the same opening and line."
        }
      ],
      today: { task: "Write down what PMT's name currently triggers in a stranger's mind (ask two people who don't know it). Then list three emotional anchors PMT could attach to.", output: "Two strangers' associations + three candidate anchors", minutes: 20 },
      check: [
        { q: "What is a brand, according to Roy?", a: "The sum total of all mental associations, good and bad, triggered by a name." },
        { q: "What are the three keys to implanting an associative memory?", a: "Consistency, frequency, and anchoring (tying the recall cue to a memory or emotion already established)." },
        { q: "What happens when you repeat a message consistently and frequently without an anchor?", a: "You just irritate the dog; people come to hate the advertising instead of responding to it." }
      ]
    },
    {
      id: "maw-012",
      part: "p2",
      chapter: 12,
      chapterTitle: "Uncovery (success, story, horizon, target, budget)",
      pages: "32",
      title: "Uncovery, Part 1: decide the ending first, then the story, the horizon, the shopper and the budget",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 12 · Uncovery · p. 32 (with North Star, p. 34)", who: "Roy H. Williams & the Wizard of Ads Partners" }],
      quotes: [
        { text: "The uncovery tells how you want your business story to end, where to begin, what to leave out.", page: "32" },
        { text: "Don’t try to tell the customer your whole story; just tell your best one!", page: "32" }
      ],
      idea: "Chapter 2 introduced Uncovery as “digging for the diamond.” Chapter 12 turns it into the Partners' actual working checklist. It opens with a blunt line from a Wizard Academy discussion (Sara Boatz): spending money to tell the public who you are, before you've worked that out yourself, is foolish. An Uncovery is how you find out.\n\nWhat it produces: **how you want your business story to end, where to begin, and what to leave out**, plus what you're prepared to do to get there. Notice the order: like a novelist, you decide the ending first. The first five elements (p. 32):\n\n**1. How will you measure success?** What do you want to happen? What are you actually trying to accomplish? What would you call a happy ending? What is your destination, your **North Star**? The guide's WizardSword definition (p. 34): the constant guiding hope that helps you choose the right way at each turning and pulls you back on course when the winds of business push you off. Without it, any decision looks as good as any other (the Cheshire Cat line on p. 34: if you don't know where you're going, any road will do).\n\n**2. The Sword in the Stone.** The story unique to your business, which is really about the *message*: the thing you tell a prospect that separates you from competitors and makes them want to buy from you. What wonderful story of yours hasn't been told? And a crucial edit: don't tell your whole story, tell your **best** one.\n\n**3. How long is the time horizon?** When will success be measured? Will the advertising promote a special event or limited-time offer, or make you a household word? (Those need completely different schedules: see Chapter 19.)\n\n**4. Targeting.** Do you want to attract relational or transactional customers? (Chapter 3's case study is the argument for relational.)\n\n**5. Determine your ad budget.** Work out exactly how much you should spend *before* pouring money into advertising (Chapter 17 gives the formula).\n\n**Why this sequence works.** Each answer constrains the next. A North Star of “be the region's default motorcycle school in five years” demands a long time horizon, which demands relational targeting, which demands a story (not a discount), which demands a budget that can sustain years of repetition. Skip the first question and every later decision is arbitrary, which is exactly how businesses end up running a new promotion every month. The second half of the checklist (next lesson) covers category dominance, strategy, hidden assets, media and tracking.",
      keyPoints: [
        "Uncovery defines the ending, the beginning and what to leave out, and what you'll do to succeed.",
        "Start with how you'll measure success: the happy ending and the North Star.",
        "Sword in the Stone: the one story that distinguishes you. Tell your best story, not your whole story.",
        "Decide the time horizon: an event/offer or becoming a household word.",
        "Choose relational or transactional targeting, and set the budget before spending."
      ],
      why: "This is the discovery process ZDub should run before writing a single ad. It replaces “what do you want to post?” with questions that produce a strategy, and it makes ZDub's onboarding feel like consulting, not order-taking.",
      example: {
        title: "PMT's Uncovery, first five answers (draft)",
        before: "Typical intake form: “Services offered? Target audience? Budget? Brand colors? Competitors?”",
        after: "1) Success: every Basic class full by the Wednesday before, and PMT is the first name a Sacramento-area rider recommends. North Star: “nobody leaves our range afraid of their bike.” 2) Best story: instructors who were terrified beginners once themselves. 3) Horizon: household word over 3 years, not class-by-class promotions. 4) Target: relational: nervous first-timers and lapsed riders who want an expert they trust. 5) Budget: calculated from projected sales and range costs (Chapter 17) before any media is booked.",
        body: "The intake form collects facts. The Uncovery forces decisions, and each decision shapes the next. With a North Star about fear, the best story (instructors who were scared once) almost writes itself, and it rules out leading with price."
      },
      practice: [
        {
          prompt: "Dissect it: examine the first five elements.",
          fields: [
            "Why does Roy start an Uncovery with the ending (success, North Star) instead of the product?",
            "What's the difference between telling “your whole story” and “your best one”? Give an example from a local business.",
            "Argue the other side: when might a short time horizon (an event or promotion) be the right Uncovery answer?"
          ]
        },
        {
          prompt: "Apply it: run the first five Uncovery questions with a real prospect (or role-play the owner) and record the answers.",
          fields: ["Business", "Success / happy ending / North Star", "Sword in the Stone: the best story", "Time horizon", "Relational or transactional, and why", "Budget approach"],
          rubric: [
            "Success is defined concretely enough to measure",
            "One best story, not a list of selling points",
            "Time horizon is explicitly chosen (event vs. household word)",
            "Targeting and budget follow logically from the earlier answers"
          ],
          model: "Business: an East Sacramento bakery café. Success: weekday mornings at 80% seating by next spring; North Star: “the neighborhood's kitchen table.” Best story: the owner still bakes the 5 am batch herself with her grandmother's starter. Horizon: household word over 24 months, no coupon events. Targeting: relational: locals who want a regular place. Budget: calculate from projected sales, markup and rent before choosing media; likely a tight 3-mile Meta radius at high frequency."
        }
      ],
      today: { task: "Write PMT's (or ZDub's own) answers to the first five Uncovery questions in one sentence each. Circle the one you're least sure of.", output: "Five one-sentence answers with the weakest circled", minutes: 20 },
      check: [
        { q: "What three things does an Uncovery tell you about the business story?", a: "How you want it to end, where to begin, and what to leave out (plus what you're prepared to do to succeed)." },
        { q: "What is a North Star in Wizard vocabulary?", a: "The constant guiding hope that helps you choose the correct way at each turning and gets you back on track when business pushes you off course." },
        { q: "What time-horizon choice does the Uncovery ask you to make?", a: "Whether advertising will promote a special event or limited-time offer, or make you a household word, and when success will be measured." }
      ]
    },
    {
      id: "maw-012b",
      part: "p2",
      chapter: 12,
      chapterTitle: "Uncovery (dominance, strategy, assets, media, tracking)",
      pages: "33–34",
      title: "Uncovery, Part 2: be known for something, borrow from parallel businesses, use hidden assets, track everything",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 12 · Uncovery (continued) · pp. 33–34", who: "Roy H. Williams & the Wizard of Ads Partners" }],
      quotes: [
        { text: "Category dominance can only be achieved through focus with commitment.", page: "33" },
        { text: "You cannot improve that which you don’t measure.", page: "33" }
      ],
      idea: "The second half of the Uncovery checklist moves from *what you want* to *how you'll win*.\n\n**6. Category dominance.** The ultimate goal of branding is to be the business customers think of immediately, and feel best about, whenever your category comes up. That only comes from **focus with commitment**: take a stand and be known for something. The question to answer: *What will you be known for?*\n\n**7. Choose your strategy, using Business Topology.** Following your industry's rules won't produce dramatic success; rethinking them and bringing in new concepts will. A strategy also keeps every piece of marketing pulling in the same direction. The Wizard tool for rethinking the rules is **Business Topology** (p. 34): identifying **Parallel Businesses**, related businesses in *other* industries that share your defining characteristics, and studying them for an innovation model you can borrow.\n\n**8. What are your unleveraged assets?** What do you already have that isn't being used? The guide lists four kinds: **stories, abilities, relationships and products** that have never been positioned for maximum effect.\n\n**9. The media.** Every medium “works” when you know how and when to use it, so the real question is: *what is the highest and best use of your money?* How efficiently is it being spent? Roy adds a pointed diagnosis: an advertiser who buys month to month has no real confidence in his advertising. Booking week to week or month to month is the greatest waste of both ad dollars and the owner's time, and it's what you do when you have no plan for success. (Chapters 13, 14 and 19 turn this into rules.)\n\n**10. Tracking.** “How are we tracking?” is the question Wizard Partners ask most, at **every fortnightly meeting** with clients. Ask it of yourself too, because you can't improve what you don't measure.\n\n**Read the two halves together.** Elements 1–5 define the destination and the resources; 6–10 define the position, the strategy, the raw material, the delivery and the feedback loop. A finished Uncovery gives you one sentence you'll be known for, a borrowed idea nobody in your category is using, a list of untapped assets, a committed media plan and a meeting rhythm. That's also, nearly word for word, the service list the Partners sell in Chapter 25: Uncovery, strategy, message development and media planning.",
      keyPoints: [
        "Category dominance comes only from focus with commitment: decide what you'll be known for.",
        "Strategy: rethink your industry's rules with Business Topology, borrowing models from parallel businesses.",
        "Unleveraged assets: stories, abilities, relationships and products not yet positioned.",
        "Media question: what's the highest and best use of the money? Month-to-month buying signals no plan.",
        "Track constantly: “How are we tracking?” at every fortnightly meeting."
      ],
      why: "Business Topology and unleveraged assets are where ZDub can deliver ideas a template agency never will, and the fortnightly “How are we tracking?” meeting is a ready-made client rhythm for Zach.",
      example: {
        title: "Business Topology for PMT",
        before: "PMT copies what other motorcycle schools do: list course types, prices and dates; run a spring discount.",
        after: "Parallel businesses that share PMT's defining traits (adults learning a scary physical skill, safety-critical, an instructor's trust matters): flight schools, adult swim lessons, climbing gyms. Borrowed model: the flight school's “discovery flight.” PMT launches a one-hour “First Ride” intro on the range: sit on a bike, find the friction zone, roll 20 feet with an instructor. Ad: “Not sure you're a rider? Find out in an hour.”",
        body: "Nobody in PMT's category offers a low-commitment taste of riding because nobody looks outside the category. The parallel business supplies the innovation. Unleveraged assets then fuel the ads: instructors' own “I was terrified too” stories, hundreds of graduation photos, the range at sunrise, relationships with local dealers who could refer new buyers."
      },
      practice: [
        {
          prompt: "Dissect it: work the second-half elements.",
          fields: [
            "Explain Business Topology in your own words. Why does looking outside your industry beat copying competitors?",
            "Why does Roy treat month-to-month media buying as a sign of no confidence and no plan?",
            "Argue the other side: when is flexible, short-commitment media buying genuinely smarter (especially on Meta)?"
          ]
        },
        {
          prompt: "Apply it: complete elements 6–10 for a ZDub prospect.",
          fields: ["Prospect", "What they'll be known for (one sentence)", "Two parallel businesses and the model you'd borrow", "Unleveraged assets: one story, ability, relationship and product", "Highest and best use of the money", "Tracking: the 3 numbers you'll review every two weeks"],
          rubric: [
            "One thing to be known for, not a list",
            "Parallel businesses come from outside the category and share defining traits",
            "All four kinds of unleveraged asset considered",
            "Tracking metrics connect to the success definition from Part 1"
          ],
          model: "Prospect: a Rancho Cordova auto detailer. Known for: “the car smells new again.” Parallel businesses: high-end hotels (turndown details, scent signature) and dental offices (reminder cadence). Borrowed: a signature scent and a 90-day “cleaning reminder” text. Assets: story (owner restored his late dad's truck); ability (ceramic coating certification); relationship (two car dealerships that send overflow); product (pet-hair removal nobody advertises). Best use of money: Meta video in an 8-mile radius at 3×/week plus a dealership referral card. Tracking: booked jobs, average ticket, % of customers who say they saw the ads."
        }
      ],
      today: { task: "List three parallel businesses for PMT (or ZDub) outside its industry. For each, write one practice you could borrow this quarter.", output: "Three parallel businesses + three borrowable ideas", minutes: 20 },
      check: [
        { q: "How is category dominance achieved, according to the Uncovery?", a: "Only through focus with commitment: taking a stand and being known for something." },
        { q: "What are Business Topology and a Parallel Business?", a: "Business Topology is identifying parallel businesses by matching defining characteristics; a Parallel Business is a related business studied to discover an innovation model." },
        { q: "What four kinds of unleveraged assets does the guide name?", a: "Stories, abilities, relationships and products not yet positioned for maximum effect." }
      ]
    },
    {
      id: "maw-013",
      part: "p3",
      chapter: 13,
      chapterTitle: "Media Mix",
      pages: "35",
      title: "Media Mix: what works for Coke can poison a small business; do one thing well",
      minutes: 5,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 13 · Media Mix · p. 35", who: "Roy H. Williams" }],
      quotes: [
        { text: "What’s good for the big corporate giants can be poison to the independent business owner.", page: "35" },
        { text: "I recommend that you do one thing well rather than two things badly.", page: "35" }
      ],
      idea: "“Media mix” is the conventional idea that you should spread a campaign across several media: newspaper, radio, billboards and so on. Roy unpacks its two hidden assumptions:\n\n1. **The same people** who see your newspaper ad will also hear your radio ad and notice your billboard.\n2. They'll **recognize all of it as coming from one advertiser** and connect the pieces in their mind.\n\nIn practice, Roy says, these fragmented campaigns are rarely connected in the customer's mind. Each piece is too thin to be noticed, let alone linked to the others.\n\nHe doesn't call media mix false. He calls it a truth that belongs to a different kind of company. It quietly assumes **your budget is big enough to do a good job in every part of the mix.** Procter & Gamble, Coke, Pepsi and Ford can run radio, television, newspapers, magazines and even skywriting without doing any of it halfway. Is that true of your company? If not, his recommendation is plain: **do one thing well rather than two things badly.** What's good for corporate giants can be poison for an independent owner.\n\nWhy is it poison and not just less efficient? Because of everything the guide has established so far. Advertising works through repetition to the *same* person (Chapter 4's ten-people-ten-times rule), and sleep erases thin exposure. Split a modest budget across four media and you get four audiences reached too rarely in each, which is to say, nobody reached enough. Chapter 14 gives the alternative (dominate one medium, then add a second), and Mistake 2 in Chapter 18 shows the arithmetic.\n\nThe page closes with Earl Nightingale: never give up on a dream because of how long it will take; the time will pass anyway. In context, it's a nudge toward patience: dominating one medium is slower to feel impressive than being “everywhere,” but it actually builds something.\n\n**Modern translation.** Today's media-mix pitch is “omnichannel”: Meta, Google, TikTok, YouTube, Nextdoor, email, SMS, billboards. For a local business spending $1,500–$5,000 a month, that usually means a few hundred dollars per channel, below the level where any one of them builds memory. Roy's rule says: pick the single intrusive channel that reaches your people best, and fund it until you own it.",
      keyPoints: [
        "Media mix assumes the same people see every medium and connect the pieces; they rarely do.",
        "It also assumes a budget big enough to do every part of the mix well.",
        "Giants like P&G, Coke, Pepsi and Ford can afford that; most local businesses can't.",
        "Do one thing well rather than two things badly.",
        "Modern version: “omnichannel” on a small budget = too little repetition everywhere."
      ],
      why: "Local owners feel they must be “everywhere.” Zach can use this chapter to concentrate a client's budget into one channel ZDub can dominate, which is also easier to manage and measure.",
      example: {
        title: "Concentrating a $3,000/month budget for a Sacramento plumber",
        before: "$600 Meta, $600 Google Ads, $500 Nextdoor, $500 Yelp, $400 mailers, $400 a radio remnant package. Six thin channels; nothing is reached often enough to remember.",
        after: "$2,400 Meta video to homeowners within 10 miles at about 3 exposures a week, one consistent message; $600 kept on Google Local Services Ads to catch people already searching. Everything else paused.",
        body: "Meta becomes the one intrusive medium done well, building preference before the leak happens. Google LSA stays as a passive catch-net for people already in the market (Mistake 5 in Chapter 18 explains why passive media can't build preference). Once revenue grows, a second intrusive medium can be added and dominated in turn."
      },
      practice: [
        {
          prompt: "Dissect it: question the media-mix religion.",
          fields: [
            "What are the two assumptions behind media mix, in your own words? Which one is usually false for a local business?",
            "Why is a thin mix “poison” rather than just a bit less efficient?",
            "Argue the other side: when does a small business genuinely need two media at once?"
          ]
        },
        {
          prompt: "Apply it: rebuild a prospect's media plan around one thing done well.",
          fields: ["Prospect and current monthly spend by channel", "The one medium you'd fund to dominance, and why", "What gets cut or paused", "The trigger for adding a second medium later"],
          rubric: [
            "Picks one primary medium that reaches the target customer with repetition",
            "Cuts or pauses channels that can't be funded properly",
            "Explains the choice using repetition to the same people",
            "Sets a concrete growth trigger for adding a second medium"
          ],
          model: "Prospect: a Davis yoga studio spending $1,800/month: $500 Meta, $400 Google, $300 ClassPass promos, $300 local magazine, $300 flyers. Fund: Instagram/Facebook video to women 25–55 within 6 miles, $1,500/month, about 3 views a week each. Cut: magazine and flyers; reduce ClassPass. Keep: $300 Google brand and “yoga near me” search. Add a second medium when monthly memberships pass 220 for two straight months."
        }
      ],
      today: { task: "List every channel PMT (or a prospect) currently spends on with its monthly amount. Mark which ones are funded enough to reach the same person at least 3 times a week.", output: "A channel list with a yes/no repetition check", minutes: 15 },
      check: [
        { q: "What two things does media mix assume?", a: "That the same people encounter all the media, and that they recognize every piece as coming from the same advertiser." },
        { q: "Why does media mix work for P&G, Coke, Pepsi and Ford?", a: "Their budgets are big enough to do every part of the mix well without compromising any of it." },
        { q: "What does Roy recommend for a business without that kind of budget?", a: "Do one thing well rather than two things badly." }
      ]
    },
    {
      id: "maw-014",
      part: "p3",
      chapter: 14,
      chapterTitle: "Media Dominance",
      pages: "36",
      title: "Media Dominance: own a slice completely, because people don't stay reached",
      minutes: 5,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 14 · Media Dominance · p. 36", who: "Roy H. Williams" }],
      quotes: [
        { text: "Always dominate a medium.", page: "36" },
        { text: "people don’t stay reached anymore than the lawn stays mowed.", page: "36" }
      ],
      idea: "Media dominance, defined in one line: **the position owned by the advertiser with the greatest share of voice.** (Share of voice is defined in Chapter 15: your percentage of all advertising in your category.)\n\nThe rule: never do two things half-heartedly when you can do one wholeheartedly. **Always dominate a medium.** And if you can't dominate a whole medium, shrink the slice until you can:\n\n- **Radio:** can't dominate all of radio? Dominate one station. Can't dominate a whole station? Dominate one *daypart* on it.\n- **TV:** can't dominate all of television? Dominate one hour of the day. Can't dominate an hour? Dominate a single show.\n- **Then grow:** when the business has grown, dominate a second slice, then a third.\n\nThis is the practical answer to Chapter 13's “do one thing well,” and to Chapter 4's advice to buy a smaller audience you can reach relentlessly. Dominance is relative: you don't need the biggest budget in town, just the biggest voice in the slice you've chosen.\n\n**The lawn.** Roy then kills a common piece of advertiser logic: “We've already reached these people; now we need new ones.” Sleep, “the great eraser of the mind,” wipes out advertising. People don't stay reached any more than a lawn stays mowed. You don't mow once and move to the neighbor's yard. The key to dominance is **relentless repetition** to the same people.\n\nThe page closes with Morris Hite's line that more money is wasted in advertising by underspending than by overspending: underspending is like buying a ticket halfway to Europe. You pay real money and never arrive.\n\n**Modern translation.** On Meta, the slices are geography and audience. Can't dominate the whole Sacramento metro? Dominate a 10-mile radius. Can't dominate that? Dominate the three zip codes nearest the business, or one clearly defined audience. Watch weekly reach and frequency in Ads Manager: if frequency is under about 2 per week, the slice is too big for the budget. Check competitors in the Meta Ad Library to estimate your share of voice. And resist the “we've reached them already, let's expand” instinct: frequency over months is the point, as long as you keep refreshing the creative (Chapter 19: change the ad after 12–20 exposures, not the audience).",
      keyPoints: [
        "Media dominance = the position of the advertiser with the greatest share of voice.",
        "Always dominate something: a station, a daypart, an hour, a show. Shrink the slice until you can own it.",
        "Then grow by dominating a second and third slice.",
        "People don't stay reached any more than a lawn stays mowed; sleep erases ads.",
        "Underspending is a ticket halfway to Europe: cost without arrival."
      ],
      why: "Most of ZDub's clients can't outspend everyone in Sacramento, but they can own a radius, a city or an audience. Dominance gives small budgets a winnable game and a way to show progress.",
      example: {
        title: "A dominance ladder for a Roseville roofer on Meta",
        before: "$2,000/month targeting homeowners across the whole Sacramento metro (about 2 million people). Weekly frequency: 0.6. “We need to reach more people.”",
        after: "Step 1: Roseville + Rocklin homeowners only, about 3 exposures a week. Step 2 (when monthly jobs grow 30%): add Granite Bay and Lincoln. Step 3: add Citrus Heights. Never drop Step 1 to “reach new people”; refresh the creative every 5–6 weeks instead.",
        body: "In the metro-wide plan, the roofer is a whisper among competitors. In the Roseville slice, he's the loudest roofer in people's feeds, and when a storm hits, his is the name they remember. Expansion is earned by growth, not by boredom with the current audience."
      },
      practice: [
        {
          prompt: "Dissect it: unpack the dominance ladder.",
          fields: [
            "Why is dominating a small slice better than being present in a big one? Use the lawn and sleep in your answer.",
            "What's wrong with “we've already reached these people, let's find new ones”?",
            "Argue the other side: when could dominating too small a slice starve a business?"
          ]
        },
        {
          prompt: "Apply it: build a three-step dominance ladder for PMT on Meta.",
          fields: ["Step 1 slice (geography/audience) and estimated size", "Budget and target weekly frequency", "Steps 2 and 3, and the growth trigger for each", "How you'll keep the Step 1 audience fresh without abandoning it"],
          rubric: [
            "Step 1 is small enough to reach at about 3 times a week on the budget",
            "Each expansion is triggered by business growth, not impatience",
            "Never abandons an owned slice",
            "Creative refresh replaces audience-hopping"
          ],
          model: "Step 1: adults 21–55 within 12 miles of the range (est. 600k people; at $1,500/month and ~$12 CPM that's ~125k impressions, enough for roughly 10k people at 3×/week); narrow further to interests in motorcycles/powersports to land near that number. Step 2 (when classes run 85%+ full for 6 weeks): widen to 20 miles. Step 3 (when PMT adds a second weekend class): add a returning-rider audience 35–65. Freshness: a new set of 4 videos every 5 weeks, same message."
        }
      ],
      today: { task: "Open Ads Manager for PMT (or any account) and find last 7 days' reach and frequency. If frequency is under 2, write down the smaller slice you'd shrink to.", output: "Current weekly reach/frequency + a proposed dominant slice", minutes: 15 },
      check: [
        { q: "How does the guide define media dominance?", a: "The position owned by the advertiser with the greatest share of voice." },
        { q: "What's the radio dominance ladder?", a: "If you can't dominate all of radio, dominate one station; if not a whole station, dominate one daypart; then add a second and third as you grow." },
        { q: "Why can't you say “we've already reached these people”?", a: "Sleep erases advertising; people don't stay reached any more than a lawn stays mowed, so dominance requires relentless repetition." }
      ]
    },
    {
      id: "maw-015",
      part: "p3",
      chapter: 15,
      chapterTitle: "The Sales Rep, the Ad Writer, and the Business Owner",
      pages: "37–38",
      title: "Sales Rep, Ad Writer, Business Owner: share of voice, impact quotient and personal experience",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 15 · The Sales Rep, the Ad Writer, and the Business Owner · pp. 37–38", who: "Roy H. Williams" }],
      quotes: [
        { text: "A strong ad with a weak budget will beat a weak ad with a larger budget almost every time.", page: "37" },
        { text: "Advertising will only accelerate what was going to happen anyway.", page: "37" }
      ],
      idea: "Successful advertising, Roy says, takes a tight trio, and each member owns one variable.\n\n**1. The sales rep owns Share of Voice (the media plan).** Their job is to deliver the greatest share of voice the owner's budget allows. Beyond that, a rep can do very little. *Share of Voice* (p. 38): your business's percentage of all advertising done in your category. If you advertise and competitors don't, you have 100%. It can be measured for the whole market or a single medium (zero in one medium, total in another), and it grows from a properly focused budget (Chapters 13–14).\n\n**2. The ad writer owns Impact Quotient.** The most overlooked and underpaid member, often at the bottom of the food chain, yet without persuasive ads, share of voice is worth little. Roy asks: how well do you know the person writing your ads, and how well do they know *you*? Then the line that should change how budgets are allocated: a strong ad with a weak budget beats a weak ad with a bigger budget almost every time. So which makes more sense: flooding the media with weak ads, or spending more time raising the Impact Quotient? *Impact Quotient* (p. 38): an ad's power to convince. Its core is **saliency**, the relevance of the message to the consumer, which Roy calls the single most overlooked factor in advertising.\n\n**3. The business owner owns Personal Experience.** Said plainly: advertising can't fix a broken business, can't make you better at what you do, and can't turn failure into success. It only **accelerates what was going to happen anyway.** Good ads won't erase a disappointing experience or a bad reputation; a happy experience accelerates the momentum good ads create. *Personal Experience* (p. 38): the customer's experience with your company, effectively your reputation. A business's growth or decline usually follows its PE, and **PE can't be changed by advertising.** (This is Chapter 2's “world inside your door.”)\n\nLegendary campaigns are born when all three realize success is impossible without the best efforts of the other two. The page ends with a Wizard line on training: you might train staff and lose them, but what's worse, trained staff leaving or untrained staff staying?",
      keyPoints: [
        "Sales rep → Share of Voice: your % of all advertising in your category; delivered by a focused budget.",
        "Ad writer → Impact Quotient: an ad's power to convince; saliency (relevance) is the most overlooked factor.",
        "A strong ad on a weak budget usually beats a weak ad on a big budget.",
        "Owner → Personal Experience: your reputation; advertising can't change it and only accelerates what was coming.",
        "Great campaigns need all three doing their best work."
      ],
      why: "ZDub plays both rep (media plan) and writer (impact quotient), so Zach controls two of the three variables. The third, the client's experience, decides whether ZDub's work accelerates a success or a failure, so it belongs in every qualification call.",
      example: {
        title: "Diagnosing a stalled Sacramento med spa account with the trio",
        before: "Client: “The ads aren't working, let's double the budget.”",
        after: "Share of Voice: three competitors run 40+ active ads each (Ad Library); we run 4, but in a tight 7-mile radius at 3/week we likely lead locally. Impact Quotient: our ads list treatments and prices; low saliency, nothing about the client's real worry (looking “done”). Personal Experience: two recent reviews mention being upsold hard. Plan: don't double the budget. Rewrite ads around “nobody will know, they'll just think you slept well,” and fix the upsell script before scaling.",
        body: "Doubling spend would have increased share of voice while leaving a low impact quotient and a reputation problem untouched, accelerating what was already going to happen. The trio framework finds the real constraint."
      },
      practice: [
        {
          prompt: "Dissect it: weigh the three variables.",
          fields: [
            "Restate Share of Voice, Impact Quotient and Personal Experience in your own words, with one local example each.",
            "Why does Roy say the ad writer is the most overlooked member? What does that imply about where money should go?",
            "Argue the other side: when would a weak ad with a big budget actually beat a strong ad with a small one?"
          ]
        },
        {
          prompt: "Apply it: run a trio audit on PMT or a prospect and decide which variable to fix first.",
          fields: ["Share of Voice: your estimate and how you got it", "Impact Quotient: score 1–10 and the saliency gap", "Personal Experience: evidence from reviews/mystery shop", "First fix and why"],
          rubric: [
            "Share of voice is estimated with real evidence (Ad Library, frequency, competitor activity)",
            "Impact quotient judged on saliency to the customer, not on looks",
            "Personal experience judged from customer evidence, not the owner's opinion",
            "First fix targets the true bottleneck"
          ],
          model: "PMT. Share of Voice: Ad Library shows two competing schools with 3 and 6 active ads; PMT has 8 in a 15-mile radius; likely the leader. Impact Quotient: 5/10; ads describe the course, few speak to the beginner's fear of looking foolish. Personal Experience: 4.9 stars; reviews praise patient instructors. First fix: Impact Quotient. Rewrite ads around the fear and the patient-instructor proof; the experience is already strong enough to be accelerated."
        }
      ],
      today: { task: "Look up PMT's two closest competitors in the Meta Ad Library. Count their active ads vs. PMT's and write a one-line share-of-voice estimate.", output: "Competitor ad counts + a share-of-voice estimate", minutes: 15 },
      check: [
        { q: "What does each member of the trio own?", a: "Sales rep: share of voice (media plan). Ad writer: impact quotient. Business owner: personal experience." },
        { q: "What is Impact Quotient, and what's its most overlooked factor?", a: "An ad's power to convince; saliency, the relevance of the message to the consumer." },
        { q: "What can advertising do for a business, and what can't it do?", a: "It can accelerate what was going to happen anyway; it can't repair a broken business, change personal experience or erase a bad reputation." }
      ]
    },
    {
      id: "maw-016",
      part: "p3",
      chapter: 16,
      chapterTitle: "Intellect and Emotion",
      pages: "39",
      title: "Intellect and Emotion: reason leads to conclusions, emotion leads to action, and the sales floor must sound like the ads",
      minutes: 5,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 16 · Intellect and Emotion · p. 39", who: "Roy H. Williams" }],
      quotes: [
        { text: "reason leads to conclusions while emotion leads to actions.", page: "39" },
        { text: "Listening to your salespeople should be like hearing a continuation of your ads.", page: "39" }
      ],
      idea: "The chapter opens with a question: does the customer buy the best value, or what he *feels* is the best value? Roy's answer: people usually do what their emotions dictate, then find logic to justify it. So nothing matters more in advertising and selling than emotion, and whatever you sell, the intangibles are what count.\n\nHe borrows neurologist Donald Calne's distinction: **reason leads to conclusions; emotion leads to actions.** A purely logical ad can win the argument and still not move anyone.\n\n**The expert's blind spot.** You and your salespeople see your product far more intellectually than customers do. You notice what makes it different from the competitor's; the customer sees only what it will do for *them*, and chances are the competitor's does the same thing. The benefits you value aren't the benefits they value. (This is Mistake 3 in Chapter 18, “assuming the business owner knows best,” from another angle.)\n\n**Advertising starts the sale; people finish it.** Advertising can raise the customer's emotional predisposition toward you and increase the number of selling opportunities, but it always takes a salesperson to close. Selling begins in the ad and must be completed on the sales floor. So: do your salespeople know what your ads say? Are they in step with the spirit and thrust of the message?\n\n**One message, inside and out.** Roy's test: listening to your salespeople should feel like hearing a continuation of your ads. If ads and salespeople say different things, bring them together. The company that sells best is the one where the **external sales message** (its advertising) and the **internal sales message** (what its salespeople say face to face) line up exactly. When both march to the same drummer, you get synchronicity. And the drummer they're both straining to hear? The owner. (Chapter 2's executive office again: the message has to start in the owner's chair.)\n\n**The hidden lesson.** An ad that promises warmth followed by a curt phone call isn't just inconsistent, it's a broken promise (Chapter 22: every ad is a promise). The emotional predisposition the ad created gets spent the moment the human contradicts it.\n\n**Modern translation.** For ZDub's clients, “the sales floor” is the phone call, the DM reply, the text-back and the estimate visit. If the Meta ad sells patience and the front desk sounds rushed, the ad's emotional work is wasted.",
      keyPoints: [
        "People act on emotion, then justify with logic; sell the intangibles.",
        "Reason leads to conclusions; emotion leads to actions (Donald Calne).",
        "Experts see their product intellectually; customers see only what it does for them.",
        "Ads create predisposition and opportunities; a salesperson still closes.",
        "External message (ads) and internal message (sales talk) must match, led by the owner."
      ],
      why: "Many ZDub leads die between the ad and the sale: a slow, off-message phone call or DM reply. Writing the client's follow-up script to continue the ad is part of making ads work.",
      example: {
        title: "Continuing PMT's ad on the phone",
        before: "Ad: “Nervous? Most of our students are. Small groups, patient instructors.” Phone: “Basic course is Saturday and Sunday, $X, bring boots and gloves, do you want to book?”",
        after: "Phone: “Totally normal to be nervous. Honestly, most people who call us haven't ridden either. Can I ask what's got you thinking about riding? ... Here's what the first morning looks like, so nothing surprises you. ... Would Saturday the 14th work, or would you like a weekend with a smaller group?”",
        body: "The ad created an emotional predisposition (“these people get my fear”). The new phone script keeps the same drumbeat: it validates the fear, describes the experience and only then asks for the booking. Same message outside and inside."
      },
      practice: [
        {
          prompt: "Dissect it: separate intellect from emotion.",
          fields: [
            "In your own words, what's the difference between a conclusion and an action, and why does it matter for ads?",
            "Pick a ZDub prospect. List one benefit the owner sees and one benefit the customer actually feels.",
            "Argue the other side: name a purchase where logic genuinely drives the decision. Does emotion still play a role?"
          ]
        },
        {
          prompt: "Apply it: write a follow-up script for a client that continues their current ad's emotional message.",
          fields: ["The ad's core emotional promise", "Current follow-up (call, DM or text) as it happens today", "Rewritten follow-up script", "One line the owner should say in staff training"],
          rubric: [
            "The script repeats the ad's emotional promise in conversation",
            "Leads with the customer's feeling before logistics or price",
            "Asks for the booking only after the emotional need is met",
            "Owner's training line makes the owner the drummer"
          ],
          model: "Client: a Sacramento HVAC company. Ad promise: “We fix it today so your family sleeps cool tonight.” Current: “Next opening is Thursday, diagnostic fee is $89.” Rewrite: “Oh no, with this heat? Let's get your family cool tonight. I can have a tech there between 2 and 4 today. While we wait, close the blinds on the west side and run a fan. Can I get your address?” Owner's line: “Every call is the ad, continued. If the ad says tonight, we say tonight.”"
        }
      ],
      today: { task: "Read PMT's best ad, then call or DM PMT as a prospect (or ask whoever answers to role-play). Write down the three biggest differences between what the ad promises and what the conversation delivers.", output: "Three ad-vs-conversation gaps", minutes: 15 },
      check: [
        { q: "What's Donald Calne's distinction, as Roy uses it?", a: "Reason leads to conclusions; emotion leads to actions." },
        { q: "What can advertising do, and what does it still take a salesperson to do?", a: "Advertising raises emotional predisposition and increases selling opportunities; a salesperson still has to close the sale." },
        { q: "Who is the “drummer” that ad people and salespeople should both follow?", a: "The business owner." }
      ]
    },
    {
      id: "maw-017",
      part: "p3",
      chapter: 17,
      chapterTitle: "Calculating Your Ad Budget",
      pages: "40–42",
      title: "Calculating Your Ad Budget: 10–12% of sales × markup, minus rent",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 17 · Calculating Your Ad Budget · pp. 40–42", who: "Roy H. Williams" }],
      quotes: [
        { text: "An extremely high Cost of Occupancy (rent) for a landmark location is often the least expensive advertising available.", page: "40" },
        { text: "Most business owners know their margin by heart, but never their markup.", page: "41" }
      ],
      idea: "Roy starts with the purpose of advertising: to increase a business's exposure beyond what its physical location provides. That reframes rent. A landmark location with sky-high rent is often the cheapest advertising available, and businesses that save on a weak location always have to advertise much more heavily. So rent and advertising are two parts of one number: **total cost of exposure**.\n\nThere's no one-size formula for every business, but there's a concise one for retail that can be adjusted for other categories.\n\n**Step 1.** Take **10%** and **12%** of projected annual gross sales, and multiply each by the **markup** on your average transaction. Markup, not margin:\n\n- **Markup** = gross profit ÷ cost.\n- **Margin** = gross profit ÷ selling price.\n- Sell for $150 something that cost $100: the same $50 profit is a **50% markup** but only a **33.3% margin**.\n- Typical markups: many retailers (carpet, jewelry) about 100%; some as low as 50%; some 200%; big-ticket items like cars and houses only 10–15%.\n\n**Step 2.** Subtract your annual **cost of occupancy** (rent) from both adjusted numbers. What remains is your **minimum and maximum allowable ad budget**. You may find you've already spent your ad budget on rent, or that you should be advertising far more than you thought.\n\n**The worked example (pp. 41–42).** Projected sales $1,000,000; margin 48%; rent $36,000.\n1. 10% and 12% of sales: $100,000 and $120,000.\n2. Convert margin to markup: gross profit $480,000 ÷ cost $520,000 = **92.3%**.\n3. $100,000 × 92.3% = **$92,300**; $120,000 × 92.3% = **$110,760** (the adjusted budget for total cost of exposure).\n4. Minus $36,000 rent: an ad budget of **$56,300 to $74,760** a year.\n\n**The rent test.** Change the rent to $75,000 and the ad budget drops to **$17,300–$35,760**, only 1.7–3.5% of sales. That's why Roy rejects the ad-rep rule of “5–7% of gross sales”: no percentage of sales means anything without your markup and your rent. He calls his formula the only one that reconciles your ad budget with your rent and the profitability of your average sale.\n\n**What the formula implies:** at 100% markup, total exposure is 10–12% of sales; at 50% markup, 5–6%; at 200%, 20–24%. Higher-profit sales can afford more exposure.\n\nThe chapter closes with a Wizard note: every owner decides how much profit to take out and how much to reinvest. Because of the near-universal fear of “wasting” money, few advertise as aggressively as they should, so in most categories runaway growth is sitting there for anyone with the money to invest and the nerve to tolerate the risk.",
      keyPoints: [
        "Advertising and rent are one budget: total cost of exposure. Great locations are advertising.",
        "Step 1: 10% and 12% of projected sales, each × markup (gross profit ÷ cost, not margin).",
        "Step 2: subtract annual rent; the remainder is your minimum and maximum ad budget.",
        "Example: $1M sales, 48% margin (92.3% markup), $36k rent → $56,300–$74,760.",
        "Ignore “5–7% of sales”; with $75k rent the same business should spend only $17,300–$35,760."
      ],
      why: "Clients ask Zach “how much should I spend?” and most answers are guesses. This formula gives ZDub a defensible, client-specific budget range built from the client's own numbers, and it explains why a home-based contractor can afford more ads than a store with expensive rent.",
      example: {
        title: "The formula for a Sacramento flooring showroom",
        before: "Owner: “My last agency said spend 5% of sales, so $60,000.”",
        after: "Projected sales $1,200,000; margin 40% → gross profit $480,000, cost $720,000 → markup 66.7%. 10% of sales $120,000 × 66.7% = $80,000; 12% = $144,000 × 66.7% = $96,000. Showroom rent $48,000. Ad budget: $32,000–$48,000 a year ($2,667–$4,000/month), 2.7–4% of sales.",
        body: "The 5% rule would have overspent by $12,000–$28,000 because it ignored a modest markup and a real showroom rent. If the same owner moved to a cheap warehouse unit with $18,000 rent, the formula says advertise more ($62,000–$78,000), because the location is no longer doing any of the advertising."
      },
      practice: [
        {
          prompt: "Dissect it: understand why the formula works.",
          fields: [
            "Explain markup vs. margin with your own example, and why the formula needs markup.",
            "Why does Roy treat rent as part of the advertising budget?",
            "Argue the other side: what goes wrong if you apply this retail formula to a service business with a 300% markup? How would you adjust it?"
          ]
        },
        {
          prompt: "Apply it: calculate PMT's (or a prospect's) ad budget range with the formula.",
          fields: ["Projected annual sales", "Margin → gross profit and cost → markup", "10% and 12% × markup", "Annual cost of occupancy", "Ad budget range (yearly and monthly) and % of sales"],
          rubric: [
            "Converts margin to markup correctly (gross profit ÷ cost)",
            "Applies both 10% and 12%",
            "Subtracts the full annual cost of occupancy",
            "States the range per year, per month and as % of sales, with a sanity check"
          ],
          model: "PMT (hypothetical): sales $600,000; margin 55% (instructor pay, bike upkeep, insurance as direct costs) → gross profit $330,000, cost $270,000 → markup 122.2%. 10%: $60,000 × 1.222 = $73,333; 12%: $72,000 × 1.222 = $88,000. Range lease and office $36,000. Ad budget $37,333–$52,000/yr ($3,111–$4,333/month), about 6.2–8.7% of sales. Sanity check: higher than the 5–7% rule because a service with high markup and modest rent can afford more exposure."
        }
      ],
      today: { task: "Build a 6-cell ad-budget calculator in a spreadsheet: sales, margin, rent → markup, low budget, high budget. Test it with Roy's $1M / 48% / $36k example to confirm $56,300 and $74,760.", output: "A working budget calculator you can use on sales calls", minutes: 25 },
      check: [
        { q: "What are the two steps of Roy's ad budget formula?", a: "1) Take 10% and 12% of projected annual sales and multiply each by your markup. 2) Subtract your annual cost of occupancy (rent); the remainders are your minimum and maximum ad budgets." },
        { q: "Convert a 48% margin to markup.", a: "Gross profit ÷ cost: $480,000 ÷ $520,000 = 92.3% markup." },
        { q: "Why does Roy reject “5–7% of gross sales”?", a: "It ignores markup and rent; the same $1M business with $75,000 rent should spend only 1.7–3.5% of sales ($17,300–$35,760)." }
      ]
    },
    {
      id: "maw-018",
      part: "p4",
      chapter: 18,
      chapterTitle: "The Top 12 Advertising Mistakes to Avoid (Mistake 1)",
      pages: "43–47",
      title: "Top 12 Mistakes, Part 1: the desire for instant gratification and the trap of ad cocaine",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 18 · The Top 12 Advertising Mistakes to Avoid · Mistake 1 · pp. 43–47", who: "Roy H. Williams" }],
      quotes: [
        { text: "the longer you keep doing what works immediately, the less and less well it will work.", page: "43" },
        { text: "Successful companies don’t spend their ad dollars training their customers to wait for a sale.", page: "44" }
      ],
      idea: "**Mistake 1: the desire for instant gratification.** Most advertisers treat advertising like a bubble-gum machine: coins in, crank the handle, results out. It doesn't work that way. The decision someone makes today is rarely influenced by ads they heard today, this week or even this month. You *can* pull in transactional customers that way, but the longer you keep doing what works immediately, the less well it works. Roy calls it a law of the universe, true in agriculture, physics, chemistry and advertising.\n\n**Ad cocaine.** Ask a doctor how to feel good and you'll hear “eat right and exercise,” yet (in Roy's figure) people spend $19 on cocaine for every $1 spent at gyms, because cocaine works in two seconds and exercise makes you sore for two weeks. The impatient owner discovers the advertising equivalent, a magic chant: **Sale! Sale! Sale!** The first dose feels great, and so does the next, but each needs a bigger dose: “20% off” becomes “half price.” The addict gets defensive (“how can it be bad, I've never done better?”) while it quietly destroys the business's health.\n\n**The research (p. 44).** A report from Professor Andrew Ehrenberg's R&D Initiative (also in the *Journal of Advertising Research*, 1994) found that price promotions **don't attract new customers, don't lead to extra later sales, don't affect repeat loyalty, and don't reach many customers.** They do produce up-and-down sales blips, at great cost.\n\n**How to make ad cocaine (p. 45).** A short-term hype ad needs five ingredients: **intrusiveness** (get attention), an **offer** too good to pass up, **logic** (evidence for doubters), **urgency** (a time limit), plus lots of **frequency**. Leave one out and it dies. But anything that works quickly works less and less the longer you do it. The magic always fades.\n\n**Kicking the habit (pp. 45–47).** If customers now ask “when will this go on sale?”, you have a habit, and you fear the withdrawal of the chickening-out period (Chapter 7). Roy's method: keep the sale ads only in a **non-intrusive** medium. Run a newspaper ad with a big photo of the sale item and your name buried in the fine print. Humans don't see unless they're looking, so only people already shopping notice. **Never** use radio or TV to push the sale (that trains everyone not yet in the market to wait), and let broadcast keep building the brand with everyone else. Downsides: it can't last forever; you'll fund two campaigns for 3–6 months; and some sale ads won't pull. But committed businesses come out more profitable, with steadier traffic and a more stable customer base.\n\nThe section ends with **ELBs, Exponential Little Bits**: tiny, relentless daily changes that compound. Progress meeting progress doesn't add, it multiplies.",
      keyPoints: [
        "Advertising isn't a bubble-gum machine; today's decision is rarely driven by today's ads.",
        "“Sale! Sale! Sale!” is ad cocaine: it works fast, needs bigger doses, and trains customers to wait.",
        "Ehrenberg's research: price promotions don't win new customers, later sales or loyalty; they create costly blips.",
        "Hype recipe: intrusiveness, offer, logic, urgency, plus heavy frequency. It always fades.",
        "To quit: move sale ads to a silent medium seen only by active shoppers; keep intrusive media building the brand."
      ],
      why: "Many local businesses (and many Meta “offer” campaigns) run on discount cycles. Zach needs both the argument against ad cocaine and a practical withdrawal plan clients can survive financially.",
      example: {
        title: "Weaning a Sacramento furniture store off monthly sales, Meta-era version",
        before: "Every month: “40% OFF EVERYTHING, THIS WEEKEND ONLY” pushed to 200,000 people on Facebook and Instagram, plus a radio remnant buy. Customers now wait for the sale.",
        after: "Sale offers move to “silent” channels seen only by active shoppers: Google Shopping/search ads, retargeting of site visitors and the email list, with the store name low-key. Broad Meta video to the 10-mile radius switches to brand stories (the in-house upholsterer, the 25-year frame warranty). The transition runs about 4 months with both budgets, and the discount depth steps down from 40% to 25% to “member pricing” for the email list only.",
        body: "This is Roy's newspaper trick translated: passive, searched channels reach people already looking, so the sale doesn't train the rest of the market. The intrusive channel stops shouting discounts and starts building preference. Expect the downsides Roy lists: higher combined spend for a few months and some weak promo weeks."
      },
      practice: [
        {
          prompt: "Dissect it: understand the addiction.",
          fields: [
            "In your own words, why does ad cocaine need larger and larger doses?",
            "Which of Ehrenberg's four findings would surprise a local owner most? Why?",
            "Argue the other side: when is a limited-time offer a legitimate tool rather than an addiction?"
          ]
        },
        {
          prompt: "Apply it: write a 90-day withdrawal plan for a ZDub client hooked on discounts.",
          fields: ["Client and current discount habit", "Where sale offers will run (silent, searched channels only)", "What intrusive channels will say instead", "The step-down schedule and the extra cost you'll warn them about"],
          rubric: [
            "Moves offers to channels seen mainly by active shoppers",
            "Keeps intrusive media off the sale and on the brand",
            "Includes a gradual step-down rather than a cold stop",
            "Names Roy's downsides honestly (two budgets, some weak weeks)"
          ],
          model: "Client: a Sacramento carpet-cleaning company running “$99 for 3 rooms” every month on Facebook. Offers move to: Google search ads and an email/text list of past customers. Intrusive Meta video now says: “We move the furniture back exactly where it was, and we photograph it first to prove it.” Step-down: months 1–2 keep the $99 deal on search only; month 3 change to a $25 credit for past customers; month 4 end it. Warning: total spend runs ~30% higher for 3 months and some search weeks will be soft."
        }
      ],
      today: { task: "List every discount or limited-time offer PMT (or a prospect) ran in the last 12 months, with its channel. Mark each one that ran in an intrusive channel to people not already shopping.", output: "A discount log with intrusive-channel offers flagged", minutes: 15 },
      check: [
        { q: "What are the five ingredients of a short-term hype ad (“ad cocaine”)?", a: "Intrusiveness, an offer too good to pass up, logic (supporting evidence), urgency (a time limit), plus lots of frequency." },
        { q: "What did Ehrenberg's research find about price promotions?", a: "They don't attract new customers, don't lead to extra subsequent sales, don't affect repeat loyalty and don't reach many customers; they only create costly up-and-down sales blips." },
        { q: "How does Roy suggest running a sale without training everyone to wait?", a: "Advertise it only in a non-intrusive medium (a newspaper ad with the item photo and your name in fine print) so only active shoppers notice; don't promote it on radio or TV, which keep building the brand." }
      ]
    },
    {
      id: "maw-018b",
      part: "p4",
      chapter: 18,
      chapterTitle: "The Top 12 Advertising Mistakes to Avoid (Mistakes 2–6)",
      pages: "48–50",
      title: "Top 12 Mistakes, Part 2: too much reach, owner blindness, unproven claims, passive media, single ads",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 18 · The Top 12 Advertising Mistakes to Avoid · Mistakes 2–6 · pp. 48–50", who: "Roy H. Williams" }],
      quotes: [
        { text: "The average message must be received by the identical individual 3 times in 7 nights sleep.", page: "48" },
        { text: "It's hard to read the label when you're inside the bottle.", page: "50" }
      ],
      idea: "**Mistake 2: trying to reach more people than the budget allows (pp. 48–49).** Schedules should be judged by **reach** (how many different people hear you) and **frequency** (how many times each hears it). Would you rather reach 100% of people and convince them 10% of the way, or reach 10% and convince them all the way? Same cost. Most advertisers buy too much reach and too little repetition.\n\nHow much is enough? **The same person must receive the average message 3 times within 7 nights' sleep.** If you can't afford that in prime time, buy off-prime: reach fewer people, more often, because sleep erases advertising.\n\nHow many people can you afford? It depends on two ratios: your dollars, and the cost of media in your market. Roy offers a rule of thumb he calls dangerous: a focused advertiser with a long-term plan can reach one person **3 times a week, 52 weeks a year, for about $2 per person per year.** So a **$40,000** budget dominates about **20,000 people**, whether the town has 40,000 or 4 million. Don't try to reach 100,000.\n\nOverreach means you only reach people who happen to be in the market right now, never building awareness. **Word of mouth** is what happens when someone is impressed deeply, either by experiencing that you're good, or by a message that surprised Broca. That's saliency (relevance), and it needs enough repetition to move from short-term electrical memory into long-term chemical memory before sleep wipes it out. Often, simply rearranging the current schedule dramatically improves results.\n\n**Mistake 3: assuming the owner knows best.** Owners are uniquely unqualified to see their own business objectively. Too much product knowledge makes them answer questions nobody asks. It's hard to read the label from inside the bottle. An objective outsider helps.\n\n**Mistake 4: unsubstantiated claims.** “Highest quality at the lowest price” without evidence is just a tired cliché. Prove what you say in every ad, and give new information or a new perspective.\n\n**Mistake 5: improper use of passive media.** Newspapers and Yellow Pages reach mostly people already looking. They're poor at reaching prospects *before* the need arises, so they can't build predisposition. Patient, consistent intrusive media wins relational customers long before they're shopping.\n\n**Mistake 6: creating ads instead of campaigns.** No single ad tells the whole story. The best ads are like a rhinoceros: one point, made powerfully. Got 17 things to say? Commit to a campaign of at least 17 ads, each repeated enough to stick.\n\n**Meta translation of the $2 rule:** 3 exposures × 52 weeks = 156 impressions per person per year. At a $10–$15 CPM that's about $1.56–$2.34 per person, so Roy's rule still roughly holds: **annual budget ÷ $2 ≈ the number of people you can dominate.**",
      keyPoints: [
        "Judge schedules by reach and frequency; better to fully convince fewer people than slightly convince everyone.",
        "Minimum effective frequency: 3 exposures per person within 7 nights' sleep.",
        "Rule of thumb: about $2 per person per year at 3×/week; $40,000 dominates about 20,000 people.",
        "Owners can't read the label from inside the bottle; prove every claim; passive media can't build preference.",
        "Run campaigns, not ads: one point per ad, like a rhinoceros; 17 points = 17 ads."
      ],
      why: "This is the core media math for ZDub. The $2 rule translates almost exactly to Meta CPMs, giving Zach a fast way to size a client's target audience to their budget instead of letting Meta spread it thin.",
      example: {
        title: "Sizing PMT's audience with the $2 rule",
        before: "Budget $1,000/month ($12,000/year), targeting everyone 18–65 within 30 miles (about 1.4 million people). Weekly frequency 0.4.",
        after: "$12,000 ÷ $2 ≈ 6,000 people. Check with Meta math: $12,000 at a $12 CPM = 1,000,000 impressions ÷ 156 per person per year ≈ 6,400 people. So PMT narrows to roughly 6,000–8,000 people: adults 21–50 within 12 miles who engage with motorcycle, powersports or “learn to ride” content, plus past site visitors. Target: 3 exposures a week.",
        body: "That feels small, but every one of those people now hears PMT's message often enough to remember it, and each talks to their own circle (Mistake 9 in the next lesson: you reach their 250 friends too). Six ads, each making one point, rotate through the year (Mistake 6)."
      },
      practice: [
        {
          prompt: "Dissect it: work through Mistakes 2–6.",
          fields: [
            "Explain the 100%-reach/10%-convinced vs. 10%-reach/100%-convinced trade-off in your own words. Why do most advertisers choose wrong?",
            "Why is the owner “inside the bottle”? Give an example of a question an owner answers that no customer asks.",
            "Argue the other side: when is broad reach at low frequency the right choice?"
          ]
        },
        {
          prompt: "Apply it: size a ZDub client's audience with the $2 rule and plan a 6-ad campaign.",
          fields: ["Annual budget and estimated CPM", "People you can dominate (budget ÷ $2, then check: impressions ÷ 156)", "How you'll define an audience of that size", "Six ads, one point each, with proof for each claim"],
          rubric: [
            "Uses both Roy's $2 rule and the impressions ÷ 156 check",
            "Audience definition is close to the affordable size",
            "Each ad makes a single point (rhinoceros)",
            "Every claim has evidence (Mistake 4)"
          ],
          model: "Client: a Citrus Heights plumber, $18,000/year, CPM ~$11. $18,000 ÷ $2 = 9,000 people; check: $18,000 ÷ $11 × 1,000 = 1.64M impressions ÷ 156 ≈ 10,500. Audience: homeowners within 6 miles (≈10,000 reachable). Ads: (1) arrives on time: dashboard-clock video; (2) clean: shoe covers and drop cloths, filmed; (3) upfront price: price card shown before work starts; (4) local: owner grew up in Citrus Heights, yearbook photo; (5) warranty: 2-year labor warranty card; (6) reviews: 300+ Google reviews, screen-recorded."
        }
      ],
      today: { task: "For PMT (or a client), divide the annual ad budget by $2, then check it with impressions ÷ 156 at the account's real CPM. Compare to the current audience size.", output: "Affordable audience size vs. current audience size", minutes: 15 },
      check: [
        { q: "What frequency does Roy say an average message needs?", a: "The same person must receive it 3 times within 7 nights' sleep." },
        { q: "How many people can a $40,000 budget dominate, by Roy's rule of thumb?", a: "About 20,000 (roughly $2 per person per year at 3 times a week, 52 weeks), regardless of town size." },
        { q: "What does the “rhinoceros” image mean in Mistake 6?", a: "The most effective ads make a single point powerfully; an advertiser with many points needs a campaign of many ads, not one crowded ad." }
      ]
    },
    {
      id: "maw-018c",
      part: "p4",
      chapter: 18,
      chapterTitle: "The Top 12 Advertising Mistakes to Avoid (Mistakes 7–12)",
      pages: "51–53",
      title: "Top 12 Mistakes, Part 3: ad-shaped ads, late-week timing, over-targeting, expiring offers, empty production, applause",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 18 · The Top 12 Advertising Mistakes to Avoid · Mistakes 7–12 · pp. 51–53", who: "Roy H. Williams" }],
      quotes: [
        { text: "Tell the customer WHY and wait for WHEN.", page: "51" },
        { text: "Yet your real investment will be in the 99 percent who did not come!", page: "53" }
      ],
      idea: "**Mistake 7: obedience to unwritten rules.** For some insane reason, Roy says, advertisers want their ads to look and sound like ads. Why? Chapter 9 supplies the answer: Broca's area filters out the predictable, so sounding like an ad is the fastest way to be ignored.\n\n**Mistake 8: late-week schedules.** Advertisers crowd into Thursday and Friday “to reach her just before she shops,” fighting every competitor for attention, when they could have a quiet chat alone with her on Sunday, Monday and Tuesday. The deeper point: memory isn't formed from images seen with the eyes but from images seen in the **imagination**. Your ad has to be *recalled* when the need arises, so make it memorable instead of trying to time the customer's moment of need. **Tell the customer why, and wait for when.**\n\n**Mistake 9: over-targeting.** It's a myth that you only need to reach decision-makers; decisions are rarely made in a vacuum. Each person has a realm of association of about **250 people**: coworkers, friends, family, golf partners, other sports parents, church, neighbors, relatives. If Roy can afford only 10% of a community and you're not in it, he's still reached about 25 of your best friends. So never target more people than you can afford to *own*; say something memorable and persuasive and let it travel. The Partners won't let clients reach **more than 50% of their market**, even clients who could afford 3×/week, 52 weeks, to more: the half they reach already knows the other half. People overrate audience quality; saying the wrong thing has killed far more campaigns than reaching the wrong people.\n\n**Mistake 10: event-driven, expiration-dated advertising.** For every sense the brain has short-term memory (electrical) and long-term memory (chemical). Branding must live in long-term memory, and the brain is too smart to file information flashing “soon to expire.” A limited-time offer stays in short-term memory until the deadline, then gets erased. It may work immediately, but it works worse over time, and the only thing stored long-term is *this advertiser makes limited-time offers*, training customers to ask when the next sale is. Judge a special event only by how well it defines your position and proves your claims. If even 1% come, you'll need a traffic cop; your real investment is the 99% who didn't. What did the ad tell *them*?\n\n**Mistake 11: great production without great copy.** Polish, wit, humor, creativity and novelty can't stand in for copy that informs, gets believed, sticks in memory and persuades.\n\n**Mistake 12: confusing response with results.** The goal is clear awareness of your company and its unique strength. But owners judge ads by comments from friends, and the slickest, funniest ads get the most comments. Result: attention-getting ads that say nothing. Wizard clients measure success by **growth in sales volume**.",
      keyPoints: [
        "Ads that look and sound like ads get filtered out; break the unwritten rules.",
        "Skip the late-week crowd; tell the customer WHY and wait for WHEN.",
        "Everyone has ~250 associates; reach no more than you can own (Wizard cap: 50% of the market). The half you reach knows the other half.",
        "Expiring offers never reach long-term memory; they teach customers to wait. Judge events by the 99% who don't come.",
        "Persuasive copy beats slick production; measure sales growth, not comments."
      ],
      why: "Mistakes 9 and 12 hit Meta advertisers hardest: hyper-narrow targeting and judging ads by likes and comments. Zach can use this list as a pre-launch checklist and as a defense when a client wants applause instead of sales.",
      example: {
        title: "Checking a PMT spring campaign against Mistakes 7–12",
        before: "Polished studio-style ad with stock music (7); budget pushed to Thursday–Saturday (8); interests narrowed to “Harley-Davidson owners” (9); “Spring Special ends Friday!” (10); expensive drone footage, vague copy (11); judged a success because it got 140 likes (12).",
        after: "Phone-shot instructor video that feels like a friend's post (7); even delivery all week (8); a 12-mile radius audience PMT can reach 3×/week, trusting word of mouth to reach friends and family (9); evergreen message, “By Sunday you'll be riding” (10); simple footage, specific proof (“1 in 3 of our students has never sat on a motorcycle”) (11); judged on registrations per week vs. last spring (12).",
        body: "Every fix comes straight from the list. The expiring “Spring Special” still exists, but only on the booking page and in retargeting, where it doesn't train the whole market to wait."
      },
      practice: [
        {
          prompt: "Dissect it: question Mistakes 7–12.",
          fields: [
            "Explain the 250-person realm of association and the 50% cap in your own words. Why would reaching *more* of the market be a mistake?",
            "Why does Roy say a limited-time offer can't enter long-term memory? What does get stored?",
            "Argue the other side: when is an event or expiring offer the right move for a local business?"
          ]
        },
        {
          prompt: "Apply it: run a ZDub client's current campaign through Mistakes 7–12 and fix each failure.",
          fields: ["Client and campaign", "Pass/fail for each of Mistakes 7–12, with evidence", "Fixes for each failure", "The sales metric you'll judge it by"],
          rubric: [
            "All six mistakes checked with evidence, not opinion",
            "Targeting fix sizes the audience to what can be owned",
            "Expiring offers removed from intrusive brand ads",
            "Success metric is sales or bookings, not engagement"
          ],
          model: "Client: a Sacramento gym. 7 Fail: glossy ad with stock models. Fix: member-shot clip of a 6 am class. 8 Pass: even delivery. 9 Fail: targeted only “fitness enthusiasts 25–34.” Fix: everyone 25–60 within 4 miles, ~9,000 people at 3×/week. 10 Fail: “January: no enrollment fee, ends 1/31.” Fix: move the offer to retargeting; brand ads say “The gym where the coach knows your name.” 11 Fail: drone shots, no proof. Fix: “Our average member has been here 3.4 years.” 12 Fail: judged by comments. Metric: new memberships per week and 90-day retention."
        }
      ],
      today: { task: "Open Meta Ads Manager (PMT or any account) and remove “likes” and “comments” from your default reporting columns. Add results that tie to sales: leads, bookings, cost per booking.", output: "A saved column preset focused on results, not response", minutes: 10 },
      check: [
        { q: "What does “Tell the customer WHY and wait for WHEN” mean?", a: "Make the ad memorable and persuasive so it's recalled whenever the need arises, instead of trying to schedule ads at the predicted moment of need (like late-week shopping days)." },
        { q: "Why won't Wizard of Ads let clients reach more than 50% of their market?", a: "Because the half they reach already knows the other half; reaching fewer people with more repetition and a memorable message lets word of mouth carry it further." },
        { q: "Why is “confusing response with results” dangerous?", a: "The slickest, funniest ads get the most comments, so judging by comments rewards attention-getting ads that say nothing; results should be measured by sales growth." }
      ]
    },
    {
      id: "maw-019",
      part: "p4",
      chapter: 19,
      chapterTitle: "Radio Scheduling (short term: events and sales)",
      pages: "54",
      title: "Radio Scheduling, Short Term: build event and sale schedules backward from the deadline",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 19 · Radio Scheduling (short term) · p. 54", who: "Roy H. Williams" }],
      quotes: [
        { text: "Sixty-five spots should be considered an absolute minimum schedule on each of the stations you plan to use.", page: "54" },
        { text: "No ad with a deadline is relevant after the deadline has passed.", page: "54" }
      ],
      idea: "Chapter 19 begins with a fork: what's the radio for? **(1) Drawing a crowd to a special event or sale**, or **(2) making your name a household word**? The two need opposite schedules. This lesson covers the short-term rules; the next covers the long-term ones.\n\n**Special events (like a concert).** Schedule the first ad to air **just before the event begins**, then work *backward* in time, one spot per hour, until the budget runs out. Minimums:\n\n- At least **13 spots a day, 6 am to 7 pm**, for at least **5 days** before the event.\n- If there's budget, add a spot an hour through the evening and overnight: **24 spots a day per station**.\n- **65 spots** (13 × 5) is the absolute minimum on *each* station you use.\n- If a station's general manager will allow **two spots an hour**, take them. The goal is to raise the ratio of ad repetition to listener sleep.\n\n**Sales.** Same method, except the first ad is placed **a few hours before the sale ends**. Roy's example: a three-day sale from Friday morning to 5 pm Sunday. The first spot goes at about 2 or 3 pm on Sunday, then you work backward an ad an hour between 6 am and 7 pm, for at least 65 spots per station or until the budget is gone.\n\n**Why backward?** Because of sleep. Each night the brain purges electrical (short-term) memory, and it erases fastest whatever is no longer relevant, and no deadline ad is relevant once the deadline passes. Building from the deadline backward puts your money in the hours nearest the decision and makes sure that if the budget runs short, it's the earliest, most easily forgotten spots that get cut, not the final push. It also keeps every exposure inside the window where the message still matters, and stacks several per day so they survive each night's purge.\n\n**Isn't this the ad cocaine Roy warned about?** Not a contradiction. Chapter 18 (Mistakes 1 and 10) tells you what short-term advertising costs over time; Chapter 12's Uncovery asks you to choose your time horizon deliberately. Chapter 19 tells you how to do short-term properly *if* you've chosen it: concentrated, intense, deadline-anchored. The worst version is a thin event schedule: all the downsides of an expiring offer with none of the turnout.\n\n**Modern translation.** For a PMT class with open seats or a dealership open house, run a compressed 5-day burst to a tight radius, weight the budget toward the final 48 hours, and stop the ads when the deadline passes.",
      keyPoints: [
        "First decide: event/sale (short term) or household word (long term). The schedules are opposites.",
        "Events: start with an ad just before the event and work backward one spot per hour.",
        "Minimum: 13 spots/day (6 am–7 pm) for 5 days = 65 spots per station; 24/day if budget allows; 2/hour if possible.",
        "Sales: place the first spot a few hours before the sale ends, then work backward.",
        "Sleep erases irrelevant memories first; no deadline ad matters after the deadline."
      ],
      why: "ZDub clients run events too: PMT class fills, open houses, grand openings, seasonal pushes. Roy's backward, concentrated schedule translates directly into compressed Meta bursts that don't waste money on early, forgettable impressions.",
      example: {
        title: "Filling a PMT class: thin vs. Roy-style schedule",
        before: "Saturday's class has 6 open seats. A $300 “seats available” ad runs for 3 weeks at $14/day to all of Sacramento, then keeps running the following Monday.",
        after: "Same $300, compressed: ads start the Monday before, end Saturday at 7 am. Daily budget weighted toward the end (Mon–Wed $35/day, Thu–Fri $70/day, Saturday morning cut-off), to adults within 15 miles who've visited the PMT site or watched 50% of a PMT video. Message: “6 seats left for Saturday. Bikes and helmets provided.”",
        body: "The money is concentrated in the days closest to the decision, aimed at a small, warm audience, and stops the moment it becomes irrelevant. That's Roy's backward schedule in Meta terms: high repetition to the same people inside the window where the message still matters."
      },
      practice: [
        {
          prompt: "Dissect it: understand the backward schedule.",
          fields: [
            "In your own words, why does Roy schedule from the deadline backward instead of from today forward?",
            "Where does the 65-spot minimum come from, and what's it protecting against?",
            "How do you reconcile Chapter 19's sale schedule with Chapter 18's warnings about ad cocaine and limited-time offers?"
          ]
        },
        {
          prompt: "Apply it: build a compressed, backward-built schedule for a real upcoming event (PMT class, client open house, seasonal deadline).",
          fields: ["Event and deadline", "Total budget", "Day-by-day budget, built backward from the deadline", "Audience (small and warm) and the single message", "When the ads switch off"],
          rubric: [
            "Built from the deadline backward, with weight near the end",
            "Concentrated into about 5 days rather than spread thin",
            "Small, warm audience that can be reached repeatedly",
            "Ads stop when the deadline passes"
          ],
          model: "Event: a Rocklin HVAC company's “Saturday tune-up day,” 9 am–3 pm. Budget $500. Backward: Saturday 6–11 am $80; Friday $120; Thursday $110; Wednesday $100; Tuesday $90. Audience: homeowners within 5 miles who visited the site or are existing customers. Message: “Free filter with every Saturday tune-up. We'll have 6 techs on call.” Ads switch off at 11 am Saturday, a few hours before it ends."
        }
      ],
      today: { task: "Pick PMT's next class with open seats. Write the 5-day backward schedule (daily budget, audience, message, cut-off time) on one page.", output: "A one-page compressed schedule ready to build", minutes: 20 },
      check: [
        { q: "What's the minimum radio schedule for a special event?", a: "At least 13 spots a day, 6 am–7 pm, for at least 5 days before the event: 65 spots per station minimum (24 a day if budget allows)." },
        { q: "For a sale ending Sunday at 5 pm, when does the first ad go?", a: "About 2 or 3 pm on Sunday, a few hours before the end; then you work backward one ad per hour, 6 am–7 pm." },
        { q: "Why does sleep matter so much for deadline ads?", a: "Sleep purges electrical memory nightly, erasing irrelevant memories first, and no deadline ad is relevant after its deadline; concentrated repetition keeps it alive until then." }
      ]
    },
    {
      id: "maw-019b",
      part: "p4",
      chapter: 19,
      chapterTitle: "Radio Scheduling (long term: becoming a household word)",
      pages: "55–56",
      title: "Radio Scheduling, Long Term: 21 ads a week, 52 weeks, and the ratio of repetition to sleep",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 19 · Radio Scheduling (long term) · pp. 55–56", who: "Roy H. Williams" }],
      quotes: [
        { text: "Smart advertisers make no attempt to predict the moment of the customer’s need", page: "55" },
        { text: "Change your ad when the listener has been exposed to the identical information 12-20 times.", page: "56" }
      ],
      idea: "Radio's real power, Roy says, is long-term memory: **top-of-mind awareness**. Smart advertisers try to win the customer's heart long before she needs them, aiming only to be the company she thinks of first and feels best about when the need arises. They don't predict the moment of need; they buy enough repetition that they'll spring to mind whenever it comes.\n\n**The household-word schedule:** at least **21 ads a week (±2) per station, 6 am to 7 pm, 52 weeks a year**, on as many stations as you can afford. Expect minimal results for the first **8–14 weeks**: the chickening-out period (Chapter 7), when you'll spend more than you see back.\n\n**Echoic retention depends on three variables:** (1) the power of the message (its **emotional voltage**), (2) repetition (**frequency**), (3) **consistency**. With a 52-week commitment and an average message, 21 ads a week (6 am–7 pm) typically produces a frequency of 3 with nearly **two-thirds of a station's weekly cume** (its total weekly listeners). In Australia about **76%** of adults listen to commercial radio regularly; as a rough rule, buying *every* station in a market at about 21 ads a week reaches just on **50%** of the population at a frequency of 3.\n\n**The critical equation: the ratio of ad repetition to listener sleep.** With an average message, each listener needs to hear the identical ad **3 times within every 7 nights' sleep**. The formula assumes average impact and that most of the audience isn't currently shopping; other variables are how many years you've been repeating and how strong competitors are. Then: **change your ad when the listener has heard the identical information 12–20 times.** (At 3 a week, that's every 4–7 weeks.)\n\n**Too big a station, too small a budget? Buy a “station within the station.”**\n\n- **Horizontal scheduling:** 21 spots a week, 52 weeks, between 7 pm and midnight. You'll reach less than half the station's weekly audience, but with good repetition, and far cheaper than daytime.\n- **Vertical scheduling:** Sundays only, one spot an hour for at least 13 straight hours, 52 weeks. Sunday listening is lower, but rates can be cheaper, and you get solid repetition with part of the audience. The Partners have often bought late nights and Sundays only.\n\nThe chapter closes with word of mouth: people talk about what impressed them deeply, good or bad. Are your ads impressive, and is the world inside your door?",
      keyPoints: [
        "Long-term goal: be thought of first and felt best about when the need arises; don't predict the moment.",
        "Household-word schedule: 21 ads/week (±2) per station, 6 am–7 pm, 52 weeks; endure weeks 8–14.",
        "Echoic retention = emotional voltage × frequency × consistency.",
        "Critical equation: 3 hearings per person per 7 nights' sleep; change the ad after 12–20 exposures.",
        "Can't afford the whole station? Own a slice: 7 pm–midnight (horizontal) or all-day Sundays (vertical)."
      ],
      why: "These numbers are Zach's always-on Meta plan in disguise: weekly frequency of about 3 to an audience you can afford, 52 weeks, with creative refreshed every 4–7 weeks, and a warning about weeks 8–14 built into the client relationship.",
      example: {
        title: "PMT's always-on plan, translated from Roy's radio rules",
        before: "Ads switched on and off with class openings; creative never changes for months, or changes weekly; no frequency target.",
        after: "Always on, 52 weeks. Target weekly frequency 3 to a defined “station within the station”: adults 21–50 within 12 miles who engage with riding content (sized to budget with the $2 rule). One message (“By Sunday you'll be riding”), four ads per wave; a new wave every 5 weeks (about 15 exposures each). The client is told up front: weeks 8–14 will feel slow.",
        body: "Horizontal/vertical scheduling maps onto choosing a slice you can afford to saturate: a sub-audience, a tight radius or a time window. The 12–20 exposure rule tells you when to refresh creative, which is a better trigger than “we're bored of it.”"
      },
      practice: [
        {
          prompt: "Dissect it: understand the long-term math.",
          fields: [
            "Explain the “ratio of repetition to sleep” in your own words. Why 3 in 7 nights?",
            "Why change the ad after 12–20 exposures but never change the message?",
            "Argue the other side: what's different about Meta's feed versus radio listening habits that might change these numbers?"
          ]
        },
        {
          prompt: "Apply it: write a 52-week always-on plan for a ZDub client using Roy's long-term rules.",
          fields: ["Client and the slice you'll own (the “station within the station”)", "Weekly frequency target and budget", "Creative refresh rhythm (based on 12–20 exposures)", "Emotional voltage: the message and why it carries feeling", "How you'll handle weeks 8–14"],
          rubric: [
            "Slice sized so weekly frequency of about 3 is affordable",
            "Runs 52 weeks with one consistent message",
            "Refresh rhythm derived from the 12–20 exposure rule",
            "Explicit plan for the chickening-out window"
          ],
          model: "Client: a Sacramento landscaper, $1,500/month. Slice: homeowners in 4 East Sacramento and Land Park zip codes (~9,000 households). Frequency 3/week. Refresh: new set of 3 videos every 5 weeks (~15 exposures). Message: “Your yard should feel like the best room in your house,” shown through real backyard reveals (high emotional voltage). Weeks 8–14: pre-agreed check of reach, frequency, video completion and “saw your ads” mentions on estimate calls; no strategy changes before week 16."
        }
      ],
      today: { task: "Check PMT's (or any account's) creative age: how many weeks has each active ad been running, and at what weekly frequency? Flag any ad past ~20 exposures per person.", output: "A list of active ads with estimated cumulative exposures, worn-out ones flagged", minutes: 15 },
      check: [
        { q: "What's Roy's long-term “household word” radio schedule?", a: "At least 21 ads a week (±2) per station, 6 am–7 pm, 52 weeks a year, on as many stations as you can afford." },
        { q: "What are the three variables of echoic retention?", a: "Power of the message (emotional voltage), repetition (frequency), and consistency." },
        { q: "What are horizontal and vertical scheduling?", a: "Horizontal: 21 spots a week between 7 pm and midnight, 52 weeks. Vertical: Sundays, one spot an hour for at least 13 consecutive hours, 52 weeks. Both buy a “station within the station.”" }
      ]
    },
    {
      id: "maw-020",
      part: "p4",
      chapter: 20,
      chapterTitle: "Television Scheduling",
      pages: "57–58",
      title: "Television Scheduling: never buy run of station, schedule horizontally, roadblock only with a great ad",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 20 · Television Scheduling · pp. 57–58", who: "Roy H. Williams" }],
      quotes: [
        { text: "The show is what attracts birds of a feather, not the station.", page: "57" },
        { text: "A viewer might run from your roadblock, but he can’t hide.", page: "58" }
      ],
      idea: "Like radio, television's real power is long-term memory: top-of-mind awareness. In TV you generally get what you pay for, but there are two mistakes to avoid and three rules to follow.\n\n**Mistake 1: never buy run of station (ROS).** Stations offer steep discounts in exchange for the freedom to air your ad anywhere within broad windows. The rate looks great, but you'll almost certainly reach an enormous number of different people about **once each**, which makes effective repetition nearly impossible. You might see some results, but it's never the highest and best use of your money (Chapter 12's media question).\n\n**Mistake 2: assuming viewers are loyal to a station.** Viewers are loyal to *shows*, not stations. Even news loyalty is loyalty to the program. It's a tragic error to think one station's audience is fundamentally different from another's; the show is what gathers birds of a feather.\n\n**Rule 1: always schedule horizontally.** The best way to reach the same person a second and third time is to buy the **same show** over and over. For long-term campaigns, pick programs that run 5 days a week, 52 weeks a year (news, soaps), and book **at least one ad a day, 5 days a week, 52 weeks a year.** (Horizontal here means across the week in one program, the same idea as radio's “station within the station.”)\n\n**Rule 2: “roadblock” when your ad has a high impact quotient.** When the ad is irresistible and you want the largest possible audience, buy fixed-position spots that air **at the same moment on every station in town**. Viewers can flip channels, but they can't escape you. Note the condition: only with a high-impact ad. A roadblock multiplies whatever the ad is, good or bad (Chapter 15: a weak ad with a big budget loses).\n\n**Rule 3: find a sales rep who keeps your interests at heart.** TV changes fast; a rep who watches out for you is worth her weight in gold. (Chapter 15's trio again: the rep owns the media plan.)\n\nThe chapter ends with the choice behind all scheduling: short-term or long-term, a little cake now or bigger pieces later. Every advertiser makes this choice, consciously or not; Roy wants you to make it consciously.\n\n**Modern translation.** Run of station's cousin is the cheapest-CPM campaign that sprays one impression each across a huge audience (or placements nobody watches). Horizontal scheduling is consistent delivery to the same defined audience; on YouTube or CTV, it's buying the same programs or channels repeatedly. A roadblock is a launch-week takeover across Meta, YouTube and local streaming at once, worth doing only with a proven ad.",
      keyPoints: [
        "TV's real power is long-term top-of-mind awareness.",
        "Never buy run of station: cheap rates, but one exposure each to huge numbers of people.",
        "Viewers are loyal to shows, not stations; the show gathers the audience.",
        "Schedule horizontally: the same show, at least 1 ad a day, 5 days a week, 52 weeks.",
        "Roadblock (same moment, every station) only with a high-impact ad; find a rep who protects you."
      ],
      why: "Local owners increasingly get pitched streaming TV and YouTube packages. Roy's rules let Zach evaluate them: insist on repetition to the same viewers, avoid “run of network” spray, and save big takeovers for proven creative.",
      example: {
        title: "Evaluating a streaming-TV pitch for a Sacramento roofer",
        before: "Rep's offer: “$3,000 gets you 150,000 impressions across our whole streaming network, anywhere in the Sacramento DMA, any program, best rate we have.”",
        after: "Counter: “Put $3,000 into the local news apps and two home-improvement channels only, households in the roofer's 8 zip codes, capped at 3 impressions a week per household, every week for 6 months. And we only do a launch-week takeover (CTV + YouTube + Meta) when an ad has already beaten our others on Meta.”",
        body: "The original offer is run of station in a new costume: cheap, wide, one exposure each. The counter is horizontal scheduling (same programs, same people, steady weekly frequency) plus a roadblock reserved for an ad with a proven impact quotient."
      },
      practice: [
        {
          prompt: "Dissect it: test the TV rules.",
          fields: [
            "Why is run of station cheap, and why is it still a poor use of money?",
            "What does “viewers are loyal to shows, not stations” imply for how you'd buy YouTube or streaming today?",
            "Argue the other side: when could a roadblock with an average ad still make sense?"
          ]
        },
        {
          prompt: "Apply it: write the brief you'd send a streaming-TV or YouTube rep for a ZDub client.",
          fields: ["Client and budget", "Programs/channels (horizontal choice) and why", "Frequency cap and duration", "Your roadblock rule", "What you'll refuse (ROS equivalents)"],
          rubric: [
            "Specifies the same programs/channels repeatedly, not broad run-of-network",
            "Sets a weekly frequency target and a long duration",
            "Ties any roadblock to a proven, high-impact ad",
            "Explicitly refuses spray-and-pray inventory"
          ],
          model: "Client: a Sacramento med spa, $2,000/month for 6 months. Horizontal: YouTube ads on local news and two beauty channels' content only, women 30–60 in 6 zip codes; CTV on the same local morning show app daily. Frequency: about 3/week per household, 26 weeks. Roadblock: one 3-day takeover before Mother's Day across YouTube, CTV and Meta, only with the ad that won our Meta test. Refuse: run-of-network packages, audience-network placements, and any buy that can't show frequency per person."
        }
      ],
      today: { task: "Look at PMT's (or a client's) Meta placements breakdown for the last 30 days. Identify any placement that delivers lots of cheap, one-time impressions (the run-of-station equivalent) and decide whether to exclude it.", output: "A placement breakdown with one exclude/keep decision", minutes: 15 },
      check: [
        { q: "Why does Roy say never to buy run of station?", a: "The station places your ad anywhere in broad windows, so you reach huge numbers of different people about once each, making effective repetition nearly impossible." },
        { q: "What does it mean to schedule TV horizontally?", a: "Buy the same show over and over (e.g., news or soaps that run 5 days a week, 52 weeks), at least one ad a day, 5 days a week, 52 weeks a year." },
        { q: "What's a roadblock, and when should you use one?", a: "Fixed-position ads airing simultaneously on every station in town; use it only when your ad has a high impact quotient and you need maximum reach." }
      ]
    },
    {
      id: "maw-021",
      part: "p5",
      chapter: 21,
      chapterTitle: "How’s Your Gravity Well?",
      pages: "59–61",
      title: "How's Your Gravity Well?: pull customers into deeper commitment one small step at a time, never asking them to buy",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 21 · How’s Your Gravity Well? · pp. 59–61", who: "Roy H. Williams & Wizard of Ads Australia" }],
      quotes: [
        { text: "Commitment is rarely an all-at-once thing.", page: "59" },
        { text: "Sales resistance is what happens when the customer is asked to jump too deeply into the well, too quickly.", page: "61" }
      ],
      idea: "Roy starts by attacking “closing” culture. Sales trainers obsessed with closing assume buyer and seller are adversaries, so they teach canned, manipulative “trick 'em and stick 'em” questions designed to hustle people into whatever the salesperson wants. No wonder no mother hopes her son grows up to be a salesman. Great trainers teach the opposite: aspire to be the customer's **servant, consultant and friend**, and never betray that friendship. Persuasion isn't a contest with a winner.\n\nWhat a business wants is a committed customer, and people are far more likely to make a small commitment, or deepen an existing one slightly, than to make a big one suddenly. **Commitment is rarely all at once.** Salespeople who ask for big commitments too soon get called pushy, and people avoid them.\n\n**The gravity well.** Profitable persuasion and comfortable compliance come from a properly built gravity well: a funnel that gently pulls the customer into gradually deeper commitment, but which, unlike a sales trap, the customer can **leave comfortably at any time**. It's widest and easiest to enter at the top, requiring only mild interest; up there, people are numerous and uncommitted.\n\n**Wizard of Ads Australia's own gravity well (pp. 60–61), from the rim down:**\n\n1. **The Monday Morning Memo:** Roy's free weekly newsletter.\n2. **The free e-book *Making Ads Work*** (this guide), also sold in print for $24.75 AUD.\n3. **The website:** daily articles on advertising, marketing and customer service.\n4. **A Wizard of Ads seminar:** paid, or as the guest of a media network.\n5. **A one-on-one *Making Ads Work* teaching session:** a few hundred dollars, in person or by phone, going deeper on your chosen questions.\n6. **A video series**, like the 12-session *Secret Formulas School of Advertising*.\n7. **A half-day personal consulting session:** just under $1,000, to review your ads, brainstorm or discuss business ideas.\n8. **A 3-day course in Austin, Texas**: Magical Worlds Academy (normally $3,500, free for Partner Clients), Wizard of Web Academy, Secret Formulas, and others.\n9. **The tip:** the occasional **Partner Client** who asks to pay thousands a year to have the firm create and guide their campaign. (A Partner Client has done an Uncovery with a Wizard team and then hires it monthly on a 12-month agreement.)\n\nThe elegant part: at **no point is anyone asked to buy anything**. Each step is a slightly deeper commitment the customer chooses. Sales resistance is simply what happens when you ask someone to jump too deep, too fast. Roy's closing questions: how's your gravity well, and can you list the steps your prospects need to take?\n\n(You're reading step 2 of their well right now. Chapter 25 adds that they never pursue clients, which works only because the well does the pulling.)",
      keyPoints: [
        "Selling isn't a contest: be the customer's servant, consultant and friend.",
        "People make small commitments easily and big ones reluctantly; ask for too much too soon and you're “pushy.”",
        "A gravity well pulls people gently deeper, and lets them exit any time; a trap doesn't.",
        "Wizard Australia's well runs from a free memo and e-book to $1,000 consults, Austin courses and 12-month Partner Clients.",
        "Nobody is asked to buy at any step; sales resistance = asking for too deep a jump too fast."
      ],
      why: "ZDub's growth plan needs a gravity well: free, useful content at the rim; low-risk paid steps in the middle; retainers at the tip. It replaces cold pitching with prospects who arrive already trusting Zach. PMT needs one too, between “curious about riding” and a full weekend course.",
      example: {
        title: "ZDub Media's gravity well, modeled on Wizard Australia's",
        before: "ZDub's funnel: a cold DM or email straight to “Want to book a call about running your ads? Packages from $1,500/month.” One huge jump.",
        after: "Rim: weekly “Local Ad Teardown” reels and a short email memo (free). Next: a free Sacramento Ad Budget Calculator (Chapter 17's formula). Next: a free talk at the local chamber or BNI. Next: a $150 one-on-one “ad teardown” call. Next: a $750 half-day Uncovery session. Tip: a 12-month partnership. At no stage does Zach ask anyone to buy; each step offers the next.",
        body: "Each step is a small, comfortable increase in commitment, and each one makes the next feel natural. The Uncovery session doubles as Chapter 25's client-qualification filter: Zach learns whether he believes in the business before a retainer is on the table."
      },
      practice: [
        {
          prompt: "Dissect it: examine the gravity well.",
          fields: [
            "What's the difference between a gravity well and a sales trap, in your own words?",
            "Why does Roy say sales resistance comes from asking for too much, too fast? Give an example from your own buying.",
            "Argue the other side: when does a business need to ask for the sale directly instead of waiting for the well to work?"
          ]
        },
        {
          prompt: "Apply it: chart PMT's gravity well from first curiosity to loyal rider.",
          fields: ["Rim (free, mild interest)", "Two or three middle steps (small commitments, some paid)", "The core purchase", "Deeper steps after the core purchase", "Where people currently fall out, and the missing step"],
          rubric: [
            "Starts with a genuinely free, useful entry point",
            "Each step is only a slightly deeper commitment than the last",
            "Nobody is pushed; people can exit comfortably at every level",
            "Identifies the biggest gap where the jump is currently too large"
          ],
          model: "Rim: reels on “what the first hour on a motorcycle feels like” + a free “Am I ready to ride?” quiz. Middle: a free downloadable beginner's guide (gear, permits, what to expect); a low-cost one-hour “First Ride” intro on the range. Core: the Basic course. Deeper: advanced/skills course, group rides, gift certificates for friends, referral cards. Gap: people go from watching reels straight to a full weekend course; the “First Ride” hour fills it."
        }
      ],
      today: { task: "Draw ZDub's current gravity well on paper: list every way a prospect can engage, from free to retainer. Circle the biggest jump and write one new step to fill it.", output: "A sketched well with one new step defined", minutes: 20 },
      check: [
        { q: "How is a gravity well different from a sales trap?", a: "It pulls customers into gradually deeper commitment, but they can comfortably exit at any time; it's never adversarial." },
        { q: "What sits at the very rim of Wizard of Ads Australia's gravity well, and what's at the tip?", a: "Rim: the free Monday Morning Memo (then the free Making Ads Work e-book). Tip: Partner Clients who do an Uncovery and hire a team monthly on a 12-month agreement." },
        { q: "What causes sales resistance, according to Roy?", a: "Asking the customer to jump too deeply into the well, too quickly." }
      ]
    },
    {
      id: "maw-022",
      part: "p5",
      chapter: 22,
      chapterTitle: "When Good Ads Fail",
      pages: "62–63",
      title: "When Good Ads Fail: too little repetition, entrenched competitors, broken promises, or no demand",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 22 · When Good Ads Fail (Monday Morning Memo) · pp. 62–63", who: "Roy H. Williams" }],
      quotes: [
        { text: "Directly or indirectly, every ad is a promise to the customer.", page: "63" },
        { text: "Sometimes, regardless of how wonderful its advertising, a business is simply answering a question that no one was asking.", page: "63" }
      ],
      idea: "This Monday Morning Memo addresses a painful scene: you ran an inspired series of wonderful ads and got nothing. Like Galahads hunting the Holy Grail, owners search for “the perfect ad campaign,” and many who find it discover it isn't enough.\n\nThe myth underneath: that advertising, by itself, can drive steady traffic into a business. You hear it when an owner tells an ad professional, “My only problem is traffic. Traffic is your department. Bring me customers. Now.” Roy lists four reasons good ads fail anyway.\n\n**1. Too little repetition.** An ad without an irresistible limited-time offer has to run often enough for people to notice it, then become familiar with it, and then you still wait for them to *need* what you sell. The longer the **product-purchase cycle**, the longer the wait: restaurants see results faster than carpet stores because people eat out more often than they replace carpet. Irresistible limited-time offers can work like magic, but the longer they run, the less they work, until they stop working at all. (Then what? That's Chapter 18's ad cocaine.)\n\n**2. Deeply entrenched competitors.** No campaign may be good enough to pull customers from a competitor who's genuinely meeting their needs. Many businesses fail simply because they opened in the wrong town: 80 miles away, the same effort might have made them royalty; where they chose, they got squashed. If a mountain is guarded by a giant who never sleeps, plant your flag on a different mountain.\n\n**3. Failing to deliver.** Every ad is a promise, directly or indirectly, and the more powerful the ad, the bigger the implied promise. How many disappointed customers before the whole town hears that you don't deliver? For a campaign to work long-term, the customer must get exactly the experience the ads promised. (Chapter 2's world inside your door; Chapter 15's personal experience.)\n\n**4. Lack of interest.** Hard to believe, but not every business is commercially viable. Sometimes the business is answering a question nobody is asking. Then the failure isn't the ads, it's the business model.\n\nThe page ends with Roy's line that happiness isn't the reward at the top of the climb; happiness *is* the climb. In context: the work of building a business, including patient advertising, is the point, not a toll paid on the way to it.\n\n**The diagnostic value:** these four are a checklist to run *before* blaming the ads. Only reason 1 is fixed by more advertising. Reason 2 is fixed by positioning or location, 3 by operations, and 4 by the business model.",
      keyPoints: [
        "Advertising alone can't guarantee steady traffic; good ads can still fail.",
        "Too little repetition: longer purchase cycles need longer, steadier campaigns.",
        "Entrenched competitors: if a giant guards the mountain, pick another mountain.",
        "Every ad is a promise; the stronger the ad, the bigger the promise you must deliver.",
        "Some businesses answer a question nobody's asking; that's a business-model failure, not an ad failure."
      ],
      why: "When a ZDub campaign underperforms, this checklist tells Zach what's actually wrong and keeps him from churning creative to fix a problem that lives in the client's market, operations or model.",
      example: {
        title: "Diagnosing a failed campaign for a new Sacramento axe-throwing venue",
        before: "Owner: “The ads were great, everyone said so, but bookings are flat. Make new ads.”",
        after: "1) Repetition: 6 weeks at 1.1 weekly frequency; too little for a once-a-year outing. 2) Competitors: two established venues 4 miles away with 1,000+ reviews each. 3) Delivery: reviews mention long waits and missing safety briefings. 4) Interest: weekday demand is near zero; the concept relies on parties. Plan: fix the wait and briefing problems first, reposition as “the corporate team event venue” (a mountain the giants aren't guarding), then run 3/week frequency for at least 12 weeks.",
        body: "Making new ads would have addressed none of the four causes. The checklist sends each problem to the right fix: frequency, positioning, operations and business model."
      },
      practice: [
        {
          prompt: "Dissect it: apply the four causes.",
          fields: [
            "Which of the four causes can be fixed with more or better advertising? Which can't?",
            "Explain the product-purchase cycle with a PMT example and a roofer example. How should each change expectations?",
            "Argue the other side: can great advertising ever beat an entrenched competitor? What would it take?"
          ]
        },
        {
          prompt: "Apply it: write a one-page “before we blame the ads” diagnostic for ZDub clients, using Roy's four causes.",
          fields: ["Question(s) for cause 1: repetition and purchase cycle", "Question(s) for cause 2: competitors", "Question(s) for cause 3: delivering the promise", "Question(s) for cause 4: real demand", "What ZDub does for each answer"],
          rubric: [
            "Covers all four causes with checkable questions",
            "Includes purchase-cycle length in the repetition check",
            "Uses customer evidence (reviews, mystery shop) for delivery",
            "Routes each problem to the right fix (ads, positioning, operations, model)"
          ],
          model: "1) Weekly frequency and weeks running vs. purchase cycle (PMT: seasonal, months; roofer: years, so storm-triggered). Fix: extend and concentrate. 2) Ad Library + review counts of top 3 competitors; is one a “giant who never sleeps”? Fix: reposition to an unguarded niche. 3) Last 20 reviews and a mystery shop: does the experience match the ad's promise? Fix: operations before spend. 4) Search volume, inquiries per 1,000 reached, and whether anyone asks for this. Fix: tell the owner honestly the model needs to change."
        }
      ],
      today: { task: "Estimate PMT's product-purchase cycle: how long from “I've always wanted to ride” to booking? Ask two past students when they first thought about it. Write how that should change campaign length.", output: "An estimated purchase cycle + one implication for the schedule", minutes: 15 },
      check: [
        { q: "What are Roy's four reasons good ads fail?", a: "Too little repetition, deeply entrenched competitors, failing to deliver on the ad's promise, and lack of interest (no commercial viability)." },
        { q: "Why do restaurants see results faster than carpet stores?", a: "Their product-purchase cycle is shorter: people eat out far more often than they replace carpet." },
        { q: "What does Roy advise when a giant who never sleeps guards the mountain?", a: "Pick another mountain on which to plant your flag (another market, town or position)." }
      ]
    },
    {
      id: "maw-023",
      part: "p5",
      chapter: 23,
      chapterTitle: "An Advertiser’s Question",
      pages: "64–65",
      title: "An Advertiser's Question: how much more traffic will more reach buy? Only the advertising-driven share grows",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 23 · An Advertiser’s Question (Monday Morning Memo) · pp. 64–65", who: "Roy H. Williams" }],
      quotes: [
        { text: "a 50% increase in effective reach should increase traffic by 15 to 25%.", page: "65" },
        { text: "can you tell me how much of your traffic is due to advertising alone and would not be coming to you otherwise?", page: "64" }
      ],
      idea: "Another abbreviated Monday Morning Memo, and a great model for answering the question every client eventually asks.\n\n**The question.** A 52-week radio advertiser reaches **32%** of the area's 18–34 population at a weekly frequency of **2.9**, every week of the year. (He knows Roy teaches at least 3.0, but figures 2.9 is close enough.) He wants to know: if he spends more to reach **48%** at the same frequency, how much will store traffic rise? How many more sales?\n\n**Roy's first answer.** All things being equal, going from 32% to 48% reach is a **50% increase**, so it should raise **advertising-driven** traffic by exactly 50%. And yes, 2.9 is close enough, *if* he's achieving it 52 weeks out of 52.\n\n**Then the problems.**\n\n1. **All things are never equal.** The answer assumes no change in the number of competitors or in how attractive and aggressive they are, and those rarely stand still. If competitors drop the ball, his traffic could rise without spending a cent more. If they match his increase in share of voice, his gain is nullified and traffic stays flat. And if they increase spending while he doesn't? Roy invites him to do that math himself.\n\n2. **How much of the traffic is advertising-driven?** A 50% increase in reach grows only the advertising-driven part. What share comes from location, repeat customers, referrals? Can he say how much would *not* come without the ads?\n\nSo predicting the bottom-line impact would be irresponsible. **But Roy gives an “irresponsible” answer anyway:** his instinct is that for a typical retailer, **50–70%** of store traffic comes from location, signage, repeat customers and referrals, and **30–50%** is advertising-driven. So a 50% increase in effective reach should lift total traffic by about **15–25%** (50% × 30% = 15%; 50% × 50% = 25%).\n\nThe page closes with a Wizard line: customers buy whatever they feel best about, so make sure they feel best about yours.\n\n**What to learn from the *form* of the answer.** Roy (1) gives the clean mathematical answer, (2) names the assumptions that break it (competition, traffic sources), (3) refuses false precision, and then (4) still commits to a reasoned range. That's how an expert answers a forecasting question honestly without dodging it.",
      keyPoints: [
        "All else equal, increasing reach 50% at the same frequency raises advertising-driven traffic 50%.",
        "Frequency of 2.9 is “close enough” only if it's sustained 52 weeks out of 52.",
        "All things are never equal: competitors' moves can amplify or cancel your increase.",
        "Only the advertising-driven share grows; Roy estimates it at 30–50% of a typical retailer's traffic.",
        "So 50% more effective reach ≈ 15–25% more total traffic."
      ],
      why: "“If I double my budget, how many more leads?” is the question that makes or breaks ZDub's credibility. Roy's four-step answer lets Zach be honest, useful and specific without overpromising.",
      example: {
        title: "Answering a PMT budget-increase question Roy's way",
        before: "Owner: “If we go from $1,500 to $2,250 a month, how many more students?” Zach: “Probably 50% more!”",
        after: "“Going from $1,500 to $2,250 lets us reach about 50% more people at the same 3-a-week frequency, so the students who come *from ads* should rise about 50%. But you also get students from referrals, Google searches and repeat riders. If ads drive about 40% of enrollments, a 50% lift in ad-driven students is about 20% more students overall, assuming competitors stay put. If another school ramps up this spring, it could be less. My honest range: 15–25% more students.”",
        body: "Zach gives the clean math, names the two big assumptions (traffic sources and competitors), and commits to a range. Note that he needs PMT's “how did you hear about us” data to estimate the advertising-driven share: one more reason to track it."
      },
      practice: [
        {
          prompt: "Dissect it: work the math and the assumptions.",
          fields: [
            "Walk through Roy's calculation: why does a 50% increase in reach become 15–25% more total traffic?",
            "List three ways competitors could change the result, as Roy describes.",
            "Argue the other side: on Meta, what extra factors (rising cost per result, audience saturation, creative fatigue) would make the increase smaller than Roy's math?"
          ]
        },
        {
          prompt: "Apply it: answer a real client's “what if I spend more?” question using Roy's four steps.",
          fields: ["The client's question", "Step 1: the clean math (reach change at same frequency)", "Step 2: the share of results that's advertising-driven, and how you estimated it", "Step 3: competitive assumptions", "Step 4: your committed range"],
          rubric: [
            "Keeps frequency constant in the clean math",
            "Applies the increase only to the advertising-driven share",
            "Names at least two competitive scenarios",
            "Ends with a specific range rather than dodging"
          ],
          model: "Question (Folsom roofer): “What if I double from $3,000 to $6,000 a month?” 1) Doubling could double reach at 3/week if the audience is there, so ad-driven jobs could rise up to 100%. 2) Intake data: ~35% of jobs come from ads; the rest are referrals, insurance work, repeat. 3) If competitors hold steady, the full lift applies; one big competitor just increased spend, so expect some offset; Meta costs also rise as we reach further out. 4) Range: 20–30% more total jobs, reviewed after 90 days."
        }
      ],
      today: { task: "Add a required “How did you hear about us?” field (with options: ad on Facebook/Instagram, Google, friend/family, saw the range, returning) to PMT's booking or intake form, so the advertising-driven share can be measured.", output: "A live intake question that splits ad-driven from other traffic", minutes: 15 },
      check: [
        { q: "In the memo, reach goes from 32% to 48%. What's the percentage increase, and what does it do to advertising-driven traffic?", a: "A 50% increase in reach, which should raise advertising-driven traffic by 50% (all else equal)." },
        { q: "What share of a typical retailer's traffic does Roy guess is advertising-driven?", a: "30–50% (the other 50–70% comes from location, signage, repeat customers and referrals)." },
        { q: "What's Roy's final estimate for the effect of a 50% increase in effective reach?", a: "About 15–25% more total traffic." }
      ]
    },
    {
      id: "maw-024",
      part: "p5",
      chapter: 24,
      chapterTitle: "Questions for You",
      pages: "66–67",
      title: "Questions for You: no plan can be copied; choose consciously, and commit",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 24 · Questions for You · pp. 66–67", who: "Roy H. Williams & Craig Arthur" }],
      quotes: [
        { text: "You cannot simply copy an ad that has worked for another business and expect it to work for you.", page: "66" },
        { text: "Failure awaits any writer who attempts to create an exciting ad campaign for a company that is not committed to change.", page: "67" }
      ],
      idea: "This is the guide's summing-up, and it opens with a frustrated line from ad man Brett Feinstein: clients don't want to understand what they're buying, they rework the plans they're given to suit their own (often badly off-base) taste, and they want magic beans that sprout a beanstalk overnight.\n\n**No copying.** Every business and every market is unique, so there's no one-size marketing plan, and you can't lift an ad that worked for someone else and expect it to work for you. The heart of your advertising should be everything uniquely and wonderfully *you*. Your company is much bigger than price-and-item advertising; dig for the diamond (Chapter 2), and once you uncover the real you, you'll own something no competitor can steal.\n\n**The callback.** At the start (Chapter 1) you calculated how much of your advertising was wasted. Now you know how advertising works and how the Partners grow clients by multiples. So what will you do differently? Then comes a list of choices, each one a chapter in miniature:\n\n- Will you take **responsibility** for your advertising success?\n- **Long-term or short-term** booking? (Chapters 7, 19, 20)\n- **Transactional or relational** shoppers? (Chapters 3, 6)\n- **Own a smaller group** with focused budget, or try to reach everyone? (Mistakes 2 and 9)\n- **Dominate a medium**, or spread dollars everywhere? (Chapters 13, 14)\n- **Intrusive media** with echoic retention, or **passive media** like newspaper and Yellow Pages? (Chapter 10, Mistake 5)\n- Will you be the business people **think of first and feel best about** when they or their friends need what you sell, or will you **train customers to wait for your next sale**? (Chapter 11, Mistake 1)\n\nThe guide claims its principles rest on scientific research, 16 years of documented client growth and a few hundred million dollars of real ad spend. Then the final challenge: do you have the commitment and courage to follow them, or will you keep testing the waters (Chapter 4), doing the same thing and hoping for a different result? Run with the big dogs, or stay on the porch? The choice is yours.\n\nThe chapter ends with a Wizard warning that matters for anyone who writes ads for others: don't try to start a revolution with people content with the status quo; an exciting campaign for a company that isn't committed to change is doomed.\n\n**The real message:** the guide's techniques are worthless without a decision. Roy turns every principle into an explicit either/or, because unconscious choices default to the old habits that created the waste in Chapter 1.",
      keyPoints: [
        "No one-size plan and no copied ad will work; build on what's uniquely you.",
        "Your business is bigger than price-and-item advertising; dig for the diamond.",
        "The guide's lessons reduce to explicit choices: long vs. short, relational vs. transactional, own a few vs. reach all, dominate vs. spread, intrusive vs. passive.",
        "Commitment and courage separate results from “testing the waters.”",
        "Don't take on clients who aren't committed to change; exciting ads can't save them."
      ],
      why: "These questions make a perfect strategy sheet for ZDub clients to answer (and sign) before launch, and the closing warning is a client-selection rule Zach should take literally.",
      example: {
        title: "Turning Roy's questions into a ZDub client commitment sheet",
        before: "Kickoff meeting: “So, what kind of ads do you want to run? Any ideas you've seen that you like?” (Invites copying and magic beans.)",
        after: "Kickoff sheet, client circles one per line: Long-term (12 months) / Short-term (event). Relational / Transactional. Own a smaller area at 3×/week / Reach everyone occasionally. One channel dominated / Several channels lightly. Feed video (intrusive) / Search and directories only (passive). “Be thought of first” / “Run sales.” Then: “Are you willing to stay the course through the slow weeks 8–14?”",
        body: "Each line forces a conscious choice the owner would otherwise make by default. A client who circles “short-term, transactional, everyone, everywhere” has told Zach, in Roy's terms, that they aren't committed to change, which is valuable to know before signing."
      },
      practice: [
        {
          prompt: "Dissect it: weigh the closing questions.",
          fields: [
            "Pick the two questions from Roy's list that local businesses most often answer the “wrong” way. Why?",
            "Why can't you copy a successful ad from another business, according to this chapter?",
            "Argue the other side: when does borrowing a proven ad format (not the message) make sense?"
          ]
        },
        {
          prompt: "Apply it: answer Roy's questions for ZDub itself (your own agency's marketing) and commit in writing.",
          fields: ["Responsibility: what you'll own", "Long or short term; relational or transactional", "Who you'll own (audience size) and which medium you'll dominate", "Intrusive or passive; first-thought brand or promotions", "Your commitment statement (duration and the slow-weeks plan)"],
          rubric: [
            "Every question answered with a clear either/or",
            "Answers are consistent with each other",
            "Audience and medium are specific enough to execute",
            "Commitment includes a duration and a plan for weeks 8–14"
          ],
          model: "Responsibility: I own ZDub's pipeline; no blaming the algorithm. Long-term, relational: owners who want a partner, not the cheapest bid. Own: home-service and training businesses within 25 miles of Sacramento (~3,000 owners), on Instagram/Facebook, 3 touches a week. Intrusive: weekly teardown reels + email memo; no discounts, ever. Commitment: 12 months, review at 90 days; during weeks 8–14 I track follower growth among local owners, DMs and teardown requests, not signed clients."
        }
      ],
      today: { task: "Print or copy Roy's list of choices from pp. 66–67 and answer each one for PMT in one word. Highlight any answer that contradicts what PMT's ads currently do.", output: "Seven one-word answers with contradictions highlighted", minutes: 15 },
      check: [
        { q: "Why does Roy say there's no one-size-fits-all plan?", a: "Every business and every market is unique, so you can't copy another business's ad or plan and expect it to work." },
        { q: "Name four of the choices Roy asks the reader to make.", a: "Any four of: take responsibility; long-term vs. short-term; transactional vs. relational; own a smaller group vs. reach everyone; dominate a medium vs. spread dollars; intrusive vs. passive media; be thought of first vs. train customers to wait for sales; commit vs. keep testing the waters." },
        { q: "What does the closing Wizard quote warn writers about?", a: "Creating an exciting campaign for a company that isn't committed to change leads to failure; you can't launch a revolution with people content with the status quo." }
      ]
    },
    {
      id: "maw-025",
      part: "p5",
      chapter: 25,
      chapterTitle: "Who Becomes a Wizard Client? (qualifying and the value question)",
      pages: "68–69",
      title: "Who Becomes a Wizard Client?: believe in the business, look for passion, and answer “what will I get?” with “what are you getting now?”",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 25 · Who Becomes a Wizard Client? · pp. 68–69", who: "Wizard of Ads Partners (Craig Arthur)" }],
      quotes: [
        { text: "Ultimately, the advertiser must be good at what they do, or there is no advertising plan in the world that can help them.", page: "68" },
        { text: "The most trustworthy indicator of potential success is passion.", page: "68" }
      ],
      idea: "The last two chapters turn the camera around: how the Wizard of Ads Partners choose clients and sell themselves. For Zach, this is a case study in running a consultancy.\n\n**It starts with a smart client.** Bad operators produce bad results. The Partners say flatly that they can't help an advertiser who isn't delivering a positive customer experience; the advertiser has to be good at what they do, or no ad plan in the world will help. (Everything in Chapters 2, 15 and 22 points here: ads only accelerate what was going to happen.)\n\n**How they decide.** They ask themselves one question: *do we really believe in this business, and if so, why?* They admit it's a subjective judgment, and say there's no other way. The most trustworthy predictor of success is **passion**. While prospects talk about their company (its goals, products, history), the Partners watch for a gleam in the eye and listen for commitment in the voice.\n\n**The unspoken question.** Every prospect wonders: “If I hire you, what am I going to get for my money?” The Partners flip it: **what are you getting for your money now?** The ad budget is already set and already being spent, so the real question is what return it's producing. Their claim: not hiring them is far more expensive than hiring them. (This is Chapter 1's waste exercise, aimed at a prospect.)\n\n**What drives return.** Two things: the **impact quotient** of the message (how compelling, memorable and “sticky” it is) and **how efficiently the dollars are spent**. Their pitch stacks three multipliers: spend more efficiently with a better media plan so you reach more people; compound that by reaching them with greater repetition; compound *that* with a more memorable, compelling message. (Reach × frequency × impact: Chapters 14, 18 and 15 in one sentence.)\n\n**The confident close.** If you believe you're already getting maximum return on your advertising, don't hire them. If you're not satisfied, let them show you how they'd do more with the same budget than anyone else. Notice the structure: it disqualifies as much as it sells, and it costs the prospect nothing new, because the budget already exists.\n\n**The lesson for an agency owner:** your best sales tool is a qualification standard you actually enforce. Saying “we only take businesses we believe in” is credible only if you sometimes say no.",
      keyPoints: [
        "Clients must be good at what they do and deliver a positive experience, or no ad plan can help.",
        "Selection test: do we believe in this business, and why? Passion is the most trustworthy indicator.",
        "Answer “what will I get for my money?” with “what are you getting for it now?”",
        "Return depends on impact quotient and spending efficiency: more reach × more repetition × a better message.",
        "Invite the prospect to walk away if they're already at maximum return."
      ],
      why: "ZDub's results, reputation and referrals depend on client selection. A written belief-and-passion test plus the “what are you getting now?” reframe gives Zach a sales conversation that qualifies and persuades at the same time.",
      example: {
        title: "Zach qualifies a Sacramento flooring company",
        before: "Prospect: “What would I get for $2,000 a month?” Zach: “We'd run 3–5 campaigns and you'd probably see 30 to 50 leads a month.”",
        after: "Zach: “Fair question. Let me flip it: you're already spending about $4,500 a month on Yelp, mailers and a lead service. What are you getting for that now? ... OK, about 6 jobs you can trace. I'd rather make that same money work harder than add to it: tighter area so people see you 3 times a week, and ads built around what you told me, that your installers are the only ones in town who move and reset every piece of furniture. If you think you're already at max return, honestly, don't hire me.” (Earlier, Zach noted the owner lit up talking about his installers: passion check passed.)",
        body: "The reframe uses money already being spent, the pitch names reach, repetition and message, and the close is willing to walk away. The qualification happened quietly: Zach listened for the gleam and checked reviews for a good experience before making any offer."
      },
      practice: [
        {
          prompt: "Dissect it: study how the Partners qualify and sell.",
          fields: [
            "Why do the Partners trust passion more than any objective metric? What could go wrong with that?",
            "Explain why “what are you getting for your money now?” is more persuasive than describing your services.",
            "Argue the other side: when should an early-stage agency take a client it doesn't fully believe in?"
          ]
        },
        {
          prompt: "Apply it: write ZDub's client qualification standard and your version of the value answer.",
          fields: ["Three must-haves (good at what they do, evidence of passion, one more)", "Two automatic disqualifiers", "Your 4–6 sentence answer to “what will I get for my money?”"],
          rubric: [
            "Requires evidence that the business already delivers a good experience",
            "Includes a passion/belief check Zach can actually observe",
            "Value answer reframes to current spend and its current return",
            "Mentions reach, repetition and message, and is willing to walk away"
          ],
          model: "Must-haves: 4.5+ stars with recent reviews praising the work; the owner talks about customers or craft with visible pride; can commit 12 months. Disqualifiers: wants only discount promotions; won't fix a known service problem. Value answer: “You're already spending on marketing. What's it returning right now? Let's write that number down. My job is to make the same dollars reach the right people more often with a message they remember, so the return goes up before the budget does. If you're happy with what you're getting today, keep it; you don't need me.”"
        }
      ],
      today: { task: "Write ZDub's “Do I believe in this business?” scorecard: 5 yes/no questions you'll answer after every discovery call (include one on passion and one on customer experience).", output: "A 5-question qualification scorecard", minutes: 15 },
      check: [
        { q: "What question do the Partners ask themselves to decide on a client?", a: "Do we really believe in this business? If so, why?" },
        { q: "How do they answer “what will I get for my money?”", a: "By asking what the prospect is getting for the money they're already spending, since the budget already exists; not hiring them is more expensive than hiring them." },
        { q: "What two things determine the return on advertising, per this chapter?", a: "The impact quotient of the message (how compelling, memorable, sticky) and how efficiently the dollars are spent." }
      ]
    },
    {
      id: "maw-025b",
      part: "p5",
      chapter: 25,
      chapterTitle: "Who Becomes a Wizard Client? (fees, courtship and the five functions)",
      pages: "69–71",
      title: "How the Wizards Run the Relationship: fees tied to growth, no chasing clients, the truth even when it hurts",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 25 · Who Becomes a Wizard Client? (fees, pursuit, functions) · pp. 69–71", who: "Wizard of Ads Partners (Craig Arthur)" }],
      quotes: [
        { text: "long-term relationships seldom form between the hunter and the hunted.", page: "69" },
        { text: "If you want sugarcoated answers to your problems … if you want yes-men … don’t hire a Wizard of Ads® partner.", page: "70" }
      ],
      idea: "The second half of Chapter 25 describes the business model behind the Partners, and it's unusual on purpose.\n\n**Fees tied to growth, not ad spend.** Most agencies earn a percentage of the media budget, which rewards them for making you spend more. The Partners' **annual salary is tied to the client's growth** instead (the Milwaukee client in Chapter 7 pays 43 times his first-year fee because he grew 43-fold). They tell every new client: if in a few years you aren't prepared to pay us **5 or 10 times** what you'll pay in year one, don't become a client. They deliberately **charge less than they're worth at the start** and only earn their worth around **years 3 or 4**. Their target client: little companies doing everything right except marketing and advertising, with the potential to become big companies. So they only take clients who want a long-term relationship.\n\n**They don't pursue clients.** Relationships that are hotly pursued and launched with fanfare rarely turn out well. So the Partners never actively chase a prospect, however attractive. They believe in **courtship**: getting to know each other, seeing the partner “real,” plugging into the client's long-term hopes and dreams, understanding why they're running the race together and what the prize is. Long-term relationships seldom form between hunter and hunted, and real partnership never comes from sharing a short-term objective; it comes from sharing a dream that matters to both. (The gravity well in Chapter 21 is what makes not-chasing possible: prospects come to them.)\n\n**The truth, even if it hurts.** They're hired as marketing consultants, which to them means telling clients the truth. If you want sugarcoating or yes-men, don't hire them.\n\n**The five functions.** What a Wizard team does: (1) **Uncovery**, (2) **strategy** for marketing and advertising, (3) **developing the message**, (4) **planning the media**. The fifth and final piece, (5) **a good business**, is the client's job. (Compare Chapter 15's trio: the consultant covers voice and impact; the owner covers experience.)\n\nThe chapter closes with Josh Billings' joke that it's wise to learn from your own experience, but wiser to let the rattlesnake bite the other fellow (i.e., learn from this guide instead of your own wasted budget), followed on p. 71 by Craig Arthur's service menu, which mirrors the gravity well: Making Ads Work training, half-day consultations, Business Uncoveries, long-term marketing partnerships, and speaking.\n\n**For an agency owner:** every policy here aligns incentives. Growth-linked fees make the consultant care about the client's profit, not their spend; refusing to chase keeps the consultant's power to tell the truth; and naming the client's job (“a good business”) sets expectations before anything goes wrong.",
      keyPoints: [
        "Fees tied to client growth, not ad budget; expect to pay 5–10× year one within a few years.",
        "Charge less than you're worth at the start; earn it in years 3–4 with clients who grow.",
        "Target: small companies doing everything right except marketing, with potential to be big.",
        "Never chase clients; courtship and a shared long-term dream build real partnerships.",
        "Tell the truth, even when it hurts. Consultant does Uncovery, strategy, message, media; the client supplies a good business."
      ],
      why: "Zach is designing ZDub's pricing and sales culture now. Growth-linked fees, a no-chasing gravity well and an explicit “your job is a good business” clause can differentiate ZDub from every percentage-of-spend agency in Sacramento.",
      example: {
        title: "A growth-linked retainer for PMT",
        before: "Standard deal: $1,500/month flat, or 15% of ad spend. ZDub earns more when PMT spends more, regardless of results.",
        after: "Year 1: $1,000/month (below value, as the Partners do), 12-month agreement. Each anniversary, the fee rises by the same percentage PMT's course revenue grew that year. Contract states ZDub's four jobs (Uncovery, strategy, message, media plan) and PMT's one job: deliver the classes the ads promise. Quarterly “truth meeting” where Zach names what's hurting results, including on PMT's side.",
        body: "If PMT grows 40% in year one, the fee goes to $1,400; if it doubles over three years, so does ZDub's fee. The trade-off for Zach is cash flow early, so this works best for a few hand-picked clients alongside standard retainers."
      },
      practice: [
        {
          prompt: "Dissect it: examine the Partners' business model.",
          fields: [
            "Why does a fee tied to ad spend create the wrong incentive? What does a growth-linked fee change?",
            "Explain “long-term relationships seldom form between the hunter and the hunted” in your own words. How does it connect to the gravity well?",
            "Argue the other side: what are the risks of a growth-linked fee for a small agency like ZDub?"
          ]
        },
        {
          prompt: "Apply it: draft the key terms of ZDub's “partner” offer, modeled on the Wizard Partners.",
          fields: ["Who qualifies (your version of “doing everything right except marketing”)", "Fee structure (year 1 and how it grows)", "ZDub's jobs and the client's job", "Your truth-telling clause", "How clients find you, since you won't chase them"],
          rubric: [
            "Fee grows with the client's growth, not their spend",
            "Defines a long-term commitment",
            "Lists ZDub's functions and assigns “a good business” to the client",
            "Explains the courtship/gravity-well path instead of pursuit"
          ],
          model: "Qualifies: owner-operated local business, 4.6+ stars, $500k–$5M revenue, great at the work, weak at marketing. Fee: $1,200/month year 1, 12-month term; each year rises by the client's revenue growth % (minimum flat). ZDub's jobs: Uncovery, strategy, message development, media planning. Client's job: deliver what the ads promise, answer leads within an hour. Truth clause: “We'll tell you what's hurting your growth even when it's inside your business.” Path: teardown reels → ad budget calculator → $750 Uncovery session → partner offer; Zach never cold-pitches the partner tier."
        }
      ],
      today: { task: "Write the one paragraph you'd add to ZDub's proposals that names the client's job (“a good business”) and ZDub's four functions, in plain language.", output: "A proposal-ready responsibilities paragraph", minutes: 15 },
      check: [
        { q: "What are the Partners' fees tied to, and what do they tell new clients?", a: "The client's growth, not the ad budget; if in a few years you aren't prepared to pay 5 or 10 times your year-one fee, don't become a client." },
        { q: "Why don't the Partners pursue clients?", a: "Hotly pursued relationships seldom turn out well; long-term partnerships form through courtship and a shared meaningful dream, not between hunter and hunted." },
        { q: "What are the five functions, and who does the fifth?", a: "Uncovery, marketing and advertising strategies, message development, media planning (the Partners), and a good business (the client)." }
      ]
    },
    {
      id: "maw-026",
      part: "p5",
      chapter: 26,
      chapterTitle: "Who Is the Wizard?",
      pages: "72–74",
      title: "Who Is the Wizard?: how Roy built authority, priced his time, defined his client and staffed his accounts",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "Chapter 26 · Who Is the Wizard? (plus Websites, Books & Videos) · pp. 72–74", who: "Wizard of Ads Partners" }],
      quotes: [
        { text: "Clients with sales volumes larger than twenty million dollars have typically grown by percentages rather than by multiples.", page: "73" },
        { text: "each team in the field is backed up by wondrous depth on the bench.", page: "73" }
      ],
      idea: "On the surface this is a bio page. Read as a case study, it's a master class in positioning a consultant. What it says, section by section:\n\n**Writing.** *The Wizard of Ads* was voted Business Book of the Year in 1998; *Secret Formulas of the Wizard of Ads* was named the Wall Street Journal's #1 business book in 1999 and became a New York Times bestseller; *Magical Worlds* hit bestseller status in late 2001; *Accidental Magic* collected writing tips with examples from 106 of his students; *Free the Beagle*, his first fiction, came out October 18, 2002.\n\n**Speaking.** More than 130 universities have hosted his seminars. His three-hour talk, “Advertising in America: What Works, What Doesn't and Why,” covers the architecture of the brain, the “Four Tugs-of-War,” “What is Branding, Really?” and the 12 most common advertising mistakes (several of which you've just studied). Fee: **$20,000** in the US and Canada plus airfare, *provided the trip needs no more than one night away from home*; **$50,000** overseas. Procter & Gamble, the Direct Marketing Association, Clear Channel and J. Walter Thompson have paid to hear it.\n\n**Teaching.** Wizard Academy was his wife Pennie's idea to get him off the road: instead of sending him to them for a few hours, let them come to him for a few days. Launched May 2000, it drew CEOs, educators, journalists, inventors and consultants, with an annual autumn reunion. **Publishing:** Wizard Academy Press showcases students' work, mostly audio books with transcripts.\n\n**Consulting.** A *very limited* number of days each month in Austin, at **$5,000 a day**.\n\n**CEO and client definition.** A quarter-century asking what makes people do the things they do, 16+ years growing small-business clients, where “small business” means **owner-operated, $1–20 million in annual sales**. Bigger clients have tended to grow by percentages, not multiples, so their growth couldn't honestly be called “miraculous.”\n\n**The team.** Ten branch offices across the US, Canada and Australia. Partners range from 23 to 48 years old. They aren't assigned by geography; a team is matched to each client's needs, with **at least two professionals per account**, each backed by the whole partner base. Page 74 lists websites, books (the Wizard trilogy, *Accidental Magic*, *Take Your Words to the Bank*, *Free the Beagle*) and videos, ending the gravity well with more places to go deeper.\n\n**Five positioning lessons hiding here:** stacked third-party proof; premium, scarce pricing that anchors every cheaper step of the gravity well (a $1,000 half-day looks modest next to $5,000 a day); a boundary that protects his life (one night away); leverage by making clients come to him; and a precise ideal-client definition with a *reason* behind it.",
      keyPoints: [
        "Authority is stacked from third-party proof: awards, bestseller lists, famous clients, 130+ universities.",
        "Premium, scarce pricing ($20k talks, $5k consulting days, limited availability) anchors the whole gravity well.",
        "Boundaries and leverage: one night away max; the Academy brings clients to him.",
        "Ideal client = owner-operated, $1–20M sales, because that's where multiples are possible.",
        "Every account gets at least two professionals, backed by the full bench."
      ],
      why: "ZDub is a one-person brand today. This page shows Zach how to build proof, set prices that anchor his offer ladder, define his ideal client with a reason, and plan a team structure (two people per account plus a bench) for when he grows.",
      example: {
        title: "Applying the Wizard's positioning to ZDub",
        before: "ZDub's site: “We do Meta ads, content and websites for small businesses. Affordable packages for every budget!”",
        after: "ZDub's site: “Ad partner to owner-operated Sacramento businesses doing $500k–$5M, the size where the right message can multiply revenue, not just nudge it. Proof: PMT case study, before/after numbers. Strategy days: 2 per month, $1,500. Every partner account gets Zach plus a dedicated creative specialist.”",
        body: "Same business, Wizard-style positioning: a precise client definition with a reason, proof up front, scarce premium pricing that makes the retainer and smaller steps feel reasonable, and a two-person promise that signals depth. The numbers are Zach's to set; the structure is Roy's."
      },
      practice: [
        {
          prompt: "Dissect it: read the bio as a strategy.",
          fields: [
            "Why does the page explain *why* the ideal client is $1–20M, rather than just stating it?",
            "What does the “no more than one night away” condition accomplish, for Roy and for his image?",
            "Argue the other side: when could scarce, premium pricing backfire for a new local agency?"
          ]
        },
        {
          prompt: "Apply it: write ZDub's “Who is Zach?” page in the Wizard's structure.",
          fields: ["Proof (what you can honestly claim now)", "Your premium, scarce offer and its price", "Your ideal-client definition and the reason behind it", "Your boundary (what you won't do)", "Your team/bench promise"],
          rubric: [
            "Every proof point is true and verifiable",
            "Includes one scarce, premium offer that anchors cheaper steps",
            "Ideal client is defined with a reason, as Roy's is",
            "States a boundary and a team or bench structure"
          ],
          model: "Proof: PMT case study (registrations and cost per booking, before vs. after), 3 client reviews, my teardown reel series. Premium offer: “Uncovery Day,” 2 per month, $1,500, in person in Sacramento. Ideal client: owner-operated Sacramento-area businesses doing $500k–$5M with excellent reviews, because they're big enough to fund repetition and small enough to grow by multiples. Boundary: no discount-only campaigns, no clients outside 60 miles for in-person work. Bench: every partner account gets me plus a dedicated video editor and a copy review by a second writer."
        }
      ],
      today: { task: "Write ZDub's ideal-client definition in one sentence that includes a size range and the reason for it (as Roy's $1–20M definition does).", output: "One sentence ideal-client definition with a reason", minutes: 10 },
      check: [
        { q: "How does the guide define the Wizard's “small business” clients, and why?", a: "Owner-operated businesses with $1–20 million in annual sales; larger clients have typically grown by percentages, not multiples." },
        { q: "What were Roy's speaking and consulting fees, per the guide?", a: "$20,000 plus airfare in the US/Canada (if no more than one night away), $50,000 overseas; consulting days in Austin at $5,000/day, very limited each month." },
        { q: "How are Wizard of Ads Partners assigned to a client?", a: "Not by geography; a team is matched to the client's needs, with at least two professionals per account, backed by the whole partner base." }
      ]
    },
    {
      id: "maw-026b",
      part: "p5",
      chapter: 26,
      chapterTitle: "A Closing Thought: What Do Rich People Have in Common? (back matter)",
      pages: "75–76",
      title: "A Closing Thought: the one trait rich people share is an unusually long time horizon",
      minutes: 5,
      tags: ["Book"],
      source: [{ doc: "Making Ads Work (Roy H. Williams, compiled by Craig Arthur, 2004)", section: "The End? and A Closing Thought: What Do Rich People Have in Common? · pp. 75–76", who: "Roy H. Williams" }],
      quotes: [
        { text: "The single characteristic that rich people tend to have in common is an unusually long time horizon.", page: "76" },
        { text: "The average person thinks ahead exactly one paycheck.", page: "76" }
      ],
      idea: "The guide doesn't end at Chapter 26. Page 75 asks “The End?” and answers that you've only just begun to climb, pointing to daily articles and repeating the guide's refrain: one day at a time (the same idea as Chapter 18's Exponential Little Bits). Page 76 then adds a final Monday Morning Memo-style essay that quietly ties the whole book together.\n\n**The question:** besides money, what do rich people have in common? Roy rules things out one by one. Not intelligence or education: the world is full of unrewarded geniuses, and every store has a clerk with a master's degree or doctorate. Not conservatism, courage, luck or wealthy families. Not even passion, instinct, timing or greed.\n\n**The answer:** an **unusually long time horizon**. Rich people get rich because they think further ahead than everyone else. Roy says research shows the length of your time horizon is the single best predictor of where you'll land socioeconomically.\n\n**The example.** The real-estate multimillionaire George Stakis says he asks one question of every property, even one he plans to own for only a few hours: *would I want to own this 20 years from today?* If not, he doesn't buy it.\n\n**The crucial reversal.** Wealthy people routinely plant seeds that won't bear fruit for months or years. But they don't do it *because* they're rich and can afford to wait; they became rich *because* they think that way. Meanwhile, the average person thinks exactly one paycheck ahead: what the next check must cover and what the one after will pay for. That isn't a plan for wealth; it's a plan for being average. How far ahead have you been thinking? Roy adds that it's never too late to change.\n\n**Why this closes an advertising book.** Every major argument in the guide is a time-horizon argument in disguise. Relational over transactional customers (Chapter 3). Patience with Type 2 switchers (Chapter 6). Year 2 = 2× Year 1 (Chapter 7). Surviving weeks 8–14 (Chapter 7). Branding into long-term memory instead of expiring offers (Chapters 11, 18). 52-week schedules (Chapters 19–20). Fees tied to years of client growth (Chapter 25). Ad cocaine is a one-paycheck strategy; a household name is a twenty-year one. Chapter 20's question (a little cake now or bigger pieces later?) is the same question asked about life.",
      keyPoints: [
        "The trait rich people share isn't intelligence, education, luck, family, passion or greed; it's a long time horizon.",
        "Time-horizon length is, per Roy, the best predictor of socioeconomic outcome.",
        "Stakis' test: would I want to own this 20 years from now?",
        "People don't think long because they're rich; they get rich because they think long.",
        "Every lesson in the guide (relational customers, 52-week schedules, branding, growth fees) is a long-horizon choice."
      ],
      why: "Zach is building an agency, a wholesaling business and a life at the same time. A deliberate long time horizon decides which clients to take, which deals to pursue, and whether to build assets (skills, case studies, content) that pay off for years.",
      example: {
        title: "The 20-year question applied to Zach's decisions",
        before: "Short horizon: take any client who'll pay this month; chase the wholesale deal with the biggest immediate assignment fee; post whatever gets likes this week.",
        after: "Long horizon: take a client only if Zach would want them as a reference in 5 years; prefer wholesale deals and buyer relationships he'd want to repeat for a decade; publish one teardown reel a week, every week, building a library that will still bring in clients in 2030.",
        body: "Stakis asks whether he'd want to own a property in 20 years even when he'll hold it for hours. Zach can ask the same of every client, deal and habit. Short-term income still matters, but it gets chosen inside a long-term plan instead of replacing one."
      },
      practice: [
        {
          prompt: "Dissect it: examine the time-horizon claim.",
          fields: [
            "In your own words, why does Roy say a long time horizon causes wealth rather than the other way around?",
            "List three chapters of this guide whose advice is really a time-horizon choice, and explain each in one line.",
            "Argue the other side: when is a short time horizon rational (cash emergencies, survival)? How do you keep it from becoming permanent?"
          ]
        },
        {
          prompt: "Apply it: run Stakis' 20-year test on three current decisions in ZDub, wholesaling or life.",
          fields: ["Decision 1: what it is, and would you want to own it in 20 (or 5) years?", "Decision 2: same", "Decision 3: same", "One seed you'll plant this month that won't pay off for a year or more"],
          rubric: [
            "Each decision is real and current",
            "Each gets an honest yes/no on the long-horizon test, with a reason",
            "At least one decision changes because of the test",
            "The seed is specific, scheduled and long-term"
          ],
          model: "1) Taking a discount-only pizza shop client at $600/month: in 5 years would I want them as a reference? No; they want ad cocaine. Decline politely. 2) Building a buyers list for wholesaling in North Sacramento: would I want those relationships in 10 years? Yes; keep investing weekly. 3) Spending Sunday evenings on this book study: would I want this knowledge in 20 years? Yes. Seed: publish one “Making Ads Work” teardown reel every Tuesday for 52 weeks."
        }
      ],
      today: { task: "Write down how far ahead you're actually planning in money, ZDub and wholesaling (be honest: one paycheck? one quarter? one year?). Then write one 3-year goal and the first step you'll take this week.", output: "Current horizon for each area + one 3-year goal with a first step", minutes: 15 },
      check: [
        { q: "What does Roy say rich people have in common?", a: "An unusually long time horizon: they think further ahead than everyone else." },
        { q: "What question does George Stakis ask before buying any property?", a: "Would I want to own this property 20 years from today? If not, he doesn't buy it." },
        { q: "How far ahead does the average person think, according to the essay?", a: "Exactly one paycheck, which Roy calls a plan for being average." }
      ]
    },
  ]
});
