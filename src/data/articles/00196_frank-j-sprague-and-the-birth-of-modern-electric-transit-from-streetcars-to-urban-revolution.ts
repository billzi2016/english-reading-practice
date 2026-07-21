import type { Article } from '../../types/index.ts';

// 文件意图：维护《Frank J. Sprague and the Birth of Modern Electric Transit: From Streetcars to Urban Revolution》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00196 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00196',
  slug: 'frank-j-sprague-and-the-birth-of-modern-electric-transit-from-streetcars-to-urban-revolution',
  title: 'Frank J. Sprague and the Birth of Modern Electric Transit: From Streetcars to Urban Revolution',
  subtitle: 'How one engineer turned horse‑drawn carriages into the backbone of today’s cities',
  summary: 'Explore Frank J. Sprague’s pioneering work that launched electric streetcars and reshaped urban mobility.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When a late‑19th‑century commuter in Richmond, Virginia stepped onto a wooden platform, he could not have imagined that the rattling vehicle about to glide past would become the template for modern mass transit. The clatter of horse‑drawn carriages was giving way to a quieter, smoother ride powered by electricity—a transformation largely credited to an often‑overlooked inventor named <span class="vocab" data-cn="弗兰克·J·斯普拉格">Frank J. Sprague</span>.`,
    `Born in 1857 on a farm near Dayton, Ohio, Sprague displayed an early fascination with machines. After studying at the University of Kansas and briefly working for Thomas Edison’s laboratory, he turned his attention to electric motors. In 1886 he patented a high‑efficiency <span class="vocab" data-cn="电动机">electric motor</span> that could run continuously without overheating—a breakthrough that would later make reliable streetcar service possible.`,
    `The real test came in 1888 when the Richmond City Railway Company hired Sprague to replace its failing horse‑car system. Using his new motor, he installed a <span class="vocab" data-cn="电气牵引">electric traction</span> system that drew power from overhead wires via a simple <span class="vocab" data-cn="受电弓">trolley pole</span>. The result was a fleet of streetcars that could travel at 12 miles per hour, carry twice as many passengers, and operate around the clock. Within months the city’s ridership doubled, proving that electric transit was not just feasible but superior.`,
    `Sprague didn’t stop at Richmond. He refined his designs to handle longer distances, giving rise to the <span class="vocab" data-cn="城际电车">interurban</span> network that linked small towns across the Midwest. By the early 1900s, more than a dozen states boasted interurban lines powered by Sprague’s technology, effectively shrinking regional economies and encouraging daily commuting long before automobiles became affordable.`,
    `Perhaps the most enduring legacy of Sprague’s work is his influence on underground railways. In 1895 he consulted on New York City’s first subway line, applying his expertise in <span class="vocab" data-cn="直流电">direct current (DC)</span> distribution and motor control to a subterranean environment. The success of the IRT (Interborough Rapid Transit) demonstrated that electric propulsion could conquer even the most challenging urban terrain, paving the way for today’s extensive metro systems worldwide.`,
    `Modern transit still benefits from Sprague’s early innovations. Concepts such as <span class="vocab" data-cn="再生制动">regenerative braking</span>, which captures kinetic energy during deceleration and feeds it back into the power grid, trace their lineage to his experiments with motor efficiency. Likewise, contemporary light‑rail vehicles retain the basic architecture of a motor, controller, and overhead supply—a testament to the durability of his designs.`,
    `In retrospect, Sprague’s contributions were more than technical; they reshaped how cities grew. By providing reliable, affordable transport, electric streetcars encouraged dense, mixed‑use neighborhoods, reduced reliance on horse waste and coal smoke, and set a precedent for public investment in infrastructure. The urban revolutions of the 20th century—suburban expansion, commuter culture, and even today’s push toward sustainable mobility—can all be linked back to that first electric car gliding down Richmond’s Main Street over a century ago.`,
    `Today, as cities worldwide experiment with autonomous buses and battery‑powered trams, the spirit of Frank J. Sprague lives on: an engineer who saw electricity not merely as a novelty but as a catalyst for societal change. His story reminds us that transformative technology often begins with a single, well‑engineered solution that, when scaled, can rewrite the very map of human movement.`,
  ],
  vocabulary: [
    { word: 'Frank J. Sprague', cn: '弗兰克·J·斯普拉格' },
    { word: 'electric motor', cn: '电动机' },
    { word: 'electric traction', cn: '电气牵引' },
    { word: 'trolley pole', cn: '受电弓' },
    { word: 'interurban', cn: '城际电车' },
    { word: 'direct current (DC)', cn: '直流电' },
    { word: 'regenerative braking', cn: '再生制动' },
  ],
};

export default article;
