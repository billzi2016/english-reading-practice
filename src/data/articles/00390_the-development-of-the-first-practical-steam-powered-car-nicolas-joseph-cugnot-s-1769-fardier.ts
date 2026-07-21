import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Development of the First Practical Steam‑Powered Car: Nicolas‑Joseph Cugnot’s 1769 Fardier》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00390 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00390',
  slug: 'the-development-of-the-first-practical-steam-powered-car-nicolas-joseph-cugnot-s-1769-fardier',
  title: 'The Development of the First Practical Steam‑Powered Car: Nicolas‑Joseph Cugnot’s 1769 Fardier',
  subtitle: 'How a French artillery officer imagined motorised transport long before the internal‑combustion engine.',
  summary: 'An engaging narrative about Nicolas‑Joseph Cugnet’s steam‑driven fardier, its engineering challenges, and its place in automotive history.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1769, a young French artillery officer named Nicolas‑Joseph Cugnot presented a curious contraption to the <span class="vocab" data-cn="法国皇家工艺学院">Royal Academy of Sciences</span>. The machine resembled a large wooden carriage but was powered not by horses but by a compact <span class="vocab" data-cn="蒸汽机">steam engine</span> that drove its rear wheels. Cugnot called his invention a “fardier à vapeur,” literally a steam‑driven freight cart, and it would become the world’s first practical self‑propelled vehicle.</`,
    `The heart of the fardier was a single vertical <span class="vocab" data-cn="汽缸">cylinder</span> that forced steam into a piston, converting thermal energy into linear motion. This motion was transmitted through a simple <span class="vocab" data-cn="动力传动系统">powertrain</span> consisting of connecting rods and a set of large wooden wheels. Unlike earlier attempts that relied on blowing air or using clockwork springs, Cugnot’s design could sustain motion for several minutes at a time, enough to move the 4‑ton carriage at a modest speed of about 2.5 km/h.</`,
    `One of the most striking engineering solutions was the steering mechanism. The front axle was mounted on a pivot that allowed it to turn left or right, but because the rear wheels were driven directly by the piston, they could not swivel. To keep the vehicle stable, Cugnot added a pair of small “walking wheels” at the front, which acted like a rudimentary <span class="vocab" data-cn="转向装置">articulated steering</span> system. This arrangement meant that the driver had to constantly balance throttle and direction, a task made harder by the noisy, vibrating engine.</`,
    `Cugnot’s fardier was not merely a laboratory curiosity; it was built for a specific military purpose. The French army needed a way to transport heavy artillery pieces quickly across battlefields without relying on draft animals that could be frightened or exhausted. In trials conducted at the Versailles arsenal, the fardier successfully pulled a 1‑ton cannon and its carriage over a short distance, impressing many observers. However, the vehicle’s <span class="vocab" data-cn="锅炉压力计">boiler pressure gauge</span> was rudimentary, and the steam system required frequent reheating, limiting its operational range.</`,
    `Despite these limitations, Cugnot’s invention sparked a wave of interest across Europe. Engineers such as James Watt in Britain took note of the French experiment while refining their own <span class="vocab" data-cn="马力">horsepower</span> calculations for stationary engines. In France, the fardier inspired later inventors like François Isaac de Rivaz, who would combine steam power with internal combustion concepts decades later. The idea that a vehicle could move without animal traction became an enduring dream, eventually leading to the gasoline‑powered automobiles of the late 19th century.</`,
    `The fardier’s legacy is also cultural. Contemporary newspapers described it as “a monstrous carriage that devours fire,” reflecting both awe and skepticism. Artists sketched the massive wooden frame with its towering chimney, and poets wrote verses about a future where roads would be filled with “iron horses.” Although Cugnot never saw his invention become commercially viable—he died in 1804 without further development—the fardier remains a pivotal milestone that demonstrated the feasibility of mechanised road transport.</`,
    `Today, a replica of Cugnet’s 1769 fardier can be seen at the Musée des Arts et Métiers in Paris. Visitors can hear the hiss of steam and watch the pistons move, gaining a tangible sense of how early engineers wrestled with thermodynamics, materials, and control systems long before modern computer simulations existed. The story reminds us that breakthroughs often arise from bold imagination coupled with painstaking trial‑and‑error, a lesson as relevant to today’s electric vehicle designers as it was to Cugnot’s workshop over two centuries ago.`
  ],
  vocabulary: [
    { word: 'Royal Academy of Sciences', cn: '法国皇家工艺学院' },
    { word: 'steam engine', cn: '蒸汽机' },
    { word: 'cylinder', cn: '汽缸' },
    { word: 'powertrain', cn: '动力传动系统' },
    { word: 'articulated steering', cn: '转向装置' },
    { word: 'boiler pressure gauge', cn: '锅炉压力计' },
    { word: 'horsepower', cn: '马力' }
  ],
};

export default article;
