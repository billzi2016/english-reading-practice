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

## 最小触碰原则

- 新增文章：只改 `src/data/articles.ts`。
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

- 禁止在代码、README、PRD、配置中写本机绝对路径，例如 `/Users/...`。
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

- `src/data/articles.ts`：唯一文章数据源，只维护文章内容和元数据。
- `src/pages/articles/[slug].astro`：唯一文章详情模板。
- `src/pages/index.astro`：首页组合层，只消费数据、组件和配置。
- `src/components/`：可复用 UI 组件，不放业务数据。
- `src/config/`：分类、难度等稳定展示配置。
- `src/utils/`：路由、文章导航等纯函数派生逻辑。
- `src/scripts/interactions.ts`：主题、搜索、筛选、阅读进度等浏览器交互。
- `src/styles/global.css`：全站样式入口、字体、词汇高亮、动效和视觉缩放。
- `specs/PRD.v1.md`：旧静态版 PRD 归档，除非用户明确要求，否则不要改。
- `specs/PRD.v2.md`：当前 Astro v2 产品和架构基线，只有架构/产品范围变化时才改。

## 新增文章流程

1. 只修改 `src/data/articles.ts`。
2. 追加一个新的 `Article` 对象。
3. `slug` 必须唯一且稳定。
4. 不要维护 `prevSlug`、`nextSlug`、`prevTitle`、`nextTitle`。
5. 不要修改 PRD。
6. 运行 `pnpm build` 验证。

## 新增分类流程

1. 修改 `src/types/index.ts` 的 `Category` 联合类型。
2. 修改 `src/config/categories.ts` 补齐文案和样式。
3. 不要修改 `CategoryBadge.astro` 或首页按钮结构，除非配置能力本身不够。
4. 分类不限制为人物/技术/历史三类；需要新题材时按本流程扩展。
5. 运行 `pnpm build` 验证 TypeScript 是否提示遗漏。

## 新增难度流程

1. 修改 `src/types/index.ts` 的 `Difficulty` 联合类型。
2. 修改 `src/config/difficulties.ts` 补齐点数、颜色和文案。
3. 不要修改 `DifficultyDots.astro`，除非渲染规则本身改变。
4. 运行 `pnpm build` 验证。

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
