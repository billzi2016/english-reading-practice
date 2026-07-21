import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Kettering Bug: America’s World War I Flying Bomb and the Dawn of Unmanned Aerial Warfare》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00235 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00235',
  slug: 'the-kettering-bug-america-s-world-war-i-flying-bomb-and-the-dawn-of-unmanned-aerial-warfare',
  title: 'The Kettering Bug: America’s World War I Flying Bomb and the Dawn of Unmanned Aerial Warfare',
  subtitle: 'How a daring experiment in 1918 foreshadowed today’s drones',
  summary: 'An engaging story about the first American unmanned weapon, its technology, tests, and lasting influence.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the world was still learning how to control a heavier‑than‑air machine, a handful of engineers in Dayton, Ohio imagined a weapon that could fly itself straight into an enemy target. Their vision seemed like science fiction, yet it materialised as the <span class="vocab" data-cn="空中鱼雷">Kettering Bug</span>, arguably the first true <span class="vocab" data-cn="无人航空炸弹">flying bomb</span>. The project captured public imagination because it promised to deliver a payload without risking a pilot’s life—a concept that still drives modern drone design.`,
    `The mastermind behind the Bug was Charles F. Kettering, a prolific inventor best known for the electric starter in automobiles. In early 1918, the U.S. Army Signal Corps commissioned him to create an <span class="vocab" data-cn="空中鱼雷">aerial torpedo</span> that could travel up to 75 miles and drop a 100‑pound bomb on German positions. Kettering assembled a team of engineers from his own company, the Dayton Engineering Laboratories (DELCO), and they set up a makeshift laboratory at McCook Field, where many early aviation experiments took place.`,
    `Technically, the Bug resembled a small biplane with a 12‑horsepower gasoline engine driving a two‑bladed propeller. Its <span class="vocab" data-cn="机身">airframe</span> was built from spruce and fabric to keep weight low. What made it revolutionary was its <span classclass="vocab" data-cn="陀螺仪自动驾驶仪">gyroscopic autopilot</span>, a mechanical system that measured the aircraft’s roll, pitch, and yaw using spinning masses. By pre‑setting a clockwork timer linked to a set of control surfaces, the Bug could maintain a straight <span class="vocab" data-cn="弹道轨迹">ballistic trajectory</span> without any human input.`,
    `Between July and September 1918, DELCO conducted a series of <span class="vocab" data-cn="飞行试验">flight tests</span>. The Bug was launched from a rail‑like catapult, its engine spooled up, and then it coasted into the sky. In one successful run, the aircraft traveled roughly 70 miles before crashing into a sandbag target on the ground—a modest but undeniable proof of concept. However, many flights ended prematurely due to engine failure or miscalculated timing, highlighting the fragility of early <span class="vocab" data-cn="推进系统">propulsion systems</span> and the difficulty of precise navigation without radio aid.`,
    `The Armistice on November 11, 1918 halted any chance of deploying the Bug in combat. By then, only a handful of prototypes had been built, and the military deemed the technology too unreliable for wartime use. Nevertheless, the project left an indelible mark on the emerging field of unmanned weapons. Engineers who worked on the Bug later contributed to the development of radio‑controlled aircraft in the 1920s and the first guided missiles during World War II, such as the German V‑1 “buzz bomb” and the American JB‑2 Loon.`,
    `In retrospect, the Kettering Bug can be seen as a bridge between early aviation experimentation and today’s sophisticated <span class="vocab" data-cn="无人机">unmanned aerial vehicles</span> (UAVs). Its reliance on mechanical guidance foreshadowed later electronic solutions like <span class="vocab" data-cn="无线电制导">radio guidance</span> and GPS navigation. Modern drones inherit the Bug’s core philosophy: deliver a payload accurately while keeping operators safely on the ground. The story also reminds us that many breakthrough technologies begin as risky prototypes, often judged premature in their own era.`,
    `The legacy of the Kettering Bug endures not only in textbooks but also in the cultural imagination of what unmanned warfare can achieve. Museums such as the National Museum of the United States Air Force preserve a replica, allowing visitors to glimpse the humble wooden frame that once dared to fly without a pilot. As contemporary conflicts increasingly rely on swarms of autonomous aircraft, remembering the Bug’s daring ambition helps us appreciate how far engineering has come—and how many early ideas were already pointing toward today’s skyward future.`,
  ],
  vocabulary: [
    { word: 'Kettering Bug', cn: '凯特林虫' },
    { word: 'aerial torpedo', cn: '空中鱼雷' },
    { word: 'airframe', cn: '机身' },
    { word: 'gyroscopic autopilot', cn: '陀螺仪自动驾驶仪' },
    { word: 'ballistic trajectory', cn: '弹道轨迹' },
    { word: 'flight test', cn: '飞行试验' },
    { word: 'propulsion system', cn: '推进系统' },
    { word: 'unmanned aerial vehicle', cn: '无人机' },
    { word: 'radio guidance', cn: '无线电制导' },
  ],
};

export default article;
