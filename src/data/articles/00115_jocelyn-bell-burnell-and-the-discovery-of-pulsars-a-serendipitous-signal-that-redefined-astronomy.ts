import type { Article } from '../../types/index.ts';

// 文件意图：维护《Jocelyn Bell Burnell and the Discovery of Pulsars》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00115 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00115',
  slug: 'jocelyn-bell-burnell-and-the-discovery-of-pulsars-a-serendipitous-signal-that-redefined-astronomy',
  title: 'Jocelyn Bell Burnell and the Discovery of Pulsars',
  subtitle: 'A Serendipitous Signal that Redefined Astronomy',
  summary: 'How a graduate student’s keen ear turned a puzzling radio blip into one of the most profound discoveries in modern astrophysics.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1967, a young Irish‑born physicist named <span class="vocab" data-cn="乔西琳·贝尔·伯内尔">Jocelyn Bell Burnell</span> was finishing her Ph.D. at Cambridge under the supervision of <span class="vocab" data-cn="安东尼·休伊">Antony Hewish</span>.  Their project involved a massive <span class="vocab" data-cn="射电望远镜">radio telescope</span> built from an array of dipole antennas spread across the countryside.  The instrument, known as the Interplanetary Scintillation Array, was designed to study rapid fluctuations—called <span class="vocab" data-cn="闪烁效应">scintillation</span>—in distant radio sources caused by solar wind.</p>`,
    `Bell Burnell’s role was to monitor the chart recorder that produced a continuous line of “scruff” as the telescope scanned the sky.  One night she noticed an odd, regular spike that rose sharply above the background noise every 1.33 seconds.  The pattern persisted across multiple days and could not be explained by terrestrial interference or known astronomical objects.  She affectionately dubbed the source “LGM‑1”, short for “Little Green Men”, reflecting both her humor and the genuine mystery of the signal.</p>`,
    `To verify the phenomenon, Bell Burnell and Hewish consulted with colleagues at other observatories, comparing data from different <span class="vocab" data-cn="干涉仪">interferometers</span>.  The signal’s precise <span class="vocab" data-cn="周期性">periodicity</span> remained unchanged, confirming that it originated far beyond Earth.  In early 1968 the team published their findings in *Nature*, proposing that the source might be a rapidly rotating compact object—later identified as a <span class="vocab" data-cn="中子星">neutron star</span>.  This interpretation was revolutionary; no such objects had been observed directly before.</p>`,
    `The discovery sparked a flurry of theoretical work.  Physicists realized that a neutron star with a strong magnetic field could emit beams of radiation from its magnetic poles, sweeping across space like a lighthouse as the star spun.  When one of those beams intersected Earth, we would detect a brief pulse—exactly what Bell Burnell’s data showed.  This model gave birth to the term “pulsar”, a portmanteau of “pulsating” and “quasar”.</p>`,
    `Pulsars quickly became indispensable tools for testing fundamental physics.  Their extraordinary rotational stability allowed astronomers to measure tiny variations in time, leading to the first indirect proof of <span class="vocab" data-cn="引力波">gravitational waves</span> through the orbital decay of a binary pulsar system discovered by Russell Hulse and Joseph Taylor in 1974.  Moreover, the study of pulsar <span class="vocab" data-cn="磁层">magnetospheres</span> revealed insights into plasma physics under extreme conditions, influencing research on everything from solar flares to high‑energy particle accelerators.</p>`,
    `Despite the monumental impact of the discovery, the 1974 Nobel Prize in Physics was awarded solely to Hewish and astrophysicist <span class="vocab" data-cn="马丁·里斯">Martin Ryle</span>, omitting Bell Burnell.  The oversight sparked a long‑running debate about gender bias in science awards.  In later years, many institutions rectified the omission: Bell Burnell received the 2018 Special Breakthrough Prize in Fundamental Physics and was appointed to the Order of the British Empire for her contributions.</p>`,
    `Today, over fifty years after that first “scruff” on a chart recorder, pulsars continue to illuminate the cosmos.  Millisecond pulsars serve as precise cosmic clocks for pulsar timing arrays, which aim to detect low‑frequency gravitational waves from supermassive black hole mergers.  The legacy of Jocelyn Bell Burnell’s meticulous observation reminds us that curiosity, patience, and a willingness to question the ordinary can reshape our understanding of the universe.</p>`,
    `The story also underscores an essential lesson for budding scientists: data that seems anomalous is not automatically noise; it may be a doorway to new physics.  By treating every irregularity with rigor—just as Bell Burnell did—we keep the door open for the next serendipitous signal that could redefine astronomy once again.</p>`,
  ],
  vocabulary: [
    { word: 'Jocelyn Bell Burnell', cn: '乔西琳·贝尔·伯内尔' },
    { word: 'radio telescope', cn: '射电望远镜' },
    { word: 'interferometer', cn: '干涉仪' },
    { word: 'periodicity', cn: '周期性' },
    { word: 'neutron star', cn: '中子星' },
    { word: 'gravitational waves', cn: '引力波' },
    { word: 'magnetosphere', cn: '磁层' },
  ],
};

export default article;
