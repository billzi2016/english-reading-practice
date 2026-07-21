import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Doolittle Raid: How a Bold Airstrike Turned the Tide in World War II》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00189 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00189',
  slug: 'the-doolittle-raid-how-a-bold-airstrike-turned-the-tide-in-world-war-ii',
  title: 'The Doolittle Raid: How a Bold Airstrike Turned the Tide in World War II',
  subtitle: 'A daring strike that reshaped strategy and morale in the early Pacific war.',
  summary: 'An in‑depth look at the planning, execution, and lasting impact of the 1942 Doolittle Raid on Japan.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Just weeks after the shock of Pearl Harbor, the United States faced a desperate need for a response that could both punish Japan and lift American spirits. The Pacific theater was still in its infancy, and senior commanders were searching for an operation that would demonstrate that the U.S. Navy could strike the Japanese home islands despite being outnumbered at sea.`,
    `The plan emerged from Lieutenant Colonel <span class="vocab" data-cn="詹姆斯·杜立特">James Doolittle</span>, a former Olympic pilot turned bomber commander. He proposed using the medium‑weight <span class="vocab" data-cn="B-25米切尔轰炸机">B-25 Mitchell</span> in a daring <span class="vocab" data-cn="航母起飞的">carrier‑based</span> assault. Because no aircraft carrier had ever launched a bomber of that size, the idea seemed almost reckless, yet Doolittle convinced Admiral Chester Nimitz to allocate the newly commissioned <span class="vocab" data-cn="航空母舰">USS Hornet</span> for the mission.`,
    `On the night of 18 April 1942, sixteen B‑25s taxied onto the flight deck of the Hornet under a moonless sky. The pilots faced an impossible take‑off distance—only about 500 feet—and had to lift off at full throttle while the carrier steamed at maximum speed. Despite these constraints, every aircraft managed to become airborne, carrying a modest payload of incendiary bombs aimed at Tokyo and other industrial targets. The raid lasted barely thirty minutes, but its psychological impact was immediate.`,
    `The Japanese government could not ignore an attack on their capital so soon after Pearl Harbor. Although the physical damage in Tokyo was limited—most bombs fell on residential districts—the raid shattered the myth of invulnerability that had surrounded the Japanese mainland. It forced Japan to divert resources to homeland defense and prompted a hurried acceleration of plans for a counter‑offensive, which ultimately culminated in the pivotal Battle of Midway later that summer. In strategic terms, the Doolittle Raid demonstrated the feasibility of <span class="vocab" data-cn="战略轰炸">strategic bombing</span> from naval platforms, reshaping Allied thinking about how to project power across the vast Pacific ocean.` ,
    `The fate of the aircrews after the raid was a mixture of heroism and hardship. Lacking fuel for a return to the carrier, most crews bailed out over the East China Sea or crash‑landed in occupied China. Local Chinese guerrillas and civilians risked their lives to hide the downed Americans from Japanese forces. Of the 80 men who took part, three were killed in action, eight became prisoners of war, and the rest eventually made it back to Allied territory—a testament to both bravery and international cooperation.` ,
    `In the years that followed, the Doolittle Raid earned a legendary status in American popular memory. It proved that bold, unconventional ideas could succeed against overwhelming odds, bolstering <span class="vocab" data-cn="士气">morale</span> on the home front and among troops fighting far from shore. The raid also laid groundwork for later carrier‑based operations, such as the island‑hopping campaigns that would bring Allied forces ever closer to Japan’s core islands. Today historians view the raid not merely as a symbolic gesture but as a catalyst that helped turn the tide of war in the Pacific.` ,
  ],
  vocabulary: [
    { word: 'James Doolittle', cn: '詹姆斯·杜立特' },
    { word: 'B-25 Mitchell', cn: 'B-25米切尔轰炸机' },
    { word: 'carrier‑based', cn: '航母起飞的' },
    { word: 'USS Hornet', cn: '航空母舰' },
    { word: 'strategic bombing', cn: '战略轰炸' },
    { word: 'morale', cn: '士气' },
  ],
};

export default article;
