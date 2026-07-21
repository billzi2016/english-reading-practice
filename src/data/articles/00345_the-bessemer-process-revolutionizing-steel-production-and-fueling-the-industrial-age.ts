import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Bessemer Process: Revolutionizing Steel Production and Fueling the Industrial Age》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00345 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00345',
  slug: 'the-bessemer-process-revolutionizing-steel-production-and-fueling-the-industrial-age',
  title: 'The Bessemer Process: Revolutionizing Steel Production and Fueling the Industrial Age',
  subtitle: 'How a 19th‑century invention reshaped industry and infrastructure',
  summary: 'An engaging story of Henry Bessemen’s breakthrough that made steel cheap, abundant, and central to modern civilization.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the mid‑1800s industrial world still relied on costly, inconsistent iron, a single invention turned steel from a luxury into a staple. The <span class="vocab" data-cn="贝塞麦法">Bessemer Process</span>—named after its British inventor Henry Bessemer—promised to melt large quantities of metal in minutes and produce a product strong enough for railways, bridges, and skyscrapers. Its rapid adoption sparked a cascade of engineering feats that defined the Industrial Age, making the story of steel production as dramatic as any adventure novel.`,
    `Before Bessemer’s breakthrough, most iron came from “<span class="vocab" data-cn="生铁">pig iron</span>,” a brittle alloy poured into sand‑cooled molds. Pig iron contained high levels of carbon and other impurities such as silicon, manganese, and sulfur, which made it hard to shape and prone to cracking. To turn pig iron into usable material, craftsmen had to rehearse labor‑intensive methods like puddling or forge‑welding, processes that could not meet the soaring demand for rails and machinery.`,
    `Bessemer’s genius lay in turning a problem—excess carbon—into a solution. He designed a massive, pear‑shaped vessel called a “<span class="vocab" data-cn="转炉">converter</span>.” Molten pig iron was poured into the converter, and a powerful stream of air was forced upward through a <span class="vocab" data-cn="鼓风管">blowpipe</span>. The incoming oxygen triggered rapid <span class="vocab" data-cn="氧化反应">oxidation</span> of carbon, silicon, and manganese. This exothermic reaction released heat, keeping the metal molten without external fuel and simultaneously lowering its <span class="vocab" data-cn="碳含量">carbon content</span>. Within about 20 minutes, the once‑brittle iron emerged as a uniform, high‑strength steel.`,
    `The process was not without hurdles. Early converters struggled with controlling temperature spikes, which could scorch the metal and introduce cracks. Moreover, impurities like phosphorus and nitrogen resisted oxidation, leading to brittle steel in certain ores. Bessemer’s team eventually introduced “basic” linings—using materials such as dolomite—to neutralize acidic oxides and expand the range of usable raw material. Meanwhile, the later <span class="vocab" data-cn="开放式高炉">open hearth furnace</span> offered a slower but more controllable alternative, allowing engineers to fine‑tune composition for specialized applications.`,
    `The economic ripple was immediate and profound. Steel prices fell dramatically, making it affordable for massive infrastructure projects. The United States completed its <span class="vocab" data-cn="横贯大陆铁路">transcontinental railroad</span> in 1869, stitching together coasts with steel rails that could bear heavier loads than iron. In Europe, the Eiffel Tower—constructed in 1887‑89—stood as a gleaming testament to what cheap, strong steel could achieve. Shipbuilders replaced wooden hulls with steel frames, increasing cargo capacity and safety, while architects began dreaming of taller skyscrapers, confident that steel skeletons would support soaring heights.`,
    `Although the Bessemer Process was eventually superseded by the <span class="vocab" data-cn="基本氧气转炉">basic oxygen steelmaking</span> method in the mid‑20th century, its legacy endures. It demonstrated that large‑scale metallurgical innovation could reshape economies and societies within a generation. Modern steel plants still rely on the same principles of rapid oxidation and heat management first proven by Bessemer’s converter. Moreover, the process sparked an awareness of resource efficiency—using air instead of coal to fuel melting—a concept that continues to guide sustainable manufacturing today.`,
  ],
  vocabulary: [
    { word: 'Bessemer Process', cn: '贝塞麦法' },
    { word: 'pig iron', cn: '生铁' },
    { word: 'converter', cn: '转炉' },
    { word: 'blowpipe', cn: '鼓风管' },
    { word: 'oxidation', cn: '氧化反应' },
    { word: 'carbon content', cn: '碳含量' },
    { word: 'open hearth furnace', cn: '开放式高炉' },
    { word: 'transcontinental railroad', cn: '横贯大陆铁路' },
    { word: 'basic oxygen steelmaking', cn: '基本氧气转炉' },
  ],
};

export default article;
