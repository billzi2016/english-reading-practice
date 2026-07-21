import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Mystery of the Bermuda Triangle: Navigational Anomalies and Scientific Explanations》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00312 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00312',
  slug: 'the-mystery-of-the-bermuda-triangle-navigational-anomalies-and-scientific-explanations',
  title: 'The Mystery of the Bermuda Triangle: Navigational Anomalies and Scientific Explanations',
  subtitle: 'Exploring why ships and planes have vanished in a region that fuels both fear and curiosity.',
  summary: 'A narrative walk through famous disappearances, magnetic quirks, methane releases, weather extremes, and human error that together demystify the Bermuda Triangle.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `The <span class="vocab" data-cn="百慕大三角">Bermuda Triangle</span> stretches roughly between Miami, San Juan, and the island of Bermuda. For decades it has been a magnet for sensational headlines, each claiming that vessels simply “vanish into thin air.” Yet behind the drama lies a series of documented incidents—some involving military aircraft, others commercial ships—that invite careful investigation rather than supernatural speculation.`,
    `The most cited case is the 1945 disappearance of five U.S. Navy Avenger torpedo bombers on a routine training flight known as <span class="vocab" data-cn="第19航班">Flight 19</span>. All aircraft and their crew were lost, and a rescue plane sent after them also vanished. Earlier, in 1918, the cargo ship <span class="vocab" data-cn="塞克洛普斯号">USS Cyclops</span> disappeared with over three hundred souls aboard. These events sparked early theories that something unique to this oceanic region was at work, prompting both military inquiries and public fascination.`,
    `One of the earliest scientific explanations focused on <span class="vocab" data-cn="磁异常">magnetic anomaly</span>. The area sits near a weak spot in Earth’s magnetic field where compass readings can deviate by several degrees. In the era before GPS, pilots and captains relied heavily on magnetic compasses; even a small error could push a vessel off course, especially over featureless open water. Modern surveys confirm that the anomaly is real but not extreme enough to cause sudden loss of navigation without other contributing factors.`,
    `A more recent hypothesis involves <span class="vocab" data-cn="甲烷水合物">methane hydrate</span> deposits on the seafloor. When disturbed—by landslides or seismic activity—these ice‑like crystals can release massive bubbles of methane gas. The resulting plume reduces water density, potentially causing a ship to lose buoyancy and sink rapidly. Laboratory experiments have shown that a sudden drop in water density can destabilize a vessel’s hull, though direct evidence of such an event occurring within the Triangle remains elusive.`,
    `Weather also plays a ruthless role. The region is prone to <span class="vocab" data-cn="微爆流">microburst</span> storms—intense downdrafts that can appear without warning and push aircraft toward the sea. Additionally, the Atlantic’s warm currents foster the formation of rogue waves, towering walls of water that can smash even large ships. Both phenomena are difficult to predict and have been documented in nearby waters, suggesting they could contribute to sudden disappearances when combined with other stresses.`,
    `Human factors cannot be ignored. Fatigue, miscommunication, and over‑reliance on a single navigation system often lead to <span class="vocab" data-cn="导航错误">navigational error</span>. In the 1940s, many crews lacked advanced weather radar and were trained to trust their compasses implicitly. When faced with unexpected cloud cover or instrument failure, a small miscalculation could cascade into a fatal course deviation, especially in an area already riddled with magnetic quirks and volatile weather.`,
    `Today, most experts agree that the Bermuda Triangle’s reputation stems from a convergence of ordinary hazards amplified by human perception. Satellite tracking shows that vessels passing through the region do so without incident far more often than they disappear. By understanding <span class="vocab" data-cn="磁异常">magnetic anomalies</span>, monitoring methane releases, respecting weather warnings, and applying rigorous training, modern navigation has largely demystified what once seemed an enigma—a reminder that even the most legendary mysteries often have rational roots.`,
  ],
  vocabulary: [
    { word: 'Bermuda Triangle', cn: '百慕大三角' },
    { word: 'Flight 19', cn: '第19航班' },
    { word: 'USS Cyclops', cn: '塞克洛普斯号' },
    { word: 'magnetic anomaly', cn: '磁异常' },
    { word: 'methane hydrate', cn: '甲烷水合物' },
    { word: 'microburst', cn: '微爆流' },
    { word: 'navigational error', cn: '导航错误' },
  ],
};

export default article;
