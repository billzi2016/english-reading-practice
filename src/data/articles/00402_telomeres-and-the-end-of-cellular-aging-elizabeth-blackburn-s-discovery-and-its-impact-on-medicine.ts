import type { Article } from '../../types/index.ts';

// 文件意图：维护《Telomeres and the End of Cellular Aging: Elizabeth Blackburn’s Discovery and Its Impact on Medicine》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00402 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00402',
  slug: 'telomeres-and-the-end-of-cellular-aging-elizabeth-blackburn-s-discovery-and-its-impact-on-medicine',
  title: 'Telomeres and the End of Cellular Aging: Elizabeth Blackburn’s Discovery and Its Impact on Medicine',
  subtitle: 'How a tiny DNA cap reshaped our view of aging and disease.',
  summary: 'Explore Elizabeth Blackburn’s breakthrough on telomeres, its Nobel‑winning story, and what it means for modern medicine.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1970s a young molecular biologist named <span class="vocab" data-cn="伊丽莎白·布莱克本">Elizabeth Blackburn</span> arrived at the University of California, Berkeley, eager to study the genetics of a single‑celled organism called <span class="vocab" data-cn="四线虫">Tetrahymena thermophila</span>. While many labs chased after genes that controlled metabolism, Blackburn was fascinated by the mysterious ends of chromosomes. She noticed that these terminal regions seemed resistant to the usual enzymatic attacks that trimmed other parts of DNA, hinting at a hidden protective mechanism.</`,
    `Chromosomes are linear strands of DNA that carry our genetic blueprint, and each end is capped by a <span class="vocab" data-cn="端粒">telomere</span>. Telomeres consist of short, repetitive sequences—human telomeres repeat the six‑base motif “TTAGGG” thousands of times. This repetition forms a looped structure that shields chromosome ends from being mistaken for broken DNA, thereby preventing accidental repair processes such as <span class="vocab" data-cn="非同源末端连接">non‑homologous end joining</span>. Without telomeres, cells would quickly lose essential genetic information during each round of replication.</`,
    `The breakthrough came in 1985 when Blackburn, together with Carol Greider and Jack Szostak, identified an enzyme that could extend these repetitive caps. They named it <span class="vocab" data-cn="端粒酶">telomerase</span>, a ribonucleoprotein complex that carries its own RNA template to add new “TTAGGG” repeats onto the 3’ end of chromosomes. This discovery explained how certain cells—like germ cells, stem cells, and many cancer cells—maintain their telomere length despite countless divisions, while most somatic cells gradually lose telomeric DNA.</`,
    `The gradual shortening of telomeres in ordinary body cells leads to a state known as <span class="vocab" data-cn="复制性衰老">replicative senescence</span>. When telomeres become critically short, they trigger a DNA damage response that halts further cell division. This built‑in clock protects the organism from uncontrolled proliferation but also contributes to tissue aging, as stem cell pools dwindle and regenerative capacity wanes. Blackburn’s work therefore linked a molecular mechanism directly to the physiological process of aging.</`,
    `Cancer, however, turned this protective mechanism on its head. Researchers soon discovered that over 85 % of human tumors reactivate <span class="vocab" data-cn="端粒酶">telomerase</span>, granting them limitless replicative potential—a hallmark of the so‑called <span class="vocab" data-cn="癌基因">oncogene</span> activity. By stabilizing telomere length, cancer cells evade senescence and become immortal in culture. This paradox sparked intense interest in developing <span class="vocab" data-cn="端粒酶抑制剂">telomerase inhibitors</span> as a novel class of anticancer drugs, some of which have entered clinical trials.</`,
    `Beyond oncology, the telomere story opened doors to potential anti‑aging therapies. Scientists are exploring ways to transiently boost <span class="vocab" data-cn="端粒酶">telomerase</span> activity in aged stem cells, hoping to restore their regenerative vigor without triggering tumorigenesis. Gene‑editing tools like CRISPR have been used experimentally to lengthen telomeres in mouse models, leading to improved tissue function and delayed onset of age‑related decline. Yet the balance is delicate: excessive telomerase activation can disturb <span class="vocab" data-cn="基因组稳定性">genome stability</span> and increase cancer risk, underscoring the need for precise control.</`,
    `In 2009 Blackburn, Greider, and Szostak were awarded the <span class="vocab" data-cn="诺贝尔奖">Nobel Prize in Physiology or Medicine</span> for their discovery of telomerase, cementing the importance of telomere biology in modern medicine. Today, clinicians measure leukocyte telomere length as a biomarker for premature aging syndromes and even for assessing lifestyle impacts such as chronic stress. While we are still far from a “cure” for aging, Blackburn’s work provides a molecular compass guiding research toward therapies that could extend healthy lifespan while respecting the inherent safeguards against cancer.</`,
  ],
  vocabulary: [
    { word: 'Elizabeth Blackburn', cn: '伊丽莎白·布莱克本' },
    { word: 'telomere', cn: '端粒' },
    { word: 'telomerase', cn: '端粒酶' },
    { word: 'replicative senescence', cn: '复制性衰老' },
    { word: 'oncogene', cn: '癌基因' },
    { word: 'genome stability', cn: '基因组稳定性' },
    { word: 'Nobel Prize', cn: '诺贝尔奖' },
  ],
};

export default article;
