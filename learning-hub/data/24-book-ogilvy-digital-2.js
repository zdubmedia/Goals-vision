HUB.tab({
  id: "book-ogilvy-digital",
  chunk: true,
  parts: [],
  lessons: [
    {
      id: "og-04a",
      part: "p2",
      chapter: 4,
      chapterTitle: "The Digital Ecosystem · Who's winning, and how",
      pages: "62–66",
      title: "The Digital Ecosystem: no one-stop shop, and profit beats scale",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 4 · The Digital Ecosystem (opening) · PDF pp. 62–66", who: "Miles Young" }],
      quotes: [
        { text: "For an advertiser, there’s no one-stop shop.", page: "62" },
        { text: "It is a race of algorithms in which profitability is the prize, not mere scale.", page: "63" }
      ],
      idea: `Part two opens with a bold claim: the fragmented new media world, **knitted together the right way**, is the creative opportunity David Ogilvy could only have dreamed of. The catch is in the small print. It's a dazzling ecosystem *if* you stay sceptical of its own hype, not *because* you believe it.

Young then does what he says journalists never do: a systematic comparison of who is actually making money, and how. (That's the big "game of Risk" map on PDF 66, where each platform is a territory sized by users, revenue and valuation.) Two simple lessons come out of it:

1. **There's no one-stop shop.** The platforms complement each other. Which ones you use, and how, depends on *your* strategy, not theirs.
2. **It's a race of algorithms, and the prize is profit, not scale.** Nobody has won it yet.

**Platforms die fast.** His colleague Zach Newcombe calls this a "Cambrian moment": sudden total connectivity spawning new life forms, with no guarantee which survive. The logos on PDF 62 are the fossils: Six Degrees barely reached 2000, Myspace and Friendster gave way to Facebook, Xanga to YouTube, and Orkut, once huge in parts of the world, vanished. Friendster failed because it forgot the *social* part of a social network: like reading your résumé at a cocktail party.

**The big three.** Google, Facebook and Amazon are pulling ahead, and two of them (Google and Facebook) have paid advertising at the heart of their algorithms. Facebook went from a "quasi-altruistic" social network to an aggressive media owner in a few years. Young was criticized for saying early on that it was **the world's biggest direct-marketing database**; now mobile reach, accurate targeting and real direct response make it part of almost any plan. The caption on PDF 65 goes further: Facebook is less an ad platform than a **social CRM** engine that generates leads efficiently (his example is a Philips product launch).

**The duopoly.** Google and Facebook took about $36 billion of the $69 billion US digital spend: 52%. Standard Oil had 70% of its market when Theodore Roosevelt went after it in 1906. And the map's moral: these territories shift, and start-ups armed with algorithms keep appearing, but the incumbents' network effects make them harder to conquer than ever.

**What it means for you:** treat every platform as rented land inside a strategy you own, and judge it by profit, not reach.`,
      keyPoints: [
        "Platforms rise and die fast (Six Degrees, Friendster, Myspace, Orkut), so never build the strategy around one.",
        "No one-stop shop: combine channels according to your strategy, not the platform's pitch.",
        "The race is won on profitability, not scale. Judge channels by money made, not people reached.",
        "Google and Facebook put paid ads at the core of their algorithms and took about 52% of US digital spend.",
        "Young calls Facebook a direct-marketing database and a social CRM engine: its real power is generating leads."
      ],
      why: "ZDub sells Meta ads, and this is the frame for the whole agency: Facebook and Instagram are a lead and CRM machine inside a plan the client owns, judged by booked seats and revenue, not reach.",
      example: {
        title: "PMT: channels serve the strategy, not the other way round",
        before: "“Let's be everywhere: TikTok, YouTube, Facebook, Instagram, Google. Post a lot and see what sticks.”",
        after: "Strategy first: fill beginner classes at a profit.\n- **Facebook/Instagram:** lead engine (instant form: “Get the class schedule + seat alerts”), with SMS/email follow-up = social CRM.\n- **Google Search:** catches people already searching “motorcycle class Sacramento”.\n- **YouTube:** the library of “what happens in class” videos the ads and follow-ups link to.\nEach one judged on cost per booked seat.",
        body: "The “before” lets the platforms set the agenda. The “after” gives every channel one job in PMT's plan and one money metric, which is exactly Young's “no one-stop shop” and “profit, not scale.”"
      },
      practice: [
        { prompt: "Dissect it: take Young's ecosystem argument apart.", fields: ["In your own words, what does “no one-stop shop” mean for a local advertiser?", "Why does he say profit, not scale, is the prize? What's the local-business version of that?", "Argue the other side: when would going all-in on one platform make sense for a small business?"] },
        {
          prompt: "Apply it: recreate the Philips OneBlade pattern for PMT. Write a “this is not a…” Facebook lead ad (one-line reframe, hero visual, offer, one button), plus the follow-up that turns a lead into a booked seat.",
          fields: ["Reframe headline (“this is not a …”)", "Hero visual", "Offer line + button", "Follow-up sequence after the form"],
          rubric: ["The reframe is true and surprising, not a gimmick", "The product or experience is shown big and clear", "One offer, one action", "Includes the follow-up, because Young's point is that Facebook's power is lead generation (social CRM), not display"],
          model: "Headline: “This is not a motorcycle class.” Sub-line: “It's the weekend you become a rider.” Visual: a first-timer rolling through the cones while an instructor gives a thumbs up. Ad fields: “Beginner course · bikes and helmets provided” + Sign Up button. Instant form: name, mobile, preferred weekend. Follow-up: instant text with the next three class dates and a booking link; day 2 email “What to wear to your first class”; day 4 text “Two seats left for Saturday the __th.”"
        }
      ],
      today: { task: "List every channel PMT (or a prospect) uses. Next to each, write its one job in the strategy and the money metric you'll judge it by (cost per lead, cost per booked seat). Mark any channel with no job as “pause”.", output: "A one-page channel map: channel → job → money metric.", minutes: 20 },
      check: [
        { q: "What two big lessons does Young draw from his platform comparison?", a: "There's no one-stop shop (channels complement each other and are chosen by your strategy), and it's a race of algorithms where profitability, not scale, is the prize." },
        { q: "Why did Friendster fail, according to Young?", a: "It missed the social-interaction part of a social network: like reading your résumé at a cocktail party." },
        { q: "What share of US digital spend did Google and Facebook take, and what comparison does Young make?", a: "About $36B of $69B, 52%. Standard Oil had 70% of its market when Theodore Roosevelt took it on in 1906." }
      ],
      examples: [
        {
          id: "og-ex-philips-oneblade-facebook",
          title: "Philips OneBlade “this is not a shaver” Facebook ad",
          brand: "Philips", agency: "Ogilvy & Mather", year: "",
          format: "Social post",
          pdfPage: 64,
          what: "A sponsored post in the Facebook mobile feed. A lime-green and grey OneBlade trimmer lies at an angle on white under a short lowercase headline: “this is not a shaver”. Under the image sit the product name with a two-word promise, the price ($34.99) and a “Shop Now” button. Young uses it to show Facebook working as a lead and sales engine for a product launch.",
          idea: "Deny the category the product seems to belong to, so the scroller looks twice to work out what it is; the price and button then turn that curiosity into a sale.",
          elements: [
            { n: 1, name: "Reframing headline", detail: "Four words that contradict what your eye sees. The contradiction is what stops the thumb.", principle: "Stop the thumb (Ch 4, PDF 80)" },
            { n: 2, name: "Hero product shot", detail: "The product, big, at a dynamic angle on white; its acid-green colour pops in a blue-and-white feed.", principle: "Facebook's advice: product imagery and text earn the pause" },
            { n: 3, name: "Name + promise line", detail: "Product name plus a tiny promise, so the brand is named even if nobody clicks.", principle: "Brand visible in the ad" },
            { n: 4, name: "Price", detail: "Showing the price up front qualifies buyers and signals a buy-now offer, not a brand film.", principle: "Facebook as a direct-response channel" },
            { n: 5, name: "Shop Now button", detail: "One native action, right under the offer.", principle: "Social CRM: turn attention into a lead or sale" }
          ],
          layout: { aspect: "1:1", boxes: [
            { n: 1, label: "Headline: “this is not a shaver”", x: 8, y: 6, w: 62, h: 18 },
            { n: 2, label: "Product shot", x: 8, y: 24, w: 84, h: 46 },
            { n: 3, label: "Name + promise", x: 4, y: 76, w: 50, h: 8 },
            { n: 4, label: "Price", x: 4, y: 86, w: 28, h: 8 },
            { n: 5, label: "Shop Now", x: 70, y: 78, w: 26, h: 10 }
          ] },
          recreate: {
            brief: "Name the category people lump you into, deny it in a few words, show what you really are, and put an offer and one button right under it.",
            fields: [
              { id: "category", label: "The category people assume you're in", hint: "e.g. “a motorcycle class”, “a roofing company”" },
              { id: "reframe", label: "Your “this is not a ___” headline", hint: "Must be true and surprising" },
              { id: "visual", label: "Hero shot", hint: "The product or the moment, big and clean" },
              { id: "promise", label: "Name + short promise", hint: "2–6 words" },
              { id: "offer", label: "Offer or price line", hint: "What they get and what it costs or saves" },
              { id: "cta", label: "Button and destination", hint: "Sign Up to an instant form, or Book Now to a page" }
            ],
            steps: [
              "Write 5 “this is not a ___” lines in your notes app and pick the one that's both true and surprising.",
              "Shoot the hero on iPhone in daylight against a clean background (or the cones at the range for PMT).",
              "In Canva, make 1080×1350 and 1080×1080 versions: headline top-left in bold lowercase, visual big in the centre.",
              "Keep price and offer in the Meta ad fields (headline/description) rather than baked into the image.",
              "In Meta Ads Manager, run it as a Leads (instant form) or Sales campaign with a broad local audience.",
              "Build the follow-up texts/emails before launch, so every lead hears back within minutes."
            ]
          }
        },
        {
          id: "og-ex-facebook-ads-that-engage",
          title: "Facebook “ads that engage. ads that earn you more.”",
          brand: "Facebook", agency: "", year: "",
          format: "Print ad",
          pdfPage: 65,
          what: "A simple ad from Facebook selling its own advertising product, photographed for the book. Three short lowercase lines, “ads that engage. ads that earn you more.”, in grey with some letters picked out in navy and blue; a chunky navy arch-shaped logo marked “by Facebook”; and a navy “Get Started Now” button. Young runs it beside his argument that Facebook has become a lead-generation and CRM machine.",
          idea: "Two parallel promises climb from attention (engage) to money (earn you more); a button makes it an action, not an announcement.",
          elements: [
            { n: 1, name: "Parallel headline", detail: "“ads that…” twice: the repeated opening makes the second line, the money line, land harder.", principle: "Repetition and rhythm make a line stick" },
            { n: 2, name: "Payoff line", detail: "“you more” sits alone on its own line: the reader's benefit gets the last word.", principle: "Benefit to the reader, not features" },
            { n: 3, name: "Logo with endorsement", detail: "A new product mark borrows trust from the parent: “by Facebook”.", principle: "Brand name clearly visible" },
            { n: 4, name: "Button-shaped CTA", detail: "Even on paper, the call to action looks like a button: it trains the reader to act.", principle: "Direct response: one clear next step" }
          ],
          layout: { aspect: "4:3", boxes: [
            { n: 1, label: "“ads that engage. ads that earn”", x: 8, y: 4, w: 84, h: 30 },
            { n: 2, label: "“you more.”", x: 22, y: 34, w: 56, h: 14 },
            { n: 3, label: "Logo + “by Facebook”", x: 38, y: 52, w: 24, h: 28 },
            { n: 4, label: "Get Started Now button", x: 28, y: 84, w: 44, h: 11 }
          ] },
          recreate: {
            brief: "Stack two parallel promises that climb from what you do to what the customer gains, then end on a single button-style call to action.",
            fields: [
              { id: "promise1", label: "Promise 1 (what you do)", hint: "e.g. “ads that get seen.”" },
              { id: "promise2", label: "Promise 2 (what they gain)", hint: "Same opening words, bigger payoff: “ads that fill your calendar.”" },
              { id: "accent", label: "Words to colour", hint: "Pick 1–2 words to highlight in brand colour" },
              { id: "endorse", label: "Logo / endorsement", hint: "e.g. “ZDub Media · Sacramento”" },
              { id: "cta", label: "Button text", hint: "“Book a free audit”" }
            ],
            steps: [
              "Write 5 pairs of parallel lines (same first two words, different payoff); read them aloud and keep the pair with the best rhythm.",
              "In Canva, set the lines in a clean rounded sans-serif, centred, with the payoff on its own line.",
              "Colour only the accent words in brand colour; keep everything else grey or black.",
              "Add the logo below and a solid button shape with the CTA.",
              "Use it as a ZDub LinkedIn post or a 1080×1350 Meta ad pointing to the audit form."
            ]
          }
        }
      ]
    },
    {
      id: "og-04b",
      part: "p2",
      chapter: 4,
      chapterTitle: "The Digital Ecosystem · The Death of Everything?",
      pages: "66–69",
      title: "The Death of Everything? TV isn't dead, and reach still matters",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 4 · The Digital Ecosystem · The Death of Everything? · PDF pp. 66–69", who: "Miles Young" }],
      quotes: [
        { text: "So TV is not dead: though it is changing beyond recognition, it is more useful than ever before.", page: "68" },
        { text: "What gives your brands the reach they need?", page: "68" }
      ],
      idea: `The duopoly has sucked money out of "traditional media", above all the press and to some extent TV. The "digital exclusivity" crowd turned that into a story about **the death of** everything. Young lines up the prophets: journalist Bob Garfield (a chapter called "The Death of Everything" in *The Chaos Scenario*, 2009); Nicholas Negroponte, who wrote in 1996 that TV would disappear within ten years; the BBC's chairman saying the same that year; NYU's Scott Galloway, who sees TV's death as the end of an "advertising industrial complex" and of branding itself; and Rust and Oliver's "The Death of Advertising" back in 1994.

**What actually happened.** GroupM's Adam Smith tracked measured media investment from 1999 to 2017. Linear TV held about **40%** of a market that digital had made much bigger: the same share as in 1999 (the flat line on PDF 67). The real loser was the press: classifieds died, and direct response moved online almost wholesale. Even print survives where quality journalism reaches an elite audience of enough scale or specialism, ideally paying a cover price. Break one of those conditions and the model breaks.

**TV is changing, not dying.** Cord-cutting, "TV Everywhere" and OTT streaming are reshaping it, but people watch *more* TV, and the content has never been better. The audience is fragmented across devices, and our inability to **measure** it well (not cord-cutting) may be TV's biggest threat.

**The cost of the myth.** "TV is dead" pushed clients into a splurge of **hypertargeting**. Young's experience is that brands, having experimented, are going back to fundamentals: *what gives us the reach we need, and reach plus impact?* Where there's demand, supply adjusts, so expect new ways of delivering a total aggregated audience. He's not predicting; he's arguing against blind anti-TV prejudice.

**Six reasons TV isn't dead** (PDF 68–69):
1. It's the safest way to scale **net reach**, which you can't get any other way.
2. It doesn't suffer from **ad fraud**, which may taint up to a third of digital spend.
3. Its audience is **under-counted**, because TV is watched on other devices too.
4. It's the best vehicle for **emotion**, and brands need emotion.
5. Econometric evidence shows that **cutting TV hurts sales**.
6. Online money itself now sustains TV (it's the second-largest spend category).

The pull quote on PDF 68 sets up the next section: there's no digital marketing, only good marketing.`,
      keyPoints: [
        "“Death of TV / advertising / branding” prophecies go back to the 1990s and haven't come true.",
        "TV kept about 40% of media investment from 1999 to 2017; print was the real loser (classifieds and direct response went online).",
        "TV is fragmenting (cord-cutting, OTT), and measurement, not cord-cutting, is its biggest threat.",
        "Six reasons TV lives: net reach at scale, no ad fraud, under-counted audience, best for emotion, cuts hurt sales, online spend sustains it.",
        "The “TV is dead” story pushed brands into hypertargeting; the fundamentals are reach plus impact."
      ],
      why: "Local owners get told “TV is dead, go all digital” and then slice their audiences razor-thin. Young's argument lets ZDub defend broad reach (broad Meta audiences, streaming TV or radio where it fits) alongside targeted retargeting.",
      example: {
        title: "PMT: from hypertargeting to reach plus impact",
        before: "Five ad sets at $5/day each: men 25–34 interested in Harley-Davidson; women 30–45 interested in touring; “recently moved”; “likes Yamaha”; lookalike 1%. Each one starved of data, frequency through the roof.",
        after: "One broad prospecting ad set (Sacramento + 40 miles, 18–65, no interests) carrying an emotional video that does the reaching, plus one small retargeting set for site visitors and video viewers. For the spring push, test a 15-second streaming TV or YouTube spot in the same zip codes.",
        body: "Young's reasons 1 and 4 in local form: reach the whole market and move people emotionally, then let targeting do the cleanup job it's actually good at."
      },
      practice: [
        { prompt: "Dissect it: weigh the “death of TV” argument.", fields: ["Why does Young think the “death of…” story keeps coming back?", "Which of the six reasons matters most for a local business, and which least?", "Argue the other side: for a Sacramento roofer with $1,500 a month, is TV relevant at all?"] },
        {
          prompt: "Apply it: write a short media rationale for PMT's spring push that balances reach, impact and targeting.",
          fields: ["Reach layer (who, which channel)", "Impact layer (the emotional asset)", "Targeted layer (who, which channel)", "How you'll measure it"],
          rubric: ["Has a genuine broad-reach layer, not just narrow slices", "Uses an emotional, TV-style asset (Young's reason 4)", "Keeps a targeted layer too: “and”, not “or”", "Measures business outcomes (booked seats), not only views"],
          model: "Reach: broad Meta prospecting across the Sacramento area plus a 2-week YouTube/streaming test in the top 10 zip codes for past students. Impact: a 30-second film of a nervous first-timer's day, from wobbly first push to confident final lap. Targeted: retarget site visitors and 50% video viewers with a seats-left offer. Measure: cost per booked seat and total seats filled versus last spring, with a holdout zip code to check the streaming test."
        }
      ],
      today: { task: "Open PMT's (or a prospect's) Meta account. Count the ad sets and how many have audiences under 200,000 people. Draft a consolidation into one broad prospecting set plus one retargeting set.", output: "A before/after list of ad sets with audience sizes.", minutes: 20 },
      check: [
        { q: "What happened to TV's share of measured media investment between 1999 and 2017?", a: "It stayed at about 40%, the same as in 1999, in a market much expanded by digital." },
        { q: "What does Young say may be the biggest threat to TV?", a: "Our inability to measure its fragmented audiences well, not cord-cutting." },
        { q: "Name three of the six reasons TV is not dead.", a: "Any three: safest net reach at scale; no ad fraud; under-counted audience; best for emotion; cutting TV damages sales; online spend sustains TV." }
      ]
    },
    {
      id: "og-04c",
      part: "p2",
      chapter: 4,
      chapterTitle: "The Digital Ecosystem · The Ghettoization of Digital",
      pages: "68–75",
      title: "The Ghettoization of Digital: there's only good marketing",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 4 · The Digital Ecosystem · The Ghettoization of Digital · PDF pp. 68–75", who: "Miles Young" }],
      quotes: [
        { text: "There is no such thing as digital marketing or digital advertising; there is just good marketing and good advertising.", page: "68" },
        { text: "It is easy to pull by pandering to the lowest common denominators of crowd culture: we would just put a cat in every video.", page: "72" }
      ],
      idea: `"Ghettoization" is the word of Steve Miles, Young's long-time client on Dove. It's what happens when people revere something new: **we revere, then we separate; we separate, then we build silos to protect the territory; then we call it "pure play".** Miles's point: if Dove is good at digital, it's good for exactly the same reasons it's good anywhere, the fundamentals of marketing. Nestlé's digital chief Pete Blackshaw says the same: the fundamentals remain fundamental. Too much digital work starts from the opposite end. It's incidental, not fundamental; it puts the **media platform above the brand platform**; and it doesn't scale.

**The Oreo tweet.** During the 2013 Super Bowl blackout, Oreo's social team tweeted "You can still dunk in the dark" within minutes, and the industry hailed it as the moment "always-on" marketing arrived. Professor Mark Ritson then dissected the numbers (followers, click-throughs, retweets) and showed it reached about **64,000 people, 0.02% of Oreo's customers**. Young's verdict is subtler than either side. Ritson's real target was the *cult* around the tweet, the silo triumphant. The tweet was **brilliant public relations**, speaking to staff and investors, and it made Oreo, Twitter, Mondelez, its makers and even Ritson famous. The disservice was hyping it as a new *advertising* formula, which it never had the scale or repeatability to be. Social media disappoints as a silo and works impressively **as part of a whole**.

**Views need a conscience.** Young admits signing off case studies measured only in views. Views show pull, but pull can be bought by pandering (put a cat in every video, which his Toronto agency John St. satirized on PDF 71). The tables on PDF 73–75 make the point: top creators like PewDiePie rack up billions of views from years of daily output; the top *brand* videos (the Shakira "La La La" film, Android "Friends Furever", Dove Real Beauty Sketches, Evian "Roller Babies", "Dumb Ways to Die") have far fewer but far more valuable views, because they were part of campaigns with commercial goals; music videos top everything because music now lives on free streaming. Branded content can't win the views race, and it shouldn't try: it sets agendas, and it works best **with traditional media**.

**The nub.** Critics ("hoopla") and cheerleaders both talk in old advertising terms. But **advertising, PR, direct marketing and sales enablement are collapsing into one another.** The real contest is integration: treating digital and traditional as additive.`,
      keyPoints: [
        "There's no “digital marketing”, only good marketing; what works online works for the same fundamental reasons as anywhere.",
        "Silos grow from reverence: revere, separate, wall off, call it “pure play”.",
        "Oreo's blackout tweet reached about 64,000 people (0.02% of customers): brilliant PR, not a repeatable ad model.",
        "Views prove pull, but pull needs a conscience; brand videos can't and shouldn't compete with creators on raw views.",
        "Advertising, PR, direct marketing and sales enablement are merging; integration is the real game."
      ],
      why: "Clients will ask ZDub to “go viral”. Young's answer lets you judge content by its business job (agenda-setting, advocacy, leads) and keep PMT's organic posts, ads, reviews and follow-up working as one system instead of separate silos.",
      example: {
        title: "PMT: a timely post, kept in proportion",
        before: "“We'll jump on a trend reel every week. Success = views.”",
        after: "Timely posts are treated as PR. When a local moment hits (a DMV backlog in the news, the first sunny weekend of spring), post a fast, on-brand reaction that ties to the class, then move the best performer into the evergreen lead campaign. Judge it by local shares, saves and leads, not raw views.",
        body: "Same energy as Oreo, but plugged into the whole system rather than celebrated as a silo."
      },
      practice: [
        { prompt: "Dissect it: separate the tweet from the hype.", fields: ["What is Young's real complaint: about the Oreo tweet, or about how people talked about it?", "Where have you seen a business judge content only by views? What did that hide?", "When could chasing views genuinely be the right goal?"] },
        {
          prompt: "Apply it: recreate the Oreo “dunk in the dark” pattern for PMT. Prepare a real-time kit: three moments that could happen, the product-tied line for each, and how a winner joins the paid plan.",
          fields: ["Moment 1 + line", "Moment 2 + line", "Moment 3 + line", "How a winning post plugs into the bigger plan"],
          rubric: ["Each line ties the moment to the product's core benefit or ritual (Oreo: you can still dunk)", "Readable in one glance on a phone", "Brand or product visible in the image", "Has a path into paid and follow-up, so it isn't a silo"],
          model: "1) First 75° Saturday of spring: photo of a training bike in the sun, “It's riding weather. Are you riding yet?” 2) DMV wait times in the news: “Skip the stress. Learn the skills first.” 3) Gas prices spike: a fuel gauge on full, “A motorcycle sips gas. Learn to ride one.” Any post that beats average saves by 2x becomes an ad in the lead campaign within 48 hours, pointing to the class-schedule form."
        }
      ],
      today: { task: "Take PMT's last 5 posts. For each, write the business job it did (reach, proof, PR, leads) and one metric beyond views that shows whether it did that job.", output: "A 5-row table: post → job → metric → result.", minutes: 15 },
      check: [
        { q: "What does “ghettoization of digital” mean, in Steve Miles's sense?", a: "Revering digital so much that we separate it into silos and call it “pure play”, instead of applying the fundamentals of good marketing." },
        { q: "How many people did Mark Ritson calculate the Oreo tweet reached?", a: "About 64,000, or 0.02% of Oreo's customer base." },
        { q: "What does Young say is really happening to advertising, PR and direct marketing?", a: "The disciplines are collapsing into each other; the real battle is how well you integrate, treating digital and traditional as additive." }
      ],
      examples: [
        {
          id: "og-ex-oreo-dunk-in-the-dark",
          title: "Oreo “You can still dunk in the dark”",
          brand: "Oreo", agency: "", year: "2013",
          format: "Social post",
          pdfPage: 70,
          what: "When the stadium lights failed during the 2013 Super Bowl, Oreo tweeted within minutes. The image is almost entirely black, with a soft spotlight falling on a single cookie at the left edge; in white capitals near the bottom, “You can still dunk in the dark”, with the Oreo emblem beside it. The tweet text: “Power out? No problem.” It was celebrated as proof that real-time marketing had arrived.",
          idea: "React to the moment everyone is watching, but tie it straight back to the product's own ritual, dunking.",
          elements: [
            { n: 1, name: "The moment", detail: "A blackout tens of millions were watching and talking about. Speed was the craft: posted while the lights were still out.", principle: "Topicality: what digital adds at its best (PDF 79)" },
            { n: 2, name: "Product in a spotlight", detail: "One cookie, lit like an actor; the black frame is the blackout itself.", principle: "Show the product" },
            { n: 3, name: "Ritual line", detail: "“Dunk” is Oreo's signature behaviour; the line says the ritual survives even this.", principle: "The message is the message (PDF 77)" },
            { n: 4, name: "Brand emblem", detail: "The cookie stamp sits beside the line, so it's branded even when shared without the handle.", principle: "Brand visible" },
            { n: 5, name: "Two-beat caption", detail: "A question and a shrug (“Power out? No problem.”): conversational, confident, short.", principle: "Write like a person, not a brand" }
          ],
          layout: { aspect: "4:5", boxes: [
            { n: 1, label: "Black frame = the blackout", x: 15, y: 2, w: 83, h: 40 },
            { n: 2, label: "Cookie in the light", x: 0, y: 44, w: 14, h: 14 },
            { n: 3, label: "Line: dunk in the dark", x: 16, y: 63, w: 62, h: 6 },
            { n: 4, label: "Oreo emblem", x: 80, y: 60, w: 14, h: 10 },
            { n: 5, label: "Caption: Power out? No problem.", x: 3, y: 84, w: 55, h: 6 }
          ] },
          recreate: {
            brief: "When a moment grabs your audience's attention, answer within minutes with one simple image that ties the moment to your product's core ritual or benefit, then feed it into the wider plan.",
            fields: [
              { id: "moment", label: "The moment", hint: "Weather, local news, a game, a holiday, a viral topic" },
              { id: "ritual", label: "Your product's ritual or core benefit", hint: "PMT: the first ride, the cones, the certificate" },
              { id: "line", label: "The line (under 8 words)", hint: "Moment + product, with a wink" },
              { id: "visual", label: "The visual", hint: "One object or person, lots of negative space" },
              { id: "approval", label: "Who approves, and how fast", hint: "Agree tone limits with the owner in advance" },
              { id: "amplify", label: "How it joins the plan", hint: "Boost, add to lead campaign, email list" }
            ],
            steps: [
              "Agree tone guardrails with the client in advance (what topics are off-limits, who approves by text).",
              "Prepare 3 Canva templates (black, brand colour, photo) with logo placed, so a post takes 10 minutes.",
              "When a moment hits, write 5 lines in 5 minutes; pick the one that ties to the product, not just the news.",
              "Swap in a fresh iPhone photo or product shot, export 1080×1350, post with a two-beat caption.",
              "If it beats your average engagement in the first hour, boost it locally and add it to the lead campaign.",
              "Log the result: reach, local shares, leads. Judge it as PR, not as a new ad formula."
            ]
          }
        },
        {
          id: "og-ex-john-st-cat-video",
          title: "John St. cat-video satire",
          brand: "John St.", agency: "John St. (Toronto)", year: "",
          format: "Online film",
          pdfPage: 71,
          what: "A deadpan mock-documentary from Ogilvy's Toronto agency John St. (widely known online as “Catvertising”). Earnest staff explain the agency's “breakthrough”: since cat videos get enormous views, cats will now be in everything. Stills show a presenter cradling a cat, an open-plan office overrun with cats on the desks, a strategist in front of a whiteboard, a network diagram of channels, a cat yowling beside a desk phone, a man crawling under a desk after one, and a closing John St. logo with a tiny cat.",
          idea: "Mock your own industry's obsession with view counts, played completely straight; the joke proves you know what really matters, and people share it for that.",
          elements: [
            { n: 1, name: "Deadpan corporate format", detail: "Talking heads, office B-roll and diagrams, all delivered with total seriousness.", principle: "Humour as an antidote to digital hype" },
            { n: 2, name: "Absurd premise pushed to the end", detail: "If views are the goal, then cats in every brief; the logic is followed until it collapses.", principle: "Pull needs a conscience (PDF 72)" },
            { n: 3, name: "Real insight underneath", detail: "Views are not value. Every marketer watching recognizes the habit being mocked.", principle: "Views aren't the objective" },
            { n: 4, name: "Brand sign-off", detail: "The agency's logo, with a cat, so the satire doubles as self-promotion.", principle: "Brand name visible" }
          ],
          beats: [
            { n: 1, label: "Agency leaders announce a ‘breakthrough’ new offering with total sincerity" },
            { n: 2, label: "A strategist explains the ‘science’ at a whiteboard and network diagram" },
            { n: 3, label: "Montage: cats on desks, keyboards and phones; staff chasing them under furniture" },
            { n: 4, label: "Sign-off: the John St. logo, with a cat" }
          ],
          recreate: {
            brief: "Pick a bad habit in your own industry, play it completely straight in a mock announcement, and let the absurdity prove you know better.",
            fields: [
              { id: "habit", label: "The industry habit to mock", hint: "e.g. agencies promising “viral”, gurus selling hacks" },
              { id: "premise", label: "The absurd premise", hint: "Take the habit to its logical extreme" },
              { id: "insight", label: "The truth underneath", hint: "What actually works instead" },
              { id: "cast", label: "Who plays it straight", hint: "You, a client, a friend with a dry face" },
              { id: "signoff", label: "Sign-off line + logo", hint: "One line that flips to the real point" }
            ],
            steps: [
              "List 5 clichés in local marketing (guaranteed viral, “we'll post daily”, dancing-owner trends) and pick the one owners groan at most.",
              "Write a 40-second script: serious announcement, fake “data”, absurd demo, real-point sign-off.",
              "Shoot talking heads on iPhone at eye level with a plain background; add B-roll of the absurd idea in action.",
              "Edit in CapCut with stock “corporate inspiration” music and lower-third titles to sell the seriousness.",
              "Post as a ZDub Reel and LinkedIn video; pin it to the profile as a personality piece."
            ]
          }
        }
      ]
    },
    {
      id: "og-04d",
      part: "p2",
      chapter: 4,
      chapterTitle: "The Digital Ecosystem · The Digital Social Contract and The Age of And",
      pages: "76–77",
      title: "The Age of And: the message is the message",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 4 · The Digital Ecosystem · The Digital Social Contract; The Age of And · PDF pp. 76–77", who: "Miles Young" }],
      quotes: [
        { text: "So I would go a step further and say this should be the “Age of And”.", page: "77" },
        { text: "the message is the message – even though it can be influenced by the medium.", page: "77" }
      ],
      idea: `**The digital social contract (PDF 76).** Before the revolution, media money was simple: advertisers paid to place ads, and readers paid a cover price or subscription. Now there's a subtler, less visible three-way contract, which users signed "perhaps unwittingly":
- **Platform → user:** content, social connection, shopping, digital goods, search.
- **User → platform:** demographic and behavioural data, payments, engagement data.
- **Advertiser → user:** ads, content marketing, promotions. **User → advertiser:** views and engagement.
- **Advertiser ↔ platform:** money to advertise, in exchange for aggregated targeting and engagement data.
Value moves as a mix of **data, dollars and engagement**, and every relationship gets stronger as the network grows.

**The Age of And.** Young has been describing digital as "this *and* that" on purpose. Jim Collins (*Built to Last*) praised "the genius of 'and'": great companies embrace both continuity and change. Young goes further. Revolutions breed zealots and resisters ("taliban versus dinosaurs"), and zero-sum fights force fake choices on us. His five pairs, which run through the rest of the book, are **additive**:
1. analogue *and* digital
2. integration *and* specialization
3. slices *and* scale
4. maths *and* madness
5. form *and* content

He adds a word to David Ogilvy's list of favourites: **copacetic**, a 1920s American word for harmonious well-being. The answers sit in the harmony in between, a "copacetic consensus".

**The one "and" he won't grant: McLuhan.** Marshall McLuhan's 1964 slogan "the medium is the message" got a second life in digital. Young thinks it's wholly wrong. **The message is the message**; the medium can only shape it. Ogilvy's surviving colleagues remember his advice: it's what you say, not how you say it. Young says that advice is needed more now than ever, because digital teams so often start with the format ("we need a Story", "let's do AR") instead of the thing worth saying.

This connects back to the ghettoization section (fundamentals first) and forward to his fifth lesson for leaders: relish dualism.`,
      keyPoints: [
        "The new contract: users pay with data and attention, advertisers pay money, platforms trade both; it strengthens as networks grow.",
        "The Age of And: analogue and digital, integration and specialization, slices and scale, maths and madness, form and content.",
        "Refuse false zero-sum fights; the answers sit in the harmony between (“copacetic”).",
        "McLuhan was wrong: the message is the message, and the medium only shapes it.",
        "Ogilvy's rule holds: it's what you say, not how you say it."
      ],
      why: "Agencies love format debates (Reels vs Stories vs UGC). Young says decide the message first, then fit it to each medium. That's how ZDub should brief every PMT asset.",
      example: {
        title: "PMT: one message, three media",
        before: "Brief: “We need a trending TikTok-style video this week.”",
        after: "Message: “Nervous beginners leave our class confident.”\n- **Reel:** a first-timer's wobbly first lap cut against their confident last lap.\n- **Static:** a quote card from a real review: “I was terrified. By Sunday I was riding.”\n- **Google ad:** “Never ridden? Beginner class, bikes provided.”",
        body: "The format changes three times; the message never does. That's “the message is the message” in practice, and analogue/digital, slices/scale working together."
      },
      practice: [
        { prompt: "Dissect it: test the Age of And.", fields: ["Draw the social contract for one PMT Facebook ad: what do PMT, Meta and the rider each give and get?", "Pick one of Young's five pairs. Where are you treating it as “or” in your own work?", "Argue McLuhan's side: when does the medium genuinely change the message?"] },
        {
          prompt: "Apply it: write one message for a ZDub prospect (a roofer, HVAC company or med spa), then adapt it to three media without changing what it says.",
          fields: ["The message (one sentence)", "Reel version", "Static ad version", "Search ad version"],
          rubric: ["The core message is identical in all three", "Each version uses its medium's strength (motion, glance, intent)", "Says something specific and true, not a format trick", "Passes Ogilvy's test: it's what you say, not how"],
          model: "Message: “We find the leak before it becomes a ceiling.” Reel: drone shot of a roof, zoom to a lifted shingle, cut to a stained ceiling, then the inspector's hand pressing it back down. Static: split image (small shingle gap / big ceiling stain), headline “Small now. Big later.” Search: “Roof Leak Inspection · Find It Before It Spreads · Sacramento”."
        }
      ],
      today: { task: "Take the next asset on your list. Before choosing a format, write its message in one sentence and get it approved. Only then pick the medium and format.", output: "One message line + the format chosen for it.", minutes: 10 },
      check: [
        { q: "What three things are exchanged in the digital social contract?", a: "Data, dollars and engagement, among platforms, advertisers and users." },
        { q: "Name Young's five “and” pairs.", a: "Analogue and digital; integration and specialization; slices and scale; maths and madness; form and content." },
        { q: "What's Young's verdict on “the medium is the message”?", a: "Wholly wrong: the message is the message, though the medium can influence it. Ogilvy: it's what you say, not how you say it." }
      ]
    },
    {
      id: "og-04e",
      part: "p2",
      chapter: 4,
      chapterTitle: "The Digital Ecosystem · The Coming War: YouTube and Facebook in Video",
      pages: "77–81",
      title: "The Coming War: ephemeral vs archival video, and stopping the thumb",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 4 · The Digital Ecosystem · The Coming War: YouTube and Facebook in Video · PDF pp. 77–81", who: "Miles Young" }],
      quotes: [
        { text: "We like to say content that works on Facebook “stops the thumb”.", page: "80" },
        { text: "Creators are in love with ephemeral.", page: "80" }
      ],
      idea: `Young and a senior client spent one day visiting Google and then Facebook: "like visiting Athens and Sparta in the same day". For Rob Davis, who ran Ogilvy's video practice, it confirmed a battle was coming, and gave him a useful split:

- **Ephemeral networks** (Facebook, Instagram, Snapchat, Periscope) get maximum impact *in the moment*. They're built for interaction; video is one feature among many; they have little search value. This category was growing fast.
- **Archival networks** (YouTube, Vimeo, DailyMotion) are built for *watching*. They host and organize video, have huge search impact and are the go-to place when someone looks for a video.

**How Facebook "caught up".** In late 2014 YouTube claimed 4 billion views a day and Facebook about a quarter of that. By YouTube's tenth birthday (February 2015) Facebook claimed parity. The jump came from a technical tweak, not a surge of viewers: **auto-play** videos started as you scrolled past, and Facebook counted that as a view, while YouTube only counted a click on play. Views doubled overnight. *Always ask how a metric is defined.*

**YouTube's maturity.** It changed identity every 18–24 months (content platform? social network? interactive hub?) before settling on a standard viewing experience funded by pre-roll ads and the ad-free YouTube Red. Its cultural relevance comes from creators like PewDiePie and The Young Turks network (PDF 79), plus music videos.

**What digital adds at its best** (the box on PDF 79): issue framing; intensity, leading to advocacy; buzz and word of mouth; topicality; participation; engagement.

**Thumb-stopping.** Facebook is a scroll. Content has to stop the thumb, and Facebook also wants the message delivered *even if nobody chooses to watch*. Thumbnails are "the book covers of online video" (FullScreen's phrase). Outside Facebook, best practice says thumbnails should grab attention, honestly show what's inside, and avoid products and logos, because people skip what looks like an ad. Facebook advised the opposite: **product imagery and text**, because anyone who slows down to read triggers auto-play, which counts as a view.

**What's next.** Vine's short loops and live streaming (Periscope, Facebook Live) pulled attention further toward ephemeral; YouTube and Facebook both added live. Creators still use YouTube, but more as their **library and search target**; the sharing happens elsewhere. If Facebook builds a full video library, YouTube loses its one big advantage.`,
      keyPoints: [
        "Ephemeral networks (Facebook, Instagram, Snapchat) win in the moment; archival ones (YouTube) win in search and as a library.",
        "Facebook “doubled” video views by counting auto-play as a view: always check how a metric is defined.",
        "On scrolling feeds, content must stop the thumb, and the message should land even if nobody presses play.",
        "Thumbnails are the book covers of video; YouTube wisdom avoids logos, Facebook advises product and text.",
        "What digital adds at its best: issue framing, intensity (advocacy), buzz, topicality, participation, engagement."
      ],
      why: "PMT needs both kinds of video: feed videos whose first frame says something with the sound off, and an archival YouTube library that answers searches like “what happens in a motorcycle class”.",
      example: {
        title: "PMT: one shoot, ephemeral and archival cuts",
        before: "One 60-second video that opens on a 5-second logo animation, posted unchanged to Instagram, Facebook and YouTube.",
        after: "**Feed cut (ephemeral):** first frame is a student mid-turn through the cones with on-screen text “Never ridden? This is Day 1.” The message lands even if they never press play; 15–20 seconds total.\n**YouTube cut (archival):** a 6-minute walkthrough titled “What happens in a beginner motorcycle class (Sacramento)”, with an honest thumbnail of the range and students, chaptered by morning, lunch, afternoon.",
        body: "Same footage, two jobs: stop the thumb in the feed, answer the search on YouTube."
      },
      practice: [
        { prompt: "Dissect it: sort the platforms and the metrics.", fields: ["Explain ephemeral vs archival in your own words, and put each platform PMT uses into one bucket.", "Why did it matter how Facebook counted a “view”? Which Meta metric today could fool you the same way?", "Argue the other side: when should a thumbnail show the product and logo?"] },
        {
          prompt: "Apply it: plan one PMT video as two assets, a thumb-stopping feed version and an archival YouTube version.",
          fields: ["Feed: first frame + on-screen text (lands with no play)", "Feed: length and payoff", "YouTube: search title + thumbnail", "Which of the six “digital adds” each one uses"],
          rubric: ["The feed first frame says the message without sound or a tap", "The feed cut is short with a payoff before the drop-off", "The YouTube title matches what people actually search", "The thumbnail is honest about the content"],
          model: "Feed: first frame = a nervous student's face under the helmet, text “Day 1: never touched a clutch.” Cut to Day 2: same student leaning confidently through a turn, text “Day 2.” End card: “Beginner classes · bikes provided.” 12 seconds. Uses intensity and participation (comment prompt: “What would you be most nervous about?”). YouTube: “Motorcycle class for total beginners: what to expect (Sacramento)”, thumbnail of the range with students on bikes and the words “DAY 1”. Uses issue framing and engagement."
        }
      ],
      today: { task: "Screenshot the first frame of PMT's last 5 videos with the sound off. Would each one stop a thumb and say something without being played? Rewrite the on-screen text for the two weakest.", output: "Five screenshots marked pass/fail plus two rewritten text overlays.", minutes: 15 },
      check: [
        { q: "What's the difference between ephemeral and archival video networks?", a: "Ephemeral (Facebook, Instagram, Snapchat, Periscope) maximize impact in the moment and interaction, with little search value; archival (YouTube, Vimeo, DailyMotion) are built for watching, with strong search and a library role." },
        { q: "How did Facebook's video views suddenly match YouTube's?", a: "Auto-play: Facebook counted videos that started as people scrolled past as views, while YouTube counted only clicks on play." },
        { q: "Why did Facebook recommend product imagery and text in thumbnails?", a: "Anyone who slows their scroll to read or look triggers auto-play, which counts as a view." }
      ]
    },
    {
      id: "og-04f",
      part: "p2",
      chapter: 4,
      chapterTitle: "The Digital Ecosystem · 5 lessons for leaders in the digital age",
      pages: "81",
      title: "5 Lessons for Leaders: ask why, and distrust the single KPI",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 4 · The Digital Ecosystem · 5 lessons for leaders in the digital age · PDF p. 81", who: "Miles Young" }],
      quotes: [
        { text: "Treat all KPIs (Key Performance Indicators) with caution, and the singular KPI with as much reserve as a plague spore.", page: "81" },
        { text: "Playing your cards close to your chest has become a loser’s stratagem.", page: "81" }
      ],
      idea: `However fast the ecosystem changes, Young says the essence of leadership doesn't change at all. What changes is the noise: hype, novelty and obfuscation can overwhelm you. After 20 years of driving a digital agenda, he boils it down to five habits he doesn't think any business school teaches:

1. **Keep asking "but why?"**, insistently, like a curious five-year-old. "Why" is the only word that cuts through the fog, finds the real problem, and separates the **means from the end**. (He even runs training called "The Power of Why".) A client who says "we need TikTok" has named a means; three "whys" later you find the end, say, more weekday bookings.
2. **Don't fetishize certainty.** Digital gives you a flood of measures; that doesn't make them useful. Treat every KPI with caution and a **single KPI** like a plague spore: it can infect a whole organization with distorted priorities. (Think back to Facebook's auto-play "views" on PDF 78.)
3. **Programme yourself for total openness.** Digital is a chance to break down internal silos, and you need a wider range of attitudes collaborating than ever before. Hoarding information is now a losing strategy.
4. **Avoid the divas when hiring.** They're everywhere, they dazzle, and then they disappoint. One of his clients put it bluntly: talent is a commodity; only **perseverance** differentiates. Graduates gasp when he repeats it, but he thinks it's truer than ever.
5. **Relish dualism.** Digital tensions push people into zero-sum games. Success lies in **managing the tension** rather than clinging to "either" or "or", and it's more fun. This is the Age of And (PDF 77) turned into a personal habit.

Read together, the five are a defence against the main digital disease Young has described all chapter: mistaking activity and metrics for results, and specialists' silos for strategy. They apply just as well to a two-person agency as to Ogilvy & Mather, because a small agency is even more exposed to a bad hire or a misleading number.`,
      keyPoints: [
        "Ask “but why?” repeatedly to separate the means (a channel, a format) from the end (the business result).",
        "Don't fetishize certainty: be cautious with all KPIs and very wary of a single KPI.",
        "Be radically open: break silos and bring in a wider range of attitudes.",
        "Hire for perseverance, not dazzle: avoid divas.",
        "Relish dualism: manage tensions instead of forcing either/or choices."
      ],
      why: "Zach is building ZDub: these are the habits for how he scopes client work (ask why), reports results (no single KPI), and hires editors or assistants (perseverance over polish).",
      example: {
        title: "ZDub client report: one KPI vs a balanced view",
        before: "Report headline: “Cost per lead down 40% this month!”",
        after: "Report headline: “23 seats booked (+6 vs last month), $4,600 in class revenue.”\nUnderneath: cost per lead down 40%, but lead-to-booking rate fell from 30% to 18% because the form got easier. Next step: add one qualifying question (“Which weekend works?”) and track show-up rate.",
        body: "The “before” celebrates a single KPI that hides a problem. The “after” leads with the end (booked seats, revenue), then uses several measures to explain the why."
      },
      practice: [
        { prompt: "Dissect it: hold the five lessons up to your own work.", fields: ["Which of the five do you find hardest, and why?", "Run “but why?” five times on one goal you have this month. Where did you end up?", "When is a single KPI actually useful?"] },
        {
          prompt: "Apply it: design ZDub's monthly client scorecard so no single KPI can mislead.",
          fields: ["The business outcome at the top", "2–3 supporting metrics", "The “why” question you'll answer every month", "What you'll do when the metrics disagree"],
          rubric: ["Leads with a business outcome (bookings, revenue), not a media metric", "Supporting metrics can expose each other's blind spots", "Includes an explicit “why” explanation", "Has a rule for conflicting signals"],
          model: "Top: booked seats and class revenue vs last month. Supporting: cost per lead, lead-to-booking rate, show-up rate. Why question: “What changed this month and why do we think it did?” Conflict rule: if cost per lead improves but booking rate drops, we fix lead quality before scaling spend."
        }
      ],
      today: { task: "Write ZDub's “anti-diva” hiring filter: three interview questions or a small paid test task that reveals perseverance (how someone handles revision rounds and a boring repetitive job), not just portfolio polish.", output: "Three questions or one test task, saved in ZDub's hiring notes.", minutes: 20 },
      check: [
        { q: "Why does Young value the question “why?” so much?", a: "It cuts through the fog, gets to the real problem, and separates the means from the end." },
        { q: "How should leaders treat a single KPI?", a: "With as much reserve as a plague spore: it can distort the whole organization's priorities." },
        { q: "What does “relish dualism” ask you to do?", a: "Manage the tensions of digital instead of clinging to either/or, zero-sum choices." }
      ]
    },
    {
      id: "og-04g",
      part: "p2",
      chapter: 4,
      chapterTitle: "The Digital Ecosystem · Dove",
      pages: "81–85",
      title: "Dove: you care, you share (Evolution, Real Beauty and Sketches)",
      minutes: 9,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 4 · The Digital Ecosystem · Dove (case study) · PDF pp. 81–85", who: "Miles Young" }],
      quotes: [
        { text: "You care, you share.", page: "83" },
        { text: "Dove doesn’t prey on women’s anxieties, it voices them.", page: "85" }
      ],
      idea: `Young's first full case study is the one that proves his chapter: a great digital idea is just a great idea, rooted in the brand.

**Tim Piper.** A young Australian in Ogilvy's Toronto office, more film director than copywriter. In 2005 he wrote and directed **Broken Escalator** for Becel margarine: an escalator stops and its unfit passengers scream for help instead of walking. He cut a longer version; a creative director told him about "this thing called YouTube"; it got 50,000 views almost at once.

**Evolution.** The next year the agency got an open brief to amplify Dove's Campaign for Real Beauty. Tim pitched several emotional short films. The client preferred the others, because **Evolution** seemed slightly off-brief, but Tim felt it had "some freak visual factor" that would make people share it. There was no budget, so he made it on the back of another shoot (with director Yael Staav and producer Brenda Surminski, and telling the client), calling in favours from a photographer, a make-up artist, a post house, and his girlfriend as the model. The client loved it. It went up with **no distribution plan and no research testing**, and it simply "went". The caption's numbers: **$1.2 billion** added to brand value, **$500 million** in revenue. Young credits creative directors Janet Kestin and Nancy Vonk, who let people pitch whatever they were passionate about. The lesson: find something with **visual resonance that captures the brand's values concretely**, and people won't just notice, they'll care, and caring is what makes people share.

**The Big IdeaL behind it.** David Ogilvy helped Lever Brothers launch Dove in 1957 as a moisturising beauty bar, not a squeaky-clean soap. In the early 2000s the brief was to turn one product into a portfolio. Ogilvy's answer was a cultural point of view (previewing Chapter 6): *Dove believes the world would be a better place if women were allowed to feel good about themselves.* The insight: **98% of women** weren't happy with how they looked, so Dove set out to make beauty a source of confidence, not anxiety.

**Re-digging the insight.** By the early 2010s "real women" were everywhere and the idea was no longer disruptive. New research went a layer deeper: 96% still disliked their looks, but now the cause was the **inner critic**: 54% said they were their own worst critic, and a third said their biggest anxiety was the pressure they put on themselves. That produced **Real Beauty Sketches** (2013), followed by Patches (2014) and Choose Beautiful (2015), one "hero" film each spring: 14 billion impressions, over $90 million in earned media, mostly digital. Dove is now worth over $5 billion, with 40%+ of brand value attributed to advertising, and its econometrics ruled out price, the economy, distribution and media spend as the source of growth.

The point imitators miss: Dove **voices** women's anxieties and turns them into a cause women unite around; it never preys on them.`,
      keyPoints: [
        "Evolution was made on favours, never tested and posted with no media plan, yet added $1.2B in brand value: visual resonance plus brand values gets shared.",
        "Creative culture matters: Evolution happened because creative directors let people pitch passion projects.",
        "Dove's Big IdeaL: the world would be better if women were allowed to feel good about themselves.",
        "Keep re-digging the insight: from unrealistic beauty ideals (98% unhappy) to the inner critic (54% their own worst critic).",
        "An annual “hero” film (Sketches, Patches, Choose Beautiful) kept the idea fresh: 14B impressions, $90M+ earned media.",
        "Voice your audience's anxieties; never prey on them."
      ],
      why: "PMT's buyers have a real anxiety (dropping the bike, looking foolish, getting hurt). Dove shows how to voice that fear honestly, so people share it, instead of using fear to sell.",
      example: {
        title: "PMT: voice the fear, don't exploit it",
        before: "“Scared you'll crash? Don't risk your life. Take our class before it's too late!”",
        after: "A short film: on the morning of day one, five new students answer “What are you most nervous about?” (stalling in front of everyone, dropping the bike). On day two, we watch each one do exactly that thing well. End card: “Everyone starts nervous. Nobody finishes that way.”",
        body: "The “before” preys on anxiety. The “after” voices it, shows the change, and makes PMT the place where the fear gets handled, which is Dove's move."
      },
      practice: [
        { prompt: "Dissect it: take the Dove story apart.", fields: ["What made Evolution shareable, in Young's words? Say it in one sentence.", "How did Dove's insight change between the first Real Beauty work and Sketches, and why did it have to?", "Where is the line between voicing an anxiety and preying on it?"] },
        {
          prompt: "Apply it: recreate the Real Beauty Sketches pattern for PMT, a two-perspective reveal that shows new riders they're better than they think.",
          fields: ["The self-critical belief", "Perspective 1 (how they see themselves)", "Perspective 2 (how an expert or stranger sees them)", "The reveal moment", "End line"],
          rubric: ["Built on a real insight (ask actual students, don't guess)", "The contrast is shown, not told", "Voices the anxiety with empathy, no fear-selling", "Ends on a line that reframes the brand's role"],
          model: "Insight: after day one most students rate themselves a 2 or 3 out of 10. Perspective 1: on camera, each student rates their own riding and describes their worst moment. Perspective 2: the instructor who watched them all day rates them and describes their best moment, without hearing the student's answer. Reveal: the two scores side by side on a card (Student: 3 · Instructor: 7), with the student's reaction. End line: “You ride better than you think.” + PMT logo."
        }
      ],
      today: { task: "Text or DM 5 recent PMT students: “What were you most nervous about before class, and what surprised you?” Save their exact words.", output: "Five verbatim answers to use as insight and copy.", minutes: 20 },
      check: [
        { q: "What did Evolution add to Dove, according to the caption?", a: "$1.2 billion in brand value and $500 million in revenue." },
        { q: "Complete Dove's Big IdeaL: “Dove believes the world would be a better place if…”", a: "“…women were allowed to feel good about themselves.”" },
        { q: "What deeper insight led to Real Beauty Sketches?", a: "The problem had become women's inner critic: 54% considered themselves their own worst critic." }
      ],
      examples: [
        {
          id: "og-ex-becel-broken-escalator",
          title: "Becel “Broken Escalator”",
          brand: "Becel", agency: "Ogilvy & Mather Toronto", year: "2005",
          format: "TV spot",
          pdfPage: 82,
          what: "A 30-second commercial for Becel margarine written and directed by Tim Piper. An escalator full of commuters stops, and instead of simply walking up, the out-of-shape passengers panic, stranded, and scream for help. Piper then shot a longer version, which was posted on YouTube and got 50,000 views almost immediately; that early success is what led him to Dove's Evolution.",
          idea: "Exaggerate a small, recognizable truth (we've stopped moving) into absurd comedy, so a heart-health brand makes its point without lecturing.",
          elements: [
            { n: 1, name: "Everyday setting", detail: "An escalator: something everyone uses without thinking.", principle: "Start from a familiar moment" },
            { n: 2, name: "Absurd exaggeration", detail: "Passengers act trapped by a stopped escalator, as if stairs were impossible.", principle: "Humour makes the point memorable" },
            { n: 3, name: "Truth underneath", detail: "We've become so inactive that the joke is uncomfortably close to real.", principle: "Insight first, then entertainment" },
            { n: 4, name: "Longer web cut", detail: "An extended version found its own audience on YouTube with no media plan.", principle: "Digital as an extension of a good idea, not a silo" }
          ],
          beats: [
            { n: 1, label: "Commuters ride an escalator, absorbed in their own world" },
            { n: 2, label: "It jolts to a stop; nobody moves" },
            { n: 3, label: "Panic: passengers call and scream for help instead of walking" },
            { n: 4, label: "The joke lands on the brand's health point" },
            { n: 5, label: "A longer cut goes up on YouTube: 50,000 views almost at once" }
          ],
          recreate: {
            brief: "Take a tiny everyday behaviour your product solves, exaggerate it until it's absurd, and let viewers connect the dots to the product themselves.",
            fields: [
              { id: "truth", label: "The small truth", hint: "PMT: people who've “wanted to ride for years” and never started" },
              { id: "setting", label: "Everyday setting", hint: "Garage, office, DMV line, driveway" },
              { id: "exaggeration", label: "The absurd exaggeration", hint: "A dusty bike with a 2014 calendar still on the wall" },
              { id: "link", label: "How the product resolves it", hint: "One line or one final shot" },
              { id: "longcut", label: "Longer web cut idea", hint: "What extra scenes make a 60–90s version" }
            ],
            steps: [
              "Write the small truth in one sentence, then list 5 ways to exaggerate it; pick the funniest that's still recognizable.",
              "Script a 20–30 second version with no dialogue or one line; the visual has to carry the joke.",
              "Shoot on iPhone with friends or real customers (garage or driveway for PMT).",
              "Edit in CapCut: build to the absurd peak, then cut to the product line and logo.",
              "Make a longer cut with extra beats for YouTube and Facebook, and a 9:16 cut for Reels."
            ]
          }
        },
        {
          id: "og-ex-dove-evolution",
          title: "Dove “Evolution”",
          brand: "Dove", agency: "Ogilvy & Mather Toronto", year: "2006",
          format: "Online film",
          pdfPage: 82,
          what: "A time-lapse online film. An ordinary young woman sits under studio lights; hair, make-up and lighting transform her; she's photographed; then the photo is pulled into image-editing software and reshaped (the still in the book shows her face beside an editing toolbar) until she becomes a flawless billboard model. Made on a shoestring with Tim Piper's girlfriend as the model, it launched with no media plan and became one of the internet's first branded viral hits.",
          idea: "Show, in one continuous visual, how manufactured “beauty” is; the transformation does all the arguing.",
          elements: [
            { n: 1, name: "Visual resonance", detail: "Tim Piper's “freak visual factor”: something people can't stop watching.", principle: "Visual resonance + brand values = sharing" },
            { n: 2, name: "One continuous transformation", detail: "Time-lapse compresses hours of styling and retouching into a single, unbroken reveal.", principle: "Demonstration beats assertion" },
            { n: 3, name: "Brand value made concrete", detail: "Real Beauty's argument (beauty ideals are fake) becomes something you can see.", principle: "Big IdeaL expressed in action" },
            { n: 4, name: "Shoestring craft", detail: "Made off the back of another shoot, with favours and a friend as talent.", principle: "Ideas, not budgets, travel" },
            { n: 5, name: "Shared, not bought", detail: "No distribution plan, no testing: it spread because people cared.", principle: "You care, you share" }
          ],
          beats: [
            { n: 1, label: "Ordinary woman in a chair under plain light" },
            { n: 2, label: "Time-lapse: hair, make-up and lights transform her" },
            { n: 3, label: "Photo shoot" },
            { n: 4, label: "On screen, editing software stretches and reshapes the photo" },
            { n: 5, label: "The finished image appears on a billboard" },
            { n: 6, label: "Dove sign-off; viewers share it" }
          ],
          recreate: {
            brief: "Find one visual process that exposes the gap between appearance and reality in your category, and show it start to finish in a single, mostly wordless time-lapse.",
            fields: [
              { id: "myth", label: "The category myth", hint: "PMT: “riders are born fearless”; roofer: “a new roof is just shingles”" },
              { id: "process", label: "The real process to reveal", hint: "What actually happens between before and after" },
              { id: "timelapse", label: "How you'll compress it", hint: "One locked-off camera, one day or one job" },
              { id: "reveal", label: "The final reveal", hint: "The moment the gap becomes obvious" },
              { id: "signoff", label: "Sign-off line", hint: "One line that states the brand's belief" }
            ],
            steps: [
              "Pick a process that has a clear visual “before” and “after” (a student's day, a roof tear-off, a detail job).",
              "Lock an iPhone on a tripod and shoot in time-lapse mode for the whole process.",
              "Add 2–3 close-up inserts of the key moments to cut in.",
              "Edit in CapCut to 30–45 seconds, mostly music, no voiceover.",
              "Finish on one line of text with the brand's belief, then the logo.",
              "Post organically first; boost only if people are sharing and commenting."
            ]
          }
        },
        {
          id: "og-ex-dove-sketches-inner-critic",
          title: "Dove “Real Beauty Sketches”",
          brand: "Dove", agency: "Ogilvy & Mather", year: "2013",
          format: "Online film",
          pdfPage: 84,
          what: "A forensic sketch artist, sitting behind a curtain, draws women purely from their own descriptions of their faces. He then draws each woman again from a description by a stranger who met her briefly. The two portraits are hung side by side (the still shows a woman standing beside her pair of sketches) and the stranger's version is consistently lighter, more open and closer to reality. The book calls it the most shared ad ever and one of the most watched videos of all time.",
          idea: "Make the inner critic visible: two drawings of the same face prove you are more beautiful than you think.",
          elements: [
            { n: 1, name: "Researched insight", detail: "54% of women called themselves their own worst critic: the film is built on that number.", principle: "Re-dig the insight when the old one goes stale" },
            { n: 2, name: "Experiment format", detail: "Real women, a real artist, a real process; no actors delivering lines.", principle: "Show, don't tell" },
            { n: 3, name: "Side-by-side reveal", detail: "Two portraits of one face: the self-description vs the stranger's.", principle: "Contrast as proof" },
            { n: 4, name: "Emotional reaction", detail: "The women's faces as they see the difference carry the film.", principle: "Emotion drives sharing" },
            { n: 5, name: "Annual hero slot", detail: "Launched as the spring “hero” film, followed by Patches (2014) and Choose Beautiful (2015).", principle: "Keep the Big IdeaL fresh with a yearly expression" }
          ],
          beats: [
            { n: 1, label: "Women describe their own faces to an artist they can't see" },
            { n: 2, label: "Strangers who met them briefly describe the same women" },
            { n: 3, label: "The artist draws both versions" },
            { n: 4, label: "Portraits hung side by side" },
            { n: 5, label: "Each woman sees the pair and reacts" },
            { n: 6, label: "The message: you are more beautiful than you think" }
          ],
          recreate: {
            brief: "Put your audience's harsh self-judgement next to a kinder, expert outside view, and let a side-by-side reveal close the gap.",
            fields: [
              { id: "insight", label: "The self-critical belief", hint: "Ask real customers; quote them" },
              { id: "selfview", label: "How they see themselves", hint: "A rating, a description, a drawing" },
              { id: "outsideview", label: "How an expert or stranger sees them", hint: "Instructor, inspector, other customers" },
              { id: "method", label: "How you capture both", hint: "Separately, so neither hears the other" },
              { id: "reveal", label: "The reveal", hint: "Side-by-side card, split screen" },
              { id: "line", label: "End line", hint: "“You ___ better than you think.”" }
            ],
            steps: [
              "Interview 5 real customers about how they rate themselves; pick the most common harsh belief.",
              "Film each person's self-assessment alone, then the expert's assessment alone, same questions.",
              "Make the reveal physical: printed score cards, two photos, two drawings.",
              "Film the reaction in one take, close-up; don't direct it.",
              "Edit in CapCut to 60–90s for YouTube/Facebook and 30s for Reels.",
              "Publish as a yearly “hero” piece, and use the reactions as stills for ads."
            ]
          }
        }
      ]
    },
    {
      id: "og-05a",
      part: "p2",
      chapter: 5,
      chapterTitle: "To Be or Not to Be a Millennial · Labels, calumnies and fantasies",
      pages: "86–89",
      title: "To Be or Not to Be a Millennial: labels are easy, people aren't",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 5 · To Be or Not to Be a Millennial · PDF pp. 86–89", who: "Miles Young" }],
      quotes: [
        { text: "The thing about labels is that we use them because they are easy.", page: "86" },
        { text: "They actually tend towards altruism – much more caring and giving to those less fortunate than their elders were.", page: "87" }
      ],
      idea: `Pundits and marketers talk about Millennials as one tribe changing the world, and Young admits he's been as guilty as anyone. His chapter is a warning about **labels**: we use them because they're easy, not because they're true.

**The alphabet.** Generation X, then Y (Millennials, roughly 18–34 when he wrote), then Centennials or Gen C (born after 2000, the real "digital natives"), and, he jokes, Gen S for older people (the letters on PDF 86). Each cohort differs in some ways, but the insults Gen X used about Gen Y are the same ones Gen S once used about Gen X. What *is* distinctive is timing: Millennials grew up alongside the digital revolution, though the older ones started on CD Walkmans and dial-up.

**There's no such thing as "a Millennial".** Ogilvy's own presentations on the subject start by denying the group exists. Millennials are **38.1% of the world's population**; Pakistan's 99 million and America's 91 million have little in common, and even inside the US the gap between rich and poor Millennials is huge.

**The "narcissism calumny".** The early portrait (the TIME "Me Me Me Generation" cover on PDF 87) was of a self-obsessed, impulsive, entitled generation. The research behind it was widely criticized, and Ogilvy's own research found **the opposite**: Millennials lean toward altruism, care more for people than things, and save more than Gen X, patiently waiting for the right "point of readiness" to buy a home. Centennials go further: less about fun, less risk-taking, already worried about the future and the environment.

**What really is different**, at least in America, comes from circumstances: being young when the good times are running out. They're less likely to own homes, use credit cards, buy or drive cars, or marry at their parents' age; more likely to share, value diversity and believe all lives matter.

**The second fallacy** is the opposite fantasy: that Millennials will usher in a utopia of no work, home-grown vegetables and communal bliss. That's built on minor trends like "Normcore" (dressing in plain chain-store basics), which won't destroy the fashion industry. (Young notes drily that he wore second-hand clothes for years without starting a Second Coming.)

**Work.** Millennials do want more from work: sideways moves, path changes, links to personal interests, breaks. The chart on PDF 89 swaps the career ladder for **snakes and ladders**. It's harder to manage but more civilized. Still, hierarchy isn't being abolished; the system adapts, if it's intelligent enough.`,
      keyPoints: [
        "Generational labels are convenient, not true; use them only if they improve understanding.",
        "Millennials are 38.1% of the world: Pakistan's 99 million and America's 91 million have little in common.",
        "The “narcissism” story is a myth; Ogilvy's research found Millennials more altruistic and more frugal than their parents.",
        "Real differences come from circumstances: fewer homes, cars and credit cards, later marriage; more sharing and valuing diversity.",
        "Avoid the opposite fantasy too: Millennials are not ushering in a utopia.",
        "At work they want fulfilment and sideways moves (snakes and ladders), but organizations adapt rather than abandon hierarchy."
      ],
      why: "Local ads often target “millennials” or “boomers” by age band. Young's point pushes ZDub to target situations and motivations (first bike, commute costs, returning rider, gift buyer), which is also how broad Meta targeting performs best.",
      example: {
        title: "PMT: from age labels to real situations",
        before: "Ad: “Hey millennials! Ditch the car and ride!” Audience: ages 25–40.",
        after: "Three motivation-led ads, all running to one broad audience:\n- “Commute eating your paycheck? See what riding saves you.”\n- “Rode years ago? Get your skills, and your confidence, back.”\n- “Always wanted to ride but never touched a bike? Start here.”",
        body: "The “before” bets on a stereotype. The “after” speaks to situations people of any age are in, and lets the ad itself find the right people."
      },
      practice: [
        { prompt: "Dissect it: separate the label from the people.", fields: ["What's the “narcissism calumny”, and what evidence does Young use against it?", "Which of the real Millennial differences (fewer cars, more sharing, frugality) actually matter for PMT's business?", "When is a generational label genuinely useful?"] },
        {
          prompt: "Apply it: rewrite one ZDub or PMT audience from an age label into a situation and motivation, and write the ad's first line for it.",
          fields: ["Old audience description (age-based)", "The real situation", "Their motivation, in their own words", "The ad's first line"],
          rubric: ["Describes a situation, not an age band", "Uses language real customers use (reviews, calls, DMs)", "Avoids both stereotypes: the cynical and the utopian", "The first line would stop exactly this person"],
          model: "Old: “Women 35–54.” Situation: a parent whose kids are now teenagers, who rode on the back of a bike years ago and always wanted to drive one. Motivation (from a review): “I finally did something for me.” First line: “Kids can drive themselves now. Your turn.”"
        }
      ],
      today: { task: "Pull PMT's last 20 registrations or Google reviews. Tag each by situation (first-timer, commuter, returning rider, gift, couple or friends, license-required). Count which situations dominate.", output: "A tally of situations with one quote for each.", minutes: 25 },
      check: [
        { q: "What share of the world's population are Millennials, per Young?", a: "38.1%." },
        { q: "What did Ogilvy's own research find about Millennial character?", a: "The opposite of the narcissism story: they tend toward altruism and care more for people than things; they're also more frugal than Gen X." },
        { q: "What image replaces the career ladder in the chart on PDF 89?", a: "Snakes and ladders: sideways shifts, sabbaticals, testing roles, changing careers, climbing on your own terms." }
      ]
    },
    {
      id: "og-05b",
      part: "p2",
      chapter: 5,
      chapterTitle: "To Be or Not to Be a Millennial · Connectivity and digital natives",
      pages: "89–92",
      title: "Digital Natives: connectivity is a variable, not a constant",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 5 · To Be or Not to Be a Millennial · connectivity and segmentation · PDF pp. 89–92", who: "Miles Young" }],
      quotes: [
        { text: "connectivity is not a constant; rather, it is a variable that manifests itself in different ways for different people.", page: "91" },
        { text: "“It’s leading edge or it just doesn’t matter” is a dangerous default option in digital advertising as much as it is in analogue advertising.", page: "92" }
      ],
      idea: `Many claims about Millennials are really claims about **technology**. Here's the crux, says Young: we've **conflated the digital revolution with generational change**. Are they the same thing?

**In one sense, yes.** The revolution's great gift is connectivity, and Millennials (and even more, Centennials) got the biggest dose. Phones matter so much that losing one produces a recognizable anxiety: we all feel it; they feel it worse. His favourite statistics come from a 2016 AT&T online survey of 2,000 Americans asked what they'd give up rather than lose the internet for life: **40% would rather lose the sight in one eye, and 30% would rather lose a finger.** The infographic on PDF 91 runs the full list: most people would give up chocolate, while only about one in six would give up human interaction.

**But connectivity breeds dependence and multitasking, not uniformity.** Young has "not seen a shred of evidence" that everyone responds to technology the same way.

**Treat segmentations with caution.** Demographic segmentation studies "can often be soulless affairs": they shed light, but they tempt you to believe their segments are real people. The few serious studies on digital behaviour all invent different labels (Techno-sploiters, Mouse Potatoes, Techno-gamers, Gadget Grabbers), yet some conclusions are safe:
- Humanity has **no common set of attitudes** toward technology.
- **Technophobia is falling, but techno-indifference is rising.** Not being scared of tech doesn't mean caring about it.
- Even digital natives differ by how socially engaged they are: **connectivity is a variable**, not a constant.
- "Leading edge" is a fine *means* for pushing boundaries but a dangerous *end*: if "it's leading edge or it doesn't matter" becomes your default, it controls your thinking.

**Centennials prove it.** They use social media differently from Millennials: less Facebook, more small, private ecosystems such as Snapchat.

The practical lesson sits in that "techno-indifference" line. A big slice of any market simply doesn't care about the newest channel. They want the easy, familiar path, and marketers who assume everyone is a digital enthusiast lose them.`,
      keyPoints: [
        "Don't confuse the digital revolution with a generation: everyone got connectivity, the young just got it hardest.",
        "AT&T's 2016 survey: 40% would give up sight in one eye and 30% a finger rather than lose the internet.",
        "Segmentation labels can shed light, but segments are not real people.",
        "Technophobia is falling, yet techno-indifference is rising; connectivity varies person to person.",
        "“Leading edge” is a useful means and a dangerous end.",
        "Centennials prefer small, private ecosystems (Snapchat) to Facebook."
      ],
      why: "The trap for ZDub is assuming every prospect wants the newest channel or tool. Many PMT buyers and most trade-business customers are techno-indifferent: give them simple, familiar paths (call, text, a short form) alongside the digital ones.",
      example: {
        title: "PMT booking paths for the techno-indifferent",
        before: "The only way to book: a 6-step online widget that requires creating an account.",
        after: "Every ad and page offers three equal paths: “Book online in 60 seconds” · “Text CLASS to (number)” · “Call: a real person answers”. Anyone who starts booking but doesn't finish gets a friendly text within the hour.",
        body: "Connectivity is a variable: some people will book on a phone at midnight, others want to ask a human first. Serve both."
      },
      practice: [
        { prompt: "Dissect it: pull technology and generation apart.", fields: ["What's the difference between technophobia and techno-indifference? Which do you see in local business owners?", "Why does Young distrust segmentation studies yet still use their conclusions?", "Argue the other side: when is “leading edge” the right default?"] },
        {
          prompt: "Apply it: recreate the AT&T “Would you rather…?” pattern for PMT as a survey-based post (or carousel) built on real answers from your audience.",
          fields: ["The thing people would hate to give up", "6–8 escalating trade-offs", "How you'll collect real answers (Story polls, email survey)", "The brand payoff line"],
          rubric: ["Uses real answers, not invented percentages", "Trade-offs escalate from easy to absurd", "Scannable: one row per trade-off with bars", "The payoff ties the finding back to the product"],
          model: "Headline: “Would you rather give up ___ or never ride again?” Trade-offs (run as 8 Instagram Story polls to followers and past students): coffee, your favourite TV show, air conditioning in August, your phone for a weekend, your car, dessert for a year, your gym, your Sunday sleep-in. Carousel: one bar chart per slide with the real split. Payoff: “Riders don't give it up. Become one: beginner classes every weekend.”"
        }
      ],
      today: { task: "Run four Instagram Story polls for PMT this week: “Would you rather give up ___ or never ride again?” Screenshot the results when they close.", output: "Four poll results to use as content and as an audience read.", minutes: 15 },
      check: [
        { q: "What did the 2016 AT&T survey find?", a: "Rather than lose the internet for life, 40% would give up sight in one eye and 30% a finger." },
        { q: "Is techno-indifference rising or falling, according to Young?", a: "Rising, even as technophobia falls." },
        { q: "How do Centennials use social media differently from Millennials?", a: "They use Facebook less and prefer small, more private ecosystems like Snapchat." }
      ],
      examples: [
        {
          id: "og-ex-att-would-you-rather",
          title: "AT&T Internet “Would you rather…?” survey graphic",
          brand: "AT&T", agency: "", year: "2016",
          format: "Social post",
          pdfPage: 91,
          what: "A dark, neon-styled infographic built from AT&T's 2016 survey. A phone icon and the headline “Would you rather…?” sit at the top; two column headers set up the choice: give up a thing, or give up the internet. Rows run from chocolate (most would give it up) through sight in one eye, all your hair, a finger, sense of taste, your dream job and love, down to human interaction, each with a pair of percentage bars in blue and lime. At the bottom, a round badge riffs on “Keep calm” (“Keep calm, your internet's on”) above the AT&T Internet logo.",
          idea: "Turn your product's value into a game: show what people would sacrifice rather than lose it.",
          elements: [
            { n: 1, name: "Question headline", detail: "“Would you rather…?” invites the reader to play along before they've read a single number.", principle: "Participation (what digital adds at its best)" },
            { n: 2, name: "Either/or frame", detail: "Every row is the same choice: the thing, or the internet. One rule, instantly understood.", principle: "Simplicity" },
            { n: 3, name: "Escalating trade-offs", detail: "From chocolate to a finger to human interaction: each row raises the stakes and the shock.", principle: "Build to a peak" },
            { n: 4, name: "Real survey data", detail: "Percentages from 2,000 respondents give it news value and credibility.", principle: "Facts make it shareable and quotable" },
            { n: 5, name: "Brand payoff badge", detail: "A meme riff (“Keep calm…”) turns the data into a reassurance from the brand.", principle: "Tie the finding back to the product" }
          ],
          layout: { aspect: "10:9", boxes: [
            { n: 1, label: "“Would you rather…?”", x: 20, y: 4, w: 50, h: 9 },
            { n: 2, label: "Give up ___ OR give up the internet", x: 18, y: 13, w: 74, h: 6 },
            { n: 3, label: "Trade-off rows", x: 12, y: 22, w: 30, h: 54 },
            { n: 4, label: "Percentage bars", x: 42, y: 22, w: 50, h: 54 },
            { n: 5, label: "“Keep calm” badge + AT&T Internet", x: 38, y: 79, w: 24, h: 19 }
          ] },
          recreate: {
            brief: "Ask your audience what they'd give up before giving up the thing your brand protects or provides, then chart their real answers.",
            fields: [
              { id: "protected", label: "What your brand protects or provides", hint: "PMT: riding; HVAC: cool air in July" },
              { id: "tradeoffs", label: "6–8 escalating trade-offs", hint: "Start trivial, end absurd" },
              { id: "source", label: "Where the real answers come from", hint: "Story polls, email survey, in-class poll" },
              { id: "visual", label: "Visual style", hint: "Dark background, two bar colours, one icon per row" },
              { id: "payoff", label: "Payoff line", hint: "Ties the finding to your offer" }
            ],
            steps: [
              "Write 10 trade-offs, then order the best 6–8 from easy to absurd.",
              "Run them as Instagram/Facebook Story polls over a week (or one short email survey to past customers).",
              "Tally the real percentages; drop any trade-off with too few votes.",
              "In Canva, build a 1080×1350 chart (or a carousel, one row per slide) with matching bar colours.",
              "Add the payoff line and logo on the final slide.",
              "Post organically, invite people to comment their own answer, then boost the best performer locally."
            ]
          }
        }
      ]
    },
    {
      id: "og-05c",
      part: "p2",
      chapter: 5,
      chapterTitle: "To Be or Not to Be a Millennial · Engaged with every format, selectively",
      pages: "92–101",
      title: "Millennials Engage Selectively: five myths, CokeTV and the dominoes",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 5 · To Be or Not to Be a Millennial · ad formats, digital natives, 5 myths · PDF pp. 92–101", who: "Miles Young" }],
      quotes: [
        { text: "They look for authenticity, and for brands that behave well.", page: "97" },
        { text: "They are neither digital victims nor digital fanatics.", page: "97" }
      ],
      idea: `The illustrated chart on PDF 92–95 carries the headline "Millennials are most engaged online, but they also engage with all advertising formats in selective ways". It compares Gen S, Gen X and Millennials across formats, and the surprise is how *similar* the generations are, with Millennials scoring highest almost everywhere, including old media:
- **Recommendations from people I know:** top for everyone (about 80% Gen S, 83% Gen X, 85% Millennials).
- **Ads on TV:** 52% / 64% / 67%.
- **Branded websites:** 55% / 70% / 75%.
- **Brand sponsorships:** 47% / 62% / 66%.
- Consumer opinions online, editorial, magazine and newspaper ads follow the same pattern: Millennials level with or ahead of Gen X.
The caption's summary: remarkably similar tendencies, with a bit more weight on **friends, forums and familiar brands**.

**An American digital native is more likely to be** (PDF 96): ethically conscious; caring about self-image; culturally blended; a committed single; and mobile.

**More evidence against the stereotypes:**
- **Centennials are warier:** two thirds prefer to see friends in person (only 15% prefer online), and most prefer buying in physical shops.
- J. Walter Thompson research: Millennial views of technology are nuanced; they **fear being trapped by it**.
- **They read.** Pew (2015): 80% of 18–29s had read a book in the past year, versus 71% of 30–49s, 68% of 50–64s and 69% of over-65s.
- They engage with **traditional formats more than Gen S** does, if differently.
- They're **"meshers"** (a second device alongside the first screen) and **"showroomers"** (research online, then buy).
- The "big yellow flag": they **under-index in big brand franchises**, and not only on price. The so-called narcissists look for **authenticity and brands that behave well** (Centennials even more so), a theme Chapter 6 develops.

**Five myths about Millennials** (PDF 97): they're technophiles; narcissists; they don't read; they don't visit stores; they don't consume advertising. All wrong. Neither digital victims nor digital fanatics, they're more complex, and more interesting.

**Two examples close the chapter.** Coca-Cola's **#CokeTV Moments** (PDF 98): a YouTube channel of shows hosted by Millennials, full of challenges and candid chat, with all the hallmarks of old teen TV, proving young audiences still like to lean back and watch. And Prudential's **retirement dominoes** (PDF 99–101): with Harvard psychologist Dan Gilbert, Prudential lined up dominoes that grew from normal size to 30 feet and set a world record, to show young people (who, like every young generation, avoid thinking about the distant future) that tiny early inputs become massive over time.`,
      keyPoints: [
        "Millennials score highest on nearly every format in Ogilvy's chart, including TV (67% vs 52% for Gen S), not only online.",
        "Recommendations from people they know top the list for every generation (80–85%).",
        "Five myths: they're not technophiles, narcissists, non-readers, store-avoiders or ad-avoiders.",
        "They're meshers (second screens) and showroomers (research online, buy in person).",
        "They under-index in big brands because they look for authenticity and brands that behave well.",
        "Centennials are warier still: two thirds prefer friends in person; most prefer buying in shops."
      ],
      why: "PMT's younger buyers research online, ask friends and still want to see the real thing. ZDub's plan should feed referrals and reviews, give showroomers a reason to visit or call, and still use TV-style video, not just “digital native” tricks.",
      example: {
        title: "PMT for showroomers and meshers",
        before: "Ads assume young riders book instantly online; there's no way to see the range or talk to anyone first.",
        after: "Add a “Come watch a class on Saturday morning, no pressure” invite, a reviews carousel from local riders, and a bring-a-friend referral offer. Retarget video viewers with a short “meet your instructor” clip they can watch while the TV is on.",
        body: "Young's research says they lean on friends and familiar brands, research online, then want the real thing. Give them all three."
      },
      practice: [
        { prompt: "Dissect it: test your own assumptions.", fields: ["Which of the five myths did you believe before this lesson?", "What's a “mesher” and a “showroomer”, and how might each show up among PMT's buyers?", "Why might young buyers under-index in big brands, according to Young?"] },
        {
          prompt: "Apply it: recreate the Prudential dominoes pattern for a ZDub prospect or PMT: a physical demonstration that makes a long-term benefit visible.",
          fields: ["The abstract long-term benefit", "The physical metaphor", "How it escalates", "Where you'll film it", "End line"],
          rubric: ["Turns an abstract benefit into visible cause and effect", "Starts small and ends big (escalation)", "Cheap enough to stage and film locally", "Ends on one line that names the benefit"],
          model: "Prospect: a Sacramento roofer. Benefit: a cheap inspection now prevents a huge bill later. Metaphor: six dominoes on a driveway, each painted with a stage: loose shingle → small leak → stained ceiling → rotten decking → mould → full replacement, the last one 6 feet tall with “$20,000” on it. Film from a drone and at ground level as a hand flicks the first one. End line: “Stop the first domino. Book a $___ roof inspection.”"
        }
      ],
      today: { task: "Ask 3 recent PMT students how they first heard about PMT, and whether they called, visited or asked a friend before booking. Note any showrooming or referral pattern.", output: "Three short answers and one change to the booking path.", minutes: 20 },
      check: [
        { q: "Name the five myths about Millennials.", a: "That they're technophiles, narcissists, don't read, don't visit stores, and don't consume advertising." },
        { q: "What are “meshers” and “showroomers”?", a: "Meshers use a second device alongside the first screen; showroomers research purchases online and then buy." },
        { q: "What did Prudential's dominoes demonstrate?", a: "That tiny inputs made early grow into massive results over time: dominoes grew from normal size to 30 feet (a world record), promoting early retirement saving." }
      ],
      examples: [
        {
          id: "og-ex-coke-tv-moments",
          title: "Coca-Cola #CokeTV Moments",
          brand: "Coca-Cola", agency: "", year: "",
          format: "Online film",
          pdfPage: 98,
          what: "A dedicated YouTube channel of short shows hosted by young presenters, who take on challenges and talk about topics with youthful candour. The set is a cosy living room in Coca-Cola red: a retro red Coca-Cola fridge, a bike hung on a wooden wall, shelves of bottles, a vintage TV, a sofa with cushions, and a “Coke TV” logo drawn like an old television set.",
          idea: "Give young viewers lean-back TV on their own platform, made by people like them; the brand is the set, not the sermon.",
          elements: [
            { n: 1, name: "Peer hosts", detail: "Millennials host it, so it sounds like friends, not a brand.", principle: "Recommendations from people like me matter most" },
            { n: 2, name: "Recurring show format", detail: "Episodes, challenges, topics: a reason to come back and subscribe.", principle: "Content people choose to watch" },
            { n: 3, name: "Branded set", detail: "Red fridge, bottles, retro TV: the brand is everywhere but never interrupts.", principle: "Brand present without pitching" },
            { n: 4, name: "Participation", detail: "Challenges and questions invite viewers to respond and join in.", principle: "Participation and engagement (PDF 79)" },
            { n: 5, name: "Owned channel", detail: "A dedicated YouTube channel builds an archive viewers can search and binge.", principle: "Archival network as a library" }
          ],
          beats: [
            { n: 1, label: "Channel opener: hosts welcome viewers to the red living-room set" },
            { n: 2, label: "Episode set-up: today's challenge or topic" },
            { n: 3, label: "Hosts try it, react, laugh, argue" },
            { n: 4, label: "Viewers are invited to comment or try it themselves" },
            { n: 5, label: "Next episode teased; the brand lives in the set and the bottles" }
          ],
          recreate: {
            brief: "Create a recurring, hosted mini-show on your audience's platform where your brand is the set and the hosts are people like the viewers.",
            fields: [
              { id: "hosts", label: "Hosts", hint: "PMT: an instructor + a recent graduate" },
              { id: "format", label: "Show format", hint: "Challenge, Q&A, myth-busting, “first time trying…”" },
              { id: "set", label: "The branded set", hint: "The range, the bike line-up, the classroom" },
              { id: "segment", label: "Recurring segment", hint: "Something that repeats every episode" },
              { id: "invite", label: "Participation hook", hint: "What viewers should comment, try or ask" },
              { id: "cadence", label: "Cadence and length", hint: "e.g. weekly, 3–5 minutes, plus a 30s cut" }
            ],
            steps: [
              "Name the show and pick two hosts with natural chemistry.",
              "Dress one corner of the location as the permanent set (props, brand colours, a sign).",
              "Plan 6 episode topics from real questions people ask (DMs, calls, reviews).",
              "Shoot 3 episodes in one session on iPhone with a lav mic; keep it loose and unscripted.",
              "Edit in CapCut: full episode for YouTube, 30–45s highlight for Reels with a comment prompt.",
              "Publish weekly and answer comments in the next episode."
            ]
          }
        },
        {
          id: "og-ex-prudential-retirement-dominoes",
          title: "Prudential “The Retirement Challenge” dominoes",
          brand: "Prudential", agency: "", year: "",
          format: "Experiential",
          pdfPage: 100,
          what: "In a city plaza, Prudential and Harvard psychologist Dan Gilbert laid a long blue runway and stood on it a line of white dominoes with yellow edges, each bigger than the last, with small milestone markers alongside. The first is an ordinary domino; the last, printed with “The Retirement Challenge”, stands 30 feet tall. A crowd films on their phones as they topple in sequence, setting a world record.",
          idea: "Make compounding visible: a tiny push today topples something enormous later.",
          elements: [
            { n: 1, name: "Abstract truth + credible expert", detail: "Starting to save early has an outsized effect, explained with a Harvard psychologist.", principle: "Young people resist planning for the distant future" },
            { n: 2, name: "Physical metaphor", detail: "Dominoes: everyone instantly understands that one push causes the next.", principle: "Demonstration beats explanation" },
            { n: 3, name: "Escalation", detail: "From a normal domino to a 30-foot one: the growth is the message.", principle: "Show the scale of the result" },
            { n: 4, name: "Spectacle and record", detail: "A public crowd and a world record create shareable footage and earned media.", principle: "Buzz and participation" },
            { n: 5, name: "Brand colour system", detail: "Blue runway, yellow edges and a branded final domino keep it unmistakably Prudential.", principle: "Brand visible throughout" }
          ],
          beats: [
            { n: 1, label: "A normal-size domino at the start of a long blue runway" },
            { n: 2, label: "The line grows step by step, with milestone markers" },
            { n: 3, label: "A single small push" },
            { n: 4, label: "The chain reaction builds as the crowd watches and films" },
            { n: 5, label: "The 30-foot “Retirement Challenge” domino falls: a world record" },
            { n: 6, label: "Message: small inputs early make a massive difference over time" }
          ],
          recreate: {
            brief: "Turn an abstract long-term benefit into a physical chain reaction that starts small and ends huge, and film real people watching it.",
            fields: [
              { id: "truth", label: "The long-term truth", hint: "Small action now = big result (or big cost) later" },
              { id: "metaphor", label: "The physical metaphor", hint: "Dominoes, stacked blocks, a snowball, a growing pile" },
              { id: "escalation", label: "The stages", hint: "Label each step from small to huge" },
              { id: "expert", label: "Credible voice", hint: "Owner, inspector, instructor, a local expert" },
              { id: "location", label: "Where you'll stage it", hint: "Driveway, range, parking lot, storefront" },
              { id: "line", label: "End line", hint: "Names the benefit and the first step" }
            ],
            steps: [
              "Write the truth as “a small ___ now leads to a big ___ later”.",
              "Choose the metaphor and label 5–6 stages from small to huge; build them from cardboard or foam board.",
              "Stage it somewhere people pass by, so you capture real reactions.",
              "Film with one iPhone wide on a tripod, one handheld for close-ups, and a drone if you have one.",
              "Edit in CapCut to 20–30 seconds; end on the biggest piece falling, then the line and logo.",
              "Post the reel and run it as a Meta ad in the local area."
            ]
          }
        }
      ]
    },
    {
      id: "og-06a",
      part: "p2",
      chapter: 6,
      chapterTitle: "The Post-Modern Brand · Waves of Branding",
      pages: "102–104",
      title: "The Post-Modern Brand: five waves of branding, ending in Brands that DO",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 6 · The Post-Modern Brand · opening and Waves of Branding · PDF pp. 102–104", who: "Miles Young" }],
      quotes: [
        { text: "Far from dying, I believe they will survive in the digital age.", page: "102" },
        { text: "Each phase has tended to be accretive, overlaying and sometimes co-existing with the one that came before.", page: "103" }
      ],
      idea: `For as long as Young can remember, brands have been "in crisis": first from retailers' own labels, now from digital ("9 Iconic Brands That Could Be Dead", "the Twilight of the Brands"). The fear has a logic: with near-perfect information and peer reviews, why would you need a brand to tell you something is good? Young's answer: **don't write brands off; they'll survive.** To see why, he sketches where brands came from, in waves (the chart on PDF 104, from the 1850s to 2015+):

1. **Trademark branding.** Role: a *guarantor of quality*. It started with a red-hot iron ("that's my steer") and became the trademark. Terms: trust, claims, salesmanship in print. Media: point of sale, mail order, print.
2. **Rational branding.** Role: *product differentiation*, the era of hard facts and pointed argument. Terms: USP, features, product demonstration, the big idea. Media: TV. (The chart's example: M&M's, melts in your mouth, not in your hand.)
3. **Emotional branding.** Role: *brand bonding*, once TV brought sound and pictures into homes. Terms: personality, brand pyramid, brand image, promise. Media: TV. (Example: an American Express ad.)
4. **Cultural branding.** Role: *cultural relevance*. Terms: movements, manifestos, share of culture, purpose. Media: paid, owned and earned. (Example: Johnnie Walker, Keep Walking.)
5. **Brands that DO.** Role: *create value and be useful*. Terms: transformation, brand action, engines of engagement, behaviour, experience. Media: content. (Example: Dove.)

**The waves are accretive.** Each one overlays the last instead of replacing it: a modern brand still needs trust, a difference and an emotional bond underneath its purpose and behaviour.

**Where Ogilvy fits.** Young says *Ogilvy on Advertising* stopped at the high tide of the hard-facts era, yet the caption credits David as the inventor of emotional branding: his brand-image thinking was the bridge from wave 2 to wave 3. Then digital arrived, and the textbook definitions of "brand" from gurus like David Aaker and Philip Kotler started to feel old-fashioned. Enter the **post-modern brand**.

**Where it's heading.** Digital is forcing a return to the *tangible*. The new era is still grounded in the purpose and emotional promise of the earlier waves, but its currency is **behaviour**: what the brand actually does for you. Ogilvy calls it "Brands that DO". The rest of the chapter walks through waves 4 and 5: culture (next lesson), authenticity, the Big IdeaL, and the well-behaved brand.`,
      keyPoints: [
        "Brands have always been declared dying; Young says they'll survive because people still need shortcuts to trust.",
        "Five waves: trademark (quality), rational (difference, USP), emotional (bonding, image), cultural (relevance, purpose), Brands that DO (usefulness, behaviour).",
        "The waves are accretive: each layers on top of the last rather than replacing it.",
        "David Ogilvy pioneered emotional branding (brand image); digital now pulls brands back to the tangible: what they do.",
        "The media shift with each wave: print and point of sale → TV → paid, owned and earned → content."
      ],
      why: "A local brand like PMT needs every layer: trust (qualified, safe), a clear difference, an emotional promise, a point of view, and useful behaviour. Most local competitors stop at layer one or two, which is the opening for ZDub.",
      example: {
        title: "PMT through the five waves (fill with real facts)",
        before: "PMT's current ads use one layer: “Motorcycle classes in Sacramento. Book now.”",
        after: "- **Trademark:** the credentials and track record that prove quality (use PMT's real ones).\n- **Rational:** “Bikes and helmets provided: just bring yourself.”\n- **Emotional:** “From nervous to rider in a weekend.”\n- **Cultural:** “Riding isn't just for tough guys. It's for anyone who wants to learn.”\n- **DO:** a free New Rider Starter Kit (DMV steps, gear checklist, beginner routes) and graduate practice meetups.",
        body: "Each layer adds a reason to choose PMT; together they make it hard to compete on price alone."
      },
      practice: [
        { prompt: "Dissect it: walk the waves.", fields: ["Explain each of the five waves in one line, with one brand you know for each.", "Why does Young say the waves are “accretive”? What happens if a brand skips the lower layers?", "Argue the other side: is “Brands that DO” just a new name for good service?"] },
        {
          prompt: "Apply it: write PMT's (or a ZDub prospect's) message for each of the five waves, using the M&M's “this, not that” pattern for the rational layer. Then pick the weakest layer to fix first.",
          fields: ["Trademark (quality guarantee)", "Rational (USP: “___, not ___”)", "Emotional (the feeling)", "Cultural (the belief)", "DO (a useful action)"],
          rubric: ["Every layer is specific to this business, not generic", "The rational layer names a real, provable difference", "The DO layer is an action, not a slogan", "You name which layer is weakest today and why"],
          model: "For a Sacramento HVAC company. Trademark: licensed, 20 years, 1,000+ five-star reviews (use real numbers). Rational: “Fixed on the first visit, not the third.” Emotional: “Come home to cool.” Cultural: “Nobody in Sacramento should suffer through a 108° night.” DO: free heat-wave check-ins for seniors on their customer list. Weakest today: DO; start the senior check-in programme before July."
        }
      ],
      today: { task: "Audit one competitor's website and PMT's: which of the five waves does each show? Note the gaps PMT could own.", output: "A two-column table: wave → competitor vs PMT.", minutes: 20 },
      check: [
        { q: "List the five waves of branding in order.", a: "Trademark branding, rational branding, emotional branding, cultural branding, Brands that DO." },
        { q: "What role does each of the first two waves play?", a: "Trademark: guarantor of quality. Rational: product differentiation (USP, demos, the big idea)." },
        { q: "What does “Brands that DO” mean?", a: "Behavioural branding: creating value and being useful through actions, experience and engagement, grounded in the purpose and emotion of earlier waves." }
      ],
      examples: [
        {
          id: "og-ex-mms-melts-in-your-mouth",
          title: "M&M's “melts in your mouth, not in your hand”",
          brand: "M&M's", agency: "", year: "",
          format: "Print ad",
          pdfPage: 104,
          what: "Young's waves chart uses M&M's to stand for the rational-branding era: the brown M&M's pack, with the claim beneath it that the milk chocolate melts in your mouth, not in your hand. One product fact, the candy shell, becomes a promise you can picture.",
          idea: "Find the one product feature competitors don't have and phrase it as a benefit you can see, with a “this, not that” contrast.",
          elements: [
            { n: 1, name: "Unique feature", detail: "The candy shell: a real, provable difference from other chocolate.", principle: "USP: rational branding" },
            { n: 2, name: "Contrast benefit", detail: "“In your mouth, not in your hand”: the benefit and the problem it removes in one line.", principle: "State the benefit, not the feature" },
            { n: 3, name: "Picture-able", detail: "You can see melted-chocolate fingers, which makes the line stick.", principle: "Concrete beats abstract" },
            { n: 4, name: "Product as hero", detail: "The pack itself carries the brand; the claim sits right beside it.", principle: "Brand and claim together" }
          ],
          layout: { aspect: "1:1", boxes: [
            { n: 4, label: "M&M's pack", x: 18, y: 18, w: 64, h: 36 },
            { n: 2, label: "Contrast line", x: 4, y: 62, w: 92, h: 14 }
          ] },
          recreate: {
            brief: "Name your one provable product difference and state it as a vivid “this, not that” benefit sitting right beside the product.",
            fields: [
              { id: "feature", label: "The provable difference", hint: "PMT: bikes and helmets provided; small groups" },
              { id: "benefit", label: "What it means for the customer", hint: "The good thing that happens" },
              { id: "contrast", label: "The “not” half", hint: "The annoyance it removes" },
              { id: "line", label: "The line", hint: "“___, not ___.” Under 10 words" },
              { id: "visual", label: "Product shot", hint: "What sits beside the line" }
            ],
            steps: [
              "List every real difference vs competitors; keep only the ones you can prove.",
              "For the best one, write 10 “this, not that” lines; read them aloud and keep the most picture-able.",
              "Shoot the product or experience cleanly on iPhone.",
              "In Canva, put the product big and the line directly under it, nothing else but the logo.",
              "Run it as a static Meta ad and test it against your current best headline."
            ]
          }
        },
        {
          id: "og-ex-amex-do-you-know-these-people",
          title: "American Express “Do you know these people?”",
          brand: "American Express", agency: "", year: "",
          format: "Print ad",
          pdfPage: 104,
          what: "In the emotional-branding column of Young's chart, an American Express ad shows a grid of green charge cards under the headline “Do you know these people?”. The cards stand in for their holders: the card says who you are and that you belong.",
          idea: "Sell identity and belonging, not features: the card is a badge of the kind of person who carries it.",
          elements: [
            { n: 1, name: "Question headline", detail: "Asks the reader to recognize the type of person, pulling them into the ad.", principle: "Involve the reader" },
            { n: 2, name: "Repetition of the product", detail: "A grid of cards: many members, one badge.", principle: "Brand image: the product as identity" },
            { n: 3, name: "Status signal", detail: "Membership itself is the benefit; no rates or features are mentioned.", principle: "Emotional branding: brand bonding" },
            { n: 4, name: "Promise over function", detail: "The ad sells what owning it says about you.", principle: "Personality and promise" }
          ],
          layout: { aspect: "4:5", boxes: [
            { n: 1, label: "Headline: Do you know these people?", x: 8, y: 3, w: 84, h: 8 },
            { n: 2, label: "Grid of cards", x: 6, y: 14, w: 88, h: 82 }
          ] },
          recreate: {
            brief: "Make the customer's identity the hero: show the badge of membership many times over and ask whether the viewer recognizes the kind of person who holds it.",
            fields: [
              { id: "identity", label: "The identity", hint: "PMT: “people who said they'd never ride”" },
              { id: "badge", label: "The badge", hint: "Completion card, helmet, certificate, branded tee" },
              { id: "question", label: "Question headline", hint: "“Do you know these riders?”" },
              { id: "proof", label: "Real members", hint: "Who appears (with permission)" },
              { id: "signoff", label: "Sign-off line", hint: "The reveal: what they have in common" }
            ],
            steps: [
              "Collect 6–9 photos of real customers holding the same badge (with permission).",
              "Crop them identically and lay them out as a grid in Canva (1080×1350).",
              "Put the question headline above the grid in plain type.",
              "Add a one-line sign-off below: what they all have in common.",
              "Run as a static or a carousel ad; use the same grid as a Story."
            ]
          }
        }
      ]
    },
    {
      id: "og-06b",
      part: "p2",
      chapter: 6,
      chapterTitle: "The Post-Modern Brand · Culture Vultures",
      pages: "103–107",
      title: "Culture Vultures: share of culture, manifestos, and why culture can't be a formula",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 6 · The Post-Modern Brand · Culture Vultures · PDF pp. 103–107", who: "Miles Young" }],
      quotes: [
        { text: "Before long, the phrase “share of culture” replaced “share of market” as an objective", page: "103" },
        { text: "Culture as something to tap into can be magical; culture turned into a “model” is a death trap.", page: "106" }
      ],
      idea: `The word "culture" never appears in *Ogilvy on Advertising*. But in the 1980s, brand owners started treating culture as an **asset they could own**.

**Nike** was the poster child. It found a rich cultural story: competing through sheer willpower, the individual against the world, inner strength beating physical gifts. "Just Do It" arrived in 1988, before the internet, but as owned and earned media joined paid media, the line became a destination people could step into and a "movement" they could join. Soon brands were chasing **share of culture** as much as share of market, fighting over it "like vultures fighting over meat".

**The trap.** Cultural-branding pioneer Douglas Holt called the previous era's superficial approach the **"commodity emotions trap"**, and big-company bureaucracy made it worse. His (very funny) case on PDF 104–105: a drink brand's vision passes through committee after committee, each round of research producing a new abstract phrase (adventure, refreshing your day, vitality, an active lifestyle, fuel for life), until management settles on "Refresh for Life". Any drink could say it; nobody would remember it.

**At its best, culture works.** Holt's key point: Nike's famous shoe innovations came early and don't line up with its take-off. Nike won with *cultural* innovation. Its "Word of Foot" campaign told the stories of everyday athletes and started four decades of "everyone is an athlete", which helped make athletic shoes everyday footwear.

**Manifestos.** Nothing captured a cultural aspiration like a manifesto, and writing them became an art form. **Johnnie Walker** is Young's success story. Around 2000 it was stalling under share pressure in old and new markets. The insight: for twenty-first-century men, success was shifting from the **material to the motivational**, from what you have to what you might achieve and where you're heading. Diageo framed it as "Johnnie Walker inspires personal progress", distilled into **"Keep Walking"**. The manifesto reached into the brand's past to map its future: the Striding Man, first sketched on a restaurant menu in the early 1900s, was redrawn and **flipped to stride toward the future** (PDF 106).

**Where culture fails** is when it's turned into a *system*. Culture as something to tap into can be magical; culture as a "model" produces either pedestrian step-by-step processes or briefs like "design a provocative cultural expression in response to Trumpism": interesting clothes for a brand to borrow, but not a brief any creative could act on. Culture is an *ingredient* of a brief, maybe its intent, not the brief itself. And, annoyingly, cultural language is better at explaining success after the fact than at causing it.`,
      keyPoints: [
        "Nike turned culture into a brand asset: an attitude (willpower, everyone is an athlete), amplified by owned and earned media.",
        "“Share of culture” joined “share of market” as a brand goal.",
        "The commodity emotions trap: committees produce abstract, interchangeable visions (“Refresh for Life”).",
        "A good manifesto reaches into the brand's past to point it forward: Johnnie Walker's Striding Man turned to face the future.",
        "Culture is an ingredient, not a formula; cultural language explains success after the fact better than it creates it."
      ],
      why: "Small brands can do this cheaply. PMT can own an attitude in Sacramento riding culture (riders are made, not born), but only if the brief stays concrete enough for whoever films and writes the ads to act on.",
      example: {
        title: "PMT: from committee-speak to a manifesto line",
        before: "“Empowering riders to achieve freedom through excellence in motorcycle education.”",
        after: "Insight: most people who want to ride never start because they think riders are born, not made.\nBelief: every rider is made, one lap at a time.\nLine: “Every rider started on day one.”\nIcon from PMT's own world: the orange cone of the first exercise.",
        body: "The “before” could belong to any school in America (the commodity emotions trap). The “after” comes from a specific insight and an object only riding schools own."
      },
      practice: [
        { prompt: "Dissect it: separate culture that works from culture as jargon.", fields: ["What's the “commodity emotions trap”? Write a local-business example.", "How did Johnnie Walker use its history to point to the future?", "Why does Young say culture as a “model” is a death trap?"] },
        {
          prompt: "Apply it: write a mini-manifesto for PMT in the Johnnie Walker pattern: insight → belief → 2–3 word line → a heritage asset you'd “flip” to point forward.",
          fields: ["The cultural shift (what's changing in what people value)", "The brand belief in one sentence", "The 2–3 word line", "The existing asset you'd flip, and how"],
          rubric: ["The insight is a real shift in what people value, not a product feature", "The belief is specific to this brand", "The line passes the “Refresh for Life” test (no other brand could own it)", "The icon comes from the brand's own history or world"],
          model: "Shift: people are trading “someday” bucket lists for doing things now. Belief: PMT believes anyone can become a rider with the right first weekend. Line: “Start Riding.” Flip: the PMT logo's rider (or the first-day cone) redrawn mid-motion, leaning into a turn, so the brand mark itself is moving forward."
        }
      ],
      today: { task: "Write PMT's (or ZDub's) brand line three different ways. Strike out any version that a competitor could use unchanged (the “Refresh for Life” test).", output: "One surviving line and why it survived.", minutes: 15 },
      check: [
        { q: "What replaced “share of market” as an objective in the cultural era?", a: "“Share of culture”." },
        { q: "What did Holt say really drove Nike's take-off?", a: "Innovative cultural impressions, not innovative products (its shoe innovations came earlier)." },
        { q: "What was Johnnie Walker's insight, and its line?", a: "Success was shifting from the material to the motivational (where you're heading, not what you have); the line was “Keep Walking”." }
      ],
      examples: [
        {
          id: "og-ex-nike-just-do-it",
          title: "Nike “Just Do It” and “Word of Foot”",
          brand: "Nike", agency: "", year: "1988",
          format: "Integrated campaign",
          pdfPage: 103,
          what: "Nike's 1988 line “Just Do It” packaged an attitude: competing through sheer willpower, the individual against the world, inner strength over physical gifts. Its “Word of Foot” campaign told the personal stories of regular, everyday athletes, seeding four decades of the idea that everyone is an athlete. As owned and earned media grew, the line became a destination and a movement people joined.",
          idea: "Sell the attitude of the person using the product, not the product, and let everyday people prove it.",
          elements: [
            { n: 1, name: "Cultural tension", detail: "Willpower versus talent: anyone can compete if they push.", principle: "Culture as an asset" },
            { n: 2, name: "Three-word imperative", detail: "A command the reader can say to themselves; it works on any sport and any person.", principle: "A line that travels" },
            { n: 3, name: "Everyday heroes", detail: "Word of Foot made ordinary athletes the stars, so “everyone is an athlete” felt true.", principle: "Proof through real people" },
            { n: 4, name: "Destinations to join", detail: "Owned and earned media turned the line into places to gather and a movement to belong to.", principle: "Paid, owned, earned" },
            { n: 5, name: "Decades of consistency", detail: "The same attitude, expressed again and again, until athletic shoes became everyday shoes.", principle: "Share of culture" }
          ],
          beats: [
            { n: 1, label: "1988: “Just Do It” launches as a call to act, before the internet" },
            { n: 2, label: "Word of Foot: real stories of everyday athletes" },
            { n: 3, label: "Owned and earned media turn the line into destinations and a movement" },
            { n: 4, label: "Four decades of “everyone is an athlete”; trainers become everyday footwear" }
          ],
          recreate: {
            brief: "Find the attitude your customer needs in order to act, compress it into a short imperative, and prove it with real customers' stories.",
            fields: [
              { id: "tension", label: "The tension your customer feels", hint: "PMT: “I'm not the type who rides”" },
              { id: "imperative", label: "Your 2–4 word imperative", hint: "Something they'd say to themselves" },
              { id: "heroes", label: "Everyday heroes", hint: "Which real customers' stories prove it" },
              { id: "destination", label: "Where people gather", hint: "Group, meetup, hashtag, event" },
              { id: "proof", label: "How you'll keep proving it", hint: "A monthly story, a wall of graduates" }
            ],
            steps: [
              "Interview 5 customers about the moment they decided to act; find the shared attitude.",
              "Write 10 short imperatives; test the best 3 as ad headlines.",
              "Film one 30–45s story per month of an everyday customer (iPhone, natural light, their words).",
              "Give people a place to gather: a graduates' Facebook group or a monthly ride/meetup.",
              "Keep the line identical everywhere for at least a year."
            ]
          }
        },
        {
          id: "og-ex-johnnie-walker-keep-walking",
          title: "Johnnie Walker “Keep Walking” and the flipped Striding Man",
          brand: "Johnnie Walker (Diageo)", agency: "", year: "",
          format: "Integrated campaign",
          pdfPage: 106,
          what: "Around 2000, with market share slipping, Johnnie Walker adopted a manifesto: for modern men, success is about where you're heading, not what you own. Diageo framed it as “Johnnie Walker inspires personal progress”, distilled into “Keep Walking”. The book shows the old Striding Man, a top-hatted dandy with a cane first sketched on a restaurant menu in the early 1900s, beside the new, bolder black silhouette, flipped to stride the other way, toward the future.",
          idea: "Reach into your own past for an icon, then turn it, literally, toward the future your customer wants.",
          elements: [
            { n: 1, name: "Cultural insight", detail: "Success shifting from the material to the motivational: progress over possessions.", principle: "Culture as an ingredient" },
            { n: 2, name: "Belief statement", detail: "“Inspires personal progress”: a short, internal articulation before any ad is written.", principle: "Manifesto as brief" },
            { n: 3, name: "Two-word line", detail: "“Keep Walking” ties the belief to the brand's own name and icon.", principle: "Line rooted in the brand" },
            { n: 4, name: "Heritage icon, flipped", detail: "The Striding Man redrawn and turned to face forward: history used to signal the future.", principle: "Reach into the past to map the future" }
          ],
          beats: [
            { n: 1, label: "Share stalls in established and new markets" },
            { n: 2, label: "Insight: success now means progress, not possessions" },
            { n: 3, label: "Belief written: the brand inspires personal progress" },
            { n: 4, label: "Distilled to the line “Keep Walking”" },
            { n: 5, label: "The Striding Man is redrawn and flipped to walk toward the future" },
            { n: 6, label: "Work tells stories of men moving forward" }
          ],
          recreate: {
            brief: "Write the belief first, compress it into two or three words tied to your own name or icon, and refresh one heritage asset so it visibly points forward.",
            fields: [
              { id: "insight", label: "The cultural shift", hint: "What your customers now value" },
              { id: "belief", label: "Belief statement", hint: "“[Brand] inspires/helps ___”" },
              { id: "line", label: "2–3 word line", hint: "Ideally echoes your name, icon or product" },
              { id: "heritage", label: "Heritage asset", hint: "Logo, mascot, founder story, first location" },
              { id: "flip", label: "How you'll “flip” it", hint: "Redraw, recolour, set in motion, update the scene" }
            ],
            steps: [
              "Write the cultural shift and the belief in two sentences; get the owner to agree before any design.",
              "Brainstorm 20 short lines that echo the brand's name or icon; shortlist 3.",
              "Redraw the heritage asset (Canva or a freelance illustrator) so it looks forward or in motion.",
              "Put the new icon and line on one ad, one post and the website header.",
              "Plan the first three stories that show customers “moving forward”."
            ]
          }
        }
      ]
    },
    {
      id: "og-06c",
      part: "p2",
      chapter: 6,
      chapterTitle: "The Post-Modern Brand · Authenticity",
      pages: "107–111",
      title: "Authenticity: no hiding place, so prove who you are",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 6 · The Post-Modern Brand · Authenticity · PDF pp. 107–111", who: "Miles Young" }],
      quotes: [
        { text: "Put simply, there is no longer any hiding place.", page: "107" },
        { text: "The bracing wind of transparency has blown through corporate corridors in a way that defies resistance.", page: "107" }
      ],
      idea: `The accelerating digital revolution started a new strand of brand thinking, because it brought **unprecedented pressure for transparency**. There's no longer any hiding place, though companies still try.

**Toyota.** From August 2009, Toyota received US accident reports credibly linked to unintended acceleration (a defective accelerator pedal). Its first reactions were slow, and the truth seemed to be dragged out. Young doesn't think there was a conspiracy: the company's culture and politics simply never prized transparency, so **hundreds of small decisions added up to a behaviour**, and the brand suffered. The ad on PDF 107 ("A temporary pause. To put you first.") was a mea culpa that came too late. The good news: **transparency can heal**. In time, Toyota encouraged supporters' groups on Facebook among people who felt the vilification had gone too far.

**How not to end up there.** In 2007 the Arthur W. Page Society published *The Authentic Enterprise*, which Young calls a defining document of the digital age. Its argument: a company must be grounded in what defines it (why it exists, what it stands for, what makes it different to customers, investors and workers), and those definitions must **dictate consistent behaviour**. Authenticity becomes "the coin of the realm".

**Proof of authenticity.** In place of the old voice of authority, stakeholders now demand proof. *Are you who you claim to be? And who do you claim to be?* One of the paper's co-authors, Jon Iwata, became IBM's CMO. He disliked "campaignery", and IBM quotes Abraham Lincoln's line that character is the tree and reputation its shadow. Young's question to advertisers: is your work playing in the shadows, or building character?

**Three proofs, from Ogilvy clients:**
- **IBM:** the world's serious problems (healthcare, security, cities, commerce) can be solved by humanity's unique ability to *think*: the Smarter Planet billboard on PDF 108.
- **Dove:** re-connecting women's inner selves with how they're shown in media, exposing the cosmetics industry's rhetoric with the idea that beauty is more than skin deep: the tick-box posters on PDF 109.
- **Coca-Cola:** the common human need for authentic enjoyment, made better by sharing, expressed over the years with beautiful simplicity: "open", "real", "happiness", "enjoy", "feeling" (PDF 110).

In each case, **corporate values and product values mesh**. Young's name for that deeper value is the **Big IdeaL**, one step on from the Big Idea: what exactly do you stand for? That's the next lesson.`,
      keyPoints: [
        "Digital created a “bracing wind” of transparency: there's nowhere to hide, so behaviour becomes the brand.",
        "Toyota's slow response came from a culture that never prized transparency: small decisions add up to a reputation.",
        "Transparency can also heal: Toyota later rallied supporters on Facebook.",
        "Authenticity is the coin of the realm: what you stand for must dictate consistent behaviour (Page Society, 2007).",
        "Stakeholders want proof of authenticity: IBM (think), Dove (real beauty), Coca-Cola (shared enjoyment).",
        "When corporate values and product values mesh, you have the makings of a Big IdeaL."
      ],
      why: "For a local business, Google reviews and comment sections are the bracing wind. PMT's reputation is the shadow of how it actually treats nervous students, so ZDub's ads should show proof, not claims.",
      example: {
        title: "PMT and a bad review",
        before: "Ignore it, or reply defensively: “We've trained thousands of riders and never had a complaint.”",
        after: "Reply within a day: thank them, own what went wrong, say exactly what changed (for example, a reminder text the night before class), and invite them back. Then, if the change is real, show it in content: “You told us the check-in was confusing. Here's the new process.”",
        body: "Toyota's lesson in miniature: transparency delayed hurts; transparency shown can heal."
      },
      practice: [
        { prompt: "Dissect it: authenticity under pressure.", fields: ["What did Toyota get wrong, and what was the root cause in Young's view?", "Define “proof of authenticity” in your own words.", "What's the difference between “campaignery” and building character?"] },
        {
          prompt: "Apply it: recreate Dove's tick-box poster for PMT: a real student's portrait plus two tick-boxes that challenge a stereotype about who rides.",
          fields: ["The stereotype", "Tick-box option A / option B", "The sub-question", "The real person (with permission)"],
          rubric: ["A real person, not a model", "The two tick-boxes force the viewer to choose (participation)", "Challenges a stereotype PMT can credibly fight", "The brand sign-off is small; the question does the work"],
          model: "Portrait: a smiling 58-year-old grandmother in her class helmet, on white. Tick-boxes: [ ] Too old? [ ] Just getting started? Sub-question: “Does learning to ride have an age limit?” Small PMT logo and “Beginner classes every weekend” in the corner. Run the same question as an Instagram Story poll."
        }
      ],
      today: { task: "Read PMT's last 20 Google reviews. List the three things people praise that PMT actually does (behaviours, not adjectives). Those are your proof points for the next ads.", output: "Three behaviour-based proof points with one review quote each.", minutes: 20 },
      check: [
        { q: "What was the root cause of Toyota's slow response, according to Young?", a: "Not a conspiracy, but a culture that never valued transparency; hundreds of small decisions added up to a behavioural trait." },
        { q: "What did the Page Society's “The Authentic Enterprise” argue?", a: "A company must be grounded in why it exists, what it stands for and what makes it different, and that must dictate consistent behaviour: authenticity is the coin of the realm." },
        { q: "What was IBM's proof of authenticity?", a: "Its belief that the world's serious problems can be solved through humankind's unique ability to “think”." }
      ],
      examples: [
        {
          id: "og-ex-toyota-temporary-pause",
          title: "Toyota “A temporary pause. To put you first.”",
          brand: "Toyota", agency: "", year: "",
          format: "Print ad",
          pdfPage: 107,
          what: "A full-page newspaper ad in plain black and white. A small Toyota logo sits top-left; a large headline reads “A temporary pause. To put you first.”; under it, a big grey pause-button icon. Most of the page is white space. At the bottom, a subhead explains why Toyota temporarily stopped some of its plants, with body copy and a line sending owners to toyota.com to check whether their car is affected. Young calls it a mea culpa that took far too long to calm critics.",
          idea: "Turn a crisis action (stopping production) into a promise about the customer, with one symbol everyone understands.",
          elements: [
            { n: 1, name: "Reframing headline", detail: "The pause is presented as putting the customer first, not as a failure.", principle: "Say what you're doing and why" },
            { n: 2, name: "Universal icon", detail: "A pause button: instantly understood, calm, temporary.", principle: "One simple visual" },
            { n: 3, name: "Sober design", detail: "No car, no glamour, lots of white space: seriousness signals sincerity.", principle: "Tone matches the moment" },
            { n: 4, name: "Explanatory body copy", detail: "Plain explanation of what's happening and why.", principle: "Transparency" },
            { n: 5, name: "Action for the worried", detail: "Where to check if your car is affected.", principle: "Give people something to do" }
          ],
          layout: { aspect: "2:3", boxes: [
            { n: 1, label: "Headline", x: 8, y: 6, w: 72, h: 22 },
            { n: 2, label: "Pause icon", x: 8, y: 44, w: 22, h: 14 },
            { n: 3, label: "White space", x: 35, y: 34, w: 60, h: 40 },
            { n: 4, label: "Why we paused (body)", x: 6, y: 78, w: 88, h: 12 },
            { n: 5, label: "toyota.com check", x: 6, y: 91, w: 44, h: 6 }
          ] },
          recreate: {
            brief: "When something goes wrong, announce the action you took as a promise to the customer, with one clear symbol, a plain explanation and a simple next step, and do it fast (Young's caveat: Toyota was too slow).",
            fields: [
              { id: "problem", label: "What went wrong", hint: "Be specific and honest" },
              { id: "action", label: "What you did about it", hint: "Paused, refunded, rescheduled, fixed" },
              { id: "headline", label: "Headline: the action as a promise", hint: "“A ___. To ___ you.”" },
              { id: "symbol", label: "One symbol", hint: "Pause, calendar, wrench, umbrella" },
              { id: "explain", label: "Plain explanation", hint: "3–4 sentences, no jargon" },
              { id: "next", label: "Next step for customers", hint: "Text us, check your booking, call" }
            ],
            steps: [
              "Write the honest explanation first (what happened, what you did, what happens next).",
              "Compress the action into a headline that names the customer benefit.",
              "In Canva, set the headline big, one icon, and the explanation small at the bottom, black on white.",
              "Post it the same day on Facebook/Instagram and email it to affected customers.",
              "Reply to every comment personally for 48 hours."
            ]
          }
        },
        {
          id: "og-ex-ibm-smarter-planet-billboard",
          title: "IBM Smarter Planet / Smarter Cities billboard",
          brand: "IBM", agency: "Ogilvy & Mather", year: "",
          format: "Poster / outdoor",
          pdfPage: 108,
          what: "A long white billboard on a city building. Six bright, circular icons with radiating dashes run in a row, each topped by a short line of text: real results from named cities (crime analysis, smarter roads cutting traffic, an energy grid that fixes itself, hospitals improving trauma care), a projection that most people will live in cities by 2050, and finally a globe with the call to build a smarter planet, city by city. IBM's striped logo and a web address sit bottom-right.",
          idea: "Prove a big belief (thinking can fix the world's problems) with small, specific, local facts, each given its own icon.",
          elements: [
            { n: 1, name: "Big belief", detail: "IBM's proof of authenticity: humanity's ability to “think” can solve serious problems.", principle: "Proof of authenticity" },
            { n: 2, name: "Specific proof points", detail: "City + result + number, one per icon: concrete, checkable, local.", principle: "Facts persuade" },
            { n: 3, name: "Icon system", detail: "The same circle-with-rays shape in different colours: a family that reads as one idea.", principle: "Design can express a powerful idea" },
            { n: 4, name: "Rallying call", detail: "The final globe turns the evidence into an invitation: city by city.", principle: "From proof to participation" },
            { n: 5, name: "Logo + URL", detail: "Small and confident, bottom right, with a place to learn more.", principle: "Brand sign-off" }
          ],
          layout: { aspect: "3:1", boxes: [
            { n: 2, label: "City proof lines", x: 6, y: 12, w: 62, h: 22 },
            { n: 3, label: "Icon row", x: 6, y: 38, w: 74, h: 42 },
            { n: 4, label: "Globe + rallying line", x: 80, y: 10, w: 17, h: 70 },
            { n: 5, label: "IBM logo + URL", x: 62, y: 84, w: 35, h: 12 }
          ] },
          recreate: {
            brief: "State one big belief, then prove it with a row of small, specific, local results, each with a matching simple icon, ending in an invitation to join.",
            fields: [
              { id: "belief", label: "The belief", hint: "One sentence the business stands for" },
              { id: "proofs", label: "3–5 specific results", hint: "Place + result + number (real data only)" },
              { id: "icons", label: "Icon style", hint: "One shape, different colours" },
              { id: "rally", label: "Rallying line", hint: "Invitation: “Let's ___, one ___ at a time.”" },
              { id: "url", label: "Where to learn more", hint: "Page or booking link" }
            ],
            steps: [
              "Gather real results (e.g. riders trained this year, first-attempt success, reviews), with numbers you can stand behind.",
              "Write each as one short line: place or group + result + number.",
              "Design one icon shape in Canva and recolour it for each proof point.",
              "Lay them out in a row (wide banner for web/LinkedIn) or as a carousel, one proof per slide.",
              "End with the rallying line, logo and link."
            ]
          }
        },
        {
          id: "og-ex-dove-real-beauty-tickbox",
          title: "Dove Campaign for Real Beauty tick-box posters",
          brand: "Dove", agency: "Ogilvy & Mather", year: "",
          format: "Poster / outdoor",
          pdfPage: 109,
          what: "Two posters on white. In one, a red-haired woman covered in freckles smiles into the camera, and beside her are two tick-boxes, “flawed?” and “flawless?”, with a small line asking whether beauty means looking like everyone else. In the other, a laughing short-haired Black woman in a white vest and jeans stands beside tick-boxes reading “half empty?” and “half full?”, with a line asking whether sexiness depends on cup size. A small Dove logo and web address sit in the top corner.",
          idea: "Put a real woman next to a two-option question so viewers must confront their own stereotype, and invite them to vote.",
          elements: [
            { n: 1, name: "Real woman, not a model", detail: "Freckles, real bodies, genuine smiles: the opposite of retouched beauty.", principle: "Proof of authenticity" },
            { n: 2, name: "Tick-box choice with wordplay", detail: "Two near-identical words (flawed/flawless, half empty/half full) flip a judgement into a compliment.", principle: "Participation: the viewer has to choose" },
            { n: 3, name: "Provocative sub-question", detail: "A small line that names the stereotype directly.", principle: "Expose the category's rhetoric" },
            { n: 4, name: "White space", detail: "Nothing competes with the face and the question.", principle: "Simplicity" },
            { n: 5, name: "Small sign-off + URL", detail: "Dove is quiet; the web address invites people to vote and join the debate.", principle: "Digital extends the poster" }
          ],
          layout: { aspect: "5:7", boxes: [
            { n: 1, label: "Real woman's portrait", x: 0, y: 8, w: 64, h: 92 },
            { n: 2, label: "Tick-boxes: flawed? / flawless?", x: 64, y: 29, w: 32, h: 9 },
            { n: 3, label: "Sub-question", x: 64, y: 39, w: 32, h: 6 },
            { n: 4, label: "White space", x: 66, y: 48, w: 32, h: 40 },
            { n: 5, label: "Dove sign-off + URL", x: 52, y: 2, w: 45, h: 4 }
          ] },
          recreate: {
            brief: "Pair a real person who breaks a stereotype with two tick-boxes that make the viewer choose, a pointed question, and somewhere to vote.",
            fields: [
              { id: "stereotype", label: "The stereotype to challenge", hint: "PMT: “riders are young, tough guys”" },
              { id: "person", label: "The real person", hint: "Who breaks it (with permission)" },
              { id: "optionA", label: "Tick-box A", hint: "The judgement" },
              { id: "optionB", label: "Tick-box B", hint: "A near-identical word that flips it" },
              { id: "question", label: "Sub-question", hint: "Names the stereotype directly" },
              { id: "vote", label: "Where people vote", hint: "Story poll, comments, a landing page" }
            ],
            steps: [
              "Photograph the real person on a plain white or light wall in soft daylight (iPhone portrait mode).",
              "In Canva (1080×1350), place them left, tick-boxes right, sub-question beneath, logo small in a corner.",
              "Make a matching Instagram Story with a two-option poll using the same words.",
              "Run the static as a Meta ad; post the Story poll organically and share the results.",
              "Reply to comments with the person's own story (with permission)."
            ]
          }
        },
        {
          id: "og-ex-coca-cola-happiness",
          title: "Coca-Cola: owning “happiness”",
          brand: "Coca-Cola", agency: "", year: "",
          format: "Integrated campaign",
          pdfPage: 110,
          what: "A warm, close-cropped photo of a row of people, faces mostly out of frame, relaxed and together, each holding a glass Coca-Cola bottle with the script logo catching the light. Young uses it to show how Coca-Cola has occupied the territory of happiness and authentic shared enjoyment, expressed over the years in simple one-word platforms: “open”, “real”, “happiness”, “enjoy” and “feeling”.",
          idea: "Own one universal emotion for decades, express it simply, and let shared moments, not product claims, carry it.",
          elements: [
            { n: 1, name: "Shared moment", detail: "People together, faces cropped so anyone could be you.", principle: "Shared experience enhances enjoyment" },
            { n: 2, name: "Bottle as connector", detail: "The product is in every hand: the common thread of the moment.", principle: "Product at the heart of the idea" },
            { n: 3, name: "Warm, candid photography", detail: "Soft focus, natural light, no posing: it feels real, not staged.", principle: "Authenticity" },
            { n: 4, name: "One-word platform", detail: "Open, real, happiness, enjoy, feeling: always one simple human word.", principle: "Beautiful simplicity" },
            { n: 5, name: "Values mesh", detail: "Corporate values and product values point the same way.", principle: "The makings of a Big IdeaL" }
          ],
          layout: { aspect: "16:9", boxes: [
            { n: 1, label: "People together, faces cropped", x: 0, y: 0, w: 55, h: 100 },
            { n: 2, label: "Bottles in hand, logo visible", x: 42, y: 8, w: 56, h: 66 },
            { n: 3, label: "Warm, shallow-focus light", x: 60, y: 70, w: 40, h: 30 }
          ] },
          recreate: {
            brief: "Pick one human emotion your product genuinely delivers, name it in one word, and show the product in the middle of real shared moments, again and again.",
            fields: [
              { id: "emotion", label: "The emotion your product really delivers", hint: "PMT: freedom? belonging? pride?" },
              { id: "word", label: "Your one word", hint: "Simple, human, ownable over years" },
              { id: "moment", label: "The shared moment", hint: "Graduates high-fiving, the first group ride" },
              { id: "role", label: "The product's role in it", hint: "What's in every hand or shot" },
              { id: "style", label: "Photo style", hint: "Candid, warm, faces partly cropped" }
            ],
            steps: [
              "Choose the word and write it at the top of every brief for a year.",
              "At the next class or event, shoot candid group moments with the product or brand in frame.",
              "Edit for warmth (Lightroom or Canva filters), crop tight so the moment fills the frame.",
              "Post a series with the word as the only caption headline.",
              "Use the best image as a brand ad to warm audiences before your offer ads."
            ]
          }
        }
      ]
    },
    {
      id: "og-06d",
      part: "p2",
      chapter: 6,
      chapterTitle: "The Post-Modern Brand · A Big IdeaL",
      pages: "111–114",
      title: "A Big IdeaL: “Brand X believes the world would be a better place if…”",
      minutes: 9,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 6 · The Post-Modern Brand · A Big IdeaL · PDF pp. 111–114", who: "Miles Young" }],
      quotes: [
        { text: "Brand X believes the world would be a better place if", page: "111" },
        { text: "The danger, always, is of being seen to buy authenticity.", page: "114" }
      ],
      idea: `David Ogilvy insisted on the **Big Idea**. Young's update is the **Big IdeaL**: one step on, answering the question *what exactly do you stand for?*

**What it is, and isn't.** A Big IdeaL is a kind of positioning, but not every positioning is one. A positioning can be purely functional ("washes whiter", "more refreshing"). A Big IdeaL is a **worldview or purpose beyond the functional benefit**, though the functional side should support it. Nor is it a shallow emotional benefit: it touches culture. It's a **belief system that drives everything the brand does** and attracts widespread support, something consumers and stakeholders, who have a bigger vote than ever, can vote on.

**The sentence.** Ogilvy never writes Big IdeaLs like normal positionings. Instead they complete one phrase that forces a point of view on the world, on life or on the country:

> *Brand X believes the world would be a better place if…*

You can fill it in in 30 seconds; getting it right can take months. (Dove's, from Chapter 4: if women were allowed to feel good about themselves.) Try it on brands with momentum and you'll usually find something interesting, even provocative, and specific to that brand.

**Where to find it: the intersection** (the Venn diagram on PDF 112):
1. **The brand's best self.** Not how it is now, but how it is at its best. Look for clues in its heritage (its most successful moments), in how its most loyal users relate to it, and in its visual identity, then reinterpret for today (if its finest hour was 1964, what made it great *then* has to be translated for *now*). Connect to the "little pieces of magic", not a list of benefits.
2. **A cultural tension.** This is where you claim culture. *The Cluetrain Manifesto* says markets are conversations, so brands must be interesting conversationalists with a valid point of view. Coca-Cola's utopian "Hilltop" ad was conceived against the bloody Vietnam War, when community felt torn apart.

Together they add up to what the brand believes. Young never insisted on it as a formula, or even always showed clients: it **belongs in the kitchen, not the front parlour**.

**Purpose, lived or bought.** The industry got addicted to "purpose", sometimes leaping straight to a CSR programme to "prove" it. **Chipotle** promised "food with integrity" and won mainstream customers, then suffered food-safety scandals (E. coli, norovirus) and couldn't deliver consistently: a double-digit drop in stock value. **Pepsi's 2017 Kendall Jenner ad** traded crassly on protest and police tensions, implying a cold Pepsi could solve police violence, racial tension and political anger. The backlash was immediate, multi-channel, nearly universal, and deserved. Authenticity can't be bought or traded; it has to be lived.`,
      keyPoints: [
        "A Big IdeaL is one step on from Ogilvy's Big Idea: not a functional benefit but a belief about the world that drives everything a brand does.",
        "The test sentence: “[Brand] believes the world would be a better place if…” Quick to write, months to get right.",
        "The best Big IdeaLs sit where the brand's best self meets a cultural tension.",
        "Best self comes from heritage, loyal users and visual identity, reinterpreted for today.",
        "Purpose must be lived: Chipotle broke its “food with integrity” promise and lost double-digit stock value.",
        "Authenticity can't be bought: Pepsi's Kendall Jenner ad borrowed protest culture and was rejected everywhere."
      ],
      why: "This gives ZDub a one-sentence tool for finding each client's point of view. For PMT it can organize every ad, post and phone call around a belief, as long as PMT genuinely lives it.",
      example: {
        title: "PMT: from positioning to Big IdeaL",
        before: "Positioning: “Sacramento's top-rated motorcycle school.”",
        after: "Best self: patient instructors who get nervous beginners riding (evidence: reviews that say “I was terrified”).\nCultural tension: riding culture can feel intimidating and macho, so many would-be riders feel they don't belong.\nBig IdeaL: “PMT believes the world would be a better place if anyone who wants to ride could learn safely, without ever being made to feel stupid.”",
        body: "The positioning is a claim. The Big IdeaL is a belief that tells you how to write the ads, train the instructors and answer the phone."
      },
      practice: [
        { prompt: "Dissect it: test the Big IdeaL idea.", fields: ["What's the difference between a positioning and a Big IdeaL?", "How did Chipotle and Pepsi fail the authenticity test in different ways?", "Argue the other side: does a small local business need a “worldview” at all?"] },
        {
          prompt: "Apply it: write Big IdeaLs for PMT and one ZDub prospect using Young's sentence and the best-self × cultural-tension test.",
          fields: ["PMT best self (with evidence)", "The cultural tension", "PMT's Big IdeaL sentence", "Prospect's Big IdeaL sentence"],
          rubric: ["Uses the exact sentence form", "Rooted in something the business already does well, with evidence", "Touches a real tension, not a borrowed cause", "Passes the Chipotle test: the business can live it every day"],
          model: "PMT: see the example above. Prospect, a family HVAC company: best self = techs who explain everything and never upsell (reviews say so); tension = homeowners feel ripped off by repair companies. Big IdeaL: “Valley Air believes the world would be a better place if nobody ever felt tricked by the person fixing their home.”"
        }
      ],
      today: { task: "In 15 minutes, write 10 versions of PMT's Big IdeaL sentence. Pick the best two and send them to the PMT owner for a gut reaction.", output: "Ten drafts, two finalists, and the owner's reaction.", minutes: 20 },
      check: [
        { q: "What's Young's Big IdeaL sentence?", a: "“[Brand] believes the world would be a better place if…”" },
        { q: "Which two things intersect in the best Big IdeaLs?", a: "The brand's best self and a cultural tension." },
        { q: "Why did Chipotle's purpose backfire?", a: "It promised “food with integrity” but suffered food-safety scandals and couldn't consistently deliver, undermining the promise; its stock fell by double digits." }
      ],
      examples: [
        {
          id: "og-ex-coca-cola-hilltop",
          title: "Coca-Cola “Hilltop”",
          brand: "Coca-Cola", agency: "", year: "",
          format: "TV spot",
          pdfPage: 113,
          what: "Coca-Cola's famously utopian “Hilltop” commercial: young people from many countries gather on a hillside and sing together about sharing a Coke, a picture of harmony. Young's point is when it was made: against the backdrop of the bloody Vietnam War, when community felt pulled apart.",
          idea: "Answer a cultural tension (division) with the brand's best self (a simple pleasure everyone can share).",
          elements: [
            { n: 1, name: "Cultural tension", detail: "War and division: the world craving togetherness.", principle: "Big IdeaL: claim culture through a tension" },
            { n: 2, name: "Brand's best self", detail: "Coke as a small, shared, universal pleasure.", principle: "Big IdeaL: the brand's best self" },
            { n: 3, name: "Utopian image", detail: "Many faces, one song, one hillside: harmony you can see.", principle: "Emotion carries the point" },
            { n: 4, name: "Singable song", detail: "A melody people could sing along to and remember.", principle: "Participation" },
            { n: 5, name: "Product as token", detail: "Each person holds a bottle: the product is the gesture of sharing.", principle: "Product at the heart of the idea" }
          ],
          beats: [
            { n: 1, label: "Close on a single young singer on a hillside" },
            { n: 2, label: "The camera reveals more singers from different places" },
            { n: 3, label: "Each holds a bottle of Coke" },
            { n: 4, label: "Wide shot: a crowd in harmony on the hilltop" },
            { n: 5, label: "Sign-off: the brand as a symbol of sharing" }
          ],
          recreate: {
            brief: "Find a tension your community feels right now and answer it with a simple, hopeful image of people coming together around your product.",
            fields: [
              { id: "tension", label: "The tension people feel", hint: "Loneliness, division, stress, isolation" },
              { id: "bestself", label: "Your brand's best self", hint: "What you're like at your best" },
              { id: "image", label: "The image of togetherness", hint: "PMT: a whole class riding a lap together" },
              { id: "device", label: "Participation device", hint: "A chant, a wave, a shared ritual" },
              { id: "product", label: "Product's role", hint: "What everyone holds or shares" }
            ],
            steps: [
              "Write the tension and your best self in one sentence each.",
              "Plan one wide image that shows lots of different people together with the product.",
              "Stage it at a real event (graduation day, a group ride) and film one slow reveal from close-up to wide.",
              "Edit in CapCut to 20–30s with a simple song or chant.",
              "Post on a day when the tension is in the air (a holiday, a big local moment)."
            ]
          }
        },
        {
          id: "og-ex-chipotle-food-with-integrity",
          title: "Chipotle “Food with Integrity” (a cautionary case)",
          brand: "Chipotle", agency: "", year: "",
          format: "Integrated campaign",
          pdfPage: 113,
          what: "Chipotle built its brand on “food with integrity”: fresh, locally sourced, high-quality ingredients, which won over mainstream fast-food customers. The book's photo shows a Chipotle restaurant door with a “CLOSED” notice taped to the glass. After a run of food-safety scandals, including E. coli and norovirus outbreaks, and an inability to deliver consistently on the promise, the brand's integrity was undermined and its stock fell by double digits.",
          idea: "A purpose is only as strong as the operations behind it; the louder the promise, the harder a broken one hits.",
          elements: [
            { n: 1, name: "A noble, specific promise", detail: "“Food with integrity” set a clear, high standard.", principle: "Big IdeaL needs functional support" },
            { n: 2, name: "Proof through product", detail: "Fresh, local ingredients made the promise believable at first.", principle: "Brands that DO" },
            { n: 3, name: "Operational gap", detail: "Food-safety failures broke the very thing the promise was about.", principle: "Authenticity must be lived" },
            { n: 4, name: "Consequence", detail: "Trust collapsed and the stock fell by double digits.", principle: "No hiding place in the digital age" }
          ],
          beats: [
            { n: 1, label: "Positioning: food with integrity" },
            { n: 2, label: "Wins over mainstream fast-food customers" },
            { n: 3, label: "Food-safety outbreaks (E. coli, norovirus)" },
            { n: 4, label: "Stores close; the scandals spread online and in the press" },
            { n: 5, label: "The promise is undermined; double-digit stock decline" }
          ],
          recreate: {
            brief: "Before advertising a promise, write down how you'll prove it every day and what you'll do the day it breaks, then make the daily proof your content.",
            fields: [
              { id: "promise", label: "The promise you want to advertise", hint: "PMT: “safety first, always”" },
              { id: "proof", label: "How it's proven every day", hint: "Checklists, equipment checks, instructor ratios" },
              { id: "weak", label: "Where it could break", hint: "The honest weak spot" },
              { id: "plan", label: "What you'll do if it breaks", hint: "Who responds, what you say, how fast" },
              { id: "content", label: "Proof content", hint: "What you'll film or post to show the daily proof" }
            ],
            steps: [
              "Write the promise, then list five daily behaviours that prove it.",
              "Ask the owner which behaviour is most likely to slip; fix that before the ads run.",
              "Write a one-page crisis plan: who replies, first message, timeline.",
              "Film one proof behaviour (e.g. the morning bike and helmet check) as a 20s Reel.",
              "Only then launch the ad that makes the promise."
            ]
          }
        },
        {
          id: "og-ex-pepsi-kendall-jenner",
          title: "Pepsi with Kendall Jenner (a cautionary case)",
          brand: "Pepsi", agency: "", year: "2017",
          format: "Online film",
          pdfPage: 114,
          what: "A 2017 Pepsi ad in which model Kendall Jenner leaves a photo shoot to join a street protest and hands a police officer a can of Pepsi, easing the tension. It traded on protest and police tensions in America and implied that a cold Pepsi could solve police violence, racial tension and political anger. The backlash was immediate, multi-channel and nearly universal; Young says it was deserved.",
          idea: "What not to do: borrowing a cause the brand has no right to is buying authenticity, and audiences can tell.",
          elements: [
            { n: 1, name: "Borrowed cause", detail: "Protest and policing have no connection to a soft drink.", principle: "Don't borrow an agenda" },
            { n: 2, name: "Trivializing resolution", detail: "A can of soda “solves” a serious social conflict.", principle: "Respect the audience's intelligence" },
            { n: 3, name: "Celebrity as saviour", detail: "A famous model becomes the hero of a movement she isn't part of.", principle: "Authenticity can't be traded" },
            { n: 4, name: "Misread generational strategy", detail: "Pepsi used generational change against Coca-Cola, but misjudged what young audiences value.", principle: "Young buyers look for brands that behave well (Ch 5)" }
          ],
          beats: [
            { n: 1, label: "A protest march passes a photo shoot" },
            { n: 2, label: "The model abandons the shoot and joins the crowd" },
            { n: 3, label: "She hands a police officer a Pepsi" },
            { n: 4, label: "Tension dissolves; the crowd cheers" },
            { n: 5, label: "Immediate, near-universal backlash" }
          ],
          recreate: {
            brief: "Use this as a checklist, not a template: before touching any cause, prove the brand has a lived connection to it and that the product plays an honest role.",
            fields: [
              { id: "cause", label: "The cause or tension", hint: "What you're tempted to reference" },
              { id: "connection", label: "The brand's real connection", hint: "What you already do about it" },
              { id: "proof", label: "Lived proof", hint: "Actions, history, people involved" },
              { id: "role", label: "The product's honest role", hint: "Is it modest and true?" },
              { id: "review", label: "Who reviews it first", hint: "People from the affected community" }
            ],
            steps: [
              "Write the cause and the brand's connection side by side; if the connection is thin, stop.",
              "List what the business already does about the issue; lead with actions, not statements.",
              "Make the product's role modest and true (it enables, it doesn't solve).",
              "Show the draft to three people from the affected community before it runs.",
              "If any of them winces, rewrite or drop it."
            ]
          }
        }
      ]
    },
    {
      id: "og-06e",
      part: "p2",
      chapter: 6,
      chapterTitle: "The Post-Modern Brand · From Authenticity to Belief; the archaeology of mattering",
      pages: "114–117",
      title: "From Belief to Behaviour: it pays to believe, and brands that DO matter most",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 6 · The Post-Modern Brand · From Authenticity to Belief; Archaeology of Mattering; The Well-Behaved Brand · PDF pp. 114–117", who: "Miles Young" }],
      quotes: [
        { text: "In other words, it could pay to believe.", page: "115" },
        { text: "In plain words, fewer empty promises, please.", page: "117" }
      ],
      idea: `**Does belief pay?** Ogilvy & Mather sorted sets of brands into two groups: those with a high "point of view" rating (they stood for something) and those with a low one. Consumers sorted them the same way with their wallets. Brands with a strong point of view were more likely to be **considered** and ranked higher in perception. Ogilvy then built an algorithm and ran it across WPP's huge BrandZ database: the best brands on point of view were **2.2 times** likelier to grow market share than the worst. Young is careful: this is predictive, not proof. No index proves the link retrospectively; the big-picture evidence is prima facie and the detailed evidence sits in confidential company data. In other words, it *could* pay to believe.

**Why belief matters more in digital:** it gives a brand a way to **organize itself amid the chaos**. Post-modern brands define their own space on the internet, an **ecosystem populated with their own content**, and act as:
- **editors**, keeping the good and junking the bad;
- **curators**, presenting information in an ordered, compelling way;
- **watering holes for the herd**, an enclave in a landscape of interruptions, where interested people gather.
American Express **OPEN Forum** (PDF 115) is the example: an online community where small-business owners trade advice with peers, entrepreneurs and bloggers, gaining exposure, tools and credibility.

**The well-behaved brand.** For about five years Ogilvy had noticed something else. Brands aren't dying (more than half of people in developed countries, and more in developing ones, say brands matter, a high bar), but they have to **work harder to matter**. A logo, a reason why, an emotional promise, even a cultural belief may no longer be enough.

**The archaeology of mattering** (PDF 116). A cluster analysis of what people say makes brands matter forms layers, like rock strata:
1. **Trademark** (bottom): world-class reputation.
2. **Functional:** recognized expert, stands behind its products, does what it says.
3. **Emotional:** reflects national culture, fond memories, friendly, enjoyment of life, cool (with "innovative" and "endured the test of time" nearby).
4. **Purpose:** makes a positive difference, stands for clear values, has a goal, helps me take care of myself, makes me look and feel good.
5. **Behaviour** (top): gives me useful information and practical aid, helps me realize my potential, helps me help others, helps me do things, helps me interact, personalizes to my needs, offers unique knowledge.

The top layer is **doing**: useful, practical, personalized service. In plain words: **fewer empty promises**. Show you mean what you say by doing something. And for brands that need to transform, the old method (raise a flag with a new tagline) works less well now that so few taglines are memorable; **actions that demonstrate a new point of view** change perception better. Philips, next lesson, is the showcase.`,
      keyPoints: [
        "Ogilvy research: brands strongest on point of view were 2.2x likelier to grow share than the weakest (predictive, not proof).",
        "Belief gives a brand a way to organize itself amid digital chaos.",
        "Post-modern brands build their own ecosystem: editors, curators, watering holes (American Express OPEN Forum).",
        "The archaeology of mattering: trademark → functional → emotional → purpose → behaviour on top.",
        "Today the top layer is doing: useful information, practical help, personalization, helping people get things done.",
        "To change perception, actions beat new taglines."
      ],
      why: "This is the case for PMT's organic content: be the useful watering hole for Sacramento's new riders (DMV steps, gear advice, practice spots, a graduate community), which ads alone can't do, and which makes every ad more believable.",
      example: {
        title: "PMT: a tagline vs a behaviour",
        before: "New tagline on everything: “Ride Confident.”",
        after: "New behaviours, then ads that show them:\n- a free New Rider Starter Kit (DMV steps, gear checklist, five beginner-friendly local routes);\n- a monthly graduates' practice meetup;\n- a text line for post-class questions in the first month of riding.",
        body: "The tagline is a promise. The behaviours sit at the top of the archaeology of mattering: useful info, practical aid, helping people do things."
      },
      practice: [
        { prompt: "Dissect it: dig through the layers.", fields: ["What does the 2.2x figure show, and what can't it prove?", "Explain the archaeology of mattering from bottom to top in your own words.", "Name a brand you trust because of what it does, not what it says. What does it do?"] },
        {
          prompt: "Apply it: recreate the American Express OPEN pattern for PMT or a ZDub prospect: a “watering hole” where the audience helps each other and the brand curates, plus one ad that puts the customer's goal inside the product.",
          fields: ["Audience and what they need help with", "The space (group, page, event)", "What the brand curates or contributes", "The ad: customer's goal shown inside the product", "How it leads back to business"],
          rubric: ["Useful to the audience even if they never buy", "The brand acts as editor and curator, not just poster", "Members help each other (peer value)", "There's a natural, unpushy path back to the offer"],
          model: "PMT New Riders Club: a free Facebook group for anyone in the Sacramento area learning to ride. PMT curates a pinned “first 90 days” guide, posts a weekly practice-spot pick, and hosts a monthly parking-lot skills meetup; members share gear finds and first-ride stories. Ad: a PMT completion card drawn as a winding road with the student's name on it, line “It's the skills you need for every road ahead. Join the New Riders Club.” Path to business: the meetup is where friends of members ask about classes."
        }
      ],
      today: { task: "Draft the outline of a one-page New Rider Starter Kit for PMT (or a “Before you hire a roofer” checklist for a prospect): 6–8 genuinely useful items.", output: "A one-page outline ready to design in Canva.", minutes: 25 },
      check: [
        { q: "What did Ogilvy find when it ran its point-of-view algorithm on BrandZ?", a: "The best brands on point of view were 2.2 times likelier to grow future market share than the lowest." },
        { q: "Name the five layers of the archaeology of mattering, bottom to top.", a: "Trademark, functional, emotional, purpose, behaviour." },
        { q: "What three roles do post-modern brands play in their own ecosystems?", a: "Editors, curators and watering holes (enablers of culture, an enclave amid interruptions)." }
      ],
      examples: [
        {
          id: "og-ex-amex-open-office-card",
          title: "American Express OPEN and OPEN Forum",
          brand: "American Express", agency: "", year: "",
          format: "Print ad",
          pdfPage: 115,
          what: "A print ad for American Express OPEN, its small-business arm. The gold business card is drawn as a bird's-eye view of a newly fitted office: desks, chairs, a meeting table and a coffee area laid out inside the card's frame, with the cardholder's name and company embossed in the corner. Below: a line about having the buying power to outfit your new office, a question about being ready when growth arrives, “Get ready at OPEN.com”, and the OPEN logo. The caption describes OPEN Forum, an online community where owners trade advice with peers, entrepreneurs and bloggers.",
          idea: "Show the owner's goal (the new office) inside the product, then give them a community that helps them get there.",
          elements: [
            { n: 1, name: "Product as the customer's goal", detail: "The card becomes the floor plan of the office they're building.", principle: "Show the benefit inside the product" },
            { n: 2, name: "Personalization", detail: "A cardholder's name and business on the card: this is yours.", principle: "Behaviour layer: personalized to my needs" },
            { n: 3, name: "Benefit headline", detail: "Buying power to outfit the new office: a concrete moment in a business's growth.", principle: "Specific beats generic" },
            { n: 4, name: "Readiness question + URL", detail: "A question about growth, answered with a place to go.", principle: "One clear next step" },
            { n: 5, name: "Community ecosystem", detail: "OPEN Forum: peers, experts and bloggers helping each other, curated by the brand.", principle: "Brands as editors, curators and watering holes" }
          ],
          layout: { aspect: "3:4", boxes: [
            { n: 1, label: "Card drawn as an office floor plan", x: 8, y: 4, w: 84, h: 52 },
            { n: 2, label: "Cardholder name + company", x: 12, y: 40, w: 26, h: 9 },
            { n: 3, label: "Benefit headline", x: 14, y: 60, w: 70, h: 8 },
            { n: 4, label: "Readiness question + OPEN.com", x: 14, y: 70, w: 60, h: 6 },
            { n: 5, label: "OPEN logo", x: 70, y: 86, w: 20, h: 6 }
          ] },
          recreate: {
            brief: "Put the customer's goal inside an image of your product, personalize it, and point them to a community or resource that helps them reach that goal.",
            fields: [
              { id: "goal", label: "The customer's goal", hint: "PMT: the first solo ride; roofer: a dry, safe home" },
              { id: "frame", label: "Product frame", hint: "Certificate, card, helmet, invoice, van" },
              { id: "personal", label: "Personal touch", hint: "Name, neighbourhood, their bike" },
              { id: "benefit", label: "Benefit line", hint: "One concrete moment it makes possible" },
              { id: "community", label: "Community or resource", hint: "Group, guide, meetup, newsletter" }
            ],
            steps: [
              "Pick the product object that customers recognize (completion card, helmet, truck).",
              "In Canva, mock it up with the goal drawn or photographed inside it (a winding road, a finished roof).",
              "Add a sample name (with permission, or a clearly generic one) for the personal touch.",
              "Write the benefit line and a question with a link to the community or resource.",
              "Launch the community first, then run the ad to it."
            ]
          }
        }
      ]
    },
    {
      id: "og-06f",
      part: "p2",
      chapter: 6,
      chapterTitle: "The Post-Modern Brand · The Well-Behaved Brand: Philips Breathless Choir",
      pages: "117–120",
      title: "The Well-Behaved Brand: Philips Breathless Choir shows, not tells",
      minutes: 7,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 6 · The Post-Modern Brand · The Well-Behaved Brand; Philips Breathless Choir · PDF pp. 117–120", who: "Miles Young" }],
      quotes: [
        { text: "shows – rather than tells – how Philips thinks and acts as a business partner in healthcare and lighting.", page: "118" },
        { text: "We needed more than a 30-second spot to tell such a transformational story", page: "119" }
      ],
      idea: `Many brands need to **transform**. The old way was to plant a flag, usually a new tagline or positioning. But few taglines are memorable or meaningful any more, so **actions that demonstrate a new point of view** now change perception better. Philips is Young's model of this "behaviour branding": an anthropological, design-led approach to innovation that engages key audiences more deeply and **shows rather than tells** how Philips thinks and acts as a partner in healthcare and lighting.

**The brief.** Philips (founded in Eindhoven in 1891) relaunched itself around **"Innovation + You"**: innovation built not for its own sake but around each of us. Rival tech companies talked about how they "invent" or "think different"; Philips would be people-centric. The business goal was a big shift: from being seen as a consumer **lightbulb brand** to a **business-to-business** expert in lighting, healthcare and infrastructure. Philips lived and breathed innovation, but that culture had never been well exposed. So the agency persuaded it to take a leap of faith: use **emotion** to persuade even the most rational business decision-makers.

**Breathless Choir.** A film about how Philips' healthcare technology helps people with respiratory illness live fuller lives. Choirmaster **Gareth Malone**, famous for turning unlikely groups into choirs, took on his hardest challenge: people who struggle to breathe, like **Claire**, who has cystic fibrosis, and **Lawrence**, a 9/11 first responder who lost a third of his lung function. It started gently, with spoken words and a focus on the breath. With patience and practice the group became one, and after a few days they started to believe in themselves. Then the test: a performance at the **Apollo Theater** in New York. The film strip on PDF 119–120 follows the arc: name captions, a plain rehearsal hall, the Apollo marquee on "Day 5", a solo singer, an oxygen unit at a performer's feet, the full choir.

**Why it worked.** Watching people exceed their limits is powerful whoever you are, and it changes how you see Philips. The story needed far more than 30 seconds, and the **long-form** film beat engagement and sharing benchmarks in **20+ markets**. Business media (The Economist, MSNBC, The Wall Street Journal, LinkedIn) carried an unusually emotional film for their audience, and it won a **Grand Prix at Cannes**. It showed how Philips innovates differently, solves problems around real people, acts as a technology partner, and holds human beliefs that touch everything it does.

The bigger lesson: **B2B buyers are people too**, and a belief proven through real human outcomes persuades better than a feature list.`,
      keyPoints: [
        "When few taglines stick, actions that demonstrate a point of view change perception best.",
        "Philips' belief, “Innovation + You” (innovation built around people), needed proof, not a slogan.",
        "Breathless Choir: people with severe breathing problems learn to sing together in days and perform at the Apollo.",
        "Emotion persuades even rational B2B buyers: Cannes Grand Prix, sharing above benchmarks in 20+ markets.",
        "Long-form content earned a place in business media because the story was genuinely transformational."
      ],
      why: "ZDub sells B2B. A real transformation story of one client (PMT before and after) persuades local owners far better than a list of services: the same leap Philips made.",
      example: {
        title: "ZDub: a feature list vs a transformation film",
        before: "“ZDub Media: Meta ads, creative, landing pages, follow-up. Book a call.”",
        after: "A 90-second film: PMT's owner on day one (half-empty weekday classes, stress about the season); the work (shoot day at the range, first ads, the follow-up texts); day sixty (a full class, students on bikes); the owner's verdict in their own words. End card: “ZDub Media. Local businesses, fuller calendars.”",
        body: "Philips' move in miniature: show what the partner does through a human outcome, and let the audience draw the conclusion."
      },
      practice: [
        { prompt: "Dissect it: why emotion for engineers and CFOs?", fields: ["Why did Philips choose emotion to reach B2B decision-makers?", "What's the difference between showing and telling a belief? Give a PMT example of each.", "Argue the other side: when would a B2B buyer rightly ignore an emotional film?"] },
        {
          prompt: "Apply it: recreate Breathless Choir for PMT: a group facing a real limitation, an expert guide, a short training arc and a public payoff.",
          fields: ["The group and their limitation", "The guide", "The arc (day 1 → final day)", "The public payoff moment", "How PMT's belief is shown, not told"],
          rubric: ["Real people with real stakes", "A visible arc over days, including setbacks", "A public test at the end", "The brand is the enabler; no product pitch", "Length fits the story (long-form if needed, with short cut-downs)"],
          model: "Group: six adults who were told they're “not coordinated” or who failed a previous attempt. Guide: PMT's most patient instructor. Arc: day 1, they can barely balance walking the bike; day 2, first slow turns and one tearful stall; final day, smooth figure-eights. Payoff: their families and friends watch the final evaluation from the fence and cheer. Belief shown: anyone can learn with patient teaching (never said aloud). Title: “Not a Natural”. 3-minute YouTube film, plus 30s and 15s cuts for Meta."
        }
      ],
      today: { task: "Write a 6-beat outline for a 60–90 second ZDub case video about one client, and list the shots you'd need for each beat.", output: "A beat sheet with a shot list.", minutes: 25 },
      check: [
        { q: "What business shift was Philips trying to make?", a: "From being seen as a consumer lightbulb brand to a B2B expert in lighting, healthcare and infrastructure, built on “Innovation + You”." },
        { q: "Who were the choir, and where did they perform?", a: "People with respiratory illness (e.g. Claire with cystic fibrosis, Lawrence, a 9/11 first responder), led by Gareth Malone; they performed at the Apollo Theater in New York." },
        { q: "What does Young say now works better than a new tagline for changing perception?", a: "Actions that demonstrate a new point of view." }
      ],
      examples: [
        {
          id: "og-ex-philips-breathless-choir",
          title: "Philips “Breathless Choir”",
          brand: "Philips", agency: "Ogilvy & Mather", year: "",
          format: "Online film",
          pdfPage: 118,
          what: "A documentary-style film. Choirmaster Gareth Malone gathers people with serious breathing problems, among them Claire, who has cystic fibrosis, and Lawrence, a 9/11 first responder who lost a third of his lung function, and in a few days turns them into a choir. It opens quietly with spoken words and breathing exercises, follows rehearsals and doubts in a plain hall, and ends on “Day 5” with a performance at the Apollo Theater in Harlem, an oxygen unit at one singer's feet on stage.",
          idea: "Prove a B2B belief (innovation built around people) with a human transformation, not a product demo.",
          elements: [
            { n: 1, name: "Brand belief", detail: "“Innovation + You”: technology in service of real lives.", principle: "Big IdeaL, behaviour branding" },
            { n: 2, name: "Real people, real limits", detail: "Named people with serious conditions, not actors.", principle: "Authenticity" },
            { n: 3, name: "Credible guide", detail: "A famous choirmaster known for transforming unlikely groups.", principle: "Borrow credibility honestly" },
            { n: 4, name: "Transformation arc", detail: "Breath, doubt, practice, belief, over a few days.", principle: "Show, don't tell" },
            { n: 5, name: "Public payoff", detail: "A performance at the Apollo: a high-stakes, emotional finish.", principle: "Emotion persuades even rational buyers" },
            { n: 6, name: "Long-form distribution", detail: "Too big for 30 seconds; carried by business media and LinkedIn across 20+ markets.", principle: "Content in the right ecosystem" }
          ],
          beats: [
            { n: 1, label: "Meet Claire and Lawrence in their everyday lives (name captions)" },
            { n: 2, label: "First session: spoken words and a focus on the breath" },
            { n: 3, label: "Rehearsals in a plain hall: patience, practice, doubts" },
            { n: 4, label: "Day 5: the Apollo Theater marquee" },
            { n: 5, label: "On stage: a solo voice; an oxygen unit at a singer's feet" },
            { n: 6, label: "The full choir sings; the audience is moved; Philips sign-off" }
          ],
          recreate: {
            brief: "Show your belief through a group of real people overcoming a limit with your help, across a short filmed arc that ends in a public moment.",
            fields: [
              { id: "belief", label: "The belief to prove", hint: "PMT: anyone can learn to ride with patient teaching" },
              { id: "group", label: "The group", hint: "Who, and what limits them" },
              { id: "guide", label: "The guide", hint: "Instructor, owner, expert" },
              { id: "arc", label: "The arc", hint: "Day-by-day milestones and one setback" },
              { id: "payoff", label: "Public payoff", hint: "Final evaluation, first group ride, a crowd" },
              { id: "distribution", label: "Where it runs", hint: "YouTube long-form + Meta cut-downs" }
            ],
            steps: [
              "Recruit 4–6 real participants (with signed releases) whose limitation is visible and relatable.",
              "Film short interviews on day one: what they fear, why they're here.",
              "Shoot every session handheld on iPhone; capture setbacks as well as wins.",
              "Stage the public payoff with friends and family present.",
              "Edit a 3–4 minute film in CapCut, then 60s, 30s and 15s cut-downs.",
              "Post the long version on YouTube and run the cut-downs as Meta ads."
            ]
          }
        }
      ]
    },
    {
      id: "og-06g",
      part: "p2",
      chapter: 6,
      chapterTitle: "The Post-Modern Brand · The Inclusive Brand: women and gender",
      pages: "120–123",
      title: "The Inclusive Brand: the consumer is not a moron, so go back to the product",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 6 · The Post-Modern Brand · The Inclusive Brand (women) · PDF pp. 120–123", who: "Miles Young" }],
      quotes: [
        { text: "Sexism is an instantly shareable vice.", page: "121" },
        { text: "Lesson number 1 in brand building: always go back to the product.", page: "122" }
      ],
      idea: `David Ogilvy famously wrote that **the consumer is not a moron, she is your wife**. Yet, Young notes, about **40% of women** typically don't recognize themselves in the advertising aimed at them. In the digital age that's as untenable as it is wrong, because **sexism is instantly shareable**: activist Cindy Gallop's point is that social media is just a new way to do what people have always done, share things, loudly.

**Unilever's business case.** The world's biggest advertiser had the courage to look into **its own data** and confirm the stereotyping across its work (and Ogilvy's). What made **#Unstereotype** compelling: progressive portrayals of women weren't just more enjoyable but **more impactful**. It's a business case, not only a moral one.

**The devil is in the details.** "Femvertising" became an unhelpful catch-all and a bandwagon of hashtags (#thisgirlcan, #inspireher, #girlscan, #likeagirl, #notsorry), and they're not all equally well grounded.
- **Pantene #NotSorry** encouraged women to stop apologizing when they've done nothing wrong, ending "Be strong and shine". Young's question: what on earth does that have to do with shiny hair? Unsurprisingly, **no business lift**. It **borrowed an agenda** instead of rooting one in the brand.
- **Always #LikeAGirl** was a hit at Cannes with big press and social attention, but Young asks whether, firmly in "girl power" mode, it lacks a connection to the product and a nuanced expression of women's needs.
- **Under Armour "I will what I want"** gets it right. The debate has moved from feminism to soft feminism to girl power to **deeper fulfilment**, and Under Armour recognizes that women are surrounded by superficially "empowering" messages that actually disempower by generalizing. Sports products that let you do what you want celebrate **strength**, and that link is real. Hence Young's rule: **always go back to the product.**

**The industry's own problem.** Behind the stereotyping is the business's mindset and an inbuilt diversity issue: not enough women in management or creative departments, reflecting the wider STEM gap, so digital technology plus creative advertising "don't make a diverse marriage". Young admits it was depressing that the internet founders he picked, and the greats of Chapter 14, were all men, and that this wasn't unconscious bias.

Ogilvy's line holds up in the digital age. It's just enforced more harshly now, because the audience can answer back in public.`,
      keyPoints: [
        "Ogilvy's “the consumer is not a moron, she is your wife” is still broken: 40% of women don't recognize themselves in ads aimed at them.",
        "In digital, sexism is instantly shareable, so stereotypes are a business risk.",
        "Unilever's #Unstereotype data: progressive portrayals were more enjoyable and more impactful.",
        "Don't borrow an agenda: Pantene's #NotSorry had no link to shiny hair and no business lift.",
        "Under Armour's “I will what I want” works because strength connects to what the product does. Always go back to the product.",
        "The industry's own lack of diversity feeds the problem."
      ],
      why: "PMT's market includes many women and older first-timers who never see themselves in motorcycle ads (young guys on sport bikes). Showing them, with the class's real role (skills, confidence), is both right and more effective.",
      example: {
        title: "PMT: show who actually learns to ride",
        before: "Stock photo: a young guy in black leathers on a sport bike. Headline: “Unleash the beast.”",
        after: "A real student, a 45-year-old woman with her helmet under her arm after her first class. Headline: “I didn't come to look tough. I came to learn to ride.” Line: “Beginner classes · bikes and helmets provided.”",
        body: "The “after” respects the real customer and goes back to the product: the class builds the skill."
      },
      practice: [
        { prompt: "Dissect it: rooted vs borrowed.", fields: ["What does “borrowing an agenda” mean? Why did Pantene fail by that standard?", "Why does Young praise Under Armour but question Always?", "Where do ads in Zach's niches (motorcycles, trades, med spas) stereotype their customers?"] },
        {
          prompt: "Apply it: recreate Under Armour's “I will what I want” layout for PMT: a real rider, the noise people say about them in faded type, their own bold statement, and the product line that makes it true.",
          fields: ["The real person", "The noise (faded type)", "Their bold statement", "Product line (what PMT provides)", "Brand line"],
          rubric: ["Rooted in the product's real benefit (Lesson 1: go back to the product)", "A real person, not a stereotype", "Clear contrast between the noise and the chosen statement", "Brand sign-off small and confident"],
          model: "Real student: Maria, 52 (with permission), in riding jacket, looking straight at camera. Faded grey on the left: “TOO OLD TO START. TOO RISKY.” Bold black on the right: “I WILL RIDE MY OWN WAY.” Product line: “Beginner course · small groups · bikes and helmets provided.” Sign-off: PMT logo + “Every rider started on day one.”"
        }
      ],
      today: { task: "Audit PMT's current ad images: list who appears (age, gender, type of bike). Compare it to PMT's actual student mix from recent class rosters.", output: "A two-column list: who's in the ads vs who's in the classes.", minutes: 20 },
      check: [
        { q: "What did Unilever's #Unstereotype data show?", a: "Progressive portrayals of women were not just more enjoyable but more impactful: a business case, not just a moral one." },
        { q: "Why does Young criticize Pantene's #NotSorry?", a: "It borrowed an agenda with no connection to the product (shiny hair), and produced no business lift." },
        { q: "What is Young's “Lesson number 1 in brand building”?", a: "Always go back to the product." }
      ],
      examples: [
        {
          id: "og-ex-unilever-unstereotype",
          title: "Unilever #Unstereotype",
          brand: "Unilever", agency: "", year: "",
          format: "Other",
          pdfPage: 121,
          what: "Not a single ad but a commitment by the world's biggest advertiser. Unilever examined its own advertising data (including work made by Ogilvy), confirmed it stereotyped women, and committed to more progressive portrayals. The finding that made the case: progressive portrayals were not only more enjoyable but more impactful.",
          idea: "Use your own data to turn inclusion into a business case, then change how the work is made.",
          elements: [
            { n: 1, name: "Self-audit", detail: "Looking at its own ads and data, not pointing at others.", principle: "Transparency" },
            { n: 2, name: "Honest admission", detail: "Confirming the stereotyping out loud.", principle: "Proof of authenticity" },
            { n: 3, name: "Performance proof", detail: "Progressive portrayals performed better, not just felt better.", principle: "A business case, not only a moral one" },
            { n: 4, name: "Public commitment", detail: "A named programme and hashtag that holds the company to account.", principle: "Brands that DO" }
          ],
          beats: [
            { n: 1, label: "Audit the brand's own advertising" },
            { n: 2, label: "Confirm the stereotyping in the data" },
            { n: 3, label: "Compare progressive vs stereotyped portrayals" },
            { n: 4, label: "Find progressive work is more impactful" },
            { n: 5, label: "Commit publicly (#Unstereotype) and change the briefs" }
          ],
          recreate: {
            brief: "Audit who your ads show and how, compare performance, and turn what you find into a standard for every future brief.",
            fields: [
              { id: "ads", label: "Which ads to audit", hint: "e.g. the last 20 Meta ads" },
              { id: "code", label: "What to record for each", hint: "Age, gender, role, setting, stereotype?" },
              { id: "metric", label: "Performance metric", hint: "CTR, cost per lead, booking rate" },
              { id: "finding", label: "What you found", hint: "Who's missing, what performed" },
              { id: "standard", label: "The new standard", hint: "A rule for future casting and copy" }
            ],
            steps: [
              "Export the last 20 ads (Meta Ads Manager) with their results into a sheet.",
              "Code each ad: who appears, in what role, and whether it leans on a stereotype.",
              "Compare results across groups; note who never appears at all.",
              "Write a one-paragraph casting and copy standard for the client.",
              "Shoot the next batch with real customers who fill the gaps, then compare results again."
            ]
          }
        },
        {
          id: "og-ex-pantene-not-sorry",
          title: "Pantene #NotSorry “Be strong and shine” (a cautionary case)",
          brand: "Pantene", agency: "", year: "",
          format: "Online film",
          pdfPage: 121,
          what: "A short film that opens on the question “Why are women always apologizing?” and shows women saying sorry in everyday moments (in a meeting, sitting beside a man in a waiting area) when they've done nothing wrong, then replays them confidently without the apology. End cards: “Don't be sorry” and “Be strong and shine”, with the Pantene Pro-V logo. Young: a real insight, but no connection to shiny hair, and no business lift.",
          idea: "A strong human observation, borrowed rather than rooted: nothing links not apologizing to what the product does.",
          elements: [
            { n: 1, name: "Provocative question", detail: "Opens with a question many women recognize instantly.", principle: "Insight that resonates" },
            { n: 2, name: "Recognizable moments", detail: "Small everyday apologies the audience has made themselves.", principle: "Truth from real life" },
            { n: 3, name: "Replay without the apology", detail: "The same scenes, played with confidence.", principle: "Show the change" },
            { n: 4, name: "Tagline", detail: "“Be strong and shine” tries to bridge to hair, but the link is thin.", principle: "Go back to the product (the flaw)" }
          ],
          beats: [
            { n: 1, label: "Title card: Why are women always apologizing?" },
            { n: 2, label: "Everyday scenes: women say sorry when they've done nothing wrong" },
            { n: 3, label: "The scenes replay with confidence, no apology" },
            { n: 4, label: "End cards: Don't be sorry. Be strong and shine. Pantene logo" },
            { n: 5, label: "Outcome (per Young): attention, but no business lift" }
          ],
          recreate: {
            brief: "Keep the strong format (a recognizable everyday habit, then the confident replay) but make sure the fix is something your product genuinely does.",
            fields: [
              { id: "habit", label: "The everyday habit", hint: "PMT: saying “I could never ride”" },
              { id: "moments", label: "3–4 recognizable moments", hint: "Where people say or do it" },
              { id: "replay", label: "The confident replay", hint: "What it looks like after" },
              { id: "link", label: "The product link", hint: "How your product actually causes the change" },
              { id: "tagline", label: "End line", hint: "Connects the change to the product" }
            ],
            steps: [
              "Collect real phrases customers use (reviews, DMs, calls).",
              "Script 3 short scenes where the habit shows up, then the replay.",
              "Make sure the replay is visibly caused by the product (e.g. PMT class footage between scenes).",
              "Shoot with real customers on iPhone; edit to 30–45s in CapCut.",
              "Check the end line: if you swapped in another brand's logo, would it still work? If yes, rewrite."
            ]
          }
        },
        {
          id: "og-ex-always-like-a-girl",
          title: "Always #LikeAGirl",
          brand: "Always", agency: "", year: "",
          format: "Online film",
          pdfPage: 122,
          what: "A film for the feminine-care brand Always in which people are asked to run, throw and fight “like a girl” and respond with weak, flailing parodies; young girls asked the same thing simply run and throw as hard as they can. It asks when “like a girl” became an insult and invites people to reclaim it. The still in the book shows a freckled girl gripping a baseball, the Always logo on a navy swoosh. Young notes it was a Cannes hit with big press and social attention, but asks whether it lacks a connection to the product.",
          idea: "Expose an everyday phrase as an insult and reclaim it, though Young questions how it ties back to the product.",
          elements: [
            { n: 1, name: "Social-experiment format", detail: "Real people respond to a simple prompt on camera.", principle: "Show, don't tell" },
            { n: 2, name: "Contrast", detail: "Older participants parody; young girls give full effort.", principle: "Contrast as proof" },
            { n: 3, name: "Reclaimed phrase", detail: "Turns an insult into a hashtag people can share.", principle: "Participation" },
            { n: 4, name: "Product link (Young's question)", detail: "Girl-power message, but how does it connect to what the product does?", principle: "Always go back to the product" }
          ],
          beats: [
            { n: 1, label: "A casting-call studio; participants are asked to act “like a girl”" },
            { n: 2, label: "Teens and adults do weak, flailing parodies" },
            { n: 3, label: "Young girls do the same tasks with full effort" },
            { n: 4, label: "The question: when did “like a girl” become an insult?" },
            { n: 5, label: "Participants redo it with pride; #LikeAGirl and the Always logo" }
          ],
          recreate: {
            brief: "Take a phrase people use without thinking that holds your audience back, show its effect in a simple on-camera experiment, reclaim it, and tie the reclaim to what your product actually does.",
            fields: [
              { id: "phrase", label: "The phrase", hint: "PMT: “I'm not a natural”" },
              { id: "experiment", label: "The on-camera prompt", hint: "What you ask people to do or say" },
              { id: "contrast", label: "The contrast group", hint: "Who reveals the truth" },
              { id: "reclaim", label: "The reclaimed version", hint: "The new meaning" },
              { id: "product", label: "Product link", hint: "How the product makes the reclaim real" }
            ],
            steps: [
              "Pick a phrase your audience uses about themselves that stops them buying.",
              "Set up a simple white-wall “casting” space and ask real people the prompt on camera.",
              "Film a contrast group (graduates, kids, experts) answering the same prompt.",
              "Close with footage of the product in action making the reclaim true.",
              "Edit to 60s for YouTube/Facebook and 20s for Reels; use the phrase as the hashtag."
            ]
          }
        },
        {
          id: "og-ex-under-armour-i-will-what-i-want",
          title: "Under Armour “I will what I want” (Gisele Bündchen)",
          brand: "Under Armour", agency: "", year: "",
          format: "Print ad",
          pdfPage: 123,
          what: "A wide ad on pale grey: Gisele Bündchen in an Under Armour sports bra and patterned leggings, hands wrapped, looking straight at camera. To her left, in faded grey capitals, “I WILL BE PRAISED / I WILL BE JUDGED”; to her right, in bold black, “I WILL NOT BE DISTRACTED.” Beneath it, a line about the Armour Bra collection as the hardest-working bras in sports, the UA logo with “I WILL WHAT I WANT”, and a small credit listing her as model, philanthropist, entrepreneur and mother.",
          idea: "Fade out the noise the world aims at a woman, set her own focus in bold, and make the product the tool of that focus.",
          elements: [
            { n: 1, name: "Strong, real woman", detail: "Centre frame, direct gaze, ready to train.", principle: "The consumer is not a moron" },
            { n: 2, name: "Faded noise", detail: "Praise and judgement in light grey: present but powerless.", principle: "Contrast" },
            { n: 3, name: "Bold chosen statement", detail: "Her own declaration in heavy black type.", principle: "Deeper fulfilment, not generic empowerment" },
            { n: 4, name: "Product line", detail: "The bra collection as the hardest-working in sports: strength tied to the product.", principle: "Always go back to the product" },
            { n: 5, name: "Brand line + logo", detail: "“I will what I want”: the brand's belief as a personal vow.", principle: "Big IdeaL in a line" },
            { n: 6, name: "Multi-role credit", detail: "Model, philanthropist, entrepreneur, mother: she isn't one stereotype.", principle: "Don't generalize the person" }
          ],
          layout: { aspect: "10:7", boxes: [
            { n: 1, label: "Athlete, centre, direct gaze", x: 34, y: 8, w: 34, h: 92 },
            { n: 2, label: "Faded: praised / judged", x: 0, y: 40, w: 33, h: 10 },
            { n: 3, label: "Bold: I will not be distracted", x: 64, y: 46, w: 36, h: 10 },
            { n: 4, label: "Product line", x: 64, y: 60, w: 30, h: 5 },
            { n: 5, label: "UA logo + I will what I want", x: 64, y: 82, w: 34, h: 6 },
            { n: 6, label: "Credit line", x: 64, y: 92, w: 32, h: 6 }
          ] },
          recreate: {
            brief: "Put your customer centre frame, fade out what other people say about them, and set their own bold statement beside the product that helps them do it.",
            fields: [
              { id: "person", label: "The real customer", hint: "With permission; strong pose, direct gaze" },
              { id: "noise", label: "The noise (faded)", hint: "What others say: “too old”, “too risky”" },
              { id: "statement", label: "Their bold statement", hint: "“I will ___.”" },
              { id: "productline", label: "Product line", hint: "What the product does to make it true" },
              { id: "brandline", label: "Brand line", hint: "Your belief as a short vow" },
              { id: "credit", label: "Credit line", hint: "Their name and roles: “Maria · nurse, grandmother, rider”" }
            ],
            steps: [
              "Photograph the customer against a plain grey wall, centre frame, direct gaze (iPhone portrait mode).",
              "In Canva (1080×1350 or 16:9), place the noise in light grey on one side.",
              "Set their statement in bold black on the other side, with the product line beneath.",
              "Add the logo, brand line and a small credit line in the corner.",
              "Run it as a static Meta ad and a 9:16 Story; ask the customer to share it."
            ]
          }
        }
      ]
    },
    {
      id: "og-06h",
      part: "p2",
      chapter: 6,
      chapterTitle: "The Post-Modern Brand · The Inclusive Brand: LGBTQ mainstreaming",
      pages: "124–128",
      title: "The Inclusive Brand: slipstream is turning into mainstream",
      minutes: 8,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 6 · The Post-Modern Brand · The Inclusive Brand (gender and LGBTQ) · PDF pp. 124–128", who: "Miles Young" }],
      quotes: [
        { text: "slipstream is turning into mainstream.", page: "125" },
        { text: "Brands that do believe in diversity at their core.", page: "127" }
      ],
      idea: `Young widens the inclusive brand beyond women. Shelley Zalis, who pioneered online market research and founded The Girls' Lounge (a pop-up mixing activism and manicures), argues that as norms become more nurturing, companies become more successful, and she stresses that the debate is about **gender**, including how men are portrayed.

**Honey Maid.** In March 2014, at the height of America's same-sex marriage debate, Honey Maid graham crackers aired **"This is Wholesome"**, linking wholesome families (including a gay couple and their kids) to wholesome food. It drew praise and, sadly, hate. Instead of crumbling, Honey Maid **reaffirmed its values** with **"Love"**: artists took printouts of the hate mail and comments and used them to spell out the word *love*.

**Guinness, then and now.** When Guinness ran an ad featuring Welsh rugby player Gareth Thomas, who came out in 2009, it rang a bell for Young: Ogilvy had **lost the Guinness account** largely because of the uproar, especially among pub licensees, over the first gay Guinness commercial in **1995**, a brave, lonely attempt ahead of its time. Within 25 years, what seemed unacceptable became normal even in the most masculine corners of culture.

**How digital opened the silos.** Online targeting first let brands reach discrete communities and speak to them with relevant content. Then the lids came off altogether: **slipstream is turning into mainstream.**
- **Red Label** tea, a staple in India and Pakistan, made a band of transgender singers its ambassadors (the 6 Pack Band, PDF 125), a strong cultural statement.
- **Burger King's Proud Whopper** (PDF 126): same burger, different wrapper, proving LGBTQ customers are the same inside as everyone else.

**Behaviour, not just audience access.** This isn't only about tapping the spending power of diverse audiences; it's about brands **adapting their behaviour** and believing in diversity at their core. **Tiffany & Co.**, the epitome of traditional luxury gifting, honoured tradition while celebrating modern love: just two and a half years after New York legalized same-sex marriage, it put a gay couple in its advertising, endorsing them as mainstream. Ogilvy launched **Ogilvy Pride** in 2008 (its neon sign is on PDF 127), now active in multiple markets with Stonewall as a partner. Its staff are mostly Millennials, and almost **50% of Millennials** say they're more likely to support a brand after seeing an LGBTQ-themed ad.

The pattern across these cases: the brands that won stood by what they showed when it was challenged, and tied the statement to something real about the brand (wholesome food, a burger anyone can eat, a gift that celebrates love).`,
      keyPoints: [
        "Digital first let brands reach small communities with targeted content; then the walls came down and niche became mainstream.",
        "Honey Maid answered hate with “Love”, made from critics' own messages: reaffirming beats retreating.",
        "Burger King's Proud Whopper made its point with a product you can hold: same burger, different wrapper.",
        "Within a generation, traditional brands (Guinness, Tiffany) went from risk to normal; Ogilvy lost Guinness over a 1995 gay ad.",
        "Inclusion is brand behaviour, not just audience access; almost half of Millennials are likelier to support a brand after an LGBTQ-themed ad."
      ],
      why: "For a local brand, inclusion means showing the real range of people it serves, deciding in advance what it will stand by, and tying it to the product. PMT's students already come from every background; its ads can too.",
      example: {
        title: "PMT: same course, every rider",
        before: "Every ad shows the same type of rider; there's no plan for what to do if an ad featuring someone different draws angry comments.",
        after: "A graduation photo wall: identical PMT completion cards held by very different real riders (a 19-year-old, a 60-year-old grandmother, a same-sex couple who took the class together, a veteran). Line: “Different riders. Same course. Same skills.” Agreed with the owner in advance: keep the ad up, reply once calmly (“Everyone who wants to ride is welcome here”), and don't argue in the comments.",
        body: "Proud Whopper logic (the product is the same for everyone) plus Honey Maid's resolve (decide in advance to stand by it)."
      },
      practice: [
        { prompt: "Dissect it: from audience to behaviour.", fields: ["What does “slipstream is turning into mainstream” mean in practice?", "Why did Honey Maid's second film (“Love”) matter as much as the first?", "What's the difference between reaching a diverse audience and behaving as an inclusive brand?"] },
        {
          prompt: "Apply it: recreate the Proud Whopper pattern for PMT or a ZDub prospect: keep the product identical, change only its presentation, to make a point about belonging.",
          fields: ["The point (we're all the same inside)", "The product that stays the same", "What changes on the outside", "The reveal moment", "The line"],
          rubric: ["The product itself is unchanged", "The visual change is instantly readable", "There's a reveal or discovery moment for customers", "The line states the shared truth in a few words"],
          model: "PMT: for one month, every student's completion card comes in a different colour sleeve they choose (dozens of colours), while the card inside is identical. Reveal: at graduation, students pull out the same card and read the line printed inside: “Same course. Same skills. Every rider.” Film the reveal at three classes and post the montage."
        }
      ],
      today: { task: "Collect 10 real PMT student photos (with permission) that show the actual range of people who take the class. Save them in a folder for the next ad batch.", output: "A folder of 10 permissioned photos with names and one-line stories.", minutes: 25 },
      check: [
        { q: "How did Honey Maid respond to hate mail about “This is Wholesome”?", a: "With “Love”: artists used printouts of the hate mail and comments to spell out the word love, reaffirming its values." },
        { q: "What happened to Ogilvy after the first gay Guinness commercial in 1995?", a: "It lost the Guinness account, largely because of the uproar, especially among licensees." },
        { q: "What share of Millennials say they're more likely to support a brand after an LGBTQ-themed ad?", a: "Almost 50%." }
      ],
      examples: [
        {
          id: "og-ex-honey-maid-this-is-wholesome",
          title: "Honey Maid “This is Wholesome”",
          brand: "Honey Maid", agency: "", year: "2014",
          format: "TV spot",
          pdfPage: 124,
          what: "A TV commercial for Honey Maid graham crackers showing modern families in everyday moments. The still in the book: two dads and their two sons standing outside their house, the kids holding Honey Maid boxes, with a hand-drawn “Whole Grain” badge in the frame. It drew a parallel between wholesome families and wholesome food, aired in March 2014 at the height of the same-sex marriage debate, and provoked both praise and hate.",
          idea: "Stretch the product's core word, “wholesome”, to include the real modern families who eat it.",
          elements: [
            { n: 1, name: "Product word extended to people", detail: "“Wholesome” describes the crackers and the families.", principle: "Rooted in the product, not borrowed" },
            { n: 2, name: "Real-looking families", detail: "Ordinary homes and moments, not activism.", principle: "Normalcy is the message" },
            { n: 3, name: "Hand-drawn product badges", detail: "Graphics like “Whole Grain” keep tying the story back to the crackers.", principle: "Go back to the product" },
            { n: 4, name: "Timing", detail: "Aired at the peak of a national debate: a deliberate stance.", principle: "Cultural tension" }
          ],
          beats: [
            { n: 1, label: "Everyday moments with different families" },
            { n: 2, label: "Two dads and their sons outside their home with Honey Maid boxes" },
            { n: 3, label: "Hand-drawn badges link the families to wholesome ingredients" },
            { n: 4, label: "Message: what makes a family wholesome doesn't change" },
            { n: 5, label: "Response: praise, and a wave of hate mail" }
          ],
          recreate: {
            brief: "Take your product's core word (wholesome, safe, fresh, reliable) and show it describing the real, varied people who use it.",
            fields: [
              { id: "word", label: "Your product's core word", hint: "PMT: “safe”, “confident”" },
              { id: "people", label: "The real customers you'll show", hint: "Range of ages, families, backgrounds (with permission)" },
              { id: "moments", label: "Everyday moments", hint: "Arriving, gearing up, first lap, graduation" },
              { id: "badges", label: "Product tie-ins", hint: "Graphics or captions that link back to the product" },
              { id: "stance", label: "What you'll stand by", hint: "Agree with the owner before it runs" }
            ],
            steps: [
              "Pick the word and list 5 real customers whose stories fit it.",
              "Film each in an everyday moment with the product (iPhone, natural light).",
              "Add hand-drawn style badges in CapCut or Canva that tie each moment to the product.",
              "Cut to 30s for Meta and 15s for Reels.",
              "Agree a comment-moderation plan with the owner before launch."
            ]
          }
        },
        {
          id: "og-ex-honey-maid-love",
          title: "Honey Maid “Love”",
          brand: "Honey Maid", agency: "", year: "2014",
          format: "Online film",
          pdfPage: 124,
          what: "Honey Maid's answer to the hate mail and online comments that “This is Wholesome” received. Rather than crumble, the brand showed artists taking printouts of the negative messages and using them to spell out the word “love”, reaffirming its values in public.",
          idea: "Answer criticism by reaffirming your values, using the critics' own words as the raw material.",
          elements: [
            { n: 1, name: "Reaffirm, don't retreat", detail: "The brand doubled down on its values instead of pulling the ad.", principle: "Brands that believe in diversity at their core" },
            { n: 2, name: "Transform the negativity", detail: "The hate itself becomes the physical material of the reply.", principle: "Show, don't tell" },
            { n: 3, name: "Visible craft", detail: "Artists' hands at work make the transformation feel human and deliberate.", principle: "Authenticity" },
            { n: 4, name: "One-word message", detail: "“Love”: simple, unarguable, shareable.", principle: "Simplicity" }
          ],
          beats: [
            { n: 1, label: "The negative messages arrive: letters, emails, comments" },
            { n: 2, label: "Artists print them out" },
            { n: 3, label: "The printouts are shaped and arranged by hand" },
            { n: 4, label: "Reveal: together they spell the word love" },
            { n: 5, label: "The brand stands by its families" }
          ],
          recreate: {
            brief: "When you're criticized for something you believe in, turn the criticism itself into the material for a visible, positive reply.",
            fields: [
              { id: "criticism", label: "The criticism", hint: "What people are saying" },
              { id: "value", label: "The value you're standing by", hint: "One sentence" },
              { id: "material", label: "How you'll make the criticism physical", hint: "Printouts, screenshots, notes" },
              { id: "transformation", label: "What you'll make from it", hint: "A word, a shape, an image" },
              { id: "word", label: "The final word or line", hint: "Short and positive" }
            ],
            steps: [
              "Screenshot the criticism (remove names) and print it.",
              "Decide the word or image you'll build from it.",
              "Film the making in time-lapse on iPhone, with close-ups of hands.",
              "End on the finished piece and one line of text.",
              "Post it calmly, without naming or attacking anyone."
            ]
          }
        },
        {
          id: "og-ex-guinness-gareth-thomas",
          title: "Guinness and Gareth Thomas (vs the 1995 gay Guinness ad)",
          brand: "Guinness", agency: "", year: "",
          format: "TV spot",
          pdfPage: 124,
          what: "Guinness ran an ad featuring Welsh rugby player Gareth Thomas, who came out in 2009: a beer brand known for its masculine image telling the story of a gay man in one of sport's toughest arenas. Young contrasts it with the first gay Guinness commercial in 1995, whose uproar, especially among pub licensees, largely cost Ogilvy the account. The book describes these ads but doesn't show them.",
          idea: "The same brand can make the same point decades apart with opposite results: cultural timing and stakeholders matter.",
          elements: [
            { n: 1, name: "Real hero in a masculine arena", detail: "A rugby star: credibility in exactly the world the brand speaks to.", principle: "Slipstream to mainstream" },
            { n: 2, name: "Brand character", detail: "Strength and character, applied to courage and honesty.", principle: "Big IdeaL: the brand's best self" },
            { n: 3, name: "Cultural timing", detail: "1995 was too early; two decades later it felt normal.", principle: "Cultural tension changes over time" },
            { n: 4, name: "Stakeholder risk", detail: "In 1995 the licensees, not consumers, drove the backlash.", principle: "Know every stakeholder" }
          ],
          beats: [
            { n: 1, label: "1995: the first gay Guinness commercial airs" },
            { n: 2, label: "Uproar, especially among pub licensees" },
            { n: 3, label: "Ogilvy loses the Guinness account" },
            { n: 4, label: "2009: Gareth Thomas comes out" },
            { n: 5, label: "Guinness later builds an ad around him: gay normalcy in a masculine world" }
          ],
          recreate: {
            brief: "Feature a real person who breaks a stereotype in the most traditional corner of your category, tell their story with respect, and brief every stakeholder before it runs.",
            fields: [
              { id: "arena", label: "The traditional arena", hint: "PMT: the hardcore riding scene" },
              { id: "person", label: "The real person", hint: "Who breaks the stereotype" },
              { id: "story", label: "Their story", hint: "In their words" },
              { id: "stakeholders", label: "Stakeholders to brief first", hint: "Owner, staff, partners, regulars" },
              { id: "line", label: "The closing line", hint: "Ties their character to the brand's" }
            ],
            steps: [
              "Find the person through the client's own community, not a casting agency.",
              "Record a relaxed interview; let them tell it their way.",
              "Show the draft to the owner and key staff before anyone else sees it.",
              "Cut a 60s film and a 15s teaser in CapCut.",
              "Prepare calm, consistent replies for comments before launch."
            ]
          }
        },
        {
          id: "og-ex-red-label-6-pack-band",
          title: "Red Label tea × 6 Pack Band “Hum Hain Happy”",
          brand: "Red Label (tea)", agency: "", year: "",
          format: "Online film",
          pdfPage: 125,
          what: "A bright music video by the 6 Pack Band, a band of transgender singers, presented with Y-Films and Red Label tea. Three singers in vivid pink, yellow and green outfits and jewellery walk smiling through a busy street; the title “Hum Hain Happy” (“we are happy”) runs in bold yellow capitals, with the Red Label logo on the band's badge. Red Label, a staple in India and Pakistan, made the band its ambassadors.",
          idea: "Make a marginalized group the stars of something joyful and entertaining, with the brand as presenter rather than hero.",
          elements: [
            { n: 1, name: "Ambassadors from the community", detail: "Transgender singers fronting a mainstream staple brand.", principle: "Slipstream to mainstream" },
            { n: 2, name: "Entertainment first", detail: "A real pop song and music video, not a message ad.", principle: "Content people choose to watch" },
            { n: 3, name: "Joyful tone", detail: "Happiness and confidence, not pity.", principle: "Celebrate strength, not weakness" },
            { n: 4, name: "Everyday setting", detail: "A busy, ordinary street: they belong here.", principle: "Normalcy" },
            { n: 5, name: "Brand as presenter", detail: "Red Label's logo on the band's badge: present, not preaching.", principle: "Brand present without pitching" }
          ],
          beats: [
            { n: 1, label: "The singers walk through a busy street in bright outfits" },
            { n: 2, label: "The song kicks in: “Hum Hain Happy”" },
            { n: 3, label: "Performance and everyday moments, full of joy" },
            { n: 4, label: "Red Label presents the band as its ambassadors" }
          ],
          recreate: {
            brief: "Make people your category usually ignores the stars of something entertaining, with your brand as the presenter, not the hero.",
            fields: [
              { id: "group", label: "Who your category ignores", hint: "Real people, with their full involvement" },
              { id: "format", label: "Entertainment format", hint: "Song, series, challenge, mini-doc" },
              { id: "tone", label: "Tone", hint: "Joyful, proud, funny" },
              { id: "setting", label: "Everyday setting", hint: "Where they'd naturally be" },
              { id: "presenter", label: "How the brand appears", hint: "“Presented by”, logo on gear" }
            ],
            steps: [
              "Partner with real people from the community; involve them in the idea, not just the shoot.",
              "Choose a format they'd genuinely enjoy making.",
              "Shoot in an everyday local setting on iPhone or with a local videographer.",
              "Keep the brand to a “presented by” and a logo placement.",
              "Let the stars share it on their own channels first."
            ]
          }
        },
        {
          id: "og-ex-burger-king-proud-whopper",
          title: "Burger King Proud Whopper",
          brand: "Burger King", agency: "", year: "",
          format: "Packaging",
          pdfPage: 126,
          what: "Burger King sold a “Proud Whopper” wrapped in rainbow-striped paper with “introducing THE PROUD WHOPPER” in the white centre circle. Customers who unwrapped it found an ordinary Whopper, and inside the wrapper the message that we are all the same inside. A second still shows diners at a table holding up the rainbow wrapper with that line.",
          idea: "Same burger, different wrapper: change only the outside to show that everyone is the same on the inside.",
          elements: [
            { n: 1, name: "Unchanged product", detail: "Exactly the same Whopper: the sameness is the proof.", principle: "Go back to the product" },
            { n: 2, name: "Rainbow wrapper", detail: "An instantly readable symbol on the most familiar packaging.", principle: "One simple visual" },
            { n: 3, name: "Curiosity name", detail: "“Proud Whopper” makes people ask what's different.", principle: "Participation" },
            { n: 4, name: "Reveal inside", detail: "The message is discovered when you open it.", principle: "Show, don't tell" },
            { n: 5, name: "Filmed reactions", detail: "Real diners' reactions turn packaging into shareable content.", principle: "Buzz and word of mouth" }
          ],
          layout: { aspect: "1:1", boxes: [
            { n: 2, label: "Rainbow-striped wrapper", x: 15, y: 8, w: 70, h: 84 },
            { n: 3, label: "Name in the centre circle", x: 30, y: 36, w: 42, h: 22 }
          ] },
          recreate: {
            brief: "Keep your product identical, change only its presentation to carry a message, and put the payoff where customers discover it.",
            fields: [
              { id: "point", label: "The point", hint: "“Same inside”, “everyone welcome”" },
              { id: "product", label: "The product that stays the same", hint: "PMT: the course, the completion card" },
              { id: "outside", label: "What changes on the outside", hint: "Sleeve, wrapper, sticker, colour" },
              { id: "name", label: "Curiosity name", hint: "Makes people ask what's different" },
              { id: "inside", label: "The message inside", hint: "Short, discovered on opening" },
              { id: "capture", label: "How you'll capture reactions", hint: "Film real customers opening it" }
            ],
            steps: [
              "Pick the physical item customers receive and design a special sleeve or wrapper in Canva.",
              "Print the inside message where it's only seen on opening.",
              "Run it for a limited time with a curiosity name.",
              "Film real customers' reactions (with permission) on iPhone.",
              "Cut a 30s reaction montage for Reels and Meta."
            ]
          }
        },
        {
          id: "og-ex-ogilvy-pride-neon",
          title: "Ogilvy Pride neon sign",
          brand: "Ogilvy & Mather (Ogilvy Pride)", agency: "Ogilvy & Mather", year: "",
          format: "Poster / outdoor",
          pdfPage: 127,
          what: "A neon sign glowing on a dark brick stairwell wall. Four lines in cool blue capitals say, matter-of-factly, that some people are gay, some aren't, and it's all good; below, in pink, “OGILVY PRIDE”, the agency's LGBTQ network launched in 2008. Young notes most of Ogilvy's staff are Millennials, for whom this support matters.",
          idea: "Say a big thing in a calm, plain voice; the casual tone itself normalizes it.",
          elements: [
            { n: 1, name: "Plain-spoken statement", detail: "No slogan, no jargon: three short, conversational sentences.", principle: "The message is the message" },
            { n: 2, name: "Rhythm: fact, fact, verdict", detail: "Two simple observations and a relaxed conclusion.", principle: "Memorable structure" },
            { n: 3, name: "Neon medium", detail: "Warm, permanent, part of the building: belief as part of the place.", principle: "Brands that DO: behaviour in the workplace" },
            { n: 4, name: "Small sign-off", detail: "The network's name in a different colour, beneath.", principle: "Brand sign-off" }
          ],
          layout: { aspect: "2:1", boxes: [
            { n: 3, label: "Dark wall, neon glow", x: 0, y: 0, w: 100, h: 100 },
            { n: 1, label: "Four-line statement (blue)", x: 34, y: 18, w: 26, h: 28 },
            { n: 4, label: "OGILVY PRIDE (pink)", x: 34, y: 64, w: 18, h: 6 }
          ] },
          recreate: {
            brief: "State your belief in plain, conversational words with a simple fact-fact-verdict rhythm, and display it where your people and customers actually spend time.",
            fields: [
              { id: "belief", label: "Your belief", hint: "One sentence" },
              { id: "line", label: "Fact, fact, verdict", hint: "“Some ___. Some ___. All ___.”" },
              { id: "medium", label: "Medium", hint: "Neon, wall decal, banner, shirt" },
              { id: "place", label: "Where it lives", hint: "Range fence, classroom wall, front desk" },
              { id: "signoff", label: "Sign-off", hint: "Brand name or team name" }
            ],
            steps: [
              "Write the belief in plain speech, then in three short sentences.",
              "Read it aloud to three people; cut any word that sounds like marketing.",
              "Mock it up in Canva as neon text on a dark wall to test the look.",
              "Produce it cheaply (LED neon sign, vinyl decal or banner) for the space.",
              "Photograph it in place and use it as a profile highlight and post."
            ]
          }
        },
        {
          id: "og-ex-tiffany-same-sex-couple",
          title: "Tiffany & Co. advertising with a same-sex couple",
          brand: "Tiffany & Co.", agency: "", year: "",
          format: "Print ad",
          pdfPage: 127,
          what: "About two and a half years after same-sex marriage became legal in New York, Tiffany, a stalwart of traditional luxury gifting, included a gay couple in its advertising. Young describes it (the book doesn't show it) as honouring tradition while celebrating modern love: the definition of timeless love hadn't changed, it had expanded.",
          idea: "Honour the tradition and expand it: show new customers in exactly the same timeless style as everyone else.",
          elements: [
            { n: 1, name: "Tradition kept", detail: "Same style, same product, same promise of timeless love.", principle: "The brand's best self" },
            { n: 2, name: "Expanded definition", detail: "Love now visibly includes same-sex couples.", principle: "Slipstream to mainstream" },
            { n: 3, name: "Timing", detail: "Soon after legalization: leading its category, not trailing it.", principle: "Cultural tension" },
            { n: 4, name: "No special treatment", detail: "The couple is shown like any other: normalcy is the message.", principle: "Inclusion as behaviour" }
          ],
          beats: [
            { n: 1, label: "Category norm: luxury love ads show only straight couples" },
            { n: 2, label: "New York legalizes same-sex marriage" },
            { n: 3, label: "Tiffany includes a gay couple, styled like every other couple" },
            { n: 4, label: "The message: timeless love, expanded" },
            { n: 5, label: "Effect: the brand endorses the audience as mainstream" }
          ],
          recreate: {
            brief: "Keep everything that makes your brand classic, and simply include the customers your category has left out, shown exactly like everyone else.",
            fields: [
              { id: "classic", label: "What's classic about the brand", hint: "Look, tone, product, promise" },
              { id: "leftout", label: "Who the category leaves out", hint: "Real customers you already serve" },
              { id: "shot", label: "The shot", hint: "Same composition as your other ads" },
              { id: "line", label: "The line", hint: "Same line as the rest of the campaign" },
              { id: "timing", label: "Timing", hint: "Why now" }
            ],
            steps: [
              "Pick your best-performing ad layout.",
              "Re-shoot it with customers the category usually leaves out (with permission).",
              "Keep everything else identical: line, colours, offer.",
              "Run it in rotation with the others, not as a special one-off.",
              "Compare performance after two weeks."
            ]
          }
        }
      ]
    },
    {
      id: "og-06i",
      part: "p2",
      chapter: 6,
      chapterTitle: "The Post-Modern Brand · The Inclusive Brand: the New Majority",
      pages: "128–129",
      title: "The Inclusive Brand: Total Market thinking and the New Majority",
      minutes: 6,
      tags: ["Book"],
      source: [{ doc: "Ogilvy on Advertising in the Digital Age (Miles Young, 2017)", section: "Chapter 6 · The Post-Modern Brand · The Inclusive Brand (Ogilvy Noor, Total Market) · PDF pp. 128–129", who: "Miles Young" }],
      quotes: [
        { text: "These minorities, taken together, form the majority.", page: "128" },
        { text: "This means not going to the default position of only planning advertising to an audience of non-Hispanic whites.", page: "129" }
      ],
      idea: `Young closes the chapter with two more groups that brands treat as niches but are actually mainstream.

**Muslim consumers.** In 2010 he founded **Ogilvy Noor** ("light"), an Islamic consulting unit, to cast light on a constituency badly neglected by the West: both by Western companies selling in Muslim-majority countries and in how Muslims living in the West were ignored or stigmatized. He keynoted the American Muslim Consumer Conference that year, about as far out on a limb as he could go. Yet the numbers are mainstream: **23.2%** of the world's population was Muslim in 2010, rising to **29.7%** by 2050 (Pew), and most Muslims in the West see themselves unequivocally as mainstream. Muslim values aren't "un-modern". Noor's leader, Shelina Janmohamed, describes the **Muslim Futurist**: young, proud to be Muslim, trend- and fashion-conscious, and mostly feeling that brands don't understand them. Being halal isn't narrow compliance with a formula; it means recognizing deeper values, and **that recognition can't be faked**.

**Ethnicity and the Total Market.** In the US, with its Caucasian, Hispanic, Asian and African American divides, Young's one-time mentee turned mentor, Jeff Bowman, built a career on **Total Market** thinking. The old model: "General Market" agencies did the main work and handed Black or Hispanic audiences to specialist agencies, literally treating them as races apart. That made sense for a while, but demographics have changed: **these minorities, taken together, form the majority**. Bowman calls it the **New Majority**: by 2044 most Americans will belong to ethnic and racial minorities, so a "General Market" that's itself multicultural makes the old split meaningless. Three reasons:
1. The multiethnic population is growing fast.
2. Americans are increasingly cross-cultural in their tastes.
3. Fragmented multicultural budgets are never big enough to have the impact a total-market budget can.

So: one **ethnically conscious, responsible total budget** beats a small "ethnic budget" that's always first to be cut and forces false choices between minorities. Stop defaulting to planning for non-Hispanic whites. **Digital helps**: mainstream messages can acknowledge ethnic context and product preferences, but as part of one holistic strategy, not a parallel tactical universe.

**Proof:** Nielsen's 2016 report *African American Millennials: Young, Connected and Black* shows them as tech-savvy, articulate and at the leading edge of digital: a good antidote to the old "will it play in Peoria?" formula.`,
      keyPoints: [
        "Big “minority” audiences are mainstream: Muslims were 23.2% of the world in 2010, heading to 29.7% by 2050.",
        "Respect can't be faked: halal is about recognizing values, not ticking a compliance box.",
        "Total Market thinking: one ethnically conscious strategy and budget for everyone, not a small separate “ethnic budget”.",
        "The New Majority: by 2044 most Americans will belong to ethnic or racial minorities.",
        "Use digital to adapt context (faces, language, preferences) inside one holistic plan, not a parallel tactical universe."
      ],
      why: "Sacramento is one of the most diverse metro areas in the US. For PMT and local trades, total-market creative (real local faces, language versions where the business can serve them) inside one plan beats a token “multicultural” ad set.",
      example: {
        title: "PMT: total market, not a side budget",
        before: "One main campaign with one look, plus a tiny Spanish-language ad set at $5/day that's the first thing cut when budgets tighten.",
        after: "One campaign whose creative is cast from PMT's real student mix. If PMT can genuinely serve Spanish-speaking students (confirm first), Spanish versions of the top two ads run inside the same campaign under the same budget rules, pointing to a page with a language toggle. Results are reviewed together, not as a separate experiment.",
        body: "Young's three reasons in local form: the audience is already mixed, tastes cross over, and a side budget is too small to matter."
      },
      practice: [
        { prompt: "Dissect it: niche or mainstream?", fields: ["Why does Young call Total Market thinking better than a separate “ethnic budget”?", "What does it mean that recognition “cannot be faked”? Give a local-business example.", "Argue the other side: when does a dedicated, separate campaign for one community make sense?"] },
        {
          prompt: "Apply it: write a one-page Total Market brief for a ZDub prospect in Sacramento.",
          fields: ["Who actually buys (from real customer data)", "The shared motivation across groups", "Where creative adapts (faces, language, context)", "What stays the same for everyone"],
          rubric: ["Starts from real customer data, not assumptions", "Finds a motivation that's shared across groups", "Adapts context authentically (and only where the business can deliver)", "Keeps one plan and one budget, not a side project"],
          model: "Prospect: a Sacramento HVAC company. Who buys: homeowners across Elk Grove, South Sacramento, Natomas and Citrus Heights; about a third of calls involve multigenerational households. Shared motivation: keeping elderly parents and kids safe in 105° heat. Adapt: cast real customers and techs from across those neighbourhoods; Spanish versions of the two top ads, since the company has bilingual techs. Same for all: the offer (same-day AC check), the guarantee, the booking flow."
        }
      ],
      today: { task: "Look up the census QuickFacts for PMT's main service area. Compare the population mix with who appears in PMT's current ads and website photos.", output: "A short note: who lives here vs who we show, plus one casting change.", minutes: 20 },
      check: [
        { q: "What is Ogilvy Noor, and why did Young found it?", a: "An Islamic consulting unit (2010) to understand Muslim consumers, a mainstream constituency neglected or stigmatized by Western brands." },
        { q: "What is the “New Majority”?", a: "Jeff Bowman's term for the fact that, by 2044, most of the US population will be ethnic and racial minorities: taken together, they form the majority." },
        { q: "Give two of the three reasons for Total Market thinking.", a: "The multiethnic population is growing fast; tastes are increasingly cross-cultural; fragmented multicultural budgets are never big enough to have impact." }
      ]
    }
  ],
  tools: [
    {
      id: "memory-drill",
      type: "flashcards",
      title: "Memory drill",
      cards: [
        { tag: "Principle", front: "Young's two big lessons from comparing the digital platforms?", back: "There's no one-stop shop (channels complement each other, chosen by your strategy), and it's a race of algorithms where profit, not scale, is the prize.", ref: "Ch 4 · PDF 62–63" },
        { tag: "Stat", front: "Google + Facebook's share of US digital media spend in Young's analysis?", back: "About 52% ($36B of $69B). Standard Oil had 70% when Roosevelt went after it.", ref: "Ch 4 · PDF 65" },
        { tag: "Stat", front: "TV's share of measured media investment, 1999–2017?", back: "About 40%, unchanged, in a market much expanded by digital. TV is not dead.", ref: "Ch 4 · PDF 67" },
        { tag: "Principle", front: "Steve Miles: “There is no such thing as digital marketing or digital advertising…”", back: "“…there is just good marketing and good advertising.” Digital works for the same fundamental reasons as anywhere.", ref: "Ch 4 · PDF 68–69" },
        { tag: "Campaign", front: "Oreo “You can still dunk in the dark” (2013): real reach, per Mark Ritson?", back: "About 64,000 people, 0.02% of Oreo's customers. Young: brilliant PR, but not a scalable advertising formula.", ref: "Ch 4 · PDF 69–71" },
        { tag: "Ogilvy said", front: "Ogilvy's advice that answers McLuhan's “the medium is the message”?", back: "“It's what you say, not how you say it.” Young: the message is the message; the medium only influences it.", ref: "Ch 4 · PDF 77" },
        { tag: "Term", front: "Ephemeral vs archival video networks", back: "Ephemeral (Facebook, Instagram, Snapchat): impact in the moment, interaction, little search value. Archival (YouTube, Vimeo): built for watching, strong search, a library.", ref: "Ch 4 · PDF 78" },
        { tag: "Term", front: "“Stops the thumb”", back: "Feed content must arrest the scroll at a glance, and on Facebook the message should land even if nobody presses play.", ref: "Ch 4 · PDF 80" },
        { tag: "Principle", front: "Young's 5 lessons for leaders in the digital age", back: "Keep asking why; don't fetishize certainty (beware the single KPI); total openness; avoid divas when hiring; relish dualism.", ref: "Ch 4 · PDF 81" },
        { tag: "Campaign", front: "Dove “Evolution”: how was it made, and what did it achieve?", back: "Shot on favours, never tested, posted with no media plan; it added $1.2B to brand value and $500M in revenue. You care, you share.", ref: "Ch 4 · PDF 82–83" },
        { tag: "Stat", front: "The insight behind Dove Real Beauty Sketches", back: "54% of women considered themselves their own worst critic: the problem had moved from beauty ideals to the inner voice.", ref: "Ch 4 · PDF 84" },
        { tag: "Principle", front: "The 5 myths about Millennials", back: "That they're technophiles, narcissists, non-readers, don't visit stores, and don't consume advertising. All false.", ref: "Ch 5 · PDF 97" },
        { tag: "Term", front: "Meshers and showroomers", back: "Meshers use a second device alongside the first screen; showroomers research online, then buy.", ref: "Ch 5 · PDF 96" },
        { tag: "Principle", front: "The five waves of branding, in order", back: "Trademark (quality) → rational (difference) → emotional (bonding) → cultural (relevance) → Brands that DO (usefulness, behaviour). Accretive, not replacing.", ref: "Ch 6 · PDF 102–104" },
        { tag: "Term", front: "The “commodity emotions trap” (Douglas Holt)", back: "Committees produce abstract, interchangeable brand visions (the drink that ended up as “Refresh for Life”).", ref: "Ch 6 · PDF 104–105" },
        { tag: "Term", front: "Young's Big IdeaL sentence", back: "“[Brand] believes the world would be a better place if…” Found where the brand's best self meets a cultural tension.", ref: "Ch 6 · PDF 111–112" },
        { tag: "Stat", front: "Point-of-view brands and growth (BrandZ)", back: "Brands strongest on point of view were 2.2 times likelier to grow market share than the weakest. It could pay to believe.", ref: "Ch 6 · PDF 115" },
        { tag: "Principle", front: "The archaeology of mattering, bottom to top", back: "Trademark → functional → emotional → purpose → behaviour. Today the top layer, doing (useful, practical, personalized), matters most.", ref: "Ch 6 · PDF 116–117" },
        { tag: "Ogilvy said", front: "“The consumer is not a moron…”", back: "“…she is your wife.” Young: still broken, since 40% of women don't recognize themselves in ads aimed at them.", ref: "Ch 6 · PDF 121" },
        { tag: "Principle", front: "Young's “Lesson number 1 in brand building” (from Pantene vs Under Armour)", back: "Always go back to the product. Don't borrow an agenda; root it in what the product does.", ref: "Ch 6 · PDF 122" }
      ]
    }
  ]
});
