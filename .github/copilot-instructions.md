# CPC Website Rules

## Product direction
- Build for three audiences: prospective members, current members, and university leadership.
- Keep the site fast, mobile-first, and credible enough for dean or principal review.
- Preserve the mission: teach people to code without AI. Do not frame this as anti-technology; frame it as building durable problem-solving skill.
- V1 stays public and simple: no accounts, payments, private dashboard, or custom contest hosting.

## Design language
- Use a distinctive editorial/technical visual system: deep ink, warm paper, electric lime, and signal orange.
- Prefer purposeful motion: reveal sections on scroll, subtle hover lift, ticker movement, and animated linework. Respect `prefers-reduced-motion`.
- Keep actions obvious and keyboard accessible. Use `lucide-react` icons inside icon buttons and pair unfamiliar icons with labels or tooltips.
- Do not add generic dashboard cards, purple gradients, oversized marketing filler, or decorative UI that does not support the recruiting funnel.
- Maintain stable responsive layouts. Check narrow mobile widths before considering a page complete.

## Content model
- Events and resources should remain easy to replace with JSON, Markdown, or CMS data later.
- Use honest placeholder content where leadership names, dates, registration URLs, or ratings are not final. Never invent official claims or personal details.
- Keep the leaderboard static until a live Codeforces integration is explicitly approved.

## Engineering
- Use Next.js App Router with TypeScript.
- Prefer small, composable components and semantic HTML.
- Run `npm run lint` and `npm run build` after meaningful UI changes.
- Do not add authentication or database infrastructure until the registration and ownership decisions are made.
