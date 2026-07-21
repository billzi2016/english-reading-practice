import type { Article } from '../../types/index.ts';

// 文件意图：维护《Henrietta Swan Leavitt and the Cosmic Distance Ladder》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00385 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00385',
  slug: 'henrietta-swan-leavitt-and-the-cosmic-distance-ladder-how-variable-stars-mapped-the-universe',
  title: 'Henrietta Swan Leavitt and the Cosmic Distance Ladder',
  subtitle: 'How a humble variable‑star catalog reshaped our view of the universe',
  summary: 'Discover how Henrietta Leavitt turned flickering stars into a ruler for measuring cosmic distances.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early twentieth century, a quiet astronomer named <span class="vocab" data-cn="亨丽埃塔·斯旺·莱维特">Henrietta Swan Leavitt</span> was cataloguing thousands of stars on glass plates at the Harvard College Observatory.  Working in what was then called the “Harvard Computers,” she measured the brightness of each point of light with painstaking precision, unaware that her routine work would soon become a cornerstone of modern cosmology.`,
    `Leavitt’s most famous project involved the Small Magellanic Cloud, a dwarf galaxy visible from the Southern Hemisphere.  While examining the photographic plates, she noticed dozens of stars whose brightness rose and fell regularly.  These were <span class="vocab" data-cn="变星">variable stars</span>, objects that change their luminosity over time.  Among them, a particular group called <span class="vocab" data-cn="造父变星">Cepheid variables</span> displayed a striking pattern: the longer the period of their pulsation, the brighter they seemed to be.`,
    `In 1908 Leavitt published her groundbreaking discovery of the <span class="vocab" data-cn="周期—光度关系">period–luminosity relation</span>.  By plotting each Cepheid’s pulsation period against its observed brightness (or <span class="vocab" data-cn="视星等">apparent magnitude</span>), she found a tight linear correlation.  Crucially, because all the stars she studied lay in the same distant galaxy, they shared essentially the same true brightness, or <span class="vocab" data-cn="绝对星等">absolute magnitude</span>.  This meant that once the relation was calibrated, astronomers could infer a star’s intrinsic luminosity simply from its period.`,
    `The power of Leavitt’s law became evident when Edwin Hubble applied it to Cepheids in the Andromeda Nebula.  By measuring their periods and apparent magnitudes, he calculated their absolute magnitudes using the period–luminosity relation, then derived distances via the inverse‑square law of light.  This method bypassed the limitations of <span class="vocab" data-cn="视差">parallax</span>, which only works for relatively nearby stars, and revealed that Andromeda lay far beyond the Milky Way—a revelation that reshaped our understanding of the universe’s scale.`,
    `Today Leavitt’s insight forms a crucial rung on the <span class="vocab" data-cn="宇宙距离阶梯">cosmic distance ladder</span>.  The ladder is a series of overlapping techniques, each extending the reach of the previous one.  Parallax anchors the nearest distances; Cepheid variables extend measurements to tens of millions of light‑years; Type Ia supernovae push even farther, enabling estimates of the universe’s expansion rate.  Without Leavitt’s calibration, the ladder would lack a reliable middle segment, and many modern cosmological parameters would remain uncertain.`,
    `Beyond Cepheids, astronomers have refined Leavitt’s approach using other <span class="vocab" data-cn="变星">variable stars</span> such as RR Lyrae, which serve as standard candles for older stellar populations.  Space‑based observatories like the Hubble Space Telescope and Gaia mission have re‑measured parallaxes for nearby Cepheids with unprecedented accuracy, tightening the period–luminosity relation and reducing systematic errors in distance estimates across the ladder.`,
    `Henrietta Leavitt never saw the full impact of her work; she died in 1921, long before Hubble’s discovery of an expanding universe.  Yet her meticulous charts continue to guide astronomers as they map ever‑more distant realms, from nearby galaxies to the cosmic microwave background.  In recognition of her legacy, the International Astronomical Union named a lunar crater “Leavitt” and NASA’s upcoming mission to study variable stars bears her name, ensuring that future generations remember how a humble catalog turned flickering points of light into a ruler for the cosmos.`,
  ],
  vocabulary: [
    { word: 'Henrietta Swan Leavitt', cn: '亨丽埃塔·斯旺·莱维特' },
    { word: 'variable star', cn: '变星' },
    { word: 'Cepheid variable', cn: '造父变星' },
    { word: 'period–luminosity relation', cn: '周期—光度关系' },
    { word: 'apparent magnitude', cn: '视星等' },
    { word: 'absolute magnitude', cn: '绝对星等' },
    { word: 'parallax', cn: '视差' },
    { word: 'cosmic distance ladder', cn: '宇宙距离阶梯' },
  ],
};

export default article;
