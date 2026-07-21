import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Battle of Stalingrad: Urban Warfare, Civilian Resolve, and the Turning Point of World War II》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00484 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00484',
  slug: 'the-battle-of-stalingrad-urban-warfare-civilian-resolve-and-the-turning-point-of-world-war-ii',
  title: 'The Battle of Stalingrad: Urban Warfare, Civilian Resolve, and the Turning Point of World War II',
  subtitle: 'How a frozen city became the crucible that changed the war',
  summary: 'An in‑depth look at the brutal urban fighting, civilian endurance, and strategic consequences of the Battle of Stalingrad.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In August 1942, the German <span class="vocab" data-cn="德意志国防军">Wehrmacht</span> launched a massive offensive toward the Volga River, aiming to seize the industrial hub of Stalingrad. The city’s name, bestowed by Joseph Stalin, turned it into a symbolic prize for both sides. As the first Soviet aircraft bombed the German columns, the battle shifted from open steppe to the cramped streets and shattered apartment blocks that would soon become a nightmarish arena of <span class="vocab" data-cn="城市战争">urban warfare</span>.`,
    `The fighting quickly devolved into house‑to‑house combat where every ruined building became a potential fortress. Soviet defenders turned stairwells into sniper nests, while German troops learned to clear rooms one at a time under the constant threat of close‑range fire. The rubble created a maze that nullified the Wehrmacht’s superior artillery and armor, forcing both sides to rely on infantry assaults, grenades, and the dreaded <span class="vocab" data-cn="狙击手">snipers</span> who could pick off officers from concealed windows.`,
    `Amidst the devastation, the civilian population displayed a remarkable degree of resolve. With food supplies dwindling, Stalingrad’s residents organized clandestine bakeries and shared rations in underground shelters. Many men, women, and even teenagers volunteered for militia units, bolstering the <span class="vocab" data-cn="红军">Red Army</span>’s numbers. Factories that once produced tractors were swiftly converted to weapon workshops, churning out rifles and ammunition while the city burned around them. This collective effort turned ordinary citizens into a de‑facto extension of the military front line.`,
    `Strategically, the battle hinged on the Soviet counteroffensive known as <span class="vocab" data-cn="乌兰行动">Operation Uranus</span>. Launched in November 1942, it targeted the weaker Romanian and Hungarian forces protecting the German flanks. Within days, Soviet mechanized units broke through, encircling roughly 300,000 Axis soldiers inside a tightening <span class="vocab" data-cn="包围圈">encirclement</span>. Cut off from supplies and winter weather raging outside, the trapped Wehrmacht divisions faced starvation, disease, and relentless Soviet attacks.`,
    `The eventual surrender of the German Sixth Army in early February 1943 marked a decisive turning point in World War II. It was the first major defeat of Hitler’s forces on the Eastern Front and shattered the myth of invincibility that had surrounded the Wehrmacht. The loss forced Germany onto the defensive for the remainder of the war, while the Soviet Union seized the strategic initiative, pushing westward toward Berlin in the years that followed.`,
    `The human cost was staggering: estimates place civilian deaths at over 1 million and military casualties on both sides exceeding 2 million. The city itself lay in ruins, its once‑vibrant riverbanks reduced to a wasteland of burnt timber and twisted steel. In the post‑war years, Stalin ordered an ambitious reconstruction program that not only rebuilt Stalingrad’s infrastructure but also renamed it Volgograd in 1961, symbolizing both remembrance and renewal.`,
    `Today, historians study the Battle of Stalingrad as a case study in how terrain, morale, and logistics can overturn even the most powerful armies. The lessons of relentless urban combat, civilian participation, and the perils of overextended supply lines continue to inform modern military doctrine. Moreover, the story stands as a testament to human endurance under the most extreme conditions, reminding us that cities are not just strategic assets but also communities capable of extraordinary sacrifice.`,
  ],
  vocabulary: [
    { word: 'Wehrmacht', cn: '德意志国防军' },
    { word: 'urban warfare', cn: '城市战争' },
    { word: 'Red Army', cn: '红军' },
    { word: 'Operation Uranus', cn: '乌兰行动' },
    { word: 'encirclement', cn: '包围圈' },
    { word: 'snipers', cn: '狙击手' },
  ],
};

export default article;
