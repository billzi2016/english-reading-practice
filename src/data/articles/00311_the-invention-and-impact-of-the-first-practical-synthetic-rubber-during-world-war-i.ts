import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention and Impact of the First Practical Synthetic Rubber during World War I》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00311 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00311',
  slug: 'the-invention-and-impact-of-the-first-practical-synthetic-rubber-during-world-war-i',
  title: 'The Invention and Impact of the First Practical Synthetic Rubber during World War I',
  subtitle: 'How chemistry answered a wartime shortage and reshaped industry',
  summary: 'A story of German chemists turning petroleum into rubber when natural supplies were cut off.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `At the outbreak of World War I, the Allied naval blockade made it nearly impossible for Central Powers to import natural <span class="vocab" data-cn="天然橡胶">rubber</span>. The shortage threatened everything from military boots to telephone cords. German engineers and chemists were forced to look for a domestic substitute, sparking an intense research race that would eventually produce the first practical <span class="vocab" data-cn="合成橡胶">synthetic rubber</span>.`,
    `The breakthrough came in 1909 when Fritz Hofmann, working for the chemical conglomerate IG Farbe, succeeded in polymerising a petroleum‑derived gas called <span class="vocab" data-cn="丁二烯">butadiene</span>. By heating butadiene with sodium metal under high pressure, he created long chains of repeating units—a process known as <span class="vocab" data-cn="聚合反应">polymerization</span>. The resulting material was dubbed “Buna” (from *Bu* for butadiene and *Na* for sodium), marking the birth of a new class of elastomers.`,
    `Early batches of Buna were far from perfect; they were sticky, brittle, and lacked the resilience of natural rubber. To improve its properties, chemists introduced a step called <span class="vocab" data-cn="硫化">vulcanization</span>, where sulfur atoms form bridges—called <span class="vocab" data-cn="交联">cross‑linking</span>—between polymer chains. This gave the material greater elasticity and resistance to heat, making it suitable for tires, gaskets, and even gas mask filters that were desperately needed on the front lines.`,
    `By 1915, IG Farbe had built a pilot plant near Leverkusen capable of producing several tons of Buna per month. The scale‑up was no small feat: engineers had to design high‑pressure reactors, develop reliable methods for separating butadiene from crude oil fractions, and ensure the safety of workers handling volatile chemicals. Nevertheless, the synthetic rubber supplied enough material to keep German artillery wheels turning when natural supplies were completely cut off.`,
    `The impact of Buna extended beyond the battlefield. Civilian factories that previously relied on imported rubber began using the synthetic alternative for conveyor belts and shoe soles, keeping domestic production alive despite the blockade. Moreover, the success demonstrated that a strategic resource could be manufactured from abundant petroleum feedstocks, influencing post‑war industrial policy in both Germany and other nations watching closely.`,
    `After the war, the Treaty of Versailles limited German chemical production, but the knowledge gained persisted. In the 1920s, researchers refined the polymerisation process, leading to more stable grades such as Buna‑S (styrene‑butadiene rubber) and later the development of neoprene by Du Pont in the United States. The legacy of World War I’s synthetic rubber experiment is evident today: modern tires, medical gloves, and countless everyday products trace their lineage back to Hofmann’s laboratory bench.`,
    `The story of Buna reminds us that scarcity can accelerate innovation. When a nation’s supply lines are severed, scientists are compelled to rethink the chemistry of everyday materials. The wartime urgency turned a curious experiment with butadiene into a cornerstone of the global polymer industry—a transformation that continues to shape how we design flexible, durable products in the twenty‑first century.`,
  ],
  vocabulary: [
    { word: 'rubber', cn: '橡胶' },
    { word: 'synthetic rubber', cn: '合成橡胶' },
    { word: 'butadiene', cn: '丁二烯' },
    { word: 'polymerization', cn: '聚合反应' },
    { word: 'vulcanization', cn: '硫化' },
    { word: 'cross‑linking', cn: '交联' },
    { word: 'IG Farbe', cn: '德国化工集团（当时的巨头）' },
  ],
};

export default article;
