import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Battle of the Bismarck: Codebreaking, Air Power, and a Naval Catastrophe》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00442 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00442',
  slug: 'the-battle-of-the-bismarck-codebreaking-air-power-and-a-naval-catastrophe',
  title: 'The Battle of the Bismarck: Codebreaking, Air Power, and a Naval Catastrophe',
  subtitle: 'How intelligence and aircraft tipped the scales in one of World War II’s most dramatic sea battles',
  summary: 'A narrative of the hunt for the German battleship Bismarck, highlighting cryptanalysis, carrier aviation, and strategic decisions.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In early May 1941, the German Kriegsmarine (海军) launched its newest capital ship, the <span class="vocab" data-cn="德国战列舰">Bismarck</span>, into the Atlantic. Designed to challenge British naval supremacy, Bismarck carried eight 38‑cm guns and a reputation for aggressive tactics. Within days of departing from the port of Kiel, she sank the British cruiser HMS Gloucester, sending shockwaves through London’s Admiralty and prompting an urgent response.`,
    `The Royal Navy’s reaction was not merely a matter of ships at sea; it hinged on a secret advantage: the British code‑breaking establishment at Bletchley Park. By intercepting German naval communications encrypted with the <span class="vocab" data-cn="德国的密码机">Enigma</span> machine, analysts could often reconstruct the positions of U‑boats and surface vessels. On 24 May, a breakthrough in deciphering the “München” key allowed British intelligence to pinpoint Bismarck’s approximate location near the Icelandic coast, giving Admiral Sir John Tovey the crucial lead time needed for a coordinated hunt.`,
    `While cryptanalysis supplied the map, air power provided the eyes and the decisive strike. The Royal Navy’s only carrier in the Atlantic theater at that moment was HMS Ark Royal, whose deck housed <span class="vocab" data-cn="舰载机">Fairey Swordfish</span> biplanes—slow, open‑cockpit torpedo bombers that seemed anachronistic against a modern battleship. Yet their low speed allowed them to fly under the Bismarck’s heavy anti‑aircraft fire and launch torpedoes from a shallow angle, exploiting a blind spot in the German ship’s defensive arc.`,
    `On 26 May, after a relentless chase involving several destroyers and cruisers, Ark Royal’s Swordfish located Bismarck steaming at full speed. The first wave of torpedoes missed, but a second attack succeeded: one torpedo struck Bismarck’s rudder compartment, jamming the steering gear. This damage forced the battleship into a circular course, making her a stationary target for the pursuing British fleet and exposing her to relentless gunfire from ships such as HMS King George V.`,
    `The loss of maneuverability also had a psychological impact on Bismarck’s crew. Captain Ernst Lindemann, who had previously demonstrated boldness in engaging enemy forces, now faced an impossible decision: attempt a breakout toward occupied France or surrender to the overwhelming British force. The German high command, fearing the capture of secret codes and technology, ordered the ship to fight to the last, a directive that sealed her fate.`,
    `By the early hours of 27 May, after sustained bombardment from multiple battleships and cruisers, Bismarck’s hull was riddled with shells. The final blow came when British destroyers launched a barrage of <span class="vocab" data-cn="深水炸弹">depth charges</span> that detonated near the ship’s magazines, causing catastrophic explosions. Within minutes, the once‑formidable battleship listed heavily and sank, taking over 2,000 sailors with her. The loss was a strategic victory for Britain but also a stark reminder of how intelligence, air power, and decisive leadership could converge to produce a naval catastrophe.`,
    `In the aftermath, the Royal Navy conducted extensive inquiries into the battle’s conduct. Historians have debated whether the British should have attempted to rescue more survivors or focused solely on eliminating the threat. Meanwhile, Bletchley Park’s success in breaking Enigma reinforced the value of signals intelligence throughout the war, leading to further investments in cryptanalysis that would later aid operations such as D‑Day and the Battle of the Atlantic.`,
    `The story of the Bismarck remains a compelling case study for military scholars. It illustrates how technological innovation—whether in codebreaking machines like the British <span class="vocab" data-cn="密码破译机">Bombe</span> or in seemingly outdated aircraft—can tip the balance in high‑stakes engagements. Moreover, it underscores the importance of integrating intelligence with operational planning, a lesson that continues to shape modern naval doctrine.`,
  ],
  vocabulary: [
    { word: 'Bismarck', cn: '德国战列舰' },
    { word: 'Enigma', cn: '德国的密码机' },
    { word: 'Fairey Swordfish', cn: '舰载机' },
    { word: 'depth charges', cn: '深水炸弹' },
    { word: 'Bombe', cn: '密码破译机' },
    { word: 'Kriegsmarine', cn: '德国海军' },
  ],
};

export default article;
