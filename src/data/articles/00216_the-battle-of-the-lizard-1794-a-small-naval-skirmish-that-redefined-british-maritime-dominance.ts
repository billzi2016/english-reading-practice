import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Battle of the Lizard (1794): A Small Naval Skirmish That Redefined British Maritime Dominance》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00216 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00216',
  slug: 'the-battle-of-the-lizard-1794-a-small-naval-skirmish-that-redefined-british-maritime-dominance',
  title: 'The Battle of the Lizard (1794): A Small Naval Skirmish That Redefined British Maritime Dominance',
  subtitle: 'How a brief clash off Cornwall’s tip illustrated Britain’s strategic edge at sea',
  summary: 'A look at the little‑known 1794 encounter near The Lizard and why even minor actions mattered in the age of sail.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the spring of 1794, as the French Revolutionary Wars intensified, the waters around the southern tip of Cornwall—known locally as The Lizard—became a bustling corridor for merchant ships and naval patrols. The narrow headland juts into the English Channel, making it an ideal point to monitor traffic between the Atlantic and the busy ports of Plymouth and Portsmouth. British Admiralty officials had long recognized that controlling this choke‑point could cripple French supply lines, so they stationed several <span class="vocab" data-cn="轻快的帆船">sloops</span> and a lone <span class="vocab" data-cn="护卫舰">frigate</span> to intercept any hostile vessels daring to slip through.`,
    `On a fog‑laden morning in early May, lookouts aboard the British frigate HMS Lively spotted the silhouette of a French convoy attempting to round the headland. The convoy consisted of three merchantmen laden with grain and ammunition, escorted by a modest <span class="vocab" data-cn="小型军舰">corvette</span>. Captain Edward Pellew, who would later become famous for his daring actions in the Napoleonic Wars, ordered an immediate chase. By exploiting the prevailing wind—known to sailors as the “Lizard breeze”—the British ship gained a tactical advantage and closed within cannon range before the French could fully form their line of battle.`,
    `The ensuing exchange was brief but intense. The Lively’s <span class="vocab" data-cn="火炮">carronades</span> unleashed a rapid volley that shattered the corvette’s fore‑mast, rendering it dead in the water. Meanwhile, the French merchantmen attempted to scatter, hoping to escape under cover of the mist. Two of them were overtaken and forced to surrender after a short cannonade; the third managed to slip away, later reported arriving safely at Brest. The British prize crews boarded the captured vessels, securing valuable cargo that would have otherwise bolstered the French war effort.`,
    `Although the clash lasted less than an hour, its strategic ripple was significant. By denying the French a fresh supply of grain, the Royal Navy not only weakened the enemy’s logistical chain but also sent a clear message to privateers: the waters off The Lizard were heavily patrolled and dangerous for hostile traffic. This episode reinforced the broader British doctrine of “blockade by presence,” where even minor engagements contributed to an overarching strategy of maritime containment.`,
    `Historians note that the Battle of the Lizard exemplifies how <span class="vocab" data-cn="小规模冲突">small‑scale actions</span> could influence larger geopolitical outcomes. The Royal Navy’s ability to project power at remote points along the coast meant that French merchants and naval planners had to constantly reroute, increasing travel time and costs. Over the next two years, similar skirmishes peppered the Channel, each chipping away at France’s capacity to sustain its armies on the continent.`,
    `The legacy of this 1794 encounter lives on in naval scholarship as a case study of “force multiplication.” By leveraging superior seamanship, local knowledge of wind patterns, and disciplined gunnery, a single British frigate achieved results that larger fleet actions would later replicate. Modern maritime strategists still cite The Lizard episode when discussing the importance of controlling narrow sea lanes—a principle that underpins everything from World War II convoy routes to today’s anti‑piracy patrols in the Gulf of Aden.`,
    `For readers interested in exploring this period further, primary sources such as Admiral Sir John Jervis’ dispatches and the logbooks of HMS Lively provide vivid first‑hand accounts. Meanwhile, contemporary analyses by naval historians like N.A.M. Rodger illustrate how these “minor” battles collectively forged Britain’s reputation as the dominant sea power of the late eighteenth century.`,
  ],
  vocabulary: [
    { word: 'sloops', cn: '轻快的帆船' },
    { word: 'frigate', cn: '护卫舰' },
    { word: 'corvette', cn: '小型军舰' },
    { word: 'carronades', cn: '火炮（短管大口径）' },
    { word: 'small‑scale actions', cn: '小规模冲突' },
    { word: 'force multiplication', cn: '力量倍增（通过技术或策略提升作战效果）' },
  ],
};

export default article;
