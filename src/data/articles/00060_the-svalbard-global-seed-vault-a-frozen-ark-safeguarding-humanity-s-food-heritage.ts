import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Svalbard Global Seed Vault: A Frozen Ark Safeguarding Humanity’s Food Heritage》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00060 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00060',
  slug: 'the-svalbard-global-seed-vault-a-frozen-ark-safeguarding-humanity-s-food-heritage',
  title: 'The Svalbard Global Seed Vault: A Frozen Ark Safeguarding Humanity’s Food Heritage',
  subtitle: 'How a remote Arctic vault protects the world’s agricultural diversity.',
  summary: 'An engaging look at why the seed vault exists, how it works, and what it means for future food security.',
  category: 'environment',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `High above the Arctic Ocean, on a windswept island called Spitsbergen, lies a concrete mountain that looks more like a sci‑fi set piece than a storage facility. This is the <span class="vocab" data-cn="种子库">Svalbard Global Seed Vault</span>, often described as a “frozen ark” because it keeps millions of seed samples at sub‑zero temperatures, far from the political and environmental turmoil that threatens farms on the ground.`,
    `The idea was born in the early 2000s when scientists realized that many national seed banks were vulnerable to war, natural disaster, or simple neglect. Norway offered a remote, geologically stable site, while the <span class="vocab" data-cn="全球作物多样性信托基金">Global Crop Diversity Trust</span> pledged financial support. After years of planning and engineering, the vault opened its doors on 26 February 2008, with an inaugural deposit of seeds from the International Rice Research Institute.`,
    `The vault’s design exploits the island’s natural <span class="vocab" data-cn="永久冻土">permafrost</span>. A mountain side was hollowed out and lined with three meters of reinforced concrete. Inside, a stainless‑steel door leads to two chambers that are kept at a constant –18 °C (–0.4 °F) thanks to both active refrigeration and the insulating power of the surrounding rock. Even if the power fails, the permafrost acts as a backup freezer, preserving the seeds for centuries.`,
    `How do seeds get there? Each participating country or organization sends duplicate samples of their most valuable crops, often after they have been stored in a national <span class="vocab" data-cn="种子库">seed bank</span>. The seeds are dried to a moisture content below 5 % and sealed in hermetic foil packets. Every packet receives an accession number that records its species, origin, and the institution that supplied it. As of 2023, more than one million distinct seed samples representing roughly 5,000 plant species have been deposited.`,
    `The vault’s importance lies in safeguarding the world’s <span class="vocab" data-cn="基因库">gene pool</span>. By keeping a backup of crops ranging from wheat and maize to quinoa and teff, it provides an insurance policy against the loss of genetic diversity caused by climate change, disease outbreaks, or conflict. This form of <span class="vocab" data-cn="异地保存">ex situ conservation</span> complements on‑farm and in‑situ efforts, ensuring that breeders can retrieve ancient traits—such as drought tolerance or pest resistance—when they are needed most.`,
    `Despite its remote location, the vault is not immune to challenges. Rising temperatures threaten the stability of the permafrost, while increased tourism on Svalbard raises concerns about accidental contamination. Funding is another delicate issue; the Norwegian government covers operational costs, but long‑term financial security depends on continued international cooperation. Moreover, political tensions can affect the willingness of some nations to share their most prized genetic material.`,
    `Looking ahead, the vault will likely expand its collection to include more under‑utilized crops and even wild relatives of domesticated plants. Researchers are also exploring advanced <span class="vocab" data-cn="低温保存技术">cryopreservation</span> methods that could store seeds at liquid nitrogen temperatures, further extending their viability. In a world where food systems face unprecedented stress, the Svalbard Global Seed Vault stands as a quiet guardian of humanity’s agricultural heritage—ready to supply the genetic building blocks for future generations.`],
  vocabulary: [
    { word: 'Svalbard Global Seed Vault', cn: '斯瓦尔巴全球种子库' },
    { word: 'permafrost', cn: '永久冻土' },
    { word: 'seed bank', cn: '种子库' },
    { word: 'gene pool', cn: '基因库' },
    { word: 'ex situ conservation', cn: '异地保存' },
    { word: 'cryopreservation', cn: '低温保存技术' },
  ],
};

export default article;
