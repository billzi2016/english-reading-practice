import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Creation of the First Public Library in Ancient Alexandria and Its Legacy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00342 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00342',
  slug: 'the-creation-of-the-first-public-library-in-ancient-alexandria-and-its-legacy',
  title: 'The Creation of the First Public Library in Ancient Alexandria and Its Legacy',
  subtitle: 'How a Hellenistic vision reshaped knowledge sharing for millennia.',
  summary: 'Explore the founding of Alexandria’s legendary library, its innovative practices, and the lasting impact on world scholarship.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early third century BCE, after Alexander the Great’s conquests, his successor <span class="vocab" data-cn="托勒密王朝">Ptolemaic</span> rulers chose the newly founded city of <span class="vocab" data-cn="亚历山大港">Alexandria</span> as a cultural hub. The first king, Ptolemy I Soter, envisioned a grand institution that would collect every written work known to the Mediterranean world, turning the bustling port into an intellectual beacon for merchants, diplomats, and travelers alike.`,
    `The actual establishment of the library is traditionally credited to Ptolemy II Philadelphus (reigned 283–246 BCE). He appointed the philosopher Demetrius of Phalerum as chief librarian, tasking him with a bold mission: acquire scrolls from every conquered city, purchase copies from private owners, and even compel ships docking in Alexandria’s harbor to surrender any books they carried. This systematic approach created what historians call the first truly <span class="vocab" data-cn="公共图书馆">public library</span>, open not only to scholars but also to curious citizens who could request a scroll for study.`,
    `To manage the growing collection, the librarians invented an early form of a <span class="vocab" data-cn="目录系统">catalogue</span> known as the “Pinakes.” Compiled by the scholar Callimachus, the Pinakes listed titles alphabetically, noted authorship, and described subject matter. This innovation allowed readers to locate works on philosophy, mathematics, medicine, and poetry with unprecedented efficiency, laying groundwork for modern library classification systems.`,
    `Beyond mere storage, the Alexandrian institution fostered a vibrant <span class="vocab" data-cn="翻译运动">translation movement</span>. Scholars translated Greek texts into Egyptian Demotic and later Arabic, while also rendering Persian, Indian, and Hebrew works into Greek. This cross‑cultural exchange not only preserved many ancient writings that would otherwise have been lost but also sparked new scientific inquiries, as seen in the work of mathematician Euclid and astronomer Hipparchus who both taught within its walls.`,
    `The library’s physical design reflected its intellectual ambition. Built adjacent to the famous <span class="vocab" data-cn="光之灯塔">Pharos lighthouse</span>, the reading rooms were arranged around a central courtyard, allowing natural light to illuminate rows of wooden shelves stacked with papyrus scrolls. The environment encouraged dialogue; philosophers such as Plotinus and later Christian scholars like Origen would gather in informal debates, illustrating how the space itself became a catalyst for intellectual synthesis.`,
    `Unfortunately, the library’s golden age was not immune to political turmoil. Fires—whether accidental during Julius Caesar’s siege of Alexandria in 48 BCE or later during conflicts between Roman emperors—devastated portions of the collection. Yet even as scrolls were lost, the methodological legacy endured: the emphasis on systematic acquisition, rigorous cataloguing, and open access inspired subsequent institutions such as the House of Wisdom in Baghdad and the modern public library movement of the 19th century.`,
    `Today, while only fragments of the original collection survive, the mythic image of Alexandria’s library continues to shape contemporary ideas about knowledge democratization. Modern librarians cite its example when advocating for open‑access digital archives, arguing that the ancient vision of a shared repository—where anyone could request a text and contribute to collective learning—remains as relevant in the age of the internet as it was under the Ptolemies.`,
  ],
  vocabulary: [
    { word: 'Ptolemaic', cn: '托勒密王朝的' },
    { word: 'Alexandria', cn: '亚历山大港' },
    { word: 'public library', cn: '公共图书馆' },
    { word: 'catalogue', cn: '目录系统' },
    { word: 'translation movement', cn: '翻译运动' },
    { word: 'Pharos lighthouse', cn: '光之灯塔' },
  ],
};

export default article;
