import type { Article } from '../../types/index.ts';

const article: Article = {
  id: '00237',
  slug: 'the-race-to-build-the-first-practical-steam-locomotive-stephenson-s-rocket-versus-its-rivals',
  title: 'The Race to Build the First Practical Steam Locomotive',
  subtitle: 'Stephenson’s Rocket versus Its Rivals',
  summary: 'A narrative of the Rainhill Trials and how Stephenson’s Rocket outperformed its competitors.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1820s, the industrial towns of Liverpool and Manchester were linked by a new ambition: a railway that could move coal, cotton and passengers faster than any horse‑drawn carriage. The proposed line, later known as the Liverpool and Manchester Railway, required a machine capable of pulling heavy loads over relatively level ground at a steady speed. Existing road engines were unreliable, and the engineers of the day faced a daunting question: could a <span class="vocab" data-cn="蒸汽机车">steam locomotive</span> be built that was both powerful enough and safe for public use?`,
    `George Stephenson, a former coal‑miner turned mechanical pioneer, had already experimented with several prototype engines on the Killingworth Colliery. His 1814 machine, nicknamed “Blücher”, demonstrated that a locomotive could haul a few wagons up a modest incline, but it was far from practical for long distances. Undeterred, Stephenson refined his designs, focusing on stronger iron rails and more efficient transmission of power. By the late 1820s he had assembled a team at his workshop in Newcastle to construct what would become the celebrated <span class="vocab" data-cn="蒸汽机车">Rocket</span>.`,
    `The decisive test arrived in October 1829, when the railway’s directors announced the Rainhill Trials—a public competition held on a three‑mile stretch near the village of Rainhill. The rules demanded that each entrant cover the distance at least ten times without stopping, maintain an average speed of 10 mph, and demonstrate reliable braking. Three main rivals entered: the <span class="vocab" data-cn="多管锅炉">multi‑tubular boiler</span> design of the “Novelty” by Braithwaite and Ericsson, Timothy Hackworth’s heavy “Sans Pareil”, and Stephenson’s own Rocket. A few smaller entries also appeared but withdrew before the start line.`,
    `Rocket’s superiority lay in a series of engineering breakthroughs that addressed the shortcomings of its competitors. Its <span class="vocab" data-cn="多管锅炉">multi‑tubular boiler</span> dramatically increased the heating surface, allowing steam to be generated more quickly and at higher <span class="vocab" data-cn="锅炉压力">boiler pressure</span>. A separate <span class="vocab" data-cn="火箱">firebox</span> provided a larger combustion chamber, improving fuel efficiency. Perhaps the most ingenious feature was the <span class="vocab" data-cn="喷射管">blast pipe</span>, which used exhaust steam to draw air through the fire, creating a self‑reinforcing draft that kept the engine’s power steady even under load.`,
    `The Novelty, while visually striking with its twin cylinders and high‑pressure system, suffered from mechanical fragility; several components cracked during the trial runs, forcing its crew to make on‑the‑spot repairs. Sans Pareil, built on a more conservative design, managed to complete the course but was hampered by excessive weight, which reduced its <span class="vocab" data-cn="粘着力">adhesion</span> on the iron rails and limited acceleration. The track itself adhered to the emerging standard <span class="vocab" data-cn="轨距">gauge</span> of 4 ft 8½ in, a dimension that would later become universal. Moreover, its boiler could not sustain the required pressure for long periods, causing frequent pauses to rebuild steam. In contrast, Rocket maintained a smooth rhythm, completing the course in just under 12 minutes with a comfortable margin.`,
    `When the judges announced Rocket as the victor, the impact was immediate and far‑reaching. The Liverpool and Manchester Railway purchased several of Stephenson’s engines, and other emerging railways across Britain quickly adopted the same basic layout—boiler, firebox, cylinders, and blast pipe—as a standard blueprint. Stephenson’s success also secured his reputation as “the Father of Railways”, leading to subsequent designs such as the “Planet” class that refined wheel arrangements and introduced the concept of interchangeable parts, further accelerating industrial expansion.`,
    `The rivalry at Rainhill did more than crown a single machine; it sparked a technological race that spread across Europe and North America within decades. Engineers copied Rocket’s key features while experimenting with larger gauges, stronger steel rails, and more powerful cylinders, laying the groundwork for the massive transcontinental networks of the 19th century. Today, the story of Rocket versus its rivals serves as a classic case study in how competition, practical testing, and incremental innovation can transform an ambitious idea into a world‑changing reality.`,
  ],
  vocabulary: [
    { word: 'steam locomotive', cn: '蒸汽机车' },
    { word: 'multi‑tubular boiler', cn: '多管锅炉' },
    { word: 'firebox', cn: '火箱' },
    { word: 'blast pipe', cn: '喷射管' },
    { word: 'gauge', cn: '轨距' },
    { word: 'adhesion', cn: '粘着力' },
    { word: 'boiler pressure', cn: '锅炉压力' },
  ],
};

export default article;
