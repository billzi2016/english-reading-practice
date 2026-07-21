import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Goodyear’s Discovery to War‑Time Tires: The Rise of Synthetic Rubber》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00177 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00177',
  slug: 'from-goodyear-s-discovery-to-war-time-tires-the-rise-of-synthetic-rubber',
  title: 'From Goodyear’s Discovery to War‑Time Tires: The Rise of Synthetic Rubber',
  subtitle: 'How a 19th‑century chemical breakthrough fueled an industry that survived wartime shortages',
  summary: 'A narrative tracing the scientific and industrial milestones that turned synthetic rubber into a cornerstone of modern mobility.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the mid‑19th century, a chemist named Charles Goodyear stumbled upon <span class="vocab" data-cn="硫化">vulcanization</span>, the process of heating natural rubber with sulfur to create a material that retained elasticity over a wide temperature range. This breakthrough turned raw latex—a sticky, easily degradable substance—into a durable polymer suitable for shoes, hoses, and eventually automobile tires. Goodyear’s discovery not only launched the Goodyear Tire & Rubber Company but also set the stage for an industry that would later confront a global shortage of natural rubber.`,
    `Before synthetic alternatives existed, scientists experimented with turning small molecules called <span class="vocab" data-cn="单体">monomer</span>s into long‑chain polymers through <span class="vocab" data-cn="聚合反应">polymerization</span>. In 1909, German chemist Fritz Hofmann succeeded in polymerizing isoprene to produce a material resembling natural rubber, later identified as <span class="vocab" data-cn="顺式‑1,4‑聚异戊二烯">cis‑1,4‑polyisoprene</span>. Although the product was brittle and unsuitable for mass production, Hofmann’s work proved that artificial rubber could be created from petrochemical feedstocks, sparking interest across Europe and America.`,
    `In the United States, Goodyear joined forces with DuPont and other firms to develop a commercially viable synthetic. By the mid‑1930s, researchers had combined two inexpensive <span class="vocab" data-cn="单体">monomers</span>—styrene and butadiene—to form <span class="vocab" data-cn="苯乙烯–丁二烯橡胶">styrene-butadiene rubber (SBR)</span> through controlled <span class="vocab" data-cn="聚合反应">polymerization</span>. SBR mimicked many properties of natural rubber, especially its grip on wet roads, while being cheaper to produce. Goodyear’s laboratories refined the formulation, adding stabilizers and adjusting the polymer chain length to achieve the right balance of elasticity and wear resistance.`,
    `The performance of any tire depends not only on the base polymer but also on reinforcing fillers. Adding finely ground <span class="vocab" data-cn="炭黑">carbon black</span> dramatically increased tensile strength, abrasion resistance, and heat dissipation. Meanwhile, the <span class="vocab" data-cn="硫化">vulcanization</span> step—heating the rubber with sulfur—created cross‑links between polymer chains, locking them into a resilient network. These two processes together transformed early SBR compounds from laboratory curiosities into robust tires capable of supporting the rapidly expanding fleet of automobiles in the 1930s.`,
    `The outbreak of <span class="vocab" data-cn="第二次世界大战">World War II</span> shattered the supply chain for natural rubber, as Japanese forces occupied major plantations in Southeast Asia. The United States launched the Synthetic Rubber Program, a massive government‑directed effort that mobilized companies like Goodyear, Firestone, and B.F. Goodrich to scale up SBR production. Within two years, American factories were churning out more than 800,000 tons of <span class="vocab" data-cn="合成橡胶">synthetic rubber</span>, enough to keep military vehicles, aircraft tires, and even parachutes operational despite the embargo on natural sources.`,
    `After the war, synthetic rubbers continued to dominate the market. While natural rubber still accounts for a significant share of specialty applications—such as high‑performance gloves—synthetic variants like <span class="vocab" data-cn="腈基橡胶">nitrile rubber (NBR)</span> found niches in fuel hoses, seals, and medical devices because of their resistance to oils and chemicals. The legacy of the wartime surge is evident today: over 70 % of all tires on the road contain a blend of SBR and other synthetic polymers, illustrating how a crisis‑driven innovation reshaped everyday mobility.`,
    `From Charles Goodyear’s accidental discovery of <span class="vocab" data-cn="硫化">vulcanization</span> to the wartime race for <span class="vocab" data-cn="合成橡胶">synthetic rubber</span>, the material’s evolution reflects a blend of scientific curiosity, industrial ambition, and geopolitical pressure. Modern tires owe their reliability not only to advances in polymer chemistry but also to the lessons learned when natural resources became scarce. As the world now looks toward sustainable alternatives like bio‑based polymers, the story of synthetic rubber remains a testament to human ingenuity under duress.`,
  ],
  vocabulary: [
    { word: 'vulcanization', cn: '硫化' },
    { word: 'polymerization', cn: '聚合反应' },
    { word: 'monomer', cn: '单体' },
    { word: 'cis‑1,4‑polyisoprene', cn: '顺式‑1,4‑聚异戊二烯' },
    { word: 'styrene-butadiene rubber (SBR)', cn: '苯乙烯–丁二烯橡胶' },
    { word: 'nitrile rubber (NBR)', cn: '腈基橡胶' },
    { word: 'carbon black', cn: '炭黑' },
    { word: 'synthetic rubber', cn: '合成橡胶' },
    { word: 'World War II', cn: '第二次世界大战' },
  ],
};

export default article;
