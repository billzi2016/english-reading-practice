import type { Article } from '../../types/index.ts';

// 文件意图：维护《Centralia, Pennsylvania: The Town That Won’t Extinguish》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00034 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00034',
  slug: 'centralia-pennsylvania-the-town-that-won-t-extinguish',
  title: 'Centralia, Pennsylvania: The Town That Won’t Extinguish',
  subtitle: 'How an underground coal fire turned a once‑thriving community into a modern ghost town.',
  summary: 'A narrative of Centralia’s accidental blaze, the struggle to stop it, and the lasting lessons for mining towns.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the rolling hills of eastern Pennsylvania lies a place that most maps now label only with a footnote. Centralia was once a bustling coal‑mining borough, home to roughly 2,000 residents in the early 1960s. On a cold March night in 1962, a small spark from an illegal trash burn ignited a forgotten <span class="vocab" data-cn="煤层">coal seam</span> deep beneath the town, setting off a chain of events that would make Centralia famous for all the wrong reasons.`,
    `The fire’s origin was deceptively simple: a discarded cigarette or a stray ember slipped into an abandoned <span class="vocab" data-cn="矿井通道">mine shaft</span> that had been left open after the local anthracite mines shut down. Anthracite, a hard, high‑carbon form of coal prized for its clean burn, can smolder for decades when exposed to oxygen. Once ignited, the fire slipped into the network of tunnels and fissures, turning the underground into an endless furnace that was invisible on the surface but relentless below.`,
    `Within months, residents began noticing a faint smell of sulfur and occasional plumes of smoke drifting from cracks in the pavement. By 1984, the <span class="vocab" data-cn="地下火灾">subsurface fire</span> had spread to an estimated 150 acres, prompting the Pennsylvania Department of Environmental Protection to issue an official <span class="vocab" data-cn="撤离令">evacuation order</span>. The federal <span class="vocab" data-cn="美国环境保护署">EPA</span> classified Centralia as a public health hazard, citing dangerous levels of carbon monoxide and ground instability that threatened to collapse homes at any moment.`,
    `Over the next two decades, engineers tried every conventional method to douse the blaze. They drilled boreholes to flood the fire with water—a technique known as <span class="vocab" data-cn="灌水法">inundation</span>—but the porous rock quickly redirected the liquid away from the hottest zones. Other attempts involved injecting sand and concrete to seal off air pathways, yet the fire simply found new cracks to breathe. Even advanced <span class="vocab" data-cn="热成像技术">thermal imaging</span> surveys could only map the heat signatures without providing a practical way to cut off its fuel supply.`,
    `As the flames persisted, Centralia’s population dwindled dramatically. By 1992, fewer than 30 families remained, each receiving monthly stipends from the state to relocate. Legal battles erupted over property rights and compensation, while insurance companies refused to cover homes deemed “uninhabitable.” Property values plummeted, turning once‑proud family houses into abandoned shells that now serve as eerie reminders of a community forced to abandon its roots.`,
    `Today, only a handful of structures cling to the edge of the former borough, and the infamous stretch of Route 61—once a bustling highway—has been permanently closed, leaving a cracked, barren landscape known locally as “the fire line.” Yet Centralia has attracted curious tourists, photographers, and scholars who walk the silent streets, guided by signs that warn of hidden heat. The town’s story is taught in mining engineering courses as a cautionary tale about the long‑term risks of <span class="vocab" data-cn="地下采矿">underground mining</span> without proper closure procedures.`,
    `The lingering blaze also sparks debate about whether such persistent fires could be harnessed for energy. Some researchers propose tapping the heat for low‑grade <span class://vocab" data-cn="地热能">geothermal</span> power, turning a disaster into a resource. While Centralia’s future remains uncertain, its legacy endures as a stark reminder that once a fire finds oxygen in the earth, it can become an indelible part of the landscape—one that won’t easily be extinguished.`,
  ],
  vocabulary: [
    { word: 'coal seam', cn: '煤层' },
    { word: 'mine shaft', cn: '矿井通道' },
    { word: 'anthracite', cn: '无烟煤，一种硬质高碳煤' },
    { word: 'subsurface fire', cn: '地下火灾' },
    { word: 'evacuation order', cn: '撤离令' },
    { word: 'EPA', cn: '美国环境保护署' },
    { word: 'inundation', cn: '灌水法，用水扑灭火焰的技术' },
    { word: 'thermal imaging', cn: '热成像技术' },
    { word: 'underground mining', cn: '地下采矿' },
    { word: 'geothermal', cn: '地热能' },
  ],
};

export default article;
