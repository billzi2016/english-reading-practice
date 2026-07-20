import type { Article } from '../../types/index.ts';

// 文件意图：维护《Apollo 11: The First Moon Landing and Its Global Impact》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00013 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00013',
  slug: 'apollo-11-the-first-moon-landing-and-its-global-impact',
  title: 'Apollo 11: The First Moon Landing and Its Global Impact',
  subtitle: 'How a historic step reshaped science, politics, and culture worldwide.',
  summary: 'An in‑depth look at Apollo 11’s mission, its immediate reception, and the lasting influence on global society.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1960s, the United States and the Soviet Union were locked in an intense <span class="vocab" data-cn="太空竞赛">space race</span>. After several pioneering flights, President John F. Kennedy famously pledged that America would land a man on the Moon before the decade’s end. This bold promise galvanized NASA, leading to a series of increasingly complex missions under the Apollo program. By 1969, the agency had refined its engineering, training, and mission planning processes, setting the stage for what would become one of humanity’s most iconic achievements.`,
    `The Apollo 11 mission launched from Kennedy Space Center on July 16, 1969 atop a Saturn V rocket. Aboard were three astronauts: commander <span class="vocab" data-cn="尼尔·阿姆斯特朗">Neil Armstrong</span>, lunar module pilot <span class="vocab" data-cn="巴兹·奥尔德林">Buzz Aldrin</span>, and command module pilot Michael Collins. The spacecraft consisted of the Command Module “Columbia,” which remained in lunar orbit, and the <span class="vocab" data-cn="登月舱">lunar module</span> “Eagle,” designed to descend to the Moon’s surface. After a three‑day trans‑<span class="vocab" data-cn="轨道路径">trajectory</span> toward the Moon, the crew performed a series of burns and checks that brought them within sight of their destination.`,
    `As Eagle approached the Sea of Tranquility, Armstrong manually guided the descent to avoid a boulder‑strewn area. At 20:17 UTC on July 20, the <span class="vocab" data-cn="登月舱">lunar module</span> touched down with a gentle thump, and Armstrong reported, “Houston, Tranquility Base here—​we’re landing.” He then became the first human to step onto another world, uttering the now‑famous line, “That’s one small step for man, one giant leap for mankind.” The moment marked the beginning of a historic <span class="vocab" data-cn="舱外活动">extravehicular activity</span>, during which Armstrong and Aldrin collected samples and set up experiments.`,
    `The landing was broadcast live to an estimated 600 million viewers worldwide, making it one of the most watched <span class="vocab" data-cn="广播">broadcast</span> events in history. Families gathered around television sets, radios, and public screens, sharing a collective sense of awe and pride. The image of a human silhouette against the stark lunar horizon quickly entered popular culture, inspiring countless works of art, literature, and music. This global audience not only celebrated a technical triumph but also felt a profound emotional connection to an event that transcended national borders.`,
    `Beyond its symbolic power, Apollo 11 carried significant <span class="vocab" data-cn="地缘政治">geopolitics</span> implications. In the midst of the Cold War, the United States leveraged the success to demonstrate technological superiority over the Soviet Union, which had earlier achieved the first satellite and the first human in space. The achievement helped shift international perceptions, fostering a new era of scientific diplomacy that eventually led to joint ventures such as the Apollo–Soyuz Test Project in 1975. While competition sparked rapid innovation, the mission also planted seeds for future cooperation among former rivals.`,
    `The scientific return from Apollo 11 was substantial. The astronauts retrieved 21.55 kilograms of lunar rocks and soil, providing researchers with direct material to study the Moon’s composition and geological history. They also deployed a passive seismic experiment and a laser retro‑reflector array that continues to enable precise Earth–Moon distance measurements today. These data have refined models of planetary formation and informed our understanding of tidal forces, volcanic activity, and impact cratering. The mission’s <span class="vocab" data-cn="科学遗产">scientific legacy</span> laid the groundwork for subsequent Apollo landings and modern lunar exploration concepts.`,
    `In the decades following Apollo 11, its influence has endured across multiple domains. NASA’s Artemis program, announced in the early 2020s, explicitly cites the original landing as a source of inspiration for returning humans to the Moon and eventually reaching Mars. Educational curricula worldwide use the mission as a case study in engineering, teamwork, and problem‑solving. Moreover, the phrase “one small step” remains a cultural shorthand for bold ambition. As humanity looks toward new frontiers, Apollo 11 stands as a reminder that collective vision, rigorous preparation, and daring execution can turn seemingly impossible goals into reality.`,
  ],
  vocabulary: [
    { word: 'space race', cn: '太空竞赛' },
    { word: 'lunar module', cn: '登月舱' },
    { word: 'trajectory', cn: '轨道路径' },
    { word: 'extravehicular activity', cn: '舱外活动' },
    { word: 'broadcast', cn: '广播' },
    { word: 'geopolitics', cn: '地缘政治' },
    { word: 'scientific legacy', cn: '科学遗产' },
  ],
};

export default article;
