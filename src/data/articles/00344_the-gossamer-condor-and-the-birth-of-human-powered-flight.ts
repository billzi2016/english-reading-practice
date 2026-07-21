import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Gossamer Condor and the Birth of Human‑Powered Flight》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00344 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00344',
  slug: 'the-gossamer-condor-and-the-birth-of-human-powered-flight',
  title: 'The Gossamer Condor and the Birth of Human‑Powered Flight',
  subtitle: 'How a fragile aircraft proved that humans could stay aloft on their own power.',
  summary: 'A story of ingenuity, perseverance, and the engineering breakthroughs behind the first successful human‑powered flight.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1970s a small team led by <span class="vocab" data-cn="保罗·麦克卡迪">Paul MacCready</span> set out to answer a seemingly impossible question: could a person pedal an aircraft fast enough to keep it airborne for more than a few seconds? The challenge was formalized as the <span class="vocab" data-cn="克雷默奖">Kremer prize</span>, a £50,000 bounty offered by British industrialist Henry Kremer for the first human‑powered craft to complete a figure‑eight course and demonstrate controlled flight.`,
    `MacCready’s answer was the <span class="vocab" data-cn="轻盈的康多尔">Gossamer Condor</span>, an aircraft whose structure resembled a giant kite more than a conventional airplane. Its frame was built from carbon‑fiber tubes and covered with Mylar film, giving it a total weight of just 70 pounds (about 32 kilograms). The ultra‑light design meant that the power required to stay aloft could be supplied by a fit cyclist turning a modest <span class="vocab" data-cn="螺旋桨">propeller</span> at roughly 12 revolutions per second.`,
    `Achieving flight was not merely a matter of shedding weight; the team also had to master <span class="vocab" data-cn="气动效率">aerodynamic efficiency</span>. The Condor’s wings spanned 85 feet (26 meters) and were shaped to produce high lift at very low speeds, resulting in an exceptionally low <span class="vocab" data-cn="翼载荷">wing loading</span> of about 0.5 pounds per square foot. This allowed the aircraft to glide slowly enough that a human could generate sufficient thrust without exhausting themselves within seconds.`,
    `The first successful flight took place on August 23, 1977 at Shafter Airport in California. Pilot <span class="vocab" data-cn="克里斯·洛根">Chris Loxton</span> pedaled the propeller while the Condor traced a gentle figure‑eight over the runway, staying aloft for more than three minutes. The achievement proved that with careful attention to weight, lift, and propulsion, human power could indeed sustain controlled flight—a milestone that stunned both engineers and the public alike.`,
    `Beyond winning the Kremer prize, the Gossamer Condor sparked a wave of experimentation in <span class="vocab" data-cn="人力驱动航空">human‑powered aviation</span>. Its successor, the <span class="vocab" data-cn="轻盈的康多尔2号">Gossamer Albatross</span>, crossed the English Channel in 1979, covering 22 miles (35 kilometers) on a single pedal stroke. These feats demonstrated that the principles refined by MacCready’s team could be scaled to longer distances, inspiring university teams and hobbyists worldwide to design their own ultra‑light flyers.`,
    `The legacy of the Condor extends into modern engineering education. Its emphasis on lightweight materials, structural simplicity, and system integration mirrors today’s approach to designing drones, solar‑powered aircraft, and even space habitats where every gram counts. Moreover, the project highlighted the value of interdisciplinary collaboration—combining aeronautical theory, material science, and human physiology into a single, elegant solution.`,
    `Today, museums such as the Smithsonian’s National Air and Space Museum preserve the original Gossamer Condor, allowing visitors to see firsthand how a thin sheet of Mylar and a bicycle chain could rewrite what was thought possible. The story remains a testament to curiosity-driven innovation: when engineers dare to ask “why not?” and then meticulously answer it, even the sky is no longer the limit.`
  ],
  vocabulary: [
    { word: 'Paul MacCready', cn: '保罗·麦克卡迪' },
    { word: 'Kremer prize', cn: '克雷默奖' },
    { word: 'Gossamer Condor', cn: '轻盈的康多尔' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'aerodynamic efficiency', cn: '气动效率' },
    { word: 'wing loading', cn: '翼载荷' },
    { word: 'human-powered aviation', cn: '人力驱动航空' },
    { word: 'Gossamer Albatross', cn: '轻盈的康多尔2号' }
  ],
};

export default article;
