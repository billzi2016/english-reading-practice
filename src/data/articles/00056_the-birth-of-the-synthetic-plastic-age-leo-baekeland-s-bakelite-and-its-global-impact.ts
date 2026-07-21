import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of the Synthetic Plastic Age: Leo Baekeland’s Bakelite and Its Global Impact》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00056 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00056',
  slug: 'the-birth-of-the-synthetic-plastic-age-leo-baekeland-s-bakelite-and-its-global-impact',
  title: 'The Birth of the Synthetic Plastic Age: Leo Baekeland’s Bakelite and Its Global Impact',
  subtitle: 'How a laboratory breakthrough reshaped industry, design, and daily life.',
  summary: 'Explore how Baekeland’s invention of Bakelite sparked the modern plastics era and transformed societies worldwide.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `At the turn of the twentieth century, factories still relied on natural materials such as ivory, shellac, and wood for everything from telephone housings to jewelry. Into this world stepped a Belgian‑American chemist named <span class="vocab" data-cn="列奥·贝克兰德">Leo Baekeland</span>, whose curiosity about the chemistry of everyday substances would soon give birth to an entirely new class of materials.`,
    `Before his famous polymer, Baekeland had already made a name for himself by inventing <span class="vocab" data-cn="速显相纸">Velox photographic paper</span> in 1893, a product that dramatically shortened the time needed to develop photographs. The commercial success of Velox taught him the power of turning laboratory discoveries into mass‑market goods, and it also funded his next ambitious experiment: creating a synthetic substance that could replace costly natural resins.`,
    `In 1907 Baekeland began mixing <span class="vocab" data-cn="酚">phenol</span> with <span class="vocab" data-cn="甲醛">formaldehyde</span> under controlled heat and pressure. After countless trials, he stumbled upon a material that hardened irreversibly when heated—a hallmark of a <span class="vocab" data-cn="热固性树脂">thermosetting resin</span>. He named this new substance “Bakelite,” after himself, marking the first fully synthetic plastic that could be molded into any shape and retain its form forever.`,
    `The properties of Bakelite were revolutionary. It was <span class="vocab" data-cn="耐热的">heat‑resistant</span>, <span class="vocab" data-cn="电绝缘的">electrically nonconductive</span>, and could be produced in large quantities at low cost. These traits made it ideal for the burgeoning electrical industry: radio casings, telephone sockets, and early automobile components were soon being cast from Bakelite, dramatically reducing reliance on scarce natural resources.`,
    `Beyond its technical merits, Bakelite reshaped <span class="vocab" data-cn="工业设计">industrial design</span>. Because it could be injected into molds, manufacturers could create intricate shapes that were previously impossible or prohibitively expensive to machine. This capability sparked a wave of affordable consumer goods—chewable pens, kitchenware, and even jewelry—bringing what had once been luxury items within reach of the average household.`,
    `The impact was not confined to the United States. By the 1920s factories producing Bakelite sprang up across Europe, Japan, and South America, forming one of the earliest <span class="vocab" data-cn="全球供应链">global supply chains</span> for a synthetic material. During World War II the plastic’s durability made it valuable for military applications such as aircraft instrument panels and radar housings, further cementing its status as an indispensable industrial resource.`,
    `Today Bakelite is remembered less for everyday use—having been superseded by lighter, more flexible plastics—but more for opening the door to the modern <span class="vocab" data-cn="合成塑料时代">synthetic plastic age</span>. Baekeland’s breakthrough demonstrated that chemistry could engineer materials with tailor‑made properties, a principle that underlies everything from aerospace composites to biodegradable polymers. His legacy lives on in every product molded from polymer resin, reminding us how a single laboratory discovery can reshape the world.`,
  ],
  vocabulary: [
    { word: 'Leo Baekeland', cn: '列奥·贝克兰德' },
    { word: 'Velox photographic paper', cn: '速显相纸' },
    { word: 'phenol', cn: '酚' },
    { word: 'formaldehyde', cn: '甲醛' },
    { word: 'thermosetting resin', cn: '热固性树脂' },
    { word: 'heat‑resistant', cn: '耐热的' },
    { word: 'electrically nonconductive', cn: '电绝缘的' },
    { word: 'industrial design', cn: '工业设计' },
    { word: 'global supply chain', cn: '全球供应链' },
    { word: 'synthetic plastic age', cn: '合成塑料时代' },
  ],
};

export default article;
