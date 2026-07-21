import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Race to Build the First Practical Hovercraft: Christopher Cockerell’s Cushion of Air》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00500 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00500',
  slug: 'the-race-to-build-the-first-practical-hovercraft-christopher-cockerell-s-cushion-of-air',
  title: 'The Race to Build the First Practical Hovercraft: Christopher Cockerell’s Cushion of Air',
  subtitle: 'How a modest inventor sparked a worldwide competition for air‑cushion vehicles',
  summary: 'A narrative of Christopher Cockerell’s breakthrough and the international scramble to create the first usable hovercraft.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the early 1950s, a quiet engineer named <span class="vocab" data-cn="克里斯托弗·科克雷尔">Christopher Cockerell</span> was tinkering in his garage in Rugby, England. He had been working on a small model boat when he noticed that a thin layer of air escaping from a hole lifted the hull slightly. This observation sparked the idea of a <span class="vocab" data-cn="气垫船">hovercraft</span>—a vehicle that rides on a <span class="vocab" data-cn="空气垫层">cushion of air</span> rather than wheels or propellers touching water or land.`,
    `Cockerell’s first prototype, built from salvaged parts and a simple electric fan, demonstrated the principle but suffered from instability. The key problem was that the escaping air spread too quickly, causing the cushion to thin out at the edges. After months of trial and error, he invented a flexible rubber <span class="vocab" data-cn="裙边">skirt</span> that could contain the high‑pressure air beneath the vehicle, maintaining a uniform cushion even over uneven surfaces.`,
    `Word spread quickly through engineering circles, and by 1955 several companies were vying to turn Cockerell’s concept into a commercial product. The British firm Saunders‑Roe, already experienced in building flying boats, partnered with Cockerell and supplied a powerful marine diesel engine. Their design used a large axial <span class="vocab" data-cn="螺旋桨">propeller</span> to generate <span class="vocab" data-cn="推力">thrust</span>, while a secondary fan pumped air into the skirt, creating lift. This dual‑system approach balanced forward motion with stable levitation.`,
    `Meanwhile, across the Channel, French engineers at SNECMA were developing their own air‑cushion vehicle, hoping to outpace the British for naval contracts. In the Soviet Union, a team led by Boris Chertok was experimenting with similar concepts for Arctic supply routes. The competition turned into an informal “race,” each side pushing the limits of <span class="vocab" data-cn="水动力学">hydrodynamics</span> and aerodynamics to achieve higher speeds and greater payloads.`,
    `The breakthrough came in 1959 when Saunders‑Roe unveiled the SR.N1, the world’s first full‑scale practical hovercraft. On a chilly morning on the Solent, Cockerell piloted the craft across water at 60 km/h, its skirt humming as it glided effortlessly. Spectators marveled at the vehicle’s ability to transition from water to land without losing lift—a clear demonstration of true <span class="vocab" data-cn="悬浮">levitation</span>. The successful trial secured government funding and sparked a wave of commercial interest, from passenger ferries to military amphibious transports.`,
    `The ensuing years saw rapid refinements: larger skirts for rough seas, more efficient turbofan engines for greater <span class="vocab" data-cn="推力">thrust</span>, and sophisticated control systems that allowed pilots to hover precisely over obstacles. By the mid‑1960s, hovercraft were operating regular services across the English Channel and the River Thames, proving Cockerell’s once‑modest idea could reshape transportation.`,
    `Today, while newer technologies like magnetic levitation have taken some of the spotlight, the legacy of that early race endures. Modern air‑cushion vehicles still rely on the fundamental principles Cockerell discovered: a sealed cushion, a flexible skirt, and carefully balanced thrust. His story reminds us that groundbreaking inventions often begin in a humble garage, then ignite worldwide competition that drives rapid innovation.`,
  ],
  vocabulary: [
    { word: 'Christopher Cockerell', cn: '克里斯托弗·科克雷尔' },
    { word: 'hovercraft', cn: '气垫船' },
    { word: 'cushion of air', cn: '空气垫层' },
    { word: 'skirt', cn: '裙边' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'thrust', cn: '推力' },
    { word: 'hydrodynamics', cn: '水动力学' },
    { word: 'levitation', cn: '悬浮' },
  ],
};

export default article;
