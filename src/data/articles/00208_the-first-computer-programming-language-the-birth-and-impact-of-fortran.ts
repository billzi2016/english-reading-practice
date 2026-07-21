import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Computer Programming Language: The Birth and Impact of FORTRAN》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00208 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00208',
  slug: 'the-first-computer-programming-language-the-birth-and-impact-of-fortran',
  title: 'The First Computer Programming Language: The Birth and Impact of FORTRAN',
  subtitle: 'How a wartime project reshaped scientific computing',
  summary: 'An engaging look at the origins, design choices, and lasting influence of FORTRAN, the world’s first widely used high‑level language.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1950s IBM faced a dilemma: its massive vacuum‑tube machines could crunch numbers, but programming them required painstakingly arranging punched cards that directly encoded <span class="vocab" data-cn="机器码">machine code</span>. Engineers spent weeks translating mathematical formulas into sequences of binary instructions, and any mistake meant re‑running the whole job. Recognizing this bottleneck, a team led by John Backus was tasked with creating a more human‑friendly way to express calculations, a project that would later be known as FORTRAN (FORmula TRANslation).`,
    `The breakthrough idea was to introduce a <span class="vocab" data-cn="高级语言">high‑level language</span> that let scientists write equations almost as they appeared on paper. Instead of specifying each register operation, programmers could declare variables, write arithmetic expressions, and rely on the system to generate the appropriate <span class="vocab" data-cn="编译器">compiler</span>. This compiler would translate the readable source code into efficient machine instructions, a concept that was revolutionary at a time when most computers were programmed directly in assembly.`,
    `One of FORTRAN’s earliest technical triumphs was its handling of <span class="vocab" data-cn="循环结构">loop constructs</span>. The language introduced the DO statement, allowing a block of code to repeat a specified number of times without manual duplication. This not only reduced coding errors but also gave the compiler an opportunity to apply <span class="vocab" data-cn="优化技术">optimization techniques</span> such as loop unrolling and register allocation, dramatically speeding up scientific calculations that involved thousands of iterations.`,
    `FORTRAN also pioneered the concept of <span class="vocab" data-cn="子程序">subroutines</span>, enabling programmers to encapsulate frequently used code segments into reusable modules. By calling a subroutine with different arguments, scientists could avoid rewriting complex formulas and focus on higher‑level problem solving. This modularity laid the groundwork for modern software engineering practices like function libraries and API design.`,
    `The language’s early success was amplified by its support for <span class="vocab" data-cn="浮点运算">floating‑point arithmetic</span>. Prior to FORTRAN, many computers handled only integer calculations, forcing researchers to devise cumbersome scaling tricks. FORTRAN’s built‑in floating‑point types allowed engineers to model physical phenomena—such as fluid dynamics or orbital mechanics—with the precision required for real‑world predictions, opening new horizons in aerospace, weather forecasting, and nuclear physics.`,
    `Commercially, FORTRAN’s impact was immediate. By 1957 IBM shipped the first production compiler, and universities quickly adopted it for teaching numerical methods. The language’s performance was so impressive that many early supercomputers—like the CDC 6600 and Cray‑1—were optimized specifically for FORTRAN workloads. This symbiotic relationship between hardware designers and language developers accelerated advances in both fields, establishing a virtuous cycle of faster machines and more ambitious software.`,
    `Even after more than six decades, FORTRAN remains alive in niche domains where performance is paramount. Modern standards such as Fortran 2008 introduce object‑oriented features while preserving the language’s legendary efficiency. The story of FORTRAN reminds us that a well‑designed abstraction can transform an entire discipline, turning tedious manual coding into elegant mathematical expression and paving the way for every high‑level language that followed.`,
  ],
  vocabulary: [
    { word: 'machine code', cn: '机器码' },
    { word: 'high‑level language', cn: '高级语言' },
    { word: 'compiler', cn: '编译器' },
    { word: 'loop construct', cn: '循环结构' },
    { word: 'optimization techniques', cn: '优化技术' },
    { word: 'subroutine', cn: '子程序' },
    { word: 'floating‑point arithmetic', cn: '浮点运算' },
  ],
};

export default article;
