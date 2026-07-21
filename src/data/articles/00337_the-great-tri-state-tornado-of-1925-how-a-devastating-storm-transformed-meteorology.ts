import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Tri‑State Tornado of 1925: How a Devastating Storm Transformed Meteorology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00337 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00337',
  slug: 'the-great-tri-state-tornado-of-1925-how-a-devastating-storm-transformed-meteorology',
  title: 'The Great Tri‑State Tornado of 1925: How a Devastating Storm Transformed Meteorology',
  subtitle: 'From tragedy to scientific breakthrough in tornado forecasting',
  summary: 'A look at the deadliest U.S. tornado, its impact, and how it reshaped modern meteorology.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On March 18, 1925 a monstrous <span class="vocab" data-cn="龙卷风">tornado</span> ripped across the heart of America, carving a path that cut through three states—Missouri, Illinois and Indiana. Historians refer to it as the <span class="vocab" data-cn="三州">tri‑state</span> tornado because its track spanned roughly 219 miles (352 km), an unprecedented distance for any single vortex in recorded history. The storm claimed at least 695 lives and injured thousands more, leaving a scar that would linger in the collective memory of the nation for decades.`,
    `Meteorologists later classified the funnel as an <span class="vocab" data-cn="最高级别的藤田等级">F5</span> on the Fujita scale, indicating wind speeds exceeding 261 mph (420 km/h). Its width swelled to over a mile in places, and eyewitnesses described a roaring sound akin to a freight train. Modern analysis suggests that a powerful <span class="vocab" data-cn="中尺度气旋">mesocyclone</span>—a rotating updraft within a supercell thunderstorm—provided the engine for such intensity, allowing the vortex to maintain its structure over an unusually long lifespan.`,
    `The tornado’s fury was most evident in towns like Murphysboro, Illinois, where entire blocks were reduced to splintered timber and twisted steel. The resulting <span class="vocab" data-cn="碎屑场">debris field</span> stretched for miles, with household items, farm equipment, and even whole houses scattered across the countryside. In Indiana, the small community of Griffin suffered a near‑total wipeout; only a handful of structures remained standing, many of them later used as makeshift shelters for survivors.`,
    `In the wake of such devastation, the U.S. Weather Bureau (the predecessor of today’s National Weather Service) faced harsh criticism for its inability to predict or warn about the disaster. At that time, forecasters relied primarily on <span class="vocab" data-cn="天气概观">synoptic</span> weather maps—hand‑drawn charts showing pressure systems and fronts—to anticipate severe weather. These tools lacked the resolution needed to identify the small‑scale rotation that spawns tornadoes, leaving communities blind to the impending danger.`,
    `The tragedy sparked a paradigm shift among scientists. By the late 1930s, researchers such as Dr. John Parkinson began experimenting with early forms of <span class="vocab" data-cn="雷达">radar</span> to detect precipitation patterns that might hint at tornadic development. Although primitive compared to today’s standards, these experiments demonstrated that electromagnetic echoes could reveal the structure of storms, laying groundwork for systematic tornado observation.`,
    `World War II accelerated radar technology, and after the war, the Weather Bureau introduced the first operational <span class="vocab" data-cn="多普勒雷达">Doppler radar</span> stations. By measuring the frequency shift of returned signals, Doppler radar could detect wind velocity within a storm, effectively spotting mesocyclones before they produced tornadoes. This capability led to the establishment of the first official <span class="vocab" data-cn="龙卷风预警">tornado warning</span> system in 1950, a direct legacy of lessons learned from the 1925 catastrophe.`,
    `Beyond instrumentation, the disaster prompted changes in public policy. Building codes in tornado‑prone regions were revised to require stronger anchoring and reinforced shelters, while educational campaigns taught citizens how to recognize funnel clouds and seek safe refuge. These measures have dramatically reduced fatalities in subsequent major outbreaks, illustrating how a single event can catalyze lasting societal resilience.`,
    `Today, the Great <span class="vocab" data-cn="三州">tri‑state</span> tornado is remembered not only for its sheer destructiveness but also for the scientific awakening it inspired. From crude synoptic charts to sophisticated Doppler networks and high‑resolution numerical models, meteorology has evolved into a discipline capable of saving lives—a transformation that began with the ashes of 1925.`,
  ],
  vocabulary: [
    { word: 'tornado', cn: '龙卷风' },
    { word: 'tri‑state', cn: '三州' },
    { word: 'F5', cn: '最高级别的藤田等级' },
    { word: 'mesocyclone', cn: '中尺度气旋' },
    { word: 'synoptic', cn: '天气概观' },
    { word: 'radar', cn: '雷达' },
    { word: 'Doppler radar', cn: '多普勒雷达' },
    { word: 'building code', cn: '建筑规范' },
  ],
};

export default article;
