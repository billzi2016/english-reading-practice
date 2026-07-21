import type { Article } from '../../types/index.ts';

// 文件意图：维护《Roy Plunkett’s Accidental Invention of Teflon: From Fluoropolymer to Everyday Use》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00307 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00307',
  slug: 'roy-plunkett-s-accidental-invention-of-teflon-from-fluoropolymer-to-everyday-use',
  title: 'Roy Plunkett’s Accidental Invention of Teflon: From Fluoropolymer to Everyday Use',
  subtitle: 'How a serendipitous lab mishap created the world’s most famous non‑stick material.',
  summary: 'The story of Roy Plunkett, his 1938 discovery of polytetrafluoroethylene, and how it moved from aerospace labs to kitchen tables.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1938 a quiet chemist named <span class="vocab" data-cn="罗伊·普朗克特">Roy Plunkett</span> was working in a modest DuPont laboratory in Wilmington, Delaware. He was part of a team tasked with finding new refrigerants to replace dangerous chlorofluorocarbons. The atmosphere was ordinary—glassware clinked, the hum of a refrigeration unit filled the room—but what happened next would change material science forever.`,
    `Plunkett’s experiment involved compressing tetrafluoroethylene gas into a steel cylinder and cooling it to a very low temperature, a process known as <span class="vocab" data-cn="低温的">cryogenic</span> treatment. The goal was simply to store the gas safely for later polymerization tests. After sealing the cylinder, he left it untouched for several days, assuming nothing remarkable would occur without deliberate initiation.`,
    `When Plunkett returned, he found that the cylinder’s pressure had dropped dramatically and a white, waxy solid clung to the interior walls. The unexpected material was hard, slippery, and resistant to almost every chemical he tried. He later described the moment as “a surprise of the highest order,” because the gas had polymerized on its own without any added catalyst—a rare <span class="vocab" data-cn="工业事故">industrial accident</span> that turned into a breakthrough.`,

    `The solid turned out to be polytetrafluoroethylene, commonly abbreviated as <span class="vocab" data-cn="聚四氟乙烯">PTFE</span>. As a <span class="vocab" data-cn="氟聚合物">fluoropolymer</span>, PTFE’s carbon‑fluorine bonds are among the strongest in organic chemistry, giving it an extraordinary resistance to heat, chemicals, and electrical breakdown. The underlying reaction is a form of <span class="vocab" data-cn="聚合反应">polymerization</span> where individual tetrafluoroethylene monomers link together into long chains, forming a crystalline lattice that slides past itself with minimal friction.`,

    `DuPont quickly recognized PTFE’s potential for high‑performance applications. Its low coefficient of friction made it ideal for aircraft hydraulic systems and missile components during World War II. Moreover, its excellent <span class="vocab" data-cn="介电性能">dielectric</span> properties meant it could insulate wiring in harsh environments where ordinary plastics would melt or degrade. By the early 1950s, PTFE was being used in aerospace seals, gaskets, and even as a coating for the exterior of rockets.`,

    `The leap from aerospace to kitchen countertops happened almost by accident again. In 1964, a DuPont marketing team demonstrated PTFE’s “non‑stick” quality by cooking an egg on a coated pan—something that would have stuck to ordinary metal. The public loved it, and the product was rebranded as <span class="vocab" data-cn="特氟龙">Teflon</span>. Within a decade, Teflon‑coated cookware became a household staple, celebrated for its ease of cleaning and reduced need for cooking oils.`,

    `Today PTFE is everywhere: from medical implants that must not react with body fluids, to the inner linings of chemical reactors, to the insulation on high‑frequency cables. While its durability is an advantage, concerns have arisen about the environmental impact of perfluorinated compounds released during manufacturing. Modern research focuses on greener synthesis routes and recycling methods, ensuring that this accidental marvel continues to serve society responsibly.`,
  ],
  vocabulary: [
    { word: 'Roy Plunkett', cn: '罗伊·普朗克特' },
    { word: 'cryogenic', cn: '低温的' },
    { word: 'industrial accident', cn: '工业事故' },
    { word: 'fluoropolymer', cn: '氟聚合物' },
    { word: 'polymerization', cn: '聚合反应' },
    { word: 'dielectric', cn: '介电性能' },
    { word: 'Teflon', cn: '特氟龙' },
  ],
};

export default article;
