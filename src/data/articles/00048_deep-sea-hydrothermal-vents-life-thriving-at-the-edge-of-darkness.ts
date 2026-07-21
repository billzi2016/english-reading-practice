import type { Article } from '../../types/index.ts';

// 文件意图：维护《Deep‑Sea Hydrothermal Vents: Life Thriving at the Edge of Darkness》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00048 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00048',
  slug: 'deep-sea-hydrothermal-vents-life-thriving-at-the-edge-of-darkness',
  title: 'Deep‑Sea Hydrothermal Vents: Life Thriving at the Edge of Darkness',
  subtitle: 'How ecosystems flourish around scorching underwater chimneys.',
  summary: 'Explore the surprising biology and chemistry that sustain life at deep‑sea hydrothermal vents.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In July 1977, the submersible Alvin descended into the darkness of the Galápagos Rift and illuminated a scene no one had imagined: towering black columns spewing mineral‑rich water. These structures were later named <span class="vocab" data-cn="海底热液喷口">hydrothermal vents</span>, and their discovery rewrote our understanding of where life can exist on Earth.`,
    `A vent is essentially a crack in the ocean floor where seawater, heated by magma beneath the crust, rushes upward. The surrounding rock is mostly <span class="vocab" data-cn="玄武岩">basalt</span>, which reacts with the superheated fluid to form towering chimneys of metal sulfides. As the water cools, it creates a shimmering “black smoker” plume that can rise hundreds of meters, mixing with the frigid abyssal waters below 2 °C.`,
    `Unlike surface ecosystems that rely on sunlight, vent communities depend on <span class="vocab" data-cn="化学合成">chemosynthesis</span>. Specialized bacteria oxidize dissolved <span class="vocab" data-cn="硫化物">sulfide</span> to produce organic carbon, providing the base of a food web that thrives in total darkness. These microbes are true <span class="vocab" data-cn="极端微生物">extremophiles</span>, flourishing at temperatures above 350 °C and pressures over 250 atm.`,
    `The most iconic vent animal is the giant tube worm, <i>Riftia pachyptila</i>. It lacks a digestive tract; instead, it houses chemosynthetic bacteria in an internal organ called the trophosome. This intimate <span class="vocab" data-cn="共生关系">symbiosis</span> allows the worm to grow up to two meters tall while extracting nutrients directly from its microbial partners. Other residents—such as blind shrimp, vent crabs, and giant clams—share similar partnerships or feed on bacterial mats that blanket the chimney walls.`,
    `Survival here demands extraordinary adaptations. Proteins in <span class="vocab" data-cn="嗜热的">thermophilic</span> organisms are stabilized by unique amino‑acid sequences, preventing denaturation at extreme heat. Cell membranes incorporate ether‑linked lipids that remain fluid under high pressure, and many vent species have lost pigment altogether, rendering them effectively invisible in the black water.`,
    `Beyond their intrinsic fascination, vents play a crucial role in global biogeochemical cycles. The carbon fixed by chemosynthetic bacteria eventually sinks, sequestering organic matter in deep‑sea sediments. Moreover, the mineral deposits formed around vents provide clues about early Earth conditions and support hypotheses that life may have originated at similar hydrothermal settings.`,
    `Today, scientists continue to explore these hidden oases with remotely operated vehicles and autonomous sensors, mapping vent fields across the Pacific, Atlantic, and Indian Oceans. At the same time, interest in deep‑sea mining raises concerns: extracting valuable metals from vent-associated sulfide deposits could disrupt fragile ecosystems that have persisted for millennia. Balancing discovery with preservation remains one of marine science’s greatest challenges.`,
  ],
  vocabulary: [
    { word: 'hydrothermal vent', cn: '海底热液喷口' },
    { word: 'basalt', cn: '玄武岩' },
    { word: 'chemosynthesis', cn: '化学合成' },
    { word: 'sulfide', cn: '硫化物' },
    { word: 'extremophile', cn: '极端微生物' },
    { word: 'symbiosis', cn: '共生关系' },
    { word: 'thermophilic', cn: '嗜热的' },
  ],
};

export default article;
