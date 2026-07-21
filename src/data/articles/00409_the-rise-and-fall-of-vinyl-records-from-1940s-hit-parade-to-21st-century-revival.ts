import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise and Fall of Vinyl Records: From 1940s Hit Parade to 21st‑Century Revival》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00409 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00409',
  slug: 'the-rise-and-fall-of-vinyl-records-from-1940s-hit-parade-to-21st-century-revival',
  title: 'The Rise and Fall of Vinyl Records: From 1940s Hit Parade to 21st‑Century Revival',
  subtitle: 'How a once‑dominant medium vanished and reappeared in the digital age.',
  summary: 'A narrative of vinyl’s birth, dominance, decline, and unexpected comeback.',
  category: 'culture',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the late 1940s, after World War II, the music market was flooded with a new format called the <span class="vocab" data-cn="黑胶唱片">vinyl record</span>.  Companies such as RCA Victor and Columbia quickly shifted from shellac discs to this flexible polymer because it could hold longer recordings—up to 25 minutes per side for a standard 12‑inch disc.  The first post‑war hit parade was dominated by swing bands and crooners whose songs seemed richer when pressed onto vinyl, setting the stage for a cultural revolution that would last three decades.`,
    `What made vinyl so appealing was its <span class="vocab" data-cn="模拟声音">analog sound</span>.  Unlike digital formats that sample audio at discrete intervals, an analog groove is a continuous physical representation of the original waveform.  When a needle—called a <span class="vocab" data-cn="唱针">stylus</span>—traces these grooves on a rotating <span class="vocab" data-cn="转盘">turntable</span>, it vibrates in exact proportion to the recorded vibrations, producing a warm, immersive listening experience that many still describe as “alive.”  This tactile interaction also gave rise to the art of <span class="vocab" data-cn="母带处理">mastering</span>, where engineers carefully balanced frequencies before the final pressing.`,
    `The 1950s through the 1970s are often called vinyl’s golden age.  Rock ’n’ roll icons like Elvis Presley, The Beatles, and Jimi Hendrix released their music on <span class="vocab" data-cn="长播放唱片">LP</span> (long‑play) records, each side becoming a canvas for album art and liner notes.  Record stores turned into social hubs where teenagers would flip through crates of newly pressed albums, discovering new sounds in the same way today’s playlists introduce fresh tracks.  The physicality of buying a record—seeing the sleeve, feeling the weight—created a personal connection that radio could never match.`,
    `The tide began to turn in the early 1980s when compact cassettes and later compact discs (<span class="vocab" data-cn="光盘">CDs</span>) entered the market.  CDs offered higher fidelity, longer playtime, and most importantly, portability without the need for a delicate needle.  As digital technology advanced, record sales plummeted; by the mid‑1990s, vinyl accounted for less than one percent of global music revenue, and many pressing plants shut down, leaving only a handful of niche manufacturers to keep the format alive.`,
    `Yet even in its decline, vinyl never disappeared completely.  A small but passionate community of <span class="vocab" data-cn="发烧友">audiophiles</span> continued to cherish the medium for its sonic character.  Boutique pressing plants in the United States, Japan, and Europe began producing limited‑edition runs on heavyweight black vinyl or colored variants, often marketed as collector’s items.  These releases were sold at premium prices, reinforcing the idea that vinyl had become a luxury rather than a mainstream product.`,
    `The real turning point arrived around 2010 when younger listeners—raised on MP3s and streaming services—started to seek tangible music experiences.  Vinyl sales rose year after year, reaching their highest level since the early 1980s by 2020.  Record Store Day, launched in 2007, turned into a global phenomenon, with exclusive releases prompting fans to line up outside independent shops.  Simultaneously, digital platforms like Spotify and Apple Music added “vinyl‑only” playlists, acknowledging that many users now enjoy both streaming convenience and the ritual of dropping the needle.`,
    `Looking ahead, vinyl’s future appears secure as a cultural artifact rather than a primary distribution channel.  New technologies such as high‑resolution <span class="vocab" data-cn="母带处理">mastering</span> for vinyl and environmentally friendly pressing methods are being explored to keep the format relevant.  Whether it remains a nostalgic hobby or evolves into a hybrid with digital ecosystems, the story of the vinyl record reminds us that music is not just heard—it is felt, handled, and remembered.`],
  vocabulary: [
    { word: 'vinyl record', cn: '黑胶唱片' },
    { word: 'analog sound', cn: '模拟声音' },
    { word: 'turntable', cn: '转盘' },
    { word: 'mastering', cn: '母带处理' },
    { word: 'LP', cn: '长播放唱片' },
    { word: 'audiophile', cn: '发烧友' },
    { word: 'CD', cn: '光盘' }
  ],
};

export default article;
