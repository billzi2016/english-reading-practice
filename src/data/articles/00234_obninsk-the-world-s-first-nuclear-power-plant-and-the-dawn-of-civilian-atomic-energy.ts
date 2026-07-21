import type { Article } from '../../types/index.ts';

// 文件意图：维护《Obninsk: The World’s First Nuclear Power Plant and the Dawn of Civilian Atomic Energy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00234 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00234',
  slug: 'obninsk-the-world-s-first-nuclear-power-plant-and-the-dawn-of-civilian-atomic-energy',
  title: 'Obninsk: The World’s First Nuclear Power Plant and the Dawn of Civilian Atomic Energy',
  subtitle: 'How a Soviet research reactor sparked the global civilian nuclear age',
  summary: 'The story of Obninsk, the first plant to feed electricity into a public grid, and its lasting impact on peaceful atomic energy.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early summer of 1954, a modest concrete building rose near the town of Obninsk, about 120 km southwest of Moscow. Inside, engineers ignited the world’s first <span class="vocab" data-cn="核裂变">nuclear fission</span> chain reaction not for weapons, but to generate electricity for ordinary citizens. The plant, officially called the “Obninsk Nuclear Power Plant,” produced a steady 5 MW of electric power and fed it directly into the local grid, marking the first time a civilian nuclear facility supplied commercial electricity.`,
    `The reactor at Obninsk was a <span class="vocab" data-cn="加压水堆">pressurized water reactor</span> (PWR), a design that would later dominate both military submarines and civilian power stations worldwide. Water circulated under high pressure through the core, removing heat without boiling. This hot water then transferred its energy to a secondary loop where steam drove a turbine. The choice of PWR reflected Soviet scientists’ desire for a compact, controllable system that could be scaled up in future plants.`,
    `Unlike earlier experimental reactors whose output was measured only in kilowatts, Obninsk’s designers aimed for a plant that could demonstrate “grid‑connected” operation—delivering electricity reliably to homes and factories. To achieve this, they built a small but robust transmission line linking the plant to the regional power network. The successful integration proved that nuclear energy could complement traditional coal and hydro sources, easing concerns about stability and load balancing.`,
    `One of the most striking achievements of Obninsk was its relatively high <span class="vocab" data-cn="热效率">thermal efficiency</span> for the era, reaching around 30 %. While modern reactors can exceed 40 %, this figure was impressive given the primitive instrumentation and limited computational tools available in the 1950s. Engineers relied on hand‑drawn schematics and analog meters to monitor temperature, pressure, and neutron flux, making every successful run a testament to meticulous craftsmanship.`,
    `Safety was a paramount concern from day one. The plant incorporated extensive <span class="vocab" data-cn="辐射防护">radiation shielding</span> using thick concrete walls and lead‑lined control rooms. Operators wore dosimeters to track exposure, and an early version of the “scram” system—an emergency shutdown mechanism—could instantly insert control rods to halt the chain reaction. These precautions set standards that later civilian reactors would adopt worldwide.`,
    `Obninsk operated for just over a decade before being decommissioned in 2002, but its legacy endures. The plant served as a living laboratory where Soviet scientists refined fuel fabrication, waste handling, and <span class="vocab" data-cn="退役">decommissioning</span> procedures that are still referenced today. Moreover, the success of Obninsk inspired the construction of larger plants such as the 440 MW Leningrad Nuclear Power Station, accelerating the spread of civilian nuclear power across Europe and Asia.`,
    `Today, the former reactor hall stands as a museum, reminding visitors that the peaceful promise of atomic energy began not with massive megawatt towers, but with a humble 5‑megawatt experiment in a small Russian town. The story of Obninsk illustrates how scientific ambition, careful engineering, and societal trust can converge to turn a once‑dangerous force into a cornerstone of modern energy infrastructure.`,
  ],
  vocabulary: [
    { word: 'nuclear fission', cn: '核裂变' },
    { word: 'pressurized water reactor', cn: '加压水堆' },
    { word: 'grid-connected', cn: '并网' },
    { word: 'thermal efficiency', cn: '热效率' },
    { word: 'radiation shielding', cn: '辐射防护' },
    { word: 'decommissioning', cn: '退役' },
  ],
};

export default article;
