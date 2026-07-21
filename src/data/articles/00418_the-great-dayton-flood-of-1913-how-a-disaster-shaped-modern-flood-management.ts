import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Dayton Flood of 1913: How a Disaster Shaped Modern Flood Management》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00418 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00418',
  slug: 'the-great-dayton-flood-of-1913-how-a-disaster-shaped-modern-flood-management',
  title: 'The Great Dayton Flood of 1913: How a Disaster Shaped Modern Flood Management',
  subtitle: 'From tragedy to engineering legacy in the heartland of America',
  summary: 'A look at how the 1913 flood reshaped river management and inspired today’s flood‑control systems.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In late March 1913, a combination of rapid snowmelt and an unprecedented rainstorm swelled the Miami River and its tributaries. The water rose faster than any recorded event, turning the river’s natural <span class="vocab" data-cn="洪泛平原">floodplain</span> into a raging torrent that engulfed downtown Dayton. Within hours, streets turned into canals, factories were submerged, and over 4,000 residents found themselves stranded in makeshift shelters.`,
    `The devastation was staggering: more than 500 homes were destroyed, the city’s electrical grid collapsed, and an estimated 20 people lost their lives. Newspapers of the era described the scene as “a wall of water crashing through the heart of Ohio.” Yet beyond the immediate tragedy, the flood exposed a critical weakness in the region’s <span class="vocab" data-cn="水文科学">hydrology</span> planning—there were no coordinated structures to regulate the river’s flow during extreme weather events.`,

    `In response, civic leaders convened an emergency meeting that led to the birth of the Miami Conservancy District (MCD). Established in 1915, the MCD was one of the first regional <span class="vocab" data-cn="保守区">conservancy districts</span> in the United States, tasked with designing and maintaining large‑scale flood control infrastructure. Its charter gave it authority to levy taxes, acquire land, and construct permanent works that would protect not only Dayton but also downstream communities.`,

    `The engineering plan, spearheaded by civil engineer Arthur E. Morgan, introduced a series of innovative structures. Massive <span class="vocab" data-cn="堤防">levees</span> were built along the riverbanks to contain ordinary high water, while a network of <span class="vocab" data-cn="滞留池">retention basins</span> was excavated upstream to temporarily store excess runoff. During peak flow, these basins would fill like giant sponges, releasing water slowly back into the river once the danger had passed.`,

    `One of the most striking features was the construction of a <span class="vocab" data-cn="溢洪道">spillway</span> at the confluence of the Great Miami River and its tributaries. The spillway acted as an emergency outlet, allowing water to bypass the main channel when levels exceeded design thresholds. This concept—providing a controlled release path for extreme events—has become a cornerstone of modern flood management worldwide.`,

    `The success of the MCD was evident during the 1937 Ohio River flood, when Dayton experienced only minor flooding despite record river stages elsewhere. The district’s infrastructure proved its worth, saving countless lives and billions in potential damage. Over time, the model inspired similar agencies across the United States, such as the Tennessee Valley Authority’s flood control program and the Army Corps of Engineers’ nationwide levee system.`,

    `Today, the legacy of the 1913 disaster is visible not only in concrete walls but also in the way planners approach risk. Contemporary flood management integrates real‑time <span class="vocab" data-cn="气象预报">weather forecasting</span>, computer‑based hydraulic modeling, and community‑level preparedness—principles that trace back to the lessons learned after Dayton’s great deluge. The Great Dayton Flood of 1913 thus stands as a turning point, transforming a tragic event into a blueprint for resilient infrastructure in an era of changing climate.`,
  ],
  vocabulary: [
    { word: 'floodplain', cn: '洪泛平原' },
    { word: 'hydrology', cn: '水文科学' },
    { word: 'conservancy district', cn: '保守区' },
    { word: 'levee', cn: '堤防' },
    { word: 'retention basin', cn: '滞留池' },
    { word: 'spillway', cn: '溢洪道' },
    { word: 'weather forecasting', cn: '气象预报' },
  ],
};

export default article;
