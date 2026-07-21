import type { Article } from '../../types/index.ts';

// 文件意图：维护《Decoding Linear B: Unraveling the Lost Script of Mycenaean Greece》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00038 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00038',
  slug: 'decoding-linear-b-unraveling-the-lost-script-of-mycenaean-greece',
  title: 'Decoding Linear B: Unraveling the Lost Script of Mycenaean Greece',
  subtitle: 'How a wartime code‑breaker unlocked an ancient language',
  summary: 'The story of how Linear B was deciphered and what it revealed about Bronze Age Greece.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1900s, archaeologists excavating the palace at Knossos on Crete uncovered thousands of clay fragments covered in mysterious symbols. These artifacts, later called <span class="vocab" data-cn="线形文字B">Linear B</span> tablets, were initially dismissed as decorative doodles because no one could read them. The sheer volume of the shards—over 30,000 pieces—suggested a sophisticated record‑keeping system hidden beneath the palace floors, waiting for someone to crack its code.`,
    `Unlike alphabetic scripts that assign a single letter to each sound, <span class="vocab" data-cn="音节文字">syllabary</span> systems use symbols to represent whole syllables. Linear B consists of about 90 signs, each standing for a consonant‑vowel pair such as “pa” or “ke.” This structure links it to the earlier <span class="vocab" data-cn="线形文字A">Linear A</span>, an undeciphered script used by the Minoans. The challenge lay in determining whether Linear B recorded a known language or an entirely lost tongue.`,
    `Enter Michael Ventris, a British architect and World War II veteran with a talent for cryptanalysis. After serving as a radar operator, Ventris turned his analytical mind to the tablets, treating them like a secret code. He noticed recurring groups of signs that behaved like proper nouns—perhaps names of places or officials—and began assigning provisional phonetic values based on patterns he observed in other ancient scripts such as <span class="vocab" data-cn="楔形文字">cuneiform</span>.`,
    `Ventris soon realized he needed a linguistic partner, and he enlisted the help of classicist John Chadwick. Together they compared the tentative readings with known Mycenaean place names recorded by later Greek historians. Their breakthrough came when Ventris proposed that the sign cluster “a‑po‑ro” actually read “aporo,” matching the ancient city of <span class="vocab" data-cn="阿波罗尼亚">Aporos</span>. This alignment confirmed that Linear B was an early form of Greek, making it the oldest known example of the language. Their joint publication in 1953 cemented the success of their <span class="vocab" data-cn="破译">decipherment</span> effort.`,
    `The deciphered tablets revealed a vivid picture of Mycenaean life. Most entries turned out to be administrative records: inventories of grain, oil, and livestock; allocations of labor for palace workshops; and lists of tribute from subordinate towns. This “<span class="vocab" data-cn="宫廷经济">palace economy</span>” shows that the Mycenaean world was centrally organized, with the king’s court directing production and distribution across a network of estates. Such insights overturned earlier notions that Bronze Age Greece was merely a collection of isolated chiefdoms.`,
    `Following Ventris and Chadwick’s work, archaeologists revisited sites like Pylos, where additional Linear B tablets were found in the “Palace of Nestor.” Each new fragment added nuance to our understanding of Mycenaean trade routes, religious practices, and even early forms of Greek mythology. The decipherment also sparked interdisciplinary collaborations, encouraging linguists, computer scientists, and material analysts to apply modern techniques—such as digital imaging and statistical modeling—to ancient scripts.`,
    `Today, Linear B stands as a testament to the power of curiosity and cross‑disciplinary teamwork. By turning clay shards into readable text, Ventris and Chadwick opened a window onto a civilization that existed over three millennia ago, reshaping our narrative of Greek history. Their story reminds us that even the most obscure artifacts can hold the keys to entire worlds—if we have the patience to listen to their silent voices.`,
  ],
  vocabulary: [
    { word: 'Linear B', cn: '线形文字B' },
    { word: 'syllabary', cn: '音节文字' },
    { word: 'cuneiform', cn: '楔形文字' },
    { word: 'decipherment', cn: '破译' },
    { word: 'Mycenaean', cn: '迈锡尼文明的' },
    { word: 'palace economy', cn: '宫廷经济' },
  ],
};

export default article;
