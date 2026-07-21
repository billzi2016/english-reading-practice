import type { Article } from '../../types/index.ts';

// 文件意图：维护《Einstein’s Annus Mirabilis Papers (1905): Revolutionary Ideas that Redefined Physics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00262 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00262',
  slug: 'einstein-s-annus-mirabilis-papers-1905-revolutionary-ideas-that-redefined-physics',
  title: 'Einstein’s Annus Mirabilis Papers (1905): Revolutionary Ideas that Redefined Physics',
  subtitle: 'How a young patent clerk reshaped our understanding of space, time, and matter.',
  summary: 'An engaging look at the five groundbreaking papers Einstein published in 1905 and why they still matter today.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1905, a twenty-six‑year‑old clerk named Albert Einstein sat at his modest desk in the Swiss Patent Office, surrounded by sketches of mechanical devices. While evaluating applications for novel inventions, he found himself constantly asking “What does this really mean for the laws of physics?” This habit sparked a series of thoughts that would soon erupt into five papers—collectively known as the <span class="vocab" data-cn="奇迹之年">Annus Mirabilis</span>—each challenging a cornerstone of classical science.`,
    `The first paper, “On a Heuristic Viewpoint Concerning the Production and Transformation of Light,” introduced the daring idea that light could behave not only as a wave but also as discrete packets of energy. Einstein called these packets <span class="vocab" data-cn="光子">quanta</span>, later termed photons. By applying this <span class="vocab" data-cn="量子假设">quantum hypothesis</span> to the photoelectric effect, he explained why certain metals emit electrons when illuminated—a puzzle that classical wave theory could not solve. This insight earned him the Nobel Prize in Physics in 1921 and laid groundwork for modern quantum mechanics.`,
    `His second paper tackled a seemingly unrelated phenomenon: the erratic jitter of pollen grains suspended in water. Building on observations by Robert Brown, Einstein showed that this <span class="vocab" data-cn="布朗运动">Brownian motion</span> could be explained if invisible molecules bombarded the particles, providing statistical proof of the existence of atoms and molecules. This argument convinced many skeptics who still doubted atomic theory, reinforcing the kinetic view of matter that underpins chemistry and thermodynamics today.`,
    `The third and perhaps most famous contribution was the paper on <span class="vocab" data-cn="特殊相对论">special relativity</span>. By questioning why Maxwell’s equations predict a constant speed of light regardless of an observer’s motion, Einstein proposed two postulates: (1) the laws of physics are identical in all inertial frames, and (2) the speed of light in vacuum is the same for every observer. From these premises he derived the <span class="vocab" data-cn="洛伦兹变换">Lorentz transformation</span>, which replaces the notion of absolute time with a relative one, intertwining space and time into a single fabric now called spacetime.`,
    `A direct corollary of special relativity appeared in Einstein’s fourth paper, where he introduced the iconic equation <span class="vocab" data-cn="质量能量等价">E = mc²</span>. This formula revealed that mass and energy are interchangeable; a small amount of matter can release an enormous quantity of energy. Though initially a theoretical curiosity, this principle later became the cornerstone of nuclear power and atomic weaponry, illustrating how abstract ideas can have profound practical consequences.` ,
    `The final paper of 1905 addressed the motion of particles in a fluid from a statistical perspective, extending his earlier work on Brownian motion. By deriving the diffusion coefficient from first principles, Einstein provided a quantitative link between macroscopic observables and microscopic dynamics. This achievement not only cemented the kinetic theory of heat but also inspired future developments in stochastic processes and financial mathematics.`,
    `Together, these five papers transformed physics from a discipline anchored in Newtonian absolutes to one that embraces probability, quantization, and relativistic geometry. Einstein’s ability to extract deep insights from everyday observations—whether a patent sketch or a speck of pollen—demonstrates the power of curiosity combined with rigorous reasoning. Over a century later, students still study these works not merely for their historical significance but because they continue to inspire new questions about the universe.` ,
  ],
  vocabulary: [
    { word: 'Annus Mirabilis', cn: '奇迹之年' },
    { word: 'quanta', cn: '光子（量子）' },
    { word: 'quantum hypothesis', cn: '量子假设' },
    { word: 'Brownian motion', cn: '布朗运动' },
    { word: 'special relativity', cn: '特殊相对论' },
    { word: 'Lorentz transformation', cn: '洛伦兹变换' },
    { word: 'E = mc²', cn: '质量能量等价公式' },
  ],
};

export default article;
