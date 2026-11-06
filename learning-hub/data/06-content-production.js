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
