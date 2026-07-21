import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rainhill Trials of 1829: How a Railway Competition Forged Modern Transport》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00487 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00487',
  slug: 'the-rainhill-trials-of-1829-how-a-railway-competition-forged-modern-transport',
  title: 'The Rainhill Trials of 1829: How a Railway Competition Forged Modern Transport',
  subtitle: 'A pivotal contest that shaped the future of rail travel.',
  summary: 'In 1829, a daring competition at Rainhill set the standards for modern railway engineering and accelerated the spread of the <span class="vocab" data-cn="工业革命">industrial revolution</span>.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `By the late 1820s Britain was in the throes of the <span class="vocab" data-cn="工业革命">industrial revolution</span>, and manufacturers in Liverpool and Manchester were desperate for a faster, more reliable way to move raw cotton and finished goods. The existing horse‑drawn wagons on primitive tracks could not keep pace with factory output, prompting investors to envision a full‑scale <span class="vocab" data-cn="铁路">railway</span> that would link the two bustling ports. Yet no one had yet proven that a self‑propelled machine could haul heavy loads over long distances without frequent breakdowns.`,
    `In early 1829 the board of the Liverpool and Manchester Railway (L&MR) announced a public competition to be held at Rainhill, a small village midway between the cities. The rules were strict: each entrant had to travel a mile while pulling a ten‑ton carriage, maintain an average speed of at least ten miles per hour, demonstrate fuel efficiency, and prove that its design could be reproduced reliably. A further technical requirement was adherence to the emerging standard <span class="vocab" data-cn="轨距">gauge</span> of 4 ft 8½ in, which would later become the de‑facto width for most British tracks.`,
    `Four engineers answered the call. The most famous was George Stephenson with his <span class="vocab" data-cn="蒸汽机车">steam locomotive</span> called “Rocket”. Competing against him were Braithwaite & Ericsson’s “Novelty”, a lightweight machine that relied on a high‑speed engine, the “Perseverance” built by Timothy Hackworth, and an unnamed entry from a local workshop. Each design reflected a different philosophy: some emphasized raw power, others sought to reduce weight or simplify construction. The stage was set for a showdown that would decide which technology would dominate the new age of rail travel.`,
    `On October 22, 1829, the trials began under overcast skies. “Rocket” quickly distinguished itself with several groundbreaking features. Its multi‑tube boiler dramatically increased the heating surface, allowing steam to be generated at higher <span class="vocab" data-cn="锅炉压力">boiler pressure</span> without risking rupture. The ingenious <span class="vocab" data-cn="喷射管">blast pipe</span> expelled exhaust steam upward into the chimney, creating a strong draft that pulled fresh air through the firebox and boosted combustion efficiency. These innovations gave Rocket a smooth, sustained thrust that kept it well above the ten‑mile‑per‑hour threshold while pulling the heavy carriage. In contrast, “Novelty” suffered from overheating and mechanical failures, forcing its withdrawal after only a few runs.`,
    `When the dust settled, Stephenson’s Rocket was declared the clear victor, having completed the mile in just 2 minutes 20 seconds with a comfortable margin of safety. The L&MR board immediately adopted Rocket’s design principles for their own fleet and standardized the <span class="vocab" data-cn="轨距">gauge</span> that had been used during the trials. This decision cemented a technical template that spread across Britain and, eventually, the world. Engineers copied the multi‑tube boiler, the blast pipe, and the overall layout of Rocket, accelerating the development of faster, more reliable locomotives for decades to come.`,
    `The impact of the Rainhill Trials extended far beyond a single competition. By proving that a well‑engineered <span class="vocab" data-cn="蒸汽机车">steam locomotive</span> could meet rigorous performance standards, the event gave investors confidence to fund massive railway projects across Europe and North America. The rapid expansion of rail networks reduced travel times dramatically, opened remote regions to commerce, and reshaped urban growth patterns. In essence, the competition acted as a catalyst that turned rail transport from an experimental curiosity into a cornerstone of modern infrastructure.`,
    `Today, the legacy of Rainhill is commemorated at the Rainhill Hall Museum, where a replica of Rocket stands beside original engineering drawings. Historians view the trials as a turning point that demonstrated how open competition and clear technical criteria can drive innovation—a lesson still relevant in today’s high‑speed rail and sustainable transport initiatives. The spirit of Rainhill reminds us that bold challenges, when paired with inventive engineering, can forge pathways that change societies for generations.`,
  ],
  vocabulary: [
    { word: 'steam locomotive', cn: '蒸汽机车' },
    { word: 'railway', cn: '铁路' },
    { word: 'gauge', cn: '轨距' },
    { word: 'boiler pressure', cn: '锅炉压力' },
    { word: 'blast pipe', cn: '喷射管' },
    { word: 'industrial revolution', cn: '工业革命' },
  ],
};

export default article;
