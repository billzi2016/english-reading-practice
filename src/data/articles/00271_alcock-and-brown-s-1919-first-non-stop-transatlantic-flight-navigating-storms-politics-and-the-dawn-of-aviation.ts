import type { Article } from '../../types/index.ts';

// 文件意图：维护《Alcock and Brown’s 1919 First Non‑Stop Transatlantic Flight: Navigating Storms, Politics, and the Dawn of Aviation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00271 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00271',
  slug: 'alcock-and-brown-s-1919-first-non-stop-transatlantic-flight-navigating-storms-politics-and-the-dawn-of-aviation',
  title: 'Alcock and Brown’s 1919 First Non‑Stop Transatlantic Flight: Navigating Storms, Politics, and the Dawn of Aviation',
  subtitle: 'How two pilots turned a daring gamble into a milestone for modern flight.',
  summary: 'A vivid recount of Alcock and Brown’s historic crossing, its technical hurdles, political backdrop, and lasting influence on aviation.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the autumn of 1919, Britain was still feeling the after‑shocks of World War I. The nation’s engineers and pilots were eager to prove that the war‑born advances in aircraft design could be turned toward peaceful achievement. Sir Hugh Evelyn Daily offered a £10,000 prize for the first <span class="vocab" data-cn="不间断的">non‑stop</span> <span class="vocab" data-cn="跨大西洋的">transatlantic</span> crossing between any point in North America and Europe. The challenge was not merely a test of endurance; it was a statement that the sky could be mastered without stopping for fuel, weather, or fear. This prize set the stage for two Royal Air Force officers—John Alcock and Arthur Brown—to attempt what many thought impossible.`,
    `The aircraft chosen for the venture was a modified Vickers Vimy bomber, originally built for strategic bombing during the war. Engineers reinforced its <span class="vocab" data-cn="机身结构">airframe</span>, added extra fuel tanks to extend range beyond 2,000 miles, and installed a more powerful Rolls‑Royce Eagle VIII engine on each wing. Alcock, an experienced navigator, and Brown, a skilled pilot, spent weeks rehearsing take‑offs from the remote airfield at St. John’s, Newfoundland. Their preparation also involved calibrating a new magnetic compass and testing a portable sextant for <span class="vocab" data-cn="导航">navigation</span> over open water—a task that would prove crucial once they left sight of land.`,
    `On 14 June 1919, under a sky mottled with clouds, the Vimy roared into the Atlantic at precisely 7:30 a.m. The duo immediately began a complex blend of dead‑reckoning and <span class="vocab" data-cn="天体导航">celestial navigation</span>, using the sun’s altitude and star positions to estimate their position. Without modern radio beacons, they relied on a chronometer synchronized to Greenwich Mean Time, allowing them to calculate longitude by comparing local solar noon with the reference time. Every hour, Brown trimmed the propellers while Alcock logged wind drift, fuel consumption, and any deviation from the planned track—a relentless mental arithmetic that kept the aircraft on course despite the endless blue horizon.`,
    `Four hours into the flight, a massive <span class="vocab" data-cn="气旋单体">storm cell</span> materialized ahead. Dark, towering cumulonimbus clouds churned with lightning, and the Vimy was tossed like a leaf in a gale. Brown fought to maintain altitude as the aircraft entered severe turbulence; the wings flexed beyond their design limits, and the engines shuddered under sudden gusts. Alcock’s sextant slipped from his hands when a bolt of lightning illuminated the cockpit, forcing him to rely on dead‑reckoning alone for several tense minutes. The crew decided to skirt the storm’s edge rather than plunge through its core, sacrificing fuel efficiency for safety—a decision that would later be praised as a masterstroke of judgment under pressure.`,
    `While the pilots battled nature, political forces were also at play. The British government, eager to showcase post‑war technological prowess, had quietly offered logistical support and promised public accolades. At the same time, American aviators were preparing their own attempts, creating a subtle <span class="vocab" data-cn="政治压力">political pressure</span> that added urgency to Alcock and Brown’s mission. The Daily Mail prize was not just money; it symbolized national prestige in an era when air power was becoming a diplomatic tool as much as a military one. Their success would therefore be celebrated not only as an aviation triumph but also as a statement of British ingenuity on the world stage.`,
    `After 16 hours and 27 minutes of relentless flight, the Vimy finally touched down on a muddy field near Clifden, County Galway, Ireland. The landing was rough—one wheel collapsed into the soft earth—but both men emerged unscathed. A crowd of locals, Irish soldiers, and British officials rushed to greet them, waving Union Jacks and offering tea. Newspapers across the Atlantic heralded the achievement as “the birth of a new age of travel,” linking it directly to the emerging concept of <span class="vocab" data-cn="航空业的黎明">dawn of aviation</span>. The Daily Mail awarded the prize, and the Vimy was later displayed in a London museum as a testament to human daring.`,
    `The legacy of Alcock and Brown’s crossing rippled through the next decade. Their flight proved that long‑range air travel could be reliable, prompting airlines such as Imperial Airways to launch regular <span class="vocab" data-cn="航空邮件">air mail</span> services between Europe and North America by the mid‑1920s. The techniques refined during the journey—especially in high‑altitude navigation and fuel management—influenced aircraft design leading up to the jet age of the 1950s. Today, modern transatlantic flights owe a debt to those two men who, against stormy skies and geopolitical currents, turned a daring gamble into a cornerstone of global connectivity.`,
  ],
  vocabulary: [
    { word: 'non‑stop', cn: '不间断的' },
    { word: 'transatlantic', cn: '跨大西洋的' },
    { word: 'navigation', cn: '导航' },
    { word: 'storm cell', cn: '气旋单体' },
    { word: 'political pressure', cn: '政治压力' },
    { word: 'dawn of aviation', cn: '航空业的黎明' },
    { word: 'airframe', cn: '机身结构' },
    { word: 'celestial navigation', cn: '天体导航' },
    { word: 'air mail', cn: '航空邮件' },
  ],
};

export default article;
