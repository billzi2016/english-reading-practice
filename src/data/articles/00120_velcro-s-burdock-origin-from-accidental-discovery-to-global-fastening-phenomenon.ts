import type { Article } from '../../types/index.ts';

// 文件意图：维护《Velcro’s Burdock Origin: From Accidental Discovery to Global Fastening Phenomenon》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00120 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00120',
  slug: 'velcro-s-burdock-origin-from-accidental-discovery-to-global-fastening-phenomenon',
  title: 'Velcro’s Burdock Origin: From Accidental Discovery to Global Fastening Phenomenon',
  subtitle: 'How a Swiss engineer turned a garden nuisance into a worldwide fastening system.',
  summary: 'The story of Velcro begins with burrs clinging to clothing and ends with a ubiquitous hook‑and‑loop fastener used in space, medicine, and fashion.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1940s, Swiss engineer <span class="vocab" data-cn="乔治·德梅斯特拉尔">George de Mestral</span> was out walking his dog in the Alps when he noticed countless <span class = "vocab" data-cn="一种带有细小倒钩的种子荚，常附着在动物毛发或衣物上">burrs</span> clinging stubbornly to his trousers and his pet’s fur. Rather than simply shaking them off, he was intrigued by how easily the tiny hooks latched onto fabric fibers, sparking a curiosity that would later reshape everyday design.</`,
    `De Mestral soon identified the culprit as the common burdock plant (<i>Arctium</i> spp.), whose seed heads are covered with millions of microscopic barbs. Using a laboratory <span class="vocab" data-cn="放大观察细小结构的技术">microscope</span>, he observed that each barb was shaped like a tiny hook, perfectly sized to catch loops in wool or cotton. This natural mechanism demonstrated an elegant form of mechanical <span class="vocab" data-cn="两表面之间的相互吸引力或粘附力">adhesion</span> without any glue.</`,
    `Inspired by this example of <span class="vocab" data-cn="从自然界获取设计灵感的工程方法">biomimicry</span>, de Mestral set out to recreate the hook‑and‑loop principle with synthetic materials. He experimented with various <span class="vocab" data-cn="高分子材料，常用于制造纤维和塑料">polymers</span> such as nylon, grinding them into fine fibers that could be arranged into complementary “hook” and “loop” sides. The challenge lay in shaping the hooks at a scale comparable to those on burdock seeds while maintaining durability.</`,
    `After years of trial and error, de Mestral produced a working <span class="vocab" data-cn="初步模型或样机">prototype</span> in 1955 that demonstrated reliable fastening and easy release. He filed a <span class="vocab" data-cn="对发明进行法律保护的文件">patent</span> the same year, describing a “self‑engaging fastener” composed of two textile strips—one bearing tiny hooks, the other loops. The patent emphasized that the system could be manufactured at low cost and would function repeatedly without losing strength.</`,
    `The commercial venture began when de Mestral partnered with his brother to form Velcro Industries in 1958. The brand name <span class="vocab" data-cn="由法语“velours”（天鹅绒）和“crochet”（钩子）组合而成">Velcro</span> cleverly merged “velour” and “crochet,” hinting at the soft‑to‑hard nature of the fastener. Early sales targeted the aerospace sector; NASA adopted Velcro for securing equipment inside spacecraft, appreciating its reliability in zero‑gravity environments.</`,
    `Since then, Velcro has permeated countless industries: the <span class="vocab" data-cn="涉及纺织品生产和加工的行业">textile industry</span> uses it in sportswear and children's shoes; hospitals rely on it for adjustable bandages and medical device straps; even fashion designers incorporate visible hook‑and‑loop patterns as decorative elements. Its versatility stems from the simple yet robust principle first observed on a humble burdock seed.</`,
    `Modern research pushes the original concept further, exploring <span class="vocab" data-cn="利用纳米尺度结构改进材料性能的技术">nanostructured</span> fasteners that mimic the burr’s geometry at an even smaller scale. These advances promise stronger adhesion with lighter weight, opening possibilities for next‑generation wearables and space habitats. Yet, despite high‑tech iterations, every Velcro strip still owes its existence to a walk in the Alps and the tenacious grip of nature’s own hook.</`,
  ],
  vocabulary: [
    { word: 'George de Mestral', cn: '乔治·德梅斯特拉尔' },
    { word: 'burr', cn: '一种带有细小倒钩的种子荚，常附着在动物毛发或衣物上' },
    { word: 'microscope', cn: '放大观察细小结构的技术' },
    { word: 'adhesion', cn: '两表面之间的相互吸引力或粘附力' },
    { word: 'biomimicry', cn: '从自然界获取设计灵感的工程方法' },
    { word: 'polymer', cn: '高分子材料，常用于制造纤维和塑料' },
    { word: 'prototype', cn: '初步模型或样机' },
    { word: 'patent', cn: '对发明进行法律保护的文件' },
    { word: 'Velcro', cn: '由法语“velours”（天鹅绒）和“crochet”（钩子）组合而成' },
    { word: 'textile industry', cn: '涉及纺织品生产和加工的行业' },
    { word: 'nanostructured', cn: '利用纳米尺度结构改进材料性能的技术' },
  ],
};

export default article;
