import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1978 Discovery of the First Quasar: How Radio Astronomy Opened a New Window onto the Distant Universe》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00274 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00274',
  slug: 'the-1978-discovery-of-the-first-quasar-how-radio-astronomy-opened-a-new-window-onto-the-distant-universe',
  title: 'The 1978 Discovery of the First Quasar: How Radio Astronomy Opened a New Window onto the Distant Universe',
  subtitle: 'A Milestone in Cosmic Exploration Through Radio Waves',
  summary: 'In 1978 astronomers identified a quasar at an unprecedented distance, demonstrating how radio astronomy can reveal the farthest corners of the universe.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When the first quasars were recognized in the early 1960s, they shocked astronomers with their extraordinary brightness and mysterious spectra. The term <span class="vocab" data-cn="类星体">quasar</span>—short for “quasi‑stellar radio source”—was coined because these objects appeared point‑like like stars in optical photographs but emitted powerful radio waves. Early observations relied on the newly built <span class="vocab" data-cn="射电天文学">radio astronomy</span> facilities, which could detect faint signals from beyond our galaxy and hint at phenomena invisible to ordinary telescopes.`,
    `By the mid‑1970s, improvements in antenna design and signal processing allowed astronomers to map the sky with far greater resolution. The technique of very long baseline interferometry (<span class="vocab" data-cn="甚长基线干涉仪">VLBI</span>) combined signals from dishes thousands of kilometers apart, effectively creating a telescope the size of Earth. This leap in angular precision made it possible to pinpoint radio sources with sub‑arcsecond accuracy and match them to faint optical counterparts on photographic plates.`,
    `In 1978, a team led by Dr. Margaret Geller at the Harvard–Smithsonian Center for Astrophysics reported a breakthrough: they had identified a radio source whose optical spectrum showed an extreme <span class="vocab" data-cn="红移">redshift</span> of z = 3.5. At that time, this was the most distant quasar known, implying that its light had traveled for more than twelve billion years before reaching Earth. The discovery demonstrated that quasars were not merely nearby curiosities but beacons from the early universe, shining when galaxies were still forming.`,
    `The key to measuring such a high redshift lay in detecting specific <span class="vocab" data-cn="光谱线">spectral lines</span>—most notably the Lyman‑α line of hydrogen—shifted far into the ultraviolet and then into the visible range by cosmic expansion. By comparing the observed wavelength (λ_observed) to the laboratory wavelength (λ_rest), astronomers used the formula z = (λ_observed − λ_rest)/λ_rest to calculate how much the universe had stretched since the light left its source. This method turned quasars into precise cosmological yardsticks.`,
    `The 1978 quasar also challenged theories about <span class="vocab" data-cn="光度">luminosity</span>. Its apparent brightness, despite being billions of light‑years away, meant it emitted energy equivalent to thousands of entire galaxies combined. Such prodigious output could only be explained by matter spiraling into a supermassive black hole at the galaxy’s core, releasing gravitational energy as radiation—a model that has become the standard explanation for quasar activity today.`,
    `Beyond its scientific impact, the discovery sparked a cultural shift in how astronomers approached the distant universe. Radio surveys like the 3CR catalog were re‑examined with fresh eyes, and new facilities such as the Very Large Array (VLA) were commissioned to conduct deeper, wider searches. The success of the 1978 finding proved that radio observations could open a “new window” onto epochs otherwise inaccessible, paving the way for later breakthroughs like the detection of the cosmic microwave background anisotropies and high‑redshift galaxy surveys.`,
    `Today, modern instruments—most notably the Atacama Large Millimeter/submillimeter Array (ALMA) and space‑based observatories like the James Webb Space Telescope—continue to build on that legacy. They probe even fainter quasars at redshifts beyond 7, when the universe was less than a billion years old. Yet the fundamental lesson remains: by listening to the cosmos in radio frequencies, we can uncover its deepest secrets, just as the 1978 discovery taught us over four decades ago.`,
    `In summary, the 1978 identification of an ultra‑distant <span class="vocab" data-cn="类星体">quasar</span> illustrated how advances in <span class="vocab" data-cn="射电天文学">radio astronomy</span>, precise interferometric techniques, and careful spectral analysis can together expand our view of the universe. Each new quasar discovered since then acts as a lighthouse from the past, guiding astronomers toward a more complete picture of cosmic evolution.`,
  ],
  vocabulary: [
    { word: 'quasar', cn: '类星体' },
    { word: 'radio astronomy', cn: '射电天文学' },
    { word: 'redshift', cn: '红移' },
    { word: 'VLBI', cn: '甚长基线干涉仪' },
    { word: 'spectral line', cn: '光谱线' },
    { word: 'luminosity', cn: '光度' },
  ],
};

export default article;
