# Progress

Use this file to track state for long-running tasks.

## Session workflow

- Read this file at the start of each session.
- Update it before each session ends.
- Keep entries concise and include relevant file paths or commands when useful.
- Move completed work to **Done** and record anything preventing progress under **Blocked**.

## Done

- Created persistent progress tracking for long-running tasks.
- Restyled the `/blog` and `/tags/*` tag sidebar with a minimalist, luxury-inspired
  navigation treatment in `layouts/ListLayoutWithTags.tsx`.
- Verified the sidebar change with `npm run lint` and `npx tsc --noEmit`.

## In progress

- Nothing currently in progress.

## Blocked

- `npm run build` cannot finish in the sandbox because `next/font` cannot reach
  `fonts.googleapis.com` to download the existing Space Grotesk font.
