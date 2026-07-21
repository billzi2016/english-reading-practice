import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Game: How Imperial Rivalry Shaped Central Asian Maps》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00360 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00360',
  slug: 'the-great-game-how-imperial-rivalry-shaped-central-asian-maps',
  title: 'The Great Game: How Imperial Rivalry Shaped Central Asian Maps',
  subtitle: 'How 19th‑century power struggles redrew the heart of Asia.',
  summary: 'A narrative of how British and Russian competition turned maps into weapons of empire in Central Asia.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1869 a young British officer named Thomas Douglas Forsyth arrived at the remote oasis of Merv, his satchel filled with freshly printed sheets. He spread them on a sand‑covered table and traced the winding routes of caravans that linked Kashgar to Samarkand. To him those lines were more than geography; they were evidence of a secret contest known as the <span class="vocab" data-cn="大博弈">Great Game</span>, where two empires measured their power not only by troops but also by ink on paper.`,
    `The origins of the <span class="vocab" data-cn="地缘政治">geopolitics</span> that fueled this rivalry can be traced to Russia’s southward push after the Napoleonic Wars. By the 1840s Russian explorers were reaching the foothills of the Pamir, while Britain, still guarding its jewel—India—feared a Russian march toward the Indian Ocean. The two powers therefore adopted a policy of “watchful distance,” each sending diplomats and spies to the same khanates, hoping to win influence without provoking open war.`,
    `Cartographers became the unsung heroes of this covert conflict. Nikolai Przhevalsky’s daring expeditions across the Gobi Desert produced some of the first reliable topographic data for western Mongolia, while British surveyors such as Sir Henry Rawlinson painstakingly copied Persian manuscripts to improve their own <span class="vocab" data-cn="制图学">cartography</span>. Their maps were not neutral; they highlighted routes that favored one empire’s supply lines and downplayed those useful to the other, turning geography into a strategic weapon.`,
    `One of the most potent tools in this diplomatic arsenal was the creation of <span class="vocab" data-cn="缓冲国">buffer state</span>. Afghanistan, for example, was deliberately kept independent by both sides, serving as a cushion between British India and Russian Central Asia. Similarly, the Khanates of Khiva, Bukhara, and Kokand were treated as semi‑autonomous entities whose internal politics could be nudged through gifts, subsidies, or occasional military incursions, ensuring that neither empire could claim outright sovereignty without risking a larger confrontation.`,
    `The borders we see on modern maps often stem from specific treaties forged during the Game. The <span class="vocab" data-cn="阿哈尔条约">Treaty of Akhal</span> in 1881 between Persia and Russia is a case in point: it fixed the line along the Murghab River, granting Russia control over what would become Turkmenistan’s eastern desert region. This agreement was recorded on meticulously drawn sheets that were later reproduced for use by colonial administrators, solidifying a boundary that still exists today.`,
    `When the Russian Empire collapsed in 1917, its successor—the <span class="vocab" data-cn="苏联">Soviet Union</span>—inherited these contested frontiers. The Bolsheviks reorganized Central Asia into four Soviet republics: Kazakhstan, Uzbekistan, Turkmenistan, and Tajikistan. While they redrew some internal lines to reflect ethnic compositions, the external borders largely mirrored those set during the Great Game, demonstrating how imperial decisions can outlive the empires that created them.`,
    `Today, travelers crossing the steppes of Kazakhstan or the deserts of Turkmenistan may glance at a modern GPS map without realizing they are following routes first sketched by 19th‑century rivals. Original sheets from Forsyth’s expedition or Przhevalsky’s surveys fetch high prices at antique fairs, prized not only for their artistic detail but also as tangible reminders that maps can be both tools of knowledge and instruments of power.`,
  ],
  vocabulary: [
    { word: 'Great Game', cn: '大博弈' },
    { word: 'geopolitics', cn: '地缘政治' },
    { word: 'cartography', cn: '制图学' },
    { word: 'buffer state', cn: '缓冲国' },
    { word: 'Treaty of Akhal', cn: '阿哈尔条约' },
    { word: 'Soviet Union', cn: '苏联' },
  ],
};

export default article;
