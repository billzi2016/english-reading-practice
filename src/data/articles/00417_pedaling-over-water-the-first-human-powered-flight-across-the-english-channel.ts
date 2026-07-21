import type { Article } from '../../types/index.ts';

// 文件意图：维护《Pedaling Over Water: The First Human-Powered Flight Across the English Channel》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00417 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00417',
  slug: 'pedaling-over-water-the-first-human-powered-flight-across-the-english-channel',
  title: 'Pedaling Over Water: The First Human-Powered Flight Across the English Channel',
  subtitle: 'How a cyclist‑pilot turned a fragile frame into a trans‑Channel triumph.',
  summary: 'In August 1979, Bryan Allen pedaled the Gossamer Albatross across the English Channel, proving that human power could conquer open water.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When most people think of crossing the English Channel they picture a ferry or a sleek jet, not a bicycle‑like contraption. Yet on a warm August morning in 1979 a lone cyclist strapped himself into a delicate frame and began to pedal his way over water. The feat captured imaginations because it turned an everyday activity—riding a bike—into a daring aerial adventure, showing that sheer determination could lift a human above the sea.`,
    `The journey was not a sudden whim; it grew out of the <span class="vocab" data-cn="克雷默奖">Kremer prize</span>, a competition launched in 1959 to spur advances in <span class="vocab" data-cn="人力驱动飞机">human-powered aircraft</span>. After years of trial and error, the MIT team behind the Gossamer Condor finally won the prize in 1977 by completing a figure‑eight course. Buoyed by that success, they set their sights on a more ambitious target: crossing the Channel, a distance of roughly thirty‑four miles of open water.`,
    `The aircraft chosen for the challenge was aptly named the <span class="vocab" data-cn="轻纱信天翁">Gossamer Albatross</span>. Its skeleton was built from <span class="vocab" data-cn="轻质复合材料">lightweight composite</span> tubes and Mylar film, giving it a total weight of just under thirty kilograms. Engineers gave the wings a subtle <span class="vocab" data-cn="斜翼上反角">dihedral</span> angle to improve stability, while meticulous attention to <span class="vocab" data-cn="空气动力效率">aerodynamic efficiency</span> kept drag to a minimum. Power was transmitted from the pilot’s pedals to a large <span class="vocab" data-cn="螺旋桨">propeller</span>, which spun at just the right speed to keep the craft aloft without wasting precious energy.`,
    `Pilot Bryan Allen was not a typical aviator; he was an experienced cyclist who had spent months conditioning his body for sustained output. To stay airborne, he needed to maintain roughly 0.3 horsepower—about 200 watts—for nearly three hours, a level of endurance comparable to a professional time‑trialist. Allen’s training regimen included long rides on flat terrain, interval sessions to boost lactate threshold, and countless practice flights in the Albatross to learn how subtle shifts in pedal pressure affected lift and drag.`,
    `On 12 August 1979, the sky over Dover was clear, with a gentle breeze from the southeast. Allen positioned himself in the cockpit, tightened his harness, and began pedaling. The <span class="vocab" data-cn="轻纱信天翁">Albatross</span> rolled forward on its tiny wheels before lifting off, its wings trembling like a hummingbird’s. As he entered the Channel, the water below reflected the sun, creating a dazzling glare that made navigation tricky. Yet the aircraft’s steady glide and Allen’s rhythmic pedaling kept it on course, and after 2 hours 49 minutes the propeller slowed as he touched down on a field near Calais.`,
    `The crossing was more than a record; it proved that human power could rival conventional engines for specific tasks. It demonstrated that with meticulous engineering—optimising <span class="vocab" data-cn="空气动力效率">aerodynamic efficiency</span>, using ultra‑light materials, and harnessing the pilot’s own energy—a craft could travel long distances without fuel. The achievement inspired a new wave of eco‑focused design thinking, reminding engineers that sustainability often begins with rethinking how we source power.`,
    `Today, the legacy of the <span class="vocab" data-cn="轻纱信天翁">Gossamer Albatross</span> lives on in modern ultra‑light aircraft, solar‑powered drones, and even concepts for human‑assisted space launch systems. While no one has yet beaten Allen’s Channel crossing with a purely pedal‑driven machine, the spirit of that day continues to motivate innovators who believe that the simplest source—human effort—can still push the boundaries of flight.`,
  ],
  vocabulary: [
    { word: 'human-powered aircraft', cn: '人力驱动飞机' },
    { word: 'Gossamer Albatross', cn: '轻纱信天翁' },
    { word: 'aerodynamic efficiency', cn: '空气动力效率' },
    { word: 'dihedral', cn: '斜翼上反角' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'lightweight composite', cn: '轻质复合材料' },
    { word: 'Kremer prize', cn: '克雷默奖' },
  ],
};

export default article;
