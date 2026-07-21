import type { Article } from '../../types/index.ts';

// 文件意图：维护《Amelia Earhart’s Vanishing: The Search, Theories, and Enduring Mystery》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00103 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00103',
  slug: 'amelia-earhart-s-vanishing-the-search-theories-and-enduring-mystery',
  title: 'Amelia Earhart’s Vanishing: The Search, Theories, and Enduring Mystery',
  subtitle: 'A Journey Through the Greatest Aviation Disappearance of the 20th Century',
  summary: 'Explore the 1937 flight, the massive search effort, competing theories, and why Amelia Earhart’s fate still captivates us.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When <span class="vocab" data-cn="飞行员">aviator</span> Amelia Earhart vanished over the Pacific in 1937, she was already a global icon. She had set multiple records, including being the first woman to fly solo across the Atlantic in 1932, and her daring spirit made her a symbol of modern women’s independence. By the mid‑1930s, Earhart was not only a celebrated pilot but also an advocate for aviation technology and women's rights, giving talks that drew crowds as large as those at political rallies.`,
    `The ill‑fated journey began on June 1, 1937, when Earhart and her navigator Fred Noonan took off from Lae, New Guinea, in a <span class="vocab" data-cn="洛克希德Model 10E电磁飞机">Lockheed Model 10E Electra</span>. Their goal was to complete the first solo east‑west crossing of the United States and then fly around the world, with Howland Island as the next critical waypoint. The plan required precise <span class="vocab" data-cn="导航">navigation</span> across thousands of miles of open water, relying on a newly installed <span class="vocab" data-cn="无线电信标">radio beacon</span> at Howland to confirm their position.`,
    `When the Electra failed to make radio contact with the Howland station, panic set in. The United States Navy dispatched three destroyers—USS Pope, USS Rogers, and USS Polaris—to search a 250‑mile radius, while the Coast Guard sent seaplanes from Midway Island. Over the next several weeks, more than 150 aircraft and dozens of ships combed the <span class="vocab" data-cn="太平洋">Pacific Ocean</span>, covering an area larger than some countries. Despite exhaustive efforts, no trace of the plane or its occupants was found, and the official search was called off on July 2, 1937.`,
    `Since then, investigators have proposed several competing <span class="vocab" data-cn="理论">theories</span>. The most widely accepted “crash‑and‑sink” hypothesis suggests that low fuel forced Earhart to ditch the Electra into the ocean near Howland, where it sank quickly. An alternative view, championed by the International Group for Historic Aircraft Recovery (IGHAR), argues that the pair landed on <span class="vocab" data-cn="加德纳岛">Gardner Island</span> (now Nikumaroro) after miscalculating their position. Proponents point to artifacts such as a piece of aluminum alloy and a possible aircraft engine component found in 1940, as well as oral histories from island inhabitants describing “two white men” stranded there.`,
    `Modern technology has breathed new life into the mystery. In 1991, a U.S. Navy sonar sweep of the ocean floor near Howland revealed several metallic objects, though none were conclusively linked to the Electra. More recently, a 2018 study by the National Geographic Society used sophisticated fuel‑consumption models to argue that Earhart could not have reached Gardner Island with the amount of fuel she carried, lending weight to the crash theory. Meanwhile, IGHAR’s 2019 expedition employed high‑resolution ground‑penetrating radar on Nikumaroro, uncovering anomalies that some interpret as remnants of a landing gear strut, though definitive proof remains elusive.`,
    `The enduring fascination with Earhart’s disappearance goes beyond the technical details. Her story has inspired countless books, documentaries, and even video games, each interpreting the event through different cultural lenses. The mystery also serves as a cautionary tale about the limits of early <span class="vocab" data-cn="搜救行动">search and rescue</span> capabilities and the perils of over‑reliance on nascent technology in extreme environments. As new generations discover her legacy, the unanswered question—what truly happened to Amelia Earhart?—continues to spark curiosity and scholarly debate.`,
    `Today, the mystery remains open-ended, inviting both professional historians and amateur enthusiasts to keep searching. Whether future underwater drones finally locate the wreckage or a forgotten diary surfaces on a remote island, the story of Amelia Earhart reminds us that exploration is as much about confronting the unknown as it is about celebrating triumphs. Until definitive evidence emerges, her legacy will forever hover between legend and fact, urging us to look beyond the horizon with both courage and humility.`,
  ],
  vocabulary: [
    { word: 'aviator', cn: '飞行员' },
    { word: 'Lockheed Model 10E Electra', cn: '洛克希德Model 10E电磁飞机' },
    { word: 'radio beacon', cn: '无线电信标' },
    { word: 'Pacific Ocean', cn: '太平洋' },
    { word: 'navigation', cn: '导航' },
    { word: 'Gardner Island', cn: '加德纳岛' },
    { word: 'search and rescue', cn: '搜救行动' },
  ],
};

export default article;
