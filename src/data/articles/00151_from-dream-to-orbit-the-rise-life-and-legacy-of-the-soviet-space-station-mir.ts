import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Dream to Orbit: The Rise, Life, and Legacy of the Soviet Space Station Mir》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00151 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00151',
  slug: 'from-dream-to-orbit-the-rise-life-and-legacy-of-the-soviet-space-station-mir',
  title: 'From Dream to Orbit: The Rise, Life, and Legacy of the Soviet Space Station Mir',
  subtitle: 'How a Cold‑War ambition became a cornerstone of modern orbital living.',
  summary: 'Explore the conception, operation, and lasting influence of Mir, the Soviet Union’s pioneering space station.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1970s, after a series of successful single‑module stations known as Salyut, Soviet planners began to dream bigger. They imagined a permanent outpost that could host crews for months, support complex experiments, and demonstrate the USSR’s engineering might. This vision was codified in a series of design studies that emphasized modularity, redundancy, and the ability to expand the structure over time—principles that would later define the <span class="vocab" data-cn="空间站">space station</span> concept worldwide.`,
    `The heart of Mir was the Core Module, launched on 19 February 1986. It housed life‑support systems, power management, and three <span class="vocab" data-cn="对接端口">docking ports</span> that allowed additional sections to be attached. Engineers equipped the module with a robust <span class="vocab" data-cn="太阳能阵列">solar array</span> system capable of generating up to 12 kilowatts, enough to power scientific equipment and keep the habitat comfortable for its inhabitants. The design also featured a central computer network that could coordinate multiple visiting vehicles—a novelty at the time.`,
    `Assembly in orbit was a delicate ballet of precision flying. After the Core Module entered low Earth orbit, a series of automated and crew‑guided <span class="vocab" data-cn="轨道交会">orbital rendezvous</span> maneuvers brought the first add‑on, Kvant‑1, within reach. Using the docking ports, Soviet cosmonauts manually aligned and locked the new segment to the core, a process repeated over the next fifteen years as more modules—Kvant‑2, Kristall, Spektr, and others—were added, gradually turning Mir into a sprawling laboratory stretching nearly 30 meters end‑to‑end.`,
    `Life aboard Mir was unlike anything on Earth. The constant <span class="vocab" data-cn="微重力">microgravity</span> environment forced crews to relearn basic tasks: eating, sleeping, even using the bathroom required specially designed equipment. A typical crew of three to six <span class="vocab" data-cn="宇航员">cosmonauts</span> followed a strict schedule that balanced scientific work with maintenance and exercise to counteract muscle atrophy. The station’s environmental control system recycled air and water, while the crew cultivated small plants in sealed trays, proving that closed‑loop life support could sustain humans for extended periods.</`,
    `Mir became a floating research hub. Over its 15‑year lifespan it hosted more than 100 experiments ranging from material science—studying how alloys behave without gravity—to biomedical studies on bone density loss. Earth observation instruments captured high‑resolution images of weather patterns, volcanic eruptions, and urban growth, providing valuable data for scientists worldwide. The station also served as a testbed for technologies such as the first space‑based laser communication system, paving the way for modern satellite networks.`,
    `Perhaps Mir’s most historic chapter began in 1995 when the United States and Russia launched the Shuttle‑Mir program. American astronauts flew aboard the U.S. Space Shuttle to dock with Mir, conducting joint experiments and sharing operational knowledge. These missions marked a turning point from competition to cooperation, demonstrating that two former rivals could work together safely in space—a precedent that directly influenced the planning of the International Space Station (ISS).`,
    `By 2001, Mir’s hardware was aging, and its orbit had decayed enough to require an intentional <span class="vocab" data-cn="再入">deorbit</span>. On 23 March, Russian controllers fired the station’s thrusters to lower its perigee over the Pacific Ocean. The massive structure burned up upon re‑entry, with only a few fragments landing in remote waters. The controlled deorbit was praised for minimizing risk to populated areas and showcased Russia’s ability to safely retire large orbital assets.`,
    `Mir’s legacy endures in every modern orbital platform. Its modular architecture inspired the ISS’s interchangeable segments, while its life‑support innovations informed current long‑duration missions to the Moon and Mars. Moreover, Mir proved that sustained human presence in space was technically feasible and scientifically rewarding, laying the groundwork for future commercial habitats. The station remains a symbol of perseverance—a reminder that a dream once launched from Baikonur can still shape humanity’s reach among the stars.`,
  ],
  vocabulary: [
    { word: 'space station', cn: '空间站' },
    { word: 'module', cn: '舱段' },
    { word: 'orbital rendezvous', cn: '轨道交会' },
    { word: 'microgravity', cn: '微重力' },
    { word: 'cosmonaut', cn: '宇航员' },
    { word: 'deorbit', cn: '再入' },
    { word: 'docking port', cn: '对接端口' },
    { word: 'solar array', cn: '太阳能阵列' },
  ],
};

export default article;
