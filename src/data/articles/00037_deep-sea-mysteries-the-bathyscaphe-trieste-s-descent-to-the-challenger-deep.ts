import type { Article } from '../../types/index.ts';

// 文件意图：维护《Deep Sea Mysteries: The Bathyscaphe Trieste’s Descent to the Challenger Deep》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00037 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00037',
  slug: 'deep-sea-mysteries-the-bathyscaphe-trieste-s-descent-to-the-challenger-deep',
  title: 'Deep Sea Mysteries: The Bathyscaphe Trieste’s Descent to the Challenger Deep',
  subtitle: 'A historic plunge into Earth\'s deepest ocean trench',
  summary: 'Explore how the bathyscaphe Trieste reached the bottom of the Mariana Trench and what it revealed about the abyss.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In January 1960, a small team of scientists set out to solve one of the ocean’s greatest riddles: how deep can a human‑made vessel actually go? Their target was the <span class="vocab" data-cn="马里亚纳海沟的最深点">Challenger Deep</span>, a trench that plunges more than ten kilometres beneath the surface, where sunlight never reaches and pressure is crushing. The mission captured imaginations worldwide because it promised to turn the unknown abyss into a place we could actually observe.`,
    `The vehicle chosen for this daring venture was the <span class="vocab" data-cn="深潜艇">bathyscaphe</span> Trieste, designed by Swiss physicist Auguste Piccard. Unlike conventional submarines that rely on ballast tanks, the Trieste used a massive gasoline‑filled float to provide buoyancy and a thick steel <span class="vocab" data-cn="压力舱壳">pressure hull</span> to protect its two occupants from the immense hydrostatic pressure outside. The hull’s spherical shape distributed stress evenly, allowing it to withstand forces over a thousand times greater than atmospheric pressure at sea level.`,
    `Before the historic dive, Piccard’s son Jacques and U.S. Navy lieutenant Don Walsh spent weeks calibrating instruments inside the cramped cockpit. They installed a <span class="vocab" data-cn="声纳">sonar</span> system to map the seafloor, temperature probes to record the near‑freezing water, and a simple but reliable communication line that would transmit occasional clicks back to the surface ship. The preparation phase was as critical as the descent itself; any malfunction at such depths could be fatal.`,
    `The descent began on 23 January, with the Trieste slowly sinking under its own weight. As they passed the 3,000‑metre mark, the crew felt a faint shudder—an indication that the hull was beginning to compress under pressure. By the time they reached roughly <span class="vocab" data-cn="10 911米">10,911 metres</span>, the deepest point ever recorded by humans at that time, the outside pressure exceeded 1,100 atmospheres. The darkness was absolute, and the only light came from a small floodlamp that illuminated a few centimeters of silty mud beneath them.`,
    `When the lights finally revealed the seafloor, Jacques Piccard described it as a flat, almost featureless plain covered in fine sediment—a stark contrast to the rugged volcanic peaks found at shallower depths. The crew also observed tiny <span class="vocab" data-cn="海洋甲壳类动物">amphipods</span> scuttling across the mud, proving that life can exist even under such extreme conditions. Their observations challenged previous assumptions that the abyss was a lifeless desert and opened new avenues for deep‑sea biology.`,
    `The Trieste’s successful dive had far‑reaching implications. It demonstrated that engineered structures could survive the crushing pressure of the deep ocean, paving the way for later research submersibles like DSV Alvin and the Japanese Shinkai series. Moreover, the data collected on temperature gradients, water chemistry, and seafloor composition enriched our understanding of plate tectonics and the global carbon cycle, topics that remain central to Earth science today.`,
    `Decades later, the legacy of the Trieste lives on in modern expeditions. In 2012, filmmaker James Cameron piloted the Deepsea Challenger to a similar depth, while explorer Victor Vescovo’s Five Deeps Expedition in 2019 used a purpose‑built submersible to revisit the Challenger Deep and confirm its exact depth with contemporary sonar mapping. Each of these missions owes a debt to the pioneering spirit and engineering ingenuity displayed by the Trieste crew over half a century ago.`,
  ],
  vocabulary: [
    { word: 'bathyscaphe', cn: '深潜艇' },
    { word: 'Challenger Deep', cn: '马里亚纳海沟的最深点' },
    { word: 'pressure hull', cn: '压力舱壳' },
    { word: 'hydrostatic pressure', cn: '静水压' },
    { word: 'sonar', cn: '声纳' },
    { word: 'amphipods', cn: '海洋甲壳类动物' },
  ],
};

export default article;
