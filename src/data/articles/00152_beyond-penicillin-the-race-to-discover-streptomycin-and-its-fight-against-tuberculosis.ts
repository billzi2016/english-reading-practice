import type { Article } from '../../types/index.ts';

// 文件意图：维护《Beyond Penicillin: The Race to Discover Streptomycin and Its Fight Against Tuberculosis》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00152 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00152',
  slug: 'beyond-penicillin-the-race-to-discover-streptomycin-and-its-fight-against-tuberculosis',
  title: 'Beyond Penicillin: The Race to Discover Streptomycin and Its Fight Against Tuberculosis',
  subtitle: 'How a soil bacterium reshaped the battle against TB',
  summary: 'The story of streptomycin’s discovery, its scientific hurdles, and its impact on tuberculosis treatment.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the early 1940s, while penicillin was dazzling the world with its ability to cure wound infections, a silent killer—<span class="vocab" data-cn="结核病">tuberculosis</span> (TB)—continued to claim thousands of lives each year. The disease’s culprit, <span class="vocab" data-cn="分枝杆菌属结核分枝杆菌">Mycobacterium tuberculosis</span>, was notoriously resilient, hiding inside lung tissue and evading the immune system. Physicians knew that a new drug was desperately needed, but the scientific community had yet to find an agent capable of penetrating the bacterium’s thick, waxy cell wall.`,
    `Enter Selman Waksman, a soil microbiologist at Rutgers University who believed that the earth itself might harbor hidden antibiotics. His laboratory cultivated countless strains of actinomycetes—soil-dwelling bacteria known for producing bioactive compounds. In 1943, one such strain, later named <span class="vocab" data-cn="链霉素">Streptomyces griseus</span>, yielded a pale yellow broth that inhibited the growth of several test organisms. Waksman’s team isolated the active principle and christened it “streptomycin,” after its source genus.`,
    `The breakthrough, however, was far from smooth. Early purification attempts produced a mixture that was toxic to mice, leading many skeptics to doubt its therapeutic value. It took the perseverance of Albert Schatz, Waksman's graduate student, to refine the extraction process using a series of solvent precipitations and crystallizations. By late 1944, a relatively pure form of streptomycin emerged, showing potent activity against <span class="vocab" data-cn="分枝杆菌属结核分枝杆菌">M. tuberculosis</span> in vitro.`,
    `Clinical trials began at the Mayo Clinic under the guidance of Dr. William H. Feldman. The first human patient—a 23‑year‑old soldier with advanced pulmonary TB—received streptomycin intravenously. Within weeks, his sputum smears turned negative, a result that stunned the medical community. Yet the triumph was tempered by an unexpected problem: the bacterium quickly developed <span class="vocab" data-cn="抗药性">resistance</span> when streptomycin was used as monotherapy. Researchers realized that combination therapy would be essential to prevent this evolutionary escape route.`,
    `In response, physicians paired streptomycin with para‑aminosalicylic acid (PAS), another anti‑TB agent discovered earlier in the 20th century. This regimen dramatically reduced relapse rates and set a new standard for TB treatment. The success also sparked a wave of research into other soil microbes, leading to the discovery of antibiotics such as tetracycline and erythromycin. Waksman’s contributions were recognized globally when he received the Nobel Prize in Physiology or Medicine in 1952, sharing it with his collaborators for “their discoveries concerning natural products that have been useful in medicine.”`,
    `Streptomycin’s impact extended beyond TB. It became a vital tool against other serious infections, including plague and certain gram‑negative bacteria. However, its use also highlighted the importance of <span class="vocab" data-cn="药代动力学">pharmacodynamics</span>—the study of how drug concentrations affect bacterial killing—and the need for careful dosing to minimize toxicity while maximizing efficacy. Over time, newer drugs like rifampicin and isoniazid supplanted streptomycin as first‑line TB therapies, but its legacy endures in modern combination regimens.`,
    `Today, the fight against tuberculosis faces fresh challenges: multidrug‑resistant (MDR) and extensively drug‑resistant (XDR) strains threaten to reverse decades of progress. Yet the story of streptomycin reminds us that nature’s hidden arsenal—soil microbes, marine organisms, even extreme‑environment bacteria—still holds promise for future antibiotics. By learning from past successes and failures, scientists continue to explore these reservoirs, hoping to stay one step ahead in the endless race between pathogens and medicine.`,
  ],
  vocabulary: [
    { word: 'tuberculosis', cn: '结核病' },
    { word: 'Mycobacterium tuberculosis', cn: '分枝杆菌属结核分枝杆菌' },
    { word: 'Streptomyces griseus', cn: '链霉素（来源的放线菌）' },
    { word: 'streptomycin', cn: '链霉素' },
    { word: 'resistance', cn: '抗药性' },
    { word: 'pharmacodynamics', cn: '药代动力学' },
  ],
};

export default article;
