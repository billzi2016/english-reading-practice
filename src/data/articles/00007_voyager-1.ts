import type { Article } from '../../types/index.ts';

// 文件意图：维护《Voyager 1》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00007 控制，不要手写上一篇/下一篇。
const article: Article = {
    id: '00007',
    slug: 'voyager-1',
    title: 'Voyager 1',
    subtitle: 'A Small Machine at the Edge of the Sun’s Kingdom',
    summary: 'Launched in 1977, Voyager 1 became humanity’s most distant spacecraft and sent back a new view of our cosmic neighborhood.',
    category: 'history',
    difficulty: 'intermediate',
    readingMinutes: 6,
    paragraphs: [
      `On September 5, 1977, a spacecraft called <span class="vocab" data-cn="旅行者1号（NASA深空探测器）">Voyager 1</span> rose from Cape Canaveral, Florida. It was built for a mission that was expected to last only a few years: fly past Jupiter and Saturn, photograph them, and measure their strange environments. Nearly half a century later, the spacecraft is still communicating with Earth. It is the most distant human-made object, travelling through the thin space beyond the Sun’s protective bubble.`,
      `Voyager 1 was not sent into space at a random moment. In the late 1970s, the outer planets were arranged in a rare pattern. Their positions allowed a spacecraft to use one planet’s gravity to reach the next. This technique, called a <span class="vocab" data-cn="引力助推（利用天体引力改变飞行器速度和方向）">gravity assist</span>, is a little like swinging around the corner of a moving crowd: the spacecraft approaches a planet, is pulled by its gravity, and leaves on a new path with changed speed and direction.`,
      `The first great encounter came at Jupiter in 1979. Voyager 1 returned detailed images of the planet’s turbulent clouds and discovered a thin ring around it. It also observed active volcanoes on Io, one of Jupiter’s moons. For many people, these pictures changed the outer solar system from a distant collection of dots into a place with weather, mountains, eruptions, and motion. A flyby is brief, but a carefully planned one can transform what scientists know.`,
      `At Saturn in 1980, Voyager 1 made another important choice. Its path was designed to pass close to Titan, Saturn’s largest moon. That route gave scientists valuable information about Titan’s thick atmosphere, but it also bent the spacecraft northward, away from the other outer planets. Voyager 2 continued onward to Uranus and Neptune; Voyager 1 began a different journey, heading toward the boundary of the Sun’s influence.`,
      `The two Voyager spacecraft carry a <span class="vocab" data-cn="金唱片（搭载在旅行者号上的地球声音与图像记录）">Golden Record</span>, a gold-plated copper disc created as a time capsule. It contains sounds, music, greetings in many languages, and images chosen to represent life on Earth. The record is not a practical message system: the chance that another civilization will find it is extremely small. Its deeper purpose is symbolic. It asks what a young technological species might choose to say about itself.`,
      `For decades, Voyager 1 continued farther from the planets. In August 2012, scientists concluded that it had entered <span class="vocab" data-cn="星际空间（恒星之间的空间）">interstellar space</span>. This does not mean that it left the Solar System in every possible sense. The Sun’s gravity reaches far beyond the region Voyager crossed. But the spacecraft passed beyond the heliosphere, the bubble of charged particles and magnetic fields created by the Sun. Its instruments could now sample a different cosmic environment.`,
      `Keeping an old spacecraft alive is an engineering lesson in patience. Voyager 1 has limited power, a weak signal, and a communication delay of many hours. Engineers must decide which instruments to turn off as its nuclear power source slowly weakens. Commands travel from Earth at the speed of light, but the craft cannot answer immediately. Each repair becomes a careful conversation across an immense distance.`,
      `Voyager 1 matters because it joins exploration with <span class="vocab" data-cn="持久性（长期保持作用或存在的能力）">persistence</span>. Its original discoveries taught scientists about giant planets and their moons. Its later data helps them study the boundary between the Sun and the galaxy. Yet its greatest lesson may be emotional as well as scientific: a small machine, built with 1970s technology, still carries human curiosity into a region no person can visit.`,
    ],
    vocabulary: [
      { word: 'gravity assist', cn: '引力助推' },
      { word: 'turbulent', cn: '动荡的，剧烈翻涌的' },
      { word: 'flyby', cn: '飞掠探测' },
      { word: 'Golden Record', cn: '金唱片' },
      { word: 'interstellar space', cn: '星际空间' },
      { word: 'heliosphere', cn: '日球层' },
      { word: 'persistence', cn: '持久性，坚持' },
    ],
  };

export default article;
