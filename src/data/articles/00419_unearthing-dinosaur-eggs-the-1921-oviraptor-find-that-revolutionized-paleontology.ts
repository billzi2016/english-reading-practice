import type { Article } from '../../types/index.ts';

// 文件意图：维护《Unearthing Dinosaur Eggs: The 1921 Oviraptor Find That Revolutionized Paleontology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00419 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00419',
  slug: 'unearthing-dinosaur-eggs-the-1921-oviraptor-find-that-revolutionized-paleontology',
  title: 'Unearthing Dinosaur Eggs: The 1921 Oviraptor Find That Revolutionized Paleontology',
  subtitle: 'How a single fossil changed our view of dinosaur behavior',
  summary: 'The 1921 discovery of an Oviraptor beside a clutch of eggs sparked a paradigm shift in paleontology, revealing that dinosaurs cared for their young.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1921, a team led by explorer <span class="vocab" data-cn="美国自然历史博物馆">Roy Chapman Andrews</span> trekked across the stark dunes of Mongolia’s Gobi Desert. Their goal was to locate fossil beds that had been hinted at in earlier Chinese reports, but what they uncovered was far more dramatic: a partial skeleton perched atop a nest of smooth, elongated eggs.`,
    `The creature was quickly named <span class="vocab" data-cn="卵盗龙">Oviraptor</span>, meaning “egg thief,” because the prevailing interpretation assumed it had been caught in the act of stealing the very eggs it rested upon. At the time, dinosaurs were still largely imagined as solitary, reptilian giants with little concern for offspring, so this image fit neatly into the scientific narrative of the era.`,
    `Decades later, additional discoveries at the same locality revealed multiple nests containing Oviraptor embryos, and even a specimen preserved in a brooding posture similar to modern birds. These findings forced paleontologists to reconsider the original story: rather than a thief, Oviraptor was likely a devoted parent protecting its clutch. The shift from “egg‑stealer” to “egg‑guardian” illustrated how new evidence can overturn entrenched ideas.`,
    `The impact of this reinterpretation rippled through <span class="vocab" data-cn="古生物学">paleontology</span>. It demonstrated that dinosaurs engaged in complex reproductive behaviors, including nest building and possibly even temperature regulation of their eggs. This challenged the long‑standing view of dinosaurs as purely instinctual creatures and opened a new field of study focused on dinosaur <span class="vocab" data-cn="育雏行为">parental care</span>.`,
    `Scientists used several analytical techniques to piece together the puzzle. <span class="vocab" data-cn="地层学">Stratigraphy</span> helped determine that the eggs and skeleton were deposited in the same sedimentary layer, confirming their contemporaneity. <span class="vocab" data-cn="成化作用学">Taphonomy</span> examined how the bones and shells fossilized together, revealing minimal disturbance after burial. Later radiometric dating placed the site firmly within the Late <span class="vocab" data-cn="白垩纪">Cretaceous</span> period, around 75 million years ago.`,
    `Today, Oviraptor is featured in museum exhibits not as a villain but as an emblem of dinosaur nurturing. Its story has inspired countless reconstructions that depict feathered theropods brooding over their eggs, aligning with the modern view that many dinosaurs were more bird‑like than reptile‑like. Ongoing excavations across Asia continue to uncover new egg clutches, each adding nuance to our understanding of ancient ecosystems.`,
    `The 1921 find also sparked a global interest in fossilized eggs, leading to dedicated “egg sites” such as the famous <span class="vocab" data-cn="中国甘肃省">Hekou</span> and <span class="vocab" data-cn="美国犹他州">Utah</span> formations. Researchers now recognize that dinosaur reproductive strategies were diverse, ranging from massive communal nesting grounds to solitary burrows. The legacy of the original Oviraptor discovery reminds us that a single fossil can rewrite an entire chapter of natural history.`,
  ],
  vocabulary: [
    { word: 'Roy Chapman Andrews', cn: '美国自然历史博物馆的探险家' },
    { word: 'Oviraptor', cn: '卵盗龙，意为“蛋偷者”' },
    { word: 'paleontology', cn: '古生物学' },
    { word: 'parental care', cn: '育雏行为' },
    { word: 'stratigraphy', cn: '地层学' },
    { word: 'taphonomy', cn: '成化作用学，研究化石形成过程的科学' },
    { word: 'Cretaceous', cn: '白垩纪' },
    { word: 'Hekou', cn: '中国甘肃省的著名恐龙蛋产地' },
  ],
};

export default article;
