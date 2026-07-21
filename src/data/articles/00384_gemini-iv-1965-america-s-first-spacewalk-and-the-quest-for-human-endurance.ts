import type { Article } from '../../types/index.ts';

// 文件意图：维护《Gemini IV (1965): America’s First Spacewalk and the Quest for Human Endurance》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00384 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00384',
  slug: 'gemini-iv-1965-america-s-first-spacewalk-and-the-quest-for-human-endurance',
  title: 'Gemini IV (1965): America’s First Spacewalk and the Quest for Human Endurance',
  subtitle: 'How a daring EVA reshaped NASA’s view of human limits in space',
  summary: 'The Gemini IV mission marked the United States’ first extravehicular activity, testing both technology and the human body in micro‑gravity.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1965, amid a fierce Cold War space race, NASA launched Gemini IV on March 16 from Cape Canaveral. The two‑man crew—command pilot James “Jim” Lovell and pilot Ed White—was tasked with a simple yet audacious goal: stay aloft for at least 48 hours in low Earth orbit and prove that humans could live and work beyond the protective cocoon of their spacecraft.`,
    `The mission’s most celebrated moment came on the second day, when Ed White slipped out of the hatch and became the first American to perform an <span class="vocab" data-cn="舱外活动">extravehicular activity</span> (EVA). Wearing a specially designed pressure suit, he floated tethered to the Gemini capsule for 23 minutes, his gloved hand reaching toward the blackness while the Earth turned beneath him. The sight was broadcast live, inspiring millions and giving NASA a tangible proof that astronauts could step outside their vehicle without immediate danger.`,
    `Behind the drama lay a complex web of <span class="vocab" data-cn="轨道力学">orbital mechanics</span>. Gemini IV orbited at roughly 160 km altitude, completing an orbit every 90 minutes. Engineers had to calculate precisely when the spacecraft would be over ground stations capable of receiving telemetry, ensuring that White’s suit pressure, oxygen levels, and temperature could be monitored in real time. Any mis‑calculation could have left him adrift with no way to return.`,
    `The EVA also served as a living laboratory for <span class="vocab" data-cn="生物医学遥测">biomedical telemetry</span>. Sensors attached to White’s suit transmitted heart rate, respiration, and blood pressure back to Mission Control. These data revealed how the human cardiovascular system responded to microgravity—showing a rapid redistribution of blood toward the upper body and a slight drop in arterial pressure. Such findings were crucial for planning longer missions, where prolonged exposure could lead to more serious health issues.`,
    `Equally important was the performance of the Gemini’s <span class="vocab" data-cn="生命维持系统">life support system</span>. The spacecraft relied on a closed‑loop environmental control that scrubbed carbon dioxide and supplied fresh oxygen. During White’s EVA, the suit’s own life support had to operate independently for over twenty minutes, a first test of portable systems that would later become standard on Apollo lunar excursions and International Space Station (ISS) spacewalks.` ,
    `The mission’s success reshaped NASA’s confidence in human endurance. Lovell’s 48‑hour flight demonstrated that astronauts could maintain cognitive function and physical coordination for extended periods, while White’s EVA proved that the body could tolerate brief exposure to vacuum when properly protected. These insights fed directly into the design of Gemini VIII’s docking maneuvers and Apollo’s lunar surface walks, where astronauts would spend hours in suits far from Earth’s gravity.` ,
    `Decades later, the legacy of Gemini IV lives on every time an astronaut steps outside a spacecraft. Modern EVAs last much longer—often exceeding six hours—and are supported by sophisticated suit technologies that trace their lineage back to White’s pioneering flight. The mission reminded humanity that space exploration is as much about testing human limits as it is about building rockets, and it set the stage for the era of long‑duration missions that we continue to pursue today.`
  ],
  vocabulary: [
    { word: 'extravehicular activity', cn: '舱外活动' },
    { word: 'orbital mechanics', cn: '轨道力学' },
    { word: 'biomedical telemetry', cn: '生物医学遥测' },
    { word: 'life support system', cn: '生命维持系统' },
    { word: 'microgravity', cn: '微重力' },
    { word: 'reentry capsule', cn: '再入舱' }
  ],
};

export default article;
