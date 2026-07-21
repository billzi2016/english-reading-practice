import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Skyscraper: Chicago’s Home Insurance Building and the Birth of Vertical Cities》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00293 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00293',
  slug: 'the-first-skyscraper-chicago-s-home-insurance-building-and-the-birth-of-vertical-cities',
  title: 'The First Skyscraper: Chicago’s Home Insurance Building and the Birth of Vertical Cities',
  subtitle: 'How a ten‑story office block sparked a new urban era',
  summary: 'Explore how the Home Insurance Building pioneered steel‑frame construction and set the stage for modern skyscrapers.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the wake of the Great Chicago Fire of 1871, the city’s skyline was a flat expanse of brick and wood. Architects were eager to prove that fire‑resistant, taller structures could rise from the ashes. In 1884, the <span class="vocab" data-cn="芝加哥保险大楼">Home Insurance Building</span> broke ground at the corner of LaSalle and Adams Streets, promising a bold experiment in height and material.`,
    `The building’s most revolutionary feature was its <span class="vocab" data-cn="钢框架结构">steel frame</span>. Rather than relying on massive <span class="vocab" data-cn="承重墙">load‑bearing walls</span> that limited how high a wall could be built, the designers used a skeletal grid of steel columns and beams. This skeleton carried the weight of the floors, allowing exterior walls to become mere curtains of glass or terra cotta.`,
    `Architect William Le Baron Jenney, often called “the father of the skyscraper,” partnered with the engineering firm of George A. Fuller to turn this concept into reality. Their collaboration demonstrated that a building could be both light and strong, a principle that would later define the work of firms like Skidmore, Owings & Merrill and the modernist masters of the 20th century.`,

    `At ten stories tall—about 138 feet—the Home Insurance Building was modest by today’s standards, yet it towered over most Chicago structures of its day. Its height sparked public fascination and a flurry of newspaper commentary about “vertical cities.” The term captured the imagination: a city that could grow upward instead of sprawling outward, preserving valuable land while accommodating ever‑increasing populations.`,

    `The building also featured one of the earliest passenger <span class="vocab" data-cn="电梯">elevators</span> powered by an electric motor. Prior to this, elevators were hydraulic and limited in speed and height. The reliable lift made upper floors desirable office space, changing real‑estate economics forever. Tenants on the 9th floor could look out over Lake Michigan, a view that would later become a selling point for skyscrapers worldwide.`,

    `Although the original structure was demolished in 1931 to make way for a newer tower, its legacy endured. The steel‑frame method proved adaptable to taller designs, leading to the construction of the 1904 <span class="vocab" data-cn="华尔街大厦">Woolworth Building</span> and the iconic 1931 <span class="vocab" data-cn="帝国大厦">Empire State Building</span>. Each successive “vertical city” pushed engineering limits, incorporated faster elevators, and refined fire‑proofing techniques.`,

    `Today, when we walk through Chicago’s downtown and see the sleek glass monoliths of the Willis Tower or the John Hancock Center, we are looking at the descendants of Jenney’s experiment. The Home Insurance Building taught architects that height is not a barrier but a canvas, and it sparked an urban transformation that reshaped cities across the globe.`,

    `The story of the first skyscraper reminds us that technological innovation often begins with a single daring idea. By replacing heavy masonry with a flexible steel skeleton, Chicago turned a post‑fire rebuilding effort into a catalyst for modern urbanism—a lesson that continues to inspire architects who imagine tomorrow’s “vertical cities.”`,
  ],
  vocabulary: [
    { word: 'Home Insurance Building', cn: '芝加哥保险大楼' },
    { word: 'steel frame', cn: '钢框架结构' },
    { word: 'load‑bearing walls', cn: '承重墙' },
    { word: 'elevator', cn: '电梯' },
    { word: 'Woolworth Building', cn: '华尔街大厦' },
    { word: 'Empire State Building', cn: '帝国大厦' },
  ],
};

export default article;
