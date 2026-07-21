import type { Article } from '../../types/index.ts';

// 文件意图：维护《Luna 9: The Soviet Union’s First Soft Landing on the Moon and Cold‑War Rivalry》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00357 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00357',
  slug: 'luna-9-the-soviet-union-s-first-soft-landing-on-the-moon-and-cold-war-rivalry',
  title: 'Luna 9: The Soviet Union’s First Soft Landing on the Moon and Cold‑War Rivalry',
  subtitle: 'How a tiny probe changed the lunar map and the geopolitical chessboard.',
  summary: 'In 1966 Luna 9 achieved the first soft landing on the Moon, showcasing Soviet engineering and intensifying the Cold War space race.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `The summer of 1966 felt like a global theater. While televisions in New York and Moscow flickered with news of rockets soaring, few could have imagined that a modest, eight‑kilogram probe would soon become the star of the show. On February 3, Luna 9 slipped silently into the night sky, its mission simple yet daring: to touch down on an alien world without crashing, and to send back the first close‑up photographs of the lunar surface.`,
    `The backdrop was the fierce <span class="vocab" data-cn="冷战">Cold War</span> rivalry that had turned space into a symbolic battlefield. After the Soviet Union’s 1957 launch of Sputnik, the United States accelerated its own efforts, culminating in President Kennedy’s 1961 pledge to land a man on the Moon before decade’s end. By the mid‑sixties both superpowers were racing not only for prestige but also for scientific data that could inform future crewed missions.`,
    `Luna 9 was built around a compact <span class="vocab" data-cn="软着陆">soft landing</span> system, a marvel of engineering given its limited mass. The probe rode atop a Molniya‑2 launch vehicle before separating into a descent module and a service capsule. As it approached the Moon, a set of small <span class="vocab" data-cn="反推火箭">retro‑rockets</span> fired just seconds before impact, throttling the descent speed to a gentle few meters per second—slow enough to keep the delicate instruments intact.`,
    `The descent sequence relied on a suite of sensors. A <span class="vocab" data-cn="雷达高度计">radar altimeter</span> measured the distance to the surface with centimeter precision, triggering the retro‑rocket at the right moment. Simultaneously, a <span class="vocab" data-cn="辐射测量仪">radiometer</span> recorded thermal emissions, while an onboard <span class="vocab" data-cn="摄影系统">photographic system</span> captured panoramic images through a modest lens. Within minutes of touchdown near the Mare Tranquillitatis, Luna 9 transmitted its first black‑and‑white pictures back to Earth, revealing a surprisingly smooth terrain dotted with small rocks and a fine dust layer.`,
    `These data reshaped scientific expectations. Prior theories had suggested that the Moon’s surface might be covered in deep, powdery regolith that could swallow a lander whole. Luna 9 proved otherwise: the soil was firm enough to support a spacecraft, an encouraging sign for future crewed landings. Moreover, the radiometer readings helped refine models of lunar temperature cycles, informing thermal design for later missions.`,
    `Back on Earth, the Soviet media seized upon the achievement as proof of technological superiority. Headlines proclaimed “The First Soft Landing on Another World,” and the success was used to bolster domestic morale amid a period of political tension. In Washington, the news sparked both admiration and urgency; NASA accelerated its Surveyor program, which would later achieve similar soft‑landing feats using American hardware. The duel over lunar landings thus intensified, each side pushing engineering limits in a race that blended science with ideology.`,
    `Today, Luna 9 occupies a quiet corner of space history, often eclipsed by the grandeur of Apollo’s crewed triumphs. Yet its legacy endures: it demonstrated that unmanned probes could safely reach and study another celestial body, paving the way for countless robotic explorers—from Viking on Mars to Voyager in interstellar space. In the grand narrative of the <span class="vocab" data-cn="冷战">Cold War</span>, Luna 9 stands as a reminder that even the smallest spacecraft can shift the balance of power and expand humanity’s horizons.`,
  ],
  vocabulary: [
    { word: 'soft landing', cn: '软着陆' },
    { word: 'retro‑rocket', cn: '反推火箭' },
    { word: 'radar altimeter', cn: '雷达高度计' },
    { word: 'radiometer', cn: '辐射测量仪' },
    { word: 'photographic system', cn: '摄影系统' },
    { word: 'Cold War', cn: '冷战' },
  ],
};

export default article;
