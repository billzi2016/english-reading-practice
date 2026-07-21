import type { Article } from '../../types/index.ts';

// 文件意图：维护《ELIZA and the Birth of Conversational Artificial Intelligence》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00358 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00358',
  slug: 'eliza-and-the-birth-of-conversational-artificial-intelligence',
  title: 'ELIZA and the Birth of Conversational Artificial Intelligence',
  subtitle: 'How a simple program sparked a new field of human‑computer dialogue',
  summary: 'Explore the story behind ELIZA, its technical tricks, and why it matters for today’s chatbots.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the mid‑1960s a young computer scientist named Joseph Weizenbaum at MIT set out to test whether computers could mimic human conversation. He built <span class="vocab" data-cn="自然语言处理">natural language processing</span> techniques into a program he called ELIZA, naming it after a character in George Bernard Shaw’s play “Pygmalion”. The goal was modest: demonstrate how simple textual tricks could give the illusion of understanding.`,
    `ELIZA operated as a <span class="vocab" data-cn="脚本式对话系统">scripted dialogue system</span>. Its most famous script, “DOCTOR”, pretended to be a Rogerian psychotherapist. When users typed statements like “I feel sad,” ELIZA would respond with reflective questions such as “Why do you say you feel sad?” The program achieved this by using <span class="vocab" data-cn="模式匹配">pattern matching</span> rules that re‑ordered the user’s input and inserted generic prompts. No semantic analysis was performed; the illusion relied entirely on cleverly crafted templates.`,
    `The reaction from users was surprising. Many people, after a brief interaction, reported feeling understood or even emotionally supported. Weizenbaum himself was startled by how quickly participants attributed human qualities to a machine that merely echoed their words. This phenomenon foreshadowed what later researchers would call the “ELIZA effect”: the tendency to over‑interpret computer output as intelligent when it follows familiar conversational patterns.`,
    `While ELIZA was not designed to pass the <span class="vocab" data-cn="图灵测试">Turing test</span>, its success raised philosophical questions about what counts as intelligence. Weizenbaum argued that a program could simulate conversation without possessing genuine understanding, warning against uncritical enthusiasm for <span class="vocab" data-cn="人工智能">artificial intelligence</span>. His critique sparked debates in both computer science and philosophy, influencing later work on <span class="vocab" data-cn="计算语言学">computational linguistics</span> and the ethics of AI.` ,
    `The technical legacy of ELIZA is evident in modern chatbots. Contemporary systems combine deep learning with massive corpora to generate context‑aware responses, yet many still rely on the same core idea: mapping user input to a set of plausible replies. Platforms such as Apple’s Siri or Amazon’s Alexa embed sophisticated language models, but they also incorporate rule‑based fallbacks reminiscent of ELIZA’s pattern rules when handling ambiguous queries.` ,
    `Beyond technology, ELIZA opened a new research arena called <span class="vocab" data-cn="人机交互">human‑computer interaction</span>. Scholars began to study how interface design, tone, and timing affect user trust. The early experiments with ELIZA demonstrated that even minimal conversational cues—like using the user’s name or mirroring emotional language—could dramatically improve engagement. These insights guide today’s virtual assistants in crafting more natural and empathetic dialogues.` ,
    `Looking back from 2024, ELIZA remains a touchstone for anyone interested in conversational AI. Its simplicity reminds us that breakthroughs often start with modest experiments, while its cultural impact warns against conflating surface fluency with true comprehension. As developers build ever more sophisticated dialogue agents, the story of ELIZA encourages both humility and curiosity about what it truly means for machines to “talk”.`,
  ],
  vocabulary: [
    { word: 'natural language processing', cn: '自然语言处理' },
    { word: 'scripted dialogue system', cn: '脚本式对话系统' },
    { word: 'pattern matching', cn: '模式匹配' },
    { word: 'Turing test', cn: '图灵测试' },
    { word: 'artificial intelligence', cn: '人工智能' },
    { word: 'computational linguistics', cn: '计算语言学' },
    { word: 'human-computer interaction', cn: '人机交互' },
  ],
};

export default article;
