import type { Article } from '../../types/index.ts';

// 文件意图：维护《Wernher von Braun: From Rocket Engineer to Space Pioneer and Moral Controversy》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00170 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00170',
  slug: 'wernher-von-braun-from-rocket-engineer-to-space-pioneer-and-moral-controversy',
  title: 'Wernher von Braun: From Rocket Engineer to Space Pioneer and Moral Controversy',
  subtitle: 'The brilliant mind behind rockets, the man caught in history’s darkest shadows.',
  summary: 'Explore how von Braun turned wartime rocket technology into a gateway for human spaceflight while wrestling with profound ethical questions.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `Born in 1912 in the Prussian town of Wirsitz, <span class="vocab" data-cn="德国火箭工程师">Wernher von Braun</span> grew up amid a family that prized scientific curiosity. As a teenager he built model rockets with his brother and devoured Jules Verne’s tales of lunar voyages. By the early 1930s, his fascination caught the attention of the German military, which was eager to explore “Vergeltungswaffe 2” – later known as the <span class="vocab" data-cn="V‑2火箭">V‑2</span> – a weapon that could travel beyond the atmosphere. This early recruitment set him on a path that would intertwine cutting‑edge engineering with the tumult of world events.`,
    `At the secret research site of Peenemünde, von Braun led a team that turned theoretical physics into tangible thrust. The V‑2 became the first long‑range ballistic missile, reaching altitudes over 100 km and speeds exceeding 5,600 m/s. Its liquid‑fuel <span class="vocab" data-cn="推进系统">propulsion</span> system—combining ethanol and liquid oxygen—was a marvel of precision engineering, laying the groundwork for future space launch vehicles. Yet the project was built on the backs of forced laborers from concentration camps, a fact that would later haunt von Braun’s legacy.`,
    `When Nazi Germany fell in 1945, Allied forces seized Peenemünde’s technology and personnel. Through <span class="vocab" data-cn="“纸夹行动”">Operation Paperclip</span>, the United States recruited von Braun and many of his colleagues, hoping to harness their expertise before the Soviet Union could. Relocated to Fort Bliss, Texas, he helped develop the Redstone missile, which later launched America’s first astronaut, Alan Shepard, into sub‑orbital flight. This period marked a dramatic shift: from weapons of war to instruments of exploration.`,
    `Von Braun’s most celebrated achievement came as chief architect of NASA’s <span class="vocab" data-cn="土星五号火箭">Saturn V</span> launch vehicle. The massive three‑stage rocket, standing 111 m tall, generated a thrust of 34 million newtons—enough to lift the Apollo spacecraft beyond Earth’s gravity well. Its sophisticated <span class="vocab" data-cn="推进系统">propulsion</span> stages used liquid hydrogen and liquid oxygen, achieving unprecedented efficiency. On July 16, 1969, Saturn V propelled Apollo 11 toward the Moon, fulfilling a dream that von Braun had nurtured since his youth.`,
    `Beyond the Moon, von Braun championed concepts for permanent space habitats and reusable launch systems. As director of NASA’s Marshall Space Flight Center, he advocated for a “space station” that would serve as a laboratory in orbit—a vision later realized by the International Space Station. Though his ideas about a reusable shuttle were initially sidelined, they foreshadowed the development of the <span class="vocab" data-cn="航天飞机">Space Shuttle</span> program in the 1970s and 1980s.`,
    `Despite these triumphs, von Braun’s past remained a source of intense debate. Critics highlighted his membership in the Nazi Party and his role in employing slave labor at Mittelwerk, where thousands perished building V‑2 rockets. The moral dilemma—celebrating scientific brilliance while confronting its dark origins—sparked heated discussions about <span class="vocab" data-cn="伦理">ethics</span> in science. Some argued that his contributions to peaceful spaceflight redeemed him; others insisted that no achievement could erase the suffering tied to his early work.`,
    `Von Braun’s influence extended beyond America. After retiring from NASA, he consulted for European aerospace firms, sharing insights that helped shape the <span class="vocab" data-cn="阿丽亚娜运载火箭">Ariane</span> family of launchers. Ariane’s modular design and reliable performance owe a conceptual debt to von Braun’s emphasis on scalability and cost‑effectiveness. Today, his name appears on both monuments honoring space pioneers and plaques reminding us of the complex interplay between innovation and responsibility.`,
    `In retrospect, Wernher von Braun embodies a paradox: a visionary who propelled humanity beyond Earth while being entangled in one of history’s darkest regimes. His story urges us to ask whether scientific progress can ever be truly separated from its ethical context, and it reminds future engineers that every breakthrough carries both promise and responsibility.`,
  ],
  vocabulary: [
    { word: 'Wernher von Braun', cn: '德国火箭工程师' },
    { word: 'V-2', cn: 'V‑2火箭' },
    { word: 'propulsion', cn: '推进系统' },
    { word: 'Operation Paperclip', cn: '“纸夹行动”' },
    { word: 'Saturn V', cn: '土星五号火箭' },
    { word: 'ethics', cn: '伦理' },
    { word: 'Space Shuttle', cn: '航天飞机' },
    { word: 'Ariane', cn: '阿丽亚娜运载火箭' },
  ],
};

export default article;
