import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Antarctic Meteorite Discovery (1911) and Its Role in Planetary Science》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00413 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00413',
  slug: 'the-first-antarctic-meteorite-discovery-1911-and-its-role-in-planetary-science',
  title: 'The First Antarctic Meteorite Discovery (1911) and Its Role in Planetary Science',
  subtitle: 'How a lone stone sparked a new era of planetary research',
  summary: 'An early 20th‑century find on the Antarctic ice sheet laid the groundwork for modern meteorite science.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the Australasian Antarctic Expedition set foot on the icy coast of Queen Mary Land in late 1911, its primary goal was charting unknown seas and studying glacial dynamics. Yet amid the endless white, a crew member stumbled upon a small, blackened stone half‑buried in the snow. At first it was dismissed as ordinary rock, but back at the expedition’s base scientists noted its unusual density and pitted surface, hinting that they had found something far more exotic: a <span class="vocab" data-cn="陨石">meteorite</span>.`,
    `The stone was carefully wrapped in canvas and shipped to laboratories in Melbourne, where mineralogist Dr. William H. Miller performed the first systematic tests. Using a simple blowpipe flame, he observed that the specimen melted at temperatures far exceeding those of typical terrestrial rocks. Subsequent petrographic analysis revealed tiny chondrules—spherical silicate grains—that are the hallmark of <span class="vocab" data-cn="球粒隕石">chondrite</span> meteorites, confirming its extraterrestrial origin.`,
    `Why Antarctica preserves such fragments so well became a subject of fascination. The continent’s massive <span class="vocab" data-cn="冰盖">ice sheet</span> acts like a slow conveyor belt: meteoroids that land on the surface become embedded in snow, then gradually buried by accumulating layers. Over centuries, the ice protects them from weathering and terrestrial contamination, allowing scientists to retrieve pristine samples even after thousands of years of isolation.`,
    `The 1911 discovery remained an isolated curiosity for decades, but it planted a seed in the scientific community. By the late 1960s, when the United States launched the Antarctic Search for Meteorites (ANSMET) program, researchers recalled that early find and realized Antarctica could be a treasure trove of space material. Systematic surveys began, employing aircraft to spot dark stones against bright ice—a method directly inspired by the lone stone found over half a century earlier.` ,
    `The meteorite recovered in 1911 turned out to be an ordinary <span class="vocab" data-cn="球粒隕石">chondrite</span>, but its composition was revelatory. Chemical assays showed ratios of iron, nickel, and silicates that matched those found in many other meteoritic samples worldwide. More importantly, the presence of primitive minerals indicated that such bodies had remained largely unchanged since the solar system’s birth, offering a direct window into the building blocks of planets.` ,
    `Advances in <span class="vocab" data-cn="同位素分析">isotope analysis</span> later allowed researchers to date the meteorite with remarkable precision. By measuring ratios of short‑lived radionuclides such as ^26Al and ^53Mn, scientists established that the stone solidified over 4.5 billion years ago—essentially at the same time the Earth and Mars were forming. These age constraints feed directly into <span class="vocab" data-cn="行星科学">planetary science</span>, helping model the timeline of planetary accretion.` ,
    `Today, Antarctica hosts the world’s largest collection of meteorites, with over 30 000 specimens catalogued. The early find is celebrated as a catalyst that transformed a handful of curiosities into a systematic discipline. Modern missions, such as NASA’s OSIRIS‑REx and JAXA’s Hayabusa2, draw on the same analytical techniques honed on Antarctic samples to interpret returned asteroid material, linking distant space rocks back to their icy terrestrial reservoirs.` ,
    `Reflecting on that solitary stone from 1911 reminds us how a single observation can reshape scientific trajectories. From an accidental discovery on a frozen shoreline to a cornerstone of <span class="vocab" data-cn="行星科学">planetary science</span>, the Antarctic meteorite exemplifies the power of curiosity, meticulous analysis, and the unique preservation offered by Earth’s southernmost continent.` ,
  ],
  vocabulary: [
    { word: 'meteorite', cn: '陨石' },
    { word: 'chondrite', cn: '球粒隕石' },
    { word: 'ice sheet', cn: '冰盖' },
    { word: 'isotope analysis', cn: '同位素分析' },
    { word: 'planetary science', cn: '行星科学' },
    { word: 'glacial flow', cn: '冰川运动' },
  ],
};

export default article;
