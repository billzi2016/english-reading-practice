import type { Article } from '../../types/index.ts';

// 文件意图：维护《Fridtjof Nansen’s Fram Expedition: Pioneering Arctic Exploration and the Birth of Modern Polar Science》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00481 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00481',
  slug: 'fridtjof-nansen-s-fram-expedition-pioneering-arctic-exploration-and-the-birth-of-modern-polar-science',
  title: 'Fridtjof Nansen’s Fram Expedition: Pioneering Arctic Exploration and the Birth of Modern Polar Science',
  subtitle: 'How a daring Norwegian voyage reshaped our understanding of the high north.',
  summary: 'An engaging narrative about Nansen’s 1893‑1896 Fram expedition, its scientific breakthroughs, and lasting influence on polar research.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When Norway’s young explorer <span class="vocab" data-cn="极地探险船">Fram</span> slipped into the icy waters of the Barents Sea in August 1893, few could have imagined that its mission would rewrite the rules of Arctic travel. Fridtjof Nansen, a seasoned sailor and budding scientist, rejected the prevailing “sledge‑to‑the‑pole” strategy. Instead he proposed to let nature do the heavy lifting: by embedding his ship in <span class="vocab" data-cn="漂流冰">drift ice</span> and allowing it to glide with the natural currents toward the North Pole.`,
    `The genius of the plan lay in the ship’s design. Built of thick oak and reinforced with iron ribs, Fram featured a rounded hull that forced the surrounding ice upward rather than crushing the vessel—a concept later called “ice‑fighting architecture.” This shape, combined with a shallow draft, meant the ship could ride atop thick floes for months without damage. Nansen’s confidence in engineering was matched by his meticulous preparation of scientific equipment, anticipating that every day trapped in ice would be an opportunity for discovery.`,
    `The expedition set sail from Christiania (now Oslo) with a crew of fifteen men, each selected not only for seamanship but also for their ability to conduct rigorous measurements. Early on, the team recorded sea‑temperature profiles and salinity gradients, establishing baseline data for what would become modern <span class="vocab" data-cn="水文测量学">hydrography</span>. As they pushed farther north, the ship entered a dense field of multi‑year ice, where visibility was limited to the occasional crack in the white expanse. The crew’s morale hinged on routine: daily watches, shared meals, and disciplined scientific work kept the isolation at bay.`,
    `Winter arrived early that year, plunging Fram into an endless night known as the <span class="vocab" data-cn="极夜">polar night</span>. With sunlight absent for months, Nansen turned to detailed <span class="vocab" data-cn="科学观测">scientific observation</span> of magnetic phenomena. He measured the local <span class="vocab" data-cn="磁偏角">magnetic declination</span>, noting subtle shifts that would later help refine global navigation charts. Simultaneously, he logged atmospheric pressure and temperature fluctuations, providing some of the first systematic climatological records from such high latitudes.`,
    `To supplement ship‑board data, Nansen organized short excursions on a sturdy <span class="vocab" data-cn="雪橇">sledge</span> pulled by huskies. These forays allowed the team to sample snow layers, collect ice cores, and map the surrounding floe patterns. Each sledge run was a logistical challenge: creaking sled runners, biting winds, and the ever‑present danger of hidden pressure ridges that could crush a traveler beneath tons of ice. Yet these daring trips yielded priceless insights into the structure and movement of Arctic sea ice.`,
    `As spring thaw approached in 1895, Fram began its slow but inexorable drift toward the pole region, carried by the Transpolar Drift Stream. The ship’s instruments recorded a continuous record of oceanic currents, temperature gradients, and even the first acoustic measurements of underwater sounds—precursors to modern sonar studies. By the time Nansen finally decided to abandon the ship in March 1896, he had amassed a trove of data that proved the feasibility of long‑term ice‑bound research platforms, influencing later expeditions such as those led by Roald Amundsen and Ernest Shackleton.`,
    `The return journey was no less dramatic. After a perilous trek across the ice to reach safety on Franz Josef Land, Nansen and his companion Hjalmar Johansen trekked over 400 kilometers to the Norwegian settlement of Vardø, surviving on limited rations and sheer determination. Their successful rescue sparked worldwide admiration and cemented Fram’s reputation as a prototype for future polar vessels. More importantly, the expedition demonstrated that systematic scientific inquiry could thrive even in Earth’s most hostile environments.`,
    `Today, modern polar science—ranging from satellite‑based sea‑ice monitoring to climate‑model validation—traces its methodological roots back to Nansen’s bold experiment. The principles of embedding research platforms within natural systems, collecting continuous <span class="vocab" data-cn="科学观测">scientific observation</span>, and integrating multidisciplinary data streams remain central to Arctic studies. In this way, the Fram expedition not only chased a geographic goal but also birthed a new paradigm for exploring—and understanding—the planet’s frozen frontiers.`,
  ],
  vocabulary: [
    { word: 'Fram', cn: '极地探险船' },
    { word: 'drift ice', cn: '漂流冰' },
    { word: 'sledge', cn: '雪橇' },
    { word: 'scientific observation', cn: '科学观测' },
    { word: 'magnetic declination', cn: '磁偏角' },
    { word: 'hydrography', cn: '水文测量学' },
  ],
};

export default article;
