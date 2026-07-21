import type { Article } from '../../types/index.ts';

// 文件意图：维护《Navajo Code Talkers: Indigenous Language as a Secret Weapon in World War II》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00426 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00426',
  slug: 'navajo-code-talkers-indigenous-language-as-a-secret-weapon-in-world-war-ii',
  title: 'Navajo Code Talkers: Indigenous Language as a Secret Weapon in World War II',
  subtitle: 'How an ancient tongue became the Allies\' most unbreakable code.',
  summary: 'The story of Navajo speakers who turned their language into a battlefield cipher that baffled Japanese cryptanalysts.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the United States entered World War II after Pearl Harbor, the <span class="vocab" data-cn="海军陆战队">Marine Corps</span> faced a terrifying problem: Japanese forces were cracking every radio transmission. Traditional encryption methods like the Enigma‑style rotors or simple substitution ciphers proved vulnerable to systematic <span class="vocab" data-cn="密码分析">cryptanalysis</span>. In desperation, military planners turned to an unlikely source—America’s own Indigenous peoples—hoping that a language unknown to the enemy could become a living, unbreakable code.`,
    `The Navajo language offered exactly what the U.S. needed. It contains over 30 distinct <span class="vocab" data-cn="音位">phoneme</span> clusters, many of which have no equivalent in English or Japanese, and it is tonal, meaning pitch changes alter meaning. Moreover, Navajo was an oral language with very few written records, making it virtually invisible to foreign linguists. These linguistic features turned the language into a natural <span class="vocab" data-cn="密码系统">cipher</span> that could not be easily catalogued or decoded.`,
    `In early 1942, twenty‑nine young Navajo men were recruited at the Naval Training Center in San Diego and sent to Camp Pendleton for intensive instruction. They became known as <span class="vocab" data-cn="密码员">code talkers</span>. Their training was twofold: first they learned standard military terminology in English, then they devised a parallel Navajo code where each key concept—tank, artillery, aircraft—was assigned a unique Navajo word or phrase. For example, “submarine” became “iron fish,” and “fighter plane” turned into “hummingbird.”`,
    `The resulting code was not a simple translation but a layered system of semantic substitution. By using metaphorical terms that only the talkers understood, the code added an extra shield of <span class="vocab" data-cn="密码系统">cipher</span> complexity. Even if an enemy intercepted a message and recognized it as Navajo, they would still need to decipher the cultural references embedded within each phrase—a task no Japanese cryptanalyst could accomplish during the war.`,
    `The Navajo Code Talkers first saw combat on Guadalcanal in 1943, and their success quickly spread across the <span class="vocab" data-cn="太平洋战区">Pacific Theater</span>. They played crucial roles in the battles of Saipan, Iwo Jima, and Okinawa, transmitting real‑time tactical orders that saved countless lives. Japanese forces repeatedly attempted to break the code but failed; their intelligence reports later admitted they could not even identify the language being spoken. The talkers’ swift, accurate messages gave Allied commanders a decisive edge in fast‑moving island assaults.`,
    `After the war, the existence of the Navajo code was classified for decades, and many of the original talkers were sworn to secrecy until 1968. When the program finally declassified, the United States began honoring these veterans with medals, commendations, and a Congressional Gold Medal in 2001. Their story emerged as a powerful reminder that cultural diversity can be a strategic asset, not just a social ideal.`,
    `Today, the legacy of the Navajo Code Talkers influences modern cybersecurity and linguistic preservation efforts. Researchers study how natural languages can inspire robust encryption algorithms, while the Navajo Nation invests in language revitalization programs to ensure that the same tongue that once saved soldiers continues to thrive for future generations. The talkers’ experience demonstrates that an ancient language, when paired with ingenuity, can become a secret weapon of unparalleled effectiveness.`,
  ],
  vocabulary: [
    { word: 'code talker', cn: '密码员' },
    { word: 'phoneme', cn: '音位' },
    { word: 'cipher', cn: '密码系统' },
    { word: 'Pacific Theater', cn: '太平洋战区' },
    { word: 'cryptanalysis', cn: '密码分析' },
    { word: 'Marine Corps', cn: '海军陆战队' },
  ],
};

export default article;
