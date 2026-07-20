# English Reading Practice

An Astro v2 reading-practice site for learning English through real biographies, technology explainers, and history articles. Difficult vocabulary is highlighted inline with Chinese translations.

中文说明见 [README.zh.md](./README.zh.md)。

Website: <https://billzi2016.github.io/english-reading-practice/>

## Project Structure

This project keeps content, rendering, and browser interactions separated so it stays easy to maintain:

```text
/
├── specs/
│   ├── PRD.v1.md
│   └── PRD.v2.md
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   └── types/
└── package.json
```

`src/data/articles.ts` is the single source of truth for article metadata and article body content. The dynamic route `src/pages/articles/[slug].astro` renders all article pages from that shared data.

## Commands

Run all commands from this project root:

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production site into `./dist/` |
| `pnpm preview` | Preview the production build locally |

## Local Development

```sh
# from the project root
pnpm install
pnpm dev
```

Astro prints the actual local URL after startup. In the latest run it used `http://localhost:4322` because another service was already using the default port.

## Maintenance Notes

- Add new articles only in `src/data/articles.ts`.
- Do not update the PRD just because article content changes.
- Keep shared page structure in `src/layouts/BaseLayout.astro`.
- Keep reusable UI in `src/components/`.
- Keep browser-only behavior in `src/scripts/interactions.ts`.
