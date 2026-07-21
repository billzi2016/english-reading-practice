import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Lost City of Heracleion: Rediscovering an Ancient Egyptian Port Beneath the Sea》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00085 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00085',
  slug: 'the-lost-city-of-heracleion-rediscovering-an-ancient-egyptian-port-beneath-the-sea',
  title: 'The Lost City of Heracleion: Rediscovering an Ancient Egyptian Port Beneath the Sea',
  subtitle: 'How a Sunken Harbor Revealed Secrets of Egypt’s Maritime Past',
  summary: 'An underwater archaeology story that brings the vanished port of Heracleion back to life.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `For centuries sailors whispered about a “city of the sunken ships” off Egypt’s coast, but it was only in the late twentieth century that modern science proved its existence. The ancient port known as Heracleion—also called Thonis—once rivaled Alexandria as a bustling hub for trade between Africa, the Mediterranean, and the Near East. Its sudden disappearance around 1,200 BCE has been linked to earthquakes, rising sea levels, and shifting sandbanks, turning a thriving metropolis into a silent grave beneath the waves.`,
    `The breakthrough came in 1999 when French marine archaeologist <span class="vocab" data-cn="考古学家">Franck Goddio</span> led an expedition equipped with side‑scan sonar and submersible cameras. The team detected a series of anomalous stone formations at a depth of about 15 meters, confirming that the city was indeed <span class="vocab" data-cn="沉没的">submerged</span>. Over the next few years, divers uncovered massive granite columns, bronze statues, and the remains of wooden ships, each artifact offering a tangible link to a world thought lost forever.`,
    `Among the most striking finds were dozens of well‑preserved <span class="vocab" data-cn="纸草卷轴">papyrus scroll</span> fragments bearing religious texts and commercial records. The scrolls’ delicate ink survived thanks to anoxic conditions created by centuries of silt covering. Equally captivating were the intricate relief panels that displayed vivid <span class="vocab" data-cn="图像符号学">iconography</span>—from depictions of the god Amun to scenes of foreign merchants offering exotic goods. These visual narratives help scholars reconstruct daily life and religious practices in a city that once served as Egypt’s gateway to the Mediterranean.</`,
    `The preservation miracle owes much to the thick layer of <span class="vocab" data-cn="泥沙">silt</span> that settled over Heracleion after its collapse. This fine sediment acted like a natural seal, protecting organic materials from decay and shielding stonework from saltwater erosion. Detailed <span class="vocab" data-cn="水文测量学">hydrography</span> surveys have mapped the city’s layout, revealing streets aligned with the Nile’s former channels and harbor basins designed to accommodate both Egyptian barges and Greek triremes. Such engineering insight underscores how ancient builders adapted to a dynamic coastal environment.</`,
    `Heracleion’s rediscovery reshapes our understanding of <span class="vocab" data-cn="法老时期的">pharaonic</span> commerce. Inscriptions on temple walls record tribute shipments from Nubia, incense from Punt, and grain exports bound for the Hellenic world. The presence of Greek pottery alongside Egyptian scarabs illustrates a vibrant exchange of goods, ideas, and artistic styles. Moreover, many artifacts bear <span class="vocab" data-cn="象形文字">hieroglyphics</span> that mention foreign dignitaries, confirming written evidence of diplomatic ties long before the Ptolemaic era.</`,
    `Excavating a city beneath the sea presents unique challenges that demand interdisciplinary expertise. <span class="vocab" data-cn="考古学家">Archaeologists</span> must coordinate with marine engineers, conservators, and divers to carefully lift fragile objects without causing further damage. Once recovered, items undergo desalination and stabilization processes that can take months or even years. The logistical complexity is matched only by the scientific reward: each artifact adds a piece to the puzzle of how ancient societies navigated, traded, and thrived in an interconnected world.</`,
    `Today, Heracleion stands as a testament to human resilience and the power of modern technology to rewrite history. Its sunken streets echo with stories of merchants loading amphorae, priests chanting beside temple altars, and sailors steering vessels through treacherous waters. As researchers continue to map its ruins and translate newly uncovered texts, the lost city reminds us that beneath every wave lies a potential archive waiting to be discovered, offering fresh perspectives on our shared past.`
  ],
  vocabulary: [
    { word: 'submerged', cn: '沉没的' },
    { word: 'pharaonic', cn: '法老时期的' },
    { word: 'archaeologist', cn: '考古学家' },
    { word: 'silt', cn: '泥沙' },
    { word: 'iconography', cn: '图像符号学' },
    { word: 'papyrus scroll', cn: '纸草卷轴' },
    { word: 'hydrography', cn: '水文测量学' },
    { word: 'hieroglyphics', cn: '象形文字' }
  ],
};

export default article;
