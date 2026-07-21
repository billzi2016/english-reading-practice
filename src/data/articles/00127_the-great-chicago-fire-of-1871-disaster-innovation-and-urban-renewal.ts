import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Chicago Fire of 1871: Disaster, Innovation, and Urban Renewal》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00127 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00127',
  slug: 'the-great-chicago-fire-of-1871-disaster-innovation-and-urban-renewal',
  title: 'The Great Chicago Fire of 1871: Disaster, Innovation, and Urban Renewal',
  subtitle: 'How a blaze reshaped America’s skyline',
  summary: 'A vivid look at the causes, devastation, and lasting reforms sparked by Chicago’s 1871 fire.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On the night of October 8, 1871, a small spark in a barn on the city’s southwest side ignited what would become one of America’s most infamous <span class="vocab" data-cn="大火">conflagrations</span>.  The dry summer, combined with strong winds from Lake Michigan, turned wooden structures into tinder. Within hours, flames leapt across narrow streets, devouring homes, businesses, and the iconic <span class="vocab" data-cn="木结构建筑">timber‑frame</span> buildings that defined Chicago’s early skyline.`,
    `By dawn, the fire had razed roughly 2 square miles, leaving an estimated 100,000 residents homeless. The loss was not merely material; countless personal belongings and irreplaceable records vanished in the blaze. Yet amid the ruin, a surprising number of people survived by fleeing to the riverfront or climbing onto rooftops, where they were rescued by passing steamboats that had become impromptu lifelines.`,
    `The disaster exposed glaring weaknesses in Chicago’s <span class="vocab" data-cn="市政设施">municipal</span> infrastructure. Firefighters lacked adequate water pressure because the city’s pumping stations relied on wooden pipes that burst under heat. Moreover, the absence of a comprehensive building code meant that new construction continued to favor cheap wood over more resilient materials. In the aftermath, city leaders convened emergency meetings to draft stricter regulations, mandating the use of <span class="vocab" data-cn="砖石结构">brickwork</span> and stone for future buildings.`,
    `One of the most transformative responses was the birth of modern <span class="vocab" data-cn="城市规划">urban planning</span>. Architects such as Daniel Burnham, who would later design Chicago’s famed skyline, advocated for wider streets, firebreaks, and a grid that could accommodate rapid growth. The rebuilt downtown featured broader avenues like State Street, which not only facilitated firefighting but also encouraged commerce by allowing larger horse‑drawn wagons to navigate the city more efficiently.`,
    `The fire also accelerated Chicago’s emergence as a national <span class="vocab" data-cn="铁路枢纽">railroad hub</span>. While many tracks were damaged, the urgency of rebuilding prompted investors to lay new lines that connected the Midwest to both coasts. This network turned the city into a logistical powerhouse, attracting manufacturers who sought reliable transportation for raw materials and finished goods.`,
    `Economic recovery was swift, in part because of an unexpected boon: the rise of the <span class="vocab" data-cn="保险业">insurance</span> industry. After the fire, insurers introduced more comprehensive policies that covered fire damage, prompting property owners to rebuild with greater confidence. The influx of capital spurred innovations such as steel-frame construction, which would later enable the skyscrapers that define Chicago today.`,
    `Today, the Great Chicago Fire is remembered not only for its devastation but also for the resilience it inspired. Memorials stand at the former site of the O’Leary barn, and museums preserve artifacts that tell stories of loss and renewal. The city’s modern skyline—punctuated by towering steel giants—is a living testament to how tragedy can catalyze progress, turning ashes into an enduring legacy of ingenuity.`,
  ],
  vocabulary: [
    { word: 'conflagration', cn: '大火' },
    { word: 'timber‑frame', cn: '木结构建筑' },
    { word: 'municipal', cn: '市政设施' },
    { word: 'brickwork', cn: '砖石结构' },
    { word: 'urban planning', cn: '城市规划' },
    { word: 'railroad hub', cn: '铁路枢纽' },
    { word: 'insurance', cn: '保险业' },
    { word: 'steel-frame construction', cn: '钢框架结构' },
  ],
};

export default article;
