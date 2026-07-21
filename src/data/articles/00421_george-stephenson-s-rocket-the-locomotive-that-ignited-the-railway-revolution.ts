import type { Article } from '../../types/index.ts';

// 文件意图：维护《George Stephenson’s Rocket: The Locomotive That Ignited the Railway Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00421 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00421',
  slug: 'george-stephenson-s-rocket-the-locomotive-that-ignited-the-railway-revolution',
  title: 'George Stephenson’s Rocket: The Locomotive That Ignited the Railway Revolution',
  subtitle: 'How a single engine sparked a continent‑wide transformation',
  summary: 'The story of the Rocket, its groundbreaking technology, and why it changed transportation forever.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1820s Britain was still dominated by canals and horse‑drawn wagons. Roads were muddy, travel was slow, and the demand for faster movement of coal and goods grew louder with each new factory. Into this restless climate stepped a modest engineer named George Stephenson, who had already built several primitive steam‑driven machines on his Killingworth Colliery. When the Liverpool & Manchester Railway announced the 1829 Rainhill Trials—a competition to find the best <span class="vocab" data-cn="蒸汽机车">locomotive</span>—Stephenson saw an opportunity to prove that iron rails could carry speed as well as weight.`,
    `The winning machine, christened “Rocket,” was nothing short of a marvel of engineering. Its most celebrated feature was the <span class="vocab" data-cn="多管锅炉">multi‑tubular boiler</span>, which replaced the single large cylinder of earlier designs with dozens of small tubes that dramatically increased the surface area for heat exchange. Coupled with a newly invented <span class="vocab" data-cn="喷气管">blast pipe</span>—a nozzle that directed exhaust steam upward into the chimney—the boiler generated far more pressure without adding bulk. This combination allowed the Rocket to produce roughly 25 horsepower, enough to pull a ten‑carriage train at unprecedented speeds.`,
    `On the day of the trials, the Rocket demonstrated its superiority by reaching an average speed of 30 mph (about 48 km/h) and peaking at over 35 mph on straight sections. Its total weight was just under four tons, yet it could haul a load of eight tons while consuming only a few hundred kilograms of coal per hour—a remarkable efficiency for the era. The judges were convinced not merely by raw speed but by the reliability of its steam‑driven mechanisms and the smoothness of its ride, which contrasted sharply with the jerky motion of rival entrants that relied on cumbersome gear systems.`,
    `Beyond the technical triumph, the Rocket set a precedent for the <span class="vocab" data-cn="轨距">gauge</span> that would become known as the <span class="vocab" data-cn="标准轨距">standard gauge</span>—4 ft 8½ in (1 435 mm). Stephenson’s choice of this width was pragmatic, matching the existing coal‑transport tracks at Killingworth, but it soon proved to be a versatile dimension that balanced stability with construction cost. As railways proliferated across Britain and later abroad, the standard gauge became the de facto measurement for most main lines, simplifying the interchange of rolling stock and fostering an international market for railway equipment.`,
    `The legacy of the Rocket did not end with the Rainhill Trials. After its victory, the locomotive entered regular service on the Liverpool‑Manchester line, hauling passengers and freight for more than a decade before being retired to the Museum of Science in London (now part of the Science Museum Group). Its design principles—especially the multi‑tubular boiler and blast pipe—were copied and refined by engineers such as Robert Stephenson (George’s son) and later by American builders like Matthias Baldwin. Even today, full‑scale replicas of the Rocket appear at heritage railways, reminding visitors that a single engine can embody an entire era of innovation.`,
    `The broader impact of the Rocket is inseparable from the <span class="vocab" data-cn="工业革命">Industrial Revolution</span> itself. By dramatically reducing travel time between industrial centers, railways accelerated the distribution of raw materials like iron ore and coal, while also opening new markets for manufactured goods. Towns that were once isolated became hubs of commerce, and the speed of communication—via mail trains—shrank the effective size of the nation. In economic terms, the railway network contributed to a surge in GDP growth during the mid‑19th century, reshaping social patterns as workers could commute farther from home and urbanization accelerated.`,
    `Looking back, the Rocket stands as a symbol of how focused engineering can trigger sweeping societal change. Its blend of practical design, bold experimentation, and strategic timing captured the imagination of investors, policymakers, and the public alike. While many later locomotives surpassed its speed and power, none carried the same mythic weight of being “the engine that started it all.” For students of technology history, the Rocket offers a clear lesson: breakthroughs often arise from solving immediate problems—in this case, how to move coal faster—yet their ripple effects can redefine entire civilizations.`
  ],
  vocabulary: [
    { word: 'locomotive', cn: '蒸汽机车' },
    { word: 'multi‑tubular boiler', cn: '多管锅炉' },
    { word: 'blast pipe', cn: '喷气管' },
    { word: 'gauge', cn: '轨距' },
    { word: 'standard gauge', cn: '标准轨距' },
    { word: 'Industrial Revolution', cn: '工业革命' }
  ],
};

export default article;
