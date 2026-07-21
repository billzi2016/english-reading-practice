import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Bloop Enigma: Tracing the Mysterious Deep‑Sea Sound》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00187 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00187',
  slug: 'the-bloop-enigma-tracing-the-mysterious-deep-sea-sound',
  title: 'The Bloop Enigma: Tracing the Mysterious Deep‑Sea Sound',
  subtitle: 'How a puzzling underwater roar sparked scientific intrigue and later revealed an icy origin.',
  summary: 'Explore the discovery, speculation, and eventual explanation of the enigmatic “Bloop” sound that once haunted oceanographers.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In early April 1997, a team of NOAA researchers monitoring the Pacific Ocean’s acoustic environment heard something extraordinary. Their network of underwater listening stations—each equipped with a sensitive <span class="vocab" data-cn="水听器">hydrophone</span>—picked up a low‑frequency roar that seemed to rise from the abyss. The signal, later christened “Bloop,” was recorded by multiple hydrophones spread across thousands of kilometres, instantly flagging it as an event worth deeper investigation.`,
    `What made Bloop stand out was its sheer power and unusual tonal quality. The sound registered at an <span class="vocab" data-cn="超低频">ultra‑low‑frequency</span> range, below the hearing threshold of most marine mammals, yet it carried enough energy to be heard across the entire Pacific basin. Its distinctive <span class="vocab" data-cn="声学特征">acoustic signature</span>—a rapid rise in amplitude followed by a slow decay—suggested a source far larger than any known ship or submarine, prompting wild guesses about its origin.`,
    `Speculation ran rampant among both scientists and the public. Some marine biologists entertained the possibility of an undiscovered leviathan, perhaps a colossal <span class="vocab" data-cn="巨型乌贼">giant squid</span> or even a new species of deep‑sea whale capable of producing such a roar. Popular media seized on these ideas, turning Bloop into a modern sea monster legend. Yet the lack of visual confirmation and the sound’s extraordinary intensity kept the hypothesis firmly in the realm of conjecture.`,
    `To narrow down the source, researchers employed triangulation techniques using the time delays between hydrophone detections. The calculations placed the epicentre somewhere near a remote region of the South Pacific, close to a network of <span class="vocab" data-cn="海底峡谷">submarine canyon</span> systems that cut deep into the ocean floor. These canyons are known for channeling water flows and occasionally amplifying natural sounds, but none had previously been linked to an event as powerful as Bloop.`,
    `A breakthrough came in 2010 when a separate study of Antarctic ice dynamics identified a series of massive <span class="vocab" data-cn="冰震">icequake</span> events. These are sudden releases of stress within the continent’s glacial plates, often accompanied by rapid cracking and shifting of ice shelves—a process known as <span class="vocab" data-cn="冰川崩解">glacial calving</span>. The acoustic fingerprints of these icequakes matched Bloop’s waveform remarkably well, suggesting that a distant Antarctic event could have been the true source.`,
    `Further analysis revealed why an icequake could be heard so far away. When massive sheets of ice fracture, they generate low‑frequency pulses that travel efficiently through the ocean’s <span class="vocab" data-cn="温跃层">thermocline</span>, a layer where water temperature changes sharply with depth. This thermocline acts like an acoustic waveguide, funneling sound energy along the so‑called <span class="vocab" data-cn="深声道">SOFAR channel</span>. Within this channel, sounds can propagate thousands of kilometres with minimal loss, turning a distant crack into a global broadcast.`,
    `Today, Bloop is no longer regarded as a mystery but as a vivid reminder of how dynamic Earth’s cryosphere can be. The episode spurred renewed investment in deep‑sea acoustic monitoring, leading to more sophisticated arrays that continuously listen for everything from whale songs to submarine earthquakes. While the “monster” narrative has faded, the awe inspired by hearing an Antarctic ice shelf roar across the Pacific endures, reminding us that even the most remote corners of our planet are interconnected through sound.`,
  ],
  vocabulary: [
    { word: 'hydrophone', cn: '水听器' },
    { word: 'ultra‑low‑frequency', cn: '超低频' },
    { word: 'acoustic signature', cn: '声学特征' },
    { word: 'giant squid', cn: '巨型乌贼' },
    { word: 'submarine canyon', cn: '海底峡谷' },
    { word: 'icequake', cn: '冰震' },
    { word: 'glacial calving', cn: '冰川崩解' },
    { word: 'thermocline', cn: '温跃层' },
    { word: 'SOFAR channel', cn: '深声道' },
  ],
};

export default article;
