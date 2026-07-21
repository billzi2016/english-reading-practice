import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise and Fall of the QR Code: From Japanese Supermarket Labels to Global Pandemic Tracking》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00243 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00243',
  slug: 'the-rise-and-fall-of-the-qr-code-from-japanese-supermarket-labels-to-global-pandemic-tracking',
  title: 'The Rise and Fall of the QR Code: From Japanese Supermarket Labels to Global Pandemic Tracking',
  subtitle: 'How a humble barcode reshaped commerce, health, and privacy in three decades.',
  summary: 'From its birth in a Japanese auto parts plant to its pandemic‑era ubiquity, the QR code experienced a rapid ascent and an equally swift decline.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In 1994 Denso Wave, a subsidiary of Toyota, introduced the <span class="vocab" data-cn="二维码">QR code</span> as a solution for tracking automotive parts on assembly lines. Unlike traditional linear barcodes, this <span class="vocab" data-cn="二维条形码">two-dimensional barcode</span> could store far more information in a compact square pattern, making it ideal for complex inventory systems.`,
    `The technology quickly migrated to Japanese supermarkets and convenience stores, where cashiers began scanning QR codes printed on product labels. The code’s high <span class="vocab" data-cn="编码容量">encoding capacity</span> allowed manufacturers to embed batch numbers, expiration dates, and even promotional URLs, while built‑in <span class="vocab" data-cn="错误更正">error correction</span> ensured reliable reads despite dirt or damage.`,
    `By the early 2010s smartphones equipped with high‑resolution cameras turned every consumer into a scanner. Apple’s iOS 11 added native QR support, sparking a wave of <span class="vocab" data-cn="无接触支付">contactless payment</span> pilots and mobile marketing campaigns that linked physical products to digital experiences without the need for dedicated apps.`,
    `When COVID‑19 swept the globe in 2020, governments seized on the QR code’s ubiquity. Health ministries issued <span class="vocab" data-cn="数字疫苗护照">digital vaccine passports</span> and venue check‑ins that could be verified instantly, while contact‑tracing apps used QR scans to log visits for later epidemiological analysis. Countries such as China, Australia, and New Zealand made QR‑based health passes a daily requirement for many citizens.`,
    `The rapid rollout raised serious privacy debates. Centralized databases storing scan histories gave authorities unprecedented <span class="vocab" data-cn="数据集中化">data centralization</span>, prompting fears of surveillance and misuse after the pandemic subsided. Moreover, users grew weary of repeatedly pointing their phones at squares—a phenomenon journalists dubbed “QR fatigue.”`,
    `Post‑pandemic, businesses began favoring alternatives like NFC (near‑field communication) and Bluetooth Low Energy for <span class="vocab" data-cn="无接触技术">contactless technology</span>, which require less visual attention and can operate without a line of sight. Meanwhile, the International Organization for Standardization reaffirmed the QR code’s specifications under ISO/IEC 18004, but its market share has noticeably slipped.`,
    `Today the QR code survives in niche corners: museums use it to trigger <span class="vocab" data-cn="增强现实">augmented reality</span> overlays, artists embed hidden messages in public installations, and small‑scale retailers still rely on it for inventory because of its low cost. Whether it will reinvent itself or fade into a nostalgic footnote remains an open question.`,
  ],
  vocabulary: [
    { word: 'QR code', cn: '二维码' },
    { word: 'two-dimensional barcode', cn: '二维条形码' },
    { word: 'encoding capacity', cn: '编码容量' },
    { word: 'error correction', cn: '错误更正' },
    { word: 'contactless payment', cn: '无接触支付' },
    { word: 'epidemiology', cn: '流行病学' },
    { word: 'digital vaccine passport', cn: '数字疫苗护照' },
    { word: 'data centralization', cn: '数据集中化' },
    { word: 'contactless technology', cn: '无接触技术' },
    { word: 'augmented reality', cn: '增强现实' },
  ],
};

export default article;
