import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great London Fire of 1666: How a Blaze Reshaped Urban Planning and Science》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00093 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00093',
  slug: 'the-great-london-fire-of-1666-how-a-blaze-reshaped-urban-planning-and-science',
  title: 'The Great London Fire of 1666: How a Blaze Reshaped Urban Planning and Science',
  subtitle: 'From devastation to modern city design',
  summary: 'A look at how the 1666 inferno forced London to rethink its streets, buildings, and scientific approaches to fire safety.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On the night of September 2, 1666, a careless spark in Thomas Farriner’s bakery on Pudding Lane ignited what would become known as the <span class="vocab" data-cn="伦敦大火（1666年）">Great Fire of London</span>. At that time, the city was a dense maze of narrow alleys and over‑crowded homes, many of which were constructed from highly flammable materials. Within hours, the flames leapt from house to house, feeding on the abundant timber and turning the night sky into an orange inferno that could be seen for miles.`,
    `The architecture of 17th‑century London was dominated by <span class="vocab" data-cn="木结构房屋">timber-framed houses</span>, topped with thatched roofs and packed tightly together. Streets were often no wider than a cart’s axle, leaving little room for fire engines or organized evacuations. As the blaze spread eastward, it consumed over 13,000 homes, 87 churches, and countless workshops, illustrating how urban density can amplify disaster risk.`,
    `Early firefighting efforts relied on primitive methods: bucket brigades, hand‑pulled pumps, and the creation of ad‑hoc <span class="vocab" data-cn="防火隔离带">firebreaks</span>. Citizens were ordered to pull down houses in front of the flames, hoping to starve the fire of fuel. While these measures slowed the advance temporarily, they also caused additional property loss and highlighted the need for a coordinated response plan—a lesson that would later influence modern emergency services.` ,
    `In the aftermath, King Charles II appointed Sir Christopher Wren as one of the chief architects of reconstruction. Wren championed a new <span class="vocab" data-cn="建筑规范">building code</span> that mandated the use of brick and stone instead of timber for walls and roofs. The 1666 Rebuilding Act also required wider streets, standardized lot sizes, and regulated chimney heights to improve ventilation and reduce future fire hazards.` ,
    `These urban reforms reshaped London’s layout dramatically. Streets such as Fleet Street were widened, creating broader thoroughfares that facilitated traffic flow and emergency access. Moreover, the need for accurate property records spurred the creation of early <span class="vocab" data-cn="保险地图">insurance maps</span>, which later evolved into detailed cadastral surveys used by insurers to assess risk.` ,
    `The disaster also sparked scientific curiosity. Members of the <span class="vocab" data-cn="皇家学会">Royal Society</span> convened to study fire dynamics, documenting how wind direction, building materials, and street geometry interacted during a blaze. Their observations laid groundwork for modern fire‑safety engineering, influencing designs such as the enclosed <span class="vocab" data-cn="烟囱">chimney</span> that vented smoke more efficiently and reduced accidental ignitions.` ,
    `Today, London’s post‑fire street grid still bears the imprint of those 17th‑century reforms. The emphasis on fire‑resistant construction, regulated building heights, and systematic urban planning can be traced directly back to lessons learned in 1666. Modern city planners worldwide study this episode as a case where tragedy catalyzed scientific inquiry and lasting improvements in how we design safe, resilient cities.` ,
  ],
  vocabulary: [
    { word: 'Great Fire of London', cn: '伦敦大火（1666年）' },
    { word: 'timber-framed houses', cn: '木结构房屋' },
    { word: 'firebreak', cn: '防火隔离带' },
    { word: 'building code', cn: '建筑规范' },
    { word: 'Royal Society', cn: '皇家学会' },
    { word: 'chimney', cn: '烟囱' },
  ],
};

export default article;
