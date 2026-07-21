import type { Article } from '../../types/index.ts';

// 文件意图：维护《Thomas Davenport and the Dawn of Electric Vehicles: America’s First Practical Electric Car》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00427 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00427',
  slug: 'thomas-davenport-and-the-dawn-of-electric-vehicles-america-s-first-practical-electric-car',
  title: 'Thomas Davenport and the Dawn of Electric Vehicles: America’s First Practical Electric Car',
  subtitle: 'How a Vermont blacksmith sparked the first electric carriage in the 1830s',
  summary: 'An engaging look at Thomas Davenport’s pioneering work on the earliest practical electric car and its legacy.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In an era when steam‑powered locomotives roared across America, a quiet curiosity was brewing in a modest blacksmith shop in Brandon, Vermont. Thomas Davenport, a self‑taught mechanic, spent his evenings tinkering with the invisible forces of <span class="vocab" data-cn="磁力">magnetism</span>. Little did he know that his experiments would lay the groundwork for the first electric carriage capable of moving under its own power—a modest but historic step toward today’s sleek electric vehicles.`,
    `Born in 1802, Davenport grew up amid the burgeoning industrial revolution. By the early 1830s he had become fascinated with the newly discovered principles of <span class="vocab" data-cn="直流电">direct current (DC)</span> and how electrical energy could be transformed into mechanical motion. In 1834 he succeeded in constructing what is widely recognized as America’s first functional <span class="vocab" data-cn="电动机">electric motor</span>, a device that would later power his experimental carriage.`,
    `Davenport’s motor was ingeniously simple yet groundbreaking. He wound copper wire around an iron core to create an <span class="vocab" data-cn="电磁铁">electromagnet</span> and mounted it on a rotating armature. A primitive <span class="vocab" data-cn="换向器">commutator</span> switched the direction of current each half‑turn, ensuring continuous rotation. The whole assembly was powered by a wet‑cell <span class="vocab" data-cn="电池">battery</span> that supplied steady DC voltage—a remarkable achievement given the era’s limited electrochemical knowledge.`,
    `With his motor humming, Davenport built a small carriage—essentially a wooden platform fitted with two wheels and a rudimentary steering mechanism. He laid out a circular track in his workshop yard and, to the amazement of onlookers, the vehicle rolled forward without any horse or steam engine. Though limited to short distances and low speeds, this demonstration proved that an <span class="vocab" data-cn="电路">electric circuit</span> could directly drive a wheeled vehicle, earning it the distinction of being America’s first practical electric car.`,
    `The triumph was tempered by harsh realities. The batteries of Davenport’s day were heavy and stored only modest amounts of energy, resulting in poor <span class="vocab" data-cn="牵引力">traction</span> and a range measured in mere minutes of operation. Moreover, the lack of public charging infrastructure made widespread adoption impossible. Undeterred, Davenport secured a patent for his motor in 1837, but he soon found himself embroiled in legal battles with the U.S. Patent Office over the originality of his claims—a struggle that drained his resources and limited further development.`,
    `Despite these setbacks, Davenport’s work resonated through the decades. Inventors such as William Morrison in the 1890s drew inspiration from early electric propulsion concepts to build larger, more practical vehicles for city streets. By the turn of the twentieth century electric taxis and delivery carts became common in urban centers like New York and London, echoing Davenport’s vision of quiet, emission‑free transport. The ebb and flow of interest in electric cars continued until the late 20th century, when advances in battery chemistry revived the dream that began in a Vermont workshop.`,
    `Today, as modern manufacturers race to perfect lithium‑ion packs and autonomous driving systems, Davenport’s modest carriage reminds us that technological revolutions often start with humble experiments. His blend of curiosity, hands‑on engineering, and willingness to challenge prevailing power sources offers a timeless lesson: breakthroughs arise not only from grand laboratories but also from the determined tinkering of individuals daring to imagine a cleaner, quieter future.`,
  ],
  vocabulary: [
    { word: 'electric motor', cn: '电动机' },
    { word: 'direct current (DC)', cn: '直流电' },
    { word: 'battery', cn: '电池' },
    { word: 'electromagnet', cn: '电磁铁' },
    { word: 'commutator', cn: '换向器' },
    { word: 'traction', cn: '牵引力' },
  ],
};

export default article;
