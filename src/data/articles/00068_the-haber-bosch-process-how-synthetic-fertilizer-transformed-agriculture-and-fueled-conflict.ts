import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Haber‑Bosch Process: How Synthetic Fertilizer Transformed Agriculture and Fueled Conflict》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00068 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00068',
  slug: 'the-haber-bosch-process-how-synthetic-fertilizer-transformed-agriculture-and-fueled-conflict',
  title: 'The Haber‑Bosch Process: How Synthetic Fertilizer Transformed Agriculture and Fueled Conflict',
  subtitle: 'From laboratory breakthrough to global upheaval',
  summary: 'Explore how the invention of industrial ammonia reshaped food production, population growth, and modern warfare.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `At the dawn of the twentieth century, a young German chemist named <span class="vocab" data-cn="化学家">Fritz Haber</span> was obsessed with a problem that had haunted scientists for centuries: turning inert atmospheric nitrogen into a usable form. In his modest laboratory in Berlin, he experimented with electric arcs and high temperatures, hoping to crack the strong triple bond of N₂. His breakthrough came in 1909 when he demonstrated that, under extreme pressure and temperature, nitrogen could combine with hydrogen to produce <span class="vocab" data-cn="氨">ammonia</span>.`,
    `The challenge Haber faced was not merely chemical but also engineering. Atmospheric nitrogen is abundant yet chemically unreactive; the process of converting it required a reliable <span class="vocab" data-cn="催化剂">catalyst</span> and conditions that mimicked the heart of a star. By employing an iron‑based catalyst and subjecting the gases to pressures above 150 atm and temperatures around 500 °C, Haber achieved what nature does only in lightning strikes. This laboratory triumph was later termed <span class="vocab" data-cn="氮固定">nitrogen fixation</span>.`,
    `Scaling the reaction from a glass flask to an industrial plant fell to Carl Bosch, an engineer at BASF. In 1913, Bosch oversaw the construction of the world’s first large‑scale <span class="vocab" data-cn="高压反应器">high‑pressure reactor</span> in Oppau, Germany. The plant operated continuously, feeding iron catalyst pellets with a steady stream of nitrogen and hydrogen. Overcoming material fatigue, sealing challenges, and safety hazards required innovations that would later influence the petrochemical industry as a whole. By 1915, the Haber‑Bosch process was producing thousands of tons of ammonia each year.`,
    `The impact on agriculture was immediate and profound. Ammonia could be converted into <span class="vocab" data-cn="合成肥料">synthetic fertilizer</span>, delivering essential nitrogen directly to crops without relying on limited natural deposits of guano or nitrate minerals. This new source of nutrition sparked the post‑World War II <span class="vocab" data-cn="绿色革命">Green Revolution</span>, enabling wheat, rice, and maize yields to double in many regions. Countries that once faced chronic famines began feeding growing urban populations, and global per‑capita food availability rose dramatically throughout the twentieth century.`,
    `However, the bounty came with hidden costs. Excess fertilizer runoff entered rivers and lakes, fueling algal blooms that depleted oxygen—a process known as <span class="vocab" data-cn="富营养化">eutrophication</span>. These dead zones disrupted fisheries and altered ecosystems worldwide. Moreover, the reliance on synthetic inputs created a feedback loop: soils became dependent on external nitrogen, while traditional organic practices waned. The environmental legacy of the Haber‑Bosch process remains a central debate in sustainable agriculture today.`,
    `Beyond feeding humanity, ammonia proved to be a double‑edged sword in warfare. When mixed with fuel oil, it forms <span class="vocab" data-cn="硝酸铵">ammonium nitrate</span>, a powerful explosive used extensively in both World Wars and later conflicts. The same factories that supplied fertilizer to farms also produced the raw material for bombs, blurring the line between civilian industry and military supply chains. In recent decades, tragic incidents such as the 2020 Beirut explosion have reminded the world how readily agricultural chemicals can become weapons of mass destruction.`,
    `Haber’s scientific triumph earned him the 1918 <span class="vocab" data-cn="诺贝尔奖">Nobel Prize</span> in Chemistry, yet his legacy is contested. While he saved billions from starvation, critics argue that his work also enabled unprecedented levels of chemical warfare. The moral dilemma surrounding the Haber‑Bosch process continues to spark discussion about scientists’ responsibility for how their discoveries are applied.`,
    `Today, researchers are revisiting the original problem: can we achieve nitrogen fixation without the energy‑intensive high‑pressure method? Emerging technologies such as electrochemical reduction and biological engineering aim to mimic natural processes at ambient conditions. Whether these innovations will replace the century‑old Haber‑Bosch plant remains uncertain, but the quest underscores a timeless truth—human ingenuity reshapes nature, for better or worse.`,
  ],
  vocabulary: [
    { word: 'Fritz Haber', cn: '化学家' },
    { word: 'ammonia', cn: '氨' },
    { word: 'catalyst', cn: '催化剂' },
    { word: 'nitrogen fixation', cn: '氮固定' },
    { word: 'high-pressure reactor', cn: '高压反应器' },
    { word: 'synthetic fertilizer', cn: '合成肥料' },
    { word: 'Green Revolution', cn: '绿色革命' },
    { word: 'eutrophication', cn: '富营养化' },
    { word: 'ammonium nitrate', cn: '硝酸铵' },
    { word: 'Nobel Prize', cn: '诺贝尔奖' },
  ],
};

export default article;
