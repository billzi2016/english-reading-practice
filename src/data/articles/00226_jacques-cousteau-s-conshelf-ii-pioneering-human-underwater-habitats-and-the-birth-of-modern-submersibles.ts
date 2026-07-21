import type { Article } from '../../types/index.ts';

// 文件意图：维护《Jacques Cousteau’s Conshelf II: Pioneering Human Underwater Habitats and the Birth of Modern Submersibles》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00226 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00226',
  slug: 'jacques-cousteau-s-conshelf-ii-pioneering-human-underwater-habitats-and-the-birth-of-modern-submersibles',
  title: 'Jacques Cousteau’s Conshelf II: Pioneering Human Underwater Habitats and the Birth of Modern Submersibles',
  subtitle: 'How a daring experiment in the Mediterranean reshaped marine science and engineering.',
  summary: 'Explore the story behind Conshelf II, the first successful underwater habitat, and its lasting influence on submersible technology.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1960s Jacques Cousteau was already a household name thanks to his pioneering work with scuba gear and marine documentaries. Yet he felt that surface‑bound diving limited humanity’s ability to study the ocean’s depths for extended periods. To test this idea, Cousteau partnered with French naval engineers and the renowned oceanographer Henri Girard to design an <span class="vocab" data-cn="水下居住设施">underwater habitat</span> that could support a crew of aquanauts for days at a time.`,
    `The first prototype, Conshelf I, was installed off the coast of Marseille in 1962 and housed three men at a depth of 12 meters. While modest, it proved that humans could live comfortably under pressure without suffering decompression sickness—a breakthrough known as <span class="vocab" data-cn="饱和潜水">saturation diving</span>. Building on this success, Cousteau announced the more ambitious Conshelf II project for 1963, aiming to place a habitat at 10 meters and connect it to a series of small <span class="vocab" data-cn="潜水器">submersibles</span> that would ferry supplies and conduct research.</`,
    `Conshelf II was anchored near the island of Port-Cros in the French Riviera. Its main living chamber measured roughly 4 meters by 2 meters, constructed from thick steel to withstand <span class="vocab" data-cn="水压">hydrostatic pressure</span>. Inside, a simple but effective life‑support system regulated oxygen, removed carbon dioxide, and maintained temperature. The crew—Cousteau himself, marine biologist Jacques-Yves Cousteau Jr., and two engineers—spent 30 hours inside, conducting experiments on marine flora, testing new camera equipment, and even cooking meals on a small stove designed for the high‑pressure environment.</`,
    `One of the most iconic images from Conshelf II shows the crew exiting the habitat through an airlock and stepping onto the seabed in full diving gear. This moment captured public imagination and demonstrated that humans could not only survive but also work productively beneath the waves. The mission also highlighted the importance of a reliable <span class="vocab" data-cn="压载系统">ballast system</span>, which allowed the habitat to be lowered and raised safely without disturbing the surrounding marine life.</`,
    `Beyond its immediate scientific achievements, Conshelf II sparked a wave of interest in designing more capable <span class="vocab" data-cn="潜水艇">submersibles</span>. Cousteau’s team refined the SP‑350 “Diving Saucer,” a compact vehicle that could dive to 400 meters and be piloted by a single person. The lessons learned from the habitat’s pressure hull, life‑support loops, and modular construction directly informed the engineering of these later submersibles, making them more reliable for deep‑sea exploration.</`,
    `The legacy of Conshelf II extends into modern marine research stations such as NOAA’s Aquarius Reef Base and the European Union’s SEABED projects. Contemporary habitats now incorporate advanced materials like carbon‑fiber composites, sophisticated computer‑controlled environmental monitoring, and even renewable energy sources. Yet the core principle remains unchanged: providing a safe, pressurized environment that lets scientists stay underwater long enough to observe ecosystems in their natural state.`,
    `In retrospect, Conshelf II was more than an experimental dive; it was a cultural milestone that shifted public perception of the ocean from a hostile frontier to a realm where humans could live and work. The project demonstrated that with careful engineering—balancing hull integrity, ballast control, and life‑support systems—underwater habitats could become viable platforms for scientific discovery, resource monitoring, and even tourism. As modern submersibles continue to push deeper into the abyss, they carry forward the spirit of Cousteau’s daring experiment, reminding us that curiosity beneath the waves can drive technological innovation on land as well.`,
  ],
  vocabulary: [
    { word: 'underwater habitat', cn: '水下居住设施' },
    { word: 'saturation diving', cn: '饱和潜水' },
    { word: 'submersible', cn: '潜水器' },
    { word: 'hydrostatic pressure', cn: '水压' },
    { word: 'ballast system', cn: '压载系统' },
    { word: 'hull integrity', cn: '船体完整性' },
  ],
};

export default article;
