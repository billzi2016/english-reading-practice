import type { Article } from '../../types/index.ts';

// 文件意图：维护《Thomas Edison’s Early Electric Car Experiments: The Forgotten Origins of Modern EVs》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00204 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00204',
  slug: 'thomas-edison-s-early-electric-car-experiments-the-forgotten-origins-of-modern-evs',
  title: 'Thomas Edison’s Early Electric Car Experiments: The Forgotten Origins of Modern EVs',
  subtitle: 'How a turn‑of‑the‑century inventor planted the first seeds for today’s electric vehicles.',
  summary: 'A narrative of Thomas Edison’s battery work and early electric car prototypes that prefigured the modern EV revolution.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1900, a curious sight rolled down the cobbled streets of New York: a modest carriage humming silently while its driver waved a brass‑capped lantern. The vehicle was not powered by gasoline at all, but by an experimental storage system designed in Thomas Edison’s Menlo Park laboratory. While most people still associate Edison with incandescent bulbs and phonographs, his curiosity extended to the emerging field of motorized transport, where he hoped electricity could replace the noisy, smelly internal combustion engines that were beginning to dominate the market.`,
    `Edison’s answer was the <span class="vocab" data-cn="镍铁电池">nickel‑iron battery</span>, a rechargeable electrochemical cell he began perfecting in 1901. Unlike the fragile lead‑acid batteries of the era, the nickel‑iron design tolerated deep discharge and overcharging without rapid degradation. Its rugged steel casing made it ideal for harsh environments, and Edison marketed it as “the battery that never dies.” Though heavy—each unit weighed several dozen kilograms—the cell promised a lifespan measured in decades rather than months.`,
    `Seeing an opportunity, Edison partnered with the Electric Vehicle Company (EVC) and later supplied his batteries to Detroit Electric, one of the most successful early automobile manufacturers. In 1903 a prototype sedan equipped with a 60‑amp‑hour nickel‑iron pack was unveiled at the New York Automobile Show. The car could travel roughly thirty miles on a single charge, enough for a typical city commute of the time. Observers were impressed by its smooth acceleration and the absence of exhaust fumes, a novelty that sparked headlines proclaiming “the future of motoring.”`,
    `However, the prototype also exposed the era’s technical constraints. The battery’s energy density—how much power could be stored per kilogram—was far lower than that of gasoline, making the vehicle considerably heavier than its petrol‑powered rivals. Moreover, a sparse network of charging stations meant owners faced frequent stops at Edison’s own “power houses,” where a full recharge could take up to eight hours. This scarcity gave rise to early <span class="vocab" data-cn="里程焦虑">range anxiety</span>, a term that would reappear more than a century later as modern drivers worry about finding a charger before the battery runs flat.`,

    `Edison himself took the car on several public demonstrations, including a 1904 “electric parade” along Fifth Avenue. The carriage completed a 20‑mile loop without incident, drawing crowds who marveled at its quiet operation. Yet despite the publicity, automobile buyers remained skeptical. Gasoline was cheap, refueling stations were proliferating, and the internal combustion engine—refined by innovators like Henry Ford—offered greater range and lower upfront cost. The market’s preference for petrol vehicles accelerated after World I, when mass production drove prices down dramatically.`,
    `By 1915 Edison’s battery had largely been abandoned for passenger cars, though it found a second life in niche applications such as submarines and stationary power storage. Its durability proved valuable where maintenance was difficult, but the weight penalty prevented widespread automotive adoption. The episode illustrates how an invention can be technically sound yet fail to achieve commercial dominance because of broader economic and infrastructural forces.`,
    `Fast forward to the 21st century: modern electric vehicles rely on <span class="vocab" data-cn="锂离子电池">lithium‑ion batteries</span>, which boast far higher energy density than Edison’s nickel‑iron cells. Yet many design philosophies echo his early work—emphasizing long cycle life, safety under overcharge, and the integration of <span class="vocab" data-cn="再生制动">regenerative braking</span> to extend range. Engineers also grapple with the same infrastructure challenge, now addressed through fast‑charging networks that aim to eliminate today’s version of “range anxiety.”`,
    `Edison’s forgotten experiments remind us that the electric car is not a brand‑new invention but the result of over a hundred years of iterative engineering. By revisiting his successes and shortcomings, contemporary designers can appreciate the importance of durability, standardization, and public acceptance—lessons as relevant now as they were when a silent carriage first rolled down Manhattan’s streets.`,
  ],
  vocabulary: [
    { word: 'nickel‑iron battery', cn: '镍铁电池' },
    { word: 'rechargeable', cn: '可充电的' },
    { word: 'electrochemical', cn: '电化学的' },
    { word: 'range anxiety', cn: '里程焦虑' },
    { word: 'internal combustion engine', cn: '内燃机' },
    { word: 'lithium‑ion battery', cn: '锂离子电池' },
    { word: 'regenerative braking', cn: '再生制动' },
  ],
};

export default article;
