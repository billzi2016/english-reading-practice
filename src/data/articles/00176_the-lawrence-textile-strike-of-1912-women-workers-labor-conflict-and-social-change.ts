import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Lawrence Textile Strike of 1912: Women Workers, Labor Conflict, and Social Change》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00176 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00176',
  slug: 'the-lawrence-textile-strike-of-1912-women-workers-labor-conflict-and-social-change',
  title: 'The Lawrence Textile Strike of 1912: Women Workers, Labor Conflict, and Social Change',
  subtitle: 'How immigrant women sparked a landmark labor battle in “Bread and Roses” America.',
  summary: 'A vivid account of the 1912 Lawrence strike, its key players, tactics, and lasting impact on workers’ rights.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In January 1912, the mill town of Lawrence, Massachusetts—nicknamed “the Immigrant City”—was rocked by a sudden surge of discontent. The catalyst was a new state law that cut the workday for <span class="vocab" data-cn="纺织工人">textile workers</span> from twelve to ten hours, but mill owners simply reduced wages proportionally, leaving families earning even less. For the town’s largely foreign‑born workforce—Italians, Poles, Lithuanians, and especially a large contingent of women from Portugal and Russia—the change felt like a betrayal that threatened their fragile survival.</span>`,
    `The strike was organized by the <span class="vocab" data-cn="工业工人联合会">Industrial Workers of the World</span> (IWW), a radical union that believed in “one big union” for all workers regardless of skill or nationality. Unlike traditional craft unions, the IWW welcomed unskilled laborers and emphasized direct action. Their leaders quickly recognized that women, who made up more than half of Lawrence’s mill workforce, could become the strike’s most visible symbol. By encouraging women to march, chant, and even confront police, the IWW turned gender expectations into a strategic advantage.</span>`,
    `On February 1, roughly 20,000 workers—most of them women—walked out of the mills, demanding not only fair wages but also an end to the exploitative “pay‑cut” policy. The strikers set up makeshift kitchens in the town’s streets and organized a network of <span class="vocab" data-cn="互助基金">mutual aid</span> committees that collected donations from sympathetic groups across New England. Notably, the famous poet and activist <span class="vocab" data-cn="露丝·巴克斯特">Ruth Baker</span> (a pseudonym for a local organizer) wrote letters to newspapers describing the harsh conditions, helping to attract national attention.</span>`,
    `The mill owners responded with a classic “lockout” strategy: they hired private security and called on the state militia. Police raids often turned violent; on February 20, a confrontation at the Everett Mill resulted in several injuries when officers used clubs against women carrying baskets of food. Yet the strikers’ resolve hardened. They adopted the slogan “<span class="vocab" data-cn="面包与玫瑰">Bread and Roses</span>,” demanding both economic security (bread) and dignity, beauty, and cultural enrichment (roses). The phrase, popularized later by poet James Oppenheim, captured the dual nature of their struggle.</span>`,
    `Media coverage played a decisive role. Reporter <span class="vocab" data-cn="弗雷德里克·马尔科姆">Frederick Malcolm</span> from the New York Times sent dispatches that highlighted the bravery of the women and the harsh retaliation they faced. These stories prompted donations from labor sympathizers in Boston, Chicago, and even as far away as San Francisco. By early March, the strike had raised enough funds to feed thousands for weeks, turning a local dispute into a national cause célèbre.</span>`,
    `Negotiations finally began when Governor Eugene Foss sent a commission to mediate. The mill owners, pressured by dwindling production and growing public scrutiny, agreed to restore the ten‑hour workday without wage cuts and to raise wages by 5 percent—a modest victory but a symbolic one. More importantly, the strike demonstrated that women could lead large‑scale industrial action, challenging prevailing notions of gender roles in both the workplace and the broader society.</span>`,
    `The legacy of the Lawrence strike extended far beyond the immediate settlement. It inspired subsequent labor actions, such as the 1913 Paterson silk strike, and contributed to the growth of the IWW’s membership during the 1910s. Socially, it sparked discussions about immigrant rights, women’s participation in public protest, and the need for broader social safety nets—issues that would later surface during the New Deal era. In retrospect, the “Bread and Roses” strike remains a vivid illustration of how ordinary women, armed with solidarity and determination, can reshape labor politics and spark lasting social change.`,
  ],
  vocabulary: [
    { word: 'textile workers', cn: '纺织工人' },
    { word: 'Industrial Workers of the World', cn: '工业工人联合会' },
    { word: 'mutual aid', cn: '互助基金' },
    { word: 'Bread and Roses', cn: '面包与玫瑰' },
    { word: 'Frederick Malcolm', cn: '弗雷德里克·马尔科姆' },
    { word: 'immigrant rights', cn: '移民权利' },
  ],
};

export default article;
