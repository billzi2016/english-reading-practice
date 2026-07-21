import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Race to Build the First Nuclear Reactor: Enrico Fermi and Chicago Pile‑1》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00063 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00063',
  slug: 'the-race-to-build-the-first-nuclear-reactor-enrico-fermi-and-chicago-pile-1',
  title: 'The Race to Build the First Nuclear Reactor: Enrico Fermi and Chicago Pile‑1',
  subtitle: 'How a modest stack of uranium and graphite sparked the atomic age',
  summary: 'A narrative of the scientific daring that produced the world’s first controlled nuclear chain reaction in 1942.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1942, a secret team of physicists gathered beneath the abandoned football stadium at the University of Chicago. Their mission was not to design a new weapon but to prove that a self‑sustaining <span class="vocab" data-cn="核裂变">nuclear fission</span> process could be controlled safely. The United States had just launched the Manhattan Project, and while most eyes were on massive bomb designs, a quieter race was unfolding: the quest for a functional reactor that could generate steady energy for research and, eventually, power plants.`,
    `Leading this effort was <span class="vocab" data-cn="恩里科·费米">Enrico Fermi</span>, an Italian physicist who had already earned a Nobel Prize for his work on neutron bombardment. After fleeing fascist Italy in 1938, Fermi joined the fledgling American scientific community and quickly became the go‑to expert on how neutrons behaved inside heavy elements. His intuition that a carefully arranged lattice of uranium could achieve a <span class="vocab" data-cn="临界质量">critical mass</span>—the minimum amount of fissile material needed for a chain reaction—guided every design decision in Chicago.`,
    `The core challenge was to slow down the fast neutrons released by fission so they would more readily cause further splits. To do this, Fermi chose a <span class="vocab" data-cn="石墨减速剂">graphite moderator</span>, a block of pure carbon that could thermalize neutrons without capturing them. He also surrounded the uranium‑graphite stack with a layer of beryllium and later cadmium, acting as a <span class="vocab" data-cn="中子反射体">neutron reflector</span> to bounce stray neutrons back into the core, thereby reducing the amount of uranium needed.`,
    `Construction began in earnest in September 1942. The team built a pyramid‑shaped pile—later nicknamed “Chicago Pile‑1” (CP‑1)—by stacking alternating layers of uranium oxide bricks and graphite blocks inside an old squash court beneath Stagg Field. Each layer was meticulously measured, and dozens of Geiger counters were positioned around the assembly to monitor radiation levels. Safety was paramount; a large wooden control rod could be dropped into the core at any moment to absorb neutrons and halt the reaction, providing a manual “kill switch.”`,
    `On December 2, 1942, after weeks of careful calibration, Fermi and his colleagues initiated the first controlled <span class="vocab" data-cn="链式反应">chain reaction</span>. With a quiet turn of a knob, they withdrew the control rod incrementally while observers watched neutron counters climb. When the readings stabilized at a steady rate, the room erupted in subdued applause—the moment proved that humanity could harness atomic energy on demand. Fermi famously remarked, “It’s alive!” as he recorded the data, marking a historic milestone in physics.`,
    `The success of CP‑1 convinced military leaders that reactors could be built on an industrial scale. Within months, larger piles were erected at Hanford and Oak Ridge, producing plutonium for weapons while also laying groundwork for peaceful power generation. The Chicago experiment demonstrated key principles—moderation, reflection, and precise control—that still underpin modern nuclear engineering. It also highlighted the importance of rigorous safety protocols, a lesson that continues to shape reactor design today.`,
    `Decades later, the legacy of Enrico Fermi’s modest stack lives on in every commercial nuclear plant worldwide. The same concepts of <span class="vocab" data-cn="β 衰变">beta decay</span> monitoring, radiation shielding, and neutron economy trace their lineage back to that cold December night in Chicago. While the atomic age has sparked both awe and controversy, the story of CP‑1 remains a testament to scientific curiosity, international collaboration, and the daring resolve to turn theory into reality.`,
  ],
  vocabulary: [
    { word: 'nuclear fission', cn: '核裂变' },
    { word: 'Enrico Fermi', cn: '恩里科·费米' },
    { word: 'critical mass', cn: '临界质量' },
    { word: 'graphite moderator', cn: '石墨减速剂' },
    { word: 'neutron reflector', cn: '中子反射体' },
    { word: 'chain reaction', cn: '链式反应' },
    { word: 'beta decay', cn: 'β 衰变' },
  ],
};

export default article;
