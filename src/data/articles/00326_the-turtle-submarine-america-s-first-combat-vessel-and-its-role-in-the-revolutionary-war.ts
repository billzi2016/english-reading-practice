import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Turtle Submarine: America’s First Combat Vessel and Its Role in the Revolutionary War》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00326 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00326',
  slug: 'the-turtle-submarine-america-s-first-combat-vessel-and-its-role-in-the-revolutionary-war',
  title: 'The Turtle Submarine: America’s First Combat Vessel and Its Role in the Revolutionary War',
  subtitle: 'How a one‑man wooden craft tried to turn the tide of war.',
  summary: 'An engaging story about the world’s first combat <span class="vocab" data-cn="潜艇">submarine</span> and its daring but ultimately unsuccessful attack on a British warship.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the winter of 1775, the fledgling American colonies faced a daunting obstacle: the Royal Navy’s ironclad blockade that choked supplies into Boston and New York. General George Washington knew that conventional tactics alone could not break the British stranglehold, so he began to entertain “unconventional” ideas—among them, the notion of a vessel that could slip beneath the surface and strike unseen. This climate of desperation set the stage for an invention that would later be called the world’s first combat <span class="vocab" data-cn="潜艇">submarine</span>.`,
    `The mastermind behind the project was <span class="vocab" data-cn="大卫·布什内尔">David Bushnell</span>, a Yale‑educated physician and tinkerer who had already experimented with small explosive devices. Inspired by earlier European attempts at underwater navigation, Bushnell imagined a single‑person craft that could be lowered into a harbor, approach an enemy ship, attach a timed charge, and then surface safely. He presented his concept to the Continental Congress in late 1775, securing modest funding and the enthusiastic endorsement of Washington himself.`,
    `Bushnell’s design, affectionately nicknamed “<span class="vocab" data-cn="海龟号">Turtle</span>,” was a marvel of eighteenth‑century engineering. The hull was carved from a single block of oak, sealed with pitch and tar to make it <span class="vocab" data-cn="防水的">waterproofed</span>. Inside, the operator sat on a bench that could slide forward or backward, shifting weight to control buoyancy via a manually operated <span class="vocab" data-cn="压载舱">ballast tank</span>. Propulsion came from a hand‑cranked <span class="vocab" data-cn="螺旋桨">propeller</span> connected to a series of gears, allowing the craft to move at roughly two knots. A small brass tube served as an air supply, and a simple periscope made of polished glass let the pilot see above water while remaining submerged.`,
    `The first public demonstration took place on the Hudson River in early 1776. Bushnell lowered the Turtle into the chilly current, and a nervous volunteer—later identified as a young apprentice named Ezra—steered it toward a mock target. The audience, which included Washington, marveled at the silent glide of the wooden craft beneath the waves. Encouraged by this success, Bushnell refined the design, adding a detachable iron <span class="vocab" data-cn="弹头">warhead</span> that could be timed to explode after being affixed to an enemy hull.`,
    `On the night of September 6, 1776, the Turtle made its most famous—and tragic—attempt. Under cover of darkness, it was lowered into New York Harbor and guided toward the British frigate <span class="vocab" data-cn="鹰号战舰">HMS Eagle</span>, which lay anchored near the Battery. The operator managed to approach within a few feet, but strong currents and an unexpected rope tangled the craft’s rudder. When he finally reached the hull, the iron charge could not be secured properly; the wooden frame of the Turtle brushed against the ship’s copper sheathing without making firm contact. The mission failed, and the Turtle was forced to retreat, later being captured by British forces.`,
    `Although the attack did not achieve its tactical goal, the episode left an indelible mark on naval warfare. Bushnell’s prototype demonstrated that a submerged vessel could approach a target undetected—a principle that would be refined in the 19th and 20th centuries. The captured Turtle was examined by British engineers, who noted its innovative use of a <span class="vocab" data-cn="压载舱">ballast tank</span> for depth control, a concept later echoed in modern submarines. In America, Bushnell continued to experiment, eventually joining the <span class="vocab" data-cn="大陆海军">Continental Navy</span> and contributing to early torpedo development.`,
    `Today, the legacy of the Turtle lives on in museums and naval academies that celebrate its daring spirit. Replicas have been built for educational programs, allowing visitors to experience the cramped interior and feel the weight of history pressing against the wooden ribs. While the Turtle never sank a British warship, it proved that ingenuity could challenge even the most powerful fleets—a lesson that resonated throughout the Revolutionary War and beyond.`,
  ],
  vocabulary: [
    { word: 'submarine', cn: '潜艇' },
    { word: 'Turtle', cn: '海龟号（美国首艘作战潜水器）' },
    { word: 'David Bushnell', cn: '大卫·布什内尔' },
    { word: 'HMS Eagle', cn: '鹰号战舰' },
    { word: 'ballast tank', cn: '压载舱' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'warhead', cn: '弹头' },
    { word: 'Continental Navy', cn: '大陆海军' },
  ],
};

export default article;
