import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the Mechanical Clock: How Medieval Timekeeping Transformed Society》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00239 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00239',
  slug: 'the-invention-of-the-mechanical-clock-how-medieval-timekeeping-transformed-society',
  title: 'The Invention of the Mechanical Clock: How Medieval Timekeeping Transformed Society',
  subtitle: 'From tower bells to societal rhythm – a medieval breakthrough.',
  summary: 'Explore how the first mechanical clocks emerged in the Middle Ages and reshaped daily life, work, and scientific thought.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In a bustling 14th‑century market square, the sudden clang of a newly installed bell would draw merchants, clergy, and children alike. That sound marked the first public proclamation of time by a <span class="vocab" data-cn="机械时钟">mechanical clock</span>. Unlike the fleeting shadows of sundials or the slow drip of water clocks, this device ticked with regularity, turning an abstract concept—daylight—into a measurable sequence that could be heard across stone streets. The novelty was not merely technical; it began to dictate when people ate, prayed, and worked.`,
    `Before gears turned, medieval societies relied on natural cues. Sundials traced the sun’s arc, water clocks (or <span class="vocab" data-cn="漏壶">clepsydrae</span>) measured flow through calibrated vessels, and candle clocks burned marked lengths of wax. These methods were accurate only under specific conditions—clear skies, steady temperatures, or uninterrupted flame—and they required constant human supervision. As towns grew larger and trade routes expanded, the need for a reliable, location‑independent timekeeper became pressing.`,
    `The breakthrough arrived in cathedral workshops and Italian city‑states around the late 1200s. Early tower clocks were weight‑driven devices that harnessed gravity to power a series of interlocking wheels. The famous Salisbury Cathedral clock, dated to about 1386, still ticks today despite lacking a face; its purpose was simply to strike the hour. In Milan, a similar mechanism rang out from the Duomo’s bell tower in the early 14th century. Central to these machines were two engineering marvels: the <span class="vocab" data-cn="擒纵机构">escapement</span> and the <span class="vocab" data-cn="齿轮系">gear train</span>, which together transformed a falling weight into controlled, periodic motion.`,
    `The escapement acted like a gatekeeper, allowing the gear train to advance one tooth at a time before locking again. The most common early design was the <span class="vocab" data-cn="杠杆擒纵机构">verge escapement</span>, paired with a horizontal balance called a <span class="vocab" data-cn="摆锤调速器">folliot regulator</span>. As the weight descended, the verge’s pallets alternately released and caught the escape wheel, while the foliot’s oscillation regulated speed. Though crude by modern standards—its rate could drift with temperature or wear—the system was revolutionary because it freed timekeeping from human intervention and made a clock capable of running for many hours on a single charge.`,
    `These mechanical marvels quickly found homes in monastic cloisters, where the ringing of bells marked the <span class="vocab" data-cn="正时祈祷时间">canonical hours</span>. Priests could now hear the precise moment for Matins, Lauds, and Vespers without relying on sunrise. Outside the walls, town councils installed public clocks to coordinate market openings, tax collections, and civic ceremonies. The audible cue of a bell became a shared temporal reference, fostering a collective sense of punctuality that had previously been impossible in dispersed rural communities.`,
    `Beyond religious rhythm, the clock tower emerged as a symbol of municipal pride and economic order. Merchants timed transactions to the hour, artisans scheduled shifts in workshops, and laborers were paid according to documented hours rather than vague daylight estimates. This new “time discipline” laid groundwork for later contractual work arrangements and even influenced early accounting practices. Moreover, the visual presence of a clock face—often adorned with ornate numerals—served as an educational tool, teaching citizens how to read numbers and understand the passage of time.`,
    `The ripple effects extended into scientific inquiry. Precise time measurement was essential for astronomy; consequently, many cathedrals added <span class="vocab" data-cn="天文钟">astronomical clocks</span> that displayed lunar phases, planetary positions, and zodiac signs alongside the hour. These complex mechanisms inspired scholars such as Giovanni de Dondi, whose 14th‑century Astrarium combined multiple dials into a single masterpiece. The quest for accuracy eventually led to Christiaan Huygens’s pendulum clock in 1656, which refined the escapement principle introduced centuries earlier and paved the way for marine chronometers that powered global navigation.`,
    `In retrospect, the invention of the mechanical clock did more than tell time; it reshaped how medieval societies organized themselves. By converting an invisible natural cycle into a public, audible signal, clocks forged a shared temporal framework that underpinned commerce, worship, and governance. This newfound regularity set the stage for the disciplined work patterns of the industrial age and continues to influence our modern obsession with minutes and seconds.`,
  ],
  vocabulary: [
    { word: 'mechanical clock', cn: '机械时钟' },
    { word: 'escapement', cn: '擒纵机构' },
    { word: 'gear train', cn: '齿轮系' },
    { word: 'verge escapement', cn: '杠杆擒纵机构' },
    { word: 'folliot regulator', cn: '摆锤调速器' },
    { word: 'canonical hours', cn: '正时祈祷时间' },
    { word: 'astronomical clock', cn: '天文钟' },
  ],
};

export default article;
