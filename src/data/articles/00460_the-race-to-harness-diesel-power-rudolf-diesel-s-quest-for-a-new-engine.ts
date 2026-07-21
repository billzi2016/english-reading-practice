import type { Article } from '../../types/index.ts';

const article: Article = {
  id: '00460',
  slug: 'the-race-to-harness-diesel-power-rudolf-diesel-s-quest-for-a-new-engine',
  title: 'The Race to Harness Diesel Power: Rudolf Diesel’s Quest for a New Engine',
  subtitle: 'Rudolf Diesel’s relentless pursuit of a more efficient engine',
  summary: 'A narrative of how Rudolf Diesel transformed the concept of internal combustion through high‑compression technology.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `The late nineteenth century was a period of fierce competition to tame the power hidden in coal and oil. While steam engines still ruled factories, engineers dreamed of a lighter, more efficient machine that could fit inside a ship’s hull or a locomotive’s frame. Among them stood a young German inventor named Rudolf Diesel, who believed that the existing <span class="vocab" data-cn="内燃机">internal combustion engine</span> was fundamentally limited by its reliance on spark ignition and wasted heat.`,
    `Diesel’s education at the Royal Bavarian Polytechnic in Munich exposed him to the latest research in physics and chemistry. He became fascinated with the concept of <span class="vocab" data-cn="热力学效率">thermodynamic efficiency</span>, a measure of how much of a fuel’s energy could be converted into useful work. By studying the Carnot cycle, he realized that an engine operating at higher compression temperatures could approach efficiencies far beyond those of contemporary gasoline engines.`,
    `Armed with this insight, Diesel set out to create a machine that used <span class="vocab" data-cn="压燃">compression ignition</span> instead of a spark plug. The key was precise <span class="vocab" data-cn="燃油喷射">fuel injection</span> at the moment the air in the cylinder reached its peak temperature and pressure. After countless experiments with different fuels—from kerosene to vegetable oil—he finally achieved a self‑sustaining cycle that burned fuel cleanly and quietly.`,
    `In 1897 Diesel completed his first working prototype, often called “Motor 1,” at the Maschinenfabrik Augsburg. The engine featured a massive <span class="vocab" data-cn="活塞">piston</span> connected to a sturdy <span class="vocab" data-cn="曲轴">crankshaft</span>, converting the linear motion of combustion into rotary power. When the machine ran for several hours without overheating, it demonstrated an efficiency of over 40 percent—an astonishing figure at the time.`,
    `To protect his invention, Diesel filed a <span class="vocab" data-cn="专利">patent</span> in Germany in 1892 and later secured international protection. He also sought public validation by showcasing his engine at major <span class="vocab" data-cn="展览">exhibitions</span>. In 1900, the larger “Motor II” was displayed at the International Exposition of Electricity in Paris, where it powered a set of lights for more than two days, impressing both investors and skeptical engineers alike.`,
    `Despite these triumphs, Diesel’s quest was far from over. He needed substantial capital to scale production, leading him into negotiations with financiers in Berlin and London. The pressure to deliver commercial engines strained his resources, and in 1913 he embarked on a mysterious sea voyage that ended with his disappearance near the English Channel. While the exact circumstances remain unresolved, his legacy was already cemented in the pages of engineering history.`,
    `Today, the principles Diesel pioneered underpin modern diesel engines found in trucks, ships, and power plants worldwide. Although contemporary concerns about emissions have spurred the development of cleaner alternatives, the core idea of extracting maximum energy from fuel through high‑compression cycles remains a testament to Rudolf Diesel’s relentless pursuit of efficiency.`
  ],
  vocabulary: [
    { word: 'internal combustion engine', cn: '内燃机' },
    { word: 'thermodynamic efficiency', cn: '热力学效率' },
    { word: 'compression ignition', cn: '压燃' },
    { word: 'fuel injection', cn: '燃油喷射' },
    { word: 'piston', cn: '活塞' },
    { word: 'crankshaft', cn: '曲轴' },
    { word: 'patent', cn: '专利' },
    { word: 'exhibition', cn: '展览' }
  ],
};

export default article;
