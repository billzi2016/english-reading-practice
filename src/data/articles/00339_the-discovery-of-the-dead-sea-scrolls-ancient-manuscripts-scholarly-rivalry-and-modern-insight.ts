import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of the Dead Sea Scrolls: Ancient Manuscripts, Scholarly Rivalry, and Modern Insight》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00339 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00339',
  slug: 'the-discovery-of-the-dead-sea-scrolls-ancient-manuscripts-scholarly-rivalry-and-modern-insight',
  title: 'The Discovery of the Dead Sea Scrolls: Ancient Manuscripts, Scholarly Rivalry, and Modern Insight',
  subtitle: 'How a shepherd’s find reshaped our view of ancient Judaism',
  summary: 'A narrative of the 1947 discovery, the ensuing academic battles, and what modern science reveals.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In early 1947 a Bedouin shepherd named Muhammad al‑Tanukiy was guiding his flock near the northwestern shore of the <span class="vocab" data-cn="死海">Dead Sea</span> when his goat knocked over a stone and revealed a sealed jar. Inside lay dozens of brittle, rolled parchments that would later be known as the <span class="vocab" data-cn="死海卷轴">Dead Sea Scrolls</span>. The shepherd sold the jars to an antiquities dealer in Bethlehem, setting off a chain reaction that would draw scholars from around the world to a remote desert landscape.`,
    `The scrolls were hidden in a series of limestone caves at <span class="vocab" data-cn="库姆兰">Qumran</span>, a site already noted by early 20th‑century explorers for its unusual architecture. When archaeologists finally entered the caves, they found not only biblical manuscripts but also sectarian writings, legal documents, and liturgical texts, all written on both parchment and <span class="vocab" data-cn="羊皮纸">parchment</span>. The sheer variety suggested a vibrant community that had meticulously copied and preserved its literature for centuries.`,
    `News of the find sparked an intense scholarly rivalry. Israeli archaeologist Eleazar Sukenik, who first examined the fragments, argued that they belonged to a Jewish sect living at Qumran. Across the Mediterranean, British scholar John Coggins emphasized stylistic differences, while French Dominican Roland de Vaux led a French‑Israeli excavation team that sought to prove a direct link between the caves and the community. Central to their debates was <span class="vocab" data-cn="古文字学">paleography</span>—the study of ancient handwriting—which each side used to date the scrolls and assign authorship, often reaching contradictory conclusions.`,
    `Among the most striking discoveries were portions of every book of the Hebrew Bible except Esther, confirming that these texts had a broader circulation than previously thought. Yet the scrolls also contained non‑canonical works such as the <span class="vocab" data-cn="以赛亚书注释">War Scroll</span> and the <span class="vocab" data-cn="哈巴谷书注释">Community Rule</span>, prompting scholars to reconsider what counted as <span class="vocab" data-cn="正典的">canonical</span> during the <span class="vocab" data-cn="第二圣殿时期">Second Temple period</span>. These writings offered fresh material for biblical <span class="vocab" data-cn="释经学">exegesis</span>, revealing how ancient Jews interpreted prophecy and law.</`,
    `In the decades that followed, advances in scientific techniques transformed our understanding of the scrolls. <span class="vocab" data-cn="放射性碳测年法">Radiocarbon dating</span> placed many of the manuscripts between 250 BCE and 100 CE, while DNA analysis of animal skins identified the parchment as originating from goats and sheep native to the region. Such data helped resolve disputes over the scrolls’ chronology and demonstrated that the community at Qumran had access to sophisticated material resources.`,
    `The impact of the Dead Sea Scrolls extends far beyond academia. By illuminating the diversity of Jewish thought in the <span class="vocab" data-cn="第二圣殿时期">Second Temple period</span>, they provide a crucial backdrop for early Christian writings and help explain why certain texts were later excluded from the canon. Moreover, the scrolls have sparked public fascination with ancient mysteries, inspiring museum exhibitions, documentaries, and even popular fiction.`,
    `Nevertheless, questions remain. Some scholars still argue that the scrolls were not produced by an isolated sect but rather collected from various libraries across Judea. The identification of the community as <span class="vocab" data-cn="爱色尼派">Essene</span>—based largely on accounts by Josephus and Philo—continues to be debated, with alternative theories proposing a broader network of scribes. Ongoing excavations and textual analyses keep the conversation alive, reminding us that history is an ever‑evolving dialogue.`,
    `Today, cutting‑edge <span class="vocab" data-cn="数字成像技术">digital imaging</span> allows researchers to examine previously unreadable fragments without damaging them. High‑resolution 3D scans and multispectral photography reveal ink traces invisible to the naked eye, opening new avenues for translation and interpretation. As technology advances, the Dead Sea Scrolls remain a living laboratory, bridging ancient tradition with modern insight.`,
  ],
  vocabulary: [
    { word: 'Dead Sea', cn: '死海' },
    { word: 'Dead Sea Scrolls', cn: '死海卷轴' },
    { word: 'Qumran', cn: '库姆兰' },
    { word: 'paleography', cn: '古文字学' },
    { word: 'parchment', cn: '羊皮纸' },
    { word: 'canonical', cn: '正典的' },
    { word: 'exegesis', cn: '释经学' },
    { word: 'Second Temple period', cn: '第二圣殿时期' },
    { word: 'radiocarbon dating', cn: '放射性碳测年法' },
    { word: 'Essene', cn: '爱色尼派' },
    { word: 'digital imaging', cn: '数字成像技术' },
  ],
};

export default article;
