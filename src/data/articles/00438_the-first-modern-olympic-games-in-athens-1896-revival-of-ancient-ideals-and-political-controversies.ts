import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Modern Olympic Games in Athens, 1896: Revival of Ancient Ideals and Political Controversies》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00438 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00438',
  slug: 'the-first-modern-olympic-games-in-athens-1896-revival-of-ancient-ideals-and-political-controversies',
  title: 'The First Modern Olympic Games in Athens, 1896: Revival of Ancient Ideals and Political Controversies',
  subtitle: 'How a historic spectacle reshaped sport and politics',
  summary: 'An engaging narrative about the birth of the modern Olympics, its cultural symbolism, and the controversies that surrounded it.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the summer sun beat down on the marble steps of the Panathenaic Stadium in April 1896, a crowd of roughly fifteen thousand spectators witnessed something unprecedented. The event was billed as a <span class="vocab" data-cn="复兴">revival</span> of the ancient athletic festivals that once honored Zeus in Olympia, but it also carried the weight of contemporary aspirations. Greek officials saw an opportunity to showcase their newly independent nation on the world stage, while European intellectuals hoped to prove that sport could foster peace among rival powers.`,
    `The driving force behind this grand experiment was French educator <span class="vocab" data-cn="皮埃尔·德·顾拜旦">Pierre de Coubertin</span>, who had founded the <span class="vocab" data-cn="国际奥林匹克委员会">International Olympic Committee</span> (IOC) in 1894. De Coubertin believed that a return to classical ideals—discipline, honor, and fair play—could counteract the militarism of his era. He traveled to Athens in early 1895, negotiating with King George I and Prime Minister Charilaos Trikoupis to secure funding and political backing for the Games.</`,
    `Construction of the venues proceeded at a breakneck pace. The Panathenaic Stadium, originally built for the Panhellenic Games in 330 BC, was completely refurbished using white Pentelic marble, symbolizing the <span class="vocab" data-cn="希腊的">Hellenic</span> heritage that Greece wanted to project. Temporary facilities sprang up around the city: a gymnastics hall near the Acropolis and a rowing basin on the Bay of Zea. The logistical challenges were immense—no modern electricity, limited transportation, and a tight budget—but the organizers managed to host eleven sports ranging from fencing to weightlifting.</`,
    `Among the competitions, the <span class="vocab" data-cn="马拉松">marathon</span> captured the imagination of both Greeks and foreigners. Inspired by the legendary run of Pheidippides from Marathon to Athens in 490 BC, the race covered a distance of 40 kilometers (later standardized at 42.195 km). A humble water carrier named Spyridon Louis surged ahead in the final stretch, crossing the finish line to thunderous applause and instantly becoming a national hero. Other memorable events included the <span class="vocab" data-cn="五项全能">pentathlon</span>, which tested athletes in running, jumping, discus, javelin, and wrestling—an embodiment of the ancient ideal of the well‑rounded competitor.</`,
    `Yet beneath the celebratory atmosphere lay deep <span class="vocab" data-cn="民族主义">nationalism</span> and contentious debates about who should be allowed to compete. The Greek government insisted that the Games remain a showcase of Hellenic culture, leading to disputes over flag protocols and the order of ceremonies. Meanwhile, the IOC’s strict adherence to <span class="vocab" data-cn="业余主义">amateurism</span> excluded many skilled athletes who earned money from sport, sparking criticism from countries like France and Britain that argued professionalism was inevitable in modern competition. Women were barred entirely, a decision justified by contemporary “moral” arguments but later condemned as gender discrimination.</`,
    `The political controversies extended beyond the arena. Some European newspapers portrayed the Athens Games as Greek propaganda—a way to legitimize the nation’s territorial ambitions in the Balkans. Others saw it as a diplomatic triumph that temporarily eased tensions after the 1895 Greco‑Turkish crisis. In the United States, the success of the marathon inspired a wave of long‑distance running clubs, while in Japan, the Games sparked early interest in Western sport, eventually leading to Japan’s own Olympic participation in 1912.</`,
    `Looking back, the 1896 Athens Olympics set a template that endures to this day: a quadrennial gathering of nations, an opening ceremony steeped in symbolism, and a persistent tension between idealism and commercial reality. The Games proved that sport could be both a unifying language and a battlefield for political agendas—a paradox that continues to shape every subsequent Olympiad.`,
  ],
  vocabulary: [
    { word: 'revival', cn: '复兴' },
    { word: 'Pierre de Coubertin', cn: '皮埃尔·德·顾拜旦' },
    { word: 'International Olympic Committee', cn: '国际奥林匹克委员会' },
    { word: 'Hellenic', cn: '希腊的' },
    { word: 'marathon', cn: '马拉松' },
    { word: 'pentathlon', cn: '五项全能' },
    { word: 'nationalism', cn: '民族主义' },
    { word: 'amateurism', cn: '业余主义' },
  ],
};

export default article;
