import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1915 Sinking of the RMS Lusitania: How a Torpedoed Liner Shifted Global Politics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00157 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00157',
  slug: 'the-1912-sinking-of-the-rms-lusitania-how-a-torpedoed-liner-shifted-global-politics',
  title: 'The 1915 Sinking of the RMS Lusitania: How a Torpedoed Liner Shifted Global Politics',
  subtitle: 'A pivotal maritime tragedy that reshaped public opinion and diplomatic strategy during World War I.',
  summary: 'Explore how the sinking of the Lusitania altered international relations, propaganda, and the course of the war.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On a bright morning in May 1915, the British ocean <span class="vocab" data-cn="客轮">liner</span> RMS Lusitania set sail from New York bound for Liverpool. Carrying over 1,900 passengers and crew, many of whom were American tourists, the ship represented the height of early‑20th‑century luxury travel. Yet beneath its polished decks lay a cargo hold filled with war materiel—ammunition destined for the United Kingdom—a fact that would later become a focal point in diplomatic debates.`,
    `At 2:10 p.m., while navigating the waters off the Irish coast, the Lusitania was struck by a single <span class="vocab" data-cn="鱼雷">torpedo</span> fired from German U‑boat U‑20. The explosion ripped through the starboard side, igniting the munitions and causing a second blast that sent the ship sinking in just 18 minutes. Of the nearly 2,000 souls aboard, 1,198 perished, including 128 Americans, an outcome that shocked the world and intensified anti‑German sentiment.`,

    `The German government defended its action by invoking the principle of <span class="vocab" data-cn="中立">neutrality</span>. They argued that the Lusitania was a legitimate target because it carried contraband destined for Britain, a belligerent nation. However, the British Admiralty had previously warned all passenger vessels to avoid the declared war zone, and many passengers were unaware of the hidden cargo. This clash between legal justification and moral outrage set the stage for an international propaganda battle.`,

    `In the United States, newspapers seized upon the tragedy, publishing vivid accounts of families torn apart and graphic descriptions of the ship’s fiery demise. The American press employed a style of <span class="vocab" data-cn="宣传">propaganda</span> that emphasized German cruelty while downplaying any British responsibility for placing munitions aboard a civilian vessel. President Woodrow Wilson, who had campaigned on keeping America out of the war, faced mounting pressure from both the public and Congress to respond more forcefully.`,

    `Diplomatically, the incident forced Britain and Germany into a tense exchange of notes. The British demanded an apology and reparations, while Germany issued a terse statement claiming “the Lusitania was a legitimate target.” Behind the scenes, secret negotiations began, with the United States acting as a mediator. Although Germany eventually offered a limited settlement, the damage to its international reputation was irreversible.`,

    `The sinking also had strategic implications for naval warfare. The event highlighted the lethal effectiveness of unrestricted <span class="vocab" data-cn="潜艇战">submarine</span> tactics and prompted both sides to reconsider their maritime policies. Britain intensified its convoy system, while Germany faced growing criticism that its submarine campaign violated established rules of engagement, especially regarding civilian lives.`,

    `Ultimately, the Lusitania tragedy contributed to a shift in American public opinion that paved the way for the United States’ entry into World War I two years later. While the war would not begin solely because of this single event, the sinking served as a catalyst that transformed abstract geopolitical calculations into personal, emotional stakes for millions. The legacy of the Lusitania endures as a reminder of how technology, law, and media can converge to reshape global politics in moments of crisis.`,
  ],
  vocabulary: [
    { word: 'liner', cn: '客轮' },
    { word: 'torpedo', cn: '鱼雷' },
    { word: 'neutrality', cn: '中立' },
    { word: 'propaganda', cn: '宣传' },
    { word: 'submarine warfare', cn: '潜艇战' },
    { word: 'convoy system', cn: '护航编队制度' },
  ],
};

export default article;
