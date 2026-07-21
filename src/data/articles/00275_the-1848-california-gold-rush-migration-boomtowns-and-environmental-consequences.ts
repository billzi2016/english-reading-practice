import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1848 California Gold Rush: Migration, Boomtowns, and Environmental Consequences》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00275 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00275',
  slug: 'the-1848-california-gold-rush-migration-boomtowns-and-environmental-consequences',
  title: 'The 1848 California Gold Rush: Migration, Boomtowns, and Environmental Consequences',
  subtitle: 'How a single discovery reshaped a continent',
  summary: 'Explore the massive human movement, rapid town growth, and lasting ecological damage caused by the 1848 gold rush.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In January 1848, James W. Marshall struck a glittering vein of gold while overseeing the construction of a sawmill at Sutter’s Mill on the American River. The news traveled faster than a stagecoach, first reaching San Francisco and then spreading across the United States and Europe. Within months, thousands of hopeful <span class="vocab" data-cn="淘金者">prospectors</span>—later nicknamed “Forty‑Niners”—packed their belongings onto wagons, steamships, and even overland trails, embarking on a journey that would become one of the largest migrations in American history.`,
    `The routes to California were as varied as the people who took them. Some traveled the arduous Oregon Trail, then turned south along the Siskiyou Pass; others braved the perilous sea voyage around Cape Horn, while a third group opted for the faster but disease‑riddled passage through Panama’s jungles and across the isthmus by foot or mule. Regardless of the path, travelers faced harsh weather, scarcity of food, and frequent outbreaks of cholera, yet the promise of striking it rich kept the caravans moving forward.`,
    `As gold poured from riverbeds, makeshift settlements sprouted overnight along the Sierra Nevada foothills. Towns such as Coloma, where the first nuggets were panned, and later larger hubs like Sacramento and San Francisco transformed from sleepy outposts into bustling <span class="vocab" data-cn="繁荣的城镇">boomtowns</span>. Buildings rose in a chaotic patchwork of wood shanties, canvas tents, and hastily erected brick structures. The sudden population surge created a demand for goods and services, spawning saloons, gambling halls, and newspapers that chronicled the daily drama of life on the frontier.`,
    `Mining techniques evolved rapidly to meet the growing appetite for gold. Initially, most miners employed <span class="vocab" data-cn="冲积采矿">placer mining</span>, using simple pans and sluice boxes to separate heavy gold particles from river sediment. As surface deposits dwindled, entrepreneurs introduced more aggressive methods such as hydraulic mining, which blasted high‑pressure water jets against hillsides to wash away entire slopes. This technique generated massive amounts of <span class="vocab" data-cn="尾矿">tailings</span>, a slurry of mud and rock that choked rivers, altered waterways, and raised the riverbeds far above their natural levels.`,
    `The environmental fallout was profound and long‑lasting. The sediment from hydraulic mining filled valleys, destroyed fertile farmland, and caused frequent flooding in downstream communities. Forests were cleared to provide timber for mine supports and town construction, leading to soil erosion and loss of wildlife habitat. Moreover, the influx of miners disrupted the lives of Native American tribes such as the Miwok and Maidu, whose traditional hunting grounds and water sources were polluted or outright seized, forcing many into poverty or relocation.`,
    `By the early 1860s, the gold rush had begun to wane, but its legacy endured. The massive influx of people accelerated California’s admission as the 31st state in 1850 and spurred the eventual construction of the <span class="vocab" data-cn="横贯大陆铁路">transcontinental railroad</span>, which linked the West Coast with eastern markets. However, the ecological scars remained visible for decades: abandoned mine shafts dotted the landscape, and legal battles over mining debris continued well into the 20th century, culminating in the landmark Sawyer Decision of 1884 that curtailed hydraulic mining practices.`,
    `Today, visitors to historic sites like Marshall Gold Discovery State Historic Park can glimpse the remnants of this transformative era. While the glitter of gold has long faded from the riverbeds, the story of ambition, rapid urbanization, and environmental consequence offers a cautionary tale about how quickly human activity can reshape both society and nature.`,
  ],
  vocabulary: [
    { word: 'prospectors', cn: '淘金者' },
    { word: 'boomtowns', cn: '繁荣的城镇' },
    { word: 'placer mining', cn: '冲积采矿' },
    { word: 'hydraulic mining', cn: '水力采矿' },
    { word: 'tailings', cn: '尾矿' },
    { word: 'transcontinental railroad', cn: '横贯大陆铁路' },
  ],
};

export default article;
