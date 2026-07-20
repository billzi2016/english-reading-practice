import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of Penicillin: Alexander Fleming's Serendipitous Breakthrough》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00012 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00012',
  slug: 'the-discovery-of-penicillin-alexander-fleming-s-serendipitous-breakthrough',
  title: 'The Discovery of Penicillin: Alexander Fleming\'s Serendipitous Breakthrough',
  subtitle: 'A Chance Observation That Revolutionized Medicine',
  summary: 'Alexander Fleming’s accidental observation of a mold killing bacteria led to the birth of the first true antibiotic, penicillin.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1920s, laboratories across Europe were buzzing with experiments aimed at understanding infectious diseases. Alexander Fleming, a Scottish bacteriologist working at St. Mary’s Hospital in London, was no exception. He spent countless hours culturing bacteria on agar plates to test the efficacy of various antiseptics. It was during one of these routine sessions that a remarkable instance of <span class="vocab" data-cn="机缘巧合">serendipity</span> occurred, setting the stage for a medical revolution.`,
    `One rainy afternoon, Fleming returned from vacation to find that several of his Staphylococcus aureus cultures had been inadvertently contaminated by a stray piece of mold. Rather than discarding the plates, he examined them under a microscope and noticed a clear zone surrounding the fungal growth where the bacteria had vanished. This striking contrast suggested that the <span class="vocab" data-cn="霉菌">mold</span> was producing something capable of destroying the <span class="vocab" data-cn="细菌">bacterium</span>. Fleming hypothesized that this substance might be a natural <span class="vocab" data-cn="抗生素">antibiotic</span>, a term later coined to describe agents that inhibit microbial growth.`,
    `Determined to identify the source, Fleming isolated the mold and sent samples to the Royal Society for classification. The experts identified it as <span class="vocab" data-cn="青霉属">Penicillium</span> notatum, a common environmental fungus. Fascinated by its antibacterial properties, he named the active compound “penicillin.” Although penicillin was initially present in only minute quantities, Fleming’s insight that a harmless mold could yield a potent antimicrobial agent challenged prevailing assumptions about microbial interactions.`,
    `Fleming’s next challenge was to extract and concentrate penicillin enough for experimental use. He embarked on a series of <span class="vocab" data-cn="纯化">purification</span> attempts, employing techniques such as solvent extraction and crystallization. The process proved arduous; penicillin degraded quickly when exposed to heat or acidic conditions, limiting its stability. Nevertheless, Fleming succeeded in producing a crude extract that demonstrated clear therapeutic effects in animal models, hinting at the potential for human application.`,
    `In 1929, Fleming published his findings in the British Journal of Experimental Pathology, describing both the discovery and preliminary <span class="vocab" data-cn="临床试验">clinical trial</span> results. He treated a few patients suffering from severe infections with the penicillin extract, observing rapid improvement in some cases. However, the limited supply of purified drug and the lack of an efficient production method meant that his breakthrough remained largely anecdotal for over a decade.`,
    `The turning point arrived during World War II when a team led by Howard Florey and Ernst Chain at the University of Oxford revisited Fleming’s work. They refined the extraction process, achieving large‑scale <span class="vocab" data-cn="大规模生产">mass production</span> of penicillin using deep‑tank fermentation. By 1944, penicillin was being manufactured in sufficient quantities to treat wounded soldiers, dramatically reducing mortality from bacterial <span class="vocab" data-cn="感染">infection</span>. The success also highlighted the looming issue of <span class="vocab" data-cn="耐药性">resistance</span>, prompting ongoing research into new antimicrobial strategies.`,
    `Fleming’s discovery underscores how <span class="vocab" data-cn="创新">innovation</span> often springs from unexpected observations. The story of penicillin reminds scientists that careful observation, openness to surprise, and perseverance in the face of technical obstacles can yield breakthroughs with lasting global impact. Today, penicillin remains a cornerstone of modern medicine, and its origin continues to inspire researchers to look for hidden treasures within everyday laboratory mishaps.`,
  ],
  vocabulary: [
    { word: 'serendipity', cn: '机缘巧合' },
    { word: 'mold', cn: '霉菌' },
    { word: 'bacterium', cn: '细菌' },
    { word: 'antibiotic', cn: '抗生素' },
    { word: 'Penicillium', cn: '青霉属' },
    { word: 'penicillin', cn: '青霉素' },
    { word: 'purification', cn: '纯化' },
    { word: 'therapeutic', cn: '治疗的' },
    { word: 'clinical trial', cn: '临床试验' },
    { word: 'mass production', cn: '大规模生产' },
    { word: 'resistance', cn: '耐药性' },
    { word: 'innovation', cn: '创新' },
  ],
};

export default article;
