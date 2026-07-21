import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Synthetic Penicillin (6‑Aminopenicillanic Acid) and Its Revolution of Antibiotic Production》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00221 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00221',
  slug: 'the-first-synthetic-penicillin-6-aminopenicillanic-acid-and-its-revolution-of-antibiotic-production',
  title: 'The First Synthetic Penicillin (6‑Aminopenicillanic Acid) and Its Revolution of Antibiotic Production',
  subtitle: 'How a tiny molecular core reshaped modern medicine',
  summary: 'The isolation of 6‑APA turned penicillin from a natural miracle into a versatile platform for countless life‑saving drugs.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1950s, physicians still relied on the handful of naturally derived penicillins that had saved countless lives during World War II. Yet these drugs suffered from limited stability and a narrow spectrum of activity. Scientists at the British firm Beecham, aware of the urgent need for more flexible antibiotics, turned their attention to the molecule’s hidden “core” – the part that actually kills bacteria while tolerating many chemical modifications.`,
    `The breakthrough came in 1959 when a team led by Dr. John Murray succeeded in isolating <span class="vocab" data-cn="6‑氨基青霉烷酸">6‑Aminopenicillanic Acid</span> (<span class="vocab" data-cn="6‑APA">6‑APA</span>) from penicillin G. Using a newly discovered enzyme called <span class="vocab" data-cn="青霉酰胺酶，一种能够切除侧链的酶">penicillin acylase</span>, they cleaved the unstable side chain without destroying the essential <span class="vocab" data-cn="β‑内酰环，是抗生素活性的关键结构">beta‑lactam ring</span>. This tiny scaffold retained full antibacterial potency and could be chemically re‑armed with a variety of new side chains.`,
    `Armed with 6‑APA, chemists entered a new era of <span class="vocab" data-cn="半合成的，指在天然骨架上进行化学改造">semisynthetic</span> drug design. By attaching different acyl groups to the amino function, they could fine‑tune properties such as acid stability, oral absorption, and spectrum against Gram‑negative organisms. The first success was <span class="vocab" data-cn="氨基青霉素，是第一代广谱半合成青霉素">ampicillin</span>, launched in 1961, which could be taken orally and treated infections that natural penicillins could not reach.`,
    `The impact of this platform was immediate. Within a few years, dozens of new β‑lactam antibiotics appeared on the market: methicillin to combat penicillinase‑producing Staphylococcus, carbenicillin for Pseudomonas, and later, the extended‑spectrum cephalosporins that share the same core chemistry. Each derivative illustrated the power of <span class="vocab" data-cn="结构活性关系，研究分子结构与生物活性的关联">structure–activity relationship</span> (SAR) studies, allowing medicinal chemists to predict how a tiny change would affect potency and resistance profiles.`,
    `However, the very success of semisynthetic penicillins also sowed the seeds of <span class="vocab" data-cn="细菌对药物的抵抗能力">antibiotic resistance</span>. Bacteria rapidly evolved β‑lactamases that could hydrolyze the beta‑lactam ring, rendering many new drugs ineffective. This arms race spurred further innovation: researchers designed β‑lactamase inhibitors such as clavulanic acid, which are now co‑formulated with amoxicillin to restore activity against resistant strains.`,
    `Beyond clinical medicine, the 6‑APA platform reshaped pharmaceutical economics. Instead of relying on costly fermentation of each new penicillin variant, companies could produce large quantities of cheap bulk penicillin G, then enzymatically convert it to 6‑APA and chemically diversify it in a controlled laboratory setting. This shift lowered production costs, accelerated time‑to‑market, and made life‑saving antibiotics more accessible worldwide.`,
    `Today, the legacy of that modest molecule endures. Modern β‑lactam antibiotics—carbapenems, monobactams, and newer cephalosporins—all trace their lineage back to 6‑APA. The concept of a stable pharmacophore serving as a “plug‑and‑play” scaffold continues to inspire drug discovery across many therapeutic areas, proving that a single chemical insight can indeed revolutionize an entire industry.`,
  ],
  vocabulary: [
    { word: '6‑Aminopenicillanic Acid', cn: '6‑氨基青霉烷酸' },
    { word: 'penicillin acylase', cn: '青霉酰胺酶，一种能够切除侧链的酶' },
    { word: 'beta‑lactam ring', cn: 'β‑内酰环，是抗生素活性的关键结构' },
    { word: 'semisynthetic', cn: '半合成的，指在天然骨架上进行化学改造' },
    { word: 'ampicillin', cn: '氨基青霉素，是第一代广谱半合成青霉素' },
    { word: 'structure–activity relationship', cn: '结构活性关系，研究分子结构与生物活性的关联' },
    { word: 'antibiotic resistance', cn: '细菌对药物的抵抗能力' },
  ],
};

export default article;
