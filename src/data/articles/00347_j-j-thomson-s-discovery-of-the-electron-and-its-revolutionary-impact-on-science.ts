import type { Article } from '../../types/index.ts';

// 文件意图：维护《J.J. Thomson’s Discovery of the Electron and Its Revolutionary Impact on Science》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00347 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00347',
  slug: 'j-j-thomson-s-discovery-of-the-electron-and-its-revolutionary-impact-on-science',
  title: 'J.J. Thomson’s Discovery of the Electron and Its Revolutionary Impact on Science',
  subtitle: 'How a humble tube reshaped our view of matter',
  summary: 'The 1897 experiment that revealed the electron and sparked a century of scientific revolutions.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the spring of 1897, at the Cavendish Laboratory in Cambridge, a young physicist named J.J. Thomson set up a modest <span class="vocab" data-cn="阴极射线管">cathode ray tube</span>. By applying a high voltage across two electrodes inside a glass envelope, he produced a faint glow that streamed from the cathode toward the anode. Though such tubes had been used for decades in telegraphy and early photography, Thomson treated them as precise measuring instruments, hoping to uncover something hidden within the mysterious rays.`,
    `Thomson’s key insight was to place both electric and magnetic fields perpendicular to the path of the rays. By adjusting the strength of each field until the ray’s deflection vanished, he could calculate a fundamental property: the <span class="vocab" data-cn="电荷-质量比">charge-to-mass ratio</span> (e/m) of the particles composing the ray. Remarkably, his measurements yielded an e/m value over 1,800 times larger than that of any known ion, indicating a particle far lighter than atoms.`,
    `From this result Thomson concluded that the rays were made of previously unknown <span class="vocab" data-cn="亚原子粒子">subatomic particles</span>. He named them “corpuscles,” but later they became known as electrons—the first constituent of matter identified to be smaller than an atom. This discovery shattered the long‑standing belief that atoms were indivisible, a view held since Dalton’s early 19th‑century atomic theory.`,
    `To accommodate these new particles, Thomson proposed his famous <span class="vocab" data-cn="原子模型">atomic model</span>, often called the “<span class="vocab" data-cn="普鲁姆布丁模型">plum pudding model</span>.” In this picture, a positively charged sphere acted like a pudding, while negatively charged electrons were scattered throughout like raisins. Although later experiments would replace this model, it provided the first coherent visualisation of an atom containing internal structure.`,
    `The ripple effects of Thomson’s work spread quickly across physics and chemistry. Knowing that atoms contained mobile charges helped explain electrical conductivity in metals and the phenomenon of ionization in gases. Moreover, the electron’s existence forced chemists to rethink valence and bonding, eventually leading to the development of modern chemical periodicity based on electronic configuration.`,
    `In the decades following Thomson’s discovery, the quest to understand the electron’s behavior drove some of the most profound theoretical advances. The failure of classical mechanics to explain atomic stability led Max Planck to introduce quantisation in 1900, and Albert Einstein later used the concept of photons—another form of discrete energy—to explain the photoelectric effect. These ideas culminated in the birth of <span class="vocab" data-cn="量子力学">quantum mechanics</span>, a framework that treats electrons as wave‑like entities described by probability amplitudes rather than tiny billiard balls.`,
    `Today, the electron is central to technologies ranging from semiconductor transistors to medical imaging. Its discovery not only rewrote textbooks but also inaugurated an era where probing ever smaller scales became possible, ultimately leading to particle accelerators that explore quarks, leptons, and the Higgs boson. Thomson’s humble tube thus stands as a reminder that profound insight often begins with careful observation of ordinary phenomena.`,
  ],
  vocabulary: [
    { word: 'cathode ray tube', cn: '阴极射线管' },
    { word: 'charge-to-mass ratio', cn: '电荷-质量比' },
    { word: 'subatomic particle', cn: '亚原子粒子' },
    { word: 'atomic model', cn: '原子模型' },
    { word: 'plum pudding model', cn: '普鲁姆布丁模型' },
    { word: 'quantum mechanics', cn: '量子力学' },
  ],
};

export default article;
