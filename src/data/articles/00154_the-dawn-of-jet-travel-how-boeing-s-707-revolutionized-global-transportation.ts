import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Dawn of Jet Travel: How Boeing’s 707 Revolutionized Global Transportation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00154 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00154',
  slug: 'the-dawn-of-jet-travel-how-boeing-s-707-revolutionized-global-transportation',
  title: 'The Dawn of Jet Travel: How Boeing’s 707 Revolutionized Global Transportation',
  subtitle: 'How a single airliner reshaped the world’s skies',
  summary: 'An engaging look at how the Boeing 707 ushered in the jet age and transformed global travel.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the late 1950s, commercial aviation was still dominated by propeller‑driven aircraft such as the Douglas DC‑6. Passengers endured long flight times and noisy cabins, while airlines struggled to compete with the speed of emerging military jets. Boeing recognized that a civilian <span class="vocab" data-cn="喷气式客机">jet airliner</span> could unlock new markets if it combined reliability with passenger comfort. The result was the Boeing 707, first rolled out in 1958 and certified for service two years later.`,
    `The 707’s most striking feature was its powerful <span class="vocab" data-cn="喷气发动机">jet engine</span>, specifically the Pratt & Whitney JT3C turbo‑jet. Unlike earlier piston engines, the turbo‑jet produced thrust by expelling high‑velocity exhaust gases, allowing the aircraft to cruise at over 600 mph (≈965 km/h). This speed cut transatlantic flight times from more than 15 hours down to under eight, turning what had been an arduous journey into a feasible business trip. The public quickly associated “jet travel” with the sleek silhouette of the 707’s swept wings and slender fuselage.`,
    `Beyond raw speed, the 707 introduced several engineering breakthroughs that set new standards for safety and comfort. Its pressurised cabin maintained a sea‑level equivalent altitude of about 8,000 feet, reducing passenger fatigue on long routes. The aircraft also featured a fully retractable landing gear and hydraulic flight‑control systems that improved handling at high speeds. These innovations earned the 707 its first major customer, Pan American World Airways, which launched the iconic “Clipper” service from New York to Paris in 1959.`,
    `The commercial success of the 707 sparked an intense rivalry with Douglas Aircraft’s DC‑8, prompting both manufacturers to refine aerodynamics and engine efficiency. Boeing responded by developing the more fuel‑efficient <span class="vocab" data-cn="涡扇发动机">turbofan</span> variants for later models like the 727 and 747. Meanwhile, airlines began reorganising their route networks around the capabilities of jet aircraft. The concept of a “hub‑and‑spoke” system—central airports feeding smaller regional flights—grew out of the need to maximise the high capacity and speed of jets such as the 707.`,
    `The impact on global transportation was profound. With faster, longer‑range flights, airlines could offer non‑stop services between continents that previously required multiple stops for refuelling. Business travelers seized the opportunity to attend meetings across Europe and North America within a single day, accelerating international trade and cultural exchange. Tourism boomed as vacationers could now reach exotic destinations like Bangkok or Nairobi without enduring days of cramped travel.`,
    `While the 707 was eventually superseded by more advanced models, its legacy endures in modern aviation. The aircraft demonstrated that jet propulsion could be both reliable and economically viable for civilian use, paving the way for later giants such as the Boeing 747 “Jumbo Jet” and the Airbus A380. Moreover, many of the design philosophies—swept wings, high‑by‑pass engines, and pressurised cabins—remain core to today’s <span class="vocab" data-cn="客运飞机">airliners</span>. Even museums preserve a handful of restored 707s as living testimony to this transformative era.`,
    `In retrospect, the Boeing 707 did more than shrink travel times; it reshaped how societies perceive distance. By turning continents into neighboring cities, the jet age fostered a truly global economy and altered everyday life for millions. The aircraft’s story reminds us that technological breakthroughs often arise from daring visions combined with meticulous engineering—a lesson as relevant today as it was half a century ago.`,
  ],
  vocabulary: [
    { word: 'jet airliner', cn: '喷气式客机' },
    { word: 'jet engine', cn: '喷气发动机' },
    { word: 'turbofan', cn: '涡扇发动机' },
    { word: 'pressurised cabin', cn: '加压舱室' },
    { word: 'hub-and-spoke', cn: '枢纽辐射网络' },
    { word: 'airliners', cn: '客运飞机' },
  ],
};

export default article;
