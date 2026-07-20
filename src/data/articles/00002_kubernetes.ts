import type { Article } from '../../types/index.ts';

// 文件意图：维护《Kubernetes》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00002 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00002',
    slug: 'kubernetes',
    title: 'Kubernetes',
    subtitle: 'How Google Built the Backbone of the Cloud',
    summary: "How Google's internal tool became the backbone of modern cloud computing — and what a \"pod\" is.",
    category: 'technology',
    difficulty: 'advanced',
    readingMinutes: 6,
    tip: 'This article contains technical terms. The Chinese translations appear right after each highlighted word.',
    paragraphs: [
      `If you use the internet today — whether you're streaming a video, ordering food, or sending a message — there's a very good chance your request was handled by a server managed by <span class="vocab" data-cn="Kubernetes（开源容器编排平台）">Kubernetes</span>. Yet most people have never heard of it. Kubernetes is the invisible infrastructure beneath the modern web, and its story begins inside Google.`,
      `In the early 2000s, Google was growing at a speed that no one had seen before. They needed a way to run thousands of programs across hundreds of thousands of machines — simultaneously, reliably, and automatically. They built an internal system called <span class="vocab" data-cn="博格（谷歌内部集群管理系统）">Borg</span> to solve this problem. Borg was never released to the public, but it became the foundation for everything that followed.`,
      `The key idea behind Borg — and later Kubernetes — was <span class="vocab" data-cn="容器化（将应用程序及其依赖打包在独立环境中运行）">containerization</span>. Instead of running programs directly on a machine, you package each program into a self-contained unit called a <span class="vocab" data-cn="容器（包含应用程序及其所有依赖的独立运行单元）">container</span>. A container holds everything the program needs: its code, its libraries, its settings. You can run the same container on any machine and it will behave identically. This was revolutionary.`,
      `In 2013, a company called Docker made containerization easy for everyone. Suddenly, developers everywhere were packaging their applications into containers. But a new problem emerged: how do you manage thousands of containers across hundreds of machines? How do you restart a container if it crashes? How do you scale up when traffic spikes? This is the problem Kubernetes was built to solve.`,
      `Google released Kubernetes as an open-source project in 2014. The name comes from the Greek word for "helmsman" — the person who steers a ship. In Kubernetes, the ship is your <span class="vocab" data-cn="计算基础设施（服务器、网络等硬件和软件资源）">infrastructure</span>, and Kubernetes is the helmsman. The basic unit in Kubernetes is called a <span class="vocab" data-cn="Pod（Kubernetes中最小的部署单元，包含一个或多个容器）">pod</span> — a small group of containers that work together and share resources.`,
      `The genius of Kubernetes is its <span class="vocab" data-cn="声明式配置（描述期望状态而非具体操作步骤）">declarative</span> model. Instead of telling Kubernetes what to do step by step, you simply declare what you want: "I want five copies of this application running at all times." Kubernetes figures out how to make that happen — and keeps it that way. If a server crashes, Kubernetes automatically moves the containers to other servers. If traffic doubles, you can tell Kubernetes to run more copies with a single command.`,
      `Today, Kubernetes is managed by the Cloud Native Computing Foundation and has become the industry standard. Amazon, Microsoft, Google, and virtually every major cloud provider offer Kubernetes as a service. It is estimated that over 5 million developers use Kubernetes worldwide. The technology that Google built to manage its own chaos has become the foundation upon which the entire cloud economy runs.`,
      `Understanding Kubernetes also reveals something important about modern software: reliability is no longer about building better individual machines. It is about building systems that <span class="vocab" data-cn="优雅地降级（在部分失败时保持正常运行）">degrade gracefully</span> — that keep working even when individual parts fail. This is a fundamentally different way of thinking about computing, and Kubernetes made it practical for everyone.`,
    ],
    vocabulary: [
      { word: 'containerization', cn: '容器化' },
      { word: 'infrastructure', cn: '基础设施' },
      { word: 'pod', cn: 'Pod（最小部署单元）' },
      { word: 'declarative', cn: '声明式的' },
      { word: 'orchestration', cn: '编排，协调' },
      { word: 'scale', cn: '扩展，伸缩' },
      { word: 'open-source', cn: '开源的' },
    ],
  };

export default article;
