import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1970s Solar Car Challenge: Pioneering Renewable Transportation on the Open Road》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00184 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00184',
  slug: 'the-1970s-solar-car-challenge-pioneering-renewable-transportation-on-the-open-road',
  title: 'The 1970s Solar Car Challenge: Pioneering Renewable Transportation on the Open Road',
  subtitle: 'How early solar‑powered experiments turned a crisis into a road‑ready vision.',
  summary: 'A look back at the daring 1970s experiments that laid the groundwork for today’s solar car competitions.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `The 1973 oil embargo sent shockwaves through every corner of American life, and engineers suddenly found themselves answering a new question: could sunlight replace gasoline? By the mid‑1970s a handful of university labs and hobbyist groups began to treat the open road as a laboratory, launching what later historians would call the first informal <span class="vocab" data-cn="太阳能汽车挑战赛">solar car challenge</span>. These early outings were not organized races with prize money; they were proof‑of‑concept drives meant to show that a vehicle powered solely by the sun could travel more than a few miles on a clear day.`,
    `One of the most celebrated prototypes was MIT’s “Sunmobile,” completed in 1975. The team wrapped a lightweight aluminum <span class="vocab" data-cn="底盘">chassis</span> with a sleek, low‑drag body and covered it with a 1.2 m² <span class="vocab" data-cn="光伏">photovoltaic</span> <span class="vocab" data-cn="太阳能阵列">solar array</span>. The cells generated roughly 300 W under peak sunlight, enough to propel the car at a modest 15 km/h on campus roads. Although the Sunmobile never left the university grounds, its public demonstrations attracted national media attention and proved that solar energy could be harvested directly for propulsion.`,
    `Inspired by MIT’s success, the Solar Energy Research Institute (SERI) in Golden, Colorado, organized an informal cross‑state drive in 1979. Ten teams from across the United States were invited to assemble their own solar vehicles and attempt a 1 200‑kilometre journey from Denver to Santa Fe. Engineers focused heavily on <span class="vocab" data-cn="空气动力学的">aerodynamic</span> shaping, polishing fiberglass bodies to reduce drag coefficients below 0.20. The cars also featured custom‑built <span class="vocab" data-cn="逆变器">inverters</span> that converted the DC output of the solar cells into AC for the electric motor, a technology still refined today.`,
    `The 1979 drive highlighted several technical hurdles that would dominate solar vehicle design for decades. Battery <span class="vocab" data-cn="能量密度">energy density</span> was low; lead‑acid packs added weight faster than they stored usable energy, forcing teams to balance range against speed. To mitigate this, many groups experimented with early forms of <span class="vocab" data-cn="再生制动">regenerative braking</span>, feeding kinetic energy back into the batteries during deceleration. Even small improvements in inverter efficiency—often only 80 % at the time—could translate into an extra ten kilometres of range under sunny conditions.`,
    `Public reaction to these open‑road experiments was surprisingly enthusiastic. Newspapers ran front‑page stories about “the cars that run on sunshine,” and a handful of local TV stations filmed the solar convoy cruising along interstate highways. The visibility helped convince policymakers that renewable transportation deserved federal research funding, leading to the establishment of the Department of Energy’s (DOE) Solar Vehicle Program in 1980. Although the program was modest, it provided grants for university teams to refine their designs and laid the administrative groundwork for future competitions.`,
    `The legacy of the 1970s experiments became evident when Australia launched the World Solar Challenge in 1987, a formally organized race that attracted entries from every continent. Many of the engineering lessons—lightweight <span class="vocab" data-cn="底盘">chassis</span> construction, high‑efficiency <span class="vocab" data-cn="逆变器">inverters</span>, and sophisticated <span class="vocab" data-cn="再生制动">regenerative braking</span> systems—were direct descendants of the earlier U.S. drives. Modern solar cars such as the Lightyear One or the Tokai University “Suna” now achieve highway speeds while maintaining a carbon‑neutral footprint, a testament to the pioneering spirit of those 1970s innovators.`,
    `Looking ahead, the open‑road challenges of the 1970s remind us that breakthrough technologies often begin as daring experiments on public streets rather than in isolated labs. As battery <span class="vocab" data-cn="能量密度">energy density</span> continues to improve and solar cell efficiencies surpass 25 %, the vision of a vehicle powered entirely by sunlight is no longer science fiction but an emerging reality. The early solar car pioneers proved that with imagination, engineering rigor, and a willingness to drive on untested routes, renewable transportation can move from concept to everyday life.`,
  ],
  vocabulary: [
    { word: 'photovoltaic', cn: '光伏' },
    { word: 'solar array', cn: '太阳能阵列' },
    { word: 'aerodynamic', cn: '空气动力学的' },
    { word: 'energy density', cn: '能量密度' },
    { word: 'regenerative braking', cn: '再生制动' },
    { word: 'inverter', cn: '逆变器' },
    { word: 'chassis', cn: '底盘' },
  ],
};

export default article;
