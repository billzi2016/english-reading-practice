import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Halifax Explosion of 1917: A Tragedy That Redefined Urban Safety and Emergency Response》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00055 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00055',
  slug: 'the-halifax-explosion-of-1917-a-tragedy-that-redefined-urban-safety-and-emergency-response',
  title: 'The Halifax Explosion of 1917: A Tragedy That Redefined Urban Safety and Emergency Response',
  subtitle: 'How a single blast reshaped city planning and emergency management.',
  summary: 'An in‑depth look at the 1917 Halifax Explosion, its immediate devastation, and lasting influence on safety policies.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early hours of December 6, 1917, the bustling port of Halifax, Nova Scotia was a crucial hub for the Allied war effort, handling troops and supplies bound for Europe. Among the vessels docked that night was the French cargo ship <span class="vocab" data-cn="军火船">SS Mont‑Blanc</span>, laden with a volatile mixture of high‑explosive munitions, including picric acid, TNT, and guncotton. The ship's crew had been warned about the dangers of such a load, but wartime urgency often overrode caution.`,
    `At 9:04 p.m., the Mont‑Blanc attempted to maneuver around the Norwegian vessel <span class="vocab" data-cn="海上航行">SS Imo</span>, which was illegally anchored in the channel. A miscommunication led to a collision that ripped open the Mont‑Blanc’s hull, exposing its cargo to sparks from the impact and the ship's own lanterns. Within minutes, a small fire ignited near one of the <span class="vocab" data-cn="雷管">blasting caps</span>—the tiny devices used to detonate larger charges—setting the stage for disaster.`,
    `At 9:05 p.m., the first explosion erupted, equivalent to roughly 2.9 kilotons of TNT, creating a blinding flash and a towering fireball that rose over 1,000 feet. The ensuing <span class="vocab" data-cn="冲击波">shockwave</span> flattened buildings across the city’s north end, shattering windows for miles and sending debris hurtling like missiles. In an instant, more than 2,000 people were killed and another 9,000 injured, making it the largest man‑made explosion before the atomic age.`,
    `The immediate response was chaotic but heroic. Local doctors, nurses, and volunteers rushed to the devastated neighborhoods, establishing improvised <span class="vocab" data-cn="分诊">triage</span> stations in churches and schools to prioritize treatment for the wounded. With hospitals overwhelmed and supplies scarce, many victims received care on makeshift stretchers under open sky. The disaster also exposed the lack of an organized <span class="vocab" data-cn="民防">civil defense</span> framework, prompting citizens to coordinate rescue efforts through ad‑hoc committees.`,
    `In the months that followed, Halifax’s municipal leaders embarked on a sweeping overhaul of urban safety standards. Building codes were revised to require fire‑resistant materials and reinforced structures in high‑risk zones. The city also established a permanent <span class="vocab" data-cn="民防">civil defense</span> department tasked with emergency planning, public drills, and the construction of shelters. These reforms not only rebuilt Halifax but also set precedents that other North American cities would later adopt.`,
    `The explosion reverberated far beyond Nova Scotia, reshaping international maritime regulations. The International Convention for the Safety of Life at Sea (SOLAS) was amended to impose stricter rules on the transport of hazardous cargo, mandating clear labeling, segregation of explosive materials, and mandatory presence of trained personnel to handle <span class="vocab" data-cn="雷管">blasting caps</span>. Additionally, ports worldwide upgraded their <span class="vocab" data-cn="海上航行">maritime navigation</span> protocols, introducing dedicated anchorage zones for dangerous ships and improving communication channels between vessels.`,
    `Today, the Halifax Explosion is commemorated each year on December 6 with a moment of silence and public ceremonies at the Halifax Citadel and the Explosion Memorial. Scholars study the event as a case study in disaster management, emphasizing how rapid community response can mitigate loss when formal systems are lacking. The lessons learned continue to inform modern emergency planning, reminding us that preparedness, clear communication, and resilient infrastructure are essential safeguards against even the most unexpected catastrophes.`,
  ],
  vocabulary: [
    { word: 'munitions ship', cn: '军火船' },
    { word: 'blasting cap', cn: '雷管' },
    { word: 'shockwave', cn: '冲击波' },
    { word: 'civil defense', cn: '民防' },
    { word: 'triage', cn: '分诊' },
    { word: 'maritime navigation', cn: '海上航行' },
  ],
};

export default article;
