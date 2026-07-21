import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1928 First Commercial Flight Across the United States: The Ford Tri‑Motor and the Birth of Domestic Air Travel》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00499 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00499',
  slug: 'the-1928-first-commercial-flight-across-the-united-states-the-ford-tri-motor-and-the-birth-of-domestic-air-travel',
  title: 'The 1928 First Commercial Flight Across the United States: The Ford Tri‑Motor and the Birth of Domestic Air Travel',
  subtitle: 'How a rugged three‑engine aircraft turned a daring coast‑to‑coast trial into a new era of passenger travel.',
  summary: 'A vivid look at the 1928 demonstration that proved the United States could be crossed by commercial airliners, using the iconic Ford Tri‑Motor.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1928 the United States was still a country where most long‑distance journeys were made by train or automobile. Air travel existed, but it was largely limited to mail contracts and daring barnstormers. The idea of a passenger aircraft flying from New York to San Francisco seemed almost fantastical—until a group of investors decided to put the concept to the test with the sturdy <span class="vocab" data-cn="福特三发动机飞机">Ford Tri‑Motor</span>.`,
    `The Ford Tri‑Motor, affectionately nicknamed the “Tin Goose,” was introduced in 1925 and featured three radial <span class="vocab" data-cn="螺旋桨发动机">propeller engines</span> mounted on a high wing. Its all‑metal <span class="vocab" data-cn="机身">fuselage</span> gave it a durability that wooden aircraft lacked, and its capacity for up to twelve passengers made it an ideal candidate for commercial service. Engineers praised its simple yet robust design, which could tolerate the rough airfields scattered across the continent.`,
    `That same year, Charles A. Lindbergh’s fame from his 1927 transatlantic flight helped spark public interest in domestic aviation. Together with a handful of financiers—including Walter P. Chrysler and William Boeing—Lindbergh co‑founded Transcontinental Air Transport (TAT). Their vision was bold: to create the first <span class="vocab" data-cn="跨洲的">transcontinental</span> airline that could move passengers coast‑to‑coast in less than a week, combining air and rail where necessary.`,
    `To prove the concept, TAT organized a high‑profile demonstration flight on July 15, 1928. Three Ford Tri‑Motors lifted off from Roosevelt Field on Long Island, each carrying a small crew and a handful of journalists. The route traced a chain of stops—Philadelphia, Columbus, St. Louis, Amarillo, and finally Oakland—where the aircraft would refuel, perform maintenance checks, and allow passengers to rest. The entire journey took just under 48 hours of actual flight time, but because night travel was unsafe, the team used overnight trains to bridge the gaps, a practice that later defined TAT’s “air‑rail” schedule.`,
    `The combination of air and rail was revolutionary. At each stop, passengers would disembark, board a Pullman sleeper, and resume their journey at dawn. This hybrid model allowed TAT to claim a coast‑to‑coast service without the need for night flying, which was still hampered by limited navigation aids and unreliable runway lighting. The demonstration highlighted the importance of <span class="vocab" data-cn="导航">navigation</span> techniques such as dead‑reckoning and radio direction finding, tools that would soon become standard in commercial aviation.`,
    `Public reaction to the 1928 trial was electrifying. Newspapers across the nation ran front‑page stories praising the speed and comfort of air travel compared with the week‑long train rides that were then typical. Investors poured capital into TAT, and by May 1930 the airline launched its first regular <span class="vocab" data-cn="定期航班">scheduled service</span> between New York and Los Angeles, still using Ford Tri‑Motors for much of the route. This service laid the groundwork for what would later become United Airlines, one of today’s major carriers.`,
    `The legacy of the Ford Tri‑Motor extends far beyond its 1928 triumph. Its rugged construction proved that metal aircraft could survive the harsh conditions of early airfields, influencing subsequent designs like the Douglas DC‑3. Moreover, the concept of integrating multiple transportation modes foreshadowed modern “hub‑and‑spoke” networks, where passengers transfer between flights and ground transport to reach their final destinations efficiently.`,
    `Looking back, the 1928 coast‑to‑coast demonstration stands as a pivotal moment in aviation history. It transformed public perception of air travel from a daring stunt into a viable means of crossing an entire nation. The humble Tin Goose may have been eclipsed by sleek jetliners today, but its role in birthing domestic air travel remains a testament to ingenuity and bold vision.`,
  ],
  vocabulary: [
    { word: 'Ford Tri‑Motor', cn: '福特三发动机飞机' },
    { word: 'propeller engines', cn: '螺旋桨发动机' },
    { word: 'fuselage', cn: '机身' },
    { word: 'transcontinental', cn: '跨洲的' },
    { word: 'navigation', cn: '导航' },
    { word: 'scheduled service', cn: '定期航班' },
  ],
};

export default article;
