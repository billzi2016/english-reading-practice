import type { Article } from '../../types/index.ts';

// 文件意图：维护《James Chadwick and the Discovery of the Neutron: A Turning Point in Nuclear Physics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00319 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00319',
  slug: 'james-chadwick-and-the-discovery-of-the-neutron-a-turning-point-in-nuclear-physics',
  title: 'James Chadwick and the Discovery of the Neutron: A Turning Point in Nuclear Physics',
  subtitle: 'How a single experiment reshaped our understanding of matter',
  summary: 'The story of James Chadwick’s breakthrough that revealed the neutral particle at the heart of every atom.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `At the dawn of the twentieth century, physicists were still piecing together the structure of the <span class="vocab" data-cn="原子核">atomic nucleus</span>. Ernest Rutherford’s famous gold‑foil experiment had shown that a dense core held most of an atom’s mass, but only positively charged <span class="vocab" data-cn="质子">protons</span> and negatively charged electrons were known. The missing weight hinted at something invisible, a puzzle that would dominate laboratories for the next decade.`,
    `James Chadwick, a young physicist trained under Ernest Rutherford at the Cavendish Laboratory, entered this debate in 1930. He was aware of earlier attempts to detect neutral radiation emitted from beryllium when bombarded with alpha particles. Researchers such as Irène Curie and Frédéric Joliot had observed a highly penetrating ray, but they could not determine whether it consisted of gamma photons or something else entirely. Chadwick suspected the latter, proposing that the radiation might be a massive neutral particle.`,
    `To test his hypothesis, Chadwick designed a clever <span class="vocab" data-cn="散射实验">scattering experiment</span>. He placed a beryllium target in front of a source of alpha particles from polonium. When the alphas struck the beryllium, a neutral radiation emerged and was directed onto a block of paraffin wax rich in hydrogen atoms. If the radiation were gamma rays, they would impart only tiny amounts of energy to the hydrogen nuclei; if it were a massive particle, the recoil protons would carry measurable kinetic energy.`,
    `Using a sophisticated ionisation chamber, Chadwick measured the energies of the ejected protons and found them far larger than could be explained by photon scattering. By applying conservation of momentum and energy, he calculated that the neutral particle’s mass was comparable to that of the proton—about one atomic mass unit. This result confirmed the existence of the <span class="vocab" data-cn="中子">neutron</span>, a discovery that earned him the 1935 Nobel Prize in Physics.`,
    `The neutron immediately solved several lingering problems. It explained why isotopes—atoms with identical proton numbers but different <span class="vocab" data-cn="同位素质量">isotopic mass</span>—could exist: extra neutrons added weight without altering charge. Moreover, the neutral particle could penetrate atomic nuclei more easily than charged particles, opening a pathway to induce nuclear reactions that were previously impossible. This insight paved the way for Enrico Fermi’s experiments on neutron‑induced radioactivity and ultimately for the discovery of nuclear fission in 1938.` ,
    `Beyond its practical implications, the neutron forced theorists to revisit <span class="vocab" data-cn="量子力学">quantum mechanics</span>. The particle’s lack of electric charge meant that it did not experience Coulomb repulsion inside the nucleus, allowing protons and neutrons to occupy the same spatial region. This led to the development of the nuclear shell model, where nucleons (protons and neutrons) fill discrete energy levels much like electrons do around an atom—a concept still central to modern nuclear physics.` ,
    `Chadwick’s breakthrough also had profound historical consequences. During World War II, the knowledge that a chain reaction could be driven by neutron capture became the scientific foundation of the Manhattan Project, culminating in the first atomic bombs. While Chadwick later expressed deep moral ambivalence about these applications, his discovery remains a cornerstone of both fundamental science and its societal impact, reminding us how a single insight can reshape an entire field.` ,
  ],
  vocabulary: [
    { word: 'neutron', cn: '中子' },
    { word: 'atomic nucleus', cn: '原子核' },
    { word: 'beta decay', cn: 'β衰变' },
    { word: 'isotopic mass', cn: '同位素质量' },
    { word: 'scattering experiment', cn: '散射实验' },
    { word: 'quantum mechanics', cn: '量子力学' },
    { word: 'proton', cn: '质子' },
  ],
};

export default article;
