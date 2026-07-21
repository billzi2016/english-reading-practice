import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1904–1905 Russo‑Japanese War: Naval Innovation and the Dawn of Modern Battleships》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00362 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00362',
  slug: 'the-1904-1905-russo-japanese-war-naval-innovation-and-the-dawn-of-modern-battleships',
  title: 'The 1904–1905 Russo‑Japanese War: Naval Innovation and the Dawn of Modern Battleships',
  subtitle: 'How a clash in East Asia reshaped naval engineering',
  summary: 'A narrative of how the Russo‑Japanese War accelerated battleship design, communications, and tactics.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When the Imperial Japanese Navy (IJN) set sail for Port Arthur in early 1904, it carried more than just steel hulls; it bore a suite of <span class="vocab" data-cn="新技术">technological innovations</span> that would soon redefine sea warfare. The flagship <span class="vocab" data-cn="日本战列舰三笠号">Mikasa</span>, a pre‑dreadnought battleship, featured an advanced <span class="vocab" data-cn="装甲带">armor belt</span> and a mixed battery of 12‑inch and 6‑inch guns, allowing it to engage both capital ships and smaller vessels with relative efficiency.`
    ,
    `Across the strait, the Russian Baltic Fleet—renamed the Second Pacific Squadron—relied on older designs such as the <span class="vocab" data-cn="俄国战列舰彼得罗巴甫洛夫斯克号">Petropavlovsk</span>. While formidable in displacement, its propulsion system was a coal‑driven triple‑expansion engine that struggled to match the Japanese fleet’s newer water‑tube boilers. This disparity manifested during the long voyage around Africa and South America, where fuel consumption and maintenance issues slowed the Russian advance toward the Sea of Japan.`
    ,
    `One of the most consequential breakthroughs was the adoption of <span class="vocab" data-cn="无线电报">wireless telegraphy</span>. Japanese ships equipped with Marconi transmitters could coordinate fleet movements in real time, a capability that proved decisive at the Battle of Tsushima. In contrast, many Russian vessels still relied on flag signals and visual lanterns, limiting their ability to react swiftly when the IJN executed its famed “cross‑the‑T” maneuver.`
    ,
    `The war also highlighted the growing importance of <span class="vocab" data-cn="鱼雷艇驱逐舰">torpedo boat destroyers</span>. Both sides deployed fast, lightly armored ships to protect larger vessels from torpedo attacks. The Japanese “Kashima” class destroyers demonstrated superior speed and maneuverability, using rapid‑fire guns to neutralize Russian torpedo boats before they could close within effective range. This cat-and-mouse dynamic forced naval architects to rethink the balance between firepower, armor, and agility in future designs.`
    ,
    `Gunnery accuracy saw a dramatic leap thanks to improved rangefinders and centralized fire‑control systems. At Tsushima, Japanese gunners employed coincidence rangefinders mounted on the foremast, allowing them to calculate target distance with unprecedented precision. The resulting salvoes struck Russian decks at longer ranges than ever before, shattering the myth that battleship engagements were limited to close quarters. This success spurred the Royal Navy and other powers to invest heavily in optical fire‑control technology during the ensuing decade.`
    ,
    `The aftermath of the conflict left a clear imprint on naval doctrine. Observers noted that the combination of heavy armor, mixed‑caliber batteries, and reliable wireless communication created a template for the next generation of warships. When HMS <span class="vocab" data-cn="无畏号">Dreadnought</span> entered service in 1906, its all‑big‑gun layout and turbine propulsion were direct responses to lessons learned from Tsushima—showcasing how a regional war could accelerate global naval evolution.`
    ,
    `Beyond hardware, the Russo‑Japanese War reshaped strategic thinking about sea control. The Japanese victory demonstrated that a well‑coordinated fleet, even when outnumbered, could dominate a theater through superior technology and tactics. This realization influenced naval planners worldwide, prompting them to prioritize training in wireless communication, fire‑control drills, and destroyer escort tactics—principles that would later prove vital during World War I’s massive naval engagements.`
  ],
  vocabulary: [
    { word: 'technological innovations', cn: '新技术' },
    { word: 'Mikasa', cn: '日本战列舰三笠号' },
    { word: 'armor belt', cn: '装甲带' },
    { word: 'wireless telegraphy', cn: '无线电报' },
    { word: 'torpedo boat destroyers', cn: '鱼雷艇驱逐舰' },
    { word: 'rangefinders', cn: '测距仪' },
    { word: 'Dreadnought', cn: '无畏号' }
  ],
};

export default article;
