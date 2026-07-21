import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Carrington Event of 1859: How a Solar Storm Shook the World’s Telegraph Network》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00113 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00113',
  slug: 'the-carrington-event-of-1859-how-a-solar-storm-shook-the-world-s-telegraph-network',
  title: 'The Carrington Event of 1859: How a Solar Storm Shook the World’s Telegraph Network',
  subtitle: 'A dramatic clash between space and early communications technology.',
  summary: 'In 1859 a massive solar eruption lit up the sky and crippled telegraph lines worldwide, revealing the power of space weather.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On the night of September 1‑2, 1859, people across Europe and North America looked up to see curtains of red and green light dancing in a sky that should have been dark. The phenomenon was an intense <span class="vocab" data-cn="极光">aurora borealis</span>, visible as far south as the Caribbean. While many marveled at its beauty, telegraph operators in places like London, Boston, and Helsinki began to notice strange sparks leaping from their equipment, a sign that something extraordinary was happening beyond Earth’s atmosphere.`,
    `The story begins with an English amateur astronomer named Richard Carrington, who was sketching sunspots when he observed a sudden bright flash on the solar surface at 11:18 a.m. local time. This brief but powerful burst is now known as a <span class="vocab" data-cn="太阳耀斑">solar flare</span>. Carrington recorded the exact timing and location of the flare, unaware that his observation would later be linked to one of the most severe space‑weather events in recorded history.`,
    `Within minutes of the flare, the Sun hurled a massive cloud of magnetized plasma into interplanetary space—a <span class="vocab" data-cn="日冕物质抛射">coronal mass ejection</span> (CME). Traveling at an estimated speed of over 2 000 km/s, the CME slammed into Earth’s magnetic field on September 2, triggering a powerful <span class="vocab" data-cn="地磁风暴">geomagnetic storm</span>. The rapid compression and re‑configuration of the magnetosphere induced electric fields that stretched from the poles down to mid‑latitudes, setting the stage for widespread electrical disturbances.`,
    `The telegraph network, the world’s first long‑distance communication system, was especially vulnerable. As the geomagnetic storm intensified, rapidly changing magnetic fields produced large <span class="vocab" data-cn="感应电流">induced currents</span> in the long copper wires that linked cities and continents. In some stations the current was so strong it caused telegraph keys to jump on their own, allowing operators to send messages without touching the equipment. In other cases, the surge ignited fires in telegraph offices, melted insulation, and even knocked out entire lines for hours.`,
    `Scientists of the era scrambled to document the event. Magnetometers—early <span class="vocab" data-cn="磁力计">magnetometer</span> instruments—recorded a sudden spike in Earth’s magnetic field strength, known today as a “storm sudden commencement.” The aurora’s unprecedented reach and the telegraph disruptions provided concrete evidence that solar activity could directly affect terrestrial technology. Newspapers worldwide reported both the spectacular sky show and the bizarre behavior of the telegraph system, sparking public fascination with the Sun’s influence.`,
    `In the aftermath, the Carrington Event became a cornerstone for the emerging field of <span class="vocab" data-cn="空间天气">space weather</span> research. Engineers began to consider protective measures such as grounding long conductors and installing surge protectors on telegraph lines. The event also motivated astronomers to study solar cycles more systematically, eventually leading to the discovery of the roughly 11‑year sunspot cycle. Although the technology of the 19th century was relatively simple, the incident demonstrated that even modest electrical infrastructure could be crippled by a single solar eruption.`,
    `Today, modern societies rely on satellites, power grids, and high‑frequency communications—all far more sensitive to geomagnetic disturbances than the telegraph. Scientists use Carrington’s observations as a benchmark when modeling worst‑case scenarios for future solar storms. By understanding how that 1859 flare generated a CME, induced currents, and disrupted the world’s first electronic network, we gain valuable insight into protecting our own technologically dependent civilization from similar cosmic threats.`,
  ],
  vocabulary: [
    { word: 'aurora borealis', cn: '极光' },
    { word: 'solar flare', cn: '太阳耀斑' },
    { word: 'coronal mass ejection', cn: '日冕物质抛射' },
    { word: 'geomagnetic storm', cn: '地磁风暴' },
    { word: 'induced current', cn: '感应电流' },
    { word: 'magnetometer', cn: '磁力计' },
    { word: 'space weather', cn: '空间天气' },
  ],
};

export default article;
