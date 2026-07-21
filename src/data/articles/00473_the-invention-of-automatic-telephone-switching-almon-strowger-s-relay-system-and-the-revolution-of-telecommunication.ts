import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of Automatic Telephone Switching: Almon Strowger’s Relay System and the Revolution of Telecommunication》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00473 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00473',
  slug: 'the-invention-of-automatic-telephone-switching-almon-strowger-s-relay-system-and-the-revolution-of-telecommunication',
  title: 'The Invention of Automatic Telephone Switching: Almon Strowger’s Relay System and the Revolution of Telecommunication',
  subtitle: 'How a small‑town barber sparked a global communications breakthrough',
  summary: 'Explore how Almon Strowger turned frustration into the first automatic telephone switch, reshaping the telecom landscape.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1890s, most telephone networks relied on human operators who manually connected callers by plugging cords into a <span class="vocab" data-cn="电话交换机">telephone exchange</span>. In La Porte, Indiana, Almon Strowger, a modest barber, grew increasingly irritated when his customers’ calls were repeatedly routed through an operator who seemed to favor a rival shop. Legend has it that the operator would “hang up” on Strowger’s wife after she placed a call, prompting him to wonder whether a machine could do the job more impartially.`,
    `Strowger’s answer was an <span class="vocab" data-cn="继电器">relay</span>-based system. A relay is an <span class="vocab" data-cn="机电的">electromechanical</span> device that uses an electromagnet to move a set of contacts, thereby opening or closing an electrical circuit without human intervention. By arranging many relays in a clever pattern, Strowger believed he could route calls automatically, eliminating the need for a person to listen and decide.`,
    `The prototype he built in 1891 was called the “step‑by‑step” switch, later known as the <span class="vocab" data-cn="斯特罗格开关">Strowger switch</span>. When a caller lifted the handset, a rotary dial sent a series of electrical pulses down the line—each pulse representing one digit. These pulses drove the relay to “step” up or down through a stack of contacts, selecting the appropriate <span class="vocab" data-cn="用户线路">subscriber line</span>. This method, known as <span class="vocab" data-cn="脉冲拨号">pulse dialing</span>, allowed the switch to connect two parties without any human operator.</`,
    `In 1892 the Strowger system was installed at the La Porte central office, marking the first commercial use of an automatic exchange. The <span class="vocab" data-cn="中心局">central office</span> housed rows of stepping switches that could handle dozens of simultaneous calls. Business owners quickly praised the new technology: it reduced call‑handling costs, cut waiting times, and—most importantly—removed the possibility of personal bias from the connection process.`,
    `The success of Strowger’s design spurred a wave of innovation. By the 1920s engineers introduced the <span class="vocab" data-cn="十字杆">crossbar</span> switch, which used a grid of vertical and horizontal bars to create a more compact <span class="vocab" data-cn="切换矩阵">switching matrix</span>. Crossbars could connect many more lines with fewer moving parts, improving reliability and speed. Later, in the 1960s, electronic switches replaced mechanical relays altogether, paving the way for digital signaling and eventually the packet‑switched networks that underpin today’s internet‑based voice services.`,
    `Beyond the technical realm, automatic switching democratized telephone access. Rural communities, previously underserved because of the high cost of staffing operators, could now afford a local exchange. Long‑distance calling became more feasible as automated routing reduced human error and latency. The very concept of a self‑directed network—where users control connections without intermediaries—foreshadowed modern concepts like Voice over IP (VoIP) and cloud‑based communications.`,
    `Almon Strowger never imagined that his modest invention would evolve into the global telecommunications infrastructure we rely on today. Yet his simple desire for fairness sparked a cascade of engineering breakthroughs, each building upon the humble relay that first stepped through a stack of contacts. The legacy of the <span class="vocab" data-cn="斯特罗格开关">Strowger switch</span> reminds us that even the most ordinary frustrations can inspire inventions that reshape the world.`,
  ],
  vocabulary: [
    { word: 'relay', cn: '继电器' },
    { word: 'electromechanical', cn: '机电的' },
    { word: 'pulse dialing', cn: '脉冲拨号' },
    { word: 'subscriber line', cn: '用户线路' },
    { word: 'central office', cn: '中心局' },
    { word: 'crossbar', cn: '十字杆' },
    { word: 'switching matrix', cn: '切换矩阵' },
    { word: 'telephone exchange', cn: '电话交换机' },
  ],
};

export default article;
