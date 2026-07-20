import type { Article } from '../../types/index.ts';

// 文件意图：维护《Ada Lovelace》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00001 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00001',
    slug: 'ada-lovelace',
    title: 'Ada Lovelace',
    subtitle: 'The World\'s First Computer Programmer',
    subtitle2: 'Born: December 10, 1815 · London, England',
    summary: 'The world\'s first programmer — a Victorian mathematician who saw the future before it existed.',
    category: 'biography',
    difficulty: 'intermediate',
    readingMinutes: 5,
    tip: 'Words with a <span class="vocab" data-cn="黄色虚线下划线">yellow dashed underline</span> are vocabulary highlights — the Chinese translation is shown inline.',
    paragraphs: [
      `In the mid-1800s, long before anyone had built a working computer, a young English mathematician named Ada Lovelace sat down and wrote what historians now consider the world's first computer program. She was 27 years old. The "computer" she was writing for — Charles Babbage's <span class="vocab" data-cn="分析机（一种早期机械计算机设计）">Analytical Engine</span> — was never actually built during her lifetime. Yet her ideas were so far ahead of their time that they would not be fully understood for nearly a century.`,
      `Ada Byron was born on December 10, 1815, in London, the only <span class="vocab" data-cn="合法的（婚姻内所生的）">legitimate</span> child of the famous Romantic poet Lord Byron and his wife Annabella Milbanke. Her parents separated when she was just a few weeks old, and Lord Byron left England forever shortly after. Ada never knew her father. Her mother, fearing that Ada might <span class="vocab" data-cn="继承（品质/特征）">inherit</span> her father's wild and <span class="vocab" data-cn="无稳定性的，不安分的">unstable</span> personality, made sure Ada received a rigorous education in mathematics and science — highly unusual for a girl in the Victorian era.`,
      `As a teenager, Ada proved to be a gifted student. She had a rare ability to visualize complex mathematical ideas in vivid, almost poetic terms. At seventeen, she attended a London party where she first met the mathematician and inventor Charles Babbage. He showed her his small working model of a machine he called the <span class="vocab" data-cn="差分机（用于计算数学表格的机械装置）">Difference Engine</span>. Ada was immediately <span class="vocab" data-cn="着迷，被吸引">captivated</span>. While most guests saw only a strange piece of metal and gears, Ada saw the future.`,
      `Over the following years, Ada and Babbage became close <span class="vocab" data-cn="合作者，协作者">collaborators</span>. Babbage was designing an even more ambitious machine — the Analytical Engine — which could, in theory, perform any calculation if given the right instructions. In 1842, an Italian mathematician named Luigi Menabrea published a description of the Analytical Engine in French. Babbage asked Ada to <span class="vocab" data-cn="翻译">translate</span> the paper into English.`,
      `Ada did not simply translate the paper. She added her own notes — and those notes ended up being three times longer than the original article. In Note G, the most famous of her <span class="vocab" data-cn="注释，附注">annotations</span>, Ada described a step-by-step method for using the Analytical Engine to calculate a series of numbers known as Bernoulli numbers. This sequence of instructions is what historians recognize today as the world's first computer program. She had essentially invented the concept of <span class="vocab" data-cn="软件（这里指指令集/程序）">software</span> — before hardware even existed.`,
      `But Ada's <span class="vocab" data-cn="洞察力，见解">insights</span> went far beyond mathematics. She proposed something truly radical: that the Analytical Engine could <span class="vocab" data-cn="操纵，处理">manipulate</span> symbols — not just numbers — according to rules. In other words, she imagined that a machine could one day compose music, produce graphics, or handle any kind of symbolic information. This was the seed of what we now call <span class="vocab" data-cn="通用计算（能处理任何类型数据的计算）">general-purpose computing</span>. She even wondered whether machines might ever "originate" thought — a question that we are still debating today in the form of <span class="vocab" data-cn="人工智能">artificial intelligence</span>.`,
      `Tragically, Ada's life was cut short. She died on November 27, 1852, of <span class="vocab" data-cn="子宫癌">uterine cancer</span>, at the age of 36 — the same age at which her father, Lord Byron, had also died. Her work was largely forgotten for nearly a hundred years. It was only in the 1950s, when British mathematician B.V. Bowden republished her notes, that the world began to recognize what she had done.`,
      `Today, Ada Lovelace is celebrated as a <span class="vocab" data-cn="先驱，先锋">pioneer</span> of computer science. The U.S. Department of Defense even named a programming language "Ada" in her honor in the 1980s. Every year, on the second Tuesday of October, the world celebrates "Ada Lovelace Day" to honor women in science, technology, engineering, and mathematics. She is proof that the most powerful ideas can arrive long before the world is ready for them — and that <span class="vocab" data-cn="想象力，构想能力">imagination</span> itself is a form of engineering.`,
    ],
    vocabulary: [
      { word: 'legitimate', cn: '合法的（婚姻内所生）' },
      { word: 'captivated', cn: '着迷，被深深吸引' },
      { word: 'collaborators', cn: '合作者，协作者' },
      { word: 'annotations', cn: '注释，附注' },
      { word: 'insights', cn: '深刻见解，洞察力' },
      { word: 'pioneer', cn: '先驱，开拓者' },
      { word: 'manipulate', cn: '操纵，处理' },
      { word: 'inherit', cn: '继承（品质/特征）' },
    ],
  };

export default article;
