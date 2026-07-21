import type { Article } from '../../types/index.ts';

// 文件意图：维护《Early British Attempts on Everest in the 1930s: Cultural Encounters, Tragedy, and the Path to Success》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00273 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00273',
  slug: 'early-british-attempts-on-everest-in-the-1930s-cultural-encounters-tragedy-and-the-path-to-success',
  title: 'Early British Attempts on Everest in the 1930s: Cultural Encounters, Tragedy, and the Path to Success',
  subtitle: 'How daring expeditions shaped mountaineering knowledge and cross‑cultural relations.',
  summary: 'A narrative of the 1930s British climbs on <span class="vocab" data-cn="珠穆朗玛峰">Mount Everest</span>, their hardships, cultural exchanges, and lasting legacy.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `The allure of <span class="vocab" data-cn="珠穆朗玛峰">Mount Everest</span> had already captured the British imagination after the tragic disappearance of George Mallory and Andrew Irvine in 1924. The <span class="vocab" data-cn="英国皇家地理学会">Royal Geographical Society</span> commissioned a series of new expeditions in the early 1930s, hoping to apply fresh scientific methods and better logistics to finally reach the summit. These missions were not merely sporting endeavors; they were also statements of imperial prestige and scientific curiosity during an era of intense geopolitical competition.`,
    `The first of these was the 1930 expedition led by Edward Norton, a seasoned climber who had previously served as deputy leader on the 1924 attempt. Norton's team established a more permanent base at the Rongbuk <span class="vocab" data-cn="气象站">weather observatory</span> on the north side of the mountain, allowing for systematic observations of wind patterns and temperature gradients. By employing a staggered acclimatization schedule—spending several days at intermediate camps—they hoped to mitigate the debilitating effects of <span class="vocab" data-cn="高山病">altitude sickness</span>. Although they turned back well below the summit, their meticulous record‑keeping set new standards for high‑altitude research.`,
    `In 1933 a second British party, this time under the command of Hugh Ruttledge, attempted a more aggressive push toward the North Col. Ruttledge introduced improved <span class="vocab" data-cn="绳索技术">rope technique</span>, using double‑roped lines to increase safety on icy sections. The expedition also experimented with supplemental oxygen at higher camps, refining mask designs that had proved unreliable in earlier attempts. Despite these innovations, a sudden storm forced the climbers to retreat after reaching an altitude of 8,300 meters, illustrating how weather could still outwit even the best‑prepared teams.`,
    `The 1935 expedition marked a turning point in cultural interaction. Led by Eric Shipton and Bill Tilman, it placed unprecedented trust in the local <span class="vocab" data-cn="尼泊尔的夏尔巴人">Sherpa</span> community, appointing Sherpas as lead guides rather than mere porters. This shift fostered a deeper exchange of knowledge: Sherpas taught the British how to read subtle changes in snowpack stability, while the climbers introduced modern cartographic techniques that would later aid Tibetan mapping projects. The mutual respect forged on those icy slopes laid groundwork for future collaborations beyond mountaineering.`,
    `Tragedy, however, remained an ever‑present shadow. During the 1935 climb a Sherpa named Kulu suffered a fatal fall while fixing a fixed line near Camp III, underscoring the perilous nature of high‑altitude work and the often‑overlooked sacrifices of local staff. The loss prompted the expedition leaders to reevaluate safety protocols, leading to stricter rope anchoring standards and mandatory rest periods after each ascent segment. These hard‑won lessons would later prove vital for the successful 1953 summit attempt.`,
    `Beyond individual mishaps, the 1930s expeditions contributed a wealth of scientific data that reshaped Western understanding of the Himalayas. Detailed measurements of barometric pressure, glacier movement, and wind velocity were transmitted back to London, where geographers incorporated them into more accurate topographic maps. Moreover, the experience gained in high‑altitude logistics—such as establishing supply caches, coordinating multi‑day acclimatization rotations, and managing limited oxygen supplies—became a template for future polar and mountain ventures worldwide.`,
    `When Sir John Hunt finally led the 1953 British expedition that placed Edmund Hillary and Tenzing Norgay on the summit, he often credited the groundwork laid in the 1930s. The cumulative knowledge of rope handling, acclimatization schedules, and respectful partnership with Sherpas transformed what had once been a series of heroic but futile attempts into a disciplined, science‑driven pursuit. In this way, the early British climbs not only shaped mountaineering technique but also forged enduring cross‑cultural bonds that continue to define Himalayan exploration today.`,
  ],
  vocabulary: [
    { word: 'Mount Everest', cn: '珠穆朗玛峰' },
    { word: 'Royal Geographical Society', cn: '英国皇家地理学会' },
    { word: 'altitude sickness', cn: '高山病' },
    { word: 'rope technique', cn: '绳索技术' },
    { word: 'Sherpa', cn: '尼泊尔的夏尔巴人' },
    { word: 'weather observatory', cn: '气象站' },
  ],
};

export default article;
