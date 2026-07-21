import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of Lithium‑Ion Batteries: John Goodenough’s Breakthrough and the Portable Electronics Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00401 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00401',
  slug: 'the-birth-of-lithium-ion-batteries-john-goodenough-s-breakthrough-and-the-portable-electronics-revolution',
  title: 'The Birth of Lithium‑Ion Batteries: John Goodenough’s Breakthrough and the Portable Electronics Revolution',
  subtitle: 'How a breakthrough in chemistry powered the modern mobile world',
  summary: 'Explore John Goodenough’s pivotal discovery that made high‑energy, rechargeable lithium‑ion batteries possible and transformed portable electronics.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1980s, a quiet laboratory at the University of Texas at Austin became the unlikely birthplace of a technology that would later fit into every pocket. <span class="vocab" data-cn="锂离子电池">Lithium‑ion batteries</span> were still a theoretical concept, but chemist John B. Goodenough was convinced that a new kind of <span class="vocab" data-cn="正极材料">cathode</span> could unlock their potential. Building on the earlier work of M. Stanley Whittingham, who had demonstrated lithium‑metal intercalation in titanium sulfide, Goodenough sought a material that could host more lithium ions while remaining stable at higher voltages.`,
    `The breakthrough came in 1980 when Goodenough and his team discovered that layered lithium cobalt oxide (LiCoO₂) could serve as an excellent cathode. This material allowed lithium ions to move in and out—a process known as <span class="vocab" data-cn="嵌入/脱嵌">intercalation</span>—with minimal structural degradation. The higher operating voltage of LiCoO₂ (about 4 V) meant that each cell could store significantly more energy than the earlier sulfide‑based designs, dramatically improving <span class="vocab" data-cn="能量密度">energy density</span>.`,
    `However, a high‑voltage cathode introduced new challenges. The electrolyte, typically an organic liquid, began to decompose at the elevated potentials, forming a thin film on the anode surface known as the <span class="vocab" data-cn="固体电解质界面层">solid electrolyte interphase (SEI)</span>. While initially viewed as a problem, researchers soon realized that a stable SEI could actually protect the graphite anode and enable thousands of charge‑discharge cycles. This insight turned lithium‑ion cells into truly <span class="vocab" data-cn="可充电的">rechargeable</span> power sources suitable for consumer devices.`,
    `The commercial viability of Goodenough’s cathode was confirmed when Akira Yoshino, working at Asahi Kasei in Japan, paired LiCoO₂ with a carbonaceous anode and packaged the cell into a sealed pouch. In 1991, Sony released the first mass‑produced lithium‑ion battery, boasting a lightweight form factor and a capacity that could power portable radios for days. The market responded instantly: laptops shed bulky lead‑acid packs, digital cameras became truly mobile, and soon after, mobile phones began to shrink dramatically.`,
    `The ripple effect of this breakthrough extended far beyond consumer gadgets. By the late 1990s, electric vehicles (EVs) started to explore lithium‑ion technology as a means to achieve longer ranges without sacrificing performance. The high <span class="vocab" data-cn="能量密度">energy density</span> and relatively low self‑discharge rates made these batteries ideal for applications where weight and space are at a premium. Governments worldwide began investing in research programs, spurring further improvements such as lithium iron phosphate (LiFePO₄) cathodes and silicon‑based anodes.`,
    `Today, the legacy of Goodenough’s discovery is evident in every smartphone, tablet, and wearable device that powers our daily lives. The ongoing quest for higher capacity has led to innovations like solid‑state electrolytes and lithium‑sulfur chemistries, but the fundamental principle—stable intercalation within a robust cathode—remains rooted in his 1980 work. In recognition of this impact, Goodenough was awarded the Nobel Prize in Chemistry in 2019, sharing it with Whittingham and Yoshino for their collective contributions to the field.`,
    `Looking ahead, the challenge is no longer just about storing more energy; it’s also about ensuring sustainability, safety, and affordability. Recycling programs are being refined to recover cobalt, nickel, and lithium from spent cells, while new manufacturing techniques aim to reduce reliance on scarce materials. As researchers push the boundaries of what a battery can do, they continue to stand on the shoulders of Goodenough’s breakthrough—a reminder that a single insight in a university lab can reshape an entire industry and change how humanity stays connected.`,
  ],
  vocabulary: [
    { word: 'Lithium‑ion batteries', cn: '锂离子电池' },
    { word: 'cathode', cn: '正极材料' },
    { word: 'intercalation', cn: '嵌入/脱嵌' },
    { word: 'solid electrolyte interphase (SEI)', cn: '固体电解质界面层' },
    { word: 'energy density', cn: '能量密度' },
    { word: 'rechargeable', cn: '可充电的' },
  ],
};

export default article;
