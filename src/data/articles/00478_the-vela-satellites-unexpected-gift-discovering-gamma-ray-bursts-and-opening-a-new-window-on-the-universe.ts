import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Vela Satellites’ Unexpected Gift: Discovering Gamma‑Ray Bursts and Opening a New Window on the Universe》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00478 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00478',
  slug: 'the-vela-satellites-unexpected-gift-discovering-gamma-ray-bursts-and-opening-a-new-window-on-the-universe',
  title: 'The Vela Satellites’ Unexpected Gift: Discovering Gamma‑Ray Bursts and Opening a New Window on the Universe',
  subtitle: 'How Cold‑War surveillance led to one of astronomy’s biggest surprises.',
  summary: 'A story of how nuclear‑monitoring satellites stumbled upon cosmic explosions that reshaped our view of the high‑energy universe.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1960s, the United States launched a series of <span class="vocab" data-cn="卫星">satellite</span> platforms called Vela to patrol the Earth’s <span class="vocab" data-cn="地磁层">magnetosphere</span> for secret nuclear detonations.  These devices were equipped with simple optical and X‑ray detectors, primarily designed to spot the bright flash of a nuclear blast against the dark side of the planet.  The engineers never imagined that their hardware would become a window onto the most energetic explosions in the cosmos.`,
    `On July 2, 1967, Vela 3 recorded an intense, brief spike of high‑energy photons that did not match any known signature of a nuclear test.  A second similar event appeared on August 5, 1969.  The anomalies were puzzling: they lasted only a few seconds, arrived from random directions in the sky, and showed no accompanying particles typical of an atmospheric explosion.  When the data were finally examined by astrophysicist Ray Klebesadel and his team at Los Alamos, they coined the term <span class="vocab" data-cn="伽马射线暴">Gamma‑Ray Burst</span> (GRB) to describe these mysterious flashes.`,
    `A <span class="vocab" data-cn="光子计数器">photomultiplier tube</span> inside each Vela detector amplified the faint burst of gamma photons, converting them into measurable electric pulses.  Because the satellites were placed far from Earth’s radiation belts, they could capture the bursts without interference from terrestrial sources.  This accidental capability turned a Cold‑War surveillance network into the first all‑sky monitor for high‑energy transients, effectively turning the entire planet into a giant gamma‑ray observatory.`,
    `The discovery raised immediate questions: were these events occurring within our own galaxy or far beyond?  Early attempts to locate GRBs using triangulation between multiple Vela satellites suggested an isotropic distribution across the sky, hinting at a cosmological origin.  However, without precise distances, astronomers could not confirm whether they were nearby neutron star flares or distant cataclysmic events.  The ambiguity persisted for over a decade, fueling intense debate in the astrophysical community.`,
    `The breakthrough came with the launch of NASA’s Compton Gamma Ray Observatory (CGRO) in 1991 and its Burst and Transient Source Experiment (BATSE).  BATSE detected thousands of GRBs and confirmed that their sky distribution was uniform, a hallmark of sources at cosmological distances.  Subsequent observations by the Italian–Dutch BeppoSAX satellite in 1997 provided accurate X‑ray afterglow positions, allowing ground‑based telescopes to pinpoint host galaxies.  Spectroscopic measurements revealed large <span class="vocab" data-cn="宇宙学红移">cosmological redshift</span> values, proving that many GRBs originated billions of light‑years away, often in star‑forming regions of distant galaxies.`,
    `GRBs are now understood to belong mainly to two families.  <span class="vocab" data-cn="短伽马射线暴">Short Gamma‑Ray Bursts</span> (lasting less than two seconds) arise from the merger of compact objects such as neutron stars, a process that also generates gravitational waves detectable by LIGO and Virgo.  <span class="vocab" data-cn="长伽马射线暴">Long Gamma‑Ray Bursts</span> (lasting tens to hundreds of seconds) are linked to the core collapse of massive, rapidly rotating stars, producing relativistic jets that pierce through the surrounding <span class="vocab" data-cn="星系际介质">interstellar medium</span>.  Both phenomena release more energy in a few seconds than the Sun will emit over its entire ten‑billion‑year lifetime.`,
    `The legacy of the Vela satellites extends far beyond their original mission.  Their serendipitous discovery sparked an entire subfield of high‑energy astrophysics, leading to dedicated missions such as Swift, Fermi, and the upcoming SVOM satellite.  Each new instrument refines our understanding of GRB progenitors, jet physics, and the role these explosions play in seeding the universe with heavy elements.  In a striking twist of fate, tools built to enforce peace on Earth have opened an unprecedented window onto the violent birthplaces of stars and black holes across the cosmos.`,
  ],
  vocabulary: [
    { word: 'satellite', cn: '卫星' },
    { word: 'magnetosphere', cn: '地磁层' },
    { word: 'Gamma‑Ray Burst', cn: '伽马射线暴' },
    { word: 'photomultiplier tube', cn: '光子计数器' },
    { word: 'cosmological redshift', cn: '宇宙学红移' },
    { word: 'interstellar medium', cn: '星系际介质' },
    { word: 'short Gamma‑Ray Burst', cn: '短伽马射线暴' },
    { word: 'long Gamma‑Ray Burst', cn: '长伽马射线暴' },
  ],
};

export default article;
