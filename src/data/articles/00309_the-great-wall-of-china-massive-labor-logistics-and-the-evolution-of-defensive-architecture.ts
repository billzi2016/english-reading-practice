import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Wall of China: Massive Labor, Logistics, and the Evolution of Defensive Architecture》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00309 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00309',
  slug: 'the-great-wall-of-china-massive-labor-logistics-and-the-evolution-of-defensive-architecture',
  title: 'The Great Wall of China: Massive Labor, Logistics, and the Evolution of Defensive Architecture',
  subtitle: 'How an empire turned stone, earth, and human effort into a lasting defensive line.',
  summary: 'Explore the massive workforce, logistical feats, and architectural innovations behind the Great Wall across centuries.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the first emperor of a unified China, <span class="vocab" data-cn="秦始皇">Qin Shi Huang</span>, ascended the throne in 221 BCE, he faced a daunting strategic dilemma. Nomadic tribes from the north, especially the Xiongnu, threatened the newly consolidated realm. To deter raids and project imperial power, Qin ordered the construction of a massive barrier that would stitch together older regional walls into a single defensive line stretching across rugged terrain.`,
    `The scale of labor required was staggering. Historical records suggest that up to one million workers—comprising conscripted peasants, soldiers, and prisoners—were mobilized over several decades. This <span class="vocab" data-cn="征兵或徭役">conscription</span> system forced entire villages to send men, women, and even children to the frontiers. Harsh weather, disease, and grueling physical toil claimed countless lives, turning the wall into a monument of both human ingenuity and suffering.`,
    `Logistics proved as challenging as the construction itself. The builders used locally available materials: earth, timber, and stone. In mountainous sections, massive blocks were extracted through painstaking <span class="vocab" data-cn="采石">quarrying</span> operations, then transported along narrow mountain paths using sledges and oxen teams. In the plains, engineers employed the technique of <span class="vocab" data-cn="夯土">rammed earth</span>, compacting layers of soil between wooden frames to create solid cores that could withstand centuries of erosion.`,
    `Construction methods evolved with each succeeding <span class="vocab" data-cn="王朝">dynasty</span>. During the Han period, brickmaking workshops sprang up near construction sites, allowing sections of the wall to be faced with fired bricks for added durability. Defensive features such as <span class="vocab" data-cn="垛口">battlements</span>—stone parapets with crenellations—and strategically placed <span class="vocab" data-cn="烽火台">watchtowers</span> were integrated to enable soldiers to patrol, observe enemy movements, and launch counter‑attacks from elevated positions.`,
    `The most extensive rebuilding occurred under the Ming <span class="vocab" data-cn="王朝">dynasty</span> (1368–1644). After the fall of the Yuan, the Ming court invested heavily in a new wave of fortifications. This era saw the widespread use of glazed bricks and stone arches, reflecting advances in <span class="vocab" data-cn="军事工程">military engineering</span>. The wall’s profile became steeper, with wider parapets that could accommodate artillery, while the interior was divided into garrison quarters stocked with food supplies and ammunition.`,
    `Beyond its physical structure, the Great Wall functioned as a communication network. Signal fires lit atop <span class="vocab" data-cn="烽火台">watchtowers</span> could transmit warnings across hundreds of kilometers within hours. Maintaining this system required meticulous logistical planning: each garrison had to store enough fuel for nightly beacons and ensure that messengers could traverse the rugged terrain quickly, especially during winter when snow blocked mountain passes.`,
    `Today, the Great Wall stands as a UNESCO World Heritage site and a symbol of Chinese perseverance. While many sections have been restored for tourism, large stretches remain in ruin, vulnerable to weathering and human activity. Modern preservation efforts must balance archaeological research with sustainable visitor management, ensuring that this ancient marvel continues to teach future generations about the extraordinary coordination of labor, logistics, and architectural innovation.`,
  ],
  vocabulary: [
    { word: 'Qin Shi Huang', cn: '秦始皇' },
    { word: 'dynasty', cn: '王朝' },
    { word: 'conscription', cn: '征兵或徭役' },
    { word: 'rammed earth', cn: '夯土' },
    { word: 'quarrying', cn: '采石' },
    { word: 'battlements', cn: '垛口' },
    { word: 'watchtowers', cn: '烽火台' },
    { word: 'military engineering', cn: '军事工程' },
  ],
};

export default article;
