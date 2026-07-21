import type { Article } from '../../types/index.ts';

// 文件意图：维护《Carl von Linde and the Birth of Modern Refrigeration: From Ice Harvesting to Global Food Supply》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00328 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00328',
  slug: 'carl-von-linde-and-the-birth-of-modern-refrigeration-from-ice-harvesting-to-global-food-supply',
  title: 'Carl von Linde and the Birth of Modern Refrigeration: From Ice Harvesting to Global Food Supply',
  subtitle: 'How a German engineer turned ice into a worldwide supply chain.',
  summary: 'The story of Carl von Linde’s breakthrough in refrigeration and its ripple effect on food distribution around the world.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early nineteenth century, towns along the Hudson River and the canals of England relied on a labor‑intensive practice called <span class="vocab" data-cn="采冰">ice harvesting</span>. Workers cut massive blocks from frozen lakes in winter, stored them in insulated sheds, and shipped them to city markets during the warm months. The process was seasonal, costly, and often resulted in melted or contaminated ice, limiting how far perishable goods could travel.`,
    `Enter Carl von Linde, a young physicist born in 1844 in Bavaria. After studying under renowned thermodynamicists at the University of Munich, Linde joined the German firm <span class="vocab" data-cn="克虏伯公司">Krupp</span>, where he observed the inefficiencies of existing cooling methods used in steel production. His curiosity led him to experiment with gases that could absorb heat when compressed and released—a principle at the heart of modern <span class="vocab" data-cn="制冷技术">refrigeration</span>.`,
    `In 1876, Linde patented a mechanical <span class="vocab" data-cn="压缩机">compressor</span> that could reliably pressurize ammonia gas. By allowing the high‑pressure gas to expand rapidly, it absorbed heat from its surroundings, creating a cooling effect. This closed‑loop system, later known as the <span class="vocab" data-cn="氨循环">ammonia cycle</span>, was far more efficient than ice‑based methods and could operate year‑round regardless of climate.`,
    `Linde’s breakthrough quickly attracted attention from breweries, meat packers, and dairy farms eager to preserve their products. The first commercial refrigeration plant opened in 1878 near Berlin, supplying chilled lager to local taverns. As the technology spread across Europe and North America, it sparked a wave of <span class="vocab" data-cn="工业化">industrialization</span> in food processing: meat could be slaughtered inland and shipped to distant cities without spoiling, and dairy farms could produce butter and cheese for export markets.`,
    `The ripple effects extended far beyond the factory floor. By the early twentieth century, a reliable <span class="vocab" data-cn="冷链">cold chain</span> emerged, linking farms, factories, railroads, and ships in a seamless network of temperature‑controlled logistics. This network made it possible for tropical fruits like bananas and pineapples to appear on supermarket shelves in temperate regions—a feat unimaginable during the ice‑harvesting era.`,
    `Linde’s legacy also paved the way for modern <span class="vocab" data-cn="低温技术">cryogenics</span>. Researchers adapted his ammonia compressor designs to handle gases such as liquid nitrogen and helium, enabling breakthroughs in medical imaging, space exploration, and particle physics. While Linde himself never imagined a world where vaccines travel across continents on refrigerated trucks, his inventions laid the thermodynamic foundation for that reality.`,
    `Today, over 150 years after Carl von Linde’s first patent, refrigeration touches every corner of daily life—from the kitchen freezer humming in a suburban home to massive industrial chillers cooling data centers. The transition from manual ice blocks to sophisticated vapor‑compression cycles illustrates how a single engineering insight can reshape global supply chains, improve food security, and sustain modern civilization.`,
    `Reflecting on this journey reminds us that technology is rarely an isolated invention; it is a chain of ideas, experiments, and societal needs. Carl von Linde’s work exemplifies the power of applying rigorous <span class="vocab" data-cn="热力学">thermodynamics</span> to solve practical problems, turning the fleeting chill of winter ice into a permanent, controllable resource that feeds billions today.`,
  ],
  vocabulary: [
    { word: 'ice harvesting', cn: '采冰' },
    { word: 'refrigeration', cn: '制冷技术' },
    { word: 'compressor', cn: '压缩机' },
    { word: 'ammonia cycle', cn: '氨循环' },
    { word: 'industrialization', cn: '工业化' },
    { word: 'cold chain', cn: '冷链' },
    { word: 'cryogenics', cn: '低温技术' },
    { word: 'thermodynamics', cn: '热力学' },
  ],
};

export default article;
