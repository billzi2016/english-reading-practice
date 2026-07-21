import type { Article } from '../../types/index.ts';

// 文件意图：维护《The B‑2 Spirit Stealth Bomber: Engineering Secrets, Strategic Role, and Controversies》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00308 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00308',
  slug: 'the-b-2-spirit-stealth-bomber-engineering-secrets-strategic-role-and-controversies',
  title: 'The B‑2 Spirit Stealth Bomber: Engineering Secrets, Strategic Role, and Controversies',
  subtitle: 'How a flying wing reshaped modern air power',
  summary: 'An inside look at the design, purpose, and debates surrounding America’s iconic stealth bomber.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1981, a small group of engineers gathered in a dimly lit conference room at Northrop Grumman’s secret “Skunk Works” facility. Their mission was audacious: to create an aircraft that could slip through hostile radar nets as if it were a ghost. The project, later christened the B‑2 Spirit, would become a testbed for cutting‑edge <span class="vocab" data-cn="隐身技术">stealth technology</span>, demanding compromises in size, weight, and cost that no one had previously imagined.`,
    `The most recognizable feature of the B‑2 is its seamless flying wing shape. By eliminating traditional fuselage and tail surfaces, designers dramatically reduced the aircraft’s <span class="vocab" data-cn="雷达散射截面">radar cross-section (RCS)</span>. Every curve was calculated using sophisticated computer models to scatter incoming radar waves away from their source, making the bomber appear as a faint blip—or sometimes nothing at all—on enemy screens. This geometric stealth became the visual hallmark of the aircraft and set a new benchmark for low‑observable design.`,
    `Beyond shape, the B‑2 relies on an extensive skin of <span class="vocab" data-cn="复合材料">composite material</span> infused with radar‑absorbent coating. The carbon‑fiber reinforced polymer not only provides structural strength but also dampens electromagnetic energy that strikes the surface. Engineers mixed tiny particles of ferrite and conductive polymers into the resin, creating a “black” finish that further shrinks the RCS. Maintaining this delicate balance required a climate‑controlled hangar; even minor scratches could compromise the aircraft’s stealth envelope.`,
    `Controlling such an unconventional airframe demanded revolutionary avionics. The bomber employs a full <span class="vocab" data-cn="电传操纵系统">fly-by-wire</span> system, where pilot inputs are translated into electronic signals that continuously adjust control surfaces to keep the plane stable. Coupled with subtle <span class="vocab" data-cn="推力矢量控制">thrust vectoring</span> on its four General Electric F118‑100 engines, the B‑2 can execute precise maneuvers at low speeds—essential for penetrating dense air defenses and delivering payloads from unexpected angles. The synergy of these systems makes the aircraft both agile and forgiving despite its massive wingspan.`,
    `Strategically, the B‑2 was conceived as a <span class="vocab" data-cn="战略轰炸机">strategic bomber</span> capable of delivering nuclear weapons deep into adversary territory, reinforcing the United States’ <span class="vocab" data-cn="核威慑">nuclear deterrent</span>. Over time, its role expanded to conventional missions: precision strikes in Kosovo, Afghanistan, and Iraq demonstrated that a stealth platform could also support ground forces without exposing friendly troops to heavy air defenses. The bomber’s ability to carry up to 40,000 pounds of ordnance—including both nuclear and conventional payloads—combined with intercontinental range, gives it a unique flexibility unmatched by any other aircraft in the fleet.`,
    `However, the B‑2 program was not without controversy. Initial estimates projected a unit cost of $200 million, but the final price ballooned to over $2 billion per aircraft—a classic case of <span class="vocab" data-cn="成本超支">cost overrun</span>. Critics in Congress argued that such expense could be better allocated to emerging technologies like unmanned systems. Additionally, the bomber’s stealth capabilities sparked debates about arms control and strategic stability, with some nations claiming it lowered the threshold for nuclear use by making a first strike appear more survivable. These political frictions persisted throughout the aircraft’s service life, influencing procurement decisions and export restrictions.`,
    `Today, the B‑2 remains a symbol of engineering ambition and geopolitical tension. Its continued upgrades—such as improved avionics, newer weapons bays, and refined RAM coatings—extend its relevance well into the 21st century. While next‑generation concepts like the proposed B‑21 Raider aim to inherit and surpass the Spirit’s legacy, the lessons learned from the B‑2’s design, operational use, and public scrutiny continue to shape how militaries balance cutting‑edge capability with fiscal responsibility and strategic doctrine.`,
  ],
  vocabulary: [
    { word: 'stealth technology', cn: '隐身技术' },
    { word: 'radar cross-section (RCS)', cn: '雷达散射截面' },
    { word: 'composite material', cn: '复合材料' },
    { word: 'fly-by-wire', cn: '电传操纵系统' },
    { word: 'thrust vectoring', cn: '推力矢量控制' },
    { word: 'strategic bomber', cn: '战略轰炸机' },
    { word: 'nuclear deterrent', cn: '核威慑' },
    { word: 'cost overrun', cn: '成本超支' },
  ],
};

export default article;
