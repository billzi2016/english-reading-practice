import type { Article } from '../../types/index.ts';

// 文件意图：维护《RFID Technology: From WWII Radar Innovations to Modern Supply‑Chain Transparency》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00134 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00134',
  slug: 'rfid-technology-from-wwii-radar-innovations-to-modern-supply-chain-transparency',
  title: 'RFID Technology: From WWII Radar Innovations to Modern Supply‑Chain Transparency',
  subtitle: 'How wartime radar research sparked a revolution in tracking goods worldwide.',
  summary: 'Explore the surprising link between WWII radar breakthroughs and today’s RFID-driven supply‑chain visibility.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1935, a modest field on the English coast became the birthplace of modern <span class="vocab" data-cn="射频识别">RFID</span> technology. Sir Robert Watson‑Watt and his team were tasked with detecting incoming aircraft, leading to the invention of radar – a system that emitted radio waves and listened for their echoes. While their primary goal was early warning, they inadvertently demonstrated that objects could be identified at a distance simply by how they interacted with electromagnetic signals.`,
    `The scientific foundation lay in <span class="vocab" data-cn="电磁感应">electromagnetic induction</span>, a principle first described by Michael Faraday and later refined by Nikola Tesla. When a conductive loop moves through a magnetic field, an electric current is induced. Radar engineers used this effect to generate and receive high‑frequency pulses, realizing that a small resonant circuit attached to an object could reflect or modulate those pulses in a unique way – the conceptual seed of today’s <span class="vocab" data-cn="标签">tag</span>.`,
    `After the war, surplus radar components found new life in civilian applications. In 1948, the U.S. Army experimented with “identification friend or foe” (IFF) transponders on aircraft, which automatically replied to interrogation signals. By the early 1970s, engineers at the University of Cambridge adapted this idea for livestock tagging, embedding tiny passive <span class="vocab" data-cn="标签">tags</span> that required no battery and could be read from a few meters away. This marked the first commercial step from military radar to everyday identification.`,
    `Modern RFID systems fall into two broad families: passive and active. Passive tags harvest energy from the incoming signal of a <span class="vocab" data-cn="读写器">reader</span>, while active tags contain their own power source, allowing longer range and richer data. They operate across several frequency bands – low‑frequency (LF), high‑frequency (HF), and ultra‑high‑frequency (UHF) – each with trade‑offs in read distance, speed, and material penetration. The choice of band often determines whether a system is suited for pet microchips, passport security, or warehouse logistics.`,
    `In today’s global supply chains, RFID provides unprecedented <span class="vocab" data-cn="供应链透明度">supply‑chain transparency</span>. A coffee farmer in Colombia can attach a UHF tag to each bag of beans. As the bags travel through processing plants, shipping containers, and retail shelves, networked readers automatically log timestamps, temperature conditions, and location coordinates. This digital trail not only deters fraud but also enables consumers to trace their morning brew back to the exact farm, fostering trust and sustainability.`,
    `Looking ahead, RFID faces both technical and ethical challenges. The proliferation of tags raises privacy concerns; invisible identifiers could be used for unwanted tracking if not properly regulated. To address this, researchers are exploring <span class="vocab" data-cn="频率跳变">frequency hopping</span> techniques that make eavesdropping harder, as well as integrating RFID data with blockchain for immutable provenance records. As the Internet of Things (IoT) expands, RFID will likely become a silent backbone, linking physical objects to the digital world in ways that were unimaginable when radar first lit up the night sky.`,
  ],
  vocabulary: [
    { word: 'RFID', cn: '射频识别' },
    { word: 'radar', cn: '雷达' },
    { word: 'electromagnetic induction', cn: '电磁感应' },
    { word: 'tag', cn: '标签' },
    { word: 'reader', cn: '读写器' },
    { word: 'supply-chain transparency', cn: '供应链透明度' },
    { word: 'frequency hopping', cn: '频率跳变' },
  ],
};

export default article;
