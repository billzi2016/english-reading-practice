import type { Article } from '../../types/index.ts';

// 文件意图：维护《Novarupta 1912: The Massive Eruption That Reshaped Alaska’s Landscape and Volcanology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00321 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00321',
  slug: 'novarupta-1912-the-massive-eruption-that-reshaped-alaska-s-landscape-and-volcanology',
  title: 'Novarupta 1912: The Massive Eruption That Reshaped Alaska’s Landscape and Volcanology',
  subtitle: 'How a remote volcano changed the way we understand Earth’s fiery forces',
  summary: 'The 1912 Novarupta eruption was the largest volcanic event of the 20th century, leaving lasting geological and scientific legacies.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In early June 1912, a small group of hunters from Katmai National Park noticed an odd, sour smell drifting over the tundra. The air was tinged with fine ash that settled like snow on spruce needles. Unaware that they were witnessing the beginning of a historic event, they reported the phenomenon to the nearest U.S. Geological Survey (USGS) outpost, setting off a chain of investigations that would later rewrite volcanic theory.`,
    `Two weeks later, on June 6, the ground near what is now called Novarupta began to tremble. A massive explosion ruptured the surface, ejecting an estimated 13 cubic kilometers of material—more than ten times the volume released by Mount St. Helens in 1980. The eruption produced a towering <span class="vocab" data-cn="火山喷发柱">volcanic plume</span> that rose over 20 kilometers into the stratosphere, dispersing ash across much of western North America and even reaching Europe within days.`,
    `The immediate aftermath revealed a newly formed <span class="vocab" data-cn="凹陷盆地">caldera</span>, a circular depression roughly 2.5 kilometers wide. Inside the caldera lay piles of light‑colored <span class="vocab" data-cn="浮石">pumice</span> and dense, black <span class="vocab" data-cn="凝灰岩">tephra</span>, creating a landscape that resembled an alien moonscape. Geologists later realized that the eruption had tapped into a deep <span class="vocab" data-cn="岩浆库">magma chamber</span> that extended far beneath the surface, feeding both Novarupta and its neighbor, Mount Katmai, which simultaneously collapsed to form a spectacular crater lake.`,
    `One of the most puzzling observations was the rapid cooling of the erupted material. Within hours, the incandescent lava flows solidified into glassy obsidian sheets, while the surrounding ash settled into thick layers up to 30 meters deep in some valleys. This phenomenon prompted scientists like Robert Griggs to study the region intensively, leading to the first systematic mapping of a modern <span class="vocab" data-cn="火山沉积层">tephra deposit</span> and establishing baseline data for future comparative studies.`,
    `The eruption also triggered profound changes in the local <span class="vocab" data-cn="水热系统">hydrothermal system</span>. Heat from the residual magma warmed nearby groundwater, creating a network of steaming vents and mineral-rich springs that still bubble today. These features have become natural laboratories for studying how volcanic heat influences ecosystems, offering clues about life in extreme environments on Earth and potentially on other planets.`,
    `Beyond its geological impact, Novarupta reshaped scientific methodology. The sheer scale of the event forced volcanologists to adopt interdisciplinary approaches, combining field mapping, petrographic analysis, and emerging techniques like radiometric dating. The eruption also highlighted the importance of remote sensing; although satellite imagery was decades away, early aerial photographs taken from balloons provided a bird’s‑eye view that helped quantify ash distribution—a practice now standard in modern volcano monitoring.`,
    `Today, more than a century later, visitors to Katmai National Park can walk among the remnants of Novarupta’s fury. The silent ash fields and turquoise waters of the crater lake serve as a reminder that Earth’s interior remains restless. By studying this historic eruption, scientists continue to refine hazard assessments for communities living near active volcanoes worldwide, ensuring that the lessons learned from Alaska’s 1912 disaster help protect future generations.`,
  ],
  vocabulary: [
    { word: 'volcanic plume', cn: '火山喷发柱' },
    { word: 'caldera', cn: '凹陷盆地' },
    { word: 'pumice', cn: '浮石' },
    { word: 'tephra', cn: '凝灰岩' },
    { word: 'magma chamber', cn: '岩浆库' },
    { word: 'hydrothermal system', cn: '水热系统' },
  ],
};

export default article;
