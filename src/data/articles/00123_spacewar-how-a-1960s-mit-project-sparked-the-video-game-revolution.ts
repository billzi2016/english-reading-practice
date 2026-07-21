import type { Article } from '../../types/index.ts';

// 文件意图：维护《Spacewar! – How a 1960s MIT Project Sparked the Video Game Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00123 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00123',
  slug: 'spacewar-how-a-1960s-mit-project-sparked-the-video-game-revolution',
  title: 'Spacewar! – How a 1960s MIT Project Sparked the Video Game Revolution',
  subtitle: 'The untold story behind the first digital arcade game.',
  summary: 'Discover how a group of MIT students turned a research computer into the world’s first video game and set off a cultural wave that still shapes gaming today.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1961, a handful of curious engineers at the Massachusetts Institute of Technology gathered around a massive <span class="vocab" data-cn="数字电子计算机">PDP-1</span>. The machine, originally designed for scientific calculations, featured a bright <span class="vocab" data-cn="矢量显示器">vector display</span> that could draw lines directly on an oscilloscope screen. Rather than using it for physics problems, the team asked a simple question: could they make something fun?`,
    `The answer came in the form of <span class="vocab" data-cn="太空战争（早期电子游戏）">Spacewar!</span>, a two‑player duel where each pilot controlled a spaceship that orbited a “gravity well” at the center of the screen. The code was written in low‑level <span class="vocab" data-cn="二进制代码">binary code</span> and relied on clever timing tricks to simulate thrust, rotation, and even missile explosions. When the first prototype flickered to life, the room erupted in cheers—an unprecedented moment for a computer that had never before been used for entertainment.`,
    `What made Spacewar! truly revolutionary was its hardware‑driven physics engine. By feeding the PDP‑1’s analog circuitry with real‑time calculations, the game produced a sense of inertia that felt almost like genuine spaceflight. The central “star” acted as a gravitational attractor, pulling both ships toward it unless the players counteracted with thrust. This emergent gameplay encouraged strategic maneuvering and gave rise to the first documented <span class="vocab" data-cn="竞技游戏">arcade cabinet</span> prototype, built from salvaged wood and a repurposed television set.`,
    `Word of the game spread quickly across campus, reaching the nearby Lincoln Laboratory where engineers were already experimenting with interactive displays for training simulations. By 1962, copies of Spacewar!’s source code began circulating among other research institutions, marking one of the earliest examples of <span class="vocab" data-cn="软件盗版或共享">software piracy</span>—though at the time it was more a gesture of collaborative curiosity than illegal theft. This informal sharing laid the groundwork for what would later become the open‑source movement in computing.`,
    `The cultural impact exploded when Nolan Bushnell, a graduate student who had witnessed Spacewar! during a visit to MIT, decided to commercialize the concept. In 1972 he founded Atari and released <span class="vocab" data-cn="太空侵略者">Pong</span>, a simplified table‑tennis clone that borrowed heavily from the competitive spirit of Spacewar!. Pong’s success proved that video games could be profitable, prompting a wave of entrepreneurs to build their own cabinets, develop new genres, and push hardware limits. The lineage from Spacewar! to modern consoles is a direct line of inspiration.`,
    `Beyond its commercial legacy, Spacewar! also sparked academic interest in human‑computer interaction. Researchers began studying how players responded to visual feedback, latency, and control schemes—questions that still dominate game design curricula today. The original code was eventually archived at the Computer History Museum, where it serves as a teaching tool for students learning about low‑level programming, graphics pipelines, and the physics of motion in digital environments.`,
    `Today, more than six decades later, you can still find modern reinterpretations of Spacewar! on smartphones, web browsers, and even virtual reality platforms. Each remake pays homage to the original’s elegant simplicity while adding contemporary polish—high‑resolution textures, networked multiplayer, and sophisticated AI opponents. The story of Spacewar! reminds us that a single spark of curiosity in a university lab can ignite an entire industry, reshaping how we play, learn, and imagine digital worlds.`,
  ],
  vocabulary: [
    { word: 'PDP-1', cn: '数字电子计算机' },
    { word: 'vector display', cn: '矢量显示器' },
    { word: 'Spacewar!', cn: '太空战争（早期电子游戏）' },
    { word: 'binary code', cn: '二进制代码' },
    { word: 'arcade cabinet', cn: '竞技游戏机柜' },
    { word: 'software piracy', cn: '软件盗版或共享' },
  ],
};

export default article;
