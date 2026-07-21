import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Computer ‘Bug’: How a Moth Inspired Modern Debugging Practices》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00252 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00252',
  slug: 'the-first-computer-bug-how-a-moth-inspired-modern-debugging-practices',
  title: 'The First Computer ‘Bug’: How a Moth Inspired Modern Debugging Practices',
  subtitle: 'From a literal insect to today’s systematic debugging methods.',
  summary: 'A true story about how a moth trapped in an early computer gave rise to the language and tools we use to find errors today.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `It was a quiet afternoon in September 1947 when a team of engineers at Harvard University discovered something unexpected inside the massive electromechanical relay system of the Mark II computer. While troubleshooting an inexplicable failure, they lifted a panel and found a <span class="vocab" data-cn="飞蛾">moth</span> wedged between two relays, its wings crumpled against copper contacts. The insect had caused a literal short circuit, turning the abstract notion of a “bug” into a tangible problem that could be seen, photographed, and taped to the logbook.`,
    `The Mark II was the successor to the pioneering Harvard Mark I, built under the direction of <span class="vocab" data-cn="计算机科学家">computer scientist</span> Howard Aiken. Among the crew were mathematician Grace Hopper and her colleagues, who were already accustomed to dealing with mysterious hardware faults in a machine that weighed several tons and consumed dozens of kilowatts. Their debugging routine involved painstakingly checking each relay, noting any irregularities in the <span class="vocab" data-cn="日志记录">logging</span> sheets that recorded the state of the system every millisecond.`,
    `When the moth was finally removed, Hopper famously annotated the incident with the words “First actual case of bug being found.” The team affixed the insect to the logbook using transparent tape, preserving both the creature and its story for posterity. This simple act turned a momentary <span class="vocab" data-cn="硬件故障">hardware fault</span> into an enduring anecdote that would travel far beyond the walls of Harvard’s computing lab. The photograph of the taped moth soon appeared in popular science magazines, cementing the visual metaphor for error detection.`,
    `Although Thomas Edison had used the term “bug” to describe a mechanical glitch as early as 1878, the Mark II episode gave the word a new life within the emerging field of computer engineering. The phrase began appearing in internal memos, research papers, and eventually textbooks, where it described any unexpected behavior in code or circuitry. Over time, “debugging” evolved from a literal act of removing insects to a systematic process of locating and correcting flaws in software, hardware, or even organizational workflows.`,
    `Modern debugging practices owe much to the spirit of that 1947 discovery. Engineers now employ sophisticated <span class="vocab" data-cn="断点调试">breakpoint debugging</span> tools that pause execution at precise moments, allowing them to inspect variable states just as Hopper’s team inspected relay contacts. Automated <span class="vocab" data-cn="单元测试">unit tests</span> run continuously, catching regressions before they become full‑scale failures, much like a routine inspection would have prevented the moth from causing another outage. The emphasis on detailed <span class="vocab" data-cn="日志记录">logging</span> and reproducible steps mirrors the meticulous record‑keeping that saved the moth’s story for future generations.`,
    `Even today’s integrated development environments (IDEs) feature visual representations of program flow, enabling developers to “see” where a bug might hide—an echo of the physical inspection that revealed the insect. Cloud‑based monitoring services generate real‑time alerts when anomalies appear, prompting rapid <span class="vocab" data-cn="系统恢复">recovery</span> actions. In this way, the metaphorical leap from an actual moth to abstract error detection continues to shape how we design resilient systems and respond to unexpected behavior.` ,
    `The tale also serves as a reminder that debugging is as much about observation and curiosity as it is about technical skill. Hopper’s willingness to pause, look closely, and document what she found turned a frustrating failure into a teaching moment for the entire computing community. It encourages modern engineers to treat each error not merely as an obstacle but as a clue—a piece of evidence that can lead to deeper understanding of complex systems.` ,
    `In summary, the humble moth that once halted the Mark II’s operation sparked a linguistic and methodological shift that still resonates in today’s software development lifecycle. From <span class="vocab" data-cn="断点调试">breakpoint debugging</span> to automated testing suites, the legacy of that tiny creature lives on in every line of code we write, reminding us that sometimes the smallest details can have the biggest impact.` ,
  ],
  vocabulary: [
    { word: 'moth', cn: '飞蛾' },
    { word: 'computer scientist', cn: '计算机科学家' },
    { word: 'hardware fault', cn: '硬件故障' },
    { word: 'logging', cn: '日志记录' },
    { word: 'breakpoint debugging', cn: '断点调试' },
    { word: 'unit tests', cn: '单元测试' },
    { word: 'system recovery', cn: '系统恢复' },
  ],
};

export default article;
