import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of the Modern Refrigerator: How Early Electric Cooling Transformed Daily Life》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00434 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00434',
  slug: 'the-birth-of-the-modern-refrigerator-how-early-electric-cooling-transformed-daily-life',
  title: 'The Birth of the Modern Refrigerator: How Early Electric Cooling Transformed Daily Life',
  subtitle: 'From Iceboxes to Electric Coolers – A Technological Revolution',
  summary: 'Explore how early electric refrigeration reshaped households, food culture, and modern technology.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Before electricity entered the kitchen, families relied on bulky iceboxes that were stocked with harvested ice blocks. The ice had to be delivered regularly, and any delay meant spoiled milk or rotten meat. This fragile supply chain sparked inventors to seek a more reliable way to keep food cold, setting the stage for the first mechanical cooling experiments in the late 19th century.`,
    `In 1876, German engineer <span class="vocab" data-cn="卡尔·冯·林德">Carl von Linde</span> patented a system that used a <span class="vocab" data-cn="压缩机">compressor</span> to pressurize a gas, then allowed it to expand rapidly, absorbing heat in the process. This principle—known as the <span class="vocab" data-cn="热力学循环">thermodynamic cycle</span>—became the foundation of modern refrigeration. Linde’s design originally served breweries and meat-packing plants, where large‑scale cooling was essential.</`,
    `The first household electric refrigerator appeared in the United States during World War I. Inventor Fred W. Wolf introduced the “Domelre” (Domestic Electric Refrigerator) in 1915, which used a simple <span class="vocab" data-cn="制冷剂">refrigerant</span> gas to cool an internal compartment. Though the Domelre was expensive and suffered from leaks, it proved that electric cooling could fit inside a home kitchen. A few years later, General Electric launched the “Monitor‑Top” in 1930, featuring a visible <span class="vocab" data-cn="蒸发器">evaporator</span> coil atop the unit—a design cue that would become iconic for decades.</`,
    `These early models dramatically altered daily life. With reliable cooling, perishable foods could be stored for weeks instead of days, reducing waste and allowing families to buy in bulk. The grocery market shifted from daily fresh‑produce stalls to larger stores where customers could purchase meat, dairy, and fruits that would stay fresh until the weekend. This convenience also spurred the rise of new dishes that depended on chilled ingredients, such as salads and desserts that were previously impractical.</`,
    `Beyond food safety, electric refrigerators reshaped social roles. Women, who traditionally spent hours preserving food by salting, smoking, or canning, found a powerful ally in the refrigerator. The time saved was redirected toward education, employment, or leisure activities, contributing subtly to the broader women’s liberation movement of the early 20th century. Meanwhile, supermarkets capitalized on the ability to stock a wider variety of products, laying groundwork for today’s hyper‑diverse food aisles.</`,
    `Early refrigerants like ammonia and sulfur dioxide were effective but toxic, prompting occasional accidents that made headlines. In the 1930s, chemist Thomas Midgley Jr. introduced <span class="vocab" data-cn="氟利昂">Freon</span>, a chlorofluorocarbon (CFC) that was non‑flammable and odorless, quickly becoming the industry standard. While Freon solved immediate safety concerns, its long‑term environmental impact—ozone depletion—was not discovered until the late 20th century, leading to a new wave of refrigerant research focused on eco‑friendly alternatives.</`,
    `Today’s refrigerators are descendants of those pioneering machines, boasting high‑efficiency <span class="vocab" data-cn="绝缘材料">insulation</span>, digital temperature controls, and even internet connectivity. Yet the core concept remains unchanged: a <span class="vocab" data-cn="压缩机">compressor</span> circulates a <span class="vocab" data-cn="制冷剂">refrigerant</span> through an evaporator to remove heat, preserving food for modern households. Understanding this lineage helps us appreciate how a single technological breakthrough reshaped kitchens, economies, and daily routines worldwide.`,
  ],
  vocabulary: [
    { word: 'compressor', cn: '压缩机' },
    { word: 'refrigerant', cn: '制冷剂' },
    { word: 'thermodynamic cycle', cn: '热力学循环' },
    { word: 'evaporator', cn: '蒸发器' },
    { word: 'insulation', cn: '绝缘材料' },
    { word: 'Freon', cn: '氟利昂' },
  ],
};

export default article;
