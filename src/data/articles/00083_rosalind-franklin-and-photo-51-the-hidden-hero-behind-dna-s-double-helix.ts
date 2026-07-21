import type { Article } from '../../types/index.ts';

// 文件意图：维护《Rosalind Franklin and Photo 51: The Hidden Hero Behind DNA’s Double Helix》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00083 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00083',
  slug: 'rosalind-franklin-and-photo-51-the-hidden-hero-behind-dna-s-double-helix',
  title: 'Rosalind Franklin and Photo 51: The Hidden Hero Behind DNA’s Double Helix',
  subtitle: 'How a single X‑ray image reshaped molecular biology',
  summary: 'The story of Rosalind Franklin’s meticulous work on Photo 51 and its pivotal role in unveiling the structure of DNA.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the spring of 1951, a quiet laboratory at King’s College London buzzed with the soft hum of equipment. <span class="vocab" data-cn="X射线衍射">X‑ray diffraction</span> plates were being prepared, and a young British scientist named Rosalind Franklin was hunched over a glass slide, adjusting the angle of the beam. She had already earned a reputation for her exacting standards in <span class="vocab" data-cn="晶体学">crystallography</span>, but now she faced perhaps the most challenging target of her career: the elusive structure of the <span class="vocab" data-cn="核酸">nucleic acid</span> that carried genetic information. The atmosphere was a mix of anticipation and frustration, as previous attempts to capture clear diffraction patterns had produced only blurry, indecipherable smears.`,
    `After months of painstaking trial and error, Franklin finally obtained a striking image that would later be known as “Photo 51.” The photograph displayed a series of concentric spots and an X‑shaped cross, the hallmark of a helical molecule. When she measured the spacing between the spots, she calculated a repeat distance of about 3.4 Å—exactly the rise per base pair in a DNA helix. This single piece of data provided concrete evidence that DNA was not a simple ladder but a twisted <span class="vocab" data-cn="双螺旋">double helix</span>. Franklin’s notes described the pattern as “a clear indication of helical symmetry,” a phrase that would later echo in the minds of her contemporaries.`,
    `The significance of Photo 51 did not remain confined to Franklin’s notebook for long. Maurice Wilkins, who headed the DNA group at King’s College, showed an unpublished copy of the image to James Watson without Franklin’s permission. Watson, together with Francis Crick at Cambridge, recognized that the X‑shaped diffraction pattern matched the geometry they had been hypothesizing. Within weeks, Watson and Crick incorporated the helical parameters derived from Photo 51 into their model, proposing two strands running in opposite directions, linked by <span class="vocab" data-cn="氢键">hydrogen bonds</span> between complementary bases. The image thus became a silent catalyst for one of the most celebrated breakthroughs in modern science.`,
    `While Watson and Crick received widespread acclaim, Franklin’s contribution was initially obscured by scientific politics and gender bias. She continued to refine her analysis, publishing a detailed paper on DNA’s “A” form in 1953 that clarified how environmental conditions altered the molecule’s conformation. Her work highlighted the importance of the <span class="vocab" data-cn="磷酸骨架">phosphate backbone</span> and demonstrated that the helical structure was not an artifact but a robust feature of DNA under physiological conditions. Unfortunately, the Nobel Committee could only award the prize to living scientists, and in 1962 it honored Watson, Crick, and Wilkins—leaving Franklin’s name absent from the official citation despite her indispensable data.`,
    `In the decades that followed, historians and biochemists revisited the archives, recognizing Franklin as a “hidden hero.” Her meticulous methodology set new standards for structural biology, influencing later techniques such as <span class="vocab" data-cn="电泳">electrophoresis</span> and high‑resolution crystallography. Moreover, her story sparked discussions about equity in science, inspiring initiatives to promote women’s participation in research. In 2020, the UK government announced the establishment of the Rosalind Franklin Institute, a state‑of‑the‑art facility dedicated to interdisciplinary life‑science research—a testament to her lasting impact on the field she helped shape.`,
    `Today, students learning about DNA often see the elegant double helix diagram and hear the names Watson, Crick, and Wilkins. Yet, behind that iconic image lies a photograph taken by a determined scientist who refused to settle for vague results. Photo 51 remains not only a technical triumph of <span class="vocab" data-cn="X射线衍射">X‑ray diffraction</span> but also a reminder that scientific discovery is rarely the work of a single mind. Rosalind Franklin’s legacy endures in every laboratory where researchers peer into the microscopic world, seeking patterns that reveal the hidden order of life.`,
  ],
  vocabulary: [
    { word: 'X‑ray diffraction', cn: 'X射线衍射' },
    { word: 'crystallography', cn: '晶体学' },
    { word: 'nucleic acid', cn: '核酸' },
    { word: 'double helix', cn: '双螺旋' },
    { word: 'hydrogen bond', cn: '氢键' },
    { word: 'phosphate backbone', cn: '磷酸骨架' },
    { word: 'electrophoresis', cn: '电泳' },
  ],
};

export default article;
