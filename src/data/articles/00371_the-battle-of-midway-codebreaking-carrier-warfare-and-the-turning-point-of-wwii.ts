import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Battle of Midway: Codebreaking, Carrier Warfare, and the Turning Point of WWII》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00371 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00371',
  slug: 'the-battle-of-midway-codebreaking-carrier-warfare-and-the-turning-point-of-wwii',
  title: 'The Battle of Midway: Codebreaking, Carrier Warfare, and the Turning Point of WWII',
  subtitle: 'How intelligence and air power reshaped the Pacific War',
  summary: 'A narrative look at how cryptanalysis, carrier tactics, and decisive leadership turned Midway into a pivotal victory.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In early June 1942, the Imperial Japanese Navy believed it held the strategic initiative in the Pacific. Their plan hinged on luring the remaining United States fleet into a trap near Midway Atoll, a tiny outpost about 1,300 miles northwest of Hawaii. What they did not anticipate was that American <span class="vocab" data-cn="密码破译">codebreaking</span> efforts had already uncovered the Japanese timetable and even the target island itself.`,
    `The breakthrough came from a team at Station HYPO in Pearl Harbor, led by Commander Joseph Rochefort. By painstakingly comparing intercepted Japanese naval traffic with known phrases, the analysts identified a recurring word that translated to “Midway.” This insight allowed Admiral Chester Nimitz to set an ambush rather than be caught off guard. The success of this <span class="vocab" data-cn="情报">intelligence</span> operation demonstrated how cryptanalysis could become a weapon as decisive as any gun or bomb.`,
    `Armed with the knowledge of Japanese movements, Nimitz ordered his three fleet carriers—USS Enterprise, USS Hornet, and the hastily repaired USS Yorktown—to position themselves northeast of Midway. Unlike battleships, which required close-range gunnery, <span class="vocab" data-cn="航空母舰">carrier</span> groups could launch aircraft thousands of miles away, striking at enemy ships before they ever saw a horizon. This shift from surface engagements to air‑centric warfare was still relatively new, and many commanders were learning its limits in real time.`,
    `On the morning of June 4th, Japanese carrier strike planes began their first wave against Midway’s modest defenses. While the island’s own aircraft fought bravely, they could not match the speed or altitude of the incoming <span class="vocab" data-cn="俯冲轰炸机">dive bombers</span>. However, the American carriers had already scrambled their own squadrons—SBD Dauntless dive bombers and TBD Devastator torpedo bombers—to intercept the Japanese fleet. The timing was crucial: the U.S. pilots arrived just as the Japanese carriers were re‑arming and refueling after their initial attack.`,
    `The result was a dramatic reversal of fortunes. Within minutes, American dive bombers found the flight decks of three Japanese carriers—Akagi, Kaga, and Sōryū—ablaze with fuel fires that could not be contained. The <span class="vocab" data-cn="鱼雷轰炸机">torpedo bomber</span> squadrons, though suffering heavy losses, forced the Japanese pilots to maneuver defensively, further exposing their decks. By the end of the day, all four Japanese carriers involved in the operation were either sunk or severely damaged, a loss that crippled Japan’s offensive naval capability for months to come.`,
    `The battle’s aftermath cemented Midway as a <span class="vocab" data-cn="转折点">turning point</span> in World War II. Not only had the United States halted Japanese expansion, but it also seized the strategic initiative, allowing Allied forces to transition from defensive actions to island‑hopping offensives across the Central Pacific. Moreover, the victory validated the importance of signals intelligence and carrier doctrine, shaping future naval engagements such as the Battle of the Philippine Sea in 1944.`,
    `Historians continue to debate whether Midway would have been won without codebreaking or carrier superiority, but most agree that the convergence of accurate <span class="vocab" data-cn="情报">intelligence</span>, bold leadership, and innovative air tactics created a perfect storm. The lesson endures: in modern warfare, information can be as decisive as firepower, and flexibility in strategy often determines who writes history.`,
  ],
  vocabulary: [
    { word: 'codebreaking', cn: '密码破译' },
    { word: 'intelligence', cn: '情报' },
    { word: 'carrier', cn: '航空母舰' },
    { word: 'dive bomber', cn: '俯冲轰炸机' },
    { word: 'torpedo bomber', cn: '鱼雷轰炸机' },
    { word: 'turning point', cn: '转折点' },
  ],
};

export default article;
