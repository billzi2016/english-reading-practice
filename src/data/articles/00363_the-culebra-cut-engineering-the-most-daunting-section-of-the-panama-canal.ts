import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Culebra Cut: Engineering the Most Daunting Section of the Panama Canal》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00363 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00363',
  slug: 'the-culebra-cut-engineering-the-most-daunting-section-of-the-panama-canal',
  title: 'The Culebra Cut: Engineering the Most Daunting Section of the Panama Canal',
  subtitle: 'How engineers tamed a mountain to connect two oceans.',
  summary: 'An in‑depth look at the challenges and breakthroughs that shaped the Culebra (Gaillard) Cut, the toughest part of the Panama Canal.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the United States took over the Panama Canal project in 1904, engineers quickly realized that the greatest obstacle lay not in the tropical heat but in a narrow ridge of volcanic rock and soft clay slicing across the isthmus. This scar, later named the <span class="vocab" data-cn="库雷布拉切口">Culebra Cut</span>, would become the most demanding section of the canal because it required cutting through the <span class="vocab" data-cn="大陆分水岭">Continental Divide</span> itself, a task no 19th‑century project had ever attempted.`,
    `The geology of the cut was a paradox: hard basalt interleaved with layers of highly plastic clay. As workers removed rock, the underlying clay would swell when exposed to rain, triggering massive <span class="vocab" data-cn="滑坡">landslides</span>. Early surveys underestimated these movements, leading to repeated setbacks and costly re‑excavations. Modern engineers would later classify this as a classic case of <span class="vocab" data-cn="岩土工程">geotechnical</span> instability, but at the time it forced the canal builders to invent new stabilization techniques on the fly.`,
    `Chief engineer John Stevens and his successor George Washington Goethals devised an ambitious plan that combined sheer manpower with cutting‑edge explosives. Over 100 million cubic metres of earth and rock had to be removed, a volume comparable to carving out a small mountain. The primary tool for this massive <span class="vocab" data-cn="挖掘">excavation</span> was controlled blasts of <span class="vocab" data-cn="炸药">dynamite</span>, carefully timed to fracture the basalt while minimizing damage to surrounding slopes. Each blast was followed by a meticulous inspection, because even a small miscalculation could trigger another landslide.`,
    `To move the broken rock away from the work face, the canal engineers imported dozens of massive <span class="vocab" data-cn="蒸汽铲">steam shovels</span>, some of the largest machines ever built at that time. These steam‑powered excavators could lift several tonnes in a single scoop and dump it onto narrow-gauge railcars that raced along temporary tracks. As the cut deepened, electric shovels gradually replaced their steam cousins, offering greater precision and less smoke—an important improvement in the humid tropical environment. The railway network itself stretched for miles, forming a moving conveyor belt that kept the work area clear.`,
    `Water management proved equally critical. The region receives more than 3 metres of rain each year, and groundwater seeped constantly from the surrounding hills. Goethals ordered the construction of a series of drainage tunnels and a <span class="vocab" data-cn="水力闸槽">hydraulic sluice</span> system that could channel excess water away from unstable slopes. These sluices acted like giant drains, allowing engineers to lower the water table temporarily during excavation, thereby reducing the risk of sudden mudflows that had plagued earlier attempts.`,
    `While engineering ingenuity was paramount, the human factor could not be ignored. Tens of thousands of laborers—many recruited from the Caribbean—toiled under harsh conditions, and disease claimed countless lives until Dr. William Gorgas introduced rigorous mosquito‑control measures that finally curbed malaria and yellow fever. The combination of improved health protocols and relentless engineering effort meant that by August 1913 the last major rock face had been cleared, and the <span class="vocab" data-cn="盖亚尔德切口">Gaillard Cut</span>—its official name after Goethals’ chief assistant—was ready for water.`,
    `The canal officially opened on 15 August 1914, and the Culebra Cut stood as a testament to what coordinated planning, innovative machinery, and adaptive problem‑solving could achieve. Today, modern ships still pass through this narrow corridor, and engineers continue to study its history to learn how to manage large‑scale earthworks in challenging environments. The legacy of the cut reminds us that even the most daunting natural barriers can be transformed with vision and perseverance.`,
  ],
  vocabulary: [
    { word: 'Culebra Cut', cn: '库雷布拉切口' },
    { word: 'Continental Divide', cn: '大陆分水岭' },
    { word: 'landslide', cn: '滑坡' },
    { word: 'geotechnical', cn: '岩土工程' },
    { word: 'excavation', cn: '挖掘' },
    { word: 'dynamite', cn: '炸药' },
    { word: 'steam shovel', cn: '蒸汽铲' },
    { word: 'hydraulic sluice', cn: '水力闸槽' },
    { word: 'Gaillard Cut', cn: '盖亚尔德切口' },
  ],
};

export default article;
