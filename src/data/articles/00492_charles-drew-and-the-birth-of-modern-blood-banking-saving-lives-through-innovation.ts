import type { Article } from '../../types/index.ts';

// 文件意图：维护《Charles Drew and the Birth of Modern Blood Banking: Saving Lives Through Innovation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00492 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00492',
  slug: 'charles-drew-and-the-birth-of-modern-blood-banking-saving-lives-through-innovation',
  title: 'Charles Drew and the Birth of Modern Blood Banking: Saving Lives Through Innovation',
  subtitle: 'How one surgeon’s research reshaped transfusion medicine',
  summary: 'The story of Charles R. Drew, his breakthroughs in plasma preservation, and the lasting impact on global blood banking.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1939, a young African‑American surgeon named <span class="vocab" data-cn="查尔斯·R·德鲁">Charles R. Drew</span> arrived at the University of Michigan with a bold question: could blood be stored safely for weeks rather than hours? At that time, hospitals relied on whole‑blood donations that spoiled quickly, limiting emergency care and wartime preparedness.`,
    `Drawing on his background in chemistry and physiology, Drew began experimenting with <span class="vocab" data-cn="血浆——血液中不含细胞的液体部分">plasma</span>, the clear component of blood that carries proteins, hormones, and clotting factors. He discovered that by separating plasma from red cells and adding a modest amount of <span class="vocab" data-cn="防止血液凝固的化学物质">anticoagulant</span> such as citrate‑phosphate‑dextrose (CPD), the fluid could be frozen at –30 °C without losing its therapeutic properties.`,
    `This process, later termed “cryopreservation,” was revolutionary. Prior attempts at freezing whole blood had shattered red cells, rendering them useless. Drew’s method preserved the delicate balance of <span class="vocab" data-cn="血红蛋白——携带氧气的蛋白质">hemoglobin</span> and clotting factors, allowing plasma to be stored for up to a year. The breakthrough was first demonstrated in a controlled <span class="vocab" data-cn="临床试验">clinical trial</span> at the university hospital, where patients with severe hemorrhage recovered after receiving Drew’s frozen plasma.</`,
    `When World War II erupted, the United States military faced a dire shortage of blood for wounded soldiers. The Army Medical Corps turned to Drew’s research and commissioned him to establish the first large‑scale blood bank in Chicago. Within months, his team collected, processed, and shipped thousands of units of frozen plasma across Europe and the Pacific, dramatically reducing mortality from battlefield injuries.`,
    `Beyond the war, Drew’s work sparked a global movement toward organized <span class="vocab" data-cn="输血医学——研究和实践血液输注的学科">transfusion medicine</span>. He advocated for standardized donor screening, meticulous record‑keeping, and equitable access to blood products. His 1942 publication, “Banked Blood,” outlined protocols that became the foundation of modern blood banking regulations in the United States and many other countries.`,
    `Tragically, Drew’s life was cut short in 1950 when he died in a car accident while returning from a conference on plasma therapy. Yet his legacy endured: the American Red Cross adopted his freezing technique, and today more than 100 million units of blood components are processed worldwide each year—most following the principles he established.`,
    `Modern innovations such as pathogen‑reduction technologies and synthetic blood substitutes still trace their lineage to Drew’s original insight that blood could be treated as a storable commodity rather than a fleeting resource. By turning a fragile biological fluid into a reliable medical product, Charles Drew not only saved countless lives during his era but also laid the groundwork for the life‑saving infrastructure we rely on today.`,
  ],
  vocabulary: [
    { word: 'Charles R. Drew', cn: '查尔斯·R·德鲁' },
    { word: 'plasma', cn: '血浆——血液中不含细胞的液体部分' },
    { word: 'anticoagulant', cn: '防止血液凝固的化学物质' },
    { word: 'cryopreservation', cn: '冷冻保存技术' },
    { word: 'hemoglobin', cn: '血红蛋白——携带氧气的蛋白质' },
    { word: 'clinical trial', cn: '临床试验' },
    { word: 'transfusion medicine', cn: '输血医学——研究和实践血液输注的学科' },
  ],
};

export default article;
