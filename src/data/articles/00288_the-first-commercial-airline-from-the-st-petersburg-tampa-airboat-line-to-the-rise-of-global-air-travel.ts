import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Commercial Airline: From the St. Petersburg–Tampa Airboat Line to the Rise of Global Air Travel》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00288 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00288',
  slug: 'the-first-commercial-airline-from-the-st-petersburg-tampa-airboat-line-to-the-rise-of-global-air-travel',
  title: 'The First Commercial Airline: From the St. Petersburg–Tampa Airboat Line to the Rise of Global Air Travel',
  subtitle: 'How a tiny airboat service sparked a century of worldwide aviation',
  summary: 'An engaging look at the world’s first scheduled airline and its lasting influence on modern global travel.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1914, while most people still thought of flight as a daring stunt, a modest venture across Tampa Bay quietly rewrote history. The St. Petersburg–Tampa <span class="vocab" data-cn="水上飞机">airboat</span> line launched on January 1st, offering the first ever <span class="vocab" data-cn="定期航班">scheduled service</span> for paying passengers. Its modest success proved that aircraft could be more than a novelty—they could become a reliable means of transportation.`,
    `The vehicle that made this possible was a Benoist XIV, a sleek wooden <span class="vocab" data-cn="双翼机">biplane</span> equipped with a 75‑horsepower engine and pontoons for water takeoffs. Pilot Tony Jannus, already famed for his daring feats, guided the inaugural flight carrying former mayor Abram C. Pheil as its sole passenger. The fare was five dollars—a small sum then, but enough to signal that people were willing to pay for speed and convenience over a 21‑mile crossing.`,
    `Operating twice daily in calm weather, the line’s timetable resembled today’s commuter rails more than modern airlines. Each trip lasted about twenty minutes, yet it introduced the concept of a fixed timetable, ticketing, and even a rudimentary reservation system. The challenges were real: sudden squalls could ground the aircraft for hours, and the single‑seat cabin limited revenue. Still, the public’s fascination grew, and newspapers across the nation reported on this “airboat” marvel with equal parts awe and skepticism.`,
    `The ripple effect was swift. Investors who saw profit in a short hop over water began to fund larger ventures. By 1919, the Dutch airline KLM launched the first international <span class="vocab" data-cn="航空工程学">aeronautical engineering</span>‑driven service between Amsterdam and London, while Australia’s Qantas took to the skies a year later. These early carriers shifted focus from mail contracts to passenger comfort, gradually expanding routes beyond coastlines to inland cities, laying the groundwork for today’s global network.`,
    `Technological progress accelerated in tandem with ambition. The fragile wooden frames of biplanes gave way to all‑metal monoplanes, and piston engines grew more powerful and reliable. The breakthrough came after World War II when the <span class="vocab" data-cn="喷气发动机">jet engine</span> entered commercial service on the de Havilland Comet and later the Boeing 707. Jets could cruise at higher altitudes, cover longer distances faster, and carry dozens of passengers—transforming air travel from a novelty into a mass‑market industry.`,
    `Regulation also played a pivotal role. The United States passed the Air Commerce Act in 1926, establishing safety standards, pilot licensing, and route approvals. Internationally, the 1944 Chicago Convention created the International Civil Aviation Organization (ICAO), which still coordinates global <span class="vocab" data-cn="枢纽辐射网络">hub-and-spoke</span> networks, air traffic control, and safety protocols. These frameworks ensured that rapid growth did not compromise passenger security.`,
    `Today’s airlines operate complex webs of connections, with major hubs in cities like Atlanta, Dubai, and Singapore. The <span class="vocab" data-cn="枢纽辐射网络">hub-and-spoke</span> model allows carriers to funnel passengers through central airports, maximizing aircraft utilization and offering travelers a dizzying array of destinations—all concepts that trace their lineage back to the simple two‑city route over Tampa Bay.`,
    `Looking back, the St. Petersburg–Tampa <span class="vocab" data-cn="水上飞机">airboat</span> line lasted only four months before folding due to financial strain. Yet its legacy endures in every boarding pass and in the very idea that a machine can shrink the world. From a single wooden biplane skimming water, we have built an industry that moves billions of people across continents each year—a testament to how a modest experiment can ignite a global revolution.`,
  ],
  vocabulary: [
    { word: 'airboat', cn: '水上飞机' },
    { word: 'biplane', cn: '双翼机' },
    { word: 'scheduled service', cn: '定期航班' },
    { word: 'aeronautical engineering', cn: '航空工程学' },
    { word: 'jet engine', cn: '喷气发动机' },
    { word: 'hub-and-spoke', cn: '枢纽辐射网络' },
  ],
};

export default article;
