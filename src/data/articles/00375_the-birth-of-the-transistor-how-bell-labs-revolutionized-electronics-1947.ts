import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of the Transistor: How Bell Labs Revolutionized Electronics (1947)》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00375 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00375',
  slug: 'the-birth-of-the-transistor-how-bell-labs-revolutionized-electronics-1947',
  title: 'The Birth of the Transistor: How Bell Labs Revolutionized Electronics (1947)',
  subtitle: 'From vacuum tubes to solid‑state switches, a pivotal moment in modern technology.',
  summary: 'Explore how three physicists at Bell Labs created the first transistor and set the stage for today’s digital world.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1947, a modest laboratory in Murray Hill, New Jersey buzzed with an unusual kind of excitement. The United States had just emerged from World War II, and the demand for reliable communication equipment was soaring. At Bell Labs, engineers were still wrestling with bulky <span class="vocab" data-cn="真空管">vacuum tubes</span>, which were fragile, power‑hungry, and prone to failure. The idea of replacing them with something smaller and more durable seemed almost utopian—until three young physicists dared to imagine a different future.`,
    `John Bardeen, Walter Brattain, and William Shockley formed an unlikely trio. Bardeen, a theoretical physicist, brought deep insight into quantum mechanics; Brattain, a skilled experimentalist, excelled at handling delicate glassware; and Shockley, the department head, possessed a bold vision for practical applications. Their collaboration was sparked by a simple question: could a solid piece of material conduct electricity in a controllable way without relying on heated filaments? This curiosity led them to investigate <span class="vocab" data-cn="半导体">semiconductors</span>, specifically germanium, which exhibited curious conductive properties at low temperatures.`,
    `After months of trial and error, the breakthrough arrived on December 23, 1947. Brattain placed a fine gold wire—only a few micrometers thick—against a polished germanium crystal, creating what is now known as a <span class="vocab" data-cn="点接触晶体管">point‑contact transistor</span>. When a small current was applied to the wire, it modulated a larger current flowing through the crystal, effectively amplifying the signal. The device was tiny, consumed far less power than any vacuum tube, and operated at room temperature. Bardeen’s theoretical calculations explained why the phenomenon occurred, while Shockley began sketching ideas for an even more robust design that would later become the <span class="vocab" data-cn="结型晶体管">junction transistor</span>.`,
    `The implications were immediate. For the first time, electronic circuits could be built with components that were not only smaller but also far more reliable. This opened doors for portable radios, early computers, and eventually the massive telecommunications infrastructure we rely on today. Bell Labs quickly filed a patent titled “Amplifying Semiconductor Device,” securing legal protection and signaling to the world that a new era of <span class="vocab" data-cn="固态电子">solid‑state electronics</span> had begun. The trio’s work earned them the 1956 Nobel Prize in Physics, cementing their place in scientific history.`,
    `While the point‑contact transistor was a marvel, it was not without flaws. Its performance varied with temperature and manufacturing tolerances, prompting Shockley to pursue a more stable architecture. In 1948 he introduced the concept of a <span class="vocab" data-cn="PN结">p‑n junction</span>, where two differently doped regions of semiconductor material meet, creating an internal electric field that could control charge flow with greater precision. This <span class="vocab" data-cn="结型晶体管">junction transistor</span> proved easier to mass‑produce and became the foundation for the explosive growth of the electronics industry in the 1950s and beyond.`,
    `The ripple effects extended far beyond Bell Labs’ walls. Companies like Texas Instruments, Fairchild Semiconductor, and later Intel began commercializing transistors, leading to the development of the <span class="vocab" data-cn="集成电路">integrated circuit</span> in the late 1950s—a single chip containing thousands of transistors. This miniaturization trajectory eventually gave rise to microprocessors, personal computers, and smartphones. All of these modern marvels trace their lineage back to that modest germanium crystal and the daring curiosity of three scientists who dared to replace a glowing tube with a silent solid block.`,
    `Today, when we hold a smartphone or power a data center, we are standing on the shoulders of Bardeen, Brattain, and Shockley. Their invention not only transformed electronics but also reshaped society, enabling instant communication across continents and fostering an information age that continues to accelerate. The transistor’s birth reminds us that profound technological revolutions often begin in humble labs, driven by a blend of theoretical insight, experimental perseverance, and the courage to question established norms.`,
  ],
  vocabulary: [
    { word: 'vacuum tubes', cn: '真空管' },
    { word: 'semiconductors', cn: '半导体' },
    { word: 'point-contact transistor', cn: '点接触晶体管' },
    { word: 'junction transistor', cn: '结型晶体管' },
    { word: 'solid-state electronics', cn: '固态电子' },
    { word: 'p-n junction', cn: 'PN结' },
    { word: 'integrated circuit', cn: '集成电路' },
  ],
};

export default article;
