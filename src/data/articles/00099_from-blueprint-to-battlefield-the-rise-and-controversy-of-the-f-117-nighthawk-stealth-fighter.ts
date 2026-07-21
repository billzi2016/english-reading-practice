import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Blueprint to Battlefield: The Rise and Controversy of the F‑117 Nighthawk Stealth Fighter》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00099 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00099',
  slug: 'from-blueprint-to-battlefield-the-rise-and-controversy-of-the-f-117-nighthawk-stealth-fighter',
  title: 'From Blueprint to Battlefield: The Rise and Controversy of the F‑117 Nighthawk Stealth Fighter',
  subtitle: 'How a secret design reshaped modern air warfare',
  summary: 'A narrative of the F‑117’s development, its groundbreaking stealth features, and the debates that followed.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1970s, a small team at Lockheed Martin’s <span class="vocab" data-cn="代号“黑鸟”项目的研发部门">Skunk Works</span> began sketching an aircraft that could vanish from enemy radar. The concept was radical: instead of trying to make a plane faster or more heavily armed, engineers would shape it so that the <span class="vocab" data-cn="雷达反射截面，衡量目标被雷达探测到的难易程度">radar cross-section</span> (RCS) was minimized. This “low observable” philosophy laid the groundwork for what would later be called <span class="vocab" data-cn="隐身技术，使飞机在电磁波段难以被探测">stealth technology</span>.`,
    `The first physical prototype, nicknamed “Have Blue,” emerged in 1976. Its most striking visual feature was the <span class="vocab" data-cn="多面体设计，利用平坦的表面折射雷达波">faceted design</span>, a series of flat panels arranged at precise angles to scatter incoming radar waves rather than reflect them directly back. While this gave the aircraft an almost alien silhouette, it also introduced aerodynamic challenges that required extensive wind‑tunnel testing and computational analysis—tools that were still in their infancy at the time.`,
    `By 1981, the United States Air Force officially commissioned the program under the codename “F‑117A Nighthawk.” The aircraft’s first flight was shrouded in secrecy; even many senior officers were unaware of its existence. Its inaugural combat sortie came two years later during the 1989 invasion of Panama, where it demonstrated that a plane could strike high‑value targets with precision while remaining virtually invisible to conventional air defenses. This success cemented the F‑117’s reputation as a game‑changing weapon.`,
    `However, the very secrecy that protected the program also sowed controversy. Critics argued that the massive budget—over $1 billion in development costs—was unjustified for an aircraft with limited payload and range compared to conventional fighters. Moreover, the <span class="vocab" data-cn="电磁波谱，指从无线电波到伽马射线的全部频率范围">electromagnetic spectrum</span> war was evolving; newer radar systems began to exploit low‑frequency bands that could partially detect faceted shapes. These concerns sparked heated debates in Congress and among defense analysts about the future viability of stealth.`,
    `The F‑117’s operational life spanned three major conflicts: Panama, the Gulf War, and the Kosovo campaign. In each theater, its ability to deliver laser‑guided bombs with pinpoint accuracy while evading surface‑to‑air missiles proved decisive. Yet, in 1999 a single aircraft was shot down over Yugoslavia by a Soviet‑made S‑300 system, marking the first confirmed loss of a stealth platform in combat. The incident revealed that no technology is invulnerable and prompted further research into <span class="vocab" data-cn="全向隐身，覆盖更广频段的隐形技术">broadband low observable</span> solutions.`,
    `After two decades of service, the F‑117 was officially retired in 2008, replaced by newer platforms such as the F‑22 and F‑35 that integrated stealth into more versatile airframes. Yet its legacy endures: modern aircraft still borrow the principle of shaping to reduce RCS, and the concept of “design for survivability” has become a cornerstone of defense engineering. The Nighthawk also inspired cultural fascination, appearing in movies, video games, and museum displays—symbols of an era when secrecy and innovation collided in the skies.`,
    `Today, historians view the F‑117 as both a technological triumph and a cautionary tale about the costs of pioneering new warfare paradigms. Its story reminds us that breakthroughs often arise from daring ideas that challenge conventional wisdom, but they also demand continual adaptation as adversaries evolve. As nations invest in next‑generation <span class="vocab" data-cn="隐身技术的下一代发展方向，如低可观测性无人机">stealth technologies</span>, the lessons of the Nighthawk’s rise and controversy remain remarkably relevant.`,
  ],
  vocabulary: [
    { word: 'Skunk Works', cn: '代号“黑鸟”项目的研发部门' },
    { word: 'radar cross-section', cn: '雷达反射截面，衡量目标被雷达探测到的难易程度' },
    { word: 'stealth technology', cn: '隐身技术，使飞机在电磁波段难以被探测' },
    { word: 'faceted design', cn: '多面体设计，利用平坦的表面折射雷达波' },
    { word: 'electromagnetic spectrum', cn: '电磁波谱，指从无线电波到伽马射线的全部频率范围' },
    { word: 'broadband low observable', cn: '全向隐身，覆盖更广频段的隐形技术' },
    { word: 'stealth technologies', cn: '隐身技术的下一代发展方向，如低可观测性无人机' },
  ],
};

export default article;
