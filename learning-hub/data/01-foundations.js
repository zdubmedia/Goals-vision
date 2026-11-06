HUB.tab({
  id: "foundations",
  title: "Marketing Foundations & Strategy",
  icon: "compass",
  tagline: "Who it's for, what you stand for, and why they remember you when the need shows up.",
  intro: `This is the base of everything else on the hub. You'll learn what marketing actually is (and isn't), the order every campaign should be built in, how to position a local business so it stops looking like a commodity, how to research customers until you know them better than they know themselves, how branding and repetition really work, and how geography shapes a local business's growth.

By the end you'll be able to sit down with PMT or any Sacramento trade and diagnose the real bottleneck (market, message, experience, frequency or location) before you spend a dollar on ads.`,
  parts: [
    { id: "what-is", title: "Part 1 · What marketing really is" },
    { id: "strategy", title: "Part 2 · Strategy & positioning" },
    { id: "customer", title: "Part 3 · Know the customer" },
    { id: "brand", title: "Part 4 · Branding & staying top of mind" },
    { id: "local", title: "Part 5 · Local marketing & location" },
    { id: "business", title: "Part 6 · Where ZDub fits in a client's business" }
  ],
  trackers: [
    { id: "voc", title: "Voice-of-Customer bank", goal: "10 exact customer phrases a week, per active client", fields: ["Client", "Exact phrase (copy it word for word)", "Where I found it (review, DM, call, comment)", "Type (desire / fear / objection / proof / story)"] },
    { id: "visibility", title: "Local recall log", goal: "Note 3 local brands, signs or ads a week that you remembered without trying", fields: ["Business and where I saw it", "Recall cue (face, color, phrase, wrap, sound)", "Emotion it's anchored to", "What I'd steal for a client"] }
  ],
  lessons: [
    {
      id: "fnd-01",
      part: "what-is",
      title: "Marketing is the whole system; advertising is only one piece",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 1 · Four jobs that get confused; Marketing is the act of making change happen; Marketing is service, not trickery", who: "Roy H. Williams (The Wizard of Ads), Seth Godin (This Is Marketing), Claude Hopkins (Scientific Advertising)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 1 · Recall 1.10 + Answer Key; Swipe & Study", who: "Workbook" }
      ],
      idea: `Ask a business owner what marketing is and you'll hear "posting on social," "running ads," or "a logo and a website." Those are tools. The masters separate four different jobs:

- **Marketing** is the whole system: deciding who you serve, what you offer them, what you say, where you say it, and how you keep them.
- **Advertising** is paid communication. It's one piece of marketing.
- **Branding** is what people remember and feel when they hear your name.
- **Sales** is the one-to-one conversation that turns interest into a decision.

Roy Williams separates two of these neatly: if advertising is "getting your name out," branding is "attaching something to your name." A business can be famous and still have nothing attached to its name, which is why plenty of well-known local businesses still struggle.

Two authors give you the purpose and the method. Claude Hopkins (1923): "The only purpose of advertising is to make sales." Seth Godin: marketing is the generous work of helping people become who they're trying to become. You don't "target" people, you serve them, starting with empathy: Who is it for? What change are you trying to make for them? What do they believe, want and fear? Hopkins gives you the goal (sales), Godin the method (serve a specific person). You need both.

Every author in the library lands on the same practical point: **marketing is service, not trickery.** Williams says bad advertising is about the advertiser and good advertising is about the customer. "We're the best," "family-owned since 1987," "quality and service": nobody cares. People care about their problem, their goal, their fear, their time and their money. Write about them.`,
      keyPoints: [
        "Marketing = who, what offer, what you say, where, and how you keep them. Ads are one piece.",
        "Branding is attaching something to your name, not just getting the name out (Williams).",
        "Purpose of advertising: sales (Hopkins). Method: serve a specific person with empathy (Godin).",
        "Self-centered lines (best, trusted, family-owned) get ignored. Write about the customer's problem and goal."
      ],
      why: "When a prospect says 'we need marketing,' they usually mean 'we need ads.' ZDub sells the system (offer, message, follow-up, brand), and you can only sell it if you can explain the difference in one breath.",
      example: {
        title: "PMT: the four jobs in one business",
        body: `- **Marketing:** choosing never-ridden adults near the Woodland range as the main market, shaping the beginner course offer, setting up the instant text-back and the review ask.
- **Advertising:** the Meta video ad that shows a nervous first-timer's first hour on the bike.
- **Branding:** what people feel when they hear "Pacific Motorcycle Training." Ideally: "that's where nervous beginners go and come out riding."
- **Sales:** the call or text when someone asks, "Which weekend has open seats, and do I need my own bike?"`
      },
      table: { head: ["Job", "What it is", "Weak version", "Strong version"], rows: [
        ["Marketing", "The whole system", "\"Let's post more\"", "Who, offer, message, channel, retention decided in order"],
        ["Advertising", "Paid communication", "Boosted logo post", "Ad that speaks to one person's problem and asks for a next step"],
        ["Branding", "What's attached to the name", "New logo", "One clear idea people repeat to friends"],
        ["Sales", "One-to-one decision", "Price quote by text", "Conversation that finds the problem and earns the yes"]
      ] },
      practice: [
        {
          prompt: "Explain the four jobs to a Roseville roofer who just told you 'I tried marketing, it doesn't work.' One plain sentence each, in words he'd use.",
          fields: ["Marketing", "Advertising", "Branding", "Sales", "One sentence: which job he probably actually tried"],
          rubric: ["No jargon a roofer wouldn't use", "Marketing is described as a system, not a channel", "Branding is about memory and feeling, not a logo", "You named which single job he likely tried (usually ads or posting)"],
          model: "Marketing: deciding who you want calls from, what you offer them, what you say, where you say it, and how you keep them coming back. Advertising: paying to put that message in front of people. Branding: what homeowners think of when they hear your name. Sales: the conversation at the kitchen table that turns a quote into a signed job. What he tried: a few boosted posts, which is one slice of advertising, with no clear market or message behind it."
        },
        {
          prompt: "Find three lines from a local business's website or ads that are about the advertiser. Rewrite each to be about the customer.",
          fields: ["Line 1 (as written) → rewrite", "Line 2 (as written) → rewrite", "Line 3 (as written) → rewrite"],
          rubric: ["Each rewrite names a customer problem, goal, fear, time or money", "No 'best,' 'quality,' 'trusted,' 'family-owned' left", "Rewrites are specific and could be true"]
        }
      ],
      today: { task: "Set up your swipe file (folders: Headlines, Hooks, Offers, Proof, Pages, Emails, Video). Then open the Meta Ad Library, search Sacramento-area roofers, HVAC companies and riding schools, and save 5 ads about the advertiser and 5 about the customer. Under each pair, write one line on what's different about the first sentence.", output: "Swipe file created with 10 saved ads and 5 one-line notes", minutes: 30, suggested: false },
      check: [
        { q: "Define marketing, advertising, branding and sales in one sentence each.", a: "Marketing: the whole system of deciding who you serve, what you offer, what you say, where you say it and how you keep customers. Advertising: paid communication, one piece of marketing. Branding: what people remember and feel when they hear your name ('attaching something to your name'). Sales: the one-to-one conversation that turns interest into a decision." },
        { q: "Hopkins and Godin seem to disagree. How do they fit together?", a: "Hopkins gives the purpose (advertising exists to make sales); Godin gives the method (serve a specific person with empathy). The best marketing does both." },
        { q: "According to Williams, what's the difference between bad and good advertising?", a: "Bad advertising is about the advertiser; good advertising is about the customer." }
      ]
    },
    {
      id: "fnd-02",
      part: "what-is",
      title: "Every ad must pass the salesperson test and answer seven questions",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 1 · Advertising is salesmanship, multiplied; Seven questions every campaign must answer", who: "Claude Hopkins, Scientific Advertising (1923); synthesis of the library" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 1 · Recall 1.1, 1.12; Drills D1.1, D1.4 + Answer Key", who: "Workbook" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 · Applied to PMT: copy rules", who: "ZDub research playbook" }
      ],
      alsoIn: ["Persuasion tab: StoryBrand / customer as hero", "Copywriting tab: five awareness levels"],
      idea: `Claude Hopkins, the most important ad man of the early 1900s, said advertising is "multiplied salesmanship." His test still works: **would this ad work if a good salesperson said it face to face to one prospect?**

A salesperson would never walk up to a stranger and say "Quality You Can Trust Since 1998!" They'd ask a question, find the problem, explain exactly how they solve it, prove it, and ask for a next step. Good ads do the same thing, at scale.

Pulling the whole library together, every piece of marketing should answer seven questions for the customer, out loud or between the lines:

1. **Who is this for?** So the right person thinks, "That's me."
2. **What do you want?** The dream outcome, in their words.
3. **What's in the way?** The problem, external and internal.
4. **Why this, and why you?** Your difference and your proof.
5. **Why should I believe you?** Evidence, reviews, specifics.
6. **Why now?** A real reason to act, not a fake countdown.
7. **What's the next step?** One easy, low-risk action.

These seven come back again in StoryBrand, awareness levels, offer design and landing pages, so learn them cold.

Two guardrails. Every claim must be true for the client, and the "why now" must be real (spring weekends filling up is real; a fake timer is not). For PMT specifically, the Andromeda playbook's copy rules apply on top: no industry jargon, no "coach," "cheap," "easy," "discount" or "guaranteed," no refund language, and never a promise of passing the endorsement.`,
      keyPoints: [
        "Test every ad: would a great salesperson say this to one person's face?",
        "Salespeople ask, find the problem, explain, prove, and ask for a next step. Ads should too.",
        "Seven questions: who, want, problem, why you, proof, why now, next step.",
        "Every claim true; every 'why now' real.",
        "PMT copy rules: no 'coach,' 'cheap,' 'easy,' 'discount,' 'guaranteed,' refunds, or pass promises."
      ],
      why: "Most local ads Zach will compete against fail the salesperson test in the first line. Running this test in 60 seconds is the fastest way to improve a client's ads and to spot what a prospect's ads are missing on a cold call.",
      example: {
        title: "Roofer and PMT rewrites",
        before: "Quality Roofing You Can Trust. Call Today!",
        after: "After a windstorm, most roof damage can't be seen from the ground. We'll send you photos of yours, free.",
        body: `PMT, seven questions in about 70 words (claims in brackets must be swapped for PMT's real ones):

"Always wanted to ride but scared you'll drop the bike? (who, problem) Picture riding the river roads this spring. (want) Our beginner course is built for first-timers who've never touched a clutch, and the bike and helmet are provided. (why you) [Real review count and rating.] (proof) Spring weekends fill first. (why now, only if true) Tap 'See dates' and pick yours. (next step)"`
      },
      practice: [
        {
          prompt: "Drill D1.1: Find three real local ads (Meta Ad Library: Sacramento roofers, HVAC, riding schools, or a truck wrap you saw). Write the original line and the salesperson version in the same number of words or fewer.",
          fields: ["Ad 1 original", "Ad 1 salesperson version", "Ad 2 original", "Ad 2 salesperson version", "Ad 3 original", "Ad 3 salesperson version"],
          rubric: ["Names the customer's situation", "Makes one specific promise or point", "Points to a next step", "Contains none of: quality, trusted, best, family-owned"],
          model: "Original: 'Sacramento's #1 HVAC Company.' Salesperson: 'AC blowing warm in this heat? We'll text you a price before anyone shows up.'"
        },
        {
          prompt: "Drill D1.4: Take one PMT ad or post (or one a prospect is running). Mark which of the seven questions it answers, then rewrite it in 90 words or fewer so it answers all seven.",
          fields: ["Which of the 7 it answers now", "Which are missing", "Your 90-word rewrite"],
          rubric: ["All seven questions answered", "Every claim is true for the business", "'Why now' is real, not a fake countdown", "Follows PMT copy rules if it's PMT", "Under 90 words"]
        }
      ],
      today: { task: "Rewrite PMT's most recent ad or top organic post using the seven questions. Keep it under 90 words, follow PMT's copy rules, and drop it in PMT's ad doc as a test candidate.", output: "One 7-question PMT ad draft in the ad doc", minutes: 25, suggested: false },
      check: [
        { q: "What is Hopkins' test for any ad?", a: "Would it work if a good salesperson said it face to face to one prospect? Advertising is multiplied salesmanship, so if a skilled salesperson wouldn't say it, it won't sell at scale." },
        { q: "List the seven questions every campaign must answer.", a: "1) Who is this for? 2) What do you want (dream outcome)? 3) What's in the way? 4) Why this, and why you? 5) Why should I believe you? 6) Why now? 7) What's the next step?" },
        { q: "Your rewrite still says 'trusted' and 'family-owned.' What's wrong?", a: "Those are claims about the advertiser, not help for the customer. Replace them with the customer's situation, one specific point, and a next step." }
      ]
    },
    {
      id: "fnd-03",
      part: "what-is",
      title: "Market first, then offer, then copy",
      minutes: 14,
      tags: ["Course", "Book"],
      source: [
        { doc: "Course Lesson 2.5 — Market, Offer, Copy", section: "The order of leverage; Market: who you sell to (four tests); Offer: what they get and on what terms", who: "Course lesson (citing Gary Halbert, Eugene Schwartz, Alex Hormozi, Andy Rachleff)" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 1 · Market, message, media: the order that matters; 'It's what you say, not who you reach'; Marketing is the act of making change happen (smallest viable market)", who: "Allan Dib (The 1-Page Marketing Plan), Seth Godin (This Is Marketing), Roy H. Williams" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 1 · Recall 1.2, 1.3, 1.7, 1.9; Drill D1.2 + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["Ad Creative tab: Creative is the targeting", "Offers tab: outcome offer / one-sentence offer"],
      idea: `**Market beats offer, and offer beats copy. When something isn't working, fix them in that order.** (Lesson 2.5)

Think of a house. The **market** (who you sell to) is the foundation. The **offer** (what they get and on what terms) is the frame. The **copy** (how you say it) is the paint. Paint is the easiest part to change and the most fun to argue about, and it matters least if the foundation is cracked. No paint job saves a house built on a sinkhole.

The best direct-response minds rank them the same way:
- **Gary Halbert** asked students what advantage they'd want if they opened a hamburger stand. Better meat, better location, lower prices? He'd take a **starving crowd** (*The Boron Letters*).
- **Eugene Schwartz:** copy can't create desire. It can only take desire that already exists and point it at your product (*Breakthrough Advertising*, 1966).
- **Alex Hormozi** ranks a starving crowd first, offer strength second and persuasion skills third (*$100M Offers*, 2021).
- Venture capital learned it too. Andy Rachleff's rule: when a great team meets a lousy market, the market wins.

**Hormozi's four tests for a good market:**
1. **In pain:** the problem costs them money right now.
2. **Able to pay:** their margins cover your fee with room to spare.
3. **Easy to target:** you can find them and reach them, ideally on Meta.
4. **Growing:** there are more of them every year.

A niche that fails two of these will fight you no matter how good your ads are.

**The offer is the whole deal**: price, guarantee, timeline, what's included and how much risk they carry. The service is only one piece. Same service, two offers (illustrative): "Meta ads management, $3k/month" versus "We'll fill your slow weekdays within 60 days, or you don't pay for the next month."

#### Market, message, media

Allan Dib's model says every campaign has three parts, and you decide them **in this order**:

1. **Market:** the specific people you're trying to reach.
2. **Message:** what you say to them. That's the offer, the hook, the reasons and the proof (the "offer, then copy" part).
3. **Media:** the channel that carries it: Meta ads, Reels, Google, email, a mailer, a truck wrap.

The mistake almost every small business makes is starting at step 3: "We need to be on TikTok," "Let's try Google Ads," "Should we do a billboard?" Media is just the delivery truck. Load the wrong message, addressed to everyone, and the truck delivers nothing.

> "Market first, message second, media last. A great message aimed at the right market will work in almost any medium. A weak message fails in all of them." (Mastery Guide, Ch 1)

**How narrow should the market be?** Seth Godin's answer is the *smallest viable market*: the smallest group you could serve so well they'd miss you if you were gone, and tell others. Go deep with a few and let them spread the word. "Everyone who likes motorcycles" is not a market. "Adults 25 to 55 within about 30 minutes of the range who've always wanted to ride but are nervous about starting" is.

**Why the message is the big lever.** Roy Williams argued for decades that what you say matters far more than who you reach: two businesses can buy the same audience and one gets rich while the other goes broke. On Meta in 2026 that's literally true, because the delivery system reads your images and words to decide who sees the ad. (That mechanism is taught fully in the Ad Creative tab.) The practical upshot for this lesson: a sharp market definition is what makes the message sharp, and the sharp message is what finds the market.

So the order for every new client is: name the market, build the offer for that market, then write the copy, then pick the channel.`,
      keyPoints: [
        "Market is the foundation, offer the frame, copy the paint. Diagnose and fix in that order.",
        "A starving crowd beats better copy (Halbert, Schwartz, Hormozi agree).",
        "Four market tests: in pain, able to pay, easy to target, growing. Fail two and the niche fights you.",
        "Order: market (who), message (offer + copy), media (where). Never start with the channel.",
        "Media is the delivery truck. The wrong message to everyone delivers nothing.",
        "Aim for Godin's smallest viable market: a group you can serve so well they'd miss you.",
        "The message matters more than the targeting; on Meta, the message helps do the targeting.",
        "A great message in the right market works in almost any medium."
      ],
      why: "Prospects will open almost every sales call with a media question ('should we be on TikTok?'). Answering with market and message first is how ZDub sounds like a strategist instead of a button-pusher.",
      example: {
        title: "PMT in the right order (from the Workbook's model answer)",
        before: "Media first: 'Let's run Meta ads to motorcycle enthusiasts in Northern California.'",
        after: "Market: adults 25–55 within about 30 minutes of the training range who've always wanted to ride but are nervous about starting. Message: 'Never touched a motorcycle? Most of our students hadn't either. Bike and helmet provided; you start from zero, one step at a time.' (Only claims true for PMT.) Media: Meta video ads (Reels and Feed) in a tight radius, plus organic Reels of real first-day students.",
        body: "Why that media follows from that market: this audience daydreams about riding while scrolling, and video can show the fear melting away in a way a static or a search ad can't."
      },
      table: { head: ["Step", "Question", "PMT", "Roseville roofer"], rows: [
        ["1. Market", "Who exactly is it for?", "Nervous never-ridden adults near the range", "Owners of 20+-year-old homes in Roseville and Rocklin"],
        ["2. Message", "What do you say? (offer, hook, proof)", "Start from zero, bike provided, real first-day stories", "Free photo inspection after storms, real before/afters"],
        ["3. Media", "Where do you say it?", "Meta video + organic Reels, tight radius", "Meta ads to service-area ZIPs, yard signs, door hangers"]
      ] },
      practice: [
        {
          prompt: "Drill D1.2: For each business, write market, then message, then media (in that order), then one sentence on why the media follows from the market.",
          fields: ["PMT: market / message / media / why", "Residential roofer in Roseville: market / message / media / why", "New coffee shop in Midtown Sacramento: market / message / media / why"],
          rubric: ["Market is a specific group you can picture, not 'everyone who...'", "Message includes an offer or hook plus a reason to believe", "Media choice is explained by where that market pays attention", "Nothing claimed that isn't true"],
          model: "Coffee shop: Market: remote workers and state employees within walking distance of the shop who want a place to work that isn't home. Message: 'Fast Wi-Fi, outlets at every table, and the first refill is on us before 10 a.m.' Media: Instagram Reels and Stories in a 1–2 mile radius, plus a sidewalk sign. Why: they walk past and they scroll on lunch break."
        },
        {
          prompt: "Score three niches on Hormozi's four market tests (Lesson 2.5). For each: in pain? able to pay? easy to target on Meta? growing? Give a yes/no with one reason each, then a verdict.",
          fields: ["Motorcycle training schools (like PMT)", "Residential roofers in Placer County", "A niche you're curious about"],
          rubric: ["Each test gets a yes/no plus a concrete reason, not a vibe", "'Able to pay' considers their margins vs. a $1,500–2,500 retainer plus ad spend", "Verdict follows the rule: failing two tests = walk away or fix the angle", "No made-up stats presented as fact"],
          model: "Roofers in Placer County: In pain: yes, a slow month with crews on payroll costs thousands. Able to pay: yes, $10–20k jobs leave room for a retainer. Easy to target: yes, homeowners in service-area ZIPs are reachable on Meta. Growing: steady (aging roofs, storms, new builds aging in). Verdict: strong market. The work is the offer and the proof, not the niche."
        },
        {
          prompt: "A plumbing prospect says, 'We need to be on TikTok.' Write your 2–3 sentence answer, Dib-style.",
          fields: ["Your answer"],
          rubric: ["Doesn't say yes or no to TikTok first", "Asks or states who they want to reach", "Asks or states what to say to them", "Explains the channel comes last and follows from the market"],
          model: "\"TikTok might be right, but it's the last decision, not the first. Who do you want more calls from: emergency repairs or planned remodels, and in which towns? Once we know that and what we'd say to them, the channel almost picks itself.\""
        }
      ],
      today: { task: "Write PMT's one-page Market / Message / Media sheet: one sentence naming the smallest viable market, the offer and one hook with real proof, and the channel with a one-line reason. Every future PMT ad gets checked against it.", output: "PMT Market-Message-Media sheet in the client folder", minutes: 30, suggested: false },
      check: [
        { q: "Ads aren't working. In what order do you check market, offer and copy, and why?", a: "Market first, then offer, then copy. Market is the foundation, offer the frame, copy the paint: the paint matters least if the foundation is cracked (Lesson 2.5)." },
        { q: "What are Hormozi's four tests for a good market?", a: "They're in pain, they can pay, they're easy to target, and they're growing. A niche that fails two will fight you no matter how good the ads are." },
        { q: "In what order does Dib say to decide a campaign?", a: "Market, message, media. Most failing campaigns start with the media." },
        { q: "What is Godin's smallest viable market?", a: "The smallest group you could serve so well they'd miss you if you were gone, and tell others. You go deep with a few instead of trying to please everyone." },
        { q: "A client asks for TikTok. What's the right first response?", a: "Pin down who they want to reach and what to say to them, then choose the channel. TikTok is media, the delivery truck." }
      ]
    },
    {
      id: "fnd-04",
      part: "what-is",
      title: "Ads only speed up what happens inside the door",
      minutes: 9,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 1 · The three worlds of every business (+ ZDub Application)", who: "Roy H. Williams, Magical Worlds of the Wizard of Ads" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 1 · Recall 1.5, 1.6, 1.11 + Answer Key; Client Lab L1 step 3", who: "Workbook" },
        { doc: "Social Media Marketing Playbook for ZDub (10/31/26)", section: "Part 1 · Roy H. Williams: 'Deliver what you promise'", who: "ZDub research playbook" }
      ],
      alsoIn: ["Funnels tab: speed to lead & follow-up", "Social Workbook Mod 8: 'Keep the promise'"],
      idea: `Roy Williams says every business lives in three worlds:

1. **The world outside your door:** what the public expects and believes about you. Advertising and reputation live here.
2. **The world inside your door:** the actual experience. The call, the visit, the class, the job site, the invoice.
3. **The world of the executive office:** the owner's decisions about hiring, pricing, hours, location and training, which ripple out into the other two.

Advertising works in world #1, but **customers judge you in world #2.** That's why Williams insists advertising can't repair a broken business. It only accelerates what was going to happen anyway. Great ads for a business with rude staff or no follow-up just spread the bad news faster.

The research playbook says the same thing for social: campaigns fail when operations don't keep the ad's promise, so push clients on answering phones and following up.

**What this means for ZDub:** before a dollar of ad spend, audit world #2.
- How fast do they answer a new lead? (Time it yourself.)
- What actually happens when someone calls or fills a form?
- What do the Google reviews say, good and bad?
- Who in the executive office decides hours, staffing and follow-up, and will they change it?

If PMT gets 40 inquiries and nobody replies for two days, more ads won't fix it. A follow-up system will (the Funnels tab covers that build). Positioning has the same rule: if you advertise "fastest response in town" and it takes two days to call back, you've bought a reputation for broken promises.`,
      keyPoints: [
        "Three worlds: outside the door (ads, reputation), inside the door (experience), executive office (owner decisions).",
        "Ads work outside the door; customers judge you inside it.",
        "Advertising accelerates what was already going to happen. It can't fix a broken business.",
        "Audit world #2 (response speed, the call, reviews) before spending on ads.",
        "Never advertise a promise the inside of the business doesn't keep."
      ],
      why: "ZDub gets judged on results, and results die inside the client's door more often than in Ads Manager. Auditing world #2 first protects the case study and gives Zach something specific to fix on day one.",
      example: {
        title: "Secret-shopping a Sacramento HVAC prospect",
        body: `Zach fills out the contact form on a Friday at 2 p.m. First reply: Monday at 11 a.m., a generic email. Their Google reviews average 4.7, but four of the last ten mention "hard to reach."

Diagnosis: the experience inside the door is good once you're in, but the doorway itself is broken. More ads would mostly create more unanswered forms. ZDub's pitch leads with fixing response time (an instant text-back and a call within minutes) before scaling spend. That's a world #2 fix with a world #1 payoff.`
      },
      practice: [
        {
          prompt: "Run a world #2 audit on PMT or a prospect. Inquire like a real customer, then fill this in.",
          fields: ["How I inquired + exact time sent", "Time to first response + channel", "What was said and how it felt", "Reviews: 3 repeated praises", "Reviews: 3 repeated complaints", "The one world-#2 fix before more ad spend"],
          rubric: ["Response time is measured, not guessed", "Review themes are quoted, not summarized", "The fix is specific and inside the client's control", "You identified which executive-office decision causes the problem"]
        }
      ],
      today: { task: "Secret-shop one Sacramento trades prospect from your outreach list: submit their form or call. Log the response time and what happened. Use it as the specific gap in your outreach message.", output: "One response-time row in the prospect tracker + one outreach line built from it", minutes: 20, suggested: false },
      check: [
        { q: "Name Williams' three worlds. Which one does advertising work in, and which one do customers judge you in?", a: "Outside your door (public expectations, reputation), inside your door (the actual experience), and the executive office (owner decisions on hiring, pricing, hours, training). Advertising works outside; customers judge you inside." },
        { q: "Williams says advertising can't repair a broken business. What does it do instead?", a: "It accelerates what was going to happen anyway. A great business grows faster; a broken one gets found out faster." },
        { q: "PMT gets 40 inquiries and nobody replies for two days. Where's the problem?", a: "Inside the door: the personal experience factor. The ads worked; the follow-up didn't. More ads would spread the bad experience faster." }
      ]
    },
    {
      id: "fnd-05",
      part: "what-is",
      title: "The Advertising Performance Equation: find the weakest multiplier",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 1 · The Advertising Performance Equation; Example: diagnosing a roofing company; ZDub Application: explaining the partnership", who: "Roy H. Williams, Magical Worlds of the Wizard of Ads" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 1 · Recall 1.4, 1.5; Drill D1.3; Client Lab L1 + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["Sales tab: money model before price", "Mastery Guide Ch 14 (APE revisited)"],
      idea: `In *Magical Worlds of the Wizard of Ads*, Roy Williams gives a "statement of relationship" (not an exact calculator) that explains how advertising turns into revenue:

- **Share of Voice × Impact Quotient = Share of Mind**
- **Share of Mind × Personal Experience = Share of Market**
- **Share of Market × Market Potential = Sales Volume**

What each term means:
- **Share of voice:** your percentage of all the advertising in your category in your area. You can buy it.
- **Impact quotient:** how persuasive and memorable your message is versus the average ad in your category (average = 1.0). You earn it with better copy and creative.
- **Share of mind:** how much space you own in people's heads. If your ads are 50% better than average (1.5), a 20% share of voice gives you 30% share of mind. With weak ads (0.8) you'd have to buy 38% share of voice to get the same result.
- **Personal experience factor:** whether customers' real experience beats (above 1.0) or misses (below 1.0) what they expected. This is world #2.
- **Market potential:** total dollars spent in the category in the area. Williams observed few businesses pass about a third of their market; around 40% is a practical ceiling.

**The magic is that the terms multiply.** One weak factor drags everything down. Brilliant ads plus terrible service leaks. Great service plus great ads that show up twice a year gets forgotten.

**How ZDub uses it.** When a client asks for "spend $X, get Y customers," the APE explains why ZDub works as a partner instead of selling one channel: voice, impact, experience and market size all multiply, and ZDub's job is to find the weakest multiplier and raise it first, then the next. You can still give a projection, but frame it as a range built on assumptions you'll test in the first 30 to 60 days. (Building that projection is the money model, taught in the Sales tab.)`,
      keyPoints: [
        "Voice × impact = mind; mind × experience = market share; market share × market potential = sales.",
        "Voice is bought; impact is earned with better creative and is usually the cheapest multiplier to raise.",
        "The terms multiply, so the weakest factor limits everything.",
        "Practical ceiling: about a third of a market, rarely past 40%.",
        "Give projections as ranges built on assumptions you'll test in 30–60 days."
      ],
      why: "The APE turns 'ads don't work' into a diagnosis. It lets Zach show an owner exactly which part is broken, which is the most credible thing a new agency can do on a first call.",
      example: {
        title: "Diagnosing a roofer who says 'ads don't work'",
        body: `- **Share of voice:** one boosted post a month. Tiny.
- **Impact quotient:** a photo of a truck and "Quality Roofing, Call Today." Below average.
- **Personal experience:** 4.9 stars, 180 reviews. Excellent.
- **Market potential:** a big metro. Huge.

Verdict: the business is great; the advertising is weak and infrequent. Raise impact first (better hooks and proof), then raise voice (consistent weekly presence in a tight radius).`
      },
      table: { head: ["Factor", "How you check it", "How ZDub raises it"], rows: [
        ["Share of voice", "Meta Ad Library, Google results, posting frequency vs. top 3 competitors", "Consistent weekly presence in a radius you can afford"],
        ["Impact quotient", "Salesperson test on the last 5 ads/posts", "Better hooks, proof, specific claims"],
        ["Personal experience", "Reviews + secret shop (response time)", "Follow-up system, fix world #2 first"],
        ["Market potential", "Rough count of potential customers in the service area", "Pick a bigger or better market, or a specialty offer"]
      ] },
      practice: [
        {
          prompt: "Drill D1.3: APE arithmetic (to build intuition, not precision).",
          fields: ["1. Competitor impact 0.8: what share of voice for 30% share of mind?", "2. 15% voice, 1.2 impact, 1.1 experience: share of mind and share of market?", "3. Market potential $4M/yr: suggested sales volume?", "4. Which single factor would you raise first, and why?"],
          rubric: ["Math shown", "Answer 4 names the weakest or cheapest multiplier with evidence", "You remember it's a relationship, not a calculator"],
          model: "1) 30% ÷ 0.8 = 37.5%. 2) Mind = 15% × 1.2 = 18%; market = 18% × 1.1 = 19.8%. 3) 19.8% × $4,000,000 ≈ $792,000. 4) Impact: better creative is the cheapest multiplier to raise, and 15% voice is then easier to grow on proven ads."
        },
        {
          prompt: "Client Lab L1: Build a one-page APE diagnosis for PMT you could show the owner. Put evidence next to every score.",
          fields: ["Share of voice (1–5) + evidence", "Impact quotient (1–5) + evidence", "Personal experience (1–5) + evidence (reviews + secret shop)", "Market potential (rough customers in the service area)", "Weakest multiplier + 3-sentence diagnosis + first 30-day action"],
          rubric: ["Every score has evidence next to it", "The weakest multiplier is circled and explained", "If follow-up is slow, fixing it comes before more spend", "The 30-day action is one concrete thing"],
          model: "(Illustrative numbers; use PMT's real ones.) \"Your experience is your biggest asset: 4.8 stars and students rave about the instructors. Your advertising is the weak link: you show up rarely and your ads look like everyone else's. For the next 30 days we'll raise impact first (new hooks from real student stories), then add steady weekly presence around the range.\""
        }
      ],
      today: { task: "Complete Client Lab L1 for PMT: check the Meta Ad Library for competing riding schools, grade PMT's last 5 posts with the salesperson test, read the reviews, and write the 3-sentence diagnosis. Save it for the next check-in with the owner.", output: "One-page PMT APE diagnosis", minutes: 45, suggested: false },
      check: [
        { q: "20% share of voice and an impact quotient of 1.5 gives roughly what share of mind?", a: "30%. Voice × impact = mind, so better ads let you buy less voice for the same mental share." },
        { q: "Why does it matter that the APE terms multiply rather than add?", a: "Because one weak factor drags the whole result down. Great ads can't make up for terrible service, and great service can't make up for never showing up." },
        { q: "How should you frame a 'spend X, get Y' projection for a client?", a: "As a range built on assumptions you'll test in the first 30 to 60 days, while you find and raise the weakest multiplier." }
      ]
    },
    {
      id: "fnd-06",
      part: "what-is",
      title: "Hunt and farm: run direct response and brand at the same time",
      minutes: 10,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 1 · Direct response versus brand: the tortoise and the hare (+ Common Mistake)", who: "Roy H. Williams; Allan Dib, Lean Marketing; King Kong, Meta Ads Playbook" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 1 · Recall 1.8, 1.13 + Answer Key", who: "Workbook" },
        { doc: "Social Media Marketing Playbook for ZDub (10/31/26)", section: "TL;DR · Run two linked engines", who: "ZDub research playbook" }
      ],
      alsoIn: ["Offers tab: discounting & self-confession", "Organic Social tab"],
      idea: `There are two schools of advertising, and you need both.

**Direct response** (Hopkins, Caples, Schwartz, Hormozi, King Kong) wants a measurable action now: a click, a call, a form, a booking. It's tested and counted. Its weakness: if you only chase people ready to buy today, you're fighting over a small slice of the market.

**Brand building** (Ogilvy, Williams, Godin) wants you to be the name people think of first and feel best about when they're ready, which may be months from now. Its weakness: it's slower to measure, and impatient owners quit too early.

Williams calls short-term promotions **"the cocaine of advertising."** Sale! Sale! Sale! feels great, works fast, and works less well every time, until customers won't buy anything unless it's on sale. The King Kong playbook adds the market reality: in most markets only a small slice of people are ready to buy right now. Hunting only them means fighting every competitor for the most expensive clicks. Farming everyone else, with useful content and consistent presence, is where long-term growth is.

Allan Dib's *Lean Marketing* combines them: **brand-building direct response.** Every ad should both ask for an action and leave a positive, consistent memory of who you are.

That's ZDub's sweet spot, and the research playbook names it as "two linked engines": an organic **trust engine** (proof, transformations, behind-the-scenes, tips) and a paid **lead engine** (offer, low-friction capture, local geography). Winning organic posts become ads; ad learnings feed organic.

**Common mistake:** judging brand work like a coupon. A client who turns off consistent content after three weeks because "it didn't bring in sales yet" has paid for the hard part of pushing the car and quit right before it started rolling (Williams' image). Set expectations up front: **harvesting campaigns are measured in days, brand campaigns in months.**`,
      keyPoints: [
        "Direct response hunts the ready-now slice; brand farms everyone who'll be ready later.",
        "Constant promotions are 'ad cocaine': fast, then weaker each time, until nobody buys full price.",
        "Brand-building direct response: every ad asks for action AND leaves a consistent memory.",
        "ZDub runs two linked engines: organic trust + paid leads.",
        "Tell clients up front: harvest is measured in days, brand in months."
      ],
      why: "PMT's owner wants 'spend X, get Y.' If Zach doesn't set the days-versus-months expectation on day one, the brand side of the work will get judged like a coupon and cut right before it pays off.",
      example: {
        title: "PMT: one hunt piece, one farm piece, same recall cue",
        body: `- **Hunt (lead engine):** Meta ad to never-ridden adults around the range: "Open seats this weekend in the beginner course. Bike and helmet provided. Tap to see times." Measured in days: cost per lead, registrations.
- **Farm (trust engine):** organic Reel: a nervous student's first ten minutes on the bike, ending on her grin. Measured in months: views by locals, follows, people who later say "I've seen your videos."

Both open with the same sound and the same instructor's face, so the farm work makes the hunt ad feel familiar.`
      },
      practice: [
        {
          prompt: "For one client (PMT or a trade), write one hunt piece and one farm piece that share the same recall cue.",
          fields: ["The shared recall cue (face, sound, phrase, color)", "Hunt ad: copy + the action it asks for", "Farm post: concept + what memory it leaves", "How you'll measure each (days vs. months)"],
          rubric: ["Hunt piece asks for one measurable action", "Farm piece gives value with no hard ask", "Both carry the same recall cue", "Measurement windows match the job (days vs. months)"]
        }
      ],
      today: { task: "Write a 3–4 sentence expectation note for PMT's owner: what the lead campaigns will be judged on in days, what the content will be judged on in months, and why cutting content early wastes the investment. Save it for the next client update.", output: "Expectation note in PMT's client folder", minutes: 20, suggested: false },
      check: [
        { q: "Why does Williams call constant promotions 'the cocaine of advertising'?", a: "They work fast but less well each time, until customers won't buy without a sale." },
        { q: "What does Dib mean by 'brand-building direct response'?", a: "Every ad both asks for a measurable action and leaves a consistent, positive memory of who you are." },
        { q: "What's the weakness of each school?", a: "Direct response fights over the small slice ready to buy today. Brand building is slower to measure, so impatient owners quit too early." }
      ]
    },
    {
      id: "fnd-07",
      part: "strategy",
      title: "Stop fighting in the red ocean: the ERRC grid and strategy canvas",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 2 · Red oceans and blue oceans; Cirque du Soleil; The four actions framework (ERRC grid); The strategy canvas; Example: an ERRC grid for a residential roofer", who: "W. Chan Kim & Renée Mauborgne, Blue Ocean Strategy" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 2 · Recall 2.1–2.4; Drills D2.1, D2.2 + Answer Key", who: "Workbook" }
      ],
      idea: `Strategy is choosing where to compete and how you'll win. Most local businesses don't have one. They have a category ("we're a roofer") and a hope ("we do quality work").

W. Chan Kim and Renée Mauborgne studied over a hundred years of strategic moves for *Blue Ocean Strategy*. Most companies fight in **red oceans**: crowded markets where everyone offers roughly the same thing, competes on price and bleeds margin. The big winners created **blue oceans**: new market space where competition became irrelevant.

The engine is **value innovation**: a leap in value for the buyer while lowering or holding your own costs. You don't get there by being "a little better" at everything. You deliberately drop things the industry assumes are necessary and pour that effort into things nobody offers.

**Cirque du Soleil** didn't try to be a better circus. It *eliminated* star performers and animal acts, *reduced* the thrill-and-danger focus, *raised* the uniqueness of the venue, and *created* theater-style themes, artistic music and dance. Adults paid theater prices for something nobody else offered.

**The ERRC grid** turns that into a one-meeting tool. List the factors your client's industry competes on, then ask:
- **Eliminate:** which factors the industry takes for granted should go entirely?
- **Reduce:** which should drop well below the industry standard?
- **Raise:** which should rise well above it?
- **Create:** what should exist that the industry has never offered?

Eliminate and Reduce lower costs and friction. Raise and Create lift buyer value. Together they break the "premium versus affordable" trade-off.

**The strategy canvas** checks your work: list the competing factors across the bottom, score the typical competitor and your proposed offer on each (say 1 to 5), and plot both lines. A strong strategy shows **focus** (doesn't try to do everything), **divergence** (its line looks different from the pack) and a **compelling tagline** (you can say the difference in one line). If your line is higher than the competitor's on every factor, you haven't made a strategic choice; you've made an expensive wish.`,
      keyPoints: [
        "Red ocean = same offer, price war. Blue ocean = new space where competition is irrelevant.",
        "Value innovation: more buyer value at the same or lower cost.",
        "ERRC: Eliminate and Reduce cut cost and friction; Raise and Create add value.",
        "Good canvas: focus, divergence, and a one-line tagline.",
        "Every Raise and Create item must be something the business can actually deliver."
      ],
      why: "Every Sacramento trade Zach pitches is in a red ocean ('quality roofing, free estimates'). An ERRC session gives the client a real difference, and gives ZDub an ad angle competitors can't copy by Friday.",
      example: {
        title: "ERRC for a residential roofer (from the guide)",
        body: `- **Eliminate:** the in-home sales pitch for simple repairs (photo-based quotes instead).
- **Reduce:** jargon in estimates; time between the call and the quote.
- **Raise:** before-and-after photo documentation, cleanup standards, how fast the phone gets answered.
- **Create:** a 15-point drone inspection video emailed the same day, plus a written "no surprise invoice" promise.

Now it isn't "another quality roofer." It's **"the one that sends you a video of your own roof the same day."**`
      },
      table: { head: ["Box", "HVAC example (Workbook model)", "PMT prompts to explore with the owner"], rows: [
        ["Eliminate", "Free-estimate sales visit for simple replacements; 'call for pricing'", "Needing your own bike or gear (bike and helmet are provided)"],
        ["Reduce", "Jargon; wait for a visit window; upsell pressure", "Jargon; confusion about the DMV/endorsement steps"],
        ["Raise", "Phone answer speed; cleanliness; photo documentation", "Reassurance for first-timers; step-by-step first hour"],
        ["Create", "Two-hour text-back with a flat price from photos", "A clear 'what happens after class' path (only if PMT can deliver it)"]
      ] },
      practice: [
        {
          prompt: "Drill D2.1: Pick PMT, an HVAC company or a roofer. List the factors the industry competes on, then fill at least two items per box. Finish with one line in the style of 'the one that sends you a video of your own roof the same day.'",
          fields: ["Factors the industry competes on", "Eliminate (2+)", "Reduce (2+)", "Raise (2+)", "Create (2+)", "The one-line difference"],
          rubric: ["Eliminate/Reduce items genuinely cut cost or friction", "Raise/Create items are things the business can actually deliver", "The one-liner comes from the biggest Raise/Create jump", "A customer could repeat the one-liner to a friend"],
          model: "HVAC one-liner: 'The AC company that texts you a flat price before anyone shows up.'"
        },
        {
          prompt: "Drill D2.2: Score six competing factors 1–5 for the typical competitor and your proposed offer. Then answer the three canvas questions.",
          fields: ["Factor: competitor score / your score (six lines)", "Focus? (where you deliberately went low)", "Divergence? (where your line breaks away)", "Tagline in one line"],
          rubric: ["Your line is LOW on at least one factor (the sacrifice)", "Your line is very high on one or two factors customers care about", "Tagline comes straight from the highest jump"]
        }
      ],
      today: { task: "Run a 20-minute ERRC session for PMT (with the owner if you can, or on your own from what you know). Write the grid and one one-line difference. Flag any Raise/Create item that needs the owner's agreement before it can go in an ad.", output: "PMT ERRC grid + one-line difference", minutes: 25, suggested: false },
      check: [
        { q: "What is value innovation?", a: "A leap in value for buyers while lowering or holding your own costs. It breaks the premium-versus-affordable trade-off." },
        { q: "In the ERRC grid, which two actions mainly lower costs and remove friction?", a: "Eliminate and Reduce. Raise and Create add buyer value." },
        { q: "What three qualities does a strong strategy show on a canvas?", a: "Focus, divergence, and a compelling one-line tagline." }
      ]
    },
    {
      id: "fnd-08",
      part: "strategy",
      title: "Find demand nobody's chasing: the six paths and the noncustomers",
      minutes: 10,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 2 · Where blue oceans hide: the six paths (+ noncustomers)", who: "W. Chan Kim & Renée Mauborgne, Blue Ocean Strategy" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 2 · Recall 2.6, 2.13 + Answer Key", who: "Workbook" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 · Persona 1: The nervous first-timer (situations and objections)", who: "ZDub research playbook" }
      ],
      idea: `Kim and Mauborgne describe six places to look for new market space. Use each as a prompt in a strategy session:

1. **Alternative industries.** What else do customers use to solve the same job? A beginner rider's alternatives aren't just other schools: a friend teaching them in a parking lot, YouTube, or giving up.
2. **Strategic groups.** Can you combine the best of the "premium" group and the "budget" group?
3. **The chain of buyers.** Who influences or pays, besides the user? A spouse worried about safety, a parent, an employer.
4. **Complementary products and services.** What happens before and after your service? For PMT: gear advice, the license appointment, the first group ride.
5. **Functional versus emotional appeal.** If the industry sells on features, can you win on emotion, or the reverse?
6. **Trends over time.** Which irreversible trends can you shape your offer around?

They also point to **noncustomers**, where the biggest new demand usually sits, in three tiers:
- People **about to leave** the market.
- People who've **actively rejected** it.
- People the industry has **never thought about**.

PMT has a live example of path 3. The Andromeda playbook's first-timer persona includes the situation "Family keeps saying motorcycles are dangerous." That family member is in the chain of buyers. An ad that reassures the worried spouse ("here's exactly how the first class works, on a closed range, at walking speed") opens demand competitors ignore. Gift buyers are another chain-of-buyers angle: the person paying isn't the person riding.

For trades, the same paths work: a roofer's alternative is "wait until it leaks"; an HVAC company's complementary service is the energy-rebate paperwork nobody helps with.`,
      keyPoints: [
        "Six paths: alternative industries, strategic groups, chain of buyers, complements, functional vs. emotional, trends.",
        "Noncustomers: about to leave, actively rejected, never considered.",
        "The person who pays or worries (spouse, parent, gift buyer) is a market of its own.",
        "Competitors usually ignore the 'before and after' of their service. That's open space.",
        "Every path is a prompt for a new ad angle, not just a strategy idea."
      ],
      why: "Andromeda rewards genuinely different creative angles. The six paths are a reliable machine for producing different angles (spouse, gift buyer, 'tried YouTube and gave up') instead of ten versions of the same ad.",
      example: {
        title: "PMT: the six paths as ad angles",
        body: `- Alternative industries: "Learning from a buddy in a parking lot? Here's what usually goes wrong."
- Strategic groups: private-lesson attention in a group-class format (only if true).
- Chain of buyers: an ad for the gift buyer ("the gift they keep talking about").
- Complements: "what to do the week after class" content: gear, the DMV step, the first ride.
- Emotional: freedom and pride instead of "learn the controls."
- Trends: commuters tired of Sacramento traffic and gas prices.`
      },
      practice: [
        {
          prompt: "For PMT, write one idea per path and one noncustomer group with the message you'd send them.",
          fields: ["1. Alternative industries", "2. Strategic groups", "3. Chain of buyers", "4. Complementary products/services", "5. Functional vs. emotional", "6. Trends over time", "Noncustomer group + message"],
          rubric: ["Each idea is specific to PMT, not generic", "The chain-of-buyers idea names a real influencer or payer", "The noncustomer message speaks to why they left, rejected or never considered riding", "No claims PMT can't back up"]
        }
      ],
      today: { task: "Write one PMT ad concept aimed at the chain of buyers (the worried spouse/parent or a gift buyer): hook, 2-line body, next step, and the format. Add it to the PMT test list as a new angle.", output: "One chain-of-buyers ad concept in PMT's test list", minutes: 20, suggested: false },
      check: [
        { q: "A new rider's spouse worries about safety and has a say in signing up. Which path is that?", a: "The chain of buyers: who influences or pays besides the user. Reassuring the spouse can open demand competitors ignore." },
        { q: "Name the six paths and the three groups of noncustomers.", a: "Paths: alternative industries, strategic groups, chain of buyers, complementary products and services, functional vs. emotional appeal, trends over time. Noncustomers: people about to leave the market, people who've actively rejected it, people the industry never considered." }
      ]
    },
    {
      id: "fnd-09",
      part: "strategy",
      title: "Positioning is a sacrifice: own one idea in the customer's mind",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 2 · Positioning: owning a place in the mind; Harry Beckwith; Seth Godin: the positioning map; Roy Williams: the Sword in the Stone; Key Idea", who: "Harry Beckwith (Selling the Invisible), Seth Godin (This Is Marketing), Roy H. Williams (Magical Worlds; Making Ads Work)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 2 · Recall 2.5, 2.10, 2.12; Drill D2.3; Client Lab L2 step 1 + Answer Key", who: "Workbook" }
      ],
      idea: `A position is not your slogan. It's **the one idea people associate with your name** when they think about your category. To own it, you must stand for something specific, which means you must stop standing for everything else. "Who is this NOT for?" matters as much as "Who is it for?"

**Harry Beckwith (services).** Services are invisible: the buyer can't see, touch or test them first, so **their real worry is making a bad choice.** Service marketing is mostly about reducing perceived risk and building trust:
- **Narrow your focus.** The specialist beats the generalist in the prospect's mind.
- **Say one thing.** People remember one clear idea, not your list of services.
- **Make the invisible visible.** Clean trucks, a sharp proposal, photos, stories, a guarantee are the proof of quality they can't see yet.
- **Your service is your marketing.** Fix the service first, then advertise it.

**Seth Godin (the positioning map).** Pick two axes your smallest viable market truly cares about (not "quality" and "price" by default), for example *beginner-friendly ↔ performance-focused* and *quick and cheap ↔ thorough and personal*. Plot the existing options. Look for the **empty corner at the extremes**, where you can be the obvious choice for people with that worldview, so they say, "People like us choose this." The middle wins nobody.

**Roy Williams (the Sword in the Stone).** His process starts with an **Uncovery**: digging for the story that's uniquely the client's own. The Sword in the Stone is the focal idea everything revolves around and the standard the company will never compromise. "Tell your best story, not your whole story." His strategic question: **what will you be known for?** Category dominance comes from focus plus commitment over years. And when a giant owns a market and is doing a great job, sometimes the smart move is to **pick another mountain**: a different segment, town or offer.`,
      keyPoints: [
        "Position = the one idea attached to your name in your category.",
        "Service buyers fear a bad choice: reduce risk and make the invisible visible (Beckwith).",
        "Find the empty extreme corner on two axes your market cares about (Godin).",
        "Find the Sword in the Stone; tell your best story, not your whole story (Williams).",
        "Say who it's NOT for. If a giant owns the hill, pick another mountain."
      ],
      why: "Local trades all claim the same three things. A position gives every ad, page and sales call one idea to repeat, and repetition of one idea is what builds the brand (Part 4).",
      example: {
        title: "Positioning map for riding schools (Workbook model axes)",
        body: `Axes: **beginner-friendly ↔ performance-focused** and **quick and cheap ↔ thorough and personal.** Most schools cluster in the middle. The empty corner might be *extremely beginner-friendly + thorough and personal*: "People like us (nervous, never ridden) choose PMT because they start from zero and nobody rushes them." That's only a position if it's true inside the door. If it is, every ad repeats it.

Uncovery questions to ask PMT's owner: What do you do that you'd never compromise on? What do students thank you for that surprises you? What story do you tell about why you started?`
      },
      practice: [
        {
          prompt: "Drill D2.3: Build a positioning map for one client's category.",
          fields: ["Axis 1 (two extremes)", "Axis 2 (two extremes)", "Where 5 real competitors sit", "The empty corner", "'People like us choose ___ because ___.'"],
          rubric: ["Axes reflect a real worldview, not 'quality' and 'price'", "The empty corner is somewhere real buyers want to be, not just empty", "The 'people like us' line sounds like a customer, not an ad", "The position is true inside the door today"]
        },
        {
          prompt: "Write your Uncovery: three questions for the owner, your best guess at the Sword in the Stone, and who it's NOT for.",
          fields: ["Uncovery question 1", "Uncovery question 2", "Uncovery question 3", "Sword in the Stone (the never-compromise idea)", "Who this is NOT for"],
          rubric: ["Questions dig for stories, not features", "The Sword is one idea, not a list", "'Not for' is a real sacrifice the owner might push back on"]
        }
      ],
      today: { task: "Send PMT's owner the three Uncovery questions (or ask them on your next call) and draft the 'What will PMT be known for?' sentence from the answers.", output: "Uncovery answers + one 'known for' sentence", minutes: 20, suggested: false },
      check: [
        { q: "According to Beckwith, what is the real worry of someone buying a service?", a: "Making a bad choice. So service marketing is mostly about reducing perceived risk and making quality visible." },
        { q: "Where should you aim on Godin's positioning map?", a: "An empty corner at the extremes of two axes your market cares about, so you're the obvious choice for a specific worldview." },
        { q: "Why is positioning a sacrifice?", a: "To own one idea in someone's mind you have to stop standing for everything else. Saying who it's not for makes the position sharper and more believable to the people it is for." }
      ]
    },
    {
      id: "fnd-10",
      part: "strategy",
      title: "Pass the 'why you?' test, then write the positioning statement",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 2 · Allan Dib: the USP test; Alex Hormozi: pick a market that can win; Writing the positioning statement (+ examples, Common Mistake)", who: "Allan Dib (The 1-Page Marketing Plan, Lean Marketing), Alex Hormozi ($100M Offers)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 2 · Recall 2.7, 2.8, 2.11, 2.14; Drills D2.4, D2.6; Client Lab L2 + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["Offers tab: outcome offer / one-sentence offer", "Getting Clients tab (choosing ZDub's niche)"],
      idea: `Allan Dib asks the question every prospect silently asks: **"Why should I buy from you rather than any other option, including doing nothing?"** If the answer is "quality, service and fair prices," you don't have a USP. Every competitor claims those, and when everyone claims the same thing the customer defaults to price. **If you look like a commodity, you'll be priced like one.**

**Niche to get specific.** Dib's *Lean Marketing* lists seven ways to niche, and you can stack them: **location, demographics, shared values, industry, desire, problem, trend.** "Motorcycle training" is a category. "Weekend beginner classes near Woodland for adults 30+ who've never ridden and are nervous about it" is a position.

**Check the market can win.** Hormozi argues the market you pick matters more than your offer or persuasion skill. He looks for four things:
1. **Massive pain:** a must-have, not a nice-to-have.
2. **Purchasing power:** they can afford to pay well.
3. **Easy to target:** you can find and reach them.
4. **Growing:** expanding, not shrinking.
And the narrower the market, the more you can charge, because a specialist's solution is worth more to that buyer.

**Write the positioning statement.** It isn't ad copy. It's the internal compass you check every ad against:

> For [specific customer] who [want or problem], [brand] is the [frame of reference] that [single most important benefit] because [reason to believe]. Unlike [the main alternative], we [key difference].

Test it two ways: does it pass Dib's "why you?" question, and is it true in world #2 today? If the "because" clause says "we care" or "we're experienced," replace it with evidence: a process, a guarantee the business can honor, a number, a credential. Treating positioning as a tagline exercise is the classic mistake: advertise "fastest response in town" with two-day callbacks and you've bought a reputation for broken promises.`,
      keyPoints: [
        "Dib's test: why you rather than anyone else, including doing nothing?",
        "'Quality, service, fair prices' is not a USP; commodities get priced like commodities.",
        "Seven ways to niche (stackable): location, demographics, values, industry, desire, problem, trend.",
        "Hormozi's market check: massive pain, purchasing power, easy to target, growing.",
        "Positioning statement = internal compass. The 'because' must be evidence, and it must be true inside the door."
      ],
      why: "A written positioning statement is what keeps 10 different ads, a landing page and a sales script saying the same thing. It's also the first deliverable that makes a client feel ZDub understands their business better than the last agency did.",
      example: {
        title: "Hypothetical trades client (from the guide)",
        body: `"For homeowners in Roseville and Citrus Heights who dread getting ripped off by contractors, Oakline Electric is the residential electrician that gives you a flat, written price before any work starts, because every quote comes with photos and a line-item breakdown. Unlike big-box installers and 'call for pricing' outfits, we never charge more than the quote, guaranteed."

Note the parts: a specific customer, a fear in their words, one benefit, a concrete reason to believe, a named alternative. (The guarantee only goes in if the business will honor it. For PMT, the copy rules ban "guaranteed" in ads entirely.)`
      },
      practice: [
        {
          prompt: "Drill D2.4: Niche stacking. Write five versions of one client's position, each narrower than the last. Label which niche dimension you added on each line.",
          fields: ["1. The category", "2. + one dimension", "3. + one dimension", "4. + one dimension", "5. + one dimension"],
          rubric: ["Each line adds exactly one of Dib's seven dimensions", "Each step makes the right person feel more 'that's me'", "Line 5 still describes a market big enough to fill the business"],
          model: "1) Motorcycle training. 2) Motorcycle training near Woodland (location). 3) Beginner motorcycle training near Woodland (problem: never ridden). 4) Weekend beginner classes near Woodland for adults 30+ (demographics). 5) Weekend beginner classes near Woodland for adults 30+ who are nervous about starting (desire: confidence, not speed)."
        },
        {
          prompt: "Drill D2.6: Write positioning statements for PMT and for ZDub, then run both tests on each.",
          fields: ["PMT positioning statement", "ZDub positioning statement", "Does each pass 'why you rather than anyone, including doing nothing?'", "Is each true inside the door today? What would have to change?"],
          rubric: ["Specific customer and a problem in their words", "One benefit, not three", "'Because' is evidence (process, number, credential), not 'we care'", "Names a real alternative", "True today"]
        }
      ],
      today: { task: "Client Lab L2: assemble a one-page positioning brief for PMT: Uncovery answers, ERRC grid, Hormozi market check (score pain, purchasing power, targeting, growth), who it's for and NOT for, the positioning statement, and one 'known for' sentence.", output: "PMT one-page positioning brief", minutes: 45, suggested: false },
      check: [
        { q: "A client's USP is 'quality, service, and fair prices.' What's the problem?", a: "Every competitor claims the same thing, so customers default to comparing price. If you look like a commodity, you'll be priced like one." },
        { q: "Name Hormozi's four criteria for a good market. Which of these is NOT one: few competitors, easy to target, purchasing power, massive pain?", a: "Massive pain, purchasing power, easy to target, growing. 'Few competitors' is not on the list." },
        { q: "Write the positioning statement template.", a: "For [specific customer] who [want or problem], [brand] is the [frame of reference] that [single most important benefit] because [reason to believe]. Unlike [the main alternative], we [key difference]." },
        { q: "List Dib's seven ways to niche.", a: "Location, demographics, shared values, industry, desire, problem, and trend. They can be stacked." }
      ]
    },
    {
      id: "fnd-11",
      part: "strategy",
      title: "Borrow the fix from a business with the same-shaped problem",
      minutes: 9,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 2 · Innovation by borrowing: Business Problem Topology; ZDub Application: the perishable seat", who: "Roy H. Williams, Magical Worlds of the Wizard of Ads" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 2 · Recall 2.9; Drill D2.5 + Answer Key", who: "Workbook" }
      ],
      idea: `Roy Williams' method for strategic innovation is called **Business Problem Topology**:

1. **Define the "shape" of your problem:** its defining characteristics, stripped of industry details.
2. **Find a parallel but unrelated business** with a problem of the same shape.
3. **Study how they solved it, and adapt the solution.**

Henry Ford didn't invent the assembly line. He borrowed it from Chicago meatpackers, who moved carcasses past butchers on an overhead rail, and ran it in reverse. A Wizard Academy student thought radio stations had a unique problem: unsold ad time vanishes at midnight. Someone pointed out that hotels, airlines and theaters have the exact same problem and solved it with yield pricing.

**The perishable seat.** A motorcycle class has the same shape as an airline seat: once the class starts, an empty spot is worth zero. What do airlines, hotels and concert venues do? Early-bird pricing, waitlists, last-minute fill offers, and demand-based scheduling. A Meta plan for a training school can borrow all four:
- Ads that fill **specific dates**, not "sign up sometime."
- A **waitlist campaign** that collects people who want a class in their area.
- An **"open seats this weekend"** ad that runs only when seats are actually open (so the urgency is real).
- Scheduling more sessions where the waitlist shows demand.

For PMT, keep the copy rules in mind: borrow the *structure* (dates, waitlists, real scarcity), not "discount" language.`,
      keyPoints: [
        "Three steps: define the problem's shape, find an unrelated business with the same shape, adapt its fix.",
        "Ford borrowed the assembly line from meatpackers; radio borrowed yield pricing from airlines and hotels.",
        "A class seat is perishable inventory, like an airline seat.",
        "Borrowed plays for PMT: date-specific ads, a waitlist, real 'open seats' ads, demand-based scheduling.",
        "Real scarcity only: run 'open seats' ads when seats are actually open."
      ],
      why: "Most of a client's 'unique' problems (slow seasons, no-shows, empty Tuesdays) have been solved elsewhere. Borrowing a proven fix makes Zach look like a strategist and produces offers that aren't just discounts.",
      example: {
        title: "Workbook model answers (Drill D2.5)",
        body: `- **HVAC slammed in summer, dead in spring.** Shape: seasonal peaks. Parallel: ski resorts and tax preparers sell season passes and early-bird plans. Borrowed: a spring tune-up membership sold before the heat, with priority summer service.
- **Restaurant empty on Tuesdays.** Shape: fixed capacity, uneven demand by day. Parallel: movie theaters (discount Tuesdays), golf courses (twilight rates). Borrowed: a Tuesday-only experience (tasting menu, trivia night) rather than a plain discount.
- **Training school with 15% no-shows.** Shape: reserved capacity lost to no-shows. Parallel: airlines (overbooking, nonrefundable fares), dentists (reminder texts, deposits). Borrowed: a deposit plus a reminder sequence, and a waitlist that fills dropped seats.`
      },
      practice: [
        {
          prompt: "Drill D2.5 (your own versions): pick three real problems from PMT or Sacramento prospects. For each, write the shape, the parallel business, and the borrowed fix.",
          fields: ["Problem 1: shape → parallel → borrowed fix", "Problem 2: shape → parallel → borrowed fix", "Problem 3: shape → parallel → borrowed fix"],
          rubric: ["The 'shape' is described without industry words", "The parallel business is genuinely unrelated", "The borrowed fix is something the client can run this month", "No fake urgency or discount-only fixes"]
        }
      ],
      today: { task: "Write two PMT ad drafts borrowed from airlines: (1) a waitlist ad ('Want a class closer to you? Get on the list') and (2) an 'open seats this weekend' ad to run only when seats are truly open. Follow PMT's copy rules.", output: "Two PMT ad drafts in the ad doc, labeled 'waitlist' and 'open seats'", minutes: 25, suggested: false },
      check: [
        { q: "Using Business Problem Topology, an empty seat in a motorcycle class is most like what?", a: "An unsold airline seat: perishable inventory worth nothing once it departs. So airline/hotel fixes (early-bird pricing, waitlists, last-minute fill, demand-based scheduling) can be borrowed." },
        { q: "What are the three steps of Business Problem Topology?", a: "Define the shape of your problem, find a parallel but unrelated business with the same shape, study and adapt its solution." }
      ]
    },
    {
      id: "fnd-12",
      part: "customer",
      title: "Sell the desire that's already there, not the product",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 3 · You can't create desire. You can only channel it.; The eight hard-wired wants; Example: what is a motorcycle class really selling?", who: "Eugene Schwartz (Breakthrough Advertising), Drew Eric Whitman (Ca$hvertising), Allan Dib (Lean Marketing)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 3 · Recall 3.1–3.4, 3.10; Drill D3.1 + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["Copywriting tab: five awareness levels"],
      idea: `The most important idea in *Breakthrough Advertising* comes on its first pages. Eugene Schwartz argues advertising **cannot create desire.** It can only take a hope, dream, fear or desire that already exists in many people and focus it onto a particular product. Your job isn't to manufacture want; it's to find the strongest want already in the market and show how the product fulfills it.

Schwartz calls this **mass desire**, and it comes from two sources:
- **Permanent forces:** wants rooted in human nature that never go away: health, attractiveness, safety, status, love, security, freedom.
- **Forces of change:** new desires created by changing conditions: new technology, new fears, new fashions, new economics (think EV chargers and home batteries as outage worries spread).

He judges a desire by **intensity** (how badly), **staying power** (lasts or fades) and **scope** (how many share it). Pick the most powerful desire the product can *honestly* satisfy and put it at the center of the message.

**A checklist of desires.** Drew Eric Whitman's *Ca$hvertising* lists the **Life-Force 8**, wants built into us biologically:
1. Survival, enjoyment of life, life extension
2. Enjoyment of food and drink
3. Freedom from fear, pain and danger
4. Sexual companionship
5. Comfortable living conditions
6. To be superior, win, keep up with the Joneses
7. Care and protection of loved ones
8. Social approval

He also lists nine *learned* wants (to be informed, curiosity, cleanliness, efficiency, convenience, dependability/quality, beauty and style, economy/profit, bargains). Ads that tap a Life-Force 8 desire beat ads that only tap a learned want: "Save 10%" is weaker than "keep your family safe." The strongest ads link the two: a learned feature (fast scheduling) connected to a core desire (peace of mind that the leak won't wreck the ceiling tonight).

Allan Dib boils it down to **seven core commodities** people ultimately buy: **money, time, sex, status, safety, leisure, freedom.** Whatever your client sells is a vehicle for one or more.`,
      keyPoints: [
        "Ads channel existing desire; they can't create it (Schwartz).",
        "Mass desire comes from permanent forces and forces of change; judge it by intensity, staying power, scope.",
        "Life-Force 8 desires beat learned wants. Link a feature to a core desire.",
        "Dib's seven commodities: money, time, sex, status, safety, leisure, freedom.",
        "Ask: what do these people already desperately want that this product delivers?"
      ],
      why: "Feature-led trade ads ('licensed and insured, free estimates') are everywhere. Desire-led ads stand out in the feed, and Andromeda needs different angles: each core desire is a genuinely different concept to test.",
      example: {
        title: "What is a motorcycle class really selling? (from the guide)",
        before: "Learn to ride in one weekend.",
        after: "Ride away from your first class confident, not terrified.",
        body: "On the surface PMT sells a skills course. Underneath: **freedom** (the open road), **safety and freedom from fear** (not crashing, not dropping the bike in front of people), **social approval and status** (being 'a rider'), and **care of loved ones** (the spouse who worries). The first headline sells the course; the second sells the desire."
      },
      table: { head: ["Life-Force 8 desire", "Sacramento-trade example headline angle"], rows: [
        ["Freedom from fear, pain, danger", "Electrician: 'Breaker keeps tripping? Find out tonight if it's a fire risk.'"],
        ["Comfortable living conditions", "HVAC: 'Cool house by dinner, even when it's 108 in Sac.'"],
        ["Care and protection of loved ones", "Roofer: 'Know your roof will hold before the first big storm.'"],
        ["To be superior / keep up", "Landscaper: 'The yard the whole street asks about.'"],
        ["Social approval", "PMT: 'Finally ride with your friends instead of watching them leave.'"]
      ] },
      practice: [
        {
          prompt: "Drill D3.1: Desire ladder. For PMT, an EV charger install and a roof replacement, write the surface product, the desires underneath, and two headlines.",
          fields: ["PMT: surface / 2+ Life-Force 8 desires / 2+ core commodities", "PMT: service headline vs. desire headline", "EV charger: surface / desires / commodities", "EV charger: service headline vs. desire headline", "Roof replacement: surface / desires / commodities", "Roof: service headline vs. desire headline"],
          rubric: ["At least two Life-Force 8 desires and two core commodities per product", "Desire headline names the feeling or outcome, not the feature", "Claims are honest (no promise of passing for PMT)", "Feature, where used, is linked to a core desire"],
          model: "EV charger: Surface: a 240V outlet and a wall charger. Underneath: comfortable living, freedom from fear (fire, a botched install), status (keeping up with EV neighbors); commodities: time, money. Service: 'Level 2 EV charger installs in Placer County.' Desire: 'Wake up to a full battery every morning, and never wonder if the wiring is safe.'"
        }
      ],
      today: { task: "Write 5 desire-led headlines for PMT, each tagged with the Life-Force 8 desire it taps. Pick the two strongest for the next creative test and add them to PMT's ad doc.", output: "5 tagged PMT headlines, 2 flagged for testing", minutes: 20, suggested: false },
      check: [
        { q: "According to Schwartz, what is advertising's job with desire?", a: "To channel a desire that already exists onto a particular product. Copy can't create desire." },
        { q: "What three measures does Schwartz use to judge a mass desire?", a: "Intensity (how badly people want it), staying power (whether it lasts), and scope (how many people share it)." },
        { q: "Which taps a Life-Force 8 desire: 'Save 10% on generator installs' or 'Keep your family safe if the power goes out tonight'?", a: "The second: care and protection of loved ones. Bargains and convenience are learned wants and pull less hard on their own." },
        { q: "Name Dib's seven core commodities.", a: "Money, time, sex, status, safety, leisure, freedom." }
      ]
    },
    {
      id: "fnd-13",
      part: "customer",
      title: "People buy who they want to become",
      minutes: 9,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 3 · Identity: people buy who they want to become", who: "Seth Godin (This Is Marketing), Roy H. Williams (The Wizard of Ads)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 3 · Recall 3.5 + Answer Key", who: "Workbook" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 · Persona 1 and Persona 2 motivations", who: "ZDub research playbook" }
      ],
      alsoIn: ["Persuasion tab: StoryBrand / customer as hero"],
      idea: `Seth Godin's version of customer research focuses on worldview and status. People act to protect and improve how they see themselves and how their group sees them. His shorthand:

> "People like us do things like this."

Most buying decisions are really **identity decisions.** Am I the kind of person who rides? Who hires the best? Who does it myself?

Godin describes two ways people seek status:
- **Affiliation:** "Am I part of the group? Do they accept me?" These buyers want belonging and approval.
- **Dominance:** "Am I ahead? Am I winning?" These buyers want rank and advantage.

The same product can be sold to either motive. A contractor's premium service can be "the one your neighbors trust" (affiliation) or "the best on the street" (dominance). Know which one your market is chasing.

Roy Williams makes the same point with literature in *The Wizard of Ads*: Don Quixote and Walter Mitty. The world sees a tired old man and a henpecked husband; inside, they're a chivalrous knight and a fearless hero. **Sell to the person inside.** Most purchases are acts of self-expression, and the strongest brands help customers define who they are.

PMT's own personas show both motives. Affiliation: "My buddy just got a bike and I want to ride with him," and "Keep up on group rides without holding back." Dominance-leaning: "I want to master the machine, not just survive on it." Same school, two identity messages, two different ads.`,
      keyPoints: [
        "'People like us do things like this': most purchases are identity decisions (Godin).",
        "Affiliation = belonging ('am I part of the group?'). Dominance = rank ('am I ahead?').",
        "The same service can be sold to either motive; know which your market chases.",
        "Sell to the hero inside, not the person the world sees (Williams' Quixote and Mitty).",
        "Different identity motives = genuinely different ad concepts."
      ],
      why: "Identity hooks are what make local content feel like it's about the viewer. They also give PMT a second persona (the licensed-but-uneasy rider) whose identity message leads to its highest-value classes.",
      example: {
        title: "Two identity versions of the same ad",
        body: `**Sacramento HVAC, affiliation:** "The AC company half of East Sac already has on speed dial."
**Sacramento HVAC, dominance:** "The coolest house on the block, literally."

**PMT, affiliation:** "Stop waving goodbye when your friends ride out on Saturday. Ride with them."
**PMT, dominance:** "Licensed isn't the same as in control. Learn to own every corner." (Andromeda's Persona 2 angle.)`
      },
      practice: [
        {
          prompt: "For PMT and one Sacramento trade, write an affiliation and a dominance version of the same headline, plus the 'people like us' sentence for each business.",
          fields: ["PMT affiliation headline", "PMT dominance headline", "PMT: 'People like us...'", "Trade affiliation headline", "Trade dominance headline", "Trade: 'People like us...'"],
          rubric: ["Affiliation version is about belonging/approval", "Dominance version is about rank/advantage", "The 'people like us' line sounds like something a customer would say", "No claims the business can't back up"]
        }
      ],
      today: { task: "Write 3 identity-led hooks for PMT organic Reels (one affiliation, one dominance, one 'hero inside'). Add them to the content ideas list for the next shoot.", output: "3 identity hooks in PMT's content list", minutes: 15, suggested: false },
      check: [
        { q: "Godin's two status motives: which one does 'the one your neighbors trust' appeal to?", a: "Affiliation: belonging and acceptance. 'The best on the street' would be dominance." },
        { q: "What's the lesson of Don Quixote and Walter Mitty for advertisers?", a: "Sell to the person inside. Purchases are acts of self-expression, so speak to who the customer wants to be, not who the world sees." }
      ]
    },
    {
      id: "fnd-14",
      part: "customer",
      title: "Transactional or relational? Know which shopper you're talking to",
      minutes: 10,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 3 · Two shopping modes: transactional and relational (+ ZDub Application; loyalty groups)", who: "Roy H. Williams, Making Ads Work and The Wizard of Ads" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 3 · Recall 3.6, 3.7, 3.12; Drill D3.3 + Answer Key", who: "Workbook" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 8 · Exercise 8C: Transactional or relational?", who: "ZDub workbook (Roy H. Williams)" }
      ],
      alsoIn: ["Offers tab: discounting & self-confession", "Social Workbook Mod 8"],
      idea: `Roy Williams argues every person has two shopping modes, and which one they're in **depends on the category**:

The **transactional** shopper is focused on today's purchase, fears paying too much, enjoys comparing and negotiating, does their own research, doesn't count their time as a cost, and will switch for a better price.

The **relational** shopper sees this as one of many future purchases, fears making a poor choice, dislikes the shopping process, wants an expert they can trust, counts time as part of the price, and becomes a loyal repeat customer.

In *Making Ads Work*, Williams illustrates it with ten shoppers: five transactional, five relational. The transactional shoppers made most of the store visits (they shop around) but produced far less of the profit. The relational shoppers walked into one store, bought, and accounted for most of the gross profit. His claim: **most local advertising (sales, price, events) is aimed at the transactional shopper, while the more profitable relational shopper is ignored.**

**ZDub application:** for most trades and service clients, relational buyers are the profit. They want to know: Are you trustworthy? Are you an expert? Will this be easy? Ads aimed at them lead with **competence, process, proof and personality**, not discounts. Save price-driven offers for specific, limited uses so you don't train the market to wait for a sale.

Williams also passes along three **loyalty groups**:
- **Non-switchable:** ignore them.
- **Switchable:** win them by saying the right thing repeatedly and waiting for their need.
- **Switchable for price alone:** don't chase them. They'll leave you for the same reason they came.

Remember the mode belongs to the category, not the person: the same homeowner is transactional about tires and relational about the electrician working inside their walls.`,
      keyPoints: [
        "Transactional: fears overpaying, compares, switches for price. Relational: fears a poor choice, wants a trusted expert, stays loyal.",
        "Transactional shoppers make most of the visits; relational shoppers make most of the profit.",
        "Most local ads chase the transactional shopper. Court the relational one with competence, process, proof, personality.",
        "Loyalty groups: ignore non-switchable, win switchable with repetition, don't chase price-only switchers.",
        "The mode depends on the category, not the person."
      ],
      why: "PMT and most trades are relational categories. If ZDub's ads lead with price, they attract the least profitable customers and train the market to wait for deals.",
      example: {
        title: "Workbook Drill D3.3 model answers",
        body: `- **Tire replacement:** mostly transactional. Lead with price, availability, speed.
- **Family dentist:** relational. Lead with trust, gentleness, convenience.
- **Beginner motorcycle course:** mostly relational. Lead with safety, patient instruction, and proof that nervous beginners succeed.
- **Pizza on Friday night:** transactional for many, but a favorite pizzeria earns relational loyalty. Lead with craving and habit.
- **Whole-home electrical rewire:** strongly relational. Lead with expertise, process, proof, no-surprise pricing.`
      },
      practice: [
        {
          prompt: "Social Workbook Exercise 8C for PMT (or your current prospect).",
          fields: ["Which shopper does the client mostly attract? Evidence?", "One identity/expertise post for relational shoppers", "One offer post for transactional shoppers (limited, specific use)"],
          rubric: ["Answer backed by evidence (reviews, call questions, what people ask first)", "Relational post leads with competence, process, proof or personality", "Transactional post is limited and specific, not a standing discount", "PMT copy rules followed (no 'discount,' 'cheap')"]
        },
        {
          prompt: "Drill D3.3: decide the mode for five Sacramento categories you might pitch and say how the ad should change.",
          fields: ["Category 1 → mode → ad leads with", "Category 2 → mode → ad leads with", "Category 3 → mode → ad leads with", "Category 4 → mode → ad leads with", "Category 5 → mode → ad leads with"],
          rubric: ["Each mode choice is justified", "Relational ads lead with trust, expertise, ease", "Transactional ads lead with price, availability, speed"]
        }
      ],
      today: { task: "Do Exercise 8C for PMT and write both posts in full (caption + visual idea). Schedule the relational one first.", output: "One relational post + one limited offer post for PMT", minutes: 25, suggested: false },
      check: [
        { q: "Which trait belongs to the relational shopper: fears paying too much, or fears making a poor choice and wants an expert?", a: "Fears making a poor choice and wants an expert they can trust. Fearing overpayment is transactional." },
        { q: "In Williams' ten-shopper example, what was true of the transactional shoppers?", a: "They made most of the store visits but produced much less of the profit." },
        { q: "Name Williams' three loyalty groups and what to do about each.", a: "Non-switchable: ignore them. Switchable: win them by saying the right thing repeatedly and waiting for their need. Switchable for price alone: don't chase them; they'll leave for the same reason they came." }
      ]
    },
    {
      id: "fnd-15",
      part: "customer",
      title: "Research a local market in one afternoon and build the VOC bank",
      minutes: 13,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 3 · What people say versus what they do; How to research a local market in one afternoon; Output: the Voice-of-Customer bank", who: "Martin Lindstrom (Buyology), Roy H. Williams (Magical Worlds), Eugene Schwartz, Alex Hormozi, King Kong Meta Ads Playbook" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 3 · Recall 3.8, 3.9, 3.11; Drills D3.2, D3.4; Swipe & Study + Answer Key", who: "Workbook" }
      ],
      idea: `Schwartz said, in effect, that copy isn't written; it's **assembled** from what you've learned about the market. Copywriters who seem like geniuses simply know more about the buyer.

**First, be skeptical of what people say.** Martin Lindstrom scanned the brains of roughly two thousand volunteers for *Buyology* and kept finding that what people say about why they buy often doesn't match what their brains show (cigarette warning labels appeared to activate craving areas in smokers). Williams tells the New Coke story: taste tests said people preferred the new formula, but a drink carries a century of memory and identity, and the public revolted. **A survey measures what people believe they'd do, not what they'll do when the moment comes.** What customers say they want and what they truly want often differ: the diamond buyer asks about clarity grades but wants eyebrows to jump; the business owner asks for "advertising" but wants customers.

> Listen to what they say, but pay more attention to what they do and the exact words they use when they're emotional: in reviews, complaints, DMs and sales calls.

**The six-step afternoon:**
1. **Mine the reviews** of the client and its top three competitors. 5-star reviews show desires and delight (copy exact phrases). 1–3-star reviews show fears, objections and failures. Repeated words are the brand: if twelve reviews say "patient," that's the position.
2. **Interview five to ten customers.** Open questions, listen for emotion: what was going on when you started looking, what almost stopped you, what were you afraid of, what did you try before, what would you tell a friend? Zach's NEPQ habits apply here: ask about situation, problem, consequences and what they really want, then stay quiet.
3. **Ask the front line.** Whoever answers the phone knows the ten most common questions, objections, and reasons people don't book.
4. **Read comments and DMs:** local Facebook groups, Reddit, YouTube comments in the niche.
5. **Check search data:** Google autocomplete and "People also ask," the questions people type at 11 p.m.
6. **Build a native feed:** a fresh Instagram or TikTok account that follows the biggest creators in the niche and engages for 20 to 30 minutes, so the feed serves you what this audience watches.

**Output: the Voice-of-Customer bank**, one document with headings for desires, fears, objections, frustrations with alternatives, exact phrases, proof points and stories. When you're stuck writing, go back to the bank, not a blank page.`,
      keyPoints: [
        "Copy is assembled from research, not invented.",
        "Trust behavior and emotional language over surveys (New Coke, Buyology).",
        "Six steps: reviews, customer interviews, front line, comments/DMs, search data, native feed.",
        "5-star reviews = desires; 1–3-star reviews and front-line staff = fears and objections.",
        "Everything goes in one VOC bank, organized by desires, fears, objections, frustrations, phrases, proof, stories."
      ],
      why: "Every hook, ad and landing page Zach writes for PMT gets better and faster when it starts from customers' exact words. The VOC bank is also onboarding gold for any new trades client.",
      example: {
        title: "From a review to a hook",
        body: `A review line like "I was terrified, and by Sunday I was grinning" goes into the bank under *stories*. Changing as few words as possible, it becomes a hook: **"Terrified on Saturday. Grinning by Sunday."** Customers' own language usually beats a 'clever' line. (Use only real review text, with permission where you quote it in an ad.)`
      },
      practice: [
        {
          prompt: "Drill D3.4: Write the seven-question customer interview script you'll use with every client's customers.",
          fields: ["Q1 (trigger)", "Q2 (what they tried before)", "Q3 (what almost stopped them)", "Q4 (the fear)", "Q5 (why they picked this business)", "Q6 (what was different from expected)", "Q7 (what they'd tell a friend)"],
          rubric: ["Every question is open-ended", "Covers trigger, fear, alternative tried, and 'tell a friend'", "No leading questions", "You plan to record (with permission) to capture exact words"],
          model: "1) What was going on when you started looking for help with this? 2) What had you tried before? 3) What almost stopped you from booking? 4) What were you worried would happen? 5) What made you pick us over the others? 6) What was different from what you expected? 7) If a friend asked about us, what would you tell them?"
        },
        {
          prompt: "Drill D3.2: Mine at least 40 reviews (PMT + top three competing riding schools in the region).",
          fields: ["10 exact phrases of what people loved", "10 exact phrases of fears, frustrations or failures", "The 3 words/ideas that repeat most"],
          rubric: ["Exact quotes, not summaries ('he explained everything before he touched anything,' not 'good communication')", "Both positive and negative reviews mined", "Repeated words identified, with a note on whether it's the brand"]
        }
      ],
      today: { task: "Start PMT's VOC bank: mine 40 Google reviews across PMT and three competitors, then add 10 entries from Google autocomplete / 'People also ask' for 'motorcycle class Sacramento' and similar searches. Log the best phrases in the VOC tracker.", output: "PMT VOC bank doc with 30+ entries", minutes: 45, suggested: false },
      check: [
        { q: "What does the New Coke story teach about research?", a: "A survey measures what people believe they'd do, not what they'll do when the moment comes. Trust behavior and emotional language over stated preferences." },
        { q: "Where do you look for a market's fears and objections?", a: "1–3-star reviews and front-line staff. 5-star reviews are best for desires and delight." },
        { q: "List the six research steps and the document they produce.", a: "Mine the reviews, interview 5–10 customers, ask the front line, read comments and DMs, check search data, build a native feed. Output: the Voice-of-Customer (VOC) bank." }
      ]
    },
    {
      id: "fnd-16",
      part: "customer",
      title: "Summarize the research on one customer profile card",
      minutes: 9,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 3 · The customer profile card; Example: a profile for a trades client; Common Mistake", who: "Mastery Guide synthesis (Schwartz, Godin, Williams)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 3 · Client Lab L3 + Answer Key", who: "Workbook" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 · Persona 1: The nervous first-timer", who: "ZDub research playbook" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 1 · Exercise 1A: trigger personas", who: "ZDub workbook (Dara Denney trigger-based personas)" }
      ],
      alsoIn: ["Copywriting tab: five awareness levels", "Social Workbook Mod 1"],
      idea: `The VOC bank is raw material. The **customer profile card** is the one-page summary you write for each main segment, so anyone on the team can picture one real person before they write.

**What goes on the card:**
- **Who:** situation, life stage, location, what they do.
- **Dream outcome:** in their words.
- **The problem:** external (the practical issue) and internal (how it makes them feel).
- **Fears and objections:** what stops them.
- **Identity:** who they want to be seen as ("people like us...").
- **Shopping mode:** transactional or relational in this category.
- **Awareness stage:** how much they already know (the five levels are taught in the Copywriting tab).
- **Triggers:** what happens right before they start looking.
- **Where they pay attention:** platforms, groups, places, times.
- **Exact phrases:** five to ten lines straight from the VOC bank.

The Social Workbook makes the same point with Dara Denney's **trigger-based personas**: write about situations, not age brackets. "Women 25 to 45" tells you nothing; "new mom who wants her strength back but can't find 45 minutes" tells you what to film.

**Common mistake:** writing for "small business owners" or "homeowners." That isn't a customer; it's a census category. If you can't picture one person reading the ad, it'll sound like it's written to nobody.

After the card, the Workbook's last step is the payoff: **write five headlines pulled straight from the bank, changing as few words as possible.**`,
      keyPoints: [
        "One card per main segment: who, dream outcome, problem (external + internal), fears, identity, mode, awareness, triggers, attention, exact phrases.",
        "Write situations and triggers, not demographics.",
        "'Homeowners' is a census category, not a customer.",
        "If you can't picture one person reading it, rewrite it.",
        "Headlines pulled from customers' own words usually beat clever ones."
      ],
      why: "Every ad brief ZDub writes (and every AI prompt for creative) gets dramatically better with a real profile card attached. It's the single most reusable asset in a client folder.",
      example: {
        title: "Hypothetical trades profile (from the guide)",
        body: `**Who:** homeowner, 35–60, owns an older house in Citrus Heights. **Trigger:** a breaker keeps tripping, or they're buying an EV and need a charger. **Dream outcome:** "Fixed right the first time, with no surprise bill." **Problem:** external, the electrical issue; internal, fear of fire, of being upsold, of strangers in the house. **Mode:** relational. **Identity:** "responsible homeowner who doesn't cut corners on safety." **Exact phrases:** "showed up when he said he would," "explained everything," "didn't try to sell me a whole new panel."

For PMT, the Andromeda playbook's first card is already drafted: the **nervous first-timer**, never ridden, wants the endorsement, biggest fear is looking like a fool in front of the class; triggers include "sitting in traffic watching riders roll by" and "staring at the DMV site, confused."`
      },
      practice: [
        {
          prompt: "Client Lab L3: build the profile card for PMT's main segment from your VOC bank.",
          fields: ["Who (situation, life stage, location)", "Trigger(s)", "Dream outcome (their words)", "External problem / internal problem", "Fears and objections", "Identity ('people like us...')", "Shopping mode + awareness stage", "Where they pay attention", "5–10 exact phrases"],
          rubric: ["Describes one person you can picture, not a census category", "Dream outcome and phrases are real customer words", "Both external and internal problems named", "Triggers are specific moments"]
        },
        {
          prompt: "Write five headlines straight from the bank, changing as few words as possible.",
          fields: ["Headline 1", "Headline 2", "Headline 3", "Headline 4", "Headline 5"],
          rubric: ["Each one is traceable to a real phrase in the bank", "Each would make the profiled person think 'that's me'", "PMT copy rules followed"]
        }
      ],
      today: { task: "Finish PMT's profile card for the nervous first-timer (use the Andromeda persona as a starting draft, then add your own VOC phrases). Save it in PMT's client folder next to the VOC bank.", output: "PMT profile card saved in the client folder", minutes: 30, suggested: false },
      check: [
        { q: "List at least eight fields on the customer profile card.", a: "Who; dream outcome; problem (external and internal); fears and objections; identity; shopping mode; awareness stage; triggers; where they pay attention; exact phrases." },
        { q: "Why is 'homeowners' a bad target description?", a: "It's a census category, not a customer. If you can't picture one person reading the ad, it sounds written to nobody." },
        { q: "When you get stuck writing copy, where do you go?", a: "Back to the VOC bank and profile card, not a blank page." }
      ]
    },
    {
      id: "fnd-17",
      part: "brand",
      title: "A brand is what's attached to your name: Pavlov's three keys",
      minutes: 12,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 14 · What a brand actually is; How brand memories are built: Pavlov's three keys; Example: anchoring for a training school", who: "Roy H. Williams (The Wizard of Ads; Making Ads Work), David Ogilvy, Seth Godin, Martin Lindstrom, Harry Beckwith" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 14 · Recall 14.1, 14.2; Drill D14.1 + Answer Key", who: "Workbook" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 8 · Brand-building with the Wizard of Ads; Exercise 8A: Kill the clichés", who: "ZDub workbook (Roy H. Williams)" },
        { doc: "Social Media Marketing Playbook for ZDub (10/31/26)", section: "Part 1 · Roy H. Williams key ideas (surprise 'Broca,' branding = consistency + frequency + anchoring)", who: "ZDub research playbook" }
      ],
      alsoIn: ["Social Workbook Mod 8", "Social Media Playbook Part 1 (Roy H. Williams)", "Mastery Guide Ch 1 (Williams' definition)"],
      idea: `Most customers aren't in the market today. The roof doesn't leak yet; they haven't decided to learn to ride. **Branding is winning them before that moment**, so your name is the one that surfaces when it comes.

Roy Williams: if advertising is getting your name out, **branding is attaching something to your name.** A brand is the total of all the mental associations, good and bad, that your name triggers. The goal (from *Making Ads Work*): be the name customers think of immediately, and feel best about, whenever they or anyone they know needs what you sell. Ogilvy treated every ad as a long-term investment in the brand's personality (so changing your look every few months wastes it); Godin calls a brand a set of expectations and promises; Lindstrom found strong brands work through sensory associations and rituals. A logo or slogan is just a recall cue pointing to the memory.

**Pavlov's three keys.** Pavlov rang a bell every time he fed the dogs; eventually the bell alone made them salivate. He implanted an associative memory with a recall cue. Williams says branding needs the same three keys:
1. **Consistency.** Pavlov never rang the bell without the food, never served food without the bell, and didn't switch to a whistle because he got bored. Most advertisers change campaigns long before the public has even noticed the old one.
2. **Frequency.** Day after day after day.
3. **Anchoring** (the one everyone misses). The bell worked because it was tied to something the dog already loved: meat. Your recall cue must be tied to **an emotion already in the customer's heart.** If it isn't, Williams says, all you're doing is "irritating the dog," which is why people say they hate advertising.

**Be specific to get remembered.** The Social Workbook's Module 8 adds Williams' rule that predictable ad language gets filtered out by the brain. "Quality service at affordable prices" is ignored; a specific, unexpected, believable claim gets through and gets attached to the name.`,
      keyPoints: [
        "Branding = attaching something to your name; a brand is the sum of associations it triggers.",
        "Goal: the name people think of first and feel best about when the need arrives.",
        "Pavlov's keys: consistency, frequency, anchoring.",
        "Anchor the recall cue to an emotion customers already have, or you're 'irritating the dog.'",
        "Specific, unexpected, believable claims get remembered; clichés get filtered."
      ],
      why: "ZDub's organic content is a branding engine. Without a deliberate anchor and consistency, PMT's posts are just random nice videos; with them, every post adds to one memory that later makes the lead ads cheaper.",
      example: {
        title: "Anchoring for a training school (from the guide)",
        before: "Weak anchor: \"Safety first\", a rule people associate with lectures and nagging.",
        after: "Strong anchor: the feeling of freedom on an open road, or the pride of the first solo ride.",
        body: "Tie PMT's recall cue (a phrase, a sound, a visual) to that existing emotion, then repeat it consistently and frequently for years. HVAC version from the Workbook: anchor to relief when the cool air kicks on; recall cue = the same 'ahh' sound of an AC starting at the top of every reel, plus a phrase like 'Cool by dinner.'"
      },
      practice: [
        {
          prompt: "Drill D14.1: For PMT, an HVAC company and one more Sacramento trade, list three emotions already in the customer's heart, pick the strongest, and write one recall cue tied to it.",
          fields: ["PMT: 3 emotions → strongest + why → recall cue", "HVAC: 3 emotions → strongest + why → recall cue", "Third client: 3 emotions → strongest + why → recall cue"],
          rubric: ["Emotions already exist in the customer (not invented by the ad)", "Strongest pick is justified (positive, common, intense)", "Recall cue is a repeatable phrase, sound or visual", "Cue is tied to the emotion, not just the logo"]
        },
        {
          prompt: "Social Workbook Exercise 8A: Kill the clichés. Find 3 generic phrases a client (or prospect) uses and rewrite each as a specific, believable claim.",
          fields: ["Generic phrase 1 → specific rewrite", "Generic phrase 2 → specific rewrite", "Generic phrase 3 → specific rewrite"],
          rubric: ["Rewrite contains a specific detail (number, process, place, time)", "Rewrite is believable and true", "Rewrite would surprise someone who's seen 100 ads in the category"],
          model: "'Fast, reliable service' → 'We text you a photo of the problem before we quote a dollar.' (Only if the business does it.)"
        }
      ],
      today: { task: "Do Exercise 8A on one Sacramento prospect from your outreach list: pull 3 clichés from their site or ads and write the specific rewrites. Use the best one as the personalized line in your next outreach message.", output: "3 cliché rewrites + one outreach line", minutes: 20, suggested: false },
      check: [
        { q: "Williams: if advertising is getting your name out, branding is what?", a: "Attaching something to your name. A brand is the total of the associations your name triggers." },
        { q: "Which of Pavlov's three keys does everyone miss, and why does it matter?", a: "Anchoring. The bell worked because it was tied to meat, something the dog already loved. A recall cue must be tied to an emotion already in the customer's heart, or you're just 'irritating the dog.'" },
        { q: "Why does rebranding out of boredom hurt?", a: "It breaks consistency. Most advertisers change campaigns before the public has even noticed the old one, so the association never forms." }
      ]
    },
    {
      id: "fnd-18",
      part: "brand",
      title: "Reach fewer people, more often: the frequency math",
      minutes: 12,
      tags: ["Book", "Playbook", "Platform fact (re-check)"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 14 · Memory, sleep, and frequency; Reach fewer people, more often; ZDub Application: translating radio frequency to Meta; Example: the affordable-audience math", who: "Roy H. Williams (The Wizard of Ads), Craig Arthur (Making Ads Work)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 14 · Recall 14.3, 14.4, 14.7, 14.13; Drill D14.2 + Answer Key", who: "Workbook" },
        { doc: "Social Media Marketing Playbook for ZDub (10/31/26)", section: "Meta Ads for Local Businesses · Creative testing step 6 (fatigue); Part 5 · Mass-media frequency vs. broad social", who: "ZDub research playbook" }
      ],
      alsoIn: ["Meta Ads tab: learning phase & testing metrics"],
      idea: `Williams' branding math comes from a simplified model of memory: short-term memory is "electrical," long-term memory is "chemical," and **sleep erases what isn't salient or repeated.** From that:
- A typical message needs to reach the same person **about three times within seven nights' sleep, every week**, to move into long-term memory.
- A higher impact quotient (more salient, emotional, surprising) needs less repetition. That's why a great ad on a small budget beats a weak ad on a big one.
- **Limited-time offers get discarded after the deadline**, so a stream of promotions builds almost no brand.

His most practical rule: **"It is better to reach ten people ten times than a hundred people once."** Most advertisers reach too many people with too little repetition, so they only effectively reach whoever happens to be in the market that week. The Wizard of Ads partners wouldn't even let clients try to reach more than half their market, because the half you reach already knows the other half (everyone has a "realm of association" of roughly 250 people).

**Translating radio to Meta and Instagram:** own a radius you can afford to reach repeatedly, run a steady always-on awareness layer (organic plus a modest reach or engagement campaign), keep recall cues constant, and let lead campaigns harvest the familiarity.

**The affordable-audience formula:**
1. Daily budget ÷ CPM × 1,000 = impressions per day
2. × 7 = impressions per week
3. ÷ 3 (exposures per person per week) = people you can reach with meaningful frequency

At $30/day and a $10 CPM: 3,000 impressions a day, ~21,000 a week, ~7,000 people. So don't target 200,000 people across the metro; target the ~7,000–15,000 most valuable people closest in, and own them.

**2026 guardrails (re-check):** CPMs vary a lot by area and month, so use the account's real number. The research playbook flags fatigue when local audiences see the same ad more than about 3–4 times a week (alongside falling hook rate and rising cost per lead), so hit the frequency with *several different ads*, not one ad on repeat. Its resolution of Williams vs. broad social: **broad targeting within a tight geography.**`,
      keyPoints: [
        "About 3 exposures per person within 7 nights' sleep, every week, to build memory.",
        "Higher impact needs less repetition; promotions with deadlines build almost no brand.",
        "Ten people ten times beats a hundred people once.",
        "Affordable audience = budget ÷ CPM × 1,000 × 7 ÷ 3.",
        "Use real CPMs; spread frequency across several distinct ads to avoid fatigue (~3–4+/week on one ad)."
      ],
      why: "Small local budgets get wasted spreading thin across a whole metro. This math tells Zach exactly how big a radius PMT or a trade can actually own, and gives him a number to defend it with.",
      example: {
        title: "Workbook Drill D14.2 answers",
        body: `1. $20/day at an $8 CPM: 2,500/day → 17,500/week → about **5,800 people**.
2. $50/day at a $12 CPM: ~4,167/day → ~29,200/week → about **9,700 people**.
3. $15/day at a $14 CPM: ~1,071/day → ~7,500/week → about **2,500 people**.

For the radius, there's no single right answer: it depends on population density and targeting. Start with the closest, most valuable area and widen only if frequency stays high.`
      },
      practice: [
        {
          prompt: "Do the frequency math for PMT and one trades prospect. Use a real CPM from Ads Manager if you have one; otherwise mark it as a placeholder.",
          fields: ["PMT: daily budget / CPM / impressions per week / people reachable", "PMT: how many adults live in the current radius vs. how many you can actually own", "Prospect: daily budget / CPM / people reachable", "What you'd change (radius, ZIPs, budget) and why"],
          rubric: ["Math shown step by step", "CPM marked as real or placeholder", "Compares 'people reachable' to the actual audience size", "Recommendation tightens geography before widening"]
        }
      ],
      today: { task: "Pull PMT's real CPM from Ads Manager (or last 30 days of any campaign), run the affordable-audience formula, and compare it to the estimated audience size of the current radius. Write a one-line recommendation: keep, tighten, or prioritize specific ZIPs.", output: "One frequency-math row + recommendation in PMT's notes", minutes: 20, suggested: false },
      check: [
        { q: "In Williams' memory model, how often must a message reach the same person to move into long-term memory?", a: "About three times within seven nights' sleep, every week. A higher-impact message needs less repetition." },
        { q: "$30/day, $10 CPM, three impressions per person per week: roughly how many people can you reach with meaningful frequency?", a: "About 7,000. $30 ÷ $10 × 1,000 = 3,000/day; × 7 = 21,000/week; ÷ 3 = ~7,000." },
        { q: "Why do limited-time offers build so little brand?", a: "The brain discards information with an expiration date, so it rarely reaches long-term memory. Promotions create sales blips but attach almost nothing to the name." }
      ]
    },
    {
      id: "fnd-19",
      part: "brand",
      title: "Dominate something small, and survive the chickening-out period",
      minutes: 11,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 14 · Dominate something; People don't stay reached; Tell them why, and wait for when; Survive the 'chickening-out' period; Common Mistakes", who: "Roy H. Williams (The Wizard of Ads; Making Ads Work)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 14 · Recall 14.5, 14.6, 14.10, 14.12; Drill D14.3; Client Lab L14 step 5 + Answer Key", who: "Workbook" }
      ],
      idea: `Four Williams rules that keep a small local budget from leaking.

**1. Dominate something.** Media dominance means owning the largest share of voice *somewhere*, even if it's small. Can't dominate a whole medium? Dominate one station. Not a station? One time slot. Not that? One show. **"Never do two things halfway when you can do one thing wholeheartedly."** The "media mix" religion works for giant corporations with giant budgets; for small businesses it usually means doing everything badly. On social, "something" can be one platform, one tight area, or one audience.

**2. People don't stay reached.** "People don't stay reached any more than the lawn stays mowed." You can never say "we already reached them." Sleep erases ads, competitors keep talking, and needs arise at random. Branding is continuous.

**3. Tell them why, and wait for when.** Don't try to time ads to the moment of need. Williams criticizes advertisers who cluster everything on Thursdays and Fridays. You can't predict when each person's need will arrive, so make the reason memorable and keep repeating it, and it'll be there whenever the need shows up.

**4. Survive the chickening-out period.** Most advertisers quit a good campaign between the second and third media invoice, roughly **weeks 8 to 14**, when they've spent real money and haven't seen much yet. It's like pushing a stalled car: hardest right before it starts rolling. Williams claims that once the right message is found and held steady, results tend to compound (in his experience, year two about double year one, year three about triple) until new variables enter.

**Common mistakes to warn clients about:** rebranding out of boredom (the owner tires of the campaign long before the public notices it), spreading a small budget across five channels, judging brand ads by "comments from friends" (Williams calls that confusing response with results), and promising in ads what the business can't deliver inside the door.

**ZDub move:** warn the client about weeks 8–14 *before* they arrive, and agree on leading indicators to watch instead of sales: reach inside the radius, frequency, video views by locals, branded searches, "How did you hear about us?" answers, and review velocity.`,
      keyPoints: [
        "Own the largest share of voice in one small place before expanding.",
        "Don't split a small budget across many channels.",
        "People don't stay reached: branding never 'finishes.'",
        "Tell them why and wait for when; don't cluster ads around a guessed buying day.",
        "Weeks 8–14 is when owners quit. Warn them early and show leading indicators."
      ],
      why: "PMT's owner and every trades client will hit the weeks 8–14 doubt. A note sent in week 1 that predicts it, with leading indicators to watch, is the difference between a churned client and a case study.",
      example: {
        title: "A 'dominate something' plan (Workbook model)",
        body: "\"Own Roseville and Rocklin homeowners on Instagram and Facebook with a $25/day always-on awareness campaign and three organic reels a week. Stop the $300/month directory listing and the scattered boosted posts.\" The plan sacrifices breadth for depth: one area, two platforms, constant presence."
      },
      practice: [
        {
          prompt: "Drill D14.3: Write a 'dominate something' plan for a small-budget Sacramento trade or PMT.",
          fields: ["The one thing to dominate (channel, area, audience or time slot)", "Budget and cadence", "What you'd stop doing to fund it", "How you'll know you own it (leading indicators)"],
          rubric: ["Picks ONE thing, small enough to actually own", "Names something specific to stop", "Cadence is continuous, not a burst", "Indicators are measurable before sales show up"]
        },
        {
          prompt: "Client Lab L14 step 5: Write the short note to the client warning about the chickening-out period.",
          fields: ["Your note (4–6 sentences)"],
          rubric: ["Names weeks 8–14 and why it happens", "Uses the stalled-car image or similar", "Lists 3+ leading indicators you'll report instead of sales", "Calm and confident, not defensive"]
        }
      ],
      today: { task: "Write PMT's weeks 8–14 note now and save it in the client folder (or add it to PMT's 30-day plan). Include the leading indicators you'll report each week.", output: "Chickening-out note saved for PMT", minutes: 20, suggested: false },
      check: [
        { q: "What does Williams mean by media dominance?", a: "Owning the largest share of voice somewhere, even if it's small: one station, one time slot, one show. Never do two things halfway." },
        { q: "When does the chickening-out period fall?", a: "Around weeks 8–14, between the second and third media invoice, when money's been spent and results haven't shown yet." },
        { q: "What does 'people don't stay reached any more than the lawn stays mowed' mean?", a: "Branding is continuous. Sleep erases ads and needs arise at random, so you can never say you've already reached them." },
        { q: "Why tell them why and wait for when, instead of timing ads to the moment of need?", a: "You can't predict when each person's need arrives. A memorable reason, repeated, is there whenever the need shows up; clustering ads on certain days misses everyone else." }
      ]
    },
    {
      id: "fnd-20",
      part: "brand",
      title: "Stay top of mind through trust, not just ad weight",
      minutes: 9,
      tags: ["Book", "Playbook"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 14 · Top of mind through trust: John Hall", who: "John Hall, Top of Mind (2017)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 14 · Recall 14.9; Drill D14.4 + Answer Key", who: "Workbook" },
        { doc: "Social Media Marketing Playbook for ZDub (10/31/26)", section: "Part 1 · STEPPS key lesson: tie content to frequent local triggers", who: "ZDub research playbook" }
      ],
      alsoIn: ["Organic Social tab", "Content Production tab", "Social Workbook Mod 7 (local triggers)"],
      idea: `John Hall, co-founder of the content agency Influence & Co., wrote *Top of Mind* about staying top of mind through **trust** rather than ad weight. His premise: people care about their own problems, not your product. Your goal is to be **the first source they think of when a relevant problem shows up.**

He describes six trust touchpoints you can build on purpose:
- **Authenticity:** be real and transparent.
- **Helpfulness:** give value with no strings. He suggests ending conversations with "How can I be helpful to you?"
- **Likeability:** listen more than you talk, give before you receive, admit mistakes.
- **Familiarity:** consistent presence. Repeated exposure breeds comfort.
- **Thought leadership and education:** teach what you know.
- **Content triggers:** moments in the industry or in customers' lives that prompt useful content.

The research playbook gives the local version of content triggers: tie content to frequent local moments, like **Sacramento summer heat for HVAC, the school calendar for training, Friday night for restaurants.** For PMT: the first warm spring weekend, daylight saving time, gas price spikes, a friend buying a bike.

**The knowledge bank.** Hall's process for capturing ideas fits any agency: keep one shared place where staff (especially front-line people who talk to customers) drop questions, stories and insights that can become content. For a client, the person answering the phone is the best content researcher you have.

This is the trust side of branding. Williams' frequency rules make sure people see you; Hall's touchpoints make sure they like and believe what they see.`,
      keyPoints: [
        "Be the first source people think of when the problem shows up (Hall).",
        "Six trust touchpoints: authenticity, helpfulness, likeability, familiarity, thought leadership, content triggers.",
        "End conversations with 'How can I be helpful to you?'",
        "Local content triggers: heat waves, storms, school calendar, time change, spring weekends.",
        "Keep a knowledge bank fed by front-line staff."
      ],
      why: "Organic content is half of what ZDub sells. Hall's touchpoints turn 'post more' into a checklist Zach can plan and show a client, and the knowledge bank keeps him from ever running out of ideas.",
      example: {
        title: "Six touchpoints for an HVAC client (Workbook model)",
        body: `- **Authenticity:** the owner explains a mistake they made and how they fixed it.
- **Helpfulness:** answer DMs with real advice even when there's no sale.
- **Likeability:** feature the crew's personalities.
- **Familiarity:** the same face on camera every week.
- **Thought leadership:** a monthly "what we're seeing in attics this season" post.
- **Content triggers:** the first heat wave, the first big storm, the time change.`
      },
      practice: [
        {
          prompt: "Drill D14.4: Write one specific action for each trust touchpoint for PMT.",
          fields: ["Authenticity", "Helpfulness", "Likeability", "Familiarity", "Thought leadership / education", "Content triggers (list 3 local moments)"],
          rubric: ["Each action is specific enough to film or post this month", "Helpfulness gives value with no ask", "Triggers are real, recurring local moments", "Nothing invented about PMT (stories must be real)"]
        }
      ],
      today: { task: "Start PMT's knowledge bank: ask the owner (or whoever answers the phone) for the 10 questions students ask most, and log them in one shared doc. Each one becomes a future post.", output: "PMT knowledge bank with 10 real questions", minutes: 20, suggested: false },
      check: [
        { q: "What is John Hall's premise for staying top of mind?", a: "Trust: being the first source people think of when a relevant problem shows up, rather than outspending competitors on ad weight." },
        { q: "Name Hall's six trust touchpoints.", a: "Authenticity, helpfulness, likeability, familiarity, thought leadership and education, content triggers." },
        { q: "What is a knowledge bank?", a: "A shared place where staff, especially front-line people, drop customer questions, stories and insights that can become content." }
      ]
    },
    {
      id: "fnd-21",
      part: "brand",
      title: "Build the local brand kit and use it relentlessly",
      minutes: 11,
      tags: ["Book", "Mentor", "Playbook"],
      date: "2026-10-13",
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 14 · Building a local brand kit; Brand and direct response together; The APE revisited", who: "Roy H. Williams, Martin Lindstrom (Buyology), Goldstein, Martin & Cialdini (Yes!), Allan Dib (Lean Marketing)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 14 · Recall 14.8, 14.11; Client Lab L14 + Answer Key", who: "Workbook" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 8 · Exercise 8B: Pick a brandable chunk", who: "ZDub workbook (Roy H. Williams)" },
        { doc: "ZDub Guide 04 — Organic Content (V2)", section: "New in V2: More on client content", who: "Clayton Bell, call 8/19/26" },
        { doc: "ZDub Guide 07 — Landing Pages, Funnels & Booking (V2)", section: "Page review checklist: brand consistency across page, ads and content", who: "Logan McKinney, call 10/13/26" }
      ],
      alsoIn: ["Social Workbook Mod 8", "Persuasion tab: StoryBrand (villain and belief)"],
      idea: `For every client, assemble a small set of **distinctive brand assets** and use them on everything. The guide's eight:

1. **Name and a one-liner.**
2. **A signature color and type style:** on every graphic, thumbnail and truck.
3. **A recurring face:** owner, instructor or crew lead. Faces are the strongest recall cue on social.
4. **A sound:** the same opening sound or music sting on every reel (Lindstrom's sensory branding).
5. **A phrase or tagline with rhythm.** Williams notes rhythmic phrases slip past the brain's skepticism and stick in the "phonological loop"; rhythm and rhyme also make statements feel truer (*Yes!*).
6. **A ritual:** a recurring moment (the graduation photo, the "before we leave" cleanup shot, the Friday tip).
7. **A place:** a visible location or vehicle wrap (Part 5 covers "intrusive visibility").
8. **A villain and a belief:** what you stand against and for.

The Social Workbook calls the phrase/sound/opening-shot set your **brandable chunk**: a signature phrase or sign-off, a recurring visual, and three voice words.

**What the mentors add:** Clayton (8/19) ends client videos with the company name and location as a soft CTA and brand awareness. Logan (10/13) checks for brand consistency across page, ads and content, and says ads, landing page, website and sales talk should all reflect the same message and offer.

**Brand and direct response together.** Dib's point from Part 1 applies: every lead ad should look, sound and feel like the brand, and every brand piece should give people a reason and a way to act. And from the APE: **share of voice can be bought; share of mind must be earned with impact**, and the customer's real experience multiplies or divides everything the brand builds.`,
      keyPoints: [
        "Eight assets: name + one-liner, color/type, face, sound, rhythmic phrase, ritual, place, villain + belief.",
        "Faces are the strongest recall cue on social.",
        "Rhythmic phrases stick and feel truer.",
        "End client videos with name + location (Clayton, 8/19); keep page, ads and content consistent (Logan, 10/13).",
        "Every lead ad carries the brand; every brand piece gives a way to act."
      ],
      why: "A written brand kit makes ZDub's work consistent even when Zach batches 15 reels in a day or uses AI tools for statics. It's what makes month-three content compound instead of starting from zero.",
      example: {
        title: "Draft brand kit skeleton for PMT (fill with real assets)",
        body: `- **One-liner:** [from the positioning work in Part 2]
- **Color/type:** [PMT's real brand colors] on every thumbnail and static
- **Face:** the same instructor opening every Reel
- **Sound:** one short engine-start sound at second 0
- **Phrase:** a rhythmic sign-off (draft: "Start from zero. Ride away a rider."), tested with the owner
- **Ritual:** the end-of-class group photo, posted every class
- **Place:** the range itself, shot the same way each time
- **Villain/belief:** against "learn from a buddy in a parking lot"; for learning it right from day one

Every video ends with "Pacific Motorcycle Training, [location]" on screen (Clayton's soft CTA).`
      },
      practice: [
        {
          prompt: "Social Workbook Exercise 8B: Pick PMT's brandable chunk.",
          fields: ["Signature phrase or sign-off", "Recurring visual (opening shot, prop, color, setting)", "Three voice words"],
          rubric: ["Phrase has rhythm and is easy to repeat", "Visual is something you can capture every shoot", "Voice words are distinct (not 'professional, quality, friendly')", "Everything is true to PMT"]
        },
        {
          prompt: "Client Lab L14 steps 1–2: Write all eight brand-kit assets for one client, plus the anchor emotion.",
          fields: ["1. Name + one-liner", "2. Color + type", "3. Face", "4. Sound", "5. Rhythmic phrase", "6. Ritual", "7. Place", "8. Villain + belief", "Anchor emotion the recall cue ties to"],
          rubric: ["Simple enough that anyone on the client's team can apply it", "Every asset is repeatable on every piece", "Recall cue tied to an emotion customers already feel", "Matches page, ads and content (Logan's consistency check)"]
        }
      ],
      today: { task: "Create a shared 'Brand Kit' folder for PMT with the eight assets written out (placeholders where you need the owner), the brandable chunk, and the end-card template (name + location). Use it on the next post you make.", output: "PMT brand kit folder + one post that uses it", minutes: 40, suggested: false },
      check: [
        { q: "Name eight distinctive brand assets for a local brand kit.", a: "Name and one-liner; signature color and type style; a recurring face; a sound; a rhythmic phrase or tagline; a ritual; a place (visible location or wrap); a villain and a belief." },
        { q: "Which is correct: share of voice must be earned, or share of voice can be bought and share of mind must be earned?", a: "Share of voice can be bought; share of mind must be earned with impact. Weak ads need a much bigger budget for the same result." },
        { q: "What does Clayton add at the end of client videos?", a: "The company name and location, as a soft CTA and brand awareness." }
      ]
    },
    {
      id: "fnd-22",
      part: "local",
      title: "Location shapes buying, even online: Bell's four GRAVITY ideas",
      minutes: 12,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 21 · Location is (still) everything: David Bell (Resistance, Adjacency, Vicinity, Isolation)", who: "David R. Bell, Location Is (Still) Everything (2014)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 21 · Recall 21.1–21.4; Drill D21.2 + Answer Key", who: "Workbook" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 · Persona 2: The licensed but uneasy rider", who: "ZDub research playbook" }
      ],
      idea: `For a local business, **geography is strategy.** David Bell, a Wharton marketing professor who also advised online brands, argues something counterintuitive in *Location Is (Still) Everything*: **even online buying is shaped by where people physically live.** He organizes it as GRAVITY (geography, resistance, adjacency, vicinity, isolation, topography, you). Four ideas matter most for local marketers:

**Resistance.** Two kinds of friction keep people from buying: **geographic friction** (hard to get to, or unclear where to buy) and **search friction** (hard to evaluate and decide). Much of local marketing is simply friction removal: clear service areas, visible prices or ranges, photos of real work, easy booking, quick quotes.

**Adjacency.** People copy their neighbors. Bell found adoption of new brands spreads geographically from early customers to the people physically near them, almost like a contagion. That's why yard signs, vehicle wraps and "we just finished a job on your street" door hangers work. **Every completed job is a seed.** Run ads to neighborhoods around recent jobs and ask happy customers to tell neighbors.

**Vicinity.** Similar people cluster in similar places even when far apart, creating a **spatial long tail**: demand near you (the head) plus demand from look-alike people elsewhere (the tail). Find the towns and neighborhoods that look like your best customers' neighborhoods and target those first.

**Isolation.** People whose tastes are rare in their area can't find what they want locally (Bell couldn't find his native Vegemite in Philadelphia). **Specialty offers draw from a much wider radius** than standard ones, because the isolated few will travel. A women's riding clinic, an advanced skills day or a specialty restoration service can be targeted wider. For PMT, the Andromeda playbook's second persona (the licensed-but-uneasy rider headed for 1-on-1, intermediate and advanced classes) is exactly this kind of offer.`,
      keyPoints: [
        "Physical location shapes buying, even online (Bell).",
        "Resistance: remove geographic friction and search friction.",
        "Adjacency: neighbors copy neighbors. Every finished job is a seed.",
        "Vicinity: target look-alike neighborhoods of your best customers.",
        "Isolation: specialty offers can be targeted much wider than standard ones."
      ],
      why: "Every ZDub client is local. These four ideas turn 'set a radius' into real targeting decisions, and give trades clients cheap plays (signs, door hangers, neighbor ads) that compound with the paid work.",
      example: {
        title: "GRAVITY plays for an HVAC client (Workbook model)",
        body: `- **Resistance:** price ranges on the site; online booking with arrival windows.
- **Adjacency:** door hangers to 20 neighbors after each install; half-mile Meta ads around recent jobs.
- **Vicinity:** target the two other towns with the same housing age as the best customer cluster.
- **Isolation:** a specialty offer (ductless mini-splits for older homes without ducts) advertised across a wider radius.`
      },
      table: { head: ["Idea", "What it means", "PMT play"], rows: [
        ["Resistance", "Geographic + search friction", "Show the range location, what's provided (bike, helmet), and dates clearly; fewer steps to book"],
        ["Adjacency", "Neighbors copy neighbors", "Students' graduation photos tagged with their town; referral ask after class"],
        ["Vicinity", "Look-alike areas", "Find towns that resemble where current students live"],
        ["Isolation", "Rare tastes travel", "Advanced or specialty classes targeted wider than the beginner course"]
      ] },
      practice: [
        {
          prompt: "Drill D21.2: Write two specific actions for each of Bell's four ideas for one real client (PMT or a trades prospect).",
          fields: ["Resistance (2 actions)", "Adjacency (2 actions)", "Vicinity (2 actions)", "Isolation (2 actions)"],
          rubric: ["Each action is specific and doable this month", "Resistance actions remove a real friction point", "Isolation action names a specialty offer and a wider targeting choice", "Nothing requires publishing customer addresses"]
        }
      ],
      today: { task: "Walk PMT's booking path like a nervous first-timer: from the ad to a confirmed seat. List every point of geographic or search friction (Where is it? What do I need? What does it cost? How do I pick a date?) and the fix for each.", output: "PMT friction list with fixes, in priority order", minutes: 25, suggested: false },
      check: [
        { q: "What is Bell's counterintuitive argument?", a: "Even online buying is shaped by where people physically live." },
        { q: "New brands spreading from early customers to people physically near them is which idea?", a: "Adjacency. That's why yard signs, wraps and door hangers work." },
        { q: "A women's riding clinic draws students from far outside the normal radius. Which idea explains it?", a: "Isolation (preference isolation): people with rare tastes in their area will travel, so specialty offers can be targeted wider." },
        { q: "What are Bell's two kinds of resistance?", a: "Geographic friction (getting there, knowing where to buy) and search friction (how hard it is to evaluate and decide)." }
      ]
    },
    {
      id: "fnd-23",
      part: "local",
      title: "Visibility is advertising: intrusive visibility and the budget formula",
      minutes: 11,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 21 · Roy Williams on location and local budgets: Intrusive visibility; The ad budget formula; Dominate locally", who: "Roy H. Williams, The Wizard of Ads and Making Ads Work" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 21 · Recall 21.5, 21.6; Drill D21.1; Swipe & Study + Answer Key", who: "Workbook" }
      ],
      idea: `**Intrusive visibility.** In *The Wizard of Ads*, Williams argues that a location people see **when they're not looking for you** is often the most efficient advertising a business can buy. One client took $20,000 out of the ad budget to afford a more visible location. On opening day, a simple "Now Open" banner was enough, because thousands of people had watched the building go up.

Service businesses without a storefront have equivalents: **vehicle wraps, job-site signs, uniforms, branded gear on the crew, and sponsorship of highly visible local things.** Anything people see repeatedly without looking.

**The ad budget formula.** *Making Ads Work* gives Williams' formula for a retail business's total "cost of exposure" (rent plus advertising), because a cheaper location must be paid for with more advertising:
1. Take **10% and 12%** of projected annual sales.
2. Multiply each by the **average markup** (gross profit as a percentage of *cost*, not margin). Markup = margin ÷ (1 − margin).
3. **Subtract annual rent.** The results are the minimum and maximum annual ad budget.

His worked example: $1 million in sales, 48% margin (a 92.3% markup), $36,000 rent → ad budget of roughly **$56,000 to $75,000**. Raise the rent to $75,000 and the budget drops to about **$17,000 to $36,000**. The better location *is* advertising.

It's a retail rule of thumb, not a law, but the logic applies to every client: **visibility and advertising substitute for each other.** A business in an invisible spot (or with unmarked trucks) must spend more to be known.

**Dominate locally.** Williams' frequency rules from Part 4 are inherently local: reach fewer people more often, dominate a small area before expanding, and keep showing up, because people don't stay reached.`,
      keyPoints: [
        "Intrusive visibility = being seen when people aren't looking for you.",
        "For service businesses: wraps, job-site signs, uniforms, branded gear, visible sponsorships.",
        "Budget formula: (10% and 12% of sales) × markup − annual rent = min and max ad budget.",
        "Markup is profit as % of cost: margin ÷ (1 − margin).",
        "Visibility and advertising are substitutes; invisible businesses must spend more."
      ],
      why: "Many Sacramento trades drive unmarked trucks past thousands of homes a week. Pointing that out is a free, specific win on a sales call, and it frames ZDub's ad spend as part of a total 'cost of exposure.'",
      example: {
        title: "Workbook Drill D21.1 worked answer",
        body: `A retail client projects $600,000 in sales, 40% gross margin, $30,000 rent.
1. Markup = 0.40 ÷ 0.60 ≈ **66.7%**.
2. Minimum: 10% × $600,000 = $60,000 × 0.667 ≈ $40,000 − $30,000 = **about $10,000**. Maximum: 12% × $600,000 = $72,000 × 0.667 ≈ $48,000 − $30,000 = **about $18,000**.
3. Move to a more visible spot with $48,000 rent: minimum below zero, maximum about $0. The visible location absorbs the whole exposure budget. That's the point: visibility and advertising substitute.`
      },
      practice: [
        {
          prompt: "Run the formula for a made-up or real Sacramento storefront (gym, med spa, coffee shop).",
          fields: ["Projected annual sales / gross margin / annual rent", "Markup (show the math)", "Minimum and maximum annual ad budget", "What this says about their location"],
          rubric: ["Markup calculated from margin correctly", "Both 10% and 12% versions shown", "Rent subtracted last", "Conclusion connects visibility and ad budget"]
        },
        {
          prompt: "List every intrusive-visibility asset a Roseville roofer (or PMT) could own, ranked by cost.",
          fields: ["Free or almost free", "Under $500", "Bigger investment", "The one you'd pitch first and why"],
          rubric: ["Includes wraps/signs/uniforms/gear or the PMT equivalent", "Each is seen repeatedly without looking", "First pick is cheap and fast to deploy"]
        }
      ],
      today: { task: "Swipe & Study: drive (or recall) one route you take every week and list every intrusively visible local sign, wrap or banner. Tomorrow, note which you still remember. Add one to the Local recall log, and note any prospect you saw with unwrapped trucks as an outreach angle.", output: "Visibility list + 1 recall-log entry + 1 outreach angle", minutes: 15, suggested: false },
      check: [
        { q: "What does Williams mean by intrusive visibility?", a: "A location or asset people see when they're not looking for you. For service businesses: wraps, job-site signs, uniforms, branded gear, visible sponsorships." },
        { q: "In Williams' formula, what do you subtract after multiplying 10% and 12% of sales by the markup?", a: "Annual rent. Rent plus advertising is the total 'cost of exposure.'" },
        { q: "What's the big lesson of the formula?", a: "Visibility and advertising substitute for each other. A business in an invisible spot must spend more to be known." }
      ]
    },
    {
      id: "fnd-24",
      part: "local",
      title: "Win the map: Google Business Profile, reviews and the local presence audit",
      minutes: 12,
      tags: ["Book", "Platform fact (re-check)"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 21 · Local search in 2026: Google Business Profile; Reviews; Behavior and proximity; ZDub Application: the local presence audit", who: "Local Falcon, 'Guide to the Future of Local Search in 2026' (Jan 2026), citing Whitespark local ranking factors research" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 21 · Recall 21.7, 21.8, 21.11; Drill D21.3; Swipe & Study + Answer Key", who: "Workbook" }
      ],
      alsoIn: ["Getting Clients tab: prospect research and scoring", "Mastery Guide Ch 7 (never fake or gate reviews)"],
      idea: `When a local customer needs something, they usually search Google or Maps, increasingly see an AI-generated answer first, and choose from a handful of businesses. 2026 industry guides (Local Falcon's January 2026 guide, citing Whitespark's local ranking factors research) emphasize the following. **These are industry observations, not published Google formulas, so re-check them regularly.**

**Google Business Profile (GBP)**
- **Primary category is foundational.** Choose the most specific accurate one, then add secondary categories that match real services.
- Fill out **services, hours, service area, attributes, booking links and description** completely, and keep them current.
- Upload **fresh, real photos** regularly (the work, the team, the vehicles, the location), at least monthly.
- Post updates and offers to the profile.
- Keep **name, address, phone (NAP) and categories consistent** everywhere the business is listed.

**Reviews**
- **Recency is often weighted more than total volume:** a steady flow beats an old pile.
- **Detailed reviews** that mention specific services and outcomes help buyers and rankings.
- **Respond to every review** helpfully.
- Reviews on other platforms (Yelp, Facebook, industry sites) help too.
- **Never buy, fake, gate or incentivize reviews.**

**Behavior and proximity.** Proximity to the searcher still matters. Guides also point to calls, direction requests, website taps, photo views, review velocity and branded searches, which strong marketing naturally increases.

**The local presence audit (first week with every client):** GBP completeness and categories; photo freshness; review count, rating, recency and response rate; competitor review velocity; NAP consistency on major directories; service pages and FAQs; whether the business appears in AI answers for "[service] near [town]"; and visibility assets (wraps, signs, uniforms). **Fix the free things first.** They make every paid dollar work harder.`,
      keyPoints: [
        "Primary GBP category = the most specific accurate one; it's foundational.",
        "Complete every GBP field; fresh real photos at least monthly; consistent NAP everywhere.",
        "Review recency beats total volume; detailed reviews help; respond to every one.",
        "Never buy, fake, gate or incentivize reviews.",
        "Run the local presence audit in week one and fix the free items first."
      ],
      why: "PMT and every trade prospect will be compared on Maps before they're compared on price. The audit is a free, concrete first-week win, and a ready-made 'gap' to open a cold outreach message with.",
      example: {
        title: "Typical first fixes (Workbook D21.3 model)",
        body: "The first priorities are usually: the most specific primary category, accurate secondary categories, complete services and service area, a booking link, 10+ fresh real photos, and a plan for a steady flow of detailed reviews (an ask right after the class or job, with a direct link). Every change must be true and verifiable."
      },
      practice: [
        {
          prompt: "Drill D21.3: Audit one Google Business Profile (PMT's or a prospect's). Write the ten changes in priority order and three review responses.",
          fields: ["Changes 1–5 (highest priority)", "Changes 6–10", "Review response 1 (to a 5-star)", "Review response 2 (to a detailed review)", "Review response 3 (to a critical review)"],
          rubric: ["Primary category checked first", "Changes are specific and verifiable", "Review responses are helpful and personal, not copy-paste", "Critical response stays calm and offers a fix offline", "No incentivized or gated review tactics"]
        }
      ],
      today: { task: "Run the full local presence audit on PMT (or a top prospect) and write the results as a one-page checklist: pass/fix for each item, free fixes highlighted. For a prospect, turn the biggest gap into your outreach opener.", output: "Local presence audit checklist", minutes: 40, suggested: false },
      check: [
        { q: "According to 2026 local-search guides, which matters more for reviews: total volume or recency?", a: "Recency: a steady flow of recent, detailed reviews. Reviews on other platforms help too." },
        { q: "Which GBP factor is described as foundational?", a: "The primary category: the most specific accurate one." },
        { q: "List six items on the local presence audit.", a: "Any six: GBP completeness and categories; photo freshness; review count, rating, recency and response rate; competitor review velocity; NAP consistency; service pages and FAQs; appearance in AI answers for '[service] near [town]'; visibility assets." }
      ]
    },
    {
      id: "fnd-25",
      part: "local",
      title: "Show up in AI answers and work the other local channels",
      minutes: 11,
      tags: ["Book", "Platform fact (re-check)"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 21 · Websites and AI answers; Other local channels", who: "Local Falcon 2026 guide citing Whitespark; Alex Hormozi ($100M Leads, 'affiliates'); Roy H. Williams" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 21 · Recall 21.9, 21.12; Drill D21.4 + Answer Key", who: "Workbook" },
        { doc: "The Ultimate Social Media Workbook (10/31/26)", section: "Module 10 · Exercise 10C: Local partners", who: "ZDub workbook" }
      ],
      idea: `**Websites and AI answers.** More local searches now start with an AI-generated answer. What 2026 guides observe (re-check these; they're moving fast):
- **Service pages with direct answers** to real questions, local context (neighborhoods, landmarks, service areas), structured data, and fresh content.
- AI answers appear to favor businesses whose information is **consistent and verifiable across many sources.** Whitespark research cited in 2026 guides links AI visibility to appearing on **"best of" lists, relevant industry sites, and local news and association sites.**
- **Track AI visibility:** ask AI tools for recommendations in the client's category and city, and record whether the client appears. Track it alongside traditional rankings; geo-grid rank tracking shows how visibility changes across the service area.

**Other local channels** besides Google and Meta ads:
- **Google Local Services Ads** (eligible categories, mostly home services): pay-per-lead ads at the top of search with verification and a badge. Often strong for trades; check eligibility.
- **Partnerships and referral partners** (Hormozi's "affiliates"): dealerships for a training school, real-estate agents and property managers for trades, gyms and physical therapists for health businesses.
- **Community presence:** sponsoring local events and teams, free workshops, appearing in local news and podcasts. This also builds the "best of" and local-mention signals AI search seems to value.
- **Neighborhood platforms:** Nextdoor and local Facebook groups, where recommendations travel (adjacency in action).
- **Local audio and video:** Williams built his career on local radio; streaming audio and connected TV can now be bought in tight geographic areas for brand-building.

For PMT, the obvious partners share its customers right before or after class: motorcycle dealerships, gear shops, and riding groups. The Social Workbook's Exercise 10C turns that into collab posts, joint giveaways or cross-promotion.`,
      keyPoints: [
        "AI answers seem to favor consistent, verifiable info across many sources.",
        "'Best of' lists, industry sites and local news mentions help AI visibility.",
        "Check AI visibility for every client: ask the tools '[service] near [town].'",
        "Other channels: Local Services Ads, referral partners, community presence, Nextdoor/FB groups, local audio/CTV.",
        "PMT partners: dealerships, gear shops, riding groups."
      ],
      why: "ZDub's core is Meta, but a client who wins AI answers, partners and community mentions gets cheaper Meta results too. Knowing these channels lets Zach recommend free wins without selling services he doesn't run.",
      example: {
        title: "AI visibility check (Workbook D21.4 'what good looks like')",
        body: "You'll often find competitors with consistent listings, 'best of' mentions and detailed service pages showing up first. Actions: make NAP consistent across directories, build a detailed FAQ page that answers the exact question, pursue a local 'best of' list or local news mention, and keep detailed reviews flowing."
      },
      practice: [
        {
          prompt: "Drill D21.4: Ask two AI assistants and Google's AI answer 'What's the best [client's service] near [client's town]?' Record what you find.",
          fields: ["Exact query used", "Does the client appear? (each tool)", "Who appears instead", "Sources the answers seem to draw from", "3 actions to improve the client's presence in those sources"],
          rubric: ["Same query used across tools", "Sources identified, not guessed", "Actions are specific (which list, which directory, which FAQ)", "Nothing fake (no paid fake reviews or made-up awards)"]
        },
        {
          prompt: "Social Workbook Exercise 10C: list 3 nearby businesses that share PMT's customers and one collab idea each.",
          fields: ["Partner 1 + collab idea", "Partner 2 + collab idea", "Partner 3 + collab idea"],
          rubric: ["Partners serve the same customer right before or after PMT", "Collab gives the partner something too", "Idea is doable this month (Collab post, joint giveaway, cross-promo)"]
        }
      ],
      today: { task: "Run the AI visibility check for PMT (e.g. 'best motorcycle training course near Woodland' and near Sacramento) in two AI tools plus Google. Record results and pick one action to start this week.", output: "PMT AI visibility snapshot + 1 action started", minutes: 25, suggested: false },
      check: [
        { q: "2026 guides suggest AI search answers favor businesses whose information is what?", a: "Consistent and verifiable across many sources." },
        { q: "Name four local channels besides Google and Meta ads.", a: "Any four: Google Local Services Ads; partnerships and referral partners; community presence (events, teams, workshops, local news and podcasts); neighborhood platforms (Nextdoor, local Facebook groups); local audio and video (streaming audio, connected TV)." }
      ]
    },
    {
      id: "fnd-26",
      part: "local",
      title: "Map your customers, set the radius from the map, and seed every job",
      minutes: 13,
      tags: ["Book", "Mentor", "Playbook", "Platform fact (re-check)"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 21 · Map your customers; Example: neighbor marketing for a roofer", who: "David R. Bell; Roy H. Williams; Jonah Berger (Contagious)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 21 · Recall 21.10; Client Lab L21 + Answer Key", who: "Workbook" },
        { doc: "Social Media Marketing Playbook for ZDub (10/31/26)", section: "Part 4 · Fact-Check: '25–50 mile radius' (Outdated as a default); Part 5 · Mass-media frequency vs. broad social; Recommendation 6", who: "ZDub research playbook" },
        { doc: "ZDub Guide 02 — Meta Ads Setup & Media Buying (V2)", section: "4. Targeting", who: "Cam Meunier, call 10/15/26" },
        { doc: "Andromeda Ad Playbook (10/30/26)", section: "04 · Sample campaign build (PMT Woodland)", who: "ZDub research playbook" }
      ],
      alsoIn: ["Meta Ads tab (campaign setup)", "Persuasion tab: STEPPS (the 'public' principle)"],
      idea: `One of the most useful exercises with any local client: **plot their last 100–300 customers on a map.** (With the client's permission, kept private, never used in public content.) You'll usually see clusters. Then:
1. **Target ads and mailers around the clusters** (adjacency).
2. **Find look-alike areas** without customers yet (vicinity).
3. **Find far-flung customers** who drove a long way for something special (isolation), and build offers for them.
4. **Spot gaps** where travel time or awareness is the obstacle (resistance).

**Set the radius from the map, not a guess.** The research playbook's fact-check marks the common **"25–50 mile radius" default as outdated.** No current Meta or expert source sets it, and Williams' reach-fewer-more-often principle argues for matching the real trade area:
- Restaurants, gyms, salons: about **3–10 miles** or specific ZIPs/neighborhoods.
- Home services: the **service-area ZIPs**.
- Training schools or destination businesses: **15–40 miles may fit.**
- Check Special Ad Category minimum-radius rules, and exclude areas you don't serve.

Mentor guidance lines up: **Cam (10/15)** says drop a pin and a radius around the service area (his example: 30 miles), with **nothing outside where the client can actually serve**, and that location stays a hard limit even with Advantage+ audience. The Andromeda playbook's sample PMT build uses a broad **30–40 mile radius around the Woodland range**, which sits inside the training-school range. The resolution of Williams versus broad social targeting: **broad within a tight geography.**

**Seed every job: the neighbor routine.** The guide's roofer example, after every completed job:
- A tasteful sign stays in the yard for two weeks.
- Door hangers go to the 20 nearest homes ("We just replaced the roof at 1234 Elm. Here's what we found in this neighborhood's 1990s roofs").
- A Meta ad runs to a **half-mile radius** showing the before-and-after.
- The homeowner is asked for a review and a neighbor referral.

That's Bell's adjacency, Williams' intrusive visibility and Berger's "public" principle in one routine. Write it as a checklist the crew can follow.`,
      keyPoints: [
        "Map the last 100–300 customers: clusters, look-alikes, far-flung specialty buyers, gaps.",
        "25–50 miles is outdated as a default. Match the real trade area (3–10 mi local storefronts, service-area ZIPs for trades, 15–40 mi for training schools).",
        "Cam: pin + radius around where the client can actually serve; nothing outside it.",
        "Broad targeting within a tight geography.",
        "Neighbor routine after every job: sign, 20 door hangers, half-mile ad, review + referral ask.",
        "Keep customer addresses private; use the map for targeting decisions only."
      ],
      why: "Radius is one of the few hard controls left in Meta, so getting it right is a real lever. A map-based radius plus a neighbor routine is something Zach can set up in week one for any trade and defend with data.",
      example: {
        title: "PMT: from a guessed circle to a mapped area",
        before: "A 50-mile circle around Sacramento because 'people will drive.'",
        after: "Plot last season's student ZIPs. Run the beginner course broad within the 30–40 miles where most students actually come from, add the look-alike towns, and target advanced or specialty classes wider (isolation).",
        body: "Then re-check frequency with the Part 4 math: if the mapped area is bigger than the budget can reach about three times a week, tighten to the closest clusters first."
      },
      practice: [
        {
          prompt: "Client Lab L21: map one client's customers and decide the next campaign's geography.",
          fields: ["Clusters (adjacency)", "Look-alike areas with no customers yet (vicinity)", "Far-flung customers + what they came for (isolation)", "Gaps (resistance)", "Radius or ZIP decision for the next campaign + why"],
          rubric: ["Based on real customer data, not a guess", "Radius matches the real trade area, not a 25–50 mile default", "Nothing outside where the client can serve (Cam)", "Checked against the frequency math", "Addresses kept private"]
        },
        {
          prompt: "Write a neighbor-marketing checklist a Sacramento trades crew could follow after every job.",
          fields: ["Step 1", "Step 2", "Step 3", "Step 4", "Who owns each step and when"],
          rubric: ["Includes a visible sign or equivalent", "Includes door hangers or a neighbor touch", "Includes a tight-radius ad (about half a mile)", "Includes a review + referral ask", "Simple enough for a crew lead to run"]
        }
      ],
      today: { task: "Ask PMT's owner for last season's student ZIP codes (ZIPs only, kept private). Plot them with any free mapping tool, mark the clusters, and write the radius/ZIP recommendation for the next campaign.", output: "PMT customer map + radius recommendation", minutes: 40, suggested: false },
      check: [
        { q: "When you plot 100–300 customers, what four things do you look for, and which Bell idea goes with each?", a: "Clusters to target around (adjacency); look-alike areas without customers (vicinity); far-flung customers who traveled for something special (isolation); gaps where travel time or awareness is the obstacle (resistance)." },
        { q: "Why is a 25–50 mile radius outdated as a default?", a: "No current Meta or expert source sets it, and reaching fewer people more often argues for matching the real trade area: ~3–10 miles or ZIPs for local storefronts, service-area ZIPs for home services, 15–40 miles possibly for training schools." },
        { q: "What's Cam's targeting rule for a local client's location?", a: "Drop a pin and a radius around the service area (e.g. 30 miles), with nothing outside where the client can actually serve. Location stays a hard limit even with Advantage+ audience." }
      ]
    },
    {
      id: "fnd-27",
      part: "business",
      title: "Every business runs on leads, closing and delivery. ZDub owns the first",
      minutes: 10,
      tags: ["Alternate model (Jason)"],
      date: "2026-09-30",
      source: [
        { doc: "Module 01 — Why This Business Works", section: "Segment 1: The three things that move a business forward; Segment 2: Leads are oxygen; Segment 8: Design your business as an economic system", who: "Jason Maulucci, 9/30/26" },
        { doc: "Module 02 — The Business Model and Your Offer", section: "Segment 5: Agree on what counts as a call", who: "Jason Maulucci, 9/30/26" },
        { doc: "Module 03 — The Niches You Should Target", section: "Prospect list vs. client campaign list", who: "Jason Maulucci, 9/30/26" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 1 · The three worlds of every business", who: "Roy H. Williams" }
      ],
      alsoIn: ["Agency Ops tab", "Sales tab: money model before price"],
      idea: `**Heads-up: different model.** Jason Maulucci's course teaches a B2B cold-email agency paid per qualified call. ZDub runs Meta ads and content for local businesses on a retainer. Only the transferable ideas are here.

**Every business runs on three things:** getting leads, closing those leads, and fulfilling for customers. If you spend all day on things that don't help one of those three, you're probably avoiding the real work. An agency like ZDub handles **the first piece** for other businesses: getting them in front of people who could buy.

**Leads are oxygen.** A company can have a great service and a good sales team, but if nobody gets on the phone with that team, the business has a problem. Businesses pay for leads because it's a part of the business they need to keep running. Jason's analogy: a car factory doesn't own the mine or the steel mill; it buys materials and builds the car. **ZDub is a supplier of sales opportunities.** You don't run the client's business; you get very good at your piece.

**Define the terms.** A *prospect* is someone who could become a customer. A *qualified prospect* fits the kind of customer the client actually wants.

**Agree in writing what counts, before launch.** Jason's rule (for calls; it transfers to leads): don't find out at invoice time that you and the client meant different things. Agree on who counts, what makes them relevant, and how wrong fits and no-shows are handled. Your ads, agreement, tracker and reports must all describe the same thing.

**Where it meets the rest of this tab.** ZDub owns leads, but closing and delivery happen inside the client's door (Williams' world #2), and they decide whether leads turn into money. So ZDub supplies leads *and* audits the doorway: response speed, the call, the class experience, the reviews.

**Think like an economic system.** Know what it costs ZDub to acquire a client, what you make per client, and do enough volume to make anything happen at all.`,
      keyPoints: [
        "Three engines: leads, closing, delivery. ZDub supplies the first.",
        "Leads are oxygen; ZDub is a supplier of sales opportunities, not the client's operator.",
        "Prospect = could buy. Qualified prospect = fits the customer the client actually wants.",
        "Agree in writing what counts as a lead before launch.",
        "Closing and delivery happen inside the client's door, so audit them too.",
        "Keep ZDub's own prospect list and each client's customer list separate."
      ],
      why: "PMT's owner wants 'spend X, get Y people.' A written lead definition and a clear split of who owns leads, closing and delivery protect ZDub when results get judged, and make the case study clean.",
      example: {
        title: "A written lead definition for PMT (draft to agree with the owner)",
        body: `"A lead is an adult in our target area who submits the beginner-course form with a working phone number and says they want to take a class in the next 90 days. Duplicates, spam, people outside the service area, and people asking only about used bikes don't count. ZDub delivers leads to PMT's inbox and text-back within minutes. PMT owns calling them back and registering them. We track lead → registration in one shared sheet."

The split: **leads** = ZDub. **Closing** = PMT's callback and registration. **Delivery** = the class itself and the review ask afterward.`
      },
      practice: [
        {
          prompt: "Write PMT's lead definition and the leads / closing / delivery split.",
          fields: ["Who counts as a lead (area, age, intent, timeline)", "Required info (name, phone, etc.)", "What does NOT count (duplicates, out of area, wrong fit)", "Leads: what ZDub owns", "Closing: what PMT owns (callback speed, registration)", "Delivery: what PMT owns (class, review ask)", "How it's tracked and reported"],
          rubric: ["Definition is specific enough to settle an argument", "Wrong fits and duplicates are named", "Each engine has a clear owner", "Tracking matches what the reports will show"]
        }
      ],
      today: { task: "Send PMT's owner the one-paragraph lead definition by email or text and ask him to reply 'agreed' (or edit it). Save his reply in the client folder.", output: "Lead definition agreed in writing", minutes: 20, suggested: false },
      check: [
        { q: "What three things does every business run on, and which one does ZDub supply?", a: "Getting leads, closing leads, and fulfilling for customers. ZDub supplies leads: getting the client in front of people who could buy." },
        { q: "Why agree on what counts as a lead before launch?", a: "So you don't discover at reporting or invoice time that you and the client meant different things. The ads, agreement, tracker and reports must all describe the same thing." },
        { q: "If ZDub only owns leads, why does it care about closing and delivery?", a: "Because closing and delivery happen inside the client's door and decide whether leads turn into money. Great leads into a broken doorway still look like 'the ads didn't work.'" }
      ]
    }
  ]
});
