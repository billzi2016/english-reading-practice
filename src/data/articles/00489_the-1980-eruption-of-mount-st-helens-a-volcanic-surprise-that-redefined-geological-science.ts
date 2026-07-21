import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1980 Eruption of Mount St. Helens: A Volcanic Surprise That Redefined Geological Science》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00489 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00489',
  slug: 'the-1980-eruption-of-mount-st-helens-a-volcanic-surprise-that-redefined-geological-science',
  title: 'The 1980 Eruption of Mount St. Helens',
  subtitle: 'How a single eruption reshaped modern volcanology',
  summary: 'A vivid recount of the May 18, 1980 blast and its lasting scientific legacy.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On a clear morning in early May 1980, hikers on the south slope of <span class="vocab" data-cn="华盛顿州的火山">Mount St. Helens</span> noticed an unusual swelling of the mountain’s flank. The bulge grew at a rate of several inches per day, hinting that something deep beneath the surface was changing. Few could have imagined that within weeks this dormant <span class="vocab" data-cn="层状火山">stratovolcano</span> would unleash one of the most studied <span class="vocab" data-cn="喷发">eruption</span> in North American history.`,
    `Mount St. Helens sits atop a complex <span class="vocab" data-cn="岩浆库">magma chamber</span> that had been recharging for centuries. Over time, magma rich in silica accumulated, increasing its viscosity and trapping gases. By March 1980, the volcano began emitting low‑frequency tremors—signs of rising pressure that scientists at the USGS <span class="vocab" data-cn="地震监测">seismic monitoring</span> stations recorded with growing alarm.`,
    `On May 18, a magnitude‑4.8 earthquake struck beneath the mountain, acting as the final trigger. The already over‑pressurized magma forced its way upward, fracturing the weakened north flank. In an instant, the bulge collapsed in a massive landslide, exposing the vent and allowing superheated gases to escape. This sudden release generated a towering <span class="vocab" data-cn="火山柱">plume</span> that rose more than 80 kilometers into the atmosphere.`,
    `The blast expelled an estimated 1 cubic kilometer of material, including ash, rock fragments, and volcanic gases. The initial explosion sent a high‑speed <span class="vocab" data-cn="火山碎屑流">pyroclastic flow</span> racing down the valleys at speeds exceeding 300 km/h, scorching everything in its path. Below, meltwater mixed with ash to form fast‑moving <span class="vocab" data-cn="泥石流">lahars</span>, which later flooded river systems for months.`,
    `In the weeks that followed, a cloud of fine <span class="vocab" data-cn="火山灰">volcanic ash</span> drifted across several states, disrupting air travel and depositing a layer of tephra up to 30 centimeters thick in some areas. The eruption also created a new crater, now called the “crater lake basin,” reshaping the mountain’s profile forever. Scientists seized the opportunity to study how such rapid geomorphic change affects ecosystems and climate.`,
    `The 1980 event forced volcanologists to rethink many assumptions. Prior to St. Helens, the prevailing belief was that large eruptions were always preceded by obvious surface deformation. The subtle bulge and relatively small precursor earthquakes showed that warning signs could be far more nuanced. This realization spurred the development of integrated monitoring networks that combine <span class="vocab" data-cn="地震监测">seismic</span>, gas, and satellite observations—a practice now standard at volcanoes worldwide.`,
    `Today, Mount St. Helens remains an outdoor laboratory. Ongoing research monitors how the crater lake evolves, how vegetation recolonizes the blast zone, and how the lingering <span class="vocab" data-cn="火山灰">ash</span> affects water quality downstream. The eruption’s legacy lives on not only in textbooks but also in the safer, more informed communities that now benefit from decades of improved volcanic hazard assessment.`,
  ],
  vocabulary: [
    { word: 'eruption', cn: '喷发' },
    { word: 'magma chamber', cn: '岩浆库' },
    { word: 'pyroclastic flow', cn: '火山碎屑流' },
    { word: 'lahars', cn: '泥石流' },
    { word: 'tephra', cn: '火山灰层（凝固的火山碎屑）' },
    { word: 'plume', cn: '火山柱' },
    { word: 'seismic monitoring', cn: '地震监测' },
    { word: 'stratovolcano', cn: '层状火山' },
  ],
};

export default article;
