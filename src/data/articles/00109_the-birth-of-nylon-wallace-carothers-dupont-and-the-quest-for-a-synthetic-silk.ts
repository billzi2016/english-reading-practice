import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of Nylon: Wallace Carothers, DuPont, and the Quest for a Synthetic Silk》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00109 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00109',
  slug: 'the-birth-of-nylon-wallace-carothers-dupont-and-the-quest-for-a-synthetic-silk',
  title: 'The Birth of Nylon: Wallace Carothers, DuPont, and the Quest for a Synthetic Silk',
  subtitle: 'How polymer chemistry turned a wartime need into a fashion revolution',
  summary: 'Explore the scientific breakthrough behind nylon, its creator Wallace Carothers, and DuPont’s daring gamble on a synthetic silk.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1930s, the American chemical giant DuPont was looking for a new market beyond explosives. The company hired a young chemist named <span class="vocab" data-cn="华莱士·卡罗瑟斯">Wallace Carothers</span>, who had just earned his Ph.D. in organic chemistry at Harvard. Carothers brought with him the emerging theory of <span class="vocab" data-cn="聚合反应；把小分子连接成大分子的过程">polymerization</span>, a concept that promised to turn simple molecules into long, chain‑like structures with unprecedented properties. DuPont’s research labs in Wilmington, Delaware, became the laboratory where this theory would be put to the test.</`,
    `Carothers’ team focused on a class of reactions called <span class="vocab" data-cn="缩合反应；两分子失去小分子（如水）而结合的化学过程">condensation reaction</span>. By reacting diamines with diacids, they could create repeating units that linked together like beads on a string. The resulting material was initially called “polyamide” because each link contained an amide group (–CONH–). Early experiments produced fibers that were strong but brittle; the challenge was to control the degree of crystallinity and achieve a balance between strength and flexibility.</`,
    `A breakthrough came in 1935 when Carothers discovered that by carefully controlling temperature and removing water as it formed, he could produce a polymer with high <span class="vocab" data-cn="分子量；聚合物链的长度指标">molecular weight</span> and regular chain alignment. The new polymer was both tough and elastic, qualities reminiscent of natural silk but without the expense and variability of sericulture. DuPont’s marketing department quickly coined the name “nylon” to evoke a sense of modernity and durability.</`,
    `DuPont faced a risky decision: invest heavily in scaling up a laboratory curiosity into an industrial product. In 1938, the company built a pilot plant capable of spinning nylon fibers on a commercial scale. The first batches were used for toothbrush bristles and fishing lines—applications that demanded strength but not necessarily aesthetic appeal. However, the true test arrived when fashion houses expressed interest in using nylon as a substitute for silk in women’s stockings.</`,
    `When World War II erupted, nylon’s strategic value skyrocketed. Its resistance to rot and high tensile strength made it ideal for parachutes, ropes, and tire cords—critical supplies for the Allied forces. The war effort accelerated production, and by 1942 DuPont was churning out millions of yards of nylon each month. Meanwhile, on the home front, women eagerly awaited the post‑war release of “nylon stockings,” which would become a symbol of luxury and modern femininity.</`,
    `The success of nylon also sparked a wave of research into other synthetic polymers. Carothers’ work laid the groundwork for later inventions such as polyester, acrylic fibers, and high‑performance plastics like Kevlar. Tragically, Wallace Carothers died in 1937 at the age of 38, never seeing the full impact of his discovery. Yet his legacy endures every time a pair of stockings glides over skin or a parachute unfurls safely from an aircraft.</`,
    `Today, nylon remains ubiquitous—from sportswear and carpets to automotive parts and medical devices. Its story illustrates how a blend of curiosity‑driven science, corporate risk‑taking, and historical circumstance can produce a material that reshapes both industry and culture. The quest for a synthetic silk not only fulfilled a wartime necessity but also gave rise to a lasting chapter in the history of modern materials.</`,
  ],
  vocabulary: [
    { word: 'Wallace Carothers', cn: '华莱士·卡罗瑟斯' },
    { word: 'polymerization', cn: '聚合反应；把小分子连接成大分子的过程' },
    { word: 'condensation reaction', cn: '缩合反应；两分子失去小分子（如水）而结合的化学过程' },
    { word: 'molecular weight', cn: '分子量；聚合物链的长度指标' },
    { word: 'crystalline', cn: '晶体结构的；有序排列的' },
    { word: 'synthetic silk', cn: '人造丝；模仿天然蚕丝的合成纤维' },
  ],
};

export default article;
