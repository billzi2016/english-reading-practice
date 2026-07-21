import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise of Modern Drones: From WWII Target Aircraft to Commercial UAVs》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00414 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00414',
  slug: 'the-rise-of-modern-drones-from-wwii-target-aircraft-to-commercial-uavs',
  title: 'The Rise of Modern Drones: From WWII Target Aircraft to Commercial UAVs',
  subtitle: 'How military experiments turned into today’s ubiquitous aerial platforms',
  summary: 'A narrative tracing the evolution from early target planes in World War II to the versatile commercial drones that shape many industries today.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `During the final years of World War II, engineers at companies such as Radioplane and Frankfort began building small radio‑controlled planes to serve as <span class="vocab" data-cn="靶机">target aircraft</span>. These machines were launched from catapults and flown over anti‑aircraft ranges, allowing gunners to practice without risking human pilots. Though primitive by today’s standards, they introduced the core idea of a piloted‑free aerial system that could be guided from the ground.`,
    `The immediate post‑war period saw these target drones repurposed for research. The U.S. Navy’s Q‑1 “Radioplane OQ‑2” became one of the first platforms to test early <span class="vocab" data-cn="自动驾驶仪">autopilot</span> circuits, which kept the aircraft stable without constant human input. By embedding gyroscopes and simple servomechanisms, engineers could program basic flight paths, laying groundwork for more sophisticated remote‑control technologies.` ,
    `During the Cold War, the need for reconnaissance over hostile territory accelerated drone development. The CIA’s “A‑12 OXCART” project, while not a true UAV, inspired the creation of the Ryan Firebee series, which incorporated radio telemetry and rudimentary <span class="vocab" data-cn="全球定位系统导航">GPS navigation</span> (then known as NAVSTAR). These systems allowed operators to track aircraft positions in real time, dramatically improving mission reliability.` ,
    `The 1990s marked a turning point when civilian satellite constellations made high‑precision GPS signals widely available. Commercial firms such as AeroVironment introduced the “Raven”, a lightweight <span class="vocab" data-cn="无人驾驶航空器">UAV</span> that could be launched by hand and guided via a handheld controller. The integration of reliable GPS meant drones no longer needed line‑of‑sight radio links for navigation, opening possibilities for beyond‑visual‑range operations.` ,
    `Around the same time, advances in <span class="vocab" data-cn="复合材料">composite materials</span>—especially carbon‑fiber reinforced polymers—reduced airframe weight while increasing strength. This enabled the emergence of <span class="vocab" data-cn="垂直起降技术">VTOL</span> (vertical take‑off and landing) designs like the DJI Phantom series, which could hover, ascend, and descend without a runway. The combination of lightweight structures, efficient electric motors, and sophisticated flight controllers sparked an explosion in hobbyist and commercial markets.` ,
    `Today’s drones serve roles far beyond aerial photography. In agriculture, <span class="vocab" data-cn="激光雷达">LiDAR</span> sensors mounted on UAVs map crop canopies with centimeter‑level accuracy, guiding precision fertilization. Logistics companies experiment with autonomous delivery fleets, leveraging the concept of <span class="vocab" data-cn="群体机器人技术">swarm robotics</span> to coordinate dozens of units simultaneously. Even emergency responders deploy drones carrying medical <span class="vocab" data-cn="有效载荷">payload</span> to remote disaster zones, cutting response times dramatically.` ,
    `Looking ahead, the rapid growth of drone activity has prompted governments worldwide to craft comprehensive <span class="vocab" data-cn="监管框架">regulatory frameworks</span>. Issues such as airspace integration, privacy, and safety are being addressed through certification standards and mandatory remote identification. As technology continues to shrink—think micro‑UAVs that fit in a pocket—and AI improves autonomous decision‑making, drones will likely become an invisible yet indispensable layer of our daily infrastructure.` ,
  ],
  vocabulary: [
    { word: 'target aircraft', cn: '靶机' },
    { word: 'autopilot', cn: '自动驾驶仪' },
    { word: 'GPS navigation', cn: '全球定位系统导航' },
    { word: 'UAV', cn: '无人驾驶航空器' },
    { word: 'composite materials', cn: '复合材料' },
    { word: 'VTOL', cn: '垂直起降技术' },
    { word: 'LiDAR', cn: '激光雷达' },
    { word: 'swarm robotics', cn: '群体机器人技术' },
    { word: 'payload', cn: '有效载荷' },
    { word: 'regulatory framework', cn: '监管框架' },
  ],
};

export default article;
