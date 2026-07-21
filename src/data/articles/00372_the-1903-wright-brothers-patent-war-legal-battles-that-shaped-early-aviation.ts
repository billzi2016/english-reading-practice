import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1903 Wright Brothers Patent War: Legal Battles that Shaped Early Aviation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00372 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00372',
  slug: 'the-1903-wright-brothers-patent-war-legal-battles-that-shaped-early-aviation',
  title: 'The 1903 Wright Brothers Patent War: Legal Battles that Shaped Early Aviation',
  subtitle: 'How a handful of lawsuits redirected the course of early flight',
  summary: 'An engaging narrative about the Wright brothers’ patents, their clash with rivals, and the lasting impact on aviation law.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When Orville and Wilbur Wright lifted off at Kitty Hawk in December 1903, they did more than prove that powered flight was possible—they also stepped onto a legal battlefield. The United States at the turn of the twentieth century was buzzing with inventors eager to claim ownership of new technologies, and the fledgling field of aviation was no exception. In this climate, securing a <span class="vocab" data-cn="专利">patent</span> meant not only protecting an idea but also gaining leverage over competitors who might otherwise copy it.`,
    `The Wrights filed U.S. Patent No. 821,393 on May 22, 1906, covering their revolutionary system of three‑axis <span class="vocab" data-cn="空气动力学">aerodynamics</span> control: wing warping for roll, a movable rudder for yaw, and an elevator for pitch. This combination allowed the pilot to maintain stable flight, something earlier experimenters had struggled with. By bundling these three <span class="vocab" data-cn="控制面">control surfaces</span> into a single claim, the brothers hoped to create a broad monopoly over any aircraft that used similar methods of steering.`,
    `The first major challenge arrived from Glenn Curtiss, a prolific inventor who favored ailerons—small hinged flaps on the wing edges—to achieve roll control. In 1909 Curtiss secured his own patent for the aileron mechanism, and the Wrights quickly accused him of <span class="vocab" data-cn="侵权">infringement</span>. The ensuing lawsuits stretched across several states, with each side presenting technical diagrams and expert testimony to prove who held the rightful claim over the essential act of turning an aircraft in the air.`,
    `Courts became the arena where engineering met law. In 1913 a federal judge issued a <span class="vocab" data-cn="法院禁令">court injunction</span> that barred Curtiss from manufacturing airplanes using his aileron design until he negotiated a licensing fee with the Wright Company. The decision sent shockwaves through the nascent industry: many smaller manufacturers, lacking deep pockets, were forced to halt production or risk costly litigation. This legal pressure slowed the overall pace of innovation during a period when aviation could have advanced much more rapidly.`,
    `Recognizing that endless disputes threatened national defense—especially as World War I loomed—the U.S. government intervened in 1917. The Aeronautic Society, under pressure from the Army, helped establish the Aircraft Manufacturers Association (AMA), which created a <span class="vocab" data-cn="专利池">patent pool</span>. Under this arrangement, holders of key aviation patents, including the Wrights’ and Curtiss’s, agreed to cross‑license their technologies for a modest royalty. This pragmatic solution turned former adversaries into collaborators, allowing mass production of military aircraft at a critical moment.`,
    `The legacy of the “Patent War” endures in modern aerospace law. While the early battles temporarily hampered commercial growth, they also clarified the importance of clear <span class="vocab" data-cn="专利权">intellectual property rights</span> and set precedents for how complex technologies are protected. Today’s aircraft manufacturers navigate a sophisticated web of patents, but they do so with an awareness that cooperation—often through licensing agreements—can be as vital to progress as competition.`,
    `For students of both history and engineering, the Wright brothers’ legal saga offers a vivid illustration of how invention does not exist in a vacuum. The same ingenuity that lifted a fragile biplane off a sand dune also sparked courtroom drama that reshaped an entire industry. Understanding this dual narrative helps us appreciate why modern innovators must balance technical brilliance with strategic legal foresight.`,
  ],
  vocabulary: [
    { word: 'patent', cn: '专利' },
    { word: 'aerodynamics', cn: '空气动力学' },
    { word: 'control surfaces', cn: '控制面' },
    { word: 'infringement', cn: '侵权' },
    { word: 'court injunction', cn: '法院禁令' },
    { word: 'patent pool', cn: '专利池' },
    { word: 'intellectual property rights', cn: '知识产权' },
  ],
};

export default article;
