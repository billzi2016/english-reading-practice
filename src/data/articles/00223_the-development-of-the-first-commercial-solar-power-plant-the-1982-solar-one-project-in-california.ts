import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Development of the First Commercial Solar Power Plant: The 1982 Solar One Project in California》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00223 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00223',
  slug: 'the-development-of-the-first-commercial-solar-power-plant-the-1982-solar-one-project-in-california',
  title: 'The Development of the First Commercial Solar Power Plant: The 1982 Solar One Project in California',
  subtitle: 'How a desert experiment became a milestone for renewable energy.',
  summary: 'An engaging story about the technical, financial, and political challenges behind Solar One, the United States’ first commercial‑scale solar thermal plant.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the late 1970s, the oil shocks left many policymakers nervous about future fuel security.  California’s legislators, already aware of the state’s abundant sunshine, commissioned a bold experiment: to prove that sunlight could be harvested at a scale large enough to feed the electric grid.  The result was Solar One, a partnership between Southern California Edison (SCE) and the U.S. Department of Energy, sited on a barren stretch of the Mojave Desert near Barstow.`,
    `The heart of Solar One was a field of more than 2,000 <span class="vocab" data-cn="抛物线形的集热槽">parabolic trough</span> collectors.  Each trough consisted of a long, curved mirror that focused sunlight onto a pipe running along its focal line.  Inside the pipe flowed a specially formulated <span class="vocab" data-cn="传热流体">heat‑transfer fluid</span>, typically a synthetic oil, which heated up to over 400 °C and turned into high‑pressure steam for a conventional turbine.  This design borrowed heavily from earlier research at the Solar Energy Research Institute (now NREL), but scaling it to a 10‑megawatt plant was unprecedented.`,
    `Financing the project proved just as tricky as engineering it.  SCE raised capital through a mix of corporate bonds and federal loan guarantees, while the Department of Energy contributed research grants that covered part of the technology development costs.  Critics argued that the plant’s expected <span class="vocab" data-cn="容量因子">capacity factor</span>—the ratio of actual output to its maximum possible output—would be too low to justify the expense, especially when compared with coal‑fired plants that could run continuously.  To address these concerns, the developers promised a “commercial‑ready” demonstration that would deliver at least 5 MW of net electricity during peak sunlight hours.`,
    `Construction began in early 1980 and faced a series of practical hurdles.  Aligning each parabolic mirror required sub‑millimeter precision; even a slight misalignment could reduce the concentrated solar flux by up to 15 %.  Engineers therefore invented an automated alignment system that used laser trackers and computer‑controlled actuators, a technique later adopted by many larger solar farms worldwide.  Meanwhile, the desert environment forced designers to contend with sandstorms that could abrade mirror surfaces, prompting the use of protective glass coatings that were still experimental at the time.`,
    `When Solar One first generated electricity in June 1982, it did so under intense public scrutiny.  The plant’s output was fed directly into SCE’s transmission network, and grid operators closely monitored its <span class="vocab" data-cn="电网整合">grid integration</span> performance.  Because solar thermal power is inherently variable—producing electricity only when the sun shines—the plant had to be coordinated with other dispatchable generators to maintain frequency stability.  The successful demonstration showed that, with proper forecasting and scheduling, a renewable source could coexist with traditional baseload plants without causing disruptions.`,
    `Although Solar One operated profitably for only six years, its legacy extended far beyond its modest 10‑MW capacity.  The experience gained in mirror alignment, heat‑transfer fluid handling, and desert construction informed the design of later projects such as Nevada’s 64‑MW Crescent Dunes plant and Spain’s 50‑MW Solnova facility.  Moreover, the project sparked interest in <span class="vocab" data-cn="热能储存">thermal storage</span> concepts; engineers began experimenting with molten salt tanks that could retain heat after sunset, paving the way for Solar Two—a direct successor that used a <span class="vocab" data-cn="熔盐">molten‑salt</span> storage system to deliver power even after dark.`,
    `Today, the original Solar One site is remembered as a pioneering laboratory rather than a commercial powerhouse.  Its story illustrates how early adopters must balance optimism with hard‑headed engineering and realistic economics.  By turning a desert into a testbed for renewable technology, the project helped shift public perception of solar energy from a niche curiosity to a viable component of the modern electricity mix.`
  ],
  vocabulary: [
    { word: 'parabolic trough', cn: '抛物线形的集热槽' },
    { word: 'heat-transfer fluid', cn: '传热流体' },
    { word: 'capacity factor', cn: '容量因子' },
    { word: 'grid integration', cn: '电网整合' },
    { word: 'thermal storage', cn: '热能储存' },
    { word: 'molten salt', cn: '熔盐' }
  ],
};

export default article;
