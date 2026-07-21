import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Laki Eruption of 1783: Iceland’s Volcanic Disaster and Its Global Climate Impact》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00486 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00486',
  slug: 'the-laki-eruption-of-1783-iceland-s-volcanic-disaster-and-its-global-climate-impact',
  title: 'The Laki Eruption of 1783: Iceland’s Volcanic Disaster and Its Global Climate Impact',
  subtitle: 'How a single fissure eruption reshaped weather patterns across the Northern Hemisphere',
  summary: 'An exploration of the 1783 Laki eruption, its devastating local effects, and the far‑reaching climatic consequences that followed.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In June 1783, a seemingly quiet ridge in Iceland’s southeast turned into one of the most violent volcanic events in recorded history. The Laki volcanic system, part of the larger Grímsvötn‑Laki complex, erupted along a 27‑kilometre (≈17‑mile) fissure line. This “<span class="vocab" data-cn="裂缝喷发">fissure eruption</span>” released an unprecedented volume of lava—estimated at 14 cubic kilometres—covering vast swathes of the barren highlands and reshaping the island’s landscape forever.`,
    `What made Laki especially dangerous was not just the molten rock, but the massive plume of gases that rose thousands of metres into the atmosphere. Scientists have calculated that the eruption emitted roughly 120 million tonnes of <span class="vocab" data-cn="二氧化硫">sulfur dioxide</span> (SO₂), along with hydrochloric acid and fluorine compounds. These gases quickly combined with water vapour to form fine <span class="vocab" data-cn="气溶胶">aerosol</span> particles, creating a dense, acidic haze that drifted far beyond Iceland’s shores.`,
    `The immediate impact on the island was catastrophic. The toxic fog—locally called “the mist of death”—caused severe respiratory problems for anyone exposed. Livestock perished in staggering numbers; historians estimate that up to 50 % of Iceland’s cattle, sheep and horses died within months, plunging a largely agrarian society into famine. Contemporary accounts describe villages abandoned as families fled the poisonous air, while many who stayed succumbed to “Laki fever,” a term used for the combination of lung irritation, skin rashes, and high fevers that swept through the population.`,
    `As the plume travelled eastward over Europe, it altered sunlight penetration on a continental scale. The aerosol cloud reflected and scattered incoming solar radiation, leading to noticeably dimmer skies and cooler daytime temperatures. In the winter of 1783‑84, parts of Britain experienced an unprecedented “<span class="vocab" data-cn="火山冬季">volcanic winter</span>” with snow falling in June and rivers freezing over. Contemporary weather diaries record temperature drops of up to 2 °C (≈3.6 °F) compared with the previous decade, a shift that modern climatologists attribute directly to Laki’s atmospheric load.`,
    `The climatic shockwaves extended far beyond Europe. In North America, the harsh winter contributed to crop failures in New England and the Canadian Maritimes, exacerbating food shortages already strained by the Revolutionary War. Historical records from France note an unusually early frost that damaged vineyards, while in Russia a severe summer heatwave—paradoxically linked to altered atmospheric circulation—followed by a sudden cold snap led to widespread grain loss. These agricultural crises sparked social unrest, price spikes, and even contributed to political instability in several European states.`,
    `Laki’s eruption became a cornerstone case study for the emerging field of <span class="vocab" data-cn="气候学">climatology</span>. Early scientists such as Georges‑Louis Leclerc, Comte de Buffon, noted the correlation between volcanic activity and weather anomalies, but it was not until the 20th century that systematic atmospheric monitoring confirmed the mechanisms. Modern climate models now routinely incorporate volcanic aerosol forcing to simulate past events, using Laki as a benchmark for how large sulfur emissions can temporarily cool the planet.`,
    `Today, Iceland’s volcanoes are closely watched by an international network of seismometers and satellite sensors. The lessons from 1783 remind us that a single eruption can ripple through ecosystems, economies, and societies across the globe. By understanding the chain of cause and effect—from fissure eruption to aerosol formation, from local famine to worldwide climate perturbation—scientists hope to better predict and mitigate the impacts of future volcanic disasters.`,
  ],
  vocabulary: [
    { word: 'fissure eruption', cn: '裂缝喷发' },
    { word: 'sulfur dioxide', cn: '二氧化硫' },
    { word: 'aerosol', cn: '气溶胶' },
    { word: 'volcanic winter', cn: '火山冬季' },
    { word: 'climatology', cn: '气候学' },
    { word: 'crop failure', cn: '作物歉收' },
  ],
};

export default article;
