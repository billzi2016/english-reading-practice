import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1930s British Airship R101 Disaster: Engineering Ambition and Tragedy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00374 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00374',
  slug: 'the-1930s-british-airship-r101-disaster-engineering-ambition-and-tragedy',
  title: 'The 1930s British Airship R101 Disaster: Engineering Ambition and Tragedy',
  subtitle: 'How political pressure and technical optimism collided over the Atlantic sky',
  summary: 'A narrative of the R101’s design, its fateful final flight, and the engineering lessons that followed.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1930s Britain dreamed of a new kind of empire‑linking transport. The <span class="vocab" data-cn="飞艇">airship</span> promised to glide silently across oceans, carrying passengers and mail faster than any ship yet cheaper than an emerging airline. The government’s <span class="vocab" data-cn="英国航空部">British Air Ministry</span> commissioned a series of massive <span class="vocab" data-cn="刚性飞艇">rigid airships</span>, the most ambitious being R101, intended to demonstrate British engineering prowess and to connect London with India in a single night.</p>`,
    `R101 was designed by the renowned aeronautical engineer Sir <span class="vocab" data-cn="弗朗西斯·埃文斯">Francis Webb</span>, who envisioned a vessel 731 feet long, powered by five diesel engines driving four large propellers. Its hull consisted of an intricate framework of aluminium alloy girders, over which a series of gas cells were stretched. These cells were filled primarily with <span class="vocab" data-cn="氢气">hydrogen</span>, chosen for its high lift despite its notorious flammability, because Britain lacked sufficient supplies of the safer <span class="vocab" data-cn="氦气">helium</span>. The designers also incorporated a novel “<span class="vocab" data-cn="结构完整性">structural integrity</span>” monitoring system that relied on strain gauges embedded in the girders, hoping to catch any stress before it became catastrophic.</p>`,
    `Political ambition soon outpaced technical caution. By 1930 the Air Ministry had set an aggressive timetable: R101 must be ready for a demonstration flight to India by late summer 1930, coinciding with the Imperial Conference in London. To meet this deadline, several design compromises were made. The original plan called for a lighter <span class="vocab" data-cn="气囊外壳">balloon envelope</span> using a new type of doped fabric, but production delays forced the use of heavier, less tested material. Moreover, additional passenger cabins and luxury fittings were added at the last minute, increasing weight by several tons.</p>`,
    `The first test flights in early 1930 seemed promising. R101 lifted off from Cardington with a smooth ascent, and its diesel engines performed within expected power ranges. However, engineers noted a persistent vibration in the starboard propeller shaft that was never fully resolved. On 4 October 1930, after a brief stop at Islington for refuelling, R101 set out on its final journey: a non‑stop flight from Cardington to Karachi, with a scheduled stopover at Cairo. The crew included senior Air Ministry officials who intended to showcase the airship’s capabilities to political leaders.</p>`,
    `Disaster struck shortly after nightfall over France. A sudden change in wind direction forced R101 into a steep bank while attempting to align with its planned route. Witnesses on the ground reported hearing a loud “whoosh” followed by an explosion near the forward gondola. The hydrogen cells ignited, and within minutes the entire hull was engulfed in flame. Of the 54 people aboard, only 15 survived, most rescued from the sea after the wreckage crashed into the French countryside near Beauvais.</p>`,
    `The aftermath sparked a national debate about the future of British airship development. A public inquiry led by Sir <span class="vocab" data-cn="约翰·斯蒂芬森">John Stephen</span> concluded that the disaster resulted from a combination of rushed construction, inadequate testing of the new envelope material, and the decision to use hydrogen despite known risks. The Air Ministry cancelled all remaining airship projects, marking the end of Britain’s rigid airship era. Engineers worldwide took note: the R101 tragedy reinforced the importance of rigorous material testing, realistic scheduling, and the preference for non‑flammable lifting gases whenever possible.</p>`,
    `Today, the R101 wreckage lies beneath a memorial in France, and its story is taught as a cautionary case study in aerospace engineering curricula. Modern airships—such as those built by contemporary companies for surveillance or cargo—benefit from advanced composites, computer‑controlled flight systems, and helium that is now readily available worldwide. The R101’s ambition reminds us that technological breakthroughs require not only bold vision but also disciplined engineering practice.</p>`,
  ],
  vocabulary: [
    { word: 'airship', cn: '飞艇' },
    { word: 'British Air Ministry', cn: '英国航空部' },
    { word: 'rigid airship', cn: '刚性飞艇' },
    { word: 'hydrogen', cn: '氢气' },
    { word: 'helium', cn: '氦气' },
    { word: 'structural integrity', cn: '结构完整性' },
    { word: 'balloon envelope', cn: '气囊外壳' },
    { word: 'John Stephen', cn: '约翰·斯蒂芬森' },
  ],
};

export default article;
