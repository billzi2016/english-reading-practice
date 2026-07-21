import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Cuban Missile Crisis: A 13‑Day Standoff That Redefined Global Politics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00207 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00207',
  slug: 'the-cuban-missile-crisis-a-13-day-standoff-that-redefined-global-politics',
  title: 'The Cuban Missile Crisis: A 13‑Day Standoff That Redefined Global Politics',
  subtitle: 'How a tense showdown between superpowers reshaped the Cold War.',
  summary: 'An in‑depth look at the 1962 crisis that brought the world to the brink of nuclear war and forced new diplomatic strategies.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In mid‑October 1962, a U.S. reconnaissance flight over the Caribbean captured images of Soviet medium‑range ballistic missiles hidden in secret silos on the island of Cuba. The discovery sparked what would become known as the <span class="vocab" data-cn="古巴导弹危机">Cuban Missile Crisis</span>, a 13‑day confrontation that forced President John F. Kennedy and Premier Nikita Khrushchev into a high‑stakes diplomatic duel, with the fate of millions hanging in the balance.`,
    `Kennedy’s administration convened an emergency committee called the <span class="vocab" data-cn="执行委员会">ExComm</span> to evaluate options ranging from air strikes to full‑scale invasion. After intense debate, Kennedy chose a middle path: he announced a naval <span class="vocab" data-cn="封锁（在此指海上禁运）">quarantine</span> of Cuba, demanding the removal of the missiles while leaving room for negotiation. This measured response was designed to signal resolve without immediately triggering a military clash that could spiral into nuclear exchange.`,
    `Behind the public posturing, secret diplomatic channels—often referred to as <span class="vocab" data-cn="后勤渠道">backchannel</span> communications—were opened between the White House and the Kremlin. One such conduit involved a private letter from Khrushchev to Kennedy, offering to dismantle the missiles in exchange for a U.S. pledge not to invade Cuba and a secret promise to withdraw American Jupiter missiles from Turkey. These covert talks illustrated the principle of <span class="vocab" data-cn="核威慑">nuclear deterrence</span>, where each side’s willingness to retaliate prevented outright war.`,
    `The crisis reached its climax on October 27, when a U.S. U‑2 spy plane was shot down over Cuba and another American aircraft nearly struck the Soviet destroyer <em>Moskva</em>. Simultaneously, the Joint Chiefs of Staff prepared a contingency plan for an invasion that would have likely resulted in massive casualties on both sides. Yet, thanks to the backchannel negotiations, both leaders recognized that any misstep could trigger <span class="vocab" data-cn="相互确保毁灭">mutual assured destruction</span>, a doctrine that had become the grim cornerstone of Cold War strategy.`,
    `On October 28, Khrushchev publicly announced that Soviet missiles would be withdrawn from Cuba, and Kennedy secretly agreed to remove the Jupiter missiles from Turkey within a few months. The public statements emphasized peace and de‑escalation, while the private agreements reflected a pragmatic compromise that avoided catastrophe. This resolution not only defused an immediate threat but also set a precedent for future crisis management, highlighting the importance of direct communication between superpowers.`,
    `In the aftermath, both nations took steps to reduce the risk of accidental war. The United States and the Soviet Union established the <span class="vocab" data-cn="防止核战争热线">Hotline</span>, a dedicated communications link intended for rapid dialogue during emergencies. Moreover, the crisis spurred the signing of the 1963 Limited Test Ban Treaty, which prohibited atmospheric nuclear tests and marked the first major arms‑control agreement of the Cold War era.`,
    `The legacy of the <span class="vocab" data-cn="古巴导弹危机">Cuban Missile Crisis</span> endures in contemporary international relations. It demonstrated that even the most dangerous confrontations could be resolved through careful negotiation, credible deterrence, and a willingness to compromise. Scholars often cite the crisis as a turning point that shifted global politics from reckless brinkmanship toward a more structured system of diplomatic engagement and arms control.`,
  ],
  vocabulary: [
    { word: 'Cuban Missile Crisis', cn: '古巴导弹危机' },
    { word: 'ExComm', cn: '执行委员会' },
    { word: 'quarantine', cn: '封锁（在此指海上禁运）' },
    { word: 'backchannel', cn: '后勤渠道' },
    { word: 'nuclear deterrence', cn: '核威慑' },
    { word: 'mutual assured destruction', cn: '相互确保毁灭' },
    { word: 'Hotline', cn: '防止核战争热线' },
  ],
};

export default article;
