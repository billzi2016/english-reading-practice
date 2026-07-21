import type { Article } from '../../types/index.ts';

// 文件意图：维护《Ghost Particles from the Big Bang: The Hunt for the Cosmic Neutrino Background》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00178 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00178',
  slug: 'ghost-particles-from-the-big-bang-the-hunt-for-the-cosmic-neutrino-background',
  title: 'Ghost Particles from the Big Bang: The Hunt for the Cosmic Neutrino Background',
  subtitle: 'Why the faint whisper of relic neutrinos could reshape cosmology.',
  summary: 'An engaging story about the quest to detect the ancient sea of neutrinos left over from the birth of the universe.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When you hear the word “ghost,” you might picture a translucent figure drifting through walls. In particle physics, however, ghosts are very real—though invisible to ordinary eyes. The <span class="vocab" data-cn="中微子">neutrino</span> is famously elusive because it interacts only via the <span class="vocab" data-cn="弱相互作用">weak interaction</span>. Yet every second, trillions of these particles pass through your body unnoticed. According to the standard cosmological model, a sea of such “ghost particles” was forged just seconds after the Big Bang and has been expanding with the universe ever since. This relic sea is called the <span class="vocab" data-cn="宇宙中微子背景">cosmic neutrino background</span> (CNB).`,
    `To understand why the CNB exists, we must travel back to a time when the universe was less than a second old and its temperature exceeded billions of kelvin. At that epoch, neutrinos were in thermal equilibrium with photons, electrons, and other particles. As the cosmos expanded and cooled, the interaction rate fell below the Hubble expansion rate—a moment physicists call <span class="vocab" data-cn="脱耦">decoupling</span>. Roughly one second after the Big Bang, neutrinos “froze out,” streaming freely through space while retaining a thermal distribution that today corresponds to an average energy of only about 10⁻⁴ electronvolts.`,
    `The discovery of the <span class="vocab" data-cn="宇宙微波背景">cosmic microwave background</span> (CMB) in 1965 provided spectacular confirmation of the hot‑big‑bang picture, because photons decoupled later—about 380,000 years after the explosion—and their relic radiation is still observable as a nearly uniform glow at 2.7 K. Detecting the CNB is far more challenging: neutrinos interact orders of magnitude less frequently than photons, and their present‑day kinetic energy is minuscule compared to any detector threshold used in conventional experiments. In practice, this means that even the most sensitive underground laboratories have never directly “seen” a relic neutrino.`,
    `Nevertheless, clever physicists have devised indirect strategies that could finally capture these ancient particles. One promising method relies on <span class="vocab" data-cn="β衰变">beta decay</span> of tritium (<span class="vocab" data-cn="氚">tritium</span>) nuclei. In ordinary beta decay, a tritium atom transforms into helium‑3 while emitting an electron and an antineutrino. If a relic neutrino were to be captured instead, the process would produce only an electron with a slightly higher kinetic energy—by exactly twice the neutrino mass. The proposed PTOLEMY experiment plans to use a massive array of ultra‑pure tritium targets combined with a <span class="vocab" data-cn="低温探测器">cryogenic detector</span> capable of resolving energy differences at the sub‑electronvolt level, thereby distinguishing capture events from ordinary decay.`,
    `Achieving such exquisite resolution is no small feat. Thermal noise must be suppressed to millikelvin temperatures, and background radiation from cosmic rays or radioactive contaminants must be reduced by many orders of magnitude. Moreover, theoretical calculations suggest that gravitational clustering could increase the local density of relic neutrinos by up to a factor of two, modestly boosting the expected capture rate. Even with these enhancements, the predicted signal is only a few events per year per kilogram of tritium—hence the need for both massive target mass and ultra‑clean environments.`,
    `While PTOLEMY remains under construction, other experiments have already placed indirect constraints on the CNB. Observations of the CMB anisotropies by the Planck satellite limit the effective number of relativistic species, indirectly confirming that neutrinos were present in the early universe. Laboratory efforts such as KATRIN aim to measure the <span class="vocab" data-cn="绝对中微子质量尺度">absolute neutrino mass scale</span> through precision spectroscopy of tritium beta decay, a key ingredient for predicting the CNB capture rate. Together, these complementary approaches tighten the window in which the relic neutrinos must reside.`,
    `Why does detecting the CNB matter beyond satisfying curiosity? First, it would provide a direct probe of the universe at an epoch inaccessible to any other messenger, offering a test of Big Bang nucleosynthesis and the physics of the first second. Second, measuring the exact shape of the relic neutrino spectrum could reveal whether neutrinos are Majorana or Dirac particles—a question that touches on the very nature of matter itself. Finally, confirming the CNB would cement our confidence in the standard cosmological model, linking the macroscopic expansion of space to microscopic quantum processes.`,
    `The hunt for ghost particles continues to push the boundaries of experimental ingenuity and theoretical imagination. As detectors become colder, cleaner, and larger, the faint whisper of relic neutrinos may finally rise above the cosmic static. When that moment arrives, it will not only vindicate a prediction made over half a century ago but also open an unprecedented window onto the universe’s earliest heartbeat.`
  ],
  vocabulary: [
    { word: 'neutrino', cn: '中微子' },
    { word: 'weak interaction', cn: '弱相互作用' },
    { word: 'cosmic neutrino background', cn: '宇宙中微子背景' },
    { word: 'decoupling', cn: '脱耦' },
    { word: 'cosmic microwave background', cn: '宇宙微波背景' },
    { word: 'beta decay', cn: 'β衰变' },
    { word: 'tritium', cn: '氚' },
    { word: 'cryogenic detector', cn: '低温探测器' },
    { word: 'absolute neutrino mass scale', cn: '绝对中微子质量尺度' }
  ],
};

export default article;
