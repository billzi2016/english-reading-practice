import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1964 Great Alaska Earthquake: Tectonic Power, Community Resilience, and Engineering Lessons》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00477 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00477',
  slug: 'the-1964-great-alaska-earthquake-tectonic-power-community-resilience-and-engineering-lessons',
  title: 'The 1964 Great Alaska Earthquake: Tectonic Power, Community Resilience, and Engineering Lessons',
  subtitle: 'How a massive megathrust reshaped Alaskan towns and modern engineering.',
  summary: 'An in‑depth look at the 9.2 magnitude quake that struck Alaska, its geological causes, human response, and lasting lessons for seismic design.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On March 27, 1964, at 5:36 a.m. local time, a colossal <span class="vocab" data-cn="板块俯冲形成的巨大断层">megathrust</span> ruptured along the Alaska <span class="vocab" data-cn="板块相互下沉的区域">subduction zone</span>. The United States Geological Survey recorded a moment magnitude of 9.2, making it the second‑largest earthquake ever documented worldwide. The shaking lasted for about four minutes, unleashing forces that displaced the seafloor by up to 30 meters and generated a cascade of geological phenomena still studied today.`,
    `The tectonic drama began where the Pacific Plate dives beneath the North American Plate. This convergent boundary stores immense elastic strain over centuries; when it finally released, the fault slip propagated for roughly 600 kilometers along the coast of southern Alaska. The resulting ground motion was not uniform—areas directly above the rupture experienced peak accelerations exceeding 1 g, while more distant locales felt intense but shorter shaking.`,
    `Anchorage, the state’s largest city, bore the brunt of the disaster. Buildings constructed on reclaimed land suffered catastrophic <span class="vocab" data-cn="土壤在强震中失去承载力，像液体一样流动">liquefaction</span>, causing foundations to tilt or sink. The downtown district saw over 130 structures collapse, and the infamous “Miller’s Hill” landslide buried a neighborhood under meters of mud. Yet, despite the devastation, the community rallied quickly; volunteers formed ad‑hoc rescue teams, and local radio stations broadcast vital information when other communications failed.`,
    `The earthquake also triggered a series of destructive <span class="vocab" data-cn="余震">aftershocks</span>, some exceeding magnitude 7.0, which hampered recovery efforts and kept residents on edge for weeks. Simultaneously, the displaced seafloor generated a Pacific‑wide tsunami that reached heights of up to 67 meters in Lituya Bay, carving a dramatic “megatsunami” scar into the surrounding cliffs. Coastal villages such as Valdez were inundated, prompting evacuations and highlighting the intertwined risks of seismic shaking and oceanic waves.`,
    `In the aftermath, engineers and policymakers faced an urgent need to reassess building practices. The disaster spurred the development of Alaska’s first comprehensive <span class="vocab" data-cn="针对地震的建筑规范">seismic hazard</span> maps, which identified zones of high ground acceleration and liquefaction potential. New construction codes mandated reinforced concrete shear walls, steel moment frames, and deep pile foundations designed to resist both lateral forces and soil instability.`,
    `One of the most enduring lessons was the importance of <span class="vocab" data-cn="对已有结构进行加固以提升抗震能力">retrofitting</span>. Iconic structures like the Anchorage 5‑Story Building underwent extensive upgrades, including base isolators that allow a building to move independently of ground motion. These interventions have proven effective in subsequent quakes, such as the 2018 magnitude 7.0 event near Anchorage, where many retrofitted buildings sustained only minor damage.`,
    `Beyond engineering, the 1964 quake forged a cultural narrative of resilience. Annual commemorations remind Alaskans of their capacity to rebuild—schools, hospitals, and homes were reconstructed with community input, fostering a sense of ownership over disaster preparedness. The experience also contributed to the establishment of the Alaska Earthquake Center, which continues to monitor seismic activity, educate the public, and refine predictive models that help mitigate future risks.`,
  ],
  vocabulary: [
    { word: 'megathrust', cn: '板块俯冲形成的巨大断层' },
    { word: 'subduction zone', cn: '板块相互下沉的区域' },
    { word: 'liquefaction', cn: '土壤在强震中失去承载力，像液体一样流动' },
    { word: 'aftershocks', cn: '余震' },
    { word: 'seismic hazard', cn: '针对地震的建筑规范' },
    { word: 'retrofitting', cn: '对已有结构进行加固以提升抗震能力' },
  ],
};

export default article;
