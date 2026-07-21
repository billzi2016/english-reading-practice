import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Modern Stock Exchange: Amsterdam’s Beurs and the Foundations of Global Finance》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00299 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00299',
  slug: 'the-first-modern-stock-exchange-amsterdam-s-beurs-and-the-foundations-of-global-finance',
  title: 'The First Modern Stock Exchange: Amsterdam’s Beurs and the Foundations of Global Finance',
  subtitle: 'How a 17th‑century marketplace reshaped world finance',
  summary: 'An engaging story of how the Amsterdam Beurs pioneered trading, clearing, and speculation that still echo in today’s markets.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1600s the Dutch Republic was at the height of its “Golden Age,” a period marked by maritime power, scientific curiosity, and unprecedented commercial ambition.  Amidst this bustle, a modest building on Dam Square began to attract merchants, ship‑owners, and financiers alike.  This venue would soon become known as the <span class="vocab" data-cn="证券交易所">stock exchange</span>, or “Beurs,” and it would lay down many of the rules that still govern modern markets.`,
    `The catalyst for the Beurs was the formation of the <span class="vocab" data-cn="荷兰东印度公司">Dutch East India Company</span> (Vereenigde Oostindische Compagnie, VOC) in 1602.  The VOC was the world’s first true <span class="vocab" data-cn="股份有限公司">joint‑stock company</span>, issuing transferable shares that allowed investors to pool capital while limiting personal liability.  For the first time, ordinary citizens could own a slice of a global trading empire without having to fund an entire voyage themselves.`,
    `To facilitate the buying and selling of these new securities, the VOC’s directors designated a specific room in the Amsterdam City Hall where brokers could meet daily.  By 1611 the space had been formalised into a permanent exchange hall, complete with chalkboards displaying current prices and a roster of licensed traders.  The continuous nature of trading—hours each day rather than occasional auctions—created what we now call “liquidity,” enabling participants to enter or exit positions quickly.`,

    `One of the Beurs’s most enduring contributions was the creation of a primitive <span class="vocab" data-cn="清算所">clearing house</span>.  Rather than each broker settling every trade individually, a central clerk recorded all transactions and calculated net obligations at the end of the day.  This system reduced counter‑party risk and paved the way for more complex contracts, because traders could trust that their counterparties would be honoured.`,

    `The exchange also became a hotbed for <span class="vocab" data-cn="投机">speculation</span>.  Merchants began to trade not only actual shares but also forward agreements on spices, tea, and other commodities that would arrive months later.  These contracts are early examples of what we now call <span class="vocab" data-cn="金融衍生品">derivatives</span>, instruments whose value derives from an underlying asset.  Prices fluctuated wildly with news from the East Indies, turning the Beurs into a barometer for global economic sentiment.`,

    `A dramatic episode that highlighted both the power and the perils of this new market involved Isaac Le Maire, one of the VOC’s largest shareholders.  In the 1620s he attempted to “corner” the company’s stock by buying up as many shares as possible, hoping to drive prices higher and force other investors to sell at a loss.  The move backfired when the VOC issued new shares, diluting Le Maire’s holdings and prompting the authorities to introduce regulations limiting insider trading—a precursor to modern securities law.`,

    `The legacy of Amsterdam’s Beurs spread far beyond the Low Countries.  Traders from London, Hamburg, and Paris visited the exchange to observe its practices, and many copied its organisational model when establishing their own markets in the eighteenth century.  The London Stock Exchange, founded in 1801, for example, adopted a similar clearing system and even borrowed the term “ticker” from Dutch innovations.`,

    `Today, while electronic platforms have replaced wooden benches and chalkboards, the core principles first codified on Dam Square endure: transparent price discovery, centralized clearing, and regulated speculation.  Understanding how the Amsterdam Beurs transformed a handful of VOC shares into a global financial infrastructure helps us appreciate why modern markets function as they do—and reminds us that many of today’s challenges have deep historical roots.`,
  ],
  vocabulary: [
    { word: 'stock exchange', cn: '证券交易所' },
    { word: 'Dutch East India Company', cn: '荷兰东印度公司' },
    { word: 'joint‑stock company', cn: '股份有限公司' },
    { word: 'clearing house', cn: '清算所' },
    { word: 'speculation', cn: '投机' },
    { word: 'derivatives', cn: '金融衍生品' },
  ],
};

export default article;
