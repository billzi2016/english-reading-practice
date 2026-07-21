import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Luddite Rebellion: Early 19th‑Century Resistance to Industrial Machines》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00353 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00353',
  slug: 'the-luddite-rebellion-early-19th-century-resistance-to-industrial-machines',
  title: 'The Luddite Rebellion: Early 19th‑Century Resistance to Industrial Machines',
  subtitle: 'How Handloom Weavers Fought the Rise of Mechanized Production',
  summary: 'An engaging narrative about the Luddite movement, its causes, tactics, and lasting influence on labor history.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the winter of 1811, a thin veil of smoke rose from the rooftops of Nottinghamshire, but it was not the usual chimney plume. It was the flicker of torches carried by angry workers who had gathered in secret to discuss a looming threat: the arrival of new <span class="vocab" data-cn="工业革命">industrial revolution</span> machines that could render their skills obsolete. The atmosphere crackled with fear and resolve, setting the stage for one of the most famous early labor uprisings in England.`,
    `The heart of the conflict lay in the textile industry, where centuries‑old handloom weaving was being supplanted by the <span class="vocab" data-cn="机械动力织机">mechanical power loom</span>. These machines could produce cloth at a fraction of the cost and speed of a skilled weaver. Factory owners celebrated higher profits, while rural families who relied on home‑based production faced sudden unemployment. The economic disparity grew sharply, turning technological progress into a source of social tension.`,
    `The name “Luddite” traces back to a possibly apocryphal figure named Ned Ludd, a supposed carpenter who smashed a knitting frame in the late 18th century. By 1811, his legend had become a rallying cry for disgruntled artisans across the Midlands and Yorkshire. Young men and women, many of them former <span class="vocab" data-cn="手工织布工">handloom weaver</span>s, organized clandestine meetings in taverns and barns, sharing stories of lost wages and broken families. Their collective identity coalesced around protecting their craft from the relentless march of mechanization.`,
    `The most dramatic expression of protest was <span class="vocab" data-cn="毁坏机器">frame‑breaking</span>. Armed with hammers, chisels, and sometimes even fire, groups would storm factories under cover of night, dismantling looms and setting them ablaze. These acts were not random vandalism; they were calculated attempts to halt production and send a clear message to factory owners: the workers would not stand idle while machines took their livelihoods. In some towns, entire workshops were reduced to smoldering ruins, prompting newspapers of the day to label the participants as “dangerous radicals.”`,
    `The government responded swiftly and harshly. Prime Minister Spencer Perceval authorized the deployment of troops to the most volatile regions, and Parliament passed the Frame Breaking Act of 1812, which made machine‑breaking a capital offence. Judges handed down death sentences in several high‑profile cases, hoping that fear would quell the unrest. Yet the severity of the punishment only deepened the resolve of many workers, who saw themselves as defenders of a way of life rather than mere criminals.`,
    `Although the rebellion was eventually suppressed, its legacy endured. The Luddite episode highlighted the need for legal frameworks to address industrial change, paving the way for later reforms such as the Factory Acts and the emergence of early <span class="vocab" data-cn="工会">trade union</span> movements. Moreover, the moral dilemma of technology versus employment resurfaced in subsequent centuries, echoing in debates over automation today. The Luddite myth has been romanticized, but at its core it remains a cautionary tale about the human cost of rapid economic transformation.`,
    `Modern historians view the Luddite movement not merely as anti‑technology fanaticism, but as an early expression of workers’ rights and collective bargaining. Their willingness to engage in <span class="vocab" data-cn="破坏行为">sabotage</span> was a desperate strategy born from lack of political voice. While the original frames are long gone, the spirit of questioning how machines reshape society lives on, reminding us that progress must be balanced with compassion for those whose livelihoods hang in the balance.`,
  ],
  vocabulary: [
    { word: 'industrial revolution', cn: '工业革命' },
    { word: 'mechanical power loom', cn: '机械动力织机' },
    { word: 'handloom weaver', cn: '手工织布工' },
    { word: 'frame‑breaking', cn: '毁坏机器' },
    { word: 'trade union', cn: '工会' },
    { word: 'sabotage', cn: '破坏行为' },
  ],
};

export default article;
