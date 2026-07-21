import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the First Public Library in Ancient Alexandria and Its Enduring Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00373 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00373',
  slug: 'the-invention-of-the-first-public-library-in-ancient-alexandria-and-its-enduring-legacy',
  title: 'The Invention of the First Public Library in Ancient Alexandria and Its Enduring Legacy',
  subtitle: 'How a Hellenistic vision created a model for free knowledge that still inspires us today.',
  summary: 'Explore the founding of Alexandria’s legendary library, its scholarly practices, and why its spirit lives on in modern public libraries.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early third century BCE, after Alexander the Great’s death, his successor Ptolemy I Soter turned the bustling port city of Alexandria into a cultural beacon. He commissioned a grand complex called the <span class="vocab" data-cn="学术研究机构">Mouseion</span>, which was more than a temple for the Muses; it housed what would become the world’s first truly public repository of written knowledge, the Library of Alexandria.`,
    `The library’s mission was radical for its time. Rather than serving only royalty or priests, it aimed to collect every book—then called <span class="vocab" data-cn="纸草卷">papyrus scroll</span>—produced across the Mediterranean and Near East. Scholars were paid salaries, provided housing, and given free access to these materials, a practice later described as a <span class="vocab" data-cn="公共获取知识的制度">public access system</span>. This openness attracted thinkers like Euclid, whose *Elements* would shape geometry for millennia.`,
    `One of the most ambitious projects was the creation of a comprehensive <span class="vocab" data-cn="目录，分类系统">catalogue</span> known as the *Pinakes*. Compiled by Callimachus, it listed authors alphabetically and described each work’s subject matter. The Pinakes functioned like an early library database, allowing readers to locate a scroll without wandering aimlessly through endless shelves—a principle that underlies modern library catalogues today.`,
    `The library also became the heart of a massive <span class="vocab" data-cn="翻译运动">translation movement</span>. Scholars translated Hebrew, Persian, Indian, and Egyptian texts into Greek, turning Alexandria into a linguistic crossroads. This effort not only preserved many works that would otherwise have been lost but also sparked new intellectual syntheses, such as the blending of Stoic philosophy with Egyptian astronomy.`,
    `Beyond its scholarly output, the library’s physical design reflected innovative thinking. The reading rooms were arranged around a central courtyard, flooded with natural light, and equipped with wooden shelves called <span class="vocab" data-cn="书架">bibliotheca</span>. These shelves could be rotated to reveal hidden compartments for rare scrolls, an early example of secure yet accessible storage—a concept echoed in modern special collections rooms.`,
    `The destruction of the library—whether by fire, war, or gradual neglect—remains a subject of debate. Yet its legacy survived through the very idea that knowledge should be collected, organized, and made freely available to all citizens. During the Renaissance, scholars revived the Pinakes model, inspiring the creation of civic libraries across Europe, such as the Biblioteca Ambrosiana in Milan.`,
    `Today, when you walk into a municipal library and browse digital catalogs on a touchscreen, you are walking in the footsteps of the Alexandrians. The principles they pioneered—open access, systematic cataloguing, and the encouragement of translation—continue to shape how societies preserve and share information. In this way, the ancient Library of Alexandria remains alive not as a building, but as an enduring philosophy of learning.`,
  ],
  vocabulary: [
    { word: 'Mouseion', cn: '学术研究机构' },
    { word: 'papyrus scroll', cn: '纸草卷' },
    { word: 'public access system', cn: '公共获取知识的制度' },
    { word: 'catalogue', cn: '目录，分类系统' },
    { word: 'translation movement', cn: '翻译运动' },
    { word: 'bibliotheca', cn: '书架' },
  ],
};

export default article;
