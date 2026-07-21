import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Construction of the Hoover Dam: Engineering Triumph, Politics, and Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00350 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00350',
  slug: 'the-construction-of-the-hoover-dam-engineering-triumph-politics-and-legacy',
  title: 'The Construction of the Hoover Dam: Engineering Triumph, Politics, and Legacy',
  subtitle: 'How a massive public works project reshaped the American West.',
  summary: 'An engaging look at the technical challenges, political battles, and lasting impact of the Hoover Dam.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When President Herbert <span class="vocab" data-cn="胡佛">Hoover</span> signed the Boulder Canyon Project Act in 1928, the United States set its sights on taming the Colorado River. The plan called for a massive <span class="vocab" data-cn="混凝土拱坝">arch‑gravity dam</span> that would store water, generate electricity, and control floods across an arid region stretching from Arizona to Nevada. At the time, such a structure seemed almost fantastical; engineers had never attempted to pour more than a few hundred thousand cubic yards of <span class="vocab" data-cn="混凝土">concrete</span> in one continuous project.`,
    `Construction began in 1931 under the supervision of the <span class="vocab" data-cn="美国水利局">Bureau of Reclamation</span>. The site presented a hostile environment: summer temperatures topped 120 °F (49 °C), while winter brought bitter winds that could freeze concrete before it set. To overcome these extremes, workers built a network of <span class="vocab" data-cn="旁通隧道">bypass tunnels</span> to divert the river’s flow, allowing the dam’s foundation to be excavated in dry conditions. The tunnels themselves required precise blasting and lining, a feat that would later influence tunnel construction worldwide.`,
    `One of the most iconic engineering challenges was the placement of the massive concrete blocks that form the dam’s face. Engineers devised an innovative cooling system: they embedded a lattice of steel <span class="vocab" data-cn="冷却管道">cooling pipes</span> within each pour, circulating icy water to draw heat away and prevent cracking. This method allowed them to place over 3.25 million cubic yards of concrete—enough to build a wall from San Francisco to New York—without the material losing its structural integrity.`,
    `While engineers wrestled with physics, politicians grappled with power. The dam’s location sat at the crossroads of competing state interests. Arizona feared that Nevada would claim a disproportionate share of water, while California worried about downstream irrigation rights. To settle these disputes, the 1922 <span class="vocab" data-cn="科罗拉多河水权协定">Colorado River Compact</span> was renegotiated, allocating water based on projected usage. The project also became a centerpiece of President Franklin D. Roosevelt’s New Deal, providing jobs for thousands of unemployed workers during the Great Depression.`,
    `Inside the dam’s powerhouse, massive <span class="vocab" data-cn="水轮机">turbines</span> convert the river’s kinetic energy into electricity. When completed in 1936, the facility could generate up to 2,080 megawatts—enough to power a city the size of Los Angeles at that time. The electricity was transmitted over high‑voltage lines to urban centers across the Southwest, spurring industrial growth and cementing the region’s economic transformation.`,
    `Beyond its immediate utility, the Hoover Dam left an indelible cultural legacy. Its towering concrete walls became a symbol of American ingenuity, featured in countless films, postcards, and travel brochures. The surrounding area evolved into a tourist destination, with visitors drawn to the dramatic spillway that can release up to 1 million cubic feet of water per second during peak flow. Even today, the dam’s maintenance crews monitor structural health using laser scanning and drone inspections—technologies unimaginable in the 1930s.`,
    `The dam’s influence extends into modern water policy debates. As climate change alters precipitation patterns across the West, engineers and lawmakers revisit the original assumptions that guided the Boulder Canyon Project. Discussions now focus on balancing hydroelectric generation with ecological preservation, a conversation rooted in the very compromises made during the dam’s construction. In this way, the Hoover Dam remains not just an engineering marvel, but a living laboratory for sustainable resource management.`
  ],
  vocabulary: [
    { word: 'Hoover', cn: '胡佛（美国第31任总统）' },
    { word: 'arch‑gravity dam', cn: '混凝土拱坝，一种结合拱形和重力支撑的水坝' },
    { word: 'concrete', cn: '混凝土，建筑常用的人造石材' },
    { word: 'Bureau of Reclamation', cn: '美国水利局，负责西部水资源开发的联邦机构' },
    { word: 'bypass tunnels', cn: '旁通隧道，用于在建坝期间转移河流' },
    { word: 'cooling pipes', cn: '冷却管道，嵌入混凝土中以降低温度防止裂缝' },
    { word: 'Colorado River Compact', cn: '科罗拉多河水权协定，分配上下游用水的协议' },
    { word: 'turbines', cn: '水轮机，将水流动能转化为电能的装置' }
  ],
};

export default article;
