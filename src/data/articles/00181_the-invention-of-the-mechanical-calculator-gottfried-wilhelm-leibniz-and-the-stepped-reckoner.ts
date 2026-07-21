import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the Mechanical Calculator: Gottfried Wilhelm Leibniz and the Stepped Reckoner》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00181 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00181',
  slug: 'the-invention-of-the-mechanical-calculator-gottfried-wilhelm-leibniz-and-the-stepped-reckoner',
  title: 'The Invention of the Mechanical Calculator: Gottfried Wilhelm Leibniz and the Stepped Reckoner',
  subtitle: 'How a 17th‑century polymath built a precursor to modern computers',
  summary: 'Leibniz’s stepped reckoner turned abstract arithmetic into tangible motion, laying groundwork for today’s digital machines.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In an age when most calculations were performed with ink‑and‑paper sloppiness, a single idea could change the rhythm of scientific work.  When <span class="vocab" data-cn="机械计算器">mechanical calculator</span> entered the imagination of scholars, it promised to free minds from tedious counting and open doors to more ambitious mathematics.  Among those enchanted by this promise was Gottfried Wilhelm Leibniz, a German philosopher‑mathematician whose restless curiosity led him to design one of the earliest true computing machines.`,
    `Leibniz (1646–1716) is best known today for co‑inventing calculus and for his philosophical quest for a universal language.  Yet his fascination with numbers ran deeper than theory; he wanted a device that could execute <span class="vocab" data-cn="算术运算">arithmetical operations</span> as reliably as a clock’s tick.  Earlier attempts, such as Blaise Pascal’s “Pascaline,” demonstrated that gears could add, but they fell short of handling multiplication or division without cumbersome manual intervention.`,
    `Inspired by these limitations, Leibniz set out to create a machine that would not only add and subtract but also multiply and divide automatically.  His solution was the <span class="vocab" data-cn="逐级计数器">stepped reckoner</span>, a compact apparatus built around a series of interlocking gears and levers.  The heart of the device was a clever arrangement known as the “stepped drum,” which allowed each digit to be processed in turn, much like how modern computers scan bits sequentially.`,

    `The stepped drum consisted of a cylindrical shaft covered with a stack of <span class="vocab" data-cn="齿轮">cogwheel</span> teeth of varying lengths.  When the operator turned a crank, each tooth engaged a corresponding gear on the counting wheels, advancing them by a number of positions equal to the digit entered.  This ingenious use of <span class="vocab" data-cn="精密工程">precision engineering</span> meant that a single rotation could simultaneously affect multiple decimal places, enabling rapid addition and subtraction without resetting the machine after each operation.`,
    `Leibniz’s design also incorporated mechanisms for multiplication and division by repeatedly applying the addition process.  By rotating the crank in a controlled sequence, the user could perform repeated additions—effectively multiplying numbers—and then reverse the steps to extract quotients.  Although the device still required manual input of each digit, it demonstrated that a purely mechanical system could handle the full suite of basic arithmetic, foreshadowing later breakthroughs such as Charles Babbage’s difference engine.`,

    `Beyond its immediate practical value, the stepped reckoner embodied Leibniz’s broader intellectual vision.  Earlier in his career he had championed the <span class="vocab" data-cn="二进制">binary</span> numeral system, arguing that all knowledge could be reduced to combinations of zeros and ones—a concept that would become the foundation of digital computing centuries later.  The reckoner’s reliance on discrete gear positions mirrored this binary thinking, translating abstract numbers into concrete mechanical states.`,
    `Although only a handful of working prototypes survived, Leibniz’s invention left an indelible mark on the history of computation.  It proved that machines could go beyond simple addition, inspiring future inventors to pursue ever more sophisticated automata.  Today’s calculators, computers, and even smartphones trace part of their lineage back to the modest yet revolutionary stepped drum that turned Leibniz’s philosophical musings into moving metal.`,
  ],
  vocabulary: [
    { word: 'mechanical calculator', cn: '机械计算器' },
    { word: 'arithmetical operations', cn: '算术运算' },
    { word: 'stepped reckoner', cn: '逐级计数器' },
    { word: 'cogwheel', cn: '齿轮' },
    { word: 'precision engineering', cn: '精密工程' },
    { word: 'binary', cn: '二进制' },
  ],
};

export default article;
