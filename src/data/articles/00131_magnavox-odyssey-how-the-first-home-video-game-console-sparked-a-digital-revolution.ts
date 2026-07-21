import type { Article } from '../../types/index.ts';

// 文件意图：维护《Magnavox Odyssey: How the First Home Video Game Console Sparked a Digital Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00131 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00131',
  slug: 'magnavox-odyssey-how-the-first-home-video-game-console-sparked-a-digital-revolution',
  title: 'Magnavox Odyssey: How the First Home Video Game Console Sparked a Digital Revolution',
  subtitle: 'From a lab prototype to a living‑room phenomenon',
  summary: 'The story of how Ralph Baer’s invention turned televisions into playgrounds and launched an industry.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1966, a modest engineer named <span class="vocab" data-cn="拉尔夫·巴恩">Ralph H. Baer</span> was tinkering with a simple idea at Sanders Associates in New Hampshire: what if a television could become an interactive toy? At that time, televisions were passive devices, displaying only broadcast signals. Baer’s curiosity led him to sketch the first ever <span class="vocab" data-cn="家用电子游戏机">home video game console</span>, a concept that would later challenge the very definition of home entertainment.`,
    `Baer’s prototype relied on the existing <span class="vocab" data-cn="阴极射线管">cathode‑ray tube (CRT)</span> technology inside every TV set. By feeding low‑frequency signals into the CRT, his device could overlay simple shapes—dots and lines—onto the picture. This was a radical departure from the era’s mechanical arcade machines, which used lights or moving parts rather than electronic graphics. The prototype demonstrated that a television could be turned into a dynamic display surface without any major hardware overhaul.`,
    `When Baer presented his invention to executives at Magnavox in 1971, he used a makeshift <span class="vocab" data-cn="RCA 接口">RCA connector</span> to link the prototype to a living‑room TV. The demonstration was modest—a two‑player tennis game that resembled a primitive version of “Pong.” Yet the executives saw potential: families could share a single device, and the console could be sold as an accessory for existing televisions rather than requiring a new set. Magnavox quickly secured a licensing agreement, paving the way for commercial production.`,
    `The resulting product, released in 1972 as the <span class="vocab" data-cn="Magnavox 奥德赛">Magnavox Odyssey</span>, was built on pure <span class="vocab" data-cn="模拟电路">analog circuitry</span>. It contained no microprocessor; instead, it used a series of switches and diodes to generate game signals. Games were selected by inserting one of twelve cardboard “<span class="vocab" data-cn="插卡式游戏">plug‑in cartridges</span>,” each of which simply rewired the internal circuitry to produce different patterns on the screen. The graphics were limited to <span class="vocab" data-cn="线框图形">wireframe graphics</span>, but they were enough to spark imagination—players could simulate tennis, hockey, or even a simple space battle.`,
    `Priced at $100 (about $650 in today’s dollars), the Odyssey entered a market that had never imagined a video game in the home. Early adopters recalled gathering around the TV on Saturday evenings, using plastic overlays that stuck to the screen to add color and scenery. The console sold roughly 350,000 units worldwide—a modest figure by modern standards but enough to prove that there was demand for interactive entertainment beyond arcades. It also inspired a wave of imitators, many of which copied its design without permission.`,
    `The success of the Odyssey soon led to legal battles. In 1974, Atari’s founder Nolan Bushnell filed a lawsuit claiming that Magnavox had infringed on his company’s patents for electronic gaming. The case was settled when Atari agreed to pay licensing fees to Magnavox, acknowledging Baer’s earlier work. This <span class="vocab" data-cn="专利诉讼">patent lawsuit</span> set a precedent that shaped the industry’s approach to intellectual property and forced later companies to either license technology or develop entirely new architectures.`,
    `Today, the Odyssey is remembered not for its graphics but for the paradigm shift it created. By turning the television into an interactive platform, Baer ignited what we now call the <span class="vocab" data-cn="数字革命">digital revolution</span> in entertainment. The console’s legacy lives on in every modern gaming system, from handheld devices to cloud‑based platforms, all of which trace their lineage back to that humble prototype sitting on a lab bench in 1966.`
  ],
  vocabulary: [
    { word: 'Ralph H. Baer', cn: '拉尔夫·巴恩' },
    { word: 'home video game console', cn: '家用电子游戏机' },
    { word: 'cathode‑ray tube (CRT)', cn: '阴极射线管' },
    { word: 'RCA connector', cn: 'RCA 接口' },
    { word: 'analog circuitry', cn: '模拟电路' },
    { word: 'plug‑in cartridges', cn: '插卡式游戏' },
    { word: 'wireframe graphics', cn: '线框图形' },
    { word: 'patent lawsuit', cn: '专利诉讼' },
    { word: 'digital revolution', cn: '数字革命' }
  ],
};

export default article;
