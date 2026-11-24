HUB.tab({
  id: "book-ogilvy-digital",
  chunk: true,
  parts: [],
  lessons: [
    {
      id: "og-09a",
      part: "p4",
      chapter: 9,
      chapterTitle: "Data: The Currency of the Digital Age · Big Data and Its Cautions",
      pages: "214–218",
      title: "Data, the Currency of the Digital Age: big data is old data with new pipes, so collect with a purpose",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 9 · Data: The Currency of the Digital Age · opening and The Big Data Cautions · PDF pp. 214–218", who: "Miles Young" }],
      quotes: [
        { text: "Just because you can collect data doesn’t mean you should.", page: "216" },
        { text: "Direct response was my first love. And later, my secret weapon.", page: "216" }
      ],
      idea: "Young opens by deflating the hype. *Big data* as a phrase goes back to a 1997 paper, and the data itself isn’t new. His former colleague Dimitri Maex calls what we all give off **digital exhaust**: buy a pair of red socks and you leave a trail about where you are, what you like, your habits and your money. That trail always existed; what changed is the **number of sources** and the cheap means of putting them together. They come in two kinds:\n\n- **Structured data**: organized and machine-readable (a warehouse inventory; a record of who bought what, when, and how they paid).\n- **Unstructured data**: messy and human (a blog post, your inbox, your Facebook feed).\n\nAll of it has to be stored, which is where **the Cloud** comes in: rented storage and computing power. Old-style timesharing rationed a scarce resource; the Cloud hands out an abundant one, and companies like Netflix and Uber scaled inside it. Analysis that once took a data scientist two days now takes hours, but the hard question hasn’t moved an inch: *what* should we analyze, and *why*? Cloud vendors advertise as if the tool were the goal (“my cloud is better than yours”). Storage is now a commodity, so IBM differentiated its cloud with what it is genuinely good at: analytics and industry consulting.\n\nThen the Ogilvy link. Data in advertising is old news: David Ogilvy called direct response his first love and later his secret weapon, precisely because it was rooted in measured results. Young’s own first lesson at Ogilvy Direct was humbler: if a client asks what response rate a mailing will get, look them in the eye and say “4 per cent.” Pre-internet data was precise but limited to your own campaigns; now it is everywhere, and enthusiasts promise a customer-centric utopia. Young dislikes the very term *big data*, because it spotlights the technology rather than the customer, whose life has barely changed.\n\nSo he lists **four cautions**:\n\n1. **The collection fallacy**: more data is not more value. As Maex puts it, measure what you *need* to measure, not what you *can*, and only what lines up with your goals. You decide that, not the algorithm.\n2. **The utility deficit**: companies store everything and use little, because they don’t grasp the basics of data science.\n3. **Siloization**: siloed people can’t work together; siloed data can’t work at all.\n4. **The tolerance threshold**: the louder the boosters praise unlimited data, the more people recoil from the invasion of privacy.\n\n> Ogilvy’s principle holds up in digital: data was always the secret weapon. What doesn’t hold up is the belief that *more* of it is automatically better.",
      keyPoints: [
        "Big data isn’t a new kind of data: it’s many more sources (structured and unstructured) plus cheap cloud storage and computing to combine them.",
        "The tool is not the goal. Storage is a commodity; the hard question is still what to analyze and why.",
        "Ogilvy loved direct response because it was rooted in data. That principle survives; the ‘more is better’ myth doesn’t.",
        "Four cautions: collection fallacy, utility deficit, siloization, tolerance threshold.",
        "Measure what you need to measure, not what you can, and only what lines up with your goals."
      ],
      why: "Meta Ads Manager, Google Analytics, Instagram insights and a booking system each spit out dozens of numbers; a small agency that tries to track everything ends up using nothing. Picking the few numbers that tie to a client’s goal (registrations, booked jobs) is what makes ZDub’s reporting worth paying for.",
      example: {
        title: "PMT’s data diet: from ‘track everything’ to five numbers that matter",
        before: "Monthly report to PMT: 38 metrics from Meta (reach, frequency, CPM, link clicks, outbound CTR, video plays at 25/50/75/100%…), Google Analytics, Instagram insights and the booking system, pasted as four separate screenshots nobody reads.",
        after: "One page, same five numbers every month:\n1. Registrations by course\n2. Cost per registration\n3. Seat-fill rate per class date\n4. Share of students from ads vs. referrals vs. search\n5. New Google reviews\nEverything else stays in the dashboard for diagnosis, not in the report.",
        body: "That fixes the collection fallacy and siloization at once: the numbers come from one place, each connects to PMT’s real goal (full classes at a profitable cost), and the owner can act on them in five minutes. The tolerance threshold applies too: use the first-party data PMT legitimately has (people who registered), and never write an ad that feels like it has been watching someone."
      },
      practice: [
        {
          prompt: "Dissect it: Young says big data puts all the emphasis on the technology and not on the consumer experience. Take his four cautions apart.",
          fields: [
            "In your own words, what is the ‘collection fallacy’, and why does the sheer size of big data make it worse?",
            "Which caution (collection fallacy, utility deficit, siloization, tolerance threshold) do you see most at ZDub or PMT right now? Give the specific example.",
            "Argue the other side: when would collecting more data than you currently need actually be smart?"
          ]
        },
        {
          prompt: "Apply it: Write a data purpose statement for PMT (or a prospect): the one business problem the data must help solve, the 3–5 numbers you’ll track for it, where each lives, one silo you’ll connect, one number you’ll stop reporting, and your privacy line.",
          fields: ["The business problem (one sentence)", "The 3–5 numbers and their source", "One silo you’ll connect", "The number you’ll stop reporting, and why", "The privacy line you won’t cross"],
          rubric: [
            "Starts with a business problem, not with the data that happens to be available",
            "Every number ties to the goal; nothing is there just because it can be measured (collection fallacy)",
            "Names at least one silo to connect (e.g. Meta leads vs. the booking system)",
            "States a clear privacy line (tolerance threshold)"
          ],
          model: "Problem: PMT’s weekday Basic classes run 40% empty while weekends sell out.\nNumbers: (1) weekday vs. weekend seat-fill % (booking system); (2) cost per weekday registration (Meta + booking system, matched by UTM); (3) lead-to-registration rate for weekday leads (CRM); (4) the top three objections heard on calls and in DMs (CRM notes).\nSilo to connect: Meta lead forms and the booking system, so we see which ads produce registrations, not just leads.\nStop reporting: post reach and 25% video views; they say nothing about weekday seats.\nPrivacy line: no retargeting copy that references someone’s browsing. “Tuesday classes still have room” is fine; “We saw you look at the M1 page three times” is not."
        }
      ],
      today: { task: "Open PMT’s last ads report (or any client’s). List every metric in it, then cross out each one that doesn’t connect to a business goal. Keep at most five.", output: "A one-line purpose statement plus a five-metric list for the next report.", minutes: 20 },
      check: [
        { q: "What does Dimitri Maex mean by ‘digital exhaust’?", a: "The constant trail of data we give off through ordinary actions: buying red socks reveals location, preferences, habits and finances." },
        { q: "Name Young’s four big-data cautions.", a: "The collection fallacy, the utility deficit, siloization, and the tolerance threshold (privacy)." },
        { q: "Why did David Ogilvy love direct response?", a: "Because it was rooted in data and measured results. He called it his first love and later his secret weapon." }
      ],
      examples: [
        {
          id: "og-ex-ibm-cloud-model-city",
          title: "think IBM Cloud: the model city",
          brand: "IBM", agency: "", year: "",
          format: "TV spot",
          pdfPage: 216,
          what: "A film still: a miniature city of lit-up skyscrapers built inside a huge, empty studio, with cotton-wool clouds hanging on strings above it. At street level there are tiny shopfronts and a café counter with real people in them. The white super reads “think IBM Cloud”, with “think” picked out in IBM blue.",
          idea: "Make an invisible commodity (rented servers) tangible by literally hanging the cloud over a city of businesses, and pin the difference on IBM’s real strength: analytics and industry know-how, not storage.",
          elements: [
            { n: 1, name: "Concrete metaphor for an abstract product", detail: "Clouds on strings over a model city turn ‘the Cloud’ into something you can see sitting above real businesses.", principle: "Show the product working instead of talking about technology in the abstract" },
            { n: 2, name: "Human scale inside the model", detail: "People at a café counter and lit shopfronts say this is about businesses and their customers, not data centres.", principle: "Young: put the emphasis on the consumer experience, not the technology" },
            { n: 3, name: "Brand line in the house style", detail: "“think” (IBM’s long-standing motto) in blue against “IBM Cloud” in white: brand and category in one lockup.", principle: "Brand name integral to the idea" },
            { n: 4, name: "Differentiation by strength, not spec", detail: "Cloud is a fungible commodity, so IBM sold its analytics tools and consultants (you’re more likely to find a manufacturing expert at IBM).", principle: "Look beyond the commodity to how and why it is used" }
          ],
          layout: { aspect: "16:9", boxes: [
            { n: 1, label: "Clouds on strings (left)", x: 0, y: 6, w: 28, h: 30 },
            { n: 2, label: "Café and shopfronts with people", x: 36, y: 2, w: 30, h: 28 },
            { n: 1, label: "Clouds on strings (right)", x: 74, y: 6, w: 26, h: 30 },
            { n: 3, label: "“think IBM Cloud” super", x: 28, y: 38, w: 44, h: 12 },
            { n: 1, label: "Model city skyline", x: 18, y: 50, w: 64, h: 50 }
          ] },
          recreate: {
            brief: "Take the invisible thing you sell, build a physical metaphor of it that sits over real customers living their day, then add your brand line.",
            fields: [
              { id: "invisible", label: "The invisible thing you sell", hint: "ZDub: follow-up automation; PMT: confidence on two wheels" },
              { id: "metaphor", label: "The physical metaphor", hint: "What object could stand for it? (clouds on strings, a safety net, a co-pilot)" },
              { id: "humans", label: "The real people in the scene", hint: "Who is living a normal day under it?" },
              { id: "strength", label: "Your real point of difference", hint: "What do you do better than the commodity version?" },
              { id: "line", label: "Brand line", hint: "3–5 words with your name in it" }
            ],
            steps: [
              "Write the invisible benefit in one sentence and the object that could make it visible.",
              "Build the set cheaply: a tabletop scene shot on iPhone (Cinematic mode), or a Canva composite of the metaphor over a real customer photo.",
              "Put one real person doing something ordinary in frame, so it’s about them, not the tech.",
              "Add the brand line as a clean super in Canva or CapCut, with your brand colour on the key word.",
              "Cut a 10–15 second vertical version in CapCut for Reels and a still for the feed.",
              "Run both as a small Meta test against your current best ad and compare cost per lead."
            ]
          }
        }
      ]
    },
    {
      id: "og-09b",
      part: "p4",
      chapter: 9,
      chapterTitle: "Data: The Currency of the Digital Age · Really Useful Data (prerequisites 1–3)",
      pages: "218–225",
      title: "Really Useful Data: start problem first, not data first",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 9 · Value Spectrum, Really Useful Data 1–3 (single enterprise view, platform impediments, measurement vs. effectiveness) · PDF pp. 218–225", who: "Miles Young" }],
      quotes: [
        { text: "But the secret is to start problem first, not data first.", page: "219" },
        { text: "A measurement culture is obsessed by process; while an effectiveness culture is obsessed by results.", page: "223" }
      ],
      idea: "Having knocked down the hype, Young offers his alternative: think **small**, not big. What part of big data is small enough to be beautiful? He calls it the **Really Useful Data Resolution**: combine a *wide-angle lens* (the whole business landscape) with a *narrow depth of field* (exactly what the data can practically do), and above all **start problem first, not data first**.\n\nOne tool he shows is Maex’s **value spectrum**: a two-by-two of customer value against loyalty, with an icon in each box (a pot of gold, a sack of acorns, a slot-machine jackpot, a bunch of lemons). Its point: some customers are treasure to find, some are acorns to nourish, some are a gamble, and some are lemons to ignore.\n\nHe then lists the data sets that build a single view of the business: **search intent modelling** (keyword clusters show how people think), **social listening** (sentiment and meaning), **primary research** (now cheap and fast), and a **results repository** (performance, cost and marketing data finally in one place, so you learn what worked and why).\n\nThen the first three of his **seven prerequisites of Really Useful Data**:\n\n1. **Take the single enterprise point of view.** A ‘single customer view’ of your own records isn’t enough any more; combine it with what customers reveal on Facebook, Google or Tencent. His red-sock supplier would love to know he just liked a photo of green socks.\n2. **Defeat platform impediments.** Platforms present themselves as all-knowing; they aren’t. People want to be known when they want to be known and anonymous when they don’t. Most marketers use a fraction of their technology, because buying a shiny toy is easy and changing the organization to act on it is hard.\n3. **Distinguish measurement from effectiveness.** Tim Broadbent’s surgeon: the operation was a success, but the patient died. A client with a poor repurchase rate kept beating its own quality targets every year but never tested against rivals, which is like setting a personal best and still losing the race. Revenue sat a third below where it could have been. Measurement cultures tick boxes and ask ‘how well did we work?’; effectiveness cultures do the right things and ask ‘how do we do better next time?’ Binet and Field add a warning: big-data tools tempt brands into instant ‘timely offers’, and the IPA evidence says that short-termism damages profitable brand building.\n\nThe page examples are all small, sharp uses of data: Caesars Palace sold the view of a rival’s fountains, MetLife sponsored the one article searchers kept landing on, and Babolat put measurement inside a racquet so it could coach.",
      keyPoints: [
        "Start problem first, not data first: a wide-angle lens on the business, a narrow focus on what data can practically do.",
        "The value spectrum sorts customers by value and loyalty: whom to find, nourish, gamble on or ignore.",
        "Single enterprise point of view = your own records plus what customers reveal on the platforms.",
        "Platforms aren’t omniscient, and people want to be known only when they want to be known.",
        "Measurement culture is about process and the past; effectiveness culture is about results and the next time."
      ],
      why: "Local businesses drown in ‘good’ numbers (CTR up, CPM down) while the phone stays quiet. Benchmarking PMT against competitors’ reviews, prices and search rankings, not just against last month, is the difference between a measurement culture and an effectiveness one.",
      example: {
        title: "Caesars-style listening for a Sacramento roofer",
        before: "Ad written from the owner’s guesses: “Quality roofing at fair prices. Licensed and insured. Call today for a free estimate.”",
        after: "After reading 120 Google reviews of the roofer and its three biggest competitors: the five-star reviews keep saying “you couldn’t tell they’d been here”, and competitors’ one-star reviews mention nails left in the driveway. New ad: “New roof by Friday. Not one nail left in your driveway. (Our reviews keep mentioning it.)”",
        body: "That’s social listening plus a single enterprise point of view: data the business doesn’t own (public reviews), mined to answer a real problem (why do people pick one roofer over another?) and fed to the ad, the website and the Google Business profile at once, exactly as Caesars Palace did with the fountain view."
      },
      practice: [
        {
          prompt: "Dissect it: Young’s surgeon story and the factory that only ever tested against itself.",
          fields: [
            "In your own words, what is the difference between a measurement culture and an effectiveness culture?",
            "Where in ZDub’s reporting are you measuring process (posts made, impressions served) instead of results?",
            "Argue the other side: when is benchmarking against your own past the right comparison?"
          ]
        },
        {
          prompt: "Apply it: Recreate the MetLife move for PMT. Find the page people actually land on when they search a PMT question, and plan how PMT shows up there.",
          fields: ["The search query", "The page that keeps ranking (and who owns it)", "How PMT gets onto that page (sponsor, ad placement, helpful answer, or build a better page)", "The headline and CTA shown there", "How you’ll measure it"],
          rubric: [
            "Starts from a real query people type, not from PMT’s own messaging (problem first)",
            "Identifies the page searchers actually land on",
            "PMT’s presence answers the searcher’s question first and sells second",
            "Has a measurable business result (registrations, calls), not just impressions"
          ],
          model: "Query: “how hard is the motorcycle class for beginners”.\nRanking pages: a Reddit thread in r/motorcycles and a forum Q&A sit in the top three.\nPMT move: (1) a genuinely helpful answer in the Reddit thread from PMT’s account, saying who we are; (2) a PMT page titled with the exact phrase, “How hard is motorcycle class for total beginners? (Our instructors answer)”, walking through the drills step by step; (3) a Google search ad on that phrase pointing to the page.\nHeadline/CTA on the page: “Most of our students start at zero. See class dates.”\nMeasure: registrations from that page via a UTM link, monthly."
        }
      ],
      today: { task: "Read the 30 most recent Google reviews for PMT and for its two closest competitors. Tally the phrases that repeat in the 5-star and 1-star reviews.", output: "Three repeated phrases plus one ad headline built on the strongest one.", minutes: 25 },
      check: [
        { q: "What is the ‘Really Useful Data Resolution’?", a: "Think small, not big: combine a wide-angle lens on the business with a narrow focus on what the data can practically do, and start problem first, not data first." },
        { q: "Why were Tim Broadbent’s client’s revenues a third lower than they could have been?", a: "It measured product quality only against its own past benchmarks, never against rivals, so it kept ‘improving’ while competitors built more reliable products and customers didn’t repurchase." },
        { q: "What are the first three prerequisites of Really Useful Data?", a: "Take the single enterprise point of view; defeat platform impediments; distinguish between measurement and effectiveness." }
      ],
      examples: [
        {
          id: "og-ex-caesars-fountain-view",
          title: "Caesars Palace: selling the neighbour’s fountains",
          brand: "Caesars Palace", agency: "Ogilvy & Mather", year: "",
          format: "Data / CRM",
          pdfPage: 221,
          what: "The page shows the Bellagio fountains erupting at night in front of the Las Vegas Strip’s lit-up Eiffel Tower. The work behind it is social listening: online reviews of Caesars Palace kept raving about the view across the street of the Bellagio’s famous fountains. Rather than resent a competitor’s signature feature, the hotel fed that finding to its creative, website, PR and search teams.",
          idea: "Guests told you, unprompted, what they love about staying with you, so sell exactly that, even if it technically belongs to the neighbour.",
          elements: [
            { n: 1, name: "Social listening", detail: "Sentiment and semantic analysis of online reviews surfaced one repeated delight: the fountain view.", principle: "Single enterprise point of view: use data you don’t own" },
            { n: 2, name: "The unexpected insight", detail: "What guests loved most wasn’t inside the hotel at all; it was the view of a rival’s attraction.", principle: "Insight as inspiration: data that sparks an idea" },
            { n: 3, name: "Fed to every team", detail: "Creative, site development, PR and search marketing all acted on the same finding.", principle: "Break the silos: shared data works, siloed data doesn’t" },
            { n: 4, name: "A plain business goal", detail: "The aim was simply to fill more rooms, and the data was used for exactly that.", principle: "Start problem first, not data first" }
          ],
          beats: [
            { n: 4, label: "The problem: fill more rooms" },
            { n: 1, label: "Listen: analyze reviews and social posts about the hotel" },
            { n: 2, label: "The pattern: guests rave about the Bellagio fountain view" },
            { n: 3, label: "Share it: creative, website, PR and search teams all get the same insight" },
            { n: 3, label: "Act: the view shows up in imagery, site content, PR stories and search terms" },
            { n: 4, label: "Result: more rooms filled" }
          ],
          recreate: {
            brief: "Mine what customers already say about you, find the surprising thing they love, and make every channel say it.",
            fields: [
              { id: "source", label: "Where customers talk", hint: "Google reviews, Yelp, Facebook comments, DMs" },
              { id: "pattern", label: "The repeated phrase", hint: "What do 5-star reviews keep saying?" },
              { id: "surprise", label: "Why it’s surprising", hint: "Is it something you never advertise?" },
              { id: "channels", label: "Where it goes", hint: "Ad headline, website hero, Google Business post, search keywords" },
              { id: "goal", label: "The business goal", hint: "Fill classes? Book estimates?" }
            ],
            steps: [
              "Copy your last 50–100 reviews (and your top two competitors’) into one doc.",
              "Highlight repeated words and phrases and count them. Flag anything you never mention in your ads.",
              "Pick the most surprising positive pattern and write it as a customer-voice headline.",
              "Put it in one Meta ad (Canva static), the website hero line and a Google Business post in the same week.",
              "Add the phrase as a keyword theme if you run search ads.",
              "After 7 days, compare cost per lead or registration against your current best ad."
            ]
          }
        },
        {
          id: "og-ex-metlife-cnn-money",
          title: "MetLife sponsors the article searchers kept finding",
          brand: "MetLife", agency: "Ogilvy & Mather", year: "",
          format: "Website",
          pdfPage: 222,
          what: "Two screens overlap: a Google results page for “types of life insurance”, and the CNN Money ‘Money 101’ article it kept surfacing, “Choosing the right life insurance”. A blue arrow joins them. On the article page MetLife owns the top banner and the right-hand rail, both featuring Snoopy and an orange “Get A Free Quote” button; the rail asks “Shopping for affordable life insurance?”",
          idea: "Search data showed where life-insurance shoppers ended up, so MetLife simply bought the page they were already reading.",
          elements: [
            { n: 1, name: "Search intent data", detail: "Noticing that one CNN Money article ranked at the top, time and again, for life-insurance searches.", principle: "Search intent modelling reveals the consumer’s thought process" },
            { n: 2, name: "Trusted editorial context", detail: "A neutral explainer article: the shopper is in research mode and wants help, not a pitch.", principle: "Relate intent to content" },
            { n: 3, name: "Top banner", detail: "A MetLife banner across the top with Snoopy and a ‘Get A Free Quote’ button.", principle: "Own the context, then make the call to action obvious" },
            { n: 4, name: "Rail ad that echoes the question", detail: "“Shopping for affordable life insurance?” repeats the reader’s own question, with the same quote button.", principle: "Precision: right message, right time, right person" },
            { n: 5, name: "Simplicity", detail: "No new technology, just a sponsorship of an existing page; new applications flooded in.", principle: "The simplest solutions are often still the most effective" }
          ],
          layout: { aspect: "4:5", boxes: [
            { n: 1, label: "Google results: ‘types of life insurance’", x: 0, y: 0, w: 62, h: 45 },
            { n: 3, label: "MetLife top banner + Get A Free Quote", x: 20, y: 22, w: 80, h: 10 },
            { n: 2, label: "CNN Money article: Choosing the right life insurance", x: 20, y: 33, w: 55, h: 67 },
            { n: 4, label: "Right rail: Shopping for affordable life insurance?", x: 76, y: 55, w: 24, h: 30 }
          ] },
          recreate: {
            brief: "Find the page your buyers already land on when they research, and show up there with a helpful answer and one simple CTA.",
            fields: [
              { id: "query", label: "The research question buyers type", hint: "e.g. ‘how long does a roof replacement take’" },
              { id: "page", label: "The page that keeps ranking", hint: "Search it in an incognito window: who owns results 1–3?" },
              { id: "access", label: "How you get onto that page", hint: "Sponsor, advertise, contribute an answer, or out-build it" },
              { id: "hook", label: "Your headline there", hint: "Echo the searcher’s own question" },
              { id: "cta", label: "The one CTA", hint: "Free quote, see class dates, book a call" }
            ],
            steps: [
              "List 10 questions customers ask before buying (from calls, DMs and Google’s ‘People also ask’).",
              "Search each one in an incognito window and note which pages rank in the top three.",
              "Pick the page that ranks for the most questions; find out who owns it and whether it takes ads, sponsors or guest content.",
              "If you can’t get onto it, build a better page that answers the exact question, titled with the exact phrase.",
              "Make the ad or banner in Canva: the searcher’s question as the headline plus one CTA button.",
              "Track with a UTM link and compare cost per lead against your Meta ads."
            ]
          }
        },
        {
          id: "og-ex-babolat-play-racquet",
          title: "Babolat: the racquet that coaches you",
          brand: "Babolat", agency: "Ogilvy & Mather", year: "",
          format: "App / digital product",
          pdfPage: 225,
          what: "Left: an overhead shot of a woman mid-forehand on a blue court, with on-screen graphics tracking the ball (‘BALL SPIN’, ‘LIFT’, ‘ANALYSE SHOT’). Right: a phone app with a player profile card (ranking, total shots, a Follow button), a technique percentage, an average score of 68.23, and a glowing triangle chart of endurance, technique and power.",
          idea: "Put the measurement inside the product and turn the numbers into coaching, so the data makes you better instead of just describing you.",
          elements: [
            { n: 1, name: "Sensor in the product", detail: "The racquet itself captures swing power, reaction speed and shot placement.", principle: "Creative technology: one object solving another problem (the racquet as coach)" },
            { n: 2, name: "Visualized data", detail: "Graphics over the action make invisible things (spin, lift) visible.", principle: "The most useful data has strong visual appeal" },
            { n: 3, name: "A few simple scores", detail: "Technique, endurance and power percentages plus one average score, not raw data.", principle: "Underdose with metrics" },
            { n: 4, name: "Social comparison", detail: "Profile, ranking and a Follow button connect you to other players.", principle: "Engagement: invite the customer to take a role" },
            { n: 5, name: "Effectiveness, not measurement", detail: "The point isn’t knowing your swing; it’s improving it next time.", principle: "Effectiveness culture asks: how can we do better next time?" }
          ],
          layout: { aspect: "3:2", boxes: [
            { n: 1, label: "Player on court", x: 0, y: 0, w: 45, h: 100 },
            { n: 2, label: "Ball spin / lift overlay", x: 14, y: 4, w: 36, h: 36 },
            { n: 4, label: "Profile card + Follow", x: 62, y: 14, w: 22, h: 22 },
            { n: 3, label: "Scores + triangle chart", x: 62, y: 40, w: 22, h: 52 }
          ] },
          recreate: {
            brief: "Give customers a simple score of their own progress and one next step to improve it.",
            fields: [
              { id: "measure", label: "What you can measure about each customer", hint: "PMT: braking distance, cone-weave smoothness, head checks; a gym: lifts" },
              { id: "scores", label: "The three scores you’d show", hint: "Keep it to three" },
              { id: "visual", label: "How it looks", hint: "Score card, triangle, progress bars" },
              { id: "next", label: "The coaching tip tied to the lowest score", hint: "What should they do next?" },
              { id: "share", label: "The shareable moment", hint: "Badge, certificate, story template" }
            ],
            steps: [
              "Pick three things you already observe for every customer.",
              "Design a one-page score card in Canva: three scores, a simple chart, one coaching tip.",
              "Have staff fill it in at the end of the service or class (a phone form works).",
              "Send it by text or email with a ‘next level’ offer tied to the lowest score.",
              "Add a story-size version they can post, with your handle on it.",
              "Track repeat purchases and referrals from people who received a score card."
            ]
          }
        }
      ]
    },
    {
      id: "og-09c",
      part: "p4",
      chapter: 9,
      chapterTitle: "Data: The Currency of the Digital Age · Really Useful Data (prerequisites 4–7)",
      pages: "225–231",
      title: "Really Useful Data (4–7): fewer metrics, real insight, and a closed loop",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 9 · Really Useful Data 4–7 (econometrics, underdose with metrics, insights, optimal optimization), IBM Watson, closing · PDF pp. 225–231", who: "Miles Young" }],
      quotes: [
        { text: "Made useful, it [big data] has the ability to take marketing and communications into whole new areas of creativity and precision.", page: "229" },
        { text: "At the end of the day, though, data is political, however much purists may not like to admit it.", page: "231" }
      ],
      idea: "The second half of Young’s seven prerequisites:\n\n4. **Re-discover econometric modelling.** Invented by the Nobel-winning economist Ragnar Frisch early in the twentieth century, econometrics uses statistics to prove economic relationships: for example, how much extra sales a given level of marketing spend produces, and the spend level that gives the best return. For some brands price, differentiation or distribution matter more than advertising; for many packaged goods, marketing drives sales strongly. Yet only about 15 per cent of IPA effectiveness case studies use it. Three blocks: the statistical skills are rare, consistent data is hard to capture, and marketers distrust a black box.\n5. **Underdose with metrics.** Big data overdoses on metrics to justify itself. Ration them. That forces the painful thinking up front (what are we really trying to achieve, and why?) and gives you **one version of the truth** instead of endless unresolved debates. Some Ogilvy clients get a **Report Card of as few as five metrics**; others a fuller dashboard. A good dashboard is used, shared and argued over, and deciding what to show the decision-makers forces the conversation about what matters.\n6. **Insights, insights, insights.** Data offers three kinds: **observation** (how something is doing), **improvement** (why it is or isn’t working) and **inspiration** (it sparks an idea). Inspiration comes down to **prioritization** (whom to speak to, and why), **personalization** (why groups behave as they do, and how to reach them) and **precision** (the right message, at the right time, to the right person, in the right medium). Sometimes the data *is* the idea: British Airways’ billboard that points at real BA planes flying overhead. IBM Watson shows the far end: a cognitive computer that beat Jeopardy champions, reads medical literature beside cancer specialists, and helped Ogilvy’s team write Bob Dylan commercials. Machine plus human talent is the real promise.\n7. **Optimal optimization.** Build a **closed loop**. Watch the market on a dashboard before you launch, align tactics to objectives, set up a testing protocol and tracking. Once live, read results in **four time frames: real time, daily, weekly, quarterly** (customer paths, lifetime value, brand preference), change things on the fly, and report weekly, monthly and quarterly to feed the next effort.\n\nHis verdict: big data *can* be tamed. It supports human thinking, short-circuits work that couldn’t otherwise be done, and sees patterns we can’t, but it is never nirvana. And **data is political**: it can be ignored, manipulated, used to score points or disguised, for as long as departments have agendas.",
      keyPoints: [
        "Econometrics shows how much a given marketing spend actually moves sales; few use it (15% of IPA cases) because skills, data and trust are scarce.",
        "Ration metrics: a five-metric Report Card creates one version of the truth.",
        "Three insight types: observation, improvement, inspiration. Inspiration = prioritization, personalization, precision.",
        "Sometimes the data itself is the creative idea (British Airways’ plane-spotting billboard).",
        "Closed loop: test protocol, read in real time, daily, weekly and quarterly, change on the fly, report and feed the next round.",
        "Data is political: it can be ignored, manipulated or used to score points."
      ],
      why: "A local client doesn’t need a 40-tab dashboard; it needs five numbers it trusts and a weekly rhythm of acting on them. That rhythm (watch, test, adjust, report) is the product ZDub is really selling.",
      example: {
        title: "A five-metric Report Card for a Sacramento HVAC client",
        before: "Weekly email: a screenshot of Ads Manager with 14 columns, plus “CTR is up 0.3%!”",
        after: "Report Card, one screen, the same five numbers every week:\n1. Booked jobs from ads (and their $ value)\n2. Cost per booked job\n3. Lead-to-booking rate (and % of calls answered within 5 minutes)\n4. Best and worst ad this week, and what we’re changing\n5. Google review count and rating\nPlus one line: “This week we’re testing…”",
        body: "Underdosing with metrics, one version of the truth and the closed loop on a single page: the client sees results, the agency sees what to change, and the next test is already named. Check daily for ad fatigue, weekly for the Report Card, quarterly for budget and offer."
      },
      practice: [
        {
          prompt: "Dissect it: Young’s three kinds of insight and his claim that data is political.",
          fields: [
            "Give one PMT example of each: an observation, an improvement insight, and an inspiration.",
            "Where have you seen data quietly ignored or ‘used to score points’ (in a job, with a client, or in your own reporting)?",
            "When could a five-metric Report Card hide something important?"
          ]
        },
        {
          prompt: "Apply it: Recreate the British Airways #lookup pattern for PMT: a piece of creative where real, changing data IS the idea.",
          fields: ["The real data source (live or regularly updated)", "The trigger (when does the creative change?)", "The human moment it shows", "Where it runs", "The headline template"],
          rubric: [
            "The data is the idea, not decoration (remove the data and the ad stops working)",
            "The data is real and verifiable, never invented",
            "Includes a human, emotional moment, not just numbers",
            "Simple enough to build with Canva and Meta Ads Manager"
          ],
          model: "Data: PMT’s own class roster, seats left per class date (updated daily from the booking system).\nTrigger: when a class drops to 3 seats or fewer, the ad switches to that date.\nHuman moment: a student’s helmet-off grin at the end of range day.\nRuns: Meta Reels and Stories ads, plus a pinned IG story.\nHeadline template: “Saturday the 14th: 3 seats left. Three people are about to become riders.” Built as Canva variants with the date and seat count swapped; in Ads Manager the current one runs and the rest are paused."
        }
      ],
      today: { task: "Write PMT’s (or a client’s) closed-loop calendar: what you check daily, weekly, monthly and quarterly, the decision each check drives, and who sees it.", output: "A four-row rhythm table (Daily / Weekly / Monthly / Quarterly): metric, decision, audience.", minutes: 20 },
      check: [
        { q: "Why is econometric modelling used in only about 15% of IPA case studies?", a: "Three blocks: the advanced statistical skills are rare, the data can’t always be captured consistently, and marketers distrust it as a black box." },
        { q: "What are the three types of insight from data, and the three ways data inspires creativity?", a: "Observation, improvement and inspiration; inspiration works through prioritization, personalization and precision." },
        { q: "In which four time frames does Young assess live communications?", a: "Real time, daily, weekly and quarterly (with reporting on a weekly, monthly and quarterly cycle)." }
      ],
      examples: [
        {
          id: "og-ex-ogilvy-persona-scorecard",
          title: "Persona Scorecard dashboard (‘Social by Design’)",
          brand: "Ogilvy & Mather", agency: "Ogilvy & Mather", year: "",
          format: "Data / CRM",
          pdfPage: 227,
          what: "An iMac displaying a dashboard labelled Persona Scorecard. Two persona cards (a mother and daughter; a smiling older woman) each show an affinity score in a ring (65 and 52), the change from the prior week (+37%, +20%), total customer value, and a strip of performance data: cost per conversion, total conversions, cost per click and click-through rate. A third column ranks the creative executions by interaction score and conversion rate.",
          idea: "Organize the numbers around people (personas) rather than channels, and show only the few figures that say whether each persona is warming up and which creative is winning.",
          elements: [
            { n: 1, name: "Persona cards", detail: "Each audience segment is a face with a life you can picture, not a targeting string.", principle: "There’s no intimacy without knowing whom you are being intimate with" },
            { n: 2, name: "One headline score + trend", detail: "A single affinity score with week-over-week change tells you at a glance who is warming up.", principle: "Underdose with metrics" },
            { n: 3, name: "The money line", detail: "Total customer value per persona ties the marketing to revenue.", principle: "Align metrics to objectives" },
            { n: 4, name: "Four performance numbers", detail: "Cost per conversion, conversions, cost per click and CTR: diagnosis, kept small.", principle: "One version of the truth" },
            { n: 5, name: "Creative league table", detail: "Ads ranked by interaction score and conversion, so the team knows what to make more of.", principle: "Closed-loop optimization" }
          ],
          layout: { aspect: "16:9", boxes: [
            { n: 1, label: "Persona 1 card + affinity ring", x: 10, y: 12, w: 24, h: 48 },
            { n: 1, label: "Persona 2 card + affinity ring", x: 37, y: 12, w: 24, h: 48 },
            { n: 2, label: "Trend badges (+37%, +20%)", x: 22, y: 40, w: 36, h: 8 },
            { n: 3, label: "Total customer value", x: 10, y: 61, w: 51, h: 6 },
            { n: 4, label: "Performance data strips", x: 10, y: 68, w: 51, h: 14 },
            { n: 5, label: "Creative ranked by score / conversion", x: 64, y: 12, w: 24, h: 60 }
          ] },
          recreate: {
            brief: "Build a one-screen client dashboard organized by customer type: one score, one trend, one money line and a creative league table.",
            fields: [
              { id: "personas", label: "2–3 personas", hint: "PMT: new rider, returning rider, gift buyer" },
              { id: "score", label: "Headline score per persona", hint: "Registrations? Lead-to-booking rate?" },
              { id: "value", label: "The money line", hint: "Revenue from this persona this month" },
              { id: "diag", label: "Four diagnostic numbers", hint: "Cost per lead, leads, CPC, CTR" },
              { id: "creative", label: "How you rank creative", hint: "By cost per registration, not likes" }
            ],
            steps: [
              "Tag every ad set and ad in Meta Ads Manager by persona using a naming convention.",
              "Export the week’s results by ad into a Google Sheet.",
              "Build one card per persona (Google Sheets, Looker Studio or a Canva template): score, trend, value, four numbers.",
              "Add a creative league table sorted by cost per result.",
              "Review it with the client weekly in 10 minutes and write down the one change you’ll make.",
              "Keep the format identical every week so the trends are readable."
            ]
          }
        },
        {
          id: "og-ex-british-airways-lookup",
          title: "British Airways #lookup: the billboard that points at real planes",
          brand: "British Airways", agency: "Ogilvy & Mather", year: "",
          format: "Poster / outdoor",
          pdfPage: 228,
          what: "A curved digital billboard on a London rooftop. Normally it runs other content, but when a BA plane passes overhead it interrupts itself: a small boy runs across the screen and points up at the sky, and the copy names the actual flight, “Look, it’s flight BA272 from San Diego”, with the British Airways logo top right and #lookup in the corner. In the real sky above the billboard, the plane goes by. (Caption on p. 229; the team behind it is charted on p. 262.)",
          idea: "Live flight data turns a billboard into a moment of wonder: the ad points at the product, which is genuinely there in the sky.",
          elements: [
            { n: 1, name: "Live data trigger", detail: "An antenna picks up passing jets’ flight data, cross-checks it with Heathrow flight information and the weather so the plane is actually visible, and fires in under a second.", principle: "Sometimes the data itself can be the idea" },
            { n: 2, name: "The child pointing up", detail: "Pure human wonder; the boy’s gesture pulls the street’s eyes from the screen up to the real sky.", principle: "The creative brief: an idea that inspires wonder" },
            { n: 3, name: "Live headline", detail: "The real flight number and origin city, filled in on the fly; the specific facts make it unmistakably true.", principle: "Precision: right message, right time, right place" },
            { n: 4, name: "Brand mark and ribbon line", detail: "The BA logo top right and the red-and-blue ribbon running across the top keep it seamlessly BA.", principle: "The work must be a seamless part of the brand" },
            { n: 5, name: "#lookup", detail: "A two-word hashtag that is both the instruction and the campaign name, inviting people to share.", principle: "Invite participation" }
          ],
          layout: { aspect: "2:1", boxes: [
            { n: 4, label: "Ribbon line across the top", x: 2, y: 6, w: 66, h: 5 },
            { n: 4, label: "BRITISH AIRWAYS logo", x: 72, y: 4, w: 25, h: 9 },
            { n: 3, label: "Look, it’s flight BA272 from San Diego", x: 5, y: 32, w: 42, h: 30 },
            { n: 2, label: "Boy pointing up", x: 64, y: 14, w: 20, h: 80 },
            { n: 5, label: "#lookup", x: 80, y: 84, w: 17, h: 10 },
            { n: 1, label: "Trigger: real plane overhead (outside the frame)", x: 86, y: 0, w: 14, h: 10 }
          ] },
          recreate: {
            brief: "Tie a piece of creative to a real-world signal so it changes when something true happens, and show a human reacting to it.",
            fields: [
              { id: "signal", label: "The real-world signal", hint: "Weather, seats left, a local event, time of day, a live counter" },
              { id: "trigger", label: "The trigger rule", hint: "When X happens, the ad changes to Y" },
              { id: "human", label: "The human reaction shot", hint: "Who is pointing, grinning, looking up?" },
              { id: "headline", label: "Live headline template", hint: "‘Look, it’s ___’" },
              { id: "brand", label: "Brand cue", hint: "Logo position and colour line" },
              { id: "tag", label: "Hashtag or CTA", hint: "Short and instruction-like" }
            ],
            steps: [
              "Pick a signal you can check reliably (for PMT: a sunny weekend forecast, or seats left per class).",
              "Write the trigger rule and a headline template with a blank for the live fact.",
              "Shoot one human reaction shot on iPhone (a student pointing at the range, a rider looking at the open road).",
              "Make 4–6 Canva variants with the fact filled in (each class date, each weather case).",
              "In Meta Ads Manager, run the variant whose trigger is true and pause the rest; update daily.",
              "Check whether the ‘live’ variants beat your evergreen ad on cost per registration."
            ]
          }
        },
        {
          id: "og-ex-ibm-watson-dylan",
          title: "IBM Watson: from Jeopardy to Bob Dylan",
          brand: "IBM", agency: "Ogilvy & Mather", year: "2011",
          format: "Integrated campaign",
          pdfPage: 229,
          what: "The page shows Watson’s 2011 debut on the TV quiz show Jeopardy: its glowing globe avatar stands at the middle podium between two champion contestants, both of whom it beat. The box on p. 230 follows Watson to work: reading medical literature with oncologists at Memorial Sloan-Kettering, answering customers’ questions, advising on money. Ogilvy even had Watson analyze every Bob Dylan lyric and help the creative team write the TV commercials it starred in with Dylan.",
          idea: "Prove an abstract capability (cognitive computing) with a public demonstration, then show it doing real work, including helping make the advertising itself.",
          elements: [
            { n: 1, name: "Public demonstration", detail: "Beating two of the best human Jeopardy players ever was a proof of concept watched by millions.", principle: "Demonstration beats description" },
            { n: 2, name: "An avatar with personality", detail: "Watson’s animated globe gave software a face people could relate to.", principle: "Make technology human enough to care about" },
            { n: 3, name: "Real-world proof", detail: "Medicine (keeping up with 160 hours a week of reading per specialty is no problem for it), customer service, finance.", principle: "Data can transform things well beyond marketing" },
            { n: 4, name: "Machine + human creativity", detail: "Watson analyzed Dylan’s lyrics and worked with copywriters and art directors on the scripts.", principle: "Cognitive computers working with human talent is the real promise" }
          ],
          beats: [
            { n: 1, label: "2011: Watson appears on Jeopardy as an on-screen globe and beats two champions" },
            { n: 3, label: "Put to work: reading medical literature with cancer specialists to support doctors’ decisions" },
            { n: 3, label: "Serving customers: fast, accurate answers to tough questions; money-management recommendations" },
            { n: 4, label: "Watson reads every Bob Dylan lyric and helps the creative team write the spots" },
            { n: 2, label: "The commercials: Watson and Dylan on screen together" }
          ],
          recreate: {
            brief: "Prove your capability with a public test, then show it working for real customers.",
            fields: [
              { id: "capability", label: "The capability people doubt", hint: "PMT: ‘a total beginner can be riding confidently after one course’" },
              { id: "challenge", label: "The public test", hint: "A filmed challenge, a before/after, a head-to-head" },
              { id: "face", label: "The ‘face’ of the capability", hint: "A person, a mascot or a symbol" },
              { id: "proof", label: "Three real-world proofs", hint: "Customers, numbers, results" },
              { id: "collab", label: "Where a tool (AI or data) helps the creative", hint: "e.g. analyzing reviews for the words customers use" }
            ],
            steps: [
              "Name the doubt in one sentence: what don’t customers believe you can do?",
              "Design a filmable test of it, e.g. day-one vs. last-day footage of one nervous beginner.",
              "Shoot on iPhone and cut a 30–45 second Reel in CapCut with on-screen proof points.",
              "Follow with three short proof posts (student results, reviews, numbers).",
              "Use AI to pull the exact words customers use from your reviews and FAQs, and script with those words.",
              "Run the challenge Reel as top-of-funnel; retarget viewers with the proof posts."
            ]
          }
        }
      ]
    },
    {
      id: "og-10a",
      part: "p4",
      chapter: 10,
      chapterTitle: "“Only Connect” · Media Is Dead: Paid, Owned, Earned",
      pages: "232–236",
      title: "“Only Connect”: media as we knew it is dead, connections planning is born",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 10 · “Only Connect” · opening, MindShare, the Great Fragmentation, Paid Owned Earned · PDF pp. 232–236", who: "Miles Young" }],
      quotes: [
        { text: "It’s amazing in retrospect that we simply didn’t know much at all about the media behaviour of the consumers we ritually dedicated ourselves to.", page: "236" },
        { text: "“Connections” is needed more than ever.", page: "235" }
      ],
      idea: "Chapter 10 opens with a dry Forrester finding from 2015: clients admitted they didn’t completely understand the marketing environment any more. No wonder, says Young: the media landscape had shifted tectonically.\n\nIn the original *Ogilvy on Advertising*, media got scant attention. David admitted he had never worked in a media department, but thought the people who succeed there need an analytical mind, the knack of explaining numbers without numbers, steadiness under pressure, and a taste for negotiating with media owners. (Still a fine job description.)\n\nYoung then tells his own part in the upheaval. On 1 November 1997 he and Alan Fairnington of JWT Asia pooled their Asian media departments to create **MindShare**, the first true media independent, for scale in software and muscle in buying. It was the right call, but something was lost: the fruitful contact between creative people and media people, and the question of who owns media planning.\n\nThe Digital Revolution changed the argument. Of all the ‘X is dead’ claims, the most accurate is that **media as we knew it is dead**. Account executives used to answer every TV-weight question with one formula, “80 per cent coverage at 6 OTS” (reach plus Opportunities To See), because the audience was captive and had few choices. Then came what Steve Sammartino called **the Great Fragmentation**: thousands of programming options and an audience split across time and space, every fragment potentially always on.\n\nMedia planning gave way to **connections planning**, built on three letters first met in Chapter 7: **POE, Paid, Owned, Earned**. The chart on p. 234 sums them up:\n\n- **Paid** (display, search, pre-roll, TV, print, outdoor): guaranteed scale and control, but less credible, easily tuned out, and you pay for every impression.\n- **Owned** (social feeds, packaging, CRM, customer service, employee networks): control and more credibility than paid, but hard to scale without paid support.\n- **Earned** (blog and social mentions, ratings and reviews, word of mouth, influencers, PR): the most credible and free per impression, but you control neither scale nor tone.\n\nPOE still leaves the hard questions: where to connect, how much to spend, and how. Many put blind faith in automation. Ben Richards’ sketch of a buyer targeting Powerade drinkers by temperature, time of day and mobile sports searches shows the trap: she wins the trade, but doesn’t know where the ads will appear. Strategy and accountability are missing. Smart CMOs pushed money toward digital with quotas (Unilever’s target of 20 per cent of analogue spend, now actually 24). And data drives the shift: old media gave age-and-gender data up to 90 days late; today’s ‘digital exhaust’ gives rich, real-time media profiles.",
      keyPoints: [
        "Old media logic was reach and frequency (‘80 per cent coverage at 6 OTS’) for a captive audience; the Great Fragmentation ended it.",
        "Connections planning replaces media planning: Paid, Owned, Earned, each with different strengths and limits.",
        "Paid scales but is less credible; owned is controlled but needs paid to scale; earned is the most credible but uncontrollable.",
        "Automation without strategy and accountability is a trap: you can win the auction and not know where you ran.",
        "Ogilvy’s profile of a good media person: analytical, explains numbers in plain words, calm, a good negotiator."
      ],
      why: "Many local businesses think marketing means boosting posts. Laying out PMT’s paid, owned and earned assets side by side shows where the cheap, credible wins are (reviews, texts to past students) before more money goes into paid.",
      example: {
        title: "PMT on one POE page",
        before: "Plan: “Spend $1,500 a month on Meta ads.”",
        after: "Paid: Meta lead ads to new riders; Google search on ‘motorcycle class Sacramento’.\nOwned: website class calendar, email/SMS to past students (advanced course, gift cards), the IG grid, the range itself (a fence banner).\nEarned: Google reviews (asked for at every graduation), student ride-day posts reshared, a local news story on new-rider safety.\nAnd the link: paid boosts the best earned content (the top student testimonial becomes the ad).",
        body: "Each connection has a job: paid buys scale and control, owned keeps the relationship, earned supplies credibility. The plan now starts from where people actually are, not from how many impressions $1,500 buys."
      },
      practice: [
        {
          prompt: "Dissect it: ‘media is dead’ and the rise of connections planning.",
          fields: [
            "In your own words, why did ‘80 per cent coverage at 6 OTS’ stop being a useful answer?",
            "What does Young say was lost when media split from creative agencies, and does ZDub (creative and media under one roof) avoid it?",
            "Argue the other side: where is reach-and-frequency thinking still right for a local business?"
          ]
        },
        {
          prompt: "Apply it: Build a one-page Paid / Owned / Earned map for a ZDub prospect (roofer, med spa, gym…) and name the single connection you’d fix first.",
          fields: ["Paid (what they run now / what you’d add)", "Owned (assets they control)", "Earned (reviews, mentions, word of mouth)", "The first connection to fix, and why"],
          rubric: [
            "All three columns filled with real, specific assets",
            "Notes each column’s limit (paid is less credible, owned needs paid to scale, earned can’t be controlled)",
            "Connects the columns (e.g. paid amplifies earned)",
            "The first fix is chosen for business impact, not novelty"
          ],
          model: "Prospect: a Roseville med spa.\nPaid: Instagram ads for a $99 facial (running now); add Google search on ‘Botox Roseville’.\nOwned: website, a 2,800-person email list (untouched for six months), IG feed, front-desk texts.\nEarned: 4.6 stars from 210 Google reviews; clients post selfies after treatments but they’re never reshared.\nFirst fix: the owned email list. A monthly ‘open slots this week’ email to 2,800 past clients costs nothing and will out-book the ads. Then use paid to promote the best client selfies (earned) as social-proof ads."
        }
      ],
      today: { task: "Fill in a Paid / Owned / Earned table for PMT with every asset you can find in 30 minutes (website, Google Business profile, IG, email and SMS lists, the range, partnerships).", output: "A three-column table with at least five items per column and one connection you’ll act on this week.", minutes: 30 },
      check: [
        { q: "What does POE stand for, and what is each type’s main weakness?", a: "Paid (less credible, you pay for every impression), Owned (hard to scale without paid support), Earned (no control over scale, timing or tone)." },
        { q: "What was ‘80 per cent coverage at 6 OTS’?", a: "The old account-executive formula for TV weight: reach 80% of the audience with six Opportunities To See, which worked for a captive audience with limited choices." },
        { q: "What is the ‘Great Fragmentation’?", a: "Steve Sammartino’s name for the explosion of an orderly media world into thousands of options, with the audience fragmented in time and space and always on." }
      ]
    },
    {
      id: "og-10b",
      part: "p4",
      chapter: 10,
      chapterTitle: "“Only Connect” · Deep Integration and the Database of Intent",
      pages: "236–241",
      title: "Deep Integration: focus on the 10° that matters, and read intent through search",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 10 · Deep Integration, Evolution of Integration, Customer Journey, How Keywords Work · PDF pp. 236–241", who: "Miles Young" }],
      quotes: [
        { text: "Deep integration is digitally enabled in one very particular way: now, we can understand consumers’ intentions.", page: "238" },
        { text: "The magic only happens when we relate intent to content.", page: "240" }
      ],
      idea: "Integration is the post-digital CMO’s most stubborn worry, and Young traces its evolution in a cheeky chart of skeletons learning to walk upright:\n\n1. **Graphic integration**: “matching luggage”, every piece looks alike.\n2. **Funnel integration**: channels dutifully assigned to awareness, consideration and so on.\n3. **Organic integration**: advertising, activations, one-to-one and PR built tightly around the customer’s journey.\n4. **Parallel integration**: across brands, sub-brands, segments and countries.\n5. **Dynamic integration**: every element of the marketing and sales mix reacting together, live in the market.\n\nDavid Ogilvy never believed in the post-war split of marketing into separate ‘disciplines’ (PR, direct, sales promotion), and with his encouragement Ogilvy acquired them early. But strategy was still written in the advertising agency and *handed over* to the others, so the integration stayed superficial. When Young became CEO in 2008 he hired Ben Richards from the connections agency Naked, who built **Fusion**: one operating system shared by every discipline, starting from the **business problem** (not the communication problem) and centred on the **customer journey**. Journeys stopped being an academic exercise owned by direct marketers and became the shared map of real barriers and drivers. (The book’s sample journey, an advertising student’s, runs discover, decide, engage, prepare, validate, celebrate, transform.)\n\nOgilvy once preached **360° Brand Stewardship**. The lesson since: deep integration means focusing on **the 10° that really matters**, and being not only media neutral but **discipline neutral**.\n\nWhat makes it possible is that we can now **see intent**. John Battelle called Google the **database of intentions** (2003): the sum of every search is a record of humanity’s wants and needs. The **keyword** is the common denominator of the digital age, and since YouTube, Pinterest, Twitter, Baidu and Yandex all work as search engines, a **keyword universe** becomes the largest focus group ever. But its data is no more useful than any other until you **relate intent to content**.\n\n**Gerber** proves it: a famous but dated baby-food brand after five years of falling sales. Searches nearly double once a young woman becomes a mother, so Ogilvy mined those queries (“when to start baby cereal”), grouped the themes, produced a video library answering them, titled each video with the exact search phrase, and used YouTube playlists and tags so mothers found it without paid media. Gerber grew again.\n\nYoung’s pet peeve: treating search as a separate discipline. **Search is horizontal**. Keywords ignore departmental lines, so search informs advertising, PR and direct alike and becomes a great integrator.",
      keyPoints: [
        "Integration evolves: graphic (matching luggage) → funnel → organic → parallel → dynamic.",
        "Deep integration starts from the business problem and the customer journey, not from the ad.",
        "Forget 360°: focus on the 10° that really matters, media neutral and discipline neutral.",
        "Search is the database of intentions; the keyword is the common denominator of the digital age.",
        "Intent data only pays off when you relate intent to content (Gerber’s search-titled video library).",
        "Search is horizontal: it informs every discipline."
      ],
      why: "People in Sacramento type their exact worries into Google and YouTube long before they see an ad. Building PMT’s content around those exact phrases earns free, compounding traffic that paid social can’t buy.",
      example: {
        title: "PMT’s keyword-to-content map (the Gerber move)",
        before: "Content plan: “Post three times a week: class photos, a motivational quote, a promo.”",
        after: "Five short videos, each titled with an exact search phrase:\n1. “Do I need my own motorcycle to take a riding class?”\n2. “What to wear to a motorcycle safety course”\n3. “Is motorcycle class hard for total beginners?”\n4. “How long does it take to get a motorcycle license in California?”\n5. “Motorcycle class gift: what do they actually get?”\nEach goes on YouTube (playlist: New Rider Questions), on the website FAQ and as a Reel.",
        body: "That’s relating intent to content: the questions come from Google suggestions, DMs and calls, the titles match what people type, and the same answers serve organic search, social and sales calls. One insight working horizontally across every discipline."
      },
      practice: [
        {
          prompt: "Dissect it: the evolution of integration and ‘the 10° that really matters’.",
          fields: [
            "Where is ZDub’s or PMT’s marketing right now on the five-step integration ladder? What’s the evidence?",
            "In your own words, why does starting from the business problem (not the communication problem) change the plan?",
            "Argue the other side: when is ‘matching luggage’ (everything looks the same) actually enough?"
          ]
        },
        {
          prompt: "Apply it: Recreate Gerber’s search-to-video library for PMT or a ZDub prospect.",
          fields: ["The life moment when searches spike", "Ten real queries (Google autocomplete, ‘People also ask’, DMs)", "The 3–5 themes they group into", "Video titles that copy the exact phrases", "Where the videos live (YouTube playlist, site, Reels)"],
          rubric: [
            "Starts from a real moment when intent spikes (like new motherhood)",
            "Queries are real phrases people type, not marketing language",
            "Titles reuse the exact search phrases for discoverability",
            "Helps first, sells second; the plan works without paid media"
          ],
          model: "Moment: spring, when people decide this is the year they get licensed, or the week someone buys (or is given) their first bike.\nQueries: ‘motorcycle license class near me’, ‘how to get M1 license california’, ‘motorcycle class cost sacramento’, ‘do you need a motorcycle for motorcycle class’, ‘what to wear to motorcycle class’, ‘is motorcycle class hard’, ‘can you fail motorcycle class’, ‘best first motorcycle’, ‘beginner motorcycle gear’, ‘how long is motorcycle class’.\nThemes: getting licensed; what class is like; gear; your first bike.\nTitles: ‘Can you fail motorcycle class? (An instructor answers)’, ‘What to wear to motorcycle class (and what not to)’, ‘How to get your M1 in California, step by step’.\nHome: a YouTube playlist, New Rider Questions, embedded on PMT’s FAQ page; each video also cut into a 30-second Reel."
        }
      ],
      today: { task: "Type five PMT topics into Google and YouTube and copy every autocomplete suggestion and ‘People also ask’ question.", output: "A list of 20+ real search phrases grouped into 3–5 themes.", minutes: 20 },
      check: [
        { q: "Name the five stages of integration in Young’s chart.", a: "Graphic (matching luggage), Funnel, Organic, Parallel, Dynamic." },
        { q: "What did John Battelle call Google, and why does it matter?", a: "The database of intentions: the aggregate of every search reveals what people want, which makes keywords the common denominator of digital marketing." },
        { q: "How did Ogilvy revive Gerber?", a: "By mining new mothers’ searches, grouping their questions and publishing a video library titled with their exact search terms, organized with YouTube playlists and tags, so mothers found it without paid advertising." }
      ],
      examples: [
        {
          id: "og-ex-gerber-search-videos",
          title: "Gerber: answering new mothers’ searches",
          brand: "Gerber", agency: "Ogilvy & Mather", year: "",
          format: "Online film",
          pdfPage: 239,
          what: "The image is a video frame of a smiling baby lying on its tummy, with the web address Gerber.com/StartingSolids beside it. Behind it sits a whole library of short videos, each answering a question new mothers type into Google, such as when to start baby cereal or how to build healthy eating habits, titled with those exact phrases and organized into YouTube playlists. (Caption continues on p. 240.)",
          idea: "Find the questions people search at a life moment and make the brand the most helpful answer, labelled in their own words.",
          elements: [
            { n: 1, name: "The life-moment insight", detail: "Weekly Google searches nearly double once a woman becomes a mother.", principle: "Search intent modelling" },
            { n: 2, name: "Query clustering", detail: "Queries analyzed in depth and grouped into common themes (starting solids, healthy eating habits).", principle: "Relate intent to content" },
            { n: 3, name: "Search-phrase titles", detail: "Each video labelled with the exact words mothers type, so Google surfaces it.", principle: "The keyword is the common denominator of the digital age" },
            { n: 4, name: "Supportive tone", detail: "The videos help first; the brand earns trust as the go-to source of advice on motherhood.", principle: "Owned and earned media, not just paid" },
            { n: 5, name: "Organic distribution", detail: "YouTube playlists and tagging let people find the videos without paid advertising.", principle: "Search is horizontal: one insight feeds every channel" }
          ],
          beats: [
            { n: 1, label: "Spot the spike: new mothers search almost twice as much every week" },
            { n: 2, label: "Mine and group their questions into themes" },
            { n: 4, label: "Script and shoot short, warm answer videos, one per question" },
            { n: 3, label: "Title each with the exact search phrase (‘when to start baby cereal’)" },
            { n: 5, label: "Organize with playlists and tags on YouTube; link from Gerber.com/StartingSolids" },
            { n: 4, label: "Mothers find, trust and share it; Gerber grows again after five years of decline" }
          ],
          recreate: {
            brief: "Find the moment your customers start searching, answer their exact questions in short videos, and title each one with their words.",
            fields: [
              { id: "moment", label: "The life moment when searches spike", hint: "New rider season, first home, first baby, a storm" },
              { id: "queries", label: "The real queries", hint: "Autocomplete, ‘People also ask’, DMs, call notes" },
              { id: "themes", label: "3–5 themes", hint: "Group the questions" },
              { id: "titles", label: "Exact-phrase titles", hint: "Copy the searcher’s wording" },
              { id: "home", label: "Where they live", hint: "YouTube playlist, website FAQ, Reels" }
            ],
            steps: [
              "Collect 20–30 real questions from Google autocomplete, ‘People also ask’, DMs and calls.",
              "Group them into 3–5 themes and pick the 5 most-asked questions to start.",
              "Film one 60–90 second answer per question on iPhone (an expert talking, plus B-roll).",
              "Title, describe and tag each video with the exact search phrase; build a YouTube playlist.",
              "Embed the playlist on your FAQ page and cut each video into a 30-second Reel.",
              "Track views from search, time on page and enquiries from the FAQ page monthly."
            ]
          }
        }
      ]
    },
    {
      id: "og-10c",
      part: "p4",
      chapter: 10,
      chapterTitle: "“Only Connect” · How to Judge a Website: The Medium You Own",
      pages: "241–247",
      title: "How to Judge a Website: ask what it’s for, check the numbers, then look for the idea",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 10 · Glossary of Common Search Terms; How to Judge a Website: The Medium You Own · PDF pp. 241–247", who: "Miles Young" }],
      quotes: [
        { text: "At the end of the day, though, a website is only an advertisement.", page: "246" },
        { text: "A good website doesn’t draw attention to itself but rather serves as a hub, delivering the user to all of the components of your brand’s digital ecosystem.", page: "246" }
      ],
      idea: "Young’s most-dreaded cocktail-party moment: “I’ve got a website. What do you think?” His reply: **what do you want it for?** There are only two answers: for the **audience** it brings you, or for how it **explains and presents you**.\n\n**The numbers.** He plays out a meeting with a publisher’s sales rep to teach the vocabulary:\n\n- **Uniques** (unique visitors, ‘traffic’): the first number to ask for, but don’t be dazzled; 10 million a month sounds big until you compare it with the Guardian’s 120 million.\n- **Page views** per unique, and the **bounce rate** (land and leave immediately), which publishers hate discussing, so ask.\n- **Impressions** (an ad served on a page), the **click-through rate (CTR)**, and **CPM** (the cost per thousand impressions).\n- **Conversion rate**: the visitor does what the ad asked (buys, donates, signs up, shares). The steps toward it form the **funnel**; people on their way are ‘intendeds’, and good publishers are obsessed with not losing them.\n- **Time on page** matters more than time on site: attention is best measured page by page.\n- **Paid vs. organic traffic**: traffic built by word of mouth and links from other sites suggests more integrity than traffic bought into the top search slot.\n\nWhich numbers matter depends on the **business model**: media, brochure and blog sites care about page views and time; ecommerce about turning visits into sales; ad-funded platforms like YouTube need engaged monthly active users; subscription services like Spotify need visitors converted into payers. Then **optimize**: A/B test CTAs, copy, images, even the whole interface, and beat category **benchmarks**. Low-involvement categories stay low-involvement online, though retargeting can bring people back. A sidebar glossary (pp. 241–242) covers the search metrics: search volume, estimated and opportunity clicks, page rank, search trend and seasonality, share of search, paid search, SEM and SEO.\n\n**The representation.** The second question is qualitative: type, legibility, colour, graphics, animation and video, text density and, above all, **architecture**: is the information organized so the most interesting things surface most easily? Ask for a web designer, he says, then go and find an architect.\n\nThen the Ogilvy point: **a website is only an advertisement**, and like any ad it needs an **idea** inside it, bringing every element to life, not ‘matching luggage’. Nothing is more depressing than an idea-free zone.\n\nFinally, interactive design is three-level chess: intuitive navigation, steering the visitor toward a conversion, and behaving more like a **tool than a showpiece**. The best site is a **hub** that sends people on to the rest of the brand’s ecosystem (YouTube, Facebook, Twitter, Instagram), so the sum of the digital parts is bigger than any one of them.",
      keyPoints: [
        "First question: what do you want the website for, the audience it brings or how it represents you?",
        "Know the vocabulary: uniques, page views, bounce rate, impressions, CTR, CPM, conversion, funnel, time on page, paid vs. organic.",
        "The business model decides which metrics matter.",
        "A website is only an advertisement: it needs an idea, and an architect as well as a designer.",
        "Good interactive design: easy navigation, steers to conversion, works as a tool, and acts as a hub for the brand’s other channels."
      ],
      why: "ZDub builds landing pages and audits prospects’ sites. This section is a ready-made audit (purpose, numbers, idea, architecture, hub) that a roofer or med-spa owner can follow in five minutes, and that sells the next project.",
      example: {
        title: "Auditing a plumber’s homepage",
        before: "Homepage: a stock photo of a smiling plumber and “Welcome to ABC Plumbing! Family owned since 1998. We offer a wide range of services.” Bounce rate 71%, conversion 0.8%, phone number only in the footer.",
        after: "Purpose: booked service calls (conversion). Idea: “There in 60 minutes, or the trip fee is on us.” Above the fold: that promise, a tap-to-call button, a ‘Technicians available today’ line and three Google reviews. Architecture: emergencies first, then services, then about. A/B test: the promise vs. “Same-day repairs.” Targets: bounce under 50%, conversion 3%+.",
        body: "That’s Young’s whole audit in one page: it starts with what the site is for, picks the metrics that fit the business model, puts an idea in it, arranges the information so the most important thing surfaces first, and makes the site a tool (call, book) rather than a brochure."
      },
      practice: [
        {
          prompt: "Dissect it: ‘a website is only an advertisement’.",
          fields: [
            "In your own words, what are Young’s two reasons to have a website, and which one applies to PMT?",
            "Why does he say time on a single page matters more than total time on site?",
            "Argue the other side: when should a website be a showpiece rather than a tool?"
          ]
        },
        {
          prompt: "Apply it: Run Young’s website audit on PMT’s site (or a prospect’s) and write the three changes you’d make first.",
          fields: ["What the site is for (one sentence)", "The four numbers you’d judge it by", "Does it have an idea? Write the idea it should have", "Architecture: what should surface first", "Three changes, in order"],
          rubric: [
            "States the purpose before any metric",
            "The metrics fit the business model (conversion for a booking site)",
            "Includes an idea, not just design fixes",
            "At least one change makes the site more of a tool, and one connects it as a hub to other channels"
          ],
          model: "Purpose: fill class seats (conversion).\nNumbers: booking conversion rate, bounce rate on the class page, time on the class-calendar page, share of traffic from organic search.\nIdea: “Never ridden? Perfect. Most of our students start at zero.”\nSurface first: the next three class dates with seats left and a Book button; then a ‘What day one looks like’ video; then FAQs; then reviews.\nChanges: (1) live class dates and seats left at the top of the homepage; (2) embed the 60-second ‘What day one looks like’ video from YouTube; (3) add a ‘Gift a class’ button and a strip of IG Reels from graduating classes as social proof."
        }
      ],
      today: { task: "Open PMT’s site (or a client’s) on your phone. Count the seconds and taps it takes to reach a completed booking, and pull the bounce and conversion rates from analytics if you have access.", output: "Taps-to-book, the two metrics, and the one fix that would remove a tap.", minutes: 15 },
      check: [
        { q: "What two answers does Young say there are to ‘what do you want a website for?’", a: "For the audience it brings (the numbers) or for how it explains and presents you." },
        { q: "What’s the difference between an impression, a click-through and a conversion?", a: "An impression is an ad being served; a click-through is someone clicking it; a conversion is the person taking the action you wanted (buying, signing up, donating, sharing)." },
        { q: "Why is organic traffic often seen as more valuable than paid traffic?", a: "Traffic built by word of mouth and links from other sites suggests more integrity and inherent interest than traffic bought into the top search position." }
      ]
    },
    {
      id: "og-10d",
      part: "p4",
      chapter: 10,
      chapterTitle: "“Only Connect” · Intimacy at Scale: Programmatic and the Digital Shelf",
      pages: "247–252",
      title: "Intimacy at Scale: start intimate, and let scale be the dividend",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 10 · Intimacy at Scale, Programmatic Buying Ecosystems, the Google Quality Score, Dynamic Creative · PDF pp. 247–252", who: "Miles Young" }],
      quotes: [
        { text: "Shortcuts to scale will never be intimate.", page: "249" },
        { text: "Better, it can build them together, but only if intimacy is the starting point and scale the dividend – not the other way round.", page: "250" }
      ],
      idea: "The chapter title comes from E.M. Forster’s *Howards End*, where “only connect” is the start of a longer line about connecting the prose and the passion. For media in the digital age, Young says the keyword that connects intent and content, marketers and consumers, is **intimacy**.\n\nIt’s hard, because everything seems headed for automation. **Programmatic** trading automates the price negotiation for each individual exposure; it was already around 20 per cent of online ad revenue and growing more than 70 per cent a year. Rory Sutherland warns that business *fetishizes certainty*: it strips complicated problems down and solves them as optimization problems, producing ‘very rapid Darwinian advertising’.\n\nThere’s plenty of **bad programmatic**: BMW ads chasing you for six months after you bought an Infiniti; an unskippable power-tools pre-roll in front of a schoolgirl’s craft video; and roughly 15 per cent of programmatic traffic is simply fake. **Good programmatic** buys audiences by data, not only by context, usually in real time, and people are twice as likely to interact with an ad delivered in real time. The book’s diagram shows the ‘virtual factory’: money goes in at the advertiser end, flows through trading desks, demand-side platforms, ad exchanges and supply-side platforms, fed by data above and measured by metrics below, and a delivered audience comes out at the other end.\n\nThe secret is obvious: **technology is only the enabler**. Build the most granular, complete view of the individual you can assemble; work out which creative messages will engage that person; *then* scale. Shortcuts to scale are never intimate.\n\n**Weight Watchers** shows the creative side of it. Instead of manually optimizing many offer and creative combinations, Ogilvy let technology rotate copy, images and colour schemes and optimize in real time on cost per acquisition: click-through went up, CPA went down, and subscriptions rose 56 per cent.\n\nSearch returns, this time as a **channel**: your **digital shelf**, with an organic zone (owned and earned: SEO, media placements, blog mentions) and a paid zone. To win the shelf:\n\n- be always on, across desktop and mobile, synchronized with any TV buy;\n- obsess over your **Google Quality Score** (click-through rate, landing page, historical performance, relevance factors, ad relevance, keyword relevance);\n- use the insights from keyword modelling;\n- be present in Google Shopping, while managing the tension with the retailers who sell you.\n\nAbove all, good programmatic reasserts an old principle: **you cannot separate the creative and the media processes**. Technology can seem to force them apart; that way madness lies.",
      keyPoints: [
        "The keyword for digital media is intimacy: connecting intent and content, marketer and consumer.",
        "Bad programmatic stalks people, mismatches context and buys fake traffic; good programmatic buys audiences by data, in real time.",
        "Technology is only the enabler: a granular view of the person → creative that engages them → then scale.",
        "Search is your digital shelf, with an organic zone and a paid zone; win it with always-on presence and a high Quality Score.",
        "Never separate creative and media: intimacy first, scale as the dividend."
      ],
      why: "Meta’s algorithm is programmatic buying for local businesses. Feeding it distinct creative built for specific people (new rider, returning rider, gift buyer) is how a small budget becomes intimate instead of just cheap.",
      example: {
        title: "Dynamic creative for PMT (the Weight Watchers move in Meta Ads Manager)",
        before: "One ad, one image, one headline (“Learn to ride! Sign up today.”) shown to everyone aged 18–65 within 25 miles.",
        after: "Three audiences, each with its own message and a dynamic creative test inside it:\n- New riders: 4 images × 3 headlines (“Never ridden? Perfect.” / “From zero to riding in one course” / “No bike? We provide one.”)\n- Returning riders: “Been ten years? Get your confidence back.”\n- Gift buyers (Nov–Dec): “The gift they’ll talk about for years.”\nMeta rotates the combinations and shifts budget toward the lowest cost per registration; losers are paused every Monday.",
        body: "Intimacy first (a message built for a specific person), then let the machine scale what works. That’s Young’s order of operations, and the Weight Watchers pattern of rotating copy, image and colour against cost per acquisition. (Only promise ‘we provide the bike’ if PMT actually does.)"
      },
      practice: [
        {
          prompt: "Dissect it: ‘Shortcuts to scale will never be intimate.’",
          fields: [
            "In your own words, what separates ‘bad’ programmatic from ‘good’ programmatic?",
            "Which of your Meta habits (broad targeting, one ad for everyone, letting the algorithm decide) are shortcuts to scale, and which are fine?",
            "Argue the other side: when does scale matter more than intimacy for a local business?"
          ]
        },
        {
          prompt: "Apply it: Recreate the Weight Watchers dynamic-creative test for PMT or a ZDub client in Meta Ads Manager.",
          fields: ["The one goal metric you optimize on", "The audience / persona", "3–5 headlines", "3–5 visuals", "2–3 colour or format treatments", "Kill rule and review rhythm"],
          rubric: [
            "One clear acquisition goal (cost per registration or booking), not clicks",
            "Variations are genuinely different messages for a specific person, not tiny tweaks",
            "Includes a rule for pausing losers and a review rhythm",
            "Creative and targeting are planned together"
          ],
          model: "Goal: cost per registration under $45.\nPersona: returning riders, 35–55, who rode years ago.\nHeadlines: “Been ten years? Your skills are still in there.” / “Shake off the rust.” / “Ride with your kids this summer, safely.” / “Your bike’s ready. Are you?”\nVisuals: a grey-haired student grinning on the range; close-up of hands on the grips; a family ride; an instructor coaching at a cone.\nTreatments: navy-and-orange brand frame; raw photo with bold text; a 9:16 video cut.\nKill rule: pause any combination that spends $60 without a registration; review every Monday; the top combination gets 70% of budget and two new challengers go in each week."
        }
      ],
      today: { task: "Search Google on your phone for ‘motorcycle class Sacramento’ (and one client’s main keyword). Screenshot the paid and organic zones and note where PMT shows up.", output: "A ‘digital shelf’ snapshot: who owns the paid slots, who owns organic, and PMT’s position in each.", minutes: 15 },
      check: [
        { q: "What is Young’s ‘one secret’ to getting programmatic right?", a: "Remember technology is only the enabler: build a granular view of the individual, decide which creative will engage them, then scale." },
        { q: "What are the two zones of the ‘digital shelf’?", a: "The organic zone (owned and earned: SEO, media placements, blog mentions) and the paid zone (search results you pay for)." },
        { q: "What did dynamic creative do for Weight Watchers?", a: "It replaced manual optimization with real-time rotation of copy, images and colours optimized on CPA: higher CTR, lower CPA and a 56% increase in subscription volume." }
      ],
      examples: [
        {
          id: "og-ex-weight-watchers-dynamic-creative",
          title: "Weight Watchers: dynamic creative",
          brand: "Weight Watchers", agency: "Ogilvy & Mather", year: "",
          format: "Data / CRM",
          pdfPage: 252,
          what: "A three-part diagram. Left: a scattered pile of different Weight Watchers ads (food shots, smiling members, offers), the old way: manually optimizing many offer and creative combinations, slow and costly. Middle: a neat grid of ad variants with the same layout but different headlines, photos and colour schemes, rotated automatically with real-time multivariate testing. Right: the results: click-through up, cost per acquisition down, and a 56 per cent increase in subscription volume.",
          idea: "Let technology rotate copy, image and colour combinations in real time and keep whatever lowers cost per acquisition, so optimization happens in the moment instead of in a monthly meeting.",
          elements: [
            { n: 1, name: "One business goal", detail: "Increase user acquisition (subscriptions); everything is judged on CPA.", principle: "Underdose with metrics; start problem first" },
            { n: 2, name: "Modular creative", detail: "Ads built from interchangeable parts: headline, image, colour combination.", principle: "Creative and media built together" },
            { n: 3, name: "Real-time multivariate testing", detail: "The system rotates combinations and shifts weight to the winners as the data comes in.", principle: "Closed-loop optimization" },
            { n: 4, name: "Results that matter", detail: "CTR up, CPA down, subscriptions up 56%.", principle: "Effectiveness, not just measurement" }
          ],
          beats: [
            { n: 1, label: "Goal: more Weight Watchers subscriptions" },
            { n: 2, label: "Problem: manually optimizing many offers and creative combinations is slow and expensive" },
            { n: 2, label: "Build: one template with many headlines, photos and colour combinations" },
            { n: 3, label: "Rotate: technology tests the combinations in real time, optimizing on CPA" },
            { n: 4, label: "Result: higher CTR, lower CPA, 56% more subscriptions" }
          ],
          recreate: {
            brief: "Break one ad into swappable parts and let the platform find the winning combination against your real goal metric.",
            fields: [
              { id: "goal", label: "Goal metric", hint: "Cost per registration or booked job" },
              { id: "template", label: "The fixed template", hint: "Logo position, layout, CTA button" },
              { id: "headlines", label: "Headline set (3–5)", hint: "Different promises, not synonyms" },
              { id: "images", label: "Image set (3–5)", hint: "Different people and moments" },
              { id: "colours", label: "Colour / format treatments (2–3)", hint: "Brand colours, raw photo, video" }
            ],
            steps: [
              "Design one master template in Canva with a fixed logo, layout and CTA.",
              "Make 3–5 headline versions and 3–5 image versions.",
              "In Meta Ads Manager, load them as multiple text and media options (or separate ads) in one ad set optimized for your conversion event.",
              "Let each variant get meaningful spend; judge on cost per result, not CTR alone.",
              "Every week, pause the bottom performers and add two new challengers.",
              "Log the winners in a swipe file so the next campaign starts smarter."
            ]
          }
        }
      ]
    },
    {
      id: "og-10e",
      part: "p4",
      chapter: 10,
      chapterTitle: "“Only Connect” · Digital Video",
      pages: "251–254",
      title: "Digital Video: you seek fans, you don’t buy audiences",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 10 · Digital Video (creators, superfans, 70/20/10, Qualcomm Lifeline) · PDF pp. 251–254", who: "Miles Young" }],
      quotes: [
        { text: "There is a failure to understand that in digital video you seek fans, you don’t buy audiences.", page: "252" },
        { text: "After all, audience is just the advertising world’s way of describing community.", page: "254" }
      ],
      idea: "Young calls digital video a piece of connective tissue the industry has been oddly slow to use well. Pre-rolls and interstitials disappoint people: a TV commercial dropped in as an unskippable pre-roll irritates, especially when it’s wildly out of context (a pickup-truck spot before a teen make-up tutorial). ‘Good’ video was still under 20 per cent of online ad spend. Why? Two failures: **not joining the community** and **not collaborating with creators**.\n\nThe mindset fix: **in digital video you seek fans; you don’t buy audiences**. Fandom runs on authentic passion. It isn’t there to be ‘hit’; it’s there to be conspired and collaborated with. The Young Turks, an opinionated youth news network whose presenters get mobbed at conferences like rock stars, shows the kind of energy he means.\n\nBoardrooms haven’t changed much, so Young points to a budgeting rule Wendy Clark championed at Coca-Cola: **70/20/10**. Seventy per cent of media investment on low-risk bread and butter, 20 per cent on innovation, 10 per cent on high-risk new ideas. It never really caught on, but digital video is the strongest case for the 10 per cent. That money would buy two things:\n\n- **Experiments with creators.** Ogilvy’s New York office identified the top 30. They aren’t boardroom material, but they have more consumer intimacy than most influencers. Ryan Higa’s launch of the Lenovo Yoga tablet fitted so naturally into his ongoing fan interactions that fans looked forward to an obvious ad as eagerly as to his other videos.\n- **Sensitivity to superfans**: the 20 per cent of enthusiasts who drive 80 per cent of the engagement and conversation, moderate the comments and lead the community. You reach them by becoming part of the entertainment flow. Rhett & Link wove Geico into their programming so smoothly that only the brand name told you it was an ad; Geico reached their superfans simply by letting Rhett & Link be Rhett & Link.\n\nDo both and you build a sustained **audience** instead of mere viewership, and an audience is really a **community**.\n\nThe alternative route is to **learn from Hollywood**: the client courage to make, once in a while, one big production so compelling it commands attention, then scale that attention with a data-informed distribution plan. Qualcomm moved its annual media budget into *Lifeline*, a half-hour thriller directed by Oscar winner Armando Bo and starring Olivia Munn, Leehom Wang and Joan Chen, in which a man hunts for his missing girlfriend using the phone she left behind, its Snapdragon features driving the search. Set in Shanghai, with 70 per cent of the dialogue in Chinese for a key market, it drew 20 million views, plus 100 million more for trailers and behind-the-scenes.",
      keyPoints: [
        "TV spots dropped in as unskippable pre-roll frustrate people, especially out of context.",
        "In digital video you seek fans; you don’t buy audiences.",
        "Budget 70/20/10: 70% proven, 20% innovative, 10% high-risk; digital video earns the 10%.",
        "Collaborate with creators and let them be themselves; reach the 20% of superfans who drive 80% of engagement.",
        "Or go Hollywood: one big, compelling story, scaled by data-informed distribution (Qualcomm’s Lifeline)."
      ],
      why: "Sacramento has local moto vloggers, car-meet and outdoors creators whose fans trust them more than any ad. One authentic collaboration can outperform months of boosted posts for PMT, if the creator is allowed to stay themselves.",
      example: {
        title: "PMT × a local moto vlogger, done the Rhett & Link way",
        before: "Brief to the creator: “Post our 30-second ad on your page and say ‘Use code RIDE10.’”",
        after: "Brief: “Make the video you’d make anyway, with one twist: take PMT’s beginner course as if you’d never ridden, with your usual humour and honest commentary. Film whatever happens, including the parts where you mess up. We only ask for the link in the description and the code mentioned in your own words.”",
        body: "Seeking fans, not buying audiences: the creator’s format and voice stay intact, the brand becomes part of the entertainment flow, and the superfans in the comments do the persuading. Fund it from PMT’s ‘10 per cent’ line and measure registrations from the code."
      },
      practice: [
        {
          prompt: "Dissect it: ‘audience is just the advertising world’s way of describing community’.",
          fields: [
            "In your own words, what’s the difference between buying an audience and seeking fans?",
            "Why did Ryan Higa’s and Rhett & Link’s branded videos work when most pre-roll doesn’t?",
            "Argue the other side: when is a straight, paid pre-roll the right call?"
          ]
        },
        {
          prompt: "Apply it: Recreate the creator pattern (Higa × Lenovo, Rhett & Link × Geico) for PMT or a ZDub client: a collaboration brief that lets the creator be themselves, plus the 70/20/10 budget split it comes from.",
          fields: ["The creator, and why their fans fit", "Their usual format", "The brand’s role inside that format", "What you will NOT ask them to do", "The 70/20/10 split and where this sits", "How you’ll measure it"],
          rubric: [
            "The creator’s usual format and voice are preserved (the brand is part of the entertainment flow)",
            "Chooses a creator for real community intimacy, not just follower count",
            "Funded explicitly from the 10% (or 20%) line",
            "Has a concrete measure (code, link, registrations)"
          ],
          model: "Creator: a Sacramento moto vlogger (18k subscribers) known for honest ‘first ride’ and gear videos; the comments are full of beginners asking questions.\nFormat: long, funny ride vlogs that end with ‘lessons learned’.\nBrand role: PMT’s instructors teach his partner, a total beginner, through the course; he vlogs the whole thing.\nWon’t ask: no script, no forced talking points, no ‘link in bio’ every 30 seconds.\nBudget: PMT’s $2,000 a month → $1,400 proven Meta ads (70%), $400 new formats and tests (20%), $200 plus a free class seat for the creator collaboration (10%).\nMeasure: a unique code and UTM link; registrations within 60 days; comments asking how to sign up."
        }
      ],
      today: { task: "List five Sacramento-area creators (moto, cars, outdoors, local lifestyle) whose comment sections are full of real conversation. Note each one’s format and one natural way PMT could appear in it.", output: "A five-row creator shortlist: format, community signal, fit idea.", minutes: 25 },
      check: [
        { q: "What two failures does Young blame for weak digital video?", a: "Not joining the community and not collaborating with creators." },
        { q: "What is Wendy Clark’s 70/20/10 rule?", a: "70% of media investment on low-risk bread and butter, 20% on innovation, 10% on high-risk new ideas." },
        { q: "How did Qualcomm’s Lifeline take the ‘Hollywood’ route?", a: "It shifted its annual media budget into a half-hour thriller built around its Snapdragon features and distributed it online: 20 million views, plus 100 million more with trailers and behind-the-scenes." }
      ],
      examples: [
        {
          id: "og-ex-qualcomm-lifeline-film",
          title: "Qualcomm Lifeline: the half-hour thriller",
          brand: "Qualcomm (Snapdragon)", agency: "", year: "",
          format: "Online film",
          pdfPage: 253,
          what: "A dark, moody poster: Olivia Munn’s and Leehom Wang’s faces in profile, a Shanghai skyline cutting through them, the outline of a smartphone around her face, and the red title LIFELINE with its second half mirrored. The film is a 30-minute thriller in which a man searches for his missing girlfriend using the phone she left behind; its Snapdragon features (security, photo and video capture, connectivity, fast charging) are how he finds her.",
          idea: "Put the budget into a story people choose to watch, make the product’s features the plot devices, then scale it with digital distribution.",
          elements: [
            { n: 1, name: "A brave budget shift", detail: "Qualcomm moved its annual ad budget from media spend into production.", principle: "The 10 per cent for high-risk ideas; client courage" },
            { n: 2, name: "Genre storytelling", detail: "A Hollywood-style thriller with an Academy Award-winning director (Armando Bo) and stars Olivia Munn, Leehom Wang and Joan Chen.", principle: "Advertising people truly want to see" },
            { n: 3, name: "Product as plot device", detail: "Each Snapdragon capability is how the hero finds the next clue, not a feature list.", principle: "Demonstration inside the story" },
            { n: 4, name: "Market-specific craft", detail: "Set in Shanghai with 70% of the dialogue in Chinese, for one of Qualcomm’s main markets.", principle: "Know exactly whom you’re talking to" },
            { n: 5, name: "Scaled distribution", detail: "The film, trailers and behind-the-scenes video: 20 million views plus 100 million more.", principle: "Attention scaled by a digitally informed distribution strategy" }
          ],
          beats: [
            { n: 2, label: "In Shanghai, a man’s girlfriend goes missing, leaving her smartphone behind" },
            { n: 3, label: "He turns to the phone: its security and saved photos and video become his leads" },
            { n: 3, label: "Connectivity and fast charging keep the search going at the critical moments" },
            { n: 2, label: "A full half-hour thriller unfolds, with movie stars and an Oscar-winning director" },
            { n: 5, label: "Trailers and behind-the-scenes clips drive viewers to the full film online" }
          ],
          recreate: {
            brief: "Write a short story in which your product’s features are the tools the hero uses to solve the problem, and put real money behind distributing it.",
            fields: [
              { id: "hero", label: "Hero and stakes", hint: "Who needs what, urgently?" },
              { id: "genre", label: "Genre", hint: "Thriller, comedy, documentary, romance" },
              { id: "features", label: "Three features as plot devices", hint: "PMT: emergency braking, the head check, low-speed control" },
              { id: "setting", label: "A setting your market recognizes", hint: "Sacramento landmarks, local roads" },
              { id: "distribution", label: "Distribution plan", hint: "Trailer Reels, full film on YouTube, retargeting" }
            ],
            steps: [
              "Write a one-page story in which the hero would fail without your product’s three key features.",
              "Storyboard 8–12 shots and shoot on iPhone in recognizable local spots.",
              "Edit a 2–4 minute film in CapCut, plus three 15-second trailers.",
              "Post the full film on YouTube and run the trailers as Reels ads linking to it.",
              "Retarget people who watched 50% or more with a direct offer.",
              "Track views, watch time and registrations from the film’s link."
            ]
          }
        },
        {
          id: "og-ex-lenovo-yoga-ryan-higa",
          title: "Ryan Higa launches the Lenovo Yoga tablet",
          brand: "Lenovo", agency: "", year: "",
          format: "Online film",
          pdfPage: 254,
          what: "Described in the text, not pictured. YouTube creator Ryan Higa, one of the top 30 creators Ogilvy’s New York office identified, launched Lenovo’s Yoga tablet inside his regular videos and fan interactions. It was obviously an advertisement, yet his fans accepted it and even looked forward to it with the same anticipation as his other uploads.",
          idea: "Hand the launch to a creator whose fans already love his format, and let the product live inside that format.",
          elements: [
            { n: 1, name: "Creator selection", detail: "Chosen from a researched list of top creators for consumer intimacy, not boardroom polish.", principle: "Seek fans; don’t buy audiences" },
            { n: 2, name: "Native format", detail: "The launch was a seamless part of his ongoing fan interactions, not a bolted-on spot.", principle: "Join the community" },
            { n: 3, name: "Open about being an ad", detail: "It was clearly advertising, and fans accepted it because it was still his entertainment.", principle: "Authenticity beats disguise" },
            { n: 4, name: "Anticipation", detail: "Fans looked forward to it like any other Higa video.", principle: "Make advertising people choose to watch" }
          ],
          beats: [
            { n: 1, label: "Research and rank creators by real fan intimacy (Ogilvy New York’s top 30)" },
            { n: 2, label: "Ryan Higa builds the Yoga tablet launch into his usual videos and fan interactions" },
            { n: 3, label: "The video is plainly branded but made entirely in his style" },
            { n: 4, label: "Fans watch and share it with the same anticipation as his other uploads" }
          ],
          recreate: {
            brief: "Pick a creator for community intimacy, give them the product and the goal, and let them make it their way.",
            fields: [
              { id: "creator", label: "The creator", hint: "Whom do your buyers already watch?" },
              { id: "signal", label: "Intimacy signal", hint: "Comment quality, replies, inside jokes" },
              { id: "format", label: "Their recurring format", hint: "Challenges, vlogs, skits, reviews" },
              { id: "role", label: "The product’s role in that format", hint: "What happens to, or with, the product?" },
              { id: "disclosure", label: "How it’s disclosed", hint: "Paid-partnership tag plus their own words" }
            ],
            steps: [
              "Shortlist 5–10 local creators and read 50 comments on each to judge the real community.",
              "Pick one; watch 10 of their videos and note their recurring format.",
              "Pitch a concept that fits that format, with the product as a natural part of it.",
              "Agree deliverables, disclosure (paid partnership) and a tracking link or code, and nothing more.",
              "Let them script and edit; give feedback only on facts and safety.",
              "Boost the best-performing post as a partnership ad in Meta Ads Manager."
            ]
          }
        },
        {
          id: "og-ex-geico-rhett-and-link",
          title: "Rhett & Link × Geico",
          brand: "Geico", agency: "", year: "",
          format: "Online film",
          pdfPage: 254,
          what: "Described in the text, not pictured. The YouTube comedy duo Rhett & Link built Geico advertising into their video programming so seamlessly that, apart from the brand name, it looked exactly like their other videos. Geico reached the duo’s superfans simply by letting Rhett & Link be Rhett & Link.",
          idea: "Reach the superfans who drive a community by sponsoring the creators’ own entertainment, unchanged.",
          elements: [
            { n: 1, name: "Superfans", detail: "The 20% of enthusiasts who drive 80% of engagement and lead the comment streams.", principle: "Reach superfans by becoming part of the entertainment flow" },
            { n: 2, name: "Creators stay themselves", detail: "The videos kept the duo’s humour and format; nothing was forced.", principle: "Let creators be creators" },
            { n: 3, name: "The brand name as the only marker", detail: "Geico is named, but the content is indistinguishable from their usual shows.", principle: "Brand present, not intrusive" },
            { n: 4, name: "Community, not viewership", detail: "A sustained audience that keeps coming back, not one-off impressions.", principle: "Audience is just advertising’s word for community" }
          ],
          beats: [
            { n: 1, label: "Identify a creator duo with a loyal, active superfan base" },
            { n: 2, label: "Geico sponsors their regular programming" },
            { n: 3, label: "Rhett & Link make the videos in their usual style, naming Geico" },
            { n: 4, label: "Superfans watch, comment and share as usual; the brand rides the community" }
          ],
          recreate: {
            brief: "Sponsor a creator’s regular episode and change nothing except adding your brand name and a perk for the superfans.",
            fields: [
              { id: "show", label: "The creator’s regular show", hint: "A weekly series or recurring bit" },
              { id: "superfans", label: "Who the superfans are", hint: "The names in the comments every week" },
              { id: "mention", label: "How your brand is named", hint: "One natural line in their voice" },
              { id: "perk", label: "Something for the superfans", hint: "A free class-seat giveaway, a meet-up at the range" },
              { id: "measure", label: "Measure", hint: "Code, link clicks, registrations" }
            ],
            steps: [
              "Find a creator with a recurring series and an active comment section.",
              "Offer to sponsor one episode as it is, with a natural brand mention in their words.",
              "Add a superfan perk (giveaway, meet-up) for the creator to announce.",
              "Supply a tracking link and code; approve facts only.",
              "Join the comments as the brand, in a human voice.",
              "If registrations justify it, sponsor again with the same creator: consistency builds community."
            ]
          }
        }
      ]
    },
    {
      id: "og-10f",
      part: "p4",
      chapter: 10,
      chapterTitle: "“Only Connect” · Intimacy in Depth: DAVE and the Performance Brand",
      pages: "254–258",
      title: "Intimacy in Depth: from CRM’s failures to DAVE and the performance brand",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 10 · Intimacy in Depth, DAVE, Customer-Centricity, The Performance Brand · PDF pp. 254–258", who: "Miles Young" }],
      quotes: [
        { text: "There’s no intimacy without knowing whom you are being intimate with.", page: "256" },
        { text: "Live in fragments no longer.", page: "258" }
      ],
      idea: "How deep can intimacy go? Young admits his most thankless presentations were the ones selling **CRM** (customer relationship marketing). Early in the digital era Ogilvy proved the theory: people who received personalized communications bought more; they would trade information about themselves for useful information about products; and you could calculate their **lifetime value** and turn the data into measurable ROI.\n\nBut it was ‘seeing through a glass darkly’. The medium was direct mail, databases were primitive, data came from a single source, the process was clunky and expensive, and worst of all it demanded a lot of hard work from clients. Even email didn’t fix it. Outside easy sectors like airlines (where ‘relationship’ mostly meant points), clients nodded and did little. CRM became a dirty acronym that some companies banned. Its real failure: it was never truly **intimate** or engaging, because marketers were obsessed with the tools rather than the customer’s experience.\n\n‘Data plus digital’ finally lets the **customer’s** point of view sit at the centre. So Ogilvy invented **DAVE**, introduced to staff in one of Young’s ‘Miles’ Minute’ videos: **Data-inspired, Always-on, Valuable, Experience**, a hip grandson of David standing for engagement that sells. It’s a way of thinking with six steps:\n\n1. Define a **customer ambition**, distinct from the business ambition: exactly whom you’re engaging and what value you want to unlock.\n2. Create **personas** of those segments, to bring them to life.\n3. Map the **customer journey**: *all* the touch points and pain points along the persona’s path, painstakingly (no pain, no gain; slipshod maps are common).\n4. Create an **engagement idea**: like any idea it works through surprise, but it must also *invite the customer to take a role*, and it plays long-term.\n5. Develop a **blueprint** for engagement that brings it all together.\n6. Turn it into a plan, an **experience map**: how the idea flows through each channel and touch point, and how intimate each moment will be.\n\nThe chart puts data and insights on top, the brand underneath and the six steps in between: a systematic path to **customer centricity**, the promised land of the digital age.\n\nCould it go further, to a **performance brand**, where engagement, programmatic delivery and live changes to the media and creative mix are baked in? It starts with programmatic buying, adds heavy analytics to optimize across paid and unpaid channels, then DAVE steers it into engagement, and finally it becomes fully omnichannel, linking what people do in store with what they do elsewhere. That takes some 30 technology partners and a marketing cloud to hold the data. And so the chapter completes Forster’s sentence: live in fragments no longer. Everything connects.",
      keyPoints: [
        "CRM proved personalization pays (lifetime value, ROI) but failed because it was about tools, not the customer’s experience.",
        "DAVE = Data-inspired, Always-on, Valuable, Experience: engagement that sells.",
        "Six steps: customer ambition, personas, customer journey, engagement idea, blueprint, experience map.",
        "An engagement idea must invite the customer to take a role, and it plays long-term.",
        "The performance brand: programmatic + analytics + engagement + omnichannel, optimized live."
      ],
      why: "PMT’s most valuable customers are past students (advanced classes, gift purchases, referrals). A DAVE-style follow-up journey turns one class into a relationship, which is the lifetime value most local businesses leave on the table.",
      example: {
        title: "A DAVE map for PMT’s graduates",
        before: "After class: a generic “Thanks for taking our class!” email, then nothing until a holiday promo blast.",
        after: "Customer ambition: turn new licensees into confident, lifelong riders who come back and bring friends.\nPersona: ‘Weekend Maria’, 29, just passed, nervous about freeways.\nJourney: graduation-day photo → first solo ride → first freeway → first group ride → next riding season.\nEngagement idea: ‘The First 1,000 Miles’: log milestones, get a tip and a badge at each, finish with a skills refresher day.\nExperience map: SMS on graduation day with the class photo; email tips at 50, 250 and 500 miles; IG story reshares of milestones; refresher invitation at 1,000; a referral card in the finisher kit.",
        body: "Data-inspired (milestones), always-on (automated), valuable (real riding help), an experience (Maria plays a role). And it looks to the long term, as Young says an engagement idea must."
      },
      practice: [
        {
          prompt: "Dissect it: why CRM became ‘a dirty acronym’.",
          fields: [
            "In your own words, what did early CRM prove, and why did it still fail?",
            "What makes an engagement idea different from an ordinary ad idea?",
            "Argue the other side: when is a simple points or loyalty scheme better than chasing ‘intimacy’?"
          ]
        },
        {
          prompt: "Apply it: Run the six DAVE steps for a ZDub client’s past customers (or for ZDub’s own clients).",
          fields: ["Customer ambition", "One persona (name, age, situation)", "Five journey touch points plus one pain point", "The engagement idea: what role does the customer play?", "Experience map: channel and timing for each touch point"],
          rubric: [
            "The customer ambition is distinct from the business ambition",
            "The persona is specific enough to write to",
            "The engagement idea invites the customer to do something and plays long-term",
            "Every touch point has a channel and a timing (always-on)"
          ],
          model: "Client: a Folsom auto detailer.\nCustomer ambition: owners who feel proud of their car all year, not just the day after a detail.\nPersona: ‘Truck Tony’, 41, new F-150, washes it every Sunday, hates swirl marks.\nTouch points: first ceramic coating → two-week check-in → first rain → three-month maintenance → one-year anniversary. Pain point: he doesn’t know how to wash without scratching the coating.\nEngagement idea: ‘Shine Score’: Tony texts a photo each quarter and gets a score and a tip; four photos earn a free maintenance wash.\nExperience map: day 1, SMS with a care video; day 14, SMS ‘reply with a photo’; after the first rain, a Reel of water beading; day 90, a booking link; one year, an anniversary card plus a referral offer."
        }
      ],
      today: { task: "Write the customer ambition and one persona for PMT’s graduates, then list every touch point from graduation day to their next riding season.", output: "A one-paragraph persona and a touch-point list with at least six moments and one pain point.", minutes: 25 },
      check: [
        { q: "What does DAVE stand for?", a: "Data-inspired, Always-on, Valuable, Experience." },
        { q: "What are DAVE’s six steps?", a: "Define a customer ambition; create personas; map the customer journey; create an engagement idea; develop an engagement blueprint; turn it into an experience map (plan)." },
        { q: "Why did CRM fail to be truly intimate?", a: "Practitioners were obsessed with the tools (mail, databases, points schemes) rather than the experience the customer had, and it demanded heavy, expensive work from clients." }
      ]
    },
    {
      id: "og-11a",
      part: "p4",
      chapter: 11,
      chapterTitle: "Creative Technology: The Sweet Spot · It Starts With Code",
      pages: "259–262",
      title: "Creative Technology: code is the foundation, and four kinds of people make it sing",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 11 · Creative Technology: The Sweet Spot · opening, It Starts With Code, The Creative Process for Digital · PDF pp. 259–262", who: "Miles Young" }],
      quotes: [
        { text: "the coder represents the foundation of advertising in the digital age.", page: "260" },
        { text: "To put a fine point on it, the digital producer is the leader of the project.", page: "261" }
      ],
      idea: "In the pre-digital world, ‘creative technology’ would have sounded like a grotesque oxymoron: artists versus geeks, right brain versus left. Young sees it as one of the biggest ‘ands’ of his **Age of And**: where creativity and technology converge is a **transformative sweet spot**.\n\n**It starts with code.** Code is everywhere, like electricity: in the power grid, washing machines, fridges, cars (mechanics are now part computer engineer), even light bulbs, and old languages like Cobol still run the economy. Put simply, code is a set of instructions written in a language humans can read and change, which the computer translates into its own machine language to set its logic gates. People go into advertising to avoid code, yet code sits behind it too. (His recommended primer: Paul Ford’s 2015 essay *What Is Code?*)\n\nSo **the coder is the foundation of advertising in the digital age**. Code can be good or bad, morally and functionally, and the programmer now decides whether an agency is good or bad at creative technology. Ogilvy wants elegant coders who write for any device and bandwidth, work well with clients, data scientists and creatives, and hate a clumsy interface as much as clumsy code. (A heavy-handed back-end engineer also works, if he’s paired with designers who have a flair for the customer’s experience.)\n\nThree more roles complete the team:\n\n- **The digital producer**: not a glorified project manager but the guardian of the vision, the connection to the client and often the one who finds the talent, managing everything from user journeys and research to design and the engineering roadmap. In short, **the leader of the project**: less a pilot than an air-traffic controller.\n- **Digital creatives**: they dream up, write and make everything from banners and geo-located billboards to websites and restaurant menu apps, ranging from Photoshop users who code a bit of HTML5 to virtuoso designer-coders who reach a minimum viable product at Silicon Valley speed without betraying the brand.\n- **The inventor**: a rare bird who sees that one object’s purpose can solve another problem: a tennis racquet that coaches, virtual reality that lets you experience a hotel from across the world, a favourite drink linked to a kids’ fitness tracker.\n\nThe four are **not a hierarchy** (treating them as one is corrosive) but a **virtuous circle**, each making the others better. The chart on p. 262 maps them onto British Airways’ plane-spotting billboard: the creative wanted wonder (a child following a plane across the sky), the inventor combined an aircraft-tracking antenna with a geo-fence and Heathrow data, the programmer wrote the algorithm linking that data to GPS and the weather, and the producer delivered it on time and on budget inside BA’s wider digital ecosystem.",
      keyPoints: [
        "Creativity plus technology is a sweet spot, not an oxymoron: one of the Age of And’s biggest ‘ands’.",
        "Code is instructions humans write and computers translate; it now sits under all advertising.",
        "Four roles: coder (the foundation), digital producer (the leader), digital creative (the maker), inventor (sees new uses for things).",
        "The four are a virtuous circle, not a hierarchy.",
        "British Airways #lookup needed all four: wonder (creative), antenna plus data (inventor), algorithm (programmer), delivery (producer)."
      ],
      why: "ZDub is a small shop, so Zach wears all four hats. Knowing which hat a project needs (producer on a client launch, inventor on a stunt, builder on a landing page) keeps quality up without hiring, and shows which hat to outsource first.",
      example: {
        title: "Four hats on one PMT project: the ‘seats left’ live ad",
        before: "Plan: “Make some ads about open seats.”",
        after: "Creative: the idea and the feeling (“3 seats left. Three people become riders on Saturday.”).\nInventor: connect the booking system’s seat count to the ads (an export or automation into a Google Sheet).\nCoder / builder: the automation that updates the sheet and flags which Canva variant should run when seats drop to 3 or fewer.\nProducer: timeline, owner sign-off, budget, QA (no wrong dates), and how it fits PMT’s other channels.",
        body: "One project, four roles, none above the others. Without the inventor it’s a static ad; without the builder it’s a manual chore; without the producer it ships with mistakes; and without the creative nobody cares."
      },
      practice: [
        {
          prompt: "Dissect it: the four roles of creative technology.",
          fields: [
            "In your own words, what does each role (coder, digital producer, digital creative, inventor) contribute?",
            "Which role do you naturally play, and which do you most often skip?",
            "Why does Young say treating the four as a hierarchy is ‘corrosive’?"
          ]
        },
        {
          prompt: "Apply it: Recreate the ‘What Is Code?’ pattern for PMT or ZDub: a playful explainer page that demonstrates its own subject and responds to the visitor. Then name who plays each of the four roles.",
          fields: ["The big question the page answers", "How the page demonstrates its subject (not just explains it)", "The playful personal touch (like Ford’s ‘Welcome back’ robot)", "Who plays coder, producer, creative and inventor (people or tools)"],
          rubric: [
            "One big, clear question as the headline",
            "The page demonstrates the subject interactively rather than as a wall of text",
            "Includes a personal, playful element that reacts to the visitor",
            "Names who handles each of the four roles"
          ],
          model: "Question: “What actually happens on day one of motorcycle class?”\nDemonstration: a scroll-through timeline of the day (meet the bike → first roll in the friction zone → lunch → first turns → first figure-eight), each step with a five-second clip, and a ‘nerves meter’ that drops as you scroll.\nPersonal touch: a small helmet mascot that says “Welcome back! Still thinking about it? Saturday has 4 seats.” on return visits.\nRoles: creative = Zach (story and copy); inventor = Zach (nerves meter, live seats); coder = a no-code builder (Framer or Webflow) or a freelancer; producer = Zach, with PMT’s owner signing off the facts."
        }
      ],
      today: { task: "Take the last project you shipped and assign each of the four roles to a person or a tool. Circle the role that was missing or rushed.", output: "A four-line role map and one change for your next project.", minutes: 10 },
      check: [
        { q: "What are the four roles of creative technology in this chapter?", a: "The coder (programmer), the digital producer, the digital creative and the inventor." },
        { q: "How does Young describe the digital producer?", a: "Not a glorified project manager but the keeper of the vision, the link to the client and often the talent scout: the leader of the project, more air-traffic controller than pilot." },
        { q: "What makes the inventor special?", a: "They see that one object’s purpose can solve a different problem (a racquet that coaches, VR that shows you a distant hotel, a drink linked to a fitness tracker)." }
      ],
      examples: [
        {
          id: "og-ex-bloomberg-what-is-code",
          title: "Paul Ford, “What Is Code?” (Bloomberg Businessweek)",
          brand: "Bloomberg Businessweek", agency: "", year: "2015",
          format: "Website",
          pdfPage: 260,
          what: "A screenshot of the Bloomberg web page: a pixel-grid background of orange, purple and yellow squares behind an enormous white headline, “WHAT IS CODE?”, with the line ‘Businessweek June 11, 2015 · By Paul Ford’. In the corner a little pixel robot pops up with a speech bubble: “Welcome back! You’ve visited 2 times and spent 1 minutes here.”",
          idea: "An essay about code built to show what code can do: the page itself plays, counts and talks back to you.",
          elements: [
            { n: 1, name: "The question as headline", detail: "A giant, blunt question the reader has secretly wanted to ask.", principle: "The headline does the work: promise an answer" },
            { n: 2, name: "Art direction from the subject", detail: "Pixel-grid graphics and a code-style typeface make the topic visible before a word is read.", principle: "Visual and message are one idea" },
            { n: 3, name: "The page talks back", detail: "The robot knows you’ve been here before and for how long: code demonstrating itself.", principle: "Demonstration; the creative use of code" },
            { n: 4, name: "Credible byline", detail: "Publication, date and author give a playful page its authority.", principle: "Credibility" }
          ],
          layout: { aspect: "16:10", boxes: [
            { n: 4, label: "Bloomberg nav bar", x: 8, y: 4, w: 84, h: 9 },
            { n: 2, label: "Pixel-grid background", x: 8, y: 14, w: 84, h: 82 },
            { n: 1, label: "WHAT IS", x: 10, y: 16, w: 80, h: 28 },
            { n: 4, label: "Businessweek June 11, 2015 · By Paul Ford", x: 10, y: 46, w: 80, h: 7 },
            { n: 1, label: "CODE?!", x: 10, y: 56, w: 80, h: 38 },
            { n: 3, label: "Pixel robot: ‘Welcome back!’", x: 2, y: 62, w: 22, h: 18 }
          ] },
          recreate: {
            brief: "Build an explainer page that demonstrates its subject and reacts to the visitor, under one big question headline.",
            fields: [
              { id: "question", label: "The big question", hint: "What does your customer secretly want answered?" },
              { id: "style", label: "Art direction from the subject", hint: "PMT: lane lines, cones, tyre tracks" },
              { id: "demo", label: "How the page demonstrates it", hint: "Scroll timeline, calculator, quiz" },
              { id: "talkback", label: "The page’s personal line", hint: "Something that reacts to the visitor" },
              { id: "cta", label: "Where it leads", hint: "Book, call, download" }
            ],
            steps: [
              "Write the question headline and a five-step outline of the answer.",
              "Pick a visual motif that comes from the subject and build the hero image in Canva.",
              "Build the page in a no-code tool (Framer, Webflow or Carrd) with one interactive element (quiz, slider or scroll timeline).",
              "Add a small responsive touch (a returning-visitor message, a live seats count) if the tool allows.",
              "Put the CTA at the end of the story and once at the top.",
              "Share it as a Reel walkthrough and as the link in ads; track time on page and conversions."
            ]
          }
        }
      ]
    },
    {
      id: "og-11b",
      part: "p4",
      chapter: 11,
      chapterTitle: "Creative Technology: The Sweet Spot · The Front End (UX)",
      pages: "262–265",
      title: "The Front End: UX is everyone’s job, and the whole experience is the product",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 11 · The Front End, The Perfect UX · PDF pp. 262–265", who: "Miles Young" }],
      quotes: [
        { text: "UX is as much a philosophy as it is a practice, and in many respects, it is everyone’s job, particularly at an agency.", page: "264" },
        { text: "It is as essential as it is intangible.", page: "265" }
      ],
      idea: "The **front end**, where creativity and technology mingle, goes by a deceptively simple acronym: **UX**, user experience, a fiercely contested field. Young credits Don Norman with the concept (the book dates it to 1998). Norman felt ‘human interface’ and ‘usability’ were too narrow; he meant **human-centred design** covering every part of a person’s experience with a system: the industrial design, graphics, interface, physical interaction, even the manual. Today it has become the place where information architecture meets research, strategy, content, psychology and visual design.\n\nYoung’s joke: the discipline of simplicity is never explained simply. Every UX chart looks as though drunken locusts drew it in ink, because the specialists inside UX have never settled their relationship and each benefits from keeping things vague. Ogilvy’s own charts weren’t much better, so he briefed his team for a clear one, **The Perfect UX**: three overlapping circles inside a **Design → Develop → Deploy** cycle.\n\n- **Research**: uncover the context, behaviours and problems to solve (user stories, personas, task models).\n- **Concepts**: iterate creatively to explore options (sketches, wireframes, prototypes).\n- **Experience**: build what solves the problem (detailed designs, code templates, validating and monitoring).\n- Where they overlap sit **R&D**, **QA** and **Measurement**, with UX at the centre.\n\nThe UX designer sits where **customer needs, business needs and feasibility** meet. UX is as much philosophy as practice, and at an agency it’s **everyone’s job**: on one project the UX designer acts as planner, on another as visual designer. The range is staggering: copywriting, information design, sound design, motion design, graphic design, interface design, interaction design and code.\n\nWhy so broad? Because **experience is often a brand’s differentiator**. **Uber** is the standard example, and its magic is the *whole* experience, not just the elegant app. It shows waiting travellers exactly what they care about (the fare and the wait) and pairs that with a smarter, more customer-friendly use of cars and drivers. It took the opaque taxi market and made it almost frictionless.\n\nThat suggests a wider job description. If you book on an airline’s superb website and check in smoothly, then endure a dreadful flight, you’ve had a **bad user experience**. The UX designer can’t control air traffic, but can shape how the airline behaves. The role is to improve **every** interaction between a brand and its customers.",
      keyPoints: [
        "UX (Don Norman) means human-centred design across the whole experience, not just the screen.",
        "The Perfect UX: research, concepts and building the experience, inside a design-develop-deploy cycle, with R&D, QA and measurement where they overlap.",
        "UX sits where customer needs, business needs and feasibility meet.",
        "UX is everyone’s job, spanning copy, information, sound, motion, graphic, interface and interaction design, and code.",
        "The whole experience is the product: Uber made an opaque taxi market almost frictionless; a great website can’t save a terrible flight."
      ],
      why: "For PMT, the user experience runs from the ad to the booking page to the reminder text to the range at 7:30 a.m. to the follow-up. One friction point (a confusing gear list, no parking information) can undo a great ad.",
      example: {
        title: "PMT’s experience, step by step (an Uber-style friction hunt)",
        before: "Today: click the ad → homepage → hunt for dates → a 6-field form → a generic confirmation email → arrive unsure what to wear, where to park or whether to bring water.",
        after: "Ad → a page with dates and seats left at the top → a 3-field booking form → a confirmation text with a 45-second ‘What to wear and bring’ video, a map pin to the range gate, and the instructor’s name and photo → a reminder the night before with the weather → a post-class text with a photo and the next step.",
        body: "Like Uber showing fare and wait time, each step answers what a nervous beginner wants to know at that exact moment. Nothing in the ad changed; the experience did, and that is what people talk about in reviews."
      },
      practice: [
        {
          prompt: "Dissect it: ‘UX is everyone’s job’.",
          fields: [
            "In your own words, what did Don Norman originally mean by user experience?",
            "Using the airline example, describe a local business with a great website but a bad user experience.",
            "Where do customer needs, business needs and feasibility clash for PMT or a client?"
          ]
        },
        {
          prompt: "Apply it: Recreate the Uber move for PMT or a ZDub prospect: find the information customers most want while they wait or decide, and design it into every step.",
          fields: ["The opaque or frustrating part of the category", "The two things customers most want to know (like fare and wait time)", "Where in the journey they’ll see them", "What friction you’ll remove", "How you’ll measure it"],
          rubric: [
            "Names a real frustration in the category (opaque pricing, uncertain timing)",
            "Surfaces what people want to know at the moment they want it",
            "Removes at least one step of friction",
            "Covers the whole experience, not just the screen"
          ],
          model: "Category frustration (HVAC repair): no idea when the technician will arrive or what it will cost.\nWhat they want: the arrival window and a price range.\nWhere: the booking page shows ‘Next available: today, 2–4 pm’ and ‘Diagnostic $89, credited to the repair’; the SMS confirmation shows the technician’s photo; an ‘On my way, 18 minutes’ text with a live link.\nFriction removed: phone tag (online booking) and surprise fees (price range up front).\nMeasure: booking conversion rate, no-show rate, and reviews mentioning ‘on time’ and ‘upfront’."
        }
      ],
      today: { task: "Book (or walk through booking) PMT’s class or a client’s service as a customer on your phone. Screenshot every step and note each moment of confusion.", output: "A step-by-step screenshot list with friction points circled and one fix for each.", minutes: 20 },
      check: [
        { q: "What did Don Norman mean by UX?", a: "Human-centred design covering every aspect of a person’s experience with a system: industrial design, graphics, interface, physical interaction and the manual." },
        { q: "Where does the UX designer sit, according to the Perfect UX chart?", a: "At the intersection of customer needs, business needs and feasibility; the chart’s circles are research, creative concepts and building the experience, inside a design-develop-deploy cycle." },
        { q: "Why is Uber cited as great UX?", a: "Because of the whole experience, not just the app: clear fare and wait time plus a better distribution of cars and drivers turned an opaque taxi market into an almost frictionless one." }
      ],
      examples: [
        {
          id: "og-ex-uber-frictionless-ride",
          title: "Uber: the almost frictionless ride",
          brand: "Uber", agency: "", year: "",
          format: "App / digital product",
          pdfPage: 265,
          what: "Discussed in the text, not pictured. Uber’s app tells waiting travellers what they care about most, the fare and how long until the car arrives, and connects that to a smarter way of deploying cars and drivers. Together they turned the opaque, frustrating taxi market into an experience that feels almost frictionless.",
          idea: "Design the whole service around the two questions a waiting customer is anxious about: how much, and how long.",
          elements: [
            { n: 1, name: "Answer the anxious questions", detail: "Fare and wait time shown clearly, up front.", principle: "Customer needs at the centre of UX" },
            { n: 2, name: "Redesign behind the screen", detail: "Cars and drivers (capital and labour) deployed more efficiently and in a more customer-friendly way.", principle: "Business needs and feasibility meet customer needs" },
            { n: 3, name: "An elegant app", detail: "A simple interface, but not the whole story.", principle: "Interface design is only one of UX’s disciplines" },
            { n: 4, name: "Whole-experience thinking", detail: "From request to arrival to drop-off, the total experience is designed.", principle: "The UX designer enhances every interaction between brand and customer" }
          ],
          beats: [
            { n: 1, label: "Open the app: see the fare and the wait before committing" },
            { n: 2, label: "Request: a nearby driver is matched" },
            { n: 4, label: "Wait: watch the car approach instead of wondering" },
            { n: 4, label: "Ride and arrive without haggling or fumbling" },
            { n: 3, label: "The opaque taxi experience becomes almost frictionless" }
          ],
          recreate: {
            brief: "Find the two things your customers are anxious about while they wait or decide, show them clearly at every step, and fix the operations behind them.",
            fields: [
              { id: "frustration", label: "The category’s opaque, frustrating part", hint: "Unknown price, unknown timing, unknown process" },
              { id: "twoq", label: "The two anxious questions", hint: "PMT: ‘Will I be the worst one there?’ and ‘What do I bring?’" },
              { id: "show", label: "Where you answer them", hint: "Ad, booking page, confirmation, reminder" },
              { id: "ops", label: "The operational fix behind it", hint: "Scheduling, staffing, automation" },
              { id: "measure", label: "How you’ll know it worked", hint: "Conversion, no-shows, review mentions" }
            ],
            steps: [
              "Read 30 reviews and 30 DMs or call notes; list the questions people ask before and after booking.",
              "Pick the two that cause the most hesitation.",
              "Answer them visibly at each step: ad copy, top of the booking page, confirmation text, reminder.",
              "Fix whatever behind the scenes makes the answer unreliable (e.g. automate the reminder).",
              "Make the confirmation and reminder texts in your CRM, with a short iPhone video answering both questions.",
              "Track conversion and no-show rates before and after for one month."
            ]
          }
        }
      ]
    },
    {
      id: "og-11c",
      part: "p4",
      chapter: 11,
      chapterTitle: "Creative Technology: The Sweet Spot · The Back End",
      pages: "265–269",
      title: "The Back End: the 20% problem is about alignment, not software",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 11 · The Back End, the 20% problem, How (not) to make marketing automation work · PDF pp. 265–269", who: "Miles Young" }],
      quotes: [
        { text: "The point is not about technology; it’s about internal alignment.", page: "267" },
        { text: "A simple request leads to a simple execution, which leads to limited insights.", page: "267" }
      ],
      idea: "The **back end** is what makes anything happen, and it’s where companies and agencies feel most disappointed. First comes the fear: marketing technology is exploding (in the US alone the number of vendors doubled between 2014 and 2015), and Scott Brinker’s famous martech landscape chart is almost unreadable. Every vendor has a pitch, usually a slick ‘flash’ demo built to run smoothly in controlled conditions on simple platforms. It all looks easy. It isn’t.\n\nThen comes what Peter de Luca, head of Ogilvy’s marketing technology practice, calls **‘the 20% problem’**: ask a company what percentage of its marketing technology’s functionality it actually uses, and the answer is usually about 20 per cent. The cause is **structural**. Nothing was set up to support the licence when it was bought, or there are gaps between the groups that should benefit from it. Disappointed clients often switch vendors in search of features they already own, and stay disappointed. **The point isn’t the technology; it’s internal alignment.**\n\nThree teams have to line up:\n\n- **Marketing**: the planners and strategists who design campaigns against business objectives.\n- **Operations**: the execution team working the platforms or managing the vendors who do the heavy lifting.\n- **Analytics**: the people who work the data, find insights and report on campaigns.\n\nDe Luca draws it as two loops. **The vicious loop**: marketing sends a simple ad-hoc request with no real targeting, test plan or cross-channel strategy (often because it doesn’t know what data or features exist); operations uses only basic functions (one audience, one simple email); analytics gets little data and returns basic reports. Simple request, simple execution, limited insight, around and around: the 20% problem. **The virtuous loop**: marketing thinks strategically, knows what data exists and designs richer, more personalized cross-channel campaigns; that pushes operations to use more of the platform and smarter business rules; analytics then has more data and more tests, finds real insights and feeds dashboards back that inspire marketing. A positive loop that keeps going.\n\nWhen it’s aligned, the brand’s technology investment matches the relationship it wants with customers, and great things happen. **Jägermeister** and **Shazam** turned every bottle, sign and shelf wobbler in the aisle into a portal: shoppers snapped the stag logo and unlocked custom cocktails, playlists and backstage access to the electronic-dance-music scene. The shopper did one simple thing; Shazam and the back end did the rest.\n\nThe caption on Brinker’s chart carries the Ogilvy reminder: technology only sings with the skills and structures to support it, and never forget the big idea.",
      keyPoints: [
        "Martech is booming and vendors sell easy demos; real use is hard.",
        "The 20% problem: most companies use about a fifth of what their marketing technology can do.",
        "The cause is structural: marketing, operations and analytics aren’t aligned.",
        "Vicious loop: simple request → simple execution → few insights. Virtuous loop: strategic request → savvier execution → richer insights → better requests.",
        "Switching vendors won’t fix an alignment problem, and never forget the big idea."
      ],
      why: "Local clients pay for CRMs, booking tools and ad platforms they barely use. ZDub can win by getting more out of the stack they already have (automations, segments, tests) instead of selling them another tool.",
      example: {
        title: "A gym using 20% of its CRM",
        before: "The gym pays for a CRM with automations, segments, SMS and pipelines. Actual use: one ‘Welcome!’ email and a monthly blast to everyone. Owner: “This software doesn’t work. Let’s switch.”",
        after: "Marketing (Zach): a plan with three segments (trial no-shows, members at day 60, lapsed members) and a test (SMS vs. email). Operations (front desk plus automation): three workflows built in the existing CRM. Analytics (weekly): show rate, 60-day retention and win-back rate on one dashboard, reviewed every Monday to choose the next test.",
        body: "Same software, different alignment. A strategic request forces fuller use of the tool, which produces data worth analysing, which inspires the next request: de Luca’s virtuous loop, with no vendor switch."
      },
      practice: [
        {
          prompt: "Dissect it: ‘The point is not about technology; it’s about internal alignment.’",
          fields: [
            "In your own words, explain the vicious loop and the virtuous loop.",
            "Which tool in ZDub’s or PMT’s stack is stuck at ‘20%’, and what’s the structural reason?",
            "Argue the other side: when IS switching software the right fix?"
          ]
        },
        {
          prompt: "Apply it: Recreate the Jägermeister × Shazam pattern for PMT or a ZDub client: turn a physical object people already touch into a portal to something they value, with one simple action and an automated back end.",
          fields: ["The physical object (bottle, sign, receipt, bike, truck wrap)", "The one action (scan a QR, snap a photo, text a keyword)", "What it unlocks (the social-capital reward)", "The back-end flow (what happens automatically)", "Who handles marketing, operations and analytics"],
          rubric: [
            "Uses something customers already see or handle",
            "One simple action, with the back end doing the rest",
            "The reward is something the audience genuinely values (access, status, fun), not just a coupon",
            "Assigns marketing, operations and analytics roles and a measure"
          ],
          model: "Object: tank stickers on PMT’s training bikes and the banner on the range fence.\nAction: scan the QR (“Scan the tank”).\nUnlocks: a slow-motion clip of your own first figure-eight (staff film each student and drop the clips in a shared folder), a ‘First Ride’ playlist, and a ‘New Rider’ IG story frame.\nBack end: QR → landing page → enter phone number → automated SMS with your clip on graduation day, then a gift-a-class offer for friends three days later.\nRoles: marketing = Zach (idea and offer); operations = instructors (filming) plus the automation; analytics = weekly scans, clip views and gift classes sold."
        }
      ],
      today: { task: "List every marketing tool PMT (or one client) pays for. Next to each, estimate the percentage of features actually used and name one unused feature that would help this month.", output: "A tool list with %-used and one feature to switch on this week.", minutes: 20 },
      check: [
        { q: "What is Peter de Luca’s ‘20% problem’?", a: "Companies typically use only about 20% of their marketing technology’s functionality." },
        { q: "Which three teams must be aligned to fix it?", a: "Marketing (planning and strategy), Operations (campaign execution) and Analytics (data, insights and reporting)." },
        { q: "How did Jägermeister’s ‘Shazam the Stag’ work?", a: "Shoppers snapped the stag on bottles, signs or shelf wobblers with Shazam and unlocked custom cocktails, playlists and backstage EDM access; Shazam and the back-end technology did the rest." }
      ],
      examples: [
        {
          id: "og-ex-jagermeister-shazam-stag",
          title: "Jägermeister: Shazam the Stag",
          brand: "Jägermeister", agency: "", year: "",
          format: "Integrated campaign",
          pdfPage: 269,
          what: "A hand holds a phone up to a Jägermeister bottle whose neck tag reads ‘Reach for the Darkness · Shazam the Stag’. Beside it, a row of phone screens tells the story: an age gate (‘Please enter your birthdate to continue’), a ‘The Darkness welcomes you’ sign-up, then screens like ‘Don’t fear the darkness’, ‘Keep it up’ and ‘You’re the master of darkness’, each with recipes, Trick/Treat buttons and playlists to unlock.",
          idea: "Turn every bottle and shelf in the store into a doorway to the nightlife experiences young drinkers crave, unlocked by one snap.",
          elements: [
            { n: 1, name: "Audience insight", detail: "Millennials crave moments that create social capital, like insider access to the EDM scene.", principle: "Start with the customer, not the technology" },
            { n: 2, name: "One simple action", detail: "Snap the stag with Shazam; beyond an age check, there’s nothing to type or learn.", principle: "Good UX: the back end does the work" },
            { n: 3, name: "Every touchpoint is a portal", detail: "Bottles, signs and shelf wobblers in the shopping aisle all trigger the experience.", principle: "Owned media working as a connection point" },
            { n: 4, name: "Rewards worth having", detail: "Custom cocktails, bespoke playlists and backstage access, unlocked step by step.", principle: "An engagement idea invites the customer to take a role" },
            { n: 5, name: "Automated back end", detail: "A multi-pronged, automated campaign: recognition, age gate, content and data all handled behind the scenes.", principle: "When the back end is aligned, great things happen" }
          ],
          beats: [
            { n: 3, label: "In the aisle: a shopper sees ‘Shazam the Stag’ on a bottle, sign or shelf wobbler" },
            { n: 2, label: "Snap: they point Shazam at the stag logo" },
            { n: 5, label: "Age gate, then the ‘The Darkness welcomes you’ sign-up" },
            { n: 4, label: "Unlock: custom cocktail recipes, playlists and behind-the-scenes EDM access" },
            { n: 4, label: "Progress through the challenge screens to ‘master of darkness’" }
          ],
          recreate: {
            brief: "Put one simple trigger on something customers already handle, and wire it to a reward they’ll want to show off.",
            fields: [
              { id: "object", label: "The physical trigger", hint: "Packaging, signage, receipts, vehicles" },
              { id: "action", label: "The one action", hint: "Scan a QR, text a keyword, snap a photo" },
              { id: "reward", label: "The social-capital reward", hint: "Access, a clip of themselves, insider content" },
              { id: "flow", label: "The automated flow", hint: "Landing page → form → SMS or email" },
              { id: "measure", label: "What you’ll measure", hint: "Scans, sign-ups, purchases" }
            ],
            steps: [
              "Pick the object customers handle most (for PMT: the bikes, helmets, the range banner, gift-card envelopes).",
              "Design the trigger in Canva: a bold instruction (‘Scan the tank’) plus a QR code.",
              "Build a simple mobile landing page and form (your CRM or a page builder).",
              "Automate the reward by SMS or email, with a follow-up offer two days later.",
              "Brief the staff (operations) and set up a weekly scans and sign-ups report (analytics).",
              "Test with one class or one location before rolling it out."
            ]
          }
        }
      ]
    },
    {
      id: "og-11d",
      part: "p4",
      chapter: 11,
      chapterTitle: "Creative Technology: The Sweet Spot · A Frontier How Far? (VR and AR)",
      pages: "269–276",
      title: "A Frontier How Far?: VR and AR earn their keep where demonstration matters",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 11 · A Frontier How Far?, Cameras, Headsets and Haptics · PDF pp. 269–276", who: "Miles Young" }],
      quotes: [
        { text: "The front end has not caught up with the back end – and it could be rather a long time before it does.", page: "271" },
        { text: "The case for the “metaverse” sweeping all ahead of it is not yet proven.", page: "272" }
      ],
      idea: "At the time of writing, the loudest wave of hype was **virtual and augmented reality**. Young defines them carefully, because people use the terms interchangeably and wrongly:\n\n- **VR**: the experience takes place in an entirely virtual environment, simulating physical presence.\n- **AR**: the experience takes place in the live, physical world, with digital assets added on top.\n- **Mixed reality**: the grey zone between them.\n\nPopular attention fixates on the delivery device, but the progress has come from the **back end**, a chain of advances: **capture** (seeing things ‘in the round’; 360-degree camera rigs went from custom-built arrays to prosumer kit), then **process**, then **display**, which lags badly. Your choice is a flimsy cardboard viewer for your phone or a heavy, expensive headset wired to a gaming PC. Chips must be shrunk, cooled and made less power-hungry until they fit into something like stylish glasses with lifelike speed and resolution. And then there’s **haptics**, touch feedback that lets you handle virtual objects (he has seen people flinch after dropping a virtual hammer on an imaginary hand); mass-market haptics is ‘pie in the sky’ for now. The front end hasn’t caught up with the back end.\n\nHe adds a rational scepticism. We assume these technologies are benign, but if the physical and digital worlds become indistinguishable, will we communicate better or worse, live more or less? Nobody knows yet, and the case for a ‘metaverse’ sweeping all before it is unproven.\n\nStill, he isn’t ‘down’ on VR and AR. They will move from hard-core gamers into advertising, offering three things:\n\n1. **Perspective**: hyper-immersion, like travelling inside the movement of a Rolex or Piaget instead of squinting at a 2D cutaway.\n2. **Context**: meaning through explanation, like a new food processor that coaches you, Martha Stewart-style, to a mayonnaise that never curdles.\n3. **Intensity**: emotive work intensified a hundredfold; ‘anthemic reality’ will make ordinary corporate anthems look pale.\n\nHis forecast: the practical uses will be mostly **educational** (a guided walk round the Alamo, yes; a commute full of pop-up context, no). Their power to **demonstrate** may make them as much a **B2B** tool (choosing a vehicle fleet or an architect) as a consumer one, and in consumer goods anything that benefits from demonstration selects itself: luxury craftsmanship, personal-care efficacy, SUV performance, resort design.\n\nThe chapter’s examples fit the rule. **Toothbrush Games** uses AR to turn two minutes of brushing into a game that only runs when the phone’s microphone hears brushing. **Jim Beam’s Devil’s Cut** VR experience takes you inside the bottle to show how the bourbon is made, a difference you can’t see from outside.",
      keyPoints: [
        "VR = a fully virtual world; AR = a digital layer on the real world; mixed reality sits in between.",
        "The back end (capture, process) has raced ahead; display and haptics lag. The front end hasn’t caught up.",
        "Keep a rational scepticism: the metaverse case isn’t proven.",
        "VR and AR offer advertising perspective, context and intensity.",
        "Best uses: education and demonstration, including B2B; anything that needs demonstrating selects itself."
      ],
      why: "PMT sells something people are nervous to try. A 360° ride-along or a simple AR moment is a cheap way to let someone feel the experience before they commit, exactly where Young says these tools earn their keep.",
      example: {
        title: "A 360° ‘first ride’ demo for PMT",
        before: "Ad: “Learn to ride in a safe, supportive environment. Expert instructors. Book now!”",
        after: "A 360° video shot from a student’s helmet height on the range: the instructor waving you forward, the cones, the first slow roll. Ad copy: “Drag the video and look around. This is what your first ten minutes on a motorcycle feel like. (Calmer than you think.)”",
        body: "Perspective (you’re in the seat), context (the instructor explains each step) and intensity (that nervous-excited feeling), for the price of one rented 360° camera. It demonstrates what words can’t, which is exactly where Young expects VR and AR to pay off."
      },
      practice: [
        {
          prompt: "Dissect it: Young’s cautious optimism about VR and AR.",
          fields: [
            "In your own words, what’s the difference between VR, AR and mixed reality?",
            "Why does he say the front end hasn’t caught up with the back end?",
            "Argue the other side: where have VR and AR gone mainstream since 2017, and does that prove him right or wrong?"
          ]
        },
        {
          prompt: "Apply it: Recreate the Toothbrush Games pattern for PMT or a ZDub client: turn a chore or a fear into a short game or AR moment that only progresses when the person actually does the right thing.",
          fields: ["The chore or fear", "The game or AR layer (role, enemy, timer, score)", "The ‘only works if’ check (like the microphone hearing brushing)", "How long it lasts", "How it ties back to the business"],
          rubric: [
            "Targets a real chore or fear the customer has",
            "The game only progresses when the person performs the real behaviour",
            "Short and simple enough to build with available tools (a TikTok effect, a simple web page, or even a printed card)",
            "A clear link back to a business result"
          ],
          model: "Fear: beginners dread stalling the bike in front of everyone.\nGame: ‘Friction Zone Hero’, a two-minute home drill before class: sit on a chair with the phone propped up and slowly ‘release the clutch’ with your left hand in time with a beat, while a cartoon bike inches forward on screen.\nOnly works if: the hand movement is slow and steady (camera-tracked in a fancier build; in the simple build, the instructor checks the rhythm on day one).\nLength: two minutes, sent in the booking confirmation.\nTie-back: finishers get a ‘Ready to Roll’ badge and story frame tagging PMT; we watch whether finishers show up more reliably and feel calmer on day one."
        }
      ],
      today: { task: "Find two AR or 360° examples from local businesses or creators (TikTok effects, 360° YouTube videos, virtual tours) and note what each demonstrates that a photo couldn’t.", output: "Two examples labelled with perspective, context or intensity, plus one idea for PMT.", minutes: 15 },
      check: [
        { q: "Define VR, AR and mixed reality.", a: "VR: an entirely virtual environment that simulates presence. AR: digital assets added to the live physical world. Mixed reality: the grey zone between them." },
        { q: "What three things does Young say VR and AR offer advertising?", a: "Perspective, context and intensity." },
        { q: "What makes Toothbrush Games clever?", a: "It turns two minutes of brushing into an AR game with live video and characters, and it only works when the phone’s microphone hears brushing." }
      ],
      examples: [
        {
          id: "og-ex-toothbrush-games-ar",
          title: "Toothbrush Games: brushing as an AR firefight",
          brand: "Toothbrush Games", agency: "", year: "",
          format: "App / digital product",
          pdfPage: 270,
          what: "A phone screen shows live video of a grinning boy brushing his teeth. The app has put a red firefighter’s helmet with a tooth badge on his head; his toothbrush seems to shoot a jet of water at a cartoon flame monster on the left, while a cartoon elephant firefighter helps on the right. A countdown dial sits top left and a pause button top right, all inside a hand-drawn red frame.",
          idea: "Make the boring two minutes of brushing the controller for a game, and only let the game run when the child is really brushing.",
          elements: [
            { n: 1, name: "Live mirror video", detail: "The child sees himself on screen, so he is the hero of the game.", principle: "AR: a digital layer on the real world" },
            { n: 2, name: "Costume overlay", detail: "The tooth-badge firefighter helmet turns the child into a character.", principle: "Invite the customer to take a role" },
            { n: 3, name: "An enemy to defeat", detail: "The flame monster is put out by the brushing ‘hose’: the chore becomes the weapon.", principle: "Turn a chore into a challenge" },
            { n: 4, name: "Two-minute timer", detail: "The game lasts exactly as long as the recommended brushing time.", principle: "The game serves the real goal" },
            { n: 5, name: "Microphone check", detail: "It only works when the phone hears the sound of brushing, so it can’t be faked.", principle: "The stroke of genius: technology enforcing the right behaviour" }
          ],
          layout: { aspect: "4:3", boxes: [
            { n: 4, label: "Countdown dial", x: 2, y: 2, w: 16, h: 20 },
            { n: 2, label: "Firefighter helmet overlay", x: 30, y: 8, w: 42, h: 22 },
            { n: 1, label: "Child brushing (live video)", x: 30, y: 28, w: 42, h: 70 },
            { n: 3, label: "Flame monster + water jet", x: 0, y: 55, w: 45, h: 25 },
            { n: 3, label: "Elephant firefighter", x: 72, y: 62, w: 20, h: 36 },
            { n: 5, label: "Pause / mic listening", x: 86, y: 2, w: 12, h: 14 }
          ] },
          recreate: {
            brief: "Turn the dull or scary part of your service into a short game with a role, an enemy and a timer, which only advances when the real behaviour happens.",
            fields: [
              { id: "chore", label: "The chore or fear", hint: "What do customers avoid or dread?" },
              { id: "role", label: "The role they play", hint: "Firefighter, test pilot, racer" },
              { id: "enemy", label: "The enemy", hint: "What do they defeat by doing the behaviour?" },
              { id: "timer", label: "The time box", hint: "Match the real recommended time" },
              { id: "check", label: "The ‘only works if’ check", hint: "Sound, camera, or a code from staff" }
            ],
            steps: [
              "Write down the chore and the ideal behaviour (how long, how often).",
              "Sketch a one-screen game: the player’s costume, the enemy, the timer.",
              "Prototype it cheaply: a TikTok effect, a simple web page, or a printable chart with a staff-verified sticker.",
              "Add the ‘only works if’ check (a code, a photo, a sound) so it can’t be faked.",
              "Send it at the right moment (after booking, or after the service).",
              "Measure completion and the business result (show rate, repeat visits)."
            ]
          }
        },
        {
          id: "og-ex-jim-beam-devils-cut-vr",
          title: "Jim Beam Devil’s Cut: inside the bottle in VR",
          brand: "Jim Beam", agency: "Bottle Rocket", year: "",
          format: "Experiential",
          pdfPage: 271,
          what: "The image looks into the back of a VR headset: through the two lenses you see an amber-lit, barrel-like interior with the Devil’s Cut label. The experience takes you on the journey bourbon makes to become The Devil’s Cut, a difference you can’t see from outside the bottle, by putting you right inside it. (The caption is at the top of p. 272.)",
          idea: "When the product’s difference is invisible because it lies in how it’s made, use VR to take people inside the process.",
          elements: [
            { n: 1, name: "An invisible difference", detail: "You can’t see what makes Devil’s Cut different from the outside; you have to know how it’s made.", principle: "Find the product truth worth demonstrating" },
            { n: 2, name: "An impossible point of view", detail: "Only in VR can you get right inside the bottle.", principle: "Perspective: hyper-immersion" },
            { n: 3, name: "The journey as story", detail: "The experience dramatizes the bourbon’s path step by step.", principle: "Context: meaning through explanation" },
            { n: 4, name: "The headset as a stage", detail: "A demonstration people physically step into.", principle: "Intensity: experience over description" }
          ],
          beats: [
            { n: 4, label: "Put on the headset" },
            { n: 2, label: "Enter the bottle: an impossible point of view" },
            { n: 3, label: "Follow the bourbon’s journey to becoming The Devil’s Cut" },
            { n: 1, label: "Come out understanding what makes this bourbon different" }
          ],
          recreate: {
            brief: "Take customers inside the part of your process they never see, from a point of view they couldn’t normally have.",
            fields: [
              { id: "hidden", label: "The hidden process", hint: "PMT: what the instructor watches for on the range; a detailer: paint correction up close" },
              { id: "pov", label: "The impossible point of view", hint: "Inside, overhead, slow motion, macro, helmet-cam" },
              { id: "steps", label: "3–5 journey steps", hint: "What happens, in order" },
              { id: "truth", label: "The difference they’ll understand", hint: "One sentence" },
              { id: "format", label: "Format", hint: "360° video, POV GoPro, macro Reel" }
            ],
            steps: [
              "Name the one thing that makes you better but can’t be seen.",
              "Choose a point of view that reveals it (360° camera, helmet-mounted GoPro, macro lens).",
              "Shoot the process in 3–5 steps on iPhone or GoPro.",
              "Edit a 30–60 second POV Reel in CapCut with a short caption for each step (or upload the 360° version to YouTube).",
              "End on the difference in one line, plus the CTA.",
              "Run it as an ad to people who visited your pricing or booking page."
            ]
          }
        }
      ]
    },
    {
      id: "og-11e",
      part: "p4",
      chapter: 11,
      chapterTitle: "Creative Technology: The Sweet Spot · Dash, Pokémon Go and the Fad Curve",
      pages: "276–280",
      title: "Just Techniques: connected things, Pokémon Go and the fad curve",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 11 · Amazon Dash, Pokémon Go, the Internet of Things, Where Did All the Pokémon Go? · PDF pp. 276–280", who: "Miles Young" }],
      quotes: [
        { text: "At the end of the day these are just techniques.", page: "277" },
        { text: "They will only be as interesting, engaging and long lasting as the ideas that animate them – and the brands which pay for them.", page: "277" }
      ],
      idea: "Young widens the lens to connected things. **Amazon’s Dash Button** is a tiny, single-purpose Wi-Fi gadget printed with one brand (the page shows Energizer, Gatorade, Honest Kids, Huggies, Starbucks Doubleshot and Trojan). Set it up once on your phone, stick it where you run out, and one press reorders that product to your door. It doesn’t just connect the Internet of Things; it connects the internet **to brands**.\n\n**Pokémon Go** seemed to open an era of augmented reality, with thousands of fans running around cities hunting computer-generated creatures. Young admits he’ll never go Pokémon hunting, but he’d love an AR history tour of London or Beijing; AR will spread into travel, education and medicine, connecting us to past, present and future. As the **Internet of Things** grows, VR and AR may merge with trackers, smartwatches and other connected devices, blurring the lines between advertising, product development and marketing.\n\nThen the bugle call of warning: **these are just techniques**. They will only be as interesting, engaging and lasting as the **ideas** that animate them, and the brands that pay for them. It’s David Ogilvy’s big idea, restated for the gadget age.\n\nThe Pokémon Go box shows both the power and the fade:\n\n- Niantic’s side project, born as an experiment with Google’s Maps and Earth teams, launched on **6 July 2016** and made AR mainstream.\n- **Three reasons for the hype**: a franchise loved since the late 1990s; an inherently viral mechanic (players chasing invisible monsters in public became walking adverts that made bystanders curious); and the **app-store effect** (chart success feeds downloads).\n- The numbers: 7.2 million downloads in week one (Angry Birds 2 managed 2.2 million), over 500 million in about a year, $600 million revenue in 90 days, 5.4 billion miles walked, 43 minutes a day in the app, and a record month for Apple’s App Store.\n- Then the **fad curve**: a peak of 28.5 million daily users within weeks (a Central Park crowd chasing a rare Pokémon barely noticed Justin Bieber), then a slide to about 5 million by the end of summer, the same arc as Candy Crush and the ALS Ice Bucket Challenge.\n- Yet those 5 million highly active users still produced **$1.7 billion**. A hype spike fades to the natural level of truly interested people, and that’s where the value is.\n\nThe last image is a nice irony: even this most digital of brands bought plain, un-augmented **posters** on the London Underground to promote new features and shore up its numbers.",
      keyPoints: [
        "Amazon Dash connected the internet to brands: one press, one product, reordered.",
        "AR and connected devices will spread into travel, education and medicine and blur advertising with product development.",
        "They’re just techniques: only as good as the ideas that animate them (Ogilvy’s big idea is still in charge).",
        "Pokémon Go’s hype had three engines: a loved franchise, viral real-world play, and the app-store effect.",
        "The fad curve: hype peaks, then settles to the truly interested, who can still be hugely valuable ($1.7bn from about 5 million users)."
      ],
      why: "When a Reel or promo spikes and then drops, that isn’t failure; it’s the fad curve finding PMT’s real audience. Plan the follow-up for the people who stay, and judge any shiny tactic by the idea behind it, not the tech.",
      example: {
        title: "A ‘Dash Button’ for a local service: one-reply rebooking",
        before: "Lawn-care client: “Customers forget to rebook, so we send a newsletter every month.”",
        after: "After each visit the customer gets a text: “Reply 1 to book the same service in 4 weeks, same day and time.” One reply and it’s booked, with the confirmation and reminder automated. A fridge magnet with a QR code does the same for people who prefer scanning.",
        body: "Like Dash, it removes every step between ‘I need that again’ and ‘ordered’. The technique is trivial (an SMS keyword, a QR code); the idea (rebook in one action at the moment of need) is what makes it work."
      },
      practice: [
        {
          prompt: "Dissect it: ‘At the end of the day these are just techniques.’",
          fields: [
            "In your own words, what made Pokémon Go explode, and why did it then shrink?",
            "Why does the 5-million-user plateau still count as a success?",
            "Which current ‘hot tech’ (AI avatars, AR filters, smart glasses) is a technique still looking for an idea for local businesses?"
          ]
        },
        {
          prompt: "Apply it: Recreate the Pokémon GO London poster for PMT: a headline that twists a famous local saying with a surprising specific number, a place everyone recognizes, and one clear action.",
          fields: ["The local saying to twist (like ‘streets paved with gold’)", "The specific number (verified)", "The local place in the image", "The brand lockup", "The action (badge, button or QR)"],
          rubric: [
            "Twists a familiar local saying or nickname",
            "Uses a specific, surprising and true number",
            "Shows a place the audience instantly recognizes",
            "A clear brand lockup and one action"
          ],
          model: "Saying: Sacramento’s nickname, ‘the City of Trees’.\nHeadline: “The City of Trees has [X] miles of roads. You’ve only ever seen them through a windshield.” (Fill in X from a verified city figure before running.)\nPlace: Tower Bridge at golden hour with a rider crossing.\nLockup: PMT logo bottom left with ‘RIDE SACRAMENTO’ on an orange band.\nAction: a ‘See class dates’ button and a QR code."
        }
      ],
      today: { task: "Pull the last 90 days of PMT’s (or a client’s) Instagram or ad results and find one spike. Chart what happened after it.", output: "One sentence describing the spike, the plateau, and what the truly interested people did next.", minutes: 15 },
      check: [
        { q: "What three factors drove Pokémon Go’s hype?", a: "An already powerful franchise, an inherently viral platform (players became real-world adverts), and the app-store effect." },
        { q: "What happened to Pokémon Go’s users after the peak, and why does it matter?", a: "Daily users fell from 28.5 million to about 5 million (the fad curve), but that engaged base still generated $1.7 billion." },
        { q: "What does the Amazon Dash Button connect?", a: "Not just the Internet of Things but the internet to brands: one press reorders a specific branded product." }
      ],
      examples: [
        {
          id: "og-ex-amazon-dash-button",
          title: "Amazon Dash Button",
          brand: "Amazon", agency: "", year: "",
          format: "App / digital product",
          pdfPage: 276,
          what: "Six small plastic buttons, each a pill-shaped block with one brand’s logo filling most of its face and a single round button at one end: Energizer (with the bunny), Gatorade, Honest Kids, Huggies, Starbucks Doubleshot and Trojan. Configure it once on your phone, put it where you use the product, press it, and Amazon ships a refill to your door. (Caption continues on p. 277.)",
          idea: "Shrink reordering to one physical press, placed exactly where the need appears, with one brand owning the button.",
          elements: [
            { n: 1, name: "One brand per button", detail: "The logo covers the face, so the brand lives in your laundry room or pantry.", principle: "Brand name prominent and owned" },
            { n: 2, name: "A single function", detail: "One button, one product, one action: reorder.", principle: "Remove friction: good UX" },
            { n: 3, name: "Placed at the moment of need", detail: "Stuck by the washing machine or dishwasher, where you notice you’ve run out.", principle: "Precision: the right time and place" },
            { n: 4, name: "Set up once on mobile", detail: "Configured through the phone app; after that, no screen is needed.", principle: "The back end does the work" },
            { n: 5, name: "Connected to commerce", detail: "Wi-Fi to Amazon to your door: the Internet of Things connected to brands.", principle: "Connecting the internet with brands" }
          ],
          layout: { aspect: "5:2", boxes: [
            { n: 1, label: "Brand logo panel", x: 4, y: 12, w: 58, h: 74 },
            { n: 2, label: "Single round button", x: 66, y: 10, w: 28, h: 70 },
            { n: 5, label: "Wi-Fi inside, no screen", x: 4, y: 88, w: 90, h: 10 }
          ] },
          recreate: {
            brief: "Reduce your repeat purchase to one action, placed where the need appears.",
            fields: [
              { id: "repeat", label: "The repeat purchase", hint: "Next service, refill, rebooking, advanced class" },
              { id: "moment", label: "The moment of need", hint: "When and where do they realise they need it?" },
              { id: "trigger", label: "The one action", hint: "Reply ‘1’, scan a QR magnet, tap a saved link" },
              { id: "object", label: "The physical reminder", hint: "Magnet, sticker, a card for the glovebox" },
              { id: "backend", label: "What happens automatically", hint: "Booking, confirmation, reminder" }
            ],
            steps: [
              "Identify the repeat purchase and when customers typically need it.",
              "Set up the one-action trigger: an SMS keyword reply, or a QR code to a pre-filled booking page.",
              "Design a branded physical reminder in Canva (magnet, sticker or card) with the QR code.",
              "Automate the confirmation and reminder texts in your CRM.",
              "Hand it out at the end of every service or class.",
              "Track rebookings from the trigger each month."
            ]
          }
        },
        {
          id: "og-ex-pokemon-go-launch",
          title: "Pokémon Go (Niantic)",
          brand: "Pokémon Go / Niantic", agency: "", year: "2016",
          format: "App / digital product",
          pdfPage: 278,
          what: "A hand holds a phone up on a suburban street; on screen, a rock-snake Pokémon (Onix) sits on the real pavement as seen through the camera, with a Poké Ball ready to throw, beside the bright yellow-and-blue Pokémon GO logo. Below it, three big stats: $600 million revenue in 90 days, 5.4 billion miles walked by players, 43 minutes a day in the app. The comScore chart on p. 279 shows the spike and slide.",
          idea: "Layer a beloved franchise onto real streets so that playing the game is itself public, contagious advertising.",
          elements: [
            { n: 1, name: "A beloved franchise", detail: "Pokémon had been popular since the late 1990s: instant recognition and nostalgia.", principle: "Build on existing brand love" },
            { n: 2, name: "AR on real streets", detail: "Creatures appear in the camera view of your actual neighbourhood.", principle: "AR: digital assets on the live physical world" },
            { n: 3, name: "Players as walking ads", detail: "Crowds chasing invisible monsters made bystanders curious enough to download.", principle: "An inherently viral mechanic" },
            { n: 4, name: "The app-store effect", detail: "Chart-topping downloads fed more downloads: 7.2 million in week one.", principle: "Momentum compounds" },
            { n: 5, name: "Free, with in-app purchases", detail: "No barrier to start; the money comes from engaged players.", principle: "The value is in the truly interested users" }
          ],
          beats: [
            { n: 1, label: "6 July 2016: launch; an experiment with Google Maps and Earth becomes a global craze" },
            { n: 3, label: "Players flood parks and streets; bystanders ask what’s going on" },
            { n: 4, label: "Most-downloaded app ever in its first week; 500 million downloads in about a year" },
            { n: 2, label: "Peak: 28.5 million daily users within weeks (a Central Park crowd misses Justin Bieber)" },
            { n: 5, label: "Fad curve: settles to about 5 million highly active users, who still generate $1.7 billion" }
          ],
          recreate: {
            brief: "Make taking part visible in public, build it on something people already love, and plan for the plateau after the spike.",
            fields: [
              { id: "love", label: "Existing love to borrow", hint: "Local pride, a hobby, a tradition" },
              { id: "public", label: "What makes participation visible", hint: "Where will others see people taking part?" },
              { id: "loop", label: "The curiosity loop", hint: "Why will bystanders ask about it?" },
              { id: "plateau", label: "Plan for the truly interested", hint: "What do you offer the people who stay?" }
            ],
            steps: [
              "Choose a hobby or local passion your audience already has.",
              "Design a simple real-world participation mechanic (a scavenger hunt, a ride route, a photo spot).",
              "Make participation visible: a sticker, a branded checkpoint, a shareable story frame.",
              "Launch with a burst (Reels, local creators, a pitch to local news).",
              "Expect the spike to fade; have a follow-up offer ready for those who keep engaging.",
              "Measure the plateau (repeat participants), not just the peak."
            ]
          }
        },
        {
          id: "og-ex-pokemon-go-london-poster",
          title: "Pokémon GO London: “The streets aren’t paved with gold…”",
          brand: "Pokémon Go / Niantic", agency: "", year: "",
          format: "Poster / outdoor",
          pdfPage: 280,
          what: "A wide poster on a London Underground platform. Over a photo of a busy, curving London shopping street, huge white condensed type reads: “The streets aren’t paved with gold, but there are 114,342 Goldeen on the loose.” A Pokémon floats above the rooftops; the Pokémon GO logo and a bold orange ‘LONDON’ sit bottom left on an orange band, with app-store download badges on the right.",
          idea: "Twist a famous London saying with a specific, playful number to make a digital game feel like part of the city.",
          elements: [
            { n: 1, name: "A twisted local saying", detail: "‘The streets of London are paved with gold’ becomes a pun on Goldeen, a goldfish Pokémon.", principle: "Wordplay rooted in local culture" },
            { n: 2, name: "An oddly specific number", detail: "114,342 makes the claim feel real and fun.", principle: "Specifics are more believable than generalities" },
            { n: 3, name: "A recognizable place", detail: "A real London street photo anchors the game in the city.", principle: "Context: the real world the game is played in" },
            { n: 4, name: "Brand + city lockup", detail: "The Pokémon GO logo followed by ‘LONDON’ in orange reads ‘GO London’.", principle: "Brand name integral to the headline" },
            { n: 5, name: "Download badges", detail: "Google Play and App Store badges: one clear action.", principle: "Tell people what to do next" }
          ],
          layout: { aspect: "16:9", boxes: [
            { n: 3, label: "London street photo", x: 15, y: 0, w: 85, h: 85 },
            { n: 1, label: "Headline: The streets aren’t paved with gold…", x: 20, y: 2, w: 55, h: 45 },
            { n: 2, label: "…114,342 Goldeen on the loose", x: 20, y: 47, w: 55, h: 20 },
            { n: 3, label: "Floating Pokémon", x: 78, y: 10, w: 12, h: 18 },
            { n: 4, label: "GO logo + LONDON", x: 18, y: 72, w: 42, h: 26 },
            { n: 5, label: "Download badges", x: 76, y: 74, w: 16, h: 10 }
          ] },
          recreate: {
            brief: "Take a well-known local saying, twist it with a specific number about your product, and set it on a place everyone recognizes.",
            fields: [
              { id: "saying", label: "The local saying or nickname", hint: "Sacramento: ‘City of Trees’, ‘Farm-to-Fork Capital’" },
              { id: "twist", label: "The twist", hint: "How does your product rewrite it?" },
              { id: "number", label: "The specific number (verified)", hint: "Students trained, miles ridden, seats left" },
              { id: "place", label: "The recognizable place", hint: "Tower Bridge, the Capitol, the river" },
              { id: "cta", label: "One action", hint: "Book, download, scan" }
            ],
            steps: [
              "List five local sayings, nicknames or landmarks your audience knows.",
              "Find a true, specific number from your business that twists one of them.",
              "Shoot the place yourself on iPhone (or license a photo).",
              "In Canva, set the headline in big condensed type over the photo, with the brand lockup on a colour band at the bottom.",
              "Add one CTA (button text, QR code or badges).",
              "Run it as a Meta static ad; if budget allows, test a local billboard or bus shelter."
            ]
          }
        }
      ]
    }
  ],
  tools: [
    {
      id: "memory-drill",
      type: "flashcards",
      title: "Memory drill",
      cards: [
        { tag: "Principle", front: "Young’s four big-data cautions?", back: "The collection fallacy, the utility deficit, siloization, and the tolerance threshold (privacy).", ref: "Ch 9 · PDF 217–218" },
        { tag: "Ogilvy said", front: "How did David Ogilvy describe direct response?", back: "“Direct response was my first love. And later, my secret weapon.” He loved it because it was rooted in data.", ref: "Ch 9 · PDF 216" },
        { tag: "Principle", front: "The Really Useful Data Resolution: where do you start?", back: "Problem first, not data first: a wide-angle lens on the business, a narrow focus on what the data can practically do.", ref: "Ch 9 · PDF 219" },
        { tag: "Term", front: "Measurement culture vs. effectiveness culture", back: "Measurement is obsessed with process and looks back (‘how well did we work?’); effectiveness is obsessed with results and looks forward (‘how can we do better next time?’).", ref: "Ch 9 · PDF 223" },
        { tag: "Principle", front: "Three kinds of insight from data, and the three ways data inspires", back: "Observation, improvement, inspiration. Inspiration works through prioritization, personalization and precision.", ref: "Ch 9 · PDF 227–228" },
        { tag: "Stat", front: "How often is econometric modelling used in IPA effectiveness case studies?", back: "Only about 15%: the skills are rare, the data is inconsistent, and marketers distrust the black box.", ref: "Ch 9 · PDF 226" },
        { tag: "Campaign", front: "British Airways #lookup", back: "A London billboard that used live flight data to show a child pointing at the real BA plane overhead, naming its flight number and origin. The data was the idea.", ref: "Ch 9 · PDF 228–229" },
        { tag: "Term", front: "POE", back: "Paid, Owned, Earned. Paid scales but is less credible; owned is controlled but needs paid to scale; earned is the most credible but can’t be controlled.", ref: "Ch 10 · PDF 234–235" },
        { tag: "Term", front: "The 10° that really matters", back: "Ogilvy’s old ‘360° Brand Stewardship’ refined: deep integration focuses only on the few degrees that matter, media neutral and discipline neutral.", ref: "Ch 10 · PDF 238–239" },
        { tag: "Campaign", front: "Gerber’s revival", back: "New mothers’ weekly searches nearly double, so Ogilvy built a video library answering their exact queries, titled with their search terms. Gerber grew again after five years of decline.", ref: "Ch 10 · PDF 239–240" },
        { tag: "Principle", front: "First question to ask about any website", back: "What do you want it for: the audience it brings, or how it presents you? And a website is only an advertisement, so it needs an idea.", ref: "Ch 10 · PDF 241, 246" },
        { tag: "Principle", front: "Young’s secret for good programmatic", back: "Technology is only the enabler: a granular view of the person, then the creative that engages them, then scale. Intimacy first; scale is the dividend.", ref: "Ch 10 · PDF 249–250" },
        { tag: "Principle", front: "Digital video in one line", back: "“In digital video you seek fans, you don’t buy audiences.”", ref: "Ch 10 · PDF 252" },
        { tag: "Stat", front: "Wendy Clark’s 70/20/10", back: "70% of media money on low-risk bread and butter, 20% on innovation, 10% on high-risk new ideas. Digital video is the case for the 10%.", ref: "Ch 10 · PDF 253" },
        { tag: "Term", front: "DAVE", back: "Data-inspired, Always-on, Valuable, Experience. Steps: customer ambition → personas → customer journey → engagement idea → blueprint → experience map.", ref: "Ch 10 · PDF 255–257" },
        { tag: "Term", front: "The four roles of creative technology", back: "Coder (the foundation), digital producer (the leader), digital creative (the maker), inventor (sees new uses for things). A virtuous circle, not a hierarchy.", ref: "Ch 11 · PDF 260–262" },
        { tag: "Principle", front: "Where does the UX designer sit?", back: "Where customer needs, business needs and feasibility meet. UX is everyone’s job, and the whole experience is the product (Uber).", ref: "Ch 11 · PDF 264–265" },
        { tag: "Stat", front: "The 20% problem", back: "Companies use about 20% of their marketing technology. The fix is aligning marketing, operations and analytics, not switching vendors.", ref: "Ch 11 · PDF 266–268" },
        { tag: "Principle", front: "What do VR and AR offer advertising?", back: "Perspective, context and intensity. Best for education and demonstration, including B2B.", ref: "Ch 11 · PDF 272–276" },
        { tag: "Stat", front: "Pokémon Go’s fad curve", back: "A peak of 28.5M daily users within weeks, settling to about 5M, who still generated $1.7 billion. These are just techniques: the idea decides how long they last.", ref: "Ch 11 · PDF 277–280" }
      ]
    }
  ]
});
