import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Gossamer Condor’s Triumph: How a Human‑Powered Aircraft Won the Kremer Prize》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00317 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00317',
  slug: 'the-gossamer-condor-s-triumph-how-a-human-powered-aircraft-won-the-kremer-prize',
  title: 'The Gossamer Condor’s Triumph: How a Human‑Powered Aircraft Won the Kremer Prize',
  subtitle: 'A daring flight that proved human muscle could lift an aircraft.',
  summary: 'In 1977 Paul MacCready’s Gossamer Condor completed a figure‑eight course and claimed the first Kremer prize, reshaping aerospace design.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `The story begins in the early 1970s when aerospace engineer <span class="vocab" data-cn="保罗·麦克卡迪">Paul MacCready</span> grew frustrated with conventional aircraft that relied on powerful engines and heavy fuel. He imagined a machine powered solely by human effort—a <span class="vocab" data-cn="人力驱动的飞机">human‑powered aircraft</span>. To test his theory, he announced a challenge: anyone who could fly a craft under their own muscle power around a prescribed course would win the newly created <span class="vocab" data-cn="克雷默奖">Kremer prize</span>. The prize promised not only cash but also lasting fame for proving that aerodynamics and lightweight engineering could overcome raw horsepower.`,
    `MacCready assembled a small team of engineers, students, and cyclists. Their first task was to choose materials light enough to keep the aircraft’s weight under 70 pounds yet strong enough to endure aerodynamic loads. They turned to <span class="vocab" data-cn="轻质复合材料">lightweight composite</span> fabrics—Mylar film stretched over carbon‑fiber ribs—and used aluminum tubing for the spars. The resulting structure was so delicate that a gentle breeze could threaten its integrity, but it also gave the aircraft an unprecedented low <span class="vocab" data-cn="抗拉强度">tensile strength</span>‑to‑weight ratio.`,
    `The Gossamer Condor’s wing planform resembled a giant kite more than a traditional airplane. Its wingspan stretched over 96 feet, giving it an extraordinary <span class="vocab" data-cn="展弦比">aspect ratio</span> that reduced induced drag. The designers added a modest <span class="vocab" data-cn="倾角">dihedral angle</span> to the outer wing panels, which helped stabilize roll without the need for heavy control surfaces. Propulsion came from a single large <span class="vocab" data-cn="螺旋桨">propeller</span> driven by a bicycle‑style crank attached to the pilot’s seat, converting leg power directly into thrust.`,
    `The official competition required pilots to complete a <span class="vocab" data-cn="八字飞行路线">figure‑eight course</span> that measured 1 km in each loop, with the aircraft staying aloft for at least 20 minutes. The course was set over a shallow lake near Shafter, California, so any loss of lift would result in an immediate splash landing. The rules also stipulated that the craft could not be tethered or assisted by wind currents; pure human power had to sustain flight from take‑off to touchdown.`,
    `On August 23, 1977, cyclist‑turned‑pilot <span class="vocab" data-cn="布莱恩·艾伦">Bryan Allen</span> took his place on the Condor’s narrow seat. He began pedaling at a steady cadence, generating roughly 0.4 horsepower—just enough to keep the propeller turning. As the aircraft lifted off, its massive wings glided smoothly over the water, and Allen maintained a delicate balance between speed and lift. After completing the first loop, he slowed slightly for the second turn, carefully managing his energy reserves. When the final crossing was logged, the judges confirmed that all criteria had been met, awarding MacCready’s team the inaugural Kremer prize of $25,000.`,
    `The victory sparked a wave of interest in ultra‑light aviation and demonstrated that clever engineering could amplify modest human effort into sustained flight. Within months, MacCready’s group built the Gossamer Albatross, which crossed the English Channel in 1979 using the same principles—a feat that captured worldwide attention and cemented the legacy of human‑powered flight. Universities began offering courses on low‑speed aerodynamics, and hobbyists experimented with similar designs for sport and education.`,
    `Today, the Gossamer Condor is displayed at the Smithsonian’s National Air and Space Museum, reminding visitors that imagination paired with rigorous engineering can defy expectations. Its story continues to inspire modern projects such as solar‑powered drones and lightweight UAVs, where the same quest for minimal mass and maximal efficiency drives innovation. The Condor’s triumph remains a testament to what can be achieved when engineers dare to let human muscle, not machines, take the lead.`,
  ],
  vocabulary: [
    { word: 'human-powered aircraft', cn: '人力驱动的飞机' },
    { word: 'Kremer prize', cn: '克雷默奖' },
    { word: 'figure-eight course', cn: '八字飞行路线' },
    { word: 'dihedral angle', cn: '倾角' },
    { word: 'aspect ratio', cn: '展弦比' },
    { word: 'tensile strength', cn: '抗拉强度' },
  ],
};

export default article;
