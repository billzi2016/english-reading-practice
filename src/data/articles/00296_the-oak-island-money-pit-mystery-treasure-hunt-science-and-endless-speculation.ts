import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Oak Island Money Pit Mystery: Treasure Hunt, Science, and Endless Speculation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00296 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00296',
  slug: 'the-oak-island-money-pit-mystery-treasure-hunt-science-and-endless-speculation',
  title: 'The Oak Island Money Pit Mystery: Treasure Hunt, Science, and Endless Speculation',
  subtitle: 'How a tiny island sparked centuries of adventure and scientific inquiry',
  summary: 'Explore the history, engineering feats, and lingering theories surrounding Oak Island’s infamous Money Pit.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1790s a teenage boy named Daniel McGinnis stumbled upon a strange depression in the ground of Oak Island, a small landmass off the coast of Nova Scotia. The hole was lined with flagstones and seemed to be deliberately concealed. Intrigued, he and two friends began digging, only to encounter layers of wooden platforms that collapsed under their weight. This first discovery gave birth to what would later be called the <span class="vocab" data-cn="金坑">Money Pit</span>, a name that hints at hidden riches but also at the endless costs incurred by those who dared to explore it.`,
    `Over the next two centuries, dozens of expeditions have tried to solve the pit’s puzzle. Early treasure hunters relied on simple tools—shovels, pickaxes, and hand‑driven <span class="vocab" data-cn="钻机">drilling rigs</span>—yet they quickly learned that the site was engineered to thwart intrusion. Every time a shaft reached a certain depth, water would surge in through concealed channels, flooding the tunnel within minutes. Modern investigators have traced these floods to a sophisticated <span class="vocab" data-cn="虹吸装置">siphon</span> system, likely built by the original diggers to protect whatever lay below.`,
    `In the 1960s, the quest entered an era of scientific methodology. The team led by Robert Restall employed a <span class="vocab" data-cn="地球物理勘测">geophysical survey</span> using magnetometers and resistivity meters, hoping to locate anomalies that might indicate metal objects or voids. Their results revealed a strong magnetic signature at roughly 30 metres depth, sparking speculation about a buried iron chest or a massive steel support structure. Although the data were inconclusive, they demonstrated how modern technology could complement folklore in the search for truth.`,
    `One of the most dramatic engineering feats on Oak Island was the installation of a series of <span class="vocab" data-cn="套管">casing pipes</span>. In 1972, a crew drove a steel pipe down the shaft to a depth of about 70 feet, then filled the surrounding cavity with concrete. The intention was twofold: to stabilize the pit and to create a sealed conduit that could be later opened without triggering the flood mechanism. When the concrete set, however, the water level rose dramatically, suggesting that the pipe had intersected an underground reservoir—a reminder that even well‑planned interventions can unleash unexpected consequences.`,
    `Theories about what lies at the bottom of the Money Pit are as varied as they are persistent. Some argue for a cache of pirate treasure, perhaps from the infamous Captain Kidd, while others point to more exotic possibilities: lost manuscripts of the Knights Templar, a secret stash of colonial-era gold, or even a natural geological formation misinterpreted as man‑made. Each hypothesis draws on fragments of historical records—ship logs, land grants, and oral traditions—and attempts to fit them into the physical evidence uncovered over the years.`,
    `Beyond treasure hunting, Oak Island has become a case study in interdisciplinary research. Archaeologists examine soil samples for pollen that could date human activity; engineers model fluid dynamics to understand how the flood system operates under different pressures; historians scrutinize 18th‑century maps for clues about land ownership and possible motives for concealment. This collaborative approach illustrates how a single mystery can bridge <span class="vocab" data-cn="考古学">archaeology</span>, <span class="vocab" data-cn="工程学">engineering</span>, and folklore, turning a local legend into an international scientific curiosity.`,
    `Today, the island remains privately owned, and access is tightly controlled. Television series such as “The Curse of Oak Island” have popularized the story, bringing new funding and fresh eyes to the problem. Yet despite modern equipment—ground‑penetrating radar, 3D modeling, and even drone photogrammetry—the core question persists: what, if anything, lies beneath those layers of wood, stone, and water? The answer may never be fully known, but the journey itself continues to inspire a blend of adventure, skepticism, and wonder that defines humanity’s endless quest for hidden knowledge.`,
  ],
  vocabulary: [
    { word: 'Money Pit', cn: '金坑' },
    { word: 'drilling rig', cn: '钻机' },
    { word: 'siphon', cn: '虹吸装置' },
    { word: 'geophysical survey', cn: '地球物理勘测' },
    { word: 'casing pipe', cn: '套管' },
    { word: 'archaeology', cn: '考古学' },
    { word: 'engineering', cn: '工程学' },
  ],
};

export default article;
