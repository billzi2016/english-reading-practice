import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1965 Gemini III Mission: America’s First Multi‑Crew Spaceflight and Its Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00447 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00447',
  slug: 'the-1965-gemini-iii-mission-america-s-first-multi-crew-spaceflight-and-its-legacy',
  title: 'The 1965 Gemini III Mission: America’s First Multi‑Crew Spaceflight and Its Legacy',
  subtitle: 'How Gemini III turned two astronauts into pioneers of orbital flight.',
  summary: 'An engaging look at the historic Gemini III mission, its technical breakthroughs, and lasting impact on human space exploration.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When President John F. Kennedy announced a bold goal to land a man on the Moon before the decade’s end, NASA first needed to master the basics of long‑duration, multi‑crew flight. The <span class="vocab" data-cn="双子座计划">Gemini program</span> was conceived as that bridge, following the single‑pilot Mercury flights. By March 1965, the United States was ready for its first two‑person orbital mission, a daring step that would prove crews could live and work together in space.`,
    `On March 23, 1965, a <span class="vocab" data-cn="泰坦二号运载火箭">Titan II</span> rocket roared from Cape Canaveral, lofting the Gemini III spacecraft into a low Earth orbit. Inside, Commander James A. McDivitt and Pilot Edwin “Buzz” Aldrin (later famous for Apollo 11) took their seats behind a compact console filled with switches, dials, and a small <span class="vocab" data-cn="热防护材料">heat shield</span> that would protect them during re‑entry. The launch marked the first time two Americans shared a spacecraft beyond the atmosphere.`,
    `The mission’s primary objective was to demonstrate a controlled <span class="vocab" data-cn="轨道机动">orbital maneuver</span>. Using the spacecraft’s <span class="vocab" data-cn="同步转向发动机">reaction control thrusters</span>, McDivitt performed a 360‑degree roll and then fired the engine to raise the orbit by roughly 20 kilometers. This was the first time astronauts manually altered their trajectory, proving that future rendezvous and docking maneuvers—essential for lunar missions—were feasible.`,
    `Achieving precise control required a reliable <span class="vocab" data-cn="姿态控制系统">attitude control system</span>. The Gemini III’s gyroscopes sensed the vehicle’s orientation, while the thrusters provided quick adjustments. Engineers also relied on continuous <span class="vocab" data-cn="遥测数据">telemetry</span> streams sent to Mission Control, allowing ground controllers to monitor fuel consumption, cabin pressure, and the health of the life‑support system in real time.`,
    `Although Gemini III lasted only about four hours—completing 14 orbits before splashing down in the Atlantic—the flight was packed with firsts. It proved that two astronauts could share limited space, conduct experiments, and communicate effectively while under microgravity. The crew also tested a simple “hand‑held maneuvering unit,” a precursor to later EVA (extravehicular activity) tools, hinting at the future of spacewalks that would become routine on Gemini IV and beyond.`,
    `The legacy of Gemini III rippled through every subsequent NASA program. The confidence gained from multi‑crew operations fed directly into the more complex Gemini VIII rendezvous with an Agena target vehicle, a critical rehearsal for Apollo’s lunar orbit docking. Moreover, the mission’s data on human factors—sleep cycles, nutrition, and interpersonal dynamics—shaped the design of the Apollo command module and later the International Space Station’s habitability standards.`,
    `Today, commercial crew vehicles such as SpaceX’s Crew Dragon echo Gemini III’s spirit: two (or more) astronauts launch together, perform precise orbital adjustments, and return safely. The lessons learned about attitude control, thruster reliability, and real‑time telemetry continue to inform modern spacecraft design, ensuring that the pioneering steps taken in 1965 remain a cornerstone of human spaceflight.`,
  ],
  vocabulary: [
    { word: 'Gemini program', cn: '双子座计划' },
    { word: 'Titan II', cn: '泰坦二号运载火箭' },
    { word: 'heat shield', cn: '热防护材料' },
    { word: 'orbital maneuver', cn: '轨道机动' },
    { word: 'reaction control thruster', cn: '同步转向发动机' },
    { word: 'attitude control system', cn: '姿态控制系统' },
    { word: 'telemetry', cn: '遥测数据' },
  ],
};

export default article;
