import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1919 Wright Brothers Patent War: Glenn Curtiss, Legal Battles, and the Shaping of American Aviation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00287 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00287',
  slug: 'the-1919-wright-brothers-patent-war-glenn-curtiss-legal-battles-and-the-shaping-of-american-aviation',
  title: 'The 1919 Wright Brothers Patent War: Glenn Curtiss, Legal Battles, and the Shaping of American Aviation',
  subtitle: 'How a legal clash over control technology reshaped U.S. aviation.',
  summary: 'An engaging narrative about the patent dispute between the Wright brothers and Glenn Curtiss that culminated in a 1919 settlement and set the stage for America’s air power.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When Orville and Wilbur Wright secured U.S. <span class="vocab" data-cn="专利">patent</span> No. 821,393 in 1906, they were not merely protecting a clever invention; they were staking a claim on the very method that kept an aircraft aloft—three‑axis control using wing‑warping, a movable rudder, and a forward elevator. The patent language was deliberately broad, describing “the combination of means for providing lateral control of a flying machine,” which later became the legal cornerstone of their defense against competitors.`,
    `Across the country, a young engineer named Glenn Curtiss was experimenting with his own designs at the Curtiss Aeroplane and Motor Company. Rather than copying wing‑warping, Curtiss favored the <span class="vocab" data-cn="副翼">aileron</span>, a hinged surface on the trailing edge of each wing that could be deflected independently. This innovation allowed for smoother control at higher speeds and quickly attracted attention from both hobbyists and military officials.`,
    `The first clash erupted in 1910 when the Wright Company filed an infringement suit against Curtiss, alleging that his use of ailerons violated their patent on lateral control. A federal court issued an <span class="vocab" data-cn="禁令">injunction</span>, halting Curtiss’s production of aircraft that employed any form of wing‑deflection. The decision sent shockwaves through the fledgling aviation community, as many manufacturers relied on similar mechanisms and now faced legal uncertainty.`,
    `Curtiss appealed, and the case eventually reached the United States Supreme Court in 1913 (Wright v. Curtiss). The justices upheld the Wrights’ claim, interpreting the patent’s scope to cover “any means of varying the angle of a wing or surface for lateral control,” effectively encompassing ailerons. This ruling reinforced the Wright brothers’ dominance but also intensified criticism that the patent system was stifling technological progress during an era when rapid innovation was essential.`,
    `World War I changed the calculus dramatically. The U.S. government, desperate to expand its air fleet, warned that prolonged litigation could cripple national defense. At the same time, antitrust advocates argued that the Wrights’ monopoly violated the Sherman Act by restraining competition in a critical industry. Under pressure from both military officials and the Department of Justice, the parties entered negotiations aimed at dissolving the deadlock before America’s entry into the war.`,
    `In 1919, after years of bitter disputes, the Wright brothers agreed to sell their patent portfolio to the United States government for $1.5 million. The transaction created the Aeronautical Patent Holding Company, which pooled the patents and granted royalty‑free licenses to all American aircraft manufacturers. This settlement not only ended the legal war but also laid the groundwork for a unified industry that could compete internationally without fear of infringement suits.`,
    `The legacy of the patent war lives on in museums and archives, most notably at the <span class="vocab" data-cn="史密森学会">Smithsonian Institution</span>, which houses original Wright flyers and Curtiss engines. By resolving the dispute, America unlocked a period of rapid aeronautical advancement that would see the rise of companies like Boeing and Douglas, ultimately shaping the nation’s role as a global leader in aviation.`,
  ],
  vocabulary: [
    { word: 'patent', cn: '专利' },
    { word: 'aileron', cn: '副翼' },
    { word: 'injunction', cn: '禁令' },
    { word: 'antitrust', cn: '反垄断' },
    { word: 'monoplane', cn: '单翼飞机' },
    { word: 'biplane', cn: '双翼飞机' },
    { word: 'Smithsonian Institution', cn: '史密森学会' },
  ],
};

export default article;
