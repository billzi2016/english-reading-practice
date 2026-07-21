import type { Article } from '../../types/index.ts';

// 文件意图：维护《Explorer 1 and the Dawn of American Spaceflight: Overcoming Sputnik’s Shadow》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00388 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00388',
  slug: 'explorer-1-and-the-dawn-of-american-spaceflight-overcoming-sputnik-s-shadow',
  title: 'Explorer 1 and the Dawn of American Spaceflight: Overcoming Sputnik’s Shadow',
  subtitle: 'How a modest satellite sparked the United States into orbit.',
  summary: 'The launch of Explorer 1 marked America’s first successful entry into space, turning the shock of Sputnik into scientific triumph.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the Soviet Union unveiled <span class="vocab" data-cn="人造卫星">Sputnik</span> on 4 October 1957, it sent a ripple of anxiety through Washington. The tiny beeping sphere, orbiting Earth in just ninety‑six minutes, became a potent symbol of the <span class="vocab" data-cn="冷战时期的紧张局势">Cold War</span> rivalry and raised doubts about American technological leadership. Newspapers ran headlines that read “Red Menace in Space,” and policymakers feared that if the USSR could launch a satellite, it might also deliver nuclear warheads across continents with equal ease.`,
    `President Eisenhower’s administration responded quickly, but rather than creating a new civilian agency from scratch, they turned to an existing military asset: the Army Ballistic Missile Agency (ABMA) at Redstone Arsenal in Alabama. Under the direction of former Nazi rocket engineer <span class="vocab" data-cn="冯·布劳恩">Wernher von Braun</span>, ABMA had already mastered the <span class="vocab" data-cn="液体燃料火箭">liquid‑fueled rocket</span> technology that powered the Redstone missile. The decision to use a military program for a civilian scientific mission reflected both urgency and pragmatism, allowing the United States to field a satellite within months of Sputnik’s launch.`,
    `The vehicle chosen for the task was the <span class="vocab" data-cn="朱诺一号火箭">Juno I</span>, a four‑stage rocket derived from the Redstone missile. Its first stage provided the thrust needed to break free of Earth’s gravity, while three smaller solid‑fuel upper stages acted as “kick‑stages” that accelerated the payload into orbit. The engineering team faced a daunting challenge: they had never launched a satellite before, and the guidance systems were rudimentary by today’s standards. Nevertheless, meticulous testing and a series of incremental flights built confidence in the rocket’s reliability.`,
    `On 31 January 1958, at Cape Canaveral’s Launch Complex 5, the Juno I roared to life carrying a modest payload: a 14‑kilogram scientific instrument package designed by Dr. James Van Allen and his team at the University of Iowa. Among its instruments was a <span class="vocab" data-cn="微流星体探测器">micrometeorite detector</span> and a Geiger–Müller tube intended to measure charged particles in Earth’s upper atmosphere. The mission’s primary goal was simple—confirm that the United States could place an object into orbit—but its scientific ambitions were far more profound.`,
    `When Explorer 1 finally achieved orbit, it not only silenced critics but also delivered a groundbreaking discovery. The Geiger tube recorded unexpectedly low radiation levels at altitudes above 2,000 kilometers, suggesting the presence of a previously unknown region of trapped particles. Dr. Van Allen interpreted these data as evidence of a “radiation belt” surrounding Earth—a finding later confirmed by subsequent missions and now known as the <span class="vocab" data-cn="范艾伦辐射带">Van Allen belts</span>. This scientific triumph turned a political victory into a lasting contribution to space science, demonstrating that even a modest satellite could yield insights far beyond its size.`,
    `The success of Explorer 1 had immediate institutional repercussions. Within weeks, Congress passed the National Aeronautics and Space Act, establishing NASA as a civilian counterpart to the military’s missile programs. While ABMA continued to develop rockets for national defense, NASA inherited the mantle of exploration, building on the lessons learned from Juno I and its payloads. The agency’s early projects—such as the Vanguard and Mercury programs—were directly shaped by the engineering culture forged during Explorer 1’s hurried development.`,
    `In retrospect, the launch of Explorer 1 illustrates how a nation can transform a moment of perceived inferiority into an engine for innovation. By leveraging existing military expertise, embracing rapid prototyping, and prioritizing scientific curiosity, the United States turned Sputnik’s shadow into a beacon that illuminated both the heavens and the path forward for American spaceflight.`,
    `Today, the legacy of Explorer 1 lives on in every satellite that circles our planet, from weather monitors to GPS constellations. The modest instrument package that once hung beneath a Juno I rocket paved the way for an era where humanity routinely reaches beyond Earth’s atmosphere, reminding us that even the smallest steps can launch a giant leap for science and society.`
  ],
  vocabulary: [
    { word: 'Sputnik', cn: '人造卫星' },
    { word: 'Cold War', cn: '冷战时期的紧张局势' },
    { word: 'Wernher von Braun', cn: '冯·布劳恩' },
    { word: 'liquid-fueled rocket', cn: '液体燃料火箭' },
    { word: 'Juno I', cn: '朱诺一号火箭' },
    { word: 'micrometeorite detector', cn: '微流星体探测器' },
    { word: 'Van Allen belts', cn: '范艾伦辐射带' }
  ],
};

export default article;
