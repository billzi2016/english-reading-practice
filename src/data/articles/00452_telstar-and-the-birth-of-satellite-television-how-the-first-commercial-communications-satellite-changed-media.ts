import type { Article } from '../../types/index.ts';

// 文件意图：维护《Telstar and the Birth of Satellite Television: How the First Commercial Communications Satellite Changed Media》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00452 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00452',
  slug: 'telstar-and-the-birth-of-satellite-television-how-the-first-commercial-communications-satellite-changed-media',
  title: 'Telstar and the Birth of Satellite Television: How the First Commercial Communications Satellite Changed Media',
  subtitle: 'The story behind the 1962 launch that turned a distant orbit into a global newsroom.',
  summary: 'Explore how Telstar’s brief flight sparked a revolution in television, advertising, and international news coverage.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When <span class="vocab" data-cn="通信卫星">Telstar</span> lifted off on July 10, 1962, it carried more than metal and circuitry; it bore the promise of a world that could watch the same event at the same moment. Until then, television signals traveled over coaxial cables or short‑range microwave towers, limiting live broadcasts to regional audiences. Telstar’s <span class="vocab" data-cn="低地球轨道">low‑Earth orbit</span> placed it high enough to see a large swath of the planet, yet close enough that a single pass could relay a television picture across the Atlantic in minutes.`,
    `The heart of Telstar was its <span class="vocab" data-cn="转发器">transponder</span>, a device that received an uplink signal on one frequency band and retransmitted it on another. This clever use of <span class="vocab" data-cn="微波链路">microwave link</span> technology meant that a television studio in New York could send a live feed to a ground station in Andover, Maine; the satellite would then beam the same signal down to a receiver near London’s Goonhilly Earth Station. The process was not instantaneous—there was a brief <span class="vocab" data-cn="信号延迟">signal latency</span> of about 0.1 seconds—but for viewers it felt like magic.</`,
    `The first public demonstration on July 23, 1962, featured a simple but powerful lineup: a live image of the American flag waving over the launch site, a brief speech by President John F. Kennedy, and a short musical performance by a British choir. Millions of people in both the United States and Europe watched the same images at roughly the same time—a first for television history. Advertisers quickly recognized the potential: a single commercial could now reach audiences on two continents without the need for separate production crews or costly film shipments.`,
    `Beyond advertising, Telstar reshaped news gathering. Reporters no longer had to rely on physical transport of film reels across oceans; instead, they could file a story from New York and have it appear on European screens within an hour. This immediacy helped create the modern <span class="vocab" data-cn="广播网络">broadcast network</span>, where news agencies such as CBS and BBC coordinated live feeds through shared satellite time slots. The concept of “breaking news” became truly global, laying groundwork for later 24‑hour news channels.`,
    `The technical success of Telstar also spurred a rapid arms race in space communications. Within months, the United States launched <span class="vocab" data-cn="同步轨道">synchronous orbit</span> experiments, and the Soviet Union responded with its own communication satellites, most notably the Molniya series. Although Telstar itself was not placed in a permanent orbit—its battery lasted only about 19 hours—it proved that commercial satellite services were viable, prompting private companies like AT&T and RCA to invest heavily in ground infrastructure.`,
    `Culturally, the satellite’s brief glow over the night sky became a symbol of connectivity. Artists painted it as a glowing disc bridging continents; poets wrote verses about “the invisible thread” linking distant families. The public imagination was captured by the idea that geography no longer dictated who could see what, foreshadowing today’s internet‑driven world where a livestream can be accessed from any corner of the globe.`,
    `Today, modern communications satellites orbit at heights of 35,786 km in <span class="vocab" data-cn="地球同步轨道">geostationary orbit</span>, providing continuous coverage for television, internet, and phone services. Yet every high‑definition broadcast, every video call, traces its lineage back to that modest 170‑kilogram metal sphere named Telstar. Its legacy reminds us that a single technological breakthrough can rewrite the rules of media, commerce, and even how we perceive each other across borders.`,
  ],
  vocabulary: [
    { word: 'Telstar', cn: '通信卫星' },
    { word: 'low‑Earth orbit', cn: '低地球轨道' },
    { word: 'transponder', cn: '转发器' },
    { word: 'microwave link', cn: '微波链路' },
    { word: 'signal latency', cn: '信号延迟' },
    { word: 'broadcast network', cn: '广播网络' },
    { word: 'synchronous orbit', cn: '同步轨道' },
    { word: 'geostationary orbit', cn: '地球同步轨道' },
  ],
};

export default article;
