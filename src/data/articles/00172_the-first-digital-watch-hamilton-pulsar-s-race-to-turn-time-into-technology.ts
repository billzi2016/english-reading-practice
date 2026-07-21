import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Digital Watch: Hamilton Pulsar’s Race to Turn Time into Technology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00172 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00172',
  slug: 'the-first-digital-watch-hamilton-pulsar-s-race-to-turn-time-into-technology',
  title: 'The First Digital Watch: Hamilton Pulsar’s Race to Turn Time into Technology',
  subtitle: 'How a bold experiment in the early 1970s turned a wristwatch into a glowing display of numbers.',
  summary: 'A look back at Hamilton’s Pulsar, the world’s first digital watch, and its impact on modern wearable technology.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1970, the Hamilton Watch Company—renowned for its mechanical chronographs—partnered with a fledgling electronics firm called Electro/Data Systems. Their goal was audacious: replace the familiar analog dial with a tiny <span class="vocab" data-cn="发光二极管">LED</span> display that could show numbers at a glance. At the time, LEDs were still a novelty in consumer products, mostly found on calculators and early digital clocks.`,
    `The engineering team faced a cascade of challenges. First, they needed an <span class="vocab" data-cn="集成电路">integrated circuit</span> small enough to fit inside a watch case yet powerful enough to drive the LED segments. The solution arrived from Fairchild Semiconductor, which supplied a custom 4‑bit chip that could multiplex the digits and control their brightness. This was one of the earliest uses of an IC in a personal accessory.`,
    `Power consumption proved even trickier than size. Early LEDs drew several milliamps each, quickly draining the tiny mercury battery that powered the prototype. To conserve energy, Hamilton designed a push‑button that illuminated the display for only ten seconds at a time—a feature that became a hallmark of the final product. The watch’s <span class="vocab" data-cn="电池寿命">battery life</span> under normal use was measured in weeks rather than months, a stark contrast to today’s multi‑year quartz watches.`,
    `When the Pulsar made its public debut at the 1972 New York Watch Expo, it stunned both journalists and consumers. The watch featured a sleek stainless‑steel case, a rectangular face, and four red LED digits that glowed like tiny traffic lights. Priced at $2,100 (equivalent to over $13,000 today), it was marketed as “the future of timekeeping,” appealing to tech enthusiasts who could afford the luxury of novelty.`,
    `The launch sparked an industry‑wide race. Within months, Seiko introduced a <span class="vocab" data-cn="石英机芯">quartz movement</span> that combined precise timing with a simpler electronic circuit, while other manufacturers began experimenting with <span class="vocab" data-cn="液晶显示器">LCD</span> displays that consumed far less power. Although the Pulsar’s LED screen was bright and unmistakable, its high energy draw made LCDs an attractive alternative for mass‑market watches.`,
    `Beyond the hardware, the Pulsar changed how people thought about personal devices. It demonstrated that a wristwatch could be more than a timekeeper; it could be a platform for digital information. This mindset paved the way for later innovations such as calculators, heart‑rate monitors, and eventually the smartwatches we wear today.`,
    `Today, collectors prize original Pulsar models not only for their rarity but also for their place in technological history. The watch stands as a reminder that bold experimentation—combining traditional craftsmanship with cutting‑edge electronics—can reshape an entire industry. As we look toward wearable <span class="vocab" data-cn="微处理器">microprocessors</span> and flexible displays, the spirit of Hamilton’s 1972 experiment lives on in every pixel that lights up our wrists.`,
  ],
  vocabulary: [
    { word: 'LED', cn: '发光二极管' },
    { word: 'integrated circuit', cn: '集成电路' },
    { word: 'battery life', cn: '电池寿命' },
    { word: 'quartz movement', cn: '石英机芯' },
    { word: 'LCD', cn: '液晶显示器' },
    { word: 'microprocessor', cn: '微处理器' },
  ],
};

export default article;
