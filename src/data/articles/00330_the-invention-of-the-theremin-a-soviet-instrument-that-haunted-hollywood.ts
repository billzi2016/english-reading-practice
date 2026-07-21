import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the Theremin: A Soviet Instrument that Haunted Hollywood》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00330 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00330',
  slug: 'the-invention-of-the-theremin-a-soviet-instrument-that-haunted-hollywood',
  title: 'The Invention of the Theremin: A Soviet Instrument that Haunted Hollywood',
  subtitle: 'How a touch‑less Russian invention shaped eerie soundtracks in Hollywood.',
  summary: 'Explore the birth of the Theremin, its scientific roots, and its haunting journey into cinema.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the chaotic aftermath of World War I, a young physicist named Lev Termen found himself at the heart of the <span class="vocab" data-cn="苏联">Soviet Union</span>'s push for scientific prestige. Working in Moscow's Radiotechnical Institute, he dreamed of an instrument that could be played without ever touching it—a bold idea that seemed more like a magic trick than a serious <span class="vocab" data-cn="电子乐器">electronic instrument</span>. By 1920 he had begun to translate theory into circuitry, laying the groundwork for what would become one of the most haunting sounds of the twentieth century.`,
    `The core of Termen's invention rested on two slender <span class="vocab" data-cn="天线">antennas</span> protruding from a wooden box. One antenna controlled pitch, while the other modulated volume, each linked to an electronic <span class="vocab" data-cn="振荡器">oscillator</span>. By employing the <span class="vocab" data-cn="异频原理">heterodyne principle</span>, the device generated a steady tone whose frequency shifted as the player's hand moved closer or farther away. The result was an ethereal glide that could soar like a violin one moment and swoop down like a theremin's signature wail the next.`,
    `Termen first showcased his creation—then called the Thereminvox—in a public <span class="vocab" data-cn="演示">demonstration</span> before Soviet officials, including Vladimir Lenin himself. The audience watched in stunned silence as the invisible hands of the performer coaxed melodies from thin air. Though many dismissed it as a curiosity, a handful of musicians recognized its expressive potential. Among them was the prodigious virtuoso <span class="vocab" data-cn="克拉拉·罗克莫尔">Clara Rockmore</span>, who would later devote her career to mastering the instrument's subtle dynamics and proving that the Theremin could be as lyrical as any traditional concerto.`,
    `Political tides soon turned against Termen. In 1938 he was arrested on fabricated charges of espionage and spent several years in a Soviet labor camp before being released under a secret agreement with the <span class="vocab" data-cn="美国无线电公司">RCA</span> (Radio Corporation of America). The deal sent him into <span class="vocab" data-cn="流放">exile</span> in the United States, where he Anglicized his name to Leon Theremin and resumed work on his instrument. Though stripped of many of his original patents, he continued to refine the device, introducing a portable version that could be used on stage without cumbersome wiring.`,
    `Hollywood quickly fell under the Theremin's spell. Film composers seeking an otherworldly timbre turned to the instrument for its uncanny ability to suggest alien presence or psychological tension. Notably, <span class="vocab" data-cn="伯纳德·赫尔曼">Bernard Herrmann</span> employed it in the 1951 classic 'The Day the Earth Stood Still,' while <span class="vocab" data-cn="米克洛斯·罗扎">Miklós Rózsa</span> used its gliding tones to underscore dream sequences in Alfred Hitchcock's 'Spellbound.' The Theremin's wavering notes became a sonic shorthand for the uncanny, echoing through countless science‑fiction scores and even television series such as 'The Twilight Zone.'`,
    `As the 1960s ushered in the era of electronic music, the Theremin's legacy lived on in new forms. Its principle of contactless control inspired later developers of the <span class="vocab" data-cn="合成器">synthesizer</span>, and modern performers have revived its repertoire with contemporary techniques and digital effects. Today, museums display original Theremins alongside interactive exhibits that let visitors experience the instrument's ghostly voice firsthand. Though Lev Termen never saw his invention become a mainstream staple, the haunting sound he created continues to captivate audiences, reminding us that music can arise from pure physics as much as from strings or breath.`,
  ],
  vocabulary: [
    { word: 'Soviet Union', cn: '苏联' },
    { word: 'electronic instrument', cn: '电子乐器' },
    { word: 'antenna', cn: '天线' },
    { word: 'heterodyne principle', cn: '异频原理' },
    { word: 'oscillator', cn: '振荡器' },
    { word: 'demonstration', cn: '演示' },
    { word: 'Clara Rockmore', cn: '克拉拉·罗克莫尔' },
    { word: 'RCA', cn: '美国无线电公司' },
    { word: 'exile', cn: '流放' },
    { word: 'Bernard Herrmann', cn: '伯纳德·赫尔曼' },
    { word: 'Miklós Rózsa', cn: '米克洛斯·罗扎' },
    { word: 'synthesizer', cn: '合成器' },
  ],
};

export default article;
