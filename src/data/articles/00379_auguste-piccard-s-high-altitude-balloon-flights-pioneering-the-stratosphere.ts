import type { Article } from '../../types/index.ts';

// 文件意图：维护《Auguste Piccard’s High‑Altitude Balloon Flights: Pioneering the Stratosphere》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00379 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00379',
  slug: 'auguste-piccard-s-high-altitude-balloon-flights-pioneering-the-stratosphere',
  title: 'Auguste Piccard’s High‑Altitude Balloon Flights: Pioneering the Stratosphere',
  subtitle: 'How a Swiss physicist turned a simple balloon into a gateway to the upper atmosphere.',
  summary: 'A narrative of Auguste Piccard’s daring balloon ascents that opened the stratosphere for scientific discovery.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1930s, a Swiss physicist named <span class="vocab" data-cn="奥古斯特·皮卡尔">Auguste Piccard</span> grew frustrated with the limits of ground‑based laboratories. He wanted to study cosmic radiation far above the clouds, where Earth’s protective layers thinned and particles from space could be measured directly. At that time, most high‑altitude research relied on unmanned balloons or fragile open‑air gondolas, which offered little protection against the near‑vacuum conditions of the upper atmosphere.`,
    `Piccard’s breakthrough was to design a sealed <span class="vocab" data-cn="加压舱">pressurized cabin</span> made from lightweight aluminum alloy. The cabin resembled a small steel tube with thick glass windows, capable of maintaining one atmosphere of pressure even as external air thinned dramatically. By keeping the interior at sea‑level pressure, Piccard and his companion could breathe normally without cumbersome oxygen masks, effectively turning a balloon into a flying laboratory.`,
    `On 27 May 1931, Piccard and his assistant <span class="vocab" data-cn="保罗·基弗尔">Paul Kipfer</span> lifted off from Davos in a massive hydrogen‑filled balloon. As the ascent progressed, the external temperature dropped below –50 °C and the air pressure fell to less than one tenth of sea‑level values. Inside the <span class="vocab" data-cn="舱体">gondola</span>, however, the climate remained comfortable, thanks to the cabin’s airtight construction and a small heating system powered by a gasoline stove. The duo reached an estimated altitude of 15 785 m (about 51 775 ft), setting a new world <span class="vocab" data-cn="高度纪录">altitude record</span> for manned flight.`,
    `The scientific payload was modest but ingenious. Piccard installed a <span class="vocab" data-cn="宇宙射线探测器">cosmic ray detector</span>, a Geiger‑Müller tube, and several barometers to monitor pressure changes. As they climbed, the detectors recorded a sudden increase in high‑energy particles, confirming that Earth’s atmosphere indeed shielded the surface from much of space radiation. These measurements sparked intense interest among physicists worldwide and laid groundwork for later particle physics experiments conducted at mountain observatories and, eventually, in orbit.` ,
    `The success of the 1931 flight proved that humans could survive—and conduct research—in the <span class="vocab" data-cn="平流层">stratosphere</span>. Piccard’s method of using a sealed cabin combined with a large helium or hydrogen balloon became the template for subsequent high‑altitude missions. In 1932 he repeated the experiment, this time reaching over 16 km and refining the cabin’s insulation and ballast system to improve stability during ascent and descent.` ,
    `Beyond pure science, Piccard’s work influenced aircraft engineering. The principle of maintaining a constant internal pressure while external pressure drops is exactly what modern airliners use when cruising at 35 000 ft. Moreover, his emphasis on lightweight yet strong materials foreshadowed the composite structures now common in both commercial jets and spacecraft.` ,
    `The legacy of Piccard’s balloon adventures lives on in today’s research programs. NASA and ESA still launch high‑altitude balloons filled with <span class="vocab" data-cn="氦气">helium</span> to carry telescopes, atmospheric sensors, and even prototype space habitats into the near‑space environment. These modern “balloon labs” rely on the same basic physics of <span class="vocab" data-cn="浮力">buoyancy</span> that Piccard exploited: a lighter‑than‑air gas provides lift, while a pressurized payload protects delicate instruments and human occupants.` ,
    `Looking back, Auguste Piccard’s daring ascents remind us that curiosity often begins with a simple question—what lies above the clouds? By turning a humble balloon into a sealed laboratory, he opened an entire layer of Earth’s atmosphere to systematic study, paving the way for everything from high‑altitude aviation to human spaceflight. His story continues to inspire engineers and scientists who still chase the horizon, one pressurized cabin at a time.` ,
  ],
  vocabulary: [
    { word: 'Auguste Piccard', cn: '奥古斯特·皮卡尔' },
    { word: 'pressurized cabin', cn: '加压舱' },
    { word: 'gondola', cn: '舱体' },
    { word: 'stratosphere', cn: '平流层' },
    { word: 'helium', cn: '氦气' },
    { word: 'cosmic ray detector', cn: '宇宙射线探测器' },
    { word: 'buoyancy', cn: '浮力' },
  ],
};

export default article;
