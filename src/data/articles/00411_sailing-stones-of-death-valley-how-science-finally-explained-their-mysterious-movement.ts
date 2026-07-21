import type { Article } from '../../types/index.ts';

// 文件意图：维护《Sailing Stones of Death Valley: How Science Finally Explained Their Mysterious Movement》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00411 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00411',
  slug: 'sailing-stones-of-death-valley-how-science-finally-explained-their-mysterious-movement',
  title: 'Sailing Stones of Death Valley: How Science Finally Explained Their Mysterious Movement',
  subtitle: 'The long‑standing mystery of moving rocks finally meets modern physics.',
  summary: 'A look at the decades‑old puzzle of the sailing stones and how a clever field experiment solved it.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the heart of California’s <span class="vocab" data-cn="盐碱平原">playa</span> known as Racetrack Playa, dozens of medium‑sized rocks appear to glide across the cracked mud without any visible push. Their trails—long, shallow furrows etched into the dried surface—have fascinated travelers since early 20th‑century photographs first circulated, earning them the nickname “<span class="vocab" data-cn="会移动的石头">sailing stones</span>.”`,
    `For decades, scientists proposed a parade of explanations: strong gusts of wind alone, magnetic forces from underground minerals, even the subtle pull of electrostatic charges. Yet each hypothesis fell short when confronted with field observations—no consistent wind direction aligned with stone tracks, and magnetometers detected no anomalous fields. The mystery persisted, turning the stones into a natural curiosity that resisted simple answers.`,
    `The breakthrough arrived in 2014 when a multidisciplinary team from the University of California, Riverside, equipped with <span class="vocab" data-cn="延时摄影">time‑lapse photography</span> rigs and GPS trackers, set up a months‑long observation campaign on the playa. By placing cameras around the perimeter and attaching tiny transmitters to several stones, they captured every subtle movement under harsh desert conditions, finally providing continuous visual evidence of how the rocks actually travel.`,
    `Their data revealed that after an infrequent rainstorm, a thin veneer of water spreads across the flat surface. As night falls, temperatures plunge below freezing, and this shallow film solidifies into a fragile <span class="vocab" data-cn="冰层">ice sheet</span>. By dawn, the ice is only a few millimeters thick—just enough to reduce friction dramatically—but still strong enough for the wind to push it. When a light breeze creates <span class="vocab" data-cn="风切变">wind shear</span> across the smooth ice, the entire sheet slides, carrying any stones embedded within it forward a short distance.`,
    `The physics behind this motion is elegantly simple yet requires an understanding of <span class="vocab" data-cn="热力学">thermodynamics</span>. The rapid freeze‑thaw cycle creates a low‑friction interface: the ice reduces contact between rock and mud, while the underlying wet substrate prevents the stones from digging in. As the sun warms the surface later in the day, the ice melts, leaving behind clean tracks that record the stone’s path. This cyclical process can repeat over several days, explaining why some rocks travel meters while others remain stationary.`,
    `To confirm that subsurface conditions played no hidden role, researchers employed <span class="vocab" data-cn="地下探测雷达">ground‑penetrating radar</span> scans beneath the playa. The radar profiles showed a homogeneous layer of silty clay with no buried obstacles or metallic deposits that could influence movement. Combined with the visual evidence from the cameras, the study conclusively demonstrated that the stones’ motion is driven solely by wind acting on thin ice sheets—a natural analogue of how glaciers transport rocks in polar regions.`,
    `Beyond solving a local curiosity, the findings have broader planetary implications. Similar patterned ground and moving boulders have been observed on Mars, where seasonal CO₂ frost may play a role analogous to Earth’s water‑ice sheet. Understanding the interplay of temperature, thin ice, and wind on Racetrack Playa therefore provides a valuable template for interpreting extraterrestrial surface dynamics.`,
    `Today, visitors to Death Valley can still witness the silent trails left by these enigmatic rocks, but the mystery that once seemed supernatural now rests firmly in the realm of observable science. The sailing stones remind us that even the most puzzling natural phenomena often yield to patient observation and interdisciplinary inquiry—a lesson as timeless as the desert itself.`,
  ],
  vocabulary: [
    { word: 'sailing stones', cn: '会移动的石头' },
    { word: 'playa', cn: '盐碱平原' },
    { word: 'ice sheet', cn: '冰层' },
    { word: 'wind shear', cn: '风切变' },
    { word: 'time-lapse photography', cn: '延时摄影' },
    { word: 'ground-penetrating radar', cn: '地下探测雷达' },
    { word: 'thermodynamics', cn: '热力学' },
  ],
};

export default article;
