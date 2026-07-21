import type { Article } from '../../types/index.ts';

// 文件意图：维护《Apollo 17: The Last Moon Landing and Its Scientific Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00470 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00470',
  slug: 'apollo-17-the-last-moon-landing-and-its-scientific-legacy',
  title: 'Apollo 17: The Last Moon Landing and Its Scientific Legacy',
  subtitle: 'How the final Apollo mission reshaped lunar science',
  summary: 'A narrative of Apollo 17’s historic flight, its groundbreaking experiments, and the lasting impact on planetary research.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On December 7, 1972, a Saturn V rocket roared from Kennedy Space Center carrying three astronauts—Commander <span class="vocab" data-cn="尤金·塞尔南">Eugene Cernan</span>, Lunar Module Pilot <span class="vocab" data-cn="哈里森·施密特">Harrison Schmitt</span>, and Command Module Pilot <span class="vocab" data-cn="罗恩·埃文斯">Ronald Evans</span>. The mission, part of the <span class="vocab" data-cn="阿波罗计划">Apollo program</span>, would become the last time humans set foot on the Moon, and it carried a scientific agenda more ambitious than any previous flight. As the spacecraft entered lunar orbit, the crew prepared for a 22‑hour surface stay that would yield insights still debated today.`,
    `Apollo 17’s primary goals were twofold: to explore the Taurus‑Littrow valley’s geology and to deploy an expanded suite of instruments known as the <span class="vocab" data-cn="阿波罗月面实验装置">Apollo Lunar Surface Experiments Package</span> (<abbr>ALSEP</abbr>). Central to this effort was the <span class="vocab" data-cn="月球车">Lunar Roving Vehicle</span>, a battery‑powered rover that allowed the astronauts to travel up to 35 kilometers from their landing site. The vehicle’s navigation system, solar panels, and lightweight chassis represented engineering feats that turned the Moon into a mobile laboratory.`,
    `Schmitt, the first professional <span class="vocab" data-cn="地质学家">geologist</span> on the lunar surface, led the team in collecting over 110 kilograms of <span class="vocab" data-cn="岩石样本">lunar sample</span>. He identified a rare type of rock called “orange soil,” later understood to be volcanic glass formed by fire fountains. The crew also retrieved fragments of <span class="vocab" data-cn="冲击熔融岩">impact melt breccia</span>, which recorded the violent collisions that shaped the Moon’s early crust. Each sample was meticulously catalogued, sealed in nitrogen‑filled containers, and stowed for return to Earth.`,
    `While walking on the dusty <span class="vocab" data-cn="月壤">regolith</span>, the astronauts set up several experiments: a heat flow probe that measured temperature gradients beneath the surface, a seismic sensor network designed to detect moonquakes, and a laser ranging <span class="vocab" data-cn="反射器">retroreflector</span> that still enables precise Earth‑Moon distance measurements. A portable <span class="vocab" data-cn="质谱仪">mass spectrometer</span> was also used to analyze the composition of lunar dust in situ, revealing traces of gases implanted by the <span class="vocab" data-cn="太阳风">solar wind</span>. These instruments turned a brief visit into a long‑term scientific outpost.`,
    `The analysis of returned samples revolutionized our understanding of lunar history. Radiometric dating showed that the highland rocks were over 4 billion years old, confirming that the Moon’s crust solidified shortly after its formation. The presence of volcanic glass indicated that volcanic activity persisted much later than previously thought, perhaps as recent as a few hundred million years ago. Moreover, the detection of helium‑3 and neon isotopes from the <span class="vocab" data-cn="太阳风">solar wind</span> provided direct evidence of solar particle flux over geological timescales, informing models of both lunar and terrestrial atmospheric evolution.`,
    `Decades later, Apollo 17’s legacy continues to shape modern exploration. Researchers still re‑examine the original samples with cutting‑edge techniques such as synchrotron X‑ray fluorescence and atom probe tomography, uncovering minute water molecules locked within mineral lattices. The data from ALSEP inform current lunar seismology missions like NASA’s Lunar Geophysical Network concept, while the rover’s design inspired the mobility systems of the upcoming Artemis program’s <span class="vocab" data-cn="月球车">Lunar Roving Vehicle</span> prototypes. In this way, the mission serves as a bridge between past achievements and future ambitions.`,
    `Public memory of Apollo 17 is colored by Cernan’s poignant farewell: “We leave as we came, and God willing, as we shall return.” The images of astronauts standing on the rim of a crater, with Earth hanging like a blue marble in the black sky, have become iconic symbols of human curiosity. Though no humans have walked the Moon since 1972, the scientific foundations laid by that final landing continue to inspire generations of engineers, scientists, and dreamers worldwide.`,
    `In retrospect, Apollo 17 was more than a historic footnote; it was a meticulously planned scientific expedition that expanded humanity’s knowledge of our nearest celestial neighbor. The mission’s blend of geological fieldwork, innovative instrumentation, and long‑term data collection set a benchmark for planetary exploration. As new missions prepare to return humans to the Moon and eventually venture to Mars, they do so standing on the shoulders of the Apollo 17 crew, whose work still echoes across the vacuum of space.`,
  ],
  vocabulary: [
    { word: 'Apollo program', cn: '阿波罗计划' },
    { word: 'Lunar Roving Vehicle', cn: '月球车' },
    { word: 'geologist', cn: '地质学家' },
    { word: 'lunar sample', cn: '岩石样本' },
    { word: 'regolith', cn: '月壤' },
    { word: 'solar wind', cn: '太阳风' },
    { word: 'mass spectrometer', cn: '质谱仪' },
    { word: 'impact melt breccia', cn: '冲击熔融岩' },
    { word: 'retroreflector', cn: '反射器' },
  ],
};

export default article;
