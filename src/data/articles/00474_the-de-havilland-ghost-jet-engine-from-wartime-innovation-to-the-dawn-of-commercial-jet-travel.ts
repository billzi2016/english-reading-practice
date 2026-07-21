import type { Article } from '../../types/index.ts';

// 文件意图：维护《The De Havilland Ghost Jet Engine: From Wartime Innovation to the Dawn of Commercial Jet Travel》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00474 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00474',
  slug: 'the-de-havilland-ghost-jet-engine-from-wartime-innovation-to-the-dawn-of-commercial-jet-travel',
  title: 'The De Havilland Ghost Jet Engine: From Wartime Innovation to the Dawn of Commercial Jet Travel',
  subtitle: 'How a wartime turbojet paved the way for the world’s first jet airliners',
  summary: 'Explore the story of the de Havilland Ghost, its technical breakthroughs, and its influence on early commercial jet travel.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When World War II ended, Britain faced a paradox: it had pioneered the <span class="vocab" data-cn="涡轮喷气发动机">turbojet</span> but possessed few practical designs. Frank Whittle’s Power Jets team had demonstrated the W.1 in 1941, yet production lagged behind German advances. De Havilland, a leading aircraft manufacturer, saw an opportunity to turn wartime research into peacetime profit, and they turned to engineer Frank Halford to create a compact, reliable engine that could power both fighters and future transports.`,
    `Halford’s answer was the H‑1, later christened “Ghost.” Unlike Whittle’s axial‑flow concepts, Ghost employed a <span class="vocab" data-cn="离心压缩机">centrifugal compressor</span> driven by a single-stage turbine. This architecture gave the engine a short length and high thrust‑to‑weight ratio—crucial for fitting into the narrow fuselages of existing aircraft. The first bench run in 1948 produced about 4,850 lbf of <span class="vocab" data-cn="推力">thrust</span>, enough to lift a light fighter off the ground without major redesigns.`,
    `The maiden flight of an aircraft powered by Ghost occurred on 26 June 1949, when a modified de Havilland Vampire took to the skies. Pilots noted the engine’s smooth acceleration and relatively low fuel consumption compared with piston‑driven powerplants. The success convinced the Air Ministry that the Ghost could serve as a bridge between wartime jet fighters and the emerging need for faster transport aircraft, prompting orders for both military trainers and experimental civilian prototypes.`,
    `De Havilland’s most ambitious project was the DH 106 Comet, the world’s first commercial jet airliner. The prototype, known as “One‑Eleven,” initially mounted four Ghost 103 engines beneath its wing roots. This configuration allowed the sleek, pressurised fuselage to remain clean while providing sufficient thrust for trans‑Atlantic service. Although later variants switched to the more powerful Rolls‑Royce Avon, the Ghost’s role in proving that jet propulsion could be reliable enough for passenger service cannot be overstated.`,
    `Behind the scenes, engineers tackled several technical hurdles. The centrifugal design created a pronounced “airflow swirl” that required careful shaping of the <span class="vocab" data-cn="燃烧室">combustion chamber</span> to ensure even fuel‑air mixing. Additionally, the engine’s exhaust temperature approached 1,200 °C, demanding advanced alloys such as Nimonic 80 for turbine blades—a material science breakthrough that would later benefit many high‑temperature applications.`,
    `The Ghost’s legacy extended beyond its own production run, which ended in the mid‑1950s. Its straightforward design made it a favorite testbed for aerodynamic research, and lessons learned from its cooling systems informed the development of later axial‑flow engines. Moreover, the confidence gained from operating a jet-powered commercial aircraft helped airlines worldwide envision a future where speed, altitude, and passenger comfort would be dramatically enhanced.`,
    `Today, museums in the United Kingdom and Canada display restored Ghost engines alongside early Comet airframes, reminding visitors that the transition from wartime innovation to civilian aviation was not an overnight miracle but a series of pragmatic engineering choices. The story of the de Havilland Ghost illustrates how a single engine can catalyse an entire industry, turning the roar of war into the hum of commercial flight.`,
  ],
  vocabulary: [
    { word: 'turbojet', cn: '涡轮喷气发动机' },
    { word: 'centrifugal compressor', cn: '离心压缩机' },
    { word: 'thrust', cn: '推力' },
    { word: 'combustion chamber', cn: '燃烧室' },
    { word: 'Nimonic 80', cn: '镍基高温合金（尼莫尼克80）' },
    { word: 'airflow swirl', cn: '气流旋涡' },
  ],
};

export default article;
