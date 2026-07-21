import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of Commercial Radio Broadcasting: KDKA and the Rise of Mass Media》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00259 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00259',
  slug: 'the-birth-of-commercial-radio-broadcasting-kdka-and-the-rise-of-mass-media',
  title: 'The Birth of Commercial Radio Broadcasting: KDKA and the Rise of Mass Media',
  subtitle: 'How a single station sparked a new era of information and entertainment.',
  summary: 'Explore how KDKA’s first broadcast in 1920 launched commercial radio and reshaped mass communication.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `At the turn of the twentieth century, inventors were still mastering <span class="vocab" data-cn="无线电报">wireless telegraphy</span>, a technology that could transmit Morse code across oceans. By the 1910s, engineers like Lee de Forest and Edwin Armstrong began experimenting with ways to send voice and music instead of dots and dashes, laying the groundwork for what would become <span class="vocab" data-cn="广播">broadcasting</span>. The idea was simple yet revolutionary: one transmitter could reach dozens, even hundreds of listeners simultaneously.`,
    `On November 2, 1920, a modest studio in Pittsburgh’s Westinghouse plant turned that idea into reality. The station, later known as <span class="vocab" data-cn="KDKA">KDKA</span>, aired the results of the U.S. presidential election, announcing Warren G. Harding’s victory to an audience that had never before heard a live news report over the airwaves. Listeners gathered around crystal sets in living rooms and storefronts, experiencing a shared moment that felt both intimate and communal.`,
    `What set KDKA apart from earlier experimental stations was its business model. Westinghouse recognized that if listeners would tune in for free, advertisers might pay to reach them. The company secured a <span class="vocab" data-cn="赞助商">sponsor</span>—the local department store—and began selling short advertising spots between news bulletins and musical interludes. This marked the birth of <span class="vocab" data-cn="商业广播">commercial radio</span>, turning the airwaves into a marketplace for ideas, products, and cultural trends.`,
    `Technically, KDKA relied on <span class="vocab" data-cn="幅度调制">amplitude modulation</span> (AM), a method that varies the strength of the carrier wave to encode sound. The Federal government had recently allocated specific frequencies for public broadcasting, preventing stations from interfering with each other’s signals. KDKA was assigned 360 meters (approximately 833 kHz), a clear channel that could travel hundreds of miles at night, allowing its programming to reach listeners far beyond Pennsylvania.`,
    `The impact on <span class="vocab" data-cn="大众媒体">mass media</span> was immediate. For the first time, news could be disseminated instantly across state lines, and popular music could become a national phenomenon overnight. Advertisers discovered that a single 30‑second spot could influence consumer behavior in ways print ads never could. This new medium also gave rise to celebrity radio personalities, whose voices became household names even though most listeners had never seen their faces.`,
    `Within a few years, KDKA’s success inspired the formation of larger networks. The National Broadcasting Company (NBC) emerged in 1926 as a <span class="vocab" data-cn="网络附属站">network affiliate</span> system, linking dozens of local stations to share programming and advertising contracts. This network model amplified the reach of both content creators and sponsors, turning regional shows into national events and cementing radio’s role as America’s primary source of entertainment and information.`,
    `The rapid expansion of commercial stations also alarmed policymakers who feared signal interference and unchecked monopolies. In response, Congress passed the Radio Act of 1927, establishing the <span class="vocab" data-cn="联邦无线电委员会">Federal Radio Commission</span>. The commission was tasked with licensing stations, assigning frequencies, and ensuring that the public interest—rather than pure profit—guided the airwaves. This regulatory framework helped balance innovation with order, allowing radio to flourish throughout the 1930s and beyond.`,
  ],
  vocabulary: [
    { word: 'wireless telegraphy', cn: '无线电报' },
    { word: 'broadcasting', cn: '广播' },
    { word: 'KDKA', cn: 'KDKA（美国宾夕法尼亚州匹兹堡的商业广播站）' },
    { word: 'sponsor', cn: '赞助商' },
    { word: 'commercial radio', cn: '商业广播' },
    { word: 'amplitude modulation', cn: '幅度调制' },
    { word: 'mass media', cn: '大众媒体' },
    { word: 'network affiliate', cn: '网络附属站' },
    { word: 'Federal Radio Commission', cn: '联邦无线电委员会' },
  ],
};

export default article;
