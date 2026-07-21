import type { Article } from '../../types/index.ts';

// 文件意图：维护《Edward Jenner and the Birth of Vaccination: Fighting Smallpox in the 18th Century》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00335 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00335',
  slug: 'edward-jenner-and-the-birth-of-vaccination-fighting-smallpox-in-the-18th-century',
  title: 'Edward Jenner and the Birth of Vaccination: Fighting Smallpox in the 18th Century',
  subtitle: 'How a country doctor turned milkmaids into heroes and changed medical history.',
  summary: 'The story of Edward Jenner’s breakthrough with cowpox that laid the foundation for modern vaccination.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1796, a quiet English village called Berkeley was buzzing with fear. The dreaded <span class="vocab" data-cn="天花">smallpox</span> epidemic had already claimed thousands of lives across Europe, leaving survivors scarred for life. Amid this panic, a modest country doctor named Edward Jenner observed something peculiar: the local milkmaids who tended to cows seemed oddly resistant to the disease.`,
    `Jenner’s curiosity was sparked by an older practice known as <span class="vocab" data-cn="接种法">variolation</span>. Introduced from Ottoman Turkey and popularized in England by Lady Mary Wortley Montagu, variolation involved deliberately inserting material from a smallpox sore into healthy skin. Though it often produced a milder infection, the method still carried a significant risk of death, prompting physicians to search for safer alternatives.`,
    `One crisp morning, Jenner asked James Phipps, an eight‑year‑old shepherd’s son, to receive material taken from a cow with a mild disease called <span class="vocab" data-cn="牛痘">cowpox</span>. After the boy developed a slight fever and a few blisters, he recovered quickly. Weeks later, Jenner exposed Phipps to genuine smallpox virus; remarkably, the child showed no symptoms at all. This experiment demonstrated that cowpox could confer lasting <span class="vocab" data-cn="免疫">immunity</span> against smallpox without the deadly consequences of variolation.`,
    `The science behind Jenner’s observation was simple yet profound. When a harmless pathogen like cowpox entered the body, it presented its unique <span class="vocab" data-cn="抗原">antigen</span> to the immune system. The body then produced specialized proteins—antibodies—that remembered the invader. Later, when the far more lethal smallpox virus appeared, those antibodies recognized and neutralized it swiftly, preventing illness. This principle of “training” the immune system is the cornerstone of modern <span class="vocab" data-cn="接种">inoculation</span> practices.`,
    `Word of Jenner’s success spread rapidly. In 1798, the Royal Society awarded him a gold medal, and by 1800 his method—coined “vaccination” from the Latin *vacca* meaning cow—was being practiced in hospitals across Britain and beyond. While some skeptics feared that introducing animal material into humans was unnatural, the tangible reduction in smallpox cases soon silenced most critics, turning vaccination into a public health priority during an era of frequent <span class="vocab" data-cn="流行病">epidemic</span> outbreaks.`,
    `The ripple effects of Jenner’s work extended far beyond his lifetime. Over the next two centuries, scientists refined vaccine production, adding killed or attenuated forms of viruses and eventually harnessing recombinant DNA technology. The World Health Organization launched an intensive eradication campaign in 1967, culminating in 1980 when smallpox became the first disease ever declared eradicated—a triumph that traces its lineage directly back to Jenner’s humble experiment with a cow‑derived virus.`,
    `Today, every modern vaccine—whether against polio, influenza, or COVID‑19—relies on the same basic idea Jenner proved: expose the immune system safely, let it learn, and then protect the body from future attacks. His legacy reminds us that curiosity, careful observation, and a willingness to challenge established practices can reshape humanity’s relationship with disease forever.`,
  ],
  vocabulary: [
    { word: 'smallpox', cn: '天花' },
    { word: 'variolation', cn: '接种法' },
    { word: 'cowpox', cn: '牛痘' },
    { word: 'immunity', cn: '免疫' },
    { word: 'antigen', cn: '抗原' },
    { word: 'inoculation', cn: '接种' },
    { word: 'epidemic', cn: '流行病' },
  ],
};

export default article;
