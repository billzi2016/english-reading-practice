import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Pacific Garbage Patch: Discovery, Environmental Impact, and Ongoing Challenges》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00494 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00494',
  slug: 'the-great-pacific-garbage-patch-discovery-environmental-impact-and-ongoing-challenges',
  title: 'The Great Pacific Garbage Patch: Discovery, Environmental Impact, and Ongoing Challenges',
  subtitle: 'How a floating island of plastic reshaped ocean science and policy.',
  summary: 'An engaging look at the origins, ecology, and remediation efforts surrounding the massive plastic accumulation in the North Pacific.',
  category: 'environment',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In 1997 a curious sailor named <span class="vocab" data-cn="查尔斯·摩尔">Charles Moore</span> set out on a routine voyage across the North Pacific. While navigating the seemingly endless blue, he noticed an unusual concentration of floating debris that stretched far beyond the horizon. This accidental observation marked the first documented sighting of what would later be called the <span class="vocab" data-cn="大太平洋垃圾带">Great Pacific Garbage Patch</span>, a phenomenon that has since become a symbol of humanity’s plastic footprint on the oceans.`,
    `The patch resides within the North Pacific Subtropical <span class="vocab" data-cn="环流">gyre</span>, a massive system of circulating currents driven by wind and Earth’s rotation. As surface waters converge toward the gyre’s center, they trap floating objects, preventing them from dispersing back into open sea. Over decades, this natural conveyor belt has accumulated billions of pieces of <span class="vocab" data-cn="海洋碎屑">marine debris</span>, ranging from discarded fishing nets to broken bottle caps.`,
    `What makes the patch especially concerning is its composition. While large items are visible to the naked eye, most of the mass consists of tiny fragments known as <span class="vocab" data-cn="微塑料">microplastics</span>. These particles, often smaller than a grain of sand, result from the gradual breakdown of larger plastics through processes like <span class="vocab" data-cn="光降解">photodegradation</span> and mechanical abrasion. Their minute size allows them to remain suspended in the water column for years, making detection and removal extremely difficult.`,
    `The ecological consequences are profound. Marine organisms—from plankton to large fish—mistake microplastics for food, ingesting them inadvertently. Once inside an animal’s body, these particles can cause physical blockages, reduced nutrient absorption, and even hormonal disruptions. Moreover, plastics act as carriers for toxic chemicals; through a process called <span class="vocab" data-cn="生物累积">bioaccumulation</span>, pollutants concentrate up the food chain, ultimately reaching humans who consume seafood.`,
    `Cleaning up the patch presents formidable challenges. Its sheer size—estimated to cover an area twice the size of Texas—and its diffuse nature mean that traditional collection methods are ineffective. The constant motion of the gyre disperses debris, while the fragile microplastics can slip through coarse nets, re‑entering the water after capture attempts. Additionally, the remote location makes logistical support costly and weather‑dependent.`,
    `In response, several innovative initiatives have emerged. One of the most prominent is <span class="vocab" data-cn="海洋清理组织">The Ocean Cleanup</span>, a nonprofit that has deployed large, passive collection systems designed to funnel debris toward a central hub for extraction. Parallel scientific efforts employ satellite imaging and aerial drones to map debris density, providing crucial data for targeted interventions. Researchers also explore biodegradable alternatives to conventional plastics, aiming to reduce future inputs into the gyre.`,
    `Policy measures are equally vital. International agreements such as the United Nations’ <span class="vocab" data-cn="海洋塑料污染防治公约">Marine Plastic Pollution Convention</span> encourage nations to curb single‑use plastic production and improve waste management infrastructure. Public awareness campaigns further drive consumer behavior change, emphasizing reduction, reuse, and proper recycling. While the path to a cleaner Pacific is long, the combined force of science, technology, and global cooperation offers hope that the patch’s growth can be halted—and perhaps one day reversed.`,
  ],
  vocabulary: [
    { word: 'Charles Moore', cn: '查尔斯·摩尔' },
    { word: 'Great Pacific Garbage Patch', cn: '大太平洋垃圾带' },
    { word: 'gyre', cn: '环流' },
    { word: 'marine debris', cn: '海洋碎屑' },
    { word: 'microplastics', cn: '微塑料' },
    { word: 'photodegradation', cn: '光降解' },
    { word: 'bioaccumulation', cn: '生物累积' },
    { word: 'The Ocean Cleanup', cn: '海洋清理组织' },
    { word: 'Marine Plastic Pollution Convention', cn: '海洋塑料污染防治公约' },
  ],
};

export default article;
