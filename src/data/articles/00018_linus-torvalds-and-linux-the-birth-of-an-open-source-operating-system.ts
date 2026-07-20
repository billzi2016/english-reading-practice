import type { Article } from '../../types/index.ts';

// 文件意图：维护《Linus Torvalds and Linux: The Birth of an Open-Source Operating System》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00018 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00018',
  slug: 'linus-torvalds-and-linux-the-birth-of-an-open-source-operating-system',
  title: 'Linus Torvalds and Linux: The Birth of an Open-Source Operating System',
  subtitle: 'How a Finnish Student Sparked a Global Software Revolution',
  summary: 'Explore the origins of Linux, Linus Torvalds\' vision, and how open‑source collaboration reshaped modern computing.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Linus Torvalds was born in Helsinki, Finland, in 1969 and grew up during a time when personal computers were just beginning to enter homes. As a teenager he became fascinated by the <span class="vocab" data-cn="内核">kernel</span> of existing systems, especially the proprietary Unix variants that dominated academic labs. While studying computer science at the University of Helsinki, Linus encountered Minix, an educational version of Unix created by Andrew Tanenbaum. He admired its clean design but found it limited for his own experiments, prompting him to consider building something from scratch.`,
    `In August 1991, Linus posted a short message to the comp.os.minix newsgroup announcing that he was working on a 'free operating system' for his PC. He emphasized that the project would remain <span class="vocab" data-cn="开源">open-source</span>, inviting anyone interested to view and modify the source code. The initial release, version 0.01, consisted of only a few thousand lines of C code forming a rudimentary <span class="vocab" data-cn="内核">kernel</span>. To protect the freedom of future contributors, Linus later relicensed his work under the <span class="vocab" data-cn="通用公共许可证">GNU General Public License</span>, aligning it with the broader free software movement.`,
    `The early days of Linux were marked by a vibrant <span class="vocab" data-cn="社区驱动开发">community-driven development</span> model. Enthusiasts from around the world downloaded the source, compiled it on their own hardware, and sent patches back to Linus via email. This collaborative feedback loop accelerated bug fixing and feature addition far beyond what a single developer could achieve. By the end of 1992, Linux had already supported multiple file systems, networking protocols, and basic graphical interfaces, demonstrating that a decentralized community could produce a robust operating system.`,
    `Linux's rapid maturation was possible because it leveraged the extensive suite of tools provided by the GNU project. The GNU Compiler Collection (gcc), the GNU C Library (glibc), and various shell utilities filled in the gaps left by Linus's own code, creating a complete userland that adhered to <span class="vocab" data-cn="可移植操作系统接口">POSIX</span> standards. This synergy meant that developers could write applications once and expect them to run on any Linux system without modification, reinforcing the appeal of an open ecosystem.`,
    `As the kernel stabilized, independent groups began packaging it into cohesive <span class="vocab" data-cn="发行版">distribution</span>s. Debian, founded in 1993, emphasized strict adherence to free software principles and a robust package management system. Red Hat entered the scene a year later, targeting commercial enterprises with professional support and certification programs. These distributions made Linux accessible to non‑technical users, providing installers, documentation, and pre‑configured services that turned a hobbyist kernel into a production‑ready platform.`,
    `In 2005, frustrated by the limitations of existing version control systems, Linus created <span class="vocab" data-cn="Git（分布式版本控制系统）">Git</span>. Designed to handle the massive parallel development of the Linux kernel, Git introduced concepts such as cheap branching and distributed repositories, which have since become standard practice in software engineering. Linus's hands‑on approach to code review—often leaving terse comments like 'LGTM' (Looks Good To Me)—has shaped a culture where peer scrutiny is valued over hierarchical authority.`,
    `Today, Linux powers the majority of web servers, supercomputers, and mobile devices through Android, illustrating how an <span class="vocab" data-cn="开源">open-source</span> project can dominate critical infrastructure. Its licensing model encourages continuous innovation, while its community remains a testament to collaborative problem‑solving. As cloud computing expands and edge devices proliferate, the principles that guided Linus's original 1991 experiment—transparency, meritocracy, and shared ownership—continue to influence the next generation of operating systems.`,
  ],
  vocabulary: [
    { word: 'kernel', cn: '内核' },
    { word: 'open-source', cn: '开源' },
    { word: 'GNU General Public License', cn: '通用公共许可证' },
    { word: 'community-driven development', cn: '社区驱动开发' },
    { word: 'POSIX', cn: '可移植操作系统接口' },
    { word: 'distribution', cn: '发行版' },
    { word: 'Git', cn: 'Git（分布式版本控制系统）' },
  ],
};

export default article;
