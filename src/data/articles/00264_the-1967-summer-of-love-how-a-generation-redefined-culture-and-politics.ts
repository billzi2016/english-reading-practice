import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1967 Summer of Love: How a Generation Redefined Culture and Politics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00264 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00264',
  slug: 'the-1967-summer-of-love-how-a-generation-redefined-culture-and-politics',
  title: 'The 1967 Summer of Love: How a Generation Redefined Culture and Politics',
  subtitle: 'Exploring the social upheaval that reshaped America in one unforgettable summer.',
  summary: 'A vivid look at how young people in 1967 turned San Francisco into a laboratory for cultural and political change.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the warm months of 1967, a wave of idealism crashed onto the streets of San Francisco’s Haight‑Ashbury district. Thousands of young travelers—many arriving by hitchhiking or hopping freight trains—converged on cheap apartments and vacant lots, forming what later journalists called the <span class="vocab" data-cn="嬉皮士运动">Summer of Love</span>. The atmosphere was electric: folk singers strummed guitars beside psychedelic murals, while street vendors sold tie‑dye shirts and incense. This spontaneous gathering was not merely a party; it was an experiment in living that challenged conventional norms of work, family, and authority.`,
    `At the heart of the movement lay the concept of the <span class="vocab" data-cn="反主流文化">counterculture</span>. Influenced by earlier beatnik writers such as Jack Kerouac and Allen Ginsberg, participants embraced a philosophy that prized personal freedom, communal living, and artistic expression. Communes sprouted in basements and vacant houses, where members shared food, chores, and ideas about spirituality. The <span class="vocab" data-cn="共同体">commune</span> model was both practical—providing cheap shelter—and symbolic, embodying a rejection of the consumerist values that dominated post‑war America.`,
    `Music acted as the movement’s lingua franca. Bands like Jefferson Airplane, Grateful Dead, and The Doors performed nightly at venues such as the Fillmore Auditorium, their sounds amplified by experimental <span class="vocab" data-cn="迷幻药">psychedelic</span> effects. Lyrics spoke of love, peace, and rebellion, resonating with a generation disillusioned by the escalating Vietnam War. Concerts became gatherings where political slogans were shouted between songs, blurring the line between entertainment and protest.`,
    `The Summer of Love also intersected with the burgeoning <span class="vocab" data-cn="公民不服从运动">civil disobedience</span> movement against the draft. Young men who refused induction often found solidarity among hippies, who organized teach‑ins on draft resistance and offered legal assistance. This alliance amplified anti‑war sentiment across college campuses, leading to massive demonstrations such as the March on the Pentagon later that year. The synergy between cultural rebellion and political activism demonstrated how a seemingly carefree lifestyle could fuel serious societal critique.`,
    `Media coverage both magnified and distorted the phenomenon. Magazines like Rolling Stone and newspapers sent correspondents to document “the most important social experiment since the Renaissance.” While some reports romanticized the scene as a utopian dream, others highlighted drug abuse, homelessness, and clashes with police. The resulting narrative created a feedback loop: the more attention the movement received, the more newcomers arrived, further straining resources and prompting authorities to crack down on public gatherings.`,
    `By autumn, the idealism of the Summer of Love began to wane. Many participants faced harsh realities—financial instability, legal troubles, and disillusionment with the limits of communal living. Yet the cultural imprint endured. The era’s emphasis on personal authenticity inspired later social movements, from environmental activism in the 1970s to LGBTQ+ rights campaigns in the 1990s. Moreover, the aesthetic vocabulary—tie‑dye, bell‑bottoms, and psychedelic art—remains a visual shorthand for rebellion in contemporary fashion and media.`,
    `In retrospect, the Summer of Love was more than a fleeting festival; it was a crucible where music, politics, and lifestyle fused to challenge America’s post‑war consensus. The generation that gathered on Haight‑Ashbury streets demonstrated that cultural expression could be a powerful catalyst for political change, a lesson that continues to echo in today’s activist art, digital protests, and global youth movements.`,
  ],
  vocabulary: [
    { word: 'Summer of Love', cn: '嬉皮士运动' },
    { word: 'counterculture', cn: '反主流文化' },
    { word: 'commune', cn: '共同体' },
    { word: 'psychedelic', cn: '迷幻药' },
    { word: 'civil disobedience', cn: '公民不服从运动' },
    { word: 'hippie', cn: '嬉皮士' },
  ],
};

export default article;
