import type { Article } from '../../types/index.ts';

// 文件意图：维护《Rosalind Franklin: The Unsung Scientist Behind DNA's Double Helix》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00033 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00033',
  slug: 'rosalind-franklin-the-unsung-scientist-behind-dna-s-double-helix',
  title: "Rosalind Franklin: The Unsung Scientist Behind DNA's Double Helix",
  subtitle: 'Exploring the life and work of a pioneering molecular biologist',
  summary: 'Rosalind Franklin’s meticulous X‑ray diffraction studies were crucial to uncovering DNA’s double helix, yet her contributions remained largely unrecognized for decades.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Born in London on July 25, 1920, Rosalind Elsie Franklin grew up in a family that prized education and curiosity. Her father, a successful businessman, encouraged her interest in the natural world, while her mother nurtured a love of literature. From an early age, Franklin displayed a talent for mathematics and chemistry, often conducting small experiments in the family kitchen. These formative experiences laid the groundwork for a career that would later reshape our understanding of life’s most fundamental molecule.`,
    `Franklin earned a scholarship to Newnham College, Cambridge, where she studied natural sciences with a focus on physical chemistry. Her undergraduate work culminated in a research project on the porosity of coal, employing early forms of <span class="vocab" data-cn="X射线衍射">X-ray diffraction</span> to probe carbon structures. The precision and rigor she demonstrated earned her a Ph.D. in 1945, making her one of the few women of her generation to achieve such a distinction in a male‑dominated field.`,
    `In 1951, Franklin joined King’s College London as a research associate, tasked with photographing fibers of deoxyribonucleic acid (DNA). Using state‑of‑the‑art <span class="vocab" data-cn="X射线衍射">X-ray diffraction</span> techniques, she produced an image that would become legendary: <span class="vocab" data-cn="照片51">Photo 51</span>. This sharp, high‑contrast photograph revealed a clear X‑shaped pattern indicative of a helical structure. Although Franklin herself was cautious about over‑interpreting the data, the image provided undeniable evidence that DNA possessed a regular, repeating geometry.`,
    `The significance of <span class="vocab" data-cn="照片51">Photo 51</span> did not remain confined to King’s College for long. Maurice Wilkins shared the diffraction data with James Watson and Francis Crick at Cambridge, who used it as a cornerstone in constructing their model of DNA. The spacing between the X‑ray spots corresponded to a repeat distance that matched the distance between base pairs, suggesting that the molecule formed a <span class="vocab" data-cn="双螺旋">double helix</span>. Moreover, the pattern implied that complementary bases were held together by <span class="vocab" data-cn="氢键">hydrogen bonds</span>, a crucial insight into how genetic information could be stored and replicated within the <span class="vocab" data-cn="核酸">nucleic acid</span> polymer.`,
    `After her groundbreaking work on DNA, Franklin turned her attention to viruses, applying her expertise in <span class="vocab" data-cn="晶体学">crystallography</span> to study the tobacco mosaic virus (TMV). Her meticulous analysis of TMV’s rod‑shaped particles revealed how protein subunits assembled around RNA, providing one of the earliest detailed pictures of viral architecture. These studies not only advanced virology but also cemented Franklin’s reputation as a master of structural biology, capable of extracting atomic‑level information from complex biological specimens.`,
    `Despite her scientific brilliance, Franklin faced systemic gender bias that limited recognition during her lifetime. She was often excluded from informal discussions and denied authorship on papers that relied heavily on her data. When the 1962 Nobel Prize in Physiology or Medicine was awarded to Watson, Crick, and Wilkins for the discovery of DNA’s structure, Franklin—who had died of ovarian cancer at age 37 the previous year—was not mentioned. It would take decades for the scientific community to fully acknowledge her pivotal role, prompting a reevaluation of how contributions are credited in collaborative research.`,
    `Today, Rosalind Franklin is celebrated as a trailblazer whose meticulous approach set new standards for experimental rigor. The Royal Society established the Rosalind Franklin Award to support outstanding women scientists, and numerous biographies and documentaries now highlight her story. Her legacy endures not only in the DNA double helix that underpins modern genetics but also in the growing movement to ensure that all contributors—regardless of gender or background—receive equitable recognition for their work.`,
  ],
  vocabulary: [
    { word: 'X-ray diffraction', cn: 'X射线衍射' },
    { word: 'Photo 51', cn: '照片51' },
    { word: 'double helix', cn: '双螺旋' },
    { word: 'nucleic acid', cn: '核酸' },
    { word: 'hydrogen bond', cn: '氢键' },
    { word: 'crystallography', cn: '晶体学' },
  ],
};

export default article;
