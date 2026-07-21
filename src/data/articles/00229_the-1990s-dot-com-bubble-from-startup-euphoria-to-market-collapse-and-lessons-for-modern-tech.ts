import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1990s Dot‑Com Bubble: From Startup Euphoria to Market Collapse and Lessons for Modern Tech》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00229 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00229',
  slug: 'the-1990s-dot-com-bubble-from-startup-euphoria-to-market-collapse-and-lessons-for-modern-tech',
  title: 'The 1990s Dot‑Com Bubble: From Startup Euphoria to Market Collapse and Lessons for Modern Tech',
  subtitle: 'How a decade of internet optimism reshaped venture funding and corporate strategy.',
  summary: 'A narrative of the rise and fall of the 1990s dot‑com boom, with insights for today’s tech entrepreneurs.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1990s a handful of university labs and hobbyists began to explore the World Wide Web, a technology that had only just emerged from CERN. By the mid‑90s browsers like Netscape Navigator turned the abstract idea of “hypertext” into a visual playground for everyday users. This sudden accessibility sparked what journalists later called the <span class="vocab" data-cn="网络公司">dot‑com</span> phenomenon, as countless new companies appended “.com” to their names in hopes of capturing the imagination—and wallets—of an increasingly online public.`,
    `The excitement quickly attracted a flood of <span class="vocab" data-cn="风险投资">venture capital</span>. Investors, eager to be part of the next big thing, poured billions into startups with little more than a prototype and a catchy domain name. Valuations skyrocketed on the basis of projected traffic rather than proven revenue, leading to headline‑grabbing <span class="vocab" data-cn="首次公开募股">IPO</span> debuts where companies were listed at market caps that dwarfed their actual earnings. The mantra “grow fast or die” became a self‑fulfilling prophecy for many fledgling firms.`,
    `Behind the glossy press releases, many startups struggled with an unsustainable <span class="vocab" data-cn="烧钱率">burn rate</span>. Without clear paths to profitability, they relied on continuous funding rounds to stay afloat. When market sentiment shifted, some companies attempted a rapid <span class="vocab" data-cn="业务转型">pivot</span>, changing their core product or target audience in hopes of finding a viable niche. While a few pivots succeeded—think of Amazon’s evolution from an online bookstore to a global marketplace—most were too late to reverse the cash‑flow crisis.`,
    `The bubble reached its apex in early 2000, when the <span class="vocab" data-cn="纳斯达克证券交易所">NASDAQ</span> composite index surged past 5,000 points, driven largely by tech stocks whose price‑to‑earnings ratios were astronomically high. Companies like Pets.com and Webvan became household names despite having never turned a profit. The market’s euphoria was palpable; analysts predicted that the internet would generate trillions in new economic activity within a few short years.`,
    `However, reality soon intruded. As interest rates rose and investors grew wary of unprofitable business models, confidence evaporated. In March 2000 the NASDAQ began a steep decline, shedding more than 75 % of its value over the next two years. Iconic dot‑coms vanished overnight, and even well‑funded firms with lofty <span class="vocab" data-cn="独角兽公司">unicorn</span> valuations were forced into bankruptcy or massive layoffs. The crash left a generation of engineers disillusioned but also taught hard lessons about market fundamentals.`,
    `The aftermath reshaped the tech ecosystem. Venture capitalists adopted more rigorous due diligence, emphasizing unit economics and sustainable growth over sheer user numbers. Entrepreneurs learned to balance ambition with realistic financial planning, often keeping a tighter grip on their <span class="vocab" data-cn="烧钱率">burn rate</span>. Moreover, the concept of the <span class="vocab" data-cn="网络效应">network effect</span>—where a product becomes more valuable as more people use it—gained prominence as a legitimate moat for digital businesses.`,
    `Today’s tech landscape still feels the echo of that decade. While new waves of investment surge around artificial intelligence, fintech, and biotech, investors and founders alike recall the dot‑com saga as a cautionary tale: hype can accelerate growth, but without solid fundamentals it can also precipitate rapid collapse. By studying the rise and fall of the 1990s <span class="vocab" data-cn="网络公司">dot‑com</span> bubble, modern innovators can better navigate the fine line between visionary ambition and prudent risk management.`,
  ],
  vocabulary: [
    { word: 'dot‑com', cn: '网络公司' },
    { word: 'venture capital', cn: '风险投资' },
    { word: 'IPO', cn: '首次公开募股' },
    { word: 'valuation', cn: '估值' },
    { word: 'burn rate', cn: '烧钱率' },
    { word: 'pivot', cn: '业务转型' },
    { word: 'NASDAQ', cn: '纳斯达克证券交易所' },
    { word: 'unicorn', cn: '独角兽公司' },
    { word: 'network effect', cn: '网络效应' },
  ],
};

export default article;
