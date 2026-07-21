import type { Article } from '../../types/index.ts';

// 文件意图：维护《Brinicles: The Frozen Waterfalls Growing Beneath Sea Ice》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00399 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00399',
  slug: 'brinicles-the-frozen-waterfalls-growing-beneath-sea-ice',
  title: 'Brinicles: The Frozen Waterfalls Growing Beneath Sea Ice',
  subtitle: 'How salty, super‑cooled water sculpts icy pillars under the polar ocean.',
  summary: 'Explore the hidden physics and ecology of brinicles, the eerie “ice stalactites” that form beneath sea ice.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Imagine drifting beneath a thick sheet of <span class="vocab" data-cn="海冰">sea ice</span> in the polar ocean, where sunlight barely penetrates and the water is eerily still. Suddenly, a ghostly column of clear ice descends from above, resembling an underwater waterfall frozen in mid‑air. This phenomenon, known as a <span class="vocab" data-cn="冰柱">brinicle</span>, was first described by early Antarctic explorers who called it “the finger of death” because of its lethal effect on tiny marine life that wanders too close.`,
    `The story begins with the formation of sea ice itself. When seawater freezes, pure water crystals form a lattice while most of the dissolved salts are expelled in a process called <span class="vocab" data-cn="盐分排斥">brine rejection</span>. The rejected brine becomes extremely cold and highly concentrated, creating pockets of <span class="vocab" data-cn="过冷的">supercooled</span> liquid trapped within the ice. These brine channels act as reservoirs of dense, salty water that are poised to escape into the ocean below.`,
    `As soon as a weak spot opens in the ice—often due to cracking or melting—the supercooled brine drains downward under gravity. Because it is colder and saltier than the surrounding seawater, it sinks rapidly, establishing a plume of <span class="vocab" data-cn="密度驱动对流">density‑driven convection</span>. The plume extracts heat from the ambient water, causing the surrounding seawater to freeze instantly around the descending stream. Over time, this frozen sheath thickens into a tubular ice shaft that can grow several meters long, the classic shape of a brinicle.`,
    `The physics of a brinicle is a delicate balance between heat transfer and crystal growth. The outer surface of the tube consists of a <span class="vocab" data-cn="晶体结构">crystal lattice</span> of hexagonal ice that conducts heat away from the interior, while the inner core remains filled with cold brine. As long as the temperature gradient is maintained—typically a few degrees Celsius between the plume and the surrounding water—the tube continues to extend downward. If the plume encounters warmer water or loses its supercooling, growth halts and the brinicle may melt from the inside out.`,
    `Ecologically, brinicles are both killers and creators. The icy sheath acts as a barrier that can trap and freeze small organisms such as copepods, amphipods, and larval fish, leading to localized “death zones.” Yet the same structure also provides a niche for extremophilic microbes that thrive on the high‑salinity environment inside the tube. These microorganisms form biofilms along the inner walls, turning the brinicle into a hidden micro‑ecosystem that persists until the ice melts.`,
    `Scientific interest in brinicles surged after the 1970s when researchers equipped submersibles with cameras to film them in situ beneath Antarctic and Arctic sea ice. Pioneering studies by oceanographers such as Peter Martin and colleagues documented the conditions required for their formation, measured temperature profiles, and modeled the fluid dynamics of the descending plume. Laboratory experiments using cold‑room tanks have since reproduced brinicles on a small scale, allowing scientists to test hypotheses about heat exchange, salinity thresholds, and the role of turbulence.`,
    `In a warming world, the future of brinicles is tied to the health of the polar cryosphere. As global temperatures rise, sea ice extent and thickness are projected to decline, potentially reducing the frequency of brine‑rejection events that give birth to these icy waterfalls. Conversely, thinner ice may lead to more frequent cracking, creating new pathways for brine escape. Understanding how brinicles respond to changing ice conditions helps researchers gauge broader impacts on oceanic salinity patterns and the delicate balance of polar marine ecosystems.`,
  ],
  vocabulary: [
    { word: 'brinicle', cn: '冰柱' },
    { word: 'sea ice', cn: '海冰' },
    { word: 'brine rejection', cn: '盐分排斥' },
    { word: 'supercooled', cn: '过冷的' },
    { word: 'density-driven convection', cn: '密度驱动对流' },
    { word: 'crystal lattice', cn: '晶体结构' },
  ],
};

export default article;
