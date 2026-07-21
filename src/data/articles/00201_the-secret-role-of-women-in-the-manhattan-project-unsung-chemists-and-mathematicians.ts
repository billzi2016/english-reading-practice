import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Secret Role of Women in the Manhattan Project: Unsung Chemists and Mathematicians》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00201 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00201',
  slug: 'the-secret-role-of-women-in-the-manhattan-project-unsung-chemists-and-mathematicians',
  title: 'The Secret Role of Women in the Manhattan Project: Unsung Chemists and Mathematicians',
  subtitle: 'How female scientists quietly powered the race for the atomic bomb',
  summary: 'A narrative uncovering the hidden contributions of women chemists and mathematicians during the World War II nuclear effort.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When the United States launched the <span class="vocab" data-cn="曼哈顿计划">Manhattan Project</span> in 1942, most public photographs showed men in lab coats and engineers beside massive reactors. Yet behind the steel doors of Chicago’s Metallurgical Laboratory and New Mexico’s secret desert site, dozens of women were performing the painstaking work that turned theory into a functional weapon. Their stories were rarely printed in newspapers, but archival memos reveal that without their expertise the project would have stalled at critical milestones.`,
    `One of the earliest breakthroughs came from <span class="vocab" data-cn="核裂变">nuclear fission</span> research on the Chicago Pile‑1 reactor. Leona Woods Marshall Libby, a young physicist fresh from Cornell, became the first female graduate student to work directly with Enrico Fermi. She helped calibrate neutron detectors and later co‑authored reports on the behavior of uranium under bombardment. Her meticulous measurements allowed the team to predict when a chain reaction would become self‑sustaining—a prerequisite for any bomb design.`,

    `While Woods focused on experimental physics, another group of women turned to <span class="vocab" data-cn="放射化学">radiochemistry</span>. At Oak Ridge’s X‑10 Graphite Reactor, chemists such as Margaret (Peggy) K. Greeley oversaw the separation of newly created plutonium from irradiated uranium rods. Using a series of bismuth phosphate precipitation steps, they refined tiny quantities of plutonium into a metallic form suitable for weaponization. Their notebooks detail dozens of trial runs, each iteration improving yield by fractions of a percent—small gains that added up to kilograms of fissile material.`,

    `Mathematical calculations were equally vital. Maria Goeppert Mayer, later famous for the nuclear shell model, spent 1944‑45 at Los Alamos as a theoretical physicist. She tackled the complex <span class="vocab" data-cn="微分方程">differential equations</span> governing neutron diffusion in implosion designs. By simplifying these equations into solvable forms, she enabled engineers to predict how shock waves would compress plutonium cores uniformly—a key factor for achieving super‑critical mass.`,

    `Beyond the few well‑known names, a hidden army of human “computers” performed endless arithmetic on punched cards. These women—often recruited from colleges as math majors—used the early <span class="vocab" data-cn="蒙特卡罗方法">Monte Carlo method</span> to simulate random neutron paths through various geometries. Their results fed directly into design revisions for the Trinity test, ensuring that theoretical yields matched experimental observations.`,

    `The final piece of the puzzle involved <span class="vocab" data-cn="同位素分离">isotopic separation</span>. At the Clinton Engineer Works in Tennessee, female technicians operated massive electromagnetic separators, carefully adjusting magnetic fields to isolate uranium‑235 from its more abundant sibling, uranium‑238. Their vigilance prevented costly shutdowns caused by equipment drift, keeping production on schedule for the war’s closing months.`,

    `When the atomic bombs fell on Hiroshima and Nagasaki, the world saw only the devastation, not the quiet labor of women who had turned abstract equations into a terrifying reality. Today, declassified archives and oral histories are beginning to restore their place in history, reminding us that scientific breakthroughs rarely rest on a single gendered narrative but on collaborative effort across all capable minds.`,

    `Understanding this hidden chapter reshapes how we view the <span class="vocab" data-cn="洛斯阿拉莫实验室">Los Alamos Laboratory</span> and its legacy. It also offers a powerful lesson: when societies face monumental challenges, inclusive talent pools—regardless of gender—are essential for innovation. As modern science grapples with climate change and quantum computing, the unsung women of the Manhattan Project stand as early exemplars of perseverance behind the scenes.`,
  ],
  vocabulary: [
    { word: 'Manhattan Project', cn: '曼哈顿计划' },
    { word: 'nuclear fission', cn: '核裂变' },
    { word: 'radiochemistry', cn: '放射化学' },
    { word: 'differential equations', cn: '微分方程' },
    { word: 'Monte Carlo method', cn: '蒙特卡罗方法' },
    { word: 'isotopic separation', cn: '同位素分离' },
    { word: 'Los Alamos Laboratory', cn: '洛斯阿拉莫实验室' },
  ],
};

export default article;
