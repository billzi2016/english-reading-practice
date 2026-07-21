import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Transatlantic Flight: Charles Lindbergh, the Spirit of St. Louis, and a Nation’s Hope》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00118 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00118',
  slug: 'the-first-transatlantic-flight-charles-lindbergh-the-spirit-of-st-louis-and-a-nation-s-hope',
  title: 'The First Transatlantic Flight: Charles Lindbergh, the Spirit of St. Louis, and a Nation’s Hope',
  subtitle: 'How one daring solo crossing reshaped American confidence in the 1920s',
  summary: 'A narrative of Lindbergh’s historic 1927 flight, its technical challenges, and its cultural impact.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On May 20, 1927, a lone pilot lifted off from Roosevelt Field on Long Island in a sleek <span class="vocab" data-cn="单翼飞机">monoplane</span> named the Spirit of St. Louis. The aircraft was purpose‑built for endurance, with a fuel capacity that would allow it to stay aloft for over thirty hours—far longer than any previous American plane had managed. As the propellers spun, Charles Lindbergh felt both exhilaration and dread; he was about to attempt the first nonstop <span class="vocab" data-cn="跨大西洋的">transatlantic</span> flight without a crew.`,
    `The technical hurdles were immense. Navigation over open ocean relied on dead‑reckoning, using a magnetic compass and careful calculations of speed, wind, and fuel consumption. Lindbergh also carried a primitive <span class="vocab" data-cn="无线电信标">radio beacon</span> that could transmit his position when within range of coastal stations, but for most of the journey he was essentially flying blind. The aircraft’s wooden frame and fabric covering were vulnerable to moisture, and any miscalculation could have meant a forced landing in the cold Atlantic waters.`,
    `Meanwhile, back in the United States, the public followed the flight with feverish interest. Newspapers printed daily updates, often based on sparse radio messages that Lindbergh managed to send at irregular intervals. The nation was still recovering from the post‑World War I recession and the 1921 depression; a heroic achievement promised a boost to national morale and confidence in American <span class="vocab" data-cn="航空技术">aeronautics</span>. Sponsors, including St. Louis businessmen who funded the plane’s construction, saw an opportunity to associate their city with progress and modernity.`,
    `As the days turned into night, Lindbergh faced physical exhaustion. He slept in short bursts, sometimes only a few minutes at a time, while the engine droned on. The cold wind that seeped through the cockpit’s thin glass made his hands numb, yet he kept the controls steady. At one point, a sudden gust caused the aircraft to yaw sharply, threatening to stall. Lindbergh’s quick reflexes and intimate knowledge of the plane’s handling saved him from disaster, illustrating how pilot skill could compensate for limited technology.`,
    `After 33 hours and 30 minutes aloft, the Spirit of St. Louis finally sighted the coast of Ireland near Derry on June 2, 1927. The landing was rough but successful; the aircraft skidded across a field before coming to rest. Crowds gathered instantly, cheering as Lindbergh emerged, his face gaunt but triumphant. He had covered roughly 3,600 miles, setting a new benchmark for distance and endurance in aviation history.`,
    `The aftermath of the flight rippled far beyond the immediate celebration. Lindbergh became an instant national hero, earning the nickname “the Lone Eagle.” His success spurred investment in commercial air travel, leading to the establishment of regular passenger routes across the Atlantic within a decade. Moreover, the flight demonstrated that long‑distance <span class="vocab" data-cn="航空运输">air transport</span> was feasible, encouraging governments and private firms to fund further research into more reliable engines, better navigation aids, and safer aircraft designs.`,
    `In retrospect, Lindbergh’s achievement represents a turning point where human daring intersected with emerging technology. The Spirit of St. Louis embodied the spirit of an era eager to push boundaries, while the pilot’s perseverance highlighted the personal courage required to turn visionary ideas into reality. For a nation yearning for optimism after years of economic hardship, the flight offered a narrative of hope—a reminder that even the vastest oceans could be crossed with ingenuity and resolve.`,
  ],
  vocabulary: [
    { word: 'monoplane', cn: '单翼飞机' },
    { word: 'transatlantic', cn: '跨大西洋的' },
    { word: 'radio beacon', cn: '无线电信标' },
    { word: 'aeronautics', cn: '航空技术' },
    { word: 'air transport', cn: '航空运输' },
    { word: 'navigation', cn: '导航' },
  ],
};

export default article;
