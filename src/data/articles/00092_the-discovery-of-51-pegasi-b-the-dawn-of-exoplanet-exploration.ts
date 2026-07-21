import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of 51 Pegasi b: The Dawn of Exoplanet Exploration》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00092 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00092',
  slug: 'the-discovery-of-51-pegasi-b-the-dawn-of-exoplanet-exploration',
  title: 'The Discovery of 51 Pegasi b: The Dawn of Exoplanet Exploration',
  subtitle: 'How a single wobble changed our view of the cosmos',
  summary: 'A narrative of Michel Mayor and Didier Queloz’s breakthrough that opened the era of exoplanet hunting.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1990s, most astronomers believed that finding a planet around another star was a dream far beyond the reach of existing technology. The main obstacle was the overwhelming brightness of stars compared to their tiny companions. Yet a modest instrument at the Haute‑Provence Observatory in France—an <span class="vocab" data-cn="光谱仪">ELODIE spectrograph</span>—was about to prove that even subtle signals could be captured with patience and clever analysis.`,
    `Mayor and Queloz focused on a technique called <span class="vocab" data-cn="径向速度法">radial velocity</span>. As a planet orbits its star, the mutual gravitational pull makes the star execute a tiny back‑and‑forth motion, known as a stellar wobble. This motion shifts the star’s spectral lines due to the <span class="vocab" data-cn="多普勒效应">Doppler shift</span>, causing them to move slightly toward red or blue wavelengths depending on whether the star moves away from or toward Earth. By measuring these shifts with extreme precision, astronomers can infer the presence of an unseen companion.`,
    `On October 6, 1995, after months of painstaking observations, Mayor and Queloz announced that the Sun‑like star 51 Pegasi exhibited a periodic radial‑velocity signal every 4.2 days. The amplitude was only about 56 meters per second—roughly the speed of a fast sprint—but it was unmistakable. Calculations showed that the unseen object must be at least half the mass of Jupiter, orbiting extremely close to its star, completing a revolution in less than a week. This planet, later named 51 Pegasi b, became the first confirmed <span class="vocab" data-cn="系外行星">exoplanet</span> around a main‑sequence star.`,
    `The discovery sparked immediate excitement and skepticism alike. Some critics argued that stellar activity or instrumental errors could mimic the signal. To address these concerns, Mayor and Queloz cross‑checked their data with independent measurements from other spectrographs, such as the <span class="vocab" data-cn="光谱仪">HARPS instrument</span> at La Silla Observatory. The consistency of the wobble across different instruments solidified the case for a genuine planet, and the result earned them the 2019 Nobel Prize in Physics—a testament to how a seemingly modest observation can reshape an entire field.` ,
    `Following 51 Pegasi b, astronomers rapidly expanded their toolbox. While radial velocity remained powerful, the <span class="vocab" data-cn="凌星法">transit method</span>—detecting the tiny dip in starlight when a planet passes in front of its star—proved especially fruitful for space‑based missions like NASA’s Kepler telescope. Combining both methods allowed scientists to measure not only a planet’s mass (from radial velocity) but also its radius (from transit depth), leading to estimates of density and clues about composition.` ,
    `The early discoveries also forced theorists to rethink planetary formation models. Hot Jupiters, like 51 Pegasi b, orbit far closer to their stars than any planet in our Solar System, challenging the traditional view that giant planets form beyond the icy “<span class="vocab" data-cn="冰线">snow line</span>” and remain there. New models involving planetary migration—where massive planets shift inward through interactions with a protoplanetary disk—began to dominate discussions, illustrating how observations can drive theoretical innovation.` ,
    `Today, more than two thousand exoplanets have been cataloged, ranging from Earth‑size worlds in the <span class="vocab" data-cn="宜居带">habitable zone</span> to rogue planets drifting alone in interstellar space. Yet the spirit of curiosity that drove Mayor and Queloz persists: each subtle wobble or faint dip is a reminder that our cosmic neighborhood is far richer than once imagined, and that even the smallest signals can herald revolutionary discoveries.` ,
  ],
  vocabulary: [
    { word: 'ELODIE spectrograph', cn: 'ELODIE光谱仪' },
    { word: 'radial velocity', cn: '径向速度法' },
    { word: 'Doppler shift', cn: '多普勒效应' },
    { word: 'exoplanet', cn: '系外行星' },
    { word: 'transit method', cn: '凌星法' },
    { word: 'snow line', cn: '冰线' },
    { word: 'habitable zone', cn: '宜居带' },
  ],
};

export default article;
