import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Secret War of Corona Spy Satellites: Mapping the Cold War from Space》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00410 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00410',
  slug: 'the-secret-war-of-corona-spy-satellites-mapping-the-cold-war-from-space',
  title: 'The Secret War of Corona Spy Satellites',
  subtitle: 'How a hidden space program reshaped Cold War intelligence',
  summary: 'An inside look at the United States\' Corona reconnaissance satellites and their impact on Cold War geopolitics.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When President Eisenhower signed the National Reconnaissance Office (NRO) charter in 1961, few Americans imagined that a fleet of tiny metal cans would soon be orbiting Earth, snapping photographs of Soviet missile sites. The <span class="vocab" data-cn="美国情报机构">National Reconnaissance Office</span> kept the program shrouded in secrecy for decades, and its first operational satellite, KH‑1 “Corona,” lifted off on August 18, 1960 from Vandenberg Air Force Base. This launch marked the beginning of a covert <span class="vocab" data-cn="太空侦察">space reconnaissance</span> effort that would become one of the most important intelligence tools of the Cold War.`,
    `Unlike modern digital satellites, Corona relied on traditional film. Each satellite carried a roll of ultra‑thin photographic emulsion inside a sealed <span class = "vocab" data-cn="胶卷罐">film canister</span>. After exposure, the canister was ejected into Earth’s atmosphere in a controlled reentry maneuver known as a <span class="vocab" data-cn="返回舱">reentry vehicle</span>. Parachutes slowed its descent, and specially equipped aircraft—most famously a modified C‑130 named “Grapple”—snagged the falling capsule mid‑air before it could be lost to the ocean. The recovered film was then developed in secret labs, producing high‑resolution images of Soviet airfields, missile silos, and even nuclear test sites.`,
    `The technical challenges were immense. Corona operated in a <span class="vocab" data-cn="低地球轨道">low Earth orbit</span> at roughly 150 km altitude, completing an orbit every ninety minutes. This meant the satellite could only photograph a given target during brief windows when it passed overhead. To maximize coverage, engineers designed a series of eight successive generations—KH‑1 through KH‑4B—each improving resolution from about 200 feet to under 10 feet per pixel. By the time the program ended in 1972, analysts could identify individual aircraft on runways and even count the number of missiles stored inside hardened silos.`,
    `The intelligence gathered by Corona had immediate strategic consequences. In 1961, U‑2 spy plane photos suggested that the Soviet Union possessed a large number of intercontinental ballistic missiles (ICBMs). However, Corona’s clearer images later revealed that many of those sites were either under construction or merely decoys. This revelation helped temper the United States’ fear of an imminent “missile gap,” influencing President Kennedy’s decision to pursue arms control negotiations rather than escalating a costly arms race.`,
    `Corona also played a pivotal role in verifying compliance with the 1963 Limited Test Ban Treaty, which prohibited atmospheric nuclear explosions. By capturing before‑and‑after images of known test sites such as the Semipalatinsk range, analysts could confirm that no new underground detonations were being concealed. The program’s success demonstrated how space‑based observation could complement traditional <span class="vocab" data-cn="信号情报">signal intelligence</span> (SIGINT) and human espionage, creating a more complete picture of Soviet capabilities.`,
    `Despite its achievements, the Corona program remained classified for decades. It was not until 1995 that the CIA officially declassified many of the satellite images, releasing them to the public domain. Historians later used these photographs to map the evolution of Soviet military infrastructure, providing a visual chronicle of Cold War tensions from space. The declassification also sparked renewed interest in preserving the technical heritage of early reconnaissance satellites, leading to museum exhibits and documentaries that celebrate this hidden chapter of aerospace history.`,
    `Today, modern reconnaissance platforms—such as the NRO’s Keyhole‑X series and commercial high‑resolution imaging constellations—trace their lineage directly back to Corona. The lessons learned about rapid film recovery, orbital mechanics, and image analysis laid the groundwork for today’s real‑time satellite intelligence. While the metal cans of Corona have long since burned up on reentry, their legacy endures in every pixel that streams down from orbit, reminding us that even the most secretive wars can be mapped from above.`
  ],
  vocabulary: [
    { word: 'National Reconnaissance Office', cn: '美国国家侦察办公室' },
    { word: 'space reconnaissance', cn: '太空侦察' },
    { word: 'film canister', cn: '胶卷罐' },
    { word: 'reentry vehicle', cn: '返回舱' },
    { word: 'low Earth orbit', cn: '低地球轨道' },
    { word: 'signal intelligence', cn: '信号情报' }
  ],
};

export default article;
