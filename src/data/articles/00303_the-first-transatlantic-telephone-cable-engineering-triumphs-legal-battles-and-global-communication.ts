import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Transatlantic Telephone Cable: Engineering Triumphs, Legal Battles, and Global Communication》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00303 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00303',
  slug: 'the-first-transatlantic-telephone-cable-engineering-triumphs-legal-battles-and-global-communication',
  title: 'The First Transatlantic Telephone Cable: Engineering Triumphs, Legal Battles, and Global Communication',
  subtitle: 'How a daring oceanic project reshaped worldwide voice traffic',
  summary: 'An engaging look at the technical feats, legal wranglings, and lasting impact of the first telephone cable that crossed the Atlantic.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1950s, a handful of engineers dreamed of turning the Atlantic Ocean from a barrier into a conduit for real‑time conversation. Their ambition materialised as <span class="vocab" data-cn="跨大西洋的">the first transatlantic telephone cable</span>, later known as TAT‑1. Unlike its telegraph predecessor, which merely sent Morse code pulses, this new system promised full‑duplex voice and teletype traffic between New York and London, shrinking the world in a way that radio could not match.`,
    `The engineering challenge was staggering. The cable stretched roughly 3,400 nautical miles across depths exceeding 8,000 metres, demanding a design that could survive crushing pressure, corrosive salt water, and the occasional undersea earthquake. To meet these demands, designers turned to <span class="vocab" data-cn="同轴电缆">coaxial</span> construction: an inner conductor surrounded by insulating layers and a metallic shield. This architecture preserved signal integrity over long distances while allowing the cable to be flexible enough for winding onto massive spools aboard the laying ships.`,
    `Signal loss, however, remained inevitable. Every 40 miles or so, engineers installed a <span class="vocab" data-cn="中继器">repeater</span>—a self‑contained amplifier that boosted the weakening analog waveform. The repeaters were marvels of their time, built around ruggedised <span class="vocab" data-cn="真空管">vacuum tube</span> amplifiers capable of operating continuously for years without maintenance. Each unit also housed a tiny power supply and temperature‑control system to keep the delicate electronics within safe limits despite the frigid ocean floor.`,
    `Laying the cable required an international fleet of specialised vessels, most famously the British ship HMTS Monarch. Starting in July 1955, the ships followed a carefully plotted route that avoided known undersea hazards and respected the territorial waters of multiple nations. The operation was not merely technical; it also involved intricate diplomatic negotiations to secure rights‑of‑way across exclusive economic zones, a process that took months of back‑and‑forth between the United States, the United Kingdom, and several smaller coastal states.`,

    `While engineers wrestled with physics, lawyers were busy untangling corporate interests. AT&T, which owned most of the U.S. telephone infrastructure, faced <span class="vocab" data-cn="反垄断">antitrust</span> scrutiny from the Federal Communications Commission (FCC). Critics argued that a monopoly over an international cable could give AT&T undue leverage over global communications. After protracted hearings, a joint venture agreement was reached in which AT&T shared ownership with the British Post Office and agreed to provide open access to other carriers under regulated rates.`,

    `The legal landscape extended beyond antitrust concerns. Patent disputes erupted over the very design of the vacuum‑tube repeater, a technology pioneered by Bell Labs but also claimed by several European firms. Courts in both New York and London examined detailed schematics, ultimately granting cross‑licensing rights that allowed the cable to become operational without further delay. These settlements set precedents for future submarine projects, establishing a framework for international intellectual‑property cooperation.`,

    `When TAT‑1 was inaugurated on 25 September 1956, its impact rippled through commerce, diplomacy, and culture. The line initially carried 36 voice channels and several teletype circuits, but within a few years it also transmitted the first live television feed across the ocean, heralding an era of global broadcasting. Business executives could negotiate deals in real time, journalists reported events as they unfolded on both sides of the Atlantic, and families enjoyed clearer conversations than ever before. The success of TAT‑1 proved that technical ingenuity, when paired with careful legal navigation, could truly shrink the planet.`,

    `Today, modern fibre‑optic cables carry terabits per second, yet they owe their lineage to the bold experiment of the 1950s. The lessons learned—about material durability, repeater reliability, and multinational regulation—continue to guide engineers as they lay new pathways beneath the seas. In that sense, the first transatlantic telephone cable remains not just a historical footnote but a living blueprint for every submarine link that powers our interconnected world.`,
  ],
  vocabulary: [
    { word: 'transatlantic', cn: '跨大西洋的' },
    { word: 'coaxial', cn: '同轴电缆' },
    { word: 'repeater', cn: '中继器' },
    { word: 'vacuum tube', cn: '真空管' },
    { word: 'antitrust', cn: '反垄断' },
    { word: 'teletype', cn: '电传打字机' },
  ],
};

export default article;
