import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Mary Celeste: Unraveling the Greatest Maritime Mystery of the 19th Century》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00191 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00191',
  slug: 'the-mary-celeste-unraveling-the-greatest-maritime-mystery-of-the-19th-century',
  title: 'The Mary Celeste: Unraveling the Greatest Maritime Mystery of the 19th Century',
  subtitle: 'A Voyage Into One Of History’s Most Baffling Sea Stories',
  summary: 'Explore the eerie disappearance of the Mary Celeste and the clues that have haunted investigators for more than a century.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In early December 1872, the American merchant brigantine <span class="vocab" data-cn="双桅帆船">Mary Celeste</span> was spotted drifting under a clear sky off the coast of Portugal. Her sails were set, her hull intact, yet there was no sign of crew on deck. The sighting by the British ship Northerner sparked what would become one of the most enduring maritime enigmas of the 19th century.`,
    `When the Northerner’s captain boarded the ghostly vessel, he found a pristine <span class="vocab" data-cn="货舱">cargo hold</span> filled with barrels of denatured alcohol—still sealed and untouched. The ship’s logbook was neatly kept up to November 25, the day before she left New York. However, personal belongings were scattered: a set of clothing lay on the deck, a <span class="vocab" data-cn="厨房">galley</span> stove still warm, and a cracked <span class="vocab" data-cn="航海时计">chronometer</span> stopped at 9 p.m., suggesting an abrupt interruption.`,
    `Investigators soon learned that the ship’s owner, James Cunningham, had purchased the vessel only months earlier. He renamed her from the ill‑fated *Amazon* to *Mary Celeste*, hoping a new name would bring better luck. The crew consisted of Captain Benjamin Briggs, his wife Sarah, their young daughter Sophia, and a small team of experienced sailors. All were seasoned mariners with no known history of <span class="vocab" data-cn="叛变">mutiny</span> or criminal activity, which deepened the mystery when they vanished without a trace.`,
    `One theory that gained early traction involved the dangerous cargo itself. Denatured alcohol emits flammable vapors; a small spark could have ignited an explosion, forcing the crew to abandon ship in a panic. Yet no scorch marks were found on the deck, and the lifeboat remained securely tied. Moreover, the <span class="vocab" data-cn="救生艇">lifeboat</span> showed no signs of recent use—no waterlogged ropes or seaweed clinging to its hull—making a hurried escape unlikely.`,
    `Another popular speculation centered on the phenomenon of the “<span class="vocab" data-cn="幽灵船">phantom ship</span>.” Sailors of the era sometimes reported seeing luminous apparitions that seemed to lure vessels into dangerous waters. Some accounts suggested that a sudden fog bank could have disoriented the crew, leading them to believe the ship was sinking when it was not. Yet modern oceanographic studies indicate that the weather on December 4‑5 was relatively calm, and no contemporaneous logs from nearby ships mention an unusual fog or strange lights.`,
    `Legal complications added a further layer of intrigue. Under maritime law, the right to claim a derelict vessel—known as <span class="vocab" data-cn="打捞权">salvage rights</span>—was contested fiercely. The owners of Mary Celeste filed a lawsuit against the Northerner’s crew for taking possession of the ship without proper authority. The court ultimately ruled that the Northerner had acted in good faith, but the case highlighted how economic incentives could sometimes cloud objective investigation.`,
    `To this day, scholars continue to debate the most plausible explanation. Some modern researchers employ computer simulations of sea currents and wind patterns, concluding that a sudden wave could have capsized the ship’s small boat, leaving the crew stranded at sea while the vessel drifted on its own. Others point to psychological stress: Captain Briggs was known for his strict discipline; a hidden conflict among the crew might have escalated into an unrecorded <span class="vocab" data-cn="叛变">mutiny</span>, after which the ship was abandoned. Whatever the truth, the Mary Celeste remains a haunting reminder that even in an age of expanding scientific knowledge, some mysteries still sail beyond our grasp.`,
  ],
  vocabulary: [
    { word: 'brigantine', cn: '双桅帆船' },
    { word: 'cargo hold', cn: '货舱' },
    { word: 'galley', cn: '厨房' },
    { word: 'chronometer', cn: '航海时计' },
    { word: 'mutiny', cn: '叛变' },
    { word: 'phantom ship', cn: '幽灵船' },
    { word: 'salvage rights', cn: '打捞权' },
  ],
};

export default article;
