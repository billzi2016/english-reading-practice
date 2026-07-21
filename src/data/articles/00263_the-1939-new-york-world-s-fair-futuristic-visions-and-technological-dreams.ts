import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1939 New York World’s Fair: Futuristic Visions and Technological Dreams》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00263 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00263',
  slug: 'the-1939-new-york-world-s-fair-futuristic-visions-and-technological-dreams',
  title: 'The 1939 New York World’s Fair: Futuristic Visions and Technological Dreams',
  subtitle: 'How a pre‑war exposition imagined tomorrow’s technology',
  summary: 'An exploration of the 1939 New York World’s Fair, its iconic architecture, groundbreaking exhibits, and lasting influence on modern life.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the United States was still wrestling with the Great Depression, the city of New York announced an ambitious plan to lift the nation’s spirits. The 1939 World’s Fair opened on April 30 under the slogan “The World of Tomorrow,” promising a glimpse into a future where technology would solve everyday problems. Visitors from across the globe streamed through the gates, eager to see how engineers and designers imagined life after the looming war.`,
    `Dominating the fairgrounds were two striking structures: the <span class="vocab" data-cn="三角形塔">Trylon</span> and its companion, the <span class="vocab" data-cn="球体建筑">Perisphere</span>. The Trylon was a 610‑foot steel triangle that seemed to pierce the sky, while the Perisphere—a massive white sphere—housed a rotating diorama of a utopian city. Together they symbolized the fair’s central theme: progress soaring upward and enveloping humanity in a protective, forward‑looking embrace.`,

    `One of the most talked‑about attractions was General Motors’ <span class="vocab" data-cn="未来主义展望">Futurama</span>. Designed by industrial designer Harley Earl, the exhibit featured a massive model city illuminated by moving lights to simulate traffic. It introduced visitors to the idea of sprawling suburbs connected by highways—a vision that would shape American urban planning for decades. The Futurama’s optimistic narrative suggested that personal automobiles and efficient road networks would grant unprecedented freedom to ordinary families.`,

    `Across the midway, Westinghouse unveiled a live <span class="vocab" data-cn="电视">television</span> broadcast, marking one of the first public demonstrations of this new medium. Audiences gathered around bulky cathode‑ray tubes to watch a short newsreel and a performance by a local orchestra. Though the picture was fuzzy by today’s standards, the experience sparked a nationwide fascination that helped accelerate the post‑war boom in home TV sets.`,

    `The fair also celebrated advances in <span class="vocab" data-cn="航空学">aeronautics</span>. A massive hangar displayed a replica of the Boeing B‑17 bomber and featured a flight simulator that let visitors “pilot” an aircraft using rudimentary controls. Meanwhile, Bell Laboratories showcased an early <span class="vocab" data-cn="模拟计算机">analog computer</span> designed to solve complex differential equations—a precursor to the digital computers that would later dominate the tech landscape.`,

    `Beyond the headline attractions, the exposition served as a massive laboratory for <span class="vocab" data-cn="消费主义">consumerism</span>. Companies used the fair to debut household appliances such as electric refrigerators, automatic washing machines, and even early versions of the microwave oven. The sleek designs and promises of labor‑saving convenience convinced many Americans that modern conveniences were not luxuries but necessities for a better life.`,

    `Although the fair closed on October 31, 1940—just months before the United States entered World War II—its legacy endured. The architectural language of the Trylon and Perisphere inspired later mid‑century modern designs, while the optimistic narratives of Futurama and television helped shape a cultural belief in technology as a force for good. Decades later, historians still point to the 1939 New York World’s Fair as a pivotal moment when imagination and engineering converged to chart a course toward the world we live in today.`,
  ],
  vocabulary: [
    { word: 'Futurama', cn: '未来主义展望' },
    { word: 'Trylon', cn: '三角形塔' },
    { word: 'Perisphere', cn: '球体建筑' },
    { word: 'television', cn: '电视' },
    { word: 'analog computer', cn: '模拟计算机' },
    { word: 'aeronautics', cn: '航空学' },
    { word: 'consumerism', cn: '消费主义' },
  ],
};

export default article;
