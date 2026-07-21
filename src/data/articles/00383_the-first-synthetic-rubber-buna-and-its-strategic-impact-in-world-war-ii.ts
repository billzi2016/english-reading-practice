import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Synthetic Rubber (Buna) and Its Strategic Impact in World War II》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00383 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00383',
  slug: 'the-first-synthetic-rubber-buna-and-its-strategic-impact-in-world-war-ii',
  title: 'The First Synthetic Rubber (Buna) and Its Strategic Impact in World War II',
  subtitle: 'How a laboratory breakthrough reshaped wartime logistics',
  summary: 'An exploration of Buna’s invention, production, and its decisive role in the Second World War.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Before the outbreak of World War II, most nations relied on <span class="vocab" data-cn="天然橡胶">natural rubber</span> harvested from Southeast Asian plantations. When Japan seized Malaya and the Dutch East Indies in early 1942, the Allied blockade cut off roughly ninety percent of the world’s supply, leaving Germany scrambling for an alternative that could keep its armored divisions moving.`,
    `The German chemical conglomerate IG Farben had already been experimenting with artificial elastomers since the late 1920s. Their breakthrough came in 1936 when chemists Karl Ziegler and Walter Bock perfected a <span class="vocab" data-cn="聚合反应">polymerization</span> process that combined butadiene—a by‑product of oil cracking—with sodium to form polybutadiene chains. The resulting material, marketed as “Buna” (from “butadiene” and “Na” for sodium), was the world’s first commercially viable <span class="vocab" data-cn="合成橡胶">synthetic rubber</span>.`,
    `Scaling Buna from laboratory flasks to industrial vats required massive investment. IG Farbeen built a sprawling plant at Leuna, near Leipzig, equipped with high‑temperature reactors and specialized <span class="vocab" data-cn="催化剂">catalysts</span> that accelerated the polymer growth. By 1940 the facility could produce several thousand tons of rubber annually—enough to outfit thousands of military vehicles, aircraft, and even some infantry boots.`,
    `For the German war machine, Buna was more than a material; it became a <span class="vocab" data-cn="战略资源">strategic resource</span>. The Wehrmacht’s Panzer divisions depended on reliable tires for rapid advances across the Eastern Front, while the Luftwaffe needed flexible yet durable rubber for bomber landing gear. When Allied bombers began targeting oil refineries, Buna’s independence from natural‑rubber supply lines gave Germany a fleeting logistical edge that prolonged its offensive capabilities.`,
    `The Allies quickly recognized the danger of a synthetic‑rubber monopoly. In the United States, the government launched the “Synthetic Rubber Program” in 1942, funding research at institutions such as the University of Akron and Mobil Oil. American chemists adapted the German butadiene route, but they also pioneered an alternative using ethanol‑derived acetylene to produce polyisoprene. By war’s end, U.S. factories were churning out over ten million tons of synthetic rubber annually, dwarfing Germany’s output and ensuring that Allied forces would never again be crippled by a single supply disruption.`,
    `After 1945, the legacy of Buna lived on in peacetime industry. The polymerization techniques refined at Leuna laid the groundwork for modern polybutadiene and styrene‑butadiene rubber (SBR), which dominate today’s tire market. Moreover, the wartime experience taught engineers that a diversified supply chain—mixing natural and synthetic sources—was essential for both economic stability and national security.`,
    `In retrospect, Buna illustrates how a single scientific breakthrough can ripple through geopolitics, economics, and everyday life. The race to replace a scarce commodity sparked innovations that not only helped one side sustain its war effort but also accelerated the global transition toward synthetic materials—a shift whose impact we still feel every time a car rolls down the highway.`,
  ],
  vocabulary: [
    { word: 'natural rubber', cn: '天然橡胶' },
    { word: 'synthetic rubber', cn: '合成橡胶' },
    { word: 'polymerization', cn: '聚合反应' },
    { word: 'catalyst', cn: '催化剂' },
    { word: 'strategic resource', cn: '战略资源' },
    { word: 'butadiene', cn: '丁二烯' },
  ],
};

export default article;
