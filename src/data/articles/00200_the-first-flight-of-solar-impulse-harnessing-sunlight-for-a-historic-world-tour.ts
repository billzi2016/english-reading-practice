import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Flight of Solar Impulse: Harnessing Sunlight for a Historic World Tour》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00200 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00200',
  slug: 'the-first-flight-of-solar-impulse-harnessing-sunlight-for-a-historic-world-tour',
  title: 'The First Flight of Solar Impulse: Harnessing Sunlight for a Historic World Tour',
  subtitle: 'How a Swiss aircraft turned sunlight into global ambition',
  summary: 'A narrative of the pioneering 2009 flight that proved solar energy could power an airplane across continents.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When Bertrand Piccard and André Borschberg announced their dream in 2003, most people imagined a futuristic concept rather than a concrete project. Their goal was simple yet audacious: to build a fully <span class="vocab" data-cn="太阳能飞机">solar-powered aircraft</span> that could fly without any fossil‑fuel backup and eventually circle the globe. The idea stemmed from Piccard’s earlier record‑breaking balloon flight, but this time the challenge was to harness sunlight directly for propulsion, a notion that had never been demonstrated on a manned plane of significant size.`,
    `The prototype, later designated HB‑SIA, resembled a sleek glider more than a conventional airplane. Its wings stretched 63 meters and were sheathed in over eleven thousand <span class="vocab" data-cn="光伏电池">photovoltaic cells</span>, each no larger than a postage stamp. These cells fed electricity to a single 17‑kilowatt electric motor, while the entire airframe was built from ultra‑light <span class="vocab" data-cn="碳纤维复合材料">carbon fiber composite</span>. The designers had to balance two competing demands: enough surface area to capture sunlight and a weight low enough to stay aloft on that limited power.</`,
    `Testing began at the Swiss Air Force base in Payerne, where weather conditions could be closely monitored. Engineers spent months calibrating the aircraft’s energy management system, ensuring that solar input during daylight would charge the onboard lithium‑polymer batteries for night flight. Thermal control proved especially tricky; the cells could overheat on a bright summer day, while at high altitude the thin air reduced cooling efficiency. The team also refined the aircraft’s <span class="vocab" data-cn="滑翔比">glide ratio</span>, aiming for a figure that would allow it to coast efficiently when solar power dipped below optimal levels.`,
    `On 3 December 2009, under a clear winter sky, HB‑SIA lifted off for its maiden voyage. The flight lasted just over an hour and reached a modest altitude of 1,500 feet, but it demonstrated that the aircraft could generate enough electricity to sustain continuous thrust. During the climb, the pilot monitored <span class="vocab" data-cn="能量密度">energy density</span> readings from the batteries, confirming that the stored power was sufficient for a brief night segment if needed. The successful take‑off validated years of simulation and earned the project its first headline in international media.</`,
    `Buoyed by this achievement, Piccard and Borschberg set their sights on a larger version: Solar Impulse 2 (HB‑SIB). This successor featured a 72‑meter wingspan, more than twice the number of photovoltaic cells, and an upgraded motor capable of 30 kilowatts. The improved design promised higher <span class="vocab" data-cn="能量密度">energy density</span> in its battery packs and a better <span class="vocab" data-cn="滑翔比">glide ratio</span>, allowing longer legs between charging periods. With the prototype’s proof of concept secured, the team announced an ambitious plan to attempt a full <span class="vocab" data-cn="环球飞行">circumnavigation</span> without using any conventional fuel.</`,
    `The world tour began in March 2015 from Abu Dhabi and spanned four continents over 16 months. Each leg tested different aspects of the aircraft’s design: crossing the Alps demonstrated high‑altitude performance, while the Atlantic hop from New York to Spain proved that solar power could sustain a multi‑day flight over open ocean. The most dramatic moment came when Solar Impulse 2 completed its final leg in July 2016, landing back in Switzerland after covering more than 71,000 kilometers. That achievement traced directly back to the modest first flight of HB‑SIA, which had shown that sunlight alone could keep an aircraft aloft.</`,
    `Beyond the record books, Solar Impulse’s legacy lives on in aerospace research and renewable‑energy advocacy. The project inspired new generations of engineers to explore high‑efficiency solar cells, lightweight composites, and advanced battery chemistry for both aviation and ground transportation. Moreover, Piccard and Borschberg have leveraged their fame to promote sustainable development worldwide, reminding the public that ambitious engineering can coexist with environmental stewardship. The humble 2009 take‑off remains a testament to what can happen when imagination meets disciplined science.`,
  ],
  vocabulary: [
    { word: 'solar-powered aircraft', cn: '太阳能飞机' },
    { word: 'photovoltaic cells', cn: '光伏电池' },
    { word: 'carbon fiber composite', cn: '碳纤维复合材料' },
    { word: 'glide ratio', cn: '滑翔比' },
    { word: 'energy density', cn: '能量密度' },
    { word: 'circumnavigation', cn: '环球飞行' },
  ],
};

export default article;
