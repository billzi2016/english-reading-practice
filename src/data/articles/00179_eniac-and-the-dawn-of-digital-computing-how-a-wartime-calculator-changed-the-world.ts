import type { Article } from '../../types/index.ts';

// 文件意图：维护《ENIAC and the Dawn of Digital Computing: How a Wartime Calculator Changed the World》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00179 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00179',
  slug: 'eniac-and-the-dawn-of-digital-computing-how-a-wartime-calculator-changed-the-world',
  title: 'ENIAC and the Dawn of Digital Computing: How a Wartime Calculator Changed the World',
  subtitle: 'From wartime urgency to modern computers – the story behind the first electronic brain.',
  summary: 'Explore how ENIAC’s design, challenges, and legacy sparked the digital age.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1943, a team of engineers at the University of Pennsylvania received a secret contract from the U.S. Army’s Ballistic Research Laboratory. Their mission was to build a machine that could calculate artillery firing tables far faster than any human “human computer” could manage. The result was <span class="vocab" data-cn="电子数值积分与计算机">ENIAC</span>, an acronym for Electronic Numerical Integrator and Computer, which would become the world’s first general‑purpose electronic digital computer.`,
    `Unlike earlier mechanical calculators that relied on gears and levers, ENIAC used <span class="vocab" data-cn="真空管">vacuum tubes</span> as its fundamental switching elements. Over 17,000 of these glass tubes flickered to represent binary states—“on” or “off”—allowing the machine to perform arithmetic at speeds previously unimaginable. Each tube could amplify an electrical signal, and together they formed a massive, heat‑producing lattice that occupied roughly 1,800 square feet of floor space.`,
    `Programming ENIAC was a laborious process. Operators had to manually plug and unplug thousands of cables and set dozens of switches to configure the machine for each new problem. This “hard‑wired” approach meant that changing a calculation could take days. Nevertheless, when tasked with solving a system of linear equations for ballistic trajectories, ENIAC completed the work in minutes—a task that would have taken human computers weeks.`,
    `The limitations of hard‑wiring sparked a crucial insight among ENIAC’s creators: the need for a <span class="vocab" data-cn="存储程序">stored‑program</span> architecture. While ENIAC itself was not originally built with this concept, its designers—particularly John Mauchly and J. Presper Eckert—later incorporated it into their next project, the EDVAC. The stored‑program idea, first articulated by mathematician Alan Turing and later refined by John von Neumann, allowed instructions to be kept in memory alongside data, dramatically simplifying programming and paving the way for modern computers.`,
    `ENIAC’s impact extended far beyond its immediate wartime applications. After the war, it was used for scientific calculations ranging from weather prediction to atomic energy research. Its success demonstrated that electronic computation could handle complex, large‑scale problems reliably, encouraging governments and corporations worldwide to invest in similar machines. By the late 1950s, computers based on transistors—smaller, more reliable successors to vacuum tubes—began to dominate the market, but ENIAC’s legacy remained evident in every subsequent design.`,
    `One often overlooked aspect of ENIAC’s story is its reliance on <span class="vocab" data-cn="穿孔卡片">punch cards</span> for input and output. Operators fed decks of cards containing numerical data into the machine, and ENIAC would punch results onto new cards. This method linked the new electronic era to earlier mechanical tabulating machines, creating a bridge between old and new data‑processing technologies.`,
    `Today, when we swipe a smartphone or run a cloud service, we are standing on the shoulders of ENIAC’s pioneering engineers. The machine proved that large‑scale digital computation was not only possible but also transformative. Its blend of ambitious engineering, wartime urgency, and visionary thinking ignited the digital revolution—a chain reaction that continues to reshape societies worldwide.`,
  ],
  vocabulary: [
    { word: 'ENIAC', cn: '电子数值积分与计算机' },
    { word: 'vacuum tube', cn: '真空管' },
    { word: 'stored-program', cn: '存储程序' },
    { word: 'punch card', cn: '穿孔卡片' },
    { word: 'binary arithmetic', cn: '二进制算术' },
    { word: 'Turing machine', cn: '图灵机' },
  ],
};

export default article;
