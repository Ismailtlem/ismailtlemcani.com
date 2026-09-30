# Repository Guidelines

## About This Project

This is a personal Next.js blog based on the
[Tailwind Next.js Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog). It uses
TypeScript, Tailwind CSS, Contentlayer, and MDX.

## Project Structure

- `app/`: Next.js pages, routes, and site metadata.
- `components/`: reusable React components.
- `layouts/`: layouts for posts, lists, authors, and the resume.
- `data/blog/`: blog posts written as `.mdx` files.
- `data/`: site settings, navigation, authors, projects, and resume content.
- `public/static/images/`: images used by the site and blog posts.
- `css/`: global Tailwind and code-highlighting styles.

Name new blog files with lowercase kebab-case, for example
`data/blog/my-new-article.mdx`. Follow the front matter used by existing posts, including
`title`, `date`, `tags`, `draft`, `summary`, and `images`.

## Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start the local site at `http://localhost:3000`.
- `npm run lint`: run ESLint and automatically fix supported issues.
- `npm run build`: create a production build and generate RSS/search data.
- `npm run serve`: serve the production build locally.

Run `npm run lint` and `npm run build` before submitting changes.

## Coding Style

Follow the style of nearby files. Use TypeScript for React code, PascalCase for component files,
camelCase for variables and functions, and the existing `@/` import aliases where useful.

Formatting is handled by Prettier: two-space indentation, single quotes, semicolons, a
100-character line width, and trailing commas where supported. Keep Tailwind classes consistent
with existing components.

## Checks and Contributions

There is no automated test suite. Verify changes with linting, a production build, and a quick
browser check of affected pages. For visual changes, check mobile and desktop layouts as well as
light and dark themes.

Use short, clear commit messages such as `add kubernetes article` or `fix post image`. Pull
requests should briefly explain the change and include screenshots when the UI changes.
