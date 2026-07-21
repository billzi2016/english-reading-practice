import type { Article } from '../../types/index.ts';

// 文件意图：维护《Into the Icy Abyss: The Lost Franklin Expedition and the Hunt for Arctic Truths》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00101 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00101',
  slug: 'into-the-icy-abyss-the-lost-franklin-expedition-and-the-hunt-for-arctic-truths',
  title: 'Into the Icy Abyss: The Lost Franklin Expedition and the Hunt for Arctic Truths',
  subtitle: 'A Tale of Victorian Ambition, Inuit Knowledge, and Modern Discovery',
  summary: 'Explore how a 19th‑century British quest vanished in the Arctic and how 21st‑century science finally uncovered its secrets.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1845, Sir <span class="vocab" data-cn="约翰·富兰克林">John Franklin</span> set sail from England with two steam‑powered ironclads, HMS <span class="vocab" data-cn="伊瑞布斯号">Erebus</span> and HMS <span class="vocab" data-cn="恐惧号">Terror</span>. Their mission was to chart the elusive Northwest Passage, a sea route that had tantalized European powers for centuries. The expedition carried over 130 men, scientific instruments, and a cache of provisions meant to sustain them through the harsh polar winter. Yet, after a brief stop at Beechey Island, the ships vanished into the ice, leaving behind only faint footprints in history.</span>`,
    `For decades, families of the missing sailors petitioned the British government for answers. Official inquiries relied heavily on <span class="vocab" data-cn="口述历史">oral testimony</span> from Inuit communities who had observed strange lights and abandoned camps along the coast. These accounts hinted at a desperate struggle: crews abandoning their vessels, attempting to trek southward on <span class="vocab" data-cn="雪橇">sledges</span>, and succumbing to scurvy and starvation. Yet, without physical evidence, the Royal Navy could only speculate.</span>`,
    `The first concrete clue emerged in 1859 when explorer Sir <span class="vocab" data-cn="弗朗西斯·德雷克">Francis McClintock</span> discovered a cairn on King William Island containing a note that confirmed the ships had been trapped and abandoned. This revelation sparked a wave of rescue missions, each more ambitious than the last, but none succeeded in locating the wrecks. The Arctic’s shifting ice and treacherous weather turned every search into a gamble against nature.</span>`,
    `Fast forward to the early 21st century: advances in <span class="vocab" data-cn="声纳技术">sonar technology</span> and satellite imaging gave researchers new tools to scan the seafloor beneath miles of ice. In September 2014, a Canadian team led by marine archaeologist <span class="vocab" data-cn="保罗·哈里斯">Paul Harris</span> detected an anomalous metallic shape near King William Island. Subsequent dives confirmed it was HMS Erebus, remarkably preserved in the cold, low‑oxygen waters.</span>`,
    `Two years later, a similar effort uncovered HMS Terror in Terror Bay, off the coast of Nunavut. The discovery was not merely a triumph of engineering; it validated Inuit oral histories that had spoken of “the two great iron ships” for generations. Researchers used a <span class="vocab" data-cn="磁力仪">magnetometer</span> to map the wrecks’ exact positions, allowing them to create detailed 3‑D models without disturbing the fragile remains.</span>`,
    `The findings have reshaped our understanding of Victorian polar exploration. Analysis of recovered artifacts—such as a preserved tin of <span class="vocab" data-cn="柠檬酸">citrus concentrate</span>, a set of navigational sextants, and even personal journals—reveals the crew’s attempts to combat scurvy and navigate through uncharted waters. Moreover, climate scientists are studying the ice that once encased the ships, using it as a proxy for past <span class="vocab" data-cn="气候变化">climate change</span> patterns.</span>`,
    `Today, the story of the Franklin Expedition serves as a reminder that history is often a dialogue between written records and living memory. The collaboration between archaeologists, Inuit elders, and modern technology continues to uncover layers of truth hidden beneath the Arctic’s icy veil. As melting ice opens new passages, future explorers may yet find more secrets buried in this frozen abyss.</span>`,
  ],
  vocabulary: [
    { word: 'John Franklin', cn: '约翰·富兰克林' },
    { word: 'Erebus', cn: '伊瑞布斯号' },
    { word: 'Terror', cn: '恐惧号' },
    { word: 'oral testimony', cn: '口述历史' },
    { word: 'sledges', cn: '雪橇' },
    { word: 'sonar technology', cn: '声纳技术' },
    { word: 'magnetometer', cn: '磁力仪' },
    { word: 'citrus concentrate', cn: '柠檬酸' },
    { word: 'climate change', cn: '气候变化' },
  ],
};

export default article;
