import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Race to Build the World’s First Operational Jet Fighter: Germany’s Me 262 and Allied Responses》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00391 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00391',
  slug: 'the-race-to-build-the-world-s-first-operational-jet-fighter-germany-s-me-262-and-allied-responses',
  title: 'The Race to Build the World’s First Operational Jet Fighter: Germany’s Me 262 and Allied Responses',
  subtitle: 'How a revolutionary aircraft reshaped aerial warfare before the war ended',
  summary: 'A narrative of the German Me 262’s development, its technical hurdles, and how the Allies reacted.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `By early 1943 the Luftwaffe faced a desperate need for an aircraft that could outrun Allied bombers. Adolf Hitler’s staff ordered Messerschmitt to design a fighter that would exploit the promise of high‑speed <span class="vocab" data-cn="喷气发动机">turbojet</span> propulsion, a technology still in its infancy. The result was the Me 262, officially designated “Schwalbe” (Swallow). Its sleek, swept‑wing silhouette looked more like a science‑fiction sketch than a wartime machine, yet German engineers believed it could finally give them air superiority over the increasingly dominant Allied fleets.`,
    `The heart of the Me 262 was the Junkers Jumo 004 <span class="vocab" data-cn="喷气发动机">turbojet</span> engine, a simple axial‑flow design that produced about 8.8 kN of thrust. Unlike piston engines, the Jumo 004 required extremely high combustion temperatures, forcing designers to use heat‑resistant alloys such as nickel‑chromium steel for turbine blades. Manufacturing tolerances were tight, and wartime shortages meant many parts were forged from inferior metal, leading to frequent engine failures after just a few minutes of flight. These material constraints turned the Me 262 into a fragile but terrifyingly fast platform.`,
    `Production began in earnest at the Messerschmitt plant in Augsburg, but Hitler’s strategic indecision delayed its deployment. He repeatedly ordered the aircraft to be used as a bomber rather than a pure fighter, insisting on fitting it with a bomb rack that compromised its already marginal range. It was not until July 1944 that the first Me 262 units saw combat over the Western Front, intercepting Allied bomber streams at speeds exceeding 870 km/h. Pilots reported that even a single burst from their cannon could shred a B‑17, yet the aircraft’s limited numbers—fewer than 1,400 were built and only about 300 reached operational squadrons—prevented any decisive shift in the air war.`,
    `Allied intelligence services had been monitoring German jet research since the early stages of the conflict. British scientists at the Royal Aircraft Establishment received fragments of technical drawings through espionage networks, while American analysts at the Office of Strategic Services (OSS) intercepted radio traffic describing test flights. The most significant breakthrough came after a Me 262 crash‑landing near the Dutch town of Deelen in March 1945; Allied engineers recovered an intact Jumo 004 and a handful of airframe components, providing a rare glimpse into German <span class="vocab" data-cn="空气动力学">aerodynamics</span> and propulsion concepts.`,
    `In the United States, captured Me 262s were shipped to Wright Field in Ohio for evaluation. Test pilots there discovered that the aircraft’s high‑speed handling characteristics foreshadowed many design principles later used in the North American F‑86 Sabre, the first successful jet fighter of the Korean War. The data gathered from the Jumo 004 also accelerated research into more reliable turbine materials, influencing the development of the General Electric J47 engine that powered early American jets. Meanwhile, across the Channel, the British Gloster Meteor—already in limited service—benefited indirectly from German research on swept‑wing layouts and high‑temperature alloys.`,
    `Despite its operational shortcomings, the Me 262 left an indelible mark on post‑war aviation. Its very existence forced both sides to reconsider the future of air combat, shifting strategic doctrines away from propeller‑driven aircraft toward pure jet fleets. The concept of “<span class="vocab" data-cn="作战准备">operational readiness</span>” for a new generation of high‑speed fighters became a central focus in NATO planning during the early Cold War. Moreover, the Me 262’s legacy inspired a wave of experimental designs, from the Soviet MiG‑9 to the French Dassault Ouragan, each seeking to improve upon the German pioneer’s daring but fragile blueprint.`,
    `In hindsight, the race to field the world’s first operational jet fighter was as much a story of engineering ambition as it was of political missteps. Had Hitler allowed the Me 262 to be deployed earlier and exclusively as an interceptor, its impact on Allied bombing campaigns might have been more pronounced. Nevertheless, the aircraft demonstrated that <span class="vocab" data-cn="空中优势">air superiority</span> could be achieved through sheer speed, reshaping military thinking for decades to come. The Me 262 remains a symbol of both the promise and peril of rapid technological innovation under wartime pressure.`,
  ],
  vocabulary: [
    { word: 'turbojet', cn: '喷气发动机' },
    { word: 'propulsion', cn: '推进力' },
    { word: 'aerodynamics', cn: '空气动力学' },
    { word: 'operational readiness', cn: '作战准备' },
    { word: 'air superiority', cn: '空中优势' },
    { word: 'Wright Field', cn: '赖特场（美国航空试验基地）' },
  ],
};

export default article;
