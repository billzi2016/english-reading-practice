import type { Article } from '../../types/index.ts';

// 文件意图：维护《Jacquard Loom: How Punch Cards Laid the Foundations for Modern Computing》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00430 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00430',
  slug: 'jacquard-loom-how-punch-cards-laid-the-foundations-for-modern-computing',
  title: 'Jacquard Loom: How Punch Cards Laid the Foundations for Modern Computing',
  subtitle: 'From woven patterns to binary code – a surprising lineage.',
  summary: 'Explore how the 19th‑century textile invention sparked the idea of programmable machines and shaped modern computing.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1804, a curious crowd gathered in the workshop of <span class="vocab" data-cn="雅卡尔织机">Jacquard loom</span> in Lyon, France. Joseph Marie Jacquard had just demonstrated that a series of <span class="vocab" data-cn="穿孔卡片">punch cards</span> could control the lifting of individual threads, producing intricate silk patterns without a master weaver’s constant guidance. The audience, composed of aristocrats and engineers alike, gasped as the loom automatically reproduced a floral design that had taken weeks to hand‑craft. This moment marked the birth of a new kind of <span class="vocab" data-cn="可编程的">programmable</span> machinery.`,
    `The mechanism was deceptively simple yet brilliant. Each card held a row of holes; where a hole appeared, a corresponding needle would rise, pulling a specific warp thread. By arranging cards in sequence, the loom could execute a series of instructions—much like today’s software loops. This physical <span class="vocab" data-cn="自动化">automation</span> reduced labor costs and eliminated human error, turning textile production into an early example of a machine that followed encoded directions rather than relying on continuous manual input.`,
    `Jacquard’s invention did not stay confined to fabrics. Charles Babbage, often called the “father of the computer,” visited England’s industrial exhibitions in the 1820s and was struck by the loom’s use of cards as an instruction set. He incorporated a similar idea into his design for the <span class="vocab" data-cn="算法">algorithm</span>-driven Analytical Engine, envisioning that operators could feed punched instructions to dictate arithmetic operations. Although Babbage never completed a working model, his notes reveal a clear lineage from textile control to computational logic.`,
    `A half‑century later, the United States Census of 1890 faced an overwhelming data‑processing challenge. Herman Hollerith invented a <span class="vocab" data-cn="制表机">tabulator</span> that read <span class="vocab" data-cn="穿孔卡片">punch cards</span> to tally population statistics in hours instead of months. Each citizen’s information was encoded on a card, and the machine automatically summed columns of numbers. This breakthrough demonstrated that punched media could serve as reliable <span class="vocab" data-cn="数据存储">data storage</span> for non‑textile applications, paving the way for commercial data processing firms such as IBM.`,
    `Early electronic computers adopted the same physical interface. The ENIAC and later UNIVAC systems used massive card readers as their primary <span class="vocab" data-cn="输入设备">input device</span>. Programmers would write code on paper, punch it onto cards, and feed stacks into the machine. Although slower than today’s keyboards, this method allowed complex programs to be assembled, tested, and re‑run without rewiring hardware—a direct descendant of Jacquard’s concept that a sequence of holes could dictate machine behavior.`,
    `Even in the digital age, the legacy persists. Modern storage media encode information as patterns of magnetic or optical marks, echoing the binary presence‑or‑absence logic of early cards. RFID tags and QR codes translate physical objects into streams of bits, enabling inventory systems to “read” items automatically—an evolution of <span class="vocab" data-cn="自动化">automation</span> that began on a loom’s wooden frame. The underlying principle remains: represent instructions or data as discrete symbols that machines can interpret.`,
    `The story of the <span class="vocab" data-cn="雅卡尔织机">Jacquard loom</span> reminds us that breakthroughs often arise at the intersection of art and engineering. What started as a solution to produce elegant fabrics became a blueprint for programmable devices, influencing everything from Babbage’s theoretical engines to today’s cloud‑based computing platforms. By tracing this lineage, learners can appreciate how a simple row of holes sparked an intellectual revolution that still powers our world.`,
  ],
  vocabulary: [
    { word: 'Jacquard loom', cn: '雅卡尔织机' },
    { word: 'punch card', cn: '穿孔卡片' },
    { word: 'programmable', cn: '可编程的' },
    { word: 'automation', cn: '自动化' },
    { word: 'algorithm', cn: '算法' },
    { word: 'data storage', cn: '数据存储' },
    { word: 'tabulator', cn: '制表机' },
    { word: 'input device', cn: '输入设备' },
  ],
};

export default article;
