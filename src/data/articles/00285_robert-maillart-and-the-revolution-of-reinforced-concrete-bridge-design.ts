import type { Article } from '../../types/index.ts';

// 文件意图：维护《Robert Maillart and the Revolution of Reinforced Concrete Bridge Design》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00285 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00285',
  slug: 'robert-maillart-and-the-revolution-of-reinforced-concrete-bridge-design',
  title: 'Robert Maillart and the Revolution of Reinforced Concrete Bridge Design',
  subtitle: 'How a Swiss engineer reshaped bridge engineering with daring concrete forms',
  summary: 'Explore Robert Maillart’s breakthrough designs that turned reinforced concrete into an elegant structural language.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When the Alpine town of Basel first saw a slender concrete curve spanning the Birs River in 1904, most locals assumed it was a temporary footbridge. In fact, it was the work of a young Swiss civil engineer named <span class="vocab" data-cn="罗伯特·迈亚尔">Robert Maillart</span>, who would soon prove that <span class="vocab" data-cn="钢筋混凝土">reinforced concrete</span> could do far more than support simple loads—it could become a graceful, structural expression in its own right.`,
    `Before Maillart’s interventions, most bridges relied on massive stone arches or steel trusses, both of which demanded heavy foundations and extensive material. Concrete was viewed merely as a cheap filler, lacking the tensile capacity needed for long spans. Maillart recognized that by embedding steel bars within concrete, he could combine concrete’s excellent <span class="vocab" data-cn="抗压强度">compressive strength</span> with steel’s <span class="vocab" data-cn="抗拉强度">tensile strength</span>, creating a material that behaved like a single, monolithic entity. This insight allowed him to design structures that were both thin and strong.`,
    `His first breakthrough came with the 1905 Stauffacher Bridge in Zurich, where he replaced the traditional arch rib with a slender, curved slab that acted as an <span class="vocab" data-cn="拱桥">arch bridge</span> while simultaneously serving as a deck. By shaping the concrete into a continuous curve, Maillart eliminated unnecessary material and reduced the bridge’s weight by nearly half compared to contemporary stone arches. The result was a structure that seemed to float over the water, its elegance rooted in pure structural logic rather than decorative excess.`,

    `Maillart’s most celebrated work, the Salginatobel Bridge (1930), pushed his ideas even further. Spanning a deep Alpine gorge with a single 90‑meter <span class="vocab" data-cn="三铰拱">three‑hinged arch</span>, the bridge used only a thin concrete shell and a handful of steel reinforcement. The hinges at each support allowed the arch to accommodate temperature changes and settlement without inducing excessive <span class="vocab" data-cn="剪力">shear force</span>. Visitors today still marvel at how such a modest amount of material can carry heavy traffic across a dramatic landscape, a testament to Maillart’s mastery of form‑following‑function.`,

    `Another hallmark of his design philosophy was the use of <span class="vocab" data-cn="悬臂">cantilever</span> principles in bridge decks. In the 1912 Töss Bridge, he extended the deck beyond its supports, letting the concrete slab act as a cantilevered beam that resisted bending through internal tension in the steel reinforcement. This approach not only shortened the required span lengths but also created a visually striking overhang that seemed to defy gravity—a clear illustration of how structural efficiency can produce aesthetic wonder.`,

    `Maillart’s legacy extends beyond individual bridges; he fundamentally changed engineering education by demonstrating that <span class="vocab" data-cn="预应力">prestressed</span> concepts could be achieved through clever geometry rather than relying solely on external tensioning devices. His designs emphasized the importance of understanding how forces travel through a <span class="vocab" data-cn="整体结构">monolithic construction</span>, encouraging later engineers to explore thin‑shell roofs, cable‑stayed bridges, and even modern skyscraper cores that echo his belief in material honesty.`,

    `Today, when students study the evolution of bridge engineering, Maillart’s name appears alongside pioneers like John Roebling and Gustave Eiffel. Yet unlike those contemporaries who celebrated steel or iron, Maillart championed a humble composite that could be molded on site, economical, and resilient against corrosion. His bridges continue to carry traffic, inspire architects, and remind us that the most enduring structures often arise from daring simplicity and an unwavering respect for material behavior.`,
  ],
  vocabulary: [
    { word: 'reinforced concrete', cn: '钢筋混凝土' },
    { word: 'arch bridge', cn: '拱桥' },
    { word: 'cantilever', cn: '悬臂' },
    { word: 'shear force', cn: '剪力' },
    { word: 'tensile strength', cn: '抗拉强度' },
    { word: 'prestressed', cn: '预应力' },
    { word: 'monolithic construction', cn: '整体结构' },
  ],
};

export default article;
