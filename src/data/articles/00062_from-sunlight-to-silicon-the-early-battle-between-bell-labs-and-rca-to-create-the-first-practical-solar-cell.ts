import type { Article } from '../../types/index.ts';

// 文件意图：维护《From Sunlight to Silicon: The Early Battle Between Bell Labs and RCA》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00062 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00062',
  slug: 'from-sunlight-to-silicon-the-early-battle-between-bell-labs-and-rca-to-create-the-first-practical-solar-cell',
  title: 'From Sunlight to Silicon: The Early Battle Between Bell Labs and RCA',
  subtitle: 'How two rival labs turned a century‑old curiosity into the first practical solar cell.',
  summary: 'A narrative of post‑war research, corporate rivalry, and the breakthrough that powered the first satellite.',
  category: 'technology',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the late 1940s the United States faced a paradox: an abundance of sunlight across its deserts and islands, yet no cheap way to turn that light into usable electricity. The phenomenon known as <span class="vocab" data-cn="光电效应">photovoltaic</span> had been observed by Edmond Becquerel in 1839, but the devices built from early materials such as selenium produced only millivolts of voltage and were far too fragile for real‑world use. After World War II, both the military and emerging commercial sectors began to ask whether a reliable source of power could be mounted on remote outposts, aircraft, or the soon‑to‑be‑launched satellites.`,
    `At Bell Laboratories, a small team led by Daryl Chapin, Calvin Fuller, and Gerald Pearson set out to answer that question. Their breakthrough hinged on mastering the <span class="vocab" data-cn="半导体">semiconductor</span> physics of silicon, specifically creating a clean <span class="vocab" data-cn="p‑n 结">p-n junction</span> where electrons and holes could be separated by light. By carefully <span class="vocab" data-cn="掺杂">doping</span> one side with phosphorus and the other with boron, they produced a cell that converted about six percent of incident sunlight into electricity—a figure that seemed modest but was unprecedented for a solid‑state device at the time.`,
    `RCA’s research division, meanwhile, pursued a parallel path but started with <span class="vocab" data-cn="锗">germanium</span> crystals. Germanium offered higher intrinsic conductivity than silicon, yet its bandgap made it less efficient under bright sunlight and more vulnerable to temperature swings. RCA engineers struggled with the material’s brittleness and the difficulty of forming a stable junction without contaminating the crystal lattice. Their early prototypes generated only a few milliwatts, far short of the power needed for even a simple radio transmitter, prompting senior management to question whether the effort was worth continuing.`,
    `The rivalry intensified when the newly formed National Aeronautics and Space Administration (NASA) announced plans for an orbiting satellite that would need continuous power. Both Bell Labs and RCA applied for government contracts, promising cells that could survive launch vibrations and the vacuum of space. In a dramatic demonstration in early 1954, Chapin’s team mounted a Bell cell on a rooftop antenna and powered a short‑wave transmitter for several hours—proof that sunlight could replace bulky batteries. The success caught the attention of the Department of Defense, which began funneling funds toward Bell’s silicon program, while RCA was forced to reconsider its material choice.`,
    `Realizing they were falling behind, RCA abruptly shifted its research focus from germanium to silicon in late 1954. However, AT&T held a series of patents covering the specific method of creating a high‑purity <span class="vocab" data-cn="硅片">silicon wafer</span> with an epitaxial layer and controlled doping profile. RCA’s engineers had to redesign their process to avoid infringement, slowing progress just as Bell Labs was preparing to file its own patent on the complete solar cell assembly. The legal tug‑of‑war added a corporate dimension to what was already a scientific race, and many observers noted that the competition spurred both labs to refine manufacturing techniques at an unprecedented pace.`,
    `When Vanguard 1 lifted off in March 1958, it carried four small silicon cells supplied by Bell Labs—the first instance of a satellite being powered directly by sunlight. The cells generated enough <span class="vocab" data-cn="光电压">photovoltage</span> to run the onboard telemetry system for months, proving that solar power could sustain space missions. RCA, while not credited with the historic launch, contributed critical advances in large‑scale cell encapsulation and metallization that later enabled mass production of photovoltaic panels for terrestrial use during the 1960s energy research programs.`,
    `The early duel between Bell Labs and RCA left a lasting imprint on the modern solar industry. Techniques such as <span class="vocab" data-cn="外延生长">epitaxial growth</span> of silicon layers, precise doping control, and low‑cost wafer slicing were honed under the pressure of rivalry and government contracts. Today’s commercial modules routinely achieve efficiencies above twenty percent, a testament to the foundational work done in those cramped laboratory benches. The story reminds us that competition, when coupled with scientific curiosity, can accelerate technology from a laboratory curiosity to a global energy solution.`,
  ],
  vocabulary: [
    { word: 'photovoltaic', cn: '光电效应' },
    { word: 'semiconductor', cn: '半导体' },
    { word: 'p-n junction', cn: 'p‑n 结' },
    { word: 'doping', cn: '掺杂' },
    { word: 'germanium', cn: '锗' },
    { word: 'silicon wafer', cn: '硅片' },
    { word: 'photovoltage', cn: '光电压' },
    { word: 'epitaxial growth', cn: '外延生长' },
  ],
};

export default article;
