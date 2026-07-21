import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Sir William Grove to Modern Energy: The Quest for the First Practical Hydrogen Fuel Cell》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00302 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00302',
  slug: 'from-sir-william-grove-to-modern-energy-the-quest-for-the-first-practical-hydrogen-fuel-cell',
  title: 'From Sir William Grove to Modern Energy: The Quest for the First Practical Hydrogen Fuel Cell',
  subtitle: 'Tracing a 180‑year journey from the laboratory to today’s zero‑emission vehicles.',
  summary: 'A narrative of how Sir William Grove’s 19th‑century invention evolved into modern hydrogen fuel cells powering cars, spacecraft, and power grids.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1839, a Welsh physicist named <span class="vocab" data-cn="威廉·格罗夫爵士">Sir William Grove</span> demonstrated a device that could both generate electricity from chemical reactions and run in reverse to produce gas. He called it the “gas voltaic battery,” but today we recognize it as the first prototype of a <span class="vocab" data-cn="燃料电池">fuel cell</span>. Grove’s apparatus combined hydrogen and oxygen over platinum electrodes, producing water, heat, and an electric current—a simple yet profound illustration of the reverse of <span class="vocab" data-cn="电解">electrolysis</span>.`,
    `Grove’s invention attracted little commercial interest at the time. The industrial world was still powered by coal‑fired steam engines, and the concept of storing energy in a clean gas seemed fanciful. Nevertheless, his work laid the theoretical groundwork for later scientists such as <span class="vocab" data-cn="弗朗茨·冯·斯塔尔">Franz von Soxhlet</span> and <span class="vocab" data-cn="卡尔·博施">Karl Bosch</span>, who explored hydrogen production on a larger scale. The key challenge remained: how to make the cell efficient, durable, and cheap enough for everyday use.`,
    `The breakthrough came in the mid‑20th century with the development of the <span class="vocab" data-cn="质子交换膜">proton exchange membrane (PEM)</span> technology. In the 1960s, NASA engineers needed a reliable power source for space missions that could operate silently and without combustion. They adopted PEM fuel cells because the membrane allowed protons to pass while blocking electrons, forcing the latter through an external circuit where they generated electricity. The result was a lightweight, high‑efficiency system that powered the Apollo command modules and demonstrated that hydrogen could be a practical energy carrier in extreme environments.`,
    `After the space program, commercial interest surged. In the 1990s, companies such as Ballard Power Systems refined PEM designs by introducing new <span class="vocab" data-cn="催化剂">catalysts</span> based on platinum alloys and improving membrane durability. Simultaneously, the concept of a <span class="vocab" data-cn="氢经济">hydrogen economy</span> entered policy discussions, promising to decarbonize transport, industry, and even heating. Yet the high cost of precious‑metal catalysts and the need for reliable hydrogen supply chains kept fuel cells from mass adoption.`,
    `The early 2000s marked a turning point when automotive giants like Toyota, Honda, and later Hyundai began investing heavily in <span class="vocab" data-cn="堆叠">stack</span> engineering—linking many individual cells together to achieve the hundreds of kilowatts required for passenger cars. The first commercially available fuel‑cell vehicle, the Toyota Mirai, debuted in 2014, boasting a range comparable to gasoline cars and zero tailpipe emissions. Its success hinged on advances in <span class="vocab" data-cn="热力学效率">thermodynamic efficiency</span>, which now routinely exceeds 60 % under optimal conditions, far surpassing internal combustion engines.`,
    `Parallel to automotive progress, stationary fuel‑cell systems found niches in backup power and remote microgrids. By coupling a PEM stack with a natural‑gas <span class="vocab" data-cn="重整器">reformer</span>, operators could generate hydrogen on‑site, reducing the need for high‑pressure storage tanks. These installations demonstrate how fuel cells can provide continuous, low‑noise electricity while supporting renewable sources like wind and solar, smoothing out intermittency without emitting pollutants—a true embodiment of <span class="vocab" data-cn="零排放">zero‑emission</span> technology.`,
    `Today, the quest that began with Grove’s modest laboratory experiment continues to evolve. Researchers are exploring non‑platinum catalysts, solid‑oxide fuel cells that operate at higher temperatures, and even hybrid systems that combine batteries with fuel cells for rapid response and long endurance. As global climate goals tighten, the practical hydrogen fuel cell—once a scientific curiosity—stands poised to become a cornerstone of sustainable energy infrastructure, linking the past’s ingenuity with the future’s urgency.`,
  ],
  vocabulary: [
    { word: 'fuel cell', cn: '燃料电池' },
    { word: 'electrolysis', cn: '电解' },
    { word: 'proton exchange membrane (PEM)', cn: '质子交换膜' },
    { word: 'hydrogen economy', cn: '氢经济' },
    { word: 'catalyst', cn: '催化剂' },
    { word: 'thermodynamic efficiency', cn: '热力学效率' },
    { word: 'stack', cn: '堆叠' },
    { word: 'reformer', cn: '重整器' },
    { word: 'zero-emission', cn: '零排放' },
  ],
};

export default article;
