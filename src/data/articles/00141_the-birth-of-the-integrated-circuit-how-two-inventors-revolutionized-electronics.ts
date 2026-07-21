import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of the Integrated Circuit: How Two Inventors Revolutionized Electronics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00141 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00141',
  slug: 'the-birth-of-the-integrated-circuit-how-two-inventors-revolutionized-electronics',
  title: 'The Birth of the Integrated Circuit',
  subtitle: 'How Jack Kilby and Robert Noyce Turned a Lab Puzzle into Modern Electronics',
  summary: 'A narrative of the parallel breakthroughs that created the <span class="vocab" data-cn="集成电路">integrated circuit</span> and reshaped every electronic device.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1958, a young engineer named <span class="vocab" data-cn="杰克·基尔比">Jack Kilby</span> was hunched over a cluttered bench at Texas Instruments in Dallas. The problem he faced seemed simple: how to replace a bulky assembly of discrete components with a single, compact unit that could still perform the same functions. At that time, every radio, calculator, and early computer relied on rows of <span class="vocab" data-cn="晶体管">transistor</span>s, resistors, and capacitors wired together by hand—a process that was both error‑prone and costly.`,
    `Kilby’s insight came from an unlikely source: the world of <span class="vocab" data-cn="半导体">semiconductor</span> physics. He realized that if a single piece of semiconductor material could host multiple active regions, each acting as a separate component, the entire circuit could be fabricated as one solid block. In September 1958 he demonstrated a tiny slab of germanium containing a resistor, a capacitor, and a transistor—all connected without any external wiring. This was the first practical example of a <span class="vocab" data-cn="单片的">monolithic</span> circuit, later called the integrated circuit.`,
    `Half a world away in California’s Silicon Valley, another visionary was wrestling with the same challenge. Robert Noyce, co‑founder of Fairchild Semiconductor, had been improving the reliability of silicon devices using the newly invented <span class="vocab" data-cn="平面工艺">planar process</span>. This method involved growing a thin oxide layer on a silicon surface and then etching patterns with <span class="vocab" data-cn="光刻技术">photolithography</span>. Noyce saw that the planar process could be extended to interconnect multiple transistors directly on a single <span class="vocab" data-cn="硅片">silicon wafer</span>, eliminating the fragile wire bonds that plagued earlier designs.`,
    `In early 1959, Noyce filed a patent for an integrated circuit that used the planar process to create both the active devices and the interconnecting metal lines in one continuous manufacturing step. His design was more scalable than Kilby’s germanium prototype because it could be mass‑produced on silicon—a material with superior electrical properties and abundant supply. While Kilby had proved the concept, Noyce provided the practical pathway that turned a laboratory curiosity into an industrial reality.`,
    `The two inventions did not immediately merge; instead, they sparked a fierce but friendly competition between Texas Instruments and Fairchild. Companies rushed to improve yield, reduce size, and lower cost. By the early 1960s, the first commercial integrated circuits appeared in military guidance systems and simple calculators. The breakthrough that mattered most was the realization that thousands of transistors could coexist on a single chip, paving the way for the <span class="vocab" data-cn="金属氧化物半导体场效应晶体管">MOSFET</span> era in the late 1960s—a device that would dominate digital logic for decades to come.`,
    `The ripple effects of Kilby’s and Noyce’s work are still felt today. Modern smartphones contain billions of transistors on chips no larger than a fingernail, enabling functions that were unimaginable in the 1950s. The integrated circuit also democratized technology: as production costs fell, computers moved from room‑size mainframes to personal desktops, and eventually into every pocket. In recognition of their contributions, Kilby received the Nobel Prize in Physics in 2000, while Noyce was posthumously honored with the National Medal of Technology.`,
    `Looking back, the story of the integrated circuit is a reminder that breakthroughs often arise from parallel lines of thought converging on a common problem. Kilby’s daring experiment and Noyce’s clever use of existing manufacturing techniques together forged a new paradigm—one where entire systems could be built layer by layer on a single piece of silicon. This paradigm continues to evolve, driving innovations such as three‑dimensional stacking and quantum dot processors, but the core idea remains unchanged: integrate more function into less space, and the world will keep getting smaller, faster, and more connected.`
  ],
  vocabulary: [
    { word: 'integrated circuit', cn: '集成电路' },
    { word: 'semiconductor', cn: '半导体' },
    { word: 'transistor', cn: '晶体管' },
    { word: 'monolithic', cn: '单片的' },
    { word: 'photolithography', cn: '光刻技术' },
    { word: 'planar process', cn: '平面工艺' },
    { word: 'silicon wafer', cn: '硅片' },
    { word: 'MOSFET', cn: '金属氧化物半导体场效应晶体管' }
  ],
};

export default article;
