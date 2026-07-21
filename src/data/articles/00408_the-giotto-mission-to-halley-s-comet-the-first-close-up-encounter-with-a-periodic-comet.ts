import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Giotto Mission to Halley’s Comet: The First Close‑Up Encounter with a Periodic Comet》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00408 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00408',
  slug: 'the-giotto-mission-to-halley-s-comet-the-first-close-up-encounter-with-a-periodic-comet',
  title: 'The Giotto Mission to Halley’s Comet: The First Close‑Up Encounter with a Periodic Comet',
  subtitle: 'How Europe’s bold probe unveiled the secrets of a legendary comet',
  summary: 'A narrative of ESA’s Giotto spacecraft, its daring flyby of Halley’s comet in 1986, and the scientific breakthroughs that followed.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the bright tail of <span class="vocab" data-cn="彗星">comet</span> Halley streaked across the night sky in early 1986, millions looked up with awe. Unlike many one‑time visitors, Halley is a <span class="vocab" data-cn="周期彗星">periodic comet</span>, completing an orbit around the Sun roughly every 76 years. Its predictable return gave astronomers a rare chance to study a pristine relic from the solar system’s birth, but only if a spacecraft could get close enough before the icy body vanished again into the darkness of space.</`,
    `The European Space Agency (ESA) answered that challenge with an ambitious project named Giotto, after the 14th‑century Italian painter who famously captured the moment of Christ’s last supper. Launched on July 2 1985 aboard an Ariane 1 rocket from Kourou, French Guiana, Giotto was a compact <span class="vocab" data-cn="探测器">probe</span> designed to survive the harsh environment near a comet’s nucleus. Its mission timeline was tight: after a six‑month cruise, it would have only a few hours to execute a high‑speed flyby and transmit data back to Earth.</`,
    `Giotto’s engineering was a study in contrasts. On one hand, it carried delicate scientific instruments such as the <span class="vocab" data-cn="尘埃粒子探测仪">dust analyzer</span> (the Dust Impact Detector System) and a UV–visible <span class="vocab" data-cn="光谱仪">spectrometer</span>, which could identify gases released from the comet. On the other hand, it was protected by a thick carbon‑fiber shield—often called the “dust shield”—to absorb impacts from high‑velocity particles that would otherwise destroy the spacecraft’s delicate electronics.</`,
    `On March 13 1986, Giotto entered the inner solar system and began its final approach. The probe hurtled toward Halley at an astonishing <span class="vocab" data-cn="相对速度">relative velocity</span> of about 68 km/s (roughly 150 000 mph). At a closest distance of just 600 km from the bright nucleus, Giotto snapped its first images. The pictures revealed a dark, irregularly shaped body—later measured to be roughly 15 km across—surrounded by active jets spewing gas and dust into space.</`,
    `The data returned during those fleeting minutes transformed comet science. Spectroscopic analysis showed that Halley’s coma (the cloud of gas surrounding the nucleus) contained water vapor, carbon monoxide, and a surprising abundance of complex organic molecules such as formaldehyde. The <span class="vocab" data-cn="尘埃粒子探测仪">dust analyzer</span> recorded impacts from particles ranging from sub‑micron grains to millimeter‑sized chunks, indicating that the comet’s surface was a mixture of ices and rocky material bound together by volatile compounds.</`,
    `One of the most intriguing findings concerned the interaction between the comet’s outgassing and the <span class="vocab" data-cn="太阳风">solar wind</span>. As Halley approached perihelion, its emitted gases became ionized, creating a magnetic envelope that deflected solar‑wind particles. Giotto measured this “magnetosphere” for the first time around a comet, providing clues about how comets can shape their own plasma environments and even affect planetary atmospheres when they pass nearby.</`,
    `Giotto’s success paved the way for later missions such as NASA’s Stardust (which collected cometary dust in 2004) and ESA’s Rosetta, which orbited another periodic comet, 67P/Churyumov‑Gerasimenko, from 2014 to 2016. The daring close‑up encounter demonstrated that a relatively small <span class="vocab" data-cn="探测器">probe</span> could survive the hostile environment of a comet’s inner coma, inspiring engineers and scientists worldwide to design ever more sophisticated explorers of these ancient wanderers.</`,
  ],
  vocabulary: [
    { word: 'comet', cn: '彗星' },
    { word: 'periodic comet', cn: '周期彗星' },
    { word: 'probe', cn: '探测器' },
    { word: 'dust analyzer', cn: '尘埃粒子探测仪' },
    { word: 'spectrometer', cn: '光谱仪' },
    { word: 'nucleus', cn: '彗核' },
    { word: 'relative velocity', cn: '相对速度' },
    { word: 'solar wind', cn: '太阳风' },
  ],
};

export default article;
