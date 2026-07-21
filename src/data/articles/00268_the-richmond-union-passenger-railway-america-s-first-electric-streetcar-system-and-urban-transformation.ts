import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Richmond Union Passenger Railway: America's First Electric Streetcar System and Urban Transformation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00268 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00268',
  slug: 'the-richmond-union-passenger-railway-america-s-first-electric-streetcar-system-and-urban-transformation',
  title: 'The Richmond Union Passenger Railway: America\'s First Electric Streetcar System and Urban Transformation',
  subtitle: 'How a 19th‑century innovation reshaped a Southern city',
  summary: 'An exploration of the world’s first electric streetcar system in Richmond, Virginia, and its lasting impact on urban growth.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1888, the city of Richmond, Virginia witnessed a quiet revolution when the <span class="vocab" data-cn="电气化">electrification</span> of its streetcar network was completed. Engineer Frank J. Sprague had spent months designing a system that could replace the noisy horse‑drawn carriages with smooth, reliable electric vehicles. On February 2nd, the first electric car glided along the tracks, powered by an <span class="vocab" data-cn="架空电车线">overhead trolley</span> that delivered current from a central power station to each moving vehicle.</`,
    `The technical heart of Sprague’s design was the <span class="vocab" data-cn="牵引电动机">traction motor</span>, a compact, high‑torque engine mounted directly on the car’s axle. Unlike earlier attempts that used cumbersome external generators, this motor could draw power continuously from the overhead wire, allowing cars to maintain consistent speeds even on Richmond’s hilly streets. The system also featured a sophisticated control mechanism that let operators adjust voltage on the fly, a safety feature unheard of in horse‑car operations.</`,
    `Before the electric streetcars arrived, Richmond’s urban core was cramped, and its outskirts were largely inaccessible to most residents. The new railway opened up a corridor stretching from downtown to the former plantation lands along the James River. As the cars ran every few minutes, land values along the line surged, prompting developers to subdivide large estates into modest “streetcar suburbs.” This pattern of growth—later termed <span class="vocab" data-cn="郊区化">suburbanization</span>—mirrored similar transformations in European cities but was unprecedented in the United States at that time.</`,
    `The ripple effects extended beyond real estate. Local businesses reported a 30 % increase in customer traffic within two years, as commuters could now travel farther without the fatigue of walking or the expense of horse maintenance. Schools and churches followed suit, establishing new branches near the stops to serve the expanding population. In municipal meetings, officials began discussing <span class="vocab" data-cn="城市规划">urban planning</span> concepts such as zoning districts, a practice that would only become formalized decades later.</`,
    `While the Richmond Union Passenger Railway (RUPR) was celebrated for its efficiency, it also sparked debates about public versus private control of essential services. The original company operated as a <span class="vocab" data-cn="公共事业公司">public utility</span>, but faced criticism when fare hikes were proposed to fund further extensions. Citizens organized petitions and town hall meetings, laying early groundwork for the modern discourse on transportation equity.</`,
    `Technologically, Sprague’s success in Richmond inspired a wave of <span class="vocab" data-cn="城际电车">interurban</span> projects across the Midwest and West Coast. Cities such as Chicago, Los Angeles, and San Francisco adopted similar overhead systems, each adapting the core principles to local geography. By 1900, more than 30 % of American urban populations rode electric streetcars daily—a testament to how a single experiment in Virginia reshaped national mobility.</`,
    `Today, remnants of the original RUPR infrastructure survive as historic markers and preserved rolling stock in museums. Scholars view the Richmond system not merely as a transportation milestone but as an early example of how <span class="vocab" data-cn="技术创新">technological innovation</span> can drive profound social change. The streetcar’s legacy lives on in modern light‑rail projects, reminding us that the tracks laid over a century ago still influence the shape of our cities.`],
  vocabulary: [
    { word: 'electrification', cn: '电气化' },
    { word: 'overhead trolley', cn: '架空电车线' },
    { word: 'traction motor', cn: '牵引电动机' },
    { word: 'suburbanization', cn: '郊区化' },
    { word: 'public utility', cn: '公共事业公司' },
    { word: 'interurban', cn: '城际电车' },
    { word: 'technological innovation', cn: '技术创新' }
  ],
};

export default article;
