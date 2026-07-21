import type { Article } from '../../types/index.ts';

// 文件意图：维护《Cugnot’s Fardier: The First Steam‑Powered Car that Paved the Way for Automobiles》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00395 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00395',
  slug: 'cugnot-s-fardier-the-first-steam-powered-car-that-paved-the-way-for-automobiles',
  title: 'Cugnot’s Fardier: The First Steam‑Powered Car that Paved the Way for Automobiles',
  subtitle: 'How a clanking artillery tractor sparked the automobile revolution',
  summary: 'In 1769 Nicolas‑Joseph Cugnot built the world’s first self‑propelled vehicle, a steam‑driven carriage that foreshadowed modern cars.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On a foggy morning in Paris, a strange clatter echoed through the cobblestones as a massive wooden frame began to move on its own.  Passersby stared at the <span class="vocab" data-cn="蒸汽机">steam engine</span> that powered the contraption, unaware they were witnessing the birth of automotive history.  The inventor behind this marvel was Nicolas‑Joseph Cugnot, a French military engineer who dreamed of replacing horse‑drawn wagons with machines capable of hauling heavy loads without fatigue.`,
    `Cugnot’s ambition was sparked by a practical problem: the French army needed an efficient way to transport artillery across rough terrain.  In response, he designed the <span class="vocab" data-cn="蒸汽锅炉">boiler</span>‑driven carriage later known as the “Fardier à vapeur.”  The vehicle measured about 13 feet long and stood on three wheels—two large rear wheels for traction and a smaller front wheel that served both as a steering axle and a support for the driver’s seat.  Its name, “fardier,” simply meant “cart” in French, but its technology was anything but ordinary.`,
    `At the heart of the Fardier lay a single‑cylinder <span class="vocab" data-cn="汽缸">cylinder</span> that received high‑pressure steam from the boiler.  The piston’s back‑and‑forth motion was converted into rotary movement through a set of connecting rods, turning the rear wheels and propelling the carriage forward at a modest 2.5 km/h (about 1.5 mph).  To steer, Cugnot attached a rudimentary tiller to the front wheel, allowing the driver to pivot the vehicle much like a modern‑day tricycle.  Though primitive by today’s standards, this arrangement embodied the core principle of a <span class="vocab" data-cn="自驱动">self‑propelled</span> machine.`,
    `The French army commissioned a series of trials in 1770, during which the Fardier demonstrated its ability to pull a 4‑ton cannon over short distances.  However, the demonstrations also revealed serious flaws.  The heavy boiler made the front wheel prone to lifting when the vehicle accelerated, causing it to tip forward and stall—a problem later engineers would call “nose‑over.”  Moreover, maintaining sufficient steam pressure required constant attention; any lapse resulted in a sudden loss of power.  After a few weeks of testing, the prototype suffered a catastrophic boiler rupture and was retired from service.`,
    `Despite its short operational life, Cugnot’s invention left an indelible mark on engineering thought.  The concept of using steam for road transport inspired British inventor Richard Trevithick, who built the first high‑speed steam carriage in 1801, and later American pioneers such as Oliver Evans, who patented a “steam wagon” in the 1820s.  These successors refined the <span class="vocab" data-cn="牵引">traction</span> system, improved boiler safety, and introduced multi‑cylinder designs that increased speed and reliability.  By the late 19th century, steam cars like those produced by Stanley Motor Carriage Company could reach 30 mph, proving that Cugnot’s early vision was technically feasible.`,
    `Today, the original Fardier is preserved in the Musée des Arts et Métiers in Paris, where it stands as a testament to human ingenuity.  Its legacy extends far beyond steam; it introduced the world to the idea that vehicles could generate their own power, a principle that underpins every modern automobile, whether powered by internal combustion, electricity, or hydrogen.  In classrooms and museums, students learn how a clanking three‑wheeled cart from 1769 set in motion a chain of innovations that eventually led to the global automotive industry we rely on today.`,
    `Reflecting on Cugnot’s daring experiment reminds us that technological breakthroughs often begin as imperfect prototypes.  The Fardier’s <span class="vocab" data-cn="原型">prototype</span> status did not diminish its importance; instead, it highlighted the challenges engineers must overcome—thermal efficiency, structural stability, and user control—to turn a concept into a practical tool.  As we look toward autonomous electric vehicles and sustainable mobility, remembering Cugnot’s steam‑driven cart helps us appreciate how each generation builds upon the bold ideas of its predecessors.`,
  ],
  vocabulary: [
    { word: 'steam engine', cn: '蒸汽机' },
    { word: 'boiler', cn: '蒸汽锅炉' },
    { word: 'cylinder', cn: '汽缸' },
    { word: 'self‑propelled', cn: '自驱动' },
    { word: 'traction', cn: '牵引' },
    { word: 'prototype', cn: '原型' },
  ],
};

export default article;
