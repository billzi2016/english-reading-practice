import type { Article } from '../../types/index.ts';

// 文件意图：维护《Unveiling the Nautilus: Robert Fulton’s Forgotten Quest to Build the World’s First Practical Submarine》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00241 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00241',
  slug: 'unveiling-the-nautilus-robert-fulton-s-forgotten-quest-to-build-the-world-s-first-practical-submarine',
  title: 'Unveiling the Nautilus: Robert Fulton’s Forgotten Quest to Build the World’s First Practical Submarine',
  subtitle: 'How a steamboat pioneer tried to turn the ocean into a hidden highway.',
  summary: 'Robert Fulton, famed for his steamship, also built the Nautilus – an early attempt at a practical submarine that foreshadowed modern underwater warfare.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When most people think of Robert Fulton they picture the sleek <span class="vocab" data-cn="汽船">steamboat</span> that conquered the Hudson River in 1807. Yet a decade earlier, long before submarines became symbols of naval power, Fulton was already sketching plans for an underwater vessel that could glide beneath enemy hulls unnoticed. His secret obsession began during a visit to Paris in 1799, where he met French engineers eager to explore new forms of <span class="vocab" data-cn="海军工程">naval engineering</span>.`,
    `Fulton’s curiosity was not born in a vacuum. The American Revolutionary War had produced the Turtle, David Bushnell’s crude wooden craft that once attempted to attach explosives to British ships. Though the Turtle failed, it proved that a human could survive beneath the waves. Inspired by this precedent, Fulton set out to create something far more reliable – a true <span class="vocab" data-cn="潜水艇">submersible</span> capable of sustained operation and controlled navigation.`,

    `The result was the Nautilus, a cigar‑shaped hull about 15 feet long, built from reinforced oak planked over iron ribs. Its most innovative feature was a pair of <span class="vocab" data-cn="压载舱">ballast tanks</span> that could be flooded to dive and pumped out with hand‑operated pumps to surface. Inside, a crew of two turned a crank connected to a brass <span class="vocab" data-cn="螺旋桨">propeller</span>, giving the vessel forward thrust without relying on external sails or oars. Fulton claimed the Nautilus could stay submerged for up to six hours, resisting the crushing <span class="vocab" data-cn="静水压力">hydrostatic pressure</span> at depths of 30 feet.`,

    `In early 1800 the French Navy allowed Fulton to test his creation on the Seine. The Nautilus slipped beneath the river’s surface, silently approaching a stationary barge while its crew observed the hull through small portholes. Encouraged by these trials, Fulton shipped the vessel to New York in 1801, hoping to sell it to the young United States Navy. On a foggy morning in the harbor he demonstrated how the Nautilus could glide beneath a frigate, attach a timed charge, and retreat without detection – a scene that sounded like science fiction but was witnessed by several naval officers.`,

    `The reaction, however, was mixed. While some admirals praised Fulton’s ingenuity, others dismissed the craft as “dangerous folly.” The hand‑cranked propulsion required constant physical effort, limiting speed to barely two knots, and the wooden hull showed signs of leakage after repeated dives. Moreover, the Navy lacked a clear tactical doctrine for employing such a vessel in combat. By late 1802 the project was shelved, and Fulton returned his focus to steam propulsion, leaving the Nautilus to rust in a Brooklyn dockyard.`,

    `Although the Nautilus never saw battle, its legacy endured. The concepts of ballast control, internal propulsion, and submerged endurance resurfaced in later designs by inventors such as John Philip Holland and Simon Lake. Modern submarines still rely on refined versions of Fulton’s original ideas, proving that his “forgotten quest” was a crucial stepping stone toward the sophisticated underwater fleets of today.`,

    `Today historians revisit Fulton’s submarine not merely as an eccentric footnote but as a testament to early 19th‑century imagination. The Nautilus reminds us that breakthroughs often arise from daring experiments that challenge prevailing expectations – and that even the most celebrated innovators may have hidden chapters waiting to be uncovered.`,
  ],
  vocabulary: [
    { word: 'steamboat', cn: '汽船' },
    { word: 'naval engineering', cn: '海军工程' },
    { word: 'submersible', cn: '潜水艇' },
    { word: 'ballast tank', cn: '压载舱' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'hydrostatic pressure', cn: '静水压力' },
  ],
};

export default article;
