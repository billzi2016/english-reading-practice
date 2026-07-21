import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1914 Christmas Truce: How Soldiers on Both Sides Laid Down Arms for a Moment of Humanity》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00246 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00246',
  slug: 'the-1914-christmas-truce-how-soldiers-on-both-sides-laid-down-arms-for-a-moment-of-humanity',
  title: 'The 1914 Christmas Truce: How Soldiers on Both Sides Laid Down Arms for a Moment of Humanity',
  subtitle: 'A remarkable pause in the Great War that revealed shared humanity amid brutal conflict.',
  summary: 'In December 1914, opposing troops along the Western Front spontaneously ceased fighting, sang carols, exchanged gifts, and even played football.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `The first winter of World War I found millions of men entrenched in a maze of muddy ditches that stretched from the North Sea to Switzerland. Life in the <span class="vocab" data-cn="壕沟">trench</span> was defined by constant artillery bombardment, disease, and the ever‑present threat of a sudden raid. Yet as December 24 approached, a strange calm settled over sections of the Western Front, hinting that even in war, the season could stir something deeper than strategy.`,
    `On the night of Christmas Eve, German soldiers stationed near the village of Le Croisic heard faint strains of “Silent Night” drifting across no‑man’s land. The melody seemed to rise from the British and French lines opposite them, prompting a spontaneous <span class="vocab" data-cn="停火">truce</span>. Men on both sides lowered their rifles, stepped out of the safety of their shelters, and approached the desolate strip that had been a battlefield only hours before. The sight was surreal: soldiers in muddy boots shaking hands, sharing cigarettes, and smiling at one another despite the months of propaganda that had painted the enemy as monsters.`,

    `The initial contact quickly turned into a series of informal gatherings. Small groups exchanged simple gifts—chocolate bars, fresh bread, even handmade buttons—and discussed their families back home. These exchanges were not orchestrated by any high command; they were purely <span class="vocab" data-cn="即兴的">impromptu</span> acts of fraternization that reflected a shared yearning for normalcy. In some sectors, the soldiers even organized an impromptu football match, using a makeshift ball fashioned from a wrapped-up piece of rags. The game lasted only a few minutes before darkness fell, but it left a lasting impression on all who witnessed it.`,

    `The truce was not uniform along the entire front. In areas where commanders were stricter or where fighting had been particularly fierce, the cease‑fire remained limited to brief exchanges of greetings and carols. Nevertheless, the overall spirit of the Christmas pause spread quickly through letters sent home and whispered stories among troops. By the next morning, many soldiers reported that their morale—once eroded by endless shelling—had received a surprising boost. The simple act of sharing humanity reminded them that they were more than just cogs in a massive war machine.`,

    `Official military authorities soon learned of the cease‑fire and reacted with mixed feelings. Some senior officers condemned the fraternization, fearing it would undermine discipline and encourage further desertion from the fight. Others recognized its potential as a morale‑building tool, albeit one that could not be repeated on a larger scale without jeopardizing strategic objectives. In the weeks that followed, higher commands issued orders to prevent any repeat of such spontaneous truces, reinforcing the notion that war must continue despite fleeting moments of compassion.`,

    `Historians have long debated the significance of the 1914 Christmas Truce. Some view it as a poignant reminder that even in the darkest times, common cultural rituals—like singing carols or playing football—can bridge divides. Others argue that the truce was an isolated incident, made possible by the early stage of the war when both sides were still relatively inexperienced and the front lines had not yet hardened into permanent stalemates. Regardless of interpretation, the event remains a powerful illustration of how <span class="vocab" data-cn="同情心">humanity</span> can surface amid mechanized conflict.`,

    `Today, the story of the Christmas Truce is taught in schools and commemorated in museums as an emblem of hope. It serves as a reminder that war is not only fought with weapons but also with narratives, memories, and shared experiences. When we read about soldiers stepping out of their <span class="vocab" data-cn="壕沟">trenches</span> to exchange gifts, we are reminded that the desire for peace can emerge even in the most entrenched circumstances—a lesson as relevant now as it was over a century ago.`
  ],
  vocabulary: [
    { word: 'truce', cn: '停火' },
    { word: 'trench', cn: '壕沟' },
    { word: 'impromptu', cn: '即兴的' },
    { word: 'morale', cn: '士气' },
    { word: 'propaganda', cn: '宣传' },
    { word: 'humanity', cn: '同情心；人性' }
  ],
};

export default article;
