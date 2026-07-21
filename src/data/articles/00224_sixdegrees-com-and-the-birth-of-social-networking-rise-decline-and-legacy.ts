import type { Article } from '../../types/index.ts';

// 文件意图：维护《SixDegrees.com and the Birth of Social Networking: Rise, Decline, and Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00224 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00224',
  slug: 'sixdegrees-com-and-the-birth-of-social-networking-rise-decline-and-legacy',
  title: 'SixDegrees.com and the Birth of Social Networking: Rise, Decline, and Legacy',
  subtitle: 'How a pioneering site planted the seeds of today’s social media giants',
  summary: 'An engaging look at SixDegrees.com, its innovative ideas, why it fell short, and how it shaped modern networking platforms.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1997, a small startup launched <span class="vocab" data-cn="六度分隔理论的在线实现">SixDegrees.com</span>, betting that anyone could connect to anyone else through no more than six acquaintances. The name echoed the popular “six degrees of separation” hypothesis, which suggested that any two people on Earth are linked by a short chain of mutual contacts. By turning this sociological curiosity into an interactive web service, SixDegrees became one of the very first attempts to map the <span class="vocab" data-cn="人际关系网络的抽象模型">social graph</span> for ordinary users.`,
    `The site offered simple profile pages where members could list personal interests, upload a photo, and most importantly, add “friends.” Once two people confirmed each other as friends, they could view each other's extended network—a feature that felt revolutionary at a time when the internet was still dominated by static HTML pages. Users also enjoyed an early form of <span class="vocab" data-cn="用户自行创建并分享的内容">user‑generated content</span>, posting status updates and sending private messages, foreshadowing many interactions we now take for granted on modern platforms.`,
    `SixDegrees emerged during the height of the <span class="vocab" data-cn="1990年代末至2000年代初互联网公司快速增长的时期">dot‑com bubble</span>. Venture capital poured into web startups, and SixDegrees secured several rounds of funding based largely on its visionary premise rather than proven revenue. The business model relied on advertising and premium subscriptions, but the market for online ads was still nascent, and users were not yet accustomed to paying for digital social services. Nevertheless, the site attracted tens of thousands of early adopters eager to experiment with this new form of digital connection.`,
    `Despite its buzz, SixDegrees struggled to achieve sustainable growth. The platform suffered from a limited <span class="vocab" data-cn="用户数量越多，网络的价值就越大">network effect</span> because most users could only invite friends they already knew offline, creating a closed loop that hindered viral expansion. Moreover, the site’s design was constrained by the bandwidth and browser capabilities of the late 1990s, making it sluggish on dial‑up connections. As newer services like Friendster (2002) and MySpace (2003) entered the scene with richer media features and more aggressive growth tactics, SixDegrees’ user base began to erode, leading to its eventual shutdown in 2001.`,
    `Although SixDegrees vanished, its conceptual legacy endured. The idea of a publicly visible <span class="vocab" data-cn="通过网络展示个人关系的结构">social graph</span> became the cornerstone for later giants such as Facebook and LinkedIn. These successors refined the model by introducing sophisticated algorithms to suggest friends, leveraging massive amounts of <span class="vocab" data-cn="描述数据的数据，如时间、地点或标签">metadata</span> to personalize feeds. In interviews, Mark Zuckerberg has cited early social sites as inspiration for building a platform where “people can share what they’re doing and stay connected with their real‑world friends.”`,
    `Technically, SixDegrees also pioneered several practices that are now standard in web development. It employed early forms of <span class="vocab" data-cn="允许第三方程序访问平台功能的接口">APIs</span> to let developers retrieve friend lists, and it experimented with “viral growth” loops by encouraging users to invite contacts via email—a precursor to today’s referral incentives. While the codebase was primitive by modern standards, its emphasis on linking user profiles into a cohesive network foreshadowed the complex graph databases that power contemporary recommendation engines.`,
    `Looking back, SixDegrees serves as both a cautionary tale and a source of inspiration. Its rise illustrates how a bold vision can capture imaginations even when technology is still catching up, while its decline reminds entrepreneurs that timing, scalability, and monetization are equally critical. The site’s brief existence planted the seed for an entire industry, proving that the first attempt at something new rarely succeeds perfectly—but it often paves the way for future breakthroughs.`,
  ],
  vocabulary: [
    { word: 'SixDegrees.com', cn: '六度分隔理论的在线实现' },
    { word: 'social graph', cn: '人际关系网络的抽象模型' },
    { word: 'user‑generated content', cn: '用户自行创建并分享的内容' },
    { word: 'dot‑com bubble', cn: '1990年代末至2000年代初互联网公司快速增长的时期' },
    { word: 'network effect', cn: '用户数量越多，网络的价值就越大' },
    { word: 'metadata', cn: '描述数据的数据，如时间、地点或标签' },
    { word: 'API', cn: '允许第三方程序访问平台功能的接口' },
  ],
};

export default article;
