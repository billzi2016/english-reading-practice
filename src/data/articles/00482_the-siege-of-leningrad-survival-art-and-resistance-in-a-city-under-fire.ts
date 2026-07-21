import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Siege of Leningrad: Survival, Art, and Resistance in a City Under Fire》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00482 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00482',
  slug: 'the-siege-of-leningrad-survival-art-and-resistance-in-a-city-under-fire',
  title: 'The Siege of Leningrad: Survival, Art, and Resistance in a City Under Fire',
  subtitle: 'How a besieged city kept its spirit alive through hardship and creativity.',
  summary: 'A narrative look at daily life, cultural defiance, and collective endurance during the World War II blockade of Leningrad.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When German forces encircled Leningrad on September 8 1941, they began a brutal <span class="vocab" data-cn="封锁，围困">blockade</span> that would last 872 days. The city’s supply lines were cut off, and the harsh Russian winter turned streets into icy rivers of misery. Yet, rather than surrender to despair, ordinary citizens organized communal kitchens, shared scarce coal, and improvised heating by burning furniture. These survival tactics formed a fragile but vital network that kept thousands alive long after official food rations ran out.`,
    `Food scarcity forced the government to issue the infamous “bread ration” of just 250 grams per person per day. To stretch this meager amount, Leningraders turned to unconventional sources: bark from birch trees, powdered sawdust mixed into soups, and even boiled rats when desperation peaked. The practice of <span class="vocab" data-cn="配给制度">rationing</span> became a daily ritual, with women queuing for hours at distribution points while men guarded the lines against looters. This collective discipline, though harsh, forged a sense of shared purpose that would later underpin acts of cultural resistance.`,
    `Amidst starvation and artillery fire, the city’s artistic life refused to be silenced. In August 1942, the Leningrad Philharmonic performed Shostakovich’s Seventh Symphony—later dubbed the “Leningrad Symphony”—in a concert hall battered by shells. Musicians played on instruments repaired with makeshift parts, while the audience listened through walls thickened by sandbags. The performance was broadcast over Soviet radio, becoming an international symbol of defiance and proving that even under siege, art could rally morale and convey hope beyond the city’s borders.`,

    `Visual artists also found ways to document the siege. Photographers like Dmitri Baltermants captured haunting images of frozen streets, children huddled in doorways, and soldiers trudging through snow‑laden trenches. These photographs were later compiled into exhibitions that highlighted both suffering and resilience. The act of creating and sharing such imagery was itself a form of <span class="vocab" data-cn="抵抗，反抗">resistance</span>, challenging the narrative that the city had been reduced to mere rubble.`,

    `Underground networks emerged to support those who risked their lives delivering supplies across the frozen Lake Ladoga, known as the “Road of Life.” In winter, trucks and sleds crossed the ice while Soviet engineers constantly monitored its thickness. The <span class="vocab" data-cn="冬季道路">Winter Road</span> became a lifeline, bringing in food, medicine, and even mail from relatives abroad. Volunteers braved enemy artillery to keep the route open, turning each successful crossing into a small victory against the encircling forces.`,

    `Political directives also shaped daily life. Stalin’s Order No. 227—famously summarized as “Not one step back!”—was disseminated throughout the front lines and even reached civilians in Leningrad. While intended to stiffen military resolve, it inadvertently intensified civilian vigilance: neighborhoods organized watch groups, and any hint of defeatism was swiftly reported. This climate of strict discipline coexisted with spontaneous acts of kindness, such as neighbors sharing a single loaf or strangers offering shelter to displaced families.`,

    `When the siege finally lifted in January 1944, Leningrad emerged scarred but unbroken. Survivors carried forward stories of endurance that blended hardship with artistic triumph. The city’s post‑war reconstruction honored both the physical rebuilding and the cultural legacy forged during those dark years. Today, museums preserve artifacts from the blockade, and annual concerts revisit Shostakovich’s symphony as a reminder that even in the most extreme conditions, human creativity can illuminate the path to survival.`,
  ],
  vocabulary: [
    { word: 'blockade', cn: '封锁，围困' },
    { word: 'rationing', cn: '配给制度' },
    { word: 'resistance', cn: '抵抗，反抗' },
    { word: 'Winter Road', cn: '冬季道路' },
    { word: 'Order No. 227', cn: '斯大林第227号命令（“不后退一步”）' },
    { word: 'Leningrad Symphony', cn: '列宁格勒交响曲（指肖斯塔科维奇第七交响曲）' },
  ],
};

export default article;
