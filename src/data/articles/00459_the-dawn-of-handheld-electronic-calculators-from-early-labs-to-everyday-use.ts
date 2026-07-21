import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Dawn of Handheld Electronic Calculators》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00459 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00459',
  slug: 'the-dawn-of-handheld-electronic-calculators-from-early-labs-to-everyday-use',
  title: 'The Dawn of Handheld Electronic Calculators',
  subtitle: 'From Early Labs to Everyday Use',
  summary: 'How a series of technical breakthroughs turned bulky machines into pocket-sized tools that reshaped daily life.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1960s, engineers still wrestled with massive desktop calculators that filled entire rooms. These electromechanical beasts relied on gears and stepping motors, making them slow and fragile. As computers began to demonstrate their speed in university labs, a new question emerged: could the same electronic principles be squeezed into a device you could actually hold? The answer required not just smarter circuits but also a radical shift in how power was managed and displayed.`,
    `The first true pocket‑size calculators appeared in 1961 with the ANITA Mk VII, produced by Bell Punch. Instead of relays, it used dozens of discrete <span class="vocab" data-cn="晶体管">transistor</span> switches, dramatically reducing both size and power consumption. Although still expensive—costing several hundred dollars—the device proved that electronic arithmetic could be portable. Engineers celebrated the breakthrough, but they also recognized a new bottleneck: wiring each transistor together was labor‑intensive and error‑prone.`,
    `A solution arrived in the form of the <span class="vocab" data-cn="集成电路">integrated circuit</span> (IC). By the early 1970s, manufacturers could embed dozens of transistors onto a single silicon chip, cutting weight and cost dramatically. The landmark Intel 4004, released in 1971, was the world’s first <span class="vocab" data-cn="微处理器">microprocessor</span> and was originally designed for Busicom calculators. This tiny brain could execute arithmetic instructions far faster than any assembly of discrete parts, paving the way for truly handheld devices.`,
    `Even with a microprocessor, power efficiency remained critical. The introduction of <span class="vocab" data-cn="金属氧化物半导体场效应晶体管">MOSFET</span> technology allowed calculators to run on tiny batteries for hours. At the same time, display technology shifted from bright but power‑hungry LEDs to low‑energy <span class="vocab" data-cn="液晶显示屏">LCD</span> panels. The Hewlett‑Packard HP‑35, launched in 1972, combined a scientific function set with an LED display, while later models like the Sharp EL‑805 used LCDs, making calculators both lighter and more discreet.`,
    `By the mid‑1970s Japanese firms such as Casio and Sharp entered the market with aggressive pricing. Their devices often featured a <span class="vocab" data-cn="可编程计算器">programmable calculator</span> mode, allowing users to store short sequences of operations—a precursor to today’s software apps. The Texas Instruments TI‑59, released in 1977, let engineers write custom programs on magnetic cards, turning the calculator into a pocket‑sized problem‑solver for engineers and students alike.`,
    `The rapid diffusion of handheld calculators reshaped everyday practices. Engineers abandoned slide rules, accountants replaced adding machines, and high school classrooms introduced algebraic computation without chalk. The device’s affordability meant that even small businesses could automate inventory checks, while travelers used them to convert currencies on the go. This democratization of calculation accelerated scientific research, financial modeling, and even artistic design, as creators could experiment with numbers instantly.`,
    `Today, the spirit of those early handheld wonders lives on in smartphones, tablets, and dedicated calculator apps. Yet the original pocket calculators remain indispensable in exam halls where internet‑connected devices are prohibited. Their legacy is a reminder that a series of modest technical advances—transistors, integrated circuits, MOSFETs, LCDs, and programmable logic—can together spark a cultural transformation that endures for decades.`,
  ],
  vocabulary: [
    { word: 'transistor', cn: '晶体管' },
    { word: 'integrated circuit', cn: '集成电路' },
    { word: 'microprocessor', cn: '微处理器' },
    { word: 'MOSFET', cn: '金属氧化物半导体场效应晶体管' },
    { word: 'LCD', cn: '液晶显示屏' },
    { word: 'programmable calculator', cn: '可编程计算器' },
  ],
};

export default article;
