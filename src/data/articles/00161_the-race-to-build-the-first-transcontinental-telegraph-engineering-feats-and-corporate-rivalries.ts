import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Race to Build the First Transcontinental Telegraph》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00161 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00161',
  slug: 'the-race-to-build-the-first-transcontinental-telegraph-engineering-feats-and-corporate-rivalries',
  title: 'The Race to Build the First Transcontinental Telegraph',
  subtitle: 'Engineering Feats and Corporate Rivalries in America’s First Coast‑to‑Coast Wire',
  summary: 'How engineers, surveyors, and rival companies raced against geography and politics to connect the continent by telegraph.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1860, a restless nation stared at a map of its own vastness. The United States stretched from the Atlantic seaboard to the Pacific rim, yet messages still took weeks to travel by horse or ship. The looming Civil War amplified the urgency for instant communication; leaders imagined that a single wire could carry strategic orders faster than any courier. This vision sparked what would become known as the <span class="vocab" data-cn="跨洲的">transcontinental</span> telegraph project, a race not only against distance but also against rival interests and unforgiving terrain.`,
    `Congress answered that call with the Pacific Telegraph Act of 1860, granting the fledgling Western Union Company an exclusive contract to lay a line from Omaha, Nebraska, to Carson City, Nevada. The legislation promised $40,000 in annual subsidies for each mile built, a sum that turned the venture into a lucrative gamble. Yet the act also opened the door for competing firms—most notably the Atlantic and Pacific Telegraph Company—to lobby for parallel routes, hoping to carve out their own share of the emerging communications market.`,
    `The engineering challenges were staggering. Surveyors first had to chart a path through the Great Plains, the Rocky Mountains, and the arid deserts of Utah. Wooden poles, often over 30 feet tall, were driven into hard-packed soil, while iron rods reinforced sections where wind or snow threatened stability. Each conductor was wrapped in a glass <span class="vocab" data-cn="绝缘体">insulator</span> to prevent short‑circuits caused by moisture—a technology borrowed from earlier Atlantic cable experiments. In the mountains, crews resorted to drilling into rock faces and suspending wires on steel brackets, a method later dubbed “<span class="vocab" data-cn="敷设电缆">cable‑laying</span> in extreme conditions.”`,
    `Corporate rivalry added another layer of complexity. Western Union, already dominant in the eastern United States, sought to extend its monopoly westward. Its rivals argued that a single company controlling coast‑to‑coast communication would stifle competition and inflate prices. Heated debates erupted in Washington, where legislators weighed the benefits of a unified network against the dangers of a <span class="vocab" data-cn="垄断">monopoly</span>. In the end, Western Union’s political clout and deeper pockets won out, but not without forcing it to negotiate joint use agreements with smaller regional operators.`,
    `Construction crews worked in relentless shifts. Every ten miles or so a <span class="vocab" data-cn="中继站">repeater</span> station was erected—small wooden huts housing batteries, signal lamps, and a skilled operator who amplified the weak electrical pulses traveling along the wire. These stations required precise timing; a delay of even a few seconds could garble messages across thousands of miles. The men who built them were often former soldiers or mountain‑men, accustomed to harsh weather and isolated outposts. Their tools included the <span class="vocab" data-cn="磁电机">magneto</span>, a hand‑cranked generator that produced the high‑voltage bursts needed to drive signals through long stretches of line.`,
    `By October 1861, the final link between Salt Lake City and Sacramento was spliced together. The inaugural transmission—“Washington to California”—traveled from the capital, across the newly completed wire, and arrived in San Francisco within minutes. Newspapers hailed the achievement as a triumph of American ingenuity, while military commanders immediately began using the line to coordinate troop movements. The telegraph’s success rendered the Pony Express obsolete, ending an era of horseback mail that had captured the public imagination just years before.`,
    `The legacy of the first <span class="vocab" data-cn="跨洲的">transcontinental</span> telegraph extended far beyond its immediate wartime utility. It demonstrated that a continent could be bound together by invisible electrical currents, paving the way for later global networks such as the Atlantic cable and the eventual rise of the modern telephone system. Moreover, the fierce corporate battles set precedents for how emerging technologies would be regulated—balancing innovation with concerns over market concentration—a debate that continues in today’s digital age.`,
  ],
  vocabulary: [
    { word: 'transcontinental', cn: '跨洲的' },
    { word: 'telegraph', cn: '电报' },
    { word: 'insulator', cn: '绝缘体' },
    { word: 'repeater', cn: '中继站' },
    { word: 'monopoly', cn: '垄断' },
    { word: 'surveyors', cn: '测量员' },
    { word: 'magneto', cn: '磁电机' },
    { word: 'cable‑laying', cn: '敷设电缆' },
  ],
};

export default article;
