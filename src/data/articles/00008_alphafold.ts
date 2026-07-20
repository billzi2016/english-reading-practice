import type { Article } from '../../types/index.ts';

// 文件意图：维护《AlphaFold》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00008 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00008',
    slug: 'alphafold',
    title: 'AlphaFold',
    subtitle: 'When AI Learned to See the Shape of Life',
    summary: 'AlphaFold predicts protein structures from amino-acid sequences, giving biologists a powerful new starting point for research.',
    category: 'technology',
    difficulty: 'advanced',
    readingMinutes: 6,
    paragraphs: [
      `A protein begins as a long chain of chemical building blocks called amino acids. But a chain alone does not explain what the protein does. To become useful, it folds into a precise three-dimensional shape. That shape can determine whether it carries oxygen, sends a signal, speeds up a chemical reaction, or helps a virus enter a cell. Learning a protein’s shape has therefore been one of the central challenges of modern biology.`,
      `For many years, researchers used experimental methods such as X-ray crystallography, nuclear magnetic resonance, and cryo-electron microscopy to determine structures. These methods can produce extraordinarily valuable results, but they may require specialized equipment, careful samples, and long periods of work. Some proteins are especially difficult to study because they are flexible, unstable, or hard to prepare. A prediction method could not replace experiments, but it could make the search much faster.`,
      `This is the problem addressed by <span class="vocab" data-cn="AlphaFold（预测蛋白质三维结构的人工智能系统）">AlphaFold</span>, an AI system developed by Google DeepMind. Given an amino-acid sequence, the system estimates how parts of the protein are likely to sit near one another in space. It combines information from related sequences with learned patterns about geometry and molecular structure. The output is a model: a carefully informed prediction, not a physical molecule in a laboratory bottle.`,
      `The challenge is often described as the protein-folding problem, though the phrase can be misleading. Proteins do not fold by following a simple paper-folding recipe. Their final forms arise from countless physical interactions. Water, electrical charges, and the properties of individual amino acids all matter. A tiny change in a sequence can sometimes alter a shape, and a changed shape can alter a protein’s function. Biology is full of such relationships between <span class="vocab" data-cn="序列（按顺序排列的元素）">sequence</span> and structure.`,
      `In 2020, AlphaFold made a major impression at CASP, an international assessment in which researchers test methods for predicting protein structures. Its results showed that machine learning could achieve remarkable accuracy for many targets. The achievement did not end the need for laboratory science. Instead, it changed the workflow. A scientist can now begin with a predicted structure, inspect the system’s confidence estimates, form a hypothesis, and decide which experiments are most worth doing.`,
      `A crucial feature is that predictions include signals of <span class="vocab" data-cn="置信度（对结果可靠程度的估计）">confidence</span>. One region of a model may be predicted with high confidence, while another may be uncertain or flexible. This distinction matters. A beautiful-looking molecular image can create false certainty if viewers forget that it is a prediction. Responsible users treat the confidence information as part of the result, not as a small warning to ignore.`,
      `The AlphaFold Protein Structure Database made many predictions freely available to researchers. Having a large public resource does not mean every answer is solved. Structures reveal possibilities, but they do not automatically explain how a cell behaves, how a medicine will work, or how a disease develops. Scientists still need experiments, clinical evidence, and careful <span class="vocab" data-cn="验证（通过证据确认结论的过程）">validation</span>. Yet the database can save time by making hidden structural questions easier to explore.`,
      `AlphaFold is a useful example of AI as a scientific instrument. Its value is not that it magically replaces expertise. Its value is that it helps experts see patterns at a scale that was previously difficult to reach. When prediction and experiment work together, they can turn a vast biological library into a set of sharper, more testable questions.`,
    ],
    vocabulary: [
      { word: 'amino acids', cn: '氨基酸' },
      { word: 'crystallography', cn: '晶体学（此处指X射线晶体学）' },
      { word: 'AlphaFold', cn: '蛋白质结构预测人工智能系统' },
      { word: 'sequence', cn: '序列' },
      { word: 'hypothesis', cn: '假设' },
      { word: 'confidence', cn: '置信度' },
      { word: 'validation', cn: '验证' },
    ],
  };

export default article;
