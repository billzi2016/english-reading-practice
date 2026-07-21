import type { Article } from '../../types/index.ts';

// 文件意图：维护《Tambora’s 1815 Eruption: The Year Without a Summer and Its Global Impact》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00415 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00415',
  slug: 'tambora-s-1815-eruption-the-year-without-a-summer-and-its-global-impact',
  title: 'Tambora’s 1815 Eruption: The Year Without a Summer and Its Global Impact',
  subtitle: 'How a single volcanic blast reshaped climate, agriculture, and culture worldwide.',
  summary: 'An engaging narrative of the 1815 Tambora eruption, its atmospheric effects, and the cascading global consequences that earned 1816 the nickname “the year without a summer.”',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On April 10‑11 1815, the remote Indonesian island of Sumbawa witnessed one of the most violent <span class="vocab" data-cn="火山">volcano</span> explosions ever recorded. Mount Tambora erupted with a VEI‑7 magnitude, blasting an estimated 160 cubic kilometres of magma and rock into the sky. The blast was heard over 2 000 kilometres away, and the resulting ash cloud darkened the island for weeks, killing tens of thousands of locals before any foreign observer could even confirm what had happened.`,
    `The immediate devastation was catastrophic. Pyroclastic flows—fast‑moving avalanches of hot gas and volcanic debris—swept down Tambora’s slopes at speeds exceeding 100 km/h, incinerating villages and flattening forests. Survivors faced a landscape covered in meters‑deep ash, which rendered the soil sterile and contaminated water sources with acidic runoff. Within months, disease outbreaks such as dysentery claimed additional lives, turning the disaster into a humanitarian crisis that overwhelmed nearby colonial outposts.`,
    `What made Tambora’s eruption truly global was its injection of massive quantities of <span class="vocab" data-cn="硫磺气溶胶">sulfur aerosol</span> into the stratosphere. These fine particles reflected sunlight back into space, reducing the amount of solar energy reaching Earth’s surface. Climate scientists later estimated that the aerosol veil lowered global average temperatures by about 0.4‑0.7 °C for several years—a seemingly modest drop that nevertheless triggered profound <span class="vocab" data-cn="气候异常">climate anomalies</span> across continents.`,
    `The year following the eruption, 1816, entered history as “the year without a summer.” In Europe and North America, June brought snow in the Alps, frost in May, and persistent <span class="vocab" data_cn="冰雾">dry fog</span> that dimmed daylight. Rivers froze earlier than usual, and frosts damaged budding crops even in regions as far south as Spain and Virginia. Contemporary newspapers reported “unseasonable cold” and “persistent rain,” while diaries described evenings where people needed candles despite it being July.`,
    `Agricultural societies suffered dramatically. The shortened growing season led to widespread <span class="vocab" data-cn="作物歉收">crop failure</span>, especially of staple grains like wheat and rye. In Ireland, the poor harvest compounded existing economic hardship, while in New England, food prices doubled within months. Famine forced families to migrate, and governments faced mounting pressure to import grain. The scarcity sparked <span class="vocab" data-cn="社会动荡">social unrest</span>, with riots breaking out in several European towns as people protested the soaring cost of bread.`,
    `Scientists of the era were initially baffled by these synchronized weather patterns. It was not until the mid‑19th century that researchers such as Charles Lyell and later, in the 20th century, climatologists like James Hansen began to link volcanic aerosols with short‑term cooling. The Tambora event became a cornerstone case study for understanding how sudden injections of particles can perturb the climate system—a lesson that informs modern assessments of geoengineering proposals.`,
    `The cultural ripple effects were equally striking. The gloomy weather inspired literary masterpieces; Mary Shelley, confined indoors by relentless rain in Switzerland, penned “Frankenstein” during this bleak summer. Similarly, Lord Byron’s poem “Darkness” reflects the pervasive sense of dread that the cold and darkness evoked across Europe. These works illustrate how a geological event can shape artistic expression as powerfully as it reshapes weather.`,
    `Today, Tambora serves as both a warning and a benchmark. Modern volcano monitoring networks—satellite‑based aerosol tracking, seismic arrays, and gas emission sensors—allow scientists to detect eruptions early and model their climatic impact in near real time. The 1815 eruption reminds us that Earth’s systems are tightly coupled: a single <span class="vocab" data-cn="volcanic">volcano</span> can alter global temperature, food security, and even the course of literature within a generation.`,
  ],
  vocabulary: [
    { word: 'volcano', cn: '火山' },
    { word: 'sulfur aerosol', cn: '硫磺气溶胶' },
    { word: 'climate anomaly', cn: '气候异常' },
    { word: 'dry fog', cn: '冰雾' },
    { word: 'crop failure', cn: '作物歉收' },
    { word: 'social unrest', cn: '社会动荡' },
  ],
};

export default article;
