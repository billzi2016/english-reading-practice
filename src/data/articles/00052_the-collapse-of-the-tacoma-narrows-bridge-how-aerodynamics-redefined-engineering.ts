import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Collapse of the Tacoma Narrows Bridge: How Aerodynamics Redefined Engineering》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00052 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00052',
  slug: 'the-collapse-of-the-tacoma-narrows-bridge-how-aerodynamics-redefined-engineering',
  title: 'The Collapse of the Tacoma Narrows Bridge: How Aerodynamics Redefined Engineering',
  subtitle: 'A dramatic case study that reshaped bridge design worldwide.',
  summary: 'Explore how a 1940 disaster taught engineers to treat wind as a structural partner, not an afterthought.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On November 7, 1940, the newly completed Tacoma Narrows Bridge in Washington State began its infamous “dance” over the Puget Sound. Locals affectionately called it “Galloping Gertie” because of the way its slender deck seemed to sway and twist even under modest breezes. The bridge’s dramatic failure—captured on film and witnessed by thousands—became a watershed moment, forcing engineers to confront an invisible enemy: wind.`,
    `The bridge was a classic example of a <span class="vocab" data-cn="悬索桥">suspension bridge</span>, relying on massive steel cables that followed a natural <span class="vocab" data-cn="链形曲线，描述吊索受力时的形状">catenary</span> shape. Its main span stretched 2,800 feet, but the deck was unusually narrow and lightweight to reduce material costs. This design choice gave the structure an elegant appearance, yet it also left the bridge with very little inherent <span class="vocab" data-cn="阻尼，指结构对振动的自然抑制能力">damping</span>, making it vulnerable to dynamic forces.</`,
    `On that fateful afternoon, wind speeds rose to about 40 miles per hour—well below what modern codes would deem dangerous for such a span. However, the airflow over the deck triggered a phenomenon known as <span class="vocab" data-cn="气动颤振，一种导致结构自激振荡的流体动力学不稳定现象">aerodynamic flutter</span>. Unlike simple gusts that push a structure back and forth, flutter is a self‑sustaining oscillation where aerodynamic forces feed energy into the motion, causing amplitudes to grow exponentially.</`,
    `Witnesses described a terrifying sight: the bridge began with gentle vertical undulations, then rapidly transitioned into a violent <span class="vocab" data-cn="扭转振动，桥面围绕其纵向轴线的摆动">torsional oscillation</span>. Simultaneously, engineers observed patterns of alternating low‑pressure vortices shedding from the deck’s edges—a process called <span class="vocab" data-cn="旋涡脱落，流体在固体表面形成并周期性分离的现象">vortex shedding</span>. These vortices acted like rhythmic pushes, synchronizing with the bridge’s natural twisting mode and amplifying it.</`,
    `Post‑mortem investigations identified a <span class="vocab" data-cn="临界风速，指结构开始出现不稳定振动的最小风速">critical wind speed</span> of roughly 35 mph for this particular geometry. Because the bridge lacked sufficient aerodynamic shaping and internal <span class="vocab" data-cn="阻尼装置，用于吸收和消散振动能量的系统">damping mechanisms</span>, the energy supplied by the wind could not be dissipated, leading to catastrophic failure after just a few minutes of oscillation. The deck finally snapped at its midpoint and plunged into the water below.</`,
    `The collapse sent shockwaves through the civil‑engineering community. In response, engineers began systematic <span class="vocab" data-cn="风洞实验，用于模拟空气流动对结构影响的测试方法">wind tunnel testing</span> of bridge models, a practice that was previously reserved for aircraft design. Design codes were revised to require aerodynamic stability checks for long‑span bridges, and new concepts such as <span class="vocab" data-cn="气弹性学，研究结构与流体相互作用的学科">aeroelasticity</span> entered the engineering curriculum.</`,
    `Today, iconic structures like the Golden Gate Bridge and the Akashi Kaikyō Bridge incorporate deep‑stiffened decks, open trusses, or tuned mass dampers—direct descendants of lessons learned from Galloping Gertie. The Tacoma Narrows disaster remains a vivid reminder that nature can turn even the most elegant design into a deadly oscillator if engineers ignore the subtle dance between wind and structure.`,
  ],
  vocabulary: [
    { word: 'suspension bridge', cn: '悬索桥' },
    { word: 'catenary', cn: '链形曲线，描述吊索受力时的形状' },
    { word: 'damping', cn: '阻尼，指结构对振动的自然抑制能力' },
    { word: 'aerodynamic flutter', cn: '气动颤振，一种导致结构自激振荡的流体动力学不稳定现象' },
    { word: 'torsional oscillation', cn: '扭转振动，桥面围绕其纵向轴线的摆动' },
    { word: 'vortex shedding', cn: '旋涡脱落，流体在固体表面形成并周期性分离的现象' },
    { word: 'critical wind speed', cn: '临界风速，指结构开始出现不稳定振动的最小风速' },
    { word: 'wind tunnel testing', cn: '风洞实验，用于模拟空气流动对结构影响的测试方法' },
    { word: 'aeroelasticity', cn: '气弹性学，研究结构与流体相互作用的学科' },
  ],
};

export default article;
