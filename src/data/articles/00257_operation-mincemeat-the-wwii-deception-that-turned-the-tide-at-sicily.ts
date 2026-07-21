import type { Article } from '../../types/index.ts';

// 文件意图：维护《Operation Mincemeat: The WWII Deception That Turned the Tide at Sicily》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00257 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00257',
  slug: 'operation-mincemeat-the-wwii-deception-that-turned-the-tide-at-sicily',
  title: 'Operation Mincemeat: The WWII Deception That Turned the Tide at Sicily',
  subtitle: 'How a fabricated corpse fooled the Axis and paved the way for Allied success.',
  summary: 'A true‑story of the daring British ruse that misled German planners during the 1943 Sicilian campaign.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In early 1943, the Allies faced a daunting problem: how to convince the Germans that the upcoming invasion would strike Greece and Sardinia instead of Sicily. The answer came from an unlikely source—a dead homeless man, a briefcase full of fake documents, and a meticulously crafted identity. This plan was christened <span class="vocab" data-cn="欺骗行动">Operation Mincemeat</span> and became one of the most audacious examples of wartime deception.`,
    `The mastermind behind the scheme was Lieutenant Colonel Charles Cholmondeley of the British <span class="vocab" data-cn="双重间谍系统">Double‑Cross System</span>, which coordinated turned German agents to feed false information. Working with the Royal Navy’s intelligence branch, Cholmondeley's team selected a body that could plausibly be a Royal Marine officer killed in action. They dressed him in a uniform, added personal effects like love letters and theater tickets, and placed a briefcase containing forged <span class="vocab" data-cn="情报文件">intelligence</span> reports on Mediterranean troop movements.`,
    `The crucial step was to ensure the corpse would be discovered by German eyes. The team chose a remote stretch of the Spanish coast near Huelva, a region known for its pro‑German sympathizers and active <span class="vocab" data-cn="情报机构">British Security Service (MI5)</span> networks. Under cover of night, they released the body from a submarine, hoping that local fishermen would retrieve it and pass it up the chain to German officials.`,
    `When Spanish authorities turned the body over to the Germans on April 30, 1943, the deception worked exactly as intended. The briefcase’s contents suggested that the Allies were planning an invasion of Greece and Sardinia, with Sicily merely a diversion. German High Command, already wary of Allied intentions, accepted the forged documents without suspicion, redirecting troops and air assets away from the Sicilian coast.` ,
    `The success of <span class="vocab" data-cn="伪装">camouflage</span> in Operation Mincemeat was not accidental. Every detail—from the type of cigarettes in the officer’s pocket to the ink used on the letters—was chosen to match authentic British military habits. Even the weathered appearance of the documents was simulated using a technique called “aging,” which involved exposing paper to sunlight and humidity for weeks before the operation.` ,
    `When the Allied forces finally landed on Sicily on July 9, 1943, they encountered far lighter resistance than expected. German divisions that might have bolstered the island’s defenses were still stationed in Greece or preparing for a fictitious Sardinian assault. Historians estimate that the deception saved thousands of lives and accelerated the collapse of Axis power in Italy.` ,
    `Operation Mincemeat also left a lasting legacy in the field of <span class="vocab" data-cn="反情报">counterintelligence</span>. It demonstrated how carefully crafted false narratives could shape enemy decision‑making, a principle later applied during the Cold War and even modern cyber‑warfare. The operation’s blend of theatricality, forensic detail, and strategic timing remains a case study in military academies worldwide.` ,
    `Today, the story of the “Man Who Never Was” continues to inspire books, films, and museum exhibits. It reminds us that wars are not won solely by firepower; sometimes a single <span class="vocab" data-cn="伪造文件">forgery</span> can turn the tide of history.` ,
  ],
  vocabulary: [
    { word: 'Operation Mincemeat', cn: '代号“肉饼行动”，二战期间的欺骗计划' },
    { word: 'Double‑Cross System', cn: '双重间谍系统，英国利用被俘德军特工进行反情报工作' },
    { word: 'intelligence', cn: '情报，指军事或政治方面的重要信息' },
    { word: 'British Security Service (MI5)', cn: '英国安全局（国内情报机构）' },
    { word: 'camouflage', cn: '伪装，用于隐藏真实意图的手段' },
    { word: 'counterintelligence', cn: '反情报，防止敌方获取信息的行动' },
    { word: 'forgery', cn: '伪造文件或物品' },
  ],
};

export default article;
