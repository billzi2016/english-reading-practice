import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Baltimore Fire of 1904: A Blaze That Redefined American Building Codes》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00433 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00433',
  slug: 'the-great-baltimore-fire-of-1904-a-blaze-that-redefined-american-building-codes',
  title: 'The Great Baltimore Fire of 1904: A Blaze That Redefined American Building Codes',
  subtitle: 'How a single inferno reshaped fire safety across the United States',
  summary: 'An in‑depth look at the 1904 Baltimore blaze and its lasting impact on building regulations.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On February 7, 1904, a small spark ignited a pile of wooden shavings in a warehouse on Light Street. Within minutes the flame leapt to adjacent structures, and what began as a modest blaze quickly escalated into the <span class="vocab" data-cn="大巴尔的摩火灾">Great Baltimore Fire</span>. By nightfall, more than 1,500 buildings—ranging from modest row houses to towering commercial blocks—were reduced to ash, making it one of the most destructive urban fires in American history.`,
    `The fire’s ferocity was amplified by the city’s dense construction style. Most downtown buildings were framed with heavy timber and clad in combustible brick veneer, a common practice before modern <span class="vocab" data-cn="建筑规范">building codes</span> took hold. In addition, narrow streets limited the maneuverability of the local <span class="vocab" data-cn="消防部门">fire department</span>, whose equipment relied on horse‑drawn steam pumps that could not keep pace with the rapidly spreading inferno.`,
    `As the flames roared, neighboring cities responded under a system known as <span class="vocab" data-cn="相互援助">mutual aid</span>. Firefighters from Philadelphia, Washington D.C., and even New York arrived with their own hoses and pumps. However, a critical obstacle emerged: each city used different hose couplings and pipe diameters, rendering many of the arriving units incompatible with Baltimore’s hydrants. This lack of standardization turned what should have been a coordinated effort into a chaotic scramble for water.`,
    `The devastation prompted an immediate investigation by the <span class="vocab" data-cn="美国消防保险协会">National Board of Fire Underwriters</span>. Their report highlighted three primary failures: inadequate fire‑resistant materials, insufficient water supply infrastructure, and the absence of uniform equipment standards. The board’s recommendations called for stricter regulations on exterior wall construction, mandatory installation of fire breaks, and a national standard for hose couplings—a proposal that would later become known as the “National Fire Hose Standard.”`,
    `In response to these findings, Baltimore’s city council enacted sweeping reforms. New ordinances required all new commercial buildings to incorporate steel frames and non‑combustible cladding, while existing structures were retrofitted with firewalls where feasible. The city also upgraded its water mains, installing larger diameter pipes capable of delivering higher pressure streams to combat future blazes. These measures not only reduced the risk of another disaster but also set a precedent for other municipalities across the United States.`,
    `The ripple effects extended beyond Baltimore’s borders. By 1910, several major cities—including Chicago and San Francisco—had adopted similar fire‑resistant construction mandates. The federal government, recognizing the economic toll of such fires, began offering grants to support municipal upgrades of water distribution systems. Moreover, manufacturers standardized hose fittings according to the National Fire Hose Standard, ensuring that a fire engine from any city could connect seamlessly to local hydrants—a simple yet profound improvement born from tragedy.`,
    `Today, the legacy of the Great Baltimore Fire lives on in every modern skyscraper’s steel skeleton and every municipal water system’s pressure gauge. While the flames consumed over 1,500 structures and left thousands homeless, they also ignited a nationwide commitment to safer building practices. The fire serves as a stark reminder that urban resilience often emerges from the ashes of disaster, shaping policies that protect future generations.`,
  ],
  vocabulary: [
    { word: 'Great Baltimore Fire', cn: '大巴尔的摩火灾' },
    { word: 'building codes', cn: '建筑规范' },
    { word: 'fire department', cn: '消防部门' },
    { word: 'mutual aid', cn: '相互援助' },
    { word: 'National Board of Fire Underwriters', cn: '美国消防保险协会' },
    { word: 'National Fire Hose Standard', cn: '国家消防软管标准' },
  ],
};

export default article;
