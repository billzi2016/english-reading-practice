import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Lost City of Ubar: Uncovering the “Atlantis of the Sands” and Its Desert Secrets》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00135 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00135',
  slug: 'the-lost-city-of-ubar-uncovering-the-atlantis-of-the-sands-and-its-desert-secrets',
  title: 'The Lost City of Ubar: Uncovering the “Atlantis of the Sands” and Its Desert Secrets',
  subtitle: 'How modern archaeology revealed a legendary desert metropolis.',
  summary: 'A narrative journey through the discovery, excavation, and mysteries of the ancient city known as Ubar.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1990s, a team led by American explorer Nicholas Clapp set out to verify an age‑old legend whispered among Bedouin tribes: a city of gold swallowed by the Arabian desert. Their destination was the remote interior of Oman, where satellite images had hinted at a rectangular ruin hidden beneath dunes. When they arrived at the site now called Shisr, they uncovered massive stone walls and collapsed towers that matched the descriptions of the fabled <span class="vocab" data-cn="乌巴尔，传说中的失落之城">Ubar</span>.`,
    `The name Ubar appears in the <span class="vocab" data-cn="古兰经中提到的伊拉姆之柱">Quranic reference to “Iram of the Pillars,”</span> a place described as a thriving hub of wealth and trade. Historians have long debated whether Iram referred to a real city or a poetic metaphor, but the archaeological evidence at Shisr gave new weight to the literal interpretation. Pottery shards dated to the Bronze Age, along with inscriptions in early Arabic script, suggested continuous occupation from roughly 2500 BCE to the early Islamic period.` ,
    `One of the most striking discoveries was an extensive network of <span class="vocab" data-cn="古代灌溉系统">falaj</span> channels—underground water conduits that tapped deep aquifers and delivered fresh water to the settlement. In a region where surface water is scarce, such engineering marvels allowed Ubar’s inhabitants to sustain large herds of camels and support bustling markets. The presence of these canals also explains how caravans could travel long distances across the Rubʿ al‑Khali, or “Empty Quarter,” without succumbing to dehydration.` ,
    `The city’s prosperity hinged on its role in the <span class="vocab" data-cn="乳香贸易">Frankincense trade</span>. Frankincense resin, harvested from Boswellia trees growing on Oman's southern slopes, was prized across the ancient world for religious rituals and medicine. Ubar functioned as a distribution hub where Bedouin traders exchanged resin for silver, spices, and textiles before loading their goods onto ships bound for the Mediterranean and South Asia. Archaeologists uncovered storage jars stamped with merchant marks that match those found in distant ports such as Alexandria and Hormuz.` ,
    `Modern technology played an unexpected part in resurrecting Ubar’s story. The team employed <span class="vocab" data-cn="卫星影像">satellite imagery</span> from NASA’s Landsat program to identify subtle variations in soil composition that indicated buried structures. These grayscale patterns, invisible to the naked eye, guided ground surveys and saved months of blind digging. This interdisciplinary approach—combining traditional fieldwork with remote sensing—has since become a standard practice in desert archaeology.` ,
    `Yet many mysteries remain. Some scholars argue that Shisr represents only one node of a larger network of settlements collectively called “Ubar,” while others suggest the city’s decline was precipitated by a sudden shift in trade routes after the rise of maritime commerce in the 7th century CE. Additionally, local legends speak of a catastrophic sandstorm that buried the city overnight—a dramatic image that may be more myth than fact, but it continues to capture imaginations worldwide.` ,
    `Today, the ruins of Ubar stand as a testament to human ingenuity in one of Earth’s harshest environments. Visitors can walk among the collapsed arches and imagine caravans laden with fragrant resin passing beneath towering walls. The site also serves as a reminder that even deserts, often perceived as empty, hold layers of history waiting to be uncovered by curious minds equipped with both ancient curiosity and modern tools.` ,
  ],
  vocabulary: [
    { word: 'Ubar', cn: '乌巴尔，传说中的失落之城' },
    { word: 'Quranic reference to “Iram of the Pillars”', cn: '古兰经中提到的伊拉姆之柱' },
    { word: 'falaj', cn: '古代灌溉系统' },
    { word: 'Frankincense trade', cn: '乳香贸易' },
    { word: 'satellite imagery', cn: '卫星影像' },
    { word: 'Rubʿ al‑Khali', cn: '阿拉伯空白地区（“空荡之地”）' },
  ],
};

export default article;
