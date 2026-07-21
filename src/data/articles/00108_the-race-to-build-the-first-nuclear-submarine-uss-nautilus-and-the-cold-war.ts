import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Race to Build the First Nuclear Submarine: USS Nautilus and the Cold War》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00108 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00108',
  slug: 'the-race-to-build-the-first-nuclear-submarine-uss-nautilus-and-the-cold-war',
  title: 'The Race to Build the First Nuclear Submarine: USS Nautilus and the Cold War',
  subtitle: 'How a daring engineering project reshaped naval power during the early Cold War.',
  summary: 'A narrative of Admiral Rickover’s push for nuclear propulsion, the technical hurdles, and the strategic impact of the USS Nautilus.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1950s, as the United States and the Soviet Union stared each other down across a world split by ideology, naval strategists imagined a vessel that could stay hidden beneath the waves for weeks without surfacing. The idea seemed fantastical—until a small team of engineers in Groton, Connecticut, began to prove that <span class="vocab" data-cn="核动力推进">nuclear propulsion</span> could turn fiction into reality.`,
    `The driving force behind this ambition was Admiral Hyman G. Rickover, often called the “Father of the Nuclear Navy.” Rickover demanded absolute safety and relentless testing, insisting that any reactor placed aboard a ship must be both compact and fail‑proof. His insistence on rigorous standards earned him both admiration and resentment within the Navy, but it also laid the groundwork for an unprecedented engineering breakthrough.`,
    `The heart of the challenge was to design a <span class="vocab" data-cn="加压水堆">pressurized water reactor</span> small enough to fit inside a submarine hull yet powerful enough to generate steam for propulsion. Unlike civilian reactors, which could be massive and stationary, this reactor had to endure constant motion, vibration, and the corrosive salty environment of the sea. Engineers borrowed concepts from the Manhattan Project but had to reinvent cooling systems, control rods, and shielding on a miniature scale.`,
    `Construction began at the Electric Boat shipyard under intense secrecy. While American workers wrestled with reactor physics, Soviet engineers were racing their own project—Project 627, later known as the “Charlie I” class. Both sides understood that a submarine capable of unlimited underwater endurance would become a cornerstone of <span class="vocab" data-cn="战略威慑">strategic deterrence</span>, allowing each superpower to threaten hidden attacks without warning.`,
    `When USS Nautilus (SSN‑571) was launched in 1954, it carried not only a reactor but also a set of massive <span class="vocab" data-cn="压载舱">ballast tanks</span> that could be flooded or emptied to control depth. In August 1958, the submarine completed its most celebrated mission: surfacing at the North Pole after an uninterrupted voyage beneath the Arctic ice cap. This feat demonstrated unparalleled <span class="vocab" data-cn="水下续航">submerged endurance</span> and sent a clear message that the seas were no longer safe for surprise attacks.`,
    `The strategic implications rippled through Cold War doctrine. Nuclear‑powered submarines could remain hidden for months, providing a survivable second‑strike capability that underpinned the theory of <span class="vocab" data-cn="相互确保毁灭">mutual assured destruction</span>. If one superpower launched a first strike, its opponent’s silent fleet could retaliate from beneath the ocean, ensuring that any nuclear exchange would be catastrophic for both sides. This delicate balance helped prevent direct conflict between the United States and the USSR.`,
    `Today, the legacy of USS Nautilus lives on in every modern ballistic‑missile submarine, from the Ohio class to the Virginia class. Rickover’s insistence on safety, rigorous testing, and relentless innovation set standards that still guide naval engineering. The race to build the first nuclear submarine not only reshaped military strategy but also demonstrated how scientific ambition can alter the course of world history.`,
  ],
  vocabulary: [
    { word: 'nuclear propulsion', cn: '核动力推进' },
    { word: 'pressurized water reactor', cn: '加压水堆' },
    { word: 'ballast tanks', cn: '压载舱' },
    { word: 'strategic deterrence', cn: '战略威慑' },
    { word: 'mutual assured destruction', cn: '相互确保毁灭' },
    { word: 'submerged endurance', cn: '水下续航' },
  ],
};

export default article;
