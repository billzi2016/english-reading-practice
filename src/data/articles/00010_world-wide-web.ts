import type { Article } from '../../types/index.ts';

// 文件意图：维护《The World Wide Web》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00010 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00010',
    slug: 'world-wide-web',
    title: 'The World Wide Web',
    subtitle: 'The Simple Idea That Connected Documents Everywhere',
    summary: 'The Web began at CERN as a way for researchers to share information, then became a global system built on links and open standards.',
    category: 'technology',
    difficulty: 'intermediate',
    readingMinutes: 6,
    paragraphs: [
      `People often use “the internet” and “the Web” as if they mean the same thing. They are related, but they are not identical. The internet is the network infrastructure that moves data between machines. The <span class="vocab" data-cn="万维网（建立在互联网之上的超文本信息系统）">World Wide Web</span> is one system that uses that network to connect documents, images, and services. Understanding this difference makes the Web’s origin story clearer.`,
      `In 1989, British computer scientist Tim Berners-Lee was working at CERN, a large research organization in Europe. Scientists there came from many countries and used many incompatible computer systems. Reports, software notes, and project information were scattered across machines and departments. Berners-Lee proposed a system for linking information so that a researcher could move from one document to another without needing to know where every file was stored.`,
      `His proposal combined several ideas that already existed. <span class="vocab" data-cn="超文本（包含可跳转链接的文本）">Hypertext</span> allowed a reader to select a link and open another document. A URL gave each resource an address. HTTP provided rules for a browser and a server to communicate. HTML offered a simple way to mark headings, paragraphs, and links. None of these pieces seems magical on its own. Their strength came from working together as an open, understandable system.`,
      `The first website described the World Wide Web project itself. It ran on a NeXT computer at CERN and explained how to use the new tools. The first browser was more than a viewer: it could also help create pages. This reflected an important early idea. The Web was not supposed to be only a place where a few publishers spoke and everyone else watched. It was designed as a <span class="vocab" data-cn="参与式（允许用户共同参与和贡献的）">participatory</span> space where people could connect and contribute information.`,
      `A decisive moment came in 1993, when CERN placed the Web software in the public domain. This meant that people could use and improve it without paying a licence fee. The decision encouraged universities, companies, and independent developers to build browsers and websites. Open standards made it possible for a page created on one type of computer to be read on another, even when the people who built the systems had never met.`,
      `The Web grew quickly because links create a powerful kind of <span class="vocab" data-cn="网络效应（用户越多，系统价值越大的现象）">network effect</span>. Each useful page made the Web more valuable, and each new reader had a reason to create or share another page. Search engines, online stores, digital newspapers, social platforms, and web applications later changed what people expected from a browser. But the core action remained simple: request a resource by address, receive it, and follow a link to somewhere else.`,
      `This simplicity also created difficult problems. A global publishing system can spread valuable knowledge, but it can also spread mistakes, manipulation, and private information. A link does not tell a reader whether a source is reliable. The Web made publishing easier; it did not make judgment automatic. Learning to compare sources, check dates, and recognize uncertainty has become part of modern reading.`,
      `The Web’s history shows how a modest technical solution can grow beyond its original setting. It began as a tool for researchers who needed to share documents. It became a common <span class="vocab" data-cn="界面（人与系统交互的方式或入口）">interface</span> for work, learning, culture, and public life. Its future will depend not only on faster technology, but also on whether its open and connected foundations remain useful to the people who rely on it.`,
    ],
    vocabulary: [
      { word: 'World Wide Web', cn: '万维网' },
      { word: 'infrastructure', cn: '基础设施' },
      { word: 'hypertext', cn: '超文本' },
      { word: 'participatory', cn: '参与式的' },
      { word: 'public domain', cn: '公有领域' },
      { word: 'network effect', cn: '网络效应' },
      { word: 'interface', cn: '界面，交互入口' },
    ],
  };

export default article;
