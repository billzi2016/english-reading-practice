import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise and Fall of NBC: From Radio Network Pioneer to Television Giant and Its Cultural Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00248 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00248',
  slug: 'the-rise-and-fall-of-nbc-from-radio-network-pioneer-to-television-giant-and-its-cultural-legacy',
  title: 'The Rise and Fall of NBC: From Radio Network Pioneer to Television Giant and Its Cultural Legacy',
  subtitle: 'How a pioneering broadcaster shaped American media and why its dominance waned.',
  summary: 'A narrative of NBC’s transformation from the first national radio network to a television powerhouse, and the forces that led to its decline.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1920s, the <span class="vocab" data-cn="美国全国广播公司">National Broadcasting Company</span> (NBC) emerged from a handful of West‑coast stations owned by the Radio Corporation of America (<span class="vocab" data-cn="无线电公司">RCA</span>). By 1926, RCA had linked these stations into the first true <span class="vocab" data-cn="链式广播网络，多个站点同步播出同一内容">chain broadcasting</span> system, allowing a single program to be heard coast‑to‑coast. This innovation gave advertisers a national audience for the first time and cemented NBC’s reputation as a media pioneer.</p>`,

    `NBC’s early success rested on its two complementary networks: the <span class="vocab" data-cn="红色网络，主流节目线路">Red Network</span> and the <span class="vocab" data-cn="蓝色网络，次要节目线路">Blue Network</span>. The Red carried high‑profile dramas, news bulletins, and live music, while the Blue offered more experimental or regional content. This dual‑network model survived until 1943, when the Federal Communications Commission (<span class="vocab" data-cn="美国联邦通信委员会">FCC</span>) forced RCA to divest one of them under its “chain‑ownership” rules, leading to the birth of the American Broadcasting Company (ABC).</p>`,

    `The post‑World War II era saw NBC transition from radio to television with remarkable speed. In 1948 it launched <span class="vocab" data-cn="美国全国广播公司电视网">NBC Television</span>, debuting iconic shows such as “The Tonight Show” and the first televised <span class="vocab" data-cn="美国总统就职演说">presidential inauguration</span>. By the 1950s, NBC pioneered <span class="vocab" data-cn="彩色电视技术">color television</span> broadcasting, sponsoring the famous “Peacock” logo to signal its commitment to vivid programming. Prime‑time slots filled with sitcoms, variety shows, and live sports, establishing a cultural rhythm that many Americans still recall.</p>`,

    `However, NBC’s dominance was not unchallenged. The 1960s introduced fierce competition from CBS and the rising ABC, each vying for <span class="vocab" data-cn="收视率，衡量节目受欢迎程度的指标">ratings</span> in the coveted “golden hour.” NBC responded by investing heavily in production studios like Burbank’s <span class="vocab" data-cn="环球影城的制片厂">Universal City Studios</span>, and by courting top talent such as Johnny Carson. Yet internal tensions grew, especially after RCA sold its television division to General Electric (GE) in 1986, shifting corporate priorities toward electronics rather than content.</p>`,

    `The 1990s marked a turning point when GE merged NBC with <span class="vocab" data-cn="美国有线电视公司">Universal Studios</span>, creating the media conglomerate NBC Universal. This merger promised synergies between film production and broadcast, but also introduced complex management layers that sometimes stifled creative risk‑taking. Meanwhile, the rise of cable networks and later streaming platforms fragmented audiences, eroding the once‑solid <span class="vocab" data-cn="联盟关系，地方电视台与网络的合作模式">affiliate</span> model that had underpinned NBC’s reach.</p>`,

    `In 2011, Comcast acquired a controlling stake in NBC Universal, further integrating the broadcaster into a massive distribution network. While this infusion of capital revived some flagship programs and expanded digital offerings like Peacock, it also highlighted a paradox: NBC’s brand remained iconic, yet its share of prime‑time viewership steadily declined relative to on‑demand services. Critics argue that corporate consolidation diluted the network’s historic emphasis on live news and public affairs, shifting focus toward profit‑driven content.</p>`,

    `Today, NBC’s cultural legacy endures through enduring formats—late‑night talk shows, Sunday night news magazines, and the annual <span class="vocab" data-cn="美国超级碗">Super Bowl</span> broadcast. Scholars note that its early innovations in network structure, color broadcasting, and audience measurement reshaped American media infrastructure. At the same time, NBC’s rise and fall serve as a cautionary tale about how technological disruption, regulatory change, and corporate strategy can reshape even the most venerable institutions.</p>`
  ],
  vocabulary: [
    { word: 'National Broadcasting Company', cn: '美国全国广播公司' },
    { word: 'chain broadcasting', cn: '链式广播网络，多个站点同步播出同一内容' },
    { word: 'Red Network', cn: '红色网络，主流节目线路' },
    { word: 'Blue Network', cn: '蓝色网络，次要节目线路' },
    { word: 'Federal Communications Commission', cn: '美国联邦通信委员会' },
    { word: 'color television', cn: '彩色电视技术' },
    { word: 'ratings', cn: '收视率，衡量节目受欢迎程度的指标' },
    { word: 'affiliate', cn: '联盟关系，地方电视台与网络的合作模式' },
    { word: 'Super Bowl', cn: '美国超级碗' }
  ],
};

export default article;
