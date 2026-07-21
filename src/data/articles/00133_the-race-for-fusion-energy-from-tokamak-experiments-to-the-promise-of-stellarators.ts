import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Race for Fusion Energy: From Tokamak Experiments to the Promise of Stellarators》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00133 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00133',
  slug: 'the-race-for-fusion-energy-from-tokamak-experiments-to-the-promise-of-stellarators',
  title: 'The Race for Fusion Energy: From Tokamak Experiments to the Promise of Stellarators',
  subtitle: 'How competing magnetic‑confinement concepts shape the path to clean power.',
  summary: 'A narrative journey from early tokamak breakthroughs to modern stellarator milestones, highlighting scientific challenges and international collaboration.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `It was a quiet evening in late summer when I stepped into the cavernous hall of the Princeton Plasma Physics Lab. The air hummed with the low whine of cooling systems, and at the center of the room a massive doughnut‑shaped vessel glowed with a faint blue light. Inside that vessel, scientists were watching a thin ribbon of ionized gas—<span class="vocab" data-cn="等离子体">plasma</span>—being squeezed by an invisible force. The sight was both beautiful and unsettling: a glimpse of the same process that powers the Sun, now contained within human‑made walls.</`,
    `The story of magnetic confinement began in the 1950s with Soviet physicists <span class="vocab" data-cn="塔姆">Igor Tamm</span> and <span class="vocab" data-cn="萨哈罗夫">Andrei Sakharov</span>. They proposed a device they called a <span class="vocab" data-cn="托卡马克">tokamak</span>, a Russian acronym for “toroidal chamber with magnetic coils.” Their insight was simple yet profound: by winding powerful <span class="vocab" data-cn="磁场">magnetic fields</span> around a torus, one could keep the scorching plasma away from the vessel walls long enough for nuclear fusion to occur.</`,
    `Achieving effective <span class="vocab" data-cn="等离子体约束">plasma confinement</span> proved far more difficult than the theory suggested. The plasma must reach temperatures of over 100 million degrees Celsius, hotter than the core of the Sun, and remain stable for at least a few seconds. Researchers turned to a mixture of <span class="vocab" data-cn="氘-氚燃料">deuterium‑tritium fuel</span>, isotopes of hydrogen that fuse most readily under such conditions. Yet even with this optimal fuel, turbulence and instabilities threatened to tear the plasma apart, demanding ever more precise magnetic control.</`,
    `For decades, the tokamak dominated fusion research worldwide. The Joint European Torus (<span class="vocab" data-cn="联合欧洲托卡马克">JET</span>) in Culham set records for energy output, and its successor, <span class="vocab" data-cn="国际热核聚变实验堆">ITER</span>, now under construction in southern France, represents the most ambitious international collaboration in science. ITER aims to produce 500 MW of fusion power from 50 MW of input—a milestone known as “breakeven.” If successful, it will demonstrate that a large‑scale tokamak can generate net energy, paving the way for commercial reactors.</`,
    `Meanwhile, an alternative design quietly matured: the <span class="vocab" data-cn="星形器">stellarator</span>. First envisioned by American physicist Lyman Spitzer in 1951, the stellarator twists its magnetic coils into a complex three‑dimensional shape. Unlike the tokamak, which relies on an induced plasma current that can become unstable, the stellarator achieves steady‑state operation purely through external magnets. This elegance comes at a cost: designing and building the intricate coil geometry demands advanced engineering and precise manufacturing.</`,
    `The German <span class="vocab" data-cn="温德尔斯坦7-X">Wendelstein 7‑X</span> stellarator, inaugurated in 2015, has become the flagship proof‑of‑concept. Equipped with superconducting coils cooled to just a few kelvin, it sustained plasma for over 100 seconds—a record for any stellarator—while maintaining temperature and confinement comparable to smaller tokamaks. These results have revived optimism that stellarators could eventually complement or even surpass tokamaks in delivering continuous fusion power.</`,
    `Looking ahead, the race toward practical fusion is less a competition than a partnership. Both tokamak and stellarator programs face common hurdles: materials must survive intense <span class="vocab" data-cn="中子通量">neutron flux</span> that can embrittle steel; superconducting magnets require reliable cryogenic systems; and the overall cost of construction remains astronomical. Yet the convergence of advanced simulation, novel alloys, and global funding suggests a future where humanity finally harnesses the same energy source that lights the stars—clean, abundant, and virtually limitless.</`,
  ],
  vocabulary: [
    { word: 'plasma', cn: '等离子体' },
    { word: 'tokamak', cn: '托卡马克' },
    { word: 'magnetic field', cn: '磁场' },
    { word: 'plasma confinement', cn: '等离子体约束' },
    { word: 'deuterium‑tritium fuel', cn: '氘-氚燃料' },
    { word: 'ITER', cn: '国际热核聚变实验堆' },
    { word: 'stellarator', cn: '星形器' },
    { word: 'Wendelstein 7‑X', cn: '温德尔斯坦7-X' },
    { word: 'neutron flux', cn: '中子通量' },
  ],
};

export default article;
