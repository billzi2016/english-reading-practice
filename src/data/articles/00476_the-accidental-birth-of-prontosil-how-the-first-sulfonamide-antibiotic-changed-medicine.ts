import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Accidental Birth of Prontosil: How the First Sulfonamide Antibiotic Changed Medicine》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00476 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00476',
  slug: 'the-accidental-birth-of-prontosil-how-the-first-sulfonamide-antibiotic-changed-medicine',
  title: 'The Accidental Birth of Prontosil: How the First Sulfonamide Antibiotic Changed Medicine',
  subtitle: 'A Tale of a Red Dye that Launched Modern Antibacterial Therapy',
  summary: 'How a chance observation in a German lab led to the first sulfonamide drug and reshaped medical practice.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1930s, the fight against bacterial infections was still dominated by serums and antiseptics. Physicians relied on crude measures such as bloodletting or high‑dose arsenic compounds, which often did more harm than good. The scientific community longed for a chemical that could stop bacteria from multiplying inside the body without destroying the host’s own cells.`,
    `Enter Bayer, a German pharmaceutical giant still recovering from the aftermath of World War I. The company had a thriving dyes department, and its chemists were experimenting with hundreds of synthetic pigments. One such compound was an <span class="vocab" data-cn="偶氮染料">azo dye</span> known as Prontosil, originally intended for textile coloring rather than medicine.`,
    `The turning point came when Gerhard Domagk, a young microbiologist at Bayer’s Institute of Experimental Therapy, decided to test the dye against bacterial cultures. He observed that while the red solution did not kill Staphylococcus aureus on an agar plate, mice injected with the same strain and then treated with Prontosil survived. This paradox—ineffective in vitro but curative in vivo—prompted Domagk to coin the term <span class="vocab" data-cn="抑菌的">bacteriostatic</span> for agents that halt bacterial growth rather than outright killing them.`,
    `Further investigation revealed that Prontosil was a pro‑drug: once inside the animal’s bloodstream, it broke down into sulfanilamide, a simple <span class="vocab" data-cn="磺胺类化合物">sulfonamide</span> molecule. Sulfanilamide interfered with bacterial synthesis of folic acid, an essential cofactor for DNA replication. This mechanism placed Prontosil among the first true <span class="vocab" data-cn="抗菌药">antibacterial</span> agents and inaugurated the era of <span class="vocab" data-cn="化学疗法">chemotherapeutic</span> drugs that target microbial metabolism.`,
    `The clinical impact was immediate. In 1935, a controlled <span class="vocab" data-cn="临床试验">clinical trial</span> at the University of Berlin treated patients with streptococcal infections using Prontosil tablets. Recovery times dropped dramatically, and mortality fell to near‑zero for conditions that previously claimed dozens of lives each week. News of the “miracle red pill” spread worldwide, prompting governments to stockpile the drug for wartime use.`,
    `Prontosil’s success also sparked a cascade of research into related compounds. Chemists synthesized hundreds of derivatives—each tweaking the sulfonamide core—to improve potency, reduce side effects, and broaden the spectrum against gram‑negative bacteria. By the late 1930s, sulfonamides such as sulfadiazine and sulfamethoxazole were routinely prescribed for pneumonia, meningitis, and urinary tract infections, fundamentally altering medical practice and saving countless lives during World II.`,
    `However, the triumph was not without challenges. Bacterial <span class="vocab" data-cn="耐药性">resistance</span> soon emerged as microbes evolved enzymes that bypassed folic‑acid pathways or expelled sulfonamides from their cells. This arms race forced scientists to study <span class="vocab" data-cn="药代动力学">pharmacodynamics</span> more rigorously and paved the way for the discovery of penicillin and later broad‑spectrum antibiotics. Nonetheless, Prontosil’s accidental birth remains a landmark story: a red dye intended for fabrics became the catalyst that proved chemicals could safely combat infection inside living organisms.`,
  ],
  vocabulary: [
    { word: 'azo dye', cn: '偶氮染料' },
    { word: 'bacteriostatic', cn: '抑菌的' },
    { word: 'sulfonamide', cn: '磺胺类化合物' },
    { word: 'antibacterial', cn: '抗菌药' },
    { word: 'chemotherapeutic', cn: '化学疗法' },
    { word: 'clinical trial', cn: '临床试验' },
    { word: 'resistance', cn: '耐药性' },
    { word: 'pharmacodynamics', cn: '药代动力学' },
  ],
};

export default article;
