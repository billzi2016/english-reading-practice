import type { Article } from '../../types/index.ts';

// 文件意图：维护《Rolling Thunder: The Invention, Scandal, and Legacy of the First Commercial Roller Coaster》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00244 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00244',
  slug: 'rolling-thunder-the-invention-scandal-and-legacy-of-the-first-commercial-roller-coaster',
  title: 'Rolling Thunder: The Invention, Scandal, and Legacy of the First Commercial Roller Coaster',
  subtitle: 'How a simple gravity ride sparked America’s amusement industry',
  summary: 'The story of LaMarcus Thompson’s “Switchback Railway”, its early controversies, and how it shaped modern thrill rides.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1884 a modest wooden structure rose on Coney Island’s beachfront, drawing curious crowds to what would later be called “Rolling Thunder”. Designed by inventor <span class="vocab" data-cn="拉马库斯·阿德纳·汤普森">LaMarcus A. Thompson</span>, the ride was officially named the <span class="vocab" data-cn="重力回转铁路">Gravity Switchback Railway</span>. Its principle was deceptively simple: a <span class="vocab" data-cn="滑车">carriage</span> would be pulled to the top of a gentle <span class="vocab" data-cn="倾斜角度">incline angle</span>, released, and then coast down a series of shallow hills powered only by <span class="vocab" data-cn="重力">gravity</span>. The experience lasted barely thirty seconds, yet it ignited the imagination of an entire generation.`,
    `Thompson’s design was not merely a novelty; it represented the first true <span class="vocab" data-cn="专利">patent</span>-protected amusement ride. In March 1884 he secured U.S. Patent No. 292,971 for a “gravity railroad” that described the track layout, carriage suspension, and safety brakes. This legal shield allowed him to license the concept to other entrepreneurs, effectively birthing an early commercial industry. By the end of the year, similar “switchback” rides appeared in Atlantic City, Chicago, and even abroad, all tracing their lineage back to Thompson’s original blueprint.`,
    `However, rapid expansion brought unforeseen problems. In August 1885 a carriage on the Coney Island track derailed after a wooden support gave way during a heavy rainstorm. The accident injured three riders and sparked a public outcry over the safety of these new attractions. Newspapers dubbed the incident “The Rolling Thunder Scandal”, accusing operators of cutting corners to maximize profit. In response, city officials introduced one of America’s first <span class="vocab" data-cn="安全监管">safety regulations</span> for amusement rides, mandating regular inspections of the <span class="vocab" data-cn="木结构">wooden structure</span> and requiring redundant braking systems.`,
    `The scandal also ignited a fierce legal battle. Competing ride builder Charles Alcoke claimed that his “Scenic Railway” predated Thompson’s patent, arguing that the concept of a gravity‑driven coaster was public domain. The case went to federal court in 1887, where Judge William H. Hunt ruled in favor of Thompson, emphasizing the specific engineering details—such as the use of a <span class="vocab" data-cn="轨距">track gauge</span> of 4 feet and the patented “double‑rail” safety latch—that distinguished the Switchback Railway from earlier hill‑climbing attractions. The decision reinforced the importance of detailed technical documentation in protecting intellectual property.`,
    `Despite the controversy, the ride’s popularity surged. By 1890, over a dozen “Rolling Thunder” style coasters operated along the East Coast, each adding its own flair—some introduced decorative scenery, others extended the track to create longer circuits. These enhancements laid the groundwork for the next evolutionary leap: the introduction of the “loop‑the‑loop” in 1901 by Edwin Prescott, which borrowed the same basic physics but added a vertical inversion. The lineage from Thompson’s modest switchback to today’s steel giants can be traced through each incremental innovation, all rooted in that original <span class="vocab" data-cn="重力回转铁路">gravity railway</span> concept.`,
    `The legacy of Rolling Thunder extends beyond engineering. It demonstrated how a simple amusement could become a cultural phenomenon, shaping leisure habits and urban development. Coney Island transformed from a seaside resort into an entertainment hub, inspiring other cities to invest in amusement parks as economic engines. Moreover, the early scandal forced the industry to adopt systematic safety standards—a practice that persists today with organizations like ASTM International overseeing ride certification worldwide.`,
    `Today, when modern thrill‑seekers strap into a high‑speed steel coaster that launches at 80 mph, few realize they are riding on the shoulders of a wooden carriage that once creaked down a 30‑foot hill. The story of Rolling Thunder reminds us that every technological marvel begins with curiosity, faces scrutiny, and ultimately reshapes society in ways its creators could scarcely imagine.`,
    `For students of engineering and history alike, the tale offers two clear lessons: first, that rigorous <span class="vocab" data-cn="专利">patent</span> work can protect innovation while encouraging diffusion; second, that safety cannot be an afterthought but must evolve alongside technology. As amusement parks continue to push the boundaries of speed and sensation, they do so standing on the very rails laid down by LaMarcus Thompson over a century ago.`,
  ],
  vocabulary: [
    { word: 'LaMarcus A. Thompson', cn: '拉马库斯·阿德纳·汤普森' },
    { word: 'Gravity Switchback Railway', cn: '重力回转铁路' },
    { word: 'patent', cn: '专利' },
    { word: 'gravity', cn: '重力' },
    { word: 'safety regulation', cn: '安全监管' },
    { word: 'wooden structure', cn: '木结构' },
    { word: 'carriage', cn: '滑车' },
    { word: 'incline angle', cn: '倾斜角度' },
  ],
};

export default article;
