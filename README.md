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
│   ├── config/
│   ├── data/
│   │   └── articles/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   ├── types/
│   └── utils/
└── package.json
```

`src/data/articles.ts` is the automatic article registry. It uses `import.meta.glob` to load every article module in `src/data/articles/`, then sorts them by the five-digit filename prefix such as `00001_ada-lovelace.ts`. The dynamic route `src/pages/articles/[slug].astro` renders all article pages from that shared data. Category and difficulty display rules live in `src/config/`; route and article navigation helpers live in `src/utils/`.

## Commands

Run all commands from this project root:

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the production site into `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `python3 llm/ollama_list.py` | List existing article topics |
| `python3 llm/ollama_generate.py "Topic"` | Generate one numbered article with Ollama |
| `python3 llm/ollama_generate.py 3` | Generate 3 articles from Ollama-proposed topics |

## Local Development

```sh
# from the project root
pnpm install
pnpm dev
```

Astro prints the actual local URL after startup. In the latest run it used `http://localhost:4322` because another service was already using the default port.

## Ollama Article Generation

Install the Python client:

```sh
pip install ollama
```

List existing topics:

```sh
python3 llm/ollama_list.py
```

Generate one article from a specific topic:

```sh
python3 llm/ollama_generate.py "The Apollo Guidance Computer"
```

Generate multiple articles from Ollama-proposed topics:

```sh
python3 llm/ollama_generate.py 12
```

Use another local Ollama model:

```sh
OLLAMA_MODEL="gpt-oss:120b" python3 llm/ollama_generate.py 5
```

Automatic topic selection runs in batches of 5. The generator defaults to `think="medium"`; switch `THINK_LEVEL` to `high` in `llm/ollama_generate.py` for slower, more careful output. Article writing uses `temperature=0.1`, while topic selection uses `temperature=0.7`. If a topic batch or article fails 3 retries, the script exits non-zero and keeps already created files.

## Maintenance Notes

- Keep each change as small as possible: prefer data/config/utils changes over page or component edits.
- Add a new article by creating one file in `src/data/articles/` named `000NN_slug.ts`.
- Do not edit `src/data/articles.ts` when adding articles; it is an automatic registry.
- Do not hand-write previous/next article links; navigation is derived from article order.
- Keep category and difficulty labels/styles in `src/config/`; categories are extensible without editing pages.
- Keep site URL generation in `src/utils/routes.ts`.
- Do not update the PRD just because article content changes.
- Keep shared page structure in `src/layouts/BaseLayout.astro`.
- Keep reusable UI in `src/components/`.
- Keep browser-only behavior in `src/scripts/interactions.ts`.
- GPT-OSS 120B's documented knowledge cutoff is 2024-06-01, so generated factual stories should stay within information knowable before that date.
- Generated articles should avoid discriminatory, hateful, or demeaning language and handle sensitive topics with factual, respectful wording.
- Generated articles should be engaging and novel, preferably about uncommon real-world knowledge, with a clear story arc and concrete scenes.
- Vocabulary annotation should be practical, not symbolic: difficult words, technical terms, places, materials, and key phrases should include Chinese explanations inline.

## Content Notice

The reading articles are original AI-generated educational text. They are not copied, adapted, or rewritten from existing articles.
