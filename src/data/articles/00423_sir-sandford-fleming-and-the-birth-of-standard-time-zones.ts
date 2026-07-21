import type { Article } from '../../types/index.ts';

// 文件意图：维护《Sir Sandford Fleming and the Birth of Standard Time Zones》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00423 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00423',
  slug: 'sir-sandford-fleming-and-the-birth-of-standard-time-zones',
  title: 'Sir Sandford Fleming and the Birth of Standard Time Zones',
  subtitle: 'How a Canadian engineer reshaped global timekeeping',
  summary: 'The story of Sir Sandford Fleming’s proposal that led to today’s worldwide system of time zones.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the mid‑19th century, railway companies across North America were plagued by chaotic schedules. Trains departing from different towns kept their own local clocks, which meant a passenger could board a train at “noon” in one city and arrive at “noon again” hours later elsewhere. The resulting confusion prompted engineers to search for a universal solution, and it was a young Canadian surveyor named <span class="vocab" data-cn="桑福德·弗莱明爵士">Sir Sandford Fleming</span> who would eventually provide it.`,
    `Fleming’s background as a civil engineer and his work on the Canadian Pacific Railway gave him a practical appreciation for precise timing. While overseeing railway construction in the 1870s, he realized that without a common reference, coordinating train movements across thousands of kilometres was nearly impossible. He began to study how astronomers used <span class="vocab" data-cn="经度">longitude</span> and celestial observations to keep accurate time at sea, noting that similar principles could be applied on land.`,
    `In 1878, Fleming presented his idea at the Royal Canadian Institute: divide the world into twenty‑four equal slices, each covering fifteen degrees of longitude, and assign a uniform clock to every slice. He called this system <span class="vocab" data-cn="标准时间">standard time</span>. The concept was simple—every region within a slice would share the same hour count, eliminating the need for constant adjustments as travelers crossed borders. Fleming also advocated for a single reference point, the <span class="vocab" data-cn="本初子午线">prime meridian</span>, to anchor the entire scheme.`,
    `The proposal initially met resistance from local authorities who feared losing their traditional “town time.” However, the growing network of railroads and telegraph lines created a pressure cooker for change. By 1883, more than thirty American railway companies had adopted Fleming’s system, synchronizing their timetables to what became known as “railroad time.” This rapid adoption demonstrated that practical necessity could outweigh cultural inertia.`,
    `International acceptance followed the International Meridian Conference held in Washington, D.C., in 1884. Delegates from twenty‑nine nations gathered to decide on a global standard for longitude and timekeeping. They selected Greenwich, England, as the location of the <span class="vocab" data-cn="本初子午线">prime meridian</span>, and formally endorsed the division of the globe into <span class="vocab" data-cn="时区">time zones</span>. Fleming’s earlier advocacy was cited repeatedly in the conference minutes, cementing his legacy as a key architect of modern chronometry.`,
    `The implementation of standard time zones required new technology. Railway stations installed large <span class="vocab" data-cn="计时器">chronometers</span> that could be set to the exact hour of their zone and then broadcast via electric signals. Telegraph operators used these signals to <span class="vocab" data-cn="同步">synchronize</span> clocks across cities, ensuring that everyone—from factory workers to schoolchildren—followed the same schedule. This network of synchronized timekeeping laid the groundwork for later innovations such as radio time signals and, eventually, internet‑based NTP servers.`,
    `Today, Fleming’s vision is taken for granted: we set our watches by a system he helped design, and even when we travel across continents, the shift in <span class="vocab" data-cn="时区">time zones</span> feels like a natural part of daily life. Yet the story reminds us that something as seemingly immutable as time is actually a human construct, shaped by engineering challenges, scientific insight, and international cooperation.`,
  ],
  vocabulary: [
    { word: 'Sir Sandford Fleming', cn: '桑福德·弗莱明爵士' },
    { word: 'longitude', cn: '经度' },
    { word: 'standard time', cn: '标准时间' },
    { word: 'prime meridian', cn: '本初子午线' },
    { word: 'time zone', cn: '时区' },
    { word: 'chronometer', cn: '计时器' },
    { word: 'synchronize', cn: '同步' },
  ],
};

export default article;
