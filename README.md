# Wish Fulfilled Journal

A morning journaling page. Write down everything on your mind about your goals and vision, and it builds today's practice from your own words:

- **Planner line**: one sentence to write in your planner, memorize and repeat all day
- **Affirmations**: present tense, written as if already done. Heart the lines that land, and future practices are modeled on them.
- **Autosuggestion**: short phrases to repeat, with when and how to repeat them
- **Three scenes of the wish fulfilled**: visualizations you live from the inside, each with a feeling and a physical anchor
- **Morning meditation** (~5 min) and **self-hypnosis** (~10 min): read aloud by your device's voice, with an optional theta binaural tone

The Today page starts fresh each morning. Every entry is kept in the **Vault**, which tracks your most-used words, your repeated phrases, your power words, the mental images you return to, and every desire you've named, sorted by area of life. The **Month** tab writes a report for any month and saves it.

## How it runs

`index.html` is published as a private claude.ai Artifact:
https://claude.ai/artifact/61YGUKTPutYyXooyPcTASS

- It uses Claude (the Artifact `sample` capability) to generate practices and monthly reports, billed to the viewer's own Claude usage.
- Entries are saved in the artifact's private database (`db`): `entries/{YYYY-MM-DD}` and `reports/{YYYY-MM}`. Only the owner can read or write them.
- If the database isn't reachable, entries fall back to the browser's localStorage, and the page offers to move them into the vault later.

The file is written for the Artifact publisher, which adds the `<!doctype>`/`<head>`/`<body>` wrapper at publish time.
