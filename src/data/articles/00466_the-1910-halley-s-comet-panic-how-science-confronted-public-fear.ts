import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1910 Halley’s Comet Panic: How Science Confronted Public Fear》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00466 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00466',
  slug: 'the-1910-halley-s-comet-panic-how-science-confronted-public-fear',
  title: 'The 1910 Halley’s Comet Panic: How Science Confronted Public Fear',
  subtitle: 'When a celestial visitor sparked worldwide alarm and scientific reassurance',
  summary: 'A vivid look at the 1910 comet scare, the rumors of poisonous gases, and how astronomers used evidence to calm the public.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In early 1910, newspapers across Europe and America announced that <span class="vocab" data-cn="哈雷彗星">Halley's Comet</span> would swing close to Earth in May. The comet’s bright tail had been a wonder for centuries, but this time scientists warned that the Earth would pass through its <span class="vocab" data-cn="氰气">cyanogen</span>-rich tail, a claim that ignited panic among ordinary citizens.`,
    `The fear was not baseless; spectroscopic studies by astronomers such as William Huggins had identified cyanogen gas in the comet’s spectrum. However, the public misunderstood the difference between detecting a trace element and experiencing lethal concentrations. Sensational headlines proclaimed “Poisonous Gas Will Kill Millions,” prompting people to buy bottled air and even wear masks made of cotton gauze.`,
    `French popularizer Camille Flammarion tried to calm the hysteria by publishing an article that explained the <span class="vocab" data-cn="光谱仪">spectroscope</span> technique. He showed how the instrument separates light into its component colors, allowing scientists to identify chemicals without them being present in dangerous amounts. His clear language helped many readers see that the cyanogen signal was merely a faint fingerprint, not a cloud of poison.`,
    `Meanwhile, American astronomer Charles Greeley Abbot organized public lectures at the Smithsonian, demonstrating with a <span class="vocab" data-cn="真空管">vacuum tube</span> discharge lamp how cyanogen glows under electrical excitation. By reproducing the comet’s spectral lines in a controlled lab setting, he illustrated that the gas was present in minuscule quantities—far below any threshold for human toxicity.`,
    `The episode also highlighted the power of the <span class="vocab" data-cn="科学方法">scientific method</span>. Researchers gathered observational data, formed hypotheses about the comet’s composition, and tested them with repeatable experiments. When the predicted encounter passed without incident, the lack of any reported illnesses served as a real‑world validation of their models, reinforcing public trust in evidence‑based explanations.`,
    `In retrospect, the 1910 panic is often cited as an early example of “public hysteria” triggered by astronomical events. It foreshadowed later scares, such as the 1978 “Mars Hoax” and modern social‑media rumors about solar flares. Each case underscores how clear communication from experts can counteract misinformation before fear spreads unchecked.`,
    `Today, when Halley’s Comet returns every 76 years, we remember the 1910 episode not only for its dramatic headlines but also for the lessons it taught about media responsibility and scientific outreach. The comet continues to inspire awe, yet thanks to the diligent work of early 20th‑century astronomers, it no longer carries the specter of a deadly gas cloud in the public imagination.`,
  ],
  vocabulary: [
    { word: 'Halley’s Comet', cn: '哈雷彗星' },
    { word: 'cyanogen', cn: '氰气' },
    { word: 'spectroscope', cn: '光谱仪' },
    { word: 'vacuum tube', cn: '真空管' },
    { word: 'scientific method', cn: '科学方法' },
    { word: 'public hysteria', cn: '公众恐慌' },
  ],
};

export default article;
