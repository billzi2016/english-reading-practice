import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1912 Titanic Wireless Tragedy: How Jack Phillips' Heroism Changed Maritime Communication Laws》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00483 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00483',
  slug: 'the-1912-titanic-wireless-tragedy-how-jack-phillips-heroism-changed-maritime-communication-laws',
  title: 'The 1912 Titanic Wireless Tragedy: How Jack Phillips\' Heroism Changed Maritime Communication Laws',
  subtitle: 'A tale of bravery at sea that reshaped global radio safety standards.',
  summary: 'Jack Phillips stayed at his wireless post as the Titanic sank, prompting new laws that still protect ships today.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On a clear spring night in April 1914, the RMS Titanic glided through the North Atlantic like a floating palace. The ship’s luxurious decks and cutting‑edge engineering made her seem unsinkable—until an iceberg struck her starboard side at 11:40 p.m., tearing a gash that would seal her fate. Within minutes, water flooded the forward compartments, and the crew realized they faced a disaster of unprecedented scale.`,
    `At the heart of the emergency was <span class="vocab" data-cn="无线电报">wireless</span> operator Jack Phillips, a 24‑year‑old veteran of the Marconi Company. He manned the ship’s powerful <span class="vocab" data-cn="发射天线">antenna array</span>, which could transmit Morse code across hundreds of miles. His duty was to relay passenger messages and commercial telegrams, but on that night his role would become a matter of life and death for everyone aboard.`,

    `When the iceberg collision became apparent, Phillips immediately sent out the first <span class="vocab" data-cn="求救信号">distress signal</span> using the then‑standard CQD call. Within minutes he switched to the newer SOS pattern—three dots, three dashes, three dots—recognizable by any ship equipped with a Marconi set. The messages, “Titanic… distress… position 41°46′N 50°14′W,” were picked up by nearby vessels, most notably the RMS Carpathia, which altered course to render aid.`,

    `Despite the growing panic and the loss of power in the lower decks, Phillips refused to abandon his post. He continued tapping out SOS after SOS as the ship listed, even as water rose around the wireless room. By 2:20 a.m., when the Titanic’s hull finally slipped beneath the waves, Phillips was still at his key, his hands numb from cold and fatigue. His dedication saved more than 700 lives, but it also cost him his own.`,

    `The tragedy sparked an international outcry. The British Board of Trade inquiry highlighted the crucial role of wireless communication in rescuing survivors and condemned the lack of a mandatory <span class="vocab" data-cn="持续监听">continuous watch</span> on passenger ships. Public sentiment demanded that no ship ever again sail without a reliable means to call for help, prompting legislators on both sides of the Atlantic to act swiftly.`,

    `In the United States, Congress passed the <span class="vocab" data-cn="无线电法案">Radio Act of 1912</span>, which required all sea‑borne radio stations to be licensed and to maintain a 24‑hour watch. Across the ocean, the first International Convention for the Safety of Life at Sea (<span class="vocab" data-cn="国际海上人命安全公约">SOLAS</span>) was convened in 1914. SOLAS mandated that every passenger liner carry a dedicated wireless operator, install redundant antenna systems, and use standardized SOS procedures—a direct legacy of Phillips’ sacrifice.`,

    `These regulations laid the groundwork for today’s Global Maritime Distress and Safety System (<span class="vocab" data-cn="全球海上遇险安全系统">GMDSS</span>), which combines satellite, digital, and traditional radio technologies to ensure that a ship in trouble can be reached instantly. Modern vessels now log every transmission in an electronic <span class="vocab" data-cn="船舶航行日志">ship’s log</span>, creating a permanent record that can be reviewed after any incident.`,

    `Jack Phillips’ heroism reminds us that technology alone cannot guarantee safety; it is the people who operate it with courage and resolve. The laws forged in the wake of the Titanic disaster continue to protect millions of seafarers each year, turning a night of tragedy into a lasting commitment to vigilance on the high seas.`
  ],
  vocabulary: [
    { word: 'wireless', cn: '无线电报' },
    { word: 'distress signal', cn: '求救信号' },
    { word: 'continuous watch', cn: '持续监听' },
    { word: 'Radio Act of 1912', cn: '无线电法案' },
    { word: 'SOLAS', cn: '国际海上人命安全公约' },
    { word: 'GMDSS', cn: '全球海上遇险安全系统' }
  ],
};

export default article;
