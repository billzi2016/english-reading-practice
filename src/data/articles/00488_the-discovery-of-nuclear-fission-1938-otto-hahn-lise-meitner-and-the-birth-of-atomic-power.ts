import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of Nuclear Fission (1938): Otto Hahn, Lise Meitner, and the Birth of Atomic Power》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00488 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00488',
  slug: 'the-discovery-of-nuclear-fission-1938-otto-hahn-lise-meitner-and-the-birth-of-atomic-power',
  title: 'The Discovery of Nuclear Fission (1938): Otto Hahn, Lise Meitner, and the Birth of Atomic Power',
  subtitle: 'How a German chemistry lab uncovered the secret that would reshape energy and warfare.',
  summary: 'A narrative of the experiments, the scientists, and the scientific concepts behind the discovery of nuclear fission in 1938.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1930s, the field of <span class="vocab" data-cn="放射性">radioactivity</span> was still fresh from the discoveries of Marie Curie and Ernest Rutherford. Young physicists across Europe were eager to probe the nucleus with newly available particles such as neutrons, which had been identified by James Chadwick only a few years earlier. In Berlin, chemist <span class="vocab" data-cn="奥托·哈恩">Otto Hahn</span> and his assistant Fritz Strassmann set up a modest laboratory equipped with glassware, Geiger counters, and a cyclotron borrowed from the university’s physics department.`,
    `Their goal was simple yet ambitious: to bombard heavy elements like uranium with slow neutrons and observe any resulting <span class="vocab" data-cn="同位素">isotopic</span> changes. Uranium‑235, though not yet isolated as a distinct isotope at that time, was known to capture neutrons more readily than its sibling uranium‑238. Hahn’s team carefully measured the chemical composition of the reaction products, expecting to find lighter elements such as radium or thorium, which would indicate a gradual transmutation rather than a dramatic split.`,
    `In December 1938, Strassmann reported an unexpected result: after neutron bombardment, the chemical analysis revealed the presence of barium, an element far lighter than uranium. This baffling observation could not be explained by any known nuclear reaction. Hahn consulted his longtime collaborator, physicist <span class="vocab" data-cn="莉泽·迈特纳">Lise Meitner</span>, who had fled Nazi‑occupied Austria and was working in Sweden. Together with her nephew Otto Frisch, they interpreted the data as a sudden division of the uranium nucleus into two roughly equal fragments—a process they called <span class="vocab" data-cn="核裂变">nuclear fission</span>.`,
    `Meitner and Frisch published a short note in the journal Nature, introducing the term “fission” by analogy to biological cell division. They also provided a theoretical estimate of the energy released using Einstein’s famous equation <span class="vocab" data-cn="E=mc²">E = mc²</span>, showing that splitting a single uranium atom would liberate millions of electron‑volts, far exceeding any chemical reaction. This insight explained why Hahn and Strassmann had detected such large quantities of barium: the fission fragments carried away most of the original nucleus’s mass as kinetic energy.`,
    `The discovery sparked immediate interest among physicists worldwide. In the United States, Enrico Fermi’s group at Columbia University began experimenting with neutron‑induced reactions in uranium, while in Britain, the MAUD Committee evaluated the feasibility of a self‑sustaining <span class="vocab" data-cn="链式反应">chain reaction</span>. The concept of a critical mass—a minimum amount of fissile material needed to maintain an exponential series of neutron emissions—became a central engineering challenge. By 1942, these ideas coalesced into the Manhattan Project, which ultimately produced the first atomic bombs.`,
    `Beyond weaponry, the same principle underlies modern nuclear power plants. In a controlled environment, fission of uranium‑235 or plutonium‑239 heats water to generate steam, driving turbines that produce electricity. The term “reactor” now evokes both the promise of low‑carbon energy and the lingering concerns about radioactive waste and safety. The legacy of Hahn, Meitner, and Strassmann thus lives on in a technology that powers cities while reminding us of the profound responsibility that accompanies scientific breakthroughs.`,
    `Today, historians emphasize not only the scientific brilliance but also the human drama surrounding the discovery. Lise Meitner, denied the Nobel Prize awarded to Otto Hahn in 1944, later received numerous honors for her role, highlighting the gender and political biases of the era. The story serves as a reminder that science progresses through collaboration across borders, even when those borders are threatened by war or ideology. As we look toward next‑generation reactors and fusion research, the lessons from 1938 continue to shape how we balance curiosity, ethics, and societal impact.`
  ],
  vocabulary: [
    { word: 'radioactivity', cn: '放射性' },
    { word: 'Otto Hahn', cn: '奥托·哈恩' },
    { word: 'Lise Meitner', cn: '莉泽·迈特纳' },
    { word: 'nuclear fission', cn: '核裂变' },
    { word: 'isotope', cn: '同位素' },
    { word: 'chain reaction', cn: '链式反应' }
  ],
};

export default article;
