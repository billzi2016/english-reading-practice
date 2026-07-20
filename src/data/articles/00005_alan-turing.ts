import type { Article } from '../../types/index.ts';

// 文件意图：维护《Alan Turing》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00005 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00005',
    slug: 'alan-turing',
    title: 'Alan Turing',
    subtitle: 'The Father of Computer Science',
    subtitle2: 'Born: June 23, 1912 · London, England',
    summary: 'The father of computer science cracked Nazi codes, imagined AI — then was persecuted by the country he saved.',
    category: 'biography',
    difficulty: 'intermediate',
    readingMinutes: 6,
    paragraphs: [
      `In 1936, a 24-year-old Cambridge mathematician published a paper that would change the world. The paper, "On Computable Numbers," described a hypothetical machine — now called a <span class="vocab" data-cn="图灵机（一种理论上的计算模型，奠定了现代计算机的数学基础）">Turing machine</span> — that could, in theory, compute anything that is computable. This was the mathematical blueprint for every computer ever built. The mathematician's name was Alan Turing.`,
      `Turing's concept was abstract but profound. He imagined a machine that reads symbols on a tape, follows rules, and writes new symbols. Simple as that sounds, he proved that such a machine — given enough tape and time — could simulate any other computational process. This is the foundation of what we call <span class="vocab" data-cn="通用计算（能执行任意计算任务的能力）">universal computation</span>: the idea that one machine can emulate any other machine.`,
      `When World War II began, Britain needed Turing's mind more than ever. He joined <span class="vocab" data-cn="布莱切利园（二战时期英国密码破译中心）">Bletchley Park</span>, the top-secret codebreaking center in Buckinghamshire. The Germans were using an encryption machine called <span class="vocab" data-cn="英格玛密码机（德国军队使用的加密通信设备）">Enigma</span> to communicate, and the Allies could not read their messages. Turing and his team built an electromechanical device called the <span class="vocab" data-cn="炸弹机（用于破解英格玛密码的机器）">Bombe</span> that could, in hours, find the daily Enigma settings — breaking the code that the Germans thought was unbreakable.`,
      `Historians estimate that Turing's work at Bletchley Park shortened World War II by two to four years and saved millions of lives. Winston Churchill reportedly said that Turing made the single biggest contribution to Allied victory of any individual. After the war, Turing moved to Manchester, where he helped design one of the world's first stored-program computers.`,
      `In 1950, Turing published another landmark paper: "Computing Machinery and Intelligence." It opened with a deceptively simple question: "Can machines think?" He proposed what he called the <span class="vocab" data-cn="模仿游戏（后来称为图灵测试，用于判断机器是否具有人类级别智能的测试）">Imitation Game</span> — later known as the Turing Test — as a way to evaluate machine intelligence. The test remains a touchstone of artificial intelligence philosophy to this day.`,
      `In 1952, Turing was arrested. His crime: <span class="vocab" data-cn="严重猥亵罪（英国当时将同性性行为定为犯罪）">gross indecency</span> — the British legal term for homosexual acts, which were criminal at the time. He was given a choice between prison and chemical <span class="vocab" data-cn="化学阉割（通过注射药物抑制性激素的惩罚措施）">castration</span> through hormone injections. He chose the injections. His security clearance was revoked. He was banned from his own work.`,
      `On June 7, 1954, Alan Turing was found dead. A half-eaten apple was found beside him, and the <span class="vocab" data-cn="验尸官（负责调查非自然死亡的官员）">coroner</span> ruled it suicide by cyanide poisoning. He was 41 years old. Some believe the apple was a reference to Snow White — the poisoned apple — and that it was a final act of dark poetry from a man who had spent his life thinking in symbols.`,
      `In 2009, British Prime Minister Gordon Brown issued a formal apology for Turing's treatment. In 2013, Queen Elizabeth II granted him a posthumous royal pardon. Today, Turing appears on the British £50 note — the country's highest-denomination bill. The computer science world's most prestigious award, given annually by the ACM, is called the Turing Award. It is often described as "the Nobel Prize of computing."`,
    ],
    vocabulary: [
      { word: 'universal computation', cn: '通用计算' },
      { word: 'encryption', cn: '加密' },
      { word: 'codebreaking', cn: '密码破译' },
      { word: 'posthumous', cn: '死后的，遗腹的' },
      { word: 'coroner', cn: '验尸官' },
      { word: 'indecency', cn: '猥亵，有伤风化' },
      { word: 'castration', cn: '阉割' },
    ],
  };

export default article;
