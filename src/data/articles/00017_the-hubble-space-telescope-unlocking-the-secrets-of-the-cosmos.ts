import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Hubble Space Telescope: Unlocking the Secrets of the Cosmos》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00017 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00017',
  slug: 'the-hubble-space-telescope-unlocking-the-secrets-of-the-cosmos',
  title: 'The Hubble Space Telescope: Unlocking the Secrets of the Cosmos',
  subtitle: "A Journey Through Hubble's Discoveries and Legacy",
  summary: 'Explore how the Hubble Space Telescope transformed our view of the universe through groundbreaking observations.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `The <span class="vocab" data-cn="太空望远镜">space telescope</span> known as Hubble was launched aboard the Space Shuttle Discovery on April 24, 1990 and placed into a stable <span class="vocab" data-cn="低地球轨道">low Earth orbit</span> about 540 kilometers above the planet. By operating above Earth's turbulent atmosphere, Hubble can capture images with an angular resolution that far exceeds any ground‑based instrument of its size, revealing details as small as a few light‑years in distant galaxies.`,
    `Equipped with a suite of interchangeable instruments, Hubble has been able to observe the universe across a broad range of wavelengths. The Wide Field Camera and later the Advanced Camera for Surveys provide high‑resolution imaging, while spectrographs such as the Space Telescope Imaging Spectrograph (STIS) enable <span class="vocab" data-cn="光谱学">spectroscopy</span> that dissects the chemical fingerprints of stars and nebulae. This versatility allows astronomers to study both the structure and composition of celestial objects in unprecedented detail.`,
    `One of Hubble's most profound contributions was refining measurements of cosmic expansion. By observing distant Type Ia supernovae, researchers discovered that the universe's expansion is accelerating, a finding that introduced the mysterious concept of <span class="vocab" data-cn="暗能量">dark energy</span>. This revelation reshaped cosmology, prompting new theories about the ultimate fate of the cosmos and inspiring a generation of precision cosmology experiments.`,
    `Hubble's sensitivity to short wavelengths makes it uniquely suited for studying planetary atmospheres beyond our solar system. Using its <span class="vocab" data-cn="紫外线">ultraviolet</span> capabilities, astronomers have detected the signatures of hydrogen and helium escaping from hot <span class="vocab" data-cn="系外行星">exoplanet</span> atmospheres, providing direct evidence of atmospheric loss processes. These observations complement ground‑based surveys and help refine models of planetary evolution.`,
    `Unlike most space observatories, Hubble has been serviced by astronauts on five separate <span class="vocab" data-cn="维修任务">servicing mission</span>s. During each visit, crews replaced aging components, installed new instruments such as the Cosmic Origins Spectrograph, and repaired critical systems. These hands‑on upgrades not only restored Hubble's performance but also extended its operational life well beyond the original five‑year expectation, allowing it to continue delivering scientific breakthroughs for over three decades.`,
    `Hubble has also served as a cornerstone for building the <span class="vocab" data-cn="宇宙距离阶梯">cosmic distance ladder</span>. By measuring Cepheid variable stars in nearby galaxies and calibrating their intrinsic brightness, astronomers can infer distances to far‑more distant supernovae, anchoring the scale of the observable universe. Additionally, Hubble's sharp imaging has captured spectacular examples of <span class="vocab" data-cn="引力透镜">gravitational lensing</span>, where massive foreground objects bend and magnify background galaxies, offering natural telescopes that probe the early universe.`,
    `As the flagship of observational astronomy for more than thirty years, Hubble's legacy endures in the design and scientific goals of newer missions. The James Webb Space Telescope, scheduled to operate primarily in the infrared, builds upon Hubble's achievements by targeting even fainter objects at higher redshifts. Together, these observatories form a complementary pair that continues to unlock the secrets of the cosmos, inspiring both scientists and the public alike.`,
  ],
  vocabulary: [
    { word: 'space telescope', cn: '太空望远镜' },
    { word: 'low Earth orbit', cn: '低地球轨道' },
    { word: 'spectroscopy', cn: '光谱学' },
    { word: 'dark energy', cn: '暗能量' },
    { word: 'ultraviolet', cn: '紫外线' },
    { word: 'exoplanet', cn: '系外行星' },
    { word: 'servicing mission', cn: '维修任务' },
    { word: 'cosmic distance ladder', cn: '宇宙距离阶梯' },
    { word: 'gravitational lensing', cn: '引力透镜' },
  ],
};

export default article;
