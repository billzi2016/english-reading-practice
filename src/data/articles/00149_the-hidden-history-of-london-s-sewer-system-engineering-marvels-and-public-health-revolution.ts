import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Hidden History of London’s Sewer System》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00149 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00149',
  slug: 'the-hidden-history-of-london-s-sewer-system-engineering-marvels-and-public-health-revolution',
  title: 'The Hidden History of London’s Sewer System',
  subtitle: 'Engineering Marvels and Public Health Revolution',
  summary: 'How a Victorian engineering feat transformed London’s streets, health, and the world’s view of sanitation.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1800s London was a city of stark contrasts. Its narrow alleys were packed with families, while its streets doubled as open‑air latrines. Waste poured directly into cesspits or, worse, into the muddy banks of the <span class="vocab" data-cn="泰晤士河">Thames</span>. The resulting foul air and contaminated water made everyday life a battle against disease, and the term <span class="vocab" data-cn="下水道">sewer</span> was barely more than a whispered hope for something that might one day carry away the filth.`,
    `The city’s most terrifying foe proved to be <span class="vocab" data-cn="霍乱">cholera</span>. Between 1832 and 1854 three major epidemics swept through London, each claiming thousands of lives. It was a young physician named John Snow who, using the emerging science of <span class="vocab" data-cn="流行病学">epidemiology</span>, traced one outbreak to a contaminated water pump on Broad Street. His work hinted that the invisible enemy travelled not through miasma but through water, yet the city’s infrastructure remained woefully inadequate.`,
    `The situation reached its climax in the summer of 1858, an event later dubbed the <span class="vocab" data-cn="大臭事件">Great Stink</span>. The heat intensified the smell of raw sewage spilling into the Thames, and a thick fog carried the odor through Parliament’s corridors. Law‑makers could no longer ignore the crisis; debates turned from abstract budgets to urgent calls for a comprehensive drainage solution. The pressure finally forced the Metropolitan Board of Works to act.`,
    `Enter <span class="vocab" data-cn="约瑟夫·巴扎尔吉特">Joseph Bazalgette</span>, the board’s chief engineer, whose vision combined practicality with grandeur. He proposed an extensive network of tunnels that would rely on <span class="vocab" data-cn="重力流">gravity flow</span> to move waste away from the city without the need for pumps. By designing a system of intercepting sewers that ran parallel to the river, Bazalgette could capture both household discharge and rainwater before they reached the Thames.`,
    `Construction began in 1859 and soon produced one of the era’s most ambitious civil works. Massive brick arches, some over 7 meters high and 2 meters thick, were excavated beneath bustling streets. The new lines formed a <span class="vocab" data-cn="合流下水道系统">combined sewer</span> that collected both sewage and storm runoff, channeling it to outfalls downstream of the city. Alongside these tunnels, Bazalgette built the iconic embankments—known simply as the <span class="vocab" data-cn="堤岸">embankment</span>s—that reclaimed riverbanks for roads and public gardens while also housing the sewers within their walls.`,
    `The impact on <span class="vocab" data-cn="公共卫生">public health</span> was immediate. Within a decade, cholera deaths fell dramatically, and other water‑borne diseases such as typhoid became far less common. The city’s newfound ability to manage waste marked the birth of modern <span class="vocab" data-cn="卫生设施">sanitation</span>, setting a template that cities worldwide would later emulate. Life expectancy rose, and London’s streets—once choked with filth—began to feel cleaner and safer for its residents.`,
    `Bazalgette’s legacy endures, but the system he built now faces 21st‑century challenges. The original tunnels were designed for a population of one million; today, over nine million people rely on them, and heavy rains still overwhelm the <span class="vocab" data-cn="暴雨径流">stormwater</span> capacity, causing occasional overflows into the river. Modern engineers are responding with massive upgrades such as the Thames Tideway Tunnel—a new “super‑sewer” that will capture excess flow and feed it to advanced <span class="vocab" data-cn="污水处理设施">wastewater treatment</span> plants. In this way, Bazalgette’s Victorian marvel continues to evolve, reminding us that the battle for clean water is never truly finished.`,
  ],
  vocabulary: [
    { word: 'sewer', cn: '下水道' },
    { word: 'cholera', cn: '霍乱' },
    { word: 'epidemiology', cn: '流行病学' },
    { word: 'Great Stink', cn: '大臭事件' },
    { word: 'Thames', cn: '泰晤士河' },
    { word: 'Joseph Bazalgette', cn: '约瑟夫·巴扎尔吉特' },
    { word: 'gravity flow', cn: '重力流' },
    { word: 'combined sewer', cn: '合流下水道系统' },
    { word: 'embankment', cn: '堤岸' },
    { word: 'public health', cn: '公共卫生' },
    { word: 'sanitation', cn: '卫生设施' },
    { word: 'stormwater', cn: '暴雨径流' },
    { word: 'wastewater treatment', cn: '污水处理设施' },
  ],
};

export default article;
