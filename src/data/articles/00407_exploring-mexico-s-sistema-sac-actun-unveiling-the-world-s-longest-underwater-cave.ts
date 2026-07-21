import type { Article } from '../../types/index.ts';

// 文件意图：维护《Exploring Mexico’s Sistema Sac Actun: Unveiling the World’s Longest Underwater Cave》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00407 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00407',
  slug: 'exploring-mexico-s-sistema-sac-actun-unveiling-the-world-s-longest-underwater-cave',
  title: 'Exploring Mexico’s Sistema Sac Actun: Unveiling the World’s Longest Underwater Cave',
  subtitle: 'A Journey into the Deep Waters of the Yucatán Peninsula',
  summary: 'Dive into the discovery, geology, and conservation of the world’s longest underwater cave system.',
  category: 'travel',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `The Yucatán Peninsula hides a secret that stretches for more than 350 kilometers beneath its limestone crust: <span class="vocab" data-cn="系统萨克阿克通">Sistema Sac Actún</span>.  First mapped in the early 2000s, this network of flooded passages has earned the title of the longest known underwater cave on Earth.  Its name combines the Maya word “Sac,” meaning “white,” with “Actún,” meaning “cave,” a nod to the region’s ancient language and the crystal‑clear waters that flow through it.`,
    `Understanding how such an immense system formed requires a brief lesson in <span class="vocab" data-cn="喀斯特">karst</span> geology.  Over millions of years, slightly acidic rainwater seeped into the porous limestone, slowly dissolving the rock and creating vertical shafts known locally as <span class="vocab" data-cn="天坑">cenotes</span>.  When sea levels rose after the last Ice Age, many of these cenotes flooded, linking together to form a labyrinthine conduit that today stretches beneath jungles, mangroves, and even modern towns.`,
    `The first modern explorers to enter Sac Actún were Mexican speleologists in the late 1990s, guided by local divers who knew the hidden entrances.  Using simple rope ladders and handheld torches, they charted a few kilometers of passage before realizing the system’s true scale.  In 2007, an international team equipped with side‑scan sonar and digital mapping software produced the first comprehensive map, revealing that Sac Actún connected to neighboring systems such as <span class="vocab" data-cn="系统奥克斯特尔">Sistema Ox Bel Ha</span>, creating a mega‑network that dwarfs most terrestrial cave complexes.`,
    `Exploring these depths is not for the faint‑hearted.  Divers must contend with total darkness, zero visibility in silted chambers, and the physiological limits of breath‑holding.  Modern expeditions rely on <span class="vocab" data-cn="潜水推进器">diver propulsion vehicles (DPV)</span> to cover long distances efficiently, while rebreather rigs recycle exhaled gas to extend bottom time.  Even with this technology, a typical dive can last six to eight hours, including meticulous decompression stops to avoid the dreaded “the bends.”`,
    `Beyond its sheer size, Sac Actún hosts an astonishing array of life adapted to perpetual darkness.  Blind fish, translucent shrimp, and colonies of <span class="vocab" data-cn="钟乳石">stalactites</span> formed from mineral‑rich drip water create a surreal underwater cathedral.  Researchers have discovered unique microbial mats that thrive on the cave’s low‑energy environment, offering clues about life in extreme habitats far beyond Earth’s surface.`,
    `The growing popularity of cave diving has sparked concerns among conservationists.  The delicate ecosystems inside Sac Actún are vulnerable to contamination from sunscreen, litter, and even the carbon dioxide exhaled by divers.  In response, Mexican authorities have designated large sections of the system as protected zones, requiring permits and strict environmental guidelines for any expedition.  UNESCO’s World Heritage Committee has also recognized parts of the Yucatán karst region for its geological significance, encouraging sustainable tourism that balances adventure with preservation.`,
    `Looking ahead, scientists hope to use Sac Actún as a natural laboratory for climate research.  Stalagmites and flowstones within dry chambers preserve isotopic records that can be read like tree rings, revealing past rainfall patterns over millennia.  Meanwhile, divers continue to push the boundaries of exploration, mapping new side passages and searching for hidden chambers that may yet extend the system’s length.  Whether you are a seasoned speleologist or an armchair traveler, the story of Sac Actún reminds us that some of Earth’s greatest wonders lie beneath the surface, waiting patiently for curious minds to uncover them.`,
  ],
  vocabulary: [
    { word: 'Sistema Sac Actún', cn: '系统萨克阿克通' },
    { word: 'karst', cn: '喀斯特' },
    { word: 'cenote', cn: '天坑' },
    { word: 'diver propulsion vehicle (DPV)', cn: '潜水推进器' },
    { word: 'stalactite', cn: '钟乳石' },
    { word: 'speleology', cn: '洞穴学' },
  ],
};

export default article;
