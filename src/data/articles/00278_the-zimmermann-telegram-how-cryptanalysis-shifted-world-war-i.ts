import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Zimmermann Telegram: How Cryptanalysis Shifted World War I》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00278 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00278',
  slug: 'the-zimmermann-telegram-how-cryptanalysis-shifted-world-war-i',
  title: 'The Zimmermann Telegram: How Cryptanalysis Shifted World War I',
  subtitle: 'A secret message, a brilliant decryption, and the United States’s turn in the Great War',
  summary: 'How British cryptanalysis of Germany’s diplomatic telegram pushed America into World War I.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In early 1917 the German Empire faced a grim strategic dilemma. The Western Front had become a stalemate, and the British naval blockade was strangling supplies to the civilian population. To break the deadlock, German officials drafted a bold plan that relied on an unlikely ally: <span class="vocab" data-cn="中立的墨西哥">neutral Mexico</span>. The idea was simple yet risky—if the United States entered the war, Germany would encourage Mexico to reclaim lost territories in Texas, New Mexico and Arizona, hoping a two‑front distraction would force America to stay out of Europe.`,
    `The plan was encoded in a diplomatic dispatch sent by German Foreign Secretary Arthur Zimmermann on January 16, 1917. The message traveled from the German embassy in Washington, D.C., across the Atlantic via a secure <span class="vocab" data-cn="密码系统">cipher system</span> known as the “<span class="vocab" data-cn="双字母密码">double‑playfair cipher</span>.” The telegram instructed the Mexican government to await further instructions and promised German financial support if Mexico launched an offensive against the United States. This secret communication was intended for only two eyes: those of the German ambassador in Washington and his counterpart in Berlin.`,
    `Unbeknownst to the Germans, British naval intelligence had already established a sophisticated <span class="vocab" data-cn="情报拦截">interception</span> network known as Room 40. By monitoring transatlantic cables, they routinely captured encrypted German traffic. The Zimmermann Telegram was no exception; on February 1, a British cruiser seized the message as it passed through a neutral Danish cable station. The raw ciphertext arrived at the Admiralty’s cryptographic hub, where a team of mathematicians and linguists set to work.`,
    `The breakthrough came thanks to a combination of luck and skillful <span class="vocab" data-cn="密码分析">cryptanalysis</span>. Among the analysts was Captain William Reginald Hall, who had previously cracked the German naval code “<span class="vocab" data-cn="阿尔弗雷德·克里斯托夫密码">Admiralty Code</span>.” By comparing known German phrases with fragments of the intercepted text, the team reconstructed parts of the cipher key. Within days they produced a readable English translation that revealed Germany’s overture to Mexico and its promise of financial aid. The revelation was both shocking and politically explosive.`,
    `British officials faced a delicate decision: whether to share the decoded telegram with their American allies. President Woodrow Wilson had repeatedly warned that “neutrality” could not be maintained if German aggression threatened U.S. security. After intense diplomatic deliberation, Britain chose to hand over the translation on February 24, 1917, accompanied by a copy of the original ciphertext as proof of authenticity. The United States public, however, would only learn the full story weeks later when the press published the telegram in early March.`,
    `The publication ignited a wave of <span class="vocab" data-cn="宣传">propaganda</span> across American newspapers. Headlines screamed that Germany was plotting to “invade” the United States via Mexico, stoking public outrage and eroding isolationist sentiment. Wilson seized the moment, framing the telegram as evidence of German hostility and using it to rally Congress for a declaration of war. On April 6, 1917, the United States formally entered World I on the side of the Allies—a decision that would tip the balance of power in Europe.`,
    `Historians still debate how decisive the Zimmermann Telegram was compared to other factors such as unrestricted submarine warfare. Nonetheless, the episode illustrates the profound impact of <span class="vocab" data-cn="情报与密码破译">intelligence and cryptanalysis</span> on global events. A single intercepted message, once decoded, reshaped diplomatic calculations, altered public opinion, and ultimately helped bring an end to a conflict that had already claimed millions of lives. The legacy of Room 40’s work lives on in modern signals intelligence agencies, reminding us that the hidden language of war can be as decisive as any battlefield maneuver.`,
  ],
  vocabulary: [
    { word: 'neutral Mexico', cn: '中立的墨西哥' },
    { word: 'cipher system', cn: '密码系统' },
    { word: 'double‑playfair cipher', cn: '双字母密码' },
    { word: 'interception', cn: '情报拦截' },
    { word: 'cryptanalysis', cn: '密码分析' },
    { word: 'propaganda', cn: '宣传' },
    { word: 'intelligence and cryptanalysis', cn: '情报与密码破译' },
  ],
};

export default article;
