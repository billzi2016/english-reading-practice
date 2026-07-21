import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Wright Brothers' Quest for Flight: From Bicycle Shops to Kitty Hawk》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00088 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00088',
  slug: 'the-wright-brothers-quest-for-flight-from-bicycle-shops-to-kitty-hawk',
  title: 'The Wright Brothers\' Quest for Flight: From Bicycle Shops to Kitty Hawk',
  subtitle: 'How two Ohio mechanics turned a hobby into the birth of modern aviation.',
  summary: 'A narrative of Wilbur and Orville Wright’s daring experiments that led to the first powered flight in 1903.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the quiet town of Dayton, Ohio, the Wright brothers ran a modest <span class="vocab" data-cn="自行车店">bicycle shop</span>. Their daily work involved repairing frames and adjusting gears, which gave them an intimate understanding of balance and mechanical precision. Yet, even as they tightened spokes, their minds drifted to the sky. Stories of daring balloonists and the mythic Icarus fueled a quiet obsession: could a machine lift off under its own power and stay aloft? This question would soon transform their shop into a laboratory for flight.`,
    `Wilbur’s fascination with gliding began long before Orville joined him. In 1899, they built a series of small <span class="vocab" data-cn="滑翔机">gliders</span> modeled after the designs of German pioneer Otto Lilienthal. Each test flight on the sand dunes near Dayton revealed subtle flaws in stability and control. To improve their craft, the brothers turned to the science of <span class="vocab" data-cn="空气动力学">aerodynamics</span>, studying how air moved over curved surfaces. Their notebooks filled with sketches of wing shapes, angles of attack, and observations about how wind could both lift and destabilize a glider.`,
    `Real progress required more than guesswork; the Wrights constructed their own <span class="vocab" data-cn="风洞">wind tunnel</span> in 1901. By forcing air through a narrow passage over scaled‑down wing sections, they could measure two crucial forces: <span class="vocab" data-cn="升力">lift</span>, which pushes a wing upward, and <span class="vocab" data-cn="阻力">drag</span>, the resistance that pulls it backward. Their systematic experiments yielded data that contradicted many prevailing theories, allowing them to design a more efficient airfoil that produced greater lift with less drag—a breakthrough that would become the heart of every aircraft wing thereafter.` ,
    `Armed with superior wings, the brothers faced their next hurdle: propulsion. Existing engines were too heavy for flight, so they commissioned a lightweight gasoline engine from the Dayton Machine Company. Orville and Wilbur then engineered a set of wooden <span class="vocab" data-cn="螺旋桨">propellers</span> with twisted blades, a design inspired by their wind‑tunnel findings. Unlike the simple rotary fans used in earlier attempts, these propellers acted like rotating wings, converting engine power into thrust efficiently enough to overcome drag and keep the aircraft moving forward.` ,
    `In December 1903, the brothers loaded their fragile flyer onto a makeshift launch rail on the windswept dunes of Kitty Hawk, North Carolina. The site offered steady breezes and soft sand—ideal conditions for testing an unproven machine. On the morning of December 17th, Orville piloted the first successful flight, staying aloft for twelve seconds while covering 120 feet. Critical to this achievement were the aircraft’s <span class="vocab" data-cn="控制面">control surfaces</span>: a movable rudder for yaw and wing‑warping cables that twisted the wings to manage roll, giving the pilot unprecedented command over direction and stability.` ,
    `The Kitty Hawk triumph was more than a singular event; it marked the birth of powered, controlled flight. News of the Wrights’ success spread quickly, inspiring inventors worldwide to refine aircraft designs, develop larger engines, and eventually build planes capable of crossing oceans. Within a decade, military forces recognized the strategic value of air power, and commercial airlines began to appear, shrinking the world’s distances.` ,
    `Today, museums preserve the original 1903 Flyer, while modern engineers still study the Wright brothers’ meticulous approach to problem‑solving. Their legacy lives on not only in every airplane that soars overhead but also in the spirit of curiosity that turns a humble bicycle shop into a launchpad for humanity’s greatest dreams.` ,
  ],
  vocabulary: [
    { word: 'bicycle shop', cn: '自行车店' },
    { word: 'glider', cn: '滑翔机' },
    { word: 'aerodynamics', cn: '空气动力学' },
    { word: 'wind tunnel', cn: '风洞' },
    { word: 'lift', cn: '升力' },
    { word: 'drag', cn: '阻力' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'control surfaces', cn: '控制面' },
  ],
};

export default article;
