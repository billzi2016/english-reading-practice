import type { Article } from '../../types/index.ts';

// 文件意图：维护《Nikolaus Otto and the Birth of the Modern Internal Combustion Engine》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00349 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00349',
  slug: 'nikolaus-otto-and-the-birth-of-the-modern-internal-combustion-engine',
  title: 'Nikolaus Otto and the Birth of the Modern Internal Combustion Engine',
  subtitle: 'How a German inventor turned a laboratory curiosity into the engine that powers today’s cars',
  summary: 'The story of Nikolaus Otto, his four‑stroke breakthrough, and why it matters for modern transportation.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the bustling workshops of mid‑19th‑century Germany, a young mechanic named <span class="vocab" data-cn="尼古拉斯·奥托">Nikolaus Otto</span> was fascinated by the idea of turning chemical energy into motion. Born in 1832 near Cologne, Otto apprenticed with his father, a master locksmith, and later studied engineering at the Polytechnische Schule in Karlsruhe. His early exposure to precision metalwork gave him the practical skills needed to experiment with fuel‑driven machines—a field that was still dominated by steam engines and crude gas motors.`,
    `Otto’s first serious attempt came in 1864 when he partnered with Eugen Langen, a fellow inventor who supplied financial backing and manufacturing expertise. Together they built a prototype that used a mixture of coal gas and air ignited by an electric spark. Although the engine ran, it suffered from severe power loss after each cycle because the fuel‑air mixture was not fully consumed. This problem highlighted the importance of a reliable <span class="vocab" data-cn="点火装置">ignition system</span> and set Otto on a path to refine the combustion process.`,
    `The breakthrough arrived in 1876 with what is now called the <span class="vocab" data-cn="四冲程循环">four‑stroke cycle</span>. Otto’s design introduced distinct intake, compression, power, and exhaust strokes for each piston. By compressing the <span class="vocab" data-cn="燃料混合气">fuel-air mixture</span> before ignition, the engine achieved a higher <span class="vocab" data-cn="压缩比">compression ratio</span>, which dramatically increased the amount of energy released during combustion. This simple yet elegant sequence turned a noisy laboratory curiosity into a practical power source capable of delivering steady torque.`,
    `While Otto’s engine was technically superior, it faced stiff competition from contemporaries such as Étienne Lenoir, whose 1860 gas engine operated on a two‑stroke principle but lacked the efficiency of Otto’s four‑stroke. Critics initially dismissed Otto’s machine as too complex for industrial use. However, the German Patent Office granted him a patent in 1877, and the subsequent partnership with the Deutz company enabled mass production of reliable engines that could be installed in stationary generators, marine vessels, and eventually automobiles.`,
    `The impact of the four‑stroke engine on transportation cannot be overstated. By the early 20th century, manufacturers like Karl Benz and Gottlieb Daimler adapted Otto’s principles to create lightweight motorcars capable of traveling over 30 miles per hour—a speed unimaginable just a decade earlier. The engine’s relatively high <span class="vocab" data-cn="机械效率">mechanical efficiency</span> meant that less fuel was needed for the same work output, paving the way for the gasoline‑powered vehicle to dominate the roads of Europe and North America.`,
    `Otto’s legacy extends beyond the automobile. The basic architecture of his engine—cylinders, pistons, crankshaft, and spark plug—remains at the heart of most modern internal combustion engines, whether they run on gasoline, diesel, or alternative fuels like ethanol. Even as electric drivetrains gain market share, engineers continue to refine Otto’s original concepts, improving fuel injection timing, variable valve actuation, and turbocharging to meet stricter emissions standards.`,
    `Today, museums in Cologne and Munich display working replicas of the 1876 engine, allowing visitors to hear the characteristic “pop” of each combustion event. For students of engineering, Otto’s story serves as a reminder that breakthroughs often arise from iterative experimentation, collaboration across disciplines, and an unwavering belief that a better machine is possible. His four‑stroke cycle remains a cornerstone of mechanical education, illustrating how a single invention can reshape an entire industry.`,
  ],
  vocabulary: [
    { word: 'Nikolaus Otto', cn: '尼古拉斯·奥托' },
    { word: 'internal combustion engine', cn: '内燃机' },
    { word: 'four-stroke cycle', cn: '四冲程循环' },
    { word: 'compression ratio', cn: '压缩比' },
    { word: 'ignition system', cn: '点火装置' },
    { word: 'fuel-air mixture', cn: '燃料混合气' },
    { word: 'mechanical efficiency', cn: '机械效率' },
  ],
};

export default article;
