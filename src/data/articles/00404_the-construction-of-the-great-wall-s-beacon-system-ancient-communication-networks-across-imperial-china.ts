import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Construction of the Great Wall’s Beacon System: Ancient Communication Networks Across Imperial China》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00404 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00404',
  slug: 'the-construction-of-the-great-wall-s-beacon-system-ancient-communication-networks-across-imperial-china',
  title: 'The Construction of the Great Wall’s Beacon System: Ancient Communication Networks Across Imperial China',
  subtitle: 'How fire and smoke turned a stone wall into an early warning network.',
  summary: 'Explore the engineering, logistics, and strategic thinking behind the beacon towers that linked the Great Wall.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When Emperor Qin Shi Huang first ordered the linking of his newly‑connected wall sections in the third century BCE, he imagined more than a static barrier. He wanted a rapid way to alert distant garrisons of an approaching enemy. The solution was a series of <span class="vocab" data-cn="烽火台">beacon towers</span>—simple wooden platforms perched on hilltops that could transmit messages across hundreds of kilometres in minutes.`,
    `Each tower was built according to a strict set of specifications recorded in the ancient military manual *Suǒ Bù Jì*. The platform’s height, usually between ten and fifteen metres, ensured an unobstructed line of sight to its neighbours. Builders used locally sourced timber and stone, but they also reinforced the base with <span class="vocab" data-cn="夯土">rammed earth</span> to resist wind and rain. The careful placement of towers took advantage of natural <span class="vocab" data-cn="地形">topography</span>, often on ridgelines that overlooked valleys and passes.`,
    `The communication method itself was elegantly simple: at night, a fire would be lit; during the day, smoke signals were produced by covering the flames with wet blankets to create thick plumes. The intensity of the fire—single, double, or triple—encoded different levels of threat, while the number of smoke puffs could convey additional details such as the size of the invading force. This binary system resembled an early form of <span class="vocab" data-cn="光学电报">optical telegraph</span>, predating European inventions by more than a millennium.`,
    `Logistics were a constant challenge. Supplying each tower with fuel required a network of <span class="vocab" data-cn="军营">military garrisons</span> and civilian laborers who stored bundles of pine wood, charcoal, and oil in underground chambers. During the Ming dynasty (1368‑1644), the state instituted a rotating duty roster: soldiers from nearby forts would march to a tower every three days to replenish its stores and perform maintenance. This routine not only kept the system functional but also fostered a sense of shared responsibility among frontier communities.`,
    `One famous episode illustrates the beacon system’s speed. In 1449, when the Oirat Mongols launched a surprise raid into the northern provinces, a single tower at Shanhaiguan ignited its fire. Within an hour, the signal had traveled over 600 km to the capital, prompting Emperor Zhengtong to dispatch reinforcements. Contemporary chronicles describe how the “flames of warning” (烽火) turned what could have been a devastating incursion into a coordinated defense.`,
    `Over time, the towers evolved. During the early Qing period, some were equipped with small bronze bells and drums that could be heard in foggy conditions when visual signals failed. Engineers also experimented with reflective panels to amplify sunlight during winter months, ensuring that even on the shortest days the network remained operational. These adaptations show a continuous process of innovation driven by the harsh realities of frontier warfare.`,
    `Today, many remnants of the beacon towers dot the Great Wall’s path, offering tourists a glimpse into this ancient communication marvel. Archaeologists use LiDAR scanning to map their exact positions, confirming that the spacing—typically 5‑10 km apart—was calculated to match the average line‑of‑sight distance for a clear night sky. The beacon system stands as a testament to how ingenuity and disciplined organization can turn stone and fire into an empire‑wide early warning network.`,
  ],
  vocabulary: [
    { word: 'beacon tower', cn: '烽火台' },
    { word: 'rammed earth', cn: '夯土' },
    { word: 'topography', cn: '地形' },
    { word: 'optical telegraph', cn: '光学电报' },
    { word: 'military garrison', cn: '军营' },
    { word: 'signal fire', cn: '烽火信号' },
  ],
};

export default article;
