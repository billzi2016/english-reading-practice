import type { Article } from '../../types/index.ts';

// 文件意图：维护《Alexander Graham Bell and the Invention of the Telephone: Connecting a World》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00019 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00019',
  slug: 'alexander-graham-bell-and-the-invention-of-the-telephone-connecting-a-world',
  title: 'Alexander Graham Bell and the Invention of the Telephone: Connecting a World',
  subtitle: "How one man's curiosity reshaped global communication",
  summary: "Explore how Alexander Graham Bell's breakthrough transformed personal and commercial communication worldwide.",
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Born in Edinburgh in 1847, Alexander Graham Bell grew up in a household where language and sound were daily topics of discussion. His father, Alexander Melville Bell, was a renowned professor of elocution who invented "Visible Speech," a system for teaching pronunciation. Young Bell absorbed his father's fascination with the mechanics of speech and soon began conducting his own experiments on <span class="vocab" data-cn="声学的">acoustic</span> phenomena. By his teenage years he was already building rudimentary devices that could amplify faint noises, laying the groundwork for a lifelong quest to transmit voice over distance.`,
    `In 1870 Bell emigrated to Canada and accepted a teaching position at the Boston School for the Deaf's Canadian branch in Brantford. The experience of working with deaf students sharpened his understanding of how speech is produced and perceived, especially because both his mother and later his wife, Mabel Gardiner Hubbard, were profoundly deaf. This intimate exposure inspired Bell to explore <span class="vocab" data-cn="传输">transmission</span> methods that could bridge the gap between sound and electrical signals, a pursuit he pursued alongside his research into phonetics and speech therapy.`,
    `Back in Boston, Bell partnered with Thomas A. Watson, an inventive electrician who shared his enthusiasm for turning vibrations into electricity. Together they constructed a simple <span class="vocab" data-cn="电路">circuit</span> consisting of a transmitter that modulated electrical current according to sound waves and a receiver that reconverted those fluctuations back into audible tones. Their early prototypes used a liquid transmitter filled with water, but after numerous trials they discovered that a membrane made from stretched animal skin produced clearer signals, bringing them closer to a practical voice‑carrying device.`,
    `The breakthrough arrived on March 10, 1876, when Bell whispered the now‑famous words, "Mr. Watson—come here—I want to see you," into his transmitter and heard Watson's astonished reply through the receiver in another room. Just weeks earlier, on February 14, Bell had filed a <span class="vocab" data-cn="专利">patent</span> application (U.S. Patent No. 174,465) describing the method of transmitting vocal sounds by electricity. The swift approval of this patent secured his legal claim to the invention and set the stage for commercial exploitation.`,
    `The telephone's impact was immediate and far‑reaching. For the first time, individuals could engage in real-time <span class="vocab" data-cn="通信">communication</span> across towns, cities, and eventually continents, reshaping business practices, journalism, and personal relationships. Historians often label Bell's device as a <span class="vocab" data-cn="革命性的">revolutionary</span> step in the evolution of human connectivity, noting how it transformed the pace at which information traveled and laid the foundation for today's global network of voice and data services.`,
    `Bell's success did not go unchallenged. Inventor Elisha Gray filed a similar patent application on the same day as Bell, leading to protracted legal disputes over who held rightful <span class="vocab" data-cn="知识产权">intellectual property</span> rights. The courts ultimately upheld Bell's claim, and his company—later known as the American Telephone & Telegraph Company (AT&T)—grew into a telecommunications giant. These battles spurred rapid improvements in device reliability, network infrastructure, and pricing models, accelerating the telephone's diffusion worldwide.`,
    `More than a century later, the core principle Bell uncovered—converting sound into electrical signals and back again—remains at the heart of modern voice technology, from landline phones to smartphones and Voice over Internet Protocol (VoIP) services. His relentless <span class="vocab" data-cn="创新">innovation</span> not only birthed a new industry but also paved the way for the era of <span class="vocab" data-cn="全球化">globalization</span>, where a single spoken word can travel across oceans in an instant. Bell's legacy endures as a testament to how curiosity and perseverance can connect an entire world.`,
  ],
  vocabulary: [
    { word: 'acoustic', cn: '声学的' },
    { word: 'transmission', cn: '传输' },
    { word: 'circuit', cn: '电路' },
    { word: 'patent', cn: '专利' },
    { word: 'communication', cn: '通信' },
    { word: 'revolutionary', cn: '革命性的' },
    { word: 'intellectual property', cn: '知识产权' },
    { word: 'innovation', cn: '创新' },
    { word: 'globalization', cn: '全球化' },
  ],
};

export default article;
