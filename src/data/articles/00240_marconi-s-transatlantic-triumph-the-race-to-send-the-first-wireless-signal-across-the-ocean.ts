import type { Article } from '../../types/index.ts';

// 文件意图：维护《Marconi’s Transatlantic Triumph: The Race to Send the First Wireless Signal Across the Ocean》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00240 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00240',
  slug: 'marconi-s-transatlantic-triumph-the-race-to-send-the-first-wireless-signal-across-the-ocean',
  title: 'Marconi’s Transatlantic Triumph: The Race to Send the First Wireless Signal Across the Ocean',
  subtitle: 'How a young Italian inventor turned a seaside experiment into a global breakthrough.',
  summary: 'The story of Guglielmo Marconi’s daring 1901 attempt to bridge continents with invisible radio waves.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1900, a modest laboratory on the cliffs of Poldhu in Cornwall was buzzing with anticipation. Young <span class="vocab" data-cn="古列尔莫·马可尼">Guglielmo Marconi</span> had already demonstrated that Morse code could travel over several hundred miles without wires, but his ultimate ambition was far grander: to send a message across the Atlantic Ocean. The challenge seemed almost mythic—how could a faint spark of electricity survive a journey of more than 2,000 kilometers over cold, restless seas?`,
    `Marconi’s solution relied on a massive <span class="vocab" data-cn="火花发射机">spark transmitter</span> capable of generating bursts of high‑frequency energy. He erected an enormous <span class="vocab" data-cn="天线阵列">antenna array</span>, a series of towering wooden masts strung with copper wires that stretched like a giant spider’s web across the horizon. The sheer size of the apparatus was intended to concentrate the radio waves into a narrow beam, increasing the chance that any surviving signal would be caught on the other side of the ocean.`,
    `Across the Atlantic, on the remote island of Newfoundland, a modest receiving station waited under the watchful eye of American operator <span class="vocab" data-cn="约翰·弗雷德里克·斯蒂文森">John F. Stevenson</span>. The station’s own antenna was a simple wire stretched between two wooden poles, yet it was tuned to the same frequency as Marconi’s transmitter. Both men understood that success depended on a phenomenon they could only hypothesize about: <span class="vocab" data-cn="传播">propagation</span> of radio waves through the upper atmosphere.`,
    `At the time, scientists believed that radio signals traveled in straight lines and would be absorbed by the Earth’s curvature. Marconi, however, suspected that the “<span class="vocab" data-cn="电离层">ionosphere</span>”—a thin layer of charged particles high above the surface—might reflect the waves back toward the ground, allowing them to hop across great distances. This idea was daring because the ionosphere would not be formally identified until decades later, but Marconi’s intuition proved prescient.`,
    `On December 12, 1901, after weeks of trial and error, Marconi sent the first transatlantic transmission: a simple Morse‑code sequence spelling “<span class="vocab" data-cn="请说话">SPEAK TO ME</span>.” The signal arrived at the Newfoundland station after a tense pause that seemed to stretch for minutes. When the operator finally heard the faint clicks, he knew history had been made. The success was not just a technical triumph; it demonstrated that invisible communication could bind continents together, foreshadowing the modern age of global connectivity.`,
    `The victory sparked fierce competition. Inventors such as <span class="vocab" data-cn="尼古拉·特斯拉">Nikola Tesla</span> and British engineer Oliver Lodge had also been experimenting with wireless transmission, each claiming that they could achieve similar feats. Yet Marconi’s achievement captured the public imagination because it combined bold engineering with a clear narrative of human perseverance against nature’s vastness. Newspapers worldwide ran headlines proclaiming “The Ocean Conquered by Electricity,” and governments began to see radio as a strategic tool for both commerce and defense.`,
    `In the years that followed, Marconi refined his technology, moving from spark transmitters to continuous‑wave systems that could carry voice and music. The foundations laid in 1901 enabled the first transatlantic telephone call in 1915 and later the birth of commercial radio broadcasting. Today, when we stream a podcast or video across continents with a click, we are still riding the invisible wave that Marconi first coaxed over the Atlantic more than a century ago.`,
  ],
  vocabulary: [
    { word: 'Guglielmo Marconi', cn: '古列尔莫·马可尼' },
    { word: 'spark transmitter', cn: '火花发射机' },
    { word: 'antenna array', cn: '天线阵列' },
    { word: 'propagation', cn: '传播' },
    { word: 'ionosphere', cn: '电离层' },
    { word: 'SPEAK TO ME', cn: '请说话' },
    { word: 'Nikola Tesla', cn: '尼古拉·特斯拉' },
  ],
};

export default article;
