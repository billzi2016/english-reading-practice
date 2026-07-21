import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of the Skyscraper: How the Home Insurance Building Pioneered Modern Urban Architecture》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00472 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00472',
  slug: 'the-birth-of-the-skyscraper-how-the-home-insurance-building-pioneered-modern-urban-architecture',
  title: 'The Birth of the Skyscraper: How the Home Insurance Building Pioneered Modern Urban Architecture',
  subtitle: 'How a modest ten‑storey office changed city skylines forever',
  summary: 'Explore how Chicago’s Home Insurance Building introduced structural innovations that made today’s skyscrapers possible.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1880s American cities were bursting at the seams. Rapid industrialisation and a flood of migrants created an unprecedented demand for office space, yet downtown lots were tiny and expensive. Architects and developers began to ask a daring question: could a building rise far above its neighbours without collapsing under its own weight? The answer would soon be found in a modest ten‑storey structure that changed the language of architecture forever.`,
    `Completed in 1885, the <span class="vocab" data-cn="住宅保险大楼">Home Insurance Building</span> stood at 138 feet (42 m) on Chicago’s bustling Loop. Designed by William Le Baron Jenney, a former railroad engineer, it was not its height that earned fame but the way it was built. Rather than relying on massive stone walls to support each floor, Jenney employed an innovative <span class="vocab" data-cn="钢框架">steel frame</span> skeleton that carried the building’s load, freeing the exterior from structural duties for the first time.`,
    `The shift from traditional <span class="vocab" data-cn="承重砌体">load‑bearing masonry</span> to a skeletal steel structure was revolutionary. By distributing weight through columns and beams, the frame could support far greater heights while using far less material. This also meant that walls could be thinner and punctuated with larger windows, flooding interiors with natural light—a stark contrast to the dim, cramped rooms of earlier tenements.`,

    `Equally important was the advent of the safe <span class="vocab" data-cn="电梯">elevator</span>. Elisha Otis’s 1853 safety brake had already made vertical travel feasible, but it was only in the 1880s that reliable electric elevators became common in commercial buildings. With a few button pushes, workers could reach the upper floors without climbing endless staircases, turning height from a novelty into a practical asset for businesses.`,

    `The Home Insurance Building also gave birth to what historians call the <span class="vocab" data-cn="芝加哥学派">Chicago School</span> of architecture. Practitioners such as Louis Sullivan championed “form follows function,” stripping away excessive ornamentation and letting the building’s structure speak for itself. Although the true modern <span class="vocab" data-cn="幕墙">curtain wall</span> would not appear until later, Jenney’s design hinted at a future where façades could be hung like curtains on an invisible frame, allowing unprecedented flexibility in design.`,

    `The impact of this experiment rippled across the United States. Within two decades, cities from New York to San Francisco were dotted with steel‑frame towers that pierced the clouds. The concept of vertical density reshaped urban planning, leading to zoning laws that regulated height, setbacks, and mixed‑use development. Iconic successors such as the Flatiron Building (1902) and the Empire State Building (1931) traced their lineage directly back to Jenney’s modest prototype.`,

    `Nevertheless, the early skyscraper era faced serious challenges. The Great Chicago Fire of 1871 had taught architects that fire resistance was non‑negotiable. To address this, the Home Insurance Building’s steel members were encased in a protective layer of terra cotta and brick—a primitive form of <span class="vocab" data-cn="防火材料">fireproofing</span> that would evolve into sophisticated sprinkler systems and fire‑rated claddings used today.`,

    `Today, the original Home Insurance Building no longer stands—demolished in 1931—but its spirit lives on in every glass‑clad tower that defines modern skylines. By daring to replace stone with steel, to trust elevators over stairs, and to let structure become aesthetic, Jenney set a template for urban architecture that continues to inspire engineers, designers, and city dwellers around the world.`,
  ],
  vocabulary: [
    { word: 'Home Insurance Building', cn: '住宅保险大楼' },
    { word: 'steel frame', cn: '钢框架' },
    { word: 'load‑bearing masonry', cn: '承重砌体' },
    { word: 'elevator', cn: '电梯' },
    { word: 'Chicago School', cn: '芝加哥学派' },
    { word: 'curtain wall', cn: '幕墙' },
    { word: 'fireproofing', cn: '防火材料' },
  ],
};

export default article;
