import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Chelyuskin Expedition: A Soviet Icebreaker Trapped in Arctic Ice and a Legendary Rescue》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00086 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00086',
  slug: 'the-chelyuskin-expedition-a-soviet-icebreaker-trapped-in-arctic-ice-and-a-legendary-rescue',
  title: 'The Chelyuskin Expedition: A Soviet Icebreaker Trapped in Arctic Ice and a Legendary Rescue',
  subtitle: 'A dramatic tale of survival, ingenuity, and heroism on the frozen seas.',
  summary: 'In 1934 the Soviet icebreaker Chelyuskin became stuck in Arctic drift ice, prompting an unprecedented rescue that captured the world’s imagination.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When the <span class="vocab" data-cn="破冰船">icebreaker</span> Chelyuskin set sail from Leningrad in August 1933, its mission was to prove that a Soviet merchant vessel could navigate the treacherous waters of the <span class="vocab" data-cn="北极海">Arctic Ocean</span>. Commanded by Captain Vladimir Voronin, the ship carried scientists, journalists, and a small cargo of industrial equipment, all eager to showcase the might of the newly formed <span class="vocab" data-cn="苏联">Soviet Union</span> in polar exploration.`,
    `The journey progressed smoothly at first, but by early September the vessel encountered thick <span class="vocab" data-cn="漂流冰">drift ice</span> near the Kara Sea. The Chelyuskin’s reinforced hull was designed to crush thin sea ice, yet the pressure from multi‑year floes soon exceeded its capacity. On 13 September the ship became immobilized, trapped in a frozen cradle that would not release it for weeks.`,
    `Life aboard the stranded ship turned precarious as temperatures plunged below –30 °C (–22 °F). The crew rationed food and fuel while scientists continued their observations of ice dynamics. Meanwhile, news of the disaster traveled slowly; only a few radio messages could be sent via the ship’s <span class="vocab" data-cn="无线电信标">radio beacon</span>, which was vital for any potential rescue effort.`,

    `The Soviet government responded with an extraordinary <span class="vocab" data-cn="救援行动">rescue operation</span>. A convoy of icebreakers, including the newly built Lenin and Krasin, set out from Murmansk under harsh winter conditions. Simultaneously, a squadron of <span class="vocab" data-cn="水上飞机">seaplanes</span> was dispatched to locate the Chelyuskin and deliver supplies. The coordination between naval vessels and aircraft marked one of the first large‑scale combined Arctic rescue missions in history.`,

    `By February 1934, after weeks of relentless effort, the ice surrounding the Chelyuskin began to crack. On 13 February a daring team of pilots led by Anatoly Lyapidevsky landed a <span class="vocab" data-cn="水上飞机">seaplane</span> on the thin ice near the ship’s hull and dropped essential provisions. The following day, a second flight successfully evacuated the most vulnerable passengers, including women and children, using improvised sleds to reach the landing zone.`,

    `The final evacuation took place on 13 February when a convoy of Soviet icebreakers finally reached the Chelyuskin’s position. Over 100 survivors were transferred onto the rescuing vessels in a race against time as the surrounding ice threatened to crush both ships. The entire episode was broadcast across the USSR, turning the rescued crew and the pilots into national heroes. In recognition of their bravery, many participants received the newly created title “Hero of the Soviet Union,” cementing the rescue’s place in Soviet folklore.`,

    `The Chelyuskin tragedy left a lasting legacy for Arctic navigation. It demonstrated both the limits of contemporary icebreaker technology and the importance of rapid communication and coordinated response. Lessons learned from this ordeal informed the design of later vessels such as the nuclear‑powered icebreakers that would dominate Soviet, and later Russian, polar operations throughout the Cold War era.`,

    `Today, the story of the Chelyuskin is taught in Russian schools as an example of collective resolve and technical ingenuity. The wreck itself lies beneath the shifting sea floor of the Kara Sea, a silent reminder of humanity’s ongoing struggle against nature’s most extreme environments. Visitors to maritime museums can still see artifacts recovered from the expedition, including a weather‑proof <span class="vocab" data-cn="无线电信标">radio beacon</span> that once guided rescuers through the endless white.`,
  ],
  vocabulary: [
    { word: 'icebreaker', cn: '破冰船' },
    { word: 'Arctic Ocean', cn: '北极海' },
    { word: 'Soviet Union', cn: '苏联' },
    { word: 'drift ice', cn: '漂流冰' },
    { word: 'radio beacon', cn: '无线电信标' },
    { word: 'rescue operation', cn: '救援行动' },
    { word: 'seaplane', cn: '水上飞机' },
  ],
};

export default article;
