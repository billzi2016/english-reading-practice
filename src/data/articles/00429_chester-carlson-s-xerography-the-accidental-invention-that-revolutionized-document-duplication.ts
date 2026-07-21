import type { Article } from '../../types/index.ts';

// 文件意图：维护《Chester Carlson’s Xerography: The Accidental Invention that Revolutionized Document Duplication》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00429 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00429',
  slug: 'chester-carlson-s-xerography-the-accidental-invention-that-revolutionized-document-duplication',
  title: 'Chester Carlson’s Xerography: The Accidental Invention that Revolutionized Document Duplication',
  subtitle: 'How a frustrated patent lawyer created the technology behind modern copying machines.',
  summary: 'The story of Chester Carlson, his breakthrough in electrophotography, and the rise of Xerox that changed offices worldwide.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In a cramped kitchen laboratory in Rochester, New York, a young patent attorney named <span class="vocab" data-cn="切斯特·卡尔森">Chester Carlson</span> stared at a stack of handwritten legal briefs. He needed a cheap way to duplicate them for his clients, but the only options were labor‑intensive carbon copies or expensive mimeographs. Frustrated, he began tinkering with a piece of selenium—a mineral that becomes conductive when exposed to light—hoping it might hold the key to a simpler solution.`,
    `Carlson’s breakthrough came from an insight into <span class="vocab" data-cn="电致影像技术">electrophotography</span>. He imagined a drum coated with a photoconductive layer that could be uniformly charged using <span class="vocab" data-cn="静电">static electricity</span>. When the drum passed under an illuminated original document, light would discharge the exposed areas, leaving behind a hidden pattern of charge known as a <span class="vocab" data-cn="潜像">latent image</span>. This invisible map could then attract fine particles of powdered ink—called <span class="vocab" data-cn="碳粉">toner</span>—to reveal a copy on paper.`,
    `After months of trial and error, Carlson finally succeeded in 1938. He placed a sheet of plain paper onto the charged drum, introduced a thin layer of toner that adhered only to the latent image, and then transferred the pattern onto the paper with heat and pressure. The result was a crisp, black‑and‑white replica of the original—a process he later named “xerography,” from the Greek words for “dry writing.” This first successful copy proved that his concept worked without any wet chemicals, a major advantage over existing methods.`,
    `Despite this triumph, Carlson faced an uphill battle to commercialize his invention. He filed a <span class="vocab" data-cn="专利">patent</span> in 1939, but investors were skeptical of a device that seemed too delicate and expensive for everyday use. It wasn’t until 1947 that the Haloid Company—a modest manufacturer of photographic paper—agreed to license the technology. With Haloid’s resources, Carlson refined the machine, improving reliability and speed. The partnership culminated in the launch of the Xerox 914 in 1959, the first automatic plain‑paper copier that could produce dozens of copies per minute.`,
    `The Xerox 914 sparked an office revolution. For the first time, businesses could duplicate documents without specialized staff or messy chemicals. This democratization of copying accelerated the growth of “office automation,” enabling rapid dissemination of information and reshaping workflows across industries. By the mid‑1960s, the term “xerox” had become a verb in everyday language, synonymous with making copies—a testament to Carlson’s impact on modern communication.`,
    `Today, while digital scanners and laser printers dominate the market, the core principles of xerography remain vital. Laser printers still rely on a photoconductive drum, static charge, and toner—direct descendants of Carlson’s original design. His accidental invention not only birthed an entire industry but also laid the groundwork for the seamless document handling we take for granted in the digital age.`,
  ],
  vocabulary: [
    { word: 'Chester Carlson', cn: '切斯特·卡尔森' },
    { word: 'electrophotography', cn: '电致影像技术' },
    { word: 'static electricity', cn: '静电' },
    { word: 'latent image', cn: '潜像' },
    { word: 'toner', cn: '碳粉' },
    { word: 'patent', cn: '专利' },
  ],
};

export default article;
