import type { Article } from '../../types/index.ts';

// 文件意图：维护《Pioneer 10: Humanity’s First Probe to Venture Beyond the Solar System》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00449 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00449',
  slug: 'pioneer-10-humanity-s-first-probe-to-venture-beyond-the-solar-system',
  title: 'Pioneer 10: Humanity’s First Probe to Venture Beyond the Solar System',
  subtitle: 'The daring mission that left Earth’s neighborhood behind',
  summary: 'A narrative of how Pioneer 10 broke free from the Sun’s grasp and opened a new era of interstellar exploration.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When NASA launched <span class="vocab" data-cn="先驱者10号">Pioneer 10</span> on March 2, 1972, the world was still dreaming of landing a man on the Moon. The spacecraft’s modest mass—about 258 kilograms—and its simple, robust design reflected an era when engineers prized reliability over flashiness. Built around a sturdy <span class="vocab" data-cn="钛合金">titanium alloy</span> frame and equipped with a single‑axis spin stabilization system, Pioneer 10 was meant to survive the harsh radiation belts of Earth’s magnetosphere and then venture farther than any human‑made object before it.`,
    `The primary scientific goal was to conduct a close flyby of Jupiter, the giant planet that had never been visited up close. To achieve this, mission planners employed a clever maneuver known as <span class="vocab" data-cn="引力弹弓">gravity assist</span>. By carefully timing its trajectory, Pioneer 10 used Jupiter’s massive gravitational field to slingshot itself onto a hyperbolic escape path, gaining enough velocity to break free from the Sun’s binding orbit. This technique not only saved fuel but also demonstrated a navigation method that would become standard for later deep‑space missions.`,
    `During its approach, Pioneer 10 sent back a treasure trove of data via a powerful <span class="vocab" data-cn="射频发射器">radio transmitter</span>. The instrument suite measured Jupiter’s magnetic field, radiation belts, and atmospheric composition, revealing for the first time that the planet possessed an intense magnetosphere extending millions of kilometers into space. Images captured by its onboard camera showed swirling cloud bands and the Great Red Spot in unprecedented detail, captivating both scientists and the public alike.`,
    `After the successful Jupiter encounter, the probe continued on a trajectory that would eventually carry it beyond the heliosphere—the bubble of solar wind that surrounds our planetary system. By the early 1990s, Pioneer 10 had crossed the termination shock, entering the realm of <span class="vocab" data-cn="星际空间">interstellar space</span>. In this region, the spacecraft encountered a thin sea of <span class="vocab" data-cn="星际尘埃">interstellar dust</span> and plasma, providing the first direct measurements of conditions outside the Sun’s protective shield. These observations helped refine models of how cosmic rays propagate through the galaxy.`,
    `Even as its power source—a radioisotope thermoelectric generator—gradually weakened, Pioneer 10 continued to transmit a simple “Hello from the outer solar system” message encoded in binary. The faint signal, traveling at the speed of light, reminded us that humanity’s voice could reach far beyond Earth’s cradle. By 2003, contact was lost, but the probe’s last known position is still tracked by astronomers using its residual radio beacon and optical observations.`,
    `Pioneer 10’s legacy extends far beyond its scientific achievements. It carried a gold‑anodized plaque bearing a schematic of the solar system and a silhouette of a human couple, intended as a time capsule for any extraterrestrial intelligence that might one day encounter it. This symbolic gesture sparked philosophical debates about humanity’s place in the cosmos and inspired later missions—such as Voyager 1 and New Horizons—to include their own messages to the stars.`,
    `Today, more than five decades after its launch, Pioneer 10 drifts silently through the Milky Way, a solitary emissary of Earth. Its journey reminds us that even modest engineering, guided by bold imagination, can push the boundaries of what is possible. As we plan future interstellar probes powered by solar sails or nuclear propulsion, the lessons learned from Pioneer 10’s design, navigation, and endurance continue to illuminate the path forward.`,
  ],
  vocabulary: [
    { word: 'Pioneer 10', cn: '先驱者10号' },
    { word: 'titanium alloy', cn: '钛合金' },
    { word: 'gravity assist', cn: '引力弹弓' },
    { word: 'radio transmitter', cn: '射频发射器' },
    { word: 'interstellar space', cn: '星际空间' },
    { word: 'interstellar dust', cn: '星际尘埃' },
  ],
};

export default article;
