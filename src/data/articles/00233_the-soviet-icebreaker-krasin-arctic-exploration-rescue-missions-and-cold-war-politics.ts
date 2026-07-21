import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Soviet Icebreaker Krasin: Arctic Exploration, Rescue Missions, and Cold War Politics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00233 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00233',
  slug: 'the-soviet-icebreaker-krasin-arctic-exploration-rescue-missions-and-cold-war-politics',
  title: 'The Soviet Icebreaker Krasin: Arctic Exploration, Rescue Missions, and Cold War Politics',
  subtitle: 'How a single ship shaped polar history from the 1920s to the Cold War',
  summary: 'A narrative of the icebreaker Krasin’s construction, daring rescues, wartime convoys, and its role in Soviet geopolitical strategy.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `The hull that would become the famous <span class="vocab" data-cn="破冰船">icebreaker</span> Krasin was laid down in 1915 at the Baltic Shipyard in St. Petersburg and launched a year later under a different commercial name. After the October Revolution, the fledgling Soviet government seized the vessel, renamed it after Leonid <span class="vocab" data-cn="列昂尼德·克拉辛">Krasin</span>—a Bolshevik diplomat and engineer—and began an extensive conversion that equipped the ship with a powerful diesel‑electric propulsion system capable of breaking through thick sea ice in the <span class="vocab" data-cn="北冰洋">Arctic Ocean</span>.`,
    `By the early 1920s Krasin was already proving its worth on the newly organized Soviet Arctic program. Its first voyages took it to the remote shores of Novaya Zemlya and the Kara Sea, where scientists were mapping uncharted coastlines and testing new <span class="vocab" data-cn="极地航行技术">polar navigation</span> techniques. The ship’s robust hull and reinforced bow allowed it to carve channels for supply vessels, turning previously inaccessible ports into seasonal hubs for mining and fishing operations. These early missions laid the logistical groundwork for later Soviet ambitions in the high north.`,
    `Krasin entered world headlines in 1928 when the Italian airship <i>Italia</i> crashed on the ice near the North Pole during Umberto Nobile’s polar expedition. A frantic international rescue effort was launched, and Krasin steamed from Murmansk at full speed, battling a storm that reduced visibility to less than ten metres. After locating the shattered gondola, the crew used its powerful winches to hoist survivors onto the deck, saving twelve men who would otherwise have perished in sub‑zero temperatures. The episode demonstrated not only the ship’s technical capabilities but also how Soviet humanitarian aid could be wielded as a tool of soft power during an era of growing geopolitical tension.`,
    `A few years later, in 1934, Krasin played a starring role in another dramatic rescue—the freeing of the steamship <i>Chelyuskin</i>, which had become trapped and eventually crushed by pack ice near the Bering Strait. While the crew abandoned ship and trekked over the ice to safety, Krasin braved relentless blizzards to reach the wreckage, evacuating the remaining personnel and salvaging valuable scientific equipment. The successful operation was celebrated across the Soviet Union; Stalin awarded dozens of medals, and the episode was turned into a propaganda narrative that highlighted Soviet mastery over nature and the resolve of its workers.`,
    `During World War II Krasin shifted from rescue to defense, escorting Allied <span class="vocab" data-cn="护航船队">convoys</span> through the treacherous Barents Sea route to the port of Murmansk. This supply line was vital for delivering Lend‑Lease materiel to the Soviet front, and German U‑boats made it a prime target. Krasin’s thick hull and ice‑breaking ability allowed it to keep channels open even when sea ice threatened to choke off the convoy, while its onboard artillery provided limited anti‑submarine protection. Historians credit the ship with helping maintain the flow of fuel, weapons, and food that sustained the Soviet war effort on the Eastern Front.`,
    `In the post‑war period Krasin became a floating ambassador of Soviet scientific achievement. The vessel joined multinational research cruises that studied Arctic climatology, marine biology, and glaciology, often stopping at ports in Norway, Canada, and even the United States under the auspices of the <span class="vocab" data-cn="联合国">United Nations</span>. These visits were carefully choreographed: while scientists exchanged data, Soviet officials used the ship’s presence to showcase the nation’s modern <span class="vocab" data-cn="核动力破冰船">nuclear‑powered</span> icebreaker program—though Krasin herself remained diesel‑electric, she was presented alongside newer nuclear vessels as evidence of a seamless technological lineage. The diplomatic choreography underscored how Arctic capability had become an integral part of Cold War strategy, linking scientific cooperation with subtle displays of military readiness.`,
    `Krasin was finally retired in 1976 after more than six decades of service, having logged thousands of nautical miles and participated in dozens of rescue operations, convoy escorts, and research missions. Today her name lives on in museums and in the collective memory of polar explorers who view her as a symbol of human perseverance against one of Earth’s most hostile environments. The ship’s legacy also reminds us that technology, when coupled with political intent, can shape not only geography but also international relations—a lesson as relevant now as it was during the tumultuous years of its own voyages.`,
  ],
  vocabulary: [
    { word: 'icebreaker', cn: '破冰船' },
    { word: 'Krasin', cn: '克拉辛（苏联破冰船名）' },
    { word: 'Arctic Ocean', cn: '北冰洋' },
    { word: 'polar navigation', cn: '极地航行技术' },
    { word: 'rescue operation', cn: '救援行动' },
    { word: 'convoy', cn: '护航船队' },
    { word: 'United Nations', cn: '联合国' },
    { word: 'nuclear‑powered', cn: '核动力的' },
  ],
};

export default article;
