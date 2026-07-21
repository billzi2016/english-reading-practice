import type { Article } from '../../types/index.ts';

// 文件意图：维护《Deep‑Sea Bioluminescence: How Ocean Creatures Illuminate the Abyss》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00183 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00183',
  slug: 'deep-sea-bioluminescence-how-ocean-creatures-illuminate-the-abyss',
  title: 'Deep‑Sea Bioluminescence: How Ocean Creatures Illuminate the Abyss',
  subtitle: 'The hidden chemistry and ecology of light in the deep ocean.',
  summary: 'Explore how marine organisms generate and use light to survive in the pitch‑black abyss.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When you think of the ocean, sunlight dancing on surface waves often comes to mind. Yet below roughly 200 meters, where even the strongest sunbeams fade, a different kind of illumination takes over. In the <span class="vocab" data-cn="暗带">abyssal zone</span>, countless creatures produce their own light through a chemical reaction that has fascinated scientists since the 19th century. This natural glow is not merely decorative; it serves as a vital communication channel, a hunting aid, and even a defensive shield in an environment where darkness is absolute.`,
    `The core of bioluminescence lies in a pair of molecules: <span class="vocab" data-cn="荧光素">luciferin</span> and its partner enzyme, <span class="vocab" data-cn="酶">luciferase</span>. When luciferin is oxidized by luciferase in the presence of oxygen, it releases energy as visible photons. Different species have evolved distinct variants of these molecules, resulting in a palette of colors ranging from deep blue to greenish‑yellow—wavelengths that travel farthest through seawater. The reaction is highly efficient; almost all chemical energy converts directly into light, leaving little waste heat, which is crucial for organisms living at near‑freezing temperatures.`,
    `Many deep‑sea animals house specialized light organs called <span class="vocab" data-cn="发光器官">photophores</span>. These structures can be simple sacs lined with luciferin‑luciferase mixtures or complex assemblies that include lenses, reflectors, and even filters to shape the emitted beam. The anglerfish, for example, sports a luminous lure on its head that dangles like a fishing rod, attracting unsuspecting prey toward its massive jaws. In contrast, the tiny <i>Myctophidae</i> (lanternfish) possess rows of photophores along their sides, creating rhythmic flashes that help individuals locate each other in the vast darkness.`,
    `Not all bioluminescence is produced by the animal itself. Some species rely on <span class="vocab" data-cn="共生细菌">symbiotic bacteria</span> that reside within dedicated chambers. The Hawaiian bobtail squid, <i>Euprymna scolopes</i>, houses luminous Vibrio fischeri in a cavity beneath its mantle. At night the squid releases a cloud of light that matches the downwelling moonlight, effectively erasing its silhouette—a strategy known as counter‑illumination. In return, the bacteria receive nutrients and a protected environment, illustrating a finely tuned mutualistic relationship.`,
    `Bioluminescence also plays a dramatic role near <span class="vocab" data-cn="深海热液喷口">hydrothermal vents</span>. These oases of mineral‑rich water support dense communities of tube worms, shrimp, and crabs. Some vent dwellers emit brief bursts of light when disturbed, startling predators or signaling danger to nearby conspecifics. The giant isopod, for instance, can flash a series of bright spots along its antennae, creating a strobe effect that confuses attackers long enough for the creature to retreat into crevices.`,
    `Beyond survival, bioluminescence has inspired human technology. Researchers have borrowed luciferase genes to develop sensitive biological sensors, while engineers mimic photophore optics to design low‑power underwater lighting. The study of deep‑sea glow continues to reveal new biochemical pathways, some of which may hold clues for medical imaging or sustainable illumination. Each discovery underscores how a seemingly simple flash of light can bridge the gap between marine mystery and scientific innovation.`,
    `The next time you gaze at a starry night sky, imagine an entire world beneath the waves where darkness is pierced by countless tiny lanterns, each telling a story of adaptation, cooperation, and survival. In the abyss, light is not just a physical phenomenon—it is a language spoken in photons, shaping ecosystems that have thrived for millions of years without ever seeing sunlight.`,
  ],
  vocabulary: [
    { word: 'abyssal zone', cn: '暗带' },
    { word: 'luciferin', cn: '荧光素' },
    { word: 'luciferase', cn: '酶' },
    { word: 'photophore', cn: '发光器官' },
    { word: 'symbiotic bacteria', cn: '共生细菌' },
    { word: 'hydrothermal vent', cn: '深海热液喷口' },
  ],
};

export default article;
