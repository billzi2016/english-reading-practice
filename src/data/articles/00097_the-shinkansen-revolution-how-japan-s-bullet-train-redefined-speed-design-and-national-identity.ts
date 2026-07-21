import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Shinkansen Revolution: How Japan’s Bullet Train Redefined Speed, Design, and National Identity》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00097 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00097',
  slug: 'the-shinkansen-revolution-how-japan-s-bullet-train-redefined-speed-design-and-national-identity',
  title: 'The Shinkansen Revolution: How Japan’s Bullet Train Redefined Speed, Design, and National Identity',
  subtitle: 'From the 1964 debut to today’s maglev dreams, a journey through technology and culture.',
  summary: 'Explore how the Shinkansen transformed travel, engineering, and Japanese self‑image in just six decades.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the first <span class="vocab" data-cn="新干线">Shinkansen</span> roared out of Tokyo Station on October 1, 1964, it did more than cut travel time between Tokyo and Osaka. It arrived just in time for the Summer Olympics, turning a nation still rebuilding from war into a showcase of modernity. The sleek silver train, capable of 210 km/h (130 mph), became an emblem of Japan’s rapid economic growth, known locally as the “economic miracle.” Its debut marked the birth of what we now call <span class="vocab" data-cn="高速铁路">high‑speed rail</span>, a concept that would soon spread worldwide.`,
    `Behind the train’s speed lay several engineering breakthroughs. Unlike most Japanese lines built to narrow gauge (1,067 mm), the Shinkansen adopted standard gauge (1,435 mm), allowing more stable dynamics at high velocity. The line was fully electrified using a 25 kV AC <span class="vocab" data-cn="受电弓">catenary</span> system, eliminating the need for diesel locomotives and reducing emissions. Moreover, dedicated tracks were laid with gentle curves and minimal grade changes, a design made possible by extensive use of <span class="vocab" data-cn="隧道掘进机">tunnel boring machines</span>, which carved through mountains rather than routing around them.`,
    `Design was not left to chance. Engineers hired aeronautical experts to shape the train’s nose, resulting in the iconic “bullet” profile that cut air resistance and minimized tunnel boom—a sudden pressure wave felt by passengers when a high‑speed train enters a tunnel. Wind‑tunnel testing refined this shape into a tapered “duck bill,” which later models like the 300 Series would perfect with a longer, more streamlined nose. Inside, the car bodies employed a lightweight <span class="vocab" data-cn="单壳结构">monocoque</span> construction, balancing strength and efficiency while keeping interior noise low.`,
    `Beyond technology, the Shinkansen reshaped Japan’s national identity. It became a moving symbol of precision, punctuality, and collective effort—values that resonated deeply in post‑war society. The phrase “<span class="vocab" data-cn="准时">on‑time</span> as a Shinkansen” entered everyday language, reflecting the public’s expectation for reliability. Schools organized field trips on the train, and popular media featured it in films and anime, reinforcing its status as a cultural icon. The railway also fostered a sense of unity, shrinking distances between regions and encouraging people to view Japan as an integrated whole rather than isolated prefectures.`,
    `The economic ripple effects were profound. Travel time between Tokyo and Osaka fell from six hours by conventional train to just 2 hours 30 minutes on the original line, spurring business trips, tourism, and commuter flows that revitalized regional economies. Cities along the route—such as Nagoya and Kyoto—experienced a surge in investment, while new stations prompted urban redevelopment projects. The Shinkansen’s success also inspired private sector innovation, leading to the emergence of high‑speed rail manufacturers who exported technology to Taiwan, China, and beyond.`,
    `Today, the legacy continues with newer series like the N700S, which incorporate <span class="vocab" data-cn="磁悬浮列车">maglev</span> principles for smoother rides and energy savings. The upcoming Chuo Shinkansen line, slated to connect Tokyo and Nagoya via maglev technology, aims for speeds up to 500 km/h (311 mph), promising another leap in travel efficiency. As Japan confronts climate challenges, the railway’s low‑carbon footprint positions it as a cornerstone of sustainable transport policy. The Shinkansen story thus remains a living example of how engineering excellence can shape a nation’s self‑perception and future trajectory.`,
  ],
  vocabulary: [
    { word: 'Shinkansen', cn: '新干线' },
    { word: 'high-speed rail', cn: '高速铁路' },
    { word: 'catenary', cn: '受电弓' },
    { word: 'tunnel boring machine', cn: '隧道掘进机' },
    { word: 'monocoque', cn: '单壳结构' },
    { word: 'maglev', cn: '磁悬浮列车' },
    { word: 'on-time', cn: '准时' },
  ],
};

export default article;
