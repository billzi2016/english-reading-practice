import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Forgotten Battle of the Flying Tigers: American Volunteers in China Before World II》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00155 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00155',
  slug: 'the-forgotten-battle-of-the-flying-tigers-american-volunteers-in-china-before-world-ii',
  title: 'The Forgotten Battle of the Flying Tigers: American Volunteers in China Before World II',
  subtitle: 'How a handful of pilots changed the skies over wartime China.',
  summary: 'An engaging look at the American Volunteer Group’s daring campaign against Japan before the United States entered World War II.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When most people think of World War II air combat, they picture massive Allied bomber streams over Europe. Few recall that, a year earlier, a small squadron of American pilots was already battling Japanese aircraft high above the Chinese countryside. This unit, later romanticised as the “Flying Tigers”, was officially known as the <span class="vocab" data-cn="美国志愿航空队">American Volunteer Group</span> (AVG). Their story is a vivid reminder that the war in Asia began long before Pearl Harbor forced the United States onto the global stage.`,
    `China had been locked in a brutal conflict with Imperial Japan since 1937, but American law—specifically the <span class="vocab" data-cn="中立法案">Neutrality Act</span>—forbade direct military assistance. Determined to help, Chinese leader <span class="vocab" data-cn="蒋介石">Chiang Kai-shek</span> turned to a charismatic former U.S. Army Air Corps officer, Claire Lee Chennault. In secret negotiations, they arranged for a group of experienced pilots and ground crew to be recruited, equipped, and paid by the Chinese government, allowing them to operate under a veneer of civilian status while still fighting as combatants.`,
    `The volunteers assembled in Rangoon (now Yangon) and then moved to a remote airfield near Toungoo, Burma, where they underwent intensive training on the <span class="vocab" data-cn="P‑40“战鹰”战斗机">P-40 Warhawk</span>. These rugged aircraft were painted with the iconic shark‑tooth nose art that would become synonymous with the Flying Tigers. The <span class="vocab" data-cn="美国志愿航空队">AVG</span> officially began operations on 20 December 1941, just days after the Japanese attack on Pearl Harbor, but before the United States formally declared war.`,
    `In combat, the AVG quickly demonstrated a mastery of tactics that compensated for their numerical inferiority. Chennault taught his pilots to dive from higher altitude, use the P‑40’s powerful .50 calibre machine guns, and then climb away before Japanese fighters could react—a technique that secured local <span class="vocab" data-cn="制空权">air superiority</span>. Their first major engagement on 23 December 1941 saw them claim twelve Japanese aircraft destroyed while losing only one of their own. Such victories not only disrupted enemy supply lines but also provided a vital morale boost to Chinese forces and civilians alike.`,
    `Beyond the battlefield, the Flying Tigers became a potent tool of <span class="vocab" data-cn="宣传">propaganda</span>. Newsreels and newspaper stories highlighted their daring exploits, portraying them as heroic volunteers defending freedom in the Far East. This narrative helped shift American public opinion, laying groundwork for the massive aid programs that would follow under Lend‑Lease. Politically, the AVG’s existence also exposed the limits of the Neutrality Act, prompting Congress to relax restrictions and eventually allow full military cooperation with China.`,
    `When the AVG was disbanded in July 1942, many of its members transferred into the newly formed United States Army Air Forces’ 23rd Fighter Group, continuing the fight under a formal U.S. banner. Their legacy endured through post‑war commemorations, museum exhibits, and even the naming of modern Chinese air bases after Chennault. Yet, despite their impact, the story often slips from mainstream histories that focus on later Pacific battles, leaving the Flying Tigers as an almost forgotten chapter of pre‑World II cooperation.`,
    `Studying this episode reminds us that wars are rarely confined to neat start dates; they are built upon earlier, sometimes covert, collaborations. The <span class="vocab" data-cn="美国志愿航空队">American Volunteer Group</span> illustrates how a small group of determined individuals can alter the course of a larger conflict, and why remembering such contributions is essential for a full understanding of global history.`,
  ],
  vocabulary: [
    { word: 'American Volunteer Group', cn: '美国志愿航空队' },
    { word: 'P-40 Warhawk', cn: 'P‑40“战鹰”战斗机' },
    { word: 'Neutrality Act', cn: '中立法案' },
    { word: 'Chiang Kai-shek', cn: '蒋介石' },
    { word: 'air superiority', cn: '制空权' },
    { word: 'propaganda', cn: '宣传' },
  ],
};

export default article;
