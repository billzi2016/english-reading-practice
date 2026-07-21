import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Secret Longevity of the Greenland Shark: Uncovering Earth’s Oldest Vertebrate》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00075 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00075',
  slug: 'the-secret-longevity-of-the-greenland-shark-uncovering-earth-s-oldest-vertebrate',
  title: 'The Secret Longevity of the Greenland Shark',
  subtitle: 'How a Deep‑Sea Predator Became Earth’s Oldest Vertebrate',
  summary: 'Scientists use radiocarbon dating and genetic clues to reveal why the Greenland shark can live for centuries.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `It began on a foggy morning off the coast of Iceland, when a local fisherman hauled up a massive, amber‑colored carcass that seemed too old to belong to any shark he’d ever seen. The creature’s skin was scarred with ancient bite marks and its eyes were clouded, yet the fish still measured over six meters in length. This encounter sparked curiosity among marine biologists who had long suspected that the <span class="vocab" data-cn="格陵兰鲨">Greenland shark</span> might hold a secret to extreme longevity.`,
    `The first clue came from the shark’s eye lenses. Unlike most vertebrate tissues, the lens nucleus does not renew after birth, preserving a chemical record of the environment at the time of formation. By applying <span class="vocab" data-cn="放射性碳测年法">radiocarbon dating</span> to the protein layers, researchers discovered that some lenses contained carbon from the atmospheric nuclear tests of the 1950s, indicating that the sharks were born before those events—some as early as the late 1600s. This method pushed estimated ages well beyond a century, with the oldest individual possibly reaching four hundred years.`,
    `Genetic analysis offered another piece of the puzzle. Sequencing the mitochondrial DNA revealed an unusually low rate of <span class="vocab" data-cn="体细胞突变">somatic mutation</span>. In most animals, mutations accumulate rapidly as cells divide, but the Greenland shark’s genome showed only a handful of changes over centuries. This slow mutational clock aligns with its remarkably low <span class="vocab" data-cn="代谢率">metabolic rate</span>, which is among the lowest recorded for any vertebrate. Living in near‑freezing waters—often just above –1 °C—the shark’s physiology conserves energy, reducing oxidative stress that typically accelerates aging.`,
    `The deep‑sea environment itself contributes to the shark’s longevity. At depths ranging from 200 to over 2,000 meters, sunlight never penetrates, and food is scarce. To survive, Greenland sharks have evolved a diet of carrion, slow‑moving fish, and even seals that drift down from the surface. Their sluggish hunting style means they expend minimal energy, further extending their lifespan. Moreover, the cold temperatures slow biochemical reactions, effectively putting the shark’s internal clock on pause.`,
    `Reproduction adds another layer of mystery. Greenland sharks are believed to be ovoviviparous, retaining eggs inside the female until they hatch. Estimates suggest a gestation period that could last up to three years—one of the longest known among vertebrates. Females may not give birth until they are over 150 years old, and litter sizes are small, often fewer than ten pups. This delayed maturity means populations recover slowly, making them vulnerable to external pressures despite their age‑defying resilience.`,
    `Conservationists worry that human activities could jeopardize these ancient survivors. Although the International Union for Conservation of Nature (IUCN) currently lists the Greenland shark as “Near Threatened,” bycatch in commercial fisheries and climate‑induced changes to Arctic ecosystems pose real threats. Warmer waters could alter prey availability, while increased shipping traffic raises the risk of accidental capture. Protecting their habitat requires international cooperation and stricter regulations on deep‑sea fishing practices.`,
    `The Greenland shark’s story reshapes our understanding of aging in vertebrates. By studying its <span class="vocab" data-cn="端粒">telomere</span> dynamics, protein stability, and genome maintenance mechanisms, scientists hope to uncover biological strategies that could inform human medicine. If a creature can thrive for centuries with minimal cellular damage, perhaps the keys to longevity lie hidden in its cold‑adapted cells. The shark remains a living archive of Earth’s history—each individual a moving museum chronicling four centuries of oceanic change.`,
  ],
  vocabulary: [
    { word: 'Greenland shark', cn: '格陵兰鲨' },
    { word: 'radiocarbon dating', cn: '放射性碳测年法' },
    { word: 'somatic mutation', cn: '体细胞突变' },
    { word: 'metabolic rate', cn: '代谢率' },
    { word: 'telomere', cn: '端粒' },
    { word: 'near‑threatened', cn: '近危' },
  ],
};

export default article;
