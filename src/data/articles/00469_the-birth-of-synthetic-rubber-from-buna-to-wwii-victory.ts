import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of Synthetic Rubber: From Buna to WWII Victory》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00469 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00469',
  slug: 'the-birth-of-synthetic-rubber-from-buna-to-wwii-victory',
  title: 'The Birth of Synthetic Rubber: From Buna to WWII Victory',
  subtitle: 'How chemistry turned a wartime shortage into a lasting industry',
  summary: 'A narrative of the scientific breakthroughs and massive industrial mobilization that created synthetic rubber during World War II.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Before the late 1930s, the world relied almost entirely on natural rubber harvested from Hevea trees in Southeast Asia. When geopolitical tensions threatened those supply routes, engineers and chemists began to explore <span class="vocab" data-cn="聚合">polymerization</span>—the process of linking small molecules into long chains—as a way to mimic the elastic properties of natural latex.`,
    `In Germany, a team at IG Farbe led by Fritz Hofmann succeeded in converting <span class="vocab" data-cn="丁二烯">butadiene</span>, a volatile petroleum‑derived gas, into a rubbery material they called “Buna” (from *Bu*ta­dien + *Na* for sodium catalyst). This marked the first commercially viable <span class="vocab" data-cn="合成橡胶">synthetic rubber</span> and demonstrated that a carefully controlled reaction could produce elasticity without any plant source.`,
    `The key to Buna’s production was a high‑temperature <span class="vocab" data-cn="催化剂">catalyst</span> system that encouraged the butadiene <span class="vocab" data-cn="单体">monomer</span> to link into polybutadiene chains. By adjusting temperature and pressure, chemists could tune the polymer’s molecular weight, achieving a material that was both resilient and resistant to oil—a crucial advantage for military applications.` ,
    `Across the Atlantic, American researchers at B.F. Goodrich built on the German discovery by adding <span class="vocab" data-cn="苯乙烯-丁二烯橡胶">styrene‑butadiene rubber</span> (<span class="vocab" data-cn="共聚物">copolymer</span>) to the mix. The presence of styrene improved abrasion resistance, while butadiene retained flexibility. This new formulation, later known as SBR, quickly became the backbone of civilian tire production and, more importantly, a strategic reserve for the armed forces.` ,
    `When the United States entered World II, the Emergency Rubber Project mobilized dozens of factories to scale up synthetic rubber output. Workers mastered large‑scale <span class="vocab" data-cn="硫化">vulcanization</span>, a heat‑induced cross‑linking step that gave the polymer its final strength and elasticity. Within three years, synthetic rubber supplied over 90 % of the nation’s tire needs, keeping tanks, aircraft, and supply trucks moving on the front lines.` ,
    `The impact was profound: by 1945, the United States produced more than 800 million pounds of synthetic rubber annually, a figure that dwarfed pre‑war natural imports. This surge not only sustained the <span class="vocab" data-cn="战时经济">war economy</span> but also demonstrated how rapid scientific innovation could be turned into massive industrial capacity under pressure.` ,
    `After the war, the synthetic rubber industry did not fade. Advances in polymer chemistry gave rise to <span class="vocab" data-cn="丁腈橡胶">nitrile rubber</span>, which resists oil and chemicals better than its predecessors, and to high‑performance blends used in everything from aircraft tires to medical gloves. The legacy of Buna and SBR lives on in the billions of miles driven each year.` ,
    `Looking back, the story of synthetic rubber illustrates a broader lesson: scarcity can accelerate invention, and coordinated effort between scientists, engineers, and policymakers can transform a laboratory breakthrough into a decisive factor on the world stage.`
  ],
  vocabulary: [
    { word: 'polymerization', cn: '聚合' },
    { word: 'butadiene', cn: '丁二烯' },
    { word: 'synthetic rubber', cn: '合成橡胶' },
    { word: 'catalyst', cn: '催化剂' },
    { word: 'monomer', cn: '单体' },
    { word: 'styrene‑butadiene rubber', cn: '苯乙烯-丁二烯橡胶' },
    { word: 'copolymer', cn: '共聚物' },
    { word: 'vulcanization', cn: '硫化' },
    { word: 'war economy', cn: '战时经济' },
    { word: 'nitrile rubber', cn: '丁腈橡胶' }
  ],
};

export default article;
