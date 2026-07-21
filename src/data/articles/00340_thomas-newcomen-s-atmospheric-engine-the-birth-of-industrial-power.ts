import type { Article } from '../../types/index.ts';

// 文件意图：维护《Thomas Newcomen’s Atmospheric Engine: The Birth of Industrial Power》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00340 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00340',
  slug: 'thomas-newcomen-s-atmospheric-engine-the-birth-of-industrial-power',
  title: 'Thomas Newcomen’s Atmospheric Engine: The Birth of Industrial Power',
  subtitle: 'How a humble pump sparked the age of steam',
  summary: 'The story of Newcomen’s engine shows how a simple solution to mine flooding launched modern industry.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1700s, deep coal mines in the English counties of Staffordshire and Derbyshire were plagued by relentless water inflow. Miners relied on horse‑powered “ragging” pumps, which could only keep a few dozen feet of shaft dry. When the water rose higher than the horses could manage, production halted and profits vanished. It was against this desperate backdrop that a blacksmith named Thomas Newcomen began to imagine a machine that could harness nature itself to lift water out of the earth.`,
    `Newcomen (1664‑1729) grew up in Dartmouth, a bustling port town where shipwrights and metalworkers constantly experimented with steam for propulsion. By his thirties he had become a respected ironmonger, and his partnership with the itinerant engineer John Calley gave him access to the latest boiler designs. Their shared goal was simple yet audacious: create a device that could produce enough force to drive a pump without relying on animal labor.`,
    `The core of their invention was the <span class="vocab" data-cn="大气机">atmospheric engine</span>. First, a fire heated a <span class="vocab" data-cn="锅炉">boiler</span> until steam filled a vertical <span class="vocab" data-cn="汽缸">cylinder</span>. A heavy <span class="vocab" data-cn="活塞">piston</span> sat atop the cylinder, sealed by a leather valve. When cold water was suddenly sprayed into the cylinder, the steam underwent rapid <span class="vocab" data-cn="冷凝">condensation</span>, creating a partial <span class="vocab" data-cn="真空">vacuum</span>. The external atmospheric pressure—about 14.7 psi—then pushed the piston down with great force, pulling on a massive beam that lifted the pump rod in the mine shaft.`,
    `The engine’s architecture resembled a giant seesaw: one end attached to the descending piston, the other to the pump rod via a long <span class="vocab" data-cn="横梁">beam</span>. As the piston fell, the beam rose, pulling the pump plunger upward; when the piston was raised again by a counterweight, the cycle repeated. This simple reciprocating motion could be replicated many times per minute, delivering a steady stream of water to the surface. Although Newcomen’s design consumed large amounts of coal, it was the first machine that could operate continuously without human or animal input.`,
    `Within a decade, dozens of Newcomen engines were installed in mines across Cornwall, Wales, and even as far away as the Dutch Republic. Their ability to keep shafts dry transformed mining economics: deeper seams became exploitable, output surged, and coal—once a scarce fuel—became abundant enough to power other emerging industries. In this sense, the engine marked the first true source of <span class="vocab" data-cn="工业革命">industrial power</span>, shifting reliance from manual labor to mechanized work.`,
    `Nevertheless, Newcomen’s engine suffered from poor <span class="vocab" data-cn="效率">efficiency</span>. Because each cycle required heating the cylinder and then cooling it with water, a great deal of fuel was wasted reheating the same metal. James Watt’s later improvements—most notably the separate condenser—addressed this flaw by keeping the cylinder hot while condensing steam elsewhere. Yet without Newcomen’s pioneering concept, Watt would have had no platform on which to build his refinements.`,
    `The legacy of the atmospheric engine endures far beyond its original purpose. It demonstrated that steam could be converted into reliable mechanical motion, a principle that powered locomotives, textile mills, and eventually the global factories of the 19th century. In the grand narrative of technology, Newcomen’s modest pump stands as the spark that ignited the age of steam, proving that even the most humble invention can reshape civilization.`,
  ],
  vocabulary: [
    { word: 'atmospheric engine', cn: '大气机' },
    { word: 'boiler', cn: '锅炉' },
    { word: 'cylinder', cn: '汽缸' },
    { word: 'piston', cn: '活塞' },
    { word: 'condensation', cn: '冷凝' },
    { word: 'vacuum', cn: '真空' },
    { word: 'beam', cn: '横梁' },
    { word: 'efficiency', cn: '效率' },
    { word: 'industrial revolution', cn: '工业革命' },
  ],
};

export default article;
