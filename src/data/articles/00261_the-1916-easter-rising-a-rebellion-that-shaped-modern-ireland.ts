import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1916 Easter Rising: A Rebellion That Shaped Modern Ireland》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00261 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00261',
  slug: 'the-1916-easter-rising-a-rebellion-that-shaped-modern-ireland',
  title: 'The 1916 Easter Rising: A Rebellion That Shaped Modern Ireland',
  subtitle: 'How a week‑long insurrection altered the course of Irish nationalism.',
  summary: 'An engaging narrative of the 1916 Easter Rising, its leaders, key events, and lasting impact on modern Ireland.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early hours of Monday, April 24, 1916, a small group of Irish nationalists seized control of several strategic points in Dublin. Their most conspicuous headquarters was the <span class="vocab" data-cn="总邮局">General Post Office (GPO)</span>, whose towering façade became an unlikely symbol of rebellion. The insurgents proclaimed an independent Irish Republic, a bold statement that reverberated far beyond the city’s cobblestones.`,
    `The uprising was not a spontaneous outburst but the culmination of decades of political agitation. Members of the <span class="vocab" data-cn="爱尔兰共和兄弟会">Irish Republican Brotherhood (IRB)</span> had been planning an armed revolt since the late 19th century, coordinating with the newly formed <span class="vocab" data-cn="志愿军">Irish Volunteers</span>. Their aim was to force Britain’s hand by demonstrating that Irish self‑determination could no longer be ignored.`,
    `Key figures such as Patrick Pearse, James Connolly, and Thomas Clarke Lodge emerged as the public faces of the rebellion. Pearse, a poet‑teacher, read the <span class="vocab" data-cn="宣言">Proclamation of the Irish Republic</span> from the steps of the GPO, invoking centuries of cultural heritage to legitimize the armed struggle. Connolly, a seasoned socialist, organized workers into a disciplined militia, emphasizing that the fight was both national and social in nature.`,
    `The British response was swift and overwhelming. Within hours, the <span class="vocab" data-cn="英国军队">British Army</span> deployed artillery and infantry to encircle the rebel positions. Fierce street fighting erupted, with snipers perched on rooftops and makeshift barricades erected along O'Connell Street. Despite their limited numbers, the insurgents employed guerrilla tactics—hit‑and‑run attacks, improvised explosives, and strategic withdrawals—to prolong the conflict.`,
    `After six days of intense combat, the rebels faced an untenable situation. The GPO was reduced to a smoking ruin after sustained shelling, and many leaders were either killed or captured. On April 29, the remaining fighters surrendered under a flag of truce, marking the official end of the uprising. In total, more than 400 people died, including civilians caught in the crossfire, and thousands were wounded.`,
    `The immediate aftermath seemed bleak for Irish nationalism; public opinion initially condemned the violence as reckless. However, the British authorities' decision to execute fifteen leaders—including Pearse, Connolly, and Lodge—sparked a wave of sympathy across Ireland. The executions transformed the fallen rebels into martyrs, galvanizing ordinary citizens who had previously been indifferent or hostile toward militant action.`,
    `In the longer view, the Easter Rising ignited a political shift that reshaped modern Ireland. The 1918 general election saw a landslide victory for <span class="vocab" data-cn="辛尼芬党">Sinn Féin</span>, which had inherited the revolutionary mantle of the IRB and the Volunteers. This electoral success paved the way for the Anglo‑Irish Treaty of 1921, the establishment of the Irish Free State, and eventually the Republic of Ireland we know today. The legacy of the Rising endures in annual commemorations, cultural memory, and the continued debate over how best to achieve national aspirations.`,
  ],
  vocabulary: [
    { word: 'General Post Office (GPO)', cn: '总邮局' },
    { word: 'Irish Republican Brotherhood (IRB)', cn: '爱尔兰共和兄弟会' },
    { word: 'Irish Volunteers', cn: '志愿军' },
    { word: 'Proclamation of the Irish Republic', cn: '宣言' },
    { word: 'British Army', cn: '英国军队' },
    { word: 'Sinn Féin', cn: '辛尼芬党' },
  ],
};

export default article;
