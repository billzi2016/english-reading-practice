import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Forgotten Engineer Behind the Eiffel Tower’s Wind Resistance: Gustave Eiffel’s Hidden Structural Innovations》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00147 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00147',
  slug: 'the-forgotten-engineer-behind-the-eiffel-tower-s-wind-resistance-gustave-eiffel-s-hidden-structural-innovations',
  title: 'The Forgotten Engineer Behind the Eiffel Tower’s Wind Resistance: Gustave Eiffel’s Hidden Structural Innovations',
  subtitle: 'How unseen engineers shaped one of the world’s most iconic structures.',
  summary: 'A look at the structural pioneers whose calculations kept the Eiffel Tower standing against fierce winds.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When tourists snap photos of the glittering iron lattice, they usually credit Gustave Eiffel as the sole genius behind the tower. In reality, the project was a collaborative effort, and two engineers—Maurice Koechlin and Émile Nouguier—played decisive roles in solving one of the era’s toughest engineering puzzles: how to keep a 300‑meter tall structure stable against strong gusts.`,
    `Koechlin, a senior structural designer at Eiffel’s firm, drafted the initial concept in 1884. He paired his expertise with Nouguier, an experienced draftsman who specialized in large‑scale metal works. Together they performed the first systematic <span class="vocab" data-cn="风荷载">wind load</span> calculations for a tower of this height, a task that had never been attempted on such a scale before.`,
    `Their approach began with a careful study of atmospheric conditions in Paris. By analyzing historical wind speed records, they estimated the maximum pressure the structure might encounter. This data fed into a series of equations to determine the <span class="vocab" data-cn="系数">coefficient of drag</span> for various shapes, ultimately guiding the decision to adopt an open framework rather than solid walls.`,

    `The result was the iconic <span class="vocab" data-cn="格子结构">lattice structure</span>. By arranging thousands of iron members in a criss‑cross pattern, the tower presents air with multiple pathways, dramatically reducing overall drag. The gaps also allow wind to pass through, preventing the buildup of pressure that could cause oscillations or even structural failure.`,
    `To translate this elegant geometry into reality, Koechlin and Nouguier specified thousands of <span class="vocab" data-cn="铆接接头">riveted joints</span>. Each joint was meticulously designed to transfer forces between members without creating stress concentrations. The rivets acted like tiny hinges, allowing slight movements that dissipated energy while maintaining overall rigidity.`,

    `The tower’s four massive legs are a study in <span class="vocab" data-cn="悬臂">cantilever</span> engineering. Extending outward from the base, they support the central shaft while resisting both vertical loads and lateral wind forces. By distributing <span class="vocab" data-cn="剪切应力">shear stress</span> across a wide network of braces, the design minimizes the risk of <span class="vocab" data-cn="屈曲">buckling</span>, a common failure mode in slender columns under compression.`,

    `Today, engineers still reference the Eiffel Tower’s wind‑resistance solutions when designing skyscrapers and bridges. The principles of open lattice, precise load calculation, and flexible connections remain foundational in modern structural analysis, proving that Koechlin and Nouguier’s hidden innovations have endured far beyond their 19th‑century origins.`,
  ],
  vocabulary: [
    { word: 'wind load', cn: '风荷载' },
    { word: 'lattice structure', cn: '格子结构' },
    { word: 'coefficient of drag', cn: '系数' },
    { word: 'riveted joints', cn: '铆接接头' },
    { word: 'cantilever', cn: '悬臂' },
    { word: 'shear stress', cn: '剪切应力' },
    { word: 'buckling', cn: '屈曲' },
  ],
};

export default article;
