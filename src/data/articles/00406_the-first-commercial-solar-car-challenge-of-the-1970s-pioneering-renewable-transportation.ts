import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Commercial Solar Car Challenge of the 1970s: Pioneering Renewable Transportation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00406 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00406',
  slug: 'the-first-commercial-solar-car-challenge-of-the-1970s-pioneering-renewable-transportation',
  title: 'The First Commercial Solar Car Challenge of the 1970s: Pioneering Renewable Transportation',
  subtitle: 'How an oil‑crisis era contest sparked today’s solar‑powered vehicles',
  summary: 'A narrative of the 1975 General Motors Solar Car Challenge and its lasting impact on renewable transport.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `The 1973 oil embargo sent shockwaves through every corner of American industry, and automobile manufacturers felt the pressure most acutely. In response, General Motors announced an unprecedented competition in early 1975: design a <span class="vocab" data-cn="太阳能汽车">solar car</span> that could legally drive on public roads while relying solely on sunlight for propulsion. The contest was billed as “the first commercial solar‑car challenge,” and it attracted university teams, small startups, and even hobbyist engineers eager to prove that renewable energy could power everyday transportation.`,
    `The rules were deliberately strict. Each vehicle had to meet Federal Motor Vehicle Safety Standards, carry a driver of at least 150 lb, and achieve a minimum average speed of 30 mph over a 50‑mile course without any auxiliary fuel. To keep the competition realistic, teams were limited to commercially available <span class="vocab" data-cn="光伏电池">photovoltaic (PV)</span> panels—no experimental cells could be used. This constraint forced engineers to grapple with the low <span class="vocab" data-cn="能量密度">energy density</span> of 1970s silicon solar modules, which hovered around 8 W per square foot under ideal conditions.`,
    `Among the entrants, three projects stood out. The University of Michigan’s “Solar One” featured a lightweight aluminum frame and an array of 120 rectangular panels mounted on a sleek, low‑profile roof. MIT’s “Sunmobile” took a different tack, integrating its PV cells into the bodywork itself to reduce aerodynamic drag—a concept later known as <span class="vocab" data-cn="光伏集成建筑">building‑integrated photovoltaics</span>. A small California startup, Solar Dynamics, built the “SunRunner,” which paired modest solar input with a bank of lead‑acid batteries and an early form of <span class="vocab" data-cn="再生制动">regenerative braking</span> to reclaim energy during deceleration.`,
    `The day of the challenge arrived on a bright September morning in Ann Arbor, Michigan. Spectators lined the streets as the three solar cars rolled out, their panels glinting like mirrors. The Sunmobile quickly took the lead, its integrated design shaving off precious seconds per mile by reducing drag. However, as clouds drifted across the sky midway through the course, its power output dropped dramatically, forcing the driver to rely on battery reserves. Meanwhile, Solar One’s larger panel area allowed it to maintain a steadier speed, and the SunRunner’s regenerative system gave it a surprising burst of acceleration when climbing a gentle hill.`,
    `When the finish line was crossed, the results were mixed but illuminating. The University of Michigan’s Solar One completed the course in 2 hours 15 minutes, meeting all safety criteria and demonstrating that a solar‑only vehicle could sustain highway speeds for short distances. MIT’s Sunmobile finished slightly faster at 2 hours 10 minutes but failed to meet the required battery backup specifications, disqualifying it from official ranking. Solar Dynamics’ SunRunner placed third, its performance hampered by the heavy lead‑acid pack, yet its regenerative braking system earned a special commendation for innovation.`,
    `Although no single vehicle emerged as a ready‑to‑market product, the 1975 challenge left an indelible mark on automotive research. Engineers who participated went on to form the core of later solar‑car teams that entered the inaugural World Solar Challenge in Australia (1987) and the American Solar Challenge (1990). The competition also spurred advances in <span class="vocab" data-cn="高效光伏材料">high‑efficiency PV materials</span>, lightweight composites, and battery management systems—technologies that underpin today’s electric vehicles and modern solar‑powered prototypes like the Lightyear One.`,
    `Looking back from a 2024 perspective, the First Commercial Solar Car Challenge can be seen as a catalyst that turned speculative ideas into tangible engineering practice. It proved that even with the modest technology of the 1970s, a vehicle could harness sunlight to travel on public roads, laying the groundwork for today’s push toward <span class="vocab" data-cn="可再生能源交通">renewable transportation</span>. As governments worldwide set ambitious carbon‑neutral targets, the spirit of that early contest lives on in every solar‑assisted bus, commuter car, and research project aiming to make sunlight a mainstream fuel source.`,
  ],
  vocabulary: [
    { word: 'solar car', cn: '太阳能汽车' },
    { word: 'photovoltaic (PV)', cn: '光伏（光电）' },
    { word: 'energy density', cn: '能量密度' },
    { word: 'building‑integrated photovoltaics', cn: '光伏集成建筑' },
    { word: 'regenerative braking', cn: '再生制动' },
    { word: 'high‑efficiency PV materials', cn: '高效光伏材料' },
    { word: 'renewable transportation', cn: '可再生能源交通' },
  ],
};

export default article;
