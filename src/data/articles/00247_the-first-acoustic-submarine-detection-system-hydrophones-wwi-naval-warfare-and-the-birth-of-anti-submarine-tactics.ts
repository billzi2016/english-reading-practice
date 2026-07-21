import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Acoustic Submarine Detection System: Hydrophones, WWI Naval Warfare, and the Birth of Anti‑Submarine Tactics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00247 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00247',
  slug: 'the-first-acoustic-submarine-detection-system-hydrophones-wwi-naval-warfare-and-the-birth-of-anti-submarine-tactics',
  title: 'The First Acoustic Submarine Detection System: Hydrophones, WWI Naval Warfare, and the Birth of Anti‑Submarine Tactics',
  subtitle: 'How sound in water reshaped naval strategy during the Great War',
  summary: 'A narrative of how early hydrophone experiments gave the Allies a way to hear enemy submarines and sparked the first anti‑submarine tactics.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the First World War erupted in 1914, the Royal Navy faced an unprecedented threat from German <span class="vocab" data-cn="潜艇">U‑boat</span> attacks on merchant convoys. The submarines could glide silently beneath the waves, evading visual spotting and rendering traditional gunnery ineffective. In response, a small group of engineers at the Admiralty’s Experimental Department began to explore whether water itself might betray the hidden hunters. Their curiosity led to the invention of the <span class="vocab" data-cn="水听器">hydrophone</span>, a simple yet ingenious device that turned oceanic pressure fluctuations into audible signals.`,
    `The earliest hydrophones were nothing more than stretched membranes attached to metal diaphragms, connected by long wires to surface stations. When a submarine’s propellers churned the water, they produced low‑frequency vibrations that traveled great distances. By listening through ear‑phones, operators could sometimes discern a faint “whoosh” that indicated an approaching foe. However, the raw sounds were ambiguous; distinguishing a friendly ship from an enemy required careful analysis of pitch, rhythm, and intensity—a skill that soon became known as interpreting the vessel’s <span class="vocab" data-cn="声学特征">acoustic signature</span>.`,
    `In early 1915, Lieutenant Commander A. R. B. H. L. “Hugh” McClintock led a trial off the coast of Harwich, deploying a line of hydrophones from a trawler named *Marlborough*. By arranging three separate listening posts at known intervals, his team could apply basic <span class="vocab" data-cn="三角测量">triangulation</span> to estimate the submarine’s bearing. When a German U‑boat surfaced briefly for air, the hydrophones captured its distinctive engine hum, allowing McClintock to plot a rough position and direct a destroyer to intercept. Though the encounter ended without a confirmed kill, it proved that sound could be weaponised in defence.`,
    `The success of these experiments spurred the Admiralty to formalise an acoustic detection network known as the “Sound Detection System”. By mid‑1916, dozens of coastal stations equipped with hydrophones were linked by telephone lines to a central analysis hub at Portsmouth. Operators worked in shifts, listening for the tell‑tale thrum of submarine engines while surface ships maintained a constant patrol pattern called the “convoy system”. When a suspicious sound was reported, nearby destroyers would be dispatched to the estimated location and drop <span class="vocab" data-cn="深水炸弹">depth charges</span>—explosive devices designed to detonate at preset depths and damage submerged hulls.`,
    `The first coordinated use of hydrophones and depth charges occurred during the Battle of Jutland’s aftermath, when a British destroyer squadron detected a U‑boat lurking near the Dover Strait. Using the acoustic bearings from three shore stations, they narrowed the submarine’s position to within a few hundred metres. The destroyers then executed a pattern of depth charge drops, creating a series of underwater shockwaves that forced the enemy vessel to surface in panic. Though the crew escaped, the incident demonstrated that sound‑based detection could be paired with explosive countermeasures to create an effective anti‑submarine tactic.`,
    `While hydrophones proved valuable, they also exposed several limitations that would shape future research. The devices were highly susceptible to ambient noise from waves, wind, and even marine life, leading to false alarms. Moreover, the speed of sound in seawater (approximately 1,500 m/s) meant that precise localisation required rapid communication between stations—a logistical challenge before widespread radio use. These shortcomings motivated scientists such as Sir William Henry Bragg to investigate active acoustic methods, eventually giving rise to the term <span class="vocab" data-cn="声纳">sonar</span> after the war.`,
    `By the armistice of 1918, the hydrophone network had saved countless merchant ships and forced German submarines to adopt deeper operating depths, reducing their effectiveness. The experience also laid the groundwork for interwar naval doctrines that emphasized “anti‑submarine warfare” as a distinct discipline. In the decades that followed, the principles pioneered by those early engineers—listening, triangulating, and striking—would evolve into sophisticated sonar arrays, magnetic anomaly detectors, and coordinated convoy escorts that defined modern maritime security. The humble hydrophone, born of wartime necessity, thus became the ancestor of today’s underwater surveillance technologies.`,
  ],
  vocabulary: [
    { word: 'hydrophone', cn: '水听器' },
    { word: 'U‑boat', cn: '潜艇' },
    { word: 'acoustic signature', cn: '声学特征' },
    { word: 'triangulation', cn: '三角测量' },
    { word: 'depth charge', cn: '深水炸弹' },
    { word: 'sonar', cn: '声纳' },
  ],
};

export default article;
