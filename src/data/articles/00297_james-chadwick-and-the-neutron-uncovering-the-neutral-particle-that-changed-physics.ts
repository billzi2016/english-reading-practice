import type { Article } from '../../types/index.ts';

// 文件意图：维护《James Chadwick and the Neutron: Uncovering the Neutral Particle that Changed Physics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00297 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00297',
  slug: 'james-chadwick-and-the-neutron-uncovering-the-neutral-particle-that-changed-physics',
  title: 'James Chadwick and the Neutron: Uncovering the Neutral Particle that Changed Physics',
  subtitle: 'How a single experiment revealed the missing piece of the atom.',
  summary: 'The story of James Chadwick’s discovery of the neutron and its profound impact on modern physics.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `At the dawn of the twentieth century, physicists were wrestling with a puzzling discrepancy: the mass of an atom far exceeded the sum of its known constituents, the electron and the positively charged <span class="vocab" data-cn="α粒子">alpha particle</span>. Ernest Rutherford’s planetary model placed these particles orbiting a dense <span class="vocab" data-cn="原子核">atomic nucleus</span>, yet the measured atomic weight suggested something heavy was hidden inside. Young scientists, including a bright Cambridge graduate named James Chadwick, sensed that the answer lay in an unseen particle.`,
    `The missing mass problem became more acute after the discovery of the proton in 1917 and the realization that many elements possessed multiple forms with identical chemical behavior but different masses—so‑called <span class="vocab" data-cn="同位素">isotope</span>s. Traditional tools such as the <span class="vocab" data-cn="质谱仪">mass spectrometer</span> could separate these isotopes, confirming their distinct weights, yet they offered no clue about the nature of the extra mass inside the nucleus.`,
    `In early 1932 Chadwick designed a clever scattering experiment at the Cavendish Laboratory. He bombarded a thin beryllium sheet with high‑energy <span class="vocab" data-cn="α粒子">alpha particles</span> emitted from a polonium source. Detectors placed around the target recorded a stream of highly penetrating radiation that was not deflected by electric or magnetic fields, indicating it carried no charge. By measuring how this radiation knocked protons out of a paraffin block, Chadwick inferred its mass to be comparable to that of a proton but without electrical charge—a neutral particle he later named the <span class="vocab" data-cn="中子">neutron</span>.`,
    `The discovery of the <span class="vocab" data-cn="中子">neutron</span> resolved the mass discrepancy instantly. Unlike the positively charged proton, the neutron could slip into the nucleus without electrostatic repulsion, allowing nuclei to pack more nucleons together and explaining why isotopes differed in weight. Moreover, the neutral nature of the particle meant it could penetrate atomic clouds far more easily than charged particles, a property that would later prove crucial for inducing nuclear reactions.`,
    `Chadwick’s breakthrough sparked a cascade of advances. Physicists quickly realized that neutron‑induced <span class="vocab" data-cn="β衰变">beta decay</span> could transform one element into another, providing a mechanism for the creation of new isotopes in the laboratory. The ability to bombard nuclei with neutrons also led Enrico Fermi to discover slow‑neutron capture, laying the groundwork for nuclear fission—a process that would unleash both unprecedented energy and profound ethical dilemmas.`,
    `The practical implications were immediate. In 1938 Otto Hahn and Fritz Strassmann observed that uranium exposed to neutron bombardment split into lighter elements, a phenomenon Lise Meitner correctly interpreted as nuclear fission. This insight, built upon Chadwick’s neutral particle, paved the way for the Manhattan Project and the eventual development of atomic weapons. Yet the same physics also enabled peaceful applications such as nuclear power generation and medical imaging techniques that rely on neutron activation analysis.`,
    `For his monumental contribution, James Chadwick received the 1935 Nobel Prize in Physics, cementing his place among the architects of modern quantum theory. His discovery not only completed the picture of the atomic nucleus but also opened a new era where the interplay of neutrons, protons, and electrons could be explored with unprecedented precision. Today, neutron scattering facilities around the world continue to probe the structure of materials, echoing Chadwick’s original curiosity about the invisible building blocks of matter.`,
  ],
  vocabulary: [
    { word: 'neutron', cn: '中子' },
    { word: 'alpha particle', cn: 'α粒子' },
    { word: 'atomic nucleus', cn: '原子核' },
    { word: 'beta decay', cn: 'β衰变' },
    { word: 'isotope', cn: '同位素' },
    { word: 'mass spectrometer', cn: '质谱仪' },
  ],
};

export default article;
