import type { Article } from '../../types/index.ts';

const article: Article = {
  id: '00111',
  slug: 'the-great-dust-bowl-how-soil-erosion-sparked-migration-and-shaped-american-policy',
  title: 'The Great Dust Bowl: How Soil Erosion Sparked Migration and Shaped American Policy',
  subtitle: 'A Tale of Drought, Dust Storms, and Federal Reform in the 1930s Plains',
  summary: 'Explore how a combination of climate, farming practices, and policy reshaped America during the Dust Bowl era.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1930s, the Great Plains—stretching from Texas to North Dakota—were hit by an unprecedented drought. Farmers, eager to profit from high wheat prices during World War I, had replaced the native prairie grasses with deep‑plowed rows of monoculture crops. When the rains failed, the once‑rich <span class="vocab" data-cn="表层土壤">topsoil</span> was left exposed, turning the region into a tinderbox for one of the most dramatic environmental crises in U.S. history: the <span class="vocab" data-cn="尘暴时期">Dust Bowl</span>.`,
    `Without the protective root systems of native grasses, wind could sweep across the barren fields with terrifying force. The process, known as <span class="vocab" data-cn="土壤侵蚀">soil erosion</span>, lifted millions of tons of fine particles into the atmosphere, creating towering black clouds that traveled for hundreds of miles. These “black blizzards” reduced visibility to a few feet, clogged machinery, and even infiltrated homes, coating everything in a gritty layer of dust that made breathing difficult and crops impossible to grow.`,
    `John Harper, a wheat farmer near Lubbock, Texas, recalled the day a storm rolled in like a moving wall. “The sky turned brown,” he wrote later, “and the wind howled as if the earth itself were screaming.” His family watched helplessly as the dust entered their windows and settled on furniture, food, and even the newborn’s blanket. By 1934, after three consecutive years of crop failure, the Harpers faced a stark choice: stay and risk starvation or join the growing tide of families heading west in search of work and cleaner air.`,
    `The exodus soon became known as the <span class="vocab" data-cn="迁徙">migration</span> of “Okies” and “Arkies,” though migrants came from many Plains states. They traveled along Route 66, often on foot or in overloaded trucks, carrying what little they could salvage. Upon reaching California’s Central Valley, they encountered a labor market already saturated with local workers, leading to fierce competition for low‑pay agricultural jobs. The influx strained housing, schools, and public services, prompting both sympathy and resentment among Californians.`,
    `Recognizing the crisis, President Franklin D. Roosevelt’s administration launched a series of interventions under the <span class="vocab" data-cn="新政">New Deal</span>. In 1935, the Soil Conservation Service (SCS) was created to promote practices that would hold the soil in place. The <span class="vocab" data-cn="平民保护团">Civilian Conservation Corps</span> planted thousands of miles of <span class="vocab" data-cn="防风林">windbreak</span> trees, known as shelterbelts, across the most vulnerable counties. Simultaneously, the Agricultural Adjustment Act paid farmers to reduce acreage, encouraging crop rotation and cover cropping—methods that restored organic matter to the soil.`,
    `These policies gradually transformed farming on the Plains. By the late 1940s, many fields were protected by rows of sturdy trees that reduced wind speed by up to 50 percent, dramatically cutting <span class="vocab" data-cn="土壤侵蚀">soil erosion</span>. The SCS also introduced contour plowing and terracing, techniques that followed the natural shape of the land rather than forcing straight lines. Over time, the region’s productivity recovered, and the lessons learned fed into later environmental legislation, such as the Conservation Reserve Program of the 1980s.`,
    `Today, the legacy of the Dust Bowl endures in both memory and policy. Modern climate scientists study the period to understand how extreme drought combined with unsustainable agriculture can trigger ecological collapse. Meanwhile, descendants of the original migrants preserve oral histories that remind us of human resilience amid environmental hardship. The story of the Dust Bowl thus serves as a cautionary tale: when we ignore the health of the land, the consequences ripple far beyond the fields, reshaping societies and prompting profound governmental action.`,
  ],
  vocabulary: [
    { word: 'topsoil', cn: '表层土壤' },
    { word: 'Dust Bowl', cn: '尘暴时期' },
    { word: 'soil erosion', cn: '土壤侵蚀' },
    { word: 'migration', cn: '迁徙' },
    { word: 'New Deal', cn: '新政' },
    { word: 'Civilian Conservation Corps', cn: '平民保护团' },
    { word: 'windbreak', cn: '防风林' },
    { word: 'shelterbelt', cn: '防护林带' },
  ],
};

export default article;
