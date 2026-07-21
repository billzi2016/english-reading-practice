import type { Article } from '../../types/index.ts';

// 文件意图：维护《Robert Stirling’s Quest: The Invention of the Stirling Engine and Its Modern Revival》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00231 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00231',
  slug: 'robert-stirling-s-quest-the-invention-of-the-stirling-engine-and-its-modern-revival',
  title: 'Robert Stirling’s Quest: The Invention of the Stirling Engine and Its Modern Revival',
  subtitle: 'From a Scottish schoolmaster’s curiosity to today’s clean‑energy research',
  summary: 'Explore how Robert Stirling turned a simple heating problem into an engine that is being revived for renewable power.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1800s, a modest Scottish schoolmaster named <span class="vocab" data-cn="罗伯特·斯特林">Robert Stirling</span> grew frustrated with the soot‑filled rooms of his village. The coal stoves that warmed homes were inefficient and polluted, prompting him to ask a simple question: could heat be turned into useful motion without the clanking pistons and open flames of steam engines? This curiosity sparked a lifelong quest that would culminate in the first practical <span class="vocab" data-cn="斯特林发动机">Stirling engine</span> in 1816.`,
    `The Stirling engine is fundamentally a <span class="vocab" data-cn="热力学的">thermodynamic</span> device that operates on a closed‑cycle principle. Unlike steam engines, which burn fuel inside the cylinder, a Stirling engine draws heat from an external source—be it fire, sunlight, or waste heat—and expels it to a cooler sink. This external heating allows the working gas (usually air, helium, or hydrogen) to expand and contract repeatedly, driving a piston in a smooth, quiet motion that can be harnessed for mechanical work.`,
    `Three components give the Stirling engine its unique character: the power piston, the displacer, and the <span class="vocab" data-cn="再生器">regenerator</span>. The power piston extracts useful work from the expanding gas, while the displacer shuttles the gas between hot and cold regions without doing much work itself. The regenerator—a porous matrix of metal mesh—temporarily stores heat as the gas moves back and forth, dramatically improving the engine’s <span class="vocab" data-cn="效率">efficiency</span> by recycling thermal energy that would otherwise be lost.`,
    `Despite its elegance, the Stirling engine struggled to compete with the steam engine’s raw power and rapid development during the Industrial Revolution. Early models were bulky, produced modest power output, and required precise temperature differentials that were hard to maintain in everyday settings. Consequently, the technology faded into obscurity, remembered mainly as a laboratory curiosity rather than a commercial workhorse.`,
    `The 20th century saw a resurgence of interest when engineers recognized the Stirling engine’s quiet operation and ability to run on any heat source. During World War II, it was explored for submarine propulsion because its external combustion reduced exhaust signatures. Later, the development of high‑performance <span class="vocab" data-cn="热交换器">heat exchangers</span> allowed designers to achieve higher temperature gradients, reviving hopes that Stirling machines could power remote generators and even early radioisotope systems.`,
    `In recent decades, modern materials and renewable energy goals have breathed new life into the concept. Solar‑thermal power plants now pair mirrors or lenses—known as <span class="vocab" data-cn="太阳能聚光器">solar concentrators</span>—with Stirling engines to convert concentrated sunlight directly into electricity with impressive <span class="vocab" data-cn="效率">efficiency</span>. Meanwhile, compact <span class="vocab" data-cn="低温制冷机">cryocoolers</span> based on Stirling cycles keep infrared sensors and space telescopes at cryogenic temperatures. NASA’s Advanced Stirling Radioisotope Generator (ASRG), although later cancelled, demonstrated that a Stirling‑based system could produce reliable power for deep‑space probes using the heat from radioactive decay.`,
    `Looking ahead, researchers are tackling remaining challenges such as material fatigue at high temperatures and optimizing regenerator designs with nanostructured ceramics. If these hurdles can be overcome, the Stirling engine may become a cornerstone of distributed clean energy—providing off‑grid power in remote villages, augmenting solar farms, and even driving future electric aircraft. Robert Stirling’s 19th‑century curiosity thus continues to echo, reminding us that elegant physics can find new purpose across centuries.`,
  ],
  vocabulary: [
    { word: 'Robert Stirling', cn: '罗伯特·斯特林' },
    { word: 'Stirling engine', cn: '斯特林发动机' },
    { word: 'thermodynamic', cn: '热力学的' },
    { word: 'regenerator', cn: '再生器' },
    { word: 'efficiency', cn: '效率' },
    { word: 'heat exchanger', cn: '热交换器' },
    { word: 'cryocooler', cn: '低温制冷机' },
    { word: 'solar concentrator', cn: '太阳能聚光器' },
  ],
};

export default article;
