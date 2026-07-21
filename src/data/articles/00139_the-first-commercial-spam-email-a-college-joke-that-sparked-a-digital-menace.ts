import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Commercial Spam Email: A College Joke That Sparked a Digital Menace》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00139 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00139',
  slug: 'the-first-commercial-spam-email-a-college-joke-that-sparked-a-digital-menace',
  title: 'The First Commercial Spam Email: A College Joke That Sparked a Digital Menace',
  subtitle: 'How a promotional blast on ARPANET turned a campus gag into an internet plague.',
  summary: 'A look back at the 1978 DEC email that launched the modern spam problem, tracing its roots to a college comedy sketch.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `It was May 1, 1978, and a handful of graduate students at MIT were still laughing about a <span class="vocab" data-cn="蒙提·派森的喜剧短剧">Monty Python sketch</span> that repeatedly sang the word “spam.” The sketch had become a favorite on campus comedy nights, and its relentless chorus soon became shorthand for anything overly repetitive. Little did anyone know that this harmless joke would later give name to one of the internet’s most persistent nuisances.`,
    `At the same time, the <span class="vocab" data-cn="美国国防部高级研究计划局网络">ARPANET</span> was evolving from a military research tool into a community of university computers sharing email and file transfers. Researchers at institutions like Stanford, UCLA, and Carnegie Mellon exchanged ideas daily, treating the network as an exclusive club where unsolicited messages were considered rude, if not outright illegal.`,
    `Enter <span class="vocab" data-cn="数字设备公司">Digital Equipment Corporation</span> (DEC), a hardware giant eager to promote its new <span class="vocab" data-cn="VAX 11/780 计算机">VAX 11/780</span>. Gary Thuerk, DEC’s <span class="vocab" data-cn="营销经理">marketing manager</span>, saw an opportunity: he drafted a short promotional note and sent it to roughly 400 ARPANET users, many of whom were his former classmates. The email read like a sales brochure, announcing “the latest in minicomputer technology” and inviting recipients to attend a product demonstration in Boston.`,
    `The reaction was immediate and fierce. Recipients complained that the message violated the unwritten etiquette of the network, which prized relevance and consent. Some even threatened to disconnect their machines from ARPANET if such <span class="vocab" data-cn="商业广告邮件">commercial solicitations</span> continued. Although there were no formal laws governing electronic communication at the time, the backlash highlighted a growing tension between commercial interests and academic freedom on the fledgling internet.`,
    `Around the same period, computer users began to adopt the term “spam” from the Monty Python routine to label any repetitive, unwanted message that clogged their inboxes. The analogy was apt: just as the sketch’s chorus drowned out meaningful dialogue, these unsolicited emails threatened to drown out scholarly exchange on ARPANET. By the early 1990s, when the World Wide Web opened the floodgates to a broader public, “spam” had become the universal label for junk email.`,
    `The legacy of Thuerk’s 1978 blast is evident in today’s anti‑spam ecosystem. Legislation such as the <span class="vocab" data-cn="美国《商业电子邮件法案》">CAN‑SPAM Act</span> (2003) set strict rules for commercial email, while technical solutions like Bayesian filters and blacklists constantly evolve to keep inboxes clean. Yet despite these defenses, spam remains a multi‑billion‑dollar industry, proving that the digital menace born from a single college joke still thrives.`,
    `Reflecting on this history reminds us that technology is never neutral; it carries the cultural baggage of its creators. A harmless comedy sketch, a well‑intentioned marketing push, and an open network combined to create a problem that still haunts users worldwide. Understanding these origins helps us appreciate why etiquette, consent, and regulation matter as much in cyberspace as they do in any physical community.`,
    `As we look ahead to ever more connected devices—from smart watches to autonomous cars—the lessons of the first spam email urge caution. Every new communication channel will face its own “spam” test, and it will be up to developers, policymakers, and everyday users to decide whether a joke stays funny or becomes a threat.`,
  ],
  vocabulary: [
    { word: 'Monty Python sketch', cn: '蒙提·派森的喜剧短剧' },
    { word: 'ARPANET', cn: '美国国防部高级研究计划局网络' },
    { word: 'Digital Equipment Corporation', cn: '数字设备公司' },
    { word: 'marketing manager', cn: '营销经理' },
    { word: 'spam', cn: '垃圾邮件' },
    { word: 'CAN-SPAM Act', cn: '美国《商业电子邮件法案》' },
  ],
};

export default article;
