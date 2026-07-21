import type { Article } from '../../types/index.ts';

// 文件意图：维护《Heinkel He 178: The World’s First Jet‑Propelled Aircraft and Its Secret Development》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00368 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00368',
  slug: 'heinkel-he-178-the-world-s-first-jet-propelled-aircraft-and-its-secret-development',
  title: 'Heinkel He 178: The World’s First Jet‑Propelled Aircraft and Its Secret Development',
  subtitle: 'How a hidden German project broke the sound barrier of aviation before WWII.',
  summary: 'The He 178 was the first aircraft to fly powered solely by a jet engine, developed in secrecy under Nazi Germany.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the summer of 1939, a sleek, low‑wing monoplane roared down a remote runway at Peenemünde, leaving behind a plume of white smoke but no propeller. This was the <span class="vocab" data-cn="德国海克尔公司制造的第一架喷气式飞机">Heinkel He 178</span>, the world’s first aircraft to rely entirely on jet propulsion. While most nations were still perfecting piston‑driven fighters, a small team of engineers in Germany had already begun to rewrite the rules of flight, hidden from public view and even from many senior officials. Their success would later become a cornerstone of modern aviation, yet at the time it was treated as a closely guarded secret.</`,
    `The engine that powered the He 178 originated from the ideas of physicist <span class="vocab" data-cn="汉斯·冯·奥海因">Hans von Ohain</span>. In 1935 he patented a concept for a <span class="vocab" data-cn="一种利用压缩空气和燃料产生高速喷流的发动机">turbojet</span> that used an <span class="vocab" data-cn="轴向气流压缩机，用于将大量空气压缩到高压状态">axial‑flow compressor</span>, a combustion chamber, and a turbine to produce thrust. Ernst Heinkel, the founder of the Heinkel aircraft company, recognized the commercial potential of von Ohain’s design and provided both funding and facilities for its development. By 1938 their collaboration yielded the <span class="vocab" data-cn="HeS 3b发动机，第一台成功的喷气式发动机">HeS 3b</span>, a compact turbojet capable of delivering enough power to lift a small airframe off the ground.</`,
    `The HeS 3b’s architecture was deceptively simple. Air entered the front of the engine and passed through rows of rotating blades in the axial‑flow compressor, raising its pressure dramatically. The high‑pressure air then entered the <span class="vocab" data-cn="燃烧室，燃料与压缩空气混合并点燃产生高温气体">combustion chamber</span>, where fuel was injected and ignited. The resulting hot gases expanded through a turbine, which extracted just enough energy to drive the compressor, while the remaining exhaust rushed out of a nozzle at high velocity, generating <span class="vocab" data-cn="推力，推动飞机前进的力量">thrust</span>. Unlike propeller‑driven aircraft, the He 178 had no rotating blades in the airflow, allowing it to achieve higher speeds without the aerodynamic limitations of propellers.</`,
    `Because jet technology was untested and potentially destabilizing, the project was placed under the strict oversight of the <span class="vocab" data-cn="德国航空部，负责军用航空研发的政府机构">Reichsluftfahrtministerium (RLM)</span>. However, even the RLM’s high‑ranking officials were kept at arm’s length; only a handful of senior engineers and a few trusted pilots witnessed the aircraft’s inaugural <span class="vocab" data-cn="首次试飞，检验新型飞机性能的关键步骤">test flight</span> on 27 August 1939. The pilot, Erich Warsitz, reported that the He 178 reached a speed of about 560 km/h (350 mph) and climbed smoothly to an altitude of 3,000 m, all without the characteristic vibration of a propeller engine.</`,
    `Despite its technical triumph, the He 178 never entered mass production. Adolf Hitler, who personally favored conventional designs, dismissed the jet as “a toy for engineers” after viewing a brief demonstration. Moreover, the RLM prioritized the development of more immediate weapons such as the Messerschmitt Bf 109 and later the revolutionary <span class="vocab" data-cn="梅塞施密特公司研发的第二代喷气式战斗机">Me 262</span>. The He 178 was relegated to a “secret project” status, stored in a hangar at the Heinkel factory while resources shifted toward wartime needs.</`,
    `When Allied forces captured German research facilities at the end of World War II, they discovered the He 178 alongside detailed engineering drawings and test data. These documents were examined by both British and American engineers, accelerating post‑war jet development in the United Kingdom and the United States. The aircraft’s legacy lived on not through combat service but through its proof that a pure‑jet propulsion system could be built, tested, and flown safely—a milestone that paved the way for the jet age of commercial and military aviation.</`,
    `Today, only a few fragments of the original He 178 survive in museums, yet its story remains a vivid illustration of how secrecy can both protect groundbreaking innovation and hinder its immediate adoption. The aircraft stands as a testament to the daring vision of von Ohain, Heinkel, and their team, who dared to imagine a world where airplanes would soar faster than ever before without the whirring of propellers—a world that soon became reality.`],
  vocabulary: [
    { word: 'Heinkel He 178', cn: '海克尔公司制造的第一架喷气式飞机' },
    { word: 'Hans von Ohain', cn: '汉斯·冯·奥海因，早期喷气发动机的发明者' },
    { word: 'turbojet', cn: '一种利用压缩空气和燃料产生高速喷流的发动机' },
    { word: 'axial‑flow compressor', cn: '轴向气流压缩机，用于将大量空气压缩到高压状态' },
    { word: 'combustion chamber', cn: '燃烧室，燃料与压缩空气混合并点燃产生高温气体' },
    { word: 'thrust', cn: '推力，推动飞机前进的力量' },
    { word: 'Reichsluftfahrtministerium (RLM)', cn: '德国航空部，负责军用航空研发的政府机构' },
    { word: 'test flight', cn: '首次试飞，检验新型飞机性能的关键步骤' },
    { word: 'Me 262', cn: '梅塞施密特公司研发的第二代喷气式战斗机' }
  ],
};

export default article;
