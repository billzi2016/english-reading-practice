import type { Article } from '../../types/index.ts';

// This file defines the full content of the article "Johannes Gutenberg and the Invention of the Printing Press" for the reading practice site.
const article: Article = {
  id: '00015',
  slug: 'johannes-gutenberg-and-the-invention-of-the-printing-press',
  title: 'Johannes Gutenberg and the Invention of the Printing Press',
  subtitle: 'How a 15th‑century inventor transformed communication across Europe',
  summary: 'Explore Gutenberg’s breakthrough, the rise of movable type, and the profound cultural changes sparked by the printing press.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Johannes Gutenberg was born around 1400 in Mainz, a bustling trade city along the Rhine River. At that time, books were painstakingly copied by hand in monastic scriptoria, making them expensive and scarce. The growing demand for religious texts, legal codes, and classical literature created a market eager for faster production methods. Influenced by his background as a goldsmith and his exposure to existing metalworking techniques, Gutenberg began experimenting with ways to automate the replication of text. His ambition was not merely commercial; he envisioned a tool that could democratize knowledge and break the monopoly of scribes.`,
    `In the early 1440s Gutenberg unveiled a revolutionary device that combined several innovations into one cohesive system. He devised <span class="vocab" data-cn="活字">movable type</span> made from an alloy of lead, tin, and antimony, allowing individual letters to be arranged, reused, and rearranged with unprecedented speed. To transfer ink onto the type, he formulated a thick oil‑based ink that adhered well to metal surfaces yet did not smudge on paper. The final piece was a sturdy wooden frame modeled after wine presses, which he adapted into a <span class="vocab" data-cn="印刷机">printing press</span>. This mechanical pressure ensured uniform contact between inked type and the page.`,
    `The most celebrated product of Gutenberg’s workshop was the 42‑line Bible, often called the Gutenberg Bible. Completed around 1455, it demonstrated that mass‑produced books could rival hand‑crafted manuscripts in both aesthetic quality and durability. Scholars later coined the term <span class="vocab" data-cn="早期印刷品">incunabula</span> to describe all printed works produced before 1501, a period during which Gutenberg’s techniques spread rapidly across Europe. These early volumes bore the hallmarks of meticulous craftsmanship: crisp type, decorative initials, and vellum or paper pages that survived centuries.`,
    `The rapid dissemination of printed material had immediate intellectual consequences. The new technology allowed scholars to circulate ancient Greek and Latin texts, advancing <span class="vocab" data-cn="人文主义">humanism</span> across Europe. At the same time, reformers such as Martin Luther harnessed the power of the <span class="vocab" data-cn="印刷机">printing press</span> to distribute pamphlets and translations of the Bible in vernacular languages, fueling the <span class="vocab" data-cn="宗教改革">Reformation</span>. By lowering the cost of books, Gutenberg’s invention helped erode the monopoly of clergy over religious knowledge and encouraged critical inquiry.`,
    `The ripple effects extended beyond theology and scholarship. As printed works traveled along trade routes, they facilitated <span class="vocab" data-cn="文化扩散">cultural diffusion</span> across linguistic borders, standardizing spelling, grammar, and even national identities. Scientific treatises could be reproduced with accurate diagrams, allowing scholars in Italy to exchange ideas with peers in the Low Countries or the Ottoman Empire. Moreover, the press created new professions—typefounders, printers, booksellers—and gave rise to a burgeoning market for news sheets that would eventually evolve into modern newspapers.`,
    `Centuries after Gutenberg’s workshop fell silent, his principles remain at the heart of contemporary publishing. The concept of interchangeable components pioneered by <span class="vocab" data-cn="活字">movable type</span> foreshadowed modern assembly‑line manufacturing and even digital typography. While today’s presses are driven by electricity and computer control, they still rely on the same fundamental idea: applying uniform pressure to transfer ink onto a substrate. Gutenberg’s blend of <span class="vocab" data-cn="机械工程">mechanical engineering</span> and artistic vision transformed the flow of information, laying the groundwork for the knowledge‑based societies we inhabit today.`,
  ],
  vocabulary: [
    { word: 'movable type', cn: '活字' },
    { word: 'printing press', cn: '印刷机' },
    { word: 'incunabula', cn: '早期印刷品' },
    { word: 'humanism', cn: '人文主义' },
    { word: 'Reformation', cn: '宗教改革' },
    { word: 'cultural diffusion', cn: '文化扩散' },
    { word: 'mechanical engineering', cn: '机械工程' },
  ],
};

export default article;
