import type { Article } from '../../types/index.ts';

// 文件意图：维护《Dubai’s Palm Jumeirah: Engineering the World’s Largest Artificial Island》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00338 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00338',
  slug: 'dubai-s-palm-jumeirah-engineering-the-world-s-largest-artificial-island',
  title: 'Dubai’s Palm Jumeirah: Engineering the World’s Largest Artificial Island',
  subtitle: 'How bold vision and cutting‑edge engineering turned a desert coastline into a palm‑shaped marvel.',
  summary: 'An inside look at the planning, construction, and environmental stewardship behind Dubai’s iconic artificial island.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 2000s, Dubai’s ruler Sheikh Mohammed bin Rashid Al Maktoum announced an audacious plan: to create a man‑made archipelago shaped like a palm tree that would become a new hub for luxury tourism. The project, named Palm Jumeirah, was not merely a real‑estate venture; it was a statement of ambition, showcasing how modern engineering could reshape geography itself. From the outset, the developers faced a daunting question—could an artificial island of this scale survive the relentless forces of the Arabian Gulf?`,
    `The answer began with meticulous <span class="vocab" data-cn="水动力模型">hydrodynamic modeling</span>. Engineers used computational fluid dynamics to simulate tides, currents, and wave patterns around the proposed layout. These simulations revealed potential erosion hotspots along the fronds and highlighted the need for a robust protective barrier. Consequently, a massive <span class="vocab" data-cn="防波堤">breakwater</span> system was designed: a crescent‑shaped reef of rock armor that would absorb wave energy before it could reach the reclaimed land. This outer ring not only safeguarded the island but also created a calm lagoon inside, essential for marina activities and beachfront development.`,
    `The next phase was <span class="vocab" data-cn="填海">land reclamation</span>. Dredgers scooped millions of cubic metres of sand from the Gulf floor, transporting it through pipelines to the designated zones. To prevent the loose sand from shifting under wave action, engineers laid down layers of <span class="vocab" data-cn="土工织物">geotextile</span> mats—high‑strength synthetic fabrics that act like a giant mattress, distributing loads evenly and enhancing stability. Over time, the sand settled, forming a solid foundation upon which roads, utilities, and buildings could be erected.`,
    `Beneath the visible surface, a network of reinforced concrete piles was driven deep into the seabed to anchor structures against settlement and seismic activity. The use of <span class="vocab" data-cn="预制混凝土">precast concrete</span> elements accelerated construction, allowing entire sections of the promenade and residential towers to be assembled offshore before being floated into position. This modular approach reduced on‑site labor and minimized disruption to marine traffic, a crucial consideration given Dubai’s busy shipping lanes.`,
    `Environmental stewardship was woven into every stage. Critics warned that such massive <span class="vocab" data-cn="填海">land reclamation</span> could damage coral reefs and disrupt fish breeding grounds. In response, the project incorporated several <span class="vocab" data-cn="可持续性措施">sustainability measures</span>: artificial reef habitats were installed along the breakwater to promote biodiversity, and water quality monitoring stations were set up to track turbidity levels during construction. Moreover, a <span class="vocab" data-cn="沉没通道">submerged causeway</span> was built to allow marine life to migrate between the open sea and the lagoon without obstruction.`,
    `Today, Palm Jumeirah is home to luxury hotels such as Atlantis, upscale villas, and a bustling waterfront promenade lined with restaurants and boutiques. The island attracts millions of tourists each year, generating significant revenue for Dubai’s economy while also serving as a living laboratory for large‑scale marine engineering. Residents enjoy a unique blend of urban amenities and beachfront leisure, all perched on what was once just sand and sea.`,
    `The success of Palm Jumeirah has inspired similar projects worldwide, from the Netherlands’ Maasvlakte expansions to China’s artificial archipelagos. Yet it also serves as a cautionary tale about balancing ambition with ecological responsibility. Future engineers can learn from Dubai’s experience: rigorous <span class="vocab" data-cn="水动力模型">hydrodynamic modeling</span>, innovative use of <span class="vocab" data-cn="土工织物">geotextile</span> reinforcement, and proactive environmental mitigation are essential ingredients for any large‑scale artificial island that hopes to endure both nature’s forces and public scrutiny.`,
  ],
  vocabulary: [
    { word: 'hydrodynamic modeling', cn: '水动力模型' },
    { word: 'breakwater', cn: '防波堤' },
    { word: 'land reclamation', cn: '填海' },
    { word: 'geotextile', cn: '土工织物' },
    { word: 'precast concrete', cn: '预制混凝土' },
    { word: 'sustainability measures', cn: '可持续性措施' },
    { word: 'submerged causeway', cn: '沉没通道' },
  ],
};

export default article;
