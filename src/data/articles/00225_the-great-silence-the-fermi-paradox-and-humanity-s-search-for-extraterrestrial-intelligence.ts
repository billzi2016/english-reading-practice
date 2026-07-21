import type { Article } from '../../types/index.ts';

const article: Article = {
  id: '00225',
  slug: 'the-great-silence-the-fermi-paradox-and-humanity-s-search-for-extraterrestrial-intelligence',
  title: 'The Great Silence: The Fermi Paradox and Humanity\'s Search for Extraterrestrial Intelligence',
  subtitle: 'Why the cosmos seems empty despite billions of stars',
  summary: 'Exploring the paradox of a silent universe and humanity’s quest to find alien signals.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `On a clear night far from city lights, the Milky Way stretches across the sky like a faint river of stars. Yet despite this dazzling display, an unsettling quiet pervades—no radio chatter, no flashing beacons, nothing that unmistakably signals another mind watching the same cosmos. This puzzling emptiness has been christened the <span class="vocab" data-cn="大沉默">Great Silence</span>, a term that captures both scientific curiosity and existential unease.`,
    `The silence became a formal question in the mid‑20th century when physicist Enrico <span class="vocab" data-cn="费米">Fermi</span> asked his lunch companions, “If there are billions of stars like our Sun, where is everybody?” This simple query gave rise to what we now call the <span class="vocab" data-cn="费米悖论">Fermi Paradox</span>. It juxtaposes the high probability of extraterrestrial life—derived from astronomical observations—with the stark lack of any detectable evidence.`,
    `To move beyond speculation, astronomers in 1961 introduced the <span class="vocab" data-cn="德雷克方程式">Drake Equation</span>, a framework that multiplies factors such as the rate of star formation, the fraction of stars with planets, and the proportion of those worlds residing in the <span class="vocab" data-cn="宜居带">habitable zone</span>. The equation also considers how long a civilization might emit a detectable <span class="vocab" data-cn="技术特征信号">technosignature</span>—a signal or artifact that betrays its technological nature. Though each term is uncertain, the formula underscores that even modest values could yield thousands of communicative societies.`,
    `Armed with this insight, humanity launched systematic searches under the banner of <span class="vocab" data-cn="搜寻地外文明计划">SETI</span> (Search for Extraterrestrial Intelligence). Early efforts scanned the sky for narrow‑band radio pulses, while later projects added optical lasers and infrared signatures to their repertoire. Simultaneously, missions like Kepler and TESS revealed thousands of <span class="vocab" data-cn="系外行星">exoplanet</span>s, some Earth‑sized and orbiting within their star’s habitable zone. The next frontier is detecting <span class="vocab" data-cn="生物标志">biosignatures</span>—chemical imprints such as oxygen or methane in an atmosphere that hint at life.`,
    `One compelling explanation for the Great Silence is the hypothesis of a <span class="vocab" data-cn="大过滤器">Great Filter</span>. This concept posits that there exists a stage in planetary or societal evolution—perhaps the emergence of complex multicellular organisms, the transition to a sustainable energy economy, or the avoidance of self‑destruction—that is exceedingly unlikely to be passed. If the filter lies behind us, we may be among the rare survivors; if it lies ahead, our own future could be precariously short.`,
    `Recent decades have seen an unprecedented surge in observational power. The <span class="vocab" data-cn="突破聆听计划">Breakthrough Listen</span> initiative, launched in 2015, dedicates thousands of hours on world‑class radio dishes to scan nearby stars for artificial signals. In 2016, the discovery of Proxima Centauri b—a planet only 4.2 light‑years away—sparked excitement about a potentially habitable neighbor. The launch of the <span class="vocab" data-cn="詹姆斯·韦伯太空望远镜">James Webb Space Telescope</span> in late 2021 opened the possibility of analyzing exoplanet atmospheres for both biosignatures and technosignatures, bringing us closer than ever to answering Fermi’s question.`,
    `Whether we eventually hear a faint whisper from another world or confirm that we are truly alone, the quest reshapes our self‑understanding. The Great Silence forces us to confront not only astrophysical mysteries but also ethical and philosophical dilemmas about how we might communicate, what responsibilities accompany contact, and what it means to be a civilization capable of looking up and asking, “Are we alone?”`,
  ],
  vocabulary: [
    { word: 'Fermi Paradox', cn: '费米悖论' },
    { word: 'Drake Equation', cn: '德雷克方程式' },
    { word: 'habitable zone', cn: '宜居带' },
    { word: 'technosignature', cn: '技术特征信号' },
    { word: 'SETI', cn: '搜寻地外文明计划' },
    { word: 'biosignature', cn: '生物标志' },
    { word: 'Great Filter', cn: '大过滤器' },
    { word: 'exoplanet', cn: '系外行星' },
    { word: 'Breakthrough Listen', cn: '突破聆听计划' },
    { word: 'James Webb Space Telescope', cn: '詹姆斯·韦伯太空望远镜' },
  ],
};

export default article;
