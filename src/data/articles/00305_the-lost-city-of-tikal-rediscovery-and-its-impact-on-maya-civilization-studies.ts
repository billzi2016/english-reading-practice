import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Lost City of Tikal: Rediscovery and Its Impact on Maya Civilization Studies》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00305 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00305',
  slug: 'the-lost-city-of-tikal-rediscovery-and-its-impact-on-maya-civilization-studies',
  title: 'The Lost City of Tikal: Rediscovery and Its Impact on Maya Civilization Studies',
  subtitle: 'How a jungle ruin reshaped our view of the ancient Maya.',
  summary: 'Exploring the 19th‑century rediscovery of Tikal and its lasting influence on archaeology and history.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1840s, a group of European explorers led by the German naturalist <span class="vocab" data-cn="德国自然学家">Karl von Scherzer</span> stumbled upon towering pyramids hidden beneath the Guatemalan rainforest. Their journals described a “city of stone” rising from the mist, but it was not until the American archaeologist <span class="vocab" data-cn="美国考古学家">Alfred P. Maudslay</span> returned in 1881 that systematic documentation began. Maudslay’s painstaking photographs and measured drawings introduced the world to <span class="vocab" data-cn="蒂卡尔遗址">Tikal</span>, a name that would soon become synonymous with Maya grandeur.`,
    `The initial excitement was tempered by the sheer scale of the site. Tikal sprawls over more than 16 square kilometers, encompassing towering <span class="vocab" data-cn="金字塔式神庙">temple‑pyramids</span>, expansive plazas, and a network of causeways called sacbeob. Early excavations focused on the most visible structures—Temple I (the “Temple of the Great Jaguar”) and Temple II (“Temple of the Masks”). Within these monuments, archaeologists uncovered elaborate <span class="vocab" data-cn="象形文字铭文">hieroglyphic inscriptions</span> that recorded dynastic successions, wars, and tribute relationships, providing a rare written voice for a civilization otherwise known through its art and architecture.`,
    `One of the most transformative discoveries came in 1962 when a burial chamber beneath Temple I was opened, revealing a pristine <span class="vocab" data-cn="王墓">royal tomb</span>. The interred individual bore jade ornaments, a polished obsidian dagger, and a ceramic vessel stamped with a date corresponding to 378 CE. This find not only confirmed the identity of the temple’s dedicatee—Jasaw Chan Kʼawiil I—but also demonstrated that Maya elites practiced elaborate funerary rites comparable to those of contemporary Mesoamerican societies.`,
    `The methodological leap forward arrived in the late 20th century with the introduction of <span class="vocab" data-cn="激光雷达">Lidar</span> (Light Detection and Ranging). By emitting laser pulses from aircraft and measuring their return times, researchers could map the forest canopy’s gaps and reveal hidden architectural features. Lidar surveys in 2009 uncovered over 200 previously unknown structures surrounding Tikal’s core, including residential complexes, ballcourts, and defensive walls. This technology reshaped our understanding of Maya urban planning, showing that Tikal was not an isolated ceremonial center but a densely populated metropolis with sophisticated infrastructure.`,
    `The flood of new data prompted scholars to revisit long‑standing debates about the Maya “collapse.” Earlier theories posited that environmental degradation or warfare led to abrupt abandonment. However, the expanded settlement map suggested a more nuanced picture: while certain peripheral districts were indeed vacated during the Terminal Classic period (c. 800–900 CE), the central core continued to thrive for several centuries, maintaining trade links with distant polities such as Calakmul and Copán. This reinterpretation emphasized resilience and regional interaction over simple decline.`,
    `Beyond academic circles, Tikal’s rediscovery has had profound cultural implications for modern Guatemala. The site was declared a UNESCO World Heritage Site in 1979, attracting tourists worldwide and providing a source of national pride. Local Maya communities have increasingly participated in preservation efforts, integrating traditional knowledge with scientific research. Educational programs now teach Guatemalan children about their ancestors’ achievements, fostering a sense of continuity that bridges past and present.`,
    `Today, Tikal remains a living laboratory. Ongoing excavations employ <span class="vocab" data-cn="陶器分类学">ceramic typology</span> to refine chronological sequences, while <span class="vocab" data-cn="地层学">stratigraphy</span> helps reconstruct construction phases of the massive pyramids. Each new artifact or inscription adds a piece to the puzzle of how the Maya organized their cities, governed their societies, and expressed their cosmology. As technology advances and interdisciplinary collaboration deepens, Tikal will undoubtedly continue to illuminate the complexities of one of humanity’s most remarkable civilizations.`,
  ],
  vocabulary: [
    { word: 'Karl von Scherzer', cn: '德国自然学家' },
    { word: 'Alfred P. Maudslay', cn: '美国考古学家' },
    { word: 'Tikal', cn: '蒂卡尔遗址' },
    { word: 'hieroglyphic inscriptions', cn: '象形文字铭文' },
    { word: 'royal tomb', cn: '王墓' },
    { word: 'Lidar', cn: '激光雷达' },
    { word: 'ceramic typology', cn: '陶器分类学' },
    { word: 'stratigraphy', cn: '地层学' },
  ],
};

export default article;
