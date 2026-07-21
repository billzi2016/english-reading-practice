import type { Article } from '../../types/index.ts';

// 文件意图：维护《Charles Babbage’s Difference Engine: The Birth of Mechanical Computing and Its Unfulfilled Promise》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00072 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00072',
  slug: 'charles-babbage-s-difference-engine-the-birth-of-mechanical-computing-and-its-unfulfilled-promise',
  title: 'Charles Babbage’s Difference Engine: The Birth of Mechanical Computing and Its Unfulfilled Promise',
  subtitle: 'How a Victorian invention foreshadowed modern computers while never seeing full realization.',
  summary: 'An engaging story about the design, construction attempts, and lasting influence of Babbage’s pioneering mechanical calculator.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1820s, a young mathematician named <span class="vocab" data-cn="查尔斯·巴贝奇">Charles Babbage</span> grew frustrated with the tedious hand‑calculations required for astronomical tables. He imagined a machine that could perform long sequences of additions automatically, eliminating human error. This vision gave birth to the <span class="vocab" data-cn="差分机">Difference Engine</span>, a device designed to evaluate polynomial functions using the method of finite differences—a technique already familiar to mathematicians but never before mechanized.`,
    `Babbage’s design relied on an intricate <span class="vocab" data-cn="齿轮传动系统">gear train</span> that could add numbers digit by digit, carrying over when a column overflowed. Each column of gears represented a decimal place, and the machine employed a series of levers to reset and advance the next column after each operation. The brilliance lay in its use of <span class="vocab" data-cn="十进制算术">decimal arithmetic</span> rather than binary, reflecting the numerical conventions of the era and making the output directly readable as ordinary numbers.`,
    `Funding the project proved to be a monumental challenge. In 1823, Babbage secured a grant from the British government, which hoped that a reliable source of astronomical tables would aid navigation and commerce. However, the promised budget quickly evaporated under the weight of <span class="vocab" data-cn="精密工程">precision engineering</span> demands: thousands of finely machined brass parts had to be produced with tolerances far tighter than any contemporary workshop could reliably achieve. The Royal Society’s workshops struggled to meet these specifications, leading to repeated delays and cost overruns.`,
    `By 1833 Babbage completed a working prototype of the <span class="vocab" data-cn="差分机">Difference Engine</span> No. 1, but it never received official approval for full production. Undeterred, he began sketching an even more ambitious project: the <span class="vocab" data-cn="分析机">Analytical Engine</span>. This design introduced concepts such as a programmable “store” (memory) and a “mill” (processor), ideas that echo today’s central processing unit. Although the Analytical Engine remained on paper, its architecture foreshadowed modern computers by more than a century.`,
    `The story took an unexpected turn in the late 19th century when <span class="vocab" data-cn="约瑟夫·玛丽·雅卡尔">Joseph Marie Jacquard</span>’s loom demonstrated that punched cards could control complex machinery. Babbage recognized this as a potential input method for his Analytical Engine, linking the worlds of textile manufacturing and computation. Unfortunately, the necessary <span class="vocab" data-cn="蒸汽动力">steam power</span> infrastructure and reliable metalworking techniques were still insufficient to bring the full vision to life during Babbage’s lifetime.`,
    `It was not until 1991 that a complete working model of the Difference Engine No. 2—refined from Babbage’s original drawings—was constructed by the Science Museum in London, using modern CNC tools but adhering strictly to Victorian specifications. The replica proved that Babbage’s calculations were sound and that his mechanical approach could indeed produce error‑free tables, vindicating his claim of a “machine for calculating” that was centuries ahead of its time.`,
    `Today, the legacy of the Difference Engine lives on in both hardware and software. Concepts such as modular design, automated error checking, and even the notion of a programmable machine trace their lineage back to Babbage’s sketches. While his original machines never entered mass production, they planted the seed for the digital revolution that would follow, reminding us that many breakthroughs begin as unfinished promises awaiting future technology to fulfill them.`,
    `For learners of computing history, Babbage’s story offers a vivid illustration of how scientific ambition can outpace contemporary engineering, yet still shape the trajectory of an entire field. The Difference Engine stands as a testament to human ingenuity—a mechanical marvel that, despite never achieving its full commercial promise, illuminated the path toward today’s electronic computers.`
  ],
  vocabulary: [
    { word: 'Charles Babbage', cn: '查尔斯·巴贝奇' },
    { word: 'Difference Engine', cn: '差分机' },
    { word: 'gear train', cn: '齿轮传动系统' },
    { word: 'decimal arithmetic', cn: '十进制算术' },
    { word: 'precision engineering', cn: '精密工程' },
    { word: 'Analytical Engine', cn: '分析机' },
    { word: 'Jacquard loom', cn: '约瑟夫·玛丽·雅卡尔的织布机' },
    { word: 'steam power', cn: '蒸汽动力' }
  ],
};

export default article;
