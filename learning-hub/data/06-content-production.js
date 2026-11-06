HUB.tab({
  id: "content-production",
  title: "Content Production Craft",
  icon: "camera",
  tagline: "How to shoot, edit and design pieces that look like a top creator made them.",
  intro: "This tab is the craft side: the design rules, camera settings, editing moves and Canva workflow that make PMT and client content look premium on an iPhone, an Osmo Action 5, CapCut, Edits and Canva. Every lesson ends with something you actually make: a reel, a static, a carousel, a shot list or an edit. The engine is taste + reps + feedback, so keep the swipe file and learning log below going the whole way. For what to say and why, see Ad Creative and Copywriting.",
  parts: [
    { id: "habits", title: "Part 1 · Taste, reps and feedback" },
    { id: "design", title: "Part 2 · Visual fundamentals" },
    { id: "shoot", title: "Part 3 · Shooting great footage" },
    { id: "edit", title: "Part 4 · Editing for retention" },
    { id: "statics", title: "Part 5 · Static ads and carousels in Canva" },
    { id: "ideas", title: "Part 6 · Ideas on demand and shipping" }
  ],
  trackers: [
    { id: "swipe", title: "Swipe file", goal: "10 saves a week", fields: ["What it is / link", "Why it stops the scroll", "How I'd use it for PMT or a client"] },
    { id: "learning-log", title: "Learning log", goal: "One line after every piece you make", fields: ["What I made", "What worked", "What I'll change next time"] }
  ],
  lessons: [
    {
      id: "cp-01",
      part: "habits",
      title: "Taste + reps + feedback: set up your swipe file, log and toolkit",
      minutes: 9,
      tags: ["Course", "Platform fact (re-check)"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "How this program works; Two habits for all 12 weeks; Your toolkit; Where AI helps vs. where you win", who: "Content training program written for Zach" }
      ],
      idea: "The program's core idea: **taste + reps + feedback.** Good creators aren't more talented than you. They've studied more great work (taste), made more things (reps), and judged their own work honestly (feedback). So you never just watch tutorials. Every session ends with something you made, compared against a pro example, with one fix written down.\n\n**Two habits that run the whole time:**\n\n- **Swipe file.** Every time a post or ad makes you stop scrolling, save it to an Instagram Saved collection named “Swipe.” Aim for **10 a week.** Note why it stopped you.\n- **Learning log.** One running note (Apple Notes is fine): date, what you made, what worked, one fix. Rereading it is how you see yourself improve.\n\n**Your workflow in one line:** shoot on iPhone (Blackmagic Camera app) and Osmo Action 5 → edit in CapCut on your Windows laptop → design statics in Canva → final caption, polish and post through Instagram Edits.\n\n**Tools you have or can add free:** CapCut (main editor: keyframes, masks, speed ramps, captions, color), Edits (fast reels, teleprompter, green screen, auto captions, volume ducking, no watermark), Canva free, Blackmagic Camera, Meta Ad Library, Meta Sound Collection (music you can legally use in FB/IG ads), Pinterest, Google Fonts + Coolors, Pexels/Pixabay for fill shots (sparingly).\n\n**Cheap upgrades in priority order:** 1) a wireless lav mic (bad audio kills video faster than bad visuals, and wind at a range is brutal), 2) Canva Pro once you're making 5+ statics a week, 3) a phone tripod with clamp + small LED panel, 4) CapCut Pro if free-tier effects keep watermarking, 5) optional ChatGPT Plus for concept mockups. Prices in the doc were checked October 2026 (CapCut Pro $19.99/mo, Canva Pro $18/mo); re-check before buying.\n\n**Where AI helps vs where you win:** use AI for grunt work (captions, cutouts, cleanup, noise removal, resizing). Your edge is what AI can't fake: real students' faces on their first ride, an instructor coaching at the cones, a bike starting at 7am at Woodland, and your taste in what to cut.",
      keyPoints: [
        "Taste (study great work) + reps (make things) + feedback (judge honestly).",
        "Swipe file: 10 saves a week, each with why it stopped you.",
        "Learning log: one line after every piece.",
        "Workflow: iPhone/Osmo → CapCut → Canva → Edits.",
        "First upgrade: a lav mic. Real PMT footage beats AI and stock."
      ],
      why: "ZDub sells content as part of its offer. These habits are how you close the gap between “I can edit” and work a client would pay for, without buying a course.",
      example: {
        title: "A good swipe-file entry",
        body: "**What:** a gym reel, “What you think your first class looks like vs what it actually looks like.”\n**Why it stopped me:** split-screen first frame with a funny exaggerated “expectation,” text on screen in second one.\n**PMT use:** “What you think your first motorcycle class looks like” (someone crashing through cones) vs reality (a student calmly walking the bike with an instructor)."
      },
      practice: [
        {
          prompt: "Set up both habits and log your first three swipes.",
          fields: ["Swipe 1: what + why it stopped you + PMT use", "Swipe 2: what + why + PMT use", "Swipe 3: what + why + PMT use", "Which tool upgrade you need first and why"],
          rubric: ["Each swipe names the specific thing that stopped you", "PMT use copies the format, not the content", "Upgrade choice follows the priority list unless you have a reason"]
        }
      ],
      today: { task: "Create the IG Saved collection “Swipe,” save 5 posts, and copy-build one of them in Canva as exactly as you can (same layout, sizes, spacing). Then make the PMT version with the same structure. Log it.", output: "1 copywork static + 1 PMT static in the same structure", minutes: 40, suggested: false },
      check: [
        { q: "What are the three parts of the program's core idea?", a: "Taste, reps and feedback." },
        { q: "What's the workflow in one line?", a: "Shoot on iPhone (Blackmagic Camera) and Osmo Action 5, edit in CapCut, design statics in Canva, caption and post through Edits." },
        { q: "What's the first cheap upgrade and why?", a: "A wireless lav mic, because bad audio kills a video faster than bad visuals (and wind at a range is brutal)." }
      ]
    },
    {
      id: "cp-02",
      part: "design",
      title: "The six design principles that make content look premium",
      minutes: 9,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 1 Visual fundamentals: The six design principles; Practice: copywork", who: "Content training program" }
      ],
      idea: "Good-looking content follows a handful of rules. “Amateur” content breaks them, usually without knowing. Learn these six and you'll instantly see why some posts feel premium and others feel cheap.\n\n1. **Hierarchy.** One thing gets seen first. Every frame and ad has a clear #1 (usually the person or the hook text), a #2 (supporting line) and a #3 (CTA). If everything is big and bold, nothing is.\n2. **Contrast.** Light vs dark, big vs small, busy vs calm. Text must pop off its background. If you have to squint, it fails.\n3. **Alignment.** Every element lines up with something. Pick a margin and stick to it. Random placement is the #1 tell of a beginner.\n4. **Proximity.** Related things sit together; unrelated things get space between them. The offer and its button belong together; the headline doesn't touch the checklist.\n5. **Repetition.** Same fonts, colors, caption style and element positions every time. This is what makes a feed look like a brand instead of a random account.\n6. **White space.** Empty space isn't wasted. Crowded = cheap. Room to breathe = premium.\n\n**How to learn them fast: copywork.** Designers learn like painters, by copying masters. Pick 3 ads or posts from your swipe file and rebuild them in Canva as exactly as you can: same layout, sizes, spacing. Then make a PMT version using the same structure. The program says you'll absorb more from this than from any tutorial.\n\nThese principles also explain Paul's flyer warning in Ad Creative: a logo, bullet list, phone number and stars all fighting at once has no hierarchy and no white space.",
      keyPoints: [
        "Hierarchy: one clear #1, then #2, then #3.",
        "Contrast: text must pop; if you squint, it fails.",
        "Alignment: pick a margin and stick to it.",
        "Proximity and repetition: group what belongs together; repeat the same style every time.",
        "White space reads as premium; crowding reads as cheap."
      ],
      why: "Most local business content breaks all six. Fixing them is the quickest visible upgrade you can show PMT or a prospect, often in one afternoon.",
      example: {
        title: "Fixing a crowded PMT post",
        before: "Five lines of text in three fonts, centered and left-aligned at random, logo top and bottom, stock rider photo, yellow text on white.",
        after: "One range photo, subject on the left third. Hook in one bold font, top third, left-aligned to a 60px margin: “Never ridden? Start here.” One supporting line below it. A gold pill button bottom left with “See class dates.” Everything else deleted.",
        body: "Now there's a #1 (the student), #2 (hook), #3 (button), one margin, high contrast and space to breathe."
      },
      practice: [
        {
          prompt: "Audit one existing PMT or client post against the six principles, then plan the fix.",
          fields: ["The post", "Hierarchy: what's #1/#2/#3 now?", "Contrast and alignment problems", "Proximity, repetition and white space problems", "Your fix plan"],
          rubric: ["Names a specific problem for each principle (or says it passes)", "Fix plan creates one clear #1", "Fix removes elements rather than adding"]
        }
      ],
      today: { task: "Copywork: rebuild 2 swipe-file ads exactly in Canva, then redesign one real PMT post using the six principles. Post or send the redesign to PMT.", output: "2 copywork pieces + 1 redesigned PMT static", minutes: 45, suggested: false },
      check: [
        { q: "Name the six design principles.", a: "Hierarchy, contrast, alignment, proximity, repetition, white space." },
        { q: "What's the #1 tell of a beginner designer?", a: "Random placement (no consistent alignment)." },
        { q: "What is copywork?", a: "Rebuilding a great ad exactly (layout, sizes, spacing) to absorb how it works, then making your own version with the same structure." }
      ]
    },
    {
      id: "cp-03",
      part: "design",
      title: "Color: the 60-30-10 rule and one job for the accent",
      minutes: 7,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 1 Visual fundamentals: Color; Canva workflow step 1", who: "Content training program" }
      ],
      idea: "Color looks “designed” when it's on purpose. The program's rules:\n\n**60-30-10.** 60% dominant color (often a neutral or dark), 30% secondary, 10% accent. For PMT: **navy as the base, white or light grey as secondary, gold/yellow as the accent** for hook words and buttons.\n\n**One job for the accent.** Use it to highlight one thing: the key word in a caption, the CTA, the class date. Accent everywhere = accent nowhere.\n\n**Check contrast.** Gold text on white fails. Gold on navy pops. If a color combo makes you squint on your phone, change it.\n\n**Color in video counts too.** A warm, consistent grade across all PMT reels makes the feed feel like one brand (you'll build that look in the editing lessons).\n\n**Set it up once.** In Canva, build a Brand Kit (Pro) or, on free, a “PMT Brand” page inside one design: logos, navy/gold/bright blue, and your two fonts. Every new design starts from there, so you never eyedrop colors again.\n\nFor other clients, pick a base, secondary and accent from their logo or truck wrap, then test the combos with Coolors for contrast. One accent, one job, every time.",
      keyPoints: [
        "60% base, 30% secondary, 10% accent.",
        "PMT: navy base, white/light grey secondary, gold accent.",
        "The accent does one job: key word, CTA or date.",
        "Gold on white fails; gold on navy pops.",
        "Set up a brand page or Brand Kit once and start every design from it."
      ],
      why: "Consistent, high-contrast color is what makes PMT's feed and ads recognizable at a glance, and a brand page per client saves you minutes on every design.",
      example: {
        title: "PMT class-date static",
        before: "White background, gold headline, navy body text, gold button, gold border, gold icons.",
        after: "Navy background (60%), white headline and body (30%), gold only on the class date and the button (10%).",
        body: "With the accent limited to the date and the button, the eye goes exactly where you want it."
      },
      practice: [
        {
          prompt: "Build a 60-30-10 palette for PMT and one trade client, and assign the accent's job.",
          fields: ["PMT: base / secondary / accent (with hex codes)", "PMT: the accent's one job", "Client: base / secondary / accent", "Client: the accent's one job + contrast check result"],
          rubric: ["Ratios are clear", "Accent has exactly one job", "Combos pass a phone contrast check", "Colors come from the brand, not personal taste"]
        }
      ],
      today: { task: "Build PMT's brand page in Canva (logos, navy/gold/bright blue, two fonts). Then make one class-date static using 60-30-10 with gold only on the date and button.", output: "PMT Canva brand page + 1 class-date static", minutes: 30, suggested: false },
      check: [
        { q: "What's the 60-30-10 rule?", a: "60% dominant color, 30% secondary, 10% accent." },
        { q: "What happens if you use the accent everywhere?", a: "It stops being an accent: accent everywhere = accent nowhere." }
      ]
    },
    {
      id: "cp-04",
      part: "design",
      title: "Typography that reads on a phone at arm's length",
      minutes: 7,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 1 Visual fundamentals: Typography; Module 4 Six static ad layouts (#6 Bold type only)", who: "Content training program" }
      ],
      idea: "Type is where most local content looks cheap. Four rules:\n\n1. **Two fonts max.** One bold display font for hooks (a condensed sans like **Bebas Neue, Anton or Oswald** reads well on a phone) and one clean font for body text (**Inter, Montserrat**).\n2. **Size for a phone held at arm's length.** Hook text on a 1080-wide canvas usually wants to be **70–120 px**. If it's readable on your laptop but not on your phone, it's too small.\n3. **Text on video needs help.** Add a subtle shadow or stroke, or sit it on a shape, so it reads over any footage.\n4. **Short lines.** Left-aligned or centered blocks, never a paragraph on an ad.\n\nThe fastest way to practice type is the **bold-type-only static**: one huge line of text on a brand-color background. It's quick to make and great for testing hooks, and Paul notes in Ad Creative that some of the best statics are all text. If a type-only ad works, the words are doing their job.\n\nType pairing and kerning are a deeper study topic the program lists for later (start with Google Fonts pairing pages).",
      keyPoints: [
        "Two fonts max: a condensed display font + a clean body font.",
        "Hook text 70–120 px on a 1080-wide canvas.",
        "Check readability on your phone, not your laptop.",
        "Shadow, stroke or a shape behind text on video.",
        "Short lines; never a paragraph on an ad."
      ],
      why: "Type-only statics are the cheapest hook test there is, and readable type is the difference between an ad that stops a thumb and one that gets skipped.",
      example: {
        title: "PMT type-only hook test",
        body: "Navy background. Bebas Neue at 110 px, white, left-aligned: “NEVER RIDDEN?” Under it at 64 px: “Bike and helmet provided.” Gold pill at the bottom in Inter: “See class dates.” Three versions with different first lines (“OWN NO BIKE?”, “SOMEDAY IS SATURDAY.”) make a quick hook test."
      },
      practice: [
        {
          prompt: "Write three type-only hook statics for PMT and pick fonts and sizes for each.",
          fields: ["Version 1: line + font + size", "Version 2: line + font + size", "Version 3: line + font + size", "Phone readability check notes"],
          rubric: ["Two fonts max across the set", "Hook text 70–120 px", "Each line is short (a few words)", "Checked on a phone, not just a laptop", "Fits PMT's copy rules (no “easy,” “cheap,” “guaranteed”)"]
        }
      ],
      today: { task: "Make the three PMT bold-type-only statics in Canva at 1080×1350. View each on your phone at arm's length and fix any that don't read in one second.", output: "3 type-only PMT statics", minutes: 25, suggested: false },
      check: [
        { q: "How many fonts should a design use, and what kinds?", a: "Two max: one bold display font for hooks and one clean font for body text." },
        { q: "How big should hook text be on a 1080-wide canvas?", a: "Usually 70–120 px." }
      ]
    },
    {
      id: "cp-05",
      part: "design",
      title: "Composition: thirds, leading lines, depth and room for text",
      minutes: 8,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 1 Visual fundamentals: Composition (for photos and video frames); Three tests before anything ships", who: "Content training program" }
      ],
      idea: "Composition is where you put things in the frame. Five rules, all of which a motorcycle range makes easy:\n\n1. **Rule of thirds.** Put the subject on a third line, not dead center. Exception: talking heads to camera, where centered works.\n2. **Leading lines.** Roads, cone lines and handlebars pull the eye to your subject. Ranges are full of them.\n3. **Depth.** Foreground, subject, background. Shoot through the cones, past a mirror, over a shoulder.\n4. **Negative space.** Leave room for text where it will go in the final ad. Decide before you shoot: headline in the top third means sky or empty pavement up there.\n5. **Faces and eyes.** People look where the subject looks. Point their gaze toward your headline.\n\nThen run the program's **three tests before anything ships:**\n\n- **Squint test:** squint at it. The thing you still see should be the most important thing.\n- **Thumb test:** view it on your phone at real size while scrolling. Does it stop you?\n- **One-second test:** show it to someone for one second. Can they say what it's about?\n\nComposing for text at capture is what makes the AI and Canva workflows in Ad Creative work. A photo shot with empty space in the top third becomes a static in minutes; a centered, cramped photo fights every headline.",
      keyPoints: [
        "Subject on a third line (centered only for talking heads).",
        "Use leading lines: cone rows, roads, handlebars.",
        "Build depth: shoot through foreground objects.",
        "Leave negative space where the text will go.",
        "Squint, thumb and one-second tests before shipping."
      ],
      why: "Shooting with the final ad in mind saves editing time and makes every PMT photo usable as an ad, a post and a carousel slide.",
      example: {
        title: "One PMT moment, composed for an ad",
        body: "Student rolling through the cone line. Phone low, cones running diagonally from bottom left toward the rider (leading line), rider on the right third, a blurred cone in the foreground (depth), open sky in the top third (space for the headline), rider looking left toward where the text will sit."
      },
      practice: [
        {
          prompt: "Plan five composed photos for a PMT ad (or a client job site), each using a different rule.",
          fields: ["Rule of thirds shot", "Leading lines shot", "Depth shot", "Negative-space-for-text shot", "Gaze-toward-text shot"],
          rubric: ["Each describes camera position and where the subject sits", "At least two leave room for text", "Uses real elements at the location"]
        }
      ],
      today: { task: "Shoot 10 composed photos at a range, a job site or anywhere you can (use your bike if needed). Pick the best one, add a headline in the space you left, and run the squint, thumb and one-second tests.", output: "1 hero-photo static from your own composed shot", minutes: 40, suggested: false },
      check: [
        { q: "When is a centered subject OK?", a: "For talking heads speaking to camera." },
        { q: "What are the three tests before anything ships?", a: "Squint test, thumb test, one-second test." },
        { q: "Why point the subject's gaze toward the headline?", a: "People look where the subject looks, so the gaze leads the viewer to the text." }
      ]
    },
    {
      id: "cp-06",
      part: "shoot",
      title: "Light is the biggest lever",
      minutes: 7,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 2 Shooting great footage: Light (the biggest lever)", who: "Content training program" }
      ],
      idea: "Great edits start with great footage, and most “cheap-looking” content is a lighting, stability or audio problem, not an editing problem. Fix it at capture and editing gets easy. Light comes first.\n\n- **Face the light.** Put the sun or window in front of or beside your subject. Never let the light sit behind your subject unless you want a silhouette.\n- **Golden hour wins.** The first and last hour of sunlight make everything look expensive. Schedule shoots then when you can. A PMT class that starts early is a gift.\n- **Midday at a range:** move people into shade, or put the sun behind them and **expose for their face** (tap and hold on the face to lock exposure).\n- **Overcast days** are a giant free softbox. Great for faces.\n- **Indoors:** sit facing a window for talking heads. Turn off overhead lights that mix colors.\n\nA quick self-check before you hit record: look at the subject's face on your screen. Are the eyes bright? Is one side in harsh shadow? Is the background brighter than the face? If yes, move the person, not the camera settings.\n\nWhen you add a small LED panel (upgrade #3), use it as a soft fill for talking heads indoors, not as the main light outside.",
      keyPoints: [
        "Most cheap-looking footage is a light, stability or audio problem.",
        "Face the light; avoid light behind the subject.",
        "Golden hour and overcast days are your friends.",
        "Midday: use shade or backlight and lock exposure on the face.",
        "Indoors: face a window, kill mixed overhead lights."
      ],
      why: "Lighting is free and it's the biggest difference between a client's phone video and yours. Getting it right means PMT's instructors look good on camera without any gear.",
      example: {
        title: "Fixing a midday instructor talking head",
        before: "Instructor faces the camera with the sun behind the camera person: squinting, harsh nose shadows, blown-out sky.",
        after: "Move under the canopy at the range edge, instructor facing the open (bright) side, camera locked on the face. Soft, even light, eyes open, background a little brighter but not blown."
      },
      practice: [
        {
          prompt: "Plan the light for three PMT shots at different times of day.",
          fields: ["Early morning shot: where subject faces, where you stand", "Midday shot: shade or backlight plan", "Indoor talking head: window position, lights off"],
          rubric: ["Each puts the light in front of or beside the subject", "Midday plan uses shade or locked exposure on the face", "Indoor plan avoids mixed lighting"]
        }
      ],
      today: { task: "Film the same 15-second talking-head tip twice: once with bad light (window behind you) and once facing a window or in open shade. Post the good one as a reel (or send to PMT) and log the difference.", output: "1 well-lit talking-head reel + before/after note", minutes: 25, suggested: false },
      check: [
        { q: "What does the program say most cheap-looking content really is?", a: "A lighting, stability or audio problem, not an editing problem." },
        { q: "How do you shoot faces at midday on a range?", a: "Move people into shade, or put the sun behind them and expose for the face by tapping and holding to lock exposure." }
      ]
    },
    {
      id: "cp-07",
      part: "shoot",
      title: "Camera settings: iPhone with Blackmagic Camera and the Osmo Action 5",
      minutes: 8,
      tags: ["Course", "Platform fact (re-check)"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 2 Shooting great footage: Camera settings (iPhone, Osmo Action 5)", who: "Content training program" }
      ],
      idea: "Default phone settings make footage look “phone-y” because exposure, focus and color shift mid-shot. Lock them down.\n\n**iPhone with the free Blackmagic Camera app:**\n\n- **Frame rate by job:** 4K at **24 fps** for cinematic B-roll; **30 fps** for talking heads; **60 or 120 fps** for slow motion.\n- **Lock exposure, focus and white balance** so they don't drift during the shot.\n- **Shutter at about double your frame rate** (1/50 at 24 fps, 1/60 at 30) for natural motion blur. In bright sun this may overexpose; an ND filter fixes that later.\n- **Wipe the lens before every shoot.** Seriously.\n\n**DJI Osmo Action 5:**\n\n- **4K, stabilization on, horizon lock** for mounted shots.\n- Shoot **vertical**, or **4:3** so you can crop to both 9:16 and 4:5 later.\n- **120 fps** for slow-mo cornering and dramatic moments.\n- If your model offers **D-Log M**, save it for later color-grading practice; until then use the normal color profile.\n\n**Which camera for what:** iPhone for faces, details and talking heads; Osmo for rider POV, helmet and handlebar mounts, action and slow-mo.\n\nSafety first: never mount or film in a way that conflicts with range safety rules.\n\nApp features and camera menus change; check current settings against the app before a big shoot.",
      keyPoints: [
        "24 fps B-roll, 30 fps talking heads, 60/120 fps slow-mo.",
        "Lock exposure, focus and white balance.",
        "Shutter ≈ 2x frame rate (1/50 at 24, 1/60 at 30).",
        "Osmo: 4K, stabilization, horizon lock; shoot 4:3 to crop both ways; 120 fps slow-mo.",
        "iPhone for faces and details; Osmo for POV and action."
      ],
      why: "Locked settings are the cheapest way to make PMT footage look cinematic, and shooting 4:3 on the Osmo means one clip works for Reels and feed ads.",
      example: {
        title: "Settings card for a PMT range morning",
        body: "- **iPhone, Blackmagic:** 4K 24 fps, shutter 1/50, WB locked at daylight, exposure locked on the riders, for sunrise B-roll.\n- **iPhone, talking head:** 30 fps, 1/60, focus locked on the instructor's face.\n- **Osmo on the bars (instructor bike only, per range rules):** 4K 4:3, 120 fps, stabilization + horizon lock, for slow-mo through the cones."
      },
      practice: [
        {
          prompt: "Write your own settings card for the next shoot.",
          fields: ["Shoot location and what you're filming", "iPhone B-roll settings", "iPhone talking-head settings", "Osmo settings + mount position", "Safety check"],
          rubric: ["Frame rate matches each job", "Shutter is about double the frame rate", "Exposure/focus/WB locked", "Osmo framing allows both 9:16 and 4:5 crops", "Mount position respects safety rules"]
        }
      ],
      today: { task: "Install Blackmagic Camera, set it up per the card, and shoot three short clips (24 fps B-roll, 30 fps talking head, 120 fps slow-mo on the Osmo). Edit them into one 15-second B-roll reel in CapCut.", output: "1 15-second B-roll reel shot on locked settings", minutes: 40, suggested: false },
      check: [
        { q: "What frame rate for cinematic B-roll, talking heads and slow-mo?", a: "24 fps B-roll, 30 fps talking heads, 60 or 120 fps slow motion." },
        { q: "Why shoot 4:3 on the Osmo?", a: "So you can crop to both 9:16 and 4:5 later." },
        { q: "What's the shutter rule?", a: "About double your frame rate: 1/50 at 24 fps, 1/60 at 30 fps." }
      ]
    },
    {
      id: "cp-08",
      part: "shoot",
      title: "Audio: people forgive average video, not bad sound",
      minutes: 7,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 2 Shooting great footage: Audio; Your toolkit (cheap upgrades #1)", who: "Content training program" }
      ],
      idea: "“People forgive average video; they swipe away from bad audio.” That's why the program's #1 purchase is a cheap wireless lav mic (a DJI Mic Mini class mic, or a ~$15 wired lav like the Boya BY-M1 to start).\n\n**Capture rules:**\n\n- **Lav mic on the speaker, close to the mouth.** Not on the phone across the range.\n- **Wind muff outdoors.** Wind at a range is brutal; the fluffy cover is not optional.\n- **Record 10 seconds of natural sound at every location**: engines starting, gravel, cones being set out, a visor snapping shut. These become your sound-design layer later (see the sound lesson) and they're what make PMT content feel real.\n\n**Quick checks before you film:**\n\n1. Do a 5-second test recording and listen on earbuds.\n2. Listen for wind thumps, clothing rub on the mic, and a generator or traffic behind you.\n3. If the location is loud, move the person, not the mic.\n\nCam's note in Ad Creative fits here: you don't need a crew. A phone, a mic and a free editor are enough. Audio is the one place a $15 purchase changes everything.",
      keyPoints: [
        "Bad audio makes people swipe faster than bad video.",
        "Lav mic close to the mouth; wind muff outdoors.",
        "Record 10 seconds of natural sound at every location.",
        "Test-record 5 seconds and listen on earbuds first.",
        "If it's loud, move the person."
      ],
      why: "Clean voice plus real range sound is what separates PMT's content from stock-footage ads. A natural-sound library also gives you endless sound-only reels.",
      example: {
        title: "Range audio checklist",
        body: "Mic clipped mid-chest on the instructor, muff on, cable tucked under the jacket. 5-second test: hear the generator? Move 20 feet upwind. Then grab natural sound: 10 seconds of a bike starting, 10 seconds of tires on gravel, 10 seconds of cones being stacked."
      },
      practice: [
        {
          prompt: "Plan the audio for your next shoot.",
          fields: ["Who speaks and where the mic goes", "Wind and noise risks + fixes", "Natural sounds to capture (at least 4)"],
          rubric: ["Mic is on the speaker near the mouth", "Has a wind plan", "Lists 4+ specific natural sounds"]
        }
      ],
      today: { task: "Record a 20-second talking-head tip with a lav (or your phone held close if you don't have one yet) and capture 4 natural-sound clips. Build a 15-second reel that opens on natural sound before the voice starts.", output: "1 talking-head reel with clean audio + 4 natural-sound clips saved", minutes: 30, suggested: false },
      check: [
        { q: "What's the program's #1 upgrade and why?", a: "A cheap wireless lav mic, because people swipe away from bad audio faster than bad visuals." },
        { q: "What should you record at every location?", a: "About 10 seconds of natural sound (engines, gravel, cones) for the sound-design layer." }
      ]
    },
    {
      id: "cp-09",
      part: "shoot",
      title: "Shot types, camera movement and the 5-shot rule",
      minutes: 10,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 2 Shooting great footage: The shot types to master; Camera movement; The 5-shot rule; PMT shot bank", who: "Content training program" }
      ],
      alsoIn: ["Ad Creative: Shoot modular (3 hooks, 1 body, 2 CTAs)"],
      idea: "**Seven shot types**, each with a job:\n\n- **Wide / establishing:** shows where we are (whole range at sunrise, bikes lined up).\n- **Medium:** the action (student rolling through the box).\n- **Close-up:** emotion (nervous face under the helmet, then the grin).\n- **Extreme close-up:** texture and detail (hand on clutch lever, boot on peg, key turning).\n- **POV:** puts the viewer in the seat (Osmo on helmet or bars through the cones).\n- **Low angle:** power and drama (phone on the ground as a bike rolls past).\n- **Overhead:** pattern and graphic look (phone above the cone layout).\n\n**Camera movement** makes footage feel alive: push-in, pull-out, pan, tilt, tracking (move alongside), orbit (circle the subject) and the **reveal** (start on a cone or a hand, rise to reveal the rider). For smooth handheld: bend your knees, tuck your elbows, walk heel-to-toe.\n\n**The 5-shot rule.** For any moment worth filming, grab five shots: **wide, medium, close-up, extreme close-up and one unusual angle.** Five shots of one moment edit into a sequence that feels professional. One shot of five moments edits into a slideshow.\n\n**Build a PMT shot bank** over time: range at sunrise; students arriving and buckling helmets; instructor demos; the first roll (nervous look, first move, grin); slow-mo turns at 120 fps; detail shots (keys, levers, boots, gloves, mirrors); high-fives and end-of-day photos; natural sound; and 5–10 short testimonials asking one question: **“What were you worried about before today?”**\n\n**Permission first:** get students' consent, ideally a signed photo/video release from PMT, before featuring anyone in ads.",
      keyPoints: [
        "Wide, medium, close-up, extreme close-up, POV, low, overhead: each has a job.",
        "Move with purpose: push, pull, pan, tilt, track, orbit, reveal.",
        "5-shot rule: five angles of one moment, not one angle of five moments.",
        "Build a shot bank so you're never waiting on footage.",
        "Signed releases before anyone appears in an ad."
      ],
      why: "A shot bank is what lets you make PMT ads and posts every week without a new shoot, and the 5-shot habit is what makes your edits look pro instead of like a slideshow.",
      example: {
        title: "5-shot sequence: “helmet on”",
        body: "1. **Wide:** student at the bike, range and cones behind.\n2. **Medium:** lifting the helmet.\n3. **Close-up:** face just before it goes on (nervous).\n4. **Extreme close-up:** fingers clicking the chin strap.\n5. **Unusual:** low angle from the ground looking up as the visor snaps shut (with natural sound).\n\nEdited with a cut on the strap click, that's a 6-second opener for any first-timer reel."
      },
      practice: [
        {
          prompt: "Write a shot list for one PMT moment (or a client's job) using the 5-shot rule plus one camera move.",
          fields: ["The moment", "Wide", "Medium", "Close-up", "Extreme close-up", "Unusual angle", "One camera move and where"],
          rubric: ["All five shots are different sizes/angles of the same moment", "The unusual angle is genuinely unusual", "Includes a motivated move (e.g., a reveal)", "Notes any permission needed"]
        }
      ],
      today: { task: "Shoot three 5-shot sequences (at a range, on your own bike, or at a client job) and edit one into a 15-second B-roll reel. Add the clips to a “Shot bank” folder tagged by type.", output: "3 five-shot sequences + 1 B-roll reel + shot bank folder started", minutes: 45, suggested: false },
      check: [
        { q: "What are the five shots in the 5-shot rule?", a: "Wide, medium, close-up, extreme close-up and one unusual angle." },
        { q: "Why does the 5-shot rule matter?", a: "Five shots of one moment edit into a professional sequence; one shot each of five moments edits into a slideshow." },
        { q: "What one question does the program suggest for student testimonials?", a: "“What were you worried about before today?”" }
      ]
    },
    {
      id: "cp-10",
      part: "edit",
      title: "The anatomy of a 20–30 second reel",
      minutes: 8,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 3 Editing short-form that holds attention: The anatomy of a 20-30 second reel", who: "Content training program" }
      ],
      alsoIn: ["Copywriting tab (hooks and the first 3 seconds)", "Meta Ads tab (hook rate and hold rate)"],
      idea: "Short-form editing is attention management. Every second has to earn the next one. The program's map for a 20–30 second reel:\n\n- **0–2 s · Visual hook.** Movement in frame 1, a bold first image, hook text on screen immediately. **Start mid-action, never with a logo or “hey guys.”**\n- **2–8 s · Setup.** Why this matters: the fear, the question, the problem.\n- **8–22 s · Payoff.** The proof: the transformation, the tip, the moment.\n- **22–30 s · Close.** A clear next step, or a seamless loop back to the start.\n\nThis lesson is the *editing* side of the opening: what's in the frame and how fast it moves. The words of the hook are taught in the Copywriting tab, and how to measure whether people stay (hook rate, hold rate) is in the Meta Ads tab.\n\n**Edit to the map:**\n\n1. Find your strongest moving shot and put it first, even if it happens last in real life.\n2. Get hook text on screen in the first frame.\n3. Make the setup short: one line of tension.\n4. Spend most of the time on the payoff. Show, don't tell.\n5. End with one clear next step, or cut the last frame so it flows into the first (a loop makes people watch twice).\n\nCam's mentor structure for video ads (hook, problem, solution, CTA in Ad Creative) maps onto the same beats; this is the timing version for organic reels.",
      keyPoints: [
        "0–2 s visual hook: movement, bold image, text on screen, start mid-action.",
        "2–8 s setup: the fear, question or problem.",
        "8–22 s payoff: the proof or transformation.",
        "22–30 s close: one next step or a loop.",
        "Never open with a logo or “hey guys.”"
      ],
      why: "This one map makes every PMT and client reel hold attention longer, and it gives you a repeatable structure you can hand to a client's staff.",
      example: {
        title: "PMT transformation reel on the map",
        body: "- **0–2 s:** close-up of a student's shaky hand on the clutch, text: “8 am: never ridden.”\n- **2–8 s:** the nervous face under the helmet; text “Scared I'd drop it in front of everyone.”\n- **8–22 s:** first roll, first stop, slow-mo turn through the cones at 120 fps, the grin; text “2 pm.”\n- **22–30 s:** student pulls off the helmet laughing; text “Bikes and helmets provided. Link in bio for dates.”"
      },
      practice: [
        {
          prompt: "Storyboard a 20–30 second reel for PMT or a client on the four-beat map.",
          fields: ["0–2 s: first frame + text", "2–8 s: setup", "8–22 s: payoff shots", "22–30 s: close or loop"],
          rubric: ["Frame 1 has movement and text", "No logo or slow intro", "Payoff gets the most time", "Clear CTA or a real loop"]
        }
      ],
      today: { task: "Edit one 20–30 second PMT reel on the 0-2-8-22 map from your shot bank (or yesterday's footage). Export and watch it on your phone with sound off and on.", output: "1 PMT reel built on the four-beat map", minutes: 45, suggested: false },
      check: [
        { q: "What happens in the first 0–2 seconds?", a: "The visual hook: movement in frame 1, a bold first image, hook text on screen immediately, starting mid-action." },
        { q: "What two ways can a reel close?", a: "A clear next step, or a seamless loop back to the start." }
      ]
    },
    {
      id: "cp-11",
      part: "edit",
      title: "Pacing: cut dead air and change something every 2–4 seconds",
      minutes: 8,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 3: Pacing", who: "Content training program" }
      ],
      idea: "Your job in the edit: remove anything boring and add a small visual change every few seconds, so the brain never gets a chance to swipe.\n\n- **Cut dead air ruthlessly.** On talking heads, remove every breath, “um” and pause. CapCut's **transcript editing and filler-word removal** do this fast.\n- **Change something every 2–4 seconds:** a new shot, a punch-in zoom, a B-roll cutaway, a text pop, a sound hit.\n- **Vary rhythm.** Fast-fast-fast-slow feels like music. Equal-length cuts feel like a slideshow.\n- **Cut on action.** Cut mid-movement (a head turn, a bike leaning in) and the cut becomes invisible.\n- **J-cuts and L-cuts.** Let the next clip's audio start before its picture (J), or the last clip's audio carry over (L). The program calls this “the single biggest ‘pro’ tell in editing.” In CapCut, detach or extend the audio and offset it from the video.\n- **Cut to the beat.** Use CapCut's beat markers to snap B-roll cuts to the music.\n\nA good drill from the program: take an old reel and **re-cut it 30% tighter.** You'll be shocked how much was filler, and how much better it plays.",
      keyPoints: [
        "Cut every breath, um and pause on talking heads.",
        "Change something every 2–4 seconds.",
        "Vary rhythm: fast-fast-fast-slow.",
        "Cut on action to hide cuts.",
        "J- and L-cuts are the biggest pro tell; snap B-roll to the beat."
      ],
      why: "Pacing is the skill most local business videos lack completely. Tight edits are how PMT's content holds attention on a feed full of creators.",
      example: {
        title: "Re-cutting a 45-second instructor tip",
        body: "Original: 45 seconds, one static shot, two “ums,” a long pause before the tip. Re-cut: transcript-delete fillers and pauses (now 31 s). Add a punch-in on the key line, two B-roll cutaways of the skill being done, an L-cut so the instructor's voice carries over the B-roll, and a text pop on the one word that matters. Final: 28 seconds, something new every 2–3 seconds."
      },
      practice: [
        {
          prompt: "Take one existing reel and plan a 30% tighter re-cut.",
          fields: ["Original length → target length", "What dead air you'll cut", "Changes you'll add every 2–4 s (list with timestamps)", "Where a J- or L-cut goes", "Where you'll cut on action"],
          rubric: ["Target is at least 30% shorter", "A change at least every 4 seconds", "At least one J- or L-cut", "Rhythm isn't all equal-length cuts"]
        }
      ],
      today: { task: "Re-cut an old reel (yours, PMT's or a client's) 30% tighter in CapCut using transcript editing, at least one J- or L-cut and cuts on action. Post the new version or send it to the client side by side with the old one.", output: "1 re-cut reel at least 30% tighter", minutes: 40, suggested: false },
      check: [
        { q: "How often should something change on screen?", a: "Every 2–4 seconds (a new shot, punch-in, cutaway, text pop or sound hit)." },
        { q: "What are J-cuts and L-cuts?", a: "J: the next clip's audio starts before its picture. L: the previous clip's audio carries over the next picture." },
        { q: "Why cut on action?", a: "Cutting mid-movement makes the cut feel invisible." }
      ]
    },
    {
      id: "cp-12",
      part: "edit",
      title: "Captions and on-screen text that read on mute",
      minutes: 8,
      tags: ["Course", "Platform fact (re-check)"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 3: Captions and on-screen text", who: "Content training program" },
        { doc: "ZDub Guide 03 Ad Creative V2", section: "New in V2: Writing a video ad live → Format and finishing (captions)", who: "Cam (9/17/26)" }
      ],
      idea: "Paul said in Ad Creative that about 85% of people scroll with sound off, so your captions *are* the video for most viewers.\n\n**The program's caption rules:**\n\n- **2–5 words per caption line**, big and high contrast.\n- **Highlight the key word** in your accent color (PMT gold).\n- **Keep captions out of the Reels danger zones:** roughly the **top 13%** and **bottom 23%** of a 9:16 frame, plus the right-side button column.\n- **Build one caption style, save it as a preset,** and use it on every PMT video. That's repetition, one of the six design principles.\n\n**Cam's mentor note (9/17):** captions on, but **avoid animated captions**, which are hard to read. A green-screened location sticker makes an ad feel organic.\n\nThe program likes accent-word highlights and big text; Cam warns against animated captions. They fit together: bold, static or simple-pop captions with one highlighted word, not bouncing word-by-word effects.\n\n**Workflow:** auto-caption in CapCut or Edits, then **fix every word** (auto captions misspell names like “Woodland” and “M1”), trim to 2–5 words per line, apply your preset, then check the safe zones with the Reels UI in mind.\n\nSafe-zone numbers come from 2026 templates and Meta changes its interface; re-check with Ads Manager's safe-zone overlay when you upload.",
      keyPoints: [
        "Most people watch on mute: captions carry the message.",
        "2–5 words per line, big, high contrast, one gold key word.",
        "Stay out of the top ~13%, bottom ~23% and right-side buttons.",
        "Save one caption preset per brand.",
        "Cam: captions on, but avoid hard-to-read animated captions."
      ],
      why: "A saved caption preset makes every PMT reel look like one brand and saves minutes on every edit; clean captions are what make ads work on mute.",
      example: {
        title: "PMT caption preset",
        body: "Font: Bebas Neue, white, black stroke 4 px, centered, sitting in the middle third of the frame. Key word in PMT gold. Max 4 words per line. No bounce animation; a simple cut-in per line. Example line: “NOBODY knows how” / “to ride on DAY ONE” with “DAY ONE” in gold."
      },
      practice: [
        {
          prompt: "Design your caption preset for PMT (or a client) and caption one 15-second clip by hand.",
          fields: ["Font, size, color, stroke/shadow", "Accent rule (which word gets gold)", "Max words per line", "Where captions sit (safe zones)", "Your captioned lines for the clip"],
          rubric: ["2–5 words per line", "One highlighted word per line at most", "Sits outside the danger zones", "Not a hard-to-read animation"]
        }
      ],
      today: { task: "Make a captioned talking-head tip reel in Edits or CapCut: auto-caption, fix every word, apply your new preset and check safe zones. Save the preset.", output: "1 captioned PMT tip reel + saved caption preset", minutes: 35, suggested: false },
      check: [
        { q: "How many words per caption line?", a: "2–5." },
        { q: "Where are the Reels caption danger zones?", a: "Roughly the top 13% and bottom 23% of a 9:16 frame, plus the right-side button column." },
        { q: "What caption style does Cam warn against?", a: "Animated captions, because they're hard to read." }
      ]
    },
    {
      id: "cp-13",
      part: "edit",
      title: "Sound design: five layers, not just music",
      minutes: 8,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 3: Sound design (the secret weapon); Your toolkit: Music warning for ads", who: "Content training program" },
        { doc: "ZDub Guide 03 Ad Creative V2", section: "Format and finishing (licensed music)", who: "Cam (9/17/26)" }
      ],
      idea: "Sound is half of how a video feels. Most beginners only add music. Pros layer five things:\n\n1. **Voice:** the loudest, clearest layer.\n2. **Music:** sits underneath. A practical start is about **-20 to -30 dB under the voice**, then adjust by ear. Edits' volume ducking does this automatically.\n3. **Natural sound:** the engine start, gravel, a visor snapping shut. This is what makes PMT content feel real.\n4. **Sound effects:** a whoosh on a transition, a hit on a text pop, a riser before the payoff. Subtle, not cartoonish.\n5. **Silence:** dropping the music for one beat before the payoff is one of the most powerful moves there is.\n\n**Music licensing (important):** trending songs in the Instagram app are licensed for personal posts, **not ads**. Boosted posts and Ads Manager ads with those tracks get muted or rejected. For anything PMT pays to run, use **Meta Sound Collection**, CapCut's commercial-cleared tracks, or a paid library. Cam (9/17) says the same: licensed music may get the ad rejected. Trending audio is fine for organic posts only.\n\n**Build a Range ASMR reel** to practice: no talking, no music, just layered natural sound (engines, gravel, visors, cones) cut to rhythm. It's one of the 15 PMT formats, and it trains your ear fast.",
      keyPoints: [
        "Layer voice, music, natural sound, SFX and silence.",
        "Music ~-20 to -30 dB under voice; use ducking.",
        "Natural sound is what makes it feel real.",
        "Drop the music for a beat before the payoff.",
        "Trending IG songs are for organic only; ads need cleared music."
      ],
      why: "Sound design is the cheapest way to make PMT's content feel premium, and getting music licensing right keeps paid ads from being muted or rejected.",
      example: {
        title: "Re-sounding a PMT reel",
        body: "Before: trending song at full volume, voice buried. After: voice up front; a Meta Sound Collection track ducked under it; an engine start at 0:00 before anything else; a whoosh on the cut to the range; music drops out for half a second right before the student's grin, then returns."
      },
      practice: [
        {
          prompt: "Plan the five sound layers for one reel.",
          fields: ["Voice (who, what)", "Music (source + level, cleared for ads?)", "Natural sounds and where", "SFX and where", "Where silence goes"],
          rubric: ["All five layers considered", "Music source is cleared if it might run as an ad", "SFX are subtle and motivated", "Silence sits right before the payoff"]
        }
      ],
      today: { task: "Build a 15–20 second Range ASMR reel (or job-site ASMR for a trade client) entirely from natural sound clips. Then re-sound one older reel with the five layers and cleared music.", output: "1 ASMR reel + 1 re-sounded reel", minutes: 45, suggested: false },
      check: [
        { q: "What are the five sound layers?", a: "Voice, music, natural sound, sound effects, silence." },
        { q: "Can you use trending Instagram songs in paid ads?", a: "No. They're licensed for personal posts; ads with them get muted or rejected. Use Meta Sound Collection, CapCut commercial tracks or a paid library." }
      ]
    },
    {
      id: "cp-14",
      part: "edit",
      title: "Transitions and movement: motivated, not template",
      minutes: 8,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 3: Transitions; Movement in the edit", who: "Content training program" }
      ],
      idea: "**Transitions.** **90% of your cuts should be straight cuts.** When you do use a transition, make it **motivated**, meaning it comes from the footage:\n\n- **Whip pan:** a fast camera swing that blurs into the next shot.\n- **Object wipe:** a bike passes the lens and the next shot starts behind it.\n- **Match cut:** the helmet goes on in shot A, comes off in shot B (same framing, different time).\n- **Mask reveal:** the next shot appears through a shape or edge in the frame.\n\nAvoid spinning, cube and star-wipe presets. They scream template.\n\n**Movement in the edit:**\n\n- **Punch-in zooms:** scale a talking head to 110–120% on key lines to fake a second camera.\n- **Speed ramps:** slow-mo into a turn, snap back to real time on the exit (shoot at 120 fps for this).\n- **Keyframes:** animate text, logos and zooms with **ease-in/ease-out** so motion feels smooth, not robotic.\n\n**Plan transitions at capture.** A match cut only works if you shoot both halves in the same framing. A whip pan needs you to whip at the end of shot A and the start of shot B. Put them on the shot list before the shoot.\n\nThe program's drill: a **transformation reel with one match cut and one speed ramp.**",
      keyPoints: [
        "90% straight cuts.",
        "Motivated transitions: whip pan, object wipe, match cut, mask reveal.",
        "Skip spin, cube and star-wipe presets.",
        "Punch-in 110–120%, speed ramps, eased keyframes.",
        "Plan match cuts and whips at capture."
      ],
      why: "Motivated transitions and speed ramps are what make PMT's riding footage look like a brand film instead of a phone dump, using footage you already have.",
      example: {
        title: "PMT match cut + speed ramp",
        body: "Shot A (8 am): close-up of a student putting the helmet on, nervous. Shot B (2 pm): same framing, same student pulling the helmet off, grinning. Cut between them on the helmet motion. Then a 120 fps clip of the student entering a cone turn: ramp from 30% speed to 100% on the exit, with a whoosh."
      },
      practice: [
        {
          prompt: "Plan a transformation reel with one match cut and one speed ramp.",
          fields: ["Match cut: shot A and shot B (same framing)", "Speed ramp: the clip and where it slows/speeds", "Punch-in moments", "Any other motivated transition"],
          rubric: ["Match cut halves share framing", "Ramp uses high-frame-rate footage", "No template presets", "Most cuts are still straight cuts"]
        }
      ],
      today: { task: "Shoot (or pull from your bank) the two halves of a match cut and one 120 fps clip, then edit a 15–25 second transformation reel with the match cut and a speed ramp in CapCut.", output: "1 transformation reel with a match cut and speed ramp", minutes: 45, suggested: false },
      check: [
        { q: "What share of cuts should be straight cuts?", a: "About 90%." },
        { q: "What is a match cut?", a: "A cut between two shots with matching framing or action, e.g., helmet on in shot A, helmet off in shot B." },
        { q: "How much should a punch-in zoom scale a talking head?", a: "About 110–120%." }
      ]
    },
    {
      id: "cp-15",
      part: "edit",
      title: "Color and export: correct, grade, match, then check on your phone",
      minutes: 7,
      tags: ["Course", "Platform fact (re-check)"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 3: Color; Export", who: "Content training program" }
      ],
      idea: "**Color in four steps:**\n\n1. **Correct first.** Fix exposure and white balance so skin looks natural and whites look white.\n2. **Then grade.** Add the look: warm and contrasty, cool and clean, and so on.\n3. **Match everything.** Use *Apply to all* or an **adjustment layer** in CapCut so every clip shares one look.\n4. **Never push saturation** so far that skin turns orange.\n\nSave your settings as a **“PMT look” preset** so every reel matches. A warm, consistent grade across the feed is part of what makes it feel like one brand (repetition again). DaVinci Resolve (free) is the pro tool if you outgrow CapCut's color, but it's optional and later.\n\n**Export:**\n\n- **1080 × 1920 (9:16)** at your shooting frame rate, high bitrate.\n- Turn on **“Upload at highest quality”** in Instagram's settings.\n- **Watch the final export on your phone before posting, with sound on and sound off.** Things you miss on a laptop (tiny text, a caption in the button zone, a color shift) jump out on the phone.\n\nExport and upload settings are app features that change; re-check them when CapCut or Instagram updates.",
      keyPoints: [
        "Correct (exposure, white balance) before you grade.",
        "Match every clip with Apply to all or an adjustment layer.",
        "Never let skin turn orange.",
        "Export 1080×1920 at your frame rate, high bitrate; IG “highest quality” on.",
        "Always check the export on your phone, sound on and off."
      ],
      why: "A saved PMT look and a fixed export routine make every piece consistent and save time, and phone checks catch the mistakes clients notice.",
      example: {
        title: "Building the PMT look",
        body: "Correct: drop exposure on the bright sunrise clips, warm the white balance on the shaded ones until the instructor's skin matches. Grade: slight warmth, a little contrast, highlights pulled down so the sky holds. Match: adjustment layer across the whole timeline. Save as “PMT look v1.” Export 1080×1920, 30 fps, high bitrate. Watch on the phone: fix one caption that slipped into the bottom zone."
      },
      practice: [
        {
          prompt: "Write your color and export recipe for PMT.",
          fields: ["Correction steps", "Grade (the look in words)", "How you'll match clips", "Export settings", "Phone check items"],
          rubric: ["Correct comes before grade", "One matching method across clips", "Export is 1080×1920 at shooting frame rate", "Includes sound-on and sound-off phone check"]
        }
      ],
      today: { task: "Correct, grade and match one existing PMT reel, save the settings as “PMT look v1,” export to spec and do the phone check. Post or deliver it.", output: "1 color-matched PMT reel + saved PMT look preset", minutes: 35, suggested: false },
      check: [
        { q: "Why correct before you grade?", a: "So exposure and white balance are right (natural skin, true whites) before you add a stylized look." },
        { q: "What's the export spec for Reels?", a: "1080 × 1920 (9:16) at your shooting frame rate, high bitrate, with Instagram's highest-quality upload on." }
      ]
    },
    {
      id: "cp-16",
      part: "statics",
      title: "Sizes and safe zones: build the templates once",
      minutes: 7,
      tags: ["Course", "Platform fact (re-check)"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 4 Static ads and carousels: Sizes and safe zones", who: "Content training program (figures from AdKit's Meta template; Billo; Rocketium)" }
      ],
      alsoIn: ["Meta Ads tab (placements)"],
      idea: "A static ad has about one second to work. Build every one around a single focal point and one hook line. Then design **two versions of every concept: the 4:5 feed version and the 9:16 Stories/Reels version.** Together they cover nearly every Meta placement.\n\n**Canvas sizes and keep-out zones (2026 figures):**\n\n- **Feed (FB + IG):** 1080 × 1350 (4:5). Keep text and logos out of the outer 10% on every side.\n- **Carousel:** 1080 × 1080 (1:1) or 4:5. Outer 10% on every side.\n- **Stories:** 1080 × 1920 (9:16). Top 250 px and bottom 250 px.\n- **Reels:** 1080 × 1920 (9:16). Top 250 px, **bottom 450 px**, and the right-side button column.\n\nAds Manager has a **Safe Zone overlay** when you upload. Use it every time.\n\n**Build once:** make one Canva template per placement with the danger zones drawn in as a **locked, hidden layer**. Turn it on to check, off to export. You'll never put a CTA under the Reels buttons again.\n\nThese are platform specs from the program's October 2026 sources. Meta changes placements and overlays; re-check against the current overlay before each launch.",
      keyPoints: [
        "Design every concept in 4:5 (feed) and 9:16 (Stories/Reels).",
        "Feed 1080×1350; carousel 1080×1080 or 4:5; Stories and Reels 1080×1920.",
        "Reels keep-out: top 250 px, bottom 450 px, right-side buttons.",
        "Use Ads Manager's Safe Zone overlay on every upload.",
        "Canva templates with a locked, hidden danger-zone layer."
      ],
      why: "Getting placements right once means no client ad ever gets its headline covered by a button, and resizing a concept becomes a two-minute job.",
      example: {
        title: "PMT template set",
        body: "Canva folder “PMT Templates”: Feed 4:5, Story 9:16, Reel 9:16, Carousel 1:1. Each has a red 40% transparent layer over the danger zones, locked and hidden. Headline sits in the top third below 250 px on the 9:16 versions; the button sits above the 450 px Reels zone."
      },
      practice: [
        {
          prompt: "List the canvas and keep-out zones you'll draw for each template.",
          fields: ["Feed 4:5", "Carousel", "Stories 9:16", "Reels 9:16"],
          rubric: ["Sizes match the spec", "Keep-out zones match the spec", "Notes the right-side button column for Reels"]
        }
      ],
      today: { task: "Build the four safe-zone templates in Canva (Feed, Carousel, Story, Reel) with locked, hidden danger-zone layers. Then put one existing PMT static into the Feed and Reel templates and fix anything in a danger zone.", output: "4 Canva safe-zone templates + 1 PMT static in 4:5 and 9:16", minutes: 35, suggested: false },
      check: [
        { q: "What two versions should every concept get?", a: "A 4:5 feed version and a 9:16 Stories/Reels version." },
        { q: "What are the Reels keep-out zones?", a: "Top 250 px, bottom 450 px and the right-side button column (on 1080×1920)." }
      ]
    },
    {
      id: "cp-17",
      part: "statics",
      title: "Six static layouts to master",
      minutes: 9,
      tags: ["Course", "Disagreement"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 4: Six static ad layouts to master", who: "Content training program" },
        { doc: "ZDub Guide 03 Ad Creative V2", section: "2. The four zones (no logo on statics)", who: "Paul Snowman (10/19/26)" }
      ],
      alsoIn: ["Ad Creative: four zones, seven archetypes, six native formats"],
      idea: "These are the program's six *design layouts*. (What message to put in them is in Ad Creative: Paul's archetypes and four zones.)\n\n1. **Hero photo + hook.** A strong real photo fills the frame, headline in the top third, CTA at the bottom. Your workhorse.\n2. **Before / after split.** Nervous rider on the left, confident rider on the right. Speaks straight to PMT's biggest objection, the fear of looking foolish.\n3. **Real testimonial card.** A student's face plus a short quote they actually said. Only real quotes from real students, with permission.\n4. **Native / lo-fi.** Looks like a normal post, a phone note or a candid snapshot. Often outperforms polished design because it doesn't trigger ad blindness.\n5. **What's included.** A clean checklist graphic: bikes, helmets and gloves provided at every PMT location, class format, where it is.\n6. **Bold type only.** One huge line of text on a brand-color background. Fast to make, great for testing hooks.\n\nPMT's on-image text follows the same rules as the ad copy: no jargon, no “cheap,” “easy,” “discount” or “guaranteed.”\n\n**Where the sources differ: the logo.**\n\n- **The program:** the hero layout includes a small logo and CTA at the bottom, and puts the logo third in the hierarchy.\n- **Paul (mentor, 10/19):** no logo, price list, bio, phone number or email on statics.\n\nBy the hub's authority rules, mentor guidance wins for paid statics: leave the logo off ads (the account name already shows who it's from). A small logo on organic brand posts is the program's call, not the mentors'.",
      keyPoints: [
        "Hero photo + hook is the workhorse.",
        "Before/after split hits PMT's fear of looking foolish.",
        "Testimonial cards use only real quotes with permission.",
        "Lo-fi and type-only layouts are fast and often beat polish.",
        "Paid statics: no logo (Paul); the program allows a small one."
      ],
      why: "Six master templates in Canva let you turn any offer into a full test set in an hour, for PMT or a new client.",
      example: {
        title: "One PMT offer, six layouts",
        body: "Offer: next beginner class in Woodland, bikes and helmets provided.\n\n1. **Hero:** grinning student mid-turn, “Never ridden? This could be you by Sunday.”\n2. **Split:** helmet-on nervous face / helmet-off grin.\n3. **Testimonial:** a real review line about being nervous (with permission).\n4. **Lo-fi:** an Apple Notes screenshot: “Things I was scared of before class: 1. dropping the bike…”\n5. **What's included:** ✓ bike ✓ helmet ✓ gloves ✓ range time.\n6. **Type only:** “SOMEDAY IS THIS SATURDAY.”"
      },
      practice: [
        {
          prompt: "Write all six layouts for one real PMT or client offer.",
          fields: ["Hero photo + hook", "Before/after split", "Testimonial card (real quote source)", "Native/lo-fi", "What's included", "Bold type only"],
          rubric: ["Each uses a real photo, quote or fact", "Copy fits PMT's rules", "No logo on the paid versions", "Each could be made from assets you have"]
        }
      ],
      today: { task: "Build all six layouts for one PMT offer in Canva at 4:5, from your master templates. Pick the two you'd launch first.", output: "6 PMT statics, one per layout", minutes: 45, suggested: false },
      check: [
        { q: "Name the six static layouts.", a: "Hero photo + hook, before/after split, real testimonial card, native/lo-fi, what's included, bold type only." },
        { q: "Where do the program and Paul differ, and whose guidance applies to paid statics?", a: "The program's hero layout includes a small logo; Paul says no logo on statics. Mentor guidance wins for paid statics." }
      ]
    },
    {
      id: "cp-18",
      part: "statics",
      title: "Carousels: slide 1 stops, the last slide sends",
      minutes: 7,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 4: Carousels", who: "Content training program" }
      ],
      alsoIn: ["Organic Social tab (carousel strategy)"],
      idea: "Carousels are great for anything with steps, lists or a reveal. Four rules:\n\n1. **Slide 1 is the hook.** It must stop the scroll on its own. Treat it like a static ad.\n2. **One idea per slide**, consistent layout, big text.\n3. **Visual continuity.** Try a **“seamless” carousel** where one long image runs across slides, so swiping feels like a reveal. In Canva, design one wide canvas (for example 3 × 1080 = 3240 px wide) and slice it into slides.\n4. **Last slide = next step:** DM us, book a class, follow.\n\n**Good PMT carousel ideas from the program:**\n\n- “5 things nobody tells you before your first class”\n- “What a class day actually looks like, hour by hour”\n- “Gear checklist”\n\n**Build order:** write all slide text first (one line each), then design slide 1 until it stops *you*, then design the rest on one template, then the CTA slide. Run the squint and one-second tests on slide 1 only. If slide 1 fails, nothing else gets seen.",
      keyPoints: [
        "Slide 1 must stop the scroll alone.",
        "One idea per slide, same layout, big text.",
        "Seamless carousels make swiping feel like a reveal.",
        "Last slide is the next step.",
        "Write all slide text before designing."
      ],
      why: "Carousels answer first-timer questions (gear, the day, fears) in a format people save and share, which makes them strong organic posts and value-breakdown ads for PMT.",
      example: {
        title: "“5 things nobody tells you before your first class”",
        body: "1. Hook: “5 things nobody tells you before your first motorcycle class” over a helmet-on close-up.\n2. “You don't need your own bike.” (training bikes photo)\n3. “Everyone stalls. Everyone.” (student laughing)\n4. “The first hour is walking the bike.”\n5. “Wear boots that cover your ankles.” (check PMT's real gear list)\n6. “Your instructor has seen every nervous rider.”\n7. CTA: “Bikes and helmets provided. Tap the link in bio for dates.”"
      },
      practice: [
        {
          prompt: "Write every slide for one PMT carousel (or a client how-to).",
          fields: ["Slide 1 hook + image", "Slides 2–5 (one idea each)", "Slide 6 (optional)", "Last slide CTA", "Seamless or standard? Why"],
          rubric: ["Slide 1 works as a standalone ad", "One idea per slide", "Every fact checked against the real business", "Clear CTA on the last slide"]
        }
      ],
      today: { task: "Build the “5 things nobody tells you before your first class” carousel (or the gear checklist) in Canva, 1080×1350, using real PMT photos. Post it or send it to PMT.", output: "1 finished PMT carousel", minutes: 45, suggested: false },
      check: [
        { q: "What's the job of slide 1?", a: "To stop the scroll on its own, like a static ad." },
        { q: "What is a seamless carousel?", a: "One long image running across the slides so swiping feels like a reveal." }
      ]
    },
    {
      id: "cp-19",
      part: "statics",
      title: "The Canva workflow: brand kit, master templates and variations",
      minutes: 8,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 4: Canva workflow; Make variations, not one-offs", who: "Content training program" }
      ],
      alsoIn: ["Ad Creative: Concept tests vs iteration tests; The 3x3x1 sprint"],
      idea: "**The five-step Canva workflow:**\n\n1. **Set up a Brand Kit** (Canva Pro) or a “PMT Brand” page in one design (free): logos, navy/gold/bright blue, your two fonts.\n2. **Build master templates** for the six layouts in 4:5, then resize to 9:16 and 1:1.\n3. **Use Canva templates for inspiration, never as-is.** Change layout, fonts and colors until it's yours.\n4. **Export PNG for statics, MP4 for anything animated.**\n5. **Name files so you can track tests:** PMT_Beginner_HeroPhoto_HookA_4x5_v1.png\n\n**Make variations, not one-offs.** For every ad concept, design **3–5 versions**: swap the photo, the headline treatment or the background color. Meta finds winners by testing; your job on the creative side is to hand it real variety, not five copies of the same thing.\n\nThat last line connects to Ad Creative: changing only a headline or button is an *iteration*; a different reason to buy is a *concept*. On the design side, keep each variation's change deliberate and name it in the file name so you can read results later.\n\nCanva Pro ($18/mo in October 2026) becomes worth it once you're making 5+ statics a week, mostly for one-click resize and the background remover.",
      keyPoints: [
        "Brand kit (or brand page) first; every design starts from it.",
        "Master templates for six layouts in 4:5, resized to 9:16 and 1:1.",
        "Canva templates for inspiration only, never as-is.",
        "Name files: Client_Persona_Layout_Hook_Size_v#.",
        "3–5 deliberate variations per concept."
      ],
      why: "This is the system that lets one person produce a client's full monthly static volume, and clean file names make test results readable for client reports.",
      example: {
        title: "One concept, four named variations",
        body: "- PMT_Beginner_HeroPhoto_HookA_4x5_v1.png (grin photo, “Never ridden?”)\n- PMT_Beginner_HeroPhoto_HookA_4x5_v2.png (gear-up photo, same hook)\n- PMT_Beginner_HeroPhoto_HookB_4x5_v1.png (grin photo, “Own no bike? Ride Saturday.”)\n- PMT_Beginner_HeroPhoto_HookA_4x5_v3.png (same as v1, navy vs white background)\n\nEach file changes one thing, and the name says what."
      },
      practice: [
        {
          prompt: "Plan 4 variations of one PMT concept with file names.",
          fields: ["The concept", "Variation 1: what changes + file name", "Variation 2: what changes + file name", "Variation 3: what changes + file name", "Variation 4: what changes + file name"],
          rubric: ["Each variation changes one element", "File names follow the convention", "Variations are real variety, not near-duplicates"]
        }
      ],
      today: { task: "Turn your six PMT layouts into master templates (4:5, resized to 9:16 and 1:1). Then produce 4 named variations of your best concept and export them as PNGs.", output: "PMT master template set + 4 named, exported variations", minutes: 45, suggested: false },
      check: [
        { q: "How many variations per concept, and what do you swap?", a: "3–5: swap the photo, headline treatment or background color." },
        { q: "What's the file naming example from the program?", a: "PMT_Beginner_HeroPhoto_HookA_4x5_v1.png" }
      ]
    },
    {
      id: "cp-20",
      part: "ideas",
      title: "Where ideas come from, and 15 PMT formats to rotate",
      minutes: 9,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 5 Creative ideation: Where good ideas come from; 15 PMT content formats to rotate", who: "Content training program" }
      ],
      alsoIn: ["Ad Creative: Generate 40 ideas on purpose", "Organic Social tab"],
      idea: "Ideas are a skill, not a gift. Creators who always have ideas have a system for collecting them. Four sources:\n\n- **Your swipe file:** steal the format, never the content. A gym's “what you think it'll be like vs. what it's actually like” reel becomes PMT's “what you think your first class will be like vs. reality.”\n- **Students' real words:** every fear, question and comment from class or the DMs is an idea. “I'm scared I'll drop the bike in front of everyone” is a whole series.\n- **Other industries:** car commercials, Red Bull, outdoor brands, film trailers. Most local businesses copy each other; you stand out by borrowing from outside the niche.\n- **Trends, adapted:** ask “what's the PMT version?” Trending audio in organic posts only, never in paid ads.\n\n**The 15 PMT formats to rotate:**\n\n1. **The transformation:** nervous at 8 am → riding confidently by afternoon\n2. **POV: your first class:** Osmo POV from gear-up to first lap\n3. **Day in the life of a class:** the whole day in 30 seconds\n4. **Expectation vs. reality:** comedic, relatable, kills the fear\n5. **Myth vs. fact:** “You need to own a bike” (false, bikes are provided)\n6. **One-skill tip:** an instructor teaches one thing in 20 seconds\n7. **Student reaction:** the face when they pass, or the first shift\n8. **Real testimonial:** one student, one question, 15 seconds\n9. **Sunrise setup B-roll:** cinematic, sound-driven, no talking\n10. **Range ASMR:** engines, gravel, visors, all sound\n11. **Things nobody tells you:** carousel or talking head\n12. **Gear guide:** what to wear, what's provided\n13. **Green-screen Q&A:** answer a real DM question over a screenshot\n14. **Slow-mo highlight:** 120 fps cornering set to music\n15. **Behind the instructor:** who's teaching you and why they love it\n\nFor a trade client, most translate directly: transformation (before/after job), day in the life of a crew, myth vs fact, one-skill tip, job-site ASMR.",
      keyPoints: [
        "Steal the format, never the content.",
        "Students' real fears and questions are your best idea bank.",
        "Borrow from outside the niche to stand out.",
        "Adapt trends, but trending audio stays out of paid ads.",
        "Rotate 15 proven formats instead of starting from zero."
      ],
      why: "A fixed format menu means you never stare at a blank calendar for PMT, and the same menu adapts to every trade client ZDub signs.",
      example: {
        title: "Translating the menu for a Sacramento landscaper",
        body: "Transformation: bare dirt yard → finished pavers in 20 seconds. Day in the life: crew from 6 am load-up to final hose-down. Myth vs fact: “Turf needs no maintenance” (ask the owner what's true). One-skill tip: how deep to water in July. Job-site ASMR: plate compactor, pavers clicking into place."
      },
      practice: [
        {
          prompt: "Pick three of the 15 formats and turn each into a specific episode for PMT (or translate them for a client).",
          fields: ["Format 1 → specific episode", "Format 2 → specific episode", "Format 3 → specific episode", "Which student quote or swipe-file post inspired one of them"],
          rubric: ["Each episode is specific enough to shoot tomorrow", "At least one comes from a real student's words", "Formats are different from each other"]
        }
      ],
      today: { task: "Make one reel from the 15 formats you haven't tried yet (Myth vs. fact or Expectation vs. reality are fast). Post it or send it to PMT, and log it.", output: "1 finished PMT reel in a new format", minutes: 45, suggested: false },
      check: [
        { q: "What does “steal the format, never the content” mean?", a: "Copy the structure of a post that works (e.g., expectation vs reality), but fill it with your own business's real content." },
        { q: "Name three of the 15 PMT formats.", a: "Any three: transformation, POV first class, day in the life, expectation vs reality, myth vs fact, one-skill tip, student reaction, real testimonial, sunrise B-roll, range ASMR, things nobody tells you, gear guide, green-screen Q&A, slow-mo highlight, behind the instructor." }
      ]
    },
    {
      id: "cp-21",
      part: "ideas",
      title: "From idea to shoot: the concept sheet, Claude and constraint drills",
      minutes: 9,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Module 5: From idea to shoot: the concept sheet; Using Claude as your creative partner; Creative constraint drills", who: "Content training program" }
      ],
      idea: "**The concept sheet.** Before you film anything, fill this out (a phone note is fine):\n\n1. **The idea in one sentence**\n2. **The feeling** you want the viewer to have (relief, excitement, “that's me”)\n3. **The first frame:** exactly what's on screen in second one\n4. **Format and length**\n5. **Shot list:** using the 5-shot rule\n6. **Sound plan:** music, natural sound, voiceover\n7. **On-screen text**\n8. **The ending:** CTA or loop\n\n**Claude as your creative partner:**\n\n- “Give me 20 reel concepts for a motorcycle school targeting nervous first-timers. Mix comedy, cinematic and educational.” Then pick the 3 best and push back on the rest.\n- Paste your concept sheet and ask for a detailed shot list with angles and movement.\n- Upload a screenshot of your ad or a frame of your edit: “Critique this like a senior art director. What would you change?”\n- **AI gives you volume. Your taste picks the winner, and your footage makes it real.**\n\n**Constraint drills.** Constraints force creativity. Once a week, make a reel with one rule:\n\n- Only 5 shots\n- No talking, sound only\n- One continuous take\n- Text-only story\n- Shot entirely on the Osmo\n\nThe concept sheet is the content-production version of the creative brief in Ad Creative: no sheet, no shoot.",
      keyPoints: [
        "Fill the 8-part concept sheet before filming anything.",
        "Decide the first frame and the feeling up front.",
        "Use Claude for volume, shot lists and senior-level critique.",
        "Your taste picks; your real footage makes it real.",
        "One constraint drill a week builds range fast."
      ],
      why: "Concept sheets make shoots fast (you show up knowing every shot) and let you hand a plan to PMT's staff or a client to film themselves.",
      example: {
        title: "PMT concept sheet: “Myth vs. fact: you need your own bike”",
        body: "1. **Idea:** bust the myth that you need a bike to take the class.\n2. **Feeling:** relief.\n3. **First frame:** a student standing in a showroom with a price tag, text “MYTH: you need a bike first.”\n4. **Format:** 15-second myth vs fact reel.\n5. **Shots:** wide row of training bikes; medium student walking to one; close-up helmet on the shelf; extreme close-up key turning; low angle bike rolling past.\n6. **Sound:** engine start, light music ducked, whoosh on the fact reveal.\n7. **Text:** “MYTH” / “FACT: bikes and helmets provided.”\n8. **Ending:** “Link in bio for dates.”"
      },
      practice: [
        {
          prompt: "Fill a full concept sheet for one PMT or client reel.",
          fields: ["1. Idea in one sentence", "2. Feeling", "3. First frame", "4. Format and length", "5. Shot list (5-shot rule)", "6. Sound plan", "7. On-screen text", "8. Ending"],
          rubric: ["First frame is concrete and has movement or a bold image", "Shot list follows the 5-shot rule", "Sound plan has more than music", "Ending is a CTA or a loop"]
        },
        {
          prompt: "Ask Claude for 20 concepts, then record which 3 you picked and why you rejected the rest.",
          fields: ["Your prompt", "The 3 you picked", "Why the others lost"],
          rubric: ["Prompt names the audience and mix of styles", "Picks are specific and shootable", "Rejections give real reasons (cliché, not true, can't film it)"]
        }
      ],
      today: { task: "Write one concept sheet, then make a constraint-drill reel from it (pick one rule: 5 shots only, sound only, one take, text-only, or all-Osmo). Upload a frame to Claude for an art-director critique and log one fix.", output: "1 concept sheet + 1 constraint-drill reel + 1 logged fix", minutes: 45, suggested: false },
      check: [
        { q: "Name the eight parts of the concept sheet.", a: "Idea in one sentence, feeling, first frame, format and length, shot list, sound plan, on-screen text, ending." },
        { q: "What's the division of labor between AI and you in ideation?", a: "AI gives volume; your taste picks the winner; your footage makes it real." }
      ]
    },
    {
      id: "cp-22",
      part: "ideas",
      title: "Ship it: the pre-publish quality checklist",
      minutes: 7,
      tags: ["Course"],
      source: [
        { doc: "Scroll-Stopping Creative: 12-Week Content Training Program (10/19/26)", section: "Pre-publish quality checklist; How a 2-hour core session runs (Review block); Output targets", who: "Content training program" }
      ],
      alsoIn: ["Ad Creative: The 8 checks before launch (for paid statics)"],
      idea: "Run every piece through this before it goes out. Copy it into your phone notes.\n\n1. The **first frame works as a thumbnail** and has movement or a bold image.\n2. **One clear focal point;** passes the squint test.\n3. **Text is readable on a phone at arm's length,** and nothing sits in the safe-zone danger areas.\n4. **Fonts, colors and caption style match the brand.**\n5. **No dead air;** something changes every 2–4 seconds.\n6. **Audio:** voice clear, music underneath, natural sound or SFX where it helps.\n7. **Color matches** across all clips; skin looks natural.\n8. **Works with sound off** (captions) and better with sound on.\n9. **Music is cleared** for how it's used (organic vs. paid).\n10. **Everyone shown has given permission.**\n11. **Exported at 1080 × 1920 (or 4:5)** and checked on your phone.\n12. **You'd be proud to show it to a client** next to the creators you admire.\n\n**Then review, every time.** The program's session ends with a 10-minute review: compare the piece against a pro example and write one thing to fix next time in your learning log. Shipping plus honest review is the habit that makes you good. “Never skip Friday.”\n\nFor paid statics, also run Paul's 8 checks in Ad Creative (one idea, who it's for, visible proof, small specific CTA, true and compliant). The two lists overlap; the mentor list adds the selling checks.\n\nVolume matters too: steady output with an honest review after each piece is what closes the gap with the creators you admire.",
      keyPoints: [
        "Thumbnail-worthy first frame; one focal point.",
        "Readable on a phone, out of the danger zones, on-brand.",
        "No dead air; clean layered audio; matched color.",
        "Works on mute; music cleared; permissions in hand.",
        "Compare to a pro example and log one fix after every piece."
      ],
      why: "A fixed checklist is how you deliver consistent quality to PMT and future clients without second-guessing, and the review habit is what makes next month's work better than this month's.",
      example: {
        title: "Checklist catch on a PMT reel",
        body: "Fails found: the CTA text sat in the bottom 450 px (item 3), the trending song was on a reel PMT wanted to boost (item 9), and one student in the background hadn't signed a release (item 10). Fixes: moved the CTA up, swapped to a Meta Sound Collection track, cropped the student out. Log: “Check releases before the edit, not after.”"
      },
      practice: [
        {
          prompt: "Run your most recent piece through all 12 checks.",
          fields: ["The piece", "Checks passed (numbers)", "Checks failed + fix for each", "Pro example you compared it to", "One thing to fix next time (log it)"],
          rubric: ["All 12 answered honestly", "Each failure has a concrete fix", "Compared to a real pro example", "Log entry is specific"]
        }
      ],
      today: { task: "Take your best piece from this tab (reel, static or carousel), run the 12-point checklist, fix every failure, then post it or deliver it to PMT. Add the one-line review to your learning log.", output: "1 checked, published or delivered piece + learning log entry", minutes: 30, suggested: false },
      check: [
        { q: "Name four items on the pre-publish checklist.", a: "Any four: thumbnail-worthy first frame; one focal point/squint test; readable text out of danger zones; on-brand fonts/colors/captions; no dead air; clean audio; matched color; works sound-off; music cleared; permissions; correct export checked on phone; proud to show a client." },
        { q: "What happens in the review block after every piece?", a: "Compare it to a pro example and write one thing to fix next time in the learning log." }
      ]
    }
  ]
});
