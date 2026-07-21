import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Lost Egyptian Port of Heracleion: From Sunken Ruins to Modern Discovery》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00188 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00188',
  slug: 'the-lost-egyptian-port-of-heracleion-from-sunken-ruins-to-modern-discovery',
  title: 'The Lost Egyptian Port of Heracleion: From Sunken Ruins to Modern Discovery',
  subtitle: 'How a forgotten harbor resurfaced beneath the Mediterranean',
  summary: 'Explore the rise, fall, and modern excavation of the ancient Egyptian port city Heracleion.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When divers first glimpsed towering stone columns rising from the dark water off Egypt’s coast in 2000, they had stumbled upon a mystery that had haunted scholars for centuries. The site turned out to be <span class="vocab" data-cn="古埃及的沉没港口">Heracleion</span>, a once‑flourishing harbor that vanished beneath the sea, leaving only legends and occasional references in ancient texts.`,
    `Founded during Egypt’s Late Period (c. 664–332 BC), <span class="vocab" data-cn="法老时代的">pharaonic</span> merchants used Heracleion as a gateway between the Nile Delta and the Mediterranean world. Its strategic position allowed it to compete with nearby Alexandria, which would later eclipse it in fame. Temples dedicated to the god Amun‑Ra and the goddess Isis lined its quays, while bustling markets sold grain, papyrus, and exotic goods from across the ancient Near East.`,
    `The city’s sudden disappearance is still debated, but most scholars agree that a combination of seismic activity and rising sea levels played a crucial role. A series of earthquakes in the 2nd century BC likely caused the harbor to sink, while relentless <span class="vocab" data-cn="淤泥">silt</span> from the Nile gradually covered the ruins. Over time, Heracleion became a silent, submerged graveyard, its stone monuments hidden beneath layers of mud and marine growth.`,
    `Modern discovery began with French underwater archaeologist <span class="vocab" data-cn="法国考古学家">Franck Goddio</span>. Using side‑scan sonar and magnetometers, his team detected anomalous shapes on the seabed that hinted at man‑made structures. In 2001, a remotely operated vehicle (ROV) descended into the depths and captured the first images of colossal statues and temple columns, confirming that an entire city lay <span class="vocab" data-cn="沉没的">sunken</span> beneath the waves.`,
    `Excavation has since revealed a treasure trove of artifacts: bronze statues of Greek deities, intricately carved stone reliefs, and dozens of shipwrecks laden with amphorae. Among the most striking finds are several inscribed stelae written in both Egyptian hieroglyphics and Greek script, providing rare bilingual evidence of cultural exchange. The team also uncovered a cache of <span class="vocab" data-cn="楔形文字">cuneiform</span> tablets that record commercial transactions, shedding light on the port’s economic vitality.`,
    `The material culture tells a vivid story of daily life. Researchers have identified <span class="vocab" data-cn="木乃伊化的动物">mummified</span> cats and ibises placed in temple precincts, indicating the continued importance of religious rites even after the city’s decline. Massive <span class="vocab" data-cn="方尖碑">obelisks</span>, some still standing upright on the seabed, demonstrate the engineering prowess of ancient builders. Moreover, the preservation of wooden hulls and cargo offers unprecedented insight into Mediterranean trade routes during the Hellenistic era.`,
    `Preserving a site that is constantly threatened by corrosion, marine life, and shifting sediments poses significant challenges. Goddio’s team employs a combination of in‑situ conservation—covering delicate statues with protective sandbags—and digital documentation using 3D photogrammetry. In 2009, UNESCO recognized the Heracleion–Thonis complex as a World Heritage candidate, emphasizing its global significance and the need for international cooperation to safeguard it.`,
    `Today, the rediscovery of Heracleion reshapes our understanding of ancient maritime networks and reminds us that history can lie literally beneath our feet. Each artifact lifted from the depths adds another piece to the puzzle of how Egypt interacted with neighboring cultures, and it underscores the power of modern technology to revive stories long thought lost.`,
  ],
  vocabulary: [
    { word: 'Heracleion', cn: '古埃及的沉没港口' },
    { word: 'pharaonic', cn: '法老时代的' },
    { word: 'silt', cn: '淤泥' },
    { word: 'Franck Goddio', cn: '法国考古学家' },
    { word: 'cuneiform', cn: '楔形文字' },
    { word: 'mummified', cn: '木乃伊化的动物' },
    { word: 'obelisks', cn: '方尖碑' },
    { word: 'sunken', cn: '沉没的' },
  ],
};

export default article;
