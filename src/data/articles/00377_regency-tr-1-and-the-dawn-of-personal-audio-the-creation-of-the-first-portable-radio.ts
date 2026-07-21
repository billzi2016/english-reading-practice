import type { Article } from '../../types/index.ts';

// 文件意图：维护《Regency TR‑1 and the Dawn of Personal Audio: The Creation of the First Portable Radio》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00377 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00377',
  slug: 'regency-tr-1-and-the-dawn-of-personal-audio-the-creation-of-the-first-portable-radio',
  title: 'Regency TR‑1 and the Dawn of Personal Audio: The Creation of the First Portable Radio',
  subtitle: 'How a tiny transistor sparked a revolution in personal listening',
  summary: 'The Regency TR‑1 was the world’s first pocket-sized radio, turning the laboratory invention of the <span class="vocab" data-cn="晶体管">transistor</span> into everyday culture.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1955 a teenage boy named Tommy stood on the curb outside his school, clutching a thin metal box that crackled with static. The device was the newly‑released Regency TR‑1, and for the first time anyone could carry a radio in a pocket without the weight of a <span class="vocab" data-cn="真空管">vacuum tube</span> set. Tommy’s excitement wasn’t just about hearing his favorite shows; it was the sensation of holding a piece of cutting‑edge science that had only months earlier been demonstrated on laboratory benches.`,
    `The story behind the TR‑1 began at Texas Instruments, where engineers John Robinson and Jack Kilby were experimenting with point‑contact <span class="vocab" data-cn="晶体管">transistor</span> technology. Unlike the bulky glass tubes that dominated radios since the 1920s, a transistor could amplify signals using a few millimetres of semiconductor material. Regency Manufacturing Company, a small Chicago firm specializing in consumer gadgets, saw an opportunity to turn this laboratory curiosity into a <span class="vocab" data-cn="大众市场">mass market</span> product, and they commissioned the first production run in early 1955.`,
    `Designing a truly portable radio required more than swapping tubes for transistors. The engineers had to fit a power supply, an antenna coil, and a speaker into a chassis no larger than a paperback book. They chose a simple AM (amplitude modulation) receiver because FM circuitry was still too complex for the early transistor’s limited gain. The TR‑1 ran on two 22‑gram mercury batteries, giving it roughly eight hours of continuous play—an astonishing figure compared to the hour‑long life of contemporary tube radios.`,
    `When Regency unveiled the TR‑1 at the Chicago Music Fair, the marketing copy emphasized “personal audio” and “hands‑free listening.” The ad campaign featured a young woman strolling through a park while the tiny radio perched on her shoulder, a visual that hinted at a future where sound could accompany any activity. This notion of mobility reshaped consumer expectations: no longer did listeners have to stay near a wall socket or endure the warm glow of a tube set; they could now bring their favourite programs wherever they went.`,
    `The impact of the TR‑1 rippled through the electronics industry. Sony, then a small Japanese firm, took note and began developing its own transistor radios later that year, eventually releasing the iconic “TR‑63” in 1957. The success of portable radios also accelerated research into more reliable semiconductor devices, paving the way for the <span class="vocab" data-cn="集成电路">integrated circuit</span> invented by Jack Kilby and Robert Noyce in 1958. Within a decade, pocket‑sized televisions, calculators, and eventually digital music players could trace their lineage back to that first handheld transistor set.`,
    `Beyond technology, the TR‑1 altered cultural habits. Teenagers could now tune into rock ’n’ roll stations after school, soldiers on base could catch news from home without bulky equipment, and families in rural areas enjoyed a portable link to national broadcasts during power outages. The sense of personal ownership over media foreshadowed later phenomena such as the Walkman, MP3 players, and today’s streaming smartphones—all built on the principle that sound should travel with the listener.`,
    `Today collectors still prize the Regency TR‑1 for its historical significance and its distinctive brushed‑aluminum case. While modern devices boast gigahertz processors and high‑definition displays, the core idea remains unchanged: a compact, battery‑powered unit that puts audio directly into the hands of individuals. The tiny transistor that powered the TR‑1 may have been replaced by billions of transistors on a single chip, but its legacy endures every time we pull out a phone to listen to a podcast on the bus.`,
  ],
  vocabulary: [
    { word: 'transistor', cn: '晶体管' },
    { word: 'vacuum tube', cn: '真空管' },
    { word: 'integrated circuit', cn: '集成电路' },
    { word: 'mass market', cn: '大众市场' },
    { word: 'point-contact transistor', cn: '点接触晶体管' },
    { word: 'personal audio', cn: '个人音频' },
  ],
};

export default article;
