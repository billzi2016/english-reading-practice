import type { Article } from '../../types/index.ts';

// 文件意图：维护《Buran: The Soviet Spaceplane That Challenged NASA’s Shuttle Dream》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00061 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00061',
  slug: 'buran-the-soviet-spaceplane-that-challenged-nasa-s-shuttle-dream',
  title: 'Buran: The Soviet Spaceplane That Challenged NASA’s Shuttle Dream',
  subtitle: 'A Cold‑War Tale of Engineering Ambition and Unfinished Flight',
  summary: 'Explore how the USSR built Buran, a reusable spaceplane that flew once unmanned before the program was cancelled.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the late 1970s, as NASA’s Space Shuttle began its first orbital missions, Soviet engineers were already sketching a rival on the drawing boards of the Central Research Institute for Machine Building. The project, codenamed “Buran” (meaning “snowstorm”), was meant to demonstrate that the USSR could produce a <span class="vocab" data-cn="可重复使用的航天飞机">Reusable Spaceplane</span> capable of both atmospheric re‑entry and orbital operations—a bold statement in the technology race that defined the Cold War.`,
    `Buran’s design borrowed heavily from earlier Soviet concepts such as the 1960s “LKS” and “Spiral” projects, but it also introduced several innovations. The most striking visual feature was its sleek, delta‑shaped wing, covered with thousands of <span class="vocab" data-cn="热防护瓦片">thermal protection tiles</span> similar to those on the American shuttle, yet arranged in a pattern that reduced weight while preserving heat resistance during re‑entry at speeds exceeding 7.8 km/s.`,
    `Powering Buran required the massive <span class="vocab" data-cn="液氧/液氢发动机">liquid oxygen/liquid hydrogen engine</span> cluster of the Energia launch vehicle, a super‑heavy rocket capable of lifting over 100 metric tons to low Earth orbit. Unlike the Shuttle’s single main engine fed by external tanks, Buran relied on Energia’s four strap‑on boosters and a core stage that detached after burnout, leaving the spaceplane to glide back to Earth under its own control.`,
    `One of Buran’s most impressive technical achievements was its fully autonomous flight system. While NASA’s early shuttles required extensive crew input for launch, orbit insertion, and landing, Buran’s <span class="vocab" data-cn="自动驾驶控制系统">autonomous flight control system</span> could execute a complete mission without human intervention. On 15 May 1988, the unmanned vehicle lifted off from the Baikonur <span class="vocab" data-cn="航天飞机发射台">launch pad</span>, completed two orbits, and performed a flawless automated landing at the same site—a feat that still astonishes aerospace historians today.`,
    `Inside the hull, Buran housed an <span class="vocab" data-cn="轨道舱">orbital module</span> equipped with life‑support racks, scientific payload bays, and a docking mechanism compatible with Soviet space stations such as Mir. Although the flight was unmanned, the interior layout mirrored that of a crewed vehicle, reflecting the USSR’s intention to eventually send cosmonauts aboard for long‑duration missions and even potential military applications.`,
    `Despite its technical successes, Buran fell victim to the shifting political and economic landscape of the early 1990s. The dissolution of the Soviet Union strained defense budgets, and the costly Energia rocket program was deemed unsustainable without a clear strategic purpose. By 1993, the entire Buran‑Energia complex was officially cancelled, leaving only one flight‑worthy prototype—serial number 1—in storage, later displayed in museums as a reminder of what might have been.`,
    `The legacy of Buran endures in subtle ways. Its autonomous guidance algorithms informed later Russian spacecraft such as the Progress resupply vehicle and even contributed to modern commercial launch systems that emphasize automated safety checks. Moreover, engineers who worked on Buran carried their expertise into private aerospace ventures, helping Russia maintain a foothold in reusable launch technology well into the 21st century.`,
    `For students of aerospace history, Buran offers a compelling case study: a marvel of engineering that achieved a flawless unmanned flight yet never reached operational status. It reminds us that technological triumphs are often inseparable from the political and economic currents that surround them, and that the dream of a reusable spaceplane continues to inspire new generations across the globe.`,
  ],
  vocabulary: [
    { word: 'Reusable Spaceplane', cn: '可重复使用的航天飞机' },
    { word: 'thermal protection tiles', cn: '热防护瓦片' },
    { word: 'autonomous flight control system', cn: '自动驾驶控制系统' },
    { word: 'liquid oxygen/liquid hydrogen engine', cn: '液氧/液氢发动机' },
    { word: 'orbital module', cn: '轨道舱' },
    { word: 'launch pad', cn: '航天飞机发射台' },
  ],
};

export default article;
