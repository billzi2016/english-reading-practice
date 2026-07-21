import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Rise and Fall of the Nuclear‑Powered Aircraft Carrier USS Enterprise (CVN‑65)》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00320 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00320',
  slug: 'the-rise-and-fall-of-the-nuclear-powered-aircraft-carrier-uss-enterprise-cvn-65',
  title: 'The Rise and Fall of the Nuclear‑Powered Aircraft Carrier USS Enterprise (CVN‑65)',
  subtitle: 'From a groundbreaking launch to a historic retirement',
  summary: 'An engaging look at how the world’s first nuclear‑powered carrier reshaped naval power and why it was eventually retired.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the USS Enterprise (CVN‑65) slipped into the water on November 25, 1960, she represented a bold leap in maritime engineering. As the first <span class="vocab" data-cn="核动力的">nuclear‑powered</span> aircraft carrier, her eight <span class="vocab" data-cn="加压水堆">pressurized water reactors</span> (PWRs) promised virtually unlimited range and a new strategic flexibility for the United States Navy. The ship’s hull classification symbol “CVN” combined “carrier vessel” (CV) with “nuclear propulsion” (N), instantly signaling a shift from conventional oil‑fired ships to a future where refueling stops could be largely eliminated.`,
    `The design of Enterprise was as ambitious as her power plant. Her massive <span class="vocab" data-cn="飞行甲板">flight deck</span> stretched over 4,500 feet, allowing simultaneous launch and recovery of fixed‑wing aircraft and helicopters. To catapult the heavy jets off this deck, engineers installed a series of steam-driven <span class="vocab" data-cn="弹射器">catapults</span>, each powered by the ship’s own reactor steam—a self‑sustaining loop that reduced dependence on external support vessels. This integration of propulsion and launch systems made Enterprise a floating airbase capable of projecting power across oceans without frequent port calls.`,
    `During the Cold War, Enterprise proved her worth in several high‑profile operations. In 1964 she participated in the Gulf of Tonkin incident, providing air cover for U.S. forces in Vietnam. Later, during the 1973 Yom Kippur War, she was dispatched to the Mediterranean as a deterrent presence, showcasing how a nuclear carrier could rapidly reposition to volatile regions. Her ability to stay at sea for months without refueling gave commanders unprecedented operational endurance, reinforcing the doctrine of “forward presence” that still guides naval strategy today.`,
    `However, the very technologies that made Enterprise revolutionary also sowed seeds of future challenges. The eight reactors, while innovative, required a complex maintenance regime and specialized crew training. Over time, the ship’s original design began to show signs of wear: corrosion in the hull, outdated electronic suites, and aging flight‑deck equipment strained her operational readiness. By the early 2000s, retrofitting Enterprise with modern combat systems proved increasingly costly compared with newer carriers built around a single, more efficient reactor core.`,
    `The decision to retire Enterprise was not taken lightly. In 2015, after more than five decades of service, the Navy announced that she would be decommissioned by 2017—a symbolic end to an era. The formal <span class="vocab" data-cn="退役仪式">decommissioning</span> ceremony took place on February 3, 2017 in Newport News, Virginia, where former crew members and admirals gathered to honor her legacy. While some critics argued that the ship could have been modernized further, the consensus was that maintaining an aging nuclear platform would divert resources from newer vessels like the Gerald R. Ford‑class carriers.`,
    `Enterprise’s legacy lives on in several ways. Her pioneering reactor configuration informed the design of later nuclear ships, and lessons learned from her maintenance cycles helped shape current policies on ship life‑cycle management. Moreover, the cultural impact of a vessel named after the legendary “USS Enterprise”—a name also immortalized in science‑fiction—continues to inspire both naval personnel and the public imagination. The story of her rise and fall serves as a reminder that technological breakthroughs must be balanced with long‑term sustainability.`,
    `Today, visitors can explore parts of the ship at museums such as the Naval Aviation Museum in Pensacola, where a section of her flight deck has been preserved. As historians reflect on her 55 years of service, they often cite Enterprise as a case study in how bold engineering can redefine strategic possibilities—and how even the most advanced platforms eventually reach the end of their operational lifespan.`,
  ],
  vocabulary: [
    { word: 'nuclear‑powered', cn: '核动力的' },
    { word: 'pressurized water reactor', cn: '加压水堆' },
    { word: 'flight deck', cn: '飞行甲板' },
    { word: 'catapult', cn: '弹射器' },
    { word: 'decommissioning', cn: '退役仪式' },
    { word: 'hull classification symbol', cn: '舰船分类标识符' },
  ],
};

export default article;
