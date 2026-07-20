import type { Article } from '../../types/index.ts';

// 文件意图：维护《LoRA — Fine-Tuning AI》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00004 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00004',
    slug: 'lora-ai',
    title: 'LoRA — Fine-Tuning AI',
    subtitle: 'The Math Trick That Democratized AI',
    summary: 'A clever math trick that lets you customize massive AI models on one consumer GPU. Changed AI art overnight.',
    category: 'technology',
    difficulty: 'advanced',
    readingMinutes: 6,
    paragraphs: [
      `In 2022, something strange happened in the world of artificial intelligence. Suddenly, ordinary people with ordinary computers — not supercomputers, not cloud servers, just regular gaming PCs — were creating custom AI models that could generate images in the style of specific artists, generate realistic photos of fictional characters, or produce text that sounded like a particular author. This explosion of creativity was made possible by a technique called <span class="vocab" data-cn="低秩自适应（一种高效微调大型语言模型的方法）">LoRA</span>, which stands for Low-Rank Adaptation.`,
      `To understand why LoRA matters, you first need to understand the problem it solves. Modern AI models — like the large language models that power chatbots, or the <span class="vocab" data-cn="扩散模型（一种生成式AI模型，通过逐步去噪生成图像）">diffusion models</span> that generate images — are enormous. A typical image-generation model has billions of <span class="vocab" data-cn="参数（AI模型中存储学习信息的数值）">parameters</span>: numerical values that the model learned during training. Changing these parameters — a process called fine-tuning — traditionally required massive computing power and weeks of training time.`,
      `The insight behind LoRA is elegant and surprisingly simple. When you fine-tune a model for a specific task, you don't need to change all of its billions of parameters. You only need to change a small <span class="vocab" data-cn="子空间（数学中更小维度的空间）">subspace</span> of them — and that subspace can be represented by two much smaller matrices. Instead of modifying the original model, you train these two small matrices (together called a LoRA <span class="vocab" data-cn="适配器（用于连接或调整模型行为的小型附加模块）">adapter</span>) and attach them to the model.`,
      `The mathematical foundation is a concept called low-rank <span class="vocab" data-cn="分解（将矩阵分解为更小矩阵的乘积）">decomposition</span>. If you have a large matrix of changes (let's say 1000×1000 = 1,000,000 numbers), you can often approximate it with two small matrices (say 1000×4 and 4×1000 = 8,000 numbers total). The key insight is that most meaningful changes to a large model live in a low-dimensional space — meaning a small number of directions captures most of the relevant information.`,
      `The practical results were dramatic. A full fine-tune of Stable Diffusion required gigabytes of storage and days of GPU time. A LoRA adapter for the same model might be just a few megabytes and train in an hour on a single gaming GPU. This was not a small improvement — it was an order-of-magnitude change that democratized AI customization.`,
      `The paper introducing LoRA was published in 2021 by researchers at Microsoft: Edward Hu, Yelong Shen, and colleagues. But it was the AI art community that turned it into a cultural phenomenon. Within months of Stable Diffusion's release in 2022, thousands of LoRA adapters were being shared online — each one trained to generate images in a specific style, of a specific character, or with a specific aesthetic. The <span class="vocab" data-cn="生态系统（相互关联的系统或群体）">ecosystem</span> exploded.`,
      `LoRA has since been applied far beyond image generation. It is now standard practice for fine-tuning large language models. Companies use it to create custom versions of AI assistants trained on their own data, without having to retrain the entire model. Researchers use it to adapt models for specialized domains like medicine or law. The technique has become one of the most important tools in applied AI.`,
      `What makes LoRA remarkable is not just its technical elegance, but what it represents: the idea that you don't need to own a supercomputer to participate in the AI revolution. A clever mathematical insight, combined with the open-source community's <span class="vocab" data-cn="聪明才智，独创性">ingenuity</span>, changed who gets to shape the future of AI.`,
    ],
    vocabulary: [
      { word: 'parameters', cn: '参数（AI模型中的数值）' },
      { word: 'fine-tuning', cn: '微调' },
      { word: 'adapter', cn: '适配器' },
      { word: 'decomposition', cn: '分解（矩阵分解）' },
      { word: 'ecosystem', cn: '生态系统' },
      { word: 'ingenuity', cn: '聪明才智，独创性' },
      { word: 'democratize', cn: '使大众化，民主化' },
    ],
  };

export default article;
