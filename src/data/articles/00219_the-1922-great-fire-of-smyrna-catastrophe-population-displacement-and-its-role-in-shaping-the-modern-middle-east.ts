import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1922 Great Fire of Smyrna: Catastrophe, Population Displacement, and Its Role in Shaping the Modern Middle East》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00219 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00219',
  slug: 'the-1922-great-fire-of-smyrna-catastrophe-population-displacement-and-its-role-in-shaping-the-modern-middle-east',
  title: 'The 1922 Great Fire of Smyrna: Catastrophe, Population Displacement, and Its Role in Shaping the Modern Middle East',
  subtitle: 'How a single blaze reshaped borders, identities, and refugee policies.',
  summary: 'An exploration of the 1922 fire that razed Smyrna, its human toll, and its lasting impact on the politics of the Near East.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In early September 1922, as Turkish forces entered the coastal city known then as <span class="vocab" data-cn="伊兹密尔">Smyrna</span>, a massive conflagration erupted that would become infamous as the <span class="vocab" data-cn="大火灾">Great Fire</span>. The blaze consumed the historic waterfront quarter, where Greeks and Armenians had lived for centuries, turning stone streets into rivers of ash. Contemporary witnesses described how the fire seemed to spread with a will of its own, fed by strong winds and the densely packed wooden houses that lined the harbor.`,
    `The origins of the fire remain fiercely debated. Turkish nationalists argued it was an accidental outbreak sparked by stray artillery shells, while Greek survivors insisted it was a deliberate act of retaliation against the newly victorious army. Historians today note that both sides had motives: the Turkish leadership sought to cement control over a strategic port, whereas the departing Greek administration feared losing its remaining foothold in Anatolia after the collapse of the <span class="vocab" data-cn="希腊-土耳其战争">Greco‑Turkish War</span>.`,
    `Regardless of intent, the immediate human cost was staggering. Within days, an estimated 100,000 to 150,000 civilians—predominantly Greeks, Armenians, and some Assyrians—found themselves homeless, their possessions reduced to soot. The chaotic evacuation saw thousands boarding hastily assembled boats under a sky thick with smoke, while others attempted the perilous trek inland toward the <span class="vocab" data-cn="希腊领土">Greek occupation zone</span> in the north. This mass movement marked one of the first large‑scale instances of <span class="vocab" data-cn="人口流离失所">population displacement</span> in the post‑World War I era.`,
    `International reaction was swift but uneven. The British and French naval forces, still present under the terms of the <span class="vocab" data-cn="塞夫尔条约">Treaty of Sèvres</span>, dispatched ships to rescue refugees, yet their efforts were hampered by limited capacity and political hesitation. Meanwhile, American missionaries and journalists documented the tragedy, sending vivid reports back to Western newspapers that sparked public outcry and humanitarian appeals. These accounts helped shape early 20th‑century perceptions of the “Eastern Question” and fueled debates over minority rights in the collapsing Ottoman realm.`,
    `The fire’s aftermath accelerated a series of forced migrations that reshaped the demographic map of the eastern Mediterranean. By 1923, the <span class="vocab" data-cn="人口交换协议">population exchange</span> between Greece and Turkey—mandated by the Treaty of Lausanne—formalized the removal of nearly two million Greeks from Anatolia and a comparable number of Muslims from Greek islands. Smyrna’s former cosmopolitan character vanished, replaced by a homogenized Turkish population that would later become central to the nation‑building narrative of the Republic.`,
    `Beyond immediate demographics, the tragedy left an indelible imprint on regional politics. The memory of loss fueled Greek irredentist sentiment for decades, influencing diplomatic stances during the Cold War and even affecting Greece’s stance toward Turkey in contemporary disputes over airspace and maritime boundaries. For Turkey, the successful capture and “cleansing” of Smyrna became a cornerstone myth of the new republic, celebrated in official histories as a triumph of <span class="vocab" data-cn="民族主义">nationalism</span> and sovereignty.`,
    `In modern scholarship, the Great Fire is often examined as an early case study of how urban catastrophes can trigger refugee crises, alter international law, and reshape collective identities. It underscores the fragile interplay between military conquest, ethnic politics, and humanitarian response—a pattern that repeats in later conflicts across the Middle East. By tracing the fire’s ripple effects from 1922 to today, we gain insight into why the legacy of Smyrna continues to influence diplomatic negotiations, diaspora narratives, and the very concept of nationhood in the region.`
  ],
  vocabulary: [
    { word: 'Great Fire', cn: '大火灾' },
    { word: 'Smyrna', cn: '伊兹密尔（古称）' },
    { word: 'population displacement', cn: '人口流离失所' },
    { word: 'Treaty of Sèvres', cn: '塞夫尔条约' },
    { word: 'Greco‑Turkish War', cn: '希腊-土耳其战争' },
    { word: 'nationalism', cn: '民族主义' }
  ],
};

export default article;
