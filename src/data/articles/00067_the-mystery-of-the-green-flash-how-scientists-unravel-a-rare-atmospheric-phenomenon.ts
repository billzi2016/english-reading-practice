import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Mystery of the Green Flash: How Scientists Unravel a Rare Atmospheric Phenomenon》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00067 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00067',
  slug: 'the-mystery-of-the-green-flash-how-scientists-unravel-a-rare-atmospheric-phenomenon',
  title: 'The Mystery of the Green Flash: How Scientists Unravel a Rare Atmospheric Phenomenon',
  subtitle: 'A Journey from Sailors’ Tales to Modern Spectroscopy',
  summary: 'Explore why a fleeting green glimmer appears at sunset and how researchers decode its physics.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the sun kisses the horizon over a calm sea, some lucky observers report a brief, vivid flash of green that lasts only a second or two. This fleeting event, known as the <span class="vocab" data-cn="绿闪">green flash</span>, has inspired myths and scientific curiosity for centuries. Its rarity stems from the precise alignment of atmospheric conditions, making it a perfect case study for how everyday phenomena can hide complex physics.`,
    `The earliest written accounts date back to the 17th century, when English astronomer <span class="vocab" data-cn="埃德蒙·哈雷">Edmond Halley</span> noted the phenomenon in his correspondence about sea voyages. Sailors on the Atlantic and Pacific coasts frequently mentioned the flash as a good omen for safe passage, yet they lacked any explanation beyond superstition. It wasn’t until the 19th‑century work of French physicist <span class="vocab" data-cn="奥古斯特·德·莫尔瓦">Augustin de la Rive</span> that the idea of atmospheric optics entered the discussion, laying groundwork for modern analysis.`,
    `The core mechanism behind the <span class="vocab" data-cn="大气折射">atmospheric refraction</span> is simple yet subtle: as sunlight travels through layers of air with varying density, its path bends toward the denser medium. Near the horizon, this bending becomes pronounced enough to separate the sun’s colors—a process called <span class="vocab" data-cn="色散">light dispersion</span>. Because green light sits between blue and yellow in wavelength, it can emerge from behind the solar limb just as the rest of the spectrum disappears, creating that momentary flash.`,
    `Not every sunset produces a green flash. Scientists have identified several key prerequisites: an unobstructed, flat horizon (often over ocean or desert), extremely low atmospheric turbulence, and a temperature inversion where cooler air lies above warmer air near the surface. These conditions reduce the <span class="vocab" data-cn="光学深度">optical depth</span> of the lower atmosphere, allowing the green wavelength to dominate for a split second before being scattered away.`,
    `Modern researchers capture the event with high‑speed cameras and precise <span class="vocab" data-cn="光度测量">photometric observation</span>. By recording the intensity of each color channel at millisecond intervals, they can reconstruct the exact spectral profile of the flash. Spectroscopy further reveals that the green light often peaks around 560 nm, matching a narrow band in the <span class="vocab" data-cn="太阳光谱">solar spectrum</span>. These measurements confirm that the phenomenon is not a magical illusion but a predictable outcome of known optical laws.`,
    `In the past two decades, atmospheric scientists have combined ground‑based observations with satellite data to model how temperature gradients and humidity layers affect refraction. A 2014 study published in *Journal of Atmospheric Sciences* demonstrated that even slight variations in <span class="vocab" data-cn="瑞利散射">Rayleigh scattering</span> can suppress or enhance the green flash, explaining why it appears more frequently in certain geographic regions such as the western coasts of Africa and South America. These models also help predict future occurrences under changing climate conditions.`,
    `Despite decades of study, the <span class="vocab" data-cn="绿闪">green flash</span> retains a sense of wonder for both casual observers and professional astronomers. Its brief appearance reminds us that even the most familiar celestial events can hide layers of complexity, waiting to be uncovered by curious eyes and careful instruments. As technology advances, we may soon be able to forecast the exact moments when the sky will gift us this emerald wink.`,
  ],
  vocabulary: [
    { word: 'green flash', cn: '绿闪' },
    { word: 'atmospheric refraction', cn: '大气折射' },
    { word: 'light dispersion', cn: '色散' },
    { word: 'solar spectrum', cn: '太阳光谱' },
    { word: 'optical depth', cn: '光学深度' },
    { word: 'Rayleigh scattering', cn: '瑞利散射' },
    { word: 'photometric observation', cn: '光度测量' },
  ],
};

export default article;
