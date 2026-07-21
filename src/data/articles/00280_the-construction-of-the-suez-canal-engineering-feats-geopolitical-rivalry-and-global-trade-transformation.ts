import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Construction of the Suez Canal: Engineering Feats, Geopolitical Rivalry, and Global Trade Transformation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00280 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00280',
  slug: 'the-construction-of-the-suez-canal-engineering-feats-geopolitical-rivalry-and-global-trade-transformation',
  title: 'The Construction of the Suez Canal: Engineering Feats, Geopolitical Rivalry, and Global Trade Transformation',
  subtitle: 'How a narrow waterway reshaped engineering practice and world commerce in the 19th century.',
  summary: 'An engaging narrative about the technical challenges, political struggles, and economic impact surrounding the birth of the Suez Canal.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the mid‑1800s, the idea of linking the Mediterranean Sea directly to the Red Sea seemed almost fantastical. The narrow strip of land separating the two bodies of water is called an <span class="vocab" data-cn="地峡">isthmus</span>, and for centuries it forced ships to round the Cape of Good Hope, adding weeks to voyages between Europe and Asia. Visionaries such as French diplomat <span class="vocab" data-cn="费尔南·德·勒塞普">Ferdinand de Lesseps</span> believed that a man‑made channel could cut this distance dramatically, sparking the grand project that would become the Suez Canal.`,
    `The engineering challenge was unprecedented. Unlike many later canals, the Suez Canal was designed as a <span class="vocab" data-cn="无闸运河">lockless canal</span>, meaning ships would travel through without the aid of lock chambers to raise or lower them. This required meticulous surveying of the terrain, massive earthmoving operations, and careful management of water levels in an arid region where fresh water was scarce. French engineers employed early <span class="vocab" data-cn="液压工程">hydraulic engineering</span> techniques, using steam‑driven dredgers to excavate millions of cubic meters of sand and limestone.`,
    `Financing the venture proved just as complex as the construction itself. The Egyptian ruler at the time, <span class="vocab" data-cn="伊斯梅尔·帕夏">Khedive Ismail</span>, saw the canal as a way to modernize his country and attract foreign investment. He secured loans from European banks, particularly French ones, while also issuing shares that attracted investors worldwide. However, the massive debt burden soon strained Egypt’s treasury, setting the stage for international intrigue and competition over control of the waterway.`,
    `Geopolitical rivalry quickly entered the picture. The British Empire, whose navy depended on swift routes to India and its colonies, watched the French‑led project with suspicion. While France hoped the canal would cement its influence in the Eastern Mediterranean, Britain feared a French‑dominated passage could threaten its own maritime supremacy. This tension culminated in 1875 when the British government purchased a substantial block of shares, effectively gaining a foothold in the canal’s ownership and ensuring that any future decisions would consider British strategic interests.`,
    `Construction officially began in 1859 and progressed despite setbacks such as disease outbreaks, labor disputes, and engineering mishaps. Workers—many of whom were Egyptian peasants conscripted under corvée labor—toiled under harsh desert conditions. By 1869, after a decade of relentless effort, the canal was inaugurated with great fanfare, marked by an elaborate opening ceremony attended by dignitaries from Europe, Egypt, and beyond. The event symbolized not only a triumph of engineering but also a new era of global connectivity.`,
    `The immediate economic impact was staggering. Shipping routes that once required a detour around Africa were shortened by roughly 7,000 kilometers, slashing travel time for goods such as tea, spices, and raw materials. This efficiency boost lowered freight costs and accelerated the flow of commodities between Europe and Asia, fueling industrial growth on both continents. Moreover, the canal’s success inspired other ambitious projects, most notably the <span class="vocab" data-cn="巴拿马运河">Panama Canal</span>, which would later adopt similar lockless concepts in its early designs before ultimately employing locks.`,
    `In the decades that followed, control of the Suez Canal remained a flashpoint for international politics. The 1956 <span class="vocab" data-cn="苏伊士危机">Suez Crisis</span> demonstrated how vital the waterway had become to global trade and national sovereignty. Yet the canal’s original legacy—an engineering marvel that reshaped world commerce—endures. Modern vessels, now far larger than those imagined by de Lesseps, still rely on this narrow passage, a testament to the vision and perseverance of 19th‑century engineers and the complex geopolitical dance that brought it to life.`,
  ],
  vocabulary: [
    { word: 'isthmus', cn: '地峡' },
    { word: 'Ferdinand de Lesseps', cn: '费尔南·德·勒塞普' },
    { word: 'lockless canal', cn: '无闸运河' },
    { word: 'hydraulic engineering', cn: '液压工程' },
    { word: 'Khedive Ismail', cn: '伊斯梅尔·帕夏' },
    { word: 'Panama Canal', cn: '巴拿马运河' },
    { word: 'Suez Crisis', cn: '苏伊士危机' },
  ],
};

export default article;
