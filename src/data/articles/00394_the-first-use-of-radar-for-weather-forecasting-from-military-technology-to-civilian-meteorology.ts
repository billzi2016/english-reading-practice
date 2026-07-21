import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Use of Radar for Weather Forecasting: From Military Technology to Civilian Meteorology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00394 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00394',
  slug: 'the-first-use-of-radar-for-weather-forecasting-from-military-technology-to-civilian-meteorology',
  title: 'The First Use of Radar for Weather Forecasting: From Military Technology to Civilian Meteorology',
  subtitle: 'How wartime detection became a cornerstone of modern weather prediction',
  summary: 'A narrative tracing radar’s transition from military surveillance to the first civilian weather‑forecasting applications.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1930s, British physicist <span class="vocab" data-cn="罗伯特·沃森-瓦特">Robert Watson‑Watts</span> was tasked with detecting incoming aircraft for national defense. While experimenting with radio waves, his team noticed that strong echoes returned not only from metal objects but also from dense cloud formations. This accidental observation hinted at a new civilian use: <span class="vocab" data-cn="雷达">radar</span> could “see” the atmosphere itself.`,
    `The first systematic test of weather radar took place on 26 February 1935, when Watson‑Watts pointed his prototype antenna toward a storm over the English Channel. The instrument recorded a bright return that corresponded to a line of rain clouds moving inland. By comparing the signal strength with visual observations, he demonstrated that radar could measure <span class="vocab" data-cn="反射率">reflectivity</span>, a property directly related to precipitation intensity.`,
    `During World War II, the military refined radar for air‑defense and naval purposes, but parallel research continued in meteorology. In 1940, the United Kingdom’s <span class="vocab" data-cn="气象局">Met Office</span> installed a chain of “Chain Home” receivers along the coast, originally built to spot enemy aircraft. Meteorologists quickly realized that these stations produced continuous maps of rain and snow, providing real‑time data far beyond what ground observers could offer.`,
    `Across the Atlantic, the United States Army’s Signal Corps began experimenting with weather radar in 1942 at the MIT Radiation Laboratory. Their first operational system, known as “Project M”, used a 10‑centimeter wavelength to detect precipitation over the Midwest. By late 1944, the Army Air Forces were issuing daily weather briefings that included radar‑derived rain maps, marking the first large‑scale civilian use of the technology.`,
    `A pivotal breakthrough came in 1952 when the U.S. Weather Bureau (now the National Weather Service) deployed the WSR‑1 network—its first dedicated weather‑radar stations. These radars employed the <span class="vocab" data-cn="多普勒效应">Doppler effect</span> to measure not only the intensity of precipitation but also the velocity of raindrops, allowing forecasters to infer wind patterns within storms. This capability proved essential for tracking severe weather such as tornadoes and hurricanes.`,
    `The transition from military to civilian radar was not merely technical; it required a cultural shift in how meteorologists interpreted data. Early forecasters had to learn to read “radar signatures” like the towering <span class="vocab" data-cn="积雨云">cumulonimbus</span> cores that indicated deep convection, and to distinguish between true precipitation echoes and ground clutter. By the 1960s, training programs at universities integrated radar theory into standard meteorology curricula.`,
    `Today, modern weather radars operate on wavelengths ranging from S‑band (10 cm) to C‑band (5 cm), delivering high‑resolution images every few minutes. The original concept—using radio waves to detect atmospheric particles—remains unchanged, but advances such as dual‑polarization and phased‑array antennas have dramatically improved accuracy. The legacy of those early wartime experiments lives on in the daily forecasts that help millions plan their activities and stay safe from severe weather.`,
  ],
  vocabulary: [
    { word: 'Robert Watson‑Watts', cn: '罗伯特·沃森-瓦特' },
    { word: 'radar', cn: '雷达' },
    { word: 'reflectivity', cn: '反射率' },
    { word: 'Met Office', cn: '气象局' },
    { word: 'Doppler effect', cn: '多普勒效应' },
    { word: 'cumulonimbus', cn: '积雨云' },
  ],
};

export default article;
