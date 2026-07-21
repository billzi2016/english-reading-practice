import type { Article } from '../../types/index.ts';

// 文件意图：维护《Amelia Earhart’s 1932 Solo Atlantic Flight: Triumph, Technology, and the Road to a Legend》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00116 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00116',
  slug: 'amelia-earhart-s-1932-solo-atlantic-flight-triumph-technology-and-the-road-to-a-legend',
  title: 'Amelia Earhart’s 1932 Solo Atlantic Flight: Triumph, Technology, and the Road to a Legend',
  subtitle: 'How a daring pilot crossed the ocean alone and reshaped aviation history.',
  summary: 'A narrative of Amelia Earhart’s historic solo crossing of the Atlantic in 1932, highlighting the aircraft, navigation tools, and lasting impact.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When Amelia Earhart stepped onto the tarmac at Harbour Grace on May 20, 1932, she was not just another aviator; she was a symbol of daring ambition. After earning her pilot’s license in 1921 and setting several records, Earhart set her sights on a feat that had only been achieved once before—crossing the <span class="vocab" data-cn="大西洋">Atlantic Ocean</span> alone. The world watched with bated breath as she prepared for what would become one of the most celebrated chapters in early aviation.`,
    `The aircraft chosen for the journey was a <span class="vocab" data-cn="洛克希德·维加飞机，一种单翼高性能机">Lockheed Vega</span>, a sleek, single‑engine monoplane renowned for its speed and range. Earhart’s Vega was painted bright yellow to improve visibility in case of an emergency landing at sea. Inside the cramped cockpit she installed a state‑of‑the‑art <span class="vocab" data-cn="航海仪器，用于确定位置的设备">navigation</span> suite, including a magnetic compass, a drift meter, and a newly developed radio direction finder that could lock onto coastal <span class="vocab" data-cn="无线电信标，帮助定位的装置">radio beacons</span>. These tools were essential for a flight that would last over fifteen hours without any visual landmarks.`,
    `Take‑off was smooth, but the weather quickly turned treacherous. Thick fog rolled in from the east, reducing visibility to just a few meters. Earhart relied heavily on her instruments, trusting the drift meter to indicate lateral movement caused by wind and the radio direction finder to confirm she was staying on course toward Europe. The Vega’s powerful 450‑horsepower engine roared as it climbed to an <span class="vocab" data-cn="海拔，高度">altitude</span> of roughly 3,000 feet, a level that balanced fuel efficiency with the need to stay above the worst of the weather.</    `,
    `Midway across the ocean, the engine began to sputter—a common problem for early aircraft operating at high power settings for extended periods. Earhart’s training in <span class="vocab" data-cn="航空工程学，研究飞机设计和性能的学科">aeronautical engineering</span> paid off; she adjusted the mixture and throttle, coaxing the engine back to stable operation. Simultaneously, a sudden bout of turbulence tossed the Vega, forcing her to manually correct roll and pitch while keeping an eye on fuel gauges that were dwindling faster than anticipated.`,
    `By the time the coastline of Ireland appeared on the horizon, Earhart had been airborne for nearly sixteen hours, having covered more than 2,000 miles. She descended gradually, using the radio beacon at Limerick to verify her position before making a final push toward the airfield in Culmore, Northern Ireland. The landing was rough but successful; the Vega skidded across the grass, its wheels digging into the soft earth as onlookers rushed forward, cheering and waving flags.`,
    `The triumph resonated worldwide. Newspapers hailed Earhart as “the woman who dared to fly alone over the Atlantic,” and she received a hero’s welcome in both Europe and America. The flight proved that long‑distance solo aviation was not only possible but could be accomplished safely with proper preparation, reliable technology, and skilled piloting. It also secured her place on the cover of *Time* magazine later that year, cementing her status as an icon of modern womanhood.`,
    `Earhart’s 1932 crossing became a cornerstone of her legend, influencing her subsequent attempts to circumnavigate the globe. Though her final voyage in 1937 ended in mystery, the lessons learned from the Atlantic flight—particularly the importance of redundant navigation aids and rigorous engine monitoring—continued to inform aviation safety standards for decades. Today, the story serves as both an inspiring narrative of personal courage and a case study in early 20th‑century aircraft technology.`,
  ],
  vocabulary: [
    { word: 'Atlantic Ocean', cn: '大西洋' },
    { word: 'Lockheed Vega', cn: '洛克希德·维加飞机，一种单翼高性能机' },
    { word: 'navigation', cn: '航海仪器，用于确定位置的设备' },
    { word: 'radio beacon', cn: '无线电信标，帮助定位的装置' },
    { word: 'altitude', cn: '海拔，高度' },
    { word: 'aeronautical engineering', cn: '航空工程学，研究飞机设计和性能的学科' },
  ],
};

export default article;
