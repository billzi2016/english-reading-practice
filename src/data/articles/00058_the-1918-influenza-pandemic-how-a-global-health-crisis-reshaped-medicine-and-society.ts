import type { Article } from '../../types/index.ts';

// 文件意图：维护《The 1918 Influenza Pandemic: How a Global Health Crisis Reshaped Medicine and Society》这篇文章的完整内容，供文章自动索引入口读取。
// 维护重点：只改本文内容；文章顺序由文件名前缀 00058 控制，不要手写上一篇/下一篇。
const article: Article = {
  id: '00058',
  slug: 'the-1918-influenza-pandemic-how-a-global-health-crisis-reshaped-medicine-and-society',
  title: 'The 1918 Influenza Pandemic: How a Global Health Crisis Reshaped Medicine and Society',
  subtitle: 'A deep dive into the “Spanish Flu” and its lasting impact on health systems.',
  summary: 'Explore how the 1918 influenza outbreak transformed medical research, public‑health policy, and everyday life worldwide.',
  category: 'history',
  difficulty: 'intermediate',
  readingMinutes: 5,
  paragraphs: [
    `When the first wave of the <span class="vocab" data-cn="大流行病">pandemic</span> struck in early 1918, most physicians still believed that influenza was a simple seasonal illness. The virus spread from military camps in the United States to crowded cities across Europe and Asia, exploiting the massive troop movements of World War I. Within months, an estimated 500 million people—about one‑third of the world’s population—had been infected, and mortality surged especially among otherwise healthy young adults.`,
    `Scientists later discovered that the culprit was a novel <span class="vocab" data-cn="动物源的">zoonotic</span> influenza A (H1N1) virus that jumped from birds to humans. This “bird‑flu” origin explained why many people had no pre‑existing immunity, leading to an unprecedented <span class="vocab" data-cn="死亡率">mortality</span> rate of roughly 2 % globally. The tragedy forced virologists to confront the limits of their knowledge and sparked a new era of systematic virus isolation and classification.`,
    `One immediate response was the establishment of modern <span class="vocab" data-cn="流行病学">epidemiology</span> practices. Health officials began collecting detailed case reports, mapping infection curves, and publishing weekly bulletins that highlighted patterns of spread. These efforts laid the groundwork for statistical models still used today to predict disease trajectories, such as the basic reproduction number (R₀).`,
    `Because no effective antiviral drugs existed, physicians turned to <span class="vocab" data-cn="康复期血清疗法">convalescent serum</span>—blood collected from recovered patients—to treat the severely ill. While results were mixed, the practice demonstrated that passive immunity could be harnessed in emergencies, a concept later refined during the 1950s polio vaccine campaigns and again during the COVID‑19 crisis.`,
    `The pandemic also reshaped <span class="vocab" data-cn="公共卫生">public health</span> infrastructure. Cities like Philadelphia and San Francisco instituted early forms of <span class="vocab" data-cn="社交距离">social distancing</span>, closing schools, theaters, and churches to curb transmission. These measures, though controversial at the time, proved that non‑pharmaceutical interventions could flatten epidemic curves—a lesson echoed in modern pandemic plans.`,

    `In the aftermath, governments recognized the need for permanent disease‑surveillance agencies. The United States created the Division of Infectious Diseases within the Public Health Service, while Britain expanded its Ministry of Health. These bodies coordinated research funding, standardized reporting, and eventually supported the development of the first influenza vaccines in the 1940s.`,

    `Beyond medicine, the 1918 crisis left deep cultural scars. Literature, cinema, and visual arts began to portray illness as a societal threat rather than an individual misfortune. The phrase “the great pandemic” entered public consciousness, influencing everything from workplace policies to urban planning, with designers prioritizing ventilation and crowd control in public buildings. In this way, the 1918 influenza not only reshaped scientific practice but also rewrote how societies think about collective health risks.`,
  ],
  vocabulary: [
    { word: 'pandemic', cn: '大流行病' },
    { word: 'zoonotic', cn: '动物源的' },
    { word: 'mortality', cn: '死亡率' },
    { word: 'epidemiology', cn: '流行病学' },
    { word: 'convalescent serum', cn: '康复期血清疗法' },
    { word: 'public health', cn: '公共卫生' },
    { word: 'social distancing', cn: '社交距离' },
  ],
};

export default article;
