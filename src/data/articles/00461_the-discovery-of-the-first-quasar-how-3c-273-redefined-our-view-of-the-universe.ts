import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of the First Quasar: How 3C 273 Redefined Our View of the Universe》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00461 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00461',
  slug: 'the-discovery-of-the-first-quasar-how-3c-273-redefined-our-view-of-the-universe',
  title: 'The Discovery of the First Quasar: How 3C 273 Redefined Our View of the Universe',
  subtitle: 'How a tiny radio point source reshaped modern cosmology',
  summary: 'The story of 3C 273’s identification as the first quasar and its lasting impact on astronomy.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1960s, radio astronomers at the Cambridge Radio Astronomy Group were cataloguing bright point sources in the sky. One of the brightest entries was labeled 3C 273, a compact object that emitted strong radio waves but appeared star‑like on optical photographs. At first it was assumed to be a nearby “radio galaxy”, yet its exact nature remained puzzling because no obvious nebular structure could be seen around it.`,
    `The breakthrough came when Dutch astronomer <span class="vocab" data-cn="光谱仪">spectrograph</span> specialist Maarten Schmidt obtained an optical spectrum of 3C 273 using the Palomar 200‑inch telescope. The spectrum displayed a series of broad emission lines that did not match any known stellar pattern. By comparing these lines with laboratory wavelengths, Schmidt realized they were hydrogen Balmer lines shifted toward longer wavelengths.`,
    `This shift was quantified as a <span class="vocab" data-cn="红移">redshift</span> of z ≈ 0.158, implying that the object was receding at about 47 000 km/s due to cosmic expansion. In the framework of Hubble’s law, such a redshift placed 3C 273 billions of light‑years away—far beyond any ordinary star in our galaxy. The implication was startling: an apparently stellar point source was actually an extragalactic powerhouse.`,
    `Schmidt coined the term “quasi‑stellar radio source”, later shortened to <span class="vocab" data-cn="类星体">quasar</span>, to reflect its hybrid nature—point‑like like a star but emitting prodigious radio energy. The discovery forced astronomers to rethink the limits of <span class="vocab" data-cn="光度">luminosity</span> that a single object could sustain, because even a modest fraction of the Sun’s output at such distances would be undetectable.`,
    `Further observations revealed that 3C 273’s total energy output was over a thousand times greater than an entire galaxy like the Milky Way. This extraordinary <span class="vocab" data-cn="光度">luminosity</span> could not be powered by normal stellar processes. Theoretical work soon suggested that matter falling onto a supermassive black hole, forming an <span class="vocab" data-cn="吸积盘">accretion disk</span>, could convert gravitational potential energy into radiation with the required efficiency.`,
    `Radio interferometry added another layer of insight. Using very long baseline techniques—essentially linking telescopes across continents as a giant <span class="vocab" data-cn="干涉仪">interferometer</span>—astronomers mapped 3C 273’s radio jets with milliarcsecond resolution. The jets emitted polarized radiation consistent with <span class="vocab" data-cn="同步辐射">synchrotron radiation</span>, confirming that relativistic electrons spiraled in magnetic fields near the central engine.`,
    `The discovery of 3C 273 opened an entire field of high‑energy astrophysics. Within a few years, dozens of quasars were identified, spanning a wide range of redshifts up to z > 6, pushing the observable universe back toward its infancy. Quasars became beacons for probing intergalactic gas, measuring cosmic expansion, and testing theories of galaxy formation.`,
    `Today, large surveys such as the Sloan Digital Sky Survey continue to catalog thousands of quasars, yet the legacy of 3C 273 remains central. Its unexpected combination of stellar appearance, extreme <span class="vocab" data-cn="光度">luminosity</span>, and high <span class="vocab" data-cn="红移">redshift</span> forced a paradigm shift that still influences how we view the cosmos. The tiny point source that once baffled radio astronomers now stands as a cornerstone of modern astrophysics.`,
  ],
  vocabulary: [
    { word: 'quasar', cn: '类星体' },
    { word: 'redshift', cn: '红移' },
    { word: 'spectrograph', cn: '光谱仪' },
    { word: 'luminosity', cn: '光度' },
    { word: 'synchrotron radiation', cn: '同步辐射' },
    { word: 'interferometer', cn: '干涉仪' },
    { word: 'accretion disk', cn: '吸积盘' },
  ],
};

export default article;
