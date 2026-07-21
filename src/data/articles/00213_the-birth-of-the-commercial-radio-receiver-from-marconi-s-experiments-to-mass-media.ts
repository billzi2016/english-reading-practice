import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Birth of the Commercial Radio Receiver: From Marconi’s Experiments to Mass Media》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00213 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00213',
  slug: 'the-birth-of-the-commercial-radio-receiver-from-marconi-s-experiments-to-mass-media',
  title: 'The Birth of the Commercial Radio Receiver: From Marconi’s Experiments to Mass Media',
  subtitle: 'How early wireless experiments turned into a household staple',
  summary: 'Tracing the technological and cultural steps that transformed radio from a scientific curiosity into mass media.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `At the turn of the twentieth century, <span class="vocab" data-cn="意大利裔美国发明家">Guglielmo Marconi</span> demonstrated that electromagnetic waves could travel beyond a laboratory. His 1901 transatlantic transmission across the Atlantic Ocean proved that “wireless” was not just a metaphor but a physical reality, sparking worldwide fascination with the invisible medium.`,
    `Marconi’s early stations used <span class="vocab" data-cn="连续波">continuous wave</span> transmitters powered by spark-gap generators. While effective for Morse code, these bursts of energy produced noisy signals that were difficult to hear clearly. Listeners needed a simple detector—often a crystal diode—to turn the radio waves into audible clicks, limiting reception to trained operators rather than the general public.`,
    `The breakthrough came with the invention of the <span class="vocab" data-cn="真空管">vacuum tube</span> by Lee De Forest in 1906. The “audion” could amplify weak signals, turning faint whispers from distant transmitters into robust audio. This amplification made it possible to design receivers that reproduced speech and music with enough fidelity for casual listening, laying the groundwork for commercial devices.`,

    `In the early 1920s, engineers such as Edwin Armstrong introduced the <span class="vocab" data-cn="异频检波器">heterodyne detector</span>, which mixed incoming radio frequencies with a locally generated oscillator. This process created an audible beat frequency that could be amplified more easily. The heterodyne principle dramatically improved selectivity, allowing a single receiver to tune into many stations without excessive interference.`,

    `The first mass‑produced radios appeared in 1922 when the American company Westinghouse released the “Radiola.” Priced at about $85—a sum comparable to a month’s rent—the Radiola featured a wooden cabinet, a built‑in speaker, and a simple dial. Its success proved that ordinary households could afford a device that turned distant voices into daily companions, turning radio into a commercial commodity.`,

    `As more stations began regular programming, the concept of <span class="vocab" data-cn="广播">broadcasting</span> emerged. Unlike point‑to‑point telegraphy, broadcasting delivered content to anyone with a receiver, fostering shared cultural experiences such as live music concerts, news bulletins, and serialized dramas. By 1930, over half of American homes owned at least one radio set, reshaping advertising, politics, and entertainment.`,

    `Later innovations like the <span class="vocab" data-cn="再生式接收机">regenerative receiver</span> and the <span class="vocab" data-cn="超外差接收机">superheterodyne</span> architecture further refined performance, reducing size and cost. These advances made radios portable enough for car dashboards and bedside tables, cementing their role as a ubiquitous medium that bridged the gap between scientific experiment and mass media.`,

  ],
  vocabulary: [
    { word: 'Guglielmo Marconi', cn: '意大利裔美国发明家' },
    { word: 'continuous wave', cn: '连续波' },
    { word: 'vacuum tube', cn: '真空管' },
    { word: 'heterodyne detector', cn: '异频检波器' },
    { word: 'broadcasting', cn: '广播' },
    { word: 'regenerative receiver', cn: '再生式接收机' },
    { word: 'superheterodyne', cn: '超外差接收机' },
  ],
};

export default article;
