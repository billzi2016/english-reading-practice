import type { Article } from '../../types/index.ts';

// 文件意图：维护《Digging Through London: Engineering Triumphs and Labor Strife in Building the First Underground Tube》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00122 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00122',
  slug: 'digging-through-london-engineering-triumphs-and-labor-strife-in-building-the-first-underground-tube',
  title: 'Digging Through London: Engineering Triumphs and Labor Strife in Building the First Underground Tube',
  subtitle: 'How Victorian ingenuity met worker unrest to create the world’s first subway.',
  summary: 'A narrative of the technical challenges and social tensions that shaped the Metropolitan Railway, London’s inaugural underground line.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the population of Victorian London surged past three million in the 1850s, the city’s narrow streets could no longer accommodate horse‑drawn carriages and omnibuses. City planners began to look underground for a solution, inspired by earlier canal tunnels that had proved the soil could be crossed safely. The proposal that eventually won parliamentary backing was to build a railway beneath the bustling thoroughfares of the capital, linking Paddington to Farringdon. This bold vision set the stage for what would become known as the Metropolitan Railway, the world’s first underground “tube”.`,
    `The engineers chose the <span class="vocab" data-cn="一种在地面上挖掘后再回填的施工方法">cut‑and‑cover</span> technique because it allowed rapid excavation along existing roadways. Workers first dug a trench several meters deep, then erected temporary timber supports before lining the void with <span class="vocab" data-cn="用铸铁制成的隧道衬砌，能够承受土壤压力">cast‑iron tunnel segments</span> bolted together to form a continuous shell. Behind this metal skin, layers of brick were laid in a graceful <span class="vocab" data-cn="拱形结构，用于分散上方荷载的砖砌拱顶">brick arch</span>, creating a fire‑resistant interior that could support the weight of traffic above. The method was not without difficulty: water seepage from the Thames and its tributaries threatened to flood the works, requiring constant pumping and waterproofing measures.</`,
    `Steam locomotives were the only motive power available in the early 1860s, but their exhaust posed a serious health hazard inside confined tunnels. To mitigate the buildup of smoke and soot, engineers installed a series of <span class="vocab" data-cn="用于将空气和废气排出地下的竖井">ventilation shafts</span> at regular intervals, each capped with ornate iron grates that blended into the streetscape. These shafts acted like chimneys, drawing fresh air down and pushing polluted air upward. Despite these efforts, passengers often complained of a lingering “coal‑smell”, prompting the Metropolitan Railway to become one of the first lines to experiment with <span class="vocab" data-cn="使用电力驱动的列车系统，取代蒸汽机">electric traction</span> in the 1890s, a transition that would later define the modern tube network.</`,
    `Behind the engineering marvel lay a workforce of hardened laborers known as <span class="vocab" data-cn="从事大型土木工程的工人，常被称为“挖掘者”">navvies</span>. Their days began before dawn and stretched well beyond ten hours, with wages that barely covered the cost of living in London. The work was perilous: collapses, flooding, and exposure to coal dust were common, and safety regulations were rudimentary at best. By the early 1870s, growing discontent gave rise to informal <span class="vocab" data-cn="工人组织，旨在争取更好工作条件和工资的团体">labor unions</span>. Strikes over pay cuts and unsafe conditions occasionally halted tunnelling, forcing the railway company to negotiate better terms or risk costly delays. These early confrontations laid the groundwork for more organized industrial action in Britain’s later railway history.</`,
    `Financing such an ambitious project required both private capital and public endorsement. The chief promoter, civil engineer <span class="vocab" data-cn="查尔斯·皮尔逊，伦敦的城市规划者和铁路倡导者">Charles Pearson</span>, lobbied Parliament to pass a specific <span class="vocab" data-cn="授权大型工程项目的法律文件">Parliamentary Act</span> in 1854, granting the Metropolitan Railway Company the right to purchase land and construct tunnels beneath public roads. Investors were attracted by the promise of rapid commuter traffic, while city officials saw an opportunity to alleviate surface congestion. The line opened on January 10, 1863, with a modest fleet of six steam‑powered trains covering a distance of 3.75 miles.</`,
    `The success of the Metropolitan Railway proved that large‑scale subterranean construction was not only possible but also profitable. Its engineering solutions—particularly the use of brick arches and ventilation shafts—became templates for subsequent lines, such as the District and Circle Railways. Moreover, the labor struggles highlighted the need for safer working conditions, eventually influencing the Factory Acts and early health and safety legislation. Today, over a century later, commuters still travel through many of the original tunnels, a testament to Victorian ingenuity and the enduring impact of those who dug beneath London’s streets.`],
  vocabulary: [
    { word: 'cut-and-cover', cn: '一种在地面上挖掘后再回填的施工方法' },
    { word: 'cast-iron tunnel segments', cn: '用铸铁制成的隧道衬砌，能够承受土壤压力' },
    { word: 'brick arch', cn: '拱形结构，用于分散上方荷载的砖砌拱顶' },
    { word: 'ventilation shaft', cn: '用于将空气和废气排出地下的竖井' },
    { word: 'electric traction', cn: '使用电力驱动的列车系统，取代蒸汽机' },
    { word: 'navvy', cn: '从事大型土木工程的工人，常被称为“挖掘者”' },
    { word: 'labor union', cn: '工人组织，旨在争取更好工作条件和工资的团体' },
    { word: 'Parliamentary Act', cn: '授权大型工程项目的法律文件' }
  ],
};

export default article;
