import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Light War: Joseph Swan, Thomas Edison, and the Battle for Electric Illumination》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00325 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00325',
  slug: 'the-light-war-joseph-swan-thomas-edison-and-the-battle-for-electric-illumination',
  title: 'The Light War: Joseph Swan, Thomas Edison, and the Battle for Electric Illumination',
  subtitle: 'How Two Inventors Shaped the Modern World with Their Glowing Rivalry',
  summary: 'A narrative of the fierce competition between Swan and Edison that turned a laboratory curiosity into a global industry.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1880s, two men in different corners of Europe were racing to perfect the <span class="vocab" data-cn="白炽灯">incandescent lamp</span>. In Newcastle upon Tyne, Joseph Swan was experimenting with a carbonized cotton thread inside a glass bulb, while across the Atlantic Thomas Edison was assembling a team at Menlo Park to improve on similar ideas. Both faced the same fundamental problem: how to keep a filament glowing for hours without burning out.`,
    `Swan’s breakthrough came in 1878 when he discovered that a high‑vacuum environment dramatically slowed oxidation of his carbon filament. He filed a British patent in 1880 and demonstrated a working lamp at the Royal Society, earning praise but also attracting skeptics who claimed his design was not yet commercially viable. Meanwhile, Edison’s laboratory focused on creating a reliable <span class="vocab" data-cn="真空管">vacuum tube</span> and testing thousands of filament materials before settling on a carbonized bamboo that could last over 1200 hours.`,
    `The two inventors soon found themselves in what historians call the “<span class="vocab" data-cn="专利战争">patent war</span>”. When Edison’s company began selling lamps in Britain, Swan sued for infringement, arguing that his earlier British patent gave him priority. The legal battle dragged on for years, but both sides realized that a prolonged feud would hurt the nascent market for electric lighting, which still faced fierce competition from gas lamps and oil lanterns.`,
    `In 1883, a pragmatic solution emerged: the formation of the <span class="vocab" data-cn="桑-爱迪生公司">Swan‑Edison Company</span>. The two parties agreed to pool their patents, share manufacturing facilities, and present a united front against rivals. This merger allowed them to standardize the lamp’s design, reduce production costs, and accelerate <span class="vocab" data-cn="商业化">commercialisation</span> across Europe and North America. Factories in London, New York, and Paris began churning out thousands of bulbs each week.`,
    `Despite the partnership, the underlying rivalry never fully disappeared. Edison’s aggressive marketing emphasized his “invention” as a uniquely American achievement, while Swan highlighted his earlier work and the scientific rigor behind his experiments. Their competing narratives shaped public perception for decades, influencing everything from school textbooks to museum exhibits. The story illustrates how personal ambition can both hinder and propel technological progress.`,
    `The impact of their combined efforts was profound. By the turn of the century, electric illumination had begun to replace gas lighting in major cities, extending productive hours after dark and improving public safety. The <span class="vocab" data-cn="灯泡">light bulb</span> also sparked a cascade of related inventions—electric motors, power distribution networks, and eventually the modern electrical grid—that transformed daily life worldwide.`,
    `Today, the legacy of Swan and Edison lives on in the humble lamp that still brightens our homes. Their “war” reminds us that innovation often thrives at the intersection of competition and collaboration, and that behind every glowing filament lies a story of perseverance, scientific inquiry, and the relentless pursuit of light.`
  ],
  vocabulary: [
    { word: 'incandescent lamp', cn: '白炽灯' },
    { word: 'vacuum tube', cn: '真空管' },
    { word: 'patent war', cn: '专利战争' },
    { word: 'Swan‑Edison Company', cn: '桑-爱迪生公司' },
    { word: 'commercialisation', cn: '商业化' },
    { word: 'light bulb', cn: '灯泡' }
  ],
};

export default article;
