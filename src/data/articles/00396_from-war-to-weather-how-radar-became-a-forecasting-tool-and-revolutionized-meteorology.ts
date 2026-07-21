import type { Article } from '../../types/index.ts';

// 文件意图：维护《From War to Weather: How Radar Became a Forecasting Tool and Revolutionized Meteorology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00396 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00396',
  slug: 'from-war-to-weather-how-radar-became-a-forecasting-tool-and-revolutionized-meteorology',
  title: 'From War to Weather: How Radar Became a Forecasting Tool and Revolutionized Meteorology',
  subtitle: 'Tracing the military origins of radar and its peaceful transformation into a cornerstone of modern weather prediction.',
  summary: 'Explore how wartime radar technology was repurposed for meteorology, reshaping our ability to forecast storms and climate patterns.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the mid‑1930s, a young British physicist named Sir Robert Watson‑Watts demonstrated that radio waves could be bounced off distant objects, coining the term <span class="vocab" data-cn="雷达">radar</span>. His breakthrough was driven by a pressing military need: to detect incoming aircraft before they vanished beyond visual range. By 1938, Britain had deployed a network of early‑warning stations along its coast, turning invisible electromagnetic pulses into a strategic shield against aerial attack.`,
    `The outbreak of World War II accelerated radar development at an unprecedented pace. Engineers refined the <span class="vocab" data-cn="微波">microwave</span> frequencies used, increased transmitter power, and introduced rotating antennas that could sweep the sky in seconds. These advances produced clearer “blips” on cathode‑ray tube displays, allowing operators to track enemy bombers with remarkable accuracy. Yet, amid the chaos of war, a curious observation emerged: the same echoes that revealed aircraft also lit up clouds and precipitation.`,
    `In 1941, an American researcher at the MIT Radiation Laboratory noticed that heavy rain produced strong returns on his experimental set‑up. He hypothesized that atmospheric particles—raindrops, hailstones, even snowflakes—could act as natural reflectors of radio waves. This insight sparked a series of field experiments across the United States, where military radar units were temporarily repurposed to scan storm systems over the Midwest. The results were striking: radar could map the structure of thunderstorms in real time, something no ground‑based observer could achieve.`,
    `After the war, the U.S. Weather Bureau (now the National Weather Service) seized the opportunity to convert surplus military radars into permanent weather stations. By 1949, a network of <span class="vocab" data-cn="气象雷达">weather radar</span> sites was operational along the coasts, providing the first systematic view of rain bands moving inland. These early systems relied on simple reflectivity measurements—essentially the strength of the returned signal—to estimate rainfall intensity. Though crude by today’s standards, they already proved invaluable for issuing flood warnings and guiding aviation routes.`,
    `The 1950s brought a scientific breakthrough that deepened radar’s meteorological utility: the <span class="vocab" data-cn="多普勒效应">Doppler effect</span>. By measuring the slight frequency shift of returned pulses, engineers could infer the velocity of raindrops toward or away from the radar. This capability allowed forecasters to detect rotation within supercell thunderstorms—a key precursor to tornado formation—well before any visual signs appeared on the ground. The first operational Doppler weather radars were installed in the United States during the late 1970s, marking a paradigm shift in severe‑weather prediction.`,
    `Modern radar systems have become even more sophisticated. <span class="vocab" data-cn="双极化技术">Dual‑polarization</span> transmits both horizontal and vertical pulses, enabling algorithms to differentiate between rain, hail, snow, and even non‑meteorological targets like birds or insects. Meanwhile, advances in computing power allow real‑time processing of massive data streams, producing high‑resolution products such as <span class="vocab" data-cn="反射率">reflectivity</span> mosaics, velocity fields, and specific‑differential phase (KDP) maps that reveal microphysical properties of storms. These tools are now integral to daily forecasts, emergency management, and climate research.`,
    `The journey from wartime surveillance to peaceful forecasting illustrates how a technology born of conflict can be redirected toward the public good. Radar’s ability to peer into the atmosphere has not only saved countless lives by improving warning times for hurricanes, tornadoes, and flash floods, but it also continues to inspire new scientific questions about atmospheric dynamics. As researchers explore next‑generation concepts—such as phased‑array radars that can steer beams electronically in milliseconds—the legacy of those early wartime engineers endures, reminding us that innovation often thrives at the intersection of necessity and curiosity.`
  ],
  vocabulary: [
    { word: 'radar', cn: '雷达' },
    { word: 'microwave', cn: '微波' },
    { word: 'weather radar', cn: '气象雷达' },
    { word: 'Doppler effect', cn: '多普勒效应' },
    { word: 'dual-polarization', cn: '双极化技术' },
    { word: 'reflectivity', cn: '反射率' }
  ],
};

export default article;
