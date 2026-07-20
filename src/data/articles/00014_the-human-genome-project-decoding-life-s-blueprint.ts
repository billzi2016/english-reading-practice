import type { Article } from '../../types/index.ts';

// File purpose: Maintain the full content of "The Human Genome Project: Decoding Life's Blueprint" for article indexing.
// Maintenance focus: Only modify this file's content; article order is controlled by the filename prefix 00014.
const article: Article = {
  id: '00014',
  slug: 'the-human-genome-project-decoding-life-s-blueprint',
  title: "The Human Genome Project: Decoding Life's Blueprint",
  subtitle: 'Mapping the human DNA code',
  summary: 'An overview of the groundbreaking international effort that mapped every gene in the human genome and its lasting impact on science and medicine.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `The <span class="vocab" data-cn="基因组">genome</span> of a species is its complete set of genetic instructions, written in a long string of <span class="vocab" data-cn="碱基对">base pair</span> letters. In the early 1990s, an ambitious international effort called the Human Genome Project (HGP) set out to read every letter of the human <span class="vocab" data-cn="基因组">genome</span>. Launched in 1990 and declared complete in April 2003, the project aimed not only to produce a high‑quality reference sequence but also to develop the technologies and collaborative frameworks needed for large‑scale DNA analysis. Its success promised to transform biology, medicine, and our understanding of what makes us human.`,
    `The HGP was unprecedented in its scale and cooperation. Funding came primarily from the United States National Institutes of Health (NIH) and the Department of Energy (DOE), while major contributions arrived from the Wellcome Trust in the United Kingdom, the French Genoscope, Japan’s RIKEN, and many other research institutes worldwide. Over 20 sequencing centers shared the workload, each responsible for specific chromosomes or chromosomal regions. This global partnership not only pooled financial resources but also fostered a culture of data sharing that would become a hallmark of modern genomics.`,
    `At the heart of the project lay the labor‑intensive method known as <span class="vocab" data-cn="测序">sequencing</span>. Researchers used Sanger’s chain‑termination chemistry, which reads DNA fragments one base at a time. To manage the human genome’s roughly three billion <span class="vocab" data-cn="碱基对">base pair</span> length, scientists first broke chromosomes into smaller pieces and inserted them into bacterial artificial chromosome (BAC) vectors for stable cloning. Automated capillary sequencers then generated millions of short reads, which were later assembled like a massive jigsaw puzzle. The sheer volume of data required new laboratory robotics and rigorous quality‑control pipelines.`,
    `Turning raw reads into a coherent sequence demanded powerful <span class="vocab" data-cn="生物信息学">bioinformatics</span> tools. Specialized software aligned overlapping fragments, corrected errors, and stitched them together to form contiguous stretches called contigs. The assembled pieces were then ordered against known markers to produce the <span class="vocab" data-cn="参考基因组">reference genome</span>. Alongside assembly, teams performed extensive <span class="vocab" data-cn="基因注释">gene annotation</span>, identifying protein‑coding regions, regulatory elements, and repetitive sequences. These computational steps were carried out on high‑performance clusters that, at the time, represented some of the most demanding workloads in scientific computing.`,
    `The finished reference revealed surprising insights. Contrary to early estimates, the human <span class="vocab" data-cn="基因组">genome</span> contains only about 20,000–25,000 protein‑coding genes, far fewer than expected. However, more than 98% of the DNA does not code for proteins, highlighting a vast landscape of regulatory and non‑coding elements. The project also catalogued millions of <span class="vocab" data-cn="单核苷酸多态性">single nucleotide polymorphism (SNP)</span> sites, providing a foundation for association studies that link genetic variation to disease risk. These discoveries reshaped our view of genetic complexity and opened new avenues for personalized medicine.`,
    `Recognizing the profound societal implications, the HGP allocated a dedicated Ethical, Legal, and Social Implications (ELSI) program. Researchers examined issues such as privacy of genetic information, potential <span class="vocab" data-cn="基因组">genome</span> discrimination by insurers or employers, and the ownership of DNA data. The ELSI findings informed policy debates that eventually led to legislation like the Genetic Information Nondiscrimination Act (GINA) in 2008. By confronting these concerns early, the project set a precedent for responsible stewardship of genomic data.`,
    `The legacy of the Human Genome Project extends far beyond its original timeline. It paved the way for subsequent initiatives such as ENCODE, which maps functional elements, and the 1000 Genomes Project, which explores human genetic diversity across populations. Moreover, the rapid decline in <span class="vocab" data-cn="测序">sequencing</span> costs—now driven by technologies that can read billions of bases per day—has enabled routine clinical genome testing and the rise of direct‑to‑consumer genetic services. As researchers continue to refine the reference and integrate epigenomic, transcriptomic, and proteomic layers, the HGP remains a cornerstone of modern biology, reminding us that decoding life’s blueprint is an ongoing collaborative adventure.`,
  ],
  vocabulary: [
    { word: 'genome', cn: '基因组' },
    { word: 'base pair', cn: '碱基对' },
    { word: 'sequencing', cn: '测序' },
    { word: 'bioinformatics', cn: '生物信息学' },
    { word: 'gene annotation', cn: '基因注释' },
    { word: 'single nucleotide polymorphism (SNP)', cn: '单核苷酸多态性' },
    { word: 'reference genome', cn: '参考基因组' },
  ],
};

export default article;
