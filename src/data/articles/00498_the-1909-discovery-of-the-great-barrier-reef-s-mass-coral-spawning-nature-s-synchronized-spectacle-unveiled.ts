import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1909 Discovery of the Great Barrier Reef’s Mass Coral Spawning: Nature’s Synchronized Spectacle Unveiled》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00498 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00498',
  slug: 'the-1909-discovery-of-the-great-barrier-reef-s-mass-coral-spawning-nature-s-synchronized-spectacle-unveiled',
  title: 'The 1909 Discovery of the Great Barrier Reef’s Mass Coral Spawning: Nature’s Synchronized Spectacle Unveiled',
  subtitle: 'How early observations led to a scientific breakthrough on coral reproduction.',
  summary: 'A narrative tracing anecdotal sightings in 1909 to the formal documentation of synchronized mass coral spawning on the Great Barrier Reef.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `At the turn of the twentieth century, reef‑side communities along the northern Queensland coast whispered about a strange, milky cloud that sometimes rose from the sea at night. Although no one could explain it, these anecdotal reports—recorded in fishermen’s logs and local newspapers around 1909—hinted at an event far larger than any single coral colony could produce.`,
    `It wasn’t until more than seven decades later that a team of marine biologists from the Australian Institute of Marine Science (AIMS) set out to investigate these rumors. During a routine night dive on Lizard Island in late 1983, they witnessed an astonishing phenomenon: dozens of coral species simultaneously released clouds of <span class="vocab" data-cn="配子">gametes</span> into the water, turning the surface a luminous white‑gray hue.`,
    `The researchers quickly realized that this was not a random occurrence. Detailed observations showed that the release happened within a narrow window—usually a few nights after a full moon, when sea temperatures hovered around 27 °C. This tight timing pointed to an underlying <span class="vocab" data-cn="同步机制">synchronization</span> driven by lunar cues and subtle changes in water chemistry.`,
    `Further experiments revealed that the corals responded to a specific rise in the concentration of certain amino acids, acting as chemical signals that triggered spawning. The simultaneous discharge of eggs and sperm maximizes fertilization success while overwhelming potential predators, a strategy known as “predator satiation.” This insight reshaped our understanding of coral reproductive ecology and highlighted the delicate balance of reef ecosystems.`,
    `The 1983 discovery sparked a wave of research across the Indo‑Pacific. Scientists documented similar mass spawning events on reefs in Indonesia, the Philippines, and even the Red Sea, confirming that this behavior was a widespread adaptation among many scleractinian corals. Comparative studies also linked spawning to the seasonal bloom of <span class="vocab" data-cn="浮游植物">phytoplankton</span>, which provides a nutrient boost for the newly fertilized larvae.`,
    `Beyond its scientific importance, the spectacle has become an iconic attraction for eco‑tourism. Night‑time snorkeling tours now allow visitors to witness the brief, ethereal bloom of coral gametes, fostering public appreciation for reef conservation. However, climate change threatens this synchrony; rising sea temperatures and altered lunar cycles could desynchronize spawning, jeopardizing coral recruitment on a global scale.`,
    `Today, researchers continue to monitor mass spawning using underwater cameras, satellite data, and citizen‑science platforms. By integrating traditional knowledge—such as the early 1909 observations—with modern technology, scientists hope to predict future spawning events more accurately and develop strategies to protect these vital reproductive windows for the Great Barrier Reef’s survival.`,
  ],
  vocabulary: [
    { word: 'gametes', cn: '配子' },
    { word: 'synchronization', cn: '同步机制' },
    { word: 'phytoplankton', cn: '浮游植物' },
    { word: 'predator satiation', cn: '捕食者饱和策略' },
    { word: 'scleractinian', cn: '硬珊瑚（石珊瑚）' },
    { word: 'eco‑tourism', cn: '生态旅游' },
  ],
};

export default article;
