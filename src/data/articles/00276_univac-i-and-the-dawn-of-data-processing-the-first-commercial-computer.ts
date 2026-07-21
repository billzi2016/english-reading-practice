import type { Article } from '../../types/index.ts';

// 文件意图：维护《UNIVAC I and the Dawn of Data Processing: The First Commercial Computer》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00276 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00276',
  slug: 'univac-i-and-the-dawn-of-data-processing-the-first-commercial-computer',
  title: 'UNIVAC I and the Dawn of Data Processing: The First Commercial Computer',
  subtitle: 'How a room‑sized machine changed business and government forever',
  summary: 'The story of UNIVAC I, the world’s first commercial computer, and its role in launching modern data processing.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1950s most offices still relied on handwritten ledgers and mechanical calculators.  Imagine a clerk painstakingly copying figures from one paper sheet to another, day after day.  Then, in 1951, a massive metal cabinet arrived at the United States Census Bureau that could perform those calculations in seconds.  This was the <span class="vocab" data-cn="通用自动计算机第一代">UNIVAC I</span>, and its debut marked the birth of what we now call <span class="vocab" data-cn="使用电子设备处理大量信息的过程">data processing</span>.`,
    `The machine was the brainchild of J. Presper Eckert and John Mauchly, the engineers who had built the ENIAC during World War II.  After the war they founded the Electronic Control Company, later renamed <span class="vocab" data-cn="雷明顿兰德公司">Remington Rand</span>, to commercialize their ideas.  Their vision was bold: create a computer that could be sold to businesses and government agencies, not just kept in secret labs.  The U.S. Census Bureau’s contract for $1 million was the first proof that such a market existed.`,
    `Technically, UNIVAC I was a marvel of its time.  It used over <span class="vocab" data-cn="真空管，一种早期电子元件">18,000 vacuum tubes</span> to implement logic gates, and stored programs as sequences of <span class="vocab" data-cn="二进制代码，使用0和1表示信息">binary code</span>.  Input arrived on <span class="vocab" data-cn="穿孔卡片，用于机器读取数据的纸卡">punched cards</span>, while output could be printed or written to the newly invented <span class="vocab" data-cn="磁带，早期的大容量存储介质">magnetic tape</span>.  Its <span class="vocab" data-cn="一种计算机结构，程序和数据存放在同一内存中">stored‑program architecture</span> meant that the same hardware could run different tasks simply by loading a new set of instructions.`,
    `The most famous public demonstration came on November 4, 1952, when UNIVAC I correctly predicted the outcome of the U.S. presidential election while the results were still being tallied by hand.  The machine processed early returns from selected states and announced that Dwight D. Eisenhower would win, a prediction that stunned journalists and cemented public confidence in electronic computation.  This moment showed that computers could not only crunch numbers faster but also provide insights that were previously impossible to obtain in real time.`,
    `Businesses quickly saw the potential.  Remington Rand installed UNIVAC I at banks for <span class="vocab" data-cn="批量处理大量交易的系统">batch processing</span> of payroll and account balances, reducing weeks‑long manual reconciliations to a matter of hours.  The machine’s ability to store large tables of data meant that companies could now keep detailed inventories, forecast demand, and even perform early forms of statistical analysis—all without hiring armies of clerks.  In this way, UNIVAC I helped usher in the era of the corporate <span class="vocab" data-cn="大型计算机，通常服务于多个用户和任务">mainframe</span>.`,
    `Although only 50 UNIVAC I units were ever built, their influence rippled through the next two decades.  The concepts of stored‑program operation, magnetic storage, and high‑speed input/output became standard features in later systems such as IBM’s System/360.  Moreover, the very term “data processing” entered the business lexicon, shaping curricula at universities and spawning a new profession: the computer programmer.  In hindsight, UNIVAC I can be seen as the bridge between experimental wartime machines and today’s cloud‑based analytics platforms.`,
    `Today, when we swipe a card or query a database in milliseconds, we are standing on the shoulders of those early engineers and their room‑sized marvel.  The story of UNIVAC I reminds us that technological revolutions often begin with bold ideas, daring investors, and a willingness to replace manual labor with electronic precision.  As data continues to grow exponentially, the spirit of innovation that powered the first commercial computer remains as relevant as ever.`,
  ],
  vocabulary: [
    { word: 'UNIVAC I', cn: '通用自动计算机第一代' },
    { word: 'data processing', cn: '使用电子设备处理大量信息的过程' },
    { word: 'Remington Rand', cn: '雷明顿兰德公司' },
    { word: 'vacuum tubes', cn: '真空管，一种早期电子元件' },
    { word: 'binary code', cn: '二进制代码，使用0和1表示信息' },
    { word: 'punched cards', cn: '穿孔卡片，用于机器读取数据的纸卡' },
    { word: 'magnetic tape', cn: '磁带，早期的大容量存储介质' },
    { word: 'stored-program architecture', cn: '一种计算机结构，程序和数据存放在同一内存中' },
    { word: 'batch processing', cn: '批量处理大量交易的系统' },
    { word: 'mainframe', cn: '大型计算机，通常服务于多个用户和任务' },
  ],
};

export default article;
