import type { Article } from '../../types/index.ts';

// 文件意图：维护《Jacquard's Loom: How a 19th‑Century Textile Machine Laid the Foundations for Modern Computing》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00420 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00420',
  slug: 'jacquard-s-loom-how-a-19th-century-textile-machine-laid-the-foundations-for-modern-computing',
  title: "Jacquard's Loom: How a 19th‑Century Textile Machine Laid the Foundations for Modern Computing",
  subtitle: 'From punched cards in cloth to the birth of programmable computers.',
  summary: 'Explore how Joseph Marie Jacquard’s loom turned textile design into an early form of data storage and inspired the first computers.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the bustling workshops of early‑19th‑century France, the demand for intricate fabrics was growing faster than any artisan could keep up. Traditional hand‑loom weavers had to manually lift dozens of threads for each repeat of a pattern, a labor‑intensive process that limited both speed and complexity. It was against this backdrop that <span class="vocab" data-cn="织机">Jacquard's loom</span> emerged, promising to automate the most delicate designs without sacrificing artistic detail.`,
    `The genius of the machine lay in its use of <span class="vocab" data-cn="穿孔卡片">punched cards</span>. Each card held a row of holes that corresponded to specific harnesses—sets of threads—that would be raised or lowered as the cloth passed beneath. By threading a sequence of cards together, the loom could repeat any pattern indefinitely, turning a static piece of equipment into a <span class="vocab" data-cn="可编程的">programmable</span> device. The physical holes acted like binary switches, a concept that would later echo in electronic computing.`,
    `While factory owners celebrated the surge in productivity—production rates could double or even triple—the weavers themselves were uneasy. Many feared that the new technology would render their skilled labor obsolete, leading to protests and occasional sabotage. Nevertheless, the economic advantages proved decisive; by the 1820s, factories across Europe began installing Jacquard looms, ushering in a wave of mechanized <span class="vocab" data-cn="纺织业">textile</span> manufacturing that helped fuel the broader <span class="vocab" data-cn="工业革命">Industrial Revolution</span>.`,
    `The loom’s influence did not stop at cloth. In the 1830s, British mathematician <span class="vocab" data-cn="查尔斯·巴贝奇">Charles Babbage</span> visited a Paris exhibition and was struck by the punched‑card system. He incorporated the idea into his design for the <span class="vocab" data-cn="分析机">Analytical Engine</span>, envisioning cards that could store both data and instructions—a true precursor to modern software. Decades later, American statistician <span class="vocab" data-cn="赫尔曼·霍勒斯">Herman Hollerith</span> adapted similar cards for the 1890 U.S. Census, dramatically speeding up tabulation and laying groundwork for IBM’s early business machines.`,
    `What made these inventions revolutionary was the separation of <span class="vocab" data-cn="算法">algorithm</span> from hardware. The loom demonstrated that a machine could follow a set of encoded instructions without human intervention at each step. This abstraction—storing commands on removable media—became a cornerstone of computer architecture, allowing later engineers to design systems where software could be swapped or upgraded independently of the physical device.`,
    `Modern computing still feels Jacquard’s legacy. Early electronic computers such as ENIAC used plugboards that resembled the loom’s card decks, while contemporary 3‑D printers and digital textile printers echo the same principle: a digital file (the “pattern”) directs a machine to produce complex physical objects layer by layer. Even today’s programming languages retain terminology like “loop” and “branch,” concepts first embodied in the rhythmic rise and fall of threads on a loom.`,
    `The story of Jacquard’s loom reminds us that breakthroughs often arise at the intersection of art, industry, and imagination. By turning cloth into a medium for data storage, Joseph Marie Jacquard unintentionally drafted one of the earliest chapters in the history of computing—a chapter that continues to inspire engineers who see patterns not just on fabric, but in every line of code they write.`,
  ],
  vocabulary: [
    { word: 'Jacquard\'s loom', cn: '织机' },
    { word: 'punched cards', cn: '穿孔卡片' },
    { word: 'programmable', cn: '可编程的' },
    { word: 'Industrial Revolution', cn: '工业革命' },
    { word: 'Charles Babbage', cn: '查尔斯·巴贝奇' },
    { word: 'Analytical Engine', cn: '分析机' },
    { word: 'algorithm', cn: '算法' },
    { word: 'textile', cn: '纺织业' },
  ],
};

export default article;
