import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Transcontinental Railroad: Engineering Triumphs, Labor Conflict, and Nation‑Building》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00210 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00210',
  slug: 'the-first-transcontinental-railroad-engineering-triumphs-labor-conflict-and-nation-building',
  title: 'The First Transcontinental Railroad: Engineering Triumphs, Labor Conflict, and Nation‑Building',
  subtitle: 'How steel tracks stitched a continent together amid technical marvels and human struggle.',
  summary: 'An engaging look at the engineering feats, labor tensions, and nation‑building impact of America’s first transcontinental railway.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1862, as the Civil War raged in the east, Congress passed the Pacific Railway Acts, envisioning a <span class="vocab" data-cn="跨洲的">transcontinental</span> line that would bind the Atlantic and Pacific coasts. The promise was more than commercial; it symbolized national unity after years of division. Yet the vision faced daunting geography: endless plains, towering mountain ranges, and deserts that had never before been crossed by iron rails.`,
    `The Union Pacific Company began laying track westward across the Great Plains, confronting a different set of obstacles. The thin prairie soil required massive <span class="vocab" data-cn="标准轨距">standard gauge</span> ties to keep the line stable, while frequent thunderstorms threatened to wash out freshly built embankments. Engineers relied on the newly invented portable steam‑driven <span class="vocab" data-cn="机车">locomotive</span>, which could haul heavy loads over uneven terrain, a technology that was still being refined for long‑distance service.`,
    `Meanwhile, the Central Pacific faced the Sierra Nevada’s sheer granite cliffs. To carve a path through solid rock, crews blasted dozens of <span class="vocab" data-cn="隧道">tunnel</span>s using black powder and hand‑driven drills. The most famous was Tunnel No. 6, which required over 10,000 man‑hours to complete. Above the snow line, engineers erected massive <span class="vocab" data-cn="防雪棚">snow sheds</span>—wooden structures that allowed avalanches to pass overhead without burying the tracks, a clever adaptation that saved countless lives and kept trains running year after year.`,
    `Labor on the Central Pacific was supplied largely by Chinese immigrants, often referred to as <span class="vocab" data-cn="华工">Chinese laborers</span>. These men endured grueling work: carrying rock drills up steep grades, handling explosives, and constructing the snow sheds in sub‑zero temperatures. Their efficiency earned them a reputation for reliability, yet they faced pervasive discrimination, lower wages, and legal restrictions that barred them from many public spaces.`,
    `On the Union Pacific side, Irish immigrants formed a substantial portion of the workforce. They too contended with hazardous conditions—working on temporary bridges over rivers, laying track in scorching heat, and confronting frequent attacks by hostile groups. Both Chinese and Irish workers organized informal <span class="vocab" data-cn="工会">union</span> meetings to demand better pay and safer environments, leading to occasional strikes that temporarily halted progress but ultimately forced the railroad companies to improve labor contracts.`,
    `The two lines finally met on May 10, 1869, at Promontory Summit in Utah. In a ceremony watched by politicians, engineers, and thousands of workers, a ceremonial spike—later dubbed the <span class="vocab" data-cn="金钉">Golden Spike</span>—was driven into a polished silver tie. The moment was captured in photographs that spread across newspapers, symbolizing not only an engineering triumph but also the realization of a national promise to connect east and west.` ,
    `The completed railroad reshaped America’s economic landscape. It accelerated settlement of the West, reduced coast‑to‑coast travel time from months to days, and opened markets for agricultural products from the Great Plains. Moreover, it set a precedent for future large‑scale infrastructure projects, demonstrating how coordinated engineering, diverse labor forces, and political will could transform a continent. The legacy of the first <span class="vocab" data-cn="跨洲的">transcontinental</span> railroad endures in today’s high‑speed rail debates and in the cultural memory of a nation built on steel and sweat.`
  ],
  vocabulary: [
    { word: 'transcontinental', cn: '跨洲的' },
    { word: 'snow shed', cn: '防雪棚' },
    { word: 'tunnel', cn: '隧道' },
    { word: 'standard gauge', cn: '标准轨距' },
    { word: 'locomotive', cn: '机车' },
    { word: 'Chinese laborers', cn: '华工' },
    { word: 'union', cn: '工会' },
    { word: 'Golden Spike', cn: '金钉' }
  ],
};

export default article;
