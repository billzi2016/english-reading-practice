import type { Article } from '../../types/index.ts';

// 文件意图：维护《Sailing Stones of Death Valley: The Science Behind Nature’s Moving Rocks》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00198 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00198',
  slug: 'sailing-stones-of-death-valley-the-science-behind-nature-s-moving-rocks',
  title: 'Sailing Stones of Death Valley: The Science Behind Nature’s Moving Rocks',
  subtitle: 'How wind, ice, and thin water layers make rocks glide across a desert floor.',
  summary: 'An exploration of the natural physics that cause the mysterious moving stones on Racetrack Playa.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `At first glance, the smooth tracks etched into the salty crust of Death Valley look like a prank played by nature. Yet for decades visitors have witnessed large granite boulders seemingly sliding across the flat surface without any visible push. These enigmatic travelers are known as <span class="vocab" data-cn="移动的石头">sailing stones</span>, and their slow, silent journeys have inspired countless legends and scientific curiosity.`,
    `The stage for this drama is the <span class="vocab" data-cn="盐碱平原">playa</span> of Racetrack Playa, a dry lakebed that lies more than 3,800 feet below sea level. The climate here is extreme: scorching summer days, freezing winter nights, and an annual rainfall of less than two inches. When rain does fall, it quickly evaporates, leaving behind a thin, glassy crust of salt and clay that can be easily broken by the slightest disturbance.`,
    `Early explanations ranged from magnetic forces to mischievous pranksters, but none could account for the consistent directionality of the tracks. Some researchers suggested that strong gusts of wind might push the stones directly, yet measurements showed that wind speeds alone were insufficient to overcome the friction between rock and crust. The mystery deepened until a series of field experiments in the early 1990s began to collect real‑time data.`,
    `In 2014, a team led by geologists from the University of California used GPS trackers, time‑lapse cameras, and weather stations to monitor several stones over multiple years. They discovered that movement only occurred after a specific sequence of events: a light rain creates a shallow pond, temperatures drop below freezing at night, and thin sheets of <span class="vocab" data-cn="风吹冰块">wind‑blown ice</span> form on the water’s surface. When sunrise melts the edges of these ice sheets, they break into floating panels that can be nudged by even modest breezes.`,
    `These floating ice panels act like tiny sleds. As the wind pushes them, the stones become embedded in the underside of the ice and are carried across the wet, lubricated surface. The presence of a thin water film dramatically reduces friction, allowing the rocks to glide as far as several meters in a single episode. This process is an elegant example of natural <span class="vocab" data-cn="摩擦学">tribology</span>, the study of how surfaces interact under motion.`,
    `Two physical forces play crucial roles during this sliding phase. First, the weight of the water and ice exerts <span class="vocab" data-cn="静水压力">hydrostatic pressure</span> on the underlying crust, causing micro‑cracks that further lower resistance. Second, as the ice melts, it creates a transient layer of liquid that acts like a lubricant, similar to how oil reduces friction in machinery. The combination of reduced <span class="vocab" data-cn="冻缘的">periglacial</span> conditions and low‑friction dynamics explains why the stones can travel without leaving obvious tracks on the hardened crust.`,
    `Although modern instrumentation has clarified much of the puzzle, some questions remain. Not every rain event leads to stone movement; the precise thickness of the water layer, the size of the ice panels, and local wind patterns must align perfectly. Understanding these subtle thresholds not only satisfies scientific curiosity but also offers insights into broader geomorphological processes that shape desert landscapes worldwide.`,
  ],
  vocabulary: [
    { word: 'sailing stones', cn: '移动的石头' },
    { word: 'playa', cn: '盐碱平原' },
    { word: 'wind‑blown ice', cn: '风吹冰块' },
    { word: 'hydrostatic pressure', cn: '静水压力' },
    { word: 'tribology', cn: '摩擦学' },
    { word: 'periglacial', cn: '冻缘的' },
  ],
};

export default article;
