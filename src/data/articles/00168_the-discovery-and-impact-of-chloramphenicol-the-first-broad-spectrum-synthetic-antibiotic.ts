import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery and Impact of Chloramphenicol: The First Broad‑Spectrum Synthetic Antibiotic》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00168 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00168',
  slug: 'the-discovery-and-impact-of-chloramphenicol-the-first-broad-spectrum-synthetic-antibiotic',
  title: 'The Discovery and Impact of Chloramphenicol: The First Broad‑Spectrum Synthetic Antibiotic',
  subtitle: 'How a soil microbe reshaped global medicine in the mid‑20th century',
  summary: 'An engaging story about chloramphenicol’s birth, chemistry, clinical triumphs, and lasting legacy.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the aftermath of World War II, pharmaceutical companies raced to find new weapons against infectious diseases that had plagued soldiers and civilians alike.  While penicillin was already proving its worth, researchers sensed a gap for an agent that could tackle both gram‑positive and gram‑negative pathogens.  It was in this climate that a modest laboratory at the American firm Pfizer began screening soil samples, hoping to uncover a “magic bullet” that would live up to Paul Ehrlich’s earlier vision.`,
    `The breakthrough came in 1947 when microbiologists isolated a reddish pigment from the actinomycete *Streptomyces venezuelae* collected in a Venezuelan rainforest.  The compound, later named <span class="vocab" data-cn="氯霉素">chloramphenicol</span>, displayed potent activity against a surprisingly wide range of bacteria, earning it the reputation of being the first true <span class="vocab" data-cn="广谱的">broad‑spectrum</span> antibiotic.  Initial tests showed effectiveness against typhoid fever, meningitis, and even rickettsial infections, sparking excitement across the medical community.`,

    `Although the original substance was obtained by <span class="vocab" data-cn="发酵法">fermentation</span>, its complex structure—featuring a nitrobenzene ring linked to a dichloroacetyl group—prompted chemists to pursue a fully synthetic route.  By 1952 Pfizer had succeeded in producing chloramphenicol on an industrial scale using a multi‑step synthesis that incorporated <span class="vocab" data-cn="硝基苯">nitrobenzene</span> and <span class="vocab" data-cn="二氯乙酰基">dichloroacetyl</span> intermediates.  This achievement not only lowered costs but also ensured a stable supply, allowing the drug to reach hospitals worldwide.`,

    `The drug’s mechanism of action is elegantly simple yet highly effective: it binds reversibly to the bacterial <span class="vocab" data-cn="核糖体亚基">ribosomal subunit</span> 50S, obstructing peptide bond formation and halting protein synthesis.  Because this target differs markedly from human ribosomes, chloramphenicol can inhibit bacterial growth with relatively low toxicity—at least in the short term.  Its ability to penetrate the blood‑brain barrier made it especially valuable for treating meningitis, a condition where many antibiotics fail.`,

    `Clinicians quickly embraced chloramphenicol as a versatile tool.  In the 1950s and 1960s it became the drug of choice for typhoid fever in developing countries, dramatically reducing mortality rates that had once hovered above 20 %.  Its broad activity also made it indispensable during outbreaks of cholera and plague, where rapid, empiric therapy was essential.  For a generation, chloramphenicol symbolized hope: a single pill could combat multiple deadly infections.`,

    `However, the triumph was tempered by emerging safety concerns.  By the late 1960s reports linked chloramphenicol to severe <span class="vocab" data-cn="骨髓抑制">bone‑marrow suppression</span>, including rare cases of irreversible <span class="vocab" data-cn="再生障碍性贫血">aplastic anemia</span>.  These hematopoietic toxicities prompted regulatory agencies to restrict its use to situations where no safer alternatives existed.  The episode taught the medical world a hard lesson about balancing efficacy with long‑term <span class="vocab" data-cn="药代动力学">pharmacokinetics</span> and toxicity profiles.`,

    `Today, chloramphenicol’s legacy endures in several ways.  Its story underscores the importance of <span class="vocab" data-cn="抗菌耐药性">antimicrobial resistance</span> surveillance: overuse can select for resistant strains, diminishing its usefulness.  Moreover, modern chemists revisit its scaffold to design new derivatives that retain antibacterial power while minimizing hematologic risk.  Though rarely prescribed in high‑income nations, chloramphenicol remains on the World Health Organization’s essential medicines list, ready to step in when other drugs fail—a testament to a discovery born from humble soil microbes and bold synthetic chemistry.`,
  ],
  vocabulary: [
    { word: 'chloramphenicol', cn: '氯霉素' },
    { word: 'broad‑spectrum', cn: '广谱的' },
    { word: 'fermentation', cn: '发酵法' },
    { word: 'nitrobenzene', cn: '硝基苯' },
    { word: 'dichloroacetyl', cn: '二氯乙酰基' },
    { word: 'ribosomal subunit', cn: '核糖体亚基' },
    { word: 'bone‑marrow suppression', cn: '骨髓抑制' },
    { word: 'aplastic anemia', cn: '再生障碍性贫血' },
    { word: 'pharmacokinetics', cn: '药代动力学' },
    { word: 'antimicrobial resistance', cn: '抗菌耐药性' },
  ],
};

export default article;
