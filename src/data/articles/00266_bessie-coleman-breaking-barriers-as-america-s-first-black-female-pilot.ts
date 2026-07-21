import type { Article } from '../../types/index.ts';

// 文件意图：维护《Bessie Coleman: Breaking Barriers as America’s First Black Female Pilot》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00266 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00266',
  slug: 'bessie-coleman-breaking-barriers-as-america-s-first-black-female-pilot',
  title: 'Bessie Coleman: Breaking Barriers as America’s First Black Female Pilot',
  subtitle: 'How a daring dreamer took to the skies and inspired generations.',
  summary: 'The story of Bessie Coleman, the first African‑American woman pilot, her fight for training, fame in air shows, and lasting legacy.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Born in 1892 to a family of former slaves in Atlanta, Georgia, <span class="vocab" data-cn="贝西·科尔曼">Bessie Coleman</span> grew up in the dusty streets of Chicago after her parents moved north during the Great Migration. The city’s bustling neighborhoods exposed her to the era’s rapid industrial growth, yet opportunities for a Black woman remained scarce. While working as a manicurist, she devoured newspaper stories about daring aviators and dreamed of soaring above the prejudice that kept her grounded.`,
    `In 1915, Coleman learned that the United States barred both women and African Americans from enrolling in any <span class="vocab" data-cn="飞行学校">flight school</span>. Undeterred, she saved every penny she could earn—often working double shifts—to fund a trip to France. There, at the prestigious <span class="vocab" data-cn="巴黎航空学院">Caudron‑Roussel aviation school</span>, she learned French, mastered aircraft mechanics, and earned her pilot’s license in 1921, becoming the first Black woman in the world to do so.`,
    `Returning to America with a freshly minted <span class="vocab" data-cn="飞行执照">pilot certificate</span>, Coleman faced a new set of obstacles. Racist promoters refused to book her for commercial routes, and airlines were unwilling to hire a Black female pilot. Instead, she turned to the burgeoning circuit of <span class="vocab" data-cn="航空展览">aviation exhibitions</span>. With a bright red plane emblazoned with “Negro Women’s Flying Club,” she performed daring loops and barrel rolls that thrilled crowds in cities from New York to Los Angeles.`,
    `Coleman’s public persona was more than spectacle; she used each performance as a platform for advocacy. Between stunts, she delivered impassioned speeches urging the government to open <span class="vocab" data-cn="民航邮递">airmail</span> routes and pilot training programs to minorities and women. Her famous refrain—“The sky is the limit” —became a rallying cry for early civil‑rights activists who saw aviation as a metaphor for freedom and progress.`,
    `Tragically, on April 30 1926, while rehearsing a stunt for an upcoming show in Jacksonville, Florida, Coleman’s plane suffered a mechanical failure. The aircraft crashed into a tree, killing her instantly at the age of 34. Her death shocked the nation, but the outpouring of grief also highlighted how deeply she had touched the public imagination. Newspapers across the country ran headlines honoring her courage and lamenting the loss of “the first Black woman to fly.”`,
    `In the decades that followed, Coleman’s legacy inspired a generation of aviators. The <span class="vocab" data-cn="美国空军学院">U.S. Air Force Academy</span> eventually named a scholarship after her, and the International Women’s Air &amp; Space Museum in Ohio features an exhibit dedicated to her life. Modern pilots such as Dr. Mae Jemison and astronaut Jeanette Epps cite Coleman’s story as a source of motivation, proving that her dream of “opening the sky” continues to lift new horizons.`,
    `Today, Bessie Coleman stands not only as a pioneer of <span class="vocab" data-cn="航空学">aeronautics</span> but also as a symbol of perseverance against systemic barriers. Her journey from a modest Chicago salon to the clouds above France reminds us that ambition, when paired with relentless effort, can rewrite history. As educators incorporate her narrative into curricula, students learn that breaking one barrier often creates pathways for countless others—a lesson as timeless as the wind beneath an aircraft’s wings.`,
  ],
  vocabulary: [
    { word: 'Bessie Coleman', cn: '贝西·科尔曼' },
    { word: 'flight school', cn: '飞行学校' },
    { word: 'pilot certificate', cn: '飞行执照' },
    { word: 'aviation exhibitions', cn: '航空展览' },
    { word: 'airmail', cn: '民航邮递' },
    { word: 'U.S. Air Force Academy', cn: '美国空军学院' },
    { word: 'aeronautics', cn: '航空学' },
  ],
};

export default article;
