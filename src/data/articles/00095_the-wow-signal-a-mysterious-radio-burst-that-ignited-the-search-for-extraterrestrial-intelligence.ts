import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Wow! Signal: A Mysterious Radio Burst That Ignited the Search for Extraterrestrial Intelligence》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00095 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00095',
  slug: 'the-wow-signal-a-mysterious-radio-burst-that-ignited-the-search-for-extraterrestrial-intelligence',
  title: 'The Wow! Signal: A Mysterious Radio Burst That Ignited the Search for Extraterrestrial Intelligence',
  subtitle: 'How a single blip sparked decades of cosmic curiosity',
  summary: 'A true‑story account of the 1977 Wow! signal and its lasting influence on the hunt for alien intelligence.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On the night of August 15, 1977, a graduate student named Jerry Ehman was reviewing data from Ohio State’s <span class="vocab" data-cn="射电望远镜">radio telescope</span> called Big Ear. While scanning a printout of the telescope’s sky survey, he noticed an unusually strong spike that stood out among the background noise. In his excitement he circled the entry and wrote “Wow!” in the margin – a simple exclamation that would become the name of one of the most famous unexplained astronomical events.`,
    `The signal, later catalogued as “6EQUJ5”, lasted for the full 72‑second window during which Big Ear could observe any given point in the sky. Its frequency was measured at about 1420 MHz, precisely the wavelength of the neutral hydrogen line – a natural “universal” frequency that many scientists consider an ideal beacon for interstellar communication. Moreover, the signal’s <span class="vocab" data-cn="窄带">narrowband</span> nature (only a few hertz wide) made it unlike typical broadband cosmic noise, hinting at an artificial origin.`,

    `Immediately after the detection, astronomers worldwide pointed their own instruments toward the same coordinates, hoping to catch a repeat. The <span class="vocab" data-cn="频谱分析">spectral analysis</span> performed by observatories in Australia, Spain, and the United States all returned null results; the Wow! signal never reappeared despite dozens of follow‑up campaigns. This one‑off occurrence deepened the mystery: was it a fleeting transmission from an extraterrestrial source, or simply a rare terrestrial interference?`,

    `The incident breathed new life into <span class="vocab" data-cn="外星智慧搜索">SETI</span> (Search for Extraterrestrial Intelligence) research. Funding agencies that had been skeptical of the field suddenly saw public interest surge, and several university‑based projects received grants to build more sensitive receivers. The legacy of Project Ozma, the first modern SETI experiment conducted by Frank Drake in 1960, was revitalized as scientists upgraded their hardware to hunt for signals with similar characteristics to the Wow! burst.`,

    `Over the following decades, researchers proposed a variety of natural explanations: reflections from ionized clouds, interstellar scintillation, or even a brief flare from a comet rich in hydrogen. Some suggested that a passing satellite could have produced a spurious spike, though no known spacecraft matched the timing. The signal’s measured strength was roughly 30 <span class="vocab" data-cn="信号强度单位">Jansky</span>, far brighter than typical background sources but still within the range of powerful terrestrial emitters, leaving the debate unresolved.`,

    `Beyond academia, the Wow! signal entered popular culture, inspiring songs, novels, and even a 2015 documentary titled “The Wow! Signal”. It also motivated modern initiatives such as the Breakthrough Listen project, which uses state‑of‑the‑art facilities like the Green Bank Telescope to scan billions of stars for similar narrowband beacons. While no new “Wow!” has been recorded, the episode remains a benchmark for what an ideal extraterrestrial transmission might look like.`,

    `In hindsight, the Wow! signal exemplifies how science thrives on anomalies: a single puzzling data point can galvanize an entire community, sharpen instrumentation, and refine analytical techniques. Whether it ever proves to be a genuine message from another civilization or remains an unsolved curiosity, its legacy endures as a reminder that the cosmos still holds secrets waiting to be uncovered.`],
  vocabulary: [
    { word: 'radio telescope', cn: '射电望远镜' },
    { word: 'narrowband', cn: '窄带' },
    { word: 'spectral analysis', cn: '频谱分析' },
    { word: 'SETI', cn: '外星智慧搜索' },
    { word: 'Jansky', cn: '信号强度单位' },
    { word: 'hydrogen line', cn: '氢线' }
  ],
};

export default article;
