import type { Article } from '../../types/index.ts';

// 文件意图：维护《Voyage of Discovery: HMS Beagle, Charles Darwin, and the Foundations of Evolutionary Theory》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00082 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00082',
  slug: 'voyage-of-discovery-hms-beagle-charles-darwin-and-the-foundations-of-evolutionary-theory',
  title: 'Voyage of Discovery: HMS Beagle, Charles Darwin, and the Foundations of Evolutionary Theory',
  subtitle: 'How a five‑year journey reshaped our understanding of life.',
  summary: 'A narrative of Darwin’s voyage on the <span class="vocab" data-cn="英国皇家测量船">HMS Beagle</span> and how it sowed the seeds of evolutionary theory.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In December 1831, the British Royal Navy’s survey ship <span class="vocab" data-cn="英国皇家测量船">HMS Beagle</span> set sail from Plymouth under Captain Robert FitzRoy. Among its crew was a young naturalist named Charles Darwin, freshly graduated from Cambridge and eager to collect specimens. The voyage was officially a hydrographic expedition, but for Darwin it became an unprecedented field laboratory where he could observe living organisms in their native habitats.`,
    `The Beagle’s route wound along the coasts of South America, threading through the rugged Andes before crossing the Pacific. While charting cliffs and bays, Darwin noted striking layers of sedimentary rock and fossilized shells embedded within them. These observations sparked his fascination with <span class="vocab" data-cn="研究地球历史的科学">geology</span> and the <span class="vocab" data-cn="记录过去生物的遗骸">fossil record</span>, leading him to question how landscapes and life could change dramatically over vast stretches of time.`,
    `In September 1835, the ship arrived at the volcanic archipelago now known as the <span class="vocab" data-cn="加拉帕戈斯群岛">Galápagos Islands</span>. Here Darwin encountered a variety of birds that seemed familiar yet subtly different. The most intriguing were the small <span class="vocab" data-cn="雀形目鸟类">finches</span>, each island hosting birds with beaks uniquely suited to local food sources—some stout for cracking seeds, others slender for probing cactus flowers.`,
    `Darwin began cataloguing these differences, noting that closely related species could diverge in form when isolated on separate islands. He hypothesised that such variation might arise from environmental pressures, a notion that later crystallised into the mechanism of <span class="vocab" data-cn="自然选择">natural selection</span>. The idea was radical: rather than being immutable creations, species could adapt and evolve over generations.`,
    `Back in England, Darwin wrestled with his notes while reading Thomas Malthus’s essay on population growth. Malthus argued that populations tend to outstrip resources, leading to competition and survival of the fittest. This insight helped Darwin articulate how <span class="vocab" data-cn="自然选择">natural selection</span> could operate: advantageous traits become more common as organisms compete for limited niches.`,
    `In 1859, after years of careful experimentation and correspondence with fellow scientists, Darwin published *On the Origin of Species*. The book presented a comprehensive argument that all life shares common ancestry, diverging through <span class="vocab" data-cn="自然选择">natural selection</span>. Its reception was explosive, challenging prevailing religious doctrines and reshaping biological research for generations to come.`,
    `Today, modern genetics provides molecular confirmation of Darwin’s insights. DNA sequencing reveals the genetic relationships among species that Darwin inferred from morphology alone, while the study of <span class="vocab" data-cn="分类学">taxonomy</span> continues to refine our tree of life. The legacy of the <span class="vocab" data-cn="英国皇家测量船">HMS Beagle</span> voyage endures as a testament to curiosity, observation, and the power of evidence‑based theory.`,
  ],
  vocabulary: [
    { word: 'HMS Beagle', cn: '英国皇家测量船' },
    { word: 'natural selection', cn: '自然选择' },
    { word: 'Galápagos Islands', cn: '加拉帕戈斯群岛' },
    { word: 'finches', cn: '雀形目鸟类' },
    { word: 'fossil record', cn: '记录过去生物的遗骸' },
    { word: 'geology', cn: '研究地球历史的科学' },
    { word: 'taxonomy', cn: '分类学' },
  ],
};

export default article;
