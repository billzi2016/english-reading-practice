import type { Article } from '../../types/index.ts';

// 文件意图：维护《Pulsar Planets: The Unexpected First Discovery of Worlds Beyond Our Solar System》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00140 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00140',
  slug: 'pulsar-planets-the-unexpected-first-discovery-of-worlds-beyond-our-solar-system',
  title: 'Pulsar Planets: The Unexpected First Discovery of Worlds Beyond Our Solar System',
  subtitle: 'How a dead star revealed the first exoplanets',
  summary: 'The 1992 discovery of planets orbiting a pulsar overturned expectations and opened the field of exoplanet research.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In July 1992, astronomers Aleksander Wolszczan and Dale Frail announced a finding that stunned the astronomical community: three tiny worlds circling the radio beacon known as <span class="vocab" data-cn="脉冲星">pulsar</span> PSR B1257+12. Until then, planets had only been imagined around ordinary stars like our Sun. The notion that a star which had already exploded in a supernova could host planetary companions seemed absurd, yet the precise timing of the pulsar’s pulses left no doubt that something massive was tugging at it.`,
    `A <span class="vocab" data-cn="中子星">neutron star</span> is the ultra‑dense core left behind after a massive star collapses. It spins rapidly and emits beams of radio waves from its magnetic poles; as the star rotates, these beams sweep across Earth like lighthouse flashes, producing the regular “ticks” that give pulsars their name. Because the rotation is so stable—often to within a few microseconds per year—any slight deviation in the arrival times of those ticks can be measured with extraordinary precision.`,
    `Wolszczan’s team exploited this stability using the technique of <span class="vocab" data-cn="射电脉冲计时">radio timing</span>. By recording the exact moments each pulse reached their radio telescope, they noticed periodic variations that could not be explained by interstellar effects or instrumental noise. These variations matched the gravitational influence expected from orbiting bodies, allowing them to infer the presence of planets solely from the pulsar’s <span class="vocab" data-cn="轨道周期">orbital period</span> signatures in the timing residuals.`,
    `The system around PSR B1257+12 turned out to contain two Earth‑mass planets (dubbed “Phobos” and “Deimos”) with orbital periods of about 66 and 98 days, plus a third, slightly larger planet (“Zeta”) completing an orbit in roughly 25 days. Their masses were estimated at 0.02–0.03 M⊕, making them among the smallest bodies ever detected outside our Solar System at that time. The discovery demonstrated that even after a supernova explosion, enough material can remain—or be captured—to form solid worlds.`,
    `Beyond its novelty, this finding reshaped planetary science. It proved that planets could survive (or re‑form) in environments previously thought hostile, challenging the assumption that planet formation required calm protoplanetary disks around young stars. Moreover, it highlighted the power of indirect detection methods: before the first <span class="vocab" data-cn="系外行星">exoplanet</span> around a Sun‑like star was confirmed in 1995, pulsar timing had already opened the door to discovering worlds beyond our Solar System.`,
    `Subsequent surveys have uncovered only a handful of additional pulsar planets, underscoring their rarity. The most famous is the “<span class="vocab" data-cn="梅图塞拉星球">Methuselah planet</span>” orbiting the binary system PSR B1620‑26, a giant world likely several times the mass of Jupiter that formed around a star that later became a pulsar. These exotic systems provide natural laboratories for studying planetary survival under intense <span class="vocab" data-cn="引力扰动">gravitational perturbation</span> and radiation environments.`,
    `Today, astronomers continue to monitor millisecond pulsars—those spinning hundreds of times per second—for subtle timing anomalies that could betray yet‑undiscovered companions. While the focus has shifted toward detecting Earth‑like planets around main‑sequence stars, pulsar planets remain a compelling reminder that nature can assemble worlds in the most unexpected corners of the galaxy. Future facilities such as the Square Kilometre Array promise even finer timing precision, potentially revealing smaller bodies or even asteroid belts orbiting these stellar remnants.`,
  ],
  vocabulary: [
    { word: 'pulsar', cn: '脉冲星' },
    { word: 'neutron star', cn: '中子星' },
    { word: 'radio timing', cn: '射电脉冲计时' },
    { word: 'orbital period', cn: '轨道周期' },
    { word: 'exoplanet', cn: '系外行星' },
    { word: 'Methuselah planet', cn: '梅图塞拉星球' },
    { word: 'gravitational perturbation', cn: '引力扰动' },
  ],
};

export default article;
