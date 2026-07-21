import type { Article } from '../../types/index.ts';

// 文件意图：维护《Boston’s Great Molasses Flood: Sweet Disaster and Its Lasting Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00041 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00041',
  slug: 'boston-s-great-molasses-flood-sweet-disaster-and-its-lasting-legacy',
  title: 'Boston’s Great Molasses Flood: Sweet Disaster and Its Lasting Legacy',
  subtitle: 'How a towering tank of syrup reshaped engineering, law, and memory in the early 20th‑century city.',
  summary: 'A vivid recount of the 1919 molasses catastrophe, its causes, human toll, legal fallout, and lasting influence on safety standards.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On a cold January morning in 1919, residents of Boston’s North End were startled by an unprecedented roar. A massive <span class="vocab" data-cn="糖蜜">molasses</span> tank—standing 50 feet tall and holding over two million gallons—suddenly gave way, unleashing a viscous wave that surged through the streets at an estimated 35 mph. Within minutes, the sticky torrent had flooded twelve city blocks, crushing buildings, overturning horse‑drawn carriages, and leaving a trail of devastation that would be remembered for generations.`,
    `The tank was built by the United States Industrial Alcohol Company to store molasses destined for rum production during Prohibition. Engineers relied on a thin steel shell supported by wooden beams, but they neglected critical <span class="vocab" data-cn="结构工程师">structural engineer</span> recommendations that called for stronger rivets and a more robust foundation. Moreover, the winter’s sharp temperature drop caused the molasses to contract, creating hidden stresses that went unchecked during routine inspections.`,
    `When the tank ruptured, the resulting wave behaved like a slow‑moving tsunami of syrup. Witnesses described walls of brown liquid rising up to 25 feet high, sweeping people off their feet and dragging them into the harbor. The <span class="vocab" data-cn="流体动力学">hydrodynamics</span> of such a dense fluid meant that even after the initial surge, the molies‑laden water continued to ooze through alleys for hours, making rescue operations treacherous. In total, 21 people lost their lives and more than 150 were injured, many suffering severe burns from the hot syrup.</`,
    `The city’s response was swift but chaotic. Volunteers formed makeshift brigades, using shovels and buckets to clear debris while doctors tended to the wounded in improvised triage tents. In the legal arena, families of victims filed lawsuits alleging negligence. After a protracted battle that reached the Massachusetts Supreme Court, the company settled for $600,000—a staggering sum at the time—setting a precedent for corporate <span class="vocab" data-cn="赔偿金">settlement</span> in industrial accidents.`,
    `Beyond the courtroom, the disaster sparked a wave of regulatory reform. Boston’s municipal authorities commissioned a comprehensive review of all large storage facilities, leading to stricter building codes that mandated thicker steel walls, regular stress testing, and mandatory third‑party inspections. The incident also influenced the emerging field of <span class="vocab" data-cn="城市规划">urban planning</span>, prompting planners to consider buffer zones between industrial sites and residential neighborhoods—a principle still taught in engineering schools today.`,
    `Cultural memory of the flood has endured in surprising ways. A modest plaque now marks the former site of the tank on Commercial Street, while local storytellers recount the event as “the day Boston turned into a giant pancake.” The catastrophe inspired poems, newspaper cartoons, and even a 1970s folk song titled “Molasses River.” More importantly, it serves as a cautionary tale in engineering ethics courses, reminding students that cutting corners can turn a seemingly harmless commodity into a lethal force.`,
    `Today, the legacy of the Great Molasses Flood is visible whenever modern engineers design massive storage tanks for chemicals, fuels, or food products. The lessons learned—rigorous material testing, transparent reporting, and respect for environmental conditions—continue to protect communities worldwide. As Boston’s skyline evolves, the sticky reminder of 1919 remains a testament to how a single failure can reshape an entire industry and leave an indelible mark on collective consciousness.`,
  ],
  vocabulary: [
    { word: 'molasses', cn: '糖蜜' },
    { word: 'structural engineer', cn: '结构工程师' },
    { word: 'hydrodynamics', cn: '流体动力学' },
    { word: 'settlement', cn: '赔偿金' },
    { word: 'urban planning', cn: '城市规划' },
    { word: 'engineering ethics', cn: '工程伦理' },
  ],
};

export default article;
