import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 2004 Indian Ocean Tsunami: A Sudden Catastrophe that Redefined Global Disaster Response》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00480 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00480',
  slug: 'the-2004-indian-ocean-tsunami-a-sudden-catastrophe-that-redefined-global-disaster-response',
  title: 'The 2004 Indian Ocean Tsunami: A Sudden Catastrophe that Redefined Global Disaster Response',
  subtitle: 'How a single natural disaster reshaped the world’s approach to emergency management.',
  summary: 'An in‑depth look at the 2004 tsunami and its lasting influence on international disaster response systems.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On December 26, 2004, a magnitude‑9.1 <span class="vocab" data-cn="海啸">tsunami</span> was triggered by an undersea earthquake along the <span class="vocab" data-cn="俯冲带">subduction zone</span> off the coast of Sumatra. Within minutes, a series of towering waves raced across the Indian Ocean at speeds exceeding 800 km/h, striking the shores of Indonesia, Sri Lanka, India, Thailand and beyond. The sheer force of the water demolished villages, swept away entire towns, and left an estimated 230,000 people dead or missing—a tragedy that shocked the global conscience.</p>`,
    `The devastation was not uniform; low‑lying islands such as the Andaman and Nicobar archipelago were completely inundated, while densely populated coastal cities like Banda Aceh suffered catastrophic loss of life and infrastructure. In many places, entire generations vanished in a single night, leaving behind orphaned children and shattered economies. The scale of destruction overwhelmed local authorities, whose communication networks collapsed under the weight of damaged telephone lines and power outages.</p>`,
    `In the immediate aftermath, survivors faced a desperate scramble for food, clean water, and medical care. International media broadcast harrowing images of people clinging to debris, prompting an outpouring of sympathy worldwide. Yet the sheer magnitude of the crisis exposed glaring gaps in coordination: aid trucks were stranded at broken bridges, and relief supplies piled up at makeshift <span class="vocab" data-cn="物流枢纽">logistics hubs</span> without clear distribution plans.</p>`,
    `Non‑governmental organizations (NGOs) such as the Red Cross, Médecins Sans Frontières, and Oxfam mobilized thousands of volunteers within days. Their rapid deployment highlighted the power of pre‑existing networks, but also underscored the need for a unified command structure. The United Nations convened an emergency summit in Bangkok, where representatives from affected nations agreed to share resources and information more transparently.</p>`,
    `One of the most enduring legacies of the disaster was the birth of a regional <span class="vocab" data-cn="海啸预警系统">early warning system</span>. Prior to 2004, the Indian Ocean lacked any coordinated alert mechanism. In response, the UNESCO‑UNESCO Intergovernmental Oceanographic Commission (IOC) spearheaded the establishment of a network of seismic stations, sea‑level gauges, and satellite buoys capable of detecting abnormal wave activity within minutes. By 2006, participating countries could broadcast alerts via radio, television, and mobile phones, dramatically reducing casualties in subsequent events.</p>`,
    `Technology also played a pivotal role in reshaping response strategies. Satellite operators activated the <span class="vocab" data-cn="国际空间灾害宪章">International Charter on Space and Major Disasters</span>, providing near‑real‑time <span class="vocab" data-cn="卫星影像">satellite imagery</span> to map flooded zones, assess damage, and plan rescue routes. GPS devices enabled relief teams to navigate previously unknown terrain, while the internet facilitated crowdsourced mapping projects such as OpenStreetMap, which volunteers updated with on‑the‑ground information.</p>`,
    `The 2004 tsunami taught the world that disaster response must be both swift and coordinated across borders. Today, emergency drills routinely incorporate multi‑agency simulations, and many nations have integrated community education programs to teach residents how to recognize natural warning signs. While no system can prevent loss of life entirely, the lessons learned from that fateful night continue to save countless lives whenever nature unleashes its fury.</p>`,
  ],
  vocabulary: [
    { word: 'tsunami', cn: '海啸' },
    { word: 'subduction zone', cn: '俯冲带' },
    { word: 'early warning system', cn: '海啸预警系统' },
    { word: 'humanitarian aid', cn: '人道主义援助' },
    { word: 'satellite imagery', cn: '卫星影像' },
    { word: 'International Charter on Space and Major Disasters', cn: '国际空间灾害宪章' },
  ],
};

export default article;
