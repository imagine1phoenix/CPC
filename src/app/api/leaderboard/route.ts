import { NextResponse } from "next/server";
import { leaderboardMembers } from "@/content/leaderboard";
import type { LeaderboardMember } from "@/content/leaderboard";

type CodeforcesUser = {
  handle: string;
  rank: string;
  rating: number;
  maxRating: number;
};

export async function GET() {
  if (leaderboardMembers.length === 0) {
    return NextResponse.json({ members: [], configured: false });
  }

  const handles = leaderboardMembers.map((member) => member.handle).join(";");
  const response = await fetch(`https://codeforces.com/api/user.info?handles=${encodeURIComponent(handles)}`, {
    next: { revalidate: 900 },
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Codeforces is unavailable right now." }, { status: 502 });
  }

  const payload = await response.json() as { status: string; result?: CodeforcesUser[] };
  if (payload.status !== "OK" || !payload.result) {
    return NextResponse.json({ error: "Codeforces did not return the member data." }, { status: 502 });
  }

  const members = payload.result
    .map((user) => {
      const member = leaderboardMembers.find((candidate) => candidate.handle.toLowerCase() === user.handle.toLowerCase());
      return member ? { ...member, ...user } : null;
    })
    .filter((member): member is LeaderboardMember & CodeforcesUser => member !== null)
    .sort((first, second) => second.rating - first.rating);

  return NextResponse.json({ members, configured: true });
}