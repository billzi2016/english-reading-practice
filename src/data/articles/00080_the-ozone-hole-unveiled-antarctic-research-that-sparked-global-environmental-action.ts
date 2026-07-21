import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Ozone Hole Unveiled: Antarctic Research that Sparked Global Environmental Action》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00080 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00080',
  slug: 'the-ozone-hole-unveiled-antarctic-research-that-sparked-global-environmental-action',
  title: 'The Ozone Hole Unveiled: Antarctic Research that Sparked Global Environmental Action',
  subtitle: 'How a remote discovery reshaped worldwide environmental policy.',
  summary: 'A narrative of the Antarctic ozone research that led to the Montreal Protocol and ongoing recovery efforts.',
  category: 'environment',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the winter of 1979, a small team from the <span class="vocab" data-cn="英国南极考察站">British Antarctic Survey</span> (BAS) noticed something alarming in their routine measurements. Joseph Farman, Brian Gardiner, and Jon Shanklin reported that the total amount of ozone above Antarctica had dropped dramatically compared to previous years. Their paper, published in *Nature*, coined the term “ozone hole” and sent shockwaves through both the scientific community and the public imagination.`,
    `The <span class="vocab" data-cn="臭氧层">ozone layer</span> sits roughly 15–35 kilometres above Earth’s surface, where it absorbs most of the Sun’s harmful <span class="vocab" data-cn="紫外线辐射">ultraviolet radiation</span>. Without this shield, DNA damage would increase dramatically, leading to higher rates of skin cancer, cataracts, and ecosystem disruption. Understanding why a “hole” could appear required careful observation of atmospheric chemistry and dynamics.`,
    `Early observations relied on the <span class="vocab" data-cn="多布森光度计">Dobson spectrophotometer</span>, an instrument that measures how much UV light reaches the ground, indirectly indicating ozone concentration. In the 1980s, satellite missions such as NASA’s <span class="vocab" data-cn="全臭氧映射光谱仪">Total Ozone Mapping Spectrometer (TOMS)</span> provided a global view, confirming that the depletion was not a local anomaly but a seasonal phenomenon confined to the Antarctic spring. Simultaneously, chemists identified <span class="vocab" data-cn="氯氟烃">chloroflu碳化合物 (CFCs)</span> as the primary culprits.</`,
    `The destructive chemistry is surprisingly simple yet devastating. When CFCs rise into the stratosphere, ultraviolet light breaks them apart, releasing chlorine atoms. These atoms enter a <span class="vocab" data-cn="催化循环">catalytic cycle</span> that can destroy thousands of ozone molecules before being deactivated. Over Antarctica, extremely cold temperatures foster the formation of <span class="vocab" data-cn="极地平流层云">polar stratospheric clouds (PSCs)</span>, which provide surfaces for <span class="vocab" data-cn="异相反应">heterogeneous reactions</span> that convert inactive chlorine reservoirs into reactive forms, accelerating the ozone loss each spring.`,
    `The scientific alarm quickly translated into diplomatic action. In 1985, nations gathered in Vienna to adopt the <span class="vocab" data-cn="维也纳公约">Vienna Convention for the Protection of the Ozone Layer</span>, laying groundwork for concrete measures. Two years later, the landmark <span class="vocab" data-cn="蒙特利尔议定书">Montreal Protocol</span> was signed, committing signatories to phase out production of <span class="vocab" data-cn="臭氧消耗物质">ozone‑depleting substances (ODS)</span> such as CFCs and halons. The protocol’s flexibility—allowing adjustments based on scientific assessments—made it a model for future global treaties.`,
    `Decades of compliance have yielded measurable success. Satellite data show that the total column ozone over Antarctica has been slowly recovering, with the hole’s size and depth decreasing since the early 2000s. Scientists describe this trend as a <span class="vocab" data-cn="恢复轨迹">recovery trajectory</span>, though it remains vulnerable to <span class="vocab" data-cn="气候反馈">climate feedbacks</span> that could alter stratospheric temperatures and wind patterns. The ongoing monitoring underscores the importance of sustained international cooperation.` ,
    `Today, attention has shifted to newer compounds. While CFCs have been largely eliminated, their replacements—<span class="vocab" data-cn="氢氟烃">hydroflu碳化合物 (HFCs)</span>—do not harm ozone but are potent greenhouse gases. The 2016 <span class="vocab" data-cn="基加利修正案">Kigali Amendment</span> to the Montreal Protocol added HFCs to the control list, illustrating how the original framework can adapt to emerging challenges. Researchers continue to refine measurement techniques, develop low‑global‑warming alternatives, and model interactions between ozone recovery and climate change.` ,
    `The story of the Antarctic ozone hole reminds us that a single scientific insight, rooted in meticulous fieldwork, can ignite worldwide policy shifts. It demonstrates how transparent data, clear communication, and flexible governance can turn a looming environmental crisis into a success story—offering hope and a blueprint for tackling other global threats such as climate change.` ,
  ],
  vocabulary: [
    { word: 'British Antarctic Survey', cn: '英国南极考察站' },
    { word: 'ozone layer', cn: '臭氧层' },
    { word: 'ultraviolet radiation', cn: '紫外线辐射' },
    { word: 'Dobson spectrophotometer', cn: '多布森光度计' },
    { word: 'Total Ozone Mapping Spectrometer (TOMS)', cn: '全臭氧映射光谱仪' },
    { word: 'chloroflu碳化合物 (CFCs)', cn: '氯氟烃' },
    { word: 'catalytic cycle', cn: '催化循环' },
    { word: 'polar stratospheric clouds (PSCs)', cn: '极地平流层云' },
    { word: 'heterogeneous reactions', cn: '异相反应' },
    { word: 'Vienna Convention for the Protection of the Ozone Layer', cn: '维也纳公约' },
    { word: 'Montreal Protocol', cn: '蒙特利尔议定书' },
    { word: 'ozone‑depleting substances (ODS)', cn: '臭氧消耗物质' },
    { word: 'recovery trajectory', cn: '恢复轨迹' },
    { word: 'climate feedbacks', cn: '气候反馈' },
    { word: 'hydroflu碳化合物 (HFCs)', cn: '氢氟烃' },
    { word: 'Kigali Amendment', cn: '基加利修正案' },
  ],
};

export default article;
