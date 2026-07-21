import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Coal to Speed: The Rise and Fall of the Concorde Supersonic Jet》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00079 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00079',
  slug: 'from-coal-to-speed-the-rise-and-fall-of-the-concorde-supersonic-jet',
  title: 'From Coal to Speed: The Rise and Fall of the Concorde Supersonic Jet',
  subtitle: 'How a Cold‑War marvel reshaped aviation and why it vanished',
  summary: 'A narrative of the Concorde’s daring birth, technical triumphs, economic struggles, and lasting legacy.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `The story of the Concorde begins in a world still powered by coal‑derived fuels, yet dreaming of breaking the sound barrier for commercial travel. In the early 1960s, governments and manufacturers imagined an aircraft that could whisk passengers across the Atlantic in half the time of conventional jets. This ambition gave birth to one of the most iconic projects of the Cold War era: a <span class="vocab" data-cn="超音速">supersonic</span> passenger liner that would become a symbol of technological daring.`,
    `The project was not born in a single country but emerged from an Anglo‑French partnership between Aérospatiale and the British Aircraft Corporation. Engineers combined French aerodynamic expertise with British engine development, aiming to create a sleek airframe capable of sustained high‑speed cruise. Central to the design was the <span class="vocab" data-cn="三角翼">delta wing</span>, a triangular planform that provided both structural strength and the lift needed at speeds approaching twice the speed of sound.`,
    `Designing an aircraft that could reliably travel at <span class="vocab" data-cn="马赫数">Mach</span> 2 presented unprecedented challenges. The Concorde’s engines, the Rolls‑Royce/Snecma Olympus 593 turbojets, were equipped with a powerful <span class="vocab" data-cn="加力燃烧室">afterburner</span> for takeoff and acceleration through the sound barrier. While modern airliners rely on efficient <span class="vocab" data-cn="涡扇发动机">turbofan</span> engines, the Concorde’s turbojets burned large quantities of kerosene derived from coal‑based oil, making fuel consumption a critical concern throughout its operational life.`,
    `The first prototype took to the skies in 1969, and after years of testing, commercial service began in 1976 on routes between London Heathrow and New York JFK. Passengers experienced a cabin pressurized at a lower altitude than typical jets, allowing them to enjoy a smoother ride despite cruising at over 1 350 km/h. However, the aircraft’s speed also produced a distinctive <span class="vocab" data-cn="音爆">sonic boom</span>, limiting its flight paths to oceanic corridors and sparking public debate about noise pollution.`,
    `Economic realities soon caught up with the dream. The Concorde’s high fuel burn, combined with limited passenger capacity (only 100 seats), meant that ticket prices were prohibitively expensive—often comparable to a first‑class fare on a conventional jet. Airlines struggled to fill seats consistently, and the aircraft’s maintenance costs grew as the airframe aged. Environmental concerns about carbon emissions and noise further eroded political support for expanding supersonic services.`,
    `Tragedy struck on July 25 2000 when Air France Flight 4590 crashed shortly after takeoff from Paris‑Charles de Gaulle, killing all aboard and four people on the ground. The accident exposed vulnerabilities in the aircraft’s tires and fuel system, prompting costly redesigns that further strained the already tight economics. By 2003, both British Airways and Air France retired their Concorde fleets, marking the end of an era for commercial <span class="vocab" data-cn="超音速">supersonic</span> travel.`,
    `Although the Concorde no longer flies, its legacy lives on in modern aerospace research. Companies such as Boom Supersonic and Aerion are revisiting the concept with more efficient engines, lighter composite materials, and quieter designs that aim to mitigate the sonic boom problem. The Concorde remains a powerful reminder that pushing the boundaries of speed requires not only engineering brilliance but also sustainable economics and public acceptance.`,
  ],
  vocabulary: [
    { word: 'supersonic', cn: '超音速' },
    { word: 'delta wing', cn: '三角翼' },
    { word: 'afterburner', cn: '加力燃烧室' },
    { word: 'Mach', cn: '马赫数' },
    { word: 'turbofan', cn: '涡扇发动机' },
    { word: 'sonic boom', cn: '音爆' },
  ],
};

export default article;
