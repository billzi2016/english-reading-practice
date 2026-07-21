import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Stealthy War of the Airships: How Zeppelins Challenged Early Aviation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00036 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00036',
  slug: 'the-stealthy-war-of-the-airships-how-zeppelins-challenged-early-aviation',
  title: 'The Stealthy War of the Airships: How Zeppelins Challenged Early Aviation',
  subtitle: 'A Tale of Rivalry Between Rigid Airships and Early Fixed‑Wing Aircraft',
  summary: 'Explores how German Zeppelins used size, altitude, and quiet propulsion to compete with fledgling airplanes before and during World War I.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When the first powered flight took off at Kitty Hawk in 1903, most observers imagined a future dominated by sleek biplanes. Yet across the Atlantic, Count Ferdinand von <span class="vocab" data-cn="齐柏林">von Zeppelin</span> was perfecting a very different vision: a massive, cigar‑shaped <span class="vocab" data-cn="硬式飞艇">rigid airship</span> that could glide silently for days. The key to his design lay in the <span class="vocab" data-cn="气囊外壳">balloon envelope</span>, a framework of aluminum ribs wrapped with lightweight fabric, filled with highly buoyant <span class="vocab" data-cn="氢气">hydrogen</span>.`,
    `Early pilots quickly realized that the airship’s sheer size gave it an unexpected advantage in “stealth.” While early aircraft were noisy, vibration‑prone machines powered by exposed rotary engines, Zeppelins could cruise at altitudes above 3,000 meters where wind was thin and sound dissipated. Their <span class="vocab" data-cn="螺旋桨推进">propulsion</span> system—often a pair of internal combustion engines driving large propellers mounted on the hull—produced a low‑frequency hum that blended with the wind, making detection by ground observers difficult, especially at dusk or dawn.`,
    `The rivalry intensified as military planners began to see both platforms as tools for reconnaissance and strategic bombing. In 1914, the German army deployed the <span class="vocab" data-cn="LZ 127">LZ 127</span> (later known as the *Graf Zeppelin*) on long‑range missions over the North Sea, while the British Royal Flying Corps fielded the B.E.2 biplane for coastal patrols. The airship’s ability to stay aloft for up to 30 hours meant it could shadow enemy fleets without refueling, whereas a typical airplane of the era required frequent landings after just a few hours of flight.`,
    `However, the airship’s advantage was not absolute. Its massive surface area made it vulnerable to weather; sudden squalls could tear the envelope or force an emergency descent. Moreover, the reliance on <span class="vocab" data-cn="氢气">hydrogen</span>—a highly flammable gas—created a deadly weakness. The infamous 1916 crash of the British <span class="vocab" data-cn="R101">R101</span>, though occurring after the war, echoed earlier concerns when a German Zeppelin was struck by lightning and ignited over the Eastern Front. In contrast, early airplanes began experimenting with more reliable gasoline engines and sturdier airframes, gradually narrowing the performance gap.`,
    `The “stealth” narrative also had an espionage dimension. During World War I, both sides used Zeppelins to drop propaganda leaflets behind enemy lines under cover of night. The quiet glide allowed them to release bundles at low altitude before slipping back into the darkness, a tactic that baffled ground troops accustomed to the roar of artillery shells. Simultaneously, Allied pilots learned to exploit the airship’s predictable flight paths, developing early forms of aerial interception using machine‑gun‑armed fighters such as the Fokker Eindecker. These dogfights marked the first true clash between <span class="vocab" data-cn="硬式飞艇">rigid airships</span> and fixed‑wing aircraft.`,
    `By the end of 1918, the balance had shifted decisively toward airplanes. Advances in engine power, aerodynamic design, and the introduction of lightweight aluminum alloys allowed fighters to reach speeds exceeding 200 km/h—far faster than any Zeppelin could maneuver. The war’s final months saw the German navy retire its remaining fleet of airships, recognizing that their strategic value was eclipsed by the agility and lower operational risk of aircraft. Yet the legacy of the “stealthy war” persisted, influencing later concepts such as the <span class="vocab" data-cn="隐形飞机">stealth aircraft</span> that would rely on low acoustic signatures and high‑altitude flight to avoid detection.`,
    `Today, museums in Friedrichshafen and London preserve restored Zeppelins, reminding us of a brief era when massive balloons ruled the skies. Their story illustrates how technological competition can drive rapid innovation—sometimes in unexpected directions. The quiet hum of a Zeppelin’s engines may have been a fleeting advantage, but it sparked a century‑long quest to master the invisible aspects of flight, from sound‑absorbing materials to radar‑evading shapes, that continues to shape modern aviation.`,
  ],
  vocabulary: [
    { word: 'von Zeppelin', cn: '齐柏林（德国航空先驱）' },
    { word: 'rigid airship', cn: '硬式飞艇，使用内部框架支撑的气囊结构' },
    { word: 'balloon envelope', cn: '气囊外壳，用于容纳升力气体的部分' },
    { word: 'hydrogen', cn: '氢气，一种轻质但易燃的气体' },
    { word: 'propulsion', cn: '推进，指提供动力使飞行器前进的系统' },
    { word: 'stealth aircraft', cn: '隐形飞机，通过降低雷达和声波反射来避免被探测' },
  ],
};

export default article;
