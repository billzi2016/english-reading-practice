import type { Article } from '../../types/index.ts';

// 文件意图：维护《Gaston Planté and the Lead‑Acid Battery: Powering the Industrial Age from a Simple Cell》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00298 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00298',
  slug: 'gaston-plant-and-the-lead-acid-battery-powering-the-industrial-age-from-a-simple-cell',
  title: 'Gaston Planté and the Lead‑Acid Battery: Powering the Industrial Age from a Simple Cell',
  subtitle: 'How a modest laboratory experiment sparked a century of electrical storage.',
  summary: 'Explore Gaston Planté’s invention of the lead‑acid battery and its ripple effects across industry, transport, and modern energy systems.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `It was a crisp autumn afternoon in 1859 when a modest crowd gathered at the French Academy of Sciences to watch a young engineer named <span class="vocab" data-cn="加斯顿·普朗特">Gaston Planté</span> connect two lead plates immersed in sulphuric acid. The apparatus looked no more elaborate than a copper kettle, yet when he completed the circuit a faint glow appeared on his galvanometer, confirming that electricity was flowing. This simple demonstration marked the birth of the first practical <span class="vocab" data-cn="铅酸电池">lead‑acid battery</span>, a technology that would soon power telegraph lines, railway signals, and even the earliest electric automobiles.`,
    `Planté grew up in a modest Parisian family, fascinated by the burgeoning field of electrochemistry. Inspired by Michael Faraday’s work on reversible reactions, he set out to create a cell that could be repeatedly charged and discharged without losing capacity—a feat many contemporaries thought impossible. His laboratory was cramped, filled with glass jars, brass fittings, and piles of lead ingots salvaged from nearby foundries. The key insight came when he realized that by plating thin layers of pure lead onto thicker “grid” structures, the surface area for chemical interaction could be dramatically increased, allowing more charge to be stored in a compact volume.`,
    `The core of Planté’s invention relied on a reversible chemical reaction between lead, lead dioxide, and dilute <span class="vocab" data-cn="硫酸">electrolyte</span>. During discharge, the metallic lead (the negative plate) oxidizes to form lead sulfate, while the lead dioxide (the positive plate) reduces to the same compound. When a charging current is applied, these reactions run backward, reconverting lead sulfate into their original forms. This <span class="vocab" data-cn="可逆化学反应">reversible chemical reaction</span> gave the battery its unique ability to be reused many times—a property that distinguished it from earlier primary cells that could only deliver a single burst of energy.`,
    `Although Planté’s original design was robust, its capacity was limited by the relatively thin active material on each plate. In 1881, French engineer <span class="vocab" data-cn="阿方斯·法尔">Camille Alphonse Faure</span> introduced a paste of lead oxide onto the plates, dramatically increasing the amount of reactive material and thus the battery’s <span class="vocab" data-cn="比能量">specific energy</span>. This “Faure” improvement made the technology viable for larger installations such as street‑light stations and early electric trams. Yet the fundamental principles Planté established—using a lead grid, an acid electrolyte, and reversible plate chemistry—remained unchanged in virtually every modern iteration of the battery.`,
    `The impact on industry was swift. By the 1870s, telegraph companies across Europe equipped their remote stations with lead‑acid banks to ensure continuous operation during power outages. Railway networks adopted the batteries for signal lamps and later for electric locomotives, where the ability to store energy locally reduced reliance on cumbersome coal‑fired generators. In 1881, French inventor <span class="vocab" data-cn="古斯塔夫·特鲁维">Gustave Trouvé</span> fitted a lead‑acid pack onto a bicycle, creating one of the world’s first practical electric vehicles—a novelty that captured public imagination and foreshadowed today’s e‑mobility revolution.`,
    `Beyond transportation, the battery’s reliability made it indispensable for emerging technologies. Early telephone exchanges used lead‑acid units to power switchboards, while lighthouse keepers relied on them to maintain illumination during storms. The battery’s relatively low cost, compared with newer chemistries like nickel‑cadmium or lithium‑ion, ensured its dominance in backup power applications—a role it still occupies today in uninterruptible power supplies (UPS) and emergency lighting systems.`,
    `Even as the 20th century ushered in sophisticated energy storage solutions, the lead‑acid battery persisted. Its mature manufacturing base, recyclability (over 95 % of a spent battery can be reclaimed), and predictable performance under a wide temperature range kept it competitive for automotive starter motors, where a quick burst of high current is essential. Moreover, large‑scale stationary installations—such as solar farms in sunny regions—still employ lead‑acid banks to smooth out daily fluctuations, demonstrating the timeless relevance of Planté’s original cell.`,
    `Looking back, the story of Gaston Planté reminds us that transformative technology often begins with a modest experiment: two plates, a jar of acid, and an inquisitive mind. From that humble laboratory bench sprang a power source that helped light cities, move people, and keep communication lines alive—laying a foundation for the electrified world we inhabit today. As modern engineers chase ever‑lighter batteries, they continue to stand on the shoulders of Planté’s simple yet profound cell.`,
  ],
  vocabulary: [
    { word: 'Gaston Planté', cn: '加斯顿·普朗特' },
    { word: 'lead‑acid battery', cn: '铅酸电池' },
    { word: 'electrolyte', cn: '硫酸（在此指电解质）' },
    { word: 'reversible chemical reaction', cn: '可逆化学反应' },
    { word: 'specific energy', cn: '比能量' },
    { word: 'Camille Alphonse Faure', cn: '阿方斯·法尔' },
    { word: 'Gustave Trouvé', cn: '古斯塔夫·特鲁维' },
  ],
};

export default article;
