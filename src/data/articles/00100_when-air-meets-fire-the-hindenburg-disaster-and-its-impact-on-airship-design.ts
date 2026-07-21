import type { Article } from '../../types/index.ts';

// 文件意图：维护《When Air Meets Fire: The Hindenburg Disaster and Its Impact on Airship Design》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00100 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00100',
  slug: 'when-air-meets-fire-the-hindenburg-disaster-and-its-impact-on-airship-design',
  title: 'When Air Meets Fire: The Hindenburg Disaster and Its Impact on Airship Design',
  subtitle: 'How a single tragedy reshaped the future of lighter‑than‑air travel.',
  summary: 'The 1937 Hindenburg crash not only shocked the world but also forced engineers to rethink every aspect of airship construction.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On the night of May 21, 1937, the German <span class="vocab" data-cn="硬式飞艇">rigid airship</span> LZ 129 Hindenburg attempted to dock at Lakehurst Naval Air Station in New Jersey. Filled with highly flammable <span class="vocab" data-cn="氢气">hydrogen</span>, the massive envelope glittered under the floodlights, while a small crew prepared the mooring lines. Witnesses later recalled hearing a faint hissing sound before a sudden flash ignited the forward section, turning the colossal craft into a towering inferno within seconds.`,
    `The cause of the blaze has been debated for decades, but most modern analyses point to a combination of static electricity and a tiny leak in the gas cells. When the hydrogen escaped, it mixed with ambient air, creating an explosive mixture that spread rapidly—a phenomenon known as <span class="vocab" data-cn="火焰传播">flame propagation</span>. The design of the Hindenburg’s outer skin, coated with a highly combustible cellulose‑based lacquer, accelerated the fire, turning what might have been a localized incident into a catastrophic disaster.`,
    `In the aftermath, public confidence in airships plummeted. Newspapers ran headlines that equated “air travel” with “dangerous spectacle,” and airlines shifted their investments toward heavier‑than‑air aircraft. Yet engineers did not abandon the concept of lighter‑than‑air flight; instead they began to scrutinize every material and structural choice. The most immediate change was the replacement of hydrogen with <span class="vocab" data-cn="氦气">helium</span>, an inert gas that, while more expensive and less buoyant, eliminated the risk of explosive ignition.`,
    `Designers also revisited the notion of a rigid framework. The Hindenburg’s internal skeleton—composed of aluminum alloy girders—had to support both the massive envelope and the propulsion units. After the disaster, many manufacturers experimented with semi‑rigid or non‑rigid designs that relied on flexible ballonets to maintain shape, reducing overall weight and simplifying construction. These changes improved the <span class="vocab" data-cn="结构完整性">structural integrity</span> of later airships such as the U.S. Navy’s <i>USS Los Angeles</i> (ZR‑3).`,
    `Another lesson concerned the placement and shielding of the <span class="vocab" data-cn="推进系统">propulsion system</span>. The Hindenburg’s diesel engines were mounted on external gondolas, exposing fuel lines to potential sparks. Subsequent designs moved engines inside the hull or added fire‑resistant barriers, ensuring that a single malfunction would not compromise the entire gas envelope. This shift also encouraged the development of quieter, more efficient powerplants, paving the way for modern hybrid airships that combine electric motors with lightweight lift.`,
    `The legacy of the Hindenburg extends beyond engineering textbooks; it reshaped public perception and regulatory frameworks. International aviation authorities introduced stricter standards for gas handling, fire safety, and crew training. Moreover, the disaster inspired a cultural fascination with “the age of giants,” evident in literature, film, and even contemporary art installations that reference the haunting image of a burning sky. While commercial airships never regained their pre‑1937 prominence, the lessons learned continue to inform experimental platforms exploring sustainable cargo transport and surveillance missions.`,
    `Today, engineers revisit the Hindenburg’s story when designing next‑generation <span class="vocab" data-cn="气囊式飞艇">blimp‑type</span> vehicles. Advances in composite materials, autonomous navigation, and renewable energy sources allow modern airships to achieve higher safety margins while retaining the unique ability to hover without runways. In this sense, the tragedy that once seemed to mark the end of an era now serves as a catalyst for innovation—reminding us that every failure carries the seed of future progress.`,
  ],
  vocabulary: [
    { word: 'rigid airship', cn: '硬式飞艇' },
    { word: 'hydrogen', cn: '氢气' },
    { word: 'helium', cn: '氦气' },
    { word: 'flame propagation', cn: '火焰传播' },
    { word: 'structural integrity', cn: '结构完整性' },
    { word: 'propulsion system', cn: '推进系统' },
    { word: 'blimp-type', cn: '气囊式飞艇' },
  ],
};

export default article;
