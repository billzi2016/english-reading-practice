import type { Article } from '../../types/index.ts';

// 文件意图：维护《Dennis Tito’s Journey: The First Private Citizen in Space and the Birth of Space Tourism》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00236 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00236',
  slug: 'dennis-tito-s-journey-the-first-private-citizen-in-space-and-the-birth-of-space-tourism',
  title: 'Dennis Tito’s Journey: The First Private Citizen in Space and the Birth of Space Tourism',
  subtitle: 'How a retired engineer turned a dream into the first orbital flight for a private individual.',
  summary: 'In 2001 Dennis Tito paid his way to the International Space Station, launching the modern era of space tourism.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When Dennis Tito first looked up at the night sky as a child in New York, he imagined himself floating among the stars. Decades later, after building a successful career in finance and engineering, he turned that childhood wonder into a concrete goal: to become the world’s first private citizen to experience <span class="vocab" data-cn="太空旅游">space tourism</span>. His determination coincided with the post‑Cold War opening of Russia’s human‑spaceflight program to commercial customers, creating an unprecedented opportunity for a civilian to ride a Soyuz spacecraft.`,
    `Tito’s wealth stemmed from his role as co‑founder of Wilshire Associates, a leading investment‑consulting firm. By the late 1990s he had amassed enough capital to contemplate a $20 million purchase of a seat on a Russian launch vehicle. He partnered with <span class="vocab" data-cn="太空探险公司">Space Adventures</span>, a U.S. company that specialized in brokering private flights with Roscosmos, the Russian state space agency. The negotiations were complex: Tito had to secure not only a launch slot but also extensive medical clearance and astronaut‑level training.`,
    `The agreement required Tito to undergo six months of rigorous preparation at the Yuri Gagarin Cosmonaut Training Center near Moscow. He learned how to survive in a vacuum, operate life‑support systems, and cope with <span class="vocab" data-cn="微重力">microgravity</span>. The training also included Russian language lessons, because all mission briefings were conducted in Russian. By the time April 2001 arrived, Tito was ready to board the <span class="vocab" data-cn="联盟号TM-32飞船">Soyuz TM‑32</span> alongside veteran cosmonaut Sergei Krikalev and fellow passenger Yuri Baturin, a Russian businessman turned spaceflight participant.`,
    `The launch from Baikonur Cosmodrome on 28 April 2001 was flawless. After a two‑hour ascent, the Soyuz entered orbit and performed a series of engine burns to rendezvous with the <span class="vocab" data-cn="国际空间站">International Space Station</span>. Docking occurred on 29 April, and Tito became the first non‑government astronaut to live aboard the ISS. During his eight‑day stay he floated through the station’s modules, conducted a few scientific experiments for educational outreach, and spent countless hours gazing at Earth through the Cupola, describing the view as “a thin blue marble suspended in blackness.”`,
    `Tito’s presence on the ISS sparked worldwide media attention. Newspapers ran headlines such as “Million‑Dollar Tourist” while scientists debated the implications of private individuals sharing limited orbital resources. Nonetheless, his flight demonstrated that commercial participants could safely integrate into a government‑run orbital platform, paving the way for subsequent tourists like South African Mark Shuttleworth (2002) and Iranian Anousheh Ansari (2006). The success also encouraged Roscosmos to formalize its commercial launch services, eventually leading to a steady stream of private seats sold through Space Adventures.`,
    `The ripple effects extended beyond orbital tourism. In the 2010s, companies such as Virgin Galactic and Blue Origin began developing <span class="vocab" data-cn="亚轨道">suborbital</span> vehicles that would offer a few minutes of weightlessness at a fraction of the cost of an orbital flight. Meanwhile, SpaceX’s Crew Dragon opened a new chapter in 2021 with the Inspiration4 mission—an all‑civilian <span class="vocab" data-cn="轨道飞行">orbital flight</span> that raised funds for charity. Tito’s pioneering journey is often cited as the catalyst that proved private demand could exist, motivating investors to pour billions into reusable launch systems and space habitats.`,
    `Looking back, Dennis Tito’s 2001 adventure stands as a landmark in human spaceflight history. It transformed the notion of “space” from an exclusive domain of nation‑states to a frontier accessible to ordinary citizens with sufficient resources and determination. As commercial orbital hotels, lunar landers, and even Mars missions move from concept to reality, the legacy of that first private traveler reminds us that bold dreams, when paired with concrete investment, can rewrite what humanity considers possible.`,
  ],
  vocabulary: [
    { word: 'space tourism', cn: '太空旅游' },
    { word: 'Space Adventures', cn: '太空探险公司' },
    { word: 'Roscosmos', cn: '俄罗斯航天局' },
    { word: 'microgravity', cn: '微重力' },
    { word: 'Soyuz TM-32', cn: '联盟号TM-32飞船' },
    { word: 'International Space Station', cn: '国际空间站' },
    { word: 'suborbital', cn: '亚轨道' },
    { word: 'orbital flight', cn: '轨道飞行' },
  ],
};

export default article;
