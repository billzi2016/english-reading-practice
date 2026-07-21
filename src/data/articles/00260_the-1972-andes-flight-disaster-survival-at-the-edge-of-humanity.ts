import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1972 Andes Flight Disaster: Survival at the Edge of Humanity》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00260 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00260',
  slug: 'the-1972-andes-flight-disaster-survival-at-the-edge-of-humanity',
  title: 'The 1972 Andes Flight Disaster: Survival at the Edge of Humanity',
  subtitle: 'A gripping true‑story of endurance in one of the world’s most unforgiving mountain ranges.',
  summary: 'When a Uruguayan rugby team’s plane crashed in the Andes, survivors faced cold, hunger and moral dilemmas before being rescued.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `On October 13, 1972, a Fairchild FH‑227D of the Uruguayan Air Force—carrying 45 passengers, most of them members of a rugby club—took off from Montevideo bound for Santiago. A sudden miscalculation in navigation sent the aircraft into the remote <span class="vocab" data-cn="安第斯山脉">Andes Mountains</span>, where it slammed into a snow‑covered slope at an altitude of roughly 3,600 meters, killing many on impact and leaving the survivors stranded in a frozen wasteland.`,
    `The crash site was a bleak plateau surrounded by towering peaks and deep crevasses. Temperatures plunged well below freezing each night, and the thin air caused severe <span class="vocab" data-cn="高原反应">altitude sickness</span>. With no shelter beyond the twisted fuselage, the group fashioned makeshift tents from seat cushions and aircraft blankets, battling wind that could strip away even the smallest layer of warmth.`,
    `Rescue teams launched a massive <span class="vocab" data-cn="搜救行动">search and rescue</span> operation, combing the mountains for any sign of life. Unfortunately, the plane’s <span class="vocab" data-cn="无线电信标">radio beacon</span> had been damaged in the impact, leaving no electronic trace. Days turned into weeks; after eight days the official search was called off, and the survivors faced a grim reality: they were on their own.`,
    `Faced with dwindling supplies—only a few chocolate bars, some wine, and a handful of biscuits—the group made an agonizing decision to resort to <span class="vocab" data-cn="食人">cannibalism</span>, using the bodies of those who had perished as their only source of protein. This choice sparked intense moral conflict but ultimately kept them alive long enough to consider a daring plan: two of the strongest men, Nando Parrado and Roberto Canessa, would attempt a trek across the mountains in search of help.`,
    `The expedition began on December 12, when Parrado and Canessa set out with only a thin coat, a map sketched from memory, and an unsteady sense of direction. Their route forced them onto a treacherous <span class="vocab" data-cn="冰川">glacier</span>, where hidden crevasses threatened to swallow them whole. Each step at such altitude strained their lungs, intensifying the effects of altitude sickness, while the lack of food left them weak and delirious. After ten days of relentless climbing, they finally sighted a Chilean shepherd’s hut, confirming that civilization lay beyond the peaks.`,
    `The shepherd, moved by their story, alerted authorities in the nearby town of Curacautín. Within hours, a Chilean rescue team descended into the crash zone, air‑dropping supplies and eventually extracting all remaining survivors. In total, 16 people lived to tell the tale—a testament not only to physical endurance but also to the complex <span class="vocab" data-cn="生存心理学">survival psychology</span> that can emerge when hope seems impossible.` ,
    `The Andes disaster has since become a case study in emergency medicine, ethics, and wilderness training. Debates about the morality of cannibalism continue, yet most scholars agree that the survivors’ actions were driven by an instinct to stay alive under extraordinary circumstances. Their story reminds us that human resilience can stretch to astonishing limits when faced with nature’s harshest challenges.`
  ],
  vocabulary: [
    { word: 'Andes Mountains', cn: '安第斯山脉' },
    { word: 'altitude sickness', cn: '高原反应' },
    { word: 'search and rescue', cn: '搜救行动' },
    { word: 'radio beacon', cn: '无线电信标' },
    { word: 'cannibalism', cn: '食人' },
    { word: 'glacier', cn: '冰川' },
    { word: 'survival psychology', cn: '生存心理学' }
  ],
};

export default article;
