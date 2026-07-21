import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Solar Challenger to Solar Impulse: The Evolution of Solar‑Powered Aircraft》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00479 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00479',
  slug: 'from-solar-challenger-to-solar-impulse-the-evolution-of-solar-powered-aircraft',
  title: 'From Solar Challenger to Solar Impulse: The Evolution of Solar‑Powered Aircraft',
  subtitle: 'Tracing the technological leaps from a daring Atlantic crossing to a global circumnavigation.',
  summary: 'A narrative journey through the milestones that turned solar‑powered flight from experimental curiosity into record‑breaking reality.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1979 a modest team of engineers and pilots gathered at an airfield in New York, intent on proving that a plane could stay aloft using only sunlight. Their creation, the <span class="vocab" data-cn="太阳能飞机">solar‑powered aircraft</span> known as the Solar Challenger, would soon attempt a transatlantic hop that seemed almost fantastical at the time. Decades later, in 2015–2016, the sleek silhouette of Solar Impulse 2 glided over oceans and continents, completing the first nonstop circumnavigation powered solely by <span class="vocab" data-cn="光伏电池">photovoltaic cells</span>. These two milestones bookend an era of relentless innovation.`,
    `The story begins with early experiments in the 1970s when hobbyists and university groups first mounted rows of <span class="vocab" data-cn="光伏电池">photovoltaic cells</span> on lightweight frames. The primary obstacle was <span class="vocab" data-cn="能量密度">energy density</span>: the amount of power that could be harvested per unit weight was far lower than that of conventional fuel. Designers responded by stretching wings to extreme spans and adding <span class="vocab" data-cn="小翼">winglet</span> devices to reduce induced drag, hoping to squeeze every joule of sunlight into useful thrust.`,
    `The Solar Challenger itself embodied a daring balance between power generation and structural weight. Its 40‑foot wing carried roughly two thousand solar cells, delivering about 1.5 kW of electrical power at peak sunshine. With a carefully managed <span class="vocab" data-cn="推重比">thrust‑to‑weight ratio</span> just enough to stay airborne, the aircraft relied on an impressive <span class="vocab" data-cn="滑翔比">glide ratio</span> to coast between bursts of solar‑driven propulsion. After a series of test flights in the United States, the Challenger embarked on its historic Atlantic crossing, stopping in Newfoundland, Iceland, and Scotland before reaching its final destination—a triumph that proved solar energy could sustain real‑world flight durations.`,
    `The lessons learned from the Challenger fed directly into NASA’s ambitious high‑altitude programs. In 1993 the Pathfinder aircraft demonstrated that a <span class="vocab" data-cn="太阳能阵列">solar array</span> spanning over 30 meters could keep a plane aloft for more than 24 hours at an altitude of 20 km. By the time Helios took to the skies in 2001, engineers were employing advanced <span class="vocab" data-cn="碳纤维复合材料">carbon‑fiber composites</span> and optimizing every surface for <span class="vocab" data-cn="高空长航时（HALE）">high‑altitude long endurance (HALE)</span> performance. Although Helios met a tragic end, its record‑setting 96‑hour flight proved that the combination of lightweight structures and efficient solar harvesting could push aircraft into near‑space realms.`,
    `When Swiss innovators Bertrand Piccard and André Borschberg launched Solar Impulse 2 in 2015, they stood on the shoulders of these decades‑long experiments. The aircraft’s 72‑meter wingspan was covered with more than 17,000 high‑efficiency solar cells, capable of generating up to 28 kW under optimal conditions. Power was stored in lithium‑polymer batteries that fed two quiet <span class="vocab" data-cn="电动机">electric motors</span>, each controlled by a sophisticated <span class="vocab" data-cn="能源管理系统">energy management system</span>. This system constantly balanced solar input, battery charge, and aerodynamic demands, allowing the plane to cruise at 50 km/h for days on end. The historic flight from Abu Dhabi to Hawaii in 2015 demonstrated that a well‑engineered solar platform could not only survive but thrive across diverse climates.`,
    `The ripple effects of these achievements are evident in today’s fleet of ultra‑light <span class="vocab" data-cn="无人机">unmanned aerial vehicles (UAV)</span> that patrol the skies for communications, surveillance, and scientific research. Airbus’s Zephyr, for example, inherits the high‑aspect‑ratio wing design and solar‑array integration pioneered by Helios, achieving flight times measured in weeks. As designers continue to refine <span class="vocab" data-cn="气动效率">aerodynamic efficiency</span> and battery chemistry, concepts such as solar‑powered air taxis and persistent atmospheric monitoring platforms move from speculative sketches toward practical reality.`,
    `From the humble Solar Challenger’s Atlantic dash to Solar Impulse 2’s global odyssey, the evolution of solar‑powered flight illustrates a relentless pursuit of lighter structures, smarter energy management, and ever‑greater efficiency. Each breakthrough built upon the last, turning sunlight—a seemingly fleeting resource—into a reliable engine for sustained aviation. As technology marches forward, the sky may soon be dotted not only with conventional jets but also with silent, sun‑kissed silhouettes that keep humanity connected while treading lightly on the planet.`,
  ],
  vocabulary: [
    { word: 'solar‑powered aircraft', cn: '太阳能飞机' },
    { word: 'photovoltaic cells', cn: '光伏电池' },
    { word: 'energy density', cn: '能量密度' },
    { word: 'winglet', cn: '小翼' },
    { word: 'thrust‑to‑weight ratio', cn: '推重比' },
    { word: 'glide ratio', cn: '滑翔比' },
    { word: 'carbon‑fiber composite', cn: '碳纤维复合材料' },
    { word: 'high‑altitude long endurance (HALE)', cn: '高空长航时（HALE）' },
    { word: 'solar array', cn: '太阳能阵列' },
    { word: 'electric motor', cn: '电动机' },
    { word: 'energy management system', cn: '能源管理系统' },
    { word: 'unmanned aerial vehicle (UAV)', cn: '无人机' },
    { word: 'aerodynamic efficiency', cn: '气动效率' },
  ],
};

export default article;
