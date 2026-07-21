import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Lost Colony of Roanoke: America’s Oldest Unsolved Mystery》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00069 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00069',
  slug: 'the-lost-colony-of-roanoke-america-s-oldest-unsolved-mystery',
  title: 'The Lost Colony of Roanoke: America’s Oldest Unsolved Mystery',
  subtitle: 'A Tale of Hope, Fear, and an Enigmatic Vanishing',
  summary: 'Explore the rise and disappearance of England’s first permanent settlement in the New World.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the English ship *Lion* anchored off the coast of present‑day North Carolina in 1587, a small group of hopeful settlers stepped onto an island that would later be known as Roanoke. Their leader, John White, was tasked with establishing a foothold for <span class="vocab" data-cn="英格兰王室授予的官方文件">colonial charter</span> granted by Sir Walter Raleigh. The colonists imagined a thriving community, yet within three years the entire settlement vanished without a trace, leaving only a single cryptic clue carved into a post: “CROATOAN.”`,
    `The venture was not an isolated gamble; it was part of a broader wave of English expansion during the <span class="vocab" data-cn="文艺复兴时期的英格兰">English Renaissance</span>. Sir Walter Raleigh, a favorite of Queen Elizabeth I, secured a <span class="vocab" data-cn="官方授权文件，允许在新大陆建立殖民地">charter</span> that promised wealth from gold and the spread of Protestantism. He dispatched three expeditions before 1587, each learning more about the harsh Atlantic currents, hostile climate, and the complex network of <span class="vocab" data-cn="原住民族">indigenous</span> peoples already inhabiting the region.`,
    `The Roanoke settlement itself was modest: roughly a dozen families, skilled craftsmen, and a handful of soldiers. They chose the island for its natural harbor and proximity to the mainland village of Croatoan (now Hatteras Island), hoping to trade with the friendly <span class="vocab" data-cn="当地的土著部落">Croatan</span> tribe. John White’s wife, Eleanor, gave birth to a daughter named Virginia—after the “Virgin Queen”—who would become the first English child born in America. The colonists erected simple timber structures and began clearing fields, but supplies from England were scarce, and communication with the motherland was unreliable.`,
    `In August 1590, White finally returned after a perilous voyage to England for provisions. He found Roanoke deserted; the houses stood empty, doors ajar, and the word “CROATOAN” etched into a wooden post, while another post bore the letters “C.” No signs of struggle or fire were evident. The absence of any bodies or belongings deepened the mystery. Contemporary accounts labeled the event as a “great loss,” yet they offered no concrete explanation beyond the unsettling inscription that hinted at relocation to Croatoan Island.`,
    `Historians have proposed numerous theories to explain the disappearance. One popular hypothesis suggests the colonists integrated with the <span class="vocab" data-cn="当地的土著部落">Croatan</span> tribe, adopting their customs and disappearing from English records. Another posits that a Spanish raid—prompted by Spain’s own colonial ambitions in Florida—might have destroyed the settlement, though no Spanish documents corroborate such an attack. Some scholars argue disease or starvation forced the survivors to abandon Roanoke for the mainland, while others speculate they attempted to return to England aboard a makeshift vessel and were lost at sea. Each theory rests on fragmentary <span class="vocab" data-cn="原始历史记录">primary sources</span> and educated conjecture.`,
    `Modern archaeology has breathed new life into the investigation. Researchers employ ground‑penetrating radar, DNA analysis of remains found in nearby burial sites, and meticulous examination of artifacts recovered from both Roanoke Island and Croatoan Island. In 1998, a team uncovered a possible English copper alloy button near the original settlement site, hinting at continued occupation after White’s departure. More recently, genetic testing on descendants of the Croatan tribe revealed traces of European ancestry that could align with an early 17th‑century admixture, though definitive proof remains elusive.`,
    `The story of Roanoke endures not only as a historical puzzle but also as a cautionary tale about colonial ambition and cultural encounter. It reminds us that the narratives we inherit are often incomplete, shaped by the perspectives of those who recorded them. As scholars continue to blend traditional historiography with cutting‑edge scientific methods, the hope persists that someday the silent voices of Roanoke’s lost colonists will finally be heard. Until then, “CROATOAN” remains a haunting emblem of America’s oldest unsolved mystery.`,
  ],
  vocabulary: [
    { word: 'colonial charter', cn: '英格兰王室授予的官方文件' },
    { word: 'English Renaissance', cn: '文艺复兴时期的英格兰' },
    { word: 'indigenous', cn: '原住民族' },
    { word: 'Croatan', cn: '当地的土著部落' },
    { word: 'primary source', cn: '原始历史记录' },
    { word: 'archaeology', cn: '考古学' },
  ],
};

export default article;
