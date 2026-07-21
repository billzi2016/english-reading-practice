import type { Article } from '../../types/index.ts';

// 文件意图：维护《Surtsey Island: The Birth of New Land from an Underwater Volcano and Its Scientific Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00114 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00114',
  slug: 'surtsey-island-the-birth-of-new-land-from-an-underwater-volcano-and-its-scientific-legacy',
  title: 'Surtsey Island: The Birth of New Land from an Underwater Volcano and Its Scientific Legacy',
  subtitle: 'How a sudden eruption created a living laboratory for scientists.',
  summary: 'The story of Surtsey, Iceland’s youngest island, and why it remains a unique natural experiment.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early hours of November 14, 1963, a series of violent explosions shattered the quiet sea off the coast of Iceland. The source was a <span class="vocab" data-cn="海底火山">submarine volcano</span> that had been dormant for millennia. As magma surged upward, it breached the water’s surface, sending towering plumes of ash and steam into the sky. Within weeks, a new landmass—later named Surtsey after the fire‑giant of Norse myth—rose from the ocean, reaching a height of about 155 meters above sea level.`,
    `The initial material that built Surtsey was primarily <span class="vocab" data-cn="火山碎屑岩">tephra</span>, a mixture of ash, lapilli and volcanic bombs ejected during the explosive phase. As the eruption progressed, streams of fluid <span class="vocab" data-cn="玄武岩熔岩">basaltic lava</span> poured over the tephra, welding it into solid rock and creating steep cliffs along the island’s perimeter. By December 1967, after four years of intermittent activity, the volcano finally quieted, leaving behind a barren, jagged island that was essentially a giant laboratory for studying primary succession.`,
    `Because Surtsey emerged in an environment free from human interference, scientists were granted a rare opportunity to observe ecological colonization from scratch. The first organisms to arrive were hardy <span class="vocab" data-cn="先锋物种">pioneer species</span> such as lichens and mosses, which could tolerate the harsh, salty winds and nutrient‑poor substrate. These simple life forms began to trap dust and organic matter, gradually creating a thin soil layer that would support more complex plants in later years.`,
    `The island’s isolation also made it an ideal site for long‑term monitoring of <span class="vocab" data-cn="生态演替">ecological succession</span>. Over the decades, researchers documented the arrival of vascular plants like sea pink (<i>Armeria maritima</i>) and the gradual appearance of invertebrates such as springtails and beetles. Each new wave of life altered the micro‑habitats, influencing moisture retention, temperature regulation, and nutrient cycling—processes that are still being quantified today.` ,
    `Surtsey’s scientific value was recognized early on; in 1993 it was inscribed as a <span class="vocab" data-cn="世界遗产">UNESCO World Heritage</span> site with the specific aim of preserving its pristine condition for research. Access to the island is strictly controlled: only a handful of scientists are permitted to set foot there each year, and all equipment must be sterilized to prevent accidental introduction of foreign species. This policy has allowed researchers to maintain a near‑pristine baseline against which global environmental changes can be measured.` ,
    `Beyond biology, Surtsey offers insights into <span class="vocab" data-cn="地质年代学">geochronology</span> and volcanic processes. By sampling the layered lava flows and tephra deposits, geologists have refined techniques for dating recent eruptions using radiocarbon and argon‑argon methods. The island also serves as a natural analogue for studying submarine eruptions that create new islands elsewhere in the world, such as those observed near Japan’s Izu–Bonin arc.` ,
    `Today, Surtsey stands as a testament to Earth’s dynamic nature—a piece of land that appeared within living memory and continues to evolve under the watchful eyes of scientists. Its legacy reminds us that even the most violent geological events can give rise to delicate ecosystems, and that protecting such natural laboratories is essential for deepening our understanding of planetary processes.` ,
  ],
  vocabulary: [
    { word: 'submarine volcano', cn: '海底火山' },
    { word: 'tephra', cn: '火山碎屑岩' },
    { word: 'basaltic lava', cn: '玄武岩熔岩' },
    { word: 'pioneer species', cn: '先锋物种' },
    { word: 'ecological succession', cn: '生态演替' },
    { word: 'UNESCO World Heritage', cn: '世界遗产' },
    { word: 'geochronology', cn: '地质年代学' },
  ],
};

export default article;
