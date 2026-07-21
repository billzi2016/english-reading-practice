import type { Article } from '../../types/index.ts';

// 文件意图：维护《Viking’s Mars Mission: How the 1976 Landers Searched for Life on the Red Planet》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00074 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00074',
  slug: 'viking-s-mars-mission-how-the-1976-landers-searched-for-life-on-the-red-planet',
  title: 'Viking’s Mars Mission: How the 1976 Landers Searched for Life on the Red Planet',
  subtitle: 'A Journey into the First Direct Search for Martian Biology',
  summary: 'Explore how NASA’s Viking landers used chemistry, imaging, and clever engineering to look for signs of life on Mars in 1976.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the twin spacecraft lifted off from Cape Canaveral in August 1975, NASA’s public was buzzing with the promise of a true “first step” toward answering humanity’s oldest question: are we alone? The mission, later christened <span class="vocab" data-cn="维京号">Viking</span>, consisted of an orbiter and two identical <span class="vocab" data-cn="着陆器">landers</span> that would touch down on the Martian surface in July 1976. Unlike earlier fly‑by probes, Viking was designed to stay, sample, and analyze the soil directly, turning Mars from a distant dot into a laboratory.</p>`,
    `The landers carried a suite of instruments that read like a miniature chemistry lab. The most famous was the <span class="vocab" data-cn="气相色谱-质谱仪">gas chromatograph–mass spectrometer (GC‑MS)</span>, which could heat a soil sample, vaporize any organic molecules, and then separate them by mass to reveal their structure. Complementing it was the <span class="vocab" data-cn="光谱仪">infrared spectrometer</span>, tuned to detect specific vibrational signatures of carbon‑bearing compounds. Together they formed a powerful “chemical detective” capable of spotting even trace amounts of potential biosignatures.</p>`,
    `But chemistry alone could not tell the whole story. The Viking team also deployed a set of biological experiments that mimicked classic Earth microbiology tests. One was the <span class="vocab" data-cn="气体交换实验">Gas Exchange experiment</span>, which measured changes in oxygen and carbon dioxide levels after adding a nutrient broth to Martian soil. If microbes were present, they would metabolize the nutrients, altering the gas composition. Another, the <span class="vocab" data-cn="光合作用实验">Labeled Release experiment</span>, introduced radio‑labeled nutrients and looked for radioactive gases as evidence of metabolic activity.</p>`,
    `To guard against false positives, Viking also carried a control system: each experiment had a “heat‑sterilized” counterpart. By heating the soil to 160 °C before testing, any living organisms would be destroyed, leaving only abiotic chemistry. If the sterilized sample produced the same signal as the untreated one, scientists could conclude that the result was chemical rather than biological. This clever redundancy reflected a deep awareness of Mars’ harsh environment and the difficulty of interpreting ambiguous data.</p>`,
    `Imaging played an equally crucial role. The landers were equipped with a high‑resolution <span class="vocab" data-cn="相机">camera</span> system that captured panoramic views of the landing sites, revealing basaltic rocks, dust devils, and even possible ripple patterns formed by wind. These visual clues helped scientists assess whether liquid water might have existed in the recent past—a key prerequisite for life as we know it. The images also guided where to place the soil scoops, ensuring that samples came from diverse geological contexts.</p>`,
    `When the data finally streamed back to Earth, the results were both exciting and puzzling. The GC‑MS detected only trace amounts of carbon compounds, far below levels expected if abundant organic matter existed. The Gas Exchange and Labeled Release experiments produced signals that some interpreted as metabolic activity, yet the sterilized controls showed similar responses, suggesting non‑biological chemical reactions—perhaps involving perchlorates later discovered by the Phoenix lander. In the end, Viking’s findings were inconclusive regarding life, but they set a rigorous scientific standard for future missions.</p>`,
    `Decades later, the legacy of Viking lives on in every Mars rover and orbiter that follows. Modern instruments like the Sample Analysis at Mars (SAM) suite on Curiosity directly build upon Viking’s GC‑MS design, while the Perseverance rover even carries a small helicopter to scout new sampling sites. The lesson learned—that extraordinary claims require extraordinary evidence—continues to shape how we search for <span class="vocab" data-cn="生物标志">biosignatures</span> on other worlds. Viking proved that a careful blend of chemistry, biology, and engineering could turn a distant planet into a place where the question “Are we alone?” can be answered with data, not just imagination.</p>`
  ],
  vocabulary: [
    { word: 'Viking', cn: '维京号' },
    { word: 'lander', cn: '着陆器' },
    { word: 'gas chromatograph–mass spectrometer (GC‑MS)', cn: '气相色谱-质谱仪' },
    { word: 'infrared spectrometer', cn: '红外光谱仪' },
    { word: 'Gas Exchange experiment', cn: '气体交换实验' },
    { word: 'Labeled Release experiment', cn: '标记释放实验' },
    { word: 'camera', cn: '相机' },
    { word: 'biosignature', cn: '生物标志' }
  ],
};

export default article;
