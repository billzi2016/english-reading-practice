import type { Article } from '../../types/index.ts';

// 文件意图：维护《Apollo 12’s Lightning Strike: A Near‑Disaster that Tested NASA’s Crisis Management》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00249 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00249',
  slug: 'apollo-12-s-lightning-strike-a-near-disaster-that-tested-nasa-s-crisis-management',
  title: 'Apollo 12’s Lightning Strike: A Near‑Disaster that Tested NASA’s Crisis Management',
  subtitle: 'How a sudden flash almost derailed the second lunar landing mission',
  summary: 'A dramatic recount of the lightning event that hit Apollo 12 minutes after launch and how NASA’s team turned crisis into success.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On November 14, 1969, the <span class="vocab" data-cn="土星五号运载火箭">Saturn V</span> roared down the launch pad at Kennedy Space Center, carrying astronauts Charles “Pete” Conrad and Alan L. Bean along with their Command Module “Yankee Clipper”. The mission was meant to be a straightforward follow‑up to Apollo 11, but within 36 seconds of liftoff a sudden <span class="vocab" data-cn="闪电击中">lightning strike</span> ripped through the vehicle’s outer skin, sending a cascade of electrical surges into its delicate systems.`,
    `The lightning bolt struck the launch tower and traveled down the umbilical cables, creating a brief but intense spike in the spacecraft’s <span class="vocab" data-cn="遥测系统">telemetry</span>. Instruments that monitored engine performance, guidance, and communications flickered off, prompting Mission Control to consider an immediate <span class="vocab" data-cn="中止发射的紧急程序">abort</span>. In the control room, flight director Gene Kranz’s voice cut through the static: “We’ve lost telemetry. Get us a status report.”`,
    `While the crew inside the Command Module felt only a mild jolt, their onboard displays went dark. Conrad, trained for such contingencies, quickly ran a checklist to verify that the <span class="vocab" data-cn="指令舱">Command Module</span> was still receiving power and that the main engine thrust remained nominal. Simultaneously, the ground team used redundant <span class="vocab" data-cn="地面监控系统">ground monitoring</span> to confirm that the vehicle’s trajectory had not been altered.`,
    `The crisis deepened when the spacecraft’s <span class="vocab" data-cn="姿态控制系统">attitude control system</span> reported spurious readings, suggesting a possible loss of orientation. If the guidance computer had misinterpreted these signals, the rocket could have veered off course. NASA engineers, recalling lessons from the Apollo 1 fire and earlier unmanned missions, decided to trust the redundant data streams rather than trigger an abort that would waste months of preparation.`,
    `Within minutes, the lightning‑induced noise subsided, and normal telemetry returned. The Saturn V continued its ascent, shedding stages as planned. By the time the <span class="vocab" data-cn="S‑IVB 第三级">S‑IVB stage</span> ignited for trans‑lunar injection, all systems were green again. Conrad later joked that “the lightning was just a little welcome party,” but the episode had already cemented new protocols for handling electrical disturbances during launch.`,
    `In the aftermath, NASA instituted the “Lightning Detection and Avoidance” procedure, which required real‑time monitoring of storm cells around the pad and mandated a minimum safe distance before liftoff. The Apollo 12 incident also highlighted the importance of crew autonomy; the astronauts’ ability to assess their own spacecraft without waiting for ground commands proved vital. This balance between centralized control and on‑board decision‑making became a cornerstone of later missions, including the Space Shuttle program.`,
    `Apollo 12 ultimately achieved its objectives, landing on the Moon’s Ocean of Storms and retrieving parts of the Surveyor 3 probe. The lightning strike, once a near‑disaster, is now remembered as a test of NASA’s crisis management culture—a reminder that even in the most meticulously planned endeavors, nature can throw an unexpected curveball, and preparation is the best defense.`,
  ],
  vocabulary: [
    { word: 'Saturn V', cn: '土星五号运载火箭' },
    { word: 'lightning strike', cn: '闪电击中' },
    { word: 'telemetry', cn: '遥测系统' },
    { word: 'abort', cn: '中止发射的紧急程序' },
    { word: 'Command Module', cn: '指令舱' },
    { word: 'ground monitoring', cn: '地面监控系统' },
    { word: 'attitude control system', cn: '姿态控制系统' },
    { word: 'S‑IVB stage', cn: 'S‑IVB 第三级' },
  ],
};

export default article;
