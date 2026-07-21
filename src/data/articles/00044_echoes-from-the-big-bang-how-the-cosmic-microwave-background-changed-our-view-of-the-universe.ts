import type { Article } from '../../types/index.ts';

// 文件意图：维护《Echoes from the Big Bang: How the Cosmic Microwave Background Changed Our View of the Universe》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00044 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00044',
  slug: 'echoes-from-the-big-bang-how-the-cosmic-microwave-background-changed-our-view-of-the-universe',
  title: 'Echoes from the Big Bang: How the Cosmic Microwave Background Changed Our View of the Universe',
  subtitle: 'From a serendipitous hiss to a precise map of the early cosmos',
  summary: 'The discovery and study of the <span class="vocab" data-cn="宇宙微波背景辐射">Cosmic Microwave Background</span> transformed modern cosmology, confirming the Big Bang and revealing the universe’s geometry, composition, and infancy.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In 1964, two radio astronomers at Bell Labs—Arno Penzias and Robert Wilson—were trying to calibrate a horn antenna for satellite communication. Instead of the crisp signal they expected, they heard a persistent hiss that seemed to come from every direction in the sky. After months of eliminating pigeon droppings, thermal noise, and equipment flaws, they concluded the noise was real: an isotropic glow at a temperature of about 3 kelvin. This accidental detection turned out to be the first observation of the <span class="vocab" data-cn="宇宙微波背景辐射">Cosmic Microwave Background</span> (CMB), a relic radiation predicted by the <span class="vocab" data-cn="大爆炸理论">Big Bang theory</span>.`,
    `The CMB is essentially <span class="vocab" data-cn="黑体辐射">blackbody radiation</span>, meaning its spectrum matches that of an idealized perfect emitter. When the universe was roughly 380,000 years old—a period known as the <span class="vocab" data-cn="复合时代">recombination epoch</span>—electrons and protons combined to form neutral hydrogen, allowing photons to travel freely for the first time. Those ancient photons have been stretched by cosmic expansion, cooling from millions of kelvin to a microwave temperature we can measure today. Their uniformity across the sky was a striking confirmation that the early universe was hot, dense, and expanding.`,
    `However, the CMB is not perfectly smooth. In 1992, NASA’s <span class="vocab" data-cn="宇宙背景探测卫星">COBE</span> satellite measured tiny temperature variations—differences of only a few parts in 100,000—known as <span class="vocab" data-cn="各向异性">anisotropies</span>. These minute fluctuations are the seeds of all cosmic structure: galaxies, clusters, and voids grew from regions that were ever so slightly denser than their surroundings. The detection of anisotropy turned the CMB from a mere confirmation of the Big Bang into a powerful probe of cosmological parameters.`,
    `The next generation of satellites refined this picture dramatically. <span class="vocab" data-cn="威尔金森微波各向异性探测仪">WMAP</span> (2001‑2010) produced a full-sky map with angular resolution down to 0.2°, revealing a pattern of hot and cold spots that matched predictions from the <span class="vocab" data-cn="膨胀理论">inflationary theory</span>. Inflation posits an ultra-rapid expansion fractionally after the Big Bang, smoothing out any initial irregularities while imprinting quantum fluctuations onto the fabric of space‑time. The statistical properties of these spots—especially the series of <span class="vocab" data-cn="声学峰">acoustic peaks</span> in the angular power spectrum—allowed cosmologists to measure the universe’s curvature, showing it is remarkably flat.`,
    `Flatness implies that the total energy density equals a critical value, but ordinary matter accounts for only about 5 % of this budget. The CMB data forced scientists to accept two mysterious components: <span class="vocab" data-cn="暗物质">dark matter</span>, which clusters gravitationally yet does not emit light, and <span class="vocab" data-cn="暗能量">dark energy</span>, a repulsive force driving the accelerated expansion observed in distant supernovae. By fitting the CMB’s acoustic peak heights and positions, researchers derived precise fractions: roughly 27 % dark matter and 68 % dark energy, reshaping our inventory of cosmic ingredients.`,
    `The most recent mission, the European Space Agency’s <span class="vocab" data-cn="普朗克卫星">Planck</span> satellite (2009‑2013), pushed precision to unprecedented levels. Its high‑resolution maps confirmed earlier results and tightened uncertainties on parameters such as the Hubble constant and the spectral index of primordial fluctuations. Moreover, Planck detected subtle secondary effects—like the <span class="vocab" data-cn="光学深度">optical depth</span> due to reionization—that inform us about when the first stars ignited. Together, these observations have turned the CMB into a cosmic Rosetta Stone, translating the physics of the infant universe into numbers we can test against theory.`,
    `Today, the legacy of that humble hiss continues to inspire new experiments. Ground‑based observatories such as the South Pole Telescope and the Atacama Cosmology Telescope aim to measure even fainter polarization patterns—so‑called B‑modes—that could reveal gravitational waves from inflation directly. If detected, these ripples would provide a direct window onto physics at energies far beyond any particle accelerator, completing a narrative that began with two engineers hearing static in a New Jersey basement and ended with humanity listening to the echo of creation itself.`,
  ],
  vocabulary: [
    { word: 'Cosmic Microwave Background', cn: '宇宙微波背景辐射' },
    { word: 'blackbody radiation', cn: '黑体辐射' },
    { word: 'anisotropy', cn: '各向异性' },
    { word: 'recombination epoch', cn: '复合时代' },
    { word: 'acoustic peaks', cn: '声学峰' },
    { word: 'inflationary theory', cn: '膨胀理论' },
    { word: 'dark matter', cn: '暗物质' },
    { word: 'dark energy', cn: '暗能量' },
    { word: 'Planck', cn: '普朗克卫星' },
  ],
};

export default article;
