import type { Article } from '../../types/index.ts';

// 文件意图：维护《Friedrich Koenig’s Steam‑Powered Printing Press: Revolutionizing the Spread of Knowledge》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00343 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00343',
  slug: 'friedrich-koenig-s-steam-powered-printing-press-revolutionizing-the-spread-of-knowledge',
  title: 'Friedrich Koenig’s Steam‑Powered Printing Press: Revolutionizing the Spread of Knowledge',
  subtitle: 'How a German inventor turned printing into an industrial process',
  summary: 'The steam‑driven press reshaped publishing in the early nineteenth century, accelerating the flow of information.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the waning years of the eighteenth century, a young German mechanic named <span class="vocab" data-cn="弗里德里希·科尼希">Friedrich Koenig</span> grew up watching the slow, labor‑intensive work of traditional hand presses.  At that time, each sheet of paper required a team of operators to press inked type onto it, limiting output to a few hundred copies per day.  Inspired by James Watt’s improvements to the <span class="vocab" data-cn="蒸汽机">steam engine</span>, Koenig imagined a machine that could replace human force with continuous rotary motion.</span>`,
    `By 1801, Koenig had built a prototype that used a steam‑driven cylinder to drive a large iron platen.  This <span class="vocab" data-cn="蒸汽动力印刷机">steam‑powered printing press</span> could print up to 1,000 sheets per hour—an order of magnitude faster than any hand press.  The key innovation was the conversion of linear piston motion into a smooth rotary action, allowing the paper and type bed to move continuously rather than in jerky strokes.</span>`,
    `Koenig’s breakthrough caught the attention of his fellow German, <span class="vocab" data-cn="安德烈亚斯·弗里德里希·鲍尔">Andreas Friedrich Bauer</span>, who supplied financial backing and engineering expertise.  Together they refined the design, adding a sophisticated system of gears and flywheels that steadied the steam’s power output.  Their collaboration produced the “Bauer‑Koenig” press, which was demonstrated to British officials in 1813 at the Royal Society’s laboratory.</span>`,
    `The British government, eager to modernize its own publishing industry, commissioned a full‑scale version for the <span class="vocab" data-cn="《泰晤士报》">Times</span>.  The new press dramatically increased daily newspaper <span class="vocab" data-cn="发行量">circulation</span>, enabling the paper to reach a broader public at lower cost.  This surge in printed material contributed to what historians call the “<span class="vocab" data-cn="工业革命">Industrial Revolution</span> of information”, where ideas could travel faster than ever before.</span>`,
    `Beyond newspapers, the steam press transformed book publishing.  Publishers could now produce multi‑volume works such as scientific atlases and literary collections in weeks rather than months.  The speed and consistency of the machine also reduced errors caused by uneven pressure, improving overall <span class="vocab" data-cn="印刷质量">print quality</span>.  As a result, literacy rates began to climb, especially in urban centers where cheap, abundant books became available.</span>`,
    `Although later technologies like the rotary press and offset printing would eclipse Koenig’s design, his contribution remains pivotal.  The steam‑driven system demonstrated that <span class="vocab" data-cn="机械化">mechanization</span> could be applied to cultural production as effectively as to textile or metalwork.  Modern digital publishing still echoes this principle: replace manual bottlenecks with automated processes to spread knowledge at unprecedented speed.`,
  ],
  vocabulary: [
    { word: 'Friedrich Koenig', cn: '弗里德里希·科尼希' },
    { word: 'steam engine', cn: '蒸汽机' },
    { word: 'steam‑powered printing press', cn: '蒸汽动力印刷机' },
    { word: 'Andreas Friedrich Bauer', cn: '安德烈亚斯·弗里德里希·鲍尔' },
    { word: 'Industrial Revolution', cn: '工业革命' },
    { word: 'circulation', cn: '发行量' },
    { word: 'print quality', cn: '印刷质量' },
    { word: 'mechanization', cn: '机械化' },
  ],
};

export default article;
