import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1908 Tunguska Event: A Cosmic Explosion Over Siberia and the Scientific Quest to Uncover Its Secrets》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00270 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00270',
  slug: 'the-1908-tunguska-event-a-cosmic-explosion-over-siberia-and-the-scientific-quest-to-uncover-its-secrets',
  title: 'The 1908 Tunguska Event: A Cosmic Explosion Over Siberia and the Scientific Quest to Uncover Its Secrets',
  subtitle: 'A Mysterious Flash in the Taiga and the Ongoing Hunt for Answers',
  summary: 'In 1908 a brilliant fireball ripped through the sky above Siberia, flattening trees over 2,000 square kilometres and sparking a century‑long scientific investigation.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On the morning of June 30, 1908, residents of the remote Krasnoyarsk region reported an eerie glow that turned night into day. Within seconds a thunderous roar shattered the silence, and a massive shockwave rippled across the taiga, knocking down trees as far as 60 kilometres from the epicentre. This extraordinary phenomenon later became known as the <span class="vocab" data-cn="通古斯大爆炸">Tunguska event</span>, a name that still evokes both awe and mystery in popular imagination.`,
    `Because the explosion occurred over an uninhabited stretch of forest, no direct eyewitnesses could measure its energy. Early estimates based on tree‑fall patterns suggested a release equivalent to 10–15 megatonnes of TNT—roughly 1,000 times the yield of the bomb dropped on Hiroshima. Such power places the event firmly in the realm of a high‑altitude <span class="vocab" data-cn="空中爆炸">airburst</span>, where kinetic energy is converted to heat and pressure without forming a crater.`,
    `The first scientific expedition arrived almost two decades later, led by Russian mineralogist Leonid Kulik. In 1927 he trekked into the desolate basin with a small team, armed only with a compass, a camera, and an unshakable curiosity. Their journey was hampered by dense swamp, hostile weather, and the lingering myth that the area was cursed—a testament to how little was known about the site when they set foot there.` ,
    `Kulik’s crew documented a striking “butterfly” pattern of fallen trees: trunks snapped outward from a central point while branches near the centre were scorched but still standing. This radial arrangement, later confirmed by aerial photographs taken in the 1930s, provided crucial clues about the direction and altitude of the blast. Modern researchers have used <span class="vocab" data-cn="光谱分析">spectroscopy</span> on soil samples to detect trace amounts of shocked quartz, further supporting an explosive origin.` ,
    `Over the ensuing decades, scientists proposed several competing hypotheses. The most widely accepted model posits that a stony <span class="vocab" data-cn="流星体">meteoroid</span> or a fragment of a comet nucleus entered Earth’s atmosphere and disintegrated at an altitude of 5–10 kilometres, releasing its kinetic energy in an instant. Alternative ideas—ranging from a volcanic eruption to an alien spacecraft—were gradually discarded as they failed to explain the absence of a crater and the specific distribution of charred foliage.` ,
    `Advances in computer modelling during the late 20th and early 21st centuries have refined our understanding of the event. Simulations that incorporate atmospheric density, entry angle, and material composition now reproduce the observed tree‑fall pattern with remarkable fidelity. Recent fieldwork, such as the 2013 Russian–Finnish expedition, employed drones to map the terrain in three dimensions and collected <span class="vocab" data-cn="放射性同位素">radioisotope</span> signatures that hint at a brief but intense burst of high‑energy radiation.` ,
    `The Tunguska mystery is more than an academic curiosity; it serves as a stark reminder of the planet’s vulnerability to near‑Earth objects. The event spurred the development of modern planetary‑defence programs, including early detection networks and kinetic impactor missions designed to divert hazardous asteroids before they reach Earth’s atmosphere.` ,
  ],
  vocabulary: [
    { word: 'Tunguska event', cn: '通古斯大爆炸' },
    { word: 'airburst', cn: '空中爆炸' },
    { word: 'spectroscopy', cn: '光谱分析' },
    { word: 'meteoroid', cn: '流星体' },
    { word: 'radioisotope', cn: '放射性同位素' },
    { word: 'comet nucleus', cn: '彗星核' },
  ],
};

export default article;
