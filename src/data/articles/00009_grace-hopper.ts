import type { Article } from '../../types/index.ts';

// 文件意图：维护《Grace Hopper》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00009 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00009',
    slug: 'grace-hopper',
    title: 'Grace Hopper',
    subtitle: 'The Programmer Who Wanted Computers to Understand Words',
    subtitle2: 'Born: December 9, 1906 · New York City, United States',
    summary: 'Grace Hopper helped turn programming from a specialist activity into a language people could use to describe real work.',
    category: 'biography',
    difficulty: 'intermediate',
    readingMinutes: 6,
    paragraphs: [
      `Grace Hopper lived through a period when computers changed from experimental machines into tools used by governments, businesses, and universities. She did not invent computing alone, and she did not create every idea associated with her name. What she did was equally important: she argued that programming should become more practical, more readable, and more useful to people who were not mathematicians. Her work helped shape the languages that made that change possible.`,
      `Hopper studied mathematics at Vassar College and later earned a doctorate from Yale University. During the Second World War, she joined the U.S. Naval Reserve and was assigned to the team working on the Harvard Mark I. The Mark I was enormous by modern standards. It filled a room, used mechanical and electrical parts, and performed calculations in sequence. Hopper became one of its programmers, learning how exact instructions had to be when a machine could not guess a human intention.`,
      `After the war, she worked with early computers including UNIVAC I. At the time, programming often meant writing instructions that were closely tied to the hardware. Many specialists believed that computers should only understand mathematical symbols. Hopper saw a different future. She thought that people could describe problems with more familiar words, then use another program to translate those instructions into machine operations.`,
      `That translating program is called a <span class="vocab" data-cn="编译器（把高级语言转换为机器可执行指令的程序）">compiler</span>. The idea received skepticism because computers were expensive and memory was scarce. Why use valuable resources to translate words when a skilled programmer could write direct instructions? Hopper’s answer was practical: direct instructions were hard to write, hard to check, and difficult to share. A more readable language could make programming faster and less dependent on a small group of experts.`,
      `Her work contributed to the development of <span class="vocab" data-cn="COBOL（一种面向商业数据处理的编程语言）">COBOL</span>, short for Common Business-Oriented Language. COBOL was designed for records, reports, payroll, and other business tasks. Its sentences looked unusually close to English compared with many programming languages. That style later became a target for jokes, but it reflected a serious goal: a program should communicate its purpose clearly enough for organizations to maintain it over time.`,
      `Hopper also understood that a language is useful only when different systems can use it consistently. She supported <span class="vocab" data-cn="标准化（建立统一规则或规格的过程）">standardization</span>, the difficult work of agreeing on common rules. Standards can feel less dramatic than a new invention, but they are what allow systems made by different teams to exchange data and survive for decades. Much of the world’s long-running business software depended on exactly this kind of shared agreement.`,
      `Stories about Hopper often mention a moth found in a relay of the Mark II computer. The moth was taped into a logbook, and the team recorded that they had “debugged” the machine. Hopper did not invent the word <span class="vocab" data-cn="调试（查找并修正程序或系统错误）">debugging</span>, but the story endured because it captures her attitude: computing was not mysterious magic. It was work that required observation, evidence, and the willingness to find the actual cause of a problem.`,
      `Later in her Navy career, Hopper rose to the rank of rear admiral and spoke widely about technology. Her legacy is not a single machine or a single line of code. It is the belief that computers should serve human work rather than force every human to think like a machine. That belief remains visible whenever programmers choose clarity, shared standards, and tools that make complex systems easier to understand.`,
    ],
    vocabulary: [
      { word: 'programmer', cn: '程序员' },
      { word: 'compiler', cn: '编译器' },
      { word: 'skepticism', cn: '怀疑态度' },
      { word: 'COBOL', cn: '通用商业语言' },
      { word: 'standardization', cn: '标准化' },
      { word: 'debugging', cn: '调试' },
      { word: 'legacy', cn: '遗产，持久影响' },
    ],
  };

export default article;
