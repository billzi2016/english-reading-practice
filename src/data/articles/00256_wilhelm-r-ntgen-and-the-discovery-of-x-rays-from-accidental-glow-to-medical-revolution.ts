import type { Article } from '../../types/index.ts';

// 文件意图：维护《Wilhelm Röntgen and the Discovery of X‑Rays: From Accidental Glow to Medical Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00256 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00256',
  slug: 'wilhelm-r-ntgen-and-the-discovery-of-x-rays-from-accidental-glow-to-medical-revolution',
  title: 'Wilhelm Röntgen and the Discovery of X‑Rays: From Accidental Glow to Medical Revolution',
  subtitle: 'How a chance observation sparked a new era in physics and medicine',
  summary: 'The story of Wilhelm Röntgen’s accidental discovery, its scientific impact, and how it transformed medical diagnostics.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the winter of 1895, Wilhelm <span class="vocab" data-cn="伦琴">Röntgen</span> was a newly appointed professor at the University of Würzburg, Germany. His laboratory was filled with glass tubes that produced streams of electrons—what contemporary physicists called <span class="vocab" data-cn="阴极射线管">cathode ray tube</span> experiments. Röntgen’s primary interest lay in studying these invisible rays, but he had no reason to expect a breakthrough that would change the world.`,
    `One evening, while adjusting a <span class="vocab" data-cn="克鲁克斯管">Crookes tube</span>, he noticed an eerie blue‑white glow emanating from a nearby piece of barium platinocyanide placed on a cardboard screen. The glow persisted even though the tube was wrapped in thick black paper, blocking any visible light. Intrigued, Röntgen moved a <span class="vocab" data-cn="荧光屏">fluorescent screen</span> into the path of the invisible radiation and watched it light up, confirming that something beyond ordinary light was passing through the shielding.`,
    `Röntgen called this mysterious phenomenon “<span class="vocab" data-cn="X射线">X‑ray</span>” because, in scientific notation, “X” denotes an unknown variable. He quickly realized that these rays could penetrate many materials but were absorbed to varying degrees by denser substances. By placing a photographic plate—coated with light‑sensitive silver halide crystals—in the beam’s path, he captured shadowy images where bones and metal appeared dark against a lighter background. This process would later be known as <span class="vocab" data-cn="放射线照相术">radiography</span>.`,
    `The first image Röntgen produced was of his wife’s hand, delicately positioned over the plate. The resulting photograph revealed her skeletal structure with startling clarity, even showing a metal ring on her finger. This single picture demonstrated that X‑rays could reveal internal anatomy without invasive surgery—a concept that seemed almost magical to observers at the time.`,
    `News of Röntgen’s discovery spread rapidly through scientific journals and newspapers. Within weeks, laboratories across Europe and America were reproducing his experiments, confirming that the rays were a universal physical phenomenon rather than a laboratory oddity. Physicians quickly recognized the diagnostic potential: surgeons could now locate fractures, foreign objects, and even tumors without opening the patient’s body. Early wartime applications included locating shrapnel in injured soldiers, dramatically reducing unnecessary amputations.`,
    `However, the power of <span class="vocab" data-cn="电离辐射">ionizing radiation</span> soon revealed a darker side. Prolonged exposure caused skin burns and later was linked to increased cancer risk. By the early 20th century, medical practitioners began developing safety protocols—lead shielding, limited exposure times, and distance guidelines—to protect both patients and operators. These measures laid the groundwork for modern radiological practice, where benefits are carefully weighed against potential harms.`,
    `Röntgen’s modesty earned him the first Nobel Prize in Physics in 1901, a testament to how a single accidental observation can reshape entire fields. His name lives on not only in the unit “roentgen” (a measure of X‑ray exposure) but also in element 111, roentgenium, which honors his lasting impact. Today’s sophisticated imaging technologies—computed tomography (CT), digital radiography, and even interventional fluoroscopy—trace their lineage directly back to that dim glow in Röntgen’s darkened lab.`,
  ],
  vocabulary: [
    { word: 'Röntgen', cn: '伦琴' },
    { word: 'cathode ray tube', cn: '阴极射线管' },
    { word: 'Crookes tube', cn: '克鲁克斯管' },
    { word: 'fluorescent screen', cn: '荧光屏' },
    { word: 'X‑ray', cn: 'X射线' },
    { word: 'radiography', cn: '放射线照相术' },
    { word: 'ionizing radiation', cn: '电离辐射' },
  ],
};

export default article;
