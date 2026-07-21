import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of the Modern Hydrogen Fuel Cell: From William Grove to Contemporary Energy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00359 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00359',
  slug: 'the-birth-of-the-modern-hydrogen-fuel-cell-from-william-grove-to-contemporary-energy',
  title: 'The Birth of the Modern Hydrogen Fuel Cell: From William Grove to Contemporary Energy',
  subtitle: 'Tracing a two‑century journey from laboratory curiosity to today’s clean power technology.',
  summary: 'From William Grove’s 1839 experiment to modern zero‑emission vehicles, discover how hydrogen fuel cells evolved into a cornerstone of sustainable energy.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `On a damp evening in February 1839, the English scientist William Grove lit a modest glass tube filled with hydrogen and oxygen, then watched as a faint glow illuminated his laboratory. He called his invention a “gas voltaic battery,” but today we recognize it as the first functional <span class="vocab" data-cn="燃料电池">fuel cell</span>. Grove’s device proved that chemical energy could be turned directly into electricity without combustion, laying a conceptual cornerstone for future engineers who would chase the promise of clean power.`,
    `At its core, a <span class="vocab" data-cn="燃料电池">fuel cell</span> is a type of <span class="vocab" data-cn="原电池">galvanic cell</span> that combines hydrogen and oxygen in a controlled reaction. The hydrogen atoms are split at the anode, releasing electrons that travel through an external circuit while protons pass through an <span class="vocab" data-cn="电解质">electrolyte</span>. On the cathode side, oxygen molecules reunite with those protons and electrons to form water. The reaction is accelerated by a <span class="vocab" data-cn="催化剂">catalyst</span>, typically platinum, which lowers the energy barrier without being consumed.</`,
    `Grove’s breakthrough was scientifically elegant but technologically premature. In the mid‑19th century there were no reliable methods to produce pure hydrogen at scale, and the precious metals required for effective <span class="vocab" data-cn="催化剂">catalyst</span> layers were prohibitively expensive. Moreover, early electrolytes—often dilute acids or alkaline solutions—corroded metal components quickly, limiting cell lifespan. As a result, fuel cells remained laboratory curiosities for more than a century, eclipsed by the rapid expansion of steam engines and internal‑combustion technology.`,
    `The tide turned after World II when British engineer Francis Thomas Bacon revisited the concept with an <span class="vocab" data-cn="碱性燃料电池">alkaline fuel cell</span>. By using a potassium hydroxide electrolyte and nickel‑based electrodes, Bacon’s design achieved higher power density and durability. NASA adopted refined versions of his cells for the Gemini and Apollo programs, where they supplied electricity and water to spacecraft on long missions. These successes demonstrated that fuel cells could operate reliably in demanding environments, rekindling interest among researchers worldwide.`,
    `In the 1960s and 1970s, a new class of <span class="vocab" data-cn="质子交换膜">proton exchange membrane</span> (PEM) fuel cells emerged, driven by advances in polymer chemistry. PEM cells operate at lower temperatures than alkaline types, allowing rapid start‑up and compact packaging—key attributes for automotive use. Canadian company Ballard Power Systems pioneered thin‑film catalyst layers and durable membranes, achieving power outputs suitable for buses and forklifts by the early 2000s. Their breakthroughs proved that fuel cells could compete with batteries in specific niche markets.</`,
    `Today, <span class="vocab" data-cn="零排放">zero‑emission</span> vehicles such as the Toyota Mirai and Hyundai Nexo showcase mature PEM technology, while stationary power units provide backup for hospitals and data centers. Yet challenges persist: producing hydrogen without emitting carbon often requires a <span class="vocab" data-cn="重整装置">reformer</span> that extracts H₂ from natural gas, or large‑scale electrolysis powered by renewable electricity—both of which add cost and complexity. Storage remains another hurdle, as high‑pressure tanks must balance safety with vehicle range.` ,
    `Looking ahead, the integration of green hydrogen into national energy strategies could turn fuel cells into a linchpin for decarbonization. Wind or solar farms can drive electrolyzers to split water, creating a renewable supply of H₂ that feeds PEM stacks in trucks, trains, and even maritime vessels. As material scientists develop cheaper, non‑precious <span class="vocab" data-cn="催化剂">catalyst</span> alternatives and engineers improve thermal management, the efficiency gap between fuel cells and conventional power sources continues to narrow. The journey that began with Grove’s modest glass tube now points toward a future where hydrogen fuels an entire ecosystem of clean energy applications.` ,
  ],
  vocabulary: [
    { word: 'fuel cell', cn: '燃料电池' },
    { word: 'galvanic cell', cn: '原电池' },
    { word: 'electrolyte', cn: '电解质' },
    { word: 'catalyst', cn: '催化剂' },
    { word: 'proton exchange membrane', cn: '质子交换膜' },
    { word: 'alkaline fuel cell', cn: '碱性燃料电池' },
    { word: 'zero-emission', cn: '零排放' },
    { word: 'reformer', cn: '重整装置' },
  ],
};

export default article;
