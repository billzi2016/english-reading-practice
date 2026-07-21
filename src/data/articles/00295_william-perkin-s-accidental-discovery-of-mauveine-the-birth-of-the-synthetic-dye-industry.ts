import type { Article } from '../../types/index.ts';

// 文件意图：维护《William Perkin’s Accidental Discovery of Mauveine: The Birth of the Synthetic Dye Industry》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00295 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00295',
  slug: 'william-perkin-s-accidental-discovery-of-mauveine-the-birth-of-the-synthetic-dye-industry',
  title: 'William Perkin’s Accidental Discovery of Mauveine: The Birth of the Synthetic Dye Industry',
  subtitle: 'How a teenage chemist turned waste into fashion and industry.',
  summary: 'The story of William Perkin’s 1856 experiment that launched the world’s first synthetic dye and reshaped chemistry, fashion, and commerce.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the spring of 1856 a 18‑year‑old apprentice chemist named William Perkin was working in the laboratory of his mentor, Sir John St. Helens, at the Royal Pharmaceutical Society in London. His task was to synthesize <span class="vocab" data-cn="奎宁">quinine</span>—a bitter compound used to treat malaria—from <span class="vocab" data-cn="煤焦油">coal tar</span>, a by‑product of the burgeoning gas industry. The experiment required oxidizing aniline, but instead of the expected pale yellow solution, Perkin observed a vivid purple sludge forming on the surface.`,
    `Perkin’s curiosity turned what could have been discarded waste into a breakthrough. He realized that the purple material was not a failed by‑product but a new chemical entity with strong coloring power. Naming it “mauveine” after the fashionable French shade of pale violet, he had inadvertently created the world’s first <span class="vocab" data-cn="合成染料">synthetic dye</span>. This discovery was revolutionary because all dyes up to that point were extracted from natural sources such as indigo plants or cochineal insects, which were expensive and limited in supply.`,
    `The commercial potential of mauveine became evident quickly. Perkin patented his process in 1856 and began producing the dye on a small scale in his family’s kitchen. By 1860, he had established a factory in Greenford, West London, employing dozens of workers to refine the production method and improve color consistency. The success of mauveine sparked a wave of entrepreneurial activity among chemists, leading to the formation of companies like Aniline Colours Ltd., which later evolved into modern chemical giants such as BASF and Bayer.`,
    `Mauveine’s impact extended far beyond chemistry labs. In Victorian society, the new shade of purple became a symbol of modernity and progress. Fashion houses eagerly incorporated mauve fabrics into their collections, and the color was famously worn by Queen Victoria’s daughter, Princess Louise, at public events. This rapid adoption demonstrated how a single scientific discovery could influence cultural trends, creating a feedback loop where consumer demand drove further research into brighter, more stable dyes.`,
    `The technical challenges of scaling up mauveine production also pushed forward analytical methods. Perkin and his contemporaries began using early forms of <span class="vocab" data-cn="色谱法">chromatography</span> to separate impurity mixtures and assess dye purity. These techniques laid groundwork for modern analytical chemistry, enabling precise control over product quality—a necessity that later industries such as pharmaceuticals would rely upon heavily.`,
    `While mauveine itself eventually gave way to more vibrant and light‑fast dyes like alizarin and indigo synthetic variants, its legacy endures. The synthetic dye industry catalyzed the broader field of organic chemistry, encouraging chemists to explore aromatic compounds, polymerization, and later, the development of plastics. Moreover, the economic model pioneered by Perkin—protecting inventions with patents while rapidly commercializing them—became a template for 20th‑century technological innovation.`,
    `Today, historians view William Perkin’s accidental discovery as a turning point that merged scientific curiosity with entrepreneurial spirit. The story illustrates how an unexpected observation in a modest laboratory can ignite an entire industry, reshaping economies and everyday life. From the purple gowns of Victorian aristocracy to the bright synthetic fabrics we wear today, mauveine remains a vivid reminder that serendipity, when paired with determination, can change the world.`,
  ],
  vocabulary: [
    { word: 'quinine', cn: '奎宁' },
    { word: 'coal tar', cn: '煤焦油' },
    { word: 'synthetic dye', cn: '合成染料' },
    { word: 'chromatography', cn: '色谱法' },
    { word: 'patent', cn: '专利' },
    { word: 'industrial revolution', cn: '工业革命' },
  ],
};

export default article;
