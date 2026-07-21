import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1913 Great Dayton Flood and the Birth of Modern Flood Control》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00250 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00250',
  slug: 'the-1913-great-dayton-flood-and-the-birth-of-modern-flood-control',
  title: 'The 1913 Great Dayton Flood and the Birth of Modern Flood Control',
  subtitle: 'How a devastating river surge reshaped engineering practice in America',
  summary: 'A vivid account of the 1913 flood that forced Ohio to pioneer systematic flood control measures.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On March 25, 1913, a sudden thaw combined with heavy rain turned the Miami River into a raging torrent. The water surged through Dayton, Ohio, breaching homes and factories in minutes. Residents recalled hearing the roar of the river as it tore down bridges, while the city’s modest <span class="vocab" data-cn="堤坝">levee</span>—originally built for navigation—collapsed under the pressure. By nightfall, more than 500 people had perished and thousands were left homeless, making this disaster one of the deadliest floods in U.S. history.`,
    `The catastrophe exposed a glaring weakness: there was no coordinated plan to manage the river’s <span class="vocab" data-cn="洪泛平原">floodplain</span>. Upstream towns had built their own small dams, but these structures were isolated and could not handle the volume of water that the Miami River carried after the storm. Engineers quickly realized that without a regional approach, any future flood would repeat the same tragedy.`,
    `In response, the city commissioned a team led by civil engineer <span class="vocab" data-cn="约翰·斯蒂文森">John S. Stevenson</span>. His report recommended constructing a series of concrete channels, spillways, and retention basins that could divert excess flow away from downtown. The plan also called for strengthening existing embankments with modern materials—a radical shift from the earthen walls that had failed in 1913.`,
    `The state of Ohio embraced Stevenson’s vision, allocating funds for what would become the first large‑scale <span class="vocab" data-cn="水文工程">hydraulic engineering</span> project in the Midwest. Construction began in 1915, employing thousands of workers who excavated new riverbeds and installed steel gates capable of regulating water levels. The project was overseen by the newly formed Ohio River Flood Control Commission, a precursor to today’s multi‑agency flood management bodies.`,
    `A pivotal moment arrived in 1922 when the <span class="vocab" data-cn="美国陆军工程兵团">U.S. Army Corps of Engineers</span> conducted a comprehensive survey of the Miami watershed. Their findings confirmed that coordinated “<span class="vocab" data-cn="流域管理">Watershed</span>” strategies—integrating upstream storage, downstream conveyance, and floodplain zoning—were essential for long‑term resilience. The Corps’ endorsement gave national credibility to Ohio’s efforts and spurred other states to adopt similar frameworks.`,
    `By the late 1930s, Dayton’s new flood control system had already averted several moderate floods that would have otherwise caused severe damage. The success story was widely publicized in engineering journals, highlighting innovations such as the “<span class="vocab" data-cn="溢洪道">spillway</span>” design that allowed water to bypass critical infrastructure without compromising structural integrity. These advances laid the groundwork for modern flood mitigation techniques used across the United States today.`,
    `The legacy of the 1913 disaster extends beyond concrete and steel. It reshaped public perception of natural hazards, prompting municipalities to invest in early warning systems and community education programs. Moreover, it demonstrated that interdisciplinary collaboration—combining hydrology, civil works, and urban planning—could transform a tragedy into a catalyst for progress. Modern flood control still draws lessons from Dayton’s experience, reminding us that proactive engineering can save lives and preserve cities for future generations.`,
  ],
  vocabulary: [
    { word: 'levee', cn: '堤坝' },
    { word: 'floodplain', cn: '洪泛平原' },
    { word: 'hydraulic engineering', cn: '水文工程' },
    { word: 'U.S. Army Corps of Engineers', cn: '美国陆军工程兵团' },
    { word: 'Watershed', cn: '流域管理' },
    { word: 'spillway', cn: '溢洪道' },
  ],
};

export default article;
