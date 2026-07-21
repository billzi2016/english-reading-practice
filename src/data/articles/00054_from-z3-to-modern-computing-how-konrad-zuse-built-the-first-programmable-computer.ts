import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Z3 to Modern Computing: How Konrad Zuse Built the First Programmable Computer》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00054 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00054',
  slug: 'from-z3-to-modern-computing-how-konrad-zuse-built-the-first-programmable-computer',
  title: 'From Z3 to Modern Computing: How Konrad Zuse Built the First Programmable Computer',
  subtitle: 'The hidden workshop that sparked a digital revolution',
  summary: 'Explore how Konrad Zuse’s Z3 introduced key ideas that still power today’s computers.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the cramped attic of his parents’ house on Berlin’s Hansa‑Straße, a young engineer named Konrad Zuse was quietly sketching circuits while Europe reeled from war. The year was 1941, and most people imagined computers as massive, room‑filling calculators reserved for governments. Zuse, however, dreamed of a machine that could be instructed to solve any problem – a true <span class="vocab" data-cn="可编程计算机">programmable computer</span>. His ambition set the stage for a device that would later be recognized as the world’s first working example of this concept.`,
    `The result was the Z3, completed in 1941 and unveiled in 1942. Unlike earlier mechanical calculators, the Z3 used over 2,600 <span class="vocab" data-cn="继电器">relay</span> switches that operated in an <span class="vocab" data-cn="电子机械的">electromechanical</span> fashion. Each relay could be toggled on or off, representing the binary digits 0 and 1, which allowed the machine to perform <span class="vocab" data-cn="二进制算术">binary arithmetic</span>. More impressively, Zuse equipped the Z3 with a primitive <span class="vocab" data-cn="浮点运算单元">floating-point unit</span>, enabling it to handle real numbers rather than being limited to integers. Programs were fed via punched film tape, turning the machine into a flexible tool that could be re‑programmed for different calculations without rewiring hardware.`,
    `Building such a device in wartime Germany was no small feat. Materials were scarce, factories were bombed, and Zuse received little official support. Yet his determination never wavered; he had already constructed the Z1 (a binary mechanical computer) and the Z2 (which added telephone relays). These earlier prototypes taught him valuable lessons about precision engineering and error correction, which he applied to the Z3’s design. The machine survived a devastating air raid in 1943, only to be moved piece by piece to Switzerland for preservation after the war.`,
    `Although the Z3 did not store its program internally – it relied on external tape – its architecture introduced ideas that would later become central to the <span class="vocab" data-cn="冯·诺依曼结构">von Neumann architecture</span>. Zuse separated the arithmetic unit from the control logic, allowing each part to be improved independently. This modular approach foreshadowed the way modern CPUs are built from interchangeable blocks such as ALUs, registers, and cache hierarchies. Moreover, his use of binary representation proved that a simple two‑state system could encode complex instructions, a principle still at the heart of today’s digital logic.`,
    `After the war, Zuse founded Zuse KG and turned his attention to commercializing his inventions. The successor to the Z3, the Z4, was completed in 1945 and shipped to the ETH Zurich laboratory in 1950, where it became the first computer available for scientific research outside of a military context. Researchers used the Z4 to calculate aerodynamic profiles and solve differential equations, demonstrating that programmable machines could accelerate progress across many disciplines. This commercial success helped legitimize computing as an emerging industry rather than a niche academic curiosity.`,
    `Zuse’s influence extended beyond hardware. In 1945 he drafted <span class="vocab" data-cn="高级语言">Plankalkül</span>, one of the earliest high‑level programming languages, complete with control structures such as loops and conditional branches. Although Plankalkül was not implemented during his lifetime, its concepts anticipated later languages like FORTRAN and ALGOL. Zuse also explored compiler theory, envisioning a system that could translate human‑readable code into machine instructions – an idea that would become essential for software development in the following decades.`,
    `Today’s smartphones, cloud servers, and AI accelerators all trace part of their lineage back to Zuse’s attic workshop. The binary logic, modular design, and programmable instruction set pioneered by the Z3 remain foundational pillars of modern computing. By daring to imagine a machine that could be told what to do rather than being hard‑wired for a single task, Konrad Zuse not only built the first <span class="vocab" data-cn="可编程计算机">programmable computer</span> but also laid down a blueprint that continues to shape how we process information in the digital age.`,
  ],
  vocabulary: [
    { word: 'programmable computer', cn: '可编程计算机' },
    { word: 'binary arithmetic', cn: '二进制算术' },
    { word: 'floating-point unit', cn: '浮点运算单元' },
    { word: 'relay', cn: '继电器' },
    { word: 'electromechanical', cn: '电子机械的' },
    { word: 'von Neumann architecture', cn: '冯·诺依曼结构' },
  ],
};

export default article;
