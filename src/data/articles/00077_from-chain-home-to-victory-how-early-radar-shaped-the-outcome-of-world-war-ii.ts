import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Chain Home to Victory: How Early Radar Shaped the Outcome of World War II》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00077 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00077',
  slug: 'from-chain-home-to-victory-how-early-radar-shaped-the-outcome-of-world-war-ii',
  title: 'From Chain Home to Victory: How Early Radar Shaped the Outcome of World War II',
  subtitle: 'How Britain’s first radar network turned the tide in the skies over Europe',
  summary: 'An engaging story of how the Chain Home system gave the Allies a decisive edge during WWII.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When war clouds gathered over Europe in 1939, Britain faced a terrifying dilemma: how could an island nation spot enemy aircraft before they arrived? The answer began to take shape at the Royal Air Force’s experimental labs, where engineers were perfecting a new technology called <span class="vocab" data-cn="雷达">radar</span>. By 1938, the British government approved construction of a chain of coastal transmitter stations that would later be known as the <span class="vocab" data-cn="链式家园系统">Chain Home</span> network. This early warning system was designed to broadcast high‑frequency radio pulses and listen for their echoes off incoming planes, turning invisible threats into visible blips on a screen.</`,
    `The technical heart of Chain Home lay in its massive steel towers, some reaching over 120 meters tall, each equipped with powerful transmitters operating at wavelengths around 12 meters (≈25 MHz). When an aircraft entered the radar’s range—up to 200 miles—the reflected signal returned a few seconds later. Operators measured the time delay and calculated distance, while the direction was inferred from the bearing of the receiving antenna. Though primitive by modern standards, this <span class="vocab" data-cn="早期预警系统">early warning system</span> could detect formations of bombers long before they crossed the English Channel.</`,
    `The true test came in the summer of 1940 during the <span class="vocab" data-cn="不列颠之战">Battle of Britain</span>. As the Luftwaffe unleashed waves of fighters and bombers, Chain Home stations fed real‑time information to a sophisticated command structure known as the <span class="vocab" data-cn="英国战斗机指挥部">Fighter Command</span>. Radar plots were plotted on large map tables, allowing controllers to allocate squadrons precisely where they were needed. This “<span class="vocab" data-cn="道格丁系统">Dowding system</span>” gave British pilots precious minutes to scramble, turning what could have been a surprise attack into a series of calculated interceptions.</`,
    `The German high command quickly realized that Britain’s radar advantage was crippling their daylight bombing campaign. In response they shifted tactics toward night raids and began developing the <span class="vocab" data-cn="卡姆胡伯防线">Kammhuber Line</span>, a network of ground‑based radars and searchlights designed to counter Allied detection. Yet the British continued to innovate. By 1941, the invention of the <span class="vocab" data-cn="微波腔磁控管">microwave cavity magnetron</span> at the University of Birmingham enabled much shorter wavelengths, paving the way for airborne interception radars that could be mounted on night fighters such as the Bristol Beaufighter.</`,
    `These airborne radars transformed nocturnal combat. Pilots could now locate enemy bombers in darkness, dramatically increasing kill rates and forcing the Luftwaffe to reconsider their bombing strategy. Moreover, the Allies employed <span class="vocab" data-cn="电子对抗措施">electronic countermeasures</span>—jamming and deception techniques—to confuse German radar operators, creating a cat‑and‑mouse game of signal warfare that persisted throughout the war.</`,
    `Beyond the battlefield, the legacy of Chain Home rippled into peacetime. The same principles that once guided fighter squadrons became the backbone of civilian air traffic control, ensuring safe separation of commercial aircraft worldwide. Radar also found a home in missile guidance systems, weather forecasting, and even space exploration, proving that a wartime necessity could evolve into a cornerstone of modern technology.</`,
    `Looking back, it is clear that the modest series of steel towers along Britain’s coast did more than detect incoming planes; they bought an entire nation time to adapt, innovate, and ultimately prevail. The story of Chain Home reminds us that sometimes the most decisive victories are won not by firepower alone, but by the ability to see what others cannot.`],
  vocabulary: [
    { word: 'radar', cn: '雷达' },
    { word: 'Chain Home', cn: '链式家园系统' },
    { word: 'early warning system', cn: '早期预警系统' },
    { word: 'Battle of Britain', cn: '不列颠之战' },
    { word: 'Fighter Command', cn: '英国战斗机指挥部' },
    { word: 'microwave cavity magnetron', cn: '微波腔磁控管' },
    { word: 'electronic countermeasures', cn: '电子对抗措施' }
  ],
};

export default article;
