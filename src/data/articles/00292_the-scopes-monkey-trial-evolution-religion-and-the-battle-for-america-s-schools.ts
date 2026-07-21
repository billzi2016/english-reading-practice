import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Scopes Monkey Trial: Evolution, Religion, and the Battle for America's Schools》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00292 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00292',
  slug: 'the-scopes-monkey-trial-evolution-religion-and-the-battle-for-america-s-schools',
  title: 'The Scopes Monkey Trial: Evolution, Religion, and the Battle for America\'s Schools',
  subtitle: 'How a small courtroom in Tennessee sparked a national debate on science and faith.',
  summary: 'An engaging look at the 1925 Scopes trial, its cultural context, and its lasting impact on American education.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In July 1925 the quiet town of Dayton, Tennessee became the epicenter of a clash that would echo across the United States. The courtroom was packed with curious onlookers, journalists, and radio listeners eager to witness a showdown between two powerful ideas: <span class="vocab" data-cn="进化论">evolution</span> and traditional religious belief. This confrontation, later dubbed the “Monkey Trial,” would shape public opinion about what could be taught in <span class="vocab" data-cn="公立学校">public school</span> classrooms for decades to come.`,
    `The legal battleground was set by the <span class="vocab" data-cn="巴特勒法案">Butler Act</span>, a Tennessee statute passed in 1925 that prohibited teachers from presenting any theory contradicting the Biblical account of creation. The law reflected a broader wave of <span class="vocab" data-cn="基本主义者">fundamentalist</span> sentiment sweeping many parts of America, where religious leaders feared that modern science threatened moral order and community cohesion.`,
    `Enter John T. Scopes, a young high school teacher with a modest background in chemistry and biology. Though he had never actually taught the forbidden material, the American Civil Liberties Union (ACLU) saw him as an ideal test case to challenge the constitutionality of the law. By agreeing to be charged for violating the <span class="vocab" data-cn="巴特勒法案">Butler Act</span>, Scopes became a willing participant in a carefully orchestrated legal experiment designed to probe the limits of state power over education.`,
    `The trial quickly turned into a theatrical spectacle. On one side stood William Jennings Bryan, three‑time presidential candidate and staunch advocate of <span class="vocab" data-cn="创世说">creationism</span>. Opposite him was Clarence Darrow, famed defense attorney and outspoken defender of the <span class="vocab" data-cn="世俗的">secular</span> interpretation of the Constitution. Their cross‑examinations were less about legal minutiae and more about philosophy: Bryan asked whether humans descended from apes, while Darrow challenged the literal reading of scripture with references to the <span class="vocab" data-cn="科学方法">scientific method</span>. The courtroom buzzed with tension as each side tried to sway not only the jury but also a nation listening on newly emerging radio networks.`,
    `The media frenzy amplified the trial’s significance. Newspapers from coast to coast printed vivid accounts, and the first live national radio broadcast brought the drama into living rooms across America. Public reaction was sharply divided; some praised Bryan as a guardian of moral values, while others hailed Darrow as a champion of intellectual freedom. The trial thus became a proxy war for broader cultural anxieties about modernity, urbanization, and the role of religion in public life.`,
    `When the verdict was finally delivered, Scopes was found guilty and fined $100—a symbolic punishment that underscored the law’s authority. However, the Tennessee Supreme Court later upheld the constitutionality of the <span class="vocab" data-cn="巴特勒法案">Butler Act</span> while overturning the conviction on a technicality involving improper jury instructions. The case set an early precedent in American <span class="vocab" data-cn="司法解释">jurisprudence</span>, foreshadowing later battles such as Edwards v. Aguillard (1987) and Kitzmiller v. Dover (2005), which would revisit the tension between science education and religious doctrine.`,
    `Today, the legacy of the Scopes trial lives on in ongoing debates over curriculum standards, textbook content, and the separation of church and state. While the specific language of the <span class="vocab" data-cn="巴特勒法案">Butler Act</span> was repealed in 1967, the underlying questions it raised—who decides what children learn, and how do societies balance faith with empirical evidence—remain as relevant as ever. Understanding this historic episode helps modern readers appreciate the delicate interplay between law, education, and cultural values in shaping a nation’s intellectual future.`,
  ],
  vocabulary: [
    { word: 'evolution', cn: '进化论' },
    { word: 'creationism', cn: '创世说' },
    { word: 'Butler Act', cn: '巴特勒法案' },
    { word: 'fundamentalist', cn: '基本主义者' },
    { word: 'secular', cn: '世俗的' },
    { word: 'jurisprudence', cn: '司法解释' },
  ],
};

export default article;
