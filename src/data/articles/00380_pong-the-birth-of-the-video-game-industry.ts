import type { Article } from '../../types/index.ts';

// 文件意图：维护《Pong: The Birth of the Video Game Industry》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00380 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00380',
  slug: 'pong-the-birth-of-the-video-game-industry',
  title: 'Pong: The Birth of the Video Game Industry',
  subtitle: 'How a simple arcade cabinet sparked a global phenomenon',
  summary: 'A narrative of how Pong’s modest debut ignited the modern video‑game industry.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1972, a modest workshop in Sunnyvale, California became the unlikely birthplace of an industry that would later dominate global entertainment. Nolan Bushnell, a former engineer at Ampex, teamed up with his friend Al Alcorn to create a game that could be played on a <span class="vocab" data-cn="街机游戏机">arcade cabinet</span>. Their goal was simple: design an interactive experience that would attract patrons of local bars and diners. Little did they know that this modest experiment would soon evolve into a cultural juggernaut.`,
    `Alcorn’s engineering approach relied on <span class="vocab" data-cn="固态电路">solid-state circuitry</span>, abandoning the bulky electromechanical relays common in earlier amusement machines. By using transistor‑transistor logic (TTL) chips, the prototype could render moving paddles and a bouncing ball with unprecedented reliability. This shift not only reduced manufacturing costs but also demonstrated that electronic games could be produced at scale, laying the technical foundation for future consoles and handheld devices.`,
    `The gameplay itself was deceptively simple: two vertical paddles controlled by players moved up and down to return a square “ball” across a black‑and‑white screen. Behind this simplicity lay <span class="vocab" data-cn="二进制逻辑">binary logic</span> that determined collision detection, speed increments, and scoring. The machine was also <span class="vocab" data-cn="投币式">coin‑operated</span>, accepting a single quarter to start a match, which turned each play into a micro‑transaction long before the term existed in digital economies.`,
    `When Pong debuted at Andy Capp’s Tavern in Santa Clara, the response was immediate. Within weeks, the cabinet earned enough revenue to cover its own production costs, and word spread like wildfire across the West Coast. By the end of 1972, over a dozen bars were hosting the game, and Bushnell’s fledgling company—later renamed <span class="vocab" data-cn="Atari">Atari</span>—had secured enough capital to mass‑produce the cabinets for a national market. The success proved that video games could be profitable entertainment on a commercial scale.`,
    `Pong’s triumph also sparked the first major debates over <span class="vocab" data-cn="知识产权">intellectual property</span> in electronic gaming. Competing firms began cloning the design, prompting Atari to file lawsuits that would shape future licensing agreements and copyright enforcement. These legal battles underscored the need for clear ownership rules, a concern that still resonates today as developers navigate patents, trademarks, and digital rights management across global platforms.`,
    `Buoyed by arcade success, Atari turned its attention to the home market. The 1975 release of the Atari 2600 introduced a <span class="vocab" data-cn="微处理器">microprocessor</span>-driven console that could run multiple cartridges, including a home version of Pong. This transition from public venues to living rooms democratized access to video games, allowing families to experience interactive entertainment without leaving their homes. The console’s popularity cemented the notion that gaming could be both a personal hobby and a mainstream industry.`,
    `Decades later, Pong remains an iconic reference point for designers, historians, and gamers alike. Its minimalist graphics and elegant mechanics continue to inspire indie developers who seek to capture the purity of early arcade experiences. Museums exhibit original cabinets as artifacts of technological innovation, while modern retrospectives celebrate how a single <span class="vocab" data-cn="街机游戏机">arcade cabinet</span> ignited an ecosystem that now generates billions in revenue each year. Pong’s legacy proves that even the simplest ideas can reshape culture when paired with visionary engineering.`,
  ],
  vocabulary: [
    { word: 'arcade cabinet', cn: '街机游戏机' },
    { word: 'solid-state circuitry', cn: '固态电路' },
    { word: 'microprocessor', cn: '微处理器' },
    { word: 'intellectual property', cn: '知识产权' },
    { word: 'coin‑operated', cn: '投币式' },
    { word: 'binary logic', cn: '二进制逻辑' },
  ],
};

export default article;
