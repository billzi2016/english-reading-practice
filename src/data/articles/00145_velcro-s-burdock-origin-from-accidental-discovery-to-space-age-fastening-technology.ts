import type { Article } from '../../types/index.ts';

// 文件意图：维护《Velcro’s Burdock Origin: From Accidental Discovery to Space‑Age Fastening Technology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00145 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00145',
  slug: 'velcro-s-burdock-origin-from-accidental-discovery-to-space-age-fastening-technology',
  title: 'Velcro’s Burdock Origin: From Accidental Discovery to Space‑Age Fastening Technology',
  subtitle: 'How a humble burr inspired a revolutionary fastener that now works in orbit.',
  summary: 'From a walk in the Alps to NASA’s space suits, trace the journey of <span class="vocab" data-cn="魔术贴">Velcro</span> and its underlying science.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1941, Swiss engineer <span class="vocab" data-cn="乔治·德梅斯特拉尔">George de Mestral</span> returned from a hike in the Pyrenees only to find his trousers and his dog’s fur littered with tiny seed pods. These prickly hitchhikers were <span class="vocab" data-cn="牛蒡">burrs</span>, notorious for clinging stubbornly to fabric. Rather than dismiss them as a nuisance, de Mestral was intrigued by the way nature had engineered such an effective attachment system.`,
    `Back in his modest laboratory, he placed a single burr under a microscope and observed a forest of tiny hooks—each no larger than a fraction of a millimeter. The hooks interlocked perfectly with the loops on fabric fibers, creating a reversible bond. This discovery highlighted the importance of <span class="vocab" data-cn="微观结构">microstructure</span> in natural adhesion, and sparked the idea that a synthetic version could be manufactured at scale.`,
    `De Mestral spent years experimenting with nylon fibers, eventually producing a prototype consisting of two strips: one covered in tiny hooks, the other in complementary loops. He coined the name <span class="vocab" data-cn="魔术贴">Velcro</span> by blending the French words “velours” (velvet) and “crochet” (hook). The first commercial product appeared in 1955, marketed as a convenient alternative to buttons and zippers for clothing, shoes, and even aerospace equipment.`,
    `The turning point came when <span class="vocab" data-cn="美国国家航空航天局">NASA</span> learned of Velcro’s potential. During the Apollo program, engineers needed a fastener that could withstand extreme temperature fluctuations, vacuum conditions, and repeated use during <span class="vocab" data-cn="舱外活动">extravehicular activity</span>. Velcro proved ideal for securing equipment panels, attaching tools to astronauts’ gloves, and even fastening the iconic “Moon boots.” Its reliability earned it a permanent place on every subsequent space mission.`,
    `As demand grew, so did the sophistication of the fastener. Advances in <span class="vocab" data-cn="聚合物工程">polymer engineering</span> allowed manufacturers to produce hooks and loops from flame‑retardant, UV‑stable polymers. The resulting <span class="vocab" data-cn="钩环紧固件">hook-and-loop fastener</span> could bear greater loads without shedding fibers, a critical improvement for both terrestrial industrial applications and the rigors of orbit.` ,
    `Today, Velcro is ubiquitous on the International Space Station, where it secures everything from experiment trays to astronaut exercise equipment. New designs incorporate self‑cleaning surfaces that prevent dust accumulation—a lesson borrowed from the original burr’s ability to release after a single pull. Researchers are also exploring biodegradable versions made from plant‑based polymers, aiming to reduce space debris while preserving the fastener’s iconic convenience.` ,
    `Looking ahead, the legacy of that accidental encounter with a <span class="vocab" data-cn="牛蒡">burr</span> continues to inspire biomimetic engineering. Scientists are studying other natural attachment mechanisms—such as gecko toe pads and mussel byssal threads—to create next‑generation fasteners that can operate in even harsher environments, from deep‑sea submersibles to future lunar habitats. The story of Velcro reminds us that sometimes the most transformative technologies begin with a simple observation on a walk through the woods.` ,
  ],
  vocabulary: [
    { word: 'Velcro', cn: '魔术贴' },
    { word: 'hook-and-loop fastener', cn: '钩环紧固件' },
    { word: 'burr', cn: '牛蒡' },
    { word: 'microstructure', cn: '微观结构' },
    { word: 'NASA', cn: '美国国家航空航天局' },
    { word: 'extravehicular activity', cn: '舱外活动' },
    { word: 'polymer engineering', cn: '聚合物工程' },
  ],
};

export default article;
