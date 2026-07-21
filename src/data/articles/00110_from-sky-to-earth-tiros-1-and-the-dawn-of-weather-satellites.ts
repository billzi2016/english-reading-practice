import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Sky to Earth: TIROS‑1 and the Dawn of Weather Satellites》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00110 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00110',
  slug: 'from-sky-to-earth-tiros-1-and-the-dawn-of-weather-satellites',
  title: 'From Sky to Earth: TIROS‑1 and the Dawn of Weather Satellites',
  subtitle: 'How a modest satellite opened a new window on our planet’s atmosphere.',
  summary: 'The story of TIROS‑1, the first successful weather satellite, and its lasting influence on modern meteorology.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1960, a thin metal sphere about the size of a small refrigerator lifted off from Cape Canaveral carrying an ambitious promise: to watch Earth’s clouds from space.  The United States had already sent scientific payloads into orbit, but none were designed to stare back at our own weather systems.  This bold experiment was christened <span class="vocab" data-cn="气象卫星先驱">TIROS‑1</span>, a name that would soon become synonymous with the birth of satellite meteorology.`,
    `The project originated at NASA’s Goddard Space Flight Center, where a small team of engineers and physicists wrestled with an unprecedented set of challenges.  They needed to fit delicate imaging equipment inside a spacecraft that would endure launch vibrations, vacuum, and temperature swings from -150 °C to +120 °C.  To achieve this, they turned to the emerging field of <span class="vocab" data-cn="红外辐射计">infrared radiometer</span> technology, which could detect thermal emissions from clouds even when visible light was obscured by night or haze.`,
    `On April 1, 1960, a Vanguard rocket lofted TIROS‑1 into a <span class="vocab" data-cn="近地轨道">low Earth orbit</span> at roughly 650 km altitude with an orbital <span class="vocab" data-cn="倾角">inclination</span> of about 48°.  This path allowed the satellite to sweep across a broad swath of the globe each day, passing over both land and ocean.  The orbit was not geostationary—meaning it did not hover above a single point—but its rapid motion provided frequent revisits that were ideal for capturing evolving weather patterns.`,
    `Within minutes of achieving stable flight, TIROS‑1’s <span class="vocab" data-cn="云图相机">cloud‑track camera</span> snapped its first picture: a stark black-and-white view of swirling cloud masses over the Atlantic Ocean.  The image was transmitted back to Earth via a modest <span class="vocab" data-cn="数据下行链路">data downlink</span>, received by ground stations in Florida and later relayed to meteorologists at the Weather Bureau.  For the first time, forecasters could see real‑time cloud formations from a perspective no human eye had ever witnessed.`,
    `The raw pictures were far from perfect; they suffered from noise, limited resolution, and occasional transmission gaps.  Yet even these crude snapshots proved transformative.  Meteorologists began to recognize large‑scale systems—such as tropical depressions and mid‑latitude cyclones—earlier than ever before.  The ability to monitor cloud development continuously laid the groundwork for modern <span class="vocab" data-cn="气象学">meteorology</span>, turning weather prediction from a largely regional art into a global science.`,
    `TIROS‑1’s success sparked an avalanche of follow‑on missions.  Within a few years, more advanced TIROS series satellites carried improved radiometers, spectrometers, and even early digital processors.  The concept also inspired the development of <span class="vocab" data-cn="静止轨道">geostationary orbit</span> weather platforms like GOES, which could stare at a single hemisphere continuously.  Together, these systems formed an integrated network that now delivers minute‑by‑minute forecasts, severe‑weather warnings, and climate data to billions of people worldwide.`,
    `Today’s satellite constellations—ranging from polar‑orbiting imagers to low‑cost CubeSats—trace their lineage directly back to the humble TIROS‑1.  Its legacy lives on not only in the crisp, color images we see on television but also in the sophisticated algorithms that turn raw radiance into quantitative measurements of temperature, humidity, and wind.  As climate change intensifies the need for precise atmospheric monitoring, the pioneering spirit of TIROS‑1 reminds us that a single daring experiment can reshape how humanity understands—and ultimately protects—our planet.`,
  ],
  vocabulary: [
    { word: 'TIROS‑1', cn: '气象卫星先驱' },
    { word: 'low Earth orbit', cn: '近地轨道' },
    { word: 'inclination', cn: '倾角' },
    { word: 'cloud‑track camera', cn: '云图相机' },
    { word: 'infrared radiometer', cn: '红外辐射计' },
    { word: 'data downlink', cn: '数据下行链路' },
    { word: 'meteorology', cn: '气象学' },
    { word: 'geostationary orbit', cn: '静止轨道' },
  ],
};

export default article;
