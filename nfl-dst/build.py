#!/usr/bin/env python3
"""Build the NFL D/ST rankings page from nflverse data.

Downloads the season's play-by-play and schedule from nflverse, counts every
stat the league scores for a team defense/special teams, and writes
dist/index.html with the counts embedded. Fantasy points are computed in the
page itself, so the scoring settings can be changed there.

Usage: python3 build.py [season]
Standard library only.
"""
import csv
import datetime as dt
import gzip
import io
import json
import os
import sys
import urllib.request
from collections import defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(HERE, ".cache")
DIST = os.path.join(HERE, "dist")

PBP_URL = "https://github.com/nflverse/nflverse-data/releases/download/pbp/play_by_play_{season}.csv.gz"
GAMES_URL = "https://raw.githubusercontent.com/nflverse/nfldata/master/data/games.csv"
TEAMS_URL = "https://github.com/nflverse/nflverse-data/releases/download/teams/teams_colors_logos.csv"

STATS = ["sack", "int", "fr", "td", "sfty", "blk", "ret_yds", "ret_td", "fourth", "xpr"]
SCRIMMAGE = {"pass", "run", "qb_kneel", "qb_spike", "no_play"}


def fetch(url, name):
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, name)
    req = urllib.request.Request(url, headers={"User-Agent": "nfl-dst-rankings"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            data = r.read()
        with open(path, "wb") as f:
            f.write(data)
    except Exception as e:  # fall back to the last download
        if not os.path.exists(path):
            raise
        print(f"warning: {url} failed ({e}); using cached copy", file=sys.stderr)
        with open(path, "rb") as f:
            data = f.read()
    return data


def read_csv(data, gz=False):
    if gz:
        data = gzip.decompress(data)
    return list(csv.DictReader(io.StringIO(data.decode("utf-8"))))


def num(v, default=0.0):
    try:
        return float(v)
    except (TypeError, ValueError):
        return default


def one(v):
    return v in ("1", "1.0", "TRUE", "True")


def scoring_team(p):
    """Team whose score went up on this play, from the score columns."""
    pos_gain = num(p["posteam_score_post"]) - num(p["posteam_score"])
    def_gain = num(p["defteam_score_post"]) - num(p["defteam_score"])
    if def_gain > 0:
        return p["defteam"]
    if pos_gain > 0:
        return p["posteam"]
    return ""


def count_game(plays):
    """Return ({team: stat counts}, {team: points its offense gave away})."""
    st = defaultdict(lambda: {k: 0 for k in STATS})
    off_given = defaultdict(int)  # points the opponent scored off this team's offense
    pending_try = None  # (scoring team, team whose offense gave it up)

    for p in plays:
        pt, pos, de = p["play_type"], p["posteam"], p["defteam"]
        if not pos and not de:
            continue

        # The try after a pick-six / fumble-return TD also counts as offense-surrendered.
        if pending_try and (pt == "extra_point" or one(p["two_point_attempt"])):
            scorer, victim = pending_try
            if pos == scorer:
                if p["extra_point_result"] == "good":
                    off_given[victim] += 1
                elif p["two_point_conv_result"] == "success":
                    off_given[victim] += 2
            pending_try = None  # fall through: a returned try still counts below
        elif pending_try and pt not in ("", "no_play"):
            pending_try = None

        live = pt != "no_play"

        if live and one(p["sack"]) and de:
            st[de]["sack"] += 1
        if live and one(p["interception"]) and de:
            st[de]["int"] += 1

        if live:
            f1, r1 = p["fumbled_1_team"], p["fumble_recovery_1_team"]
            if r1 and f1 and r1 != f1:
                st[r1]["fr"] += 1
            f2, r2 = p["fumbled_2_team"], p["fumble_recovery_2_team"]
            if r2 and f2 and r2 != f2:
                st[r2]["fr"] += 1

        # Touchdowns scored by the team without the ball (or by either side on kicks)
        tdt = p["td_team"]
        if live and one(p["touchdown"]) and tdt:
            if pt == "kickoff":  # posteam is the receiving team on kickoffs
                st[tdt]["ret_td" if tdt == pos else "td"] += 1
            elif pt == "punt":  # posteam is the punting team
                if tdt == de:
                    st[tdt]["td" if one(p["punt_blocked"]) else "ret_td"] += 1
                elif tdt == pos:  # kicking team recovered a muff in the end zone
                    st[tdt]["td"] += 1
            elif tdt == de:  # pick-six, fumble return, blocked FG/XP return
                st[tdt]["td"] += 1
                if pt in SCRIMMAGE:
                    off_given[pos] += 6
                    pending_try = (tdt, pos)

        if one(p["safety"]):
            scorer = scoring_team(p) or de
            if scorer:
                st[scorer]["sfty"] += 1
                if pt in SCRIMMAGE and scorer != pos and pos:
                    off_given[pos] += 2

        if live and de and (one(p["punt_blocked"]) or p["field_goal_result"] == "blocked"
                            or p["extra_point_result"] == "blocked"):
            st[de]["blk"] += 1

        if live and pt in ("kickoff", "punt") and p["return_team"]:
            st[p["return_team"]]["ret_yds"] += int(num(p["return_yards"]))

        if (live and de and p["down"] in ("4", "4.0") and pt in ("pass", "run")
                and one(p["fourth_down_failed"])
                and not one(p["interception"]) and not one(p["fumble_lost"])):
            st[de]["fourth"] += 1

        if de and (one(p["defensive_two_point_conv"]) or one(p["defensive_extra_point_conv"])):
            st[de]["xpr"] += 1

    return st, off_given


def main():
    today = dt.date.today()
    season = int(sys.argv[1]) if len(sys.argv) > 1 else (today.year if today.month >= 3 else today.year - 1)

    games_rows = read_csv(fetch(GAMES_URL, "games.csv"))
    teams_rows = read_csv(fetch(TEAMS_URL, "teams.csv"))
    try:
        pbp = read_csv(fetch(PBP_URL.format(season=season), f"pbp_{season}.csv.gz"), gz=True)
    except Exception as e:
        print(f"warning: no play-by-play yet ({e})", file=sys.stderr)
        pbp = []

    sched = [g for g in games_rows if g["season"] == str(season) and g["game_type"] == "REG"]
    sched.sort(key=lambda g: (int(g["week"]), g["gameday"], g["gametime"], g["game_id"]))
    playing = {g["away_team"] for g in sched} | {g["home_team"] for g in sched}

    teams = {}
    for t in teams_rows:
        if t["team_abbr"] in playing:
            teams[t["team_abbr"]] = {
                "name": t["team_name"], "nick": t["team_nick"],
                "conf": t["team_conf"], "div": t["team_division"],
                "c1": t["team_color"], "c2": t["team_color2"],
            }

    by_game = defaultdict(list)
    for p in pbp:
        by_game[p["game_id"]].append(p)
    for plays in by_game.values():
        plays.sort(key=lambda p: num(p["order_sequence"], num(p["play_id"])))

    games, team_games = [], []
    for g in sched:
        final = g["away_score"] != "" and g["home_score"] != ""
        rec = {
            "id": g["game_id"], "wk": int(g["week"]), "day": g["gameday"], "time": g["gametime"],
            "away": g["away_team"], "home": g["home_team"],
            "as": int(g["away_score"]) if final else None,
            "hs": int(g["home_score"]) if final else None,
            "spread": num(g["spread_line"], None), "total": num(g["total_line"], None),
            "neutral": g["location"] == "Neutral",
        }
        games.append(rec)
        if not final:
            continue
        plays = by_game.get(g["game_id"])
        st, off_given = count_game(plays) if plays else ({}, {})
        for side, opp, pts_against in (("away", "home", rec["hs"]), ("home", "away", rec["as"])):
            t, o = rec[side], rec[opp]
            row = {"g": rec["id"], "wk": rec["wk"], "t": t, "opp": o, "home": side == "home",
                   "pf": rec["as"] if side == "away" else rec["hs"], "pa_raw": pts_against}
            if plays:
                row["st"] = {k: st[t][k] if t in st else 0 for k in STATS}
                # Yahoo doesn't charge the defense for points its own offense gave up
                row["st"]["pa"] = max(0, pts_against - off_given.get(t, 0))
                row["off_given"] = off_given.get(t, 0)
            else:
                row["st"] = None  # final score known, play-by-play not posted yet
                row["pa_only"] = max(0, pts_against)
            team_games.append(row)

    final_weeks = sorted({g["wk"] for g in games if g["as"] is not None})
    open_weeks = sorted({g["wk"] for g in games if g["as"] is None})
    pending = [r["g"] for r in team_games if r["st"] is None]

    data = {
        "season": season,
        "built": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "lastWeek": final_weeks[-1] if final_weeks else 0,
        "nextWeek": open_weeks[0] if open_weeks else None,
        "pendingPbp": sorted(set(pending)),
        "teams": teams, "games": games, "tg": team_games,
    }

    with open(os.path.join(HERE, "template.html"), encoding="utf-8") as f:
        html = f.read()
    blob = json.dumps(data, separators=(",", ":")).replace("</", "<\\/")
    html = html.replace("/*__DATA__*/null", blob)
    os.makedirs(DIST, exist_ok=True)
    out = os.path.join(DIST, "index.html")
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"season {season}: {len(final_weeks)} weeks final (through wk {data['lastWeek']}), "
          f"next wk {data['nextWeek']}, {len(team_games)} team-games, "
          f"{len(data['pendingPbp'])} games awaiting play-by-play -> {out}")


if __name__ == "__main__":
    main()
