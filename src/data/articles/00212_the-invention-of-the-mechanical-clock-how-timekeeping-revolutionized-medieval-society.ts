import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the Mechanical Clock: How Timekeeping Revolutionized Medieval Society》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00212 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00212',
  slug: 'the-invention-of-the-mechanical-clock-how-timekeeping-revolutionized-medieval-society',
  title: 'The Invention of the Mechanical Clock: How Timekeeping Revolutionized Medieval Society',
  subtitle: 'How a ticking tower reshaped daily life in the Middle Ages',
  summary: 'Explore how the mechanical clock emerged and changed medieval society, from monastic routines to bustling market towns.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the late thirteenth century, European towns began to hear a new sound echoing from stone towers—a steady tick that marked the passage of hours independent of sun or water. This was the birth of the <span class="vocab" data-cn="机械钟">mechanical clock</span>, a device that transformed how societies measured time and challenged centuries‑old reliance on sundials and clepsydras.`,
    `Early mechanical clocks were powered by heavy stones suspended in shafts, a principle known as <span class="vocab" data-cn="重力驱动的">weight-driven</span> motion. As the weight descended, it turned a series of interlocking <span class="vocab" data-cn="齿轮">cogwheel</span>s that formed a primitive <span class="vocab" data-cn="齿轮传动系统">gear train</span>. The crucial breakthrough was the invention of an <span class="vocab" data-cn="擒纵机构">escapement</span> mechanism, which regulated the release of energy and produced the characteristic “tick‑tock” rhythm that could be heard for miles.`,
    `Cathedrals soon became laboratories for ever more elaborate timepieces. The great <span class="vocab" data-cn="天文钟">astronomical clocks</span> installed in places like Salisbury and Strasbourg not only displayed the hour but also tracked lunar phases, planetary positions, and even the date of Easter. These complex machines required dozens of precisely cut metal parts, and their faces were often adorned with moving figures that animated on the hour, turning the act of telling time into a public spectacle.`,
    `Monastic communities felt the impact most immediately. The daily schedule of prayer known as the <span class="vocab" data-cn="圣时（或规范时辰）">canonical hours</span>—Matins, Lauds, Prime, Terce, Sext, None, Vespers and Compline—had previously been marked by bells rung at approximate intervals. With a reliable clock, abbeys could synchronize their chants to the exact hour, fostering a stricter rhythm of work, study, and worship that spread to surrounding laypeople who relied on the same bell sounds for their own routines.`,
    `In bustling market towns, the public clock became a civic instrument. Merchants used it to coordinate trade, ensuring that contracts were signed at agreed times and that market stalls opened and closed in unison. Town magistrates installed clocks on municipal halls so citizens could regulate everything from court hearings to the ringing of curfew bells, gradually shifting society away from a fluid, sunrise‑based perception of time toward a more standardized schedule.`,
    `As clockmaking techniques improved, artisans began to miniaturize the mechanisms. By the early fifteenth century, portable spring‑driven watches appeared in wealthy households, allowing individuals to carry personal timepieces. Although these early watches were less accurate than tower clocks, they introduced the concept of private ownership of time—a notion that would later fuel the rise of punctuality in industrial societies.`,
    `The legacy of the medieval mechanical clock extended far beyond its own era. Precise timekeeping laid the groundwork for scientific breakthroughs during the Renaissance and the Age of Exploration, where accurate navigation depended on knowing the exact hour at sea. Moreover, the engineering principles honed by clockmakers—especially the refinement of the <span class="vocab" data-cn="摆">pendulum</span> in the seventeenth century—paved the way for modern physics and the eventual development of atomic clocks that define time today.`,
  ],
  vocabulary: [
    { word: 'mechanical clock', cn: '机械钟' },
    { word: 'weight-driven', cn: '重力驱动的' },
    { word: 'cogwheel', cn: '齿轮' },
    { word: 'escapement', cn: '擒纵机构' },
    { word: 'astronomical clock', cn: '天文钟' },
    { word: 'canonical hours', cn: '圣时（或规范时辰）' },
    { word: 'pendulum', cn: '摆' },
  ],
};

export default article;
