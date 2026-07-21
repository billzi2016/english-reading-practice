import type { Article } from '../../types/index.ts';

// 文件意图：维护《Thomas Starzl and the First Successful Human Liver Transplant: A Surgical Milestone and Ethical Debate》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00306 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00306',
  slug: 'thomas-starzl-and-the-first-successful-human-liver-transplant-a-surgical-milestone-and-ethical-debate',
  title: 'Thomas Starzl and the First Successful Human Liver Transplant: A Surgical Milestone and Ethical Debate',
  subtitle: 'How a daring operation reshaped surgery and sparked bioethical discussions.',
  summary: 'The story of Thomas Starzl’s breakthrough liver transplant, its medical challenges, and the ethical questions it raised.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1960s, a young surgeon named <span class="vocab" data-cn="美国外科医生">Thomas Starzl</span> was fascinated by the idea of replacing diseased organs. After completing his residency at the University of Colorado, he joined a small team that dreamed of performing a <span class="vocab" data-cn="肝脏移植手术">liver transplant</span>. At that time, organ transplantation was still experimental; surgeons struggled with technical hurdles such as preserving the donor liver and preventing immediate failure after implantation.`,
    `The breakthrough came on March 1, 1967, when Starzl and his colleagues operated on a 19‑year‑old patient suffering from primary sclerosing cholangitis. The operation required meticulous reconstruction of the <span class="vocab" data-cn="肝动脉">hepatic artery</span>, portal vein, and bile ducts—structures that are notoriously fragile. Despite limited knowledge about how to keep the organ viable outside the body, they used a simple cold storage method, keeping the graft at low temperature for what is now called <span class="vocab" data-cn="冷缺血时间">cold ischemia time</span>. The patient survived for 31 days, marking the first instance in which a human liver graft functioned long enough to demonstrate true physiological activity.`,
    `Starzl’s success was not merely technical; it also highlighted the importance of <span class="vocab" data-cn="免疫抑制">immunosuppression</span>. Early patients suffered from rapid <span class="vocab" data-cn="排斥反应">graft rejection</span>, a process where the recipient’s immune system attacks the foreign organ. To combat this, Starzl experimented with high‑dose steroids and later introduced azathioprine, laying the groundwork for modern immunosuppressive regimens that now include tacrolimus and mycophenolate mofetil. These advances turned transplantation from a desperate gamble into a reproducible therapy.`,
    `While the medical community celebrated the technical triumph, the operation ignited an intense <span class="vocab" data-cn="伦理学">bioethical</span> debate. Critics questioned whether it was ethical to subject patients to experimental surgery with uncertain outcomes, especially when informed consent procedures were still evolving. Starzl insisted on thorough discussions with patients and families, emphasizing that they must understand both the potential benefits and the significant risks—a principle now known as <span class="vocab" data-cn="知情同意">informed consent</span>.`,
    `The ethical controversy extended beyond individual patients to the broader issue of organ allocation. In the late 1960s, there was no national waiting list; organs were often obtained from donors who had suffered sudden death or from living relatives willing to donate a portion of their liver. Starzl’s work prompted policymakers to consider how scarce resources should be distributed fairly, eventually leading to the establishment of the United Network for Organ Sharing (UNOS) in 1984 and the development of allocation algorithms that balance urgency, compatibility, and equity.`,
    `Decades after that first operation, liver transplantation has become a routine life‑saving procedure performed thousands of times each year worldwide. The survival rate for adult recipients now exceeds 85 % at one year, thanks to refined surgical techniques, better preservation solutions, and sophisticated immunosuppressive drugs. Yet the ethical questions Starzl raised remain relevant: how do we ensure equitable access across socioeconomic groups? How should emerging technologies like xenotransplantation or bio‑engineered organs be regulated?`,
    `Thomas Starzl’s legacy is therefore twofold. He proved that a complex organ could be replaced successfully, opening doors for heart, lung, and pancreas transplants as well. Simultaneously, he forced the medical community to confront the moral responsibilities that accompany such power. His career reminds us that every surgical milestone carries with it a duty to protect patient autonomy, promote justice, and continuously reassess the boundaries of what is medically possible.`,
  ],
  vocabulary: [
    { word: 'Thomas Starzl', cn: '美国外科医生' },
    { word: 'liver transplant', cn: '肝脏移植手术' },
    { word: 'hepatic artery', cn: '肝动脉' },
    { word: 'cold ischemia time', cn: '冷缺血时间' },
    { word: 'immunosuppression', cn: '免疫抑制' },
    { word: 'graft rejection', cn: '排斥反应' },
    { word: 'bioethics', cn: '伦理学' },
    { word: 'informed consent', cn: '知情同意' },
  ],
};

export default article;
