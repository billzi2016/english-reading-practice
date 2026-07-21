import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1979 Three Mile Island Accident: Lessons in Nuclear Safety》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00310 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00310',
  slug: 'the-1979-three-mile-island-accident-lessons-in-nuclear-safety',
  title: 'The 1979 Three Mile Island Accident: Lessons in Nuclear Safety',
  subtitle: 'How a partial core melt reshaped nuclear oversight and engineering practice',
  summary: 'A narrative of the Three Mile Island incident, its technical causes, and the safety reforms it sparked.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On March 28, 1979, the <span class="vocab" data-cn="加压水堆">pressurized water reactor</span> (PWR) at Pennsylvania’s Three Mile Island (TMI) plant experienced a cascade of malfunctions that culminated in a partial core melt. The event began when a relatively minor mechanical failure—an electrical motor driving a feedwater pump—stalled, cutting off the flow of cooling water to the reactor’s primary loop.`,
    `The loss of feedwater caused the steam generators to overheat, prompting automatic safety systems to close the main coolant isolation valves. Unfortunately, one of these valves failed to fully open, trapping steam inside the reactor vessel while the actual water level dropped dramatically—a condition known as <span class="vocab" data-cn="干蒸汽">dryout</span>. Operators, misled by ambiguous instrument readings, believed the core was adequately covered with water and delayed corrective actions.`,
    `As the coolant boiled away, the fuel rods began to overheat, leading to a localized <span class="vocab" data-cn="堆芯熔化">core melt</span>. Although the plant’s robust <span class="vocab" data-cn="防护壳体">containment building</span> prevented a large-scale release of radioactive material, a small amount of noble gases and iodine escaped through the venting system, exposing nearby communities to low‑level radiation.`,
    `Investigations later identified several layers of failure: design flaws that made critical valve positions difficult to verify, inadequate operator training on abnormal scenarios, and a lack of clear communication between engineers and plant managers. The incident highlighted how <span class="vocab" data-cn="人为错误">operator error</span> can amplify technical problems when human‑machine interfaces are poorly designed.`,
    `In the wake of TMI, the U.S. Nuclear Regulatory Commission (NRC) launched a sweeping overhaul of nuclear safety standards. New requirements mandated redundant and diverse instrumentation, real‑time core monitoring, and rigorous <span class="vocab" data-cn="概率风险评估">probabilistic risk assessment</span> (PRA) to quantify the likelihood of rare but catastrophic events. Training programs were revamped to include realistic simulators that could reproduce complex accident sequences.`,
    `The lessons from Three Mile Island also reverberated internationally. Countries operating PWRs adopted stricter licensing procedures, and organizations such as the International Atomic Energy Agency (IAEA) incorporated TMI case studies into their safety guidelines. While nuclear power remains a contentious energy source, the incident demonstrated that transparent investigation and systematic reform can restore public confidence after a crisis.`,
    `Today, modern reactors benefit from passive safety features—systems that rely on natural circulation and gravity rather than active pumps—to prevent loss‑of‑coolant accidents. The legacy of TMI endures not only in technical upgrades but also in the culture of continuous improvement that now defines nuclear engineering worldwide.`,
  ],
  vocabulary: [
    { word: 'pressurized water reactor', cn: '加压水堆' },
    { word: 'dryout', cn: '干蒸汽' },
    { word: 'core melt', cn: '堆芯熔化' },
    { word: 'containment building', cn: '防护壳体' },
    { word: 'operator error', cn: '人为错误' },
    { word: 'probabilistic risk assessment', cn: '概率风险评估' },
  ],
};

export default article;
