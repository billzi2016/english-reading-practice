import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Tunguska Explosion of 1908: A Cosmic Blast That Shook Siberia》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00042 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00042',
  slug: 'the-tunguska-explosion-of-1908-a-cosmic-blast-that-shook-siberia',
  title: 'The Tunguska Explosion of 1908',
  subtitle: 'A Cosmic Blast That Shook Siberia',
  summary: 'An in‑depth look at the mysterious 1908 airburst that flattened a forest the size of a small country.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On the morning of June 30, 1908, residents of the remote Tunguska region in Siberia heard a thunderous roar that seemed to come from the sky. Within seconds, a blinding flash illuminated the taiga, and a shockwave ripped through the forest, flattening an estimated 2,000 square kilometres of trees. The event left no crater, yet the sheer scale of destruction sparked worldwide curiosity and fear, as newspapers speculated about “a fireball from space” that could threaten civilization itself.`,
    `The first scientific expedition to investigate the site was led by Russian mineralogist Leonid Kulik in 1921. Armed with a simple compass, a camera, and a notebook, Kulik trekked into the wilderness, following a trail of trees that had been knocked down like matchsticks, all pointing outward from a single epicenter. He documented a pattern known as “radial felling,” which later became a key clue in reconstructing the event’s dynamics.` ,
    `Modern analyses suggest that the explosion was an <span class="vocab" data-cn="空中爆炸">airburst</span> of a meteoroid or comet fragment, estimated to be 50–60 meters across. As the object entered Earth’s atmosphere at speeds exceeding 15 km/s, friction heated it to thousands of degrees, causing it to disintegrate before reaching the ground. The rapid release of kinetic energy—equivalent to about 10‑15 megatons of TNT—generated a shockwave that propagated through the atmosphere and reached the surface with devastating force.` ,
    `One puzzling aspect of the Tunguska event is the absence of an impact crater. Researchers explain this by noting that the object exploded at an altitude of roughly 5–10 kilometres, high enough to prevent a solid mass from striking the ground but low enough for the blast wave to retain most of its energy. This “high‑altitude explosion” model is supported by eyewitness accounts describing a bright fireball that lingered in the sky for several seconds before vanishing.` ,
    `Over the decades, scientists have proposed alternative hypotheses, ranging from a natural <span class="vocab" data-cn="彗星碎片">comet fragment</span> to an exotic “mini‑black hole” passing through Earth’s crust. While the latter ideas capture popular imagination, they lack empirical support. The prevailing consensus remains that a stony asteroid or icy comet, composed of loosely bound material, entered the atmosphere and detonated in midair, a scenario corroborated by recent computer simulations and laboratory experiments on hypervelocity impacts.` ,
    `The Tunguska explosion also left subtle traces in the environment. Soil samples collected decades later revealed elevated levels of <span class="vocab" data-cn="全氟化合物">fullerenes</span>—carbon molecules that can form under extreme temperatures—and microscopic spherules of melted quartz, both indicative of high‑temperature processes. Moreover, tree rings from the region show a sudden growth suppression in 1908, reflecting the shockwave’s impact on local ecosystems.` ,
    `Today, Tunguska serves as a natural laboratory for planetary defense studies. By understanding how an object of modest size can cause continent‑wide devastation without striking the ground, scientists refine detection strategies for near‑Earth objects (NEOs). The event underscores the importance of early warning systems and potential mitigation techniques, such as kinetic impactors or gravity tractors, to deflect future threats before they reach a critical altitude.` ,
    `Although the Siberian forest has largely recovered, the memory of that June morning endures in scientific literature and popular culture alike. From Jules Verne’s speculative novels to modern documentaries, the Tunguska explosion reminds us that Earth is not isolated from cosmic events, and that vigilance remains our best safeguard against the next celestial surprise.` ,
  ],
  vocabulary: [
    { word: 'airburst', cn: '空中爆炸' },
    { word: 'comet fragment', cn: '彗星碎片' },
    { word: 'fullerenes', cn: '全氟化合物' },
    { word: 'near‑Earth objects (NEOs)', cn: '近地天体' },
    { word: 'kinetic impactor', cn: '动能撞击器' },
    { word: 'gravity tractor', cn: '引力牵引器' },
  ],
};

export default article;
