import type { Article } from '../../types/index.ts';

// File purpose: maintain the article content for "From Satellites to Smartphones: The Evolution of GPS and Its Global Impact"
const article: Article = {
  id: '00022',
  slug: 'from-satellites-to-smartphones-the-evolution-of-gps-and-its-global-impact',
  title: 'From Satellites to Smartphones: The Evolution of GPS and Its Global Impact',
  subtitle: 'Tracing the journey from space-borne signals to everyday devices',
  summary: 'Explore how GPS technology evolved from military satellites into a ubiquitous tool shaping navigation, industry, and daily life.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `The <span class="vocab" data-cn="全球定位系统">Global Positioning System</span>, commonly known as GPS, began as a military project during the Cold War. In the early 1970s, the United States Department of Defense commissioned a network of orbiting satellites to provide reliable navigation for ships and aircraft worldwide. The concept was simple yet revolutionary: by measuring the time it takes for radio signals to travel from space to Earth, receivers could calculate their exact location anywhere on the planet.`,
    `A full <span class="vocab" data-cn="卫星星座">satellite constellation</span> of at least twenty-four satellites, arranged in six orbital planes, ensures that a minimum of four signals are visible from any point on the globe. Each satellite broadcasts a unique code and precise timing information derived from atomic clocks. By receiving these signals, a GPS receiver performs <span class="vocab" data-cn="三角测量">triangulation</span>, solving for its three-dimensional position and clock error simultaneously. This redundancy not only improves accuracy but also provides resilience against signal blockage or satellite failure.`,
    `In the system’s early civilian phase, the U.S. deliberately degraded public accuracy through <span class="vocab" data-cn="选择性可用性">Selective Availability</span>, adding intentional errors of up to 100 meters. While this protected military operations, it limited commercial adoption. The decision to discontinue SA in May 2000 marked a turning point: civilian GPS devices instantly achieved sub-10-meter precision without additional hardware. This boost spurred rapid growth in sectors ranging from surveying to outdoor recreation.`,
    `The late 1990s saw the first wave of consumer <span class="vocab" data-cn="导航系统">navigation systems</span> products, most notably dedicated handheld units and in-car navigation devices. These gadgets combined GPS with digital maps stored on memory cards, allowing drivers to plot routes and receive turn-by-turn directions. Early models were bulky and required clear sky views, but they demonstrated the practical value of real-time positioning for everyday tasks. As map databases expanded and user interfaces improved, public confidence in satellite navigation grew.`,
    `The advent of smartphones transformed GPS from a specialized accessory into an invisible utility embedded in daily life. Modern phones employ <span class="vocab" data-cn="辅助GPS">Assisted GPS</span> (A-GPS), which fuses satellite signals with cellular tower data and Wi-Fi positioning to reduce time-to-first-fix, especially indoors. Developers also leveraged precise location for <span class="vocab" data-cn="增强现实">augmented reality</span> applications, overlaying virtual information onto real-world scenes. This convergence enabled features such as location-based gaming, instant venue discovery, and context-aware notifications.`,
    `The global impact of GPS extends far beyond personal navigation. In logistics, companies use <span class="vocab" data-cn="地理围栏">geofencing</span> to monitor fleet movements, trigger alerts when vehicles enter or leave predefined zones, and optimize delivery routes. Agriculture benefits from <span class="vocab" data-cn="精准农业">precision agriculture</span>, where tractors equipped with GPS follow exact planting lines, reducing waste and increasing yields. Emergency responders rely on real-time coordinates to locate incidents quickly, while scientists employ GPS for tectonic monitoring and climate research.`,
    `As the world moves toward autonomous vehicles and smart cities, GPS continues to evolve. New global navigation satellite systems (GNSS) such as Europe's Galileo, China's BeiDou, and Russia's GLONASS complement the original constellation, offering multi-constellation receivers that improve accuracy, availability, and resistance to spoofing. Meanwhile, emerging technologies like <span class="vocab" data-cn="实时动态定位">real-time kinematic</span> (RTK) positioning push precision down to centimeters, enabling tasks previously impossible without manual surveying. Yet these advances also raise privacy concerns, prompting debates over how location data should be protected.`,
  ],
  vocabulary: [
    { word: 'Global Positioning System', cn: '全球定位系统' },
    { word: 'satellite constellation', cn: '卫星星座' },
    { word: 'triangulation', cn: '三角测量' },
    { word: 'Selective Availability', cn: '选择性可用性' },
    { word: 'navigation systems', cn: '导航系统' },
    { word: 'Assisted GPS', cn: '辅助GPS' },
    { word: 'augmented reality', cn: '增强现实' },
    { word: 'geofencing', cn: '地理围栏' },
    { word: 'precision agriculture', cn: '精准农业' },
    { word: 'real-time kinematic', cn: '实时动态定位' },
  ],
};

export default article;
