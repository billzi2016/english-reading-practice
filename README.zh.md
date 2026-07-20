# 英语阅读练习

这是一个 Astro v2 英语阅读练习网站，通过真实人物传记、技术介绍、历史文章帮助学习者提升阅读理解能力。文章中的难词会在正文内高亮，并直接显示中文解释。

英文说明见 [README.md](./README.md)。

网站地址：<https://billzi2016.github.io/english-reading-practice/>

## 项目结构

项目把内容数据、页面渲染、浏览器交互分开维护，减少重复代码：

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

`src/data/articles.ts` 是自动文章索引入口。它通过 `import.meta.glob` 读取 `src/data/articles/` 下的所有文章模块，并按 `00001_ada-lovelace.ts` 这种五位编号文件名前缀排序。动态路由 `src/pages/articles/[slug].astro` 会根据这些数据生成所有文章页。分类和难度展示规则放在 `src/config/`；路由和文章导航派生逻辑放在 `src/utils/`。

## 启动方法

所有命令都在项目根目录执行：

```sh
# 在项目根目录执行
pnpm install
pnpm dev
```

启动后 Astro 会在终端输出实际访问地址。上一次运行时使用的是 `http://localhost:4322`，因为默认端口被占用。

## Ollama 文章生成

安装 Python 客户端：

```sh
pip install ollama
```

列出当前所有文章题目：

```sh
python3 llm/ollama_list.py
```

指定题目生成 1 篇文章：

```sh
python3 llm/ollama_generate.py "The Apollo Guidance Computer"
```

让 Ollama 自动想题目并生成多篇文章：

```sh
python3 llm/ollama_generate.py 12
```

临时指定另一个本地 Ollama 模型：

```sh
OLLAMA_MODEL="gpt-oss:120b" python3 llm/ollama_generate.py 5
```

自动选题按每批 5 篇执行。生成脚本固定 `think="high"`；正文生成使用 `temperature=0.1`，自动选题使用 `temperature=0.7`。如果某批选题或某篇文章连续 3 次失败，脚本会非 0 退出，并保留已经成功生成的文件。

## 常用命令

| 命令 | 作用 |
| :-- | :-- |
| `pnpm install` | 安装依赖 |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 构建生产版本到 `./dist/` |
| `pnpm preview` | 本地预览生产构建 |
| `python3 llm/ollama_list.py` | 列出当前所有文章题目 |
| `python3 llm/ollama_generate.py "Topic"` | 用 Ollama 生成 1 篇指定题目的编号文章 |
| `python3 llm/ollama_generate.py 3` | 让 Ollama 自动想题目，并生成 3 篇连续编号文章 |

## 维护原则

- 每次改动尽量少碰文件：能改数据/配置/工具函数，就不要改页面或组件。
- 新增文章只在 `src/data/articles/` 下创建一个 `000NN_slug.ts` 文件。
- 不要为了新增文章修改 `src/data/articles.ts`；它是自动索引入口。
- 不要手写上一篇/下一篇链接；导航由文章数组顺序自动生成。
- 分类和难度文案/样式只改 `src/config/`；分类可以扩展，不需要改页面。
- 站内链接只通过 `src/utils/routes.ts` 生成。
- 不要因为文章内容变化去修改 PRD。
- 页面公共结构放在 `src/layouts/BaseLayout.astro`。
- 可复用 UI 放在 `src/components/`。
- 浏览器交互逻辑放在 `src/scripts/interactions.ts`。
- GPT-OSS 120B 文档标注的知识截止时间是 2024-06-01，事实类故事应只写该日期前可确认的信息。

## 内容说明

阅读文章为 AI 原创生成的学习文本，不是从现有文章复制、改写或搬运而来。
