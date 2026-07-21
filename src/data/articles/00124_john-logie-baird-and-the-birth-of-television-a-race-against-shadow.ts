import type { Article } from '../../types/index.ts';

// 文件意图：维护《John Logie Baird and the Birth of Television: A Race Against Shadow》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00124 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00124',
  slug: 'john-logie-baird-and-the-birth-of-television-a-race-against-shadow',
  title: 'John Logie Baird and the Birth of Television: A Race Against Shadow',
  subtitle: 'How a Scottish inventor turned flickering silhouettes into the first moving pictures on screen.',
  summary: 'Explore the daring experiments of John Logie Baird, whose mechanical television sparked a global race to capture light.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the cramped attic of his family home in Helensburgh, Scotland, a young engineer named <span class="vocab" data-cn="约翰·洛奇·贝尔德">John Logie Baird</span> was obsessed with one question: could the human eye’s ability to see motion be reproduced by machines? The post‑World War I era was buzzing with electrical inventions, yet no one had succeeded in turning a series of still images into a continuous visual stream. Baird’s curiosity led him to study the earlier work of Paul Nipkow, whose <span class="vocab" data-cn="尼普科盘">Nipkow disk</span>—a spinning perforated disc—offered a tantalizing clue.`,
    `Baird built his own version of the <span class="vocab" data-cn="机械电视">mechanical television</span>, a device that used a rapidly rotating disc with tiny holes arranged in a spiral. As the disc spun, each hole scanned a line of the scene and converted light intensity into an electrical signal via a <span class="vocab" data-cn="光电导体">photoconductive cell</span>. The resulting signal traveled through wires to a receiver where a synchronized disc reproduced the pattern on a tiny neon lamp, creating a flickering image. This process required precise <span class="vocab" data-cn="同步">synchronization</span> between the transmitting and receiving discs; any mismatch would turn the picture into a jittery mess.`,
    `The breakthrough came on 26 January 1926, when Baird set up a modest demonstration inside London’s Selfridges department store. Using his mechanical system, he projected a simple silhouette of a person walking across a stage onto a small screen for an audience of curious shoppers and journalists. The image was faint—more shadow than detail—but it moved in real time, astonishing onlookers who had never seen motion transmitted without film. Newspapers described the event as “a ghostly figure dancing on glass,” capturing both wonder and skepticism.`,
    `Undeterred by the low resolution, Baird turned his attention to colour. By March 1928 he had engineered a three‑colour system that employed red, green, and blue filters placed in front of separate photoconductive cells. The combined signals were transmitted sequentially, then recombined at the receiver using matching coloured filters. When the system succeeded, viewers saw a crude but unmistakable rainbow‑hued portrait of Baird himself—a milestone that pre‑dated many later electronic colour experiments.`,
    `The following year, Baird sought to prove his invention could cross oceans. In February 1929 he partnered with AT&T’s experimental lab in New York, arranging the first transatlantic television transmission from London to Hartsdale, New York. The signal travelled via short‑wave radio, and on the American side a <span class="vocab" data-cn="阴极射线管">cathode‑ray tube</span> receiver displayed Baird’s moving silhouette of a ventriloquist’s dummy. Though the picture was still rudimentary, the feat demonstrated that visual information could be sent across continents faster than any existing medium.`,
    `Meanwhile, on the other side of the Atlantic, inventors like Philo Farnsworth and Vladimir Zworykin were developing fully electronic systems based on <span class="vocab" data-cn="阴极射线管">cathode‑ray tubes</span> that eliminated the need for spinning discs. RCA, backed by massive corporate resources, championed these electronic approaches, arguing they offered higher resolution, greater reliability, and the potential for mass production. By the early 1930s, the industry’s “race against shadow” shifted from mechanical to electronic, and Baird’s inventions were gradually superseded, though his patents and demonstrations had paved the way for the new technology.`,
    `Today, when we stream high‑definition video across the globe, we rarely think of the humble spinning disc that first turned light into moving pictures. Yet Baird’s daring experiments proved a fundamental truth: visual information could be captured, encoded, transmitted, and reconstructed by machines. His work sparked an international scramble that accelerated the development of television, laying the groundwork for the vibrant, colour‑rich medium we now take for granted. In the annals of invention, Baird remains a reminder that even the faintest shadow can herald a revolution.`,
  ],
  vocabulary: [
    { word: 'John Logie Baird', cn: '约翰·洛奇·贝尔德' },
    { word: 'Nipkow disk', cn: '尼普科盘' },
    { word: 'mechanical television', cn: '机械电视' },
    { word: 'photoconductive cell', cn: '光电导体' },
    { word: 'synchronization', cn: '同步' },
    { word: 'cathode‑ray tube', cn: '阴极射线管' },
  ],
};

export default article;
