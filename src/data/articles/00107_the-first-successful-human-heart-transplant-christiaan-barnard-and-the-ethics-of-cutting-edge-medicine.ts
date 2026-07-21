import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Successful Human Heart Transplant: Christiaan Barnard and the Ethics of Cutting-Edge Medicine》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00107 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00107',
  slug: 'the-first-successful-human-heart-transplant-christiaan-barnard-and-the-ethics-of-cutting-edge-medicine',
  title: 'The First Successful Human Heart Transplant: Christiaan Barnard and the Ethics of Cutting-Edge Medicine',
  subtitle: 'A landmark surgery that reshaped medicine and sparked profound moral debate.',
  summary: 'In December 1967, Christiaan Barnard performed the world’s first successful human heart transplant, a feat that combined daring technology with complex ethical questions.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `On the night of December 3, 1967, the operating rooms of Groote Schuur Hospital in Cape Town hummed with an uneasy anticipation.  <span class="vocab" data-cn="心肺体外循环">Cardiopulmonary bypass</span> machines whirred, ready to take over the patient’s circulation while Dr. Christiaan Barnard and his <span class="vocab" data-cn="手术团队">surgical team</span> prepared for a procedure no one had ever completed successfully before.`,
    `Heart surgery had been advancing steadily since the early 20th century, but replacing an entire organ remained theoretical.  The development of reliable <span class="vocab" data-cn="心肺体外循环">cardiopulmonary bypass</span> in the 1950s gave surgeons a way to stop the heart without killing the patient, creating the technical foundation for transplantation.  Yet most experts believed that even with perfect mechanics, the body’s immune system would reject a foreign organ almost instantly.`,
    `The donor was a 25‑year‑old woman named Denise Darvall, who had suffered fatal head injuries in a car crash earlier that day.  After confirming brain death—a concept still controversial at the time—Barnard obtained her family's consent and retrieved the <span class="vocab" data-cn="捐献者心脏">donor heart</span>.  The recipient, Louis Washkansky, a 53‑year‑old grocer with terminal heart disease, was already on a waiting list.  As the clock ticked, Barnard’s team connected the donor organ to Washkansky’s circulation using the bypass machine, then sutured it into place within just under five hours.`,
    `The operation itself proceeded without major technical mishaps, and the new heart began beating on its own within minutes.  However, success depended heavily on post‑operative care.  Barnard administered a regimen of <span class="vocab" data-cn="免疫抑制">immunosuppression</span> that combined azathioprine with high‑dose steroids, the best available therapy at the time.  Washkansky survived for 18 days before succumbing to pneumonia—a complication unrelated to the transplanted organ but still a stark reminder of the fragility of early transplant patients.`,
    `From the moment news of the surgery broke, the world was split between awe and alarm.  Critics argued that using a brain‑dead donor skirted ethical boundaries, especially because the definition of death was not universally accepted.  Others questioned whether Washkansky had truly given <span class="vocab" data-cn="知情同意">informed consent</span>, given his desperate condition and limited understanding of experimental risks.  The episode sparked a global <span class="vocab" data-cn="道德困境">ethical dilemma</span> that forced medical societies to draft clearer guidelines on organ donation, consent, and the allocation of scarce resources.`,
    `Despite the early mortality, Barnard’s breakthrough ignited an intense research race.  Over the next decade, advances in <span class="vocab" data-cn="免疫抑制">immunosuppression</span>—notably the introduction of cyclosporine—dramatically reduced <span class="vocab" data-cn="移植排斥">transplant rejection</span> rates.  By the 1980s, heart transplant survival had risen to over 70 % at one year, turning a once‑taboo experiment into a routine life‑saving therapy practiced worldwide.`,
    `Today, the legacy of that first transplant is felt in both medicine and bioethics classrooms.  The case reminds us that cutting‑edge technology must be paired with rigorous ethical scrutiny, transparent communication, and robust patient rights.  As gene editing and artificial organs loom on the horizon, Barnard’s story serves as a cautionary tale: progress without conscience can quickly become controversy, but progress guided by ethical reflection can reshape humanity for the better.`,
  ],
  vocabulary: [
    { word: 'cardiopulmonary bypass', cn: '心肺体外循环' },
    { word: 'surgical team', cn: '手术团队' },
    { word: 'donor heart', cn: '捐献者心脏' },
    { word: 'immunosuppression', cn: '免疫抑制' },
    { word: 'informed consent', cn: '知情同意' },
    { word: 'ethical dilemma', cn: '道德困境' },
    { word: 'transplant rejection', cn: '移植排斥' },
  ],
};

export default article;
