import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1973 Sunraycer Project: Pioneering Solar‑Powered Racing and Its Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00435 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00435',
  slug: 'the-1973-sunraycer-project-pioneering-solar-powered-racing-and-its-legacy',
  title: 'The 1973 Sunraycer Project: Pioneering Solar‑Powered Racing and Its Legacy',
  subtitle: 'How early solar‑car experiments paved the way for a breakthrough in automotive engineering',
  summary: 'A look back at the 1970s research that set the stage for General Motors\' iconic Sunraycer and its lasting impact.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1970s, a wave of energy‑crisis anxiety sparked curiosity among engineers about harnessing sunlight for transportation. While most automakers were still focused on improving internal combustion efficiency, a small team at General Motors’ Advanced Engineering Center began to ask a daring question: could a car run solely on <span class="vocab" data-cn="光伏发电的装置">photovoltaic</span> power? Their answer would not appear in a production model for years, but the experimental work of 1973 laid the conceptual groundwork for what later became the celebrated Sunraycer project.`,
    `The team’s first prototype was built on a stripped‑down chassis borrowed from a compact sedan. To keep weight to a minimum they used an aluminum frame and replaced steel panels with thin fiberglass skins. This lightweight <span class="vocab" data-cn="车身结构">chassis</span> allowed the modest power output of the era’s silicon solar cells—roughly 10 watts per square foot—to move the vehicle at speeds barely above a brisk walk. Even though the car could not compete in any official race, its performance demonstrated that solar energy could be more than a laboratory curiosity.`,
    `A major breakthrough came when the engineers experimented with a high‑efficiency <span class="vocab" data-cn="光伏电池阵列">solar array</span> composed of 72 individual cells arranged in a curved surface that followed the car’s aerodynamic profile. By tilting the array slightly forward, they maximized exposure to the sun while reducing drag—a principle later refined into the sleek “teardrop” shape of the Sunraycer. The designers also introduced <span class="vocab" data-cn="再生制动技术">regenerative braking</span>, capturing kinetic energy during deceleration and storing it in a modest lead‑acid battery pack, an early nod to technologies now common in electric vehicles.`,
    `While the 1973 prototype was limited by the technology of its day, the data collected proved invaluable. Engineers logged power output under varying sunlight angles, measured temperature effects on cell efficiency, and mapped how aerodynamic tweaks altered drag coefficients. These experiments fed directly into a partnership formed in the early 1980s between GM and the California‑based Solar Car Team at the University of Michigan, which would eventually produce the Sunraycer that won the inaugural World Solar Challenge in 1987.`,
    `The Sunraycer itself embodied lessons from the 1973 effort: an ultra‑light carbon‑fiber body, a solar array covering more than 6 square meters, and a sophisticated power management system that balanced input from the cells with storage in a high‑capacity lithium‑ion battery—technology that had matured since the early experiments. Its top speed of 70 km/h across the Australian outback proved that solar propulsion could be both reliable and competitive, capturing worldwide attention and inspiring a new generation of engineers.`,
    `The legacy of those humble 1973 trials extends far beyond a single race victory. Modern electric‑vehicle manufacturers cite the Sunraycer’s integration of lightweight materials, aerodynamic optimization, and efficient energy recovery as early exemplars of holistic vehicle design. Moreover, solar‑racing series such as the World Solar Challenge and the American Solar Challenge continue to push the boundaries of <span class="vocab" data-cn="光伏技术">photovoltaic</span> efficiency, battery density, and autonomous control—areas that trace their lineage back to the experimental mindset fostered in the early 1970s.`,
    `Today, as governments worldwide set ambitious targets for zero‑emission transport, the story of the 1973 Sunraycer Project serves as a reminder that breakthrough technologies often begin as modest experiments driven by curiosity and necessity. The same principles—maximizing energy capture, minimizing loss, and integrating smart control systems—are now being applied to solar‑assisted buses, delivery drones, and even residential power‑generation roofs, proving that the sun’s potential on wheels is far from exhausted.`,
  ],
  vocabulary: [
    { word: 'photovoltaic', cn: '光伏发电的装置' },
    { word: 'chassis', cn: '车身结构' },
    { word: 'solar array', cn: '光伏电池阵列' },
    { word: 'regenerative braking', cn: '再生制动技术' },
    { word: 'lithium‑ion battery', cn: '锂离子电池' },
    { word: 'aerodynamic', cn: '空气动力学的，指降低阻力的设计' },
  ],
};

export default article;
