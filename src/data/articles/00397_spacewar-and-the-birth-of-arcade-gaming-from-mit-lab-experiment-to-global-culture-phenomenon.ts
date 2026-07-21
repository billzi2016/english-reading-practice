import type { Article } from '../../types/index.ts';

// 文件意图：维护《Spacewar! and the Birth of Arcade Gaming: From MIT Lab Experiment to Global Culture Phenomenon》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00397 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00397',
  slug: 'spacewar-and-the-birth-of-arcade-gaming-from-mit-lab-experiment-to-global-culture-phenomenon',
  title: 'Spacewar! and the Birth of Arcade Gaming',
  subtitle: 'How a MIT lab experiment sparked a worldwide gaming culture',
  summary: 'From a university computer to coin‑operated cabinets, discover the story behind the first video game and its lasting legacy.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `It was a rainy night in 1962 when two graduate students at <span class="vocab" data-cn="麻省理工学院">MIT</span> huddled around a humming machine, their eyes fixed on a flickering screen. They weren’t playing a commercial product; they were watching rockets chase each other across a black void, their trajectories governed by simple physics equations. The excitement in the lab was palpable – this was the first time anyone had seen a computer generate real‑time graphics that responded to player input.`,
    `The machine they used was the <span class="vocab" data-cn="数字信号处理器">PDP-1</span>, a 1950s mainframe known for its bright <span class="vocab" data-cn="向量显示器">vector display</span>. Unlike today’s raster screens, a vector monitor draws lines directly with an electron beam, producing crisp, glowing shapes. Steve Russell, together with Martin Graetz and Wayne Wiitanen, wrote the code that turned this hardware into <span class="vocab" data-cn="太空战争游戏">Spacewar!</span>, a two‑player dogfight where each pilot could fire missiles, thrust forward, or rotate their ship to avoid collision. The game’s physics felt surprisingly realistic, and its competitive nature made it an instant hit among the lab’s visitors.`,
    `Word of <span class="vocab" data-cn="太空战争游戏">Spacewar!</span> spread beyond MIT’s corridors. By 1966, a copy had been installed at the Stanford Research Institute (SRI), where engineers built a version that could be played with a joystick instead of a keyboard. This prototype inspired Nolan Bushnell and Ted Dabney, who later founded Atari. Their first commercial venture, <span class="vocab" data-cn="电脑空间">Computer Space</span> (1971), was essentially a stripped‑down adaptation of <span class="vocab" data-cn="太空战争游戏">Spacewar!</span>, housed in a wooden cabinet and equipped with a coin slot. Though it sold modestly, the game proved that people were willing to pay for interactive electronic entertainment.</`,
    `The breakthrough came in 1972 with Atari’s <span class="vocab" data-cn="乒乓游戏">Pong</span>. Unlike its predecessor, Pong used discrete logic circuits rather than a full computer, making it cheaper to produce. The game was installed in a sleek <span class="vocab" data-cn="街机柜子">arcade cabinet</span> that featured a simple joystick and two buttons. When the first coin dropped into the slot, a bright “1” lit up on the scoreboard, and the iconic “ping‑pong” sound echoed through bars and coffee shops. Pong’s success sparked an explosion of <span class="vocab" data-cn="投币式">coin‑operated</span> video games across the United States, turning arcades into social hubs where teenagers gathered to chase high scores.</`,
    `The concept of a <span class="vocab" data-cn="最高分">high score</span> became a cultural phenomenon. Players would etch their initials onto the machine’s leaderboard, challenging friends and strangers alike. This competitive spirit fostered a sense of community that extended beyond the arcade walls; magazines began publishing tip sheets, and tournaments were organized in school gyms. The simple yet addictive gameplay loop—insert coin, play, improve—laid the groundwork for modern esports, showing early on how interactive media could create shared experiences and rivalries.</`,
    `As microprocessor technology advanced in the late 1970s, developers could pack more complex logic into smaller chips, leading to richer graphics and deeper game mechanics. Home consoles like the Atari 2600 brought arcade titles into living rooms, while the original <span class="vocab" data-cn="微处理器">microprocessor</span> enabled games such as “Space Invaders” (1978) to dominate both arcades and households worldwide. Decades later, retro enthusiasts revive <span class="vocab" data-cn="向量显示器">vector display</span> cabinets, and museums exhibit original PDP‑1 hardware, reminding us that the lineage of modern gaming stretches back to a modest lab experiment.</`,
    `Today, when we pick up a smartphone or step into a virtual reality arena, we are still chasing the same thrill that sparked in MIT’s basement: the joy of controlling a digital world with our own hands. <span class="vocab" data-cn="太空战争游戏">Spacewar!</span> may have been born out of curiosity and academic collaboration, but its legacy endures in every pixelated adventure, every leaderboard, and every shared moment of play that connects people across the globe.`,
  ],
  vocabulary: [
    { word: 'MIT', cn: '麻省理工学院' },
    { word: 'PDP-1', cn: '数字信号处理器' },
    { word: 'vector display', cn: '向量显示器' },
    { word: 'Spacewar!', cn: '太空战争游戏' },
    { word: 'coin‑operated', cn: '投币式' },
    { word: 'arcade cabinet', cn: '街机柜子' },
    { word: 'high score', cn: '最高分' },
    { word: 'microprocessor', cn: '微处理器' },
    { word: 'Pong', cn: '乒乓游戏' },
    { word: 'Computer Space', cn: '电脑空间' },
  ],
};

export default article;
