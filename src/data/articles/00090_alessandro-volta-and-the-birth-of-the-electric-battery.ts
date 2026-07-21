import type { Article } from '../../types/index.ts';

// 文件意图：维护《Alessandro Volta and the Birth of the Electric Battery》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00090 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00090',
  slug: 'alessandro-volta-and-the-birth-of-the-electric-battery',
  title: 'Alessandro Volta and the Birth of the Electric Battery',
  subtitle: 'How Volta’s invention sparked the age of electrical power',
  summary: 'A narrative of Alessandro Volta’s life, his breakthrough with the voltaic pile, and its lasting impact on modern energy storage.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early nineteenth century, a restless curiosity about invisible forces was sweeping through Europe. While most people still lit their homes with oil lamps, a handful of scientists were already probing the mysterious “electric” that could make a compass needle twitch or a spark leap across a gap. Among them stood a modest professor from Como, Italy, whose name would soon become synonymous with the very unit we use to measure electrical pressure today.`,
    `Alessandro Volta was born in 1745 into a family of modest means, yet his father’s work as a blacksmith exposed him early to metal and its strange interactions. He entered the University of Pavia, where he studied physics under the guidance of eminent scholars. Volta quickly distinguished himself by publishing clear explanations of static electricity and by designing instruments that could measure it more reliably than ever before. His methodical mind was always looking for a way to turn fleeting sparks into something steady and controllable.`,
    `The scientific climate of Volta’s time was dominated by the dramatic experiments of Luigi Galvani, who famously made a frog’s leg twitch when touched by two different metals. Galvani argued that “animal electricity” lived within living tissue, while many of his contemporaries suspected that the metal pair itself generated the current. This debate gave rise to the concept of the <span class="vocab" data-cn="原电池">galvanic cell</span>, a primitive prototype that hinted at a deeper chemical source of electricity but could not yet produce a continuous flow.`,
    `Volta’s breakthrough came when he realized that the key was not the animal tissue but the contact between dissimilar metals and an electrolyte. He proposed an <span class="vocab" data-cn="电化学的">electrochemical</span> system in which two different metals—later identified as a <span class="vocab" data-cn="阳极">anode</span> and a <span class="vocab" data-cn="阴极">cathode</span>—were immersed in a conductive solution. By arranging these components in a stack, each junction would add its own <span class="vocab" data-cn="电势差">potential difference</span>, creating a cumulative voltage that could be measured with a simple galvanometer.`,
    `In 1800 Volta assembled his invention: the <span class="vocab" data-cn="伏打堆">voltaic pile</span>. He layered alternating discs of zinc (the anode) and copper (the cathode), separated by pieces of cardboard soaked in brine, a salty water solution that acted as the electrolyte. Each pair formed a tiny cell, and when stacked, the cells added their voltages like steps on a ladder. The pile could deliver a steady current for hours, enough to decompose water into hydrogen and oxygen—a feat no earlier apparatus could achieve reliably.`,
    `The impact of the voltaic pile was immediate and profound. Scientists now had a portable, reliable source of electricity that could power experiments without relying on static machines or animal tissues. The French chemist Humphry Davy used Volta’s cells to isolate potassium and sodium for the first time, while inventors began to imagine practical applications such as telegraphy and early electric lighting. In recognition of his contribution, the unit of electrical potential was later named the “volt” in his honor.`,
    `Volta’s legacy extends far beyond his original pile. Modern batteries—whether lead‑acid, lithium‑ion, or solid‑state—are all descendants of his simple yet ingenious arrangement of metals and electrolyte. Even today, engineers still speak of <span class="vocab" data-cn="电容器">capacitors</span> and cell stacks in terms that trace back to Volta’s original design principles. His work transformed electricity from a fleeting curiosity into a practical energy source, laying the groundwork for the electrified world we inhabit today.`,
  ],
  vocabulary: [
    { word: 'electrochemical', cn: '电化学的' },
    { word: 'cathode', cn: '阴极' },
    { word: 'anode', cn: '阳极' },
    { word: 'voltaic pile', cn: '伏打堆' },
    { word: 'galvanic cell', cn: '原电池' },
    { word: 'potential difference', cn: '电势差' },
    { word: 'capacitor', cn: '电容器' },
  ],
};

export default article;
