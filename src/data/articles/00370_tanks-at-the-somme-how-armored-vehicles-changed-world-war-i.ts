import type { Article } from '../../types/index.ts';

// 文件意图：维护《Tanks at the Somme: How Armored Vehicles Changed World War I》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00370 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00370',
  slug: 'tanks-at-the-somme-how-armored-vehicles-changed-world-war-i',
  title: 'Tanks at the Somme: How Armored Vehicles Changed World War I',
  subtitle: 'The birth of mechanized warfare on the Western Front',
  summary: 'An exploration of how early tanks altered tactics, morale, and future military thinking during the Battle of the Somme.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the British and French launched the offensive on July 1, 1916, they entered a landscape dominated by <span class="vocab" data-cn="壕沟战">trench warfare</span>. Endless lines of earthworks stretched from the English Channel to Switzerland, and artillery had turned the ground into a cratered wasteland. Commanders on both sides realized that infantry assaults alone could not break the deadlock; they needed something that could cross barbed wire, survive shell splinters, and inspire troops to move forward.`,
    `The answer began to take shape in secret meetings of Britain’s Landship Committee. Engineers borrowed ideas from agricultural tractors and naval armor, envisioning a vehicle that combined an <span class="vocab" data-cn="内燃机">internal combustion engine</span> with thick <span class="vocab" data-cn="装甲板">armor plating</span>. By early 1916 prototypes such as “Little Willie” and “Mother” demonstrated the feasibility of a tracked, armored platform, but they were far from battle‑ready. The committee pressed on, driven by the urgent need for a breakthrough at the Somme.`,

    `The first production model, the British Mark I, arrived in September 1916 with a distinctive <span class="vocab" data-cn="菱形车体">rhomboid shape</span> that allowed it to cross wide trenches. Its two variants—“Male” equipped with 6‑pounder guns and “Female” carrying multiple machine guns—were powered by a 105 hp Daimler engine. On 15 September, during the Battle of Flers‑Courcelette, 49 Mark I tanks rolled forward in three waves. Though many broke down or became stuck, their presence forced German troops to abandon positions and created gaps for infantry to exploit.`,

    `Across the river, the French were fielding their own armored machines. The Schneider CA1, introduced in April 1917, featured a boxy hull and a short 75 mm gun, while the larger Saint‑Chamond boasted heavier armor but suffered from poor mobility due to its over‑engineered design. Both French tanks shared the same fundamental problems as their British cousins—unreliable engines, limited range, and difficulty navigating the shell‑pocked terrain of the Somme. Nevertheless, they demonstrated that multiple nations were converging on the idea of mechanized assault.`,

    `Tactically, the introduction of tanks reshaped how artillery and infantry coordinated attacks. Commanders experimented with a <span class="vocab" data-cn="爬坡式炮火压制">creeping barrage</span> that moved forward in timed lifts just ahead of the advancing armor, hoping to keep enemy fire suppressed while the tanks provided direct protection. The psychological shock was undeniable; German soldiers described the rumbling behemoths as “iron monsters.” Yet the early machines were slow—averaging only 4 km/h—and prone to mechanical failure, limiting their strategic impact during the Somme.`,

    `The lessons learned at the Somme fed directly into interwar tank doctrine. Military thinkers such as J.F.C. Fuller and Basil Liddell‑Hart argued that future wars would be dominated by <span class="vocab" data-cn="机械化战争">mechanized warfare</span>, emphasizing speed, combined arms, and reliable <span class="vocab" data-cn="供应链">supply chains</span>. The British refined their designs into the faster Mark V, while Germany secretly developed the A7V. By the time World War II erupted, tanks had evolved from experimental curiosities into decisive instruments of battle.`,

    `Looking back, the Somme’s armored vehicles marked a turning point in military history. They proved that technology could break the stalemate of static trench lines and forced armies to rethink strategy, logistics, and training. Although the early tanks were far from perfect, their daring debut on the fields of northern France set in motion a century‑long evolution toward the highly mobile, integrated forces we see today.`,
  ],
  vocabulary: [
    { word: 'trench warfare', cn: '壕沟战' },
    { word: 'internal combustion engine', cn: '内燃机' },
    { word: 'armor plating', cn: '装甲板' },
    { word: 'rhomboid shape', cn: '菱形车体' },
    { word: 'creeping barrage', cn: '爬坡式炮火压制' },
    { word: 'mechanized warfare', cn: '机械化战争' },
    { word: 'supply chain', cn: '供应链' },
  ],
};

export default article;
