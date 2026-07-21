import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Hunt for Dark Matter: From Early Theories to Modern Underground Detectors》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00057 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00057',
  slug: 'the-hunt-for-dark-matter-from-early-theories-to-modern-underground-detectors',
  title: 'The Hunt for Dark Matter: From Early Theories to Modern Underground Detectors',
  subtitle: 'Tracing the scientific quest from Zwicky’s observations to today’s deep‑underground experiments.',
  summary: 'A narrative of how astronomers and physicists have chased invisible mass, developing theories and building ultra‑sensitive detectors beneath the Earth.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In 1933, Swiss astronomer <span class="vocab" data-cn="弗里茨·兹威基">Fritz Zwicky</span> measured the velocities of galaxies in the Coma Cluster and found they were moving far too fast to be held together by the visible stars alone. He coined the term <span class="vocab" data-cn="暗物质">dark matter</span> to describe the unseen mass that must provide extra gravitational pull, a hypothesis later reinforced by <span class="vocab" data-cn="星系旋转曲线">galaxy rotation curves</span> and <span class="vocab" data-cn="引力透镜效应">gravitational lensing</span>. These early astronomical clues set the stage for a decades‑long interdisciplinary hunt, blending astrophysics with particle physics.`,
    `By the 1970s, theorists began to ask what kind of particle could account for dark matter’s gravitational influence while remaining invisible to electromagnetic detectors. The most popular candidate emerged as the <span class="vocab" data-cn="弱相互作用大质量粒子">weakly interacting massive particle</span> (WIMP), a hypothetical particle that would interact only through the weak nuclear force and gravity. Simultaneously, alternative ideas such as the ultra‑light <span class="vocab" data-cn="轴子">axion</span> and sterile neutrinos entered the discussion, each offering distinct production mechanisms in the early universe.`,
    `The first direct attempts to catch a WIMP involved building detectors deep underground, shielded from cosmic rays that would otherwise drown out any faint signal. Early experiments like <span class="vocab" data-cn="美国暗物质实验">the Cryogenic Dark Matter Search (CDMS)</span> used germanium crystals cooled to near absolute zero, measuring the tiny phonon vibrations produced when a particle collided with a nucleus. These <span class="vocab" data-cn="低温探测器">cryogenic detectors</span> could distinguish nuclear recoils from background electron events by analyzing both heat and ionization signals.`,
    `As technology advanced, liquid noble gases became the medium of choice for larger‑scale experiments. The <span class="vocab" data-cn="液态氙探测器">Xenon1T</span> detector in Italy’s Gran Sasso laboratory filled a 2‑tonne tank of ultra‑pure xenon and watched for brief flashes of <span class="vocab" data-cn="闪烁光">scintillation</span> light followed by ionization electrons drifting upward. By measuring the ratio of these two signals, researchers could suppress most background events, pushing sensitivity down to cross‑sections as low as 10⁻⁴⁷ cm² for a 30 GeV WIMP. Similar designs—LUX in the United States and PandaX in China—confirmed the power of this dual‑phase approach.`,
    `Even with exquisite shielding, experiments must contend with inevitable <span class="vocab" data-cn="背景辐射">background radiation</span> from natural radioactivity in detector materials and the surrounding rock. To mitigate this, modern collaborations employ multi‑layered veto systems, careful material selection, and sophisticated statistical analyses that model every known source of noise. Yet a new limit looms: the <span class="vocab" data-cn="中微子底噪">neutrino floor</span>, where solar and atmospheric neutrinos produce recoils indistinguishable from WIMPs, setting an ultimate sensitivity barrier for conventional detectors.`,
    `Parallel to direct detection, scientists pursue indirect signatures of dark matter annihilation or decay. Space‑based telescopes such as the <span class="vocab" data-cn="费米伽马射线空间望远镜">Fermi Gamma-ray Space Telescope</span> scan the sky for excess gamma rays from regions dense with dark matter, like dwarf spheroidal galaxies. Meanwhile, particle colliders—most notably the Large Hadron Collider (LHC)—search for missing transverse energy events that could indicate production of invisible particles escaping the detector, offering complementary constraints on WIMP models.`,
    `Looking ahead, the next generation of underground experiments aims to scale up both mass and purity. Projects like <span class="vocab" data-cn="DARWIN实验">DARWIN</span> plan a 50‑tonne liquid xenon target, while <span class="vocab" data-cn="SuperCDMS SNOLAB">SuperCDMS SNOLAB</span> will push cryogenic technology to even lower thresholds, potentially accessing sub‑GeV dark matter candidates. Together with advances in quantum sensing and novel materials, these efforts keep the hunt alive, hoping that one day a faint signal will finally illuminate the dark side of our universe.`,
  ],
  vocabulary: [
    { word: 'dark matter', cn: '暗物质' },
    { word: 'gravitational lensing', cn: '引力透镜效应' },
    { word: 'weakly interacting massive particle (WIMP)', cn: '弱相互作用大质量粒子' },
    { word: 'cryogenic detector', cn: '低温探测器' },
    { word: 'scintillation', cn: '闪烁光' },
    { word: 'background radiation', cn: '背景辐射' },
    { word: 'neutrino floor', cn: '中微子底噪' },
    { word: 'DARWIN', cn: 'DARWIN实验' },
  ],
};

export default article;
