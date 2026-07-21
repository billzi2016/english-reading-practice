import type { Article } from '../../types/index.ts';

// 文件意图：维护《Victor Hess and the Discovery of Cosmic Rays》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00439 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00439',
  slug: 'victor-hess-and-the-discovery-of-cosmic-rays-unveiling-high-energy-particles-from-space',
  title: 'Victor Hess and the Discovery of Cosmic Rays',
  subtitle: 'How a daring balloon ascent revealed high‑energy particles from space',
  summary: 'The story of Victor Hess’s 1912 experiments that uncovered cosmic rays and reshaped our view of the universe.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early twentieth century, physicists were puzzled by a faint glow in electroscopes that seemed to disappear when they were placed inside thick metal shields. This mysterious effect was caused by <span class="vocab" data-cn="电离辐射">ionizing radiation</span>, which can strip electrons from atoms and create measurable electric currents. While many assumed the source lay within the Earth’s crust, a handful of researchers—including Theodor Wulf, who measured radiation atop the Eiffel Tower—noticed that the intensity did not drop as expected with altitude.`,
    `Enter Victor Hess, an Austrian physicist working at the Imperial Institute for Radium Research in Vienna. Inspired by Wulf’s observations, Hess designed a series of daring balloon flights in 1911 and 1912, carrying sealed electroscopes aloft to record radiation levels far above the ground. Each ascent was meticulously logged: altitude, temperature, and the electroscope’s discharge rate were noted on paper that fluttered like a flag in the thin air.`,
    `The decisive moment came on August 7, 1912, when Hess rose to an astonishing height of about 5,300 meters (≈17,400 feet) over the Alps. To his astonishment, the electroscope’s discharge rate increased sharply once he passed roughly 1,000 meters, contradicting the prevailing belief that radiation should weaken with distance from terrestrial sources. This rise indicated a powerful, penetrating form of <span class="vocab" data-cn="宇宙射线">cosmic rays</span> streaming down from outer space.`,
    `Hess’s findings sparked immediate debate. Some skeptics argued that the increased readings could be due to radioactive gases released by the balloon envelope or by solar activity. To address these concerns, Hess repeated his experiments at different times of day and under varying geomagnetic conditions, noting that the radiation intensity was largely independent of the Sun’s position. This consistency suggested an extraterrestrial origin rather than a solar one.`,
    `The term “cosmic rays” was coined later, as physicists realized that the particles were not merely photons but high‑energy <span class="vocab" data-cn="带电粒子">charged particles</span>—mostly protons and atomic nuclei—traveling near the speed of light. When these primary cosmic rays strike molecules in the upper atmosphere, they generate cascades of <span class="vocab" data-cn="次级粒子">secondary particles</span>, including muons, pions, and electrons, a process known as an atmospheric shower. This cascade explains why detectors on Earth can register radiation even though the primary particles never reach the surface directly.`,
    `Hess’s discovery earned him the 1936 Nobel Prize in Physics, shared with Carl D. Anderson for his identification of the positron. The legacy of Hess’s balloon work lives on in modern astrophysics: today, satellite‑borne <span class="vocab" data-cn="粒子探测器">particle detectors</span> and ground‑based observatories such as the Pierre Auger Observatory continue to map the energy spectrum and arrival directions of cosmic rays, probing phenomena from supernova remnants to active galactic nuclei.`,
    `Beyond pure science, understanding cosmic rays has practical implications. High‑energy particles can disrupt electronics on aircraft and spacecraft, and they contribute to background radiation that affects sensitive experiments in particle physics. By tracing their origins and interactions with Earth’s magnetic field—known as <span class="vocab" data-cn="地磁纬度">geomagnetic latitude</span> effects—researchers develop shielding strategies and improve the reliability of technology that operates at high altitudes or in orbit. Thus, Victor Hess’s bold ascent not only opened a new window onto the universe but also laid groundwork for protecting our modern technological world.`
  ],
  vocabulary: [
    { word: 'ionizing radiation', cn: '电离辐射' },
    { word: 'cosmic rays', cn: '宇宙射线' },
    { word: 'charged particles', cn: '带电粒子' },
    { word: 'secondary particles', cn: '次级粒子' },
    { word: 'particle detectors', cn: '粒子探测器' },
    { word: 'geomagnetic latitude', cn: '地磁纬度' }
  ],
};

export default article;
