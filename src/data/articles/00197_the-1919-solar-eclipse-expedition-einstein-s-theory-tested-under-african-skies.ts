import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1919 Solar Eclipse Expedition: Einstein’s Theory Tested Under African Skies》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00197 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00197',
  slug: 'the-1919-solar-eclipse-expedition-einstein-s-theory-tested-under-african-skies',
  title: 'The 1919 Solar Eclipse Expedition: Einstein’s Theory Tested Under African Skies',
  subtitle: 'How a fleeting shadow over Africa confirmed a revolutionary view of gravity.',
  summary: 'In 1919, two teams traveled to remote sites in West Africa and Brazil to photograph a solar eclipse, providing the first experimental proof of <span class="vocab" data-cn="广义相对论">general relativity</span>.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When Sir Arthur Eddington received a telegram from Albert Einstein in early 1919, he could hardly imagine that a brief alignment of the Sun and distant stars would become a turning point for physics. The message invited him to join an international effort to observe the total <span class="vocab" data-cn="日食">solar eclipse</span> on May 29, a rare event whose path crossed the Atlantic Ocean and touched two remote locations: the island of Principe off West Africa and the town of Sobral in Brazil. Eddington’s task was to measure whether starlight would bend as it passed near the Sun, exactly what Einstein’s new theory predicted.`,
    `The expedition required more than scientific curiosity; it demanded logistical daring. In 1919, travel to Principe meant a weeks‑long sea voyage aboard a steamship, followed by a trek through dense tropical forest to a small hilltop observatory that had been hastily assembled. Meanwhile, the Brazilian team, led by Dr César Micheletti, set up a makeshift laboratory in Sobral’s schoolyard, where they could mount their telescopes on sturdy wooden platforms. Both sites were chosen because the eclipse’s totality would last just over seven minutes there—long enough to capture clear images but short enough that clouds could ruin everything.`,
    `On the night of the eclipse, the teams worked under a sky that alternated between star‑filled darkness and sudden bursts of daylight as the Sun’s corona flashed into view. Using large refracting telescopes equipped with <span class="vocab" data-cn="摄影底片">photographic plates</span>, they recorded the positions of bright stars near the eclipsed Sun. The key was precision: any shift in a star’s apparent position, even a few arcseconds, would signal the predicted <span class="vocab" data-cn="光线偏折">deflection of starlight</span>. In Sobral, clear skies allowed the team to take several high‑quality plates; on Principe, intermittent clouds forced them to work quickly and discard some exposures.`,
    `Back in England, Eddington and his colleagues painstakingly measured the plates with micrometers, comparing the eclipse images to reference photographs taken months earlier when the Sun was elsewhere. The analysis revealed that stars appeared displaced outward from the Sun by about 1.6 arcseconds—remarkably close to Einstein’s prediction of 1.75 arcseconds and far larger than the Newtonian expectation of half that amount. This result, announced at a joint meeting of the Royal Society and the Royal Astronomical Society in November 1919, sent shockwaves through both scientific circles and the public imagination.`,
    `The success of the expedition was not merely a triumph of theory over observation; it also highlighted the emerging importance of <span class="vocab" data-cn="天体摄影">astrophotography</span> as a tool for testing fundamental physics. The careful calibration of instruments, the handling of fragile glass plates in humid climates, and the statistical treatment of measurement errors set new standards for experimental astronomy. Moreover, the collaboration across continents demonstrated how scientific inquiry could transcend national boundaries even in the aftermath of World War I.`,
    `Critics later pointed out that some of the Sobral data suffered from instrumental distortion, and subsequent eclipses have refined the measurements with far greater accuracy using radio interferometry and space‑based telescopes. Nevertheless, the 1919 expedition remains a landmark because it provided the first empirical validation of a theory that reshaped our understanding of gravity, spacetime, and the universe itself. It also cemented Einstein’s reputation as a cultural icon—a scientist whose abstract equations could be confirmed by looking up at an eclipse over distant African skies.`,
    `Today, visitors to Principe can still see the modest stone foundations where Eddington’s team set up their instruments, and Sobral commemorates its role with a small museum dedicated to the eclipse of 1919. The story serves as a reminder that profound scientific breakthroughs often hinge on moments of natural wonder, captured by human ingenuity under the most challenging conditions.`,
  ],
  vocabulary: [
    { word: 'general relativity', cn: '广义相对论' },
    { word: 'solar eclipse', cn: '日食' },
    { word: 'photographic plate', cn: '摄影底片' },
    { word: 'deflection of starlight', cn: '光线偏折' },
    { word: 'astrophotography', cn: '天体摄影' },
    { word: 'Sobral', cn: '巴西索布拉尔（观测地点）' },
  ],
};

export default article;
