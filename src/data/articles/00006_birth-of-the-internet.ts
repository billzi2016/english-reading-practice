import type { Article } from '../../types/index.ts';

// 文件意图：维护《Birth of the Internet》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00006 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00006',
    slug: 'birth-of-the-internet',
    title: 'Birth of the Internet',
    subtitle: 'From Cold War Military Project to Global Network',
    summary: 'From a Cold War military project to a global network connecting billions — the origin story of everything.',
    category: 'history',
    difficulty: 'intermediate',
    readingMinutes: 5,
    paragraphs: [
      `The internet is so woven into modern life that it is almost impossible to imagine the world without it. Yet it was built deliberately, piece by piece, by a small group of scientists and engineers — many of them funded by the U.S. military during the Cold War. The story of how the internet came to exist is the story of a fear, an idea, a protocol, and a gradual realization that something profound had been created.`,
      `The fear came first. In 1957, the Soviet Union launched <span class="vocab" data-cn="人造卫星（苏联发射的第一颗人造地球卫星）">Sputnik</span>, the world's first artificial satellite. The United States was shocked. If the Soviets could put a satellite in orbit, could they also destroy America's communication infrastructure in a nuclear attack? The U.S. Department of Defense responded by funding <span class="vocab" data-cn="美国高级研究计划局（现为DARPA）">ARPA</span> — the Advanced Research Projects Agency — to develop technologies that could survive a nuclear war.`,
      `The key insight came from a researcher named Paul Baran. Traditional telephone networks were <span class="vocab" data-cn="集中式的（依赖单一中心节点的网络结构）">centralized</span>: destroy the central hub, destroy the network. Baran proposed something different: a <span class="vocab" data-cn="去中心化（分布式网络，没有单一控制节点）">decentralized</span> network where information is broken into small packets, each finding its own route through the network. Destroy any single node, and the packets simply route around the damage.`,
      `In 1969, the first message was sent over <span class="vocab" data-cn="阿帕网（互联网的前身，美国军方早期网络）">ARPANET</span> — the predecessor to the internet. The message was supposed to be "LOGIN," but the system crashed after the first two letters. The first message ever sent on what would become the internet was "LO." It was sent from UCLA to the Stanford Research Institute, 350 miles away.`,
      `Through the 1970s, the network grew slowly. Researchers developed the key protocols that still underpin the internet today. The most important was <span class="vocab" data-cn="TCP/IP（互联网通信的核心协议）">TCP/IP</span>, developed by Vint Cerf and Bob Kahn in 1974. TCP/IP defined how packets of data should be formatted, addressed, transmitted, and received — creating a common language for all computers on the network.`,
      `The internet became publicly accessible in the early 1990s, when Tim Berners-Lee, a British scientist at CERN in Switzerland, invented the <span class="vocab" data-cn="万维网（建立在互联网上的信息系统）">World Wide Web</span>. The Web was not the internet itself — it was a system built on top of the internet, using something called <span class="vocab" data-cn="超文本（包含链接到其他文档的文本格式）">hypertext</span> to link documents together. The first website went live on August 6, 1991. It explained what the World Wide Web was.`,
      `The speed of adoption was unprecedented. In 1993, there were about 130 websites. By 1996, there were 100,000. By 2000, there were 17 million. Today, there are over 1.9 billion websites — though only a fraction are actively used. The internet now carries <span class="vocab" data-cn="艾字节（数据单位，1 EB = 10亿GB）">exabytes</span> of data per day, connecting roughly 5.4 billion people.`,
      `What makes the internet's story remarkable is not just the technology, but the philosophy behind it. Its creators deliberately built it to be open, decentralized, and free. No one owns the internet. No single company or government controls it. These design choices — made in the 1970s by a handful of researchers — have shaped everything from commerce to politics to culture in ways that no one fully predicted. We are still discovering what we built.`,
    ],
    vocabulary: [
      { word: 'decentralized', cn: '去中心化的' },
      { word: 'protocol', cn: '协议（通信规则）' },
      { word: 'hypertext', cn: '超文本' },
      { word: 'infrastructure', cn: '基础设施' },
      { word: 'exabytes', cn: '艾字节（超大数据单位）' },
      { word: 'unprecedented', cn: '史无前例的' },
    ],
  };

export default article;
