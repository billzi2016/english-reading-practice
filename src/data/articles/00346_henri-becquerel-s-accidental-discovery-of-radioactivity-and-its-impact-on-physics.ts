import type { Article } from '../../types/index.ts';

// 文件意图：维护《Henri Becquerel’s Accidental Discovery of Radioactivity and Its Impact on Physics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00346 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00346',
  slug: 'henri-becquerel-s-accidental-discovery-of-radioactivity-and-its-impact-on-physics',
  title: 'Henri Becquerel’s Accidental Discovery of Radioactivity and Its Impact on Physics',
  subtitle: 'How a chance experiment opened the door to nuclear science',
  summary: 'A narrative of Henri Becquerel’s serendipitous finding in 1896 and its far‑reaching consequences for modern physics.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1896, French physicist <span class="vocab" data-cn="亨利·贝克勒尔">Henri Becquerel</span> was trying to verify a claim that certain salts emitted invisible rays after being exposed to sunlight—a phenomenon known as <span class="vocab" data-cn="磷光，指物质吸收光后缓慢发光的过程">phosphorescence</span>. He placed several pieces of uranium nitrate on top of photographic plates wrapped in black paper, expecting that only the light‑induced phosphorescent glow would affect the emulsion. The experiment seemed ordinary until a sudden cloud cover forced him to postpone exposure.</`,
    `When Becquerel returned days later, he discovered that the plates were darkened even though they had been kept in complete darkness. The cause was not phosphorescence at all but an unknown form of energy emitted by the uranium salts themselves. This mysterious emission was later named <span class="vocab" data-cn="放射性，指不稳定原子核自发释放能量的过程">radioactivity</span>, marking the first time humanity recognized that matter could spontaneously emit penetrating radiation without any external trigger.</`,
    `Becquerel’s finding sparked intense curiosity among his contemporaries. The most notable were <span class="vocab" data-cn="居里夫妇，指玛丽·居里和皮埃尔·居里，两位在放射性研究方面的先驱">Marie and Pierre Curie</span>, who isolated new radioactive elements—polonium and radium—from pitchblende. Their work revealed that radioactivity was a property of the atom itself, leading to the concept of <span class="vocab" data-cn="原子核衰变，指不稳定原子核自发转变为更稳定状态的过程">radioactive decay</span> and introducing the idea of a characteristic <span class="vocab" data-cn="半衰期，指放射性物质数量减半所需的时间">half‑life</span>.</`,
    `The discovery forced physicists to rethink the prevailing model of an indivisible atom. Ernest Rutherford’s gold foil experiment in 1909, building on Becquerel’s and the Curies’ work, demonstrated that atoms possess a dense central nucleus. This insight laid the groundwork for <span class="vocab" data-cn="核物理，研究原子核及其相互作用的学科">nuclear physics</span>, eventually leading to the development of particle accelerators, nuclear reactors, and even atomic weapons—technologies that reshaped the 20th century.</`,
    `Beyond fundamental science, radioactivity found immediate practical applications. <span class="vocab" data-cn="X射线，指一种高能电磁辐射，可用于医学成像">X‑ray</span> imaging, discovered by Wilhelm Röntgen a few years earlier, was complemented by the use of radioactive isotopes for tracing chemical pathways and diagnosing diseases. In medicine, <span class="vocab" data-cn="放射性同位素，指具有放射性的原子核，可用于治疗和诊断">radioisotopes</span> such as iodine‑131 became essential tools for both therapy and imaging.</`,
    `However, the power of invisible radiation also revealed new hazards. Early researchers suffered burns and illnesses from prolonged exposure, prompting the establishment of safety protocols and the field of <span class="vocab" data-cn="辐射防护，研究如何保护人类免受有害辐射的学科">radiation protection</span>. These measures have become integral to laboratories, hospitals, and nuclear facilities worldwide, ensuring that the benefits of radioactivity can be harnessed responsibly.</`,
    `Today, the legacy of Becquerel’s accidental experiment endures in every corner of modern physics. From probing the interiors of stars with neutrino detectors to powering spacecraft with radioisotope thermoelectric generators, the phenomenon he uncovered continues to illuminate both the microcosm of subatomic particles and the macrocosm of cosmic processes. His story reminds us that curiosity, even when sparked by chance, can rewrite our understanding of nature.</`,
  ],
  vocabulary: [
    { word: 'Henri Becquerel', cn: '亨利·贝克勒尔' },
    { word: 'phosphorescence', cn: '磷光，指物质吸收光后缓慢发光的过程' },
    { word: 'radioactivity', cn: '放射性，指不稳定原子核自发释放能量的过程' },
    { word: 'Marie and Pierre Curie', cn: '居里夫妇，指玛丽·居里和皮埃尔·居里，两位在放射性研究方面的先驱' },
    { word: 'radioactive decay', cn: '原子核衰变，指不稳定原子核自发转变为更稳定状态的过程' },
    { word: 'half‑life', cn: '半衰期，指放射性物质数量减半所需的时间' },
    { word: 'nuclear physics', cn: '核物理，研究原子核及其相互作用的学科' },
    { word: 'X‑ray', cn: 'X射线，指一种高能电磁辐射，可用于医学成像' },
    { word: 'radioisotopes', cn: '放射性同位素，指具有放射性的原子核，可用于治疗和诊断' },
    { word: 'radiation protection', cn: '辐射防护，研究如何保护人类免受有害辐射的学科' },
  ],
};

export default article;
