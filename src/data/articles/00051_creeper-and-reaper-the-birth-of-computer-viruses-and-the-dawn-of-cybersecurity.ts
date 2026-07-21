import type { Article } from '../../types/index.ts';

// 文件意图：维护《Creeper and Reaper: The Birth of Computer Viruses and the Dawn of Cybersecurity》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00051 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00051',
  slug: 'creeper-and-reaper-the-birth-of-computer-viruses-and-the-dawn-of-cybersecurity',
  title: 'Creeper and Reaper: The Birth of Computer Viruses and the Dawn of Cybersecurity',
  subtitle: 'How a playful experiment sparked an entire security industry',
  summary: 'Explore the story of the first computer worm, Creeper, and its countermeasure Reaper, and see how they laid the groundwork for modern cybersecurity.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1970s the United States was building a network called <span class="vocab" data-cn="高级研究计划署网络">ARPANET</span>, a predecessor of today’s Internet. It linked research institutions using packet‑switched connections, allowing computers to exchange messages and files. Amid this experimental environment, a programmer at BBN Technologies wrote a modest program named Creeper. Though its creator called it “a harmless experiment,” Creeper became the world’s first known <span class="vocab" data-cn="计算机蠕虫">computer worm</span>, marking the birth of malicious software.`,
    `Creeper was designed to run on DEC PDP‑10 mainframes running the TENEX operating system. Its code would copy itself from one host to another by exploiting a simple <span class="vocab" data-cn="网络协议">network protocol</span> that allowed remote login. Once it arrived, Creeper displayed the message “I’m the creeper, catch me if you can!” and then continued its search for the next vulnerable machine. This self‑replicating behavior—spreading without user intervention—is what distinguishes a worm from ordinary viruses.`,
    `The notion of a <span class="vocab" data-cn="有效载荷">payload</span> is central to understanding why Creeper mattered. Although its payload was merely a text string, the program demonstrated that software could move autonomously across a network and affect multiple systems. This raised unsettling questions: if a harmless message could propagate so easily, what might happen if someone attached destructive code? The concept of self‑replication combined with remote distribution laid the theoretical foundation for future threats such as ransomware and botnets.`,
    `Enter Ray Tomlinson, best known for inventing email, who in 1972 wrote a program called Reaper. Unlike modern antivirus suites that scan files and monitor behavior, Reaper was a simple <span class="vocab" data-cn="杀毒软件">antivirus</span> that searched for the specific signature of Creeper’s code and deleted it from infected machines. It operated by logging into each host, locating the worm’s binary, and removing it—essentially an early example of a <span class="vocab" data-cn="二进制可执行文件">binary executable</span> cleanup tool. Reaper proved that defensive software could counteract malicious code, establishing the first arms race in cyberspace.`,
    `The duel between Creeper and Reaper did not stay confined to academic curiosity; it sparked a broader awareness of security risks in networked computing. Researchers began to study how to harden systems against unauthorized access, leading to the emergence of the field now known as <span class="vocab" data-cn="网络安全">cybersecurity</span>. Universities introduced courses on secure programming, and government agencies started drafting policies for protecting critical infrastructure. The lessons learned from this early skirmish informed later defensive strategies such as intrusion detection systems and security patches.`,
    `A decade later, the 1988 Morris Worm demonstrated how quickly a worm could cause widespread disruption when it infected thousands of Unix machines, prompting the creation of the first Computer Emergency Response Team (<span class="vocab" data-cn="计算机紧急响应小组">CERT</span>) at Carnegie Mellon University. The incident underscored that the simple concepts explored by Creeper and Reaper had scaled dramatically with the growth of the Internet. It also highlighted the need for coordinated response teams, vulnerability disclosure processes, and international cooperation—principles that still guide security practice today.`,
    `Today, modern malware can encrypt files, exfiltrate data, or recruit infected devices into massive botnets, yet its lineage traces back to a playful program that simply wanted to be “caught.” Understanding the origins of Creeper and Reaper helps us appreciate how a single experiment sparked an entire industry dedicated to protecting digital assets. As we continue to build ever more complex systems—from cloud services to Internet‑of‑Things devices—the core lesson remains: security must evolve hand‑in‑hand with innovation.`,
  ],
  vocabulary: [
    { word: 'ARPANET', cn: '高级研究计划署网络' },
    { word: 'computer worm', cn: '计算机蠕虫' },
    { word: 'network protocol', cn: '网络协议' },
    { word: 'payload', cn: '有效载荷' },
    { word: 'antivirus', cn: '杀毒软件' },
    { word: 'binary executable', cn: '二进制可执行文件' },
    { word: 'cybersecurity', cn: '网络安全' },
    { word: 'CERT', cn: '计算机紧急响应小组' },
  ],
};

export default article;
