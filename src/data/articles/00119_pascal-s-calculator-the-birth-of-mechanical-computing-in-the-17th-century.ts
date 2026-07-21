import type { Article } from '../../types/index.ts';

// 文件意图：维护《Pascal’s Calculator: The Birth of Mechanical Computing in the 17th Century》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00119 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00119',
  slug: 'pascal-s-calculator-the-birth-of-mechanical-computing-in-the-17th-century',
  title: 'Pascal’s Calculator: The Birth of Mechanical Computing in the 17th Century',
  subtitle: 'How Blaise Pascal turned arithmetic into a moving machine.',
  summary: 'A narrative of the invention, design challenges, and legacy of the Pascaline, the first widely known mechanical calculator.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1640s, the French mathematician <span class="vocab" data-cn="巴斯卡尔">Blaise Pascal</span> was not only fascinated by geometry but also haunted by a personal tragedy: his father’s frequent trips to collect taxes often left the family short of cash. Determined to ease the burden of manual addition, Pascal began sketching a device that could perform arithmetic with the turn of a wheel, laying the groundwork for what would become known as the <span class="vocab" data-cn="巴斯卡尔的机械计算器">Pascaline</span>.`,
    `The core of the Pascaline was a sophisticated <span class="vocab" data-cn="齿轮传动机构">gear train</span> that translated each digit entered on a series of rotating dials into a corresponding movement in the next higher place value. By arranging twelve interlocking wheels, each representing one decimal digit, Pascal managed to implement the <span class="vocab" data-cn="十进制计数系统">decimal system</span> mechanically—a concept that had previously been confined to paper and mental calculation.`,
    `Constructing such a precise mechanism in the 17th century was no small feat. Pascal collaborated with skilled <span class="vocab" data-cn="精密仪器制造商">instrument makers</span> in Paris, who employed emerging <span class="vocab" data-cn="金属铸造技术">metal casting</span> methods to produce the tiny brass wheels and pins required for reliable operation. Each wheel featured a series of notches; when a digit rolled past “9”, a small lever—effectively an early <span class="vocab" data-cn="计数器">counter</span>—triggered the next wheel to advance by one step, mimicking the carry operation in modern arithmetic.`,
    `Pascal’s first public demonstration took place in 1642 at the Royal Academy of Sciences, where the device astonished scholars with its ability to add and subtract numbers up to five digits long. Yet the machine was not without flaws: the delicate springs that returned the dials to zero could lose tension over time, and the intricate gear alignment demanded frequent calibration. Despite these setbacks, Pascal continued refining his design, eventually producing a version with eight digit wheels that could handle larger calculations.`,
    `The impact of the Pascaline extended far beyond its immediate practical use. It inspired contemporaries such as Gottfried Wilhelm Leibniz, who would later develop his own stepped reckoner, and it laid an early conceptual foundation for the field of <span class="vocab" data-cn="机械计算机">mechanical computer</span> engineering. Historians often point to the Pascaline as a tangible embodiment of the Enlightenment’s belief that human ingenuity could translate abstract mathematics into concrete, repeatable processes.`,
    `While only about twenty original Pascalines survive today—most housed in museums in Paris, London, and New York—their legacy lives on in modern computing devices. The principle of cascading carries, for instance, is echoed in the binary adders that form the heart of every digital processor. Moreover, the aesthetic elegance of turning a wheel to obtain an answer resonates with contemporary designers who seek tactile interaction in an increasingly screen‑driven world.`,
    `In recent centuries, scholars have revisited Pascal’s invention not merely as a curiosity but as a milestone marking humanity’s first systematic attempt to mechanize thought. By converting the abstract act of addition into a series of physical motions, the Pascaline demonstrated that computation could be externalized from the mind, foreshadowing the eventual rise of computers that now perform billions of operations per second—an evolution that began with a modest brass wheel in 1642.`,
  ],
  vocabulary: [
    { word: 'Blaise Pascal', cn: '巴斯卡尔' },
    { word: 'Pascaline', cn: '巴斯卡尔的机械计算器' },
    { word: 'gear train', cn: '齿轮传动机构' },
    { word: 'decimal system', cn: '十进制计数系统' },
    { word: 'instrument maker', cn: '精密仪器制造商' },
    { word: 'metal casting', cn: '金属铸造技术' },
    { word: 'counter', cn: '计数器' },
    { word: 'mechanical computer', cn: '机械计算机' },
  ],
};

export default article;
