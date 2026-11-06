HUB.tab({
  id: "ad-creative",
  title: "Ad Creative",
  icon: "spark",
  tagline: "What to make and why: ads that find the right people and give them a reason to act.",
  intro: "On Meta in 2026 the ad you make does most of the work your targeting used to do. This tab teaches you what to put in front of people: how to concept an idea, map the real reasons someone buys, build statics with Paul's four zones and seven archetypes, script video ads with open loops, and multiply one winner into many. Work through it and you'll be able to brief, build and check a full PMT or trades ad set before anyone spends a dollar. Part 7 turns it into an AI-assisted workflow: AI makes the volume, you keep the strategy, the real proof and the polish. For how to shoot, edit and design the pieces, see Content Production Craft; for reading results, see Meta Ads.",
  parts: [
    { id: "why", title: "Part 1 · Why creative wins" },
    { id: "concept", title: "Part 2 · The idea before the design" },
    { id: "reasons", title: "Part 3 · Reasons to buy" },
    { id: "statics", title: "Part 4 · Static ads that stop and pay" },
    { id: "video", title: "Part 5 · Video ads that hold and convert" },
    { id: "scale", title: "Part 6 · Multiply winners and keep the promise" },
    { id: "ai-workflow", title: "Part 7 · The AI-assisted creative workflow" }
  ],
  trackers: [],
  lessons: [
    {
      id: "adc-01",
      part: "why",
      title: "Creative is the targeting",
      minutes: 10,
      tags: ["Platform fact (re-check)", "Playbook", "Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "The Andromeda Ad Playbook (10/30/26)", section: "01 The big idea; 02 Principle 1 and Principle 5", who: "ZDub field guide compiled from a breakdown of Meta's 10/28/26 Andromeda article" },
        { doc: "King Kong Meta Ads Playbook (Meta-Ads-Playbook.txt)", section: "Part 1, Section 02 Meet Andromeda; Section 13 The One-Keyword Hack: Creative is the Targeting", who: "King Kong agency playbook" },
        { doc: "ZDub Guide 00 Master Index V2", section: "Core principle 6: Creative is the targeting", who: "Cam (10/15/26, 9/17/26), Paul Snowman (10/19/26)" },
        { doc: "ZDub Guide 02 Meta Ads Setup V2", section: "4. Targeting", who: "Cam, 10/15/26" },
        { doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26", section: "Key Finding 1 (Meta's April 2025 guidance via Jon Loomer: creative diversification is the best lever; no official creative-count quota); Part 2 Principle 6", who: "Research playbook" }
      ],
      alsoIn: ["Mastery Guide Ch 18 (The big shift)", "Social Media Playbook TL;DR", "Guide 02 Meta Ads Setup", "Index principle 6"],
      idea: "Meta's ad delivery runs in stages. The first stage, called **Andromeda**, looks at a giant pile of ads and picks a short list of candidates for each person every time they open Facebook or Instagram. A second system then ranks that short list. The catch: **an ad that misses the shortlist can't win later**, no matter how good the offer or how strong its click-through rate would have been.\n\nHow does Andromeda decide? It reads your image, video, headline, copy and offer, then matches those signals against what Meta knows about each person's behavior, interests and current context. So whoever your ad *implies* is who Meta goes looking for. Show a nervous 40-year-old beginner in gear for the first time, say “never ridden before,” and Meta hunts for people who look like that. Show a generic bike on a white background and Meta has nothing to match.\n\nThat flips the old job. You used to stack interests in the ad set. Now the mentors set location and leave the rest open:\n\n- Cam (10/15): drop a pin and radius around the service area, leave age, gender and detailed targeting alone. “The more you specify, the more costs go up.” Let the creative do the targeting.\n- Cam (9/17): be direct. If you beat around the bush, Meta shows the ad to “the beat around the bush people.”\n- Paul (10/19): “The image stops and the copy pays.”\n\nThe Andromeda playbook (10/30/26) adds the practical rule: **give every ad clear context** — who it's for, what situation it speaks to, and why they'd buy. Say the product, the person and the situation out loud and on screen in the first few seconds. Vague ads give the system nothing to connect to.\n\nKing Kong's version is the **one-keyword hack**: duplicate a winner and swap one category word (“dental,” “Woodland,” “returning riders”) or the person in the image. Same skeleton, new signal, new pocket of buyers. For local businesses the strongest keyword is usually the place.\n\nThese are platform facts from the newest docs. Meta changes fast, so re-check in your own account.",
      keyPoints: [
        "Andromeda builds a shortlist first; an ad that isn't shortlisted can't win the auction.",
        "Meta reads your creative to decide who sees it: whoever the ad implies is who it finds.",
        "Set location (and minimum age if needed), leave everything else broad, and put the targeting in the ad.",
        "Name the person, the situation and the product in the first seconds, in words and on screen.",
        "One swapped word or face (place, niche, life stage) can open a new pocket of buyers."
      ],
      why: "Most local agencies still sell “targeting.” If ZDub sells and builds clear, specific creative instead, PMT and trades clients get cheaper leads from the same budget, and you have a better story than the agency they fired.",
      example: {
        title: "PMT: same class, two very different signals",
        before: "Photo of a shiny bike on a white background. Headline: “Motorcycle classes available. Sign up today!”",
        after: "Phone photo of a nervous adult student in a borrowed helmet at the Woodland range, instructor beside them. Headline: “Never touched a motorcycle? This Woodland class starts from zero.” Body names the M1 goal, says bikes and helmets are provided, and mentions the first hour is walking the bike.",
        body: "The first ad tells Meta nothing about who should see it, so it gets shown to whoever is cheapest. The second tells Meta: adult, never ridden, near Woodland, wants a license, worried about being new. That's the person PMT wants, and the ad pre-qualifies them before they click."
      },
      practice: [
        {
          prompt: "Rewrite one generic ad so the creative does the targeting. Use PMT or a Sacramento-area roofer. Name the person, the situation and the place.",
          fields: ["Business and the generic version", "Who the new ad implies (person + situation + place)", "New headline", "What's in the image or first frame", "One one-keyword variant (swap place, niche or life stage)"],
          rubric: ["A stranger could say exactly who the ad is for", "The place or niche word appears in the headline or first line", "The image shows that person or situation, not a product on white", "The variant changes only one signal"],
          model: "Roofer. Generic: “Quality roofing at fair prices.” Implies: Carmichael homeowner with a 20+ year-old roof that just leaked in the first storm. Headline: “Carmichael homeowners: if your ceiling stained after last week's storm, read this.” Image: real phone photo of a brown ceiling stain with a red circle. Variant: swap “Carmichael” for “Citrus Heights.”"
        }
      ],
      today: { task: "Open PMT's current ads (or draft one if none are live). For each, write the person, situation and place it implies in one line. Rewrite the weakest so all three are in the headline and first frame, then write two one-keyword variants (different town, different rider type that PMT actually serves).", output: "1 rewritten PMT ad + 2 keyword variants in PMT's ad doc", minutes: 30, suggested: false },
      check: [
        { q: "Why can a great ad still get no results under Andromeda?", a: "If it lacks clear context it may never make the candidate shortlist, and an ad that misses the shortlist can't win later." },
        { q: "What targeting does Cam set for a local lead campaign?", a: "A pin and radius around the real service area; leave age, gender and detailed targeting alone and let the creative do the targeting." },
        { q: "What is the one-keyword hack?", a: "Duplicate a winning ad and swap one category word (place, niche, avatar) or the person in the image, so Meta hunts a new pocket of buyers with the same skeleton." }
      ]
    },
    {
      id: "adc-02",
      part: "why",
      title: "Every ad has two jobs: be worth consuming, then sell the click",
      minutes: 8,
      tags: ["Playbook"],
      source: [
        { doc: "King Kong Meta Ads Playbook (Meta-Ads-Playbook.txt)", section: "Part 1, Section 03 The Larger Market Formula; Section 04 The Two Jobs of Every Ad", who: "King Kong agency playbook" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18, The two jobs of every ad", who: "Book-based curriculum summarizing the King Kong playbook" }
      ],
      alsoIn: ["Mastery Guide Ch 18"],
      idea: "Meta publishes a “Most Widely Viewed Content” report every year. What tops it? **News and gossip.** People open Facebook and Instagram to be informed and entertained, not to watch your brand video. King Kong's point: don't fight that behavior, ride it. So every ad has exactly two jobs.\n\n**Job 1: Deliver news, value or a finding.** Give people something worth consuming for its own sake: a new class date, a surprising number, a thing most people get wrong, a before-and-after they haven't seen. If the ad would be worth reading even if nobody bought anything, it passes.\n\n**Job 2: Sell the click.** Bake in enough curiosity that people click at a higher rate than the other advertisers in the auction. King Kong says Meta rewards that with better placements and lower CPMs. The ad's job is the click; the landing page's job is the sale.\n\nWhy aim this way? King Kong's **larger market formula**: in any market only a small slice (they put it around 3%) is ready to buy right now. Most advertisers fight over that slice with “buy now” offers and discounts, which is expensive. Meta lets you reach the other 97% who aren't thinking about the problem yet, name a problem they have or will have, and warm them up. “You're not just hunting the 3%. You're farming the 97%.”\n\nFor PMT, the 3% are people Googling “motorcycle class near me” this week. The 97% are the guy watching riders roll by in traffic, the woman whose partner just bought a bike, the person who has had “get my M1” on their list for five years. An ad that only says “Book now” talks to the 3%. An ad that delivers a finding (“Most people who drop a bike in class do it in the first 20 minutes, walking it. Here's why that's fine.”) earns the attention of the 97%.",
      keyPoints: [
        "News and gossip dominate what people view on Meta; ads that look like news or value get consumed.",
        "Job 1: give news, value or a finding worth consuming on its own.",
        "Job 2: build in curiosity so the right people click more than they click other ads.",
        "Only a small slice of any market is ready to buy now; Meta lets you farm the rest.",
        "The ad sells the click; the landing page sells the product."
      ],
      why: "Local business ads are almost all “Call us today!” to the ready-now 3%. Ads that do both jobs reach a much bigger pool for PMT and trades clients, which is how ZDub beats agencies running the same tired offers.",
      example: {
        title: "Roofer: from ad-shaped to news-shaped",
        before: "“Sacramento's #1 roofer. Free estimates. Call today!”",
        after: "“What inspectors keep finding on 1990s roofs in Rancho Cordova this fall (and the 10-second check you can do from your driveway).”",
        body: "The after version delivers a finding (Job 1) and opens a gap only a click closes (Job 2). It also names the place and the house age, so it targets too. It only works if the finding is true: ask the roofer what they actually see on those roofs."
      },
      practice: [
        {
          prompt: "For PMT and one trade, write an ad line that does both jobs. Then explain which job each part does.",
          fields: ["PMT: the news, value or finding", "PMT: the curiosity that sells the click", "Trade: the news, value or finding", "Trade: the curiosity that sells the click"],
          rubric: ["The finding is true and specific (you could check it)", "It would be worth reading even with no offer", "There's a gap that only clicking closes", "It talks to people not yet shopping, not only the ready-now buyers"],
          model: "PMT finding: “Bikes and helmets are provided at the class, so you don't need to own anything to start.” Curiosity: “Here's what the first hour actually looks like for someone who's never sat on a bike.” HVAC finding: “Units over 12 years old fail most often on the first 100-degree week.” Curiosity: “The one sound that means yours is next.” (Use only if the HVAC owner confirms it.)"
        }
      ],
      today: { task: "Ask PMT (or check its reviews and FAQs) for three true things most first-time riders don't know. Turn each into a two-part ad line: a finding plus a curiosity gap. Save them as headline candidates.", output: "3 news-style headline candidates for PMT", minutes: 20, suggested: false },
      check: [
        { q: "What are the two jobs of every ad?", a: "1) Deliver news, value or a finding people want to consume. 2) Sell the click with enough curiosity to out-click other advertisers." },
        { q: "What does “farm the 97%” mean?", a: "Most of a market isn't ready to buy now; instead of fighting over the ready few, use Meta to reach the rest, name their problem and warm them up." }
      ]
    },
    {
      id: "adc-03",
      part: "why",
      title: "The hyperdopamine test: interrupt, intrigue, specific benefit",
      minutes: 9,
      tags: ["Playbook"],
      source: [
        { doc: "King Kong Meta Ads Playbook (Meta-Ads-Playbook.txt)", section: "Part 1, Section 05 The Hyperdopamine Ad Framework; Section 06 Anatomy of a Hyperdopamine Ad", who: "King Kong agency playbook" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18, The “hyperdopamine” ad framework; Anatomy of a winning ad", who: "Book-based curriculum" }
      ],
      alsoIn: ["Mastery Guide Ch 18", "Copywriting tab (headlines, lead-ins, body copy)"],
      idea: "King Kong calls this its most universal ad model. Your ad competes with Netflix, the UFC and every gossip page for attention, so it has to give the brain a hit of reward. They call an ad that does that a **hyperdopamine ad**, and it has three parts:\n\n1. **Pattern interrupt.** An image or opening weird, raw or striking enough to stop the scroll.\n2. **Burning intrigue.** A curiosity gap, in the image and the headline, that only a click closes.\n3. **Specific big benefit.** A clear payoff aimed at your exact market, so the right person thinks “I want that.”\n\nScore any ad you make: **three for three is hyperdopamine, two is mediocre, one is dead on arrival.** The two failure modes explain why. Pure intrigue with no targeted benefit is clickbait: people click, but the wrong people, and Meta can't learn who to find. A targeted benefit with no intrigue reaches the right people, but most never notice it. King Kong's line: “You want clickbait. You just want *targeted* clickbait.” Then the page has to deliver on the promise.\n\nThe skeleton of every winning King Kong ad:\n\n- **Scroll-stopping image** (pattern interrupt)\n- **Eyeball-grabbing headline** (intrigue + big specific benefit in one line)\n- **Slippery lead-in** (first 1–3 lines above “See more”; continue the curiosity, end mid-thought)\n- **Intriguing link description** (small text under the image: curiosity space, not your tagline)\n- **Butter body copy** (long and interesting, grade 5, one angle)\n- **Non-threatening CTA** (“Learn More” won their tests for cold traffic)\n\nThe writing pieces (headline, lead-in, body) are taught in the Copywriting tab. Here, use the three-part score as a gate: no ad leaves your desk below 3/3.",
      keyPoints: [
        "Hyperdopamine = pattern interrupt + burning intrigue + specific big benefit.",
        "3/3 ships; 2/3 is mediocre; 1/3 is dead on arrival.",
        "Intrigue without a targeted benefit brings the wrong clicks; benefit without intrigue gets ignored.",
        "Targeted clickbait is the goal, and the landing page must deliver what the ad promised.",
        "The skeleton: image, headline, lead-in, link description, body, low-pressure CTA."
      ],
      why: "A simple 3-point score lets you judge your own drafts and a client's old ads in seconds, and explain to a prospect exactly why their current ads aren't working.",
      example: {
        title: "Scoring two PMT drafts",
        before: "Image: PMT logo over a stock photo of a smiling rider. Headline: “Learn to ride with PMT.” Score: interrupt 0, intrigue 0, specific benefit 0.",
        after: "Image: raw phone shot of a student's boots on the pegs, instructor's hand pointing at the clutch lever. Headline: “Never ridden? Here's what happens in the first hour of class (bikes provided).” Score: interrupt 1 (raw, odd close-up), intrigue 1 (what happens?), benefit 1 (start from zero, nothing to own).",
        body: "The fix didn't need a designer. It needed a real photo from the range and a headline that pairs a question with a concrete payoff."
      },
      practice: [
        {
          prompt: "Score three real ads (one PMT or your draft, two from the Meta Ad Library in local services) on the hyperdopamine test. Then fix the weakest.",
          fields: ["Ad 1: what it is + score (interrupt / intrigue / benefit)", "Ad 2: what it is + score", "Ad 3: what it is + score", "Your 3/3 rewrite of the weakest (image + headline)"],
          rubric: ["Each score names what earns or loses each point", "The rewrite has a visual oddity or rawness, not a stock or logo image", "The headline has both a curiosity gap and a concrete benefit for a named market", "The benefit is true for that business"]
        }
      ],
      today: { task: "Pull PMT's last 3 ads or your 3 newest drafts. Score each 0–3. Rewrite any that score under 3 until it's 3/3, and log the before/after scores.", output: "3 scored ads and at least 1 rewrite at 3/3", minutes: 25, suggested: false },
      check: [
        { q: "Name the three components of a hyperdopamine ad.", a: "Pattern interrupt, burning intrigue, specific big benefit for the exact market." },
        { q: "Why is pure clickbait a problem on Meta?", a: "It gets clicks from the wrong people, so Meta can't learn who to find; the bait has to be targeted with a specific benefit." },
        { q: "Which CTA button did King Kong find wins for cold traffic, and why?", a: "“Learn More,” because the ad sells the click, not the product; a high-pressure button contradicts that." }
      ]
    },
    {
      id: "adc-04",
      part: "why",
      title: "Make ads look like content, not ads",
      minutes: 9,
      tags: ["Playbook", "Mentor"],
      date: "2026-10-30",
      source: [
        { doc: "King Kong Meta Ads Playbook (Meta-Ads-Playbook.txt)", section: "Part 1, Section 08 Pattern Interrupts: Winning the Scroll War (incl. The Burner Account Trick)", who: "King Kong agency playbook" },
        { doc: "ZDub Guide 03 Ad Creative V2", section: "4. The 8 checks (#7 Looks like a post, not a banner); More inputs; 10. Study and inputs", who: "Paul Snowman (10/19/26), Jason (8/18/26), Clayton Bell (8/19/26)" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Meta ads, testing and creative → Research and judgment", who: "Tayt Shelman (10/30/26)" }
      ],
      alsoIn: ["Mastery Guide Ch 18 (What stops the scroll)", "Organic Social tab"],
      idea: "“Make your ads look like content. Not ads.” King Kong calls it the first rule of advertising. People have been trained for decades to skip ads, so don't fight it, exploit it: before someone can buy they have to consume, and before they consume they have to not skip.\n\nA **pattern interrupt** is anything that makes the brain go “wait, what is that?” for half a second. Half a second is enough; then they read the headline. Things that stop the scroll:\n\n- A weird prop in someone's hand\n- A raw, iPhone-shot photo that doesn't look like an ad\n- A small inset image that creates a second focal point\n- A known face doing something unusual\n- A hand-drawn red circle or arrow on a native photo\n- Faces with extreme expressions (shock, confusion, laughter)\n- One high-contrast color in an otherwise neutral frame\n\nThings that don't: stock photos of smiling professionals, **your logo**, a product on white, the founder doing a thumbs-up, anything that obviously looks like an ad.\n\nThe mentors agree. Paul's 8 pre-launch checks include “Looks like a post, not a banner?” and he says no logo, price list or phone number on statics (10/19). Jason: “Ugly ads routinely outperform beautiful ones” (8/18). Clayton: “Organic can be the best ads and vice versa” (8/19).\n\n**How to learn what “native” looks like in a niche:**\n\n1. **Burner account trick** (King Kong): make a fresh Instagram or TikTok, follow the big pages and creators in the niche, engage for 20–30 minutes. The feed now serves you the top native content. That's your swipe file.\n2. **Steal from your own organic** (King Kong): an organic post from the last 90–180 days with unusually high engagement or shares can go straight into Ads Manager with a headline and lead-in. Organic proof is the cheapest creative test there is.\n3. **Meta Ad Library** (Tayt, 10/30): sort for the oldest ads still running. “People don't keep paying for losers.” Paul (10/19) also points to big e-commerce advertisers like AG1 and RYZE for study.",
      keyPoints: [
        "People skip ads; make yours look like the posts they already stop for.",
        "Pattern interrupts: odd props, raw phone photos, inset images, red circles, extreme faces, one pop of color.",
        "Logos, stock smiles and products on white don't stop anyone.",
        "Build a native swipe file with a burner account; reuse your best organic posts as ads.",
        "In the Ad Library, the oldest ads still running are the proven ones."
      ],
      why: "Native-looking ads are cheaper to make and usually cheaper to run, which is exactly what a small local budget needs. They also let ZDub turn PMT's best organic posts into ads with almost no extra production.",
      example: {
        title: "PMT: banner vs native",
        before: "Navy banner, PMT logo top left, “Motorcycle Safety Course · Register Now · Call 555-…”, three bullet points and a stock photo of a rider on a highway.",
        after: "A slightly crooked phone photo from the range: a student mid-laugh after stalling, instructor grinning beside them, a red circle around the student's hand on the clutch. Caption-style text in the top third: “Everyone stalls the first time. That's literally what the class is for.”",
        body: "The after version looks like something a friend posted. It interrupts (red circle, real laugh), it's honest, and it handles the biggest first-timer fear without a single bullet point."
      },
      practice: [
        {
          prompt: "Set up your native swipe file for local services and pull three examples. For each, name the pattern interrupt and how you'd use it.",
          fields: ["Example 1: what it is + the interrupt it uses", "Example 2: what it is + the interrupt it uses", "Example 3 (oldest still-running ad you found in the Ad Library): what it is + how long it's run", "Which of these you'll copy the format of for PMT, and how"],
          rubric: ["At least one comes from the oldest-running ads in the Ad Library", "Each names a specific interrupt from the list", "The PMT plan copies the format, not the content", "None of the PMT plans relies on a logo or stock photo"]
        }
      ],
      today: { task: "Look through PMT's (or ZDub's) organic posts from the last 90–180 days. Pick the one with the most engagement or shares and turn it into an ad draft: add a headline and a 2-line lead-in. If nothing stands out, make one native-style static from a real range photo with a red circle on one detail.", output: "1 native-style ad draft for PMT ready for review", minutes: 30, suggested: false },
      check: [
        { q: "What is a pattern interrupt?", a: "Anything that makes the brain pause for half a second (“wait, what is that?”), long enough to read the headline." },
        { q: "How does the burner account trick work?", a: "Create a fresh account, follow and engage with the top creators in the niche for 20–30 minutes, and the feed shows you the best native content to model." },
        { q: "What does Tayt look for in the Meta Ad Library, and why?", a: "The oldest ads still running, because people don't keep paying for ads that lose." }
      ]
    },
    {
      id: "adc-05",
      part: "concept",
      title: "Think now, design later: strategy, concept, execution",
      minutes: 9,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 13 The Big Idea & Creative Concepting: Ogilvy: the Big Idea; Pete Barry: think now, design later", who: "David Ogilvy (Ogilvy on Advertising), Pete Barry (The Advertising Concept Book), Roy H. Williams" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 13 Recall 13.1–13.4; Drill D13.1 Three layers; Answer Key", who: "Workbook" }
      ],
      alsoIn: ["AI-Assisted Creative Playbook (10/30/26) Part 1 (Hey Whipple: concept beats execution; a weak idea is not rescued by rendering)"],
      idea: "Most beginners jump straight to fonts, filters and editing. Pete Barry, an Ogilvy art director turned teacher, built *The Advertising Concept Book* on the opposite rule: **think now, design later.** He fills it with quick hand-drawn “roughs,” because an idea that only works when it's beautifully produced isn't an idea yet. His test: **a real concept can survive being drawn badly on a napkin.**\n\nBarry separates every ad into three layers, and you judge each one on its own:\n\n1. **Strategy (the what).** Is it saying the right thing to the right person? This is the brief.\n2. **Concept (the idea).** Is there a fresh, relevant, simple way to express that strategy?\n3. **Execution (the craft).** Is it well written, designed, shot and edited?\n\nMost bad ads fail at layer 1 or 2 and try to make up for it at layer 3. Roy Williams lists this among his classic mistakes: great production without great copy. Slick, clever and funny are poor substitutes for informative, believable, memorable and persuasive.\n\n**Ogilvy's five questions** help you recognize a big idea (paraphrased):\n\n1. Did it make me gasp when I first saw it?\n2. Do I wish I'd thought of it myself?\n3. Is it unique?\n4. Does it fit the strategy perfectly?\n5. Could it run for years?\n\nNote question 4: a big idea serves the strategy, it isn't just clever. Ogilvy also prized **story appeal**, a small mystery that makes people wonder “what's the story here?” His shirt model wore an eye patch, and millions looked twice.\n\nThe Workbook's lesson from scoring real ads: you'll often find beautiful execution (5/5) on a weak concept (2) with unclear strategy (2). A raw phone video with a great idea often beats a polished spot with none. That's good news for a one-person agency with an iPhone.",
      keyPoints: [
        "Concept before craft: if it only works with great production, it isn't a concept.",
        "Judge strategy, concept and execution separately; most bad ads fail at the first two.",
        "Ogilvy's five questions: gasp, wish I'd thought of it, unique, fits the strategy, could run for years.",
        "“Fits the strategy” is a veto, no matter how much you love the idea.",
        "Story appeal: one small mystery makes people look twice."
      ],
      why: "When a client's ads flop, you need to know which layer broke. Fixing the edit won't save a wrong message, and knowing the difference keeps ZDub from wasting production time.",
      example: {
        title: "Three-layer score on a typical HVAC ad",
        body: "Ad: a polished drone video of a new AC unit with upbeat music and “Stay cool this summer!”\n\n- Strategy 2/5: no clear audience (who? where? what problem?).\n- Concept 1/5: “stay cool” is everyone's first idea.\n- Execution 5/5: gorgeous footage.\n\nFix the top layers first: strategy becomes “homeowners in Elk Grove with 12+ year-old units who'll face a breakdown on the hottest week,” and the concept becomes Paul's cost-of-waiting line, “The most expensive day to replace your AC is the hottest day of the year.” That idea works on a napkin."
      },
      practice: [
        {
          prompt: "Workbook Drill D13.1: Pick five ads (any brands, include one local service ad and one PMT ad or draft). Score strategy, concept and execution 1–5 each and name the weakest layer.",
          fields: ["Ad 1: S / C / E + weakest layer", "Ad 2: S / C / E + weakest layer", "Ad 3: S / C / E + weakest layer", "Ad 4: S / C / E + weakest layer", "Ad 5 (PMT): S / C / E + weakest layer + the fix"],
          rubric: ["Each layer is scored separately, with a reason", "You spot at least one ad with strong execution and weak strategy or concept", "The PMT fix starts at the weakest layer, not with design", "The PMT concept could be sketched on a napkin"],
          model: "PMT draft: S 3 (first-timers, but no place or fear named), C 2 (generic “learn to ride”), E 4 (nice photo). Weakest: concept. Fix: Ogilvy-style story appeal: a photo of a garage with a dusty helmet and a sticky note, “someday,” headline “Five years of ‘someday.’ One weekend in Woodland.”"
        }
      ],
      today: { task: "Take the next ad you planned to make for PMT. Before opening Canva, write its strategy in one sentence and sketch three concepts as stick-figure roughs or one-line descriptions. Score each with Ogilvy's five questions and keep the best.", output: "3 napkin roughs and 1 chosen PMT concept with its strategy line", minutes: 25, suggested: false },
      check: [
        { q: "What are Pete Barry's three layers for judging an ad, in order?", a: "Strategy, concept, execution." },
        { q: "What is Barry's test for a real concept?", a: "It can survive being drawn badly on a napkin." },
        { q: "Which of these is NOT one of Ogilvy's five questions: “Could it run for years?” or “Will it win an award?”", a: "“Will it win an award?” The five are: gasp, wish I'd thought of it, unique, fits the strategy perfectly, could run for years." }
      ]
    },
    {
      id: "adc-06",
      part: "concept",
      title: "No brief, no ad: the campaign brief and the five-question filter",
      minutes: 10,
      tags: ["Book", "Playbook", "Platform fact (re-check)"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 13, The creative brief template", who: "Book-based curriculum (Barry, Sullivan)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 13 Recall 13.12; Client Lab L13", who: "Workbook" },
        { doc: "The Andromeda Ad Playbook (10/30/26)", section: "02 Principle 2: Build a broader creative plan without losing discipline (five questions, ad brief template)", who: "ZDub field guide from a breakdown of Meta's 10/28/26 article" }
      ],
      alsoIn: ["AI-Assisted Creative Playbook (10/30/26) Part 4A Step 2 (the brief, human-written and AI-assisted; see adc-29)"],
      idea: "Two briefs keep creative focused: one for the whole campaign and one for every single ad.\n\n**The campaign brief (Mastery Guide Ch 13, nine parts):**\n\n1. **The problem:** what business problem must the ads solve?\n2. **The audience:** who exactly, and at what awareness stage?\n3. **The insight:** what human truth about them can you build on?\n4. **The single-minded proposition:** the one thing to say.\n5. **The support:** proof and reasons to believe.\n6. **The desired response:** what they should think, feel and do.\n7. **Tone:** from the client's voice guide.\n8. **Mandatories:** offer, deadline, legal, brand assets.\n9. **Channels and formats:** where it runs, what sizes and lengths.\n\n**The ad-level filter (Andromeda Principle 2).** Testing more reasons to buy means making more ads, which can drift into random content. So before any ad gets made, answer five questions:\n\n1. **Who is this relevant to?** (which persona and ad set it belongs in)\n2. **What situation or problem does it address?** (the moment of relevance Andromeda reads)\n3. **What reason to buy does it introduce?** (a distinct hypothesis, not a reworded copy)\n4. **What evidence supports it?** (demo, testimonial, number, visual)\n5. **What will we learn from testing it?** (“If this wins, it tells us that ___ matters to ___.”)\n\n**Rule: if an ad can't answer all five, it doesn't get produced.**\n\nName every ad the same way so tests stay readable: **Persona_Bucket_Angle_Format_v1** (for example, FirstTimer_Objection_LookFoolish_TalkingHead_v1).\n\nThe Workbook's Client Lab adds one habit from Roy Williams: send the brief to anyone helping you 24 hours ahead, so the quiet thinkers arrive with ideas.",
      keyPoints: [
        "Campaign brief: problem, audience, insight, single-minded proposition, support, response, tone, mandatories, channels.",
        "Ad filter: who, what situation, what reason to buy, what evidence, what we'll learn.",
        "If an ad can't answer all five, don't make it.",
        "Name ads Persona_Bucket_Angle_Format_v1 so you can read tests at a glance.",
        "One single-minded proposition per campaign; one distinct reason to buy per ad."
      ],
      why: "Briefs are what let you make 10–20 ads a week without them blurring together, and they're what you show a client so they judge the work against the goal instead of their taste.",
      example: {
        title: "PMT ad brief (from the Andromeda playbook's sample)",
        body: "- **Name:** FirstTimer_Objection_LookFoolish_TalkingHead_v1\n- **Relevant to:** never-ridden adults near Woodland who want their endorsement\n- **Situation:** wants to sign up but pictures being the worst rider in class\n- **Reason to buy:** objection, “I'll look like a fool in front of everyone”\n- **Evidence:** instructor on camera, real range footage, a nervous-student review quote\n- **Format:** 9:16 talking head with range B-roll, 20–30 seconds\n- **What we'll learn:** whether facing the social fear head-on beats leading with freedom or the license for first-timers"
      },
      practice: [
        {
          prompt: "Workbook Client Lab L13, step 1: write a full nine-part campaign brief for one real PMT campaign.",
          fields: ["Problem", "Audience + awareness stage", "Insight", "Single-minded proposition", "Support", "Desired response (think / feel / do)", "Tone", "Mandatories", "Channels and formats"],
          rubric: ["The proposition is one thing, not a list", "The insight is a human truth, not a feature", "Support is real proof PMT can show", "Mandatories include PMT's copy rules (no “cheap,” “easy,” “discount,” “guaranteed,” no pass promises)"]
        },
        {
          prompt: "Write three ad briefs under that campaign using the five questions and the naming convention.",
          fields: ["Ad 1: name + who / situation / reason / evidence / learn", "Ad 2: name + who / situation / reason / evidence / learn", "Ad 3: name + who / situation / reason / evidence / learn"],
          rubric: ["Each ad tests a different reason to buy", "Each has evidence you can actually film or show", "The “what we'll learn” line is a real hypothesis", "Names follow Persona_Bucket_Angle_Format_v1"]
        }
      ],
      today: { task: "Write the nine-part brief for PMT's next campaign and three five-question ad briefs under it. Send the brief to PMT (or anyone helping) so they can react before you build.", output: "1 campaign brief + 3 named ad briefs in PMT's folder", minutes: 40, suggested: false },
      check: [
        { q: "List the nine parts of the creative brief template.", a: "The problem; the audience (and awareness stage); the insight; the single-minded proposition; the support; the desired response (think, feel, do); tone; mandatories; channels and formats." },
        { q: "What are the Andromeda playbook's five questions for every ad?", a: "Who is it relevant to? What situation or problem? What reason to buy? What evidence? What will we learn from testing it?" },
        { q: "What's the naming convention for ads?", a: "Persona_Bucket_Angle_Format_v1." }
      ]
    },
    {
      id: "adc-07",
      part: "concept",
      title: "Generate 40 ideas on purpose with trigger questions",
      minutes: 10,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 13: Luke Sullivan: the creative process, honestly; Mario Pricken: creativity as technique; Roy Williams: ideas by connection; A repeatable creative process", who: "Luke Sullivan (Hey Whipple, Squeeze This), Mario Pricken (Creative Advertising), Roy H. Williams (The Wizard of Ads)" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 13 Recall 13.6–13.9, 13.11; Drill D13.2 Pricken triggers; Answer Key", who: "Workbook" }
      ],
      alsoIn: ["AI-Assisted Creative Playbook (10/30/26) Part 1 (Hey Whipple: write many headlines and throw most away; let AI generate 50 angles, keep 3)"],
      idea: "Ideas aren't a gift. Mario Pricken analyzed 200+ award-winning ads and found roughly thirty repeatable techniques behind them. His **Kick-Start Catalogue** is a list of trigger questions you run a brief through to force new ideas. The Mastery Guide's set:\n\n- **Exaggerate:** take the benefit to an absurd extreme.\n- **Shrink or enlarge:** make the product or problem tiny or enormous.\n- **Change perspective:** the product's view, the pet's, the neighbor's, from above.\n- **Analogy and metaphor:** “A tune-up is a physical for your house.”\n- **Paradox and illusion:** a visual contradiction that makes people look twice.\n- **Absence:** show what happens when the product is missing.\n- **Before and after:** the most dramatic contrast you can show honestly.\n- **Swap the context:** put it somewhere it doesn't belong.\n- **Personify:** make the problem a character, a villain.\n- **Borrow a format:** breaking news, nature documentary, dating profile, movie trailer.\n- **Wordplay:** twist a familiar phrase.\n- **Humor:** the funny truth everyone in the category recognizes.\n\nLuke Sullivan's rules sit on top: **start with the truth**, keep it simple, keep it brief, use **conflict** (a villain or tension), and **generate volume, then edit**. Your first ten ideas are the clichés everyone else would think of. Push past them.\n\nRoy Williams adds two: creativity is **seeing connections** between unrelated things, and ideas stick when they're unpredictable (his Velcro image: the brain's hooks catch loops arranged randomly, not in tidy rows).\n\nThe repeatable process (8 steps): **brief → immerse → generate 30–50 rough ideas → incubate → select → make it a series → execute natively → present and protect.** This lesson is steps 2–4: know the product cold (ride along, read the reviews), then sketch, don't polish, and step away before you judge.",
      keyPoints: [
        "Creativity is technique: run every brief through trigger questions.",
        "Aim for 30–50 rough ideas; the first ten are usually clichés.",
        "Start from a true, human detail; conflict and villains make ads interesting.",
        "Borrowed formats (news, documentary, trailer) are fast, proven idea starters.",
        "Sketch, don't polish; step away before selecting."
      ],
      why: "Clients pay for fresh ideas, and the agency that can produce 40 on demand never runs dry on test concepts. This turns “I'm not creative” into a checklist.",
      example: {
        title: "Pricken triggers on PMT (from the Mastery Guide)",
        body: "- **Exaggerate:** a nervous beginner wrapped in bubble wrap and pillows, then cut to them riding confidently in normal gear.\n- **Change perspective:** the training bike “narrates” its 1,000th nervous rider.\n- **Borrow a format:** a nature documentary: “Here we observe the first-time rider in its natural habitat, the parking lot…”\n- **Absence:** an empty garage with a “someday” sticky note on the wall.\n\nRoofer versions from the Answer Key: a family eating dinner under umbrellas (absence); the roof's diary of 30 winters (perspective); a true-crime parody, “The Case of the Mystery Stain” (borrowed format)."
      },
      practice: [
        {
          prompt: "Workbook Drill D13.2: run one real brief (PMT or a trade) through all twelve triggers. Write at least two rough one-line ideas per trigger. No polishing.",
          fields: ["Exaggerate", "Shrink or enlarge", "Change perspective", "Analogy and metaphor", "Paradox and illusion", "Absence", "Before and after", "Swap the context", "Personify", "Borrow a format", "Wordplay", "Humor"],
          rubric: ["24+ ideas total", "At least a few go past the obvious first idea", "Each is a one-line rough, not a finished ad", "Ideas are built on something true about the business or customer"]
        }
      ],
      today: { task: "Workbook Client Lab L13 step 3: generate 40 rough ideas for PMT's next campaign using the triggers. Circle the five you'd show PMT. Film or sketch the one that's easiest to make this week.", output: "40-idea list with 5 circled, 1 rough made (sketch, photo or 10-second phone test)", minutes: 45, suggested: false },
      check: [
        { q: "What is Mario Pricken's Kick-Start Catalogue?", a: "A list of trigger questions you run a brief through to force new ideas." },
        { q: "“A tune-up is a physical for your house” uses which trigger?", a: "Analogy and metaphor." },
        { q: "In Williams' Velcro metaphor, what makes an ad stick?", a: "Loops arranged randomly: the unpredictable phrase, image or angle." }
      ]
    },
    {
      id: "adc-08",
      part: "concept",
      title: "Turn the big idea into a series, then protect it",
      minutes: 8,
      tags: ["Book"],
      source: [
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 13: A repeatable creative process (steps 5–8); ZDub application: One big idea, many executions; Common mistakes", who: "Pete Barry, Luke Sullivan, Roy H. Williams" },
        { doc: "ZDub Marketing Mastery Workbook", section: "Ch 13 Recall 13.5, 13.10, 13.13; Drills D13.3–D13.4; Client Lab L13; Answer Key", who: "Workbook" }
      ],
      idea: "After you generate ideas, steps 5–8 of the creative process turn the best one into a campaign and get it past the client intact.\n\n**Select.** Judge each idea on Barry's three layers and Ogilvy's five questions. Keep only ideas scoring 4 of 5 that clearly fit the strategy. “Fits the strategy” is a veto: a funny idea that doesn't serve the proposition goes, however much you love it.\n\n**Make it campaign-able.** On social, the big idea is often a **repeatable format**: a recurring character, a weekly segment, a signature visual. Ogilvy's “could it run for years?” points you here. A strong series has a fixed structure (same opening, same beat, same ending) so the client's team can produce it without you. The Mastery Guide's model is **“See What We See”** for a trades client: every job documented with a short phone video of the problem and the fix. It becomes reels, static ads (screenshots of the video), review prompts, a website section and a sales tool. One idea, fifty pieces of content, and a positioning statement.\n\n**Execute natively** for each platform (see Content Production Craft).\n\n**Present and protect.** Explain the strategy before you show the idea, so the client judges it against the goal, not their taste. Then recommend one idea and say why. Know in advance which line you won't let get cut. Sullivan calls the danger **“pecked to death by ducks”**: a strong idea dying through endless small revisions. Williams tells the same story: the client's spouse or neighbor cuts the strongest line and the ad becomes safe and useless. Sullivan also says “make the idea bigger, not the logo.”\n\nOne more warning from Williams: **don't confuse response with results.** An ad that gets lots of comments isn't automatically an ad that sells. Judge creative by what it does to the business.",
      keyPoints: [
        "Select with Barry's layers + Ogilvy's questions; strategy fit is a veto.",
        "The best social ideas are repeatable formats with a fixed opening, beat and ending.",
        "One idea like “See What We See” can feed reels, statics, the site and sales.",
        "Present strategy first, recommend one idea, and protect the strongest line.",
        "Comments aren't sales: judge ideas by business results."
      ],
      why: "A series means PMT and trade clients can keep producing content between your shoots, and protecting the work keeps their ads from being watered down into the same safe ads their competitors run.",
      example: {
        title: "Making a PMT idea a series",
        body: "Idea: “The First Hour.” Every episode follows one real student (with permission) through their first hour on the range.\n\n- **Fixed opening:** helmet going on, on-screen text “Hour 1. Never ridden.”\n- **Beat:** one fear named in their words, one small win (first roll, first stop).\n- **Fixed ending:** the grin, then “Bikes and helmets provided. Next class: [real date].”\n\nShows up as: a reel series, static ads from the grin frame, Stories Q&A, a “What your first hour looks like” section on the class page, and a link PMT staff can text nervous callers."
      },
      practice: [
        {
          prompt: "Workbook Drill D13.4: take your top idea and make it a series.",
          fields: ["Series name", "The repeatable format (opening / beat / ending)", "Episodes 1–8, one line each", "How it shows up as a reel, a static ad, a story, a website section and a sales tool", "The one line you won't let get cut, and why"],
          rubric: ["Fixed structure someone else could repeat", "Eight episodes that are genuinely different", "All five channel uses are concrete", "The protected line serves the single-minded proposition"]
        }
      ],
      today: { task: "Workbook Client Lab L13 steps 4–5: pick your top three ideas for PMT, write a one-page presentation (business problem and insight first, then the three ideas, then your recommendation), and send it or present it.", output: "1-page PMT creative presentation, sent", minutes: 35, suggested: false },
      check: [
        { q: "What does “pecked to death by ducks” describe?", a: "A strong idea dying through endless small revisions." },
        { q: "What does Williams mean by “confusing response with results”?", a: "An ad that gets lots of comments isn't automatically an ad that sells; judge creative by what it does to the business." },
        { q: "Why present the strategy before the idea?", a: "So the client judges the idea against the goal instead of personal taste." }
      ]
    },
    {
      id: "adc-09",
      part: "reasons",
      title: "Build a reason-to-buy map: motivations, situations, objections",
      minutes: 10,
      tags: ["Platform fact (re-check)", "Playbook"],
      source: [
        { doc: "The Andromeda Ad Playbook (10/30/26)", section: "02 Principle 1: Test different reasons to buy; 03 Launch playbook steps 1–2; 04 Applied to PMT: Persona 1 and Persona 2", who: "ZDub field guide from a breakdown of Meta's 10/28/26 Andromeda article" }
      ],
      alsoIn: ["Mastery Guide Ch 3 (Know the customer)", "Meta Ads tab (one persona per ad set)"],
      idea: "The old way: test an **angle** like “improve sleep” as one big promise. If it flopped, the whole angle got thrown out. The Andromeda playbook says break each angle into **reasons to buy**, because the newer system reads context and the same person responds to different reasons on different days. Each reason is a separate hypothesis about why someone might buy, and each can become its own ad.\n\nThe **reason-to-buy map** has three columns:\n\n- **Motivations:** why they want it (“wake up with energy,” “be more patient with my kids”).\n- **Situations:** when the problem shows up (“mind racing after a stressful workday,” “still awake before an early alarm”).\n- **Objections:** what makes them hesitate (“will this actually work for me?”, “I've tried other products, why is this different?”).\n\nThree of each gives you nine distinct ads and nine ways for Meta to match the offer to the right person at the right moment.\n\n**Rules:**\n\n1. Start with **one persona** (who they are, what they want, what they fear, where they are in the decision). Each persona becomes one ad set.\n2. List **at least 3 motivations, 3 situations and 3 objections**.\n3. Use **the customer's own words**. Mine reviews, comments, DMs and sales calls. Not your marketing language.\n4. Turn each question into a creative test: “I have no time in the morning” → demonstrate the routine; “Why should I believe this?” → explain the evidence; “Is it worth the price?” → price per use.\n\nThe playbook built two PMT personas: the **nervous first-timer** (fear: looking like a fool in front of the class) and the **licensed but uneasy rider** (froze when a car cut them off; the path to PMT's 1-on-1, intermediate and advanced classes).\n\nThis is the newest platform reading (10/30/26) of a YouTube creator's take on Meta's article. Treat it as strong creative strategy and check it in your own account.",
      keyPoints: [
        "Break each angle into motivations, situations and objections; each one is its own ad.",
        "Minimum 3 of each, in the customer's own words.",
        "Mine reviews, comments, DMs and sales calls for the words.",
        "One persona = one map = one ad set.",
        "Match each reason to the creative that answers it best."
      ],
      why: "This is the fastest way to turn one client conversation into 9+ distinct ads, and it's exactly the context Andromeda needs to find buyers. It also gives you something concrete to show a prospect on a sales call.",
      example: {
        title: "PMT Persona 1: the nervous first-timer (from the playbook)",
        body: "Has never ridden, wants the license endorsement, wants to learn right from the start. Biggest fear: looking like a fool in front of everyone else in class."
      },
      table: {
        head: ["Motivations", "Situations", "Objections"],
        rows: [
          ["“I want the freedom of riding on the weekends.”", "“Sitting in traffic watching riders roll by.”", "“I'll be the slowest one and look like a fool.”"],
          ["“I want to learn it right from day one, not pick up bad habits.”", "“Staring at the DMV site, confused about the process.”", "“I've never touched a motorcycle. I don't even know what a clutch is.”"],
          ["“My buddy just got a bike and I want to ride with him.”", "“Family keeps saying motorcycles are dangerous.”", "“What if I drop the bike in front of everyone?”"],
          ["“This is my year to finally do it.”", "“Already looking at bikes online with no license.”", "“I don't own a bike or gear.” / “Is it worth the money?”"]
        ]
      },
      practice: [
        {
          prompt: "Build the reason-to-buy map for PMT's Persona 2, the licensed but uneasy rider (or for a new persona like the gift buyer or the returning rider). Use real words from reviews, DMs or calls where you can.",
          fields: ["Persona: who they are, what they want, what they fear", "Motivation 1 / 2 / 3", "Situation 1 / 2 / 3", "Objection 1 / 2 / 3", "Where you got the words (reviews, DMs, calls)"],
          rubric: ["At least 3 in each column", "Written in the rider's words, not marketing language", "Each line could become its own distinct ad", "Situations are specific moments, not general feelings"],
          model: "Persona 2 (from the playbook). Motivations: “I want to master the machine, not just survive on it.” “Keep up on group rides without holding back.” “Peace of mind for me and my family.” Situations: “Froze when a car cut me off.” “Tense every time the road starts to curve.” “Back on a bike after years away.” Objections: “I already have my license.” “I've been riding for years. I'm fine.” “Will I be stuck with beginners?”"
        },
        {
          prompt: "Do the same map for one Sacramento-area trade prospect (roofer, HVAC, med spa or detailer).",
          fields: ["Persona", "Motivations (3)", "Situations (3)", "Objections (3)"],
          rubric: ["Three of each", "Uses homeowner/customer language", "At least one objection is about price or trust", "At least one situation is a specific trigger moment"]
        }
      ],
      today: { task: "Read PMT's last 30 Google reviews and any DMs or call notes. Copy exact phrases into a reason-to-buy map for one persona (3+ motivations, 3+ situations, 3+ objections). Star the three you'll make ads for first.", output: "1 PMT reason-to-buy map in customer language, 3 starred", minutes: 40, suggested: false },
      check: [
        { q: "What are the three columns of a reason-to-buy map?", a: "Motivations (why they want it), situations (when the problem shows up), objections (what makes them hesitate)." },
        { q: "How many of each should you list, and where do the words come from?", a: "At least 3 of each, in the customer's own words, mined from reviews, comments, DMs and sales calls." },
        { q: "What was the PMT first-timer's biggest fear in the playbook?", a: "Looking like a fool in front of everyone else in class." }
      ]
    },
    {
      id: "adc-10",
      part: "reasons",
      title: "Let the angle choose the format",
      minutes: 8,
      tags: ["Platform fact (re-check)", "Playbook"],
      source: [
        { doc: "The Andromeda Ad Playbook (10/30/26)", section: "02 Principle 3: One person, many reasons, many formats (Matching angle type to format); 04 Applied to PMT: Objection to creative test; Sample campaign build", who: "ZDub field guide (note: the format pairings were added by the guide's author to round out the video's framework)" }
      ],
      alsoIn: ["Meta Ads tab (1 persona = 1 ad set structure)", "AI-Assisted Creative Playbook (10/30/26) Part 4A Step 3 (concept matrix: angles × formats × personas; see adc-29)"],
      idea: "Once you have reasons to buy, the next question is how to show each one. The Andromeda playbook's rule: **the format follows the angle, not the other way around.** Don't decide “we're making a talking head” and then hunt for something to say. Decide the reason, then pick the format that explains it best.\n\n**General pairings** (the guide notes these are general guidance added to the video's framework):\n\n- **A fear or objection** (“what if I…”) → talking head that addresses it directly; customer testimonial.\n- **How something works or feels** → demo or POV footage; behind the scenes.\n- **Proof or credibility** → review screenshots, stats static, before/after, testimonial montage.\n- **Price or value** → static or carousel that breaks down what's included.\n- **A specific moment or situation** → a short scene or skit that recreates the moment, then the solution.\n\nThe structure that goes with it: **1 persona = 1 ad set = several angle ads inside**, each in its best format. You don't need a separate interest-targeted ad set per motivation; test motivations as different ads in one persona ad set, and log learnings at the persona level (“first-timers respond to X”). The playbook suggests **3 to 6 distinct angle ads per ad set** as a practical start. (Budget and campaign settings live in the Meta Ads tab.)\n\nFor PMT, the playbook mapped each first-timer objection to a creative test. Notice that no two use the same format for the same reason.",
      keyPoints: [
        "Pick the reason to buy first, then the format that explains it.",
        "Fears → talking head or testimonial; how it works → demo/POV; proof → reviews or stats; price → value breakdown; moments → a scene.",
        "One persona ad set holds several angle ads, each in its own best format.",
        "Log what you learn by persona, not by individual ad.",
        "3–6 distinct angle ads per ad set is a practical start."
      ],
      why: "Choosing format by angle stops you from making five talking heads that all say the same thing, and gives Meta genuinely different creative to match to different moments.",
      example: {
        title: "PMT objections → creative tests (from the playbook)",
        body: "- “I'll look like a fool in front of everyone.” → Talking-head instructor: “Everyone in this class is new. That's the point.” Paired with real student testimony about being nervous on day one.\n- “I don't even know what a clutch is.” → Demo of the first hour: walking the bike, then learning the clutch one step at a time.\n- “What if I drop it?” → The lightweight training bikes and an instructor calmly showing how to pick one up.\n- “I don't own a bike or gear.” → Static or carousel: “Bike and helmet provided. Just show up.”\n- “What do actual students think?” → Review montage from the range's Google reviews.\n- “Is it worth the money?” → Value breakdown: what's included, plus the cost of learning the hard way on your own bike."
      },
      practice: [
        {
          prompt: "Take the three reasons you starred on your reason-to-buy map. Pick the best format for each and write a one-line creative test.",
          fields: ["Reason 1 → angle type → format → one-line test", "Reason 2 → angle type → format → one-line test", "Reason 3 → angle type → format → one-line test", "Which format you're missing in the set, and why that's OK or not"],
          rubric: ["Each reason gets the format that explains it best, not a default", "At least two different formats across the three", "Each test names what's on screen", "The evidence shown is real and available"]
        }
      ],
      today: { task: "Plan PMT's first-timer ad set: list 4–5 angle ads (reason + format + one line of what's on screen), modeled on the playbook's sample build (Ad A talking head, Ad B demo, Ad C static, Ad D testimonial, Ad E carousel). Make the static one today.", output: "PMT ad set plan + 1 finished static", minutes: 40, suggested: false },
      check: [
        { q: "What format does the playbook suggest for a fear or objection?", a: "A talking head that addresses it directly, or a customer testimonial." },
        { q: "What does “1 persona = 1 ad set” mean for testing motivations?", a: "Test different motivations as separate ads inside one persona ad set rather than building an interest-targeted ad set for each." }
      ]
    },
    {
      id: "adc-11",
      part: "reasons",
      title: "Concept tests vs iteration tests: don't kill an idea after one bad execution",
      minutes: 8,
      tags: ["Platform fact (re-check)", "Playbook"],
      source: [
        { doc: "The Andromeda Ad Playbook (10/30/26)", section: "02 Principle 4: Different-looking ads can still test the same idea (The two kinds of testing); 03 Launch playbook step 8", who: "ZDub field guide from a breakdown of Meta's 10/28/26 article" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18, The big shift (consequence 3: creative variety is fuel)", who: "Book-based curriculum" }
      ],
      alsoIn: ["Meta Ads tab (hook rate, hold rate and reading results)", "AI-Assisted Creative Playbook (10/30/26) Part 9 Mistake 3 (“fake diversity”: 20 tweaks of one concept)"],
      idea: "Picture three ads: “Make your morning routine easier” filmed in a bathroom, the same message filmed in a bedroom, and the same message with a different opening. They **look** different but test **one idea**. They can't tell you whether the idea works; they only help you improve how it's presented.\n\nSo the Andromeda playbook separates two kinds of testing:\n\n- **Concept testing.** Question: does this reason to buy work? What changes: the motivation, situation or objection. When: first, to find what resonates. Mistake to avoid: **killing a concept after one weak execution.**\n- **Iteration testing.** Question: what's the best way to present this winning reason? What changes: hook, opening line, setting, visuals, on-screen text, delivery, length. When: after a concept earns spend and results. Mistake to avoid: **calling three hook swaps “three new concepts.”**\n\nThe Mastery Guide adds a platform note: 2026 guides report that Meta groups near-identical ads together, so changing only a headline or button doesn't count as a new concept. Different people, settings, formats, angles and openings do.\n\n**Do this:**\n\n1. Before you rule out a promising angle, try it in **two or three different formats**. Ask: “Did I present this angle in the right format?”\n2. Once you have a winner, spin off **3 to 5 versions that change one element each**: the hook, the first frame, the setting, the speaker or the on-screen text.\n3. **Label** ads so you can tell concept tests from iterations at a glance (the naming convention helps: change the Angle field for concepts, the version number for iterations).\n\nHow to read which ads are winning (hook rate, hold rate, cost per result) is taught in the Meta Ads tab.",
      keyPoints: [
        "Concept test = a different reason to buy. Iteration = a different way to show the same reason.",
        "Give a promising angle 2–3 formats before you kill it.",
        "On a winner, make 3–5 versions that each change one element.",
        "Hook swaps are iterations, not new concepts.",
        "Label tests so concepts and iterations are obvious."
      ],
      why: "Most beginners kill good ideas too early and mistake small tweaks for real tests. Getting this right means PMT's budget finds real winners instead of shuffling the same idea around.",
      example: {
        title: "PMT: the “bikes provided” reason",
        body: "**Concept test:** “I don't own a bike or gear” as the reason to buy. First execution, a plain text static, gets little spend. Don't kill it yet. Try it as a 15-second walk past the row of training bikes and helmets, and as a carousel of what's provided.\n\n**Iteration test:** the walk-past video wins. Now make versions that change one thing each: open on the helmet instead of the bikes; a different instructor speaking; on-screen text “Own nothing. Ride Saturday.” vs “Bike and helmet provided”; a 9-second cut vs 15-second cut."
      },
      practice: [
        {
          prompt: "Pick one PMT reason to buy. Plan its concept test in three formats, then plan five iterations for whichever you think will win.",
          fields: ["The reason to buy", "Format 1 / Format 2 / Format 3", "Iteration 1–5 (one changed element each)", "How you'll label them"],
          rubric: ["The three formats are genuinely different (not three hooks)", "Each iteration changes exactly one element", "Labels separate concept from iteration", "Everything shown is something PMT can actually film"]
        }
      ],
      today: { task: "Look at PMT's current or planned ads and label each as a concept or an iteration. If you find two “concepts” that are really the same idea, merge them and replace one with a genuinely new reason from your map. Make that new ad.", output: "Labeled PMT test list + 1 new concept ad", minutes: 30, suggested: false },
      check: [
        { q: "What changes in a concept test vs an iteration test?", a: "Concept: the motivation, situation or objection (reason to buy). Iteration: hook, opening, setting, visuals, text, delivery or length." },
        { q: "What should you do before killing a promising angle?", a: "Test it in at least two or three different formats." },
        { q: "After finding a winner, how many versions should you spin off, and how?", a: "3 to 5, each changing one element (hook, first frame, setting, speaker or on-screen text)." }
      ]
    },
    {
      id: "adc-12",
      part: "statics",
      title: "Why statics: a hook with nothing behind it",
      minutes: 8,
      tags: ["Mentor", "Playbook"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "The short version; 1. Why statics", who: "Paul Snowman, Static Ads Strategy (10/19/26); Cam (10/15/26)" },
        { doc: "King Kong Meta Ads Playbook (Meta-Ads-Playbook.txt)", section: "Part 1, Section 09: Before the formats, statics vs video", who: "King Kong agency playbook" }
      ],
      idea: "Paul (10/19) calls a static ad **“a hook with nothing behind it.”** It's processed in about 100 milliseconds, so it has to be direct. His case for statics:\n\n- **Speed.** You can make 10 statics in an afternoon. A flop on Monday means new ones Tuesday.\n- **No footage chase.** Video depends on the client sending footage, and Paul called the client the least reliable person in a video pipeline.\n- **Sound off.** He said about 85% of people scroll with sound off.\n- **Filter.** A static tells who it's for in one look.\n\nBut it **isn't static vs video**. Paul: concept, angle and audience fit decide performance. Ideally run both. Paul and Cam have both moved fully to AI editing, with no video editors.\n\nKing Kong pushes the same direction harder. Video is slow (they spend 2–2.5 months on a polished sales video); statics can be produced by the hundreds in an afternoon. Andromeda is a “hungry panda” that needs constant fresh creative or ads fatigue. Across their accounts, a handful of native-style statics often match or beat high-polish video at roughly 1/30th the cost. Their takeaway isn't “video is dead,” it's **“don't let video production volume be your bottleneck.”** Fund the static engine alongside video. If you can only pick one, they pick statics.\n\nReal mentor data (Sterling Mold, Paul 10/19 and Cam 10/15) keeps this honest: in week one, statics hit about $25 CPL with strong CTR and the lowest CPMs, but by 10/8 statics were running about $10 per lead more than video. Statics are the fast, cheap test engine; video often wins the long run. Run both.",
      keyPoints: [
        "A static is processed in ~100 ms: one direct idea or nothing.",
        "Speed is the advantage: 10 in an afternoon, new ones the next day.",
        "No waiting on the client for footage; works sound-off.",
        "Concept, angle and audience fit beat format. Run statics and video both.",
        "Don't let video volume be your bottleneck."
      ],
      why: "As a solo operator, statics let you test PMT and trade offers every week without a shoot. They're also how you show a prospect real creative before they've sent you anything.",
      example: {
        title: "A week of PMT testing without a shoot",
        body: "Monday: 6 statics from existing range photos (two reasons to buy × three visuals). Thursday: two get spend, four don't. Friday: 4 new statics on the winning reason, plus a request to PMT for one 20-second selfie video saying the same thing. The video joins next week. Statics kept testing moving while video caught up."
      },
      practice: [
        {
          prompt: "List what you'd need to make 10 PMT statics this afternoon, and spot what's missing.",
          fields: ["Real photos you already have (count + what)", "Reasons to buy you'll use (from your map)", "Offers or specific next steps that are real", "What's missing and who to ask"],
          rubric: ["Lists real assets, not wishes", "At least two different reasons to buy", "The next step is specific and true", "A plan to get missing photos from PMT"]
        }
      ],
      today: { task: "Make 5 PMT statics in under 90 minutes from photos you already have: one reason to buy, five different visuals. Time yourself.", output: "5 PMT statics + your time in the learning log", minutes: 45, suggested: false },
      check: [
        { q: "What does Paul mean by “a hook with nothing behind it”?", a: "A static is processed in about 100 ms with no video behind it, so it must make its one point directly." },
        { q: "Is it statics vs video?", a: "No. Paul says concept, angle and audience fit decide performance; ideally run both." },
        { q: "What did Sterling Mold's data show over time?", a: "Statics started strong (about $25 CPL, high CTR, lowest CPMs), but by 10/8 they ran about $10 more per lead than video." }
      ]
    },
    {
      id: "adc-13",
      part: "statics",
      title: "The four zones: Stop, Qualify, Belief, Act",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "2. The four zones; The short version", who: "Paul Snowman, Static Ads Strategy (10/19/26)" }
      ],
      alsoIn: ["Index principle 6 (“the image stops and the copy pays”)"],
      idea: "Paul's (10/19) model for every static: **four zones, four jobs.** Anything not doing one of them gets deleted.\n\n1. **STOP (tension).** An oddly specific detail that makes the problem visible. Paul calls it the “jar.” Not neon banners. A rusted condenser. A brown ceiling stain. A student's white-knuckle grip on the bars.\n2. **QUALIFY.** A headline **inside the image** that tells the right person it's about them. Paul calls it the cocktail party effect: you hear your own name across a loud room.\n3. **BELIEF.** Proof they can see, not adjectives. Red X vs green check, old way vs your way, a readout, a real number, a “not for” checklist.\n4. **ACT.** A small, specific next step. **Give rather than ask:** “$250 consultation credit,” “free 15-minute drone roof audit,” “one of 12 assessments this month.” A rounded-button look under the image.\n\n**The alien test.** Read the ad as an alien born yesterday. Who is this for? If the answer is “anyone,” rewrite it.\n\n**Other rules from Paul:**\n\n- The old 20% text rule is gone, but clutter gets punished. One sharp point. Some of the best statics are all text.\n- **No logo, price list, bio, phone number or email** on statics.\n- The biggest mistake is a **flyer-style ad**: logo, bullet list, warranty, financing, stars.\n- “The image stops and the copy pays.”\n\nFor PMT, Zone 4 has to be real and fit PMT's copy rules: a named class date or a seat count only if it's true, never “cheap,” “easy,” “discount” or “guaranteed.”",
      keyPoints: [
        "Stop: an oddly specific detail that makes the problem visible.",
        "Qualify: a headline inside the image that names who it's for.",
        "Belief: visible proof, not adjectives.",
        "Act: a small, specific give, not a big ask.",
        "No logo, phone number or bullet-list flyer; run the alien test."
      ],
      why: "This is the fastest diagnostic you have. Run any client's static through the four zones and you can tell them exactly which job is missing, which is how Paul diagnosed Sterling Mold's ads.",
      example: {
        title: "PMT static, zone by zone",
        before: "Flyer: PMT logo, “Motorcycle Safety Course,” 5 bullets (certified instructors, small classes, all levels, weekend dates, gear provided), phone number, 5 stars.",
        after: "**Stop:** close-up phone photo of a beginner's boots flat on the ground, bike between their knees, instructor's hand on the handlebar. **Qualify (in image):** “Never ridden? Start here, Woodland.” **Belief:** small checklist, “✓ Bike provided ✓ Helmet provided ✓ First hour is walking the bike.” **Act (button look):** “See Saturday's open seats.”",
        body: "Every element does one of the four jobs. The logo, phone and bullet list are gone because none of them stop, qualify, prove or invite."
      },
      practice: [
        {
          prompt: "Design one static for PMT and one for a Sacramento trade using the four zones. Write what goes in each zone.",
          fields: ["PMT: Stop", "PMT: Qualify (headline in image)", "PMT: Belief", "PMT: Act", "Trade: Stop / Qualify / Belief / Act"],
          rubric: ["The Stop is an oddly specific, real detail", "The headline passes the alien test", "Belief is something you can see, not an adjective", "Act is a small, specific, true give", "No logo, phone number or bullet flyer"]
        }
      ],
      today: { task: "Build the PMT four-zone static you just planned in Canva (4:5, 1080×1350). Then run the alien test on it with someone who doesn't know PMT: ask “who is this for?” and fix it until they answer correctly.", output: "1 PMT four-zone static that passes the alien test", minutes: 40, suggested: false },
      check: [
        { q: "Name Paul's four zones and their jobs.", a: "Stop (tension, an oddly specific detail), Qualify (headline in the image saying who it's for), Belief (visible proof), Act (small specific next step)." },
        { q: "What is the alien test?", a: "Read the ad as an alien born yesterday: who is it for? If the answer is “anyone,” rewrite it." },
        { q: "What does Paul call the biggest mistake on statics?", a: "The flyer-style ad: logo, bullet list, warranty, financing, stars." }
      ]
    },
    {
      id: "adc-14",
      part: "statics",
      title: "The seven static archetypes",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "3. The seven static archetypes; Paul's HVAC worked example", who: "Paul Snowman, Static Ads Strategy (10/19/26)" }
      ],
      idea: "Paul (10/19) gave seven proven layouts. Pick the one that fits the client's problem, then fill the four zones.\n\n1. **Micro split / state reversal.** Show the *after*; let the words handle the before. One offer per ad. Med spa: “The 45-minute jawline reset,” CTA “Claim $250 facial consultation credit” plus location.\n2. **Diagnostic warning.** Looks like an inspection report with a hazard-stripe headline. Commercial roof thermal scan; free 15-minute drone thermal audit for warehouses. It filters out homeowners. For B2B, talk liabilities and assets.\n3. **Mechanism diagram.** Flip common advice with X vs check. The mechanism is a believable reason the common advice fails and yours works, and it *absolves the viewer* (it's not their fault). Agencies must explain why word of mouth, Google or SEO didn't work.\n4. **Not-for-you checklist.** “Please don't call us if…” next to who it IS for. High-ticket remodelers, custom builders, consultants. For tire-kicker problems when speed to lead is already fine.\n5. **Red marker scroll.** Phone photo with red circles and arrows, crossed-out price (“$450 → free with your exam”). High CTR, bottom of funnel.\n6. **Old way vs new way.** Two columns. For agencies: Meta ads vs word of mouth.\n7. **Cost of waiting.** Fix now $X vs wait $Y, using **real invoice numbers**. Roofing, solar, plumbing, HVAC, tax. Paul would *not* use this for an agency's own ads.\n\n**Paul's HVAC worked example.** Goal: replacement jobs, not tune-ups. Offer: free 20-point AC inspection. Ideal customer: homeowner with a 12+ year-old unit.\n\n- Red marker: rusted condenser photo, “If your AC unit looks like this, read this before summer.”\n- Cost of waiting: “The most expensive day to replace your AC is the hottest day of the year.”\n- Not-for-you: “Don't call if you want the cheapest band-aid fix.”\n\nNotice: one client, one offer, three archetypes. That's a ready-made test set.",
      keyPoints: [
        "Seven archetypes: micro split, diagnostic warning, mechanism diagram, not-for-you, red marker, old vs new, cost of waiting.",
        "Mechanism ads absolve the viewer: the common advice failed, not them.",
        "Not-for-you filters tire-kickers for high-ticket jobs.",
        "Cost of waiting needs real invoice numbers; Paul won't use it for an agency's own ads.",
        "One offer through three archetypes = a ready test set."
      ],
      table: {
        head: ["Archetype", "Best for", "Local example"],
        rows: [
          ["Micro split", "Visible transformations", "Med spa, detailer, PMT nervous → confident"],
          ["Diagnostic warning", "Inspections, B2B, hidden problems", "Roof thermal scan, mold, HVAC"],
          ["Mechanism diagram", "Explaining why past fixes failed", "ZDub's own ads (why word of mouth stalled)"],
          ["Not-for-you", "High-ticket, tire-kicker problems", "Remodelers, custom builders"],
          ["Red marker", "Bottom of funnel, high CTR", "Real job photo with circles and arrows"],
          ["Old way vs new way", "Category switches", "Meta ads vs word of mouth"],
          ["Cost of waiting", "Problems that get pricier", "Roofing, solar, plumbing, HVAC (real invoices)"]
        ]
      },
      why: "Archetypes turn a blank Canva page into a fill-in-the-blanks job. For trades, Guide 03's applied notes point to diagnostic warning, not-for-you, red marker and cost of waiting; for ZDub's own ads, mechanism and old vs new.",
      example: {
        title: "PMT through three archetypes",
        body: "Offer: a real upcoming beginner class with bikes and helmets provided.\n\n- **Micro split:** the after shot, a student grinning mid-turn through the cones. Words: “From ‘never touched a clutch’ to this. One weekend in Woodland.”\n- **Not-for-you:** “This class is NOT for you if you already ride every day. It IS for you if you've never sat on a bike and want your M1 the right way.”\n- **Old way vs new way:** “Learning on a friend's bike in a parking lot” vs “Training bikes, a range, an instructor beside you.”\n\nSkip cost of waiting for PMT unless there's a real, provable cost; avoid safety fear claims you can't back up."
      },
      practice: [
        {
          prompt: "Pick one real offer (PMT or a trade prospect). Write the headline and image description for three different archetypes, like Paul's HVAC example.",
          fields: ["The client, offer and ideal customer", "Archetype 1: name + image + headline", "Archetype 2: name + image + headline", "Archetype 3: name + image + headline"],
          rubric: ["Three different archetypes, each fitting the problem", "Images are real or obtainable (client photos)", "Any number used is real", "Each headline would pass the alien test"]
        }
      ],
      today: { task: "Build the three archetype statics you just wrote in Canva, 4:5. Put them side by side and pick which you'd launch first and why.", output: "3 archetype statics for one offer", minutes: 45, suggested: false },
      check: [
        { q: "What makes a mechanism diagram work?", a: "It gives a believable reason the common advice fails and yours works, which absolves the viewer." },
        { q: "What does the cost-of-waiting archetype require, and where won't Paul use it?", a: "Real invoice numbers (fix now $X vs wait $Y); he wouldn't use it for an agency's own ads." },
        { q: "In Paul's HVAC example, what was the offer and ideal customer?", a: "A free 20-point AC inspection for homeowners with a 12+ year-old unit, aiming for replacement jobs." }
      ]
    },
    {
      id: "adc-15",
      part: "statics",
      title: "Six native formats, done honestly for local businesses",
      minutes: 9,
      tags: ["Playbook", "Book"],
      source: [
        { doc: "King Kong Meta Ads Playbook (Meta-Ads-Playbook.txt)", section: "Part 1, Section 09 The 6 Creative Formats That Print Money", who: "King Kong agency playbook" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18, The formats (honest local versions)", who: "Book-based curriculum" }
      ],
      alsoIn: ["Mastery Guide Ch 18"],
      idea: "King Kong cycles six formats through every account. Paul's archetypes (last lesson) are layouts for a *message*; these are *looks* that read as native content. Use both. The Mastery Guide adds an honest local version of each, and the honesty matters: never fake a conversation, a review or a news outlet.\n\n1. **Raw native.** A photo that looks like someone's iPhone shot; multiple people in frame works well. It doesn't look like an ad, so it gets served like content. *Local:* the instructor and a grinning student on the range; the crew on a roof.\n2. **SMS mockup.** A text-message screenshot with a relevant image. Texts read as 1:1, not advertising. *Local, honestly:* real customer messages with permission, or clearly stylized “what customers ask us” graphics. Never fabricate a conversation and present it as real.\n3. **Breaking news.** News-bulletin headline, news-still image. King Kong's single most reliable format, but **cap it around 30–40% of the mix**; Meta punishes monoculture. *Local, honestly:* real news only (“New: Saturday classes now in Cloverdale”). Don't imitate a real outlet's brand.\n4. **Native highlight.** A native photo with a hand-drawn red circle or arrow on one detail. Feels like someone showing you a secret. *Local:* the cracked shingle, the corroded valve, the correct foot position on the peg.\n5. **Native social post.** Main image plus a small inset image, gossip-style headline underneath, like the big news pages. *Local:* before photo plus an inset of the after.\n6. **Secret info / reveal.** A map, chart or screenshot with a teaser headline. Implies data and authority. *Local:* “The 4 Sacramento neighborhoods where we're replacing the most 1990s roofs” (only if the roofer's data says so).\n\nThe Mastery Guide adds three that work especially well for local services: **real Google review screenshots, before-and-after pairs, and selfie-style talking heads** from the owner or staff. King Kong's target: 10–15 ads per launch across the formats; the Guide says across at least four.",
      keyPoints: [
        "Raw native, SMS mockup, breaking news, native highlight, native social post, secret info.",
        "Breaking news is reliable but keep it to roughly a third of the mix.",
        "Honest versions only: real messages, real news, real data, no fake outlets.",
        "Add review screenshots, before/afters and selfie talking heads for local services.",
        "Aim for 10–15 ads per launch across at least four formats."
      ],
      why: "These formats are cheap to make from a phone and real client photos, and they don't trigger ad blindness. The honesty rules protect PMT's and ZDub's reputations and keep ads approved.",
      example: {
        title: "PMT in four native formats",
        body: "- **Raw native:** group photo at end of class, everyone holding helmets, slightly off-center.\n- **Native highlight:** student's hand on the clutch with a red circle: “This is the only thing you'll learn in the first 20 minutes.”\n- **Breaking news (real):** “New: weekday evening beginner class added in Woodland” over a range photo (only if PMT added one).\n- **Review screenshot:** a real 5-star Google review that mentions being nervous, cropped clean, with permission-safe display."
      },
      practice: [
        {
          prompt: "Plan one PMT or trade ad in four of the six formats plus one local extra. Write the honest version of each.",
          fields: ["Format 1 + what's in it", "Format 2 + what's in it", "Format 3 + what's in it", "Format 4 + what's in it", "Local extra (review, before/after or selfie) + what's in it", "Anything you had to change to keep it honest"],
          rubric: ["At least four different formats", "Every message, review, number or news item is real", "No imitation of a real news brand", "Breaking news isn't more than about a third of the set"]
        }
      ],
      today: { task: "Make two native-format statics for PMT today: one native highlight (real photo + red circle) and one review screenshot ad from a real Google review.", output: "2 native-format PMT statics", minutes: 35, suggested: false },
      check: [
        { q: "Why cap breaking-news ads at around 30–40% of the mix?", a: "King Kong says the algorithm punishes monoculture in the ad mix." },
        { q: "What's the honest local version of an SMS mockup?", a: "Real customer messages with permission, or clearly stylized “what customers ask us” graphics; never a fabricated conversation presented as real." }
      ]
    },
    {
      id: "adc-16",
      part: "statics",
      title: "Build statics with AI: real photos in, you assemble the ad",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "7. Building statics with AI (Logan's reference-image method; The LC 5-layer Gemini workflow; Static template copy structure; QC at thumbnail size; Three angle variations); Where the mentors disagree (Image tool)", who: "Logan McKinney (10/9/26, 10/13/26), Paul Snowman (10/19/26), LC AI Static Image Ads module and Static Ad Pre-Writing template" }
      ],
      alsoIn: ["Content Production Craft (Canva workflow)", "AI-Assisted Creative Playbook (10/30/26) Part 4A Step 5 and Part 5 (AI photo polish and the image prompt framework; see adc-31, adc-34)"],
      idea: "Two mentor-approved ways to make statics with AI. Both share one rule: **“Never let AI pull from thin air”** (Logan, 10/9). Feed it real context.\n\n**Logan's reference-image method (10/9, 10/13).** In Codex or ChatGPT, feed 5–10 statics you like (from Google, Pinterest or brands like AG1 and Hoka) plus the **client's real photo**, and ask it to “build a static ad campaign around this.” Codex makes about 5 images at once; Logan makes about 20 per barbershop client. Once it's locked in, save the prompt and systemize. For a $10/day trades client, make statics from the client's real job photos, post them organically, and test them in a campaign.\n\n**The LC 5-layer workflow (Gemini, about 30 minutes).** “90% of bad AI ads never decided who it's for.” Fill the brief first.\n\n1. **Brief:** city/area, audience, what you do in plain words, the offer (“too good to scroll past”), one CTA, company name, 2–3 colors, scene.\n2. **Logo:** refine in the same chat, remove the background, save logo.png.\n3. **Scene:** photorealistic, vertical 4:5 (1080×1350). Spell out scene, foreground, lighting, camera (35mm, f/4, natural depth of field), composition (empty space top third and lower right for text), no text or logos. Fix one thing at a time.\n4. **Brand the scene:** image-to-image, change nothing else. Save a clean background as a reusable canvas.\n5. **Copy:** *you* decide the offer; AI only formats it. No emojis or hype words.\n6. **Layout:** headline top third, offer card lower right, pill CTA, 60px from edges. Expect misspellings. **“AI generates the asset; you assemble the ad”** in Canva (Anton, Bebas Neue, Archivo Black).\n\n**QC at thumbnail size:** spelling; readable headline; location AND audience named; offer on the image (most people never read the caption); exactly one CTA; nothing in safe zones; hands, faces and clothing text normal at 200%; a claim you can deliver.\n\n**Paul's caution (10/19):** AI images are fine, but “if you can get images from the client though it is pretty much always better.” Logan (9/25): generate the flat photo and add numbers yourself; AI hallucinates numbers and text. Build a prompt library per client.",
      keyPoints: [
        "Never let AI pull from thin air: give it real photos, references and context.",
        "Fill the brief before any prompt; most bad AI ads never decided who they're for.",
        "You decide the offer; AI formats it. Add numbers and text yourself.",
        "AI generates the asset; you assemble the ad in Canva.",
        "Real client photos beat AI scenes for belief; save prompts that work."
      ],
      why: "This is how one person produces 20 statics per client per month. Collecting real photos at onboarding (“send me 20 job photos”) is the single biggest upgrade to belief.",
      example: {
        title: "PMT reference-image prompt",
        body: "Inputs: 6 reference statics (an outdoor brand, a gym, two driving schools from the Ad Library, two Pinterest layouts) + 3 real PMT range photos.\n\nPrompt: “You're building a static ad campaign for Pacific Motorcycle Training's beginner class in Woodland, CA, for adults who've never ridden. Use my real photos as the hero. Match the layout and type style of the references. Leave the top third clear for a headline. No text, no logos, no numbers in the image.” Then add the headline, “Bike and helmet provided,” and the CTA in Canva yourself."
      },
      practice: [
        {
          prompt: "Fill the LC static brief for PMT (or a trade prospect) before you prompt anything.",
          fields: ["City/area", "Audience", "What you do in plain words", "The offer (too good to scroll past, and true)", "One CTA", "2–3 colors", "Scene"],
          rubric: ["Audience and location are specific", "The offer is real and fits PMT's copy rules", "Exactly one CTA", "The scene is a real-looking place, not an abstract concept"]
        },
        {
          prompt: "Write your scene prompt using the LC structure.",
          fields: ["SCENE", "FOREGROUND", "LIGHTING / SETTING", "CAMERA", "COMPOSITION (where text goes)", "Exclusions (no text, no logos)"],
          rubric: ["Every part is filled", "Composition leaves room for headline and offer", "Says no text or logos", "Describes something PMT could actually look like"]
        }
      ],
      today: { task: "Make 3 PMT statics with AI using the reference method: 5+ references and at least one real PMT photo. Assemble the text in Canva, then run the LC thumbnail QC on each and fix what fails. Save the prompt in a PMT prompt library note.", output: "3 QC'd PMT statics + saved prompt", minutes: 45, suggested: false },
      check: [
        { q: "What does “never let AI pull from thin air” mean in practice?", a: "Feed it real context: the client's photos, reference ads, offer and call transcripts, not a bare prompt." },
        { q: "Why add numbers and text yourself instead of letting AI render them?", a: "AI hallucinates numbers and misspells text." },
        { q: "What does Paul say about AI images vs client photos?", a: "AI images are OK, but client images are pretty much always better." }
      ]
    },
    {
      id: "adc-17",
      part: "statics",
      title: "The 3x3x1 sprint and the 8 checks before launch",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "4. The 3x3x1 test and the 8 checks; 10. Study and inputs (Paul's homework)", who: "Paul Snowman, Static Ads Strategy (10/19/26)" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Meta ads, testing and creative → Campaign structure and testing", who: "Paul Snowman (7/28/26)" }
      ],
      alsoIn: ["Meta Ads tab (budgets, CBO, judging metrics)", "AI-Assisted Creative Playbook (10/30/26) Part 4A Step 6 (QA checklist for every asset; see adc-32)"],
      idea: "Paul's (10/19) static test is the **3x3x1 sprint**: **3 visuals × 3 headlines × 1 body = 9 ads in one ad set.** The three headlines come in three flavors:\n\n1. **Pain/warning** (“If your AC unit looks like this, read this before summer.”)\n2. **Mechanism** (why the usual fix fails and this works)\n3. **Speed** (how fast they get the result or the next step)\n\nBudget: ideally 2–3x target CPL per day. Judge each ad after it spends 3–5x target CPL. (How to read and act on the numbers lives in the Meta Ads tab.)\n\n**Older version, same mentor (7/28):** split ad sets by concept, 3 concepts × 3 hook variations = 9 ads at about $70/day, which Paul called “super healthy.” Variations are small changes, like a new hook or a different background on a static. Don't wait for one test to finish before launching more. The 10/19 version is newer; teach that, and note the earlier one.\n\n**The 8 yes/no checks** before anything launches:\n\n1. One idea?\n2. Stops at thumbnail size?\n3. Headline says who it's for (alien test)?\n4. Visible proof?\n5. CTA small and specific?\n6. Readable in one second on a phone?\n7. Looks like a post, not a banner?\n8. Every claim true and compliant?\n\n**Score: 8/8 launch. About 6, tweak and test. 5 or fewer, start over.**\n\nPaul's homework: run a 3x3x1 static test on your most frustrating campaign.",
      keyPoints: [
        "3 visuals × 3 headlines (pain, mechanism, speed) × 1 body = 9 ads.",
        "Budget ~2–3x target CPL/day; judge each ad after 3–5x target CPL.",
        "Paul's older 7/28 version: 3 concepts × 3 hooks at ~$70/day.",
        "8 checks: one idea, thumbnail stop, who it's for, proof, small CTA, 1-second read, post not banner, true and compliant.",
        "8/8 launch; ~6 tweak; 5 or less start over."
      ],
      why: "It gives every client test the same clean shape, so you learn which visual and which headline type works instead of guessing. The 8 checks are your quality gate before a client ever sees the work.",
      example: {
        title: "PMT 3x3x1",
        body: "**Visuals:** (A) nervous student gearing up, (B) row of training bikes and helmets, (C) student mid-turn grinning.\n\n**Headlines:**\n- Pain/warning: “Picturing yourself as the worst rider in class? Read this first.”\n- Mechanism: “Why learning on a friend's bike makes it harder, and how a training range fixes that.”\n- Speed: “Never ridden to riding the course in one weekend in Woodland.”\n\n**Body:** one honest body that explains bikes and helmets are provided, the first hour starts from zero, and how to see open seats. No pass promises, no “easy.”"
      },
      practice: [
        {
          prompt: "Plan a 3x3x1 for a real client (PMT or your most frustrating campaign).",
          fields: ["Visual A / B / C", "Headline: pain/warning", "Headline: mechanism", "Headline: speed", "The one body", "Target CPL and daily budget (2–3x CPL)"],
          rubric: ["Three visually distinct images", "Each headline is a different type", "Body works with all nine combos", "Budget follows Paul's 2–3x rule"]
        },
        {
          prompt: "Score your best existing static on the 8 checks.",
          fields: ["Checks passed (list numbers)", "Checks failed and why", "Score and verdict (launch / tweak / restart)", "The fix"],
          rubric: ["Every check answered yes or no honestly", "Verdict follows the 8 / 6 / 5 rule", "Fix targets the failed checks"]
        }
      ],
      today: { task: "Build the 9 PMT statics for your 3x3x1 in Canva (one template, swap visual and headline). Run each through the 8 checks and only keep the 8/8s; fix the rest.", output: "9 PMT statics, all 8/8, named for testing", minutes: 45, suggested: false },
      check: [
        { q: "What are the three headline types in Paul's 3x3x1?", a: "Pain/warning, mechanism, speed." },
        { q: "When do you judge each ad in the sprint?", a: "After it spends 3–5x target CPL." },
        { q: "What score means start over on the 8 checks?", a: "5 or fewer. 8/8 launch; about 6, tweak and test." }
      ]
    },
    {
      id: "adc-18",
      part: "statics",
      title: "Proof you can check, claims you can keep",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-19",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "5. Real data: Sterling Mold; New in V2: What winning ads share; 9. Compliance and honesty", who: "Paul Snowman (10/19/26), Cam (10/15/26), Logan McKinney (9/25/26), LC AI Static Image Ads module" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18, Policy: personal attributes", who: "Book-based curriculum" },
        { doc: "The Andromeda Ad Playbook (10/30/26)", section: "04 Applied to PMT: copy rules", who: "ZDub field guide" }
      ],
      alsoIn: ["AI-Assisted Creative Playbook (10/30/26) Part 2 Principle 7 and Part 8 Trust layer (real proof outranks rendered beauty; see adc-28)"],
      idea: "Belief is the zone most ads skip. The mentors' data shows why it matters and how to do it honestly.\n\n**Paul's Sterling Mold diagnosis (10/19).** Prior agency: $92 CPL; Cam's team: about $23 average. The statics' CTR was strong, so **Zone 1 (Stop) worked**. But Zone 2 was weak (“black mold” doesn't say who or where), Zone 3 used **online photos instead of the client's real inspections**, and Zone 4 had no specific offer.\n\n**What Logan's winners share (9/25).** His scoreboard static (one barbershop client's real month: $92K across 3 shops) spent about $500 for 12 booked calls. His new-hire video (“Barbershop owners, if you just hired a barber and their book is empty, this is for you”) booked calls at about $57 each. Both:\n\n1. **Say exactly who they're for** (“shops doing $30k+ a month”).\n2. **Focus on one specific thing** (one shop's real month; one situation, a new barber with an empty book).\n3. **Show something checkable** (real spend, real sales).\n\nHe retired the scoreboard when the numbers went stale and relaunched with fresh ones, and he was honest: the results “are not typical” and “I can't attribute every single piece of the growth to my actual ads.”\n\n**Compliance and honesty rules (Paul 10/19; LC module):**\n\n- Never make up stats, results or reviews. Use the client's real numbers, or a sourced stat cited in the primary text. AI may invent numbers.\n- Don't imply the viewer has a health condition; keep health angles soft.\n- Rejected ads are usually **personal-attribute or claim problems**: remove “are you struggling with…,” income promises and before/after implications. The Mastery Guide: “Are you overweight?” or “Struggling with debt?” can get ads rejected; use “people who…” or “anyone who…”\n- Generic free advice in ads trains the market that the paid solution won't work (Paul, citing Hormozi).\n\n**PMT's copy rules** (Andromeda playbook): no jargon; no “coach,” “cheap,” “easy,” “discount” or “guaranteed”; no refund or money-back language; no promise of passing the endorsement.",
      keyPoints: [
        "Winning ads: exactly who it's for, one specific thing, something checkable.",
        "Client's real photos and numbers beat stock and AI for belief.",
        "Never invent stats, results or reviews; refresh proof when it goes stale.",
        "Avoid personal-attribute phrasing (“Are you struggling with…”); use “people who…”",
        "PMT: no “cheap/easy/discount/guaranteed,” no refunds, no pass promises."
      ],
      why: "Honest, checkable proof is the only kind that keeps working and keeps ads approved. It's also ZDub's reputation: one fake review in a client ad can cost the account.",
      example: {
        title: "Fixing a PMT proof line",
        before: "“Pass your M1 guaranteed! 1000s of happy riders. Are you scared of riding?”",
        after: "“[Real number] riders trained at the Woodland range this year. Bikes and helmets provided. For people who've never ridden and want to learn the right way.”",
        body: "The before breaks three rules: a pass promise, a vague unprovable number, and personal-attribute phrasing. The after uses a number PMT can verify (fill it in only from their records), names who it's for, and adds visible proof (provided gear)."
      },
      practice: [
        {
          prompt: "Audit three ads (PMT drafts or a prospect's live ads) for proof and compliance.",
          fields: ["Ad 1: who / one thing / checkable proof? + any rule broken", "Ad 2: same", "Ad 3: same", "Rewrite of the worst one"],
          rubric: ["Checks all three winner traits", "Flags any invented or unverifiable claim", "Flags personal-attribute phrasing", "Rewrite uses only real, provable proof"]
        }
      ],
      today: { task: "Ask PMT for real proof you can use: 20 range photos, a real student count or class count, and permission to use 3 Google reviews. If PMT has results, film a short student testimonial and ask for a referral now. Log what you got.", output: "PMT proof folder started (photos, numbers, reviews, testimonial)", minutes: 30, suggested: true },
      check: [
        { q: "What three things did Logan's winning ads share?", a: "They said exactly who they're for, focused on one specific thing, and showed something checkable." },
        { q: "What was Paul's diagnosis of Sterling Mold's statics?", a: "Stop worked (strong CTR); Qualify was weak (no who or where); Belief used online photos, not real inspections; Act had no specific offer." },
        { q: "What usually gets ads rejected, per the LC module?", a: "Personal-attribute or claim problems: “are you struggling with,” income promises and before/after implications." }
      ]
    },
    {
      id: "adc-19",
      part: "statics",
      title: "Statics as outreach: give the ad before you pitch",
      minutes: 7,
      tags: ["Mentor"],
      date: "2026-10-09",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "8. Using statics for outreach", who: "Logan McKinney, Client Acquisition pt 1 (10/9/26)" },
        { doc: "ZDub Guide 03 Ad Creative V2", section: "Applied to ZDub Media (Claude's input, not the mentors')", who: "Claude's input in the guide" }
      ],
      alsoIn: ["Getting Clients tab (cold outreach)"],
      idea: "Logan's (10/9) **“Feature Friday”**: instead of featuring a business on your website, **make them a free static ad**, tell them “you got picked,” post it, and send it to them. It's value first, and it showcases your work better than any portfolio. Logan made editorial “magazine cover” statics for a barbershop using the shop's own photos.\n\nWhy it works:\n\n- It's a gift, not a pitch. The owner sees their own business looking great.\n- It proves you can do the work before they pay you anything.\n- It's fast. With the four zones and the AI workflow, one good static is a 30–45 minute job.\n- It gives you a natural reason to follow up: “Want me to test it with $10 a day?”\n\n**How to do it well** (built from the lessons in this tab):\n\n1. Pick a local business with decent photos on Google or Instagram.\n2. Use **their real photos** (Paul and Logan both say client photos beat AI scenes for belief).\n3. Build it on one archetype that fits their trade: diagnostic warning or red marker for a roofer, micro split for a detailer or med spa.\n4. Run the 8 checks. Never invent a number, review or offer for them; use a neutral CTA if you don't know their real offer.\n5. Send it with a short, specific note.\n\nThe outreach scripts and follow-up steps belong to the Getting Clients tab. This lesson is about making the gift good enough to open the door.",
      keyPoints: [
        "Make a free static for a prospect, post it, send it: value first.",
        "Use the business's own photos, not stock or AI scenes.",
        "Never invent their offer, numbers or reviews.",
        "It shows your work before they pay and opens a natural follow-up.",
        "One archetype + four zones + 8 checks = a gift worth opening."
      ],
      why: "ZDub has one client so far. A weekly Feature Friday static gives you a steady stream of portfolio pieces and warm conversations with Sacramento trades.",
      example: {
        title: "Feature Friday for a Folsom auto detailer",
        body: "Photos: their own Instagram before/after of a swirled black paint job. Archetype: micro split. Headline in image: “Folsom: your black paint can look like this again.” Belief: the real before/after with a red circle on the swirl marks. Act: “See what a paint correction looks like” (neutral, since you don't know their offer).\n\nNote: “Hey [name], you got picked for this week's Feature Friday. I made this ad from your before/after. It's yours to use. Want me to run it for a week and show you what it does?”"
      },
      practice: [
        {
          prompt: "Plan this week's Feature Friday.",
          fields: ["Business, trade and town", "Their real photo you'll use", "Archetype + headline in image", "Belief and Act (no invented claims)", "The short note you'll send"],
          rubric: ["Uses their real photo", "Headline names place and audience", "No invented offer, number or review", "The note is short, specific and gives before it asks"]
        }
      ],
      today: { task: "Make one Feature Friday static for a Sacramento-area trade business from their real photos. Run the 8 checks, then post it and send it with your note.", output: "1 Feature Friday static, posted and sent", minutes: 45, suggested: false },
      check: [
        { q: "What is Logan's Feature Friday?", a: "Make a local business a free static ad (“you got picked”), post it and send it to them: value first, and it showcases your work." },
        { q: "What should you never put in a Feature Friday ad?", a: "An invented offer, number or review; use their real photos and a neutral CTA if you don't know their offer." }
      ]
    },
    {
      id: "adc-20",
      part: "video",
      title: "Video ad structure: hook, problem, solution, CTA, held by open loops",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-10-15",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "6. Winning video ad structure; New in V2: Writing a video ad live (Structure and open loops; Format and finishing)", who: "Cam, Follow Ad call (9/17/26) and Launching Ads in Meta Ads Manager (10/15/26)" },
        { doc: "LC_Example_Ads.txt", section: "Script: Pilot Proof Program (Hook / Problem / Solution / CTA)", who: "LC example ad written by Cam" }
      ],
      alsoIn: ["Copywriting tab (hooks and the first 3 seconds)"],
      idea: "Cam (9/17) wrote, filmed, edited and launched an ad live on a call. His structure is four parts:\n\n1. **Hook:** opens a loop. It gets the most thought, because it decides whether anyone stops. (Writing hooks is taught in the Copywriting tab.)\n2. **Problem:** agitates the loop, “pours fuel on the fire.”\n3. **Solution:** answers it, but still leaves a gap to the CTA.\n4. **CTA:** closes it with one clear next step.\n\nThe glue is the **open loop**: a curiosity you open now and close later. Cam's warning: “AI is not very good at writing open loops.” It opens and closes them right away, which kills retention. His trick is to **name a mechanism and drop the name early**: “I've got something special for you. It's called Triple P,” then reveal it in the solution as “the Pilot Proof Program.”\n\nThe LC example script follows this exactly: hook (“If you run a local business here in Scottsdale…it's called triple P”), problem (you've tried posting, freelancers, agencies that gave you “brand awareness, aka NOTHING”; agencies get paid the same either way), solution (agree a target, run content and ads free for two weeks, continue only if it's hit), CTA (“click the link below, follow me on Instagram”).\n\n**Cam's winning ad for Sterling Mold (10/15)**, consistently about $17 CPL: a “TikTok hook” pulled from a viral TikTok, an AI presenter pointing at side-by-side photos, then a “selfie body” where the client filmed himself from Cam's script over FaceTime. A reaction ad ran about $24 CPL.\n\n**Finishing (9/17):** length “anywhere from like 30 seconds to three minutes… whatever it takes”; no B-roll needed when starting out; captions on but avoid animated captions (hard to read); a green-screened location sticker feels organic; licensed music may get the ad rejected; a phone and CapCut are enough.\n\n*Note:* Cam's free-trial offer is his. Only borrow the Pilot Proof structure for ZDub if you actually sell that offer.",
      keyPoints: [
        "Hook → problem → solution → CTA.",
        "Open loops carry retention; AI tends to close them too fast.",
        "Name a mechanism early, reveal it in the solution.",
        "Hook gets the most thought; the rest can be looser.",
        "30 seconds to 3 minutes, captions on (not animated), no licensed music, phone + CapCut is enough."
      ],
      why: "This is the structure behind the mentors' cheapest-CPL video ads, and it works for PMT, any trade client and ZDub's own ads with nothing more than a phone.",
      example: {
        title: "PMT video ad on Cam's structure (draft)",
        body: "- **Hook:** “If you've been telling yourself ‘someday I'll get my motorcycle license’ here in the Sacramento area, I've got something for you. We call it the First Hour.”\n- **Problem:** “Most people put it off because they picture being the only one who's never touched a bike. Or they try learning on a friend's bike in a parking lot and scare themselves.”\n- **Solution:** “The First Hour is how every beginner class starts at our Woodland range: bikes and helmets provided, and you start by walking the bike. Nobody's expected to know anything.”\n- **CTA:** “Tap the link below to see this month's open seats.”\n\n(Check every claim with PMT before filming; no pass promises.)"
      },
      practice: [
        {
          prompt: "Write a 30–45 second video ad script for PMT or a trade on Cam's four-part structure with a named mechanism.",
          fields: ["Hook (opens the loop, drops the mechanism name)", "Problem (agitates)", "Solution (reveals the mechanism, leaves a gap)", "CTA"],
          rubric: ["The mechanism is named early and revealed later", "The problem section makes it worse before it gets better", "Every claim is true for the client", "One clear CTA", "Reads naturally out loud"]
        }
      ],
      today: { task: "Write the PMT script, read it out loud twice, then film a rough selfie-style take on your phone. Add plain captions in CapCut and watch it with sound off.", output: "1 rough PMT video ad (script + phone take, captioned)", minutes: 45, suggested: false },
      check: [
        { q: "What are the four parts of Cam's video ad structure?", a: "Hook, problem, solution, call to action." },
        { q: "What is an open loop and why does Cam say AI struggles with it?", a: "A curiosity opened now and closed later; AI tends to open and close it immediately, which hurts retention." },
        { q: "What was the structure of Cam's ~$17 CPL Sterling Mold ad?", a: "A TikTok hook from a viral video, an AI presenter pointing at side-by-side photos, then a selfie body the client filmed from Cam's script." }
      ]
    },
    {
      id: "adc-21",
      part: "video",
      title: "From AI draft to your voice: edit the script like a pro",
      minutes: 9,
      tags: ["Mentor"],
      date: "2026-09-25",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "New in V2: Writing a video ad live → Editing the AI draft; New in V2: Logan's AI workflow for ads", who: "Cam (9/17/26), Logan McKinney, Finding Winning Ads (9/25/26)" }
      ],
      idea: "Both mentors use AI for scripts, and both say it's a draft, not the ad.\n\n**Logan's AI workflow (9/25):**\n\n1. **Research prompt:** “My ideal client is X. Find as much as you can about their pain points, what they struggle with, what they complain about, what costs them money, and cite where each one came from.”\n2. **Script prompt:** “Here's my ideal client and their pain points. Here is exactly what I do. Show me how my service solves each pain point, then write five 30-second ad scripts, one pain point each, all in my voice.”\n3. **Voice profiles:** voice-note journaling, or have AI interview you with 25 questions; record client meetings so scripts sound like each client.\n4. **Read every script out loud** and rewrite awkward lines. AI does 70–80%. **No em dashes, period.** “AI is our tool. It is not our storefront.”\n5. Use Pinterest references and Cam's ads in the Ad Library as templates; get scripts reviewed by coaches before filming.\n\n**Cam's edit pass (9/17):** AI output was “90% of the way there.” Then:\n\n- **Cut phrases that sound like AI.** He removed “listen up” and “here's the actual mechanism.”\n- **Humanize** with a little slang. Use the customer's business language (“we are intentionally using P&L because that is business language”).\n- **Be direct.** Direct response is “usually getting like 99 people to say no and one person to say, hell yeah.” Don't shy away from the money conversation; beat around the bush and Meta shows it to “the beat around the bush people.”\n- **Say it out loud before filming.** Lean into the delivery; half-hearted, it reads as too aggressive.\n- Send scripts to the coaches for feedback.\n\nThe two mentors disagree slightly on how much AI does (Cam ~90%, Logan 70–80%). Same lesson either way: you own the last mile.",
      keyPoints: [
        "Research pain points with cited sources, then one script per pain point.",
        "Build a voice profile so scripts sound like you or the client.",
        "Cut AI-sounding phrases and em dashes; add slang and the customer's language.",
        "Be direct: 99 no's and one “hell yeah” is the goal.",
        "Read it out loud before filming; get feedback."
      ],
      why: "AI lets ZDub write five scripts in the time it used to take to write one, but AI-sounding ads get scrolled past. The edit pass is where your agency's quality shows.",
      example: {
        title: "Editing an AI line for PMT",
        before: "“Listen up! Are you ready to unlock the freedom of the open road? Here's the actual secret — our comprehensive, industry-leading motorcycle training program.”",
        after: "“Real talk: most people who want to ride never book a class because they think they'll be the only beginner there. You won't be. That's the whole point of a beginner class.”",
        body: "Cut: “listen up,” “unlock,” “here's the actual secret,” the em dash, and corporate words. Added: a plain truth in a rider's language, and a direct line that will make the right person say “that's me.”"
      },
      practice: [
        {
          prompt: "Run Logan's two prompts for PMT (or a trade), then edit one of the five scripts with Cam's pass.",
          fields: ["Top 5 pain points found (with where each came from)", "The raw AI script you picked", "Your edited version", "What you cut and why"],
          rubric: ["Pain points have sources", "AI-sounding phrases and em dashes are gone", "Uses the customer's own language", "Direct enough that the wrong people would scroll past", "Sounds natural read aloud"]
        }
      ],
      today: { task: "Generate five 30-second PMT scripts with Logan's prompts, edit the best two with Cam's pass, read both out loud and mark the lines you'd film first.", output: "2 edited PMT video scripts ready to shoot", minutes: 40, suggested: false },
      check: [
        { q: "What are Logan's two main AI prompts for ads?", a: "A research prompt for the ideal client's pain points with sources, then a script prompt for five 30-second scripts, one pain point each, in your voice." },
        { q: "What did Cam cut from his AI draft?", a: "Phrases that sound like AI, such as “listen up” and “here's the actual mechanism.”" },
        { q: "What does Cam mean by “the beat around the bush people”?", a: "If your ad is vague or timid, Meta shows it to vague, timid people; be direct so it finds the “hell yeah” buyers." }
      ]
    },
    {
      id: "adc-22",
      part: "video",
      title: "Shoot modular: 3 hooks, 1 body, 2 CTAs",
      minutes: 8,
      tags: ["Mentor", "Disagreement"],
      date: "2026-09-25",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "New in V2: Modular shooting; Where the mentors disagree (How many creatives to make)", who: "Cam, Follow Ad call (9/17/26); Logan McKinney (9/25/26)" }
      ],
      alsoIn: ["Content Production Craft (shooting and editing)", "Meta Ads tab (testing hooks on one body)", "AI-Assisted Creative Playbook (10/30/26) Part 4A Step 5 (three alternative hooks on the same body)"],
      idea: "Cam's (9/17) production trick: don't film whole ads, film **modules**.\n\n- Film **3 hooks + 1 body + 2 CTAs**: one organic CTA (“click the link in my bio”) and one ad CTA (“click the link below and fill out the form”).\n- With 3 bodies, that's 9 organic pieces and 9 ads: “18 pieces of content out of eight segments.”\n- At $11/day, test hook variations on one body (budget details in the Meta Ads tab).\n\n**Filming clients remotely:** FaceTime on the laptop while the client records selfie-style on their phone. Hooks in one take, bodies next, CTAs separately.\n\n**Teleprompter:** Instagram's reel camera has one built in. Without it, read lines to the client and have them repeat. Cam's trick: memorize one line, look at the lens, **freeze at the end of the line**, look back, continue. The cut barely shows.\n\n**How many to make? The mentors differ (Guide 03):**\n\n- **Cam (9/17):** at $11/day, 2–3 hooks on one body.\n- **Logan (9/25):** 5 minimum, 10 optimal; one video plus 5 hooks if that's all you can make.\n\nGuide 03's default is to make Logan's one-video-five-hooks batch and run what the budget can feed. Both agree on the method: one body, many hooks.\n\nGuide 03's applied note for ZDub: one session of 3 hooks, 2–3 bodies and both CTAs gives PMT or a contractor organic posts and ad tests from the same footage, which is exactly an organic-plus-paid offer.",
      keyPoints: [
        "Film 3 hooks + 1 body + 2 CTAs (organic and ad).",
        "Three bodies → 9 organic + 9 ads from eight segments.",
        "Shoot clients remotely over FaceTime; hooks, bodies and CTAs as separate takes.",
        "Freeze at the end of each line for invisible cuts.",
        "Cam: 2–3 hooks at $11/day. Logan: 5 minimum, 10 optimal."
      ],
      why: "Modular shooting turns one 30-minute session with a busy owner into weeks of organic posts and ad tests. It's the cheapest way to deliver both halves of ZDub's offer.",
      example: {
        title: "PMT modular shot list (one 30-minute session with an instructor)",
        body: "- **Hook 1:** “If you've never touched a motorcycle, this is for you.”\n- **Hook 2:** “The number one thing beginners are scared of in class isn't crashing.”\n- **Hook 3:** “Want your M1 in the Sacramento area but don't own a bike?”\n- **Body:** 30 seconds on what the first hour looks like: walking the bike, the clutch, nobody expected to know anything, bikes and helmets provided.\n- **CTA organic:** “Click the link in my bio to see class dates.”\n- **CTA ad:** “Tap the link below to see open seats.”\n\nThat's 3 ads and 3 organic posts; add two more bodies (gear, the licensed-but-uneasy rider) for 18."
      },
      practice: [
        {
          prompt: "Write a modular shot list for a real client session.",
          fields: ["Hook 1", "Hook 2", "Hook 3", "Body (or bodies)", "Organic CTA", "Ad CTA", "Total pieces this produces"],
          rubric: ["Three genuinely different hooks that all fit the same body", "Body stands alone after any hook", "Both CTAs present", "Pieces count is correct"]
        }
      ],
      today: { task: "Book or run a 30-minute modular session (with a PMT instructor, a friend standing in, or yourself for ZDub's own ad). Film 3 hooks, 1 body and 2 CTAs as separate takes using the freeze trick, then stitch one hook + body + ad CTA into a rough ad.", output: "Modular footage + 1 stitched rough ad", minutes: 45, suggested: false },
      check: [
        { q: "What does Cam film in a modular session?", a: "3 hooks, 1 body and 2 CTAs (one organic, one ad); with 3 bodies that's 18 pieces from eight segments." },
        { q: "How do Cam and Logan differ on how many creatives to make?", a: "Cam: 2–3 hooks on one body at $11/day. Logan: 5 minimum, 10 optimal, one video plus 5 hooks if that's all you can make." }
      ]
    },
    {
      id: "adc-23",
      part: "video",
      title: "What makes a creative convert: call-out, cost of inaction, proof",
      minutes: 10,
      tags: ["Mentor"],
      date: "2026-08-05",
      source: [
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Meta ads, testing and creative → What makes a creative convert", who: "Clayton Bell, High-converting ads parts 1 and 2 (8/5/26); student Michael" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Meta ads, testing and creative → Campaign structure and testing (dollar-off statics)", who: "Paul Snowman (7/28/26)" }
      ],
      idea: "Clayton's (8/5) two-part ad breakdown boils down to a checklist for any lead ad:\n\n1. **Call out the audience, every time.** “Lexington homeowners.” Clayton treats it as close to a law. **The call-out is targeting, not the hook.**\n2. **Hooks can be questions** that spark curiosity: “Have you ever had a landscaper just throw some lights together?” The hook doesn't have to be what you sell: the turf ad hooked on grass prices, then sold pavers, pergolas and kitchens.\n3. **Scarcity: time plus price** (“starting next year you'll pay double”), only when true.\n4. **Substantiate the claim** with something real: a city news report on drought restrictions, a map of local limestone.\n5. **Quantify the cost of doing nothing**, with a number bigger than your ticket. A $1.5k–$3k water job should point to damage worth far more. Ask the owner what inaction usually costs.\n6. **Peel the onion.** Surface pain doesn't move people. Keep going a layer deeper.\n7. **Homeowner language, not trade jargon.** (“A run goes dark” confused everyone.)\n8. **Make it work on mute** with captions and visuals. Match music to the message; use sound effects for the problem moment and the list of services.\n9. **Strong CTA that repeats the hook's fear:** “Click the link below before stage two water drought hits.”\n10. **Address DIY** (student Michael): “Would you rather go out to Home Depot… or do you want to get an expert right now to assess it for you?”\n11. **Run positive ads too.** People act fastest when chasing a desire and escaping a fear at once. Some people just want their house to look good.\n12. **Editing quality matters.** Choppy stitching from a $20-a-video editor hurt good ads. You can fix lines without a reshoot by cloning the owner's voice over B-roll.\n\nPaul (7/28) adds: for landscaping and home services, dollar-off statics (“$100 off,” summer sales) with before/after and affordability are working; clear any sale with the client first. (Not for PMT: its copy rules ban “discount.”)",
      keyPoints: [
        "Call out the audience every time; it's targeting, not the hook.",
        "Quantify the cost of doing nothing with a number bigger than the ticket.",
        "Back claims with something real and local; peel the pain a layer deeper.",
        "Homeowner language, works on mute, CTA repeats the hook's fear.",
        "Answer the DIY option, and run positive desire ads too."
      ],
      why: "This is the checklist to run over any trade client's video before launch. Most local ads skip the call-out, the cost of inaction and the proof, which is why they don't convert.",
      example: {
        title: "Roofer ad through Clayton's checklist",
        before: "“Need a new roof? We do quality work at great prices. Call today!”",
        after: "**Call-out:** “Roseville homeowners.” **Hook:** “Ever had a roofer patch the same leak twice?” **Proof:** real photos of the rotted decking they found under a ‘patched’ spot. **Cost of inaction:** “A $900 repair now, or [owner's real typical number] in drywall and decking after one more wet winter.” **DIY:** “You could climb up there with a tube of sealant, or have someone look at it with a drone this week.” **CTA:** “Tap below to book a roof check before the next storm.”",
        body: "Every number comes from the roofer's real invoices. If you don't have one, ask: “What does it usually cost when someone waits?”"
      },
      practice: [
        {
          prompt: "Take one trade client's ad idea and run it through Clayton's checklist.",
          fields: ["Call-out", "Hook (question or curiosity)", "Real substantiation", "Cost of doing nothing (number + where it came from)", "One layer deeper pain", "DIY line", "CTA that repeats the hook's fear"],
          rubric: ["Call-out names place and who", "Cost of inaction is bigger than the ticket and real", "Substantiation is checkable", "No trade jargon", "CTA echoes the hook"]
        },
        {
          prompt: "Now write a positive-desire version of the same ad (no fear).",
          fields: ["Desire hook", "What they'll see/feel", "CTA"],
          rubric: ["Leads with a want, not a fear", "Still calls out the audience", "Still concrete and true"]
        }
      ],
      today: { task: "Pick a Sacramento-area roofer, HVAC or plumbing prospect. Write one fear-based and one desire-based 30-second ad on Clayton's checklist, and list the one question you'd ask the owner to get the real cost-of-inaction number.", output: "2 trade ad scripts + 1 owner question", minutes: 35, suggested: false },
      check: [
        { q: "Why does Clayton say the call-out isn't the hook?", a: "The call-out (“Lexington homeowners”) is targeting; it should be in every ad. The hook is the curiosity opener." },
        { q: "How should you quantify the cost of doing nothing?", a: "With a real number bigger than your ticket, e.g. a $1.5k–$3k water job pointing to far more damage; ask the owner what inaction usually costs." },
        { q: "Why run positive ads too?", a: "People act fastest when chasing a desire and escaping a fear at the same time; some just want their home to look good." }
      ]
    },
    {
      id: "adc-24",
      part: "scale",
      title: "One winner, many ads: the AI variant engine",
      minutes: 9,
      tags: ["Playbook", "Book", "Mentor"],
      date: "2026-10-15",
      source: [
        { doc: "King Kong Meta Ads Playbook (Meta-Ads-Playbook.txt)", section: "Part 1, Section 13 The One-Keyword Hack; Section 14 The AI Variant Engine (incl. The Zombie Campaign)", who: "King Kong agency playbook" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 18, The AI variant engine (with guardrails); The one-keyword hack (local example)", who: "Book-based curriculum" },
        { doc: "ZDub Guide 03 Ad Creative V2", section: "6. Winning video ad structure", who: "Cam (10/15/26)" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Creative team and SOPs", who: "Jason Maulucci (6/10/26)" }
      ],
      idea: "Most people find a winner, kill everything else and ride it until it fatigues. King Kong: “1-star. Don't do this.” A winner isn't the finish line, it's **the seed.**\n\n**The workflow (King Kong):**\n\n1. Feed the winning ad to Claude or ChatGPT.\n2. Brief: “Read this ad. You are now the author. Write the next ad in the same voice. If we showed 100 people both ads, not 1 in 100 should be able to tell they're by different people.”\n3. Prompt variants by audience: “Rewrite for a 25-year-old woman,” “…a 45-year-old woman,” “…a 55-year-old man.” The bones stay; the avatar signal changes.\n4. Start with body copy, then headlines, then image briefs.\n5. Push the variants into one campaign and let Meta pick favorites.\n\nThe **zombie campaign**: of 50–100 variants, Meta may spend on 5–10. Don't delete the zero-spend ones you believe in; put them in their own ad set for another run. King Kong says that typically finds about 20% more winners.\n\nThe mentors do a smaller version: Cam (10/15) made **3 AI variations of the winner**. Jason (6/10): most creative should be **variations of winners, with about 20% of the creative budget for testing new ideas.**\n\n**ZDub guardrails (Mastery Guide):** every AI variant is fact-checked (no invented numbers, reviews or promises), checked against the client's voice guide, and checked against platform policy. **AI is a draft engine, not an approval process.**\n\n**Local version of the one-keyword hack (Mastery Guide):** original “4 seats left: beginner motorcycle class this Saturday.” Variants: “…in Woodland this Saturday,” “…in Cloverdale…,” “For returning riders who haven't ridden in years…,” “Women's beginner class…” (only if that class actually exists). Each tells Meta who to find.",
      keyPoints: [
        "A winner is a seed: generate variants in the same voice for different avatars.",
        "Body copy first, then headlines, then image briefs.",
        "Revive high-conviction zero-spend ads in a separate “zombie” ad set.",
        "Jason: most creative = variations of winners; ~20% for new ideas.",
        "Fact-check, voice-check and policy-check every AI variant."
      ],
      why: "This is how one PMT winner becomes a month of fresh creative without a new shoot, and how you keep a client's cost per lead from creeping up as ads fatigue.",
      example: {
        title: "PMT avatar variants from one winner",
        body: "Winner: “Never ridden? Here's what happens in the first hour of class (bikes provided).”\n\n- **Returning rider, 50s:** “Haven't ridden since your 20s? Here's what the first hour back looks like on a training bike.”\n- **Partner of a rider:** “Your partner rides. You'd like to. Here's what the first hour of a beginner class looks like.”\n- **Gift buyer:** “Thinking of gifting a motorcycle class? Here's exactly what their first hour will look like.”\n\nEach keeps the skeleton (first hour, starts from zero, bikes provided) and changes one audience signal. Check with PMT that each audience is one they want."
      },
      practice: [
        {
          prompt: "Feed one winning (or best) ad to Claude with King Kong's brief. Generate 5 avatar variants and pick the 3 that pass the guardrails.",
          fields: ["The seed ad", "Variant 1 (avatar + headline + first lines)", "Variant 2", "Variant 3", "Anything you cut in fact/voice/policy checks"],
          rubric: ["Same voice and skeleton as the seed", "Each variant changes one audience signal", "No invented numbers, reviews or classes", "Fits PMT's copy rules"]
        }
      ],
      today: { task: "Take PMT's best-performing ad (or best draft). Generate 10 variants with AI (avatars, places, rider types), fact-check them against PMT's real classes, and finish the best 3 as ready-to-upload statics or scripts.", output: "3 checked PMT variants ready to launch", minutes: 40, suggested: false },
      check: [
        { q: "What brief does King Kong give the AI for variants?", a: "Read this ad, you're now the author, write the next ad in the same voice so not 1 in 100 people could tell they're by different writers; then rewrite for specific avatars." },
        { q: "What is a zombie campaign?", a: "Putting high-conviction ads that got zero spend into their own ad set for another chance; King Kong says it often finds about 20% more winners." },
        { q: "What split does Jason recommend for creative budget?", a: "Most creative as variations of winners, with about 20% for testing new ideas." }
      ]
    },
    {
      id: "adc-25",
      part: "scale",
      title: "How many creatives? Where the mentors and playbooks differ",
      minutes: 8,
      tags: ["Disagreement", "Mentor", "Playbook"],
      date: "2026-10-30",
      source: [
        { doc: "ZDub Guide 03 Ad Creative V2", section: "Where the mentors disagree: How many creatives to make", who: "Cam (9/17/26), Logan McKinney (9/25/26)" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "Meta ads, testing and creative; Where mentors disagree: Creative volume", who: "Paul Snowman (7/28/26), Tayt Shelman (10/30/26)" },
        { doc: "King Kong Meta Ads Playbook (Meta-Ads-Playbook.txt)", section: "Section 09 (10–15 ads per launch); Section 14 (50–100 variants)", who: "King Kong agency playbook" },
        { doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26", section: "TL;DR; Key Finding 1; Part 4A Steps 3 and 7; Caveats", who: "Research playbook" }
      ],
      alsoIn: ["Meta Ads tab (budget and testing structure)"],
      idea: "Everyone agrees you need multiple creatives and should let Meta pick. They don't agree on how many. Here are the positions side by side; your budget usually decides.\n\n- **Cam (9/17):** at $11/day, 2–3 hooks on one body.\n- **Logan (9/25):** 5 minimum, 10 optimal; one video plus 5 hooks if that's all you can make.\n- **Paul (7/28; 10/19):** many concepts × hook variations. 3 concepts × 3 hooks (7/28), then the 3x3x1 = 9 ads (10/19).\n- **Tayt (10/30):** makes fewer, more deliberate creatives for his own agency, and uses Paul's many-variation testing for clients. Test at least five creatives for one to two weeks. He admits Paul may disagree.\n- **King Kong playbook:** 10–15 ads per launch across formats; 50–100 AI variants into one campaign once you have a winner.\n- **AI-Assisted Creative Playbook (10/30/26):** 8–15 conceptually distinct ads; for a small local budget, 8–10 truly different concepts in one ad set. It notes Meta has published no official creative-count quota, so “you need 50 ads” claims are vendor opinion.\n\n**What the sources say about choosing:**\n\n- Guide 03's default: make Logan's one-video-five-hooks batch and run what your budget can feed.\n- The 9 New Calls guide notes Paul's method for client accounts, which Tayt also uses for clients.\n- King Kong's numbers come from big e-commerce budgets; mentor numbers come from local lead accounts like the ones ZDub runs.\n\nOne point everyone shares: **don't shut ads off too early.** Tayt (10/30): “People usually shut ads off before they get a result.” And don't force spend onto your favorite (Index principle 8: test, don't bet).\n\nThe budget math that decides how many ads a given spend can feed is in the Meta Ads tab.",
      keyPoints: [
        "Cam: 2–3 hooks at $11/day. Logan: 5 min, 10 optimal.",
        "Paul: concepts × hooks (9 ads). Tayt: at least 5 for 1–2 weeks; fewer, deliberate ones for himself.",
        "King Kong: 10–15 per launch; 50–100 variants from a winner (big budgets).",
        "Budget decides how many ads you can feed.",
        "Everyone: let Meta pick, and don't shut ads off too early."
      ],
      why: "Clients will ask “how many ads do I need?” Knowing each position and why lets you give a reasoned answer tied to their budget instead of a guess.",
      table: {
        head: ["Source", "Volume", "Context"],
        rows: [
          ["Cam (9/17)", "2–3 hooks on 1 body", "$11/day"],
          ["Logan (9/25)", "5 min, 10 optimal", "Local lead ads"],
          ["Paul (7/28 → 10/19)", "9 ads (3×3, then 3x3x1)", "~$70/day; 2–3x CPL/day"],
          ["Tayt (10/30)", "At least 5, 1–2 weeks", "Clients; fewer for himself"],
          ["King Kong", "10–15/launch; 50–100 variants", "Large e-com accounts"],
          ["AI Creative Playbook (10/30/26)", "8–15 distinct; 8–10 for small budgets", "No official Meta quota"]
        ]
      },
      example: {
        title: "Applying it to PMT",
        body: "If PMT's budget is small, Cam's 2–3 hooks on one body or Logan's five-hook batch fits. If PMT can fund Paul's 2–3x target CPL per day, run the 3x3x1. Either way, give the test at least the one to two weeks Tayt recommends before calling it. (Settle the budget with the Meta Ads tab's math.)"
      },
      practice: [
        {
          prompt: "For PMT and one prospect, pick a creative volume and defend it using the positions above.",
          fields: ["PMT daily budget (real or planned)", "Which position fits and why", "Exact creative count and mix", "Prospect: budget, position, count"],
          rubric: ["Names the mentor position used", "Count fits the budget", "Mix includes different concepts, not just hook swaps", "Includes a minimum run time before judging"]
        }
      ],
      today: { task: "Write PMT's next creative batch plan: number of concepts, hooks per concept and formats, matched to its real budget. Make the first two pieces.", output: "PMT creative batch plan + 2 pieces made", minutes: 30, suggested: false },
      check: [
        { q: "What's Logan's creative volume rule?", a: "5 minimum, 10 optimal; one video plus 5 hooks if that's all you can make." },
        { q: "How does Tayt handle creative volume?", a: "Fewer, more deliberate creatives for himself; Paul's many-variation testing for clients; test at least five for one to two weeks." }
      ]
    },
    {
      id: "adc-26",
      part: "scale",
      title: "Match the ad to the landing page",
      minutes: 8,
      tags: ["Playbook", "Mentor"],
      date: "2026-08-05",
      source: [
        { doc: "King Kong Meta Ads Playbook (Meta-Ads-Playbook.txt)", section: "Part 1, Section 15 Match the Ad to the Landing Page (scent test; Meta as split-testing tool; Three Split Tests Rule)", who: "King Kong agency playbook" },
        { doc: "NuAdd Mentor Lessons Study Guide: 9 New Calls", section: "What makes a creative convert (landing pages)", who: "Clayton Bell (8/5/26)" },
        { doc: "ZDub Marketing Mastery Guide", section: "Ch 20 Websites & Landing Pages (tagline: the ad sells the click; the page has to deliver it)", who: "Book-based curriculum" }
      ],
      alsoIn: ["Funnels tab (landing pages and forms)", "AI-Assisted Creative Playbook (10/30/26) Part 4A Step 6 (landing page matches the ad's promise and location); Part 1 Chris Do (design the whole journey)"],
      idea: "The ad sold the click on a specific promise. The landing page has to deliver **that same promise within about 0.4 seconds** of arrival. King Kong: break the “scent trail” and you lose about half your clicks before they read anything. Most advertisers put 90% of their effort into the ad and 10% into the page. That's backwards.\n\n**The rule: the ad headline and the landing page headline match, word for word or close to it.**\n\n**The scent test (do it now):**\n\n1. Open your top 3 ads.\n2. Click each one, like a prospect would.\n3. Read the landing page headline.\n4. Same words? Same promise? Same hook? If not, fix it today.\n\n**Use Meta as your split-testing tool.** Testing a page headline on organic traffic takes tens of thousands of visits. Your ad headlines get huge impressions for little money. So run many headline variants in ads, find the winner, then put the winning headline on the page: headline, subheadline, hero text, opening line. King Kong reports conversion lifts of 15–20% “at the floor.”\n\n**Three split tests rule:** keep multiple tests running at all times. Set a recurring Monday reminder: “Are at least 3 split tests running right now?”\n\nClayton (8/5) adds for local lead pages: **ask small questions first** (project, yard size, timeline) and contact info last.\n\nPage building and forms are taught in the Funnels tab. Your creative job: make sure every ad you ship has a matching page or form message, and that the visual on the page looks like the ad they clicked.",
      keyPoints: [
        "The page must deliver the ad's promise instantly; mismatches lose clicks.",
        "Ad headline = page headline, word for word or close.",
        "Click your own ads and run the scent test.",
        "Find winning headlines in ads, then move them onto the page.",
        "Keep 3+ split tests running; small questions first on lead forms."
      ],
      why: "A great PMT ad that lands on a generic class page wastes the money it took to earn the click. Matching scent is a cheap, fast win you can show any client in their first week.",
      example: {
        title: "PMT scent match",
        before: "Ad: “Never ridden? Here's what happens in the first hour of class (bikes provided).” → Page headline: “Pacific Motorcycle Training: Course Schedule.”",
        after: "Page headline: “Never ridden? Here's your first hour of class.” Subhead: “Bikes and helmets provided. Pick your Woodland date below.” Hero image: the same range photo from the ad.",
        body: "Same words, same promise, same picture. The visitor knows instantly they're in the right place."
      },
      practice: [
        {
          prompt: "Run the scent test on three ads (PMT's, or a prospect's live ads from the Ad Library).",
          fields: ["Ad 1 headline → page headline → match? fix?", "Ad 2 headline → page headline → match? fix?", "Ad 3 headline → page headline → match? fix?"],
          rubric: ["Actually clicked through each ad", "Judges words, promise and visual", "Each fix mirrors the ad headline closely"]
        }
      ],
      today: { task: "Click through every live or planned PMT ad. Rewrite the landing page or instant form headline for each so it mirrors the ad, and send the changes to whoever edits PMT's page (or update it yourself in GoHighLevel). Set the Monday “3 split tests?” reminder.", output: "Matched headlines for each PMT ad + Monday reminder", minutes: 30, suggested: false },
      check: [
        { q: "What is the scent test?", a: "Click your top ads like a prospect and check that the landing page headline mirrors the ad's words, promise and hook." },
        { q: "How does King Kong use Meta to improve landing pages?", a: "Run many ad headline variants, find the winner, then put that headline on the page's headline, subhead and hero text." },
        { q: "What does Clayton say about lead-page questions?", a: "Ask small questions first (project, size, timeline) and contact info last." }
      ]
    },
    {
      id: "adc-27",
      part: "ai-workflow",
      title: "AI makes the volume; you keep strategy, proof and polish",
      minutes: 10,
      tags: ["Playbook", "Platform fact (re-check)"],
      source: [
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Opening summary; TL;DR; Key Finding 4; Part 2: Unified Principles 1–9; Part 3: The AI + Manual Tool Stack",
          who: "Research playbook (citing Luke Sullivan, Susan Weinschenk, Chris Do, Will Paterson, Satori Graphics)"
        },
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Part 1: Books (Weinschenk: inattention blindness, faces and gaze); YouTube channels (The Futur, Will Paterson, Satori Graphics)",
          who: "Research playbook"
        }
      ],
      alsoIn: [
        "adc-01 Creative is the targeting (principle 6)",
        "Copywriting tab (hooks & the first 3 seconds, principle 2)",
        "Content Production Craft (typography, safe zones, Canva workflow)",
        "Meta Ads tab (hook rate, hold rate and the testing metrics, principle 9)"
      ],
      idea: "The playbook's whole argument fits in one line: **let AI make the volume and the variations, but keep strategy, real proof, typography and final polish in human hands.** Tools like Canva AI, Photoshop Generative Fill, Midjourney, CapCut, Submagic and OpusClip only speed up *how many* versions you can make. Classic principles decide *what to say*.\n\nThree design voices land in the same place. Chris Do (The Futur): “If your output is barely distinguishable from what an AI can produce, you are replaceable.” Will Paterson draws every logo by hand and uses AI daily for scripts, email and mockups: “I want AI to do the dishes, not the cooking.” Satori Graphics frames AI as removing friction, not replacing creativity.\n\n**The nine unified principles (Part 2):**\n\n1. **One message, one focal point, one action.** One idea (Sullivan), one dominant visual (Weinschenk: people miss things that are plainly on screen), one CTA.\n2. **Hook in 2–3 seconds** with joy, surprise or tension. Open on motion, a face or a payoff, not a logo.\n3. **Tangibilize the intangible.** Training is invisible until you show it: the range, the bikes, the gear, an instructor's hand on a clutch lever, a nervous student finishing a first figure-eight, the class schedule and a map pin. Concrete nouns and numbers beat adjectives.\n4. **Native beats polished for cold audiences; polish signals trust at decision time.** UGC-style and over-the-shoulder video to stop strangers; clean branded statics and carousels for retargeting and organic authority.\n5. **Design for the thumb.** High contrast, 3–7 words per overlay, big type, everything inside safe zones, checked at phone size.\n6. **Creative diversity is targeting.** Vary angle, persona, format and setting, not the button color.\n7. **Real proof outranks rendered beauty.** AI only for cleanup, extension, background tidying and variation.\n8. **Systemize the brand** so speed doesn't erode it: brand kit, locked templates, type scale, color rules, voice rules and banned words.\n9. **Measure each layer separately:** hook → hold → click → landing page view → booking. Fix the weakest layer first.\n\nOne detail you can use today: faces get processed before logic, and eye-tracking research the playbook cites found a face looking *toward* the text or product lifts attention to the message. If a rider is in a cold ad, have them look at the headline or CTA. Save direct-to-camera for warm instructor intros.\n\nThe table below is the playbook's split of jobs. Tool names and features changed during 2026, so re-check before client work.",
      keyPoints: [
        "AI makes volume and variations; you own strategy, real proof, typography and final polish.",
        "One message, one focal point, one CTA per asset.",
        "Tangibilize: show the range, bikes, gear, hands on controls, the schedule and a map pin.",
        "Native for cold audiences; polished statics and carousels for retargeting and authority.",
        "If your work is indistinguishable from AI output, you're replaceable (Chris Do)."
      ],
      why: "Every prospect can buy an AI image tool for a few dollars a month. What they can't buy is someone who knows what to say, has the real proof and makes it look like their brand. That is ZDub's job description.",
      table: {
        head: ["Job", "Tool (late 2026)", "AI does", "You do"],
        rows: [
          ["Strategy, angles, copy drafts", "ChatGPT / Claude", "30–50 angles, hooks, headline variants; summarize reviews", "Pick the angle, enforce voice and banned words, fact-check claims"],
          ["Templates and bulk variants", "Canva AI (Bulk Create from CSV, Magic Layers), Figma", "Resize, bulk-fill copy, split flat images into layers", "Build master templates, type hierarchy and spacing by hand"],
          ["Photo cleanup and extension", "Photoshop Remove, Generative Fill/Expand, Generative Upscale", "Remove distractions, extend 4:5 to 9:16, upscale", "Selections, color matching, grain, final crop"],
          ["Concept images, mood boards", "Midjourney V8.2", "Explore looks, lock a style with --sref", "Decide whether an image belongs in a real-proof brand at all"],
          ["Logo, icons, badges", "Illustrator (Kittl for quick type layouts)", "Draft icon variations", "Draw and finalize the mark by hand"],
          ["Short-form edit and clips", "CapCut, Premiere, OpusClip, Submagic", "Auto-captions, silence removal, reframing, finding clip moments", "Story order, pacing, the first 3 seconds, fixing captions"],
          ["Avatar video", "HeyGen", "Translations or FAQ explainers", "Use sparingly; never present an avatar as a real PMT instructor"]
        ]
      },
      example: {
        title: "PMT: AI-first vs proof-first",
        before: "A glossy AI image of a lone rider on an empty mountain road at golden hour. “Freedom awaits” in thin script. Logo top-center.",
        after: "A real phone photo of a PMT student's first clutch release at the range, instructor beside them, the student's gaze toward a bold overlay: “Never ridden? Start here.” Logo small and late. AI used only to remove a trash can and extend the frame to 9:16.",
        body: "The first could be any brand anywhere and shows nothing true. The second follows principles 1, 3, 5 and 7: one idea, a concrete moment, thumb-sized text and real proof, with AI doing cleanup only. (The before/after lines come from the playbook's worked PMT example.)"
      },
      practice: [
        {
          prompt: "Audit one existing PMT (or prospect) ad against the nine principles, then split the rebuild into AI jobs and human jobs.",
          fields: ["The ad you audited (describe it)", "Principles it passes (numbers)", "Principles it fails, and why", "What AI will do on the rebuild", "What you will do by hand"],
          rubric: ["Every principle judged honestly", "The rebuild keeps one message, one focal point, one CTA", "AI's jobs are volume, cleanup or variation, never the proof", "Offer, typography and proof stay in human hands"]
        },
        {
          prompt: "Tangibilize PMT: list 10 concrete, photographable things that make the training visible. Star the two you'd shoot first.",
          fields: ["10 concrete moments or objects", "The 2 you'd shoot first, and which angle each feeds"],
          rubric: ["Every item is a noun you could point a camera at", "No adjectives like “quality” or “best”", "At least three show a person learning, not just equipment"],
          model: "Range at sunrise with cones in a curve; a row of training bikes; helmets on a rack; an instructor's gloved hand over a student's on the clutch lever; a first figure-eight; the gear check; the safety briefing circle; a student's face after the first loop; the class schedule screenshot; the Woodland map pin. First to shoot: the clutch-hand close-up (first-timer nerves) and the first-loop reaction (outcome)."
        }
      ],
      today: {
        task: "Write PMT's one-page “AI rules”: what AI may do (angles, hooks, review summaries, cleanup, extension, resizes, bulk variants), what it may never do (fake people, fake results, the logo, final type and offer), and PMT's banned words. Save it in PMT's client brain.",
        output: "PMT AI rules page",
        minutes: 25,
        suggested: false
      },
      check: [
        {
          q: "What is the playbook's one rule for AI in creative?",
          a: "Let AI make the volume and variations; keep strategy, real proof, typography and final polish in human hands."
        },
        {
          q: "What does “tangibilize the intangible” mean for PMT?",
          a: "Show the training with concrete things: the range, bikes, gear, an instructor's hand on a clutch, a first figure-eight, the schedule and a map pin. Concrete nouns and numbers beat adjectives."
        },
        {
          q: "Where should a rider in a cold ad be looking?",
          a: "Toward the headline or CTA; gaze toward the message lifts attention to it. Direct-to-camera suits warm instructor intros."
        }
      ]
    },
    {
      id: "adc-28",
      part: "ai-workflow",
      title: "Never fake the people: AI labels and the trust rule",
      minutes: 9,
      tags: ["Playbook", "Platform fact (re-check)", "Mentor"],
      date: "2026-10-19",
      source: [
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Key Finding 2 (AI disclosure is automatic and public); Part 2 Principle 7; Part 3 Tool notes (Licensing); Part 4A Step 7 (REI example); Part 8 Trust layer; Part 9 Mistakes 1 and 8",
          who: "Research playbook"
        },
        {
          doc: "ZDub Guide 03 Ad Creative V2",
          section: "7. Building statics with AI (Paul's caution on AI images vs client photos)",
          who: "Paul Snowman (10/19/26)"
        }
      ],
      alsoIn: ["adc-16 Build statics with AI (mentor methods)", "adc-18 Proof you can check, claims you can keep"],
      idea: "For a trust-based service, the biggest AI risk isn't an ugly image. It's a fake one.\n\n**What Meta does now (re-check; this changed during 2026):**\n\n- Meta puts an **“AI info” label** on ads made with its own generative tools.\n- Since **June 1, 2026** it also detects third-party AI edits through **C2PA provenance metadata**. Its July 7, 2026 update named Photoshop and DALL-E as detected tools.\n- Ads with a **photorealistic AI-generated person** can get a label placed right next to “Sponsored.”\n- Mandatory self-disclosure applies to political and social-issue ads. For everyone else, the labeling simply happens, in public.\n\nSo the rule is simple: **never fake students, instructors or results.** An AI “student” grinning on a training bike would get labeled, and the label would undercut the exact thing PMT sells: real instructors who get real beginners riding. Honest AI edits (a removed trash can, an extended sky) may trigger the label too, so log every edit and expect it.\n\n**Meta's own AI can change your ads.** In July 2026 Business Insider reported that REI got an inaccurate AI image of a bike with *two handlebars* after being auto-enrolled in a Meta AI feature. Meta's spokesperson: “it is the advertiser's responsibility to review the AI outputs.” Use Advantage+ creative enhancements selectively, and turn off any generative enhancement that alters real photos in ways you can't approve.\n\n**PMT's trust layer (Part 8):** instructor names and faces, real review quotes (with permission), the number of locations, class schedule screenshots. Signed releases for any student on camera.\n\n**Licensing.** Adobe positions Firefly as trained on licensed content, the safer default for client work. For any generator: read the commercial-use terms, keep prompt and asset logs, and never prompt for real people, trademarks, motorcycle brand logos or other artists' styles. Avatar tools like HeyGen are fine for translations or FAQ explainers, never presented as a real PMT instructor.\n\n**Where the mentor stands.** Paul (10/19): AI images are fine, but “if you can get images from the client though it is pretty much always better.” The playbook goes one step further for PMT: use AI around real photos, never instead of them. The two agree on the direction; for PMT, follow the stricter version.",
      keyPoints: [
        "Meta labels AI-made ads automatically, and since 6/1/26 detects third-party AI edits via C2PA.",
        "Photorealistic AI people can get a label next to “Sponsored.”",
        "Never fake students, instructors or results; log every AI edit.",
        "Review or switch off Advantage+ generative enhancements (the REI two-handlebar bike).",
        "Trust layer: real instructor names and faces, real reviews, locations, schedules."
      ],
      why: "PMT's whole sale is trust. One labeled fake can cost more belief than a month of good ads builds, and it's ZDub's name on the work.",
      example: {
        title: "Which PMT ads are safe?",
        body: "- **AI woman in gear smiling on a training bike, “Sarah got her M1 in a weekend!”** Fake person, fake result. Never ship.\n- **Real student (release on file), sky extended with Generative Expand to fit 9:16.** Honest, may get the AI info label. Log the edit.\n- **Midjourney range-at-sunrise background, no people, real instructor photo composited in, headline added in Canva.** Background is AI, proof is real. Log it and expect the label.\n- **Real instructor talking-head clip with corrected auto-captions.** No generative imagery. Safest of the four."
      },
      practice: [
        {
          prompt: "Build PMT's AI asset log and fill one row for an ad you've made or plan to make.",
          fields: ["Asset name", "Real elements (who/what; release on file?)", "AI edits made (tool + what changed)", "Expect the AI info label? (yes / no / maybe)", "Advantage+ enhancements on or off, and why", "Approved by"],
          rubric: ["No synthetic people or results", "Every AI edit is listed with its tool", "A release is noted for every real person", "Generative enhancements that alter photos are off or reviewed"]
        },
        {
          prompt: "Rewrite this concept so it's honest: an AI image of a happy “student” holding a license card, headline “100% of our students pass!”",
          fields: ["What's wrong (list every problem)", "Honest replacement visual", "Honest replacement headline", "Trust-layer element you'd add"],
          rubric: [
            "Names the fake person, the fake result and the unprovable claim",
            "Replacement visual is a real PMT moment",
            "Headline fits PMT's copy rules (no guaranteed, easy, cheap, discount, coach)",
            "Adds a real trust element"
          ],
          model: "Wrong: a fake person, a fake result, a pass claim PMT can't promise, and it would likely be labeled. Visual: a real photo of a student mid-figure-eight with the instructor beside them. Headline: “Never ridden? Our instructors start you from zero.” Trust layer: the instructor's first name on screen and a real review quote used with permission."
        }
      ],
      today: {
        task: "Open PMT's ads (live or in draft). Check the Advantage+ creative enhancement settings on each and turn off any that generate or alter imagery you can't approve. Start the AI asset log with every live or planned PMT creative.",
        output: "Reviewed enhancement settings + PMT AI asset log",
        minutes: 20,
        suggested: false
      },
      check: [
        {
          q: "Since when does Meta detect third-party AI edits, and how?",
          a: "Since June 1, 2026, through C2PA provenance metadata; the July 7, 2026 update named Photoshop and DALL-E."
        },
        {
          q: "What happened to REI, and what's the lesson?",
          a: "An auto-enrolled Meta AI feature produced an inaccurate bike image with two handlebars, and Meta said reviewing AI outputs is the advertiser's job. Turn off generative enhancements you can't approve."
        },
        {
          q: "What's in PMT's trust layer?",
          a: "Instructor names and faces, real review quotes with permission, the number of locations and class schedule screenshots. Never AI students or instructors."
        }
      ]
    },
    {
      id: "adc-29",
      part: "ai-workflow",
      title: "Workflow steps 1–3: research, brief and the concept matrix",
      minutes: 10,
      tags: ["Playbook"],
      source: [
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Part 4A Paid ads workflow: Step 1 Research, Step 2 Brief, Step 3 Concept matrix; Part 8 Worked example (positioning and angles); Part 9 Mistake 3",
          who: "Research playbook"
        }
      ],
      alsoIn: ["adc-06 No brief, no ad (full brief templates)", "adc-09 Reason-to-buy map", "adc-10 Let the angle choose the format", "adc-07 Generate 40 ideas on purpose"],
      idea: "The playbook's paid workflow has eight steps. The first three happen before you open Canva, and AI makes each faster without making the decisions.\n\n**Step 1: Research (60–90 minutes per campaign).**\n\n- **Meta Ad Library.** Search motorcycle training schools, driving schools and other local trainers in California. Note ads that have run for months. That's a practitioner heuristic for profit, *not proof*: advertisers sometimes leave losers running.\n- **TikTok Creative Center.** Trending hook formats in the education and automotive categories.\n- **Review mining.** Paste PMT's Google and Yelp reviews into ChatGPT or Claude and ask for clusters of objections and desired outcomes: **fears, surprises and outcomes** in customers' exact words. Those words become your hooks and proof.\n\n**Step 2: Brief (human-written, AI-assisted).** One-sentence position. Who it's for. Single-minded promise. Proof points. Objections. Mandatory items: location, class level, CTA. Banned words. Then define **4–6 angles.** The playbook's PMT set: first-timer nerves; the licensing pathway; a skills refresh for returning riders; advanced control; a gift for a partner; local convenience.\n\nIts draft positioning line (for client approval): “Northern California's hands-on rider training, from first ride to advanced control, with expert instructors across seven locations.”\n\n**Step 3: Concept matrix.** Angles × formats × personas. Example: 5 angles × 3 formats (9:16 talking-head video, 4:5 static, carousel) = 15 candidates. **Pick the 8–10 that are truly different.** The playbook's mistakes list calls the alternative “fake diversity”: 20 color or headline tweaks of one concept.\n\n**Who does what.** AI summarizes reviews, clusters objections and proposes 30–50 angles. You pick the angles, confirm every proof point with the client, and cut matrix cells that only *look* different.\n\nSteps 4–7 (shoot, produce, QA, launch) follow in the next lessons. Step 8, reading and iterating, lives in the Meta Ads tab.",
      keyPoints: [
        "Research: Ad Library (long runs are a hint, not proof), TikTok Creative Center, review mining.",
        "Mine reviews with AI for fears, surprises and outcomes in customers' own words.",
        "Brief: position, who, one promise, proof, objections, must-haves, banned words, 4–6 angles.",
        "Matrix: angles × formats × personas; keep the 8–10 truly different concepts.",
        "AI drafts and clusters; you choose and verify."
      ],
      why: "This is the hour that decides whether the next twenty assets are twenty different bets or one bet in twenty outfits. Doing it with AI keeps it to an hour.",
      example: {
        title: "PMT matrix, trimmed",
        body: "Angles: first-timer nerves, returning rider, advanced control, local convenience, gift. Formats: 9:16 talking head, 4:5 static, carousel.\n\nKeep (examples): first-timer nerves × talking head (instructor: “Never ridden? Start here.”); first-timer nerves × carousel (“What actually happens in your first class,” gear check → range briefing → clutch and throttle → first loops → debrief); returning rider × static (“Been off the bike for years?”); advanced control × 9:16 slow-motion braking (“Brake later. Turn sharper. Ride smarter.”); local convenience × static per location.\n\nCut: the gift static and the gift carousel until PMT confirms it sells gift cards; a second first-timer static that only changed the headline color."
      },
      practice: [
        {
          prompt: "Run the review-mining prompt on PMT's real reviews.",
          fields: ["The prompt you used", "Top fears (customers' words)", "Top surprises", "Top outcomes", "3 hooks lifted straight from review language"],
          rubric: ["Quotes are exact, not paraphrased", "Each cluster has a count or rough frequency", "Hooks use the customers' words", "Nothing invented beyond the reviews"],
          model: "Prompt: “Here are [N] reviews of Pacific Motorcycle Training. Group them into (1) fears or objections before the class, (2) surprises during the class, (3) outcomes after it. For each group give a rough count and three exact quotes. Don't paraphrase the quotes. Then list the five phrases customers use most often in their own words, and flag anything that sounds like a claim PMT would need to verify.”"
        },
        {
          prompt: "Build PMT's concept matrix: 5 angles × 3 formats, then keep the 8–10 truly different ones.",
          fields: ["5 angles", "3 formats", "15 cells (angle + format + persona, one line each)", "The 8–10 you keep, and what makes each different"],
          rubric: [
            "Each kept concept differs in angle, persona or format, not just color or headline",
            "Every angle traces back to research",
            "At least one video, one static and one carousel",
            "Anything needing client confirmation (gift cards, class levels) is flagged"
          ]
        }
      ],
      today: {
        task: "Do a 45-minute Step 1–2 for PMT: 5 Ad Library ads from trainers or driving schools (note how long each has run), PMT's reviews mined with the prompt above, and a one-page brief ending in 4–6 angles.",
        output: "PMT research notes + brief with 4–6 angles",
        minutes: 45,
        suggested: false
      },
      check: [
        {
          q: "Why isn't a long-running Ad Library ad proof that it works?",
          a: "It's a practitioner heuristic; advertisers sometimes leave unprofitable ads running."
        },
        {
          q: "What goes in the playbook's brief?",
          a: "A one-sentence position, who it's for, a single-minded promise, proof points, objections, mandatory items (location, class level, CTA), banned words, then 4–6 angles."
        },
        {
          q: "How many concepts do you keep from a 15-cell matrix?",
          a: "The 8–10 that are truly different."
        }
      ]
    },
    {
      id: "adc-30",
      part: "ai-workflow",
      title: "Workflow step 4: one real shoot feeds the whole machine",
      minutes: 8,
      tags: ["Playbook"],
      source: [
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Part 4A Step 4 Capture real footage (shot list); Part 1 Weinschenk (old brain, faces and gaze) and Theoretically Media (AI video); Part 8 Worked example (visuals per angle)",
          who: "Research playbook"
        }
      ],
      alsoIn: ["Content Production Craft (shot types, camera settings, audio)", "adc-22 Shoot modular: 3 hooks, 1 body, 2 CTAs"],
      idea: "AI can extend, clean and multiply footage. It can't create the proof. So the playbook plans **one shoot day per quarter per region** and treats it as raw material for every ad and post until the next one.\n\n**The shot list:**\n\n1. **Instructor intro to camera** (direct eye contact: warm and trust-building).\n2. **Over-the-shoulder range drills.**\n3. **Slow-motion close-ups** of clutch, throttle and braking.\n4. **Student before/after reactions** (with signed releases).\n5. **Gear check.**\n6. **Wide establishing shots** of each location.\n7. **Quiet moments** of students listening.\n\n**Shoot vertical 4K and leave headroom** so text fits the safe zones and you can crop to 4:5 later without losing the subject. (Camera settings and audio: Content Production Craft.)\n\n**Why these shots.** Weinschenk describes the “old brain” scanning for food, danger and mates before logic gets a vote. Faces, motion and danger cues get processed first. A real face showing focus or relief and a bike in motion are pre-attentive hooks.\n\n**Each shot feeds an angle:**\n\n- First clutch release, instructor beside them → first-timer nerves.\n- Slow-motion braking drill over-the-shoulder → advanced control (“Brake later. Turn sharper. Ride smarter.”).\n- Gear check, briefing, first loops, debrief → the “what actually happens in your first class” carousel.\n- Wide shots and a sign or landmark at each site → local convenience and the location templates in step 5.\n- Instructor talking about fog or valley heat → local authority posts.\n\n**Direct the gaze.** For cold ads, ask the student to look toward where the headline will sit. Keep direct-to-camera for the instructor intro.\n\n**Where AI video fits.** Theoretically Media's view, which the playbook adopts: AI video is for B-roll extensions, transitions and concept animatics, *not fake riders*.\n\nPMT has seven locations (Woodland, South San Francisco, San Bruno, Livermore, Salinas, Cloverdale, Eureka), so decide which sites each shoot covers and capture a landmark at each.",
      keyPoints: [
        "Plan one real shoot per quarter per region; it feeds every AI step after it.",
        "Seven shots: instructor intro, over-the-shoulder drills, slow-mo controls, reactions, gear check, wides, quiet listening.",
        "Shoot vertical 4K with headroom for safe zones and crops.",
        "Faces and motion are pre-attentive hooks; direct the student's gaze toward the headline.",
        "AI video only for B-roll extensions, transitions and animatics."
      ],
      why: "Without a library of real footage, every later step falls back on synthetic images. One planned shoot turns into months of honest ads and posts for PMT.",
      example: {
        title: "Woodland shoot plan (one morning)",
        body: "- 7:00 wides of the range at sunrise, the sign at the entrance, bikes lined up.\n- 7:30 instructor intro to camera, three takes (one per angle).\n- 8:00 gear check and safety briefing, with students who signed releases.\n- 8:30 over-the-shoulder clutch and throttle drills; slow-motion close-ups of a gloved hand on the lever.\n- 9:30 first loops; capture reactions right after; ask for gaze toward frame left where the headline goes.\n- Throughout: quiet listening moments from the side.\n\nTimes are illustrative. Fit them to PMT's real class schedule and ask before filming any student."
      },
      practice: [
        {
          prompt: "Write the shot list for PMT's next shoot, mapped to angles.",
          fields: ["Location and date", "Shots 1–7 (what, who, which angle each feeds)", "Gaze direction notes", "Release form plan", "Landmark or sign shot for the location template"],
          rubric: ["All seven shot types are covered", "Each shot names the angle it feeds", "Vertical 4K with headroom is noted", "Releases are planned for every student on camera"]
        }
      ],
      today: {
        task: "Send PMT a shoot request: proposed date and location, the seven-shot list mapped to angles, and a simple release form for students.",
        output: "Shoot request + shot list sent to PMT",
        minutes: 30,
        suggested: false
      },
      check: [
        {
          q: "What are the playbook's seven shots?",
          a: "Instructor intro to camera; over-the-shoulder range drills; slow-motion clutch, throttle and braking close-ups; student before/after reactions (with releases); gear check; wide establishing shots; quiet moments of students listening."
        },
        {
          q: "Why shoot vertical 4K with headroom?",
          a: "So text sits inside the safe zones and you can crop to 4:5 or extend to 9:16 without losing the subject."
        },
        {
          q: "What is AI video good for at PMT?",
          a: "B-roll extensions, transitions and concept animatics, not fake riders."
        }
      ]
    },
    {
      id: "adc-31",
      part: "ai-workflow",
      title: "Workflow step 5: templates, Bulk Create and careful Generative Fill",
      minutes: 10,
      tags: ["Playbook", "Platform fact (re-check)"],
      source: [
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Part 4A Step 5 Produce with AI acceleration; Part 3 Tool stack and Tool notes (Photoshop credits; model picker); Part 1 PiXimperfect; Part 8 Location system; Part 9 Mistake 7",
          who: "Research playbook"
        }
      ],
      alsoIn: ["Content Production Craft (Canva workflow; sizes and safe zones; color and export)", "adc-16 Build statics with AI (mentor methods)", "adc-22 Shoot modular (three hooks on one body)"],
      idea: "Step 5 is where AI earns its keep: the same real footage becomes many finished assets.\n\n**Statics.** Build master templates once in Canva or Figma at **1080×1350** (or 1440×1800) for 4:5 feed and **1080×1920** for 9:16. Then use **Canva Bulk Create** (fill from a CSV) to drop headlines, location and class level into the templates in one pass. Canva AI (Magic Studio's new name) and Magic Layers help with resizes and splitting flat images into editable layers; you still set hierarchy and spacing by hand.\n\n**The location system (Part 8).** One template, seven variants via Bulk Create: location name, landmark photo, map pin. Then test whether location-specific creative beats generic. Your CSV is just columns.\n\n**Photo polish, the PiXimperfect way.** Generative Fill misfires (it once replaced a removed fence with another fence) and goes soft and “super low-res” when you zoom in. So:\n\n1. **Remove tool plus Generative Fill on small selections**, not the whole frame. Combine with Content-Aware Fill where it's cleaner.\n2. **Generative Expand** to stretch a 4:5 frame to 9:16.\n3. **Color-match** (Curves eyedroppers for black, white and gray points) and add **subtle grain**.\n4. **Upscale only at the end.**\n\nSkipping the blend, grain and color match is on the playbook's mistakes list: it “looks soft and fake at full size.”\n\n**Credits and models (re-check).** Firefly-model fills cost about 1 generative credit; premium partner models cost much more (Adobe's community post lists Nano Banana Pro at 40). Gemini 2.5 (Nano Banana) is being removed from Photoshop as Google deprecates it on October 2, 2026. Start with Firefly: commercially safer and context-aware.\n\n**Video.** Rough cut in CapCut or Premiere. Auto-captions, then correct every word by hand. **Put three alternative hooks on the same body**, the same modular idea Cam teaches (adc-22).\n\nThe playbook couldn't verify current features for CapCut, Submagic, OpusClip, HeyGen, Kittl, Photoroom or Figma. Check each tool's plan, export watermarks and commercial-use terms before client work.",
      keyPoints: [
        "Master templates at 1080×1350 and 1080×1920; fill variants with Canva Bulk Create from a CSV.",
        "PMT location system: one template, seven variants (name, landmark photo, map pin).",
        "Generative Fill on small selections; expand 4:5 to 9:16; color-match and grain; upscale last.",
        "Start with Firefly (about 1 credit, commercially safer); partner models cost far more.",
        "Video: auto-captions then manual fixes; three hooks on one body."
      ],
      why: "This is how one shoot and one template become a month of location-specific PMT ads in an afternoon, without the soft, fake look that gives AI work away.",
      example: {
        title: "PMT location CSV (first rows)",
        body: "Columns: location · landmark_photo · headline · class_level\n\n- Woodland · woodland-range-sign.jpg · Never ridden? Start here in Woodland. · Beginner\n- Livermore · livermore-range-wide.jpg · Never ridden? Start here in Livermore. · Beginner\n- Eureka · eureka-range-wide.jpg · Never ridden? Start here in Eureka. · Beginner\n\nOne template, one Bulk Create run, three statics. Before launch, confirm with PMT that each location runs that class level, and that every landmark photo is real."
      },
      practice: [
        {
          prompt: "Write the CSV for PMT's location system.",
          fields: ["Column headers", "Row 1", "Row 2", "Row 3", "What you'll confirm with PMT before launch"],
          rubric: ["Only the variables change between rows", "Headline fits a 3–7 word overlay", "Every class level is confirmed real for that location", "Landmark photos are real, not generated"]
        },
        {
          prompt: "Polish one real PMT photo with the four-step method and note what you did.",
          fields: ["Distractions removed (and selection sizes)", "Expand 4:5 → 9:16: what was added", "Color match and grain notes", "200% zoom check: anything soft or wrong?"],
          rubric: ["Small selections, not a whole-frame fill", "Added areas match the light and color of the original", "Grain added before export", "Upscaled last, if at all"]
        }
      ],
      today: {
        task: "Make one PMT master 4:5 template in Canva, then run Bulk Create with a 3-row CSV to produce three location variants. Polish the hero photo first with Remove plus small-selection Generative Fill, color match and grain.",
        output: "1 master template + 3 location statics",
        minutes: 45,
        suggested: false
      },
      check: [
        {
          q: "Why use Generative Fill on small selections?",
          a: "Large fills misfire and go soft and low-res when zoomed; small selections, blended with Remove or Content-Aware Fill, color-matched and grained, look real at phone resolution."
        },
        {
          q: "What does PMT's location system need?",
          a: "One template and seven variants via Bulk Create: location name, landmark photo and map pin."
        },
        {
          q: "When do you upscale?",
          a: "Only at the end."
        }
      ]
    },
    {
      id: "adc-32",
      part: "ai-workflow",
      title: "Workflow steps 6–7: the AI-era QA gate and safe launch",
      minutes: 9,
      tags: ["Playbook", "Platform fact (re-check)"],
      source: [
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Part 4A Step 6 QA checklist; Step 7 Launch structure; Step 8 (pointer to Part 6); Part 5 Copy prompt rules (banned words); Part 8 CTA design; Part 9 Common mistakes 4–6, 8",
          who: "Research playbook"
        }
      ],
      alsoIn: ["adc-17 The 3x3x1 sprint and the 8 checks (Paul's mentor gate)", "Content Production Craft (Sizes and safe zones)", "Meta Ads tab (campaign structure; hook rate, hold rate and the testing metrics)"],
      idea: "Paul's 8 checks (adc-17) are your mentor gate. The playbook's QA list runs alongside them and adds the AI-era checks. Run it on **every asset:**\n\n1. One message, one focal point, one CTA.\n2. Hook visible and legible within 2 seconds, **sound off**.\n3. Text inside the 9:16 safe zone: **top 14%, bottom 35%, sides 6%**. On 1080×1920 that's 269 px top, 672 px bottom, 65 px each side.\n4. Contrast checked **at phone size**; **3–7 words per overlay**.\n5. Brand fonts and colors from the kit; **logo small and late**.\n6. Banned words absent; no emojis (PMT).\n7. **No synthetic people; every AI edit logged** (expect the “AI info” label).\n8. Claims accurate: pricing, locations, schedules and any licensing claims confirmed with the client.\n9. Landing page matches the ad's promise and location.\n\n**PMT's banned words** (from the playbook's copy rules): cheap, easy, discount, guaranteed, coach, coaches, coaching. Say *instructor* and *training*.\n\n**Safe zones, two sources.** Content Production Craft teaches the Scroll-Stopping program's figures (10/19/26: Reels top 250 px, bottom 450 px, plus the right-side button column). The playbook (10/30/26) is newer and more conservative: bottom 35%, or 672 px. Build to the playbook's numbers and always confirm with the Safe Zone overlay in Ads Manager.\n\n**CTA design (Part 8).** Ads: one button-style label (“Save your seat”) inside the safe zone, high contrast, plus the platform button (Book now or Learn more). Organic: “Link in bio to save your seat” as the last line and on the final slide.\n\n**Step 7, launch.** One campaign per objective (leads or purchases); broad targeting within a radius around each location, or regional clusters; one ad set with the 8–10 distinct ads; **Advantage+ creative enhancements only selectively** (adc-28 has the REI two-handlebar story). The build itself is in the Meta Ads tab, and so is step 8: read, cut, iterate.\n\nThe mistakes this gate catches most often (Part 9): text in the bottom 35% of Reels, too many words and thin fonts, logo-first openings, and AI enhancements nobody reviewed.",
      keyPoints: [
        "Nine checks on every asset, alongside Paul's 8.",
        "9:16 safe zone: top 14%, bottom 35%, sides 6% (269 / 672 / 65 px on 1080×1920).",
        "3–7 words per overlay, checked at phone size, sound off.",
        "No synthetic people; log AI edits; banned words and claims checked with the client.",
        "Launch: one campaign per objective, broad radius, 8–10 distinct ads, enhancements only selectively."
      ],
      why: "AI makes it easy to ship 30 assets in a day, which also makes it easy to ship 30 mistakes. A fixed gate is what lets ZDub move fast without a client ever seeing a misspelled overlay or a fake student.",
      example: {
        title: "One PMT Reel through the gate",
        before: "Logo animation for the first 2 seconds; “Learn to ride with Pacific Motorcycle Training's easy, expert coaching!” in thin white type across the bottom third; auto-captions uncorrected; Advantage+ enhancements all on.",
        after: "Opens on a student's first clutch release; overlay “Never ridden? Start here.” in the upper third; corrected captions; “Save your seat” label above the 35% line; logo small in the last second; generative enhancements off; landing page headline mirrors the hook.",
        body: "The before fails checks 1, 2, 3, 5 and 6 (“easy” and “coaching” are banned words) and skips the enhancement review. The after passes all nine."
      },
      practice: [
        {
          prompt: "Run the nine checks on one finished PMT asset (or a prospect's live ad).",
          fields: ["Asset", "Checks passed (numbers)", "Checks failed and the fix for each", "Banned words found", "Ship / fix / restart"],
          rubric: ["All nine checks answered honestly", "Safe-zone check done with the overlay or a guide layer", "Claims marked for client confirmation", "Verdict matches the failures"]
        }
      ],
      today: {
        task: "Add a locked, hidden guide layer to PMT's 9:16 Canva template marking top 14%, bottom 35% and sides 6%. Then run every PMT asset in the current batch through the nine checks and fix what fails.",
        output: "Safe-zone guide layer + a checked PMT batch",
        minutes: 30,
        suggested: false
      },
      check: [
        {
          q: "What is the 9:16 safe zone in the playbook, in pixels on 1080×1920?",
          a: "Top 14% (269 px), bottom 35% (672 px), sides 6% (65 px)."
        },
        {
          q: "Name three AI-era checks that Paul's 8 checks don't spell out.",
          a: "No synthetic people and every AI edit logged; banned words and no emojis; landing page matches the ad's promise and location (also: sound-off legibility in 2 seconds)."
        },
        {
          q: "What's the playbook's launch structure?",
          a: "One campaign per objective, broad targeting in a radius around each location (or regional clusters), one ad set with 8–10 distinct ads, Advantage+ creative enhancements used selectively."
        }
      ]
    },
    {
      id: "adc-33",
      part: "ai-workflow",
      title: "The copy prompt template: 20 hooks, 5 texts, 5 headlines",
      minutes: 9,
      tags: ["Playbook"],
      source: [
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Part 5 Prompt Frameworks and Templates: Copy prompt (ChatGPT or Claude); Part 8 Angles and sample copy; Part 9 Mistake 12",
          who: "Research playbook"
        },
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Part 1 Books: Hey Whipple, Squeeze This (write many headlines and throw most away)",
          who: "Research playbook (summarizing Luke Sullivan)"
        }
      ],
      alsoIn: ["adc-21 From AI draft to your voice (the edit pass)", "adc-24 The AI variant engine", "Copywriting tab (hooks & the first 3 seconds)"],
      idea: "A vague prompt gets vague copy. The playbook's copy prompt works because it front-loads the brief and the rules, then asks for a fixed quantity in fixed containers.\n\n**The template (copy it, fill the brackets):**\n\n> You are a direct-response copywriter for [Client], a [service] in [locations]. Audience: [persona]. Single-minded promise: [promise]. Proof: [facts]. Objections: [list]. Voice: calm, expert, encouraging. Rules: no emojis; never use the words cheap, easy, discount, guaranteed, coach, coaches or coaching (use instructor/training). Write 20 hooks under 8 words in five categories (fear-reversal, curiosity, specificity, local, outcome). Then 5 primary texts of up to 125 characters and 5 headlines of up to 40 characters. Flag any claim that needs client verification.\n\n**Why each part is there:**\n\n- **Promise, proof and objections** come from your brief (adc-29), so the AI writes from real context, not thin air.\n- **Voice plus banned words** blocks the most common failure: off-brand words slipping into AI copy (Part 9, mistake 12). Run a banned-word check on the output anyway.\n- **Five hook categories** force range instead of 20 versions of one line: fear-reversal (“Never ridden? Start here.”), curiosity, specificity, local (“Riding the coast this fall? Fog changes everything.”) and outcome.\n- **Length limits** (hooks under 8 words, primary texts up to 125 characters, headlines up to 40) make the output fit overlays and placements without rewriting.\n- **“Flag any claim”** turns the AI into a fact-check assistant. Anything about pricing, schedules, licensing or pass rates goes back to the client before it ships.\n\n**Then the human pass.** Hey Whipple's rule: write many, throw most away. From 20 hooks keep 3–5, then edit them the way Cam and Logan do (adc-21): read aloud, cut AI phrases and em dashes, add the customer's own words.\n\nThe playbook's sample PMT lines already follow the rules: “Never ridden? Start here.” · “Been off the bike for years?” · “Brake later. Turn sharper. Ride smarter.” · “The gift of riding, done right.” (Use the gift line only if PMT confirms it sells gift cards.)\n\nFor a trade client, keep the structure and swap the voice and banned words for theirs.",
      keyPoints: [
        "Front-load the brief: client, service, locations, persona, promise, proof, objections.",
        "Lock voice and banned words in the prompt, then still run a banned-word check.",
        "20 hooks under 8 words across fear-reversal, curiosity, specificity, local, outcome.",
        "5 primary texts (≤125 characters) and 5 headlines (≤40 characters).",
        "Ask the AI to flag claims for client verification; keep 3–5 hooks and edit them yourself."
      ],
      why: "A saved, filled prompt per client turns a blank page into 30 on-brand options in a minute. Your time goes into choosing and checking, which is the part clients pay for.",
      example: {
        title: "Filled for PMT's first-timer angle",
        body: "> You are a direct-response copywriter for Pacific Motorcycle Training, a motorcycle rider training school in Woodland, South San Francisco, San Bruno, Livermore, Salinas, Cloverdale and Eureka, CA. Audience: adults who have never ridden and worry they'll be the only beginner. Single-minded promise: our instructors start you from zero, at a calm pace, on our bikes. Proof: [training bikes provided: confirm]; [instructor names]; [2–3 real review quotes]. Objections: I'll look foolish; I don't own a bike; I'm too old to start; it feels dangerous. Voice: calm, expert, encouraging. Rules: no emojis; never use the words cheap, easy, discount, guaranteed, coach, coaches or coaching (use instructor/training). Write 20 hooks under 8 words in five categories (fear-reversal, curiosity, specificity, local, outcome). Then 5 primary texts of up to 125 characters and 5 headlines of up to 40 characters. Flag any claim that needs client verification.\n\nAnything in square brackets is a fact you confirm with PMT before it goes in."
      },
      practice: [
        {
          prompt: "Fill the template for one PMT angle, run it, and keep the best of each container.",
          fields: ["Your filled prompt", "Best hook per category (5)", "Best 2 primary texts (≤125 characters)", "Best 2 headlines (≤40 characters)", "Claims the AI flagged + what you'll ask PMT"],
          rubric: ["Every bracket filled with real, checkable facts", "Kept hooks contain no banned words", "Lengths are within the limits", "Every flagged claim has a question for the client"],
          model: "Filled prompt: see the example above. Hooks kept: fear-reversal “Never ridden? Start here.”; curiosity “What happens in your first hour?”; specificity “Walk it first. Then ride.” (confirm with PMT that class starts this way); local “Woodland riders start right here.”; outcome “From nervous to riding, one weekend.” (confirm course length). Headline: “Beginner rider training in Woodland” (35 characters)."
        },
        {
          prompt: "Make a version for a Sacramento-area trade (roofer, HVAC or med spa).",
          fields: ["Filled prompt for the trade", "Their voice and banned words", "Top 3 hooks after your edit"],
          rubric: ["Locations and persona are specific", "Banned words reflect that client's rules", "Hooks are edited for voice, not pasted raw"]
        }
      ],
      today: {
        task: "Save the filled PMT copy prompt as a reusable snippet in PMT's client brain. Run it for two angles and keep the best three hooks per angle after a banned-word check.",
        output: "Saved PMT prompt + 6 checked hooks",
        minutes: 30,
        suggested: false
      },
      check: [
        {
          q: "What are the five hook categories in the template?",
          a: "Fear-reversal, curiosity, specificity, local and outcome."
        },
        {
          q: "What are the length limits?",
          a: "Hooks under 8 words; primary texts up to 125 characters; headlines up to 40 characters."
        },
        {
          q: "Why ask the AI to flag claims?",
          a: "So anything needing client verification (pricing, schedules, licensing) is caught before it ships; AI drafts, the client confirms."
        }
      ]
    },
    {
      id: "adc-34",
      part: "ai-workflow",
      title: "The image prompt framework for Midjourney V8.2 and Firefly",
      minutes: 9,
      tags: ["Playbook", "Platform fact (re-check)"],
      source: [
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Part 5 Image prompt framework (Midjourney V8.2 / Firefly); Part 3 Tool notes (Midjourney V8 changes; Licensing); Part 1 The AI Advantage (reverse-engineering prompts); Caveats",
          who: "Research playbook"
        }
      ],
      alsoIn: ["adc-16 Build statics with AI (LC scene prompt structure)", "Content Production Craft (composition: room for text)"],
      idea: "The playbook's image prompt has seven slots, always in this order:\n\n**[Subject + action] + [setting with local specifics] + [camera and lens] + [light and time of day] + [mood] + [composition with negative space for text] + parameters**\n\n**Slot by slot, for PMT:**\n\n- **Subject + action:** “a row of training motorcycles lined up,” “a riding instructor demonstrating clutch control.” Category truths, not metaphors.\n- **Setting:** “freshly painted practice range,” “Northern California oak-studded hills.” Local detail makes it PMT's world instead of a stock world.\n- **Camera and lens:** “35mm lens,” “low angle,” “over-the-shoulder,” “shallow depth of field.”\n- **Light and time:** “sunrise, long soft shadows,” “overcast even daylight.”\n- **Mood:** “documentary realism,” “candid editorial photography.”\n- **Composition:** “generous empty sky in upper third for headline.” You add the text later in Canva, so leave room.\n- **Parameters:** --ar 4:5 or --ar 9:16; --sref [brand mood board image] --sw 100–300 so every generation looks like one family; --seed for controlled variants; --no text, logo, watermark.\n\n**Midjourney V8 notes (re-check; changed during 2026):**\n\n- **V8.2 has been the default since July 24, 2026.** Prompts carrying --v 6.0 are outdated.\n- The **V8 Edit Model (--edit, up to four reference images)** replaced Omni Reference, Character Reference and Retexture. --oref is now a V7-only control.\n- --sref with --sw 0–1000 and --seed still matter; --hd gives 2048-px output.\n- For photographic realism use the raw or less-stylized setting, but --style raw is legacy syntax in some guides. Check the current parameter list.\n\n**Reverse-engineer a winner (The AI Advantage).** Give ChatGPT a strong reference photo and ask it to write the prompt that would recreate it. Save that as a reusable “recipe,” then lock the brand look with a style reference.\n\n**What these images are for:** backgrounds, mood boards, extensions and planning a real shoot. Final PMT ads feature real photos (adc-28). Never prompt for real people, trademarks, motorcycle brand logos or another artist's style, and log your prompts and seeds.",
      keyPoints: [
        "Seven slots: subject + action, local setting, camera/lens, light/time, mood, composition with room for text, parameters.",
        "Parameters: --ar 4:5 or 9:16, --sref + --sw 100–300, --seed, --no text, logo, watermark.",
        "V8.2 is default since 7/24/26; --edit replaced Omni/Character Reference; --oref is V7-only.",
        "Reverse-engineer strong reference photos into reusable prompt recipes.",
        "Use AI images for backgrounds, mood boards and shoot plans; real photos carry the proof."
      ],
      why: "A fixed framework plus a PMT style reference means every image you generate looks like the same brand and leaves room for the headline, instead of a random pile of pretty pictures.",
      example: {
        title: "Building one PMT background, slot by slot",
        body: "Subject + action: a row of training motorcycles lined up · Setting: on a freshly painted practice range, orange cones forming a curving path, Northern California oak-studded hills · Camera: low angle, 35mm lens · Light: sunrise, long soft shadows · Mood: natural color, documentary realism · Composition: generous empty sky in upper third for headline · Parameters: --ar 4:5 --sref [PMT mood board] --sw 150 --no text, logos, people\n\nThat's the playbook's improved prompt 1, taken apart so you can see each slot doing a job."
      },
      practice: [
        {
          prompt: "Write two PMT prompts with all seven slots filled.",
          fields: ["Prompt A: 4:5 static background, no people", "Prompt B: 9:16 mood-board shot for planning a real shoot", "Which slot did the most work, and why?"],
          rubric: [
            "All seven slots present, in order",
            "Concrete category truths (bikes, cones, range, gear, local landscape), no metaphors",
            "Negative space reserved for text",
            "--no text/logos; --sref for the PMT look; current V8 syntax"
          ],
          model: "A: the example above. B: “Over-the-shoulder view of a riding instructor in a hi-vis vest demonstrating clutch control to a student seated on a small motorcycle, gloved hands in sharp focus, shallow depth of field, overcast even daylight, practice range background, candid editorial photography --ar 9:16 --no text, logos.” Then recreate the shot with real PMT staff instead of running the AI version."
        }
      ],
      today: {
        task: "Pick 3–5 real PMT photos (or your best range shots) as PMT's --sref mood board. Generate one range background with the seven-slot framework, add a headline in Canva, and save the prompt, seed and use in PMT's prompt library.",
        output: "PMT style reference + 1 background + saved prompt",
        minutes: 30,
        suggested: false
      },
      check: [
        {
          q: "List the seven slots of the image prompt framework.",
          a: "Subject + action; setting with local specifics; camera and lens; light and time of day; mood; composition with negative space for text; parameters."
        },
        {
          q: "What replaced Omni Reference and Character Reference in Midjourney V8?",
          a: "The V8 Edit Model (--edit, up to four reference images); --oref is now V7-only."
        },
        {
          q: "What do --sref and --sw do?",
          a: "Apply a style reference image (such as PMT's mood board) at a chosen strength, so every generation looks like one family."
        }
      ]
    },
    {
      id: "adc-35",
      part: "ai-workflow",
      title: "Fix your saved Midjourney prompts: from corporate cliché to category truth",
      minutes: 9,
      tags: ["Playbook", "Platform fact (re-check)"],
      source: [
        {
          doc: "The AI-Assisted Creative Playbook (Late 2026), 10/30/26",
          section: "Key Finding 3; Part 5 Critique of the three saved prompts; Improved versions for a motorcycle training school; Why; Part 9 Mistake 2",
          who: "Research playbook"
        }
      ],
      alsoIn: ["adc-34 The image prompt framework", "Content Production Craft (Illustrator/Canva for icons and badges)"],
      idea: "The playbook reviewed the three Midjourney prompts you had saved and called them wrong for PMT. Not because they're ugly. Because they say nothing about motorcycles, Northern California or rider confidence.\n\n**Three patterns behind the problems:**\n\n1. **Outdated flags.** --v 6.0 when V8.2 has been the default since July 24, 2026; --style raw is legacy syntax in some guides.\n2. **Generic corporate metaphors.** Staircases (growth), charts (results) and shields (protection) are SaaS and cybersecurity clichés. Part 9 lists this as mistake 2: corporate metaphors “instead of category truths.”\n3. **Wrong signals.** Navy and gold say finance, not riding. A fake growth chart implies data you don't have. Moody office light misframes an outdoor skill.\n\n**What to keep:** the ideas underneath. Progress, expertise and safety are exactly what PMT should show. The fix is to make each one concrete:\n\n- **Progress → a range at sunrise.** “Low-angle photograph of a row of training motorcycles lined up on a freshly painted practice range at sunrise, orange cones forming a curving path into the distance, Northern California oak-studded hills, long soft shadows, 35mm lens, natural color, generous empty sky in upper third for headline, documentary realism --ar 4:5 --sref [PMT mood board] --sw 150 --no text, logos, people”\n- **Expertise → an instructor's hands.** “Over-the-shoulder view of a riding instructor in a hi-vis vest demonstrating clutch control to a student seated on a small motorcycle, gloved hands in sharp focus, shallow depth of field, overcast even daylight, practice range background, candid editorial photography --ar 9:16 --no text, logos.” Use it to plan the shot, then **recreate it with real PMT staff** rather than running the AI version.\n- **Safety → a hand-drawn badge.** Draw a simple helmet-plus-road-curve mark in Illustrator in brand colors. Use Midjourney only to explore silhouettes: “flat two-color icon exploration sheet, motorcycle helmet merged with a curving road line, thick strokes, no gradients --ar 1:1 --no text.”\n\n**Why the new versions work:** they swap metaphors for category truths (bikes, cones, range, light, local landscape), reserve negative space for type, avoid fake people and fake data, and use a brand style reference so every generation looks like one family.\n\nThe bigger fix, in the playbook's words: use AI **around** real photos, not instead of them. These improved prompts are for backgrounds, mood boards and extensions.",
      keyPoints: [
        "Retire --v 6.0; V8.2 is the default since 7/24/26.",
        "Staircases, charts and shields are corporate clichés; show category truths instead.",
        "Keep the idea (progress, expertise, safety); change the picture to bikes, range, hands, gear.",
        "Leave negative space for text; --no text, logos; --sref for one family look.",
        "AI instructor shots are shoot plans; badges get drawn by hand."
      ],
      why: "These are prompts you actually reach for. Fixing them once stops generic images from leaking into PMT's ads and gives you a prompt library that sounds like the client's world.",
      table: {
        head: ["Saved prompt", "Problems", "Verdict"],
        rows: [
          [
            "1. Geometric staircase, navy and gold, “corporate marketing design asset,” --v 6.0",
            "Outdated model flag; abstract growth metaphor is a SaaS cliché; nothing about motorcycles, people or place; navy and gold signal finance, not riding",
            "Do not use for PMT"
          ],
          ["2. Tablet with a growth chart in an office, --style raw", "Wrong world (office/B2B); a fake chart implies data you don't have; moody office light misframes an outdoor skill", "Do not use"],
          ["3. Isometric shield with lightning bolts, neon blue", "“Protection” as clip art; neon AI look; reads like a cybersecurity app", "Only as inspiration for a hand-drawn safety icon in Illustrator"]
        ]
      },
      example: {
        title: "Prompt 1, before and after",
        before: "Geometric staircase, navy and gold, corporate marketing design asset --v 6.0",
        after: "Low-angle photograph of a row of training motorcycles lined up on a freshly painted practice range at sunrise, orange cones forming a curving path into the distance, Northern California oak-studded hills, long soft shadows, 35mm lens, natural color, generous empty sky in upper third for headline, documentary realism --ar 4:5 --sref [PMT mood board] --sw 150 --no text, logos, people",
        body: "Same idea (progress: a path that goes somewhere), now shown with things a PMT student will actually see on day one, with room for the headline and a style reference that ties it to the brand."
      },
      practice: [
        {
          prompt: "Paste one of your own saved prompts (or pick one from the table). Diagnose it with the critique, keep the idea underneath, and rewrite it with the seven-slot framework.",
          fields: [
            "Your original prompt (pasted)",
            "Problems: flags, metaphor, signals, fake people or data",
            "The idea worth keeping (progress, expertise, safety, other)",
            "The PMT category truth that shows that idea",
            "Rewritten prompt (all seven slots + parameters)",
            "The real photo that will replace or join it in the final ad"
          ],
          rubric: [
            "No --v 6.0 or legacy flags; checked against V8.2",
            "No abstract corporate metaphor; shows bikes, range, gear, instructors or local landscape",
            "Negative space reserved for the headline",
            "--no text/logos and no fake people or data in a final ad",
            "Uses --sref for the PMT look"
          ],
          model: "Original: isometric shield with lightning bolts, neon blue. Problems: protection as clip art, neon AI look, reads like a cybersecurity app, no motorcycles or place. Keep: safety. Category truth: the gear check before a first ride. Rewrite: “Close-up photograph of gloved hands fastening a motorcycle helmet chin strap at a training range, an instructor's hi-vis sleeve at the edge of frame, a row of training bikes softly out of focus behind, early morning light, 50mm lens, shallow depth of field, calm and focused mood, clean empty space in upper third for headline, documentary realism --ar 4:5 --sref [PMT mood board] --sw 150 --no text, logos, watermark.” Use: a shot plan for the next shoot; the final ad uses a real PMT gear-check photo. The safety badge itself gets drawn by hand in Illustrator."
        },
        {
          prompt: "In one line each, name the category truth that replaces the other two saved prompts.",
          fields: ["Prompt you didn't rewrite #1 → category truth", "Prompt you didn't rewrite #2 → category truth"],
          rubric: ["Each is something you could photograph at a PMT range", "No people presented as real PMT students or staff"]
        }
      ],
      today: {
        task: "Open your saved Midjourney prompts. Archive the three corporate ones, rewrite one with the framework, generate four images with your PMT --sref, and pick one as a background or shoot reference. Log the prompt, seed and intended use.",
        output: "1 rewritten prompt + 1 usable PMT background or shot reference",
        minutes: 30,
        suggested: false
      },
      check: [
        {
          q: "Why are the three saved prompts wrong for PMT?",
          a: "An outdated flag (--v 6.0 when V8.2 is default since July 24, 2026) and generic corporate clichés (staircases, charts, neon shields) that say nothing about motorcycles, Northern California or rider confidence."
        },
        {
          q: "What do you do with the improved AI instructor image?",
          a: "Use it to plan the shot, then recreate it with real PMT staff rather than running the AI version."
        },
        {
          q: "What's the right use of Midjourney for the safety badge?",
          a: "Only to explore silhouettes; draw the final helmet-plus-road-curve mark by hand in Illustrator in brand colors."
        }
      ]
    }
  ]
});
