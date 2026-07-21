import type { Article } from '../../types/index.ts';

// 文件意图：维护《The V‑2 Rocket Legacy: From Nazi Weaponry to the Dawn of Space Exploration》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00105 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00105',
  slug: 'the-v-2-rocket-legacy-from-nazi-weaponry-to-the-dawn-of-space-exploration',
  title: 'The V‑2 Rocket Legacy: From Nazi Weaponry to the Dawn of Space Exploration',
  subtitle: 'How a wartime terror became the foundation of modern rocketry.',
  summary: 'Explore the technical breakthroughs and ethical twists that turned the V‑2 from a weapon into a stepping stone for space travel.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When the first rockets streaked across the night sky over London in 1944, civilians heard a roar unlike any artillery shell. Those were the infamous <span class="vocab" data-cn="V‑2火箭">V‑2 rocket</span>, the world’s first long‑range <span class="vocab" data-cn="弹道导弹">ballistic missile</span>. Built by Nazi Germany, they caused terror and destruction, yet their engineering brilliance would later ignite humanity’s quest to reach the stars. The paradox of a weapon that opened the door to peaceful exploration makes the V‑2 story both haunting and inspiring.`,
    `The mastermind behind the project was Wernher von Braun, a young physicist recruited by the German Army to head the secret research centre at Peenemünde on the Baltic coast. There, a team of engineers wrestled with unprecedented challenges: how to store and burn large quantities of propellant, how to steer a vehicle traveling faster than sound, and how to survive the intense heat of re‑entry. Their solution was <span class="vocab" data-cn="液体燃料推进">liquid-fuel propulsion</span>, using a mixture of ethanol and liquid oxygen that could be throttled and ignited in flight—an innovation that remains the backbone of modern rockets.`,
    `Designing the V‑2 required more than raw power; it demanded precise control. The rocket employed an early <span class="vocab" data-cn="制导系统">guidance system</span> built around gyroscopic stabilisers and a simple analog computer that adjusted thrust to keep the vehicle on course. Its aerodynamic shape—long, slender, and nose‑pointed—was refined through wind‑tunnel tests to minimise drag, an early triumph of <span class="vocab" data-cn="空气动力学">aerodynamics</span>. As the missile climbed, onboard sensors transmitted data back to ground stations via <span class="vocab" data-cn="遥测">telemetry</span>, giving scientists a rare glimpse into high‑altitude conditions that had never been measured before.`,
    `When Germany surrendered in 1945, the Allies scrambled to seize both the rockets and the engineers who built them. In Operation Paperclip, the United States recruited von Braun and many of his colleagues, while the Soviet Union captured a second batch of V‑2s and their documentation. These rival programs laid the groundwork for the first post‑war <span class="vocab" data-cn="弹道导弹">ballistic missile</span> projects: the American Redstone and the Soviet R‑1. Both inherited the V‑2’s liquid‑fuel engine, guidance concepts, and even some of its structural schematics, turning a weapon of war into a platform for scientific research.`,
    `The captured rockets became flying laboratories. By launching V‑2s from White Sands in New Mexico, American scientists gathered valuable information about atmospheric density, temperature gradients, and ionisation layers far above the reach of balloons. The telemetry streams revealed how heat shields behaved during re‑entry—a crucial insight that later enabled the development of the ablative shields used on Mercury, Gemini, and Apollo capsules. In this way, the V‑2’s brief career as a weapon directly fed the data needed for safe human spaceflight.`,
    `Decades after the war, the lineage is unmistakable. The Redstone evolved into the Jupiter‑C, which became the Saturn I—the first step toward the massive Saturn V that carried astronauts to the Moon. Across the Atlantic, French and German engineers who had worked on V‑2 technology contributed to Europe’s early launchers, eventually leading to the Ariane family of rockets that dominate commercial satellite markets today. Even the modern concept of a reusable launch vehicle owes a debt to the V‑2’s pioneering use of staged propulsion and aerodynamic stability.`,
    `Beyond its technical legacy, the V‑2 story serves as a cautionary tale about dual‑use technology. A weapon designed for destruction became the seed of peaceful exploration, reminding us that scientific breakthroughs carry moral responsibilities. As we look toward Mars and beyond, the echo of that 1940s thunderous launch reminds humanity that every great achievement may arise from a complex past, urging us to steer future rockets toward cooperation rather than conflict.`,
  ],
  vocabulary: [
    { word: 'V‑2 rocket', cn: 'V‑2火箭' },
    { word: 'ballistic missile', cn: '弹道导弹' },
    { word: 'liquid-fuel propulsion', cn: '液体燃料推进' },
    { word: 'guidance system', cn: '制导系统' },
    { word: 'telemetry', cn: '遥测' },
    { word: 'aerodynamics', cn: '空气动力学' },
  ],
};

export default article;
