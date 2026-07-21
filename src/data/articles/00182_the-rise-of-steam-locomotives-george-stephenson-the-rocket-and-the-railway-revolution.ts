import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise of Steam Locomotives》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00182 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00182',
  slug: 'the-rise-of-steam-locomotives-george-stephenson-the-rocket-and-the-railway-revolution',
  title: 'The Rise of Steam Locomotives',
  subtitle: 'How George Stephenson and The Rocket reshaped transportation',
  summary: 'An engaging look at the birth of steam locomotion, its key inventions, and the railway boom that powered the Industrial Revolution.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early nineteenth century, Britain was a patchwork of canals, turnpike roads, and horse‑drawn wagons. The idea of moving heavy loads over long distances without relying on animal power seemed almost fantastical. Yet a modest carpenter‑turned‑engineer named <span class="vocab" data-cn="乔治·斯蒂芬森">George Stephenson</span> believed that steam could provide the answer, provided he could design a reliable and safe <span class="vocab" data-cn="机车">locomotive</span>.`,
    `Stephenson’s first breakthrough came with his 1814 locomotive “Blücher”, which demonstrated that a steam‑driven engine could pull several wagons on a short track. The key was a robust <span class="vocab" data-cn="锅炉">boiler</span> capable of generating enough pressure without exploding, and a well‑shaped <span class="vocab" data-cn="燃烧室">firebox</span> that could sustain a steady flame using coal. These technical lessons paved the way for larger machines.`,
    `In 1825, Stephenson was commissioned to build the Stockton‑Darlington Railway, the world’s first public railway to use steam locomotives for regular passenger service. The line employed his locomotive “Locomotion No. 1”, which famously hauled a train of coal wagons and passengers over 25 miles. This success proved that rail transport could be both economical and reliable, sparking interest from investors across Europe and North America.`,
    `The true watershed moment arrived in 1829 with the Rainhill Trials, a competition organized by the Liverpool & Manchester Railway to select the best locomotive for their new line. Stephenson entered his most advanced design yet: <span class="vocab" data-cn="火箭号">The Rocket</span>. Featuring a multi‑tube boiler, a separate blast pipe, and a distinctive cylindrical smokebox, The Rocket could reach speeds of up to 30 mph—unheard of for a steam engine at the time.`,
    `When The Rocket thundered down the trial track, it not only won the competition but also set new standards for future locomotive engineering. Its innovative <span class="vocab" data-cn="多管锅炉">multi‑tube boiler</span> dramatically increased heat exchange efficiency, while the blast pipe created a stronger draft that fed more air to the firebox. These features became hallmarks of railway technology for decades to come.`,
    `The triumph of The Rocket ignited what historians call the “railway revolution”. Within ten years, Britain saw thousands of miles of track laid, linking industrial centers such as Manchester, Birmingham, and Leeds. This network facilitated rapid movement of <span class="vocab" data-cn="煤炭">coal</span>, iron, and finished goods, dramatically lowering transport costs and accelerating the pace of <span class="vocab" data-cn="工业化">industrialization</span>. Towns that were once isolated blossomed into bustling hubs.`,
    `Beyond Britain, Stephenson’s designs inspired engineers worldwide. In the United States, the Baltimore & Ohio Railroad adopted similar locomotive principles, while in continental Europe, engineers like Robert Stephenson (George’s son) exported British technology to France and Germany. The standardization of track <span class="vocab" data-cn="轨距">gauge</span>—the distance between rails—also emerged from these early collaborations, ensuring that locomotives could travel across borders without costly modifications. The legacy of George Stephenson and The Rocket thus endures in every modern railway system today.`,
  ],
  vocabulary: [
    { word: 'George Stephenson', cn: '乔治·斯蒂芬森' },
    { word: 'locomotive', cn: '机车' },
    { word: 'boiler', cn: '锅炉' },
    { word: 'firebox', cn: '燃烧室' },
    { word: 'The Rocket', cn: '火箭号' },
    { word: 'multi‑tube boiler', cn: '多管锅炉' },
    { word: 'coal', cn: '煤炭' },
    { word: 'industrialization', cn: '工业化' },
    { word: 'gauge', cn: '轨距' },
  ],
};

export default article;
