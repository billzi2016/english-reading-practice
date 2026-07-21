import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Great Dust Bowl Migration: How a Climate Disaster Reshaped American Music and Society》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00290 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00290',
  slug: 'the-great-dust-bowl-migration-how-a-climate-disaster-reshaped-american-music-and-society',
  title: 'The Great Dust Bowl Migration: How a Climate Disaster Reshaped American Music and Society',
  subtitle: 'From cracked soil to resonant songs, the 1930s migration forged new cultural pathways.',
  summary: 'Explore how the ecological catastrophe of the Dust Bowl triggered massive migration and left an indelible mark on American music and social life.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When relentless winds lifted millions of tons of topsoil across the <span class="vocab" data-cn="尘碗地区">Dust Bowl</span> in the early 1930s, the Great Plains turned into a barren sea of dust. Farmers who had once cultivated wheat found their fields reduced to gray dunes, and the resulting <span class="vocab" data-cn="土壤侵蚀">soil erosion</span> made it impossible to grow crops. Faced with starvation and hopelessness, families packed what little they could carry and began a desperate trek westward, seeking work and water in California’s fertile valleys.`,
    `The migration was not merely a geographic shift; it reshaped the demographic fabric of America. Over half a million people—often called “Okies” despite many coming from neighboring states—joined the ranks of migrant laborers in places like the San Joaquin Valley. Their arrival strained local economies, sparked tensions with established residents, and forced state officials to confront an unprecedented humanitarian crisis. The federal government responded with programs such as the <span class="vocab" data-cn="新政">New Deal</span>, which aimed to provide relief through public works and agricultural subsidies.`,
    `Amid this turmoil, music emerged as a vital outlet for expressing loss, hope, and resistance. Traveling musicians carried battered guitars and harmonicas, turning dusty campfires into impromptu concert halls. One of the most influential voices was <span class="vocab" data-cn="美国民谣歌手">Woody Guthrie</span>, whose song “<span class="vocab" data-cn="我在加州的路上">This Land Is Your Land</span>” captured both the promise and the hardship of the migrant experience. His lyrics painted vivid pictures of dust‑filled skies, broken promises, and the stubborn dignity of those who kept moving forward.`,
    `Guthrie’s raw storytelling inspired a younger generation of songwriters during the post‑war <span class="vocab" data-cn="民歌复兴运动">folk revival</span>. Artists like <span class="vocab" data-cn="美国民谣传奇人物">Bob Dylan</span> and Joan Baez would later reinterpret Dust Bowl themes, linking them to civil rights struggles and anti‑war protests. The migration’s legacy thus extended far beyond the 1930s, providing a lyrical template for questioning authority and championing the underdog.`,
    `Beyond individual performers, the migration reshaped entire musical genres. The influx of Southern and Midwestern workers into California helped blend <span class="vocab" data-cn="蓝调">blues</span>, country, and Mexican folk traditions, giving rise to a hybrid sound that would later evolve into rock ’n’ roll. Radio stations in Los Angeles began broadcasting “Western swing” and “hillbilly” tunes, exposing urban audiences to the rhythms of the plains. This cross‑cultural exchange demonstrated how environmental disaster could inadvertently foster artistic innovation.`,
    `The social impact was equally profound. Migrant camps became hubs for political organization; the <span class="vocab" data-cn="联邦作家计划">Federal Writers' Project</span> sent journalists to document their stories, producing a body of literature that highlighted poverty and resilience. These narratives influenced policymakers, leading to reforms such as the Soil Conservation Service, which introduced techniques like contour plowing to prevent future dust storms. In this way, the Dust Bowl’s tragedy spurred both cultural expression and concrete environmental policy.`,
    `Today, the echoes of that era still resonate in contemporary music and climate discourse. Modern artists reference the Dust Bowl when addressing today’s ecological challenges, drawing parallels between 1930s droughts and current wildfires or floods. The story reminds us that a single climatic event can ripple through society, reshaping identities, economies, and artistic voices for generations to come.`,
  ],
  vocabulary: [
    { word: 'Dust Bowl', cn: '尘碗地区' },
    { word: 'soil erosion', cn: '土壤侵蚀' },
    { word: 'New Deal', cn: '新政' },
    { word: 'Woody Guthrie', cn: '美国民谣歌手' },
    { word: 'folk revival', cn: '民歌复兴运动' },
    { word: 'Bob Dylan', cn: '美国民谣传奇人物' },
    { word: 'blues', cn: '蓝调' },
    { word: "Federal Writers' Project", cn: '联邦作家计划' },
  ],
};

export default article;
