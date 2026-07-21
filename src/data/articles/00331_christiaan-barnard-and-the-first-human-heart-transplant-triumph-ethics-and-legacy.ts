import type { Article } from '../../types/index.ts';

// 文件意图：维护《Christiaan Barnard and the First Human Heart Transplant: Triumph, Ethics, and Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00331 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00331',
  slug: 'christiaan-barnard-and-the-first-human-heart-transplant-triumph-ethics-and-legacy',
  title: 'Christiaan Barnard and the First Human Heart Transplant: Triumph, Ethics, and Legacy',
  subtitle: 'How a South African surgeon changed medicine forever',
  summary: 'The story of the first human heart transplant, its medical breakthroughs, ethical controversies, and lasting influence.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In December 1967, the world’s attention turned to a modest hospital in Cape Town, South Africa.  Christiaan Barnard, a young <span class="vocab" data-cn="心胸外科手术">cardiothoracic surgery</span> fellow trained under Dr. Norman Shumway in the United States, had returned home with a bold ambition: to replace a failing human heart with a healthy one from another person.  His confidence was rooted in years of experimental work on dogs and pigs, but no one could predict how his first operation would reverberate through medicine and society.`,
    `The patient, 53‑year‑old Louis Washkansky, suffered from end‑stage coronary artery disease and had exhausted all conventional treatments.  The chosen <span class="vocab" data-cn="供体心脏">donor heart</span> came from Denise Darvall, a 25‑year‑old who died in a car accident just hours earlier.  Because brain death was not yet universally accepted as a legal definition, the surgical team relied on a rapid assessment of irreversible loss of brain function before retrieving her heart.  This delicate moment highlighted an emerging <span class="vocab" data-cn="伦理困境">ethical dilemma</span> that would dominate public discourse for years to come.`,
    `On December 3, Barnard and his team performed the transplant using a <span class="vocab" data-cn="心肺转流机">cardiopulmonary bypass</span> machine to maintain circulation while the diseased heart was removed.  The operation lasted just over six hours; after excising Washkansky’s failing organ, they sutured the donor’s atria and ventricles into place, creating a seamless connection for blood flow.  The newly implanted <span class="vocab" data-cn="同种异体移植器官">allograft</span> began beating within minutes, a sight that left the operating room in stunned silence.`,
    `Post‑operative care hinged on aggressive <span class="vocab" data-cn="免疫抑制">immunosuppression</span>.  Barnard administered azathioprine and high‑dose corticosteroids to blunt the immune system’s natural tendency toward <span class="vocab" data-cn="移植排斥反应">transplant rejection</span>.  Washkansky survived for 18 days, during which he experienced a brief period of improved quality of life.  Unfortunately, a severe case of pneumonia—exacerbated by the very drugs meant to protect his new heart—proved fatal, and he passed away on December 21, 1967.`,
    `The news spread like wildfire.  Headlines proclaimed “Man Gets New Heart” while television crews crowded the hospital’s corridors.  Public fascination was matched by fierce criticism from ethicists, religious leaders, and medical professionals who questioned whether a heart could be ethically taken from a brain‑dead donor.  Some argued that the procedure turned patients into “experimental subjects,” while others feared a slippery slope toward commodifying human organs.  These debates forced governments worldwide to codify criteria for brain death and organ donation, laying groundwork for modern transplant legislation.`,
    `Barnard’s daring act ignited a rapid evolution in transplant science.  Within a decade, the introduction of cyclosporine—a more targeted immunosuppressant—dramatically improved graft survival rates, turning heart transplantation from a curiosity into a viable therapy for thousands of patients.  The procedure also spurred advances in organ preservation, surgical instrumentation, and post‑operative monitoring, creating an entire ecosystem of specialties that continue to save lives today.`,
    `Beyond the operating theater, Barnard became a cultural icon.  He authored popular books, appeared on talk shows, and even dabbled in politics, using his fame to advocate for better healthcare infrastructure in South Africa.  Yet his celebrity status also attracted criticism; some accused him of prioritizing publicity over patient safety.  Despite the controversy, his contributions earned him numerous honors, including the Lasker Award, and cemented his place in medical history as a pioneer who dared to push the boundaries of what was thought possible.`,
    `Looking back, the first human heart transplant stands as both a triumph of surgical ingenuity and a cautionary tale about the responsibilities that accompany scientific breakthroughs.  It reminds us that every technical success must be weighed against ethical considerations, patient welfare, and societal impact.  As transplantation techniques continue to evolve—now incorporating xenotransplantation and bio‑engineered hearts—the legacy of Christiaan Barnard serves as a guiding beacon for future generations of surgeons and ethicists alike.`,
  ],
  vocabulary: [
    { word: 'cardiothoracic surgery', cn: '心胸外科手术' },
    { word: 'immunosuppression', cn: '免疫抑制' },
    { word: 'allograft', cn: '同种异体移植器官' },
    { word: 'donor heart', cn: '供体心脏' },
    { word: 'recipient', cn: '受体' },
    { word: 'ethical dilemma', cn: '伦理困境' },
    { word: 'cardiopulmonary bypass', cn: '心肺转流机' },
    { word: 'transplant rejection', cn: '移植排斥反应' },
  ],
};

export default article;
