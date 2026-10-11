# Progress

Use this file to track state for long-running tasks.

## Session workflow

- Read this file at the start of each session.
- Update it before each session ends.
- Keep entries concise and include relevant file paths or commands when useful.
- Move completed work to **Done** and record anything preventing progress under **Blocked**.

## Done

- Removed the thumbnail image from default article headers in `layouts/PostLayout.tsx`,
  keeping `/blog` list icons and SEO images. Lint and production build passed; verified
  the article on desktop/mobile in light/dark themes and the `/blog` icon in the browser.
- Created persistent progress tracking for long-running tasks.
- Restyled the `/blog` and `/tags/*` tag sidebar with a minimalist, luxury-inspired
  navigation treatment in `layouts/ListLayoutWithTags.tsx`.
- Verified the sidebar change with `npm run lint` and `npx tsc --noEmit`.

## In progress

- Nothing currently in progress.

## Blocked

- Nothing currently blocked. The production build passed in the latest session.
