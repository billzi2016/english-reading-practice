import type { Article } from '../../types/index.ts';

// This file defines the article "John von Neumann and the Architecture that Defined Modern Computing"
// for the reading practice platform.
const article: Article = {
  id: '00028',
  slug: 'john-von-neumann-and-the-architecture-that-defined-modern-computing',
  title: 'John von Neumann and the Architecture that Defined Modern Computing',
  subtitle: 'How one man\'s vision shaped every computer we use today.',
  summary: 'An in‑depth look at John von Neumann’s life, his stored‑program concept, and the lasting impact of the von Neumann architecture on modern computing.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `John von Neumann was a Hungarian‑born mathematician whose intellect spanned pure mathematics, physics, economics, and computer science. Born in Budapest in 1903, he displayed prodigious talent early on, publishing papers on set theory while still a teenager. After moving to the United States in the late 1930s, von Neumann joined the Institute for Advanced Study in Princeton, where his interdisciplinary curiosity found fertile ground. He contributed to quantum mechanics, developed game theory, and played a pivotal role in the Manhattan Project. Yet perhaps his most enduring legacy lies in how he reshaped the very blueprint of digital machines.`,
    `During World War II, von Neumann was invited to evaluate the newly built ENIAC, the first large‑scale electronic calculator. While impressed by its speed, he recognized a fundamental flaw: programmers had to manually rewire the machine for each new problem. In a series of meetings with the EDVAC design team, he articulated what would become known as the <span class="vocab" data-cn="存储程序概念">stored-program concept</span>. This idea proposed that both instructions and data could reside in the same memory, allowing the computer to modify its own behavior without physical rewiring.`,
    `The brilliance of the <span class="vocab" data-cn="存储程序概念">stored-program concept</span> rested on two technical foundations. First, von Neumann championed the use of <span class="vocab" data-cn="二进制算术">binary arithmetic</span>, representing numbers with only zeros and ones, which matched the on‑off nature of electronic switches. Second, he advocated a unified memory that treated instructions as just another form of data. This abstraction liberated programmers from hardware constraints, paving the way for high‑level languages and the rapid software evolution we see today.`,
    `The resulting blueprint—often called the von Neumann architecture—organizes a computer into three primary subsystems. At its heart sits the <span class="vocab" data-cn="处理器">processor</span>, which fetches instructions from memory, decodes them, and performs arithmetic or logical operations. Surrounding it is a <span class="vocab" data-cn="存储层次结构">memory hierarchy</span> that ranges from fast registers to larger but slower main memory, and eventually to secondary storage such as magnetic disks. A control unit orchestrates the flow of data between these components while input/output modules translate human actions into machine language.`,
    `In practice, a von Neumann machine executes instructions in <span class="vocab" data-cn="顺序执行">sequential execution</span>, one after another, unless a branch or jump alters the flow. This linear model simplifies hardware design but also creates a bottleneck known as the “von Neumann bottleneck,” where the single bus between processor and memory limits throughput. Over the decades engineers have introduced <span class="vocab" data-cn="并行性">parallelism</span>—multiple cores, pipelining, and cache hierarchies—to mitigate this limitation, yet the core principle of a shared instruction‑data space remains intact.`,
    `The influence of von Neumann’s architecture is evident in virtually every digital device, from pocket calculators to massive supercomputers. Modern CPUs still follow his fetch‑decode‑execute cycle, and operating systems rely on the unified memory model for process scheduling and virtual memory management. Even emerging technologies such as quantum simulators often adopt a von Neumann‑style control layer to interface classical instructions with quantum hardware. In short, his design choices set the stage for the software ecosystem that powers today’s internet, cloud services, and artificial intelligence.`,
    `Beyond machines, von Neumann left an intellectual imprint on fields as diverse as economics, where his game‑theoretic models underpin modern market analysis, and physics, where his work on cellular automata foreshadowed complex systems research. He died in 1957, but the institutions he helped build—Princeton’s Institute for Advanced Study, the Institute for Defense Analyses, and the early computer labs at Los Alamos—continue to nurture interdisciplinary breakthroughs. As we stand amid an era of rapid digital transformation, remembering von Neumann reminds us that a single conceptual leap can redefine how humanity processes information.`,
  ],
  vocabulary: [
    { word: 'stored-program concept', cn: '存储程序概念' },
    { word: 'binary arithmetic', cn: '二进制算术' },
    { word: 'processor', cn: '处理器' },
    { word: 'memory hierarchy', cn: '存储层次结构' },
    { word: 'sequential execution', cn: '顺序执行' },
    { word: 'parallelism', cn: '并行性' },
  ],
};

export default article;
