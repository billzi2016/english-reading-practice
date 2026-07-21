import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1936 Einstein–Rosen Bridge: The Birth of Wormhole Theory and Its Journey Through Physics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00448 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00448',
  slug: 'the-1936-einstein-rosen-bridge-the-birth-of-wormhole-theory-and-its-journey-through-physics',
  title: 'The 1936 Einstein–Rosen Bridge: The Birth of Wormhole Theory and Its Journey Through Physics',
  subtitle: 'From a daring 1930s model to modern speculative physics',
  summary: 'How Einstein and Rosen’s 1936 paper introduced the concept of a bridge in spacetime, sparking decades of theoretical adventure.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1935 Albert <span class="vocab" data-cn="爱因斯坦">Einstein</span> and his younger collaborator Nathan Rosen submitted a short note to *Annalen der Physik* that would later be published in early 1936. Their goal was modest: to describe an elementary particle without invoking the troublesome point‑like singularities that plagued earlier solutions of general relativity. To achieve this they proposed a new geometric construction, now famously called the <span class="vocab" data-cn="爱因斯坦-罗森桥">Einstein–Rosen bridge</span>, which linked two separate sheets of <span class="vocab" data-cn="时空">spacetime</span> together at a narrow throat.`,
    `The mathematics behind the bridge relied on the Schwarzschild solution, but Einstein and Rosen performed a clever coordinate transformation that removed the apparent singularity at the so‑called “Schwarzschild radius.” In their new description the metric – the function that tells how distances are measured in curved spacetime – remained finite everywhere. The throat of the bridge acted like a tunnel connecting two asymptotically flat regions, and they imagined an electron could be modeled as such a structure, with its charge emerging from the geometry itself.`,
    `Although the original paper was brief and technical, it sparked immediate curiosity among relativists. A key obstacle, however, was that the Einstein–Rosen bridge is not traversable: any object attempting to pass through would encounter an <span class="vocab" data-cn="事件视界">event horizon</span> that inevitably collapses back into a <span class="vocab" data-cn="奇点">singularity</span>. This limitation was later clarified by John Archibald Wheeler in the 1950s, who coined the term “wormhole” to evoke the image of a tunnel through a fabric. Wheeler’s work on quantum gravity introduced the idea that spacetime at the Planck scale might be frothy – a <span class="vocab" data-cn="量子泡沫">quantum foam</span> where tiny wormholes constantly pop in and out of existence.`,
    `The 1960s saw a resurgence of interest when Charles Misner and Kip Thorne, together with Wheeler, published the influential textbook *Gravitation*. They formalized the concept of a “traversable” wormhole by relaxing some energy conditions. In particular, they showed that to keep a throat open one would need “exotic matter” possessing negative energy density – something not observed in ordinary physics but permissible within quantum field theory under certain circumstances (e.g., the Casimir effect). This theoretical possibility opened a new line of speculative research, linking wormholes to ideas such as faster‑than‑light travel and time machines.`,
    `Meanwhile, astrophysicists began asking whether natural wormholes could exist in our universe. Observational signatures – like unusual lensing patterns or sudden changes in the trajectories of stars – were proposed, but no convincing evidence has emerged. The difficulty lies partly in the fact that any macroscopic wormhole would likely be unstable: perturbations tend to cause the throat to pinch off, reverting the geometry back to a black hole. Nevertheless, the mathematical framework remains valuable for probing the limits of general relativity and testing alternative theories of gravity.`,
    `In recent decades, the bridge concept has found unexpected allies in string theory and holography. The AdS/CFT correspondence, formulated by Juan Maldacena in 1997, suggests that certain wormhole geometries in a higher‑dimensional “bulk” spacetime correspond to entangled quantum states on a lower‑dimensional boundary. This insight led to the provocative slogan “ER = EPR,” proposed by Leonard Susskind and Juan Maldacena in 2013, positing that Einstein–Rosen bridges (ER) are fundamentally linked to Einstein‑Podolsky‑Rosen (EPR) quantum entanglement. While still a conjecture, this idea illustrates how the humble 1936 paper continues to inspire cross‑disciplinary dialogue.`,
    `Today, the Einstein–Rosen bridge stands as both a historical milestone and a living research frontier. It reminds us that daring mathematical imagination can seed entire fields of inquiry, even when the original physical interpretation proves untenable. As physicists push toward a quantum theory of gravity, the bridge – whether traversable or not – remains a powerful metaphor for connections yet to be discovered between the geometry of spacetime and the quantum world.`
  ],
  vocabulary: [
    { word: 'Einstein–Rosen bridge', cn: '爱因斯坦-罗森桥' },
    { word: 'spacetime', cn: '时空' },
    { word: 'event horizon', cn: '事件视界' },
    { word: 'singularity', cn: '奇点' },
    { word: 'quantum foam', cn: '量子泡沫' },
    { word: 'exotic matter', cn: '奇异物质' }
  ],
};

export default article;
