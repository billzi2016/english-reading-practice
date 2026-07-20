import type { Article } from '../../types/index.ts';

// 文件意图：维护《The Polio Vaccine: Jonas Salk’s Race Against a Global Epidemic》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00029 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00029',
  slug: 'the-polio-vaccine-jonas-salk-s-race-against-a-global-epidemic',
  title: 'The Polio Vaccine: Jonas Salk’s Race Against a Global Epidemic',
  subtitle: 'A race against a global epidemic that reshaped modern medicine',
  summary: 'Jonas Salk’s development of the first safe polio vaccine turned a worldwide health crisis into a triumph, establishing new standards for vaccine research.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 6,
  paragraphs: [
    `At the beginning of the twentieth century, <span class="vocab" data-cn="小儿麻痹症">polio</span> emerged as a feared <span class="vocab" data-cn="流行病">epidemic</span> in industrialized nations. The disease attacked the spinal cord and brainstem, often leaving children with permanent paralysis or even death. Outbreaks in major cities such as New York, London, and Paris filled hospitals with terrified families, and public gatherings were frequently canceled to curb transmission. By the early 1950s, an estimated half‑million new cases were reported worldwide each year, creating a sense of urgency that would soon drive scientific innovation.`,
    `Before Jonas Salk entered the scene, several researchers had attempted to tame the virus with mixed success. The French virologist Albert Sabin explored a live‑attenuated approach, while Polish scientist Hilary Koprowski experimented with oral formulations. However, these early attempts were hampered by limited laboratory techniques and an incomplete understanding of how the immune system neutralized the pathogen. The scientific community recognized that a safe and effective <span class="vocab" data-cn="疫苗">vaccine</span> would require not only a reliable method to grow the virus but also a way to render it harmless without destroying its immunogenic properties.`,
    `In 1947, Salk was recruited by the University of Pittsburgh’s School of Medicine to lead a new research unit dedicated to polio. He adopted an <span class="vocab" data-cn="灭活的">inactivated</span> strategy: grow large quantities of the virus in monkey kidney cells, then treat it with formaldehyde to kill its ability to replicate while preserving its surface proteins. This approach promised a vaccine that could stimulate the body’s defenses without risking infection. Salk’s team worked around the clock, refining purification methods and testing dozens of animal models before moving to human subjects.`,
    `The turning point arrived in 1954 when the United States launched the largest <span class="vocab" data-cn="临床试验">clinical trial</span> ever conducted. Over one million schoolchildren across the country were randomly assigned to receive either Salk’s experimental preparation or a placebo, making it the first truly double‑blind, randomized study of its kind. The trial was overseen by a panel of independent scientists and required meticulous record‑keeping, as any hint of bias could jeopardize the results. When the data were finally analyzed in early 1955, the vaccine showed a 90 percent reduction in paralytic polio cases among those who received it.`,
    `The announcement that Salk’s <span class="vocab" data-cn="疫苗">vaccine</span> was safe and effective sparked a wave of public enthusiasm. Within months, mass <span class="vocab" data-cn="免疫接种">immunization</span> campaigns were organized in schools, factories, and community centers. By the end of 1957, polio incidence in the United States had dropped by more than 99 percent compared with pre‑vaccination levels. The success also inspired international health agencies to adopt similar strategies, leading to a rapid decline in cases across Europe, Asia, and Latin America.`,
    `The long‑term impact of Salk’s work extends far beyond the immediate drop in disease numbers. Widespread vaccination created conditions for <span class="vocab" data-cn="群体免疫">herd immunity</span>, protecting even those who could not be vaccinated due to age or medical reasons. Moreover, the rigorous standards set by the 1954 trial became a template for future drug and vaccine development, emphasizing transparency, randomization, and large‑scale participation. Although Sabin’s oral polio vaccine later supplanted Salk’s in many countries because of its ease of administration, both formulations together have driven global polio cases from millions to just a few hundred per year.`,
    `Jonas Salk famously refused to patent his discovery, declaring that “the vaccine belongs to the people.” This ethos of open sharing helped accelerate production and distribution worldwide, reinforcing the principle that public health triumphs are most powerful when knowledge is freely exchanged. Today, as the world pushes toward complete eradication of polio, Salk’s legacy reminds us that scientific perseverance, ethical responsibility, and collective action can turn a looming crisis into a lasting victory.`,
  ],
  vocabulary: [
    { word: 'polio', cn: '小儿麻痹症' },
    { word: 'epidemic', cn: '流行病' },
    { word: 'vaccine', cn: '疫苗' },
    { word: 'inactivated', cn: '灭活的' },
    { word: 'clinical trial', cn: '临床试验' },
    { word: 'immunization', cn: '免疫接种' },
    { word: 'herd immunity', cn: '群体免疫' },
  ],
};

export default article;
