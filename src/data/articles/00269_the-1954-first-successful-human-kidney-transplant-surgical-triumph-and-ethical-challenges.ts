import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1954 First Successful Human Kidney Transplant: Surgical Triumph and Ethical Challenges》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00269 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00269',
  slug: 'the-1954-first-successful-human-kidney-transplant-surgical-triumph-and-ethical-challenges',
  title: 'The 1954 First Successful Human Kidney Transplant: Surgical Triumph and Ethical Challenges',
  subtitle: 'How a daring operation reshaped medicine and raised profound moral questions.',
  summary: 'In 1954, Dr. Joseph Murray performed the world’s first successful human kidney transplant, opening a new era of organ replacement while confronting ethical dilemmas that still echo today.',
  category: 'medicine',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `On March 23, 1954, at Boston’s Peter Bent Brigham Hospital, surgeon <span class="vocab" data-cn="约瑟夫·默里">Dr. Joseph Murray</span> entered the operating theater with a bold plan: replace a failing kidney with one from another person. At that time, chronic renal failure was almost always fatal because no reliable long‑term therapy existed. The patient, 23‑year‑old Ronald Herrick, suffered from end‑stage kidney disease and faced an inevitable decline unless something extraordinary intervened.`,
    `The donor turned out to be Ronald’s older brother, Richard, who happened to be his <span class="vocab" data-cn="同卵双胞胎">identical twin</span>. Because identical twins share the same genetic makeup, the risk of immune conflict is dramatically reduced. This unique circumstance allowed Murray and his team to bypass one of transplantation’s greatest obstacles—immune rejection—without relying on experimental drugs that were not yet available.`,
    `The operation began with a careful <span class="vocab" data-cn="肾切除术">nephrectomy</span> of Richard’s healthy kidney, preserving as much vascular tissue as possible. Surgeons then performed an intricate <span class="vocab" data-cn="吻合术">anastomosis</span>, connecting the donor renal artery and vein to Ronald’s iliac vessels and suturing the ureter into his bladder. The transplanted organ was technically an <span class="vocab" data-cn="异体移植器官">allograft</span>, even though genetic identity made it functionally a perfect match, eliminating the need for immediate <span class="vocab" data-cn="免疫抑制">immunosuppression</span>.`,
    `Post‑operative monitoring revealed that the new kidney began producing urine within hours, and blood tests showed rapidly improving renal function. Over the next several weeks, Ronald experienced no signs of <span class="vocab" data-cn="移植排斥反应">graft rejection</span>, a remarkable outcome given that earlier attempts with unrelated donors had failed within days. He lived for eight more years, eventually succumbing to complications unrelated to his transplanted kidney—a testament to the procedure’s durability.`,
    `The success sparked worldwide interest and accelerated research into organ transplantation. While Murray’s case proved that a kidney could survive in another human body, it also highlighted the need for reliable therapies when perfect genetic matches were unavailable. The development of dialysis machines provided a temporary bridge for patients awaiting transplants, and later breakthroughs in <span class="vocab" data-cn="免疫抑制">immunosuppression</span>—such as azathioprine and corticosteroids—made it possible to use kidneys from unrelated donors with acceptable survival rates.`,
    `However, the triumph was accompanied by a host of <span class="vocab" data-cn="伦理困境">ethical dilemmas</span>. Questions arose about informed consent: could a healthy donor truly understand the risks of losing a kidney? How should scarce organs be allocated when demand far outstripped supply? At the time, concepts like “brain death” had not yet been formalized, complicating decisions about deceased donors. These debates forced physicians, ethicists, and legislators to craft guidelines that balanced scientific progress with respect for human dignity.`,
    `Murray’s pioneering work earned him the 1990 Nobel Prize in Physiology or Medicine, shared with E. Donnall Thomas for advances in organ and bone‑marrow transplantation. Today, more than 90,000 kidney transplants are performed annually worldwide, and survival rates have risen dramatically thanks to refined surgical techniques, sophisticated immunosuppressive regimens, and robust ethical frameworks that originated from the lessons of 1954. The story remains a vivid reminder that every medical breakthrough carries both hope and responsibility.`,
  ],
  vocabulary: [
    { word: 'nephrectomy', cn: '肾切除术' },
    { word: 'anastomosis', cn: '吻合术' },
    { word: 'allograft', cn: '异体移植器官' },
    { word: 'immunosuppression', cn: '免疫抑制' },
    { word: 'graft rejection', cn: '移植排斥反应' },
    { word: 'ethical dilemma', cn: '伦理困境' },
  ],
};

export default article;
