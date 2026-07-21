import type { Article } from '../../types/index.ts';

// 文件意图：维护《Explorer I’s First Photograph of Earth from Space: The Dawn of Satellite Imaging》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00336 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00336',
  slug: 'explorer-i-s-first-photograph-of-earth-from-space-the-dawn-of-satellite-imaging',
  title: 'Explorer I’s First Photograph of Earth from Space: The Dawn of Satellite Imaging',
  subtitle: 'How a modest scientific satellite sparked the era of orbital photography',
  summary: 'Exploring the real story behind Explorer I, its legacy, and the first true pictures of Earth taken from orbit.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When <span class="vocab" data-cn="美国第一颗人造卫星">Explorer I</span> rocketed into the sky on January 31, 1958, its mission was simple: confirm that a satellite could stay in orbit and transmit basic <span class="vocab" data-cn="遥测数据，指从远距离收集的技术信息">telemetry</span>. The 14‑kilogram payload carried a Geiger counter to measure the Van Allen radiation belts, but it had no camera. Yet the public imagination quickly linked Explorer I with the idea of “seeing Earth from space,” a notion that would become reality only a few years later.`,
    `The first true photograph taken by an American satellite arrived on June 10, 1960, when <span class="vocab" data-cn="美国的第六颗探险者卫星">Explorer 6</span> transmitted a grainy black‑and‑white image of the planet’s cloud cover. Explorer 6 was launched aboard a Thor‑Delta <span class="vocab" data-cn="运载火箭，用于把卫星送入太空的火箭系统">launch vehicle</span>, and its payload included a simple television camera pointed earthward. The picture showed a thin veil of clouds over the Atlantic, confirming that orbital imaging was technically feasible.`,
    `Why did it take two years after Explorer I for a photograph to appear? Early satellites were constrained by weight, power, and data‑transmission limits. A <span class="vocab" data-cn="有效载荷，指卫星上携带的科学仪器或设备">payload</span> had to be as light as possible, and the analog radio links of the 1950s could only send a few bits per second. By the time Explorer 6 was built, engineers had refined <span class="vocab" data-cn="光电测量仪，用于捕捉和记录光强的装置">photometer</span> technology and developed a more efficient telemetry system capable of sending image frames back to ground stations.`,
    `The images from Explorer 6 were far from the high‑definition pictures we enjoy today, but they sparked a cascade of innovations. The Soviet Union responded with its own imaging satellite, Sputnik 4, which carried a camera that returned film in a re‑entry capsule. Meanwhile, the United States turned to weather satellites; the launch of <span class="vocab" data-cn="第一颗气象卫星">TIROS‑1</span> in April 1960 marked the birth of routine cloud‑monitoring from orbit. These early missions proved that a satellite could serve both scientific and practical purposes, laying groundwork for modern Earth observation systems.`,
    `One often overlooked aspect of these pioneering images is their impact on public perception. The first photographs showed a fragile, interconnected planet—a visual cue that helped launch the environmental movement in the 1960s and 1970s. Seeing the curvature of the atmosphere from space made abstract concepts like “global climate” tangible for millions of people, influencing policy discussions and inspiring generations of engineers.`,
    `Today’s satellite imaging platforms—such as the Landsat series, Sentinel constellation, and commercial constellations like Planet—trace their lineage back to that modest Geiger‑counter experiment. Modern sensors operate in multiple spectral bands, capture sub‑meter resolution, and transmit data via high‑speed laser links. Yet the core idea remains unchanged: place a camera on an <span class="vocab" data-cn="轨道，指卫星围绕地球运行的路径">orbital</span> platform, point it at Earth, and send the picture home.`,
    `In retrospect, Explorer I’s “first photograph” is better understood as a symbolic milestone rather than a literal one. The satellite proved that humanity could launch objects into space; its success gave engineers the confidence to add cameras, spectrometers, and radar altimeters in later missions. The real first image from an American satellite—Explorer 6’s cloudy view of the Atlantic—opened the door to the rich visual record we now rely on for weather forecasting, disaster response, and climate science.`,
    `As we look toward the next decade, new constellations promise daily global coverage with unprecedented detail. Concepts like <span class="vocab" data-cn="地球同步轨道，卫星相对于地面保持固定位置的轨道">geostationary</span> imaging at 30‑centimeter resolution and hyperspectral cameras that can detect specific gases are already in development. The legacy of Explorer I reminds us that even the simplest experiments can ignite transformative technologies, turning a tiny metal sphere into the foundation of an entire industry.`,
  ],
  vocabulary: [
    { word: 'Explorer I', cn: '美国第一颗人造卫星' },
    { word: 'telemetry', cn: '遥测数据，指从远距离收集的技术信息' },
    { word: 'payload', cn: '有效载荷，指卫星上携带的科学仪器或设备' },
    { word: 'launch vehicle', cn: '运载火箭，用于把卫星送入太空的火箭系统' },
    { word: 'photometer', cn: '光电测量仪，用于捕捉和记录光强的装置' },
    { word: 'orbital', cn: '轨道，指卫星围绕地球运行的路径' },
    { word: 'geostationary', cn: '地球同步轨道，卫星相对于地面保持固定位置的轨道' },
    { word: 'TIROS-1', cn: '第一颗气象卫星' },
  ],
};

export default article;
