import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Irish Great Famine (1845‑1852): A Humanitarian Disaster That Redrew Demographics and Sparked Emigration》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00289 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00289',
  slug: 'the-irish-great-famine-1845-1852-a-humanitarian-disaster-that-redrew-demographics-and-sparked-emigration',
  title: 'The Irish Great Famine (1845‑1852): A Humanitarian Disaster That Redrew Demographics and Sparked Emigration',
  subtitle: 'How a crop disease reshaped an island and its people',
  summary: 'An engaging narrative of the famine’s causes, policies, death toll, and the massive wave of emigration that followed.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early summer of 1845, a modest cottage in County Clare was filled with the scent of boiled potatoes, the staple food for the local <span class="vocab" data-cn="佃农">tenant farmer</span> family. As they gathered around the fire, an unsettling grayish‑white mold began to appear on the tubers. The sight turned hopeful anticipation into dread; within weeks the entire harvest was ruined, leaving a household that barely survived on one meal a day.`,
    `Scientists later identified the culprit as <span class="vocab" data-cn="疫霉属的致病真菌">Phytophthora infestans</span>, a water‑borne fungus that thrives in cool, damp conditions. The pathogen spread rapidly from field to field, carried by wind and contaminated equipment, decimating potato crops across the island. Because the Irish diet relied on potatoes for up to 80% of caloric intake, the blight’s impact was immediate and catastrophic.`,
    `The British administration governing Ireland at the time responded with a mixture of laissez‑faire economics and limited relief. While the repeal of the <span class="vocab" data-cn="谷物法案">Corn Laws</span> in 1846 lowered grain prices, it also reduced incentives for domestic grain production. Relief efforts included soup kitchens and public works, but many were forced into the grim confines of a <span class="vocab" data-cn="济贫院">workhouse</span>, where families could be separated and subjected to harsh discipline in exchange for shelter and food.`,
    `The human cost was staggering. Contemporary estimates suggest that about one million people perished from starvation and disease, while another million emigrated. Ireland’s population fell from roughly eight million before the famine to just over six million by 1855, a decline of more than 25%. The demographic shock disproportionately affected the young and the poor, reshaping the age structure for generations.`,
    `Emigration became both a survival strategy and a forced exile. From bustling ports such as Cobh—then known as Queenstown—crowded ships set sail across the Atlantic. Conditions aboard these vessels were often cramped and unsanitary; passengers endured weeks at sea with limited provisions, earning the moniker “coffin ships.” Yet for many, the promise of work in American cities or Canadian farms outweighed the perils of the journey.`,
    `Those who survived the voyage formed a vibrant <span class="vocab" data-cn="散居海外的群体">diaspora</span>, sending back <span class="vocab" data-cn="汇款">remittances</span> that helped sustain relatives left behind. Irish communities blossomed in places like New York’s Five Points and Toronto’s Corktown, preserving language, music, and religious traditions while also influencing local politics and labor movements.`,
    `The legacy of the Great Famine endures in modern Ireland. Annual commemorations, such as the National Famine Memorial in County Mayo, remind citizens of the tragedy’s scale. Scholars continue to debate policy failures and resilience, while descendants of famine emigrants trace their roots back to the very fields that once fed a nation. The story remains a powerful reminder of how environmental disaster, political response, and human agency intertwine to reshape societies.`,
  ],
  vocabulary: [
    { word: 'tenant farmer', cn: '佃农' },
    { word: 'Phytophthora infestans', cn: '疫霉属的致病真菌' },
    { word: 'Corn Laws', cn: '谷物法案' },
    { word: 'workhouse', cn: '济贫院' },
    { word: 'diaspora', cn: '散居海外的群体' },
    { word: 'remittances', cn: '汇款' },
  ],
};

export default article;
