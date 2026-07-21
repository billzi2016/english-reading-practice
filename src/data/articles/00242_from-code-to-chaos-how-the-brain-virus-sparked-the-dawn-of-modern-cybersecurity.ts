import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Code to Chaos: How the Brain Virus Sparked Modern Cybersecurity》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00242 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00242',
  slug: 'from-code-to-chaos-how-the-brain-virus-sparked-the-dawn-of-modern-cybersecurity',
  title: 'From Code to Chaos: How the Brain Virus Sparked Modern Cybersecurity',
  subtitle: 'Tracing the first PC virus that reshaped digital defense.',
  summary: 'The 1986 Brain virus turned a harmless floppy into a global alarm, seeding today’s cybersecurity practices.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the mid‑1980s personal computers were still a novelty in many offices, and data was shared primarily on <span class="vocab" data-cn="软盘">floppy disks</span>. It was against this backdrop that two brothers, Basit and Amjad Farooq Alvi of Lahore, Pakistan, released what is now recognized as the world’s first <span class="vocab" data-cn="计算机病毒">computer virus</span>. Named “Brain”, the program silently copied itself into the boot sector of any disk it touched, turning an ordinary storage medium into a carrier for malicious code.`,
    `The infection technique was deceptively simple yet technically clever. By overwriting the <span class="vocab" data-cn="引导扇区">boot sector</span>, Brain ensured that whenever a contaminated disk was inserted and the machine powered on, its code executed before the operating system even loaded. The virus displayed a modest text message crediting its creators, but more importantly it carried a hidden <span class="vocab" data-cn="有效载荷">payload</span> that could corrupt data if left unchecked. This early use of a boot‑sector payload set a precedent for many later threats.`,
    `Word of the “Brain” outbreak spread quickly through bulletin boards and software exchange clubs in Europe and North America. Users reported sudden system crashes, lost files, and the eerie message on their screens. Security researchers soon realized that traditional debugging tools could not easily detect the virus because it resided outside the normal file system. This realization gave rise to the concept of a <span class="vocab" data-cn="病毒特征码">virus signature</span>, a unique pattern used to identify malicious code, and spurred the development of the first commercial <span class="vocab" data-cn="杀毒软件">antivirus</span> programs.`,
    `One of those early tools was created by John McAfee in 1987, marking the birth of the modern antivirus industry. McAfee’s software relied on <span class="vocab" data-cn="基于特征码的检测">signature‑based detection</span>, scanning files for known patterns and quarantining infected ones. The success of this approach demonstrated that proactive defense was possible, encouraging other firms to invest in research and develop more sophisticated scanners. The arms race between virus authors and security vendors began in earnest, each side pushing the other toward greater technical depth.`,
    `As threats grew more complex, security experts realized that signatures alone could not protect against novel attacks. This insight led to the emergence of <span class="vocab" data-cn="入侵检测系统">intrusion detection systems</span> (IDS) and the study of <span class="vocab" data-cn="零日漏洞">zero‑day exploits</span>, where attackers exploit unknown vulnerabilities before patches exist. The Brain incident, though primitive by today’s standards, highlighted the need for continuous monitoring and rapid response—principles that now underpin modern cyber defense frameworks.` ,
    `Today’s cybersecurity toolbox includes techniques unimaginable in 1986. For instance, analysts compute <span class="vocab" data-cn="密码散列">cryptographic hashes</span> of files to verify integrity, while sandbox environments allow suspicious code to run safely isolated from critical systems. Moreover, the practice of sharing threat intelligence across organizations mirrors the early bulletin‑board discussions that first warned users about Brain, showing how collaboration remains a cornerstone of digital safety.` ,
    `Looking back, the chaotic spread of the Brain virus was not merely a technical curiosity; it was a catalyst that transformed how societies think about information security. From boot‑sector hijacking to today’s multi‑layered defense strategies, each step in this evolution traces its lineage to those early floppy‑borne infections. The lesson endures: even the simplest code can spark profound change when it exposes hidden vulnerabilities, urging us always to stay vigilant and innovative.` ,
  ],
  vocabulary: [
    { word: 'floppy disks', cn: '软盘' },
    { word: 'computer virus', cn: '计算机病毒' },
    { word: 'boot sector', cn: '引导扇区' },
    { word: 'payload', cn: '有效载荷' },
    { word: 'virus signature', cn: '病毒特征码' },
    { word: 'antivirus', cn: '杀毒软件' },
    { word: 'signature‑based detection', cn: '基于特征码的检测' },
    { word: 'intrusion detection systems', cn: '入侵检测系统' },
    { word: 'zero‑day exploits', cn: '零日漏洞' },
    { word: 'cryptographic hashes', cn: '密码散列' },
  ],
};

export default article;
