import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Terracotta Army Unearthed: Archaeology, Politics, and the Quest to Recreate an Ancient Battlefield》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00132 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00132',
  slug: 'the-terracotta-army-unearthed-archaeology-politics-and-the-quest-to-recreate-an-ancient-battlefield',
  title: 'The Terracotta Army Unearthed: Archaeology, Politics, and the Quest to Recreate an Ancient Battlefield',
  subtitle: 'How a farmer’s discovery sparked scientific intrigue and national debate.',
  summary: 'From a chance find in 1974 to high‑tech battlefield simulations, the story of China’s <span class="vocab" data-cn="兵马俑">Terracotta Army</span> intertwines archaeology, politics, and modern technology.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early summer of 1974 a group of farmers were digging a well near the town of Xi’an when their shovel struck something hard. What emerged was not a cache of pottery, but rows upon rows of life‑size clay soldiers, each with distinct facial features and armor. This accidental find marked the birth of the world’s largest <span class="vocab" data-cn="地下军队">burial complex</span>, later identified as the funerary guard of the first emperor of a unified China.`,
    `The site, now known as the Mausoleum of <span class="vocab" data-cn="秦始皇">Qin Shi Huang</span>, had been concealed for over two millennia beneath layers of loess soil. Archaeologists employed meticulous <span class="vocab" data-cn="考古层位学">archaeological stratigraphy</span> to peel back the earth, revealing not only soldiers but also chariots, horses, and a sophisticated drainage system. Each artifact was catalogued, photographed, and often 3‑D scanned, creating a digital archive that would later become crucial for preservation.`,
    `Politically, the discovery arrived at a delicate moment in Chinese history. The Cultural Revolution had just ended, and the new leadership sought symbols of national pride to unify a fragmented society. The Terracotta Army, with its sheer scale and imperial grandeur, was quickly promoted as a testament to ancient ingenuity and modern socialist achievement. State media broadcast documentaries, while school textbooks added chapters celebrating the “miracle of the earth.”`,
    `However, this politicization also sparked controversy among scholars. Some argued that the government’s emphasis on spectacle threatened rigorous scientific inquiry, pressuring researchers to produce results that aligned with patriotic narratives. International collaborations were cautiously welcomed; joint teams from Japan and the United Kingdom helped refine excavation techniques, but all work remained under strict oversight of the Chinese Ministry of Culture.`,
    `In recent decades, technology has opened a new frontier for understanding the army’s original purpose. Researchers have used <span class="vocab" data-cn="数字重建">digital reconstruction</span> to model how the soldiers might have been arranged in battle formation. By integrating LiDAR scans with historical texts describing Qin military tactics, they generated a virtual battlefield that can be explored in VR. This immersive experience allows scholars to test hypotheses about troop deployment and even simulate the acoustic environment of ancient war drums.`,
    `The quest to recreate the original battlefield also raises ethical questions about cultural heritage. While digital models enable global audiences to appreciate the site without physical intrusion, they risk oversimplifying complex historical contexts. Conservationists stress that any reconstruction must respect the integrity of the actual artifacts, advocating for minimal handling and emphasizing in‑situ preservation whenever possible.`,
    `Today, visitors to the Xi’an Museum walk among dozens of restored figures, each illuminated by soft lighting that highlights their individual details. Behind the scenes, a team of conservators continues to battle oxidation and micro‑cracks, using nanomaterials to stabilize fragile joints. The Terracotta Army remains both a window into an ancient empire and a mirror reflecting contemporary debates about history, identity, and the role of technology in archaeology.`,
  ],
  vocabulary: [
    { word: 'Terracotta', cn: '陶土' },
    { word: 'burial complex', cn: '墓葬群' },
    { word: 'Qin Shi Huang', cn: '秦始皇' },
    { word: 'archaeological stratigraphy', cn: '考古层位学' },
    { word: 'digital reconstruction', cn: '数字重建' },
    { word: 'cultural heritage', cn: '文化遗产' },
  ],
};

export default article;
