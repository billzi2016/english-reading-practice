import type { Article } from '../../types/index.ts';

// 文件意图：维护《Rudolf Diesel’s Revolutionary Engine: The Birth and Legacy of the First Practical Diesel Powerplant》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00361 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00361',
  slug: 'rudolf-diesel-s-revolutionary-engine-the-birth-and-legacy-of-the-first-practical-diesel-powerplant',
  title: 'Rudolf Diesel’s Revolutionary Engine: The Birth and Legacy of the First Practical Diesel Powerplant',
  subtitle: 'How a German inventor reshaped energy conversion in the late 19th century',
  summary: 'Explore the scientific breakthroughs, engineering challenges, and lasting impact of Rudolf Diesel’s first practical diesel engine.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1892, a modest workshop in Augsburg, Germany, became the stage for a breakthrough that would alter the course of industrial power. Rudolf <span class="vocab" data-cn="柴油机">Diesel</span> unveiled his first working prototype—a compact <span class="vocab" data-cn="内燃机">internal combustion engine</span> that ran on a principle he called “compression ignition.” Unlike the spark‑ignited engines of his day, Diesel’s machine relied on compressing air to such high pressures that fuel injected into the cylinder would spontaneously ignite, promising far greater <span class="vocab" data-cn="热效率">thermodynamic efficiency</span>.`,
    `The core of Diesel’s design was deceptively simple: a sturdy steel block housing a single <span class="vocab" data-cn="活塞">piston</span> connected to a massive <span class="vocab" data-cn="曲轴">crankshaft</span>. As the piston rose, it drew in air; then, using a manually operated lever, the operator would force the piston down, compressing the trapped air to roughly 30–40 bar. At this pressure, the temperature of the air surged above 500 °C, enough to ignite the fuel without any spark plug. This process not only eliminated the need for complex ignition systems but also allowed the engine to extract more work from each unit of fuel.`,
    `Diesel’s early experiments were fraught with practical hurdles. The first prototype suffered from severe vibration and uneven combustion, leading to frequent overheating. To address these issues, Diesel introduced a refined <span class="vocab" data-cn="燃油喷射">fuel injection</span> system that delivered a fine mist of oil directly into the hot compressed air at precisely the right moment. This innovation dramatically improved the smoothness of power delivery and reduced soot formation—a problem that had plagued earlier attempts at high‑compression engines.`,
    `By 1897, Diesel’s perseverance paid off when he secured a contract with the Maschinenfabrik Augsburg-Nürnberg (MAN) to build a larger, industrial‑scale engine. This version featured multiple cylinders arranged in a “four‑stroke” cycle, each equipped with its own injection pump. The engine could generate over 100 horsepower and ran on a variety of fuels—from coal‑derived oil to vegetable oils—demonstrating the versatility that Diesel had envisioned. Its success attracted attention from shipbuilders, railways, and power plants worldwide.`,
    `One often overlooked aspect of Diesel’s legacy is his emphasis on fuel quality. He introduced the concept of the <span class="vocab" data-cn="十六烷值">cetane number</span>, a metric that quantifies how readily a fuel will ignite under compression. A higher cetane number means smoother ignition and less knocking, which became a critical standard for diesel fuels throughout the 20th century. This focus on fuel characteristics helped shape global refining practices and ensured that diesel engines could operate reliably across diverse climates and applications.`,
    `The impact of Diesel’s engine extended far beyond its immediate mechanical advantages. Its superior efficiency—often exceeding 40 % compared to the 20–30 % typical of gasoline engines—made it a cornerstone for heavy‑duty transportation, maritime propulsion, and stationary power generation. During both World Wars, diesel-powered submarines and trucks proved decisive due to their longer range and lower fuel consumption. In the post‑war era, diesel locomotives dominated rail networks, while large‑scale generators supplied electricity to burgeoning industrial cities.`,
    `Today, modern diesel engines incorporate electronic control units, high‑pressure common‑rail injection, and turbocharging—technologies that trace their lineage back to Diesel’s original principles. While concerns about emissions have spurred the development of cleaner alternatives, advances such as selective catalytic reduction (SCR) and particulate filters have allowed contemporary diesels to meet stringent environmental standards. Rudolf Diesel’s vision of a robust, efficient powerplant endures, reminding us that a single inventive idea can ripple through more than a century of technological evolution.`,
  ],
  vocabulary: [
    { word: 'diesel', cn: '柴油机' },
    { word: 'internal combustion engine', cn: '内燃机' },
    { word: 'thermodynamic efficiency', cn: '热效率' },
    { word: 'piston', cn: '活塞' },
    { word: 'crankshaft', cn: '曲轴' },
    { word: 'fuel injection', cn: '燃油喷射' },
    { word: 'cetane number', cn: '十六烷值' },
  ],
};

export default article;
