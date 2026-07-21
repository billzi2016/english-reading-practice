import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Lab to Hospital: How the First Practical MRI Scanner Revolutionized Medical Diagnosis》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00322 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00322',
  slug: 'from-lab-to-hospital-how-the-first-practical-mri-scanner-revolutionized-medical-diagnosis',
  title: 'From Lab to Hospital: How the First Practical MRI Scanner Revolutionized Medical Diagnosis',
  subtitle: 'The journey of magnetic resonance imaging from physics experiment to clinical workhorse',
  summary: 'A narrative of how early NMR research became the first practical whole‑body MRI scanner and transformed medical diagnosis.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1980, a nervous patient lay on a narrow table that slid into a massive steel cylinder at Johns Hopkins Hospital. The humming of cryogenic pumps was louder than any ordinary X‑ray machine, yet the doctors promised a view inside the body without ionising radiation. That moment marked the first routine use of a whole‑body <span class="vocab" data-cn="核磁共振成像">magnetic resonance imaging</span> (MRI) scanner—a device whose origins were rooted in a physics laboratory rather than an operating theatre.`,
    `The story began decades earlier, when physicists <span class="vocab" data-cn="核磁共振">nuclear magnetic resonance</span> (NMR) discovered that atomic nuclei could be coaxed to emit radio signals in a strong magnetic field. Nobel laureates Felix Bloch and Edward Purcell first reported this phenomenon in 1946, but it remained a tool for chemistry. It was not until 1973 that Paul Lauterbur introduced the idea of spatially encoding those signals with a <span class="vocab" data-cn="梯度线圈">gradient coil</span>, allowing a two‑dimensional map of tissue properties to be reconstructed—essentially the birth of imaging from NMR.`,
    `Lauterbur’s concept, however, was too slow for clinical use. Peter Mansfield tackled this bottleneck by developing <span class="vocab" data-cn="回波平面成像">echo‑planar imaging</span> (EPI), a technique that could acquire an entire image in a fraction of a second. His work on rapid signal acquisition and the mathematical reconstruction algorithms made it feasible to scan living patients without intolerable motion artefacts, turning a laboratory curiosity into a practical diagnostic tool.`,
    `Armed with these breakthroughs, engineering firms such as EMI (later part of General Electric) built the first whole‑body scanner capable of producing clinically useful images. The system featured a superconducting magnet cooled by liquid helium to generate a stable <span class="vocab" data-cn="磁场强度">magnetic field strength</span> of 0.5 tesla, gradient coils for spatial encoding, and a computer that performed Fourier transforms on the raw data. After successful trials at research hospitals, the scanner received FDA clearance in 1984, paving the way for commercial models like the GE Signa to appear in radiology departments worldwide.`,
    `The impact on diagnosis was immediate and profound. Neurologists could now visualise <span class="vocab" data-cn="T1 加权成像">T1‑weighted</span> and <span class="vocab" data-cn="T2 加权成像">T2‑weighted</span> contrasts, revealing brain tumours, multiple sclerosis plaques, and stroke lesions that were invisible on conventional CT scans. Cardiologists began using MRI to assess myocardial viability without ionising radiation, while orthopaedic surgeons employed it to evaluate soft‑tissue injuries. The ability to acquire high‑resolution images non‑invasively reshaped treatment planning across specialties.`,
    `Nevertheless, the early scanners faced formidable challenges. The need for cryogenic cooling made installation expensive and required specialised facilities. Strong magnetic fields posed safety risks for patients with implanted metal devices, leading to strict screening protocols that are still in place today. Moreover, the initial cost of a single scanner often exceeded several million dollars, limiting access to large academic centres for many years.`,
    `Despite these hurdles, the first practical MRI system ignited a cascade of innovations. Field strengths climbed from 0.5 T to 1.5 T and later to 3 T, improving signal‑to‑noise ratios and reducing scan times. Ultra‑high‑field scanners (7 T) entered research hospitals, enabling functional MRI (<span class="vocab" data-cn="功能性磁共振成像">fMRI</span>) that maps brain activity by detecting blood‑oxygen‑level changes. Contrast agents such as gadolinium further enhanced vascular imaging, while diffusion tensor imaging opened new windows into white‑matter pathways. Today, MRI stands as an indispensable pillar of modern medicine, a testament to how curiosity‑driven physics can transform patient care.`,
  ],
  vocabulary: [
    { word: 'magnetic resonance imaging', cn: '磁共振成像' },
    { word: 'nuclear magnetic resonance', cn: '核磁共振' },
    { word: 'gradient coil', cn: '梯度线圈' },
    { word: 'echo-planar imaging', cn: '回波平面成像' },
    { word: 'magnetic field strength', cn: '磁场强度' },
    { word: 'T1-weighted', cn: 'T1 加权成像' },
    { word: 'functional MRI', cn: '功能性磁共振成像' },
  ],
};

export default article;
