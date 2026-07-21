import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Voyager Golden Record: Humanity’s Message to the Cosmos》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00144 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00144',
  slug: 'the-voyager-golden-record-humanity-s-message-to-the-cosmos',
  title: 'The Voyager Golden Record: Humanity’s Message to the Cosmos',
  subtitle: 'How a tiny disc carries Earth’s story across interstellar space.',
  summary: 'An engaging look at the creation, content, and legacy of the Voyager Golden Record.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `The story begins in 1977, when NASA launched two identical probes named <span class="vocab" data-cn="旅行者号">Voyager</span> on a grand tour of the outer planets. While their primary mission was to photograph Jupiter, Saturn and beyond, a quieter ambition accompanied them: to carry a time capsule for any intelligent life that might one day encounter the spacecraft drifting through <span class="vocab" data-cn="星际的">interstellar</span> space.`,
    `This time capsule is the famed <span class="vocab" data-cn="金唱片">Golden Record</span>, a 12‑inch (30 cm) disc made of a sturdy <span class="vocab" data-cn="铜合金">copper alloy</span> coated with a thin layer of gold. The choice of materials ensured that the record could survive the harsh vacuum, radiation and temperature extremes of deep space for billions of years while still being readable by a simple mechanical device.`,
    `The content of the <span class="vocab" data-cn="金唱片">Golden Record</span> was selected by a committee chaired by astronomer Carl Sagan. They chose 115 images, natural sounds such as wind and whale song, and a diverse musical repertoire ranging from Bach’s Brandenburg Concerto to Peruvian panpipes. Each piece was recorded in an analog format using a <span class="vocab" data-cn="留声机">phonograph</span> stylus that could be traced by a needle without any digital electronics.`,
    `The encoding method is elegantly simple yet technically demanding. Audio and image information are inscribed as concentric grooves, with variations in the groove’s depth representing different frequencies—a process known as frequency modulation of an <span class="vocab" data-cn="电磁">electromagnetic</span> carrier wave. The record spins at 16 ⅓ revolutions per minute, and a playback device would convert these mechanical vibrations back into electrical signals that could be amplified into sound or light.`,
    `To guide any finder, the cover of each probe bears a set of diagrams etched in gold. One diagram shows how to construct a stylus from a diamond‑tipped needle, while another depicts a schematic of the record’s playback system. The instructions also include a binary countdown indicating the speed at which the disc should rotate, ensuring that even an alien civilization with no knowledge of Earth’s units could decode the message.`,
    `Perhaps the most striking navigational aid is the <span class="vocab" data-cn="脉冲星地图">pulsar map</span>. It displays the relative positions of 14 pulsars—highly regular rotating neutron stars—each represented by a line whose length encodes the frequency of its pulses. By measuring these periods, an extraterrestrial observer could triangulate the record’s point of origin within our galaxy, effectively providing a cosmic address for humanity.`,
    `The legacy of the <span class="vocab" data-cn="金唱片">Golden Record</span> extends far beyond its physical presence. It inspired later artistic projects such as the 2008 “Message in a Bottle” initiative and continues to appear in popular culture, from movies to music videos. More importantly, it stands as a testament to humanity’s desire to reach out across the void, reminding us that even in the vast silence of space we can send a voice that says, ‘We were here.’`,
  ],
  vocabulary: [
    { word: 'Voyager', cn: '旅行者号' },
    { word: 'interstellar', cn: '星际的' },
    { word: 'Golden Record', cn: '金唱片' },
    { word: 'copper alloy', cn: '铜合金' },
    { word: 'phonograph', cn: '留声机' },
    { word: 'electromagnetic', cn: '电磁' },
    { word: 'pulsar map', cn: '脉冲星地图' },
  ],
};

export default article;
