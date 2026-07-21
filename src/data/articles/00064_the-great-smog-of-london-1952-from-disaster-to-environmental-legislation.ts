import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Smog of London (1952)》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00064 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00064',
  slug: 'the-great-smog-of-london-1952-from-disaster-to-environmental-legislation',
  title: 'The Great Smog of London (1952): From Disaster to Environmental Legislation',
  subtitle: 'How a lethal fog reshaped public health policy in the United Kingdom',
  summary: 'A narrative of the 1952 London smog, its human toll, and the laws it inspired.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In early December 1952, a cold anticyclone settled over the British capital, trapping a thick layer of smoke from countless coal fires. The resulting <span class="vocab" data-cn="烟雾与雾的混合物，常因工业排放而形成">smog</span> turned familiar streets into an eerie twilight, and visibility dropped to just a few metres in some districts. Residents awoke to a choking haze that lingered for five days, turning the city’s iconic skyline into a silhouette of danger.`,
    `The primary culprit was the massive amount of <span class="vocab" data-cn="细小的固体或液体颗粒，悬浮在空气中">particulate matter</span> released by burning low‑grade coal. When combined with high levels of <span class="vocab" data-cn="一种有刺激性气味的气体，常见于燃烧硫含量高的燃料">sulfur dioxide</span>, the particles formed acidic droplets that irritated eyes and lungs. Hospitals reported a sudden surge in patients suffering from severe <span class="vocab" data-cn="呼吸系统疾病，如哮喘或支气管炎">respiratory</span> distress, many of whom were elderly or already ill.`,
    `Official records later estimated that the smog caused between 4,000 and 12,000 premature deaths, though modern <span class="vocab" data-cn="研究疾病在群体中的分布和决定因素的科学">epidemiology</span> suggests the true figure could be higher. The tragedy highlighted how industrial practices—still rooted in the legacy of the <span class="vocab" data-cn="18至19世纪期间，英国经济快速增长的时期">Industrial Revolution</span>—had outpaced public health safeguards. Coal was cheap and abundant, but its unchecked combustion turned the atmosphere into a lethal cocktail.`,
    `Public outrage grew as newspapers printed stark images of people coughing on the streets and families mourning lost loved ones. Politicians could no longer ignore the evidence; a parliamentary inquiry was launched to investigate the causes and recommend preventive measures. The committee’s report emphasized that “the city’s air is not merely polluted, it is poisonous,” urging immediate action to curb emissions from both domestic heating and industrial sources.`,
    `In response, the British government enacted the <span class="vocab" data-cn="英国首部针对空气污染的立法">Clean Air Act of 1956</span>. This groundbreaking law introduced “clean air zones” where the burning of coal was restricted, encouraging a shift toward cleaner fuels such as natural gas and electricity. It also mandated the construction of taller chimneys for factories to disperse pollutants higher into the atmosphere, reducing ground‑level concentrations.`,
    `The legislation had measurable effects within years. Air quality monitoring stations recorded a sharp decline in sulfur dioxide levels, and subsequent winters saw far fewer smog episodes. Moreover, the Act served as a model for other nations grappling with similar problems; cities like Pittsburgh and Beijing later referenced London’s experience when drafting their own air‑quality regulations.`,
    `Today, the Great Smog is taught not only as a historical disaster but also as a turning point in environmental policy. It reminds us that scientific understanding, public awareness, and political will must converge to protect health. As climate change intensifies weather extremes, the lessons from 1952 continue to inform debates on how societies balance energy needs with clean‑air imperatives.`,
  ],
  vocabulary: [
    { word: 'smog', cn: '烟雾与雾的混合物，常因工业排放而形成' },
    { word: 'particulate matter', cn: '细小的固体或液体颗粒，悬浮在空气中' },
    { word: 'sulfur dioxide', cn: '一种有刺激性气味的气体，常见于燃烧硫含量高的燃料' },
    { word: 'respiratory', cn: '呼吸系统疾病，如哮喘或支气管炎' },
    { word: 'epidemiology', cn: '研究疾病在群体中的分布和决定因素的科学' },
    { word: 'Clean Air Act of 1956', cn: '英国首部针对空气污染的立法' },
  ],
};

export default article;
