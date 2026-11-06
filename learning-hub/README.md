# ZDub Learning Hub

A daily learning page for running ZDub Media. Each tab is one skill. Each skill reads like a short book broken into lessons you can finish in about 10 minutes and apply the same day.

## How to use it

1. **Today** shows your pinned topics (pin 3–5) with the next lesson in each, your streak, a daily review card, and everything you applied this week.
2. Open a topic, read one lesson, and work through it on the page:
   - **The idea**: the concept, key points, why it matters for ZDub and a worked example (PMT or a local trade where possible)
   - **Your turn (workbook)**: type your answers, tick the self-check, reveal a strong example answer, then hit **Get feedback**
   - **Do it today**: one 15–45 minute task that produces something real, plus a box for what happened when you applied it
   - **Quick check**: recall questions with answers
   - **My notes**, then **Mark lesson done**
3. **My Bank** keeps every lesson you finished, with your answers, coach feedback, notes and results. It's searchable.
4. **Reference**: the mentor roster and call log, where the mentors disagree, the 13 cross-call principles, the 25 Laws, the book library, the hook formula bank, checklists, the glossary and the final exam.

Extras: the **Ad Workshop** in Copywriting (write inputs, then the hook, lead, body and close one at a time, with corrections carried forward, or rewrite an existing ad in a new structure) and the **Swipe file** and **Learning log** trackers in Content Production.

There's no fixed calendar. Pin what matters this month and change it any time.

## How it runs

Published as a private claude.ai Artifact: https://claude.ai/artifact/DE6hjmW5k9rVdyE8537u62 (republish with `node build.js`, then publish `dist/zdub-learning-hub.html` to the same artifact).


- `index.html` + `app.css` + `app.js` are the app. Open `index.html` in a browser and it works, saving progress in that browser.
- `node build.js` bundles everything into one file (`dist/zdub-learning-hub.html`) for publishing as a private claude.ai Artifact. On the published page:
  - **Get feedback** asks Claude live (the Artifact `sample` capability, billed to the viewer's own Claude usage).
  - Progress syncs across devices through the artifact's private per-user database (`db`, under `data/users/<id>/`). Docs: `settings`, `l_<lessonId>`, `t_<tab>__<tracker>`, `w_<tool>__<draft>`.
  - Outside Claude, **Get feedback** shows a ready-made prompt to copy into any Claude chat.
- My Bank → **Backup** copies all progress as text and restores it anywhere.

## Adding or editing content

All lesson content lives in `data/`, one file per topic. Each file calls `HUB.tab({...})` (lesson schema below). `90-reference.js` calls `HUB.reference(...)` and `91-review.js` calls `HUB.review([...])`.

- **Edit a lesson**: change its text in the data file. Keep its `id`, because progress is stored by id.
- **Add a lesson**: add an object to the topic's `lessons` array with a new id (e.g. `cw-31`). Never reuse an old id.
- **Add a topic**: create `data/14-something.js` and add a `<script src="data/14-something.js"></script>` line in `index.html` before `app.js`.
- **New mentor calls**: add lessons to the matching topics, tag them `Mentor`, set `date` to the call date, and name the study guide in `source`.

Lesson fields: `id, part, title, minutes, tags, date?, source[{doc, section, who}], alsoIn?, idea, keyPoints[], why, example{title?, before?, after?, body?}, table?{head, rows}, practice[{prompt, fields[], rubric?[], model?}], today{task, output?, minutes?, suggested?}, check[{q, a}]`.

Text fields accept light markup: a blank line starts a new paragraph, `- ` makes a bullet, `1. ` a numbered item, `**bold**`, `*italic*`, and `> ` a callout.

Tags: `Mentor`, `Book`, `Course`, `Playbook`, `Platform fact (re-check)` (Meta details change, so re-check them), `Disagreement` (both mentor positions shown side by side), `Alternate model (Jason)` (ideas carried over from a different business model).

## Source rules used to build it

Mentor material (ZDub Guides 00–08 Version2 and the 9 New Calls study guide) outranks the book-based Mastery Guide and Workbook, which outrank the research playbooks. For platform facts, the newest dated document wins (Andromeda Playbook, 10/30/26). Each idea that appears in several sources has one main lesson, with an "Also covered in" list. Claude-written parts of the 9 New Calls guide (its Action plan and its "What fits ZDub now" column) are labeled as suggestions, never as mentor advice.
