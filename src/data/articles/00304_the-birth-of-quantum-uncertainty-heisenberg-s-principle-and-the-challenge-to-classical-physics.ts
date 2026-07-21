import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of Quantum Uncertainty: Heisenberg’s Principle and the Challenge to Classical Physics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00304 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00304',
  slug: 'the-birth-of-quantum-uncertainty-heisenberg-s-principle-and-the-challenge-to-classical-physics',
  title: 'The Birth of Quantum Uncertainty: Heisenberg’s Principle and the Challenge to Classical Physics',
  subtitle: 'How a single insight reshaped our view of reality',
  summary: 'Explore how Heisenberg’s uncertainty principle emerged from early quantum theory and upended classical determinism.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1920s a young German physicist named Werner Heisenberg entered a scientific arena that was already buzzing with puzzling results. Experiments on black‑body radiation and the photoelectric effect had forced researchers to abandon the comfortable world of <span class="vocab" data-cn="古典物理学">classical physics</span> and seek a new framework. Heisenberg’s own contribution would become a cornerstone of <span class="vocab" data-cn="量子力学">quantum mechanics</span>, initially expressed through the abstract formalism known as <span class="vocab" data-cn="矩阵力学">matrix mechanics</span>.`,
    `Classical physics rested on the belief that, given complete knowledge of a system’s initial conditions—its positions and velocities—one could predict its future with perfect accuracy. This worldview, often called <span class="vocab" data-cn="决定论">determinism</span>, traced back to Newton’s laws, where forces acted continuously and smoothly. Yet phenomena at atomic scales refused to fit neatly into this picture; electrons seemed to behave both as particles and as waves, defying the simple cause‑and‑effect chain that had guided physics for centuries.`,
    `Heisenberg’s breakthrough came from a careful examination of how physical quantities are represented mathematically. He discovered that certain pairs of operators—most famously position (x) and momentum (p)—do not “commute,” meaning the order in which you apply them matters. This non‑commutativity is captured by a <span class="vocab" data-cn="对易关系">commutation relation</span> that introduces an intrinsic limit to how precisely both quantities can be known at once. From this algebraic insight Heisenberg formulated what would later be called the <span class="vocab" data-cn="不确定性原理">uncertainty principle</span>.`,
    `The uncertainty principle states that the product of the uncertainties in position and momentum must be at least half of the <span class="vocab" data-cn="普朗克常数">Planck constant</span> (ℏ). In practical terms, if you try to measure an electron’s location with extreme precision, its momentum becomes correspondingly fuzzy, and vice versa. This is not a limitation of experimental technique but a fundamental property of the <span class="vocab" data-cn="波函数">wavefunction</span>, which encodes all possible outcomes for a quantum system. The principle applies equally to other pairs of <span class="vocab" data-cn="可观测量">observable</span> quantities, such as energy and time.`,
    `The philosophical shock was immediate. If the microscopic world is governed by inherent uncertainties, then the deterministic clockwork universe of Newton loses its universal authority. Heisenberg, together with Niels Bohr and others, proposed the <span class="vocab" data-cn="哥本哈根解释">Copenhagen interpretation</span>, which embraced probability as a core feature of reality rather than a sign of ignorance. According to this view, physical properties do not possess definite values until they are measured, and the act of measurement itself plays an active role in shaping outcomes.`,
    `Experimental evidence soon reinforced Heisenberg’s claim. The famous electron diffraction experiments performed by Davisson and Germer demonstrated that electrons produce interference patterns characteristic of waves, confirming the wave‑particle duality implied by the uncertainty principle. Moreover, Heisenberg’s own thought experiment involving a gamma‑ray microscope illustrated how attempting to pinpoint an electron’s position inevitably imparts an unpredictable recoil, blurring its momentum. These and later precision measurements have repeatedly validated the quantitative limits set by the principle.`,
    `Today, the legacy of Heisenberg’s insight permeates modern technology. Semiconductor devices rely on quantum tunneling, a phenomenon that would be impossible without accepting uncertainty at nanometer scales. Magnetic resonance imaging (MRI) exploits spin‑state superpositions governed by the same principles. Even emerging fields like quantum computing and cryptography are built upon the idea that certain information cannot be simultaneously known or copied perfectly. In this way, Heisenberg’s principle not only challenged classical thinking but also opened doors to a new technological era.`,
  ],
  vocabulary: [
    { word: 'uncertainty principle', cn: '不确定性原理' },
    { word: 'quantum mechanics', cn: '量子力学' },
    { word: 'wavefunction', cn: '波函数' },
    { word: 'observable', cn: '可观测量' },
    { word: 'commutation relation', cn: '对易关系' },
    { word: 'Planck constant', cn: '普朗克常数' },
    { word: 'classical physics', cn: '古典物理学' },
    { word: 'determinism', cn: '决定论' },
    { word: 'matrix mechanics', cn: '矩阵力学' },
    { word: 'Copenhagen interpretation', cn: '哥本哈根解释' },
  ],
};

export default article;
