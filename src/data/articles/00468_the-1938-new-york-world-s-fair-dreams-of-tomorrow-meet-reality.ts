import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1939–1940 New York World’s Fair: Dreams of Tomorrow Meet Reality》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00468 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00468',
  slug: 'the-1938-new-york-world-s-fair-dreams-of-tomorrow-meet-reality',
  title: 'The 1939–1940 New York World’s Fair: Dreams of Tomorrow Meet Reality',
  subtitle: 'How a pre‑war exhibition imagined the future and shaped post‑war America',
  summary: 'An engaging look at the iconic fair that blended optimism, technology, and design on the eve of World War II.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the gates opened on April 30 1939, the sprawling grounds of Flushing Meadows–Corona Park were dominated by a gleaming pair of steel structures: the <span class="vocab" data-cn="象征未来的两座钢铁塔">Trylon</span> and its companion, the <span class="vocab" data-cn="巨大的球形展馆，内部展示了世界各国的成就">Perisphere</span>. Officially titled “The World of Tomorrow,” the <span class="vocab" data-cn="世博会，一种大型国际性展览活动">World’s Fair</span> promised visitors a glimpse into life after the Great Depression, using bold architecture and cutting‑edge inventions to sell hope as much as spectacle.`,
    `Architects embraced the sleek lines of <span class="vocab" data-cn="一种装饰艺术风格，以几何形状和对称性著称">Art Deco</span> while also experimenting with emerging ideas from <span class="vocab" data-cn="20世纪初的艺术与设计运动，强调速度、机械和未来感">Futurism</span>. The Belgian pavilion, for example, featured a streamlined façade that seemed to glide forward, and the “House of Tomorrow” displayed an open‑plan layout, built‑in appliances, and even a glass wall that could be rolled up like a curtain. These designs were not merely aesthetic; they embodied a <span class="vocab" data-cn="对城市整体布局和功能的系统性规划">cohesive system</span> of urban planning that imagined cities where traffic flowed smoothly and homes catered to modern lifestyles.`,
    `Technology took center stage. RCA unveiled the first public demonstration of television, broadcasting live images of the fair’s own <span class="vocab" data-cn="一种用于展示未来城市交通的单轨列车原型">monorail</span> prototype that whisked visitors above the crowds. Meanwhile, Bell Labs showcased a working model of a telephone exchange that could handle dozens of calls simultaneously—a precursor to today’s digital networks. The fair also featured an early <span class="vocab" data-cn="彩色电视的实验性展示">color‑television</span> system, though only a handful of attendees saw the vivid hues before the technology was shelved for wartime production.`,
    `Beyond gadgets, the exhibition reflected America’s shifting <span class="vocab" data-cn="消费文化，指大众对商品和服务的需求与追求">consumer culture</span>. Booths from General Motors, Coca‑Cola, and Westinghouse turned shopping into an experience, offering free samples, interactive displays, and glossy brochures that promised a better life through ownership. The “World of Tomorrow” narrative suggested that prosperity would return not just through economic recovery but also via the adoption of new appliances, automobiles, and household conveniences.`,
    `International participation added layers of political nuance. Pavilions from Japan, Brazil, and even the Soviet Union presented their own visions of progress, each subtly competing for diplomatic favor in a world edging toward conflict. Disney’s “Tomorrowland” attraction—featuring animated shorts about space travel and underwater cities—captured the imagination of children and adults alike, reinforcing the notion that exploration beyond Earth was not fantasy but an imminent reality.`,
    `When the fair closed on October 27 1940, many of its structures were dismantled, yet its influence endured. The layout of Flushing Meadows later became a public park, while the ideas championed there—mass transit, modular housing, and integrated media—shaped post‑war suburban development across the United States. Architects such as Walter Gropius cited the fair’s emphasis on functional design when promoting the Bauhaus movement in America, linking New York’s temporary showcase to a lasting architectural legacy.`,
    `Looking back, some of the fair’s predictions have materialized: space travel, television, and even early concepts of smart homes are now everyday realities. Others—like fully automated cities or ubiquitous personal flying devices—remain aspirational. Nonetheless, the 1939–1940 New York World’s Fair stands as a vivid reminder that bold imagination, when paired with tangible innovation, can steer society toward a future once thought impossible.`,
  ],
  vocabulary: [
    { word: 'World’s Fair', cn: '世博会，一种大型国际性展览活动' },
    { word: 'Trylon', cn: '象征未来的两座钢铁塔' },
    { word: 'Perisphere', cn: '巨大的球形展馆，内部展示了世界各国的成就' },
    { word: 'Art Deco', cn: '一种装饰艺术风格，以几何形状和对称性著称' },
    { word: 'Futurism', cn: '20世纪初的艺术与设计运动，强调速度、机械和未来感' },
    { word: 'cohesive system', cn: '对城市整体布局和功能的系统性规划' },
    { word: 'monorail', cn: '一种用于展示未来城市交通的单轨列车原型' },
    { word: 'color‑television', cn: '彩色电视的实验性展示' },
    { word: 'consumer culture', cn: '消费文化，指大众对商品和服务的需求与追求' },
  ],
};

export default article;
