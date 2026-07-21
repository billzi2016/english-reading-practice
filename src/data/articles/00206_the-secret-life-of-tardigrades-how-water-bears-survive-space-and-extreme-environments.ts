import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Secret Life of Tardigrades: How Water Bears Survive Space and Extreme Environments》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00206 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00206',
  slug: 'the-secret-life-of-tardigrades-how-water-bears-survive-space-and-extreme-environments',
  title: 'The Secret Life of Tardigrades: How Water Bears Survive Space and Extreme Environments',
  subtitle: 'Exploring the biology that lets microscopic animals endure the vacuum of space.',
  summary: 'A deep dive into tardigrade survival tricks, from cryptobiosis to DNA‑protecting proteins.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When most people think of “extremes,” they picture volcanoes or arctic blizzards. Few imagine that a creature no larger than a grain of sand can endure both. The <span class="vocab" data-cn="水熊虫">tardigrade</span>, affectionately called the water bear, has fascinated biologists since its discovery in 1773 because it can survive conditions that would instantly kill most life forms.`,
    `The secret lies in a reversible state known as <span class="vocab" data-cn="隐形休眠状态">cryptobiosis</span>. When faced with dehydration, freezing, or lack of oxygen, tardigrades expel almost all water from their cells and curl into a desiccated “tun.” In this tun, metabolic activity drops to less than one‑millionth of normal levels, essentially putting the animal on pause until favorable conditions return.`,
    `One particular form of cryptobiosis is <span class="vocab" data-cn="无水休眠">anhydrobiosis</span>. During anhydrobiosis, tardigrades replace lost water with a sugar called <span class="vocab" data-cn="海藻糖">trehalose</span>, which forms a glass‑like matrix around cellular structures. This vitrification prevents membranes from collapsing and stabilizes proteins, allowing the animal to survive for years without moisture.`,
    `Radiation is another lethal threat that tardigrades meet with surprising resilience. Experiments have shown they can withstand doses of ionizing radiation up to 5,000 Gy—hundreds of times the lethal dose for humans. Researchers attribute part of this tolerance to a unique protein dubbed <span class="vocab" data-cn="DNA保护蛋白">Dsup</span> (damage‑suppression). Dsup binds directly to chromatin and shields DNA from breakage, while an efficient DNA repair system quickly mends any damage that does occur.`,
    `The ultimate test of their durability came beyond Earth’s atmosphere. In 2007, the European Space Agency launched the <span class="vocab" data-cn="FOTON‑M3卫星">FOTON‑M3</span> mission, exposing tardigrades to open space for ten days. The tiny animals endured vacuum, extreme temperature swings, and intense solar radiation, only to revive fully after rehydration back on the ground—a real‑world demonstration of their extremophile status.`,
    `Beyond space, tardigrades thrive in environments ranging from deep‑sea hydrothermal vents (over 300 °C) to Antarctic ice shelves (below –200 °C). Their ability to enter cryptobiosis allows them to survive pressures up to 1.2 GPa and desiccation for decades. Some species even produce antifreeze proteins that inhibit ice crystal growth, further expanding the temperature envelope they can inhabit.`,
    `Understanding how tardigrades achieve such robustness has practical implications. Scientists are exploring Dsup‑based gene therapies to protect human cells from radiation during cancer treatment or long‑duration spaceflight. Meanwhile, trehalose and vitrification techniques inspire new methods for preserving vaccines and biological samples without refrigeration. In this way, the humble water bear continues to teach us how life can persist against the odds.`,
  ],
  vocabulary: [
    { word: 'tardigrade', cn: '水熊虫' },
    { word: 'cryptobiosis', cn: '隐形休眠状态' },
    { word: 'anhydrobiosis', cn: '无水休眠' },
    { word: 'trehalose', cn: '海藻糖' },
    { word: 'Dsup', cn: 'DNA保护蛋白' },
    { word: 'extremophile', cn: '极端嗜好者' },
    { word: 'vitrification', cn: '玻璃化' },
    { word: 'FOTON‑M3', cn: 'FOTON‑M3卫星' },
  ],
};

export default article;
