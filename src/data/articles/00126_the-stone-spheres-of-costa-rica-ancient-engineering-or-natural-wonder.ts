import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Stone Spheres of Costa Rica: Ancient Engineering or Natural Wonder?》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00126 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00126',
  slug: 'the-stone-spheres-of-costa-rica-ancient-engineering-or-natural-wonder',
  title: 'The Stone Spheres of Costa Rica: Ancient Engineering or Natural Wonder?',
  subtitle: 'Unraveling the mystery behind the Diquís marble monoliths',
  summary: 'A deep dive into the origins, construction, and cultural significance of Costa Rica’s enigmatic stone spheres.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early twentieth century, a group of American geologists trekking through the remote hills of southern Costa Rica stumbled upon dozens of perfectly round stones protruding from the forest floor. These objects, later dubbed the <span class="vocab" data-cn="迪奎斯文化">Diquís</span> spheres, immediately sparked curiosity because they seemed too orderly to be mere river cobbles. The first written accounts appeared in a 1930s newspaper article that described “a field of marble balls as if placed by giants,” setting the stage for a century‑long debate.`,
    `The spheres vary dramatically in size: some are no larger than a tennis ball, while others exceed three meters in diameter and weigh several tons. Most are carved from <span class="vocab" data-cn="花岗岩">granite</span>, a hard igneous rock that resists weathering, though a few are made of limestone or basalt. Their surfaces range from smooth, polished finishes to rough, pitted textures, suggesting different levels of human intervention. When arranged in clusters, the stones often align along invisible axes that some researchers argue correspond to celestial events.`,
    `Two dominant explanations have emerged over the decades. The first posits that a sophisticated <span class="vocab" data-cn="前哥伦比亚">pre‑Columbian</span> society deliberately shaped and positioned the monoliths as markers of power, territory, or cosmology. Proponents point to oral histories from modern indigenous groups who claim ancestral ties to “round stone ancestors.” The second hypothesis argues that natural processes—such as spheroidal weathering of exposed granite boulders—produced the shapes without human hands, and that later peoples simply collected them for ritual use. Both views attempt to reconcile the spheres’ uncanny regularity with the limited archaeological record of the region.`,
    `Excavations at several sites have uncovered subtle tool marks on the stone surfaces: shallow grooves consistent with hammerstone percussion rather than erosion. In addition, nearby <span class="vocab" data-cn="岩画">petroglyph</span> panels depict stylized circles and concentric patterns that echo the spheres’ geometry, hinting at a symbolic language shared across media. Burial pits containing ceramic fragments and carbonized plant remains have been found beneath some of the larger stones, suggesting that the monoliths may have functioned as grave markers or focal points for communal ceremonies.`,
    `Modern scientific techniques have added new layers to the discussion. <span class="vocab" data-cn="考古计量学">Archaeometry</span> methods such as portable X‑ray fluorescence (pXRF) reveal trace element signatures that match granite outcrops located over 30 kilometers away, indicating deliberate transport of massive blocks. Radiocarbon dating of charcoal found in associated burial contexts places the spheres’ primary use between 500 BCE and 1500 CE, overlapping with the rise and fall of the Diquís chiefdoms. These data challenge the notion that the stones are purely natural formations, while still leaving room for hybrid explanations involving both geology and human agency.`,
    `The purpose of the spheres remains elusive, but several theories enjoy scholarly support. Some researchers propose that the arrangement of the stones forms a <span class="vocab" data-cn="几何网格">geodesic</span> network used to map solar and lunar cycles, effectively turning the landscape into an astronomical observatory. Others argue that the spheres served as status symbols, with larger, more polished examples reserved for elite families or leaders. A third line of thought suggests a ritualistic function: the act of moving and positioning such massive objects could have been a communal rite reinforcing social cohesion.`,
    `Regardless of their exact origin, the stone spheres have become an emblem of Costa Rican heritage. In 2014 UNESCO inscribed them on the World Heritage List, recognizing both their cultural significance and the need for preservation against looting and environmental degradation. Today, guided tours lead visitors through the mist‑shrouded valleys where the monoliths lie, inviting each traveler to contemplate how ancient peoples might have merged art, engineering, and spirituality into a single, enduring form. The mystery endures, reminding us that some questions about humanity’s past are best explored with humility and wonder.`,
  ],
  vocabulary: [
    { word: 'Diquís', cn: '迪奎斯文化' },
    { word: 'granite', cn: '花岗岩' },
    { word: 'pre‑Columbian', cn: '前哥伦比亚' },
    { word: 'petroglyph', cn: '岩画' },
    { word: 'archaeometry', cn: '考古计量学' },
    { word: 'geodesic', cn: '几何网格' },
  ],
};

export default article;
