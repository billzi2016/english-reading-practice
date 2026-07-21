import type { Article } from '../../types/index.ts';

// 文件意图：维护《Samuel Morse and the Telegraph Revolution: Connecting Continents at the Speed of Lightning》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00327 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00327',
  slug: 'samuel-morse-and-the-telegraph-revolution-connecting-continents-at-the-speed-of-lightning',
  title: 'Samuel Morse and the Telegraph Revolution: Connecting Continents at the Speed of Lightning',
  subtitle: 'How a simple code turned distant shores into neighbors.',
  summary: 'The story of Samuel Morse, his invention, and how telegraphy reshaped global communication.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1830s a young painter named <span class="vocab" data-cn="塞缪尔·莫尔斯">Samuel Morse</span> was more concerned with light and shadow on canvas than with electricity. A tragic accident that left him partially deaf sparked an obsession with visual signals, leading him to experiment with the newly discovered principle of the <span class="vocab" data-cn="电磁铁">electromagnet</span>. By 1837 he had built a modest prototype that could transmit a simple “dot” and “dash” across a short wire, laying the groundwork for what would become the first practical <span class="vocab" data-cn="电报技术">telegraphy</span> system.`,
    `Morse’s breakthrough came not from artistic flair but from collaboration with inventor <span class="vocab" data-cn="阿尔弗雷德·维尔">Alfred Vail</span>. Together they refined the circuitry, introduced a reliable power source, and most importantly codified the language of pulses into what we now know as <span class="vocab" data-cn="莫尔斯电码">Morse code</span>. The code assigned each letter of the alphabet a unique pattern of short (·) and long (–) signals, allowing operators to translate electrical impulses back into readable text with astonishing speed.`,
    `The first public demonstration on May 24, 1844, between Washington, D.C., and Baltimore captured the nation’s imagination. When the message “What hath God wrought?”—a biblical phrase suggested by the U.S. Secretary of State—traveled across a single‑wire line in less than ten minutes, it proved that information could outrun even the fastest horse‑carriage. Newspapers called it “the lightning of the age,” a metaphor that would prove prophetic as the network expanded worldwide.`,
    `Within a decade, telegraph lines spanned continents. The <span class="vocab" data-cn="跨洲铁路">Transcontinental Railroad</span> in the United States incorporated telegraph poles alongside its tracks, enabling real‑time coordination of train schedules and freight shipments. In Europe, dense grids linked major cities from London to St. Petersburg, while undersea ventures such as the 1858 <span class="vocab" data-cn="跨大西洋电缆">Atlantic submarine cable</span> attempted to bridge the oceanic divide. Though early cables suffered from <span class="vocab" data-cn="信号衰减">signal attenuation</span>, engineers soon devised repeaters that amplified weak currents, making continuous intercontinental communication feasible.`,
    `The impact on commerce was immediate. Stock exchanges could now publish prices across time zones, and newspapers transmitted stories faster than ever before, creating a nascent global news cycle. Governments used the telegraph for diplomatic dispatches, military orders, and even early weather forecasting—an application that foreshadowed modern meteorological satellites. In many ways, the telegraph turned the world into a single, synchronized market.`,
    `Yet the technology was not without challenges. Long distances required robust insulation, and sudden surges from lightning strikes could fry entire sections of line. The invention of the <span class="vocab" data-cn="断路器">circuit breaker</span> in the 1860s provided a safety valve, automatically cutting off current when dangerous spikes were detected. This innovation not only protected equipment but also increased public confidence in the reliability of electric communication.`,
    `By the turn of the 20th century, the telegraph had become so entrenched that it shaped language itself. Phrases like “wired” and “on the line” entered everyday speech, while the rhythmic tapping of <span class="vocab" data-cn="莫尔斯电码">Morse code</span> became a cultural icon, immortalized in literature and film. Although radio and later digital networks would eventually eclipse it, the telegraph’s legacy endures: a reminder that a simple system of dots and dashes once connected continents at the speed of lightning.`,
  ],
  vocabulary: [
    { word: 'Samuel Morse', cn: '塞缪尔·莫尔斯' },
    { word: 'electromagnet', cn: '电磁铁' },
    { word: 'telegraphy', cn: '电报技术' },
    { word: 'Morse code', cn: '莫尔斯电码' },
    { word: 'Transcontinental Railroad', cn: '跨洲铁路' },
    { word: 'Atlantic submarine cable', cn: '跨大西洋电缆' },
    { word: 'signal attenuation', cn: '信号衰减' },
    { word: 'circuit breaker', cn: '断路器' },
  ],
};

export default article;
