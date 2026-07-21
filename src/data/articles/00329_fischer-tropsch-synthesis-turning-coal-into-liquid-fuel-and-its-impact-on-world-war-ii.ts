import type { Article } from '../../types/index.ts';

// 文件意图：维护《Fischer–Tropsch Synthesis: Turning Coal into Liquid Fuel and Its Impact on World War II》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00329 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00329',
  slug: 'fischer-tropsch-synthesis-turning-coal-into-liquid-fuel-and-its-impact-on-world-war-ii',
  title: 'Fischer–Tropsch Synthesis: Turning Coal into Liquid Fuel and Its Impact on World War II',
  subtitle: 'How a German chemical breakthrough reshaped wartime logistics',
  summary: 'An engaging story of how the Fischer–Tropsch process turned coal into fuel and altered the course of WWII.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the world plunged into conflict in 1939, both the Axis and Allied powers faced a looming crisis: a shortage of high‑octane gasoline for aircraft and tanks. While oil‑rich nations like the United States could rely on conventional petroleum, Germany and Japan were hemmed in by limited access to crude oil. This scarcity forced them to look for alternatives, and one German invention—originally developed during the interwar years—became a strategic lifeline.`,
    `The breakthrough came from two chemists at BASF: Franz Fischer and Hans Tropsch. In the early 1920s they devised what is now known as <span class="vocab" data-cn="费托合成">Fischer–Tropsch synthesis</span>, a method that converts a mixture of carbon monoxide and hydrogen—collectively called <span class="vocab" data-cn="合成气">syngas</span>—into long‑chain hydrocarbons. Their work was part of a broader German effort to master <span class="vocab" data-cn="煤液化">coal liquefaction</span>, turning abundant coal reserves into usable fuels.</`,
    `The chemistry behind the process is deceptively simple yet technically demanding. First, coal is gasified in high‑temperature reactors, producing syngas through the so‑called Linde or Bergius methods. This gas then passes over a finely powdered <span class="vocab" data-cn="催化剂">catalyst</span>, typically iron or cobalt, at temperatures between 200 °C and 350 °C. Under these conditions, carbon monoxide and hydrogen undergo repeated <span class="vocab" data-cn="加氢">hydrogenation</span> reactions, stitching together carbon atoms into chains that can be refined into diesel, gasoline, or even waxes—collectively referred to as <span class="vocab" data-cn="合成燃料">synthetic fuel</span>.`,
    `By the late 1930s, Germany had built several large‑scale plants at locations such as Leuna and Hugo. These facilities supplied a substantial portion of the Luftwaffe’s aviation gasoline, allowing German bombers to operate far from friendly ports. Historians estimate that at the height of the war, up to 40 % of Germany’s total fuel consumption came from Fischer–Tropsch output. This self‑sufficiency prolonged the conflict, as Allied forces could not simply starve the German war machine by blockading oil shipments.`,
    `The Allies soon recognized the strategic importance of synthetic fuels and launched their own research programs. In the United States, the Synthetic Liquid Fuels Program, overseen by the Office of Scientific Research and Development, constructed pilot plants in Alabama and Texas that replicated the Fischer–Tropsch route using domestic coal reserves. Although these American facilities never reached the scale of German operations during the war, they demonstrated that large‑scale <span class="vocab" data-cn="合成燃料">synthetic fuel</span> production was technically feasible for a nation with abundant coal but limited oil.`,
    `After 1945, the technology did not disappear. The Cold War era saw renewed interest in Fischer–Tropsch as both superpowers explored ways to diversify energy sources. In the 1970s and 1980s, companies such as Sasol in South Africa and later Shell in Qatar refined the process into modern “gas‑to‑liquids” (GTL) plants, producing ultra‑clean diesel from natural gas. The same chemistry also found a niche in producing specialty chemicals, lubricants, and even synthetic jet fuel for contemporary aircraft.`,
    `Today, Fischer–Tropsch stands as a testament to how scientific ingenuity can reshape geopolitics. Its role in WWII illustrates the profound impact that a single chemical process can have on military strategy, while its modern incarnations highlight ongoing efforts to convert abundant but low‑value feedstocks into high‑quality fuels. Understanding this history helps us appreciate both the power and responsibility inherent in large‑scale industrial chemistry.`,
  ],
  vocabulary: [
    { word: 'Fischer–Tropsch synthesis', cn: '费托合成' },
    { word: 'synthetic fuel', cn: '合成燃料' },
    { word: 'coal liquefaction', cn: '煤液化' },
    { word: 'syngas', cn: '合成气' },
    { word: 'catalyst', cn: '催化剂' },
    { word: 'hydrogenation', cn: '加氢' },
  ],
};

export default article;
