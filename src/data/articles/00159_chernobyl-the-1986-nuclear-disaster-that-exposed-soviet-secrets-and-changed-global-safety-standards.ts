import type { Article } from '../../types/index.ts';

// 文件意图：维护《Chernobyl: The 1986 Nuclear Disaster that Exposed Soviet Secrets and Changed Global Safety Standards》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00159 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00159',
  slug: 'chernobyl-the-1986-nuclear-disaster-that-exposed-soviet-secrets-and-changed-global-safety-standards',
  title: 'Chernobyl: The 1986 Nuclear Disaster that Exposed Soviet Secrets and Changed Global Safety Standards',
  subtitle: 'How a midnight explosion reshaped nuclear policy worldwide.',
  summary: 'The Chernobyl accident revealed hidden flaws in Soviet nuclear practice and sparked a global overhaul of safety standards.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early hours of April 26, 1986, the <span class="vocab" data-cn="核反应堆">reactor</span> at the Chernobyl Nuclear Power Plant near the ghostly town of <span class="vocab" data-cn="普里皮亚季，乌克兰的废弃城市">Pripyat</span> erupted in a violent <span class="vocab" data-cn="爆炸">explosion</span>. The blast ripped the roof off Reactor 4, sending a plume of super‑heated steam and radioactive material skyward. Within minutes, alarms blared, workers scrambled, and the night sky over the Ukrainian SSR was briefly illuminated by an eerie, orange glow that would later become a symbol of one of the worst nuclear catastrophes in history.`,
    `Investigations soon identified the root cause: a combination of design flaws in the Soviet‑built <span class="vocab" data-cn="石墨减速的沸水堆，苏联特有的核反应堆类型">RBMK</span> and critical operator mistakes during a safety test. The reactor’s <span class="vocab" data-cn="控制棒，用于调节核裂变速率">control rods</span> were inserted too slowly, while the plant’s “positive void coefficient” meant that steam formation actually increased the reaction rate instead of damping it. This feedback loop drove the power surge that culminated in the explosion.`,
    `What made Chernobyl especially tragic was the veil of <span class="vocab" data-cn="苏联时期对信息的严格封锁">Soviet secrecy</span>. The plant’s operators initially downplayed the incident, reporting only a minor malfunction. Evacuation orders for Pripyat were delayed until nearly 36 hours after the blast, by which time residents had already been exposed to dangerous levels of <span class="vocab" data-cn="放射性沉降物，随风扩散的核辐射颗粒">radioactive fallout</span>. The lack of transparent communication amplified public fear and hindered early medical response.`,
    `The world learned about the disaster not from Soviet broadcasts but from a lone Swedish monitoring station that detected abnormal radiation levels on its instruments. This prompted the <span class="vocab" data-cn="国际原子能机构，负责监督全球核安全的组织">International Atomic Energy Agency (IAEA)</span> to send experts to the USSR, where they confirmed the scale of the accident and began coordinating international assistance. The incident highlighted how a single detection network could pierce even the most closed societies’ information barriers.`,
    `In the aftermath, an estimated 600,000 volunteers known as <span class="vocab" data-cn="清理核事故现场的工人，被称为“液体者”">liquidators</span> were mobilized to contain the damage. They erected a massive concrete and steel structure called the <span class="vocab" data-cn="用于封闭受损反应堆的混凝土外壳">containment sarcophagus</span>, which encased the ruined reactor and limited further release of radiation. The work was perilous; many liquidators suffered acute radiation sickness, and their sacrifices remain a poignant reminder of human resilience in the face of technological failure.`,
    `Chernobyl’s legacy reshaped global nuclear policy. Nations worldwide instituted stricter <span class="vocab" data-cn="安全文化，强调组织内部对安全的共同责任">safety culture</span> standards, mandating independent oversight and transparent reporting. The accident spurred the creation of the World Association of Nuclear Operators (WANO) in 1989, fostering international cooperation to prevent similar catastrophes. Regulatory bodies such as the U.S. Nuclear Regulatory Commission tightened design requirements, especially concerning reactor stability under abnormal conditions.`,
    `Today, the Chernobyl Exclusion Zone stands as both a cautionary tale and an unexpected sanctuary for wildlife. The site’s infamous <span class="vocab" data-cn="核熔毁，指反应堆核心因过热而融化的过程">meltdown</span> continues to be studied by scientists seeking to improve reactor safety, while guided tours allow visitors to witness the haunting remnants of a world once hidden behind iron curtains. The disaster’s lessons endure: transparency, rigorous engineering, and an unwavering commitment to safety are essential safeguards against the invisible power of the atom.`,
  ],
  vocabulary: [
    { word: 'reactor', cn: '核反应堆' },
    { word: 'RBMK', cn: '石墨减速的沸水堆，苏联特有的核反应堆类型' },
    { word: 'control rods', cn: '控制棒，用于调节核裂变速率' },
    { word: 'radioactive fallout', cn: '放射性沉降物，随风扩散的核辐射颗粒' },
    { word: 'International Atomic Energy Agency (IAEA)', cn: '国际原子能机构，负责监督全球核安全的组织' },
    { word: 'liquidators', cn: '清理核事故现场的工人，被称为“液体者”' },
    { word: 'containment sarcophagus', cn: '用于封闭受损反应堆的混凝土外壳' },
    { word: 'safety culture', cn: '安全文化，强调组织内部对安全的共同责任' },
    { word: 'meltdown', cn: '核熔毁，指反应堆核心因过热而融化的过程' },
  ],
};

export default article;
