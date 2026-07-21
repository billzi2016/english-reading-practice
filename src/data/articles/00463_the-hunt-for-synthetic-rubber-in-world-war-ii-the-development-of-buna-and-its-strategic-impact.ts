import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Hunt for Synthetic Rubber in World War II》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00463 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00463',
  slug: 'the-hunt-for-synthetic-rubber-in-world-war-ii-the-development-of-buna-and-its-strategic-impact',
  title: 'The Hunt for Synthetic Rubber in World War II',
  subtitle: 'How Buna was born and why it mattered to the war effort',
  summary: 'A narrative of the race to replace natural rubber with synthetic alternatives during WWII, focusing on Germany’s Buna program and its strategic consequences.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Before the outbreak of World War II, more than ninety percent of the world’s <span class="vocab" data-cn="合成橡胶">synthetic rubber</span> demand was met by natural latex harvested in Southeast Asia. The United States, Britain and their allies relied heavily on plantations in British Malaya, the Dutch East Indies and French Indochina. When Japan seized these territories in early 1942, the supply chain collapsed, creating an urgent <span class="vocab" data-cn="石油危机">oil crisis</span> that threatened everything from aircraft tires to tank tracks.`,
    `The Allies responded quickly. In the United States, the government established the <span class="vocab" data-cn="美国橡胶研究实验室">U.S. Rubber Research Laboratory</span> at the National Bureau of Standards, mobilising chemists, engineers and industrial plants to develop a large‑scale synthetic program. By late 1942, the “Synthetic Rubber Program” had coordinated more than thirty factories, eventually producing over ten million tons of material by war’s end—a feat that reshaped post‑war polymer chemistry.` ,
    `Across the Atlantic, Nazi Germany faced a similar dilemma but with far fewer resources. The country’s pre‑war synthetic rubber effort centered on <span class="vocab" data-cn="丁二烯-苯乙烯共聚物">Buna</span> (short for “butadiene–nafta”), a polymer made by copolymerising butadiene with styrene. The project was spearheaded by the massive chemical conglomerate <span class="vocab" data-cn="德国化学工业巨头">IG Farben</span>, which had already mastered large‑scale ammonia synthesis for explosives. Buna’s chemistry required a delicate <span class="vocab" data-cn="聚合反应">polymerization</span> process that could only be carried out under strict temperature and pressure controls.` ,
    `In 1942, IG Farben broke ground on the infamous “Buna‑Werk” plant near Leuna, deep in central Germany. The facility was built with forced labor from nearby concentration camps, a grim reminder of how wartime urgency often overrode humanitarian concerns. Technically, the plant struggled: early batches were brittle and prone to cracking, especially at low temperatures—a serious flaw for military vehicles operating on the Eastern Front.` ,
    `Despite these setbacks, by mid‑1943 Buna began to flow in usable quantities. The German army equipped a modest portion of its trucks and aircraft with synthetic tires, allowing limited continuation of mechanised operations after the Allied naval blockade cut off remaining natural rubber shipments. However, production never approached the scale needed for total substitution; estimates suggest that at peak output the plant supplied only about ten percent of Germany’s rubber requirement.` ,
    `Allied intelligence quickly recognised Buna’s strategic importance. Strategic bombing raids in 1944 targeted the Leuna complex, disrupting supply and forcing the Germans to divert precious fuel and raw material to repair efforts. Meanwhile, the United Kingdom accelerated its own synthetic program, developing “Buna‑S” (a styrene–butadiene rubber) at the Ministry of Supply’s facilities in Wales, further reducing reliance on colonial sources.` ,
    `When the war ended, the legacy of the synthetic rubber race endured. The massive industrial capacity built for Buna and its Allied counterparts laid the groundwork for the post‑war polymer boom, leading to everyday products from car tires to medical gloves. Moreover, the experience demonstrated how a single material shortage could reshape entire economies and drive rapid scientific innovation under pressure.` ,
  ],
  vocabulary: [
    { word: 'synthetic rubber', cn: '合成橡胶' },
    { word: 'oil crisis', cn: '石油危机' },
    { word: 'U.S. Rubber Research Laboratory', cn: '美国橡胶研究实验室' },
    { word: 'Buna', cn: '丁二烯-苯乙烯共聚物' },
    { word: 'IG Farben', cn: '德国化学工业巨头' },
    { word: 'polymerization', cn: '聚合反应' },
  ],
};

export default article;
