import type { Article } from '../../types/index.ts';

// 文件意图：维护《Petra: The Rose‑Red City’s Rediscovery, Preservation Battles, and Impact on Global Heritage Tourism》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00228 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00228',
  slug: 'petra-the-rose-red-city-s-rediscovery-preservation-battles-and-impact-on-global-heritage-tourism',
  title: 'Petra: The Rose‑Red City’s Rediscovery, Preservation Battles, and Impact on Global Heritage Tourism',
  subtitle: 'How an ancient desert metropolis reshaped modern heritage thinking',
  summary: 'From its 19th‑century rediscovery to today’s preservation challenges, Petra illustrates the complex dance between archaeology, tourism, and global cultural responsibility.',
  category: 'culture',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In 1812, Swiss explorer Johann Brockmann stumbled upon a narrow gorge in Jordan that would later reveal one of humanity’s most iconic archaeological sites. The hidden valley, later named Wadi Mūsá, led him to the spectacular façades carved directly into rose‑colored sandstone—a city built by the <span class="vocab" data-cn="纳巴泰人">Nabataean</span> kingdom around the 4th century BC. Brockmann’s sketches sparked curiosity across Europe, but it was American missionary and scholar John Murray in 1856 who publicized Petra to a wider audience, coining the phrase “the Rose‑Red City.”`,
    `Petra’s fame grew rapidly after its inclusion in the first edition of the *Encyclopædia Britannica* (1870), yet the city remained fragile. Its architecture—most famously the <span class="vocab" data-cn="岩石切割建筑">rock‑cut architecture</span> of the Treasury and Monastery—relied on a delicate balance between stone, sand, and climate. Over centuries, natural erosion, seismic activity, and human neglect had already taken their toll, prompting early preservationists to advocate for protective measures before mass tourism arrived.`,
    `The turning point came in 1985 when UNESCO inscribed Petra as a <span class="vocab" data-cn="世界遗产地">World Heritage Site</span>. This designation brought international funding and expertise, but also an influx of visitors eager to photograph the iconic façade. The Jordanian government responded by establishing the Petra Development and Tourism Authority (PDTA), tasked with managing both economic benefits and conservation imperatives—a classic case of <span class="vocab" data-cn="旅游管理">tourism management</span>.`,
    `Preservation battles intensified in the 1990s when researchers discovered that groundwater seepage was accelerating stone decay. Engineers introduced innovative <span class="vocab" data-cn="水利工程">hydraulic engineering</span> solutions, such as underground drainage channels and controlled humidity chambers within the most vulnerable tomb façades. However, these interventions sparked debate among conservationists: should modern technology alter an ancient landscape, or should preservation remain “hands‑off” to maintain authenticity? This tension reflects broader discussions about <span class="vocab" data-cn="保护伦理">conservation ethics</span> in heritage sites worldwide.`,
    `Tourism’s economic impact cannot be ignored. By 2019, Petra attracted over a million visitors annually, generating significant revenue for local communities and funding further archaeological research. Yet the surge also strained infrastructure—crowded pathways, waste management challenges, and wear on the sandstone led to calls for visitor caps during peak seasons. The PDTA experimented with timed entry tickets and virtual reality tours, allowing remote audiences to experience Petra’s grandeur without physically stepping onto fragile surfaces.`,
    `Petra’s story has inspired other desert heritage sites, such as Egypt’s Siwa Oasis and Saudi Arabia’s Al‑Ula, to adopt similar preservation‑tourism models. International conferences now cite Petra as a benchmark for balancing “sustainable tourism” with “cultural integrity.” Scholars argue that the city’s experience demonstrates how global heritage can become a catalyst for regional development while prompting nations to invest in scientific conservation methods and community engagement programs.`,
    `Looking ahead, climate change poses new threats: rising temperatures may increase thermal stress on sandstone, while extreme rainfall events could exacerbate erosion. Ongoing research projects, funded by UNESCO and the World Monuments Fund, are testing nano‑coating materials that repel water without altering stone color. If successful, Petra could pioneer a new generation of preservation techniques applicable to heritage sites worldwide—ensuring that future travelers continue to stand in awe before the rose‑red façades that have survived millennia of human history.`,
  ],
  vocabulary: [
    { word: 'Nabataean', cn: '纳巴泰人' },
    { word: 'rock-cut architecture', cn: '岩石切割建筑' },
    { word: 'World Heritage Site', cn: '世界遗产地' },
    { word: 'tourism management', cn: '旅游管理' },
    { word: 'hydraulic engineering', cn: '水利工程' },
    { word: 'conservation ethics', cn: '保护伦理' },
  ],
};

export default article;
