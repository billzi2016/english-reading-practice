import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Mystery of the Antikythera Mechanism: Unraveling an Ancient Astronomical Clock》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00039 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00039',
  slug: 'the-mystery-of-the-antikythera-mechanism-unraveling-an-ancient-astronomical-clock',
  title: 'The Mystery of the Antikythera Mechanism: Unraveling an Ancient Astronomical Clock',
  subtitle: 'How a sunken bronze device rewrote our view of ancient technology',
  summary: 'A dive into the discovery, reconstruction, and lasting impact of the world’s oldest known mechanical computer.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In 1901 a group of sponge divers off the coast of the tiny Greek island of Antikythera hauled up a cargo of ancient amphorae, but among the broken pottery lay something far more puzzling—a corroded block of bronze riddled with tiny holes. This find sparked an immediate frenzy in the world of <span class="vocab" data-cn="考古学">archaeology</span>, because no one had ever seen a device that looked like a clock yet was clearly far older than any medieval time‑keeper. The object would later be named the <span class="vocab" data-cn="安蒂基拉机械">Antikythera Mechanism</span>, and its mystery has endured for more than a century.`,
    `When scholars finally managed to peer inside, they discovered an intricate network of interlocking <span class="vocab" data-cn="齿轮">gears</span> made of bronze. Unlike simple gear trains used in water clocks, these gears varied in size and tooth count with astonishing precision, allowing the machine to model complex astronomical cycles. Modern researchers describe it as a primitive <span class="vocab" data-cn="机械计算机">mechanical computer</span>, capable of performing calculations that would otherwise require lengthy manual tables. The sheer sophistication suggested a level of engineering thought previously attributed only to the industrial age.`,
    `The primary function of the device appears to have been tracking lunar and solar movements. One set of gears encodes the <span class="vocab" data-cn="梅托尼周期">metonic cycle</span>, a 19‑year period after which the phases of the Moon repeat on the same calendar dates. Another dial predicts upcoming <span class="vocab" data-cn="日食预测">eclipse prediction</span> events by modeling the intricate dance between the Sun, Earth, and Moon. By turning a crank, the user could align pointers to display the current position of celestial bodies, effectively turning abstract astronomical data into a tangible visual aid.`,
    `The path from corroded relic to working replica was anything but straightforward. In the 1970s, physicist <span class="vocab" data-cn="希腊化时期的">Hellenistic</span> scholar Derek J. de Solla Price proposed that the Mechanism represented a lost tradition of Greek engineering. Decades later, a team led by Michael Wright employed high‑resolution X‑ray computed tomography (<span class="vocab" data-cn="CT扫描">CT scans</span>) to map every internal component without dismantling the artifact. Their digital reconstruction revealed missing gears and even suggested that a now‑lost “planetary” dial may have displayed the positions of known planets, hinting at an even broader scope than previously imagined.`,
    `Beyond its immediate astronomical purpose, the device functions as an early example of an <span class="vocab" data-cn="天文钟">astronomical clock</span>—a machine that translates celestial mechanics into mechanical motion. Its existence forces historians to rethink the timeline of technological development, showing that concepts like gear ratios and differential gearing were mastered over two thousand years before similar ideas resurfaced in medieval Europe. The Mechanism thus bridges a gap between ancient philosophy and modern engineering, illustrating how curiosity about the heavens can drive practical invention.`,
    `Despite decades of study, many questions remain unanswered. Several fragments recovered from the wreck have never been definitively placed within the gear train, leaving room for speculation about additional functions such as tide prediction or calendrical adjustments for different Greek city‑states. Some scholars even argue that the device served a ceremonial role, perhaps used by priests to demonstrate divine order through precise mechanical motion. The mystery endures, inviting each new generation of scientists and historians to revisit the bronze gears with fresh eyes.`,
    `Today the <span class="vocab" data-cn="安蒂基拉机械">Antikythera Mechanism</span> resides in the National Archaeological Museum of Athens, where a 3‑D printed replica allows visitors to turn its crank and watch the ancient cosmos come alive. Its story has inspired everything from modern clockmaking workshops to science‑fiction novels, reminding us that the line between myth and technology is often thinner than we think. As researchers continue to apply cutting‑edge imaging techniques, the Mechanism may yet reveal more secrets about a world where art, astronomy, and engineering were inseparable.`,
  ],
  vocabulary: [
    { word: 'Antikythera Mechanism', cn: '安蒂基拉机械' },
    { word: 'gears', cn: '齿轮' },
    { word: 'metonic cycle', cn: '梅托尼周期' },
    { word: 'eclipse prediction', cn: '日食预测' },
    { word: 'Hellenistic', cn: '希腊化时期的' },
    { word: 'mechanical computer', cn: '机械计算机' },
    { word: 'archaeology', cn: '考古学' },
    { word: 'astronomical clock', cn: '天文钟' },
  ],
};

export default article;
