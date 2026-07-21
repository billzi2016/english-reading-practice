import type { Article } from '../../types/index.ts';

// 文件意图：维护《Jacquard's Loom: The Mechanical Thread That Wove the Fabric of Modern Computing》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00387 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00387',
  slug: 'jacquard-s-loom-the-mechanical-thread-that-wove-the-fabric-of-modern-computing',
  title: "Jacquard's Loom: The Mechanical Thread That Wove the Fabric of Modern Computing",
  subtitle: 'How a 19th‑century textile machine inspired programmable computers.',
  summary: 'Explore the story of Joseph Marie Jacquard’s loom, its punched‑card system, and the lasting impact on computing architecture.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In 1804, French weaver Joseph Marie <span class="vocab" data-cn="雅卡尔">Jacquard</span> unveiled a revolutionary <span class="vocab" data-cn="织机">loom</span> that could automatically produce intricate patterns. Instead of manually lifting each warp thread, his machine read a sequence of <span class="vocab" data-cn="穿孔卡片">punched cards</span>, each row encoding which threads to raise. This simple yet powerful idea turned the loom into an early example of a <span class="vocab" data-cn="可编程机器">programmable</span> device, dramatically increasing productivity in textile factories across Europe.`,
    `The punched‑card system worked much like a binary code: a hole represented “on” (lift the thread) and its absence meant “off”. By arranging cards in different orders, operators could change designs without rebuilding the hardware. This modularity caught the attention of inventors beyond the weaving trade, because it demonstrated that a single machine could execute a series of instructions stored externally—a concept at the heart of modern computing.`,
    `British mathematician <span class="vocab" data-cn="查尔斯·巴贝奇">Charles Babbage</span> visited a Paris exhibition in 1822 and saw Jacquard’s loom in action. Inspired, he incorporated punched‑card control into his designs for the <span class="vocab" data-cn="分析机">Analytical Engine</span>, envisioning a mechanical computer that could perform any arithmetic operation based on a program of cards. Although Babbage never completed a working engine, his notes foreshadowed key components such as a central processing unit (the “mill”) and memory (“store”).`,
    `Across the Atlantic, American inventor <span class="vocab" data-cn="霍尔特·赫斯">Holt H. Hussey</span> adapted Jacquard’s principle for early data‑processing machines in the late 19th century. By the time Herman Hollerith built his tabulating machine for the 1890 U.S. Census, punched cards had become a standard medium for recording and sorting information. Hollerith’s company eventually evolved into IBM, which would dominate the computer industry for decades, still using card‑based input well into the mid‑20th century.`,
    `The legacy of the loom extends to software engineering as well. The notion of separating “data” (the pattern on a card) from “control logic” (how the machine interprets it) mirrors today’s distinction between code and configuration files. Moreover, the physical layout of punched cards—rows and columns forming a grid—prefigured the binary matrices used in modern memory architecture, where each bit is either 0 or 1, much like a hole or its absence.`,
    `In contemporary terms, Jacquard’s invention can be seen as an early <span class="vocab" data-cn="自动化">automation</span> system. It reduced human labor not by replacing workers entirely but by augmenting them with precise, repeatable instructions. This philosophy underlies today’s robotics and CNC (computer‑numerical‑control) machines, where a digital program directs mechanical motion to fabricate complex parts—essentially a 21st‑century loom weaving metal or plastic instead of cloth.`,
    `Finally, the cultural impact of the Jacquard loom is evident in language itself. The phrase “to weave a pattern” now carries metaphorical weight in computer science, describing how algorithms interlace data streams. By turning textile art into a model for <span class="vocab" data-cn="可编程计算">programmable computation</span>, Jacquard helped stitch together the disparate threads of engineering, mathematics, and industry that form today’s digital world.`,
  ],
  vocabulary: [
    { word: 'Jacquard', cn: '雅卡尔（约瑟夫·玛丽·雅卡尔）' },
    { word: 'loom', cn: '织机' },
    { word: 'punched card', cn: '穿孔卡片' },
    { word: 'binary', cn: '二进制' },
    { word: 'Analytical Engine', cn: '分析机（巴贝奇的机械计算机概念）' },
    { word: 'programmable', cn: '可编程的' },
    { word: 'automation', cn: '自动化' },
    { word: 'programmable computation', cn: '可编程计算' },
  ],
};

export default article;
