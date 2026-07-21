import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1904–1905 Russo‑Japanese War: Naval Innovation, Strategic Surprise, and Japan’s Rise as a World Power》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00272 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00272',
  slug: 'the-1904-1905-russo-japanese-war-naval-innovation-strategic-surprise-and-japan-s-rise-as-a-world-power',
  title: 'The 1904–1905 Russo‑Japanese War: Naval Innovation, Strategic Surprise, and Japan’s Rise as a World Power',
  subtitle: 'How new technology and daring tactics reshaped East Asian geopolitics',
  summary: 'A narrative of the naval battles that turned Japan into a modern world power.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When tensions over Manchuria and Korea boiled over in early 1904, both empires prepared for a protracted land war. Yet the Japanese Imperial Navy chose a different path: on the night of February 8 they launched a daring <span class="vocab" data-cn="战略性出其不意的行动">strategic surprise</span> against the Russian fleet anchored at Port Arthur. By disabling key shore batteries and sinking several older warships before dawn, Japan seized the initiative and forced Russia onto the defensive even before any ground troops had clashed.`,
    `The Japanese victory owed much to recent <span class="vocab" data-cn="战列舰">battleship</span> design breakthroughs. The flagship Mikasa, built in Britain’s Armstrong yard, combined heavy armor with rapid‑fire 12‑inch guns, a configuration that outclassed most Russian vessels stationed in the Pacific. Equally important was the fleet’s use of <span class="vocab" data-cn="无线电报">wireless telegraphy</span>, allowing admirals to coordinate movements across hundreds of miles without relying on vulnerable signal flags or messengers. This real‑time communication proved decisive during the night‑time maneuvers that followed the initial attack.`,
    `Beyond capital ships, Japan invested heavily in smaller but highly agile units such as <span class="vocab" data-cn="鱼雷艇驱逐舰">torpedo boat destroyer</span>s. These vessels could launch swift torpedo attacks against larger opponents and then retreat before enemy guns could find a lock. At the Battle of the Yellow Sea, Japanese destroyers screened their battleships, repelling Russian attempts to break through the blockade and inflicting heavy losses on the enemy’s cruiser squadron. The concept of a “fleet in being”—maintaining a powerful presence that forces an opponent to react defensively—became a cornerstone of Japanese naval doctrine.`,
    `The climactic encounter unfolded in the <span class="vocab" data-cn="对马海峡">Tsushima Strait</span> on May 27‑28, 1905. Admiral Tōgō Heihachirō arranged his fleet into a classic “crossing the T” formation, allowing Japanese guns to fire broadsides while Russian ships could only reply with forward fire. The battle turned into a relentless artillery duel punctuated by night torpedo attacks that sank or crippled most of the Russian battleship line. By the end of the two‑day fight, the Russians were forced into a desperate <span class="vocab" data-cn="封锁">blockade</span> of their own ports, effectively ending their naval presence in the Pacific.`,
    `Japan’s ability to field such an advanced navy was no accident. The state‑run shipyards at Yokosuka and Kure had, since the 1880s, adopted British construction techniques and even hired foreign engineers to train Japanese craftsmen. Domestic steel production rose sharply, enabling the rapid building of armored cruisers and destroyers without relying on costly imports. This industrial surge not only supplied the war effort but also signaled Japan’s emergence as a modern industrial power capable of sustaining large‑scale military projects.`,
    `The peace that followed at Portsmouth in September 1905 marked a watershed moment: Japan secured control over Korea, southern Sakhalin, and recognition of its interests in Manchuria. Internationally, the victory shattered the prevailing Eurocentric view that Asian nations could not challenge Western powers on equal footing. The war’s outcome accelerated Japan’s admission into the ranks of “great powers,” prompting a reevaluation of diplomatic alliances across Europe and North America.`,
    `The legacy of the Russo‑Japanese War resonated far beyond 1905. Naval planners worldwide studied the effectiveness of long‑range gunnery, wireless coordination, and destroyer tactics, incorporating these lessons into their own fleets during World War I. Moreover, the war demonstrated how a smaller nation could leverage technological innovation and bold strategy to achieve strategic surprise—a lesson that continues to inform modern military thinking.`,
  ],
  vocabulary: [
    { word: 'strategic surprise', cn: '战略性出其不意的行动' },
    { word: 'battleship', cn: '战列舰' },
    { word: 'wireless telegraphy', cn: '无线电报' },
    { word: 'torpedo boat destroyer', cn: '鱼雷艇驱逐舰' },
    { word: 'blockade', cn: '封锁' },
    { word: 'Tsushima Strait', cn: '对马海峡' },
  ],
};

export default article;
