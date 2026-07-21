import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Use of DNA Fingerprinting to Solve a Murder》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00316 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00316',
  slug: 'the-first-use-of-dna-fingerprinting-to-solve-a-murder-the-colin-pitchfork-case',
  title: 'The First Use of DNA Fingerprinting to Solve a Murder',
  subtitle: 'How Colin Pitchfork was caught using a brand‑new genetic technique',
  summary: 'A true story of science meeting law enforcement in the 1980s, leading to the world’s first murder conviction based on DNA evidence.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1983, two teenage girls—Lindsey Rose Anderson in Narborough and Dawn Ashworth in Enderby—were brutally murdered in rural Leicestershire. The local police were baffled; traditional clues such as footprints or eyewitnesses yielded nothing, and the case quickly grew cold. Yet the tragedy sparked a quiet collaboration between detectives and scientists at the University of Leicester, who believed that the victims’ blood might hold a hidden key to identifying the perpetrator.`,
    `Enter <span class="vocab" data-cn="DNA指纹识别技术">DNA fingerprinting</span>, a revolutionary method invented by Professor Sir Alec Jeffreys. By using <span class="vocab" data-cn="限制性内切酶，能够在特定的DNA序列处切割DNA分子">restriction enzymes</span> to chop DNA into fragments, the technique revealed unique patterns—much like a barcode—for each individual. These patterns arise from variations in non‑coding regions of the genome, which are highly <span class="vocab" data-cn="多态位点，指基因组中变异频繁的特定位置">polymorphic loci</span>.`,
    `To test whether this new science could aid a real investigation, Jeffreys and his team collected blood samples from over 5,000 local men. Each sample was examined for differences in <span class="vocab" data-cn="等位基因，指同一基因的不同形式">alleles</span> at several polymorphic loci. The resulting DNA profiles were then compared with the tiny stains found on the victims’ clothing. This massive screening effort was unprecedented, but it promised a statistical certainty that no eyewitness could provide.`,
    `The breakthrough came when a match emerged between the crime‑scene profile and a sample taken from Colin Pitchfork, a 21‑year‑old farmhand living nearby. The match was not merely a similarity; the probability of two unrelated individuals sharing the same pattern across all examined loci was less than one in several million. This level of certainty allowed investigators to make a definitive <span class="vocab" data-cn="嫌疑人识别，指通过证据确认犯罪嫌疑人的身份">suspect identification</span> and bring Pitchfork in for questioning.`,
    `During the 1986 trial, the courtroom heard expert testimony explaining how the DNA evidence linked Pitchfork to both murders. For the first time, a conviction was secured on the basis of <span class="vocab" data-cn="法医遗传学，利用DNA技术在司法领域进行身份鉴定">forensic genetics</span>. Equally important, another man—Barry  Johnson—who had previously been convicted for one of the murders was <span class="vocab" data-cn="平反，指通过新证据证明原先的错误判决并予以撤销">exonerated</span> after his DNA profile proved he could not have been the source of the blood found at the scenes. The case set a legal precedent that DNA evidence could be both powerful and reliable.`,
    `While Jeffreys’ original method relied on relatively large amounts of high‑quality DNA, later advances such as the <span class="vocab" data-cn="聚合酶链式反应（PCR），一种能够在实验室快速复制DNA的技术">polymerase chain reaction (PCR)</span> dramatically reduced the amount of material needed. PCR made it possible to generate a full profile from minute traces—like a single hair or a drop of sweat—thereby expanding DNA testing to virtually any crime scene. The technique also introduced the concept of <span class="vocab" data-cn="限制性片段长度多态性（RFLP），一种早期的DNA指纹分析方法">restriction fragment length polymorphism (RFLP)</span> as a standard analytical step.`,
    `Today, DNA profiling is an indispensable tool in criminal investigations worldwide, helping to solve cold cases and prevent wrongful convictions. However, the technology also raises <span class="vocab" data-cn="隐私问题，指个人基因信息被收集、存储或滥用的风险">privacy concerns</span> that societies continue to grapple with. The Colin Pitchfork case remains a landmark moment—a vivid illustration of how scientific curiosity, when paired with diligent policing, can rewrite the rules of justice.`,
  ],
  vocabulary: [
    { word: 'DNA fingerprinting', cn: 'DNA指纹识别技术' },
    { word: 'restriction enzymes', cn: '限制性内切酶，能够在特定的DNA序列处切割DNA分子' },
    { word: 'polymorphic loci', cn: '多态位点，指基因组中变异频繁的特定位置' },
    { word: 'alleles', cn: '等位基因，指同一基因的不同形式' },
    { word: 'suspect identification', cn: '嫌疑人识别，指通过证据确认犯罪嫌疑人的身份' },
    { word: 'forensic genetics', cn: '法医遗传学，利用DNA技术在司法领域进行身份鉴定' },
    { word: 'exonerate', cn: '平反，指通过新证据证明原先的错误判决并予以撤销' },
    { word: 'polymerase chain reaction (PCR)', cn: '聚合酶链式反应（PCR），一种能够在实验室快速复制DNA的技术' },
    { word: 'restriction fragment length polymorphism (RFLP)', cn: '限制性片段长度多态性（RFLP），一种早期的DNA指纹分析方法' },
    { word: 'privacy concerns', cn: '隐私问题，指个人基因信息被收集、存储或滥用的风险' },
  ],
};

export default article;
