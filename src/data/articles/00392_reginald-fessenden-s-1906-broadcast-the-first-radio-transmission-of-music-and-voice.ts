import type { Article } from '../../types/index.ts';

// 文件意图：维护《Reginald Fessenden’s 1906 Broadcast: The First Radio Transmission of Music and Voice》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00392 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00392',
  slug: 'reginald-fessenden-s-1906-broadcast-the-first-radio-transmission-of-music-and-voice',
  title: 'Reginald Fessenden’s 1906 Broadcast: The First Radio Transmission of Music and Voice',
  subtitle: 'How a lone inventor turned the night sky into a concert hall',
  summary: 'A narrative of Reginald Fessenden’s historic 1906 broadcast, the first time music and spoken word traveled through the ether.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When most people think of “the birth of radio,” they picture a crackling Morse code signal beamed across the Atlantic. Yet on a cold December night in 1906, a different sound filled the air – a violin melody followed by a spoken passage from the Bible. This moment, orchestrated by Canadian‑American inventor <span class="vocab" data-cn="雷金纳德·费森登">Reginald Fessenden</span>, is widely regarded as the first intentional broadcast of music and voice.`,
    `Fessenden had spent years wrestling with the limitations of the spark‑gap transmitters that dominated early wireless communication. Those devices produced brief, noisy bursts suitable for Morse code but incapable of carrying a steady audio signal. Determined to create a smoother carrier, he turned to an <span class="vocab" data-cn="交流发电机">alternator</span> design that could generate a true <span class="vocab" data-cn="连续波">continuous wave</span>. This breakthrough laid the electrical foundation for what we now call amplitude modulation.`,
    `The heart of his 1906 system was a massive rotary <span class="vocab" data-cn="发射机">transmitter</span> driven by a hand‑cranked engine. By varying the strength of the continuous carrier, Fessenden could impress (or “modulate”) it with audio frequencies captured from a microphone attached to his violin and voice source. The result was an analog signal that traveled hundreds of miles without the harsh clicks that plagued earlier experiments.`,
    `On December 24, 1906, Fessenden set up his apparatus on a modest farm at Brant Rock, Massachusetts. As the sun dipped below the horizon, he switched on the transmitter and began the program: a short violin solo, followed by a reading of <em>Leviticus 3:16</em>. Listeners several miles away – farmers, ship crews, and even a few curious scientists – reported hearing the clear tones and spoken words through their crystal detectors. The broadcast proved that the radio spectrum could carry not just dots and dashes but music and speech alike.`,
    `The impact of that night rippled through the scientific community. For the first time, the <span class="vocab" data-cn="可听范围">audible range</span> of a wireless system was demonstrated to be limited only by power and antenna design, not by the nature of the carrier itself. Newspapers across New England ran stories about “the voice from the ether,” and engineers began to explore how to commercialize this new medium. Though Fessenden’s own company never built a mass‑market broadcasting service, his concepts directly inspired later pioneers who launched regular scheduled programs in the 1920s.`,
    `One technical nuance that emerged from Fessenden’s work was the use of a <span class="vocab" data-cn="异频技术">heterodyne</span> oscillator to improve receiver sensitivity. By mixing two close frequencies, early receivers could produce an audible beat frequency, making weak signals easier to hear. This principle became a cornerstone of super‑heterodyne radio architecture, which dominates modern communications equipment.`,
    `Today, when we tune into a streaming service or a satellite broadcast, the lineage can be traced back to that humble farmyard experiment. Fessenden’s 1906 transmission proved that the air itself could become a stage for art and information, turning the invisible world of electromagnetic waves into a shared cultural space. His legacy reminds us that innovation often begins with a single daring idea, amplified by perseverance and a touch of music.`,
  ],
  vocabulary: [
    { word: 'Reginald Fessenden', cn: '雷金纳德·费森登' },
    { word: 'alternator', cn: '交流发电机' },
    { word: 'continuous wave', cn: '连续波' },
    { word: 'transmitter', cn: '发射机' },
    { word: 'audible range', cn: '可听范围' },
    { word: 'heterodyne', cn: '异频技术' },
  ],
};

export default article;
