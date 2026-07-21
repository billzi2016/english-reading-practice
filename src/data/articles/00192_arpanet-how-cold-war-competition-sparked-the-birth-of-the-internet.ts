import type { Article } from '../../types/index.ts';

// 文件意图：维护《ARPANET: How Cold War Competition Sparked the Birth of the Internet》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00192 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00192',
  slug: 'arpanet-how-cold-war-competition-sparked-the-birth-of-the-internet',
  title: 'ARPANET: How Cold War Competition Sparked the Birth of the Internet',
  subtitle: 'From military experiments to a global network',
  summary: 'A narrative of how geopolitical rivalry gave rise to the first packet‑switched computer network.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1960s, the United States and the Soviet Union were locked in a fierce <span class="vocab" data-cn="冷战">Cold War</span>. Beyond the obvious arms race, both superpowers sought ways to keep their command structures functional even after a nuclear strike. The U.S. Department of Defense therefore funded research into communications that could survive massive disruption, planting the seed for what would become the world’s first wide‑area computer network: <span class="vocab" data-cn="高级研究计划局网络">ARPANET</span>.`,
    `The key technical breakthrough came from a concept called <span class="vocab" data-cn="分组交换">packet switching</span>. Independently proposed by Paul Baran in the United States and Donald Davies in the United Kingdom, packet switching broke messages into small blocks that could travel independently across multiple routes. This approach contrasted sharply with traditional circuit‑switched telephony, which required a dedicated line for each conversation and would be easily crippled by a single point of failure.`,
    `Funding was channeled through <span class="vocab" data-cn="国防高级研究计划局">DARPA</span> (the Defense Advanced Research Projects Agency), the agency created to ensure that America stayed ahead in science and technology. In 1969, four university sites—UCLA, Stanford Research Institute, UC Santa Barbara, and the University of Utah—were linked together using Interface Message Processors, early routers that could forward packets between <span class="vocab" data-cn="大型计算机">mainframe</span> computers. The first message, “LO”, was sent from UCLA to Stanford before the system crashed, but it proved the concept viable.`,
    `As more nodes joined, engineers realized they needed a common set of rules for machines to talk reliably across diverse hardware. This led to the development of the <span class="vocab" data-cn="网络协议">network protocol</span> known as NCP (Network Control Program), which handled basic handshaking and flow control. By the late 1970s, however, the limitations of NCP became apparent, prompting Vint Cerf and Bob Kahn to design a more robust suite: <span class="vocab" data-cn="传输控制协议/网际协议">TCP/IP</span>. Their layered architecture allowed different types of networks—satellite links, radio, and Ethernet—to interoperate, laying the groundwork for the modern Internet.`,
    `The geopolitical pressure of the <span class="vocab" data-cn="冷战">Cold War</span> continued to shape ARPANET’s evolution. Military planners demanded a system that could reroute traffic around damaged nodes, effectively creating a “distributed” command network immune to single‑point attacks. At the same time, Soviet scientists were exploring similar ideas, and the United States wanted to maintain a technological edge. This rivalry accelerated funding cycles and encouraged bold experimentation that might have been deemed too risky in peacetime.`,
    `Beyond its strategic purpose, ARPANET quickly became a playground for researchers. In 1971, Ray Tomlinson implemented <span class="vocab" data-cn="电子邮件">email</span> by allowing users to send messages between hosts using the @ symbol—a simple idea that exploded in popularity. The network also supported remote login and file transfer, enabling scientists at different campuses to collaborate as if they were sitting side by side. These everyday utilities demonstrated the power of a connected world far beyond any military scenario.`,
    `By the mid‑1980s, commercial interests began to see the potential of ARPANET’s architecture. The National Science Foundation launched NSFNET, which adopted TCP/IP and expanded connectivity to more universities and research labs. As the public switched telephone network (PSTN) and later the World Wide Web emerged, the original ARPANET was gradually decommissioned in 1990, but its protocols lived on, forming the backbone of today’s global Internet.`,
    `Looking back, it is striking how a rivalry born out of fear produced one of humanity’s most unifying inventions. The <span class="vocab" data-cn="加密">encryption</span> techniques, routing algorithms, and open standards that were once guarded secrets are now the foundation of everyday communication, commerce, and culture. ARPANET reminds us that even in times of intense competition, collaborative engineering can yield benefits that transcend borders and generations.`,
  ],
  vocabulary: [
    { word: 'Cold War', cn: '冷战' },
    { word: 'ARPANET', cn: '高级研究计划局网络' },
    { word: 'packet switching', cn: '分组交换' },
    { word: 'DARPA', cn: '国防高级研究计划局' },
    { word: 'mainframe', cn: '大型计算机' },
    { word: 'network protocol', cn: '网络协议' },
    { word: 'TCP/IP', cn: '传输控制协议/网际协议' },
    { word: 'email', cn: '电子邮件' },
    { word: 'encryption', cn: '加密' },
  ],
};

export default article;
