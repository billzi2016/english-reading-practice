import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Bloop Enigma: Investigating the Deep‑Ocean Sound that Captivated Scientists》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00121 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00121',
  slug: 'the-bloop-enigma-investigating-the-deep-ocean-sound-that-captivated-scientists',
  title: 'The Bloop Enigma: Investigating the Deep‑Ocean Sound that Captivated Scientists',
  subtitle: 'A mysterious underwater roar and the science behind its origin',
  summary: 'Explore how a strange oceanic sound sparked global curiosity and led to breakthroughs in marine acoustics.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In September 1997, researchers at the U.S. National Oceanic and Atmospheric Administration (NOAA) were sifting through routine recordings from a network of <span class="vocab" data-cn="水听器">hydrophone</span> stations scattered across the Pacific when they heard something that sounded more like a submarine’s engine than any known marine creature. The signal, later nicknamed “the Bloop,” rose rapidly in pitch over a few seconds before fading into the background noise of the ocean. Its sheer amplitude—comparable to a small aircraft passing overhead—immediately raised eyebrows among acousticians and marine biologists alike.`,
    `What made the Bloop especially puzzling was its classification as an <span class="vocab" data-cn="超低频的">ultra‑low‑frequency</span> event. Most biological sounds, such as whale songs or dolphin clicks, occupy higher frequency bands that attenuate quickly with distance. In contrast, low‑frequency waves can travel thousands of kilometres across the deep sea with relatively little loss, allowing a single source to be detected on hydrophones half a world away. This property hinted at a powerful origin, but the exact nature remained elusive for years.`,
    `Scientists first hypothesized that the Bloop might be produced by an enormous, undiscovered marine animal—perhaps a leviathan rivaling the blue whale in size. To test this idea, they compared the acoustic signature of the Bloop with known <span class="vocab" data-cn="海洋哺乳动物的叫声">marine mammal</span> calls. The waveform’s frequency sweep and harmonic structure did not match any recorded cetacean vocalizations, leading many to consider more exotic explanations, including secret military vessels or even geological phenomena.`,
    `Parallel investigations turned attention to the Antarctic ice shelves. In 2005, a team led by Dr. Robert R. Lentz published a paper suggesting that large-scale iceberg calving could generate acoustic energy of comparable magnitude. When massive chunks of ice break away—a process known as <span class="vocab" data-cn="冰山崩裂">iceberg calving</span>—they create rapid pressure changes in the surrounding water, producing powerful low‑frequency pulses that can propagate across ocean basins. The timing and directionality of several Bloop‑like events aligned with recorded calving incidents, strengthening this hypothesis.`,
    `Further support came from detailed modeling of sound propagation through the <span class="vocab" data-cn="温度层结面">thermocline</span>, a thin oceanic layer where temperature—and thus sound speed—changes abruptly. Researchers discovered that the thermocline can act as an acoustic waveguide, channeling low‑frequency energy over vast distances with minimal distortion. By simulating icequake sources at various depths and locations, they reproduced waveforms strikingly similar to the original Bloop recording, suggesting that the mysterious roar was likely a natural cry of the polar environment rather than a living creature.`,
    `The Bloop’s story illustrates how interdisciplinary collaboration can unravel oceanic mysteries. Acoustic engineers supplied signal‑processing tools, glaciologists contributed field observations of ice dynamics, and marine biologists offered comparative data on animal vocalizations. Together they transformed an enigmatic sound into a case study for <span class="vocab" data-cn="声学特征">acoustic signature</span> analysis, improving our ability to monitor climate‑related changes in polar regions using passive acoustic monitoring (PAM) techniques.`,
    `Today, the Bloop is no longer a headline‑grabbing enigma but a benchmark for deep‑sea acoustics. Its legacy lives on in modern hydrophone arrays that continuously listen for icequakes, submarine landslides, and even distant volcanic eruptions. Each new detection adds a piece to the puzzle of how Earth’s most remote processes communicate across the abyss, reminding us that the ocean still holds many secrets—some waiting only for the right ear to hear them.`,
  ],
  vocabulary: [
    { word: 'hydrophone', cn: '水听器' },
    { word: 'ultra‑low‑frequency', cn: '超低频的' },
    { word: 'marine mammal', cn: '海洋哺乳动物的叫声' },
    { word: 'iceberg calving', cn: '冰山崩裂' },
    { word: 'thermocline', cn: '温度层结面' },
    { word: 'acoustic signature', cn: '声学特征' },
  ],
};

export default article;
