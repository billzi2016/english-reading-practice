import type { Article } from '../../types/index.ts';

// 文件意图：维护《Charles Keeling’s Quest to Measure Carbon Dioxide: The Birth of Modern Climate Science》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00286 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00286',
  slug: 'charles-keeling-s-quest-to-measure-carbon-dioxide-the-birth-of-modern-climate-science',
  title: 'Charles Keeling’s Quest to Measure Carbon Dioxide: The Birth of Modern Climate Science',
  subtitle: 'How a single scientist turned a remote Hawaiian peak into the world’s most trusted climate gauge.',
  summary: 'The story of Charles Keeling, his pioneering CO₂ measurements at Mauna Loa, and why they sparked modern climate science.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1958, a young chemist named <span class="vocab" data-cn="查尔斯·基林">Charles Keeling</span> arrived at the summit of Mauna Loa, a dormant volcano rising more than 13,000 feet above sea level on the island of Hawai‘i. The location was chosen not for its beauty but because the thin, stable air above the cloud layer offered an almost pristine sample of the global atmosphere, far from local pollution sources. Keeling’s mission was simple yet audacious: to record the <span class="vocab" data-cn="二氧化碳">carbon dioxide</span> concentration in real time and see whether it truly changed over years.`,
    `Back then, most scientists relied on sporadic chemical analyses of air trapped in ice cores or on occasional shipboard measurements. Keeling introduced a continuous monitoring system based on an infrared <span class="vocab" data-cn="分光光度计">spectrophotometer</span> that measured how much infrared light was absorbed by CO₂ molecules as the gas passed through a sealed cell. Each absorption event translated into a precise concentration reading, expressed in parts per million (ppm). The instrument required meticulous <span class="vocab" data-cn="校准">calibration</span> against known standards, a task made difficult by the remote location and the harsh volcanic environment.`,
    `The first months of data revealed something unexpected: instead of a flat line, the CO₂ record showed a regular rise and fall each year. Keeling realized this seasonal swing was driven by the planet’s “breathing” – plants absorbing CO₂ during the Northern Hemisphere’s spring and summer, then releasing it in autumn and winter when they decay. This pattern, now known as the <span class="vocab" data-cn="季节振荡">seasonal oscillation</span>, provided the first clear evidence that the biosphere could modulate atmospheric composition on a global scale.`,
    `More striking was the upward trend hidden beneath the seasonal wiggle. From an average of about 315 ppm in 1958, the curve climbed steadily year after year. Keeling’s careful record‑keeping showed that by the early 1970s the global average had already surpassed 330 ppm. This incremental rise, later dubbed the <span class="vocab" data-cn="基林曲线">Keeling Curve</span>, became a cornerstone for climate research because it offered indisputable proof that humanity was adding greenhouse gases to the atmosphere faster than natural processes could remove them.`,
    `The significance of Keeling’s work extended beyond raw numbers. By establishing a reliable, long‑term dataset, he enabled scientists to quantify <span class="vocab" data-cn="辐射强迫">radiative forcing</span> – the imbalance between incoming solar energy and outgoing infrared radiation caused by increased greenhouse gases. This metric is now central to climate models that predict future warming scenarios. Moreover, Keeling’s methodology inspired a network of monitoring stations worldwide, from the South Pole to the Amazon, creating a global tapestry of atmospheric observations that underpins today’s IPCC assessments.`,
    `Keeling also pioneered <span class="vocab" data-cn="同位素分析">isotopic analysis</span> of carbon in CO₂. By measuring ratios of ^13C/^12C and ^14C/^12C, he could distinguish between fossil‑fuel emissions (which are depleted in ^14C) and natural sources. This subtle fingerprinting provided early evidence that the rising CO₂ was indeed anthropogenic, reinforcing the link between industrial activity and climate change long before it entered public discourse.`,
    `Decades after his first sunrise at Mauna Loa, Keeling’s legacy lives on. The continuous record he started now spans more than six decades, showing the atmosphere climb past 420 ppm in the 2020s – a level unseen for millions of years. His dedication turned a solitary mountain outpost into the beating heart of modern climate science, reminding us that precise measurement and patient observation can illuminate the most profound challenges facing our planet.`,
  ],
  vocabulary: [
    { word: 'Charles Keeling', cn: '查尔斯·基林' },
    { word: 'carbon dioxide', cn: '二氧化碳' },
    { word: 'spectrophotometer', cn: '分光光度计' },
    { word: 'calibration', cn: '校准' },
    { word: 'seasonal oscillation', cn: '季节振荡' },
    { word: 'Keeling Curve', cn: '基林曲线' },
    { word: 'radiative forcing', cn: '辐射强迫' },
    { word: 'isotopic analysis', cn: '同位素分析' },
  ],
};

export default article;
