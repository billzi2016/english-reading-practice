import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Development and Deployment of Germany's Messerschmitt Me 262: The World’s First Jet Fighter》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00332 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00332',
  slug: 'the-development-and-deployment-of-germany-s-messerschmitt-me-262-the-world-s-first-jet-fighter',
  title: "The Development and Deployment of Germany's Messerschmitt Me 262: The World’s First Jet Fighter",
  subtitle: 'How a daring engineering project reshaped aerial warfare',
  summary: 'An in‑depth look at the technical breakthroughs, political hurdles, and combat legacy of the world’s first operational jet fighter.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `By the early 1940s the German Luftwaffe (the air force of Nazi Germany) faced an increasingly desperate situation. Allied strategic bombing raids were crippling factories and morale, and existing piston‑engine fighters such as the Bf 109 struggled to intercept high‑altitude bombers. In this climate, a small group of engineers dared to imagine an aircraft that could outrun any propeller‑driven opponent: the Messerschmitt Me 262, the world’s first operational <span class="vocab" data-cn="喷气发动机">jet engine</span>-powered fighter.`,
    `The project began in 1939 under the direction of Willy Messerschmitt’s design bureau, but the real breakthrough came from the work of Dr. Hans von Ohain and his colleague Max Hahn at Heinkel, who had already demonstrated a working <span class="vocab" data-cn="喷气推进">jet propulsion</span> system with the He 178 in 1939. Their concepts were handed to Junkers, where engineer Anselm Franz developed the Jumo 004—a compact <span class="vocab" data-cn="轴流式压缩机">axial‑flow compressor</span> turbojet that could produce enough thrust to lift a fighter-sized airframe. The engine’s simplicity was both its strength and its weakness, as it required exotic alloys to survive the extreme temperatures inside the turbine.</`,
    `Technical challenges multiplied once the engines were ready for integration. Early Jumo 004s suffered from short service lives—often less than 25 hours—because the high‑temperature turbine blades warped under stress. To mitigate this, engineers used a steel alloy called “Stainless‑Steel 1.4970,” which was difficult to machine and in short supply due to wartime shortages. The airframe itself featured a sleek, all‑metal monocoque construction with straight wings that provided excellent low‑speed handling but limited the aircraft’s top speed compared to later swept‑wing designs.`,
    `Production of the Me 262 was hampered by political interference as much as by engineering woes. Adolf Hitler, fascinated by the idea of a “fighter‑bomber” (or <span class="vocab" data-cn="突击鸟">Sturmvogel</span>), repeatedly ordered that the aircraft be repurposed for carrying bombs instead of focusing on its role as an interceptor. This decision forced factories to split their output between fighter and bomber variants, slowing delivery to frontline units. Moreover, Allied bombing raids on the Junkers plant in Dessau further disrupted the supply chain, meaning that only a handful of squadrons ever received fully operational jets.</`,
    `The Me 262 finally entered combat in July 1944 with Jagdgeschwader 7 (JG 7), the first jet fighter wing. Pilots quickly discovered that, while the aircraft could sprint past Allied bombers at speeds exceeding 870 km/h, it was vulnerable during takeoff and landing—phases when its twin Jumo 004 engines produced little thrust. Nevertheless, experienced aces such as Oberstleutnant Fritz Wendel claimed multiple victories, and the jet’s presence forced the Allies to develop new tactics, including attacking Me 262 bases with low‑level fighter sweeps and concentrating on destroying the vulnerable airfields.</`,
    `Although only about 1,400 Me 262s were built before Germany’s surrender—far fewer than the Luftwaffe needed—the aircraft left an indelible mark on post‑war aviation. The British captured several examples and used them as a basis for their own jet program, which produced the Gloster Meteor. In the United States, engineers examined wrecked Me 262s to accelerate development of the F‑86 Sabre, whose swept‑wing design would dominate the Korean War sky. The legacy of the Me 262 thus lives on in every modern fighter that relies on <span class="vocab" data-cn="喷气发动机">jet engines</span> for speed and maneuverability.`,
    `Today, a few restored Me 262s can be seen in museums such as the Smithsonian’s National Air and Space Museum and the Deutsches Museum in Munich. These surviving examples serve not only as reminders of a daring technological leap but also as cautionary tales about how political decisions can shape—or stifle—innovation. The story of the Me 262 remains a compelling study of engineering brilliance, wartime urgency, and the complex interplay between technology and strategy.`,
  ],
  vocabulary: [
    { word: 'jet engine', cn: '喷气发动机' },
    { word: 'jet propulsion', cn: '喷气推进' },
    { word: 'axial‑flow compressor', cn: '轴流式压缩机' },
    { word: 'Sturmvogel', cn: '突击鸟（梅塞施密特Me 262的绰号）' },
    { word: 'Luftwaffe', cn: '德国空军' },
    { word: 'Allied bombing campaign', cn: '盟军轰炸行动' },
  ],
};

export default article;
