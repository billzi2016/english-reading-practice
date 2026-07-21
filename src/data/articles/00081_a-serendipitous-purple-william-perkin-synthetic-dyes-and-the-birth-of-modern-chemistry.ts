import type { Article } from '../../types/index.ts';

// 文件意图：维护《A Serendipitous Purple: William Perkin, Synthetic Dyes, and the Birth of Modern Chemistry》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00081 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00081',
  slug: 'a-serendipitous-purple-william-perkin-synthetic-dyes-and-the-birth-of-modern-chemistry',
  title: 'A Serentipitous Purple: William Perkin, Synthetic Dyes, and the Birth of Modern Chemistry',
  subtitle: 'How a teenage chemist’s accident sparked an industry and reshaped chemistry.',
  summary: 'The unexpected creation of mauveine by William Perkin turned a failed quinine synthesis into the first synthetic dye, launching modern organic chemistry.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1856, a sixteen‑year‑old apprentice at London’s Society of Apothecaries laboratory was desperate to find a cheaper source of quinine, the antimalarial drug that cost a fortune for the British Empire’s troops. William Henry Perkin set out to oxidize <span class="vocab" data-cn="苯胺">aniline</span>, a compound derived from <span class="vocab" data-cn="煤焦油">coal tar</span>, hoping the reaction would yield a quinine precursor. Instead, his flask produced a deep, oily purple sludge that clung to the glass walls—a vivid hue no natural source could match.`,
    `Perkin’s accidental product was later named <span class="vocab" data-cn="紫红色染料">mauveine</span>, after the fashionable “mauve” dresses of the era. Recognizing its commercial potential, he refined the synthesis, scaling it from a laboratory curiosity to a reproducible process that could be sold to textile manufacturers for pennies per pound. The dye’s brilliance and stability quickly eclipsed traditional plant‑based colors like indigo and cochineal, which required labor‑intensive cultivation and extraction.`,
    `The success of mauveine did more than create a new fashion trend; it revealed the untapped chemical richness of <span class="vocab" data-cn="煤焦油">coal tar</span>. Chemists realized that this viscous by‑product of the burgeoning petroleum industry contained thousands of organic molecules, each a potential building block for novel materials. This insight sparked a wave of research into <span class="vocab" data-cn="有机合成">organic synthesis</span>, where scientists deliberately assembled complex structures from simple precursors, laying the groundwork for modern chemical manufacturing.`,
    `One key concept that emerged from Perkin’s work was the idea of a <span class="vocab" data-cn="发色团">chromophore</span>—the part of a molecule responsible for absorbing specific wavelengths of light and thus imparting color. By manipulating the electronic structure of chromophores through controlled <span class="vocab" data-cn="氧化反应">oxidation</span> or substitution, chemists could predictably tune hues across the spectrum. This systematic approach transformed dye production from an art into a science, enabling the rapid creation of reds, blues, and greens that would later be essential for photography, printing, and even early electronics.`,
    `The economic ripple effect was profound. Within a decade, dozens of synthetic dyes flooded the market, prompting the establishment of dedicated research labs in firms such as BASF, Bayer, and DuPont. These companies hired chemists who were trained not only to discover new colors but also to understand their molecular stability, toxicity, and interaction with fabrics—a precursor to today’s interdisciplinary material science. Moreover, the profits from dye sales funded further investigations into pharmaceuticals; for example, the same aniline derivatives that produced mauveine later led to the synthesis of aspirin and other life‑saving drugs.`,
    `Perkin’s story also illustrates how serendipity can drive scientific progress when paired with curiosity and entrepreneurial spirit. While his original goal was a modest medicinal compound, he recognized the value of an unexpected result and pursued it relentlessly. This mindset—seeing potential in “failed” experiments—has become a hallmark of modern research culture, encouraging scientists to document anomalies rather than discard them.`,
    `Today, synthetic dyes are ubiquitous, from the pigments that color our clothing to the fluorescent tags used in biomedical imaging. Yet the humble purple sludge that first emerged in Perkin’s modest lab remains a symbolic reminder: chemistry’s power lies not only in deliberate design but also in the willingness to explore the unknown. The birth of modern organic chemistry, sparked by a teenage chemist’s accidental hue, continues to shape industries and improve lives more than a century and a half later.`,
  ],
  vocabulary: [
    { word: 'aniline', cn: '苯胺' },
    { word: 'coal tar', cn: '煤焦油' },
    { word: 'mauveine', cn: '紫红色染料' },
    { word: 'organic synthesis', cn: '有机合成' },
    { word: 'chromophore', cn: '发色团' },
    { word: 'oxidation', cn: '氧化反应' },
  ],
};

export default article;
