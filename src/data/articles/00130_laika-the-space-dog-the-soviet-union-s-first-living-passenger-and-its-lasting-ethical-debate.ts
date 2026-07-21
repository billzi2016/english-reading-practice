import type { Article } from '../../types/index.ts';

// 文件意图：维护《Laika the Space Dog: The Soviet Union’s First Living Passenger and Its Lasting Ethical Debate》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00130 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00130',
  slug: 'laika-the-space-dog-the-soviet-union-s-first-living-passenger-and-its-lasting-ethical-debate',
  title: 'Laika the Space Dog: The Soviet Union’s First Living Passenger and Its Lasting Ethical Debate',
  subtitle: 'A Tale of Courage, Science, and Moral Reflection',
  summary: 'Explore how Laika’s historic flight launched a new era in space exploration while sparking an ethical conversation that still resonates today.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On November 3, 1957, the world heard a faint roar from the launch pad at Baikonur Cosmodrome as the <span class="vocab" data-cn="人造卫星">Sputnik 2</span> lifted off, carrying a small, scruffy terrier‑mix named Laika. The mission was not merely a technical demonstration; it was a bold statement that living beings could survive the harsh conditions of space, a claim that would shape public imagination and scientific policy for decades.`,
    `Laika’s training had been rigorous. Engineers fitted her with a miniature life‑support system that monitored heart rate, respiration, and temperature through tiny <span class="vocab" data-cn="热电偶">thermocouples</span>. The capsule itself was a sealed metal sphere, essentially a primitive <span class="vocab" data-cn="生物卫星">biosatellite</span>, designed to maintain a stable environment while the rocket’s <span class="vocab" data-cn="推进系统">propulsion</span> thrust pushed it beyond Earth’s atmosphere. The mission planners knew that re‑entry would be impossible, but they hoped the data collected would justify the sacrifice.`,
    `Once in orbit, Laika experienced weightlessness for the first time in her life. Sensors recorded fluctuations in blood pressure and oxygen consumption, providing scientists with unprecedented insight into how mammals respond to microgravity. The mission lasted roughly 30 minutes before the capsule’s batteries depleted, and Laika perished from overheating—a fact that was concealed from the public for many years. This secrecy only intensified later criticism when the truth emerged.`,
    `The ethical controversy surrounding Laika’s flight sparked a global debate about the moral responsibilities of scientists. Critics argued that sending an animal on a one‑way trip violated basic principles of <span class="vocab" data-cn="生物伦理学">bioethics</span>, especially since no rescue plan existed. Supporters countered that the knowledge gained saved countless human lives during subsequent manned missions, such as Yuri Gagarin’s historic flight in 1961. The tension between scientific progress and animal welfare became a recurring theme in later space programs, influencing regulations on animal testing worldwide.`,
    `In the decades following Laika’s mission, international guidelines evolved to require humane treatment of research animals, emphasizing minimization of suffering and the pursuit of alternatives whenever possible. Modern space agencies now employ sophisticated computer simulations and robotic proxies before committing any living subject to flight. Nevertheless, the legacy of Laika remains a poignant reminder that technological ambition can outpace ethical reflection.`,
    `Today, Laika’s story is commemorated in museums, literature, and even a small statue at the Moscow Space Museum. Her image appears on postage stamps and has inspired songs that question humanity’s right to use other species as test subjects. The ongoing discussion about her sacrifice informs contemporary debates over artificial intelligence, genetic engineering, and the treatment of sentient beings in experimental settings.`,
    `Ultimately, Laika’s brief journey beyond Earth serves as both a triumph of engineering and a cautionary tale. It illustrates how a single animal can become a catalyst for scientific discovery while simultaneously igniting a moral conversation that endures across generations. As we look toward Mars and beyond, the lessons learned from Laika urge us to balance curiosity with compassion, ensuring that progress never forgets its ethical foundations.`,
  ],
  vocabulary: [
    { word: 'Sputnik 2', cn: '人造卫星' },
    { word: 'thermocouples', cn: '热电偶' },
    { word: 'biosatellite', cn: '生物卫星' },
    { word: 'propulsion', cn: '推进系统' },
    { word: 'bioethics', cn: '生物伦理学' },
    { word: 'orbit', cn: '轨道' },
  ],
};

export default article;
