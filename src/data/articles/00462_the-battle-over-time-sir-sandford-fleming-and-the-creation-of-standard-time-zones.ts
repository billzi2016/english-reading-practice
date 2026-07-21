import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Battle Over Time: Sir Sandford Fleming and the Creation of Standard Time Zones》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00462 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00462',
  slug: 'the-battle-over-time-sir-sandford-fleming-and-the-creation-of-standard-time-zones',
  title: 'The Battle Over Time: Sir Sandford Fleming and the Creation of Standard Time Zones',
  subtitle: 'How a Canadian engineer turned chaotic railway schedules into a global clock.',
  summary: 'Explore the story behind Sir Sandford Fleming’s fight to standardize time across the world.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the late nineteenth century, travelers on North American railroads faced a bewildering problem: each town kept its own local clock based on the position of the sun. When a train left Toronto at “8 a.m.” and arrived in Montreal an hour later, the timetable often meant nothing because “8 a.m.” could differ by several minutes from one station to another. The chaos prompted a young civil engineer named <span class="vocab" data-cn="桑福德·弗莱明爵士">Sir Sandford Fleming</span> to ask a simple question: what if the whole continent shared a single, uniform time?`,
    `Fleming’s answer was not merely practical; it was rooted in scientific observation. He noted that the Earth rotates 360 degrees every 24 hours, which means it turns 15 degrees each hour. By dividing the globe into slices of 15 degrees longitude, each slice could adopt a common clock—what we now call a <span class="vocab" data-cn="标准时间">standard time</span>. This idea would later become the backbone of today’s <span class="vocab" data-cn="时区">time zones</span>, allowing anyone to know exactly what hour it was wherever they were.`,
    `The proposal first appeared at a meeting of the Royal Canadian Institute in 1876, where Fleming demonstrated his concept with a large brass globe and a series of rotating arms. He argued that a single “universal time” would simplify railway timetables, telegraph messages, and even international commerce. However, many city officials resisted, fearing loss of local identity and the inconvenience of resetting their beloved town clocks. The debate quickly turned into what newspapers later called “the battle over time.”`,
    `Fleming’s next move was to take his idea beyond Canada. In 1880 he traveled to the United States and lobbied the American Railway Association, which eventually adopted a system of four continental <span class="vocab" data-cn="时区">time zones</span>—Eastern, Central, Mountain, and Pacific—in 1883. The change was famously known as “The Day of Two Noons,” when clocks across the continent were set forward or backward by up to half an hour at a single moment, creating two true solar noons in many cities on that day.`,
    `While North America embraced Fleming’s system, Europe remained fragmented. To resolve this, the <span class="vocab" data-cn="国际子午线会议">International Meridian Conference</span> convened in Washington, D.C., in 1884. Delegates from 25 nations gathered to choose a single prime meridian—ultimately the Greenwich meridian—and to endorse the worldwide adoption of standard time zones based on Fleming’s 15‑degree principle. The conference also established the concept of <span class="vocab" data-cn="格林尼治标准时间">Greenwich Mean Time (GMT)</span> as a reference point for all other zones.`,
    `Even after the conference, implementation was uneven. Some countries delayed adoption due to political concerns or technical limitations in synchronizing clocks across vast territories. The invention of the <span class="vocab" data-cn="计时器">chronometer</span>, a highly accurate portable clock, helped overcome these hurdles by allowing precise timekeeping even in remote locations. By the early twentieth century, most major rail networks and telegraph lines operated on Fleming’s standardized system, dramatically reducing accidents caused by timing errors.`,
    `Today, the legacy of Sir Sandford Fleming is visible every time we glance at a digital clock or schedule an international video call. Modern technology—satellite navigation, atomic clocks, and internet time servers—relies on the same 15‑degree division he proposed over a century ago. Yet the core idea remains unchanged: dividing the planet into <span class="vocab" data-cn="时区">time zones</span> to keep humanity synchronized. Fleming’s battle may have been fought with brass globes and heated debates, but its victory endures in every tick of the global clock.`,
  ],
  vocabulary: [
    { word: 'Sir Sandford Fleming', cn: '桑福德·弗莱明爵士' },
    { word: 'standard time', cn: '标准时间' },
    { word: 'time zone', cn: '时区' },
    { word: 'International Meridian Conference', cn: '国际子午线会议' },
    { word: 'chronometer', cn: '计时器' },
    { word: 'Greenwich Mean Time (GMT)', cn: '格林尼治标准时间' },
  ],
};

export default article;
