import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the First Practical Electric Traffic Light and Its Impact on Urban Safety》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00454 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00454',
  slug: 'the-invention-of-the-first-practical-electric-traffic-light-and-its-impact-on-urban-safety',
  title: 'The Invention of the First Practical Electric Traffic Light and Its Impact on Urban Safety',
  subtitle: 'How a simple set of lights reshaped city streets in the early twentieth century.',
  summary: 'A story of invention, engineering, and safety that turned chaotic intersections into orderly flows.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `At the turn of the twentieth century, American cities were grappling with a new kind of chaos. Horse‑drawn wagons shared cobblestones with early automobiles, and drivers relied on hand signals or a wooden <span class="vocab" data-cn="信号塔">semaphore</span> operated by police officers. Accidents were common, especially at busy crossroads where visibility was poor and traffic volumes surged after the introduction of mass‑produced cars like the Model T.`,
    `In 1912, a Salt Lake City policeman named Lester Wire took matters into his own hands. He wired two electric lamps—red for “stop” and green for “go”—to a simple push‑button panel that he could operate from the curb. Though manually controlled, this prototype was the first <span class="vocab" data-cn="电动交通信号灯">electric traffic light</span> in the United States, proving that illumination could replace shouted commands and reduce confusion at intersections.`,

    `Four years later, Cleveland, Ohio installed what historians call the first practical electric traffic signal. Built by the American Traffic Signal Company, the device sat on a steel post at Public Square and featured three arms: red, yellow, and green. Unlike Wire’s manual system, this one used a clock‑work timer to change lights automatically, allowing continuous operation without a police officer standing beside it. The Cleveland installation demonstrated that an automated, timed signal could be reliable enough for everyday use.`,

    `The engineering behind the Cleveland signal was surprisingly sophisticated for its era. It employed <span class="vocab" data-cn="互锁装置">interlocking</span> mechanisms so that only one direction received a green indication at any moment, preventing conflicting movements. The timer—essentially an early form of <span class="vocab" data-cn="信号时序">signal timing</span>—was calibrated to give each approach enough clearance before the next phase began. Power was supplied by a nearby street‑light circuit, and the whole assembly was housed in a weather‑proof metal box that could be serviced without shutting down traffic.`,

    `The impact on urban safety was immediate. Within the first year of operation, Cleveland officials reported a 21 % drop in recorded <span class="vocab" data-cn="碰撞">collisions</span> at Public Square, and injuries fell by roughly one‑third. Similar reductions were observed in other cities that quickly adopted the technology, such as Detroit and New York. The data convinced municipal leaders that regulated light sequences could save lives, prompting a wave of funding for traffic control infrastructure across the nation.`,

    `Inspired by Cleveland’s success, William Potts, a police officer in Detroit, patented a three‑color system in 1920 that added a yellow “caution” phase between red and green. This refinement allowed drivers to anticipate changes rather than react abruptly, further lowering accident rates. By the mid‑1920s, most major American cities had installed electric signals at their busiest intersections, standardizing colors and timing conventions that are still recognized worldwide today.`,

    `Beyond vehicle safety, the new lights reshaped <span class="vocab" data-cn="城市规划">urban planning</span>. City engineers began to design street grids with coordinated signal corridors, enabling smoother traffic flow during rush hour. Pedestrians benefited from dedicated <span class="vocab" data-cn="人行横道信号灯">pedestrian crossing</span> phases, which reduced the need for police escorts at crosswalks. Over time, signals were linked to central control rooms, allowing operators to adjust timing in response to real‑time congestion—a precursor to today’s adaptive traffic management systems.`,

    `Today’s smart intersections, equipped with sensors and AI‑driven algorithms, owe their lineage to that modest 1914 Cleveland post. While modern devices can communicate with connected vehicles and optimize cycles on the fly, the core principles—clear visual cues, safe interlocking of movements, and timed phases—remain unchanged. The invention of the first practical electric traffic light thus stands as a pivotal moment when engineering met public policy to make city streets safer for everyone.`,
  ],
  vocabulary: [
    { word: 'semaphore', cn: '信号塔' },
    { word: 'electric traffic light', cn: '电动交通信号灯' },
    { word: 'interlocking', cn: '互锁装置' },
    { word: 'signal timing', cn: '信号时序' },
    { word: 'urban planning', cn: '城市规划' },
    { word: 'pedestrian crossing', cn: '人行横道信号灯' },
    { word: 'collision', cn: '碰撞' },
  ],
};

export default article;
