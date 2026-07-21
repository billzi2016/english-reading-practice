import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Battle Over the Metric System》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00412 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00412',
  slug: 'the-battle-over-the-metric-system-why-some-nations-still-resist-standard-units',
  title: 'The Battle Over the Metric System',
  subtitle: 'Why Some Nations Still Resist Standard Units',
  summary: 'A narrative exploration of the historical, cultural and political forces that keep a few countries from fully embracing the metric system.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the chaotic summer of 1790, a group of French scientists gathered in Paris to replace the bewildering patchwork of local measures with something universal. Their creation, the <span class="vocab" data-cn="公制系统">metric system</span>, was built on the simple idea that a meter could be defined by the Earth’s circumference and a kilogram by water’s mass. The proposal promised fairness for merchants, clarity for engineers, and a symbol of Enlightenment rationality—a promise that would soon ripple across continents.`,
    `The new system spread quickly through much of Europe, but not without resistance. In Britain, centuries of <span class="vocab" data-cn="英制单位">imperial units</span>—the pound, the yard, the gallon—were woven into daily life and legal contracts. When the British Parliament debated adopting the metric system in the 1860s, many lawmakers argued that abandoning familiar measures would undermine “national character.” The debate highlighted how measurement can become a proxy for identity, not just science.`,
    `Across the Atlantic, the United States faced its own dilemma. Early federal <span class="vocab" data-cn="立法">legislation</span> in 1866 authorized metric use, yet the country’s sprawling railroads and burgeoning automobile industry clung to miles, pounds, and gallons because re‑tooling would cost billions. Public opinion surveys from the 1970s show that even when experts warned of trade disadvantages, many Americans viewed the metric system as a foreign imposition, preferring the familiar “hand‑feel” of inches on a ruler.`,
    `The United Kingdom eventually compromised. By the 1990s, most consumer goods were sold in grams and liters, but road signs still displayed miles per hour, and people continued to order milk in pints. This duality is often described as <span class="vocab" data-cn="文化惯性">cultural inertia</span>—the tendency of societies to retain long‑standing habits even when practical incentives push otherwise. The result is a patchwork where metric and imperial coexist, each reinforcing the other’s legitimacy.`,
    `Further afield, nations like Myanmar and Liberia lingered outside the global <span class="vocab" data-cn="标准化">standardization</span> movement well into the 21st century. In Myanmar, traditional units such as the “peik” for weight persisted in rural markets, while the government’s 2013 decision to adopt metric measures sparked confusion among traders accustomed to old scales. Liberia, founded by freed American slaves, used a mixture of US customary and British units until a 2020 decree nudged official documents toward metric, though everyday usage remains mixed.`,
    `Why do these pockets of resistance endure? Economists point to the high upfront <span class="vocab" data-cn="转换成本">conversion</span> costs for industries that must replace machinery, retrain staff, and rewrite specifications. Politicians also seize on measurement as a symbol of <span class="vocab" data-cn="主权">sovereignty</span>, arguing that forced adoption erodes national autonomy. Moreover, education systems that teach children in one set of units create generational inertia, making any shift feel like an unnecessary upheaval.`,
    `Nevertheless, global trade pressures are hard to ignore. International supply chains increasingly demand metric specifications, and digital tools now automatically translate between units, reducing the friction once caused by manual conversion. Young engineers in multinational firms report that working with a single system streamlines design reviews and cuts errors—a subtle but persuasive argument for full adoption.`,
    `The battle over measurement is far from settled, but history shows that standards eventually win when they align with economic efficiency and technological convenience. Whether the United States will ever fully abandon its beloved inches or whether Britain will finally replace pints on pub menus remains to be seen. What is clear, however, is that the <span class="vocab" data-cn="度量系统">metric system</span> continues to shape how societies negotiate tradition, identity, and progress.`,
  ],
  vocabulary: [
    { word: 'metric system', cn: '公制系统' },
    { word: 'imperial units', cn: '英制单位' },
    { word: 'standardization', cn: '标准化' },
    { word: 'legislation', cn: '立法' },
    { word: 'conversion', cn: '转换成本' },
    { word: 'cultural inertia', cn: '文化惯性' },
    { word: 'sovereignty', cn: '主权' },
  ],
};

export default article;
