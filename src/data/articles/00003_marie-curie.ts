import type { Article } from '../../types/index.ts';

// 文件意图：维护《Marie Curie》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00003 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00003',
    slug: 'marie-curie',
    title: 'Marie Curie',
    subtitle: 'Two Nobel Prizes, One Extraordinary Life',
    subtitle2: 'Born: November 7, 1867 · Warsaw, Poland',
    summary: 'The only person to win Nobel Prizes in two different sciences — and she had to fight twice as hard.',
    category: 'biography',
    difficulty: 'intermediate',
    readingMinutes: 5,
    paragraphs: [
      `Marie Curie is the only person in history to win the Nobel Prize in two different scientific fields — Physics in 1903 and Chemistry in 1911. She discovered two new elements: <span class="vocab" data-cn="钋（元素符号Po，84号元素）">polonium</span>, named after her homeland Poland, and <span class="vocab" data-cn="镭（元素符号Ra，88号元素）">radium</span>. She was the first woman to win a Nobel Prize, the first person to win it twice, and remains the only person to achieve this in two different sciences. And yet, she accomplished all of this while fighting constant discrimination and poverty.`,
      `Born Maria Skłodowska in Warsaw, Poland in 1867, she grew up under Russian rule in a country where women were not allowed to attend university. She made a deal with her sister: she would work as a <span class="vocab" data-cn="家庭教师（私人教师）">governess</span> to support her sister's medical studies in Paris; in return, her sister would later support Marie's own studies. It was a remarkable act of <span class="vocab" data-cn="牺牲，自我奉献">sacrifice</span> and planning for two young women with no money and no guarantee of success.`,
      `Marie arrived in Paris in 1891 and enrolled at the Sorbonne, living in a tiny, freezing attic apartment. She was so poor that she sometimes fainted from hunger while studying. Despite these conditions, she <span class="vocab" data-cn="出类拔萃，名列前茅">excelled</span> — finishing first in her physics degree. She later met Pierre Curie, a French physicist, and the two became scientific and romantic partners.`,
      `The Curies' most important discovery came from their work on <span class="vocab" data-cn="放射性（原子核自发衰变并放出射线的性质）">radioactivity</span> — a term Marie herself coined. Working in a leaky shed with no proper laboratory equipment, they processed tonnes of <span class="vocab" data-cn="沥青铀矿（含铀的天然矿石）">pitchblende</span> ore to isolate tiny amounts of radium. The physical labor was enormous. The radiation they were exposed to was slowly destroying their health — though neither of them knew it at the time.`,
      `Pierre died in a street accident in 1906. Marie was <span class="vocab" data-cn="心碎的，悲痛欲绝的">devastated</span>, but she continued working. She took over his professorship at the Sorbonne, becoming the first woman to hold a professorship at that university. She built a world-class research institute — the Curie Institute — which still operates in Paris and Warsaw today, conducting cancer research.`,
      `Marie Curie's second Nobel Prize, awarded in 1911, was met with scandal. French newspapers attacked her personal life, and some members of the Swedish Academy tried to block her from receiving the prize. She went to Stockholm and collected it anyway. In her Nobel lecture, she spoke calmly and precisely about the science, ignoring the <span class="vocab" data-cn="骚动，轰动">commotion</span> around her.`,
      `She died on July 4, 1934, from <span class="vocab" data-cn="再生障碍性贫血（骨髓无法产生足够血细胞的疾病）">aplastic anemia</span>, almost certainly caused by decades of radiation exposure. Her notebooks from the 1890s are still so radioactive that they are kept in lead-lined boxes at the French National Library. Researchers who want to read them must sign a waiver and wear protective clothing.`,
      `Marie Curie's legacy is not just scientific. She demonstrated that the barriers placed on women were not natural — they were artificial. She broke through them one by one, with patience, intelligence, and an absolute refusal to be told that science was not for her.`,
    ],
    vocabulary: [
      { word: 'polonium', cn: '钋（化学元素）' },
      { word: 'radium', cn: '镭（化学元素）' },
      { word: 'governess', cn: '家庭教师' },
      { word: 'radioactivity', cn: '放射性' },
      { word: 'devastated', cn: '心碎的，悲痛欲绝的' },
      { word: 'commotion', cn: '骚动，喧闹' },
      { word: 'sacrifice', cn: '牺牲，自我奉献' },
    ],
  };

export default article;
