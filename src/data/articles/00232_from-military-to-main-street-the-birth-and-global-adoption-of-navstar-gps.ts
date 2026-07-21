import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Military to Main Street: The Birth and Global Adoption of Navstar GPS》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00232 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00232',
  slug: 'from-military-to-main-street-the-birth-and-global-adoption-of-navstar-gps',
  title: 'From Military to Main Street: The Birth and Global Adoption of Navstar GPS',
  subtitle: 'How a Cold‑War weapon became the world’s everyday positioning system',
  summary: 'A narrative of the technical breakthroughs and policy decisions that turned a military navigation project into a global utility.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1970s, the United States Department of Defense launched <span class="vocab" data-cn="全球定位系统">Navstar GPS</span> as a response to the vulnerability of traditional radio navigation during conflict. The idea was simple yet ambitious: place a network of satellites in medium Earth orbit that could broadcast precise timing signals, allowing any user with a receiver to calculate its own position anywhere on the planet.`,
    `The key to this ambition lay in the use of <span class="vocab" data-cn="原子钟">atomic clocks</span>. Each satellite carried multiple cesium and rubidium clocks whose stability—better than one second in millions of years—provided a universal time reference. By comparing the arrival times of signals from at least four satellites, a receiver could solve for three spatial coordinates plus the clock error, a process known as <span class="vocab" data-cn="三边测量法">trilateration</span>.`,
    `During its development phase, Navstar faced two major technical hurdles. First, the satellite constellation needed to be large enough to guarantee coverage; engineers settled on 24 operational satellites arranged in six orbital planes, a configuration that remains the backbone of the system today. Second, the signals had to survive ionospheric disturbances, which led to the creation of dual‑frequency transmission—<span class="vocab" data-cn="L1/L2频率">L1/L2 frequencies</span>—allowing receivers to correct for signal delay caused by charged particles in the upper atmosphere.`,
    `While the hardware was being perfected, policy decisions shaped who could benefit. The military retained control over a feature called <span class="vocab" data-cn="选择性可用性">selective availability</span>, which deliberately introduced timing errors to degrade civilian accuracy. This safeguard persisted until 2000, when President Clinton ordered its deactivation, opening the door for high‑precision civilian applications without needing special clearance.`,
    `The turning point came in the late 1990s with the rise of handheld navigation devices and the automotive industry’s interest in “turn‑by‑turn” guidance. Companies such as Garmin and TomTom began integrating <span class="vocab" data-cn="民用信号">civilian signal</span> receivers into consumer products, while governments worldwide recognized the economic benefits of a reliable positioning infrastructure for logistics, agriculture, and emergency response. By 2005, over 90 % of the world’s commercial navigation units relied on GPS.` ,
    `Internationally, the success of Navstar spurred other nations to develop their own constellations—Russia’s GLONASS, Europe’s Galileo, and China’s BeiDou. Rather than compete, these systems now cooperate through a process called <span class="vocab" data-cn="星座互操作">constellation interoperability</span>, broadcasting compatible signals that improve accuracy and resilience against signal blockage or spoofing. Modern smartphones can simultaneously track multiple constellations, delivering sub‑meter precision in urban environments.` ,
    `Today, GPS is woven into everyday life: from synchronizing financial transactions to enabling autonomous drones. The original military purpose—providing a robust, jam‑resistant navigation aid—remains vital for forces worldwide, but the civilian side has grown far beyond anyone’s imagination in 1973. As new technologies like quantum clocks and low‑Earth orbit mega‑constellations emerge, they will build upon the foundation laid by Navstar, proving that a tool once designed for war can become an indispensable instrument of peace and progress.` ,
  ],
  vocabulary: [
    { word: 'Navstar GPS', cn: '全球定位系统' },
    { word: 'atomic clocks', cn: '原子钟' },
    { word: 'trilateration', cn: '三边测量法' },
    { word: 'L1/L2 frequencies', cn: 'L1/L2频率' },
    { word: 'selective availability', cn: '选择性可用性' },
    { word: 'civilian signal', cn: '民用信号' },
    { word: 'constellation interoperability', cn: '星座互操作' },
  ],
};

export default article;
