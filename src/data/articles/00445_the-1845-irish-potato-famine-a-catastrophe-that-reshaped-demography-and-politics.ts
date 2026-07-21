import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1845 Irish Potato Famine: A Catastrophe That Reshaped Demography and Politics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00445 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00445',
  slug: 'the-1845-irish-potato-famine-a-catastrophe-that-reshaped-demography-and-politics',
  title: 'The 1845 Irish Potato Famine: A Catastrophe That Reshaped Demography and Politics',
  subtitle: 'How a crop disease triggered massive loss of life, migration, and political change.',
  summary: 'An engaging narrative about the Great Famine’s causes, human toll, and lasting impact on Ireland and the world.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the autumn of 1845 a mysterious disease began to spread across the Irish countryside. The culprit was <span class="vocab" data-cn="枯萎病">potato blight</span>, a fungal pathogen that turned healthy tubers into black, rotting masses within days. Potatoes had become the staple food for most of Ireland’s rural population because they could be grown on small plots and yielded high calories per acre. When the blight struck, it instantly threatened the very foundation of Irish <span class="vocab" data-cn="生计">subsistence</span> farming.`,
    `The famine’s impact was amplified by the structure of land ownership in pre‑Famine Ireland. Most peasants were <span class="vocab" data-cn="佃农">tenant farmers</span> who rented tiny plots from absentee <span class="vocab" data-cn="地主">landlords</span>. Rent contracts often required a fixed payment regardless of harvest size, so when the potatoes failed, tenants could not meet their obligations. Many landlords chose to evict families rather than reduce rents, leading to a wave of forced clearances that scattered entire villages into the countryside and onto the streets of Dublin and Belfast.`,
    `As food supplies dwindled, disease spread like wildfire. Overcrowded workhouses—government‑run institutions meant to shelter the destitute—became breeding grounds for <span class="vocab" data-cn="霍乱">cholera</span> and typhus. Mortality rates surged; historians estimate that between 1845 and 1852 more than one million people died from starvation or disease, while another million fled the island in search of a better life. This massive loss of life represented roughly a tenth of Ireland’s pre‑Famine population, a demographic shock that reshaped family structures for generations.`,
    `The exodus was not random; it followed well‑established routes to North America, Australia, and Britain. Ships packed with emigrants were often called “coffin ships” because of the high mortality aboard due to cramped conditions and inadequate provisions. Yet even in death, these voyages altered global demographics: Irish communities sprang up in New York’s Five Points, Toronto’s Corktown, and Melbourne’s Little Ireland, leaving cultural footprints that persist today.`,
    `Back home, the famine sparked a new wave of <span class="vocab" data-cn="政治激进主义">political agitation</span>. The British government’s response—initially limited to sporadic soup kitchens and later to large‑scale public works—was widely criticized as too little, too late. Irish nationalist leaders such as Daniel O’Connell’s successors used the tragedy to argue that Ireland could not survive under a distant parliament that prioritized market interests over human lives. The famine thus became a rallying cry for the Home Rule movement and later for more radical republican groups.`,
    `Relief efforts also gave rise to organized <span class="vocab" data-cn="救济委员会">relief committees</span> both in Ireland and abroad. Charitable societies in America, Canada, and Britain raised funds, sent food shipments, and lobbied politicians. While these initiatives saved countless lives, they also highlighted the growing capacity of civil society to mobilize resources across borders—a precursor to modern humanitarian NGOs.`,
    `The legacy of the Great Famine is still visible in Ireland’s demographic profile. Rural depopulation accelerated after 1850, leading to a concentration of population in urban centers like Dublin and Cork. The diaspora created transatlantic networks that facilitated later waves of migration and investment. Politically, the memory of famine‑induced suffering remains a potent symbol in Irish identity, invoked during debates on sovereignty, land reform, and social welfare.`,
    `Today, scholars continue to study the 1845–1852 crisis not only as a historical tragedy but also as a case study in how agricultural monoculture, colonial policy, and socioeconomic inequality can combine to produce catastrophic outcomes. The lessons learned inform contemporary discussions about food security, climate‑induced crop failures, and the responsibility of governments to protect vulnerable populations.`,
  ],
  vocabulary: [
    { word: 'potato blight', cn: '枯萎病' },
    { word: 'subsistence', cn: '生计' },
    { word: 'tenant farmer', cn: '佃农' },
    { word: 'landlord', cn: '地主' },
    { word: 'cholera', cn: '霍乱' },
    { word: 'political agitation', cn: '政治激进主义' },
    { word: 'relief committees', cn: '救济委员会' },
  ],
};

export default article;
