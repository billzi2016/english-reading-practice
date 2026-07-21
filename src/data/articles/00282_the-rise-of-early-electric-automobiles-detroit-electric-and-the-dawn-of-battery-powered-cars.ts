import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise of Early Electric Automobiles: Detroit Electric and the Dawn of Battery‑Powered Cars》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00282 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00282',
  slug: 'the-rise-of-early-electric-automobiles-detroit-electric-and-the-dawn-of-battery-powered-cars',
  title: 'The Rise of Early Electric Automobiles: Detroit Electric and the Dawn of Battery‑Powered Cars',
  subtitle: 'How a niche electric maker shaped the first wave of battery‑driven motoring',
  summary: 'A narrative of Detroit Electric’s success, its technology, and why early electric cars mattered.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `At the turn of the 20th century, when horse‑drawn carriages were still common, a quiet revolution began in Detroit. While most manufacturers chased gasoline engines, a small firm called <span class="vocab" data-cn="底特律电动公司">Detroit Electric</span> set out to prove that electricity could power a vehicle for everyday use. Founded in 1907 by William C. Davidson, the company targeted affluent urban customers who prized cleanliness and ease of operation over raw speed.`,
    `The heart of every Detroit Electric was a <span class="vocab" data-cn="铅酸电池">lead–acid battery</span> pack, similar to those used in early telegraph systems but scaled up for automotive needs. These batteries delivered a modest voltage—typically around 60 volts—but provided enough torque to move the car smoothly from a standstill. Because electric motors produce maximum torque at zero RPM, drivers experienced instant acceleration without the need for gear shifting, a novelty that fascinated many early adopters.`,
    `One of the most compelling selling points was the vehicle’s quiet operation. In bustling city streets, the absence of engine roar and exhaust fumes made Detroit Electric cars especially popular among women and professionals who valued a refined, low‑maintenance ride. The company marketed its automobiles as “the perfect companion for the modern lady,” emphasizing safety, reliability, and the lack of oil changes—a stark contrast to the messy gasoline engines of the era.`,
    `Range was limited by today’s standards, typically 80 to 100 miles on a single charge, but this proved sufficient for most urban commutes. Owners would plug their cars into a standard household outlet or a dedicated charging station at home, a process that could take several hours. The concept of <span class="vocab" data-cn="续航焦虑">range anxiety</span> was already present, yet the predictable daily routes of early 20th‑century life mitigated many concerns. Dealers even offered battery swapping services in some cities to reduce downtime.`,
    `Technologically, Detroit Electric pioneered several features that resurfaced a century later. The cars employed an <span class="vocab" data-cn="电动传动系统">electric drivetrain</span> with a single‑speed reduction gear, eliminating the complexity of multi‑gear transmissions. Some models incorporated early forms of <span class="vocab" data-cn="再生制动">regenerative braking</span>, feeding kinetic energy back into the battery during deceleration—a principle that modern EVs rely on heavily today.`,
    `Despite its innovations, Detroit Electric faced mounting competition as gasoline infrastructure expanded rapidly after World War I. The mass production techniques introduced by Henry Ford dramatically lowered the price of internal‑combustion cars, while oil discoveries made fuel cheap and abundant. By the 1920s, electric vehicles became a niche market, and Detroit Electric ceased production in 1939, having built roughly 13,000 cars over three decades.`,
    `Today, the legacy of Detroit Electric lives on in the renewed interest in battery‑powered transportation. Museums preserve original models, and contemporary manufacturers cite these early pioneers when discussing the cyclical nature of automotive technology. Understanding this forgotten chapter reminds us that electric mobility is not a brand‑new idea but a revival of concepts first tested over a hundred years ago.`,
  ],
  vocabulary: [
    { word: 'Detroit Electric', cn: '底特律电动公司' },
    { word: 'lead–acid battery', cn: '铅酸电池' },
    { word: 'range anxiety', cn: '续航焦虑' },
    { word: 'electric drivetrain', cn: '电动传动系统' },
    { word: 'regenerative braking', cn: '再生制动' },
    { word: 'early 20th century', cn: '20世纪早期' },
  ],
};

export default article;
