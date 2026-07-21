import type { Article } from '../../types/index.ts';

// 文件意图：维护《Richard Trevithick vs. George Stephenson: The Race to Harness Steam Power for Railways》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00193 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00193',
  slug: 'richard-trevithick-vs-george-stephenson-the-race-to-harness-steam-power-for-railways',
  title: 'Richard Trevithick vs. George Stephenson: The Race to Harness Steam Power for Railways',
  subtitle: 'How Two Pioneers Shaped the Early Railway Age',
  summary: 'A narrative of the rivalry between Trevithick and Stephenson that set the foundation for modern rail transport.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early nineteenth century, Britain was a furnace of invention, its factories belching smoke and its coal mines digging ever deeper. Amid this industrial roar emerged two engineers whose visions would turn iron tracks into arteries of commerce: <span class="vocab" data-cn="理查德·特雷维西克">Richard Trevithick</span> and <span class="vocab" data-cn="乔治·斯蒂芬森">George Stephenson</span>. Their rivalry was less a personal feud than a clash of philosophies—high‑pressure versus low‑pressure steam—and each path would leave an indelible mark on the future of railways.`,
    `Trevithick, born in Cornwall in 1771, grew up watching <span class="vocab" data-cn="高压蒸汽">high‑pressure steam</span> engines power the local tin and copper mines. In 1804 he built the world’s first practical <span class="vocab" data-cn="机车">locomotive</span>, the Penydarren, which hauled ten tons of iron along a <span class="vocab" data-cn="矿山轨道">tramroad</span> in South Wales. The experiment proved that steam could move heavy loads without animal power, but the brittle cast‑iron rails snapped under the strain, and the venture quickly ran out of money.</`,
    `Undeterred, Trevithick turned his attention to road transport, unveiling a <span class="vocab" data-cn="蒸汽马车">steam carriage</span> in London in 1803. Though it dazzled onlookers, the vehicle struggled with the city’s uneven streets and was eventually abandoned. Nevertheless, his relentless pursuit of higher boiler pressures laid technical groundwork that would later enable more powerful engines. Trevithick also refined the <span class="vocab" data-cn="蒸汽机">steam engine</span> for mining pumps, helping to drain deep coal seams—a contribution often overlooked in popular histories.</`,
    `Across the Pennines, a young miner named George Stephenson was making his own mark. Starting as a pit boy at 12, he learned the practical challenges of <span class="vocab" data-cn="煤矿">coal mining</span> and the need for reliable haulage. By the 1810s he had built a series of small engines that used <span class="vocab" data-cn="低压蒸汽">low‑pressure steam</span>, favoring safety and simplicity over raw power. In 1814 his locomotive “Blücher” successfully pulled a load of coal along the Killingworth wagonway, demonstrating that a modestly pressurised engine could be both effective and dependable.</`,
    `The contrasting approaches soon became evident on the national stage. Trevithick’s high‑pressure designs promised greater speed but required stronger, more expensive <span class="vocab" data-cn="铁轨">iron rails</span> and sophisticated engineering. Stephenson’s low‑pressure machines, by contrast, could run on existing wagonways with minimal upgrades. When the Stockton and Darlington Railway opened in 1825—widely regarded as the world’s first public railway—it featured Stephenson’s locomotive “Locomotion No. 1”. The line proved commercially viable, hauling passengers and freight over 25 miles of track, and set a template that other entrepreneurs quickly emulated.</`,
    `Trevithick’s fortunes waned after his London experiments; he died in relative obscurity in 1833, his patents largely unexploited. Yet his daring use of high‑pressure steam inspired later engineers such as <span class="vocab" data-cn="伊萨克·斯蒂芬森">Isaac Stephenson</span> and the builders of the famous “Rocket”. Stephenson, meanwhile, continued to refine his designs, culminating in the 1830 opening of the Liverpool & Manchester Railway—an engineering marvel that cemented steam rail transport as a cornerstone of the Industrial Revolution.</`,
    `The race between Trevithick and Stephenson illustrates how divergent ideas can both propel technological progress. While Stephenson’s pragmatic low‑pressure approach won the early commercial battles, Trevithick’s visionary high‑pressure concepts foreshadowed the powerful locomotives that would dominate the later nineteenth century. Their combined legacies remind us that innovation often thrives on competition, and that today’s “failed” experiments may seed tomorrow’s breakthroughs.`,
  ],
  vocabulary: [
    { word: 'Richard Trevithick', cn: '理查德·特雷维西克' },
    { word: 'George Stephenson', cn: '乔治·斯蒂芬森' },
    { word: 'high-pressure steam', cn: '高压蒸汽' },
    { word: 'low-pressure steam', cn: '低压蒸汽' },
    { word: 'locomotive', cn: '机车' },
    { word: 'tramroad', cn: '矿山轨道' },
    { word: 'steam carriage', cn: '蒸汽马车' },
    { word: 'iron rails', cn: '铁轨' },
    { word: 'coal mining', cn: '煤矿' },
  ],
};

export default article;
