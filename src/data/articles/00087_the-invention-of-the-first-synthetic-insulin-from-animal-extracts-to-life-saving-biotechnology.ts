import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the First Synthetic Insulin: From Animal Extracts to Life‑Saving Biotechnology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00087 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00087',
  slug: 'the-invention-of-the-first-synthetic-insulin-from-animal-extracts-to-life-saving-biotechnology',
  title: 'The Invention of the First Synthetic Insulin: From Animal Extracts to Life‑Saving Biotechnology',
  subtitle: 'How a laboratory breakthrough turned a desperate treatment into modern biomedicine',
  summary: 'A narrative tracing insulin’s journey from animal pancreas extracts to the first recombinant human insulin.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1920s, physicians were still hunting for a way to tame the deadly swings of blood sugar that plagued people with type 1 diabetes. The breakthrough came when Canadian researchers Frederick Banting and Charles Best managed to isolate a crude <span class="vocab" data-cn="胰岛素">insulin</span> preparation from the pancreas of dogs, proving that the hormone could lower glucose levels when injected into patients. This animal‑derived product saved lives, but its supply was limited, purification was laborious, and occasional allergic reactions reminded doctors of its imperfect nature.`,
    `Throughout the following decades, manufacturers refined extraction methods, moving from dog to bovine (cow) and porcine (pig) pancreases because these organs yielded larger quantities. The process involved grinding the tissue, precipitating proteins with acids, and painstakingly removing contaminants—a sequence that could take weeks for each batch. Despite improvements, the reliance on slaughtered animals raised ethical concerns and introduced variability: a single dose might differ slightly in potency depending on the source animal.`,
    `The turning point arrived in the late 1970s when molecular biologists began to decode the genetic blueprint of human <span class="vocab" data-cn="胰岛素">insulin</span>. In 1978, a team at Genentech, led by Herbert Boyer and his colleagues, succeeded in inserting the human insulin gene into a plasmid—a circular piece of DNA that could replicate inside bacteria. This technique, known as <span class="vocab" data-cn="重组DNA技术">recombinant DNA</span> technology, promised to produce an identical hormone without animal intermediates.`,
    `To make the concept work, the engineered plasmid was introduced into a strain of <span class="vocab" data-cn="大肠杆菌">Escherichia coli</span>, a common laboratory bacterium. The bacteria acted as tiny factories, reading the human gene and assembling the insulin protein chain. However, early attempts yielded only the separate A‑chain and B‑chain fragments; they had to be chemically linked later to form functional insulin. This extra step highlighted the challenges of mimicking eukaryotic protein folding in a prokaryotic host.`,
    `In 1982, after years of optimization, Eli Lilly introduced Humulin®, the first commercially available recombinant human <span class="vocab" data-cn="胰岛素">insulin</span>. The product was produced in large‑scale fermenters where millions of liters of bacterial culture grew under tightly controlled conditions. After fermentation, the mixture underwent rigorous <span class="vocab" data-cn="蛋白质纯化">protein purification</span> steps—chromatography, filtration, and crystallization—to isolate insulin with a purity exceeding 99 %. The result was a hormone indistinguishable from that made by the human pancreas, eliminating animal‑derived impurities and reducing immune reactions.`,
    `The impact of synthetic insulin rippled beyond diabetes care. It demonstrated that complex therapeutic proteins could be manufactured reliably using biotechnology, paving the way for other recombinant drugs such as growth hormone, erythropoietin, and monoclonal antibodies. Moreover, the success spurred advances in <span class="vocab" data-cn="药代动力学">pharmacokinetics</span>, leading scientists to engineer insulin analogues with altered absorption rates—some acting rapidly for mealtime spikes, others providing a steady basal level for day‑long control.`,
    `Today, the legacy of that first synthetic insulin is evident in the diverse portfolio of insulin products on the market and in the broader field of biopharmaceuticals. While animal extracts are now a historical footnote, they remind us how necessity drove early innovators to extract life‑saving hormones from nature, setting the stage for modern genetic engineering to take the baton and run faster than ever before.`,
  ],
  vocabulary: [
    { word: 'insulin', cn: '胰岛素' },
    { word: 'recombinant DNA', cn: '重组DNA技术' },
    { word: 'Escherichia coli', cn: '大肠杆菌' },
    { word: 'protein purification', cn: '蛋白质纯化' },
    { word: 'pharmacokinetics', cn: '药代动力学' },
    { word: 'glycosylation', cn: '糖基化' },
  ],
};

export default article;
