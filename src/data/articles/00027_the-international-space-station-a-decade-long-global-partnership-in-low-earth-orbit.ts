import type { Article } from '../../types/index.ts';

// 文件意图：维护《The International Space Station: A Decade-Long Global Partnership in Low Earth Orbit》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00027 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00027',
  slug: 'the-international-space-station-a-decade-long-global-partnership-in-low-earth-orbit',
  title: 'The International Space Station: A Decade-Long Global Partnership in Low Earth Orbit',
  subtitle: "A Decade-Long Global Partnership Keeping Humanity's Laboratory in Space",
  summary: 'An overview of how fifteen nations have cooperated for ten years to operate the ISS, focusing on its construction, research, challenges, and future.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `The <span class="vocab" data-cn="国际空间站">International Space Station</span> (ISS) has become the most recognizable symbol of peaceful cooperation in space. Orbiting at an average altitude of roughly 400 kilometers, it resides within the <span class="vocab" data-cn="近地轨道">Low Earth Orbit</span>, where it circles the planet approximately every ninety minutes. Since its first module launched in 1998, the station has evolved into a permanent outpost staffed by rotating crews from multiple nations. Over the past decade, fifteen countries have jointly funded operations, shared scientific data, and coordinated crew rotations, turning the ISS into a true global partnership.`,
    `The assembly of the ISS was an engineering marathon that relied on precise <span class="vocab" data-cn="轨道交会">orbital rendezvous</span> maneuvers. Each new segment—whether a solar array, laboratory module, or docking port—had to be launched aboard rockets from different launch sites and then carefully aligned with the existing structure. The United States contributed the Destiny <span class="vocab" data-cn="栖息舱">habitat module</span>, while Russia supplied the Zvezda service module, Europe added Columbus, Japan delivered Kibo, and Canada provided the Canadarm2 robotic arm. These contributions illustrate how modular design enabled a multinational construction effort in space.`,
    `The unique environment of the ISS offers researchers an unparalleled <span class="vocab" data-cn="微重力">microgravity</span> laboratory. In this near-weightless setting, scientists can study fluid dynamics, protein crystallization, and combustion processes that behave differently than on Earth. The station routinely hosts a diverse array of <span class="vocab" data-cn="有效载荷">payload</span>s—ranging from small CubeSats to large scientific racks—each designed to answer questions about fundamental physics, biology, and materials science. Findings from these experiments have already informed the development of new pharmaceuticals, advanced alloys, and even water purification technologies for remote communities.`,
    `Beyond research, the ISS serves as a training ground for complex space operations such as <span class="vocab" data-cn="舱外活动">extravehicular activity</span> (EVA). Astronauts regularly perform spacewalks to replace aging batteries, install new solar arrays, and repair critical systems. These EVAs demand meticulous planning, coordination across mission control centers in Houston, Moscow, and other locations, and the use of specialized suits that protect crews from radiation and temperature extremes. The collaborative nature of EVA procedures underscores how multiple agencies can synchronize their expertise to maintain a safe and functional outpost.`,
    `In the last ten years, the ISS has yielded several landmark achievements. Earth observation instruments have captured high-resolution images that improve climate modeling and disaster response. Biological studies on muscle atrophy and bone loss have deepened our understanding of human health in space, directly benefiting patients with osteoporosis on Earth. Moreover, the station's unique platform enabled the first commercial manufacturing of fiber‑optic filaments in microgravity, demonstrating how private enterprises can leverage government‑run facilities for innovation.`,
    `Maintaining a structure that has been continuously inhabited for over two decades is not without challenges. The aging hardware requires regular upgrades, and budgetary pressures from participating nations occasionally threaten the continuity of funding. Geopolitical tensions have also tested the resilience of the partnership, yet the ISS has remained operational through diplomatic negotiations and shared commitments to scientific progress. Routine <span class="vocab" data-cn="舱外活动">extravehicular activity</span> missions continue to replace worn components, ensuring that critical systems such as life‑support and power generation remain functional.`,
    `As the ISS approaches its planned retirement in the early 2030s, discussions are already underway about its successor. Proposals include a mix of government‑led modules, commercial habitats, and lunar gateway stations that will extend humanity's presence beyond Earth orbit. Regardless of the final configuration, the legacy of the <span class="vocab" data-cn="国际空间站">International Space Station</span>—a decade‑long testament to shared ambition, scientific curiosity, and international goodwill—will guide future collaborations in space exploration.`,
  ],
  vocabulary: [
    { word: 'International Space Station', cn: '国际空间站' },
    { word: 'Low Earth Orbit', cn: '近地轨道' },
    { word: 'orbital rendezvous', cn: '轨道交会' },
    { word: 'habitat module', cn: '栖息舱' },
    { word: 'microgravity', cn: '微重力' },
    { word: 'payload', cn: '有效载荷' },
    { word: 'extravehicular activity', cn: '舱外活动' },
  ],
};

export default article;
