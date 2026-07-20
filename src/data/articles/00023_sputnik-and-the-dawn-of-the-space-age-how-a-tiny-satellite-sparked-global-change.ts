import type { Article } from '../../types/index.ts';

// 文件意图：维护《Sputnik and the Dawn of the Space Age: How a Tiny Satellite Sparked Global Change》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00023 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00023',
  slug: 'sputnik-and-the-dawn-of-the-space-age-how-a-tiny-satellite-sparked-global-change',
  title: 'Sputnik and the Dawn of the Space Age: How a Tiny Satellite Sparked Global Change',
  subtitle: 'The launch that ignited a new era in science, politics, and culture.',
  summary: 'Sputnik’s 1957 launch sparked the Space Age, reshaping geopolitics, scientific research, and popular imagination worldwide.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On October 4, 1957, the Soviet Union lifted a modest metal sphere into Earth’s sky, marking the first successful placement of an artificial <span class="vocab" data-cn="人造卫星">satellite</span> in orbit. Named Sputnik 1, the device measured just 58 centimeters across and weighed roughly 83 kilograms, yet its silent passage around the planet ignited a cascade of reactions that would reshape science, politics, and culture worldwide. The launch was not merely a technical triumph; it signaled the arrival of a new era in which humanity could extend its reach beyond the confines of the atmosphere.`,
    `Sputnik’s <span class="vocab" data-cn="轨道的">orbital</span> path was a simple low‑Earth trajectory with an apogee of roughly 947 kilometers and a perigee near 215 kilometers, completing each circuit in about ninety‑nine minutes. The satellite relied on a modest <span class="vocab" data-cn="推进系统">propulsion</span> system: a spring‑loaded antenna that extended after launch to broadcast a steady beep at 20.005 MHz. Though it carried no onboard fuel, its design demonstrated that a small, self‑contained craft could survive the harsh conditions of space long enough to transmit useful data back to ground stations.`,
    `The news of Sputnik’s success traveled faster than any radio wave it emitted, reaching American households within hours and triggering an immediate reassessment of national security. In the context of the <span class="vocab" data-cn="地缘政治">geopolitics</span> of the Cold War, the achievement was interpreted as evidence that the Soviet Union possessed not only a superior missile capability but also the technological infrastructure to launch intercontinental weapons from space. This perception spurred a wave of policy initiatives, including the establishment of the National Aeronautics and Space Administration (NASA) in 1958.`,
    `The launch also ignited a cultural shift toward scientific literacy. Schools across the United States introduced new curricula emphasizing physics, mathematics, and engineering to prepare a generation capable of meeting the challenges of space exploration. The federal government funded university research programs, leading to breakthroughs in rocketry, materials science, and computer technology that would later underpin the Apollo missions. This educational push reflected an understanding that mastery of space required not only political will but also a broad base of technical expertise.`,
    `The image of a tiny sphere beeping above the Earth captured imaginations worldwide and began to <span class="vocab" data-cn="产生回响">reverberate</span> through art, literature, and popular media. Science‑fiction writers such as Arthur C. Clarke imagined colonies on distant moons, while musicians composed songs that celebrated humanity’s new cosmic perspective. Even everyday objects—like the iconic “Sputnik” design motif used in fashion and architecture—reflected a fascination with the sleek, futuristic aesthetic introduced by the satellite’s simple yet elegant form.`,
    `The technological foundations laid by Sputnik continue to shape modern space endeavors. Contemporary <span class="vocab" data-cn="运载火箭">launch vehicle</span> designs are far more powerful, but they share the same basic principle of delivering a <span class="vocab" data-cn="有效载荷">payload</span> into a precise <span class="vocab" data-cn="轨道的">orbital</span> path. The satellite’s simple <span class="vocab" data-cn="遥测">telemetry</span> system—transmitting temperature, battery voltage, and signal strength—proved that real‑time data could be received from orbit, a concept now essential for everything from weather forecasting to global communications networks.`,
    `From its modest dimensions to its profound influence, Sputnik demonstrated that a single engineering achievement could spark worldwide transformation. It ushered in an era where nations compete and cooperate beyond Earth’s atmosphere, where scientific curiosity drives economic growth, and where the notion of humanity as a planetary species becomes increasingly tangible. The tiny satellite that once circled silently above us remains a reminder that even the smallest inventions can alter the course of history.`,
  ],
  vocabulary: [
    { word: 'satellite', cn: '人造卫星' },
    { word: 'orbital', cn: '轨道的' },
    { word: 'propulsion', cn: '推进系统' },
    { word: 'geopolitics', cn: '地缘政治' },
    { word: 'reverberate', cn: '产生回响' },
    { word: 'launch vehicle', cn: '运载火箭' },
    { word: 'telemetry', cn: '遥测' },
    { word: 'payload', cn: '有效载荷' },
  ],
};

export default article;
