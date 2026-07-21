import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of the Cosmic Microwave Background Radiation: Penzias, Wilson, and a New Cosmology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00150 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00150',
  slug: 'the-discovery-of-the-cosmic-microwave-background-radiation-penzias-wilson-and-a-new-cosmology',
  title: 'The Discovery of the Cosmic Microwave Background Radiation: Penzias, Wilson, and a New Cosmology',
  subtitle: 'How accidental noise led to evidence for the Big Bang',
  summary: 'A narrative of how two radio astronomers uncovered the faint afterglow of the early universe.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1964, Arno Penzias and Robert Wilson were troubleshooting a seemingly ordinary problem at Bell Labs' Holmdel antenna. The massive horn‑shaped <span class="vocab" data-cn="天线">antenna</span> was designed to receive faint radio signals from distant galaxies, yet it kept registering a persistent hiss that no amount of cleaning or shielding could eliminate. Their meticulous measurements showed the noise level at about 3 kelvin, a temperature far too low for any known terrestrial source.`,
    `Meanwhile, on the other side of the Atlantic, physicists Robert Dicke and his team at Princeton were preparing an experiment to detect the <span class="vocab" data-cn="宇宙微波背景辐射">Cosmic Microwave Background</span> (CMB) that many theoretical models predicted should fill space as a relic of the hot early universe. They expected a uniform glow with a blackbody spectrum, but they had no idea that Penzias and Wilson were already hearing it without realizing its significance.` ,
    `When the two groups finally learned of each other’s work, a remarkable convergence occurred. Dicke recognized that the 3‑kelvin hiss matched the temperature his calculations predicted for the CMB—a faint <span class="vocab" data-cn="黑体辐射">blackbody radiation</span> left over from when the universe was only about 380,000 years old, during the so‑called <span class="vocab" data-cn="再结合时期">recombination epoch</span>. In that era, electrons and protons combined to form neutral hydrogen, allowing photons to travel freely for the first time.` ,
    `The discovery was announced in 1965 with a brief paper titled “A Measurement of Excess Antenna Temperature at 4080 Mc/s.” The authors deliberately omitted any cosmological interpretation, simply reporting the unexpected signal. Yet within weeks, the scientific community recognized that this uniform microwave glow provided the strongest empirical support for the <span class="vocab" data-cn="大爆炸模型">Big Bang model</span> over competing steady‑state theories.` ,
    `One of the most striking features of the CMB is its extraordinary isotropy: across the sky, the temperature varies by only one part in 100,000. This tiny <span class="vocab" data-cn="各向异性">anisotropy</span> was later mapped by satellite missions such as COBE, WMAP, and Planck, revealing subtle fluctuations that seeded the formation of galaxies and clusters we observe today.` ,
    `The measured temperature also carries a profound implication about the universe’s expansion. Because light stretches with space, the original radiation—once at a blistering 3000 kelvin—has been redshifted by a factor of roughly 1100, now appearing as microwaves in the radio band. This <span class="vocab" data-cn="红移">redshift</span> is a direct fingerprint of cosmic expansion and underpins modern cosmology’s timeline.` ,
    `Penzias and Wilson’s serendipitous finding earned them the 1978 Nobel Prize in Physics, while Dicke’s theoretical insight cemented his legacy as one of the architects of contemporary cosmology. Their story illustrates how careful observation, even of “noise,” can overturn prevailing paradigms and open a new window onto the universe’s earliest moments.` ,
  ],
  vocabulary: [
    { word: 'antenna', cn: '天线' },
    { word: 'Cosmic Microwave Background', cn: '宇宙微波背景辐射' },
    { word: 'blackbody radiation', cn: '黑体辐射' },
    { word: 'recombination epoch', cn: '再结合时期' },
    { word: 'Big Bang model', cn: '大爆炸模型' },
    { word: 'anisotropy', cn: '各向异性' },
    { word: 'redshift', cn: '红移' },
  ],
};

export default article;
