import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First DNA Fingerprinting Murder Case: How Genetic Evidence Solved a Crime in 1986》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00367 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00367',
  slug: 'the-first-dna-fingerprinting-murder-case-how-genetic-evidence-solved-a-crime-in-1986',
  title: 'The First DNA Fingerprinting Murder Case: How Genetic Evidence Solved a Crime in 1986',
  subtitle: 'A landmark forensic breakthrough that changed criminal investigations forever.',
  summary: 'In 1986, the first use of <span class="vocab" data-cn="DNA指纹">DNA fingerprinting</span> led to the conviction of Colin Pitchfork and cleared an innocent man.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the quiet English county of Leicestershire, two teenage girls—Lindsey Rutherford and Dawn Ashworth—were brutally murdered in February 1986. The local police launched a massive search, but traditional methods such as <span class="vocab" data-cn="血型鉴定">serology</span> and eyewitness testimony yielded no solid leads. It was the emergence of a new scientific tool that would finally break the case open.`,
    `The breakthrough came from an unlikely source: Professor Alec Jeffreys at the University of Leicester. Jeffreys had recently discovered that tiny variations in non‑coding regions of DNA could serve as highly individual <span class="vocab" data-cn="核酸序列">genetic markers</span>. He called this technique <span class="vocab" data-cn="DNA指纹">DNA fingerprinting</span>, and it promised a level of discrimination far beyond blood typing. When the police approached him, he agreed to apply his method to the crime‑scene samples, despite the fact that no court had ever seen such evidence before.`,
    `The process began with the extraction of DNA from tiny fragments of semen found on the victims' clothing. Jeffreys’ team used a technique called <span class="vocab" data-cn="限制性片段长度多态">restriction fragment length polymorphism (RFLP)</span>, which involved cutting the DNA with specific enzymes and then separating the resulting pieces by size using gel electrophoresis. The pattern of bands—each representing a different fragment—constituted a unique fingerprint for each individual. To compare these patterns, the team also collected blood samples from 5,000 local men, creating a massive database that would later become known as the “DNA dragnet.”`,
    `Among the volunteers was Richard Buckland, who matched the crime‑scene profile perfectly. Buckland was arrested and charged, but before the trial could proceed, Jeffreys’ method proved its reliability in an unexpected way: when the same DNA fingerprinting technique was applied to a second set of samples from a different crime scene, Buckland’s profile did not match. This discrepancy forced the investigators to re‑examine their assumptions, and they eventually identified Colin Pitchfork—a 21‑year‑old farmhand who had previously been questioned but released due to lack of evidence—as the true perpetrator.`,
    `Pitchfork’s conviction hinged on a meticulous <span class="vocab" data-cn="证据链">chain of custody</span>. Every sample, from the original crime‑scene swabs to the blood drawn from Pitchfork himself, was logged, sealed, and stored under strict conditions. The court allowed Jeffreys to testify as an expert witness, explaining in lay terms how the DNA patterns could not be coincidentally identical between two unrelated individuals. The jury accepted this scientific testimony, marking the first time a murder conviction was secured primarily on DNA evidence.`,
    `The aftermath of the case reshaped forensic science worldwide. Not only did it exonerate an innocent man—Buckland walked free after serving months in custody—but it also demonstrated that DNA could provide both exclusionary and incriminating power. Law enforcement agencies across the globe began to establish their own DNA databases, and legislation was introduced to regulate how genetic data could be collected and used. Today, <span class="vocab" data-cn="聚合酶链式反应">polymerase chain reaction (PCR)</span> and rapid sequencing have made DNA analysis faster and more accessible than ever, but the 1986 Leicestershire case remains a seminal moment in criminal justice history.`,
    `For students of forensic science, the story offers several key lessons. First, scientific innovation often arises from interdisciplinary collaboration—genetics, chemistry, and law all intersected in this investigation. Second, rigorous procedural standards, such as maintaining an unbroken <span class="vocab" data-cn="证据链">chain of custody</span>, are essential for courtroom admissibility. Finally, the ethical implications of genetic surveillance continue to spark debate, reminding us that every technological advance carries both power and responsibility.`,
  ],
  vocabulary: [
    { word: 'DNA fingerprinting', cn: 'DNA指纹' },
    { word: 'genetic marker', cn: '核酸序列' },
    { word: 'serology', cn: '血型鉴定' },
    { word: 'restriction fragment length polymorphism (RFLP)', cn: '限制性片段长度多态' },
    { word: 'chain of custody', cn: '证据链' },
    { word: 'polymerase chain reaction (PCR)', cn: '聚合酶链式反应' },
  ],
};

export default article;
