import type { Article } from '../../types/index.ts';

// 文件意图：维护《Jack Phillips, the Titanic’s Wireless Operator: Heroism, Early Radio, and Maritime Safety Reforms》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00222 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00222',
  slug: 'jack-phillips-the-titanic-s-wireless-operator-heroism-early-radio-and-maritime-safety-reforms',
  title: 'Jack Phillips, the Titanic’s Wireless Operator: Heroism, Early Radio, and Maritime Safety Reforms',
  subtitle: 'How a young telegraphist shaped modern maritime communication',
  summary: 'The story of Jack Phillips reveals early radio technology, heroic duty during the Titanic disaster, and the safety reforms that followed.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `Born in Godalming, England, in 1887, <span class="vocab" data-cn="无线电操作员">Jack Phillips</span> entered the world of <span class="vocab" data-cn="电报机">telegraphy</span> as a teenager. By age sixteen he had secured an apprenticeship with the Marconi Company, learning to operate the newly patented <span class="vocab" data-cn="马可尼系统">Marconi system</span>. His skill earned him a coveted position aboard luxury liners, and in 1912 he was assigned to the RMS Titanic as its chief <span class="vocab" data-cn="无线电操作员">wireless operator</span>, responsible for sending passenger messages and ship‑to‑ship traffic reports.`,
    `The Titanic’s wireless room housed a powerful spark‑gap transmitter, capable of reaching ships dozens of miles away. On the night of 14 April, Phillips was busy handling personal telegrams when the lookout spotted an iceberg ahead. Within minutes the great liner struck the ice, and the ship began to list. Phillips immediately switched from routine traffic to emergency mode, first transmitting a <span class="vocab" data-cn="CQD信号">CQD</span> call—a pre‑existing distress code—before adopting the newer <span class="vocab" data-cn="SOS信号">SOS signal</span>. His rapid response set the tone for the frantic rescue effort that followed.`,
    `As the hull flooded, Phillips worked alongside his junior colleague, Harold Bride, to keep the transmitter running. Despite water seeping into the room and the constant roar of the ship’s engines, he sent a steady stream of messages: ice warnings to nearby vessels, passenger casualty reports, and pleas for assistance. One of his most famous transmissions reached the RMS Carpathia, which altered its course and arrived hours later to rescue over 700 survivors. Phillips’ dedication meant that even as the Titanic sank, the wireless room remained a beacon of hope in the dark Atlantic.`,
    `The heroism displayed by Phillips did not go unnoticed. Survivors recalled his calm voice over the crackling airwaves, urging them to stay afloat and reassuring families ashore that help was on the way. Unfortunately, the frigid water claimed both Phillips and Bride shortly after the ship disappeared beneath the waves. Their sacrifice sparked a worldwide outcry, prompting governments and shipping companies to scrutinize existing <span class="vocab" data-cn="船舶防撞规则">collision regulations</span> and communication protocols.`,
    `In the wake of the disaster, the British Board of Trade convened an inquiry that highlighted the lack of mandatory 24‑hour radio watch on passenger ships. The findings directly influenced the drafting of the International Convention for the Safety of Life at Sea (SOLAS) in 1914, which required all ocean liners to maintain continuous wireless monitoring and to equip lifeboats with signaling devices. In the United States, the Radio Act of 1912 was amended to enforce stricter licensing for operators and to standardize distress procedures, ensuring that future tragedies would not suffer from communication gaps.`,
    `The reforms born from Titanic’s tragedy reshaped maritime safety for the next century. Modern vessels now rely on satellite‑based systems such as GMDSS (Global Maritime Distress and Safety System), but the core principle remains the same: a vigilant operator must be ready to transmit distress alerts at any moment. Jack Phillips’ legacy lives on in every ship’s bridge, where crews train daily on emergency protocols that trace their lineage back to his brave actions on that fateful night.`,
    `Today, museums and memorials honor Phillips as both a pioneer of early radio and a symbol of selfless duty. His story is taught in maritime academies alongside lessons on engineering, navigation, and ethics. By remembering the young man who stayed at his post while the world watched the Titanic sink, we recognize how individual courage can drive technological progress and inspire lasting reforms that protect countless lives at sea.`,
  ],
  vocabulary: [
    { word: 'wireless operator', cn: '无线电操作员' },
    { word: 'telegraphy', cn: '电报机' },
    { word: 'Marconi system', cn: '马可尼系统' },
    { word: 'SOS signal', cn: 'SOS信号' },
    { word: 'collision regulations', cn: '船舶防撞规则' },
    { word: 'maritime safety reforms', cn: '海上安全法规' },
  ],
};

export default article;
