import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1915 Gallipoli Campaign: A Failed Invasion That Redefined Warfare》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00376 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00376',
  slug: 'the-1915-gallipoli-campaign-a-failed-invasion-that-redefined-warfare',
  title: 'The 1915 Gallipoli Campaign: A Failed Invasion That Redefined Warfare',
  subtitle: 'How a daring amphibious operation reshaped military thinking and national identities.',
  summary: 'An engaging narrative of the Gallipoli Campaign, its strategic aims, brutal realities, and lasting legacy.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When World War I erupted in 1914, the Entente powers faced a daunting logistical problem: how to keep supplies flowing to their beleaguered ally Russia. The most direct sea route passed through the narrow strait known as the <span class="vocab" data-cn="达达尼尔海峡">Dardanelles</span>, but Ottoman coastal defenses, reinforced by hidden <span class="vocab" data-cn="水雷阵">naval minefields</span> and artillery batteries, made a simple naval passage impossible. By early 1915 British planners believed that seizing the Gallipoli peninsula would neutralize those defenses, open the strait, and force the Ottoman Empire out of the war.`,
    `The operation was conceived as an <span class="vocab" data-cn="两栖攻击">amphibious assault</span> on a scale never attempted before. On 25 April 1915, troops from Britain, France, Australia, and New Zealand—collectively known as the ANZACs—landed at several beaches along the peninsula’s southern coast. The initial landings were chaotic: steep cliffs, concealed Turkish positions, and inadequate reconnaissance turned what had been a bold gamble into a nightmarish scramble for footholds. Within hours, soldiers found themselves entrenched in hastily dug <span class="vocab" data-cn="堑壕战">trench warfare</span>, a stark contrast to the mobile battles many had expected.`,
    `Logistical nightmares compounded the combat difficulties. Supplying thousands of men across hostile terrain required a fragile chain of ships, horse‑drawn wagons, and makeshift roads that were constantly under fire. The harsh summer heat, disease, and scarce fresh water eroded morale as quickly as enemy bullets. Meanwhile, Ottoman commander <span class="vocab" data-cn="穆斯塔法·凯末尔">Mustafa Kemal</span>—later Atatürk—organized fierce counter‑attacks that exploited the Allies’ disjointed positions, turning each advance into a costly stalemate.`,
    `By August, the campaign had settled into a grinding deadlock. Neither side could achieve decisive breakthroughs; artillery bombardments rattled the cliffs while both armies dug deeper, creating a maze of tunnels and shelters. The strategic goal of opening the Dardanelles remained out of reach, and the human cost mounted: over 250 000 casualties on each side, many of them from disease rather than combat. International observers began to label Gallipoli as a textbook example of a <span class="vocab" data-cn="战略僵局">strategic stalemate</span>, prompting military theorists to rethink the viability of large‑scale amphibious operations.`,
    `The decision to withdraw came after months of futile assaults and mounting political pressure at home. In December 1915, Allied commanders orchestrated a meticulously planned <span class="vocab" data-cn="撤退">evacuation</span> from the beaches, moving troops under cover of darkness and using deceptive measures such as silent fireworks to mask their movements. Remarkably, the withdrawal incurred far fewer casualties than the original landing—a testament to improved coordination but also a bitter acknowledgment of the campaign’s failure.`,
    `Gallipoli’s legacy extends far beyond its military outcomes. In Australia and New Zealand, the date of the initial landing—25 April—is commemorated as ANZAC Day, a solemn reminder of sacrifice and national identity. For Turkey, the successful defense became a cornerstone of modern nationalism, propelling Mustafa Kemal into the spotlight that eventually led him to found the Republic of Turkey in 1923. The campaign also forced the British Empire to reevaluate its <span class="vocab" data-cn="指挥官总司令">commander‑in‑chief</span> structures and invest heavily in specialized amphibious training, lessons that would shape later operations in World II.`,
    `In retrospect, Gallipoli illustrates how a single operation can reshape strategic thinking across continents. The failure highlighted the perils of underestimating terrain, local resistance, and logistical complexity, while also demonstrating that even disastrous campaigns can sow the seeds of future innovation. For students of history and military science alike, the 1915 Gallipoli Campaign remains a vivid case study of ambition, adversity, and the unexpected ways in which war reshapes societies.`,
  ],
  vocabulary: [
    { word: 'Dardanelles', cn: '达达尼尔海峡' },
    { word: 'naval minefield', cn: '水雷阵' },
    { word: 'amphibious assault', cn: '两栖攻击' },
    { word: 'trench warfare', cn: '堑壕战' },
    { word: 'strategic stalemate', cn: '战略僵局' },
    { word: 'evacuation', cn: '撤退' },
    { word: 'commander‑in‑chief', cn: '指挥官总司令' },
  ],
};

export default article;
