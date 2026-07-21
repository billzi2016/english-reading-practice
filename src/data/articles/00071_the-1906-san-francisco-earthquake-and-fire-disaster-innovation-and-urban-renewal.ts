import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1906 San Francisco Earthquake and Fire: Disaster, Innovation, and Urban Renewal》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00071 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00071',
  slug: 'the-1906-san-francisco-earthquake-and-fire-disaster-innovation-and-urban-renewal',
  title: 'The 1906 San Francisco Earthquake and Fire: Disaster, Innovation, and Urban Renewal',
  subtitle: 'How a catastrophe reshaped a city’s architecture, technology, and civic spirit.',
  summary: 'An engaging look at the 1906 quake, the ensuing fire, and the bold reforms that rebuilt San Francisco.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On the morning of April 18, 1906, a sudden rupture along the San Andreas fault released a staggering <span class="vocab" data-cn="里氏震级">magnitude</span> 7.9 earthquake that rattled the Bay Area for about 45 seconds. The shaking was felt as far north as Oregon and as far south as Los Angeles, but San Francisco bore the brunt of the damage. Buildings constructed of unreinforced masonry collapsed like dominoes, streets cracked open, and a chorus of <span class="vocab" data-cn="余震">aftershocks</span> continued for weeks, hampering rescue efforts and keeping residents in a state of constant alarm.`,
    `Within an hour of the initial tremor, ruptured gas mains ignited, sparking what would become one of the most devastating urban fires in American history. The flames raced through the downtown district, leaping from building to building on strong winds that blew at 30 mph. By nightfall, more than three‑quarters of the city’s commercial core was reduced to ash and smoldering timber, and an estimated 250,000 people were left homeless—a staggering proportion of San Francisco’s pre‑quake population.`,

    `The disaster exposed glaring weaknesses in the city's emergency infrastructure. The <span class="vocab" data-cn="消防队">fire department</span>, still equipped with horse‑drawn apparatus and lacking a coordinated water supply, struggled to contain the inferno. In response, city officials launched an unprecedented mobilization: volunteers from neighboring towns arrived with hand‑pump engines, while the U.S. Army set up temporary shelters in Golden Gate Park. This chaotic but heroic effort laid the groundwork for modern disaster management practices, emphasizing inter‑agency cooperation and rapid resource deployment.`,

    `Amid the ruins, a wave of scientific curiosity surged forward. The 1906 quake became a pivotal moment for seismology; the U.S. Geological Survey dispatched portable <span class="vocab" data-cn="地震仪">seismographs</span> to record ground motion across the West Coast. Data collected from these instruments helped scientists understand fault mechanics and eventually led to the development of the Richter scale in 1935. The earthquake also spurred the establishment of a permanent seismic monitoring network, ensuring that future tremors could be detected and analyzed with far greater precision.`,

    `Rebuilding San Francisco required more than bricks and mortar; it demanded a new vision for urban design. City planners embraced the <span class="vocab" data-cn="城市美化运动">City Beautiful movement</span>, which advocated wide boulevards, grand civic buildings, and harmonious public spaces. The 1906 reconstruction plan introduced stricter <span class="vocab" data-cn="建筑规范">building codes</span> that mandated steel frames, fire‑proof materials, and deeper foundations to resist future quakes. These regulations not only improved safety but also gave the rebuilt downtown a distinctive, resilient aesthetic that still defines the city’s skyline today.`,

    `Financing such an ambitious overhaul was no small feat. The municipal government issued bonds backed by federal disaster relief funds, while private investors were attracted by the promise of a modernized commercial hub. Notably, the Pacific Heights neighborhood saw the rise of early high‑rise apartments, reflecting both technological advances in steel construction and a growing demand for housing from an influx of workers who arrived to rebuild the city.`,

    `Today, more than a century later, the legacy of the 1906 earthquake and fire is evident every time San Francisco experiences a tremor. The city's stringent seismic retrofitting standards, its well‑coordinated emergency response protocols, and its iconic architectural landscape all trace their origins to that fateful April day. By turning catastrophe into catalyst, San Francisco demonstrated how disaster can ignite innovation, reshape urban policy, and ultimately forge a stronger, more resilient community.`
  ],
  vocabulary: [
    { word: 'magnitude', cn: '里氏震级' },
    { word: 'aftershock', cn: '余震' },
    { word: 'fire department', cn: '消防队' },
    { word: 'seismograph', cn: '地震仪' },
    { word: 'City Beautiful movement', cn: '城市美化运动' },
    { word: 'building code', cn: '建筑规范' }
  ],
};

export default article;
