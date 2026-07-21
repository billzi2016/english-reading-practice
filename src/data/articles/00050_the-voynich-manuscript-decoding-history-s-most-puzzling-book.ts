import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Voynich Manuscript: Decoding History's Most Puzzling Book》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00050 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00050',
  slug: 'the-voynich-manuscript-decoding-history-s-most-puzzling-book',
  title: 'The Voynich Manuscript: Decoding History\'s Most Puzzling Book',
  subtitle: 'A Journey Through the Enigmatic Pages of a Medieval Mystery',
  summary: 'Explore the history, theories, and modern attempts to unlock the secrets of the baffling Voynich Manuscript.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In 1912, a Polish‑American book dealer named Wilfrid Voynich bought a bound volume from an Italian Jesuit college that would soon become one of the most infamous artifacts in literary history. The object, later christened the <span class="vocab" data-cn="手稿">manuscript</span>, is composed of about 240 vellum pages filled with flowing, unknown symbols and a bewildering array of illustrations ranging from strange plants to celestial diagrams. From the moment scholars laid eyes on it, the book sparked a feverish curiosity that has endured for more than a century.`,
    `Physically, the <span class="vocab" data-cn="手稿">manuscript</span> is a marvel of medieval craftsmanship. Each leaf measures roughly 23 × 16 cm and is written with ink that modern analysis identifies as a mixture of iron gall and carbon‑based pigments, typical of Northern European workshops in the early 15th century. The illustrations fall into several distinct sections: a botanical part depicting over one hundred unidentified flora, an astronomical portion filled with zodiac symbols and star charts, and a balneological segment showing naked figures immersed in pools of water. These <span class="vocab" data-cn="插图">illuminations</span> are rendered in vivid colors that have survived remarkably well despite the manuscript’s age.`,
    `The first serious attempts to decipher the text came from the world’s leading <span class="vocab" data-cn="密码学家">cryptanalyst</span>s. In the 1930s, William Friedman—renowned for breaking the Japanese PURPLE cipher—applied his expertise in <span class="vocab" data-cn="频率分析">frequency analysis</span> to the Voynich script. He discovered that the distribution of characters resembled natural languages more closely than random gibberish, yet no known language matched its patterns. Subsequent scholars such as Joseph Grymes and Mary‑Daphne McGuire expanded on these methods, employing statistical tests that repeatedly confirmed the text’s internal consistency while still refusing to yield a clear translation.`,
    `Over the decades, a plethora of theories have been proposed about the manuscript’s origin. Some researchers argue it records an extinct natural language, perhaps a regional dialect of Central Europe that vanished without written traces. Others suggest it is a <span class="vocab" data-cn="构造语言">constructed language</span> devised by an eccentric scholar for private use. A more skeptical camp labels the book a sophisticated <span class="vocab" data-cn="伪造品">hoax</span>, designed to impress wealthy patrons with its exotic appearance. Each hypothesis attempts to reconcile the manuscript’s linguistic regularities with its enigmatic content, yet none has achieved universal acceptance.`,
    `The digital age brought new tools to the table. In the 2010s, teams of computer scientists applied <span class="vocab" data-cn="机器学习">machine learning</span> algorithms and <span class="vocab" data-cn="统计模型">statistical models</span> to the text, treating it as a sequence problem similar to DNA analysis. These approaches uncovered subtle patterns—such as recurring “word” clusters that behave like grammatical endings—and even suggested possible syntactic structures. However, while these methods have deepened our understanding of the manuscript’s internal mechanics, they have not produced a definitive translation, leaving the core mystery intact.`,
    `Recent interdisciplinary studies have added fresh clues. A 2020 paper in *Nature* compared the botanical drawings to known medieval herbals and found striking visual parallels with plants described in 14th‑century Central European texts, hinting at a regional origin for the illustrations. Meanwhile, a 2022 chemical analysis of the inks revealed trace elements consistent with Mediterranean mineral sources, supporting the hypothesis that the manuscript was produced in a monastic scriptorium linked to trade routes across the Alps. These findings, while illuminating the <span class="vocab" data-cn="植物学">phytology</span> and material composition of the book, still do not unlock its cryptic script.`,
    `Today the Voynich Manuscript resides in the Beinecke Rare Book & Manuscript Library at Yale University, where it continues to attract scholars, artists, and curious visitors alike. Its pages remain a testament to humanity’s enduring fascination with hidden knowledge and the limits of our interpretive tools. Whether future breakthroughs will finally reveal its meaning or whether the manuscript will forever linger as an elegant puzzle, its legacy endures as a cornerstone of <span class="vocab" data-cn="书籍学">codicology</span> and a reminder that some mysteries resist even the most sophisticated inquiries.`,
  ],
  vocabulary: [
    { word: 'manuscript', cn: '手稿' },
    { word: 'cipher', cn: '密码' },
    { word: 'cryptanalyst', cn: '密码学家' },
    { word: 'frequency analysis', cn: '频率分析' },
    { word: 'illuminations', cn: '插图（彩绘）' },
    { word: 'constructed language', cn: '构造语言' },
    { word: 'hoax', cn: '伪造品' },
    { word: 'machine learning', cn: '机器学习' },
    { word: 'statistical model', cn: '统计模型' },
    { word: 'phytology', cn: '植物学' },
    { word: 'codicology', cn: '书籍学' },
  ],
};

export default article;
