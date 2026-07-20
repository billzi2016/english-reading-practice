# AI 维护规则

本文件是本项目的强约束。后续任何 AI/Agent 修改本项目时，必须先读本文件并 100% 执行。不要绕过，不要“顺手优化”，不要自行发明新结构。

## 项目是什么

- 这是一个个人英语阅读练习网站，不是博客、新闻站、营销页或课程平台。
- 核心目标：用真实世界主题的英文短文帮助学习者练阅读，同时给重点词汇提供中文解释。
- 文章应面向有一定英语基础的学习者，难度以 intermediate / advanced 为主。
- 每篇文章建议 500-800 英文词，正文应适合精读，不要写成碎片化要点列表。
- 文章主题优先包括：人物传记、技术介绍、历史故事、科学发现、商业社会、文化心理、自然健康、教育、计算机、AI、编程、航天、工程等。
- 文章必须是 AI 原创生成的学习文本，不要复制、改写、搬运现有文章。
- 文章必须避免版权问题：不得使用受版权保护文章的原文、段落结构、表达方式或近似改写。
- 涉及真实人物、技术、历史时，应写成学习性介绍，禁止编造真实历史事件、人物经历、日期、奖项、机构、论文或技术事实。
- 对事实不确定时，不要硬写；必须查证、换成虚构主题，或明确请用户确认。
- 重点词汇用 `<span class="vocab" data-cn="中文解释">英文词</span>` 标注。
- 不要为了新增文章去改 PRD；PRD 只记录产品和架构基线。

## 项目边界

- 项目根目录就是当前目录，不允许再新增任何外层包裹目录、旧静态内容目录或重复源码目录。
- 本项目是 Astro + TypeScript + Tailwind CSS 项目，使用 `pnpm`。
- 生产站点部署到 GitHub Pages：`https://billzi2016.github.io/english-reading-practice/`。
- GitHub Pages 是项目子路径部署，站内链接必须兼容 `/english-reading-practice/`。
- 每次维护必须优先减少触碰面：能只改 1 个文件就不要改 2 个文件，能改数据/配置就不要改页面/组件。
- 新增文章优先使用 `llm/` 下的脚本自动生成，后续 AI 不要手工复制旧文章模板。

## 最小触碰原则

- 新增文章：只新增一个 `src/data/articles/000NN_slug.ts` 文件。
- 新增分类：只改 `src/types/index.ts` 和 `src/config/categories.ts`；不要改首页或徽章组件。
- 新增难度：只改 `src/types/index.ts` 和 `src/config/difficulties.ts`。
- 改站内链接规则：只改 `src/utils/routes.ts`。
- 改上一篇/下一篇规则：只改 `src/utils/articles.ts`。
- 改主题按钮外观：只改 `src/components/ThemeToggle.astro`。
- 改主题交互：只改 `src/scripts/interactions.ts`。
- 改词汇高亮样式：只改 `src/styles/global.css`。
- 改产品/架构说明：只改 `specs/PRD.v2.md`，不要顺手改文章数据。
- 如果一个需求需要改超过 3 个源码文件，必须先确认是否缺少公共配置、工具函数或组件抽象。

## 绝对禁止

- 禁止在代码、README、PRD、配置中写本机用户目录绝对路径。
- 禁止手写 `/articles/...`、`/` 这类站内根路径链接；必须使用 `src/utils/routes.ts` 的 `sitePath()`。
- 禁止新增每篇文章独立 HTML 文件；所有文章页必须走 `src/pages/articles/[slug].astro`。
- 禁止在 `src/data/articles.ts` 手写上一篇/下一篇字段；导航由 `src/utils/articles.ts` 自动派生。
- 禁止因为新增、删除、调整文章而修改 PRD；PRD 只记录产品和架构基线。
- 禁止复制、改写、搬运任何现有文章；新增正文必须重新原创生成，避免版权风险。
- 禁止编造真实历史事件或真实人物经历；事实类内容不确定时必须先查证或避开。
- 禁止在页面或组件里重复写分类/难度映射；分类改 `src/config/categories.ts`，难度改 `src/config/difficulties.ts`。
- 禁止把主题按钮 DOM 复制到多个页面；必须使用 `src/components/ThemeToggle.astro`。
- 禁止把浏览器交互逻辑写散到 `.astro` 页面里；统一放 `src/scripts/interactions.ts`。
- 禁止为了小需求大面积改文件；后续 AI 必须先找最小单点入口。
- 禁止提交 `dist/`、`.astro/`、`node_modules/`、`.DS_Store`。
- 禁止无用户确认执行破坏性命令或回滚用户修改。

## 必须遵守的目录职责

- `src/data/articles.ts`：自动文章索引入口，只负责汇总文章模块，禁止手写文章内容或 import 清单。
- `src/data/articles/`：每篇文章一个文件，文件名必须是 `000NN_slug.ts`，五位编号负责显示顺序。
- `src/pages/articles/[slug].astro`：唯一文章详情模板。
- `src/pages/index.astro`：首页组合层，只消费数据、组件和配置。
- `src/components/`：可复用 UI 组件，不放业务数据。
- `src/config/`：分类、难度等稳定展示配置。
- `src/utils/`：路由、文章导航等纯函数派生逻辑。
- `src/scripts/interactions.ts`：主题、搜索、筛选、阅读进度等浏览器交互。
- `src/styles/global.css`：全站样式入口、字体、词汇高亮、动效和视觉缩放。
- `specs/PRD.v1.md`：旧静态版 PRD 归档，除非用户明确要求，否则不要改。
- `specs/PRD.v2.md`：当前 Astro v2 产品和架构基线，只有架构/产品范围变化时才改。
- `llm/ollama_article_utils.py`：Ollama 文章脚本共享工具，维护编号、slug、扫描和校验规则。
- `llm/ollama_list.py`：只读列出现有文章题目，新增文章前必须先运行。
- `llm/ollama_generate.py`：用 Ollama GPT-OSS 120B 生成一篇或多篇编号文章，写入前必须通过内置校验。

## 新增文章流程

- 先运行 `python3 llm/ollama_list.py`，确认现有题目，避免重复。
- 新增 1 篇指定题目时，运行 `python3 llm/ollama_generate.py "Topic"`，让脚本自动生成下一个 `src/data/articles/000NN_slug.ts`。
- 新增多篇时，运行 `python3 llm/ollama_generate.py 3` 或 `python3 llm/ollama_generate.py --count 3`；脚本会先让模型生成不重复题目，再逐篇自动加连续五位编号。
- 自动选题会把现有标题传给模型，并用 slug 做硬性去重；语义相近但标题不同的重复，生成后仍要人工快速扫一眼。
- 生成脚本固定使用 Ollama Python 库、GPT-OSS 120B、`think="high"`、`temperature=0.1`；除非用户明确要求，不要改这些默认值。
- GPT-OSS 120B 的知识截止时间按文档写死为 `2024-06-01`；事实类选题只写该日期前可确认的信息。
- 如果必须手工新增，只新增一个 `src/data/articles/000NN_slug.ts` 文件，文件名必须使用连续五位编号加稳定 slug，例如 `00011_new-topic.ts`。
- 手工文件内必须 `import type { Article } from '../../types/index.ts';`，定义 `const article: Article = {...}`，并 `export default article;`。
- `id` 必须和文件名前缀一致，统一使用五位编号，例如 `00011`；`slug` 必须唯一且稳定。
- 不要修改 `src/data/articles.ts`，它会自动读取文章文件。
- 不要写 `prevSlug`、`nextSlug`、`prevTitle`、`nextTitle`；不要修改 PRD。
- 修改后运行 `pnpm build`。

## 新增分类流程

- 只修改 `src/types/index.ts` 和 `src/config/categories.ts`。
- 在 `Category` 联合类型中新增分类 key。
- 在 `CATEGORY_CONFIG` 中补齐同名配置。
- 不要修改 `CategoryBadge.astro`。
- 不要修改 `src/pages/index.astro` 的筛选按钮结构。
- 修改后运行 `pnpm build`。

## 新增难度流程

- 只修改 `src/types/index.ts` 和 `src/config/difficulties.ts`。
- 在 `Difficulty` 联合类型中新增难度 key。
- 在 `DIFFICULTY_CONFIG` 中补齐同名配置。
- 不要修改 `DifficultyDots.astro`。
- 修改后运行 `pnpm build`。

## 主题规则

- 首屏主题防闪逻辑在 `src/layouts/BaseLayout.astro` 的 head 内同步执行。
- 主题按钮只由 `src/components/ThemeToggle.astro` 渲染。
- 点击交互只由 `src/scripts/interactions.ts` 维护。
- Tailwind v4 的 dark variant 在 `src/styles/global.css` 中声明，禁止删除。

## 提交和部署

- commit 信息必须中文、清晰、不过长，不超过 10 行。
- commit 要符合 Linus 风格：标题说明本次变更意图，正文说明为什么改、改了什么、影响范围。
- commit 标题不要写 `update`、`fix`、`change` 这类空话；必须具体到行为和对象。
- commit 正文可以用 2-4 行短句，不写流水账，不超过 10 行总长度。
- 不要把无关改动塞进同一个 commit；一个 commit 只表达一个清晰主题。
- push 到 `main` 会触发 GitHub Pages 部署。
- push 前必须至少运行 `pnpm build`，除非用户明确禁止。

## 开发服务器

启动开发服务器使用：

```sh
pnpm dev
```

如果端口被占用，使用 Astro 输出的实际地址。不要把本机绝对路径写入文档。

## 最终验证

- 每次修改后必须用 `pnpm` 验证，确保写法正确。
- 至少运行 `pnpm build`，确认 Astro、TypeScript、Tailwind 和 GitHub Pages base path 都能正常构建。
- 如果改了依赖或 lockfile，先运行 `pnpm install --frozen-lockfile` 检查依赖一致性。
- 构建失败时禁止提交；必须先修到 `pnpm build` 通过。
- 最终回复必须明确说明是否运行了 `pnpm build` 以及结果。
