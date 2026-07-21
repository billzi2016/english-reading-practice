import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Osborne 1 and the Birth of Portable Computing: How a $1795 Machine Changed the Industry》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00203 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00203',
  slug: 'the-osborne-1-and-the-birth-of-portable-computing-how-a-1795-machine-changed-the-industry',
  title: 'The Osborne 1 and the Birth of Portable Computing: How a $1795 Machine Changed the Industry',
  subtitle: 'How the first “portable” PC reshaped expectations for personal computing.',
  summary: 'An engaging story about the Osborne 1, its groundbreaking design, market impact, and lasting legacy.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In late 1981, Adam Osborne unveiled a machine that would become known as the world’s first <span class="vocab" data-cn="便携式电脑">portable computer</span>. Priced at $1795—a bold figure for any personal computer of the era—the Osborne 1 was marketed not just as a tool but as a lifestyle statement: “you can take it anywhere.” The announcement generated headlines, because until then most computers were confined to desks and required bulky power supplies. This modest price tag, combined with an ambitious promise of mobility, set the stage for a dramatic shift in how people imagined computing.`,
    `The hardware itself was a study in pragmatic engineering. Weighing roughly 24.5 pounds (about 11 kilograms), it featured a built‑in 5‑inch monochrome CRT monitor and a full‑size keyboard that folded over the screen for transport. Its <span class="vocab" data-cn="外形规格">form factor</span> resembled a suitcase more than a traditional desktop, complete with a sturdy handle. Despite its heft by today’s standards, users could lift it onto a car seat or into a modest office cubicle and start working within minutes—a novelty that sparked both curiosity and admiration.`,
    `Under the hood, the Osborne 1 relied on a <span class="vocab" data-cn="微处理器">microprocessor</span> from Zilog: an 8‑bit Z80 running at 4 MHz. It shipped with 64 KB of RAM—enough to run the popular CP/M operating system—and two built‑in <span class="vocab" data-cn="磁盘驱动器">floppy disk drives</span> that accepted 5¼‑inch, single‑sided disks. While the storage capacity was modest by modern standards (approximately 160 KB per disk), it provided a self‑contained environment where users could edit documents, run spreadsheets, and store programs without needing external peripherals. This integration of CPU, memory, display, and storage into one chassis was unprecedented for a “portable” device.`,
    `Perhaps the most compelling selling point was the generous <span class="vocab" data-cn="软件套装">software bundle</span> that came pre‑installed. Buyers received copies of WordStar (a leading word processor), SuperCalc (a spreadsheet program), and dBase II (an early database system), all running on CP/M. This “all‑in‑one” approach meant that a new owner could be productive from day one, without the additional expense of purchasing separate applications. The bundled software not only added value but also demonstrated how a portable machine could serve real business needs, from drafting letters to managing inventory.`,
    `The Osborne 1’s success sparked a wave of imitators and competitors. Companies such as Kaypro released similar suitcase‑style machines, while Commodore introduced the SX‑64, a “portable” version of its popular PET computer. This rapid proliferation contributed to a period of <span class="vocab" data-cn="市场饱和">market saturation</span> in the nascent portable segment, as manufacturers rushed to capture a share of the newly created demand. The competition drove prices down and spurred incremental improvements—lighter cases, better displays, and eventually the transition from CRTs to LCD panels.`,
    `However, the very momentum that propelled Osborne’s early triumph also sowed its downfall. In mid‑1983, Adam Osborne announced an upcoming model—the Osborne Executive—with enhanced graphics and a faster processor, but he did so before the new product was ready for shipment. The announcement caused retailers to halt orders of the original machine, fearing they would be left with obsolete inventory. This phenomenon later became known as the <span class="vocab" data-cn="奥斯本效应">Osborne effect</span>, a cautionary tale about premature product announcements that can cripple sales and cash flow. Within months, Osborne Computer Corporation filed for bankruptcy, marking a dramatic end to its pioneering venture.`,
    `Despite its brief commercial lifespan, the Osborne 1 left an indelible mark on computing history. It proved that a computer could be moved from one location to another without sacrificing core functionality, paving the way for the laptop revolution of the late 1980s and beyond. Designers learned valuable lessons about balancing weight, durability, and user experience—insights that informed later successes such as the IBM ThinkPad and Apple PowerBook. Today, collectors still cherish the Osborne 1 not only as a relic but also as a reminder that bold ideas can reshape an entire industry.`,
  ],
  vocabulary: [
    { word: 'portable computer', cn: '便携式电脑' },
    { word: 'microprocessor', cn: '微处理器' },
    { word: 'floppy disk drive', cn: '磁盘驱动器' },
    { word: 'software bundle', cn: '软件套装' },
    { word: 'market saturation', cn: '市场饱和' },
    { word: 'Osborne effect', cn: '奥斯本效应' },
  ],
};

export default article;
