import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of the Compact Disc》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00386 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00386',
  slug: 'the-birth-of-the-compact-disc-from-laser-technology-to-a-global-music-revolution',
  title: 'The Birth of the Compact Disc',
  subtitle: 'From Laser Technology to a Global Music Revolution',
  summary: 'How laser‑based storage and digital audio standards turned a niche format into a worldwide phenomenon.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the late 1970s, two European giants—<span class="vocab" data-cn="荷兰电子公司">Philips</span> and <span class="vocab" data-cn="日本电子公司">Sony</span>—began a secret collaboration to replace vinyl records with something more durable and precise. Their goal was to create a new medium that could store high‑fidelity sound while resisting the scratches and wear that plagued tapes and discs. This joint effort eventually gave birth to the <span class="vocab" data-cn="光盘">compact disc</span>, a thin, reflective disk that would soon reshape how people listened to music.`,
    `The key enabling technology was the <span class="vocab" data-cn="激光">laser</span>. By the early 1970s, researchers had already demonstrated that a focused beam of light could read microscopic pits on a rotating surface without physical contact. Sony’s engineers refined a low‑power infrared laser capable of tracking these pits at high speed, while Philips contributed expertise in optical materials and disc manufacturing. The combination allowed data to be retrieved with unprecedented accuracy, laying the groundwork for reliable consumer playback devices.`,
    `Unlike analog vinyl, the CD stored sound as <span class="vocab" data-cn="数字音频">digital audio</span>. Audio signals were sampled at a rate of 44.1 kHz and quantized into 16‑bit values using <span class="vocab" data-cn="脉冲编码调制">PCM (pulse‑code modulation)</span>. This “sampling rate” captured frequencies up to 22 kHz—well beyond the range of most human hearing—and provided a signal‑to‑noise ratio far superior to cassette tapes. The digital format also meant that copies could be made without any loss in quality, a revolutionary concept at the time.`,
    `Physically, a CD is a spiral track of tiny <span class="vocab" data-cn="凹坑和凸起">pit and land</span> patterns molded into a polycarbonate substrate. An <span class="vocab" data-cn="光学拾取头">optical pickup</span> shines the laser onto the disc; when the beam hits a pit, the reflected light interferes differently than when it reflects off a land, creating a binary “1” or “0”. These minute variations—each pit only about 0.5 µm long—are read at speeds up to 500 km/h as the disc spins, translating physical geometry into electrical signals that are then decoded back into sound.`,
    `Before mass production could begin, each master disc underwent a meticulous <span class="vocab" data-cn="母带制作">mastering</span> process. Engineers first cut a glass master using an ultra‑fine diamond stylus that etched the pit pattern directly onto the surface. This glass master was then coated with a thin layer of nickel to create a stamper, which could press thousands of polycarbonate blanks under heat and pressure. The resulting copies retained the exact microscopic geometry of the original, ensuring consistent playback across every unit sold worldwide.`,
    `The first commercial CDs appeared in Japan in October 1982, featuring Billy Joel’s “52nd Street” and the soundtrack to the film *E.T.* By early 1983, the format had launched in Europe and North America, quickly eclipsing vinyl in sales. Record companies praised the medium for its durability, longer playing time—up to 74 minutes per disc—and the ability to program tracks without audible clicks between songs. Consumers embraced the crisp, noise‑free sound, and CD players soon became a staple of home audio systems.`,
    `Although newer formats like MP3s and streaming services have largely supplanted physical media, the legacy of the <span class="vocab" data-cn="光盘">compact disc</span> endures. It proved that high‑quality digital storage was viable for mass markets, spurring advances in optical drives, DVDs, and Blu‑ray discs. Moreover, the CD’s success demonstrated how a well‑engineered technological standard could trigger a cultural revolution, turning music from a fragile analog experience into an accessible, portable, and enduring art form.`,
  ],
  vocabulary: [
    { word: 'compact disc', cn: '光盘' },
    { word: 'laser', cn: '激光' },
    { word: 'digital audio', cn: '数字音频' },
    { word: 'sampling rate', cn: '采样率' },
    { word: 'PCM (pulse-code modulation)', cn: '脉冲编码调制' },
    { word: 'optical pickup', cn: '光学拾取头' },
    { word: 'pit and land', cn: '凹坑和凸起' },
    { word: 'mastering', cn: '母带制作' },
  ],
};

export default article;
