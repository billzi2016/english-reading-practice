import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Hidden Language of Bees: How the Waggle Dance Unlocked Insect Communication》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00129 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00129',
  slug: 'the-hidden-language-of-bees-how-the-waggle-dance-unlocked-insect-communication',
  title: 'The Hidden Language of Bees: How the Waggle Dance Unlocked Insect Communication',
  subtitle: 'Discover how a simple movement reveals complex social intelligence.',
  summary: 'An engaging story about how scientists decoded the bee “waggle dance” and what it tells us about animal communication.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When most people think of bees, they picture buzzing insects flitting from flower to flower, gathering <span class="vocab" data-cn="花蜜">nectar</span> and making honey. Few realize that a hive is also a bustling information hub where thousands of individuals exchange precise details about food sources. This invisible chatter takes place on the dance floor of the honey‑comb, where a returning <span class="vocab" data-cn="采集者">forager</span> performs a ritual that looks like a jittery figure‑eight. To casual observers it seems chaotic, but to insiders it is a sophisticated code.</`,
    `The core of this code is the <span class="vocab" data-cn="摇摆舞">waggle dance</span>. After locating a rich patch of flowers, a bee returns to the hive and runs in a straight line while vibrating its abdomen. The duration of this “waggle” segment encodes distance: longer waggles mean farther away. Then the bee circles either left or right, repeating the waggle each time it completes a loop. The angle of those loops relative to the vertical axis of the comb indicates direction, measured against the position of the sun. In essence, the dance translates spatial coordinates into a language that other bees can read.</`,
    `The breakthrough in understanding this behavior came from Austrian ethologist <span class="vocab" data-cn="卡尔·冯·弗里斯">Karl von Frisch</span> in the 1940s. He trained bees to feed on sugar solutions placed at known distances and angles, then meticulously recorded their dances. By correlating dance parameters with his controlled setups, he demonstrated that the waggle dance conveys both distance and direction—a discovery that earned him a Nobel Prize in Physiology or Medicine in 1973.</`,
    `Why does this matter to the colony? Bees rely on collective foraging efficiency. When a single <span class="vocab" data-cn="采集者">forager</span> discovers a bountiful bloom, its dance recruits dozens of nest‑mates to the same spot, dramatically increasing the amount of <span class="vocab" data-cn="花粉授粉">pollination</span> that can occur. The encoded distance also helps bees allocate effort: short trips are favored when nectar is abundant nearby, while longer journeys are undertaken only for exceptionally rich sources.</`,
    `The waggle dance does not operate in isolation. Bees also release <span class="vocab" data-cn="信息素">pheromones</span> that modulate the enthusiasm of listeners, and they generate subtle <span class="vocab" data-cn="振动信号">vibrational signaling</span> through the wax walls of the <span class="vocab" data-cn="六角形巢脾">hexagonal comb</span>. This multimodal <span class="vocab" data-cn="通信网络">communication network</span> ensures that information is robust against noise—if a bee misses part of the dance, it can still infer meaning from scent cues or vibrations.</`,
    `Modern researchers have taken inspiration from this natural system. Engineers designing swarm robotics use algorithms modeled on the waggle dance to coordinate fleets of drones for tasks such as crop monitoring and search‑and‑rescue. In agriculture, understanding bee communication helps farmers create habitats that encourage efficient foraging, boosting yields without relying heavily on chemical inputs.</`,
    `The story of the waggle dance reminds us that even tiny creatures possess rich social lives built on precise, shared symbols. As we continue to decode other insect languages—like the pheromone trails of ants or the acoustic signals of termites—we gain not only scientific insight but also a deeper appreciation for the hidden intelligences that sustain our ecosystems.`,
  ],
  vocabulary: [
    { word: 'waggle dance', cn: '摇摆舞' },
    { word: 'forager', cn: '采集者' },
    { word: 'nectar', cn: '花蜜' },
    { word: 'pollination', cn: '花粉授粉' },
    { word: 'pheromone', cn: '信息素' },
    { word: 'hexagonal comb', cn: '六角形巢脾' },
    { word: 'vibrational signaling', cn: '振动信号' },
    { word: 'communication network', cn: '通信网络' },
  ],
};

export default article;
