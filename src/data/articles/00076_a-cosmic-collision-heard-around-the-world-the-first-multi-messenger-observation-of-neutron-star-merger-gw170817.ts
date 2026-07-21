import type { Article } from '../../types/index.ts';

// 文件意图：维护《A Cosmic Collision Heard Around the World: The First Multi‑Messenger Observation of Neutron Star Merger GW170817》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00076 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00076',
  slug: 'a-cosmic-collision-heard-around-the-world-the-first-multi-messenger-observation-of-neutron-star-merger-gw170817',
  title: 'A Cosmic Collision Heard Around the World: The First Multi‑Messenger Observation of Neutron Star Merger GW170817',
  subtitle: 'How a single event opened a new window on the universe.',
  summary: 'The discovery of GW170817 marked the birth of multi‑messenger astronomy, linking gravitational waves with light for the first time.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `On August 17, 2017, the LIGO and Virgo collaborations reported a fleeting ripple in space‑time that would later be named <span class="vocab" data-cn="引力波">gravitational wave</span>. The signal, designated GW170817, lasted only a few seconds but carried enough information to reveal that two ultra‑dense <span class="vocab" data-cn="中子星">neutron stars</span> had spiraled together and merged. This was the first time humanity directly detected the coalescence of such objects, confirming predictions made by Einstein’s theory of General Relativity a century earlier.`,
    `When neutron stars collide, their extreme densities—exceeding that of an atomic nucleus—produce conditions impossible to recreate on Earth. The merger ejects material at a significant fraction of the speed of light, creating a short‑lived but brilliant explosion known as a <span class="vocab" data-cn="千新星">kilonova</span>. In this fireball, rapid neutron capture, or the <span class="vocab" data-cn="r-过程（快速中子俘获）">r-process</span>, forges some of the heaviest elements in the periodic table, including gold and platinum. Theoretical models had long suggested that such events could be the primary factories of these precious metals, but GW170817 offered the first observational proof.`,
    `Almost simultaneously with the gravitational‑wave alert, NASA’s Fermi Gamma‑ray Space Telescope and the European INTEGRAL observatory recorded a brief flash of high‑energy photons. This <span class="vocab" data-cn="伽马射线暴">gamma‑ray burst</span> (GRB 170817A) lasted less than two seconds, fitting the profile of a short GRB that many astrophysicists believed originated from neutron‑star mergers. The coincidence in time and sky location cemented the link between these two previously separate phenomena, turning a speculative connection into an empirical fact.`,
    `Within hours, astronomers worldwide turned their optical telescopes toward the galaxy NGC 4993, located about 130 million light‑years away in the constellation Hydra. A faint new point of light—later named AT 2017gfo—was identified by the Swope Telescope in Chile and quickly confirmed by dozens of facilities, from large observatories like the VLT to backyard setups operated by dedicated amateurs. The rapid coordination showcased the power of a global network of observers, each contributing a piece of the puzzle that would later be assembled into a coherent picture of the event.`,
    `Beyond its spectacular fireworks, GW170817 provided a novel way to measure cosmic distances. By comparing the intrinsic strength of the gravitational‑wave signal (a “standard siren”) with the redshift of NGC 4993, scientists derived an independent estimate of the <span class="vocab" data-cn="哈勃常数">Hubble constant</span>. This measurement offered a fresh perspective on the long‑standing tension between values obtained from the cosmic microwave background and those from supernovae, highlighting how multi‑messenger observations can address fundamental cosmological questions. Moreover, the near‑simultaneous arrival of gravitational waves and light confirmed that both travel at essentially the same speed—within one part in 10¹⁵ of the speed of <span class="vocab" data-cn="光速">light</span>—providing a stringent test of General Relativity.`,
    `The chemical fingerprints left behind by the kilonova also enriched our understanding of nucleosynthesis. Spectroscopic analyses revealed absorption features consistent with newly formed lanthanides, confirming that the r‑process had indeed taken place. This insight reshaped models of galactic chemical evolution, suggesting that a relatively small number of neutron‑star mergers over cosmic time could account for the observed abundance of heavy elements in the Milky Way.`,
    `GW170817 marked the dawn of true multi‑messenger astronomy, where gravitational waves, electromagnetic radiation, and eventually neutrinos work together to illuminate astrophysical phenomena. The success spurred upgrades to existing detectors—such as LIGO’s A+ program—and motivated new facilities like KAGRA in Japan and the planned Einstein Telescope in Europe. As sensitivity improves, astronomers anticipate a steady stream of similar events, each offering fresh clues about the most violent processes shaping our universe.`,
  ],
  vocabulary: [
    { word: 'gravitational wave', cn: '引力波' },
    { word: 'neutron star', cn: '中子星' },
    { word: 'kilonova', cn: '千新星' },
    { word: 'r-process', cn: 'r-过程（快速中子俘获）' },
    { word: 'gamma‑ray burst', cn: '伽马射线暴' },
    { word: 'Hubble constant', cn: '哈勃常数' },
    { word: 'light', cn: '光速' },
  ],
};

export default article;
