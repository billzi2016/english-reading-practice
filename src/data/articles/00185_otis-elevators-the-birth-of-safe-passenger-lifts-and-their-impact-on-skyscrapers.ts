import type { Article } from '../../types/index.ts';

// 文件意图：维护《Otis Elevators: The Birth of Safe Passenger Lifts and Their Impact on Skyscrapers》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00185 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00185',
  slug: 'otis-elevators-the-birth-of-safe-passenger-lifts-and-their-impact-on-skyscrapers',
  title: 'Otis Elevators: The Birth of Safe Passenger Lifts and Their Impact on Skyscrapers',
  subtitle: 'How a simple safety device reshaped city skylines',
  summary: 'Elisha Otis’s invention made tall buildings practical, sparking the rise of modern skyscrapers.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `In the mid‑19th century, cities were already feeling cramped, but architects still hesitated to design truly vertical structures. The main obstacle was not lack of ambition—it was the fear that a lift could suddenly drop, endangering passengers and destroying public confidence. This anxiety persisted until 1852, when a young mechanic named <span class="vocab" data-cn="伊利沙·奥蒂斯">Elisha Otis</span> demonstrated his revolutionary <span class="vocab" data-cn="安全刹车装置">safety brake</span> at the Crystal Palace exhibition in New York. By pulling a rope, he caused the platform to plummet, only for the brake to snap shut and hold it firmly in place, proving that a lift could be made reliably safe.`,
    `Otis’s invention quickly evolved from a novelty into a commercial <span class="vocab" data-cn="客运电梯">passenger lift</span>. The first fully operational passenger elevator was installed in 1857 at the E.V. Haughwout Building on Broadway, a six‑story department store that attracted crowds eager to experience the new technology. The lift’s smooth ascent and reliable stop mechanisms turned shopping trips into an event, and merchants reported increased sales as customers could reach upper floors without fatigue. This early success convinced investors that vertical transportation could be a profitable business, prompting Otis & Co. to open factories dedicated to producing elevators on a larger scale.`,
    `While the original designs relied on rope‑and‑pulley systems powered by steam engines, engineers soon recognized the need for more efficient and space‑saving solutions as buildings grew taller. The introduction of the <span class="vocab" data-cn="液压电梯">hydraulic elevator</span> in the early 20th century allowed lifts to be driven by pressurized fluid, eliminating bulky overhead machinery and enabling smoother rides. Simultaneously, the concept of a <span class="vocab" data-cn="配重系统">counterweight</span>—a massive weight that moves opposite the cabin—was refined, reducing the motor’s workload and improving energy efficiency. These technical advances made it feasible to construct towers that reached well beyond ten stories without prohibitive costs.`,
    `The real turning point arrived in the 1910s when steel‑frame construction combined with reliable elevators to give birth to the first true <span class="vocab" data-cn="摩天大楼">skyscraper</span>. The Woolworth Building in New York, completed in 1913, rose 57 stories and relied on a fleet of Otis lifts that could transport hundreds of workers each day. Without fast, dependable vertical movement, the building’s floor‑to‑floor logistics would have been impossible, and tenants would have balked at long stair climbs. The success of such towers demonstrated to developers worldwide that height was no longer a barrier but a marketable asset, reshaping urban planning forever.`,
    `Beyond sheer height, elevators also altered how architects thought about interior space. With the assurance that people could reach any floor quickly, designers began to allocate entire floors for specialized uses—offices, observation decks, and even sky‑lobbies where passengers could transfer between express and local lifts. This vertical zoning created a new kind of <span class="vocab" data-cn="垂直交通系统">vertical transportation</span> hierarchy within a single building, optimizing traffic flow and reducing wait times. The result was not just taller structures but more functional ones, where each level served a distinct purpose while remaining seamlessly connected.`,
    `The ripple effects extended far beyond architecture. As cities embraced high‑rise living, land values in downtown cores surged, prompting municipal governments to invest in infrastructure such as underground subways and utility shafts that could support dense vertical development. Moreover, the psychological impact of riding an elevator—once a symbol of modernity and progress—helped normalize the idea of living and working above ground level. By the mid‑20th century, the phrase “the sky’s the limit” took on a literal meaning for developers, who now measured ambition in meters rather than blocks.`,
    `Today, Otis remains a global leader in elevator technology, continuously innovating with smart destination‑control systems, regenerative drives that feed energy back into building grids, and even rope‑less magnetic levitation lifts under experimental stages. While the core principle of the safety brake endures—protecting passengers from uncontrolled descent—the surrounding ecosystem has become a sophisticated blend of digital monitoring, predictive maintenance, and sustainable design. The humble demonstration in 1852 set off a chain reaction that not only made skyscrapers possible but also reshaped how humanity experiences vertical space, turning cities into layered ecosystems that reach toward the clouds.`,
  ],
  vocabulary: [
    { word: 'Elisha Otis', cn: '伊利沙·奥蒂斯' },
    { word: 'safety brake', cn: '安全刹车装置' },
    { word: 'passenger lift', cn: '客运电梯' },
    { word: 'hydraulic elevator', cn: '液压电梯' },
    { word: 'counterweight', cn: '配重系统' },
    { word: 'skyscraper', cn: '摩天大楼' },
    { word: 'vertical transportation', cn: '垂直交通系统' },
  ],
};

export default article;
