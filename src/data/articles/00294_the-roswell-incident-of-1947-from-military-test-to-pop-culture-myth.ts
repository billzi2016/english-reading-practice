import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Roswell Incident of 1947: From Military Test to Pop Culture Myth》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00294 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00294',
  slug: 'the-roswell-incident-of-1947-from-military-test-to-pop-culture-myth',
  title: 'The Roswell Incident of 1947: From Military Test to Pop Culture Myth',
  subtitle: 'How a secret balloon experiment became America’s most famous UFO story',
  summary: 'A narrative tracing the 1947 crash, the military’s cover‑up, and the rise of the Roswell myth in popular culture.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On a hot July night in 1947, rancher Mac Brazel discovered strange debris scattered across his cotton field near the small town of <span class="vocab" data-cn="罗斯威尔">Roswell</span> in New Mexico. The metallic fragments were unlike anything he had seen before—thin, brittle, and bearing a peculiar smell that reminded him of burnt rubber. Brazel’s curiosity led him to contact the local sheriff, who promptly forwarded the report to the nearby <span class="vocab" data-cn="空军基地">Roswell Army Air Field</span>.`,
    `Within hours, the base issued an official <span class="vocab" data-cn="新闻稿">press release</span> stating that a “flying disc” had been recovered. The headline splashed across newspapers nationwide, igniting public fascination with the possibility of extraterrestrial visitors. However, just as quickly, the military retracted the statement, claiming the debris was merely the remains of a weather <span class="vocab" data-cn="气球">balloon</span>. This abrupt reversal sowed seeds of doubt that would later blossom into a full‑blown conspiracy.`,
    `What the public never learned at the time was that the recovered material belonged to <span class="vocab" data-cn="代号为“莫古尔计划”">Project Mogul</span>, a top‑secret program designed to detect Soviet nuclear tests by using high‑altitude balloons equipped with microphones. The project’s secrecy was essential during the early Cold War, and any hint of its existence could have compromised national security. Consequently, the Air Force deliberately downplayed the incident, providing only vague explanations that left room for speculation.`,
    `In the decades that followed, a handful of former servicemen began to speak out, claiming they had witnessed “alien bodies” or “metallic craft” at the crash site. Their testimonies were amplified by sensationalist books such as <em>“The Roswell Incident”</em> (1978) and later documentaries that presented the story as undeniable proof of extraterrestrial contact. These accounts fed into a growing <span class="vocab" data-cn="阴谋论">conspiracy theory</span> network, where each new “piece of evidence” was eagerly dissected by UFO enthusiasts.`,
    `The 1990s marked a turning point when the U.S. government declassified several documents related to Project Mogul and other high‑altitude experiments. While these releases clarified many technical details—confirming that the debris was indeed from a balloon payload—they also inadvertently fueled the mythos by highlighting how much information had been hidden for so long. The paradox of “more truth, more mystery” kept Roswell alive in the public imagination.`,
    `Roswell’s transformation from a military mishap into a cultural icon can be seen in its pervasive presence across media. From the 1996 film <em>“Independence Day”</em> to countless television episodes, comic books, and even an annual festival that draws thousands of tourists to the town, the incident has become shorthand for “UFO encounter.” The term <span class="vocab" data-cn="流行文化">pop culture</span> itself now includes a whole sub‑genre dedicated to alien abduction narratives, many of which trace their roots back to Roswell’s original headline.`,
    `Today, scholars study the Roswell incident not only as a case of Cold War secrecy but also as an example of how media, folklore, and collective memory intertwine. The story illustrates that when official explanations are vague, imagination steps in, creating myths that can outlast the very facts they were built upon. Whether one believes in extraterrestrials or sees Roswell as a cautionary tale about government opacity, its legacy endures as a reminder of how a single night in 1947 reshaped an entire nation’s view of the unknown.`,
  ],
  vocabulary: [
    { word: 'Roswell', cn: '罗斯威尔（新墨西哥州的一个小镇）' },
    { word: 'press release', cn: '新闻稿，官方对外发布的信息' },
    { word: 'balloon', cn: '气球，用于高空实验的装置' },
    { word: 'Project Mogul', cn: '代号为“莫古尔计划”，冷战时期的监测项目' },
    { word: 'conspiracy theory', cn: '阴谋论，对官方解释的怀疑和替代说法' },
    { word: 'pop culture', cn: '流行文化，大众媒体中的共同认知与符号' },
  ],
};

export default article;
