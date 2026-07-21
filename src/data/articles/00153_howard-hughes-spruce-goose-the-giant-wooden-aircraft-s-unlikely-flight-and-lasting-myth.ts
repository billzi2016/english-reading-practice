import type { Article } from '../../types/index.ts';

// 文件意图：维护《Howard Hughes’ Spruce Goose: The Giant Wooden Aircraft’s Unlikely Flight and Lasting Myth》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00153 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00153',
  slug: 'howard-hughes-spruce-goose-the-giant-wooden-aircraft-s-unlikely-flight-and-lasting-myth',
  title: 'Howard Hughes’ Spruce Goose: The Giant Wooden Aircraft’s Unlikely Flight and Lasting Myth',
  subtitle: 'How a wartime “wooden” behemoth took to the sky once, then became an American legend.',
  summary: 'The story of the H‑4 Hercules reveals engineering daring, political pressure, and how myth can outlive reality.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1940s, as World War II strained every strategic material, the United States imposed strict limits on aluminum. Howard Hughes, already famous for his aviation ventures, saw an opportunity and proposed a massive transport plane built primarily from wood. The result was the <span class="vocab" data-cn="胡佛 H‑4 大力神">Hughes H‑4 Hercules</span>, a six‑engine behemoth whose wingspan measured 320 feet—longer than any aircraft before it. Though popularly called the “Spruce Goose,” the airframe actually used <span class="vocab" data-cn="桦木薄层贴面">birch veneer</span> laminated with resin, a choice dictated by wartime metal shortages and Hughes’s belief in “composite construction.”`,
    `Designing an aircraft of this size from wood presented unprecedented challenges. The engineers employed a technique called <span class="vocab" data-cn="胶合层压木材">laminated wood</span>, bonding thin sheets together under heat and pressure to create panels both light and strong. This method, similar to modern plywood but on an industrial scale, allowed the Hercules to achieve a structural weight comparable to a metal airframe of similar dimensions. However, the massive wings also introduced high <span class="vocab" data-cn="翼载荷">wing loading</span>, meaning the aircraft needed powerful engines and careful aerodynamic balancing to become airborne.`,
    `Fourteen Wright R-3350 Duplex‑Cyclone radial engines—each capable of producing 3,000 hp—were installed in four pods on each wing. These were not the most efficient powerplants for a wooden plane, but they provided the thrust needed to overcome the aircraft’s weight and drag. The propulsion system was entirely <span class="vocab" data-cn="螺旋桨驱动">propeller‑driven</span>, with massive four‑blade propellers that spun at relatively low RPMs to avoid excessive vibration in the wooden structure. Hughes hoped the Hercules could ferry troops and equipment across the Atlantic without risking valuable metal ships, a vision that never materialized due to the war’s end.`,
    `After years of construction delays, political scrutiny, and public skepticism, the H‑4 finally made its maiden flight on November 2 1947 at the Hughes Airport in Culver City, California. The aircraft taxied down a concrete runway, lifted gently, and stayed aloft for just 1 minute and 17 seconds, covering roughly one mile before touching down again. This brief sortie proved that the wooden construction could indeed support flight, but it also highlighted the plane’s limitations: the massive weight, high fuel consumption, and cumbersome handling made regular operation impractical. Nonetheless, the event captured the imagination of a nation still fascinated by “bigger is better.”`,
    `Following its historic flight, Hughes retired the Hercules to his personal collection, where it remained largely untouched for decades. In 1978, after Hughes’s death, the aircraft was donated to the Smithsonian Institution’s National Air and Space Museum in Washington, D.C., where it has been displayed behind a protective glass wall ever since. Visitors are drawn not only by its sheer size but also by the aura of myth that surrounds it. Over time, the nickname “Spruce Goose” persisted despite the technical inaccuracy, reinforcing the notion that the plane was an eccentric curiosity rather than a serious engineering achievement.`,
    `The legacy of the Spruce Goose endures as a cautionary tale about ambition meeting reality. It illustrates how wartime exigencies can spur innovative material use—precursors to today’s carbon‑fiber composites—while also reminding us that sheer scale does not guarantee practicality. Moreover, the aircraft’s singular flight has become part of American cultural mythology, inspiring movies, books, and even a popular phrase: “to build a Spruce Goose” meaning an extravagant project with little chance of success. In this way, Hughes’s wooden giant continues to soar in collective memory long after its engines fell silent.`,
  ],
  vocabulary: [
    { word: 'Hughes H‑4 Hercules', cn: '胡佛 H‑4 大力神' },
    { word: 'birch veneer', cn: '桦木薄层贴面' },
    { word: 'laminated wood', cn: '胶合层压木材' },
    { word: 'wing loading', cn: '翼载荷' },
    { word: 'propeller‑driven', cn: '螺旋桨驱动' },
    { word: 'composite construction', cn: '复合结构' },
  ],
};

export default article;
