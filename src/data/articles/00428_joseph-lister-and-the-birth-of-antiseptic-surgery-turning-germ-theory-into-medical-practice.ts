import type { Article } from '../../types/index.ts';

// 文件意图：维护《Joseph Lister and the Birth of Antiseptic Surgery: Turning Germ Theory into Medical Practice》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00428 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00428',
  slug: 'joseph-lister-and-the-birth-of-antiseptic-surgery-turning-germ-theory-into-medical-practice',
  title: 'Joseph Lister and the Birth of Antiseptic Surgery: Turning Germ Theory into Medical Practice',
  subtitle: 'How a Scottish surgeon transformed operating rooms with science',
  summary: 'The story of Joseph Lister’s fight against infection, turning Pasteur’s germ theory into practical antisepsis.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the mid‑19th century, hospitals were grim places where postoperative infections claimed more lives than the surgeries themselves. Young surgeons learned to “clean” wounds by simply washing them with water, unaware that invisible agents were multiplying on every instrument. It was this bleak backdrop that motivated a Scottish physician named <span class="vocab" data-cn="约瑟夫·李斯特">Joseph Lister</span> to search for a scientific solution.`,
    `Lister’s breakthrough began when he read the work of French chemist <span class="vocab" data-cn="路易·巴斯德">Louis Pasteur</span>. Pasteur had demonstrated that microorganisms caused fermentation and spoilage, laying the foundation for what would become known as <span class="vocab" data-cn="细菌学">bacteriology</span>. Lister realized that if microbes could ruin wine, they might also be responsible for surgical infections. This insight sparked his determination to apply germ theory directly to the operating theater.`,
    `The key material Lister chose was <span class="vocab" data-cn="酚（又称防腐酸）">carbolic acid</span>, a potent antiseptic already used in sewage treatment. He began by soaking dressings and suturing threads in a dilute solution, then applying them to wounds after amputations. To his astonishment, the rate of postoperative gangrene fell dramatically—from over 40 % in his hospital’s wards to less than 10 % in cases where carbolic acid was used.`,
    `Lister did not stop at dressings. He devised a whole <span class="vocab" data-cn="无菌">aseptic</span> protocol: spraying the air with a fine mist of carbolic acid, wiping down instruments, and even installing a rudimentary ventilation system to carry away contaminated fumes. These measures were radical; many senior surgeons scoffed, calling his methods “over‑cautious” and fearing that the strong smell would harm patients more than help them.`,
    `The turning point came in 1867 when Lister published his findings in The Lancet under the title “Antiseptic Principle of the Practice of Surgery.” He presented detailed case studies showing reduced mortality, and he meticulously described how to prepare the carbolic solution (a mixture of one part phenol to thirty parts water). His clear, data‑driven argument gradually won over skeptics, especially after a series of high‑profile operations—such as the successful removal of an infected thigh abscess—demonstrated the method’s reliability.`,
    `Lister’s influence spread quickly beyond Britain. In Germany, surgeon <span class="vocab" data-cn="卡尔·克劳斯">Carl Koller</span> adapted Lister’s antiseptic techniques to ophthalmic surgery, dramatically lowering rates of postoperative eye infections. Across the Atlantic, American physicians like William Halsted incorporated carbolic acid sprays into their own operating rooms, paving the way for modern sterile technique. By the early 20th century, the term “asepsis” had replaced “antiseptic” as surgeons focused on preventing contamination altogether rather than merely killing germs after they arrived.`,
    `Today, Lister’s legacy lives in every surgical suite: disposable gloves, sterilized instruments, and rigorous hand‑washing protocols all trace their lineage back to his daring experiments. While modern medicine now relies on antibiotics and advanced sterilization technologies, the core principle remains unchanged—protecting patients by controlling invisible microbial threats. In this way, Joseph Lister turned a theoretical insight about germs into a practical, life‑saving discipline that reshaped the very definition of surgery.`,
  ],
  vocabulary: [
    { word: 'Joseph Lister', cn: '约瑟夫·李斯特' },
    { word: 'Louis Pasteur', cn: '路易·巴斯德' },
    { word: 'bacteriology', cn: '细菌学' },
    { word: 'carbolic acid', cn: '酚（又称防腐酸）' },
    { word: 'aseptic', cn: '无菌' },
    { word: 'mortality', cn: '死亡率' },
    { word: 'antiseptic', cn: '抗菌的，防腐的' },
    { word: 'pathology', cn: '病理学' },
  ],
};

export default article;
