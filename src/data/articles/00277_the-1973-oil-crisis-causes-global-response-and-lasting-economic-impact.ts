import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1973 Oil Crisis: Causes, Global Response, and Lasting Economic Impact》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00277 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00277',
  slug: 'the-1973-oil-crisis-causes-global-response-and-lasting-economic-impact',
  title: 'The 1973 Oil Crisis: Causes, Global Response, and Lasting Economic Impact',
  subtitle: 'How a geopolitical conflict reshaped the world economy',
  summary: 'An engaging look at why oil prices surged in 1973, how nations reacted, and what lasting changes followed.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In October 1973, the world witnessed a sudden surge in gasoline prices that would echo for decades. The trigger was not a market glitch but a coordinated political move by oil‑producing nations. As the United States and several of its allies rushed to fill their tanks, they were met with long lines, ration cards, and a stark reminder that modern life ran on a commodity far beyond any single country’s control.`,
    `The root cause lay in the <span class="vocab" data-cn="石油输出国组织">OPEC</span> (Organization of Petroleum Exporting Countries) decision to cut production by roughly 5 million barrels per day. This reduction was a direct response to Western support for Israel during the Yom Kippur War, and it manifested as an <span class="vocab" data-cn="禁运">embargo</span> against nations perceived as hostile. By limiting supply while demand remained steady, OPEC created a classic <span class="vocab" data-cn="价格冲击">price shock</span>, sending crude oil prices from about $3 per barrel to nearly $12 within months.`,
    `The immediate economic fallout was dramatic. Countries that relied heavily on imported oil saw their trade balances deteriorate overnight, and inflation began to climb at an unprecedented pace. In the United States, the Consumer Price Index rose by more than 10 % in a single year, while industrial output stalled. This combination of rising prices and stagnant growth gave birth to what economists later called <span class="vocab" data-cn="滞胀">stagflation</span>, a rare and troubling mix of inflation and unemployment that challenged traditional macroeconomic theory.`,
    `Governments scrambled to mitigate the crisis. The United States instituted a nationwide gasoline rationing program known as “the 55‑mile per gallon rule,” encouraging drivers to reduce mileage and adopt more fuel‑efficient vehicles. European nations introduced price controls on energy, while Japan accelerated its investment in alternative energy sources such as liquefied natural gas (LNG). These policy shifts highlighted the growing importance of <span class="vocab" data-cn="能源安全">energy security</span> as a national priority, prompting the creation of strategic petroleum reserves that still exist today.`,
    `Beyond immediate measures, the crisis reshaped long‑term economic structures. The influx of petrodollars—oil revenues paid in U.S. dollars—led to the rise of the <span class="vocab" data-cn="石油美元体系">petrodollar</span> system, where oil‑exporting countries reinvested their earnings in Western financial markets. This created a feedback loop that reinforced the dollar’s dominance but also tied global finance more closely to volatile commodity prices. Meanwhile, many industries were forced to innovate: automobile manufacturers developed smaller, more efficient engines, and airlines began exploring fuel‑saving flight routes.`,
    `The legacy of 1973 extends into contemporary debates on climate change and renewable energy. The crisis proved that a sudden disruption in <span class="vocab" data-cn="供应链">supply chain</span> could cripple even the most advanced economies, prompting today’s policymakers to diversify energy portfolios with solar, wind, and nuclear power. It also taught economists that traditional tools—like simply adjusting interest rates—might be insufficient when inflation is driven by external shocks rather than domestic demand.`,
    `Looking back, the 1973 oil crisis serves as a cautionary tale about the interconnectedness of geopolitics, resource markets, and economic stability. While the world has not experienced another shock of comparable magnitude, the lessons learned continue to inform strategies for managing <span class="vocab" data-cn="能源危机">energy crises</span> and safeguarding growth against unforeseen disruptions.`,
  ],
  vocabulary: [
    { word: 'OPEC', cn: '石油输出国组织' },
    { word: 'embargo', cn: '禁运' },
    { word: 'price shock', cn: '价格冲击' },
    { word: 'stagflation', cn: '滞胀' },
    { word: 'energy security', cn: '能源安全' },
    { word: 'petrodollar', cn: '石油美元体系' },
    { word: 'supply chain', cn: '供应链' },
    { word: 'energy crisis', cn: '能源危机' },
  ],
};

export default article;
