import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Laying of the First Permanent Atlantic Telegraph Cable (1866)》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00190 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00190',
  slug: 'the-laying-of-the-first-permanent-atlantic-telegraph-cable-1866-engineering-triumphs-and-human-cost',
  title: 'The Laying of the First Permanent Atlantic Telegraph Cable (1866)',
  subtitle: 'Engineering Triumphs and Human Cost',
  summary: 'A narrative of how engineers finally succeeded in spanning the Atlantic with a telegraph line, and the sacrifices that made it possible.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the spring of 1866, the great steamship <span class="vocab" data-cn="阿伽门农号">HMS Agamemnon</span> slipped from the harbor at Halifax, her decks crowded with rope‑handed sailors and a handful of engineers clutching blueprints. Their mission was audacious: to lay the first permanent <span classclass="vocab" data-cn="跨大西洋电报线">Atlantic Telegraph Cable</span> across 2,300 kilometers of unforgiving ocean. The air smelled of coal smoke and salt, while the crew sang shanties that masked a nervous anticipation—every knot tied could be the difference between triumph and disaster.`,
    `The heart of the project was the <span class="vocab" data-cn="海底电缆">submarine cable</span> itself, a massive strand of copper conductor wrapped in layers of gutta‑percha, a natural latex that provided waterproof insulation. Gutta‑percha (<span class="vocab" data-cn="古塔胶">gutta‑percha</span>) had been discovered earlier in the century and proved surprisingly resilient under high pressure, but it was not immune to the crushing forces at depths exceeding 2,000 meters. Engineers like William Thomson—later Lord Kelvin—had spent months calculating how much tension the cable could endure before snapping, a balance of physics and daring.`,
    `Signal quality posed another formidable obstacle. Over such a distance, <span class="vocab" data-cn="信号衰减">signal attenuation</span> threatened to render messages indecipherable. Without modern repeaters, the only solution was to boost the voltage at each end using massive <span class="vocab" data-cn="电压调节器">voltage regulators</span>. Thomson’s invention of a sensitive mirror galvanometer allowed operators in Newfoundland and Ireland to detect faint pulses, but even his device could not fully compensate for the loss. The engineers accepted that the line would be slow—each word taking minutes to travel—but they believed reliability outweighed speed.`,
    `The laying process itself was a ballet of precision. As the Agamemnon steamed eastward, a smaller vessel, the USS Niagara, followed closely, paying out the cable from massive drums. Every few miles, crew members on deck would manually guide the cable into the sea, ensuring it lay flat and did not tangle. When storms rolled in, the ships had to slow dramatically; any sudden jerk could snap the delicate gutta‑percha sheath. On one occasion, a rogue wave lifted the Agamemnon’s bow, causing a sudden surge of tension that snapped a 30‑meter section—a loss that cost both time and money.`,
    `Behind the engineering marvel lay a grim human toll. The crew endured months at sea in cramped quarters, where scurvy and dysentery ran rampant. Historical records note that over twenty sailors fell ill during the expedition, and several succumbed to fever before the cable reached Irish shores. Moreover, the financial backers—most notably Cyrus West Field—had poured fortunes into the venture; when early attempts failed in 1858, many investors faced ruin. The 1866 success was therefore a bittersweet relief, celebrated with champagne but shadowed by the memory of those who never saw the line’s first message.`,
    `When the final connection was made on July 13, 1866, a simple “A” was transmitted from Heart’s Content, Newfoundland to Valentia Island, Ireland. The world held its breath as the faint click traveled across the ocean floor, confirming that the <span class="vocab" data-cn="跨大西洋电报线">Atlantic Telegraph Cable</span> was alive. Newsrooms in London and New York erupted with headlines proclaiming a new era of instant communication. Yet even as telegrams began to crisscross the Atlantic, engineers continued to monitor the cable for leaks, corrosion, and unexpected breaks—issues that would persist for decades until more durable materials emerged.`,
    `The legacy of the 1866 cable is twofold: it demonstrated that humanity could overcome natural barriers through ingenuity, and it reminded us that progress often demands sacrifice. The triumph inspired subsequent generations to improve insulation techniques, develop repeaters, and eventually lay multiple redundant lines that form today’s global network. Meanwhile, memorials in Halifax and Valentia honor the men who braved disease, storms, and death to make a single thread of copper connect continents—a reminder that every technological leap rests on human perseverance.`,
  ],
  vocabulary: [
    { word: 'Atlantic Telegraph Cable', cn: '跨大西洋电报线' },
    { word: 'submarine cable', cn: '海底电缆' },
    { word: 'gutta‑percha', cn: '古塔胶' },
    { word: 'signal attenuation', cn: '信号衰减' },
    { word: 'voltage regulator', cn: '电压调节器' },
    { word: 'HMS Agamemnon', cn: '阿伽门农号' },
  ],
};

export default article;
