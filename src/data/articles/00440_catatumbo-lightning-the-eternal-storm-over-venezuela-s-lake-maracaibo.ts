import type { Article } from '../../types/index.ts';

// 文件意图：维护《Catatumbo Lightning: The Eternal Storm Over Venezuela’s Lake Maracaibo》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00440 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00440',
  slug: 'catatumbo-lightning-the-eternal-storm-over-venezuela-s-lake-maracaibo',
  title: 'Catatumbo Lightning: The Eternal Storm Over Venezuela’s Lake Maracaibo',
  subtitle: 'A Natural Light Show Powered by Geography and Atmosphere',
  summary: 'Explore the science, history, and mystery behind the world‑famous Catatumbo lightning that dances over Lake Maracaibo.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On a humid evening in early June, a small fishing village on the western shore of Lake Maracaibo awakens to a familiar glow. The sky ripples with countless bolts that seem to rise from the water itself, illuminating the night for minutes at a time. This spectacular display is known as the <span class="vocab" data-cn="卡塔图姆博闪电">Catatumbo lightning</span>, a natural phenomenon that has earned the lake the nickname “The Ever‑Flashing Lake.”`,
    `Scientists have traced the origin of this relentless storm to a unique combination of topography and atmospheric dynamics. Warm, moist air from the Caribbean Sea moves inland and collides with cool mountain breezes descending from the Andes. This clash creates intense <span class="vocab" data-cn="大气对流">atmospheric convection</span>, forcing warm air upward at speeds that can exceed 30 m·s⁻¹, a key ingredient for thunderstorm development.`,
    `As the rising air cools, water vapor condenses into towering cumulonimbus clouds. Within these clouds, tiny ice crystals and super‑cooled droplets generate an electric field strong enough to trigger <span class="vocab" data-cn="静电放电">electrostatic discharge</span>. Unlike ordinary thunderstorms that last only a few minutes, the Catatumbo system can sustain lightning for up to ten hours per night, producing an average of 280 flashes per minute. The result is a continuous curtain of light that seems almost artificial in its regularity.`,
    `The region’s geology adds another layer to the mystery. Beneath Lake Maracaibo lie extensive oil fields that release trace amounts of methane and other hydrocarbons into the atmosphere. These gases act as <span class="vocab" data-cn="气溶胶">aerosols</span>, providing additional charge carriers that enhance the electrical conductivity of the air. Some researchers argue that this chemical contribution helps maintain the storm’s intensity, especially during the dry season when moisture alone would be insufficient.`,
    `Local folklore has long revered the lightning as a divine messenger. Indigenous peoples once believed the flashes were the fire of a sky‑bound serpent, while later Spanish colonists called it “the thunder of the devil.” In modern times, the phenomenon has become an economic asset: tourists flock to the town of San Carlos to witness the nightly show, and scientists from around the world set up temporary observatories to record data for climate studies. The lightning also influences regional <span class="vocab" data-cn="水文循环">hydrological cycles</span>, affecting rainfall patterns that support agriculture and hydroelectric power generation downstream.`,
    `Despite decades of study, many questions remain unanswered. Why does the storm ignite almost every night during certain months but fade completely in others? How will climate change—altering sea surface temperatures and wind shear—reshape this delicate balance? Ongoing projects using satellite‑based lightning mappers and ground‑level electric field meters aim to build a comprehensive model that could predict future behavior, preserving both the scientific intrigue and the cultural heritage tied to the “eternal storm.”`,
    `For anyone standing on the lake’s edge as the sky erupts in luminous arcs, the Catatumbo lightning offers more than a visual spectacle; it is a reminder of how geography, chemistry, and physics intertwine to create one of Earth’s most persistent natural light shows. Whether you are a traveler seeking awe or a researcher chasing data, the storm over Lake Maracaibo continues to spark curiosity—and perhaps, a little bit of wonder—every night it flashes.`,
  ],
  vocabulary: [
    { word: 'Catatumbo lightning', cn: '卡塔图姆博闪电' },
    { word: 'atmospheric convection', cn: '大气对流' },
    { word: 'electrostatic discharge', cn: '静电放电' },
    { word: 'aerosol', cn: '气溶胶' },
    { word: 'hydrological cycles', cn: '水文循环' },
    { word: 'ionosphere', cn: '电离层' },
  ],
};

export default article;
