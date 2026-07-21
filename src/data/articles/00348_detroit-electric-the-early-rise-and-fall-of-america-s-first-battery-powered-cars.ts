import type { Article } from '../../types/index.ts';

// 文件意图：维护《Detroit Electric: The Early Rise and Fall of America’s First Battery‑Powered Cars》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00348 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00348',
  slug: 'detroit-electric-the-early-rise-and-fall-of-america-s-first-battery-powered-cars',
  title: 'Detroit Electric: The Early Rise and Fall of America’s First Battery‑Powered Cars',
  subtitle: 'How a luxury electric marque thrived in the Brass Era before disappearing.',
  summary: 'A narrative of Detroit Electric’s birth, success, and decline, illustrating early EV technology and market forces.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `At the turn of the twentieth century, Detroit was already a hub for automobile experimentation. In 1907, former bicycle manufacturer William C. Anderson founded the <span class="vocab" data-cn="安德森电动车公司">Anderson Electric Car Company</span>, later renamed Detroit Electric. The company’s first model featured a <span class="vocab" data-cn="铅酸蓄电池">lead‑acid battery</span> pack mounted beneath the floor, delivering a quiet ride that could travel up to 80 miles on a single charge—an impressive figure when most gasoline cars struggled with reliability.`,
    `Detroit Electric quickly positioned itself as a luxury option for affluent urbanites, especially women who prized the vehicle’s lack of hand‑cranking and foul odors. The <span class="vocab" data-cn="豪华轿车">luxury sedan</span> offered plush interiors, silk upholstery, and a smooth acceleration that felt more like a carriage than a noisy motor. Advertising emphasized safety and convenience: “No oil changes, no gasoline fumes, no exhaust smoke,” the slogans read, appealing to a market segment that valued comfort over raw speed.`,
    `Technically, the cars employed an <span class="vocab" data-cn="电动传动系统">electric drivetrain</span> consisting of a direct‑current motor driving the rear axle. Early models lacked sophisticated controls; drivers simply selected forward, reverse, or neutral with a lever and modulated speed via a foot pedal that varied voltage to the motor. Although simple, this system provided instant torque, making hill climbs effortless—a stark contrast to the low‑revving gasoline engines of the era.`,
    `The company’s fortunes rose alongside Detroit’s booming auto industry, but they also faced mounting challenges. By the 1910s, Henry Ford’s <span class="vocab" data-cn="装配线">assembly line</span> dramatically lowered the price of the Model T, making gasoline cars affordable for middle‑class families. At the same time, improvements in internal combustion efficiency and the expanding network of fuel stations reduced what had been a major barrier: the fear of running out of power, later termed <span class="vocab" data-cn="续航焦虑">range anxiety</span>.`,
    `Detroit Electric attempted to innovate by experimenting with lighter battery chemistries and even early forms of <span class="vocab" data-cn="再生制动">regenerative braking</span>, which fed kinetic energy back into the batteries during deceleration. However, these advances were incremental and could not match the rapid cost reductions achieved by gasoline competitors. The company’s production remained artisanal—hand‑built in small batches—while rivals mass‑produced vehicles at a fraction of the price.`,
    `The Great Depression dealt a final blow. With disposable incomes shrinking, consumers prioritized practicality over luxury, and the cheap, fuel‑efficient Model T (and later the Ford V8) dominated sales charts. Detroit Electric’s high‑priced models could no longer find enough buyers to sustain operations. By 1939, after producing fewer than 13,000 cars in total, the factory shuttered its doors, marking the end of America’s first major electric car manufacturer.`,
    `Today, collectors cherish surviving Detroit Electrics as symbols of an early vision for clean transportation. Their story reminds us that technological superiority alone does not guarantee market success; infrastructure, price, and consumer perception play equally decisive roles. As modern manufacturers revisit battery technology—now using lithium‑ion cells instead of lead‑acid—the legacy of Detroit Electric offers both cautionary lessons and inspiration for the next wave of electric mobility.`,
  ],
  vocabulary: [
    { word: 'Anderson Electric Car Company', cn: '安德森电动车公司' },
    { word: 'lead‑acid battery', cn: '铅酸蓄电池' },
    { word: 'luxury sedan', cn: '豪华轿车' },
    { word: 'electric drivetrain', cn: '电动传动系统' },
    { word: 'assembly line', cn: '装配线' },
    { word: 'range anxiety', cn: '续航焦虑' },
    { word: 'regenerative braking', cn: '再生制动' },
  ],
};

export default article;
