import type { Article } from '../../types/index.ts';

// 文件意图：维护《Willis Carrier and the Invention of Air Conditioning》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00267 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00267',
  slug: 'willis-carrier-and-the-invention-of-air-conditioning-how-a-cool-idea-changed-modern-life',
  title: 'Willis Carrier and the Invention of Air Conditioning',
  subtitle: 'How a Cool Idea Changed Modern Life',
  summary: 'The story of Willis Carrier’s breakthrough in controlling indoor climate and its lasting impact on industry and daily life.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `At the turn of the twentieth century, a young engineer named <span class="vocab" data-cn="威利斯·卡里尔">Willis Carrier</span> was hired by a Brooklyn printing plant that struggled with warped paper and ink smudges. The culprit was not heat alone but uncontrolled <span class="vocab" data-cn="湿度">humidity</span>. While most factories of the era relied on open windows for ventilation, Carrier realized that comfort—and product quality—required a more precise manipulation of indoor air.`,
    `To diagnose the problem, Carrier turned to the emerging science of <span class="vocab" data-cn="湿空气热力学">psychrometrics</span>, which quantifies the relationships among temperature, pressure, and moisture content. He measured dew point, relative humidity, and enthalpy, discovering that a modest reduction in moisture could stabilize paper dimensions without drastically lowering temperature. This analytical approach was revolutionary: instead of merely cooling air, he aimed to condition it.`,
    `Carrier’s breakthrough came when he designed a system that passed warm indoor air over chilled water coils. As the air cooled below its dew point, excess moisture condensed on the coils and drained away, simultaneously lowering temperature and <span class="vocab" data-cn="湿度">humidity</span>. He called this process “<span class="vocab" data-cn="空调">air conditioning</span>,” a term that would soon become synonymous with modern comfort. The prototype proved that controlling both heat and moisture could create a stable indoor environment.`,
    `In 1902, the first full‑scale <span class="vocab" data-cn="空调">air conditioning</span> system was installed at the Sackett‑Wilhelms Lithographing Company. The result was immediate: paper sheets remained flat, ink adhered evenly, and production speed increased. Word of Carrier’s success spread quickly among manufacturers, leading to commissions for theaters, department stores, and even a New York office building by 1914. Each installation refined the technology, adding fans for better air distribution and improving control panels for precise adjustments.`,
    `Recognizing the commercial potential, Carrier founded the Carrier Engineering Corporation in 1915. The company’s early focus remained on large‑scale installations, but the post‑World War I boom created demand for smaller units. Engineers began experimenting with different <span class="vocab" data-cn="制冷剂">refrigerants</span>, moving from toxic ammonia to safer chlorofluorocarbon blends such as Freon. The introduction of reliable <span class="vocab" data-cn="压缩机">compressors</span> allowed the system to circulate refrigerant efficiently, making it feasible for residential and automotive applications by the 1930s.`,
    `Technical advances continued throughout the mid‑century. Engineers combined <span class="vocab" data-cn="蒸发冷却">evaporative cooling</span> with traditional vapor‑compression cycles to improve energy efficiency in dry climates. Meanwhile, research into human perception of indoor climate gave rise to the concept of <span classclass="vocab" data-cn="热舒适">thermal comfort</span>. Standards such as ASHRAE 55 defined acceptable temperature and humidity ranges, guiding architects and engineers in designing spaces that promote productivity and well‑being.`,
    `Today, Carrier’s legacy is visible everywhere: skyscrapers with sophisticated HVAC (heating, ventilation, and <span class="vocab" data-cn="空调">air conditioning</span>) systems, data centers kept cool by precision cooling units, and cars that maintain a comfortable cabin regardless of outside weather. The original insight—that controlling moisture is as important as controlling temperature—remains at the heart of modern climate control technology, proving that a single “cool idea” can indeed reshape civilization.`,
  ],
  vocabulary: [
    { word: 'air conditioning', cn: '空调' },
    { word: 'humidity', cn: '湿度' },
    { word: 'psychrometrics', cn: '湿空气热力学' },
    { word: 'refrigerant', cn: '制冷剂' },
    { word: 'compressor', cn: '压缩机' },
    { word: 'thermal comfort', cn: '热舒适' },
    { word: 'evaporative cooling', cn: '蒸发冷却' },
  ],
};

export default article;
