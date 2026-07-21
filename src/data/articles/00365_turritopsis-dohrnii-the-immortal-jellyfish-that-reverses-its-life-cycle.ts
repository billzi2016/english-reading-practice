import type { Article } from '../../types/index.ts';

// 文件意图：维护《Turritopsis dohrnii: The Immortal Jellyfish That Reverses Its Life Cycle》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00365 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00365',
  slug: 'turritopsis-dohrnii-the-immortal-jellyfish-that-reverses-its-life-cycle',
  title: 'Turritopsis dohrnii: The Immortal Jellyfish That Reverses Its Life Cycle',
  subtitle: 'How a tiny sea creature cheats death by turning back its biological clock',
  summary: 'An engaging look at the biology, ecology, and scientific intrigue surrounding the so‑called “immortal jellyfish.”',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When marine biologist Dr. Frederick Schmid first spotted a tiny, bell‑shaped creature drifting near the surface of the Mediterranean, he could not have guessed that it would later become famous as the “immortal jellyfish.” The species, <span class="vocab" data-cn="海蜇">Turritopsis dohrnii</span>, looks unremarkable at first glance—transparent, about the size of a fingernail—but its life story reads like science fiction. Instead of following the usual one‑way progression from larva to adult and then death, this jellyfish can literally hit rewind on its development.`,
    `Jellyfish have two main body forms: the sessile <span class="vocab" data-cn="水螅体">polyp</span> stage that clings to a substrate, and the free‑swimming <span class="vocab" data-cn="伞体">medusa</span> stage that we typically recognize as a jellyfish. Most species mature from polyp to medusa once and then die after reproducing. Turritopsis dohrnii, however, can transform its adult medusa back into a youthful polyp through a process called <span class="vocab" data-cn="转分化">transdifferentiation</span>. This cellular reprogramming involves mature cells shedding their specialized functions and adopting new identities, effectively resetting the organism’s biological clock.`,
    `The trigger for this reversal is often stress—physical injury, temperature shock, or even starvation. When a medusa senses danger, it begins to shrink, its tentacles retract, and its cells undergo massive re‑organization. Researchers have observed that certain stem‑like cells migrate to key locations, where they differentiate into the various cell types needed for a new polyp colony. This ability to bypass <span class="vocab" data-cn="衰老">senescence</span> is what earns Turritopsis its “immortal” nickname, although it does not make the animal invulnerable; predators and disease can still end its life.`,
    `At the molecular level, scientists have identified several clues that might explain how transdifferentiation avoids the usual limits of cellular aging. For instance, the jellyfish appears to maintain relatively stable <span class="vocab" data-cn="端粒">telomeres</span>, the protective caps at chromosome ends that typically shorten with each cell division. Moreover, genes associated with <span class="vocab" data-cn="细胞凋亡">apoptosis</span>—the programmed death of damaged cells—are down‑regulated during reversal, allowing cells to survive and remodel rather than self‑destruct. While the exact pathways remain a hot research topic, these findings hint at mechanisms that could one day inform regenerative medicine in humans.`,
    `Ecologically, Turritopsis dohrnii is not a dominant predator; it feeds on tiny planktonic organisms and lives mostly in temperate coastal waters. Its remarkable life‑cycle flexibility may give it an edge in fluctuating environments, allowing populations to persist even when conditions become temporarily hostile. Some marine ecologists speculate that the jellyfish’s ability to clone itself repeatedly through polyp budding could help maintain genetic diversity without relying on sexual reproduction, a strategy known as <span class="vocab" data-cn="克隆繁殖">clonal reproduction</span>.`,
    `The fascination with this creature extends beyond academia. Popular science outlets have dubbed it “the Benjamin Button of the sea,” and its story often appears in documentaries about longevity. Yet scientists caution against over‑hyping its abilities; while Turritopsis can reset its life cycle, it does not achieve true biological immortality. Each reversal still consumes energy, and repeated cycles may eventually wear down cellular integrity. Nonetheless, studying how nature solves the problem of aging provides valuable inspiration for biotechnologists seeking to extend healthy human lifespan.`,
    `Future research aims to decode the genetic switches that initiate transdifferentiation, perhaps by sequencing the jellyfish’s genome at different stages or using CRISPR tools to manipulate candidate genes. If we can pinpoint the master regulators, they might be applied—carefully and ethically—to stem‑cell therapies or tissue engineering. Until then, Turritopsis dohrnii remains a modest marine marvel, reminding us that even the smallest organisms can hold profound secrets about life, death, and the possibility of turning back time.`,
  ],
  vocabulary: [
    { word: 'Turritopsis dohrnii', cn: '海蜇' },
    { word: 'polyp', cn: '水螅体' },
    { word: 'medusa', cn: '伞体' },
    { word: 'transdifferentiation', cn: '转分化' },
    { word: 'senescence', cn: '衰老' },
    { word: 'telomere', cn: '端粒' },
    { word: 'apoptosis', cn: '细胞凋亡' },
    { word: 'clonal reproduction', cn: '克隆繁殖' },
  ],
};

export default article;
