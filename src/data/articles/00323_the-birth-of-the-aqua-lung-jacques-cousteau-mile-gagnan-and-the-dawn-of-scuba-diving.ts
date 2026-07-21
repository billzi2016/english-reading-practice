import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of the Aqua‑Lung: Jacques Cousteau, Émile Gagnan, and the Dawn of Scuba Diving》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00323 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00323',
  slug: 'the-birth-of-the-aqua-lung-jacques-cousteau-mile-gagnan-and-the-dawn-of-scuba-diving',
  title: 'The Birth of the Aqua‑Lung: Jacques Cousteau, Émile Gagnan, and the Dawn of Scuba Diving',
  subtitle: 'How a French naval officer and an engineer created modern underwater exploration.',
  summary: 'A narrative of the invention that turned breathing underwater from a laboratory curiosity into a global sport and scientific tool.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1940s, French naval officer <span class="vocab" data-cn="法国海军官员">Jacques Cousteau</span> was frustrated by the limited time his crew could spend beneath the waves. The existing surface‑supplied helmets were bulky and tethered to a ship, making them unsuitable for close‑up observation of coral reefs or wrecks. Cousteau dreamed of a self‑contained breathing system that would let divers move freely, much like birds in the sky.`,
    `His chance encounter with engineer <span class="vocab" data-cn="工程师">Émile Gagnan</span> proved decisive. Gagnan had been working for Air Liquide on a high‑altitude <span class="vocab" data-cn="调压阀">regulator</span> used in aircraft engines, which could maintain constant pressure despite changing external conditions. Recognizing its potential underwater, the two men began adapting the device to deliver <span class="vocab" data-cn="压缩空气">compressed air</span> from a steel cylinder directly to a diver’s mouthpiece.`,
    `The prototype they produced in 1943 was christened the “<span classclass="vocab" data-cn="水肺">aqua‑lung</span>.” Its core consisted of a demand‑type regulator that released air only when the diver inhaled, conserving precious gas and allowing for deeper excursions. The first public demonstration took place in the Mediterranean off the coast of Toulon, where Cousteau and Gagnan descended to 30 meters (about 100 feet) while narrating their experience for a stunned audience of naval officers and journalists.`,
    `Beyond the regulator, the early aqua‑lung system required several auxiliary instruments. A <span class="vocab" data-cn="深度计">depth gauge</span> attached to the wrist warned divers when they approached dangerous pressure zones, while a simple weight belt helped achieve neutral buoyancy. Although modern divers now rely on sophisticated <span class="vocab" data-cn="浮力控制装置">buoyancy control devices (BCD)</span>, Cousteau’s original setup used a rubberized bladder that could be inflated or deflated by mouth, offering rudimentary control over ascent and descent.`,
    `The invention sparked immediate interest beyond military circles. Marine biologists seized the opportunity to observe living organisms in their natural habitats without disturbing them. Cousteau himself documented countless species on film, laying the groundwork for underwater cinematography. The ability to linger minutes rather than seconds transformed scientific sampling, allowing researchers to collect specimens, measure water temperature, and map reef structures with unprecedented accuracy.`,
    `Commercially, the aqua‑lung opened a new leisure market. By the late 1950s, companies in France, Italy, and the United States began mass‑producing scuba gear for hobbyists. Training manuals emerged, emphasizing safety procedures such as the “buddy system” and controlled ascent rates to avoid <span class="vocab" data-cn="减压病">decompression sickness</span>. The sport quickly spread worldwide, giving rise to clubs, competitions, and a vibrant subculture of underwater photographers and explorers.`,
    `Today, more than eight decades after that first dive, the legacy of Cousteau and Gagnan endures. Modern <span class="vocab" data-cn="水肺潜水">scuba</span> equipment incorporates electronic pressure sensors, lightweight alloys, and computer‑driven dive tables, yet the fundamental principle remains unchanged: a reliable regulator delivering breathable gas on demand. Their collaboration not only birthed a technology but also opened an entire frontier of human experience beneath the sea.`,
  ],
  vocabulary: [
    { word: 'Jacques Cousteau', cn: '法国海军官员' },
    { word: 'Émile Gagnan', cn: '工程师' },
    { word: 'regulator', cn: '调压阀' },
    { word: 'compressed air', cn: '压缩空气' },
    { word: 'aqua‑lung', cn: '水肺' },
    { word: 'depth gauge', cn: '深度计' },
    { word: 'buoyancy control device (BCD)', cn: '浮力控制装置' },
    { word: 'decompression sickness', cn: '减压病' },
    { word: 'scuba', cn: '水肺潜水' },
  ],
};

export default article;
