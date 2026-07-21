import type { Article } from '../../types/index.ts';

// 文件意图：维护《Narcís Monturiol and the Ictineo II: The Forgotten Race to Build a Steam‑Powered Submarine》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00475 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00475',
  slug: 'narc-s-monturiol-and-the-ictineo-ii-the-forgotten-race-to-build-a-steam-powered-submarine',
  title: 'Narcís Monturiol and the Ictineo II: The Forgotten Race to Build a Steam‑Powered Submarine',
  subtitle: 'How a Catalan inventor tried to power the depths with steam in the mid‑19th century.',
  summary: 'A narrative of Narcís Monturiol’s daring attempt to build a steam‑driven submarine, and why his story faded from mainstream history.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the bustling ports of mid‑19th‑century Europe, the idea of traveling beneath the waves captured public imagination like nothing else. While inventors in Britain and France were experimenting with crude diving bells, a little‑known Catalan engineer named <span class="vocab" data-cn="纳西斯·蒙图里奥尔">Narcís Monturiol</span> dreamed of a vessel that could stay underwater for hours without surfacing. His ambition was not merely scientific curiosity; it was born from a tragic shipwreck off the coast of Barcelona in 1849, which claimed dozens of lives and left an indelible mark on his conscience.`,
    `Monturiol grew up in Figueres, a town steeped in the spirit of the <span class="vocab" data-cn="加泰罗尼亚">Catalan</span> renaissance. Trained as a teacher and later as a journalist, he used his pen to advocate for social reform, but the sea’s mysteries called louder. Determined to prevent future drownings, he set out to create a craft that could rescue sailors trapped beneath the surface. His first prototype, the <span class="vocab" data-cn="伊克蒂内奥Ⅰ">Ictineo I</span>, launched in 1859, relied on human power and an innovative chemical system that generated oxygen from potassium chlorate, allowing a short submerged stay.`,
    `Although the Ictineo I demonstrated that a closed‑circuit vessel could function underwater, its limited range and slow speed made it unsuitable for rescue missions. Monturiol realized that to achieve practical depth and endurance he needed a more reliable source of power. The <span class="vocab" data-cn="蒸汽机">steam engine</span>—the workhorse of the Industrial Revolution—offered a tempting solution, despite the obvious challenge of supplying heat in an environment where water pressure could crush any exposed machinery.`,
    `Designing a steam‑driven submarine required Monturiol to confront several engineering paradoxes. He had to keep the boiler hot enough to produce usable pressure while preventing the generated heat from boiling away the very water that surrounded the hull. To solve this, he devised a closed‑cycle system in which coal was burned in a sealed furnace, and the resulting hot gases passed through a series of condensers that reclaimed water for the ballast tanks. The <span class="vocab" data-cn="压载舱">ballast tanks</span> could be flooded or emptied to control buoyancy, allowing the craft to dive and surface without external assistance.`,
    `Construction of the <span class="vocab" data-cn="伊克蒂内奥Ⅱ">Ictineo II</span> began in 1863 at Monturiol’s own workshop in Barcelona. The hull featured a double‑layered wooden frame reinforced with iron ribs, creating a rudimentary <span class="vocab" data-cn="压力壳">pressure hull</span> capable of withstanding depths of up to 100 meters—a remarkable feat for its time. Inside, a compact steam engine drove a single screw propeller, while a series of manually operated pumps managed the ballast system. Monturiol also installed an early form of <span class="vocab" data-cn="空气净化系统">air purification</span> that scrubbed carbon dioxide using lime, extending the crew’s breathable air supply to several hours.`,
    `The Ictineo II’s maiden voyage on June 28, 1864, attracted a crowd of curious spectators and naval officials. The submarine descended smoothly, maintained a steady depth, and resurfaced after a half‑hour trial, proving that steam propulsion could indeed function beneath the waves. Yet Monturiol faced stiff competition: the French Navy was testing the <span class="vocab" data-cn="潜水艇">Plongeur</span>, which used compressed air for propulsion, while British engineers were experimenting with electric motors powered by onboard batteries. Despite its technical successes, the Ictineo II struggled to secure state funding; investors balked at the high cost of coal and the perceived risk of a wooden‑iron hybrid hull.</`,
    `Financial pressures forced Monturiol to abandon further development in 1867. He fled to France, where he continued writing about social issues but never returned to submarine design. The Ictineo II was eventually dismantled, its components scattered or repurposed. For decades the story lingered only in obscure Catalan archives, eclipsed by the more publicized achievements of later inventors like John Philip Holland and the German <span class="vocab" data-cn="U‑艇">U‑boat</span> program.`,
    `Today, historians recognize Monturiol’s work as a pivotal bridge between early experimental craft and modern naval engineering. His daring use of steam power foreshadowed later developments in closed‑cycle propulsion, and his emphasis on crew safety—through oxygen regeneration and ballast control—mirrors principles still taught in submarine design courses. The forgotten race to build a steam‑powered sub reminds us that innovation often thrives in the margins, waiting for a new generation to rediscover its value.`,
  ],
  vocabulary: [
    { word: 'Narcís Monturiol', cn: '纳西斯·蒙图里奥尔' },
    { word: 'Catalan', cn: '加泰罗尼亚的；加泰罗尼亚人' },
    { word: 'steam engine', cn: '蒸汽机' },
    { word: 'ballast tanks', cn: '压载舱' },
    { word: 'pressure hull', cn: '压力壳' },
    { word: 'air purification', cn: '空气净化系统' },
    { word: 'Plongeur', cn: '潜水艇（法国早期实验潜艇）' },
    { word: 'U‑boat', cn: 'U型潜艇（德国军用潜艇的通称）' },
  ],
};

export default article;
