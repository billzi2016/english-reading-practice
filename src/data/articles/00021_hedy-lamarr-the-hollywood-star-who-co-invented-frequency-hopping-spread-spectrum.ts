import type { Article } from '../../types/index.ts';

// File purpose: maintain the full content of “Hedy Lamarr: The Hollywood Star Who Co‑Invented Frequency‑Hopping Spread Spectrum” for article indexing.
const article: Article = {
  id: '00021',
  slug: 'hedy-lamarr-the-hollywood-star-who-co-invented-frequency-hopping-spread-spectrum',
  title: 'Hedy Lamarr: The Hollywood Star Who Co‑Invented Frequency‑Hopping Spread Spectrum',
  subtitle: 'From Silver Screen to Secure Signals',
  summary: 'Explore how actress Hedy Lamarr helped create the frequency-hopping technology that underpins modern wireless communication.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Born Hedwig Eva Maria Kiesler on November 9, 1914 in Vienna, Hedy Lamarr grew up amid the cultural ferment of the Austro‑Hungarian Empire. Her father, a successful bank director, encouraged her love of music and mathematics, while her mother nurtured an early fascination with theater. By her late teens she had already appeared in several Austrian films, most famously the controversial 1933 drama “Ecstasy,” which attracted international attention for its daring portrayal of female sexuality. This early exposure to both art and intellect set the stage for a life that would later straddle two very different worlds.`,
    `Lamarr’s move to Hollywood in 1937 turned her into one of the era’s most recognizable screen sirens. Under the banner of Metro‑Goldwyn‑Mayer she starred in hits such as “Algiers” (1938), “Boom Town” (1940) and Cecil B. DeMille’s biblical epic “Samson and Delilah” (1949). Though celebrated for her striking beauty, Lamarr was also a sharp mind who spoke several languages and kept up with scientific journals. In an industry that rarely valued intellect, she proved to be a <span class="vocab" data-cn="先驱">pioneer</span> in using celebrity influence to explore technical pursuits.`,
    `The spark for her most enduring contribution came during World II, when the United States Navy struggled with German radio jamming that rendered remote‑controlled torpedoes unreliable. In 1941 Lamarr met avant‑garde composer George Antheil, whose experiments with synchronized player‑piano rolls fascinated her. Together they devised a secret communications system that would rapidly switch—<span class="vocab" data-cn="跳频">frequency-hopping</span>—among dozens of radio channels, making it virtually impossible for an enemy to lock onto the signal. Their design was intended to guide a <span class="vocab" data-cn="鱼雷">torpedo</span> without interference.`,
    `The core idea behind their invention is what engineers now call <span class="vocab" data-cn="扩频技术">spread spectrum</span>: the transmission of a signal over a wide band of frequencies in a pattern known only to sender and receiver. By hopping the carrier frequency many times per second, the system not only evades intentional jamming but also reduces the chance of accidental interference with other devices. In essence, it laid the groundwork for modern <span class="vocab" data-cn="无线通信">wireless communication</span>, where data can be sent reliably even in crowded spectral environments.`,
    `The duo filed a U.S. <span class="vocab" data-cn="专利">patent</span> application in August 1941, and the United States Patent Office granted it as Patent No. 2,292,387 on August 11, 1942. The document described a “secret communication system” that used a synchronized piano‑roll mechanism to control frequency changes. Although the Navy never adopted the technology during the war—preferring more conventional methods—the patent survived as proof of concept and later inspired engineers working on secure radio links for military and civilian use.`,
    `Lamarr’s scientific achievements remained largely hidden until the late‑1990s, when a renewed interest in her story led to several honors. In 1997 she and Antheil received the Electronic Frontier Foundation <span class="vocab" data-cn="先驱">pioneer</span> award for their groundbreaking work on secure communications. A decade later, in 2014, Lamarr was posthumously inducted into the National Inventors Hall of Fame, cementing her status as a true innovator. Today, technologies such as Wi‑Fi, Bluetooth and GPS trace their lineage back to the frequency‑hopping principles she helped pioneer.`,
    `The tale of Hedy Lamarr reminds us that brilliance can emerge from unexpected places. Her ability to navigate the glittering world of cinema while quietly solving a complex engineering problem challenges stereotypes about gender, talent and vocation. For aspiring scientists—especially women—her legacy serves as a powerful reminder that curiosity knows no boundaries, and that the most enduring inventions often arise when art and technology intersect.`,
  ],
  vocabulary: [
    { word: 'pioneer', cn: '先驱' },
    { word: 'frequency-hopping', cn: '跳频' },
    { word: 'torpedo', cn: '鱼雷' },
    { word: 'spread spectrum', cn: '扩频技术' },
    { word: 'wireless communication', cn: '无线通信' },
    { word: 'patent', cn: '专利' },
  ],
};

export default article;
