import type { Article } from '../../types/index.ts';

// 文件意图：维护《Cold War Spy Satellites: From Corona's Film Returns to the Digital Eyes of KH‑11》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00457 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00457',
  slug: 'cold-war-spy-satellites-from-corona-s-film-returns-to-the-digital-eyes-of-kh-11',
  title: 'Cold War Spy Satellites: From Corona’s Film Returns to the Digital Eyes of KH‑11',
  subtitle: 'How America turned a bucket of film into a digital eye in space',
  summary: 'A narrative of the United States’ first photo‑reconnaissance satellites, from the daring Corona missions to the sophisticated KH‑11 system.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1960s the United States faced a stark intelligence gap: Soviet missile bases were hidden behind clouds and mountains, and traditional aircraft could not safely overfly them. The answer came from an unlikely source—space. Project <span class="vocab" data-cn="代号“康纳”">Corona</span> was born at the intersection of Cold War urgency and nascent rocket technology, promising to deliver photographs of the USSR from orbit without risking a pilot’s life.`,
    `Unlike today’s digital cameras, Corona relied on a physical <span class="vocab" data-cn="装有胶片的返回舱">film‑return capsule</span>. A large camera snapped images onto 70 mm film, then a small reentry vehicle detached and fell back to Earth, parachuting into the Pacific where specially equipped ships retrieved it. The first successful recovery in August 1960 proved that a satellite could not only survive launch but also return usable intelligence material.`,
    `The engineering challenges were immense. Engineers had to master <span class="vocab" data-cn="低地球轨道">low Earth orbit</span> (LEO) dynamics, ensuring the satellite passed over target regions at the right moment while keeping the film stable in micro‑gravity. They also wrestled with thermal control; a camera exposed to space’s extreme temperature swings could warp the delicate optics, blurring the very images they needed.` ,
    `Corona’s operational life spanned more than a decade, delivering thousands of frames that revealed Soviet airfields, missile sites, and even the layout of nuclear test facilities. Yet its reliance on physical film meant a delay of days between capture and analysis—a luxury the United States could not always afford as tensions rose during events like the Cuban Missile Crisis.` ,
    `The next leap came with the KH‑11 “Kennan” series, first launched in 1976. Instead of film, KH‑11 employed an <span class="vocab" data-cn="电光传感器">electro‑optical sensor</span> that converted light directly into electronic signals. These digital images could be transmitted to ground stations within minutes via encrypted radio links, effectively turning the satellite into a real‑time eye in the sky.` ,
    `KH‑11’s design also introduced a new orbital strategy: many of its satellites operated in <span class="vocab" data-cn="地球同步轨道">geostationary orbit</span>, hovering over a fixed point on Earth. This allowed continuous monitoring of high‑value targets, something impossible for LEO platforms that swept past each region only briefly. The combination of higher <span class="vocab" data-cn="分辨率">resolution</span>—often under one meter—and rapid data delivery reshaped intelligence analysis, enabling planners to track troop movements and missile deployments almost as they happened.` ,
    `Both Corona and KH‑11 illustrate how technological innovation can be driven by geopolitical pressure. After the Cold War ended, many of these programs were <span class="vocab" data-cn="解密">declassified</span>, allowing historians to piece together a hidden chapter of space history. Today’s commercial Earth‑observation constellations owe a debt to those early spy satellites, inheriting lessons about film handling, sensor design, and the relentless pursuit of clearer pictures from above.` ,
  ],
  vocabulary: [
    { word: 'Corona', cn: '代号“康纳”' },
    { word: 'film-return capsule', cn: '装有胶片的返回舱' },
    { word: 'low Earth orbit', cn: '低地球轨道' },
    { word: 'electro-optical sensor', cn: '电光传感器' },
    { word: 'geostationary orbit', cn: '地球同步轨道' },
    { word: 'resolution', cn: '分辨率' },
    { word: 'declassification', cn: '解密' },
  ],
};

export default article;
