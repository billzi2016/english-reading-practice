import type { Article } from '../../types/index.ts';

// 文件意图：维护《Deep Secrets of the Greenland Shark: The Ocean’s Longest-Lived Vertebrate》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00186 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00186',
  slug: 'deep-secrets-of-the-greenland-shark-the-ocean-s-longest-lived-vertebrate',
  title: 'Deep Secrets of the Greenland Shark: The Ocean’s Longest-Lived Vertebrate',
  subtitle: 'Unraveling the biology behind Earth’s oldest living fish',
  summary: 'Explore how the mysterious <span class="vocab" data-cn="格陵兰鲨">Greenland shark</span> survives for centuries in the Arctic deep.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `The first clue that the <span class="vocab" data-cn="格陵兰鲨">Greenland shark</span> might be a living fossil came not from its massive size but from the chemistry locked inside its eyes. Scientists used <span class="vocab" data-cn="放射性碳测年法">radiocarbon dating</span> on the protein crystals of eye‑lens nuclei, which do not remodel after birth, and discovered individuals that were over four centuries old—older than any other known vertebrate.`,
    `These sharks inhabit the icy waters of the North Atlantic and Arctic Ocean, often cruising at depths between 200 and 1,500 meters. The environment is perpetually cold, with temperatures hovering just above freezing. To thrive there, they have evolved a suite of <span class="vocab" data-cn="低温适应">cold adaptation</span> mechanisms, including antifreeze glycoproteins that prevent ice crystal formation in their blood and tissues.`,
    `One of the most striking physiological traits is their <span class="vocab" data-cn="慢速代谢">slow metabolism</span>. Unlike faster‑moving pelagic sharks, the Greenland shark moves languidly, conserving energy by maintaining a body temperature only slightly above that of the surrounding water. Their cartilage-rich skeleton and low muscle mass further reduce metabolic demands, allowing them to survive on infrequent meals such as carrion or slow‑swimming fish.`,
    `Reproduction in this species is equally enigmatic. Recent observations suggest an extraordinarily <span class="vocab" data-cn="胚胎发育延迟">prolonged gestation</span> period that may last up to 15 years, one of the longest known among vertebrates. Females give birth to a handful of relatively large pups, which explains why population recovery is so slow and why each individual carries immense evolutionary value.`,
    `The longevity record belongs to a specimen nicknamed “Mack,” whose eye‑lens analysis indicated an age of about 392 years, meaning it was born in the early 17th century. Such ages are possible because cellular damage accumulates at a glacial pace; their DNA repair systems appear highly efficient, and the cold environment slows oxidative processes that typically shorten lifespans in warmer waters.`,
    `Despite their resilience, Greenland sharks face growing threats. Climate change is altering sea‑ice patterns, potentially disrupting the prey base they rely on. Additionally, they are frequently caught as bycatch in longline fisheries targeting Arctic cod, and because they mature so slowly, even modest mortality rates can have outsized impacts on population stability.`,
    `Future research aims to illuminate the remaining mysteries of this ancient predator. Advances in satellite tagging now allow scientists to track <span class="vocab" data-cn="深海潜航">deep diving</span> movements over months, while genomic sequencing promises insights into the genetic basis of their longevity and cold tolerance. Each new discovery not only deepens our respect for the Greenland shark but also offers clues about how life can endure in Earth’s most extreme habitats.`,
  ],
  vocabulary: [
    { word: 'Greenland shark', cn: '格陵兰鲨' },
    { word: 'radiocarbon dating', cn: '放射性碳测年法' },
    { word: 'cold adaptation', cn: '低温适应' },
    { word: 'slow metabolism', cn: '慢速代谢' },
    { word: 'prolonged gestation', cn: '胚胎发育延迟' },
    { word: 'deep diving', cn: '深海潜航' },
  ],
};

export default article;
