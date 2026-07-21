import type { Article } from '../../types/index.ts';

// 文件意图：维护《Rubik’s Cube Revolution: From Hungarian Invention to Global Puzzle Craze》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00137 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00137',
  slug: 'rubik-s-cube-revolution-from-hungarian-invention-to-global-puzzle-craze',
  title: 'Rubik’s Cube Revolution: From Hungarian Invention to Global Puzzle Craze',
  subtitle: 'How a professor’s classroom toy became the world’s most iconic mechanical puzzle.',
  summary: 'The story of Ernő Rubik’s cube, its rise from a university demo to a worldwide cultural phenomenon.',
  category: 'culture',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In 1974, <span class="vocab" data-cn="匈牙利">Hungarian</span> architect and professor Ernő Rubik set out to create a three‑dimensional model that could help his students visualise spatial relationships. He assembled a prototype from wooden blocks, each capable of rotating around a central axis. Little did he know that this modest classroom aid would soon become the most recognizable <span class="vocab" data-cn="机械益智玩具">mechanical puzzle</span> on the planet.`,
    `Rubik called his creation the “Magic Cube” and applied for a Hungarian patent in 1975. The device consisted of 26 smaller cubes, or “cubies,” that could be turned independently while preserving the overall cubic shape. Solving it required understanding the cube’s <span class="vocab" data-cn="排列组合">permutation</span> possibilities—a staggering 43 quintillion different configurations—yet only one correct arrangement where each face displayed a uniform colour.`,
    `The breakthrough came in 1980 when the American toy company Ideal Toy Corp. licensed the design, rebranding it as the “Rubik’s Cube.” A slick advertising campaign highlighted its brain‑teasing appeal, and within months the cube flew off shelves across North America and Europe. By 1982, sales had topped 350 million units worldwide, cementing its status as a cultural icon of the 1980s.`,
    `Beyond casual play, the cube sparked an entire subculture of enthusiasts who began to catalogue systematic <span class="vocab" data-cn="算法">algorithms</span> for solving it efficiently. In 1981 mathematician David Singmaster published the first comprehensive notation system—now known as “Singmaster notation”—which allowed solvers to record and share move sequences with precision. This framework laid the groundwork for competitive solving, or <span class="vocab" data-cn="速拧">speedcubing</span>, which would emerge decades later.`,
    `The 2000s saw a renaissance driven by the internet. Online forums, video tutorials, and dedicated websites like Speedsolving.com connected cubers worldwide. In 2003 the first official World Cube Association (WCA) competition was held in Budapest, bringing together hobbyists eager to push the limits of human dexterity. Records fell rapidly: the single‑solve world record dropped from over 20 seconds in 2005 to under 4 seconds by 2018, thanks to refined algorithms such as the Fridrich method and advances in cube design like magnetic positioning.`,
    `Today, the Rubik’s Cube is more than a pastime; it serves as an educational tool in mathematics, engineering, and even neuroscience. Researchers use it to study problem‑solving strategies, motor learning, and cognitive flexibility. Meanwhile, artists create giant installations, and designers incorporate its geometry into fashion and architecture. The cube’s enduring appeal lies in its perfect blend of simple mechanics and deep combinatorial complexity—a testament to Rubik’s original vision of a “toy that teaches.”`,
    `Looking ahead, the legacy of the Rubik’s Cube continues to evolve. New variations—such as the 4×4 “Rubik’s Revenge,” the pyraminx, and even digital augmented‑reality versions—keep the puzzle fresh for new generations. Yet the original 3×3 cube remains the benchmark against which all other twisty puzzles are measured, reminding us that a single idea born in a modest Budapest workshop can spark a global revolution.`,
  ],
  vocabulary: [
    { word: 'Hungarian', cn: '匈牙利' },
    { word: 'mechanical puzzle', cn: '机械益智玩具' },
    { word: 'permutation', cn: '排列组合' },
    { word: 'algorithm', cn: '算法' },
    { word: 'speedcubing', cn: '速拧' },
    { word: 'Singmaster notation', cn: '辛格曼记号法' },
  ],
};

export default article;
