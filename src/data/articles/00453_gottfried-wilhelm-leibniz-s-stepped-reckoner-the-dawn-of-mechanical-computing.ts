import type { Article } from '../../types/index.ts';

// 文件意图：维护《Gottfried Wilhelm Leibniz’s Stepped Reckoner: The Dawn of Mechanical Computing》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00453 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00453',
  slug: 'gottfried-wilhelm-leibniz-s-stepped-reckoner-the-dawn-of-mechanical-computing',
  title: 'Gottfried Wilhelm Leibniz’s Stepped Reckoner: The Dawn of Mechanical Computing',
  subtitle: 'How a 17th‑century polymath built the first practical calculating machine.',
  summary: 'Explore the story behind Leibniz’s Stepped Reckoner and its lasting influence on modern computers.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the bustling intellectual salons of late‑17th‑century Europe, <span class="vocab" data-cn="德国哲学家、数学家和发明家">Gottfried Wilhelm Leibniz</span> was already famous for co‑inventing calculus. Yet his curiosity extended far beyond abstract symbols; he dreamed of a device that could relieve humans from tedious arithmetic. By the 1670s, merchants and astronomers were struggling with long calculations performed by hand, and Leibniz saw an opportunity to apply his theoretical work on the <span class="vocab" data-cn="二进制数字系统">binary numeral system</span> to a tangible machine.`,
    `Leibniz’s breakthrough came in 1672 when he conceived the principle of the “<span class="vocab" data-cn="阶梯式计数器">Stepped Reckoner</span>.” The core idea was simple yet ingenious: a rotating <span class="vocab" data-cn="齿轮">cogwheel</span> with teeth of varying lengths could represent numbers from 0 to 9. As the wheel turned, each tooth would engage a corresponding lever, adding or subtracting a unit value automatically. This mechanism allowed the machine to perform repeated addition and subtraction without manual intervention—a fundamental step toward automation.`,
    `Constructing such a device was no small feat in an era before precision machining. Leibniz collaborated with skilled instrument makers in Hanover and later in Paris, insisting on tolerances that were unprecedented for the time. The resulting apparatus featured a series of stacked <span class="vocab" data-cn="阶梯齿轮">Leibniz wheels</span>, each responsible for one decimal place. By turning a crank, an operator could input numbers, and a set of levers would display the result on a row of dials. The machine could also multiply by repeated addition, though it required careful handling to avoid jamming.`,
    `When Leibniz finally demonstrated his prototype in 1694, the audience was astonished. He showed how the device could add two eight‑digit numbers in seconds—a task that would have taken a clerk minutes of painstaking work. Contemporary accounts describe the moment as “a glimpse of a future where calculation is no longer bound to human fatigue.” Although the original Stepped Reckoner has not survived, surviving sketches and descriptions reveal a level of engineering sophistication that prefigured later inventions.`,
    `The impact of the Stepped Reckoner extended far beyond its immediate capabilities. It inspired subsequent inventors such as <span class="vocab" data-cn="英国发明家，机械计算机先驱">Charles Babbage</span>, who cited Leibniz’s work when designing his Difference Engine in the 1820s. Moreover, the concept of a stepped drum—later refined into the “<span class="vocab" data-cn="阶梯式计数器">stepped drum</span>” used in early mechanical calculators by Thomas de Colmar and others—became a standard component in commercial computing devices well into the 20th century. In this way, Leibniz’s vision bridged the gap between abstract mathematics and practical engineering.`,
    `Beyond its technical legacy, the Stepped Reckoner embodied a philosophical shift. Leibniz believed that “the art of calculation should be reduced to a mechanical process,” reflecting his broader conviction that reason could be encoded in physical form. This belief foreshadowed modern ideas about <span class="vocab" data-cn="算法">algorithmic thinking</span> and the separation of software (the set of rules) from hardware (the machine executing them). The Reckoner thus stands as an early illustration of the principle that computation is a universal activity, not confined to human minds alone.`,
    `Today, museums in Hanover and Paris display replicas of Leibniz’s calculator, allowing visitors to turn the crank and watch numbers dance across the dials. For students of computer history, the Stepped Reckoner serves as a reminder that today’s digital computers rest on centuries‑old mechanical ingenuity. By turning gears and levers, Leibniz laid down one of the first concrete pathways from arithmetic theory to the programmable machines that now power our world.`,
  ],
  vocabulary: [
    { word: 'Gottfried Wilhelm Leibnix', cn: '德国哲学家、数学家和发明家' },
    { word: 'binary numeral system', cn: '二进制数字系统' },
    { word: 'Stepped Reckoner', cn: '阶梯式计数器' },
    { word: 'cogwheel', cn: '齿轮' },
    { word: 'Leibniz wheels', cn: '阶梯齿轮' },
    { word: 'stepped drum', cn: '阶梯式计数器（机械部件）' },
    { word: 'Charles Babbage', cn: '英国发明家，机械计算机先驱' },
    { word: 'algorithmic thinking', cn: '算法思维' },
  ],
};

export default article;
