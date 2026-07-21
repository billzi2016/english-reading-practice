import type { Article } from '../../types/index.ts';

// 文件意图：维护《Alessandro Volta and the Birth of the Modern Battery: From Voltaic Pile to Portable Power》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00333 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00333',
  slug: 'alessandro-volta-and-the-birth-of-the-modern-battery-from-voltaic-pile-to-portable-power',
  title: 'Alessandro Volta and the Birth of the Modern Battery: From Voltaic Pile to Portable Power',
  subtitle: 'How a 19th‑century experiment sparked the age of portable electricity',
  summary: 'Explore Alessandro Volta’s breakthrough invention and its lasting influence on today’s battery technology.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the bustling streets of late‑18th‑century Milan, a young scholar named Alessandro Volta was fascinated by the mysterious “spark” that seemed to leap from living tissue. The Enlightenment era encouraged curiosity about nature’s hidden forces, and Volta found himself drawn into heated debates with fellow scientists who claimed that electricity originated in animal muscles rather than in metal. This intellectual clash set the stage for a discovery that would change how humanity stores and uses energy.`,
    `Volta’s formal training at the University of Pavia introduced him to Luigi Galvani, whose experiments with frog legs appeared to demonstrate “animal electricity.” Volta disagreed, arguing that the observed currents were produced by two dissimilar metals in contact with a moist conductor. To prove his point, he began assembling simple metal plates separated by brine‑soaked paper, laying the groundwork for what would become the first true battery.`,
    `In 1800, after years of trial and error, Volta announced the <span class="vocab" data-cn="伏打堆">voltaic pile</span>, a stack of alternating zinc and copper discs separated by cardboard soaked in saltwater. This arrangement created a continuous flow of electricity without any living tissue, marking the birth of <span class="vocab" data-cn="电化学的">electrochemical</span> energy conversion. The voltaic pile was not only a scientific triumph but also a practical source of steady current for laboratories across Europe.`,
    `The secret of the pile lay in its two electrodes: the zinc acted as the <span class="vocab" data-cn="负极">anode</span>, while the copper served as the <span class="vocab" data-cn="正极">cathode</span>. Chemical reactions at each surface released electrons, generating an <span class="vocab" data-cn="电动势">electromotive force (EMF)</span> that pushed the charge through an external circuit. For the first time, scientists could measure a reliable voltage and explore electrical phenomena with unprecedented precision.`,
    `Volta’s invention sparked a cascade of new experiments. Humphry Davy used the pile to isolate several elements, while Michael Faraday’s studies on electromagnetic induction relied on its steady current. The concept of a self‑contained source of electricity gave rise to the <span class="vocab" data-cn="原电池">galvanic cell</span>, and later to more stable designs such as the <span class="vocab" data-cn="丹尼尔电池">Daniell cell</span>. These improvements addressed issues like rapid corrosion and limited lifespan, bringing batteries closer to everyday use.`,
    `The next major leap arrived in 1859 when French physicist Gaston Planté invented the <span class="vocab" data-cn="铅酸电池">lead‑acid battery</span>. By stacking lead plates immersed in sulfuric acid, Planté created a rechargeable system that could deliver higher currents for longer periods. This technology powered early telegraph networks and even the first electric automobiles, demonstrating that batteries could be both portable and practical.`,
    `Today’s smartphones, laptops, and electric cars trace their lineage directly back to Volta’s humble stack of metal discs. Modern <span class="vocab" data-cn="便携式电源">portable power</span> devices rely on sophisticated lithium‑ion chemistry, yet the underlying principle remains the same: chemical energy transformed into electrical energy through controlled reactions at two electrodes. Volta’s legacy reminds us that a single insight can illuminate an entire century of technological progress.`,
  ],
  vocabulary: [
    { word: 'voltaic pile', cn: '伏打堆' },
    { word: 'electrochemical', cn: '电化学的' },
    { word: 'anode', cn: '负极' },
    { word: 'cathode', cn: '正极' },
    { word: 'electromotive force (EMF)', cn: '电动势' },
    { word: 'galvanic cell', cn: '原电池' },
    { word: 'Daniell cell', cn: '丹尼尔电池' },
    { word: 'lead‑acid battery', cn: '铅酸电池' },
    { word: 'portable power', cn: '便携式电源' },
  ],
};

export default article;
