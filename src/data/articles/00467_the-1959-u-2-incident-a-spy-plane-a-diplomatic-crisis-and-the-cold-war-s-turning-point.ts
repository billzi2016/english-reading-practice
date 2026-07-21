import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1959 U‑2 Incident: A Spy Plane, a Diplomatic Crisis, and the Cold War’s Turning Point》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00467 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00467',
  slug: 'the-1959-u-2-incident-a-spy-plane-a-diplomatic-crisis-and-the-cold-war-s-turning-point',
  title: 'The 1959 U‑2 Incident: A Spy Plane, a Diplomatic Crisis, and the Cold War’s Turning Point',
  subtitle: 'How early high‑altitude flights set the stage for one of the Cold War’s most dramatic confrontations.',
  summary: 'A narrative of the 1959 U‑2 overflights, the political fallout, and their lasting impact on East‑West relations.',
  category: 'history',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `It was a crisp autumn night in 1959 when a sleek, silver aircraft slipped silently above the clouds, its engines humming at an altitude that seemed to touch the stratosphere. The pilot, perched in a cramped cockpit, knew he was part of a secret <span class="vocab" data-cn="侦察">reconnaissance</span> mission that could change the balance of power between Washington and Moscow. Below him, the Soviet Union sprawled like a dark quilt, its borders guarded by radar stations eager to catch any intruder daring enough to breach their airspace.`,
    `The aircraft in question was the Lockheed <span class="vocab" data-cn="U‑2 高空侦察机">U‑2</span>, a marvel of engineering designed to fly higher than any Soviet interceptor could reach. Its wings, long and delicate, gave it an almost glider‑like silhouette, while its powerful turbojet engine allowed it to cruise at over 70,000 feet—well above the effective range of most anti‑aircraft guns of the era. The United States Air Force marketed the plane as a “high‑altitude photographic platform,” but in reality it was a flying eye that could capture detailed images of Soviet missile sites, airfields, and industrial complexes.`,
    `During the spring and summer of 1959, several U‑2 sorties penetrated deep into Soviet territory. On one notable flight in July, Soviet radar operators finally detected an object at unprecedented altitude. Their response was swift: a pair of <span class="vocab" data-cn="拦截机">interceptor</span> MiG‑19s scrambled to engage the intruder. Though the U‑2’s speed and altitude kept it out of reach, the episode proved that Soviet air defenses could at least spot these high‑flying spies, raising alarms in both capitals. The United States publicly dismissed the incident as a routine training exercise, but behind closed doors officials recognized the growing risk of an accidental confrontation.`,
    `President Dwight D. Eisenhower’s administration adhered to a policy of plausible deniability. When diplomatic cables hinted that Soviet leaders were demanding explanations for the overflights, the White House responded with carefully crafted statements: “The United States conducts no unauthorized flights over foreign territory.” This stance relied on the technical difficulty of proving a U‑2 presence at such altitudes, and it bought Washington time to refine its intelligence network. Yet each successful mission also deepened Soviet suspicion, setting the stage for an inevitable clash.`,
    `That clash arrived on May 1, 1960, when pilot Francis Gary Powers was shot down over Sverdlovsk, a clear escalation from the earlier 1959 detections. The incident sparked a worldwide <span class="vocab" data-cn="外交危机">diplomatic crisis</span>, forcing Eisenhower to publicly acknowledge the program while demanding the release of the captured airman. The Soviet Union seized Powers as a propaganda victory, broadcasting his capture across state‑run media and accusing the United States of blatant aggression. The fallout reverberated through the United Nations, where both superpowers traded accusations, and it led directly to the collapse of a planned summit in Paris that year.`,
    `In the months that followed, the U‑2 episode became a textbook example of Cold War <span class="vocab" data-cn="宣传">propaganda</span>. Soviet newspapers portrayed the United States as an imperialist bully violating sovereign airspace, while American outlets highlighted the bravery of the pilots and the necessity of gathering intelligence to prevent surprise attacks. The incident also forced both sides to reconsider the risks of high‑altitude espionage, prompting a rapid acceleration in satellite reconnaissance programs that would eventually render manned spy planes obsolete.`,
    `Looking back from today’s perspective, the 1959 overflights can be seen as a turning point that accelerated the shift toward what later scholars call <span class="vocab" data-cn="缓和">détente</span>. The realization that a single aircraft could ignite an international crisis pushed policymakers to explore more stable channels of communication and verification, such as the 1972 Strategic Arms Limitation Talks. While the U‑2 itself continued to serve in various capacities for decades, its legacy lives on in the delicate balance between intelligence gathering and diplomatic restraint—a lesson that remains relevant in our modern era of drones and cyber‑espionage.`,
  ],
  vocabulary: [
    { word: 'U‑2', cn: 'U‑2 高空侦察机' },
    { word: 'reconnaissance', cn: '侦察' },
    { word: 'interceptor', cn: '拦截机' },
    { word: 'diplomatic crisis', cn: '外交危机' },
    { word: 'propaganda', cn: '宣传' },
    { word: 'détente', cn: '缓和' },
  ],
};

export default article;
