import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Discovery of Insulin: Frederick Banting, Charles Best, and the Battle Against Diabetes》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00405 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00405',
  slug: 'the-discovery-of-insulin-frederick-banting-charles-best-and-the-battle-against-diabetes',
  title: 'The Discovery of Insulin: Frederick Banting, Charles Best, and the Battle Against Diabetes',
  subtitle: 'How a daring experiment in Toronto changed the fate of millions.',
  summary: 'A narrative of the 1921 breakthrough that turned a fatal disease into a manageable condition.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1920s, physicians still regarded type 1 diabetes as a death sentence. Patients suffered from relentless <span class="vocab" data-cn="血糖过高">hyperglycemia</span>, leading to weight loss, blindness, and kidney failure. Hospital wards were filled with people whose only hope was a strict diet that could barely prolong life. It was against this bleak backdrop that a young Canadian surgeon named <span class="vocab" data-cn="弗雷德里克·班廷">Frederick Banting</span> began to question whether the pancreas held a secret cure.`,
    `Banting’s hypothesis centered on the <span class="vocab" data-cn="胰腺">pancreas</span>, an organ that had long been suspected of regulating blood sugar. Earlier researchers, including Paul Langerhans, had identified tiny clusters now called the <span class="vocab" data-cn="朗格汉斯岛">islets of Langerhans</span>. Banting proposed that these islands secreted a substance capable of lowering glucose levels, and that removing the surrounding digestive enzymes might allow it to be extracted. This idea was daring because no one had successfully isolated such a hormone before.`,
    `To test his theory, Banting recruited a medical student named <span class="vocab" data-cn="查尔斯·贝斯特">Charles Best</span>. In the summer of 1921 they began a series of grueling experiments on dogs whose pancreases were surgically altered. After ligating the pancreatic ducts and waiting several weeks, they harvested the tissue and produced a crude extract that, when injected, dramatically reduced blood sugar in diabetic dogs. The duo christened the active component <span class="vocab" data-cn="胰岛素">insulin</span>, borrowing a term coined by earlier physiologists to describe its “island” origin.`,
    `The breakthrough attracted the attention of Professor J.J.R. Macleod at the University of Toronto, who provided laboratory space and critical guidance on experimental design. Macleod’s colleague, biochemist James Collip, later refined Banting and Best’s crude preparation into a purer form suitable for human use. In January 1922 the first patient—18‑year‑old Leonard Thompson—received an injection of this purified insulin. Within hours his blood sugar fell to normal levels, and his symptoms receded dramatically, marking the world’s first successful treatment of diabetes.`,
    `The success sparked a worldwide rush to produce insulin on a larger scale. However, early preparations sometimes caused <span class="vocab" data-cn="低血糖">hypoglycemia</span> if dosed too aggressively, underscoring the need for precise dosing and monitoring. Researchers soon discovered that insulin is a <span class="vocab" data-cn="多肽激素">polypeptide hormone</span>, composed of two chains linked by disulfide bonds, which explained its rapid action on cells throughout the body. By the mid‑1920s, pharmaceutical companies in Canada and the United States were mass‑producing insulin, turning a once‑fatal disease into a chronic condition that could be managed with daily injections.`,
    `In 1923 Banting and Macleod shared the <span class="vocab" data-cn="诺贝尔奖">Nobel Prize</span> in Physiology or Medicine for their discovery. The award sparked controversy because Best, who had been instrumental in the animal work, was omitted; Banting later shared his prize money with him as a gesture of gratitude. Over the following decades, advances such as recombinant DNA technology in the 1970s allowed scientists to produce human insulin without relying on animal pancreases, further improving safety and supply.`,
    `Today, more than a century after that modest Toronto lab experiment, diabetes remains a global health challenge, but the legacy of Banting, Best, and their collaborators endures. Modern therapies—long‑acting analogues, continuous glucose monitors, and even artificial pancreas systems—trace their lineage back to the original insulin extract. The story reminds us that curiosity, perseverance, and collaboration can turn a desperate battle into a lasting victory for humanity.`,
  ],
  vocabulary: [
    { word: 'hyperglycemia', cn: '血糖过高' },
    { word: 'Frederick Banting', cn: '弗雷德里克·班廷' },
    { word: 'pancreas', cn: '胰腺' },
    { word: 'islets of Langerhans', cn: '朗格汉斯岛' },
    { word: 'Charles Best', cn: '查尔斯·贝斯特' },
    { word: 'insulin', cn: '胰岛素' },
    { word: 'hypoglycemia', cn: '低血糖' },
    { word: 'polypeptide hormone', cn: '多肽激素' },
    { word: 'Nobel Prize', cn: '诺贝尔奖' },
  ],
};

export default article;
