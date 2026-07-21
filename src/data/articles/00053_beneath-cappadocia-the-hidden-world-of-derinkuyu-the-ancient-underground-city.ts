import type { Article } from '../../types/index.ts';

// 文件意图：维护《Beneath Cappadocia: The Hidden World of Derinkuyu, the Ancient Underground City》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00053 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00053',
  slug: 'beneath-cappadocia-the-hidden-world-of-derinkuyu-the-ancient-underground-city',
  title: 'Beneath Cappadocia: The Hidden World of Derinkuyu, the Ancient Underground City',
  subtitle: 'Exploring the engineering marvel hidden beneath Turkey’s surreal landscape',
  summary: 'A journey into Derinkuyu reveals how ancient peoples carved a multi‑level refuge out of soft volcanic rock.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `The region known as <span class="vocab" data-cn="卡帕多奇亚">Cappadocia</span> stretches across central Turkey, its sky‑scarred hills formed by ancient volcanic eruptions. Among the fairy‑tale chimneys and honey‑colored valleys lies a secret that remained hidden until the 1960s: <span class="vocab" data-cn="地下城">Derinkuyu Underground City</span>. Local farmers stumbled upon a concealed stairwell while clearing land, sparking a series of excavations that revealed an astonishing network of tunnels extending eight stories deep.`,
    `Unlike conventional stone masonry, Derinkuyu was hewn directly from the region’s soft <span class="vocab" data-cn="凝灰岩层">tuff</span>—a porous volcanic rock that can be carved with simple tools yet remains sturdy enough to support massive chambers. Workers used picks and hammers to create rooms, corridors, and even circular shafts, leaving behind a labyrinthine footprint that mirrors the surface’s irregular topography. The ease of carving allowed entire communities to retreat underground when danger loomed above.`,
    `The city’s layout is a marvel of ancient engineering. Sixteen levels have been identified, though only eight are accessible to visitors today. Each floor served a specific purpose: storage rooms for grain, communal kitchens, and sleeping quarters. Crucial to the city’s habitability were dozens of <span class="vocab" data-cn="通风井">ventilation shafts</span> that pierced the rock, channeling fresh air down to the deepest chambers while also acting as smoke outlets for hearths. These shafts were strategically placed to prevent the buildup of carbon dioxide and to maintain a stable temperature year‑round.`,
    `Life below ground was surprisingly comfortable. Large communal areas housed stone benches and low tables where families ate meals prepared on clay ovens. Adjacent stables allowed livestock—goats, sheep, even chickens—to be kept safely within the complex, ensuring a steady supply of milk and eggs during sieges. Religious devotion found expression in several chapels adorned with faint <span class="vocab" data-cn="壁画">frescoes</span> depicting biblical scenes, offering spiritual solace to inhabitants who spent months hidden from the world above.`,
    `Defensive architecture was woven into every level. Massive stone blocks could be rolled across narrow passageways to form a <span class="vocab" data-cn="防御门">defensive door</span>, effectively sealing off sections of the city from invaders. Some corridors were deliberately designed as dead‑ends or sharp turns, confusing attackers and buying precious time for those inside. Moreover, hidden wells provided fresh water even when surface sources were cut off, allowing the underground population to endure prolonged blockades without surrendering.`,
    `Today, Derinkuyu attracts thousands of tourists eager to descend into its shadowy depths. Guided tours illuminate the city’s history while highlighting preservation challenges such as humidity‑induced erosion and the impact of foot traffic on fragile frescoes. Modern engineers employ laser scanning and 3D modeling to document the site, ensuring that future generations can study this subterranean marvel without compromising its integrity.`,
    `Beyond its architectural brilliance, Derinkuyu offers a window into the social dynamics of Byzantine Anatolia. The city’s capacity—estimated at up to 20,000 people—suggests a communal response to recurring threats, from invading armies to natural disasters. Its existence underscores how ancient societies adapted ingeniously to harsh environments, turning what might seem like an inhospitable landscape into a sanctuary capable of sustaining life for weeks or even months underground.`,
  ],
  vocabulary: [
    { word: 'Cappadocia', cn: '卡帕多奇亚' },
    { word: 'Underground City', cn: '地下城' },
    { word: 'tuff', cn: '凝灰岩层' },
    { word: 'ventilation shaft', cn: '通风井' },
    { word: 'frescoes', cn: '壁画' },
    { word: 'defensive door', cn: '防御门' },
  ],
};

export default article;
