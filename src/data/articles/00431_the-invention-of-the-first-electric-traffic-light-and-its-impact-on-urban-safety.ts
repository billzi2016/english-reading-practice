import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the First Electric Traffic Light and Its Impact on Urban Safety》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00431 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00431',
  slug: 'the-invention-of-the-first-electric-traffic-light-and-its-impact-on-urban-safety',
  title: 'The Invention of the First Electric Traffic Light and Its Impact on Urban Safety',
  subtitle: 'How a simple red‑green signal reshaped city streets in the early twentieth century',
  summary: 'A narrative about Lester Wire’s pioneering electric traffic signal and its lasting influence on urban safety.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `At the turn of the twentieth century, downtown streets were a chaotic mix of horse‑drawn wagons, early automobiles, and pedestrians. Drivers relied on hand signals or shouted warnings, especially at busy <span class="vocab" data-cn="十字路口">intersection</span> points where two main thoroughfares crossed. The lack of any coordinated system led to frequent collisions, prompting city officials to search for a more reliable method of directing traffic flow.`,
    `Enter Lester Wire, a Cleveland police officer who spent his nights observing the disorderly streams of vehicles. Wire believed that an illuminated cue could replace shouted commands and reduce accidents. He sketched a prototype that used electric lamps mounted on a pole, each controlled by a <span class="vocab" data-cn="手动操作">manual operation</span> lever inside a small booth. This early design was essentially the first modern <span class="vocab" data-cn="交通信号灯">traffic signal</span>.`,
    `On August 5, 1914, Wire’s invention was installed at the bustling junction of Euclid Avenue and East 105th Street in Cleveland. The device featured two colored lenses—red for stop and green for go—illuminated by incandescent bulbs powered from the city grid. Although simple, the system was a breakthrough; it gave drivers a clear visual cue that could be seen even in foggy weather. Wire later secured a <span class="vocab" data-cn="专利的">patented</span> version of his design, paving the way for broader adoption.`,

    `The first few weeks proved successful, but an unfortunate crash occurred when a driver ran a red light while another vehicle was turning left. The incident convinced Wire and city officials that a third warning color was needed to signal “prepare to stop.” Thus the <span class="vocab" data-cn="琥珀色/黄灯">amber</span> or yellow light was added, creating the three‑color sequence we recognize today. This cautionary addition dramatically reduced abrupt stops and gave drivers a brief window to react safely.`,

    `News of Cleveland’s electric signal spread quickly. By 1917, <span class="vocab" data-cn="市政当局">municipal authorities</span> in New York, Detroit, and Chicago began installing similar devices at their busiest crossings. The American Association of State Highway Officials (AASHO) worked to standardize the size, placement, and timing of lights, ensuring that drivers traveling between cities encountered a familiar system. This early <span class="vocab" data-cn="标准化">standardization</span> helped build public trust in automated traffic control.`,

    `Statistical reports from the 1920s show a noticeable decline in the <span class="vocab" data-cn="碰撞率">collision rate</span> at signalized intersections. In Cleveland, recorded accidents dropped by roughly 30 % within two years of installation, and pedestrian fatalities fell even more sharply. Researchers attributed these improvements to the clear visual hierarchy—stop, caution, go—that reduced indecision among drivers and gave pedestrians predictable crossing windows.`,

    `The original manual lever system eventually gave way to automated timers and, later, sensor‑based controls. Engineers introduced the <span class="vocab" data-cn="感应线圈">inductive loop</span>—a wire embedded in the pavement that detects vehicle presence—and linked it to signal cycles. In the late 20th century, cities began experimenting with <span class="vocab" data-cn="自适应交通控制">adaptive traffic control</span>, where computers adjust green‑light durations in real time based on traffic flow, further enhancing safety and efficiency.`,

    `Today, over a hundred years after Wire’s modest pole, the electric traffic light remains a cornerstone of <span class="vocab" data-cn="城市安全">urban safety</span>. Its evolution from manual switches to intelligent networks illustrates how a single invention can ripple through city planning, engineering, and public policy. As autonomous vehicles loom on the horizon, the humble red‑green‑amber trio continues to guide us—reminding us that even the simplest signals can save lives.`,
  ],
  vocabulary: [
    { word: 'intersection', cn: '十字路口' },
    { word: 'traffic signal', cn: '交通信号灯' },
    { word: 'manual operation', cn: '手动操作' },
    { word: 'patented', cn: '专利的' },
    { word: 'amber', cn: '琥珀色/黄灯' },
    { word: 'municipal authorities', cn: '市政当局' },
    { word: 'collision rate', cn: '碰撞率' },
    { word: 'inductive loop', cn: '感应线圈' },
    { word: 'adaptive traffic control', cn: '自适应交通控制' },
    { word: 'urban safety', cn: '城市安全' },
  ],
};

export default article;
