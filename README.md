# CPC Website

The public site for Jain University's Competitive Programming Club. It is a fast, public-first recruiting funnel for prospective members, current members, and university leadership.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
npm run lint
npm run build
```

## Registration setup

The `/join` page contains a terminal-style registration flow. To send submissions to Discord, copy `.env.example` to `.env.local` and set `DISCORD_WEBHOOK_URL` to the private webhook URL. The URL is only read server-side by `/api/apply`; never expose it with a `NEXT_PUBLIC_` variable.

The core-team audition gate uses a non-empty maximum-subarray edge case as a first signal check. Passing it reveals the monitored audition contact link; it is not an automated team acceptance decision.

## Where to edit content

- [src/content/site.ts](src/content/site.ts) contains the learning tracks and event listing.
- [src/content/leaderboard.ts](src/content/leaderboard.ts) contains the core team's public Codeforces handles used by the live leaderboard on `/team`.
- [src/app/page.tsx](src/app/page.tsx) contains the page structure and calls to action.
- [src/app/globals.css](src/app/globals.css) contains the visual system, responsive layout, and motion.
- [.github/copilot-instructions.md](.github/copilot-instructions.md) contains product and engineering rules for future contributors.

## Current v1 decisions

- Browsing is public; there is no login or member portal.
- Registration currently opens an email draft until the club chooses between Google Forms and a database-backed form.
- The leaderboard reads public Codeforces ratings through `/api/leaderboard` and caches them for fifteen minutes. Add authentic handles to `src/content/leaderboard.ts` before launch.
- Event dates, faculty details, and final club naming are placeholder content and should be confirmed before launch.

## Product direction

The visual language uses an editorial technical feel: ink, warm paper, lime, orange, and blue. Motion is purposeful and includes a moving signal ticker, hover lifts, and an entrance reveal. Reduced-motion preferences are supported.
