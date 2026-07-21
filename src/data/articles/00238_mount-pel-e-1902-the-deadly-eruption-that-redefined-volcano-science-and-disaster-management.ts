import type { Article } from '../../types/index.ts';

// 文件意图：维护《Mount Pelée 1902: The Deadly Eruption That Redefined Volcano Science and Disaster Management》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00238 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00238',
  slug: 'mount-pel-e-1902-the-deadly-eruption-that-redefined-volcano-science-and-disaster-management',
  title: 'Mount Pelée 1902: The Deadly Eruption That Redefined Volcano Science and Disaster Management',
  subtitle: 'How a single catastrophe reshaped our understanding of volcanoes and emergency response.',
  summary: 'The 1902 eruption of Mount Pelée devastated Saint‑Pierre, killed nearly 30,000 people, and sparked the birth of modern volcanology and disaster management practices.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In early May 1902, the Caribbean island of Martinique was a bustling hub of commerce. Its western coast was dominated by Saint‑Pierre, often called the “Paris of the West Indies,” where sugar merchants, French officials, and tourists mingled beneath palm‑shaded boulevards. Looming over the city was <span class="vocab" data-cn="火山">Mount Pelée</span>, a stratovolcano that had been quiet for centuries, its summit cloaked in clouds and its slopes covered with dense tropical forest.`,
    `The first warning signs appeared as subtle tremors and occasional puffs of steam escaping from fissures on the volcano’s flank. Local residents reported a strange “rotten egg” smell—sulfurous gases that hinted at rising <span class="vocab" data-cn="岩浆库">magma chamber</span> activity. At the time, scientific monitoring was rudimentary; a lone French geologist, Dr. Léon Labbé, kept a simple <span class="vocab" data-cn="地震仪">seismograph</span> in Saint‑Pierre, but its recordings were not yet understood as precursors to a major eruption.`,
    `On the night of 8 May, Mount Pelée unleashed one of the most violent eruptions in recorded history. A towering <span class="vocab" data-cn="喷发柱">eruption column</span> rose more than 20 kilometers into the atmosphere, spewing ash and volcanic gases across the island. Within minutes, a scorching <span class="vocab" data-cn="火山碎屑流">pyroclastic flow</span>—a dense avalanche of hot gas, ash, and rock moving at speeds exceeding 100 km/h—descended the northern slope, racing down the valley toward Saint‑Pierre. The flow arrived like a wall of fire, incinerating everything in its path and leaving only skeletal stone walls standing amidst a sea of gray ash.`,
    `When dawn broke, the devastation was total: an estimated 28,000 to 30,000 people lay beneath a thick blanket of ash and debris. Only a handful of survivors—most famously a prisoner named Louis-Auguste Cyparis who had been locked in a cell with a small ventilation shaft—escaped the inferno. The catastrophe shocked the scientific community worldwide. It became a pivotal case study for <span class="vocab" data-cn="火山学">volcanology</span>, prompting researchers to investigate the dynamics of pyroclastic flows, gas emissions, and the structural failure of volcanic domes.`,
    `In the aftermath, French colonial authorities faced criticism for their inadequate response. The tragedy highlighted the need for organized <span class="vocab" data-cn="疏散">evacuation</span> plans and systematic monitoring. By 1905, a network of seismographs and gas‑sampling stations had been installed around active volcanoes in the Caribbean and elsewhere. These instruments allowed scientists to detect subtle changes in seismic activity and sulfur dioxide levels—key indicators that could trigger early warnings before an eruption became catastrophic.` ,
    `The lessons from Mount Pelée were not forgotten. When the volcano erupted again in 1929, a well‑coordinated evacuation saved thousands of lives, demonstrating the practical value of the new monitoring techniques. Modern volcanology now employs satellite remote sensing, real‑time gas spectroscopy, and computer models to forecast eruptions with unprecedented accuracy. The legacy of the 1902 disaster is evident in today’s global <span class="vocab" data-cn="灾害响应">disaster response</span> frameworks, which integrate scientific alerts with emergency management agencies to protect vulnerable communities.` ,
    `Today, Mount Pelée stands as a solemn reminder of nature’s power and humanity’s capacity to learn from tragedy. Its scarred summit, now covered by a permanent crater rim, attracts scientists and tourists alike, each step echoing the lessons forged in ash. The 1902 eruption not only reshaped volcanic science but also cemented the principle that timely data, clear communication, and decisive action are essential to mitigate the impact of natural hazards.` ,
  ],
  vocabulary: [
    { word: 'Mount Pelée', cn: '火山' },
    { word: 'magma chamber', cn: '岩浆库' },
    { word: 'seismograph', cn: '地震仪' },
    { word: 'eruption column', cn: '喷发柱' },
    { word: 'pyroclastic flow', cn: '火山碎屑流' },
    { word: 'volcanology', cn: '火山学' },
    { word: 'evacuation', cn: '疏散' },
    { word: 'disaster response', cn: '灾害响应' },
  ],
};

export default article;
