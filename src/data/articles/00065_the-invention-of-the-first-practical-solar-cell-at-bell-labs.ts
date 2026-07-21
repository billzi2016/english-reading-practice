import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the First Practical Solar Cell at Bell Labs》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00065 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00065',
  slug: 'the-invention-of-the-first-practical-solar-cell-at-bell-labs',
  title: 'The Invention of the First Practical Solar Cell at Bell Labs',
  subtitle: 'How a small team turned sunlight into usable electricity in the 1950s',
  summary: 'A narrative of the breakthrough that made modern photovoltaics possible.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1950s, Bell Telephone Laboratories—already famous for its transistor and laser breakthroughs—was looking for a new way to power remote devices. The Cold War had sparked interest in satellite communication, and engineers needed a lightweight, reliable source of electricity that could survive the vacuum of space. Traditional batteries were heavy and short‑lived, so a group of physicists turned their attention to converting sunlight directly into electric current, an idea that had been hinted at since Edmond Bequerel’s experiments in 1839 but never realized in practice.`,
    `The core team consisted of three specialists: Daryl Chapin, a chemist with experience in glass and coatings; Calvin Fuller, a materials scientist who understood crystal growth; and Gerald Pearson, an electrical engineer who had helped develop the first silicon transistor. Their complementary expertise allowed them to tackle both the chemical purity of the material and the electrical architecture needed for a functional device. By 1954 they were ready to test their hypothesis in a modest laboratory on the Bell Labs campus.`,
    `At the heart of their work was the <span class="vocab" data-cn="光伏的">photovoltaic</span> effect, where photons striking a <span class="vocab" data-cn="半导体">semiconductor</span> generate charge carriers that can be harvested as electricity. The team focused on silicon because it possessed an ideal <span class="vocab" data-cn="能带宽度">bandgap</span> of about 1.1 eV, matching the energy of visible sunlight. By creating a junction between two differently doped regions—a positively charged (p‑type) side and a negatively charged (n‑type) side—they formed a <span class="vocab" data-cn="pn结">p-n junction</span> that would separate electrons from holes when illuminated, producing a measurable <span class="vocab" data-cn="光电压">photovoltage</span>.`,
    `The experimental cell began with a high‑purity <span class="vocab" data-cn="硅片">silicon wafer</span> sliced from a single crystal grown by the Czochralski method. Fuller introduced controlled amounts of boron and phosphorus—known as <span class="vocab" data-cn="掺杂剂">dopants</span>—to create the p‑type and n‑type layers, respectively. After polishing the wafer to a mirror finish, they deposited a thin layer of gold on one side to serve as an electrode and a thin aluminum contact on the opposite side. When exposed to sunlight, the cell generated about 0.6 volts and a current density that translated into roughly 6% <span class="vocab" data-cn="效率">efficiency</span>, a dramatic improvement over earlier selenium cells that barely reached 1%.`,
    `The breakthrough was announced in a paper presented at the American Physical Society meeting in late 1954, and it quickly attracted attention from both government agencies and private industry. The United States Navy funded further development, leading to the installation of Bell Labs’ silicon cells on the Vanguard I satellite launched in March 1958—the first spacecraft powered by solar energy. This successful demonstration proved that sunlight could reliably supply power for months in orbit, opening the door to a new era of space exploration and remote sensing.`,
    `Beyond aerospace, the invention sparked a wave of research into large‑scale solar panels for terrestrial use. Universities began experimenting with array configurations, while companies such as Hoffman Electronics started commercial production of silicon modules. Over the following decades, incremental improvements in crystal growth, surface passivation, and anti‑reflective coatings pushed laboratory efficiencies beyond 20%, and today commercial photovoltaic systems routinely achieve 18–22% under standard test conditions.`,
    `Looking back, Chapin, Fuller, and Pearson’s work at Bell Labs is often cited as the birth of modern solar power. Their willingness to combine chemistry, materials science, and electrical engineering set a precedent for interdisciplinary collaboration that continues to drive renewable‑energy innovation. As the world seeks cleaner energy sources, the humble silicon cell they created remains the cornerstone of a technology that converts abundant sunlight into clean electricity for homes, businesses, and even entire cities.`
  ],
  vocabulary: [
    { word: 'photovoltaic', cn: '光伏的' },
    { word: 'semiconductor', cn: '半导体' },
    { word: 'silicon wafer', cn: '硅片' },
    { word: 'efficiency', cn: '效率' },
    { word: 'bandgap', cn: '能带宽度' },
    { word: 'dopant', cn: '掺杂剂' },
    { word: 'p-n junction', cn: 'pn结' },
    { word: 'photovoltage', cn: '光电压' }
  ],
};

export default article;
