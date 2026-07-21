import type { Article } from '../../types/index.ts';

// 文件意图：维护《Alcock and Brown’s 1919 Non‑Stop Transatlantic Flight: A Race, a Crash, and a New Era of Aviation》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00495 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00495',
  slug: 'alcock-and-brown-s-1919-non-stop-transatlantic-flight-a-race-a-crash-and-a-new-era-of-aviation',
  title: 'Alcock and Brown’s 1919 Non‑Stop Transatlantic Flight: A Race, a Crash, and a New Era of Aviation',
  subtitle: 'How two pilots turned a daring gamble into the birth of modern long‑distance air travel.',
  summary: 'A vivid recount of the 1919 Atlantic crossing that combined competition, technical ingenuity, and an unexpected landing in Ireland.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `When the guns fell silent after World War I, the world’s imagination turned to the sky. The British newspaper *Daily Mail* offered a £10,000 prize for the first aircraft to fly <span class="vocab" data-cn="非停">non‑stop</span> across the <span class="vocab" data-cn="跨大西洋的">transatlantic</span> gap between North America and Europe. The challenge was not merely a stunt; it promised to prove that aircraft could become reliable links for commerce, mail, and even diplomacy.`,
    `Enter John Alcock, a former Royal Flying Corps officer with a reputation for calm under pressure, and Arthur Brown, an experienced navigator who had survived several night flights over the Western Front. Their partnership was forged in the cramped hangars of the Royal Air Force, where they learned to trust each other’s instincts as much as their instruments. The pair accepted the prize on the condition that the aircraft be a British design, showcasing national engineering prowess.`,
    `The chosen machine was the Vickers <span class="vocab" data-cn="机身结构">Vimy</span>, originally built as a heavy bomber. To transform it into an ocean‑crossing vessel, engineers reinforced the <span class="vocab" data-cn="机身结构">airframe</span>, added extra fuel tanks to increase capacity by 50 %, and fitted larger <span class="vocab" data-cn="螺旋桨">propeller</span> blades for better thrust at low speeds. The twin Rolls‑Royce Eagle VIII engines, each capable of delivering 360 hp, were tuned for fuel efficiency, a crucial factor given the limited <span class="vocab" data-cn="燃油消耗">fuel consumption</span> over the 1,900‑kilometre stretch.`,
    `On 14 June 1919, the Vimy taxied from St. John’s, Newfoundland, under a sky mottled with low clouds. Alcock took the controls while Brown plotted their course using dead‑reckoning <span class="vocab" data-cn="导航">navigation</span> and occasional sightings of the sun through a sextant. The aircraft was equipped with a primitive <span class="vocab" data-cn="无线电报">radio telegraphy</span> set, allowing them to send brief status updates to ships in the Atlantic, though signal strength fluctuated wildly with the weather. Each gust of wind threatened to push them off their intended great‑circle route.`,
    `While Alcock and Brown were airborne, other teams raced against time. The United States Navy’s NC‑4 had already completed a staged crossing earlier that year, but it required multiple stops in the Azores and Portugal. In contrast, Alcock and Brown aimed for a true <span class="vocab" data-cn="非停">non‑stop</span> flight, a feat that would demonstrate the feasibility of direct intercontinental service. Their progress was closely followed by newspapers on both sides of the Atlantic, turning the venture into a real‑time global spectacle.`,
    `After twelve grueling hours, the Vimy’s fuel gauges warned of an imminent shortage as they neared the Irish coast. With visibility reduced to a hazy greenish hue, Alcock spotted a flat expanse near Clifden and executed a forced landing on a boggy field. The aircraft skidded, broke one wingtip, but remained largely intact. Local farmers rushed to the crash site, providing shelter and medical aid while word of the achievement spread like wildfire across Europe.`,
    `The successful crossing—despite the rough landing—proved that long‑distance air travel was not a fantasy. Governments and private investors began funding larger, more comfortable aircraft for passenger service, leading to the formation of early airlines such as Imperial Airways in 1924. Alcock and Brown were hailed as pioneers; their flight became a cornerstone in the narrative of modern aviation, inspiring generations of engineers to push the limits of speed, range, and safety.`,
  ],
  vocabulary: [
    { word: 'non‑stop', cn: '非停' },
    { word: 'transatlantic', cn: '跨大西洋的' },
    { word: 'airframe', cn: '机身结构' },
    { word: 'navigation', cn: '导航' },
    { word: 'radio telegraphy', cn: '无线电报' },
    { word: 'propeller', cn: '螺旋桨' },
    { word: 'fuel consumption', cn: '燃油消耗' },
  ],
};

export default article;
