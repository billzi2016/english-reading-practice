import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Cambridge to the Cosmos: The Birth of Radio Astronomy and the Discovery of Pulsars》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00416 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00416',
  slug: 'from-cambridge-to-the-cosmos-the-birth-of-radio-astronomy-and-the-discovery-of-pulsars',
  title: 'From Cambridge to the Cosmos: The Birth of Radio Astronomy and the Discovery of Pulsars',
  subtitle: 'How post‑war ingenuity turned a university garden into a window on the universe.',
  summary: 'A narrative of Cambridge’s pioneering radio telescopes, the serendipitous detection of pulsars, and their lasting impact on astrophysics.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1950s a handful of physicists at Cambridge University repurposed wartime radar know‑how to listen for faint whispers from the sky.  While optical astronomers traced stars with glass lenses, these researchers imagined that distant galaxies might also emit invisible <span class="vocab" data-cn="射电望远镜">radio waves</span>.  Their curiosity sparked a quiet revolution: the birth of a new observational discipline that would eventually map the universe in an entirely different colour.`,
    `The first instrument built expressly for this purpose was the modest “50‑foot” <span class="vocab" data-cn="射电望远镜">radio telescope</span> on the Cambridge Observatory grounds.  Its parabolic dish, though small by today’s standards, could sweep the sky at frequencies around 408 MHz and record the strength of incoming signals on chart paper.  By cataloguing thousands of discrete sources, the team proved that the cosmos was teeming with radio emitters—supernova remnants, distant quasars, and even our own Milky Way’s spiral arms.`,
    `To sharpen their view, Cambridge engineers introduced an <span class="vocab" data-cn="干涉仪">interferometer</span> configuration: two dishes separated by a baseline that combined their signals to achieve the resolution of a much larger telescope.  This technique, known as aperture synthesis, allowed astronomers to pinpoint radio sources with arc‑minute precision and revealed fine structures invisible to single‑dish observations.  The success of the Cambridge Interferometer inspired similar arrays worldwide, laying groundwork for today’s high‑resolution imaging arrays.`,
    `In 1967 graduate student <span class="vocab" data-cn="行星际闪烁">Jocelyn Bell</span> (later Burnell) was tasked with building a new array to study <span class="vocab" data-cn="行星际闪烁">interplanetary scintillation</span>, the rapid twinkling of distant radio sources caused by solar wind turbulence.  Her “four‑acre” array of dipole antennas, linked to a chart recorder, produced a continuous stream of squiggles that she painstakingly examined by hand.  Amidst the noise she noticed an odd, regular pulse—every 1.337 seconds—a pattern no known natural phenomenon could explain.`,
    `The mysterious signal earned the nickname “LGM‑1” for “Little Green Men,” reflecting the team’s playful uncertainty.  Careful analysis showed that the pulses were dispersed by interstellar plasma, a delay quantified as a <span class="vocab" data-cn="色散测量">dispersion measure</span> proportional to the electron density along the line of sight.  This dispersion confirmed an extraterrestrial origin and pointed to an incredibly compact object: a rotating <span class="vocab" data-cn="中子星">neutron star</span>.  The discovery, announced in 1968, inaugurated the field of pulsar astronomy.`,
    `Pulsars immediately validated theoretical predictions made decades earlier by Baade and Zwicky, who had proposed that supernovae could leave behind dense <span class="vocab" data-cn="中子星">neutron stars</span>.  Their intense magnetic fields generate a surrounding <span class="vocab" data-cn="磁层">magnetosphere</span> where charged particles spiral at near‑light speed, emitting powerful <span class="vocab" data-cn="同步辐射">synchrotron radiation</span> that sweeps across Earth like lighthouse beams.  By measuring pulse periods and their slow drifts, astronomers could probe stellar interiors, test general relativity, and even detect gravitational waves indirectly through pulsar timing arrays.`,
    `Today Cambridge’s legacy lives on in the global network of radio facilities that employ <span class="vocab" data-cn="甚长基线干涉测量">Very Long Baseline Interferometry</span> to achieve Earth‑size resolution.  The original concepts—building modest dishes, exploiting interferometry, and listening for unexpected regularities—continue to guide projects such as the Square Kilometre Array.  From a garden of brass dipoles to a window on the cosmos, Cambridge’s journey reminds us that curiosity, patience, and a willingness to follow strange signals can reshape our understanding of the universe.`,
  ],
  vocabulary: [
    { word: 'radio telescope', cn: '射电望远镜' },
    { word: 'interferometer', cn: '干涉仪' },
    { word: 'interplanetary scintillation', cn: '行星际闪烁' },
    { word: 'dispersion measure', cn: '色散测量' },
    { word: 'neutron star', cn: '中子星' },
    { word: 'magnetosphere', cn: '磁层' },
    { word: 'synchrotron radiation', cn: '同步辐射' },
    { word: 'Very Long Baseline Interferometry', cn: '甚长基线干涉测量' },
  ],
};

export default article;
