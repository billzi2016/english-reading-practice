import type { Article } from '../../types/index.ts';

// 文件意图：维护《Salyut 1: Pioneering Life on the First Space Station》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00142 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00142',
  slug: 'salyut-1-pioneering-life-on-the-first-space-station',
  title: 'Salyut 1: Pioneering Life on the First Space Station',
  subtitle: 'How humanity learned to live in orbit for the first time',
  summary: 'An engaging look at the design, daily life, and legacy of Salyut 1, the world’s inaugural space station.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On 19 April 1971, the Soviet Union launched <span class="vocab" data-cn="萨柳特一号">Salyut 1</span> into a low‑Earth orbit, marking the first time a human‑made habitat floated continuously above our planet. The mission arrived at a pivotal moment in the Cold War space race, when both superpowers were eager to demonstrate not just that they could reach space, but that they could stay there for extended periods. Salyut 1’s 96‑day orbital lifetime proved that a permanent outpost was technically feasible, setting the stage for future stations such as Mir and the International Space Station.`,
    `The station’s architecture was deceptively simple yet ingeniously functional. Its core consisted of a sealed <span class="vocab" data-cn="加压舱段">pressurized module</span> equipped with a rudimentary <span class="vocab" data-cn="生命维持系统">life support system</span>, which recycled air and removed carbon dioxide using lithium hydroxide canisters. An attached <span class="vocab" data-cn="轨道舱">orbital module</span> provided additional volume for experiments, while a small <span class="vocab" data-cn="返回舱">reentry capsule</span> served as an emergency escape vehicle. The Soviet spacecraft <span class="vocab" data-cn="联盟号飞船">Soyuz</span> was designed to dock with Salyut 1, allowing crews to transfer directly between the two vessels.`,
    `The first successful crewed visit occurred on 6 June 1971 when three <span class="vocab" data-cn="宇航员">cosmonauts</span>—Georgy Dobrovolsky, Vladislav Volkov, and Viktor Patsayev—entered Salyut 1 aboard Soyuz 11. Over the next 23 days they conducted a series of scientific experiments that took advantage of <span class="vocab" data-cn="微重力">microgravity</span>, such as studying crystal growth, fluid dynamics, and the behavior of plant seedlings in orbit. Their daily routine involved meticulous monitoring of cabin pressure, temperature, and humidity, all recorded on paper logs that would later be analyzed by ground teams.</`,
    `Living aboard Salyut 1 was far from comfortable, but the crew adapted with ingenuity. Sleeping arrangements consisted of narrow hammocks bolted to the walls, allowing the astronauts to float gently as they rested. Food came in vacuum‑sealed packets; meals were rehydrated with water from a small dispenser and eaten with magnetic utensils to prevent them from drifting away. Waste management relied on simple suction devices that collected urine and solid waste into sealed containers for later disposal during re‑entry. Psychologically, the isolation was mitigated by regular radio contacts with mission control, which provided news updates and morale‑boosting messages.</`,
    `Despite its successes, Salyut 1 faced formidable technical challenges. The station’s thin aluminum hull offered limited protection against high‑energy particles, making <span class="vocab" data-cn="辐射防护">radiation shielding</span> a constant concern for crew health. Moreover, the design of the <span class="vocab" data-cn="返回舱">reentry capsule</span> left little margin for error; any malfunction during separation could prove fatal. Engineers therefore incorporated multiple redundant valves and pressure sensors, though some of these safeguards would later be revealed as insufficient under extreme conditions.</`,
    `Tragedy struck on 30 June 1971 when Soyuz 11’s reentry capsule suffered a sudden depressurization at an altitude of about 5 km, killing all three cosmonauts. Post‑mortem analysis identified a faulty breathing valve as the culprit, prompting a complete redesign of future spacecraft seals and the mandatory use of pressure suits during critical phases of flight. The loss cast a somber shadow over Salyut 1’s achievements but also accelerated safety innovations that would protect crews on later stations.</`,
    `The legacy of Salyut 1 endures in every modern orbital platform. Lessons learned about <span class="vocab" data-cn="对接">docking</span> procedures, environmental control, and crew psychology informed the development of the long‑duration Mir program and, ultimately, the International Space Station’s sophisticated habitat modules. Even today, engineers reference Salyut 1’s simple yet robust design when planning commercial habitats for private spaceflight, proving that the pioneering spirit of those early Soviet engineers continues to shape humanity’s future among the stars.`,
    `Reflecting on Salyut 1 reminds us that the first steps toward living in space were as much about human resilience as they were about engineering. The station proved that a sealed environment could sustain life beyond Earth, that crews could adapt to the quirks of microgravity, and that even tragedy can drive progress. As new nations and companies aim for lunar bases and Martian outposts, the story of Salyut 1 remains a testament to what is possible when curiosity, courage, and careful design converge in the vacuum of space.`,
  ],
  vocabulary: [
    { word: 'Salyut 1', cn: '萨柳特一号' },
    { word: 'pressurized module', cn: '加压舱段' },
    { word: 'life support system', cn: '生命维持系统' },
    { word: 'orbital module', cn: '轨道舱' },
    { word: 'reentry capsule', cn: '返回舱' },
    { word: 'Soyuz', cn: '联盟号飞船' },
    { word: 'cosmonaut', cn: '宇航员' },
    { word: 'microgravity', cn: '微重力' },
    { word: 'radiation shielding', cn: '辐射防护' },
    { word: 'docking', cn: '对接' },
  ],
};

export default article;
