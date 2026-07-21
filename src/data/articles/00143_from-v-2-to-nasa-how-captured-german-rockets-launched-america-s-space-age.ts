import type { Article } from '../../types/index.ts';

// 文件意图：维护《From V‑2 to NASA: How Captured German Rockets Launched America’s Space Age》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00143 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00143',
  slug: 'from-v-2-to-nasa-how-captured-german-rockets-launched-america-s-space-age',
  title: 'From V‑2 to NASA: How Captured German Rockets Launched America’s Space Age',
  subtitle: 'The post‑war journey of German rocketry that sparked the American space program.',
  summary: 'A narrative tracing how captured V‑2 rockets and their engineers became the foundation of NASA’s early achievements.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When World War II ended, Allied forces discovered dozens of intact <span class="vocab" data-cn="火箭">V‑2</span> missiles scattered across the ruins of Peenemünde and the Harz mountains. These were not ordinary weapons; they were the world’s first long‑range ballistic rockets, powered by a pioneering <span class="vocab" data-cn="液体燃料火箭">liquid‑fuel rocket</span> engine that could reach the edge of space. The United States quickly realized that studying these machines could give it a decisive technological edge in the emerging Cold War.`,
    `In the summer of 1945, the U.S. Army launched <span class="vocab" data-cn="“纸夹行动”">Operation Paperclip</span>, a secret program to recruit German scientists and engineers before they fell into Soviet hands. Among the most coveted was Wernher von Braun, the chief architect of the V‑2. Though his past was controversial, von Braun’s expertise in propulsion, aerodynamics, and <span class="vocab" data-cn="制导系统">guidance systems</span> made him an invaluable asset for America’s nascent missile program.`,
    `The first American test flights took place at the White Sands Proving Ground in New Mexico. Engineers dismantled captured V‑2s, shipped them across the Atlantic, and reassembled them on a sprawling desert runway. The inaugural launch on 16 July 1946 sent a refurbished V‑2 soaring to an altitude of 174 km, well above the Kármán line that defines space. This spectacular success proved that the United States could not only replicate but also improve upon German rocket technology.`,
    `While the rockets themselves were impressive, the supporting infrastructure was equally critical. The Army established the Redstone Arsenal in Alabama, where a <span class="vocab" data-cn="超声速风洞">supersonic wind tunnel</span> allowed engineers to study airflow at speeds exceeding Mach 2. These facilities enabled precise refinements to the V‑2’s aerodynamic shape, reducing drag and increasing stability—knowledge that would later be applied to the Redstone and Jupiter missiles, stepping stones toward human spaceflight.`,
    `In 1958, as the Soviet Union launched Sputnik, President Eisenhower created the National Aeronautics and Space Administration (<span class="vocab" data-cn="美国国家航空航天局">NASA</span>). Many of von Braun’s team, now part of the newly formed Marshall Space Flight Center in Huntsville, Alabama, transitioned from military missiles to civilian rockets. Their first major project under NASA was the development of the Saturn series, culminating in the colossal <span class="vocab" data-cn="土星五号">Saturn V</span> launch vehicle that would carry Apollo astronauts to the Moon.`,
    `The lineage from V‑2 to Saturn V is more than a technical evolution; it reflects a profound cultural shift. The same engineers who once built weapons of war turned their expertise toward exploration, embodying the idea that “rockets are tools, not terror.” Their work laid the groundwork for modern spaceflight, influencing everything from satellite deployment to interplanetary probes.`,
    `Today, museums such as the Smithsonian’s National Air and Space Museum display a restored V‑2 alongside a model of the Saturn V, reminding visitors of the unlikely bridge between two eras. The story of captured German rockets illustrates how scientific knowledge can transcend borders—and conflicts—to propel humanity toward new frontiers.`
  ],
  vocabulary: [
    { word: 'V‑2', cn: '德国的V-2火箭' },
    { word: 'liquid-fuel rocket', cn: '液体燃料火箭' },
    { word: 'Operation Paperclip', cn: '“纸夹行动”' },
    { word: 'guidance system', cn: '制导系统' },
    { word: 'supersonic wind tunnel', cn: '超声速风洞' },
    { word: 'NASA', cn: '美国国家航空航天局' },
    { word: 'Saturn V', cn: '土星五号' }
  ],
};

export default article;
