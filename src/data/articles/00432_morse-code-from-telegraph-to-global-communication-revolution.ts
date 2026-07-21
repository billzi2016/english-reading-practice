import type { Article } from '../../types/index.ts';

// 文件意图：维护《Morse Code: From Telegraph to Global Communication Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00432 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00432',
  slug: 'morse-code-from-telegraph-to-global-communication-revolution',
  title: 'Morse Code: From Telegraph to Global Communication Revolution',
  subtitle: 'How a simple series of dots and dashes reshaped worldwide messaging',
  summary: 'Explore the birth, spread, and lasting impact of Morse code from its telegraph origins to modern digital communication.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1830s, a young painter named <span class="vocab" data-cn="塞缪尔·莫尔斯">Samuel Morse</span> became fascinated with electricity after witnessing a lightning strike. His curiosity led him to experiment with an <span class="vocab" data-cn="电报机">electromagnet</span>-based device that could send brief pulses over a wire, laying the groundwork for what would become the first practical <span class="vocab" data-cn="远距离通信技术">telegraph system</span>. By 1844, Morse and his partner Alfred Vail had refined the technology enough to transmit the famous message “What hath God wrought?” between Washington, D.C., and Baltimore, proving that information could travel faster than any horse‑drawn courier.`,
    `The key to this breakthrough was not just the hardware but also a simple yet powerful language: <span class="vocab" data-cn="莫尔斯电码">Morse code</span>. Consisting of short signals (dots) and long signals (dashes), it could represent every letter of the alphabet, numerals, and a handful of punctuation marks. Because each character varied in length, operators could send messages at different speeds without losing clarity—a crucial advantage when early wires suffered from resistance and signal degradation. The code’s efficiency made it ideal for the sprawling <span class="vocab" data-cn="电路">circuit</span> networks that soon spanned continents.`,
    `The 1850s saw rapid expansion of telegraph lines across the United States, driven by the need to coordinate railroad schedules and financial markets. By the time the first transatlantic cable was laid in 1866, Morse code had already become a lingua franca for engineers and merchants on both sides of the ocean. The ability to transmit market prices, diplomatic dispatches, and news stories within minutes—rather than days—revolutionized global commerce and geopolitics. Even the British Empire adopted the system for its vast colonial communications network, standardizing procedures that would persist well into the 20th century.`,
    `During World War I, Morse code proved indispensable on the battlefield. Soldiers used portable <span class="vocab" data-cn="无线电发报机">radio transmitters</span> to send concise orders across trenches, while naval vessels relied on flashing light signals—known as <span class="vocab" data-cn="灯光信号">semaphore</span>—to maintain contact in foggy seas. The code’s resilience against noise and its minimal bandwidth requirements meant that even primitive equipment could convey critical information reliably. This period also saw the rise of amateur “ham” operators, who embraced Morse as a hobbyist skill and helped build an informal international communication web.`,
    `The interwar years introduced new competitors such as the <span class="vocab" data-cn="美国信息交换标准">ASCII</span> character set, which encoded text in binary form for early computers. Yet Morse code persisted because it required only a single on/off signal, making it ideal for low‑power devices and emergency situations. In World War II, Allied forces used the code extensively for covert operations; resistance groups would tap telephone lines or use hidden lamps to transmit messages that could not be intercepted by enemy radio scanners.`,
    `With the advent of satellite communications and the internet in the late 20th century, the practical need for Morse dwindled. However, its legacy endures in several unexpected places. Modern <span class="vocab" data-cn="二进制代码">binary code</span> still mirrors the on/off principle that made dots and dashes viable, and many digital protocols incorporate error‑checking methods reminiscent of Morse’s redundancy. Moreover, emergency services worldwide retain a “<span class="vocab" data-cn="求救信号">SOS</span>” distress signal—three long, three short, three long—in both visual (flashing lights) and auditory (audible tones) forms, honoring the code’s universal recognizability.`,
    `Today, learning Morse code is often pursued for its historical charm or as a mental exercise. Mobile apps can translate text into audible beeps, while hobbyist clubs organize “<span class="vocab" data-cn="电码竞赛">code contests</span>” where participants race to decode messages at high speeds. The simplicity of the system—just two basic symbols—continues to inspire designers of minimalist communication interfaces and reminds us that profound impact can arise from the most elementary ideas.`,
  ],
  vocabulary: [
    { word: 'Samuel Morse', cn: '塞缪尔·莫尔斯' },
    { word: 'electromagnet', cn: '电磁铁' },
    { word: 'telegraph', cn: '电报机' },
    { word: 'Morse code', cn: '莫尔斯电码' },
    { word: 'circuit', cn: '电路' },
    { word: 'radio transmitter', cn: '无线电发报机' },
    { word: 'semaphore', cn: '灯光信号' },
    { word: 'ASCII', cn: '美国信息交换标准' },
    { word: 'binary code', cn: '二进制代码' },
    { word: 'SOS', cn: '求救信号' },
    { word: 'code contest', cn: '电码竞赛' },
  ],
};

export default article;
