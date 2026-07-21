import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Kola Superdeep Borehole: Drilling Toward Earth’s Secrets and the Unexpected Findings》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00084 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00084',
  slug: 'the-kola-superdeep-borehole-drilling-toward-earth-s-secrets-and-the-unexpected-findings',
  title: 'The Kola Superdeep Borehole: Drilling Toward Earth’s Secrets and the Unexpected Findings',
  subtitle: 'A Journey into the Deepest Man‑Made Hole on Earth',
  summary: 'Explore how Soviet scientists pushed drilling technology to its limits, what they discovered deep beneath the crust, and why those findings still intrigue geologists today.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1970s a team of Soviet geophysicists set out to answer one simple yet profound question: how far can we drill into solid rock before nature says “stop”? Their answer was the <span class="vocab" data-cn="科拉超深钻孔">Kola Superdeep Borehole</span>, a vertical shaft that would eventually plunge more than twelve kilometres beneath the surface of the Kola Peninsula, making it the deepest artificial point on Earth.`,
    `The project began at the tiny village of Pechengsky, where a modest drilling rig was upgraded with custom‑made <span class="vocab" data-cn="钻头">drill bits</span> forged from tungsten carbide. Each new bit had to withstand temperatures exceeding 180 °C and pressures that would crush ordinary steel. Engineers also installed a sophisticated <span class="vocab" data-cn="测温仪">thermometer</span> system capable of recording the <span class="vocab" data-cn="地热梯度">geothermal gradient</span> in real time, allowing them to adjust drilling speed as the rock grew hotter and more resistant.`,
    `By 1989 the borehole had reached a depth of 12 262 metres, surpassing all previous records. Yet the deeper they went, the more unexpected the data became. Core samples revealed layers of pristine <span class="vocab" data-cn="花岗岩">granite</span> interspersed with thin sheets of metamorphic rock that should have formed at much shallower depths. This contradicted prevailing models that assumed a smooth transition from crust to mantle, suggesting instead that the Earth’s interior is far more heterogeneous than imagined.`,
    `One of the most startling discoveries was the presence of microscopic <span class="vocab" data-cn="微生物">microfossils</span> and organic compounds at depths where temperatures were thought too high for life to survive. These findings sparked a heated debate: were these remnants of ancient surface organisms that had been carried down by <span class="vocab" data-cn="水热循环">hydrothermal circulation</span>, or did they hint at a previously unknown deep biosphere? Subsequent laboratory analyses leaned toward the former, showing that mineral veins could act as conduits for fluids transporting organic material far below the surface.`,
    `The borehole also provided an unprecedented look at seismic wave behavior. By placing sensitive geophones along the shaft, scientists recorded how P‑waves and S‑waves changed speed when passing through different rock types. The data helped refine global models of earthquake propagation and even contributed to the development of more accurate <span class="vocab" data-cn="地震预报">seismic forecasting</span> techniques used today.`,
    `Despite its scientific triumphs, the project faced mounting political and financial pressures as the Soviet Union approached collapse. Funding dried up, and by 1992 drilling was officially halted. The shaft was later sealed, but the core samples remain stored in Russian research institutes, still being re‑examined with modern analytical tools such as electron microscopy and isotope ratio mass spectrometry.`,
    `Today, the Kola Superdeep Borehole stands as a testament to human curiosity and engineering daring. Its legacy lives on in contemporary deep‑drilling initiatives like the International Continental Scientific Drilling Program (ICDP), which aim to replicate its success while employing newer technologies such as rotary steerable systems and real‑time downhole imaging. The unexpected findings from Kola continue to remind geologists that the Earth still holds many secrets, waiting for the next generation of explorers to uncover them.`,
  ],
  vocabulary: [
    { word: 'Kola Superdeep Borehole', cn: '科拉超深钻孔' },
    { word: 'drill bits', cn: '钻头' },
    { word: 'thermometer', cn: '测温仪' },
    { word: 'geothermal gradient', cn: '地热梯度' },
    { word: 'granite', cn: '花岗岩' },
    { word: 'microfossils', cn: '微生物' },
    { word: 'hydrothermal circulation', cn: '水热循环' },
    { word: 'seismic forecasting', cn: '地震预报' },
  ],
};

export default article;
