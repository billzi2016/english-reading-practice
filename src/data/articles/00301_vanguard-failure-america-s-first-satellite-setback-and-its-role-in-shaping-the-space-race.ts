import type { Article } from '../../types/index.ts';

// 文件意图：维护《Vanguard Failure: America’s First Satellite Setback and Its Role in Shaping the Space Race》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00301 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00301',
  slug: 'vanguard-failure-america-s-first-satellite-setback-and-its-role-in-shaping-the-space-race',
  title: 'Vanguard Failure: America’s First Satellite Setback and Its Role in Shaping the Space Race',
  subtitle: 'How a spectacular launch mishap redirected U.S. space policy during the Cold War.',
  summary: 'The Vanguard TV‑3 failure highlighted technical gaps, spurred organizational change, and set the stage for later triumphs like Explorer 1.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the spring of 1957, the United States launched a modest but highly publicized project called <span class="vocab" data-cn="先锋计划">Vanguard</span>. The goal was simple on paper: place a small <span class="vocab" data-cn="人造卫星">satellite</span> into a stable <span class="vocab" data-cn="地心轨道">geocentric orbit</span> and demonstrate that the nation could master the new frontier of space. Behind the scenes, however, the effort was entangled in Cold War politics, inter‑agency rivalry, and an urgent desire to outpace the Soviet Union’s secretive missile program.`,
    `The chosen launch vehicle, a three‑stage liquid‑propellant rocket built by the Naval Research Laboratory, had never flown before. Its first stage used a General Electric <span class="vocab" data-cn="液体燃料火箭发动机">rocket engine</span> burning kerosene and liquid oxygen, while the upper stages relied on smaller, pressure‑fed engines. Engineers were still perfecting the <span class="vocab" data-cn="制导系统">guidance system</span>, which had to keep the vehicle stable during the violent ascent and ensure a clean <span class="vocab" data-cn="轨道注入">orbital insertion</span> of the payload.`,
    `On 6 March 1957, a crowd gathered at Cape Canaveral to watch Vanguard TV‑3 lift off. The countdown proceeded smoothly, but seconds after ignition the rocket began to wobble. Within ten seconds, a sudden loss of thrust caused it to tumble and explode on the launch pad. The <span class="vocab" data-cn="有效载荷">payload</span>—a 1.5 kg sphere studded with transmitters—was destroyed before it ever left the ground. The failure was broadcast live, turning a technical mishap into a national embarrassment.`,
    `The immediate reaction in Washington was one of shock and blame‑shifting. Some officials pointed to the Navy’s management of the program, while others criticized the lack of coordination between the Army, Air Force, and civilian scientists. In reality, the disaster exposed deeper problems: insufficient testing of the propulsion system, an underdeveloped guidance architecture, and a rushed schedule driven more by political pressure than engineering readiness.`,
    `In the weeks that followed, President Eisenhower’s administration ordered a comprehensive review. The report highlighted the need for a unified civilian agency to oversee all American space activities—a recommendation that eventually led to the creation of the National Aeronautics and Space Administration (NASA) in 1958. Moreover, the failure prompted the Army Ballistic Missile Agency, under the leadership of Wernher von Braun, to accelerate its own satellite effort, culminating in the successful launch of <span class="vocab" data-cn="探险者1号">Explorer 1</span> on 31 January 1958.`,
    `While Vanguard’s first attempt ended in flames, the episode was not a total loss. The data gathered from the failed launch helped engineers refine engine throttling techniques and improve vibration damping in later rockets. It also taught policymakers that space exploration required not just scientific ambition but robust project management and clear lines of authority—a lesson that shaped the United States’ approach throughout the ensuing <span class="vocab" data-cn="太空竞赛">Space Race</span>.`,
    `Looking back, Vanguard’s setback can be seen as a catalyst rather than a defeat. It forced the nation to confront its technical shortcomings, spurred institutional reforms, and ultimately paved the way for the spectacular achievements of the 1960s, from lunar landings to interplanetary probes. The story reminds us that early failures often lay the groundwork for later triumphs in any pioneering field.`,
  ],
  vocabulary: [
    { word: 'Vanguard', cn: '先锋计划' },
    { word: 'satellite', cn: '人造卫星' },
    { word: 'geocentric orbit', cn: '地心轨道' },
    { word: 'rocket engine', cn: '液体燃料火箭发动机' },
    { word: 'guidance system', cn: '制导系统' },
    { word: 'orbital insertion', cn: '轨道注入' },
    { word: 'payload', cn: '有效载荷' },
    { word: 'Explorer 1', cn: '探险者1号' },
    { word: 'Space Race', cn: '太空竞赛' },
  ],
};

export default article;
