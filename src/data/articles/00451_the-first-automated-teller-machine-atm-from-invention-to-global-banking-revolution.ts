import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Automated Teller Machine (ATM): From Invention to Global Banking Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00451 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00451',
  slug: 'the-first-automated-teller-machine-atm-from-invention-to-global-banking-revolution',
  title: 'The First Automated Teller Machine (ATM): From Invention to Global Banking Revolution',
  subtitle: 'How a simple cash‑dispensing device reshaped modern banking',
  summary: 'A narrative of the ATM’s birth in 1960s Britain and its ripple effects across global finance.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1967, a modest prototype sat behind a glass panel at a Barclays branch in Enfield, north‑London. Inventor <span class="vocab" data-cn="约翰·谢泼德-巴伦">John Shepherd‑Barron</span> had just finished building what he called a “cash dispenser” that could hand out banknotes on demand. The machine accepted a specially printed voucher, which the user tore off from his newspaper and inserted into a slot. Within seconds, a stack of £10 notes emerged, and the transaction was recorded on paper. This humble device marked the birth of the <span class="vocab" data-cn="自动柜员机">Automated Teller Machine</span>, or ATM.`,
    `Shepherd‑Barron’s design relied on mechanical ingenuity rather than electronic sophistication. A series of levers, springs and a rotating drum controlled the flow of cash, while a simple accounting ledger logged each withdrawal. The system was deliberately limited to one transaction per voucher, reducing the risk of fraud in an era before digital encryption. Nevertheless, the concept sparked immediate curiosity among bankers who saw the potential to extend service hours beyond the traditional 9‑to‑5 window.`,
    `A year later, American engineer <span class="vocab" data-cn="唐纳德·沃尔特">Donald Wetzel</span> and his team at Docutel refined Shepherd‑Barron’s idea by introducing the <span class="vocab" data-cn="磁条卡">magnetic stripe card</span>. This plastic token stored a small amount of data that could be read by a magnetic head, allowing customers to identify themselves without a paper voucher. Wetzel also incorporated a basic <span class="vocab" data-cn="微处理器">microprocessor</span> to manage the transaction logic, paving the way for the modern electronic ATM architecture that would dominate the 1970s and beyond.`,
    `The first fully electronic ATMs appeared in the United States in 1971, installed at Chemical Bank in New York. These machines could dispense cash, accept deposits, and even print mini‑statements. To protect users’ funds, banks introduced <span class="vocab" data-cn="密码学安全">cryptographic security</span> measures such as PIN (Personal Identification Number) verification, which transformed a simple cash dispenser into a trusted financial gateway. The combination of card technology, microprocessors, and encryption created a robust <span class="vocab" data-cn="交易处理系统">transaction processing system</span> that could operate unattended 24/7.`,
    `As the network of ATMs expanded across Europe, Asia and Latin America during the late 1970s and early 1980s, the impact on daily life was profound. People no longer needed to travel to a bank branch for basic cash needs; they could withdraw money at any time, even in remote towns where branches were scarce. This convenience contributed to greater <span class="vocab" data-cn="金融包容性">financial inclusion</span>, allowing small business owners and low‑income households to manage liquidity more effectively. Moreover, banks discovered that ATMs reduced staffing costs and queue times, prompting a rapid rollout of machines in shopping malls, airports and train stations.`,
    `By the 1990s, ATMs had become ubiquitous symbols of modern capitalism. The devices evolved further with features like multi‑currency dispensing, check scanning, and even video banking interfaces. Yet the core principle remained unchanged: an automated system that empowers customers to control their money independently of human tellers. Today, more than 3 million ATMs operate worldwide, handling billions of transactions each day—a testament to Shepherd‑Barron’s original vision and the relentless innovation that followed.`,
    `Reflecting on this journey, one can see how a modest cash dispenser sparked a global banking revolution. The ATM illustrates how a single technological breakthrough—combining mechanical design, card data storage, microprocessor control, and cryptographic security—can reshape an entire industry. As digital wallets and contactless payments rise, the legacy of the first ATM reminds us that convenience often begins with a simple idea placed behind a glass panel.`,
  ],
  vocabulary: [
    { word: 'John Shepherd‑Barron', cn: '约翰·谢泼德-巴伦' },
    { word: 'Automated Teller Machine', cn: '自动柜员机' },
    { word: 'magnetic stripe card', cn: '磁条卡' },
    { word: 'microprocessor', cn: '微处理器' },
    { word: 'cryptographic security', cn: '密码学安全' },
    { word: 'transaction processing system', cn: '交易处理系统' },
    { word: 'financial inclusion', cn: '金融包容性' },
  ],
};

export default article;
