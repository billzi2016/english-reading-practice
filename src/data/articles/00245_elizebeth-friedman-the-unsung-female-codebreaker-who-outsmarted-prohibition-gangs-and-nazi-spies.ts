import type { Article } from '../../types/index.ts';

// 文件意图：维护《Elizebeth Friedman: The Unsung Female Codebreaker Who Outsmarted Prohibition Gangs and Nazi Spies》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00245 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00245',
  slug: 'elizebeth-friedman-the-unsung-female-codebreaker-who-outsmarted-prohibition-gangs-and-nazi-spies',
  title: 'Elizebeth Friedman: The Unsung Female Codebreaker Who Outsmarted Prohibition Gangs and Nazi Spies',
  subtitle: 'A Tale of Cryptanalysis, Courage, and Hidden History',
  summary: 'Discover how Elizebeth Friedman cracked bootlegger codes and helped defeat Nazi espionage long before women were celebrated in intelligence.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `Born in 1892 on a modest farm in Indiana, <span class="vocab" data-cn="密码学">cryptanalysis</span> was not a word Elizebeth would have heard as a child. Yet her early fascination with puzzles—solving riddles for schoolmates and decoding secret messages in friends’ letters—foreshadowed a career that would later reshape American law enforcement. After graduating from Hillsdale College, she met William Friedman, a mathematician whose own interest in ciphers matched hers; the two married in 1917 and formed a partnership that blended love with relentless intellectual curiosity.`,
    `The couple’s first major test arrived during the era of <span class="vocab" data-cn="禁酒令时期的走私组织">rum‑running syndicates</span>. The Volstead Act had turned ordinary citizens into bootleggers, and organized crime responded by using simple substitution ciphers to hide shipment schedules. While most agents dismissed these codes as amateurish, Elizebeth recognized patterns in the intercepted telegrams. By painstakingly constructing a <span class="vocab" data-cn="密码本">codebook</span> from known phrases, she began to <span class="vocab" data-cn="破译">decipher</span> messages that revealed the routes of illegal liquor shipments across state lines.`,
    `Her breakthroughs did not go unnoticed. In 1925, the U.S. Treasury Department’s Bureau of Prohibition recruited her as a consultant. Working from a cramped office in Washington, D.C., she and William built what would become one of the first systematic <span class="vocab" data-cn="情报机构">intelligence agencies</span> dedicated to signals intelligence. Their methods—frequency analysis, pattern recognition, and cross‑referencing with known criminal activities—allowed authorities to raid hidden distilleries and seize millions of dollars’ worth of contraband, effectively choking the lifeblood of many bootlegging empires.`,
    `The success against domestic criminals earned Elizebeth a reputation for tenacity, but it was her work during World War II that cemented her place in history. After the United States entered the war, she joined the Office of Strategic Services (OSS), the precursor to today’s CIA. There, she tackled far more sophisticated encryption used by the <span class="vocab" data-cn="纳粹间谍网络">Nazi spy network</span> operating in South America. These agents employed a variant of the Enigma machine, but with fewer rotors and custom plugboard settings that made traditional decryption tools ineffective.`,
    `Undeterred, Elizebeth applied her deep understanding of human behavior to the problem. She hypothesized that the spies would embed predictable phrases—such as greetings or references to common trade goods—in their messages. By compiling a list of likely “cribs” and aligning them with intercepted ciphertext, she managed to break several critical communications. The resulting intelligence exposed covert supply routes for German U‑boats and led to the arrest of dozens of agents who had been operating under diplomatic cover.`,
    `Despite these monumental achievements, Elizebeth’s contributions remained largely hidden from public view for decades. The culture of secrecy surrounding cryptographic work meant that even her own family knew little about the specifics of her missions. It was not until the 1990s, when declassified documents were finally released, that scholars began to recognize her as a pioneer who helped lay the groundwork for modern cyber‑security practices and signal intelligence techniques used today.`,
    `Today, Elizebeth Friedman’s legacy lives on in classrooms where students learn about the origins of cryptanalysis, and in museums that honor the unsung women of World War II. Her story reminds us that breakthroughs often arise from curiosity, perseverance, and a willingness to look beyond conventional wisdom—qualities as essential now as they were when she first cracked a bootlegger’s code on a rainy night in the 1920s.`,
  ],
  vocabulary: [
    { word: 'cryptanalysis', cn: '密码学' },
    { word: 'rum‑running syndicates', cn: '禁酒令时期的走私组织' },
    { word: 'codebook', cn: '密码本' },
    { word: 'decipher', cn: '破译' },
    { word: 'intelligence agency', cn: '情报机构' },
    { word: 'Nazi spy network', cn: '纳粹间谍网络' },
  ],
};

export default article;
