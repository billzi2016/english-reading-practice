import type { Article } from '../../types/index.ts';

// 文件意图：维护《The T‑34 Tank: Soviet Engineering Triumph that Turned the Tide of World War II》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00491 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00491',
  slug: 'the-t-34-tank-soviet-engineering-triumph-that-turned-the-tide-of-world-war-ii',
  title: 'The T‑34 Tank: Soviet Engineering Triumph that Turned the Tide of World War II',
  subtitle: 'How a simple yet powerful design reshaped the Eastern Front',
  summary: 'A narrative of the T‑34’s conception, technical breakthroughs, and decisive impact on WWII.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `It was a bitter January night in 1942 outside Stalingrad when Soviet infantry first heard the low rumble of an approaching convoy. Through the snow‑filled streets rolled dozens of T‑34s, their silhouettes stark against the orange glow of burning buildings. The sight sparked both awe and fear among German troops; they had never encountered a tank that could glide over frozen mud, shrug off small‑caliber fire, and still deliver a lethal punch. That moment marked the beginning of a shift on the Eastern Front.`,
    `The story of the T‑34 began years earlier in a modest workshop at Kharkiv’s Factory No. 183, where chief designer <span class="vocab" data-cn="米哈伊尔·科什金">Mikhail Koshkin</span> wrestled with a simple question: how to build a tank that could be produced quickly, repaired on the battlefield, and still out‑maneuver the best German machines? Koshkin’s answer was radical simplicity—an open‑frame chassis, interchangeable parts, and a focus on reliability over luxury. His team deliberately avoided complex gearboxes and intricate optics, believing that a rugged design would survive the harsh Soviet climate and the chaotic conditions of war.`,
    `Three technical innovations set the T‑34 apart from its contemporaries. First, its <span class="vocab" data-cn="倾斜装甲">sloped armor</span> increased effective thickness without adding weight, deflecting incoming rounds more efficiently than vertical plates. Second, a powerful <span class="vocab" data-cn="柴油发动机">diesel engine</span> provided better fuel economy and reduced fire risk compared to gasoline engines used by many Axis tanks. Third, the vehicle’s <span class="vocab" data-cn="宽履带">wide tracks</span> distributed weight over a larger surface area, granting superior traction in mud, snow, and broken terrain. Together these features gave the T‑34 a blend of protection, mobility, and firepower that few opponents could match.`,
    `Beyond engineering brilliance, the Soviet Union’s ability to mass‑produce the tank proved decisive. By 1943, factories employing <span class="vocab" data-cn="大规模生产">mass production</span> techniques churned out over a thousand T‑34s each month—a staggering figure given wartime shortages of steel and skilled labor. The design’s modularity meant that even workers with limited training could assemble major components, while the use of relatively low‑grade steel kept material costs down. This industrial surge ensured that Soviet armored divisions could replace losses faster than the Germans could field new Panthers or Tigers.`,
    `On the battlefield, the T‑34’s reputation for <span class="vocab" data-cn="机械可靠性">mechanical reliability</span> became legendary. During the Battle of Kursk in July 1943, Soviet crews reported that many tanks continued to operate after traversing over a kilometer of shell‑cratered ground without breaking down. The combination of a robust engine, simple transmission, and easy access to spare parts meant that field repairs could be completed within hours rather than days. Moreover, the tank’s <span class="vocab" data-cn="炮塔稳定系统">gun stabilization</span> allowed accurate fire on the move, enabling Soviet forces to execute rapid counter‑attacks that overwhelmed static German defenses.`,
    `The cumulative effect of these advantages was a strategic turning point. While earlier in the war the Wehrmacht’s blitzkrieg tactics had seemed unstoppable, the T‑34 forced a reevaluation of German armored doctrine. Its presence at Kursk halted the last major German offensive on the Eastern Front and set the stage for a relentless Soviet advance toward Berlin. Allied observers took note as well; the United States and Britain incorporated lessons from the T‑34’s design into their own post‑war tank programs, recognizing that simplicity and production efficiency could outweigh sheer firepower alone.`,
    `Today, surviving examples of the T‑34 can be found in museums across Russia, Europe, and North America, serving as tangible reminders of a design philosophy that married engineering pragmatism with battlefield necessity. Modern armored vehicle designers still cite its <span class="vocab" data-cn="倾斜装甲">sloped armor</span> concept and emphasis on ease of manufacture when developing next‑generation platforms. In retrospect, the T‑34 was not just a weapon; it was a testament to how focused innovation under extreme pressure can reshape history.`,
  ],
  vocabulary: [
    { word: 'Mikhail Koshkin', cn: '米哈伊尔·科什金' },
    { word: 'sloped armor', cn: '倾斜装甲' },
    { word: 'diesel engine', cn: '柴油发动机' },
    { word: 'wide tracks', cn: '宽履带' },
    { word: 'mass production', cn: '大规模生产' },
    { word: 'mechanical reliability', cn: '机械可靠性' },
    { word: 'gun stabilization', cn: '炮塔稳定系统' },
  ],
};

export default article;
