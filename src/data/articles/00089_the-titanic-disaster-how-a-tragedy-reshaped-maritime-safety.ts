import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Titanic Disaster: How a Tragedy Reshaped Maritime Safety》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00089 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00089',
  slug: 'the-titanic-disaster-how-a-tragedy-reshaped-maritime-safety',
  title: 'The Titanic Disaster: How a Tragedy Reshaped Maritime Safety',
  subtitle: 'From a single night of loss to the birth of modern maritime regulations.',
  summary: 'How the sinking of the Titanic forced governments and shipbuilders to overhaul safety standards that still protect passengers today.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On the morning of April 10, 1912, the <span class="vocab" data-cn="泰坦尼克号">Titanic</span> set sail from Southampton under the banner of luxury and technological triumph. Built by <span class="vocab" data-cn="船舶建造公司">Harland &amp; Wolff</span>, she was billed as “unsinkable” because of her extensive network of <span class="vocab" data-cn="防水舱壁">watertight compartments</span>. Four days into the crossing, a massive <span class="vocab" data-cn="冰山">iceberg</span> struck her starboard side, breaching several compartments and sealing the ship’s fate.`,
    `The tragedy was magnified by a glaring oversight: lifeboat capacity. At the time, regulations tied the required number of <span class="vocab" data-cn="救生艇">lifeboats</span> to a vessel’s <span class="vocab" data-cn="吨位">tonnage</span>, not its passenger count. Titanic carried only 20 lifeboats, enough for roughly half of the 2,200 souls aboard. This mismatch meant that when the ship began to list, there simply weren’t enough seats for everyone, turning a disaster into a catastrophe of unprecedented scale.`,
    `Public outrage after the sinking prompted two major inquiries—one in the United States and another by Britain’s <span class="vocab" data-cn="英国商务部">Board of Trade</span>. Both commissions concluded that outdated safety rules and poor communication had contributed to the loss of life. Their reports recommended sweeping reforms, culminating in the first International Convention for the Safety of Life at Sea, commonly known as <span class="vocab" data-cn="国际海上人命安全公约">SOLAS</span>, signed in 1914.`,
    `One of SOLAS’s earliest mandates was that every passenger vessel must carry enough lifeboats for all aboard and conduct regular <span class="vocab" data-cn="救生艇演练">lifeboat drills</span>. The convention also required ships to be equipped with a continuous <span class="vocab" data-cn="无线电报">wireless telegraph</span> system, ensuring that distress signals could reach shore stations instantly. These changes transformed safety from an after‑thought into a core design principle.`,
    `The disaster also exposed the need for better iceberg monitoring. In response, the United States established the <span class="vocab" data-cn="国际冰区巡逻队">International Ice Patrol</span> in 1914, tasked with tracking icebergs in the North Atlantic and broadcasting warnings to ships. Although early patrols relied on visual sightings, the service later incorporated <span class="vocab" data-cn="雷达">radar</span> and satellite data, dramatically reducing the risk of similar collisions.`,
    `Shipbuilders took the lessons to heart by redesigning hull structures. New vessels featured reinforced <span class="vocab" data-cn="双层船体">double hulls</span> and stronger bulkheads that could contain flooding more effectively. The concept of “compartmentalization” was refined, allowing ships to stay afloat even after multiple breaches—a direct response to the failure of Titanic’s original compartment system.`,
    `Today, SOLAS remains the backbone of global maritime safety, updated regularly after incidents such as the 1994 <span class="vocab" data-cn="伊朗油轮事故">Iranian oil tanker fire</span> and the 2012 Costa Concordia grounding. The legacy of Titanic is evident in every modern cruise liner’s safety briefings, lifeboat capacity calculations, and real‑time ice monitoring systems. In this way, a single night of tragedy reshaped an entire industry, turning loss into lasting protection for millions of travelers.`,
  ],
  vocabulary: [
    { word: 'Titanic', cn: '泰坦尼克号' },
    { word: 'Harland & Wolff', cn: '船舶建造公司' },
    { word: 'iceberg', cn: '冰山' },
    { word: 'lifeboat', cn: '救生艇' },
    { word: 'tonnage', cn: '吨位' },
    { word: 'watertight compartment', cn: '防水舱壁' },
    { word: 'Board of Trade', cn: '英国商务部' },
    { word: 'SOLAS', cn: '国际海上人命安全公约' },
    { word: 'wireless telegraph', cn: '无线电报' },
    { word: 'lifeboat drill', cn: '救生艇演练' },
    { word: 'International Ice Patrol', cn: '国际冰区巡逻队' },
    { word: 'radar', cn: '雷达' },
    { word: 'double hull', cn: '双层船体' },
    { word: 'Iranian oil tanker fire', cn: '伊朗油轮事故' },
  ],
};

export default article;
