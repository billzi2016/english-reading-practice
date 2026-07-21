import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise and Fall of the Stirling Engine: A Forgotten Power Source Reimagined》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00046 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00046',
  slug: 'the-rise-and-fall-of-the-stirling-engine-a-forgotten-power-source-reimagined',
  title: 'The Rise and Fall of the Stirling Engine: A Forgotten Power Source Reimagined',
  subtitle: 'How a 19th‑century invention resurfaces in modern sustainable tech.',
  summary: 'From Robert Stirling’s workshop to today’s renewable energy labs, explore the triumphs and setbacks of the Stirling engine.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In 1816 a Scottish clergyman named <span class="vocab" data-cn="罗伯特·斯特林">Robert Stirling</span> patented an engine that would later bear his name. At a time when steam locomotives roared across Britain, Stirling sought a quieter, safer alternative for small‑scale power generation. His invention relied on sealed gas moving back and forth between hot and cold chambers, promising steady motion without the explosive risk of high‑pressure steam. The early 19th century was ripe for such innovation: factories needed reliable auxiliary power, and the industrial revolution’s appetite for new energy sources seemed endless.`,
    `The core principle of a <span class="vocab" data-cn="斯特林发动机">Stirling engine</span> is <span class="vocab" data-cn="外燃式">external combustion</span>. Unlike internal‑combustion engines that burn fuel inside the cylinder, the Stirling heats an external heat source—often a flame or hot water—and transfers that energy through a <span class="vocab" data-cn="热交换器">heat exchanger</span> to a working gas such as helium or air. As the gas expands on the hot side it pushes a <span class="vocab" data-cn="活塞">piston</span>, then contracts on the cold side, completing a closed loop known as a <span class="vocab" data-cn="热力学循环">thermodynamic cycle</span>. This simplicity gave the engine remarkable durability and low maintenance requirements.`,
    `During the mid‑1800s the Stirling found niche applications that highlighted its strengths. Telegraph stations in remote locations used small Stirling units powered by coal fires to run generators, because the engines could operate continuously without frequent refueling. The British navy experimented with Stirling‑driven pumps for submarine ventilation, exploiting the engine’s quiet operation—a valuable trait for stealth. Engineers also introduced a <span class="vocab" data-cn="再生器">regenerator</span>, a porous matrix that temporarily stores heat from the moving gas, dramatically boosting overall <span class="vocab" data-cn="效率">efficiency</span> to levels rivaling contemporary steam engines.`,
    `Despite these successes, the Stirling could not compete with the rapid advances of internal‑combustion and high‑pressure steam technology. Its power output per unit weight—known as <span class="vocab" data-cn="功率密度">power density</span>—was lower than that of gasoline engines, making it unsuitable for automobiles or heavy industrial machinery where space and weight mattered. Moreover, the need for a reliable temperature differential meant that in colder climates the engine’s performance dropped sharply unless an auxiliary heat source was added, increasing complexity and cost. By the early 20th century, Stirling factories had largely shuttered their doors.`,
    `The story did not end there. In the 1970s, amid oil crises and growing environmental awareness, engineers revisited the Stirling for its ability to harvest <span class="vocab" data-cn="低品位热">low‑grade heat</span>. Solar concentrators could provide the hot side while ambient air cooled the cold side, creating a clean power source without combustion. Researchers at universities and national labs demonstrated prototypes that turned waste heat from industrial processes into electricity, sparking renewed interest in the engine’s potential for <span class="vocab" data-cn="可再生能源">renewable energy</span> systems.`,
    `Modern applications have taken the concept even further. Micro‑combined heat and power (<span class="vocab" data-cn="微型热电联产">micro‑CHP</span>) units installed in residential homes use Stirling engines to generate electricity while simultaneously providing hot water, achieving overall efficiencies above 80 %. NASA’s Advanced Stirling Radioisotope Generator (ASRG) leverages the engine’s reliability for deep‑space missions, converting heat from radioactive decay into electrical power for probes exploring distant moons. In cryogenics, miniature Stirling coolers keep infrared sensors at low temperatures, proving that the engine’s quiet operation and long lifespan remain valuable assets.`,
    `Looking ahead, the Stirling engine may finally claim a lasting place in the energy landscape, but several hurdles persist. Materials capable of withstanding repeated thermal cycling without fatigue are still expensive, and scaling up the technology to meet grid‑level demand requires innovative designs that balance <span class="vocab" data-cn="功率密度">power density</span> with durability. Nonetheless, as societies push for carbon‑neutral solutions, the engine’s ability to turn otherwise wasted heat into useful work offers a compelling narrative: an invention once eclipsed by louder rivals now quietly reemerges as a cornerstone of sustainable engineering.`,
  ],
  vocabulary: [
    { word: 'Robert Stirling', cn: '罗伯特·斯特林' },
    { word: 'Stirling engine', cn: '斯特林发动机' },
    { word: 'external combustion', cn: '外燃式' },
    { word: 'heat exchanger', cn: '热交换器' },
    { word: 'piston', cn: '活塞' },
    { word: 'thermodynamic cycle', cn: '热力学循环' },
    { word: 'regenerator', cn: '再生器' },
    { word: 'efficiency', cn: '效率' },
    { word: 'power density', cn: '功率密度' },
    { word: 'low‑grade heat', cn: '低品位热' },
    { word: 'renewable energy', cn: '可再生能源' },
    { word: 'micro‑CHP', cn: '微型热电联产' },
  ],
};

export default article;
