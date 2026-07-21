import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Vanguard Failure: How America’s First Satellite Setback Shaped the Early Space Race》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00148 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00148',
  slug: 'the-vanguard-failure-how-america-s-first-satellite-setback-shaped-the-early-space-race',
  title: 'The Vanguard Failure: How America’s First Satellite Setback Shaped the Early Space Race',
  subtitle: 'A Tale of Technical Hurdles and Political Re‑orientation in the Dawn of Space Exploration',
  summary: 'How the disastrous launch of Vanguard I reshaped U.S. space policy and accelerated the race to orbit.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When the Soviet Union announced that its <span class="vocab" data-cn="人造卫星">Sputnik</span> had circled Earth on 4 October 1957, the United States found itself scrambling for a credible response. The nation’s first attempt to join the orbital club was the <span class="vocab" data-cn="先驱卫星">Vanguard</span> program, managed by the Naval Research Laboratory (NRL). Its goal was modest—launch a small scientific payload during the International Geophysical Year—but the political stakes were enormous, as every successful launch became a proxy for Cold War prestige.`,
    `The Vanguard project was deliberately civilian‑led to avoid the militaristic image of earlier rocket experiments. Engineers at NRL designed a three‑stage vehicle: a liquid‑propellant first stage, a solid‑fuel second stage, and a tiny third stage that would spin the satellite into its final orbit. This configuration required precise coordination between the <span class="vocab" data-cn="火箭发动机">rocket engine</span> designers, guidance specialists, and the emerging network of <span class="vocab" data-cn="地面追踪站">ground tracking stations</span>. The ambition was to demonstrate that the United States could achieve an <span class="vocab" data-cn="轨道发射">orbital launch</span> without relying on military rockets.`,
    `Technical challenges quickly mounted. The first stage used a newly developed liquid‑oxygen and kerosene engine, which had never been tested at full scale. Engineers struggled with combustion instability—a phenomenon where pressure oscillations can rip the engine apart. Meanwhile, the guidance system relied on an early form of inertial navigation that was still being calibrated in the laboratory. These problems were compounded by a tight schedule: the launch window for the International Geophysical Year closed in December 1957.`,
    `On 6 December 1957, Vanguard’s first attempt lifted off from Cape Canaveral’s Launch Complex 18A. Within seconds, a catastrophic failure occurred: the liquid‑propellant engine lost thrust, causing the vehicle to tumble and explode on the pad. Post‑flight analysis blamed a faulty fuel valve that allowed excess pressure to build up in the combustion chamber. The explosion not only destroyed the rocket but also ignited public criticism of the program’s management and technical readiness.`,
    `The failure reverberated through Washington. President Eisenhower, already wary of an arms race spilling into space, ordered a review of all U.S. launch efforts. This led to the creation of the Advanced Research Projects Agency (ARPA) later that month, tasked with coordinating high‑risk research across agencies. Simultaneously, Congress began drafting legislation that would eventually establish the National Aeronautics and Space Administration (NASA) in 1958, consolidating civilian space activities under a single umbrella.`,
    `Ironically, Vanguard’s setback accelerated other U.S. projects. The Army Ballistic Missile Agency, led by Wernher von Braun, rushed its own satellite—Explorer 1—to the launch pad. When Explorer successfully entered orbit on 31 January 1958, it not only reclaimed American prestige but also validated the use of military‑derived rockets for scientific purposes. Vanguard’s engineers learned from their mistakes; a redesigned version of the vehicle launched <span class="vocab" data-cn="卫星技术">Vanguard 1</span> on 17 March 1958, becoming the world’s second artificial satellite and the longest‑lasting human‑made object in space to date.`,
    `The legacy of the Vanguard failure is twofold. Technically, it forced American engineers to confront the harsh realities of liquid propulsion, guidance accuracy, and launch infrastructure—lessons that fed directly into later successes such as the Mercury program and Apollo moon missions. Politically, the disaster highlighted the need for a coordinated civilian space agency, paving the way for NASA’s rapid expansion in the 1960s. In hindsight, Vanguard’s early stumble was not merely a setback; it was a catalyst that reshaped America’s approach to the final frontier.`,
  ],
  vocabulary: [
    { word: 'Vanguard', cn: '先驱卫星' },
    { word: 'Sputnik', cn: '人造卫星' },
    { word: 'orbital launch', cn: '轨道发射' },
    { word: 'rocket engine', cn: '火箭发动机' },
    { word: 'ground tracking station', cn: '地面追踪站' },
    { word: 'satellite technology', cn: '卫星技术' },
  ],
};

export default article;
