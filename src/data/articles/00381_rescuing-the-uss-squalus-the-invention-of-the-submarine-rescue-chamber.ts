import type { Article } from '../../types/index.ts';

// 文件意图：维护《Rescuing the USS Squalus: The Invention of the Submarine Rescue Chamber》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00381 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00381',
  slug: 'rescuing-the-uss-squalus-the-invention-of-the-submarine-rescue-chamber',
  title: 'Rescuing the USS Squalus: The Invention of the Submarine Rescue Chamber',
  subtitle: 'How a daring engineering solution saved lives and reshaped undersea rescue.',
  summary: 'The tragic sinking of USS Squalus in 1939 led to the creation of the first practical submarine rescue chamber, a device that still influences modern deep‑sea rescue operations.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On May 23, 1939, the United States Navy’s newest diesel‑electric boat, the <span class="vocab" data-cn="美国海军潜艇USS Squalus">USS Squalus</span>, was conducting a routine test dive off the coast of New Hampshire. At a depth of about 240 feet (73 meters), a catastrophic failure in the main induction valve caused seawater to flood the forward compartments, instantly disabling the vessel’s propulsion and electrical systems. The sudden loss of power left the crew stranded in darkness, with only a few minutes before the rising water threatened to crush the <span class="vocab" data-cn="潜艇的外壳，承受海水压力">pressure hull</span>.`,
    `Within moments, 33 sailors were trapped inside the crippled submarine while 21 managed to escape through the aft torpedo room hatch. The Navy’s initial response was hampered by the lack of any proven method for rescuing personnel from a disabled sub at such depth. Traditional <span class="vocab" data-cn="潜水钟，一种用于在水下作业的密闭容器">diving bells</span> could not be sealed against the high <span classclass="vocab" data-cn="由水柱产生的压力">hydrostatic pressure</span>, and surface‑supplied air lines were insufficient for a prolonged rescue. The tragedy demanded an innovative solution, prompting Lieutenant Commander Charles B. “Swede” McCann to propose a daring new device.`,
    `McCann’s concept, later known as the <span class="vocab" data-cn="潜艇救援舱，一种用于将人员从沉没潜艇中转移的装置">submarine rescue chamber</span>, was essentially a steel cylinder capable of being lowered from a surface vessel and sealed over a submarine’s hatch. The design borrowed elements from the old <span class="vocab" data-cn="潜水钟，一种用于在水下作业的密闭容器">diving bell</span> but added a watertight sealing ring that could mate with the submarine’s hatch despite the surrounding pressure. Once attached, the chamber could be pressurized to match the interior of the sub, allowing trapped crew members to walk into it without being exposed to the crushing sea.</`,
    `The rescue operation began on May 24, when the salvage ship <span class="vocab" data-cn="打捞船，用于救援沉没或受损的舰艇">USS Falcon</span> arrived with McCann’s prototype. After several tense hours of trial and error, divers successfully aligned the chamber over the forward hatch and secured it using a series of hydraulic clamps. Inside the chamber, a small <span class="vocab" data-cn="用于调节气压的装置">decompression</span> system gradually equalized pressure with the submarine’s interior, preventing the dangerous “pressure shock” that could have injured the rescuers or survivors. One by one, 33 men climbed into the chamber and were hoisted to the surface, each ascent carefully monitored to avoid decompression sickness.</`,
    `The successful rescue of the Squalus crew marked a turning point in naval engineering. McCann’s chamber proved that it was possible to retrieve live personnel from a disabled submarine at operational depths, a feat previously thought impossible. The Navy quickly adopted the design, installing rescue chambers on several capital ships and establishing dedicated training programs for <span class="vocab" data-cn="潜艇救援人员">submarine rescue crews</span>. The incident also spurred improvements in submarine safety protocols, including better valve designs, redundant power systems, and more rigorous emergency drills.</`,
    `In the decades that followed, the basic principles of McCann’s chamber informed the development of more sophisticated rescue vehicles. During the Cold War, the U.S. Navy introduced the <span class="vocab" data-cn="深潜救援装置">Submarine Rescue Diving and Recompression System (SRDRS)</span>, a modern, pressurized submersible capable of operating at depths exceeding 1,000 feet. Although technology advanced, the core idea—creating a sealed environment that can mate with a submarine’s hatch and safely transfer crew—remained unchanged from McCann’s original invention.</`,
    `Today, the legacy of the USS Squalus rescue lives on in international cooperation agreements such as the <span class="vocab" data-cn="国际潜艇救援组织">International Submarine Escape and Rescue Liaison Office (ISMERLO)</span>. Nations share rescue assets, conduct joint exercises, and maintain standby teams ready to deploy a rescue chamber or submersible at a moment’s notice. The story of the Squalus reminds us that even in the darkest depths, human ingenuity and courage can turn disaster into a triumph of engineering.`,
  ],
  vocabulary: [
    { word: 'USS Squalus', cn: '美国海军潜艇USS Squalus' },
    { word: 'pressure hull', cn: '潜艇的外壳，承受海水压力' },
    { word: 'hydrostatic pressure', cn: '由水柱产生的压力' },
    { word: 'diving bell', cn: '潜水钟，一种用于在水下作业的密闭容器' },
    { word: 'submarine rescue chamber', cn: '潜艇救援舱，一种用于将人员从沉没潜艇中转移的装置' },
    { word: 'decompression', cn: '用于调节气压的装置' },
    { word: 'USS Falcon', cn: '打捞船，用于救援沉没或受损的舰艇' },
    { word: 'submarine rescue crews', cn: '潜艇救援人员' },
    { word: 'Submarine Rescue Diving and Recompression System (SRDRS)', cn: '深潜救援装置' },
    { word: 'International Submarine Escape and Rescue Liaison Office (ISMERLO)', cn: '国际潜艇救援组织' },
  ],
};

export default article;
