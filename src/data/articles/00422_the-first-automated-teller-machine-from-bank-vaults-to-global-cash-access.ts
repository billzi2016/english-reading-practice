import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Automated Teller Machine: From Bank Vaults to Global Cash Access》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00422 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00422',
  slug: 'the-first-automated-teller-machine-from-bank-vaults-to-global-cash-access',
  title: 'The First Automated Teller Machine: From Bank Vaults to Global Cash Access',
  subtitle: 'How a simple idea reshaped cash handling worldwide',
  summary: 'A narrative of the first ATM, its technology, and its lasting influence on modern banking.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early twentieth century, most banks kept their cash locked away in a massive <span class="vocab" data-cn="金库">vault</span>. Customers could only withdraw money during limited opening hours, and any after‑hours need meant a costly trip to a nearby branch or an inconvenient phone call. As urban life accelerated after World War II, the mismatch between people’s schedules and bank timetables became increasingly obvious, prompting forward‑thinking bankers to imagine a way to dispense cash without a teller present.`,
    `Enter John Shepherd‑Barron, a Scottish inventor who worked for Barclays Bank. While on holiday in 1965, he observed that many motorists stopped at petrol stations to buy cigarettes with small change. That simple observation sparked the idea of an <span class="vocab" data-cn="自动取款机">Automated Teller Machine</span> that could serve cash directly to customers at any hour. Shepherd‑Barron envisioned a machine that would act as a “cash dispenser,” allowing people to retrieve money using a coded voucher instead of waiting for a human clerk.`,
    `Barclays turned the concept into reality on June 27, 1967, when the first prototype was installed outside its Enfield branch in north‑London. The early device did not use plastic cards; instead, customers received a paper <span class="vocab" data-cn="凭单">voucher</span> impregnated with a tiny amount of radioactive carbon‑14. To withdraw cash, they inserted the voucher and entered their secret <span class="vocab" data-cn="个人识别码">Personal Identification Number</span>. The machine verified the code against an internal list and then dispensed £10 notes through a mechanical slot. It was a modest sum, but the novelty of getting money at 2 a.m. caused a local sensation.`,
    `Security quickly became a priority as thieves attempted to replicate vouchers or guess PINs. By the early 1970s, banks introduced the <span class="vocab" data-cn="磁条卡">magnetic stripe card</span>, which stored account information on a thin magnetic band. The card could be swiped through a reader, and the machine would compare the entered PIN with the encrypted data on the stripe. This shift from paper vouchers to plastic cards dramatically reduced fraud and paved the way for the modern ATM experience we recognize today.`,
    `The success of Barclays’ experiment did not stay confined to Britain. In 1969, Chemical Bank in New York opened the first United States <span class="vocab" data-cn="自动取款机">Automated Teller Machine</span>, using a similar card‑and‑PIN system but with larger cash capacities. Within a few years, banks across Europe, North America, and eventually Asia began installing their own machines, creating an early form of <span class="vocab" data-cn="网络银行">networked banking</span>. By the mid‑1970s, ATMs were appearing in shopping malls, airports, and train stations, turning cash access into a truly ubiquitous service.`,
    `Technological refinements accelerated throughout the 1980s and 1990s. Microprocessors replaced electromechanical relays, allowing machines to perform real‑time calculations and store a detailed <span class="vocab" data-cn="交易日志">transaction log</span>. To protect PINs, manufacturers adopted a <span class="vocab" data-cn="加密散列函数">cryptographic hash</span> algorithm that transformed the entered number into an unreadable string before comparison. Banks also began charging a small <span class="vocab" data-cn="手续费">surcharge</span> for non‑customer withdrawals, creating a new revenue stream and encouraging wider adoption of debit cards.`,
    `Today, more than 3 million ATMs operate in over 190 countries, handling billions of transactions each day. The original concept—a machine that could safely dispense cash on demand—has evolved into multifunctional kiosks offering bill payments, mobile phone top‑ups, and even cryptocurrency services. Yet the core principles established by Shepherd‑Barron’s modest Enfield prototype—secure authentication, reliable cash dispensing, and 24/7 availability—remain at the heart of every modern <span class="vocab" data-cn="自动取款机">Automated Teller Machine</span>. The journey from a locked <span class="vocab" data-cn="金库">vault</span> to a global network illustrates how a single inventive spark can reshape an entire industry.`,
  ],
  vocabulary: [
    { word: 'Automated Teller Machine', cn: '自动取款机' },
    { word: 'vault', cn: '金库' },
    { word: 'Personal Identification Number', cn: '个人识别码' },
    { word: 'magnetic stripe card', cn: '磁条卡' },
    { word: 'transaction log', cn: '交易日志' },
    { word: 'cryptographic hash', cn: '加密散列函数' },
  ],
};

export default article;
