import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Race to Build the First Transatlantic Telegraph Cable》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00073 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00073',
  slug: 'the-race-to-build-the-first-transatlantic-telegraph-cable-engineering-feats-and-corporate-rivalries',
  title: 'The Race to Build the First Transatlantic Telegraph Cable',
  subtitle: 'Engineering Feats and Corporate Rivalries in the Mid‑19th Century',
  summary: 'A narrative of how engineers, financiers, and nations vied to connect continents with a single wire under the ocean.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1850s, the idea of sending a <span class="vocab" data-cn="跨大西洋的">transatlantic</span> message in minutes rather than weeks seemed like science fiction. The United States and Britain each possessed extensive land‑based telegraph networks, but the Atlantic Ocean remained an insurmountable barrier. Visionary entrepreneur Cyrus West Field gathered a group of American investors and formed the Atlantic Telegraph Company, hoping to turn the ocean into a conduit for instant communication.`,
    `The first technical hurdle was finding a material that could survive the crushing pressure and salty water at depths exceeding 3,000 meters. Engineers settled on <span class="vocab" data-cn="一种天然树脂，常用于电缆绝缘">gutta‑percha</span>, a latex‑like substance harvested from Southeast Asian trees. When heated, gutta‑percha became pliable enough to coat copper conductors, creating an effective <span class="vocab" data-cn="防止电流泄漏的材料层">insulation</span> that resisted water ingress for years.`,
    `Field’s initial expedition in 1857 used the sailing ship USS Niagara to lay a cable from Newfoundland to Ireland. The vessel succeeded in laying several hundred meters, but a sudden storm snapped the line and the venture collapsed under financial pressure. Undeterred, Field recruited British financiers such as Sir John Pender and secured backing from the British government, turning the project into an international partnership fraught with competing interests.`,
    `The next breakthrough came with the construction of the ironclad steamship <span class="vocab" data-cn="当时最大的船只，用于铺设海底电缆">Great Eastern</span>. Designed by Isambard Kingdom Brunel, the ship could carry over 2,000 tons of cable and had a stable platform for deep‑sea operations. In 1865, after months of preparation, the Great Eastern set sail from Valentia Island with more than 2,500 miles of cable, each strand wrapped in gutta‑percha and reinforced with a thin <span class="vocab" data-cn="用于保护电缆的金属层">copper sheath</span>.`,
    `Laying the cable proved to be an engineering ballet. The crew had to maintain a constant tension while paying out the line, avoiding kinks that could damage the insulation. At one point, a sudden drop in ocean depth caused the cable to snap; the crew spent days retrieving and splicing it aboard the ship. When the final segment finally rested on the seabed near Valentia, the world held its breath for the first test transmission.` ,
    `On August 16, 1866, the Atlantic Telegraph Company sent a simple “<span class="vocab" data-cn="“你好，世界”">Hello, World</span>” message across the ocean. The signal traveled through a series of <span class="vocab" data-cn="用于放大信号的装置，使其能够跨越长距离">repeaters</span> powered by voltaic cells, overcoming the natural attenuation of the <span class="vocab" data-cn="在海底铺设的电线">submarine</span> cable. The successful transmission proved that long‑distance electrical communication was not only possible but commercially viable.`,
    `The triumph sparked a new wave of corporate rivalry. French investors, backed by Emperor Napoleon III, launched the Compagnie du télégraphe sous‑marin to lay a competing line from France to North America. Meanwhile, American and British stockholders fought over control of the lucrative messaging fees, leading to legal battles that would shape international telecommunication law for decades. The race to dominate the Atlantic cable market turned the ocean into a contested commercial frontier as much as an engineering marvel.`,
    `By the late 19th century, dozens of cables crisscrossed the Atlantic, each built on lessons learned from Field’s daring experiments. The original challenges—material durability, deep‑sea laying techniques, and international financing—laid the groundwork for today’s global fiber‑optic networks. In retrospect, the first transatlantic telegraph cable stands as a testament to how bold vision, technical ingenuity, and fierce competition can together redraw the map of human communication.`,
  ],
  vocabulary: [
    { word: 'transatlantic', cn: '跨大西洋的' },
    { word: 'gutta‑percha', cn: '一种天然树脂，常用于电缆绝缘' },
    { word: 'insulation', cn: '防止电流泄漏的材料层' },
    { word: 'Great Eastern', cn: '当时最大的船只，用于铺设海底电缆' },
    { word: 'copper sheath', cn: '用于保护电缆的金属层' },
    { word: 'repeaters', cn: '用于放大信号的装置，使其能够跨越长距离' },
    { word: 'submarine', cn: '在海底铺设的电线' },
    { word: 'Hello, World', cn: '“你好，世界”' },
  ],
};

export default article;
