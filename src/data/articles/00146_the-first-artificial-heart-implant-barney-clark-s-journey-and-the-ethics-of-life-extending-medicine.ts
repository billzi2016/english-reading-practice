import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Artificial Heart Implant: Barney Clark’s Journey and the Ethics of Life‑Extending Medicine》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00146 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00146',
  slug: 'the-first-artificial-heart-implant-barney-clark-s-journey-and-the-ethics-of-life-extending-medicine',
  title: 'The First Artificial Heart Implant: Barney Clark’s Journey and the Ethics of Life‑Extending Medicine',
  subtitle: 'A pioneering surgery that sparked debate over how far medicine should go.',
  summary: 'In 1982, Barney Clark became the world’s first permanent artificial heart recipient, igniting both hope and controversy in medical ethics.',
  category: 'health',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the <span class="vocab" data-cn="人工心脏">artificial heart</span> first entered operating rooms, it was not a sleek consumer gadget but a massive, titanium‑cased pump designed to replace a failing organ. The device, known as the Jarvik‑7 after its creator Dr. Robert Jarvik, promised a new lease on life for patients with end‑stage <span classclass="vocab" data-cn="心肌病">cardiomyopathy</span> who had no donor hearts available. Yet the very idea of keeping someone alive with a machine raised profound questions about what it meant to be human.`,
    `Barney Clark, a 61‑year‑old retired teacher from Seattle, volunteered for the trial after months of evaluation. He suffered from severe heart failure and was told that without an operation he had only weeks left. The selection process involved not just medical criteria but also psychological assessments; researchers wanted someone who could endure the intense post‑operative regimen, which included constant monitoring, anticoagulant therapy, and frequent hospital visits. Clark’s willingness to become a living test case made him both a hero and a subject of scrutiny.`,
    `On December 2, 1982, surgeons at the University of Utah performed the historic implantation. The operation lasted over ten hours, during which the patient’s native heart was removed and the Jarvik‑7 was sewn into place, connecting to the major blood vessels. When the machine kicked into action, it produced a steady “lub‑dub” rhythm that mimicked natural cardiac output. Clark awoke in intensive care, aware of the buzzing machinery beside him. The first few days were promising: he could sit up, speak with visitors, and even enjoy a modest meal—a stark contrast to his previous bedridden state.`,
    `However, the triumph was quickly tempered by complications. The artificial heart required continuous anticoagulation, which led to bleeding episodes; infections at the surgical site proved difficult to control; and the device’s mechanical parts generated audible clicks that reminded everyone of its unnatural origin. After 112 days, Clark’s condition deteriorated, and he passed away on March 23, 1983. His death sparked a heated debate in both medical journals and public media about whether extending life at any cost was ethically defensible.`,
    `Bioethicists such as Dr. Tom Beauchamp argued that the experiment highlighted the principle of “beneficence” – the duty to do good – but also exposed the limits of “non‑maleficence,” or avoiding harm. Critics contended that the trial prioritized technological showcase over patient welfare, turning Clark into a symbol rather than a person. The discussion extended beyond the operating room: legislators began drafting regulations for experimental devices, and hospitals formed Institutional Review Boards (IRBs) to oversee future high‑risk procedures.`,
    `Despite the tragic outcome, the Jarvik‑7 paved the way for modern ventricular assist devices (<span class="vocab" data-cn="左心室辅助装置">ventricular assist device</span>, VADs). Today’s pumps are smaller, quieter, and often used as a bridge to transplant rather than a permanent replacement. The ethical frameworks forged in the wake of Clark’s surgery continue to guide decisions about life‑extending technologies such as gene editing, organ bioprinting, and neural implants. In many ways, Barney Clark’s brief journey remains a touchstone for balancing innovation with compassion.`,
    `Looking back, the story of the first artificial heart implant reminds us that medical progress is never purely technical; it is intertwined with societal values, patient autonomy, and the ever‑present question of how far we should push the boundaries of life. As new therapies emerge, the lessons from 1982 urge clinicians, engineers, and policymakers to ask not only “Can we?” but also “Should we?”`,
  ],
  vocabulary: [
    { word: 'artificial heart', cn: '人工心脏' },
    { word: 'cardiomyopathy', cn: '心肌病' },
    { word: 'bioethics', cn: '生物伦理学' },
    { word: 'ventricular assist device', cn: '左心室辅助装置' },
    { word: 'non‑maleficence', cn: '不伤害原则' },
    { word: 'Institutional Review Board', cn: '机构审查委员会' },
  ],
};

export default article;
