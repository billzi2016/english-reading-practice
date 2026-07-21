import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Undersea Telephone Cable: Connecting Continents Beneath the Waves》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00163 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00163',
  slug: 'the-first-undersea-telephone-cable-connecting-continents-beneath-the-waves',
  title: 'The First Undersea Telephone Cable: Connecting Continents Beneath the Waves',
  subtitle: 'How engineers turned ocean depths into a voice‑carrying highway.',
  summary: 'A narrative of the technical breakthroughs and human drama behind the first transatlantic telephone cable.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early summer of 1956, a convoy of specially‑built ships slipped silently away from the Scottish coast, each bearing thousands of meters of gleaming <span class="vocab" data-cn="同轴电缆">coaxial cable</span>. Their destination lay half a world away, beneath the cold, pressure‑crushed waters of the Atlantic Ocean. The mission was audacious: to lay the first permanent telephone link that could carry human conversation across continents without relying on radio or satellite relays.`,
    `The idea of an undersea voice line had haunted engineers since Alexander Graham Bell’s famous 1876 demonstration of a working telephone. Early attempts used the same <span class="vocab" data-cn="绝缘材料">insulation</span> that proved successful for telegraph cables—primarily <span class, className="vocab" data-cn="古塔胶，一种天然树脂">gutta‑percha</span>. However, telephone signals required far greater bandwidth and suffered from rapid <span class="vocab" data-cn="信号衰减">signal attenuation</span>, making the old materials inadequate for long distances.</`,
    `The breakthrough came with the development of a new polymer sheath—high‑density polyethylene—that could withstand both the crushing pressure at depths exceeding 3,000 meters and the corrosive saltwater environment. Engineers also designed miniature <span class="vocab" data-cn="中继器">repeaters</span> that amplified the weak electrical pulses every 40 miles. These repeaters were powered by seawater‑fed batteries, a daring solution that turned the ocean itself into an energy source.`,
    `Laying the cable was a ballet of precision and patience. The ships used massive drum spools that could unwind the cable at a controlled speed of about two knots. As the vessel moved forward, a plow‑like device—called a <span class="vocab" data-cn="海底犁">submarine plough</span>—buried the cable just beneath the seabed, protecting it from anchors and fishing nets. Every few hundred kilometers, divers in pressurized chambers inspected joints, ensuring that no microscopic flaw could become a catastrophic break.</`,
    `When the final segment was finally connected near Clarenville, Newfoundland, technicians performed a series of “hand‑shake” tests. A voice spoken in Oban traveled through the coaxial core, was boosted by ten repeaters, and emerged clear on the other side—albeit with a faint echo that reminded listeners they were speaking across an ocean. The inaugural call featured dignitaries from both sides reciting poetry, symbolizing not just a technical triumph but also a cultural bridge.</`,
    `The success of this first transatlantic telephone cable paved the way for subsequent generations of undersea links, each offering higher <span class="vocab" data-cn="带宽">bandwidth</span> and more reliable service. By the 1970s, fiber‑optic cables—using pulses of light instead of electrical currents—began to replace coaxial systems, dramatically expanding capacity from dozens of voice channels to millions of simultaneous data streams.`,
    `Today, modern submarine networks form the backbone of global internet traffic, yet they owe their lineage to that daring 1956 convoy. The story reminds us that every click, video call, or streamed song travels through a silent, resilient artery beneath the waves—an engineering marvel born from curiosity, perseverance, and the simple human desire to hear each other’s voices across any distance.`
  ],
  vocabulary: [
    { word: 'coaxial cable', cn: '同轴电缆' },
    { word: 'signal attenuation', cn: '信号衰减' },
    { word: 'gutta-percha', cn: '古塔胶，一种天然树脂' },
    { word: 'repeater', cn: '中继器' },
    { word: 'submarine plough', cn: '海底犁' },
    { word: 'bandwidth', cn: '带宽' }
  ],
};

export default article;
