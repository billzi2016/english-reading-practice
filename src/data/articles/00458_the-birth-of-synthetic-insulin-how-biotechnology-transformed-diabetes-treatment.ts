import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of Synthetic Insulin: How Biotechnology Transformed Diabetes Treatment》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00458 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00458',
  slug: 'the-birth-of-synthetic-insulin-how-biotechnology-transformed-diabetes-treatment',
  title: 'The Birth of Synthetic Insulin: How Biotechnology Transformed Diabetes Treatment',
  subtitle: 'From animal extracts to recombinant protein – a biotech revolution.',
  summary: 'A narrative of how recombinant DNA technology enabled the first synthetic insulin, reshaping diabetes care worldwide.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1920s, physicians celebrated the discovery that pancreatic extracts could lower blood sugar in patients with type 1 diabetes. These extracts were harvested from bovine and porcine pancreases, a labor‑intensive process that produced insulin batches of variable purity. By the 1970s, demand far outstripped supply, and concerns about viral contamination prompted researchers to search for a cleaner, scalable source.`,
    `The breakthrough arrived with <span class="vocab" data-cn="重组DNA技术">recombinant DNA</span> technology, pioneered by scientists such as Herbert Boyer and Stanley Cohen. By splicing the human insulin gene into a circular piece of DNA called a <span class="vocab" data-cn="质粒">plasmid</span>, they created a genetic blueprint that could be introduced into a host cell. The chosen host was <span class="vocab" data-cn="大肠杆菌（常用实验细菌）">Escherichia coli</span> (E. coli), a bacterium already familiar to molecular biologists for its rapid growth and ease of manipulation.`,
    `In 1978, a team at Genentech successfully expressed the two insulin chains—A and B—in separate E. coli cultures. The challenge was not merely producing the protein fragments but assembling them into a functional hormone with the correct three‑dimensional structure. After fermentation, the researchers used a series of chemical steps to link the chains via disulfide bonds, creating a molecule indistinguishable from natural human insulin.`,
    `While Genentech proved the concept, it lacked the manufacturing capacity for commercial distribution. In 1982, Eli Lilly entered a partnership, scaling up production in large‑scale bioreactors. The process required meticulous <span class="vocab" data-cn="纯化">purification</span> protocols to remove bacterial endotoxins and ensure consistent potency. Advanced chromatography techniques allowed the company to achieve pharmaceutical‑grade purity, meeting stringent regulatory standards.`,
    `The resulting product, marketed as Humulin®, received <span class="vocab" data-cn="美国食品药品监督管理局批准">FDA approval</span> in 1982, becoming the first <span class="vocab" data-cn="生物工程药物">bioengineered therapeutic protein</span>. For patients, this meant a reliable supply of insulin that was chemically identical to human hormone, reducing allergic reactions associated with animal‑derived preparations. Moreover, the synthetic source eliminated dependence on livestock, lowering costs and stabilizing global availability.`,
    `Synthetic insulin also opened doors for further innovations. Researchers could now modify the molecule to alter its <span class="vocab" data-cn="药代动力学特性">pharmacokinetics</span>, creating rapid‑acting analogues like lispro and long‑acting forms such as glargine. These variants, engineered by tweaking amino acid sequences, offered more flexible dosing regimens and improved glycemic control for millions of diabetics.`,
    `The legacy of recombinant insulin extends beyond diabetes care. It demonstrated that complex human proteins could be produced in microorganisms, paving the way for a host of biologics—including growth hormones, clotting factors, and monoclonal antibodies. The success story underscored how a deep understanding of molecular biology can translate into life‑saving medicines, reshaping both industry and patient lives.`,
    `Today, over 30 million people worldwide rely on insulin therapy, most of it derived from recombinant technology. Ongoing research explores novel delivery methods such as inhalable powders and closed‑loop pumps, yet the core principle remains unchanged: a gene‑encoded blueprint guiding living cells to manufacture a precise therapeutic protein. The birth of synthetic insulin thus stands as a milestone where biotechnology turned a once‑fatal disease into a manageable chronic condition.`,
  ],
  vocabulary: [
    { word: 'recombinant DNA', cn: '重组DNA技术' },
    { word: 'plasmid', cn: '质粒' },
    { word: 'Escherichia coli', cn: '大肠杆菌（常用实验细菌）' },
    { word: 'purification', cn: '纯化' },
    { word: 'FDA approval', cn: '美国食品药品监督管理局批准' },
    { word: 'bioengineered therapeutic protein', cn: '生物工程药物' },
    { word: 'pharmacokinetics', cn: '药代动力学特性' },
  ],
};

export default article;
