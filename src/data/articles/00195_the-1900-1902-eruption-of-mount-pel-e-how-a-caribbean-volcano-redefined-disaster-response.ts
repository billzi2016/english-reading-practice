import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1900–1902 Eruption of Mount Pelée: How a Caribbean Volcano Redefined Disaster Response》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00195 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00195',
  slug: 'the-1900-1902-eruption-of-mount-pel-e-how-a-caribbean-volcano-redefined-disaster-response',
  title: 'The 1900–1902 Eruption of Mount Pelée: How a Caribbean Volcano Redefined Disaster Response',
  subtitle: 'A Tale of Science, Tragedy, and the Birth of Modern Emergency Management',
  summary: 'Explore how the catastrophic eruption on Martinique reshaped volcanic monitoring and disaster response worldwide.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In early 1900, the dormant cone of <span class="vocab" data-cn="火山">Mount Pelée</span> on the French Caribbean island of Martinique seemed a harmless landmark overlooking the bustling town of Saint‑Pierre. The colonial administration, still recovering from the aftermath of the Franco‑Prussian War, paid little attention to subtle ground tremors, assuming they were merely the result of routine <span class="vocab" data-cn="地震仪">seismograph</span> readings from nearby mining activities.`,
    `That complacency changed dramatically on April 23, 1902, when a sudden explosion sent a towering column of ash and gas skyward. Scientists at the time, including French geologist <span class="vocab" data-cn="地质学家">Gaston Lichtenberg</span>, recognized the event as a classic <span class="vocab" data-cn="火山喷发">volcanic eruption</span>. However, limited communication infrastructure meant that detailed observations reached Paris only days later, delaying any coordinated response.`,
    `The true horror unfolded on May 8, when a massive <span class="vocab" data-cn="侧向爆炸">lateral blast</span> ripped down the mountain’s flank. A scorching <span class="vocab" data-cn="火山碎屑流">pyroclastic flow</span>, traveling at speeds exceeding 100 km/h, surged into Saint‑Pierre, annihilating over 30,000 residents in minutes. The devastation was so complete that the town earned the nickname “the Pompeii of the Caribbean.”`,
    `In the wake of the catastrophe, the French colonial government faced intense criticism for its inadequate <span class="vocab" data-cn="撤离协议">evacuation protocol</span>. Survivors recounted how officials dismissed early warnings as “minor volcanic activity,” a decision that cost countless lives. The tragedy sparked an urgent debate in Parisian scientific circles about the need for systematic monitoring of active volcanoes.`,
    `By late 1902, a joint effort between the French Ministry of Colonies and the newly formed <span class="vocab" data-cn="地质调查局">Geological Survey</span> led to the installation of permanent observation stations on Pelée’s summit. These stations employed barometers, thermometers, and more sensitive seismographs, laying the groundwork for what would become modern volcanology. The data collected helped scientists develop the first predictive models for <span class="vocab" data-cn="火山碎屑流">pyroclastic flow</span> behavior.`,
    `The lessons learned from Pelée resonated far beyond the Caribbean. In 1908, after the catastrophic eruption of Mount Vesuvius in Italy, European governments adopted similar monitoring frameworks, citing the Martinique disaster as a cautionary example. The concept of an “early warning system” entered official policy language, influencing emergency management strategies for earthquakes, tsunamis, and later, industrial accidents.`,
    `Today, Mount Pelée remains one of the world’s most closely watched volcanoes. Satellite imagery, real‑time gas analysis, and community outreach programs ensure that residents are informed long before any dangerous activity escalates. The 1902 eruption stands as a grim reminder that nature’s power can outpace human complacency, but also as a testament to how tragedy can catalyze scientific progress and more humane disaster response.`,
    `For modern readers, the story of Mount Pelée offers both a historical case study and a moral lesson: effective risk communication and swift action are essential components of any <span class="vocab" data-cn="灾害响应">disaster response</span> framework. As climate change intensifies natural hazards worldwide, the legacy of this Caribbean volcano continues to shape policies that aim to protect lives before catastrophe strikes.`,
  ],
  vocabulary: [
    { word: 'Mount Pelée', cn: '佩雷火山' },
    { word: 'seismograph', cn: '地震仪' },
    { word: 'volcanic eruption', cn: '火山喷发' },
    { word: 'lateral blast', cn: '侧向爆炸' },
    { word: 'pyroclastic flow', cn: '火山碎屑流' },
    { word: 'evacuation protocol', cn: '撤离协议' },
    { word: 'Geological Survey', cn: '地质调查局' },
    { word: 'disaster response', cn: '灾害响应' },
  ],
};

export default article;
