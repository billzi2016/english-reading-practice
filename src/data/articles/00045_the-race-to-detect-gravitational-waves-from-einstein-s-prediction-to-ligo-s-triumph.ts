import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Race to Detect Gravitational Waves: From Einstein’s Prediction to LIGO’s Triumph》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00045 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00045',
  slug: 'the-race-to-detect-gravitational-waves-from-einstein-s-prediction-to-ligo-s-triumph',
  title: 'The Race to Detect Gravitational Waves: From Einstein’s Prediction to LIGO’s Triumph',
  subtitle: 'How a century‑old theory became a new window on the universe.',
  summary: 'From Einstein’s 1916 insight to the first direct observation by LIGO, this story follows the scientific and engineering breakthroughs that made gravitational‑wave astronomy possible.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When Albert Einstein published his general theory of relativity in 1915, he also predicted the existence of <span class="vocab" data-cn="引力波">gravitational waves</span>. These ripples in the fabric of <span class="vocab" data-cn="时空曲率">spacetime curvature</span> travel at the speed of light, carrying information about cataclysmic events billions of light‑years away. For almost a century the idea remained elegant mathematics, because no instrument seemed capable of measuring such infinitesimal disturbances.`,
    `The first serious attempts to catch these waves came in the 1960s with Joseph Weber’s massive aluminum bars, designed to vibrate when a wave passed through. Although Weber reported occasional signals, subsequent experiments could not reproduce them, and the community grew skeptical. Still, his work sparked a crucial question: how could humanity build a detector sensitive enough to record motions smaller than one ten‑thousandth the diameter of a proton?`,
    `Enter the <span class="vocab" data-cn="干涉仪">interferometer</span>, an instrument that measures tiny changes in distance by comparing the phase of light traveling along two perpendicular arms. In the 1970s, Rainer Weiss at MIT outlined a design using laser beams reflected back and forth over kilometers of vacuum‑sealed tubes—a concept later refined into the <span class="vocab" data-cn="激光干涉仪">laser interferometer</span>. With the support of Kip Thorne and Barry Barish, this vision materialized as the Laser Interferometer Gravitational‑Wave Observatory (LIGO), with twin facilities in Washington and Louisiana.`,
    `Building LIGO was a battle against nature itself. Seismic activity, thermal fluctuations, and even distant traffic could drown out the faint signal. Engineers therefore created multi‑stage <span class="vocab" data-cn="真空系统">vacuum systems</span> to eliminate air currents, and sophisticated suspension platforms that isolated the mirrors from ground vibrations. Yet the most daunting hurdle was achieving a high <span class="vocab" data-cn="信噪比">signal-to-noise ratio</span>. Advanced data‑analysis pipelines were developed to sift through terabytes of noise, looking for the characteristic “<span class="vocab" data-cn="啁啾声">chirp</span>” pattern that marks a merging binary system.`,
    `On September 14, 2015, at precisely 09:50 UTC, LIGO recorded a fleeting disturbance lasting just a fraction of a second. The waveform matched predictions for a <span class="vocab" data-cn="双黑洞合并">binary black hole merger</span> about 1.3 billion light‑years away—a colossal event that released more energy in gravitational waves than all the stars in the observable universe combined during that instant. This detection, named GW150914, was announced a month later and instantly validated Einstein’s century‑old prediction.`,
    `The impact rippled through physics and astronomy alike. In 2017 the Nobel Prize in Physics honored Rainer Weiss, Kip Thorne, and Barry Barish for their decisive contributions to LIGO’s success. The detection opened an entirely new observational window, allowing scientists to study phenomena invisible to traditional telescopes—such as neutron‑star collisions that also emit electromagnetic radiation, leading to a multi‑messenger astronomy era.`,
    `Today, LIGO continues to upgrade its sensitivity, while partner observatories like Virgo in Italy and KAGRA in Japan join the global network, improving sky localization and detection rates. Plans for space‑based detectors such as LISA (Laser Interferometer Space Antenna) promise to listen to lower‑frequency waves from supermassive black holes. The race that began with Einstein’s pen has transformed into a worldwide collaboration, turning whispers of spacetime into a chorus of discovery.`,
  ],
  vocabulary: [
    { word: 'gravitational wave', cn: '引力波' },
    { word: 'spacetime curvature', cn: '时空曲率' },
    { word: 'interferometer', cn: '干涉仪' },
    { word: 'laser interferometer', cn: '激光干涉仪' },
    { word: 'signal-to-noise ratio', cn: '信噪比' },
    { word: 'chirp', cn: '啁啾声' },
    { word: 'binary black hole merger', cn: '双黑洞合并' },
    { word: 'vacuum system', cn: '真空系统' },
  ],
};

export default article;
