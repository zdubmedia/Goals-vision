# D/ST Matchup Board

Ranks every NFL team defense/special teams with the league's Yahoo D/ST scoring, and helps pick a defense each week.

Live page (private claude.ai Artifact): https://claude.ai/artifact/DVjPtjnDcNR5C9WnW4PpPg

## Tabs

- **This week's picks**: every defense ranked by matchup score for the selected week, with the opponent's points allowed to defenses and the betting line's implied total. Mark defenses as **Taken** to hide rostered ones.
- **Season rankings**: total and per-game fantasy points, weekly bars, and each stat (as counts or as points).
- **Offenses to target**: what opposing defenses score against each team, broken down by stat.
- **Schedule outlook**: matchup scores for the next 3–8 weeks, colored soft (green) to tough (red).
- **Scoring & method**: the league values, editable in the page; changes re-score everything on that device.

Click any team for its game log and upcoming schedule.

## Scoring (league values)

Sack 1 · Interception 2 · Fumble recovery 2 · Touchdown 6 · Safety 2 · Block kick 2 · Return yards 1 pt per 10 · Kickoff/punt return TD 6 · 4th down stop 3 · Extra point returned 2 · Points allowed: 0 → 10, 1–6 → 7, 7–13 → 4, 14–20 → 1, 21–27 → 0, 28–34 → −1, 35+ → −4.

Points allowed excludes points the team's own offense gave up (pick-sixes, fumble-return TDs, safeties), as Yahoo does.

Matchup score = ½ × the defense's average points + ½ × the average points its opponent allows to defenses.

## Updating

`python3 build.py` downloads the season's play-by-play and schedule from nflverse, counts the stats per team-game, and writes `dist/index.html` with the data embedded. Standard library only.

A weekly routine runs it every Tuesday morning (ET) after Monday Night Football and republishes the artifact. If nflverse hasn't posted play-by-play for a finished game yet, the page counts only that game's points allowed and shows "pending stats"; the routine retries later that day.
