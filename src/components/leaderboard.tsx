"use client";

import { ExternalLink, LoaderCircle, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

type LeaderboardMember = {
  displayName: string;
  handle: string;
  rank?: string;
  rating?: number;
  maxRating?: number;
};

type LeaderboardState = {
  members: LeaderboardMember[];
  configured: boolean;
  error?: string;
};

async function requestLeaderboard(): Promise<LeaderboardState> {
  const response = await fetch("/api/leaderboard");
  const data = await response.json() as LeaderboardState;
  return response.ok ? data : { members: [], configured: true, error: data.error };
}

export function Leaderboard() {
  const [state, setState] = useState<LeaderboardState>({ members: [], configured: true });
  const [loading, setLoading] = useState(true);

  async function loadLeaderboard() {
    setLoading(true);
    try {
      setState(await requestLeaderboard());
    } catch {
      setState({ members: [], configured: true, error: "Could not reach the leaderboard." });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void requestLeaderboard().then(setState).catch(() => setState({ members: [], configured: true, error: "Could not reach the leaderboard." })).finally(() => setLoading(false));
  }, []);

  return <section className="leaderboard-section section-pad" aria-labelledby="leaderboard-title">
    <div className="section-label"><span>02</span><span>LIVE CODEFORCES SIGNAL</span></div>
    <div className="leaderboard-heading">
      <div><h2 id="leaderboard-title">Practice leaves<br /><em>a trace.</em></h2><p>Current ratings for the CPC core team, pulled from Codeforces every fifteen minutes.</p></div>
      <button className="leaderboard-refresh" type="button" onClick={() => void loadLeaderboard()} disabled={loading} aria-label="Refresh leaderboard"><RefreshCw size={16} className={loading ? "spin" : ""} /> Refresh</button>
    </div>
    <div className="leaderboard-table-wrap">
      {loading ? <p className="leaderboard-state"><LoaderCircle size={18} className="spin" /> Reading the latest ratings...</p> : state.error ? <p className="leaderboard-state leaderboard-error">{state.error}</p> : !state.configured ? <p className="leaderboard-state">Add the team&apos;s public handles in <code>src/content/leaderboard.ts</code> to bring this table live.</p> : state.members.length === 0 ? <p className="leaderboard-state">No matching Codeforces profiles were returned.</p> : <table><thead><tr><th scope="col">#</th><th scope="col">Member</th><th scope="col">Rank</th><th scope="col">Rating</th><th scope="col">Peak</th></tr></thead><tbody>{state.members.map((member, index) => <tr key={member.handle}><td>{String(index + 1).padStart(2, "0")}</td><td><a href={`https://codeforces.com/profile/${member.handle}`} target="_blank" rel="noreferrer"><strong>{member.displayName}</strong><span>@{member.handle} <ExternalLink size={13} /></span></a></td><td>{member.rank ?? "Unrated"}</td><td className="rating-value">{member.rating ?? "-"}</td><td>{member.maxRating ?? "-"}</td></tr>)}</tbody></table>}
    </div>
  </section>;
}