import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Public Panic Over Halley's Comet in 1910: Science, Superstition, and Societal Reaction》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00334 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00334',
  slug: 'the-public-panic-over-halley-s-comet-in-1910-science-superstition-and-societal-reaction',
  title: 'The Public Panic Over Halley’s Comet in 1910: Science, Superstition, and Societal Reaction',
  subtitle: 'How a celestial event sparked fear, fascination, and scientific debate.',
  summary: 'An exploration of the 1910 Halley’s Comet episode, revealing the clash between emerging astronomy and lingering superstition.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the bright tail of <span class="vocab" data-cn="哈雷彗星">Halley’s Comet</span> re‑appeared in April 1910, newspapers across Europe and North America filled their pages with dramatic headlines. The comet was expected to reach its closest approach to the Sun—its <span class="vocab" data-cn="近日点">perihelion</span>—on May 18, a date that coincided with the Earth’s own orbit crossing the comet’s tail. While astronomers prepared precise calculations, many ordinary citizens imagined poisonous gases spilling from the celestial visitor and threatening life on Earth.`,
    `The scientific alarm centered on a molecule called <span class="vocab" data-cn="氰基">cyanogen</span>, which had been detected in the comet’s spectrum using early <span class="vocab" data-cn="光谱学">spectroscopy</span>. Cyanogen is a toxic gas that, if inhaled in large quantities, can be lethal. Popular press exaggerated this fact, publishing sensational stories that claimed “the sky will turn green with poison” and urging readers to stock up on bottled water and masks. The resulting <span class="vocab" data-cn="公众健康恐慌">public health panic</span> led to a surge in sales of antitoxin tonics and even the formation of “comet clubs” that promised protection through prayer or patented elixirs.`,
    `In contrast, leading astronomers such as Sir William Huggins and Camille Flammarion used public lectures and newspaper columns to explain why the danger was vastly overstated. They argued that Earth would pass through only a thin, diffuse part of the comet’s tail, where cyanogen concentrations were far below harmful levels. Their arguments relied on quantitative estimates derived from the comet’s observed brightness and known gas production rates, illustrating an early example of <span class="vocab" data-cn="天文预测">astronomical prediction</span> applied to public safety.`,
    `The clash between scientific explanation and popular superstition was amplified by the era’s burgeoning mass media. Illustrated magazines printed lurid artist impressions of a “green comet” raining down toxic vapors, while cartoonists mocked both the fearful public and the scientists who tried to calm them. This <span class="vocab" data-cn="媒体耸人听闻">media sensationalism</span> not only sold copies but also cemented a cultural memory of the 1910 comet as a moment when fear outpaced fact.`,
    `Meanwhile, some religious groups interpreted the comet as an omen. Sermons in small towns warned that the celestial visitor signaled divine judgment, urging congregations to repent and pray. In contrast, progressive educators saw the episode as an opportunity to improve <span class="vocab" data-cn="科学素养">scientific literacy</span>. Schools organized night‑time sky‑watching events, distributing simple telescopes so students could observe the comet’s tail themselves, thereby confronting fear with direct observation.`,
    `When May 18 arrived, the world held its breath. The comet passed harmlessly, and the predicted “green sky” never materialized. Newspapers quickly shifted from panic to relief, publishing headlines such as “Comet Passes Without Harm—Science Triumphs.” Yet the episode left a lasting imprint: it demonstrated how rapidly misinformation could spread when scientific concepts were not communicated clearly, and it highlighted the power of visual media in shaping public perception.`,
    `Historians now view the 1910 Halley’s Comet panic as a case study in the interaction between emerging modern science and lingering folklore. It reminds us that even today—when we face global challenges like pandemics or climate change—the balance between accurate scientific communication and sensationalist narratives remains fragile. The lessons from 1910 encourage educators, journalists, and scientists to collaborate, ensuring that future celestial events inspire wonder rather than fear.`,
  ],
  vocabulary: [
    { word: 'Halley’s Comet', cn: '哈雷彗星' },
    { word: 'perihelion', cn: '近日点' },
    { word: 'cyanogen', cn: '氰基' },
    { word: 'spectroscopy', cn: '光谱学' },
    { word: 'public health panic', cn: '公众健康恐慌' },
    { word: 'astronomical prediction', cn: '天文预测' },
    { word: 'media sensationalism', cn: '媒体耸人听闻' },
    { word: 'scientific literacy', cn: '科学素养' },
  ],
};

export default article;
