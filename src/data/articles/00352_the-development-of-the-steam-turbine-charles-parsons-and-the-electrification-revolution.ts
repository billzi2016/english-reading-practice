import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Development of the Steam Turbine: Charles Parsons and the Electrification Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00352 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00352',
  slug: 'the-development-of-the-steam-turbine-charles-parsons-and-the-electrification-revolution',
  title: 'The Development of the Steam Turbine: Charles Parsons and the Electrification Revolution',
  subtitle: 'How a single invention reshaped power generation in the late 19th century',
  summary: 'Explore Charles Parsons\' breakthrough with the steam turbine and its pivotal role in the spread of electric power.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `At the dawn of the industrial age, factories still relied on slow‑moving reciprocating engines that turned massive beams of iron. These machines converted steam pressure into back‑and‑forth motion, a process riddled with vibration and limited speed. Engineers longed for a smoother way to harness thermal energy, especially as cities began demanding more reliable lighting and transport power.`,
    `In 1884, a young British engineer named <span class="vocab" data-cn="查尔斯·帕森斯">Charles Parsons</span> unveiled his prototype of the <span class="vocab" data-cn="蒸汽涡轮机">steam turbine</span>. Unlike its piston‑based predecessors, Parsons’ design used a series of rotating blades that were struck by high‑velocity steam, causing continuous rotary motion. The key insight was to exploit <span class="vocab" data-cn="离心力">centrifugal force</span> to keep the blades stable while extracting energy from the expanding gases.`,
    `Parsons’ turbine operated on what engineers call an <span class="vocab" data-cn="冲击喷嘴">impulse nozzle</span> principle: steam was first accelerated through a narrow passage, then directed onto the blade edges. The sudden change in momentum transferred kinetic energy to the rotor, turning it at several thousand revolutions per minute—far faster than any piston engine of the time. This high speed allowed the turbine to drive an <span class="vocab" data-cn="同步发电机">alternator</span> directly, producing alternating current (AC) without cumbersome gearboxes.`,
    `The ability to generate AC efficiently was a game‑changer for the emerging <span class="vocab" data-cn="电气化">electrification</span> movement. While Thomas Edison championed direct current (DC) systems, Parsons’ turbine‑driven generators could easily step up voltage using transformers, sending power over long distances with far less loss. This advantage helped the AC side win the famous “War of Currents,” leading to the construction of large‑scale power stations such as the 1895 Genoa plant in Italy, which installed Parsons turbines to feed a regional grid.`,
    `Beyond sheer speed, the turbine offered superior <span class="vocab" data-cn="热效率">thermal efficiency</span>. By allowing steam to expand through multiple stages of blades—known as a multi‑stage or compound turbine—Parsons could extract more work from each kilogram of water. This meant that for the same fuel input, a turbine‑driven plant produced significantly more electricity than an equivalent piston‑engine station, reducing coal consumption and operating costs.`,
    `The ripple effects were profound. Railways adopted Parsons turbines to power electric locomotives, while shipbuilders fitted them into ocean liners, where compact size and high output were prized. In the United States, the 1903 Pittsburgh plant became one of the first to replace a coal‑fired reciprocating engine with a Parsons turbine, marking the start of a nationwide shift toward turbine‑based generation that continues today.`,
    `Charles Parsons never imagined his invention would become the backbone of modern power grids, yet his vision of smooth, high‑speed rotary motion set the standard for 20th‑century energy conversion. Today’s gas and steam turbines—whether driving electricity in massive combined‑cycle plants or propelling aircraft engines—trace their lineage directly back to that modest 1884 prototype, a testament to how a single breakthrough can accelerate an entire civilization into the age of electric power.`,
  ],
  vocabulary: [
    { word: 'Charles Parsons', cn: '查尔斯·帕森斯' },
    { word: 'steam turbine', cn: '蒸汽涡轮机' },
    { word: 'centrifugal force', cn: '离心力' },
    { word: 'impulse nozzle', cn: '冲击喷嘴' },
    { word: 'alternator', cn: '同步发电机' },
    { word: 'electrification', cn: '电气化' },
    { word: 'thermal efficiency', cn: '热效率' },
  ],
};

export default article;
