import type { Article } from '../../types/index.ts';

// 文件意图：维护《Unimate: The First Industrial Robot and the Dawn of Automation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00199 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00199',
  slug: 'unimate-the-first-industrial-robot-and-the-dawn-of-automation',
  title: 'Unimate: The First Industrial Robot and the Dawn of Automation',
  subtitle: 'How a hydraulic arm reshaped modern manufacturing',
  summary: 'The story of Unimate, the world’s first industrial robot, and its lasting influence on automation.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1961, workers at a General Motors casting plant in New York watched with a mixture of curiosity and apprehension as a massive steel arm lifted molten metal molds from a furnace. This was no ordinary crane; it was the **Unimate**, the world’s first <span class="vocab" data-cn="工业机器人">industrial robot</span>. Designed by inventor George Devol and championed by entrepreneur Joseph Engelberger, Unimate turned a speculative idea—“a programmable manipulator” —into a tangible presence on the factory floor, marking the birth of modern <span class="vocab" data-cn="自动化">automation</span>.`,
    `The core of Unimate’s brilliance lay in its <span class="vocab" data-cn="关节臂">articulated arm</span>, a series of hydraulic cylinders that mimicked human joints. Each joint could rotate or extend under computer‑controlled pressure, allowing the machine to reach into tight spaces and repeat motions with millimetric precision. Behind the scenes, a <span class="vocab" data-cn="可编程控制器">programmable controller</span> stored a sequence of instructions on magnetic tape; when triggered, it sent voltage pulses that dictated the arm’s movement path, speed, and force. This combination of hardware and software was revolutionary for its time.`,
    `Before Unimate, most factories relied on manual labor or simple mechanical fixtures to perform repetitive tasks. The introduction of a machine that could be <span class="vocab" data-cn="重新编程">re‑programmed</span> for different jobs meant that manufacturers could switch production lines without costly retooling. At General Motors, Unimate took over the dangerous job of pouring hot metal into sand molds—a task that previously exposed workers to burns and inhalation hazards. Within months, the plant reported a 30 % increase in throughput and a dramatic drop in workplace injuries, providing concrete proof that <span class="vocab" data-cn="机器人技术">robotics</span> could improve both safety and efficiency.`,
    `Technically, Unimate was more than just a hydraulic arm; it incorporated early concepts of <span class="vocab" data-cn="运动学">kinematics</span>. Engineers calculated the position of each joint using forward‑kinematic equations, ensuring that the end of the arm (the <span class="vocab" data-cn="末端执行器">end effector</span>) would follow a precise trajectory. Although the calculations were performed offline on mainframe computers and then uploaded to the controller, this approach laid the groundwork for today’s real‑time motion planning algorithms used in collaborative robots. The system also featured safety interlocks that halted operation if unexpected resistance was detected, an early nod to what we now call “force feedback.”`,
    `Unimate’s success sparked a wave of investment in robotic automation throughout the 1970s and 1980s. Companies such as FANUC, KUKA, and ABB built upon Devol’s patent architecture, adding electric servomotors, digital signal processors, and later, vision systems. The rise of <span class="vocab" data-cn="数控机床">CNC</span> (Computer Numerical Control) machines in parallel meant that both material removal and material handling could be coordinated by a single digital workflow. By the turn of the millennium, robots were no longer confined to heavy‑industry foundries; they populated automotive assembly lines, electronics manufacturing, and even food packaging plants.`,
    `Today, the legacy of Unimate is evident in every collaborative robot (cobot) that works side‑by‑side with humans on a shared workstation. While modern cobots are lightweight, sensor‑rich, and programmed via intuitive graphical interfaces, they inherit the same fundamental principle: a machine that can be instructed to repeat a task with speed, accuracy, and endurance far beyond human capability. The story of Unimate reminds us that automation is not merely about replacing labor—it is about redefining what work looks like, improving safety, and unlocking new possibilities for creative engineering.`,
  ],
  vocabulary: [
    { word: 'industrial robot', cn: '工业机器人' },
    { word: 'automation', cn: '自动化' },
    { word: 'articulated arm', cn: '关节臂' },
    { word: 'programmable controller', cn: '可编程控制器' },
    { word: 'kinematics', cn: '运动学' },
    { word: 'end effector', cn: '末端执行器' },
    { word: 'CNC', cn: '数控机床' },
  ],
};

export default article;
