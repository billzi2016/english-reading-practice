import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Bismarck's Demise: How Codebreaking, Air Power, and Naval Strategy Sank Germany’s Mightiest Battleship》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00403 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00403',
  slug: 'the-bismarck-s-demise-how-codebreaking-air-power-and-naval-strategy-sank-germany-s-mightiest-battleship',
  title: "The Bismarck's Demise: How Codebreaking, Air Power, and Naval Strategy Sank Germany’s Mightiest Battleship",
  subtitle: 'A dramatic tale of intelligence, aviation, and naval tactics in the Atlantic.',
  summary: 'Explore how Allied codebreakers, carrier aircraft, and strategic decisions led to the sinking of the German battleship Bismarck.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In May 1941, the Kriegsmarine launched <span class="vocab" data-cn="德国海军的战列舰">Bismarck</span> on a daring sortie known as <span class="vocab" data-cn="“莱茵乌本行动”">Operation Rheinübung</span>. The goal was simple yet audacious: break into the Atlantic, disrupt Allied convoys, and force Britain to negotiate. With her 15‑inch guns and thick armor, Bismarck represented the pinnacle of German naval engineering, but she also carried a heavy burden—she had to evade the ever‑watchful eyes of British intelligence.</span>`,
    `British success in <span class="vocab" data-cn="密码破译">codebreaking</span> proved decisive from the outset. By intercepting and deciphering German naval communications encrypted with the <span class="vocab" data-cn="恩尼格玛密码机">Enigma</span> machine, the Admiralty’s Ultra team could predict Bismarck’s route. This intelligence allowed the Royal Navy to position its forces ahead of the battleship, turning a vast ocean into a carefully laid trap.</span>`,
    `The first clash came on 24 May when Bismarck encountered <span class="vocab" data-cn="英国战列舰胡德号">HMS Hood</span>. The British flagship, though older, engaged the German behemoth in a fierce duel. A single hit from Bismarck’s main battery ignited Hood’s ammunition magazines, causing a catastrophic explosion that sank the ship within minutes. The loss shocked Britain and intensified the hunt for its adversary.</span>`,
    `In response, Admiral Sir John Tovey ordered a relentless pursuit, employing both surface ships and aircraft. The Royal Navy’s carrier groups deployed <span class="vocab" data-cn="鱼雷轰炸机">torpedo bombers</span>, whose low‑level attacks could cripple even the most heavily armored vessels. On 26 May, Swordfish aircraft from HMS Ark Royal located Bismarck and scored a critical hit on her steering gear, rendering her unable to maneuver effectively.</span>`,
    `While the damaged Bismarck limped toward France, she was still within range of British <span class="vocab" data-cn="雷达">radar</span> stations. These installations tracked her movements in real time, allowing destroyers and cruisers to close the distance under cover of darkness. Simultaneously, Admiral Karl Dönitz’s U‑boat <span class="vocab" data-cn="狼群战术">Wolfpack</span> attempted to intercept, but the crippled battleship could no longer evade surface fire.</span>`,
    `The final engagement unfolded in the early hours of 27 May. British battleships King George V and Rodney closed within firing range, unleashing a barrage that penetrated Bismarck’s armor. Repeated hits caused flooding and loss of power, sealing her fate. After several hours of relentless shelling, the once‑formidable warship capsized and sank, taking most of her crew with her.</span>`,
    `The sinking of Bismarck demonstrated how intelligence, air power, and coordinated naval strategy could overcome even the most formidable capital ships. It underscored the importance of <span class="vocab" data-cn="密码破译情报">codebreaking</span> in modern warfare, highlighted the decisive role of carrier‑borne aircraft, and cemented a legacy that still informs naval doctrine today.</span>`
  ],
  vocabulary: [
    { word: 'Bismarck', cn: '德国战列舰' },
    { word: 'Operation Rheinübung', cn: '莱茵乌本行动' },
    { word: 'codebreaking', cn: '密码破译' },
    { word: 'Enigma', cn: '恩尼格玛密码机' },
    { word: 'HMS Hood', cn: '英国战列舰胡德号' },
    { word: 'torpedo bomber', cn: '鱼雷轰炸机' },
    { word: 'radar', cn: '雷达' },
    { word: 'Wolfpack', cn: '狼群战术' }
  ],
};

export default article;
