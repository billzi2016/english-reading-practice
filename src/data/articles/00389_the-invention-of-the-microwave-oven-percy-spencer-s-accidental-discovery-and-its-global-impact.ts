import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the Microwave Oven: Percy Spencer’s Accidental Discovery and Its Global Impact》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00389 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00389',
  slug: 'the-invention-of-the-microwave-oven-percy-spencer-s-accidental-discovery-and-its-global-impact',
  title: 'The Invention of the Microwave Oven: Percy Spencer’s Accidental Discovery and Its Global Impact',
  subtitle: 'How a wartime radar engineer turned a melted candy bar into a kitchen revolution',
  summary: 'Percy Spencer’s serendipitous experiment with microwaves birthed an appliance that reshaped cooking worldwide.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `It was a typical summer afternoon in 1945 at Raytheon’s laboratory in Cambridge, Massachusetts, when engineer <span class="vocab" data-cn="微波炉">Percy Spencer</span> stepped away from his workbench for lunch. He reached into his pocket and found that the chocolate bar he had stashed there was unusually soft, almost melted. The oddity puzzled him, but rather than discard the candy, he placed it near a large metal box housing a newly‑developed <span class="vocab" data-cn="磁控管">magnetron</span>. Within seconds the bar turned to liquid chocolate, sparking Spencer’s curiosity about the invisible energy at play.`,
    `Spencer’s background gave him a unique perspective. During World War II he had helped improve <span class="vocab" data-cn="雷达">radar</span> systems that used high‑frequency <span class="vocab" data-cn="电磁辐射">electromagnetic radiation</span> to detect enemy aircraft. The magnetron, a key component of radar, generated microwaves at wavelengths around 12 cm—far shorter than the radio waves used in earlier devices. While most engineers focused on refining signal clarity for military purposes, Spencer began to wonder whether those same waves could interact with everyday materials, especially food.`,
    `To test his hypothesis, Spencer placed a bowl of popcorn kernels beside the active magnetron. Within minutes the kernels erupted into fluffy popcorn, startling everyone in the lab. Encouraged by this visible proof, he arranged an experiment with an egg; the egg exploded, confirming that microwaves could heat water molecules rapidly from the inside out. These simple demonstrations led him to design a bulky prototype dubbed the “Radarange.” The first model stood nearly six feet tall, weighed over 750 pounds, and cost roughly $5,000—a price only large‑scale restaurants could afford at the time.`,
    `The physics behind the <span class="vocab" data-cn="微波炉">microwave oven</span> is rooted in <span class="vocab" data-cn="介质加热">dielectric heating</span>. Microwaves cause polar molecules, especially water, to oscillate billions of times per second. This molecular friction generates heat uniformly throughout the food, unlike conventional ovens that rely on conduction from the surface inward. Because the energy is absorbed directly by the food’s moisture, cooking times shrink dramatically. However, this also means that items with low water content—like plastics or metals—can reflect microwaves, leading to sparks or uneven heating if not properly managed.`,
    `Recognizing the commercial potential, Raytheon filed a <span class="vocab" data-cn="专利">patent</span> for the “Method of Treating Foodstuffs” in 1945. The company quickly marketed the Radarange to hotels, airlines, and institutional kitchens where speed was paramount. Early adopters praised the ability to defrost meat or heat beverages in a fraction of the time required by conventional methods. Yet the massive size and high power consumption limited broader consumer uptake for decades. It wasn’t until the late 1960s that engineers miniaturized the magnetron and introduced countertop models affordable for middle‑class households.`,
    `The arrival of compact <span class="vocab" data-cn="微波炉">microwave ovens</span> sparked a cultural shift in home cooking. Families could prepare meals with unprecedented speed, leading to the rise of “TV dinners” and convenience foods designed specifically for microwave reheating. This convenience also prompted public debates about <span class="vocab" data-cn="食品安全">food safety</span>, as scientists investigated whether microwaves altered nutritional content or created harmful compounds. Extensive studies concluded that microwaving preserves nutrients better than many traditional methods, alleviating most health concerns and cementing the appliance’s place in modern kitchens worldwide.`,
    `Today, the legacy of Spencer’s accidental discovery is evident in every corner of global cuisine. Modern ovens employ inverter technology for precise power control, reducing energy usage while maintaining cooking performance. Emerging trends such as smart connectivity allow users to monitor and adjust settings via smartphones, integrating the microwave into the broader Internet‑of‑Things ecosystem. As sustainability becomes a priority, manufacturers are exploring recyclable materials and lower‑watt magnetrons to further shrink the environmental footprint of this once‑bulky kitchen giant.`,
  ],
  vocabulary: [
    { word: 'microwave oven', cn: '微波炉' },
    { word: 'magnetron', cn: '磁控管' },
    { word: 'electromagnetic radiation', cn: '电磁辐射' },
    { word: 'dielectric heating', cn: '介质加热' },
    { word: 'radar', cn: '雷达' },
    { word: 'patent', cn: '专利' },
  ],
};

export default article;
