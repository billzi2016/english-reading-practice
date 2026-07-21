import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Secret Life of Ice Worms: Survival Strategies in Subglacial Antarctic Rivers》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00102 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00102',
  slug: 'the-secret-life-of-ice-worms-survival-strategies-in-subglacial-antarctic-rivers',
  title: 'The Secret Life of Ice Worms: Survival Strategies in Subglacial Antarctic Rivers',
  subtitle: 'How glacier‑dwelling annelids and their Antarctic counterparts thrive beneath the ice.',
  summary: 'Explore the remarkable adaptations that let ice worms survive on glaciers and how similar tricks help life persist in Antarctica’s hidden rivers.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `Beneath the endless white of Antarctica, a network of <span class="vocab" data-cn="亚冰层河流">subglacial rivers</span> flows silently, insulated from sunlight and warmed only by geothermal heat. For decades these waterways were thought to be lifeless, but recent drilling campaigns have revealed thriving microbial communities and tiny metazoans that echo the strategies of a more famous cold‑lover: the ice worm.`,
    `The classic ice worm, <span class="vocab" data-cn="冰虫">Mesenchytraeus solifugus</span>, is an annelid about 1–2 cm long that lives on the surface of temperate glaciers in Alaska and the Pacific Northwest. Unlike most earthworms, it can move across ice at temperatures just below 0 °C without freezing solid. Its translucent body glistens with a thin layer of mucus that prevents desiccation, and its cuticle remains flexible even when the surrounding air is frigid.`,
    `Key to this feat are specialized <span class="vocab" data-cn="抗冻蛋白">antifreeze proteins</span> (AFPs) that bind to nascent ice crystals, halting their growth and protecting cellular membranes. Ice worms also produce high concentrations of low‑molecular cryoprotectants such as glycerol, which lower the freezing point of body fluids. Together with a remarkable <span class="vocab" data-cn="代谢抑制">metabolic depression</span> during the coldest months, these mechanisms allow the worm to remain active when most organisms would be immobilized.`,
    `During the brief summer melt, ice worms emerge from their icy refuges to feed on abundant <span class="vocab" data-cn="光合作用藻类">snow algae</span>. Their rapid life cycle—egg, larva, adult within weeks—matches the fleeting window of liquid water. By grazing on algal mats, they recycle nutrients and help sustain a miniature food web that includes predatory mites and microscopic rotifers.`,
    `In Antarctica’s hidden rivers, scientists have identified nematodes, tardigrades, and even tiny annelid‑like creatures that face the same extreme constraints: near‑freezing temperatures, low oxygen, and scarce organic carbon. These organisms employ parallel adaptations, such as synthesizing <span class="vocab" data-cn="耐寒酶">cold‑active enzymes</span> that function efficiently at 0 °C, and secreting <span class="vocab" data-cn="细胞外聚合物物质">extracellular polymeric substances</span> (EPS) to create protective biofilms that inhibit ice crystal intrusion.`,
    `The EPS matrix not only shields cells from mechanical damage but also traps dissolved nutrients, forming micro‑habitats where microbial consortia can exchange metabolites. Some Antarctic nematodes accumulate trehalose, another cryoprotectant, which stabilizes proteins and membranes during freeze‑thaw cycles—an approach strikingly similar to the glycerol strategy of ice worms.`,
    `Studying these convergent survival tactics offers more than academic insight. <span class="vocab" data-cn="抗冻蛋白">Antifreeze proteins</span> derived from ice worms are already being explored for use in frozen food preservation, organ transplantation, and even climate‑resilient crops. Moreover, monitoring the health of subglacial river ecosystems provides a sensitive indicator of basal melt rates and geothermal activity beneath the Antarctic Ice Sheet, crucial data for predicting sea‑level rise.`,
    `The secret lives hidden under ice remind us that life can flourish in places we once deemed barren. As drilling technology improves and remote sensing becomes finer, future expeditions will likely uncover even more ingenious strategies—each a testament to evolution’s capacity to turn the harshest cold into a niche for survival.`
  ],
  vocabulary: [
    { word: 'subglacial rivers', cn: '亚冰层河流' },
    { word: 'Mesenchytraeus solifugus', cn: '冰虫' },
    { word: 'antifreeze proteins', cn: '抗冻蛋白' },
    { word: 'metabolic depression', cn: '代谢抑制' },
    { word: 'snow algae', cn: '光合作用藻类' },
    { word: 'cold-active enzymes', cn: '耐寒酶' },
    { word: 'extracellular polymeric substances', cn: '细胞外聚合物物质' }
  ],
};

export default article;
