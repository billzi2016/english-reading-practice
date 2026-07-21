import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Forgotten Pioneers of ENIAC: Women Who Programmed the First Digital Computer》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00300 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00300',
  slug: 'the-forgotten-pioneers-of-eniac-women-who-programmed-the-first-digital-computer',
  title: 'The Forgotten Pioneers of ENIAC: Women Who Programmed the First Digital Computer',
  subtitle: 'How Six Female Mathematicians Turned a Room‑Full of Vacuum Tubes into a Working Machine',
  summary: 'A narrative about the women who programmed ENIAC and why their story was nearly lost.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the United States entered World War II, the U.S. Army commissioned a massive electronic calculator to compute artillery firing tables faster than any human could. The result was <span class="vocab" data-cn="电子数值积分计算机">ENIAC</span>—the Electronic Numerical Integrator and Computer—built at the Moore School of Electrical Engineering, University of Pennsylvania, and completed in 1945. While engineers like John Mauchly and J. Presper Eckert designed its hardware, they soon discovered that wiring the machine to solve real problems required a different kind of expertise.`,
    `Enter six young women: Kay McNulty, Betty Jennings (later Snyder), Marlyn Wescoff (later Wescoff‑Fleming), Ruth Lichterman, Frances Bilas, and Jean Bartik (born Gold). All held degrees in mathematics or engineering physics and had worked as “computers”—human calculators—on the war effort. Their task was to translate complex differential equations into a series of instructions that could be executed by ENIAC’s <span class="vocab" data-cn="插线板编程">plugboard programming</span> system, a painstaking process involving thousands of cables and switches.`,
    `The women began each programming session with a stack of punch cards containing the raw data. They first performed hand calculations to verify the results that ENIAC would later produce, then drafted a flowchart on large drafting tables. Using this blueprint, they manually set up the machine’s <span class="vocab" data-cn="算术运算单元">arithmetic unit</span>, routing signals through rows of <span class="vocab" data-cn="电子管">vacuum tubes</span> that acted as switches and amplifiers. Every addition, subtraction, multiplication, or division required a specific configuration of cables—a physical manifestation of what we now call code.`,
    `Because ENIAC pre‑dated the modern <span class="vocab" data-cn="冯·诺依曼体系结构">von Neumann architecture</span>, there was no stored program memory. The women had to rewire the machine for each new problem, a process that could take days. Their ingenuity lay in devising reusable sub‑routines and clever timing tricks, effectively creating the first library of software modules. In contemporary terms, they were <span class="vocab" data-cn="计算机科学先驱">pioneer programmers</span>, inventing concepts such as looping and conditional execution without any formal language to guide them.`,
    `Despite their achievements, the contributions of McNulty, Jennings, Wescoff, Lichterman, Bilas, and Bartik were largely omitted from early histories of computing. The 1946 press release highlighted only Mauchly and Eckert, and textbooks for decades presented ENIAC as a male‑only triumph. It was not until the late 1970s that researchers like Ruth Teitelbaum began to uncover archival memos showing the women’s names on programming logs. A turning point arrived with the 1996 documentary “The Computers,” which featured interviews with the surviving programmers and sparked renewed scholarly interest.`,
    `Today, museums such as the Smithsonian’s National Museum of American History display original ENIAC panels alongside photographs of its female programmers. Their story serves as a reminder that programming is not merely about writing symbols on a screen but about logical thinking, perseverance, and collaboration. By recognizing these women, we also broaden our understanding of who can be a <span class="vocab" data-cn="计算机科学先驱">pioneer</span> in technology, inspiring future generations to look beyond traditional narratives.`,
    `The legacy of the ENIAC Six continues to influence modern computing culture. Concepts they invented—modular design, debugging through systematic testing, and documentation of code flow—are now standard practice in software engineering. Moreover, their experience underscores an important lesson: groundbreaking technology often depends on diverse minds working together, even when history tries to forget them.`,
  ],
  vocabulary: [
    { word: 'ENIAC', cn: '电子数值积分计算机' },
    { word: 'plugboard programming', cn: '插线板编程' },
    { word: 'von Neumann architecture', cn: '冯·诺依曼体系结构' },
    { word: 'pioneer programmer', cn: '计算机科学先驱' },
    { word: 'arithmetic unit', cn: '算术运算单元' },
    { word: 'vacuum tube', cn: '电子管' },
  ],
};

export default article;
