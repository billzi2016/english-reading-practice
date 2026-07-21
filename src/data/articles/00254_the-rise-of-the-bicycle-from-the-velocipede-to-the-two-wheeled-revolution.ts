import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise of the Bicycle: From the Velocipede to the Two‑Wheeled Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00254 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00254',
  slug: 'the-rise-of-the-bicycle-from-the-velocipede-to-the-two-wheeled-revolution',
  title: 'The Rise of the Bicycle: From the Velocipede to the Two‑Wheeled Revolution',
  subtitle: 'How a humble wooden frame reshaped society and technology',
  summary: 'Tracing the bicycle’s evolution from early experiments to its modern cultural impact.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `If you have ever felt the wind rush past as you coast down a city street, you are part of a lineage that began over two centuries ago. The sleek carbon‑fiber machines we see today share a surprising ancestry with wooden frames and iron wheels that once rattled across cobblestones. Understanding this transformation helps learners appreciate how incremental engineering breakthroughs can spark sweeping social change.`,
    `The story starts in 1817, when German inventor <span class="vocab" data-cn="踏板车">Karl Drais</span> unveiled the <span class="vocab" data-cn="滑行自行车">draisine</span>, a wooden “running machine” without pedals. Riders pushed off the ground with their feet, steering by turning the front fork. Though primitive, the draisine demonstrated that human power could propel a two‑wheeled vehicle faster than a horse‑drawn carriage, planting the seed for future experimentation during the <span class="vocab" data-cn="工业革命">Industrial Revolution</span>.`,
    `A decade later, French craftsmen introduced the <span class="vocab" data-cn="脚踏车">velocipede</span>, often nicknamed the “boneshaker” because of its rigid iron frame and wooden wheels. Pedals were attached directly to the front axle, forcing riders to balance on a shaky platform while navigating uneven streets. Despite its discomfort, the velocipede sparked a craze across Europe and North America, proving that a pedal‑driven design could be commercially viable.`,
    `By the 1870s, engineers sought greater speed and stability, leading to the iconic <span class="vocab" data-cn="高轮自行车">penny‑farthing</span>. Its massive front wheel—sometimes over five feet in diameter—allowed each pedal rotation to cover a longer distance, while the tiny rear wheel supported the rider’s weight. The design was thrilling but perilous; a sudden stop could launch riders forward, earning it the nickname “climbing the stepladder.” Nevertheless, the penny‑farthing captured public imagination and cemented the bicycle as a symbol of daring modernity.`,
    `The turning point arrived with the 1885 <span class="vocab" data-cn="安全自行车">Rover Safety Bicycle</span>, engineered by John Kemp Starley. This model featured two wheels of equal size, a diamond‑shaped <span class="vocab" data-cn="车架几何">frame geometry</span>, and most importantly, a <span class="vocab" data-cn="链条传动">chain drive</span> that transferred power from the pedals to the rear wheel. The chain allowed riders to sit lower and farther from the ground, dramatically improving safety and comfort. Within a few years, the safety bicycle eclipsed its high‑wheeled predecessor worldwide.`,
    `Beyond engineering, the bicycle became a catalyst for social transformation. Women, who had previously been confined to horse‑drawn carriages or walking, embraced the safety bicycle as a means of personal mobility, challenging restrictive clothing norms and advocating for <span class="vocab" data-cn="解放">emancipation</span>. Urban planners also began to consider dedicated lanes, recognizing that bicycles could alleviate congestion in rapidly growing cities. By the early 20th century, cycling clubs flourished, and the bicycle was celebrated as a democratic mode of transport accessible to all classes.`,
    `Today, the legacy of those early experiments lives on in electric assist bikes, ultra‑light carbon frames, and global movements promoting sustainable travel. The same principles—efficient power transmission, balanced frame design, and human‑centered ergonomics—still guide modern engineers. As cyclists continue to reshape cityscapes and inspire environmental stewardship, they ride on a tradition that began with a wooden contraption pushed by foot and has evolved into a two‑wheeled revolution spanning continents and centuries.`,
  ],
  vocabulary: [
    { word: 'Karl Drais', cn: '卡尔·德赖斯' },
    { word: 'draisine', cn: '滑行自行车' },
    { word: 'Industrial Revolution', cn: '工业革命' },
    { word: 'velocipede', cn: '脚踏车' },
    { word: 'penny-farthing', cn: '高轮自行车' },
    { word: 'Rover Safety Bicycle', cn: '安全自行车（罗孚）' },
    { word: 'frame geometry', cn: '车架几何' },
    { word: 'chain drive', cn: '链条传动' },
    { word: 'emancipation', cn: '解放' },
  ],
};

export default article;
