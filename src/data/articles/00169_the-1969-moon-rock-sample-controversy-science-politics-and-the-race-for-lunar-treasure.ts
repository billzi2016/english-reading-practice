import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1969 Moon Rock Sample Controversy: Science, Politics, and the Race for Lunar Treasure》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00169 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00169',
  slug: 'the-1969-moon-rock-sample-controversy-science-politics-and-the-race-for-lunar-treasure',
  title: 'The 1969 Moon Rock Sample Controversy',
  subtitle: 'Science, Politics, and the Race for Lunar Treasure',
  summary: 'How Apollo‑11’s lunar rocks sparked scientific debate, diplomatic tension, and a lasting legacy of ownership disputes.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When Neil Armstrong and Buzz Aldrin stepped onto the Sea of Tranquility on July 20, 1969, they carried more than just footprints. Inside the <span class="vocab" data-cn="登月舱">lunar module</span> was a small container filled with <span class="vocab" data-cn="月壤，指月球表面的碎屑和细小岩石">regolith</span> that would become the first lunar rocks ever returned to Earth. The scientific community buzzed with anticipation, hoping these samples could answer fundamental questions about the Moon’s origin and its relationship to Earth.`,
    `However, the excitement was quickly tempered by a political undercurrent. The United States had just won the <span class="vocab" data-cn="冷战时期美苏之间的政治与军事竞争">Cold War</span> space race, and every piece of lunar material was seen as a diplomatic trophy. President Nixon’s administration decided that some of the rocks would be gifted to allied nations as symbols of goodwill, while others were earmarked for “national prestige” displays in museums across America. This split sparked an early controversy over who truly owned the Moon’s bounty—NASA, the American people, or the international scientific community?`,
    `Scientists demanded unrestricted access for rigorous <span class="vocab" data-cn="同位素分析，用于确定岩石年龄和成分的技术">isotopic analysis</span>. Yet the political decision to parcel out samples as diplomatic gifts meant that many researchers had to wait months, sometimes years, before they could study a fragment. The delay hampered early attempts to test the prevailing “giant impact” hypothesis, which suggested the Moon formed from debris after a Mars‑sized body collided with Earth. Critics argued that political considerations were compromising scientific integrity.`,
    `The controversy deepened when the United States announced the creation of the <span class="vocab" data-cn="美国国家航空航天局，负责美国的民用太空计划">NASA</span> Lunar Sample Laboratory Facility in 1970. While the facility was designed to preserve the rocks under pristine conditions, its strict chain‑of‑custody procedures raised questions about provenance. Some foreign scientists feared that their gifted samples might be “re‑classified” or even used for covert research without proper acknowledgment, fueling mistrust between allies.`,
    `In the years following Apollo 11, a handful of moon rocks mysteriously vanished from storage, later resurfacing on the black market. The most infamous case involved a 1970s theft where a former NASA employee attempted to sell a small lunar fragment to a private collector in Europe. This incident highlighted the difficulty of tracking the <span class="vocab" data-cn="来源，指物品的来历和所有权">provenance</span> of such rare items and prompted stricter international agreements on the handling of extraterrestrial material.`,
    `By the late 1970s, a consensus began to emerge: lunar samples should be treated as a shared scientific heritage. The United Nations Committee on the Peaceful Uses of Outer Space (COPUOS) drafted guidelines recommending that future sample‑return missions allocate a portion of their cargo for open scientific study, while any diplomatic distribution should be accompanied by clear documentation and joint research programs. These recommendations laid the groundwork for later missions like Japan’s <span class="vocab" data-cn="隼鸟号，JAXA的月球样本返回探测器">Hayabusa2</span> and China’s Chang’e 5, which emphasized transparent sharing of data.`,
    `Today, the legacy of the 1969 moon rock controversy lives on in museum exhibits, academic papers, and diplomatic archives. The original Apollo samples continue to be re‑examined with modern techniques such as laser ablation and high‑resolution mass spectrometry, revealing new insights about lunar volcanic activity and water content. At the same time, the story serves as a reminder that scientific discovery does not occur in a vacuum; it is always intertwined with politics, national pride, and the ever‑shifting dynamics of international cooperation.`,
  ],
  vocabulary: [
    { word: 'lunar module', cn: '登月舱' },
    { word: 'regolith', cn: '月壤，指月球表面的碎屑和细小岩石' },
    { word: 'Cold War', cn: '冷战时期美苏之间的政治与军事竞争' },
    { word: 'isotopic analysis', cn: '同位素分析，用于确定岩石年龄和成分的技术' },
    { word: 'NASA', cn: '美国国家航空航天局，负责美国的民用太空计划' },
    { word: 'provenance', cn: '来源，指物品的来历和所有权' },
    { word: 'Hayabusa2', cn: '隼鸟号，JAXA的月球样本返回探测器' },
  ],
};

export default article;
