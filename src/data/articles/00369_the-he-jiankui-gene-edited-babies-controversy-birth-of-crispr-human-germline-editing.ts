import type { Article } from '../../types/index.ts';

// 文件意图：维护《The He Jiankui Gene‑Edited Babies Controversy: Birth of CRISPR Human Germline Editing》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00369 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00369',
  slug: 'the-he-jiankui-gene-edited-babies-controversy-birth-of-crispr-human-germline-editing',
  title: 'The He Jiankui Gene‑Edited Babies Controversy: Birth of CRISPR Human Germline Editing',
  subtitle: 'How a single experiment reshaped the global conversation on genome editing',
  summary: 'An in‑depth look at He Jiankui’s 2018 experiment, its scientific basis, ethical fallout, and lasting impact on human germline research.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In November 2018, Chinese scientist <span class="vocab" data-cn="何建辉">He Jiankui</span> stunned the world by announcing that he had created the first genetically edited babies. The claim was made at a conference in Hong Kong, where He presented twin girls—later nicknamed “Lulu” and “Nana”—as proof of concept for using <span class="vocab" data-cn="CRISPR-Cas9 基因编辑技术">CRISPR</span> to alter the human genome before birth. The revelation sparked immediate outrage, not only because it involved children who could never consent, but also because it crossed a line that many bioethicists believed should remain firmly closed.`,
    `The technology at the heart of He’s experiment, <span class="vocab" data-cn="CRISPR-Cas9，一种可在特定位置切割 DNA 的分子工具">CRISPR</span>, originated from a bacterial immune system that captures snippets of viral DNA and uses them to recognize future infections. In the laboratory, scientists repurpose this system by designing a short RNA guide that leads the Cas9 enzyme to a precise genomic location, where it creates a double‑strand break. The cell’s own repair machinery then stitches the DNA back together, often introducing small insertions or deletions that can disrupt a gene’s function. This simplicity and precision made CRISPR an instant sensation across genetics, agriculture, and medicine.`,
    `A crucial distinction in genome editing is between <span class="vocab" data-cn="胚系编辑：对生殖细胞或早期胚胎进行的基因修改，能够传递给后代">germline editing</span> and <span class="vocab" data-cn="体细胞编辑：仅影响已形成个体的细胞，不会遗传给子孙">somatic cell</span> interventions. Somatic edits treat diseases in the individual receiving them—think of a gene therapy that corrects a faulty allele in liver cells. Germline edits, by contrast, alter the DNA of an egg, sperm, or early embryo, meaning any changes become part of every cell in the resulting person and can be inherited by future generations. He’s work fell squarely into the latter category, raising concerns about unintended consequences that could ripple through the human gene pool.`,
    `He targeted the <span class="vocab" data-cn="CCR5 基因，编码一种 HIV 病毒进入细胞的受体">CCR5</span> gene, which encodes a receptor that HIV uses to enter immune cells. By disabling CCR5, he hoped to confer resistance to HIV infection—a noble goal in theory, but one fraught with technical risk. Early‑stage embryos were edited, then implanted into He’s wife’s uterus. The twins were born in 2019, reportedly healthy at birth, yet independent verification of the edits proved impossible because the family refused further testing. Moreover, scientists warned about <span class="vocab" data-cn="脱靶效应：CRISPR 在非目标位点意外切割 DNA 的风险">off‑target effects</span> and unknown impacts on <span class="vocab" data_cn="胚胎发育过程中的基因相互作用和调控网络">embryonic development</span>, which could manifest later in life or be passed to descendants.`,
    `The global reaction was swift. The World Health Organization convened an expert panel, UNESCO issued a declaration on the “human genome,” and numerous national academies called for a moratorium on clinical germline editing. Central to the debate were questions of <span class="vocab" data-cn="生物伦理学：研究科学技术对人类价值观和社会的影响">bioethics</span>, informed consent, and equitable access. Critics argued that He’s work violated both Chinese regulations—though loopholes existed—and international norms that emphasize transparency, peer review, and rigorous safety testing before any human application.`,
    `In the aftermath, Chinese authorities sentenced He to three years in prison for “illegal medical practices” and imposed a fine. The incident prompted China to draft stricter laws governing gene editing, explicitly banning clinical germline modifications. Internationally, the episode accelerated discussions within bodies such as the International Commission on the Clinical Use of Human Germline Genome Editing, which released detailed guidelines outlining permissible research, oversight mechanisms, and public engagement strategies.`,
    `Today, while no laboratory is implanting edited embryos into humans, researchers continue to use CRISPR in <span class="vocab" data-cn="胚胎模型：在体外受精的早期胚胎中进行基因编辑，以研究疾病机制">embryo models</span> for disease modeling and drug discovery. The scientific community remains divided: some argue that a carefully regulated, transparent pathway could eventually allow therapeutic germline edits for severe monogenic diseases; others maintain that the societal risks outweigh potential benefits. He Jiankui’s controversial experiment thus serves as both a cautionary tale and a catalyst, reminding us that powerful technologies demand equally robust ethical frameworks.`,
  ],
  vocabulary: [
    { word: 'He Jiankui', cn: '何建辉' },
    { word: 'CRISPR', cn: 'CRISPR-Cas9 基因编辑技术' },
    { word: 'germline editing', cn: '胚系编辑：对生殖细胞或早期胚胎进行的基因修改，能够传递给后代' },
    { word: 'somatic cell', cn: '体细胞编辑：仅影响已形成个体的细胞，不会遗传给子孙' },
    { word: 'CCR5', cn: 'CCR5 基因，编码一种 HIV 病毒进入细胞的受体' },
    { word: 'off-target effects', cn: '脱靶效应：CRISPR 在非目标位点意外切割 DNA 的风险' },
    { word: 'bioethics', cn: '生物伦理学：研究科学技术对人类价值观和社会的影响' },
    { word: 'embryonic development', cn: '胚胎发育过程中的基因相互作用和调控网络' },
    { word: 'embryo models', cn: '胚胎模型：在体外受精的早期胚胎中进行基因编辑，以研究疾病机制' },
  ],
};

export default article;
