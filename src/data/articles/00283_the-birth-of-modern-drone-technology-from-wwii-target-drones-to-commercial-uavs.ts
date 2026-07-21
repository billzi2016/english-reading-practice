import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of Modern Drone Technology: From WWII Target Drones to Commercial UAVs》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00283 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00283',
  slug: 'the-birth-of-modern-drone-technology-from-wwii-target-drones-to-commercial-uavs',
  title: 'The Birth of Modern Drone Technology: From WWII Target Drones to Commercial UAVs',
  subtitle: 'How wartime experiments evolved into today’s ubiquitous aerial robots',
  summary: 'Tracing the journey from early target drones in World War II to the commercial UAV boom of the 21st century.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On a breezy afternoon in 1939, a modest wooden frame lifted off a farm field in Southern California. There was no cockpit, no pilot’s voice over the intercom—only a humming engine and a radio signal guiding it skyward. This unassuming aircraft was one of the first <span class="vocab" data-cn="靶机">target drones</span>, built to simulate enemy planes for anti‑aircraft training. Its success proved that an unmanned platform could reliably perform repetitive flight patterns, laying the groundwork for a technology that would outlive its original military purpose.`,
    `The breakthrough came when <span class="vocab" data-cn="雷迪欧飞机公司">Radioplane</span> engineer Reginald Denny adapted his hobbyist model into the OQ‑2, the United States’ first mass‑produced <span class="vocab" data-cn="靶机">target drone</span>. Powered by a modest piston engine and steered via early <span class="vocab" data-cn="遥控">remote control</span> systems, the OQ‑2 could be launched from catapults or trucks, then recovered after each exercise. By 1945, over 15,000 of these machines had been built, training countless gunners and demonstrating that reliable <span class="vocab" data-cn="无人驾驶航空器">unmanned aerial vehicles (UAVs)</span> could be manufactured at scale.`,
    `Across the Atlantic, Nazi Germany was experimenting with a different kind of unmanned craft: the infamous <span class="vocab" data-cn="V-1飞弹">V‑1 flying bomb</span>. Though designed as a weapon rather than a training aid, the V‑1’s pulse‑jet engine and simple guidance system revealed how propulsion and navigation could be combined without a human on board. Allied engineers studied captured examples after the war, extracting lessons about jet propulsion, aerodynamic stability, and the challenges of controlling a vehicle solely through external signals.`,
    `In the post‑war era, the United States Navy embraced these insights, commissioning the QF series of reconnaissance drones. The most notable was the <span class="vocab" data-cn="雷迪欧飞机公司">Radioplane</span> Firebee, which featured a sleek jet engine and could be launched from aircraft carriers using pneumatic catapults. Its advanced <span class="vocab" data-cn="遥控">remote control</span> suite allowed operators to adjust altitude, speed, and camera angle in real time, turning the drone into a valuable tool for gathering intelligence over hostile seas without risking a crewed plane.`,
    `During the Cold War, surveillance needs grew more demanding. The Ryan Model 147 “Lightning Bug” and the AQM‑34 “Firebee II” incorporated sophisticated cameras, infrared sensors, and even early forms of data link transmission. These drones could fly at high altitudes for hours, delivering high‑resolution imagery back to analysts on the ground. Their success demonstrated that <span class="vocab" data-cn="全球定位系统">global positioning system (GPS)</span> technology—still in its infancy—could dramatically improve navigation accuracy, a capability that would later become essential for civilian UAVs.`,
    `The 1990s marked a turning point when the United States Air Force introduced the MQ‑1 <span class="vocab" data-cn="无人驾驶航空器">UAV</span> Predator. Equipped with a powerful turboprop engine, an onboard <span class="vocab" data-cn="全球定位系统">GPS</span> receiver, and later armed with laser‑guided missiles, the Predator proved that unmanned platforms could not only gather intelligence but also deliver kinetic effects. This dual capability sparked intense research into autonomous flight control, sensor fusion, and lightweight <span class="vocab" data-cn="有效载荷">payload</span> integration—technologies that would soon spill over into the commercial sector.`,
    `By the early 2000s, advances in microelectronics, battery chemistry, and inexpensive sensors drove down the cost of building a functional drone to under a few hundred dollars. Hobbyists began assembling quadcopters for aerial photography, while startups explored agricultural monitoring, infrastructure inspection, and last‑mile delivery. The convergence of affordable <span class="vocab" data-cn="全球定位系统">GPS</span>, robust <span class="vocab" data-cn="遥控">remote control</span> protocols, and modular <span class="vocab" data-cn="有效载荷">payload</span> bays turned the once‑military technology into a ubiquitous tool for both professionals and consumers. Today’s commercial <span class="vocab" data-cn="无人驾驶航空器">UAVs</span> owe their lineage to the humble wooden target drones of World II, illustrating how wartime necessity can seed peacetime innovation.`,
  ],
  vocabulary: [
    { word: 'target drone', cn: '靶机' },
    { word: 'Radioplane', cn: '雷迪欧飞机公司' },
    { word: 'V-1 flying bomb', cn: 'V‑1飞弹' },
    { word: 'remote control', cn: '遥控' },
    { word: 'global positioning system (GPS)', cn: '全球定位系统' },
    { word: 'unmanned aerial vehicle (UAV)', cn: '无人驾驶航空器' },
    { word: 'payload', cn: '有效载荷' },
  ],
};

export default article;
