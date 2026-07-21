import type { Article } from '../../types/index.ts';

// 文件意图：维护《The QWERTY Keyboard Layout: An Accidental Design That Shaped Modern Computing》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00194 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00194',
  slug: 'the-qwerty-keyboard-layout-an-accidental-design-that-shaped-modern-computing',
  title: 'The QWERTY Keyboard Layout: An Accidental Design That Shaped Modern Computing',
  subtitle: 'How a 19th‑century typewriter arrangement still governs our digital lives',
  summary: 'Explore the surprising origins of the QWERTY layout and why it persists despite modern alternatives.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When Christopher Latham <span class="vocab" data-cn="克里斯托弗·拉瑟姆·舒尔茨">Sholes</span> patented the first commercially successful typewriter in 1874, he faced a mechanical problem that would shape an entire century of input design. Early machines used a set of metal arms that swung up to strike inked ribbons; if two adjacent keys were struck too quickly, their arms could jam. To mitigate this, Sholes and his colleagues experimented with key placement until the most frequently paired letters were far enough apart to reduce collisions.`,
    `The resulting arrangement—<span class="vocab" data-cn="QWERTY键盘布局">QWERTY</span>—was not chosen for linguistic efficiency but for mechanical reliability. Letters such as “E” and “R,” which often appear together in English, ended up on opposite sides of the keyboard, while less common pairings like “Z” and “X” were placed side by side. This compromise meant that a skilled typist could achieve respectable speed without constantly clearing jams, an essential feature for office environments that relied on the new Remington machines.`,
    `As typewriters proliferated across newspapers, government offices, and homes, the QWERTY layout became a de‑facto standard. By the early 20th century, typists were trained in schools to master this specific arrangement, creating a large pool of workers whose productivity depended on muscle memory rather than logical letter order. The entrenched training system made any radical redesign costly, because businesses would have to retrain staff and risk temporary drops in output.`,
    `The rise of electronic computing in the mid‑20th century offered an opportunity to revisit keyboard design. Engineers could now ignore mechanical linkages, focusing instead on ergonomics and typing efficiency. In 1936, August Dvorak and his brother-in‑law William Dealey introduced the <span class="vocab" data-cn="Dvorak键盘布局">Dvorak</span> layout, which placed the most common letters on the home row and minimized finger travel. Laboratory tests showed that Dvorak could increase typing speed by up to 10 percent compared with QWERTY.`,
    `Despite these advantages, the Dvorak layout never displaced its predecessor. The inertia of existing hardware, software defaults, and the sheer number of QWERTY‑trained users created a classic case of “network effect” economics: the value of staying with the familiar system outweighed the marginal gains from switching. Even modern operating systems still ship with QWERTY as the default, though they allow alternative layouts to be selected.`,
    `In recent decades, new input methods such as touchscreens and voice recognition have further diluted the keyboard’s dominance, yet the QWERTY pattern persists in surprising places. Mobile phones use a virtual <span class="vocab" data-cn="键盘">keyboard</span> that mimics the physical layout, and many gaming consoles retain it for text entry. Moreover, the layout has been encoded into the very fabric of digital communication: the ASCII code table, devised in the 1960s, assigns numeric values to characters based on their QWERTY positions, a legacy that still underpins modern data encoding.`,
    `The story of QWERTY illustrates how an accidental engineering solution can become a cultural artifact, influencing everything from office design to software development. While future technologies may finally render the layout obsolete, its endurance reminds us that convenience, habit, and economic forces often outweigh pure technical optimality in shaping the tools we use every day.`,
  ],
  vocabulary: [
    { word: 'Christopher Latham Sholes', cn: '克里斯托弗·拉瑟姆·舒尔茨' },
    { word: 'QWERTY', cn: 'QWERTY键盘布局' },
    { word: 'Dvorak', cn: 'Dvorak键盘布局' },
    { word: 'keyboard', cn: '键盘' },
    { word: 'ASCII', cn: '美国信息交换标准代码' },
    { word: 'network effect', cn: '网络效应' },
  ],
};

export default article;
