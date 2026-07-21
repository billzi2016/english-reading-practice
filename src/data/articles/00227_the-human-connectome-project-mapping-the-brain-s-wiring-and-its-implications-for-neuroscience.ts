import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Human Connectome Project: Mapping the Brain’s Wiring and Its Implications for Neuroscience》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00227 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00227',
  slug: 'the-human-connectome-project-mapping-the-brain-s-wiring-and-its-implications-for-neuroscience',
  title: 'The Human Connectome Project: Mapping the Brain’s Wiring and Its Implications for Neuroscience',
  subtitle: 'How a massive imaging effort reshapes our view of brain networks',
  summary: 'An engaging look at the Human Connectome Project, its cutting‑edge methods, key findings, and what they mean for neuroscience.',
  category: 'science',
  difficulty: 'advanced',
  readingMinutes: 6,
  paragraphs: [
    `In 2009 the United States National Institutes of Health launched an ambitious endeavor called the <span class="vocab" data-cn="人类连接组计划">Human Connectome Project</span> (HCP). The idea was simple yet daring: to map, at unprecedented resolution, the wiring diagram that underlies every thought, feeling, and behavior in a healthy adult brain. Rather than focusing on individual neurons—an impossible task for whole‑brain imaging—the project aimed to capture the large‑scale pathways linking cortical regions, offering a new kind of “road map” for neuroscience.`,
    `To achieve this, HCP combined several state‑of‑the‑art neuroimaging techniques. One cornerstone was <span class="vocab" data-cn="扩散张量成像">diffusion tensor imaging</span> (DTI), which tracks the movement of water molecules along white‑matter fibers and thus reveals their orientation. Complementing DTI, the project collected massive amounts of <span class="vocab" data-cn="功能性磁共振成像">functional magnetic resonance imaging</span> (fMRI) data while participants rested or performed simple tasks, allowing researchers to infer which regions tend to activate together and therefore likely communicate. The synergy of structural and functional maps gave the HCP a uniquely comprehensive view of brain connectivity.`,
    `Data acquisition was only half the story; the other half lay in processing and sharing. HCP pioneered an open‑source pipeline that applied rigorous motion correction, spatial normalization, and artifact removal to each dataset. The resulting “preprocessed” data were deposited in public repositories, accompanied by detailed metadata describing scanner parameters, participant demographics, and behavioral scores. This commitment to <span class="vocab" data-cn="神经信息学">neuroinformatics</span> turned the project into a community resource that anyone—from graduate students to seasoned clinicians—could explore without needing their own high‑field MRI scanner.`,
    `Early analyses of the HCP dataset revealed striking regularities. Using concepts from <span class="vocab" data-cn="图论">graph theory</span>, researchers identified a set of “hub” regions—such as the posterior cingulate and precuneus—that sit at the crossroads of many network pathways. These hubs appear to support integrative functions like self‑referential thought and attention shifting. Moreover, the project highlighted substantial individual variability: even among healthy adults, the strength and pattern of connections can differ enough to predict differences in cognitive performance, personality traits, or susceptibility to mental illness.`,
    `The implications for clinical neuroscience have been profound. By establishing a normative baseline of connectivity, HCP data enable clinicians to spot deviations associated with disorders such as schizophrenia, autism spectrum disorder, and Alzheimer’s disease. For example, reduced integrity in specific white‑matter tracts identified by DTI has been linked to early cognitive decline, suggesting potential biomarkers for preclinical diagnosis. In parallel, the rich functional maps have informed neuromodulation strategies—like transcranial magnetic stimulation—by pinpointing network nodes whose activation may alleviate depressive symptoms.`,
    `Beyond medicine, the Human Connectome Project has sparked interdisciplinary collaborations. Computer scientists have used HCP’s high‑dimensional data to train deep learning models that can predict an individual’s age or fluid intelligence from their connectivity profile. Meanwhile, philosophers of mind debate whether a detailed connectome could ever capture the subjective quality of experience, raising questions about the limits of reductionist approaches in neuroscience. This dialogue illustrates how a single dataset can reverberate across fields, challenging assumptions and inspiring new research directions.`,
    `Looking ahead, the HCP legacy continues to expand. Successor initiatives—such as the Lifespan Connectome Project and the International Consortium for Brain Mapping—are extending the original framework to children, older adults, and diverse populations worldwide. Advances in ultra‑high field MRI (7 Tesla and beyond) promise even finer resolution of cortical layers, while emerging techniques like <span class="vocab" data-cn="磁共振波谱">magnetic resonance spectroscopy</span> add metabolic information to the connectivity picture. As these efforts converge, we move closer to a truly comprehensive model of how the brain’s wiring gives rise to mind and behavior.`,
  ],
  vocabulary: [
    { word: 'Human Connectome Project', cn: '人类连接组计划' },
    { word: 'diffusion tensor imaging', cn: '扩散张量成像' },
    { word: 'functional magnetic resonance imaging', cn: '功能性磁共振成像' },
    { word: 'neuroinformatics', cn: '神经信息学' },
    { word: 'graph theory', cn: '图论' },
    { word: 'magnetic resonance spectroscopy', cn: '磁共振波谱' },
  ],
};

export default article;
