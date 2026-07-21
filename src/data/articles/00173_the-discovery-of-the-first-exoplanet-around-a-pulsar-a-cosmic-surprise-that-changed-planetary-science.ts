import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of the First Exoplanet Around a Pulsar: A Cosmic Surprise That Changed Planetary Science》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00173 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00173',
  slug: 'the-discovery-of-the-first-exoplanet-around-a-pulsar-a-cosmic-surprise-that-changed-planetary-science',
  title: 'The Discovery of the First Exoplanet Around a Pulsar: A Cosmic Surprise That Changed Planetary Science',
  subtitle: 'How a ticking star revealed alien worlds where none were expected.',
  summary: 'In 1992, astronomers uncovered planets orbiting a dead neutron star, reshaping our view of planetary formation.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `It was a quiet winter night at the Arecibo Observatory in Puerto Rico when Dr. Aleksander Wolszczan and his team first noticed something odd in the regular beats of a distant <span class="vocab" data-cn="脉冲星">pulsar</span>. The object, later catalogued as PSR B1257+12, emitted radio pulses every 6.2 milliseconds—so precise that any deviation could be measured with astonishing accuracy.`,
    `The team employed the <span class="vocab" data-cn="计时法">timing method</span>, which tracks the arrival times of each pulse to detect minute shifts caused by external influences. When a massive body orbits a pulsar, its gravitational pull tugs on the star, causing the pulses to arrive slightly earlier or later than expected. Over weeks and months, these tiny variations began to form a pattern that could not be explained by noise alone.`,
    `After painstaking analysis, Wolszczan announced the presence of at least two companions—later named Draugr and Poltergeist—each with masses comparable to Earth’s Moon but orbiting within a fraction of an astronomical unit. The discovery was astonishing because pulsars are the remnants of supernova explosions; their intense radiation and powerful magnetic fields were thought to have stripped away any surrounding material, making planet formation seem impossible.` ,
    `The revelation forced astronomers to rethink planetary origins. One hypothesis suggested that the planets survived the supernova, clinging to the neutron star’s gravitational well. Another proposed a second‑generation formation: after the explosion, fallback material formed an <span class="vocab" data-cn="吸积盘">accretion disk</span> around the pulsar, eventually coalescing into solid bodies—much like how planets form around young stars.` ,
    `What made the finding even more compelling was the precision of the measurements. The Arecibo radio telescope could detect changes in pulse arrival times as small as a few microseconds, equivalent to measuring a human heartbeat from across the galaxy. This level of sensitivity opened a new window for hunting <span class="vocab" data-cn="系外行星">exoplanets</span> around exotic objects that emit regular signals, such as other pulsars and even some white dwarfs.` ,
    `In the years that followed, additional planets were discovered orbiting PSR B1257+12, including a third body named Phobetor. Together they formed the first confirmed planetary system beyond our Sun, proving that nature can assemble worlds in environments once deemed hostile beyond imagination. The discovery also sparked interest in using pulsar timing arrays to detect <span class="vocab" data-cn="引力波">gravitational waves</span>, linking two seemingly disparate fields of astrophysics.` ,
    `Today, the legacy of that 1992 breakthrough lives on in every exoplanet catalog. While most known planets orbit ordinary stars, the pulsar system remains a reminder that planetary formation is a versatile process, capable of thriving even amid the remnants of stellar death. It taught us to look beyond conventional expectations and to trust the subtle clues hidden in the cosmos’ most precise clocks.` ,
  ],
  vocabulary: [
    { word: 'pulsar', cn: '脉冲星' },
    { word: 'timing method', cn: '计时法' },
    { word: 'accretion disk', cn: '吸积盘' },
    { word: 'exoplanet', cn: '系外行星' },
    { word: 'gravitational wave', cn: '引力波' },
    { word: 'millisecond', cn: '毫秒' },
  ],
};

export default article;
