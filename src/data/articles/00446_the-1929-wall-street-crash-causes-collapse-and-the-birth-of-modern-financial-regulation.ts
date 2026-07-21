import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1929 Wall Street Crash: Causes, Collapse, and the Birth of Modern Financial Regulation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00446 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00446',
  slug: 'the-1929-wall-street-crash-causes-collapse-and-the-birth-of-modern-financial-regulation',
  title: 'The 1929 Wall Street Crash: Causes, Collapse, and the Birth of Modern Financial Regulation',
  subtitle: 'How a single market collapse reshaped America’s financial architecture.',
  summary: 'An engaging narrative that explains why the 1929 crash happened, how it unfolded, and which institutions emerged to prevent its repeat.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `The late 1920s in the United States are often remembered as the “Roaring Twenties,” a decade of jazz, automobiles, and an unprecedented surge in stock market participation. Ordinary citizens could walk into a brokerage office, hand over a modest sum, and become shareholders overnight. This cultural shift was powered by a belief that the market would rise forever, creating a fertile ground for <span class="vocab" data-cn="投机">speculation</span> that would later prove disastrous.`,
    `Two financial practices amplified the risk: <span class="vocab" data-cn="保证金买入">margin buying</span> and easy credit. Investors were allowed to purchase stocks by borrowing up to 90 % of the price, pledging only a small down‑payment as collateral. When stock prices rose, their returns multiplied; when they fell, borrowers faced immediate calls for additional cash. Banks, eager to profit from interest on these loans, extended credit with minimal scrutiny, inflating asset bubbles far beyond the economy’s productive capacity.`,
    `The crash began on Thursday, October 24, 1929—later dubbed “Black Thursday.” A sudden wave of sell orders overwhelmed the New York Stock Exchange, and brokers scrambled to find buyers. Panic spread as prices fell sharply, prompting a cascade of margin calls that forced investors to liquidate holdings at ever‑lower prices. By Friday, the market had lost nearly a quarter of its value, and the term <span class="vocab" data-cn="破产">bankruptcy</span> entered everyday conversation as firms across sectors announced insolvency.`,
    `The shock was not confined to Wall Street. As banks that had financed margin purchases suffered losses, they curtailed lending, triggering a contraction in consumer spending and industrial production. Deflation set in, driving prices down while wages remained stagnant, which in turn heightened unemployment. By 1933, the United States’ unemployment rate hovered around 25 %, illustrating how a financial panic can cascade into a broader economic depression.`,
    `Policy makers of the era faced a dilemma: intervene or let market forces correct themselves. The <span class="vocab" data-cn="联邦储备系统">Federal Reserve</span> hesitated, fearing that aggressive monetary easing would undermine confidence in the <span class="vocab" data-cn="金本位制">Gold Standard</span>. Their reluctance to inject liquidity allowed the money supply to shrink further, deepening the deflationary spiral. Critics later argued that a more decisive response could have softened the downturn.`,
    `The most lasting legacy of the crash was the birth of modern financial regulation. In 1933, Congress passed the <span class="vocab" data-cn="格拉斯-斯蒂格尔法案">Glass‑Steagall Act</span>, which separated commercial banking from investment banking to prevent banks from using depositor funds for risky securities trading. Five years later, the <span class="vocab" data-cn="证券交易委员会">Securities and Exchange Commission (SEC)</span> was established to enforce transparency, require regular financial disclosures, and curb insider trading—principles that still underpin U.S. markets today.`,
    `The 1929 crash taught economists and legislators a stark lesson: unchecked optimism combined with lax oversight can destabilize an entire economy. While the Great Depression eventually gave way to post‑World War II prosperity, the regulatory framework forged in its aftermath remains a cornerstone of financial stability. Contemporary debates over deregulation echo the same tensions that sparked the 1929 collapse, reminding us that history’s warnings are only as powerful as our willingness to heed them.`,
  ],
  vocabulary: [
    { word: 'speculation', cn: '投机' },
    { word: 'margin buying', cn: '保证金买入' },
    { word: 'bankruptcy', cn: '破产' },
    { word: 'Federal Reserve', cn: '联邦储备系统' },
    { word: 'Gold Standard', cn: '金本位制' },
    { word: 'Glass‑Steagall Act', cn: '格拉斯-斯蒂格尔法案' },
    { word: 'Securities and Exchange Commission (SEC)', cn: '证券交易委员会' },
  ],
};

export default article;
