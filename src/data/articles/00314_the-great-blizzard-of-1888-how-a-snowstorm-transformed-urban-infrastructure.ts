import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Blizzard of 1888: How a Snowstorm Transformed Urban Infrastructure》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00314 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00314',
  slug: 'the-great-blizzard-of-1888-how-a-snowstorm-transformed-urban-infrastructure',
  title: 'The Great Blizzard of 1888: How a Snowstorm Transformed Urban Infrastructure',
  subtitle: 'How a historic snowstorm reshaped New York City’s streets, utilities, and transit.',
  summary: 'An exploration of the 1888 blizzard’s immediate chaos and its lasting impact on municipal engineering and underground infrastructure.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In mid‑March 1888 a ferocious <span class="vocab" data-cn="暴风雪">blizzard</span> swept across the Atlantic seaboard, dumping up to fifty inches of snow on Manhattan and creating towering <span class="vocab" data-cn="雪堆">snowdrift</span>s that blocked every thoroughfare.  Wind gusts regularly exceeded thirty miles per hour, turning streets into white rivers of ice.  Within twelve hours the city’s iconic skyline was barely visible, and the storm would linger for three days, leaving a record‑breaking snowfall depth that still ranks among the greatest urban snow events in American history.`,
    `The immediate aftermath was pure transportation paralysis.  Horse‑drawn carriages became immobile statues as their wheels sank into deep drifts, while the newly introduced electric streetcars halted entirely because their overhead wires were buried under compacted snow.  Ferries that normally shuttled commuters across the East River were forced to dock at the shoreline, and even pedestrians struggled to navigate the maze of frozen sidewalks.  The city’s daily rhythm ground to a halt, exposing how vulnerable surface‑level transport was to extreme weather.`,
    `Communication networks suffered equally catastrophic damage.  Thousands of miles of <span class="vocab" data-cn="电报">telegraph</span> lines snapped as trees toppled under the weight of ice, and the fledgling telephone system—still a novelty in many households—went silent when its aerial cables were buried beneath the snow.  Residents who could not reach neighbors or emergency services were left isolated for days.  The disaster sparked urgent discussions among city officials about protecting vital lines by moving them below ground, laying the groundwork for modern <span class="vocab" data-cn="地下设施">underground utility</span> networks.`,
    `Mayor Abram Hewitt convened a special committee of engineers and architects to assess the storm’s damage.  Their report highlighted that exposed gas pipes had ruptured, water mains were frozen solid, and sewage systems overflowed as snow melted too quickly for existing drainage capacity.  The recommendation was clear: future infrastructure must be designed with resilience in mind.  This marked a turning point for <span class="vocab" data-cn="市政工程">municipal engineering</span> in New York, prompting the city to begin burying gas and water lines, reinforcing sewer tunnels, and expanding storm‑water drainage capacity to prevent similar catastrophes.`,
    `Perhaps the most lasting legacy of the 1888 storm was its influence on rapid transit planning.  The chaos demonstrated that surface streets could be rendered unusable for extended periods, strengthening arguments for an underground rail system that would operate regardless of weather conditions.  In the years following the blizzard, engineers and financiers accelerated plans for what would become the Interborough Rapid Transit (IRT) line, opening New York’s first <span class="vocab" data-cn="地铁">subway</span> in 1904.  The blizzard’s memory was frequently cited as a justification for keeping critical transit arteries below the reach of snow and ice.`,
    `Beyond transportation, the storm prompted revisions to building codes that emphasized fire safety and heating reliability.  Coal deliveries were often delayed or impossible during heavy snowfall, leading many property owners to adopt oil‑fired stoves and later natural gas furnaces—systems that could be supplied through the newly buried pipelines.  Fire departments also upgraded their equipment, recognizing that snowdrifts could impede access to burning structures just as easily as they blocked streets.`,
    `Today, the Great Blizzard of 1888 is remembered not only for its sheer ferocity but also for how it forced a rapidly growing metropolis to rethink the very foundations of urban life.  The shift toward underground utilities, robust storm‑water management, and resilient transit networks set standards that modern cities still follow when preparing for extreme weather events.  In many ways, the white fury of March 1888 became an unlikely catalyst for the sophisticated, layered infrastructure that defines New York City today.`,
  ],
  vocabulary: [
    { word: 'blizzard', cn: '暴风雪' },
    { word: 'snowdrift', cn: '雪堆' },
    { word: 'telegraph', cn: '电报' },
    { word: 'underground utility', cn: '地下设施' },
    { word: 'municipal engineering', cn: '市政工程' },
    { word: 'subway', cn: '地铁' },
  ],
};

export default article;
