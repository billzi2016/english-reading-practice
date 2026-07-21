import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of the Higgs Boson: The ‘God Particle’ and Its Impact on Modern Physics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00324 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00324',
  slug: 'the-discovery-of-the-higgs-boson-the-god-particle-and-its-impact-on-modern-physics',
  title: 'The Discovery of the Higgs Boson: The ‘God Particle’ and Its Impact on Modern Physics',
  subtitle: 'How a Decades‑Long Quest Reshaped Our Understanding of Matter',
  summary: 'A narrative of the theoretical prediction, experimental hunt, and scientific consequences of finding the Higgs boson.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1960s a handful of physicists grappled with a puzzling question: why do elementary particles have mass at all? Their answer came in the form of a new quantum field, later named the <span class="vocab" data-cn="希格斯场">Higgs field</span>, which would endow particles with inertia when they interacted with it. The idea was elegant but abstract, and for decades it remained an untested piece of the emerging <span class="vocab" data-cn="标准模型">Standard Model</span> of particle physics.`,
    `Peter Higgs, along with Robert Brout, François Englert and others, formalized the mechanism that would later bear his name. Their papers described a spontaneous <span class="vocab" data-cn="对称性破缺">symmetry breaking</span> process that would give rise to a massive scalar particle—the <span class="vocab" data-cn="希格斯玻色子">Higgs boson</span>. Yet the mathematics alone could not convince skeptics; only an experiment capable of probing energies far beyond those accessible in existing accelerators could settle the debate.`,
    `Enter the Large Hadron Collider (<span class="vocab" data-cn="大型强子对撞机">LHC</span>), a 27‑kilometre ring of superconducting magnets buried beneath the Franco‑Swiss border. When it switched on in 2008, the LHC became the most powerful <span class="vocab" data-cn="粒子加速器">particle accelerator</span> ever built, smashing protons together at a centre‑of‑mass energy of 7 TeV. Two massive detectors—ATLAS and CMS—were tasked with sifting through billions of collision events to spot the fleeting signatures of the Higgs boson’s decay products.`,
    `On July 4, 2012, both collaborations announced the observation of a new particle with a mass around 125 GeV/c². The statistical significance exceeded the five‑sigma threshold that physicists regard as proof of discovery. While the particle’s properties still needed careful measurement, the headline was clear: the long‑sought <span class="vocab" data-cn="希格斯玻色子">Higgs boson</span> had finally emerged from the data, confirming the mechanism that gives particles their mass.`,
    `Further analysis over the next year refined the particle’s couplings to other fields and demonstrated that it behaved exactly as predicted by the Standard Model. In 2013 Peter Higgs and François Englert were awarded the Nobel Prize in Physics for their theoretical work, a rare instance where theory and experiment converged so spectacularly after more than half a century of effort.`,
    `The discovery did not close the book on fundamental physics; instead it opened new chapters. With the Higgs field now experimentally verified, physicists turned to its remaining mysteries: why the Higgs boson’s mass is relatively low compared with the Planck scale, and whether additional scalar particles exist. The result has spurred a wave of theories—supersymmetry, extra dimensions, and composite Higgs models—all seeking to explain <span class="vocab" data-cn="质量产生机制">mass generation</span> without fine‑tuning.`,
    `Looking ahead, the LHC is preparing for higher luminosity runs that will collect ten times more data than before. This bounty of collisions will allow scientists to test the Higgs boson’s self‑interaction and search for rare decay modes that could hint at physics beyond the Standard Model. Whether the next breakthrough comes from a subtle deviation in Higgs behaviour or an entirely new particle, the legacy of the 2012 discovery endures as a testament to human curiosity and collaborative ingenuity.`,
  ],
  vocabulary: [
    { word: 'Higgs field', cn: '希格斯场' },
    { word: 'Standard Model', cn: '标准模型' },
    { word: 'symmetry breaking', cn: '对称性破缺' },
    { word: 'Higgs boson', cn: '希格斯玻色子' },
    { word: 'Large Hadron Collider', cn: '大型强子对撞机' },
    { word: 'particle accelerator', cn: '粒子加速器' },
    { word: 'mass generation', cn: '质量产生机制' },
  ],
};

export default article;
