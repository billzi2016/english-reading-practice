import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Johnstown Flood of 1889: How a Dam Failure Shaped Modern Disaster Management》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00171 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00171',
  slug: 'the-johnstown-flood-of-1889-how-a-dam-failure-shaped-modern-disaster-management',
  title: 'The Johnstown Flood of 1889: How a Dam Failure Shaped Modern Disaster Management',
  subtitle: 'From tragedy to the birth of organized emergency planning in America',
  summary: 'A vivid recount of the South Fork <span class="vocab" data-cn="大坝">dam</span> collapse and its lasting influence on disaster policy.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On May 31, 1889, a quiet summer night in western Pennsylvania turned into one of the deadliest disasters in U.S. history. The South Fork <span class="vocab" data-cn="大坝">dam</span>, originally built to power a canal system, gave way after weeks of heavy rain and an ill‑maintained <span class="vocab" data-cn="泄洪道">spillway</span>. Within minutes, 20 million gallons of water surged down the Conemaugh River valley, sweeping away homes, bridges, and lives. Over 2,200 people perished, making the flood a watershed moment for public safety awareness.`,
    `The immediate aftermath revealed glaring gaps in how communities prepared for such catastrophes. There was no coordinated <span class="vocab" data-cn="灾害管理">disaster management</span> agency at any level of government, and local officials relied on ad‑hoc measures that proved woefully inadequate. Newspapers across the nation reported chaotic rescue attempts, with volunteers using boats, wagons, and even makeshift rafts to pull survivors from the wreckage. The tragedy sparked a national conversation about who should bear responsibility for preventing similar losses.`,
    `One of the most influential responses came from engineers and scientists who began to study the failure systematically. They produced the first detailed <span class="vocab" data-cn="风险评估">risk assessment</span> reports, analyzing soil composition, water pressure, and structural integrity of earthen dams. These studies highlighted that neglecting routine inspections could turn a seemingly stable structure into a ticking time bomb. The findings were published in engineering journals, laying the groundwork for modern standards on dam safety and maintenance.`,
    `The flood also accelerated the professionalization of <span class="vocab" data-cn="工程伦理">engineering ethics</span>. Prominent figures such as John B. McCullough argued that engineers had a moral duty to protect public welfare, not merely to deliver cost‑effective designs. This ethical shift was codified in early versions of the American Society of Civil Engineers (ASCE) code of conduct, which emphasized transparency, accountability, and the need for independent peer review before approving large infrastructure projects.`,
    `In the political arena, the disaster prompted legislators to consider federal involvement in emergency planning. Although a national agency would not be created until decades later, the Johnstown Flood inspired state governments to establish their own <span class="vocab" data-cn="应急响应">emergency response</span> protocols. Pennsylvania passed laws requiring regular dam inspections and mandated that owners maintain functional spillways. These statutes served as prototypes for later federal legislation such as the 1974 Disaster Relief Act.`,
    `Beyond policy, the flood spurred technological innovation. Engineers began to develop more accurate <span class="vocab" data-cn="水文模型">hydrological models</span> that could predict how rainfall would translate into river flow and reservoir levels. Early versions of these models used manual calculations, but they introduced the concept of scenario planning—testing “what‑if” situations to gauge potential impacts. This analytical mindset is now a cornerstone of contemporary disaster risk reduction strategies worldwide.`,
    `Today, the legacy of the Johnstown Flood can be seen in every major infrastructure project that incorporates safety margins, regular inspections, and community outreach programs. Modern <span class="vocab" data-cn="灾害管理">disaster management</span> frameworks—such as FEMA’s Incident Command System—trace their philosophical roots back to the lessons learned from that tragic night. By turning a devastating loss into a catalyst for systematic change, the flood taught society that preparedness is not optional but an essential public service.`
  ],
  vocabulary: [
    { word: 'dam', cn: '大坝' },
    { word: 'spillway', cn: '泄洪道' },
    { word: 'disaster management', cn: '灾害管理' },
    { word: 'emergency response', cn: '应急响应' },
    { word: 'risk assessment', cn: '风险评估' },
    { word: 'engineering ethics', cn: '工程伦理' },
    { word: 'hydrological model', cn: '水文模型' }
  ],
};

export default article;
