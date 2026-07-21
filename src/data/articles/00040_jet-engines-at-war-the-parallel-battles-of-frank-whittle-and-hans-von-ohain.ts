import type { Article } from '../../types/index.ts';

// 文件意图：维护《Jet Engines at War: The Parallel Battles of Frank Whittle and Hans von Ohain》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00040 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00040',
  slug: 'jet-engines-at-war-the-parallel-battles-of-frank-whittle-and-hans-von-ohain',
  title: 'Jet Engines at War: The Parallel Battles of Frank Whittle and Hans von Ohain',
  subtitle: 'How two engineers forged the jet age amid World War II',
  summary: 'A narrative of the rival yet parallel development of the first practical <span class="vocab" data-cn="喷气发动机">jet engine</span> in Britain and Germany.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `When Europe erupted into conflict in 1939, military planners quickly realized that speed could decide the fate of battles. Traditional piston‑driven fighters were approaching their aerodynamic limits, prompting a handful of visionary engineers to explore an entirely new propulsion concept: the <span class="vocab" data-cn="喷气发动机">jet engine</span>. In Britain, Royal Air Force officer Frank Whittle was sketching designs in a modest workshop; half a continent away, German physicist Hans von Ohain was conducting experiments in the halls of the University of Göttingen. Their stories unfolded almost simultaneously, yet each faced distinct political and technical obstacles.`,
    `Whittle’s journey began in 1930 when he joined the RAF as a pilot‑candidate. Frustrated by the sluggish climb rates of contemporary aircraft, he filed a patent for a “gas turbine engine” in 1937, emphasizing a compact <span class="vocab" data-cn="离心压缩机">centrifugal compressor</span> coupled to a turbine—a configuration later known as a <span class="vocab" data-cn="涡轮喷气发动机">turbojet</span>. The British Air Ministry was skeptical, and funding trickled in only after persistent lobbying. Undeterred, Whittle built a bench‑top prototype, the Power Jet 1, which successfully demonstrated continuous combustion and shaft rotation by 1939.`,
    `Von Ohain’s path diverged both academically and technically. A student of physics under the mentorship of Ludwig Prandtl, he became fascinated with high‑speed airflow through rotating blades. In 1935 he published a paper describing an <span class="vocab" data-cn="轴向流压缩机">axial‑flow compressor</span> feeding a combustion chamber—a design that promised higher efficiency at greater speeds than Whittle’s centrifugal approach. By 1937, the fledgling Heinkel aircraft company agreed to fund his experiments, leading to the creation of the HeS 1 engine and its installation in the experimental He 178 airframe.`,
    `Both inventors soon discovered that technical brilliance alone could not secure progress; bureaucratic inertia and wartime priorities often eclipsed innovation. Whittle’s team struggled to convince senior RAF officials that a turbine‑driven aircraft could produce sufficient <span class="vocab" data-cn="推力">thrust</span> for combat. Meanwhile, von Ohain faced pressure from the Reichsluftfahrtministerium, which demanded rapid results while still favoring conventional piston engines. In both camps, the critical component—the <span class="vocab" data-cn="燃烧室">combustion chamber</span>—had to be engineered to withstand extreme temperatures without compromising weight, a challenge that consumed countless man‑hours and scarce materials.`,
    `The first public demonstrations marked turning points for each nation. On 27 August 1939, the He 178 took off from Rostock, becoming the world’s inaugural jet‑propelled aircraft, though its flight lasted only eight minutes before landing safely. In Britain, Whittle’s Gloster E.28/39 made its maiden flight on 15 May 1941, proving that a centrifugal‑compressor turbojet could reliably generate over 2,000 pounds of <span class="vocab" data-cn="推力">thrust</span>. While neither aircraft entered combat during the war, their successes convinced military leaders to invest in larger production programs—most notably the Gloster Meteor for the RAF and the Heinkel He 219 for the Luftwaffe.`,
    `The aftermath of World War II accelerated the diffusion of jet technology across continents. Allied forces captured German engine specimens, including von Ohain’s later axial‑flow designs, which directly influenced early American projects such as the General Electric J31. Whittle’s work, meanwhile, laid the groundwork for postwar British jets and eventually inspired the development of the <span class="vocab" data-cn="加力燃烧器">afterburner</span>, a device that injects extra fuel into the exhaust stream to boost thrust during short bursts. By the early 1950s, both nations fielded aircraft capable of sustained <span class="vocab" data-cn="超音速">supersonic</span> flight, a testament to the foundational research conducted under wartime duress.`,
    `Today, the legacy of Whittle and von Ohain endures in every modern airliner and fighter. Their early rivalry sparked a cascade of innovations that culminated in the high‑bypass <span class="vocab" data-cn="涡轮风扇发动机">turbofan</span>, which powers most commercial jets today, delivering greater efficiency while preserving the core principles they first proved viable. Though their personal battles were fought on opposite sides of a global conflict, both engineers shared a common vision: to harness the raw energy of rapidly moving air and transform it into reliable propulsion. Their parallel stories remind us that scientific progress often thrives amid competition, even when the stakes are as high as world war.`,
  ],
  vocabulary: [
    { word: 'jet engine', cn: '喷气发动机' },
    { word: 'centrifugal compressor', cn: '离心压缩机' },
    { word: 'turbojet', cn: '涡轮喷气发动机' },
    { word: 'axial-flow compressor', cn: '轴向流压缩机' },
    { word: 'thrust', cn: '推力' },
    { word: 'combustion chamber', cn: '燃烧室' },
    { word: 'afterburner', cn: '加力燃烧器' },
    { word: 'supersonic', cn: '超音速' },
    { word: 'turbofan', cn: '涡轮风扇发动机' },
  ],
};

export default article;
