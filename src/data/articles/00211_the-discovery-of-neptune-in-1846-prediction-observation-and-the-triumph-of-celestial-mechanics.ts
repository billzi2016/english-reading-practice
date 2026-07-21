import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of Neptune in 1846: Prediction, Observation, and the Triumph of Celestial Mechanics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00211 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00211',
  slug: 'the-discovery-of-neptune-in-1846-prediction-observation-and-the-triumph-of-celestial-mechanics',
  title: 'The Discovery of Neptune in 1846: Prediction, Observation, and the Triumph of Celestial Mechanics',
  subtitle: 'How mathematics led to a new planet',
  summary: 'A narrative of how perturbations in Uranus’s orbit guided astronomers to predict and observe Neptune.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early nineteenth century, astronomers noticed that the observed path of <span class="vocab" data-cn="天王星">Uranus</span> deviated from predictions based on <span class="vocab" data-cn="牛顿万有引力定律">Newtonian gravitation</span>. These discrepancies were called <span class="vocab" data-cn="摄动">perturbations</span>, and they hinted at the presence of an unseen mass tugging on Uranus from beyond. The problem sparked a fierce debate: was the error due to faulty observations, or did it signal a hidden planet?`,
    `Two mathematicians independently tackled the puzzle using the tools of <span class="vocab" data-cn="天体力学">celestial mechanics</span>. In France, <span class="vocab" data-cn="勒维耶">Urbain Le Verrier</span> derived a set of equations that described how an unknown planet would have to move to produce the observed perturbations. Simultaneously, in England, <span class="vocab" data-cn="约翰·库克·亚当斯">John Couch Adams</span> performed similar calculations, though his results were not promptly communicated to observatories. Both approaches relied on solving inverse problems: starting from the effect (Uranus’s wobble) and working backward to infer the cause (a distant planet).`,
    `Le Verrier sent his predicted coordinates to the Berlin Observatory, where astronomer <span class="vocab" data-cn="约翰·加勒">Johann Galle</span> was conducting a systematic sky survey with a modest <span class="vocab" data-cn="望远镜">telescope</span>. On September 23, 1846, Galle and his assistant Heinrich d’Arrest pointed the instrument at the spot Le Verrier had indicated. To their astonishment, they found a faint “star” that was not listed in any catalog—a moving object whose motion matched Le Verrier’s forecast within a fraction of a degree. This rapid confirmation turned theoretical speculation into concrete observation.`,
    `The newly spotted body was quickly confirmed by other observatories, including the Royal Greenwich Observatory, which provided independent <span class="vocab" data-cn="星历表">ephemerides</span>. Within weeks, astronomers could compute its orbital elements: a nearly circular orbit at about 30 AU from the Sun, an inclination of roughly 1.8°, and a period close to 165 years. These parameters fit neatly into the existing model of the solar system, reinforcing confidence in the predictive power of Newtonian dynamics even at such vast distances.`,
    `The discovery sparked a heated controversy over priority. While Le Verrier’s prediction had been published and acted upon, Adams’ calculations remained largely unknown until after Neptune’s sighting. The Royal Society eventually awarded both men recognition, but the episode highlighted how scientific credit can hinge on communication as much as on insight. It also underscored the collaborative nature of astronomy: a mathematician’s theory, an observer’s skill, and the shared infrastructure of telescopes and catalogs all played essential roles.`,
    `Neptune’s detection marked a triumph for <span class="vocab" data-cn="天体力学">celestial mechanics</span> and set a precedent for future planet hunting. The same methods were later employed to predict Pluto’s existence, albeit with less success, and more recently to infer exoplanets through subtle stellar wobbles—a modern echo of the 1846 breakthrough. Moreover, the episode demonstrated that even small perturbations in an orbit can reveal massive, distant companions, a principle still used in contemporary surveys of the outer solar system.`,
    `Today, Neptune is known not only as a blue‑giant world with supersonic winds but also as a historical milestone. Its discovery reminds us that mathematics can reach beyond the limits of direct observation, turning faint irregularities into concrete knowledge. As we continue to map the cosmos, the legacy of Le Verrier, Adams, and Galle endures: precise calculation, diligent observation, and an unwavering belief that the universe’s hidden structures will eventually reveal themselves.`,
  ],
  vocabulary: [
    { word: 'Uranus', cn: '天王星' },
    { word: 'Newtonian gravitation', cn: '牛顿万有引力定律' },
    { word: 'perturbation', cn: '摄动' },
    { word: 'celestial mechanics', cn: '天体力学' },
    { word: 'Urbain Le Verrier', cn: '勒维耶' },
    { word: 'John Couch Adams', cn: '约翰·库克·亚当斯' },
    { word: 'telescope', cn: '望远镜' },
    { word: 'ephemerides', cn: '星历表' },
  ],
};

export default article;
