import type { Article } from '../../types/index.ts';

// 文件意图：维护《Nature’s Perfect Spheres: The Geological Mystery of New Zealand’s Moeraki Boulders》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00215 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00215',
  slug: 'nature-s-perfect-spheres-the-geological-mystery-of-new-zealand-s-moeraki-boulders',
  title: 'Nature’s Perfect Spheres: The Geological Mystery of New Zealand’s Moeraki Boulders',
  subtitle: 'Exploring the formation, composition, and cultural stories behind the iconic coastal boulders.',
  summary: 'A deep dive into how the Moeraki Boulders were formed and why they captivate scientists and visitors alike.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Along a windswept stretch of New Zealand’s South Island, near the tiny settlement of Koekohe, lie dozens of perfectly rounded stones that seem to have been placed by an artist’s hand. These are the Moeraki Boulders, each ranging from a few kilograms to several tonnes, their smooth surfaces gleaming under the sun and their interiors revealing intricate layers when split open.`,
    `The boulders are not random rocks but massive <span class="vocab" data-cn="结核">concretions</span> that formed within ancient <span class="vocab" data-cn="海相沉积岩">marine sedimentary rock</span>. Over millions of years, mineral-rich groundwater seeped through the porous sediments, precipitating calcium carbonate around tiny nuclei such as shells or plant fragments. This slow accretion created hard, rounded cores that resisted erosion long after the surrounding softer material wore away.`,

    `Key to understanding their shape is the concept of <span class="vocab" data-cn="古流向">paleocurrent</span>. During the Oligocene epoch, sea levels rose and fell repeatedly, altering the direction and strength of underwater currents. These currents helped distribute the mineral-laden fluids evenly around each nucleus, promoting a uniform growth that gave the boulders their near‑perfect spherical geometry.`,

    `When the surrounding sediments finally lithified—turned into solid rock through <span class="vocab" data-cn="成岩作用">lithification</span>—the concretions became locked in place. The outer layers of the boulders are rich in iron oxide, which gives them a reddish hue, while the inner cores consist mainly of calcite‑cemented mudstone. This contrast is striking when a boulder is cracked open, revealing concentric rings that record subtle changes in chemistry over time.`,

    `Unlike <span class="vocab" data-cn="冰碛漂砾">glacial erratics</span>—rocks transported by ice and deposited far from their source—the Moeraki Boulders have never traveled far. Their origin lies right beneath the present shoreline, and erosion has simply exposed them. This local provenance explains why they share a common composition and size range, unlike erratics that can be wildly heterogeneous.`,

    `For the indigenous Māori, these stones are more than geological curiosities; they are woven into oral tradition. Legend tells of the giant ancestor Māui, who placed the boulders as stepping stones for his canoe. Today, tourists flock to the site, and careful management ensures that foot traffic does not damage the fragile surrounding cliffs.`,

    `Scientific interest in the boulders surged after researchers applied modern dating techniques such as <span class="vocab" data-cn="铀-铅测年法">U‑Pb dating</span> on the calcite cement. Results indicate an age of roughly 60 million years, placing their formation shortly after the extinction of the non‑avian dinosaurs. This timeline aligns with known marine transgressions in the region, reinforcing the link between sea‑level change and concretion growth.`,

    `The Moeraki Boulders stand as a reminder that even the most ordinary-looking stones can hold complex stories of Earth’s past. Their enduring mystery invites both scientists and visitors to contemplate the slow, patient forces—chemical precipitation, sediment compaction, and relentless waves—that sculpted these natural perfect spheres.`,
  ],
  vocabulary: [
    { word: 'concretions', cn: '结核' },
    { word: 'marine sedimentary rock', cn: '海相沉积岩' },
    { word: 'paleocurrent', cn: '古流向' },
    { word: 'lithification', cn: '成岩作用' },
    { word: 'glacial erratics', cn: '冰碛漂砾' },
    { word: 'U‑Pb dating', cn: '铀-铅测年法' },
  ],
};

export default article;
