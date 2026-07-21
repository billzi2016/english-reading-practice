import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Battle of the Bismarck: How Codebreaking and Air Power Sank a German Battleship》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00167 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00167',
  slug: 'the-battle-of-the-bismarck-how-codebreaking-and-air-power-sank-a-german-battleship',
  title: 'The Battle of the Bismarck: How Codebreaking and Air Power Sank a German Battleship',
  subtitle: 'Intelligence, Radar, and Torpedo Bombers in a World War II Naval Duel',
  summary: 'A narrative of how British cryptanalysis and carrier‑based aircraft turned the tide against the mighty Bismarck.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the German <span class="vocab" data-cn="战列舰">battleship</span> Bismarck slipped out of port in May 1941, the Royal Navy faced a dilemma: chase a ship that could outrun most opponents and still pack a devastating broadside. The stakes were high—if Bismarck broke into the Atlantic convoy lanes, Allied supply lines would be crippled. Yet the British had an unseen ally lurking far behind the scenes, ready to turn raw speed into strategic advantage.`,
    `Bismarck was not just any warship; she embodied the pinnacle of <span class="vocab" data-cn="德国海军">Kriegsmarine</span> engineering. With eight 38‑cm guns and a top speed exceeding 30 knots, she could both outrun many pursuers and outgun them. Her designers believed that a single, powerful vessel could threaten the entire Atlantic theater, forcing the Allies to divert precious resources just to keep her in check.`,
    `The first piece of the puzzle fell into place at Bletchley Park, where British <span class="vocab" data-cn="密码分析">cryptanalysis</span> teams were laboring over intercepted German radio traffic. By cracking the infamous <span class="vocab" data-cn="恩尼格玛密码机">Enigma</span> machine, they produced a stream of intelligence known as <span class="vocab" data-cn="超密情报">Ultra</span>. Ultra messages revealed Bismarck’s intended route and her rendezvous with the cruiser Prinz Eugen, giving the Admiralty a precious window to position its forces.</`,
    `Armed with this knowledge, the Royal Navy deployed ships equipped with the newest <span class="vocab" data-cn="雷达">radar</span> sets. Radar allowed destroyers and cruisers to detect Bismarck’s silhouette even in poor visibility, narrowing the vast Atlantic into a series of illuminated waypoints. The combination of Ultra intel and radar tracking turned what could have been a blind chase into a coordinated hunt.`,
    `The decisive blow came from the skies. On 26 May, the aircraft carrier HMS Ark Royal launched a squadron of <span class="vocab" data-cn="剑鱼式俯冲轰炸机">Swordfish</span> <span class="vocab" data-cn="鱼雷轰炸机">torpedo bombers</span>. Though slow and seemingly obsolete, the Swordfish could fly low enough to avoid most anti‑aircraft fire. Their torpedoes struck Bismarck’s rudder compartment, jamming her steering gear and leaving her circling helplessly—a vulnerable target for the waiting British fleet.`,
    `With Bismarck crippled, battleships HMS King George V and HMS Rodney closed in, unleashing a torrent of 14‑inch shells. The German crew fought fiercely, but without maneuverability their defensive fire was ineffective. After hours of relentless bombardment, the once‑formidable battleship began to list and finally sank beneath the waves, taking over two thousand souls with her.`,
    `The loss of Bismarck reshaped naval strategy for the remainder of the war. It demonstrated that raw firepower alone could not guarantee victory; intelligence, electronic detection, and air power were equally decisive. The success of Ultra and carrier‑based <span class="vocab" data-cn="鱼雷轰炸机">torpedo bombers</span> underscored a new era where information and the third dimension of warfare became as lethal as any gun turret.`,
    `Today, historians view the Bismarck episode as a turning point that highlighted the synergy between cryptography, technology, and daring pilots. It reminds us that behind every historic clash lies a network of unseen forces—codebreakers in basements, engineers refining radar, and brave airmen soaring over the sea—all contributing to the final outcome.`,
  ],
  vocabulary: [
    { word: 'Enigma', cn: '恩尼格玛密码机' },
    { word: 'Ultra', cn: '超密情报' },
    { word: 'cryptanalysis', cn: '密码分析' },
    { word: 'Swordfish', cn: '剑鱼式俯冲轰炸机' },
    { word: 'torpedo bomber', cn: '鱼雷轰炸机' },
    { word: 'radar', cn: '雷达' },
    { word: 'Kriegsmarine', cn: '德国海军' },
    { word: 'battleship', cn: '战列舰' },
  ],
};

export default article;
