import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Turtle to Hunley: The Evolution and Tragedy of Early Steam‑Powered Submarines》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00218 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00218',
  slug: 'from-turtle-to-hunley-the-evolution-and-tragedy-of-early-steam-powered-submarines',
  title: 'From Turtle to Hunley: The Evolution and Tragedy of Early Steam‑Powered Submarines',
  subtitle: 'How early inventors turned steam into underwater warfare, and why the dream often ended in disaster.',
  summary: 'A narrative tracing the daring experiments from the Revolutionary War’s Turtle to the Civil War’s H.L. Hunley, highlighting engineering breakthroughs and tragic failures.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In 1775, American inventor David Bushnell launched the <span class="vocab" data-cn="乌龟号">Turtle</span>, a wooden, hand‑powered submersible designed to attach explosive charges to British ships. Though it never sank an enemy vessel, the Turtle proved that a craft could operate beneath the waves and sparked imaginations across the Atlantic.`,
    `The early 19th century saw rapid advances in <span class="vocab" data-cn="蒸汽机">steam engine</span> technology, which engineers hoped would replace human power. French naval officer Narcís Monturiol built the Ictineo II (1864), a double‑hull vessel that used a closed‑cycle steam system to generate oxygen for its crew, allowing longer underwater stays than any previous design.`,
    `A critical innovation was the development of the <span class="vocab" data-cn="压载舱">ballast tank</span>. By flooding and emptying these compartments, submarines could control buoyancy with precision. The American Civil War’s Confederate Navy adopted this principle in several experimental boats, most famously the H.L. Hunley, which relied on a simple ballast system to dive and surface.`,
    `The Hunley’s propulsion was crude but effective: eight crew members turned a crankshaft connected to a single <span class="vocab" data-cn="螺旋桨">propeller</span>. This human‑powered mechanism, combined with the steam‑driven air supply system, allowed the vessel to travel at roughly 4 knots underwater—fast enough to approach a target before being detected.` ,
    `On February 17 1864, the Hunley achieved what Bushnell could only dream of: it sank the Union ironclad <span class="vocab" data-cn="铁甲舰">USS Housatonic</span>. The attack used a spar‑mounted <span class="vocab" data-cn="鱼雷">torpedo</span> that detonated against the hull, demonstrating the lethal potential of underwater warfare. Yet triumph turned to tragedy when the Hunley herself vanished beneath the waves shortly after the strike.` ,
    `Modern archaeology attributes the loss to a combination of factors: the sudden shockwave from the torpedo likely damaged the hull, and the crew may have been overcome by <span class="vocab" data-cn="水压">hydrostatic pressure</span> as the vessel descended beyond its design depth. The wreck was not recovered until 1995, when divers uncovered a time capsule of early submarine engineering.` ,
    `The legacy of these early steam‑powered submarines lies in their daring blend of emerging technology and bold imagination. Though most were short‑lived, they laid the groundwork for later electric and diesel‑electric designs that would dominate the 20th century’s naval battles. Their stories remind us that progress often emerges from trial, error, and sometimes tragic sacrifice.` ,
    `Today, museums in New York, Paris, and Charleston preserve replicas of the Turtle, Ictineo II, and Hunley, allowing visitors to experience the cramped decks, clanking mechanisms, and palpable tension faced by their crews. By studying these artifacts, engineers gain insight into early solutions for <span class="vocab" data-cn="潜航器">submersible</span> stability, air management, and propulsion—principles that still echo in modern submarine design.` ,
  ],
  vocabulary: [
    { word: 'Turtle', cn: '乌龟号' },
    { word: 'steam engine', cn: '蒸汽机' },
    { word: 'ballast tank', cn: '压载舱' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'torpedo', cn: '鱼雷' },
    { word: 'hydrostatic pressure', cn: '水压' },
    { word: 'USS Housatonic', cn: '铁甲舰' },
    { word: 'submersible', cn: '潜航器' },
  ],
};

export default article;
