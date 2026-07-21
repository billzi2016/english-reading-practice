import type { Article } from '../../types/index.ts';

// 文件意图：维护《Project Mercury: America's First Human Spaceflight Program and Its Cold War Rivalry》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00455 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00455',
  slug: 'project-mercury-america-s-first-human-spaceflight-program-and-its-cold-war-rivalry',
  title: 'Project Mercury: America\'s First Human Spaceflight Program and Its Cold War Rivalry',
  subtitle: 'How a fledgling space effort became a geopolitical showdown.',
  summary: 'An engaging narrative of Project Mercury, the United States’ first crewed space program, and its role in the early Cold War competition with the Soviet Union.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `The story begins on October 4, 1957, when the Soviet Union launched <span class="vocab" data-cn="人造卫星">Sputnik</span>, the first artificial satellite to orbit Earth. The event sent shockwaves through Washington and sparked a fierce sense of urgency within the United States. In the midst of the escalating <span class="vocab" data-cn="冷战">Cold War</span>, policymakers feared that if the USSR could place a metal sphere in space, it might soon send a human being aloft as well. This fear catalyzed the birth of America’s own human‑spaceflight effort: <span class="vocab" data-cn="水星计划">Project Mercury</span>.`,
    `In response to Sputnik, President Eisenhower signed the National Aeronautics and Space Act in 1958, creating <span class="vocab" data-cn="美国国家航空航天局">NASA</span>. NASA inherited a patchwork of military research labs and civilian scientists, but its most urgent task was to design a program that could put an American into space before the Soviets. Project Mercury’s official objectives were modest yet ambitious: launch a man into sub‑orbital flight, achieve orbital flight, and safely recover the astronaut—all within a single generation of rockets. These goals reflected both scientific curiosity and geopolitical strategy.`,
    `The centerpiece of Mercury was its sleek, bell‑shaped <span class="vocab" data-cn="太空舱">capsule</span>. Only 2.9 meters in diameter and weighing about 1,400 kilograms, the capsule had to protect a single occupant from vacuum, extreme temperatures, and intense acceleration. Engineers paired it with two different <span class="vocab" data-cn="运载火箭">launch vehicles</span>: the short‑range <span class="vocab" data-cn="红石火箭">Redstone rocket</span> for sub‑orbital missions, and the more powerful <span class="vocab" data-cn="阿特拉斯-洛克希德">Atlas‑LV</span> for orbital attempts. Designing a reliable abort system, life‑support equipment, and heat shield within such tight mass limits proved to be a monumental engineering challenge.`,
    `Selecting who would sit inside the tiny capsule became a national spectacle. NASA chose seven test pilots—later known as the <span class="vocab" data-cn="水星七号">Mercury Seven</span>—based on flight experience, physical fitness, and public appeal. Their training regimen included centrifuge spins to simulate launch G‑forces, underwater “neutral buoyancy” sessions for EVA preparation, and rigorous psychological testing. Each astronaut was portrayed as a heroic embodiment of American values, turning the program into a powerful propaganda tool that countered Soviet achievements with personal bravery.`,
    `On May 5, 1961, <span class="vocab" data-cn="艾伦·谢泼德">Alan Shepard</span> piloted the first American crewed flight aboard <span class="vocab" data-cn="自由7号">Freedom 7</span>. The Redstone‑propelled mission lasted just 15 minutes, reaching an altitude of 187.5 kilometers before splashing down in the Atlantic. Though brief, the flight demonstrated that a human could survive launch stresses and re‑entry heating, providing invaluable data for future missions. Shepard’s famous “…the little green men …” joke after seeing the horizon added a touch of levity to an otherwise tense geopolitical moment.`,
    `The program’s crowning achievement arrived on February 20, 1962, when <span class="vocab" data-cn="约翰·格伦">John Glenn</span> orbited Earth three times aboard <span class="vocab" data-cn="友谊7号">Friendship 7</span>. Using the Atlas‑LV, Glenn completed a 4 hour and 55 minute flight at speeds exceeding 28,000 km/h. The mission proved that sustained orbital flight was possible for an American, and the live television broadcast of his orbit captivated millions, reinforcing national pride. Despite a minor heat‑shield anomaly that caused the capsule to spin briefly, Glenn’s safe return cemented Project Mercury’s technical success.`,
    `Project Mercury may have lasted only three years, but its legacy rippled through subsequent programs. The lessons learned in life‑support systems, re‑entry aerodynamics, and mission control operations directly fed into <span class="vocab" data-cn="双子座计划">Gemini</span> and ultimately the historic Apollo Moon landings. Moreover, Mercury demonstrated that space exploration could serve as a stage for Cold War rivalry, where scientific milestones were also diplomatic victories. By the time the United States landed on the Moon in 1969, the original fear sparked by Sputnik had transformed into a confident demonstration of technological prowess.`,
    `Looking back, Project Mercury stands as a testament to how competition can accelerate innovation. The program’s modest beginnings—just a small capsule and a handful of brave pilots—evolved into a national endeavor that reshaped humanity’s view of the cosmos. In today’s era of multinational space stations and commercial rockets, the spirit of Mercury reminds us that daring goals, backed by scientific rigor and public support, can turn distant dreams into reality.`,
  ],
  vocabulary: [
    { word: 'Sputnik', cn: '人造卫星' },
    { word: 'Cold War', cn: '冷战' },
    { word: 'Project Mercury', cn: '水星计划' },
    { word: 'NASA', cn: '美国国家航空航天局' },
    { word: 'capsule', cn: '太空舱' },
    { word: 'launch vehicle', cn: '运载火箭' },
    { word: 'Redstone rocket', cn: '红石火箭' },
    { word: 'Mercury Seven', cn: '水星七号' },
    { word: 'Freedom 7', cn: '自由7号' },
    { word: 'John Glenn', cn: '约翰·格伦' },
    { word: 'Friendship 7', cn: '友谊7号' },
    { word: 'Gemini', cn: '双子座计划' },
  ],
};

export default article;
