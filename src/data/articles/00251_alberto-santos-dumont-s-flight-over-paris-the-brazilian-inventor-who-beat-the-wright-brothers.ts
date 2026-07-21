import type { Article } from '../../types/index.ts';

// 文件意图：维护《Alberto Santos‑Dumont’s Flight Over Paris: The Brazilian Inventor Who Beat the Wright Brothers》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00251 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00251',
  slug: 'alberto-santos-dumont-s-flight-over-paris-the-brazilian-inventor-who-beat-the-wright-brothers',
  title: 'Alberto Santos‑Dumont’s Flight Over Paris: The Brazilian Inventor Who Beat the Wright Brothers',
  subtitle: 'A daring public demonstration that reshaped early aviation history',
  summary: 'In 1906, Santos‑Dumont flew a powered aircraft over the heart of Paris, proving that controlled flight could be achieved without a hidden launch rail.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When Alberto Santos‑Dumont prepared his <span class="vocab" data-cn="单翼飞机">1‑meter monoplane</span> for the famous October 1906 flight, he was not just testing a machine; he was staging a public challenge to the prevailing narrative that only the Wright brothers could master controlled flight. The French capital’s boulevards were packed with curious onlookers, journalists, and skeptical engineers, all eager to see whether a Brazilian inventor could truly lift off without a catapult or rail system.`,
    `Santos‑Dumont’s aircraft, christened “Demoiselle,” featured an <span class="vocab" data-cn="螺旋桨">efficient propeller</span> driven by a lightweight gasoline engine. Unlike the Wrights’ 1903 Flyer, which required a wooden track and a launch crew, the Demoiselle took off under its own power from a flat field near the Parc de Saint‑Cloud. This self‑propelled takeoff was crucial because French aviation law at the time only recognized flights that began without external assistance as legitimate.`,
    `The flight itself lasted just over 50 seconds, covering roughly 300 meters before landing safely on a grassy meadow. During those fleeting minutes, Santos‑Dumont demonstrated precise <span class="vocab" data-cn="飞行控制">flight control</span> by adjusting the wing’s angle of incidence and using a rudimentary steering wheel to manage yaw. Observers noted how smoothly the aircraft responded, a stark contrast to the Wrights’ early flights, which often required constant manual correction.`,
    `What made this event especially significant was its public nature. The French press published detailed sketches and photographs within days, sparking a wave of enthusiasm across Europe. Young engineers began experimenting with similar <span class="vocab" data-cn="气球式飞机">dirigible</span> concepts, while governments started to fund aeronautical research more aggressively. In the months that followed, several French aviators attempted their own powered flights, citing Santos‑Dumont’s demonstration as a source of inspiration.`,
    `Critics, however, argued that the Wright brothers’ earlier achievements should not be dismissed. They pointed out that Orville and Wilbur had already mastered three‑axis control and demonstrated longer flights in 1905. Yet the French aviation community valued the “open‑air” aspect of Santos‑Dumont’s flight, which aligned with their legal definition of a true aircraft achievement. This debate highlighted how national regulations could shape the historical record of technological progress.`,
    `Beyond the technical triumph, the event cemented Santos‑Dumont’s status as a cultural icon in Brazil and France alike. He was celebrated not only for his engineering skill but also for embodying the spirit of the “gentleman inventor” who shared his inventions freely with the public. In 1909 he would go on to win the prestigious <span class="vocab" data-cn="航空大奖">Grand Prix d’Aviation</span> for completing a round‑trip flight from Paris to Berlin and back, further solidifying his legacy.`,
    `Today, historians view the 1906 Paris flight as a pivotal moment that broadened the definition of what counted as “first powered flight.” It reminded the world that innovation thrives when inventors test their ideas in front of ordinary people, not just behind closed doors. Santos‑Dumont’s daring demonstration continues to inspire modern aerospace engineers who value transparency, accessibility, and the courage to fly over crowded streets.`,
  ],
  vocabulary: [
    { word: 'monoplane', cn: '单翼飞机' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'flight control', cn: '飞行控制' },
    { word: 'dirigible', cn: '气球式飞机' },
    { word: 'Grand Prix d’Aviation', cn: '航空大奖' },
    { word: 'aeronautics', cn: '航空学' },
  ],
};

export default article;
