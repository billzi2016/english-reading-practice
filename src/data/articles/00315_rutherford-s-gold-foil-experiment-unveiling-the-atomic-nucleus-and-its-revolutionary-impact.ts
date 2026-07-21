import type { Article } from '../../types/index.ts';

// 文件意图：维护《Rutherford’s Gold Foil Experiment: Unveiling the Atomic Nucleus and Its Revolutionary Impact》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00315 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00315',
  slug: 'rutherford-s-gold-foil-experiment-unveiling-the-atomic-nucleus-and-its-revolutionary-impact',
  title: 'Rutherford’s Gold Foil Experiment',
  subtitle: 'How a thin sheet of gold reshaped our picture of the atom',
  summary: 'A narrative of Ernest Rutherford’s breakthrough experiment and its lasting influence on modern physics.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `At the dawn of the twentieth century, most scientists still clung to J.J. Thomson’s “<span class="vocab" data-cn="汤姆森模型">plum pudding model</span>”, which imagined an atom as a diffuse cloud of positive charge dotted with tiny electrons. Ernest Rutherford, a New Zealand‑born physicist working at the University of Manchester, was skeptical. He believed that if the true structure were different, a clever experiment could reveal it.`,
    `Rutherford’s plan required three key ingredients: a source of energetic <span class="vocab" data-cn="α粒子">alpha particles</span>, a thin target, and a detector capable of recording where each particle emerged. He obtained the alpha particles from a sealed tube containing radium‑226, which emitted them as part of its natural decay. The target was a sheet only a few atoms thick—hence the name “<span class="vocab" data-cn="金箔实验">Gold Foil Experiment</span>”.`,
    `When the alpha particles struck the gold foil, most passed straight through with little deflection, confirming that much of the atom is indeed empty space. However, a small fraction—about one in 20,000—were sharply turned back toward the source. This unexpected “<span class="vocab" data-cn="散射">scattering</span>” pattern could not be explained by the plum pudding picture, which predicted only gentle deviations.`,
    `Rutherford interpreted these results with a bold hypothesis: the atom must contain a tiny, dense core that carries most of its <span class="vocab" data-cn="正电荷">positive charge</span>. He called this core the “<span class="vocab" data-cn="原子核">atomic nucleus</span>”. In his model, electrons orbit the nucleus much like planets around the sun, leaving vast regions of vacuum between them. This simple yet powerful idea accounted for both the rare large‑angle deflections and the frequent near‑straight passages.`,
    `The implications rippled far beyond a single experiment. By establishing that atoms have an internal structure, Rutherford paved the way for Niels Bohr’s quantized orbital model, which in turn inspired the development of quantum mechanics. Moreover, the discovery of the nucleus opened the door to nuclear chemistry and later to the harnessing of nuclear energy—both peaceful (e.g., medical isotopes) and destructive (e.g., atomic bombs).`,
    `Rutherford’s methodology also set a new standard for experimental physics. He demonstrated how careful measurement, combined with daring interpretation, could overturn entrenched theories. The use of a thin metallic foil as a “window” into the atom inspired later techniques such as electron diffraction and modern scanning tunneling microscopy, which continue to probe matter at atomic scales.`,
    `Today, the legacy of the <span class="vocab" data-cn="金箔实验">Gold Foil Experiment</span> lives on in classrooms and research labs alike. Students recreate simplified versions with safe radioactive sources or even with laser‑cooled ions, while physicists push the boundaries by colliding particles at energies millions of times higher than Rutherford’s alpha particles. In every case, the core lesson remains: a single well‑designed experiment can reveal an entire hidden world.`,
  ],
  vocabulary: [
    { word: 'plum pudding model', cn: '汤姆森模型' },
    { word: 'alpha particles', cn: 'α粒子' },
    { word: 'Gold Foil Experiment', cn: '金箔实验' },
    { word: 'scattering', cn: '散射' },
    { word: 'positive charge', cn: '正电荷' },
    { word: 'atomic nucleus', cn: '原子核' },
  ],
};

export default article;
