import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the Liquid Crystal Display: From Laboratory Curiosity to Ubiquitous Screens》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00220 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00220',
  slug: 'the-invention-of-the-liquid-crystal-display-from-laboratory-curiosity-to-ubiquitous-screens',
  title: 'The Invention of the Liquid Crystal Display: From Laboratory Curiosity to Ubiquitous Screens',
  subtitle: 'How a strange state of matter became the backbone of modern visual technology',
  summary: 'A narrative tracing the scientific breakthroughs and engineering challenges that turned liquid crystals into today’s everyday screens.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the late nineteenth century, a modest Austrian chemist named Friedrich Reinitzer observed something odd when he dissolved cholesteryl benzoate in alcohol. Upon heating, the solution turned cloudy and then cleared again, behaving neither like a solid nor a conventional liquid. This puzzling behavior was later termed <span class="vocab" data-cn="液晶">liquid crystal</span>, a phase that combines fluidity with a degree of molecular order. Otto Lehmann, a contemporary physicist, coined the phrase “liquid crystal” and began cataloguing its optical quirks, laying the groundwork for a field that would remain dormant for decades.`,
    `Fast forward to the 1960s, when the United States’ defense research labs were hunting for fast‑acting light modulators. At RCA’s David Sarnoff Research Center, engineer George H. Heilmeier discovered that certain liquid crystals could switch from an opaque to a transparent state under an electric field—a phenomenon he called <span class="vocab" data-cn="动态散射模式">dynamic scattering mode</span> (DSM). DSM devices were bulky and power‑hungry, but they proved the principle that electricity could control light in a thin layer of material, igniting a race among corporations to refine the effect.`,
    `The breakthrough that made LCDs practical for everyday gadgets arrived in 1970 when James Fergason, working at Westinghouse, patented the <span class="vocab" data-cn="扭曲向列">twisted nematic</span> (TN) cell. In a TN display, liquid crystal molecules are aligned in opposite directions on two glass surfaces, creating a 90‑degree twist that rotates polarized light. When voltage is applied, the twist collapses and the light no longer passes through a second <span class="vocab" data-cn="偏振片">polarizer</span>. This simple yet elegant mechanism required far less power than DSM and could be manufactured on a flat glass substrate, opening the door to portable electronics.`,
    `Sharp Corporation was quick to capitalize on the TN principle. In 1973 they released the world’s first commercial LCD calculator, the EL‑8050, followed by the iconic digital watch in 1975. These devices demonstrated that liquid crystal panels could be mass‑produced at low cost while consuming only milliwatts of power—an essential trait for battery‑operated products. However, early TN screens suffered from limited viewing angles and slow response times, prompting engineers to search for ways to address these shortcomings.`,
    `The answer emerged in the late 1970s with the invention of the <span class="vocab" data-cn="薄膜晶体管">thin‑film transistor</span> (TFT). Researchers at IBM’s Thomas J. Watson Research Center, including Chih‑Tang Sah and his team, succeeded in depositing a grid of microscopic transistors directly onto a glass substrate coated with amorphous silicon. Each pixel could now be addressed individually, giving rise to the <span class="vocab" data-cn="主动矩阵">active matrix</span> architecture that dramatically improved contrast, response speed, and color fidelity. By the early 1980s, TFT‑LCD panels began appearing in portable computers and high‑end televisions.`,
    `While the hardware advanced, scientists continued to explore the rich optical physics of liquid crystals. The concept of <span class="vocab" data-cn="双折射">birefringence</span>—the dependence of refractive index on light polarization—proved crucial for designing multi‑color displays. By layering red, green, and blue sub‑pixels with precise alignment layers, manufacturers could create full‑color images using the same electro‑optic effect that powered monochrome watches. This synergy between material science and circuit engineering turned LCDs into a universal interface, from handheld game consoles to massive digital signage.`,
    `Today, liquid crystal displays dominate the market not only because of their low power draw but also due to continuous refinements such as in‑plane switching (IPS), vertical alignment (VA), and quantum‑dot enhancement. Each iteration traces its lineage back to that curious cholesteryl solution observed over a century ago. The journey from laboratory curiosity to ubiquitous screen illustrates how fundamental research, when paired with inventive engineering, can reshape everyday life in ways the original scientists could scarcely imagine.`,
  ],
  vocabulary: [
    { word: 'liquid crystal', cn: '液晶' },
    { word: 'dynamic scattering mode', cn: '动态散射模式' },
    { word: 'twisted nematic', cn: '扭曲向列' },
    { word: 'polarizer', cn: '偏振片' },
    { word: 'thin‑film transistor', cn: '薄膜晶体管' },
    { word: 'birefringence', cn: '双折射' },
  ],
};

export default article;
