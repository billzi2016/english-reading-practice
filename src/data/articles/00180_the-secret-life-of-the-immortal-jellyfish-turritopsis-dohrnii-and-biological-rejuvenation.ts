import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Secret Life of the Immortal Jellyfish: Turritopsis dohrnii and Biological Rejuvenation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00180 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00180',
  slug: 'the-secret-life-of-the-immortal-jellyfish-turritopsis-dohrnii-and-biological-rejuvenation',
  title: 'The Secret Life of the Immortal Jellyfish: Turritopsis dohrnii and Biological Rejuvenation',
  subtitle: 'How a tiny marine animal challenges our understanding of aging',
  summary: 'Explore the astonishing life cycle of the so‑called “immortal jellyfish” and what it reveals about cellular rejuvenation.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In a quiet tide pool off the coast of Japan, a translucent creature no larger than a thumbnail performs a feat that sounds like science fiction. When faced with injury or starvation, this jellyfish can essentially hit a biological “reset” button and start its life anew. Scientists have nicknamed it the “immortal jellyfish,” but the reality is far more nuanced—and far more fascinating—than any headline could convey.`,
    `The animal in question is <span class="vocab" data-cn="不死水母">Turritopsis dohrnii</span>, a member of the class Hydrozoa that was first described by German zoologist Friedrich Dohrn in 1883. Though it resembles other small, bell‑shaped medusae, its distribution is truly global: from temperate seas in Europe to tropical waters near Hawaii. For decades it lived unnoticed, until marine biologists in the early 1990s began documenting its bizarre ability to reverse development.`,
    `To appreciate why this reversal matters, we need to understand a typical jellyfish life cycle. Most species alternate between two distinct forms: the sessile <span class="vocab" data-cn="水螅体">polyp</span> that clings to a substrate and reproduces asexually, and the free‑swimming <span class="vocab" data-cn="伞状体">medusa</span> that releases eggs and sperm into the water column. In most animals these stages are unidirectional—once a medusa matures, it eventually dies in a process called <span class="vocab" data-cn="衰老">senescence</span>.`,
    `What sets T. dohrnii apart is its capacity for <span class="vocab" data-cn="转分化">transdifferentiation</span>, a form of cellular reprogramming where mature cells shed their specialized identities and become stem‑like again. Under stress, the medusa’s umbrella collapses, its tentacles retract, and its cells begin to express genes typical of early developmental stages. Within days, the organism reorganizes itself into a tiny polyp colony, ready to produce fresh medusae. This reversal can happen multiple times in a single individual, effectively sidestepping the usual march toward death.`,
    `Laboratory experiments have illuminated the triggers and limits of this process. Researchers at the University of Southern California exposed T. dohrnii to temperature shocks, chemical toxins, or simple food deprivation. In each case, a significant fraction of the medusae initiated reversal, while others succumbed to conventional senescence. Molecular analyses revealed that key pathways involved in DNA repair and telomere maintenance—particularly the enzyme <span class="vocab" data-cn="端粒酶">telomerase</span>—remain active throughout the cycle, suggesting a link between the jellyfish’s longevity and its ability to preserve chromosome ends.`,

    `The implications for human biology are tantalizing but still speculative. By studying how T. dohrnii controls <span class="vocab" data-cn="再生生物学">regenerative biology</span>, scientists hope to uncover universal principles that could one day inform therapies for age‑related degeneration or organ failure. For instance, if the molecular switches that enable transdifferentiation can be identified, they might inspire new approaches to reprogram adult human cells without the need for embryonic stem cells—a major ethical and technical hurdle in current regenerative medicine.`,

    `Nevertheless, “immortality” remains a poetic exaggeration. In the wild, most T. dohrnii individuals still fall prey to predators or succumb to disease before they can complete many reversal cycles. Moreover, the energetic cost of repeatedly rebuilding a body is substantial, and the mechanisms that prevent uncontrolled cell growth—akin to cancer in mammals—are not fully understood. Future research will need to balance the allure of eternal youth with the practical realities of ecological fitness and cellular safety.`,
  ],
  vocabulary: [
    { word: 'Turritopsis dohrnii', cn: '不死水母' },
    { word: 'transdifferentiation', cn: '转分化' },
    { word: 'medusa', cn: '伞状体' },
    { word: 'polyp', cn: '水螅体' },
    { word: 'senescence', cn: '衰老' },
    { word: 'telomere', cn: '端粒' },
    { word: 'regenerative biology', cn: '再生生物学' },
  ],
};

export default article;
