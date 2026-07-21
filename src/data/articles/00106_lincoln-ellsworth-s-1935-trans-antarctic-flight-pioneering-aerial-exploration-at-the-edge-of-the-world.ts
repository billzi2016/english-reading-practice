import type { Article } from '../../types/index.ts';

// 文件意图：维护《Lincoln Ellsworth’s 1935 Trans‑Antarctic Flight: Pioneering Aerial Exploration at the Edge of the World》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00106 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00106',
  slug: 'lincoln-ellsworth-s-1935-trans-antarctic-flight-pioneering-aerial-exploration-at-the-edge-of-the-world',
  title: 'Lincoln Ellsworth’s 1935 Trans‑Antarctic Flight: Pioneering Aerial Exploration at the Edge of the World',
  subtitle: 'How a daring 1935 flight opened the skies over Antarctica',
  summary: 'A narrative of Lincoln Ellsworth’s historic crossing of Antarctica by air, its challenges and lasting impact.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1930s the Antarctic continent was still a vast blank on world maps. While ground parties struggled across crevassed glaciers, American explorer <span class="vocab" data-cn="林肯·埃尔斯沃思">Lincoln Ellsworth</span> believed that only an aircraft could reveal its hidden geography quickly. Inspired by earlier polar flights and backed by the American Geographical Society, he set his sights on a daring goal: to fly from the tip of the Antarctic Peninsula all the way across the icy interior to the Ross Ice Shelf, a journey later celebrated as the first <span class="vocab" data-cn="跨南极的">trans‑Antarctic</span> crossing.`,
    `Ellsworth recruited British pilot Herbert Hollick‑Kenyon and together they chose a sturdy <span class="vocab" data-cn="单翼飞机">monoplane</span> built by Lockheed, the Vega 5C, which they christened “Polar Star.” The aircraft featured a powerful radial engine, reinforced wing spars, and a fuel capacity of roughly 1,200 liters—just enough for the planned 2,500‑kilometer trek if every ounce was used wisely. Before departure, a team of engineers installed heated oil lines to combat the extreme cold that could otherwise cause the engine to seize mid‑flight.`,
    `The flight began on 23 November 1935 from a snow‑covered runway near the base at Stonington Island. From the moment they lifted off, navigation proved treacherous. The <span class="vocab" data-cn="磁罗盘">magnetic compass</span> became unreliable as they approached the magnetic South Pole, forcing Ellsworth to rely on celestial sightings of the sun and stars, a method known as dead‑reckoning. Occasionally they caught faint signals from a pre‑placed <span class="vocab" data-cn="无线电信标">radio beacon</span> on the ice, which helped confirm their position when visual landmarks vanished beneath endless white.`,
    `As the plane entered the continent’s heart, they encountered the infamous <span class="vocab" data-cn="极地漩涡">polar vortex</span>, a massive low‑pressure system that generated gale‑force katabatic winds descending from the interior plateau. These winds buffeted the aircraft, pushing it off course and increasing fuel consumption. Ellsworth and Holnick‑Kenyon had to make split‑second decisions: climb higher to escape the worst gusts or stay lower to conserve engine power. Their careful calculations paid off; after more than twelve hours aloft they finally sighted a faint ridge that marked the edge of the Ross Ice Shelf.`,
    `Landing on the soft, snow‑packed surface of the Ross Ice Shelf was both triumphant and precarious. The “Polar Star” touched down with a plume of powdery snow, and the crew quickly secured the aircraft against shifting ice. News of their success traveled back to the United States via radio, sparking headlines that hailed the flight as a milestone in polar exploration. Within days, support ships from the U.S. Navy arrived to retrieve supplies and begin preparations for the return journey.`,
    `Beyond its dramatic narrative, the expedition yielded valuable scientific data. Ellsworth’s team carried a camera capable of high‑altitude <span class="vocab" data-cn="航空摄影">aerial photography</span>, capturing over 200 stereoscopic images of previously unseen mountain ranges and ice formations. These photographs were later used for detailed <span class="vocab" data-cn="测地测量">geodetic surveying</span>, allowing cartographers to produce more accurate maps of the continent’s interior. Meteorological instruments recorded temperature, pressure, and wind speed throughout the flight, providing rare insight into the dynamics of the Antarctic atmosphere at that time.`,
    `The legacy of the 1935 crossing resonated for decades. It demonstrated that aircraft could safely operate over Antarctica, paving the way for later scientific programs such as Operation Highjump (1946‑47) and the establishment of permanent research stations reachable by air. Modern satellite imagery now maps the continent in exquisite detail, but historians still credit Ellsworth’s bold vision for opening “the roof of the world” to human eyes. His flight remains a testament to ingenuity, courage, and the relentless pursuit of knowledge at Earth’s most remote edge.`,
  ],
  vocabulary: [
    { word: 'Lincoln Ellsworth', cn: '林肯·埃尔斯沃思' },
    { word: 'trans‑Antarctic', cn: '跨南极的' },
    { word: 'monoplane', cn: '单翼飞机' },
    { word: 'polar vortex', cn: '极地漩涡' },
    { word: 'magnetic compass', cn: '磁罗盘' },
    { word: 'radio beacon', cn: '无线电信标' },
    { word: 'aerial photography', cn: '航空摄影' },
    { word: 'geodetic surveying', cn: '测地测量' },
  ],
};

export default article;
