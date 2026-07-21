import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Cloned Mammal: Dolly the Sheep and the Ethics of Biotechnology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00091 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00091',
  slug: 'the-first-cloned-mammal-dolly-the-sheep-and-the-ethics-of-biotechnology',
  title: 'The First Cloned Mammal: Dolly the Sheep and the Ethics of Biotechnology',
  subtitle: 'How a single sheep sparked scientific breakthroughs and moral debates.',
  summary: 'Explore the science behind Dolly, the technique that made her possible, and the ethical questions that still shape biotechnology today.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In February 1997, scientists at the Roslin Institute in Scotland announced a breakthrough that captured headlines worldwide: they had produced Dolly, the first mammal cloned from an adult somatic cell. <span class="vocab" data-cn="克隆">Cloning</span> had moved from science‑fiction into the laboratory, and Dolly quickly became both a scientific icon and a cultural lightning rod, prompting excitement about medical possibilities and anxiety over what it meant to “copy” life.`,
    `Dolly was created using <span class="vocab" data-cn="体细胞核移植">somatic cell nuclear transfer</span> (SCNT), a method that replaces the nucleus of an unfertilized egg with the nucleus taken from a donor adult cell. The researchers harvested a <span class="vocab" data-cn="成纤维细胞">fibroblast</span> from a six‑year‑old Finn Dorset ewe, fused it with an enucleated oocyte, and then stimulated the hybrid to begin dividing. After several weeks of culture, one embryo developed into a viable blastocyst that was implanted into a surrogate mother, resulting in Dolly’s birth.`,
    `The success of SCNT hinged on overcoming profound biological hurdles. Adult cells carry epigenetic marks—chemical modifications that tell genes when to turn on or off. During cloning, these marks must be erased and re‑established so the transferred nucleus can support embryonic development. Early attempts often failed because the epigenetic “memory” of the donor cell persisted, leading to abnormal gene expression and developmental defects. Dolly’s birth demonstrated that, at least in some cases, a mature nucleus could be fully reprogrammed, opening doors for research into <span class="vocab" data-cn="表观遗传学">epigenetics</span> and cellular plasticity.`,
    `Beyond the novelty of reproducing an adult animal, Dolly’s creation accelerated work on <span class="vocab" data-cn="多能干细胞">pluripotent stem cells</span>. Scientists realized that if a differentiated cell could be reverted to an embryonic state, perhaps it could also be coaxed into becoming any cell type needed for therapy. This insight contributed to the later development of induced pluripotent stem (iPS) cells, which avoid many ethical concerns associated with using embryos and have become a cornerstone of regenerative medicine research.`,
    `However, Dolly also ignited fierce <span class="vocab" data-cn="生物伦理">bioethics</span> debates. Critics argued that cloning animals for research or agriculture could lead to suffering, reduced genetic diversity, and the commodification of living beings. Animal‑rights groups pointed to Dolly’s relatively short lifespan—she developed arthritis and lung disease at an early age—as evidence that cloned mammals might carry hidden health problems. The controversy forced scientists and policymakers to confront questions about the moral status of cloned organisms and the responsibilities of those who create them.`,
    `In response, several governments established regulatory frameworks to oversee cloning research. The United Kingdom introduced the Human Fertilisation and Embryology Act (1990) amendments that permitted therapeutic animal cloning under strict licensing, while banning reproductive cloning for commercial purposes. The European Union issued guidelines emphasizing animal welfare, transparency, and public engagement. These policies aimed to balance scientific freedom with societal values, ensuring that advances in biotechnology proceeded responsibly.`,
    `Today, Dolly’s legacy endures in both the laboratory and the public imagination. While human reproductive cloning remains prohibited worldwide, the techniques refined from her creation underpin modern applications such as gene‑edited livestock, conservation cloning of endangered species, and the production of transgenic animals for pharmaceutical proteins. The ongoing dialogue about the ethical limits of biotechnology continues to shape legislation, funding priorities, and public trust, reminding us that every scientific breakthrough carries a weighty moral dimension.`,
  ],
  vocabulary: [
    { word: 'cloning', cn: '克隆' },
    { word: 'somatic cell nuclear transfer', cn: '体细胞核移植' },
    { word: 'fibroblast', cn: '成纤维细胞' },
    { word: 'epigenetics', cn: '表观遗传学' },
    { word: 'pluripotent stem cells', cn: '多能干细胞' },
    { word: 'bioethics', cn: '生物伦理' },
  ],
};

export default article;
