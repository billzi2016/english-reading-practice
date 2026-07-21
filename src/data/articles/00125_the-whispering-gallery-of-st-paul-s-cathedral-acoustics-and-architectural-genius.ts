import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Whispering Gallery of St. Paul's Cathedral: Acoustics and Architectural Genius》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00125 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00125',
  slug: 'the-whispering-gallery-of-st-paul-s-cathedral-acoustics-and-architectural-genius',
  title: 'The Whispering Gallery of St. Paul\'s Cathedral: Acoustics and Architectural Genius',
  subtitle: 'How geometry turned a dome into a giant sound conduit',
  summary: 'Explore the physics behind the famous whispering gallery and why Sir Christopher Wren’s design still amazes visitors.',
  category: 'architecture',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `St. Paul's Cathedral dominates the London skyline, its massive stone <span class="vocab" data-cn="圆顶">dome</span> rising 111 meters above the Thames. After the Great Fire of 1666, Sir Christopher Wren was commissioned to rebuild the city’s spiritual heart, and his design combined Baroque grandeur with daring engineering. Hidden within the inner surface of the dome lies a curious acoustic phenomenon that has delighted tourists for centuries: the <span class="vocab" data-cn="低语画廊">Whispering Gallery</span>.`,
    `The gallery is not a separate room but a circular walkway about 30 meters above the floor, encircling the interior of the dome. Its smooth marble surface forms an almost perfect circle with a diameter of roughly 34 meters. When you stand at one point on this ring and whisper, your voice travels along the curved wall and can be heard clearly on the opposite side, even though the two speakers are separated by dozens of meters of empty space.`,
    `The secret lies in the way sound waves interact with a convex surface. As a listener speaks, the acoustic energy strikes the marble at shallow angles and undergoes <span class="vocab" data-cn="镜面反射">specular reflection</span>. Because the dome’s <span class="vocab" data-cn="曲率">curvature</span> is constant, each reflected ray converges toward a single location directly across the circle—an <span class="vocab" data-cn="声学焦点">acoustic focal point</span>. The result is that whispers are amplified and delivered with surprising clarity at the opposite side of the gallery.`,
    `Visitors have long tested this effect, often placing a hand on the marble to feel the subtle vibration as their words travel. Historical accounts note that even Queen Victoria’s entourage tried the whispering trick during a royal visit in the 19th century. Modern acoustic engineers measure the <span class="vocab" data-cn="混响时间">reverberation time</span> of the dome to be unusually long, meaning sound persists and reinforces itself as it bounces around the interior, further enhancing intelligibility across the gallery.`,
    `Wren’s genius was not limited to aesthetics; he understood that structural integrity could serve acoustic purposes. The dome is supported by a network of <span class="vocab" data-cn="结构肋">structural ribs</span> that distribute weight evenly while also providing a slightly textured surface for sound diffusion. These ribs create subtle variations in the marble’s angle, preventing destructive interference and ensuring that most frequencies—especially those of human speech—remain coherent as they travel around the curve.`,
    `In recent decades, researchers have employed advanced tools such as <span class="vocab" data-cn="激光多普勒振动测量仪">laser Doppler vibrometry</span> to map the vibration patterns of the dome’s interior. Their findings confirm that the whispering effect is strongest at frequencies between 500 Hz and 2 kHz, precisely the range of typical conversational speech. The studies also reveal that temperature gradients inside the cathedral can slightly shift the focal point, explaining occasional variations in how well a whisper is heard on different days.`,
    `The Whispering Gallery remains a vivid illustration of how architecture can harness natural physics to create memorable experiences. It reminds us that Sir Christopher Wren’s design was not merely decorative but an elegant synthesis of art, engineering, and acoustic science—a legacy that continues to echo—quite literally—through the marble walls of St. Paul's today.`,
  ],
  vocabulary: [
    { word: 'Whispering Gallery', cn: '低语画廊' },
    { word: 'dome', cn: '圆顶' },
    { word: 'acoustic focal point', cn: '声学焦点' },
    { word: 'curvature', cn: '曲率' },
    { word: 'reverberation time', cn: '混响时间' },
    { word: 'structural rib', cn: '结构肋' },
    { word: 'laser Doppler vibrometry', cn: '激光多普勒振动测量仪' },
  ],
};

export default article;
