import type { Article } from '../../types/index.ts';

// 文件意图：维护《Elisha Otis and the Safety Elevator: Lifting Cities into the Skies》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00378 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00378',
  slug: 'elisha-otis-and-the-safety-elevator-lifting-cities-into-the-skies',
  title: 'Elisha Otis and the Safety Elevator: Lifting Cities into the Skies',
  subtitle: 'How a single invention reshaped urban architecture',
  summary: 'The safety elevator made skyscrapers possible, changing how we live and work in dense cities.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When you look up at a modern skyline, the towering glass monoliths seem to defy gravity. Yet few realize that their very existence depends on a humble machine that first rose in the mid‑19th century: the <span class="vocab" data-cn="安全电梯">safety elevator</span>. Before its invention, buildings taller than five stories were rare because climbing stairs was impractical and early lifts were terrifyingly unsafe. The breakthrough by one inventive mechanic turned vertical travel into a reliable service, allowing cities to grow upward instead of outward.`,
    `Elisha Graves Otis was born in 1811 on a farm in Vermont and later moved to Yonkers, New York, where he worked as a carriage maker. His fascination with mechanics led him to experiment with hoisting devices for his own workshop. In 1852, after witnessing a tragic accident caused by a broken rope on a freight lift, Otis devised a simple yet ingenious solution: a spring‑loaded <span class="vocab" data-cn="制动装置">brake</span> that would engage automatically if the hoisting rope failed. He patented this mechanism in 1853, laying the legal groundwork for his future enterprise.`,
    `Otis’s claim was not just theoretical; he staged a dramatic public demonstration at New York’s Crystal Palace exhibition in 1854. With a crowd of skeptics watching, he ordered the lift to ascend, then deliberately cut the rope. The platform plummeted only an inch before the spring brake snapped it shut, leaving the passengers unharmed. The audience erupted in applause, and newspapers proclaimed “the elevator that will change the world.” This moment cemented Otis’s reputation as a visionary inventor and secured vital investment for his fledgling company.`,
    `The impact of the safety elevator on architecture was immediate and profound. Builders no longer needed to limit structures to the height at which stairs remained reasonable. By the 1880s, architects in Chicago began experimenting with steel frames that could support much taller <span class="vocab" data-cn="摩天大楼">skyscrapers</span>. The Home Insurance Building, completed in 1885, is often cited as the first true skyscraper, and its ten‑story height would have been impossible without reliable vertical transport. Otis’s elevators made upper floors desirable office space rather than undesirable storage, reshaping real estate economics forever.`,
    `Technical evolution continued long after the original steam‑driven hoist. Electric motors replaced bulky boilers, and the introduction of a <span class="vocab" data-cn="配重">counterweight</span> system balanced the car’s weight against the load, reducing energy consumption and wear on cables. Later, hydraulic pistons allowed smooth starts and stops in low‑rise buildings, while high‑rise towers adopted traction elevators with steel ropes that could travel hundreds of meters. Each advancement retained Otis’s core safety principle: a fail‑safe brake that engages if speed exceeds safe limits.`,
    `Beyond engineering, the elevator transformed urban life. Office workers could now commute to upper floors in seconds, prompting corporations to stack departments vertically and freeing valuable ground‑level real estate for retail and public spaces. Residential towers followed suit, offering city dwellers panoramic views previously reserved for the elite. The vertical city model also alleviated land scarcity, a crucial factor in rapidly growing metropolises like New York, Chicago, and later Asian megacities such as Hong Kong.`,
    `Today, the Otis Elevator Company remains a global leader, operating more than 2 million elevators worldwide. Modern systems incorporate smart sensors, destination‑control algorithms, and even regenerative drives that feed electricity back into the building’s grid. Yet the fundamental safety brake that Elisha Otis patented over 150 years ago still underpins every design. His legacy reminds us that a single practical invention can lift not just people, but entire societies toward new horizons.`,
  ],
  vocabulary: [
    { word: 'safety elevator', cn: '安全电梯' },
    { word: 'brake', cn: '制动装置' },
    { word: 'skyscraper', cn: '摩天大楼' },
    { word: 'counterweight', cn: '配重' },
    { word: 'patent', cn: '专利' },
    { word: 'hydraulic', cn: '液压的' },
  ],
};

export default article;
