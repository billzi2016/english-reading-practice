import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Ascent of Mount Everest: Triumph, Tragedy, and the Birth of Modern High‑Altitude Expedition》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00096 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00096',
  slug: 'the-first-ascent-of-mount-everest-triumph-tragedy-and-the-birth-of-modern-high-altitude-expedition',
  title: 'The First Ascent of Mount Everest: Triumph, Tragedy, and the Birth of Modern High‑Altitude Expedition',
  subtitle: 'How a 1953 climb reshaped mountaineering forever',
  summary: 'A narrative of the daring 1953 summit, its earlier tragedies, and the lasting legacy for high‑altitude exploration.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On May 29 1953, millions of listeners across Britain heard a stunned broadcaster announce that Sir Edmund Hillary of New Zealand and Tenzing Norgay, a seasoned <span class="vocab" data-cn="夏尔巴人">Sherpa</span>, had reached the <span class="vocab" data-cn="顶峰">summit</span> of Mount Everest. The news arrived just hours before Queen Elizabeth II’s coronation, turning a remote Himalayan triumph into a global celebration and a symbol of post‑war perseverance.`,
    `The path to that moment was paved with earlier British <span class="vocab" data-cn="探险队">expedition</span>s that ended in sorrow. In 1922 the expedition suffered an avalanche on the North Face, killing seven climbers, while the 1924 team vanished after George Mallory and Andrew Irvine set out for the top and never returned. Their disappearance sparked endless speculation and underscored the lethal combination of thin air, unpredictable weather, and untested equipment.`,

    `Learning from those failures, the 1953 British–Indian joint effort adopted a more systematic approach. They chose the South Col route, which required establishing a series of high camps for gradual <span class="vocab" data-cn="适应高海拔">acclimatization</span>. Crucially, they brought reliable <span class="vocab" data-cn="高度计">altimeter</span> devices and portable oxygen systems, allowing climbers to monitor altitude precisely and combat the creeping <span class="vocab" data-cn="缺氧">hypoxia</span> that can impair judgment above 8,000 meters.`,

    `On the final day, Hillary and Tenzing set out from Camp IV at 8,500 m with a full complement of bottled oxygen. The climb was a grueling test of stamina; each step required careful pacing to avoid exhaustion. When they reached the “death zone” above 8,000 m, both men relied on their <span class="vocab" data-cn="氧气面罩">oxygen mask</span> to sustain breathing. At 11:30 a.m., after a brief pause at the ridge, Hillary stepped onto the summit rock and shouted “Well done!” while Tenzing followed moments later, both aware that any misstep could be fatal.`,

    `The triumph was immediate and far‑reaching. In London, crowds gathered around radios as the news broke, and the British press hailed the ascent as a testament to human courage and ingenuity. For New Zealand, Hillary became a national hero; for Nepal, Tenzing’s success elevated the status of the <span class="vocab" data-cn="夏尔巴人">Sherpa</span> community, highlighting their indispensable role in high‑altitude climbing.`,

    `Yet the victory could not erase the earlier tragedies. The 1953 team mourned the loss of climbers who had perished on previous attempts, and they recognized that each successful summit was built upon sacrifice. Moreover, the expedition’s reliance on supplemental oxygen sparked a debate that continues today: should climbers use artificial aids or strive for “pure” ascents? This ethical question reflects the broader tension between adventure and safety that defines modern mountaineering.`,

    `The legacy of the 1953 ascent reshaped how future <span class="vocab" data-cn="探险队">expedition</span>s were organized. Systematic acclimatization schedules, precise altitude monitoring with <span class="vocab" data-cn="高度计">altimeter</span> readings, and reliable oxygen delivery became standard practice. Commercial trekking companies later adopted these methods, opening Everest to a wider audience while also raising concerns about overcrowding and environmental impact. In essence, the 1953 climb marked the birth of modern high‑altitude expedition logistics—a blend of scientific rigor and daring spirit that still guides climbers today.`,
  ],
  vocabulary: [
    { word: 'summit', cn: '顶峰' },
    { word: 'Sherpa', cn: '夏尔巴人' },
    { word: 'altimeter', cn: '高度计' },
    { word: 'hypoxia', cn: '缺氧' },
    { word: 'oxygen mask', cn: '氧气面罩' },
    { word: 'acclimatization', cn: '适应高海拔' },
    { word: 'expedition', cn: '探险队' },
  ],
};

export default article;
