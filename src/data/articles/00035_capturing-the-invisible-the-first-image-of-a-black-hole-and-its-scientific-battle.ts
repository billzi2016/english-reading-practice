import type { Article } from '../../types/index.ts';

// 文件意图：维护《Capturing the Invisible: The First Image of a Black Hole and Its Scientific Battle》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00035 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00035',
  slug: 'capturing-the-invisible-the-first-image-of-a-black-hole-and-its-scientific-battle',
  title: 'Capturing the Invisible: The First Image of a Black Hole and Its Scientific Battle',
  subtitle: 'How Global Collaboration Turned Theory into a Picture',
  summary: 'The story behind the Event Horizon Telescope’s historic image reveals technical ingenuity, fierce debate, and a new way to see the universe.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On April 10, 2019, the world saw something that had only existed in equations and computer simulations: a glowing ring surrounding a dark circle. The image was of the supermassive black hole at the center of galaxy M87, and it instantly became known as “the first picture of a black hole.” Behind the striking visual lay a decades‑long quest to capture light that never escapes the <span class="vocab" data-cn="事件视界">event horizon</span>, the boundary where gravity becomes irresistible.`,
    `The instrument that made this possible was not a single telescope but an array called the Event Horizon Telescope (EHT). By linking eight radio observatories across the globe—from the Atacama Desert in Chile to the icy peaks of Antarctica—the EHT performed <span class="vocab" data-cn="甚长基线干涉测量">very‑long‑baseline interferometry (VLBI)</span>. This technique treats each dish as a tiny element of a planet‑size “synthetic aperture,” allowing astronomers to achieve an angular resolution equivalent to reading a newspaper in New York from a café in Paris.`,

    `Collecting data was only half the battle. Each site recorded petabytes of raw radio waves on hard drives, then shipped them to two central processing centers in Massachusetts and Germany. There, engineers faced the daunting task of aligning the signals with nanosecond precision. Any timing error would blur the final picture, reducing the <span class="vocab" data-cn="信噪比">signal‑to‑noise ratio</span> below a usable level. The solution involved atomic clocks and sophisticated <span class="vocab" data-cn="傅里叶变换">Fourier transform</span> algorithms that converted time‑domain measurements into the spatial information needed to reconstruct an image.`,

    `Even after the data were combined, scientists had to decide how to turn a cloud of numbers into something recognizable. They employed multiple independent imaging pipelines—each based on different assumptions about the black hole’s <span class="vocab" data-cn="吸积盘">accretion disk</span> and surrounding plasma. The resulting images varied slightly, prompting intense debate within the collaboration. Some members argued that certain bright spots might be artifacts of the reconstruction process rather than real features.`,

    `The controversy was not merely academic; it touched on fundamental physics. General relativity predicts a specific “shadow” shape caused by <span class="vocab" data-cn="引力透镜效应">gravitational lensing</span> of light around the black hole. If the observed ring matched the predicted size, it would provide the most direct test of Einstein’s theory in the strong‑gravity regime. After weeks of cross‑checking, the teams converged on a consensus image that displayed a bright crescent with a dark central region roughly 40 microarcseconds across—exactly what theory anticipated.`,

    `The triumph sparked a new era of observational astrophysics. In May 2022, the EHT released an image of Sagittarius A*, the black hole at the Milky Way’s core, proving that the technique could work on a much smaller and more variable target. The success also inspired proposals for next‑generation arrays with additional dishes in space, aiming to sharpen the view of event horizons even further.`,

    `Beyond the scientific headlines, the story of the first black‑hole image is a reminder of how modern astronomy relies on global cooperation, cutting‑edge engineering, and healthy skepticism. The “battle” was fought not with weapons but with algorithms, clocks, and countless late‑night discussions across continents. In the end, humanity captured something that had been invisible for centuries—a glimpse into the darkest corners of our universe.`,
  ],
  vocabulary: [
    { word: 'event horizon', cn: '事件视界' },
    { word: 'very-long-baseline interferometry (VLBI)', cn: '甚长基线干涉测量' },
    { word: 'synthetic aperture', cn: '合成孔径' },
    { word: 'signal-to-noise ratio', cn: '信噪比' },
    { word: 'Fourier transform', cn: '傅里叶变换' },
    { word: 'accretion disk', cn: '吸积盘' },
    { word: 'gravitational lensing', cn: '引力透镜效应' },
  ],
};

export default article;
