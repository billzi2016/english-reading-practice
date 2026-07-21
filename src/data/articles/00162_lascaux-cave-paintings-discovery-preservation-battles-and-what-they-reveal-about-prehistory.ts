import type { Article } from '../../types/index.ts';

// 文件意图：维护《Lascaux Cave Paintings: Discovery, Preservation Battles, and What They Reveal About Prehistory》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00162 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00162',
  slug: 'lascaux-cave-paintings-discovery-preservation-battles-and-what-they-reveal-about-prehistory',
  title: 'Lascaux Cave Paintings: Discovery, Preservation Battles, and What They Reveal About Prehistory',
  subtitle: 'A Journey into the Hidden Gallery of France’s Most Famous Prehistoric Art',
  summary: 'Explore how teenage explorers uncovered Lascaux, why its walls are under constant threat, and what the images tell us about life tens of thousands of years ago.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On a rainy July afternoon in 1940, fourteen-year-old Marcel Ravidat and his friends were chasing their dog through the limestone hills near Montignac when they slipped into a narrow opening. The darkness gave way to an enormous chamber whose walls glowed with ochre and charcoal figures. This accidental stumble marked the discovery of <span class="vocab" data-cn="拉斯科">Lascaux</span>, a site that would soon become the benchmark for understanding human creativity in the <span class="vocab" data-cn="旧石器时代">Paleolithic</span> era.`,
    `The paintings cover roughly 2,000 square meters and depict herds of <span class="vocab" data-cn="原始野牛">auroch</span>, graceful horses, stags, and enigmatic symbols. Artists used mineral pigments—iron oxides for reds, charcoal for blacks—and applied them with brushes made from animal hair or simply by blowing pigment through hollow reeds. This technique, known as <span class="vocab" data-cn="壁画艺术">parietal art</span>, creates a sense of motion that still captivates visitors today, suggesting that the creators possessed sophisticated knowledge of anatomy and perspective far earlier than previously assumed.`,
    `Scientific analysis has refined the age of Lascaux to about 17,000 years ago, using radiocarbon dating of charcoal residues and uranium-thorium dating of calcite deposits. These dates place the artwork firmly within the Upper <span class="vocab" data-cn="旧石器时代">Paleolithic</span> period, a time when hunter‑gatherer groups roamed Western Europe. The prevalence of large herbivores in the scenes hints at a subsistence strategy centered on seasonal migrations, while the repeated motifs of handprints and abstract signs may reflect early forms of symbolic communication or ritual practice.`,
    `From its opening to the public in 1948, Lascaux attracted millions of curious tourists, but the influx of visitors brought unintended consequences. Human breath raised humidity levels, encouraging the growth of <span class="vocab" data-cn="钟乳石">speleothem</span> formations and fungal colonies that began to discolor the pigments. By 1963, visible damage forced authorities to close the original cavern to the public, launching a decades‑long battle between scientific preservation and cultural access.`,
    `To reconcile these competing goals, French conservators created a series of exacting <span class="vocab" data-cn="复制品">replica</span> caves. The first, Lascaux II, opened in 1983 and reproduced the most famous panels using painstaking hand‑painting techniques that matched the original pigments’ hue and texture. Subsequent installations—Lascaux III (a portable exhibition) and Lascaux IV (a state‑of‑the‑art digital reconstruction)—allow visitors to experience the art without endangering the fragile originals, while also serving as research laboratories for testing new <span class="vocab" data-cn="保护">conservation</span> methods.`,
    `In 1979, UNESCO inscribed Lascaux on its list of World Heritage Sites, recognizing both its universal cultural value and the urgent need for protection. Today, cutting‑edge approaches such as microclimate monitoring, laser cleaning, and virtual reality tours are being trialed to further reduce physical contact while expanding global access. Debates continue over whether limited, guided visits should ever resume in the original chamber, a dilemma that pits the desire for authentic experience against the risk of irreversible loss.`,
    `Regardless of how we choose to engage with it, Lascaux remains a silent testimony to humanity’s earliest urge to record, communicate, and perhaps even worship. The vivid depictions of bison on the walls whisper stories of survival, community, and imagination—reminding us that the impulse to create art is as ancient as the stones themselves.`,
  ],
  vocabulary: [
    { word: 'Lascaux', cn: '拉斯科' },
    { word: 'Paleolithic', cn: '旧石器时代' },
    { word: 'parietal art', cn: '壁画艺术' },
    { word: 'auroch', cn: '原始野牛' },
    { word: 'speleothem', cn: '钟乳石' },
    { word: 'replica', cn: '复制品' },
    { word: 'conservation', cn: '保护' },
  ],
};

export default article;
