import type { Article } from '../../types/index.ts';

// 文件意图：维护《Battle of Midway: How Cryptanalysis and Carrier Aviation Turned the Tide in WWII》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00444 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00444',
  slug: 'battle-of-midway-how-cryptanalysis-and-carrier-aviation-turned-the-tide-in-wwii',
  title: 'Battle of Midway: How Cryptanalysis and Carrier Aviation Turned the Tide in WWII',
  subtitle: 'The hidden codebreakers and daring pilots that reshaped the Pacific war.',
  summary: 'A narrative of how U.S. signal intelligence cracked Japanese plans and carrier‑based aircraft delivered decisive blows at Midway.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In early June 1942, the tiny coral atoll of Midway lay half a world away from both Honolulu and Tokyo, yet its airfield was a linchpin for control of the central Pacific. The Japanese Imperial Navy believed that seizing Midway would force the United States to negotiate, while the U.S. Navy saw the island as a forward base capable of launching <span class="vocab" data-cn="航空母舰">aircraft carriers</span> into the heart of enemy waters. Both sides amassed fleets, but what tipped the balance was not sheer firepower—it was information.`,
    `Behind the scenes in Washington, a small team of cryptanalysts at the Navy’s OP‑20‑G unit had been laboring over intercepted Japanese naval traffic for months. Their breakthrough came when they finally cracked enough of the <span class="vocab" data-cn="日本海军代号系统 JN‑25">JN‑25</span> cipher to recognize a pattern: the Japanese repeatedly referenced a location coded as “AF.” By cross‑checking other messages, the analysts deduced that “AF” was Midway itself. This act of <span class="vocab" data-cn="密码分析">cryptanalysis</span> turned an opaque enemy plan into a readable timetable.`,
    `The codebreakers did not stop at identifying the target; they also extracted clues about timing and force composition. By noting that the Japanese fleet would depart from Kwajalein on June 4 and that the “AF” messages appeared in three separate bursts, the analysts inferred that the attack would be a coordinated strike involving four carriers. This intelligence was passed to Admiral Chester Nimitz, who faced a stark choice: disperse his limited forces or concentrate them for a decisive counter‑offensive. He chose the latter, trusting the decrypted data over conventional scouting reports.` ,
    `On the American side, three <span class="vocab" data-cn="航空母舰">aircraft carriers</span>—USS Enterprise (CV‑6), USS Hornet (CV‑8) and the hastily repaired USS Yorktown (CV‑5)—were positioned northeast of Midway. Their decks were loaded with a mix of <span class="vocab" data-cn="俯冲轰炸机">dive bombers</span> (SBD Dauntless) and <span class="vocab" data-cn="鱼雷轰炸机">torpedo bombers</span> (TBD Devastator). The Japanese, confident in their numerical superiority, fielded four carriers—Akagi, Kaga, Soryu and Hiryu—each bristling with Mitsubishi A6M Zero fighters. The stage was set for a clash where the speed of aircraft launch and recovery would matter more than the size of the hulls beneath them.` ,
    `When dawn broke on June 4, the Japanese launched their first wave, believing they had achieved surprise. However, U.S. radar operators aboard the carriers detected the incoming formation early enough to scramble fighters and position their <span class="vocab" data-cn="俯冲轰炸机">dive bombers</span> for a counter‑strike. At 10:05 a.m., three squadrons of SBDs descended from the sky in tight, steep dives, releasing bombs that struck Akagi and Kaga while their flight decks were crowded with rearming aircraft. The explosions ignited fuel stores, turning the carriers into infernos within minutes.` ,
    `The Japanese response was frantic. Their surviving planes launched a second wave of <span class="vocab" data-cn="鱼雷轰炸机">torpedo bombers</span> against the American fleet, but by then U.S. combat air patrols, guided by early radar cues, had thinned their numbers and forced many torpedoes to miss or detonate harmlessly in the sea. Meanwhile, Yorktown’s own SBD squadron located the trailing carrier Hiryu and delivered a decisive blow that crippled its flight deck. Within hours, three of Japan’s four carriers were either sunk or rendered combat‑ineffective.` ,
    `The aftermath of Midway reshaped the Pacific war. The loss of experienced pilots and irreplaceable carriers halted Japanese expansion and gave the United States strategic initiative. Historians credit this turning point not only to daring aviators but also to the quiet triumph of <span class="vocab" data-cn="情报破译">codebreaking</span> that turned secret messages into actionable intelligence. The battle demonstrated how <span class="vocab" data-cn="信号情报">signals intelligence</span> and carrier aviation could operate in concert, turning a seemingly impossible defensive posture into an offensive victory that altered the course of World War II.` ,
  ],
  vocabulary: [
    { word: 'cryptanalysis', cn: '密码分析' },
    { word: 'codebreaking', cn: '情报破译' },
    { word: 'JN‑25', cn: '日本海军代号系统 JN‑25' },
    { word: 'aircraft carrier', cn: '航空母舰' },
    { word: 'dive bomber', cn: '俯冲轰炸机' },
    { word: 'torpedo bomber', cn: '鱼雷轰炸机' },
    { word: 'signals intelligence', cn: '信号情报' },
    { word: 'radar', cn: '雷达' },
  ],
};

export default article;
