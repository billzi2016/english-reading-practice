import type { Article } from '../../types/index.ts';

// This file defines the article content for "Nikola Tesla and the War of Currents".
const article: Article = {
  id: '00011',
  slug: 'nikola-tesla-and-the-war-of-currents',
  title: 'Nikola Tesla and the War of Currents',
  subtitle: 'The battle that powered modern civilization',
  summary: "Nikola Tesla's AC system triumphed over Edison's DC, reshaping global electricity distribution.",
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `Born in 1856 in what is now Croatia, Nikola Tesla grew up amid a family that prized education and invention. After studying engineering at the Austrian Polytechnic, he moved to Paris and later to New York, where his fascination with electricity deepened into a vision of a power system that could transmit energy over long distances without excessive loss. Unlike the prevailing belief that electricity had to be generated close to its point of use, Tesla imagined a network powered by <span class="vocab" data-cn="交流电">alternating current</span>, a concept he would later refine into practical machines.`,
    `In contrast, Thomas Edison championed the <span class="vocab" data-cn="直流电">direct current</span> model that had already powered his early lighting installations. Edison's DC system required power stations to be placed within a few hundred meters of consumers because voltage could not easily be stepped up or down. This limitation forced cities to build dense grids of generators, an approach that seemed efficient at the time but proved costly as urban areas expanded.`,
    `The clash between AC and DC quickly escalated into what history remembers as the War of Currents. Edison launched a vigorous public campaign, portraying AC as dangerous and unpredictable. He even organized demonstrations in which animals were electrocuted with high-voltage AC to prove his point, exploiting the public's fear of <span class="vocab" data-cn="电磁场">electromagnetic field</span> exposure. Meanwhile, Tesla, backed by industrialist George Westinghouse, argued that AC could be safely transformed to any voltage level using a <span class="vocab" data-cn="变压器">transformer</span>, allowing power to travel hundreds of miles.`,
    `The turning point arrived at the 1893 World's Columbian Exposition in Chicago, where Westinghouse installed Tesla's AC generators to illuminate the fairgrounds. The spectacular display proved that <span class="vocab" data-cn="交流电">alternating current</span> could power thousands of lights reliably and safely. In addition, Tesla's invention of the <span class="vocab" data-cn="感应电动机">induction motor</span>, which operated on AC without brushes or commutators, demonstrated a practical application that DC systems struggled to match. These successes convinced many municipal utilities to adopt AC for their emerging electric grids.`,
    `The legal battles continued as Edison's company sued Westinghouse for patent infringement, and the media kept sensationalizing the dangers of high-voltage electricity. Yet Tesla's deep understanding of <span class="vocab" data-cn="共振">resonance</span> allowed him to design circuits that minimized energy loss, further enhancing AC's efficiency. By 1900, most major cities in the United States had transitioned to AC distribution, and the once-controversial technology became the backbone of modern power infrastructure.`,
    `Although Tesla did not live to see all his ideas realized—he died in relative obscurity in 1943—his contributions during the War of Currents cemented his reputation as a visionary engineer. The triumph of AC over DC reshaped how electricity is generated, transmitted, and consumed worldwide, laying the groundwork for today's smart grids and renewable energy integration. Tesla's legacy now extends beyond the war itself; he is celebrated for pioneering concepts such as wireless power transmission, radio, and even early ideas that foreshadowed modern robotics.`,
    `In the decades after his death, Tesla's name became synonymous with visionary science. The unit of magnetic flux density, the tesla, honors his pioneering work on rotating magnetic fields and high-frequency oscillators. His invention of the <span class="vocab" data-cn="特斯拉线圈">Tesla coil</span>—a resonant transformer that can generate spectacular electrical arcs—laid groundwork for early radio transmission and continues to inspire hobbyists and artists today. Popular culture has celebrated him in films, books, and even a major electric-car company bearing his name, underscoring how the War of Currents not only decided an engineering standard but also forged a lasting mythos around one of history's most enigmatic inventors.`,
  ],
  vocabulary: [
    { word: 'alternating current', cn: '交流电' },
    { word: 'direct current', cn: '直流电' },
    { word: 'electromagnetic field', cn: '电磁场' },
    { word: 'transformer', cn: '变压器' },
    { word: 'induction motor', cn: '感应电动机' },
    { word: 'resonance', cn: '共振' },
    { word: 'Tesla coil', cn: '特斯拉线圈' },
  ],
};

export default article;
