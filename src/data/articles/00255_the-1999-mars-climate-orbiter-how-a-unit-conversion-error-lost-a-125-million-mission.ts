import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1999 Mars Climate Orbiter: How a Unit Conversion Error Lost a $125 Million Mission》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00255 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00255',
  slug: 'the-1999-mars-climate-orbiter-how-a-unit-conversion-error-lost-a-125-million-mission',
  title: 'The 1999 Mars Climate Orbiter: How a Unit Conversion Error Lost a $125 Million Mission',
  subtitle: 'A cautionary tale of engineering oversight in deep‑space exploration',
  summary: 'An investigation into the miscommunication that caused NASA’s Mars Climate Orbiter to burn up in the Martian atmosphere.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the <span class="vocab" data-cn="火星气候轨道器">Mars Climate Orbiter</span> lifted off from Cape Canaveral in December 1998, it carried a $125 million budget and a promise to map Martian weather patterns for future landers. The public imagined a sleek probe gliding over the Red Planet, delivering daily temperature maps and dust‑storm forecasts—an essential step toward human exploration.`,
    `The spacecraft was built by Lockheed Martin Astronautics under contract with NASA’s <span class="vocab" data-cn="喷气推进实验室">Jet Propulsion Laboratory (JPL)</span>. Its primary mission was to study the planet’s lower atmosphere using infrared spectrometers and a pressure sensor, while also testing aerobraking techniques that could save fuel for later missions. Engineers spent months calibrating instruments, running <span class="vocab" data-cn="牛顿力学">Newtonian mechanics</span> simulations, and plotting a precise interplanetary trajectory.`,
    `Navigation to Mars relies on continuous communication with the Deep Space Network (DSN) and frequent <span class="vocab" data-cn="轨道修正机动">trajectory correction maneuvers (TCMs)</span>. These tiny burns adjust the spacecraft’s velocity by fractions of a meter per second, keeping it on a narrow corridor that leads to a safe orbital insertion. Crucially, all ground‑based calculations at JPL used the <span class="vocab" data-cn="公制系统">metric system</span>, expressing forces in newtons and distances in kilometers.`,
    `The fatal mistake originated in a subcontractor’s software module that generated thrust data for the spacecraft’s thrusters. While the hardware specifications listed impulse in <span class="vocab" data-cn="磅力秒">pound‑force seconds (lbf·s)</span>, the code mistakenly output the numbers as if they were already in <span class="vocab" data-cn="牛顿秒">newton‑seconds (N·s)</span>. Because 1 lbf·s equals about 4.44822 N·s, the values were off by a factor of more than four. The discrepancy went unnoticed during routine checks because the numbers still fell within plausible ranges for small burns.`,
    `When JPL’s flight dynamics team uploaded the erroneous thrust data into their navigation software, the predicted orbit was too low. As the Orbiter approached Mars in September 1999, it entered the atmosphere at an altitude of roughly 57 kilometers instead of the intended 150‑kilometer aerobraking corridor. The thin Martian air at that height generated far more drag than anticipated, causing the spacecraft to tumble and ultimately burn up—a dramatic end captured by no camera but confirmed by loss of telemetry.`,
    `The post‑mission investigation, led by a NASA Office of Safety and Mission Assurance review board, identified the unit mismatch as the root cause. Recommendations included mandatory use of metric units across all contractors, double‑verification of data interfaces, and the implementation of automated unit‑consistency checks in software pipelines. Subsequent missions—such as the 2001 <span class="vocab" data-cn="火星全球勘测者">Mars Global Surveyor</span> and the 2005 <span class="vocab" data-cn="火星探路者">Mars Reconnaissance Orbiter</span>—benefited from these stricter standards, never repeating the same oversight.`,
    `Beyond technical fixes, the incident reshaped NASA’s cultural approach to risk. Engineers were encouraged to adopt a “fail‑fast” mindset, reporting anomalies early rather than assuming correctness. The phrase “the Mars Climate Orbiter lesson” entered internal briefings as shorthand for meticulous documentation and cross‑team communication, reminding everyone that even a simple unit conversion can have planetary consequences.`,
    `Today, the story of the lost orbiter serves as a vivid reminder that precision in engineering is not just about sophisticated algorithms or cutting‑edge hardware; it also hinges on basic arithmetic. As humanity prepares for more ambitious ventures—returning humans to the Moon and sending crewed missions to Mars—the legacy of that $125 million mistake underscores the timeless truth that every number, no matter how small, must be handled with care.`,
  ],
  vocabulary: [
    { word: 'Mars Climate Orbiter', cn: '火星气候轨道器' },
    { word: 'Jet Propulsion Laboratory (JPL)', cn: '喷气推进实验室' },
    { word: 'Newtonian mechanics', cn: '牛顿力学' },
    { word: 'metric system', cn: '公制系统' },
    { word: 'trajectory correction maneuver (TCM)', cn: '轨道修正机动' },
    { word: 'pound-force seconds (lbf·s)', cn: '磅力秒' },
    { word: 'newton-seconds (N·s)', cn: '牛顿秒' },
    { word: 'Deep Space Network', cn: '深空网络' },
  ],
};

export default article;
