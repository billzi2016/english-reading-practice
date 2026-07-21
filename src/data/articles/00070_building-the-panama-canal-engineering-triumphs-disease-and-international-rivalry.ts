import type { Article } from '../../types/index.ts';

// 文件意图：维护《Building the Panama Canal: Engineering Triumphs, Disease, and International Rivalry》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00070 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00070',
  slug: 'building-the-panama-canal-engineering-triumphs-disease-and-international-rivalry',
  title: 'Building the Panama Canal: Engineering Triumphs, Disease, and International Rivalry',
  subtitle: 'How a narrow strip of land reshaped global trade amid science and politics.',
  summary: 'A narrative of the colossal engineering feat that linked oceans, battled deadly disease, and sparked geopolitical competition.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early twentieth century, the United States set its sights on a narrow <span class="vocab" data-cn="地峡">isthmus</span> that connected the Atlantic and Pacific Oceans. The French had already attempted the project in the 1880s under the <span class="vocab" data-cn="法国巴拿马运河公司">French Panama Canal Company</span>, but financial ruin and a devastating epidemic forced them to abandon the work. When President Theodore Roosevelt championed American involvement, the venture became both a symbol of national ambition and a test of modern engineering.`,
    `The most visible technical marvel was the massive <span class="vocab" data-cn="船闸系统">lock system</span> that would lift ships hundreds of feet above sea level. Engineers conducted an exhaustive <span class="vocab" data-cn="岩土勘察">geotechnical survey</span> to map the region’s unstable volcanic soils and dense rainforest. The decision to cut through the continental divide at the Culebra Cut required unprecedented excavation, using steam shovels, dynamite, and a newly designed system of temporary dams to control water flow.`,
    `While machines reshaped the landscape, invisible enemies stalked the workforce. Outbreaks of <span class="vocab" data-cn="热带黄热病">tropical yellow fever</span> and malaria claimed thousands of lives, threatening to halt progress entirely. The turning point arrived with Dr. William Gorgas, a former Army physician who applied recent discoveries about disease transmission. By implementing rigorous <span class="vocab" data-cn="消灭蚊子">mosquito eradication</span> campaigns—draining standing water, fumigating homes, and screening windows—the mortality rate fell dramatically, allowing construction to resume at full speed.`,
    `The canal’s fate was also entangled in international rivalry. French investors, still eager for a return, lobbied against American control, while the Colombian government initially refused to grant the United States a lease. In 1903, a separatist movement in Panama, backed covertly by U.S. naval forces, declared independence, and a treaty was quickly signed granting America exclusive construction rights. This maneuver sparked criticism abroad but secured the political environment needed for such an ambitious undertaking.`,
    `By 1913, the canal’s main structures were complete. The Culebra Cut—renamed Gaillard Cut after its chief engineer—had been carved through more than 100 million cubic yards of earth and rock. Over 75,000 workers from over 30 nations had toiled side by side, operating a fleet of steam shovels, locomotives, and the newly invented electric railways that moved spoil away from the excavation face. The project showcased the power of coordinated <span class="vocab" data-cn="水利工程">hydraulic engineering</span> and large‑scale logistics.`,
    `The official opening ceremony on August 15, 1914, was a triumphal parade of naval vessels passing through the locks for the first time. The canal instantly shortened global shipping routes—saving up to 8,000 nautical miles between New York and San Francisco—and cemented the United States’ status as an engineering superpower. It also demonstrated how scientific understanding of disease could be harnessed to protect massive labor forces in hostile environments.`,
    `Today, the Panama Canal remains a living laboratory for engineers and public health experts alike. Ongoing expansion projects echo the original challenges: deeper locks, larger vessels, and renewed concerns about climate change and water scarcity. The story of its construction reminds us that monumental infrastructure succeeds only when technical brilliance, medical insight, and diplomatic strategy work in concert.`,
  ],
  vocabulary: [
    { word: 'isthmus', cn: '地峡' },
    { word: 'lock system', cn: '船闸系统' },
    { word: 'tropical yellow fever', cn: '热带黄热病' },
    { word: 'mosquito eradication', cn: '消灭蚊子' },
    { word: 'geotechnical survey', cn: '岩土勘察' },
    { word: 'hydraulic engineering', cn: '水利工程' },
  ],
};

export default article;
