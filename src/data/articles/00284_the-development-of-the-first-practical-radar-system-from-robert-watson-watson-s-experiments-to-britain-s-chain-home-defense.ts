import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Development of the First Practical Radar System: From Robert Watson‑Watson’s Experiments to Britain’s Chain Home Defense》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00284 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00284',
  slug: 'the-development-of-the-first-practical-radar-system-from-robert-watson-watson-s-experiments-to-britain-s-chain-home-defense',
  title: 'The Development of the First Practical Radar System: From Robert Watson‑Watson’s Experiments to Britain’s Chain Home Defense',
  subtitle: 'How a modest experiment grew into Britain\'s vital air‑defence network',
  summary: 'From early tests to the Chain Home system, discover how radar reshaped wartime Britain.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `The story of radar begins in the uneasy years between World I and World II, when military planners feared that fast‑moving aircraft could appear over Britain without warning. A young physicist named <span class="vocab" data-cn="罗伯特·沃森-瓦特">Robert Watson‑Watson</span> was tasked by the Air Ministry to investigate whether the <span class="vocab" data-cn="雷达">radar</span> principle—using reflected <span class="vocab" data-cn="电磁波">electromagnetic wave</span> signals—could be turned into a practical detection method. At that time, most radio work dealt with communication, not with measuring distance, so the idea seemed both daring and uncertain.`,
    `In the summer of 1935 Watson‑Watson set up a modest test site near Daventry, where he installed a transmitter and a simple receiving antenna on opposite sides of a field. By directing a burst of radio energy toward a passing aircraft and listening for the faint echo, he demonstrated that a reflected signal could be distinguished from background noise. The key to this success was the use of <span class="vocab" data-cn="脉冲调制">pulse‑modulation</span>, which allowed the system to send short, high‑power bursts and then listen during the quiet intervals, dramatically improving sensitivity.`,
    `The promising results quickly attracted the attention of senior officials, who envisioned a nationwide network that could give Britain an <span class="vocab" data-cn="预警系统">early warning system</span>. The design called for tall towers equipped with powerful transmitters and large <span class="vocab" data-cn="反射天线">reflector antenna</span> arrays, tuned to a specific <span class="vocab" data-cn="频率">frequency</span> that would travel long distances over the sea. By placing these stations along the coastline at regular intervals, each could cover overlapping sectors, creating a continuous line of sight—later christened the “<span class="vocab" data-cn="链式防空雷达网">Chain Home</span>” network.`,
    `Engineering the Chain Home system was far from trivial. The transmitters needed to generate pulses of several hundred kilowatts, a level unprecedented in civilian radio. Moreover, the receivers had to discern echoes returning from aircraft at ranges up to <span class="vocab" data-cn="探测范围">detection range</span> of 120 miles (≈200 km), while rejecting reflections from sea waves and weather fronts. To achieve this, engineers refined timing circuits, introduced better shielding, and calibrated the antenna orientation meticulously. Each improvement pushed the effective detection distance farther, giving pilots on the ground more time to scramble fighters.`,
    `By early 1938 the first operational stations—such as those at Bawdsey, Dover, and St Margaret’s—were transmitting and receiving signals day and night. By September 1939, a chain of twenty‑four sites stretched from the Thames Estuary to the Scottish coast, forming a dense web that could track incoming formations before they crossed the English Channel. During the Battle of Britain in 1940, the Chain Home network supplied continuous plots of German bomber streams, allowing RAF Fighter Command to allocate squadrons efficiently and ultimately turning the tide of the aerial campaign.`,
    `The success of the British system did not go unnoticed abroad. The United States, after observing the effectiveness of Chain Home, accelerated its own research, leading to the development of the SCR‑270 and later airborne radar sets that would guide night fighters. Within Britain, the original ground‑based stations were upgraded with rotating “<span class="vocab" data-cn="旋转雷达">rotating radar</span>” antennas, improving angular resolution and paving the way for modern air‑traffic control. The fundamental concepts—high‑power pulse transmission, precise timing, and large reflector arrays—remain at the heart of contemporary <span class="vocab" data-cn="雷达">radar</span> technology.`,
    `Looking back, the rapid transition from Watson‑Watson’s modest field experiment to a nation‑wide defensive grid illustrates how scientific curiosity, combined with urgent strategic need, can accelerate technological breakthroughs. The Chain Home network not only protected Britain during its darkest hour but also laid the groundwork for decades of civilian and military applications, from weather monitoring to space surveillance. Its legacy endures every time an aircraft is guided safely through fog or a satellite’s orbit is tracked—proof that a single insight into reflected electromagnetic waves can reshape history.`,
  ],
  vocabulary: [
    { word: 'radar', cn: '雷达' },
    { word: 'electromagnetic wave', cn: '电磁波' },
    { word: 'pulse‑modulation', cn: '脉冲调制' },
    { word: 'early warning system', cn: '预警系统' },
    { word: 'reflector antenna', cn: '反射天线' },
    { word: 'frequency', cn: '频率' },
    { word: 'Chain Home', cn: '链式防空雷达网' },
    { word: 'detection range', cn: '探测范围' },
    { word: 'rotating radar', cn: '旋转雷达' },
  ],
};

export default article;
