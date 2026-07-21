import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Engineering Marvel of the Channel Tunnel: Connecting Britain and France Beneath the Sea》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00166 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00166',
  slug: 'the-engineering-marvel-of-the-channel-tunnel-connecting-britain-and-france-beneath-the-sea',
  title: 'The Engineering Marvel of the Channel Tunnel: Connecting Britain and France Beneath the Sea',
  subtitle: 'How a daring underground railway reshaped Europe’s transport landscape',
  summary: 'An engaging look at the planning, construction, and lasting impact of the Channel Tunnel.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1980s, a bold vision began to take shape: a railway link that would run beneath the English Channel, directly joining Britain and France. The idea was not new—engineers had sketched underwater passages since the 19th century—but only after decades of political negotiation did the project receive the green light. The resulting structure, known as the <span class="vocab" data-cn="英吉利海峡隧道">Channel Tunnel</span>, would become one of the longest undersea tunnels in the world, stretching 50.5 km (31.3 mi) and cutting travel time between London and Paris to just over two hours.`,
    `Construction began in 1988 under a joint venture called <span class="vocab" data-cn="欧隧公司">Eurotunnel</span>. The undertaking required an unprecedented level of coordination between British and French engineers, each bringing their own standards, labor practices, and safety cultures. To keep the two tunnel bores aligned across the seabed, teams used a sophisticated system of laser guidance and real‑time monitoring. By the time the final breakthrough was achieved on December 1 1990, the boring machines had met with an error margin of less than 20 cm—a testament to meticulous planning and execution.`,
    `One of the most critical challenges was dealing with the varied geology beneath the Channel. A comprehensive <span class="vocab" data-cn="岩土工程调查">geotechnical survey</span> revealed layers of chalk, clay, and occasional pockets of water‑bearing strata. To navigate these conditions safely, engineers deployed massive <span class="vocab" data-cn="盾构机">bored tunnel boring machines (TBMs)</span> equipped with pressurized cutting heads that could balance the external hydrostatic pressure while excavating. When a TBM encountered an unexpected water pocket, the crew would increase the slurry pressure to prevent flooding—a delicate dance between engineering precision and natural forces.`,
    `Ventilation was another vital concern. The tunnel’s length meant that air quality could deteriorate quickly if not properly managed. Engineers installed a series of <span class="vocab" data-cn="通风井">ventilation shafts</span> at regular intervals, each housing powerful fans capable of moving up to 2 million cubic meters of air per hour. These shafts also serve as emergency exits and house fire‑suppression systems that can flood sections of the tunnel with water or foam in case of a blaze, ensuring passenger safety even deep beneath the sea.`,
    `Beyond the technical feats, the Channel Tunnel introduced a new paradigm for cross‑border rail travel. The <span class="vocab" data-cn="跨境铁路">cross‑border railway</span> operates under a unified signalling and control system known as the European Train Control System (ETCS). This <span class="vocab" data-cn="联锁信号系统">interlocking signalling</span> ensures that trains from both countries can share tracks without conflict, automatically adjusting speeds and routes to maintain safe distances. The result is a seamless journey where a passenger can board in London and arrive in Paris without changing trains or dealing with customs checks—a level of integration rarely seen elsewhere.`,
    `Since its opening in 1994, the tunnel has carried millions of passengers and freight containers, proving that the massive upfront investment—over £9 billion at the time—was economically viable. It also sparked a wave of similar projects worldwide, from the Seikan Tunnel in Japan to the Gotthard Base Tunnel in Switzerland, each drawing lessons from the Channel Tunnel’s blend of engineering rigor and international cooperation.`,
    `Today, the Channel Tunnel stands not only as an engineering triumph but also as a symbol of European unity. Its continued operation depends on regular maintenance, including periodic inspections of the tunnel lining, track replacement, and upgrades to signalling software. As climate change raises concerns about sea‑level rise and extreme weather, engineers are already modelling how increased <span class="vocab" data-cn="水压">hydrostatic pressure</span> might affect the structure, ensuring that this undersea marvel will remain safe for generations to come.`
  ],
  vocabulary: [
    { word: 'Channel Tunnel', cn: '英吉利海峡隧道' },
    { word: 'Eurotunnel', cn: '欧隧公司' },
    { word: 'geotechnical survey', cn: '岩土工程调查' },
    { word: 'bored tunnel boring machine (TBM)', cn: '盾构机' },
    { word: 'ventilation shaft', cn: '通风井' },
    { word: 'cross‑border railway', cn: '跨境铁路' },
    { word: 'interlocking signalling', cn: '联锁信号系统' },
    { word: 'hydrostatic pressure', cn: '水压' }
  ],
};

export default article;
