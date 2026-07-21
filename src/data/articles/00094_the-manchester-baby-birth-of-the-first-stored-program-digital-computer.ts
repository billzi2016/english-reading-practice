import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Manchester Baby: Birth of the First Stored‑Program Digital Computer》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00094 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00094',
  slug: 'the-manchester-baby-birth-of-the-first-stored-program-digital-computer',
  title: 'The Manchester Baby: Birth of the First Stored‑Program Digital Computer',
  subtitle: 'How a modest experimental machine sparked the modern computing era',
  summary: 'An engaging story about the design, first program, and lasting impact of the world’s first stored‑program computer.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1948, a modest laboratory in Manchester buzzed with anticipation. Researchers from the University of Manchester, led by Frederic C. Williams and Tom Kilburn, were about to test their <span class="vocab" data-cn="存储程序">stored-program</span> concept on a machine they called the Small‑Scale Experimental Machine, or “Baby”. Unlike earlier calculators that required rewiring for each new task, this device could hold both data and instructions in its memory, a revolutionary step toward flexible computing.`,
    `The Baby’s heart was a 32‑bit word architecture built from <span class="vocab" data-cn="真空管">vacuum tube</span> logic. Although only 32 words of memory were available—each stored on a specially designed <span class="vocab" data-cn="电子管存储器">Williams‑Kilburn tube</span>, a type of cathode‑ray storage—the machine could execute a sequence of operations automatically. The use of the Williams‑Kilburn tube meant that bits were represented as charged spots on a phosphor screen, allowing rapid read/write cycles compared with mechanical relays.`,
    `Programming the Baby required thinking in pure <span class="vocab" data-cn="二进制">binary</span>. Each instruction consisted of an operation code and an address field, both expressed as strings of 0s and 1s. The limited <span class="vocab" data-cn="指令集">instruction set</span> included commands such as “load”, “store”, “add” and “jump”. To demonstrate the machine’s capabilities, Kilburn wrote a simple program that calculated the highest factor of a given integer—a task that would later be known as finding the greatest divisor. The program ran for about 1.5 seconds at a <span class="vocab" data-cn="时钟频率">clock speed</span> of roughly 650 kHz, printing the result on a paper tape recorder.`,
    `On June 21, 1948, the Baby performed its first successful run. The tiny screen of the Williams‑Kilburn tube flickered as bits shifted in and out, and the paper tape hissed with the output “6”, confirming that the machine had correctly identified the highest factor of 15. This moment was witnessed by a small audience of engineers and academics, many of whom later became pioneers of the British computer industry. The demonstration proved that a digital computer could store its own instructions—a principle that underlies every modern processor.`,
    `Beyond the technical triumph, the Baby’s success had profound organizational consequences. It convinced the UK government to fund larger projects, leading directly to the development of the Manchester Mark I and later the Ferranti Mark 1—the world’s first commercially available computer. The design philosophies pioneered in the Baby—such as using a single memory for both data and code, and employing binary arithmetic—became standard practice worldwide, influencing machines from IBM’s early mainframes to today’s microprocessors.`,
    `Historians often highlight the Baby’s modest size to illustrate how groundbreaking ideas can emerge from humble resources. The machine occupied roughly the space of a small wardrobe, yet it embodied concepts that would scale to billions of transistors in contemporary devices. Its legacy also underscores the collaborative nature of early computing: mathematicians like Alan Turing provided theoretical foundations, while engineers such as Williams and Kilburn turned those ideas into hardware reality.`,
    `Today, the original Baby resides at the Museum of Science and Industry in Manchester, preserved behind glass as a reminder that the first steps toward programmable digital computers were taken by a handful of determined scientists. When visitors watch the restored tube glow, they see more than an antiquated curiosity—they glimpse the birth of the <span class="vocab" data-cn="存储程序">stored-program</span> paradigm that powers everything from smartphones to space probes. The Baby’s story continues to inspire new generations to imagine how today’s experimental prototypes might become tomorrow’s indispensable tools.`,
  ],
  vocabulary: [
    { word: 'stored-program', cn: '存储程序' },
    { word: 'vacuum tube', cn: '真空管' },
    { word: 'binary', cn: '二进制' },
    { word: 'accumulator', cn: '累加器' },
    { word: 'instruction set', cn: '指令集' },
    { word: 'Williams‑Kilburn tube', cn: '电子管存储器' },
    { word: 'clock speed', cn: '时钟频率' },
  ],
};

export default article;
