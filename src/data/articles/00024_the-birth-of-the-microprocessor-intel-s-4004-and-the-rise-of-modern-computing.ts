import type { Article } from '../../types/index.ts';

// This file defines the article content for "The Birth of the Microprocessor: Intel’s 4004 and the Rise of Modern Computing"
// The article is intended for intermediate English learners focusing on technology history.
const article: Article = {
  id: '00024',
  slug: 'the-birth-of-the-microprocessor-intel-s-4004-and-the-rise-of-modern-computing',
  title: 'The Birth of the Microprocessor: Intel’s 4004 and the Rise of Modern Computing',
  subtitle: 'How Intel\'s First Chip Sparked a Digital Revolution',
  summary: 'Explore how Intel\'s 4004 microprocessor launched the era of modern computing and transformed technology.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1970s, computers were still dominated by room‑size mainframes and a growing market for electronic calculators. Engineers dreamed of shrinking the brain of a computer—the central processing unit—down to a size that could fit on a single chip. This ambition was not merely academic; it promised cheaper, more reliable devices for businesses and consumers alike. Against this backdrop, Intel introduced the 4004 in November 1971, heralding the birth of the <span class="vocab" data-cn="微处理器">microprocessor</span> and setting a new direction for digital technology.`,
    `The story began with Busicom, a Japanese calculator manufacturer that approached Intel to design a family of custom chips. Intel’s engineering team, led by Ted Hoff and later joined by Federico Faggin, proposed an unconventional solution: instead of building separate arithmetic, control, and timing units, they would combine them into one silicon block. This concept—what we now call a <span class="vocab" data-cn="集成电路">integrated circuit</span> containing the entire CPU—was revolutionary. The collaboration forced Intel to rethink its design philosophy and ultimately resulted in the world’s first commercially available microprocessor.`,
    `The 4004 was a 4‑bit <span class="vocab" data-cn="微处理器">microprocessor</span> fabricated using PMOS technology. It housed roughly 2,300 <span class="vocab" data-cn="晶体管">transistor</span>s on a single <span class="vocab" data-cn="硅晶圆">silicon wafer</span>, a remarkable density for its era. Its <span class="vocab" data-cn="指令集">instruction set</span> comprised 46 operations, ranging from basic arithmetic to program control flow, and it could address up to 4 KB of memory through external modules. Although modest by today’s standards, the chip demonstrated that a complete CPU could be realized on one piece of silicon.`,
    `The manufacturing of the 4004 required a meticulous <span class="vocab" data-cn="制造工艺">fabrication process</span>. Intel employed a 10‑micron photolithography step, producing chips that measured just 12 mm². This level of miniaturization reduced component count dramatically: where earlier calculator designs needed dozens of discrete logic chips, the 4004 could replace them all with a single package. The success of this <span class="vocab" data-cn="集成电路">integrated circuit</span> proved that economies of scale and design integration were achievable, encouraging other semiconductor firms to pursue similar strategies.`,
    `The impact of the 4004 rippled through the emerging electronics industry. Its compact size enabled the creation of programmable calculators, early <span class="vocab" data-cn="嵌入式系统">embedded system</span>s, and even experimental computer terminals. More importantly, it shattered the prevailing belief that a CPU required multiple chips to function. Competitors quickly followed suit, releasing their own 8‑bit processors such as the Intel 8008 and Motorola’s 6800. These successors built on the architectural lessons of the 4004, eventually leading to the powerful microprocessors that powered personal computers in the 1980s.`,
    `Intel’s subsequent releases—most notably the 8080, 8086, and the later x86 family—trace their lineage directly back to the 4004’s design philosophy. The notion of integrating an entire instruction set architecture onto a single silicon die became a cornerstone of modern CPU development. As transistor counts continued to double roughly every two years—a trend famously described by <span class="vocab" data-cn="摩尔定律">Moore's law</span>—the original concepts pioneered in 1971 scaled up, giving rise to multi‑core processors that drive today’s smartphones and cloud servers. Yet the core idea remains unchanged: more computing power packed into less space.`,
    `Looking back, the Intel 4004 represents a pivotal moment when silicon technology transitioned from supporting peripheral logic to becoming the brain of electronic devices. Its introduction marked the beginning of an era where computers could be embedded in everyday objects, from watches to automobiles. For students of computing history, understanding the 4004’s technical breakthroughs and market impact offers valuable insight into how modern digital life was forged, one transistor at a time.`,
  ],
  vocabulary: [
    { word: 'microprocessor', cn: '微处理器' },
    { word: 'integrated circuit', cn: '集成电路' },
    { word: 'silicon wafer', cn: '硅晶圆' },
    { word: 'instruction set', cn: '指令集' },
    { word: 'fabrication process', cn: '制造工艺' },
    { word: 'transistor', cn: '晶体管' },
    { word: 'embedded system', cn: '嵌入式系统' },
    { word: "Moore's law", cn: '摩尔定律' },
  ],
};

export default article;
