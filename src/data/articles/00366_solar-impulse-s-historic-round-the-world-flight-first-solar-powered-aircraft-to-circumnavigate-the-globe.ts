import type { Article } from '../../types/index.ts';

// 文件意图：维护《Solar Impulse’s Historic Round‑the‑World Flight: First Solar‑Powered Aircraft to Circumnavigate the Globe》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00366 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00366',
  slug: 'solar-impulse-s-historic-round-the-world-flight-first-solar-powered-aircraft-to-circumnavigate-the-globe',
  title: 'Solar Impulse’s Historic Round‑the‑World Flight: First Solar‑Powered Aircraft to Circumnavigate the Globe',
  subtitle: 'How a feather‑light plane proved that sunlight can power global travel.',
  summary: 'A narrative of the daring journey that made history and reshaped ideas about clean aviation.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the sleek silhouette of the Solar Impulse 2 slipped off the runway in Abu Dhabi on March 9, 2015, a handful of engineers and pilots knew they were about to rewrite aviation history. The aircraft was not just another experimental plane; it was the world’s first fully <span class="vocab" data-cn="太阳能驱动的飞机">solar‑powered aircraft</span>, designed to prove that renewable energy could sustain long‑duration flight without a single drop of fossil fuel.`,
    `The secret lay in its wings, which stretched more than 72 meters and were sheathed in over 17,000 <span class="vocab" data-cn="光伏电池">photovoltaic cells</span>. These cells captured sunlight and fed electricity directly to the propulsion system while also charging a massive bank of <span class="vocab" data-cn="锂聚合物电池">lithium‑polymer batteries</span> for night flying. All of this was held together by an ultra‑light <span class="vocab" data-cn="碳纤维复合材料">carbon‑fiber composite</span> fuselage that weighed less than a midsize car, allowing the plane to glide gracefully when the sun disappeared behind clouds.`,
    `The first leg of the journey took the aircraft from Abu Dhabi across the Persian Gulf and into Europe, where pilots Bertrand Piccard and André Borschberg faced their first real test: maintaining altitude in variable wind conditions. The Solar Impulse’s impressive <span class="vocab" data-cn="滑翔比">glide ratio</span> of 30:1 meant that for every meter it descended, the plane could travel thirty meters forward, a crucial factor when solar input waned. An advanced <span class="vocab" data-cn="自动驾驶仪">autopilot</span> system kept the aircraft on course while the pilots monitored battery levels and weather maps from the cramped cockpit.`,
    `Crossing the Atlantic proved to be a logistical puzzle. The team had to land in places like Seville, Spain, and then hop across Morocco before tackling the Sahara’s scorching heat. Each stop required meticulous inspection of the solar panels for dust accumulation—a thin layer could reduce power output by up to 10 %. During the Pacific crossing, a sudden storm forced an emergency landing on a remote airstrip in Hawaii; the crew spent hours repairing a damaged wing spar before resuming their quest, demonstrating that resilience was as vital as engineering brilliance.`,
    `Finally, on July 26, 2016, after 17 months of planning, delays, and over 23 days of actual flight time, the Solar Impulse 2 touched down in Hawaii, completing a full <span class="vocab" data-cn="环绕地球飞行">circumnavigate</span> of the globe. The aircraft had covered roughly 42,000 kilometers—more than the Earth’s equatorial circumference—without ever burning aviation fuel. This achievement earned it a place in the Guinness World Records as the first solar‑powered plane to complete such a journey, and it sparked worldwide conversations about the future of clean transportation.`,
    `Beyond the headlines, the mission left a lasting technical legacy. Data collected on battery performance at high <span class="vocab" data-cn="海拔">altitude</span>, the durability of photovoltaic cells under constant vibration, and the efficiency of lightweight composites have informed subsequent electric aircraft projects worldwide. Companies like Airbus and Boeing now cite Solar Impulse’s flight when outlining their own hybrid‑electric concepts, showing that a single daring expedition can ripple through an entire industry.`,
    `Today, the Solar Impulse 2 rests in a museum in Lausanne, Switzerland, where visitors can walk around its gleaming wings and imagine a future where sunlight powers not just planes but trains, ships, and even cities. The story of this historic flight reminds us that bold ideas, when paired with meticulous engineering, can turn what once seemed impossible into a stepping stone toward a more sustainable world.`,
  ],
  vocabulary: [
    { word: 'solar‑powered aircraft', cn: '太阳能驱动的飞机' },
    { word: 'circumnavigate', cn: '环绕地球飞行' },
    { word: 'photovoltaic cells', cn: '光伏电池' },
    { word: 'glide ratio', cn: '滑翔比' },
    { word: 'autopilot', cn: '自动驾驶仪' },
    { word: 'lithium‑polymer battery', cn: '锂聚合物电池' },
    { word: 'carbon‑fiber composite', cn: '碳纤维复合材料' },
    { word: 'altitude', cn: '海拔' },
  ],
};

export default article;
