import type { Article } from '../../types/index.ts';

// 文件意图：维护《Igor Sikorsky’s VS‑300: The Birth of the Modern Helicopter and Its Impact on Aviation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00265 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00265',
  slug: 'igor-sikorsky-s-vs-300-the-birth-of-the-modern-helicopter-and-its-impact-on-aviation',
  title: 'Igor Sikorsky’s VS‑300: The Birth of the Modern Helicopter and Its Impact on Aviation',
  subtitle: 'How a daring prototype reshaped vertical flight',
  summary: 'The story of Igor Sikorsky’s VS‑300, its groundbreaking technologies, and why it matters to today’s helicopters.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When Igor Sikorsky fled the turmoil of post‑World‑War I Russia, he carried with him a lifelong fascination for vertical flight.  In the United States he joined the fledgling aviation firm that would become Sikorsky Aircraft, and by the late 1930s he was convinced that a practical <span class="vocab" data-cn="直升机">helicopter</span> could finally be built.  His earlier experiments with coaxial rotors had taught him that stability required more than just spinning blades; it demanded precise control of blade pitch and a reliable power source.`,
    `The result was the <span class="vocab" data-cn="VS‑300 型号">VS‑300</span>, a single‑main‑rotor, tail‑rotor configuration that first took to the sky on September 14 1939.  Unlike earlier “autogyros” that relied on forward motion for lift, the VS‑300’s main rotor was powered directly by a 150‑horsepower Warner R-151 radial engine.  This arrangement made it a true <span class="vocab" data-cn="旋翼机">rotorcraft</span>, capable of hovering, vertical ascent, and reverse flight—maneuvers that fixed‑wing aircraft could not perform.`,
    `One of the most daring aspects of Sikorsky’s design was the implementation of <span class="vocab" data-cn="循环桨距控制">cyclic pitch control</span>.  By allowing the pilot to change the blade angle at a specific point in each rotation, the aircraft could tilt its lift vector forward, backward, or sideways.  This breakthrough gave the VS‑300 true directional control while hovering, something earlier prototypes had struggled to achieve.  The collective lever, which altered the pitch of all blades simultaneously, provided rapid changes in overall lift, enabling quick climbs and descents.`,
    `Safety was another priority for Sikorsky.  He incorporated an <span class="vocab" data-cn="自转下落">autorotation</span> capability that allowed the rotor to continue spinning even if engine power failed.  In such a scenario, airflow through the rotor disc would keep the blades turning, giving the pilot enough time to execute a controlled landing.  This principle remains a cornerstone of modern helicopter emergency procedures and has saved countless lives since the VS‑300’s first flight.`,
    `The prototype also demonstrated impressive <span class="vocab" data-cn="纵向稳定性">longitudinal stability</span> thanks to its tail rotor, which counteracted the torque produced by the main rotor.  By fine‑tuning the tail rotor’s thrust, Sikorsky achieved a balanced aircraft that could maintain steady flight without excessive pilot input.  Moreover, the VS‑300’s design achieved an excellent <span class="vocab" data-cn="功率重量比">power-to-weight ratio</span>, a metric still used today to assess a helicopter’s performance envelope.`,
    `The U.S. Army Air Forces took notice, and in 1942 they ordered a production version known as the R‑4.  The R‑4 became the world’s first mass‑produced helicopter, serving in rescue missions, artillery spotting, and even early cargo transport during World II.  Its success proved that Sikorsky’s concepts were not merely experimental curiosities but viable solutions for military and civilian needs alike.`,
    `Decades later, every modern civil or military helicopter—from the Bell UH‑1 “Huey” to the Airbus H‑160—carries the DNA of the VS‑300.  The same principles of cyclic control, autorotation safety, and tail‑rotor torque compensation are taught in flight schools worldwide.  Sikorsky’s daring prototype thus stands as a pivotal moment in aviation history, marking the birth of an aircraft type that can reach places fixed‑wing planes never could.`,
  ],
  vocabulary: [
    { word: 'VS‑300', cn: 'VS‑300 型号' },
    { word: 'rotorcraft', cn: '旋翼机' },
    { word: 'cyclic pitch control', cn: '循环桨距控制' },
    { word: 'autorotation', cn: '自转下落' },
    { word: 'longitudinal stability', cn: '纵向稳定性' },
    { word: 'power-to-weight ratio', cn: '功率重量比' },
  ],
};

export default article;
