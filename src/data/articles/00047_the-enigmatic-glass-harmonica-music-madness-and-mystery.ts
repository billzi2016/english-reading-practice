import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Enigmatic Glass Harmonica: Music, Madness, and Mystery》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00047 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00047',
  slug: 'the-enigmatic-glass-harmonica-music-madness-and-mystery',
  title: 'The Enigmatic Glass Harmonica: Music, Madness, and Mystery',
  subtitle: 'How a fragile instrument sparked genius, fear, and legend in the 18th century.',
  summary: 'Explore the rise, fall, and modern revival of the glass harmonica, an instrument that once haunted composers and audiences alike.',
  category: 'culture',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1761, a curious experiment in Philadelphia gave birth to one of history’s most unusual instruments. <span class="vocab" data-cn="本杰明·富兰克林">Benjamin Franklin</span> attached a rotating spindle to a series of glass bowls of varying sizes and discovered that rubbing wet fingers along their rims produced a sound unlike any other—delicate, shimmering, and hauntingly pure. He called his invention the <span class="vocab" data-cn="玻璃口琴">glass harmonica</span>, and within a few years it would travel across the Atlantic to captivate European aristocracy.`,
    `The glass harmonica’s construction is deceptively simple yet acoustically sophisticated. Each bowl acts as a <span class="vocab" data-cn="共振频率">resonant frequency</span> chamber; larger bowls vibrate more slowly, producing lower pitches, while smaller ones emit higher tones. When the spindle turns, the player’s moistened fingertips set the rims into motion, creating an <span class="vocab" data-cn="空灵音色">ethereal timbre</span> that seems to float above the surrounding air. Unlike a traditional piano, the instrument requires no hammers or strings—its voice is pure vibration of glass itself.`,
    `By the late 1770s the glass harmonica had become a sensation in Viennese salons and Parisian courts. Composers such as <span class="vocab" data-cn="沃尔夫冈·阿马德乌斯·莫扎特">Wolfgang Amadeus Mozart</span> wrote concertos specifically for it, most famously the “Concerto for Glass Harmonica in C major, K. 356.” The instrument’s uncanny ability to evoke melancholy and wonder made it a favorite of poets and philosophers who associated its sound with the divine. Its presence at royal gatherings turned music into an almost mystical experience, as listeners described feeling a gentle shiver run through their bodies.</`,
    `Yet this same otherworldly quality sparked fear among some observers. The famed physician <span class="vocab" data-cn="弗朗茨·安东·梅斯梅尔">Franz Anton Mesmer</span> claimed that the glass harmonica’s vibrations could disturb the nervous system, inducing what he called “animal magnetism.” Early <span class="vocab" data-cn="神经心理学">neuropsychology</span> theories suggested that prolonged exposure might trigger headaches, dizziness, or even temporary madness. Rumors spread that several musicians who performed on the instrument suffered from mental breakdowns, feeding a growing legend that the glass harmonica was cursed.</`,
    `These superstitions, combined with practical difficulties—its fragile glass bowls were prone to cracking, and the instrument required careful temperature control—led to its rapid decline by the early 19th century. Many orchestras retired their glass harmonicas, and surviving instruments were often stored away or destroyed. By the time Romantic composers like Beethoven rose to prominence, the glass harmonica had faded into obscurity, remembered only in a handful of scores and whispered anecdotes about its eerie power.`,
    `The 20th century saw a modest revival as curious musicians and film composers rediscovered the instrument’s unique voice. Pioneers such as <span class="vocab" data-cn="保罗·亨特">Paul Hunt</span> reconstructed working models based on Franklin’s original designs, while modern composers like <span class="vocab" data-cn="约翰·亚当斯">John Adams</span> incorporated its sound into contemporary works and movie soundtracks. Scientific studies in acoustic physics have examined how the glass harmonica’s pure sine‑wave tones interact with human perception, finding that its lack of overtones can produce a calming effect for some listeners while evoking unease in others—a modern echo of the instrument’s historic reputation.</`,
    `Today, the glass harmonica stands as a symbol of both artistic brilliance and the thin line between wonder and fear. Its story reminds us that new sounds can challenge cultural norms, inspire genius, and provoke anxiety all at once. Whether performed on a restored 18th‑century model or a sleek modern replica, the instrument continues to whisper its mysterious melody, inviting each generation to decide whether it is an object of beauty or a haunting reminder of music’s power over the mind.`,
  ],
  vocabulary: [
    { word: 'Benjamin Franklin', cn: '本杰明·富兰克林' },
    { word: 'glass harmonica', cn: '玻璃口琴' },
    { word: 'resonant frequency', cn: '共振频率' },
    { word: 'ethereal timbre', cn: '空灵音色' },
    { word: 'Wolfgang Amadeus Mozart', cn: '沃尔夫冈·阿马德乌斯·莫扎特' },
    { word: 'Franz Anton Mesmer', cn: '弗朗茨·安东·梅斯梅尔' },
    { word: 'neuropsychology', cn: '神经心理学' },
    { word: 'Paul Hunt', cn: '保罗·亨特' },
    { word: 'John Adams', cn: '约翰·亚当斯' },
  ],
};

export default article;
