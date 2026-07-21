import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Zulu Victory at Isandlwana: A Clash That Redefined Colonial Warfare》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00128 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00128',
  slug: 'the-zulu-victory-at-isandlwana-a-clash-that-redefined-colonial-warfare',
  title: 'The Zulu Victory at Isandlwana: A Clash That Redefined Colonial Warfare',
  subtitle: 'How a single battle reshaped the expectations of empire and indigenous power.',
  summary: 'An in‑depth look at the 1879 Battle of Isandlwana, where the <span class="vocab" data-cn="祖鲁王国">Zulu Kingdom</span> dealt a shocking defeat to the <span class="vocab" data-cn="大英帝国">British Empire</span>, changing colonial military thinking forever.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `On the morning of 22 January 1879, a mist‑laden plain near the town of <span class="vocab" data-cn="伊桑杜瓦纳（战役地点）">Isandlwana</span> in present‑day KwaZulu‑Natal became the stage for one of the most dramatic reversals in 19th‑century warfare. The British column, part of a larger expedition to annex the Zulu Kingdom, had set up a defensive camp after a brief march from the coastal base at Rorke’s Drift. What they expected to be a routine reconnaissance turned into a clash that would force military planners across the empire to rethink their assumptions about indigenous forces.`,
    `The Zulu army that approached the British laager was not a ragtag militia but a highly disciplined <span class="vocab" data-cn="祖鲁部队（冲锋队）">impi</span> organized into regiments called “ibutho.” Each regiment could field up to 500 warriors, all trained in close‑quarter combat and the famous “horns of the buffalo” formation—an encircling maneuver designed to envelop an enemy. Armed primarily with short stabbing spears (assegais) and large shields, the Zulu fighters also carried a few rifles captured from earlier skirmishes, but their strength lay in speed, coordination, and sheer numbers, estimated at around 20 000 men for this engagement.`,
    `Opposing them, the British force comprised roughly 1 800 soldiers, including infantry of the 24th Regiment of Foot, artillerymen, and a contingent of colonial volunteers from <span class="vocab" data-cn="纳塔尔省">Natal</span>. Their defensive posture relied on a square formation known as a <span class="vocab" data-cn="防御圈阵">laager</span>, reinforced by wooden wagons tied together. The infantry were equipped with the Snider‑Enfield, a breech‑loading <span class="vocab" data-cn="弹匣步枪">magazine rifle</span> that could fire up to ten rounds before reloading—a technological edge that had given European armies confidence in colonial battles for decades.`,
    `When the Zulu war‑cry rose across the plain, the British laager opened fire, and the initial volleys seemed to confirm their superiority. However, the Zulu commanders, led by Prince Dabulamanzi kaMpande, executed the “horns” with relentless precision. The left and right “horns” swept around the British perimeter while the central “chest” pressed forward, exploiting gaps in the laager’s outer defenses. By mid‑morning, the Zulu forces had closed in on all sides, and the British soldiers found themselves fighting a battle they could not see—enemy combatants appearing from behind wagons, rocks, and even their own fallen comrades.`,
    `The turning point came when ammunition supplies ran low. The British had brought enough cartridges for only a few hours of sustained fire, assuming that the superior range of their rifles would keep the Zulu at bay. As the battle dragged on, the soldiers were forced to abandon their positions to reload by hand, exposing themselves to the ferocious charge of assegais. Within an hour, the laager’s defensive line collapsed; artillery pieces were overrun, and the British suffered catastrophic casualties—over 1 300 men killed or wounded, a loss that shocked even seasoned officers back in London.`,
    `News of the defeat traveled quickly across the empire, prompting a reevaluation of <span class="vocab" data-cn="殖民战争">colonial warfare</span> doctrine. The British realized that technological superiority alone could not guarantee victory against an opponent who understood the terrain and employed innovative tactics. Subsequent campaigns in South Africa placed greater emphasis on reconnaissance, supply line security, and adapting to mobile enemy forces. Ironically, while Isandlwana was a disaster for the British, it also set the stage for the famous defense at Rorke’s Drift later that same day, where a small garrison held out against a Zulu assault—a narrative that would dominate popular memory of the war.`,
    `Today, the ruins of <span class="vocab" data-cn="伊桑杜瓦纳（战役地点）">Isandlwana</span> stand as a reminder that empire is not inexorable. Historians cite the battle as a case study in how underestimating an opponent’s morale and tactics can lead to strategic calamity. The Zulu victory, though ultimately short‑lived—British forces would later capture the Zulu capital of Ulundi—still reshaped military thinking and left an indelible mark on both British and African histories. It serves as a powerful illustration that courage, organization, and cultural understanding can overturn even the most formidable odds.`,
  ],
  vocabulary: [
    { word: 'Zulu Kingdom', cn: '祖鲁王国' },
    { word: 'Isandlwana', cn: '伊桑杜瓦纳（战役地点）' },
    { word: 'laager', cn: '防御圈阵' },
    { word: 'magazine rifle', cn: '弹匣步枪' },
    { word: 'colonial warfare', cn: '殖民战争' },
    { word: 'impi', cn: '祖鲁部队（冲锋队）' },
    { word: 'British Empire', cn: '大英帝国' },
    { word: 'Natal', cn: '纳塔尔省' },
  ],
};

export default article;
