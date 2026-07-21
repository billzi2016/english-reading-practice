import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1911 Race to the South Pole: Scott vs. Amundsen – Rivalry, Planning, and Tragedy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00117 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00117',
  slug: 'the-1911-race-to-the-south-pole-scott-vs-amundsen-rivalry-planning-and-tragedy',
  title: 'The 1911 Race to the South Pole: Scott vs. Amundsen – Rivalry, Planning, and Tragedy',
  subtitle: 'How two nations vied for the ultimate polar prize and paid a heavy price.',
  summary: 'A dramatic recount of the 1911 competition between Robert Falcon Scott and Roald Amundsen to reach the South Pole, highlighting their strategies, hardships, and lasting impact.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `At the turn of the twentieth century, the icy continent of <span class="vocab" data-cn="南极洲">Antarctica</span> loomed as the last great unknown on Earth. Nations vied for prestige, and two men—Britain’s Robert Falcon Scott and Norway’s Roald Amundsen—found themselves at the center of a fierce rivalry. Both had already earned reputations from earlier voyages: Scott from his 1901–04 Discovery Expedition and Amundsen from navigating the Northwest Passage. Their personal ambition intertwined with national pride, setting the stage for a race that would capture public imagination worldwide.`,
    `Amundsen’s approach was methodical and pragmatic. After learning of Scott’s intention to head south, he secretly altered his original plan to explore the Arctic and instead prepared a dedicated <span class="vocab" data-cn="探险队">expedition</span> for the pole. He recruited seasoned dog‑sled drivers, selected lightweight sledges, and stockpiled supplies at carefully chosen depots along the route. His team practiced in the harsh conditions of Greenland, mastering techniques such as “skiing ahead” to scout terrain—a strategy that would later prove decisive.`,
    `Scott, meanwhile, adhered to a more traditional British model of exploration. He relied heavily on man‑hauling <span class="vocab" data-cn="雪橇">sleighs</span> and carried extensive scientific equipment, hoping to combine heroic conquest with valuable research. His party consisted of seasoned naval officers and scientists, many of whom had limited experience in polar travel. The British expedition also depended on a series of supply depots, but logistical challenges—especially the difficulty of transporting heavy fuel cans across crevasse‑filled ice—hampered their progress.`,
    `The two parties set out from different bases: Amundsen’s Fram left Norway in 1910 and reached the Ross Ice Shelf by December 1911; Scott’s Terra Nova departed England in June 1910, arriving at Cape Evans later that year. As the Antarctic summer waned, both teams raced toward a common point—the geographic South Pole at 90°S latitude. Amundsen’s team, moving swiftly on skis and dogs, reached the pole on December 14, 1911, planting the Norwegian flag amid cheers from their support crew.`,
    `Scott’s party arrived nearly a month later, on January 17, 1912, after enduring a grueling trek that included a fatal blizzard that claimed several members of his team. Their arrival was bittersweet; they planted the Union Jack but soon faced the harsh reality of an unforgiving environment. The return journey proved disastrous: depleted rations, worsening weather, and exhausted men led to the death of Scott and four companions near the Beardmore Glacier. Only a single member, Edward Wilson’s assistant, survived long enough to be found by a search party months later.`,
    `The tragedy sparked intense debate back home. Critics questioned Scott’s leadership decisions—particularly his reliance on man‑hauling and insufficient depot planning—while admirers praised his scientific contributions and stoic bravery. In contrast, Amundsen was lauded for his meticulous preparation, use of indigenous knowledge (such as Inuit sledding techniques), and willingness to adapt tactics based on the environment. The contrasting outcomes highlighted how <span class="vocab" data-cn="后勤">logistical</span> foresight could outweigh sheer determination in extreme conditions.`,
    `Today, the 1911 race stands as a cautionary tale about the balance between ambition and preparation. It also reminds us of the profound respect required when confronting nature’s extremes. Modern polar research builds upon both Scott’s scientific data and Amundsen’s practical methods, illustrating that even in tragedy, valuable lessons endure for future explorers and scientists alike.`,
  ],
  vocabulary: [
    { word: 'Antarctica', cn: '南极洲' },
    { word: 'expedition', cn: '探险队' },
    { word: 'sleigh', cn: '雪橇' },
    { word: 'blizzard', cn: '暴风雪' },
    { word: 'latitude', cn: '纬度' },
    { word: 'logistical', cn: '后勤的' },
  ],
};

export default article;
