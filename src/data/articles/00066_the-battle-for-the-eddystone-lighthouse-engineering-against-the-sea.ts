import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Battle for the Eddystone Lighthouse: Engineering Against the Sea》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00066 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00066',
  slug: 'the-battle-for-the-eddystone-lighthouse-engineering-against-the-sea',
  title: 'The Battle for the Eddystone Lighthouse: Engineering Against the Sea',
  subtitle: 'How engineers tamed a treacherous reef through innovation and perseverance.',
  summary: 'A narrative of four successive lighthouses on the Eddystone Rocks, highlighting the engineering breakthroughs that finally conquered the sea.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `The Eddystone Rocks rise like jagged teeth from the Atlantic, just eight miles off Cornwall’s coast. For centuries they claimed countless ships, prompting mariners and merchants to demand a beacon that could survive the ocean’s relentless assault. The first serious attempt began in 1698 when the self‑taught inventor <span class="vocab" data-cn="亨利·温斯坦利">Henry Winstanley</span> erected a wooden tower on the reef, hoping to turn tragedy into guidance.`,
    `Winstanley's structure was daring but fragile: a timber frame clad in tarred canvas, topped with a lantern that burned oil for visibility. It stood only five years before the Great Storm of 1703 unleashed unprecedented <span class="vocab" data-cn="波浪力">wave force</span>, tearing the lighthouse from its moorings and dragging it into the abyss along with its keeper. The disaster proved that a lighthouse could not simply be an ornamental tower; it had to be engineered for the sea itself.`,

    `Undeterred, the Crown commissioned a second stone lighthouse in 1706, designed by <span class="vocab" data-cn="约翰·鲁迪亚德">John Rudyard</span>. Built of local limestone and intended to be permanent, it collapsed within months because its foundation rested on loose sand rather than solid rock. The failure taught a harsh lesson: without a secure base that could resist both tidal scour and the pounding of waves, even the sturdiest masonry would crumble.`,

    `Enter <span class="vocab" data-cn="约翰·斯密顿">John Smeaton</span>, often called the “father of civil engineering.” In 1756 he approached the problem scientifically, constructing a scale model of his proposed tower in a bathtub to observe how water struck it. He chose <span class="vocab" data-cn="石灰砂浆">hydraulic lime mortar</span> for its ability to set under water, and he cut each granite block with precise <span class="vocab" data_cn="榫卯结构">dovetail joints</span>, creating an <span class="vocab" data-cn="互锁石块">interlocking stone</span> system that would distribute stresses evenly.`,

    `Smeaton’s design was also revolutionary in shape. He fashioned the tower with a broad base that tapered upward, resembling a bottle or a giant sea‑egg. This <span class="vocab" data-cn="锥形结构">tapered profile</span> reduced the impact of waves by allowing water to flow around rather than slam directly into a flat wall. The massive <span class="vocab" data-cn="花岗岩">granite</span> blocks, each weighing several tons, were lowered onto iron bolts driven into the rock, anchoring the structure against both uplift and lateral forces.`,

    `Construction was a logistical nightmare. Workers had to ferry stone from Plymouth across choppy waters, timing lifts with the rhythm of the tide measured by an on‑site <span class="vocab" data-cn="潮汐计">tide gauge</span>. Night work was limited because the reef was submerged at high water, so crews built temporary wooden platforms that were raised and lowered as the sea receded. After three years of relentless effort, the lighthouse was lit for the first time in 1759, standing firm where its predecessors had failed.`,

    `The Smeaton tower served mariners for over a century before being replaced in 1882 by a sleek <span class="vocab" data-cn="铸铁">cast‑iron</span> lattice tower designed by James Douglass. This new structure incorporated a rotating Fresnel lens, gas illumination, and later electric power, further reducing the need for human keepers. Yet the core principles Smeaton pioneered—solid foundations, durable materials, and forms that work with the ocean rather than against it—remain the blueprint for modern offshore engineering projects such as oil rigs and wind farms.`,
  ],
  vocabulary: [
    { word: 'hydraulic lime mortar', cn: '石灰砂浆' },
    { word: 'dovetail joint', cn: '榫卯结构' },
    { word: 'wave force', cn: '波浪力' },
    { word: 'tide gauge', cn: '潮汐计' },
    { word: 'interlocking stone', cn: '互锁石块' },
    { word: 'granite', cn: '花岗岩' },
    { word: 'cast‑iron', cn: '铸铁' },
    { word: 'tapered profile', cn: '锥形结构' },
  ],
};

export default article;
