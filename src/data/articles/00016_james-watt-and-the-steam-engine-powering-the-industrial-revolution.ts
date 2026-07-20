import type { Article } from '../../types/index.ts';

// This file defines the article "James Watt and the Steam Engine: Powering the Industrial Revolution"
// for automatic indexing by the content system.
const article: Article = {
  id: '00016',
  slug: 'james-watt-and-the-steam-engine-powering-the-industrial-revolution',
  title: 'James Watt and the Steam Engine: Powering the Industrial Revolution',
  subtitle: 'How a Scottish Inventor Transformed Industry',
  summary: "Explore James Watt's innovations and how his steam engine powered the Industrial Revolution.",
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `James Watt, a Scottish instrument maker born in Greenock in 1736, entered the world of engineering at a time when the humble <span class="vocab" data-cn="蒸汽机">steam engine</span> was already being used to pump water from mines. His early apprenticeship with the University of Glasgow's instrument workshop gave him practical experience with precision tools and scientific measurement. By his mid‑twenties, Watt had become fascinated by the inefficiencies he observed in existing machines, setting the stage for a series of breakthroughs that would reshape industry.`,
    `The dominant design before Watt’s intervention was the <span class="vocab" data-cn="纽科门蒸汽机">Newcomen engine</span>, invented in the early 18th century. While revolutionary for its time, the Newcomen model suffered from a fundamental flaw: each power stroke required heating and then cooling the same cylinder to condense steam, a process that wasted large amounts of fuel and limited speed. Miners and factory owners grew increasingly frustrated with the high operating costs, creating a demand for a more economical solution.`,
    `Watt’s breakthrough came in 1765 when he realized that the <span class="vocab" data-cn="冷凝">condensation</span> step could be isolated from the main cylinder. By introducing a separate condensation chamber, the engine no longer needed to repeatedly heat and cool the same space, dramatically improving thermal <span class="vocab" data-cn="效率">efficiency</span>. This seemingly simple modification reduced fuel consumption by up to 75 percent, turning the <span class="vocab" data-cn="蒸汽机">steam engine</span> from a costly curiosity into a viable source of power for diverse applications.`,
    `With a more efficient engine in hand, Watt turned his attention to expanding its utility beyond pumping water. In collaboration with entrepreneur Matthew Boulton, he developed mechanisms for <span class="vocab" data-cn="旋转运动">rotary motion</span>, allowing the engine’s linear power to be converted into continuous circular movement. This innovation enabled the drive of machinery such as looms, hammers, and mills. Central to this conversion was a refined <span class="vocab" data-cn="活塞">piston</span> design that could smoothly transmit force to a crankshaft, while an improved <span class="vocab" data-cn="锅炉">boiler</span> maintained steady steam pressure.`,
    `Watt also introduced the concept of <span class="vocab" data-cn="马力">horsepower</span>, a unit that quantified engine output in terms familiar to users accustomed to animal labor. By defining one horsepower as the ability to lift 550 pounds one foot per second, he provided a clear benchmark for comparing machines and negotiating contracts. This standardization helped customers understand the economic benefits of switching from draft animals to mechanized power.`,
    `The ripple effects of Watt’s inventions were felt across Britain and eventually the world. Factories equipped with his <span class="vocab" data-cn="蒸汽机">steam engine</span> could operate year‑round, independent of water flow or wind, accelerating the pace of <span class="vocab" data-cn="工业革命">industrial revolution</span>. Textile mills mechanized weaving, iron foundries powered blast furnaces, and mines deepened their shafts with reliable pumping. In essence, Watt’s engine catalyzed a wave of <span class="vocab" data-cn="机械化">mechanization</span> that transformed production, transportation, and daily life.`,
    `The legacy of James Watt endures not only in the machines he helped perfect but also in the very language of physics. The unit of power, the <span class="vocab" data-cn="瓦特">watt</span>, bears his name, reminding engineers that a single joule per second can drive entire economies. His emphasis on efficiency, standardization, and adaptability set a template for modern engineering practice, ensuring that the spirit of innovation he championed continues to power new generations.`,
  ],
  vocabulary: [
    { word: 'steam engine', cn: '蒸汽机' },
    { word: 'Newcomen engine', cn: '纽科门蒸汽机' },
    { word: 'condensation', cn: '冷凝' },
    { word: 'efficiency', cn: '效率' },
    { word: 'rotary motion', cn: '旋转运动' },
    { word: 'piston', cn: '活塞' },
    { word: 'boiler', cn: '锅炉' },
    { word: 'horsepower', cn: '马力' },
    { word: 'industrial revolution', cn: '工业革命' },
    { word: 'mechanization', cn: '机械化' },
    { word: 'watt', cn: '瓦特' },
  ],
};

export default article;
