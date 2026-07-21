import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Dyatlov Pass Incident: Tragedy, Theories, and the Enduring Enigma》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00043 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00043',
  slug: 'the-dyatlov-pass-incident-tragedy-theories-and-the-enduring-enigma',
  title: 'The Dyatlov Pass Incident: Tragedy, Theories, and the Enduring Enigma',
  subtitle: 'A chilling mystery that still puzzles investigators a century later',
  summary: 'An exploration of the 1959 tragedy in the Ural Mountains, its puzzling evidence, and the many theories that have arisen.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In late January 1959 a group of ten experienced hikers set out on what was supposed to be a routine trek across the <span class="vocab" data-cn="乌拉尔山脉">Ural Mountains</span>. Led by Igor Dyatlov, the party aimed to reach Otorten, a remote peak that offered both scientific interest and pristine wilderness. The weather was brutally cold, with temperatures plunging well below \u221210\u00b0C, but the men were equipped with Soviet‑standard gear and a strong sense of camaraderie. What began as an ambitious expedition quickly turned into one of the most baffling tragedies in modern history.`,
    `On the night of February 1st, something forced the hikers to abandon their tent, which was found later half‑buried in fresh snow. When rescue teams finally reached the site on February 26th, they discovered the canvas shelter ripped open from the inside and a chaotic scattering of belongings—boots, shoes, and even a pair of mittens lay miles away from the camp. The first two bodies, those of Dyatlov and his companion Yuri Doroshenko, were found near a tree, partially dressed and showing signs of <span class="vocab" data-cn="极端低温">hypothermia</span>. Their faces were frozen in expressions of terror, hinting at a sudden, inexplicable panic.`,
    `The subsequent autopsies revealed an even stranger picture. Six more bodies were recovered over the following weeks, some buried under several meters of snow and ice. Four of the victims had severe internal injuries—broken ribs, shattered sternums, and massive contusions—yet there were no external wounds that could explain such trauma. Even more puzzling, three of the hikers were found without shoes, despite sub‑zero temperatures, and one woman’s tongue was missing. The official Soviet report concluded “a compelling natural force” as the cause, but the lack of a clear forensic explanation left room for endless speculation.`,
    `Since then, dozens of theories have been proposed, ranging from the plausible to the outlandish. Some researchers argue that an unexpected <span class="vocab" data-cn="倾泻风">katabatic wind</span> could have driven the group to flee in a desperate scramble for shelter, while others point to a sudden avalanche that might have crushed the tent without leaving obvious debris. A more controversial hypothesis suggests that the hikers stumbled upon a secret military test involving <span class="vocab" data-cn="辐射剂量计">dosimeters</span> and were silenced to protect classified technology. Others invoke “<span class="vocab" data-cn="悖论的">paradoxical</span>” phenomena such as infrasound—low‑frequency vibrations that can induce panic, nausea, and disorientation—or even a brief exposure to <span class="vocab" data-cn="辐射中毒">radiation poisoning</span> from a nearby radioactive source. Each theory attempts to reconcile the contradictory evidence: severe internal injuries without external wounds, missing clothing, and the frantic state of the survivors.`,
    `Modern re‑examinations have added new layers to the mystery. In 2020, a Russian investigative commission revisited the case with contemporary <span class="vocab" data-cn="法医分析">forensic analysis</span> techniques, concluding that an avalanche was “the most likely” cause, though they admitted the evidence remained inconclusive. Satellite imagery and ground‑penetrating radar have mapped previously unseen depressions in the terrain, suggesting possible hidden crevasses where some victims may have slipped. Moreover, a recently declassified diary entry from one of the hikers mentions hearing an “unusual humming sound” on the night of the incident—a detail that fuels the <span class="vocab" data-cn="次声">infrasound</span> theory and underscores how even small clues can reshape our understanding.`,
    `The Dyatlov story has transcended its original context, inspiring books, documentaries, podcasts, and even video games. It serves as a cautionary tale about the limits of human endurance in extreme environments and the dangers of underestimating nature’s hidden forces. The incident also highlights how political secrecy—common in the Cold War era—can obscure truth, leaving families and investigators to grapple with unanswered questions for decades.`,
    `More than sixty years later, the <span class="vocab" data-cn="迪亚特洛夫通道事件">Dyatlov Pass Incident</span> remains an enduring enigma. While scientific advances have narrowed the field of plausible explanations, none can fully account for every oddity recorded at the site. Perhaps that very uncertainty is what keeps the story alive: a reminder that some mysteries resist neat resolution, inviting each new generation to look deeper into the snow‑covered slopes and ask, “What really happened on that cold night in 1959?”`,
  ],
  vocabulary: [
    { word: 'Dyatlov Pass Incident', cn: '迪亚特洛夫通道事件' },
    { word: 'Ural Mountains', cn: '乌拉尔山脉' },
    { word: 'hypothermia', cn: '极端低温' },
    { word: 'katabatic wind', cn: '倾泻风' },
    { word: 'infrasound', cn: '次声' },
    { word: 'radiation poisoning', cn: '辐射中毒' },
    { word: 'paradoxical', cn: '悖论的' },
    { word: 'forensic analysis', cn: '法医分析' },
  ],
};

export default article;
