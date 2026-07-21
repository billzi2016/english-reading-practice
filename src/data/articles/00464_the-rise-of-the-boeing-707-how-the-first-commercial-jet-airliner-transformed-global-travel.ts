import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise of the Boeing 707: How the First Commercial Jet Airliner Transformed Global Travel》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00464 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00464',
  slug: 'the-rise-of-the-boeing-707-how-the-first-commercial-jet-airliner-transformed-global-travel',
  title: 'The Rise of the Boeing 707: How the First Commercial Jet Airliner Transformed Global Travel',
  subtitle: 'From propeller‑driven fleets to the jet age, a revolution in speed and distance.',
  summary: 'The Boeing 707 introduced jet propulsion to civilian airlines, reshaping global travel patterns and airline economics.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1950s, most passengers boarded <span class="vocab" data-cn="螺旋桨驱动的">propeller‑driven</span> aircraft such as the Douglas DC‑3 and Lockheed Constellation. These planes cruised below ten thousand feet and rarely exceeded 300 km/h, limiting both the speed of business trips and the reach of international routes. Boeing’s engineers, inspired by wartime advances in <span class="vocab" data-cn="喷气发动机">jet engine</span> technology, began sketching a new kind of airliner that could fly higher, faster, and farther than any commercial aircraft before it.`,
    `The design process for the 707 was a blend of daring aerodynamics and pragmatic engineering. Boeing adopted a <span class="vocab" data-cn="后掠翼">swept wing</span> configuration, reducing drag at transonic speeds, while selecting the powerful Pratt & Whitney JT3C <span class="vocab" data-cn="涡轮喷气发动机">turbojet</span> for thrust. The aircraft’s clean fuselage and retractable landing gear further enhanced performance, allowing a cruising speed of over 900 km/h—nearly three times that of its propeller‑driven predecessors. These technical choices set new standards for efficiency in commercial flight.`,
    `After rigorous testing, the Boeing 707 earned certification from the Civil Aeronautics Administration in late 1958. Its inaugural revenue service launched with Pan American World Airways on October 26, 1959, connecting New York to Paris via a <span class="vocab" data-cn="加压客舱">pressurized cabin</span> that maintained comfortable conditions at altitudes above 30,000 feet. Passengers experienced smoother rides, reduced turbulence, and the novelty of looking out over a sea of clouds from a <span class="vocab" data-cn="高空">high‑altitude</span> cockpit—a stark contrast to the noisy, vibration‑laden cabins of earlier propeller planes.`,
    `The 707’s impact rippled through airline business models almost immediately. Its extended <span class="vocab" data-cn="航程">range</span> enabled carriers to adopt a <span class="vocab" data-cn="枢纽辐射网络">hub‑and‑spoke</span> system, funneling passengers from smaller regional airports into major international hubs before dispatching them on long‑haul jets. Travel times between continents shrank dramatically; a New York–London flight that once took over 12 hours could now be completed in under eight. This efficiency lowered ticket prices and opened air travel to a broader middle class, fundamentally altering global mobility.`,
    `Competition soon followed, most notably from the Douglas DC‑8, which mirrored many of the 707’s specifications. Yet Boeing’s early market lead forced airports worldwide to upgrade infrastructure: longer runways accommodated higher takeoff speeds, and the advent of the <span class="vocab" data-cn="登机桥">jet bridge</span> streamlined passenger boarding directly from terminal gates. These changes not only supported larger aircraft but also spurred advances in <span class="vocab" data-cn="空气动力学">aerodynamics</span> research, influencing subsequent designs such as the Boeing 727 and 747.`,
    `The legacy of the Boeing 707 endures in modern <span class="vocab" data-cn="民用航空">commercial aviation</span>. By proving that jet propulsion could be reliable, economical, and safe for mass transport, it paved the way for today’s global network of nonstop flights. Moreover, its introduction prompted enhancements in <span class="vocab" data-cn="空中交通管制">air traffic control</span> systems to manage higher traffic densities at cruising altitudes. In retrospect, the 707 was not merely an aircraft; it was a catalyst that transformed how societies connect, conduct business, and experience the world.`,
  ],
  vocabulary: [
    { word: 'propeller‑driven', cn: '螺旋桨驱动的' },
    { word: 'jet engine', cn: '喷气发动机' },
    { word: 'swept wing', cn: '后掠翼' },
    { word: 'turbojet', cn: '涡轮喷气发动机' },
    { word: 'pressurized cabin', cn: '加压客舱' },
    { word: 'high‑altitude', cn: '高空' },
    { word: 'range', cn: '航程' },
    { word: 'hub‑and‑spoke', cn: '枢纽辐射网络' },
    { word: 'jet bridge', cn: '登机桥' },
    { word: 'aerodynamics', cn: '空气动力学' },
    { word: 'commercial aviation', cn: '民用航空' },
    { word: 'air traffic control', cn: '空中交通管制' },
  ],
};

export default article;
