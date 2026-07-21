import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Ozone Hole Over Antarctica: From 1985 Discovery to International Environmental Action》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00436 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00436',
  slug: 'the-ozone-hole-over-antarctica-from-1985-discovery-to-international-environmental-action',
  title: 'The Ozone Hole Over Antarctica: From 1985 Discovery to International Environmental Action',
  subtitle: 'How a thin patch of sky sparked global cooperation',
  summary: 'A narrative of the Antarctic ozone hole’s discovery, scientific explanation, and the worldwide policy response that began in 1987.',
  category: 'environment',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In early 1985, a team from the British Antarctic Survey flying over the South Pole noticed something alarming on their spectrometer read‑outs. The instrument showed an abrupt drop in ultraviolet absorption, indicating that the protective <span class="vocab" data-cn="臭氧层">ozone layer</span> above Antarctica was far thinner than expected. By comparing these measurements with satellite data from NASA’s TOMS (Total Ozone Mapping Spectrometer), scientists confirmed a “hole” that appeared each spring and vanished in summer, marking the first concrete evidence of large‑scale ozone depletion.`,
    `The chemistry behind this phenomenon is both elegant and destructive. When <span class="vocab" data-cn="氯氟烃">chlorofluorocarbons (CFCs)</span> released from refrigerants or aerosol sprays rise into the <span class="vocab" data-cn="平流层">stratosphere</span>, they are broken apart by ultraviolet light in a process called <span class="vocab" data-cn="光解作用">photolysis</span>. This releases chlorine atoms, which act as catalysts: each chlorine can destroy thousands of ozone molecules by converting them into oxygen, thinning the layer that normally absorbs harmful solar radiation. The result is an increase in ground‑level <span class="vocab" data-cn="紫外线B辐射">UV‑B radiation</span>, a known risk factor for skin cancer and cataracts.`,

    `Why does the hole form only over Antarctica? The answer lies in the unique dynamics of the polar vortex, a massive cyclonic wind system that encircles the continent during winter. Inside this vortex, temperatures drop below –78 °C, allowing the formation of polar stratospheric clouds (PSCs). These clouds provide surfaces for heterogeneous reactions that convert inactive chlorine reservoirs into reactive chlorine radicals. When sunlight returns in September, these radicals rapidly attack ozone, carving out a hole that can span over 20 million square kilometers at its peak.`,

    `The scientific community responded swiftly. In 1987, the Vienna Convention for the Protection of the Ozone Layer was adopted, providing a diplomatic framework for future action. At the same time, alarming headlines in newspapers worldwide raised public awareness, turning a once‑technical issue into a global concern. Researchers presented their findings at the International Conference on Atmospheric Chemistry, urging policymakers to act before irreversible damage set in.`,

    `That urgency culminated in the historic <span class="vocab" data-cn="蒙特利尔议定书">Montreal Protocol</span>. Signed in September 1987, the treaty committed signatories to phase out production of CFCs and other ozone‑depleting substances (ODS). The agreement was remarkable for its flexibility: it included a schedule of gradual reductions, provisions for developing countries, and mechanisms for periodic review. Subsequent amendments—London (1990), Copenhagen (1992), and Kigali (2016)—tightened controls and added new classes of chemicals such as hydrofluorocarbons (HFCs).`,

    `Four decades later, monitoring data show a clear trend of recovery. The World Meteorological Organization’s Global Ozone Monitoring Programme reports that the average size of the Antarctic ozone hole has shrunk by roughly 30 % since its peak in the early 2000s. Moreover, concentrations of atmospheric chlorine have declined steadily, reflecting the success of the protocol’s phase‑out schedule. While a complete return to pre‑1980 levels will likely take until the middle of this century, the trajectory demonstrates that coordinated international policy can reverse even large‑scale environmental damage.`,

    `Nevertheless, challenges remain. Climate change alters stratospheric temperatures and may affect vortex dynamics, potentially influencing future ozone recovery rates. Additionally, illegal production of banned ODS still occurs in some regions, requiring vigilant enforcement. Scientists continue to refine climate‑chemistry models to predict interactions between greenhouse gases and ozone chemistry. The story of the Antarctic ozone hole thus serves as both a cautionary tale and an inspiring example of how science, public awareness, and diplomacy can converge to protect our planet’s fragile shield.`,
  ],
  vocabulary: [
    { word: 'ozone layer', cn: '臭氧层' },
    { word: 'chlorofluorocarbons (CFCs)', cn: '氯氟烃' },
    { word: 'stratosphere', cn: '平流层' },
    { word: 'photolysis', cn: '光解作用' },
    { word: 'UV‑B radiation', cn: '紫外线B辐射' },
    { word: 'polar vortex', cn: '极地涡旋' },
    { word: 'Montreal Protocol', cn: '蒙特利尔议定书' },
  ],
};

export default article;
