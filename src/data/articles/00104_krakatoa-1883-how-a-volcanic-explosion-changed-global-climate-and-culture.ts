import type { Article } from '../../types/index.ts';

// 文件意图：维护《Krakatoa 1883: How a Volcanic Explosion Changed Global Climate and Culture》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00104 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00104',
  slug: 'krakatoa-1883-how-a-volcanic-explosion-changed-global-climate-and-culture',
  title: 'Krakatoa 1883: How a Volcanic Explosion Changed Global Climate and Culture',
  subtitle: 'The eruption that reshaped skies, weather patterns, and artistic imagination.',
  summary: 'An exploration of the 1883 Krakatoa eruption, its atmospheric effects, and its lasting imprint on global culture.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On the early morning of August 27, 1883, the island of Krakatoa—situated in the Sunda Strait between Java and Sumatra—awoke with a series of violent explosions. The final blast, estimated at a magnitude of 6 on the volcanic explosivity index, was so powerful that it generated a pressure wave that circled the Earth multiple times. Contemporary observers described the sound as “the roar of a thousand cannons,” a description that still resonates in modern accounts of the disaster.`,
    `The eruption expelled an enormous <span class="vocab" data-cn="火山灰云">ash plume</span> that rose more than 25 kilometers into the stratosphere. Once aloft, the fine particles spread eastward with the prevailing trade winds, forming a thin veil that dimmed sunlight across continents. In Europe and North America, sunsets turned an eerie crimson, prompting both scientific curiosity and artistic inspiration. The phenomenon was later identified as a classic example of how <span class="vocab" data-cn="大气环流">atmospheric circulation</span> can transport volcanic material around the globe within weeks.`,
    `The climatic repercussions were swift and measurable. Global average temperatures fell by roughly 0.5 °C in the year following the eruption, a modest but significant dip known as a <span class="vocab" data-cn="气候异常">climate anomaly</span>. Crop yields suffered in parts of Europe, leading to higher grain prices and brief food shortages. While the temperature change was temporary—temperatures rebounded within two years—the event provided early empirical evidence for the link between volcanic activity and short‑term climate cooling, a concept that would later inform modern climate models.`,
    `Beyond the physical effects, Krakatoa’s eruption left an indelible mark on contemporary culture. Photographers such as William de Courcy Clarke captured the first known images of the ash cloud from a ship in the strait, creating what historians call one of the earliest <span class="vocab" data-cn="摄影纪实">photographic chronicles</span> of a natural disaster. These pictures were reproduced in newspapers worldwide, turning distant scientific observation into a shared visual experience for the public.`,
    `Artists and writers also responded to the strange skies. The French painter Claude Monet painted several seascapes titled “The Sea at Le Havre” that feature unusually vivid reds and oranges, colors he later attributed to the lingering ash particles in the atmosphere. In literature, the eruption inspired poems and short stories that used the sudden darkness as a metaphor for societal upheaval, reflecting how a single geological event can ripple through collective imagination.`,
    `The acoustic impact of Krakatoa was equally remarkable. The explosion generated an <span class="vocab" data-cn="声波">acoustic wave</span> that traveled around the planet seven times before fading. Modern seismologists have reconstructed the waveform from barograph records, confirming that the pressure disturbance was comparable in energy to a magnitude‑9 earthquake. This discovery helped establish the field of infrasonic monitoring, which today is used to detect volcanic eruptions and even large meteor entries.`,
    `In the decades after 1883, the remnants of Krakatoa—now largely submerged—became a cautionary tale for colonial administrations and emerging scientific societies. The Dutch East Indies government instituted stricter maritime safety regulations in the strait, while the Royal Society funded expeditions to study volcanic gases and their role in climate. These institutional responses illustrate how a single catastrophic event can reshape policy, science, and public perception on a global scale.`,
    `Today, Krakatoa remains a reference point for both volcanologists and cultural historians. Its eruption is taught as a case study of rapid <span class="vocab" data-cn="气候变化">climate change</span> triggered by natural forces, while its artistic legacy reminds us that nature’s most violent moments often become sources of enduring human creativity. The story of Krakatoa thus bridges the gap between earth science and cultural memory, showing how a volcanic blast can echo through both skies and souls.`,
  ],
  vocabulary: [
    { word: 'ash plume', cn: '火山灰云' },
    { word: 'atmospheric circulation', cn: '大气环流' },
    { word: 'climate anomaly', cn: '气候异常' },
    { word: 'photographic chronicle', cn: '摄影纪实' },
    { word: 'acoustic wave', cn: '声波' },
    { word: 'climate change', cn: '气候变化' },
  ],
};

export default article;
