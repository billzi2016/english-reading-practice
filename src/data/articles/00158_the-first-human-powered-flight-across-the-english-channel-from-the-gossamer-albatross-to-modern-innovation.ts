import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Human‑Powered Flight Across the English Channel: From the Gossamer Albatross to Modern Innovation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00158 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00158',
  slug: 'the-first-human-powered-flight-across-the-english-channel-from-the-gossamer-albatross-to-modern-innovation',
  title: 'The First Human‑Powered Flight Across the English Channel: From the Gossamer Albatross to Modern Innovation',
  subtitle: 'How a pedal‑powered aircraft crossed a historic waterway and sparked new ideas in sustainable aviation.',
  summary: 'A narrative of Bryan Allen’s daring crossing, the engineering behind the Gossamer Albatross, and its lasting influence on modern lightweight flight technology.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1979, a thin ribbon of fabric stretched across the sky over the English Channel was not a kite or a glider but a <span class="vocab" data-cn="人力驱动的飞机">human‑powered aircraft</span>. The project, led by Dr. Paul MacCready’s AeroVironment team, aimed to claim the coveted Kremer prize for crossing a 22‑mile stretch of water using only the pilot’s own muscle power. Their contender, the <span class="vocab" data-cn="轻质人力飞机的名称">Gossamer Albatross</span>, embodied years of trial, error, and relentless pursuit of aerodynamic perfection.`,
    `The Albatross was a marvel of <span class="vocab" data-cn="空气动力学效率，指在相同升力下阻力最小化的能力">aerodynamic efficiency</span>. Its wingspan measured an astonishing 29 meters, yet the entire structure weighed less than 32 kilograms. This was achieved by using a skeleton of <span class="vocab" data-cn="碳纤维复合材料，轻且强">carbon‑fiber</span> tubes covered with Mylar film, creating a surface that could glide on laminar flow while remaining flexible enough to absorb gusts. The design philosophy centered on maximizing lift while minimizing drag—a delicate balance that would determine the flight’s success or failure.`,
    `On 12 August 1979, cyclist‑turned‑pilot Bryan Allen strapped into the narrow cockpit and began pedaling. For nearly three hours he maintained a steady output of about 0.3 horsepower, turning a set of <span class="vocab" data-cn="脚踏驱动装置，类似自行车的传动系统">pedaling mechanisms</span> that spun a large propeller at the rear. The Channel’s wind was fickle; occasional headwinds threatened to stall the aircraft, while sudden gusts could lift it beyond control. Allen’s endurance and precise power management were as critical as the engineering that kept the plane aloft.`,
    `The crossing covered roughly 35 kilometers and took 2 hours 49 minutes—a testament not only to human stamina but also to the Albatross’s remarkable <span class="vocab" data-cn="功率与重量的比值，决定了飞行器在给定动力下能携带多少重量">power‑to‑weight ratio</span>. When Allen finally touched down on the French shore, the world witnessed a new frontier of flight: one that relied on muscle rather than fuel. The achievement earned the Kremer prize and cemented the Gossamer Albatross as an icon of innovative engineering.`,
    `The legacy of this flight rippled through subsequent projects. MIT’s <span class="vocab" data-cn="人力驱动的长距离飞行项目">Daedalus</span> aircraft, which in 1988 flew from Crete to Santorini covering 115 kilometers, borrowed heavily from the Albatross’s structural concepts and refined them with even lighter materials. In the decades that followed, advances such as high‑modulus carbon fiber, computer‑aided design (CAD), and computational fluid dynamics (CFD) allowed engineers to push the boundaries of <span class="vocab" data-cn="翼载荷，单位面积承受的重量">wing loading</span> and structural integrity far beyond what was possible in the 1970s.`,
    `Modern innovators have taken inspiration from the Albatross to explore hybrid concepts. Some research groups now combine human power with solar cells, creating <span class="vocab" data-cn="太阳能辅助的轻量级飞行器">solar‑assisted ultralights</span> that can extend flight duration without additional fuel. Others experiment with 3D‑printed lattice structures that mimic the Albatross’s skeletal framework while offering superior strength-to-weight ratios. These developments echo the original mission: to achieve sustained, efficient flight using minimal energy input.`,
    `Today, the story of the Gossamer Albatross serves as both a historical milestone and a source of inspiration for sustainable aviation. It reminds engineers that breakthroughs often arise from daring simplicity—where a cyclist’s pedal can lift an aircraft across a channel, and where today’s composite materials might one day enable passenger‑carrying human‑powered drones. The Channel crossing remains a vivid illustration that with ingenuity, perseverance, and the right balance of physics, even the most audacious dreams can take flight.`,
  ],
  vocabulary: [
    { word: 'human-powered aircraft', cn: '人力驱动的飞机' },
    { word: 'Gossamer Albatross', cn: '轻质人力飞机的名称' },
    { word: 'aerodynamic efficiency', cn: '空气动力学效率，指在相同升力下阻力最小化的能力' },
    { word: 'carbon-fiber', cn: '碳纤维复合材料，轻且强' },
    { word: 'pedaling mechanisms', cn: '脚踏驱动装置，类似自行车的传动系统' },
    { word: 'power-to-weight ratio', cn: '功率与重量的比值，决定了飞行器在给定动力下能携带多少重量' },
    { word: 'Daedalus', cn: '人力驱动的长距离飞行项目' },
    { word: 'wing loading', cn: '翼载荷，单位面积承受的重量' },
    { word: 'solar-assisted ultralights', cn: '太阳能辅助的轻量级飞行器' },
  ],
};

export default article;
