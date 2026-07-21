import type { Article } from '../../types/index.ts';

const article: Article = {
  id: '00078',
  slug: 'solving-the-longitude-crisis-john-harrison-s-marine-chronometer',
  title: 'Solving the Longitude Crisis: John Harrison’s Marine Chronometer',
  subtitle: 'How a carpenter‑turned‑clockmaker changed navigation forever',
  summary: 'The story of John Harrison and his marine chronometer, the breakthrough that finally solved the age‑old problem of determining longitude at sea.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early eighteenth century, British captains faced a terrifying dilemma every time they left port. While latitude could be measured by the height of the sun or stars, <span class="vocab" data-cn="经度">longitude</span> remained elusive. A ship that miscalculated its east‑west position might run aground on hidden reefs or miss vital trade winds, leading to loss of cargo, lives, and national prestige. The problem was so acute that the British government created a dedicated agency—the <span class="vocab" data-cn="经度委员会">Board of Longitude</span>—to fund any solution that could reliably tell a sailor how far east or west they had traveled.`,
    `The Board offered a staggering prize: up to £20,000 for a method that could determine longitude within half a degree (about 30 nautical miles). Early contenders relied on astronomical calculations, most famously the <span class="vocab" data-cn="月距法">lunar distance method</span>, which measured the angle between the moon and another celestial body. Though theoretically sound, this technique demanded complex tables, steady hands, and clear skies—luxuries rarely available on a rolling deck during a storm. As a result, many mariners dismissed it as impractical for everyday use.`,
    `Enter John Harrison, a self‑taught clockmaker from Yorkshire who had spent his life mastering <span class="vocab" data-cn="制表学">horology</span>. Unlike the astronomers, Harrison believed that a reliable timepiece could solve the problem. If a ship carried a clock set to the time at a known reference point—such as Greenwich—it could compare that reference time with local noon and calculate its east‑west displacement. The challenge was building a device that could keep accurate time despite temperature swings, humidity, and constant motion.`,
    `Harrison’s perseverance led him through four major prototypes, each improving on the last. His final masterpiece, the <span class="vocab" data-cn="海上计时器">marine chronometer</span> known as H4, resembled a large pocket watch more than a traditional clock. It featured a revolutionary <span class="vocab" data-cn="擒纵机构">escapement</span> that reduced friction, and a series of finely crafted <span class="vocab" data-cn="螺纹">screw threads</span> that allowed for minute adjustments to compensate for temperature‑induced expansion. The case was made of brass and steel, sealed against moisture, and the balance wheel incorporated a bi‑metallic strip to automatically correct thermal drift.`,
    `The true test came at sea. In 1761, H4 embarked on a voyage aboard the HMS Deptford, sailing from England to Jamaica. Throughout the journey, Harrison’s chronometer stayed within five seconds of <span class="vocab" data-cn="格林尼治平时">Greenwich Mean Time</span>, translating to an error of less than one nautical mile in longitude—a remarkable achievement for the era. Subsequent trials on other vessels confirmed its reliability, finally convincing the Board that Harrison’s invention met the stringent criteria set out decades earlier.`,
    `The impact was immediate and profound. With a dependable way to determine <span class="vocab" data-cn="经度">longitude</span>, captains could chart courses with unprecedented precision, reducing shipwrecks along treacherous coasts and shortening voyages by avoiding unnecessary detours. The success of Harrison’s chronometer also sparked a wave of innovation in <span class="vocab" data-cn="精密工程">precision engineering</span>. Clockmakers refined escapement designs, manufacturers standardized screw threads, and the principles behind marine timekeeping filtered into other fields such as surveying and later, aviation.`,
    `Today, GPS satellites provide instantaneous global positioning, but the legacy of John Harrison endures. Modern chronometers still honor his breakthroughs in temperature compensation and friction reduction, and maritime museums worldwide display replicas of H4 as a tribute to human ingenuity. The story reminds us that solving a seemingly abstract scientific puzzle—how to keep accurate time at sea—can reshape entire industries and save countless lives.`,
  ],
  vocabulary: [
    { word: 'longitude', cn: '经度' },
    { word: 'marine chronometer', cn: '海上计时器' },
    { word: 'Board of Longitude', cn: '经度委员会' },
    { word: 'horology', cn: '制表学' },
    { word: 'escapement', cn: '擒纵机构' },
    { word: 'screw thread', cn: '螺纹' },
    { word: 'Greenwich Mean Time', cn: '格林尼治平时' },
    { word: 'lunar distance method', cn: '月距法' },
    { word: 'precision engineering', cn: '精密工程' },
  ],
};

export default article;
