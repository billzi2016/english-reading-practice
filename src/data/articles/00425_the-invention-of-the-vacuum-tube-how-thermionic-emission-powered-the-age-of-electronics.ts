import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Invention of the Vacuum Tube: How Thermionic Emission Powered the Age of Electronics》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00425 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00425',
  slug: 'the-invention-of-the-vacuum-tube-how-thermionic-emission-powered-the-age-of-electronics',
  title: 'The Invention of the Vacuum Tube: How Thermionic Emission Powered the Age of Electronics',
  subtitle: 'From Edison’s glow to the birth of modern electronics',
  summary: 'Explore how thermionic emission gave rise to the vacuum tube and transformed communication, computing, and broadcasting.',
  category: 'technology',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `At the turn of the 20th century, a curious glow inside glass bulbs sparked a revolution. Inventors noticed that when a metal filament was heated to incandescence, it released a faint stream of invisible particles that could travel across an evacuated space. This phenomenon, later named <span class="vocab" data-cn="热电子发射">thermionic emission</span>, had been first reported by Thomas Edison in 1883 during experiments with incandescent lamps, but its practical potential remained hidden for years.`,
    `The key breakthrough came when British physicist John Ambrose Fleming repurposed the effect into a one‑way conductor. In 1904 he introduced the <span class="vocab" data-cn="真空二极管">vacuum diode</span>, a sealed glass envelope containing a heated <span class="vocab" data-cn="阴极">cathode</span> and a positively charged <span class="vocab" data-cn="阳极">anode</span>. Electrons emitted from the hot cathode would rush toward the anode, allowing current to flow in only one direction. Fleming’s diode became the first reliable electronic rectifier, turning alternating currents into steady direct currents for early radio receivers.`,
    `While the diode solved the problem of unidirectional flow, it could not amplify weak signals—a limitation that hampered long‑distance telegraphy and nascent wireless broadcasting. In 1906 American inventor Lee de Forest added a third electrode, the <span class="vocab" data-cn="栅极">grid</span>, between cathode and anode, creating the first <span class="vocab" data-cn="三极管">triode</span>. By applying a small voltage to the grid, the device could control a much larger current passing from cathode to anode, achieving signal amplification for the first time. De Forest’s “audion” quickly proved indispensable for amplifying telephone and radio signals.`,
    `The triode’s ability to boost weak currents opened the door to long‑range communication. Engineers could now transmit voice and music across oceans using amplitude modulation (AM) radio, a feat impossible with earlier detectors. Moreover, the vacuum tube became the heart of early electronic oscillators, generating continuous waveforms essential for carrier signals in wireless telegraphy. The combination of amplification and oscillation turned the vacuum tube into a versatile building block for virtually every electronic system of the era.`,
    `Beyond broadcasting, vacuum tubes powered the first generation of digital computers. In the 1940s, machines such as ENIAC and Colossus relied on thousands of triodes to perform logical operations at speeds unimaginable for electromechanical relays. Although these tubes consumed significant power and generated heat, they enabled binary calculations that laid the groundwork for modern computing. The term “electronic age” was coined precisely because vacuum tubes replaced mechanical switches with fast, reliable electronic ones.`,
    `The dominance of the vacuum tube lasted until the late 1950s, when semiconductor devices began to emerge. Yet even after transistors supplanted them in most applications, tubes persisted in niche fields where their unique characteristics—high voltage tolerance, linear amplification, and resilience to radiation—remained unmatched. Audiophiles still prize tube amplifiers for their warm sound, while radio amateurs use them for high‑power transmitters.`,
    `Reflecting on the century‑long journey from a simple heated filament to complex computing systems, it is clear that <span class="vocab" data-cn="热电子发射">thermionic emission</span> was more than a curiosity; it was the catalyst for an entire technological paradigm. The vacuum tube transformed how humanity communicates, computes, and entertains, proving that even the faintest glow can illuminate an age of innovation.`,
  ],
  vocabulary: [
    { word: 'vacuum tube', cn: '真空管' },
    { word: 'thermionic emission', cn: '热电子发射' },
    { word: 'cathode', cn: '阴极' },
    { word: 'anode', cn: '阳极' },
    { word: 'triode', cn: '三极管' },
    { word: 'grid', cn: '栅极' },
    { word: 'amplification', cn: '放大' },
    { word: 'oscillation', cn: '振荡' },
  ],
};

export default article;
