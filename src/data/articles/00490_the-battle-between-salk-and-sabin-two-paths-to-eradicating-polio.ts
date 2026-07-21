import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Battle Between Salk and Sabin: Two Paths to Eradicating Polio》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00490 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00490',
  slug: 'the-battle-between-salk-and-sabin-two-paths-to-eradicating-polio',
  title: 'The Battle Between Salk and Sabin: Two Paths to Eradicating Polio',
  subtitle: 'How two rival vaccines shaped the fight against a feared disease',
  summary: 'A narrative of the scientific rivalry between Jonas Salk and Albert Sabin that ultimately led to global polio eradication.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1950s, the United States was gripped by a wave of terror whenever a child developed sudden paralysis. The culprit was <span class="vocab" data-cn="小儿麻痹症">polio</span>, an infectious disease that could strike without warning and leave victims dependent on iron lungs. Hospitals filled with patients, schools closed during summer camps, and the public demanded a solution faster than any previous medical breakthrough.`,
    `Enter <span class="vocab" data-cn="约纳斯·萨尔克">Jonas Salk</span>, a virologist at the University of Pittsburgh who pursued an <span class="vocab" data-cn="灭活疫苗">inactivated vaccine</span>. By chemically killing the poliovirus while preserving its outer proteins, he hoped to train the immune system without risking infection. After years of laboratory work, Salk’s team launched a massive field trial in 1954 that involved over one million children—a scale unprecedented in <span class="vocab" data-cn="临床试验">clinical trial</span> history.`,
    `While Salk was perfecting his killed‑virus approach, another scientist across the continent was charting a different course. Albert Sabin, an émigré virologist working at the University of Cincinnati, believed that a live but weakened virus could provoke stronger and longer‑lasting immunity when taken orally. His method, known as <span class="vocab" data-cn="口服减毒疫苗">oral vaccine</span>, required careful attenuation—reducing the virus’s virulence without eliminating its ability to replicate in the gut.`,
    `The two strategies sparked a heated debate within the public health community. Proponents of Salk’s IPV praised its safety profile; no live virus meant no chance of causing disease. Sabin’s supporters argued that OPV’s ease of administration—just a few drops on a sugar cube—made mass immunization feasible in low‑resource settings, and that it induced <span class="vocab" data-cn="群体免疫">herd immunity</span> more efficiently. The rivalry was less personal than scientific, yet newspapers often framed it as “the Salk‑Sabin showdown.”`,
    `When the results of the 1955 trial were announced—showing a 90% reduction in polio cases—the United States adopted IPV nationwide. Meanwhile, Sabin continued refining his oral formulation, and by 1961 the United Nations approved OPV for global distribution. The dual‑vaccine strategy proved powerful: IPV protected industrialized nations with robust medical infrastructure, while OPV accelerated eradication campaigns in Asia and Africa where delivering injections was logistically challenging.`,
    `Decades later, the World Health Organization’s (WHO) polio eradication initiative leaned heavily on Sabin’s OPV, driving case numbers down from an estimated 350,000 annually in the early 1990s to fewer than a thousand by 2020. However, the live‑virus nature of OPV also gave rise to rare <span class="vocab" data-cn="疫苗衍生脊髓灰质炎病毒">vaccine‑derived poliovirus</span> outbreaks, prompting a strategic shift back to IPV in many countries. This nuanced balance illustrates how both scientists’ visions remain essential to the final push toward total eradication.`,
    `Today, as the world watches new pandemics unfold, the legacy of Salk and Sabin offers two timeless lessons: safety and scalability are both critical in vaccine design, and scientific competition can catalyze rapid progress when guided by public health goals. Their parallel paths—one rooted in <span class="vocab" data-cn="灭活技术">inactivation</span>, the other in <span class="vocab" data-cn="减毒技术">attenuation</span>—show that multiple solutions can coexist, each filling gaps the other leaves open, ultimately delivering a disease‑free future for generations to come.`
  ],
  vocabulary: [
    { word: 'polio', cn: '小儿麻痹症' },
    { word: 'inactivated vaccine', cn: '灭活疫苗' },
    { word: 'oral vaccine', cn: '口服减毒疫苗' },
    { word: 'clinical trial', cn: '临床试验' },
    { word: 'herd immunity', cn: '群体免疫' },
    { word: 'vaccine-derived poliovirus', cn: '疫苗衍生脊髓灰质炎病毒' },
    { word: 'attenuation', cn: '减毒技术' },
    { word: 'inactivation', cn: '灭活技术' }
  ],
};

export default article;
