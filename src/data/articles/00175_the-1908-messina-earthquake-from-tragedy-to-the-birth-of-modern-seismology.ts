import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1908 Messina Earthquake: From Tragedy to the Birth of Modern Seismology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00175 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00175',
  slug: 'the-1908-messina-earthquake-from-tragedy-to-the-birth-of-modern-seismology',
  title: 'The 1908 Messina Earthquake: From Tragedy to the Birth of Modern Seismology',
  subtitle: 'How a devastating quake sparked scientific breakthroughs in earthquake study',
  summary: 'An exploration of the 1908 Messina disaster and its pivotal role in shaping modern seismology.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On the night of December 28, 1908, a massive tremor rattled the Strait of Messina, separating Sicily from mainland Italy. The shock registered an estimated <span class="vocab" data-cn="里氏震级">magnitude</span> of 7.1 and lasted for nearly a minute, shattering buildings in both Messina and Reggio Calabria. Within hours, a towering <span class="vocab" data-cn="海啸">tsunami</span> surged inland, sweeping away entire neighborhoods. Contemporary reports speak of streets turned into rivers of debris, with death tolls ranging from 75,000 to over 100,000, making it one of the deadliest earthquakes in European history.`,
    `In the immediate aftermath, rescue efforts were hampered by the sheer scale of destruction and a lack of organized emergency protocols. Survivors described an eerie silence broken only by the distant rumble of <span class="vocab" data-cn="余震">aftershocks</span>, which continued for weeks. At that time, most scientists still relied on anecdotal observations; there were no systematic recordings of ground motion, and the concept of a global network to monitor earthquakes was virtually unheard of.`,
    `The catastrophe, however, became a catalyst for change. Italian geologist <span class="vocab" data-cn="梅尔卡利烈度表">Giuseppe Mercalli</span> arrived in Messina shortly after the quake and began cataloguing damage with meticulous detail. He expanded his earlier work into what would later be known as the Mercalli <span class="vocab" data-cn="烈度表">intensity scale</span>, a qualitative system that grades shaking based on observed effects rather than instrument readings. This scale allowed scientists to compare earthquakes across regions even when instrumental data were unavailable.`,
    `Recognising the need for quantitative measurement, the Italian government commissioned the construction of several <span class="vocab" data-cn="地震仪">seismographs</span> in strategic locations along the peninsula. These early instruments, based on the designs of John Milne and others, recorded ground motion as a trace on smoked paper. The data collected from the Messina event provided the first systematic instrumental record for Italy, revealing patterns that could not be discerned through eyewitness accounts alone.`,
    `The new instrumental records also sparked interest in the underlying causes of such powerful tremors. Researchers began to explore the role of <span class="vocab" data-cn="构造板块">tectonic plates</span> and fault lines, concepts that would later be formalised in plate tectonics theory during the mid‑20th century. Although the full mechanism was not yet understood, the Messina earthquake demonstrated that earthquakes were not random phenomena but could be studied scientifically.`,
    `In the decades following 1908, Italy expanded its seismic monitoring network, eventually joining an international consortium of observatories. The lessons learned from Messina influenced the design of more sensitive <span class="vocab" data-cn="地震仪">seismographs</span>, the standardisation of reporting protocols, and the adoption of both magnitude and intensity scales in tandem. By the time Charles Richter introduced his logarithmic scale in 1935, the foundations laid after Messina allowed for rapid integration of new methods, ushering in the era of modern seismology.`,
    `Today, the memory of the 1908 disaster serves as a solemn reminder of nature’s power and humanity’s capacity to turn tragedy into knowledge. The city of Messina has been rebuilt multiple times, each reconstruction incorporating stricter building codes informed by seismic research. In museums and textbooks, the event is presented not only as a historical calamity but also as the moment when systematic earthquake science truly began to take shape.`,
  ],
  vocabulary: [
    { word: 'magnitude', cn: '里氏震级' },
    { word: 'seismograph', cn: '地震仪' },
    { word: 'aftershock', cn: '余震' },
    { word: 'intensity scale', cn: '烈度表' },
    { word: 'tectonic plates', cn: '构造板块' },
    { word: 'tsunami', cn: '海啸' },
  ],
};

export default article;
