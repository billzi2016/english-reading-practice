import type { Article } from '../../types/index.ts';

// 文件意图：维护《Gerardus Mercator’s 1569 World Map: Revolutionizing Navigation and Cartography》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00279 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00279',
  slug: 'gerardus-mercator-s-1569-world-map-revolutionizing-navigation-and-cartography',
  title: 'Gerardus Mercator’s 1569 World Map: Revolutionizing Navigation and Cartography',
  subtitle: 'How a Flemish cartographer reshaped the seas with mathematics',
  summary: 'The 1569 Mercator map introduced a new way to draw the world that changed navigation forever.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the bustling workshop of Antwerp, 1568, Gerardus <span class="vocab" data-cn="制图师">Mercator</span> was surrounded by parchment rolls, brass compasses and a growing demand from merchants for more reliable sea charts. He had already earned a reputation as a meticulous <span class="vocab" data-cn="地图绘制者">cartographer</span>, but the existing maps still forced sailors to constantly adjust their bearings when following a straight line on paper. Mercator sensed that mathematics could solve this problem, and he began sketching what would become his famous world map.`,
    `The breakthrough lay in a new <span class="vocab" data-cn="投影法">projection</span>. By stretching the latitude lines farther apart as they approached the poles, Mercator ensured that any straight line drawn on the map corresponded to a constant compass direction, known as a <span class="vocab" data-cn="等角线">rhumb line</span>. This clever trick meant that a navigator could plot a course with a simple ruler and then follow it at sea without having to recalculate angles every few degrees of latitude.`,
    `To achieve this effect, Mercator relied on the concepts of <span class="vocab" data-cn="纬度">latitude</span> and <span class="vocab" data-cn="经度">longitude</span>. He used the latest astronomical observations to place these invisible grid lines accurately across his map. The resulting image looked familiar—continents recognizable, oceans vast—but its geometry was fundamentally different from earlier “portolan” charts that prioritized coastal detail over mathematical consistency.`,
    `When the 1569 world map was published, it quickly became a prized possession among captains of the Dutch East India Company and other European fleets. The <span class="vocab" data-cn="航海图">nautical chart</span> allowed them to plot long voyages from Europe around Africa to Asia with unprecedented confidence. A straight line on Mercator’s map meant a steady compass bearing, reducing the risk of drift caused by frequent course corrections and saving both time and supplies.` ,
    `However, the new projection was not without its critics. Because the latitude lines were stretched increasingly toward the poles, regions such as Greenland appeared dramatically larger than they are in reality—a phenomenon known as <span class="vocab" data-cn="畸变">distortion</span>. Early geographers argued that this visual exaggeration could mislead explorers unfamiliar with the underlying mathematics. Yet for practical navigation, the benefits of a constant rhumb line outweighed the cartographic inaccuracies at high latitudes.` ,
    `The Mercator projection also sparked advances in <span class="vocab" data-cn="大地测量学">geodesy</span>, the science of measuring Earth’s shape. Scholars began to refine the mathematical formulas that underpinned the projection, leading to more precise calculations of scale and distance. By the 17th century, variations such as the “transverse Mercator” were developed for regional mapping, demonstrating how a single idea could evolve into an entire family of map‑making techniques.` ,
    `In the centuries that followed, the Mercator style became the default for marine navigation charts worldwide. Even after the advent of satellite positioning and digital GIS (Geographic Information Systems), many modern electronic maps retain the familiar look because users have been trained to interpret straight lines as constant bearings. The legacy of Mercator’s 1569 map is evident in today’s online mapping services, where a “Mercator view” can be toggled with a single click.` ,
    `Today, historians and cartographers alike celebrate Mercator not only for his technical ingenuity but also for the way he bridged art and science. His map transformed the abstract globe into a practical tool that guided explorers across oceans, reshaped trade routes, and ultimately contributed to the age of global exchange. The story of the 1569 world map reminds us that a single mathematical insight can ripple through centuries, changing how humanity perceives—and navigates—our planet.`,
  ],
  vocabulary: [
    { word: 'Mercator', cn: '制图师' },
    { word: 'cartographer', cn: '地图绘制者' },
    { word: 'projection', cn: '投影法' },
    { word: 'rhumb line', cn: '等角线' },
    { word: 'latitude', cn: '纬度' },
    { word: 'longitude', cn: '经度' },
    { word: 'nautical chart', cn: '航海图' },
    { word: 'distortion', cn: '畸变' },
    { word: 'geodesy', cn: '大地测量学' },
  ],
};

export default article;
