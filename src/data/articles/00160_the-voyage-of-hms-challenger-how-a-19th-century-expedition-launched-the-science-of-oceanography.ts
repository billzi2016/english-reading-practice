import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Voyage of HMS Challenger: How a 19th‑Century Expedition Launched the Science of Oceanography》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00160 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00160',
  slug: 'the-voyage-of-hms-challenger-how-a-19th-century-expedition-launched-the-science-of-oceanography',
  title: 'The Voyage of HMS Challenger: How a 19th‑Century Expedition Launched the Science of Oceanography',
  subtitle: 'From curiosity to systematic ocean science in the age of empire',
  summary: 'Explore how the Challenger expedition turned seafaring adventure into the birth of modern oceanography.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In August 1872, the Royal Navy’s newly‑refitted corvette <span class="vocab" data-cn="挑战者号">HMS Challenger</span> slipped away from Portsmouth with a crew of scientists, sailors, and a cargo of glass bottles, steel sounding lines, and early microscopes. Unlike typical naval missions that chased enemy ships or protected trade routes, this voyage was designed to answer a single question: what lies beneath the world’s oceans? The decision to turn a warship into a floating laboratory reflected the Victorian era’s confidence in measurement and its appetite for global knowledge.`,
    `The expedition’s leader, Professor <span class="vocab" data-cn="查尔斯·怀维尔·汤姆森">Charles Wyville Thomson</span>, assembled a multidisciplinary team that included naturalist Sir John Murray, chemist Henry Nottidge Moseley, and the ship’s master, Captain George Nares. Their itinerary was ambitious: they would sail from the Atlantic, round Cape Horn, cross the Pacific, navigate the Indian Ocean, and finally return via the Suez Canal in 1876. Over four years they covered more than 68,000 nautical miles, stopping at over 130 stations to collect water samples, measure temperature, and map the seafloor.`,
    `One of the most groundbreaking techniques introduced on the Challenger was systematic <span class="vocab" data-cn="测深学">bathymetry</span>. Using a weighted line lowered thousands of meters into the abyss, they recorded depths with unprecedented precision. The resulting charts revealed features such as the Mariana Trench’s western slope and the Mid‑Atlantic Ridge long before plate tectonics was conceived. These depth measurements also allowed scientists to calculate the volume of the world’s oceans, a figure that would later inform climate models.`,
    `Temperature profiles uncovered another hidden layer: the <span class="vocab" data-cn="温跃层">thermocline</span>. By lowering thermometers at regular intervals, the crew discovered that water temperature did not change uniformly with depth; instead, there was a sharp gradient separating warm surface waters from cold deep currents. This insight explained why certain marine species were confined to specific depths and laid the groundwork for modern physical oceanography.`,
    `Biological discoveries challenged prevailing assumptions about life in darkness. The Challenger’s nets hauled up countless specimens of <span class="vocab" data-cn="浮游动物">zooplankton</span>, as well as bizarre deep‑sea creatures like the giant squid and bioluminescent fish. Perhaps most astonishing was the realization that even at depths exceeding 4,000 meters, life persisted—a revelation that spurred the later development of marine biology as a distinct discipline.` ,
    `Chemical analyses of seawater revealed variations in salinity, dissolved gases, and trace elements across different basins. The expedition’s chemists measured concentrations of <span class="vocab" data-cn="盐度">salinity</span> using titration methods, establishing baseline values that are still referenced today. Their work demonstrated that the ocean is not a uniform soup but a dynamic system with regional signatures, influencing everything from marine ecosystems to weather patterns.` ,
    `When HMS Challenger finally docked in London in 1876, its crew presented a massive compendium known as the <span class="vocab" data-cn="挑战者报告">Challenger Report</span>. Spanning 50 volumes and over 13,000 pages, the report catalogued physical measurements, species descriptions, and geological observations. The Royal Society hailed it as “the most comprehensive scientific undertaking of its age,” and universities worldwide began to offer courses in oceanography. In essence, the Challenger turned curiosity into a systematic science, laying the foundation for modern research vessels, satellite altimetry, and climate studies that continue to shape our understanding of the blue planet.`,
  ],
  vocabulary: [
    { word: 'HMS Challenger', cn: '挑战者号' },
    { word: 'Charles Wyville Thomson', cn: '查尔斯·怀维尔·汤姆森' },
    { word: 'bathymetry', cn: '测深学' },
    { word: 'thermocline', cn: '温跃层' },
    { word: 'zooplankton', cn: '浮游动物' },
    { word: 'salinity', cn: '盐度' },
    { word: 'Challenger Report', cn: '挑战者报告' },
  ],
};

export default article;
