import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Race to Map the Ocean Floor: From Early Soundings to Satellite Altimetry》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00205 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00205',
  slug: 'the-race-to-map-the-ocean-floor-from-early-soundings-to-satellite-altimetry',
  title: 'The Race to Map the Ocean Floor: From Early Soundings to Satellite Altimetry',
  subtitle: 'How centuries of ingenuity turned the hidden seafloor into a global map.',
  summary: 'From simple lead lines to sophisticated satellite altimetry, explore the milestones that made ocean‑floor mapping possible.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `The story begins in the age of sail, when mariners first tried to gauge depth with a simple <span class="vocab" data-cn="铅线">lead line</span>. A weighted rope was lowered until it touched the bottom, and the length of rope marked the water column. Though crude, this method produced the earliest bathymetric notes on charts such as those from the HMS Challenger expedition (1872‑1876), which systematically recorded depths across the Atlantic and Pacific basins.`,
    `A quantum leap arrived with the invention of <span class="vocab" data-cn="回声测深">echo sounding</span> by Alexander Behm in 1914. By emitting a sound pulse and measuring the time it took to return after reflecting off the seabed, ships could calculate depth continuously while underway. The technique proved invaluable during World War I for navigating mine‑laden waters and later became standard on research vessels, dramatically increasing the density of depth measurements.`,
    `World War II accelerated acoustic mapping even further. Naval sonar arrays were refined to detect submarines, and after the war those same systems were repurposed for scientific surveys. In the 1970s the <span class="vocab" data-cn="多波束声纳">multibeam sonar</span> emerged, emitting a fan of sound beams that covered swaths up to several hundred meters wide. Coupled with precise positioning, multibeam allowed the creation of detailed <span class="vocab" data-cn="海底地形图">bathymetric charts</span> that revealed underwater mountains, trenches, and spreading ridges in unprecedented clarity.`,
    `Recognizing that no single nation could map the entire ocean alone, the International Hydrographic Organization and the Intergovernmental Oceanographic Commission launched <span class="vocab" data-cn="全球海洋测深图集">GEBCO</span> in 1903. GEBCO set a common standard for depth data collection and produced a unified global chart that integrated ship‑based soundings, early satellite estimates, and later contributions from national agencies. This collaborative spirit laid the groundwork for modern open‑data initiatives.`,
    `The real paradigm shift came with <span class="vocab" data-cn="卫星高度计测量">satellite altimetry</span>. Launched in 1992, TOPEX/Poseidon measured sea‑surface height to within a few centimeters. Because the ocean surface subtly bulges over underwater mass concentrations, these measurements revealed <span class="vocab" data-cn="重力异常">gravity anomalies</span> that could be inverted to infer seafloor topography. By comparing the observed sea level with the theoretical <span class="vocab" data-cn="大地水准面">geoid</span>, scientists produced a coarse but global map of the ocean floor, filling gaps where ships had never sailed.`,
    `Today, high‑resolution shipborne multibeam data are merged with satellite‑derived gravity models to produce seamless maps. The United Nations’ <span class="vocab" data-cn="海底2030计划">Seabed 2030</span> initiative aims to compile all existing depth data and make a complete map of the ocean floor by 2030, leveraging both legacy surveys and new observations from autonomous platforms. This synthesis has already uncovered previously unknown seamount chains and refined our understanding of plate tectonics.`,
    `Looking ahead, fleets of <span class="vocab" data-cn="自主式水下航行器">autonomous underwater vehicles</span> (AUVs) equipped with compact multibeam sonars promise to map the most inaccessible trenches without a crewed ship. Swarms of gliders can linger for months, collecting fine‑scale bathymetry and water‑column data simultaneously. As these technologies mature, the once‑mysterious abyss will become as charted as any continent, reshaping navigation, resource management, and climate science.`,
  ],
  vocabulary: [
    { word: 'lead line', cn: '铅线' },
    { word: 'echo sounding', cn: '回声测深' },
    { word: 'multibeam sonar', cn: '多波束声纳' },
    { word: 'bathymetric chart', cn: '海底地形图' },
    { word: 'GEBCO', cn: '全球海洋测深图集' },
    { word: 'satellite altimetry', cn: '卫星高度计测量' },
    { word: 'gravity anomaly', cn: '重力异常' },
    { word: 'geoid', cn: '大地水准面' },
    { word: 'Seabed 2030', cn: '海底2030计划' },
    { word: 'autonomous underwater vehicle', cn: '自主式水下航行器' },
  ],
};

export default article;
