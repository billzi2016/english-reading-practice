import type { Article } from '../../types/index.ts';

// 文件意图：维护《Breaking the Sound Barrier: Chuck Yeager, the Bell X‑1 and the Quest for Supersonic Flight》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00450 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00450',
  slug: 'breaking-the-sound-barrier-chuck-yeager-the-bell-x-1-and-the-quest-for-supersonic-flight',
  title: 'Breaking the Sound Barrier: Chuck Yeager, the Bell X‑1 and the Quest for Supersonic Flight',
  subtitle: 'How a daring test pilot and a rocket‑powered research plane shattered a long‑standing aerodynamic myth.',
  summary: 'The story of Chuck Yeager’s historic flight in the Bell X‑1 reveals the science, engineering, and bravery behind humanity’s first supersonic breakthrough.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1947 the world was still reeling from World War II, yet a new obsession had taken hold among engineers and pilots alike: to conquer the elusive <span class="vocab" data-cn="超音速的">supersonic</span> regime. The prevailing belief—rooted in early aerodynamic experiments—was that an aircraft would become uncontrollable once it approached the speed of sound, a phenomenon later termed “the sound barrier.” Into this climate stepped a young United States Air Force test pilot named <span class="vocab" data-cn="查克·耶格尔">Chuck Yeager</span>, whose daring spirit would soon rewrite the rules of flight.`,
    `The aircraft chosen for the challenge was the Bell X‑1, a sleek, bullet‑shaped research plane built by Bell Aircraft Corporation. Its design deliberately mimicked the shape of a .50‑caliber rifle projectile, which had already demonstrated stable flight at transonic speeds in wind‑tunnel tests. The X‑1’s most critical feature was its powerful <span class="vocab" data-cn="火箭发动机">rocket engine</span>, supplied by Reaction Motors Inc., capable of delivering the necessary <span class="vocab" data-cn="推力">thrust</span> without relying on atmospheric oxygen. Engineers also paid meticulous attention to <span class="vocab" data-cn="空气动力学的">aerodynamic</span> shaping, hoping to minimize drag as the plane approached the critical <span class="vocab" data-cn="马赫数">Mach number</span> of 1.`,
    `On 14 October 1947, Yeager climbed into the X‑1 atop a B‑29 “mothership” at Rogers Dry Lake in California. After a brief climb to an altitude of about 23 000 feet, the bomber released the sleek fighter, and its rocket ignited with a thunderous roar. Yeager, already seasoned from combat missions over Europe, felt the familiar vibration of high‑speed flight but also sensed something different: the air around him was beginning to behave strangely as the aircraft neared the speed of sound.`,
    `The primary obstacle at these velocities was <span class="vocab" data-cn="可压缩性">compressibility</span>. As an aircraft accelerates toward Mach 1, shock waves form on its surface, causing a sudden rise in pressure that can stall control surfaces and produce violent buffet. To counter this, the X‑1 featured enlarged elevators and a stabilizer that could be adjusted mid‑flight, allowing Yeager to maintain pitch control even as the airflow became turbulent. The rocket’s thrust had to be carefully throttled; too much would push the plane beyond its structural limits, while too little risked losing speed before breaking through the barrier.`,
    `At approximately 12:45 p.m., the X‑1’s airspeed gauge crept past Mach 1.0, reaching about Mach 1.06—roughly 700 mph at that altitude. Yeather later recalled a sudden quietness as the shock wave detached from the nose, and the aircraft seemed to glide effortlessly through what had previously been an invisible wall. “I think I just broke the sound barrier,” he reported with characteristic modesty, unaware that his flight would become one of the most celebrated milestones in aviation history.`,
    `The implications of Yeager’s success rippled across the aerospace community. Engineers now possessed concrete data on <span class="vocab" data-cn="跨声速">transonic</span> flow, informing the design of faster jet fighters such as the North American F‑86 Sabre and later the iconic Lockheed U‑2 reconnaissance plane. Moreover, the confidence gained from mastering supersonic flight paved the way for the United States’ entry into the space race, where rockets would routinely exceed Mach 25 during launch. The X‑1’s legacy also inspired commercial ventures, culminating decades later in aircraft like the Concorde and modern projects such as Boom Supersonic’s Overture.`,
    `Chuck Yeager continued to push boundaries throughout his career, eventually becoming a four‑star general and an enduring symbol of courage. His historic flight in the Bell X‑1 remains a vivid reminder that breakthroughs often arise from the marriage of bold human spirit and meticulous engineering. As we look toward hypersonic travel—speeds beyond Mach 5—the lessons learned on that bright October day continue to guide designers, reminding us that every new frontier begins with a single daring step through the unknown.`,
  ],
  vocabulary: [
    { word: 'supersonic', cn: '超音速的' },
    { word: 'Chuck Yeager', cn: '查克·耶格尔' },
    { word: 'rocket engine', cn: '火箭发动机' },
    { word: 'thrust', cn: '推力' },
    { word: 'aerodynamic', cn: '空气动力学的' },
    { word: 'Mach number', cn: '马赫数' },
    { word: 'compressibility', cn: '可压缩性' },
    { word: 'transonic', cn: '跨声速' },
  ],
};

export default article;
