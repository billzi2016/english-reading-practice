import type { Article } from '../../types/index.ts';

// 文件意图：维护《The First Dinosaur Egg Fossils: The Oviraptor Controversy and Its Impact on Paleontology》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00398 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00398',
  slug: 'the-first-dinosaur-egg-fossils-the-oviraptor-controversy-and-its-impact-on-paleontology',
  title: 'The First Dinosaur Egg Fossils: The Oviraptor Controversy and Its Impact on Paleontology',
  subtitle: 'How a misinterpreted nest reshaped our view of dinosaur behavior',
  summary: 'A story of early egg discoveries, the “egg‑thief” myth, and the lasting lessons for paleontology.',
  category: 'science',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `In the summer of 1923 the Central Asiatic Expeditions, led by Roy Chapman Andrews, trekked across the stark dunes of Mongolia’s Gobi Desert. Their goal was to uncover ancient mammals, yet they stumbled upon a clutch of smooth, elongated stones that would later be recognized as the world’s first dinosaur eggs. At the time, no one had ever seen fossilized reptile eggs, so the find sparked both excitement and bewilderment among the expedition members.`,
    `The eggs were unearthed in the Djadokhta Formation, a sedimentary layer famous for preserving delicate vertebrate remains. Initial examinations suggested they belonged to a small herbivorous dinosaur, perhaps a protoceratops, because of their size and the abundance of nearby skeletal fragments. However, a later discovery—a partial skull of a strange, beaked theropod found in close proximity—prompted scientists to link the eggs to this new predator, coining the name <span class="vocab" data-cn="卵盗龙">Oviraptor</span> (“egg thief”).`,

    `The label “<span class="vocab" data-cn="肉食性恐龙">theropod</span> egg‑thief” reflected a prevailing view of dinosaurs as ruthless, reptilian hunters. Paleontologists imagined Oviraptor snatching nests, crushing the shells with its powerful jaws, and feeding on the contents. This narrative fit neatly into early 20th‑century ideas that portrayed dinosaurs as cold‑blooded monsters rather than dynamic animals capable of complex behavior.`,

    `Decades later, in 1976, a remarkably preserved adult Oviraptor was discovered curled over a nest at the same Djadokhta site. The skeleton’s forelimbs were positioned symmetrically on either side of a shallow depression containing dozens of eggs, an arrangement strikingly similar to modern birds brooding their young. This find forced researchers to reconsider the “egg‑thief” hypothesis; instead, Oviraptor appeared to be a caring parent, using its body heat to incubate the clutch—a behavior now termed <span class="vocab" data-cn="孵蛋行为">brooding</span>.`,

    `The reinterpretation had far‑reaching consequences for paleontology. It highlighted the importance of <span class="vocab" data-cn="成岩学/埋藏学">taphonomy</span>—the study of how organisms become fossilized—in understanding behavioral contexts. By examining the sedimentary matrix, orientation of the eggs, and trace fossils around the nest, scientists could reconstruct a realistic picture of dinosaur reproductive strategies rather than relying on sensational speculation.`,

    `Subsequent research employed <span class="vocab" data-cn="系统发育分析">phylogenetic analysis</span> to place Oviraptor within the broader clade of oviraptorosaurs, revealing close relationships with feathered dinosaurs and early birds. Studies of <span class="vocab" data-cn="胚胎发育">embryonic development</span> inside some eggs, using high‑resolution CT scans, showed that hatchlings possessed well‑developed limbs and beaks, supporting the idea of precocial (relatively independent) young—a stark contrast to the earlier “egg‑stealing” myth.`,

    `Modern techniques such as isotope geochemistry and 3‑D modeling have further refined our understanding of dinosaur nesting sites. Researchers can now estimate incubation temperatures, clutch sizes, and even parental diet during brooding periods. The Oviraptor controversy thus became a catalyst for interdisciplinary collaboration, encouraging paleontologists to integrate biology, chemistry, and physics into their investigations of ancient life.`,

    `Today, the story of the first dinosaur egg fossils serves as a cautionary tale about jumping to conclusions from incomplete evidence. It reminds us that every fossil is part of a larger puzzle, and that careful contextual analysis can overturn long‑standing assumptions. The legacy of Oviraptor’s “egg‑thief” reputation endures not as a scandal, but as an illustration of how scientific humility and new data can transform our view of the deep past.`,
  ],
  vocabulary: [
    { word: 'theropod', cn: '肉食性恐龙' },
    { word: 'Oviraptor', cn: '卵盗龙' },
    { word: 'nesting site', cn: '巢址' },
    { word: 'embryonic development', cn: '胚胎发育' },
    { word: 'taphonomy', cn: '成岩学/埋藏学' },
    { word: 'phylogenetic analysis', cn: '系统发育分析' },
  ],
};

export default article;
