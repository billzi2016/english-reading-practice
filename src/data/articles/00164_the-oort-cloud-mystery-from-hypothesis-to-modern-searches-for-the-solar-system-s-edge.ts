import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Oort Cloud Mystery: From Hypothesis to Modern Searches for the Solar System’s Edge》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00164 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00164',
  slug: 'the-oort-cloud-mystery-from-hypothesis-to-modern-searches-for-the-solar-system-s-edge',
  title: 'The Oort Cloud Mystery: From Hypothesis to Modern Searches for the Solar System’s Edge',
  subtitle: 'Tracing how a daring idea became a frontier of astronomical research',
  summary: 'Explore the origin, evidence, and current quests surrounding the distant cometary reservoir that may surround our Sun.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1950s Dutch astronomer <span class="vocab" data-cn="扬·奥尔特">Jan Oort</span> noticed a puzzling pattern in the orbits of long‑period comets. Their trajectories seemed to come from all directions, unlike the flat, planetary plane that defines most solar system bodies. To explain this isotropy, Oort proposed an unseen, spherical shell of icy objects far beyond Pluto—a hypothesis that would later be named the <span class="vocab" data-cn="奥尔特云">Oort Cloud</span>. At the time, no telescope could see such distant debris, so his idea remained speculative for decades.`,
    `The modern picture describes the Oort Cloud as a vast cometary reservoir extending roughly from 2,000 to 100,000 astronomical units (AU) from the Sun. An <span class="vocab" data-cn="天文单位">astronomical unit</span> is the average distance between Earth and the Sun, about 150 million kilometres, so even the inner edge lies far beyond the orbit of Neptune. The cloud is thought to consist mainly of frozen water, carbon dioxide, methane, and dust—materials that formed in the early solar nebula and were later scattered outward by gravitational interactions with the giant planets.`,
    `Indirect evidence for this distant shell comes from the observed distribution of long‑period comets. Their orbits are nearly <span class="vocab" data-cn="各向同性的">isotropic</span>, meaning they arrive from any direction in the sky, a signature expected if they originate from a spherical source rather than a flattened disc. Moreover, statistical analyses show that many of these comets have perihelia (closest approach to the Sun) well beyond the planetary region, suggesting they were nudged inward by subtle forces rather than direct planetary encounters.`,
    `Detecting individual members of the Oort Cloud is extraordinarily difficult. Objects there are tiny—often only a few kilometres across—and receive barely any sunlight, making them extremely faint in visible light. Astronomers therefore rely on infrared observations, where even cold bodies emit a weak glow. The <span class="vocab" data-cn="红外望远镜">Wide‑field Infrared Survey Explorer (WISE)</span> conducted an all‑sky scan that set upper limits on the number of large Oort Cloud objects, but it could not resolve the bulk of the population because their thermal emission is below current detection thresholds.`,
    `In recent years, wide‑field optical surveys have begun to probe the outer reaches indirectly. Projects such as <span class="vocab" data-cn="巡天望远镜">Pan‑STARRS</span> and the upcoming Vera C. Rubin Observatory (formerly LSST) repeatedly image large swaths of sky, looking for faint moving sources that could be distant comets or even dormant icy bodies on the brink of activation. By tracking subtle changes in brightness or detecting sudden outbursts, these surveys can flag candidates that may belong to the Oort Cloud, expanding our statistical sample beyond historical comet records.`,
    `Theoretical work complements observational efforts by modeling how external forces shape the cloud over billions of years. The combined influence of passing <span class="vocab" data-cn="星际近掠">stellar encounters</span> and the steady pull of the Milky Way’s <span class="vocab" data-cn="银河潮汐">galactic tide</span> can perturb Oort Cloud objects, sending some spiraling inward as comets while ejecting others into interstellar space. Sophisticated N‑body simulations show that these processes create a dynamic equilibrium, constantly replenishing the inner solar system with fresh cometary material and eroding the outer reservoir at a slow but measurable rate.`,
    `Future missions may finally give us a direct glimpse of this hidden frontier. Concepts such as a dedicated <span class="vocab" data-cn="红外空间望远镜">infrared space telescope</span> positioned at Earth‑Sun L2 could achieve the sensitivity needed to detect thermal signatures from kilometer‑scale bodies at tens of thousands of AU. Additionally, precise measurements of stellar occultations—when a distant star’s light is briefly blocked by an Oort Cloud object—could reveal sizes and albedos without requiring direct imaging. As technology advances, the once‑purely theoretical Oort Cloud may become an observable component of our planetary system, reshaping how we understand its formation and long‑term evolution.`,
  ],
  vocabulary: [
    { word: 'Jan Oort', cn: '扬·奥尔特' },
    { word: 'Oort Cloud', cn: '奥尔特云' },
    { word: 'astronomical unit', cn: '天文单位' },
    { word: 'isotropic', cn: '各向同性的' },
    { word: 'Wide‑field Infrared Survey Explorer (WISE)', cn: '红外望远镜' },
    { word: 'Pan‑STARRS', cn: '巡天望远镜' },
    { word: 'stellar encounter', cn: '星际近掠' },
    { word: 'galactic tide', cn: '银河潮汐' },
    { word: 'infrared space telescope', cn: '红外空间望远镜' },
  ],
};

export default article;
