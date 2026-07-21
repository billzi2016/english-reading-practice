import type { Article } from '../../types/index.ts';

// 文件意图：维护《The IBM PC Revolution: How a 1981 Personal Computer Redefined Computing for the Masses》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00493 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00493',
  slug: 'the-ibm-pc-revolution-how-a-1981-personal-computer-redefined-computing-for-the-masses',
  title: 'The IBM PC Revolution: How a 1981 Personal Computer Redefined Computing for the Masses',
  subtitle: 'How IBM’s bold design choices turned a business machine into a household name.',
  summary: 'An engaging look at how the 1981 IBM PC reshaped hardware standards, software markets, and everyday life.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In a modest office on Manhattan’s West Side in August 1981, a young accountant stared at a beige box that hummed with possibility. The machine was the brand‑new <span class="vocab" data-cn="个人计算机">IBM PC</span>, and its arrival marked a turning point: for the first time a computer built by a corporate giant was priced low enough to tempt small businesses, schools, and even hobbyists.`,
    `IBM’s decision to base the system on an <span class="vocab" data-cn="微处理器">microprocessor</span> from Intel—specifically the 4.77 MHz 8088—was deliberate. Rather than designing a proprietary chip, IBM leveraged a component that other manufacturers already understood, dramatically shortening development time and reducing costs. This choice also signaled to the industry that IBM was willing to play by the same rules as emerging computer firms.`,
    `What truly set the IBM PC apart was its <span class="vocab" data-cn="开放架构">open architecture</span>. Unlike previous IBM products, which were tightly integrated and secretive, the PC’s internal design—its <span class="vocab" data-cn="总线">bus</span>, slots, and connectors—was fully documented and published. Third‑party vendors could now produce compatible keyboards, monitors, and expansion cards without needing IBM’s approval, sparking a rapid wave of innovation that turned the PC into a flexible platform rather than a single monolithic device.`,
    `The system firmware, known as the <span class="vocab" data-cn="基本输入输出系统">BIOS</span>, provided a standardized set of low‑level routines for hardware initialization. Coupled with Microsoft’s freshly licensed operating system, <span class="vocab" data-cn="磁盘操作系统">MS‑DOS</span>, the PC offered developers a consistent software environment across all machines that adhered to IBM’s specifications. This partnership gave rise to a thriving ecosystem of applications that could run on any “IBM‑compatible” computer.`,
    `Software developers quickly recognized the commercial potential of this new, widely adopted platform. Spreadsheet pioneer Lotus released <em>Lotus 1‑2‑3</em>, which ran faster and more reliably on the IBM PC than on competing machines. The program’s success demonstrated that a powerful business application could become a decisive factor in hardware sales, cementing the PC’s role as an indispensable tool for finance, engineering, and education.`,
    `Because the architecture was open, dozens of manufacturers began producing <span class="vocab" data-cn="克隆机">clones</span>—machines that were functionally identical to IBM’s original but often cheaper or with added features. Companies such as Compaq, Dell, and later Gateway built their reputations on these compatible systems, driving prices down and accelerating adoption worldwide. The market’s shift toward standardization meant that a program written for one PC would work on virtually any other, a principle that still underpins today’s personal computing landscape.`,
    `Four decades later, the legacy of the 1981 IBM PC is evident in every laptop, desktop, and server that bears the hallmark of an <span class="vocab" data-cn="扩展槽">expansion slot</span> or a BIOS‑like firmware layer. While modern machines have evolved far beyond the original beige box—featuring multi‑core processors, solid‑state storage, and touch interfaces—the core philosophy of openness, modularity, and software compatibility remains rooted in IBM’s bold gamble that forever changed how we compute.`,
  ],
  vocabulary: [
    { word: 'open architecture', cn: '开放架构' },
    { word: 'microprocessor', cn: '微处理器' },
    { word: 'bus', cn: '总线' },
    { word: 'BIOS', cn: '基本输入输出系统' },
    { word: 'MS‑DOS', cn: '磁盘操作系统' },
    { word: 'clones', cn: '克隆机' },
    { word: 'expansion slot', cn: '扩展槽' },
  ],
};

export default article;
